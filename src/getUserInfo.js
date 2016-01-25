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
        isBirthday: !!innerObj.is_birthday,
      }
    }
  }

  return retObj;
}

module.exports = function(defaultFuncs, api, ctx) {
  return function getUserInfo(id, callback) {
    if(!callback) {
      throw {error: "getUserInfo: need callback"};
    }

    if(utils.getType(id) !== 'Array') {
      id = [id];
    }

    var form = {};
    id.map(function(v, i) {
      form["ids[" + i + "]"] = v;
    });
    defaultFuncs.post("https://www.facebook.com/chat/user_info/", ctx.jar, form)
    .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
    .then(function(resData) {
      if (resData.error) {
        throw resData;
      }
      return callback(null, formatData(resData.payload.profiles));
    })
    .catch(function(err) {
      log.error("Error in getUserInfo", err);
      return callback(err);
    });
  };
};
