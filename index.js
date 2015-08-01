/*jslint node: true */
"use strict";

var utils = require("./utils");
var cheerio = require("cheerio");
var log = require("npmlog");
var bluebird = require("bluebird");

function buildAPI(loginOptions, html, jar) {
  var maybeCookie = jar.getCookies("https://www.facebook.com").filter(function(val) {
    return val.cookieString().split("=")[0] === "c_user";
  });

  if(maybeCookie.length === 0) throw new Error("Error retrieving userID. This can be caused by a lot of things, including getting blocked by Facebook for logging in from an unknown location. Try logging in with a browser to verify.");

  var userID = maybeCookie[0].cookieString().split("=")[1].toString();
  log.info("Logged in");

  var globalOptions = {
    selfListen: false,
    listenEvents: false
  };

  // All data available to api functions
  var clientID = (Math.random()*2147483648|0).toString(16);
  var ctx = {
    userID: userID,
    jar: jar,
    clientID: clientID,
    globalOptions: globalOptions,
    access_token: 'NONE'
  };

  var api = {
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

  var apiFuncNames = [
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

  var defaultFuncs = utils.makeDefaults(html, userID);

  // Load all api functions in a loop
  apiFuncNames.map(function(v) {
    api[v] = require('./src/' + v)(defaultFuncs, api, ctx);
  });

  return [ctx, defaultFuncs, api];
}


var initialLogin = [
  function getLoginForm(email, password, jar, loginOptions) {
    var jar = utils.getJar();
    return [utils.get("https://www.facebook.com/", null).then(utils.saveCookies(jar)), email, password, jar, loginOptions];
  },
  function loginReq(res, email, password, jar, loginOptions) {
    var html = res.body;
    var $ = cheerio.load(html);
    var arr = [];

    // This will be empty, but just to be sure we leave it
    $("#login_form input").map(function(i, v){
      arr.push({val: $(v).val(), name: $(v).attr("name")});
    });

    arr = arr.filter(function(v) {
      return v.val && v.val.length;
    });

    var form = utils.arrToForm(arr);
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
    var willBeCookies = html.split("\"_js_");
    willBeCookies.slice(1).map(function(val) {
      var cookieData = JSON.parse("[\"" + utils.getFrom(val, "", "]") + "]");
      jar.setCookie(utils.formatCookie(cookieData), "https://www.facebook.com");
    });
    // ---------- Very Hacky Part Ends -----------------

    log.info("Logging in...");
    return [utils.post("https://www.facebook.com/login.php?login_attempt=1", jar, form).then(utils.saveCookies(jar)), jar, loginOptions];
  },
  function loadMainPage(res, jar, loginOptions) {
    var html = res.body;
    var headers = res.headers;

    if (!headers.location) return callback({error: "Wrong username/password."});

    return [utils.get('https:\/\/www.facebook.com\/home.php', jar).then(utils.saveCookies(jar)), jar, loginOptions];
  }
];

var middle = [
  function firstPullReq(res, jar, loginOptions) {
    var html = res.body;

    var stuff = buildAPI(loginOptions, html, jar);
    var ctx = stuff[0];
    var defaultFuncs = stuff[1];
    var api = stuff[2];

    log.info('Request to pull 1');
    var form = {
      'channel' : 'p_' + ctx.userID,
      'seq' : 0,
      'partition' : -2,
      'clientid' : ctx.clientID,
      'viewer_uid' : ctx.userID,
      'uid' : ctx.userID,
      'state' : 'active',
      'idle' : 0,
      'cap' : 8,
      'msgs_recv':0
    };
    return [utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form).then(utils.parseResponse), ctx, defaultFuncs, api, form];
  },
  function secondPullReq(resData, ctx, defaultFuncs, api, form) {
    if (resData.t !== 'lb') throw new Error("Bad response from pull 1");

    form.sticky_token = resData.lb_info.sticky;
    form.sticky_pool = resData.lb_info.pool;

    log.info("Request to pull 2");
    return [utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form), ctx, defaultFuncs, api];
  },
  function threadSyncReq(res, ctx, defaultFuncs, api) {
    var form = {
      'client' : 'mercury',
      'folders[0]': 'inbox',
      'last_action_timestamp' : '0'
    };
    log.info("Request to thread_sync");
    return [defaultFuncs.post("https://www.facebook.com/ajax/mercury/thread_sync.php", ctx.jar, form).then(utils.saveCookies(ctx.jar)), ctx, defaultFuncs, api];
  }
];

var pageLogin = [
  function almostDone(resData, ctx, defaultFuncs, api) {
    if(!ctx.globalOptions.pageID) return [null, ctx, defaultFuncs, api];

    // Return a promise maybe?
    return [utils.get('https://www.facebook.com/'+ctx.globalOptions.pageID+'/messages/?section=messages&subsection=inbox', ctx.jar), ctx, defaultFuncs, api];
  },
  function maybePageLogin(resData, ctx, defaultFuncs, api) {
    if(!resData) return [null, api];

    var url = utils.getFrom(resData.body, 'window.location.replace("https:\\/\\/www.facebook.com\\', '");').split('\\').join('');
    url = url.substring(0, url.length - 1);
    return [utils.get('https://www.facebook.com' + url, ctx.jar), ctx, defaultFuncs, api];
  }
];

function _login(appState, email, password, loginOptions, callback) {
  var loginProcess = [];

  if(appState != null) {
    var jar = utils.getJar();
    appState.cookies.map(function(c) {
      var str = c.key + "=" + c.value + "; expires=" + c.expires + "; domain=" + c.domain + "; path=" + c.path + ";";
      jar.setCookie(str, "http://" + c.domain);
    });

    // Send default base function
    loginProcess.push(function() {
      return [utils.get('https:\/\/www.facebook.com\/home.php', jar).then(utils.saveCookies(jar)), jar, loginOptions];
    });
  } else {
    // Send default base function
    loginProcess.push(function() {
      return [email, password, jar, loginOptions];
    });
    loginProcess = loginProcess.concat(initialLogin);
  }

  loginProcess = loginProcess.concat(middle);

  if (loginOptions.pageId) {
    loginProcess = loginProcess.concat(pageLogin);
  }

  loginProcess.push(function done(resData, ctx, defaultFuncs, api) {
    log.info("Done loading.");
    return [api];
  });

  bluebird.reduce(loginProcess, function(prev, cur) {
    return bluebird.all(prev).then(function(prevResolved) {
      return cur.apply(null, prevResolved);
    });
  }, [])
  .then(function(api) {
    callback(null, api[0]);
  })
  .catch(function(err) {
    log.error(err);
    return callback(err);
  });
}

function login(loginData, options, callback) {
  if(utils.getType(options) === 'Function') {
    callback = options;
    options = {};
  }

  if (options.logLevel != null) log.level = options.logLevel;
  return _login(loginData.appState, loginData.email, loginData.password, options, callback);
}

module.exports = login;
