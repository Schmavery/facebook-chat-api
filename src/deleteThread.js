"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function deleteThread(threadOrThreads, callback) {
    if (!callback) {
      callback = function() {};
    }

    var form = {
      client: "mercury"
    };

    if (utils.getType(threadOrThreads) !== "Array") {
      threadOrThreads = [threadOrThreads];
    }

    for (var i = 0; i < threadOrThreads.length; i++) {
      form["ids[" + i + "]"] = threadOrThreads[i];
    }

    defaultFuncs
      .post(
        "https://www.facebook.com/ajax/mercury/delete_thread.php",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("deleteThread", err);
        return callback(err);
      });
  };
};
