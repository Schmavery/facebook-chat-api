"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {

  return function sendDirectMessage(msg, threadID, callback) {
    if(!callback && utils.getType(threadID) === 'Function') {
      throw {error: "please pass a threadID as a second argument."};
    }
    if(!callback) {
      callback = function() {};
    }

    var msgType = utils.getType(msg);
    var threadIDType = utils.getType(threadID);

    if(msgType !== "String" && msgType !== "Object") {
      throw {error: "Message should be of type string or object and not " + msgType + "."};
    }

    // Changing this to accomodate an array of users
    if(threadIDType !== "Array" && threadIDType !== "Number" && threadIDType !== "String") {
      throw {error: "ThreadID should be of type number, string, or array and not " + threadIDType + "."};
    }

    if (msgType === "String") {
      msg = { body: msg };
    }

    var form = {
      'message_body' : msg.body ? msg.body.toString() : "",
      'activity_id': threadID,
      'attachment[type]' : ''
    };

    send();

    function sendContent(isSingleUser) {
      // There are three cases here:
      // Page sends the first message to followers.

      defaultFuncs
        .post("https://m.facebook.com/pages/messaging/private_reply/send/?av=" + ctx.globalOptions.pageID, ctx.jar, form)
        .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
        .then(function(resData) {
          if (!resData) {
            throw {error: "Send message failed."};
          }

          if (resData.error) {
            if (resData.error === 1545012) {
              log.warn("Got error 1545012. This might mean that you're not part of the conversation " + threadID);
            }
            throw resData;
          }

          var messageInfo = resData.payload.actions.reduce(function(p, v) {
            return {
              threadID: v.thread_fbid,
              messageID: v.message_id,
              timestamp: v.timestamp
            } || p; }, null);

          return callback(null, messageInfo);
        })
        .catch(function(err) {
          log.error("ERROR in sendMessage --> ", err);
          return callback(err);
        });

    }

    function send() {
      // We're doing a query to this to check if the given id is the id of
      // a user or of a group chat. The form will be different depending
      // on that.
      if(threadIDType === "Array") {
        sendContent(false);
      } else {
        api.getUserInfo(threadID, function(err, res) {
          if(err) {
            return callback(err);
          }
          sendContent(Object.keys(res).length > 0);
        });
      }
    }
  };
};
