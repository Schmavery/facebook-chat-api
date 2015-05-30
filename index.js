var request = require("request").defaults({jar: true});
var cheerio = require("cheerio");
var log = require("npmlog");
var fs = require("fs");
var time = require("./time");

function _get(url, jar, qs, callback) {
  if(typeof qs === 'function') {
    callback = qs;
    qs = null;
  }
  if(typeof qs === "object") {
    for(var prop in qs) {
      if(qs.hasOwnProperty(prop) && typeof qs[prop] === "object") {
        qs[prop] = JSON.stringify(qs[prop]);
      }
    }
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

  log.info("Getting login form data");
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

    log.info("Logging in...");
    _post("https://www.facebook.com/login.php?login_attempt=1", jar, form, function(err, res, html) {
      var cookies = res.headers['set-cookie'] || [];
      cookies.map(function (c) {
        jar.setCookie(c, "https://www.facebook.com");
      });

      if (!res.headers.location) return callback({error: "Wrong username/password."});
      _get(res.headers.location, jar, function(err, res, html) {
        if(err) return callback(err);
        var maybeCookie = jar.getCookies("https://www.facebook.com").filter(function(val) {
          return val.cookieString().split("=")[0] === "c_user";
        });

        if(maybeCookie.length === 0) return callback(new Error("Error retrieving userId. This can be caused by a lot of things, including getting blocked by Facebook for logging in from an unknown location. Try logging in with a browser to verify."));

        var userId = maybeCookie[0].cookieString().split("=")[1];
        log.info("Logged in");

        var grammar_version = getFrom(html, "grammar_version\":\"", "\"");

        // I swear, this is copy pasted from FB's minified code
        var clientid = (Math.random()*2147483648|0).toString(16);
        var starTime = Date.now();
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
        var globalOptions = {
          selflisten: false
        };
        var access_token = "NONE";
        var shouldStop = false;
        var currentlyRunning = null;
        var stopListening = function() {
          shouldStop = true;
          if(currentlyRunning) clearTimeout(currentlyRunning);
        };

        var prev = Date.now();
        var tmpPrev = Date.now();
        var lastSync = Date.now();

        api.setOptions = function(options) {
          handleOptions(options);
        }

        function handleOptions(options){
          if (options.loglevel){
            log.level = options.loglevel;
            globalOptions.loglevel = options.loglevel;
          }
          if (options.selflisten){
            globalOptions.selflisten = options.selflisten;
          }
        }

        var _mergeWithDefault = (function() {
          var reqCounter = 1;
          return function (obj) {
            var newObj = {
              __user: userId,
              __req: (reqCounter++).toString(36),
              __rev: __rev,
              __a: 1,
              fb_dtsg: fb_dtsg,
              ttstamp: ttstamp,
            };

            if(!obj) return newObj;

            for(var prop in obj) {
              if(obj.hasOwnProperty(prop)) {
                newObj[prop] = obj[prop];
              }
            }

            return newObj;
          };
        })();



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
              info = JSON.parse(strData);

              var now = Date.now();
              log.info("Got answer in ", now - tmpPrev);
              tmpPrev = now;

              if(info && info.t === 'fullReload') {
                form.seq = info.seq;
                var form4 = _mergeWithDefault({
                  'lastSync' : ~~(lastSync/1000),
                });
                _get("https://www.facebook.com/notifications/sync/", jar, form4, function(err, res, html) {
                  var cookies = res.headers['set-cookie'] || [];
                  cookies.map(function (c) {
                    jar.setCookie(c, "https://www.facebook.com");
                  });
                  lastSync = Date.now();
                  var form6 = _mergeWithDefault({
                    'client' : 'mercury',
                    'folders[0]': 'inbox',
                    'last_action_timestamp' : ~~(Date.now() - 60)
                  });
                  _post("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form, function(err, res, html) {
                    log.info("thread sync --->", html);
                    currentlyRunning = setTimeout(api.listen, 1000, callback);
                  });
                });
                return;
              }

              if(info.ms) {
                info.ms = info.ms.filter(function(v) {
                  return  v.type === 'messaging' &&
                          v.event === 'deliver' &&
                          (globalOptions.selflisten
                           || v.message.sender_fbid.toString() !== userId);
                });

                // Send deliveryReceipt notification to the server
                var formDeliveryReceipt = _mergeWithDefault();

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
              log.error("ERROR in listen --> ",e, strData);
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
          var form = _mergeWithDefault({
            'value' : name.toLowerCase(),
            'viewer' : userId,
            'rsp' : "search",
            'context' : "search",
            'path' : "/home.php",
            'request_id' : getGUID(),
          });

          _get("https://www.facebook.com/ajax/typeahead/search.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            try{
              var ret = JSON.parse(strData);
              var info = ret.payload;
              if(info.entries[0].type !== "user") {
                return callback({error: "Couldn't find a user with name " + name + ". Best match: " + info.entries[0].path});
              }

              callback(null, info);
            } catch (e) {
              log.error("ERROR in sendDirectMessage --> ",e, strData);
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
          if (typeof sticker_id !== "number" && typeof sticker_id !== "string")
            return callback({error: "Sticker_id should be of type number or string and not " + typeof msg + "."});
          if (typeof thread_id !== "number" && typeof thread_id !== "string")
            return callback({error: "Thread_id should be of type number or string and not " + typeof msg + "."});
          var timestamp = Date.now();
          var d = new Date();
          var form = _mergeWithDefault({
            'client' : 'mercury',
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
            'message_batch[0][has_attachment]' : true,
            'message_batch[0][client_thread_id]' : "user:"+thread_id,
            'message_batch[0][signatureID]' : getSignatureId()
          });
          _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            var ret;
            try{
              ret = JSON.parse(strData);
            } catch (e) {
              log.error("ERROR in sendSticker --> ",e, strData);
              return callback({error: e});
            }

            if (!ret){
              callback({error: "Send sticker failed."});
            } else if (ret.error){
              if (ret.error == 1545012){
                log.error("Second call, creating chat");
                // Try to create new chat.
                form.__req = getReq();
                form['message_batch[0][specific_to_list][0]'] = "fbid:"+thread_id;
                form['message_batch[0][specific_to_list][1]'] = "fbid:"+userId;
                _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
                  var strData = makeParsable(html);
                  var ret;
                  try{
                    ret = JSON.parse(strData);
                  } catch (e) {
                    log.info("ERROR in sendSticker --> ",e, strData);
                    return callback({error: e});
                  }

                  if (!ret){
                    callback({error: "Send sticker failed."});
                  } else if (ret.error){
                    callback({error: ret});
                  } else {
                    callback();
                  }
                });
                return;
              }
              callback({error: ret});
            } else {
              callback();
            }
          });
        };

        api.setTitle = function(newTitle, thread_id, callback) {
          if(!callback) callback = function() {};
          var timestamp = Date.now();
          var d = new Date();
          var form = _mergeWithDefault({
            'client' : 'mercury',
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
          });

          _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            var ret;
            try{
              ret = JSON.parse(strData);
            } catch (e) {
              log.error("ERROR in setTitle --> ",e, strData);
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

        api.getThreadList = function(start, end, callback) {
          if(!callback) callback = function() {};

          if (end <= start) end = start + 20;

          var form = _mergeWithDefault({
            'client' : 'mercury',
            'inbox[offset]' : start,
            'inbox[limit]' : end
          });

          _post("https://www.facebook.com/ajax/mercury/threadlist_info.php", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            var ret;
            try{
              ret = JSON.parse(strData);
            } catch (e) {
              log.error("ERROR in setTitle --> ",e, strData);
              callback({error: e});
            }

            if (ret.error && ret.error === 1545012){
              callback({error: "Cannot change chat title: Not member of chat."});
            } else if (ret.error && ret.error === 1545003){
              callback({error: "Cannot set title of single-user chat."});
            } else if (ret.error) {
              callback({error: ret});
            } else callback(null, ret.payload.threads);
          });
        };


        api.markAsRead = function(thread_id, callback) {
          if(!callback) callback = function() {};
          var form = _mergeWithDefault();

          form["ids[" + thread_id + "]"] = true;

          _post("https://www.facebook.com/ajax/mercury/change_read_status.php", jar, form, function(err, res, html) {
            var cookies = res.headers['set-cookie'] || [];
            cookies.map(function (c) {
              jar.setCookie(c, "https://www.facebook.com");
            });

            var strData = makeParsable(html);
            try {
              var ret = JSON.parse(strData);
            } catch (e) {
              log.error("ERROR in markAsRead --> ",e, strData);
              return callback({error: e});
            }
            callback();
          });
        };

        api.sendMessage = function(msg, thread_id, callback) {
          if(!callback) callback = function() {};
          if(typeof msg !== "string") return callback({error: "Message should be of type string and not " + typeof msg + "."});
          if (typeof thread_id !== "number" && typeof thread_id !== "string")
            return callback({error: "Thread_id should be of type number or string and not " + typeof msg + "."});

          var timestamp = Date.now();
          var d = new Date();
          var form = _mergeWithDefault({
            'client' : 'mercury',
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
            'message_batch[0][has_attachment]' : false,
            'message_batch[0][signatureID]' : getSignatureId(),
          });

          // We're doing a query to this to check if the given id is the id of
          // a user or of a group chat. The form will be different depending
          // on that.
          api.getUserInfo(thread_id, function(err, res) {
            // This means that thread_id is the id of a user, and the chat
            // is a single person chat
            if(!(res instanceof Array)) {
              form['message_batch[0][client_thread_id]'] = "user:"+thread_id;
              form['message_batch[0][specific_to_list][0]'] = "fbid:"+thread_id;
              form['message_batch[0][specific_to_list][1]'] = "fbid:"+userId;
            }

            _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {

              var strData = makeParsable(html);
              var ret;
              try{
                ret = JSON.parse(strData);
              } catch (e) {
                log.error("ERROR in sendMessage --> ",e, strData);
                return callback({error: e});
              }

              if (!ret){
                callback({error: "Send message failed."});
              } else if (ret.error){
                if (ret.error == 1545012){
                  log.info("Second call, creating chat");
                  // Try to create new chat.
                  form.__req = getReq();
                  form['message_batch[0][specific_to_list][0]'] = "fbid:"+thread_id;
                  form['message_batch[0][specific_to_list][1]'] = "fbid:"+userId;
                  _post("https://www.facebook.com/ajax/mercury/send_messages.php", jar, form, function(err, res, html) {
                    var strData = makeParsable(html);
                    var ret;
                    try{
                      ret = JSON.parse(strData);
                    } catch (e) {
                      log.error("ERROR in sendMessage --> ",e, strData);
                      return callback({error: e});
                    }

                    if (!ret){
                      callback({error: "Send message failed."});
                    } else if (ret.error){
                      callback({error: ret});
                    } else {
                      callback();
                    }
                  });
                  return;
                }
                callback({error: ret});
              } else {
                callback();
              }
            });
          });
        };

        api.getAccessToken = function() {
          return access_token;
        };

        api.getFriendsList = function(id, callback) {
          if(!id) return log.error("getFriendsList: need id");
          if(!callback) return log.error("getFriendsList: need callback");

          id = parseInt(id);

          _get("https://www.facebook.com/" + id, jar, function(err, res, html) {
            if(err) return log.error("_get returned error on https://www.facebook.com/" + id);

            var maybeUrl = getFrom(html, "window.location.replace(\"", "\");").split("\\/").join("/");

            if(maybeUrl.length === 0) return callback({error: "Problem retrieving friends list. Couldn't find redirect url."});

            // Old profiles use profile.php?something=username and not
            // /username
            if(maybeUrl.indexOf("profile.php") !== -1) maybeUrl += "&sk=friends";
            else maybeUrl += "/friends";

            _get(maybeUrl, jar, function(err, res, html) {
              if(err) {
                log.error("_get returned error on " + maybeUrl + "/friends");
                return callback(err);
              }
              // Hacky way to remove commented out HTML
              html = html.split("<!--").join("").split("-->").join("");

              var maybeAllFriends = html.split("AllFriendsAppCollectionPagelet");
              if(maybeAllFriends.length === 1) maybeAllFriends = html.split("FriendsAppCollectionPagelet");
              if(maybeAllFriends.length === 1) return log.error("Couldn't find token on page. Assuming you can't access this person's friends: " + id);

              var token = getFrom(maybeAllFriends[1], "\"token\":\"", "\"");

              var $ = cheerio.load(html);

              var friendsList = $(".uiProfileBlockContent div div div a");
              if(!friendsList) return callback({error: "Couldn't retrieve friends list from " + id + "."});

              var friendsData = [];

              friendsList.map(function(i, v) {
                var res = null;
                try {
                  res = JSON.parse($(v).attr("data-gt"));
                } catch(e) {
                  return;
                }
                friendsData.push(parseInt(res.engagement.eng_tid));
              });

              var _getFriendsFromId = function(lastId, cb) {
                var formFriendsList = _mergeWithDefault({
                  data: {
                    collection_token: token,
                    cursor: new Buffer("0:not_structured:" + lastId).toString('base64'),
                    tab_key:"friends",
                    profile_id:id,
                    overview:false,
                    sk:"friends"
                  }
                });

                _get("https://www.facebook.com/ajax/pagelet/generic.php/AllFriendsAppCollectionPagelet", jar, formFriendsList, function(err, res, html) {
                  if(err) {
                    log.error("error at AllFriendsAppCollectionPagelet", err);
                    return cb(err);
                  }

                  var strData = makeParsable(html);
                  var ret;
                  try{
                    ret = JSON.parse(strData);
                  } catch (e) {
                    log.error("ERROR in getFriendsList --> ", e, strData);
                    return cb(e);
                  }

                  var nextBatch = ret.jsmods.require.filter(function(v) {
                    return v[0] === "AddFriendButton";
                  }).map(function(v) {
                    return v[3][1];
                  });

                  if(nextBatch.length === 0) {
                    return cb(null, []);
                  }

                  setTimeout(function() {
                    _getFriendsFromId(parseInt(nextBatch[nextBatch.length - 1]), function(err, data) {
                      cb(err, nextBatch.concat(data));
                    });
                  }, 100);
                });
              };

              var lastId = parseInt(friendsData[friendsData.length-1]);

              _getFriendsFromId(lastId, function(err, data) {
                callback(err, friendsData.concat(data));
              });
            });
          });
        };

        api.getUserInfo = function(id, callback) {
          var form = _mergeWithDefault();
          if(!(id instanceof Array)) id = [id];

          id.map(function(v, i) {
            form["ids[" + i + "]"] = v;
          });

          _get("https://www.facebook.com/chat/user_info/", jar, form, function(err, res, html) {
            var strData = makeParsable(html);
            var ret;
            try{
              ret = JSON.parse(strData);
            } catch (e) {
              log.error("ERROR in getUserInfo --> ",e, "\nnumber of ids:", id.length, "\n-------- strData --------\n" ,strData);
              return callback(e);
            }
            callback(null, ret.payload.profiles);
          });
        };

        time.initialize();

        var form2 = _mergeWithDefault({
          'grammar_version' : grammar_version,
        });
        log.info("Initial requests...");
        log.info("Request to null_state");
        _get("https://www.facebook.com/ajax/browse/null_state.php", jar, form2, function(err, res, html) {
          log.info("Request to reconnect");
          var form3 = _mergeWithDefault({
            reason: 6,
          });
          _get("https://www.facebook.com/ajax/presence/reconnect.php", jar, form3, function(err, res, html) {
            var cookies = res.headers['set-cookie'] || [];
            cookies.map(function (c) {
              jar.setCookie(c, "https://www.facebook.com");
            });

            time.reportPullSent();
            log.info("Request to pull 1");
            _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
              time.reportPullReturned();
              form.wtc = time.doSerialize();
              var strData = makeParsable(html);
              try {
                var info = JSON.parse(strData);

                form.sticky_token = info.lb_info.sticky;
                form.sticky_pool = info.lb_info.pool;
              } catch (e) {
                log.error("ERROR in init --> ",e, strData);
                callback({error: e});
              }
              log.info("Request to pull 2");
              _get("https://0-edge-chat.facebook.com/pull", jar, form, function(err, res, html) {
                time.reportPullReturned();
                form.wtc = time.doSerialize();
                var form4 = _mergeWithDefault({
                  'lastSync' : ~~(Date.now()/1000 - 60),
                });
                log.info("Request to sync");
                _get("https://www.facebook.com/notifications/sync", jar, form4, function(err, res, html) {

                  var cookies = res.headers['set-cookie'] || [];
                  cookies.map(function (c) {
                    jar.setCookie(c, "https://www.facebook.com");
                  });

                  var form6 = _mergeWithDefault({
                    'client' : 'mercury',
                    'folders[0]': 'inbox',
                    'last_action_timestamp' : '0'
                  });
                  log.info("Request to thread_sync");
                  _post("https://www.facebook.com/ajax/mercury/thread_sync.php", jar, form, function(err, res, html) {
                    var cookies = res.headers['set-cookie'] || [];
                    cookies.map(function (c) {
                      jar.setCookie(c, "https://www.facebook.com");
                    });

                    var graphAPIForm = _mergeWithDefault({
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
                    _post("https://www.facebook.com/v2.3/dialog/oauth/read", jar, graphAPIForm, function(err, res, html) {
                      graphAPIForm.read = "";
                      graphAPIForm.write = "publish_actions";
                      graphAPIForm.seen_scopes = graphAPIForm.write;
                      graphAPIForm["audience[0][value]"] = 40;
                      log.info("Getting write access.");
                      _post("https://www.facebook.com/v2.3/dialog/oauth/write", jar, graphAPIForm, function(err, res, html) {
                        graphAPIForm.write = "";
                        graphAPIForm.extended = "ads_management,ads_read,manage_notifications,manage_pages,publish_pages,read_insights,read_page_mailboxes,rsvp_event";
                        graphAPIForm.seen_scopes = graphAPIForm.extended;
                        graphAPIForm["audience[0][value]"] = "";
                        log.info("Getting extended access.");
                        _post("https://www.facebook.com/v2.3/dialog/oauth/extended", jar, graphAPIForm, function(err, res, html) {
                          var strData = makeParsable(html);
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
    if(!process.env.FB_LOGIN_EMAIL || !process.env.FB_LOGIN_PASSWORD) return console.error("Please define env variables");
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
  if(start < startToken.length) return "";

  var lastHalf = str.substring(start);
  var end = lastHalf.indexOf(endToken);
  return lastHalf.substring(0, end);
}

function makeParsable(html) {
  return html.replace(/for\s*\(\s*;\s*;\s*\)\s*;\s*/, "");
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

function getSignatureId(){
  return Math.floor(Math.random() * 2147483648).toString(16);
}

