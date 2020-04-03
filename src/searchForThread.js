"use strict";

var utils = require("../utils");
const log = require("npmlog");

function formatParticipantsList(data) {
  return data.map((p) => {
    p = p.node.messaging_actor;
    return {
      userID: utils.formatID(p.id.toString()), // do we need .toString()? when it is not a string?
      name: p.name,
      isMessengerOnly: p.is_messenger_only, // true/false
      isMemoralized: p.is_memorialized, // true/false
      isViewerCoworker: p.is_viewer_coworker, // true/false
      isMessengerUser: p.is_messenger_user, // true/false
    };
  });
}

function formatThreadList(data) {
  return data.map((elem) => { // inspired by getThreadList.js content
    var p = elem.node;
    switch (p["__typename"]) {
      case "User":
        return {
          display_name: elem.display_name, // discovered this, don't seems to be usefull...
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()), // do we need .toString()? when it is not a string?
          name: p.name,
          url: p.url, // how about making it profileURL
          profilePicture: p.profile_picture.uri,
          username: (p.username || null),

          // TODO: maybe better names for these?
          isMemoralised: p.is_memorialized, // true/false : purpose ?
          isViewerFriend: p.is_viewer_friend, // true/false
          isViewerCoworker: p.is_viewer_coworker, // true/false
          isMessengerUser: p.is_messenger_user, // true/false
          isVerified: p.is_verified, // true/false
          viewerAffinity: p.viewer_affinity,

          // Not present during test :
          // isMessageBlockedByViewer: p.is_message_blocked_by_viewer, // true/false
          // isEmployee: p.is_employee // null? when it is something other? can someone check?

        };

      case "Page":
        return {
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()), // or maybe... pageID?
          name: p.name,
          url: p.url,
          profilePicture: p.profile_picture.uri,
          categoryType: p.category_type,

          // uhm... better names maybe?
          isMessengerUser: p.is_messenger_user, // true/false
          isVerified: p.is_verified, // true/false
          CanViewerAddToGroupChat: p.can_viewer_add_to_group_chat,

          // Not present during test :
          // acceptsMessengerUserFeedback: p.accepts_messenger_user_feedback, // true/false
          // isMessageBlockedByViewer: p.is_message_blocked_by_viewer, // true/false
          // isMessengerPlatformBot: p.is_messenger_platform_bot, // true/false

        };
      case "MessengerViewerGroupThread":
        return {
          display_name: elem.display_name, // discovered this, don't seems to be usefull...
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()), // do we need .toString()? when it is not a string? ... group ID ?
          name: p.threadName,
          image: p.image,
          participants: formatParticipantsList(p.all_participants.edges),
          count: p.all_participants.count

        };

      default:
        log.warn("getThreadList", "Found threads with unsuported typename. Please open an issue at https://github.com/Schmavery/facebook-chat-api/issues\n" + JSON.stringify(p, null, 2));
        return {
          accountType: p["__typename"],
          userID: utils.formatID(p.id.toString()),
          name: p.name || `[unknown ${p["__typename"]}]`, // probably it will always be something... but fallback to [unknown], just in case
        };
    }
  });

  return data;
}

module.exports = function (defaultFuncs, api, ctx) {
  return function searchForThread(name, callback) {
    if (!callback) {
      throw { error: "searchForThread: need callback" };
    }

    var form = {
      "queries": JSON.stringify({
        "o0":
        {
          "doc_id": "2268911786543136",
          "query_params": {
            "query": name,
            "num_users": 10,
            "num_groups": 8,
            "num_pages": 5
          }
        }
      })
    };

    defaultFuncs
      .post("https://www.facebook.com/api/graphqlbatch/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function (resData) {

        if (resData[resData.length - 1].error_results > 0) {
          throw resData[0].o0.errors;
        }

        if (resData[resData.length - 1].successful_results === 0) {
          throw { error: "searchForThread: there was no successful_results", res: resData };
        } 
        
        console.log(resData[0].o0.data.messenger_search.result_modules.nodes[0].search_results.edges); // for debugging purposes TODO : remove it

        return callback(null, formatThreadList(resData[0].o0.data.messenger_search.result_modules.nodes[0].search_results.edges)); // well I don't actually know if there could be more nodes, in my tests, only the first one contained useful info 
      })
      .catch((err) => {
        log.error("searchForThread", err);
        return callback(err);
      });
  };
};
