/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getThread(threadFbid, start, limit, callback) {
    if(!callback) callback = function() {};

    var data = {
      'client' : 'mercury'
    };

    data['messages[user_ids][' + threadFbid + '][offset]'] = start;
    data['messages[user_ids][' + threadFbid + '][limit]'] = limit;

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
      log.error("Error in getThread", err);
      return callback(err);
    });
  };
};