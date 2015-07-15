/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function deleteMessage(messageOrMessages, callback) {
    // this allows also passing a message object
    var message_id = messageOrMessages.message_id || null;
    if(message_id != null) {
      messageOrMessages = message_id;
    }

    var form = mergeWithDefaults();
    form['client'] = "mercury";

    if(Array.isArray(messageOrMessages)) {
      for (var i = 0; i < messageOrMessages.length; i++) {
        form['message_ids['+i+']'] = messageOrMessages[i];
      }
    } else {
      form['message_ids[0]'] = messageOrMessages;
    }

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
