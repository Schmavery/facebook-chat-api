/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

function formatData(data) {
  var retObj = {};

  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      var innerObj = data[prop];
      retObj[prop] = {
        name: innerObj.name,
        firstName: innerObj.firstName,
        vanity: innerObj.vanity,
        thumbSrc: innerObj.thumbSrc,
        profileUrl: innerObj.uri,
        gender: innerObj.gender,
        type: innerObj.type,
        isFriend: innerObj.is_friend,
      }
    }
  }

  return retObj;
}

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getUserInfo(id, callback) {
    if(!callback) return log.error("getUserInfo: need callback");

    var form = mergeWithDefaults();
    if(!(id instanceof Array)) id = [id];

    id.map(function(v, i) {
      form["ids[" + i + "]"] = v;
    });

    utils.get("https://www.facebook.com/chat/user_info/", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error) return callback(resData);

      callback(null, formatData(resData.payload.profiles));
    })
    .catch(function(err) {
      log.error("Error in getUserInfo", err);
      return callback(err);
    });
  };
};