var request = require("request").defaults({jar: true});
var cheerio = require("cheerio");
var fs = require("fs");
var time = require("./time");
var helperFunctions = require("./helperFunctions");

function _get(url, jar, qs, callback) {
  if(typeof qs === 'function') {
    callback = qs;
    qs = {};
  }
  for(var prop in qs) {
    if(typeof qs[prop] === "object") {
      console.log("You probably shouldn't pass an object inside the form at property", prop, form);
      continue;
    }
    qs[prop] = qs[prop].toString();
  }
  var op = {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Referer': 'https://www.facebook.com/',
      'Host': url.replace('https://', '').split("/")[0],
      'Origin': 'https://www.facebook.com',
      "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18",
      'Connection': 'keep-alive',
    },
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
      'Referer': 'https://www.facebook.com/',
      'Origin': 'https://www.facebook.com',
      'Host': url.replace('https://', '').split("/")[0],
      "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18",
      'Connection': 'keep-alive',
    },
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

        var form = {
          'channel': userChannel,
          'seq': '0',
          'partition': '-2',
          'clientid': clientid,
          'viewer_uid': userId,
          'uid': userId,
          'state': 'active',
          'mode': 'stream',
          'format': 'json',
          'idle': '40',
          'cap': '8',
          'cb':getCB(),
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

        // var prev = Date.now();
        var tmpPrev = [];
        var lastRequest = Date.now();
        var reqCounter = 1;
        var currentlyRunning = [];
        var alreadySeenMessages = {};

        var concurrentGets = 1;
        api.listen = function(cb, index) {
          index = index || 0;
          if(shouldStop) return;
          if(currentlyRunning.length <= concurrentGets) {
            console.log("Currentl running requests -->", currentlyRunning.length);
            for (var i = currentlyRunning.length; i < concurrentGets; i++) {
              currentlyRunning.push(setTimeout(api.listen, 50000/concurrentGets * i, cb, i));
              tmpPrev.push(Date.now());
            }
            return;
          }
          form.wtc = time.doSerialize();
          form.cb = getCB();
          // form.idle = ~~((Date.now() - prev)/1000);
          // prev = Date.now();
          console.log(form);
          time.reportPullSent();
          _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {

            time.reportPullReturned();
            var strData = makeParsable(html);
            var info = [];
            try {
              console.log("parsing....");

              info = strData.map(JSON.parse);

              if(Date.now() - tmpPrev[index] < 1000) {
                console.log('Going too fast ------------> ', info);
                clearTimeout(currentlyRunning[index]);

                // currentlyRunning[index] = setTimeout(api.listen, 5000, cb, index);
              }
              tmpPrev[index] = Date.now();
              if(info.length > 0 && info[0].t === 'fullReload') {
                var form4 = {
                  'lastSync':~~(lastSync/1000),
                  '__user': userId,
                  '__req': (reqCounter++).toString(36)
                };
                console.log("Request to sync -->", form4);
                _get("https://www.facebook.com/notifications/sync", jar, form4, function(err, res, html) {
                  var cookies = res.headers['set-cookie'] || [];
                  cookies.map(function (c) {
                    jar.setCookie(c, "https://www.facebook.com");
                  });
                  lastSync = Date.now();
                  console.log("fullReload --->", html);
                  currentlyRunning[index] = setTimeout(api.listen, 5000, cb, index);
                });
                return;
              }

              info = info.filter(function(v) {
                return v.t !== "heartbeat" &&
                v.ms &&
                v.ms[0].type === 'messaging' &&
                v.ms[0].event === 'deliver' &&
                v.ms[0].message.sender_fbid.toString() !== userId;
              });

              if(concurrentGets > 1) {
                console.log("Don't forget ben, we're not filtering messages....");
              }
              // info = info.filter(function(v) {
              //   if(alreadySeenMessages[v.ms[0].message.timestamp]) return false;
              //   alreadySeenMessages[v.ms[0].message.timestamp] = true;
              //   return true;
              // });

              // First packet received is a little different
              if(info.length === 1 && info[0].lb_info) {
                form.sticky_token = info[0].lb_info.sticky;
                form.sticky_pool = info[0].lb_info.pool;
              }

              var max = -1;
              for (var i = 0; i < info.length; i++) {
                var num = parseInt(info[i].seq);
                if(num > max) max = num;
              }

              if(max !== -1) form.seq = max;

              if(info.length > 0){
                for (i = 0; i < info.length; i++) {
                  if(info[i].tr) {
                    form.traceid = info[i].tr;
                    break;
                  }
                }
              }

            } catch (e) {
              console.log("ERROR --> ",e, strData);
              currentlyRunning[index] = setTimeout(api.listen, 1000, cb, index);
              return;
            }
            console.log("next call in 100ms");
            currentlyRunning[index] = setTimeout(api.listen, 100, cb, index);

            info = info.map(formatMessage);
            info.sort(function(a, b) {
              return a.timestamp - b.timestamp;
            });

            // Send all messages to the callback
            for (var i = 0; i < info.length; i++){
              cb(info[i], stop);
            }
          });
        };


        api.sendMessage = function(msg, thread_id, sticker_id, cb) {
          if(typeof sticker_id === 'function') {
            cb = sticker_id;
            sticker_id = null;
          }
          if(!cb) cb = function() {};

          var tmp = {};
          helperFunctions.normalizeNewMessage(tmp, userId, clientid);
          var timestamp = Date.now();

          var form = {
            'client': "mercury",
            '__user': userId,
            'fb_dtsg': fb_dtsg,
            'ttstamp': ttstamp,
            '__req': (reqCounter++).toString(36),
            'message_batch[0][action_type]':'ma-type:user-generated-message',
            'message_batch[0][author]':tmp.author,
            'message_batch[0][timestamp]':timestamp,
            'message_batch[0][timestamp_absolute]':tmp.timestamp_absolute,
            'message_batch[0][timestamp_relative]':'18:17',
            'message_batch[0][timestamp_time_passed]':'0',
            'message_batch[0][is_unread]':'false',
            'message_batch[0][is_cleared]':'false',
            'message_batch[0][is_forward]':'false',
            'message_batch[0][is_filtered_content]':'false',
            'message_batch[0][is_spoof_warning]':'false',
            'message_batch[0][source]':'source:chat:web',
            'message_batch[0][source_tags][0]':'source:chat',
            'message_batch[0][body]':msg,
            'message_batch[0][html_body]':'false',
            'message_batch[0][ui_push_phase]':'V3',
            'message_batch[0][status]':'0',
            'message_batch[0][message_id]':tmp.message_id,
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
          'grammar_version':grammar_version,
          '__user':userId,
          '__req':(reqCounter++).toString(36),
        };
        console.log("Logging in...");
        console.log("Request to null_state");
        _get("https://www.facebook.com/ajax/browse/null_state.php", jar, form2, function(err, res, html) {
          time.reportPullSent();
          console.log("Request to pull 1");
          _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
            // console.log("--->", html);
            time.reportPullReturned();
            form.wtc = time.doSerialize();
            var strData = makeParsable(html);
            try {
              var info = strData.map(JSON.parse).filter(function(v) {
                return v.t !== "heartbeat";
              });

              // First packet received is a little different
              if(info.length === 1 && info[0].lb_info) {
                form.sticky_token = info[0].lb_info.sticky;
                form.sticky_pool = info[0].lb_info.pool;
              }
            } catch (e) {
              console.log("ERROR in init --> ",e, strData);
            }
            console.log("Request to pull 2");
            _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
              // console.log("--->", html);
              time.reportPullReturned();
              form.wtc = time.doSerialize();
              console.log("Logged in!");
              callback(api);
            });
          });
        });
      });
    });
  });
}

function login(filename, cb) {
  var obj = JSON.parse(fs.readFileSync(filename, 'utf8'));
  if(!obj.email || !obj.password) throw filename + " has to be a valid json with an email field and a password field";

  return _login(obj.email, obj.password, cb);
}
module.exports = login;

function getCB() {
  return (1048576 * Math.random() | 0).toString(36);
}


function formatMessage(m) {
  var originalMessage = m.ms[0].message ? m.ms[0].message : m.ms[0];

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