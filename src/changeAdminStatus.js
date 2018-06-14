"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeAdminStatus(userIDs, makeAdmin, threadID, callback) {
    if (
      !callback &&
      (utils.getType(makeAdmin) === "AsyncFunction" ||
        utils.getType(makeAdmin) === "AsyncFunction" ||
        utils.getType(threadID) === "Function" ||
        utils.getType(threadID) === "AsyncFunction")
    ) {
      throw { error: "please pass makeAdmin and threadID as the second/third arguments." };
    }

    if (utils.getType(userIDs) === "String") {
      userIDs = [userIDs];
    }

    if (!callback) {
      callback = function() {};
    }

    var messageAndOTID = utils.generateOfflineThreadingID();
    var form = {
      client: "mercury",
      action_type: "ma-type:log-message",
      author: "fbid:" + ctx.userID,
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
      add: makeAdmin,
      thread_id: threadID,
      log_message_type: "log:thread-name"
    };

    for (var i = 0; i < userIDs.length; i++) {
      form["admin_ids[" + i + "]"] = userIDs[i];
    }

    defaultFuncs
      .post("https://www.messenger.com/messaging/save_admins/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error && resData.error === 1976004) {
          throw { error: "Cannot alter admin status: you are not an admin." };
        }

        if (resData.error && resData.error === 1357031) {
          throw { error: "Cannot alter admin status: this thread is not a group chat." };
        }

        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("changeAdminStatus", err);
        return callback(err);
      });
  };
};
