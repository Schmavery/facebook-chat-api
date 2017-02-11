"use strict";

var utils = require("../utils");

module.exports = function (defaultFuncs, api, ctx) {
  return function resolvePhotoUrl(photoID, callback) {
    if (!callback) {
      throw { error: "resolvePhotoUrl: need callback" };
    }

    utils.resolvePhotoUrl(photoID, defaultFuncs, ctx, callback);
  };
};
