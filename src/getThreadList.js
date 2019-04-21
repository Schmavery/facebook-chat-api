"use strict";

const utils = require("../utils");
const log = require("npmlog");

function createProfileUrl(url, username, id) {
  if (url) return url;
  return "https://www.facebook.com/" + (username || utils.formatID(id.toString()));
}

function formatParticipants(participants) {
  return participants.nodes.map((p)=>{
    p = p.messaging_actor;
    switch (p["__typename"]) {
      case "User":
        return {
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()), // do we need .toString()? when it is not a string?
          name: p.name,
          shortName: p.short_name,
          gender: p.gender,
          url: p.url, // how about making it profileURL
          profilePicture: p.big_image_src.uri,
          username: (p.username||null),
          // TODO: maybe better names for these?
          isViewerFriend: p.is_viewer_friend, // true/false
          isMessengerUser: p.is_messenger_user, // true/false
          isVerified: p.is_verified, // true/false
          isMessageBlockedByViewer: p.is_message_blocked_by_viewer, // true/false
          isViewerCoworker: p.is_viewer_coworker, // true/false
          isEmployee: p.is_employee // null? when it is something other? can someone check?
        };
      case "Page":
        return {
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()), // or maybe... pageID?
          name: p.name,
          url: p.url,
          profilePicture: p.big_image_src.uri,
          username: (p.username||null),
          // uhm... better names maybe?
          acceptsMessengerUserFeedback: p.accepts_messenger_user_feedback, // true/false
          isMessengerUser: p.is_messenger_user, // true/false
          isVerified: p.is_verified, // true/false
          isMessengerPlatformBot: p.is_messenger_platform_bot, // true/false
          isMessageBlockedByViewer: p.is_message_blocked_by_viewer, // true/false
        };
      case "ReducedMessagingActor":
        return {
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()),
          name: p.name,
          url: createProfileUrl(p.url, p.username, p.id), // in this case p.url is null all the time
          profilePicture: p.big_image_src.uri, // in this case it is default facebook photo, we could determine gender using it
          username: (p.username||null), // maybe we could use it to generate profile URL?
          isMessageBlockedByViewer: p.is_message_blocked_by_viewer, // true/false
        };
      case "UnavailableMessagingActor":
        return {
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()),
          name: p.name, // "Facebook User" in user's language
          url: createProfileUrl(p.url, p.username, p.id), // in this case p.url is null all the time
          profilePicture: p.big_image_src.uri, // default male facebook photo
          username: (p.username||null), // maybe we could use it to generate profile URL?
          isMessageBlockedByViewer: p.is_message_blocked_by_viewer, // true/false
        };
      default:
        log.warn("getThreadList", "Found participant with unsupported typename. Please open an issue at https://github.com/Schmavery/facebook-chat-api/issues\n" + JSON.stringify(p, null, 2));
        return {
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()),
          name: p.name || `[unknown ${p["__typename"]}]`, // probably it will always be something... but fallback to [unknown], just in case
        };
    }
  });
}

// "FF8C0077" -> "8C0077"
function formatColor(color) {
  if (color && color.match(/^(?:[0-9a-fA-F]{8})$/g)) {
    return color.slice(2);
  }
  return color;
}

function getThreadName(t) {
  if (t.name || t.thread_key.thread_fbid) return t.name;

  for (let p of t.all_participants.nodes) {
    if (p.messaging_actor.id === t.thread_key.other_user_id) return p.messaging_actor.name;
  }
}

function mapNicknames(customizationInfo) {
  return (customizationInfo && customizationInfo.participant_customizations) ? customizationInfo.participant_customizations.map(u => {
      return {
        "userID": u.participant_id,
        "nickname": u.nickname
      };
  }):[];
}

function formatThreadList(data) {
  return data.map(t => {
    let lastMessageNode = (t.last_message&&t.last_message.nodes&&t.last_message.nodes.length>0)?t.last_message.nodes[0]:null;
    return {
      threadID: t.thread_key?utils.formatID(t.thread_key.thread_fbid || t.thread_key.other_user_id):null, // shall never be null
      name: getThreadName(t),
      unreadCount: t.unread_count,
      messageCount: t.messages_count,
      imageSrc: t.image?t.image.uri:null,
      emoji: t.customization_info?t.customization_info.emoji:null,
      color: formatColor(t.customization_info?t.customization_info.outgoing_bubble_color:null),
      nicknames: mapNicknames(t.customization_info),
      muteUntil: t.mute_until,
      participants: formatParticipants(t.all_participants),
      adminIDs: t.thread_admins.map(a => a.id),
      folder: t.folder,
      isGroup: t.thread_type === "GROUP",
      // rtc_call_data: t.rtc_call_data, // TODO: format and document this
      // isPinProtected: t.is_pin_protected, // feature from future? always false (2018-04-04)
      customizationEnabled: t.customization_enabled, // false for ONE_TO_ONE with Page or ReducedMessagingActor
      participantAddMode: t.participant_add_mode_as_string, // "ADD" if "GROUP" and null if "ONE_TO_ONE"
      montageThread: t.montage_thread?Buffer.from(t.montage_thread.id,"base64").toString():null, // base64 encoded string "message_thread:0000000000000000"
      // it is not userID nor any other ID known to me...
      // can somebody inspect it? where is it used?
      // probably Messenger Day uses it
      reactionsMuteMode: t.reactions_mute_mode,
      mentionsMuteMode: t.mentions_mute_mode,
      isArchived: t.has_viewer_archived,
      isSubscribed: t.is_viewer_subscribed,
      timestamp: t.updated_time_precise, // in miliseconds
      // isCanonicalUser: t.is_canonical_neo_user, // is it always false?
      // TODO: how about putting snippet in another object? current implementation does not handle every possibile message type etc.
      snippet: lastMessageNode?lastMessageNode.snippet:null,
      snippetAttachments: lastMessageNode?lastMessageNode.extensible_attachment:null, // TODO: not sure if it works
      snippetSender: lastMessageNode?utils.formatID((lastMessageNode.message_sender.messaging_actor.id || "").toString()):null,
      lastMessageTimestamp: lastMessageNode?lastMessageNode.timestamp_precise:null, // timestamp in miliseconds
      lastReadTimestamp: (t.last_read_receipt&&t.last_read_receipt.nodes.length>0)
                         ? (t.last_read_receipt.nodes[0]?t.last_read_receipt.nodes[0].timestamp_precise:null)
                         : null, // timestamp in miliseconds
      cannotReplyReason: t.cannot_reply_reason, // TODO: inspect possible values

      // @Legacy
      participantIDs: formatParticipants(t.all_participants).map(participant => participant.userID),
      threadType: t.thread_type === "GROUP" ? 2 : 1 // "GROUP" or "ONE_TO_ONE"
    };
  });
}

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadList(limit, timestamp, tags, callback) {
    if (!callback && (utils.getType(tags) === "Function" || utils.getType(tags) === "AsyncFunction")) {
      callback = tags;
      tags = [""];
    }
    if (utils.getType(limit) !== "Number" || !Number.isInteger(limit) || limit <= 0) {
      throw {error: "getThreadList: limit must be a positive integer"};
    }
    if (utils.getType(timestamp) !== "Null" &&
       (utils.getType(timestamp) !== "Number" || !Number.isInteger(timestamp))) {
      throw {error: "getThreadList: timestamp must be an integer or null"};
    }
    if (utils.getType(tags) === "String") {
      tags = [tags];
    }
    if (utils.getType(tags) !== "Array") {
      throw {error: "getThreadList: tags must be an array"};
    }
    if (utils.getType(callback) !== "Function" && utils.getType(callback) !== "AsyncFunction") {
      throw {error: "getThreadList: need callback"};
    }

    const form = {
      "av": ctx.globalOptions.pageID,
      "queries": JSON.stringify({
        "o0": {
          // This doc_id was valid on 2018-04-04.
          "doc_id": "1349387578499440",
          "query_params": {
            "limit": limit+(timestamp?1:0),
            "before": timestamp,
            "tags": tags,
            "includeDeliveryReceipts": true,
            "includeSeqID": false
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
          throw {error: "getThreadList: there was no successful_results", res: resData};
        }

        // When we ask for threads using timestamp from the previous request,
        // we are getting the last thread repeated as the first thread in this response.
        // .shift() gets rid of it
        // It is also the reason for increasing limit by 1 when timestamp is set
        // this way user asks for 10 threads, we are asking for 11,
        // but after removing the duplicated one, it is again 10
        if (timestamp) {
          resData[0].o0.data.viewer.message_threads.nodes.shift();
        }
        callback(null, formatThreadList(resData[0].o0.data.viewer.message_threads.nodes));
      })
      .catch((err) => {
        log.error("getThreadList", err);
        return callback(err);
      });
  };
};
