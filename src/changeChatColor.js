"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeChatColor(color, threadID, callback) {
    var form = {
      'color_choice' : color,
      'thread_or_other_fbid' : threadID
    };
    console.log();
    ctx.jar.setCookie("act="+encodeURIComponent(Date.now() + "/" + ~~(Math.random() * 100))+"; path=/; domain=.messenger.com; secure", "https://www.messenger.com");
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
      })
      .catch(function(err) {
        log.error("Error in changeChatColor", err);
        return callback(err);
      });
  };
};
