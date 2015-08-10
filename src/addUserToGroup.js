"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function addUserToGroup(userID, threadID, callback) {
    if(!callback && utils.getType(threadID) === 'Function') {
      throw {error: "please pass a threadID as a second argument."};
    }

    if(!callback) {
      callback = function() {};
    }

    if (utils.getType(threadID) !== "Number" && utils.getType(threadID) !== "String") {
      throw {error: "ThreadID should be of type Number or String and not " + utils.getType(threadID) + "."};
    }

    if (utils.getType(userID) !== "Array") {
      userID = [userID];
    }

    var messageAndOTID = utils.generateOfflineThreadingID();
    var form = {
      'client' : 'mercury',
      'message_batch[0][action_type]' : 'ma-type:log-message',
      'message_batch[0][author]' : 'fbid:' + ctx.userID,
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
      'message_batch[0][threading_id]': utils.generateThreadingID(ctx.clientID),
      'message_batch[0][manual_retry_cnt]' : '0',
      'message_batch[0][thread_fbid]' : threadID,
    };

    for (var i = 0; i < userID.length; i++){
      if (utils.getType(userID[i]) !== "Number" && utils.getType(userID[i]) !== "String") {
        throw {error: "Elements of userID should be of type Number or String and not " + utils.getType(userID[i]) + "."};
      }

      form['message_batch[0][log_message_data][added_participants]['+i+']'] = 'fbid:' + userID[i];
    }

    defaultFuncs.post("https://www.facebook.com/ajax/mercury/send_messages.php", ctx.jar, form)
    .then(utils.parseAndCheckLogin)
    .then(function(resData) {
      if (!resData) {
        throw {error: "Add to group failed."};
      }
      if(resData.error) {
        throw resData;
      }

      return callback();
    })
    .catch(function(err) {
      log.error("ERROR in addUserToGroup --> ", err);
      return callback(err);
    });
  };
};
