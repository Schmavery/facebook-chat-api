"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function removeUserFromGroup(userID, threadID, callback) {
    if(!callback && utils.getType(threadID) === 'Function') return callback({error: "please pass a threadID as a second argument."});

    if(!callback) callback = function() {};
    if (utils.getType(threadID) !== "Number" && utils.getType(threadID) !== "String")
      return callback({error: "threadID should be of type Number or String and not " + utils.getType(threadID) + "."});
    if (utils.getType(userID) !== "Number" && utils.getType(userID) !== "String")
      return callback({error: "userID should be of type Number or String and not " + utils.getType(userID) + "."});

    var form = {
      'uid' : userID,
      'tid' : threadID,
    };

    defaultFuncs.post("https://www.facebook.com/chat/remove_participants", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (!resData) return callback({error: "Remove from group failed."});
      if(resData.error) return callback(resData);

      return callback();
    })
    .catch(function(err) {
      log.error("ERROR in removeUserFromGroup --> ", err);
      return callback(err);
    });
  };
};
