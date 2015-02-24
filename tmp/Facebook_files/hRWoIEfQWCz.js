if (self.CavalryLogger) {
  CavalryLogger.start_js(["JYG2+"]);
}
__d("MercuryActionStatus", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    UNSENT : 0,
    SUCCESS : 1,
    UNCONFIRMED : 3,
    FAILED_UNKNOWN_REASON : 4,
    UNABLE_TO_CONFIRM : 5,
    RESENT : 6,
    RESENDING : 7,
    ERROR : 10
  };
}, null);
__d("MercuryActionType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    LOG_MESSAGE : "ma-type:log-message",
    USER_GENERATED_MESSAGE : "ma-type:user-generated-message",
    CHANGE_READ_STATUS : "ma-type:change_read_status",
    MARK_THREAD_SEEN : "ma-type:mark_thread_seen",
    CHANGE_MUTE_SETTINGS : "ma-type:change-mute-settings",
    CLEAR_CHAT : "ma-type:clear_chat",
    SEND_MESSAGE : "ma-type:send-message",
    UPDATE_ACTION_ID : "ma-type:update-action-id",
    DELETE_MESSAGES : "ma-type:delete-messages",
    MARK_MESSAGES_SPAM : "ma-type:mark-messages-spam",
    DELETE_THREAD : "ma-type:delete-thread",
    CHANGE_ARCHIVED_STATUS : "ma-type:change-archived-status",
    CHANGE_FOLDER : "ma-type:change-folder",
    ADD_PARTICIPANTS : "ma-type:add-participants",
    CANCEL_ATTACHMENT_PLACEHOLDER : "ma-type:cancel-attachment-placeholder",
    CONFIRM_ATTACHMENT_PLACEHOLDER : "ma-type:confirm-attachment-placeholder",
    ADD_SHARE_DATA_TO_EXISTING_MESSAGE : "ma-type:add-share-data-to-existing-message",
    UNPIN_THREAD : "ma-type:unpin-thread"
  };
}, null);
__d("MercuryAPIArgsSource", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    CHAT : "chat",
    JEWEL : "jewel",
    MERCURY : "mercury",
    WEBMESSENGER : "web_messenger"
  };
}, null);
__d("MercuryAttachmentContentType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    PHOTO : "attach:image",
    VIDEO : "attach:video",
    MUSIC : "attach:music",
    VOICE : "attach:voice",
    TEXT : "attach:text",
    MSWORD : "attach:ms:word",
    MSXLS : "attach:ms:xls",
    MSPPT : "attach:ms:ppt",
    ORION : "attach:orion",
    SHOERACK_INVITATION : "attach:shoerackinvite",
    UNKNOWN : "attach:unknown"
  };
}, null);
__d("MercuryAttachmentType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    ERROR : "error",
    FILE : "file",
    PHOTO : "photo",
    STICKER : "sticker",
    SHARE : "share",
    UNKNOWN : "unknown",
    VIDEO : "video",
    GIF : "gif"
  };
}, null);
__d("MercuryAudioType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    AudioClip : "fb_voice_message",
    VoiceMessageWithTranscript : "fb_voice_message_with_transcript"
  };
}, null);
__d("MercuryErrorType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    SERVER : 1,
    TRANSPORT : 2,
    TIMEOUT : 3
  };
}, null);
__d("MercuryGlobalActionType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    MARK_ALL_READ : "mga-type:mark-all-read"
  };
}, null);
__d("MercuryLogMessageType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    SUBSCRIBE : "log:subscribe",
    UNSUBSCRIBE : "log:unsubscribe",
    VIDEO_CALL : "log:video-call",
    PHONE_CALL : "log:phone-call",
    THREAD_NAME : "log:thread-name",
    THREAD_IMAGE : "log:thread-image",
    SERVER_ERROR : "log:error-msg",
    LIVE_LISTEN : "log:live-listen",
    WALLPAPER : "log:wallpaper",
    ORION : "log:orion",
    SWITCH_TO_WORK : "log:switch",
    PAGE_REPLY : "log:page-reply"
  };
}, null);
__d("MercuryMessageSourceTags", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    CHAT : "source:chat",
    EMAIL : "source:email",
    MESSENGER : "source:messenger",
    MOBILE : "source:mobile"
  };
}, null);
__d("MercuryParticipantTypes", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    USER : "user",
    THREAD : "thread",
    EVENT : "event",
    PAGE : "page",
    FRIEND : "friend"
  };
}, null);
__d("MercuryPayloadSource", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    UNKNOWN : "unknown",
    CLIENT_CHANNEL_MESSAGE : "client_channel_message",
    CLIENT_SEND_MESSAGE : "client_send_message",
    CLIENT_CHANGE_ARCHIVED_STATUS : "client_change-archived_status",
    CLIENT_CHANGE_FOLDER : "client_change_folder",
    CLIENT_CHANGE_MUTE_SETTINGS : "client_change_mute_settings",
    CLIENT_CHANGE_READ_STATUS : "client_change_read_status",
    CLIENT_MARK_THREAD_SEEN : "client_mark_thread_seen",
    CLIENT_ADD_PARTICIPANTS : "client_add_participants",
    CLIENT_FETCH_PARTICIPANTS : "client_fetch_participants",
    CLIENT_CLEAR_CHAT : "client_clear_chat",
    CLIENT_DELETE_MESSAGES : "client_delete_messages",
    CLIENT_MARK_MESSAGES_SPAM : "client_mark_messages_spam",
    CLIENT_DELETE_THREAD : "client_delete_thread",
    CLIENT_HANDLE_ERROR : "client_handle_error",
    CLIENT_UNPIN_THREAD : "client_unpin_thread",
    SERVER_INITIAL_DATA : "server_initial_data",
    SERVER_SEND_MESSAGE : "server_send_message",
    SERVER_CONFIRM_MESSAGES : "server_confirm_messages",
    SERVER_CHANGE_ARCHIVED_STATUS : "server_change_archived_status",
    SERVER_CHANGE_READ_STATUS : "server_change_read_status",
    SERVER_MARK_FOLDER_READ : "server_mark_folder_read",
    SERVER_MARK_SEEN : "server_mark_seen",
    SERVER_FETCH_PARTICIPANTS : "server_fetch_participants",
    SERVER_FETCH_THREAD_INFO : "server_fetch_thread_info",
    SERVER_FETCH_THREADLIST_INFO : "server_fetch_threadlist_info",
    SERVER_STANDALONE_NOTIFICATIONS : "server_standalone_notifications",
    SERVER_THREAD_SYNC : "server_thread_sync",
    SERVER_TAB_PRESENCE : "server_tab_presence",
    SERVER_UNREAD_THREADS : "server_unread_threads",
    SERVER_SEARCH : "server_search",
    SERVER_ADD_SHARE_DATA_TO_EXISTING_MESSAGE : "server_add_share_data_to_existing_message"
  };
}, null);
__d("MercurySendMessageFields", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    AUTO_RETRY_CNT : "auto_retry_cnt",
    MANUAL_RETRY_CNT : "manual_retry_cnt"
  };
}, null);
__d("MercurySourceType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    CHAT_ORCA : "source:chat:orca",
    CHAT_IPHONE : "source:chat:iphone",
    CHAT_JABBER : "source:chat:jabber",
    CHAT_MEEBO : "source:chat:meebo",
    CHAT_WEB : "source:chat:web",
    CHAT_TEST : "source:chat:test",
    CHAT : "source:chat",
    EMAIL : "source:email",
    GIGABOXX_API : "source:gigaboxx:api",
    GIGABOXX_BLAST : "source:gigaboxx:blast",
    GIGABOXX_EMAIL_REPLY : "source:gigaboxx:emailreply",
    GIGABOXX_MOBILE : "source:gigaboxx:mobile",
    GIGABOXX_WAP : "source:gigaboxx:wap",
    GIGABOXX_WEB : "source:gigaboxx:web",
    LEIA : "source:leia",
    MESSENGER_WEB : "source:messenger:web",
    SAM_UFI : "source:sam:ufi",
    SHARE_DIALOG : "source:share:dialog",
    SEND_PLUGIN : "source:sendplugin",
    SMS : "source:sms",
    TEST : "source:test",
    TITAN_WAP : "source:titan:wap",
    TITAN_M_BASIC : "source:titan:m_basic",
    TITAN_M_FREE : "source:titan:m_free_basic",
    TITAN_M_JAPAN : "source:titan:m_japan",
    TITAN_M_MINI : "source:titan:m_mini",
    TITAN_M_TOUCH : "source:titan:m_touch",
    TITAN_M_APP : "source:titan:m_app",
    TITAN_M_TABLET : "source:titan:m_tablet",
    TITAN_M_ZERO : "source:titan:m_zero",
    TITAN_M_TALK : "source:titan:m_talk",
    TITAN_WEB : "source:titan:web",
    TITAN_FACEWEB_ANDROID : "source:titan:faceweb_android",
    TITAN_FACEWEB_BUFFY : "source:titan:faceweb_buffy",
    TITAN_FACEWEB_IPAD : "source:titan:faceweb_ipad",
    TITAN_FACEWEB_IPHONE : "source:titan:faceweb_iphone",
    TITAN_FACEWEB_UNKNOWN : "source:titan:faceweb_unknown",
    TITAN_API : "source:titan:api",
    TITAN_API_MOBILE : "source:titan:api_mobile",
    TITAN_ORCA : "source:titan:orca",
    TITAN_EMAIL_REPLY : "source:titan:emailreply",
    MOBILE : "source:mobile",
    PAGE_PLATFORM_API : "source:page_platform_api",
    UNKNOWN : "source:unknown",
    WEB : "source:web",
    HELPCENTER : "source:helpcenter",
    NEW_SHARE_DIALOG : "source:share:dialog:new",
    PAID_PROMOTION : "source:paid_promotion",
    BUFFY_SMS : "source:buffy:sms",
    WEBRTC_MOBILE : "source:webrtc:mobile",
    MESSENGER_COMMERCE : "source:messenger:commerce"
  };
}, null);
__d("MercuryThreadMode", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    EMAIL_ORIGINATED : 1,
    TITAN_ORIGINATED : 2,
    OBJECT_ORIGINATED : 3
  };
}, null);
__d("MercuryTimePassed", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    TODAY : 0,
    WEEK_AGO : 1,
    MONTH_AGO : 2,
    CURRENT_YEAR : 3,
    OTHER_YEAR : 4
  };
}, null);
__d("MessagingEvent", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    DELETE : "delete",
    DELETE_MESSAGES : "delete_messages",
    DELIVER : "deliver",
    ERROR : "error",
    READ : "read",
    REPORT_SPAM : "report_spam",
    REPORT_SPAM_MESSAGES : "report_spam_messages",
    UNMARK_SPAM : "unmark_spam",
    SUBSCRIBE : "subscribe",
    CHANGE_MUTE_SETTINGS : "change_mute_settings",
    TAG : "tag",
    UNREAD : "unread",
    UNSUBSCRIBE : "unsubscribe",
    DELIVER_LOG : "deliver_log",
    MORE_THREADS : "more_threads",
    READ_ALL : "read_all",
    READ_RECEIPT : "read_receipt",
    DELIVERY_RECEIPT : "delivery_receipt",
    SENT_PUSH : "sent_push",
    DELIVER_FAST_PAST : "deliver_fast_path",
    MESSENGER_STATUS : "messenger_status",
    UPDATE_PINNED_THREADS : "update_pinned_threads"
  };
}, null);
__d("MessagingTag", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    GROUPS : "groups",
    UNREAD : "unread",
    ACTION_ARCHIVED : "action:archived",
    INBOX : "inbox",
    OTHER : "other",
    EVENT : "event",
    SENT : "sent",
    SMS_MUTE : "sms_mute",
    SPAM : "spam",
    UPDATES : "broadcasts_inbox",
    BCC : "header:bcc",
    FILTERED_CONTENT : "filtered_content",
    UNAVAILABLE_ATTACHMENT : "unavailable_attachment",
    ARCHIVED : "archived",
    EMAIL : "email",
    VOICEMAIL : "voicemail",
    SPAM_SPOOFING : "spam:spoofing",
    SPOOF_WARNING : "MTA:spoof_warning",
    SMS_TAG_ROOT : "SMSShortcode:",
    APP_ID_ROOT : "app_id:",
    DOMAIN_AUTH_PASS : "MTA:dmarc:pass",
    DOMAIN_AUTH_FAIL : "MTA:dmarc:fail",
    MTA_SYSTEM_MESSAGE : "MTA:system_message",
    EMAIL_MESSAGE : "source:email"
  };
}, null);
__d("PagesMessagingConst", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    LOAD_MESSAGE_THREAD_URI : "/ajax/pages/messages/load_message_thread.php",
    ASYNC_ENDPOINT : "/ajax/messaging/async.php"
  };
}, null);
__d("PhotoResizeModeConst", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    CONTAIN : "s",
    COVER : "p"
  };
}, null);
__d("ChatImpressionLogger", ["AsyncSignal", "requireWeak", "ChatConfig", "ChatVisibility", "Poller", "PresencePrivacy", "PresenceStatus", "debounceAcrossTransitions", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, JSONRequest, $sanitize, $templateCache, AngularForce, Model, left, accessor, subscribe, getter) {
  /**
   * @return {?}
   */
  function typeToString() {
    if (!bulk) {
      return "";
    }
    return bulk.getCachedSortedList().toString();
  }
  /**
   * @return {?}
   */
  function format() {
    if (!bulk || !text) {
      return "";
    }
    /** @type {Array} */
    var safe = [];
    var codeSegments = bulk.getCachedSortedList();
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      safe[i] = text.get(codeSegments[i]);
    }
    return safe.toString();
  }
  /**
   * @param {?} pool
   * @return {undefined}
   */
  function fetch(pool) {
    pool.setURI("/ajax/chat/imps_logging.php").setData({
      list_availability : format(),
      sorted_list : typeToString(),
      source : "periodical_imps"
    });
  }
  /** @type {null} */
  var text = null;
  $sanitize(["AvailableList"], function(textAlt) {
    return text = textAlt;
  });
  /** @type {null} */
  var bulk = null;
  var Users = {
    /**
     * @param {?} fn
     * @return {undefined}
     */
    init : function(fn) {
      bulk = fn;
      var chat_impression_logging_periodical = $templateCache.get("chat_impression_logging_periodical", 0);
      if (chat_impression_logging_periodical) {
        var timerInterval = $templateCache.get("periodical_impression_logging_config.interval");
        var model = new Model({
          interval : timerInterval,
          /** @type {function (?): undefined} */
          setupRequest : fetch,
          clearOnQuicklingEvents : false,
          dontStart : true
        });
        left.subscribe("privacy-user-presence-changed", subscribe(function() {
          if (AngularForce.isOnline()) {
            model.start();
          } else {
            model.stop();
          }
        }));
      }
      /**
       * @return {undefined}
       */
      this.init = function() {
      };
    },
    /**
     * @param {string} deepDataAndEvents
     * @param {Object} item
     * @param {?} name
     * @return {undefined}
     */
    logImpression : function(deepDataAndEvents, item, name) {
      var n = $templateCache.get("chat_impression_logging_with_click");
      var data = {
        list_availability : n ? format() : "",
        sorted_list : n ? typeToString() : "",
        source : deepDataAndEvents,
        target : item,
        target_presence : accessor.get(item),
        viewport_width : document.body.clientWidth
      };
      (new JSONRequest("/ajax/chat/ct.php", getter(data, name))).send();
    }
  };
  module.exports = Users;
}, null);
__d("ChatWelcomeMessage", ["ImmutableObject"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Language) {
  /**
   * @return {undefined}
   */
  function Collection() {
    this.$ChatWelcomeMessage0 = {};
  }
  /**
   * @param {?} key
   * @param {string} author
   * @param {string} millis
   * @return {undefined}
   */
  Collection.prototype.setWelcomeMessage = function(key, author, millis) {
    this.$ChatWelcomeMessage0[key] = new Language({
      timestamp : Date.now(),
      thread_id : key,
      author : author,
      body : millis
    });
  };
  /**
   * @param {?} timeoutKey
   * @return {?}
   */
  Collection.prototype.getWelcomeMessage = function(timeoutKey) {
    return this.$ChatWelcomeMessage0[timeoutKey];
  };
  var ret = new Collection;
  module.exports = ret;
}, null);
__d("MercuryIDs", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var state = {
    /**
     * @param {string} type
     * @return {?}
     */
    isValid : function(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      return/^\w{3,12}:/.test(type);
    },
    /**
     * @param {string} input
     * @return {?}
     */
    isValidThreadID : function(input) {
      if (!state.isValid(input)) {
        return false;
      }
      var node = state.tokenize(input);
      switch(node.type) {
        case "user":
        ;
        case "group":
        ;
        case "thread":
        ;
        case "root":
        ;
        case "pending":
          return true;
        default:
          return false;
      }
    },
    /**
     * @param {string} selector
     * @return {?}
     */
    tokenize : function(selector) {
      if (!this.isValid(selector)) {
        throw "bad_id_format " + selector;
      }
      var selectorBreak = selector.indexOf(":");
      return{
        type : selector.substr(0, selectorBreak),
        value : selector.substr(selectorBreak + 1)
      };
    },
    /**
     * @param {string} name
     * @return {?}
     */
    getUserIDFromParticipantID : function(name) {
      if (!this.isValid(name)) {
        throw "bad_id_format " + name;
      }
      var event = state.tokenize(name);
      var type = event.type;
      var image = event.value;
      if (type != "fbid") {
        return null;
      }
      return image;
    },
    /**
     * @param {string} val
     * @return {?}
     */
    getParticipantIDFromUserID : function(val) {
      if (isNaN(val)) {
        throw "Not a user ID: " + val;
      }
      return "fbid:" + val;
    },
    /**
     * @param {string} qualifier
     * @return {?}
     */
    getUserIDFromThreadID : function(qualifier) {
      if (!this.isCanonical(qualifier)) {
        return null;
      }
      return this.tokenize(qualifier).value;
    },
    /**
     * @param {string} recurring
     * @return {?}
     */
    getThreadIDFromUserID : function(recurring) {
      return "user:" + recurring;
    },
    /**
     * @param {string} tag
     * @return {?}
     */
    getThreadIDFromParticipantID : function(tag) {
      var elements = this.getUserIDFromParticipantID(tag);
      return elements ? this.getThreadIDFromUserID(elements) : null;
    },
    /**
     * @param {string} event
     * @return {?}
     */
    isCanonical : function(event) {
      return this.isValid(event) && this.tokenize(event).type === "user";
    },
    /**
     * @param {string} id
     * @return {?}
     */
    isMultichat : function(id) {
      return this.isValid(id) && this.tokenize(id).type !== "user";
    }
  };
  module.exports = state;
}, null);
__d("MercuryAssert", ["MercuryIDs"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, child) {
  module.exports = {
    /**
     * @param {string} attr
     * @return {undefined}
     */
    isParticipantID : function(attr) {
      if (!child.isValid(attr)) {
        throw "bad_participant_id " + attr;
      }
    },
    /**
     * @param {Array} elem
     * @return {undefined}
     */
    allParticipantIDs : function(elem) {
      elem.forEach(this.isParticipantID);
    },
    /**
     * @param {string} selector
     * @return {undefined}
     */
    isUserParticipantID : function(selector) {
      var elem = child.tokenize(selector);
      if (elem.type != "fbid") {
        throw "bad_user_id " + selector;
      }
    },
    /**
     * @param {string} selector
     * @return {undefined}
     */
    isEmailParticipantID : function(selector) {
      var elem = child.tokenize(selector);
      if (elem.type != "email") {
        throw "bad_email_id " + selector;
      }
    },
    /**
     * @param {Array} event
     * @return {undefined}
     */
    allThreadID : function(event) {
      event.forEach(this.isThreadID);
    },
    /**
     * @param {string} attr
     * @return {undefined}
     */
    isThreadID : function(attr) {
      if (!child.isValid(attr)) {
        throw "bad_thread_id " + attr;
      }
    }
  };
}, null);
__d("MercuryAttachment", ["MercuryAttachmentContentType", "MercuryAttachmentType", "MercuryAudioType"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, DataTypes, file, pkg) {
  var collection = {
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    getAttachIconClass : function(dataAndEvents) {
      switch(dataAndEvents) {
        case DataTypes.PHOTO:
          return "MercuryPhotoIcon";
        case DataTypes.VIDEO:
          return "MercuryVideoIcon";
        case DataTypes.MUSIC:
          return "MercuryMusicIcon";
        case DataTypes.VOICE:
          return "MercuryVoiceIcon";
        case DataTypes.TEXT:
          return "MercuryTextIcon";
        case DataTypes.MSWORD:
          return "MercuryMSWordIcon";
        case DataTypes.MSXLS:
          return "MercuryMSXLSIcon";
        case DataTypes.MSPPT:
          return "MercuryMSPPTIcon";
      }
      return "MercuryDefaultIcon";
    },
    /**
     * @param {string} assert
     * @return {?}
     */
    getAttachIconClassByMime : function(assert) {
      if (assert.startsWith("image")) {
        return "MercuryPhotoIcon";
      } else {
        if (assert.startsWith("video")) {
          return "MercuryVideoIcon";
        } else {
          if (assert.startsWith("audio")) {
            return "MercuryMusicIcon";
          } else {
            if (assert.startsWith("text/plain")) {
              return "MercuryTextIcon";
            } else {
              return "MercuryDefaultIcon";
            }
          }
        }
      }
    },
    /**
     * @param {string} assert
     * @return {?}
     */
    getAttachTypeByMime : function(assert) {
      if (assert.startsWith("image")) {
        return DataTypes.PHOTO;
      } else {
        if (assert.startsWith("video")) {
          return DataTypes.VIDEO;
        } else {
          if (assert.startsWith("audio")) {
            return DataTypes.MUSIC;
          } else {
            if (assert.startsWith("text/plain")) {
              return DataTypes.TEXT;
            } else {
              return DataTypes.UNKNOWN;
            }
          }
        }
      }
    },
    /**
     * @param {Array} codeSegments
     * @return {?}
     */
    convertRaw : function(codeSegments) {
      /** @type {Array} */
      var History = [];
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var item = codeSegments[i];
        if (item.attach_type === file.PHOTO) {
          History.push(item);
        } else {
          if (item.filename) {
            var key = collection.getAttachTypeByMime(item.filetype);
            var data = {};
            data.attach_type = file.FILE;
            data.name = item.filename;
            data.icon_type = key;
            /** @type {string} */
            data.url = "";
            History.push(data);
          }
        }
      }
      return History;
    },
    /**
     * @param {string} obj
     * @return {?}
     */
    get : function(obj) {
      /** @type {Array} */
      var l = [];
      if (obj.attachments) {
        l = obj.attachments;
      } else {
        if (obj.raw_attachments) {
          l = this.convertRaw(obj.raw_attachments);
        }
      }
      if (!(obj.attachments && obj.attachments.length > 0)) {
        if (obj.sticker_id) {
          return l.concat([{
            attach_type : file.STICKER
          }]);
        }
        if (obj.preview_attachments && obj.preview_attachments.length > 0) {
          return l.concat(obj.preview_attachments);
        }
      }
      return l;
    },
    /**
     * @param {?} moduleName
     * @return {?}
     */
    isVoiceMessage : function(moduleName) {
      return moduleName === pkg.AudioClip || moduleName === pkg.VoiceMessageWithTranscript;
    }
  };
  module.exports = collection;
}, null);
__d("MercurySingletonMixin", ["CurrentUser"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, a) {
  var Time = {
    /**
     * @return {?}
     */
    _getInstances : function() {
      if (!this._instances) {
        this._instances = {};
      }
      return this._instances;
    },
    /**
     * @return {?}
     */
    get : function() {
      return this.getForFBID(a.getID());
    },
    /**
     * @param {?} timeoutKey
     * @return {?}
     */
    getForFBID : function(timeoutKey) {
      var scheduledFunctions = this._getInstances();
      if (!scheduledFunctions[timeoutKey]) {
        scheduledFunctions[timeoutKey] = new this(timeoutKey);
      }
      return scheduledFunctions[timeoutKey];
    }
  };
  module.exports = Time;
}, null);
__d("ReportState", ["ErrorUtils", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, testUtils, fix) {
  /**
   * @param {string} event
   * @param {Function} listener
   * @return {undefined}
   */
  function handler(event, listener) {
    fix(!io[event]);
    /** @type {Function} */
    io[event] = listener;
  }
  /**
   * @return {?}
   */
  function find() {
    var handlers = {};
    Object.keys(io).forEach(function(event) {
      try {
        handlers[event] = io[event]();
      } catch (n) {
        testUtils.reportError("ReportState: callback threw an error.");
      }
    });
    return handlers;
  }
  var io = {};
  module.exports = {
    /** @type {function (string, Function): undefined} */
    registerCallback : handler,
    /** @type {function (): ?} */
    getState : find
  };
}, null);
__d("MercuryMessageClientState", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    DO_NOT_SEND_TO_SERVER : "do_not_send_to_server",
    SEND_TO_SERVER : "send_to_server"
  };
  module.exports = JsDiff;
}, null);
__d("MercurySendAttemptLogger", ["Banzai", "BanzaiLogger", "MercuryAttachmentType", "MercurySendMessageFields"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, item, client, Browser, dataAndEvents) {
  var console = client.create({
    retry : true
  });
  var mercury_send_attempt_logging = item.isEnabled("mercury_send_attempt_logging");
  /**
   * @param {string} method
   * @return {?}
   */
  var some = function(method) {
    if (!method.has_attachment) {
      return null;
    }
    if (method.sticker_id) {
      return Browser.STICKER;
    }
    if (method.image_ids && method.image_ids.length || method.photo_fbids && method.photo_fbids.length) {
      return Browser.PHOTO;
    }
    if (method.raw_attachments && method.raw_attachments.length) {
      return Browser.FILE;
    }
    if (method.content_attachment) {
      return Browser.SHARE;
    }
    return Browser.UNKNOWN;
  };
  var JsDiff = {
    /**
     * @param {string} details
     * @return {undefined}
     */
    log : function(details) {
      if (!mercury_send_attempt_logging) {
        return;
      }
      var m = {
        message_id : details.message_id,
        timestamp_client : Date.now(),
        attempt_num : details[dataAndEvents.MANUAL_RETRY_CNT],
        first_attachment_type : some(details),
        source : details.source,
        auto_retry_cnt : details[dataAndEvents.AUTO_RETRY_CNT]
      };
      console.log("MercurySendAttemptLoggerConfig", m);
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercurySendErrorLogger", ["Banzai", "BanzaiLogger"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, item, client) {
  var Handlebars = client.create({
    retry : true
  });
  var mercury_send_error_logging = item.isEnabled("mercury_send_error_logging");
  var JsDiff = {
    /**
     * @param {string} result
     * @return {undefined}
     */
    log : function(result) {
      if (!mercury_send_error_logging) {
        return;
      }
      var context = {
        message_id : result.message_id,
        timestamp_client : Date.now(),
        error_type : result.error_data.type,
        error_code : result.error_data.code,
        error_description : result.error_data.description,
        is_transient : result.error_data.is_transient
      };
      Handlebars.log("MercurySendErrorLoggerConfig", context);
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryServerSendMessageQueueSimulatedError", ["AsyncRequest", "AsyncResponse", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Contact, Model, callback) {
  /** @type {number} */
  var err = 9999;
  var Class = {
    /**
     * @param {?} target
     * @return {?}
     */
    create : function(target) {
      var data = (new Contact(this.endpoint_uri)).setData({
        message_batch : [target],
        client : this.client
      });
      var model = new Model(data, {});
      callback(model, {
        error : err,
        silentError : false,
        transientError : true,
        request : data
      });
      return model;
    }
  };
  module.exports = Class;
}, null);
__d("MercuryServerSendMessageQueue", ["BanzaiODS", "LogHistory", "MercuryLoggingHelper", "MercuryServerDispatcher", "MercuryServerSendMessageQueueSimulatedError"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, data_user, ProgressIndicator, errors, args, layer) {
  /**
   * @param {?} selector
   * @param {?} a
   * @param {?} context
   * @param {?} client
   * @return {undefined}
   */
  function jQuery(selector, a, context, client) {
    this.sender_id = selector;
    this.queue_id = a;
    this.$MercuryServerSendMessageQueue0 = context.success_handler;
    this.$MercuryServerSendMessageQueue1 = context.error_handler;
    this.$MercuryServerSendMessageQueue2 = context.transport_error_handler;
    this.$MercuryServerSendMessageQueue3 = context.timeout_handler;
    this.client = client;
    var called = {};
    called[handler] = {
      request_user_id : this.sender_id,
      endpoint_id : this.queue_id,
      mode : args.IMMEDIATE,
      handler : this.handleSuccess.bind(this),
      error_handler : this.handleError.bind(this),
      transport_error_handler : this.handleTransportError.bind(this),
      timeout : context.timeout,
      timeout_handler : this.handleTimeout.bind(this),
      connection_retries : context.connection_retries,
      send_attempt_logging_handler : context.send_attempt_logging_handler,
      auto_retries : context.auto_retries
    };
    args.registerEndpoints(called);
    /** @type {null} */
    this.pending_message = null;
    /** @type {Array} */
    this.queue = [];
  }
  /** @type {string} */
  var handler = "/ajax/mercury/send_messages.php";
  var utils = ProgressIndicator.getInstance("mercury_server_send_message_queue");
  /**
   * @param {?} task
   * @return {undefined}
   */
  jQuery.prototype.enqueue = function(task) {
    this.queue.push(task);
    this.$MercuryServerSendMessageQueue4();
  };
  /**
   * @return {undefined}
   */
  jQuery.prototype.$MercuryServerSendMessageQueue4 = function() {
    if (this.pending_message || !this.queue.length) {
      if (this.pending_message) {
        this.$MercuryServerSendMessageQueue5();
      }
      return;
    }
    this.pending_message = this.queue.shift();
    args.trySend(handler, {
      message_batch : [this.pending_message],
      client : this.client
    }, null, this.sender_id, this.queue_id);
  };
  /**
   * @return {undefined}
   */
  jQuery.prototype.$MercuryServerSendMessageQueue6 = function() {
    for (;this.queue.length;) {
      this.$MercuryServerSendMessageQueue7(this.queue.shift());
    }
  };
  /**
   * @param {?} err
   * @return {undefined}
   */
  jQuery.prototype.$MercuryServerSendMessageQueue7 = function(err) {
    this.$MercuryServerSendMessageQueue1(layer.create(err));
    utils.error("mark_as_failed", {
      fbid : this.sender_id,
      queue_id : this.queue_id,
      message : errors.obfuscateMessage(err)
    });
  };
  /**
   * @param {?} errorFn
   * @param {?} tx
   * @return {undefined}
   */
  jQuery.prototype.handleSuccess = function(errorFn, tx) {
    this.$MercuryServerSendMessageQueue0(errorFn, tx);
    /** @type {null} */
    this.pending_message = null;
    this.$MercuryServerSendMessageQueue4();
  };
  /**
   * @param {?} event
   * @return {undefined}
   */
  jQuery.prototype.handleError = function(event) {
    this.$MercuryServerSendMessageQueue1(event);
    this.$MercuryServerSendMessageQueue6();
    /** @type {null} */
    this.pending_message = null;
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  jQuery.prototype.handleTransportError = function(deepDataAndEvents) {
    this.$MercuryServerSendMessageQueue2(deepDataAndEvents);
    this.$MercuryServerSendMessageQueue6();
    /** @type {null} */
    this.pending_message = null;
  };
  /**
   * @param {?} e
   * @return {undefined}
   */
  jQuery.prototype.handleTimeout = function(e) {
    this.$MercuryServerSendMessageQueue3(e);
    this.$MercuryServerSendMessageQueue6();
    /** @type {null} */
    this.pending_message = null;
  };
  /**
   * @return {undefined}
   */
  jQuery.prototype.$MercuryServerSendMessageQueue5 = function() {
    utils.debug("maybe_send_next_pending_message", {
      fbid : this.sender_id,
      queue_id : this.queue_id,
      pending_message : errors.obfuscateMessage(this.pending_message),
      queue : this.queue.map(function(err) {
        return errors.obfuscateMessage(err);
      })
    });
    var udataCur = "send_queue.delayed.queue_length." + this.queue.length.toString();
    data_user.bumpEntityKey("chat.web", udataCur);
  };
  /** @type {function (?, ?, ?, ?): undefined} */
  module.exports = jQuery;
}, null);
__d("MercuryServerSendMessageQueueRouter", ["BanzaiODS", "LogHistory", "Map", "MercuryServerSendMessageQueue", "MercurySingletonMixin"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, ret, ProgressIndicator, RootView, One, map) {
  /**
   * @param {?} cur
   * @return {undefined}
   */
  function root(cur) {
    this.fbid = cur;
    this.queues = new RootView;
  }
  var $ = ProgressIndicator.getInstance("mercury_server_send_message_queue_router");
  /** @type {string} */
  var rreturn = "chat.web.send_queue_router";
  ret.setEntitySample(rreturn, 0.1);
  /**
   * @param {string} key
   * @param {string} options
   * @param {boolean} value
   * @param {?} name
   * @return {undefined}
   */
  root.prototype.enqueue = function(key, options, value, name) {
    if (!this.queues.has(key)) {
      this.queues.set(key, new One(this.fbid, key, options, value));
      $.debug("added queue", {
        fbid : this.fbid,
        queue_id : key
      });
      ret.bumpEntityKey(rreturn, "new_queue");
    }
    this.queues.get(key).enqueue(name);
  };
  Object.assign(root, map);
  /** @type {function (?): undefined} */
  module.exports = root;
}, null);
__d("MercuryMessageIDs", ["KeyedCallbackManager"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents) {
  var element = new dataAndEvents;
  var JsDiff = {
    /**
     * @param {Array} mod
     * @param {Function} indexOf
     * @return {?}
     */
    getServerIDs : function(mod, indexOf) {
      var suiteView = mod.filter(function(whitespace) {
        return whitespace.indexOf("mail.projektitan.com") !== -1;
      });
      /**
       * @param {Array} arr
       * @return {undefined}
       */
      var first = function(arr) {
        var dontCloseTags = mod.map(function(i) {
          return arr[i] ? arr[i] : i;
        });
        indexOf(dontCloseTags);
      };
      return element.executeOrEnqueue(suiteView, first);
    },
    /**
     * @param {?} clone
     * @param {?} v23
     * @return {undefined}
     */
    addServerID : function(clone, v23) {
      element.setResource(clone, v23);
    }
  };
  module.exports = JsDiff;
}, null);
__d("MessagingReliabilityLogger", ["PresenceUtil", "MercuryServerDispatcher", "MessagingReliabilityLoggerInitialData", "isEmpty", "setTimeoutAcrossTransitions"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, self, options, add, bind) {
  /**
   * @param {?} err
   * @param {?} arg
   * @return {?}
   */
  function done(err, arg) {
    var opts = {
      app : options.app,
      categories : JSON.stringify(err)
    };
    if (!add(arg)) {
      /** @type {string} */
      opts.extra = JSON.stringify(arg);
    }
    return opts;
  }
  /**
   * @param {Object} message
   * @param {string} key
   * @param {string} type
   * @param {number} dataAndEvents
   * @return {undefined}
   */
  function callback(message, key, type, dataAndEvents) {
    if (message[key] === void 0) {
      message[key] = {};
    }
    if (message[key][type] === void 0) {
      /** @type {number} */
      message[key][type] = 0;
    }
    message[key][type] += dataAndEvents;
  }
  /**
   * @param {Object} elem
   * @param {string} event
   * @param {string} name
   * @param {Array} suite
   * @return {undefined}
   */
  function next(elem, event, name, suite) {
    if (elem[event] === void 0) {
      elem[event] = {};
    }
    if (elem[event][name] === void 0) {
      /** @type {Array} */
      elem[event][name] = [];
    }
    /** @type {number} */
    var i = 0;
    for (;i < suite.length;++i) {
      elem[event][name].push(suite[i]);
    }
  }
  /**
   * @param {Object} options
   * @param {Object} data
   * @return {?}
   */
  function finish(options, data) {
    if (options && !options.categories || data && !data.categories) {
      return;
    }
    /** @type {*} */
    var err = options ? JSON.parse(options.categories) : {};
    /** @type {*} */
    var e = options && options.extra ? JSON.parse(options.extra) : {};
    /** @type {*} */
    var iterable = JSON.parse(data.categories);
    /** @type {*} */
    var vals = data.extra ? JSON.parse(data.extra) : {};
    var key;
    for (key in iterable) {
      var types = iterable[key];
      var val = vals[key];
      var type;
      for (type in types) {
        callback(err, key, type, types[type]);
        if (val !== void 0) {
          var name = val[type];
          if (name !== void 0) {
            next(e, key, type, name);
          }
        }
      }
    }
    return done(err, e);
  }
  /** @type {string} */
  var name = "/ajax/mercury/client_reliability.php";
  /** @type {number} */
  var fn_name = 6E4;
  var tree = {};
  tree[name] = {
    mode : self.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR,
    /** @type {function (Object, Object): ?} */
    batch_function : finish
  };
  self.registerEndpoints(tree);
  var element = {
    /**
     * @param {string} key
     * @param {string} type
     * @param {?} symbolPath
     * @return {undefined}
     */
    addEntry : function(key, type, symbolPath) {
      if (!options.enabled) {
        return;
      }
      var err = {};
      callback(err, key, type, 1);
      var e = {};
      if (symbolPath !== void 0) {
        next(e, key, type, [symbolPath]);
      }
      self.trySend(name, done(err, e));
    }
  };
  (function touchstart() {
    element.addEntry("page_event", "active", dataAndEvents.getSessionID());
    bind(touchstart, fn_name);
  })();
  module.exports = element;
}, null);
__d("MercuryServerSendMessageQueueOptions", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} specDefinitions
   * @param {?} parentSuite
   * @param {?} description
   * @param {?} ctx
   * @param {?} isShared
   * @param {number} $timeout
   * @param {?} name
   * @param {?} opts
   * @return {undefined}
   */
  function Suite(specDefinitions, parentSuite, description, ctx, isShared, $timeout, name, opts) {
    this.success_handler = specDefinitions;
    this.error_handler = parentSuite;
    this.transport_error_handler = description;
    this.timeout_handler = ctx;
    this.send_attempt_logging_handler = isShared;
    /** @type {number} */
    this.timeout = $timeout;
    this.connection_retries = name;
    this.auto_retries = opts;
  }
  /** @type {function (?, ?, ?, ?, ?, number, ?, ?): undefined} */
  module.exports = Suite;
}, null);
__d("MercuryThreadInformer", ["ArbiterMixin", "LogHistory", "MercuryAssert", "MercuryLoggingHelper", "MercurySingletonMixin", "copyProperties", "mapObject", "mixin"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, element, ProgressIndicator, entity, nv, part, checkFn, toString, proceed) {
  /**
   * @param {?} elem
   * @return {undefined}
   */
  function parent(elem) {
    this.$MercuryThreadInformer0 = elem;
    this.$MercuryThreadInformer1 = {};
    this.$MercuryThreadInformer2 = {};
    this.$MercuryThreadInformer3 = {};
    /** @type {boolean} */
    this.$MercuryThreadInformer4 = false;
    /** @type {boolean} */
    this.$MercuryThreadInformer5 = false;
    /** @type {boolean} */
    this.$MercuryThreadInformer6 = false;
    this.$MercuryThreadInformer7 = {};
    this.$MercuryThreadInformer8 = {};
    this.$MercuryThreadInformer9 = {};
    /** @type {number} */
    this.$MercuryThreadInformera = 0;
  }
  /**
   * @param {string} deepDataAndEvents
   * @param {Function} object
   * @return {undefined}
   */
  function clone(deepDataAndEvents, object) {
    /** @type {Function} */
    var str = object;
    if (deepDataAndEvents == "messages-received") {
      str = toString(str, function(mod) {
        return mod.map(function(v) {
          return nv.obfuscateMessage(v);
        });
      });
    }
    utils.debug(deepDataAndEvents, str);
  }
  var utils = ProgressIndicator.getInstance("mercury_informer");
  var data = proceed(element);
  var k;
  for (k in data) {
    if (data.hasOwnProperty(k)) {
      parent[k] = data[k];
    }
  }
  var basePrototype = data === null ? null : data.prototype;
  /** @type {Object} */
  parent.prototype = Object.create(basePrototype);
  /** @type {function (?): undefined} */
  parent.prototype.constructor = parent;
  parent.__superConstructor__ = data;
  /**
   * @param {?} keepData
   * @return {undefined}
   */
  parent.prototype.updatedThread = function(keepData) {
    /** @type {boolean} */
    this.$MercuryThreadInformer2[keepData] = true;
    this.$MercuryThreadInformerb();
  };
  /**
   * @param {?} arg
   * @return {undefined}
   */
  parent.prototype.deletedThread = function(arg) {
    /** @type {boolean} */
    this.$MercuryThreadInformer1[arg] = true;
    this.$MercuryThreadInformerb();
  };
  /**
   * @return {undefined}
   */
  parent.prototype.updatedThreadlist = function() {
    /** @type {boolean} */
    this.$MercuryThreadInformer4 = true;
    this.$MercuryThreadInformerb();
  };
  /**
   * @return {undefined}
   */
  parent.prototype.updatedUnseenState = function() {
    /** @type {boolean} */
    this.$MercuryThreadInformer5 = true;
    this.$MercuryThreadInformerb();
  };
  /**
   * @return {undefined}
   */
  parent.prototype.updatedUnreadState = function() {
    /** @type {boolean} */
    this.$MercuryThreadInformer6 = true;
    this.$MercuryThreadInformerb();
  };
  /**
   * @param {?} i
   * @param {boolean} deepDataAndEvents
   * @param {boolean} timestamp
   * @return {undefined}
   */
  parent.prototype.changedThreadReadState = function(i, deepDataAndEvents, timestamp) {
    if (!this.$MercuryThreadInformer3[i] || this.$MercuryThreadInformer3[i].timestamp < timestamp) {
      this.$MercuryThreadInformer3[i] = {
        mark_as_read : deepDataAndEvents,
        timestamp : timestamp
      };
    }
    this.$MercuryThreadInformerb();
  };
  /**
   * @param {?} message
   * @return {undefined}
   */
  parent.prototype.receivedMessage = function(message) {
    entity.isThreadID(message.thread_id);
    var type = message.thread_id;
    if (!this.$MercuryThreadInformer7[type]) {
      /** @type {Array} */
      this.$MercuryThreadInformer7[type] = [];
    }
    this.$MercuryThreadInformer7[type].push(message);
    this.updatedThread(type);
  };
  /**
   * @param {string} eventName
   * @param {Object} key
   * @return {undefined}
   */
  parent.prototype.reorderedMessages = function(eventName, key) {
    this.$MercuryThreadInformer8[eventName] = {
      source : key
    };
    this.$MercuryThreadInformerb();
  };
  /**
   * @param {?} key
   * @param {?} num
   * @param {string} name
   * @return {undefined}
   */
  parent.prototype.updatedMessage = function(key, num, name) {
    if (!this.$MercuryThreadInformer9[key]) {
      this.$MercuryThreadInformer9[key] = {};
    }
    this.$MercuryThreadInformer9[key][num] = {
      source : name
    };
    this.updatedThread(key);
  };
  /**
   * @param {Function} $sanitize
   * @return {undefined}
   */
  parent.prototype.synchronizeInforms = function($sanitize) {
    this.$MercuryThreadInformera++;
    try {
      $sanitize();
    } catch (v) {
      throw v;
    } finally {
      this.$MercuryThreadInformera--;
      this.$MercuryThreadInformerb();
    }
  };
  /**
   * @param {?} key
   * @param {string} callback
   * @return {?}
   */
  parent.prototype.listen = function(key, callback) {
    return this.subscribe("threads-updated", function(dataAndEvents, $cookies) {
      if ($cookies[key]) {
        callback(key);
      }
    });
  };
  /**
   * @return {undefined}
   */
  parent.prototype.$MercuryThreadInformerb = function() {
    if (!this.$MercuryThreadInformera) {
      var camelKey = this.$MercuryThreadInformer1;
      var scrubbed = this.$MercuryThreadInformer2;
      var expectation = this.$MercuryThreadInformer3;
      var naiveLength = this.$MercuryThreadInformer4;
      var $MercuryThreadInformer5 = this.$MercuryThreadInformer5;
      var $MercuryThreadInformer6 = this.$MercuryThreadInformer6;
      var defaultConfig = this.$MercuryThreadInformer7;
      var udataCur = this.$MercuryThreadInformer8;
      var pdataOld = this.$MercuryThreadInformer9;
      this.$MercuryThreadInformer1 = {};
      this.$MercuryThreadInformer2 = {};
      this.$MercuryThreadInformer3 = {};
      /** @type {boolean} */
      this.$MercuryThreadInformer4 = false;
      /** @type {boolean} */
      this.$MercuryThreadInformer5 = false;
      /** @type {boolean} */
      this.$MercuryThreadInformer6 = false;
      this.$MercuryThreadInformer7 = {};
      this.$MercuryThreadInformer8 = {};
      this.$MercuryThreadInformer9 = {};
      /** @type {Array.<string>} */
      var pdataCur = Object.keys(scrubbed);
      if (pdataCur.length || naiveLength) {
        this.$MercuryThreadInformerc("threadlist-updated", pdataCur);
      }
      if (pdataCur.length) {
        this.$MercuryThreadInformerc("threads-updated", scrubbed);
      }
      var key;
      for (key in expectation) {
        this.$MercuryThreadInformerc("thread-read-changed", expectation);
        break;
      }
      for (key in camelKey) {
        this.$MercuryThreadInformerc("threads-deleted", camelKey);
        break;
      }
      if ($MercuryThreadInformer5) {
        this.$MercuryThreadInformerc("unseen-updated", null);
      }
      if ($MercuryThreadInformer6) {
        this.$MercuryThreadInformerc("unread-updated", null);
      }
      for (key in defaultConfig) {
        this.$MercuryThreadInformerc("messages-received", defaultConfig);
        break;
      }
      for (key in udataCur) {
        this.$MercuryThreadInformerc("messages-reordered", udataCur);
        break;
      }
      for (key in pdataOld) {
        this.$MercuryThreadInformerc("messages-updated", pdataOld);
        break;
      }
    }
  };
  /**
   * @param {string} deepDataAndEvents
   * @param {Function} value
   * @return {undefined}
   */
  parent.prototype.$MercuryThreadInformerc = function(deepDataAndEvents, value) {
    clone(deepDataAndEvents, value);
    this.inform(deepDataAndEvents, value);
  };
  checkFn(parent, part);
  /** @type {function (?): undefined} */
  context.exports = parent;
}, null);
__d("MercuryServerRequests", ["Arbiter", "ArbiterMixin", "AsyncResponse", "BanzaiLogger", "BanzaiODS", "ChannelConstants", "CurrentUser", "KeyedCallbackManager", "LogHistory", "MercuryActionStatus", "MercuryActionType", "MercuryAPIArgsSource", "MercuryAssert", "MercuryErrorType", "MercuryGlobalActionType", "MercuryIDs", "MercuryLoggingHelper", "MercuryLogMessageType", "MercuryMessageClientState", "MercuryPayloadSource", "MercurySendAttemptLogger", "MercurySendErrorLogger", "MercuryServerRequestsConfig",
"MercuryServerSendMessageQueueRouter", "MercurySingletonMixin", "MercurySourceType", "MercuryThreadlistConstants", "MercuryMessageIDs", "MessagingConfig", "MessagingReliabilityLogger", "MessagingTag", "MercuryServerDispatcher", "MercuryServerSendMessageQueueOptions", "MercuryThreadInformer", "copyProperties", "createObjectFrom", "setTimeoutAcrossTransitions"], function(dataAndEvents, ignoreMethodDoesntExist, execResult, failing_message, module, nextStack, m, profile, element, $log, keepData, lt,
a, Dialog, ProgressIndicator, status, buf, opt_attributes, fixHook, message, matcherFunction, that, nv, opt_keys, Socket, deepDataAndEvents, system, console, item, positionError, array, err, textAlt, task, oFunctionBody, arr, cont, entry, PackageInformation, _$timeout_, done, equal, updateFunc) {
  /**
   * @param {?} data
   * @param {?} val
   * @return {undefined}
   */
  function update(data, val) {
    if (val) {
      /** @type {number} */
      data._lastActionTimestamp = Math.max(data._lastActionTimestamp, val);
    }
  }
  /**
   * @param {?} value
   * @param {?} message
   * @return {undefined}
   */
  function isArray(value, message) {
    var data = message.thread_fbid;
    if (message.canonical_fbid) {
      data = message.canonical_fbid;
    }
    var result = value._FBIDToClientIDs.getResource(data);
    if (!result) {
      if (message.canonical_fbid) {
        /** @type {string} */
        result = "user:" + message.canonical_fbid;
      } else {
        if (message.root_message_threading_id) {
          /** @type {string} */
          result = "root:" + message.root_message_threading_id;
        }
      }
      result = result || "thread:" + data;
      if (data) {
        data = data.toString();
      }
      call(value, data, result);
      if (message.thread_id) {
        access(value, message.thread_id, result);
      }
    }
    message.thread_id = result;
  }
  /**
   * @param {?} fn
   * @param {?} key
   * @param {?} value
   * @return {undefined}
   */
  function access(fn, key, value) {
    fn._serverToClientIDs.setResource(key, value);
    fn._clientToServerIDs.setResource(value, key);
    fn._newlyAddedClientIDs[key] = value;
  }
  /**
   * @param {?} callback
   * @param {?} namespace
   * @param {?} number
   * @return {undefined}
   */
  function call(callback, namespace, number) {
    callback._clientIDToFBIDs.setResource(number, namespace);
    callback._FBIDToClientIDs.setResource(namespace, number);
    callback._newlyAddedClientIDs[namespace] = number;
  }
  /**
   * @param {?} node
   * @param {string} selector
   * @param {Function} deepDataAndEvents
   * @return {undefined}
   */
  function add(node, selector, deepDataAndEvents) {
    var r20 = node._clientIDToFBIDs.executeOrEnqueue(selector, deepDataAndEvents);
    var prev = node._clientIDToFBIDs.getUnavailableResources(r20);
    var elem = that.tokenize(selector);
    if (prev.length && elem.type != "root") {
      node.fetchThreadData(prev);
    }
  }
  /**
   * @param {?} emitter
   * @param {string} selector
   * @return {?}
   */
  function remove(emitter, selector) {
    return emitter._clientIDToFBIDs.getResource(selector);
  }
  /**
   * @param {?} context
   * @param {?} path
   * @return {?}
   */
  function cb(context, path) {
    return!!context._FBIDToClientIDs.getResource(path);
  }
  /**
   * @param {?} context
   * @param {?} $scope
   * @return {?}
   */
  function init(context, $scope) {
    var ret = context._serverToClientIDs.getResource($scope);
    if (typeof ret == "undefined") {
      logger.warn("no_client_thread_id", {
        server_id : $scope
      });
    }
    return ret;
  }
  /**
   * @param {?} xhr
   * @param {?} key
   * @return {?}
   */
  function success(xhr, key) {
    var value = xhr._FBIDToClientIDs.getResource(key);
    if (typeof value == "undefined") {
      logger.warn("no_client_thread_id", {
        thread_fbid : key
      });
    }
    return value;
  }
  /**
   * @param {?} dataAndEvents
   * @param {?} events
   * @param {Function} deepDataAndEvents
   * @return {undefined}
   */
  function clone(dataAndEvents, events, deepDataAndEvents) {
    dataAndEvents._FBIDToClientIDs.executeOrEnqueue(events, deepDataAndEvents);
    dataAndEvents.ensureThreadIsFetched(events);
  }
  /**
   * @param {?} message
   * @return {?}
   */
  function processMessage(message) {
    return message.thread_fbid || (message.thread_id || message.client_thread_id);
  }
  /**
   * @param {?} xhr
   * @param {Object} result
   * @param {string} errback
   * @return {undefined}
   */
  function handleResponse(xhr, result, errback) {
    if (result.action_type != buf.SEND_MESSAGE) {
      return;
    }
    var camelKey = result.thread_fbid;
    if (result.other_user_fbid) {
      camelKey = result.other_user_fbid;
    }
    var data = result.client_thread_id;
    if (!data) {
      data = success(xhr, camelKey);
    }
    /** @type {null} */
    var inner = null;
    if (data) {
      inner = that.tokenize(data).type;
    }
    next(xhr, result, errback === "success");
    if (result.status === status.ERROR) {
      console.log(result);
    } else {
      arr.addEntry("send_" + inner, errback, camelKey + "," + result.message_id);
    }
  }
  /**
   * @param {?} ctx
   * @return {?}
   */
  function template(ctx) {
    return ctx.getError() ? "_" + ctx.getError() : "";
  }
  /**
   * @param {?} xhr
   * @param {Object} result
   * @param {boolean} signal_eof
   * @return {undefined}
   */
  function next(xhr, result, signal_eof) {
    if (Math.floor(Math.random() * 20) === 0) {
      if (result.client_message_id in xhr._sentMessagesTimestamp) {
        var startTimestamp = xhr._sentMessagesTimestamp[result.client_message_id];
        /** @type {number} */
        var latency = Date.now() - startTimestamp;
        var data = result.client_thread_id;
        if (!data) {
          data = success(xhr, result.thread_fbid);
        }
        $log.log("WebMessagingLatencyLoggerConfig", {
          has_attachment : result.attachments && result.attachments.length > 0,
          latency : latency,
          is_canonical : !that.isMultichat(data),
          send_successful : signal_eof,
          source : "client"
        });
      }
    }
  }
  /**
   * @param {?} xhr
   * @param {Object} parts
   * @return {undefined}
   */
  function parse(xhr, parts) {
    /** @type {null} */
    var errback = null;
    switch(parts.status) {
      case status.SUCCESS:
        /** @type {string} */
        errback = "success";
        break;
      case status.FAILED_UNKNOWN_REASON:
        /** @type {string} */
        errback = "confirmed_error";
        break;
      case status.UNABLE_TO_CONFIRM:
        /** @type {string} */
        errback = "confirm_error";
        break;
      default:
        return;
    }
    handleResponse(xhr, parts, errback);
  }
  /**
   * @param {?} model
   * @param {Object} options
   * @return {undefined}
   */
  function create(model, options) {
    (options.threads || []).forEach(function(v) {
      isArray(model, v);
      delete model._fetchingThreads[v.thread_id];
      var next = remove(model, v.thread_id);
      delete model._fetchingThreads[next];
      update(model, v.timestamp);
    });
    (options.ordered_threadlists || []).forEach(function(dataAndEvents) {
      var key = dataAndEvents.thread_fbids || [];
      key = key.concat(dataAndEvents.other_user_fbids || []);
      dataAndEvents.thread_ids = key.map(success.bind(null, model));
    });
    if (options.pinned_threads && options.pinned_threads.thread_fbids) {
      options.pinned_threads.thread_fbids = options.pinned_threads.thread_fbids.map(success.bind(null, model));
    }
    options.actions = options.actions || [];
    options.actions.forEach(function(data) {
      parse(model, data);
      var res = data.thread_fbid;
      if (data.other_user_fbid) {
        res = data.other_user_fbid;
      }
      if (data.status && (data.status != status.SUCCESS && !res)) {
        data.thread_id = data.client_thread_id;
        return;
      }
      if (data.action_type == buf.SEND_MESSAGE && (data.client_thread_id && res)) {
        call(model, res.toString(), data.client_thread_id);
      }
      var type = data.thread_id;
      if (res) {
        data.thread_id = cb(model, res) ? success(model, res) : null;
      } else {
        if (data.client_thread_id) {
          data.thread_id = data.client_thread_id;
        }
      }
      if (!data.thread_id) {
        data.server_thread_id = type;
      }
      if (!options.payload_source || !options.payload_source.startsWith("server")) {
        update(model, data.timestamp);
      }
    });
    if (options.end_of_history) {
      /** @type {Array} */
      var arr = [];
      /** @type {number} */
      var idx = 0;
      for (;idx < options.end_of_history.length;idx++) {
        var doc = options.end_of_history[idx];
        if (doc.type == "user") {
          arr.push("user:" + doc.fbid);
        } else {
          if (doc.type == "thread" && cb(model, doc.fbid)) {
            arr.push(success(model, doc.fbid));
          }
        }
      }
      /** @type {Array} */
      options.end_of_history = arr;
    }
    if (options.roger) {
      var done = {};
      var key;
      for (key in options.roger) {
        var id = model._FBIDToClientIDs.getResource(key);
        if (id) {
          var info = options.roger[key];
          done[id] = {};
          var prop;
          for (prop in info) {
            if (info.hasOwnProperty(prop)) {
              var name = that.getParticipantIDFromUserID(prop);
              done[id][name] = info[prop];
            }
          }
        }
      }
      options.roger = done;
    }
  }
  /**
   * @param {?} object
   * @return {undefined}
   */
  function freeze(object) {
    if (object._pendingUpdates && object._pendingUpdates.length) {
      var attributes = object._pendingUpdates[0];
      object._pendingUpdates = object._pendingUpdates.slice(1);
      object.handleUpdate(attributes);
    }
  }
  /**
   * @param {Object} data
   * @param {Object} options
   * @return {?}
   */
  function finish(data, options) {
    var self = done({}, data);
    var key;
    if (options.threads) {
      if (!self.threads) {
        self.threads = {};
      }
      for (key in options.threads) {
        /** @type {Array.<string>} */
        self.threads[key] = Object.keys(equal((self.threads[key] || []).concat(options.threads[key])));
      }
    }
    if (options.messages) {
      if (!self.messages) {
        self.messages = {};
      }
      for (key in options.messages) {
        if (!self.messages[key]) {
          self.messages[key] = {};
        }
        var i;
        for (i in options.messages[key]) {
          if (self.messages[key][i]) {
            self.messages[key][i] = fn(self.messages[key][i], options.messages[key][i]);
          } else {
            self.messages[key][i] = options.messages[key][i];
          }
        }
      }
    }
    self.client = data.client || options.client;
    return self;
  }
  /**
   * @param {Object} options
   * @param {Object} o
   * @return {?}
   */
  function run(options, o) {
    var scrubbed = done(equal(options.folders, true), equal(o.folders, true));
    var client = options.client || o.client;
    return{
      folders : Object.keys(scrubbed),
      client : client
    };
  }
  /**
   * @param {Object} array
   * @param {Object} obj
   * @return {?}
   */
  function clean(array, obj) {
    var i;
    for (i in obj) {
      if (array[i] && typeof array[i] === "object") {
        array[i] = fn(array[i], obj[i]);
      } else {
        if (obj[i] && typeof obj[i] === "object") {
          var e = {};
          done(e, obj[i]);
          array[i] = e;
        }
      }
    }
    return array;
  }
  /**
   * @param {Object} data
   * @param {Object} options
   * @return {?}
   */
  function fn(data, options) {
    var start = data.offset < options.offset ? data.offset : options.offset;
    var date1 = data.offset + data.limit;
    var date2 = options.offset + options.limit;
    var end = date1 > date2 ? date1 : date2;
    /** @type {number} */
    var duration = end - start;
    return{
      offset : start,
      limit : duration
    };
  }
  /**
   * @param {Object} user
   * @param {Object} results
   * @return {?}
   */
  function exports(user, results) {
    var client = user.client || results.client;
    var options = {
      ids : {},
      client : client
    };
    done(options.ids, user.ids);
    done(options.ids, results.ids);
    return options;
  }
  /**
   * @param {Object} event
   * @param {Object} params
   * @return {?}
   */
  function onComplete(event, params) {
    var testSource = {};
    var key;
    var client = event.client || params.client;
    delete event.client;
    delete params.client;
    for (key in event) {
      done(testSource, equal(event[key], key));
    }
    for (key in params) {
      done(testSource, equal(params[key], key));
    }
    var properties = {
      client : client
    };
    var name;
    for (name in testSource) {
      key = testSource[name];
      if (!properties[key]) {
        /** @type {Array} */
        properties[key] = [];
      }
      properties[key].push(name);
    }
    return properties;
  }
  /**
   * @param {Object} data
   * @param {Object} options
   * @return {?}
   */
  function setup(data, options) {
    var client = data.client || options.client;
    var err = equal(data.ids, true);
    var profile = equal(options.ids, true);
    var scrubbed = done(err, profile);
    return{
      ids : Object.keys(scrubbed),
      client : client
    };
  }
  /**
   * @param {?} textStatus
   * @return {undefined}
   */
  function error(textStatus) {
    this._fbid = textStatus;
    /** @type {number} */
    this._lastActionTimestamp = 0;
    this._serverToClientIDs = new Dialog;
    this._clientToServerIDs = new Dialog;
    this._FBIDToClientIDs = new Dialog;
    this._clientIDToFBIDs = new Dialog;
    /** @type {Array} */
    this._pendingUpdates = [];
    this._fetchingThreads = {};
    this._newlyAddedClientIDs = {};
    this._sentMessagesTimestamp = {};
    this._sendMessageQueueOptions = new PackageInformation(with_walkers, position, get, setOffset, system.log, item.sendMessageTimeout, oFunctionBody.SEND_CONNECTION_RETRIES, item.maxAutoRetries);
    _error(this);
  }
  /**
   * @param {string} i
   * @return {?}
   */
  function test(i) {
    return{
      action_type : buf.LOG_MESSAGE,
      thread_id : i,
      message_id : i,
      timestamp : Date.now(),
      timestamp_absolute : "",
      timestamp_relative : "",
      is_unread : false,
      source : err.UNKNOWN,
      log_message_type : opt_keys.SERVER_ERROR,
      log_message_data : {}
    };
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function getter(obj) {
    var request_user_id = obj.getData();
    var timeoutKey = request_user_id.request_user_id ? request_user_id.request_user_id : a.getID();
    return error.getForFBID(timeoutKey);
  }
  /**
   * @param {?} opt_attributes
   * @param {Object} walkers
   * @return {undefined}
   */
  function with_walkers(opt_attributes, walkers) {
    getter(walkers).handleUpdate(opt_attributes);
  }
  /**
   * @param {Object} user
   * @param {Object} results
   * @return {?}
   */
  function log(user, results) {
    var err = {};
    done(err, user.ids);
    done(err, results.ids);
    var client = user.client || results.client;
    return{
      ids : err,
      client : client
    };
  }
  /**
   * @param {?} obj
   * @param {?} object
   * @return {?}
   */
  function seal(obj, object) {
    return object;
  }
  /**
   * @param {?} name
   * @return {undefined}
   */
  function load(name) {
    var result = getter(name.getRequest());
    result.handleThreadInfoError(name);
  }
  /**
   * @param {Object} ctx
   * @return {undefined}
   */
  function position(ctx) {
    var current = getter(ctx.getRequest());
    current.handleSendMessageError(ctx);
  }
  /**
   * @param {?} elem
   * @return {undefined}
   */
  function get(elem) {
    var result = getter(elem.getRequest());
    result.handleSendMessageTransportError(elem);
  }
  /**
   * @param {Object} elem
   * @return {undefined}
   */
  function setOffset(elem) {
    var result = getter(elem);
    result.handleSendMessageTimeout(elem);
  }
  /**
   * @param {?} event
   * @return {undefined}
   */
  function f2(event) {
    var value = getter(event.getRequest());
    value.handleMessageConfirmError(event);
  }
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  function _error(dataAndEvents) {
    var h2 = {
      "/ajax/mercury/thread_sync.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IDEMPOTENT,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/thread_info.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_DEFERRED_MULTI,
        /** @type {function (Object, Object): ?} */
        batch_function : finish,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers,
        /** @type {function (?): undefined} */
        error_handler : load
      },
      "/ajax/mercury/mark_folder_as_read.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/change_read_status.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_SUCCESSIVE,
        /** @type {function (Object, Object): ?} */
        batch_function : log,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/mark_seen.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_SUCCESSIVE,
        /** @type {function (?, ?): ?} */
        batch_function : seal,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/confirm_messages.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers,
        /** @type {function (?): undefined} */
        error_handler : f2
      },
      "/ajax/mercury/threadlist_info.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_SUCCESSIVE_UNIQUE,
        /** @type {function (Object, Object): ?} */
        batch_function : clean,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/mark_spam.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/mark_spam_messages.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/unmark_spam.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/unread_threads.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_SUCCESSIVE_UNIQUE,
        /** @type {function (Object, Object): ?} */
        batch_function : run,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/chat/settings.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE
      },
      "/ajax/mercury/change_archived_status.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_SUCCESSIVE,
        /** @type {function (Object, Object): ?} */
        batch_function : exports,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/delete_thread.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_SUCCESSIVE,
        /** @type {function (Object, Object): ?} */
        batch_function : setup,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/delete_messages.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/delivery_receipts.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/move_thread.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_SUCCESSIVE,
        /** @type {function (Object, Object): ?} */
        batch_function : onComplete,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/ajax/mercury/change_mute_thread.php" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/mercury/pinned_threads/" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.BATCH_SUCCESSIVE_UNIQUE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      },
      "/mercury/unpin_thread/" : {
        request_user_id : dataAndEvents._fbid,
        mode : entry.IMMEDIATE,
        /** @type {function (?, Object): undefined} */
        handler : with_walkers
      }
    };
    entry.registerEndpoints(h2);
  }
  /**
   * @param {?} dataAndEvents
   * @param {string} success
   * @param {?} opt_attributes
   * @param {?} message
   * @return {undefined}
   */
  function callback(dataAndEvents, success, opt_attributes, message) {
    entry.trySend(success, opt_attributes, message, dataAndEvents._fbid);
  }
  var logger = ProgressIndicator.getInstance("mercury_server");
  var normalClient = opt_attributes.MERCURY;
  done(error.prototype, profile, {
    /**
     * @param {string} event
     * @param {Function} deepDataAndEvents
     * @return {undefined}
     */
    getServerThreadID : function(event, deepDataAndEvents) {
      fixHook.isThreadID(event);
      add(this, event, deepDataAndEvents);
    },
    /**
     * @param {string} event
     * @param {Function} deepDataAndEvents
     * @return {undefined}
     */
    getThreadFBID : function(event, deepDataAndEvents) {
      fixHook.isThreadID(event);
      add(this, event, deepDataAndEvents);
    },
    /**
     * @param {string} type
     * @param {Function} deepDataAndEvents
     * @return {undefined}
     */
    getClientThreadID : function(type, deepDataAndEvents) {
      clone(this, type, deepDataAndEvents);
    },
    /**
     * @param {?} subKey
     * @return {?}
     */
    getClientThreadIDNow : function(subKey) {
      return success(this, subKey);
    },
    /**
     * @param {string} until
     * @return {?}
     */
    getServerThreadIDNow : function(until) {
      return remove(this, until);
    },
    /**
     * @param {?} $rootScope
     * @return {?}
     */
    getClientThreadIDForPermalinks : function($rootScope) {
      return init(this, $rootScope);
    },
    /**
     * @param {?} key
     * @return {?}
     */
    convertThreadIDIfAvailable : function(key) {
      var camelKey = this._FBIDToClientIDs.getResource(key);
      if (camelKey === void 0) {
        return key;
      } else {
        return camelKey;
      }
    },
    /**
     * @param {number} style
     * @return {?}
     */
    isUser : function(style) {
      return style < 22E8 || (style >= 1E14 && style <= 0x5b0a58f100ef || (style >= 89E12 && style <= 89999999999999 || style >= 6000001E7 && style <= 60000019999999));
    },
    /**
     * @param {string} event
     * @return {?}
     */
    canLinkExternally : function(event) {
      fixHook.isThreadID(event);
      var options = that.tokenize(event);
      return options.type == "user" || !!remove(this, event);
    },
    /**
     * @param {?} indentUnit
     * @param {?} limit
     * @param {?} key
     * @param {string} showMessage
     * @param {?} client
     * @return {undefined}
     */
    fetchThreadlistInfo : function(indentUnit, limit, key, showMessage, client) {
      key = key || cont.INBOX;
      client = client || normalClient;
      var body = showMessage ? entry.IMMEDIATE : null;
      var conn = {
        client : client
      };
      conn[key] = {
        offset : indentUnit,
        limit : limit,
        filter : showMessage
      };
      callback(this, "/ajax/mercury/threadlist_info.php", conn, body);
    },
    /**
     * @return {undefined}
     */
    fetchPinnedThreads : function() {
      callback(this, "/mercury/pinned_threads/", {});
    },
    /**
     * @param {?} subKey
     * @param {?} client
     * @return {undefined}
     */
    fetchUnseenThreadIDs : function(subKey, client) {
      client = client || normalClient;
      this.fetchThreadlistInfo(textAlt.RECENT_THREAD_OFFSET, textAlt.JEWEL_THREAD_COUNT, subKey, null, client);
    },
    /**
     * @param {?} keepData
     * @param {?} client
     * @return {undefined}
     */
    fetchUnreadThreadIDs : function(keepData, client) {
      client = client || normalClient;
      callback(this, "/ajax/mercury/unread_threads.php", {
        folders : [keepData],
        client : client
      });
    },
    /**
     * @param {?} folders
     * @param {?} client
     * @return {undefined}
     */
    fetchMissedMessages : function(folders, client) {
      client = client || normalClient;
      var message = {
        last_action_timestamp : this._lastActionTimestamp,
        folders : folders,
        client : client
      };
      message.last_action_timestamp = this._lastActionTimestamp;
      callback(this, "/ajax/mercury/thread_sync.php", message);
    },
    /**
     * @param {Array} event
     * @param {?} client
     * @return {undefined}
     */
    fetchThreadData : function(event, client) {
      client = client || normalClient;
      fixHook.allThreadID(event);
      var data = {
        threads : {},
        client : client
      };
      /** @type {Array} */
      var buffer = [];
      /** @type {Array} */
      var values = [];
      event.forEach(function(selector) {
        if (this._fetchingThreads[selector]) {
          return;
        }
        /** @type {boolean} */
        this._fetchingThreads[selector] = true;
        var templatePromise = remove(this, selector);
        var node = that.tokenize(selector);
        if (node.type == "user") {
          buffer.push(node.value);
          /** @type {Array} */
          data.threads.user_ids = buffer;
        } else {
          if (node.type == "thread") {
            if (templatePromise) {
              values.push(templatePromise);
            } else {
              values.push(node.value);
            }
            /** @type {Array} */
            data.threads.thread_fbids = values;
          } else {
            if (node.type != "root" && node.type != "pending") {
              throw new Error("Unknown thread type", node);
            }
          }
        }
      }.bind(this));
      this.inform("fetch-thread-data", data);
      var type;
      for (type in data.threads) {
        callback(this, "/ajax/mercury/thread_info.php", data);
        break;
      }
    },
    /**
     * @param {?} key
     * @param {?} client
     * @return {undefined}
     */
    ensureThreadIsFetched : function(key, client) {
      client = client || normalClient;
      if (!this._FBIDToClientIDs.getResource(key) && !this._fetchingThreads[key]) {
        /** @type {boolean} */
        this._fetchingThreads[key] = true;
        callback(this, "/ajax/mercury/thread_info.php", {
          threads : {
            thread_fbids : [key]
          },
          client : client
        });
      }
    },
    /**
     * @param {string} event
     * @param {number} indentUnit
     * @param {?} value
     * @param {?} obj
     * @param {?} client
     * @return {undefined}
     */
    fetchThreadMessages : function(event, indentUnit, value, obj, client) {
      fixHook.isThreadID(event);
      client = client || normalClient;
      var r;
      var i;
      var row = that.tokenize(event);
      var e = remove(this, event);
      /** @type {boolean} */
      var nc = false;
      if (e) {
        r = e;
        /** @type {string} */
        i = row.type == "user" ? "user_ids" : "thread_fbids";
      } else {
        r = row.value;
        switch(row.type) {
          case "user":
            /** @type {string} */
            i = "user_ids";
            /** @type {boolean} */
            nc = true;
            break;
          case "thread":
            /** @type {string} */
            i = "thread_fbids";
            break;
        }
      }
      var self = {
        messages : {},
        threads : {},
        client : client
      };
      if (i) {
        self.messages[i] = {};
        self.messages[i][r] = {
          offset : indentUnit,
          limit : value
        };
        if (nc) {
          /** @type {Array} */
          self.threads[i] = [r];
        }
        callback(this, "/ajax/mercury/thread_info.php", self, obj);
      } else {
        add(this, event, function(key) {
          self.messages.thread_fbids = {};
          self.messages.thread_fbids[key] = {
            offset : indentUnit,
            limit : value
          };
          callback(this, "/ajax/mercury/thread_info.php", self, obj);
        }.bind(this));
      }
    },
    /**
     * @param {?} keepData
     * @return {undefined}
     */
    handleThreadInfoError : function(keepData) {
      var self = keepData.getRequest().getData();
      /** @type {Array} */
      var configList = [];
      if (self.messages) {
        var camelKey;
        for (camelKey in self.messages.thread_fbids) {
          configList.push(test(success(this, camelKey)));
        }
        var key;
        for (key in self.messages.user_ids) {
          configList.push(test("user:" + key));
        }
        var type;
        for (type in self.messages.group_ids) {
          configList.push(test("group:" + type));
        }
      }
      if (configList.length) {
        this.handleUpdate({
          actions : configList,
          from_client : true,
          payload_source : deepDataAndEvents.CLIENT_CHANNEL_MESSAGE
        });
      }
      if (self.threads && (self.threads.user_ids || (self.threads.group_ids || self.threads.thread_ids))) {
        /** @type {number} */
        var interval = 5;
        /** @type {boolean} */
        var lc = true;
        if (!self.retry_count) {
          /** @type {number} */
          self.retry_count = 0;
          if (self.messages) {
            delete self.messages;
          }
        } else {
          if (self.retry_count >= interval) {
            /** @type {boolean} */
            lc = false;
            (self.threads.thread_ids || []).forEach(function(timeoutKey) {
              if (timeoutKey in this._fetchingThreads) {
                delete this._fetchingThreads[timeoutKey];
              }
            }.bind(this));
          }
        }
        if (lc) {
          /** @type {number} */
          var progressContexts = self.retry_count * 1E3;
          updateFunc(function() {
            logger.log("retry_thread", self);
            callback(this, "/ajax/mercury/thread_info.php", self);
          }.bind(this), progressContexts);
          self.retry_count++;
        }
      }
    },
    /**
     * @param {?} keepData
     * @return {undefined}
     */
    markFolderAsRead : function(keepData) {
      callback(this, "/ajax/mercury/mark_folder_as_read.php", {
        folder : keepData
      });
      /** @type {Array} */
      var global_actions = [{
        action_type : matcherFunction.MARK_ALL_READ,
        action_id : null,
        folder : keepData
      }];
      this.handleUpdate({
        global_actions : global_actions,
        from_client : true,
        payload_source : deepDataAndEvents.CLIENT_CHANGE_READ_STATUS
      });
    },
    /**
     * @param {string} event
     * @param {boolean} dataAndEvents
     * @param {Object} key
     * @return {undefined}
     */
    changeThreadReadStatus : function(event, dataAndEvents, key) {
      fixHook.isThreadID(event);
      add(this, event, function(i) {
        var params = {
          ids : {},
          source : key
        };
        /** @type {boolean} */
        params.ids[i] = dataAndEvents;
        callback(this, "/ajax/mercury/change_read_status.php", params);
      }.bind(this));
    },
    /**
     * @param {string} event
     * @param {boolean} recurring
     * @param {string} deepDataAndEvents
     * @return {undefined}
     */
    changeThreadArchivedStatus : function(event, recurring, deepDataAndEvents) {
      fixHook.isThreadID(event);
      add(this, event, function(i) {
        var params = {
          ids : {},
          source : deepDataAndEvents
        };
        /** @type {boolean} */
        params.ids[i] = recurring;
        callback(this, "/ajax/mercury/change_archived_status.php", params);
      }.bind(this));
    },
    /**
     * @param {string} event
     * @param {?} key
     * @return {undefined}
     */
    changeThreadFolder : function(event, key) {
      fixHook.isThreadID(event);
      add(this, event, function(v) {
        var obj = {};
        /** @type {Array} */
        obj[key] = [v];
        callback(this, "/ajax/mercury/move_thread.php", obj);
      }.bind(this));
    },
    /**
     * @param {string} event
     * @param {Array} isXML
     * @return {undefined}
     */
    changeMutingOnThread : function(event, isXML) {
      fixHook.isThreadID(event);
      add(this, event, function(dataAndEvents) {
        callback(this, "/ajax/mercury/change_mute_thread.php", {
          thread_fbid : dataAndEvents,
          mute_settings : isXML,
          payload_source : normalClient
        });
      }.bind(this));
    },
    /**
     * @param {string} event
     * @param {Object} deepDataAndEvents
     * @return {undefined}
     */
    markThreadSpam : function(event, deepDataAndEvents) {
      fixHook.isThreadID(event);
      add(this, event, function(term) {
        callback(this, "/ajax/mercury/mark_spam.php", {
          id : term,
          source : deepDataAndEvents
        });
      }.bind(this));
    },
    /**
     * @param {?} regex
     * @param {Array} elems
     * @return {undefined}
     */
    markMessagesSpam : function(regex, elems) {
      task.getServerIDs(elems || [], function(dataAndEvents) {
        callback(this, "/ajax/mercury/mark_spam_messages.php", {
          message_ids : dataAndEvents
        });
      }.bind(this));
    },
    /**
     * @param {string} event
     * @param {Object} deepDataAndEvents
     * @return {undefined}
     */
    unmarkThreadSpam : function(event, deepDataAndEvents) {
      fixHook.isThreadID(event);
      add(this, event, function(term) {
        callback(this, "/ajax/mercury/unmark_spam.php", {
          id : term,
          source : deepDataAndEvents
        });
      }.bind(this));
    },
    /**
     * @param {string} event
     * @param {string} init
     * @return {undefined}
     */
    deleteThread : function(event, init) {
      fixHook.isThreadID(event);
      add(this, event, function(id2) {
        var params = {
          ids : [id2],
          source : init
        };
        callback(this, "/ajax/mercury/delete_thread.php", params);
      }.bind(this));
    },
    /**
     * @param {string} event
     * @return {undefined}
     */
    unpinThread : function(event) {
      fixHook.isThreadID(event);
      add(this, event, function(term) {
        callback(this, "/mercury/unpin_thread/", {
          id : term
        });
      }.bind(this));
    },
    /**
     * @param {string} keepData
     * @param {Array} millis
     * @return {undefined}
     */
    deleteMessages : function(keepData, millis) {
      task.getServerIDs(millis || [], function(dataAndEvents) {
        callback(this, "/ajax/mercury/delete_messages.php", {
          message_ids : dataAndEvents
        });
      }.bind(this));
    },
    /**
     * @param {Array} millis
     * @return {undefined}
     */
    sendDeliveryReceipts : function(millis) {
      task.getServerIDs(millis || [], function(dataAndEvents) {
        callback(this, "/ajax/mercury/delivery_receipts.php", {
          message_ids : dataAndEvents
        });
      }.bind(this));
    },
    /**
     * @param {string} event
     * @param {?} dataAndEvents
     * @param {?} ignoreMethodDoesntExist
     * @return {undefined}
     */
    clearChat : function(event, dataAndEvents, ignoreMethodDoesntExist) {
      fixHook.isThreadID(event);
      callback(this, "/ajax/chat/settings.php", {
        clear_history_id : dataAndEvents
      });
      /** @type {Array} */
      var actions = [{
        action_type : buf.CLEAR_CHAT,
        action_id : null,
        thread_id : event,
        clear_time : ignoreMethodDoesntExist
      }];
      this.handleUpdate({
        actions : actions,
        from_client : true,
        payload_source : deepDataAndEvents.CLIENT_CLEAR_CHAT
      });
      keepData.bumpEntityKey("chat.web", "chat.clear_window");
    },
    /**
     * @param {Object} obj
     * @param {?} client
     * @return {undefined}
     */
    sendNewMessage : function(obj, client) {
      client = client || normalClient;
      if (!obj.client_state || obj.client_state == Socket.SEND_TO_SERVER) {
        task.getServerIDs(obj.forward_message_ids || [], function(ok) {
          var data = that.tokenize(obj.thread_id);
          var type = data.type;
          var value = done({}, obj);
          /** @type {Array} */
          value.forward_message_ids = ok;
          if (type == "root" && data.value == value.message_id || type == "user") {
            value.client_thread_id = value.thread_id;
            /** @type {null} */
            value.thread_id = null;
            this._sendNewMessageToServer(value, client);
          } else {
            add(this, value.thread_id, function(ok) {
              data = that.tokenize(value.thread_id);
              if (data.type == "user") {
                value.other_user_fbid = data.values;
              } else {
                value.thread_fbid = ok;
              }
              /** @type {null} */
              value.thread_id = null;
              this._sendNewMessageToServer(value);
            }.bind(this));
          }
        }.bind(this));
      }
    },
    /**
     * @param {?} user
     * @param {?} client
     * @return {undefined}
     */
    _sendNewMessageToServer : function(user, client) {
      m.inform(lt.ATTEMPT_RECONNECT);
      client = client || normalClient;
      /** @type {number} */
      this._sentMessagesTimestamp[user.message_id] = Date.now();
      positionError.getForFBID(this._fbid).enqueue(processMessage(user), this._sendMessageQueueOptions, client, user);
    },
    /**
     * @param {Object} obj
     * @param {?} client
     * @return {undefined}
     */
    requestMessageConfirmation : function(obj, client) {
      client = client || normalClient;
      var filtered = {};
      var seen = {};
      var name;
      for (name in obj) {
        var method = remove(this, name);
        if (method) {
          filtered[method] = obj[name];
        } else {
          var original = obj[name];
          /** @type {number} */
          var i = 0;
          for (;i < original.length;i++) {
            /** @type {string} */
            seen[original[i]] = name;
          }
        }
      }
      /** @type {Array.<string>} */
      var persist = Object.keys(filtered);
      /** @type {Array.<string>} */
      var originalIds = Object.keys(seen);
      if (persist.length || originalIds.length) {
        callback(this, "/ajax/mercury/confirm_messages.php", {
          thread_message_map : filtered,
          local_messages : seen,
          client : client
        });
      }
    },
    /**
     * @param {?} v
     * @return {undefined}
     */
    handleMessageConfirmError : function(v) {
      var testSource = v.getRequest().getData().thread_message_map;
      var params = v.getRequest().getData().local_messages;
      if (!testSource && !params) {
        return;
      }
      /** @type {Array} */
      var configList = [];
      var name;
      for (name in testSource) {
        var ref = testSource[name];
        ref.forEach(function(message_id) {
          configList.push({
            action_type : buf.SEND_MESSAGE,
            client_message_id : message_id,
            message_id : message_id,
            client_thread_id : null,
            thread_fbid : name,
            status : status.UNABLE_TO_CONFIRM
          });
        });
      }
      var i;
      for (i in params) {
        var param = params[i];
        configList.push({
          action_type : buf.SEND_MESSAGE,
          client_message_id : i,
          message_id : i,
          client_thread_id : param,
          thread_fbid : null,
          status : status.UNABLE_TO_CONFIRM
        });
      }
      if (configList.length) {
        this.handleUpdate({
          actions : configList,
          payload_source : deepDataAndEvents.CLIENT_HANDLE_ERROR
        });
      }
    },
    /**
     * @return {undefined}
     */
    markSeen : function() {
      var _lastActionTimestamp = this._lastActionTimestamp;
      callback(this, "/ajax/mercury/mark_seen.php", {
        seen_timestamp : _lastActionTimestamp
      });
    },
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    handleRoger : function(obj) {
      var name = obj.thread_fbid ? this._FBIDToClientIDs.getResource(obj.thread_fbid) : that.getThreadIDFromUserID(obj.reader);
      if (name) {
        var id = that.getParticipantIDFromUserID(obj.reader);
        var domParts = {};
        domParts[name] = {};
        domParts[name][id] = obj.time;
        this.inform("update-roger", domParts);
      }
    },
    /**
     * @param {?} opt_attributes
     * @param {number} att
     * @param {?} client
     * @return {undefined}
     */
    handleUpdateWaitForThread : function(opt_attributes, att, client) {
      client = client || normalClient;
      var val = this._FBIDToClientIDs.getResource(att);
      if (val) {
        this.handleUpdate(opt_attributes);
        return;
      }
      this._FBIDToClientIDs.executeOrEnqueue(att, function() {
        this._pendingUpdates.push(opt_attributes);
      }.bind(this));
      if (!this._fetchingThreads[att]) {
        /** @type {boolean} */
        this._fetchingThreads[att] = true;
        var attributes = {
          threads : {
            thread_fbids : [att]
          },
          client : client
        };
        if (this.isUser(att)) {
          attributes = {
            threads : {
              user_ids : [att]
            },
            client : client
          };
        }
        callback(this, "/ajax/mercury/thread_info.php", attributes);
      }
    },
    /**
     * @param {?} opt_attributes
     * @return {undefined}
     */
    handleUpdate : function(opt_attributes) {
      /** @type {Array} */
      var nodes = [];
      if (opt_attributes && opt_attributes.threads) {
        /** @type {number} */
        var i = 0;
        for (;i < opt_attributes.threads.length;i++) {
          if (!opt_attributes.threads[i].snippet_attachments) {
            continue;
          }
          /** @type {number} */
          var conditionIndex = 0;
          for (;conditionIndex < opt_attributes.threads[i].snippet_attachments.length;conditionIndex++) {
            if (opt_attributes.threads[i].snippet_attachments[conditionIndex].share_xhp) {
              nodes.push({
                i : i,
                j : conditionIndex,
                xhp : opt_attributes.threads[i].snippet_attachments[conditionIndex].share_xhp
              });
              /** @type {string} */
              opt_attributes.threads[i].snippet_attachments[conditionIndex].share_xhp = "HTMLDivElement not shown: object contains circular " + "reference, which was breaking JSON.stringify. " + "Look at MercuryServerRequests.handleUpdate";
            }
          }
        }
      }
      var data = {
        actions : [],
        threads : []
      };
      if (opt_attributes) {
        if (opt_attributes.actions) {
          data.actions = opt_attributes.actions.map(function(v) {
            return nv.obfuscateMessage(v);
          });
        }
        if (opt_attributes.threads) {
          data.threads = opt_attributes.threads.map(function(v) {
            return nv.obfuscateThread(v);
          });
        }
      }
      var result = done({}, opt_attributes, data);
      logger.debug("update:" + opt_attributes.payload_source, {
        payload : result,
        from_client : opt_attributes.from_client
      });
      /** @type {number} */
      var j = 0;
      for (;j < nodes.length;j++) {
        opt_attributes.threads[nodes[j].i].snippet_attachments[nodes[j].j].share_xhp = nodes[j].xhp;
      }
      for (j in opt_attributes) {
        _$timeout_.getForFBID(this._fbid).synchronizeInforms(function() {
          if (!opt_attributes.from_client) {
            create(this, opt_attributes);
            this.inform("payload-preprocessed", opt_attributes);
          }
          this.inform("update-thread-ids", this._newlyAddedClientIDs);
          this._newlyAddedClientIDs = {};
          this.inform("update-participants", opt_attributes);
          this.inform("update-threads", opt_attributes);
          this.inform("update-unread", opt_attributes);
          this.inform("update-threadlist", opt_attributes);
          this.inform("update-pinned-threads", opt_attributes);
          this.inform("update-messages", opt_attributes);
          this.inform("update-unseen", opt_attributes);
          this.inform("update-typing-state", opt_attributes);
          this.inform("update-roger", opt_attributes.roger);
          this.inform("model-update-completed", null);
          freeze(this);
        }.bind(this));
        break;
      }
    },
    /**
     * @param {Object} obj
     * @param {number} statusCode
     * @param {string} errback
     * @param {boolean} opt_attributes
     * @return {undefined}
     */
    _handleSendMessageErrorCommon : function(obj, statusCode, errback, opt_attributes) {
      logger.debug("handle_send_message_error_common", {
        reliability_error_status : errback,
        request_error_status : statusCode
      });
      var context = obj.getData();
      var j = context.message_batch;
      var actions = j.map(function(evt) {
        var data = {
          action_type : buf.SEND_MESSAGE,
          thread_fbid : evt.thread_fbid,
          client_message_id : evt.message_id,
          message_id : evt.message_id,
          client_thread_id : evt.client_thread_id,
          status : statusCode,
          error_data : opt_attributes
        };
        return data;
      });
      actions.forEach(function(callback) {
        handleResponse(this, callback, errback);
      }, this);
      var attributes = {
        actions : actions,
        payload_source : deepDataAndEvents.CLIENT_HANDLE_ERROR
      };
      this.handleUpdate(attributes);
    },
    /**
     * @param {Object} ctx
     * @return {undefined}
     */
    handleSendMessageError : function(ctx) {
      var selector = ctx.getPayload();
      /** @type {null} */
      var code = null;
      /** @type {null} */
      var errback = null;
      if (selector && selector.error_payload) {
        code = status.UNCONFIRMED;
        /** @type {string} */
        errback = "send_error";
      } else {
        code = status.ERROR;
        /** @type {string} */
        errback = "request_error" + template(ctx);
      }
      var e = ctx.error;
      if (e === 1404102) {
        element.verboseErrorHandler(ctx);
      }
      var groupDescription = /<.*>/.test(ctx.getErrorDescription()) ? ctx.getErrorSummary() : ctx.getErrorDescription();
      this._handleSendMessageErrorCommon(ctx.getRequest(), code, errback, {
        type : message.SERVER,
        code : ctx.getError(),
        description : groupDescription,
        is_transient : ctx.isTransient()
      });
    },
    /**
     * @param {?} ctx
     * @return {undefined}
     */
    handleSendMessageTransportError : function(ctx) {
      this._handleSendMessageErrorCommon(ctx.getRequest(), status.ERROR, "transport_error" + template(ctx), {
        type : message.TRANSPORT,
        code : ctx.getError(),
        is_transient : true
      });
    },
    /**
     * @param {Object} owner
     * @return {undefined}
     */
    handleSendMessageTimeout : function(owner) {
      this._handleSendMessageErrorCommon(owner, status.ERROR, "transport_timeout", {
        type : message.TIMEOUT,
        is_transient : true
      });
    },
    /**
     * @return {?}
     */
    getLastActionTimestamp : function() {
      return this._lastActionTimestamp;
    }
  });
  done(error, array);
  /** @type {function (?): undefined} */
  module.exports = error;
}, null);
__d("MercuryThreads", ["EventEmitter", "ImmutableObject", "KeyedCallbackManager", "LogHistory", "Map", "MercuryActionType", "MercuryAssert", "MercuryAttachment", "MercuryGlobalActionType", "MercuryIDs", "MercuryLogMessageType", "MercuryLoggingHelper", "MercuryPayloadSource", "MercurySingletonMixin", "MercuryThreadMode", "MessagingTag", "ReportState", "MercuryServerRequests", "Set", "MercuryThreadInformer", "setImmediate"], function(dataAndEvents, textAlt, keepData, opt_attributes, module, matcherFunction,
Model, Cookie, f, ProgressIndicator, Collection, fruits, jQuery, $location, contestant, helper, e, rule, buf, map, mode, folder, moduleInfo, deepDataAndEvents, Hash, ignoreMethodDoesntExist, $sanitize) {
  /**
   * @param {?} map
   * @return {undefined}
   */
  function object(map) {
    this.$MercuryThreads0 = map;
    this.$MercuryThreads1 = deepDataAndEvents.getForFBID(this.$MercuryThreads0);
    this.$MercuryThreads2 = ignoreMethodDoesntExist.getForFBID(this.$MercuryThreads0);
    this.$MercuryThreads3 = helper.getParticipantIDFromUserID(this.$MercuryThreads0);
    /** @type {boolean} */
    this.$MercuryThreads4 = false;
    this.$MercuryThreads5 = new f;
    this.$MercuryThreads6 = new Hash;
    /** @type {boolean} */
    this.$MercuryThreads7 = false;
    this.$MercuryThreads8 = new Hash;
    this.$MercuryThreads9 = new Hash;
    this.$MercuryThreadsa();
  }
  var model = new Model;
  var utils = ProgressIndicator.getInstance("mercury_threads");
  /**
   * @param {string} val
   * @return {?}
   */
  object.prototype.getThreadMetaNow = function(val) {
    jQuery.isThreadID(val);
    return this.$MercuryThreads5.getResource(val);
  };
  /**
   * @param {string} arg
   * @return {?}
   */
  object.prototype.getOrFetch = function(arg) {
    var keyName = this.getThreadMetaNow(arg);
    if (!keyName && !this.$MercuryThreads9.has(arg)) {
      this.$MercuryThreads8.add(arg);
    }
    if (this.$MercuryThreads8.size > 0 && !this.$MercuryThreads7) {
      this.$MercuryThreadsb();
    }
    return keyName;
  };
  /**
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsb = function() {
    if (this.$MercuryThreads7) {
      return;
    }
    /** @type {boolean} */
    this.$MercuryThreads7 = true;
    $sanitize(function() {
      /** @type {boolean} */
      this.$MercuryThreads7 = false;
      this.$MercuryThreads8.forEach(function(dest) {
        return this.$MercuryThreads9.add(dest);
      }.bind(this));
      this.getMultiThreadMeta(Array.from(this.$MercuryThreads8), function(files) {
        var file;
        for (file in files) {
          if (files.hasOwnProperty(file)) {
            this.$MercuryThreads9["delete"](file);
          }
        }
      }.bind(this));
      this.$MercuryThreads8.clear();
    }.bind(this));
  };
  /**
   * @param {?} i
   * @param {Function} fn
   * @param {?} walkers
   * @return {?}
   */
  object.prototype.getThreadMeta = function(i, fn, walkers) {
    return this.getMultiThreadMeta([i], function(elems) {
      return fn(elems[i]);
    }, walkers);
  };
  /**
   * @param {?} qualifier
   * @param {Function} deepDataAndEvents
   * @param {?} obj
   * @return {?}
   */
  object.prototype.getMultiThreadMeta = function(qualifier, deepDataAndEvents, obj) {
    jQuery.allThreadID(qualifier);
    var r20 = this.$MercuryThreads5.executeOrEnqueue(qualifier, deepDataAndEvents);
    var codeSegments = this.$MercuryThreads5.getUnavailableResources(r20);
    if (codeSegments.length) {
      /** @type {Array} */
      var fragment = [];
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var input = codeSegments[i];
        var field = helper.tokenize(input);
        var type = field.type;
        var value = field.value;
        if (type == "user") {
          this.createNewLocalThread(input, [this.$MercuryThreads3, helper.getParticipantIDFromUserID(value)]);
        } else {
          fragment.push(input);
        }
      }
      if (fragment.length) {
        this.$MercuryThreads1.fetchThreadData(fragment, obj);
      }
    }
    return r20;
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} triggerRoute
   * @return {?}
   */
  object.addListener = function(deepDataAndEvents, triggerRoute) {
    return model.addListener(deepDataAndEvents, triggerRoute);
  };
  /**
   * @param {?} target
   * @return {undefined}
   */
  object.prototype.unsubscribe = function(target) {
    this.$MercuryThreads5.unsubscribe(target);
  };
  /**
   * @param {string} string
   * @param {number} deepDataAndEvents
   * @param {?} next
   * @param {?} dataAndEvents
   * @return {?}
   */
  object.prototype.getCanonicalThreadToParticipant = function(string, deepDataAndEvents, next, dataAndEvents) {
    var ast = helper.getThreadIDFromParticipantID(string);
    var ret = this.$MercuryThreads5.getResource(ast);
    if (typeof ret == "undefined") {
      ret = this.createNewLocalThread(ast, [this.$MercuryThreads3, string], deepDataAndEvents);
      if (!dataAndEvents) {
        this.$MercuryThreads1.fetchThreadData([ast], next);
      }
    }
    return ret;
  };
  /**
   * @param {string} input
   * @param {Array} node
   * @param {number} deepDataAndEvents
   * @return {?}
   */
  object.prototype.createNewLocalThread = function(input, node, deepDataAndEvents) {
    var b = this.$MercuryThreads5.getResource(input);
    if (!b) {
      var e = helper.tokenize(input);
      var type = e.type;
      var key = e.value;
      b = new Cookie({
        thread_id : input,
        last_action_id : null,
        participants : Array.from(node),
        name : null,
        snippet : "",
        snippet_has_attachment : false,
        snippet_sender : null,
        unread_count : deepDataAndEvents ? deepDataAndEvents : 0,
        message_count : 0,
        image_src : null,
        timestamp_absolute : null,
        timestamp_relative : null,
        timestamp : null,
        canonical_fbid : type === "user" ? key : null,
        is_canonical_user : type == "user",
        is_canonical : this.$MercuryThreadsc(node),
        is_subscribed : true,
        root_message_threading_id : null,
        folder : folder.INBOX,
        is_archived : false,
        mode : mode.TITAN_ORIGINATED
      });
      this.$MercuryThreads5.setResource(input, b);
    }
    return b;
  };
  /**
   * @param {string} context
   * @return {?}
   */
  object.prototype.isEmptyLocalThread = function(context) {
    var res = this.$MercuryThreads5.getResource(context);
    if (!res) {
      return false;
    }
    var event = helper.tokenize(context);
    var type = event.type;
    return type == "root" && !res.timestamp;
  };
  /**
   * @param {string} context
   * @return {?}
   */
  object.prototype.isNewEmptyLocalThread = function(context) {
    if (!this.isEmptyLocalThread(context)) {
      return false;
    }
    var data = this.$MercuryThreads5.getResource(context);
    return!!data.participants && data.participants.length === 0;
  };
  /**
   * @param {?} _super
   * @return {?}
   */
  object.prototype.canReply = function(_super) {
    var that = this.$MercuryThreads5.getResource(_super);
    return!!(that && (that.is_subscribed && (that.mode != mode.OBJECT_ORIGINATED && (!that.has_email_participant && (!that.read_only && (that.recipients_loadable || that.recipients_loadable === void 0))))));
  };
  /**
   * @param {Array} codeSegments
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsd = function(codeSegments, deepDataAndEvents) {
    if (!codeSegments || !codeSegments.length) {
      return;
    }
    var c = new Collection;
    var collection = new Collection;
    var map = new Collection;
    /** @type {Array} */
    var yels = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var self = codeSegments[i];
      if (self.is_forward) {
        continue;
      }
      var len = self.action_type;
      if (len == fruits.LOG_MESSAGE && self.log_message_type == e.SERVER_ERROR) {
        continue;
      }
      /** @type {boolean} */
      var server_timestamp = !!(self.sync_id || self.action_id);
      var key = self.thread_id;
      jQuery.isThreadID(key);
      var value = this.$MercuryThreads5.getResource(key);
      if (!value && (!server_timestamp && len == fruits.USER_GENERATED_MESSAGE)) {
        value = this.$MercuryThreadse(self);
        this.$MercuryThreads5.setResource(key, value);
      }
      if (!value) {
        continue;
      }
      if (len == fruits.LOG_MESSAGE || len == fruits.USER_GENERATED_MESSAGE) {
        /** @type {boolean} */
        server_timestamp = !deepDataAndEvents;
      }
      if (value.server_timestamp && (self.timestamp <= value.server_timestamp && server_timestamp)) {
        continue;
      }
      if (!map.has(key)) {
        map.set(key, Object.assign({}, value));
      }
      this.$MercuryThreadsf(map.get(key), self, deepDataAndEvents);
      if (len == fruits.USER_GENERATED_MESSAGE) {
        c.set(key, self);
      }
      if (len == fruits.USER_GENERATED_MESSAGE || (len == fruits.LOG_MESSAGE || len == fruits.SEND_MESSAGE)) {
        if (self && (self.timestamp && (!collection.has(key) || self.timestamp > collection.get(key).timestamp))) {
          collection.set(key, self);
        }
      }
    }
    map.forEach(function(self, key) {
      var camelKey = c.get(key);
      if (camelKey) {
        this.$MercuryThreadsg(self, camelKey);
      }
      var p = collection.get(key);
      var h = self.timestamp;
      if (p) {
        if (p.timestamp > h) {
          Object.assign(self, {
            timestamp_absolute : p.timestamp_absolute,
            timestamp_relative : p.timestamp_relative,
            timestamp : p.timestamp
          });
        }
        var rate = self.server_timestamp;
        if (!deepDataAndEvents && p.timestamp > rate) {
          self.server_timestamp = p.timestamp;
        }
      }
      var e = new Cookie(self);
      this.$MercuryThreads5.setResource(key, e);
      yels.push(rule.obfuscateThread(e));
    }.bind(this), this);
    if (yels.length) {
      utils.debug("threads_updated", {
        threads : yels
      });
    }
  };
  /**
   * @param {Object} item
   * @param {Object} self
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsf = function(item, self, deepDataAndEvents) {
    var len = self.action_type;
    if (len == fruits.USER_GENERATED_MESSAGE || len == fruits.LOG_MESSAGE) {
      if (self.is_unread) {
        item.unread_count++;
      }
      item.message_count++;
      /** @type {boolean} */
      item.is_archived = false;
    }
    switch(len) {
      case fruits.DELETE_THREAD:
        /** @type {number} */
        item.message_count = 0;
        this.$MercuryThreadsh(self.thread_id);
        break;
      case fruits.USER_GENERATED_MESSAGE:
        if (item.last_read_timestamp >= self.timestamp) {
          this.$MercuryThreadsi(item, self, true);
        }
        this.$MercuryThreadsj(item, self.author);
        break;
      case fruits.SEND_MESSAGE:
        var el = self.log_message_type;
        if (el == e.THREAD_IMAGE) {
          item.image_src = self.log_message_data.image ? self.log_message_data.image.preview_url : null;
        }
        item.snippet_attachments = self.attachments;
        break;
      case fruits.LOG_MESSAGE:
        el = self.log_message_type;
        if (el == e.SUBSCRIBE) {
          this.$MercuryThreadsk(item, self.log_message_data.added_participants);
        } else {
          if (el == e.UNSUBSCRIBE) {
            this.$MercuryThreadsl(item, self.log_message_data.removed_participants);
          } else {
            if (el == e.THREAD_IMAGE) {
              if (!deepDataAndEvents) {
                item.image_src = self.log_message_data.image ? self.log_message_data.image.preview_url : null;
              }
            } else {
              if (el == e.THREAD_NAME) {
                item.name = self.log_message_data.name;
              }
            }
          }
        }
        break;
      case fruits.CHANGE_READ_STATUS:
        var v = this.$MercuryThreadsi(item, self, self.mark_as_read);
        if (v && self.timestamp) {
          item.last_read_timestamp = self.timestamp;
        }
        if (v && deepDataAndEvents) {
          this.$MercuryThreads1.changeThreadReadStatus(item.thread_id, self.mark_as_read, self.source);
        }
        break;
      case fruits.CLEAR_CHAT:
        this.$MercuryThreadsm(item, self.clear_time);
        break;
      case fruits.CHANGE_ARCHIVED_STATUS:
        if (item.is_archived != self.archived) {
          item.is_archived = self.archived;
          this.$MercuryThreadsn(self.thread_id);
        }
        break;
      case fruits.CHANGE_FOLDER:
        if (item.folder != self.new_folder) {
          item.folder = self.new_folder;
          this.$MercuryThreadsn(self.thread_id);
        }
        break;
      case fruits.DELETE_MESSAGES:
        if (deepDataAndEvents) {
          /** @type {string} */
          item.snippet = "...";
          /** @type {boolean} */
          item.snippet_has_attachment = false;
          /** @type {null} */
          item.snippet_attachments = null;
          /** @type {null} */
          item.snippet_sender = null;
          /** @type {boolean} */
          item.is_forwarded_snippet = false;
          this.$MercuryThreadsn(self.thread_id);
        } else {
          if (self.message_ids) {
            /** @type {number} */
            item.message_count = item.message_count - self.message_ids.length;
          }
        }
        break;
      case fruits.CHANGE_MUTE_SETTINGS:
        if (self.mute_settings !== void 0) {
          /** @type {string} */
          var prop = this.$MercuryThreads0 + "@facebook.com";
          if (item.mute_settings) {
            if (self.mute_settings) {
              var originalEvent = {};
              originalEvent[prop] = self.mute_settings;
              item.mute_settings = Object.assign({}, item.mute_settings, originalEvent);
            } else {
              item.mute_settings = Object.assign({}, item.mute_settings);
              delete item.mute_settings[prop];
            }
            this.$MercuryThreadsn(item.thread_id);
          }
        }
        break;
      case fruits.ADD_PARTICIPANTS:
        this.$MercuryThreadsk(item, self.participants);
        this.$MercuryThreadsn(item.thread_id);
        break;
    }
  };
  /**
   * @param {Object} params
   * @return {?}
   */
  object.prototype.$MercuryThreadse = function(params) {
    var event = helper.tokenize(params.thread_id);
    var type = event.type;
    var content = event.value;
    var is_canonical = this.$MercuryThreadsc(params.specific_to_list);
    return new Cookie({
      thread_id : params.thread_id,
      last_action_id : null,
      participants : params.specific_to_list,
      name : null,
      snippet : params.body,
      snippet_has_attachment : false,
      snippet_attachments : [],
      snippet_sender : params.author,
      unread_count : 0,
      message_count : 0,
      image_src : null,
      timestamp_absolute : params.timestamp_absolute,
      timestamp_relative : params.timestamp_relative,
      timestamp : params.timestamp,
      canonical_fbid : type === "user" ? content : null,
      is_canonical_user : type === "user",
      is_canonical : is_canonical,
      is_subscribed : true,
      root_message_threading_id : params.message_id,
      folder : folder.INBOX,
      is_archived : false,
      mode : mode.TITAN_ORIGINATED
    });
  };
  /**
   * @param {Object} parent
   * @param {Object} event
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  object.prototype.$MercuryThreadsi = function(parent, event, deepDataAndEvents) {
    if (event.timestamp) {
      this.$MercuryThreadso(parent.thread_id, deepDataAndEvents, event.timestamp);
    }
    if (!parent || !parent.thread_id) {
      return false;
    }
    if (!parent.timestamp) {
      this.$MercuryThreads6.add(parent.thread_id);
      return false;
    }
    /** @type {boolean} */
    var ha = !parent.unread_count;
    if (deepDataAndEvents == ha) {
      return false;
    }
    /** @type {number} */
    parent.unread_count = deepDataAndEvents ? 0 : 1;
    this.$MercuryThreadsn(parent.thread_id);
    return true;
  };
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsp = function(dataAndEvents) {
    var types = this.$MercuryThreads5.getAllResources();
    var type;
    for (type in types) {
      if (types.hasOwnProperty(type)) {
        var name = types[type];
        if (name.folder == dataAndEvents) {
          this.$MercuryThreads5.setResource(type, Cookie.setProperty(name, "unread_count", 0));
          this.$MercuryThreadsn(type);
        }
      }
    }
  };
  /**
   * @param {Object} message
   * @param {?} follow
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsm = function(message, follow) {
    if (!message || message.chat_clear_time === follow) {
      return;
    }
    message.chat_clear_time = follow;
    this.$MercuryThreads2.reorderedMessages(message.thread_id);
  };
  /**
   * @param {Object} self
   * @param {Array} failures
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsk = function(self, failures) {
    var item = new Hash(self.participants);
    self.participants = Array.from(self.participants);
    failures.forEach(function(arg) {
      if (!item.has(arg)) {
        self.participants.push(arg);
        if (arg === this.$MercuryThreads3) {
          /** @type {boolean} */
          self.is_subscribed = true;
        }
      }
    }.bind(this));
  };
  /**
   * @param {Object} self
   * @param {?} object
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsl = function(self, object) {
    var _ = new Hash(object);
    self.participants = self.participants.filter(function(protoProps) {
      return!_.has(protoProps);
    });
    if (_.has(this.$MercuryThreads3)) {
      /** @type {boolean} */
      self.is_subscribed = false;
    }
  };
  /**
   * @param {Object} self
   * @param {number} suite
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsj = function(self, suite) {
    if (self.participants[0] != suite) {
      self.participants = self.participants.filter(function(dataAndEvents) {
        return dataAndEvents != suite;
      });
      self.participants.unshift(suite);
    }
  };
  /**
   * @param {Object} item
   * @param {Object} result
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsg = function(item, result) {
    var value = result.body;
    var name = result.subject;
    /** @type {string} */
    var data = "";
    if (name) {
      name = name.toLowerCase();
      if (value.slice(0, name.length).toLowerCase() == name) {
        data = value;
      } else {
        if (value) {
          /** @type {string} */
          data = name + " \u00b7 " + value;
        } else {
          data = name;
        }
      }
    } else {
      data = value;
    }
    item.snippet = data;
    item.snippet_has_attachment = result.has_attachment;
    if (result.raw_attachments && result.raw_attachments.length > 0) {
      var source = $location.convertRaw(result.raw_attachments);
      item.snippet_attachments = source;
    } else {
      item.snippet_attachments = result.attachments;
    }
    /** @type {boolean} */
    item.is_forwarded_snippet = !!result.forward_count;
    item.snippet_sender = result.author;
  };
  /**
   * @param {Array} dataAndEvents
   * @return {?}
   */
  object.prototype.$MercuryThreadsc = function(dataAndEvents) {
    return dataAndEvents.filter(function(dataAndEvents) {
      return dataAndEvents != this.$MercuryThreads3;
    }.bind(this)).length <= 1;
  };
  /**
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsa = function() {
    this.$MercuryThreads1.subscribe("update-threads", function(dataAndEvents, data) {
      var r20 = (data.actions || []).filter(function(dataAndEvents) {
        return dataAndEvents.thread_id;
      });
      if (data.threads && data.payload_source == buf.SERVER_FETCH_THREAD_INFO) {
        data.threads.forEach(function(dataAndEvents) {
          var toDelete = dataAndEvents.thread_id;
          if (this.$MercuryThreads6.has(toDelete)) {
            this.$MercuryThreads6["delete"](toDelete);
            if (dataAndEvents.unread_count) {
              this.$MercuryThreads1.changeThreadReadStatus(dataAndEvents.thread_id, true);
            }
          }
        }.bind(this));
      }
      this.$MercuryThreadsq(data.threads);
      this.$MercuryThreadsd(r20, data.from_client);
      if (data.threads) {
        data.threads.forEach(function(dataAndEvents) {
          this.$MercuryThreadsn(dataAndEvents.thread_id);
        }.bind(this));
      }
      if (data.global_actions) {
        data.global_actions.forEach(function(node) {
          if (node.action_type == contestant.MARK_ALL_READ) {
            this.$MercuryThreadsp(node.folder);
          }
        }.bind(this));
      }
      if (this.$MercuryThreads4) {
        /** @type {boolean} */
        this.$MercuryThreads4 = false;
        model.emit("change");
      }
    }.bind(this));
  };
  /**
   * @param {Array} assertions
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsq = function(assertions) {
    if (!assertions || !assertions.length) {
      return;
    }
    var imports = {};
    /** @type {Array} */
    var rulesets = [];
    assertions.forEach(function(key) {
      var paths = new Cookie(key);
      imports[key.thread_id] = paths;
      rulesets.push(rule.obfuscateThread(paths));
    });
    if (rulesets.length) {
      utils.debug("threads_added", {
        threads : rulesets
      });
    }
    this.$MercuryThreads5.addResourcesAndExecute(imports);
  };
  /**
   * @param {?} types
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsn = function(types) {
    /** @type {boolean} */
    this.$MercuryThreads4 = true;
    this.$MercuryThreads2.updatedThread(types);
  };
  /**
   * @param {?} until
   * @return {undefined}
   */
  object.prototype.$MercuryThreadsh = function(until) {
    /** @type {boolean} */
    this.$MercuryThreads4 = true;
    this.$MercuryThreads2.deletedThread(until);
  };
  /**
   * @param {?} dataName
   * @param {boolean} deepDataAndEvents
   * @param {boolean} timestamp
   * @return {undefined}
   */
  object.prototype.$MercuryThreadso = function(dataName, deepDataAndEvents, timestamp) {
    /** @type {boolean} */
    this.$MercuryThreads4 = true;
    this.$MercuryThreads2.changedThreadReadState(dataName, deepDataAndEvents, timestamp);
  };
  /**
   * @return {?}
   */
  object.prototype.dumpResourcesDO_NOT_USE = function() {
    return this.$MercuryThreads5.dumpResources();
  };
  Object.assign(object, map);
  moduleInfo.registerCallback("mercury-threads", function() {
    var self = {};
    self.threads = {};
    var map = object._getInstances();
    var letter;
    for (letter in map) {
      self.threads[letter] = map[letter].dumpResourcesDO_NOT_USE();
    }
    return self;
  });
  /** @type {function (?): undefined} */
  module.exports = object;
}, null);
__d("WebMessengerPermalinkConstants", ["URI"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, gl) {
  var JsDiff = {
    ARCHIVED_PATH : "/messages/archived",
    BASE_PATH : "/messages",
    OTHER_PATH : "/messages/other",
    SPAM_PATH : "/messages/spam",
    COMPOSE_POSTFIX_PATH : "/new",
    SEARCH_POSTFIX_PATH : "/search",
    TID_POSTFIX_PARTIAL_PATH : "/conversation-",
    overriddenVanities : "(archived|other|spam|new|search|conversation-.*)",
    /**
     * @param {?} program
     * @param {string} dataAndEvents
     * @return {?}
     */
    getURIPathForThreadID : function(program, dataAndEvents) {
      return(dataAndEvents || JsDiff.BASE_PATH) + JsDiff.TID_POSTFIX_PARTIAL_PATH + gl.encodeComponent(gl.encodeComponent(program));
    },
    /**
     * @param {?} iteration
     * @return {?}
     */
    getThreadIDFromURI : function(iteration) {
      var oldClearColor = iteration.getPath().match(JsDiff.BASE_PATH + "(/[^/]*)*" + JsDiff.TID_POSTFIX_PARTIAL_PATH + "([^/]+)");
      if (oldClearColor) {
        var getThreadIDFromURI = gl.decodeComponent(gl.decodeComponent(oldClearColor[2]));
        return getThreadIDFromURI;
      }
    },
    /**
     * @param {string} moduleName
     * @param {string} input
     * @return {?}
     */
    getURIPathForIDOrVanity : function(moduleName, input) {
      if (moduleName.match("^" + JsDiff.overriddenVanities + "$")) {
        /** @type {string} */
        moduleName = "." + moduleName;
      }
      return(input || JsDiff.BASE_PATH) + "/" + moduleName;
    },
    /**
     * @param {string} optionsString
     * @return {?}
     */
    getUserIDOrVanity : function(optionsString) {
      var units = optionsString.match(JsDiff.BASE_PATH + ".*/([^/]+)/?$");
      var moduleName = units && units[1];
      /** @type {string} */
      var ele = JsDiff.overriddenVanities;
      if (!moduleName || moduleName.match("^" + ele + "$")) {
        return false;
      } else {
        if (moduleName.match("^\\." + ele + "$")) {
          return moduleName.substr(1);
        } else {
          return moduleName;
        }
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("ChatTypeaheadConstants", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    USER_TYPE : "user",
    THREAD_TYPE : "thread",
    FRIEND_TYPE : "friend",
    NON_FRIEND_TYPE : "non_friend",
    FB4C_TYPE : "fb4c",
    PAGE_TYPE : "page",
    HEADER_TYPE : "header"
  };
  module.exports = JsDiff;
}, null);
__d("ChatOpenTab", ["Event", "requireWeak", "ChatWelcomeMessage", "ContextualThing", "DOM", "csx", "cx", "MercuryIDs", "Parent", "curry"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, fn, module, textAlt, m, $sanitize, self, layer, trap, keepData, opt_attributes, content, ret, makeIterator) {
  /**
   * @return {undefined}
   */
  function runTest() {
    fn(["Toggler"], function(ProgressIndicator) {
      var button = ProgressIndicator.getInstance(trap.scry(document, "div._1z4y")[0]);
      if (button && button.getActive()) {
        button.hide();
      }
    });
  }
  /**
   * @param {?} program
   * @param {?} opt_handler
   * @return {undefined}
   */
  function init(program, opt_handler) {
    fn(["LogHistory", "MercuryThreads", "WebMessengerPermalinkConstants", "goURI"], function(ProgressIndicator, $templateCache, mod, eventType) {
      $templateCache.get().getThreadMeta(program, function(err) {
        if (result && result.isInitialized()) {
          result.tabController.openTab(program, result.tabsViewport, opt_handler);
        } else {
          eventType(mod.getURIPathForThreadID(program));
        }
        if (!JsDiff.canOpenTab()) {
          ProgressIndicator.getInstance("mercury").error("Unable to open chat tab", err);
        }
      });
    });
    if (document.documentElement.clientHeight <= height) {
      runTest();
    }
  }
  /**
   * @param {?} surface
   * @param {?} o
   * @param {?} opt_capt
   * @param {Function} callback
   * @return {undefined}
   */
  function listen(surface, o, opt_capt, callback) {
    m.listen(surface, "click", function(worker) {
      if (JsDiff.canOpenTab()) {
        callback(o, opt_capt);
        return worker.kill();
      }
    });
  }
  /**
   * @param {string} deepDataAndEvents
   * @param {?} input
   * @param {?} recurring
   * @param {?} f
   * @return {undefined}
   */
  function clone(deepDataAndEvents, input, recurring, f) {
    var movie = {
      referrer : deepDataAndEvents || "",
      message_thread_id : input,
      message_view : "chat",
      timestamp_send : Date.now()
    };
    if (recurring !== void 0) {
      /** @type {Array} */
      movie.message_target_ids = [recurring];
    }
    fn(["ChatImpressionLogger"], function(doc) {
      doc.logImpression(deepDataAndEvents, recurring, f);
    });
    fn(["Banzai"], function($http) {
      $http.post(url, movie, {
        delay : 0,
        retry : true
      });
    });
  }
  /**
   * @param {?} surface
   * @return {?}
   */
  function next(surface) {
    var rreturn = layer.getContext(surface);
    return rreturn && ret.byClass(rreturn, "_3qw") !== null;
  }
  /** @type {null} */
  var result = null;
  $sanitize(["ChatApp"], function(subKey) {
    return result = subKey;
  });
  /** @type {null} */
  var text = null;
  $sanitize(["ChatTabModel"], function(textAlt) {
    return text = textAlt;
  });
  /** @type {number} */
  var height = 716;
  /** @type {string} */
  var url = "messaging_tracking";
  var JsDiff = {
    /**
     * @return {?}
     */
    canOpenTab : function() {
      return result && !result.isHidden();
    },
    /**
     * @param {Array} recurring
     * @param {string} deepDataAndEvents
     * @param {?} opt_obj2
     * @return {?}
     */
    openEmptyTab : function(recurring, deepDataAndEvents, opt_obj2) {
      if (JsDiff.canOpenTab() && text) {
        var environment = text.getEmptyTab();
        init(environment);
        clone(deepDataAndEvents, environment, null, opt_obj2);
        runTest();
        return environment;
      }
      return null;
    },
    /**
     * @param {?} surface
     * @param {?} callback
     * @return {undefined}
     */
    listenOpenEmptyTab : function(surface, callback) {
      listen(surface, null, callback, JsDiff.openEmptyTab);
    },
    /**
     * @param {string} input
     * @param {string} deepDataAndEvents
     * @param {?} opt_obj2
     * @param {?} eventName
     * @return {undefined}
     */
    openThread : function(input, deepDataAndEvents, opt_obj2, eventName) {
      fn(["MercuryServerRequests"], function($templateCache) {
        if (content.isValid(input)) {
          init(input);
        } else {
          $templateCache.get().getClientThreadID(input, function(input) {
            return init(input, eventName);
          });
        }
        clone(deepDataAndEvents, input, null, opt_obj2);
        runTest();
      });
    },
    /**
     * @param {?} surface
     * @param {?} test
     * @param {?} callback
     * @return {undefined}
     */
    listenOpenThread : function(surface, test, callback) {
      listen(surface, test, callback, JsDiff.openThread);
    },
    /**
     * @param {string} recurring
     * @param {string} deepDataAndEvents
     * @param {?} opt_obj2
     * @return {?}
     */
    openUserTab : function(recurring, deepDataAndEvents, opt_obj2) {
      var environment = content.getThreadIDFromUserID(recurring);
      init(environment);
      clone(deepDataAndEvents, environment, recurring, opt_obj2);
      return true;
    },
    /**
     * @param {string} millis
     * @param {string} recurring
     * @param {string} deepDataAndEvents
     * @return {?}
     */
    openPageTab : function(millis, recurring, deepDataAndEvents) {
      fn(["MercuryThreads"], function($templateCache) {
        var input = content.getThreadIDFromUserID(recurring);
        $templateCache.get().getThreadMeta(input, function(p) {
          if (millis && millis.length > 0) {
            /** @type {number} */
            var r = (Date.now() - p.timestamp) / 1E3;
            /** @type {number} */
            var normR = r / 3600;
            if (p.message_count === 0 || normR > 24) {
              self.setWelcomeMessage(input, content.getParticipantIDFromUserID(recurring), millis);
            }
          }
        });
        init(input);
        clone(deepDataAndEvents, input, recurring);
      });
      return true;
    },
    /**
     * @param {?} surface
     * @param {?} test
     * @param {?} callback
     * @return {undefined}
     */
    listenOpenUserTab : function(surface, test, callback) {
      if (!next(surface)) {
        listen(surface, test, callback, JsDiff.openUserTab);
      }
    },
    /**
     * @param {?} surface
     * @param {?} test
     * @param {?} thisObj
     * @param {?} callback
     * @return {undefined}
     */
    listenOpenPageTab : function(surface, test, thisObj, callback) {
      if (!next(surface)) {
        listen(surface, test, callback, makeIterator(JsDiff.openPageTab, thisObj));
      }
    },
    /**
     * @param {string} recurring
     * @param {?} type
     * @param {string} deepDataAndEvents
     * @return {undefined}
     */
    openTabByType : function(recurring, type, deepDataAndEvents) {
      fn(["ChatTypeaheadConstants", "MercuryParticipantTypes"], function(m, Phone) {
        if (type === m.THREAD_TYPE) {
          if (recurring) {
            JsDiff.openThread(recurring, deepDataAndEvents);
          } else {
            JsDiff.openEmptyTab(null, deepDataAndEvents);
          }
        } else {
          if (!type || (type === Phone.FRIEND || (type === m.FRIEND_TYPE || (type === m.PAGE_TYPE || type === m.USER_TYPE)))) {
            JsDiff.openUserTab(recurring, deepDataAndEvents);
          }
        }
      });
    }
  };
  module.exports = JsDiff;
}, null);
__d("SplitImage.react", ["React", "Image.react", "cx", "joinClasses"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, dom, tr, opt_attributes, update) {
  var JsDiff = dom.createClass({
    displayName : "SplitImage",
    /**
     * @return {?}
     */
    render : function() {
      var cs = this.props.size;
      return dom.createElement("div", dom.__spread({}, this.props, {
        className : update(this.props.className, "_55lt"),
        style : Object.assign({}, this.props.style || {}, {
          width : cs,
          height : cs
        })
      }), this.renderImages());
    },
    /**
     * @return {?}
     */
    renderImages : function() {
      if (!this.props.srcs) {
        return null;
      }
      var value = this.props.srcs;
      /** @type {boolean} */
      var iterator = Array.isArray(value);
      if (!iterator || value.length == 1) {
        return this.renderOne(iterator ? value[0] : value);
      }
      return value.length == 2 ? this.renderTwo(value) : this.renderThree(value);
    },
    /**
     * @param {string} scriptLocation
     * @return {?}
     */
    renderOne : function(scriptLocation) {
      return dom.createElement(tr, {
        src : scriptLocation,
        width : this.props.size,
        height : this.props.size,
        alt : ""
      });
    },
    /**
     * @param {Array} obj
     * @return {?}
     */
    renderTwo : function(obj) {
      var size = this.props.size;
      /** @type {number} */
      var W = Math.floor(size / 2);
      /** @type {number} */
      var ml = -Math.floor(W / 2);
      /** @type {string} */
      var cls = "_55lu" + (this.props.border ? " " + "_57xo" : "");
      return dom.createElement("div", null, dom.createElement("div", {
        className : "_55lu",
        style : {
          width : W
        }
      }, dom.createElement(tr, {
        src : obj[0],
        width : size,
        height : size,
        style : {
          marginLeft : ml
        }
      })), dom.createElement("div", {
        className : cls,
        style : {
          width : W
        }
      }, dom.createElement(tr, {
        src : obj[1],
        width : size,
        height : size,
        style : {
          marginLeft : ml
        }
      })));
    },
    /**
     * @param {Array} obj
     * @return {?}
     */
    renderThree : function(obj) {
      var size = this.props.size;
      /** @type {number} */
      var val = Math.floor(size / 3 * 2);
      /** @type {number} */
      var ml = -Math.floor((size - val) / 2);
      /** @type {number} */
      var i = Math.floor(size / 2);
      /** @type {number} */
      var diff = size - val;
      /** @type {number} */
      var left = -Math.floor((i - diff) / 2);
      /** @type {string} */
      var cls = "_55lu" + (this.props.border ? " " + "_57pl" : "");
      /** @type {string} */
      var statusBarClassName = "_55lu" + (this.props.border ? " " + "_57pm" : "");
      return dom.createElement("div", null, dom.createElement("div", {
        className : cls,
        style : {
          width : val
        }
      }, dom.createElement(tr, {
        src : obj[0],
        width : size,
        height : size,
        style : {
          marginLeft : ml
        }
      })), dom.createElement("div", {
        className : statusBarClassName,
        style : {
          width : diff,
          height : i
        }
      }, dom.createElement(tr, {
        src : obj[1],
        width : i,
        height : i,
        style : {
          marginLeft : left
        }
      })), dom.createElement("div", {
        className : "_55lu",
        style : {
          width : diff,
          height : i
        }
      }, dom.createElement(tr, {
        src : obj[2],
        width : i,
        height : i,
        style : {
          marginLeft : left
        }
      })));
    }
  });
  module.exports = JsDiff;
}, null);
__d("RangedCallbackManager", ["CallbackManagerController", "copyProperties", "createObjectFrom"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, createObject, unique) {
  /**
   * @param {?} runner
   * @param {?} array
   * @param {?} b
   * @return {undefined}
   */
  var Min = function(runner, array, b) {
    /** @type {Array} */
    this._resources = [];
    /** @type {boolean} */
    this._reachedEndOfArray = false;
    /** @type {boolean} */
    this._error = false;
    this._existingIDs = {};
    this._controller = new dataAndEvents(this._constructCallbackArg.bind(this));
    this._getValueHandler = runner;
    this._compareValuesHandler = array;
    this._skipOnStrictHandler = b;
  };
  createObject(Min.prototype, {
    /**
     * @param {?} obj
     * @param {Function} deepDataAndEvents
     * @param {Function} clone
     * @param {?} ignoreMethodDoesntExist
     * @param {?} dataAndEvents
     * @return {?}
     */
    executeOrEnqueue : function(obj, deepDataAndEvents, clone, ignoreMethodDoesntExist, dataAndEvents) {
      return this._controller.executeOrEnqueue({
        start : obj,
        /** @type {Function} */
        limit : deepDataAndEvents
      }, clone, {
        strict : !!ignoreMethodDoesntExist,
        skipOnStrictHandler : dataAndEvents
      });
    },
    /**
     * @param {?} target
     * @return {undefined}
     */
    unsubscribe : function(target) {
      this._controller.unsubscribe(target);
    },
    /**
     * @param {?} regex
     * @return {?}
     */
    getUnavailableResources : function(regex) {
      var result = this._controller.getRequest(regex);
      /** @type {Array} */
      var bProperties = [];
      if (result && !this._reachedEndOfArray) {
        var request = result.request;
        var first = this._filterForStrictResults(result.options);
        var padLength = request.start + request.limit;
        var i = first.length;
        for (;i < padLength;i++) {
          bProperties.push(i);
        }
      }
      return bProperties;
    },
    /**
     * @param {Array} resources
     * @return {undefined}
     */
    addResources : function(resources) {
      resources.forEach(function(depth) {
        if (!this._existingIDs[depth]) {
          /** @type {boolean} */
          this._existingIDs[depth] = true;
          this._resources.push(depth);
          /** @type {null} */
          this._error = null;
        }
      }.bind(this));
      this.resortResources();
      this._controller.runPossibleCallbacks();
    },
    /**
     * @param {?} elems
     * @param {number} index
     * @return {undefined}
     */
    addResourcesWithoutSorting : function(elems, index) {
      var ret = this._resources.slice(0, index);
      ret = ret.concat(elems);
      ret = ret.concat(this._resources.slice(index));
      this._resources = ret;
      createObject(this._existingIDs, unique(elems, true));
      /** @type {null} */
      this._error = null;
      this._controller.runPossibleCallbacks();
    },
    /**
     * @param {Array} callback
     * @return {undefined}
     */
    removeResources : function(callback) {
      callback.forEach(function(key) {
        if (this._existingIDs[key]) {
          /** @type {boolean} */
          this._existingIDs[key] = false;
          var camelKey = this._resources.indexOf(key);
          if (camelKey != -1) {
            this._resources.splice(camelKey, 1);
          }
        }
      }.bind(this));
    },
    /**
     * @return {undefined}
     */
    removeAllResources : function() {
      /** @type {Array} */
      this._resources = [];
      this._existingIDs = {};
    },
    /**
     * @return {undefined}
     */
    resortResources : function() {
      this._resources = this._resources.sort(function(deepDataAndEvents, opt_obj2) {
        return this._compareValuesHandler(this._getValueHandler(deepDataAndEvents), this._getValueHandler(opt_obj2));
      }.bind(this));
    },
    /**
     * @return {undefined}
     */
    setReachedEndOfArray : function() {
      if (!this._reachedEndOfArray) {
        /** @type {boolean} */
        this._reachedEndOfArray = true;
        /** @type {null} */
        this._error = null;
        this._controller.runPossibleCallbacks();
      }
    },
    /**
     * @return {?}
     */
    hasReachedEndOfArray : function() {
      return this._reachedEndOfArray;
    },
    /**
     * @param {string} err
     * @return {undefined}
     */
    setError : function(err) {
      if (this._error !== err) {
        /** @type {string} */
        this._error = err;
        this._controller.runPossibleCallbacks();
      }
    },
    /**
     * @param {number} offset
     * @param {number} length
     * @param {Function} severity
     * @return {?}
     */
    getError : function(offset, length, severity) {
      var gridStore = this._filterForStrictResults({
        /** @type {Function} */
        strict : severity
      });
      return offset + length > gridStore.length ? this._error : null;
    },
    /**
     * @param {?} name
     * @return {?}
     */
    hasResource : function(name) {
      return this._existingIDs[name];
    },
    /**
     * @param {number} timeoutKey
     * @return {?}
     */
    getResourceAtIndex : function(timeoutKey) {
      return this._resources[timeoutKey];
    },
    /**
     * @return {?}
     */
    getAllResources : function() {
      return this._resources.concat();
    },
    /**
     * @param {Object} condition
     * @return {?}
     */
    getCurrentArraySize : function(condition) {
      return this._filterForStrictResults(condition).length;
    },
    /**
     * @param {Object} options
     * @return {?}
     */
    _filterForStrictResults : function(options) {
      var Sizzle = this._resources;
      if (options && options.strict) {
        var later = options.skipOnStrictHandler || this._skipOnStrictHandler;
        if (later) {
          Sizzle = Sizzle.filter(later);
        }
      }
      return Sizzle;
    },
    /**
     * @param {Object} operation
     * @param {Object} fn
     * @return {?}
     */
    _constructCallbackArg : function(operation, fn) {
      var _ = this._filterForStrictResults(fn);
      if (!this._reachedEndOfArray && (!this._error && operation.start + operation.limit > _.length)) {
        return false;
      } else {
        var n = _.slice(operation.start, operation.start + operation.limit);
        var _error = operation.start + operation.limit > _.length ? this._error : null;
        return[n, _error];
      }
    },
    /**
     * @param {?} co
     * @return {?}
     */
    getElementsUntil : function(co) {
      /** @type {Array} */
      var byteout = [];
      /** @type {number} */
      var value = 0;
      for (;value < this._resources.length;value++) {
        var r20 = this._getValueHandler(this._resources[value]);
        if (this._compareValuesHandler(r20, co) > 0) {
          break;
        }
        byteout.push(this._resources[value]);
      }
      return byteout;
    }
  });
  /** @type {function (?, ?, ?): undefined} */
  module.exports = Min;
}, null);
__d("arraySort", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, push) {
  /**
   * @param {Object} a
   * @param {?} obj
   * @return {?}
   */
  function toArray(a, obj) {
    push(Array.isArray(a));
    var arr = a.slice();
    if (obj) {
      return arr.sort(obj);
    }
    return arr.sort();
  }
  /** @type {function (Object, ?): ?} */
  module.exports = toArray;
}, null);
__d("mergeDeepInto", ["invariant", "mergeHelpers"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, isArray, options) {
  var args = options.ArrayStrategies;
  var test = options.checkArrayStrategy;
  var expect = options.checkMergeArrayArgs;
  var fn = options.checkMergeLevel;
  var cb = options.checkMergeObjectArgs;
  var callback = options.isTerminal;
  var filter = options.normalizeMergeArg;
  /**
   * @param {?} id
   * @param {string} results
   * @param {?} selector
   * @param {number} isXML
   * @return {undefined}
   */
  var find = function(id, results, selector, isXML) {
    cb(id, results);
    fn(isXML);
    /** @type {Array} */
    var resultItems = results ? Object.keys(results) : [];
    /** @type {number} */
    var i = 0;
    for (;i < resultItems.length;i++) {
      var result = resultItems[i];
      add(id, results, result, selector, isXML);
    }
  };
  /**
   * @param {string} body
   * @param {string} value
   * @param {?} selector
   * @param {?} isXML
   * @return {undefined}
   */
  var check = function(body, value, selector, isXML) {
    expect(body, value);
    fn(isXML);
    /** @type {number} */
    var x = Math.max(body.length, value.length);
    /** @type {number} */
    var camelKey = 0;
    for (;camelKey < x;camelKey++) {
      add(body, value, camelKey, selector, isXML);
    }
  };
  /**
   * @param {Object} a
   * @param {Object} values
   * @param {number} key
   * @param {?} event
   * @param {number} isXML
   * @return {undefined}
   */
  var add = function(a, values, key, event, isXML) {
    var value = values[key];
    var val = values.hasOwnProperty(key);
    var valIsObj = val && callback(value);
    var exp = val && Array.isArray(value);
    var ca = val && (!exp && !exp);
    var node = a[key];
    var child = a.hasOwnProperty(key);
    var childStyle = child && callback(node);
    var ga = child && Array.isArray(node);
    var ha = child && (!ga && !ga);
    if (childStyle) {
      if (valIsObj) {
        a[key] = value;
      } else {
        if (exp) {
          /** @type {Array} */
          a[key] = [];
          check(a[key], value, event, isXML + 1);
        } else {
          if (ca) {
            a[key] = {};
            find(a[key], value, event, isXML + 1);
          } else {
            if (!val) {
              a[key] = node;
            }
          }
        }
      }
    } else {
      if (ga) {
        if (valIsObj) {
          a[key] = value;
        } else {
          if (exp) {
            isArray(args[event]);
            if (event === args.Clobber) {
              /** @type {number} */
              node.length = 0;
            }
            check(node, value, event, isXML + 1);
          } else {
            if (ca) {
              a[key] = {};
              find(a[key], value, event, isXML + 1);
            } else {
              !val;
            }
          }
        }
      } else {
        if (ha) {
          if (valIsObj) {
            a[key] = value;
          } else {
            if (exp) {
              /** @type {Array} */
              a[key] = [];
              check(a[key], value, event, isXML + 1);
            } else {
              if (ca) {
                find(node, value, event, isXML + 1);
              } else {
                !val;
              }
            }
          }
        } else {
          if (!child) {
            if (valIsObj) {
              a[key] = value;
            } else {
              if (exp) {
                /** @type {Array} */
                a[key] = [];
                check(a[key], value, event, isXML + 1);
              } else {
                if (ca) {
                  a[key] = {};
                  find(a[key], value, event, isXML + 1);
                } else {
                  !val;
                }
              }
            }
          }
        }
      }
    }
  };
  /**
   * @param {?} query
   * @param {?} seed
   * @param {?} context
   * @return {undefined}
   */
  var Sizzle = function(query, seed, context) {
    var matched = filter(seed);
    test(context);
    find(query, matched, context, 0);
  };
  /** @type {function (?, ?, ?): undefined} */
  module.exports = Sizzle;
}, null);
__d("mergeDeep", ["mergeHelpers", "mergeDeepInto"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Tools, set) {
  var fn = Tools.checkArrayStrategy;
  var indexOf = Tools.checkMergeObjectArgs;
  var trim = Tools.normalizeMergeArg;
  /**
   * @param {?} value
   * @param {?} source
   * @param {?} val
   * @return {?}
   */
  var resolve = function(value, source, val) {
    var values = trim(value);
    var key = trim(source);
    indexOf(values, key);
    fn(val);
    var tag = {};
    set(tag, values, val);
    set(tag, key, val);
    return tag;
  };
  /** @type {function (?, ?, ?): ?} */
  module.exports = resolve;
}, null);
__d("mergeObjects", ["copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, cb) {
  /**
   * @return {?}
   */
  function request() {
    var r = {};
    /** @type {number} */
    var i = 0;
    for (;i < arguments.length;i++) {
      cb(r, arguments[i]);
    }
    return r;
  }
  /** @type {function (): ?} */
  module.exports = request;
}, null);
__d("MercuryLocalIDs", ["PresenceUtil", "randomInt"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, proceed) {
  var JsDiff = {
    /**
     * @param {number} deepDataAndEvents
     * @return {?}
     */
    generateMessageID : function(deepDataAndEvents) {
      var k = deepDataAndEvents || Date.now();
      var value = proceed(0, 4294967295);
      var oid = dataAndEvents.getSessionID();
      return "<" + k + ":" + value + "-" + oid + "@mail.projektitan.com>";
    },
    /**
     * @param {number} deepDataAndEvents
     * @return {?}
     */
    generateThreadID : function(deepDataAndEvents) {
      return "root:" + JsDiff.generateMessageID(deepDataAndEvents);
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryMessageObject", ["MercuryActionStatus", "MercuryActionType", "MercuryIDs", "MercuryLocalIDs", "MercuryMessageClientState", "MercuryMessageSourceTags", "MercurySingletonMixin", "MercurySourceType", "MercuryTimePassed", "MercurySendMessageFields", "fbt", "formatDate"], function(keepData, opt_attributes, matcherFunction, execResult, module, opt_keys, data, cause, state, Users, event, deepDataAndEvents, map, dataAndEvents, ignoreMethodDoesntExist, $attr, textAlt, callback) {
  /**
   * @param {?} cur
   * @return {undefined}
   */
  function root(cur) {
    this.$MercuryMessageObject0 = cur;
  }
  /**
   * @param {?} object
   * @param {?} message
   * @param {Object} key
   * @param {?} obj2
   * @return {?}
   */
  function debug(object, message, key, obj2) {
    /** @type {Array} */
    var source_tags = isEmpty(key) ? [deepDataAndEvents.CHAT] : [];
    /** @type {number} */
    var newDate = Date.now();
    var current = callback(new Date(newDate), "g:ia");
    var isDebugging = {
      action_type : message,
      thread_id : obj2,
      author : state.getParticipantIDFromUserID(object),
      author_email : null,
      coordinates : null,
      timestamp : newDate,
      timestamp_absolute : (new Date(newDate)).toLocaleDateString(),
      timestamp_relative : current,
      timestamp_time_passed : ignoreMethodDoesntExist.TODAY,
      is_unread : false,
      is_cleared : false,
      is_forward : false,
      is_filtered_content : false,
      is_spoof_warning : false,
      source : key,
      source_tags : source_tags
    };
    return isDebugging;
  }
  /**
   * @param {Object} str
   * @return {?}
   */
  function isEmpty(str) {
    switch(str) {
      case dataAndEvents.CHAT_WEB:
      ;
      case dataAndEvents.CHAT_JABBER:
      ;
      case dataAndEvents.CHAT_IPHONE:
      ;
      case dataAndEvents.CHAT_MEEBO:
      ;
      case dataAndEvents.CHAT_ORCA:
      ;
      case dataAndEvents.CHAT_TEST:
      ;
      case dataAndEvents.CHAT:
      ;
      case dataAndEvents.DESKTOP:
        return true;
      default:
        return false;
    }
  }
  /**
   * @param {string} what
   * @param {Object} path
   * @param {?} options
   * @param {Array} b
   * @param {?} lvl
   * @return {?}
   */
  root.prototype.constructUserGeneratedMessageObject = function(what, path, options, b, lvl) {
    var o = debug(this.$MercuryMessageObject0, cause.USER_GENERATED_MESSAGE, path, options);
    if (typeof what == "string") {
      /** @type {string} */
      what = what.replace(/^\s+/, "").replace(/\s+$/, "");
    }
    /** @type {string} */
    o.body = what;
    /** @type {boolean} */
    o.has_attachment = false;
    /** @type {boolean} */
    o.html_body = false;
    /** @type {Array} */
    o.attachments = [];
    o.specific_to_list = b || [];
    o.creator_info = lvl;
    return o;
  };
  /**
   * @param {?} source
   * @param {Object} a
   * @param {?} data
   * @return {?}
   */
  root.prototype.constructStickerMessageObject = function(source, a, data) {
    var details = debug(this.$MercuryMessageObject0, cause.USER_GENERATED_MESSAGE, a, data);
    /** @type {boolean} */
    details.has_attachment = true;
    /** @type {boolean} */
    details.html_body = false;
    /** @type {Array} */
    details.attachments = [];
    details.sticker_id = source;
    /** @type {Array} */
    details.specific_to_list = [];
    return details;
  };
  /**
   * @param {Object} data
   * @param {?} parameters
   * @return {?}
   */
  root.prototype.constructAttachmentMessageObject = function(data, parameters) {
    var settings = debug(this.$MercuryMessageObject0, cause.USER_GENERATED_MESSAGE, data, parameters);
    /** @type {Array} */
    settings.attachments = [];
    /** @type {Array} */
    settings.specific_to_list = [];
    return settings;
  };
  /**
   * @param {Object} path
   * @param {?} options
   * @param {?} lvl
   * @param {?} i
   * @return {?}
   */
  root.prototype.constructLogMessageObject = function(path, options, lvl, i) {
    var o = debug(this.$MercuryMessageObject0, cause.LOG_MESSAGE, path, options);
    o.log_message_type = lvl;
    o.log_message_data = i;
    return o;
  };
  /**
   * @param {Object} message
   * @return {undefined}
   */
  root.prototype.normalizeNewMessage = function(message) {
    if (message.status === undefined) {
      message.status = data.UNSENT;
    }
    /** @type {string} */
    message.timestamp_absolute = "Today";
    message.message_id = message.message_id || Users.generateMessageID(message.timestamp);
    var SPACE = state.getParticipantIDFromUserID(this.$MercuryMessageObject0);
    message.specific_to_list = message.specific_to_list || [];
    if (message.specific_to_list.length && message.specific_to_list.indexOf(SPACE) === -1) {
      message.specific_to_list.push(SPACE);
    }
    if (!message.thread_id) {
      if (message.specific_to_list.length == 1) {
        /** @type {string} */
        message.thread_id = "user:" + this.$MercuryMessageObject0;
      } else {
        if (message.specific_to_list.length == 2) {
          var text = message.specific_to_list[0] == SPACE ? message.specific_to_list[1] : message.specific_to_list[0];
          message.thread_id = state.getThreadIDFromParticipantID(text);
        }
      }
      message.thread_id = message.thread_id || "root:" + message.message_id;
    }
    if (!message.specific_to_list.length) {
      var event = state.tokenize(message.thread_id);
      var type = event.type;
      var image = event.value;
      if (type == "user") {
        /** @type {Array} */
        message.specific_to_list = ["fbid:" + image, SPACE];
      }
    }
    if (!message[$attr.MANUAL_RETRY_CNT]) {
      /** @type {number} */
      message[$attr.MANUAL_RETRY_CNT] = 0;
    }
  };
  /**
   * @param {Object} $scope
   * @return {undefined}
   */
  root.prototype.normalizeResendMessage = function($scope) {
    $scope.status = data.RESENDING;
    /** @type {number} */
    $scope.timestamp = Date.now();
    $scope[$attr.MANUAL_RETRY_CNT] += 1;
  };
  /**
   * @param {Object} params
   * @param {?} obj
   * @param {?} options
   * @return {undefined}
   */
  root.prototype.normalizeAddAttachmentPlaceholder = function(params, obj, options) {
    if (options.preview_attachments.length > 0) {
      /** @type {boolean} */
      params.has_attachment = true;
      params.preview_attachments = options.preview_attachments;
    }
    params.client_state = event.DO_NOT_SEND_TO_SERVER;
    params.status = data.RESENDING;
    params.upload_id = obj;
  };
  Object.assign(root, map);
  /** @type {function (?): undefined} */
  module.exports = root;
}, null);
__d("MercuryMessageActions", ["CurrentUser", "MercuryActionType", "MercuryMessageObject", "MercuryPayloadSource", "MercuryServerRequests", "MercurySingletonMixin"], function(keepData, opt_attributes, matcherFunction, execResult, module, opt_keys, a, dataAndEvents, ignoreMethodDoesntExist, deepDataAndEvents, textAlt, map) {
  /**
   * @param {?} descriptor
   * @return {undefined}
   */
  function Promise(descriptor) {
    this.$MercuryMessageActions0 = descriptor;
    this.$MercuryMessageActions1 = ignoreMethodDoesntExist.getForFBID(this.$MercuryMessageActions0);
    this.$MercuryMessageActions2 = textAlt.getForFBID(this.$MercuryMessageActions0);
  }
  /**
   * @param {Object} data
   * @param {Object} errorCallback
   * @param {?} obj
   * @return {undefined}
   */
  Promise.prototype.send = function(data, errorCallback, obj) {
    errorCallback = errorCallback || Function.prototype;
    this.$MercuryMessageActions1.normalizeNewMessage(data);
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions3(Object.assign({}, data), deepDataAndEvents.CLIENT_SEND_MESSAGE));
    this.$MercuryMessageActions2.sendNewMessage(data, obj);
    errorCallback(data.thread_id);
  };
  /**
   * @param {?} map
   * @param {?} walkers
   * @return {undefined}
   */
  Promise.prototype.resend = function(map, walkers) {
    var pdataCur = Object.assign({}, map);
    this.$MercuryMessageActions1.normalizeResendMessage(pdataCur);
    this.send(pdataCur, void 0, walkers);
  };
  /**
   * @param {Object} config
   * @param {?} walkers
   * @param {?} pending
   * @return {undefined}
   */
  Promise.prototype.addAttachmentPlaceholder = function(config, walkers, pending) {
    this.$MercuryMessageActions1.normalizeAddAttachmentPlaceholder(config, walkers, pending);
    this.$MercuryMessageActions1.normalizeNewMessage(config);
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions3(Object.assign({}, config), deepDataAndEvents.CLIENT_SEND_MESSAGE));
  };
  /**
   * @param {?} ignoreMethodDoesntExist
   * @param {?} textAlt
   * @return {undefined}
   */
  Promise.prototype.cancelAttachmentPlaceholder = function(ignoreMethodDoesntExist, textAlt) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions3({
      upload_id : ignoreMethodDoesntExist,
      upload_data : textAlt,
      action_type : dataAndEvents.CANCEL_ATTACHMENT_PLACEHOLDER
    }, deepDataAndEvents.CLIENT_SEND_MESSAGE));
  };
  /**
   * @param {?} ignoreMethodDoesntExist
   * @param {?} textAlt
   * @return {undefined}
   */
  Promise.prototype.confirmAttachmentPlaceholder = function(ignoreMethodDoesntExist, textAlt) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions3({
      upload_id : ignoreMethodDoesntExist,
      upload_data : textAlt,
      action_type : dataAndEvents.CONFIRM_ATTACHMENT_PLACEHOLDER
    }, deepDataAndEvents.CLIENT_SEND_MESSAGE));
  };
  /**
   * @param {?} triggerRoute
   * @param {?} deepDataAndEvents
   * @param {?} until
   * @param {(Document|string)} timeoutKey
   * @return {undefined}
   */
  Promise.addShareDataToExistingMessage = function(triggerRoute, deepDataAndEvents, until, timeoutKey) {
    timeoutKey = timeoutKey || a.getID();
    Promise.getForFBID(timeoutKey).addShareDataToExistingMessage(triggerRoute, deepDataAndEvents, until);
  };
  /**
   * @param {?} triggerRoute
   * @param {?} ignoreMethodDoesntExist
   * @param {?} arg
   * @return {undefined}
   */
  Promise.prototype.addShareDataToExistingMessage = function(triggerRoute, ignoreMethodDoesntExist, arg) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions4({
      server_id : triggerRoute,
      attach_key : ignoreMethodDoesntExist,
      attach_data : arg,
      action_type : dataAndEvents.ADD_SHARE_DATA_TO_EXISTING_MESSAGE
    }, deepDataAndEvents.SERVER_ADD_SHARE_DATA_TO_EXISTING_MESSAGE));
  };
  /**
   * @param {?} walkers
   * @param {(Array|string)} opt_obj2
   * @return {undefined}
   */
  Promise.prototype.markSpam = function(walkers, opt_obj2) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions5(walkers, opt_obj2, dataAndEvents.MARK_MESSAGES_SPAM, deepDataAndEvents.CLIENT_MARK_MESSAGES_SPAM));
  };
  /**
   * @param {?} walkers
   * @param {(Array|string)} opt_obj2
   * @param {?} ignoreMethodDoesntExist
   * @return {undefined}
   */
  Promise.prototype["delete"] = function(walkers, opt_obj2, ignoreMethodDoesntExist) {
    this.$MercuryMessageActions2.handleUpdate(this.$MercuryMessageActions5(walkers, opt_obj2, dataAndEvents.DELETE_MESSAGES, ignoreMethodDoesntExist || deepDataAndEvents.CLIENT_DELETE_MESSAGES));
  };
  /**
   * @param {?} opt_attributes
   * @param {?} dataAndEvents
   * @return {?}
   */
  Promise.prototype.$MercuryMessageActions3 = function(opt_attributes, dataAndEvents) {
    return{
      actions : [opt_attributes],
      from_client : true,
      payload_source : dataAndEvents
    };
  };
  /**
   * @param {?} opt_attributes
   * @param {?} dataAndEvents
   * @return {?}
   */
  Promise.prototype.$MercuryMessageActions4 = function(opt_attributes, dataAndEvents) {
    return{
      actions : [opt_attributes],
      from_client : false,
      payload_source : dataAndEvents
    };
  };
  /**
   * @param {?} obj
   * @param {Array} f
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  Promise.prototype.$MercuryMessageActions5 = function(obj, f, dataAndEvents, deepDataAndEvents) {
    return{
      actions : [{
        action_type : dataAndEvents,
        action_id : null,
        thread_id : obj,
        message_ids : f
      }],
      from_client : true,
      payload_source : deepDataAndEvents
    };
  };
  Object.assign(Promise, map);
  /** @type {function (?): undefined} */
  module.exports = Promise;
}, null);
__d("MercuryThreadActions", ["MercuryActionType", "MercuryPayloadSource", "MercuryServerRequests", "MercurySingletonMixin", "MessagingTag", "merge"], function(keepData, opt_attributes, matcherFunction, execResult, context, opt_keys, dataAndEvents, deepDataAndEvents, textAlt, map, ignoreMethodDoesntExist, $sanitize) {
  /**
   * @param {?} err
   * @return {undefined}
   */
  function self(err) {
    this.$MercuryThreadActions0 = err;
    this.$MercuryThreadActions1 = textAlt.getForFBID(this.$MercuryThreadActions0);
  }
  /**
   * @param {?} tid
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.markRead = function(tid, deepDataAndEvents) {
    this.batchMarkRead([tid], deepDataAndEvents);
  };
  /**
   * @param {Array} walkers
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.batchMarkRead = function(walkers, deepDataAndEvents) {
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions2(walkers, true, deepDataAndEvents));
  };
  /**
   * @param {?} dataAndEvents
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.markUnread = function(dataAndEvents, deepDataAndEvents) {
    this.batchMarkUnread([dataAndEvents], deepDataAndEvents);
  };
  /**
   * @param {Array} walkers
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.batchMarkUnread = function(walkers, deepDataAndEvents) {
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions2(walkers, false, deepDataAndEvents));
  };
  /**
   * @param {?} person
   * @param {?} persistent
   * @return {undefined}
   */
  self.prototype.markSeen = function(person, persistent) {
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3([person], dataAndEvents.MARK_THREAD_SEEN, deepDataAndEvents.CLIENT_MARK_THREAD_SEEN, {
      persistent : persistent
    }));
  };
  /**
   * @param {?} res
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.archive = function(res, deepDataAndEvents) {
    this.batchArchive([res], deepDataAndEvents);
  };
  /**
   * @param {Array} defs
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.batchArchive = function(defs, deepDataAndEvents) {
    defs.forEach(function(qualifier) {
      this.$MercuryThreadActions1.changeThreadArchivedStatus(qualifier, true, deepDataAndEvents);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions4(defs, true));
  };
  /**
   * @param {?} bookPath
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.unarchive = function(bookPath, deepDataAndEvents) {
    this.batchUnarchive([bookPath], deepDataAndEvents);
  };
  /**
   * @param {Array} defs
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.batchUnarchive = function(defs, deepDataAndEvents) {
    defs.forEach(function(qualifier) {
      this.$MercuryThreadActions1.changeThreadArchivedStatus(qualifier, false, deepDataAndEvents);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions4(defs, false));
  };
  /**
   * @param {?} regex
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.markSpam = function(regex, deepDataAndEvents) {
    this.batchMarkSpam([regex], deepDataAndEvents);
  };
  /**
   * @param {Array} defs
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.batchMarkSpam = function(defs, deepDataAndEvents) {
    defs.forEach(function(qualifier) {
      this.$MercuryThreadActions1.markThreadSpam(qualifier, deepDataAndEvents);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5(defs, ignoreMethodDoesntExist.SPAM));
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.unmarkSpam = function(dataAndEvents, deepDataAndEvents) {
    this.batchUnmarkSpam([dataAndEvents], deepDataAndEvents);
  };
  /**
   * @param {Array} defs
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.batchUnmarkSpam = function(defs, deepDataAndEvents) {
    defs.forEach(function(qualifier) {
      this.$MercuryThreadActions1.unmarkThreadSpam(qualifier, deepDataAndEvents);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5(defs, ignoreMethodDoesntExist.INBOX));
  };
  /**
   * @param {?} folder
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.changeFolder = function(folder, deepDataAndEvents) {
    this.batchChangeFolder([folder], deepDataAndEvents);
  };
  /**
   * @param {Array} defs
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.batchChangeFolder = function(defs, deepDataAndEvents) {
    defs.forEach(function(qualifier) {
      this.$MercuryThreadActions1.changeThreadFolder(qualifier, deepDataAndEvents);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5(defs, deepDataAndEvents));
  };
  /**
   * @param {?} dataAndEvents
   * @param {string} walkers
   * @return {undefined}
   */
  self.prototype["delete"] = function(dataAndEvents, walkers) {
    this.batchDelete([dataAndEvents], walkers);
  };
  /**
   * @param {Array} defs
   * @param {string} obj
   * @return {undefined}
   */
  self.prototype.batchDelete = function(defs, obj) {
    defs.forEach(function(qualifier) {
      this.$MercuryThreadActions1.deleteThread(qualifier, obj);
    }.bind(this));
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3(defs, dataAndEvents.DELETE_THREAD, deepDataAndEvents.CLIENT_DELETE_THREAD));
  };
  /**
   * @param {string} walkers
   * @return {undefined}
   */
  self.prototype.unmute = function(walkers) {
    this.updateMuteSetting(walkers, 0);
  };
  /**
   * @param {string} obj
   * @param {Array} isXML
   * @return {undefined}
   */
  self.prototype.updateMuteSetting = function(obj, isXML) {
    this.$MercuryThreadActions1.changeMutingOnThread(obj, isXML);
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3([obj], dataAndEvents.CHANGE_MUTE_SETTINGS, deepDataAndEvents.CLIENT_CHANGE_MUTE_SETTINGS, {
      mute_settings : isXML
    }));
  };
  /**
   * @param {?} ignoreMethodDoesntExist
   * @param {Array} participants
   * @return {undefined}
   */
  self.prototype.addParticipants = function(ignoreMethodDoesntExist, participants) {
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3([ignoreMethodDoesntExist], dataAndEvents.ADD_PARTICIPANTS, deepDataAndEvents.CLIENT_ADD_PARTICIPANTS, {
      participants : participants
    }));
  };
  /**
   * @param {string} shallow
   * @return {undefined}
   */
  self.prototype.unpinThread = function(shallow) {
    this.$MercuryThreadActions1.unpinThread(shallow);
    this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3([shallow], dataAndEvents.UNPIN_THREAD, deepDataAndEvents.CLIENT_UNPIN_THREAD));
  };
  /**
   * @param {Array} obj
   * @param {boolean} recurring
   * @param {string} key
   * @return {?}
   */
  self.prototype.$MercuryThreadActions2 = function(obj, recurring, key) {
    return this.$MercuryThreadActions3(obj, dataAndEvents.CHANGE_READ_STATUS, deepDataAndEvents.CLIENT_CHANGE_READ_STATUS, {
      mark_as_read : recurring,
      source : key
    });
  };
  /**
   * @param {Array} defs
   * @param {boolean} recurring
   * @return {?}
   */
  self.prototype.$MercuryThreadActions4 = function(defs, recurring) {
    return this.$MercuryThreadActions3(defs, dataAndEvents.CHANGE_ARCHIVED_STATUS, deepDataAndEvents.CLIENT_CHANGE_ARCHIVED_STATUS, {
      archived : recurring
    });
  };
  /**
   * @param {Array} defs
   * @param {?} ignoreMethodDoesntExist
   * @return {?}
   */
  self.prototype.$MercuryThreadActions5 = function(defs, ignoreMethodDoesntExist) {
    return this.$MercuryThreadActions3(defs, dataAndEvents.CHANGE_FOLDER, deepDataAndEvents.CLIENT_CHANGE_FOLDER, {
      new_folder : ignoreMethodDoesntExist
    });
  };
  /**
   * @param {Array} a
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @param {?} opt_attributes
   * @return {?}
   */
  self.prototype.$MercuryThreadActions3 = function(a, dataAndEvents, deepDataAndEvents, opt_attributes) {
    return{
      actions : a.map(function(thread) {
        return $sanitize({
          action_type : dataAndEvents,
          action_id : null,
          thread_id : thread
        }, opt_attributes);
      }),
      from_client : true,
      payload_source : deepDataAndEvents
    };
  };
  Object.assign(self, map);
  /** @type {function (?): undefined} */
  context.exports = self;
}, null);
__d("MercuryFolders", ["MessagingTag", "arrayContains"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, models, makeIterator) {
  /** @type {Array} */
  var fxAttrs = [models.INBOX, models.OTHER, models.ACTION_ARCHIVED, models.SPAM];
  var JsDiff = {
    /**
     * @return {?}
     */
    getSupportedFolders : function() {
      return fxAttrs.concat();
    },
    /**
     * @param {?} thisObj
     * @return {?}
     */
    isSupportedFolder : function(thisObj) {
      return makeIterator(fxAttrs, thisObj);
    },
    /**
     * @param {?} node
     * @return {?}
     */
    getFromMeta : function(node) {
      var l = node.folder;
      if (node.is_archived) {
        l = models.ACTION_ARCHIVED;
      }
      return l;
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryUnreadState", ["MercuryFolders", "LogHistory", "KeyedCallbackManager", "MercuryActionType", "MercuryGlobalActionType", "MercurySingletonMixin", "MercuryThreadlistConstants", "MessagingTag", "ReportState", "MercuryServerRequests", "MercuryThreadInformer", "MercuryThreads", "arrayContains", "copyProperties", "createObjectFrom"], function(dataAndEvents, opt_attributes, matcherFunction, execResult, module, opt_keys, rootjQuery, ProgressIndicator, clazz, global, contestant, opt_obj2, animations,
keepData, moduleInfo, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, reduce, freeze, complete) {
  /**
   * @param {?} var_args
   * @return {undefined}
   */
  function create(var_args) {
    this._fbid = var_args;
    this._serverRequests = deepDataAndEvents.getForFBID(this._fbid);
    this._threadInformer = ignoreMethodDoesntExist.getForFBID(this._fbid);
    this._threads = textAlt.getForFBID(this._fbid);
    this._allReadTimestamp = {};
    this._threadReadTimestamp = {};
    this._initialUnreadCount = {};
    this._maxCount = {};
    this._unreadResources = {};
    patterns.forEach(function(timeoutKey) {
      /** @type {number} */
      this._initialUnreadCount[timeoutKey] = 0;
      /** @type {boolean} */
      this._maxCount[timeoutKey] = false;
      this._unreadResources[timeoutKey] = new clazz;
    }.bind(this));
    this._serverRequests.subscribe("update-unread", function(dataAndEvents, ev) {
      start(this, ev);
      var codeSegments = ev.global_actions || [];
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var node = codeSegments[i];
        if (node.action_type == contestant.MARK_ALL_READ) {
          exit(this, node.folder, node.timestamp);
        }
      }
    }.bind(this));
    this._serverRequests.subscribe("update-thread-ids", function(dataAndEvents, walkers) {
      emit(this, walkers);
    }.bind(this));
  }
  /**
   * @param {?} e
   * @param {?} i
   * @param {Object} data
   * @return {undefined}
   */
  function cb(e, i, data) {
    e._unreadResources[i].setResource(suiteView, data);
    e._unreadResources[i].setResource(path, Object.keys(data));
  }
  /**
   * @param {?} error
   * @param {?} key
   * @param {Function} deepDataAndEvents
   * @return {undefined}
   */
  function callback(error, key, deepDataAndEvents) {
    var r20 = error._unreadResources[key].executeOrEnqueue(suiteView, deepDataAndEvents);
    var codeSegments = error._unreadResources[key].getUnavailableResources(r20);
    if (codeSegments.length) {
      error._serverRequests.fetchUnreadThreadIDs(key);
    }
  }
  /**
   * @param {?} self
   * @param {?} timeoutKey
   * @return {?}
   */
  function listener(self, timeoutKey) {
    return self._unreadResources[timeoutKey].getResource(suiteView);
  }
  /**
   * @param {?} parent
   * @param {?} key
   * @return {?}
   */
  function promote(parent, key) {
    var resolved = parent._unreadResources[key].getResource(path);
    if (resolved) {
      return resolved.length;
    } else {
      return parent._initialUnreadCount[key];
    }
  }
  /**
   * @param {?} e
   * @param {Object} ui
   * @return {undefined}
   */
  function start(e, ui) {
    var r;
    (ui.unread_thread_fbids || []).forEach(function(val) {
      r = val.folder;
      if (!each(r)) {
        return;
      }
      var camelKey = val.thread_fbids || [];
      camelKey = camelKey.concat(val.other_user_fbids || []);
      var data = fn(e, camelKey);
      cb(e, r, complete(data, true));
      if (data.length > max) {
        /** @type {boolean} */
        e._maxCount[r] = true;
      }
      e._threadInformer.updatedUnreadState();
    });
    (ui.message_counts || []).forEach(function(val) {
      if (val.unread_count === void 0) {
        return;
      }
      r = val.folder;
      if (val.unread_count > max) {
        /** @type {boolean} */
        e._maxCount[r] = true;
        cb(e, r, {});
        e._threadInformer.updatedUnreadState();
      } else {
        e._initialUnreadCount[r] = val.unread_count;
        if (e._initialUnreadCount[r] === 0) {
          cb(e, r, {});
        }
        e._threadInformer.updatedUnreadState();
      }
    });
    (ui.actions || []).forEach(function(message) {
      if (message.is_forward) {
        return;
      }
      var root = global;
      var me = message.other_user_fbid ? message.other_user_fbid : message.thread_fbid;
      var camelKey = message.thread_id ? message.thread_id : me;
      if (message.action_type == root.DELETE_THREAD) {
        patterns.forEach(function(dataName) {
          action(e, dataName, camelKey);
        });
      } else {
        if (message.action_type == root.CHANGE_ARCHIVED_STATUS || message.action_type == root.CHANGE_FOLDER) {
          var selector = e._threads.getThreadMetaNow(message.thread_id);
          r = rootjQuery.getFromMeta(selector);
          if (each(r) && selector.unread_count > 0) {
            ready(e, r, camelKey);
          }
          patterns.forEach(function(i) {
            if (i != r) {
              action(e, i, camelKey);
            }
          });
        } else {
          r = next(e, message);
          if (!each(r)) {
            return;
          }
          if (message.action_type == root.CHANGE_READ_STATUS) {
            if (message.mark_as_read) {
              action(e, r, camelKey, message.timestamp);
            } else {
              ready(e, r, camelKey, message.timestamp);
            }
          } else {
            if (message.action_type == root.USER_GENERATED_MESSAGE || message.action_type == root.LOG_MESSAGE) {
              if (message.is_unread) {
                ready(e, r, camelKey, message.timestamp);
              }
            }
          }
        }
      }
    });
  }
  /**
   * @param {?} e
   * @param {?} index
   * @param {string} key
   * @param {number} args
   * @return {undefined}
   */
  function ready(e, index, key, args) {
    if (e._maxCount[index]) {
      return;
    }
    callback(e, index, function(files) {
      var b = e._allReadTimestamp[index] || 0;
      var d = e._threadReadTimestamp[key] || 0;
      var a = args || Number.POSITIVE_INFINITY;
      if (a >= b && (a >= d && !files[key])) {
        files[key] = args || 0;
        cb(e, index, files);
        e._threadInformer.updatedUnreadState();
      }
    });
  }
  /**
   * @param {?} e
   * @param {?} i
   * @param {?} key
   * @param {boolean} value
   * @return {undefined}
   */
  function action(e, i, key, value) {
    if (e._maxCount[i]) {
      return;
    }
    callback(e, i, function(data) {
      if (value) {
        var v = e._threadReadTimestamp[key];
        if (!v || v < value) {
          /** @type {boolean} */
          e._threadReadTimestamp[key] = value;
        }
      }
      var label = data[key];
      if (value && (typeof label == "number" && value < label)) {
        return;
      }
      if (key in data) {
        delete data[key];
        cb(e, i, data);
        e._threadInformer.updatedUnreadState();
      }
    });
  }
  /**
   * @param {?} status
   * @param {?} name
   * @param {number} y
   * @return {undefined}
   */
  function exit(status, name, y) {
    /** @type {boolean} */
    status._maxCount[name] = false;
    cb(status, name, {});
    /** @type {number} */
    status._allReadTimestamp[name] = Math.max(status._allReadTimestamp[name] || 0, y || 0);
    status._threadInformer.updatedUnreadState();
  }
  /**
   * @param {?} s
   * @param {Array} data
   * @return {?}
   */
  function fn(s, data) {
    return data.map(s._serverRequests.convertThreadIDIfAvailable, s._serverRequests);
  }
  /**
   * @param {?} evt
   * @param {Object} obj
   * @return {undefined}
   */
  function emit(evt, obj) {
    patterns.forEach(function(id) {
      var old = listener(evt, id);
      if (!old) {
        return;
      }
      var i;
      for (i in obj) {
        var name = obj[i];
        if (old[i]) {
          old[name] = old[i];
          delete old[i];
        }
      }
      cb(evt, id, old);
    });
  }
  /**
   * @param {?} event
   * @param {?} val
   * @return {?}
   */
  function next(event, val) {
    var selector = val.thread_id ? event._threads.getThreadMetaNow(val.thread_id) : null;
    return selector ? rootjQuery.getFromMeta(selector) : val.folder;
  }
  /**
   * @param {?} fn
   * @return {?}
   */
  function each(fn) {
    return reduce(patterns, fn);
  }
  var patterns = (rootjQuery.getSupportedFolders() || []).filter(function(dataAndEvents) {
    return dataAndEvents != keepData.ACTION_ARCHIVED;
  });
  /** @type {string} */
  var suiteView = "unread_thread_hash";
  /** @type {string} */
  var path = "unseen_thread_list";
  var max = animations.MAX_UNREAD_COUNT;
  var $log = ProgressIndicator.getInstance("mercury_unread_state");
  freeze(create.prototype, {
    /**
     * @param {?} key
     * @return {?}
     */
    getUnreadCount : function(key) {
      if (this.exceedsMaxCount(key)) {
        $log.error("unguarded_unread_count_fetch", {});
        return 0;
      }
      return promote(this, key);
    },
    /**
     * @param {?} key
     * @return {?}
     */
    exceedsMaxCount : function(key) {
      return this._maxCount[key] || promote(this, key) > max;
    },
    /**
     * @param {?} key
     * @return {undefined}
     */
    markFolderAsRead : function(key) {
      if (this._maxCount[key] || promote(this, key) > 0) {
        this._serverRequests.markFolderAsRead(key);
      }
    }
  });
  freeze(create, opt_obj2);
  moduleInfo.registerCallback("mercury-unread-state", function() {
    var item = {};
    item.unread = {};
    item.unread_max_count = {};
    var testSource = create._getInstances();
    var name;
    for (name in testSource) {
      item.unread[name] = {};
      item.unread_max_count[name] = {};
      patterns.forEach(function(id) {
        item.unread[name][id] = freeze({}, listener(testSource[name], id));
        item.unread_max_count[name][id] = testSource[name]._maxCount[id];
      });
    }
    return item;
  });
  /** @type {function (?): undefined} */
  module.exports = create;
}, null);
__d("MercuryLeftNav", ["Arbiter", "MessagingTag", "NavigationMessage", "MercuryThreadInformer", "MercuryUnreadState"], function(dataAndEvents, nock, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, lang, socket, i18n) {
  /**
   * @return {undefined}
   */
  function n() {
    var countInfo = communication.getUnreadCount(socket.INBOX);
    lang.inform(i18n.NAVIGATION_COUNT_UPDATE, {
      key : "inbox",
      hide : true
    });
    lang.inform(i18n.NAVIGATION_COUNT_UPDATE, {
      key : "inbox",
      count : countInfo
    });
  }
  var source = nock("MercuryThreadInformer").get();
  var communication = nock("MercuryUnreadState").get();
  /** @type {boolean} */
  var l = false;
  var JsDiff = {
    /**
     * @return {undefined}
     */
    bootstrap : function() {
      if (l) {
        return;
      }
      source.subscribe("unread-updated", n);
      /** @type {boolean} */
      l = true;
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryThreadMuter", ["AsyncDialog", "AsyncRequest", "CurrentUser", "DOM"], function(ignoreMethodDoesntExist, textAlt, keepData, $sanitize, module, opt_attributes, res, dataAndEvents, a, deepDataAndEvents) {
  var jQuery = {
    /**
     * @return {?}
     */
    getUserIDEmail : function() {
      return a.getID() + "@facebook.com";
    },
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    getThreadMuteSettingForUser : function(dataAndEvents) {
      return dataAndEvents.mute_settings && dataAndEvents.mute_settings[jQuery.getUserIDEmail()];
    },
    /**
     * @param {?} node
     * @return {?}
     */
    isThreadMuted : function(node) {
      return jQuery.getThreadMuteSettingForUser(node) !== void 0;
    },
    /**
     * @param {string} walkers
     * @param {?} comments
     * @return {undefined}
     */
    showMuteChangeDialog : function(walkers, comments) {
      res.send((new dataAndEvents("/ajax/mercury/mute_thread_dialog.php")).setRelativeTo(comments), function(self) {
        self.subscribe("confirm", function() {
          this.hide();
          var ret;
          deepDataAndEvents.scry(this.getRoot(), 'input[type="radio"]').forEach(function(elem) {
            if (elem.checked) {
              ret = elem.value;
            }
          });
          ret = jQuery.convertRawMuteSetting(ret);
          $sanitize(["MercuryThreadActions"], function($templateCache) {
            $templateCache.get().updateMuteSetting(walkers, ret);
          });
        }.bind(self));
      });
    },
    /**
     * @param {?} second
     * @return {?}
     */
    convertRawMuteSetting : function(second) {
      switch(second) {
        case "always":
          return-1;
        case "1hour":
          return 3600;
        case "8am":
          var m;
          /** @type {Date} */
          var date2 = new Date;
          /** @type {Date} */
          var date1 = new Date;
          date1.setHours(8);
          date1.setMinutes(0);
          date1.setSeconds(0);
          if (date1 > date2) {
            /** @type {number} */
            m = date1 - date2;
          } else {
            /** @type {number} */
            m = date1 - date2 + 24 * 3600 * 1E3;
          }
          return m / 1E3;
        default:
          return 0;
      }
    }
  };
  module.exports = jQuery;
}, null);
__d("ImageSourceType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    PROFILE_PICTURE : "profile_picture",
    IMAGE : "image"
  };
  module.exports = JsDiff;
}, null);
__d("ImageSourceRequest", ["CurrentUser", "ImageSourceType", "KeyedCallbackManager", "PhotoResizeModeConst", "MercuryServerDispatcher", "arrayContains", "extendArray"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, a, propNames, Deferred, dataAndEvents, stats, ondata, done) {
  /**
   * @return {undefined}
   */
  function $() {
    this._request = {
      fbid : null,
      type : null,
      width : null,
      height : null,
      resize_mode : null
    };
    /** @type {null} */
    this._callback = null;
  }
  /**
   * @return {?}
   */
  function next() {
    if (ret) {
      return ret;
    }
    var r = new Deferred;
    ret = r;
    stats.registerEndpoints({
      "/ajax/image_source.php" : {
        request_user_id : a.getID(),
        mode : stats.BATCH_DEFERRED_MULTI,
        /**
         * @param {Object} error
         * @param {Object} client
         * @return {?}
         */
        batch_function : function(error, client) {
          done(error.requests, client.requests);
          return error;
        },
        /**
         * @param {Array} bits
         * @param {Object} event
         * @return {undefined}
         */
        handler : function(bits, event) {
          var codeSegments = event.getData().requests;
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;++i) {
            r.setResource(fn(codeSegments[i]), bits[i]);
          }
        }
      }
    });
    return r;
  }
  /**
   * @param {Object} ev
   * @return {?}
   */
  function fn(ev) {
    return[ev.fbid, ev.type, ev.width, ev.height, ev.resize_mode].join("|");
  }
  /**
   * @param {?} pageStart
   * @return {?}
   */
  $.prototype.setFBID = function(pageStart) {
    this._request.fbid = pageStart;
    return this;
  };
  /**
   * @param {string} val
   * @return {?}
   */
  $.prototype.setType = function(val) {
    if (!ondata([propNames.PROFILE_PICTURE, propNames.IMAGE], val)) {
      throw new TypeError("ImageSourceRequest.setType: invalid type " + val);
    }
    /** @type {string} */
    this._request.type = val;
    return this;
  };
  /**
   * @param {number} width
   * @param {number} height
   * @return {?}
   */
  $.prototype.setDimensions = function(width, height) {
    /** @type {number} */
    this._request.width = width;
    /** @type {number} */
    this._request.height = height;
    return this;
  };
  /**
   * @param {?} val
   * @return {?}
   */
  $.prototype.setResizeMode = function(val) {
    if (!ondata([dataAndEvents.COVER, dataAndEvents.CONTAIN], val)) {
      throw new TypeError("ImageSourceRequest.setResizeMode: invalid resize mode " + val);
    }
    this._request.resize_mode = val;
    return this;
  };
  /**
   * @param {Function} callback
   * @return {?}
   */
  $.prototype.setCallback = function(callback) {
    /** @type {Function} */
    this._callback = callback;
    return this;
  };
  /**
   * @return {?}
   */
  $.prototype.send = function() {
    if (!this._request.fbid || (!this._request.width || (!this._request.height || (!this._request.type || (!this._request.resize_mode || !this._callback))))) {
      throw new Error("ImageSourceRequest: You must set all the fields");
    }
    var buf = next();
    var pair = fn(this._request);
    buf.executeOrEnqueue(pair, this._callback);
    if (buf.getUnavailableResourcesFromRequest(pair).length === 1) {
      stats.trySend("/ajax/image_source.php", {
        requests : [this._request]
      });
      return true;
    }
    return false;
  };
  /** @type {null} */
  var ret = null;
  /** @type {function (): undefined} */
  module.exports = $;
}, null);
__d("MercuryParticipants", ["CurrentUser", "EventEmitter", "ImageSourceRequest", "ImageSourceType", "ImmutableObject", "KeyedCallbackManager", "Map", "MercuryAssert", "MercuryIDs", "MercuryParticipantsConstants", "MercuryParticipantTypes", "MercuryPayloadSource", "MercuryServerRequests", "PhotoResizeModeConst", "Set", "ShortProfiles", "fbt", "getObjectValues", "mapObject", "setImmediate"], function(deepDataAndEvents, opt_keys, positionError, oFunctionBody, module, _$timeout_, a, ignoreMethodDoesntExist,
textAlt, inDataSet, binding, keepData, opt_attributes, Data, _, patient, subject, special, matcherFunction, execResult, Layout, jQuery, dataAndEvents, filter, $, $sanitize) {
  /**
   * @param {?} err
   * @return {undefined}
   */
  function self(err) {
    this.$MercuryParticipants0 = err;
    this.$MercuryParticipants1 = new ignoreMethodDoesntExist;
    this.$MercuryParticipants2 = new keepData;
    this.$MercuryParticipants3 = new opt_attributes;
    /** @type {boolean} */
    this.$MercuryParticipants4 = false;
    this.$MercuryParticipants5 = new Layout;
    this.$MercuryParticipants6 = new Layout;
    this.$MercuryParticipants7 = matcherFunction.getForFBID(this.$MercuryParticipants0);
    this.$MercuryParticipants7.subscribe("update-participants", function(dataAndEvents, data) {
      if (data.participants && data.participants.length > 0) {
        var defs = {};
        data.participants.forEach(function(def) {
          /** @type {Element} */
          defs[def.id] = def;
        });
        this.$MercuryParticipants8(defs);
      }
    }.bind(this));
  }
  /**
   * @param {string} id
   * @param {Object} item
   * @return {?}
   */
  function text(id, item) {
    var data = {
      gender : item.gender,
      href : item.uri,
      id : id,
      image_src : item.thumbSrc,
      name : item.name,
      short_name : item.firstName,
      employee : item.employee,
      is_employee_away : item.is_employee_away,
      type : item.type,
      vanity : item.vanity,
      is_friend : item.is_friend,
      orion_eligible : item.orionEligible,
      social_snippets : item.social_snippets
    };
    if (item.officeStatus) {
      data.officeStatus = item.officeStatus;
      data.officeStatusStartDate = item.officeStatusStartDate;
      data.officeStatusEndDate = item.officeStatusEndDate;
      data.officeStatusComment = item.officeStatusComment;
      data.officeStatusLocation = item.officeStatusLocation;
    }
    return data;
  }
  /**
   * @param {string} query
   * @param {string} arg
   * @return {?}
   */
  function process(query, arg) {
    return{
      gender : patient.UNKNOWN_GENDER,
      href : null,
      id : query,
      image_src : patient.EMAIL_IMAGE,
      big_image_src : patient.EMAIL_IMAGE,
      name : arg,
      short_name : arg,
      employee : false
    };
  }
  /** @type {string} */
  var ev = "change";
  /**
   * @param {?} deepDataAndEvents
   * @param {?} triggerRoute
   * @return {?}
   */
  self.prototype.addListener = function(deepDataAndEvents, triggerRoute) {
    return this.$MercuryParticipants1.addListener(deepDataAndEvents, triggerRoute);
  };
  /**
   * @param {string} result
   * @return {?}
   */
  self.prototype.getIDFromVanityOrFBID = function(result) {
    if (!result) {
      return;
    }
    if (this.$MercuryParticipants3.has(result)) {
      return this.$MercuryParticipants3.get(result);
    }
    if (/^\d+$/.test(result)) {
      return _.getParticipantIDFromUserID(result);
    }
  };
  /**
   * @param {string} name
   * @return {?}
   */
  self.prototype.getNow = function(name) {
    return this.$MercuryParticipants9(name);
  };
  /**
   * @param {string} arg
   * @return {?}
   */
  self.prototype.getOrFetch = function(arg) {
    var keyName = this.$MercuryParticipants9(arg);
    if (!keyName && !this.$MercuryParticipants6.has(arg)) {
      this.$MercuryParticipants5.add(arg);
    }
    if (this.$MercuryParticipants5.size > 0 && !this.$MercuryParticipants4) {
      this.$MercuryParticipantsa();
    }
    return keyName;
  };
  /**
   * @param {string} name
   * @param {Object} fn
   * @return {?}
   */
  self.prototype.get = function(name, fn) {
    Data.isParticipantID(name);
    return this.$MercuryParticipantsb([name], function(context) {
      fn(context[name]);
    });
  };
  /**
   * @param {?} elems
   * @param {Function} deepDataAndEvents
   * @return {?}
   */
  self.prototype.getMulti = function(elems, deepDataAndEvents) {
    return this.$MercuryParticipantsb(elems, deepDataAndEvents);
  };
  /**
   * @param {string} owner
   * @param {Function} $sanitize
   * @return {?}
   */
  self.prototype.getBigImageMulti = function(owner, $sanitize) {
    Data.allParticipantIDs(owner);
    var height = patient.BIG_IMAGE_SIZE;
    return this.$MercuryParticipantsb(owner, function(context) {
      var value = {};
      /** @type {number} */
      var completed = 0;
      var layer = new Layout;
      var fn = function(name, rhs) {
        completed++;
        value[name] = rhs;
        if (completed === owner.length) {
          $sanitize(value);
          if (layer.size > 0) {
            this.$MercuryParticipantsc(layer);
          }
        }
      }.bind(this);
      var callback = function(path, module) {
        this.$MercuryParticipants2.setResource(path, binding.set(this.$MercuryParticipants2.getResource(path), {
          big_image_src : module.uri
        }));
        layer.add(path);
        fn(path, module.uri);
      }.bind(this);
      var match;
      for (match in context) {
        var f = context[match];
        if (!f.big_image_src) {
          (new textAlt).setFBID(_.getUserIDFromParticipantID(match)).setType(inDataSet.PROFILE_PICTURE).setDimensions(height, height).setResizeMode(execResult.COVER).setCallback(callback.bind(null, match)).send();
        } else {
          fn(f.id, f.big_image_src);
        }
      }
    }.bind(this));
  };
  /**
   * @param {Object} elems
   * @param {Function} $sanitize
   * @return {?}
   */
  self.prototype.getOrderedBigImageMulti = function(elems, $sanitize) {
    return this.getBigImageMulti(elems, function(buf) {
      $sanitize(elems.map(function(off) {
        return buf[off];
      }));
    });
  };
  /**
   * @param {?} owner
   * @param {Function} deepDataAndEvents
   * @return {?}
   */
  self.prototype.$MercuryParticipantsb = function(owner, deepDataAndEvents) {
    Data.allParticipantIDs(owner);
    var r20 = this.$MercuryParticipants2.executeOrEnqueue(owner, deepDataAndEvents);
    var asserterNames = this.$MercuryParticipants2.getUnavailableResources(r20);
    var elem = {};
    asserterNames.forEach(function(style) {
      var target = _.tokenize(style);
      var type = target.type;
      var value = target.value;
      if (type == "fbid") {
        elem[style] = value;
      } else {
        if (type == "email") {
          this.$MercuryParticipantsd(style, value);
        }
      }
    }.bind(this));
    var matched = filter(elem);
    if (matched.length) {
      jQuery.getMulti(matched, function(buf) {
        var q = $(elem, function(off, datum) {
          return text(datum, buf[off]);
        });
        this.$MercuryParticipantse(q);
      }.bind(this));
    }
    return this.$MercuryParticipantsf(r20);
  };
  /**
   * @param {string} option
   * @return {?}
   */
  self.prototype.$MercuryParticipants9 = function(option) {
    var data = this.$MercuryParticipants2.getResource(option);
    if (!data) {
      var elem = _.tokenize(option);
      var nodeType = elem.type;
      var camelKey = elem.value;
      if (nodeType === "email") {
        data = this.$MercuryParticipantsd(option, camelKey);
      }
    }
    return data;
  };
  /**
   * @param {string} selector
   * @param {string} value
   * @return {?}
   */
  self.prototype.$MercuryParticipantsd = function(selector, value) {
    var r20 = new binding(process(selector, value));
    this.$MercuryParticipants2.setResource(selector, r20);
    return r20;
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  self.prototype.$MercuryParticipantsc = function(data) {
    this.$MercuryParticipants1.emit(ev, data);
  };
  /**
   * @param {?} q
   * @param {?} selector
   * @return {undefined}
   */
  self.prototype.$MercuryParticipantse = function(q, selector) {
    this.$MercuryParticipants7.handleUpdate({
      participants : filter(q),
      from_client : !!selector,
      payload_source : selector ? special.CLIENT_FETCH_PARTICIPANTS : special.SERVER_FETCH_PARTICIPANTS
    });
  };
  /**
   * @param {Text} defs
   * @return {undefined}
   */
  self.prototype.$MercuryParticipants8 = function(defs) {
    defs = $(defs, function(tree, build) {
      if (tree.vanity) {
        this.$MercuryParticipants3.set(tree.vanity, build);
      }
      return new binding(this.$MercuryParticipantsg(tree));
    }.bind(this));
    this.$MercuryParticipants2.addResourcesAndExecute(defs);
    this.$MercuryParticipantsc(new Layout(Object.keys(defs)));
  };
  /**
   * @param {Object} object
   * @return {?}
   */
  self.prototype.$MercuryParticipantsg = function(object) {
    /** @type {boolean} */
    var fa = object.type === subject.USER || object.type === subject.FRIEND;
    if (!fa) {
      return object;
    }
    if (!object.name && (!object.href && !object.vanity)) {
      /** @type {string} */
      var name = "Facebook User";
      /** @type {string} */
      object.name = name;
      /** @type {string} */
      object.short_name = name;
    }
    return object;
  };
  /**
   * @return {undefined}
   */
  self.prototype.$MercuryParticipantsa = function() {
    if (this.$MercuryParticipants4) {
      return;
    }
    /** @type {boolean} */
    this.$MercuryParticipants4 = true;
    $sanitize(function() {
      /** @type {boolean} */
      this.$MercuryParticipants4 = false;
      this.$MercuryParticipants5.forEach(function(dest) {
        return this.$MercuryParticipants6.add(dest);
      }.bind(this));
      this.$MercuryParticipantsb(Array.from(this.$MercuryParticipants5), function(files) {
        var file;
        for (file in files) {
          if (files.hasOwnProperty(file)) {
            this.$MercuryParticipants6["delete"](file);
          }
        }
      }.bind(this));
      this.$MercuryParticipants5.clear();
    }.bind(this));
  };
  /**
   * @param {?} existing
   * @return {?}
   */
  self.prototype.$MercuryParticipantsf = function(existing) {
    return{
      remove : function() {
        this.$MercuryParticipants2.unsubscribe(existing);
      }.bind(this)
    };
  };
  module.exports = new self(a.getID());
}, null);
__d("MercuryAttachmentSnippet.react", ["EmoticonsList", "Image.react", "MercuryAttachment", "MercuryAttachmentType", "MercuryConstants", "MercuryIDs", "MercuryParticipants", "React", "StickerConstants", "TextWithEmoticons.react", "cx", "fbt", "ix", "joinClasses", "OrionMercuryAttachmentSnippet"], function(ignoreMethodDoesntExist, require, textAlt, keepData, module, opt_attributes, gen, property, obj, ActivityObject, dataAndEvents, util, rule, self, node, def, deepDataAndEvents, el, $sanitize, func) {
  /**
   * @param {Array} contextElem
   * @return {?}
   */
  function str2array(contextElem) {
    if (!contextElem) {
      return[];
    }
    return contextElem.filter(function(dataAndEvents) {
      return dataAndEvents.attach_type === ActivityObject.PHOTO;
    });
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function isArguments(object) {
    return object == node.LIKE_STICKER_ID || (object == node.HOT_LIKE_SMALL_STICKER_ID || (object == node.HOT_LIKE_MEDIUM_STICKER_ID || object == node.HOT_LIKE_LARGE_STICKER_ID));
  }
  /**
   * @param {boolean} a
   * @param {string} val2
   * @return {?}
   */
  function equal(a, val2) {
    return!!(a && util.getParticipantIDFromUserID(val2) == a);
  }
  var elm = require("OrionMercuryAttachmentSnippet").module;
  var JsDiff = self.createClass({
    displayName : "MercuryAttachmentSnippet",
    propTypes : {
      thread : self.PropTypes.object.isRequired,
      viewer : self.PropTypes.string.isRequired
    },
    /**
     * @return {undefined}
     */
    componentWillMount : function() {
      this._ensureParticipant(this.props.thread.snippet_sender);
      this._setVariables(this.props);
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {undefined}
     */
    componentWillReceiveProps : function(deepDataAndEvents) {
      this._ensureParticipant(deepDataAndEvents.thread.snippet_sender);
      this._setVariables(deepDataAndEvents);
    },
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      this._cancelParticipantFetch();
    },
    /**
     * @return {?}
     */
    render : function() {
      var task = this._getSenderName();
      if (this._hasOnlyPhotos()) {
        return this._renderPhotoSnippet(task);
      }
      if (this._hasOnlyVideo()) {
        return this._renderVideoSnippet(task);
      }
      if (this._hasAudioClip()) {
        return this._renderAudioClipSnippet(task);
      }
      if (this._hasSticker()) {
        return this._renderStickerSnippet(task);
      }
      if (this._hasOrion()) {
        return this._renderOrionSnippet(task);
      }
      if (this._hasShoerackInvitation()) {
        return this._renderShoerackInvitationSnippet(task);
      }
      if (this._hasShare()) {
        return this._renderShareSnippet(task);
      }
      return this._renderMixedSnippet(task);
    },
    /**
     * @param {?} fn
     * @return {?}
     */
    _renderPhotoSnippet : function(fn) {
      var r20;
      if (this._photos.length === 1) {
        if (this._isViewerSender) {
          /** @type {string} */
          r20 = "You sent a photo.";
        } else {
          r20 = el._("{name} sent a photo.", [el.param("name", fn)]);
        }
      } else {
        if (this._isViewerSender) {
          r20 = el._("You sent {num_photos} photos.", [el.param("num_photos", this._photos.length)]);
        } else {
          r20 = el._("{name} sent {num_photos} photos.", [el.param("name", fn), el.param("num_photos", this._photos.length)]);
        }
      }
      return this._renderSnippet(r20);
    },
    /**
     * @param {?} fn
     * @return {?}
     */
    _renderVideoSnippet : function(fn) {
      var r20;
      if (this._isViewerSender) {
        /** @type {string} */
        r20 = "You sent a video.";
      } else {
        r20 = el._("{sender name} sent a video.", [el.param("sender name", fn)]);
      }
      return this._renderSnippet(r20);
    },
    /**
     * @param {?} fn
     * @return {?}
     */
    _renderAudioClipSnippet : function(fn) {
      var r20;
      if (this._isViewerSender) {
        /** @type {string} */
        r20 = "You sent a voice message.";
      } else {
        r20 = el._("{name} sent a voice message.", [el.param("name", fn)]);
      }
      return this._renderSnippet(r20);
    },
    /**
     * @param {?} fn
     * @return {?}
     */
    _renderStickerSnippet : function(fn) {
      if (isArguments(this._attachments[0].metadata.stickerID)) {
        return self.createElement(def, {
          renderEmoticons : true,
          text : gen.symbols.like
        });
      } else {
        if (this._isViewerSender) {
          return self.createElement("span", null, "You sent a sticker.");
        } else {
          return self.createElement("span", null, el._("{name} sent a sticker.", [el.param("name", fn)]));
        }
      }
    },
    /**
     * @param {?} fn
     * @return {?}
     */
    _renderOrionSnippet : function(fn) {
      if (!elm) {
        return null;
      }
      return self.createElement("span", null, self.createElement(elm, self.__spread({}, this._attachments[0].metadata)));
    },
    /**
     * @param {?} fn
     * @return {?}
     */
    _renderShoerackInvitationSnippet : function(fn) {
      var r20;
      if (this._isViewerSender) {
        /** @type {string} */
        r20 = "You sent a Moments invitation.";
      } else {
        r20 = el._("{sender name} invited you to share photos using Moments.", [el.param("sender name", fn)]);
      }
      return this._renderSnippet(r20);
    },
    /**
     * @param {?} fn
     * @return {?}
     */
    _renderShareSnippet : function(fn) {
      var r20;
      if (this._isViewerSender) {
        /** @type {string} */
        r20 = "You shared a link.";
      } else {
        r20 = el._("{sender name} shared a link.", [el.param("sender name", fn)]);
      }
      return this._renderSnippet(r20);
    },
    /**
     * @param {?} fn
     * @return {?}
     */
    _renderMixedSnippet : function(fn) {
      return self.createElement("span", null, this._attachments.filter(function(dataAndEvents) {
        return dataAndEvents.attach_type === ActivityObject.FILE || (dataAndEvents.attach_type === ActivityObject.PHOTO || dataAndEvents.attach_type === ActivityObject.VIDEO);
      }).map(function(unused) {
        return this._renderSnippet(unused.name, unused.icon_type);
      }.bind(this)));
    },
    /**
     * @param {?} regex
     * @param {?} str
     * @return {?}
     */
    _renderSnippet : function(regex, str) {
      var child = obj.getAttachIconClass(str || this._attachments[0].icon_type);
      var item = func(child, "uiIconText _3tn");
      return self.createElement("span", {
        className : item
      }, self.createElement(property, {
        src : $sanitize("/images/messaging/docs/generic.png")
      }), regex);
    },
    /**
     * @return {?}
     */
    _hasOnlyPhotos : function() {
      return this._photos.length === this._attachments.length;
    },
    /**
     * @return {?}
     */
    _hasOnlyVideo : function() {
      return this._attachments.length === 1 && this._attachments[0].attach_type === ActivityObject.VIDEO;
    },
    /**
     * @return {?}
     */
    _hasAudioClip : function() {
      return!!(this._attachments.length === 1 && (this._attachments[0].metadata && obj.isVoiceMessage(this._attachments[0].metadata.type)));
    },
    /**
     * @return {?}
     */
    _hasSticker : function() {
      return this._attachments.length === 1 && this._attachments[0].attach_type === ActivityObject.STICKER;
    },
    /**
     * @return {?}
     */
    _hasOrion : function() {
      return this._hasSingleAttachmentOfShareDataType(dataAndEvents.MercurySupportedShareType.FB_ORION);
    },
    /**
     * @return {?}
     */
    _hasShoerackInvitation : function() {
      return this._hasSingleAttachmentOfShareDataType(dataAndEvents.MercurySupportedShareType.FB_SHOERACK_INVITATION);
    },
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    _hasSingleAttachmentOfShareDataType : function(dataAndEvents) {
      return this._attachments.length === 1 && this._attachments[0].share_data_type === dataAndEvents;
    },
    /**
     * @return {?}
     */
    _hasShare : function() {
      return this._attachments.length === 1 && this._attachments[0].attach_type === ActivityObject.SHARE;
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {undefined}
     */
    _setVariables : function(deepDataAndEvents) {
      this._viewer = deepDataAndEvents.viewer;
      this._sender = deepDataAndEvents.thread.snippet_sender;
      this._attachments = deepDataAndEvents.thread.snippet_attachments;
      this._photos = str2array(this._attachments);
      this._isViewerSender = equal(this._sender, this._viewer);
    },
    /**
     * @return {?}
     */
    _getSenderName : function() {
      if (!this._sender || this._isViewerSender) {
        return null;
      }
      var object = rule.getNow(this._sender);
      if (!object) {
        return null;
      }
      return object.short_name;
    },
    /**
     * @param {string} paths
     * @return {undefined}
     */
    _ensureParticipant : function(paths) {
      if (!paths) {
        return;
      }
      this._cancelParticipantFetch();
      if (!rule.getNow(paths)) {
        this._sub = rule.get(paths, function(dataAndEvents) {
          return this.forceUpdate();
        }.bind(this));
      }
    },
    /**
     * @return {undefined}
     */
    _cancelParticipantFetch : function() {
      if (this._sub) {
        this._sub.remove();
      }
    }
  });
  module.exports = JsDiff;
}, null);
__d("MercuryThreadImage.react", ["ImmutableObject", "MercuryIDs", "MercuryParticipants", "MercuryParticipantsConstants", "Pixelz.react", "React", "SplitImage.react", "areEqual"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, logger, nv, top, rawFile, property, self, def, worker) {
  var JsDiff = self.createClass({
    displayName : "MercuryThreadImage",
    propTypes : {
      thread : self.PropTypes.instanceOf(logger).isRequired,
      viewer : self.PropTypes.string.isRequired,
      size : self.PropTypes.number
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        participantImages : []
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this._getParticipantImages(this.props);
    },
    /**
     * @param {Object} deepDataAndEvents
     * @param {?} nextProps
     * @return {undefined}
     */
    componentWillReceiveProps : function(deepDataAndEvents, nextProps) {
      this._getParticipantImages(deepDataAndEvents);
    },
    /**
     * @param {Object} props
     * @param {?} task
     * @return {?}
     */
    shouldComponentUpdate : function(props, task) {
      return props.thread.image_src !== this.props.thread.image_src || (props.size !== this.props.size || !worker(task.participantImages, this.state.participantImages));
    },
    /**
     * @return {?}
     */
    render : function() {
      var size = this.props.size || rawFile.BIG_IMAGE_SIZE;
      if (this.props.thread.image_src) {
        return self.createElement(property, {
          height : size,
          resizeMode : "cover",
          src : this.props.thread.image_src,
          width : size
        });
      }
      if (this.state.participantImages.length > 0) {
        return self.createElement(def, {
          srcs : this.state.participantImages,
          border : true,
          size : size
        });
      }
      return null;
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {undefined}
     */
    _getParticipantImages : function(deepDataAndEvents) {
      var self = deepDataAndEvents.thread;
      var v = deepDataAndEvents.viewer;
      if (self.image_src) {
        return;
      }
      var c = nv.getParticipantIDFromUserID(v);
      var array = self.participants.filter(function(inSender) {
        return inSender != c;
      });
      /** @type {Array} */
      var ret = [];
      if (!array.length) {
        /** @type {Array} */
        ret = [c];
      } else {
        if (array.length == 1) {
          ret = array;
        } else {
          ret = array.slice(0, 3);
        }
      }
      top.getOrderedBigImageMulti(ret, function(dataAndEvents) {
        if (this.isMounted()) {
          this.setState({
            participantImages : dataAndEvents
          });
        }
      }.bind(this));
    }
  });
  module.exports = JsDiff;
}, null);
__d("MercuryParticipantListRenderer", ["fbt"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, self) {
  /**
   * @return {undefined}
   */
  function Context() {
    /** @type {boolean} */
    this.$MercuryParticipantListRenderer0 = false;
    /** @type {boolean} */
    this.$MercuryParticipantListRenderer1 = false;
    /** @type {boolean} */
    this.$MercuryParticipantListRenderer2 = false;
    this.$MercuryParticipantListRenderer3 = function(school) {
      return this.$MercuryParticipantListRenderer1 ? school.short_name : school.name;
    }.bind(this);
  }
  /**
   * @param {?} failing_message
   * @return {?}
   */
  function report(failing_message) {
    if (failing_message) {
      return "New Message";
    } else {
      return "No Participants";
    }
  }
  /**
   * @param {Array} parent
   * @return {?}
   */
  function isDescendant(parent) {
    return parent[0];
  }
  /**
   * @param {Array} args
   * @return {?}
   */
  function pass(args) {
    return self._("{participant1}, {participant2}", [self.param("participant1", args[0]), self.param("participant2", args[1])]);
  }
  /**
   * @param {Array} key
   * @return {?}
   */
  function assignOrWrapInDeprecateGetter(key) {
    return self._("{participant1} and {participant2}", [self.param("participant1", key[0]), self.param("participant2", key[1])]);
  }
  /**
   * @param {Array} name
   * @return {?}
   */
  function addClass(name) {
    return self._("{participant1}, {participant2}, {participant3}", [self.param("participant1", name[0]), self.param("participant2", name[1]), self.param("participant3", name[2])]);
  }
  /**
   * @param {Array} obj
   * @return {?}
   */
  function isFunction(obj) {
    return self._("{participant1}, {participant2} and {participant3}", [self.param("participant1", obj[0]), self.param("participant2", obj[1]), self.param("participant3", obj[2])]);
  }
  /**
   * @param {Array} args
   * @return {?}
   */
  function start(args) {
    return self._("{participant1}, {participant2}, {participant3}, {others_link}", [self.param("participant1", args[0]), self.param("participant2", args[1]), self.param("participant3", args[2]), self.param("others_link", param(args.length - 3))]);
  }
  /**
   * @param {Array} parent
   * @return {?}
   */
  function promote(parent) {
    return self._("{participant1}, {participant2} and {others_link}", [self.param("participant1", parent[0]), self.param("participant2", parent[1]), self.param("others_link", param(parent.length - 2))]);
  }
  /**
   * @param {number} fn
   * @return {?}
   */
  function param(fn) {
    if (fn > 1) {
      return self._("{others_count} others", [self.param("others_count", fn)]);
    } else {
      return "1 other";
    }
  }
  /**
   * @param {Array} key
   * @return {?}
   */
  Context.prototype.renderParticipantList = function(key) {
    var parent = key.map(this.$MercuryParticipantListRenderer3);
    switch(parent.length) {
      case 0:
        return report(this.$MercuryParticipantListRenderer0);
      case 1:
        return isDescendant(parent);
      case 2:
        return this.$MercuryParticipantListRenderer2 ? assignOrWrapInDeprecateGetter(parent) : pass(parent);
      case 3:
        return this.$MercuryParticipantListRenderer2 ? isFunction(parent) : addClass(parent);
      default:
        return this.$MercuryParticipantListRenderer2 ? promote(parent) : start(parent);
    }
  };
  /**
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  Context.prototype.setIsNewThread = function(dataAndEvents) {
    /** @type {boolean} */
    this.$MercuryParticipantListRenderer0 = dataAndEvents;
    return this;
  };
  /**
   * @param {(RegExp|string)} dataAndEvents
   * @return {?}
   */
  Context.prototype.setNameRenderer = function(dataAndEvents) {
    /** @type {(RegExp|string)} */
    this.$MercuryParticipantListRenderer3 = dataAndEvents;
    return this;
  };
  /**
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  Context.prototype.setUseShortName = function(dataAndEvents) {
    /** @type {boolean} */
    this.$MercuryParticipantListRenderer1 = dataAndEvents;
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  Context.prototype.setUseAndSeparator = function(dataAndEvents) {
    this.$MercuryParticipantListRenderer2 = dataAndEvents;
    return this;
  };
  /** @type {function (): undefined} */
  module.exports = Context;
}, null);
__d("MercuryThreadTitle.react", ["MercuryIDs", "MercuryParticipantListRenderer", "MercuryParticipants", "React", "TextWithEmoticons.react", "fbt"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, $log, dataAndEvents, rule, self, property, obj) {
  var JsDiff = self.createClass({
    displayName : "MercuryThreadTitle",
    propTypes : {
      isNewThread : self.PropTypes.bool,
      thread : self.PropTypes.object.isRequired,
      viewer : self.PropTypes.string.isRequired,
      showUnreadCount : self.PropTypes.bool,
      useShortName : self.PropTypes.bool,
      useAndSeparator : self.PropTypes.bool
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        isNewThread : false,
        showUnreadCount : false,
        useShortName : false,
        useAndSeparator : false
      };
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        participantNames : ""
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this._renderParticipantsList(this.props);
    },
    /**
     * @param {Object} $rootScope
     * @return {undefined}
     */
    componentWillReceiveProps : function($rootScope) {
      this._renderParticipantsList($rootScope);
    },
    /**
     * @return {?}
     */
    render : function() {
      return self.createElement("span", {
        className : this.props.className
      }, this.props.thread.name ? this._renderThreadTitle() : this.state.participantNames);
    },
    /**
     * @return {?}
     */
    getTitle : function() {
      return this.state.participantNames;
    },
    /**
     * @return {?}
     */
    _renderThreadTitle : function() {
      var button = this.props.thread;
      var traditional = self.createElement(property, {
        renderEmoticons : true,
        renderEmoji : true,
        text : button.name
      });
      if (!button.unread_count || !this.props.showUnreadCount) {
        return traditional;
      }
      return this._renderTitleWithUnreadCount(traditional, button.unread_count);
    },
    /**
     * @param {Object} $scope
     * @return {undefined}
     */
    _renderParticipantsList : function($scope) {
      if ($scope.thread.name) {
        return;
      }
      var className = $log.getParticipantIDFromUserID($scope.viewer);
      var paths = $scope.thread.participants;
      if (paths.length > 1) {
        paths = paths.filter(function(c) {
          return c != className;
        });
      }
      rule.getMulti(paths, function(buf) {
        if (!this.isMounted()) {
          return;
        }
        var camelKey = paths.map(function(off) {
          return buf[off];
        });
        var traditional = (new dataAndEvents).setUseShortName(this.props.useShortName).setUseAndSeparator(this.props.useAndSeparator).setIsNewThread(this.props.isNewThread).renderParticipantList(camelKey);
        var participantNames = $scope.showUnreadCount && $scope.thread.unread_count ? this._renderTitleWithUnreadCount(traditional, $scope.thread.unread_count) : traditional;
        this.setState({
          participantNames : participantNames
        });
      }.bind(this));
    },
    /**
     * @param {?} traditional
     * @param {?} fn
     * @return {?}
     */
    _renderTitleWithUnreadCount : function(traditional, fn) {
      return obj._("{conversation-title} ({unread-count})", [obj.param("conversation-title", traditional), obj.param("unread-count", fn)]);
    }
  });
  module.exports = JsDiff;
}, null);
__d("WebMessengerThreadPermalinks", ["MercuryIDs", "MessagingTag", "URI", "WebMessengerPermalinkConstants", "WWWBase", "requireWeak"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, selfObj, element, Feature, s, v, iterator) {
  /**
   * @param {string} key
   * @param {?} fn
   * @param {string} val
   * @return {undefined}
   */
  function reduce(key, fn, val) {
    var object = new Feature(v.uri);
    var name = selfObj.tokenize(key).value;
    object.setPath(toString(val) + "/" + name);
    if (fn) {
      fn(object.toString());
    }
  }
  /**
   * @param {string} obj
   * @param {?} fn
   * @param {string} str
   * @return {undefined}
   */
  function iterate(obj, fn, str) {
    iterator(["MercuryServerRequests"], function($templateCache) {
      var readyList = $templateCache.get();
      readyList.getServerThreadID(obj, function(i) {
        var c = new Feature(v.uri);
        c.setPath(s.getURIPathForThreadID(i, toString(str)));
        if (fn) {
          fn(c.toString());
        }
      });
    });
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function toString(value) {
    var url = s.BASE_PATH;
    if (value && value != element.INBOX) {
      url += "/" + value;
    }
    return url;
  }
  var JsDiff = {
    /**
     * @param {string} key
     * @param {?} fn
     * @param {string} objId
     * @return {undefined}
     */
    getThreadURI : function(key, fn, objId) {
      if (selfObj.isCanonical(key)) {
        reduce(key, fn, objId);
      } else {
        iterate(key, fn, objId);
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryViewer", ["CurrentUser", "MercuryAssert"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, a, nv) {
  var k = "fbid:" + a.getID();
  var JsDiff = {
    /**
     * @return {?}
     */
    getID : function() {
      return k;
    },
    /**
     * @param {string} v
     * @return {?}
     */
    isViewer : function(v) {
      nv.isParticipantID(v);
      return v === k;
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryMessages", ["AsyncRequest", "BanzaiODS", "CurrentUser", "LogHistory", "MercuryActionStatus", "MercuryActionType", "MercuryAssert", "MercuryAttachmentType", "MercuryLogMessageType", "MercuryMessageClientState", "MercuryPayloadSource", "MercurySingletonMixin", "MercuryViewer", "MercuryMessageActions", "MercuryMessageIDs", "RangedCallbackManager", "ReportState", "MercurySendMessageFields", "MercuryServerRequests", "MercuryThreadActions", "MercuryThreadInformer", "MercuryThreads", "copyProperties",
"debounceAcrossTransitions", "invariant", "isNode", "mergeDeep", "setImmediate"], function(execResult, opt_keys, positionError, oFunctionBody, module, _$timeout_, dataAndEvents, deepDataAndEvents, a, ProgressIndicator, xhr, req, process, match, opt, msg, Browser, map, b, ignoreMethodDoesntExist, assert, Event, moduleInfo, el, textAlt, keepData, opt_attributes, matcherFunction, createObject, require, on, isArray, $sanitize, Application) {
  /**
   * @param {?} self
   * @param {?} name
   * @return {?}
   */
  function update(self, name) {
    var src = name;
    if (self._localIdsMap[name]) {
      src = self._localIdsMap[name];
    }
    return self._messages[src];
  }
  /**
   * @param {?} options
   * @return {?}
   */
  function toJSON(options) {
    switch(options) {
      case Browser.UNKNOWN:
      ;
      case Browser.SERVER_INITIAL_DATA:
      ;
      case Browser.SERVER_FETCH_THREAD_INFO:
      ;
      case Browser.SERVER_THREAD_SYNC:
        return true;
    }
    return false;
  }
  /**
   * @param {string} range
   * @return {?}
   */
  function fn(range) {
    return range && range.substr(0, 6) === "server";
  }
  /**
   * @param {?} item
   * @param {string} eventName
   * @return {?}
   */
  function _getRespondersForEvent(item, eventName) {
    if (!item._threadsToMessages[eventName]) {
      item._threadsToMessages[eventName] = new Event(function(obj) {
        return update(item, obj).timestamp;
      }, function(near, far) {
        return far - near;
      });
    }
    return item._threadsToMessages[eventName];
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function serialize(object) {
    /** @type {Array} */
    var children = [];
    return JSON.stringify(object, function(dataAndEvents, child) {
      if (typeof child === "object" && child !== null) {
        if (isArray(child)) {
          return "<" + child.nodeName + ">";
        }
        if (children.indexOf(child) !== -1) {
          return "CIRCULAR";
        }
        children.push(child);
      }
      return child;
    });
  }
  /**
   * @param {?} key
   * @param {Array} array
   * @param {Object} propName
   * @return {undefined}
   */
  function pluck(key, array, propName) {
    array.forEach(function(eventName) {
      var r = _getRespondersForEvent(key, eventName);
      r.setReachedEndOfArray();
      key._threadInformer.reorderedMessages(eventName, propName);
    });
  }
  /**
   * @param {?} var_args
   * @return {undefined}
   */
  function create(var_args) {
    this._fbid = var_args;
    this._messageActions = ignoreMethodDoesntExist.getForFBID(this._fbid);
    this._serverRequests = textAlt.getForFBID(this._fbid);
    this._threadInformer = opt_attributes.getForFBID(this._fbid);
    this._threads = matcherFunction.getForFBID(this._fbid);
    this._threadActions = keepData.getForFBID(this._fbid);
    this._failedHistoryFetchThreads = {};
    this._threadsToMessages = {};
    this._localTitanMessagesCount = {};
    this._messages = {};
    this._attachmentData = {};
    this._messagesNeedingAttachmentData = {};
    this._localIdsMap = {};
    this._serverRequests.subscribe("update-messages", function(dataAndEvents, options) {
      var failures = (options.actions || []).filter(function(params) {
        var path = params.action_type;
        var waiting = (params.is_forward || params.thread_id) && (path == req.LOG_MESSAGE || (path == req.USER_GENERATED_MESSAGE || (path == req.SEND_MESSAGE || (path == req.CLEAR_CHAT || (path == req.DELETE_THREAD || (path == req.DELETE_MESSAGES || path == req.MARK_MESSAGES_SPAM))))));
        var program = params.upload_id && params.upload_data && (path == req.CANCEL_ATTACHMENT_PLACEHOLDER || path == req.CONFIRM_ATTACHMENT_PLACEHOLDER);
        var inverse = path == req.ADD_SHARE_DATA_TO_EXISTING_MESSAGE && (params.server_id && (params.attach_key && params.attach_data));
        return waiting || (program || inverse);
      });
      var typePattern = toJSON(options.payload_source);
      if (fn(options.payload_source)) {
        failures.forEach(function(a) {
          if (!a.is_forward && a.action_type !== req.ADD_SHARE_DATA_TO_EXISTING_MESSAGE) {
            var b = this._threads.getThreadMetaNow(a.thread_id);
            if (b) {
              /** @type {boolean} */
              a.is_cleared = a.timestamp < b.chat_clear_time;
            }
          }
        }.bind(this));
      }
      this.handleUpdates(failures, typePattern, options.payload_source, options.from_client);
      if (options.end_of_history) {
        pluck(this, options.end_of_history, options.payload_source);
      }
    }.bind(this));
    $.debug("constructed", {
      fbid : this._fbid
    });
  }
  /**
   * @param {?} root
   * @param {Array} args
   * @return {?}
   */
  function get(root, args) {
    var matched = args.map(update.bind(null, root));
    return matched.reverse();
  }
  /**
   * @param {?} item
   * @param {string} key
   * @param {Array} attrs
   * @return {undefined}
   */
  function save(item, key, attrs) {
    var codeSegments = attrs.filter(function(obj) {
      return ok(update(item, obj));
    });
    if (!item._localTitanMessagesCount[key]) {
      /** @type {number} */
      item._localTitanMessagesCount[key] = 0;
    }
    item._localTitanMessagesCount[key] += codeSegments.length;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function ok(value) {
    var ctor = value.action_type;
    if (ctor == req.USER_GENERATED_MESSAGE) {
      return true;
    }
    switch(value.log_message_type) {
      case opt.SUBSCRIBE:
      ;
      case opt.UNSUBSCRIBE:
      ;
      case opt.SERVER_ERROR:
      ;
      case opt.LIVE_LISTEN:
        return false;
      default:
        return true;
    }
  }
  /**
   * @param {?} list
   * @param {?} obj
   * @param {Node} k
   * @return {undefined}
   */
  function validate(list, obj, k) {
    k = k || obj.message_id;
    var cs = list._attachmentData[k];
    if (cs) {
      cs.forEach(function(res) {
        var i = obj.attachments.indexOf(res.attach_key);
        if (i !== -1) {
          obj.attachments[i] = res.data;
        }
      });
      delete list._attachmentData[k];
    } else {
      if (!obj.is_forward && arrayContains(list, obj)) {
        /** @type {boolean} */
        list._messagesNeedingAttachmentData[k] = true;
        isObject(list);
      }
    }
  }
  /**
   * @param {?} value
   * @param {?} obj
   * @return {?}
   */
  function arrayContains(value, obj) {
    if (!obj || !obj.attachments) {
      return false;
    }
    /** @type {number} */
    var i = 0;
    for (;i < obj.attachments.length;i++) {
      var part = obj.attachments[i];
      if (typeof part === "string" && part.indexOf(match.SHARE) === 0) {
        return true;
      }
    }
    var codeSegments = obj.forward_message_ids || [];
    /** @type {number} */
    i = 0;
    for (;i < codeSegments.length;i++) {
      var str = update(value, codeSegments[i]);
      if (arrayContains(value, str)) {
        return true;
      }
    }
    return false;
  }
  var $ = ProgressIndicator.getInstance("mercury_messages");
  moduleInfo.registerCallback("mercury-messages", function() {
    var messages = {};
    var $cookies = {};
    var iterable = create._getInstances();
    var key;
    for (key in iterable) {
      messages[key] = {};
      var paramIndex;
      for (paramIndex in iterable[key]._messages) {
        var params = iterable[key]._messages[paramIndex];
        if (Object.keys(params).length === 0) {
          continue;
        }
        var type = params.thread_id;
        messages[key][type] = messages[key][type] || {};
        /** @type {*} */
        messages[key][type][params.message_id] = JSON.parse(serialize(params));
      }
      $cookies[key] = createObject({}, iterable[key]._localIdsMap);
    }
    var $scope = {};
    $scope.local_message_ids = $cookies;
    $scope.messages = messages;
    return $scope;
  });
  createObject(create.prototype, {
    /**
     * @param {Array} files
     * @return {?}
     */
    getMessagesFromIDs : function(files) {
      return(files || []).map(update.bind(null, this)).filter(function(dataAndEvents) {
        return dataAndEvents;
      });
    },
    /**
     * @param {string} eventName
     * @param {?} dataAndEvents
     * @return {?}
     */
    hasLoadedNMessages : function(eventName, dataAndEvents) {
      var r = _getRespondersForEvent(this, eventName);
      return r.hasReachedEndOfArray() || r.getCurrentArraySize() >= dataAndEvents;
    },
    /**
     * @param {string} eventName
     * @param {?} dataAndEvents
     * @return {?}
     */
    hasLoadedExactlyNMessages : function(eventName, dataAndEvents) {
      var r = _getRespondersForEvent(this, eventName);
      return r.getCurrentArraySize() == dataAndEvents;
    },
    /**
     * @return {undefined}
     */
    clearMercuryInternalState_DO_NOT_USE : function() {
      this._failedHistoryFetchThreads = {};
      this._threadsToMessages = {};
      this._localTitanMessagesCount = {};
      this._messages = {};
      this._attachmentData = {};
      this._messagesNeedingAttachmentData = {};
      this._localIdsMap = {};
    },
    /**
     * @param {string} eventName
     * @param {Object} context
     * @param {?} dataAndEvents
     * @param {Function} callback
     * @param {?} walkers
     * @param {?} next
     * @return {?}
     */
    getThreadMessagesRange : function(eventName, context, dataAndEvents, callback, walkers, next) {
      var jQuery = _getRespondersForEvent(this, eventName);
      var i = function(prop) {
        callback(get(this, prop));
      }.bind(this);
      var key = jQuery.executeOrEnqueue(context, dataAndEvents, i);
      var arr = jQuery.getUnavailableResources(key);
      var iterator = this._failedHistoryFetchThreads[eventName];
      if (arr.length && !iterator) {
        var length = jQuery.getCurrentArraySize();
        var fromIndex = this._localTitanMessagesCount[eventName] || 0;
        /** @type {number} */
        var padLength = length - fromIndex;
        var udataCur = arr.length + fromIndex;
        $.debug("fetch_missing_messages", {
          threadID : eventName,
          offset : context,
          limit : dataAndEvents,
          missingIndices : arr,
          messageCount : length,
          localMessageCount : fromIndex
        });
        this._serverRequests.fetchThreadMessages(eventName, padLength, udataCur, walkers, next);
      } else {
        /** @type {boolean} */
        this._failedHistoryFetchThreads[eventName] = false;
      }
      return key;
    },
    /**
     * @param {?} eventName
     * @param {?} obj
     * @return {?}
     */
    getThreadMessagesSinceTimestamp : function(eventName, obj) {
      var r = _getRespondersForEvent(this, eventName);
      var keys = r.getElementsUntil(obj);
      return get(this, keys);
    },
    /**
     * @param {string} eventName
     * @return {?}
     */
    hasLoadedAllMessages : function(eventName) {
      return _getRespondersForEvent(this, eventName).hasReachedEndOfArray();
    },
    /**
     * @param {string} eventName
     * @return {?}
     */
    getCurrentlyLoadedMessages : function(eventName) {
      var typePattern = _getRespondersForEvent(this, eventName).getAllResources();
      return get(this, typePattern);
    },
    /**
     * @param {?} target
     * @param {string} callback
     * @return {undefined}
     */
    unsubscribe : function(target, callback) {
      process.isThreadID(callback);
      var args = _getRespondersForEvent(this, callback);
      args.unsubscribe(target);
    },
    /**
     * @param {?} size
     * @param {?} existingFn
     * @param {string} task
     * @return {undefined}
     */
    _addAttachmentData : function(size, existingFn, task) {
      var message = update(this, size);
      if (message) {
        var pos = message.attachments.indexOf(existingFn);
        if (pos != -1) {
          message.attachments = message.attachments.map(function(distance, motion) {
            return motion === pos ? task : distance;
          });
          this._threadInformer.updatedMessage(message.thread_id, message.message_id, "attach");
        }
      } else {
        if (!this._attachmentData[size]) {
          /** @type {Array} */
          this._attachmentData[size] = [];
        }
        this._attachmentData[size].push({
          attach_key : existingFn,
          data : task
        });
      }
    },
    /**
     * @param {?} browser
     * @param {?} eventName
     * @param {?} walkers
     * @return {?}
     */
    shouldSortOutOfOrderMessages : function(browser, eventName, walkers) {
      if (browser == Browser.CLIENT_CHANNEL_MESSAGE) {
        var subscribers = this.getThreadMessagesSinceTimestamp(eventName, walkers);
        if (subscribers.length > 0) {
          deepDataAndEvents.bumpEntityKey("chat.web", "channel.messages_reordered");
          return true;
        }
      }
      return false;
    },
    /**
     * @param {Object} response
     * @param {?} browser
     * @return {?}
     */
    _preprocessIncomingAction : function(response, browser) {
      var url = response.action_type;
      if (browser == Browser.CLIENT_CHANNEL_MESSAGE && (url == req.USER_GENERATED_MESSAGE && (response.threading_id && this._localIdsMap[response.threading_id] === response.threading_id))) {
        response.client_message_id = response.threading_id;
        response.status = xhr.SUCCESS;
        response.action_type = req.SEND_MESSAGE;
        url = response.action_type;
      }
      if (browser === Browser.CLIENT_CHANNEL_MESSAGE && url == req.USER_GENERATED_MESSAGE) {
        var opts = this._threads.getThreadMetaNow(response.thread_id);
        if (opts && opts.folder) {
          response.folder = opts.folder;
        }
      }
      return response;
    },
    /**
     * @param {Array} codeSegments
     * @param {(Document|string)} args
     * @param {Object} browser
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    handleUpdates : function(codeSegments, args, browser, dataAndEvents) {
      var callback;
      var object = {};
      var lines = {};
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var message = this._preprocessIncomingAction(codeSegments[i], browser);
        var HEAD = message.action_type;
        var self = update(this, message.message_id);
        if (message.is_forward || browser == Browser.SERVER_SEARCH) {
          if (!this._messages[message.message_id]) {
            this._messages[message.message_id] = message;
            validate(this, message);
          }
          continue;
        } else {
          if (message.client_state === msg.SEND_TO_SERVER) {
            this._messages[message.message_id] = message;
            validate(this, message);
            continue;
          } else {
            if (HEAD == req.SEND_MESSAGE) {
              var text = message.client_message_id;
              if (text && (this._localIdsMap[text] && message.status)) {
                var a = update(this, text);
                var al = a.status;
                if (a.status == xhr.SUCCESS) {
                  continue;
                }
                if (message.status == xhr.UNCONFIRMED) {
                  if (!lines[message.thread_id]) {
                    /** @type {Array} */
                    lines[message.thread_id] = [];
                  }
                  lines[message.thread_id].push(text);
                } else {
                  if (!object[message.thread_id]) {
                    /** @type {Array} */
                    object[message.thread_id] = [];
                  }
                }
                this._updateLocalMessage(message);
                if (typeof al !== void 0 || (message.status == xhr.FAILED_UNKNOWN_REASON || (message.status == xhr.UNABLE_TO_CONFIRM || (message.status == xhr.SUCCESS || message.status == xhr.ERROR)))) {
                  this._threadInformer.updatedMessage(message.thread_id, update(this, text).message_id, browser);
                }
              }
              continue;
            } else {
              if (HEAD == req.DELETE_THREAD) {
                _getRespondersForEvent(this, message.thread_id).removeAllResources();
                continue;
              } else {
                if (HEAD == req.DELETE_MESSAGES) {
                  this._deleteMessages(message.thread_id, message.message_ids, browser);
                  continue;
                } else {
                  if (HEAD == req.CLEAR_CHAT) {
                    var mod = _getRespondersForEvent(this, message.thread_id).getAllResources();
                    mod.map(update.bind(null, this)).forEach(function(dataAndEvents) {
                      /** @type {boolean} */
                      dataAndEvents.is_cleared = true;
                    });
                    continue;
                  } else {
                    if (HEAD === req.MARK_MESSAGES_SPAM) {
                      this._markMessagesSpam(message, browser);
                      continue;
                    } else {
                      if (message.threading_id && this._localIdsMap[message.threading_id] || self && !self.is_forward) {
                        if (self && (message.ranges && message.ranges.length > 0)) {
                          self.ranges = message.ranges;
                          this._threadInformer.updatedMessage(self.thread_id, self.message_id, "link_shim");
                        }
                        continue;
                      } else {
                        if (HEAD === req.CONFIRM_ATTACHMENT_PLACEHOLDER) {
                          this._confirmAttachmentPlaceholder(message.upload_id, message.upload_data);
                          continue;
                        } else {
                          if (HEAD === req.CANCEL_ATTACHMENT_PLACEHOLDER) {
                            this._cancelAttachmentPlaceholder(message.upload_id, message.upload_data);
                            continue;
                          } else {
                            if (HEAD === req.ADD_SHARE_DATA_TO_EXISTING_MESSAGE) {
                              this._addAttachmentData(message.server_id, message.attach_key, message.attach_data);
                              continue;
                            } else {
                              if (browser === Browser.CLIENT_SEND_MESSAGE) {
                                this._localIdsMap[message.message_id] = message.message_id;
                                if (message.thread_id == "root:" + message.message_id) {
                                  _getRespondersForEvent(this, message.thread_id).setReachedEndOfArray();
                                }
                              }
                              if (HEAD == req.LOG_MESSAGE && message.log_message_type == opt.SERVER_ERROR) {
                                /** @type {boolean} */
                                this._failedHistoryFetchThreads[message.thread_id] = true;
                              }
                              if (message.client_state === msg.DO_NOT_SEND_TO_SERVER && message.upload_id) {
                                this._uploadMessages[message.upload_id] = message;
                              }
                              if (!object[message.thread_id]) {
                                /** @type {Array} */
                                object[message.thread_id] = [];
                              }
                              object[message.thread_id].push(message.message_id);
                              this._messages[message.message_id] = message;
                              validate(this, message);
                              if (message.threading_id && message.threading_id != message.message_id) {
                                assert.addServerID(message.threading_id, message.message_id);
                              }
                              if (message[el.MANUAL_RETRY_CNT] > 0) {
                                callback = _getRespondersForEvent(this, message.thread_id);
                                callback.resortResources([message.message_id]);
                                this._threadInformer.reorderedMessages(message.thread_id, Browser.CLIENT_SEND_MESSAGE);
                              }
                              args = args || this.shouldSortOutOfOrderMessages(browser, message.thread_id, message.timestamp);
                              if (!args) {
                                this._threadInformer.receivedMessage(message);
                              }
                              continue;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      var key;
      for (key in object) {
        callback = _getRespondersForEvent(this, key);
        var contextElem = callback.getAllResources();
        var restoreScript = contextElem.filter(function(i) {
          var parsed = this._messages[i];
          return parsed.action_type == req.LOG_MESSAGE && parsed.log_message_type == opt.SERVER_ERROR;
        }.bind(this));
        callback.removeResources(restoreScript);
        if (dataAndEvents) {
          save(this, key, object[key]);
        }
        if (args) {
          callback.addResources(object[key]);
          this._threadInformer.reorderedMessages(key, browser);
        } else {
          callback.addResourcesWithoutSorting(object[key].reverse(), 0);
        }
        this._threadInformer.updatedThread(key);
      }
      /** @type {Array.<string>} */
      var lastLine = Object.keys(lines);
      if (lastLine.length) {
        this._serverRequests.requestMessageConfirmation(lines);
      }
      $.debug("handle_updates", {
        localMessageCounts : $sanitize(this._localTitanMessagesCount)
      });
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    isOutbound : function(deepDataAndEvents) {
      return deepDataAndEvents.author == b.getID();
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    isInbound : function(deepDataAndEvents) {
      return!this.isOutbound(deepDataAndEvents);
    },
    /**
     * @param {Object} jqXHR
     * @return {?}
     */
    isSending : function(jqXHR) {
      return jqXHR.status === xhr.UNSENT || (jqXHR.status === xhr.UNCONFIRMED || (jqXHR.status === xhr.UNABLE_TO_CONFIRM || jqXHR.status === xhr.RESENDING));
    },
    /**
     * @param {?} user
     * @return {?}
     */
    isFirstMessage : function(user) {
      var responders = _getRespondersForEvent(this, user.thread_id);
      if (responders.getCurrentArraySize() === 0) {
        return false;
      }
      var rvar = responders.getResourceAtIndex(responders.getCurrentArraySize() - 1);
      var i = update(this, rvar).message_id;
      var last = update(this, user.message_id).message_id;
      return responders.hasReachedEndOfArray() && i == last;
    },
    /**
     * @param {string} eventName
     * @param {Array} millis
     * @return {?}
     */
    _isWholeThread : function(eventName, millis) {
      var r = _getRespondersForEvent(this, eventName);
      return r.getCurrentArraySize() == millis.length && r.hasReachedEndOfArray();
    },
    /**
     * @param {?} message
     * @param {Object} browser
     * @return {undefined}
     */
    _markMessagesSpam : function(message, browser) {
      var _message = message;
      var r20 = _message.thread_id;
      var destElements = _message.message_ids;
      if (!destElements.length) {
        return;
      }
      if (this._isWholeThread(r20, destElements)) {
        Application(function() {
          return this._threadActions.markSpam(r20);
        }.bind(this));
      } else {
        this._deleteIndividualMessages(message.thread_id, message.message_ids, browser);
        this._serverRequests.markMessagesSpam(r20, destElements);
      }
    },
    /**
     * @param {string} key
     * @param {Array} millis
     * @param {Object} browser
     * @return {undefined}
     */
    _deleteMessages : function(key, millis, browser) {
      if (!millis.length) {
        return;
      }
      if (browser === Browser.CLIENT_CHANNEL_MESSAGE) {
        this._deleteIndividualMessages(key, millis, browser);
      }
      if (this._isWholeThread(key, millis)) {
        Application(function() {
          return this._threadActions["delete"](key);
        }.bind(this));
      } else {
        this._serverRequests.deleteMessages(key, millis);
        this._deleteIndividualMessages(key, millis, browser);
      }
    },
    /**
     * @param {string} eventName
     * @param {Array} millis
     * @param {Object} browser
     * @return {undefined}
     */
    _deleteIndividualMessages : function(eventName, millis, browser) {
      var restoreScript = millis.map(function(obj) {
        return update(this, obj).message_id;
      }, this);
      var r = _getRespondersForEvent(this, eventName);
      r.removeResources(restoreScript);
      this._threadInformer.reorderedMessages(eventName, browser);
    },
    /**
     * @param {Object} data
     * @return {?}
     */
    _updateLocalMessage : function(data) {
      var a = update(this, data.client_message_id);
      a.status = data.status;
      if (data.status === xhr.SUCCESS || data.error_data) {
        a.error_data = data.error_data;
      }
      var c = data.message_id;
      var i = data.client_message_id;
      if (this._messages[c]) {
        return false;
      }
      this._localIdsMap[i] = c;
      this._messages[c] = this._messages[i];
      assert.addServerID(i, c);
      this._messages[i] = {};
      var message = update(this, i);
      if (data.timestamp) {
        message.timestamp = data.timestamp;
      }
      if (data.attachments && data.attachments.length) {
        /** @type {null} */
        message.raw_attachments = null;
        message.attachments = data.attachments;
        validate(this, message, c);
      }
      if (data.log_message_data) {
        message.log_message_data = data.log_message_data;
      }
      if (ok(message)) {
        this._localTitanMessagesCount[message.thread_id]--;
      }
      return true;
    },
    /**
     * @param {?} timeoutKey
     * @return {?}
     */
    getNumberLocalMessages : function(timeoutKey) {
      return this._localTitanMessagesCount[timeoutKey] || 0;
    },
    _uploadMessages : {},
    /**
     * @param {?} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    _confirmAttachmentPlaceholder : function(deepDataAndEvents, dataAndEvents) {
      var suiteView = this._popPendingAttachmentMessage(deepDataAndEvents, dataAndEvents);
      this._serverRequests.sendNewMessage(suiteView);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    _cancelAttachmentPlaceholder : function(deepDataAndEvents, dataAndEvents) {
      var message = this._popPendingAttachmentMessage(deepDataAndEvents, dataAndEvents);
      this._deleteIndividualMessages(message.thread_id, [message.message_id]);
      if (this._localTitanMessagesCount[message.thread_id]) {
        this._localTitanMessagesCount[message.thread_id]--;
      }
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {?}
     */
    _popPendingAttachmentMessage : function(deepDataAndEvents, dataAndEvents) {
      var failuresLink = this._uploadMessages[deepDataAndEvents];
      on(failuresLink);
      failuresLink.image_ids = dataAndEvents.image_ids;
      failuresLink.file_ids = dataAndEvents.file_ids;
      failuresLink.audio_ids = dataAndEvents.audio_ids;
      failuresLink.gif_ids = dataAndEvents.gif_ids;
      failuresLink.client_state = msg.SEND_TO_SERVER;
      delete this._uploadMessages[deepDataAndEvents];
      return failuresLink;
    }
  });
  Object.assign(create, map);
  var isObject = require(function(value) {
    var scrubbed = {};
    var i;
    for (i in value._messagesNeedingAttachmentData) {
      var str = update(value, i);
      if (arrayContains(value, str)) {
        /** @type {boolean} */
        scrubbed[i] = true;
      }
    }
    /** @type {Array.<string>} */
    var codeSegments = Object.keys(scrubbed);
    if (codeSegments.length) {
      var newValue = {
        message_ids : codeSegments
      };
      if (value._fbid != a.getID()) {
        newValue.request_user_id = value._fbid;
      }
      (new dataAndEvents("/ajax/mercury/attachments/fetch_shares.php")).setData(newValue).setAllowCrossPageTransition(true).send();
    }
    value._messagesNeedingAttachmentData = {};
  }, 0, this);
  /** @type {function (?): undefined} */
  module.exports = create;
}, null);
__d("MercuryChannelHandler", ["Arbiter", "ChannelConstants", "MercuryActionType", "MercuryGlobalActionType", "MercuryMessages", "MercuryPayloadSource", "MercuryServerRequests", "MercurySingletonMixin", "MercuryThreadInformer", "MercuryViewer", "MessagingEvent", "MessagingReliabilityLogger", "MessagingTag", "PresenceUtil", "copyProperties", "mixin"], function(dataAndEvents, matcherFunction, execResult, opt_keys, module, positionError, c, assert, a, ignoreMethodDoesntExist, deepDataAndEvents, xmlhttp,
textAlt, value, keepData, fn, event, $scope, folder, opt_attributes, callback, func) {
  /**
   * @param {?} config
   * @return {undefined}
   */
  function constructor(config) {
    this.$MercuryChannelHandler0 = config;
    this.$MercuryChannelHandler1 = textAlt.getForFBID(this.$MercuryChannelHandler0);
    this.$MercuryChannelHandler2 = keepData.getForFBID(this.$MercuryChannelHandler0);
    this.$MercuryChannelHandler3 = deepDataAndEvents.getForFBID(this.$MercuryChannelHandler0);
    /** @type {Array} */
    this.$MercuryChannelHandler4 = [];
  }
  var newValue = func(value);
  var key;
  for (key in newValue) {
    if (newValue.hasOwnProperty(key)) {
      constructor[key] = newValue[key];
    }
  }
  var basePrototype = newValue === null ? null : newValue.prototype;
  /** @type {Object} */
  constructor.prototype = Object.create(basePrototype);
  /** @type {function (?): undefined} */
  constructor.prototype.constructor = constructor;
  constructor.__superConstructor__ = newValue;
  /**
   * @return {?}
   */
  constructor.prototype.getInstanceFBID = function() {
    return this.$MercuryChannelHandler0;
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandler5 = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || (!data.obj || !data.obj.message)) {
      $scope.addEntry("channel_receive", "invalid_data");
      return;
    }
    var options = data.obj.message;
    var i = options.other_user_fbid ? options.other_user_fbid : options.thread_fbid;
    var params = {
      author : options.mercury_author_id,
      author_email : options.mercury_author_email,
      body : options.body,
      subject : options.subject,
      has_attachment : options.has_attachment,
      attachments : options.attachments,
      html_body : options.html_body,
      thread_id : options.tid,
      thread_fbid : options.thread_fbid,
      other_user_fbid : options.other_user_fbid,
      message_id : options.mid,
      coordinates : options.mercury_coordinates,
      is_spoof_warning : options.is_spoof_warning,
      ranges : options.ranges,
      source : options.mercury_source,
      source_tags : options.mercury_source_tags,
      threading_id : options.threading_id,
      timestamp : options.timestamp,
      timestamp_absolute : options.timestamp_absolute,
      timestamp_relative : options.timestamp_relative,
      timestamp_time_passed : options.timestamp_time_passed,
      action_type : a.USER_GENERATED_MESSAGE,
      is_unread : options.is_unread,
      is_forward : false,
      forward_count : options.forward_count || options.forward,
      forward_message_ids : options.forward_msg_ids,
      location_text : options.location_text,
      folder : data.obj.folder
    };
    if ("sync_id" in options) {
      params.sync_id = options.sync_id;
    } else {
      params.action_id = options.action_id;
    }
    /** @type {Array} */
    var actions = [callback({}, params)];
    /** @type {Array} */
    actions = actions.concat(options.forward_actions || []);
    var msg = xmlhttp.CLIENT_CHANNEL_MESSAGE;
    this.$MercuryChannelHandler1.handleUpdateWaitForThread({
      actions : actions,
      payload_source : msg
    }, i);
    if (!options.is_unread && fn.isViewer(options.mercury_author_id)) {
      var prevSources = {};
      prevSources[i] = data.obj.folder;
      this.$MercuryChannelHandler7(this.__getMessagingPayloadType(), {
        obj : {
          event : event.READ,
          thread_fbids : options.thread_fbid ? [options.thread_fbid] : [],
          other_user_fbids : options.other_user_fbid ? [options.other_user_fbid] : [],
          folder_info : prevSources,
          timestamp : options.timestamp
        }
      });
    }
    $scope.addEntry("channel_receive", "success", [i, params.message_id, opt_attributes.getSessionID()]);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandler7 = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || (!data.obj || !data.obj.thread_fbids && !data.obj.other_user_fbids)) {
      return;
    }
    /** @type {Array} */
    var action_list = [];
    /** @type {boolean} */
    var mark_as_read = data.obj.event == event.READ;
    (data.obj.thread_fbids || []).forEach(function(timeoutKey) {
      action_list.push({
        action_type : a.CHANGE_READ_STATUS,
        action_id : null,
        thread_fbid : timeoutKey,
        mark_as_read : mark_as_read,
        timestamp : data.obj.timestamp || 0,
        folder : data.obj.folder_info[timeoutKey]
      });
    });
    (data.obj.other_user_fbids || []).forEach(function(timeoutKey) {
      action_list.push({
        action_type : a.CHANGE_READ_STATUS,
        action_id : null,
        other_user_fbid : timeoutKey,
        mark_as_read : mark_as_read,
        timestamp : data.obj.timestamp || 0,
        folder : data.obj.folder_info[timeoutKey]
      });
    });
    this.$MercuryChannelHandler1.handleUpdate({
      actions : action_list,
      payload_source : xmlhttp.CLIENT_CHANNEL_MESSAGE
    });
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandler8 = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || (!data.obj || !(data.obj.thread_fbids || data.obj.other_user_fbids))) {
      return;
    }
    /** @type {Array} */
    var action_list = [];
    (data.obj.thread_fbids || []).forEach(function(dataAndEvents) {
      action_list.push({
        action_type : a.DELETE_THREAD,
        action_id : null,
        thread_fbid : dataAndEvents
      });
    });
    (data.obj.other_user_fbids || []).forEach(function(dataAndEvents) {
      action_list.push({
        action_type : a.DELETE_THREAD,
        action_id : null,
        other_user_fbid : dataAndEvents
      });
    });
    this.$MercuryChannelHandler1.handleUpdate({
      actions : action_list,
      payload_source : xmlhttp.CLIENT_CHANNEL_MESSAGE
    });
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandler9 = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || (!data.obj || (!data.obj.thread_fbids && !data.obj.other_user_fbids || !data.obj.mids))) {
      return;
    }
    var thread_fbid = data.obj.thread_fbids.length ? data.obj.thread_fbids[0] : null;
    var other_user_fbid = data.obj.other_user_fbids.length ? data.obj.other_user_fbids[0] : null;
    var actionServer = {
      action_type : a.DELETE_MESSAGES,
      action_id : null,
      thread_fbid : thread_fbid,
      other_user_fbid : other_user_fbid,
      message_ids : data.obj.mids
    };
    this.$MercuryChannelHandler1.handleUpdate({
      actions : [actionServer],
      threads : [data.obj.updated_thread],
      payload_source : xmlhttp.CLIENT_CHANNEL_MESSAGE
    });
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandlera = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || (!data.obj || !data.obj.folder)) {
      return;
    }
    var folder = {
      action_type : ignoreMethodDoesntExist.MARK_ALL_READ,
      action_id : data.obj.action_id,
      folder : data.obj.folder
    };
    this.$MercuryChannelHandler1.handleUpdate({
      global_actions : [folder]
    });
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandlerb = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || !data.obj.thread_fbids && !data.obj.other_user_fbids) {
      return;
    }
    var msg = xmlhttp.CLIENT_CHANNEL_MESSAGE;
    (data.obj.thread_fbids || []).forEach(function(transform) {
      var feed = {
        action_type : a.CHANGE_ARCHIVED_STATUS,
        action_id : null,
        thread_fbid : transform,
        other_user_fbid : null,
        archived : data.obj.state
      };
      this.$MercuryChannelHandler1.handleUpdateWaitForThread({
        actions : [callback({}, feed)],
        payload_source : msg
      }, transform);
    }, this);
    (data.obj.other_user_fbids || []).forEach(function(transform) {
      var feed = {
        action_type : a.CHANGE_ARCHIVED_STATUS,
        action_id : null,
        thread_fbid : null,
        other_user_fbid : transform,
        archived : data.obj.state
      };
      this.$MercuryChannelHandler1.handleUpdateWaitForThread({
        actions : [callback({}, feed)],
        payload_source : msg
      }, transform);
    }, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandlerc = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || !data.obj.thread_fbids && !data.obj.other_user_fbids) {
      return;
    }
    var msg = xmlhttp.CLIENT_CHANNEL_MESSAGE;
    var tag;
    (data.obj.thread_fbids || []).forEach(function(transform) {
      if (data.obj.event == event.TAG) {
        tag = data.obj.tag;
      } else {
        tag = data.obj.marked_as_spam ? folder.SPAM : folder.INBOX;
      }
      var feed = {
        action_type : a.CHANGE_FOLDER,
        action_id : null,
        thread_fbid : transform,
        other_user_fbid : null,
        new_folder : tag
      };
      this.$MercuryChannelHandler1.handleUpdateWaitForThread({
        actions : [callback({}, feed)],
        payload_source : msg
      }, transform);
    }, this);
    (data.obj.other_user_fbids || []).forEach(function(transform) {
      if (data.obj.event == event.TAG) {
        tag = data.obj.tag;
      } else {
        tag = data.obj.marked_as_spam ? folder.SPAM : folder.INBOX;
      }
      var feed = {
        action_type : a.CHANGE_FOLDER,
        action_id : null,
        other_user_fbid : transform,
        thread_fbid : null,
        new_folder : tag
      };
      this.$MercuryChannelHandler1.handleUpdateWaitForThread({
        actions : [callback({}, feed)],
        payload_source : msg
      }, transform);
    }, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandlerd = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || !data.obj.tag) {
      return;
    }
    switch(data.obj.tag) {
      case folder.ACTION_ARCHIVED:
        this.$MercuryChannelHandlerb(deepDataAndEvents, data);
        break;
      case folder.INBOX:
      ;
      case folder.OTHER:
        this.$MercuryChannelHandlerc(deepDataAndEvents, data);
        break;
    }
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} a
   * @return {undefined}
   */
  constructor.prototype.__markAsSeen = function(deepDataAndEvents, a) {
    if (!this.$MercuryChannelHandlere(deepDataAndEvents) || (!a.obj || !a.obj.seen_timestamp)) {
      return;
    }
    this.$MercuryChannelHandler1.handleUpdate({
      message_counts : [{
        seen_timestamp : a.obj.seen_timestamp,
        folder : folder.INBOX
      }],
      unseen_thread_fbids : [{
        thread_fbids : [],
        other_user_fbids : [],
        folder : folder.INBOX
      }],
      payload_source : xmlhttp.CLIENT_CHANNEL_MESSAGE
    });
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} scope
   * @return {undefined}
   */
  constructor.prototype.__updateModelsFromMercuryPayload = function(deepDataAndEvents, scope) {
    if (!this.$MercuryChannelHandlerf(deepDataAndEvents) || !scope.obj) {
      return;
    }
    this.$MercuryChannelHandler2.synchronizeInforms(function() {
      var attributes = scope.obj;
      /** @type {Array} */
      var data = [];
      (attributes.actions || []).forEach(function(chunk) {
        var al = a.USER_GENERATED_MESSAGE;
        if (chunk.action_type == a.LOG_MESSAGE) {
          var msg = xmlhttp.CLIENT_CHANNEL_MESSAGE;
          var updated;
          updated = chunk.other_user_fbid || chunk.thread_fbid;
          this.$MercuryChannelHandler1.handleUpdateWaitForThread({
            actions : [callback({}, chunk)],
            payload_source : msg
          }, updated);
        } else {
          if (chunk.action_type != al) {
            data.push(chunk);
          }
        }
      }, this);
      /** @type {Array} */
      attributes.actions = data;
      attributes.payload_source = xmlhttp.CLIENT_CHANNEL_MESSAGE;
      this.$MercuryChannelHandler1.handleUpdate(attributes);
    }.bind(this));
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandlerg = function(deepDataAndEvents, data) {
    this.$MercuryChannelHandler1.handleRoger(data.obj);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryChannelHandlerh = function(deepDataAndEvents, data) {
    if (!this.$MercuryChannelHandler6(deepDataAndEvents) || (!data.obj || (data.obj.mute_settings === void 0 || !data.obj.thread_fbid && !data.obj.other_user_fbid))) {
      return;
    }
    var al = a.CHANGE_MUTE_SETTINGS;
    /** @type {Array} */
    var actions = [{
      action_type : al,
      action_id : null,
      thread_fbid : data.obj.thread_fbid,
      other_user_fbid : data.obj.other_user_fbid,
      mute_settings : data.obj.mute_settings
    }];
    this.$MercuryChannelHandler1.handleUpdate({
      actions : actions,
      payload_source : xmlhttp.CLIENT_CHANNEL_MESSAGE
    });
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} msgs
   * @return {undefined}
   */
  constructor.prototype.__handleMessagingPayload = function(deepDataAndEvents, msgs) {
    switch(msgs.obj.event) {
      case event.DELIVER:
        this.$MercuryChannelHandler5(deepDataAndEvents, msgs);
        break;
      case event.READ:
      ;
      case event.UNREAD:
        this.$MercuryChannelHandler7(deepDataAndEvents, msgs);
        break;
      case event.READ_ALL:
        this.$MercuryChannelHandlera(deepDataAndEvents, msgs);
        break;
      case event.DELETE:
        this.$MercuryChannelHandler8(deepDataAndEvents, msgs);
        break;
      case event.DELETE_MESSAGES:
        this.$MercuryChannelHandler9(deepDataAndEvents, msgs);
        break;
      case event.TAG:
        this.$MercuryChannelHandlerd(deepDataAndEvents, msgs);
        break;
      case event.REPORT_SPAM:
        this.$MercuryChannelHandlerc(deepDataAndEvents, msgs);
        break;
      case event.READ_RECEIPT:
        this.$MercuryChannelHandlerg(deepDataAndEvents, msgs);
        break;
      case event.CHANGE_MUTE_SETTINGS:
        this.$MercuryChannelHandlerh(deepDataAndEvents, msgs);
        break;
    }
  };
  /**
   * @return {?}
   */
  constructor.prototype.getRouting = function() {
    return{
      mercury : this.__updateModelsFromMercuryPayload,
      messaging : this.__handleMessagingPayload,
      inbox : this.__markAsSeen
    };
  };
  /**
   * @return {?}
   */
  constructor.prototype.__getMessagingPayloadType = function() {
    return assert.getArbiterType("messaging");
  };
  /**
   * @return {?}
   */
  constructor.prototype.__getMercuryPayloadType = function() {
    return assert.getArbiterType("mercury");
  };
  /**
   * @return {?}
   */
  constructor.prototype.__getInboxPayloadType = function() {
    return assert.getArbiterType("inbox");
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  constructor.prototype.$MercuryChannelHandler6 = function(deepDataAndEvents) {
    return deepDataAndEvents == this.__getMessagingPayloadType();
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  constructor.prototype.$MercuryChannelHandlerf = function(deepDataAndEvents) {
    return deepDataAndEvents == this.__getMercuryPayloadType();
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  constructor.prototype.$MercuryChannelHandlere = function(deepDataAndEvents) {
    return deepDataAndEvents == this.__getInboxPayloadType();
  };
  /**
   * @return {?}
   */
  constructor.prototype.turnOn = function() {
    if (!this.$MercuryChannelHandler4.length) {
      var set = this.getRouting();
      var i;
      for (i in set) {
        this.$MercuryChannelHandler4.push(c.subscribe(assert.getArbiterType(i), set[i].bind(this)));
      }
    }
    return this;
  };
  /**
   * @return {?}
   */
  constructor.prototype.turnOff = function() {
    if (this.$MercuryChannelHandler4.length) {
      this.$MercuryChannelHandler4.forEach(c.unsubscribe);
      /** @type {Array} */
      this.$MercuryChannelHandler4 = [];
    }
    return this;
  };
  callback(constructor, value);
  /** @type {function (?): undefined} */
  module.exports = constructor;
}, null);
__d("MercuryRoger", ["Arbiter", "ArbiterMixin", "immutable", "JSLogger", "MercuryActionStatus", "copyProperties", "mapObject", "MercuryServerRequests", "MercuryThreads"], function(deepDataAndEvents, nock, ignoreMethodDoesntExist, textAlt, module, keepData, tracker, thisObj, dataAndEvents, req, state, makeIterator, callback) {
  /**
   * @param {?} o
   * @return {?}
   */
  function compile(o) {
    return callback(o, function(ko) {
      return ko.toJS();
    });
  }
  var _this = nock("MercuryServerRequests").get();
  var manipulation_rcheckableType = nock("MercuryThreads").get();
  var handlers = {};
  /** @type {Array} */
  var _results2 = [];
  var id = state.SUCCESS;
  var assert = {
    /**
     * @param {Object} message
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    getSeenBy : function(message, deepDataAndEvents) {
      if (!message) {
        return[];
      }
      /** @type {Array} */
      var assigns = [];
      var handler = handlers[message.thread_id];
      if (!handler) {
        return assigns;
      }
      handler.forEach(function(dataAndEvents, vvar) {
        if (dataAndEvents > message.timestamp && ((message.status === void 0 || message.status === id) && (!deepDataAndEvents || vvar != message.author))) {
          assigns.push(vvar);
        }
      });
      return assigns;
    },
    /**
     * @param {?} type
     * @return {?}
     */
    getSeenTimestamps : function(type) {
      var handler = handlers[type];
      if (!handler) {
        handler = dataAndEvents.OrderedMap();
        handlers[type] = handler;
      }
      return handler;
    },
    /**
     * @param {?} j
     * @param {string} item
     * @return {?}
     */
    getSeenTimestamp : function(j, item) {
      var arr = handlers[j];
      return arr ? arr.get(item) : null;
    }
  };
  makeIterator(assert, thisObj);
  _this.subscribe("update-roger", function(deepDataAndEvents, src) {
    var type;
    for (type in src) {
      var bProperties = handlers[type] || dataAndEvents.OrderedMap();
      bProperties = bProperties.withMutations(function(data_user) {
        var key;
        for (key in src[type]) {
          var data = manipulation_rcheckableType.getThreadMetaNow(type);
          if (data && data.participants) {
            if (data.participants.indexOf(key) == -1) {
              _results2.push(compile(handlers));
              continue;
            }
          }
          var camelKey = data_user.get(key);
          var udataCur = src[type][key];
          if (!camelKey || udataCur > camelKey) {
            data_user.set(key, udataCur);
          }
        }
      });
      handlers[type] = bProperties.sort();
    }
    if (src) {
      assert.inform("change", src);
    }
  });
  tracker.subscribe(req.DUMP_EVENT, function(deepDataAndEvents, dataAndEvents) {
    dataAndEvents.bad_read_receipts = {
      receipts : _results2
    };
  });
  module.exports = assert;
}, null);
__d("MercuryDelayedRoger", ["ArbiterMixin", "LiveTimer", "MercuryActionStatus", "MercuryConfig", "MercuryRoger", "copyProperties", "setTimeoutAcrossTransitions", "MercuryMessages", "MercuryThreadInformer", "MercuryThreads"], function(deepDataAndEvents, nock, ignoreMethodDoesntExist, textAlt, module, keepData, key, dataAndEvents, contestant, files, value, callback, $) {
  /**
   * @param {string} name
   * @return {?}
   */
  function start(name) {
    /** @type {boolean} */
    var started = false;
    rparentsprev.getThreadMessagesRange(name, 0, 1, function(nodes) {
      var node = nodes[0];
      if (!node) {
        return;
      }
      var t = node.timestamp;
      if (node.action_id || node.status == contestant.SUCCESS) {
        t -= dataAndEvents.getServerTimeOffset();
      }
      var attributes = prop.getSeenBy(name);
      if (cache[name]) {
        clearTimeout(cache[name]);
        delete cache[name];
      }
      var b = t + content;
      /** @type {number} */
      var doc = b - Date.now();
      if (doc > 0) {
        cache[name] = $(function() {
          delete cache[name];
          ondata(name);
        }, doc);
      }
      elems[name] = node;
      var defaultSettings = prop.getSeenBy(name);
      if (attributes.length || defaultSettings.length) {
        /** @type {boolean} */
        started = true;
      }
    });
    return started;
  }
  /**
   * @param {string} name
   * @return {undefined}
   */
  function ondata(name) {
    var normalized = {};
    /** @type {boolean} */
    normalized[name] = true;
    prop.inform("state-changed", normalized);
  }
  /**
   * @param {?} object
   * @param {?} context
   * @return {undefined}
   */
  function spy(object, context) {
    var entities = {};
    var match;
    for (match in context) {
      if (start(match)) {
        /** @type {boolean} */
        entities[match] = true;
      }
    }
    var p;
    for (p in entities) {
      prop.inform("state-changed", entities);
      break;
    }
  }
  var rparentsprev = nock("MercuryMessages").get();
  var root = nock("MercuryThreadInformer").get();
  var selfObj = nock("MercuryThreads").get();
  var elems = {};
  var cache = {};
  var content = files["roger.seen_delay"];
  var prop = callback({
    /**
     * @param {string} key
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    getSeenBy : function(key, deepDataAndEvents) {
      if (cache[key]) {
        return[];
      }
      if (!elems[key]) {
        var self = selfObj.getThreadMetaNow(key);
        if (self) {
          elems[key] = {
            thread_id : key,
            author : self.participants[0],
            timestamp : self.timestamp
          };
        }
      }
      return value.getSeenBy(elems[key], deepDataAndEvents);
    }
  }, key);
  value.subscribe("change", function(dataAndEvents, prop) {
    var name;
    for (name in prop) {
      if (!cache[name]) {
        ondata(name);
      }
    }
  });
  root.subscribe("messages-received", spy);
  root.subscribe("messages-reordered", spy);
  root.subscribe("messages-updated", spy);
  module.exports = prop;
}, null);
