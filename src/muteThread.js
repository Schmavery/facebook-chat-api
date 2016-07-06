"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  // muteSecond: -1=permanent mute, 0=unmute, 60=one minute, 3600=one hour, etc.
  return function muteThread(threadID, muteSeconds, callback) {
    if(!callback) {
      callback = function() {};
    }

    var form = {
      thread_fbid: threadID,
      mute_settings: muteSeconds
    }

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
        log.error("Error in muteThread", err);
        return callback(err);
      });
  };
};
