/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function removeUserFromGroup(user_id, thread_id, callback) {
    if(!callback) callback = function() {};
    if (typeof thread_id !== "number" && typeof thread_id !== "string")
      return callback({error: "Thread_id should be of type number or string and not " + typeof thread_id + "."});
    if (typeof user_id !== "number" && typeof user_id !== "string")
      return callback({error: "User_id should be of type number or string and not " + typeof user_id + "."});

    var form = mergeWithDefaults({
      'uid' : user_id,
      'tid' : thread_id,
    });

    utils.post("https://www.facebook.com/chat/remove_participants", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (!resData) return callback({error: "Remove from group failed."});
      if(resData.error) return callback(resData);

      callback();
    })
    .catch(function(err) {
      log.error("ERROR in removeUserFromGroup --> ", err);
      return callback(err);
    });
  };
};
