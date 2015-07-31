/*jslint node: true */
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
    typeof (obj._read === 'function') &&
    typeof (obj._readableState === 'object');
}

function get(url, jar, qs) {
  // I'm still confused about this
  if(typeof qs === "object") {
    for(var prop in qs) {
      if(qs.hasOwnProperty(prop) && typeof qs[prop] === "object") {
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

function formatMessage(m) {
  var originalMessage = m.message ? m.message : m;

  var obj = {
    type: "message",
    sender_name: originalMessage.sender_name,
    sender_id: originalMessage.sender_fbid,
    participant_names: (originalMessage.group_thread_info ? originalMessage.group_thread_info.participant_names : [originalMessage.sender_name.split(' ')[0]]),
    participant_ids: (originalMessage.group_thread_info ? originalMessage.group_thread_info.participant_ids : [originalMessage.sender_fbid]),
    body: originalMessage.body,
    thread_id: originalMessage.tid && originalMessage.tid.split(".")[0] === "id" ? originalMessage.tid.split('.')[1] : originalMessage.other_user_fbid,
    location: originalMessage.coordinates ? originalMessage.coordinates : null,
    message_id: originalMessage.mid
  };

  if (originalMessage.attachments){
    for (var i = 0; i < originalMessage.attachments.length; i++){
      if (originalMessage.attachments[i].attach_type === "sticker"){
        obj.type = "sticker";
        delete obj.body;
        obj.sticker_id = originalMessage.attachments[i].metadata.stickerID;
        obj.sticker_url = originalMessage.attachments[i].url;
        break;
      }
      if (originalMessage.attachments[i].attach_type === "file"){
        obj.type = "file";
        delete obj.body;
        obj.name = originalMessage.attachments[i].name;
        obj.file_url = originalMessage.attachments[i].url;
        break;
      }
      if (originalMessage.attachments[i].attach_type === "photo"){
        obj.type = "photo";
        delete obj.body;
        obj.name = originalMessage.attachments[i].name;
        obj.hires_url = originalMessage.attachments[i].hires_url;
        obj.thumbnail_url = originalMessage.attachments[i].thumbnail_url;
        obj.preview_url = originalMessage.attachments[i].preview_url;
        break;
      }
      if (originalMessage.attachments[i].attach_type === "animated_image"){
        obj.type = "animated_image";
        delete obj.body;
        obj.name = originalMessage.attachments[i].name;
        obj.url = originalMessage.attachments[i].url;
        obj.preview_url = originalMessage.attachments[i].preview_url;
        break;
      }
    }
  }

  if(m.type === "pages_messaging") obj.pageId = m.realtime_viewer_fbid;

  return obj;
}

function formatEvent(m) {
  return {
    type: "event",
    thread_id: m.thread_fbid,
    log_message_type: m.log_message_type,
    log_message_data: m.log_message_data,
    log_message_body: m.log_message_body,
    author: m.author.split(":")[1]
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

function makeMergeWithDefaults(html, userId) {
  var reqCounter = 1;
  var fb_dtsg = getFrom(html, "name=\"fb_dtsg\" value=\"", "\"");
  var ttstamp = "";
  for (var i = 0; i < fb_dtsg.length; i++) {
    ttstamp += fb_dtsg.charCodeAt(i);
  }
  ttstamp += '2';

  return function (obj) {
    var newObj = {
      __user: userId,
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
  };
}

function parseResponse(res) {
  return bluebird.try(function() {
    return JSON.parse(makeParsable(res.body));
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

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function formatPresence(presence, userId) {
  return {
    type: "presence",
    timestamp: presence.la * 1000,
    userId: userId,
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
  formatMessage: formatMessage,
  getFrom: getFrom,
  makeParsable: makeParsable,
  arrToForm: arrToForm,
  getSignatureID: getSignatureID,
  getJar: request.jar,
  genTimestampRelative: genTimestampRelative,
  makeMergeWithDefaults: makeMergeWithDefaults,
  formatEvent: formatEvent,
  parseResponse: parseResponse,
  saveCookies: saveCookies,
  formatCookie: formatCookie,
  getType: getType,
  formatPresence: formatPresence,
};
