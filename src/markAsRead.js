/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function markAsRead(threadID, callback) {
    if(!callback) callback = function() {};

    var form = mergeWithDefaults();

    form["ids[" + threadID + "]"] = true;

    utils.post("https://www.facebook.com/ajax/mercury/change_read_status.php", ctx.jar, form)
    .then(utils.saveCookies(ctx.jar))
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error) return callback(resData);

      return callback();
    })
    .catch(function(err) {
      log.error("Error in markAsRead", err);
      return callback(err);
    });
  };
};