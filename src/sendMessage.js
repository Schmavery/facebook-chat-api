/*jslint node: true */
"use strict";

module.exports = function(utils, log, mergeWithDefaults, api, ctx) {
  return function sendMessage(msg, thread_id, callback) {
    if(!callback) callback = function() {};
    if(typeof msg !== "string") return callback({error: "Message should be of type string and not " + typeof msg + "."});
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
      'message_batch[0][body]' : msg ? msg.toString() : "",
      'message_batch[0][html_body]' : false,
      'message_batch[0][ui_push_phase]' : 'V3',
      'message_batch[0][status]' : '0',
      'message_batch[0][message_id]' : utils.generateMessageID(ctx.clientid),
      'message_batch[0][manual_retry_cnt]' : '0',
      'message_batch[0][thread_fbid]' : thread_id,
      'message_batch[0][has_attachment]' : false,
      'message_batch[0][signatureID]' : utils.getSignatureId(),
    });

    // We're doing a query to this to check if the given id is the id of
    // a user or of a group chat. The form will be different depending
    // on that.
    api.getUserInfo(thread_id, function(err, res) {
      // This means that thread_id is the id of a user, and the chat
      // is a single person chat
      if(!(res instanceof Array)) {
        form['message_batch[0][client_thread_id]'] = "user:"+thread_id;
        form['message_batch[0][specific_to_list][0]'] = "fbid:"+thread_id;
        form['message_batch[0][specific_to_list][1]'] = "fbid:"+ctx.userId;
      }

      utils.post("https://www.facebook.com/ajax/mercury/send_messages.php", ctx.jar, form, function(err, res, html) {

        var strData = utils.makeParsable(html);
        var ret;
        try {
          ret = JSON.parse(strData);
        } catch (e) {
          log.error("ERROR in sendMessage --> ", e, strData);
          return callback({error: e});
        }

        if (!ret) return callback({error: "Send message failed."});
        if(ret.error) return callback(ret);

        callback();
      });
    });
  }
};