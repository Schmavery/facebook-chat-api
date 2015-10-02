"use strict";

var utils = require("../utils");
var log = require("npmlog");
var bluebird = require("bluebird");

module.exports = function(defaultFuncs, api, ctx) {
  function uploadAttachment(attachments, callback) {
    var uploads = [];

    // create an array of promises
    for (var i = 0; i < attachments.length; i++) {
      if (!utils.isReadableStream(attachments[i])) {
        throw {error: "Attachment should be a readable stream and not " + utils.getType(attachments[i]) + "."};
      }

      var form = {
        upload_1024: attachments[i],
      };
      uploads.push(defaultFuncs
        .postFormData("https://upload.facebook.com/ajax/mercury/upload.php", ctx.jar, form, {})
        .then(utils.parseAndCheckLogin)
        .then(function (resData) {
          if (resData.error) {
            throw resData;
          }

          // We have to return the data unformatted unless we want to change it
          // back in sendMessage.
          return resData.payload.metadata[0];
        }));
    }

    // resolve all promises
    bluebird
      .all(uploads)
      .then(function(resData) {
        callback(null, resData);
      })
      .catch(function(err) {
        log.error("Error in uploadAttachment", err);
        return callback(err);
      });
  }

  return function sendMessage(msg, threadID, callback) {
    if(!callback && utils.getType(threadID) === 'Function') {
      throw {error: "please pass a threadID as a second argument."};
    }
    if(!callback) {
      callback = function() {};
    }

    var msgType = utils.getType(msg);
    var threadIDType = utils.getType(threadID);

    if(msgType !== "String" && msgType !== "Object") {
      throw {error: "Message should be of type string or object and not " + threadIDType + "."};
    }

    // Changing this to accomodate an array of users
    if(threadIDType !== "Array" && threadIDType !== "Number" && threadIDType !== "String") {
      throw {error: "ThreadID should be of type number, string, or array and not " + threadIDType + "."};
    }

    if (msgType === "String") {
      msg = { body: msg };
    }

    var messageAndOTID = utils.generateOfflineThreadingID();

    var form = {
      'client' : 'mercury',
      'message_batch[0][action_type]' : 'ma-type:user-generated-message',
      'message_batch[0][author]' : 'fbid:' + ctx.userID,
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
      'message_batch[0][body]' : msg.body ? msg.body.toString() : "",
      'message_batch[0][html_body]' : false,
      'message_batch[0][ui_push_phase]' : 'V3',
      'message_batch[0][status]' : '0',
      'message_batch[0][offline_threading_id]' : messageAndOTID,
      'message_batch[0][message_id]' : messageAndOTID,
      'message_batch[0][threading_id]': utils.generateThreadingID(ctx.clientID),
      'message_batch[0][manual_retry_cnt]' : '0',
      'message_batch[0][has_attachment]' : false,
      'message_batch[0][signatureID]' : utils.getSignatureID(),
    };

    if (msg.attachment) {
      form['message_batch[0][has_attachment]'] = true;
      form['message_batch[0][image_ids]'] = [];
      form['message_batch[0][gif_ids]'] = [];
      form['message_batch[0][file_ids]'] = [];
      form['message_batch[0][video_ids]'] = [];

      if (utils.getType(msg.attachment) !== 'Array') {
        msg.attachment = [msg.attachment];
      }

      uploadAttachment(msg.attachment, function (err, files) {
        if (err) {
          return callback(err);
        }

        files.forEach(function (file) {
          var key = Object.keys(file);
          var type = key[0]; // image_id, file_id, etc
          form['message_batch[0][' + type + 's]'].push(file[type]); // push the id
        });

        send();
      });
    } else if (msg.url) {
      form['message_batch[0][has_attachment]'] = true;
      form['message_batch[0][shareable_attachment][share_type]'] = 100;
      api.getUrl(msg.url, function (err, params) {
        if (err) {
          return callback(err);
        }

        form['message_batch[0][shareable_attachment][share_params]'] = params;
        send();
      });
    } else if (msg.sticker) {
      form['message_batch[0][has_attachment]'] = true;
      form['message_batch[0][sticker_id]'] = msg.sticker;

      // Sticker can't be combined with body
      delete msg.body;

      send();
    } else {
      send();
    }

    function sendContent(isSingleUser) {
      // There are three cases here:
      // 1. threadID is of type array, where we're starting a new group chat with users
      //    specified in the array.
      // 2. User is sending a message to a specific user.
      // 3. No additional form params and the message goes to an existing group chat.
      if(threadIDType === "Array") {
        for (var i  = 0; i < threadID.length; i++) {
          form['message_batch[0][specific_to_list][' + i + ']'] = "fbid:" + threadID[i];
        }
        form['message_batch[0][specific_to_list][' + (threadID.length) + ']'] = "fbid:" + ctx.userID;
        log.info("Sending message to multiple users: " + threadID);
      } else {
        form['message_batch[0][thread_fbid]'] = threadID;
        // This means that threadID is the id of a user, and the chat
        // is a single person chat
        if(isSingleUser) {
          form['message_batch[0][client_thread_id]'] = "user:" + threadID;
          form['message_batch[0][specific_to_list][0]'] = "fbid:" + threadID;
          form['message_batch[0][specific_to_list][1]'] = "fbid:" + ctx.userID;
        }
      }

      if(ctx.globalOptions.pageID) {
        form['message_batch[0][author]'] = "fbid:" + ctx.globalOptions.pageID;
        form['message_batch[0][specific_to_list][1]'] = "fbid:" + ctx.globalOptions.pageID;
        form['message_batch[0][creator_info][creatorID]'] = ctx.userID;
        form['message_batch[0][creator_info][creatorType]'] = "direct_admin";
        form['message_batch[0][creator_info][labelType]'] = "sent_message";
        form['message_batch[0][creator_info][pageID]'] = ctx.globalOptions.pageID;
        form['request_user_id'] = ctx.globalOptions.pageID;
        form['message_batch[0][creator_info][profileURI]'] = "https://www.facebook.com/profile.php?id=" + ctx.userID;
      }

      defaultFuncs
        .post("https://www.facebook.com/ajax/mercury/send_messages.php", ctx.jar, form)
        .then(utils.parseAndCheckLogin)
        .then(function(resData) {
          if (!resData) {
            throw {error: "Send message failed."};
          }
          if(resData.error) {
            throw resData;
          }

          var messageInfo = resData.payload.actions.reduce(function(p, v) {
            return {
              threadID: v.thread_fbid,
              messageID: v.message_id,
              timestamp: v.timestamp
            } || p; }, null);

          return callback(null, messageInfo);
        })
        .catch(function(err) {
          log.error("ERROR in sendMessage --> ", err);
          return callback(err);
        });
    }

    function send() {
      // We're doing a query to this to check if the given id is the id of
      // a user or of a group chat. The form will be different depending
      // on that.
      if(threadIDType === "Array") {
        sendContent(false);
      } else {
        api.getUserInfo(threadID, function(err, res) {
          if(err) {
            return callback(err);
          }
          sendContent(Object.keys(res).length > 0);
        });
      }
    }
  };
};
