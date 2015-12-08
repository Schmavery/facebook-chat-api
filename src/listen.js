"use strict";

var utils = require("../utils");
var log = require("npmlog");

var msgsRecv = 0;

module.exports = function(defaultFuncs, api, ctx) {
  var shouldStop = false;
  var currentlyRunning = null;
  var stopListening = function() {
    shouldStop = true;
    if(currentlyRunning) {
      clearTimeout(currentlyRunning);
    }
  };

  var prev = Date.now();
  var tmpPrev = Date.now();
  var lastSync = Date.now();

  var form = {
    'channel' : 'p_' + ctx.userID,
    'seq' : '0',
    'partition' : '-2',
    'clientid' : ctx.clientID,
    'viewer_uid' : ctx.userID,
    'uid' : ctx.userID,
    'state' : 'active',
    'idle' : 0,
    'cap' : '8',
    'msgs_recv':msgsRecv
  };

  var globalCallback = null;

  /**
   * Get an object maybe representing an event. Handles events it wants to handle
   * and returns true if it did handle an event (and called the globalCallback).
   * Returns false otherwise.
   */
  function handleMessagingEvents(event) {
    switch (event.event) {
      case 'read_receipt':
        globalCallback(null, utils.formatReadReceipt(event));
        return true;
      default:
        return false;
    }
  }

  function listen() {
    if(shouldStop || !ctx.loggedIn) {
      return;
    }

    form.idle = ~~(Date.now() / 1000) - prev;
    prev = ~~(Date.now() / 1000);

    utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form)
    .then(utils.parseAndCheckLogin)
    .then(function(resData) {
      var now = Date.now();
      log.info("Got answer in ", now - tmpPrev);
      tmpPrev = now;

      if(resData && resData.t === "lb") {
        form.sticky_token = resData.lb_info.sticky;
        form.sticky_pool = resData.lb_info.pool;
      }

      if(resData && resData.t === 'fullReload') {
        form.seq = resData.seq;
        delete form.sticky_pool;
        delete form.sticky_token;
        var form4 = {
          'lastSync' : ~~(lastSync/1000),
        };
        defaultFuncs.get("https://www.facebook.com/notifications/sync/", ctx.jar, form4)
        .then(utils.saveCookies(ctx.jar))
        .then(function() {
          lastSync = Date.now();
          var form = {
            'client' : 'mercury',
            'folders[0]': 'inbox',
            'last_action_timestamp' : ~~(Date.now() - 60)
          };
          defaultFuncs.post("https://www.facebook.com/ajax/mercury/thread_sync.php", ctx.jar, form)
          .then(function() {
            currentlyRunning = setTimeout(listen, 1000);
          });
        });
        return;
      }

      if(resData.ms) {
        msgsRecv += resData.ms.length;
        var atLeastOne = false;
        resData.ms.sort(function(a, b) {
          return a.timestamp - b.timestamp;
        }).forEach(function parsePackets(v) {
          switch (v.type) {
            // TODO: 'ttyp' was used before. It changed to 'typ'. We're keeping
            // both for now but we should remove 'ttyp' at some point.
            case 'ttyp':
            case 'typ':
              if(!ctx.globalOptions.listenEvents ||
                (!ctx.globalOptions.selfListen && v.from.toString() === ctx.userID)) {
                return;
              }

              globalCallback(null, utils.formatTyp(v));
              break;
            case 'buddylist_overlay':
              // TODO: what happens when you're logged in as a page?
              if(!ctx.globalOptions.updatePresence) {
                return;
              }

              // There should be only one key inside overlay
              Object.keys(v.overlay).map(function(userID) {
                var formattedPresence = utils.formatPresence(v.overlay[userID], userID);
                if(!shouldStop && ctx.loggedIn) {
                  globalCallback(null, formattedPresence);
                }
              });
              break;
            case 'mercury':
              if(ctx.globalOptions.pageID || !ctx.globalOptions.listenEvents){
               return;
              }

              v.actions.map(function(v2) {
                var formattedEvent = utils.formatEvent(v2);
                if(!ctx.globalOptions.selfListen && formattedEvent.author.toString() === ctx.userID) {
                  return;
                }

                if (!shouldStop && ctx.loggedIn) {
                  globalCallback(null, formattedEvent);
                }
              });
              break;
            case 'messaging':
              if (ctx.globalOptions.listenEvents && handleMessagingEvents(v)) {
                // globalCallback got called if handleMessagingEvents returned true
                return;
              }

              if(ctx.globalOptions.pageID ||
                v.event !== "deliver" ||
                (!ctx.globalOptions.selfListen && v.message.sender_fbid.toString() === ctx.userID)) {
                return;
              }


              atLeastOne = true;
              var message = utils.formatMessage(v);

              // The participants array is caped at 5, we need to query more to
              // get them.
              if(message.participantIDs.length >= 5) {
                api.searchForThread(message.threadName, function(err, res) {
                  if (err) {
                    globalCallback(err);
                  }

                  // we take the first thread among all the returned threads
                  var firstThread = res.filter(function(v) {
                    return v.threadID === message.threadID;
                  })[0];
                  if (!firstThread) {
                    return globalCallback({error: "Couldn't retrieve thread participants for thread with name " + message.threadName + " and ID " + message.threadID});
                  }

                  message.participantIDs = firstThread.participants;
                  api.getUserInfo(firstThread.participants, function(err, firstThread) {
                    if (err) {
                      throw err;
                    }

                    message.participantsInfo = Object.keys(firstThread).map(function(key) {
                      return firstThread[key];
                    });
                    // Rename this?
                    message.participantNames = message.participantsInfo.map(function(v) {
                      return v.name;
                    });
                    globalCallback(null, message);
                  });
                });
                return;
              }

              if (!shouldStop && ctx.loggedIn) {
                globalCallback(null, message);
              }
              break;
            case 'pages_messaging':
              if(!ctx.globalOptions.pageID ||
                v.event !== "deliver" ||
                (!ctx.globalOptions.selfListen && (v.message.sender_fbid.toString() === ctx.userID ||
                                                   v.message.sender_fbid.toString() === ctx.globalOptions.pageID)) ||
                v.realtime_viewer_fbid.toString() !== ctx.globalOptions.pageID) {
                return;
              }

              atLeastOne = true;
              if (!shouldStop && ctx.loggedIn) {
                globalCallback(null, utils.formatMessage(v));
              }
              break;
          }
        });

        if(atLeastOne) {
          // Send deliveryReceipt notification to the server
          var formDeliveryReceipt = {};

          resData.ms.filter(function(v) {
            return v.message && v.message.mid && v.message.sender_fbid.toString() !== ctx.userID;
          }).forEach(function(val, i) {
            formDeliveryReceipt["[" + i + "]"] = val.message.mid;
          });

          // If there's at least one, we do the post request
          if(formDeliveryReceipt["[0]"]) {
            defaultFuncs.post("https://www.facebook.com/ajax/mercury/delivery_receipts.php", ctx.jar, formDeliveryReceipt);
          }
        }
      }

      if(resData.seq) {
        form.seq = resData.seq;
      }
      if(resData.tr) {
        form.traceid = resData.tr;
      }
      currentlyRunning = setTimeout(listen, Math.random() * 200 + 50);

    })
    .catch(function(err) {
      log.error("ERROR in listen --> ", err);
      globalCallback(err);
      currentlyRunning = setTimeout(listen, Math.random() * 200 + 50);
    });
  }

  return function(callback) {
    globalCallback = callback;

    if (!currentlyRunning) {
      currentlyRunning = setTimeout(listen, Math.random() * 200 + 50, callback);
    }

    return stopListening;
  };
};
