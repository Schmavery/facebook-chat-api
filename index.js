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
      console.error("You probably shouldn't pass an object inside the form at property", prop, qs);
      continue;
    }
    qs[prop] = qs[prop].toString();
  }
  var op = {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Referer' : 'https://www.facebook.com/',
      'Host' : url.replace('https://', '').split("/")[0],
      'Origin' : 'https://www.facebook.com',
      'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18',
      'Connection' : 'keep-alive',
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
      'Referer' : 'https://www.facebook.com/',
      'Origin' : 'https://www.facebook.com',
      'Host' : url.replace('https://', '').split("/")[0],
      'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18',
      'Connection' : 'keep-alive',
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
  console.log("Getting login form data");
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

    console.log("Logging in...");
    _post("https://www.facebook.com/login.php?login_attempt=1", jar, form, function(err, res, html) {
      var cookies = res.headers['set-cookie'] || [];

      cookies.map(function (c) {
        jar.setCookie(c, "https://www.facebook.com");
      });

      if (!res.headers.location) return callback({error: "Wrong username/password."});
      _get(res.headers.location, jar, function(err, res, html) {
        console.log("Logged in");

        var grammar_version = getFrom(html, "grammar_version\":\"", "\"");

        // I swear, this is copy pasted from FB's minified code
        var clientid = (Math.random()*2147483648|0).toString(16);
        var starTime = Date.now();
        var userId = jar.getCookies("https://www.facebook.com").filter(function(val) {
          return val.cookieString().split("=")[0] === "c_user";
        })[0].cookieString().split("=")[1];
        var userChannel = "p_" + userId;
        var __rev = getFrom(html, "revision\":",",");

        var form = {
          'channel' : userChannel,
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

        var fb_dtsg = getFrom(html, "name=\"fb_dtsg\" value=\"", "\"");
        var ttstamp = "";
        for (var i = 0; i < fb_dtsg.length; i++) {
          ttstamp += fb_dtsg.charCodeAt(i);
        }
        ttstamp += '2';

        var api = {};
        var shouldStop = false;
        var currentlyRunning = null;
        var stopListening = function() {
          shouldStop = true;
          if(currentlyRunning) clearTimeout(currentlyRunning);
        };

        var prev = Date.now();
        var tmpPrev = Date.now();
        var lastSync = Date.now();
        var reqCounter = 1;

        api.listen = function(callback) {
          if(shouldStop) return;

          form.wtc = time.doSerialize();
          form.idle = ~~(Date.now()/1000) - prev;
          prev = ~~(Date.now()/1000);

          time.reportPullSent();
          // TODO: get the right URL to query...
          _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
            if(err) throw err;
            if(!html) throw "html was null after request to https://0-edge-chat.facebook.com/pull with form " + JSON.stringify(form);

            time.reportPullReturned();
            var strData = makeParsable(html);
            var info = [];
            try {
              info = strData.map(JSON.parse)[0];

              var now = Date.now();
              console.log("Got answer in ", now - tmpPrev);
              tmpPrev = now;

              if(info && info.t === 'fullReload') {
                form.seq = info.seq;
                var form4 = {
                  'lastSync' : ~~(lastSync/1000),
                  '__user' : userId,
                  '__req' : (reqCounter++).toString(36),
                  '__rev' : __rev,
                  '__a' : '1',
                };
                _get("https://www.facebook.com/notifications/sync/", jar, form4, function(err, res, html) {
                  var cookies = res.headers['set-cookie'] || [];
                  cookies.map(function (c) {
                    jar.setCookie(c, "https://www.facebook.com");
                  });
                  lastSync = Date.now();
                  var form6 = {
                    '__a' : '1',
                    '__user' : userId,
                    '__req' : (reqCounter++).toString(36),
                    '__rev' : __rev,
                    'fb_dtsg' : fb_dtsg,
                    'ttstamp' : ttstamp,
                    'client' : 'mercury',
                    'folders[0]': 'inbox',
                    'last_action_timestamp' : ~~(Date.now() - 60)
                  };
                  _post("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form, function(err, res, html) {
                    console.log("thread sync --->", html);
                    currentlyRunning = setTimeout(api.listen, 1000, callback);
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

                // Send deliveryReceipt notification to the server
                var formDeliveryReceipt = {
                  '__a' : '1',
                  '__user' : userId,
                  '__req' : (reqCounter++).toString(36),
                  '__rev' : __rev,
                  'fb_dtsg' : fb_dtsg,
                  'ttstamp' : ttstamp,
                };
                for (var i = 0; i < info.ms.length; i++) {
                  if(info.ms[i].message && info.ms[i].message.mid) formDeliveryReceipt["[" + i + "]"] = info.ms[i].message.mid;
                }

                // If there's at least one, we do the post request
                if(formDeliveryReceipt["[0]"]) {
                  _post("https://www.facebook.com/ajax/mercury/delivery_receipts.php", jar, formDeliveryReceipt, function(err, res, html) {
                  });
                }
                info.ms = info.ms.map(formatMessage);
                info.ms.sort(function(a, b) {
                  return a.timestamp - b.timestamp;
                });
              }


              if(info.seq) form.seq = info.seq;
              if(info.tr) form.traceid = info.tr;
            } catch (e) {
              console.error("ERROR in listen --> ",e, strData);
              callback({error: e}, null, stopListening);
              currentlyRunning = setTimeout(api.listen, Math.random() * 200 + 50, callback);
              return;
            }
            currentlyRunning = setTimeout(api.listen, Math.random() * 200 + 50, callback);

            // If any call to stopListening was made, do not call the callback
            if(shouldStop) return;

            if(info.ms) {
              // Send all messages to the callback
              for (var j = 0; j < info.ms.length; j++){
                callback(null, info.ms[j], stopListening);
              }
            }
          });
        };

        api.getUserId = function(name, callback) {
          var form = {
            'value' : name.toLowerCase(),
            'viewer' : userId,
            'rsp' : "search",
            'context' : "search",
            'path' : "/home.php",
            'request_id' : getGUID(),
            '__user' : userId,
            '__a' : '1',
            '__req' : (reqCounter++).toString(36),
            '__rev' : __rev,
          };

          _get("https://www.facebook.com/ajax/typeahead/search.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            try{
              var ret = strData.map(JSON.parse);
              var info = ret[0].payload;
              if(info.entries[0].type !== "user") {
                return callback({error: "Couldn't find a user with name " + name + ". Best match: " + info.entries[0].path});
              }

              callback(null, info);
            } catch (e) {
              console.error("ERROR in sendDirectMessage --> ",e, strData);
              callback({error: e});
            }
          });
        };

        api.sendDirectMessage = function(msg, nameOrUserId, callback) {
          if(!callback) throw new Error("Callback is required for sendDirectMessage");

          if(typeof nameOrUserId === "number") {
            return api.sendMessage(msg, nameOrUserId, callback);
          }

          api.getUserId(nameOrUserId, function(err, data) {
            if(err) return callback(err);

            // TODO: find the actual best entry
            var thread_id = data.entries[0].uid;
            api.sendMessage(msg, thread_id, callback);
          });
        };

        api.sendDirectSticker = function(sticker_id, nameOrUserId, callback) {
          if(!callback) throw new Error("Callback is required for sendDirectSticker");

          if(typeof nameOrUserId === "number") {
            return api.sendSticker(sticker_id, nameOrUserId, callback);
          }

          api.getUserId(nameOrUserId, function(err, data) {
            if(err) return callback(err);

            // TODO: find the actual best entry
            var thread_id = data.entries[0].uid;
            api.sendSticker(sticker_id, thread_id, callback);
          });
        };

        api.sendSticker = function(sticker_id, thread_id, callback) {
          if(!callback) callback = function() {};
          var timestamp = Date.now();
          var d = new Date();
          var form = {
            'client' : 'mercury',
            '__user' : userId,
            'fb_dtsg' : fb_dtsg,
            'ttstamp' : ttstamp,
            '__req' : (reqCounter++).toString(36),
            'message_batch[0][action_type]' : 'ma-type:user-generated-message',
            'message_batch[0][author]' : 'fbid:' + userId,
            'message_batch[0][timestamp]' : timestamp,
            'message_batch[0][timestamp_absolute]' : 'Today',
            'message_batch[0][timestamp_relative]' : d.getHours() + ":" + padZeros(d.getMinutes()),
            'message_batch[0][timestamp_time_passed]' : '0',
            'message_batch[0][is_unread]' : false,
            'message_batch[0][is_cleared]' : false,
            'message_batch[0][is_forward]' : false,
            'message_batch[0][is_filtered_content]' : false,
            'message_batch[0][is_spoof_warning]' : false,
            'message_batch[0][source]' : 'source:chat:web',
            'message_batch[0][source_tags][0]' : 'source:chat',
            'message_batch[0][body]' : '',
            'message_batch[0][html_body]' : false,
            'message_batch[0][ui_push_phase]' : 'V3',
            'message_batch[0][status]' : '0',
            'message_batch[0][message_id]' : generateMessageID(clientid),
            'message_batch[0][manual_retry_cnt]' : '0',
            'message_batch[0][thread_fbid]' : thread_id,
            'message_batch[0][sticker_id]' : sticker_id,
            'message_batch[0][has_attachment]' : true
          };
          _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            console.log (err, html, html.length);
            if (!err && html.length === 0){
              return callback({error: "Could not send sticker."});
            }
            try{
              var ret = strData.map(JSON.parse);
            } catch (e) {
              console.error("ERROR in sendSticker --> ",e, strData);
              return callback({error: e});
            }
            callback();
          });
        };

        api.setTitle = function(newTitle, thread_id, callback) {
          if(!callback) callback = function() {};
          var timestamp = Date.now();
          var d = new Date();
          var form = {
            '__req' : (reqCounter++).toString(36),
            '__rev' : __rev,
            '__user' : userId,
            '__a' : '1',
            'client' : 'mercury',
            'fb_dtsg' : fb_dtsg,
            'ttstamp' : ttstamp,
            'message_batch[0][action_type]' : 'ma-type:log-message',
            'message_batch[0][author]' : 'fbid:' + userId,
            'message_batch[0][thread_id]' : '',
            'message_batch[0][author_email]' : '',
            'message_batch[0][coordinates]' : '',
            'message_batch[0][timestamp]' : timestamp,
            'message_batch[0][timestamp_absolute]' : 'Today',
            'message_batch[0][timestamp_relative]' : d.getHours() + ":" + padZeros(d.getMinutes()),
            'message_batch[0][timestamp_time_passed]' : '0',
            'message_batch[0][is_unread]' : false,
            'message_batch[0][is_cleared]' : false,
            'message_batch[0][is_forward]' : false,
            'message_batch[0][is_filtered_content]' : false,
            'message_batch[0][is_spoof_warning]' : false,
            'message_batch[0][source]' : 'source:chat:web',
            'message_batch[0][source_tags][0]' : 'source:chat',
            'message_batch[0][status]' : '0',
            'message_batch[0][message_id]' : generateMessageID(clientid),
            'message_batch[0][manual_retry_cnt]' : '0',
            'message_batch[0][thread_fbid]' : thread_id,
            'message_batch[0][log_message_data][name]' : newTitle,
            'message_batch[0][log_message_type]' : 'log:thread-name'
          };

          _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            var ret;
            try{
              ret = strData.map(JSON.parse);
              if (ret instanceof Array){
                ret = ret[0];
              }
            } catch (e) {
              console.error("ERROR in setTitle --> ",e, strData);
              callback({error: e});
            }

            if (ret.error && ret.error === 1545012){
              callback({error: "Cannot change chat title: Not member of chat."});
            } else if (ret.error && ret.error === 1545003){
              callback({error: "Cannot set title of single-user chat."});
            } else if (ret.error) {
              callback({error: ret});
            } else callback();
          });
        };

        api.markAsRead = function(thread_id, callback) {
          if(!callback) callback = function() {};
          var form = {
            __user: userId,
            fb_dtsg: fb_dtsg,
            ttstamp: ttstamp,
            __req: (reqCounter++).toString(36),
          };

          form["ids[" + thread_id + "]"] = true;

          _post("https://www.facebook.com/ajax/mercury/change_read_status.php", jar, form, function(err, res, html) {
            var cookies = res.headers['set-cookie'] || [];
            cookies.map(function (c) {
              jar.setCookie(c, "https://www.facebook.com");
            });

            var strData = makeParsable(html);
            try{
              var ret = strData.map(JSON.parse);
            } catch (e) {
              console.error("ERROR in markAsRead --> ",e, strData);
              return callback({error: e});
            }
              callback();
          });
        };

        api.sendMessage = function(msg, thread_id, callback) {
          if(!callback) callback = function() {};
          if(typeof msg !== "string") return callback({error: "Message should be of type string and not " + typeof msg + "."});

          var timestamp = Date.now();
          var d = new Date();
          var form = {
            'client' : 'mercury',
            '__user' : userId,
            'fb_dtsg' : fb_dtsg,
            'ttstamp' : ttstamp,
            '__req' : (reqCounter++).toString(36),
            'message_batch[0][action_type]' : 'ma-type:user-generated-message',
            'message_batch[0][author]' : 'fbid:' + userId,
            'message_batch[0][timestamp]' : timestamp,
            'message_batch[0][timestamp_absolute]' : 'Today',
            'message_batch[0][timestamp_relative]' : d.getHours() + ":" + padZeros(d.getMinutes()),
            'message_batch[0][timestamp_time_passed]' : '0',
            'message_batch[0][is_unread]' : false,
            'message_batch[0][is_cleared]' : false,
            'message_batch[0][is_forward]' : false,
            'message_batch[0][is_filtered_content]' : false,
            'message_batch[0][is_spoof_warning]' : false,
            'message_batch[0][source]' : 'source:chat:web',
            'message_batch[0][source_tags][0]' : 'source:chat',
            'message_batch[0][body]' : msg ? msg.toString() : "",
            'message_batch[0][html_body]' : false,
            'message_batch[0][ui_push_phase]' : 'V3',
            'message_batch[0][status]' : '0',
            'message_batch[0][message_id]' : generateMessageID(clientid),
            'message_batch[0][manual_retry_cnt]' : '0',
            'message_batch[0][thread_fbid]' : thread_id,
            'message_batch[0][has_attachment]' : false
          };

          _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            var ret;
            try{
              ret = strData.map(JSON.parse)[0];
            } catch (e) {
              console.error("ERROR in sendMessage --> ",e, strData);
              return callback({error: e});
            }

            if (!ret ){
              callback({error: "Send message failed."});
            } else if (ret.error){
              callback({error: ret});
            } else {
              callback();
            }
          });
        };

        time.initialize();

        var form2 = {
          'grammar_version' : grammar_version,
          '__user' : userId,
          '__a' : '1',
          '__req' : (reqCounter++).toString(36),
        };
        console.log("Initial requests...");
        console.log("Request to null_state");
        _get("https://www.facebook.com/ajax/browse/null_state.php", jar, form2, function(err, res, html) {
          console.log("Request to reconnect");
          var form3 = {
            '__user' : userId,
            '__req' : (reqCounter++).toString(36),
            '__a' : '1',
            '__rev' : __rev,
            'reason' : '6',
            'fb_dtsg' : fb_dtsg
          };
          _get("https://www.facebook.com/ajax/presence/reconnect.php", jar, form3, function(err, res, html) {
            var cookies = res.headers['set-cookie'] || [];
            cookies.map(function (c) {
              jar.setCookie(c, "https://www.facebook.com");
            });

            time.reportPullSent();
            console.log("Request to pull 1");
            _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
              time.reportPullReturned();
              form.wtc = time.doSerialize();
              var strData = makeParsable(html);
              try {
                var info = strData.map(JSON.parse);

                form.sticky_token = info[0].lb_info.sticky;
                form.sticky_pool = info[0].lb_info.pool;
              } catch (e) {
                console.error("ERROR in init --> ",e, strData);
                callback({error: e});
              }
              console.log("Request to pull 2");
              _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
                time.reportPullReturned();
                form.wtc = time.doSerialize();
                var form4 = {
                  'lastSync' : ~~(Date.now()/1000 - 60),
                  '__user' : userId,
                  '__req' : (reqCounter++).toString(36),
                  '__a' : '1',
                  '__rev' : __rev
                };
                console.log("Request to sync");
                _get("https://www.facebook.com/notifications/sync", jar, form4, function(err, res, html) {
                  var strData = makeParsable(html);
                  var lastSync = strData.map(JSON.parse)[0].payload.lastSync;

                  var cookies = res.headers['set-cookie'] || [];
                  cookies.map(function (c) {
                    jar.setCookie(c, "https://www.facebook.com");
                  });

                  var form6 = {
                    '__user' : userId,
                    '__req' : (reqCounter++).toString(36),
                    '__a' : '1',
                    '__rev' : __rev,
                    'fb_dtsg' : fb_dtsg,
                    'ttstamp' : ttstamp,
                    'client' : 'mercury',
                    'folders[0]': 'inbox',
                    'last_action_timestamp' : '0'
                  };
                  console.log("Request to thread_sync");
                  _post("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form, function(err, res, html) {
                    var cookies = res.headers['set-cookie'] || [];
                    cookies.map(function (c) {
                      jar.setCookie(c, "https://www.facebook.com");
                    });
                    console.log("Done loading.");
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
}

function login(filename, callback) {
  var obj = {};
  if(typeof filename === 'function') {
    if(!process.env.FB_LOGIN_EMAIL || !process.env.FB_LOGIN_PASSWORD) return console.error("Please define env variables");
    obj.email = process.env.FB_LOGIN_EMAIL;
    obj.password = process.env.FB_LOGIN_PASSWORD;
    callback = filename;
  } else {
    obj = JSON.parse(fs.readFileSync(filename, 'utf8'));
    if(!obj.email || !obj.password) throw filename + " has to be a valid json with an email field and a password field";
  }

  return _login(obj.email, obj.password, callback);
}
module.exports = login;


/**
 *
 * ============= Helper functions =================
 *
 */

function padZeros(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) val = "0" + val;
    return val;
}

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

function formatMessage(m) {
  var originalMessage = m.message ? m.message : m;

  return {
    sender_name: originalMessage.sender_name,
    sender_id: originalMessage.sender_fbid,
    participant_names: (originalMessage.group_thread_info ? originalMessage.group_thread_info.participant_names : [originalMessage.sender_name.split(' ')[0]]),
    participant_ids: (originalMessage.group_thread_info ? originalMessage.group_thread_info.participant_ids : [originalMessage.sender_fbid]),
    body: originalMessage.body,
    thread_id: originalMessage.tid && originalMessage.tid.split(".")[0] === "id" ? originalMessage.tid.split('.')[1] : originalMessage.other_user_fbid,
    location: originalMessage.coordinates ? originalMessage.coordinates : null
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
