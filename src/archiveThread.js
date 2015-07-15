/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function archiveThread(threadOrThreads, callback) {

    var form = mergeWithDefaults();

    if(Array.isArray(threadOrThreads)) {
      for (var i = 0; i < threadOrThreads.length; i++) {
        form['ids['+threadOrThreads[i]+']'] = true;
      }
    } else {
      form['ids['+threadOrThreads+']'] = true;
    }

    utils.post("https://www.facebook.com/ajax/mercury/change_archived_status.php", ctx.jar, form)
      .then(utils.parseResponse)
      .then(function(resData) {
        if (resData.error) {
          callback(resData);
        } else callback(null);
      })
      .catch(function(err) {
        log.error("Error in archiveThread", err);
        return callback(err);
      });
    return ctx.access_token;
  };
};
