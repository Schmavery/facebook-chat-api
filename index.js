"use strict";

var utils = require("./utils");
var cheerio = require("cheerio");
var log = require("npmlog");
var fs = require("fs");

function buildAPI(loginOptions, html, jar) {
  var maybeCookie = jar.getCookies("https://www.facebook.com").filter(function(val) {
    return val.cookieString().split("=")[0] === "c_user";
  });

  if(maybeCookie.length === 0) {
    throw {error: "Error retrieving userID. This can be caused by a lot of things, including getting blocked by Facebook for logging in from an unknown location. Try logging in with a browser to verify."};
  }

  var userID = maybeCookie[0].cookieString().split("=")[1].toString();
  log.info("Logged in");

  var globalOptions = {
    selfListen: false,
    listenEvents: false
  };

  var clientID = (Math.random() * 2147483648 | 0).toString(16);

  // All data available to api functions
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
      return jar
        .getCookies("https://www.facebook.com")
        .concat(jar.getCookies("https://facebook.com"));
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
    'getUrl',
    'logout',
  ];

  var defaultFuncs = utils.makeDefaults(html, userID);

  // Load all api functions in a loop
  apiFuncNames.map(function(v) {
    api[v] = require('./src/' + v)(defaultFuncs, api, ctx);
  });

  return [ctx, defaultFuncs, api];
}

function makeLogin(jar, email, password, loginOptions, callback) {
  return function(res) {
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
    // we used to get a bunch of cookies in the headers of the response of the
    // request, but FB changed and they now send those cookies inside the JS.
    // They run the JS which then injects the cookies in the page.
    // The "solution" is to parse through the html and find those cookies
    // which happen to be conveniently indicated with a _js_ in front of their
    // variable name.
    //
    // ---------- Very Hacky Part Starts -----------------
    var willBeCookies = html.split("\"_js_");
    willBeCookies.slice(1).map(function(val) {
      var cookieData = JSON.parse("[\"" + utils.getFrom(val, "", "]") + "]");
      jar.setCookie(utils.formatCookie(cookieData), "https://www.facebook.com");
    });
    // ---------- Very Hacky Part Ends -----------------

    log.info("Logging in...");

    return utils
      .post("https://www.facebook.com/login.php?login_attempt=1", jar, form)
      .then(utils.saveCookies(jar))
      .then(function(res) {
        var headers = res.headers;
        if (!headers.location) {
          throw {error: "Wrong username/password."};
        }

        // This means the account has login approvals turned on.
        if (headers.location.indexOf('https://www.facebook.com/checkpoint/') !== -1) {
          var nextURL = 'https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php';

          return utils
            .get(headers.location, jar)
            .then(utils.saveCookies(jar))
            .then(function(res) {
              var html = res.body;
              // Make the form in advance which will contain the fb_dtsg and nh
              var $ = cheerio.load(html);
              var arr = [];
              $("form input").map(function(i, v){
                arr.push({val: $(v).val(), name: $(v).attr("name")});
              });

              arr = arr.filter(function(v) {
                return v.val && v.val.length;
              });

              var form = utils.arrToForm(arr);

              throw {
                error: 'login-approval',
                callback: function(code) {
                  form.approvals_code = code;
                  form['submit[Continue]'] = 'Continue';
                  console.log(form);
                  return utils
                    .post(nextURL, jar, form)
                    .then(utils.saveCookies(jar))
                    .then(function() {
                      // Use the same form (safe I hope)
                      form.name_action_selected = 'save_device';

                      return utils
                        .post(nextURL, jar, form)
                        .then(utils.saveCookies(jar));
                    })
                    .then(function(res) {
                      var headers = res.headers;

                      if (!headers.location && res.body.indexOf('Review Recent Login') === -1) {
                        throw {error: "Something went wrong with login approvals."};
                      }

                      var appState = jar
                        .getCookies("https://www.facebook.com")
                        .concat(jar.getCookies("https://facebook.com"));

                      // Simply call loginHelper because all it needs is the jar
                      // and will then complete the login process
                      return loginHelper(appState, email, password, loginOptions, callback);
                    });
                }
              }
            });
        }

        return utils
          .get('https:\/\/www.facebook.com\/home.php', jar)
          .then(utils.saveCookies(jar));
      });
  };
}

function loginHelper(appState, email, password, loginOptions, callback) {
  var mainPromise = null;
  var jar = utils.getJar();

  // If we're given an appState we loop through it and save each cookie
  // back into the jar.
  if(appState != null) {
    appState.map(function(c) {
      var str = c.key + "=" + c.value + "; expires=" + c.expires + "; domain=" + c.domain + "; path=" + c.path + ";";
      jar.setCookie(str, "http://" + c.domain);
    });

    // Load the main page.
    mainPromise = utils
      .get('https://www.facebook.com/home.php', jar)
      .then(utils.saveCookies(jar));
  } else {
    // Open the main page, then we login with the given credentials and finally
    // load the main page again (it'll give us some IDs that we need)
    mainPromise = utils
      .get("https://www.facebook.com/", null)
      .then(utils.saveCookies(jar))
      .then(makeLogin(jar, email, password, loginOptions, callback))
      .then(function() {
        return utils
          .get('https:\/\/www.facebook.com\/home.php', jar)
          .then(utils.saveCookies(jar));
      });
  }

  var ctx = null;
  var defaultFuncs = null;
  var api = null;

  mainPromise = mainPromise
    .then(function(res) {
      var html = res.body;

      fs.writeFileSync('test.html', html);

      // Login review
      if (html.indexOf('Review Recent Login') !== -1) {
        // Make the form in advance which will contain the fb_dtsg and nh
        var $ = cheerio.load(html);
        var arr = [];
        $("form input").map(function(i, v){
          arr.push({val: $(v).val(), name: $(v).attr("name")});
        });

        arr = arr.filter(function(v) {
          return v.val && v.val.length;
        });

        var form = utils.arrToForm(arr);
        var nextURL = 'https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php';
        return utils
          .post(nextURL, jar, form)
          .then(utils.saveCookies(jar))
          .then(function(res) {
            function cb(yesOrNo) {
              form['submit[' + yesOrNo + ']'] = yesOrNo;
              // console.log(form);
              return utils
                .post(nextURL, jar, form)
                .then(utils.saveCookies(jar))
                .then(function() {
                  // Use the same form (safe I hope)
                  form.name_action_selected = 'save_device';

                  return utils
                    .post(nextURL, jar, form)
                    .then(utils.saveCookies(jar));
                })
                .then(function(res) {
                  var headers = res.headers;

                  if (!headers.location && res.body.indexOf('Review Recent Login') === -1) {
                    throw {error: "Something went wrong with login approvals."};
                  }

                  var appState = jar
                    .getCookies("https://www.facebook.com")
                    .concat(jar.getCookies("https://facebook.com"));

                  // Simply call loginHelper because all it needs is the jar
                  // and will then complete the login process
                  return loginHelper(appState, email, password, loginOptions, callback);
                });
            }

            throw {
              error: 'login-checks',
              yes: cb.bind(null, 'This Is Okay'),
              // no: cb.bind(null, 'This Is Not Okay'),
              no: function() {
                log.error('not implemented yet');
              },
            };
          });
      }

      var stuff = buildAPI(loginOptions, html, jar);
      ctx = stuff[0];
      defaultFuncs = stuff[1];
      api = stuff[2];

      log.info('Request to pull 1');
      var form = {
        channel : 'p_' + ctx.userID,
        seq : 0,
        partition : -2,
        clientid : ctx.clientID,
        viewer_uid : ctx.userID,
        uid : ctx.userID,
        state : 'active',
        idle : 0,
        cap : 8,
        msgs_recv:0
      };

      return utils
        .get("https://0-edge-chat.facebook.com/pull", ctx.jar, form)
        .then(utils.parseResponse);
    })
    .then(function(resData) {
      if (resData.t !== 'lb') throw {error: "Bad response from pull 1"};

      var form = {
        channel : 'p_' + ctx.userID,
        seq : 0,
        partition : -2,
        clientid : ctx.clientID,
        viewer_uid : ctx.userID,
        uid : ctx.userID,
        state : 'active',
        idle : 0,
        cap : 8,
        msgs_recv:0,
        sticky_token: resData.lb_info.sticky,
        sticky_pool: resData.lb_info.pool,
      };

      log.info("Request to pull 2");
      return utils
        .get("https://0-edge-chat.facebook.com/pull", ctx.jar, form);
    })
    .then(function() {
      var form = {
        'client' : 'mercury',
        'folders[0]': 'inbox',
        'last_action_timestamp' : '0'
      };
      log.info("Request to thread_sync");

      return defaultFuncs
        .post("https://www.facebook.com/ajax/mercury/thread_sync.php", ctx.jar, form)
        .then(utils.saveCookies(ctx.jar));
    });

  // given a pageID we log in as a page
  if (loginOptions.pageID) {
    mainPromise = mainPromise
      .then(function() {
        return utils
            .get('https://www.facebook.com/' + ctx.globalOptions.pageID + '/messages/?section=messages&subsection=inbox', ctx.jar);
      })
      .then(function(resData) {
        var url = utils.getFrom(resData.body, 'window.location.replace("https:\\/\\/www.facebook.com\\', '");').split('\\').join('');
        url = url.substring(0, url.length - 1);
        return utils.get('https://www.facebook.com' + url, ctx.jar);
      });
  }

  // At the end we call the callback or catch an exception
  mainPromise
    .then(function() {
      log.info('Done logging in.');
      return callback(null, api);
    })
    .catch(function(e) {
      log.error("Error in login:", e.error || e);
      callback(e);
    });
}

function login(loginData, options, callback) {
  if(utils.getType(options) === 'Function') {
    callback = options;
    options = {};
  }

  if (options.logLevel != null) {
    log.level = options.logLevel;
  }

  loginHelper(loginData.appState, loginData.email, loginData.password, options, callback);
}

module.exports = login;
