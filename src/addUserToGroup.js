/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function addUserToGroup(user_id, thread_id, callback) {
    if(!callback) callback = function() {};
    if (typeof thread_id !== "number" && typeof thread_id !== "string")
      return callback({error: "Thread_id should be of type number or string and not " + typeof thread_id + "."});
    if (!(user_id instanceof Array))
      user_id = [user_id];

    var messageAndOTID = utils.generateOfflineThreadingID();
    var form = mergeWithDefaults({
      'client' : 'mercury',
      'message_batch[0][action_type]' : 'ma-type:log-message',
      'message_batch[0][author]' : 'fbid:' + ctx.userId,
      'message_batch[0][thread_id]' : '',
      'message_batch[0][timestamp]' : Date.now(),
      'message_batch[0][timestamp_absolute]' : 'Today',
      'message_batch[0][timestamp_relative]' : utils.genTimestampRelative(),
      'message_batch[0][timestamp_time_passed]' : '0',
      'message_batch[0][is_unread]' : false,
      'message_batch[0][is_cleared]' : false,
      'message_batch[0][is_forward]' : false,
      'message_batch[0][is_filtered_content]' : false,
      'message_batch[0][is_filtered_content_bh]':false,
      'message_batch[0][is_filtered_content_account]':false,
      'message_batch[0][is_spoof_warning]' : false,
      'message_batch[0][source]' : 'source:chat:web',
      'message_batch[0][source_tags][0]' : 'source:chat',
      'message_batch[0][log_message_type]' : 'log:subscribe',
      'message_batch[0][status]' : '0',
      'message_batch[0][offline_threading_id]' : messageAndOTID,
      'message_batch[0][message_id]' : messageAndOTID,
      'message_batch[0][threading_id]': utils.generateThreadingID(ctx.clientid),
      'message_batch[0][manual_retry_cnt]' : '0',
      'message_batch[0][thread_fbid]' : thread_id,
    });

    for (var i = 0; i < user_id.length; i++){
      if (typeof user_id[i] !== "number" && typeof user_id[i] !== "string")
        return callback({error: "Elements of user_id should be of type number or string and not " + typeof user_id[i] + "."});
      form['message_batch[0][log_message_data][added_participants]['+i+']'] = 'fbid:' + user_id[i];
    }

    utils.post("https://www.facebook.com/ajax/mercury/send_messages.php", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (!resData) return callback({error: "Add to group failed."});
      if(resData.error) return callback(resData);

      callback();
    })
    .catch(function(err) {
      log.error("ERROR in addUserToGroup --> ", err);
      return callback(err);
    });
  };
};
