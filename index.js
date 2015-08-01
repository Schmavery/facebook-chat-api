import utils from './utils';
import cheerio from "cheerio";
import log from "npmlog";

function makeAPI(maybeClientID, loginOptions, html, jar) {
  const maybeCookie = jar.getCookies("https://www.facebook.com").filter(function(val) {
    return val.cookieString().split("=")[0] === "c_user";
  });

  if(maybeCookie.length === 0) throw new Error("Error retrieving userID. This can be caused by a lot of things, including getting blocked by Facebook for logging in from an unknown location. Try logging in with a browser to verify.");

  const userID = maybeCookie[0].cookieString().split("=")[1].toString();
  log.info("Logged in");

  const globalOptions = {
    selfListen: false,
    listenEvents: false
  };

  // All data available to api functions
  const clientID = maybeClientID || (Math.random()*2147483648|0).toString(16);
  const ctx = {
    userID: userID,
    jar: jar,
    clientID: clientID,
    globalOptions: globalOptions,
    access_token: 'NONE'
  };

  let api = {
    setOptions: function setOptions(options) {
      Object.keys(options).map(function(key) {
        switch (key) {
          case 'logLevel':
            log.level = options.logLevel;
            globalOptions.logLevel = options.logLevel;
            break;
          case 'selfListen':
            globalOptions.selfListen = options.selfListen;
            break;
          case 'listenEvents':
            globalOptions.listenEvents = options.listenEvents;
            break;
          case 'pageID':
            globalOptions.pageID = options.pageID.toString();
            break;
          case 'updatePresence':
            globalOptions.updatePresence = options.updatePresence;
            break;
          default:
            log.warn('Unrecognized option given to setOptions', key);
            break;
        }
      });
    },
    getAppState: function getAppState() {
      return {
        cookies: jar.getCookies("https://www.facebook.com").concat(jar.getCookies("https://facebook.com")),
        clientID: clientID,
      }
    },
  };

  api.setOptions(loginOptions);

  const apiFuncNames = [
    'listen',
    'getUserID',
    'sendSticker',
    'setTitle',
    'getThreadList',
    'markAsRead',
    'sendMessage',
    'getAccessToken',
    'getFriendsList',
    'getUserInfo',
    'removeUserFromGroup',
    'addUserToGroup',
    'sendTypingIndicator',
    'getCurrentUserID',
    'uploadAttachment',
    'deleteMessage',
    'deleteThread',
    'archiveThread',
    'unarchiveThread',
    'searchForThread',
  ];

  const defaultFuncs = utils.makeDefaults(html, userID);

  // Load all api functions in a loop
  apiFuncNames.map(function(v) {
    api[v] = require('./src/' + v)(defaultFuncs, api, ctx);
  });

  return [ctx, defaultFuncs, api];
}

async function doLogin(jar, email, password) {
  const {body: html} = await utils.get("https://www.facebook.com/", null).then(utils.saveCookies(jar));

  const $ = cheerio.load(html);
  let arr = [];

  // This will be empty, but just to be sure we leave it
  $("#login_form input").map(function(i, v){
    arr.push({val: $(v).val(), name: $(v).attr("name")});
  });

  arr = arr.filter(function(v) {
    return v.val && v.val.length;
  });

  let form = utils.arrToForm(arr);
  form.lsd = utils.getFrom(html, "[\"LSD\",[],{\"token\":\"", "\"}")
  form.lgndim = new Buffer("{\"w\":1440,\"h\":900,\"aw\":1440,\"ah\":834,\"c\":24}").toString('base64');
  form.email = email;
  form.pass = password;
  form.default_persistent = '0';
  form.lgnrnd = utils.getFrom(html, "name=\"lgnrnd\" value=\"", "\"");
  form.locale = 'en_US';
  form.timezone = '240';
  form.lgnjs = ~~(Date.now() / 1000);


  // Getting cookies from the HTML page... (kill me now plz)
  // ---------- Very Hacky Part Starts -----------------
  const willBeCookies = html.split("\"_js_");
  willBeCookies.slice(1).map(function(val) {
    const cookieData = JSON.parse("[\"" + utils.getFrom(val, "", "]") + "]");
    jar.setCookie(utils.formatCookie(cookieData), "https://www.facebook.com");
  });
  // ---------- Very Hacky Part Ends -----------------

  log.info("Logging in...");
  const {headers: {location}} = await utils.post("https://www.facebook.com/login.php?login_attempt=1", jar, form).then(utils.saveCookies(jar));
  if (!location) throw new ("Wrong username/password.");
}

async function doFirstPull(jar, userID, clientID) {
  log.info('Request to pull 1');
  let form = {
    'channel' : 'p_' + userID,
    'seq' : 0,
    'partition' : -2,
    'clientid' : clientID,
    'viewer_uid' : userID,
    'uid' : userID,
    'state' : 'active',
    'idle' : 0,
    'cap' : 8,
    'msgs_recv':0
  };

  const firstPull = await utils.get("https://0-edge-chat.facebook.com/pull", jar, form).then(utils.parseResponse);
  if (firstPull.t !== 'lb') throw new Error("Bad response from pull 1");
}

async function doThreadSync(jar, defaultFuncs) {
  const form = {
    'client' : 'mercury',
    'folders[0]': 'inbox',
    'last_action_timestamp' : '0'
  };
  log.info("Request to thread_sync");
  await defaultFuncs.post("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form).then(utils.saveCookies(jar));
}

async function doPageLogin(jar, pageID) {
  const pageData = await utils.get('https://www.facebook.com/' + pageID + '/messages/?section=messages&subsection=inbox', jar);

  const url = utils.getFrom(pageData.body, 'window.location.replace("https:\\/\\/www.facebook.com\\', '");').split('\\').join('');

  await utils.get('https://www.facebook.com' + url.substring(0, url.length - 1), jar);
}

async function _login({cookies, clientID}, email, password, loginOptions) {
  let jar = utils.getJar();
  // If we're given an appState with cookies, we can skip the login and save
  // the cookies
  if(cookies) {
    cookies.map(function(c) {
      const str = c.key + "=" + c.value + "; expires=" + c.expires + "; domain=" + c.domain + "; path=" + c.path + ";";
      jar.setCookie(str, "http://" + c.domain);
    });
  } else {
    // This will get the cookies we need
    await doLogin(jar, email, password);
  }

  // we need this to get cookies I think
  const {body: html} = await utils.get('https:\/\/www.facebook.com\/home.php', jar).then(utils.saveCookies(jar));
  // Boilerplate function to build the API
  const [ctx, defaultFuncs, api] = makeAPI(clientID, loginOptions, html, jar);

  // Those two are still required it seems
  await doFirstPull(jar, ctx.userID, ctx.clientID);
  await doThreadSync(jar, defaultFuncs);

  if (loginOptions.pageID) {
    await doPageLogin(jar, ctx.globalOptions.pageID);
  }

  return api;
}

async function login(loginData, options) {
  if(!options) options = {};

  if (options.logLevel != null) log.level = options.logLevel;
  return await _login(loginData.appState || {}, loginData.email, loginData.password, options);
}

module.exports = login;
