/*jslint node: true */
"use strict";

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getCurrentUserId(callback) {
    return ctx.userId;
  };
};
