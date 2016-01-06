"use strict";

var bluebird = require("bluebird");
var request = bluebird.promisify(require("request").defaults({jar: true}));
var stream = require('stream');

function getHeaders(url) {
  var headers = {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Referer' : 'https://www.facebook.com/',
    'Host' : url.replace('https://', '').split("/")[0],
    'Origin' : 'https://www.facebook.com',
    'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18',
    'Connection' : 'keep-alive',
  };

  return headers;
}

function isReadableStream(obj) {
  return obj instanceof stream.Stream &&
    getType(obj._read) === 'Function' &&
    getType(obj._readableState) === 'Object';
}

function get(url, jar, qs) {
  // I'm still confused about this
  if(getType(qs) === "Object") {
    for(var prop in qs) {
      if(qs.hasOwnProperty(prop) && getType(qs[prop]) === "Object") {
        qs[prop] = JSON.stringify(qs[prop]);
      }
    }
  }
  var op = {
    headers: getHeaders(url),
    timeout: 60000,
    qs: qs,
    url: url,
    method: "GET",
    jar: jar,
    gzip: true
  };

  return request(op).then(function(res) {return res[0];});
}

function post(url, jar, form) {
  var op = {
    headers: getHeaders(url),
    timeout: 60000,
    url: url,
    method: "POST",
    form: form,
    jar: jar,
    gzip: true
  };

  return request(op).then(function(res) {return res[0];});
}

function postFormData(url, jar, form, qs) {
  var headers = getHeaders(url);
  headers['Content-Type'] = 'multipart/form-data';

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

  return request(op).then(function(res) {return res[0];});
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
  return ("<" + k + ":" + l + "-" + m + "@mail.projektitan.com>");
}

function binaryToDecimal(data) {
  var ret = "";
  while (data !== "0") {
    var end = 0;
    var fullName = "";
    var i = 0;
    for (;i < data.length;i++) {
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
    var _guid = (c == "x" ? r : r & 7 | 8).toString(16);
    return _guid;
  });
  return id;
}

function _formatAttachment(attachment1, attachment2) {
  switch (attachment1.attach_type) {
    case "sticker":
      return {
        type: "sticker",
        url: attachment1.url,
        stickerID: attachment1.metadata.stickerID.toString(),
        packID: attachment1.metadata.packID.toString(),
        frameCount: attachment1.metadata.frameCount,
        frameRate: attachment1.metadata.frameRate,
        framesPerRow: attachment1.metadata.framesPerRow,
        framesPerCol: attachment1.metadata.framesPerCol,
        spriteURI: attachment1.metadata.spriteURI,
        spriteURI2x: attachment1.metadata.spriteURI2x,
        height: attachment1.metadata.height,
        width: attachment1.metadata.width,
        caption: attachment2.caption,
        description: attachment2.description,
      };
    case "file":
      return {
        type: "file",
        name: attachment1.name,
        url: attachment1.url,
        ID: attachment2.id.toString(),
        fileSize: attachment2.file_size,
        isMalicious: attachment2.is_malicious,
        mimeType: attachment2.mime_type,
      };
    case "photo":
      return {
        type: "photo",
        name: attachment1.name, // Do we need this?
        hiresUrl: attachment1.hires_url,
        thumbnailUrl: attachment1.thumbnail_url,
        previewUrl: attachment1.preview_url,
        previewWidth: attachment1.preview_width,
        previewHeight: attachment1.preview_height,
        facebookUrl: attachment1.url, // wtf is this?
        ID: attachment2.id.toString(),
        filename: attachment2.filename,
        mimeType: attachment2.mime_type,
        url: attachment2.image_data.url,
        width:attachment2.image_data.width,
        height:attachment2.image_data.height,
      };
    case "animated_image":
      return {
        type: "animated_image",
        name: attachment1.name,
        facebookUrl: attachment1.url,
        previewUrl: attachment1.preview_url,
        previewWidth: attachment1.preview_width,
        previewHeight: attachment1.preview_height,
        thumbnailUrl: attachment1.thumbnail_url,
        ID: attachment2.id.toString(),
        filename: attachment2.filename,
        mimeType: attachment2.mime_type,
        width: attachment2.image_data.width,
        height: attachment2.image_data.height,
        url: attachment2.image_data.url,
        rawGifImage: attachment2.image_data.raw_gif_image,
        rawWebpImage: attachment2.image_data.raw_webp_image,
        animatedGifUrl: attachment2.image_data.animated_gif_url,
        animatedGifPreviewUrl: attachment2.image_data.animated_gif_preview_url,
        animatedWebpUrl: attachment2.image_data.animated_webp_url,
        animatedWebpPreviewUrl: attachment2.image_data.animated_webp_preview_url,
      };
    case "share":
      return {
        type: "share",
        description: attachment1.share.description,
        ID: attachment1.share.share_id.toString(),
        subattachments: attachment1.share.subattachments,
        animatedImageSize: attachment1.share.media.animated_image_size,
        width: attachment1.share.media.image_size.width,
        height: attachment1.share.media.image_size.height,
        image: attachment1.share.media.image,
        playable: attachment1.share.media.playable,
        duration: attachment1.share.media.duration,
        source: attachment1.share.source,
        title: attachment1.share.title,
        facebookUrl: attachment1.share.uri,
        url: attachment2.href,
      };
    case "video":
      return {
        type: "video",
        filename: attachment1.name,
        thumbnailUrl: attachment1.thumbnail_url,
        previewUrl: attachment1.preview_url,
        previewWidth: attachment1.preview_width,
        previewHeight: attachment1.preview_height,
        ID: attachment1.metadata.fbid.toString(),
        url: attachment1.url,
        width: attachment1.metadata.dimensions.width,
        height: attachment1.metadata.dimensions.height,
        duration: attachment1.metadata.duration,
      };
    default:
      throw new Error("unrecognized attach_file " + attachment1.attach_type);
  }
}

function formatAttachment(attachments, attachmentIds, attachmentMap, shareMap) {
  attachmentMap = shareMap || attachmentMap;
  return attachments ? attachments.map(function(val, i) {
    // TODO: THIS IS REALLY BAD
    if (!attachmentMap || !attachmentIds || !attachmentMap[attachmentIds[i]]){
      return _formatAttachment(val, {id:"", image_data: {}});
    }
    return _formatAttachment(val, attachmentMap[attachmentIds[i]]);
  }) : [];
}

function formatMessage(m) {
  var originalMessage = m.message ? m.message : m;
  var obj = {
    type: "message",
    senderName: originalMessage.sender_name,
    senderID: originalMessage.sender_fbid.toString(),
    participantNames: (originalMessage.group_thread_info ? originalMessage.group_thread_info.participant_names : [originalMessage.sender_name.split(' ')[0]]),
    participantIDs: (originalMessage.group_thread_info ? originalMessage.group_thread_info.participant_ids.map(function(v) {return v.toString();}) : [originalMessage.sender_fbid]),
    body: originalMessage.body,
    threadID: originalMessage.tid && originalMessage.tid.split(".")[0] === "id" ? originalMessage.tid.split('.')[1] : originalMessage.other_user_fbid,
    threadName: (originalMessage.group_thread_info ? originalMessage.group_thread_info.name : originalMessage.sender_name),
    location: originalMessage.coordinates ? originalMessage.coordinates : null,
    messageID: originalMessage.mid ? originalMessage.mid.toString() : originalMessage.message_id,
    attachments: formatAttachment(originalMessage.attachments, originalMessage.attachmentIds, originalMessage.attachment_map, originalMessage.share_map),
    timestamp: originalMessage.timestamp,
    timestampAbsolute: originalMessage.timestamp_absolute,
    timestampRelative: originalMessage.timestamp_relative,
    timestampDatetime: originalMessage.timestamp_datetime,
  };

  if(m.type === "pages_messaging") obj.pageID = m.realtime_viewer_fbid.toString();

  return obj;
}

function formatEvent(m) {
  return {
    type: "event",
    threadID: m.thread_fbid.toString(),
    logMessageType: m.log_message_type,
    logMessageData: m.log_message_data,
    logMessageBody: m.log_message_body,
    author: m.author.split(":")[1]
  };
}

function formatTyp(event) {
  return {
    isTyping: !!event.st,
    from: event.from.toString(),
    threadID: (event.to || event.thread_fbid || event.from).toString(),
    from_mobile: !!event.from_mobile,
    userID: (event.realtime_viewer_fbid || event.from).toString(),
    type: 'typ',
  };
}

function formatReadReceipt(event) {
  return {
    reader: event.reader.toString(),
    time: event.time,
    threadID: event.realtime_viewer_fbid.toString(),
    type: 'read_receipt',
  };
}

function getFrom(str, startToken, endToken) {
  var start = str.indexOf(startToken) + startToken.length;
  if(start < startToken.length) return "";

  var lastHalf = str.substring(start);
  var end = lastHalf.indexOf(endToken);
  return lastHalf.substring(0, end);
}

function makeParsable(html) {
  return html.replace(/for\s*\(\s*;\s*;\s*\)\s*;\s*/, "");
}

function arrToForm(form) {
  return arrayToObject(form, function(v) {return v.name;}, function(v) {return v.val;});
}

function arrayToObject(arr, getKey, getValue) {
  return arr.reduce(function(acc, val) {
    acc[getKey(val)] = getValue(val);
    return acc;
  }, {});
}

function getSignatureID(){
  return Math.floor(Math.random() * 2147483648).toString(16);
}

function genTimestampRelative() {
  var d = new Date();
  return d.getHours() + ":" + padZeros(d.getMinutes());
}

function makeDefaults(html, userID) {
  var reqCounter = 1;
  var fb_dtsg = getFrom(html, "name=\"fb_dtsg\" value=\"", "\"");
  var ttstamp = "";
  for (var i = 0; i < fb_dtsg.length; i++) {
    ttstamp += fb_dtsg.charCodeAt(i);
  }
  ttstamp += '2';

  function mergeWithDefaults(obj) {
    if (!obj) return {};

    var newObj = {
      __user: userID,
      __req: (reqCounter++).toString(36),
      __rev: getFrom(html, "revision\":",","),
      __a: 1,
      fb_dtsg: fb_dtsg,
      ttstamp: ttstamp,
    };

    if(!obj) return newObj;

    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        newObj[prop] = obj[prop];
      }
    }

    return newObj;
  }

  function postWithDefaults(url, jar, form) {
    return post(url, jar, mergeWithDefaults(form));
  }

  function getWithDefaults(url, jar, qs) {
    return get(url, jar, mergeWithDefaults(qs));
  }

  function postFormDataWithDefault(url, jar, form, qs) {
    return postFormData(url, jar, mergeWithDefaults(form), mergeWithDefaults(qs));
  }

  return {
    get: getWithDefaults,
    post: postWithDefaults,
    postFormData: postFormDataWithDefault,
  };
}

function parseAndCheckLogin(data) {
  return bluebird.try(function() {
    if (data.statusCode !== 200) throw new Error("parseAndCheckLogin got status code: " + data.statusCode + ". Bailing out of trying to parse response.");
    
    var res = null;
    try {
      res = JSON.parse(makeParsable(data.body));
    } catch(e) {
      throw {
        error: "JSON.parse error. Check the `detail` property on this error.",
        detail: e,
        res: data.body
      };
    }

    if (res.error && res.error === 1357001) {
      throw {error: "Not logged in."};
    }

    return res;
  });
}

function saveCookies(jar) {
  return function(res) {
    var cookies = res.headers['set-cookie'] || [];
    cookies.map(function (c) {
      jar.setCookie(c, "https://www.facebook.com");
    });
    return res;
  };
}

var NUM_TO_MONTH = [
  'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
];
var NUM_TO_DAY = [
  'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
];
function formatDate(date) {
  var d = date.getUTCDate(); d = d >= 10 ? d : '0'+d;
  var h = date.getUTCHours(); h = h >= 10 ? h : '0'+h;
  var m = date.getUTCMinutes(); m = m >= 10 ? m : '0'+m;
  var s = date.getUTCSeconds(); s = s >= 10 ? s : '0'+s;
  return NUM_TO_DAY[date.getUTCDay()] + ', ' +
    d+' '+ NUM_TO_MONTH[date.getUTCMonth()] +' '+ date.getUTCFullYear() +' '+
    h+':'+m+':'+s+' GMT';
}

function formatCookie(arr) {
  return arr[0]+"="+arr[1]+"; " + (arr[2] !== 0 ? "expires=" + formatDate(new Date(arr[2])) + "; " : "") + "path=" + arr[3] + ";";
}

function formatThread(data) {
  return {
    threadID: data.thread_fbid.toString(),
    participants: data.participants.map(function(v) { return v.replace('fbid:', ''); }),
    formerParticipants: data.former_participants,
    name: data.name,
    snippet: data.snippet,
    snippetHasAttachment: data.snippet_has_attachment,
    snippetAttachments: data.snippet_attachments,
    snippetSender: data.snippet_sender.replace('fbid:', ''),
    unreadCount: data.unread_count,
    messageCount: data.message_count,
    imageSrc: data.image_src,
    timestamp: data.timestamp,
    serverTimestamp: data.server_timestamp, // what is this?
    muteSettings: data.muteSettings,
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
    lastMessageID: data.last_message_id
  };
}


function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function formatPresence(presence, userID) {
  return {
    type: "presence",
    timestamp: presence.la * 1000,
    userID: userID,
    statuses: presence.p
  };
}

module.exports = {
  isReadableStream: isReadableStream,
  get: get,
  post: post,
  postFormData: postFormData,
  generateThreadingID: generateThreadingID,
  generateOfflineThreadingID: generateOfflineThreadingID,
  getGUID: getGUID,
  getFrom: getFrom,
  makeParsable: makeParsable,
  arrToForm: arrToForm,
  getSignatureID: getSignatureID,
  getJar: request.jar,
  genTimestampRelative: genTimestampRelative,
  makeDefaults: makeDefaults,
  parseAndCheckLogin: parseAndCheckLogin,
  saveCookies: saveCookies,
  getType: getType,
  formatMessage: formatMessage,
  formatEvent: formatEvent,
  formatPresence: formatPresence,
  formatTyp: formatTyp,
  formatCookie: formatCookie,
  formatThread: formatThread,
  formatReadReceipt: formatReadReceipt,
};
