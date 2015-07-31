/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");
var bluebird = require("bluebird");

function formatData(data) {
  return {
    imageID: data.image_id,
    filename: data.filename,
    filetype: data.filetype
  }
}

module.exports = function(defaultFuncs, api, ctx) {
  return function sendAttachment(attachments, callback) {
    if(!callback) callback = function() {};

    if (!Array.isArray(attachments)) attachments = [attachments];

    var qs = {};
    var uploads = []

    // create an array of promises
    for (var i = 0; i < attachments.length; i++) {
      if (!utils.isReadableStream(attachments[i])) return callback({error: "Attachement should be a readable stream and not " + utils.getType(attachments[i]) + "."});

      var form = {
        upload_1024: attachments[i]
      };

      uploads.push(defaultFuncs.postFormData("https://upload.facebook.com/ajax/mercury/upload.php", ctx.jar, form, qs)
      .then(utils.parseResponse)
      .then(function (resData) {
        if (resData.error) throw resData;

        return formatData(resData.payload.metadata[0]);
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
