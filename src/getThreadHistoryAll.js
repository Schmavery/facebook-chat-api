/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getThreadHistoryAll(thread_id, callback) {
    if(!callback) callback = function() {};

    var message_counter = 0,
        all_messages = [],
        last_timestamp = 0;

    var getThreadHistory = function() {
      api.getThreadHistory(thread_id, message_counter, message_counter + 19, last_timestamp, function(err, messages) {
        if (err) return callback(err);

        all_messages = all_messages.concat(messages);
        last_timestamp = messages[0].timestamp;

        if (messages.length == 20) {
          message_counter += 20;
          return getThreadHistory();
        }

        all_messages.sort(function(a, b) {
          return (a.timestamp > b.timestamp) ? 1 : (a.timestamp < b.timestamp) ? -1 : 0;
        })
        return callback(err, all_messages);
      });
    }

    return getThreadHistory();
  };
};