/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function unarchiveThread(threadOrThreads, callback) {
    if(!callback) callback = function() {};
    var form = {};

    if(Array.isArray(threadOrThreads)) {
      for (var i = 0; i < threadOrThreads.length; i++) {
        form['ids['+threadOrThreads[i]+']'] = false;
      }
    } else {
      form['ids['+threadOrThreads+']'] = false;
    }

    defaultFuncs.post("https://www.facebook.com/ajax/mercury/change_archived_status.php", ctx.jar, form)
      .then(utils.parseResponse)
      .then(function(resData) {
        if (resData.error) return callback(resData);

        return callback();
      })
      .catch(function(err) {
        log.error("Error in unarchiveThread", err);
        return callback(err);
      });
    return ctx.access_token;
  };
};
