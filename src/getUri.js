/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getUri(uri, callback) {
    if(!callback) return log.error("getUri: need callback");
    var form = {
      image_height: 960,
      image_width: 960,
      uri: uri
    };

    defaultFuncs.post("https://www.facebook.com/message_share_attachment/fromURI/", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error) {
        throw resData
      };

      if (!resData.payload) {
        throw 'Invalid uri'
      };

      callback(null, resData.payload.share_data.share_params);
    })
    .catch(function(err) {
      log.error("Error in getUri", err);
      return callback(err);
    });
  };
};
