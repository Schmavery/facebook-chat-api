"use strict";

var utils = require("../utils");
var log = require("npmlog");
var bluebird = require("bluebird");

var allowedProperties = {
  attachment: true,
  url: true,
  sticker: true,
  emoji: true,
  emojiSize: true,
  body: true,
  mentions: true
};

module.exports = function(defaultFuncs, api, ctx) {
  function uploadAttachment(attachments, callback) {
    var uploads = [];

    // create an array of promises
    for (var i = 0; i < attachments.length; i++) {
      if (!utils.isReadableStream(attachments[i])) {
        throw {
          error:
            "Attachment should be a readable stream and not " +
            utils.getType(attachments[i]) +
            "."
        };
      }

      var form = {
        upload_1024: attachments[i],
        voice_clip: "true"
      };

      uploads.push(
        defaultFuncs
          .postFormData(
            "https://upload.facebook.com/ajax/mercury/upload.php",
            ctx.jar,
            form,
            {}
          )
          .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
          .then(function(resData) {
            if (resData.error) {
              throw resData;
            }

            // We have to return the data unformatted unless we want to change it
            // back in sendMessage.
            return resData.payload.metadata[0];
          })
      );
    }

    // resolve all promises
    bluebird
      .all(uploads)
      .then(function(resData) {
        callback(null, resData);
      })
      .catch(function(err) {
        log.error("uploadAttachment", err);
        return callback(err);
      });
  }

  function getUrl(url, callback) {
    var form = {
      image_height: 960,
      image_width: 960,
      uri: url
    };

    defaultFuncs
      .post(
        "https://www.facebook.com/message_share_attachment/fromURI/",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          return callback(resData);
        }

        if (!resData.payload) {
          return callback({ error: "Invalid url" });
        }

        callback(null, resData.payload.share_data.share_params);
      })
      .catch(function(err) {
        log.error("getUrl", err);
        return callback(err);
      });
  }

  function sendContent(form, threadID, isSingleUser, messageAndOTID, callback) {
    // There are three cases here:
    // 1. threadID is of type array, where we're starting a new group chat with users
    //    specified in the array.
    // 2. User is sending a message to a specific user.
    // 3. No additional form params and the message goes to an existing group chat.
    if (utils.getType(threadID) === "Array") {
      for (var i = 0; i < threadID.length; i++) {
        form["specific_to_list[" + i + "]"] = "fbid:" + threadID[i];
      }
      form["specific_to_list[" + threadID.length + "]"] = "fbid:" + ctx.userID;
      form["client_thread_id"] = "root:" + messageAndOTID;
      log.info("sendMessage", "Sending message to multiple users: " + threadID);
    } else {
      // This means that threadID is the id of a user, and the chat
      // is a single person chat
      if (isSingleUser) {
        form["specific_to_list[0]"] = "fbid:" + threadID;
        form["specific_to_list[1]"] = "fbid:" + ctx.userID;
        form["other_user_fbid"] = threadID;
      } else {
        form["thread_fbid"] = threadID;
      }
    }

    if (ctx.globalOptions.pageID) {
      form["author"] = "fbid:" + ctx.globalOptions.pageID;
      form["specific_to_list[1]"] = "fbid:" + ctx.globalOptions.pageID;
      form["creator_info[creatorID]"] = ctx.userID;
      form["creator_info[creatorType]"] = "direct_admin";
      form["creator_info[labelType]"] = "sent_message";
      form["creator_info[pageID]"] = ctx.globalOptions.pageID;
      form["request_user_id"] = ctx.globalOptions.pageID;
      form["creator_info[profileURI]"] =
        "https://www.facebook.com/profile.php?id=" + ctx.userID;
    }

    defaultFuncs
      .post("https://www.facebook.com/messaging/send/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (!resData) {
          return callback({ error: "Send message failed." });
        }

        if (resData.error) {
          if (resData.error === 1545012) {
            log.warn(
              "sendMessage",
              "Got error 1545012. This might mean that you're not part of the conversation " +
                threadID
            );
          }
          return callback(resData);
        }

        var messageInfo = resData.payload.actions.reduce(function(p, v) {
          return (
            {
              threadID: v.thread_fbid,
              messageID: v.message_id,
              timestamp: v.timestamp
            } || p
          );
        }, null);

        return callback(null, messageInfo);
      })
      .catch(function(err) {
        log.error("sendMessage", err);
        return callback(err);
      });
  }

  function send(form, threadID, messageAndOTID, callback) {
    // We're doing a query to this to check if the given id is the id of
    // a user or of a group chat. The form will be different depending
    // on that.
    if (utils.getType(threadID) === "Array") {
      sendContent(form, threadID, false, messageAndOTID, callback);
    } else {
      api.getUserInfo(threadID, function(err, res) {
        if (err) {
          return callback(err);
        }
        sendContent(
          form,
          threadID,
          Object.keys(res).length > 0,
          messageAndOTID,
          callback
        );
      });
    }
  }

  function handleUrl(msg, form, callback, cb) {
    if (msg.url) {
      form["shareable_attachment[share_type]"] = "100";
      getUrl(msg.url, function(err, params) {
        if (err) {
          return callback(err);
        }

        form["shareable_attachment[share_params]"] = params;
        cb();
      });
    } else {
      cb();
    }
  }

  function handleSticker(msg, form, callback, cb) {
    if (msg.sticker) {
      form["sticker_id"] = msg.sticker;
    }
    cb();
  }

  function handleEmoji(msg, form, callback, cb) {
    if (msg.emojiSize != null && msg.emoji == null) {
      return callback({ error: "emoji property is empty" });
    }
    if (msg.emoji) {
      if (msg.emojiSize == null) {
        msg.emojiSize = "medium";
      }
      if (
        msg.emojiSize != "small" &&
        msg.emojiSize != "medium" &&
        msg.emojiSize != "large"
      ) {
        return callback({ error: "emojiSize property is invalid" });
      }
      if (form["body"] != null && form["body"] != "") {
        return callback({ error: "body is not empty" });
      }
      form["body"] = msg.emoji;
      form["tags[0]"] = "hot_emoji_size:" + msg.emojiSize;
    }
    cb();
  }

  function handleAttachment(msg, form, callback, cb) {
    if (msg.attachment) {
      form["image_ids"] = [];
      form["gif_ids"] = [];
      form["file_ids"] = [];
      form["video_ids"] = [];
      form["audio_ids"] = [];

      if (utils.getType(msg.attachment) !== "Array") {
        msg.attachment = [msg.attachment];
      }

      uploadAttachment(msg.attachment, function(err, files) {
        if (err) {
          return callback(err);
        }

        files.forEach(function(file) {
          var key = Object.keys(file);
          var type = key[0]; // image_id, file_id, etc
          form["" + type + "s"].push(file[type]); // push the id
        });
        cb();
      });
    } else {
      cb();
    }
  }

  function handleMention(msg, form, callback, cb) {
    if (msg.mentions) {
      for (let i = 0; i < msg.mentions.length; i++) {
        const mention = msg.mentions[i];

        const tag = mention.tag;
        if (typeof tag !== "string") {
          return callback({ error: "Mention tags must be strings." });
        }

        const offset = msg.body.indexOf(tag, mention.fromIndex || 0);

        if (offset < 0) {
          log.warn(
            "handleMention",
            'Mention for "' + tag + '" not found in message string.'
          );
        }

        if (mention.id == null) {
          log.warn("handleMention", "Mention id should be non-null.");
        }

        const id = mention.id || 0;
        form["profile_xmd[" + i + "][offset]"] = offset;
        form["profile_xmd[" + i + "][length]"] = tag.length;
        form["profile_xmd[" + i + "][id]"] = id;
        form["profile_xmd[" + i + "][type]"] = "p";
      }
    }
    cb();
  }

  return function sendMessage(msg, threadID, callback) {
    if (
      !callback &&
      (utils.getType(threadID) === "Function" ||
        utils.getType(threadID) === "AsyncFunction")
    ) {
      return callback({ error: "Pass a threadID as a second argument." });
    }
    if (!callback) {
      callback = function() {};
    }

    var msgType = utils.getType(msg);
    var threadIDType = utils.getType(threadID);

    if (msgType !== "String" && msgType !== "Object") {
      return callback({
        error:
          "Message should be of type string or object and not " + msgType + "."
      });
    }

    // Changing this to accomodate an array of users
    if (
      threadIDType !== "Array" &&
      threadIDType !== "Number" &&
      threadIDType !== "String"
    ) {
      return callback({
        error:
          "ThreadID should be of type number, string, or array and not " +
          threadIDType +
          "."
      });
    }

    if (msgType === "String") {
      msg = { body: msg };
    }

    var disallowedProperties = Object.keys(msg).filter(
      prop => !allowedProperties[prop]
    );
    if (disallowedProperties.length > 0) {
      return callback({
        error: "Dissallowed props: `" + disallowedProperties.join(", ") + "`"
      });
    }

    var messageAndOTID = utils.generateOfflineThreadingID();

    var form = {
      client: "mercury",
      action_type: "ma-type:user-generated-message",
      author: "fbid:" + ctx.userID,
      timestamp: Date.now(),
      timestamp_absolute: "Today",
      timestamp_relative: utils.generateTimestampRelative(),
      timestamp_time_passed: "0",
      is_unread: false,
      is_cleared: false,
      is_forward: false,
      is_filtered_content: false,
      is_filtered_content_bh: false,
      is_filtered_content_account: false,
      is_filtered_content_quasar: false,
      is_filtered_content_invalid_app: false,
      is_spoof_warning: false,
      source: "source:chat:web",
      "source_tags[0]": "source:chat",
      body: msg.body ? msg.body.toString() : "",
      html_body: false,
      ui_push_phase: "V3",
      status: "0",
      offline_threading_id: messageAndOTID,
      message_id: messageAndOTID,
      threading_id: utils.generateThreadingID(ctx.clientID),
      "ephemeral_ttl_mode:": "0",
      manual_retry_cnt: "0",
      has_attachment: !!(msg.attachment || msg.url || msg.sticker),
      signatureID: utils.getSignatureID()
    };

    handleSticker(msg, form, callback, () =>
      handleAttachment(msg, form, callback, () =>
        handleUrl(msg, form, callback, () =>
          handleEmoji(msg, form, callback, () =>
            handleMention(msg, form, callback, () =>
              send(form, threadID, messageAndOTID, callback)
            )
          )
        )
      )
    );
  };
};
