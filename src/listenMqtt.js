/* eslint-disable no-redeclare */
"use strict";
var utils = require("../utils");
var log = require("npmlog");
var mqtt = require('mqtt');
var websocket = require('websocket-stream');

var identity = function () {};

//Don't really know what this does but I think it's for the active state
//TODO: Move to ctx when implemented
var chatOn = true;
var foreground = false;

var topics = [
  "/t_ms",
  "/thread_typing",
  "/orca_typing_notifications",
  "/orca_presence",
  "/legacy_web",
  "/br_sr",
  "/sr_res",
  "/webrtc",
  "/onevc",
  "/notify_disconnect",
  "/inbox",
  "/mercury",
  "/messaging_events",
  "/orca_message_notifications",
  "/pp",
  "/webrtc_response",
];

function listenMqtt(defaultFuncs, api, ctx, globalCallback) {
  var sessionID = Math.floor(Math.random() * 9007199254740991) + 1;
  var username = {
    u: ctx.userID,
    s: sessionID,
    chat_on: chatOn,
    fg: foreground,
    d: utils.getGUID(),
    ct: "websocket",
    //App id from facebook
    aid: "219994525426954",
    mqtt_sid: "",
    cp: 3,
    ecp: 10,
    st: topics,
    pm: [],
    dc: "",
    no_auto_fg: true,
    gas: null
  };
  var cookies = ctx.jar.getCookies("https://www.facebook.com").join("; ");

  //Region could be changed for better ping. (Region atn: Southeast Asia, region ash: West US, prob) (Don't really know if we need it).
  //// var host = 'wss://edge-chat.facebook.com/chat?region=atn&sid=' + sessionID;
  var host = 'wss://edge-chat.facebook.com/chat?sid=' + sessionID;

  var options = {
    clientId: "mqttwsclient",
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    username: JSON.stringify(username),
    clean: true,
    wsOptions: {
      headers: {
        'Cookie': cookies,
        'Origin': 'https://www.facebook.com',
        'User-Agent': ctx.globalOptions.userAgent,
        'Referer': 'https://www.facebook.com',
        'Host': 'edge-chat.facebook.com'
      },
      origin: 'https://www.facebook.com',
      protocolVersion: 13
    }
  };

  ctx.mqttClient = new mqtt.Client(_ => websocket(host, options.wsOptions), options);

  var mqttClient = ctx.mqttClient;

  mqttClient.on('error', function(err) {
    log.error(err);
    mqttClient.end();
    globalCallback("Connection refused: Server unavailable", null);
  });

  mqttClient.on('connect', function() {
    var topic;
    var queue = {
      sync_api_version: 10,
      max_deltas_able_to_process: 1000,
      delta_batch_size: 500,
      encoding: "JSON",
      entity_fbid: ctx.userID,
    };

    if(ctx.globalOptions.pageID) {
      queue.entity_fbid = ctx.globalOptions.pageID;
    }

    if(ctx.syncToken) {
      topic = "/messenger_sync_get_diffs";
      queue.last_seq_id = ctx.lastSeqId;
      queue.sync_token = ctx.syncToken;
    } else {
      topic = "/messenger_sync_create_queue";
      queue.initial_titan_sequence_id = ctx.lastSeqId;
      queue.device_params = null;
    }
    
    mqttClient.publish(topic, JSON.stringify(queue), {qos: 1, retain: false});
  });

  mqttClient.on('message', function(topic, message, packet) {
    var jsonMessage = JSON.parse(message);
    if(topic === "/t_ms") {
      if(jsonMessage.firstDeltaSeqId && jsonMessage.syncToken) {
        ctx.lastSeqId = jsonMessage.firstDeltaSeqId;
        ctx.syncToken = jsonMessage.syncToken;
      }

      if(jsonMessage.lastIssuedSeqId) {
        ctx.lastSeqId = parseInt(jsonMessage.lastIssuedSeqId);
      }

      if(jsonMessage.queueEntityId && ctx.globalOptions.pageID &&
        ctx.globalOptions.pageID != jsonMessage.queueEntityId) {
        return;
      }

      //If it contains more than 1 delta
      for (var i in jsonMessage.deltas) {
        var delta = jsonMessage.deltas[i];
        parseDelta(defaultFuncs, api, ctx, globalCallback, { "delta": delta });
      }
    } else if (topic === "/thread_typing" || topic === "/orca_typing_notifications") {
      var typ = {
        type: "typ",
        isTyping: !!jsonMessage.state,
        from: jsonMessage.sender_fbid.toString(),
        threadID: utils.formatID((jsonMessage.thread || jsonMessage.sender_fbid).toString())
      };
      (function () { globalCallback(null, typ); })();
    } else if (topic === "/orca_presence") {
      if (!ctx.globalOptions.updatePresence) {
        for (var i in jsonMessage.list) {
          var data = jsonMessage.list[i];
          var userID = data["u"];

          var presence = {
            type: "presence",
            userID: userID.toString(),
            //Convert to ms
            timestamp: data["l"] * 1000,
            statuses: data["p"]
          };
          (function () { globalCallback(null, presence); })();
        }
      }
    }

  });

  mqttClient.on('close', function() {
    // client.end();
  });
}

function parseDelta(defaultFuncs, api, ctx, globalCallback, v) {
  if(v.delta.class == "NewMessage") {
    (function resolveAttachmentUrl(i) {
      if (i == v.delta.attachments.length) {
        var fmtMsg;
        try {
          fmtMsg = utils.formatDeltaMessage(v);
        } catch (err) {
          return globalCallback({
            error: "Problem parsing message object. Please open an issue at https://github.com/Schmavery/facebook-chat-api/issues.",
            detail: err,
            res: v,
            type: "parse_error"
          });
        }
        if (fmtMsg) {
          if (ctx.globalOptions.autoMarkDelivery) {
            markDelivery(ctx, api, fmtMsg.threadID, fmtMsg.messageID);
          }
        }
        return !ctx.globalOptions.selfListen &&
          fmtMsg.senderID === ctx.userID ?
          undefined :
          (function () { globalCallback(null, fmtMsg); })();
      } else {
        if (
          v.delta.attachments[i].mercury.attach_type == "photo"
        ) {
          api.resolvePhotoUrl(
            v.delta.attachments[i].fbid,
            (err, url) => {
              if (!err)
                v.delta.attachments[
                  i
                ].mercury.metadata.url = url;
              return resolveAttachmentUrl(i + 1);
            }
          );
        } else {
          return resolveAttachmentUrl(i + 1);
        }
      }
    })(0);
  }

  if (v.delta.class == "ClientPayload") {
    var clientPayload = utils.decodeClientPayload(
      v.delta.payload
    );
    if (clientPayload && clientPayload.deltas) {
      for (var i in clientPayload.deltas) {
        var delta = clientPayload.deltas[i];
        if (delta.deltaMessageReaction && !!ctx.globalOptions.listenEvents) {
          (function () { globalCallback(null, {
            type: "message_reaction",
            threadID: (delta.deltaMessageReaction.threadKey
              .threadFbId ?
              delta.deltaMessageReaction.threadKey.threadFbId : delta.deltaMessageReaction.threadKey
                .otherUserFbId).toString(),
            messageID: delta.deltaMessageReaction.messageId,
            reaction: delta.deltaMessageReaction.reaction,
            senderID: delta.deltaMessageReaction.senderId.toString(),
            userID: delta.deltaMessageReaction.userId.toString()
          }); })();
        } else if (delta.deltaRecallMessageData && !!ctx.globalOptions.listenEvents) {
          (function () { globalCallback(null, {
            type: "message_unsend",
            threadID: (delta.deltaRecallMessageData.threadKey.threadFbId ?
              delta.deltaRecallMessageData.threadKey.threadFbId : delta.deltaRecallMessageData.threadKey
                .otherUserFbId).toString(),
            messageID: delta.deltaRecallMessageData.messageID,
            senderID: delta.deltaRecallMessageData.senderID.toString(),
            deletionTimestamp: delta.deltaRecallMessageData.deletionTimestamp,
            timestamp: delta.deltaRecallMessageData.timestamp
          }); })();
        } else if (delta.deltaMessageReply) {
          //Mention block - #1
          var mdata =
            delta.deltaMessageReply.message === undefined ? [] :
              delta.deltaMessageReply.message.data === undefined ? [] :
                delta.deltaMessageReply.message.data.prng === undefined ? [] :
                  JSON.parse(delta.deltaMessageReply.message.data.prng);
          var m_id = mdata.map(u => u.i);
          var m_offset = mdata.map(u => u.o);
          var m_length = mdata.map(u => u.l);

          var mentions = {};

          for (var i = 0; i < m_id.length; i++) {
            mentions[m_id[i]] = (delta.deltaMessageReply.message.body || "").substring(
              m_offset[i],
              m_offset[i] + m_length[i]
            );
          }
          //Mention block - 1#
          var callbackToReturn = {
            type: "message_reply",
            threadID: (delta.deltaMessageReply.message.messageMetadata.threadKey.threadFbId ?
              delta.deltaMessageReply.message.messageMetadata.threadKey.threadFbId : delta.deltaMessageReply.message.messageMetadata.threadKey
                .otherUserFbId).toString(),
            messageID: delta.deltaMessageReply.message.messageMetadata.messageId,
            senderID: delta.deltaMessageReply.message.messageMetadata.actorFbId.toString(),
            attachments: delta.deltaMessageReply.message.attachments.map(function (att) {
              var mercury = JSON.parse(att.mercuryJSON);
              Object.assign(att, mercury);
              return att;
            }).map(att => {
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
            body: delta.deltaMessageReply.message.body || "",
            isGroup: !!delta.deltaMessageReply.message.messageMetadata.threadKey.threadFbId,
            mentions: mentions,
            timestamp: delta.deltaMessageReply.message.messageMetadata.timestamp,
          };

          if (delta.deltaMessageReply.repliedToMessage) {
            //Mention block - #2
            mdata =
              delta.deltaMessageReply.repliedToMessage === undefined ? [] :
                delta.deltaMessageReply.repliedToMessage.data === undefined ? [] :
                  delta.deltaMessageReply.repliedToMessage.data.prng === undefined ? [] :
                    JSON.parse(delta.deltaMessageReply.repliedToMessage.data.prng);
            m_id = mdata.map(u => u.i);
            m_offset = mdata.map(u => u.o);
            m_length = mdata.map(u => u.l);

            var rmentions = {};

            for (var i = 0; i < m_id.length; i++) {
              rmentions[m_id[i]] = (delta.deltaMessageReply.repliedToMessage.body || "").substring(
                m_offset[i],
                m_offset[i] + m_length[i]
              );
            }
            //Mention block - 2#
            callbackToReturn.messageReply = {
              threadID: (delta.deltaMessageReply.repliedToMessage.messageMetadata.threadKey.threadFbId ?
                delta.deltaMessageReply.repliedToMessage.messageMetadata.threadKey.threadFbId : delta.deltaMessageReply.repliedToMessage.messageMetadata.threadKey
                  .otherUserFbId).toString(),
              messageID: delta.deltaMessageReply.repliedToMessage.messageMetadata.messageId,
              senderID: delta.deltaMessageReply.repliedToMessage.messageMetadata.actorFbId.toString(),
              attachments: delta.deltaMessageReply.repliedToMessage.attachments.map(function (att) {
                var mercury = JSON.parse(att.mercuryJSON);
                Object.assign(att, mercury);
                return att;
              }).map(att => {
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
              body: delta.deltaMessageReply.repliedToMessage.body || "",
              isGroup: !!delta.deltaMessageReply.repliedToMessage.messageMetadata.threadKey.threadFbId,
              mentions: rmentions,
              timestamp: delta.deltaMessageReply.repliedToMessage.messageMetadata.timestamp,
            };
          }

          if (ctx.globalOptions.autoMarkDelivery) {
            markDelivery(ctx, api, callbackToReturn.threadID, callbackToReturn.messageID);
          }

          return !ctx.globalOptions.selfListen &&
            callbackToReturn.senderID === ctx.userID ?
            undefined :
            (function () { globalCallback(null, callbackToReturn); })();
        }
      }
      return;
    }
  }

  if (v.delta.class !== "NewMessage" &&
    !ctx.globalOptions.listenEvents
  )
    return;

  switch (v.delta.class) {
    case "ReadReceipt":
      var fmtMsg;
      try {
        fmtMsg = utils.formatDeltaReadReceipt(v.delta);
      } catch (err) {
        return globalCallback({
          error: "Problem parsing message object. Please open an issue at https://github.com/Schmavery/facebook-chat-api/issues.",
          detail: err,
          res: v.delta,
          type: "parse_error"
        });
      }
      return (function () { globalCallback(null, fmtMsg); })();
    case "AdminTextMessage":
      switch (v.delta.type) {
        case "change_thread_theme":
        case "change_thread_nickname":
        case "change_thread_icon":
          break;
        case "group_poll":
          var fmtMsg;
          try {
            fmtMsg = utils.formatDeltaEvent(v.delta);
          } catch (err) {
            return globalCallback({
              error: "Problem parsing message object. Please open an issue at https://github.com/Schmavery/facebook-chat-api/issues.",
              detail: err,
              res: v.delta,
              type: "parse_error"
            });
          }
          return (function () { globalCallback(null, fmtMsg); })();
        default:
          return;
      }
      break;
    //For group images
    case "ForcedFetch":
      if (!v.delta.threadKey) return;
      var mid = v.delta.messageId;
      var tid = v.delta.threadKey.threadFbId;
      if (mid && tid) {
        const form = {
          "av": ctx.globalOptions.pageID,
          "queries": JSON.stringify({
            "o0": {
              //This doc_id is valid as of ? (prob January 18, 2020)
              "doc_id": "1768656253222505",
              "query_params": {
                "thread_and_message_id": {
                  "thread_id": tid.toString(),
                  "message_id": mid.toString(),
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
              throw { error: "forcedFetch: there was no successful_results", res: resData };
            }

            var fetchData = resData[0].o0.data.message;
            if (fetchData && fetchData.__typename === "ThreadImageMessage") {
              (!ctx.globalOptions.selfListen &&
                fetchData.message_sender.id.toString() === ctx.userID) ||
                !ctx.loggedIn ?
                undefined :
                (function () { globalCallback(null, {
                  type: "change_thread_image",
                  threadID: utils.formatID(tid.toString()),
                  snippet: fetchData.snippet,
                  timestamp: fetchData.timestamp_precise,
                  author: fetchData.message_sender.id,
                  image: {
                    attachmentID: fetchData.image_with_metadata && fetchData.image_with_metadata.legacy_attachment_id,
                    width: fetchData.image_with_metadata && fetchData.image_with_metadata.original_dimensions.x,
                    height: fetchData.image_with_metadata && fetchData.image_with_metadata.original_dimensions.y,
                    url: fetchData.image_with_metadata && fetchData.image_with_metadata.preview.uri
                  }
                }); })();
            }
          })
          .catch((err) => {
            log.error("forcedFetch", err);
          });
      }
      break;
    case "ThreadName":
    case "ParticipantsAddedToGroupThread":
    case "ParticipantLeftGroupThread":
      var formattedEvent;
      try {
        formattedEvent = utils.formatDeltaEvent(v.delta);
      } catch (err) {
        return globalCallback({
          error: "Problem parsing message object. Please open an issue at https://github.com/Schmavery/facebook-chat-api/issues.",
          detail: err,
          res: v.delta,
          type: "parse_error"
        });
      }
      return (!ctx.globalOptions.selfListen &&
        formattedEvent.author.toString() === ctx.userID) ||
        !ctx.loggedIn ?
        undefined :
        (function () { globalCallback(null, formattedEvent); })();
  }
}

function markDelivery(ctx, api, threadID, messageID) {
  if (threadID && messageID) {
    api.markAsDelivered(threadID, messageID, (err) => {
      if (err) {
        log.error(err);
      } else {
        if (ctx.globalOptions.autoMarkRead) {
          api.markAsRead(threadID, (err) => {
            if (err) {
              log.error(err);
            }
          });
        }
      }
    });
  }
}

module.exports = function (defaultFuncs, api, ctx) {
  var globalCallback = identity;
  return function (callback) {
    globalCallback = callback;

    //Reset some stuff
    ctx.lastSeqId = 0;
    ctx.syncToken = undefined;

    //Same request as getThreadList
    const form = {
      "av": ctx.globalOptions.pageID,
      "queries": JSON.stringify({
        "o0": {
          "doc_id": "1349387578499440",
          "query_params": {
            "limit": 1,
            "before": null,
            "tags": ["INBOX"],
            "includeDeliveryReceipts": false,
            "includeSeqID": true
          }
        }
      })
    };

    defaultFuncs
      .post("https://www.facebook.com/api/graphqlbatch/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then((resData) => {
        if (resData && resData.length > 0 && resData[resData.length - 1].error_results > 0) {
          throw resData[0].o0.errors;
        }

        if (resData[resData.length - 1].successful_results === 0) {
          throw { error: "getSeqId: there was no successful_results", res: resData };
        }

        if (resData[0].o0.data.viewer.message_threads.sync_sequence_id) {
          ctx.lastSeqId = resData[0].o0.data.viewer.message_threads.sync_sequence_id;
          listenMqtt(defaultFuncs, api, ctx, globalCallback);
        }

      })
      .catch((err) => {
        log.error("getSeqId", err);
        return callback(err);
      });

    var stopListening = function () {
      globalCallback = identity;

      if(ctx.mqttClient)
      {
        ctx.mqttClient.end();
        ctx.mqttClient = undefined;
      }
    };

    return stopListening;
  };
};
