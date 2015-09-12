"use strict";

var utils = require("../utils");
var log = require("npmlog");
var bluebird = require("bluebird");

module.exports = function(defaultFuncs, api, ctx) {
  return function sendAttachment(attachments, callback) {
    if(!callback) {
      throw {error: "sendAttachment: need callback"};
    }

    if (utils.getType(attachments) !== "Array") {
      attachments = [attachments];
    }

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
        log.error("Error in sendAttachment", err);
        return callback(err);
      });
  };
};
