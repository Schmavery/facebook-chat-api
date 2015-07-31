/*jslint node: true */
"use strict";

var utils = require("./utils");

var cheerio = require("cheerio");
var log = require("npmlog");
var bluebird = require("bluebird");

function _login(email, password, loginOptions, callback) {
  log.info("Getting login form data");

  // Todo add catch/finally or error handlers
  // I'm ignoring them right now just because I need brain power for the rest
  var loginProcess = [
    function getLoginForm() {
      var jar = utils.getJar();
      return [utils.get("https://www.facebook.com/", null).then(utils.saveCookies(jar)), email, password, jar];
    },
    function loginReq(res, email, password, jar) {
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
      return [utils.post("https://www.facebook.com/login.php?login_attempt=1", jar, form).then(utils.saveCookies(jar)), jar];
    },
    function loadMainPage(res, jar) {
      var html = res.body;
      var headers = res.headers;

      if (!headers.location) return callback({error: "Wrong username/password."});
      return [utils.get(headers.location, jar), jar];
    },
    function redirect(res, jar) {
      return [utils.get('https:\/\/www.facebook.com\/home.php', jar).then(utils.saveCookies(jar)), jar];
    },
    function nullStateReq(res, jar) {
      var html = res.body;

      var maybeCookie = jar.getCookies("https://www.facebook.com").filter(function(val) {
        return val.cookieString().split("=")[0] === "c_user";
      });

      if(maybeCookie.length === 0) return callback(new Error("Error retrieving userId. This can be caused by a lot of things, including getting blocked by Facebook for logging in from an unknown location. Try logging in with a browser to verify."));

      var userId = maybeCookie[0].cookieString().split("=")[1];
      log.info("Logged in");

      var api = {};
      var globalOptions = {
        selfListen: false,
        listenEvents: false
      };
      var access_token = 'NONE';

      api.setOptions = function setOptions(options) {
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
            case 'pageId':
              globalOptions.pageId = options.pageId;
              break;
            case 'updatePresence':
              globalOptions.updatePresence = options.updatePresence;
              break;
            default:
              log.warn('Unrecognized option given to setOptions', key);
              break;
          }
        });
      };

      api.setOptions(loginOptions);

      // All data available to api functions

      var clientid = (Math.random()*2147483648|0).toString(16);
      var ctx = {
        userId: userId,
        jar: jar,
        clientid: clientid,
        globalOptions: globalOptions,
        access_token: access_token
      };

      var apiFuncNames = [
        'listen',
        'getUserId',
        'sendDirectMessage',
        'sendDirectSticker',
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
        'getCurrentUserId',
        'uploadAttachment',
        'deleteMessage',
        'deleteThread',
        'archiveThread',
        'unarchiveThread'];

      var mergeWithDefaults = utils.makeMergeWithDefaults(html, userId);

      // Load all api functions in a loop
      apiFuncNames.map(function(v) {
        api[v] = require('./src/' + v)(mergeWithDefaults, api, ctx);
      });

      var form2 = mergeWithDefaults({
        'grammar_version' : utils.getFrom(html, "grammar_version\":\"", "\"")
      });

      log.info("Initial requests...");
      log.info("Request to null_state");
      return [utils.get("https://www.facebook.com/ajax/browse/null_state.php", jar, form2), ctx, mergeWithDefaults, api];
    },
    function reconnectReq(res, ctx, mergeWithDefaults, api) {
      var html = res.body;
      log.info("Request to reconnect");
      var form3 = mergeWithDefaults({
        reason: 6,
      });
      return [utils.get("https://www.facebook.com/ajax/presence/reconnect.php", ctx.jar, form3).then(utils.saveCookies(ctx.jar)), ctx, mergeWithDefaults, api];
    },
    function firstPullReq(res, ctx, mergeWithDefaults, api) {
      log.info('Request to pull 1');
      var form = {
        'channel' : 'p_' + ctx.userId,
        'seq' : 0,
        'partition' : -2,
        'clientid' : ctx.clientid,
        'viewer_uid' : ctx.userId,
        'uid' : ctx.userId,
        'state' : 'active',
        'idle' : 0,
        'cap' : 8,
        'msgs_recv':0
      };
      return [utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form).then(utils.parseResponse), ctx, mergeWithDefaults, api, form];
    },
    function secondPullReq(resData, ctx, mergeWithDefaults, api, form) {
      if (resData.t !== 'lb') throw new Error("Bad response from pull 1");

      form.sticky_token = resData.lb_info.sticky;
      form.sticky_pool = resData.lb_info.pool;

      log.info("Request to pull 2");
      return [utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form), ctx, mergeWithDefaults, api];
    },
    function syncReq(res, ctx, mergeWithDefaults, api) {
      var form = mergeWithDefaults({
        'lastSync' : ~~(Date.now()/1000 - 60),
      });
      log.info("Request to sync");
      return [utils.get("https://www.facebook.com/notifications/sync", ctx.jar, form).then(utils.saveCookies(ctx.jar)), ctx, mergeWithDefaults, api];
    },
    function threadSyncReq(res, ctx, mergeWithDefaults, api) {
      var form = mergeWithDefaults({
        'client' : 'mercury',
        'folders[0]': 'inbox',
        'last_action_timestamp' : '0'
      });
      log.info("Request to thread_sync");
      return [utils.post("https://www.facebook.com/ajax/mercury/thread_sync.php", ctx.jar, form).then(utils.saveCookies(ctx.jar)), ctx, mergeWithDefaults, api];
    },
    function almostDone(resData, ctx, mergeWithDefaults, api) {
      if(!ctx.globalOptions.pageId) return [null, ctx, mergeWithDefaults, api];

      // Return a promise maybe?
      return [utils.get('https://www.facebook.com/'+ctx.globalOptions.pageId+'/messages/?section=messages&subsection=inbox', ctx.jar), ctx, mergeWithDefaults, api];
    },
    function maybePageLogin(resData, ctx, mergeWithDefaults, api) {
      if(!resData) return [null, api];

      var url = utils.getFrom(resData.body, 'window.location.replace("https:\\/\\/www.facebook.com\\', '");').split('\\').join('');
      url = url.substring(0, url.length - 1);
      return [utils.get('https://www.facebook.com' + url, ctx.jar), api];
    },
    function done(resData, api) {
      log.info("Done loading.");
      return [api];
    }
  ];

  bluebird.reduce(loginProcess, function(prev, cur) {
    return bluebird.all(prev).then(function(prevResolved) {
      return cur.apply(null, prevResolved);
    });
  }, [])
  .then(function(api) {
    callback(null, api[0]);
  })
  // .catch(function(err) {
  //   log.error(err);
  //   return callback(err);
  // });
}

function login(loginData, options, callback) {
  if(typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (options.logLevel) log.level = options.logLevel;
  return _login(loginData.email, loginData.password, options, callback);
}

module.exports = login;
