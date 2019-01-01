"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function setTitle(newTitle, threadID, callback) {
    if (
      !callback &&
      (utils.getType(threadID) === "Function" ||
        utils.getType(threadID) === "AsyncFunction")
    ) {
      throw { error: "please pass a threadID as a second argument." };
    }

    if (!callback) {
      callback = function() {};
    }

    var messageAndOTID = utils.generateOfflineThreadingID();
    var form = {
      client: "mercury",
      action_type: "ma-type:log-message",
      author: "fbid:" + ctx.userID,
      thread_id: "",
      author_email: "",
      coordinates: "",
      timestamp: Date.now(),
      timestamp_absolute: "Today",
      timestamp_relative: utils.generateTimestampRelative(),
      timestamp_time_passed: "0",
      is_unread: false,
      is_cleared: false,
      is_forward: false,
      is_filtered_content: false,
      is_spoof_warning: false,
      source: "source:chat:web",
      "source_tags[0]": "source:chat",
      status: "0",
      offline_threading_id: messageAndOTID,
      message_id: messageAndOTID,
      threading_id: utils.generateThreadingID(ctx.clientID),
      manual_retry_cnt: "0",
      thread_fbid: threadID,
      thread_name: newTitle,
      thread_id: threadID,
      log_message_type: "log:thread-name"
    };

    defaultFuncs
      .post("https://www.facebook.com/messaging/set_thread_name/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error && resData.error === 1545012) {
          throw { error: "Cannot change chat title: Not member of chat." };
        }

        if (resData.error && resData.error === 1545003) {
          throw { error: "Cannot set title of single-user chat." };
        }

        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("setTitle", err);
        return callback(err);
      });
  };
};
