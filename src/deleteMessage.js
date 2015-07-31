/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function deleteMessage(messageOrMessages, callback) {
    if(!callback) callback = function(){};

    // this allows also passing a message object
    var messageID = messageOrMessages.messageID || null;
    if(messageID != null) {
      messageOrMessages = messageID;
    }

    var form = {
      client: 'mercury',
    };

    if(!Array.isArray(messageOrMessages)) messageOrMessages = [messageOrMessages];

    for (var i = 0; i < messageOrMessages.length; i++) {
      form['message_ids['+i+']'] = messageOrMessages[i];
    }

    defaultFuncs.post("https://www.facebook.com/ajax/mercury/delete_messages.php", ctx.jar, form)
      .then(utils.parseResponse)
      .then(function(resData) {
        if (resData.error) return callback(resData);

        return callback();
      })
      .catch(function(err) {
        log.error("Error in deleteMessage", err);
        return callback(err);
      });
  };
};
