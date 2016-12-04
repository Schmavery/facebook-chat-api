"use strict";

var utils = require("../utils");

module.exports = function(defaultFuncs, api, ctx) {
  return function searchContext(messageID, threadID, isGroup, limit, direction, callback) {
    if(!callback && utils.getType(threadID) === 'Function') {
      return callback({error: "Pass a threadID as a second argument."});
    }
    if (!callback) {
      throw {error: "searchContext: need callback"};
    }

    var tmpForm = {
      client: 'web_messenger',
      message_id: messageID,
      limit: limit || 6,
      direction: direction,
    };
    if (isGroup) {
      tmpForm.thread_fbid = threadID;
    } else {
      tmpForm.other_user_fbid = threadID;
    }

    defaultFuncs
      .post('https://www.facebook.com/ajax/mercury/search_context.php?dpr=1', ctx.jar, tmpForm)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        var payload = resData.payload.mercury_payload.actions;
        return callback(null, payload);
      });
  };
};
