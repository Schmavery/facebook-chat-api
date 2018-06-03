"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeBlockedStatus(userID, block, callback) {
    if (!callback) {
      callback = function() {};
    }
    if (block) {
      defaultFuncs
        .post(
          "https://www.facebook.com/nfx/block_messages/?thread_fbid=" +
            userID +
            "&location=www_chat_head",
          ctx.jar,
          {}
        )
        .then(utils.saveCookies(ctx.jar))
        .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
        .then(function(resData) {
          if (resData.error) {
            throw resData;
          }
          defaultFuncs
            .post(
              "https://www.facebook.com" +
                /action="(.+?)"+?/
                  .exec(resData.jsmods.markup[0][1].__html)[1]
                  .replace(/&amp;/g, "&"),
              ctx.jar,
              {}
            )
            .then(utils.saveCookies(ctx.jar))
            .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
            .then(function(_resData) {
              if (_resData.error) {
                throw _resData;
              }
              return callback();
            });
        })
        .catch(function(err) {
          log.error("changeBlockedStatus", err);
          return callback(err);
        });
    } else {
      defaultFuncs
        .post(
          "https://www.facebook.com/ajax/nfx/messenger_undo_block.php?story_location=messenger&context=%7B%22reportable_ent_token%22%3A%22" +
            userID +
            "%22%2C%22initial_action_name%22%3A%22BLOCK_MESSAGES%22%7D&",
          ctx.jar,
          {}
        )
        .then(utils.saveCookies(ctx.jar))
        .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
        .then(function(resData) {
          if (resData.error) {
            throw resData;
          }

          return callback();
        })
        .catch(function(err) {
          log.error("changeBlockedStatus", err);
          return callback(err);
        });
    }
  };
};
