/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function archiveThread(thread_id, callback) {

    var form = mergeWithDefaults();
    form['ids['+thread_id+']'] = true;

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
