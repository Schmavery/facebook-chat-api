"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeThreadUserNickname(nickname, threadID, participantID, callback) {
		
    var form = {
      'nickname': nickname,
			'participant_id': participantID,
      'thread_or_other_fbid': threadID
    };
		console.log(form);

    defaultFuncs
      .post("https://www.messenger.com/messaging/save_thread_nickname/?source=thread_settings&dpr=1", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
				console.log(resData);
				if (resData.error === 1545014) {
          throw {error: "Trying to change user nickname what isnt in thread"};
        }
        if (resData.error === 1357031) {
          throw {error: "Trying to change user nickname of a chat that doesn't exist. Have at least one message in the thread before trying to change the user nickname."};
        }
        if (resData.error) {
          throw resData;
        }
				
				return callback();
      })
			.catch(function(err) {
        log.error("Error in changeThreadUserNickname", err);
        return callback(err);
      });
  };
};
