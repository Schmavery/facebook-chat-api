/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function deleteThread(thread_id, callback) {

    var form = mergeWithDefaults({
      'client' : 'mercury',
      'ids[0]' : thread_id
    });

    utils.post("https://www.facebook.com/ajax/mercury/delete_thread.php", ctx.jar, form)
      .then(utils.parseResponse)
      .then(function(resData) {
        if (resData.error) {
          callback(resData);
        } else callback(null);
      })
      .catch(function(err) {
        log.error("Error in deleteThread", err);
        return callback(err);
      });
    return ctx.access_token;
  };
};
