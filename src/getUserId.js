/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getUserId(name, callback) {
    var form = mergeWithDefaults({
      'value' : name.toLowerCase(),
      'viewer' : ctx.userId,
      'rsp' : "search",
      'context' : "search",
      'path' : "/home.php",
      'request_id' : utils.getGUID(),
    });

    utils.get("https://www.facebook.com/ajax/typeahead/search.php", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {

      if(resData.payload.entries[0].type !== "user") {
        return callback({error: "Couldn't find a user with name " + name + ". Best match: " + resData.payload.entries[0].path});
      }
      callback(null, resData.payload.entries);
    })
    .catch(function(err) {
      log.error("Error in getUserId", err);
      return callback(err);
    });
  };
};