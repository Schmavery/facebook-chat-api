"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function deleteMessage(messageOrMessages, callback) {
    if (!callback) {
      callback = function() {};
    }

    var form = {
      client: "mercury"
    };

    if (utils.getType(messageOrMessages) !== "Array") {
      messageOrMessages = [messageOrMessages];
    }

    for (var i = 0; i < messageOrMessages.length; i++) {
      form["message_ids[" + i + "]"] = messageOrMessages[i];
    }

    defaultFuncs
      .post(
        "https://www.facebook.com/ajax/mercury/delete_messages.php",
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
        log.error("deleteMessage", err);
        return callback(err);
      });
  };
};
