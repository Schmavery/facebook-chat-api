"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function handleMessageRequests(threadID, isAccept, callback) {
    if(!callback && utils.getType(isAccept) === 'Function') {
      throw {error: "please pass a boolean as a second argument."};
    }

    if (!callback) {
      callback = function() {};
    }

    var form = {
      client: 'mercury'
    };

    if (utils.getType(threadID) !== "Array") {
      threadID = [threadID];
    }

    var messageBox = 'other';
    if (isAccept) {
      messageBox = 'inbox';
    };

    for (var i = 0; i < threadID.length; i++) {
      form[messageBox + '[' + i + ']'] = threadID[i];
    }

    defaultFuncs
      .post("https://www.facebook.com/ajax/mercury/move_thread.php", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("Error in handleMessageRequests", err);
        return callback(err);
      });
  };
};