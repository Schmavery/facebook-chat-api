/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

function formatData(data) {
  return {
    userId: data.uid,
    photoUrl: data.photo,
    indexRank: data.index_rank,
    name: data.text,
    isVerified: data.is_verified,
    profileUrl: data.path,
    category: data.category,
    score: data.score,
  };
}

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
      var data = resData.payload.entries;

      if(data[0].type !== "user") {
        return callback({error: "Couldn't find a user with name " + name + ". Best match: " + data[0].path});
      }

      callback(null, data.map(formatData));
    })
    .catch(function(err) {
      log.error("Error in getUserId", err);
      return callback(err);
    });
  };
};