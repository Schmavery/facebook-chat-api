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
    'channel' : 'p_' + ctx.userId,
    'seq' : '0',
    'partition' : '-2',
    'clientid' : ctx.clientid,
    'viewer_uid' : ctx.userId,
    'uid' : ctx.userId,
    'state' : 'active',
    'idle' : 0,
    'cap' : '8',
    'msgs_recv':msgs_recv
  };

  return function listen(callback) {
    if(shouldStop) return;

    form.idle = ~~(Date.now()/1000) - prev;
    prev = ~~(Date.now()/1000);

    // TODO: get the right URL to query...
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
            currentlyRunning = setTimeout(api.listen, 1000, callback);
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
              Object.keys(v.overlay).map(function(userId) {
                var formattedPresence = utils.formatPresence(v.overlay[userId], userId);
                if(!shouldStop) callback(null, formattedPresence, stopListening);
              });
              break;
            case 'mercury':
              if(ctx.globalOptions.pageId) return;
              if(!ctx.globalOptions.listenEvents) return;
              v.actions.map(function(v2) {
                var formattedEvent = utils.formatEvent(v2);
                if(!ctx.globalOptions.selfListen && formattedEvent.author.toString() === ctx.userId.toString()) return;

                if (!shouldStop) callback(null, formattedEvent, stopListening);
              });
              break;
            case 'messaging':
              if(ctx.globalOptions.pageId) return;
              if(v.event !== "deliver") return;
              if(!ctx.globalOptions.selfListen && v.message.sender_fbid.toString() === ctx.userId.toString()) return;
              atLeastOne = true;
              if (!shouldStop) callback(null, utils.formatMessage(v), stopListening);
              break;
            case 'pages_messaging':
              if(!ctx.globalOptions.pageId) return;
              if(v.event !== "deliver") return;
              if(!ctx.globalOptions.selfListen && (v.message.sender_fbid.toString() === ctx.userId.toString() || v.message.sender_fbid.toString() === ctx.globalOptions.pageId.toString())) return;
              if(v.realtime_viewer_fbid !== ctx.globalOptions.pageId) return;

              atLeastOne = true;
              if (!shouldStop) callback(null, utils.formatMessage(v), stopListening);
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
      currentlyRunning = setTimeout(api.listen, Math.random() * 200 + 50, callback);

    })
    .catch(function(err) {
      log.error("ERROR in listen --> ", err);
      callback(err, null, stopListening);
      currentlyRunning = setTimeout(api.listen, Math.random() * 200 + 50, callback);
    });
  };
};
