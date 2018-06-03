"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadPictures(threadID, offset, limit, callback) {
    if (!callback) {
      throw { error: "getThreadPictures: need callback" };
    }

    var form = {
      thread_id: threadID,
      offset: offset,
      limit: limit
    };

    defaultFuncs
      .post(
        "https://www.facebook.com/ajax/messaging/attachments/sharedphotos.php",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        return Promise.all(
          resData.payload.imagesData.map(function(image) {
            form = {
              thread_id: threadID,
              image_id: image.fbid
            };
            return defaultFuncs
              .post(
                "https://www.facebook.com/ajax/messaging/attachments/sharedphotos.php",
                ctx.jar,
                form
              )
              .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
              .then(function(resData) {
                if (resData.error) {
                  throw resData;
                }
                // the response is pretty messy
                var queryThreadID =
                  resData.jsmods.require[0][3][1].query_metadata.query_path[0]
                    .message_thread;
                var imageData =
                  resData.jsmods.require[0][3][1].query_results[queryThreadID]
                    .message_images.edges[0].node.image2;
                return imageData;
              });
          })
        );
      })
      .then(function(resData) {
        callback(null, resData);
      })
      .catch(function(err) {
        log.error("Error in getThreadPictures", err);
        callback(err);
      });
  };
};
