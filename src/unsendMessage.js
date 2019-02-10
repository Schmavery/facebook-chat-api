"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function unsendMessage(messageID, callback) {
    if (!callback) {
      callback = function() {};
    }

    var form = {
      message_id: messageID
    };

    defaultFuncs
      .post(
        "https://www.facebook.com/messaging/unsend_message/",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("unsendMessage", err);
        return callback(err);
      });
  };
};
