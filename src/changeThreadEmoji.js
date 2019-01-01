"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeThreadEmoji(emoji, threadID, callback) {
    if (!callback) {
      callback = function() {};
    }
    var form = {
      emoji_choice: emoji,
      thread_or_other_fbid: threadID
    };

    defaultFuncs
      .post(
        "https://www.facebook.com/messaging/save_thread_emoji/?source=thread_settings&__pc=EXP1%3Amessengerdotcom_pkg",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error === 1357031) {
          throw {
            error:
              "Trying to change emoji of a chat that doesn't exist. Have at least one message in the thread before trying to change the emoji."
          };
        }
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("changeThreadEmoji", err);
        return callback(err);
      });
  };
};
