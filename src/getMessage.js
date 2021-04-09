"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
    return function getMessage(threadID, messageID, callback) {
      if (!callback) {
        return callback({ error: "getMessage: need callback" });
      }

      if (!threadID || !messageID) {
        return callback({ error: "getMessage: need threadID and messageID" });
      }
  
      const form = {
        "av": ctx.globalOptions.pageID,
        "queries": JSON.stringify({
          "o0": {
            //This doc_id is valid as of ? (prob January 18, 2020)
            "doc_id": "1768656253222505",
            "query_params": {
              "thread_and_message_id": {
                "thread_id": threadID,
                "message_id": messageID,
              }
            }
          }
        })
      };

      defaultFuncs
      .post("https://www.facebook.com/api/graphqlbatch/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then((resData) => {
        if (resData[resData.length - 1].error_results > 0) {
          throw resData[0].o0.errors;
        }

        if (resData[resData.length - 1].successful_results === 0) {
          throw { error: "getMessage: there was no successful_results", res: resData };
        }

        var fetchData = resData[0].o0.data.message;
        if (fetchData) {
          !ctx.loggedIn ?
            undefined :
            (function () { callback(null, {
                threadID: threadID,
                messageID: fetchData.message_id,
                senderID: fetchData.message_sender.id,
                attachments: fetchData.blob_attachments.map(att => {
                    var x;
                    try {
                        x = utils._formatAttachment(att);
                    } catch (ex) {
                        x = att;
                        x.error = ex;
                        x.type = "unknown";
                    }
                    return x;
                }),
                body: fetchData.message.text,
                mentions: fetchData.message.ranges,
                timestamp: fetchData.timestamp_precise,
                messageReply: fetchData.replied_to_message,
                raw: fetchData,
            }); })();
        }
      })
      .catch((err) => {
        log.error("getMessage", err);
        callback(err);
      });
  
    };
};