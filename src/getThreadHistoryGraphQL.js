"use strict";

var utils = require("../utils");
var log = require("npmlog");

function formatAttachmentsGraphQLResponse(attachment) {
  switch (attachment.__typename) {
    case "MessageImage":
      return {
        // Deprecated fields
        facebookUrl: "", // ?? 
        hiresUrl: "", // ?
        mimeType: "", // ?
        name: "", // ?
        // You have to query for the real image. See below.
        url: "",
        width: 0,
        height: 0,
        
        // Both gifs and images have this type now. Just to be consistent with
        // FB, and there doesn't seem to be many drawbacks.
        type: "image",
        filename: attachment.filename,
        attachmentID: attachment.legacy_attachment_id,
        previewHeight: attachment.preview.height, 
        previewUrl: attachment.preview.uri, 
        previewWidth: attachment.preview.width, 
        thumbnailUrl: attachment.thumbnail.uri, 
        
        // New
        attributionApp: attachment.attribution_app ? {
          attributionAppID: attachment.attribution_app.id,
          name: attachment.attribution_app.name,
          logo: attachment.attribution_app.square_logo,
        } : null,
        
        extension: attachment.original_extension,
        
        // @TODO No idea what this is, should we expose it?
        //      Ben - July 15th 2017
        // renderAsSticker: attachment.render_as_sticker, 
        
        // This is _not_ the real URI, this is still just a large preview.
        // To get the URL we'll need to support a POST query to
        // 
        //    https://www.facebook.com/webgraphql/query/
        // 
        // With the following query params:
        // 
        //    query_id:728987990612546
        //    variables:{"id":"100009069356507","photoID":"10213724771692996"}
        //    dpr:1
        //    
        // No special form though.
        largePreviewUrl: attachment.large_preview.uri, 
        largePreviewHeight: attachment.large_preview.height,
        largePreviewWidth: attachment.large_preview.width,
      };
    case "MessageVideo":
      return {
        // Deprecated fields.
        duration: 0,
        previewHeight: "",
        previewUrl: "",
        previewWidth: "",
        
        type: "video",
        thumbnailUrl: attachment.large_image.uri,
        filename: attachment.filename,
        height: attachment.original_dimensions.y,
        width: attachment.original_dimensions.x,
        attachmentID: attachment.legacy_attachment_id,
        url: attachment.playable_url,
        
        // New
        duration: attachment.playable_duration_in_ms,
        thumbnailWidth: attachment.large_image.width,
        thumbnailHeight: attachment.large_image.height,
        // Not sure what this is.
        //    Ben - July 15th 2017
        videoType: attachment.video_type.toLowerCase(),
      };
      break;
    case "MessageFile":
      return {
        // Deprecated fields
        fileSize: 0,
        mimeType: "", // ?
        name: "",

        attachmentID: attachment.url_shimhash, // Should be good enough as an ID
        isMalicious: attachment.is_malicious,
        type: "file",
        url: attachment.url,
        
        // New
        contentType: attachment.content_type,
        filename: attachment.filename,
      }
    case "MessageAudio":
      return {
        attachmentID: attachment.url_shimhash, // Copied from above

        type: "audio",
        audioType: attachment.audio_type,
        duration: attachment.playable_duration_in_ms,
        url: attachment.playable_url,

        isVoiceMail: attachment.is_voicemail,
        filename: attachment.filename,
      }  
    default:
      return {error: "Don't know about attachment type " + attachment.__typename};
  }
}

function formatExtensibleAttachment(attachment) {
  if (attachment.story_attachment) {
    return {
      // Deprecated fields
      animatedImageSize: "",
      duration:"",
      facebookUrl:"",
      height:"",
      width: "",
      image:"",
      playable:"",
      styleList:"",
      target:"",

      type: "share",
      description: attachment.story_attachment.description && attachment.story_attachment.description.text,
      attachmentID: attachment.legacy_attachment_id,
      title: attachment.story_attachment.title_with_entities.text,
      subattachments: attachment.story_attachment.subattachments,
      url: attachment.story_attachment.url,
      source: (attachment.story_attachment.source != null ? attachment.story_attachment.source.text : ""),
      playable: (attachment.story_attachment.media != null ? attachment.story_attachment.media.is_playable : ""),
      
      // New
      thumbnailUrl: (attachment.story_attachment.media != null ? (attachment.story_attachment.media.animated_image || attachment.story_attachment.media.image).uri : ""),
      thumbnailWidth: (attachment.story_attachment.media != null ? (attachment.story_attachment.media.animated_image || attachment.story_attachment.media.image).width : ""),
      thumbnailHeight: (attachment.story_attachment.media != null ? (attachment.story_attachment.media.animated_image || attachment.story_attachment.media.image).height : ""),
      duration: (attachment.story_attachment.media != null ? attachment.story_attachment.media.playable_duration_in_ms : ""),
      playableUrl: (attachment.story_attachment.media != null ? attachment.story_attachment.media.playable_url : ""),
      
      // Format example:
      // 
      //   [{
      //     key: "width", 
      //     value: { text: "1280" }
      //   }]
      // 
      // That we turn into:
      //   
      //   {
      //     width: "1280"
      //   }
      // 
      properties: attachment.story_attachment.properties.reduce(function(obj, cur) {
        obj[cur.key] = cur.value.text;
        return obj;
      }, {}),
    };
  } else {
    return {error: "Don't know what to do with extensible_attachment."};
  }
}

function formatReactionsGraphQL(reaction) {
  return {
    reaction: reaction.reaction,
    userID: reaction.user.id,
  }
}

function formatEventData(event) {
  switch (event.__typename) {
    case "ThemeColorExtensibleMessageAdminText":
      return {
        color: event.theme_color,
      };
    case "ThreadNicknameExtensibleMessageAdminText":
      return {
        nickname: event.nickname,
        participantID: event.participant_id,
      }
    case "ThreadIconExtensibleMessageAdminText":
      return {
        threadIcon: event.thread_icon,
      }
    default:
      return {error: "Don't know what to with event data type " + event.__typename}
  }
}

function formatMessagesGraphQLResponse(data) {
  var messageThread = data.o0.data.message_thread;
  var threadID = messageThread.thread_key.thread_fbid ? messageThread.thread_key.thread_fbid : messageThread.thread_key.other_user_id;

  // Can be either "GROUP" or ONE_TO_ONE.
  var messages = messageThread.messages.nodes.map(function(d) {
    switch (d.__typename) {
      case "UserMessage":
        // Give priority to stickers. They're seen as normal messages but we've
        // been considering them as attachments.
        var maybeStickerAttachment;
        if (d.sticker) {
          maybeStickerAttachment = [{
            caption: d.snippet, // Not sure what the heck caption was.
            description: d.sticker.label, // Not sure about this one either.
            frameCount: d.sticker.frame_count,
            frameRate: d.sticker.frame_rate,
            framesPerCol: d.sticker.frames_per_col,
            framesPerRow: d.sticker.frames_per_row,
            packID: d.sticker.pack.id,
            spriteURI2x: d.sticker.sprite_image_2x,
            spriteURI: d.sticker.sprite_image,
            stickerID: d.sticker.id,
            url: d.sticker.url, // Oh yeah thanks, sometimes it's URI sometimes it's URL.
            height: d.sticker.height,
            width: d.sticker.width,
            type: "sticker",
          }];
        }

        return {
          type: "message",
          attachments: maybeStickerAttachment ? maybeStickerAttachment :
            (d.blob_attachments && d.blob_attachments.length > 0) ? d.blob_attachments.map(formatAttachmentsGraphQLResponse) :
              (d.extensible_attachment) ? formatExtensibleAttachment(d.extensible_attachment) : 
                [],
          body: d.message.text,
          // Can be either "GROUP" or ONE_TO_ONE.
          threadType: messageThread.thread_type,
          messageID: d.message_id,
          senderID: d.message_sender.id,
          threadID: threadID,
          
          // New
          messageReactions: d.message_reactions ? d.message_reactions.map(formatReactionsGraphQL) : null,
          isSponsered: d.is_sponsored,
          snippet: d.snippet,
          timestamp: d.timestamp_precise,
        };
      case "ThreadNameMessage":
        return {
          type: "event",
          messageID: d.message_id,
          threadID: threadID,
          // Can be either "GROUP" or ONE_TO_ONE.
          threadType: messageThread.thread_type,
          senderID: d.message_sender.id,
          timestamp: d.timestamp_precise,
          eventType: "change_thread_name",
          snippet: d.snippet,
          eventData: {
            threadName: d.thread_name,
          },
        };
      case "ParticipantLeftMessage":
        return {
          type: "event",
          messageID: d.message_id,
          threadID: threadID,
          // Can be either "GROUP" or ONE_TO_ONE.
          threadType: messageThread.thread_type,
          senderID: d.message_sender.id,
          timestamp: d.timestamp_precise,
          eventType: "remove_participants",
          snippet: d.snippet,
          eventData: {
            // Array of IDs.
            participantsRemoved: d.participants_removed.map(function(p) { return p.id; }),
          },
        };
      case "ParticipantsAddedMessage":
        return {
          type: "event",
          messageID: d.message_id,
          threadID: threadID,
          // Can be either "GROUP" or ONE_TO_ONE.
          threadType: messageThread.thread_type,
          senderID: d.message_sender.id,
          timestamp: d.timestamp_precise,
          eventType: "add_participants",
          snippet: d.snippet,
          eventData: {
            // Array of IDs.
            participantsAdded: d.participants_added.map(function(p) { return p.id; }),
          },
        };
      case "GenericAdminTextMessage":
        return {
          type: "event",
          messageID: d.message_id,
          threadID: threadID,
          // Can be either "GROUP" or ONE_TO_ONE.
          threadType: messageThread.thread_type,
          senderID: d.message_sender.id,
          timestamp: d.timestamp_precise,
          snippet: d.snippet,
          eventType: d.extensible_message_admin_text_type.toLowerCase(),
          eventData: formatEventData(d.extensible_message_admin_text),
        };
      default:
        return {error: "Don't know about message type " + d.__typename};
    }
  });
  return messages;
}

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadHistoryGraphQL(threadID, amount, timestamp, callback) {
    if(!callback) {
      throw {error: "getThreadHistoryGraphQL: need callback"};
    }

    // `queries` has to be a string. I couldn't tell from the dev console. This
    // took me a really long time to figure out. I deserve a cookie for this.
    var form = {
      "queries": JSON.stringify({
        "o0":{
          // This doc_id was valid on February 2nd 2017.
          "doc_id":"1498317363570230",
          "query_params":{
            "id": threadID,
            "message_limit": amount,
            "load_messages": 1,
            "load_read_receipts": false,
            "before": timestamp
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

        callback(null, formatMessagesGraphQLResponse(resData[0]));
      })
      .catch(function(err) {
        log.error("getThreadHistoryGraphQL", err);
        return callback(err);
      });
  };
};
