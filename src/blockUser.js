"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function blockUser(userID, callback) {

    if (!callback) {
      callback = function() {};
    }

    defaultFuncs
      .post("https://www.facebook.com/nfx/block_messages/?thread_fbid=" + userID + "&location=www_chat_head", ctx.jar, {})
      .then(utils.saveCookies(ctx.jar))
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        defaultFuncs
          .post("https://www.facebook.com" + /action="(.+?)"+?/.exec(resData.jsmods.markup[0][1].__html)[1].replace(/&amp;/g, "&"), ctx.jar, {})
          .then(utils.saveCookies(ctx.jar))
          .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
          .then(function(_resData) {
            if (_resData.error) {
              throw _resData;
            }
            return callback();
          })
      })
      .catch(function(err) {
        log.error("Error in blockUser", err);
        return callback(err);
      });
  }
};