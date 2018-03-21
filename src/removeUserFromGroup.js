"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function removeUserFromGroup(userID, threadID, callback) {
    if (
      !callback &&
      (utils.getType(threadID) === "Function" ||
        utils.getType(threadID) === "AsyncFunction")
    ) {
      throw { error: "please pass a threadID as a second argument." };
    }
    if (
      utils.getType(threadID) !== "Number" &&
      utils.getType(threadID) !== "String"
    ) {
      throw {
        error:
          "threadID should be of type Number or String and not " +
          utils.getType(threadID) +
          "."
      };
    }
    if (
      utils.getType(userID) !== "Number" &&
      utils.getType(userID) !== "String"
    ) {
      throw {
        error:
          "userID should be of type Number or String and not " +
          utils.getType(userID) +
          "."
      };
    }

    if (!callback) {
      callback = function() {};
    }

    var form = {
      uid: userID,
      tid: threadID
    };

    defaultFuncs
      .post("https://www.facebook.com/chat/remove_participants", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (!resData) {
          throw { error: "Remove from group failed." };
        }
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("removeUserFromGroup", err);
        return callback(err);
      });
  };
};
