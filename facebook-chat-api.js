var request = require("request").defaults({jar: true});
var cheerio = require("cheerio");
var fs = require("fs");
var time = require("./time");

function _get(url, jar, qs, callback) {
  if(typeof qs === 'function') {
    callback = qs;
    qs = {};
  }
  for(var prop in qs) {
    if(typeof qs[prop] === "object") {
      console.log("You probably shouldn't pass an object inside the form at property", prop, qs);
      continue;
    }
    qs[prop] = qs[prop].toString();
  }
  var op = {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      Referer: 'https://www.facebook.com/',
      Host: url.replace('https://', '').split("/")[0],
      Origin: 'https://www.facebook.com',
      "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18",
      Connection: 'keep-alive',
    },
    timeout: 60000,
    qs: qs,
    url: url,
    method: "GET",
    jar: jar,
    gzip: true
  };

  request(op, callback);
}

function _post(url, jar, form, callback) {
  var op = {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      Referer: 'https://www.facebook.com/',
      Origin: 'https://www.facebook.com',
      Host: url.replace('https://', '').split("/")[0],
      "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18",
      Connection: 'keep-alive',
    },
    timeout: 60000,
    url: url,
    method: "POST",
    form: form,
    jar: jar,
    gzip: true
  };

  request(op, callback);
}

function _login(email, password, callback) {
  var jar = request.jar();
  _get("https://www.facebook.com/", jar, function(err, res, html) {
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
    var form = arrToForm(arr);
    form.email = email;
    form.pass = password;
    form.default_persistent = '1';
    _post("https://www.facebook.com/login.php?login_attempt=1", jar, form, function(err, res, html) {
      var cookies = res.headers['set-cookie'] || [];

      cookies.map(function (c) {
        jar.setCookie(c, "https://www.facebook.com");
      });
      _get(res.headers.location, jar, function(err, res, html) {
        var grammar_version = getFrom(html, "grammar_version\":\"", "\"");

        var clientid = (Math.random()*2147483648|0).toString(16);
        var starTime = Date.now();
        var userId = jar.getCookies("https://www.facebook.com").filter(function(val) {
          return val.cookieString().split("=")[0] === "c_user";
        })[0].cookieString().split("=")[1];
        var userChannel = "p_" + userId;
        var __dyn = '';
        var __rev = getFrom(html, "revision\":",",");

        var form = {
          channel: userChannel,
          seq: 0,
          partition: '-2',
          clientid: clientid,
          viewer_uid: userId,
          uid: userId,
          state: 'active',
          format: 'json',
          idle: 0,
          cap: '8',
          cb:getCB(),
        };

        var fb_dtsg = getFrom(html, "name=\"fb_dtsg\" value=\"", "\"");
        var ttstamp = "";
        for (var i = 0; i < fb_dtsg.length; i++) {
          ttstamp += fb_dtsg.charCodeAt(i);
        }
        ttstamp += '2';

        var api = {};
        var shouldStop = false;
        var stop = function() {
          shouldStop = true;
        };

        var prev = Date.now();
        var tmpPrev = Date.now();
        var lastSync = Date.now();
        var reqCounter = 1;

        api.listen = function(cb) {
          if(shouldStop) return;

          form.wtc = time.doSerialize();
          form.cb = getCB();
          form.idle = ~~(Date.now()/1000) - prev;
          prev = ~~(Date.now()/1000);

          // console.log(form);
          time.reportPullSent();
          _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
            if(err) throw err;
            if(!html) throw "html was null after request to https://0-edge-chat.facebook.com/pull with form " + JSON.stringify(form);

            time.reportPullReturned();
            var strData = makeParsable(html);
            var info = [];
            try {
              // console.log("parsing....");

              info = strData.map(JSON.parse)[0];

              if(Date.now() - tmpPrev < 1000) {
                console.log('Going too fast ------------> ', info);
              }
              tmpPrev = Date.now();

              if(info && info.t === 'fullReload') {
                form.seq = info.seq;
                var form4 = {
                  lastSync:~~(lastSync/1000),
                  __user: userId,
                  __req: (reqCounter++).toString(36),
                  __rev: __rev,
                  __a: 1,
                  __dyn: __dyn
                };
                // console.log("Request to sync -->", form4);
                _get("https://www.facebook.com/notifications/sync/", jar, form4, function(err, res, html) {
                  var cookies = res.headers['set-cookie'] || [];
                  cookies.map(function (c) {
                    jar.setCookie(c, "https://www.facebook.com");
                  });
                  lastSync = Date.now();
                  // console.log("sync --->", html);
                  var form6 = {
                    __a: 1,
                    __dyn: __dyn,
                    __user: userId,
                    __req: (reqCounter++).toString(36),
                    __rev: __rev,
                    fb_dtsg: fb_dtsg,
                    ttstamp: ttstamp,
                    client: 'mercury',
                    'folders[0]': 'inbox',
                    last_action_timestamp: ~~(Date.now() - 60)
                  };
                  // console.log("Request to thread_sync");
                  _post("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form, function(err, res, html) {
                    console.log("thread sync --->", html);
                    currentlyRunning = setTimeout(api.listen, 5000, cb);
                  });
                });
                return;
              }

              if(info.ms) {
                info.ms = info.ms.filter(function(v) {
                  return  v.type === 'messaging' &&
                          v.event === 'deliver' &&
                          v.message.sender_fbid.toString() !== userId;
                });
                info.ms = info.ms.map(formatMessage);
                info.ms.sort(function(a, b) {
                  return a.timestamp - b.timestamp;
                });
              }


              if(info.seq) form.seq = info.seq;
              if(info.tr) form.traceid = info.tr;
            } catch (e) {
              console.log("ERROR --> ",e, strData);
              currentlyRunning = setTimeout(api.listen, 1000, cb);
              return;
            }
            // console.log("next call in 1000ms");
            currentlyRunning = setTimeout(api.listen, 1000, cb);

            if(info.ms) {
              // Send all messages to the callback
              for (var i = 0; i < info.ms.length; i++){
                cb(info.ms[i], stop);
              }
              // var form2 = {
              //   message_ids: []
              // };
              // _get("https://www.facebook.com/ajax/mercury/delivery_receipts.php", jar, form2, function(err, res, html) {
              //   console.log("Deliver receipt -->", html);
              // });
            }
          });
        };


        api.sendMessage = function(msg, thread_id, sticker_id, cb) {
          if(typeof sticker_id === 'function') {
            cb = sticker_id;
            sticker_id = null;
          }
          if(!cb) cb = function() {};

          var timestamp = Date.now();

          var form = {
            client: "mercury",
            __user: userId,
            fb_dtsg: fb_dtsg,
            ttstamp: ttstamp,
            __req: (reqCounter++).toString(36),
            'message_batch[0][action_type]':'ma-type:user-generated-message',
            'message_batch[0][author]':'fbid:' + userId,
            'message_batch[0][timestamp]':timestamp,
            'message_batch[0][timestamp_absolute]':"Today",
            'message_batch[0][timestamp_relative]':'18:17',
            'message_batch[0][timestamp_time_passed]':'0',
            'message_batch[0][is_unread]':false,
            'message_batch[0][is_cleared]':false,
            'message_batch[0][is_forward]':false,
            'message_batch[0][is_filtered_content]':false,
            'message_batch[0][is_spoof_warning]':false,
            'message_batch[0][source]':'source:chat:web',
            'message_batch[0][source_tags][0]':'source:chat',
            'message_batch[0][body]':msg,
            'message_batch[0][html_body]':false,
            'message_batch[0][ui_push_phase]':'V3',
            'message_batch[0][status]':'0',
            'message_batch[0][message_id]':generateMessageID(clientid),
            'message_batch[0][manual_retry_cnt]':'0',
            'message_batch[0][thread_fbid]':thread_id,
            'message_batch[0][sticker_id]':sticker_id,
            'message_batch[0][has_attachment]':!!sticker_id
          };
          _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            try{
              var ret = strData.map(JSON.parse);
              form.cb = getCB();
              // console.log("Request to active_ping");
              // _get("https://0-edge-chat.facebook.com/active_ping", jar, form, function(err, res, html) {
              //   console.log("active ping back --->", html);
              // });
              cb({
                thread_id: ret.thread_fbid, // LOL
              });
            } catch (e) {
              console.log("ERROR", e, html);
            }
          });
        };

        time.initialize();

        var form2 = {
          grammar_version:grammar_version,
          __user:userId,
          __a: "1",
          __dyn: __dyn,
          __req:(reqCounter++).toString(36),
        };
        console.log("Logging in...");
        console.log("Request to null_state");
        _get("https://www.facebook.com/ajax/browse/null_state.php", jar, form2, function(err, res, html) {
          var form9 = {
            'filter[0]':"app",
            'filter[1]':"page",
            'filter[2]':"group",
            'filter[3]':"friendlist",
            context:"facebar",
            viewer:userId,
            token:"v7",
            lazy:"1",
            request_id:getGUID(),
            __user:userId,
            __a:"1",
            __dyn:__dyn,
            __req:(reqCounter++).toString(36),
            __rev:__rev
          };
          console.log("Request to bootstrap 1");
          _get("https://www.facebook.com/ajax/typeahead/search/facebar/bootstrap/", jar, form9, function(err, res, html) {
            console.log("Response -->", html);
            var form10 = {
              'filter[0]':"user",
              context:"facebar",
              viewer:userId,
              token:"v7",
              lazy:"1",
              request_id:getGUID(),
              __user:userId,
              __a:"1",
              __dyn:__dyn,
              __req:(reqCounter++).toString(36),
              __rev:__rev
            };
            console.log("Request to bootstrap 2");
            _get("https://www.facebook.com/ajax/typeahead/search/facebar/bootstrap/", jar, form10, function(err, res, html) {
              console.log("Response -->", html);
              // console.log("--->", html);
              console.log("Request to reconnect");
              var form3 = {
                __user: userId,
                __req: (reqCounter++).toString(36),
                __a: 1,
                __dyn: __dyn,
                __rev: __rev,
                reason: 6,
                fb_dtsg: fb_dtsg
              };
              _get("https://www.facebook.com/ajax/presence/reconnect.php", jar, form3, function(err, res, html) {
                var cookies = res.headers['set-cookie'] || [];
                cookies.map(function (c) {
                  jar.setCookie(c, "https://www.facebook.com");
                });

                console.log("--->", html);
                console.log("Request to imps_logging");
                var form7 = {
                  __user: userId,
                  __req: (reqCounter++).toString(36),
                  __a: 1,
                  __dyn: __dyn,
                  __rev: __rev,
                  sorted_list: "1341803147,100001056938824,1313708707,100000008241605",
                  source: "periodical_imps",
                  list_availability: "2,2,2,2",
                  ttstamp: ttstamp,
                  fb_dtsg: fb_dtsg
                };
                _post("https://www.facebook.com/ajax/chat/imps_logging.php", jar, form7, function(err, res, html) {
                  console.log("imps_logging --->", html);
                  time.reportPullSent();
                  console.log("Request to pull 1 -->", form);
                  _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
                    // console.log("--->", html);
                    time.reportPullReturned();
                    form.wtc = time.doSerialize();
                    var strData = makeParsable(html);
                    console.log(strData);
                    try {
                      var info = strData.map(JSON.parse);

                      form.sticky_token = info[0].lb_info.sticky;
                      form.sticky_pool = info[0].lb_info.pool;
                    } catch (e) {
                      console.log("ERROR in init --> ",e, strData);
                    }
                    console.log("Request to pull 2 --->", form);
                    _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
                      console.log("--->", html);
                      time.reportPullReturned();
                      form.wtc = time.doSerialize();
                      var form4 = {
                        lastSync:~~(Date.now()/1000 - 60),
                        __user: userId,
                        __req: (reqCounter++).toString(36),
                        __a: '1',
                        __dyn: __dyn,
                        __rev: __rev
                      };
                      console.log("Request to sync");
                      _get("https://www.facebook.com/notifications/sync", jar, form4, function(err, res, html) {
                        console.log("sync --->", html);
                        var strData = makeParsable(html);
                        var lastSync = strData.map(JSON.parse)[0].payload.lastSync;

                        var cookies = res.headers['set-cookie'] || [];
                        cookies.map(function (c) {
                          jar.setCookie(c, "https://www.facebook.com");
                        });
                        form.cb = getCB();
                        var form6 = {
                          __user: userId,
                          __req: (reqCounter++).toString(36),
                          __dyn: __dyn,
                          __a: '1',
                          __rev: __rev,
                          fb_dtsg: fb_dtsg,
                          ttstamp: ttstamp,
                          client: 'mercury',
                          'folders[0]': 'inbox',
                          last_action_timestamp: "0"
                        };
                        console.log("Request to thread_sync", form6);
                        _post("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form, function(err, res, html) {
                          var cookies = res.headers['set-cookie'] || [];
                          cookies.map(function (c) {
                            jar.setCookie(c, "https://www.facebook.com");
                          });
                          console.log("thread sync --->", html);
                          console.log("Logged in!");
                          callback(api);
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

function login(filename, cb) {
  var obj = {};
  if(typeof filename === 'function') {
    if(!process.env.BOT_EMAIL || !process.env.BOT_PASSWORD) return console.log("Please define env variables");
    obj.email = process.env.BOT_EMAIL;
    obj.password = process.env.BOT_PASSWORD;
    cb = filename;
  } else {
    obj = JSON.parse(fs.readFileSync(filename, 'utf8'));
    if(!obj.email || !obj.password) throw filename + " has to be a valid json with an email field and a password field";
  }

  return _login(obj.email, obj.password, cb);
}
module.exports = login;



/**
 *
 * ============= Helper functions =================
 *
 */

function generateMessageID(clientID) {
  var k = Date.now();
  var l = Math.floor(Math.random() * 4294967295);
  var m = clientID;
  return ("<" + k + ":" + l + "-" + m + "@mail.projektitan.com>");
}

function getGUID() {
  /** @type {number} */
  var sectionLength = Date.now();
  /** @type {string} */
  var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    /** @type {number} */
    var r = Math.floor((sectionLength + Math.random() * 16) % 16);
    /** @type {number} */
    sectionLength = Math.floor(sectionLength / 16);
    /** @type {string} */
    var _guid = (c == "x" ? r : r & 7 | 8).toString(16);
    return _guid;
  });
  return id;
}

function getCB() {
  return (1048576 * Math.random() | 0).toString(36);
}


function formatMessage(m) {
  var originalMessage = m.message ? m.message : m;

  return {
    sender_name: originalMessage.sender_name,
    participant_names: (originalMessage.group_thread_info ? originalMessage.group_thread_info.participant_names : [originalMessage.sender_name.split(' ')[0]]),
    body: originalMessage.body,
    thread_id: originalMessage.tid ? originalMessage.tid.split('.')[1] : originalMessage.other_user_fbid
  };
}

function getFrom(str, startToken, endToken) {
  var start = str.indexOf(startToken) + startToken.length;
  var lastHalf = str.substring(start);
  var end = lastHalf.indexOf(endToken);
  return lastHalf.substring(0, end);
}

function makeParsable(html) {
  return html.replace(/for\s*\(\s*;\s*;\s*\)\s*;\s*/, "").split("\n").filter(function(v) {
    return v.length > 0;
  });
}

function arrToForm(form) {
  return arrayToObject(form, function(v) {return v.name;}, function(v) {return v.val;});
}

function arrayToObject (arr, getKey, getValue) {
  return arr.reduce(function(acc, val) {
    acc[getKey(val)] = getValue(val);
    return acc;
  }, {});
}