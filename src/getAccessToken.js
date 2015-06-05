/*jslint node: true */
"use strict";

module.exports = function(utils, log, mergeWithDefaults, api, ctx) {
  return function getAccessToken() {
    return ctx.access_token;
  };
};