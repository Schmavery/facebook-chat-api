"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeNickname(nickname, threadID, participantID, callback) {
    callback = callback || function() {};

    var form = {
      nickname: nickname,
      participant_id: participantID,
      thread_or_other_fbid: threadID
    };

    defaultFuncs
      .post(
        "https://www.facebook.com/messaging/save_thread_nickname/?source=thread_settings&dpr=1",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error === 1545014) {
          throw { error: "Trying to change nickname of user isn't in thread" };
        }
        if (resData.error === 1357031) {
          throw {
            error:
              "Trying to change user nickname of a thread that doesn't exist. Have at least one message in the thread before trying to change the user nickname."
          };
        }
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("changeNickname", err);
        return callback(err);
      });
  };
};
