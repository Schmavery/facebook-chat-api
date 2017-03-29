"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function (defaultFuncs, api, ctx) {
  return function getUserDay(userID, callback) {
    if (!callback) {
      callback = function () { };
    }
    var query =  'Query MontageThreadViewRoute {message_thread(' + userID + ') {@resultFragment}} ' +
                 'QueryFragment imageFragment : MessageImage {image {uri},id} ' +
                 'QueryFragment videoFragment : MessageVideo {playable_url,id} ' +
                 //'QueryFragment stickerFragment : Sticker {image {uri},animated_image {uri},id} ' + //I disabled stickers due it's probably not used now?
                 //'QueryFragment stickerMessageFragment : UserMessage {message {text},id} ' +
                 'QueryFragment dayFragment : UserMessage {message_id,message_sender {id}, timestamp, message_source_data {message_source},blob_attachments {__typename as type,@imageFragment,@videoFragment}} ' +
                 'QueryFragment dayStructureFragment : MessagesOfThreadConnection {count,edges {node {@dayFragment}}} ' +
                 'QueryFragment messagesFragment : MessageThread {messages.last(100) as userDays {@dayStructureFragment},id} ' +
                 'QueryFragment resultFragment : MessageThread {montage_thread {@messagesFragment}}';
    try {
      api.executeGraphQueryBatch(query, function(err, data) {
        if (err) {
          throw err;
        }
        console.log(JSON.stringify(data, null, 2));
        return;
        var days = [];
        if (data.response &&
            data.response[userID] &&
            data.response[userID].montage_thread &&
            data.response[userID].montage_thread.userDays &&
            data.response[userID].montage_thread.userDays.edges) {
          for (var i in data.response[userID].montage_thread.userDays.edges) {
            var day = data.response[userID].montage_thread.userDays.edges[i].node;
            if (day.blob_attachments && day.blob_attachments[0]) {
              var formattedDay = {
                "messageId": day.blob_attachments[0].id,
                "type": day.blob_attachments[0].type,
                "timestamp": day.timestamp * 1000,
              };
              if (day.blob_attachments[0].type == "MessageImage") {
                formattedDay.uri = day.blob_attachments[0].image.uri;
              }
              days.push(formattedDay);
            }
          }
          callback(null, days);
        } else {
          throw {error: "Can't parse query response"};
        }
      });
    } catch(err) {
      console.error("getUserDay", err);
      callback(err, null);
    }
  }
};
