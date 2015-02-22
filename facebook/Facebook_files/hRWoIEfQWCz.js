/*!CK:2712803207!*/
/*1424144211,*/
if (self.CavalryLogger) {
  CavalryLogger.start_js(["JYG2+"]);
}

__d("MercuryActionStatus", [], function(a, b, c, d, e, f) {
  e.exports = {
    UNSENT: 0,
    SUCCESS: 1,
    UNCONFIRMED: 3,
    FAILED_UNKNOWN_REASON: 4,
    UNABLE_TO_CONFIRM: 5,
    RESENT: 6,
    RESENDING: 7,
    ERROR: 10
  };
}, null);
__d("MercuryActionType", [], function(a, b, c, d, e, f) {
  e.exports = {
    LOG_MESSAGE: "ma-type:log-message",
    USER_GENERATED_MESSAGE: "ma-type:user-generated-message",
    CHANGE_READ_STATUS: "ma-type:change_read_status",
    MARK_THREAD_SEEN: "ma-type:mark_thread_seen",
    CHANGE_MUTE_SETTINGS: "ma-type:change-mute-settings",
    CLEAR_CHAT: "ma-type:clear_chat",
    SEND_MESSAGE: "ma-type:send-message",
    UPDATE_ACTION_ID: "ma-type:update-action-id",
    DELETE_MESSAGES: "ma-type:delete-messages",
    MARK_MESSAGES_SPAM: "ma-type:mark-messages-spam",
    DELETE_THREAD: "ma-type:delete-thread",
    CHANGE_ARCHIVED_STATUS: "ma-type:change-archived-status",
    CHANGE_FOLDER: "ma-type:change-folder",
    ADD_PARTICIPANTS: "ma-type:add-participants",
    CANCEL_ATTACHMENT_PLACEHOLDER: "ma-type:cancel-attachment-placeholder",
    CONFIRM_ATTACHMENT_PLACEHOLDER: "ma-type:confirm-attachment-placeholder",
    ADD_SHARE_DATA_TO_EXISTING_MESSAGE: "ma-type:add-share-data-to-existing-message",
    UNPIN_THREAD: "ma-type:unpin-thread"
  };
}, null);
__d("MercuryAPIArgsSource", [], function(a, b, c, d, e, f) {
  e.exports = {
    CHAT: "chat",
    JEWEL: "jewel",
    MERCURY: "mercury",
    WEBMESSENGER: "web_messenger"
  };
}, null);
__d("MercuryAttachmentContentType", [], function(a, b, c, d, e, f) {
  e.exports = {
    PHOTO: "attach:image",
    VIDEO: "attach:video",
    MUSIC: "attach:music",
    VOICE: "attach:voice",
    TEXT: "attach:text",
    MSWORD: "attach:ms:word",
    MSXLS: "attach:ms:xls",
    MSPPT: "attach:ms:ppt",
    ORION: "attach:orion",
    SHOERACK_INVITATION: "attach:shoerackinvite",
    UNKNOWN: "attach:unknown"
  };
}, null);
__d("MercuryAttachmentType", [], function(a, b, c, d, e, f) {
  e.exports = {
    ERROR: "error",
    FILE: "file",
    PHOTO: "photo",
    STICKER: "sticker",
    SHARE: "share",
    UNKNOWN: "unknown",
    VIDEO: "video",
    GIF: "gif"
  };
}, null);
__d("MercuryAudioType", [], function(a, b, c, d, e, f) {
  e.exports = {
    AudioClip: "fb_voice_message",
    VoiceMessageWithTranscript: "fb_voice_message_with_transcript"
  };
}, null);
__d("MercuryErrorType", [], function(a, b, c, d, e, f) {
  e.exports = {
    SERVER: 1,
    TRANSPORT: 2,
    TIMEOUT: 3
  };
}, null);
__d("MercuryGlobalActionType", [], function(a, b, c, d, e, f) {
  e.exports = {
    MARK_ALL_READ: "mga-type:mark-all-read"
  };
}, null);
__d("MercuryLogMessageType", [], function(a, b, c, d, e, f) {
  e.exports = {
    SUBSCRIBE: "log:subscribe",
    UNSUBSCRIBE: "log:unsubscribe",
    VIDEO_CALL: "log:video-call",
    PHONE_CALL: "log:phone-call",
    THREAD_NAME: "log:thread-name",
    THREAD_IMAGE: "log:thread-image",
    SERVER_ERROR: "log:error-msg",
    LIVE_LISTEN: "log:live-listen",
    WALLPAPER: "log:wallpaper",
    ORION: "log:orion",
    SWITCH_TO_WORK: "log:switch",
    PAGE_REPLY: "log:page-reply"
  };
}, null);
__d("MercuryMessageSourceTags", [], function(a, b, c, d, e, f) {
  e.exports = {
    CHAT: "source:chat",
    EMAIL: "source:email",
    MESSENGER: "source:messenger",
    MOBILE: "source:mobile"
  };
}, null);
__d("MercuryParticipantTypes", [], function(a, b, c, d, e, f) {
  e.exports = {
    USER: "user",
    THREAD: "thread",
    EVENT: "event",
    PAGE: "page",
    FRIEND: "friend"
  };
}, null);
__d("MercuryPayloadSource", [], function(a, b, c, d, e, f) {
  e.exports = {
    UNKNOWN: "unknown",
    CLIENT_CHANNEL_MESSAGE: "client_channel_message",
    CLIENT_SEND_MESSAGE: "client_send_message",
    CLIENT_CHANGE_ARCHIVED_STATUS: "client_change-archived_status",
    CLIENT_CHANGE_FOLDER: "client_change_folder",
    CLIENT_CHANGE_MUTE_SETTINGS: "client_change_mute_settings",
    CLIENT_CHANGE_READ_STATUS: "client_change_read_status",
    CLIENT_MARK_THREAD_SEEN: "client_mark_thread_seen",
    CLIENT_ADD_PARTICIPANTS: "client_add_participants",
    CLIENT_FETCH_PARTICIPANTS: "client_fetch_participants",
    CLIENT_CLEAR_CHAT: "client_clear_chat",
    CLIENT_DELETE_MESSAGES: "client_delete_messages",
    CLIENT_MARK_MESSAGES_SPAM: "client_mark_messages_spam",
    CLIENT_DELETE_THREAD: "client_delete_thread",
    CLIENT_HANDLE_ERROR: "client_handle_error",
    CLIENT_UNPIN_THREAD: "client_unpin_thread",
    SERVER_INITIAL_DATA: "server_initial_data",
    SERVER_SEND_MESSAGE: "server_send_message",
    SERVER_CONFIRM_MESSAGES: "server_confirm_messages",
    SERVER_CHANGE_ARCHIVED_STATUS: "server_change_archived_status",
    SERVER_CHANGE_READ_STATUS: "server_change_read_status",
    SERVER_MARK_FOLDER_READ: "server_mark_folder_read",
    SERVER_MARK_SEEN: "server_mark_seen",
    SERVER_FETCH_PARTICIPANTS: "server_fetch_participants",
    SERVER_FETCH_THREAD_INFO: "server_fetch_thread_info",
    SERVER_FETCH_THREADLIST_INFO: "server_fetch_threadlist_info",
    SERVER_STANDALONE_NOTIFICATIONS: "server_standalone_notifications",
    SERVER_THREAD_SYNC: "server_thread_sync",
    SERVER_TAB_PRESENCE: "server_tab_presence",
    SERVER_UNREAD_THREADS: "server_unread_threads",
    SERVER_SEARCH: "server_search",
    SERVER_ADD_SHARE_DATA_TO_EXISTING_MESSAGE: "server_add_share_data_to_existing_message"
  };
}, null);
__d("MercurySendMessageFields", [], function(a, b, c, d, e, f) {
  e.exports = {
    AUTO_RETRY_CNT: "auto_retry_cnt",
    MANUAL_RETRY_CNT: "manual_retry_cnt"
  };
}, null);
__d("MercurySourceType", [], function(a, b, c, d, e, f) {
  e.exports = {
    CHAT_ORCA: "source:chat:orca",
    CHAT_IPHONE: "source:chat:iphone",
    CHAT_JABBER: "source:chat:jabber",
    CHAT_MEEBO: "source:chat:meebo",
    CHAT_WEB: "source:chat:web",
    CHAT_TEST: "source:chat:test",
    CHAT: "source:chat",
    EMAIL: "source:email",
    GIGABOXX_API: "source:gigaboxx:api",
    GIGABOXX_BLAST: "source:gigaboxx:blast",
    GIGABOXX_EMAIL_REPLY: "source:gigaboxx:emailreply",
    GIGABOXX_MOBILE: "source:gigaboxx:mobile",
    GIGABOXX_WAP: "source:gigaboxx:wap",
    GIGABOXX_WEB: "source:gigaboxx:web",
    LEIA: "source:leia",
    MESSENGER_WEB: "source:messenger:web",
    SAM_UFI: "source:sam:ufi",
    SHARE_DIALOG: "source:share:dialog",
    SEND_PLUGIN: "source:sendplugin",
    SMS: "source:sms",
    TEST: "source:test",
    TITAN_WAP: "source:titan:wap",
    TITAN_M_BASIC: "source:titan:m_basic",
    TITAN_M_FREE: "source:titan:m_free_basic",
    TITAN_M_JAPAN: "source:titan:m_japan",
    TITAN_M_MINI: "source:titan:m_mini",
    TITAN_M_TOUCH: "source:titan:m_touch",
    TITAN_M_APP: "source:titan:m_app",
    TITAN_M_TABLET: "source:titan:m_tablet",
    TITAN_M_ZERO: "source:titan:m_zero",
    TITAN_M_TALK: "source:titan:m_talk",
    TITAN_WEB: "source:titan:web",
    TITAN_FACEWEB_ANDROID: "source:titan:faceweb_android",
    TITAN_FACEWEB_BUFFY: "source:titan:faceweb_buffy",
    TITAN_FACEWEB_IPAD: "source:titan:faceweb_ipad",
    TITAN_FACEWEB_IPHONE: "source:titan:faceweb_iphone",
    TITAN_FACEWEB_UNKNOWN: "source:titan:faceweb_unknown",
    TITAN_API: "source:titan:api",
    TITAN_API_MOBILE: "source:titan:api_mobile",
    TITAN_ORCA: "source:titan:orca",
    TITAN_EMAIL_REPLY: "source:titan:emailreply",
    MOBILE: "source:mobile",
    PAGE_PLATFORM_API: "source:page_platform_api",
    UNKNOWN: "source:unknown",
    WEB: "source:web",
    HELPCENTER: "source:helpcenter",
    NEW_SHARE_DIALOG: "source:share:dialog:new",
    PAID_PROMOTION: "source:paid_promotion",
    BUFFY_SMS: "source:buffy:sms",
    WEBRTC_MOBILE: "source:webrtc:mobile",
    MESSENGER_COMMERCE: "source:messenger:commerce"
  };
}, null);
__d("MercuryThreadMode", [], function(a, b, c, d, e, f) {
  e.exports = {
    EMAIL_ORIGINATED: 1,
    TITAN_ORIGINATED: 2,
    OBJECT_ORIGINATED: 3
  };
}, null);
__d("MercuryTimePassed", [], function(a, b, c, d, e, f) {
  e.exports = {
    TODAY: 0,
    WEEK_AGO: 1,
    MONTH_AGO: 2,
    CURRENT_YEAR: 3,
    OTHER_YEAR: 4
  };
}, null);
__d("MessagingEvent", [], function(a, b, c, d, e, f) {
  e.exports = {
    DELETE: "delete",
    DELETE_MESSAGES: "delete_messages",
    DELIVER: "deliver",
    ERROR: "error",
    READ: "read",
    REPORT_SPAM: "report_spam",
    REPORT_SPAM_MESSAGES: "report_spam_messages",
    UNMARK_SPAM: "unmark_spam",
    SUBSCRIBE: "subscribe",
    CHANGE_MUTE_SETTINGS: "change_mute_settings",
    TAG: "tag",
    UNREAD: "unread",
    UNSUBSCRIBE: "unsubscribe",
    DELIVER_LOG: "deliver_log",
    MORE_THREADS: "more_threads",
    READ_ALL: "read_all",
    READ_RECEIPT: "read_receipt",
    DELIVERY_RECEIPT: "delivery_receipt",
    SENT_PUSH: "sent_push",
    DELIVER_FAST_PAST: "deliver_fast_path",
    MESSENGER_STATUS: "messenger_status",
    UPDATE_PINNED_THREADS: "update_pinned_threads"
  };
}, null);
__d("MessagingTag", [], function(a, b, c, d, e, f) {
  e.exports = {
    GROUPS: "groups",
    UNREAD: "unread",
    ACTION_ARCHIVED: "action:archived",
    INBOX: "inbox",
    OTHER: "other",
    EVENT: "event",
    SENT: "sent",
    SMS_MUTE: "sms_mute",
    SPAM: "spam",
    UPDATES: "broadcasts_inbox",
    BCC: "header:bcc",
    FILTERED_CONTENT: "filtered_content",
    UNAVAILABLE_ATTACHMENT: "unavailable_attachment",
    ARCHIVED: "archived",
    EMAIL: "email",
    VOICEMAIL: "voicemail",
    SPAM_SPOOFING: "spam:spoofing",
    SPOOF_WARNING: "MTA:spoof_warning",
    SMS_TAG_ROOT: "SMSShortcode:",
    APP_ID_ROOT: "app_id:",
    DOMAIN_AUTH_PASS: "MTA:dmarc:pass",
    DOMAIN_AUTH_FAIL: "MTA:dmarc:fail",
    MTA_SYSTEM_MESSAGE: "MTA:system_message",
    EMAIL_MESSAGE: "source:email"
  };
}, null);
__d("PagesMessagingConst", [], function(a, b, c, d, e, f) {
  e.exports = {
    LOAD_MESSAGE_THREAD_URI: "\/ajax\/pages\/messages\/load_message_thread.php",
    ASYNC_ENDPOINT: "\/ajax\/messaging\/async.php"
  };
}, null);
__d("PhotoResizeModeConst", [], function(a, b, c, d, e, f) {
  e.exports = {
    CONTAIN: "s",
    COVER: "p"
  };
}, null);
__d("ChatImpressionLogger", ["AsyncSignal", "requireWeak", "ChatConfig", "ChatVisibility", "Poller", "PresencePrivacy", "PresenceStatus", "debounceAcrossTransitions", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = null;
  h(['AvailableList'], function(v) {
    return p = v;
  });
  var q = null;

  function r() {
    if (!q) return '';
    return q.getCachedSortedList().toString();
  }

  function s() {
    if (!q || !p) return '';
    var v = [],
      w = q.getCachedSortedList();
    for (var x = 0; x < w.length; x++) v[x] = p.get(w[x]);
    return v.toString();
  }

  function t(v) {
    v.setURI('/ajax/chat/imps_logging.php').setData({
      list_availability: s(),
      sorted_list: r(),
      source: 'periodical_imps'
    });
  }
  var u = {
    init: function(v) {
      q = v;
      var w = i.get('chat_impression_logging_periodical', 0);
      if (w) {
        var x = i.get('periodical_impression_logging_config.interval'),
          y = new k({
            interval: x,
            setupRequest: t,
            clearOnQuicklingEvents: false,
            dontStart: true
          });
        l.subscribe('privacy-user-presence-changed', n(function() {
          if (j.isOnline()) {
            y.start();
          } else y.stop();
        }));
      }
      this.init = function() {};
    },
    logImpression: function(v, w, x) {
      var y = i.get('chat_impression_logging_with_click'),
        z = {
          list_availability: y ? s() : '',
          sorted_list: y ? r() : '',
          source: v,
          target: w,
          target_presence: m.get(w),
          viewport_width: document.body.clientWidth
        };
      new g('/ajax/chat/ct.php', o(z, x)).send();
    }
  };
  e.exports = u;
}, null);
__d("ChatWelcomeMessage", ["ImmutableObject"], function(a, b, c, d, e, f, g) {
  'use strict';

  function h() {
    this.$ChatWelcomeMessage0 = {};
  }
  h.prototype.setWelcomeMessage = function(j, k, l) {
    this.$ChatWelcomeMessage0[j] = new g({
      timestamp: Date.now(),
      thread_id: j,
      author: k,
      body: l
    });
  };
  h.prototype.getWelcomeMessage = function(j) {
    return this.$ChatWelcomeMessage0[j];
  };
  var i = new h();
  e.exports = i;
}, null);
__d("MercuryIDs", [], function(a, b, c, d, e, f) {
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
  e.exports = g;
}, null);
__d("MercuryAssert", ["MercuryIDs"], function(a, b, c, d, e, f, g) {
  e.exports = {
    isParticipantID: function(h) {
      if (!g.isValid(h)) throw ("bad_participant_id " + h);
    },
    allParticipantIDs: function(h) {
      h.forEach(this.isParticipantID);
    },
    isUserParticipantID: function(h) {
      var i = g.tokenize(h);
      if (i.type != 'fbid') throw ("bad_user_id " + h);
    },
    isEmailParticipantID: function(h) {
      var i = g.tokenize(h);
      if (i.type != 'email') throw ("bad_email_id " + h);
    },
    allThreadID: function(h) {
      h.forEach(this.isThreadID);
    },
    isThreadID: function(h) {
      if (!g.isValid(h)) throw ("bad_thread_id " + h);
    }
  };
}, null);
__d("MercuryAttachment", ["MercuryAttachmentContentType", "MercuryAttachmentType", "MercuryAudioType"], function(a, b, c, d, e, f, g, h, i) {
  var j = {
    getAttachIconClass: function(k) {
      switch (k) {
        case g.PHOTO:
          return 'MercuryPhotoIcon';
        case g.VIDEO:
          return 'MercuryVideoIcon';
        case g.MUSIC:
          return 'MercuryMusicIcon';
        case g.VOICE:
          return 'MercuryVoiceIcon';
        case g.TEXT:
          return 'MercuryTextIcon';
        case g.MSWORD:
          return 'MercuryMSWordIcon';
        case g.MSXLS:
          return 'MercuryMSXLSIcon';
        case g.MSPPT:
          return 'MercuryMSPPTIcon';
      }
      return 'MercuryDefaultIcon';
    },
    getAttachIconClassByMime: function(k) {
      if (k.startsWith('image')) {
        return 'MercuryPhotoIcon';
      } else if (k.startsWith('video')) {
        return 'MercuryVideoIcon';
      } else if (k.startsWith('audio')) {
        return 'MercuryMusicIcon';
      } else if (k.startsWith('text/plain')) {
        return 'MercuryTextIcon';
      } else return 'MercuryDefaultIcon';
    },
    getAttachTypeByMime: function(k) {
      if (k.startsWith('image')) {
        return g.PHOTO;
      } else if (k.startsWith('video')) {
        return g.VIDEO;
      } else if (k.startsWith('audio')) {
        return g.MUSIC;
      } else if (k.startsWith('text/plain')) {
        return g.TEXT;
      } else return g.UNKNOWN;
    },
    convertRaw: function(k) {
      var l = [];
      for (var m = 0; m < k.length; m++) {
        var n = k[m];
        if (n.attach_type === h.PHOTO) {
          l.push(n);
        } else if (n.filename) {
          var o = j.getAttachTypeByMime(n.filetype),
            p = {};
          p.attach_type = h.FILE;
          p.name = n.filename;
          p.icon_type = o;
          p.url = '';
          l.push(p);
        }
      }
      return l;
    },
    get: function(k) {
      var l = [];
      if (k.attachments) {
        l = k.attachments;
      } else if (k.raw_attachments) l = this.convertRaw(k.raw_attachments);
      if (!(k.attachments && k.attachments.length > 0)) {
        if (k.sticker_id) return l.concat([{
          attach_type: h.STICKER
        }]);
        if (k.preview_attachments && k.preview_attachments.length > 0) return l.concat(k.preview_attachments);
      }
      return l;
    },
    isVoiceMessage: function(k) {
      return (k === i.AudioClip || k === i.VoiceMessageWithTranscript);
    }
  };
  e.exports = j;
}, null);
__d("MercurySingletonMixin", ["CurrentUser"], function(a, b, c, d, e, f, g) {
  var h = {
    _getInstances: function() {
      if (!this._instances) this._instances = {};
      return this._instances;
    },
    get: function() {
      return this.getForFBID(g.getID());
    },
    getForFBID: function(i) {
      var j = this._getInstances();
      if (!j[i]) j[i] = new this(i);
      return j[i];
    }
  };
  e.exports = h;
}, null);
__d("ReportState", ["ErrorUtils", "invariant"], function(a, b, c, d, e, f, g, h) {
  var i = {};

  function j(l, m) {
    h(!i[l]);
    i[l] = m;
  }

  function k() {
    var l = {};
    Object.keys(i).forEach(function(m) {
      try {
        l[m] = i[m]();
      } catch (n) {
        g.reportError('ReportState: callback threw an error.');
      }
    });
    return l;
  }
  e.exports = {
    registerCallback: j,
    getState: k
  };
}, null);
__d("MercuryMessageClientState", [], function(a, b, c, d, e, f) {
  var g = {
    DO_NOT_SEND_TO_SERVER: 'do_not_send_to_server',
    SEND_TO_SERVER: 'send_to_server'
  };
  e.exports = g;
}, null);
__d("MercurySendAttemptLogger", ["Banzai", "BanzaiLogger", "MercuryAttachmentType", "MercurySendMessageFields"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = h.create({
      retry: true
    }),
    l = g.isEnabled('mercury_send_attempt_logging'),
    m = function(o) {
      if (!o.has_attachment) return null;
      if (o.sticker_id) return i.STICKER;
      if ((o.image_ids && o.image_ids.length) || (o.photo_fbids && o.photo_fbids.length)) return i.PHOTO;
      if (o.raw_attachments && o.raw_attachments.length) return i.FILE;
      if (o.content_attachment) return i.SHARE;
      return i.UNKNOWN;
    },
    n = {
      log: function(o) {
        if (!l) return;
        var p = {
          message_id: o.message_id,
          timestamp_client: Date.now(),
          attempt_num: o[j.MANUAL_RETRY_CNT],
          first_attachment_type: m(o),
          source: o.source,
          auto_retry_cnt: o[j.AUTO_RETRY_CNT]
        };
        k.log('MercurySendAttemptLoggerConfig', p);
      }
    };
  e.exports = n;
}, null);
__d("MercurySendErrorLogger", ["Banzai", "BanzaiLogger"], function(a, b, c, d, e, f, g, h) {
  var i = h.create({
      retry: true
    }),
    j = g.isEnabled('mercury_send_error_logging'),
    k = {
      log: function(l) {
        if (!j) return;
        var m = {
          message_id: l.message_id,
          timestamp_client: Date.now(),
          error_type: l.error_data.type,
          error_code: l.error_data.code,
          error_description: l.error_data.description,
          is_transient: l.error_data.is_transient
        };
        i.log('MercurySendErrorLoggerConfig', m);
      }
    };
  e.exports = k;
}, null);
__d("MercuryServerSendMessageQueueSimulatedError", ["AsyncRequest", "AsyncResponse", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
  var j = 9999,
    k = {
      create: function(l) {
        var m = new g(this.endpoint_uri).setData({
            message_batch: [l],
            client: this.client
          }),
          n = new h(m, {});
        i(n, {
          error: j,
          silentError: false,
          transientError: true,
          request: m
        });
        return n;
      }
    };
  e.exports = k;
}, null);
__d("MercuryServerSendMessageQueue", ["BanzaiODS", "LogHistory", "MercuryLoggingHelper", "MercuryServerDispatcher", "MercuryServerSendMessageQueueSimulatedError"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = '/ajax/mercury/send_messages.php',
    m = h.getInstance('mercury_server_send_message_queue');

  function n(o, p, q, r) {
    "use strict";
    this.sender_id = o;
    this.queue_id = p;
    this.$MercuryServerSendMessageQueue0 = q.success_handler;
    this.$MercuryServerSendMessageQueue1 = q.error_handler;
    this.$MercuryServerSendMessageQueue2 = q.transport_error_handler;
    this.$MercuryServerSendMessageQueue3 = q.timeout_handler;
    this.client = r;
    var s = {};
    s[l] = {
      request_user_id: this.sender_id,
      endpoint_id: this.queue_id,
      mode: j.IMMEDIATE,
      handler: this.handleSuccess.bind(this),
      error_handler: this.handleError.bind(this),
      transport_error_handler: this.handleTransportError.bind(this),
      timeout: q.timeout,
      timeout_handler: this.handleTimeout.bind(this),
      connection_retries: q.connection_retries,
      send_attempt_logging_handler: q.send_attempt_logging_handler,
      auto_retries: q.auto_retries
    };
    j.registerEndpoints(s);
    this.pending_message = null;
    this.queue = [];
  }
  n.prototype.enqueue = function(o) {
    "use strict";
    this.queue.push(o);
    this.$MercuryServerSendMessageQueue4();
  };
  n.prototype.$MercuryServerSendMessageQueue4 = function() {
    "use strict";
    if (this.pending_message || !this.queue.length) {
      if (this.pending_message) this.$MercuryServerSendMessageQueue5();
      return;
    }
    this.pending_message = this.queue.shift();
    j.trySend(l, {
      message_batch: [this.pending_message],
      client: this.client
    }, null, this.sender_id, this.queue_id);
  };
  n.prototype.$MercuryServerSendMessageQueue6 = function() {
    "use strict";
    while (this.queue.length) this.$MercuryServerSendMessageQueue7(this.queue.shift());
  };
  n.prototype.$MercuryServerSendMessageQueue7 = function(o) {
    "use strict";
    this.$MercuryServerSendMessageQueue1(k.create(o));
    m.error('mark_as_failed', {
      fbid: this.sender_id,
      queue_id: this.queue_id,
      message: i.obfuscateMessage(o)
    });
  };
  n.prototype.handleSuccess = function(o, p) {
    "use strict";
    this.$MercuryServerSendMessageQueue0(o, p);
    this.pending_message = null;
    this.$MercuryServerSendMessageQueue4();
  };
  n.prototype.handleError = function(o) {
    "use strict";
    this.$MercuryServerSendMessageQueue1(o);
    this.$MercuryServerSendMessageQueue6();
    this.pending_message = null;
  };
  n.prototype.handleTransportError = function(o) {
    "use strict";
    this.$MercuryServerSendMessageQueue2(o);
    this.$MercuryServerSendMessageQueue6();
    this.pending_message = null;
  };
  n.prototype.handleTimeout = function(o) {
    "use strict";
    this.$MercuryServerSendMessageQueue3(o);
    this.$MercuryServerSendMessageQueue6();
    this.pending_message = null;
  };
  n.prototype.$MercuryServerSendMessageQueue5 = function() {
    "use strict";
    m.debug('maybe_send_next_pending_message', {
      fbid: this.sender_id,
      queue_id: this.queue_id,
      pending_message: i.obfuscateMessage(this.pending_message),
      queue: this.queue.map(function(p) {
        return i.obfuscateMessage(p);
      })
    });
    var o = 'send_queue.delayed.queue_length.' + this.queue.length.toString();
    g.bumpEntityKey('chat.web', o);
  };
  e.exports = n;
}, null);
__d("MercuryServerSendMessageQueueRouter", ["BanzaiODS", "LogHistory", "Map", "MercuryServerSendMessageQueue", "MercurySingletonMixin"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = h.getInstance('mercury_server_send_message_queue_router'),
    m = 'chat.web.send_queue_router';
  g.setEntitySample(m, .1);

  function n(o) {
    "use strict";
    this.fbid = o;
    this.queues = new i();
  }
  n.prototype.enqueue = function(o, p, q, r) {
    "use strict";
    if (!this.queues.has(o)) {
      this.queues.set(o, new j(this.fbid, o, p, q));
      l.debug('added queue', {
        fbid: this.fbid,
        queue_id: o
      });
      g.bumpEntityKey(m, 'new_queue');
    }
    this.queues.get(o).enqueue(r);
  };
  Object.assign(n, k);
  e.exports = n;
}, null);
__d("MercuryMessageIDs", ["KeyedCallbackManager"], function(a, b, c, d, e, f, g) {
  var h = new g(),
    i = {
      getServerIDs: function(j, k) {
        var l = j.filter(function(n) {
            return n.indexOf('mail.projektitan.com') !== -1;
          }),
          m = function(n) {
            var o = j.map(function(p) {
              return n[p] ? n[p] : p;
            });
            k(o);
          };
        return h.executeOrEnqueue(l, m);
      },
      addServerID: function(j, k) {
        h.setResource(j, k);
      }
    };
  e.exports = i;
}, null);
__d("MessagingReliabilityLogger", ["PresenceUtil", "MercuryServerDispatcher", "MessagingReliabilityLoggerInitialData", "isEmpty", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = '/ajax/mercury/client_reliability.php',
    m = 60000;

  function n(t, u) {
    var v = {
      app: i.app,
      categories: JSON.stringify(t)
    };
    if (!j(u)) v.extra = JSON.stringify(u);
    return v;
  }

  function o(t, u, v, w) {
    if (t[u] === (void 0)) t[u] = {};
    if (t[u][v] === (void 0)) t[u][v] = 0;
    t[u][v] += w;
  }

  function p(t, u, v, w) {
    if (t[u] === (void 0)) t[u] = {};
    if (t[u][v] === (void 0)) t[u][v] = [];
    for (var x = 0; x < w.length; ++x) t[u][v].push(w[x]);
  }

  function q(t, u) {
    if ((t && !t.categories) || (u && !u.categories)) return;
    var v = t ? JSON.parse(t.categories) : {},
      w = t && t.extra ? JSON.parse(t.extra) : {},
      x = JSON.parse(u.categories),
      y = u.extra ? JSON.parse(u.extra) : {};
    for (var z in x) {
      var aa = x[z],
        ba = y[z];
      for (var ca in aa) {
        o(v, z, ca, aa[ca]);
        if (ba !== (void 0)) {
          var da = ba[ca];
          if (da !== (void 0)) p(w, z, ca, da);
        }
      }
    }
    return n(v, w);
  }
  var r = {};
  r[l] = {
    mode: h.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR,
    batch_function: q
  };
  h.registerEndpoints(r);
  var s = {
    addEntry: function(t, u, v) {
      if (!i.enabled) return;
      var w = {};
      o(w, t, u, 1);
      var x = {};
      if (v !== (void 0)) p(x, t, u, [v]);
      h.trySend(l, n(w, x));
    }
  };
  (function t() {
    s.addEntry('page_event', 'active', g.getSessionID());
    k(t, m);
  })();
  e.exports = s;
}, null);
__d("MercuryServerSendMessageQueueOptions", [], function(a, b, c, d, e, f) {
  function g(h, i, j, k, l, m, n, o) {
    "use strict";
    this.success_handler = h;
    this.error_handler = i;
    this.transport_error_handler = j;
    this.timeout_handler = k;
    this.send_attempt_logging_handler = l;
    this.timeout = m;
    this.connection_retries = n;
    this.auto_retries = o;
  }
  e.exports = g;
}, null);
__d("MercuryThreadInformer", ["ArbiterMixin", "LogHistory", "MercuryAssert", "MercuryLoggingHelper", "MercurySingletonMixin", "copyProperties", "mapObject", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  'use strict';
  var o = h.getInstance('mercury_informer'),
    p = n(g);
  for (var q in p)
    if (p.hasOwnProperty(q)) s[q] = p[q];
  var r = p === null ? null : p.prototype;
  s.prototype = Object.create(r);
  s.prototype.constructor = s;
  s.__superConstructor__ = p;

  function s(u) {
    this.$MercuryThreadInformer0 = u;
    this.$MercuryThreadInformer1 = {};
    this.$MercuryThreadInformer2 = {};
    this.$MercuryThreadInformer3 = {};
    this.$MercuryThreadInformer4 = false;
    this.$MercuryThreadInformer5 = false;
    this.$MercuryThreadInformer6 = false;
    this.$MercuryThreadInformer7 = {};
    this.$MercuryThreadInformer8 = {};
    this.$MercuryThreadInformer9 = {};
    this.$MercuryThreadInformera = 0;
  }
  s.prototype.updatedThread = function(u) {
    this.$MercuryThreadInformer2[u] = true;
    this.$MercuryThreadInformerb();
  };
  s.prototype.deletedThread = function(u) {
    this.$MercuryThreadInformer1[u] = true;
    this.$MercuryThreadInformerb();
  };
  s.prototype.updatedThreadlist = function() {
    this.$MercuryThreadInformer4 = true;
    this.$MercuryThreadInformerb();
  };
  s.prototype.updatedUnseenState = function() {
    this.$MercuryThreadInformer5 = true;
    this.$MercuryThreadInformerb();
  };
  s.prototype.updatedUnreadState = function() {
    this.$MercuryThreadInformer6 = true;
    this.$MercuryThreadInformerb();
  };
  s.prototype.changedThreadReadState = function(u, v, w) {
    if (!this.$MercuryThreadInformer3[u] || this.$MercuryThreadInformer3[u].timestamp < w) this.$MercuryThreadInformer3[u] = {
      mark_as_read: v,
      timestamp: w
    };
    this.$MercuryThreadInformerb();
  };
  s.prototype.receivedMessage = function(u) {
    i.isThreadID(u.thread_id);
    var v = u.thread_id;
    if (!this.$MercuryThreadInformer7[v]) this.$MercuryThreadInformer7[v] = [];
    this.$MercuryThreadInformer7[v].push(u);
    this.updatedThread(v);
  };
  s.prototype.reorderedMessages = function(u, v) {
    this.$MercuryThreadInformer8[u] = {
      source: v
    };
    this.$MercuryThreadInformerb();
  };
  s.prototype.updatedMessage = function(u, v, w) {
    if (!this.$MercuryThreadInformer9[u]) this.$MercuryThreadInformer9[u] = {};
    this.$MercuryThreadInformer9[u][v] = {
      source: w
    };
    this.updatedThread(u);
  };
  s.prototype.synchronizeInforms = function(u) {
    this.$MercuryThreadInformera++;
    try {
      u();
    } catch (v) {
      throw v;
    } finally {
      this.$MercuryThreadInformera--;
      this.$MercuryThreadInformerb();
    }
  };
  s.prototype.listen = function(u, v) {
    return this.subscribe('threads-updated', function(w, x) {
      if (x[u]) v(u);
    });
  };
  s.prototype.$MercuryThreadInformerb = function() {
    if (!this.$MercuryThreadInformera) {
      var u = this.$MercuryThreadInformer1,
        v = this.$MercuryThreadInformer2,
        w = this.$MercuryThreadInformer3,
        x = this.$MercuryThreadInformer4,
        y = this.$MercuryThreadInformer5,
        z = this.$MercuryThreadInformer6,
        aa = this.$MercuryThreadInformer7,
        ba = this.$MercuryThreadInformer8,
        ca = this.$MercuryThreadInformer9;
      this.$MercuryThreadInformer1 = {};
      this.$MercuryThreadInformer2 = {};
      this.$MercuryThreadInformer3 = {};
      this.$MercuryThreadInformer4 = false;
      this.$MercuryThreadInformer5 = false;
      this.$MercuryThreadInformer6 = false;
      this.$MercuryThreadInformer7 = {};
      this.$MercuryThreadInformer8 = {};
      this.$MercuryThreadInformer9 = {};
      var da = Object.keys(v);
      if (da.length || x) this.$MercuryThreadInformerc('threadlist-updated', da);
      if (da.length) this.$MercuryThreadInformerc('threads-updated', v);
      for (var ea in w) {
        this.$MercuryThreadInformerc('thread-read-changed', w);
        break;
      }
      for (ea in u) {
        this.$MercuryThreadInformerc('threads-deleted', u);
        break;
      }
      if (y) this.$MercuryThreadInformerc('unseen-updated', null);
      if (z) this.$MercuryThreadInformerc('unread-updated', null);
      for (ea in aa) {
        this.$MercuryThreadInformerc('messages-received', aa);
        break;
      }
      for (ea in ba) {
        this.$MercuryThreadInformerc('messages-reordered', ba);
        break;
      }
      for (ea in ca) {
        this.$MercuryThreadInformerc('messages-updated', ca);
        break;
      }
    }
  };
  s.prototype.$MercuryThreadInformerc = function(u, v) {
    t(u, v);
    this.inform(u, v);
  };

  function t(u, v) {
    var w = v;
    if (u == 'messages-received') w = m(w, function(x) {
      return x.map(function(y) {
        return j.obfuscateMessage(y);
      });
    });
    o.debug(u, w);
  }
  l(s, k);
  e.exports = s;
}, null);
__d("MercuryServerRequests", ["Arbiter", "ArbiterMixin", "AsyncResponse", "BanzaiLogger", "BanzaiODS", "ChannelConstants", "CurrentUser", "KeyedCallbackManager", "LogHistory", "MercuryActionStatus", "MercuryActionType", "MercuryAPIArgsSource", "MercuryAssert", "MercuryErrorType", "MercuryGlobalActionType", "MercuryIDs", "MercuryLoggingHelper", "MercuryLogMessageType", "MercuryMessageClientState", "MercuryPayloadSource", "MercurySendAttemptLogger", "MercurySendErrorLogger", "MercuryServerRequestsConfig", "MercuryServerSendMessageQueueRouter", "MercurySingletonMixin", "MercurySourceType", "MercuryThreadlistConstants", "MercuryMessageIDs", "MessagingConfig", "MessagingReliabilityLogger", "MessagingTag", "MercuryServerDispatcher", "MercuryServerSendMessageQueueOptions", "MercuryThreadInformer", "copyProperties", "createObjectFrom", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa) {
  "use strict";
  var ra = o.getInstance('mercury_server'),
    sa = r.MERCURY;

  function ta(ec, fc) {
    if (fc) ec._lastActionTimestamp = Math.max(ec._lastActionTimestamp, fc);
  }

  function ua(ec, fc) {
    var gc = fc.thread_fbid;
    if (fc.canonical_fbid) gc = fc.canonical_fbid;
    var hc = ec._FBIDToClientIDs.getResource(gc);
    if (!hc) {
      if (fc.canonical_fbid) {
        hc = 'user:' + fc.canonical_fbid;
      } else if (fc.root_message_threading_id) hc = 'root:' + fc.root_message_threading_id;
      hc = hc || 'thread:' + gc;
      if (gc) gc = gc.toString();
      wa(ec, gc, hc);
      if (fc.thread_id) va(ec, fc.thread_id, hc);
    }
    fc.thread_id = hc;
  }

  function va(ec, fc, gc) {
    ec._serverToClientIDs.setResource(fc, gc);
    ec._clientToServerIDs.setResource(gc, fc);
    ec._newlyAddedClientIDs[fc] = gc;
  }

  function wa(ec, fc, gc) {
    ec._clientIDToFBIDs.setResource(gc, fc);
    ec._FBIDToClientIDs.setResource(fc, gc);
    ec._newlyAddedClientIDs[fc] = gc;
  }

  function xa(ec, fc, gc) {
    var hc = ec._clientIDToFBIDs.executeOrEnqueue(fc, gc),
      ic = ec._clientIDToFBIDs.getUnavailableResources(hc),
      jc = v.tokenize(fc);
    if (ic.length && jc.type != 'root') ec.fetchThreadData(ic);
  }

  function ya(ec, fc) {
    return ec._clientIDToFBIDs.getResource(fc);
  }

  function za(ec, fc) {
    return !!ec._FBIDToClientIDs.getResource(fc);
  }

  function ab(ec, fc) {
    var gc = ec._serverToClientIDs.getResource(fc);
    if (typeof gc == 'undefined') ra.warn('no_client_thread_id', {
      server_id: fc
    });
    return gc;
  }

  function bb(ec, fc) {
    var gc = ec._FBIDToClientIDs.getResource(fc);
    if (typeof gc == 'undefined') ra.warn('no_client_thread_id', {
      thread_fbid: fc
    });
    return gc;
  }

  function cb(ec, fc, gc) {
    ec._FBIDToClientIDs.executeOrEnqueue(fc, gc);
    ec.ensureThreadIsFetched(fc);
  }

  function db(ec) {
    return ec.thread_fbid || ec.thread_id || ec.client_thread_id;
  }

  function eb(ec, fc, gc) {
    if (fc.action_type != q.SEND_MESSAGE) return;
    var hc = fc.thread_fbid;
    if (fc.other_user_fbid) hc = fc.other_user_fbid;
    var ic = fc.client_thread_id;
    if (!ic) ic = bb(ec, hc);
    var jc = null;
    if (ic) jc = v.tokenize(ic).type;
    gb(ec, fc, gc === 'success');
    if (fc.status === p.ERROR) {
      ba.log(fc);
    } else ja.addEntry('send_' + jc, gc, hc + ',' + fc.message_id);
  }

  function fb(ec) {
    return ec.getError() ? '_' + ec.getError() : '';
  }

  function gb(ec, fc, gc) {
    if (Math.floor(Math.random() * 20) === 0)
      if (fc.client_message_id in ec._sentMessagesTimestamp) {
        var hc = ec._sentMessagesTimestamp[fc.client_message_id],
          ic = Date.now() - hc,
          jc = fc.client_thread_id;
        if (!jc) jc = bb(ec, fc.thread_fbid);
        j.log('WebMessagingLatencyLoggerConfig', {
          has_attachment: fc.attachments && fc.attachments.length > 0,
          latency: ic,
          is_canonical: !v.isMultichat(jc),
          send_successful: gc,
          source: 'client'
        });
      }
  }

  function hb(ec, fc) {
    var gc = null;
    switch (fc.status) {
      case p.SUCCESS:
        gc = 'success';
        break;
      case p.FAILED_UNKNOWN_REASON:
        gc = 'confirmed_error';
        break;
      case p.UNABLE_TO_CONFIRM:
        gc = 'confirm_error';
        break;
      default:
        return;
    }
    eb(ec, fc, gc);
  }

  function ib(ec, fc) {
    (fc.threads || []).forEach(function(pc) {
      ua(ec, pc);
      delete ec._fetchingThreads[pc.thread_id];
      var qc = ya(ec, pc.thread_id);
      delete ec._fetchingThreads[qc];
      ta(ec, pc.timestamp);
    });
    (fc.ordered_threadlists || []).forEach(function(pc) {
      var qc = pc.thread_fbids || [];
      qc = qc.concat(pc.other_user_fbids || []);
      pc.thread_ids = qc.map(bb.bind(null, ec));
    });
    if (fc.pinned_threads && fc.pinned_threads.thread_fbids) fc.pinned_threads.thread_fbids = fc.pinned_threads.thread_fbids.map(bb.bind(null, ec));
    fc.actions = fc.actions || [];
    fc.actions.forEach(function(pc) {
      hb(ec, pc);
      var qc = pc.thread_fbid;
      if (pc.other_user_fbid) qc = pc.other_user_fbid;
      if (pc.status && pc.status != p.SUCCESS && !qc) {
        pc.thread_id = pc.client_thread_id;
        return;
      }
      if (pc.action_type == q.SEND_MESSAGE && pc.client_thread_id && qc) wa(ec, qc.toString(), pc.client_thread_id);
      var rc = pc.thread_id;
      if (qc) {
        pc.thread_id = za(ec, qc) ? bb(ec, qc) : null;
      } else if (pc.client_thread_id) pc.thread_id = pc.client_thread_id;
      if (!pc.thread_id) pc.server_thread_id = rc;
      if (!fc.payload_source || !fc.payload_source.startsWith('server')) ta(ec, pc.timestamp);
    });
    if (fc.end_of_history) {
      var gc = [];
      for (var hc = 0; hc < fc.end_of_history.length; hc++) {
        var ic = fc.end_of_history[hc];
        if (ic.type == 'user') {
          gc.push('user:' + ic.fbid);
        } else if (ic.type == 'thread' && za(ec, ic.fbid)) gc.push(bb(ec, ic.fbid));
      }
      fc.end_of_history = gc;
    }
    if (fc.roger) {
      var jc = {};
      for (var kc in fc.roger) {
        var lc = ec._FBIDToClientIDs.getResource(kc);
        if (lc) {
          var mc = fc.roger[kc];
          jc[lc] = {};
          for (var nc in mc)
            if (mc.hasOwnProperty(nc)) {
              var oc = v.getParticipantIDFromUserID(nc);
              jc[lc][oc] = mc[nc];
            }
        }
      }
      fc.roger = jc;
    }
  }

  function jb(ec) {
    if (ec._pendingUpdates && ec._pendingUpdates.length) {
      var fc = ec._pendingUpdates[0];
      ec._pendingUpdates = ec._pendingUpdates.slice(1);
      ec.handleUpdate(fc);
    }
  }

  function kb(ec, fc) {
    var gc = oa({}, ec),
      hc;
    if (fc.threads) {
      if (!gc.threads) gc.threads = {};
      for (hc in fc.threads) gc.threads[hc] = Object.keys(pa((gc.threads[hc] || []).concat(fc.threads[hc])));
    }
    if (fc.messages) {
      if (!gc.messages) gc.messages = {};
      for (hc in fc.messages) {
        if (!gc.messages[hc]) gc.messages[hc] = {};
        for (var ic in fc.messages[hc])
          if (gc.messages[hc][ic]) {
            gc.messages[hc][ic] = nb(gc.messages[hc][ic], fc.messages[hc][ic]);
          } else gc.messages[hc][ic] = fc.messages[hc][ic];
      }
    }
    gc.client = ec.client || fc.client;
    return gc;
  }

  function lb(ec, fc) {
    var gc = oa(pa(ec.folders, true), pa(fc.folders, true)),
      hc = ec.client || fc.client;
    return {
      folders: Object.keys(gc),
      client: hc
    };
  }

  function mb(ec, fc) {
    for (var gc in fc)
      if (ec[gc] && typeof ec[gc] === 'object') {
        ec[gc] = nb(ec[gc], fc[gc]);
      } else if (fc[gc] && typeof fc[gc] === 'object') {
      var hc = {};
      oa(hc, fc[gc]);
      ec[gc] = hc;
    }
    return ec;
  }

  function nb(ec, fc) {
    var gc = ec.offset < fc.offset ? ec.offset : fc.offset,
      hc = ec.offset + ec.limit,
      ic = fc.offset + fc.limit,
      jc = (hc > ic) ? hc : ic,
      kc = jc - gc;
    return {
      offset: gc,
      limit: kc
    };
  }

  function ob(ec, fc) {
    var gc = ec.client || fc.client,
      hc = {
        ids: {},
        client: gc
      };
    oa(hc.ids, ec.ids);
    oa(hc.ids, fc.ids);
    return hc;
  }

  function pb(ec, fc) {
    var gc = {},
      hc, ic = ec.client || fc.client;
    delete ec.client;
    delete fc.client;
    for (hc in ec) oa(gc, pa(ec[hc], hc));
    for (hc in fc) oa(gc, pa(fc[hc], hc));
    var jc = {
      client: ic
    };
    for (var kc in gc) {
      hc = gc[kc];
      if (!jc[hc]) jc[hc] = [];
      jc[hc].push(kc);
    }
    return jc;
  }

  function qb(ec, fc) {
    var gc = ec.client || fc.client,
      hc = pa(ec.ids, true),
      ic = pa(fc.ids, true),
      jc = oa(hc, ic);
    return {
      ids: Object.keys(jc),
      client: gc
    };
  }

  function rb(ec) {
    this._fbid = ec;
    this._lastActionTimestamp = 0;
    this._serverToClientIDs = new n();
    this._clientToServerIDs = new n();
    this._FBIDToClientIDs = new n();
    this._clientIDToFBIDs = new n();
    this._pendingUpdates = [];
    this._fetchingThreads = {};
    this._newlyAddedClientIDs = {};
    this._sentMessagesTimestamp = {};
    this._sendMessageQueueOptions = new ma(ub, yb, zb, ac, aa.log, ca.sendMessageTimeout, ia.SEND_CONNECTION_RETRIES, ca.maxAutoRetries);
    cc(this);
  }
  oa(rb.prototype, h, {
    getServerThreadID: function(ec, fc) {
      s.isThreadID(ec);
      xa(this, ec, fc);
    },
    getThreadFBID: function(ec, fc) {
      s.isThreadID(ec);
      xa(this, ec, fc);
    },
    getClientThreadID: function(ec, fc) {
      cb(this, ec, fc);
    },
    getClientThreadIDNow: function(ec) {
      return bb(this, ec);
    },
    getServerThreadIDNow: function(ec) {
      return ya(this, ec);
    },
    getClientThreadIDForPermalinks: function(ec) {
      return ab(this, ec);
    },
    convertThreadIDIfAvailable: function(ec) {
      var fc = this._FBIDToClientIDs.getResource(ec);
      if (fc === (void 0)) {
        return ec;
      } else return fc;
    },
    isUser: function(ec) {
      return ec < 2.2e+09 || (ec >= 1e+14 && ec <= 100099999989999) || (ec >= 8.9e+13 && ec <= 89999999999999) || (ec >= 6.000001e+13 && ec <= 60000019999999);
    },
    canLinkExternally: function(ec) {
      s.isThreadID(ec);
      var fc = v.tokenize(ec);
      return (fc.type == 'user') || !!ya(this, ec);
    },
    fetchThreadlistInfo: function(ec, fc, gc, hc, ic) {
      gc = gc || ka.INBOX;
      ic = ic || sa;
      var jc = hc ? la.IMMEDIATE : null,
        kc = {
          client: ic
        };
      kc[gc] = {
        offset: ec,
        limit: fc,
        filter: hc
      };
      dc(this, '/ajax/mercury/threadlist_info.php', kc, jc);
    },
    fetchPinnedThreads: function() {
      dc(this, '/mercury/pinned_threads/', {});
    },
    fetchUnseenThreadIDs: function(ec, fc) {
      fc = fc || sa;
      this.fetchThreadlistInfo(ga.RECENT_THREAD_OFFSET, ga.JEWEL_THREAD_COUNT, ec, null, fc);
    },
    fetchUnreadThreadIDs: function(ec, fc) {
      fc = fc || sa;
      dc(this, '/ajax/mercury/unread_threads.php', {
        folders: [ec],
        client: fc
      });
    },
    fetchMissedMessages: function(ec, fc) {
      fc = fc || sa;
      var gc = {
        last_action_timestamp: this._lastActionTimestamp,
        folders: ec,
        client: fc
      };
      gc.last_action_timestamp = this._lastActionTimestamp;
      dc(this, '/ajax/mercury/thread_sync.php', gc);
    },
    fetchThreadData: function(ec, fc) {
      fc = fc || sa;
      s.allThreadID(ec);
      var gc = {
          threads: {},
          client: fc
        },
        hc = [],
        ic = [];
      ec.forEach(function(kc) {
        if (this._fetchingThreads[kc]) return;
        this._fetchingThreads[kc] = true;
        var lc = ya(this, kc),
          mc = v.tokenize(kc);
        if (mc.type == 'user') {
          hc.push(mc.value);
          gc.threads.user_ids = hc;
        } else if (mc.type == 'thread') {
          if (lc) {
            ic.push(lc);
          } else ic.push(mc.value);
          gc.threads.thread_fbids = ic;
        } else if (mc.type != 'root' && mc.type != 'pending') throw new Error('Unknown thread type', mc);
      }.bind(this));
      this.inform("fetch-thread-data", gc);
      for (var jc in gc.threads) {
        dc(this, '/ajax/mercury/thread_info.php', gc);
        break;
      }
    },
    ensureThreadIsFetched: function(ec, fc) {
      fc = fc || sa;
      if (!this._FBIDToClientIDs.getResource(ec) && !this._fetchingThreads[ec]) {
        this._fetchingThreads[ec] = true;
        dc(this, '/ajax/mercury/thread_info.php', {
          threads: {
            thread_fbids: [ec]
          },
          client: fc
        });
      }
    },
    fetchThreadMessages: function(ec, fc, gc, hc, ic) {
      s.isThreadID(ec);
      ic = ic || sa;
      var jc, kc, lc = v.tokenize(ec),
        mc = ya(this, ec),
        nc = false;
      if (mc) {
        jc = mc;
        kc = (lc.type == 'user') ? 'user_ids' : 'thread_fbids';
      } else {
        jc = lc.value;
        switch (lc.type) {
          case 'user':
            kc = 'user_ids';
            nc = true;
            break;
          case 'thread':
            kc = 'thread_fbids';
            break;
        }
      }
      var oc = {
        messages: {},
        threads: {},
        client: ic
      };
      if (kc) {
        oc.messages[kc] = {};
        oc.messages[kc][jc] = {
          offset: fc,
          limit: gc
        };
        if (nc) oc.threads[kc] = [jc];
        dc(this, '/ajax/mercury/thread_info.php', oc, hc);
      } else xa(this, ec, function(pc) {
        oc.messages.thread_fbids = {};
        oc.messages.thread_fbids[pc] = {
          offset: fc,
          limit: gc
        };
        dc(this, '/ajax/mercury/thread_info.php', oc, hc);
      }.bind(this));
    },
    handleThreadInfoError: function(ec) {
      var fc = ec.getRequest().getData(),
        gc = [];
      if (fc.messages) {
        for (var hc in fc.messages.thread_fbids) gc.push(sb(bb(this, hc)));
        for (var ic in fc.messages.user_ids) gc.push(sb('user:' + ic));
        for (var jc in fc.messages.group_ids) gc.push(sb('group:' + jc));
      }
      if (gc.length) this.handleUpdate({
        actions: gc,
        from_client: true,
        payload_source: z.CLIENT_CHANNEL_MESSAGE
      });
      if (fc.threads && (fc.threads.user_ids || fc.threads.group_ids || fc.threads.thread_ids)) {
        var kc = 5,
          lc = true;
        if (!fc.retry_count) {
          fc.retry_count = 0;
          if (fc.messages) delete fc.messages;
        } else if (fc.retry_count >= kc) {
          lc = false;
          (fc.threads.thread_ids || []).forEach(function(nc) {
            if (nc in this._fetchingThreads) delete this._fetchingThreads[nc];
          }.bind(this));
        }
        if (lc) {
          var mc = fc.retry_count * 1000;
          qa(function() {
            ra.log('retry_thread', fc);
            dc(this, '/ajax/mercury/thread_info.php', fc);
          }.bind(this), mc);
          fc.retry_count++;
        }
      }
    },
    markFolderAsRead: function(ec) {
      dc(this, '/ajax/mercury/mark_folder_as_read.php', {
        folder: ec
      });
      var fc = [{
        action_type: u.MARK_ALL_READ,
        action_id: null,
        folder: ec
      }];
      this.handleUpdate({
        global_actions: fc,
        from_client: true,
        payload_source: z.CLIENT_CHANGE_READ_STATUS
      });
    },
    changeThreadReadStatus: function(ec, fc, gc) {
      s.isThreadID(ec);
      xa(this, ec, function(hc) {
        var ic = {
          ids: {},
          source: gc
        };
        ic.ids[hc] = fc;
        dc(this, '/ajax/mercury/change_read_status.php', ic);
      }.bind(this));
    },
    changeThreadArchivedStatus: function(ec, fc, gc) {
      s.isThreadID(ec);
      xa(this, ec, function(hc) {
        var ic = {
          ids: {},
          source: gc
        };
        ic.ids[hc] = fc;
        dc(this, '/ajax/mercury/change_archived_status.php', ic);
      }.bind(this));
    },
    changeThreadFolder: function(ec, fc) {
      s.isThreadID(ec);
      xa(this, ec, function(gc) {
        var hc = {};
        hc[fc] = [gc];
        dc(this, '/ajax/mercury/move_thread.php', hc);
      }.bind(this));
    },
    changeMutingOnThread: function(ec, fc) {
      s.isThreadID(ec);
      xa(this, ec, function(gc) {
        dc(this, '/ajax/mercury/change_mute_thread.php', {
          thread_fbid: gc,
          mute_settings: fc,
          payload_source: sa
        });
      }.bind(this));
    },
    markThreadSpam: function(ec, fc) {
      s.isThreadID(ec);
      xa(this, ec, function(gc) {
        dc(this, '/ajax/mercury/mark_spam.php', {
          id: gc,
          source: fc
        });
      }.bind(this));
    },
    markMessagesSpam: function(ec, fc) {
      ha.getServerIDs(fc || [], function(gc) {
        dc(this, '/ajax/mercury/mark_spam_messages.php', {
          message_ids: gc
        });
      }.bind(this));
    },
    unmarkThreadSpam: function(ec, fc) {
      s.isThreadID(ec);
      xa(this, ec, function(gc) {
        dc(this, '/ajax/mercury/unmark_spam.php', {
          id: gc,
          source: fc
        });
      }.bind(this));
    },
    deleteThread: function(ec, fc) {
      s.isThreadID(ec);
      xa(this, ec, function(gc) {
        var hc = {
          ids: [gc],
          source: fc
        };
        dc(this, '/ajax/mercury/delete_thread.php', hc);
      }.bind(this));
    },
    unpinThread: function(ec) {
      s.isThreadID(ec);
      xa(this, ec, function(fc) {
        dc(this, '/mercury/unpin_thread/', {
          id: fc
        });
      }.bind(this));
    },
    deleteMessages: function(ec, fc) {
      ha.getServerIDs(fc || [], function(gc) {
        dc(this, '/ajax/mercury/delete_messages.php', {
          message_ids: gc
        });
      }.bind(this));
    },
    sendDeliveryReceipts: function(ec) {
      ha.getServerIDs(ec || [], function(fc) {
        dc(this, '/ajax/mercury/delivery_receipts.php', {
          message_ids: fc
        });
      }.bind(this));
    },
    clearChat: function(ec, fc, gc) {
      s.isThreadID(ec);
      dc(this, '/ajax/chat/settings.php', {
        clear_history_id: fc
      });
      var hc = [{
        action_type: q.CLEAR_CHAT,
        action_id: null,
        thread_id: ec,
        clear_time: gc
      }];
      this.handleUpdate({
        actions: hc,
        from_client: true,
        payload_source: z.CLIENT_CLEAR_CHAT
      });
      k.bumpEntityKey('chat.web', 'chat.clear_window');
    },
    sendNewMessage: function(ec, fc) {
      fc = fc || sa;
      if (!ec.client_state || ec.client_state == y.SEND_TO_SERVER) ha.getServerIDs(ec.forward_message_ids || [], function(gc) {
        var hc = v.tokenize(ec.thread_id),
          ic = hc.type,
          jc = oa({}, ec);
        jc.forward_message_ids = gc;
        if ((ic == 'root' && hc.value == jc.message_id) || (ic == 'user')) {
          jc.client_thread_id = jc.thread_id;
          jc.thread_id = null;
          this._sendNewMessageToServer(jc, fc);
        } else xa(this, jc.thread_id, function(kc) {
          hc = v.tokenize(jc.thread_id);
          if (hc.type == 'user') {
            jc.other_user_fbid = hc.values;
          } else jc.thread_fbid = kc;
          jc.thread_id = null;
          this._sendNewMessageToServer(jc);
        }.bind(this));
      }.bind(this));
    },
    _sendNewMessageToServer: function(ec, fc) {
      g.inform(l.ATTEMPT_RECONNECT);
      fc = fc || sa;
      this._sentMessagesTimestamp[ec.message_id] = Date.now();
      da.getForFBID(this._fbid).enqueue(db(ec), this._sendMessageQueueOptions, fc, ec);
    },
    requestMessageConfirmation: function(ec, fc) {
      fc = fc || sa;
      var gc = {},
        hc = {};
      for (var ic in ec) {
        var jc = ya(this, ic);
        if (jc) {
          gc[jc] = ec[ic];
        } else {
          var kc = ec[ic];
          for (var lc = 0; lc < kc.length; lc++) hc[kc[lc]] = ic;
        }
      }
      var mc = Object.keys(gc),
        nc = Object.keys(hc);
      if (mc.length || nc.length) dc(this, '/ajax/mercury/confirm_messages.php', {
        thread_message_map: gc,
        local_messages: hc,
        client: fc
      });
    },
    handleMessageConfirmError: function(ec) {
      var fc = ec.getRequest().getData().thread_message_map,
        gc = ec.getRequest().getData().local_messages;
      if (!fc && !gc) return;
      var hc = [];
      for (var ic in fc) {
        var jc = fc[ic];
        jc.forEach(function(mc) {
          hc.push({
            action_type: q.SEND_MESSAGE,
            client_message_id: mc,
            message_id: mc,
            client_thread_id: null,
            thread_fbid: ic,
            status: p.UNABLE_TO_CONFIRM
          });
        });
      }
      for (var kc in gc) {
        var lc = gc[kc];
        hc.push({
          action_type: q.SEND_MESSAGE,
          client_message_id: kc,
          message_id: kc,
          client_thread_id: lc,
          thread_fbid: null,
          status: p.UNABLE_TO_CONFIRM
        });
      }
      if (hc.length) this.handleUpdate({
        actions: hc,
        payload_source: z.CLIENT_HANDLE_ERROR
      });
    },
    markSeen: function() {
      var ec = this._lastActionTimestamp;
      dc(this, '/ajax/mercury/mark_seen.php', {
        seen_timestamp: ec
      });
    },
    handleRoger: function(ec) {
      var fc = ec.thread_fbid ? this._FBIDToClientIDs.getResource(ec.thread_fbid) : v.getThreadIDFromUserID(ec.reader);
      if (fc) {
        var gc = v.getParticipantIDFromUserID(ec.reader),
          hc = {};
        hc[fc] = {};
        hc[fc][gc] = ec.time;
        this.inform('update-roger', hc);
      }
    },
    handleUpdateWaitForThread: function(ec, fc, gc) {
      gc = gc || sa;
      var hc = this._FBIDToClientIDs.getResource(fc);
      if (hc) {
        this.handleUpdate(ec);
        return;
      }
      this._FBIDToClientIDs.executeOrEnqueue(fc, function() {
        this._pendingUpdates.push(ec);
      }.bind(this));
      if (!this._fetchingThreads[fc]) {
        this._fetchingThreads[fc] = true;
        var ic = {
          threads: {
            thread_fbids: [fc]
          },
          client: gc
        };
        if (this.isUser(fc)) ic = {
          threads: {
            user_ids: [fc]
          },
          client: gc
        };
        dc(this, '/ajax/mercury/thread_info.php', ic);
      }
    },
    handleUpdate: function(ec) {
      var fc = [];
      if (ec && ec.threads)
        for (var gc = 0; gc < ec.threads.length; gc++) {
          if (!ec.threads[gc].snippet_attachments) continue;
          for (var hc = 0; hc < ec.threads[gc].snippet_attachments.length; hc++)
            if (ec.threads[gc].snippet_attachments[hc].share_xhp) {
              fc.push({
                i: gc,
                j: hc,
                xhp: ec.threads[gc].snippet_attachments[hc].share_xhp
              });
              ec.threads[gc].snippet_attachments[hc].share_xhp = "HTMLDivElement not shown: object contains circular " + "reference, which was breaking JSON.stringify. " + "Look at MercuryServerRequests.handleUpdate";
            }
        }
      var ic = {
        actions: [],
        threads: []
      };
      if (ec) {
        if (ec.actions) ic.actions = ec.actions.map(function(lc) {
          return w.obfuscateMessage(lc);
        });
        if (ec.threads) ic.threads = ec.threads.map(function(lc) {
          return w.obfuscateThread(lc);
        });
      }
      var jc = oa({}, ec, ic);
      ra.debug('update:' + ec.payload_source, {
        payload: jc,
        from_client: ec.from_client
      });
      for (var kc = 0; kc < fc.length; kc++) ec.threads[fc[kc].i].snippet_attachments[fc[kc].j].share_xhp = fc[kc].xhp;
      for (kc in ec) {
        na.getForFBID(this._fbid).synchronizeInforms(function() {
          if (!ec.from_client) {
            ib(this, ec);
            this.inform('payload-preprocessed', ec);
          }
          this.inform('update-thread-ids', this._newlyAddedClientIDs);
          this._newlyAddedClientIDs = {};
          this.inform('update-participants', ec);
          this.inform('update-threads', ec);
          this.inform('update-unread', ec);
          this.inform('update-threadlist', ec);
          this.inform('update-pinned-threads', ec);
          this.inform('update-messages', ec);
          this.inform('update-unseen', ec);
          this.inform('update-typing-state', ec);
          this.inform('update-roger', ec.roger);
          this.inform('model-update-completed', null);
          jb(this);
        }.bind(this));
        break;
      }
    },
    _handleSendMessageErrorCommon: function(ec, fc, gc, hc) {
      ra.debug('handle_send_message_error_common', {
        reliability_error_status: gc,
        request_error_status: fc
      });
      var ic = ec.getData(),
        jc = ic.message_batch,
        kc = jc.map(function(mc) {
          var nc = {
            action_type: q.SEND_MESSAGE,
            thread_fbid: mc.thread_fbid,
            client_message_id: mc.message_id,
            message_id: mc.message_id,
            client_thread_id: mc.client_thread_id,
            status: fc,
            error_data: hc
          };
          return nc;
        });
      kc.forEach(function(mc) {
        eb(this, mc, gc);
      }, this);
      var lc = {
        actions: kc,
        payload_source: z.CLIENT_HANDLE_ERROR
      };
      this.handleUpdate(lc);
    },
    handleSendMessageError: function(ec) {
      var fc = ec.getPayload(),
        gc = null,
        hc = null;
      if (fc && fc.error_payload) {
        gc = p.UNCONFIRMED;
        hc = 'send_error';
      } else {
        gc = p.ERROR;
        hc = 'request_error' + fb(ec);
      }
      var ic = ec.error;
      if (ic === 1404102) i.verboseErrorHandler(ec);
      var jc = /<.*>/.test(ec.getErrorDescription()) ? ec.getErrorSummary() : ec.getErrorDescription();
      this._handleSendMessageErrorCommon(ec.getRequest(), gc, hc, {
        type: t.SERVER,
        code: ec.getError(),
        description: jc,
        is_transient: ec.isTransient()
      });
    },
    handleSendMessageTransportError: function(ec) {
      this._handleSendMessageErrorCommon(ec.getRequest(), p.ERROR, 'transport_error' + fb(ec), {
        type: t.TRANSPORT,
        code: ec.getError(),
        is_transient: true
      });
    },
    handleSendMessageTimeout: function(ec) {
      this._handleSendMessageErrorCommon(ec, p.ERROR, 'transport_timeout', {
        type: t.TIMEOUT,
        is_transient: true
      });
    },
    getLastActionTimestamp: function() {
      return this._lastActionTimestamp;
    }
  });
  oa(rb, ea);

  function sb(ec) {
    return {
      action_type: q.LOG_MESSAGE,
      thread_id: ec,
      message_id: ec,
      timestamp: Date.now(),
      timestamp_absolute: '',
      timestamp_relative: '',
      is_unread: false,
      source: fa.UNKNOWN,
      log_message_type: x.SERVER_ERROR,
      log_message_data: {}
    };
  }

  function tb(ec) {
    var fc = ec.getData(),
      gc = fc.request_user_id ? fc.request_user_id : m.getID();
    return rb.getForFBID(gc);
  }

  function ub(ec, fc) {
    tb(fc).handleUpdate(ec);
  }

  function vb(ec, fc) {
    var gc = {};
    oa(gc, ec.ids);
    oa(gc, fc.ids);
    var hc = ec.client || fc.client;
    return {
      ids: gc,
      client: hc
    };
  }

  function wb(ec, fc) {
    return fc;
  }

  function xb(ec) {
    var fc = tb(ec.getRequest());
    fc.handleThreadInfoError(ec);
  }

  function yb(ec) {
    var fc = tb(ec.getRequest());
    fc.handleSendMessageError(ec);
  }

  function zb(ec) {
    var fc = tb(ec.getRequest());
    fc.handleSendMessageTransportError(ec);
  }

  function ac(ec) {
    var fc = tb(ec);
    fc.handleSendMessageTimeout(ec);
  }

  function bc(ec) {
    var fc = tb(ec.getRequest());
    fc.handleMessageConfirmError(ec);
  }

  function cc(ec) {
    var fc = {
      '/ajax/mercury/thread_sync.php': {
        request_user_id: ec._fbid,
        mode: la.IDEMPOTENT,
        handler: ub
      },
      '/ajax/mercury/thread_info.php': {
        request_user_id: ec._fbid,
        mode: la.BATCH_DEFERRED_MULTI,
        batch_function: kb,
        handler: ub,
        error_handler: xb
      },
      '/ajax/mercury/mark_folder_as_read.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub
      },
      '/ajax/mercury/change_read_status.php': {
        request_user_id: ec._fbid,
        mode: la.BATCH_SUCCESSIVE,
        batch_function: vb,
        handler: ub
      },
      '/ajax/mercury/mark_seen.php': {
        request_user_id: ec._fbid,
        mode: la.BATCH_SUCCESSIVE,
        batch_function: wb,
        handler: ub
      },
      '/ajax/mercury/confirm_messages.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub,
        error_handler: bc
      },
      '/ajax/mercury/threadlist_info.php': {
        request_user_id: ec._fbid,
        mode: la.BATCH_SUCCESSIVE_UNIQUE,
        batch_function: mb,
        handler: ub
      },
      '/ajax/mercury/mark_spam.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub
      },
      '/ajax/mercury/mark_spam_messages.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub
      },
      '/ajax/mercury/unmark_spam.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub
      },
      '/ajax/mercury/unread_threads.php': {
        request_user_id: ec._fbid,
        mode: la.BATCH_SUCCESSIVE_UNIQUE,
        batch_function: lb,
        handler: ub
      },
      '/ajax/chat/settings.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE
      },
      '/ajax/mercury/change_archived_status.php': {
        request_user_id: ec._fbid,
        mode: la.BATCH_SUCCESSIVE,
        batch_function: ob,
        handler: ub
      },
      '/ajax/mercury/delete_thread.php': {
        request_user_id: ec._fbid,
        mode: la.BATCH_SUCCESSIVE,
        batch_function: qb,
        handler: ub
      },
      '/ajax/mercury/delete_messages.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub
      },
      '/ajax/mercury/delivery_receipts.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub
      },
      '/ajax/mercury/move_thread.php': {
        request_user_id: ec._fbid,
        mode: la.BATCH_SUCCESSIVE,
        batch_function: pb,
        handler: ub
      },
      '/ajax/mercury/change_mute_thread.php': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub
      },
      '/mercury/pinned_threads/': {
        request_user_id: ec._fbid,
        mode: la.BATCH_SUCCESSIVE_UNIQUE,
        handler: ub
      },
      '/mercury/unpin_thread/': {
        request_user_id: ec._fbid,
        mode: la.IMMEDIATE,
        handler: ub
      }
    };
    la.registerEndpoints(fc);
  }

  function dc(ec, fc, gc, hc) {
    la.trySend(fc, gc, hc, ec._fbid);
  }
  e.exports = rb;
}, null);
__d("MercuryThreads", ["EventEmitter", "ImmutableObject", "KeyedCallbackManager", "LogHistory", "Map", "MercuryActionType", "MercuryAssert", "MercuryAttachment", "MercuryGlobalActionType", "MercuryIDs", "MercuryLogMessageType", "MercuryLoggingHelper", "MercuryPayloadSource", "MercurySingletonMixin", "MercuryThreadMode", "MessagingTag", "ReportState", "MercuryServerRequests", "Set", "MercuryThreadInformer", "setImmediate"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
  'use strict';
  var ba = new g(),
    ca = j.getInstance('mercury_threads');

  function da(ea) {
    this.$MercuryThreads0 = ea;
    this.$MercuryThreads1 = x.getForFBID(this.$MercuryThreads0);
    this.$MercuryThreads2 = z.getForFBID(this.$MercuryThreads0);
    this.$MercuryThreads3 = p.getParticipantIDFromUserID(this.$MercuryThreads0);
    this.$MercuryThreads4 = false;
    this.$MercuryThreads5 = new i();
    this.$MercuryThreads6 = new y();
    this.$MercuryThreads7 = false;
    this.$MercuryThreads8 = new y();
    this.$MercuryThreads9 = new y();
    this.$MercuryThreadsa();
  }
  da.prototype.getThreadMetaNow = function(ea) {
    m.isThreadID(ea);
    return this.$MercuryThreads5.getResource(ea);
  };
  da.prototype.getOrFetch = function(ea) {
    var fa = this.getThreadMetaNow(ea);
    if (!fa && !this.$MercuryThreads9.has(ea)) this.$MercuryThreads8.add(ea);
    if (this.$MercuryThreads8.size > 0 && !this.$MercuryThreads7) this.$MercuryThreadsb();
    return fa;
  };
  da.prototype.$MercuryThreadsb = function() {
    if (this.$MercuryThreads7) return;
    this.$MercuryThreads7 = true;
    aa(function() {
      this.$MercuryThreads7 = false;
      this.$MercuryThreads8.forEach(function(ea) {
        return this.$MercuryThreads9.add(ea);
      }.bind(this));
      this.getMultiThreadMeta(Array.from(this.$MercuryThreads8), function(ea) {
        for (var fa in ea) ea.hasOwnProperty(fa) && this.$MercuryThreads9["delete"](fa);
      }.bind(this));
      this.$MercuryThreads8.clear();
    }.bind(this));
  };
  da.prototype.getThreadMeta = function(ea, fa, ga) {
    return this.getMultiThreadMeta([ea], function(ha) {
      return fa(ha[ea]);
    }, ga);
  };
  da.prototype.getMultiThreadMeta = function(ea, fa, ga) {
    m.allThreadID(ea);
    var ha = this.$MercuryThreads5.executeOrEnqueue(ea, fa),
      ia = this.$MercuryThreads5.getUnavailableResources(ha);
    if (ia.length) {
      var ja = [];
      for (var ka = 0; ka < ia.length; ka++) {
        var la = ia[ka],
          ma = p.tokenize(la),
          na = ma.type,
          oa = ma.value;
        if (na == 'user') {
          this.createNewLocalThread(la, [this.$MercuryThreads3, p.getParticipantIDFromUserID(oa)]);
        } else ja.push(la);
      }
      if (ja.length) this.$MercuryThreads1.fetchThreadData(ja, ga);
    }
    return ha;
  };
  da.addListener = function(ea, fa) {
    return ba.addListener(ea, fa);
  };
  da.prototype.unsubscribe = function(ea) {
    this.$MercuryThreads5.unsubscribe(ea);
  };
  da.prototype.getCanonicalThreadToParticipant = function(ea, fa, ga, ha) {
    var ia = p.getThreadIDFromParticipantID(ea),
      ja = this.$MercuryThreads5.getResource(ia);
    if (typeof ja == 'undefined') {
      ja = this.createNewLocalThread(ia, [this.$MercuryThreads3, ea], fa);
      !ha && this.$MercuryThreads1.fetchThreadData([ia], ga);
    }
    return ja;
  };
  da.prototype.createNewLocalThread = function(ea, fa, ga) {
    var ha = this.$MercuryThreads5.getResource(ea);
    if (!ha) {
      var ia = p.tokenize(ea),
        ja = ia.type,
        ka = ia.value;
      ha = new h({
        thread_id: ea,
        last_action_id: null,
        participants: Array.from(fa),
        name: null,
        snippet: '',
        snippet_has_attachment: false,
        snippet_sender: null,
        unread_count: ga ? ga : 0,
        message_count: 0,
        image_src: null,
        timestamp_absolute: null,
        timestamp_relative: null,
        timestamp: null,
        canonical_fbid: ja === 'user' ? ka : null,
        is_canonical_user: ja == 'user',
        is_canonical: this.$MercuryThreadsc(fa),
        is_subscribed: true,
        root_message_threading_id: null,
        folder: v.INBOX,
        is_archived: false,
        mode: u.TITAN_ORIGINATED
      });
      this.$MercuryThreads5.setResource(ea, ha);
    }
    return ha;
  };
  da.prototype.isEmptyLocalThread = function(ea) {
    var fa = this.$MercuryThreads5.getResource(ea);
    if (!fa) return false;
    var ga = p.tokenize(ea),
      ha = ga.type;
    return ha == 'root' && !fa.timestamp;
  };
  da.prototype.isNewEmptyLocalThread = function(ea) {
    if (!this.isEmptyLocalThread(ea)) return false;
    var fa = this.$MercuryThreads5.getResource(ea);
    return !!fa.participants && fa.participants.length === 0;
  };
  da.prototype.canReply = function(ea) {
    var fa = this.$MercuryThreads5.getResource(ea);
    return !!(fa && fa.is_subscribed && fa.mode != u.OBJECT_ORIGINATED && !fa.has_email_participant && !fa.read_only && (fa.recipients_loadable || fa.recipients_loadable === (void 0)));
  };
  da.prototype.$MercuryThreadsd = function(ea, fa) {
    if (!ea || !ea.length) return;
    var ga = new k(),
      ha = new k(),
      ia = new k(),
      ja = [];
    for (var ka = 0; ka < ea.length; ka++) {
      var la = ea[ka];
      if (la.is_forward) continue;
      var ma = la.action_type;
      if (ma == l.LOG_MESSAGE && la.log_message_type == q.SERVER_ERROR) continue;
      var na = !!(la.sync_id || la.action_id),
        oa = la.thread_id;
      m.isThreadID(oa);
      var pa = this.$MercuryThreads5.getResource(oa);
      if (!pa && !na && ma == l.USER_GENERATED_MESSAGE) {
        pa = this.$MercuryThreadse(la);
        this.$MercuryThreads5.setResource(oa, pa);
      }
      if (!pa) continue;
      if (ma == l.LOG_MESSAGE || ma == l.USER_GENERATED_MESSAGE) na = !fa;
      if (pa.server_timestamp && la.timestamp <= pa.server_timestamp && na) continue;
      if (!ia.has(oa)) ia.set(oa, Object.assign({}, pa));
      this.$MercuryThreadsf(ia.get(oa), la, fa);
      if (ma == l.USER_GENERATED_MESSAGE) ga.set(oa, la);
      if (ma == l.USER_GENERATED_MESSAGE || ma == l.LOG_MESSAGE || ma == l.SEND_MESSAGE)
        if (la && la.timestamp && (!ha.has(oa) || la.timestamp > ha.get(oa).timestamp)) ha.set(oa, la);
    }
    ia.forEach(function(qa, ra) {
      var sa = ga.get(ra);
      if (sa) this.$MercuryThreadsg(qa, sa);
      var ta = ha.get(ra),
        ua = qa.timestamp;
      if (ta) {
        if (ta.timestamp > ua) Object.assign(qa, {
          timestamp_absolute: ta.timestamp_absolute,
          timestamp_relative: ta.timestamp_relative,
          timestamp: ta.timestamp
        });
        var va = qa.server_timestamp;
        if (!fa && ta.timestamp > va) qa.server_timestamp = ta.timestamp;
      }
      var wa = new h(qa);
      this.$MercuryThreads5.setResource(ra, wa);
      ja.push(r.obfuscateThread(wa));
    }.bind(this), this);
    ja.length && ca.debug('threads_updated', {
      threads: ja
    });
  };
  da.prototype.$MercuryThreadsf = function(ea, fa, ga) {
    var ha = fa.action_type;
    if (ha == l.USER_GENERATED_MESSAGE || ha == l.LOG_MESSAGE) {
      fa.is_unread && ea.unread_count++;
      ea.message_count++;
      ea.is_archived = false;
    }
    switch (ha) {
      case l.DELETE_THREAD:
        ea.message_count = 0;
        this.$MercuryThreadsh(fa.thread_id);
        break;
      case l.USER_GENERATED_MESSAGE:
        if (ea.last_read_timestamp >= fa.timestamp) this.$MercuryThreadsi(ea, fa, true);
        this.$MercuryThreadsj(ea, fa.author);
        break;
      case l.SEND_MESSAGE:
        var ia = fa.log_message_type;
        if (ia == q.THREAD_IMAGE) ea.image_src = fa.log_message_data.image ? fa.log_message_data.image.preview_url : null;
        ea.snippet_attachments = fa.attachments;
        break;
      case l.LOG_MESSAGE:
        var ia = fa.log_message_type;
        if (ia == q.SUBSCRIBE) {
          this.$MercuryThreadsk(ea, fa.log_message_data.added_participants);
        } else if (ia == q.UNSUBSCRIBE) {
          this.$MercuryThreadsl(ea, fa.log_message_data.removed_participants);
        } else if (ia == q.THREAD_IMAGE) {
          if (!ga) ea.image_src = fa.log_message_data.image ? fa.log_message_data.image.preview_url : null;
        } else if (ia == q.THREAD_NAME) ea.name = fa.log_message_data.name;
        break;
      case l.CHANGE_READ_STATUS:
        var ja = this.$MercuryThreadsi(ea, fa, fa.mark_as_read);
        if (ja && fa.timestamp) ea.last_read_timestamp = fa.timestamp;
        if (ja && ga) this.$MercuryThreads1.changeThreadReadStatus(ea.thread_id, fa.mark_as_read, fa.source);
        break;
      case l.CLEAR_CHAT:
        this.$MercuryThreadsm(ea, fa.clear_time);
        break;
      case l.CHANGE_ARCHIVED_STATUS:
        if (ea.is_archived != fa.archived) {
          ea.is_archived = fa.archived;
          this.$MercuryThreadsn(fa.thread_id);
        }
        break;
      case l.CHANGE_FOLDER:
        if (ea.folder != fa.new_folder) {
          ea.folder = fa.new_folder;
          this.$MercuryThreadsn(fa.thread_id);
        }
        break;
      case l.DELETE_MESSAGES:
        if (ga) {
          ea.snippet = '...';
          ea.snippet_has_attachment = false;
          ea.snippet_attachments = null;
          ea.snippet_sender = null;
          ea.is_forwarded_snippet = false;
          this.$MercuryThreadsn(fa.thread_id);
        } else if (fa.message_ids) ea.message_count = ea.message_count - fa.message_ids.length;
        break;
      case l.CHANGE_MUTE_SETTINGS:
        if (fa.mute_settings !== (void 0)) {
          var ka = this.$MercuryThreads0 + '@facebook.com';
          if (ea.mute_settings) {
            if (fa.mute_settings) {
              var la = {};
              la[ka] = fa.mute_settings;
              ea.mute_settings = Object.assign({}, ea.mute_settings, la);
            } else {
              ea.mute_settings = Object.assign({}, ea.mute_settings);
              delete ea.mute_settings[ka];
            }
            this.$MercuryThreadsn(ea.thread_id);
          }
        }
        break;
      case l.ADD_PARTICIPANTS:
        this.$MercuryThreadsk(ea, fa.participants);
        this.$MercuryThreadsn(ea.thread_id);
        break;
    }
  };
  da.prototype.$MercuryThreadse = function(ea) {
    var fa = p.tokenize(ea.thread_id),
      ga = fa.type,
      ha = fa.value,
      ia = this.$MercuryThreadsc(ea.specific_to_list);
    return new h({
      thread_id: ea.thread_id,
      last_action_id: null,
      participants: ea.specific_to_list,
      name: null,
      snippet: ea.body,
      snippet_has_attachment: false,
      snippet_attachments: [],
      snippet_sender: ea.author,
      unread_count: 0,
      message_count: 0,
      image_src: null,
      timestamp_absolute: ea.timestamp_absolute,
      timestamp_relative: ea.timestamp_relative,
      timestamp: ea.timestamp,
      canonical_fbid: ga === 'user' ? ha : null,
      is_canonical_user: ga === 'user',
      is_canonical: ia,
      is_subscribed: true,
      root_message_threading_id: ea.message_id,
      folder: v.INBOX,
      is_archived: false,
      mode: u.TITAN_ORIGINATED
    });
  };
  da.prototype.$MercuryThreadsi = function(ea, fa, ga) {
    if (fa.timestamp) this.$MercuryThreadso(ea.thread_id, ga, fa.timestamp);
    if (!ea || !ea.thread_id) return false;
    if (!ea.timestamp) {
      this.$MercuryThreads6.add(ea.thread_id);
      return false;
    }
    var ha = !ea.unread_count;
    if (ga == ha) return false;
    ea.unread_count = ga ? 0 : 1;
    this.$MercuryThreadsn(ea.thread_id);
    return true;
  };
  da.prototype.$MercuryThreadsp = function(ea) {
    var fa = this.$MercuryThreads5.getAllResources();
    for (var ga in fa)
      if (fa.hasOwnProperty(ga)) {
        var ha = fa[ga];
        if (ha.folder == ea) {
          this.$MercuryThreads5.setResource(ga, h.setProperty(ha, 'unread_count', 0));
          this.$MercuryThreadsn(ga);
        }
      }
  };
  da.prototype.$MercuryThreadsm = function(ea, fa) {
    if (!ea || ea.chat_clear_time === fa) return;
    ea.chat_clear_time = fa;
    this.$MercuryThreads2.reorderedMessages(ea.thread_id);
  };
  da.prototype.$MercuryThreadsk = function(ea, fa) {
    var ga = new y(ea.participants);
    ea.participants = Array.from(ea.participants);
    fa.forEach(function(ha) {
      if (!ga.has(ha)) {
        ea.participants.push(ha);
        if (ha === this.$MercuryThreads3) ea.is_subscribed = true;
      }
    }.bind(this));
  };
  da.prototype.$MercuryThreadsl = function(ea, fa) {
    var ga = new y(fa);
    ea.participants = ea.participants.filter(function(ha) {
      return !ga.has(ha);
    });
    if (ga.has(this.$MercuryThreads3)) ea.is_subscribed = false;
  };
  da.prototype.$MercuryThreadsj = function(ea, fa) {
    if (ea.participants[0] != fa) {
      ea.participants = ea.participants.filter(function(ga) {
        return ga != fa;
      });
      ea.participants.unshift(fa);
    }
  };
  da.prototype.$MercuryThreadsg = function(ea, fa) {
    var ga = fa.body,
      ha = fa.subject,
      ia = '';
    if (ha) {
      ha = ha.toLowerCase();
      if (ga.slice(0, ha.length).toLowerCase() == ha) {
        ia = ga;
      } else if (ga) {
        ia = ha + ' \u00B7 ' + ga;
      } else ia = ha;
    } else ia = ga;
    ea.snippet = ia;
    ea.snippet_has_attachment = fa.has_attachment;
    if (fa.raw_attachments && fa.raw_attachments.length > 0) {
      var ja = n.convertRaw(fa.raw_attachments);
      ea.snippet_attachments = ja;
    } else ea.snippet_attachments = fa.attachments;
    ea.is_forwarded_snippet = !!fa.forward_count;
    ea.snippet_sender = fa.author;
  };
  da.prototype.$MercuryThreadsc = function(ea) {
    return ea.filter(function(fa) {
      return fa != this.$MercuryThreads3;
    }.bind(this)).length <= 1;
  };
  da.prototype.$MercuryThreadsa = function() {
    this.$MercuryThreads1.subscribe('update-threads', function(ea, fa) {
      var ga = (fa.actions || []).filter(function(ha) {
        return ha.thread_id;
      });
      if (fa.threads && fa.payload_source == s.SERVER_FETCH_THREAD_INFO) fa.threads.forEach(function(ha) {
        var ia = ha.thread_id;
        if (this.$MercuryThreads6.has(ia)) {
          this.$MercuryThreads6["delete"](ia);
          if (ha.unread_count) this.$MercuryThreads1.changeThreadReadStatus(ha.thread_id, true);
        }
      }.bind(this));
      this.$MercuryThreadsq(fa.threads);
      this.$MercuryThreadsd(ga, fa.from_client);
      fa.threads && fa.threads.forEach(function(ha) {
        this.$MercuryThreadsn(ha.thread_id);
      }.bind(this));
      if (fa.global_actions) fa.global_actions.forEach(function(ha) {
        if (ha.action_type == o.MARK_ALL_READ) this.$MercuryThreadsp(ha.folder);
      }.bind(this));
      if (this.$MercuryThreads4) {
        this.$MercuryThreads4 = false;
        ba.emit('change');
      }
    }.bind(this));
  };
  da.prototype.$MercuryThreadsq = function(ea) {
    if (!ea || !ea.length) return;
    var fa = {},
      ga = [];
    ea.forEach(function(ha) {
      var ia = new h(ha);
      fa[ha.thread_id] = ia;
      ga.push(r.obfuscateThread(ia));
    });
    ga.length && ca.debug('threads_added', {
      threads: ga
    });
    this.$MercuryThreads5.addResourcesAndExecute(fa);
  };
  da.prototype.$MercuryThreadsn = function(ea) {
    this.$MercuryThreads4 = true;
    this.$MercuryThreads2.updatedThread(ea);
  };
  da.prototype.$MercuryThreadsh = function(ea) {
    this.$MercuryThreads4 = true;
    this.$MercuryThreads2.deletedThread(ea);
  };
  da.prototype.$MercuryThreadso = function(ea, fa, ga) {
    this.$MercuryThreads4 = true;
    this.$MercuryThreads2.changedThreadReadState(ea, fa, ga);
  };
  da.prototype.dumpResourcesDO_NOT_USE = function() {
    return this.$MercuryThreads5.dumpResources();
  };
  Object.assign(da, t);
  w.registerCallback('mercury-threads', function() {
    var ea = {};
    ea.threads = {};
    var fa = da._getInstances();
    for (var ga in fa) ea.threads[ga] = fa[ga].dumpResourcesDO_NOT_USE();
    return ea;
  });
  e.exports = da;
}, null);
__d("WebMessengerPermalinkConstants", ["URI"], function(a, b, c, d, e, f, g) {
  var h = {
    ARCHIVED_PATH: '/messages/archived',
    BASE_PATH: '/messages',
    OTHER_PATH: '/messages/other',
    SPAM_PATH: '/messages/spam',
    COMPOSE_POSTFIX_PATH: '/new',
    SEARCH_POSTFIX_PATH: '/search',
    TID_POSTFIX_PARTIAL_PATH: '/conversation-',
    overriddenVanities: '(archived|other|spam|new|search|conversation-.*)',
    getURIPathForThreadID: function(i, j) {
      return (j || h.BASE_PATH) + h.TID_POSTFIX_PARTIAL_PATH + g.encodeComponent(g.encodeComponent(i));
    },
    getThreadIDFromURI: function(i) {
      var j = i.getPath().match(h.BASE_PATH + '(/[^/]*)*' + h.TID_POSTFIX_PARTIAL_PATH + '([^/]+)');
      if (j) {
        var k = g.decodeComponent(g.decodeComponent(j[2]));
        return k;
      }
    },
    getURIPathForIDOrVanity: function(i, j) {
      if (i.match('^' + h.overriddenVanities + '$')) i = '.' + i;
      return (j || h.BASE_PATH) + '/' + i;
    },
    getUserIDOrVanity: function(i) {
      var j = i.match(h.BASE_PATH + '.*/([^/]+)/?$'),
        k = j && j[1],
        l = h.overriddenVanities;
      if (!k || k.match('^' + l + '$')) {
        return false;
      } else if (k.match('^\\.' + l + '$')) {
        return k.substr(1);
      } else return k;
    }
  };
  e.exports = h;
}, null);
__d("ChatTypeaheadConstants", [], function(a, b, c, d, e, f) {
  var g = {
    USER_TYPE: 'user',
    THREAD_TYPE: 'thread',
    FRIEND_TYPE: 'friend',
    NON_FRIEND_TYPE: 'non_friend',
    FB4C_TYPE: 'fb4c',
    PAGE_TYPE: 'page',
    HEADER_TYPE: 'header'
  };
  e.exports = g;
}, null);
__d("ChatOpenTab", ["Event", "requireWeak", "ChatWelcomeMessage", "ContextualThing", "DOM", "csx", "cx", "MercuryIDs", "Parent", "curry"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var q = null;
  h(['ChatApp'], function(aa) {
    return q = aa;
  });
  var r = null;
  h(['ChatTabModel'], function(aa) {
    return r = aa;
  });
  var s = 716,
    t = 'messaging_tracking';

  function u() {
    d(['Toggler'], function(aa) {
      var ba = aa.getInstance(k.scry(document, "div._1z4y")[0]);
      if (ba && ba.getActive()) ba.hide();
    });
  }

  function v(aa, ba) {
    d(['LogHistory', 'MercuryThreads', 'WebMessengerPermalinkConstants', 'goURI'], function(ca, da, ea, fa) {
      da.get().getThreadMeta(aa, function(ga) {
        if (q && q.isInitialized()) {
          q.tabController.openTab(aa, q.tabsViewport, ba);
        } else fa(ea.getURIPathForThreadID(aa));
        if (!z.canOpenTab()) ca.getInstance('mercury').error('Unable to open chat tab', ga);
      });
    });
    if (document.documentElement.clientHeight <= s) u();
  }

  function w(aa, ba, ca, da) {
    g.listen(aa, 'click', function(ea) {
      if (z.canOpenTab()) {
        da(ba, ca);
        return ea.kill();
      }
    });
  }

  function x(aa, ba, ca, da) {
    var ea = {
      referrer: aa || '',
      message_thread_id: ba,
      message_view: 'chat',
      timestamp_send: Date.now()
    };
    if (ca !== (void 0)) ea.message_target_ids = [ca];
    d(['ChatImpressionLogger'], function(fa) {
      fa.logImpression(aa, ca, da);
    });
    d(['Banzai'], function(fa) {
      fa.post(t, ea, {
        delay: 0,
        retry: true
      });
    });
  }

  function y(aa) {
    var ba = j.getContext(aa);
    return (ba && o.byClass(ba, "_3qw") !== null);
  }
  var z = {
    canOpenTab: function() {
      return q && !q.isHidden();
    },
    openEmptyTab: function(aa, ba, ca) {
      if (z.canOpenTab() && r) {
        var da = r.getEmptyTab();
        v(da);
        x(ba, da, null, ca);
        u();
        return da;
      }
      return null;
    },
    listenOpenEmptyTab: function(aa, ba) {
      w(aa, null, ba, z.openEmptyTab);
    },
    openThread: function(aa, ba, ca, da) {
      d(['MercuryServerRequests'], function(ea) {
        if (n.isValid(aa)) {
          v(aa);
        } else ea.get().getClientThreadID(aa, function(fa) {
          return v(fa, da);
        });
        x(ba, aa, null, ca);
        u();
      });
    },
    listenOpenThread: function(aa, ba, ca) {
      w(aa, ba, ca, z.openThread);
    },
    openUserTab: function(aa, ba, ca) {
      var da = n.getThreadIDFromUserID(aa);
      v(da);
      x(ba, da, aa, ca);
      return true;
    },
    openPageTab: function(aa, ba, ca) {
      d(['MercuryThreads'], function(da) {
        var ea = n.getThreadIDFromUserID(ba);
        da.get().getThreadMeta(ea, function(fa) {
          if (aa && aa.length > 0) {
            var ga = (Date.now() - fa.timestamp) / 1000,
              ha = ga / 3600;
            if (fa.message_count === 0 || ha > 24) i.setWelcomeMessage(ea, n.getParticipantIDFromUserID(ba), aa);
          }
        });
        v(ea);
        x(ca, ea, ba);
      });
      return true;
    },
    listenOpenUserTab: function(aa, ba, ca) {
      if (!y(aa)) w(aa, ba, ca, z.openUserTab);
    },
    listenOpenPageTab: function(aa, ba, ca, da) {
      if (!y(aa)) w(aa, ba, da, p(z.openPageTab, ca));
    },
    openTabByType: function(aa, ba, ca) {
      d(['ChatTypeaheadConstants', 'MercuryParticipantTypes'], function(da, ea) {
        if (ba === da.THREAD_TYPE) {
          if (aa) {
            z.openThread(aa, ca);
          } else z.openEmptyTab(null, ca);
        } else if (!ba || ba === ea.FRIEND || ba === da.FRIEND_TYPE || ba === da.PAGE_TYPE || ba === da.USER_TYPE) z.openUserTab(aa, ca);
      });
    }
  };
  e.exports = z;
}, null);
__d("SplitImage.react", ["React", "Image.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = g.createClass({
    displayName: "SplitImage",
    render: function() {
      var l = this.props.size;
      return (g.createElement("div", g.__spread({}, this.props, {
        className: j(this.props.className, "_55lt"),
        style: Object.assign({}, (this.props.style || {}), {
          width: l,
          height: l
        })
      }), this.renderImages()));
    },
    renderImages: function() {
      if (!this.props.srcs) return null;
      var l = this.props.srcs,
        m = Array.isArray(l);
      if (!m || l.length == 1) return this.renderOne(m ? l[0] : l);
      return l.length == 2 ? this.renderTwo(l) : this.renderThree(l);
    },
    renderOne: function(l) {
      return (g.createElement(h, {
        src: l,
        width: this.props.size,
        height: this.props.size,
        alt: ""
      }));
    },
    renderTwo: function(l) {
      var m = this.props.size,
        n = Math.floor(m / 2),
        o = -Math.floor(n / 2),
        p = (("_55lu") + (this.props.border ? ' ' + "_57xo" : ''));
      return (g.createElement("div", null, g.createElement("div", {
        className: "_55lu",
        style: {
          width: n
        }
      }, g.createElement(h, {
        src: l[0],
        width: m,
        height: m,
        style: {
          marginLeft: o
        }
      })), g.createElement("div", {
        className: p,
        style: {
          width: n
        }
      }, g.createElement(h, {
        src: l[1],
        width: m,
        height: m,
        style: {
          marginLeft: o
        }
      }))));
    },
    renderThree: function(l) {
      var m = this.props.size,
        n = Math.floor(m / 3 * 2),
        o = -Math.floor((m - n) / 2),
        p = Math.floor(m / 2),
        q = m - n,
        r = -Math.floor((p - q) / 2),
        s = (("_55lu") + (this.props.border ? ' ' + "_57pl" : '')),
        t = (("_55lu") + (this.props.border ? ' ' + "_57pm" : ''));
      return (g.createElement("div", null, g.createElement("div", {
        className: s,
        style: {
          width: n
        }
      }, g.createElement(h, {
        src: l[0],
        width: m,
        height: m,
        style: {
          marginLeft: o
        }
      })), g.createElement("div", {
        className: t,
        style: {
          width: q,
          height: p
        }
      }, g.createElement(h, {
        src: l[1],
        width: p,
        height: p,
        style: {
          marginLeft: r
        }
      })), g.createElement("div", {
        className: "_55lu",
        style: {
          width: q,
          height: p
        }
      }, g.createElement(h, {
        src: l[2],
        width: p,
        height: p,
        style: {
          marginLeft: r
        }
      }))));
    }
  });
  e.exports = k;
}, null);
__d("RangedCallbackManager", ["CallbackManagerController", "copyProperties", "createObjectFrom"], function(a, b, c, d, e, f, g, h, i) {
  var j = function(k, l, m) {
    this._resources = [];
    this._reachedEndOfArray = false;
    this._error = false;
    this._existingIDs = {};
    this._controller = new g(this._constructCallbackArg.bind(this));
    this._getValueHandler = k;
    this._compareValuesHandler = l;
    this._skipOnStrictHandler = m;
  };
  h(j.prototype, {
    executeOrEnqueue: function(k, l, m, n, o) {
      return this._controller.executeOrEnqueue({
        start: k,
        limit: l
      }, m, {
        strict: !!n,
        skipOnStrictHandler: o
      });
    },
    unsubscribe: function(k) {
      this._controller.unsubscribe(k);
    },
    getUnavailableResources: function(k) {
      var l = this._controller.getRequest(k),
        m = [];
      if (l && !this._reachedEndOfArray) {
        var n = l.request,
          o = this._filterForStrictResults(l.options),
          p = n.start + n.limit;
        for (var q = o.length; q < p; q++) m.push(q);
      }
      return m;
    },
    addResources: function(k) {
      k.forEach(function(l) {
        if (!this._existingIDs[l]) {
          this._existingIDs[l] = true;
          this._resources.push(l);
          this._error = null;
        }
      }.bind(this));
      this.resortResources();
      this._controller.runPossibleCallbacks();
    },
    addResourcesWithoutSorting: function(k, l) {
      var m = this._resources.slice(0, l);
      m = m.concat(k);
      m = m.concat(this._resources.slice(l));
      this._resources = m;
      h(this._existingIDs, i(k, true));
      this._error = null;
      this._controller.runPossibleCallbacks();
    },
    removeResources: function(k) {
      k.forEach(function(l) {
        if (this._existingIDs[l]) {
          this._existingIDs[l] = false;
          var m = this._resources.indexOf(l);
          if (m != -1) this._resources.splice(m, 1);
        }
      }.bind(this));
    },
    removeAllResources: function() {
      this._resources = [];
      this._existingIDs = {};
    },
    resortResources: function() {
      this._resources = this._resources.sort(function(k, l) {
        return this._compareValuesHandler(this._getValueHandler(k), this._getValueHandler(l));
      }.bind(this));
    },
    setReachedEndOfArray: function() {
      if (!this._reachedEndOfArray) {
        this._reachedEndOfArray = true;
        this._error = null;
        this._controller.runPossibleCallbacks();
      }
    },
    hasReachedEndOfArray: function() {
      return this._reachedEndOfArray;
    },
    setError: function(k) {
      if (this._error !== k) {
        this._error = k;
        this._controller.runPossibleCallbacks();
      }
    },
    getError: function(k, l, m) {
      var n = this._filterForStrictResults({
        strict: m
      });
      return k + l > n.length ? this._error : null;
    },
    hasResource: function(k) {
      return this._existingIDs[k];
    },
    getResourceAtIndex: function(k) {
      return this._resources[k];
    },
    getAllResources: function() {
      return this._resources.concat();
    },
    getCurrentArraySize: function(k) {
      return this._filterForStrictResults(k).length;
    },
    _filterForStrictResults: function(k) {
      var l = this._resources;
      if (k && k.strict) {
        var m = k.skipOnStrictHandler || this._skipOnStrictHandler;
        if (m) l = l.filter(m);
      }
      return l;
    },
    _constructCallbackArg: function(k, l) {
      var m = this._filterForStrictResults(l);
      if (!this._reachedEndOfArray && !this._error && k.start + k.limit > m.length) {
        return false;
      } else {
        var n = m.slice(k.start, k.start + k.limit),
          o = k.start + k.limit > m.length ? this._error : null;
        return [n, o];
      }
    },
    getElementsUntil: function(k) {
      var l = [];
      for (var m = 0; m < this._resources.length; m++) {
        var n = this._getValueHandler(this._resources[m]);
        if (this._compareValuesHandler(n, k) > 0) break;
        l.push(this._resources[m]);
      }
      return l;
    }
  });
  e.exports = j;
}, null);
__d("arraySort", ["invariant"], function(a, b, c, d, e, f, g) {
  function h(i, j) {
    g(Array.isArray(i));
    var k = i.slice();
    if (j) return k.sort(j);
    return k.sort();
  }
  e.exports = h;
}, null);
__d("mergeDeepInto", ["invariant", "mergeHelpers"], function(a, b, c, d, e, f, g, h) {
  "use strict";
  var i = h.ArrayStrategies,
    j = h.checkArrayStrategy,
    k = h.checkMergeArrayArgs,
    l = h.checkMergeLevel,
    m = h.checkMergeObjectArgs,
    n = h.isTerminal,
    o = h.normalizeMergeArg,
    p = function(t, u, v, w) {
      m(t, u);
      l(w);
      var x = u ? Object.keys(u) : [];
      for (var y = 0; y < x.length; y++) {
        var z = x[y];
        r(t, u, z, v, w);
      }
    },
    q = function(t, u, v, w) {
      k(t, u);
      l(w);
      var x = Math.max(t.length, u.length);
      for (var y = 0; y < x; y++) r(t, u, y, v, w);
    },
    r = function(t, u, v, w, x) {
      var y = u[v],
        z = u.hasOwnProperty(v),
        aa = z && n(y),
        ba = z && Array.isArray(y),
        ca = z && !ba && !ba,
        da = t[v],
        ea = t.hasOwnProperty(v),
        fa = ea && n(da),
        ga = ea && Array.isArray(da),
        ha = ea && !ga && !ga;
      if (fa) {
        if (aa) {
          t[v] = y;
        } else if (ba) {
          t[v] = [];
          q(t[v], y, w, x + 1);
        } else if (ca) {
          t[v] = {};
          p(t[v], y, w, x + 1);
        } else if (!z) t[v] = da;
      } else if (ga) {
        if (aa) {
          t[v] = y;
        } else if (ba) {
          g(i[w]);
          if (w === i.Clobber) da.length = 0;
          q(da, y, w, x + 1);
        } else if (ca) {
          t[v] = {};
          p(t[v], y, w, x + 1);
        } else !z;
      } else if (ha) {
        if (aa) {
          t[v] = y;
        } else if (ba) {
          t[v] = [];
          q(t[v], y, w, x + 1);
        } else if (ca) {
          p(da, y, w, x + 1);
        } else !z;
      } else if (!ea)
        if (aa) {
          t[v] = y;
        } else if (ba) {
        t[v] = [];
        q(t[v], y, w, x + 1);
      } else if (ca) {
        t[v] = {};
        p(t[v], y, w, x + 1);
      } else !z;
    },
    s = function(t, u, v) {
      var w = o(u);
      j(v);
      p(t, w, v, 0);
    };
  e.exports = s;
}, null);
__d("mergeDeep", ["mergeHelpers", "mergeDeepInto"], function(a, b, c, d, e, f, g, h) {
  "use strict";
  var i = g.checkArrayStrategy,
    j = g.checkMergeObjectArgs,
    k = g.normalizeMergeArg,
    l = function(m, n, o) {
      var p = k(m),
        q = k(n);
      j(p, q);
      i(o);
      var r = {};
      h(r, p, o);
      h(r, q, o);
      return r;
    };
  e.exports = l;
}, null);
__d("mergeObjects", ["copyProperties"], function(a, b, c, d, e, f, g) {
  function h() {
    var i = {};
    for (var j = 0; j < arguments.length; j++) g(i, arguments[j]);
    return i;
  }
  e.exports = h;
}, null);
__d("MercuryLocalIDs", ["PresenceUtil", "randomInt"], function(a, b, c, d, e, f, g, h) {
  'use strict';
  var i = {
    generateMessageID: function(j) {
      var k = j || Date.now(),
        l = h(0, 4294967295),
        m = g.getSessionID();
      return ("<" + k + ":" + l + "-" + m + "@mail.projektitan.com>");
    },
    generateThreadID: function(j) {
      return 'root:' + i.generateMessageID(j);
    }
  };
  e.exports = i;
}, null);
__d("MercuryMessageObject", ["MercuryActionStatus", "MercuryActionType", "MercuryIDs", "MercuryLocalIDs", "MercuryMessageClientState", "MercuryMessageSourceTags", "MercurySingletonMixin", "MercurySourceType", "MercuryTimePassed", "MercurySendMessageFields", "fbt", "formatDate"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  function s(v) {
    "use strict";
    this.$MercuryMessageObject0 = v;
  }
  s.prototype.constructUserGeneratedMessageObject = function(v, w, x, y, z) {
    "use strict";
    var aa = t(this.$MercuryMessageObject0, h.USER_GENERATED_MESSAGE, w, x);
    if (typeof v == 'string') v = v.replace(/^\s+/, '').replace(/\s+$/, '');
    aa.body = v;
    aa.has_attachment = false;
    aa.html_body = false;
    aa.attachments = [];
    aa.specific_to_list = y || [];
    aa.creator_info = z;
    return aa;
  };
  s.prototype.constructStickerMessageObject = function(v, w, x) {
    "use strict";
    var y = t(this.$MercuryMessageObject0, h.USER_GENERATED_MESSAGE, w, x);
    y.has_attachment = true;
    y.html_body = false;
    y.attachments = [];
    y.sticker_id = v;
    y.specific_to_list = [];
    return y;
  };
  s.prototype.constructAttachmentMessageObject = function(v, w) {
    "use strict";
    var x = t(this.$MercuryMessageObject0, h.USER_GENERATED_MESSAGE, v, w);
    x.attachments = [];
    x.specific_to_list = [];
    return x;
  };
  s.prototype.constructLogMessageObject = function(v, w, x, y) {
    "use strict";
    var z = t(this.$MercuryMessageObject0, h.LOG_MESSAGE, v, w);
    z.log_message_type = x;
    z.log_message_data = y;
    return z;
  };
  s.prototype.normalizeNewMessage = function(v) {
    "use strict";
    if (v.status === undefined) v.status = g.UNSENT;
    v.timestamp_absolute = "Today";
    v.message_id = v.message_id || j.generateMessageID(v.timestamp);
    var w = i.getParticipantIDFromUserID(this.$MercuryMessageObject0);
    v.specific_to_list = v.specific_to_list || [];
    if (v.specific_to_list.length && v.specific_to_list.indexOf(w) === -1) v.specific_to_list.push(w);
    if (!v.thread_id) {
      if (v.specific_to_list.length == 1) {
        v.thread_id = 'user:' + this.$MercuryMessageObject0;
      } else if (v.specific_to_list.length == 2) {
        var x = v.specific_to_list[0] == w ? v.specific_to_list[1] : v.specific_to_list[0];
        v.thread_id = i.getThreadIDFromParticipantID(x);
      }
      v.thread_id = v.thread_id || 'root:' + v.message_id;
    }
    if (!v.specific_to_list.length) {
      var y = i.tokenize(v.thread_id),
        z = y.type,
        aa = y.value;
      if (z == 'user') v.specific_to_list = ['fbid:' + aa, w];
    }
    if (!v[p.MANUAL_RETRY_CNT]) v[p.MANUAL_RETRY_CNT] = 0;
  };
  s.prototype.normalizeResendMessage = function(v) {
    "use strict";
    v.status = g.RESENDING;
    v.timestamp = Date.now();
    v[p.MANUAL_RETRY_CNT] += 1;
  };
  s.prototype.normalizeAddAttachmentPlaceholder = function(v, w, x) {
    "use strict";
    if (x.preview_attachments.length > 0) {
      v.has_attachment = true;
      v.preview_attachments = x.preview_attachments;
    }
    v.client_state = k.DO_NOT_SEND_TO_SERVER;
    v.status = g.RESENDING;
    v.upload_id = w;
  };

  function t(v, w, x, y) {
    var z = u(x) ? [l.CHAT] : [],
      aa = Date.now(),
      ba = r(new Date(aa), 'g:ia'),
      ca = {
        action_type: w,
        thread_id: y,
        author: i.getParticipantIDFromUserID(v),
        author_email: null,
        coordinates: null,
        timestamp: aa,
        timestamp_absolute: (new Date(aa)).toLocaleDateString(),
        timestamp_relative: ba,
        timestamp_time_passed: o.TODAY,
        is_unread: false,
        is_cleared: false,
        is_forward: false,
        is_filtered_content: false,
        is_spoof_warning: false,
        source: x,
        source_tags: z
      };
    return ca;
  }

  function u(v) {
    switch (v) {
      case n.CHAT_WEB:
      case n.CHAT_JABBER:
      case n.CHAT_IPHONE:
      case n.CHAT_MEEBO:
      case n.CHAT_ORCA:
      case n.CHAT_TEST:
      case n.CHAT:
      case n.DESKTOP:
        return true;
      default:
        return false;
    }
  }
  Object.assign(s, m);
  e.exports = s;
}, null);
__d("MercuryMessageActions", ["CurrentUser", "MercuryActionType", "MercuryMessageObject", "MercuryPayloadSource", "MercuryServerRequests", "MercurySingletonMixin"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';

  function m(n) {
    this.$MercuryMessageActions0 = n;
    this.$MercuryMessageActions1 = i.getForFBID(this.$MercuryMessageActions0);
    this.$MercuryMessageActions2 = k.getForFBID(this.$MercuryMessageActions0);
  }
  m.prototype.send = function(n, o, p) {
    o = o || Function.prototype;
    this.$MercuryMessageActions1.normalizeNewMessage(n);
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions3(Object.assign({}, n), j.CLIENT_SEND_MESSAGE));
    this.$MercuryMessageActions2.sendNewMessage(n, p);
    o(n.thread_id);
  };
  m.prototype.resend = function(n, o) {
    var p = Object.assign({}, n);
    this.$MercuryMessageActions1.normalizeResendMessage(p);
    this.send(p, (void 0), o);
  };
  m.prototype.addAttachmentPlaceholder = function(n, o, p) {
    this.$MercuryMessageActions1.normalizeAddAttachmentPlaceholder(n, o, p);
    this.$MercuryMessageActions1.normalizeNewMessage(n);
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions3(Object.assign({}, n), j.CLIENT_SEND_MESSAGE));
  };
  m.prototype.cancelAttachmentPlaceholder = function(n, o) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions3({
      upload_id: n,
      upload_data: o,
      action_type: h.CANCEL_ATTACHMENT_PLACEHOLDER
    }, j.CLIENT_SEND_MESSAGE));
  };
  m.prototype.confirmAttachmentPlaceholder = function(n, o) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions3({
      upload_id: n,
      upload_data: o,
      action_type: h.CONFIRM_ATTACHMENT_PLACEHOLDER
    }, j.CLIENT_SEND_MESSAGE));
  };
  m.addShareDataToExistingMessage = function(n, o, p, q) {
    q = q || g.getID();
    m.getForFBID(q).addShareDataToExistingMessage(n, o, p);
  };
  m.prototype.addShareDataToExistingMessage = function(n, o, p) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions4({
      server_id: n,
      attach_key: o,
      attach_data: p,
      action_type: h.ADD_SHARE_DATA_TO_EXISTING_MESSAGE
    }, j.SERVER_ADD_SHARE_DATA_TO_EXISTING_MESSAGE));
  };
  m.prototype.markSpam = function(n, o) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions5(n, o, h.MARK_MESSAGES_SPAM, j.CLIENT_MARK_MESSAGES_SPAM));
  };
  m.prototype["delete"] = function(n, o, p) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions5(n, o, h.DELETE_MESSAGES, p || j.CLIENT_DELETE_MESSAGES));
  };
  m.prototype.$MercuryMessageActions3 = function(n, o) {
    return {
      actions: [n],
      from_client: true,
      payload_source: o
    };
  };
  m.prototype.$MercuryMessageActions4 = function(n, o) {
    return {
      actions: [n],
      from_client: false,
      payload_source: o
    };
  };
  m.prototype.$MercuryMessageActions5 = function(n, o, p, q) {
    return {
      actions: [{
        action_type: p,
        action_id: null,
        thread_id: n,
        message_ids: o
      }],
      from_client: true,
      payload_source: q
    };
  };
  Object.assign(m, l);
  e.exports = m;
}, null);
__d("MercuryThreadActions", ["MercuryActionType", "MercuryPayloadSource", "MercuryServerRequests", "MercurySingletonMixin", "MessagingTag", "merge"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';

  function m(n) {
    this.$MercuryThreadActions0 = n;
    this.$MercuryThreadActions1 = i.getForFBID(this.$MercuryThreadActions0);
  }
  m.prototype.markRead = function(n, o) {
    this.batchMarkRead([n], o);
  };
  m.prototype.batchMarkRead = function(n, o) {
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions2(n, true, o));
  };
  m.prototype.markUnread = function(n, o) {
    this.batchMarkUnread([n], o);
  };
  m.prototype.batchMarkUnread = function(n, o) {
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions2(n, false, o));
  };
  m.prototype.markSeen = function(n, o) {
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3([n], g.MARK_THREAD_SEEN, h.CLIENT_MARK_THREAD_SEEN, {
      persistent: o
    }));
  };
  m.prototype.archive = function(n, o) {
    this.batchArchive([n], o);
  };
  m.prototype.batchArchive = function(n, o) {
    n.forEach(function(p) {
      this.$MercuryThreadActions1.changeThreadArchivedStatus(p, true, o);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions4(n, true));
  };
  m.prototype.unarchive = function(n, o) {
    this.batchUnarchive([n], o);
  };
  m.prototype.batchUnarchive = function(n, o) {
    n.forEach(function(p) {
      this.$MercuryThreadActions1.changeThreadArchivedStatus(p, false, o);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions4(n, false));
  };
  m.prototype.markSpam = function(n, o) {
    this.batchMarkSpam([n], o);
  };
  m.prototype.batchMarkSpam = function(n, o) {
    n.forEach(function(p) {
      this.$MercuryThreadActions1.markThreadSpam(p, o);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5(n, k.SPAM));
  };
  m.prototype.unmarkSpam = function(n, o) {
    this.batchUnmarkSpam([n], o);
  };
  m.prototype.batchUnmarkSpam = function(n, o) {
    n.forEach(function(p) {
      this.$MercuryThreadActions1.unmarkThreadSpam(p, o);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5(n, k.INBOX));
  };
  m.prototype.changeFolder = function(n, o) {
    this.batchChangeFolder([n], o);
  };
  m.prototype.batchChangeFolder = function(n, o) {
    n.forEach(function(p) {
      this.$MercuryThreadActions1.changeThreadFolder(p, o);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5(n, o));
  };
  m.prototype["delete"] = function(n, o) {
    this.batchDelete([n], o);
  };
  m.prototype.batchDelete = function(n, o) {
    n.forEach(function(p) {
      this.$MercuryThreadActions1.deleteThread(p, o);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3(n, g.DELETE_THREAD, h.CLIENT_DELETE_THREAD));
  };
  m.prototype.unmute = function(n) {
    this.updateMuteSetting(n, 0);
  };
  m.prototype.updateMuteSetting = function(n, o) {
    this.$MercuryThreadActions1.changeMutingOnThread(n, o);
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3([n], g.CHANGE_MUTE_SETTINGS, h.CLIENT_CHANGE_MUTE_SETTINGS, {
      mute_settings: o
    }));
  };
  m.prototype.addParticipants = function(n, o) {
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3([n], g.ADD_PARTICIPANTS, h.CLIENT_ADD_PARTICIPANTS, {
      participants: o
    }));
  };
  m.prototype.unpinThread = function(n) {
    this.$MercuryThreadActions1.unpinThread(n);
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3([n], g.UNPIN_THREAD, h.CLIENT_UNPIN_THREAD));
  };
  m.prototype.$MercuryThreadActions2 = function(n, o, p) {
    return this.$MercuryThreadActions3(n, g.CHANGE_READ_STATUS, h.CLIENT_CHANGE_READ_STATUS, {
      mark_as_read: o,
      source: p
    });
  };
  m.prototype.$MercuryThreadActions4 = function(n, o) {
    return this.$MercuryThreadActions3(n, g.CHANGE_ARCHIVED_STATUS, h.CLIENT_CHANGE_ARCHIVED_STATUS, {
      archived: o
    });
  };
  m.prototype.$MercuryThreadActions5 = function(n, o) {
    return this.$MercuryThreadActions3(n, g.CHANGE_FOLDER, h.CLIENT_CHANGE_FOLDER, {
      new_folder: o
    });
  };
  m.prototype.$MercuryThreadActions3 = function(n, o, p, q) {
    return {
      actions: n.map(function(r) {
        return l({
          action_type: o,
          action_id: null,
          thread_id: r
        }, q);
      }),
      from_client: true,
      payload_source: p
    };
  };
  Object.assign(m, j);
  e.exports = m;
}, null);
__d("MercuryFolders", ["MessagingTag", "arrayContains"], function(a, b, c, d, e, f, g, h) {
  var i = [g.INBOX, g.OTHER, g.ACTION_ARCHIVED, g.SPAM],
    j = {
      getSupportedFolders: function() {
        return i.concat();
      },
      isSupportedFolder: function(k) {
        return h(i, k);
      },
      getFromMeta: function(k) {
        var l = k.folder;
        if (k.is_archived) l = g.ACTION_ARCHIVED;
        return l;
      }
    };
  e.exports = j;
}, null);
__d("MercuryUnreadState", ["MercuryFolders", "LogHistory", "KeyedCallbackManager", "MercuryActionType", "MercuryGlobalActionType", "MercurySingletonMixin", "MercuryThreadlistConstants", "MessagingTag", "ReportState", "MercuryServerRequests", "MercuryThreadInformer", "MercuryThreads", "arrayContains", "copyProperties", "createObjectFrom"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
  var v = (g.getSupportedFolders() || []).filter(function(na) {
      return na != n.ACTION_ARCHIVED;
    }),
    w = 'unread_thread_hash',
    x = 'unseen_thread_list',
    y = m.MAX_UNREAD_COUNT,
    z = h.getInstance('mercury_unread_state');

  function aa(na) {
    this._fbid = na;
    this._serverRequests = p.getForFBID(this._fbid);
    this._threadInformer = q.getForFBID(this._fbid);
    this._threads = r.getForFBID(this._fbid);
    this._allReadTimestamp = {};
    this._threadReadTimestamp = {};
    this._initialUnreadCount = {};
    this._maxCount = {};
    this._unreadResources = {};
    v.forEach(function(oa) {
      this._initialUnreadCount[oa] = 0;
      this._maxCount[oa] = false;
      this._unreadResources[oa] = new i();
    }.bind(this));
    this._serverRequests.subscribe('update-unread', function(oa, pa) {
      fa(this, pa);
      var qa = pa.global_actions || [];
      for (var ra = 0; ra < qa.length; ra++) {
        var sa = qa[ra];
        if (sa.action_type == k.MARK_ALL_READ) ia(this, sa.folder, sa.timestamp);
      }
    }.bind(this));
    this._serverRequests.subscribe('update-thread-ids', function(oa, pa) {
      ka(this, pa);
    }.bind(this));
  }
  t(aa.prototype, {
    getUnreadCount: function(na) {
      if (this.exceedsMaxCount(na)) {
        z.error('unguarded_unread_count_fetch', {});
        return 0;
      }
      return ea(this, na);
    },
    exceedsMaxCount: function(na) {
      return this._maxCount[na] || (ea(this, na) > y);
    },
    markFolderAsRead: function(na) {
      if (this._maxCount[na] || ea(this, na) > 0) this._serverRequests.markFolderAsRead(na);
    }
  });
  t(aa, l);

  function ba(na, oa, pa) {
    na._unreadResources[oa].setResource(w, pa);
    na._unreadResources[oa].setResource(x, Object.keys(pa));
  }

  function ca(na, oa, pa) {
    var qa = na._unreadResources[oa].executeOrEnqueue(w, pa),
      ra = na._unreadResources[oa].getUnavailableResources(qa);
    if (ra.length) na._serverRequests.fetchUnreadThreadIDs(oa);
  }

  function da(na, oa) {
    return na._unreadResources[oa].getResource(w);
  }

  function ea(na, oa) {
    var pa = na._unreadResources[oa].getResource(x);
    if (pa) {
      return pa.length;
    } else return na._initialUnreadCount[oa];
  }

  function fa(na, oa) {
    var pa;
    (oa.unread_thread_fbids || []).forEach(function(qa) {
      pa = qa.folder;
      if (!ma(pa)) return;
      var ra = qa.thread_fbids || [];
      ra = ra.concat(qa.other_user_fbids || []);
      var sa = ja(na, ra);
      ba(na, pa, u(sa, true));
      if (sa.length > y) na._maxCount[pa] = true;
      na._threadInformer.updatedUnreadState();
    });
    (oa.message_counts || []).forEach(function(qa) {
      if (qa.unread_count === (void 0)) return;
      pa = qa.folder;
      if (qa.unread_count > y) {
        na._maxCount[pa] = true;
        ba(na, pa, {});
        na._threadInformer.updatedUnreadState();
      } else {
        na._initialUnreadCount[pa] = qa.unread_count;
        if (na._initialUnreadCount[pa] === 0) ba(na, pa, {});
        na._threadInformer.updatedUnreadState();
      }
    });
    (oa.actions || []).forEach(function(qa) {
      if (qa.is_forward) return;
      var ra = j,
        sa = qa.other_user_fbid ? qa.other_user_fbid : qa.thread_fbid,
        ta = qa.thread_id ? qa.thread_id : sa;
      if (qa.action_type == ra.DELETE_THREAD) {
        v.forEach(function(va) {
          ha(na, va, ta);
        });
      } else if (qa.action_type == ra.CHANGE_ARCHIVED_STATUS || qa.action_type == ra.CHANGE_FOLDER) {
        var ua = na._threads.getThreadMetaNow(qa.thread_id);
        pa = g.getFromMeta(ua);
        if (ma(pa) && ua.unread_count > 0) ga(na, pa, ta);
        v.forEach(function(va) {
          if (va != pa) ha(na, va, ta);
        });
      } else {
        pa = la(na, qa);
        if (!ma(pa)) return;
        if (qa.action_type == ra.CHANGE_READ_STATUS) {
          if (qa.mark_as_read) {
            ha(na, pa, ta, qa.timestamp);
          } else ga(na, pa, ta, qa.timestamp);
        } else if (qa.action_type == ra.USER_GENERATED_MESSAGE || qa.action_type == ra.LOG_MESSAGE)
          if (qa.is_unread) ga(na, pa, ta, qa.timestamp);
      }
    });
  }

  function ga(na, oa, pa, qa) {
    if (na._maxCount[oa]) return;
    ca(na, oa, function(ra) {
      var sa = na._allReadTimestamp[oa] || 0,
        ta = na._threadReadTimestamp[pa] || 0,
        ua = qa || Number.POSITIVE_INFINITY;
      if (ua >= sa && ua >= ta && !ra[pa]) {
        ra[pa] = qa || 0;
        ba(na, oa, ra);
        na._threadInformer.updatedUnreadState();
      }
    });
  }

  function ha(na, oa, pa, qa) {
    if (na._maxCount[oa]) return;
    ca(na, oa, function(ra) {
      if (qa) {
        var sa = na._threadReadTimestamp[pa];
        if (!sa || sa < qa) na._threadReadTimestamp[pa] = qa;
      }
      var ta = ra[pa];
      if (qa && typeof ta == 'number' && qa < ta) return;
      if (pa in ra) {
        delete ra[pa];
        ba(na, oa, ra);
        na._threadInformer.updatedUnreadState();
      }
    });
  }

  function ia(na, oa, pa) {
    na._maxCount[oa] = false;
    ba(na, oa, {});
    na._allReadTimestamp[oa] = Math.max(na._allReadTimestamp[oa] || 0, pa || 0);
    na._threadInformer.updatedUnreadState();
  }

  function ja(na, oa) {
    return oa.map(na._serverRequests.convertThreadIDIfAvailable, na._serverRequests);
  }

  function ka(na, oa) {
    v.forEach(function(pa) {
      var qa = da(na, pa);
      if (!qa) return;
      for (var ra in oa) {
        var sa = oa[ra];
        if (qa[ra]) {
          qa[sa] = qa[ra];
          delete qa[ra];
        }
      }
      ba(na, pa, qa);
    });
  }

  function la(na, oa) {
    var pa = oa.thread_id ? na._threads.getThreadMetaNow(oa.thread_id) : null;
    return pa ? g.getFromMeta(pa) : oa.folder;
  }

  function ma(na) {
    return s(v, na);
  }
  o.registerCallback('mercury-unread-state', function() {
    var na = {};
    na.unread = {};
    na.unread_max_count = {};
    var oa = aa._getInstances();
    for (var pa in oa) {
      na.unread[pa] = {};
      na.unread_max_count[pa] = {};
      v.forEach(function(qa) {
        na.unread[pa][qa] = t({}, da(oa[pa], qa));
        na.unread_max_count[pa][qa] = oa[pa]._maxCount[qa];
      });
    }
    return na;
  });
  e.exports = aa;
}, null);
__d("MercuryLeftNav", ["Arbiter", "MessagingTag", "NavigationMessage", "MercuryThreadInformer", "MercuryUnreadState"], function(a, b, c, d, e, f, g, h, i) {
  var j = b('MercuryThreadInformer').get(),
    k = b('MercuryUnreadState').get(),
    l = false;

  function m() {
    var o = k.getUnreadCount(h.INBOX);
    g.inform(i.NAVIGATION_COUNT_UPDATE, {
      key: 'inbox',
      hide: true
    });
    g.inform(i.NAVIGATION_COUNT_UPDATE, {
      key: 'inbox',
      count: o
    });
  }
  var n = {
    bootstrap: function() {
      if (l) return;
      j.subscribe('unread-updated', m);
      l = true;
    }
  };
  e.exports = n;
}, null);
__d("MercuryThreadMuter", ["AsyncDialog", "AsyncRequest", "CurrentUser", "DOM"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = {
    getUserIDEmail: function() {
      return i.getID() + '@facebook.com';
    },
    getThreadMuteSettingForUser: function(l) {
      return l.mute_settings && l.mute_settings[k.getUserIDEmail()];
    },
    isThreadMuted: function(l) {
      return k.getThreadMuteSettingForUser(l) !== (void 0);
    },
    showMuteChangeDialog: function(l, m) {
      g.send(new h('/ajax/mercury/mute_thread_dialog.php').setRelativeTo(m), function(n) {
        n.subscribe('confirm', function() {
          this.hide();
          var o;
          j.scry(this.getRoot(), 'input[type="radio"]').forEach(function(p) {
            if (p.checked) o = p.value;
          });
          o = k.convertRawMuteSetting(o);
          d(['MercuryThreadActions'], function(p) {
            p.get().updateMuteSetting(l, o);
          });
        }.bind(n));
      });
    },
    convertRawMuteSetting: function(l) {
      switch (l) {
        case 'always':
          return -1;
        case '1hour':
          return 3600;
        case '8am':
          var m, n = new Date(),
            o = new Date();
          o.setHours(8);
          o.setMinutes(0);
          o.setSeconds(0);
          if (o > n) {
            m = o - n;
          } else m = o - n + (24 * 3600 * 1000);
          return m / 1000;
        default:
          return 0;
      }
    }
  };
  e.exports = k;
}, null);
__d("ImageSourceType", [], function(a, b, c, d, e, f) {
  var g = {
    PROFILE_PICTURE: 'profile_picture',
    IMAGE: 'image'
  };
  e.exports = g;
}, null);
__d("ImageSourceRequest", ["CurrentUser", "ImageSourceType", "KeyedCallbackManager", "PhotoResizeModeConst", "MercuryServerDispatcher", "arrayContains", "extendArray"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  function n() {
    "use strict";
    this._request = {
      fbid: null,
      type: null,
      width: null,
      height: null,
      resize_mode: null
    };
    this._callback = null;
  }
  n.prototype.setFBID = function(r) {
    "use strict";
    this._request.fbid = r;
    return this;
  };
  n.prototype.setType = function(r) {
    "use strict";
    if (!l([h.PROFILE_PICTURE, h.IMAGE], r)) throw new TypeError('ImageSourceRequest.setType: invalid type ' + r);
    this._request.type = r;
    return this;
  };
  n.prototype.setDimensions = function(r, s) {
    "use strict";
    this._request.width = r;
    this._request.height = s;
    return this;
  };
  n.prototype.setResizeMode = function(r) {
    "use strict";
    if (!l([j.COVER, j.CONTAIN], r)) throw new TypeError('ImageSourceRequest.setResizeMode: invalid resize mode ' + r);
    this._request.resize_mode = r;
    return this;
  };
  n.prototype.setCallback = function(r) {
    "use strict";
    this._callback = r;
    return this;
  };
  n.prototype.send = function() {
    "use strict";
    if (!this._request.fbid || !this._request.width || !this._request.height || !this._request.type || !this._request.resize_mode || !this._callback) throw new Error('ImageSourceRequest: You must set all the fields');
    var r = p(),
      s = q(this._request);
    r.executeOrEnqueue(s, this._callback);
    if (r.getUnavailableResourcesFromRequest(s).length === 1) {
      k.trySend('/ajax/image_source.php', {
        requests: [this._request]
      });
      return true;
    }
    return false;
  };
  var o = null;

  function p() {
    if (o) return o;
    var r = new i();
    o = r;
    k.registerEndpoints({
      '/ajax/image_source.php': {
        request_user_id: g.getID(),
        mode: k.BATCH_DEFERRED_MULTI,
        batch_function: function(s, t) {
          m(s.requests, t.requests);
          return s;
        },
        handler: function(s, t) {
          var u = t.getData().requests;
          for (var v = 0; v < u.length; ++v) r.setResource(q(u[v]), s[v]);
        }
      }
    });
    return r;
  }

  function q(r) {
    return [r.fbid, r.type, r.width, r.height, r.resize_mode].join('|');
  }
  e.exports = n;
}, null);
__d("MercuryParticipants", ["CurrentUser", "EventEmitter", "ImageSourceRequest", "ImageSourceType", "ImmutableObject", "KeyedCallbackManager", "Map", "MercuryAssert", "MercuryIDs", "MercuryParticipantsConstants", "MercuryParticipantTypes", "MercuryPayloadSource", "MercuryServerRequests", "PhotoResizeModeConst", "Set", "ShortProfiles", "fbt", "getObjectValues", "mapObject", "setImmediate"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
  'use strict';
  var aa = 'change';

  function ba(ea) {
    this.$MercuryParticipants0 = ea;
    this.$MercuryParticipants1 = new h();
    this.$MercuryParticipants2 = new l();
    this.$MercuryParticipants3 = new m();
    this.$MercuryParticipants4 = false;
    this.$MercuryParticipants5 = new u();
    this.$MercuryParticipants6 = new u();
    this.$MercuryParticipants7 = s.getForFBID(this.$MercuryParticipants0);
    this.$MercuryParticipants7.subscribe('update-participants', function(fa, ga) {
      if (ga.participants && ga.participants.length > 0) {
        var ha = {};
        ga.participants.forEach(function(ia) {
          ha[ia.id] = ia;
        });
        this.$MercuryParticipants8(ha);
      }
    }.bind(this));
  }
  ba.prototype.addListener = function(ea, fa) {
    return this.$MercuryParticipants1.addListener(ea, fa);
  };
  ba.prototype.getIDFromVanityOrFBID = function(ea) {
    if (!ea) return;
    if (this.$MercuryParticipants3.has(ea)) return this.$MercuryParticipants3.get(ea);
    if (/^\d+$/.test(ea)) return o.getParticipantIDFromUserID(ea);
  };
  ba.prototype.getNow = function(ea) {
    return this.$MercuryParticipants9(ea);
  };
  ba.prototype.getOrFetch = function(ea) {
    var fa = this.$MercuryParticipants9(ea);
    if (!fa && !this.$MercuryParticipants6.has(ea)) this.$MercuryParticipants5.add(ea);
    if (this.$MercuryParticipants5.size > 0 && !this.$MercuryParticipants4) this.$MercuryParticipantsa();
    return fa;
  };
  ba.prototype.get = function(ea, fa) {
    n.isParticipantID(ea);
    return this.$MercuryParticipantsb([ea], function(ga) {
      fa(ga[ea]);
    });
  };
  ba.prototype.getMulti = function(ea, fa) {
    return this.$MercuryParticipantsb(ea, fa);
  };
  ba.prototype.getBigImageMulti = function(ea, fa) {
    n.allParticipantIDs(ea);
    var ga = p.BIG_IMAGE_SIZE;
    return this.$MercuryParticipantsb(ea, function(ha) {
      var ia = {},
        ja = 0,
        ka = new u(),
        la = function(pa, qa) {
          ja++;
          ia[pa] = qa;
          if (ja === ea.length) {
            fa(ia);
            if (ka.size > 0) this.$MercuryParticipantsc(ka);
          }
        }.bind(this),
        ma = function(pa, qa) {
          this.$MercuryParticipants2.setResource(pa, k.set(this.$MercuryParticipants2.getResource(pa), {
            big_image_src: qa.uri
          }));
          ka.add(pa);
          la(pa, qa.uri);
        }.bind(this);
      for (var na in ha) {
        var oa = ha[na];
        if (!oa.big_image_src) {
          new i().setFBID(o.getUserIDFromParticipantID(na)).setType(j.PROFILE_PICTURE).setDimensions(ga, ga).setResizeMode(t.COVER).setCallback(ma.bind(null, na)).send();
        } else la(oa.id, oa.big_image_src);
      }
    }.bind(this));
  };
  ba.prototype.getOrderedBigImageMulti = function(ea, fa) {
    return this.getBigImageMulti(ea, function(ga) {
      fa(ea.map(function(ha) {
        return ga[ha];
      }));
    });
  };
  ba.prototype.$MercuryParticipantsb = function(ea, fa) {
    n.allParticipantIDs(ea);
    var ga = this.$MercuryParticipants2.executeOrEnqueue(ea, fa),
      ha = this.$MercuryParticipants2.getUnavailableResources(ga),
      ia = {};
    ha.forEach(function(ka) {
      var la = o.tokenize(ka),
        ma = la.type,
        na = la.value;
      if (ma == 'fbid') {
        ia[ka] = na;
      } else if (ma == 'email') this.$MercuryParticipantsd(ka, na);
    }.bind(this));
    var ja = x(ia);
    if (ja.length) v.getMulti(ja, function(ka) {
      var la = y(ia, function(ma, na) {
        return ca(na, ka[ma]);
      });
      this.$MercuryParticipantse(la);
    }.bind(this));
    return this.$MercuryParticipantsf(ga);
  };
  ba.prototype.$MercuryParticipants9 = function(ea) {
    var fa = this.$MercuryParticipants2.getResource(ea);
    if (!fa) {
      var ga = o.tokenize(ea),
        ha = ga.type,
        ia = ga.value;
      if (ha === 'email') fa = this.$MercuryParticipantsd(ea, ia);
    }
    return fa;
  };
  ba.prototype.$MercuryParticipantsd = function(ea, fa) {
    var ga = new k(da(ea, fa));
    this.$MercuryParticipants2.setResource(ea, ga);
    return ga;
  };
  ba.prototype.$MercuryParticipantsc = function(ea) {
    this.$MercuryParticipants1.emit(aa, ea);
  };
  ba.prototype.$MercuryParticipantse = function(ea, fa) {
    this.$MercuryParticipants7.handleUpdate({
      participants: x(ea),
      from_client: !!fa,
      payload_source: fa ? r.CLIENT_FETCH_PARTICIPANTS : r.SERVER_FETCH_PARTICIPANTS
    });
  };
  ba.prototype.$MercuryParticipants8 = function(ea) {
    ea = y(ea, function(fa, ga) {
      if (fa.vanity) this.$MercuryParticipants3.set(fa.vanity, ga);
      return new k(this.$MercuryParticipantsg(fa));
    }.bind(this));
    this.$MercuryParticipants2.addResourcesAndExecute(ea);
    this.$MercuryParticipantsc(new u(Object.keys(ea)));
  };
  ba.prototype.$MercuryParticipantsg = function(ea) {
    var fa = ea.type === q.USER || ea.type === q.FRIEND;
    if (!fa) return ea;
    if (!ea.name && !ea.href && !ea.vanity) {
      var ga = "Facebook User";
      ea.name = ga;
      ea.short_name = ga;
    }
    return ea;
  };
  ba.prototype.$MercuryParticipantsa = function() {
    if (this.$MercuryParticipants4) return;
    this.$MercuryParticipants4 = true;
    z(function() {
      this.$MercuryParticipants4 = false;
      this.$MercuryParticipants5.forEach(function(ea) {
        return this.$MercuryParticipants6.add(ea);
      }.bind(this));
      this.$MercuryParticipantsb(Array.from(this.$MercuryParticipants5), function(ea) {
        for (var fa in ea) ea.hasOwnProperty(fa) && this.$MercuryParticipants6["delete"](fa);
      }.bind(this));
      this.$MercuryParticipants5.clear();
    }.bind(this));
  };
  ba.prototype.$MercuryParticipantsf = function(ea) {
    return {
      remove: function() {
        this.$MercuryParticipants2.unsubscribe(ea);
      }.bind(this)
    };
  };

  function ca(ea, fa) {
    var ga = {
      gender: fa.gender,
      href: fa.uri,
      id: ea,
      image_src: fa.thumbSrc,
      name: fa.name,
      short_name: fa.firstName,
      employee: fa.employee,
      is_employee_away: fa.is_employee_away,
      type: fa.type,
      vanity: fa.vanity,
      is_friend: fa.is_friend,
      orion_eligible: fa.orionEligible,
      social_snippets: fa.social_snippets
    };
    if (fa.officeStatus) {
      ga.officeStatus = fa.officeStatus;
      ga.officeStatusStartDate = fa.officeStatusStartDate;
      ga.officeStatusEndDate = fa.officeStatusEndDate;
      ga.officeStatusComment = fa.officeStatusComment;
      ga.officeStatusLocation = fa.officeStatusLocation;
    }
    return ga;
  }

  function da(ea, fa) {
    return {
      gender: p.UNKNOWN_GENDER,
      href: null,
      id: ea,
      image_src: p.EMAIL_IMAGE,
      big_image_src: p.EMAIL_IMAGE,
      name: fa,
      short_name: fa,
      employee: false
    };
  }
  e.exports = new ba(g.getID());
}, null);
__d("MercuryAttachmentSnippet.react", ["EmoticonsList", "Image.react", "MercuryAttachment", "MercuryAttachmentType", "MercuryConstants", "MercuryIDs", "MercuryParticipants", "React", "StickerConstants", "TextWithEmoticons.react", "cx", "fbt", "ix", "joinClasses", "OrionMercuryAttachmentSnippet"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
  'use strict';
  var u = b('OrionMercuryAttachmentSnippet').module,
    v = n.createClass({
      displayName: "MercuryAttachmentSnippet",
      propTypes: {
        thread: n.PropTypes.object.isRequired,
        viewer: n.PropTypes.string.isRequired
      },
      componentWillMount: function() {
        this._ensureParticipant(this.props.thread.snippet_sender);
        this._setVariables(this.props);
      },
      componentWillReceiveProps: function(z) {
        this._ensureParticipant(z.thread.snippet_sender);
        this._setVariables(z);
      },
      componentWillUnmount: function() {
        this._cancelParticipantFetch();
      },
      render: function() {
        var z = this._getSenderName();
        if (this._hasOnlyPhotos()) return this._renderPhotoSnippet(z);
        if (this._hasOnlyVideo()) return this._renderVideoSnippet(z);
        if (this._hasAudioClip()) return this._renderAudioClipSnippet(z);
        if (this._hasSticker()) return this._renderStickerSnippet(z);
        if (this._hasOrion()) return this._renderOrionSnippet(z);
        if (this._hasShoerackInvitation()) return this._renderShoerackInvitationSnippet(z);
        if (this._hasShare()) return this._renderShareSnippet(z);
        return this._renderMixedSnippet(z);
      },
      _renderPhotoSnippet: function(z) {
        var aa;
        if (this._photos.length === 1) {
          if (this._isViewerSender) {
            aa = ("You sent a photo.");
          } else aa = (r._("{name} sent a photo.", [r.param("name", z)]));
        } else if (this._isViewerSender) {
          aa = (r._("You sent {num_photos} photos.", [r.param("num_photos", this._photos.length)]));
        } else aa = (r._("{name} sent {num_photos} photos.", [r.param("name", z), r.param("num_photos", this._photos.length)]));
        return this._renderSnippet(aa);
      },
      _renderVideoSnippet: function(z) {
        var aa;
        if (this._isViewerSender) {
          aa = ("You sent a video.");
        } else aa = (r._("{sender name} sent a video.", [r.param("sender name", z)]));
        return this._renderSnippet(aa);
      },
      _renderAudioClipSnippet: function(z) {
        var aa;
        if (this._isViewerSender) {
          aa = ("You sent a voice message.");
        } else aa = (r._("{name} sent a voice message.", [r.param("name", z)]));
        return this._renderSnippet(aa);
      },
      _renderStickerSnippet: function(z) {
        if (x(this._attachments[0].metadata.stickerID)) {
          return (n.createElement(p, {
            renderEmoticons: true,
            text: g.symbols.like
          }));
        } else if (this._isViewerSender) {
          return (n.createElement("span", null, "You sent a sticker."));
        } else return (n.createElement("span", null, r._("{name} sent a sticker.", [r.param("name", z)])));
      },
      _renderOrionSnippet: function(z) {
        if (!u) return null;
        return (n.createElement("span", null, n.createElement(u, n.__spread({}, this._attachments[0].metadata))));
      },
      _renderShoerackInvitationSnippet: function(z) {
        var aa;
        if (this._isViewerSender) {
          aa = ("You sent a Moments invitation.");
        } else aa = (r._("{sender name} invited you to share photos using Moments.", [r.param("sender name", z)]));
        return this._renderSnippet(aa);
      },
      _renderShareSnippet: function(z) {
        var aa;
        if (this._isViewerSender) {
          aa = ("You shared a link.");
        } else aa = (r._("{sender name} shared a link.", [r.param("sender name", z)]));
        return this._renderSnippet(aa);
      },
      _renderMixedSnippet: function(z) {
        return (n.createElement("span", null, this._attachments.filter(function(aa) {
          return aa.attach_type === j.FILE || aa.attach_type === j.PHOTO || aa.attach_type === j.VIDEO;
        }).map(function(aa) {
          return this._renderSnippet(aa.name, aa.icon_type);
        }.bind(this))));
      },
      _renderSnippet: function(z, aa) {
        var ba = i.getAttachIconClass(aa || this._attachments[0].icon_type),
          ca = t(ba, "uiIconText _3tn");
        return (n.createElement("span", {
          className: ca
        }, n.createElement(h, {
          src: s('/images/messaging/docs/generic.png')
        }), z));
      },
      _hasOnlyPhotos: function() {
        return this._photos.length === this._attachments.length;
      },
      _hasOnlyVideo: function() {
        return (this._attachments.length === 1 && this._attachments[0].attach_type === j.VIDEO);
      },
      _hasAudioClip: function() {
        return !!(this._attachments.length === 1 && this._attachments[0].metadata && i.isVoiceMessage(this._attachments[0].metadata.type));
      },
      _hasSticker: function() {
        return (this._attachments.length === 1 && this._attachments[0].attach_type === j.STICKER);
      },
      _hasOrion: function() {
        return this._hasSingleAttachmentOfShareDataType(k.MercurySupportedShareType.FB_ORION);
      },
      _hasShoerackInvitation: function() {
        return this._hasSingleAttachmentOfShareDataType(k.MercurySupportedShareType.FB_SHOERACK_INVITATION);
      },
      _hasSingleAttachmentOfShareDataType: function(z) {
        return (this._attachments.length === 1 && this._attachments[0].share_data_type === z);
      },
      _hasShare: function() {
        return (this._attachments.length === 1 && this._attachments[0].attach_type === j.SHARE);
      },
      _setVariables: function(z) {
        this._viewer = z.viewer;
        this._sender = z.thread.snippet_sender;
        this._attachments = z.thread.snippet_attachments;
        this._photos = w(this._attachments);
        this._isViewerSender = y(this._sender, this._viewer);
      },
      _getSenderName: function() {
        if (!this._sender || this._isViewerSender) return null;
        var z = m.getNow(this._sender);
        if (!z) return null;
        return z.short_name;
      },
      _ensureParticipant: function(z) {
        if (!z) return;
        this._cancelParticipantFetch();
        if (!m.getNow(z)) this._sub = m.get(z, function(aa) {
          return this.forceUpdate();
        }.bind(this));
      },
      _cancelParticipantFetch: function() {
        this._sub && this._sub.remove();
      }
    });

  function w(z) {
    if (!z) return [];
    return z.filter(function(aa) {
      return aa.attach_type === j.PHOTO;
    });
  }

  function x(z) {
    return (z == o.LIKE_STICKER_ID || z == o.HOT_LIKE_SMALL_STICKER_ID || z == o.HOT_LIKE_MEDIUM_STICKER_ID || z == o.HOT_LIKE_LARGE_STICKER_ID);
  }

  function y(z, aa) {
    return !!(z && l.getParticipantIDFromUserID(aa) == z);
  }
  e.exports = v;
}, null);
__d("MercuryThreadImage.react", ["ImmutableObject", "MercuryIDs", "MercuryParticipants", "MercuryParticipantsConstants", "Pixelz.react", "React", "SplitImage.react", "areEqual"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  'use strict';
  var o = l.createClass({
    displayName: "MercuryThreadImage",
    propTypes: {
      thread: l.PropTypes.instanceOf(g).isRequired,
      viewer: l.PropTypes.string.isRequired,
      size: l.PropTypes.number
    },
    getInitialState: function() {
      return {
        participantImages: []
      };
    },
    componentDidMount: function() {
      this._getParticipantImages(this.props);
    },
    componentWillReceiveProps: function(p, q) {
      this._getParticipantImages(p);
    },
    shouldComponentUpdate: function(p, q) {
      return (p.thread.image_src !== this.props.thread.image_src || p.size !== this.props.size || !n(q.participantImages, this.state.participantImages));
    },
    render: function() {
      var p = this.props.size || j.BIG_IMAGE_SIZE;
      if (this.props.thread.image_src) return (l.createElement(k, {
        height: p,
        resizeMode: 'cover',
        src: this.props.thread.image_src,
        width: p
      }));
      if (this.state.participantImages.length > 0) return (l.createElement(m, {
        srcs: this.state.participantImages,
        border: true,
        size: p
      }));
      return null;
    },
    _getParticipantImages: function(p) {
      var q = p.thread,
        r = p.viewer;
      if (q.image_src) return;
      var s = h.getParticipantIDFromUserID(r),
        t = q.participants.filter(function(v) {
          return v != s;
        }),
        u = [];
      if (!t.length) {
        u = [s];
      } else if (t.length == 1) {
        u = t;
      } else u = t.slice(0, 3);
      i.getOrderedBigImageMulti(u, function(v) {
        this.isMounted() && this.setState({
          participantImages: v
        });
      }.bind(this));
    }
  });
  e.exports = o;
}, null);
__d("MercuryParticipantListRenderer", ["fbt"], function(a, b, c, d, e, f, g) {
  'use strict';

  function h() {
    this.$MercuryParticipantListRenderer0 = false;
    this.$MercuryParticipantListRenderer1 = false;
    this.$MercuryParticipantListRenderer2 = false;
    this.$MercuryParticipantListRenderer3 = function(r) {
      return this.$MercuryParticipantListRenderer1 ? r.short_name : r.name;
    }.bind(this);
  }
  h.prototype.renderParticipantList = function(r) {
    var s = r.map(this.$MercuryParticipantListRenderer3);
    switch (s.length) {
      case 0:
        return i(this.$MercuryParticipantListRenderer0);
      case 1:
        return j(s);
      case 2:
        return this.$MercuryParticipantListRenderer2 ? l(s) : k(s);
      case 3:
        return this.$MercuryParticipantListRenderer2 ? n(s) : m(s);
      default:
        return this.$MercuryParticipantListRenderer2 ? p(s) : o(s);
    }
  };
  h.prototype.setIsNewThread = function(r) {
    this.$MercuryParticipantListRenderer0 = r;
    return this;
  };
  h.prototype.setNameRenderer = function(r) {
    this.$MercuryParticipantListRenderer3 = r;
    return this;
  };
  h.prototype.setUseShortName = function(r) {
    this.$MercuryParticipantListRenderer1 = r;
    return this;
  };
  h.prototype.setUseAndSeparator = function(r) {
    this.$MercuryParticipantListRenderer2 = r;
    return this;
  };

  function i(r) {
    if (r) {
      return ("New Message");
    } else return ("No Participants");
  }

  function j(r) {
    return r[0];
  }

  function k(r) {
    return (g._("{participant1}, {participant2}", [g.param("participant1", r[0]), g.param("participant2", r[1])]));
  }

  function l(r) {
    return (g._("{participant1} and {participant2}", [g.param("participant1", r[0]), g.param("participant2", r[1])]));
  }

  function m(r) {
    return (g._("{participant1}, {participant2}, {participant3}", [g.param("participant1", r[0]), g.param("participant2", r[1]), g.param("participant3", r[2])]));
  }

  function n(r) {
    return (g._("{participant1}, {participant2} and {participant3}", [g.param("participant1", r[0]), g.param("participant2", r[1]), g.param("participant3", r[2])]));
  }

  function o(r) {
    return (g._("{participant1}, {participant2}, {participant3}, {others_link}", [g.param("participant1", r[0]), g.param("participant2", r[1]), g.param("participant3", r[2]), g.param("others_link", q(r.length - 3))]));
  }

  function p(r) {
    return (g._("{participant1}, {participant2} and {others_link}", [g.param("participant1", r[0]), g.param("participant2", r[1]), g.param("others_link", q(r.length - 2))]));
  }

  function q(r) {
    if (r > 1) {
      return (g._("{others_count} others", [g.param("others_count", r)]));
    } else return ("1 other");
  }
  e.exports = h;
}, null);
__d("MercuryThreadTitle.react", ["MercuryIDs", "MercuryParticipantListRenderer", "MercuryParticipants", "React", "TextWithEmoticons.react", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m = j.createClass({
    displayName: "MercuryThreadTitle",
    propTypes: {
      isNewThread: j.PropTypes.bool,
      thread: j.PropTypes.object.isRequired,
      viewer: j.PropTypes.string.isRequired,
      showUnreadCount: j.PropTypes.bool,
      useShortName: j.PropTypes.bool,
      useAndSeparator: j.PropTypes.bool
    },
    getDefaultProps: function() {
      return {
        isNewThread: false,
        showUnreadCount: false,
        useShortName: false,
        useAndSeparator: false
      };
    },
    getInitialState: function() {
      return {
        participantNames: ''
      };
    },
    componentDidMount: function() {
      this._renderParticipantsList(this.props);
    },
    componentWillReceiveProps: function(n) {
      this._renderParticipantsList(n);
    },
    render: function() {
      return (j.createElement("span", {
        className: this.props.className
      }, this.props.thread.name ? this._renderThreadTitle() : this.state.participantNames));
    },
    getTitle: function() {
      return this.state.participantNames;
    },
    _renderThreadTitle: function() {
      var n = this.props.thread,
        o = j.createElement(k, {
          renderEmoticons: true,
          renderEmoji: true,
          text: n.name
        });
      if (!n.unread_count || !this.props.showUnreadCount) return o;
      return this._renderTitleWithUnreadCount(o, n.unread_count);
    },
    _renderParticipantsList: function(n) {
      if (n.thread.name) return;
      var o = g.getParticipantIDFromUserID(n.viewer),
        p = n.thread.participants;
      if (p.length > 1) p = p.filter(function(q) {
        return q != o;
      });
      i.getMulti(p, function(q) {
        if (!this.isMounted()) return;
        var r = p.map(function(u) {
            return q[u];
          }),
          s = new h().setUseShortName(this.props.useShortName).setUseAndSeparator(this.props.useAndSeparator).setIsNewThread(this.props.isNewThread).renderParticipantList(r),
          t = (n.showUnreadCount && n.thread.unread_count) ? this._renderTitleWithUnreadCount(s, n.thread.unread_count) : s;
        this.setState({
          participantNames: t
        });
      }.bind(this));
    },
    _renderTitleWithUnreadCount: function(n, o) {
      return (l._("{conversation-title} ({unread-count})", [l.param("conversation-title", n), l.param("unread-count", o)]));
    }
  });
  e.exports = m;
}, null);
__d("WebMessengerThreadPermalinks", ["MercuryIDs", "MessagingTag", "URI", "WebMessengerPermalinkConstants", "WWWBase", "requireWeak"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m = {
    getThreadURI: function(q, r, s) {
      if (g.isCanonical(q)) {
        n(q, r, s);
      } else o(q, r, s);
    }
  };

  function n(q, r, s) {
    var t = new i(k.uri),
      u = g.tokenize(q).value;
    t.setPath(p(s) + '/' + u);
    r && r(t.toString());
  }

  function o(q, r, s) {
    l(['MercuryServerRequests'], function(t) {
      var u = t.get();
      u.getServerThreadID(q, function(v) {
        var w = new i(k.uri);
        w.setPath(j.getURIPathForThreadID(v, p(s)));
        r && r(w.toString());
      });
    });
  }

  function p(q) {
    var r = j.BASE_PATH;
    if (q && q != h.INBOX) r += '/' + q;
    return r;
  }
  e.exports = m;
}, null);
__d("MercuryViewer", ["CurrentUser", "MercuryAssert"], function(a, b, c, d, e, f, g, h) {
  'use strict';
  var i = 'fbid:' + g.getID(),
    j = {
      getID: function() {
        return i;
      },
      isViewer: function(k) {
        h.isParticipantID(k);
        return k === i;
      }
    };
  e.exports = j;
}, null);
__d("MercuryMessages", ["AsyncRequest", "BanzaiODS", "CurrentUser", "LogHistory", "MercuryActionStatus", "MercuryActionType", "MercuryAssert", "MercuryAttachmentType", "MercuryLogMessageType", "MercuryMessageClientState", "MercuryPayloadSource", "MercurySingletonMixin", "MercuryViewer", "MercuryMessageActions", "MercuryMessageIDs", "RangedCallbackManager", "ReportState", "MercurySendMessageFields", "MercuryServerRequests", "MercuryThreadActions", "MercuryThreadInformer", "MercuryThreads", "copyProperties", "debounceAcrossTransitions", "invariant", "isNode", "mergeDeep", "setImmediate"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha) {
  'use strict';
  var ia = j.getInstance('mercury_messages');

  function ja(wa, xa) {
    var ya = xa;
    if (wa._localIdsMap[xa]) ya = wa._localIdsMap[xa];
    return wa._messages[ya];
  }

  function ka(wa) {
    switch (wa) {
      case q.UNKNOWN:
      case q.SERVER_INITIAL_DATA:
      case q.SERVER_FETCH_THREAD_INFO:
      case q.SERVER_THREAD_SYNC:
        return true;
    }
    return false;
  }

  function la(wa) {
    return wa && wa.substr(0, 6) === 'server';
  }

  function ma(wa, xa) {
    if (!wa._threadsToMessages[xa]) wa._threadsToMessages[xa] = new v(function(ya) {
      return ja(wa, ya).timestamp;
    }, function(ya, za) {
      return za - ya;
    });
    return wa._threadsToMessages[xa];
  }

  function na(wa) {
    var xa = [];
    return JSON.stringify(wa, function(ya, za) {
      if (typeof za === 'object' && za !== null) {
        if (fa(za)) return '<' + za.nodeName + '>';
        if (xa.indexOf(za) !== -1) return 'CIRCULAR';
        xa.push(za);
      }
      return za;
    });
  }
  w.registerCallback('mercury-messages', function() {
    var wa = {},
      xa = {},
      ya = pa._getInstances();
    for (var za in ya) {
      wa[za] = {};
      for (var ab in ya[za]._messages) {
        var bb = ya[za]._messages[ab];
        if (Object.keys(bb).length === 0) continue;
        var cb = bb.thread_id;
        wa[za][cb] = wa[za][cb] || {};
        wa[za][cb][bb.message_id] = JSON.parse(na(bb));
      }
      xa[za] = ca({}, ya[za]._localIdsMap);
    }
    var db = {};
    db.local_message_ids = xa;
    db.messages = wa;
    return db;
  });

  function oa(wa, xa, ya) {
    xa.forEach(function(za) {
      var ab = ma(wa, za);
      ab.setReachedEndOfArray();
      wa._threadInformer.reorderedMessages(za, ya);
    });
  }

  function pa(wa) {
    this._fbid = wa;
    this._messageActions = t.getForFBID(this._fbid);
    this._serverRequests = y.getForFBID(this._fbid);
    this._threadInformer = aa.getForFBID(this._fbid);
    this._threads = ba.getForFBID(this._fbid);
    this._threadActions = z.getForFBID(this._fbid);
    this._failedHistoryFetchThreads = {};
    this._threadsToMessages = {};
    this._localTitanMessagesCount = {};
    this._messages = {};
    this._attachmentData = {};
    this._messagesNeedingAttachmentData = {};
    this._localIdsMap = {};
    this._serverRequests.subscribe('update-messages', function(xa, ya) {
      var za = (ya.actions || []).filter(function(bb) {
          var cb = bb.action_type,
            db = ((bb.is_forward || bb.thread_id) && (cb == l.LOG_MESSAGE || cb == l.USER_GENERATED_MESSAGE || cb == l.SEND_MESSAGE || cb == l.CLEAR_CHAT || cb == l.DELETE_THREAD || cb == l.DELETE_MESSAGES || cb == l.MARK_MESSAGES_SPAM)),
            eb = ((bb.upload_id && bb.upload_data) && (cb == l.CANCEL_ATTACHMENT_PLACEHOLDER || cb == l.CONFIRM_ATTACHMENT_PLACEHOLDER)),
            fb = (cb == l.ADD_SHARE_DATA_TO_EXISTING_MESSAGE && (bb.server_id && bb.attach_key && bb.attach_data));
          return (db || eb || fb);
        }),
        ab = ka(ya.payload_source);
      if (la(ya.payload_source)) za.forEach(function(bb) {
        if (!bb.is_forward && bb.action_type !== l.ADD_SHARE_DATA_TO_EXISTING_MESSAGE) {
          var cb = this._threads.getThreadMetaNow(bb.thread_id);
          if (cb) bb.is_cleared = bb.timestamp < cb.chat_clear_time;
        }
      }.bind(this));
      this.handleUpdates(za, ab, ya.payload_source, ya.from_client);
      if (ya.end_of_history) oa(this, ya.end_of_history, ya.payload_source);
    }.bind(this));
    ia.debug('constructed', {
      fbid: this._fbid
    });
  }
  ca(pa.prototype, {
    getMessagesFromIDs: function(wa) {
      return (wa || []).map(ja.bind(null, this)).filter(function(xa) {
        return xa;
      });
    },
    hasLoadedNMessages: function(wa, xa) {
      var ya = ma(this, wa);
      return ya.hasReachedEndOfArray() || ya.getCurrentArraySize() >= xa;
    },
    hasLoadedExactlyNMessages: function(wa, xa) {
      var ya = ma(this, wa);
      return ya.getCurrentArraySize() == xa;
    },
    clearMercuryInternalState_DO_NOT_USE: function() {
      this._failedHistoryFetchThreads = {};
      this._threadsToMessages = {};
      this._localTitanMessagesCount = {};
      this._messages = {};
      this._attachmentData = {};
      this._messagesNeedingAttachmentData = {};
      this._localIdsMap = {};
    },
    getThreadMessagesRange: function(wa, xa, ya, za, ab, bb) {
      var cb = ma(this, wa),
        db = function(lb) {
          za(qa(this, lb));
        }.bind(this),
        eb = cb.executeOrEnqueue(xa, ya, db),
        fb = cb.getUnavailableResources(eb),
        gb = this._failedHistoryFetchThreads[wa];
      if (fb.length && !gb) {
        var hb = cb.getCurrentArraySize(),
          ib = this._localTitanMessagesCount[wa] || 0,
          jb = hb - ib,
          kb = fb.length + ib;
        ia.debug('fetch_missing_messages', {
          threadID: wa,
          offset: xa,
          limit: ya,
          missingIndices: fb,
          messageCount: hb,
          localMessageCount: ib
        });
        this._serverRequests.fetchThreadMessages(wa, jb, kb, ab, bb);
      } else this._failedHistoryFetchThreads[wa] = false;
      return eb;
    },
    getThreadMessagesSinceTimestamp: function(wa, xa) {
      var ya = ma(this, wa),
        za = ya.getElementsUntil(xa);
      return qa(this, za);
    },
    hasLoadedAllMessages: function(wa) {
      return ma(this, wa).hasReachedEndOfArray();
    },
    getCurrentlyLoadedMessages: function(wa) {
      var xa = ma(this, wa).getAllResources();
      return qa(this, xa);
    },
    unsubscribe: function(wa, xa) {
      m.isThreadID(xa);
      var ya = ma(this, xa);
      ya.unsubscribe(wa);
    },
    _addAttachmentData: function(wa, xa, ya) {
      var za = ja(this, wa);
      if (za) {
        var ab = za.attachments.indexOf(xa);
        if (ab != -1) {
          za.attachments = za.attachments.map(function(bb, cb) {
            return cb === ab ? ya : bb;
          });
          this._threadInformer.updatedMessage(za.thread_id, za.message_id, 'attach');
        }
      } else {
        if (!this._attachmentData[wa]) this._attachmentData[wa] = [];
        this._attachmentData[wa].push({
          attach_key: xa,
          data: ya
        });
      }
    },
    shouldSortOutOfOrderMessages: function(wa, xa, ya) {
      if (wa == q.CLIENT_CHANNEL_MESSAGE) {
        var za = this.getThreadMessagesSinceTimestamp(xa, ya);
        if (za.length > 0) {
          h.bumpEntityKey('chat.web', 'channel.messages_reordered');
          return true;
        }
      }
      return false;
    },
    _preprocessIncomingAction: function(wa, xa) {
      var ya = wa.action_type;
      if (xa == q.CLIENT_CHANNEL_MESSAGE && ya == l.USER_GENERATED_MESSAGE && wa.threading_id && this._localIdsMap[wa.threading_id] === wa.threading_id) {
        wa.client_message_id = wa.threading_id;
        wa.status = k.SUCCESS;
        wa.action_type = l.SEND_MESSAGE;
        ya = wa.action_type;
      }
      if (xa === q.CLIENT_CHANNEL_MESSAGE && ya == l.USER_GENERATED_MESSAGE) {
        var za = this._threads.getThreadMetaNow(wa.thread_id);
        if (za && za.folder) wa.folder = za.folder;
      }
      return wa;
    },
    handleUpdates: function(wa, xa, ya, za) {
      var ab, bb = {},
        cb = {};
      for (var db = 0; db < wa.length; db++) {
        var eb = this._preprocessIncomingAction(wa[db], ya),
          fb = eb.action_type,
          gb = ja(this, eb.message_id);
        if (eb.is_forward || ya == q.SERVER_SEARCH) {
          if (!this._messages[eb.message_id]) {
            this._messages[eb.message_id] = eb;
            ta(this, eb);
          }
          continue;
        } else if (eb.client_state === p.SEND_TO_SERVER) {
          this._messages[eb.message_id] = eb;
          ta(this, eb);
          continue;
        } else if (fb == l.SEND_MESSAGE) {
          var hb = eb.client_message_id;
          if (hb && this._localIdsMap[hb] && eb.status) {
            var ib = ja(this, hb),
              jb = ib.status;
            if (ib.status == k.SUCCESS) continue;
            if (eb.status == k.UNCONFIRMED) {
              if (!cb[eb.thread_id]) cb[eb.thread_id] = [];
              cb[eb.thread_id].push(hb);
            } else if (!bb[eb.thread_id]) bb[eb.thread_id] = [];
            this._updateLocalMessage(eb);
            if (typeof jb !== (void 0) || eb.status == k.FAILED_UNKNOWN_REASON || eb.status == k.UNABLE_TO_CONFIRM || eb.status == k.SUCCESS || eb.status == k.ERROR) this._threadInformer.updatedMessage(eb.thread_id, ja(this, hb).message_id, ya);
          }
          continue;
        } else if (fb == l.DELETE_THREAD) {
          ma(this, eb.thread_id).removeAllResources();
          continue;
        } else if (fb == l.DELETE_MESSAGES) {
          this._deleteMessages(eb.thread_id, eb.message_ids, ya);
          continue;
        } else if (fb == l.CLEAR_CHAT) {
          var kb = ma(this, eb.thread_id).getAllResources();
          kb.map(ja.bind(null, this)).forEach(function(pb) {
            pb.is_cleared = true;
          });
          continue;
        } else if (fb === l.MARK_MESSAGES_SPAM) {
          this._markMessagesSpam(eb, ya);
          continue;
        } else if ((eb.threading_id && this._localIdsMap[eb.threading_id]) || (gb && !gb.is_forward)) {
          if (gb && eb.ranges && eb.ranges.length > 0) {
            gb.ranges = eb.ranges;
            this._threadInformer.updatedMessage(gb.thread_id, gb.message_id, 'link_shim');
          }
          continue;
        } else if (fb === l.CONFIRM_ATTACHMENT_PLACEHOLDER) {
          this._confirmAttachmentPlaceholder(eb.upload_id, eb.upload_data);
          continue;
        } else if (fb === l.CANCEL_ATTACHMENT_PLACEHOLDER) {
          this._cancelAttachmentPlaceholder(eb.upload_id, eb.upload_data);
          continue;
        } else if (fb === l.ADD_SHARE_DATA_TO_EXISTING_MESSAGE) {
          this._addAttachmentData(eb.server_id, eb.attach_key, eb.attach_data);
          continue;
        } else {
          if (ya === q.CLIENT_SEND_MESSAGE) {
            this._localIdsMap[eb.message_id] = eb.message_id;
            if (eb.thread_id == 'root:' + eb.message_id) ma(this, eb.thread_id).setReachedEndOfArray();
          }
          if (fb == l.LOG_MESSAGE && eb.log_message_type == o.SERVER_ERROR) this._failedHistoryFetchThreads[eb.thread_id] = true;
          if (eb.client_state === p.DO_NOT_SEND_TO_SERVER && eb.upload_id) this._uploadMessages[eb.upload_id] = eb;
          if (!bb[eb.thread_id]) bb[eb.thread_id] = [];
          bb[eb.thread_id].push(eb.message_id);
          this._messages[eb.message_id] = eb;
          ta(this, eb);
          if (eb.threading_id && eb.threading_id != eb.message_id) u.addServerID(eb.threading_id, eb.message_id);
          if (eb[x.MANUAL_RETRY_CNT] > 0) {
            ab = ma(this, eb.thread_id);
            ab.resortResources([eb.message_id]);
            this._threadInformer.reorderedMessages(eb.thread_id, q.CLIENT_SEND_MESSAGE);
          }
          xa = xa || this.shouldSortOutOfOrderMessages(ya, eb.thread_id, eb.timestamp);
          if (!xa) this._threadInformer.receivedMessage(eb);
          continue;
        }
      }
      for (var lb in bb) {
        ab = ma(this, lb);
        var mb = ab.getAllResources(),
          nb = mb.filter(function(pb) {
            var qb = this._messages[pb];
            return qb.action_type == l.LOG_MESSAGE && qb.log_message_type == o.SERVER_ERROR;
          }.bind(this));
        ab.removeResources(nb);
        if (za) ra(this, lb, bb[lb]);
        if (xa) {
          ab.addResources(bb[lb]);
          this._threadInformer.reorderedMessages(lb, ya);
        } else ab.addResourcesWithoutSorting(bb[lb].reverse(), 0);
        this._threadInformer.updatedThread(lb);
      }
      var ob = Object.keys(cb);
      if (ob.length) this._serverRequests.requestMessageConfirmation(cb);
      ia.debug('handle_updates', {
        localMessageCounts: ga(this._localTitanMessagesCount)
      });
    },
    isOutbound: function(wa) {
      return wa.author == s.getID();
    },
    isInbound: function(wa) {
      return !this.isOutbound(wa);
    },
    isSending: function(wa) {
      return (wa.status === k.UNSENT || wa.status === k.UNCONFIRMED || wa.status === k.UNABLE_TO_CONFIRM || wa.status === k.RESENDING);
    },
    isFirstMessage: function(wa) {
      var xa = ma(this, wa.thread_id);
      if (xa.getCurrentArraySize() === 0) return false;
      var ya = xa.getResourceAtIndex(xa.getCurrentArraySize() - 1),
        za = ja(this, ya).message_id,
        ab = ja(this, wa.message_id).message_id;
      return xa.hasReachedEndOfArray() && za == ab;
    },
    _isWholeThread: function(wa, xa) {
      var ya = ma(this, wa);
      return (ya.getCurrentArraySize() == xa.length && ya.hasReachedEndOfArray());
    },
    _markMessagesSpam: function(wa, xa) {
      var ya = wa,
        za = ya.thread_id,
        ab = ya.message_ids;
      if (!ab.length) return;
      if (this._isWholeThread(za, ab)) {
        ha(function() {
          return this._threadActions.markSpam(za);
        }.bind(this));
      } else {
        this._deleteIndividualMessages(wa.thread_id, wa.message_ids, xa);
        this._serverRequests.markMessagesSpam(za, ab);
      }
    },
    _deleteMessages: function(wa, xa, ya) {
      if (!xa.length) return;
      if (ya === q.CLIENT_CHANNEL_MESSAGE) this._deleteIndividualMessages(wa, xa, ya);
      if (this._isWholeThread(wa, xa)) {
        ha(function() {
          return this._threadActions["delete"](wa);
        }.bind(this));
      } else {
        this._serverRequests.deleteMessages(wa, xa);
        this._deleteIndividualMessages(wa, xa, ya);
      }
    },
    _deleteIndividualMessages: function(wa, xa, ya) {
      var za = xa.map(function(bb) {
          return ja(this, bb).message_id;
        }, this),
        ab = ma(this, wa);
      ab.removeResources(za);
      this._threadInformer.reorderedMessages(wa, ya);
    },
    _updateLocalMessage: function(wa) {
      var xa = ja(this, wa.client_message_id);
      xa.status = wa.status;
      if (wa.status === k.SUCCESS || wa.error_data) xa.error_data = wa.error_data;
      var ya = wa.message_id,
        za = wa.client_message_id;
      if (this._messages[ya]) return false;
      this._localIdsMap[za] = ya;
      this._messages[ya] = this._messages[za];
      u.addServerID(za, ya);
      this._messages[za] = {};
      var ab = ja(this, za);
      if (wa.timestamp) ab.timestamp = wa.timestamp;
      if (wa.attachments && wa.attachments.length) {
        ab.raw_attachments = null;
        ab.attachments = wa.attachments;
        ta(this, ab, ya);
      }
      if (wa.log_message_data) ab.log_message_data = wa.log_message_data;
      if (sa(ab)) this._localTitanMessagesCount[ab.thread_id] --;
      return true;
    },
    getNumberLocalMessages: function(wa) {
      return this._localTitanMessagesCount[wa] || 0;
    },
    _uploadMessages: {},
    _confirmAttachmentPlaceholder: function(wa, xa) {
      var ya = this._popPendingAttachmentMessage(wa, xa);
      this._serverRequests.sendNewMessage(ya);
    },
    _cancelAttachmentPlaceholder: function(wa, xa) {
      var ya = this._popPendingAttachmentMessage(wa, xa);
      this._deleteIndividualMessages(ya.thread_id, [ya.message_id]);
      if (this._localTitanMessagesCount[ya.thread_id]) this._localTitanMessagesCount[ya.thread_id] --;
    },
    _popPendingAttachmentMessage: function(wa, xa) {
      var ya = this._uploadMessages[wa];
      ea(ya);
      ya.image_ids = xa.image_ids;
      ya.file_ids = xa.file_ids;
      ya.audio_ids = xa.audio_ids;
      ya.gif_ids = xa.gif_ids;
      ya.client_state = p.SEND_TO_SERVER;
      delete this._uploadMessages[wa];
      return ya;
    }
  });
  Object.assign(pa, r);

  function qa(wa, xa) {
    var ya = xa.map(ja.bind(null, wa));
    return ya.reverse();
  }

  function ra(wa, xa, ya) {
    var za = ya.filter(function(ab) {
      return sa(ja(wa, ab));
    });
    if (!wa._localTitanMessagesCount[xa]) wa._localTitanMessagesCount[xa] = 0;
    wa._localTitanMessagesCount[xa] += za.length;
  }

  function sa(wa) {
    var xa = wa.action_type;
    if (xa == l.USER_GENERATED_MESSAGE) return true;
    switch (wa.log_message_type) {
      case o.SUBSCRIBE:
      case o.UNSUBSCRIBE:
      case o.SERVER_ERROR:
      case o.LIVE_LISTEN:
        return false;
      default:
        return true;
    }
  }

  function ta(wa, xa, ya) {
    ya = ya || xa.message_id;
    var za = wa._attachmentData[ya];
    if (za) {
      za.forEach(function(ab) {
        var bb = xa.attachments.indexOf(ab.attach_key);
        if (bb !== -1) xa.attachments[bb] = ab.data;
      });
      delete wa._attachmentData[ya];
    } else if (!xa.is_forward && ua(wa, xa)) {
      wa._messagesNeedingAttachmentData[ya] = true;
      va(wa);
    }
  }

  function ua(wa, xa) {
    if (!xa || !xa.attachments) return false;
    for (var ya = 0; ya < xa.attachments.length; ya++) {
      var za = xa.attachments[ya];
      if (typeof za === 'string' && za.indexOf(n.SHARE) === 0) return true;
    }
    var ab = xa.forward_message_ids || [];
    for (ya = 0; ya < ab.length; ya++) {
      var bb = ja(wa, ab[ya]);
      if (ua(wa, bb)) return true;
    }
    return false;
  }
  var va = da(function(wa) {
    var xa = {};
    for (var ya in wa._messagesNeedingAttachmentData) {
      var za = ja(wa, ya);
      if (ua(wa, za)) xa[ya] = true;
    }
    var ab = Object.keys(xa);
    if (ab.length) {
      var bb = {
        message_ids: ab
      };
      if (wa._fbid != i.getID()) bb.request_user_id = wa._fbid;
      new g('/ajax/mercury/attachments/fetch_shares.php').setData(bb).setAllowCrossPageTransition(true).send();
    }
    wa._messagesNeedingAttachmentData = {};
  }, 0, this);
  e.exports = pa;
}, null);
__d("MercuryChannelHandler", ["Arbiter", "ChannelConstants", "MercuryActionType", "MercuryGlobalActionType", "MercuryMessages", "MercuryPayloadSource", "MercuryServerRequests", "MercurySingletonMixin", "MercuryThreadInformer", "MercuryViewer", "MessagingEvent", "MessagingReliabilityLogger", "MessagingTag", "PresenceUtil", "copyProperties", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
  var w = v(n);
  for (var x in w)
    if (w.hasOwnProperty(x)) z[x] = w[x];
  var y = w === null ? null : w.prototype;
  z.prototype = Object.create(y);
  z.prototype.constructor = z;
  z.__superConstructor__ = w;

  function z(aa) {
    "use strict";
    this.$MercuryChannelHandler0 = aa;
    this.$MercuryChannelHandler1 = m.getForFBID(this.$MercuryChannelHandler0);
    this.$MercuryChannelHandler2 = o.getForFBID(this.$MercuryChannelHandler0);
    this.$MercuryChannelHandler3 = k.getForFBID(this.$MercuryChannelHandler0);
    this.$MercuryChannelHandler4 = [];
  }
  z.prototype.getInstanceFBID = function() {
    "use strict";
    return this.$MercuryChannelHandler0;
  };
  z.prototype.$MercuryChannelHandler5 = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || !ba.obj || !ba.obj.message) {
      r.addEntry('channel_receive', 'invalid_data');
      return;
    }
    var ca = ba.obj.message,
      da = ca.other_user_fbid ? ca.other_user_fbid : ca.thread_fbid,
      ea = {
        author: ca.mercury_author_id,
        author_email: ca.mercury_author_email,
        body: ca.body,
        subject: ca.subject,
        has_attachment: ca.has_attachment,
        attachments: ca.attachments,
        html_body: ca.html_body,
        thread_id: ca.tid,
        thread_fbid: ca.thread_fbid,
        other_user_fbid: ca.other_user_fbid,
        message_id: ca.mid,
        coordinates: ca.mercury_coordinates,
        is_spoof_warning: ca.is_spoof_warning,
        ranges: ca.ranges,
        source: ca.mercury_source,
        source_tags: ca.mercury_source_tags,
        threading_id: ca.threading_id,
        timestamp: ca.timestamp,
        timestamp_absolute: ca.timestamp_absolute,
        timestamp_relative: ca.timestamp_relative,
        timestamp_time_passed: ca.timestamp_time_passed,
        action_type: i.USER_GENERATED_MESSAGE,
        is_unread: ca.is_unread,
        is_forward: false,
        forward_count: ca.forward_count || ca.forward,
        forward_message_ids: ca.forward_msg_ids,
        location_text: ca.location_text,
        folder: ba.obj.folder
      };
    if ("sync_id" in ca) {
      ea.sync_id = ca.sync_id;
    } else ea.action_id = ca.action_id;
    var fa = [u({}, ea)];
    fa = fa.concat(ca.forward_actions || []);
    var ga = l.CLIENT_CHANNEL_MESSAGE;
    this.$MercuryChannelHandler1.handleUpdateWaitForThread({
      actions: fa,
      payload_source: ga
    }, da);
    if (!ca.is_unread && p.isViewer(ca.mercury_author_id)) {
      var ha = {};
      ha[da] = ba.obj.folder;
      this.$MercuryChannelHandler7(this.__getMessagingPayloadType(), {
        obj: {
          event: q.READ,
          thread_fbids: ca.thread_fbid ? [ca.thread_fbid] : [],
          other_user_fbids: ca.other_user_fbid ? [ca.other_user_fbid] : [],
          folder_info: ha,
          timestamp: ca.timestamp
        }
      });
    }
    r.addEntry('channel_receive', 'success', [da, ea.message_id, t.getSessionID()]);
  };
  z.prototype.$MercuryChannelHandler7 = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || !ba.obj || (!ba.obj.thread_fbids && !ba.obj.other_user_fbids)) return;
    var ca = [],
      da = ba.obj.event == q.READ;
    (ba.obj.thread_fbids || []).forEach(function(ea) {
      ca.push({
        action_type: i.CHANGE_READ_STATUS,
        action_id: null,
        thread_fbid: ea,
        mark_as_read: da,
        timestamp: ba.obj.timestamp || 0,
        folder: ba.obj.folder_info[ea]
      });
    });
    (ba.obj.other_user_fbids || []).forEach(function(ea) {
      ca.push({
        action_type: i.CHANGE_READ_STATUS,
        action_id: null,
        other_user_fbid: ea,
        mark_as_read: da,
        timestamp: ba.obj.timestamp || 0,
        folder: ba.obj.folder_info[ea]
      });
    });
    this.$MercuryChannelHandler1.handleUpdate({
      actions: ca,
      payload_source: l.CLIENT_CHANNEL_MESSAGE
    });
  };
  z.prototype.$MercuryChannelHandler8 = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || !ba.obj || !(ba.obj.thread_fbids || ba.obj.other_user_fbids)) return;
    var ca = [];
    (ba.obj.thread_fbids || []).forEach(function(da) {
      ca.push({
        action_type: i.DELETE_THREAD,
        action_id: null,
        thread_fbid: da
      });
    });
    (ba.obj.other_user_fbids || []).forEach(function(da) {
      ca.push({
        action_type: i.DELETE_THREAD,
        action_id: null,
        other_user_fbid: da
      });
    });
    this.$MercuryChannelHandler1.handleUpdate({
      actions: ca,
      payload_source: l.CLIENT_CHANNEL_MESSAGE
    });
  };
  z.prototype.$MercuryChannelHandler9 = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || !ba.obj || (!ba.obj.thread_fbids && !ba.obj.other_user_fbids) || !ba.obj.mids) return;
    var ca = ba.obj.thread_fbids.length ? ba.obj.thread_fbids[0] : null,
      da = ba.obj.other_user_fbids.length ? ba.obj.other_user_fbids[0] : null,
      ea = {
        action_type: i.DELETE_MESSAGES,
        action_id: null,
        thread_fbid: ca,
        other_user_fbid: da,
        message_ids: ba.obj.mids
      };
    this.$MercuryChannelHandler1.handleUpdate({
      actions: [ea],
      threads: [ba.obj.updated_thread],
      payload_source: l.CLIENT_CHANNEL_MESSAGE
    });
  };
  z.prototype.$MercuryChannelHandlera = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || !ba.obj || !ba.obj.folder) return;
    var ca = {
      action_type: j.MARK_ALL_READ,
      action_id: ba.obj.action_id,
      folder: ba.obj.folder
    };
    this.$MercuryChannelHandler1.handleUpdate({
      global_actions: [ca]
    });
  };
  z.prototype.$MercuryChannelHandlerb = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || (!ba.obj.thread_fbids && !ba.obj.other_user_fbids)) return;
    var ca = l.CLIENT_CHANNEL_MESSAGE;
    (ba.obj.thread_fbids || []).forEach(function(da) {
      var ea = {
        action_type: i.CHANGE_ARCHIVED_STATUS,
        action_id: null,
        thread_fbid: da,
        other_user_fbid: null,
        archived: ba.obj.state
      };
      this.$MercuryChannelHandler1.handleUpdateWaitForThread({
        actions: [u({}, ea)],
        payload_source: ca
      }, da);
    }, this);
    (ba.obj.other_user_fbids || []).forEach(function(da) {
      var ea = {
        action_type: i.CHANGE_ARCHIVED_STATUS,
        action_id: null,
        thread_fbid: null,
        other_user_fbid: da,
        archived: ba.obj.state
      };
      this.$MercuryChannelHandler1.handleUpdateWaitForThread({
        actions: [u({}, ea)],
        payload_source: ca
      }, da);
    }, this);
  };
  z.prototype.$MercuryChannelHandlerc = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || (!ba.obj.thread_fbids && !ba.obj.other_user_fbids)) return;
    var ca = l.CLIENT_CHANNEL_MESSAGE,
      da;
    (ba.obj.thread_fbids || []).forEach(function(ea) {
      if (ba.obj.event == q.TAG) {
        da = ba.obj.tag;
      } else da = ba.obj.marked_as_spam ? s.SPAM : s.INBOX;
      var fa = {
        action_type: i.CHANGE_FOLDER,
        action_id: null,
        thread_fbid: ea,
        other_user_fbid: null,
        new_folder: da
      };
      this.$MercuryChannelHandler1.handleUpdateWaitForThread({
        actions: [u({}, fa)],
        payload_source: ca
      }, ea);
    }, this);
    (ba.obj.other_user_fbids || []).forEach(function(ea) {
      if (ba.obj.event == q.TAG) {
        da = ba.obj.tag;
      } else da = ba.obj.marked_as_spam ? s.SPAM : s.INBOX;
      var fa = {
        action_type: i.CHANGE_FOLDER,
        action_id: null,
        other_user_fbid: ea,
        thread_fbid: null,
        new_folder: da
      };
      this.$MercuryChannelHandler1.handleUpdateWaitForThread({
        actions: [u({}, fa)],
        payload_source: ca
      }, ea);
    }, this);
  };
  z.prototype.$MercuryChannelHandlerd = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || !ba.obj.tag) return;
    switch (ba.obj.tag) {
      case s.ACTION_ARCHIVED:
        this.$MercuryChannelHandlerb(aa, ba);
        break;
      case s.INBOX:
      case s.OTHER:
        this.$MercuryChannelHandlerc(aa, ba);
        break;
    }
  };
  z.prototype.__markAsSeen = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandlere(aa) || !ba.obj || !ba.obj.seen_timestamp) return;
    this.$MercuryChannelHandler1.handleUpdate({
      message_counts: [{
        seen_timestamp: ba.obj.seen_timestamp,
        folder: s.INBOX
      }],
      unseen_thread_fbids: [{
        thread_fbids: [],
        other_user_fbids: [],
        folder: s.INBOX
      }],
      payload_source: l.CLIENT_CHANNEL_MESSAGE
    });
  };
  z.prototype.__updateModelsFromMercuryPayload = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandlerf(aa) || !ba.obj) return;
    this.$MercuryChannelHandler2.synchronizeInforms(function() {
      var ca = ba.obj,
        da = [];
      (ca.actions || []).forEach(function(ea) {
        var fa = i.USER_GENERATED_MESSAGE;
        if (ea.action_type == i.LOG_MESSAGE) {
          var ga = l.CLIENT_CHANNEL_MESSAGE,
            ha;
          ha = ea.other_user_fbid || ea.thread_fbid;
          this.$MercuryChannelHandler1.handleUpdateWaitForThread({
            actions: [u({}, ea)],
            payload_source: ga
          }, ha);
        } else if (ea.action_type != fa) da.push(ea);
      }, this);
      ca.actions = da;
      ca.payload_source = l.CLIENT_CHANNEL_MESSAGE;
      this.$MercuryChannelHandler1.handleUpdate(ca);
    }.bind(this));
  };
  z.prototype.$MercuryChannelHandlerg = function(aa, ba) {
    "use strict";
    this.$MercuryChannelHandler1.handleRoger(ba.obj);
  };
  z.prototype.$MercuryChannelHandlerh = function(aa, ba) {
    "use strict";
    if (!this.$MercuryChannelHandler6(aa) || !ba.obj || ba.obj.mute_settings === (void 0) || (!ba.obj.thread_fbid && !ba.obj.other_user_fbid)) return;
    var ca = i.CHANGE_MUTE_SETTINGS,
      da = [{
        action_type: ca,
        action_id: null,
        thread_fbid: ba.obj.thread_fbid,
        other_user_fbid: ba.obj.other_user_fbid,
        mute_settings: ba.obj.mute_settings
      }];
    this.$MercuryChannelHandler1.handleUpdate({
      actions: da,
      payload_source: l.CLIENT_CHANNEL_MESSAGE
    });
  };
  z.prototype.__handleMessagingPayload = function(aa, ba) {
    "use strict";
    switch (ba.obj.event) {
      case q.DELIVER:
        this.$MercuryChannelHandler5(aa, ba);
        break;
      case q.READ:
      case q.UNREAD:
        this.$MercuryChannelHandler7(aa, ba);
        break;
      case q.READ_ALL:
        this.$MercuryChannelHandlera(aa, ba);
        break;
      case q.DELETE:
        this.$MercuryChannelHandler8(aa, ba);
        break;
      case q.DELETE_MESSAGES:
        this.$MercuryChannelHandler9(aa, ba);
        break;
      case q.TAG:
        this.$MercuryChannelHandlerd(aa, ba);
        break;
      case q.REPORT_SPAM:
        this.$MercuryChannelHandlerc(aa, ba);
        break;
      case q.READ_RECEIPT:
        this.$MercuryChannelHandlerg(aa, ba);
        break;
      case q.CHANGE_MUTE_SETTINGS:
        this.$MercuryChannelHandlerh(aa, ba);
        break;
    }
  };
  z.prototype.getRouting = function() {
    "use strict";
    return {
      mercury: this.__updateModelsFromMercuryPayload,
      messaging: this.__handleMessagingPayload,
      inbox: this.__markAsSeen
    };
  };
  z.prototype.__getMessagingPayloadType = function() {
    "use strict";
    return h.getArbiterType('messaging');
  };
  z.prototype.__getMercuryPayloadType = function() {
    "use strict";
    return h.getArbiterType('mercury');
  };
  z.prototype.__getInboxPayloadType = function() {
    "use strict";
    return h.getArbiterType('inbox');
  };
  z.prototype.$MercuryChannelHandler6 = function(aa) {
    "use strict";
    return (aa == this.__getMessagingPayloadType());
  };
  z.prototype.$MercuryChannelHandlerf = function(aa) {
    "use strict";
    return (aa == this.__getMercuryPayloadType());
  };
  z.prototype.$MercuryChannelHandlere = function(aa) {
    "use strict";
    return (aa == this.__getInboxPayloadType());
  };
  z.prototype.turnOn = function() {
    "use strict";
    if (!this.$MercuryChannelHandler4.length) {
      var aa = this.getRouting();
      for (var ba in aa) this.$MercuryChannelHandler4.push(g.subscribe(h.getArbiterType(ba), aa[ba].bind(this)));
    }
    return this;
  };
  z.prototype.turnOff = function() {
    "use strict";
    if (this.$MercuryChannelHandler4.length) {
      this.$MercuryChannelHandler4.forEach(g.unsubscribe);
      this.$MercuryChannelHandler4 = [];
    }
    return this;
  };
  u(z, n);
  e.exports = z;
}, null);
__d("MercuryRoger", ["Arbiter", "ArbiterMixin", "immutable", "JSLogger", "MercuryActionStatus", "copyProperties", "mapObject", "MercuryServerRequests", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = b('MercuryServerRequests').get(),
    o = b('MercuryThreads').get(),
    p = {},
    q = [],
    r = k.SUCCESS,
    s = {
      getSeenBy: function(u, v) {
        if (!u) return [];
        var w = [],
          x = p[u.thread_id];
        if (!x) return w;
        x.forEach(function(y, z) {
          if (y > u.timestamp && (u.status === (void 0) || u.status === r) && (!v || z != u.author)) w.push(z);
        });
        return w;
      },
      getSeenTimestamps: function(u) {
        var v = p[u];
        if (!v) {
          v = i.OrderedMap();
          p[u] = v;
        }
        return v;
      },
      getSeenTimestamp: function(u, v) {
        var w = p[u];
        return w ? w.get(v) : null;
      }
    };
  l(s, h);
  n.subscribe('update-roger', function(u, v) {
    for (var w in v) {
      var x = p[w] || i.OrderedMap();
      x = x.withMutations(function(y) {
        for (var z in v[w]) {
          var aa = o.getThreadMetaNow(w);
          if (aa && aa.participants)
            if (aa.participants.indexOf(z) == -1) {
              q.push(t(p));
              continue;
            }
          var ba = y.get(z),
            ca = v[w][z];
          if (!ba || ca > ba) y.set(z, ca);
        }
      });
      p[w] = x.sort();
    }
    v && s.inform('change', v);
  });
  g.subscribe(j.DUMP_EVENT, function(u, v) {
    v.bad_read_receipts = {
      receipts: q
    };
  });

  function t(u) {
    return m(u, function(v) {
      return v.toJS();
    });
  }
  e.exports = s;
}, null);
__d("MercuryDelayedRoger", ["ArbiterMixin", "LiveTimer", "MercuryActionStatus", "MercuryConfig", "MercuryRoger", "copyProperties", "setTimeoutAcrossTransitions", "MercuryMessages", "MercuryThreadInformer", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = b('MercuryMessages').get(),
    o = b('MercuryThreadInformer').get(),
    p = b('MercuryThreads').get(),
    q = {},
    r = {},
    s = j['roger.seen_delay'],
    t = l({
      getSeenBy: function(x, y) {
        if (r[x]) return [];
        if (!q[x]) {
          var z = p.getThreadMetaNow(x);
          if (z) q[x] = {
            thread_id: x,
            author: z.participants[0],
            timestamp: z.timestamp
          };
        }
        return k.getSeenBy(q[x], y);
      }
    }, g);

  function u(x) {
    var y = false;
    n.getThreadMessagesRange(x, 0, 1, function(z) {
      var aa = z[0];
      if (!aa) return;
      var ba = aa.timestamp;
      if (aa.action_id || aa.status == i.SUCCESS) ba -= h.getServerTimeOffset();
      var ca = t.getSeenBy(x);
      if (r[x]) {
        clearTimeout(r[x]);
        delete r[x];
      }
      var da = ba + s,
        ea = da - Date.now();
      if (ea > 0) r[x] = m(function() {
        delete r[x];
        v(x);
      }, ea);
      q[x] = aa;
      var fa = t.getSeenBy(x);
      if (ca.length || fa.length) y = true;
    });
    return y;
  }

  function v(x) {
    var y = {};
    y[x] = true;
    t.inform('state-changed', y);
  }

  function w(event, x) {
    var y = {};
    for (var z in x)
      if (u(z)) y[z] = true;
    for (var aa in y) {
      t.inform('state-changed', y);
      break;
    }
  }
  k.subscribe('change', function(x, y) {
    for (var z in y) !r[z] && v(z);
  });
  o.subscribe('messages-received', w);
  o.subscribe('messages-reordered', w);
  o.subscribe('messages-updated', w);
  e.exports = t;
}, null);