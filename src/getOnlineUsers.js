"use strict";

var utils = require("../utils");
var log = require("npmlog");

function formatData(data, time) {
  return Object.keys(data).map(function(key) {
    return {
      timestamp: time,
      userID: key,
      statuses: data[key].p,
    };
  });
}

module.exports = function(defaultFuncs, api, ctx) {
  return function getOnlineUsers(callback) {
    if(!callback) {
      callback = function(){};
    }

    var form = {
      user: ctx.userID,
      fetch_mobile: false,
      get_now_available_list: true,
    };

    defaultFuncs
      .post("https://www.facebook.com/ajax/chat/buddy_list.php", ctx.jar, form)
      .then(utils.parseAndCheckLogin)
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        return callback(null, formatData(resData.payload.buddy_list.nowAvailableList, resData.payload.time));
      })
      .catch(function(err) {
        log.error("Error in getOnlineUsers", err);
        return callback(err);
      });
  };
};
