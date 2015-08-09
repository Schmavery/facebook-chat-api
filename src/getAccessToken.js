"use strict";
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getAccessToken(callback) {
    if(!callback) {
      return log.error("getAccessToken: need callback");
    }

    return callback(ctx.access_token);
  };
};
