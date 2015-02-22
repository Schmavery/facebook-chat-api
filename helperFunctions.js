function h(i, j) {
  var k = arguments.length;
  if (k === 1) {
    j = i;
    i = 0;
  }
  var l = this.random || Math.random;
  return Math.floor(i + l() * (j - i));
}

var generateMessageID = function(j, clientID) {
  var k = j || Date.now(),
    l = h(0, 4294967295),
    m = clientID;
  return ("<" + k + ":" + l + "-" + m + "@mail.projektitan.com>");
};
var generateThreadID = function(j) {
  return 'root:' + generateMessageID(j);
};


var g = {
  isValid: function(h) {
    if (!h || typeof h !== 'string') return false;
    return (/^\w{3,12}:/.test(h));
  },
  isValidThreadID: function(h) {
    if (!g.isValid(h)) return false;
    var i = g.tokenize(h);
    switch (i.type) {
      case 'user':
      case 'group':
      case 'thread':
      case 'root':
      case 'pending':
        return true;
      default:
        return false;
    }
  },
  tokenize: function(h) {
    if (!this.isValid(h)) throw ("bad_id_format " + h);
    var i = h.indexOf(':');
    return {
      type: h.substr(0, i),
      value: h.substr(i + 1)
    };
  },
  getUserIDFromParticipantID: function(h) {
    if (!this.isValid(h)) throw ("bad_id_format " + h);
    var i = g.tokenize(h),
      j = i.type,
      k = i.value;
    if (j != 'fbid') return null;
    return k;
  },
  getParticipantIDFromUserID: function(h) {
    if (isNaN(h)) throw ("Not a user ID: " + h);
    return 'fbid:' + h;
  },
  getUserIDFromThreadID: function(h) {
    if (!this.isCanonical(h)) return null;
    return this.tokenize(h).value;
  },
  getThreadIDFromUserID: function(h) {
    return 'user:' + h;
  },
  getThreadIDFromParticipantID: function(h) {
    var i = this.getUserIDFromParticipantID(h);
    return i ? this.getThreadIDFromUserID(i) : null;
  },
  isCanonical: function(h) {
    return this.isValid(h) && this.tokenize(h).type === 'user';
  },
  isMultichat: function(h) {
    return this.isValid(h) && this.tokenize(h).type !== 'user';
  }
};

function normalizeNewMessage(v, userID, clientID) {
  // if (v.status === undefined) v.status = g.UNSENT;
  v.timestamp_absolute = "Today";
  v.message_id = v.message_id || generateMessageID(v.timestamp, clientID);
  var w = g.getParticipantIDFromUserID(userID);
  v.author = w;
  v.specific_to_list = v.specific_to_list || [];
  if (v.specific_to_list.length && v.specific_to_list.indexOf(w) === -1) v.specific_to_list.push(w);
  if (!v.thread_id) {
    if (v.specific_to_list.length == 1) {
      v.thread_id = 'user:' + userID;
    } else if (v.specific_to_list.length == 2) {
      var x = v.specific_to_list[0] == w ? v.specific_to_list[1] : v.specific_to_list[0];
      v.thread_id = g.getThreadIDFromParticipantID(x);
    }
    v.thread_id = v.thread_id || 'root:' + v.message_id;
  }
  if (!v.specific_to_list.length) {
    var y = g.tokenize(v.thread_id),
      z = y.type,
      aa = y.value;
    if (z == 'user') v.specific_to_list = ['fbid:' + aa, w];
  }
  // if (!v[p.MANUAL_RETRY_CNT]) v[p.MANUAL_RETRY_CNT] = 0;
}

module.exports = {
  generateMessageID: generateMessageID,
  normalizeNewMessage: normalizeNewMessage
};