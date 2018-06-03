"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeThreadColor(color, threadID, callback) {
    if (!callback) {
      callback = function() {};
    }

    var validatedColor = color !== null ? color.toLowerCase() : color; // API only accepts lowercase letters in hex string
    var colorList = Object.keys(api.threadColors).map(function(name) {
      return api.threadColors[name];
    });
    if (!colorList.includes(validatedColor)) {
      throw {
        error:
          "The color you are trying to use is not a valid thread color. Use api.threadColors to find acceptable values."
      };
    }

    var form = {
      color_choice: validatedColor,
      thread_or_other_fbid: threadID
    };

    defaultFuncs
      .post(
        "https://www.messenger.com/messaging/save_thread_color/?source=thread_settings&dpr=1",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error === 1357031) {
          throw {
            error:
              "Trying to change colors of a chat that doesn't exist. Have at least one message in the thread before trying to change the colors."
          };
        }
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("changeThreadColor", err);
        return callback(err);
      });
  };
};
