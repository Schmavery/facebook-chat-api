"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function (defaultFuncs, api, ctx) {
  return function markAsDelivered(threadID, messageID, callback) {
    if (!callback) {
      callback = function () { };
    }

    if (!threadID || !messageID) {
      return callback("Error: messageID or threadID is not defined");
    }

    var form = {};

    form["message_ids[0]"] = messageID;
    form["thread_ids[" + threadID + "][0]"] = messageID;

    defaultFuncs
      .post(
        "https://www.facebook.com/ajax/mercury/delivery_receipts.php",
        ctx.jar,
        form
      )
      .then(utils.saveCookies(ctx.jar))
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function (resData) {
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function (err) {
        log.error("markAsDelivered", err);
        return callback(err);
      });
  };
};
