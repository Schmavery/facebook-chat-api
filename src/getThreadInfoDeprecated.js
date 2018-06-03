"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadInfo(threadID, callback) {
    if (!callback) callback = function() {};

    var form = {
      client: "mercury"
    };

    api.getUserInfo(threadID, function(err, userRes) {
      if (err) {
        return callback(err);
      }
      var key = Object.keys(userRes).length > 0 ? "user_ids" : "thread_fbids";
      form["threads[" + key + "][0]"] = threadID;

      if (ctx.globalOptions.pageId)
        form.request_user_id = ctx.globalOptions.pageId;

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
            throw {
              error: "Could not retrieve thread Info."
            };
          }
          var threadData = resData.payload.threads[0];
          var userData = userRes[threadID];

          if (threadData == null) {
            throw {
              error: "ThreadData is null"
            };
          }

          threadData.name =
            userData != null && userData.name != null
              ? userData.name
              : threadData.name;
          threadData.image_src =
            userData != null && userData.thumbSrc != null
              ? userData.thumbSrc
              : threadData.image_src;

          callback(null, utils.formatThread(threadData));
        })
        .catch(function(err) {
          log.error("getThreadInfo", err);
          return callback(err);
        });
    });
  };
};
