/*jslint node: true */
"use strict";

module.exports = function(defaultFuncs, api, ctx) {
  return function getCurrentUserId(callback) {
    return ctx.userID;
  };
};
