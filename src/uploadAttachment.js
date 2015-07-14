/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");
var bluebird = require("bluebird");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function sendAttachment(attachment, callback) {
    var attachmentType = utils.getType(attachment);

    function typeError() {
      return callback({error: "Attachment should be of type array of readable stream and not " + attachmentType + "."});
    }

    if (attachmentType !== "Array") return typeError();

    var qs = mergeWithDefaults();
    var uploads = []

    // create an array of promises
    for (var i = 0; i < attachment.length; i++) {
      if (!utils.isReadableStream(attachment[i])) return typeError();

      var form = {
        upload_1024: attachment[i]
      };

      uploads.push(utils.postFormData("https://upload.facebook.com/ajax/mercury/upload.php", ctx.jar, form, qs)
      .then(utils.parseResponse)
      .then(function (resData) {
        if (resData.error) {
          throw resData
        };

        return resData.payload.metadata[0];
      }));
    }

    // resolve all promises
    bluebird.all(uploads)
    .then(function(resData) {
      callback(null, resData);
    })
    .catch(function(err) {
      log.error("Error in sendAttachment", err);
      return callback(err);
    });
  };
};
