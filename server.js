var request = require("request").defaults({jar: true});
var cheerio = require("cheerio");
var fs = require("fs");
var bot = require("./bot");
var time = require("./time");
var helperFunctions = require("./helperFunctions");

function _get(url, jar, qs, callback) {
  if(typeof qs === 'function') {
    callback = qs;
    qs = {};
  }
  var op = {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Referer': 'https://www.facebook.com/',
      'Host': url.replace('https://', '').split("/")[0],
      'Origin': 'https://www.facebook.com',
      "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36",
      'Connection': 'keep-alive'
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
      "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36"
    },
    url: url,
    method: "POST",
    form: form,
    jar: jar,
    gzip: true
  };

  request(op, callback);
}

function login(email, password, callback) {
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
      _get("https://www.facebook.com/?sk=welcome", jar, function(err, res, html) {
        var clientid = (Math.random()*2147483648|0).toString(16);

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

        var prev = Date.now();
        api.listen = function(cb) {
          if(shouldStop) return;

          form.wtc = time.doSerialize();
          form.cb = getCB();
          time.reportPullSent();
          _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {

            time.reportPullReturned();
            var strData = makeParsable(html);
            var info = [];
            try {
              // console.log(Date.now() - prev,"--->", strData, form.seq);
              prev = Date.now();
              info = strData.map(JSON.parse);
              if(info[0].t === 'fullReload') {
                console.log("Request to sync");
                var form4 = {
                  'lastSync':~~(Date.now()/1000 - 60000),
                  '__user': userId,
                  '__a': '1',
                  '__rev': '1609713',
                  '__dyn': '7nmajEyl35zoSt2u6aOGeFxq9ACxO4oKAdBGeqrWo8popyUW5ogxd6xymmey8szoyfwgp98O',
                };
                _get("https://www.facebook.com/notifications/sync", jar, form4, function(err, res, html) {
                  var cookies = res.headers['set-cookie'] || [];
                  cookies.map(function (c) {
                    jar.setCookie(c, "https://www.facebook.com");
                  });

                  console.log("fullReload --->", html);
                  setTimeout(api.listen, 1000, cb);
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
                for (var i = 0; i < info.length; i++) {
                  if(info[i].tr) {
                    form.traceid = info[i].tr;
                    break;
                  }
                }
              }

            } catch (e) {
              console.log("ERROR --> ",e, strData);
            }
            this.listen(cb);

            info = info.map(normalizeMessage);
            info.sort(function(a, b) {
              console.log(a, b);
              return a.timestamp - b.timestamp;
            });

            // Send all messages to the callback
            info.map(function(s) {
              cb(s, stop);
            });
          }.bind(this));
  }.bind(api);

  var reqCounter = 1;
  api.sendMessage = function(msg, thread_id, cb) {
  if(!cb) cb = function() {};

  var tmp = {};
  helperFunctions.normalizeNewMessage(tmp, userId, clientid);
  var timestamp = Date.now();
  // var s = {
    // __dyn: l.getLoadedModuleHash(),

  // },
  var form = {
    'client': "mercury",
    '__user': userId,
    '__a': 1,
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
    'message_batch[0][has_attachment]':'false',
    'message_batch[0][html_body]':'false',
    'message_batch[0][ui_push_phase]':'V3',
    'message_batch[0][status]':'0',
    'message_batch[0][message_id]':tmp.message_id,
    'message_batch[0][manual_retry_cnt]':'0',
    'message_batch[0][thread_fbid]':thread_id
  };
  _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
      var strData = makeParsable(html);
      try{
        var ret = strData.map(JSON.parse);

        cb({
          thread_id: ret.thread_fbid, // LOL
        });
      } catch (e) {
        console.log("ERROR", e, html);
      }
    }.bind(this));
  }.bind(api);

  time.initialize();

  var form2 = {
    'grammar_version':'94ad0a5516d7a8d7a8aefb2f83aaf2e8e424b256',
    '__dyn': '7nmajEyl35zoSt2u6aOGeFxq9ACxO4oKAdBGeqrWo8popyUW5ogxd6xymmey8szoyfwgp98O',
    '__user':userId,
    '__a':'1',
    '__req':'1',
    '__rev':'1609713'
  };
  console.log("Request to null_state");
  _get("https://www.facebook.com/ajax/browse/null_state.php", jar, form2, function(err, res, html) {
    // console.log("--->", html);
    console.log("Request to reconnect");
    var form3 = {
      '__user': userId,
      '__a': '1',
      '__rev': '1609713',
      '__dyn': '7nmajEyl35zoSt2u6aOGeFxq9ACxO4oKAdBGeqrWo8popyUW5ogxd6xymmey8szoyfwgp98O',
      'reason': '6',
      'fb_dtsg': fb_dtsg
    };
    _get("https://www.facebook.com/ajax/presence/reconnect.php", jar, form3, function(err, res, html) {
      var cookies = res.headers['set-cookie'] || [];
      cookies.map(function (c) {
        jar.setCookie(c, "https://www.facebook.com");
      });

      // console.log("--->", html);
      console.log("Request to imps_logging");
      form3.source = "periodical_imps";
      form3.sorted_list = "1216678154,1086418163,100001056938824,1341803147";
      form3.list_availability = "2,2,3,3";
      form3.ttstamp = ttstamp;
      _get("https://www.facebook.com/ajax/chat/imps_logging.php", jar, form3, function(err, res, html) {
        // console.log("--->", html);
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
                  var form4 = {
                    'lastSync':~~(Date.now()/1000 - 60000),
                    '__user': userId,
                    '__a': '1',
                    '__rev': '1609713',
                    '__dyn': '7nmajEyl35zoSt2u6aOGeFxq9ACxO4oKAdBGeqrWo8popyUW5ogxd6xymmey8szoyfwgp98O',
                  };
                  console.log("Request to sync");
                  _get("https://www.facebook.com/notifications/sync", jar, form4, function(err, res, html) {
                    // console.log("sync --->", html);
                    console.log("Request to bz");
                    var cookies = res.headers['set-cookie'] || [];
                    cookies.map(function (c) {
                      jar.setCookie(c, "https://www.facebook.com");
                    });
                    var form5 = {
                      '__user': userId,
                      '__a': '1',
                      '__rev': '1609713',
                      '__dyn': '7nmajEyl35zoSt2u6aOGeFxq9ACxO4oKAdBGeqrWo8popyUW5ogxd6xymmey8szoyfwgp98O',
                      'fb_dtsg': fb_dtsg,
                      'ttstamp': ttstamp,
                      'ph': "V3",
                      'ts': Date.now()
                    };
                    _post("https://www.facebook.com/ajax/bz", jar, form5, function(err, res, html) {
                      // console.log("bz --->", html);
                      form.cb = getCB();
                      console.log("Request to active_ping");
                      _get("https://0-edge-chat.facebook.com/active_ping", jar, form, function(err, res, html) {
                        var form6 = {
                          '__user': userId,
                          '__a': '1',
                          '__rev': '1609713',
                          '__dyn': '7nmajEyl35zoSt2u6aOGeFxq9ACxO4oKAdBGeqrWo8popyUW5ogxd6xymmey8szoyfwgp98O',
                          'fb_dtsg': fb_dtsg,
                          'ttstamp': ttstamp,
                          'client': 'mercury',
                          'folders[0]': 'inbox',
                          'last_action_timestamp': ~~(Date.now() - 60000)
                        };
                        _get("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form, function(err, res, html) {
                          // console.log("--->", html);
                          console.log("Ready!");
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

var credentials = JSON.parse(fs.readFileSync('config.json', 'utf8'));
login(credentials.email, credentials.password, function(api) {
  api.listen(function(message, closeConnection) {
    console.log(message);
    if(message.tid) {
      var thread_id = getThreadIdFromMessage(message);
      var msg = bot(message.body, message.sender_name.split(' ')[0], message.tid, message.group_thread_info.participant_names);
      console.log('BOT GONNA SEND -------> ',typeof msg, msg, message.body, message.sender_name.split(' ')[0], message.tid, message.group_thread_info.participant_names);
      if(msg && msg.length > 0) api.sendMessage(msg, thread_id);
    }
  });
});

function getCB() {
  return (1048576 * Math.random() | 0).toString(36);
}

function getThreadIdFromMessage(message) {
  return message.tid.split(".")[1];
}

function normalizeMessage(m) {
  // var obj = {};
  var originalMessage = m.ms[0];
  // obj = ;
  // obj.type = originalMessage.type;
  // obj.event = originalMessage.event;
  if(originalMessage.message) return originalMessage.message;
  console.log(originalMessage);
  return originalMessage;
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