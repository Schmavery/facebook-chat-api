"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function resolvePhotoUrl(photoID, callback) {
    if(!callback) {
      throw {error: "resolvePhotoUrl: need callback"};
    }
    defaultFuncs
      .get("https://www.facebook.com/mercury/attachments/photo/?photo_id=" + photoID, ctx.jar, {})
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        return callback(resData.jsmods.require[0][3][0], photoID);
      })
      .catch(function(err) {
        log.error("Error in resolvePhotoUrl", err);
      });
  };
};
