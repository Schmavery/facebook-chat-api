"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadHistory(threadID, amount, timestamp, callback) {
    if (!callback) {
      throw { error: "getThreadHistory: need callback" };
    }

    var form = {
      client: "mercury"
    };

    api.getUserInfo(threadID, function(err, res) {
      if (err) {
        return callback(err);
      }
      var key = Object.keys(res).length > 0 ? "user_ids" : "thread_fbids";
      form["messages[" + key + "][" + threadID + "][offset]"] = 0;
      form["messages[" + key + "][" + threadID + "][timestamp]"] = timestamp;
      form["messages[" + key + "][" + threadID + "][limit]"] = amount;

      if (ctx.globalOptions.pageID)
        form.request_user_id = ctx.globalOptions.pageID;

      defaultFuncs
        .post(
          "https://www.facebook.com/ajax/mercury/thread_info.php",
          ctx.jar,
          form
        )
        .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
        .then(function(resData) {
          if (resData.error) {
            throw resData;
          } else if (!resData.payload) {
            throw { error: "Could not retrieve thread history." };
          }

          // Asking for message history from a thread with no message history
          // will return undefined for actions here
          if (!resData.payload.actions) {
            resData.payload.actions = [];
          }

          var userIDs = {};
          resData.payload.actions.forEach(function(v) {
            userIDs[v.author.split(":").pop()] = "";
          });

          api.getUserInfo(Object.keys(userIDs), function(err, data) {
            if (err) return callback(err); //callback({error: "Could not retrieve user information in getThreadHistory."});

            resData.payload.actions.forEach(function(v) {
              var sender = data[v.author.split(":").pop()];
              if (sender) v.sender_name = sender.name;
              else v.sender_name = "Facebook User";
              v.sender_fbid = v.author;
              delete v.author;
            });

            callback(
              null,
              resData.payload.actions.map(utils.formatHistoryMessage)
            );
          });
        })
        .catch(function(err) {
          log.error("getThreadHistory", err);
          return callback(err);
        });
    });
  };
};
