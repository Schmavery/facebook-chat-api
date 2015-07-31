/*jslint node: true */
"use strict";

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getAccessToken(callback) {
    return callback(ctx.access_token);
  };
};