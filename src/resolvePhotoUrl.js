"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function resolvePhotoUrl(photoID, callback) {
    if (!callback) {
      throw { error: "resolvePhotoUrl: need callback" };
    }

    defaultFuncs
      .get("https://www.facebook.com/mercury/attachments/photo", ctx.jar, {
        photo_id: photoID
      })
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(resData => {
        if (resData.error) {
          throw resData;
        }

        var photoUrl = resData.jsmods.require[0][3][0];

        return callback(null, photoUrl);
      })
      .catch(err => {
        log.error("resolvePhotoUrl", err);
        return callback(err);
      });
  };
};
