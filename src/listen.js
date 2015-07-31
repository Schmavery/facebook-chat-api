/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

var msgs_recv = 0;

module.exports = function(mergeWithDefaults, api, ctx) {
  var shouldStop = false;
  var currentlyRunning = null;
  var stopListening = function() {
    shouldStop = true;
    if(currentlyRunning) clearTimeout(currentlyRunning);
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
    'msgs_recv':msgs_recv
  };

  var globalCallback = null;

  function listen() {
    if(shouldStop) return;

    form.idle = ~~(Date.now()/1000) - prev;
    prev = ~~(Date.now()/1000);

    utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form)
    .then(utils.parseResponse)
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
        var form4 = mergeWithDefaults({
          'lastSync' : ~~(lastSync/1000),
        });
        utils.get("https://www.facebook.com/notifications/sync/", ctx.jar, form4)
        .then(utils.saveCookies(ctx.jar))
        .then(function(res) {
          lastSync = Date.now();
          var form6 = mergeWithDefaults({
            'client' : 'mercury',
            'folders[0]': 'inbox',
            'last_action_timestamp' : ~~(Date.now() - 60)
          });
          utils.post("https://www.facebook.com/ajax/mercury/thread_sync.php", ctx.jar, form)
          .then(function(res) {
            log.info("thread sync --->", res.body);
            currentlyRunning = setTimeout(listen, 1000);
          });
        });
        return;
      }

      if(resData.ms) {
        msgs_recv += resData.ms.length;
        var atLeastOne = false;
        resData.ms.sort(function(a, b) {
          return a.timestamp - b.timestamp;
        }).map(function parsePackets(v) {
          switch (v.type) {
            case 'buddylist_overlay':
              // TODO: what happens when you're logged in as a page?
              if(!ctx.globalOptions.updatePresence) return;

              // There should be only one key inside overlay
              Object.keys(v.overlay).map(function(userID) {
                var formattedPresence = utils.formatPresence(v.overlay[userID], userID);
                if(!shouldStop) globalCallback(null, formattedPresence);
              });
              break;
            case 'mercury':
              if(ctx.globalOptions.pageID) return;
              if(!ctx.globalOptions.listenEvents) return;
              v.actions.map(function(v2) {
                var formattedEvent = utils.formatEvent(v2);
                if(!ctx.globalOptions.selfListen && formattedEvent.author.toString() === ctx.userID.toString()) return;

                if (!shouldStop) globalCallback(null, formattedEvent);
              });
              break;
            case 'messaging':
              if(ctx.globalOptions.pageID) return;
              if(v.event !== "deliver") return;
              if(!ctx.globalOptions.selfListen && v.message.sender_fbid.toString() === ctx.userID.toString()) return;
              atLeastOne = true;
              if (!shouldStop) globalCallback(null, utils.formatMessage(v));
              break;
            case 'pages_messaging':
              if(!ctx.globalOptions.pageID) return;
              if(v.event !== "deliver") return;
              if(!ctx.globalOptions.selfListen && (v.message.sender_fbid.toString() === ctx.userID.toString() || v.message.sender_fbid.toString() === ctx.globalOptions.pageID.toString())) return;
              if(v.realtime_viewer_fbid !== ctx.globalOptions.pageID) return;

              atLeastOne = true;
              if (!shouldStop) globalCallback(null, utils.formatMessage(v));
              break;
          }
        });

        if(atLeastOne) {
          // Send deliveryReceipt notification to the server
          var formDeliveryReceipt = mergeWithDefaults();

          for (var i = 0; i < resData.ms.length; i++) {
            if(resData.ms[i].message && resData.ms[i].message.mid) formDeliveryReceipt["[" + i + "]"] = resData.ms[i].message.mid;
          }

          // If there's at least one, we do the post request
          if(formDeliveryReceipt["[0]"]) {
            utils.post("https://www.facebook.com/ajax/mercury/delivery_receipts.php", ctx.jar, formDeliveryReceipt);
          }
        }
      }

      if(resData.seq) form.seq = resData.seq;
      if(resData.tr) form.traceid = resData.tr;
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

    if (!currentlyRunning) currentlyRunning = setTimeout(listen, Math.random() * 200 + 50, callback);

    return stopListening;
  };
};
