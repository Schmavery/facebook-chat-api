"use strict";

var utils = require("../utils");
var log = require("npmlog");

var msgsRecv = 0;
var identity = function() {};

module.exports = function(defaultFuncs, api, ctx) {
  var currentlyRunning = null;
  var globalCallback = identity;

  var stopListening = function() {
    globalCallback = identity;
    if(currentlyRunning) {
      clearTimeout(currentlyRunning);
      currentlyRunning = null;
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

  /**
   * Get an object maybe representing an event. Handles events it wants to handle
   * and returns true if it did handle an event (and called the globalCallback).
   * Returns false otherwise.
   */
  function handleMessagingEvents(event) {
    switch (event.event) {
      // "read_receipt" event triggers when other people read the user's messages.
      case 'read_receipt':
        globalCallback(null, utils.formatReadReceipt(event));
        return true;
      // "read event" triggers when the user read other people's messages.
      case 'read':
        globalCallback(null, utils.formatRead(event));
        return true;
      default:
        return false;
    }
  }

  function listen() {
    if(currentlyRunning == null || !ctx.loggedIn) {
      return;
    }

    form.idle = ~~(Date.now() / 1000) - prev;
    prev = ~~(Date.now() / 1000);
    var presence = utils.generatePresence(ctx.userID);
    ctx.jar.setCookie("presence=" + presence + "; path=/; domain=.facebook.com; secure", "https://www.facebook.com");
    utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form)
    .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
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

              return globalCallback(null, utils.formatTyp(v));
              break;
            case 'buddylist_overlay':
              // TODO: what happens when you're logged in as a page?
              if(!ctx.globalOptions.updatePresence) {
                return;
              }

              // There should be only one key inside overlay
              Object.keys(v.overlay).map(function(userID) {
                var formattedPresence = utils.formatPresence(v.overlay[userID], userID);
                if(ctx.loggedIn) {
                  return globalCallback(null, formattedPresence);
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

                if (ctx.loggedIn) {
                  return globalCallback(null, formattedEvent);
                }
              });
              break;
            case 'delta':
              if (v.delta.class !== "NewMessage" || ctx.globalOptions.pageID){
                return;
              }
              var fmtMsg = utils.formatDeltaMessage(v);

              if (!ctx.globalOptions.selfListen && fmtMsg.senderID === ctx.userID){
                return;
              }

              return globalCallback(null, fmtMsg);
              break;
            case 'messaging':
              if (handleMessagingEvents(v)) {
                return;
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
              if (ctx.loggedIn) {
                return globalCallback(null, utils.formatMessage(v));
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
      if (currentlyRunning) {
        currentlyRunning = setTimeout(listen, Math.random() * 200 + 50);
      }
      return;
    })
    .catch(function(err) {
      if (err.code === 'ETIMEDOUT') {
        log.info("Suppressed timeout error.");
      } else {
        log.error("ERROR in listen --> ", err);
        globalCallback(err);
      }
      if (currentlyRunning) {
        currentlyRunning = setTimeout(listen, Math.random() * 200 + 50);
      }
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
