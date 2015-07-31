/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

function formatData(data) {
  return {
    threadID: data.thread_id,
    threadFbid: data.thread_fbid,
    participants: data.participants,
    formerParticipants: data.former_participants,
    name: data.name,
    snippet: data.snippet,
    snippetHasAttachment: data.snippet_has_attachment,
    snippetAttachments: data.snippet_attachments,
    snippetSender: data.snippet_sender,
    unreadCount: data.unread_count,
    messageCount: data.message_count,
    imageSrc: data.image_src,
    timestamp: data.timestamp,
    serverTimestamp: data.server_timestamp, // what is this?
    muteSettings: [],
    isCanonicalUser: data.is_canonical_user,
    isCanonical: data.is_canonical,
    canonicalFbid: data.canonical_fbid,
    isSubscribed: data.is_subscribed,
    rootMessageThreadingID: data.root_message_threading_id,
    folder: data.folder,
    isArchived: data.is_archived,
    recipientsLoadable: data.recipients_loadable,
    hasEmailParticipant: data.has_email_participant,
    readOnly: data.read_only,
    canReply: data.can_reply,
    composerEnabled: data.composer_enabled,
    blockedParticipants: data.blocked_participants,
    lastMessageID: data.last_message_id }
}

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getThreadList(start, end, callback) {
    if(!callback) return log.error("getThreadList: need callback");

    if (end <= start) end = start + 20;

    var form = mergeWithDefaults({
      'client' : 'mercury',
      'inbox[offset]' : start,
      'inbox[limit]' : end - start,
    });

    if(ctx.globalOptions.pageId) form.request_user_id = ctx.globalOptions.pageId;

    utils.post("https://www.facebook.com/ajax/mercury/threadlist_info.php", ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error) return callback(resData);

      return callback(null, resData.payload.threads.map(formatData));
    })
    .catch(function(err) {
      log.error("Error in getThreadList", err);
      return callback(err);
    });
  };
};