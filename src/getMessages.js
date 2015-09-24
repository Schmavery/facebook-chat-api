/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getMessages(threadId, isGroup, start, end, callback) {
    if(!callback) callback = function() {};

    if (end <= start) end = start + 20;

    var ids = isGroup ? 'thread_fbids' : 'user_ids';

    var startKey = 'messages[' + ids + '][' + threadId + '][offset]';
    var endKey = 'messages[' + ids + '][' + threadId + '][limit]';

    var toMerge = {};
    toMerge[startKey] = start;
    toMerge[endKey] = end;

    var form = mergeWithDefaults(toMerge);

    if(ctx.globalOptions.pageId) form.request_user_id = ctx.globalOptions.pageId;

    utils.post("https://www.facebook.com/ajax/mercury/thread_info.php", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error && resData.error === 1545012){
        callback({error: "Cannot change chat title: Not member of chat."});
      } else if (resData.error && resData.error === 1545003){
        callback({error: "Cannot set title of single-user chat."});
      } else if (resData.error) {
        callback(resData);
      } else callback(null, resData.payload.actions);
    })
    .catch(function(err) {
      log.error("Error in getMessages", err);
      return callback(err);
    });
  };
};