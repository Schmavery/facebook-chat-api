/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function sendSticker(sticker_id, thread_id, callback) {
    if(!callback) callback = function() {};
    if (typeof sticker_id !== "number" && typeof sticker_id !== "string")
      return callback({error: "Sticker_id should be of type number or string and not " + typeof msg + "."});
    if (typeof thread_id !== "number" && typeof thread_id !== "string")
      return callback({error: "Thread_id should be of type number or string and not " + typeof msg + "."});

    var form = mergeWithDefaults({
      'client' : 'mercury',
      'message_batch[0][action_type]' : 'ma-type:user-generated-message',
      'message_batch[0][author]' : 'fbid:' + ctx.userId,
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
      'message_batch[0][body]' : '',
      'message_batch[0][html_body]' : false,
      'message_batch[0][ui_push_phase]' : 'V3',
      'message_batch[0][status]' : '0',
      'message_batch[0][message_id]' : utils.generateMessageID(ctx.clientid),
      'message_batch[0][manual_retry_cnt]' : '0',
      'message_batch[0][thread_fbid]' : thread_id,
      'message_batch[0][sticker_id]' : sticker_id,
      'message_batch[0][has_attachment]' : true,
      'message_batch[0][client_thread_id]' : "user:"+thread_id,
      'message_batch[0][signatureID]' : utils.getSignatureId()
    });

    api.getUserInfo(thread_id, function(err, res) {
      // This means that thread_id is the id of a user, and the chat
      // is a single person chat
      if(!(res instanceof Array)) {
        form['message_batch[0][client_thread_id]'] = "user:"+thread_id;
        form['message_batch[0][specific_to_list][0]'] = "fbid:"+thread_id;
        form['message_batch[0][specific_to_list][1]'] = "fbid:"+ctx.userId;
      }

      utils.post("https://www.facebook.com/ajax/mercury/send_messages.php", ctx.jar, form)
      .then(utils.parseResponse)
      .then(function(ret) {
        if (!ret) return callback({error: "Send message failed."});
        if(ret.error) return callback(ret);

        callback();
      })
      .catch(function(err) {
        log.error("ERROR in sendSticker --> ", err);
        return callback(err);
      });
    });
  };
};