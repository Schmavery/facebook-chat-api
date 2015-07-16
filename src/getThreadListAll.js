/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getThreadListAll(callback) {
    if(!callback) callback = function() {};

    var thread_counter = 0,
        all_threads = [];

    var getThreadList = function() {
      api.getThreadList(thread_counter, thread_counter + 19, function(err, threads) {
        if (err) return callback(err);
        if (!threads) return callback(err, all_threads);

        all_threads = all_threads.concat(threads);

        if (threads.length == 20) {
          thread_counter += 20;
          return getThreadList();
        }

        all_threads.sort(function(a, b) {
          return (a.timestamp > b.timestamp) ? 1 : (a.timestamp < b.timestamp) ? -1 : 0;
        })
        return callback(err, all_threads);
      });
    }

    return getThreadList();
  };
};