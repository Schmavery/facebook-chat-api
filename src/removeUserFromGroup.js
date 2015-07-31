/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function removeUserFromGroup(userID, threadID, callback) {
    if(!callback) callback = function() {};

    if (typeof threadID !== "number" && typeof threadID !== "string")
      return callback({error: "threadID should be of type number or string and not " + typeof threadID + "."});
    if (typeof userID !== "number" && typeof userID !== "string")
      return callback({error: "userID should be of type number or string and not " + typeof userID + "."});

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
