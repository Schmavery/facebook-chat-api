"use strict";

var utils = require("../utils");
var log = require("npmlog");

var clientMutationId = 0;

module.exports = function(defaultFuncs, api, ctx) {
  return function setMessageReaction(reaction, threadID, messageID, callback) {
    if(!callback) {
      callback = function() {};
    }
    
    switch (reaction) {
      case "\uD83D\uDE0D": //:heart_eyes:
      case "\uD83D\uDE06": //:laughing:
      case "\uD83D\uDE2E": //:open_mouth:
      case "\uD83D\uDE22": //:cry:
      case "\uD83D\uDE20": //:angry:
      case "\uD83D\uDC4D": //:thumbsup:
      case "\uD83D\uDC4E": //:thumbsdown:
      case "":
        //valid
        break;
      case ":heart_eyes:":
        reaction = "\uD83D\uDE0D";
      case ":laughing:":
        reaction = "\uD83D\uDE06";
      case ":open_mouth:":
        reaction = "\uD83D\uDE2E";
      case ":cry:":
        reaction = "\uD83D\uDE22";
      case ":angry:":
        reaction = "\uD83D\uDE20";
      case ":thumbsup:":
        reaction = "\uD83D\uDC4D";
      case ":thumbsdown:":
        reaction = "\uD83D\uDC4E";
      default:
        return callback({error: "reaction is not valid emoji"});
        break;
    }
    
    var variables = {
      data: {
        client_mutation_id: clientMutationId++,
        actor_id: ctx.userID,
        action: reaction == "" ? "REMOVE_REACTION" : "ADD_REACTION",
        message_id: messageID,
        reaction: reaction        
      }
    };
    
    var qs = {
      doc_id: "1491398900900362",
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