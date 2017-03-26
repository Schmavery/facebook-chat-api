"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function addReaction(reaction, threadID, messageID, callback) {
    if(!callback) {
      callback = function() {};
    }
    
    var variables = {
      data: {
        client_mutation_id: 1,
        actor_id: ctx.userID,
        action: "ADD_REACTION",
        message_id: messageID,
        reaction: reaction        
      }
    };
    
    var qs = {
      doc_id: threadID,
      variables: JSON.stringify(variables),
      dpr: 1
    };

    defaultFuncs
      .postFormData("https://www.messenger.com/webgraphql/mutation/", ctx.jar, {}, qs)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (!resData) {
          throw {error: "addReaction returned empty object."};
        }
        if(resData.error) {
          throw resData;
        }
        callback(null);
      })
      .catch(function(err) {
        log.error("addReaction", err);
        return callback(err);
      });
  };
};