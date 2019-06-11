"use strict";

var utils = require("../utils");
var log = require("npmlog");

function formatText(notification, boldStart, boldEnd) {
  const boldChars = boldStart.length + boldEnd.length
  let formattedText = notification.title.text
  notification.title.ranges.forEach( (range, i) => {
    let start = range.offset + i * boldChars
    let end = range.offset + range.length + i * boldChars
    formattedText =
      formattedText.slice( 0, start ) + boldStart +
      formattedText.slice( start, end ) + boldEnd +
      formattedText.slice( end )
  })
  return formattedText;
}

function formatData(obj) {
  return obj.nodes.map( notification => {
    return {
      id: notification.alert_id,
      text: notification.title.text,
      html: formatText(notification, "<b>", "</b>"),
      time: notification.timestamp.time * 1000,
      seen: notification.first_seen_time * 1000,
      read: notification.first_read_time * 1000
    };
  });
}

module.exports = function(defaultFuncs, api, ctx) {
  return function getNotifications(amount, callback) {
    if (!callback) {
      throw { error: "getNotifications: need callback" };
    }

    defaultFuncs
      .postFormData(
        "https://www.facebook.com/ajax/notifications/client/get.php",
        ctx.jar,
        {},
        { length: amount }
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (!resData) {
          throw { error: "getNotifications returned empty object." };
        }
        if (resData.error) {
          throw resData;
        }
        callback(null, formatData(resData.payload));
      })
      .catch(function(err) {
        log.error("getNotifications", err);
        return callback(err);
      });
  };
};
