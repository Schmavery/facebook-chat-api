"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeThreadColor(color, threadID, callback) {
    var form = {
      'color_choice' : color,
      'thread_or_other_fbid' : threadID
    };

    defaultFuncs
      .post("https://www.messenger.com/messaging/save_thread_color/?source=thread_settings&dpr=1", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error === 1357031) {
          throw {error: "Trying to change colors of a chat that doesn't exist. Have at least one message in the thread before trying to change the colors."};
        }
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("Error in changeThreadColor", err);
        return callback(err);
      });
  };
};
