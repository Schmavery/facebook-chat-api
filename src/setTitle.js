"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function setTitle(newTitle, threadFbid, callback) {
    if(!callback && utils.getType(threadFbid) === 'Function') {
      throw {error: "please pass a threadFbid as a second argument."};
    }

    if(!callback) {
      callback = function() {};
    }

    var messageAndOTID = utils.generateOfflineThreadingID();
    var form = {
      'client' : 'mercury',
      'message_batch[0][action_type]' : 'ma-type:log-message',
      'message_batch[0][author]' : 'fbid:' + ctx.userID,
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
      'message_batch[0][offline_threading_id]' : messageAndOTID,
      'message_batch[0][message_id]' : messageAndOTID,
      'message_batch[0][threading_id]': utils.generateThreadingID(ctx.clientID),
      'message_batch[0][manual_retry_cnt]' : '0',
      'message_batch[0][thread_fbid]' : threadFbid,
      'message_batch[0][log_message_data][name]' : newTitle,
      'message_batch[0][log_message_type]' : 'log:thread-name'
    };

    defaultFuncs
      .post("https://www.facebook.com/ajax/mercury/send_messages.php", ctx.jar, form)
      .then(utils.parseAndCheckLogin)
      .then(function(resData) {
        if (resData.error && resData.error === 1545012){
          throw {error: "Cannot change chat title: Not member of chat."};
        }

        if (resData.error && resData.error === 1545003){
          throw {error: "Cannot set title of single-user chat."};
        }

        if (resData.error) {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("Error in setTitle", err);
        return callback(err);
      });
  };
};
