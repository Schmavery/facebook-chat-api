"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getUrl(url, callback) {
    if(!callback) {
      throw {error: "getUrl: need callback"};
    }

    var form = {
      image_height: 960,
      image_width: 960,
      uri: url
    };

    defaultFuncs
      .post("https://www.facebook.com/message_share_attachment/fromURI/", ctx.jar, form)
      .then(utils.parseAndCheckLogin)
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        if (!resData.payload) {
          throw {error: 'Invalid url'};
        }

        callback(null, resData.payload.share_data.share_params);
      })
      .catch(function(err) {
        log.error("Error in getUrl", err);
        return callback(err);
      });
  };
};
