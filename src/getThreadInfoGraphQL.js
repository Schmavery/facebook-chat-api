"use strict";

var utils = require("../utils");
var log = require("npmlog");

function formatEventReminders(reminder) {
  return {
    reminderID: reminder.id,
    eventCreatorID: reminder.lightweight_event_creator.id,
    time: reminder.time,
    eventType: reminder.lightweight_event_type.toLowerCase(),
    locationName: reminder.location_name,
    // @TODO verify this
    locationCoordinates: reminder.location_coordinates,
    locationPage: reminder.location_page,
    eventStatus: reminder.lightweight_event_status.toLowerCase(),
    note: reminder.note,
    repeatMode: reminder.repeat_mode.toLowerCase(),
    eventTitle: reminder.event_title,
    triggerMessage: reminder.trigger_message,
    secondsToNotifyBefore: reminder.seconds_to_notify_before,
    allowsRsvp: reminder.allows_rsvp,
    relatedEvent: reminder.related_event,
    members: reminder.event_reminder_members.edges.map(function(member) {
      return {
        memberID: member.node.id,
        state: member.guest_list_state.toLowerCase()
      }
    }),
  }
}

function formatThreadGraphQLResponse(data) {
  var messageThread = data.o0.data.message_thread;
  var threadID = messageThread.thread_key.thread_fbid ? messageThread.thread_key.thread_fbid : messageThread.thread_key.other_user_id;

  return {
    threadID: threadID,
    threadName: messageThread.name,
    participantIDs: messageThread.all_participants.nodes.map(function(d){
      return d.messaging_actor.id;
    }),
    unreadCount: messageThread.unread_count,
    messageCount: messageThread.messages_count,
    timestamp: messageThread.updated_time_precise,
    isPinProtected: messageThread.is_pin_protected,
    eventReminders: messageThread.event_reminders ? messageThread.event_reminders.nodes.map(formatEventReminders) : null,
    relatedPageThread: messageThread.related_page_thread,
    reactionsMuteMode: messageThread.reactions_mute_mode.toLowerCase(),
    mentionsMuteMode: messageThread.mentions_mute_mode.toLowerCase(),
    threadType: messageThread.thread_type.toLowerCase(),
    topEmojis: messageThread.top_emojis,
    emoji: messageThread.customization_info ? messageThread.customization_info.emoji : null,
    color: messageThread.customization_info && messageThread.customization_info.outgoing_bubble_color ?
        messageThread.customization_info.outgoing_bubble_color.slice(2) : null,
    nicknames: messageThread.customization_info && messageThread.customization_info.participant_customizations ?
        messageThread.customization_info.participant_customizations.reduce(function(res, val) {
          if (val.nickname) res[val.participant_id] = val.nickname;
          return res;
        }, {}) : {}
  };
}

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadInfoGraphQL(threadID, callback) {
    if(!callback) {
      throw {error: "getThreadInfoGraphQL: need callback"};
    }

    // `queries` has to be a string. I couldn't tell from the dev console. This
    // took me a really long time to figure out. I deserve a cookie for this.
    var form = {
      "queries": JSON.stringify({
        "o0":{
          // This doc_id is valid as of February 1st, 2018.
          "doc_id":"1498317363570230",
          "query_params":{
            "id": threadID,
            "message_limit": 0,
            "load_messages": 0,
            "load_read_receipts": false,
            "before": null,
          }
        }
      })
    };

    defaultFuncs
      .post("https://www.facebook.com/api/graphqlbatch/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        // This returns us an array of things. The last one is the success / 
        // failure one.
        // @TODO What do we do in this case?
        if (resData[resData.length - 1].error_results !== 0) {
          throw new Error("well darn there was an error_result")
        }

        callback(null, formatThreadGraphQLResponse(resData[0]));
      })
      .catch(function(err) {
        log.error("getThreadInfoGraphQL", err);
        return callback(err);
      });
  };
};
