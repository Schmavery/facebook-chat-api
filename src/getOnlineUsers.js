"use strict";

var utils = require("../utils");
var log = require("npmlog");

var STATUS = {
  0: 'offline',
  1: 'idle',
  2: 'active',
  3: 'mobile',
};

function formatData(data, lastActiveTimes, time) {
  return Object.keys(data).map(function(key) {
    return {
      lastActive: (lastActiveTimes[key] * 1000) || time,
      userID: key,
      status: STATUS[data[key].a],
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

        return callback(null, formatData(resData.payload.buddy_list.nowAvailableList, resData.payload.buddy_list.last_active_times, resData.payload.time));
      })
      .catch(function(err) {
        log.error("Error in getOnlineUsers", err);
        return callback(err);
      });
  };
};
