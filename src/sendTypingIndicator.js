/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  function makeTypingIndicator(threadID, typ, callback) {
    var form = {
      typ: +typ,
      to: '',
      source: 'mercury-chat',
      thread: threadID
    };

    // Check if thread is single person chat or group chat
    // More info on this is in api.sendMessage
    api.getUserInfo(threadID, function(err, res) {
      // If id is single person chat
      if(Object.keys(res).length > 0) {
        form.to = threadID
      };

      defaultFuncs.post("https://www.facebook.com/ajax/messaging/typ.php", ctx.jar, form)
      .then(utils.parseResponse)
      .then(function(resData) {
        if(resData.error) return callback(resData);

        return callback();
      })
      .catch(function(err) {
        log.error("Error in sendTypingIndicator", err);
        return callback(err);
      });
    });
  };

  return function sendTypingIndicator(threadID, callback) {
    if(!callback) return log.error("sendTypingIndicator: need callback");

    makeTypingIndicator(threadID, true, function(err) {
      if(err) return callback(err)

      return callback();
    });

    // TODO: document that we return the stop/cancel functions now
    return function end(cb) {
      if(!cb) cb = function() {};

      makeTypingIndicator(threadID, false, cb);
    };
  };
};
