"use strict";

var utils = require("../utils");

module.exports = function(defaultFuncs, api, ctx) {
  return function searchForThread(name, callback) {
    if (!callback) {
      throw {error: "searchForThread: need callback"};
    }

    var tmpForm = {
      client: 'web_messenger',
      query: name,
      offset: 0,
      limit: 21,
      index: 'fbid',
    };

    defaultFuncs
      .post('https://www.facebook.com/ajax/mercury/search_threads.php', ctx.jar, tmpForm)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        if (!resData.payload.mercury_payload.threads){
          return callback({error: "Could not find thread `"+name+"`."});
        }
        return callback(null, resData.payload.mercury_payload
          .threads.map(utils.formatThread));
      });
  };
};
