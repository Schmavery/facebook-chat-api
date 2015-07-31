/*jslint node: true */
"use strict";

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getAccessToken(callback) {
    if(!callback) return log.error("getAccessToken: need callback");

    return callback(ctx.access_token);
  };
};