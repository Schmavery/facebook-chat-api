/*jslint node: true */
"use strict";

var time = require("../time");
var utils = require("../utils");
var log = require("npmlog");

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
    'channel' : "p_" + ctx.userId,
    'seq' : '0',
    'partition' : '-2',
    'clientid' : ctx.clientid,
    'viewer_uid' : ctx.userId,
    'uid' : ctx.userId,
    'state' : 'active',
    'format' : 'json',
    'idle' : 0,
    'cap' : '8'
  };

  return function listen(callback) {
    if(shouldStop) return;

    form.wtc = time.doSerialize();
    form.idle = ~~(Date.now()/1000) - prev;
    prev = ~~(Date.now()/1000);

    time.reportPullSent();

    // TODO: get the right URL to query...
    utils.get("https://0-edge-chat.facebook.com/pull", ctx.jar, form)
    .then(function(res) {
      var html = res.body;
      if(!html) throw "html was null after request to https://0-edge-chat.facebook.com/pull with form " + JSON.stringify(form);

      time.reportPullReturned();
      var strData = utils.makeParsable(html);
      var info = null;

      info = JSON.parse(strData);

      var now = Date.now();
      log.info("Got answer in ", now - tmpPrev);
      tmpPrev = now;

      if(info && info.t === "lb") {
        time.reportPullReturned();
        form.wtc = time.doSerialize();
        form.sticky_token = info.lb_info.sticky;
        form.sticky_pool = info.lb_info.pool;
      }

      if(info && info.t === 'fullReload') {
        form.seq = info.seq;
        delete form.sticky_pool;
        delete form.sticky_token;
        var form4 = mergeWithDefaults({
          'lastSync' : ~~(lastSync/1000),
        });
        utils.get("https://www.facebook.com/notifications/sync/", ctx.jar, form4)
        .then(function(res) {
          var cookies = res.headers['set-cookie'] || [];
          cookies.map(function (c) {
            ctx.jar.setCookie(c, "https://www.facebook.com");
          });
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

      if(info.ms) {
        var atLeastOne = false;
        info.ms.sort(function(a, b) {
          return a.timestamp - b.timestamp;
        }).map(function parsePackets(v) {
          switch (v.type) {
            case "mercury":
              if(!ctx.globalOptions.listenEvents) return;

              v.actions.map(function(v2) {
                callback(null, utils.formatEvent(v2), stopListening);
              });
              break;
            case "messaging":
              if(v.event !== "deliver") return;

              if(!ctx.globalOptions.selfListen && v.message.sender_fbid.toString() === ctx.userId) return;

              atLeastOne = true;
              callback(null, utils.formatMessage(v), stopListening);
              break;
          }
        });

        if(atLeastOne) {
          // Send deliveryReceipt notification to the server
          var formDeliveryReceipt = mergeWithDefaults();

          for (var i = 0; i < info.ms.length; i++) {
            if(info.ms[i].message && info.ms[i].message.mid) formDeliveryReceipt["[" + i + "]"] = info.ms[i].message.mid;
          }

          // If there's at least one, we do the post request
          if(formDeliveryReceipt["[0]"]) {
            utils.post("https://www.facebook.com/ajax/mercury/delivery_receipts.php", ctx.jar, formDeliveryReceipt);
          }
        }
        // info.ms = info.ms.map(utils.formatMessage);
        // info.ms.sort(function(a, b) {
        //   return a.timestamp - b.timestamp;
        // });
      }


      if(info.seq) form.seq = info.seq;
      if(info.tr) form.traceid = info.tr;
      currentlyRunning = setTimeout(api.listen, Math.random() * 200 + 50, callback);

    }).catch(function(err) {
      log.error("ERROR in listen --> ", err);
      callback(err, null, stopListening);
      currentlyRunning = setTimeout(api.listen, Math.random() * 200 + 50, callback);
    });
  };
};