/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getUserInfo(id, callback) {
    var form = mergeWithDefaults();
    if(!(id instanceof Array)) id = [id];

    id.map(function(v, i) {
      form["ids[" + i + "]"] = v;
    });

    utils.get("https://www.facebook.com/chat/user_info/", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      callback(null, resData.payload.profiles);
    })
    .catch(function(err) {
      log.error("Error in getUserInfo", err);
      return callback(err);
    });
  };
};