"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function changeAdminStatus(userIDs, makeAdmin, threadID, callback) {
    if (
      utils.getType(userIDs) !== "String" &&
      utils.getType(userIDs) !== "Array"
    ) {
      throw { error: "userIDs must be a string or array" };
    }

    if (utils.getType(makeAdmin) !== "Boolean") {
      throw { error: "makeAdmin must be a boolean" };
    }

    if (utils.getType(threadID) !== "String") {
      throw { error: "threadID must be a string" };
    }

    if (utils.getType(userIDs) === "String") {
      userIDs = [userIDs];
    }

    if (
      callback &&
      !(
        utils.getType(callback) === "Function" ||
        utils.getType(callback) === "AsyncFunction"
      )
    ) {
      throw { error: "callback must be a function" };
    }

    if (!callback) {
      callback = function() {};
    }

    var form = {
      thread_fbid: threadID,
      add: makeAdmin
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
          throw {
            error: "Cannot alter admin status: this thread is not a group chat."
          };
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