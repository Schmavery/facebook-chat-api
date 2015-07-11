/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  function makeTypingIndicator(thread_id, typ, callback) {
    if(!callback) callback = function() {};
    var form = mergeWithDefaults({
      typ: +typ,
      to: '',
      source: 'mercury-chat',
      thread: thread_id
    });

    // Check if thread is single person chat or group chat
    // More info on this is in api.sendMessage
    api.getUserInfo(thread_id, function(err, res) {
      // If id is single person chat
      if(!(res instanceof Array)) {
        form.to = thread_id
      };

      utils.post("https://www.facebook.com/ajax/messaging/typ.php", ctx.jar, form)
      .then(utils.parseResponse)
      .then(function(resData) {
        callback();
      })
      .catch(function(err) {
        log.error("Error in sendTypingIndicator", err);
        return callback(err);
      });
    });
  };

  return function sendTypingIndicator(thread_id, callback) {
    if(!callback) callback = function() {};

    makeTypingIndicator(thread_id, true, function(err) {
      if(err) return callback(err)

      function end() {
        makeTypingIndicator(thread_id, false)
      };

      callback(null, end);
    });
  };
};
