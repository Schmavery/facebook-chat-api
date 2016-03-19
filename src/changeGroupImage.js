"use strict";

var utils = require("../utils");
var log = require("npmlog");
var bluebird = require("bluebird");

module.exports = function(defaultFuncs, api, ctx) {
  function handleUpload(image, callback) {
    var uploads = [];

    var form = {
      'images_only': 'true',
      'attachment[]': image,
    };

    uploads.push(defaultFuncs
      .postFormData("https://upload.facebook.com/ajax/mercury/upload.php", ctx.jar, form, {})
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function (resData) {
        if (resData.error) {
          throw resData;
        }

        return resData.payload.metadata[0];
      }));

    // resolve all promises
    bluebird
      .all(uploads)
      .then(function(resData) {
        callback(null, resData);
      })
      .catch(function(err) {
        log.error("Error in handleUpload", err);
        return callback(err);
      });
  }

  return function changeGroupImage(image, threadID, callback) {
    if(!callback && utils.getType(threadID) === 'Function') {
      throw {error: "please pass a threadID as a second argument."};
    }

    if(!callback) {
      callback = function() {};
    }

    var messageAndOTID = utils.generateOfflineThreadingID();
    var form = {
      'client' : 'mercury',
      'message_batch[0][action_type]' : 'ma-type:log-message',
      'message_batch[0][author]' : 'fbid:' + ctx.userID,
      'message_batch[0][author_email]' : '',
      'message_batch[0][ephemeral_ttl_mode]' : '0',
      'message_batch[0][is_filtered_content]' : false,
      'message_batch[0][is_filtered_content_account]' : false,
      'message_batch[0][is_filtered_content_bh]' : false,
      'message_batch[0][is_filtered_content_invalid_app]' : false,
      'message_batch[0][is_filtered_content_quasar]' : false,
      'message_batch[0][is_forward]' : false,
      'message_batch[0][is_spoof_warning]' : false,
      'message_batch[0][is_unread]' : false,
      'message_batch[0][log_message_type]' : 'log:thread-image',
      'message_batch[0][manual_retry_cnt]' : '0',
      'message_batch[0][message_id]' : messageAndOTID,
      'message_batch[0][offline_threading_id]' : messageAndOTID,
      'message_batch[0][source]' : 'source:chat:web',
      'message_batch[0][source_tags][0]' : 'source:chat',
      'message_batch[0][status]' : '0',
      'message_batch[0][thread_fbid]' : threadID,
      'message_batch[0][thread_id]' : '',
      'message_batch[0][timestamp]' : Date.now(),
      'message_batch[0][timestamp_absolute]' : 'Today',
      'message_batch[0][timestamp_relative]' : utils.genTimestampRelative(),
      'message_batch[0][timestamp_time_passed]' : '0',
    };

    handleUpload(image, function (err, payload) {
      if (err) {
        return callback(err);
      }

      form['message_batch[0][log_message_data][image][fbid]'] = payload[0]['fbid'];
      form['message_batch[0][log_message_data][image][filename]'] = payload[0]['filename'];
      form['message_batch[0][log_message_data][image][filetype]'] = payload[0]['filetype'];
      form['message_batch[0][log_message_data][image][image_id]'] = payload[0]['image_id'];
      form['message_batch[0][log_message_data][image][src]'] = payload[0]['src'];

      defaultFuncs
        .post("https://www.facebook.com/ajax/mercury/send_messages.php", ctx.jar, form)
        .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
        .then(function(resData) {
          // check for errors here

          if (resData.error) {
            throw resData;
          }

          return callback();
        })
        .catch(function(err) {
          log.error("Error in uploading group image", err);
          return callback(err);
        });

    });
  };
};
