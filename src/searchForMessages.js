"use strict";

var utils = require("../utils");

module.exports = function(defaultFuncs, api, ctx) {
  return function searchForMessages(query, threadID, isGroup, callback) {
    if(!callback && utils.getType(threadID) === 'Function') {
      return callback({error: "Pass a threadID as a second argument."});
    }
    if (!callback) {
      throw {error: "searchForMessages: need callback"};
    }

    var tmpForm = {
      client: 'web_messenger',
      query: query,
      snippetOffset: 0,
      snippetLimit: 5,
      identifier: "thread_fbid",
    };
    if (isGroup) {
      tmpForm.thread_fbid = threadID;
    } else {
      tmpForm.other_user_fbid = threadID;
    }

    defaultFuncs
      .post('https://www.facebook.com/ajax/mercury/search_snippets.php?dpr=1', ctx.jar, tmpForm)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        var payload = resData.payload.search_snippets[query][threadID].snippets;
        return callback(null, payload);
      });
  };
};
