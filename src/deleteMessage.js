/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function deleteMessage(message, callback) {
    var message_id = message.message_id || message;
    
    var form = mergeWithDefaults({
      'client' : 'mercury',
      'message_ids[0]' : message_id
    });

    utils.post("https://www.facebook.com/ajax/mercury/delete_messages.php", ctx.jar, form)
      .then(utils.parseResponse)
      .then(function(resData) {
        if (resData.error) {
          callback(resData);
        } else callback(null);
      })
      .catch(function(err) {
        log.error("Error in deleteMessage", err);
        return callback(err);
      });
    return ctx.access_token;
  };
};
