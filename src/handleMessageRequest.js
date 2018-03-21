"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function handleMessageRequest(threadID, accept, callback) {
    if (utils.getType(accept) !== "Boolean") {
      throw {
        error: "Please pass a boolean as a second argument."
      };
    }

    if (!callback) {
      callback = function() {};
    }

    var form = {
      client: "mercury"
    };

    if (utils.getType(threadID) !== "Array") {
      threadID = [threadID];
    }

    var messageBox = accept ? "inbox" : "other";

    for (var i = 0; i < threadID.length; i++) {
      form[messageBox + "[" + i + "]"] = threadID[i];
    }

    defaultFuncs
      .post(
        "https://www.facebook.com/ajax/mercury/move_thread.php",
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
        log.error("handleMessageRequest", err);
        return callback(err);
      });
  };
};
