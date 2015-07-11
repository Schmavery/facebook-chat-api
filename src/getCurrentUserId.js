/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getCurrentUserId(callback) {
    utils.get("https://www.facebook.com/me", ctx.jar)
    .then(function(resData) {
      var splitData = resData.req._headers.cookie.split(";");

      var i = 0;
      
      while (i < splitData.length) {
        var d = (splitData[i]).split("=");
        if(d[0].trim() == "c_user") {
          callback(d[1]);
          return;
        }
        i++;
      }
    })
    .catch(function(err) {
      log.error("Error in getCurrentUserId", err);
      return callback(err);
    });
  };
};
