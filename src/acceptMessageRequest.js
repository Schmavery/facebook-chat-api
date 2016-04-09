"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadList(requestOrRequests, callback) {
    if(!callback) {
      callback = function(){};
    }

    var form = {
      client: 'mercury'
    };

    if(utils.getType(requestOrRequests) !== "Array") {
      requestOrRequests = [requestOrRequests];
    }

    for (var i = 0; i < requestOrRequests.length; i++) {
      form['inbox[' + i + ']'] = requestOrRequests[i];
    }

    defaultFuncs
      .post("https://www.facebook.com/ajax/mercury/move_thread.php", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("Error in acceptMessageRequest", err);
        return callback(err);
      });
  };
};
