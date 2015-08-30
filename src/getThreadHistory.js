/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getThreadHistory(thread_id, start, end, timestamp, callback) {
    if(!callback) callback = function() {};

    var data = {
      'client' : 'mercury'
    };

    data['messages[user_ids][' + thread_id + '][offset]'] = start;
    data['messages[user_ids][' + thread_id + '][timestamp]'] = timestamp;
    data['messages[user_ids][' + thread_id + '][limit]'] = end - start + 1;

    var form = mergeWithDefaults(data);

    if(ctx.globalOptions.pageId) form.request_user_id = ctx.globalOptions.pageId;

    utils.post("https://www.facebook.com/ajax/mercury/thread_info.php", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error) {
        callback(resData);
      } else callback(null, resData.payload.actions);
    })
    .catch(function(err) {
      log.error("Error in getThreadHistory", err);
      return callback(err);
    });
  };
};