"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  function makeTypingIndicator(typ, threadID, callback) {
    var form = {
      typ: +typ,
      to: '',
      source: 'mercury-chat',
      thread: threadID
    };

    // Check if thread is single person chat or group chat
    // More info on this is in api.sendMessage
    api.getUserInfo(threadID, function(err, res) {
      if (err) {
        return callback(err);
      }

      // If id is single person chat
      if(Object.keys(res).length > 0) {
        form.to = threadID;
      }

      defaultFuncs
        .post("https://www.facebook.com/ajax/messaging/typ.php", ctx.jar, form)
        .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
        .then(function(resData) {
          if(resData.error) {
            throw resData;
          }

          return callback();
        })
        .catch(function(err) {
          log.error("Error in sendTypingIndicator", err);
          return callback(err);
        });
    });
  }

  return function sendTypingIndicator(threadID, callback) {
    if(!callback) {
      throw {error: "sendTypingIndicator: need callback"};
    }

    makeTypingIndicator(true, threadID, callback);

    // TODO: document that we return the stop/cancel functions now
    return function end(cb) {
      makeTypingIndicator(false, threadID, cb || function() {});
    };
  };
};
