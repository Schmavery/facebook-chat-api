/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function setTitle(newTitle, thread_id, callback) {
    if(!callback) callback = function() {};

    var form = mergeWithDefaults({
      'client' : 'mercury',
      'message_batch[0][action_type]' : 'ma-type:log-message',
      'message_batch[0][author]' : 'fbid:' + ctx.userId,
      'message_batch[0][thread_id]' : '',
      'message_batch[0][author_email]' : '',
      'message_batch[0][coordinates]' : '',
      'message_batch[0][timestamp]' : Date.now(),
      'message_batch[0][timestamp_absolute]' : 'Today',
      'message_batch[0][timestamp_relative]' : utils.genTimestampRelative(),
      'message_batch[0][timestamp_time_passed]' : '0',
      'message_batch[0][is_unread]' : false,
      'message_batch[0][is_cleared]' : false,
      'message_batch[0][is_forward]' : false,
      'message_batch[0][is_filtered_content]' : false,
      'message_batch[0][is_spoof_warning]' : false,
      'message_batch[0][source]' : 'source:chat:web',
      'message_batch[0][source_tags][0]' : 'source:chat',
      'message_batch[0][status]' : '0',
      'message_batch[0][message_id]' : utils.generateMessageID(ctx.clientid),
      'message_batch[0][manual_retry_cnt]' : '0',
      'message_batch[0][thread_fbid]' : thread_id,
      'message_batch[0][log_message_data][name]' : newTitle,
      'message_batch[0][log_message_type]' : 'log:thread-name'
    });

    utils.post("https://www.facebook.com/ajax/mercury/send_messages.php", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error && resData.error === 1545012){
        callback({error: "Cannot change chat title: Not member of chat."});
      } else if (resData.error && resData.error === 1545003){
        callback({error: "Cannot set title of single-user chat."});
      } else if (resData.error) {
        callback(resData);
      } else callback();
    })
    .catch(function(err) {
      log.error("Error in setTitle", err);
      return callback(err);
    });
  };
};
