"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeThreadColor(color, threadID, callback) {
    if(!callback) {
      callback = function() {};
    }
    var loweredColor = color;

    if(loweredColor !== null) {
        loweredColor = color.toLowerCase(); // API only accepts lowercase letters in hex string

        var validColors = api.getValidThreadColors();
        if(!validColors.includes(loweredColor)) {
            throw {error: "The color you are trying to use is not a valid thread color. Use api.getValidThreadColors() to find acceptable values."};
        }
    }

    var form = {
      'color_choice' : loweredColor,
      'thread_or_other_fbid' : threadID
    };

    defaultFuncs
      .post("https://www.messenger.com/messaging/save_thread_color/?source=thread_settings&dpr=1", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
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
        log.error("changeThreadColor", err);
        return callback(err);
      });
  };
};
