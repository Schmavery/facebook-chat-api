"use strict";

module.exports = function(defaultFuncs, api, ctx) {
  return function getCurrentUserId() {
    return ctx.userID;
  };
};
