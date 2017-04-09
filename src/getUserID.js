"use strict";

var all_ids = require("./getAllIDs.js");
var log = require("npmlog");

function formatData(data) {
  return {
    userID: utils.formatID(data.uid.toString()),
    photoUrl: data.photo,
    indexRank: data.index_rank,
    name: data.text,
    isVerified: data.is_verified,
    profileUrl: data.path,
    category: data.category,
    score: data.score,
  };
}

module.exports = function(defaultFuncs, api, ctx) {
  var getAllIDs = all_ids(defaultFuncs,api,ctx);
  return function getUserID(name, callback) {
    return getAllIDs(name,false,callback);
  };
};
