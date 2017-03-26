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
        action: "ADD_RECTION",
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
      .get("https://www.messenger.com/webgraphql/mutation/", ctx.jar, qs)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(resData => {
        if (resData.error) {
          throw resData;
        }
        
        return callback(null);
      })
      .catch(err => {
        log.error("addReaction", err);
        return callback(err);
      });
  };
};