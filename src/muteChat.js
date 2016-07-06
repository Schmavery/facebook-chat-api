"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function muteChat(threadID, muteSecond, callback) {
    if(!callback) {
      callback = function() {};
    }

    var form = {};
    form["thread_fbid"] = threadID;
    form["mute_settings"] = muteSecond;

    defaultFuncs
      .post("https://www.facebook.com/ajax/mercury/change_mute_thread.php", ctx.jar, form)
      .then(utils.saveCookies(ctx.jar))
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("Error in muteChat", err);
        return callback(err);
      });
  };
};
