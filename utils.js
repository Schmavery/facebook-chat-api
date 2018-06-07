"use strict";

var bluebird = require("bluebird");
var request = bluebird.promisify(require("request").defaults({ jar: true }));
var stream = require("stream");
var log = require("npmlog");

function getHeaders(url, options) {
  var headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Referer: "https://www.facebook.com/",
    Host: url.replace("https://", "").split("/")[0],
    Origin: "https://www.facebook.com",
    "User-Agent": options.userAgent,
    Connection: "keep-alive"
  };

  return headers;
}

function isReadableStream(obj) {
  return (
    obj instanceof stream.Stream &&
    (getType(obj._read) === "Function" ||
      getType(obj._read) === "AsyncFunction") &&
    getType(obj._readableState) === "Object"
  );
}

function get(url, jar, qs, options) {
  // I'm still confused about this
  if (getType(qs) === "Object") {
    for (var prop in qs) {
      if (qs.hasOwnProperty(prop) && getType(qs[prop]) === "Object") {
        qs[prop] = JSON.stringify(qs[prop]);
      }
    }
  }
  var op = {
    headers: getHeaders(url, options),
    timeout: 60000,
    qs: qs,
    url: url,
    method: "GET",
    jar: jar,
    gzip: true
  };

  return request(op).then(function(res) {
    return res[0];
  });
}

function post(url, jar, form, options) {
  var op = {
    headers: getHeaders(url, options),
    timeout: 60000,
    url: url,
    method: "POST",
    form: form,
    jar: jar,
    gzip: true
  };

  return request(op).then(function(res) {
    return res[0];
  });
}

function postFormData(url, jar, form, qs, options) {
  var headers = getHeaders(url, options);
  headers["Content-Type"] = "multipart/form-data";
  var op = {
    headers: headers,
    timeout: 60000,
    url: url,
    method: "POST",
    formData: form,
    qs: qs,
    jar: jar,
    gzip: true
  };

  return request(op).then(function(res) {
    return res[0];
  });
}

function padZeros(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) val = "0" + val;
  return val;
}

function generateThreadingID(clientID) {
  var k = Date.now();
  var l = Math.floor(Math.random() * 4294967295);
  var m = clientID;
  return "<" + k + ":" + l + "-" + m + "@mail.projektitan.com>";
}

function binaryToDecimal(data) {
  var ret = "";
  while (data !== "0") {
    var end = 0;
    var fullName = "";
    var i = 0;
    for (; i < data.length; i++) {
      end = 2 * end + parseInt(data[i], 10);
      if (end >= 10) {
        fullName += "1";
        end -= 10;
      } else {
        fullName += "0";
      }
    }
    ret = end.toString() + ret;
    data = fullName.slice(fullName.indexOf("1"));
  }
  return ret;
}

function generateOfflineThreadingID() {
  var ret = Date.now();
  var value = Math.floor(Math.random() * 4294967295);
  var str = ("0000000000000000000000" + value.toString(2)).slice(-22);
  var msgs = ret.toString(2) + str;
  return binaryToDecimal(msgs);
}

var h;
var i = {};
var j = {
  _: "%",
  A: "%2",
  B: "000",
  C: "%7d",
  D: "%7b%22",
  E: "%2c%22",
  F: "%22%3a",
  G: "%2c%22ut%22%3a1",
  H: "%2c%22bls%22%3a",
  I: "%2c%22n%22%3a%22%",
  J: "%22%3a%7b%22i%22%3a0%7d",
  K: "%2c%22pt%22%3a0%2c%22vis%22%3a",
  L: "%2c%22ch%22%3a%7b%22h%22%3a%22",
  M: "%7b%22v%22%3a2%2c%22time%22%3a1",
  N: ".channel%22%2c%22sub%22%3a%5b",
  O: "%2c%22sb%22%3a1%2c%22t%22%3a%5b",
  P: "%2c%22ud%22%3a100%2c%22lc%22%3a0",
  Q: "%5d%2c%22f%22%3anull%2c%22uct%22%3a",
  R: ".channel%22%2c%22sub%22%3a%5b1%5d",
  S: "%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a",
  T: "%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a",
  U: "%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",
  V: "%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a",
  W: "%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a",
  X: "%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1",
  Y:
    "%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",
  Z:
    "%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a"
};
(function() {
  var l = [];
  for (var m in j) {
    i[j[m]] = m;
    l.push(j[m]);
  }
  l.reverse();
  h = new RegExp(l.join("|"), "g");
})();

function presenceEncode(str) {
  return encodeURIComponent(str)
    .replace(/([_A-Z])|%../g, function(m, n) {
      return n ? "%" + n.charCodeAt(0).toString(16) : m;
    })
    .toLowerCase()
    .replace(h, function(m) {
      return i[m];
    });
}

function presenceDecode(str) {
  return decodeURIComponent(
    str.replace(/[_A-Z]/g, function(m) {
      return j[m];
    })
  );
}

function generatePresence(userID) {
  var time = Date.now();
  return (
    "E" +
    presenceEncode(
      JSON.stringify({
        v: 3,
        time: parseInt(time / 1000, 10),
        user: userID,
        state: {
          ut: 0,
          t2: [],
          lm2: null,
          uct2: time,
          tr: null,
          tw: Math.floor(Math.random() * 4294967295) + 1,
          at: time
        },
        ch: {
          ["p_" + userID]: 0
        }
      })
    )
  );
}

function generateAccessiblityCookie() {
  var time = Date.now();
  return encodeURIComponent(
    JSON.stringify({
      sr: 0,
      "sr-ts": time,
      jk: 0,
      "jk-ts": time,
      kb: 0,
      "kb-ts": time,
      hcm: 0,
      "hcm-ts": time
    })
  );
}

function getGUID() {
  /** @type {number} */
  var sectionLength = Date.now();
  /** @type {string} */
  var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    /** @type {number} */
    var r = Math.floor((sectionLength + Math.random() * 16) % 16);
    /** @type {number} */
    sectionLength = Math.floor(sectionLength / 16);
    /** @type {string} */
    var _guid = (c == "x" ? r : (r & 7) | 8).toString(16);
    return _guid;
  });
  return id;
}

function _formatAttachment(attachment1, attachment2) {
  // TODO: THIS IS REALLY BAD
  // This is an attempt at fixing Facebook's inconsistencies. Sometimes they give us
  // two attachment objects, but sometimes only one. They each contain part of the
  // data that you'd want so we merge them for convenience.
  // Instead of having a bunch of if statements guarding every access to image_data,
  // we set it to empty object and use the fact that it'll return undefined.
  attachment2 = attachment2 || { id: "", image_data: {} };
  attachment1 = attachment1.mercury ? attachment1.mercury : attachment1;
  var blob = attachment1.blob_attachment;
  var type =
    blob && blob.__typename ? blob.__typename : attachment1.attach_type;
  if (!type && attachment1.sticker_attachment) {
    type = "StickerAttachment";
    blob = attachment1.sticker_attachment;
  } else if (!type && attachment1.extensible_attachment) {
    type = "ExtensibleAttachment";
    blob = attachment1.extensible_attachment;
  }
  // TODO: Determine whether "sticker", "photo", "file" etc are still used
  // KEEP IN SYNC WITH getThreadHistory
  switch (type) {
    case "sticker":
      return {
        type: "sticker",
        ID: attachment1.metadata.stickerID.toString(),
        url: attachment1.url,

        packID: attachment1.metadata.packID.toString(),
        spriteUrl: attachment1.metadata.spriteURI,
        spriteUrl2x: attachment1.metadata.spriteURI2x,
        width: attachment1.metadata.width,
        height: attachment1.metadata.height,

        caption: attachment2.caption,
        description: attachment2.description,

        frameCount: attachment1.metadata.frameCount,
        frameRate: attachment1.metadata.frameRate,
        framesPerRow: attachment1.metadata.framesPerRow,
        framesPerCol: attachment1.metadata.framesPerCol,

        stickerID: attachment1.metadata.stickerID.toString(), // @Legacy
        spriteURI: attachment1.metadata.spriteURI, // @Legacy
        spriteURI2x: attachment1.metadata.spriteURI2x // @Legacy
      };
    case "file":
      return {
        type: "file",
        filename: attachment1.name,
        ID: attachment2.id.toString(),
        url: attachment1.url,

        isMalicious: attachment2.is_malicious,
        contentType: attachment2.mime_type,

        name: attachment1.name, // @Legacy
        mimeType: attachment2.mime_type, // @Legacy
        fileSize: attachment2.file_size // @Legacy
      };
    case "photo":
      return {
        type: "photo",
        ID: attachment1.metadata.fbid.toString(),
        filename: attachment1.fileName,
        thumbnailUrl: attachment1.thumbnail_url,

        previewUrl: attachment1.preview_url,
        previewWidth: attachment1.preview_width,
        previewHeight: attachment1.preview_height,

        largePreviewUrl: attachment1.large_preview_url,
        largePreviewWidth: attachment1.large_preview_width,
        largePreviewHeight: attachment1.large_preview_height,

        url: attachment1.metadata.url, // @Legacy
        width: attachment1.metadata.dimensions.split(",")[0], // @Legacy
        height: attachment1.metadata.dimensions.split(",")[1], // @Legacy
        name: attachment1.fileName // @Legacy
      };
    case "animated_image":
      return {
        type: "animated_image",
        ID: attachment2.id.toString(),
        filename: attachment2.filename,

        previewUrl: attachment1.preview_url,
        previewWidth: attachment1.preview_width,
        previewHeight: attachment1.preview_height,

        url: attachment2.image_data.url,
        width: attachment2.image_data.width,
        height: attachment2.image_data.height,

        name: attachment1.name, // @Legacy
        facebookUrl: attachment1.url, // @Legacy
        thumbnailUrl: attachment1.thumbnail_url, // @Legacy
        mimeType: attachment2.mime_type, // @Legacy
        rawGifImage: attachment2.image_data.raw_gif_image, // @Legacy
        rawWebpImage: attachment2.image_data.raw_webp_image, // @Legacy
        animatedGifUrl: attachment2.image_data.animated_gif_url, // @Legacy
        animatedGifPreviewUrl: attachment2.image_data.animated_gif_preview_url, // @Legacy
        animatedWebpUrl: attachment2.image_data.animated_webp_url, // @Legacy
        animatedWebpPreviewUrl: attachment2.image_data.animated_webp_preview_url // @Legacy
      };
    case "share":
      return {
        type: "share",
        ID: attachment1.share.share_id.toString(),
        url: attachment2.href,

        title: attachment1.share.title,
        description: attachment1.share.description,
        source: attachment1.share.source,

        image: attachment1.share.media.image,
        width: attachment1.share.media.image_size.width,
        height: attachment1.share.media.image_size.height,
        playable: attachment1.share.media.playable,
        duration: attachment1.share.media.duration,

        subattachments: attachment1.share.subattachments,
        properties: {},

        animatedImageSize: attachment1.share.media.animated_image_size, // @Legacy
        facebookUrl: attachment1.share.uri, // @Legacy
        target: attachment1.share.target, // @Legacy
        styleList: attachment1.share.style_list // @Legacy
      };
    case "video":
      return {
        type: "video",
        ID: attachment1.metadata.fbid.toString(),
        filename: attachment1.name,

        previewUrl: attachment1.preview_url,
        previewWidth: attachment1.preview_width,
        previewHeight: attachment1.preview_height,

        url: attachment1.url,
        width: attachment1.metadata.dimensions.width,
        height: attachment1.metadata.dimensions.height,

        duration: attachment1.metadata.duration,
        videoType: "unknown",

        thumbnailUrl: attachment1.thumbnail_url // @Legacy
      };
    case "error":
      return {
        type: "error",

        // Save error attachments because we're unsure of their format,
        // and whether there are cases they contain something useful for debugging.
        attachment1: attachment1,
        attachment2: attachment2
      };
    case "MessageImage":
      return {
        type: "photo",
        ID: blob.legacy_attachment_id,
        filename: blob.filename,
        thumbnailUrl: blob.thumbnail.uri,

        previewUrl: blob.preview.uri,
        previewWidth: blob.preview.width,
        previewHeight: blob.preview.height,

        largePreviewUrl: blob.large_preview.uri,
        largePreviewWidth: blob.large_preview.width,
        largePreviewHeight: blob.large_preview.height,

        url: blob.large_preview.uri, // @Legacy
        width: blob.original_dimensions.x, // @Legacy
        height: blob.original_dimensions.y, // @Legacy
        name: blob.filename // @Legacy
      };
    case "MessageAnimatedImage":
      return {
        type: "animated_image",
        ID: blob.legacy_attachment_id,
        filename: blob.filename,

        previewUrl: blob.preview_image.uri,
        previewWidth: blob.preview_image.width,
        previewHeight: blob.preview_image.height,

        url: blob.animated_image.uri,
        width: blob.animated_image.width,
        height: blob.animated_image.height,

        thumbnailUrl: blob.preview_image.uri, // @Legacy
        name: blob.filename, // @Legacy
        facebookUrl: blob.animated_image.uri, // @Legacy
        rawGifImage: blob.animated_image.uri, // @Legacy
        animatedGifUrl: blob.animated_image.uri, // @Legacy
        animatedGifPreviewUrl: blob.preview_image.uri, // @Legacy
        animatedWebpUrl: blob.animated_image.uri, // @Legacy
        animatedWebpPreviewUrl: blob.preview_image.uri // @Legacy
      };
    case "MessageVideo":
      return {
        type: "video",
        filename: blob.filename,
        ID: blob.legacy_attachment_id,

        previewUrl: blob.large_image.uri,
        previewWidth: blob.large_image.width,
        previewHeight: blob.large_image.height,

        url: blob.playable_url,
        width: blob.original_dimensions.x,
        height: blob.original_dimensions.y,

        duration: blob.playable_duration_in_ms,
        videoType: blob.video_type.toLowerCase(),

        thumbnailUrl: blob.large_image.uri // @Legacy
      };
    case "MessageAudio":
      return {
        type: "audio",
        filename: blob.filename,
        ID: blob.url_shimhash,

        audioType: blob.audio_type,
        duration: blob.playable_duration_in_ms,
        url: blob.playable_url,

        isVoiceMail: blob.is_voicemail
      };
    case "StickerAttachment":
      return {
        type: "sticker",
        ID: blob.id,
        url: blob.url,

        packID: blob.pack.id,
        spriteUrl: blob.sprite_image,
        spriteUrl2x: blob.sprite_image_2x,
        width: blob.width,
        height: blob.height,

        caption: blob.label,
        description: blob.label,

        frameCount: blob.frame_count,
        frameRate: blob.frame_rate,
        framesPerRow: blob.frames_per_row,
        framesPerCol: blob.frames_per_column,

        stickerID: blob.id, // @Legacy
        spriteURI: blob.sprite_image, // @Legacy
        spriteURI2x: blob.sprite_image_2x // @Legacy
      };
    case "ExtensibleAttachment":
      return {
        type: "share",
        ID: blob.legacy_attachment_id,
        url: blob.story_attachment.url,

        title: blob.story_attachment.title_with_entities.text,
        description:
          blob.story_attachment.description &&
          blob.story_attachment.description.text,
        source: blob.story_attachment.source
          ? blob.story_attachment.source.text
          : null,

        image:
          blob.story_attachment.media &&
          blob.story_attachment.media.image &&
          blob.story_attachment.media.image.uri,
        width:
          blob.story_attachment.media &&
          blob.story_attachment.media.image &&
          blob.story_attachment.media.image.width,
        height:
          blob.story_attachment.media &&
          blob.story_attachment.media.image &&
          blob.story_attachment.media.image.height,
        playable:
          blob.story_attachment.media &&
          blob.story_attachment.media.is_playable,
        duration:
          blob.story_attachment.media &&
          blob.story_attachment.media.playable_duration_in_ms,
        playableUrl:
          blob.story_attachment.media == null
            ? null
            : blob.story_attachment.media.playable_url,

        subattachments: blob.story_attachment.subattachments,
        properties: blob.story_attachment.properties.reduce(function(obj, cur) {
          obj[cur.key] = cur.value.text;
          return obj;
        }, {}),

        facebookUrl: blob.story_attachment.url, // @Legacy
        target: blob.story_attachment.target, // @Legacy
        styleList: blob.story_attachment.style_list // @Legacy
      };
    case "MessageFile":
      return {
        type: "file",
        filename: blob.filename,
        ID: blob.message_file_fbid,

        url: blob.url,
        isMalicious: blob.is_malicious,
        contentType: blob.content_type,

        name: blob.filename,
        mimeType: "",
        fileSize: -1
      };
    default:
      throw new Error(
        "unrecognized attach_file of type " +
          type +
          "`" +
          JSON.stringify(attachment1, null, 4) +
          " attachment2: " +
          JSON.stringify(attachment2, null, 4) +
          "`"
      );
  }
}

function formatAttachment(attachments, attachmentIds, attachmentMap, shareMap) {
  attachmentMap = shareMap || attachmentMap;
  return attachments
    ? attachments.map(function(val, i) {
        if (
          !attachmentMap ||
          !attachmentIds ||
          !attachmentMap[attachmentIds[i]]
        ) {
          return _formatAttachment(val);
        }
        return _formatAttachment(val, attachmentMap[attachmentIds[i]]);
      })
    : [];
}

function formatDeltaMessage(m) {
  var md = m.delta.messageMetadata;

  var mdata =
    m.delta.data === undefined
      ? []
      : m.delta.data.prng === undefined
        ? []
        : JSON.parse(m.delta.data.prng);
  var m_id = mdata.map(u => u.i);
  var m_offset = mdata.map(u => u.o);
  var m_length = mdata.map(u => u.l);
  var mentions = {};
  for (var i = 0; i < m_id.length; i++) {
    mentions[m_id[i]] = m.delta.body.substring(
      m_offset[i],
      m_offset[i] + m_length[i]
    );
  }

  return {
    type: "message",
    senderID: formatID(md.actorFbId.toString()),
    body: m.delta.body || "",
    threadID: formatID(
      (md.threadKey.threadFbId || md.threadKey.otherUserFbId).toString()
    ),
    messageID: md.messageId,
    attachments: (m.delta.attachments || []).map(v => _formatAttachment(v)),
    mentions: mentions,
    timestamp: md.timestamp,
    isGroup: !!md.threadKey.threadFbId
  };
}

function formatID(id) {
  if (id != undefined && id != null) {
    return id.replace(/(fb)?id[:.]/, "");
  } else {
    return id;
  }
}

function formatMessage(m) {
  var originalMessage = m.message ? m.message : m;
  var obj = {
    type: "message",
    senderName: originalMessage.sender_name,
    senderID: formatID(originalMessage.sender_fbid.toString()),
    participantNames: originalMessage.group_thread_info
      ? originalMessage.group_thread_info.participant_names
      : [originalMessage.sender_name.split(" ")[0]],
    participantIDs: originalMessage.group_thread_info
      ? originalMessage.group_thread_info.participant_ids.map(function(v) {
          return formatID(v.toString());
        })
      : [formatID(originalMessage.sender_fbid)],
    body: originalMessage.body || "",
    threadID: formatID(
      (
        originalMessage.thread_fbid || originalMessage.other_user_fbid
      ).toString()
    ),
    threadName: originalMessage.group_thread_info
      ? originalMessage.group_thread_info.name
      : originalMessage.sender_name,
    location: originalMessage.coordinates ? originalMessage.coordinates : null,
    messageID: originalMessage.mid
      ? originalMessage.mid.toString()
      : originalMessage.message_id,
    attachments: formatAttachment(
      originalMessage.attachments,
      originalMessage.attachmentIds,
      originalMessage.attachment_map,
      originalMessage.share_map
    ),
    timestamp: originalMessage.timestamp,
    timestampAbsolute: originalMessage.timestamp_absolute,
    timestampRelative: originalMessage.timestamp_relative,
    timestampDatetime: originalMessage.timestamp_datetime,
    tags: originalMessage.tags,
    reactions: originalMessage.reactions ? originalMessage.reactions : [],
    isUnread: originalMessage.is_unread
  };

  if (m.type === "pages_messaging")
    obj.pageID = m.realtime_viewer_fbid.toString();
  obj.isGroup = obj.participantIDs.length > 2;

  return obj;
}

function formatEvent(m) {
  var originalMessage = m.message ? m.message : m;
  var logMessageType = originalMessage.log_message_type;
  var logMessageData;
  if (logMessageType === "log:generic-admin-text") {
    logMessageData = originalMessage.log_message_data.untypedData;
    logMessageType = getAdminTextMessageType(
      originalMessage.log_message_data.message_type
    );
  } else {
    logMessageData = originalMessage.log_message_data;
  }

  return Object.assign(formatMessage(originalMessage), {
    type: "event",
    logMessageType: logMessageType,
    logMessageData: logMessageData,
    logMessageBody: originalMessage.log_message_body
  });
}

function formatHistoryMessage(m) {
  switch (m.action_type) {
    case "ma-type:log-message":
      return formatEvent(m);
    default:
      return formatMessage(m);
  }
}

// Get a more readable message type for AdminTextMessages
function getAdminTextMessageType(type) {
  switch (type) {
    case "change_thread_theme":
      return "log:thread-color";
    case "change_thread_nickname":
      return "log:user-nickname";
    case "change_thread_icon":
      return "log:thread-icon";
    default:
      return type;
  }
}

function formatDeltaEvent(m) {
  var logMessageType;
  var logMessageData;

  // log:thread-color => {theme_color}
  // log:user-nickname => {participant_id, nickname}
  // log:thread-icon => {thread_icon}
  // log:thread-name => {name}
  // log:subscribe => {addedParticipants - [Array]}
  // log:unsubscribe => {leftParticipantFbId}

  switch (m.class) {
    case "AdminTextMessage":
      logMessageData = m.untypedData;
      logMessageType = getAdminTextMessageType(m.type);
      break;
    case "ThreadName":
      logMessageType = "log:thread-name";
      logMessageData = { name: m.name };
      break;
    case "ParticipantsAddedToGroupThread":
      logMessageType = "log:subscribe";
      logMessageData = { addedParticipants: m.addedParticipants };
      break;
    case "ParticipantLeftGroupThread":
      logMessageType = "log:unsubscribe";
      logMessageData = { leftParticipantFbId: m.leftParticipantFbId };
      break;
  }

  return {
    type: "event",
    threadID: formatID(
      (
        m.messageMetadata.threadKey.threadFbId ||
        m.messageMetadata.threadKey.otherUserFbId
      ).toString()
    ),
    logMessageType: logMessageType,
    logMessageData: logMessageData,
    logMessageBody: m.messageMetadata.adminText,
    author: m.messageMetadata.actorFbId
  };
}

function formatTyp(event) {
  return {
    isTyping: !!event.st,
    from: event.from.toString(),
    threadID: formatID(
      (event.to || event.thread_fbid || event.from).toString()
    ),
    // When receiving typ indication from mobile, `from_mobile` isn't set.
    // If it is, we just use that value.
    fromMobile: event.hasOwnProperty("from_mobile") ? event.from_mobile : true,
    userID: (event.realtime_viewer_fbid || event.from).toString(),
    type: "typ"
  };
}

function formatDeltaReadReceipt(delta) {
  // otherUserFbId seems to be used as both the readerID and the threadID in a 1-1 chat.
  // In a group chat actorFbId is used for the reader and threadFbId for the thread.
  return {
    reader: (delta.threadKey.otherUserFbId || delta.actorFbId).toString(),
    time: delta.actionTimestampMs,
    threadID: formatID(
      (delta.threadKey.otherUserFbId || delta.threadKey.threadFbId).toString()
    ),
    type: "read_receipt"
  };
}

function formatReadReceipt(event) {
  return {
    reader: event.reader.toString(),
    time: event.time,
    threadID: formatID((event.thread_fbid || event.reader).toString()),
    type: "read_receipt"
  };
}

function formatRead(event) {
  return {
    threadID: formatID(
      (
        (event.chat_ids && event.chat_ids[0]) ||
        (event.thread_fbids && event.thread_fbids[0])
      ).toString()
    ),
    time: event.timestamp,
    type: "read"
  };
}

function getFrom(str, startToken, endToken) {
  var start = str.indexOf(startToken) + startToken.length;
  if (start < startToken.length) return "";

  var lastHalf = str.substring(start);
  var end = lastHalf.indexOf(endToken);
  if (end === -1) {
    throw Error(
      "Could not find endTime `" + endToken + "` in the given string."
    );
  }
  return lastHalf.substring(0, end);
}

function makeParsable(html) {
  let withoutForLoop = html.replace(/for\s*\(\s*;\s*;\s*\)\s*;\s*/, "");

  // (What the fuck FB, why windows style newlines?)
  // So sometimes FB will send us base multiple objects in the same response.
  // They're all valid JSON, one after the other, at the top level. We detect
  // that and make it parse-able by JSON.parse.
  //       Ben - July 15th 2017
  //
  // It turns out that Facebook may insert random number of spaces before
  // next object begins (issue #616)
  //       rav_kr - 2018-03-19
  let maybeMultipleObjects = withoutForLoop.split(/\}\r\n *\{/);
  if (maybeMultipleObjects.length === 1) return maybeMultipleObjects;

  return "[" + maybeMultipleObjects.join("},{") + "]";
}

function arrToForm(form) {
  return arrayToObject(
    form,
    function(v) {
      return v.name;
    },
    function(v) {
      return v.val;
    }
  );
}

function arrayToObject(arr, getKey, getValue) {
  return arr.reduce(function(acc, val) {
    acc[getKey(val)] = getValue(val);
    return acc;
  }, {});
}

function getSignatureID() {
  return Math.floor(Math.random() * 2147483648).toString(16);
}

function generateTimestampRelative() {
  var d = new Date();
  return d.getHours() + ":" + padZeros(d.getMinutes());
}

function makeDefaults(html, userID, ctx) {
  var reqCounter = 1;
  var fb_dtsg = getFrom(html, 'name="fb_dtsg" value="', '"');

  // @Hack Ok we've done hacky things, this is definitely on top 5.
  // We totally assume the object is flat and try parsing until a }.
  // If it works though it's cool because we get a bunch of extra data things.
  //
  // Update: we don't need this. Leaving it in in case we ever do.
  //       Ben - July 15th 2017

  // var siteData = getFrom(html, "[\"SiteData\",[],", "},");
  // try {
  //   siteData = JSON.parse(siteData + "}");
  // } catch(e) {
  //   log.warn("makeDefaults", "Couldn't parse SiteData. Won't have access to some variables.");
  //   siteData = {};
  // }

  var ttstamp = "2";
  for (var i = 0; i < fb_dtsg.length; i++) {
    ttstamp += fb_dtsg.charCodeAt(i);
  }
  var revision = getFrom(html, 'revision":', ",");

  function mergeWithDefaults(obj) {
    // @TODO This is missing a key called __dyn.
    // After some investigation it seems like __dyn is some sort of set that FB
    // calls BitMap. It seems like certain responses have a "define" key in the
    // res.jsmods arrays. I think the code iterates over those and calls `set`
    // on the bitmap for each of those keys. Then it calls
    // bitmap.toCompressedString() which returns what __dyn is.
    //
    // So far the API has been working without this.
    //
    //              Ben - July 15th 2017
    var newObj = {
      __user: userID,
      __req: (reqCounter++).toString(36),
      __rev: revision,
      __a: 1,
      // __af: siteData.features,
      fb_dtsg: ctx.fb_dtsg ? ctx.fb_dtsg : fb_dtsg,
      jazoest: ctx.ttstamp ? ctx.ttstamp : ttstamp
      // __spin_r: siteData.__spin_r,
      // __spin_b: siteData.__spin_b,
      // __spin_t: siteData.__spin_t,
    };

    // @TODO this is probably not needed.
    //         Ben - July 15th 2017
    // if (siteData.be_key) {
    //   newObj[siteData.be_key] = siteData.be_mode;
    // }
    // if (siteData.pkg_cohort_key) {
    //   newObj[siteData.pkg_cohort_key] = siteData.pkg_cohort;
    // }

    if (!obj) return newObj;

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (!newObj[prop]) {
          newObj[prop] = obj[prop];
        }
      }
    }

    return newObj;
  }

  function postWithDefaults(url, jar, form) {
    return post(url, jar, mergeWithDefaults(form), ctx.globalOptions);
  }

  function getWithDefaults(url, jar, qs) {
    return get(url, jar, mergeWithDefaults(qs), ctx.globalOptions);
  }

  function postFormDataWithDefault(url, jar, form, qs) {
    return postFormData(
      url,
      jar,
      mergeWithDefaults(form),
      mergeWithDefaults(qs),
      ctx.globalOptions 
    );
  }

  return {
    get: getWithDefaults,
    post: postWithDefaults,
    postFormData: postFormDataWithDefault
  };
}

function parseAndCheckLogin(ctx, defaultFuncs, retryCount) {
  if (retryCount == undefined) {
    retryCount = 0;
  }
  return function(data) {
    return bluebird.try(function() {
      log.verbose("parseAndCheckLogin", data.body);
      if (data.statusCode >= 500 && data.statusCode < 600) {
        if (retryCount >= 5) {
          throw {
            error:
              "Request retry failed. Check the `res` and `statusCode` property on this error.",
            statusCode: data.statusCode,
            res: data.body
          };
        }
        retryCount++;
        var retryTime = Math.floor(Math.random() * 5000);
        log.warn(
          "parseAndCheckLogin",
          "Got status code " +
            data.statusCode +
            " - " +
            retryCount +
            ". attempt to retry in " +
            retryTime +
            " milliseconds..."
        );
        var url =
          data.request.uri.protocol +
          "//" +
          data.request.uri.hostname +
          data.request.uri.pathname;
        if (
          data.request.headers["Content-Type"].split(";")[0] ===
          "multipart/form-data"
        ) {
          return bluebird
            .delay(retryTime)
            .then(function() {
              return defaultFuncs.postFormData(
                url,
                ctx.jar,
                data.request.formData,
                {}
              );
            })
            .then(parseAndCheckLogin(ctx, defaultFuncs, retryCount));
        } else {
          return bluebird
            .delay(retryTime)
            .then(function() {
              return defaultFuncs.post(url, ctx.jar, data.request.formData);
            })
            .then(parseAndCheckLogin(ctx, defaultFuncs, retryCount));
        }
      }
      if (data.statusCode !== 200)
        throw new Error(
          "parseAndCheckLogin got status code: " +
            data.statusCode +
            ". Bailing out of trying to parse response."
        );

      var res = null;
      try {
        res = JSON.parse(makeParsable(data.body));
      } catch (e) {
        throw {
          error: "JSON.parse error. Check the `detail` property on this error.",
          detail: e,
          res: data.body
        };
      }

      // In some cases the response contains only a redirect URL which should be followed
      if (res.redirect && data.request.method === "GET") {
        return defaultFuncs
          .get(res.redirect, ctx.jar)
          .then(parseAndCheckLogin(ctx, defaultFuncs));
      }

      // TODO: handle multiple cookies?
      if (
        res.jsmods &&
        res.jsmods.require &&
        Array.isArray(res.jsmods.require[0]) &&
        res.jsmods.require[0][0] === "Cookie"
      ) {
        res.jsmods.require[0][3][0] = res.jsmods.require[0][3][0].replace(
          "_js_",
          ""
        );
        var cookie = formatCookie(res.jsmods.require[0][3], "facebook");
        var cookie2 = formatCookie(res.jsmods.require[0][3], "messenger");
        ctx.jar.setCookie(cookie, "https://www.facebook.com");
        ctx.jar.setCookie(cookie2, "https://www.messenger.com");
      }

      // On every request we check if we got a DTSG and we mutate the context so that we use the latest
      // one for the next requests.
      if (res.jsmods && Array.isArray(res.jsmods.require)) {
        var arr = res.jsmods.require;
        for (var i in arr) {
          if (arr[i][0] === "DTSG" && arr[i][1] === "setToken") {
            ctx.fb_dtsg = arr[i][3][0];

            // Update ttstamp since that depends on fb_dtsg
            ctx.ttstamp = "2";
            for (var j = 0; j < ctx.fb_dtsg.length; j++) {
              ctx.ttstamp += ctx.fb_dtsg.charCodeAt(j);
            }
          }
        }
      }

      if (res.error === 1357001) {
        throw { error: "Not logged in." };
      }
      return res;
    });
  };
}

function saveCookies(jar) {
  return function(res) {
    var cookies = res.headers["set-cookie"] || [];
    cookies.forEach(function(c) {
      if (c.indexOf(".facebook.com") > -1) {
        jar.setCookie(c, "https://www.facebook.com");
      }
      var c2 = c.replace(/domain=\.facebook\.com/, "domain=.messenger.com");
      jar.setCookie(c2, "https://www.messenger.com");
    });
    return res;
  };
}

var NUM_TO_MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var NUM_TO_DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function formatDate(date) {
  var d = date.getUTCDate();
  d = d >= 10 ? d : "0" + d;
  var h = date.getUTCHours();
  h = h >= 10 ? h : "0" + h;
  var m = date.getUTCMinutes();
  m = m >= 10 ? m : "0" + m;
  var s = date.getUTCSeconds();
  s = s >= 10 ? s : "0" + s;
  return (
    NUM_TO_DAY[date.getUTCDay()] +
    ", " +
    d +
    " " +
    NUM_TO_MONTH[date.getUTCMonth()] +
    " " +
    date.getUTCFullYear() +
    " " +
    h +
    ":" +
    m +
    ":" +
    s +
    " GMT"
  );
}

function formatCookie(arr, url) {
  return (
    arr[0] + "=" + arr[1] + "; Path=" + arr[3] + "; Domain=" + url + ".com"
  );
}

function formatThread(data) {
  return {
    threadID: formatID(data.thread_fbid.toString()),
    participants: data.participants.map(formatID),
    participantIDs: data.participants.map(formatID),
    name: data.name,
    nicknames: data.custom_nickname,
    snippet: data.snippet,
    snippetAttachments: data.snippet_attachments,
    snippetSender: formatID((data.snippet_sender || "").toString()),
    unreadCount: data.unread_count,
    messageCount: data.message_count,
    imageSrc: data.image_src,
    timestamp: data.timestamp,
    serverTimestamp: data.server_timestamp, // what is this?
    muteUntil: data.mute_until,
    isCanonicalUser: data.is_canonical_user,
    isCanonical: data.is_canonical,
    isSubscribed: data.is_subscribed,
    folder: data.folder,
    isArchived: data.is_archived,
    recipientsLoadable: data.recipients_loadable,
    hasEmailParticipant: data.has_email_participant,
    readOnly: data.read_only,
    canReply: data.can_reply,
    cannotReplyReason: data.cannot_reply_reason,
    lastMessageTimestamp: data.last_message_timestamp,
    lastReadTimestamp: data.last_read_timestamp,
    lastMessageType: data.last_message_type,
    emoji: data.custom_like_icon,
    color: data.custom_color,
    adminIDs: data.admin_ids,
    threadType: data.thread_type
  };
}

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function formatProxyPresence(presence, userID) {
  if (presence.lat === undefined || presence.p === undefined) return null;
  return {
    type: "presence",
    timestamp: presence.lat * 1000,
    userID: userID,
    statuses: presence.p
  };
}

function formatPresence(presence, userID) {
  return {
    type: "presence",
    timestamp: presence.la * 1000,
    userID: userID,
    statuses: presence.a
  };
}

function decodeClientPayload(payload) {
  /*
  Special function which Client using to "encode" clients JSON payload
  */
  return JSON.parse(String.fromCharCode.apply(null, payload));
}

function getAppState(jar) {
  return jar
    .getCookies("https://www.facebook.com")
    .concat(jar.getCookies("https://facebook.com"))
    .concat(jar.getCookies("https://www.messenger.com"));
}
module.exports = {
  isReadableStream,
  get,
  post,
  postFormData,
  generateThreadingID,
  generateOfflineThreadingID,
  getGUID,
  getFrom,
  makeParsable,
  arrToForm,
  getSignatureID,
  getJar: request.jar,
  generateTimestampRelative,
  makeDefaults,
  parseAndCheckLogin,
  saveCookies,
  getType,
  formatHistoryMessage,
  formatID,
  formatMessage,
  formatDeltaEvent,
  formatDeltaMessage,
  formatProxyPresence,
  formatPresence,
  formatTyp,
  formatDeltaReadReceipt,
  formatCookie,
  formatThread,
  formatReadReceipt,
  formatRead,
  generatePresence,
  generateAccessiblityCookie,
  formatDate,
  decodeClientPayload,
  getAppState,
  getAdminTextMessageType
};

