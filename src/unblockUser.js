"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function unblockUser(userID, callback) {

    if (!callback) {
      callback = function() {};
    }

    defaultFuncs
      .post("https://www.facebook.com/ajax/nfx/messenger_undo_block.php?story_location=messenger&context=%7B%22reportable_ent_token%22%3A%22" + userID + "%22%2C%22initial_action_name%22%3A%22BLOCK_MESSAGES%22%7D&", ctx.jar, {})
      .then(utils.saveCookies(ctx.jar))
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("Error in unblockUser", err);
        return callback(err);
      });
  }
};