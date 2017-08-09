"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function markAsRead(threadID, callback) {
    if(!callback) {
      callback = function() {};
    }

    var form = {};
    form["ids[" + threadID + "]"] = true;
    form["watermarkTimestamp"] = new Date().getTime();
    form["shouldSendReadReceipt"] = true;
    form["commerce_last_message_type"] = "non_ad";
    form["titanOriginatedThreadId"] = utils.generateThreadingID(ctx.clientID);

    defaultFuncs
      .post("https://www.facebook.com/ajax/mercury/change_read_status.php", ctx.jar, form)
      .then(utils.saveCookies(ctx.jar))
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("markAsRead", err);
        return callback(err);
      });
  };
};
