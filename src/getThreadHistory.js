"use strict";

var graphQLUtils = require("./graphQLUtils");
var log = require("npmlog");

function formatMessagesGraphQLResponse(data) {
  var messageThread = data.message_thread;
  var threadID = messageThread.thread_key.thread_fbid
    ? messageThread.thread_key.thread_fbid
    : messageThread.thread_key.other_user_id;

  return messageThread.messages.nodes.map(d =>
    graphQLUtils.formatMessageGraphQLResponse(threadID, messageThread.thread_type, d));
}

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadHistoryGraphQL(
    threadID,
    amount,
    timestamp,
    callback
  ) {
    if (!callback) {
      throw { error: "getThreadHistoryGraphQL: need callback" };
    }

    var query = {
      // This doc_id was valid on February 2nd 2017.
      doc_id: "1498317363570230",
      query_params: {
        id: threadID,
        message_limit: amount,
        load_messages: 1,
        load_read_receipts: false,
        before: timestamp
      }
    };

    graphQLUtils.graphQLBatch(ctx, defaultFuncs, query)
      .then(function(resData) {
        callback(null, formatMessagesGraphQLResponse(resData));
      })
      .catch(function(err) {
        log.error("getThreadHistoryGraphQL", err);
        return callback(err);
      });
  };
};
