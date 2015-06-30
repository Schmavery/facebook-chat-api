/*jslint node: true */
"use strict";

var utils = require("./utils");
var cheerio = require("cheerio");
var log = require("npmlog");
var time = require("./time");
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

      $("#login_form input").map(function(i, v){
        arr.push({val: $(v).val(), name: $(v).attr("name")});
      });

      arr = arr.filter(function(v) {
        return v.val && v.val.length;
      });

      var form = utils.arrToForm(arr);
      form.email = email;
      form.pass = password;
      form.default_persistent = '1';

      log.info("Logging in...");
      return [utils.post("https://www.facebook.com/login.php?login_attempt=1", jar, form).then(utils.saveCookies(jar)), jar];
    },
    function loadMainPage(res, jar) {
      var html = res.body;
      var headers = res.headers;

      if (!headers.location) return callback({error: "Wrong username/password."});
      return [utils.get(headers.location, jar), jar];
    },
    function nullStateReq(res, jar) {
      var html = res.body;
      // if(err) return callback(err);
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

      api.setOptions = function setOptions(options){
        if (options.hasOwnProperty('logLevel')) {
          log.level = options.logLevel;
          globalOptions.logLevel = options.logLevel;
        }

        if (options.hasOwnProperty('selfListen')) {
          globalOptions.selfListen = options.selfListen;
        }

        if(options.hasOwnProperty('listenEvents')) {
          globalOptions.listenEvents = options.listenEvents;
        }

        if(options.hasOwnProperty('pageId')) {
          globalOptions.pageId = options.pageId;
        }
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
        'addUserToGroup'];

      var mergeWithDefaults = utils.makeMergeWithDefaults(html, userId);

      // Load all api functions in a loop
      apiFuncNames.map(function(v) {
        api[v] = require('./src/' + v)(mergeWithDefaults, api, ctx);
      });

      time.initialize();

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
      time.reportPullSent();
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
      time.reportPullReturned();
      form.wtc = time.doSerialize();
      if (resData.t !== 'lb') throw new Error("Bad response from pull 1");

      form.sticky_token = resData.lb_info.sticky;
      form.sticky_pool = resData.lb_info.pool;

      log.info("Request to pull 2");
      return [utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form), ctx, mergeWithDefaults, api];
    },
    function syncReq(res, ctx, mergeWithDefaults, api) {
      time.reportPullReturned();
      // form.wtc = time.doSerialize();
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
    function graphAPIReadReq(res, ctx, mergeWithDefaults, api) {
      var graphAPIForm = mergeWithDefaults({
        "app_id":"145634995501895",
        "redirect_uri":"https://www.facebook.com/connect/login_success.html",
        "display":"popup",
        "access_token":"",
        "sdk":"",
        "from_post":"1",
        "public_info_nux":"1",
        "private":"",
        "login":"",
        "read":"user_about_me,user_actions.books,user_actions.fitness,user_actions.music,user_actions.news,user_actions.video,user_birthday,user_education_history,user_events,user_friends,user_games_activity,user_groups,user_hometown,user_likes,user_location,user_managed_groups,user_photos,user_posts,user_relationship_details,user_relationships,user_religion_politics,user_status,user_tagged_places,user_videos,user_website,user_work_history,public_profile,baseline",
        "write": "",
        "readwrite":"",
        "extended": "",
        "social_confirm":"",
        "confirm":"",
        "seen_scopes":"user_about_me,user_actions.books,user_actions.fitness,user_actions.music,user_actions.news,user_actions.video,user_birthday,user_education_history,user_events,user_friends,user_games_activity,user_groups,user_hometown,user_likes,user_location,user_managed_groups,user_photos,user_posts,user_relationship_details,user_relationships,user_religion_politics,user_status,user_tagged_places,user_videos,user_website,user_work_history,public_profile,baseline",
        "auth_type":"",
        "auth_token":"",
        "auth_nonce":"",
        "default_audience":"",
        "ref":"Default",
        "return_format":"access_token",
        "domain":"",
        "sso_device":"",
        "sheet_name":"initial",
        "__CONFIRM__":"1",
      });
      log.info("Getting read access.");
      return [utils.post("https://www.facebook.com/v2.3/dialog/oauth/read", ctx.jar, graphAPIForm), ctx, mergeWithDefaults, api, graphAPIForm];
    },
    function graphAPIWriteReq(res, ctx, mergeWithDefaults, api, graphAPIForm) {
      graphAPIForm.read = "";
      graphAPIForm.write = "publish_actions";
      graphAPIForm.seen_scopes = graphAPIForm.write;
      graphAPIForm["audience[0][value]"] = 40;
      log.info("Getting write access.");
      return [utils.post("https://www.facebook.com/v2.3/dialog/oauth/write", ctx.jar, graphAPIForm), ctx, mergeWithDefaults, api, graphAPIForm];
    },
    function graphAPIExtendedReq(res, ctx, mergeWithDefaults, api, graphAPIForm) {
      graphAPIForm.write = "";
      graphAPIForm.extended = "ads_management,ads_read,manage_notifications,manage_pages,publish_pages,read_insights,read_page_mailboxes,rsvp_event";
      graphAPIForm.seen_scopes = graphAPIForm.extended;
      graphAPIForm["audience[0][value]"] = "";
      log.info("Getting extended access.");
      return [utils.post("https://www.facebook.com/v2.3/dialog/oauth/extended", ctx.jar, graphAPIForm).then(utils.parseResponse), ctx, mergeWithDefaults, api];
    },
    function almostDone(resData, ctx, mergeWithDefaults, api) {
      ctx.access_token = -1;
      try {
        var tokenArray = resData.jsmods.require;
        for (var i = 0; i < tokenArray.length; i++){
          if (tokenArray[i][3][0].indexOf("access_token=") != -1){
            ctx.access_token = tokenArray[i][3][0].split("access_token=")[1].split("&")[0];
            break;
          }
        }
      } catch (e) {
        ctx.access_token = -1;
      }
      if (ctx.access_token === -1){
        log.error("Error retrieving access token, continuing...");
      }

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
  .catch(function(err) {
    log.error(err);
    return callback(err);
  });
}

function login(loginData, options, callback) {
  if(typeof options === 'function') {
    callback = options;
    options = {};
  }

  return _login(loginData.email, loginData.password, options, callback);
}

module.exports = login;
