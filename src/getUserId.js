/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

function formatData(data) {
  return {
    userID: data.uid,
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
  return function getUserID(name, callback) {
    if(!callback) return log.error("getUserID: need callback");

    var form = mergeWithDefaults({
      'value' : name.toLowerCase(),
      'viewer' : ctx.userID,
      'rsp' : "search",
      'context' : "search",
      'path' : "/home.php",
      'request_id' : utils.getGUID(),
    });

    utils.get("https://www.facebook.com/ajax/typeahead/search.php", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error) return callback(resData);

      var data = resData.payload.entries;

      if(data[0].type !== "user") {
        return callback({error: "Couldn't find a user with name " + name + ". Best match: " + data[0].path});
      }

      callback(null, data.map(formatData));
    })
    .catch(function(err) {
      log.error("Error in getUserID", err);
      return callback(err);
    });
  };
};