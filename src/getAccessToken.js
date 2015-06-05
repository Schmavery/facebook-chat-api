/*jslint node: true */
"use strict";

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getAccessToken() {
    return ctx.access_token;
  };
};