/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");
var bluebird = require("bluebird");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getAccessToken(appId, callback) {
    utils.get("https://developers.facebook.com/tools/explorer/" + appId + "/permissions?version=v2.1&__a=1&__dyn=5U463-i3S2e4oK4pomXWo5O12wAxu&__req=2&__rev=1470714", ctx.jar)
      .then(utils.parseResponse)
      .then(function(resData) {
        return bluebird.try(function() {
          var token = resData.jsmods.instances[2][2][2];
          callback(null, token);
        });
      })
      .catch(function(err) {
        log.error("Error in getting access token", err);
        callback(err);
      })
  };
};