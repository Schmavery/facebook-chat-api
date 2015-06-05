/*jslint node: true */
"use strict";

var utils = require("./utils");
var cheerio = require("cheerio");
var log = require("npmlog");
var fs = require("fs");
var time = require("./time");

function _login(email, password, callback) {
  var jar = utils.getJar();

  log.info("Getting login form data");
  utils.get("https://www.facebook.com/", jar, function(err, res, html) {
    var $ = cheerio.load(html);

    var arr = [];

    $("#login_form input").map(function(i, v){
      arr.push({val: $(v).val(), name: $(v).attr("name")});
    });

    arr = arr.filter(function(v) {
      return v.val && v.val.length;
    });

    res.headers['set-cookie'].map(function(val) {
      jar.setCookie(val, "https://www.facebook.com");
    });
    var form = utils.arrToForm(arr);
    form.email = email;
    form.pass = password;
    form.default_persistent = '1';

    log.info("Logging in...");
    utils.post("https://www.facebook.com/login.php?login_attempt=1", jar, form, function(err, res, html) {
      var cookies = res.headers['set-cookie'] || [];
      cookies.map(function (c) {
        jar.setCookie(c, "https://www.facebook.com");
      });

      if (!res.headers.location) return callback({error: "Wrong username/password."});
      utils.get(res.headers.location, jar, function(err, res, html) {
        if(err) return callback(err);
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
        var access_token = "NONE";

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
        };

        // All data available to api functions

        var clientid = (Math.random()*2147483648|0).toString(16);
        var context = {
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
          'getUserInfo'];

        var mergeWithDefaults = utils.makeMergeWithDefaults(html, userId);

        // Load all api functions in a loop
        apiFuncNames.map(function(v) {
          api[v] = require('./src/' + v)(mergeWithDefaults, api, context);
        });

        time.initialize();

        var form2 = mergeWithDefaults({
          'grammar_version' : utils.getFrom(html, "grammar_version\":\"", "\""),
        });
        log.info("Initial requests...");
        log.info("Request to null_state");
        utils.get("https://www.facebook.com/ajax/browse/null_state.php", jar, form2, function(err, res, html) {
          log.info("Request to reconnect");
          var form3 = mergeWithDefaults({
            reason: 6,
          });
          utils.get("https://www.facebook.com/ajax/presence/reconnect.php", jar, form3, function(err, res, html) {
            var cookies = res.headers['set-cookie'] || [];
            cookies.map(function (c) {
              jar.setCookie(c, "https://www.facebook.com");
            });

            time.reportPullSent();
            log.info("Request to pull 1");
            var form4 = {
              'channel' : "p_" + userId,
              'seq' : '0',
              'partition' : '-2',
              'clientid' : clientid,
              'viewer_uid' : userId,
              'uid' : userId,
              'state' : 'active',
              'format' : 'json',
              'idle' : 0,
              'cap' : '8'
            };
            utils.get("https://0-edge-chat.facebook.com/pull", jar, form4, function(err, res, html) {
              time.reportPullReturned();
              form4.wtc = time.doSerialize();
              var strData = utils.makeParsable(html);
              try {
                var info = JSON.parse(strData);
                form4.sticky_token = info.lb_info.sticky;
                form4.sticky_pool = info.lb_info.pool;
              } catch (e) {
                log.error("ERROR in init --> ",e, strData);
                return callback(e);
              }

              log.info("Request to pull 2");
              utils.get("https://0-edge-chat.facebook.com/pull", jar, form4, function(err, res, html) {

                time.reportPullReturned();
                form4.wtc = time.doSerialize();
                var form5 = mergeWithDefaults({
                  'lastSync' : ~~(Date.now()/1000 - 60),
                });
                log.info("Request to sync");
                utils.get("https://www.facebook.com/notifications/sync", jar, form5, function(err, res, html) {

                  var cookies = res.headers['set-cookie'] || [];
                  cookies.map(function (c) {
                    jar.setCookie(c, "https://www.facebook.com");
                  });

                  var form6 = mergeWithDefaults({
                    'client' : 'mercury',
                    'folders[0]': 'inbox',
                    'last_action_timestamp' : '0'
                  });
                  log.info("Request to thread_sync");
                  utils.post("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form, function(err, res, html) {
                    var cookies = res.headers['set-cookie'] || [];
                    cookies.map(function (c) {
                      jar.setCookie(c, "https://www.facebook.com");
                    });

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
                    utils.post("https://www.facebook.com/v2.3/dialog/oauth/read", jar, graphAPIForm, function(err, res, html) {
                      graphAPIForm.read = "";
                      graphAPIForm.write = "publish_actions";
                      graphAPIForm.seen_scopes = graphAPIForm.write;
                      graphAPIForm["audience[0][value]"] = 40;
                      log.info("Getting write access.");
                      utils.post("https://www.facebook.com/v2.3/dialog/oauth/write", jar, graphAPIForm, function(err, res, html) {
                        graphAPIForm.write = "";
                        graphAPIForm.extended = "ads_management,ads_read,manage_notifications,manage_pages,publish_pages,read_insights,read_page_mailboxes,rsvp_event";
                        graphAPIForm.seen_scopes = graphAPIForm.extended;
                        graphAPIForm["audience[0][value]"] = "";
                        log.info("Getting extended access.");
                        utils.post("https://www.facebook.com/v2.3/dialog/oauth/extended", jar, graphAPIForm, function(err, res, html) {
                          var strData = utils.makeParsable(html);
                          var ret;
                          try {
                            ret = JSON.parse(strData);
                          } catch (e) {
                            log.error("ERROR in getting extended access --> ",e, strData);
                            return callback({error: e});
                          }

                          access_token = -1;
                          try {
                            var tokenArray = ret.jsmods.require;
                            for (var i = 0; i < tokenArray.length; i++){
                              if (tokenArray[i][3][0].indexOf("access_token=") != -1){
                                access_token = tokenArray[i][3][0].split("access_token=")[1].split("&")[0];
                                break;
                              }
                            }
                          } catch (e) {
                            access_token = -1;
                          }
                          if (access_token === -1){
                            log.error("Error retrieving access token, continuing...");
                          }

                          log.info("Done loading.");
                          callback(null, api);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function login(loginData, callback) {
  var obj = {};
  if(typeof loginData === 'function') {
    if(!process.env.FB_LOGIN_EMAIL || !process.env.FB_LOGIN_PASSWORD) return log.error("Please define env variables");
    obj.email = process.env.FB_LOGIN_EMAIL;
    obj.password = process.env.FB_LOGIN_PASSWORD;
    callback = loginData;
  } else if (typeof loginData === 'string') {
    obj = JSON.parse(fs.readFileSync(loginData, 'utf8'));
    if(!obj.email || !obj.password) throw loginData + " has to be a valid json with an email field and a password field";
  } else if (typeof loginData === 'object') {
    if(!loginData.email || !loginData.password) throw "Invalid JSON passed into login.";
    else obj = loginData;
  } else {
    throw "Invalid argument passed into login.";
  }

  return _login(obj.email, obj.password, callback);
}

module.exports = login;