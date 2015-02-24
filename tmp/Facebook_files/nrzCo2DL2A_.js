if (self.CavalryLogger) {
  CavalryLogger.start_js(["IKJ5j"]);
}
__d("BlackbirdUpsellConstants", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    ACTION_EDUCATE : "educate",
    ACTION_UPSELL : "upsell",
    CLICK_TYPE_DISMISS_PROMO : "dismiss_promo",
    CLICK_TYPE_ENABLE_CHAT : "enable_chat",
    CLICK_TYPE_OPEN_SETTINGS : "open_settings"
  };
}, null);
__d("MessagesViewerSetID", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    MESSAGES : "messages",
    MESSAGES_VIEW_ALL_IN_THREAD : "messages:view_all_in_thread"
  };
}, null);
__d("MessageTranscriptWaitHandleState", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    BUSY : "BUSY",
    READY : "READY",
    UNAVAILABLE : "UNAVAILABLE"
  };
}, null);
__d("StickerAssetType", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    IMAGE : "BestEffortImage",
    SPRITE : "SpriteImage",
    PADDED_SPRITE : "PaddedSpriteImage"
  };
}, null);
__d("StoryAttachmentStyle", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    FALLBACK : "fallback",
    SHARE : "share",
    OG_COMPOSER_SIMPLE : "og_composer_simple",
    SPORTS_MATCHUP : "sports_matchup",
    SHARE_LARGE_IMAGE : "share_large_image",
    PHOTO : "photo",
    COVER_PHOTO : "cover_photo",
    ALBUM : "album",
    NEW_ALBUM : "new_album",
    COUPON : "coupon",
    QUESTION : "question",
    ANSWER : "answer",
    OPTION : "option",
    GALLERY : "gallery",
    STREAM_PUBLISH : "stream_publish",
    MUSIC_AGGREGATION : "music_aggregation",
    ITEM_LIST : "list",
    HIGH_SCORE : "high_score",
    SCORE_LEADERBOARD : "score_leaderboard",
    FRIEND_LIST : "friend_list",
    CHECKIN : "checkin",
    POPULAR_OBJECTS : "popular_objects",
    AVATAR_LIST : "avatar_list",
    AVATAR : "avatar",
    AVATAR_WITH_VIDEO : "avatar_with_video",
    EVENT : "event",
    EXPERIENCE : "experience",
    LIFE_EVENT : "life_event",
    TRAVEL_SLIDESHOW_LIFE_EVENT : "travel_slideshow_life_event",
    GIFT : "gift",
    IMAGE_SHARE : "image_share",
    ANIMATED_IMAGE_SHARE : "animated_image_share",
    NOTE : "note",
    TOPIC : "topic",
    FILE_UPLOAD : "file_upload",
    NOTIFICATION_TARGET : "notification_target",
    UNAVAILABLE : "unavailable",
    PAGE_RECOMMENDATION : "page_recommendation",
    VIDEO : "video",
    VIDEO_INLINE : "video_inline",
    VIDEO_AUTOPLAY : "video_autoplay",
    VIDEO_SHARE : "video_share",
    VIDEO_SHARE_HIGHLIGHTED : "video_share_highlighted",
    VIDEO_SHARE_YOUTUBE : "video_share_youtube",
    MAP : "map",
    PRODUCT : "product",
    EXTERNAL_PRODUCT : "external_product",
    FITNESS_COURSE : "fitness_course",
    APPLICATION : "application",
    STICKER : "sticker",
    EXTERNAL_OG_PRODUCT : "external_og_product",
    TRAVEL_LOG : "travel_log",
    MULTI_SHARE : "multi_share",
    YEAR_IN_REVIEW : "year_in_review",
    AVATAR_LARGE_COVER : "avatar_large_cover",
    BROADCAST_REQUEST : "broadcast_request",
    COMMERCE_PRODUCT_ITEM : "commerce_product_item",
    THIRD_PARTY_PHOTO : "third_party_photo",
    PROMPT : "prompt",
    BIRTHDAY : "birthday",
    DONATIONS_CAMPAIGN : "donations_campaign",
    DONATE_PROMPT : "donate_prompt",
    DISCUSSION_CONVERSATION : "discussion_conversation",
    DISCUSSION_COMMENT : "discussion_comment",
    GROUP_SELL_PRODUCT_ITEM : "group_sell_product_item",
    GROUP_SELL_PRODUCT_ITEM_MARK_AS_SOLD : "group_sell_mark_as_sold",
    GAMETIME : "gametime",
    GROUP_REPORTED_POST_QUEUE : "group_reported_post_queue",
    GROUP_PENDING_POST_QUEUE : "group_pending_post_queue",
    GROUP_JOIN_REQUEST_QUEUE : "group_join_request_queue",
    GREETING_CARD : "greeting_card",
    LEAD_GEN : "lead_gen",
    ATTACHED_STORY : "attached_story",
    SOUVENIR : "souvenir",
    ORION : "orion"
  };
}, null);
__d("BlackbirdUpsell", ["Event", "Arbiter", "AsyncRequest", "LegacyContextualDialog", "DOM", "LayerDestroyOnHide", "LayerHideOnTransition", "PresencePrivacy", "copyProperties", "BlackbirdUpsellConfig", "BlackbirdUpsellConstants", "BlackbirdUpsellTemplates"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, context, matcherFunction, $window, left, Server, deepDataAndEvents, body, opt_obj2, walkers, m, a, result, node, dataAndEvents) {
  /**
   * @return {undefined}
   */
  function self() {
  }
  /**
   * @param {?} a
   * @param {?} n
   * @return {undefined}
   */
  function f(a, n) {
    if (!err && member) {
      /** @type {boolean} */
      err = true;
      m.inform("privacy-user-presence-changed");
      var promise = new Server(configFile);
      promise.setData({
        source : a,
        impressions : n,
        time_offline : result.TimeOffline
      });
      promise.setErrorHandler(function() {
        /** @type {boolean} */
        err = false;
      });
      promise.send();
    }
  }
  /**
   * @return {undefined}
   */
  function flush() {
    f(node.ACTION_UPSELL, result.UpsellImpressions);
  }
  /**
   * @return {undefined}
   */
  function setError() {
    f(node.ACTION_EDUCATE, result.EducationImpressions);
  }
  /**
   * @param {string} action
   * @param {?} stats
   * @return {undefined}
   */
  function cb(action, stats) {
    if (!member) {
      /** @type {boolean} */
      member = true;
      var server = new Server(opts);
      server.setData({
        action : action,
        impressions : stats,
        time_offline : result.TimeOffline
      });
      server.setErrorHandler(function() {
        /** @type {boolean} */
        member = false;
      });
      server.send();
    }
  }
  /**
   * @return {undefined}
   */
  function hidden() {
    cb(node.ACTION_UPSELL, result.UpsellImpressions);
  }
  /**
   * @return {undefined}
   */
  function checkDone() {
    cb(node.ACTION_EDUCATE, result.EducationImpressions);
  }
  /**
   * @param {string} a
   * @param {?} key
   * @param {?} range
   * @param {?} sendFn
   * @return {undefined}
   */
  function fn(a, key, range, sendFn) {
    var server = new Server(config);
    server.setData({
      action : a,
      impressions : range,
      source : key,
      time_offline : sendFn
    });
    server.send();
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function iterator(obj) {
    fn(obj, node.ACTION_UPSELL, result.UpsellImpressions, result.TimeOffline);
  }
  /**
   * @param {string} elem
   * @return {undefined}
   */
  function reduce(elem) {
    fn(elem, node.ACTION_EDUCATE, result.EducateImpressions, result.TimeOffline);
  }
  /** @type {string} */
  var config = "/ajax/chat/blackbird/update_clicks.php";
  /** @type {string} */
  var opts = "/ajax/chat/blackbird/update_impressions.php";
  /** @type {string} */
  var configFile = "/ajax/chat/blackbird/dismiss.php";
  /** @type {number} */
  var orgWidth = 235;
  /** @type {null} */
  var screen = null;
  /** @type {null} */
  var rvar = null;
  /** @type {boolean} */
  var err = false;
  /** @type {boolean} */
  var member = false;
  a(self, {
    /**
     * @return {?}
     */
    shouldShow : function() {
      if (this._dialogDismissed) {
        return false;
      }
      if (this.isEducation()) {
        return!result.EducationDismissed && result.EducationImpressions < result.EducationImpressionLimit;
      } else {
        return!!result.UpsellGK && (!result.UpsellDismissed && (result.UpsellImpressions < result.UpsellImpressionLimit && result.FriendCount >= result.UpsellMinFriendCount));
      }
    },
    /**
     * @return {?}
     */
    isEducation : function() {
      return result.TimeOffline <= result.EducationTimeOfflineThresdhold;
    },
    /**
     * @return {?}
     */
    getOfflineContent : function() {
      if (this.isEducation()) {
        return this._getEducationContent();
      } else {
        return this._getUpsellContent();
      }
    },
    /**
     * @return {?}
     */
    _getEducationContent : function() {
      checkDone();
      var store = dataAndEvents[":fb:chat:blackbird:offline-educate"].build();
      var element = store.getNode("chatSettingsButton");
      $window.listen(element, "click", function() {
        left.inform("chat/advanced-settings-dialog-opened");
        reduce(node.CLICK_TYPE_OPEN_SETTINGS);
        setError();
      });
      return store.getRoot();
    },
    /**
     * @return {?}
     */
    _getUpsellContent : function() {
      hidden();
      var store = dataAndEvents[":fb:chat:blackbird:upsell"].build();
      var element = store.getNode("chatSettingsButton");
      $window.listen(element, "click", function() {
        left.inform("chat/advanced-settings-dialog-opened");
        iterator(node.CLICK_TYPE_OPEN_SETTINGS);
        flush();
      });
      var done = store.getNode("enableChatButton");
      $window.listen(done, "click", function() {
        iterator(node.CLICK_TYPE_ENABLE_CHAT);
        flush();
      });
      return store.getRoot();
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    getBlackbirdContent : function(deepDataAndEvents) {
      checkDone();
      switch(deepDataAndEvents) {
        case m.ONLINE:
          return dataAndEvents[":fb:chat:blackbird:most-friends-educate"].build().getRoot();
        case m.OFFLINE:
          return dataAndEvents[":fb:chat:blackbird:some-friends-educate"].build().getRoot();
      }
    },
    /**
     * @param {?} completeEvent
     * @return {undefined}
     */
    showOfflineDialog : function(completeEvent) {
      this.showDialog(completeEvent, this.getOfflineContent.bind(this));
    },
    /**
     * @param {?} completeEvent
     * @param {?} fnOut
     * @return {undefined}
     */
    showBlackbirdDialog : function(completeEvent, fnOut) {
      this.showDialog(completeEvent, this.getBlackbirdContent.bind(null, fnOut));
    },
    /**
     * @param {?} e
     * @param {?} callback
     * @return {undefined}
     */
    showDialog : function(e, callback) {
      if (!screen) {
        this._constructDialog();
      }
      body.setContent(rvar, callback());
      screen.setContext(e);
      screen.show();
    },
    /**
     * @return {undefined}
     */
    hide : function() {
      if (screen && screen.isShown()) {
        screen.hide();
      }
    },
    /**
     * @return {undefined}
     */
    dismiss : function() {
      this.hide();
      if (this.isEducation()) {
        setError();
      } else {
        flush();
      }
    },
    /**
     * @return {undefined}
     */
    registerDismissClick : function() {
      if (this.isEducation()) {
        reduce(node.CLICK_TYPE_DISMISS_PROMO);
      } else {
        iterator(node.CLICK_TYPE_DISMISS_PROMO);
      }
    },
    /**
     * @return {?}
     */
    isVisible : function() {
      return member && !err;
    },
    /**
     * @return {undefined}
     */
    _constructDialog : function() {
      var store = dataAndEvents[":fb:chat:blackbird:dialog-frame"].build();
      rvar = store.getNode("dialogContent");
      screen = new deepDataAndEvents;
      screen.init(store.getRoot());
      screen.setPosition("above").setWidth(orgWidth).setFixed(true).disableBehavior(opt_obj2).disableBehavior(walkers);
      $window.listen(store.getNode("dialogCloseButton"), "click", this.dismiss.bind(this));
      $window.listen(store.getNode("dialogCloseButton"), "click", this.registerDismissClick.bind(this));
    }
  });
  left.subscribe("chat/advanced-settings-dialog-opened", self.dismiss.bind(self));
  left.subscribe("chat-visibility/go-online", self.dismiss.bind(self));
  left.subscribe("chat-visibility/go-offline", self.dismiss.bind(self));
  /** @type {function (): undefined} */
  context.exports = self;
}, null);
__d("Chat", ["Arbiter"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $) {
  /**
   * @param {string} name
   * @param {Function} cb
   * @return {undefined}
   */
  function fn(name, cb) {
    $.subscribe(events[name], function(dataAndEvents, outErr) {
      cb(outErr);
    });
  }
  var events = {
    buddyListNub : "buddylist-nub/initialized",
    sidebar : "sidebar/initialized"
  };
  var JsDiff = {
    /**
     * @return {undefined}
     */
    openBuddyList : function() {
      fn("buddyListNub", function(a) {
        a.show();
        fn("sidebar", function(field) {
          field.enable();
        });
      });
    },
    /**
     * @return {undefined}
     */
    closeBuddyList : function() {
      fn("buddyListNub", function(poster) {
        poster.hide();
      });
    },
    /**
     * @return {undefined}
     */
    toggleSidebar : function() {
      fn("sidebar", function(selectCtrl) {
        selectCtrl.toggle();
      });
    }
  };
  module.exports = JsDiff;
}, null);
__d("ChatOptions", ["Arbiter", "ChannelConstants", "JSLogger", "PresenceUtil", "copyProperties", "ChatOptionsInitialData"], function(deepDataAndEvents, $sanitize, ignoreMethodDoesntExist, textAlt, module, keepData, socket, lock, data, dataAndEvents, require) {
  var logger = data.create("chat_options");
  var old = {};
  (function() {
    var testSource = $sanitize("ChatOptionsInitialData");
    var name;
    for (name in testSource) {
      var ref = testSource[name];
      /** @type {boolean} */
      old[name] = !!ref;
    }
  })();
  var util = require(new socket, {
    /**
     * @param {string} name
     * @return {?}
     */
    getSetting : function(name) {
      return old[name];
    },
    /**
     * @param {string} name
     * @param {boolean} value
     * @param {string} id
     * @return {undefined}
     */
    setSetting : function(name, value, id) {
      if (this.getSetting(name) == value) {
        return;
      }
      if (id) {
        /** @type {string} */
        id = "from_" + id;
        logger.log(id, {
          name : name,
          new_value : value,
          old_value : this.getSetting(name)
        });
      }
      /** @type {boolean} */
      old[name] = !!value;
      socket.inform("chat/option-changed", {
        name : name,
        value : value
      });
    }
  });
  socket.subscribe(lock.getArbiterType("setting"), function(deepDataAndEvents, req) {
    var obj = req.obj;
    if (obj.window_id === dataAndEvents.getSessionID()) {
      return;
    }
    util.setSetting(obj.setting, !!obj.value, "channel");
  });
  socket.subscribe(data.DUMP_EVENT, function(dataAndEvents, req) {
    req.chat_options = old;
  });
  module.exports = util;
}, null);
__d("ChatQuietLinks", ["Event", "DOM", "UserAgent_DEPRECATED", "DataStore", "Parent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, r, b, UA, acc, Dom) {
  /**
   * @param {?} el
   * @param {?} fn
   * @return {undefined}
   */
  function init(el, fn) {
    /** @type {boolean} */
    var s = !!UA.chrome();
    /** @type {boolean} */
    var t = !!UA.chrome() || (UA.ie() >= 9 || UA.firefox() >= 4);
    if (cache[b.getID(el)]) {
      return;
    }
    /** @type {boolean} */
    cache[b.getID(el)] = true;
    if (!t) {
      return;
    }
    if (!s) {
      if (fn) {
        fn(el);
      }
      return;
    }
    r.listen(el, "mouseover", function click(e) {
      var node = Dom.byTag(e.getTarget(), "a");
      if (node) {
        var id = node.getAttribute("href");
        if (indexOf(id)) {
          acc.set(node, "stashedHref", node.getAttribute("href"));
          node.removeAttribute("href");
        }
      }
    });
    r.listen(el, "mouseout", function update(ev) {
      var node = Dom.byTag(ev.getTarget(), "a");
      var id = node && acc.remove(node, "stashedHref");
      if (indexOf(id)) {
        node.setAttribute("href", id);
      }
    });
    r.listen(el, "mousedown", function(resolver) {
      if (!resolver.isDefaultRequested()) {
        return true;
      }
      var node = Dom.byTag(resolver.getTarget(), "a");
      var id = node && acc.get(node, "stashedHref");
      if (indexOf(id)) {
        node.setAttribute("href", id);
      }
    });
  }
  /**
   * @param {?} name
   * @param {Function} callback
   * @return {undefined}
   */
  function initialize(name, callback) {
    var buttons = b.scry(name, "a");
    if (callback) {
      buttons = buttons.filter(function(demoLink) {
        return callback(demoLink.getAttribute("href"));
      });
    }
    buttons.forEach(function(elem) {
      elem.removeAttribute("href");
      elem.setAttribute("tabindex", 0);
    });
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function indexOf(value) {
    return value && value !== "#";
  }
  var cache = {};
  var JsDiff = {
    /**
     * @param {?} slide
     * @return {undefined}
     */
    silenceLinks : function(slide) {
      init(slide, this.removeEmptyHrefs.bind(this));
    },
    /**
     * @param {?} slide
     * @return {undefined}
     */
    nukeLinks : function(slide) {
      init(slide, this.removeAllHrefs.bind(this));
    },
    /**
     * @param {?} node
     * @return {undefined}
     */
    removeEmptyHrefs : function(node) {
      initialize(node, function(value) {
        return!value || value === "#";
      });
    },
    /**
     * @param {?} node
     * @return {undefined}
     */
    removeAllHrefs : function(node) {
      initialize(node);
    }
  };
  module.exports = JsDiff;
}, null);
__d("OrderedFriendsList", ["AvailableListConstants", "PresenceStatus", "SearchableEntry", "ShortProfiles", "WorkModeConfig", "createArrayFromMixed", "isValidUniqueID", "InitialChatFriendsList"], function(event, Event, dataAndEvents, ignoreMethodDoesntExist, module, textAlt, a, otherMap, UndoRedoMenuItem, assert, deepDataAndEvents, get, proceed) {
  /** @type {Array} */
  var groups = [];
  /** @type {Array} */
  var promise = [];
  var obj = {};
  /** @type {Array} */
  var passedValues = [];
  var node = {};
  /** @type {Array} */
  var asserterNames = [];
  var item = {
    /**
     * @param {Object} target
     * @return {?}
     */
    contains : function(target) {
      return target in obj;
    },
    /**
     * @return {?}
     */
    getList : function() {
      if (deepDataAndEvents.is_work_user) {
        return get(groups);
      }
      item.reRank();
      var list = get(groups);
      list = list.filter(function(_) {
        var buf = assert.getNowUnsafe(_);
        return!buf || buf.type == "friend";
      });
      return list;
    },
    /**
     * @param {number} num
     * @param {Function} $sanitize
     * @return {undefined}
     */
    getSearchableEntries : function(num, $sanitize) {
      var fxAttrs = item.getList();
      assert.getMulti(fxAttrs.slice(0, num), function(map) {
        /** @type {Array} */
        var beginswith = [];
        var letter;
        for (letter in map) {
          beginswith.push(item.normalizeProfileEntry(map[letter]));
        }
        var caseSensitive = item.getGroups().map(item.normalizeThreadEntry);
        $sanitize(beginswith.concat(caseSensitive).filter(function(dataAndEvents) {
          return!!dataAndEvents;
        }).sort(function(a, b) {
          return a.order - b.order;
        }));
      });
    },
    /**
     * @param {Object} args
     * @return {?}
     */
    normalizeProfileEntry : function(args) {
      var dig = args.searchTokens || [];
      return new UndoRedoMenuItem({
        uniqueID : args.id,
        keywordString : dig.join(" "),
        order : item.getActiveRank(args.id),
        photo : args.thumbSrc,
        title : args.name,
        type : args.type,
        uri : args.uri
      });
    },
    /**
     * @param {Object} item
     * @param {string} dataAndEvents
     * @return {?}
     */
    normalizeThreadEntry : function(item, dataAndEvents) {
      var args = item.mercury_thread;
      var children = item.participants_to_render;
      var title = item.text;
      /** @type {null} */
      var text = null;
      if (!title) {
        title = args.name;
      }
      var _ = children.map(function(unused) {
        return unused.name;
      }).join(", ");
      if (!title) {
        title = _;
      } else {
        text = _;
      }
      var element = item.uid;
      if (!title || !proceed(element)) {
        return null;
      }
      return new UndoRedoMenuItem({
        uniqueID : element,
        order : dataAndEvents,
        photo : args.image_src,
        title : title,
        subtitle : text,
        type : "thread",
        auxiliaryData : {
          participantsToRender : children,
          thread : args
        }
      });
    },
    /**
     * @param {Function} prop
     * @return {?}
     */
    getRank : function(prop) {
      return prop in obj ? obj[prop] : groups.length;
    },
    /**
     * @return {?}
     */
    getActiveList : function() {
      if (passedValues.length > 0) {
        return passedValues;
      }
      return item.getList();
    },
    /**
     * @param {Function} name
     * @return {?}
     */
    getActiveRank : function(name) {
      return name in node ? node[name] : item.getRank(name);
    },
    /**
     * @return {undefined}
     */
    reRank : function() {
      /** @type {Array} */
      groups = [];
      /** @type {number} */
      var i = 0;
      asserterNames.forEach(function(models) {
        var key = models.slice(0, -2);
        var object = models.slice(-1);
        if (otherMap.get(key) == object) {
          groups[i] = key;
          /** @type {number} */
          obj[key] = i++;
        }
      });
    },
    /**
     * @return {undefined}
     */
    rankActive : function() {
      /** @type {number} */
      var i = 0;
      asserterNames.forEach(function(models) {
        var o = models.slice(0, -2);
        var text = models.slice(-1);
        if (text == a.ACTIVE) {
          passedValues[i] = o;
          /** @type {number} */
          node[o] = i++;
        }
      });
    },
    /**
     * @return {?}
     */
    getGroups : function() {
      return promise;
    }
  };
  (function() {
    var self = Event("InitialChatFriendsList");
    groups = self.list.length ? self.list : [];
    promise = self.groups || [];
    if (!deepDataAndEvents.is_work_user) {
      asserterNames = groups.slice();
      item.rankActive();
      item.reRank();
    } else {
      groups.forEach(function(key, res) {
        obj[key] = res;
      });
    }
  })();
  module.exports = event.OrderedFriendsList || item;
}, null);
__d("ChatSortUsers", ["AvailableListConstants", "OrderedFriendsList", "PresencePrivacy", "PresenceStatus", "ShortProfiles", "TokenizeUtil"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, event, handler, jQuery, $injector, gridStore, contextElem) {
  /**
   * @param {Function} context
   * @param {?} fragment
   * @return {?}
   */
  function getAll(context, fragment) {
    var key = jQuery.allows(context);
    var args = jQuery.allows(fragment);
    if (key !== args) {
      return key ? -1 : 1;
    }
    return 0;
  }
  /**
   * @param {Function} data
   * @return {?}
   */
  function fn(data) {
    if (cache[data]) {
      return cache[data];
    }
    var name = (gridStore.getNowUnsafe(data) || {}).name;
    if (name) {
      return cache[data] = contextElem.flatten(name);
    }
    return "~";
  }
  var cache = {};
  var me = {
    /**
     * @param {Function} value
     * @param {?} context
     * @return {?}
     */
    sortAlphabetical : function(value, context) {
      var actual = fn(value);
      var expected = fn(context);
      if (actual !== expected) {
        return actual < expected ? -1 : 1;
      }
      return 0;
    },
    /**
     * @param {Object} key
     * @param {string} c
     * @return {?}
     */
    sortMobile : function(key, c) {
      /** @type {boolean} */
      var val = $injector.get(key) === event.MOBILE;
      /** @type {boolean} */
      var skip = $injector.get(c) === event.MOBILE;
      if (val !== skip) {
        return skip ? -1 : 1;
      }
      return me.sortAlphabetical(key, c);
    },
    /**
     * @param {Function} name
     * @param {?} fragment
     * @return {?}
     */
    sortCoefficient : function(name, fragment) {
      var end = handler.getRank(name);
      var start = handler.getRank(fragment);
      if (end !== start) {
        return end - start;
      }
      return me.sortAlphabetical(name, fragment);
    },
    /**
     * @param {Function} node
     * @param {?} fragmentOverride
     * @return {?}
     */
    sort : function(node, fragmentOverride) {
      var allDataForNode = getAll(node, fragmentOverride);
      if (allDataForNode !== 0) {
        return allDataForNode;
      }
      return me.sortCoefficient(node, fragmentOverride);
    }
  };
  module.exports = me;
}, null);
__d("TypingDetector", ["ArbiterMixin", "Event", "Input", "Run", "TypingStates", "copyProperties", "createObjectFrom", "emptyFunction"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, IOStream, testPage, div, dataAndEvents, UploaderQueue, declare, $sanitize, init) {
  /**
   * @param {string} input
   * @param {?} opt_renderer
   * @return {undefined}
   */
  function Item(input, opt_renderer) {
    /** @type {string} */
    this._input = input;
    this._ignoreKeys = {};
    this._getValueFn = opt_renderer;
  }
  declare(Item.prototype, IOStream, {
    _timeout : 7E3,
    _currentState : UploaderQueue.INACTIVE,
    /**
     * @return {undefined}
     */
    init : function() {
      /** @type {(RegExp|string)} */
      this.init = init;
      this.reset();
      this._subscription = testPage.listen(this._input, "keyup", this._update.bind(this));
      dataAndEvents.onUnload(this._onunload.bind(this));
    },
    /**
     * @return {undefined}
     */
    reset : function() {
      clearTimeout(this._checkTimer);
      /** @type {null} */
      this._checkTimer = null;
      /** @type {null} */
      this._lastKeystrokeAt = null;
      this._currentState = UploaderQueue.INACTIVE;
    },
    /**
     * @param {Array} value
     * @return {undefined}
     */
    setIgnoreKeys : function(value) {
      this._ignoreKeys = $sanitize(value);
    },
    /**
     * @return {undefined}
     */
    destroy : function() {
      this._subscription.remove();
    },
    /**
     * @return {undefined}
     */
    _onunload : function() {
      if (this._currentState == UploaderQueue.TYPING) {
        this._transition(UploaderQueue.QUITTING);
      }
    },
    /**
     * @param {?} element
     * @return {undefined}
     */
    _update : function(element) {
      var $element = testPage.getKeyCode(element);
      var current = this._currentState;
      if (!this._ignoreKeys[$element]) {
        var buf = this._getValueFn ? this._getValueFn() : div.getValue(this._input);
        if (buf.trim().length === 0) {
          if (current == UploaderQueue.TYPING) {
            this._transition(UploaderQueue.INACTIVE);
          }
        } else {
          if (current == UploaderQueue.TYPING) {
            this._recordKeystroke();
          } else {
            if (current == UploaderQueue.INACTIVE) {
              this._transition(UploaderQueue.TYPING);
              this._recordKeystroke();
            }
          }
        }
      }
    },
    /**
     * @param {?} animate
     * @return {undefined}
     */
    _transition : function(animate) {
      this.reset();
      this._currentState = animate;
      this.inform("change", animate);
    },
    /**
     * @return {undefined}
     */
    _recordKeystroke : function() {
      /** @type {number} */
      this._lastKeystrokeTime = Date.now();
      if (!this._checkTimer) {
        /** @type {number} */
        this._checkTimer = setTimeout(this._checkTyping.bind(this), this._timeout);
      }
    },
    /**
     * @return {undefined}
     */
    _checkTyping : function() {
      var right = this._lastKeystrokeTime + this._timeout;
      /** @type {number} */
      var left = Date.now();
      if (left > right) {
        this._transition(UploaderQueue.INACTIVE);
      } else {
        clearTimeout(this._checkTimer);
        /** @type {number} */
        this._checkTimer = setTimeout(this._checkTyping.bind(this), right - left + 10);
      }
    }
  });
  /** @type {function (string, ?): undefined} */
  module.exports = Item;
}, null);
__d("TypingDetectorController", ["AsyncRequest", "AvailableList", "AvailableListConstants", "ChannelConnection", "ChatVisibility", "Keys", "PresencePrivacy", "ShortProfiles", "TypingDetector", "TypingStates", "copyProperties", "emptyFunction", "setTimeoutAcrossTransitions", "shield"], function(deepDataAndEvents, textAlt, keepData, opt_attributes, module, matcherFunction, ignoreMethodDoesntExist, params, value, results, AngularForce, e, rule, h, Renderer, dataAndEvents, expect, opt_obj2, arrMin, values) {
  /**
   * @param {?} allBindingsAccessor
   * @param {string} str
   * @param {?} out
   * @param {Object} arg
   * @param {?} depMaps
   * @param {Function} options
   * @return {undefined}
   */
  function init(allBindingsAccessor, str, out, arg, depMaps, options) {
    this.userID = allBindingsAccessor;
    /** @type {string} */
    this.input = str;
    this.source = out;
    this.threadID = depMaps;
    this.remoteState = dataAndEvents.INACTIVE;
    /** @type {null} */
    this.notifyTimer = null;
    arg = arg || {};
    this.notifyDelay = arg.notifyDelay || this.notifyDelay;
    this._typingDetector = new Renderer(str, options);
    this._typingDetector.init(arg);
    this._typingDetector.subscribe("change", this._stateChange.bind(this));
  }
  /**
   * @param {?} userID
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  init.prototype.setUserAndThread = function(userID, dataAndEvents) {
    if (this.userID !== userID || this.threadID !== dataAndEvents) {
      this.resetState();
      this.userID = userID;
      this.threadID = dataAndEvents;
    }
  };
  /**
   * @param {string} dataAndEvents
   * @return {undefined}
   */
  init.prototype.setIgnoreEnter = function(dataAndEvents) {
    /** @type {Array} */
    var udataCur = dataAndEvents ? [e.RETURN] : [];
    this._typingDetector.setIgnoreKeys(udataCur);
  };
  /**
   * @return {undefined}
   */
  init.prototype.resetState = function() {
    this._notifyState(dataAndEvents.INACTIVE);
    this.remoteState = dataAndEvents.INACTIVE;
    this._typingDetector.reset();
    clearTimeout(this.notifyTimer);
    /** @type {null} */
    this.notifyTimer = null;
  };
  /**
   * @return {undefined}
   */
  init.prototype.destroy = function() {
    this.resetState();
    this._typingDetector.destroy();
  };
  /**
   * @param {?} ignoreMethodDoesntExist
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  init.prototype._stateChange = function(ignoreMethodDoesntExist, deepDataAndEvents) {
    if (deepDataAndEvents != dataAndEvents.QUITTING) {
      clearTimeout(this.notifyTimer);
      this.notifyTimer = arrMin(values(this._notifyState, this, deepDataAndEvents), this.notifyDelay);
    } else {
      this._notifyState(deepDataAndEvents, true);
    }
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  init.prototype._notifyState = function(deepDataAndEvents, dataAndEvents) {
    if (!this.userID && !this.threadID || (!AngularForce.isOnline() || (deepDataAndEvents === this.remoteState || results.disconnected()))) {
      return;
    }
    var paths = this.userID;
    if (paths) {
      h.get(paths, function(statement) {
        if (statement && (statement.type == "friend" && rule.allows(paths))) {
          this._sendRequest(deepDataAndEvents, paths, dataAndEvents);
        }
      }.bind(this));
    } else {
      this._sendRequest(deepDataAndEvents, paths, dataAndEvents);
    }
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {number} callback
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  init.prototype._sendRequest = function(deepDataAndEvents, callback, dataAndEvents) {
    this.remoteState = deepDataAndEvents;
    var data = {
      typ : deepDataAndEvents,
      to : callback,
      source : this.source,
      thread : this.threadID
    };
    (new ignoreMethodDoesntExist).setHandler(this._onTypResponse.bind(this, callback)).setErrorHandler(opt_obj2).setData(data).setURI("/ajax/messaging/typ.php").setAllowCrossPageTransition(true).setOption("asynchronous", !dataAndEvents).send();
  };
  /**
   * @param {?} source
   * @param {?} join
   * @return {undefined}
   */
  init.prototype._onTypResponse = function(source, join) {
    var config = join.getPayload() || {};
    if (config.offline) {
      params.set(source, value.OFFLINE, "typing_response");
    }
  };
  expect(init.prototype, {
    notifyDelay : 1E3
  });
  /** @type {function (?, string, ?, Object, ?, Function): undefined} */
  module.exports = init;
}, null);
__d("ChatDispatcher", ["Dispatcher"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Device) {
  module.exports = new Device;
}, null);
__d("ChatTabActions", ["ChatDispatcher", "keyMirror"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, router, require) {
  var Block = require({
    CLOSE_TAB : null,
    CLOSE_ALL_TABS : null,
    CLOSE_FRAGILE_TABS : null,
    LOWER_TAB : null,
    PERSIST_LOCAL_STATE : null,
    PROMOTE_TAB : null,
    RAISE_TAB : null
  });
  var JsDiff = {
    Types : Block,
    /**
     * @param {string} idx
     * @param {?} err
     * @return {undefined}
     */
    closeTab : function(idx, err) {
      router.dispatch({
        actionType : Block.CLOSE_TAB,
        reason : err,
        threadID : idx
      });
    },
    /**
     * @return {undefined}
     */
    closeAllTabs : function() {
      router.dispatch({
        actionType : Block.CLOSE_ALL_TABS
      });
    },
    /**
     * @return {undefined}
     */
    closeFragileTabs : function() {
      router.dispatch({
        actionType : Block.CLOSE_FRAGILE_TABS
      });
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    lowerTab : function(dataAndEvents) {
      router.dispatch({
        actionType : Block.LOWER_TAB,
        threadID : dataAndEvents
      });
    },
    /**
     * @return {undefined}
     */
    persistLocalState : function() {
      router.dispatch({
        actionType : Block.PERSIST_LOCAL_STATE
      });
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    promoteTab : function(dataAndEvents) {
      router.dispatch({
        actionType : Block.PROMOTE_TAB,
        threadID : dataAndEvents
      });
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} tab
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    raiseTab : function(dataAndEvents, tab, deepDataAndEvents) {
      router.dispatch({
        actionType : Block.RAISE_TAB,
        signatureID : deepDataAndEvents,
        threadID : dataAndEvents,
        userAction : tab
      });
    }
  };
  module.exports = JsDiff;
}, null);
__d("ChatSidebarComposeLink.react", ["ChatOpenTab", "React", "TooltipLink.react", "URI", "fbt"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, self, type, StatusView, matcherFunction) {
  var JsDiff = self.createClass({
    displayName : "ChatSidebarComposeLink",
    propTypes : {
      className : self.PropTypes.string.isRequired
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      dataAndEvents.listenOpenEmptyTab(this.getDOMNode(), "sidebar");
    },
    /**
     * @return {?}
     */
    render : function() {
      /** @type {string} */
      var tooltip = "New Message";
      return self.createElement(type, {
        ajaxify : new StatusView("/ajax/messaging/composer.php"),
        className : this.props.className,
        tooltip : tooltip,
        rel : "dialog"
      });
    }
  });
  module.exports = JsDiff;
}, null);
__d("ChatSidebarConstants", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var scope = {
    LITESTAND_CLASSIC_SIZE : 32,
    IMAGE_SIZE : 28
  };
  Object.assign(scope, {
    /**
     * @param {(boolean|string)} bounds
     * @return {?}
     */
    getImageSize : function(bounds) {
      if (bounds === false) {
        return scope.IMAGE_SIZE;
      }
      return scope.LITESTAND_CLASSIC_SIZE;
    },
    /**
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    getItemHeight : function(dataAndEvents) {
      if (dataAndEvents === false) {
        return scope.IMAGE_SIZE + 4;
      }
      return scope.LITESTAND_CLASSIC_SIZE + 4;
    }
  });
  module.exports = scope;
}, null);
__d("ChatBehavior", ["Arbiter", "AvailableList", "AvailableListConstants", "copyProperties", "MercuryConstants"], function(dataAndEvents, $sanitize, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, left, exports, message, topic) {
  /**
   * @return {undefined}
   */
  function processNewAttribute() {
    out.inform(out.ON_CHANGED);
  }
  var input = $sanitize("MercuryConstants").ChatNotificationConstants;
  /** @type {boolean} */
  var YY_START = false;
  var pos = exports.getWebChatNotification();
  /** @type {boolean} */
  var YYSTATE = YY_START;
  /** @type {boolean} */
  var showsTabUnreadUI = true;
  var out = topic(new left, {
    ON_CHANGED : "changed",
    /**
     * @return {?}
     */
    notifiesUserMessages : function() {
      return pos !== input.NO_USER_MESSAGE_NOTIFICATION;
    },
    /**
     * @return {?}
     */
    ignoresRemoteTabRaise : function() {
      return YYSTATE;
    },
    /**
     * @return {?}
     */
    showsTabUnreadUI : function() {
      return showsTabUnreadUI;
    }
  });
  exports.subscribe(message.ON_CHAT_NOTIFICATION_CHANGED, function() {
    var mat = pos;
    var dest = exports.getWebChatNotification();
    pos = dest;
    if (mat != dest) {
      processNewAttribute();
    }
  });
  left.subscribe("chat/set_does_page_occlude_tabs", function(dataAndEvents, deepDataAndEvents) {
    /** @type {boolean} */
    YYSTATE = !!deepDataAndEvents;
    processNewAttribute();
  });
  left.subscribe("chat/set_show_tab_unread_ui", function(dataAndEvents, deepDataAndEvents) {
    /** @type {boolean} */
    showsTabUnreadUI = !!deepDataAndEvents;
    processNewAttribute();
  });
  module.exports = out;
}, null);
__d("ChatSidebarSheet", ["ArbiterMixin", "BlackbirdUpsell", "ChannelConnection", "ChannelConstants", "ChatBehavior", "ChatConfig", "ChatVisibility", "CSS", "DOM", "Event", "JSLogger", "PresencePrivacy", "copyProperties", "fbt", "mixin", "setTimeoutAcrossTransitions"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, element, exports, self, dataAndEvents, channel, $templateCache, AngularForce, d, dom, m, activator, event, defineProperty, obj, proceed,
$sanitize) {
  /**
   * @param {?} failing_message
   * @return {?}
   */
  function report(failing_message) {
    switch(failing_message) {
      case dataAndEvents.HINT_AUTH:
        return "Your session has timed out. Please log in.";
      case dataAndEvents.HINT_CONN:
        return obj._("Facebook {Chat} is currently unavailable.", [obj.param("Chat", "Chat")]);
      case dataAndEvents.HINT_MAINT:
        return obj._("Facebook {Chat} is currently down for maintenance.", [obj.param("Chat", "Chat")]);
      default:
        return obj._("Facebook {Chat} is currently unavailable.", [obj.param("Chat", "Chat")]);
    }
  }
  /**
   * @param {number} t
   * @return {?}
   */
  function init(t) {
    var enabled;
    if (t === null || false === navigator.onLine) {
      /** @type {string} */
      enabled = "Unable to connect to chat. Check your Internet connection.";
    } else {
      if (t > $templateCache.get("warning_countdown_threshold_msec")) {
        var fn = dom.create("a", {
          href : "#",
          className : "fbChatReconnectLink"
        }, "Try again");
        enabled = obj._("Unable to connect to chat. {try-again-link}", [obj.param("try-again-link", fn)]);
      } else {
        if (t > 1E3) {
          enabled = obj._("Unable to connect to chat. Reconnecting in {seconds}...", [obj.param("seconds", Math.floor(t / 1E3))]);
        } else {
          /** @type {string} */
          enabled = "Unable to connect to chat. Reconnecting...";
        }
      }
    }
    return enabled;
  }
  /**
   * @param {Object} root
   * @return {undefined}
   */
  function constructor(root) {
    /** @type {Object} */
    this._root = root;
    this._message = dom.find(root, "div.fbChatSidebarMessage div.message");
    self.subscribe([self.CONNECTED, self.SHUTDOWN, self.RECONNECTING], this._handleConnectionChange.bind(this));
    self.subscribe([self.MUTE_WARNING, self.UNMUTE_WARNING], this._render.bind(this));
    event.subscribe("privacy-user-presence-changed", this._render.bind(this));
    channel.subscribe(channel.ON_CHANGED, this._render.bind(this));
    this._render();
  }
  var $log = activator.create("sidebar_sheet");
  var info = proceed(element);
  var name;
  for (name in info) {
    if (info.hasOwnProperty(name)) {
      constructor[name] = info[name];
    }
  }
  var basePrototype = info === null ? null : info.prototype;
  /** @type {Object} */
  constructor.prototype = Object.create(basePrototype);
  /** @type {function (Object): undefined} */
  constructor.prototype.constructor = constructor;
  constructor.__superConstructor__ = info;
  /**
   * @param {?} dataAndEvents
   * @param {Function} deepDataAndEvents
   * @return {undefined}
   */
  constructor.prototype._handleConnectionChange = function(dataAndEvents, deepDataAndEvents) {
    this._channelStatus = dataAndEvents;
    /** @type {Function} */
    this._channelData = deepDataAndEvents;
    this._render();
  };
  /**
   * @return {?}
   */
  constructor.prototype._renderChannelDisconnect = function() {
    if (this._channelStatus === self.SHUTDOWN) {
      return dom.setContent(this._message, report(this._channelData));
    } else {
      if (this._channelStatus === self.RECONNECTING) {
        var el = this._channelData;
        dom.setContent(this._message, init(el));
        if (el > 1E3) {
          if (el > $templateCache.get("warning_countdown_threshold_msec")) {
            this._warningMsgEventListener = m.listen(this._message, "click", function(resolver) {
              if (d.hasClass(resolver.getTarget(), "fbChatReconnectLink")) {
                self.reconnect();
                return false;
              }
            });
          }
          this._showWarningTimeout = $sanitize(this._handleConnectionChange.bind(this, self.RECONNECTING, el - 1E3), 1E3);
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  constructor.prototype._renderOffline = function() {
    /** @type {string} */
    var style = "fbChatGoOnlineLink";
    /** @type {string} */
    var requires = "Turn on chat";
    var fn = dom.create("a", {
      href : "#",
      className : style
    }, requires);
    var root = obj._("{=Go online} to see who's available.", [obj.param("=Go online", fn)]);
    dom.setContent(this._message, root);
    this._goOnlineEventListener = m.listen(this._message, "click", function(resolver) {
      if (d.hasClass(resolver.getTarget(), style)) {
        $log.log("sidebar_go_online");
        AngularForce.goOnline();
        return false;
      }
    });
  };
  /**
   * @return {undefined}
   */
  constructor.prototype._renderBlackbirdUpsell = function() {
    dom.setContent(this._message, exports.getOfflineContent());
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  constructor.prototype._renderBlackbird = function(deepDataAndEvents) {
    dom.setContent(this._message, exports.getBlackbirdContent(deepDataAndEvents));
  };
  /**
   * @return {undefined}
   */
  constructor.prototype._clear = function() {
    if (this._showWarningTimeout) {
      clearTimeout(this._showWarningTimeout);
      /** @type {null} */
      this._showWarningTimeout = null;
    }
    if (this._warningMsgEventListener) {
      this._warningMsgEventListener.remove();
      /** @type {null} */
      this._warningMsgEventListener = null;
    }
    if (this._goOnlineEventListener) {
      this._goOnlineEventListener.remove();
      /** @type {null} */
      this._goOnlineEventListener = null;
    }
    d.removeClass(this._root, "upsell");
    d.removeClass(this._root, "offline");
    d.removeClass(this._root, "blackbird");
    d.removeClass(this._root, "error");
    d.removeClass(this._root, "notice");
    dom.empty(this._message);
  };
  /**
   * @return {undefined}
   */
  constructor.prototype._render = function() {
    this._clear();
    if (exports.shouldShow()) {
      if (AngularForce.hasBlackbirdEnabled()) {
        /** @type {string} */
        var cssClass = AngularForce.isOnline() ? "blackbird" : "upsell";
        d.addClass(this._root, cssClass);
        this._renderBlackbird(event.getVisibility());
      } else {
        if (!AngularForce.isOnline()) {
          d.addClass(this._root, "upsell");
          this._renderBlackbirdUpsell();
        }
      }
    } else {
      if (!AngularForce.isOnline()) {
        d.addClass(this._root, "offline");
        this._renderOffline();
      } else {
        if (self.disconnected()) {
          d.addClass(this._root, "error");
          this._renderChannelDisconnect();
        } else {
          if (!channel.notifiesUserMessages()) {
            d.addClass(this._root, "notice");
            /** @type {string} */
            var root = "Alerts are off while you use another client to chat.";
            dom.setContent(this._message, root);
          }
        }
      }
    }
    this.inform("updated");
  };
  defineProperty(constructor.prototype, {
    _channelStatus : null,
    _channelData : null,
    _showWarningTimeout : null,
    _warningMsgEventListener : null,
    _goOnlineEventListener : null
  });
  /** @type {function (Object): undefined} */
  module.exports = constructor;
}, null);
__d("SidebarFitWindowHeight", ["Arbiter", "ArbiterMixin", "Event", "Style", "SubscriptionsHandler", "TinyViewport", "Vector", "mixin", "queryThenMutateDOM"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, m, _super, Event, domStyle, dataAndEvents, _this, widget, method, $sanitize) {
  /**
   * @param {?} map
   * @return {undefined}
   */
  function object(map) {
    this.$SidebarFitWindowHeight0 = map;
    this.onViewportUpdate();
    _this.subscribe("change", this.onViewportUpdate.bind(this));
  }
  var prototype = method(_super);
  var k;
  for (k in prototype) {
    if (prototype.hasOwnProperty(k)) {
      object[k] = prototype[k];
    }
  }
  var basePrototype = prototype === null ? null : prototype.prototype;
  /** @type {Object} */
  object.prototype = Object.create(basePrototype);
  /** @type {function (?): undefined} */
  object.prototype.constructor = object;
  object.__superConstructor__ = prototype;
  /**
   * @return {undefined}
   */
  object.prototype.onViewportUpdate = function() {
    if (_this.isTiny()) {
      this.onScroll();
      var listener = this.onScroll.bind(this);
      this.$SidebarFitWindowHeight1 = new dataAndEvents;
      this.$SidebarFitWindowHeight1.addSubscriptions(Event.listen(window, "scroll", listener), m.subscribe("dom-scroll", listener));
    } else {
      if (this.$SidebarFitWindowHeight2 !== 0) {
        domStyle.set(this.$SidebarFitWindowHeight0, "margin-top", "0");
        /** @type {number} */
        this.$SidebarFitWindowHeight2 = 0;
      }
      if (this.$SidebarFitWindowHeight1) {
        this.$SidebarFitWindowHeight1.release();
      }
    }
  };
  /**
   * @return {undefined}
   */
  object.prototype.onScroll = function() {
    $sanitize(this.updateScrollPosition.bind(this), this.resizeSidebar.bind(this), "SidebarFitWindowHeight/scroll");
  };
  /**
   * @return {undefined}
   */
  object.prototype.updateScrollPosition = function() {
    this.$SidebarFitWindowHeight3 = widget.getScrollPosition().y;
    if (!this.$SidebarFitWindowHeight4) {
      this.$SidebarFitWindowHeight4 = this.$SidebarFitWindowHeight0.offsetHeight;
    }
  };
  /**
   * @return {undefined}
   */
  object.prototype.resizeSidebar = function() {
    /** @type {number} */
    var pixels = -Math.max(Math.min(this.$SidebarFitWindowHeight3, this.$SidebarFitWindowHeight4), 0);
    domStyle.set(this.$SidebarFitWindowHeight0, "margin-top", pixels + "px");
    if (pixels != this.$SidebarFitWindowHeight2) {
      /** @type {number} */
      this.$SidebarFitWindowHeight2 = pixels;
      this.inform("resized", pixels);
    }
  };
  /**
   * @return {?}
   */
  object.prototype.getOffset = function() {
    return this.$SidebarFitWindowHeight2;
  };
  /** @type {function (?): undefined} */
  module.exports = object;
}, null);
__d("ChatSidebar", ["Arbiter", "ArbiterMixin", "AsyncRequest", "Banzai", "BanzaiLogger", "Bootloader", "BootloaderConfig", "ChatConfig", "ChatImpressionLogger", "ChatOptions", "ChatSidebarComposeLink.react", "ChatSidebarConstants", "ChatSidebarSheet", "CSS", "DOM", "DOMDimensions", "Event", "JSLogger", "KeyEventController", "LitestandClassicPlaceHolders", "MercuryConfig", "OrderedFriendsList", "Parent", "PresencePrivacy", "React", "ScrollableArea", "SidebarFitWindowHeight", "Style", "ViewportBounds",
"copyProperties", "createArrayFromMixed", "csx", "cx", "debounce", "emptyFunction", "ge"], function(opt_attributes, matcherFunction, execResult, $sanitize, module, opt_keys, m, key, Color, dataAndEvents, activator, exports, deepDataAndEvents, $templateCache, fn, emu, name, ignoreMethodDoesntExist, List, win, view, set, Event, Company, engine, dom, textAlt, keepData, find, parent, self, ProgressIndicator, Observable, DOM, _, hasOwn, $, positionError, oFunctionBody, subscribe, value, Application) {
  /**
   * @return {undefined}
   */
  function done() {
    win.removeClass(document.documentElement, "sidebarMode");
    if (!initialized || !obj.isVisible() && !property) {
      m.inform("reflow");
      return;
    }
    /** @type {boolean} */
    object = false;
    /** @type {boolean} */
    property = false;
    /** @type {null} */
    offsetWidth = null;
    me.hide();
    entry.getCore().reset();
    win.hide(el);
    if (www_mini_sidebar) {
      win.hide(event);
      win.hide(container);
      win.removeClass(document.documentElement, "miniSidebar");
      win.removeClass(el, "_51xq");
      if (page) {
        page.setProps({
          shown : false
        }, function() {
          return addTimer(false);
        });
      }
      response.log("minisidebar_hide");
    } else {
      response.log("sidebar_hide");
    }
    m.inform("sidebar/hide", obj);
    m.inform("reflow");
  }
  /**
   * @return {undefined}
   */
  function next() {
    var program = obj.shouldShowSidebar();
    var inverse = obj.shouldShowMiniSidebar();
    if (obj.isEnabled() && (program || inverse)) {
      if (program) {
        onSuccess();
        start();
      } else {
        init();
      }
    } else {
      done();
    }
    if (!initialized) {
      _next();
      /** @type {boolean} */
      initialized = true;
    }
    /** @type {null} */
    offsetWidth = null;
  }
  /**
   * @return {undefined}
   */
  function show() {
    if (entry && obj.isVisible()) {
      entry.getCore().getElement().focus();
    }
  }
  /**
   * @param {Array} event
   * @return {?}
   */
  function resize(event) {
    var height = metrics.height;
    event.forEach(function(s) {
      if (s && s !== out) {
        height -= set.getElementDimensions(s).height;
      }
    });
    if (plugin) {
      height -= plugin.getOffset();
    }
    if (index) {
      height -= set.getElementDimensions(index).height;
    }
    return Math.max(0, height);
  }
  /**
   * @return {undefined}
   */
  function onSuccess() {
    if (obj.isVisible()) {
      return;
    }
    if (www_mini_sidebar) {
      win.hide(event);
      win.show(container);
      win.removeClass(document.documentElement, "miniSidebar");
      win.removeClass(el, "_51xq");
      if (page) {
        page.setProps({
          shown : false
        }, function() {
          return addTimer(false);
        });
      }
    }
    /** @type {boolean} */
    object = true;
    /** @type {boolean} */
    property = false;
    /** @type {null} */
    offsetWidth = null;
    win.show(el);
    win.addClass(document.documentElement, "sidebarMode");
    me.show();
    response.log("sidebar_show");
    m.inform("sidebar/show", obj);
    dom.destroy("sidebar");
  }
  /**
   * @return {undefined}
   */
  function start() {
    var max = resize($(container.childNodes));
    var resolution = me.getItemHeight();
    /** @type {number} */
    var min = 8;
    /** @type {number} */
    var er = Math.floor((max - min) / resolution);
    DOM.set(out, "height", max + "px");
    me.setNumTopFriends(er);
    /** @type {number} */
    var r20 = Math.floor((max - min) / resolution);
    /** @type {number} */
    r20 = r20 - 2 > 0 ? r20 - 2 : 0;
    entry.getData().setMaxResults(r20);
    m.inform("sidebar/resized", obj);
    m.inform("reflow");
  }
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  function addTimer(recurring) {
    if (el === null) {
      return;
    }
    win.conditionClass(el, "_2e4g", recurring);
  }
  /**
   * @return {undefined}
   */
  function init() {
    win.hide(container);
    win.show(event);
    win.show(el);
    win.addClass(document.documentElement, "sidebarMode");
    win.addClass(document.documentElement, "miniSidebar");
    win.addClass(el, "_51xq");
    var val = resize([]);
    var order = ignoreMethodDoesntExist.getItemHeight(true);
    /** @type {number} */
    var expectedHashCode = Math.floor(val / order) - 4;
    if (!page) {
      exports.loadModules(["ChatMiniSidebar.react", "ChatMiniSidebarSearchSource"], function(name, Buffer) {
        if (!c) {
          c = new Buffer({
            queryRequests : [{
              uri : "/ajax/mercury/composer_query.php"
            }]
          });
        }
        page = self.render(self.createElement(name, {
          dataSource : c,
          height : val,
          maxEntries : Math.max(expectedHashCode, 0),
          /** @type {function (boolean): undefined} */
          onClickSearch : addTimer,
          /** @type {function (): undefined} */
          onToggleSidebar : obj.toggle,
          shown : true
        }), event);
      });
    } else {
      page.setProps({
        height : val,
        maxEntries : Math.max(expectedHashCode, 0),
        shown : true
      });
    }
    /** @type {boolean} */
    object = false;
    /** @type {boolean} */
    property = true;
    dom.destroy("sidebar");
    response.log("minisidebar_show");
    m.inform("minisidebar/show", obj);
    m.inform("reflow");
  }
  /**
   * @return {undefined}
   */
  function draw() {
    emu.setSetting("sidebar_mode", obj.isEnabled(), "sidebar");
    (new Color("/ajax/chat/settings.php")).setHandler(value).setErrorHandler(value).setData({
      sidebar_mode : obj.isEnabled()
    }).setAllowCrossPageTransition(true).send();
  }
  /**
   * @return {?}
   */
  function _get() {
    return keepData.getActiveList().length <= $templateCache.get("sidebar.min_friends");
  }
  /**
   * @return {undefined}
   */
  function _next() {
    /** @type {boolean} */
    var error = true;
    if (!obj.isEnabled()) {
      response.log("state_not_enabled");
      /** @type {boolean} */
      error = false;
    }
    if (!obj.isViewportCapable()) {
      if (!www_mini_sidebar) {
        response.log("state_not_shown_viewport");
        /** @type {boolean} */
        error = false;
      } else {
        if (!obj.isViewportCapableForMiniSidebar()) {
          response.log("state_not_shown_viewport_mini");
          /** @type {boolean} */
          error = false;
        }
      }
    }
    if (YY_START) {
      response.log("state_not_shown_hidden");
      /** @type {boolean} */
      error = false;
    }
    if (_get()) {
      response.log("state_not_shown_num_friends");
      /** @type {boolean} */
      error = false;
    }
    response.log(error ? "state_shown" : "state_not_shown");
  }
  var out;
  /** @type {null} */
  var submenu = null;
  var c;
  /** @type {boolean} */
  var enabled = false;
  /** @type {boolean} */
  var YY_START = false;
  /** @type {boolean} */
  var object = false;
  /** @type {boolean} */
  var property = false;
  /** @type {boolean} */
  var initialized = false;
  /** @type {boolean} */
  var ya = false;
  var page;
  var event;
  /** @type {boolean} */
  var www_mini_sidebar = false;
  var container;
  var el;
  var dict;
  var me;
  var index;
  var entry;
  var metrics;
  /** @type {null} */
  var offsetWidth = null;
  var plugin;
  var response = Company.create("chat_sidebar");
  /** @type {string} */
  var e = "succeeded";
  var console = activator.create(hasOwn({
    retry : true
  }, dataAndEvents.VITAL));
  var obj = {
    /**
     * @param {Object} target
     * @param {string} player
     * @param {Object} $
     * @param {?} arg
     * @return {undefined}
     */
    init : function(target, player, $, arg) {
      /** @type {(RegExp|string)} */
      obj.init = value;
      /** @type {boolean} */
      ya = true;
      /** @type {Object} */
      el = target;
      /** @type {string} */
      me = player;
      /** @type {Object} */
      entry = $;
      dict = arg;
      out = view.find(target, "div.fbChatSidebarBody");
      event = view.find(target, "._51x-");
      container = view.find(target, "._51x_");
      index = view.find(target, "._5qqe");
      www_mini_sidebar = $templateCache.get("www_mini_sidebar", false);
      if (arg && arg.react_compose_link) {
        var targets = view.find(target, "._x1u");
        if (targets) {
          self.render(self.createElement(name, {
            className : "_3a-4 _5q85"
          }), targets);
        }
      }
      Event.listen(window, "resize", next);
      engine.registerKey("q", function(tail) {
        if (object) {
          if (!submenu) {
            submenu = view.scry(target, ".inputsearch")[0];
          }
          if (submenu) {
            submenu.focus();
            tail.prevent();
          }
        }
      });
      var _this = new List(target);
      _this.subscribe("updated", next);
      me.setScrollContainer(find.byClass(me.getRoot(), "uiScrollableAreaWrap"));
      me.subscribe(["render", "show", "hide"], subscribe(function(dataAndEvents) {
        var adjustGripper = ProgressIndicator.getInstance(me.getRoot());
        if (adjustGripper) {
          adjustGripper.adjustGripper();
        }
      }));
      m.subscribe("chat/option-changed", function(dataAndEvents, unused) {
        if (unused.name == "sidebar_mode") {
          /** @type {boolean} */
          enabled = !!emu.getSetting("sidebar_mode");
          next();
        }
        if (unused.name === "hide_groups") {
          next();
        }
      });
      $.getCore().subscribe("sidebar/typeahead/active", obj.updateOnActiveTypeahead);
      if (textAlt.SidebarClearTypeaheadGK) {
        $.subscribe("blur", function() {
          if (!me.isVisible()) {
            obj.updateOnActiveTypeahead(null, false);
          }
        });
        $.subscribe("focus", function() {
          if (me.isVisible() && $.getCore().getValue()) {
            obj.updateOnActiveTypeahead(null, true);
          }
        });
      }
      $.subscribe("reset", function() {
        if (!$.getCore().getValue() && !me.isVisible()) {
          obj.updateOnActiveTypeahead(null, false);
        }
      });
      m.subscribe("buddylist-nub/initialized", function(dataAndEvents, ev) {
        Event.listen(ev.getButton(), "click", function(dataAndEvents) {
          var YYSTATE = YY_START;
          /** @type {boolean} */
          YY_START = false;
          obj.enable();
          var kc = obj.shouldShowSidebar() || obj.shouldShowMiniSidebar();
          YY_START = YYSTATE && !kc;
          return!kc;
        });
      });
      /** @type {boolean} */
      enabled = !!emu.getSetting("sidebar_mode");
      parent.subscribe("privacy-user-presence-changed", next);
      next();
      fn.init(me);
      _.addPersistentRight(obj.getVisibleWidth);
      obj.inform("sidebar/initialized", obj, m.BEHAVIOR_PERSISTENT);
      m.inform("sidebar/initialized", obj, m.BEHAVIOR_PERSISTENT);
      plugin = new Observable(index);
      plugin.subscribe("resized", next);
      if ($templateCache.get("chat_sidebar_load_log")) {
        var details = {
          event : e,
          session_token : arg.session_token,
          country_code : arg.viewer_country_code,
          buddylist_short : $templateCache.get("buddylist_short_group"),
          bootloader_retry : deepDataAndEvents.retry_on_timeout
        };
        console.log("MessagesSidebarLoadLoggerConfig", details);
      }
    },
    /**
     * @param {Array} recurring
     * @param {boolean} commas
     * @return {undefined}
     */
    updateOnActiveTypeahead : function(recurring, commas) {
      if (!object) {
        return;
      }
      if (commas) {
        me.hide();
      } else {
        entry.getView().clearContent();
        me.show();
        next();
      }
    },
    /**
     * @return {?}
     */
    isInitialized : function() {
      return initialized;
    },
    /**
     * @return {undefined}
     */
    disable : function() {
      if (!obj.isEnabled()) {
        return;
      }
      /** @type {boolean} */
      enabled = false;
      draw();
      done();
    },
    /**
     * @return {undefined}
     */
    enable : function() {
      if (obj.isEnabled()) {
        return;
      }
      /** @type {boolean} */
      enabled = true;
      draw();
      next();
      setTimeout(show, 0);
    },
    /**
     * @return {undefined}
     */
    ensureLoaded : function() {
      if (!enabled) {
        return;
      }
      if (ya) {
        return;
      }
      if (Application("pagelet_sidebar")) {
        return;
      }
      $sanitize(["UIPagelet"], function(dataAndEvents) {
        var content = view.create("div", {
          id : "pagelet_sidebar"
        });
        view.appendContent(document.body, content);
        dataAndEvents.loadFromEndpoint("SidebarPagelet", "pagelet_sidebar");
      });
      /** @type {boolean} */
      ya = true;
    },
    /**
     * @return {undefined}
     */
    hide : function() {
      if (YY_START) {
        return;
      }
      /** @type {boolean} */
      YY_START = true;
      done();
    },
    /**
     * @return {undefined}
     */
    unhide : function() {
      if (!YY_START) {
        return;
      }
      /** @type {boolean} */
      YY_START = false;
      next();
    },
    /**
     * @return {?}
     */
    getBody : function() {
      return out;
    },
    /**
     * @return {?}
     */
    getRoot : function() {
      return el;
    },
    /**
     * @return {?}
     */
    getVisibleWidth : function() {
      if (!object && !property || !el) {
        return 0;
      }
      if (offsetWidth === null) {
        offsetWidth = el.offsetWidth;
        if (property) {
          /** @type {number} */
          offsetWidth = 206;
        }
      }
      return offsetWidth;
    },
    /**
     * @return {?}
     */
    isEnabled : function() {
      return enabled;
    },
    /**
     * @return {?}
     */
    isViewportCapable : function() {
      metrics = set.getViewportWithoutScrollbarDimensions();
      var width = $templateCache.get("sidebar.minimum_width");
      return metrics.width > width;
    },
    /**
     * @return {?}
     */
    shouldShowSidebar : function() {
      var ac = obj.isViewportCapable();
      return ac && (!YY_START && !_get());
    },
    /**
     * @return {?}
     */
    isViewportCapableForMiniSidebar : function() {
      metrics = set.getViewportWithoutScrollbarDimensions();
      var width = $templateCache.get("sidebar.minimum_width");
      var height = $templateCache.get("minisidebar.minimum_width");
      return metrics.width > height && metrics.width <= width;
    },
    /**
     * @return {?}
     */
    shouldShowMiniSidebar : function() {
      if (!www_mini_sidebar) {
        return false;
      }
      var ac = obj.isViewportCapableForMiniSidebar();
      return ac && (!YY_START && !_get());
    },
    /**
     * @return {?}
     */
    isVisible : function() {
      return object;
    },
    /** @type {function (): undefined} */
    resize : next,
    /**
     * @return {undefined}
     */
    toggle : function() {
      if (obj.isEnabled()) {
        obj.disable();
      } else {
        obj.enable();
      }
    }
  };
  hasOwn(obj, key);
  module.exports = obj;
}, null);
__d("ChatMiniSidebarSearchSource", ["AbstractSearchSource", "AsyncRequest", "ChatSortUsers", "CurrentUser", "MercuryParticipantTypes", "OrderedFriendsList", "SearchableEntry", "SearchSourceCallbackManager", "ShortProfiles", "TokenizeUtil", "copyProperties", "emptyFunction", "isValidUniqueID"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, $sanitize, module, textAlt, info, Device, cursor, a, self, jQuery, Recipe, VCFTabixDriver, fin, form, cb, err2, serialize) {
  /**
   * @param {?} config
   * @return {undefined}
   */
  function constructor(config) {
    this.$ChatMiniSidebarSearchSource0 = new VCFTabixDriver({
      parseFn : form.parse,
      matchFn : form.isQueryMatch,
      indexFn : config.indexFn
    });
    /** @type {Array} */
    this.$ChatMiniSidebarSearchSource1 = [];
    this.$ChatMiniSidebarSearchSource2 = config.queryRequests || [];
  }
  var name;
  for (name in info) {
    if (info.hasOwnProperty(name)) {
      constructor[name] = info[name];
    }
  }
  var basePrototype = info === null ? null : info.prototype;
  /** @type {Object} */
  constructor.prototype = Object.create(basePrototype);
  /** @type {function (?): undefined} */
  constructor.prototype.constructor = constructor;
  /** @type {(Object|string)} */
  constructor.__superConstructor__ = info;
  /**
   * @param {?} $sanitize
   * @return {undefined}
   */
  constructor.prototype.bootstrapImpl = function($sanitize) {
    fin.fetchAll().then(function() {
      this.$ChatMiniSidebarSearchSource3();
      $sanitize();
    }.bind(this));
  };
  /**
   * @param {string} re
   * @param {?} text
   * @param {?} local
   * @return {undefined}
   */
  constructor.prototype.searchImpl = function(re, text, local) {
    /** @type {null} */
    var failures = null;
    var map = {};
    var objectToString = local && local.onQueryFinished;
    var arr = this.$ChatMiniSidebarSearchSource0.search(re, function(xs) {
      if (!failures) {
        /** @type {Array} */
        failures = xs;
        failures.forEach(function(dataAndEvents) {
          return map[dataAndEvents.getUniqueID()] = true;
        });
      } else {
        xs.forEach(function(test) {
          var objUid = test.getUniqueID();
          if (!map[objUid]) {
            failures.push(test);
            /** @type {boolean} */
            map[objUid] = true;
          }
        });
      }
      text(failures, re);
    }, local);
    if (!arr || (!this.$ChatMiniSidebarSearchSource2 || (!this.$ChatMiniSidebarSearchSource2.length || re.length <= 1))) {
      if (objectToString) {
        objectToString(re);
      }
      return;
    }
    var expectationResult = {
      value : re,
      existing_ids : failures && failures.map(function(dataAndEvents) {
        return dataAndEvents.getUniqueID();
      }).join(",")
    };
    var cnl = this.$ChatMiniSidebarSearchSource2.length;
    this.$ChatMiniSidebarSearchSource2.forEach(function(walkers) {
      this.$ChatMiniSidebarSearchSource4(expectationResult, walkers, function(deepDataAndEvents) {
        this.$ChatMiniSidebarSearchSource5(this.$ChatMiniSidebarSearchSource6(this.$ChatMiniSidebarSearchSource7(deepDataAndEvents)), re);
        cnl--;
        if (cnl === 0) {
          this.$ChatMiniSidebarSearchSource0.setQueryStringAsExhausted(re);
          if (objectToString) {
            objectToString(re);
          }
        }
      }.bind(this));
    }.bind(this), this);
  };
  /**
   * @param {?} $sanitize
   * @return {?}
   */
  constructor.prototype.getBootstrappedEntries = function($sanitize) {
    return this.bootstrap(function() {
      return $sanitize(this.$ChatMiniSidebarSearchSource1 || []);
    }.bind(this));
  };
  /**
   * @return {?}
   */
  constructor.prototype.getAllEntriesMap = function() {
    return this.$ChatMiniSidebarSearchSource0.getAllEntries();
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.$ChatMiniSidebarSearchSource3 = function() {
    var contextElem = fin.getCachedProfileIDs();
    var keys = contextElem.filter(function(l) {
      var evt = fin.getNow(l);
      return l == a.getID() || evt.type === self.FRIEND;
    });
    keys.sort(cursor.sort);
    var leaks = keys.map(this.$ChatMiniSidebarSearchSource8);
    if (leaks.length) {
      this.$ChatMiniSidebarSearchSource0.addLocalEntries(leaks);
      this.$ChatMiniSidebarSearchSource1 = this.$ChatMiniSidebarSearchSource1.concat(leaks);
    }
  };
  /**
   * @param {Array} mod
   * @return {?}
   */
  constructor.prototype.$ChatMiniSidebarSearchSource6 = function(mod) {
    return mod.map(this.$ChatMiniSidebarSearchSource9, this);
  };
  /**
   * @param {Object} args
   * @param {string} dataAndEvents
   * @return {?}
   */
  constructor.prototype.$ChatMiniSidebarSearchSource9 = function(args, dataAndEvents) {
    if (args.mercury_thread) {
      return jQuery.normalizeThreadEntry(args, dataAndEvents);
    }
    var t = args.text;
    var index = args.uid;
    if (!t || !serialize(index)) {
      return null;
    }
    return new Recipe({
      uniqueID : index,
      title : t,
      order : jQuery.getActiveRank(index),
      subtitle : args.subtext,
      type : args.render_type || args.type,
      photo : args.photo,
      uri : args.path
    });
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  constructor.prototype.$ChatMiniSidebarSearchSource7 = function(deepDataAndEvents) {
    var that = deepDataAndEvents.getPayload();
    if (Array.isArray(that)) {
      return that;
    } else {
      if (that && that.entries) {
        return that.entries;
      } else {
        return[];
      }
    }
  };
  /**
   * @param {?} l
   * @param {?} order
   * @return {?}
   */
  constructor.prototype.$ChatMiniSidebarSearchSource8 = function(l, order) {
    var args = fin.getNow(l);
    var paramType = l == a.getID() ? self.FRIEND : args.type;
    /** @type {string} */
    var keywordString = [args.additionalName, args.alternateName].concat(args.searchTokens || []).join(" ");
    return new Recipe({
      uniqueID : l,
      title : args.name,
      order : order,
      subtitle : args.additionalName,
      keywordString : keywordString,
      type : paramType,
      photo : args.thumbSrc,
      uri : args.uri
    });
  };
  /**
   * @param {?} result
   * @param {Object} obj
   * @param {Function} serializer
   * @param {Object} err
   * @return {undefined}
   */
  constructor.prototype.$ChatMiniSidebarSearchSource4 = function(result, obj, serializer, err) {
    (new Device(obj.uri)).setData(cb({}, result, obj.data)).setMethod("GET").setReadOnly(true).setHandler(serializer).setErrorHandler(err || err2).send();
  };
  /**
   * @param {Array} decEndpoints
   * @param {string} exp
   * @return {undefined}
   */
  constructor.prototype.$ChatMiniSidebarSearchSource5 = function(decEndpoints, exp) {
    if (decEndpoints.length) {
      this.$ChatMiniSidebarSearchSource0.addQueryEntries(decEndpoints.filter(function(dataAndEvents) {
        return!!dataAndEvents;
      }), exp);
    }
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.refreshData = function() {
    fin.fetchAll();
    $sanitize(["AvailableList"], function(vec) {
      return vec.update();
    });
  };
  /** @type {function (?): undefined} */
  module.exports = constructor;
}, null);
__d("ChatTypeaheadBehavior", ["ChatOpenTab", "CSS", "MercuryConfig", "Parent", "Rect", "copyProperties", "cx"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, assert, template, dataAndEvents, spec, enable, createObject, matcherFunction) {
  /**
   * @param {?} func
   * @param {boolean} recurring
   * @return {undefined}
   */
  function proxy(func, recurring) {
    var match = spec.byClass(func, "_4oes");
    if (match) {
      template.conditionClass(match, "_5q83", recurring);
    }
  }
  /**
   * @param {Object} topic
   * @return {undefined}
   */
  function exp(topic) {
    /** @type {Object} */
    this._typeahead = topic;
  }
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    var self = this._typeahead;
    /** @type {Array} */
    this._subscriptions = [self.subscribe("focus", function() {
      self.getData().refreshData();
      proxy(self.getElement(), true);
    }), self.subscribe("blur", function(deepDataAndEvents) {
      if (!dataAndEvents.SidebarClearTypeaheadGK) {
        self.getCore().reset();
      }
      proxy(self.getElement(), false);
    }), self.subscribe("respond", function(dataAndEvents, test) {
      if (test.value && test.value === self.getCore().getValue()) {
        if (!test.results.length) {
          var word = test.value.toLowerCase();
          var dateSQL = self.getData().getQueryCache();
          if (!test.isAsync && !dateSQL.hasOwnProperty(word)) {
            return;
          }
          self.getView().showNoResults();
        }
        template.addClass(self.getElement(), "hasValue");
      }
    }), self.subscribe("reset", function() {
      template.removeClass(self.getElement(), "hasValue");
    }), self.subscribe("select", function(dataAndEvents, item) {
      var gotErr = item.selected.uid;
      if (item.selected.mercury_thread && !item.selected.mercury_thread.is_canonical) {
        gotErr = item.selected.mercury_thread.thread_fbid;
      }
      self.getView().hide();
      assert.openTabByType(gotErr, item.selected.type, "typeahead");
    }), self.subscribe("highlight", function(dataAndEvents, pos) {
      if (pos.index >= 0) {
        var element = self.getView().getItems()[pos.index];
        if (element) {
          var wrapper = new enable(element);
          var offsetParent = element.offsetParent;
          var eyeVec = wrapper.boundWithin(new enable(offsetParent)).getPositionVector();
          wrapper.getPositionVector().sub(eyeVec).scrollElementBy(offsetParent);
        }
      }
    })];
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    this._subscriptions.forEach(function(subKey) {
      this._typeahead.unsubscribe(subKey);
    }, this);
    /** @type {null} */
    this._subscriptions = null;
  };
  createObject(exp.prototype, {
    _subscriptions : null
  });
  /** @type {function (Object): undefined} */
  module.exports = exp;
}, null);
__d("MercuryErrorInfo", ["MercuryActionStatus", "MercuryErrorType", "fbt"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Status, data, obj) {
  var assert = {
    /**
     * @param {?} task
     * @return {?}
     */
    getMessage : function(task) {
      /** @type {string} */
      var fn = "";
      if (assert.isConnectionError(task)) {
        /** @type {string} */
        fn = "This message didn't send.";
        if (assert.isTransient(task)) {
          fn = obj._("{message} Check your internet connection and click to try again.", [obj.param("message", fn)]);
        }
      } else {
        if (task && task.description) {
          fn = task.description;
        } else {
          /** @type {string} */
          fn = "This message failed to send.";
        }
        if (assert.isTransient(task)) {
          fn = obj._("{message} Click to send again.", [obj.param("message", fn)]);
        }
      }
      return fn;
    },
    /**
     * @param {Object} item
     * @return {?}
     */
    isConnectionError : function(item) {
      if (item && item.type == data.TRANSPORT) {
        return item.code === 1001 || (item.code === 1004 || item.code === 1006);
      }
      return false;
    },
    /**
     * @param {Object} fn
     * @return {?}
     */
    isTransient : function(fn) {
      return fn && fn.is_transient;
    },
    /**
     * @param {Object} sqlt
     * @return {?}
     */
    isPermanent : function(sqlt) {
      return sqlt ? !this.isTransient(sqlt) : false;
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    hasErrorStatus : function(deepDataAndEvents) {
      return deepDataAndEvents.status === Status.FAILED_UNKNOWN_REASON || (deepDataAndEvents.status === Status.UNABLE_TO_CONFIRM || deepDataAndEvents.status === Status.ERROR);
    }
  };
  module.exports = assert;
}, null);
__d("MercuryMessageError.react", ["CurrentUser", "ImmutableObject", "MercuryErrorInfo", "MercuryMessageActions", "React", "cx", "joinClasses"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, a, value, record, dataAndEvents, dojo, matcherFunction, update) {
  var stringPrettyPrinter = dojo.PropTypes;
  var JsDiff = dojo.createClass({
    displayName : "MercuryMessageError",
    propTypes : {
      authorFBID : stringPrettyPrinter.string,
      message : stringPrettyPrinter.instanceOf(value).isRequired
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        authorFBID : a.getID()
      };
    },
    /**
     * @return {?}
     */
    render : function() {
      var deepDataAndEvents = this.props.message;
      var source = deepDataAndEvents.error_data;
      return dojo.createElement("div", dojo.__spread({}, this.props, {
        className : update(this.props.className, this._getClassNameFromStatus(deepDataAndEvents)),
        tabIndex : record.isTransient(source) ? 0 : null,
        onClick : record.isTransient(source) ? this.messageResend : null
      }), dojo.createElement("div", {
        className : "_2fs1"
      }), dojo.createElement("span", {
        dangerouslySetInnerHTML : {
          __html : this._getTextFromStatus(deepDataAndEvents)
        }
      }));
    },
    /**
     * @return {undefined}
     */
    messageResend : function() {
      dataAndEvents.getForFBID(this.props.authorFBID).resend(this.props.message);
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    _getClassNameFromStatus : function(deepDataAndEvents) {
      if (record.hasErrorStatus(deepDataAndEvents)) {
        return "_2fs2" + (" " + "_2fs3") + (record.isTransient(deepDataAndEvents.error_data) ? " " + "_2fs4" : "") + (record.isPermanent(deepDataAndEvents.error_data) ? " " + "_2fs5" : "");
      } else {
        return "_2fs6 _2fs2";
      }
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    _getTextFromStatus : function(deepDataAndEvents) {
      /** @type {string} */
      var method = "";
      var name = deepDataAndEvents.error_data;
      if (record.hasErrorStatus(deepDataAndEvents)) {
        method = record.getMessage(name);
      }
      if (typeof method === "object" && method.__html) {
        method = method.__html;
      }
      return method;
    }
  });
  module.exports = JsDiff;
}, null);
__d("MercuryAudioPlayer", ["Event", "Arbiter", "DOM", "Flash", "UserAgent_DEPRECATED", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, opt_eventHandler, left, content, adapter, b, patch) {
  /**
   * @return {?}
   */
  function load() {
    if (b.webkit() && !b.chrome()) {
      return false;
    }
    var elem = content.create("audio");
    /** @type {boolean} */
    var pipeline = false;
    try {
      if (!!elem.canPlayType) {
        if (elem.canPlayType("video/mp4;").replace(/^no$/, "")) {
          /** @type {boolean} */
          pipeline = true;
        }
      }
    } finally {
      return pipeline;
    }
  }
  /**
   * @return {?}
   */
  function throttledUpdate() {
    return adapter.isAvailable();
  }
  /**
   * @return {?}
   */
  function tryIt() {
    if (load()) {
      return new start;
    } else {
      if (throttledUpdate()) {
        return new render;
      }
    }
    return false;
  }
  /**
   * @param {?} state
   * @param {?} blockHolder
   * @return {?}
   */
  function $(state, blockHolder) {
    this.src = state;
    this.arbiterInstance = blockHolder;
    /** @type {number} */
    this.audio_id = ++u;
    if (!(self !== null)) {
      self = tryIt();
    }
    if (!self) {
      return false;
    }
  }
  /** @type {number} */
  var interval = 200;
  /**
   * @return {undefined}
   */
  var start = function() {
    /** @type {null} */
    this.interval = null;
    /** @type {null} */
    this.arbiterInstance = null;
    this.audio = content.create("audio");
    opt_eventHandler.listen(this.audio, "playing", function() {
      this.informAttachment("playing", this.audio.currentTime);
      /** @type {number} */
      this.interval = setInterval(function() {
        this.informAttachment("playing", this.audio.currentTime);
      }.bind(this), interval);
    }.bind(this));
    opt_eventHandler.listen(this.audio, "ended", function() {
      clearInterval(this.interval);
      this.informAttachment("finished");
    }.bind(this));
  };
  patch(start.prototype, {
    /**
     * @param {?} value
     * @param {?} data
     * @return {undefined}
     */
    setAudio : function(value, data) {
      this.audio.setAttribute("src", value);
      this.arbiterInstance = data;
    },
    /**
     * @param {string} status
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    informAttachment : function(status, deepDataAndEvents) {
      if (this.arbiterInstance) {
        this.arbiterInstance.inform(status, deepDataAndEvents);
      }
    },
    /**
     * @return {undefined}
     */
    play : function() {
      this.audio.play();
      this.informAttachment("played");
    },
    /**
     * @return {undefined}
     */
    resume : function() {
      this.audio.play();
      this.informAttachment("played");
    },
    /**
     * @return {undefined}
     */
    pause : function() {
      this.audio.pause();
      clearInterval(this.interval);
      this.informAttachment("paused");
    },
    /**
     * @return {?}
     */
    getType : function() {
      return "html5";
    }
  });
  /**
   * @return {undefined}
   */
  var render = function() {
    /** @type {null} */
    this.src = null;
    /** @type {null} */
    this.arbiterInstance = null;
    var title = content.create("div");
    document.body.appendChild(title);
    this.swf = adapter.embed("/swf/SoundStreamPlayer.swf", title, null, {});
    /** @type {null} */
    this.interval = null;
    left.subscribe("soundstream/finished", function() {
      clearInterval(this.interval);
      this.informAttachment("finished");
    }.bind(this));
  };
  patch(render.prototype, {
    /**
     * @param {?} src
     * @param {?} value
     * @return {undefined}
     */
    setAudio : function(src, value) {
      this.src = src;
      this.arbiterInstance = value;
    },
    /**
     * @param {string} status
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    informAttachment : function(status, deepDataAndEvents) {
      if (this.arbiterInstance) {
        this.arbiterInstance.inform(status, deepDataAndEvents);
      }
    },
    /**
     * @return {undefined}
     */
    play : function() {
      this.swf.playSound(this.src);
      /** @type {number} */
      this.interval = setInterval(function() {
        var deepDataAndEvents = this.swf.getCurrentTime();
        this.informAttachment("playing", deepDataAndEvents);
      }.bind(this), interval);
      this.informAttachment("played");
    },
    /**
     * @return {undefined}
     */
    resume : function() {
      this.swf.resume();
      this.informAttachment("played");
    },
    /**
     * @return {undefined}
     */
    pause : function() {
      clearInterval(this.interval);
      this.swf.pause();
      this.informAttachment("paused");
    },
    /**
     * @return {?}
     */
    getType : function() {
      return "flash";
    }
  });
  /** @type {null} */
  var self = null;
  /** @type {null} */
  var audio_id = null;
  /** @type {number} */
  var u = 0;
  patch($.prototype, {
    /**
     * @return {?}
     */
    getType : function() {
      if (!self) {
        return false;
      } else {
        return self.getType();
      }
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    play : function(expectedHashCode) {
      if (expectedHashCode && audio_id == this.audio_id) {
        self.resume();
      } else {
        this.pause();
        audio_id = this.audio_id;
        self.setAudio(this.src, this.arbiterInstance);
        self.play();
      }
    },
    /**
     * @return {undefined}
     */
    pause : function() {
      self.pause();
    }
  });
  /** @type {function (?, ?): ?} */
  module.exports = $;
}, null);
__d("MercuryShareAttachmentRenderLocations", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    CHAT : "chat",
    CHAT_PREVIEW : "chat_preview",
    MESSENGER : "messenger",
    /**
     * @return {?}
     */
    getValues : function() {
      return[JsDiff.CHAT, JsDiff.CHAT_PREVIEW, JsDiff.MESSENGER];
    },
    /**
     * @param {string} location
     * @return {?}
     */
    isPreview : function(location) {
      return location === JsDiff.CHAT_PREVIEW;
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryAttachmentAudioClip.react", ["Arbiter", "ArbiterMixin", "MercuryAudioPlayer", "CurrentUser", "JSLogger", "LeftRight.react", "MercuryShareAttachmentRenderLocations", "React", "SubscriptionsHandler", "cx", "fbt", "joinClasses", "shield"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, m, deepDataAndEvents, TagLoader, a, activator, label, data, dh, dataAndEvents, execResult, opt_keys, get, setState) {
  /** @type {string} */
  var msg = "MercuryAttachmentAudioClip/play";
  var that = activator.create("mercury_audio_clip");
  var JsDiff = dh.createClass({
    displayName : "AudioClip",
    mixins : [deepDataAndEvents],
    propTypes : {
      duration : dh.PropTypes.number,
      location : dh.PropTypes.oneOf(data.getValues()),
      rootClassName : dh.PropTypes.string,
      showHelp : dh.PropTypes.bool,
      src : dh.PropTypes.string.isRequired,
      width : dh.PropTypes.number
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      /** @type {boolean} */
      this.logged = false;
      var audioPlayer = this.props.downloadOnly ? false : new TagLoader(this.props.src, this);
      return{
        time : 0,
        playing : false,
        started : false,
        duration : this.props.duration,
        audioPlayer : audioPlayer
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this._subscriptionsHandler = new dataAndEvents;
      this._subscriptionsHandler.addSubscriptions(this.subscribe("playing", this.updateTime), this.subscribe("played", setState(this.setState, this, {
        playing : true,
        started : true
      })), this.subscribe("paused", setState(this.setState, this, {
        playing : false
      })), this.subscribe("finished", setState(this.setState, this, {
        playing : false,
        started : false,
        time : this.props.duration
      })), m.subscribe(msg, function(dataAndEvents, src) {
        if (this.props.src != src) {
          this.setState({
            time : 0
          });
        }
      }.bind(this)));
    },
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      if (this._subscriptionsHandler) {
        this._subscriptionsHandler.release();
      }
    },
    /**
     * @param {?} e
     * @param {number} time
     * @return {undefined}
     */
    updateTime : function(e, time) {
      this.setState({
        time : time
      });
    },
    /**
     * @return {undefined}
     */
    play : function() {
      if (this.state.playing) {
        this.state.audioPlayer.pause();
      } else {
        this.state.audioPlayer.play(this.state.started);
        m.inform(msg, this.props.src);
        if (!this.logged) {
          /** @type {boolean} */
          this.logged = true;
          that.log("play", {
            uid : a.getID(),
            duration : this.props.duration
          });
        }
      }
    },
    /**
     * @param {number} number
     * @return {?}
     */
    _formatSeconds : function(number) {
      if (number) {
        /** @type {number} */
        number = Math.ceil(number);
        /** @type {number} */
        var b = number % 60;
        if (b < 10) {
          /** @type {string} */
          b = "0" + b;
        }
        /** @type {number} */
        var a = Math.floor(number / 60);
        return a + ":" + b;
      } else {
        return null;
      }
    },
    /**
     * @param {number} value
     * @param {?} values
     * @return {?}
     */
    _renderPlayer : function(value, values) {
      return dh.createElement("a", {
        className : "_1miz _2e-1",
        href : "#",
        style : {
          width : value
        },
        onClick : this.play
      }, dh.createElement("span", {
        className : "_1mi- _2e-2"
      }, dh.createElement("i", {
        className : "_1mi_ _2e-3"
      })), dh.createElement("span", {
        className : "_1mj0 _2e-4"
      }, values), dh.createElement("div", {
        className : "_1mj1 _2e-5"
      }));
    },
    /**
     * @return {?}
     */
    render : function() {
      var time = this.state.time;
      var query = this.state.playing;
      var progressValues = this._formatSeconds(this.state.duration);
      var udataCur = this.props.width || 170;
      /** @type {null} */
      var result = null;
      /** @type {number} */
      var w = Math.ceil(time * (udataCur + 2) / this.state.duration);
      if (this.state.audioPlayer && this.state.audioPlayer.getType()) {
        var handler = this._renderPlayer(udataCur, progressValues);
        var showLink = this._renderPlayer(udataCur, progressValues);
        /** @type {string} */
        var cls = "_1mj2" + (" " + "_2e-6") + (query && time !== 0 ? " " + "_1mj3" : "") + (query && time === 0 ? " " + "_4g4x" : "");
        result = dh.createElement("div", {
          className : cls
        }, handler, dh.createElement("div", {
          className : "_1mj4 _2e-7",
          style : {
            width : w
          }
        }, showLink));
      } else {
        result = dh.createElement("div", {
          className : "_1mj2"
        }, dh.createElement("div", {
          className : "_1miz"
        }, dh.createElement(label, null, dh.createElement("a", {
          className : "_1mj5",
          href : this.props.src
        }, dh.createElement("span", {
          className : "_3qi6"
        }, dh.createElement("i", {
          className : "_1mj6"
        })), dh.createElement("span", {
          className : "_1mj7"
        }, "Voice Message"), dh.createElement("span", {
          className : "_1mj8"
        }, progressValues)), dh.createElement("a", {
          href : this.props.src,
          className : "_1mj9"
        }, dh.createElement("i", {
          className : "_1mja"
        })))));
      }
      return dh.createElement("div", {
        className : get("_1mjb", this.props.rootClassName)
      }, result);
    }
  });
  module.exports = JsDiff;
}, null);
__d("XMessageTranscriptController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/fetch_transcript/", {
    message_id : {
      type : "String",
      required : true
    }
  });
}, null);
__d("StarsInput.react", ["React", "TooltipLink.react", "cx", "fbt"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, self, elem, opt_attributes, matcherFunction) {
  var JsDiff = self.createClass({
    displayName : "StarsInput",
    propTypes : {
      allowMultipleSubmissions : self.PropTypes.bool,
      onClick : self.PropTypes.func.isRequired,
      starLabels : self.PropTypes.array
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        allowMultipleSubmissions : false,
        starLabels : ["Poor", "Fair", "Good", "Very Good", "Excellent"]
      };
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        starRating : 0,
        starsShown : 0,
        canUpdate : true
      };
    },
    /**
     * @param {string} pair
     * @return {?}
     */
    _getStarRating : function(pair) {
      return parseInt(pair.split(".").pop(), 10) + 1;
    },
    /**
     * @param {?} event
     * @return {undefined}
     */
    onMouseEnter : function(event) {
      if (this.state.canUpdate) {
        this.setState({
          starsShown : this._getStarRating(event.dispatchMarker)
        });
      }
    },
    /**
     * @param {?} e
     * @return {undefined}
     */
    onMouseLeave : function(e) {
      if (this.state.canUpdate) {
        var pos = this.state.starRating;
        this.setState({
          starsShown : pos
        });
      }
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    onClick : function(expectedHashCode) {
      if (this.state.canUpdate) {
        var r20 = this._getStarRating(expectedHashCode.dispatchMarker);
        this.setState({
          starRating : r20,
          starsShown : r20,
          canUpdate : this.props.allowMultipleSubmissions
        });
        this.props.onClick(r20);
      }
    },
    /**
     * @return {?}
     */
    getStars : function() {
      var valuesLen = this.props.starLabels.length;
      /** @type {Array} */
      var nodes = [];
      /** @type {number} */
      var i = 0;
      for (;i < valuesLen;i++) {
        nodes.push(self.createElement(elem, {
          className : "mls" + (" " + "_22mm") + (i >= this.state.starsShown ? " " + "_22mn" : "") + (i < this.state.starsShown ? " " + "_22mo" : "") + (!this.state.canUpdate ? " " + "_1g87" : ""),
          tooltip : this.props.starLabels[i],
          onMouseEnter : this.onMouseEnter,
          onMouseLeave : this.onMouseLeave,
          onClick : this.onClick,
          position : "above",
          alignH : "center"
        }));
      }
      return nodes;
    },
    /**
     * @return {?}
     */
    render : function() {
      return self.createElement("div", null, this.getStars());
    }
  });
  module.exports = JsDiff;
}, null);
__d("Stars.react", ["React", "cx"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, self, opt_attributes) {
  /** @type {number} */
  var percentComplete = 4;
  /** @type {Array} */
  var prevSources = ["emptyStar", "onefourthStar", "halfStar", "threefourthsStar", "fullStar"];
  var JsDiff = self.createClass({
    displayName : "Stars",
    propTypes : {
      count : self.PropTypes.number.isRequired,
      max : self.PropTypes.number,
      size : self.PropTypes.oneOf(["small", "large"]),
      title : self.PropTypes.string
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        max : 5,
        size : "small"
      };
    },
    /**
     * @param {number} innerWidth
     * @return {?}
     */
    getNumSubStars : function(innerWidth) {
      return Math.round(innerWidth * percentComplete);
    },
    /**
     * @return {?}
     */
    render : function() {
      var bufLen = this.getNumSubStars(this.props.count);
      var millis = Array.apply(null, {
        length : this.props.max
      }).map(function(dataAndEvents, i) {
        return bufLen - i * percentComplete;
      }).map(function(offsetY) {
        return Math.max(0, Math.min(percentComplete, offsetY));
      }).map(function(i) {
        return self.createElement("i", {
          className : prevSources[i]
        });
      });
      /** @type {string} */
      var cls = "uiStars" + (this.props.size === "large" ? " " + "largeStars" : "");
      return self.createElement("div", {
        className : cls,
        title : this.props.title
      }, millis);
    }
  });
  module.exports = JsDiff;
}, null);
__d("XMessageTranscriptRatingController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/asr/transcript/rate/", {
    message_id : {
      type : "String",
      required : true
    },
    rating : {
      type : "Int",
      required : true
    }
  });
}, null);
__d("MercuryAttachmentAudioClipTranscript.react", ["AsyncRequest", "React", "XMessageTranscriptController", "MessageTranscriptWaitHandleState", "LoadingIndicator.react", "StarsInput.react", "Stars.react", "XMessageTranscriptRatingController", "MercuryConfig", "cx", "fbt"], function(textAlt, keepData, opt_attributes, matcherFunction, module, execResult, Parser, $, dataAndEvents, K, elem, regex, t, deepDataAndEvents, ignoreMethodDoesntExist, opt_keys, positionError) {
  var JsDiff = $.createClass({
    displayName : "Transcript",
    /**
     * @return {undefined}
     */
    fetchTranscript : function() {
      var str = dataAndEvents.getURIBuilder().setString("message_id", this.props.message_id).getURI();
      (new Parser(str)).setHandler(function(join) {
        var item = join.getPayload();
        this.setState({
          transcript : item.transcript ? item.transcript.text : null,
          transcriptState : item.status,
          transcriptRetryTimeout : item.retryTimeout,
          rating : item.rating
        });
        if (this.state.transcriptState === K.BUSY) {
          setTimeout(this.fetchTranscript, Math.max(this.state.transcriptRetryTimeout, 1E3));
        }
      }.bind(this)).send();
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this.fetchTranscript();
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        transcript : null,
        transcriptState : K.BUSY,
        transcriptRetryTimeout : null,
        rating : null
      };
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    _submitRating : function(expectedHashCode) {
      var options = deepDataAndEvents.getURIBuilder().setString("message_id", this.props.message_id).setInt("rating", expectedHashCode).getURI();
      (new Parser(options)).send();
    },
    /**
     * @return {?}
     */
    render : function() {
      var state = this.state.transcriptState;
      var pos = this.state.transcript;
      /** @type {null} */
      var result = null;
      /** @type {null} */
      var data = null;
      /** @type {null} */
      var text = null;
      if (state === K.READY) {
        result = $.createElement("p", null, pos);
        if (ignoreMethodDoesntExist.TranscriptRatingGK) {
          if (this.state.rating === null) {
            text = $.createElement(regex, {
              onClick : this._submitRating
            });
          } else {
            text = $.createElement(t, {
              count : this.state.rating
            });
          }
        }
      } else {
        if (state === K.UNAVAILABLE) {
          result = $.createElement("p", null, "Transcript unavailable");
        } else {
          if (state === K.BUSY) {
            data = $.createElement(elem, {
              size : "small",
              color : "white"
            });
          }
        }
      }
      return $.createElement("div", {
        className : "_44v-"
      }, result, text, data);
    }
  });
  module.exports = JsDiff;
}, null);
__d("MercuryThreadMetadataRawRenderer", ["Event", "CSS", "DOM", "MercuryActionStatus", "MercuryErrorInfo", "MercuryStatusTemplates", "Tooltip", "cx", "fbt"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, Event, content, d, el, record, dataAndEvents, view, matcherFunction, self) {
  var JsDiff = {
    /**
     * @param {?} deepDataAndEvents
     * @param {Function} _xhr
     * @param {Array} fields
     * @param {Array} buf
     * @param {Array} monitors
     * @param {Object} object
     * @return {undefined}
     */
    renderParticipantListWithNoThreadName : function(deepDataAndEvents, _xhr, fields, buf, monitors, object) {
      var payload = {
        callback : true,
        check_length : true,
        show_unread_count : true
      };
      object = object || {};
      var result = {};
      var key;
      for (key in object) {
        if (payload[key]) {
          result[key] = object[key];
          delete object[key];
        }
      }
      var camelKey = fields.map(function(off) {
        return buf[off];
      });
      var value = this.renderRawParticipantList(deepDataAndEvents, camelKey, fields.length, object);
      value = this.renderRawTitleWithUnreadCount(value, result.show_unread_count ? _xhr.unread_count : 0);
      var length = object.abbr_mode;
      var old = {};
      var name;
      for (name in object) {
        old[name] = object[name];
      }
      /** @type {boolean} */
      old.abbr_mode = true;
      monitors.forEach(function(el) {
        var content = monitors.length > 1 ? this._cloneIfDOMElement(value) : value;
        d.setContent(el, content);
        if (result.check_length && (!length && el.scrollWidth > el.clientWidth)) {
          var data = this.renderRawParticipantList(deepDataAndEvents, camelKey, fields.length, old);
          var args = this.renderRawTitleWithUnreadCount(data, result.show_unread_count ? _xhr.unread_count : 0);
          d.setContent(el, args);
        }
      }.bind(this));
      if (result.callback) {
        result.callback(value);
      }
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {Array} key
     * @param {number} i
     * @param {Object} obj
     * @return {?}
     */
    renderRawParticipantList : function(deepDataAndEvents, key, i, obj) {
      var names_renderer = {
        abbr_mode : true,
        last_separator_uses_and : true,
        names_renderer : true
      };
      obj = obj || {};
      /** @type {null} */
      var args = null;
      if (obj.names_renderer) {
        args = obj.names_renderer(key);
      } else {
        args = key.map(function(unused) {
          return unused.name;
        });
      }
      /** @type {null} */
      var a = null;
      if (args.length === 0) {
        if (!deepDataAndEvents) {
          /** @type {string} */
          a = "New Message";
        } else {
          /** @type {string} */
          a = "No Participants";
        }
      } else {
        if (args.length == 1) {
          a = args[0];
        } else {
          if (args.length == 2) {
            if (obj.last_separator_uses_and) {
              a = self._("{participant1} and {participant2}", [self.param("participant1", args[0]), self.param("participant2", args[1])]);
            } else {
              a = self._("{participant1}, {participant2}", [self.param("participant1", args[0]), self.param("participant2", args[1])]);
            }
          } else {
            if (obj.last_separator_uses_and) {
              if (obj.abbr_mode) {
                a = self._("{participant1} and {others_link}", [self.param("participant1", args[0]), self.param("others_link", this.renderRawParticipantCount({
                  render_subset : true,
                  count : i - 1
                }))]);
              } else {
                if (args.length == 3) {
                  a = self._("{participant1}, {participant2} and {participant3}", [self.param("participant1", args[0]), self.param("participant2", args[1]), self.param("participant3", args[2])]);
                } else {
                  a = self._("{participant1}, {participant2} and {others_link}", [self.param("participant1", args[0]), self.param("participant2", args[1]), self.param("others_link", this.renderRawParticipantCount({
                    render_subset : true,
                    count : i - 2
                  }))]);
                }
              }
            } else {
              if (args.length == 3) {
                a = self._("{participant1}, {participant2}, {participant3}", [self.param("participant1", args[0]), self.param("participant2", args[1]), self.param("participant3", args[2])]);
              } else {
                a = self._("{participant1}, {participant2}, {participant3}, {others_link}", [self.param("participant1", args[0]), self.param("participant2", args[1]), self.param("participant3", args[2]), self.param("others_link", this.renderRawParticipantCount({
                  render_subset : true,
                  count : i - 3
                }))]);
              }
            }
          }
        }
      }
      if (Array.isArray(a)) {
        a = d.create("span", {}, a);
      }
      return a;
    },
    /**
     * @param {?} value
     * @param {number} fn
     * @return {?}
     */
    renderRawTitleWithUnreadCount : function(value, fn) {
      var wrapper = value;
      if (fn && fn > 1) {
        wrapper = d.create("span", {}, self._("{conversation_title} ({unread_count})", [self.param("conversation_title", value), self.param("unread_count", fn)]));
      }
      return wrapper;
    },
    /**
     * @param {Object} opt_attributes
     * @return {?}
     */
    renderRawParticipantCount : function(opt_attributes) {
      var render_subset = opt_attributes.render_subset;
      var renderRawParticipantCount;
      if (!render_subset) {
        renderRawParticipantCount = opt_attributes.count > 1 ? self._("{num} people", [self.param("num", opt_attributes.count)]) : "1 person";
      } else {
        renderRawParticipantCount = opt_attributes.count > 1 ? self._("{others_count} others", [self.param("others_count", opt_attributes.count)]) : "1 other";
      }
      return renderRawParticipantCount;
    },
    /**
     * @param {Array} key
     * @return {?}
     */
    renderShortNames : function(key) {
      if (key.length == 1) {
        return[key[0].name];
      }
      return key.map(function(i) {
        return i.short_name;
      });
    },
    /**
     * @param {?} tagName
     * @param {?} field
     * @param {Object} initial
     * @return {?}
     */
    renderStatusIndicator : function(tagName, field, initial) {
      var value;
      if (tagName == el.RESENDING) {
        value = this.renderResendIndicator();
      } else {
        if (tagName !== void 0 && (tagName != el.UNSENT && (tagName != el.UNCONFIRMED && tagName != el.SUCCESS))) {
          value = this.renderErrorIndicator(field, initial);
        }
      }
      return value;
    },
    /**
     * @return {?}
     */
    renderResendIndicator : function() {
      return dataAndEvents[":fb:mercury:resend-indicator"].render();
    },
    /**
     * @param {?} name
     * @param {Object} obj
     * @return {?}
     */
    renderErrorIndicator : function(name, obj) {
      if (!name) {
        return null;
      }
      var button = dataAndEvents[":fb:mercury:error-indicator"].render();
      var storedAltContent = name.is_transient;
      var fn = record.getMessage(name);
      if (storedAltContent) {
        if (record.isConnectionError(name)) {
          fn = self._("{message} Check your internet connection and click to try again.", [self.param("message", fn)]);
        } else {
          fn = self._("{message} Click to send again.", [self.param("message", fn)]);
        }
      }
      view.set(button, fn, "above", "center");
      if (obj && storedAltContent) {
        Event.listen(button, "click", obj);
        button.setAttribute("tabindex", "0");
        content.addClass(button, "_55q-");
      }
      return button;
    },
    /**
     * @param {Object} putativeSpy
     * @return {?}
     */
    _cloneIfDOMElement : function(putativeSpy) {
      if (putativeSpy && putativeSpy.cloneNode) {
        return putativeSpy.cloneNode();
      } else {
        return putativeSpy;
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("MessagingRecipientTypeaheadItem.react", ["BackgroundImage.react", "ChatTypeaheadConstants", "ImageBlock.react", "LeftRight.react", "React", "SplitImage.react", "MercuryThreadMetadataRawRenderer", "TypeaheadViewItem", "cx", "joinClasses"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, attribute, deepDataAndEvents, tr, type, dom, a, dataAndEvents, NumberTextBox, execResult, requestAnimationFrame) {
  var JsDiff = dom.createClass({
    displayName : "MessagingRecipientTypeaheadItem",
    propTypes : Object.assign({}, NumberTextBox.propTypes, {
      imageSize : dom.PropTypes.number.isRequired
    }),
    mixins : [NumberTextBox.Mixin],
    /**
     * @return {?}
     */
    isThreadRecipient : function() {
      return this.props.entry.getType() === deepDataAndEvents.THREAD_TYPE;
    },
    /**
     * @return {?}
     */
    _getImage : function() {
      var name = this.props.entry;
      if (name.getType() === deepDataAndEvents.THREAD_TYPE && !name.getPhoto()) {
        var body = name.getAuxiliaryData();
        return dom.createElement(a, {
          size : this.props.imageSize,
          srcs : body.participantsToRender.map(function(dataAndEvents) {
            return dataAndEvents.image_src;
          })
        });
      }
      if (name.getPhoto()) {
        return dom.createElement(attribute, {
          width : this.props.imageSize,
          height : this.props.imageSize,
          backgroundSize : "cover",
          src : name.getPhoto()
        });
      }
      return dom.createElement("span", null);
    },
    /**
     * @return {?}
     */
    _getThreadParticipantList : function() {
      if (!this.isThreadRecipient()) {
        return null;
      }
      var entry = this.props.entry;
      return dataAndEvents.renderRawParticipantList(entry.getUniqueID(), entry.getAuxiliaryData().participantsToRender, entry.getAuxiliaryData().thread.participants.length - 1, {
        names_renderer : dataAndEvents.renderShortNames
      });
    },
    /**
     * @return {?}
     */
    _getTitle : function() {
      var p = this.props.entry;
      if (this.isThreadRecipient() && !p.getTitle()) {
        return this._getThreadParticipantList();
      }
      return p.getTitle();
    },
    /**
     * @return {?}
     */
    _getSubtitle : function() {
      var p = this.props.entry;
      if (this.isThreadRecipient() && !p.getTitle()) {
        return this._getThreadParticipantList();
      }
      return p.getSubtitle() ? p.getSubtitle().split(" \u00b7 ")[0] : null;
    },
    /**
     * @return {?}
     */
    render : function() {
      var MSG_TEX_EDITOR = this._getSubtitle();
      var id = requestAnimationFrame("_599m" + (" " + "_55xn") + (!MSG_TEX_EDITOR ? " " + "_5mne" : "") + (this.props.highlighted ? " " + "_599n" : ""), this.props.className);
      return dom.createElement("li", {
        "aria-selected" : this.props.selected,
        className : id,
        onMouseDown : this._onSelect,
        onMouseEnter : this._onHighlight,
        role : this.props.role
      }, dom.createElement(tr, {
        spacing : "medium"
      }, this._getImage(), dom.createElement(type, null, dom.createElement("div", null, dom.createElement("div", {
        className : "_55xt _599p"
      }, this._getTitle()), dom.createElement("div", {
        className : "_55z3 _599q"
      }, MSG_TEX_EDITOR)), this.props.children)));
    }
  });
  module.exports = JsDiff;
}, null);
__d("MessagingRecipientSelectedList.react", ["Image.react", "LeftRight.react", "Map", "MessagingRecipientTypeaheadItem.react", "React", "cx", "fbt", "xuiglyph"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, type, t, logger, attribute, self, opt_attributes, matcherFunction, parse) {
  var JsDiff = self.createClass({
    displayName : "MessagingRecipientSelectedList",
    propTypes : {
      entries : self.PropTypes.instanceOf(logger),
      onSelect : self.PropTypes.func.isRequired
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    _renderSelectedEntry : function(deepDataAndEvents) {
      var url = parse({
        name : "cross",
        shade : "dark",
        size : "small"
      });
      return self.createElement(attribute, {
        key : deepDataAndEvents.getUniqueID(),
        entry : deepDataAndEvents,
        imageSize : 24,
        onSelect : this.props.onSelect
      }, self.createElement(type, {
        className : "_1jm4",
        src : url
      }));
    },
    /**
     * @return {?}
     */
    render : function() {
      /** @type {string} */
      var millis = "Selected";
      /** @type {Array} */
      var version = [];
      this.props.entries.forEach(function(deepDataAndEvents) {
        return version.push(this._renderSelectedEntry(deepDataAndEvents));
      }.bind(this));
      return self.createElement("div", {
        className : "_1jm5"
      }, self.createElement(t, {
        className : "_1jm6 _2ph-"
      }, self.createElement("span", null, millis), self.createElement("span", null, this.props.entries.size)), self.createElement("ul", null, version));
    }
  });
  module.exports = JsDiff;
}, null);
__d("MessagingRecipientTypeaheadView.react", ["CenteredContainer.react", "Link.react", "Map", "MessagingRecipientTypeaheadItem.react", "React", "TypeaheadViewPropTypes", "XUISpinner.react", "cx", "fbt"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, attribute, type, logger, property, self, map, t, opt_attributes, matcherFunction) {
  /** @type {number} */
  var number0 = 32;
  var JsDiff = self.createClass({
    displayName : "MessagingRecipientTypeaheadView",
    propTypes : Object.assign({}, map, {
      selectedEntries : self.PropTypes.instanceOf(logger),
      loading : self.PropTypes.bool
    }),
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        role : "listbox"
      };
    },
    /**
     * @param {Object} item
     * @return {?}
     */
    _renderItem : function(item) {
      /** @type {boolean} */
      var highlighted = item === this.props.highlightedEntry;
      var checked = this.props.selectedEntries.has(item.getUniqueID());
      return self.createElement(property, {
        key : item.getUniqueID(),
        entry : item,
        highlighted : highlighted,
        imageSize : number0,
        selected : checked,
        onSelect : this.props.onSelect,
        onHighlight : this.props.onHighlight,
        onRenderHighlight : this.props.onRenderHighlight
      }, self.createElement(type, {
        "aria-checked" : checked,
        className : "_1v32" + (checked ? " " + "_1v33" : "") + (!checked ? " " + "_1v34" : ""),
        href : "#",
        role : "checkbox",
        tabIndex : "0"
      }));
    },
    /**
     * @return {?}
     */
    render : function() {
      if (this.props.entries.length === 0 && !this.props.loading) {
        return self.createElement(attribute, {
          className : "_2pi1"
        }, "No results");
      }
      return self.createElement("ul", {
        id : this.props.ariaOwneeID,
        className : "_51do",
        role : this.props.role
      }, this.props.entries.map(this._renderItem), self.createElement("div", {
        className : "_51dq"
      }, this.props.loading ? self.createElement(t, null) : null));
    }
  });
  module.exports = JsDiff;
}, null);
__d("XMessagingForwardAttachmentController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/mercury/attachments/forward/", {});
}, null);
__d("MessagingForwardAttachmentDialog.react", ["AsyncRequest", "ChatMiniSidebarSearchSource", "Image.react", "LayerFadeOnHide", "Layout.react", "Map", "MessagingRecipientSelectedList.react", "MessagingRecipientTypeaheadView.react", "OrderedFriendsList", "React", "SearchableTextInput.react", "ScrollableArea.react", "XMessagingForwardAttachmentController", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogCancelButton.react", "XUIDialogFooter.react", "XUIDialogTitle.react",
"XUISpinner.react", "cx", "fbt", "xuiglyph"], function(ignoreMethodDoesntExist, matcherFunction, execResult, opt_keys, module, positionError, Stack, deepDataAndEvents, el, textAlt, elem, dataAndEvents, style, data, keepData, $, type, element, opt_attributes, t, what, tagType, section, s, template, o, oFunctionBody, _$timeout_, parse) {
  var options = elem.Column;
  var attrs = elem.FillColumn;
  var JsDiff = $.createClass({
    displayName : "MessagingForwardAttachmentDialog",
    propTypes : {
      attachmentID : $.PropTypes.string.isRequired,
      onClose : $.PropTypes.func,
      shown : $.PropTypes.bool.isRequired,
      title : $.PropTypes.string.isRequired
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        bootstrappedEntries : [],
        entries : [],
        loading : true,
        selectedEntries : new dataAndEvents,
        sendError : null,
        sending : false,
        startingThreadingID : Date.now(),
        query : ""
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this._dataSource = new deepDataAndEvents({
        queryRequests : [{
          uri : "/ajax/mercury/composer_query.php"
        }]
      });
      keepData.getSearchableEntries(20, function(dataAndEvents) {
        this.setState({
          bootstrappedEntries : dataAndEvents,
          loading : false
        });
      }.bind(this));
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    _onSelectEntry : function(expectedHashCode) {
      var name = expectedHashCode.getUniqueID();
      var scope = new dataAndEvents(this.state.selectedEntries);
      if (scope.has(name)) {
        scope["delete"](name);
      } else {
        scope.set(name, expectedHashCode);
      }
      this.setState({
        selectedEntries : scope
      });
    },
    /**
     * @param {Event} evt
     * @return {undefined}
     */
    _onSearchChange : function(evt) {
      var q = evt.target.value;
      this.setState({
        loading : true,
        query : q
      });
    },
    /**
     * @param {Object} entries
     * @return {undefined}
     */
    _onSearchEntriesFound : function(entries) {
      this.setState({
        entries : entries
      });
    },
    /**
     * @param {string} exp
     * @return {undefined}
     */
    _onSearchFinished : function(exp) {
      if (exp === this.state.query) {
        this.setState({
          loading : false
        });
      }
    },
    /**
     * @return {undefined}
     */
    _onSubmit : function() {
      var segments = {};
      var pos = this.state.startingThreadingID;
      this.state.selectedEntries.forEach(function(dataAndEvents) {
        segments[pos++] = dataAndEvents.getUniqueID();
      });
      var head = opt_attributes.getURIBuilder().getURI();
      (new Stack(head)).setMethod("POST").setHandler(this._onSubmitResponse).setData({
        attachment_id : this.props.attachmentID,
        recipient_map : segments
      }).send();
      this.setState({
        sending : true,
        sendError : null
      });
    },
    /**
     * @param {Object} res
     * @return {undefined}
     */
    _onSubmitResponse : function(res) {
      if (res.payload.success) {
        if (this.props.onClose) {
          this.props.onClose();
        }
        this.setState({
          bootstrappedEntries : [],
          selectedEntries : new dataAndEvents,
          sending : false,
          startingThreadID : Date.now(),
          query : ""
        });
        return;
      }
      this.setState({
        sending : false,
        sendError : res.payload.error
      });
    },
    /**
     * @return {?}
     */
    render : function() {
      /** @type {string} */
      var lab = "Send Message";
      if (this.state.selectedEntries.size > 1) {
        /** @type {string} */
        lab = "Send Messages";
      }
      /** @type {null} */
      var d = null;
      if (this.state.sending) {
        d = $.createElement("div", null, $.createElement(o, null), $.createElement("span", {
          className : "_5s0d _3-99"
        }, "Sending"));
      } else {
        if (this.state.sendError) {
          var url = parse({
            name : "error-solid",
            shade : "dark",
            size : "medium"
          });
          d = $.createElement("div", {
            className : "_5s0d"
          }, $.createElement(el, {
            src : url
          }), $.createElement("span", {
            className : "_3-99"
          }, this.state.sendError));
        }
      }
      return $.createElement(t, {
        shown : this.props.shown,
        behaviors : {
          LayerFadeOnHide : textAlt
        },
        width : 560
      }, $.createElement(template, null, this.props.title), $.createElement(what, {
        useCustomPadding : true
      }, $.createElement(elem, null, $.createElement(options, {
        className : "_5s0e"
      }, $.createElement("div", {
        className : "_2ph_"
      }, $.createElement(type, {
        className : "_5s0f",
        onChange : this._onSearchChange,
        onEntriesFound : this._onSearchEntriesFound,
        placeholder : "Search",
        queryString : this.state.query,
        searchSource : this._dataSource,
        searchSourceOptions : {
          onQueryFinished : this._onSearchFinished
        }
      })), $.createElement(element, {
        className : "_5s0g",
        fade : true,
        height : 400,
        width : 360
      }, $.createElement(data, {
        entries : this.state.query ? this.state.entries : this.state.bootstrappedEntries,
        loading : this.state.loading,
        selectedEntries : this.state.selectedEntries,
        onSelect : this._onSelectEntry
      }))), $.createElement(attrs, {
        className : "_5s0h"
      }, $.createElement(element, {
        fade : true,
        height : 457,
        shadow : false
      }, $.createElement(style, {
        entries : this.state.selectedEntries,
        onSelect : this._onSelectEntry
      }))))), $.createElement(s, {
        leftContent : d
      }, $.createElement(section, null), $.createElement(tagType, {
        use : "confirm",
        disabled : !this.state.selectedEntries.size || this.state.sending,
        label : lab,
        onClick : this._onSubmit
      })));
    }
  });
  module.exports = JsDiff;
}, null);
__d("Spotlight.react", ["LayerHideOnBlur", "LayerHideOnEscape", "ReactLayer", "Spotlight"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, dataAndEvents, deepDataAndEvents, React, Assertion) {
  var JsDiff = React.createClass({
    /**
     * @return {?}
     */
    getDefaultEnabledBehaviors : function() {
      return{
        hideOnBlur : dataAndEvents,
        hideOnEscape : deepDataAndEvents
      };
    },
    /**
     * @param {?} msg
     * @return {?}
     */
    createLayer : function(msg) {
      var addedBehaviors = this.enumerateBehaviors(this.props.behaviors);
      var exp = {
        addedBehaviors : addedBehaviors,
        rootClassName : this.props.rootClassName
      };
      var obj = new Assertion(exp, msg);
      obj.conditionShow(this.props.shown);
      if (this.props.onBeforeHide) {
        obj.subscribe("beforehide", this.props.onBeforeHide);
      }
      if (this.props.onHide) {
        obj.subscribe("hide", this.props.onHide);
      }
      return obj;
    },
    /**
     * @param {?} msg
     * @return {undefined}
     */
    receiveProps : function(msg) {
      this.layer.conditionShow(msg.shown);
    }
  });
  module.exports = JsDiff;
}, null);
__d("SpotlightViewer", ["React", "ReactLayeredComponentMixin", "Spotlight.react", "cx"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dom, dataAndEvents, type, matcherFunction) {
  var JsDiff = dom.createClass({
    displayName : "SpotlightViewer",
    mixins : [dataAndEvents],
    /**
     * @return {?}
     */
    renderLayers : function() {
      if (!this.props.open) {
        return null;
      }
      /** @type {string} */
      var cls = "_n3";
      if (this.props.className) {
        cls += " " + this.props.className;
      }
      return{
        photoLayer : dom.createElement(type, {
          onBeforeHide : this.props.onBeforeHide,
          onHide : this.props.onHide,
          rootClassName : this.props.rootClassName,
          shown : this.props.open
        }, dom.createElement("div", {
          className : cls,
          onClick : this.props.onClick
        }, this.props.children))
      };
    },
    /**
     * @return {?}
     */
    render : function() {
      return dom.createElement("div", null);
    }
  });
  module.exports = JsDiff;
}, null);
__d("SpotlightViewerAutoResize", ["Event", "SubscriptionsHandler", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, m, dataAndEvents, sync) {
  /**
   * @param {?} state
   * @return {undefined}
   */
  function $(state) {
    this.$SpotlightViewerAutoResize0 = state;
    sync(typeof this.$SpotlightViewerAutoResize0.onResize === "function");
  }
  /**
   * @return {undefined}
   */
  $.prototype.enable = function() {
    this.$SpotlightViewerAutoResize1 = new dataAndEvents;
    this.$SpotlightViewerAutoResize1.addSubscriptions(m.listen(window, "resize", this.$SpotlightViewerAutoResize0.onResize.bind(this.$SpotlightViewerAutoResize0)));
  };
  /**
   * @return {undefined}
   */
  $.prototype.disable = function() {
    this.$SpotlightViewerAutoResize1.release();
    delete this.$SpotlightViewerAutoResize1;
  };
  /** @type {function (?): undefined} */
  module.exports = $;
}, null);
__d("SpotlightViewerBehaviorsMixin", ["BehaviorsMixin", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, mongoObject, callback) {
  var unique = {
    /**
     * @return {undefined}
     */
    componentWillMount : function() {
      if (this.behaviors) {
        this.enableBehaviors(this.behaviors);
      }
    },
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      this.destroyBehaviors();
    }
  };
  callback(unique, mongoObject);
  module.exports = unique;
}, null);
__d("SpotlightViewerBottomBar", ["LeftRight.react", "React", "cx", "joinClasses"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, type, self, opt_attributes, callback) {
  var JsDiff = self.createClass({
    displayName : "SpotlightViewerBottomBar",
    /**
     * @return {?}
     */
    render : function() {
      var value = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
      /** @type {string} */
      var basis = "_4_8n _51an";
      if (this.props.className) {
        basis = callback(basis, this.props.className);
      }
      if (value.length === 1) {
        return self.createElement("div", {
          className : basis
        }, value[0]);
      }
      basis = callback(basis, "_50-m");
      return self.createElement(type, {
        className : basis
      }, value[0], value[1]);
    }
  });
  module.exports = JsDiff;
}, null);
__d("SpotlightViewerBottomBarGroup", ["React", "cx"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, self, opt_attributes) {
  var JsDiff = self.createClass({
    displayName : "SpotlightViewerBottomBarGroup",
    /**
     * @return {?}
     */
    render : function() {
      var dir = this.props.itemmargin || "right";
      /** @type {string} */
      var cls = (dir == "left" ? "marginLeft" : "") + (dir == "right" ? " " + "marginRight" : "") + (" " + "_4_8i");
      return self.createElement("div", {
        className : cls
      }, this.props.children);
    }
  });
  module.exports = JsDiff;
}, null);
__d("SpotlightViewerBottomBarLink", ["Link.react", "React", "cx"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, type, DOM, opt_attributes) {
  var JsDiff = DOM.createClass({
    displayName : "SpotlightViewerBottomBarLink",
    /**
     * @return {?}
     */
    render : function() {
      return DOM.createElement(type, DOM.__spread({}, this.props, {
        className : "_4_8j _4_8k"
      }), this.props.children);
    }
  });
  module.exports = JsDiff;
}, null);
__d("SpotlightViewerPagers", ["LeftRight.react", "Link.react", "React", "cx"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, type, value, self, opt_attributes) {
  var JsDiff = self.createClass({
    displayName : "SpotlightViewerPagers",
    /**
     * @return {?}
     */
    render : function() {
      return self.createElement(type, null, self.createElement(value, {
        className : "_4-oa _4-ob _50-m"
      }), self.createElement(value, {
        className : "_4-oa _4-oc _50-m"
      }));
    }
  });
  module.exports = JsDiff;
}, null);
__d("SpotlightViewerPageWithKeys", ["KeyEventController", "SubscriptionsHandler"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, event, dataAndEvents) {
  /**
   * @param {?} topic
   * @return {undefined}
   */
  function exp(topic) {
    this.$SpotlightViewerPageWithKeys0 = topic;
  }
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    this.$SpotlightViewerPageWithKeys1 = new dataAndEvents;
    this.$SpotlightViewerPageWithKeys1.addSubscriptions(event.registerKey("LEFT", function() {
      this.$SpotlightViewerPageWithKeys0.viewState.backward();
      return false;
    }.bind(this)), event.registerKey("RIGHT", function() {
      this.$SpotlightViewerPageWithKeys0.viewState.forward();
      return false;
    }.bind(this)));
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    this.$SpotlightViewerPageWithKeys1.release();
    delete this.$SpotlightViewerPageWithKeys1;
  };
  /** @type {function (?): undefined} */
  module.exports = exp;
}, null);
__d("SpotlightViewerThumbnailMixin", ["PhotoStore", "Vector"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, props, store) {
  var JsDiff = {
    /**
     * @return {?}
     */
    _getInitialPhotoData : function() {
      var camelKey = props.getIndexForID(this.props.setid, this.props.photoid);
      var data = props.getByIndexImmediate(this.props.setid, camelKey);
      return data ? data : this._getThumbnailPhotoData();
    },
    /**
     * @return {?}
     */
    _getThumbnailPhotoData : function() {
      if (!this.props.dimensions || !this.props.thumbsrc) {
        return null;
      }
      var obj = {
        id : this.props.photoid
      };
      /** @type {number} */
      var i = 0;
      for (;i < this.props.dimensions.length;++i) {
        var cfg = store.deserialize(this.props.dimensions[i]);
        obj["image" + i] = {
          width : cfg.x,
          height : cfg.y,
          uri : this.props.thumbsrc
        };
      }
      return obj;
    }
  };
  module.exports = JsDiff;
}, null);
__d("XMessagingPhotoDownloadController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/mercury/attachments/photo/", {
    photo_id : {
      type : "String",
      required : true
    }
  });
}, null);
__d("SpotlightMessagesViewer", ["ArbiterMixin", "MercuryConfig", "MessagingForwardAttachmentDialog.react", "PageTransitions", "React", "ReactLayeredComponentMixin", "SpotlightViewer", "SpotlightViewerAutoResize", "SpotlightViewerBehaviorsMixin", "SpotlightViewerBottomBar", "SpotlightViewerBottomBarGroup", "SpotlightViewerBottomBarLink", "SpotlightViewerClose", "SpotlightViewerCoreMixin", "SpotlightViewerDimensionMixin", "SpotlightViewerPagers", "SpotlightViewerPageWithKeys", "SpotlightViewerThumbnailMixin",
"SpotlightViewport", "SubscriptionsHandler", "XMessagingPhotoDownloadController", "fbt"], function(failing_message, nextStack, noCorrect, contextElem, module, stopHere, ignoreMethodDoesntExist, dataAndEvents, t, textAlt, self, keepData, template, opt_attributes, matcherFunction, s, value, type, label, execResult, opt_keys, attribute, positionError, oFunctionBody, property, deepDataAndEvents, _$timeout_, subKey) {
  var JsDiff = self.createClass({
    displayName : "SpotlightMessagesViewer",
    mixins : [ignoreMethodDoesntExist, keepData, matcherFunction, execResult, oFunctionBody, opt_keys],
    behaviors : [positionError, opt_attributes],
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      if (this._subscriptions) {
        this._subscriptions.release();
      }
      /** @type {null} */
      this._subscriptions = null;
    },
    /**
     * @return {?}
     */
    getViewerID : function() {
      return this.props.setid;
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      this._subscriptions = new deepDataAndEvents;
      return{
        photoData : this._getInitialPhotoData(),
        open : true,
        showForward : false
      };
    },
    /**
     * @return {undefined}
     */
    _enableSubscriptions : function() {
      if (this.props.useloadingindicator) {
        this._subscriptions.addSubscriptions(this.viewState.subscribe("photo_fetch", this.setState.bind(this, {
          photoData : null
        }, null)));
      }
    },
    /**
     * @return {undefined}
     */
    _showForwardDialog : function() {
      this.setState({
        showForward : true
      });
    },
    /**
     * @return {undefined}
     */
    _hideForwardDialog : function() {
      this.setState({
        showForward : false
      });
    },
    /**
     * @return {?}
     */
    renderLayers : function() {
      /** @type {string} */
      var MSG_CLOSURE_CUSTOM_COLOR_BUTTON = "Send this photo to friends";
      return{
        forwardDialog : self.createElement(t, {
          attachmentID : String(this.state.photoData.id),
          onClose : this._hideForwardDialog,
          shown : this.state.showForward,
          title : MSG_CLOSURE_CUSTOM_COLOR_BUTTON
        })
      };
    },
    /**
     * @return {?}
     */
    render : function() {
      var media = this.getMedia();
      var stageDimensions = this.getStageDimensions();
      var showLoadingIndicator = this.props.useloadingindicator && !this.state.photoData;
      textAlt.registerCompletionCallback(function() {
        if (this.state.open) {
          this.close();
        }
        return true;
      }.bind(this));
      return self.createElement(template, {
        rootClassName : this.props.rootClassName,
        open : this.state.open,
        onHide : this.close
      }, self.createElement(property, {
        onClick : this._onClickViewport,
        stageDimensions : stageDimensions,
        media : media,
        snapToPhoto : this.props.snapToPhoto,
        showLoadingIndicator : showLoadingIndicator
      }, self.createElement(label, {
        onClick : this.close
      }), this.props.disablepaging ? null : self.createElement(attribute, null), this._renderBottomBar()));
    },
    /**
     * @return {?}
     */
    _renderBottomBar : function() {
      var version = dataAndEvents.ForwardingEnabled ? self.createElement(type, {
        onClick : this._showForwardDialog
      }, "Send") : null;
      var ajaxify = _$timeout_.getURIBuilder().setString("photo_id", String(this.state.photoData.id)).getURI();
      return self.createElement(s, null, self.createElement(value, null), self.createElement(value, null, version, self.createElement(type, {
        rel : "async",
        ajaxify : ajaxify
      }, "Download")));
    }
  });
  module.exports = JsDiff;
}, null);
__d("MessagesViewer", ["AsyncRequest", "DOM", "MessagesViewerSetID", "PhotoStore", "React", "SpotlightMessagesViewer", "ge"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, m, domConstruct, elemData, object, d, style, html) {
  var $ = {
    /**
     * @param {Element} element
     * @return {undefined}
     */
    bootstrapWithElem : function(element) {
      $.bootstrapWithConfig({
        fbid : element.getAttribute("data-fbid"),
        dimensions : element.getAttribute("data-dimensions"),
        src : element.getAttribute("href"),
        endpoint : element.getAttribute("data-endpoint"),
        disablePaging : element.getAttribute("data-disablepaging")
      }, element);
    },
    /**
     * @param {Object} spec
     * @param {Element} allow
     * @return {undefined}
     */
    bootstrapWithConfig : function(spec, allow) {
      var events = spec.setID;
      if (!events) {
        events = elemData.MESSAGES;
      }
      var target = d.createElement(style, {
        open : true,
        setid : events,
        rootClassName : spec.rootClassName,
        snapToPhoto : spec.snapToPhoto,
        photoid : spec.fbid,
        thumbsrc : spec.src,
        dimensions : [spec.dimensions],
        disablepaging : spec.disablePaging,
        reverse : false
      });
      $.render(target);
      if (!object.hasBeenCreated(events) && spec.endpoint) {
        var res = new m(spec.endpoint);
        if (allow) {
          res.setRelativeTo(allow);
        }
        res.send();
      }
    },
    /**
     * @param {?} view
     * @return {undefined}
     */
    render : function(view) {
      var container = html("messages_viewer");
      if (!container) {
        container = domConstruct.create("div", {
          id : "messages_viewer"
        });
        document.body.appendChild(container);
      }
      view = d.render(view, container);
      view.subscribeOnce("close", function() {
        d.unmountComponentAtNode(container);
      });
    }
  };
  module.exports = $;
}, null);
__d("XMessagingVideoAttachmentController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/mercury/attachments/video/", {
    video_id : {
      type : "String",
      required : true
    },
    video_container_id : {
      type : "String",
      required : true
    },
    width : {
      type : "Int",
      required : true
    },
    height : {
      type : "Int",
      required : true
    }
  });
}, null);
__d("MessagingVideoViewer.react", ["ActorURI", "ArbiterMixin", "AsyncRequest", "MercuryConfig", "MessagingForwardAttachmentDialog.react", "React", "ReactLayeredComponentMixin", "SpotlightViewer", "SpotlightViewerBottomBar", "SpotlightViewerBottomBarGroup", "SpotlightViewerBottomBarLink", "SpotlightViewerClose", "SpotlightViewport", "PageTransitions", "PhotoViewerDimensions", "XMessagingVideoAttachmentController", "Vector", "cx", "fbt", "guid"], function(ignoreMethodDoesntExist, execResult, opt_keys,
positionError, module, oFunctionBody, sinon, textAlt, deepDataAndEvents, dataAndEvents, a, dom, keepData, n, attribute, tr, type, value, div, opt_attributes, subject, matcherFunction, logger, _$timeout_, failing_message, $sanitize) {
  /** @type {number} */
  var verticalPadding = 200;
  var JsDiff = dom.createClass({
    displayName : "MessagingVideoViewer",
    propTypes : {
      pageID : dom.PropTypes.number,
      rootClassName : dom.PropTypes.string,
      videoSize : dom.PropTypes.instanceOf(logger).isRequired,
      videoID : dom.PropTypes.string.isRequired,
      videoURI : dom.PropTypes.string.isRequired
    },
    mixins : [textAlt, keepData],
    /**
     * @return {?}
     */
    getInitialState : function() {
      var result = new subject({
        verticalPadding : verticalPadding
      });
      return{
        dimensions : result.getStageDimensions(this.props.videoSize),
        loading : true,
        open : true,
        showForward : false
      };
    },
    /**
     * @return {undefined}
     */
    componentWillMount : function() {
      this._domID = $sanitize();
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this._loadVideoPlayer();
      opt_attributes.registerCompletionCallback(function() {
        this.close();
        return true;
      }.bind(this));
    },
    /**
     * @return {undefined}
     */
    _loadVideoPlayer : function() {
      var functionStub = matcherFunction.getURIBuilder().setString("video_id", this.props.videoID).setString("video_container_id", this._domID).setInt("width", this.state.dimensions.x).setInt("height", this.state.dimensions.y).getURI();
      if (this.props.pageID) {
        functionStub = sinon.create(functionStub, this.props.pageID);
      }
      this.request = (new deepDataAndEvents).setMethod("GET").setURI(functionStub).setReadOnly(true).setHandler(function(dataAndEvents) {
        return this.setState({
          loading : false
        });
      }.bind(this)).send();
    },
    /**
     * @return {undefined}
     */
    close : function() {
      if (!this.state.open) {
        return;
      }
      this.setState({
        open : false
      }, function() {
        this.inform("close");
      });
    },
    /**
     * @return {undefined}
     */
    _showForwardDialog : function() {
      this.setState({
        showForward : true
      });
    },
    /**
     * @return {undefined}
     */
    _hideForwardDialog : function() {
      this.setState({
        showForward : false
      });
    },
    /**
     * @return {?}
     */
    renderLayers : function() {
      /** @type {string} */
      var MSG_CLOSURE_CUSTOM_COLOR_BUTTON = "Send this video to friends";
      return{
        forwardDialog : dom.createElement(a, {
          attachmentID : this.props.videoID,
          onClose : this._hideForwardDialog,
          shown : this.state.showForward,
          title : MSG_CLOSURE_CUSTOM_COLOR_BUTTON
        })
      };
    },
    /**
     * @return {?}
     */
    render : function() {
      var child4 = dom.createElement("div", {
        className : "rfloat",
        id : this._domID
      });
      var MSG_TEX_EDITOR = dataAndEvents.ForwardingEnabled ? dom.createElement(type, {
        onClick : this._showForwardDialog
      }, "Send") : null;
      return dom.createElement(n, {
        onHide : this.close,
        open : this.state.open,
        rootClassName : this.props.rootClassName
      }, dom.createElement(div, {
        className : "_39hc",
        media : child4,
        showLoadingIndicator : this.state.loading,
        stageDimensions : this.state.dimensions
      }, dom.createElement(value, {
        onClick : this.close
      }), dom.createElement(attribute, {
        className : "stat_elem"
      }, dom.createElement(tr, null), dom.createElement(tr, null, MSG_TEX_EDITOR, dom.createElement(type, {
        href : this.props.videoURI
      }, "Download")))));
    }
  });
  module.exports = JsDiff;
}, null);
__d("MercuryAttachmentVideo.react", ["CenteredContainer.react", "FBOverlayBase.react", "FBOverlayContainer.react", "FBOverlayElement.react", "Image.react", "React", "MessagesViewer", "MessagingVideoViewer.react", "Vector", "cx", "ix"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, type, t, attribute, value, label, self, res, name, Canvas, opt_attributes, done) {
  var JsDiff = self.createClass({
    displayName : "MercuryAttachmentVideo",
    propTypes : {
      duration : self.PropTypes.number.isRequired,
      name : self.PropTypes.string.isRequired,
      pageID : self.PropTypes.number,
      thumbSize : self.PropTypes.shape({
        height : self.PropTypes.number,
        width : self.PropTypes.number
      }).isRequired,
      thumbnail : self.PropTypes.string.isRequired,
      videoSize : self.PropTypes.shape({
        height : self.PropTypes.number,
        width : self.PropTypes.number
      }).isRequired,
      videoID : self.PropTypes.string.isRequired,
      videoURI : self.PropTypes.string.isRequired
    },
    /**
     * @return {?}
     */
    _formatDuration : function() {
      var d = this.props.duration;
      /** @type {number} */
      var type = Math.floor(d / 60);
      /** @type {number} */
      var pageX = d % 60;
      if (pageX < 10) {
        return type + ":0" + pageX;
      }
      return type + ":" + pageX;
    },
    /**
     * @return {undefined}
     */
    openViewer : function() {
      var out = new Canvas(this.props.videoSize.width, this.props.videoSize.height);
      res.render(self.createElement(name, {
        pageID : this.props.pageID,
        videoID : this.props.videoID,
        videoSize : out,
        videoURI : this.props.videoURI
      }));
    },
    /**
     * @return {?}
     */
    render : function() {
      /** @type {string} */
      var cls = "_zow" + (" " + "_59go");
      return self.createElement(attribute, {
        className : cls,
        onClick : this.openViewer,
        style : this.props.thumbSize
      }, self.createElement(value, null, self.createElement("div", {
        className : "_zox"
      }, self.createElement("span", {
        className : "_zoz"
      }, this._formatDuration()))), self.createElement(value, null, self.createElement(type, {
        vertical : true
      }, self.createElement(label, {
        src : done("/images/chat/chat_play_icon.png")
      }))), self.createElement(t, null, self.createElement(label, {
        height : this.props.thumbSize.height,
        width : this.props.thumbSize.width,
        src : this.props.thumbnail
      })));
    }
  });
  module.exports = JsDiff;
}, null);
__d("XUIBadge.react", ["React", "cx", "invariant", "joinClasses"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $, opt_attributes, test, update) {
  /**
   * @param {number} value
   * @return {?}
   */
  function parseInt(value) {
    return parseInt(value, 10) === value;
  }
  var JsDiff = $.createClass({
    displayName : "XUIBadge",
    propTypes : {
      type : $.PropTypes.oneOf(["regular", "special"]),
      count : $.PropTypes.number.isRequired,
      maxcount : $.PropTypes.number
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        type : "regular",
        maxcount : 20
      };
    },
    /**
     * @return {?}
     */
    render : function() {
      var name = this.props.type;
      var val = this.props.count;
      var max = this.props.maxcount;
      test(parseInt(val));
      test(parseInt(max));
      /** @type {string} */
      var length = "_5ugh" + (val > max ? " " + "_5ugi" : "") + (name === "regular" ? " " + "_5ugf" : "") + (name === "special" ? " " + "_5ugg" : "") + (val === 0 ? " " + "hidden_elem" : "");
      return $.createElement("span", $.__spread({}, this.props, {
        className : update(this.props.className, length),
        type : null
      }), val > max ? max + "+" : val);
    }
  });
  module.exports = JsDiff;
}, null);
__d("updatePhotoProgressBar", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} target
   * @param {Object} event
   * @return {undefined}
   */
  function ProgressEvent(target, event) {
    if (event.loaded != event.total) {
      target.setPosition(50 * event.loaded / event.total);
    } else {
      target.setPosition(50);
      target.setTarget(100, 2E3);
    }
  }
  /** @type {function (?, Object): undefined} */
  module.exports = ProgressEvent;
}, null);
__d("Dock", ["Event", "shield", "Arbiter", "ArbiterMixin", "ChatQuietLinks", "CSS", "DataStore", "DOM", "Parent", "Style", "Toggler", "Vector", "copyProperties", "csx", "emptyFunction", "WebMessengerWidthControl"], function(dataAndEvents, $sanitize, textAlt, keepData, module, opt_attributes, m, iterator, deepDataAndEvents, IOStream, ignoreMethodDoesntExist, me, data_user, handler, Dom, node, self, dom, declare, matcherFunction, init) {
  /**
   * @return {undefined}
   */
  function Selection() {
  }
  $sanitize("WebMessengerWidthControl");
  declare(Selection, IOStream, {
    MIN_HEIGHT : 140,
    INITIAL_FLYOUT_HEIGHT_OFFSET : 10,
    /**
     * @param {Object} target
     * @return {undefined}
     */
    init : function(target) {
      /** @type {(RegExp|string)} */
      this.init = init;
      /** @type {Object} */
      this.rootEl = target;
      this.calculateViewportDimensions();
      this.calculateFlyoutHeightOffset();
      ignoreMethodDoesntExist.removeEmptyHrefs(this.rootEl);
      m.listen(target, "click", this._onClick.bind(this));
      m.listen(window, "resize", this._onWindowResize.bind(this));
      self.subscribe(["show", "hide"], function(act, exports) {
        var node = exports.getActive();
        if (!handler.contains(target, node)) {
          return;
        }
        if (me.hasClass(node, "fbNub")) {
          this.notifyNub(node, act);
          if (act === "show") {
            this._resizeNubFlyout(node);
          }
        } else {
          var currentValue = Dom.byClass(node, "fbNubFlyout");
          if (currentValue) {
            me.conditionClass(currentValue, "menuOpened", act === "show");
          }
        }
      }.bind(this));
      this.inform("init", {}, deepDataAndEvents.BEHAVIOR_PERSISTENT);
    },
    /**
     * @return {?}
     */
    calculateViewportDimensions : function() {
      return this.viewportDimensions = dom.getViewportDimensions();
    },
    /**
     * @return {undefined}
     */
    calculateFlyoutHeightOffset : function() {
      this.flyoutHeightOffset = this.INITIAL_FLYOUT_HEIGHT_OFFSET + dom.getElementDimensions(this.rootEl).y;
      var element = handler.scry(document, "div._4f7n")[0];
      if (element) {
        /** @type {string} */
        var container = node.isFixed(element) ? "viewport" : "document";
        this.flyoutHeightOffset += dom.getElementPosition(element, container).y + dom.getElementDimensions(element).y;
      }
    },
    /**
     * @param {(Object|string)} className
     * @return {undefined}
     */
    toggle : function(className) {
      var match = this._findFlyout(className);
      if (!match) {
        return;
      }
      this.subscribe("init", function() {
        self.toggle(className);
      });
    },
    /**
     * @param {?} event
     * @return {undefined}
     */
    show : function(event) {
      this.subscribe("init", function() {
        self.show(event);
      });
    },
    /**
     * @param {?} event
     * @return {undefined}
     */
    showNub : function(event) {
      me.show(event);
    },
    /**
     * @param {?} el
     * @return {undefined}
     */
    hide : function(el) {
      this.subscribe("init", function() {
        var button = self.getInstance(el);
        if (handler.contains(el, button.getActive())) {
          button.hide();
        }
      });
    },
    /**
     * @param {?} event
     * @return {undefined}
     */
    hideNub : function(event) {
      me.hide(event);
      this.hide(event);
    },
    /**
     * @param {string} token
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    setUseMaxHeight : function(token, dataAndEvents) {
      me.conditionClass(token, "maxHeight", dataAndEvents !== false);
      this._resizeNubFlyout(token);
    },
    /**
     * @param {string} className
     * @return {undefined}
     */
    _resizeNubFlyout : function(className) {
      var e = this._findFlyout(className);
      if (!e || !(me.hasClass(className, "openToggler") || me.hasClass(className, "opened"))) {
        return;
      }
      var i = handler.find(e, "div.fbNubFlyoutOuter");
      var target = handler.find(i, "div.fbNubFlyoutInner");
      var element = handler.find(target, "div.fbNubFlyoutBody");
      var previousScrollTop = element.scrollTop;
      var originalHeight = element.offsetHeight;
      node.set(element, "height", "auto");
      var position = dom.getElementDimensions(e);
      var elementPos = dom.getElementDimensions(element);
      var max = this.getMaxFlyoutHeight(className);
      node.set(e, "max-height", max + "px");
      node.set(i, "max-height", max + "px");
      position = dom.getElementDimensions(e);
      var pos = dom.getElementDimensions(target);
      /** @type {number} */
      var top = pos.y - elementPos.y;
      /** @type {number} */
      var val = position.y - top;
      /** @type {number} */
      var skip = parseInt(element.style.height || element.clientHeight, 10);
      /** @type {boolean} */
      var hasVal = val !== skip;
      if (position.y > top && hasVal) {
        node.set(element, "height", val + "px");
      }
      me.removeClass(e, "swapDirection");
      var x = dom.getElementPosition(e).x;
      me.conditionClass(e, "swapDirection", function() {
        if (x < 0) {
          return true;
        }
        return x + position.x > this.viewportDimensions.x;
      }.bind(this)());
      if (hasVal && previousScrollTop + originalHeight >= elementPos.y) {
        element.scrollTop = element.scrollHeight;
      } else {
        element.scrollTop = previousScrollTop;
      }
      this.notifyNub(className, "resize");
    },
    /**
     * @param {string} selector
     * @return {?}
     */
    getMaxFlyoutHeight : function(selector) {
      var element = this._findFlyout(selector);
      var result = dom.getElementPosition(element, "viewport");
      var outer = dom.getElementDimensions(element);
      /** @type {number} */
      var expectedHashCode = Math.max(this.MIN_HEIGHT, this.viewportDimensions.y - this.flyoutHeightOffset) - (this.viewportDimensions.y - result.y - outer.y);
      return Math.max(expectedHashCode, 0);
    },
    /**
     * @return {undefined}
     */
    resizeAllFlyouts : function() {
      var tokenized = this._getAllNubs();
      var index = tokenized.length;
      for (;index--;) {
        this._resizeNubFlyout(tokenized[index]);
      }
    },
    /**
     * @return {undefined}
     */
    hideAllFlyouts : function() {
      var tokenized = this._getAllNubs();
      var index = tokenized.length;
      for (;index--;) {
        this.hide(tokenized[index]);
      }
    },
    /**
     * @return {?}
     */
    _getAllNubs : function() {
      var l = handler.scry(this.rootEl, "div._50-v.openToggler");
      return l.concat(handler.scry(this.rootEl, "div._50-v.opened"));
    },
    /**
     * @param {Event} e
     * @return {?}
     */
    _onClick : function(e) {
      var elem = e.getTarget();
      var $elem = Dom.byClass(elem, "fbNub");
      if ($elem) {
        if (Dom.byClass(elem, "fbNubFlyoutTitlebar")) {
          var result = Dom.byTag(elem, "a");
          /** @type {boolean} */
          var suppressDebug = elem.nodeName == "INPUT" && elem.getAttribute("type") == "submit";
          if (!result && !suppressDebug) {
            this.hide($elem);
            return false;
          }
        }
        this.notifyNub($elem, "click");
      }
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    _onWindowResize : function(dataAndEvents) {
      this.calculateViewportDimensions();
      this.resizeAllFlyouts();
    },
    /**
     * @param {(Object|string)} selector
     * @return {?}
     */
    _findFlyout : function(selector) {
      return me.hasClass(selector, "fbNubFlyout") ? selector : handler.scry(selector, "div.fbNubFlyout")[0] || null;
    },
    /**
     * @param {?} a
     * @param {Object} data
     * @return {undefined}
     */
    registerNubController : function(a, data) {
      data_user.set(a, "dock:nub:controller", data);
      data.subscribe("nub/button/content-changed", iterator(this.inform, this, "resize", a));
      data.subscribe("nub/flyout/content-changed", iterator(this._resizeNubFlyout, this, a));
    },
    /**
     * @param {?} elem
     * @return {undefined}
     */
    unregisterNubController : function(elem) {
      data_user.remove(elem, "dock:nub:controller");
    },
    /**
     * @param {string} elem
     * @param {string} func
     * @param {?} funcToCall
     * @return {undefined}
     */
    notifyNub : function(elem, func, funcToCall) {
      var self = data_user.get(elem, "dock:nub:controller");
      if (self) {
        self.inform(func, funcToCall);
      }
    }
  });
  module.exports = dataAndEvents.Dock || Selection;
}, null);
__d("DropdownContextualHelpLink", ["DOM", "ge"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, ret, $timeout) {
  var Vector = {
    /**
     * @param {?} className
     * @return {undefined}
     */
    set : function(className) {
      var rreturn = $timeout("navHelpCenter");
      if (rreturn !== null) {
        ret.replace(rreturn, className);
      }
    }
  };
  module.exports = Vector;
}, null);
__d("WaterfallIDGenerator", ["CurrentUser", "md5"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, a, toString) {
  /**
   * @return {?}
   */
  function rand() {
    /** @type {number} */
    var l = 2147483647;
    return Math.random() * l;
  }
  /**
   * @return {?}
   */
  function f() {
    return Math.floor(Date.now() / 1E3);
  }
  var JsDiff = {
    /**
     * @return {?}
     */
    generate : function() {
      return toString([a.getID(), f(), rand()].join(":"));
    }
  };
  module.exports = JsDiff;
}, null);
__d("FileFormResetOnSubmit", ["DOMQuery", "Event", "emptyFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, element, Event, self) {
  /**
   * @param {?} element
   * @param {Function} done
   * @return {undefined}
   */
  function setup(element, done) {
    var idx = Event.listen(element, "change", self.thatReturnsFalse, Event.Priority.URGENT);
    try {
      done();
    } catch (o) {
      throw o;
    } finally {
      idx.remove();
    }
  }
  /**
   * @param {?} b
   * @return {undefined}
   */
  function $(b) {
    this._form = b;
  }
  /**
   * @return {undefined}
   */
  $.prototype.enable = function() {
    var WAIT = this._reset.bind(this);
    this._subscription = this._form.subscribe("submit", function() {
      setTimeout(WAIT, 0);
    });
  };
  /**
   * @return {undefined}
   */
  $.prototype.disable = function() {
    this._subscription.unsubscribe();
    /** @type {null} */
    this._subscription = null;
  };
  /**
   * @return {undefined}
   */
  $.prototype._reset = function() {
    var activeClassName = this._form.getRoot();
    setup(activeClassName, function() {
      var asserterNames = element.scry(activeClassName, 'input[type="file"]');
      asserterNames.forEach(function(te) {
        /** @type {string} */
        te.value = "";
      });
    });
  };
  /** @type {function (?): undefined} */
  module.exports = $;
}, null);
__d("FormSubmitOnChange", ["Event", "copyProperties", "submitForm"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, m, patch, set) {
  /**
   * @param {?} b
   * @return {undefined}
   */
  function $(b) {
    this._form = b;
  }
  /**
   * @return {undefined}
   */
  $.prototype.enable = function() {
    this._listener = m.listen(this._form.getRoot(), "change", this._submit.bind(this));
  };
  /**
   * @return {undefined}
   */
  $.prototype.disable = function() {
    this._listener.remove();
    /** @type {null} */
    this._listener = null;
  };
  /**
   * @return {undefined}
   */
  $.prototype._submit = function() {
    set(this._form.getRoot());
  };
  patch($.prototype, {
    _listener : null
  });
  /** @type {function (?): undefined} */
  module.exports = $;
}, null);
__d("MercuryFileUploader", ["ArbiterMixin", "CSS", "Dialog", "DOM", "Event", "FileForm", "FileFormResetOnSubmit", "FileInput", "FormSubmitOnChange", "MercuryAttachment", "MercuryAttachmentTemplates", "MercuryConstants", "PhotosUploadID", "SubscriptionsHandler", "csx", "fbt", "getObjectValues", "mixin", "shield"], function(dataAndEvents, ignoreMethodDoesntExist, keepData, matcherFunction, module, execResult, object, w, stat, obj, testPage, Game, textAlt, TweenLite, player, goog, children, o, opt_attributes,
deepDataAndEvents, opt_keys, positionError, $sanitize, keys, callback) {
  /**
   * @param {?} config
   * @param {Object} platform
   * @param {Object} description
   * @param {?} scope
   * @return {undefined}
   */
  function constructor(config, platform, description, scope) {
    this.$MercuryFileUploader0 = config;
    this.$MercuryFileUploader1 = {};
    this.$MercuryFileUploader2 = {};
    this.$MercuryFileUploader3 = {};
    this.$MercuryFileUploader4 = {};
    this.$MercuryFileUploader5 = {};
    this.$MercuryFileUploader6 = {};
    this.$MercuryFileUploader7 = {};
    this.$MercuryFileUploader8 = {};
    this.updateElements(platform, description, scope);
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function lookupIterator(value) {
    if (value && value.startsWith("C:\\fakepath\\")) {
      return value.substring(12);
    }
    return value;
  }
  var properties = keys(object);
  var name;
  for (name in properties) {
    if (properties.hasOwnProperty(name)) {
      constructor[name] = properties[name];
    }
  }
  var basePrototype = properties === null ? null : properties.prototype;
  /** @type {Object} */
  constructor.prototype = Object.create(basePrototype);
  /** @type {function (?, Object, Object, ?): undefined} */
  constructor.prototype.constructor = constructor;
  constructor.__superConstructor__ = properties;
  /**
   * @param {Object} name
   * @param {Object} desc
   * @param {?} scope
   * @return {undefined}
   */
  constructor.prototype.updateElements = function(name, desc, scope) {
    if (this.$MercuryFileUploader9) {
      this.$MercuryFileUploader9.release();
    }
    this.$MercuryFileUploader9 = new deepDataAndEvents;
    if (this.$MercuryFileUploadera) {
      this.$MercuryFileUploadera.destroy();
    }
    this.$MercuryFileUploadera = new Game(name, [player, textAlt]);
    this.$MercuryFileUploadera.setAllowCrossOrigin(true);
    this.$MercuryFileUploadera.setUploadInParallel(true);
    var target = obj.find(name, "._4q60");
    var element = obj.find(target, "._4q61");
    new TweenLite(target, element, desc);
    this.$MercuryFileUploader9.addSubscriptions(this.$MercuryFileUploadera.subscribe("submit", function() {
      var session = {
        count : 0,
        file_sizes : []
      };
      if (desc.files) {
        /** @type {number} */
        var i = 0;
        for (;i < desc.files.length;i++) {
          if (desc.files[i].size > o.AttachmentMaxSize) {
            this.showAttachmentSizeErrorDialog();
            return false;
          }
        }
        var old = {};
        /** @type {number} */
        var type = 0;
        for (;type < desc.files.length;type++) {
          var name = this.$MercuryFileUploaderb();
          this.$MercuryFileUploaderc(name, desc.files[type].name);
          session.count++;
          session.file_sizes.push(desc.files[type].size);
          old[name] = desc.files[type];
        }
        this.$MercuryFileUploadera.setFiles(old);
      } else {
        scope.value = this.$MercuryFileUploaderb();
        this.$MercuryFileUploaderc(scope.value, desc.value);
        /** @type {number} */
        session.count = 1;
      }
      this.inform("submit", session);
    }.bind(this)), this.$MercuryFileUploadera.subscribe("success", this.$MercuryFileUploaderd.bind(this)), this.$MercuryFileUploadera.subscribe("failure", this.$MercuryFileUploadere.bind(this)), testPage.listen(element, "click", callback(this.inform, this, "open")));
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.showAttachmentSizeErrorDialog = function() {
    this.$MercuryFileUploadera.abort();
    this.$MercuryFileUploadera.clear();
    (new stat).setTitle("The file you have selected is too large").setBody("The file you have selected is too large. The maximum size is 25MB.").setButtons(stat.OK).setSemiModal(true).show();
  };
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  constructor.prototype.addDroppedFiles = function(codeSegments) {
    if (!this.$MercuryFileUploadera || !this.$MercuryFileUploadera.canUseXHR()) {
      return;
    }
    var files = {};
    var session = {
      count : 0,
      file_sizes : []
    };
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var file = codeSegments[i];
      if (file.size > o.AttachmentMaxSize) {
        this.showAttachmentSizeErrorDialog();
        return false;
      }
      var name = this.$MercuryFileUploaderb();
      this.$MercuryFileUploaderc(name, file.name);
      files[name] = file;
      session.file_sizes.push(file.size);
      session.count++;
    }
    this.$MercuryFileUploadera.setFiles(files);
    this.$MercuryFileUploadera.forceSendViaXHR();
    this.inform("submit", session);
  };
  /**
   * @return {?}
   */
  constructor.prototype.isUploading = function() {
    return!!Object.keys(this.$MercuryFileUploader6).length;
  };
  /**
   * @param {Array} failures
   * @return {undefined}
   */
  constructor.prototype.addCachedAttachments = function(failures) {
    failures.forEach(function(xml) {
      var camelKey = this.$MercuryFileUploaderb();
      this.$MercuryFileUploaderc(camelKey, xml.filename);
      this.$MercuryFileUploaderf(camelKey, xml);
    }.bind(this));
  };
  /**
   * @param {Array} failures
   * @return {undefined}
   */
  constructor.prototype.addCachedImageFiles = function(failures) {
    /** @type {string} */
    var udataCur = "Photo";
    failures.forEach(function(file) {
      var camelKey = this.$MercuryFileUploaderb();
      this.$MercuryFileUploaderc(camelKey, udataCur);
      this.$MercuryFileUploaderf(camelKey, {
        filename : file,
        image_id : file,
        filetype : "image/jpeg"
      });
    }.bind(this));
  };
  /**
   * @return {?}
   */
  constructor.prototype.getAttachments = function() {
    return $sanitize(this.$MercuryFileUploader1);
  };
  /**
   * @return {?}
   */
  constructor.prototype.getImageFiles = function() {
    var asserterNames = Object.keys(this.$MercuryFileUploader2).sort();
    /** @type {Array} */
    var byteout = [];
    asserterNames.forEach(function(value) {
      return byteout.push(this.$MercuryFileUploader2[value]);
    }.bind(this));
    return byteout;
  };
  /**
   * @return {?}
   */
  constructor.prototype.getVideoFiles = function() {
    return $sanitize(this.$MercuryFileUploader3);
  };
  /**
   * @return {?}
   */
  constructor.prototype.getAudioFiles = function() {
    return $sanitize(this.$MercuryFileUploader4);
  };
  /**
   * @return {?}
   */
  constructor.prototype.getFiles = function() {
    return $sanitize(this.$MercuryFileUploader5);
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.removeAttachments = function() {
    obj.empty(this.$MercuryFileUploader0);
    this.$MercuryFileUploader1 = {};
    this.$MercuryFileUploader2 = {};
    this.$MercuryFileUploader3 = {};
    this.$MercuryFileUploader4 = {};
    this.$MercuryFileUploader5 = {};
    this.$MercuryFileUploader7 = {};
    this.$MercuryFileUploader6 = {};
    this.$MercuryFileUploader8 = {};
    w.hide(this.$MercuryFileUploader0);
    this.inform("dom-updated");
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.destroy = function() {
    if (this.$MercuryFileUploader9) {
      this.$MercuryFileUploader9.release();
    }
    if (this.$MercuryFileUploadera) {
      this.$MercuryFileUploadera.destroy();
    }
    this.removeAttachments();
  };
  /**
   * @param {?} key
   * @param {string} value
   * @return {undefined}
   */
  constructor.prototype.$MercuryFileUploaderc = function(key, value) {
    var t = children[":fb:mercury:upload-file-row"].build();
    this.$MercuryFileUploader7[key] = t;
    /** @type {boolean} */
    this.$MercuryFileUploader6[key] = true;
    /** @type {number} */
    this.$MercuryFileUploader8[key] = Date.now();
    obj.appendContent(t.getNode("iconText"), lookupIterator(value));
    testPage.listen(t.getNode("closeFileUpload"), "click", this.$MercuryFileUploaderg.bind(this, key));
    obj.appendContent(this.$MercuryFileUploader0, t.getRoot());
    w.show(this.$MercuryFileUploader0);
    this.inform("dom-updated");
  };
  /**
   * @param {?} path
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  constructor.prototype.$MercuryFileUploaderg = function(path, deepDataAndEvents) {
    if (this.$MercuryFileUploader6[path]) {
      this.inform("upload-canceled-during-upload");
    } else {
      if (this.$MercuryFileUploader1[path] || (this.$MercuryFileUploader2[path] || (this.$MercuryFileUploader3[path] || (this.$MercuryFileUploader4[path] || this.$MercuryFileUploader5[path])))) {
        this.inform("upload-canceled-after-uploaded");
      }
    }
    delete this.$MercuryFileUploader1[path];
    delete this.$MercuryFileUploader2[path];
    delete this.$MercuryFileUploader3[path];
    delete this.$MercuryFileUploader4[path];
    delete this.$MercuryFileUploader5[path];
    delete this.$MercuryFileUploader6[path];
    delete this.$MercuryFileUploader8[path];
    var store = this.$MercuryFileUploader7[path];
    delete this.$MercuryFileUploader7[path];
    if (store) {
      obj.remove(store.getRoot());
      this.inform("dom-updated");
    }
    this.inform("upload-canceled");
    return false;
  };
  /**
   * @param {?} name
   * @param {?} tokens
   * @return {undefined}
   */
  constructor.prototype.$MercuryFileUploaderh = function(name, tokens) {
    var store = this.$MercuryFileUploader7[name];
    var s = goog.getAttachIconClassByMime(tokens);
    w.addClass(store.getNode("iconText"), s);
    w.addClass(store.getRoot(), "done");
  };
  /**
   * @param {?} key
   * @param {Object} data
   * @return {undefined}
   */
  constructor.prototype.$MercuryFileUploaderf = function(key, data) {
    if (this.$MercuryFileUploader6[key]) {
      delete this.$MercuryFileUploader6[key];
      if (data.image_id) {
        this.$MercuryFileUploader2[key] = data.image_id;
      } else {
        if (data.video_id) {
          this.$MercuryFileUploader3[key] = data.video_id;
        } else {
          if (data.audio_id) {
            this.$MercuryFileUploader4[key] = data.audio_id;
          } else {
            if (data.file_id) {
              this.$MercuryFileUploader5[key] = data.file_id;
            } else {
              /** @type {Object} */
              this.$MercuryFileUploader1[key] = data;
            }
          }
        }
      }
      this.$MercuryFileUploaderh(key, data.filetype);
      this.inform("one-upload-completed", {
        upload_time_ms : Date.now() - this.$MercuryFileUploader8[key]
      });
    }
    if (!this.isUploading()) {
      this.inform("all-uploads-completed", {
        count : this.getAttachments().length
      });
    }
  };
  /**
   * @param {?} dataAndEvents
   * @param {Object} operation
   * @return {undefined}
   */
  constructor.prototype.$MercuryFileUploaderd = function(dataAndEvents, operation) {
    var gridStore = operation.response.getPayload();
    this.$MercuryFileUploaderf(this.$MercuryFileUploaderi(operation), gridStore.metadata[0]);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} inplace
   * @return {undefined}
   */
  constructor.prototype.$MercuryFileUploadere = function(deepDataAndEvents, inplace) {
    this.inform("one-upload-failed");
    this.$MercuryFileUploaderg(this.$MercuryFileUploaderi(inplace), deepDataAndEvents);
  };
  /**
   * @return {?}
   */
  constructor.prototype.$MercuryFileUploaderb = function() {
    return "upload_" + opt_attributes.getNewID();
  };
  /**
   * @param {Object} data
   * @return {?}
   */
  constructor.prototype.$MercuryFileUploaderi = function(data) {
    var uploadID = data.response.getPayload();
    if (data.upload) {
      return data.upload.getName();
    } else {
      return uploadID.uploadID;
    }
  };
  /** @type {function (?, Object, Object, ?): undefined} */
  module.exports = constructor;
}, null);
__d("URLScraper", ["ArbiterMixin", "DataStore", "Event", "URLMatcher", "copyProperties", "mixin"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, element, data_user, m, mongoObject, callback, proceed) {
  /**
   * @param {?} str
   * @param {?} state
   * @return {undefined}
   */
  function $(str, state) {
    this.input = str;
    this.enable();
    this.getValueFn = state;
  }
  /** @type {string} */
  var camelKey = "scraperLastPermissiveMatch";
  var data = proceed(element);
  var prop;
  for (prop in data) {
    if (data.hasOwnProperty(prop)) {
      $[prop] = data[prop];
    }
  }
  var basePrototype = data === null ? null : data.prototype;
  /** @type {Object} */
  $.prototype = Object.create(basePrototype);
  /** @type {function (?, ?): undefined} */
  $.prototype.constructor = $;
  $.__superConstructor__ = data;
  /**
   * @return {undefined}
   */
  $.prototype.reset = function() {
    data_user.set(this.input, camelKey, null);
  };
  /**
   * @return {undefined}
   */
  $.prototype.enable = function() {
    if (this.events) {
      return;
    }
    /**
     * @param {?} callback
     * @return {undefined}
     */
    var gameLoop = function(callback) {
      setTimeout(this.check.bind(this, callback), 30);
    };
    this.events = m.listen(this.input, {
      paste : gameLoop.bind(this, false),
      keydown : gameLoop.bind(this, true)
    });
  };
  /**
   * @return {undefined}
   */
  $.prototype.disable = function() {
    if (!this.events) {
      return;
    }
    var key;
    for (key in this.events) {
      this.events[key].remove();
    }
    /** @type {null} */
    this.events = null;
  };
  /**
   * @param {(Node|string)} silent
   * @return {undefined}
   */
  $.prototype.check = function(silent) {
    var expectedHashCode = this.getValueFn ? this.getValueFn() : this.input.value;
    if (silent && $.trigger(expectedHashCode)) {
      return;
    }
    var url = $.match(expectedHashCode);
    var value = mongoObject.permissiveMatch(expectedHashCode);
    if (value && value != data_user.get(this.input, camelKey)) {
      data_user.set(this.input, camelKey, value);
      this.inform("match", {
        url : url || value,
        alt_url : value
      });
    }
  };
  callback($, mongoObject);
  /** @type {function (?, ?): undefined} */
  module.exports = $;
}, null);
__d("MercuryShareLinkUploader", ["ArbiterMixin", "AsyncRequest", "CSS", "DOM", "Event", "Form", "URLScraper", "WebMessengerEvents", "mixin", "isEmpty"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, _super, dataAndEvents, loading, cell, event, list, Audio, deepDataAndEvents, method, behavior) {
  /**
   * @param {?} allBindingsAccessor
   * @param {?} depMaps
   * @param {?} rootjQuery
   * @param {?} el
   * @param {Object} src
   * @return {undefined}
   */
  function init(allBindingsAccessor, depMaps, rootjQuery, el, src) {
    this.$MercuryShareLinkUploader0 = allBindingsAccessor;
    this.$MercuryShareLinkUploader1 = depMaps;
    this.$MercuryShareLinkUploader2 = rootjQuery;
    /** @type {Object} */
    this.$MercuryShareLinkUploader3 = src;
    /** @type {boolean} */
    this.$MercuryShareLinkUploader4 = false;
    /** @type {null} */
    this.$MercuryShareLinkUploader5 = null;
    /** @type {null} */
    this.$MercuryShareLinkUploader6 = null;
    event.listen(el, "click", this.close.bind(this));
    event.listen(src, "keyup", function() {
      if (!src.value.length) {
        this.$MercuryShareLinkUploader7.enable();
      }
    }.bind(this));
    this.$MercuryShareLinkUploader7 = new Audio(src);
    this.$MercuryShareLinkUploader7.subscribe("match", function(dataAndEvents, object) {
      this.loadShare(object && object.url);
    }.bind(this));
  }
  var prototype = method(_super);
  var k;
  for (k in prototype) {
    if (prototype.hasOwnProperty(k)) {
      init[k] = prototype[k];
    }
  }
  var basePrototype = prototype === null ? null : prototype.prototype;
  /** @type {Object} */
  init.prototype = Object.create(basePrototype);
  /** @type {function (?, ?, ?, ?, Object): undefined} */
  init.prototype.constructor = init;
  init.__superConstructor__ = prototype;
  /**
   * @return {?}
   */
  init.prototype.getAttachData = function() {
    return this.loadAttachData(this.$MercuryShareLinkUploader4, this.$MercuryShareLinkUploader0, this.$MercuryShareLinkUploader3);
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} arg
   * @return {?}
   */
  init.prototype.getShareDataFromStage = function(dataAndEvents, arg) {
    var res = list.serialize(arg);
    var data = res.attachment && res.attachment.params;
    if (!data) {
      return null;
    }
    if (data instanceof Object) {
      /** @type {Array} */
      var tmp = [];
      tmp.push(data[0]);
      tmp.push(data[1]);
      /** @type {Array} */
      data = tmp;
    }
    return{
      params : data,
      type : res.attachment.type
    };
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} arg
   * @param {Attr} data
   * @param {boolean} raw
   * @return {?}
   */
  init.prototype.loadAttachData = function(dataAndEvents, arg, data, raw) {
    if (dataAndEvents) {
      var args = list.serialize(arg);
      var result = args.attachment && args.attachment.params;
      var aa = args.link_metrics ? args.link_metrics.no_image : true;
      if (!result || behavior(result)) {
        return null;
      }
      var me = raw ? raw() : data.value;
      if (me.indexOf(result.url) === -1) {
        return args;
      }
      if (!result.summary && (!result.favicon && (aa && (result.title && (result.url && result.url.substr(0, result.title.length) === result.title))))) {
        return null;
      }
      return args;
    }
    return null;
  };
  /**
   * @return {undefined}
   */
  init.prototype.check = function() {
    this.$MercuryShareLinkUploader7.check();
  };
  /**
   * @return {undefined}
   */
  init.prototype.close = function() {
    this.$MercuryShareLinkUploader8();
    this.$MercuryShareLinkUploader7.disable();
    this.inform("closed");
  };
  /**
   * @return {undefined}
   */
  init.prototype.clear = function() {
    this.$MercuryShareLinkUploader8();
    this.$MercuryShareLinkUploader7.enable();
  };
  /**
   * @return {undefined}
   */
  init.prototype.enable = function() {
    this.$MercuryShareLinkUploader7.enable();
  };
  /**
   * @return {undefined}
   */
  init.prototype.disable = function() {
    this.$MercuryShareLinkUploader7.disable();
  };
  /**
   * @param {string} url
   * @return {undefined}
   */
  init.prototype.loadShare = function(url) {
    /** @type {string} */
    this.$MercuryShareLinkUploader5 = url;
    if (this.$MercuryShareLinkUploader6) {
      this.$MercuryShareLinkUploader6.abort();
    }
    this.$MercuryShareLinkUploader6 = (new dataAndEvents).setMethod("POST").setURI("/ajax/share_scrape.php").setData({
      u : url
    }).setHandler(this.$MercuryShareLinkUploader9.bind(this).bind(null, url)).setStatusElement(this.$MercuryShareLinkUploader2);
    this.$MercuryShareLinkUploader6.send();
    this.inform("link-detected");
  };
  /**
   * @param {?} dataAndEvents
   * @param {Object} content
   * @return {undefined}
   */
  init.prototype.$MercuryShareLinkUploader9 = function(dataAndEvents, content) {
    if (this.$MercuryShareLinkUploader5 !== dataAndEvents) {
      return;
    }
    /** @type {null} */
    this.$MercuryShareLinkUploader5 = null;
    /** @type {null} */
    this.$MercuryShareLinkUploader6 = null;
    loading.show(this.$MercuryShareLinkUploader0);
    cell.empty(this.$MercuryShareLinkUploader1);
    cell.setContent(this.$MercuryShareLinkUploader1, content.payload);
    /** @type {boolean} */
    this.$MercuryShareLinkUploader4 = true;
    if (!this.getAttachData()) {
      this.close();
      return;
    }
    deepDataAndEvents.detailDOMChanged();
  };
  /**
   * @return {undefined}
   */
  init.prototype.$MercuryShareLinkUploader8 = function() {
    loading.hide(this.$MercuryShareLinkUploader0);
    /** @type {boolean} */
    this.$MercuryShareLinkUploader4 = false;
    /** @type {null} */
    this.$MercuryShareLinkUploader5 = null;
    if (this.$MercuryShareLinkUploader6) {
      this.$MercuryShareLinkUploader6.abort();
    }
    /** @type {null} */
    this.$MercuryShareLinkUploader6 = null;
    this.$MercuryShareLinkUploader7.reset();
    deepDataAndEvents.detailDOMChanged();
  };
  /** @type {function (?, ?, ?, ?, Object): undefined} */
  module.exports = init;
}, null);
__d("ChatActivity", ["Event", "Arbiter", "AvailableList", "AvailableListConstants", "JSLogger", "MercuryConfig", "PresenceState", "UserActivity", "copyProperties"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, Event, _this, MinPubSub, constant, req, dataAndEvents, app, left, layer) {
  /**
   * @return {?}
   */
  function onDocumentMouseScroll() {
    /** @type {number} */
    var now = Date.now();
    return!!(lastCall && now - y < resizeThrottle);
  }
  /**
   * @return {undefined}
   */
  function retry() {
    var delta = y;
    /** @type {number} */
    y = Date.now();
    if (y - delta > packetLength) {
      self.debug("idle_to_active", delta);
      app.doSync();
    }
    t.inform("activity");
  }
  /**
   * @param {boolean} model
   * @return {?}
   */
  function evaluate(model) {
    var obj = model && (model.at && app.verifyNumber(model.at));
    if (typeof obj !== "number") {
      /** @type {null} */
      obj = null;
    }
    return obj || 0;
  }
  var resizeThrottle = dataAndEvents.activity_limit || 6E4;
  var packetLength = dataAndEvents.idle_limit || 18E5;
  var frequency = dataAndEvents.idle_poll_interval || 3E5;
  var self = req.create("chat_activity");
  /** @type {number} */
  var y = Date.now();
  var cy = y;
  /** @type {boolean} */
  var lastCall = true;
  var t = layer(new _this, {
    /** @type {function (): ?} */
    isActive : onDocumentMouseScroll
  });
  MinPubSub.subscribe(constant.ON_AVAILABILITY_CHANGED, function() {
    if (!MinPubSub.isUserIdle()) {
      /** @type {number} */
      cy = Date.now();
    }
  });
  Event.listen(window, "focus", function() {
    /** @type {boolean} */
    lastCall = true;
    retry();
  });
  Event.listen(window, "blur", function() {
    /** @type {boolean} */
    lastCall = false;
  });
  left.subscribe(function() {
    retry();
  });
  setInterval(function() {
    /** @type {number} */
    var end = Date.now();
    var val = evaluate(app.get());
    /** @type {number} */
    var start = Math.max(y, val, cy);
    if (end - start > packetLength) {
      self.debug("idle", {
        cookie : val,
        local : y,
        presence : cy
      });
      t.inform("idle", end - start);
    }
  }, frequency);
  app.registerStateStorer(function(data) {
    var ret = evaluate(data);
    if (ret < y) {
      data.at = y;
    }
    return data;
  });
  _this.subscribe(req.DUMP_EVENT, function(deepDataAndEvents, dataAndEvents) {
    dataAndEvents.chat_activity = {
      activity_limit : resizeThrottle,
      idle_limit : packetLength,
      idle_poll_interval : frequency,
      last_active_time : y,
      last_global_active_time : cy
    };
  });
  module.exports = t;
}, null);
__d("MercuryNotificationRenderer", ["MercuryAssert", "MercuryParticipants", "MercuryViewer", "fbt", "MercuryMessages", "MercuryThreads"], function(dataAndEvents, nock, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, fns, User, a, self) {
  /**
   * @param {?} fn
   * @param {Function} eachfn
   * @return {undefined}
   */
  function _concat(fn, eachfn) {
    fns.isThreadID(fn);
    reName.getThreadMeta(fn, function(s) {
      arr.getThreadMessagesRange(fn, 0, 1, function(scopes) {
        var data = scopes.length && scopes[scopes.length - 1];
        if (data && data.author != a.getID()) {
          User.get(data.author, function(part) {
            if (s.name) {
              eachfn(self._("{senderName} messaged {groupName}", [self.param("senderName", part.short_name), self.param("groupName", s.name)]));
            } else {
              eachfn(self._("{name} messaged you", [self.param("name", part.short_name)]));
            }
          });
        } else {
          eachfn("New message!");
        }
      });
    });
  }
  var arr = nock("MercuryMessages").get();
  var reName = nock("MercuryThreads").get();
  module.exports = {
    /** @type {function (?, Function): undefined} */
    renderDocumentTitle : _concat
  };
}, null);
__d("MercuryTimestampTracker", ["MercuryActionType", "MercuryPayloadSource", "MercurySingletonMixin", "MercuryServerRequests", "copyProperties"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, a, contestant, result, dataAndEvents, expect) {
  /**
   * @param {?} allBindingsAccessor
   * @return {undefined}
   */
  function init(allBindingsAccessor) {
    this._fbid = allBindingsAccessor;
    this._serverRequests = dataAndEvents.getForFBID(this._fbid);
    /** @type {number} */
    this._lastTimestamp = 0;
    this._serverRequests.subscribe("update-messages", function(dataAndEvents, node) {
      if (!node.actions || !node.actions.length) {
        return;
      }
      if (node.payload_source == contestant.CLIENT_SEND_MESSAGE || node.payload_source == contestant.UNKNOWN) {
        return;
      }
      /** @type {number} */
      var i = 0;
      for (;i < node.actions.length;i++) {
        var message = node.actions[i];
        var text = message.action_type;
        if (text == a.USER_GENERATED_MESSAGE && (message.thread_id && message.timestamp > this._lastTimestamp)) {
          this._lastTimestamp = message.timestamp;
        }
      }
    }.bind(this));
  }
  expect(init.prototype, {
    /**
     * @return {?}
     */
    getLastUserMessageTimestamp : function() {
      return this._lastTimestamp;
    }
  });
  expect(init, result);
  /** @type {function (?): undefined} */
  module.exports = init;
}, null);
__d("ChatTitleBarBlinker", ["ChatActivity", "DocumentTitle", "JSLogger", "MercuryNotificationRenderer", "PresenceState", "MercuryThreadInformer", "MercuryTimestampTracker"], function(dataAndEvents, nock, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, plugin, Ext, activator, goog, assert) {
  /**
   * @return {?}
   */
  function run() {
    if (event) {
      event.stop();
      /** @type {null} */
      event = null;
      return true;
    }
    return false;
  }
  /**
   * @param {Object} elem
   * @return {undefined}
   */
  function queue(elem) {
    var startIndex = elem || getLastUserMessageTimestamp.getLastUserMessageTimestamp();
    if (start <= startIndex) {
      start = startIndex;
      if (run() || q) {
        assert.doSync();
      }
    }
  }
  /**
   * @param {boolean} obj
   * @return {?}
   */
  function get(obj) {
    var value = assert.verifyNumber(obj.sb2);
    if (!value || value <= start) {
      return null;
    }
    return value;
  }
  /**
   * @param {boolean} data
   * @return {undefined}
   */
  function done(data) {
    var value = data && get(data);
    if (value) {
      start = value;
      utils.debug("load", start);
      run();
      /** @type {boolean} */
      q = false;
    }
  }
  /**
   * @param {boolean} obj
   * @return {?}
   */
  function init(obj) {
    var keys = get(obj);
    if (!keys) {
      utils.debug("store", start);
      obj.sb2 = start;
      /** @type {boolean} */
      q = false;
    }
    return obj;
  }
  var _this = nock("MercuryThreadInformer").get();
  var getLastUserMessageTimestamp = nock("MercuryTimestampTracker").get();
  var utils = activator.create("chat_title");
  /** @type {null} */
  var event = null;
  /** @type {number} */
  var start = 0;
  /** @type {boolean} */
  var q = false;
  var JsDiff = {
    /**
     * @param {?} iterable
     * @param {?} callback
     * @return {undefined}
     */
    blink : function(iterable, callback) {
      if (!event && start < callback) {
        goog.renderDocumentTitle(iterable, function(object) {
          if (!event) {
            event = Ext.blink(object);
          }
        });
      }
    },
    /**
     * @return {undefined}
     */
    stopBlinking : function() {
      queue();
    },
    /**
     * @return {undefined}
     */
    blinkingElsewhere : function() {
      /** @type {boolean} */
      q = true;
    }
  };
  assert.registerStateStorer(init);
  assert.registerStateLoader(done);
  _this.subscribe("thread-read-changed", function(dataAndEvents, map) {
    var z = getLastUserMessageTimestamp.getLastUserMessageTimestamp();
    /** @type {number} */
    var timestamp = 0;
    var letter;
    for (letter in map) {
      if (map[letter].mark_as_read && (map[letter].timestamp >= z && map[letter].timestamp > timestamp)) {
        timestamp = map[letter].timestamp;
      }
    }
    if (timestamp) {
      queue(timestamp);
    }
  });
  plugin.subscribe("activity", function() {
    queue();
  });
  (function() {
    var suiteView = assert.getInitial();
    if (suiteView) {
      start = get(suiteView) || 0;
    }
  })();
  module.exports = JsDiff;
}, null);
__d("MercuryBrowserAlerts", ["ArbiterMixin", "ChatActivity", "ChatConfig", "ChatOptions", "ChatTitleBarBlinker", "MercuryThreadMuter", "MercuryViewer", "MessagingTag", "Sound", "copyProperties", "MercuryThreads"], function(dataAndEvents, nock, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, root, oElement, $templateCache, _this, item, Data, User, folder, a, factory) {
  /**
   * @param {number} callback
   * @return {undefined}
   */
  function listener(callback) {
    if (_this.getSetting("sound")) {
      a.play([$templateCache.get("sound.notif_ogg_url"), $templateCache.get("sound.notif_mp3_url")], callback, false);
    }
  }
  var ostring = nock("MercuryThreads").get();
  a.init(["audio/ogg", "audio/mpeg"]);
  var require = {
    /**
     * @param {Object} message
     * @return {undefined}
     */
    messageReceived : function(message) {
      if (User.isViewer(message.author) || (!message.is_unread || message.folder != folder.INBOX && message.folder != folder.ARCHIVED)) {
        return;
      }
      var it = message.thread_id;
      var v = oElement.isActive();
      if (v) {
        /** @type {boolean} */
        var w = false;
        require.inform("before-alert", {
          threadID : it,
          /**
           * @return {undefined}
           */
          cancelAlert : function() {
            /** @type {boolean} */
            w = true;
          }
        });
      }
      ostring.getThreadMeta(it, function(owner) {
        var unlock = Data.isThreadMuted(owner);
        if (unlock) {
          return;
        }
        var args = message.timestamp;
        if (v) {
          if (!w) {
            listener(args);
          }
        } else {
          item.blink(it, args);
          listener(args);
        }
        item.blinkingElsewhere();
      }.bind(this));
    }
  };
  module.exports = factory(require, root);
}, null);
__d("XSkypeDeprecationWarningDialogController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/videocall/skype_deprecation_warning/", {
    __asyncDialog : {
      type : "Int"
    }
  });
}, null);
__d("VideoCallSkypeDeprecationWarning", ["AsyncDialog", "AsyncRequest", "CacheStorage", "VideoCallSupport", "XSkypeDeprecationWarningDialogController", "FBRTCLogger", "FBRTCUnsupportedBrowserMessage"], function(deepDataAndEvents, keepData, opt_attributes, matcherFunction, module, execResult, res, Test, Renderer, ignoreMethodDoesntExist, dataAndEvents, self, textAlt) {
  /**
   * @param {?} allBindingsAccessor
   * @return {undefined}
   */
  function init(allBindingsAccessor) {
    this.$VideoCallSkypeDeprecationWarning0 = new Renderer(str, options);
    this.$VideoCallSkypeDeprecationWarning1 = allBindingsAccessor;
    this.$VideoCallSkypeDeprecationWarning2 = self.getInstance();
  }
  /** @type {string} */
  var str = "localstorage";
  /** @type {string} */
  var options = "RTC_";
  /** @type {string} */
  var tag = "SKYPE_DEPRECATION_STATE";
  /** @type {number} */
  var q = 1E3 * 60 * 60 * 24;
  /**
   * @param {string} deepDataAndEvents
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  init.prototype.showWarningOrStartCall = function(deepDataAndEvents, dataAndEvents) {
    if (ignoreMethodDoesntExist.isSkypeDeprecated()) {
      if (ignoreMethodDoesntExist.isWebrtcSupported()) {
        this.$VideoCallSkypeDeprecationWarning1.makeWebRTCCall(deepDataAndEvents, dataAndEvents || self.Trigger.CHAT_TAB_ICON);
      } else {
        textAlt.showForOutgoingCall();
      }
    } else {
      if (this.$VideoCallSkypeDeprecationWarning3(deepDataAndEvents)) {
        this.$VideoCallSkypeDeprecationWarning4(deepDataAndEvents);
      } else {
        if (this.$VideoCallSkypeDeprecationWarning5(deepDataAndEvents)) {
          this.$VideoCallSkypeDeprecationWarning1.makeWebRTCCall(deepDataAndEvents, dataAndEvents || self.Trigger.CHAT_TAB_ICON);
        } else {
          this.$VideoCallSkypeDeprecationWarning1.makeSkypeCall(deepDataAndEvents);
        }
      }
    }
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  init.prototype.$VideoCallSkypeDeprecationWarning5 = function(deepDataAndEvents) {
    if (!this.$VideoCallSkypeDeprecationWarning1.canCallByWebrtc(deepDataAndEvents)) {
      return false;
    }
    if (!ignoreMethodDoesntExist.isPluginInstalled(false)) {
      return true;
    }
    return this.$VideoCallSkypeDeprecationWarning6().optedInToWebRTC;
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  init.prototype.$VideoCallSkypeDeprecationWarning3 = function(deepDataAndEvents) {
    if (!ignoreMethodDoesntExist.isPluginInstalled(false)) {
      return false;
    }
    var body = this.$VideoCallSkypeDeprecationWarning6();
    return!body.optedInToWebRTC && Date.now() - body.updatedAt > q;
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  init.prototype.$VideoCallSkypeDeprecationWarning4 = function(deepDataAndEvents) {
    this.$VideoCallSkypeDeprecationWarning2.logInfo(deepDataAndEvents, null, "Show Deprecation Dialog");
    this.$VideoCallSkypeDeprecationWarning7();
    if (!ignoreMethodDoesntExist.isWebrtcSupported()) {
      textAlt.warnForOutgoingCall(function() {
        this.$VideoCallSkypeDeprecationWarning1.makeSkypeCall(deepDataAndEvents);
      }.bind(this));
      return;
    }
    var title = dataAndEvents.getURIBuilder().getURI();
    var test = new Test(title);
    var $VideoCallSkypeDeprecationWarning1 = this;
    res.send(test, function(el) {
      el.subscribe("confirm", function() {
        el.hide();
        $VideoCallSkypeDeprecationWarning1.$VideoCallSkypeDeprecationWarning8();
        $VideoCallSkypeDeprecationWarning1.$VideoCallSkypeDeprecationWarning1.makeWebRTCCall(deepDataAndEvents, self.Trigger.SKYPE_DEPRECATION_DIALOG);
        $VideoCallSkypeDeprecationWarning1.$VideoCallSkypeDeprecationWarning2.logCallAction(deepDataAndEvents, null, self.CallAction.TRY_NEW);
      });
      el.subscribe("cancel", function() {
        $VideoCallSkypeDeprecationWarning1.$VideoCallSkypeDeprecationWarning1.makeSkypeCall(deepDataAndEvents);
        $VideoCallSkypeDeprecationWarning1.$VideoCallSkypeDeprecationWarning2.logCallAction(deepDataAndEvents, null, self.CallAction.START_SKYPE);
      });
    });
  };
  /**
   * @return {undefined}
   */
  init.prototype.$VideoCallSkypeDeprecationWarning7 = function() {
    this.$VideoCallSkypeDeprecationWarning0.set(tag, {
      optedInToWebRTC : false,
      updatedAt : Date.now()
    });
  };
  /**
   * @return {undefined}
   */
  init.prototype.$VideoCallSkypeDeprecationWarning8 = function() {
    this.$VideoCallSkypeDeprecationWarning0.set(tag, {
      optedInToWebRTC : true,
      updatedAt : Date.now()
    });
  };
  /**
   * @return {?}
   */
  init.prototype.$VideoCallSkypeDeprecationWarning6 = function() {
    var elements = this.$VideoCallSkypeDeprecationWarning0.get(tag);
    if (elements) {
      return elements;
    }
    return{
      optedInToWebRTC : false,
      updatedAt : 0
    };
  };
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  init.prototype.ut_setStorage = function(dataAndEvents) {
    this.$VideoCallSkypeDeprecationWarning0 = dataAndEvents;
  };
  /** @type {function (?): undefined} */
  module.exports = init;
}, null);
__d("VideoCallRecordMessageDialog", ["AsyncDialog", "AsyncRequest", "Dialog", "URI", "fbt"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, res, Buffer, Logger, next, item) {
  var prop = {
    /**
     * @param {string} key
     * @param {Function} data
     * @return {?}
     */
    get : function(key, data) {
      /** @type {string} */
      var r20 = "Would you like to leave a message?";
      /** @type {string} */
      var lab = "New Message";
      return(new Logger).setTitle(item._("{firstname} is Unavailable", [item.param("firstname", data)])).setBody(r20).setButtons([{
        name : "record-message",
        label : lab
      }, Logger.CANCEL]).setHandler(function() {
        var str = next("/ajax/messaging/composer.php").setQueryData({
          ids : [key],
          autoloadvideo : true
        }).toString();
        res.send(new Buffer(str));
      });
    }
  };
  module.exports = prop;
}, null);
__d("VideoCallCore", ["Event", "Arbiter", "AsyncRequest", "AvailableListConstants", "Bootloader", "ChannelConstants", "Cookie", "CSS", "Dialog", "FBRTCCore", "UserAgent_DEPRECATED", "VideoCallSupport", "VideoCallSkypeDeprecationWarning", "emptyFunction", "ge", "PresenceStatus", "randomInt", "VideoCallUI", "VideoCallIncomingCallController", "VideoCallTemplates", "ShortProfiles", "VideoCallRecordMessageDialog"], function(deepDataAndEvents, require, ignoreMethodDoesntExist, textAlt, context, keepData,
Event, left, Command, CLASS, assert, util, todo, api, Rect, defer, browser, dataAndEvents, Client, statusCode, oboeBus, otherMap, f) {
  /**
   * @return {undefined}
   */
  function subscribe() {
    if (!value) {
      value = new LatestEvent(self);
    }
  }
  /**
   * @return {?}
   */
  function tryIt() {
    return f(0, 4294967295);
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function i(obj) {
    return defer.isAvailableForWebrtcCalling(obj);
  }
  /**
   * @return {undefined}
   */
  function reset() {
    if (!self.mightReloadPostInstall()) {
      return;
    }
    var vcpwn = todo.get("vcpwn");
    if (vcpwn) {
      todo.clear("vcpwn");
      var port = todo.get("vctid");
      if (port) {
        todo.clear("vctid");
        if (todo.get("vctid")) {
          return;
        }
        if (port && dataAndEvents.isPluginInstalled()) {
          /** @type {string} */
          var name = "/ajax/chat/video/outgoing_dialog.php?idTarget=" + port;
          (new Rect).setAllowCrossPageTransition(true).setAsync(new Command(name)).show();
        }
      }
    }
  }
  var module = require("VideoCallUI").module;
  var LatestEvent = require("VideoCallIncomingCallController").module;
  require("VideoCallTemplates");
  /** @type {Array} */
  var ql = [];
  /** @type {Array} */
  var arr = [];
  /** @type {null} */
  var value = null;
  /** @type {boolean} */
  var ca = false;
  var self = {
    /**
     * @return {?}
     */
    mightReloadPostInstall : function() {
      return browser.windows();
    },
    /**
     * @param {?} x
     * @return {undefined}
     */
    onVideoMessage : function(x) {
      ql.push(x);
      assert.loadModules(["VideoCallController"], statusCode);
    },
    /**
     * @param {?} chunk
     * @return {undefined}
     */
    onRTCMessage : function(chunk) {
      if (dataAndEvents.isReceiveWebrtcSupported() && LatestEvent) {
        arr.push(chunk);
        subscribe();
      }
    },
    /**
     * @param {?} callback
     * @return {undefined}
     */
    setMessageHandler : function(callback) {
      this.onVideoMessage = callback;
      if (callback) {
        for (;ql.length;) {
          callback(ql.shift());
        }
      }
    },
    /**
     * @param {?} $sanitize
     * @return {undefined}
     */
    setRTCMessageHandler : function($sanitize) {
      this.onRTCMessage = $sanitize;
      if ($sanitize) {
        for (;arr.length;) {
          $sanitize(arr.shift());
        }
      }
    },
    /**
     * @param {string} key
     * @return {?}
     */
    availableForCall : function(key) {
      if (!dataAndEvents.isSkypeDeprecated()) {
        var camelKey = otherMap.get(key);
        if (camelKey === CLASS.ACTIVE) {
          var encodedKey = otherMap.getDetailedActivePresence(key);
          if (encodedKey === CLASS.ACTIVE_ON_WEB) {
            return true;
          }
        }
      }
      return i(key);
    },
    /**
     * @param {string} part
     * @return {undefined}
     */
    attachListenerToProfileButton : function(part) {
      var event = oboeBus("videoCallProfileButton");
      if (event) {
        if (!dataAndEvents.isVideoCallSupported()) {
          api.hide(event);
          return;
        }
        Event.listen(event, "click", function(dataAndEvents) {
          self.startCallOrLeaveMessage(part, "profile_button_click_timeline");
        });
      }
    },
    /**
     * @param {string} cur
     * @param {string} err
     * @return {undefined}
     */
    startCallOrLeaveMessage : function(cur, err) {
      if (this.availableForCall(cur)) {
        self.showOutgoingCallDialog(cur, err);
      } else {
        require("ShortProfiles").get(cur, function(args) {
          require("VideoCallRecordMessageDialog").get(cur, args.firstName).show();
        });
      }
    },
    /**
     * @param {string} deepDataAndEvents
     * @param {string} err
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    showOutgoingCallDialog : function(deepDataAndEvents, err, dataAndEvents) {
      if (ca) {
        return;
      }
      /** @type {boolean} */
      ca = true;
      setTimeout(function() {
        /** @type {boolean} */
        ca = false;
      }, 1E3);
      self.logClick(deepDataAndEvents, err || "unknown");
      var client = new Client(self);
      client.showWarningOrStartCall(deepDataAndEvents, dataAndEvents);
    },
    /**
     * @param {string} deepDataAndEvents
     * @return {?}
     */
    canCallByWebrtc : function(deepDataAndEvents) {
      if (dataAndEvents.isSendWebrtcSupported() && module) {
        return i(deepDataAndEvents);
      }
      return false;
    },
    /**
     * @param {string} deepDataAndEvents
     * @param {?} tx
     * @return {undefined}
     */
    makeWebRTCCall : function(deepDataAndEvents, tx) {
      /** @type {number} */
      var core_rnotwhite = parseInt(deepDataAndEvents, 10);
      subscribe();
      var index = tryIt();
      value.startingCallTo(core_rnotwhite, index);
      module.openAsCaller(deepDataAndEvents, index, tx);
    },
    /**
     * @param {string} deepDataAndEvents
     * @return {undefined}
     */
    makeSkypeCall : function(deepDataAndEvents) {
      /** @type {string} */
      var ajaxchatvideo = dataAndEvents.isPluginInstalled() ? "outgoing_dialog.php" : "intro.php";
      /** @type {string} */
      var element = "/ajax/chat/video/" + ajaxchatvideo + "?idTarget=" + deepDataAndEvents;
      (new Rect).setAllowCrossPageTransition(true).setAsync((new Command(element)).setHandler(statusCode).setServerDialogCancelHandler(statusCode)).show();
    },
    /**
     * @param {string} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    logClick : function(deepDataAndEvents, dataAndEvents) {
      (new Command).setURI("/ajax/chat/video/log_click.php").setData({
        targetUserID : deepDataAndEvents,
        clickSource : dataAndEvents
      }).setAllowCrossPageTransition(true).setErrorHandler(statusCode).send();
    }
  };
  left.subscribe(util.getArbiterType("video"), function(dataAndEvents, a) {
    self.onVideoMessage(a.obj);
  });
  left.subscribe(util.getArbiterType("webrtc"), function(dataAndEvents, a) {
    self.onRTCMessage(a.obj);
  });
  reset();
  if (dataAndEvents.isReceiveWebrtcSupported() && LatestEvent) {
    subscribe();
  }
  context.exports = self;
}, null);
__d("ChatAnimatedGifs", ["URI"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, proceed) {
  var jQuery = {
    /**
     * @param {Object} result
     * @return {?}
     */
    shouldHideBody : function(result) {
      if (!result.has_attachment) {
        return false;
      }
      /** @type {number} */
      var i = 0;
      for (;i < result.attachments.length;i++) {
        var option = result.attachments[i];
        if (option.preview_url) {
          var outputLen = jQuery.getRawUrlFromSafeUrl(option.preview_url);
          if (result.body == outputLen) {
            return true;
          }
        }
      }
      return false;
    },
    /**
     * @param {?} element
     * @return {?}
     */
    getRawUrlFromSafeUrl : function(element) {
      return proceed(element).getQueryData().url;
    }
  };
  module.exports = jQuery;
}, null);
__d("ChatEmployeeAwayWarning", ["MercuryIDs", "MercuryParticipants", "MercuryViewer"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, memcached, a) {
  var JsDiff = {
    /**
     * @param {?} participants
     * @param {?} $sanitize
     * @param {?} Application
     * @return {undefined}
     */
    updateEmployeeAwayWarning : function(participants, $sanitize, Application) {
      memcached.get(a.getID(), function(work) {
        var worksEmp = work.employee;
        if (worksEmp) {
          memcached.getMulti(participants.participants, function(map) {
            /** @type {boolean} */
            var q = false;
            var queueHooks = dataAndEvents.getUserIDFromThreadID(participants.thread_id);
            if (!queueHooks) {
              return;
            }
            /** @type {string} */
            var key = "fbid:" + queueHooks;
            var letter;
            for (letter in map) {
              if (key == map[letter].id && map[letter].is_employee_away) {
                /** @type {boolean} */
                q = true;
              }
            }
            if (q) {
              $sanitize();
            } else {
              Application();
            }
          });
        }
      });
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryShareAttachmentReactShape", ["React"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, framework) {
  /**
   * @return {?}
   */
  function text() {
    return framework.PropTypes.shape({
      description : framework.PropTypes.string,
      media : framework.PropTypes.shape({
        image : framework.PropTypes.string,
        duration : framework.PropTypes.number,
        playable : framework.PropTypes.bool,
        source : framework.PropTypes.string
      }),
      source : framework.PropTypes.string,
      style_list : framework.PropTypes.arrayOf(framework.PropTypes.string),
      title : framework.PropTypes.string,
      properties : framework.PropTypes.Object,
      uri : framework.PropTypes.string
    }).isRequired;
  }
  /** @type {function (): ?} */
  module.exports = text;
}, null);
__d("MercuryFallbackShareAttachment.react", ["Image.react", "ImageBlock.react", "Link.react", "MercuryShareAttachmentRenderLocations", "MercuryShareAttachmentReactShape", "React", "cx", "joinClasses"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, tr, type, attribute, config, $sanitize, dom, opt_attributes, extend) {
  var JsDiff = dom.createClass({
    displayName : "MercuryFallbackShareAttachment",
    propTypes : {
      attachment : $sanitize(),
      body : dom.PropTypes.string,
      location : dom.PropTypes.oneOf(config.getValues()),
      rootClassName : dom.PropTypes.string
    },
    /**
     * @param {?} id
     * @return {?}
     */
    renderLink : function(id) {
      if (config.isPreview(location)) {
        return id;
      }
      return dom.createElement(attribute, {
        href : this.props.attachment.uri
      }, id);
    },
    /**
     * @return {?}
     */
    render : function() {
      var self = this.props.attachment;
      var i = this.props.location;
      var body = this.props.body;
      var oldconfig = extend((config.CHAT === i ? "_49or" : "") + (config.CHAT_PREVIEW === i ? " " + "_tig" : "") + (" " + "_tih") + (body ? " " + "_r38" : "") + (!(self && self.media) ? " " + "_49ou" : ""), this.props.rootClassName);
      var html = dom.createElement("div", {
        className : "__6j"
      }, dom.createElement("div", {
        className : "__6k"
      }, self.title), dom.createElement("div", {
        className : "__6l"
      }, self.description), dom.createElement("div", {
        className : "__6m"
      }, self.source));
      if (self.media && self.media.image) {
        return this.renderLink(dom.createElement(type, {
          className : extend(this.props.className, oldconfig)
        }, dom.createElement(tr, {
          className : "__6n",
          src : self.media.image,
          width : 68
        }), html, this.props.children));
      }
      return this.renderLink(dom.createElement("div", {
        className : extend(this.props.className, oldconfig)
      }, html, this.props.children));
    }
  });
  module.exports = JsDiff;
}, null);
__d("MercuryShareAttachment.react", ["Map", "MercuryShareAttachmentReactShape", "MercuryShareAttachmentRenderLocations", "React", "StoryAttachmentStyle", "MercuryFallbackShareAttachment.react", "OrionMercuryShareAttachment"], function(deepDataAndEvents, require, ignoreMethodDoesntExist, textAlt, module, keepData, dataAndEvents, $sanitize, data, self, word) {
  var words = new dataAndEvents;
  words.set(word.FALLBACK, require("MercuryFallbackShareAttachment.react"));
  words.set(word.ORION, require("OrionMercuryShareAttachment").module);
  var JsDiff = self.createClass({
    displayName : "MercuryShareAttachment",
    propTypes : {
      attachment : $sanitize(),
      location : self.PropTypes.oneOf(data.getValues()),
      rootClassName : self.PropTypes.string
    },
    /**
     * @return {?}
     */
    render : function() {
      var data = this.props.attachment;
      if (!data.style_list) {
        return null;
      }
      /** @type {null} */
      var type = null;
      /** @type {number} */
      var index = 0;
      for (;index < data.style_list.length;index++) {
        type = words.get(data.style_list[index]);
        if (type) {
          break;
        }
      }
      if (!type) {
        return null;
      }
      return self.createElement(type, self.__spread({}, this.props));
    }
  });
  module.exports = JsDiff;
}, null);
__d("XStickerPackImagesController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/{pack_id}/images/", {
    pack_id : {
      type : "Int",
      required : true
    },
    sticker_size : {
      type : "Int",
      defaultValue : 50
    }
  });
}, null);
__d("XStickersAddPackController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/addpack/", {
    pack_id : {
      type : "Int"
    },
    size : {
      type : "String"
    },
    redirect_uri : {
      type : "String"
    },
    is_promoted : {
      type : "Bool",
      defaultValue : false
    }
  });
}, null);
__d("XStickersRemovePackController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/removepack/", {
    pack_id : {
      type : "Int"
    },
    size : {
      type : "String"
    },
    redirect_uri : {
      type : "String"
    }
  });
}, null);
__d("XStickerStateInitialDataController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/state/", {});
}, null);
__d("XStickerStatePackDataController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/state/pack/", {
    pack_id : {
      type : "Int",
      required : true
    }
  });
}, null);
__d("XStickerStateStoreDataController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/state/store/", {});
}, null);
__d("XStickerSearchPromotePackController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/search/promotePack/", {
    sticker_id : {
      type : "Int",
      required : true
    }
  });
}, null);
__d("XStickerSearchNUXSeenController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/searchNUX/seen/", {});
}, null);
__d("XStickerTagDataController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/tag/data/", {});
}, null);
__d("XStickerQueryImagesController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/query/images/", {
    query : {
      type : "String",
      required : true
    }
  });
}, null);
__d("StickerServerRequests", ["AsyncRequest", "Promise", "XStickerPackImagesController", "XStickersAddPackController", "XStickersRemovePackController", "XStickerStateInitialDataController", "XStickerStatePackDataController", "XStickerStateStoreDataController", "XStickerSearchPromotePackController", "XStickerSearchNUXSeenController", "XStickerTagDataController", "XStickerQueryImagesController"], function(oFunctionBody, _$timeout_, failing_message, nextStack, module, noCorrect, Tag, Deferred, dataAndEvents,
ignoreMethodDoesntExist, deepDataAndEvents, textAlt, keepData, opt_attributes, matcherFunction, execResult, opt_keys, positionError) {
  /**
   * @param {?} dt
   * @param {Function} callback
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  function tick(dt, callback, deepDataAndEvents) {
    return(new Deferred(function($sanitize, dataAndEvents) {
      return(new Tag(dt)).setHandler(function(join) {
        return $sanitize(join.getPayload());
      }).setAllowCrossPageTransition(deepDataAndEvents).send();
    })).then(callback);
  }
  var JsDiff = {
    /**
     * @param {number} deepDataAndEvents
     * @param {?} bool
     * @param {?} cb
     * @return {undefined}
     */
    addPack : function(deepDataAndEvents, bool, cb) {
      var name = ignoreMethodDoesntExist.getURIBuilder().setInt("pack_id", deepDataAndEvents).setBool("is_promoted", bool).getURI();
      (new Tag(name)).setHandler(function(msg) {
        return cb(msg.payload);
      }).send();
    },
    /**
     * @param {?} union
     * @param {?} cb
     * @return {undefined}
     */
    removePack : function(union, cb) {
      var name = deepDataAndEvents.getURIBuilder().setInt("pack_id", union).getURI();
      (new Tag(name)).setHandler(function(msg) {
        return cb(msg.payload);
      }).send();
    },
    /**
     * @param {(Object|string)} dep
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    getStickersForPack : function(dep, deepDataAndEvents) {
      var r20 = dataAndEvents.getURIBuilder().setInt("pack_id", dep).setInt("sticker_size", deepDataAndEvents).getURI();
      return new Deferred(function(cb, dataAndEvents) {
        return(new Tag).setURI(r20).setMethod("POST").setHandler(function(msg) {
          return cb(msg.payload);
        }).send();
      });
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {Function} cb
     * @return {undefined}
     */
    getStickersForQuery : function(deepDataAndEvents, cb) {
      (new Tag).setURI(positionError.getURIBuilder().setString("query", deepDataAndEvents).getURI()).setMethod("POST").setHandler(function(outErr) {
        return cb(outErr);
      }).send();
    },
    /**
     * @param {Function} next_callback
     * @return {?}
     */
    fetchTrayData : function(next_callback) {
      return tick(textAlt.getURIBuilder().getURI(), next_callback, true);
    },
    /**
     * @param {Function} next_callback
     * @return {?}
     */
    fetchStoreData : function(next_callback) {
      return tick(opt_attributes.getURIBuilder().getURI(), next_callback);
    },
    /**
     * @param {?} union
     * @param {Function} next_callback
     * @return {?}
     */
    fetchPackData : function(union, next_callback) {
      return tick(keepData.getURIBuilder().setInt("pack_id", union).getURI(), next_callback);
    },
    /**
     * @param {Function} next_callback
     * @return {?}
     */
    fetchTagData : function(next_callback) {
      return tick(opt_keys.getURIBuilder().getURI(), next_callback, true);
    },
    /**
     * @return {undefined}
     */
    markSeenSearchNUX : function() {
      (new Tag(execResult.getURIBuilder().getURI().toString())).send();
    },
    /**
     * @param {number} union
     * @param {Function} next_callback
     * @return {undefined}
     */
    promotePackSentFromSearch : function(union, next_callback) {
      var elapsed = matcherFunction.getURIBuilder().setInt("sticker_id", union).getURI();
      tick(elapsed, next_callback, true);
    }
  };
  module.exports = JsDiff;
}, null);
__d("StickerImages", ["StickerServerRequests"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, deps) {
  var all = {};
  var list = {};
  var getStickerTagsData = {};
  var JsDiff = {
    /**
     * @return {?}
     */
    getStickerTagsData : function() {
      return getStickerTagsData;
    },
    /**
     * @param {(Object|string)} dep
     * @param {?} deepDataAndEvents
     * @param {Function} cb
     * @return {undefined}
     */
    requestStickersForPack : function(dep, deepDataAndEvents, cb) {
      if (!dep) {
        return;
      }
      if (!list[dep]) {
        list[dep] = deps.getStickersForPack(dep, deepDataAndEvents);
        list[dep].then(function(failures) {
          failures.forEach(function(walkers) {
            return this.cacheSticker(walkers);
          }.bind(this));
        }.bind(this));
      }
      list[dep].then(function(outErr) {
        return cb(outErr);
      });
    },
    /**
     * @param {Element} obj
     * @return {undefined}
     */
    cacheSticker : function(obj) {
      /** @type {Element} */
      all[obj.id] = obj;
    },
    /**
     * @param {?} uuid
     * @return {?}
     */
    getSticker : function(uuid) {
      return all[uuid];
    }
  };
  module.exports = JsDiff;
}, null);
__d("StickerUtils", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    /**
     * @param {number} height
     * @param {number} scale
     * @param {number} y
     * @return {?}
     */
    getScaledDimensions : function(height, scale, y) {
      var h;
      var width;
      var ratio;
      if (scale > height) {
        /** @type {number} */
        ratio = y / scale;
        /** @type {number} */
        h = height * ratio;
        /** @type {number} */
        width = scale * ratio;
      } else {
        /** @type {number} */
        ratio = y / height;
        /** @type {number} */
        h = height * ratio;
        /** @type {number} */
        width = scale * ratio;
      }
      return{
        height : Math.round(h),
        width : Math.round(width)
      };
    },
    /**
     * @param {string} str
     * @return {?}
     */
    capitalizeWords : function(str) {
      var lines = str.split(" ");
      /** @type {number} */
      var i = 0;
      for (;i < lines.length;i++) {
        var prefix = lines[i].charAt(0).toUpperCase();
        lines[i] = prefix + lines[i].substr(1);
      }
      return lines.join(" ");
    }
  };
  module.exports = JsDiff;
}, null);
__d("XStickerAssetController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/stickers/asset/", {
    sticker_id : {
      type : "Int",
      required : true
    },
    image_type : {
      type : "Enum",
      defaultValue : "BestEffortImage",
      enumType : 1
    }
  });
}, null);
__d("XLinkshimLogController", ["XController"], function(dataAndEvents, require, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  module.exports = require("XController").create("/si/ajax/l/render_linkshim_log/", {
    u : {
      type : "String",
      required : true
    },
    h : {
      type : "String",
      required : true
    },
    render_verification : {
      type : "Bool",
      defaultValue : false
    },
    enc : {
      type : "String"
    },
    d : {
      type : "String"
    }
  });
}, null);
__d("LinkshimHandler", ["Event", "LinkshimAsyncLink", "LinkshimHandlerConfig", "URI", "XLinkshimLogController", "shield"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, m, jQuery, dataAndEvents, prep, deepDataAndEvents, forOwn) {
  /**
   * @param {?} req
   * @return {?}
   */
  function get(req) {
    return req.getQueryData().u ? new prep(req.getQueryData().u) : null;
  }
  /**
   * @param {?} keepData
   * @return {?}
   */
  function remove(keepData) {
    return keepData.getQueryData().hasOwnProperty("s");
  }
  /**
   * @param {?} req
   * @return {?}
   */
  function compile(req) {
    var current = req.getQueryData().hasOwnProperty("enc") ? req.getQueryData().enc : "";
    return deepDataAndEvents.getURIBuilder().setString("u", req.getQueryData().u).setString("h", req.getQueryData().h).setBool("render_verification", req.getQueryData().hasOwnProperty("render_verification")).setString("enc", current).getURI();
  }
  /**
   * @param {?} req
   * @return {?}
   */
  function load(req) {
    var result;
    if (guid()) {
      result = prep(req).addQueryData({
        render_verification : true
      });
    } else {
      result = get(req);
    }
    return result;
  }
  /**
   * @return {?}
   */
  function guid() {
    var s = dataAndEvents.render_verification_rate || 0;
    return Math.floor(Math.random() * s + 1) === s;
  }
  var JsDiff = {
    /**
     * @param {Element} target
     * @return {undefined}
     */
    setUpLinkshimHandling : function(target) {
      try {
        var key = prep(target.getAttribute("href"));
        var camelKey = get(key);
        if (camelKey && remove(key)) {
          m.listen(target, "mouseover", forOwn(jQuery.swap, null, target, camelKey));
          var values = load(key);
          m.listen(target, "click", function() {
            if (dataAndEvents.supports_meta_referrer) {
              jQuery.referrer_log(target, values, compile(key).toString());
            } else {
              jQuery.swap(target, key);
            }
          });
        }
      } catch (t) {
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryAttachmentRenderer", ["MercuryAttachmentTemplates", "MercuryAttachmentAudioClip.react", "Bootloader", "ChatAnimatedGifs", "SyncRequest.react", "CSS", "MercuryConstants", "DOM", "Event", "MercuryAttachment", "MercuryAttachmentType", "MercuryAttachmentVideo.react", "MercuryConfig", "MercuryIDs", "MercuryParticipants", "MercuryShareAttachment.react", "MercuryShareAttachmentRenderLocations", "MercuryViewer", "ProgressBar", "React", "Sticker.react", "StickerAssetType", "StickerConstants",
"StickerImages", "StickerUtils", "Style", "URI", "UserAgent_DEPRECATED", "cx", "fbt", "invariant", "updatePhotoProgressBar", "XStickerAssetController", "OrionMercuryAttachment", "MercuryMessages", "MercuryAttachmentAudioClipTranscript.react"], function(deepDataAndEvents, require, keepData, $sanitize, context, opt_attributes, _device_parser, elem, exports, demoLink, success, $el, depMap, dom, testPage, assert, ActivityObject, type, dataAndEvents, User, deck, name, data, a, Element, $, t, gridStore,
opts, should, params, domStyle, readFile, UA, ignoreMethodDoesntExist, item, localize, trigger, textAlt) {
  /**
   * @param {Object} data
   * @param {string} regex
   * @return {?}
   */
  function render(data, regex) {
    var doc = _device_parser[regex].build().setNodeContent("filename", data.name);
    var link = doc.getNode("link");
    link.setAttribute("href", data.url);
    if (data.rel) {
      link.setAttribute("rel", data.rel);
    }
    $el.addClass(doc.getRoot(), assert.getAttachIconClass(data.icon_type));
    return doc;
  }
  /**
   * @param {Function} head
   * @param {string} regex
   * @return {?}
   */
  function initialize(head, regex) {
    var data = _device_parser[regex].build().setNodeContent("filename", head.name);
    $el.addClass(data.getRoot(), assert.getAttachIconClass(head.icon_type));
    return data;
  }
  var style = require("OrionMercuryAttachment").module;
  var getMessagesFromIDs = require("MercuryMessages").get();
  /** @type {boolean} */
  var STANDARD_CSS_OPACITY_SUPPORTED = UA.ie() <= 8;
  var self = {
    /**
     * @param {boolean} obj
     * @param {Object} doc
     * @param {Object} results
     * @param {number} value
     * @param {string} i
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    renderAttachment : function(obj, doc, results, value, i, deepDataAndEvents) {
      /** @type {number} */
      var millis = 100;
      /** @type {number} */
      var oldconfig = obj ? 160 : 400;
      /** @type {null} */
      var object = null;
      /** @type {null} */
      var result = null;
      var depId = depMap.MercurySupportedShareType;
      if (this.isErrorAttachment(doc)) {
        object = self.renderError(doc);
      }
      if (this.isShareAttachment(doc) && doc.share) {
        result = dom.create("div");
        $.render($.createElement(name, {
          attachment : doc.share,
          body : results.body,
          location : data.CHAT
        }), result);
      }
      if (!result && (this.isShareAttachment(doc) && (doc.share_xhp && (doc.share_data_type === depId.FB_BROWSE_QUERY || !obj)))) {
        result = self.renderShareXHP(doc, results.id);
      }
      if (this.isStickerAttachment(doc)) {
        result = self.renderSticker(doc, results, obj, deepDataAndEvents);
      }
      if (!result && this.isShareAttachment(doc)) {
        var defaultView = doc.share_data_type;
        switch(defaultView) {
          case depId.FB_PHOTO:
            result = self.renderPreview(doc, results, value, i);
            break;
          case depId.FB_VIDEO:
            result = self.renderVideoThumb(doc);
            break;
          case depId.FB_MUSIC_ALBUM:
          ;
          case depId.FB_SONG:
          ;
          case depId.FB_PLAYLIST:
          ;
          case depId.FB_MUSICIAN:
          ;
          case depId.FB_RADIO_STATION:
            result = self.renderMusic(doc);
            break;
          case depId.EXTERNAL:
          ;
          case depId.FB_TEMPLATE:
          ;
          case depId.FB_SOCIAL_REPORT_PHOTO:
            result = self.renderExternalLink(doc);
            break;
          case depId.FB_COUPON:
          ;
          case depId.FB_EVENT:
          ;
          case depId.FB_SHOERACK_INVITATION:
            result = self.renderChatXHP(doc);
            break;
          case depId.FB_SOCIAL_RESOLUTION:
          ;
          case depId.FB_STATUS:
            result = self.renderSocialResolution(doc);
            break;
          case depId.FB_SYNC_REQUEST:
            result = self.renderSyncRequest(doc);
            break;
          case depId.FB_OPEN_GRAPH:
            result = self.renderOpenGraph(doc);
            break;
          case depId.FB_ORION:
            if (style) {
              result = self.renderOrionMercuryAttachment(doc, obj);
            }
            break;
          default:
            if (doc.name) {
              result = self.renderShareLink(doc, results && results.id, obj);
            }
            break;
        }
      }
      if (!result && doc.preview_loading) {
        result = self.renderPreview(doc, results, value, i);
      }
      if (!result && this.isVideoAttachment(doc)) {
        result = dom.create("div");
        $.render(self.renderVideo(doc, obj), result);
      }
      if (!result && doc.preview_url) {
        result = self.renderPreview(doc, results, value, i);
      }
      if (!result && this.isFileAttachment(doc)) {
        if (doc.metadata && assert.isVoiceMessage(doc.metadata.type)) {
          result = dom.create("div");
          var params = self.renderAudioClip(doc, results.message_id, millis, oldconfig);
          $.render(params, result);
        } else {
          result = obj ? self.renderFileLink(doc) : self.renderExtendedFileLink(doc);
        }
      }
      return{
        error : object,
        content : result,
        bubblePreferred : this.isBubblePreferred(doc)
      };
    },
    /**
     * @param {Object} walkers
     * @return {?}
     */
    isBubblePreferred : function(walkers) {
      return!this.isStickerAttachment(walkers) && !this.isSyncRequestAttachment(walkers);
    },
    /**
     * @param {Object} info
     * @return {?}
     */
    renderError : function(info) {
      var store = _device_parser[":fb:mercury:attachment:error"].build();
      dom.appendContent(store.getNode("error"), info.error_msg);
      return store.getRoot();
    },
    /**
     * @param {Object} item
     * @return {?}
     */
    renderSocialResolution : function(item) {
      var store = _device_parser[":fb:mercury:attachment:social-resolution"].build();
      store.setNodeContent("post", item.share_xhp);
      return store.getRoot();
    },
    /**
     * @param {Object} item
     * @return {?}
     */
    renderChatXHP : function(item) {
      var store = _device_parser[":fb:mercury:attachment:social-resolution"].build();
      store.setNodeContent("post", item.chat_xhp);
      return store.getRoot();
    },
    /**
     * @param {Object} state
     * @return {?}
     */
    renderOpenGraph : function(state) {
      var node = state.share_xhp.cloneNode(true);
      if (UA.firefox()) {
        domStyle.set(node, "minWidth", "180px");
      }
      return node;
    },
    /**
     * @param {Object} options
     * @return {?}
     */
    renderExternalLink : function(options) {
      var self = _device_parser[":fb:mercury:attachment:external-link"].build().setNodeContent("name", options.name);
      if (options.base_url) {
        self.setNodeContent("shortLink", options.base_url);
      }
      var target = self.getNode("preview");
      var item = self.getNode("image-link");
      item.setAttribute("href", options.url);
      if (options.rel) {
        item.setAttribute("rel", options.rel);
      }
      if (options.preview_url) {
        var e = self.getNode("preview-image");
        var href = options.preview_url;
        var input = readFile(demoLink.getRawUrlFromSafeUrl(href));
        if (options.animated_gif_uri) {
          href = readFile(options.animated_gif_uri);
          $el.addClass(target, "_dri");
          if (options.name && options.name.__html == input.toString()) {
            self.setNodeContent("name", "");
          }
        }
        e.setAttribute("src", href);
        $el.addClass(target, options.preview_class);
        $el.show(e);
      } else {
        $el.addClass(self.getRoot(), "noMedia");
        $el.hide(target);
      }
      self.getNode("name").setAttribute("href", options.url);
      $sanitize(["LinkshimHandler"], function(classes) {
        classes.setUpLinkshimHandling(self.getNode("name"));
        classes.setUpLinkshimHandling(self.getNode("image-link"));
      });
      if (options.rel) {
        self.getNode("name").setAttribute("rel", options.rel);
      }
      return self.getRoot();
    },
    /**
     * @param {Object} data
     * @return {?}
     */
    renderFileLink : function(data) {
      /** @type {null} */
      var r20 = null;
      if (data.url === "") {
        /** @type {string} */
        r20 = ":fb:mercury:attachment:file-name";
        return initialize(data, r20).getRoot();
      } else {
        /** @type {string} */
        r20 = ":fb:mercury:attachment:file-link";
        return render(data, r20).getRoot();
      }
    },
    /**
     * @param {Object} result
     * @param {?} message_id
     * @param {number} x
     * @param {string} b
     * @return {?}
     */
    renderAudioClip : function(result, message_id, x, b) {
      /** @type {number} */
      var xa = result.metadata.duration / 1E3;
      /** @type {number} */
      var w = 200;
      if (x && b) {
        if (xa < 5) {
          /** @type {number} */
          w = x;
        } else {
          w = (1 - Math.pow(10, (xa - 5) / -30)) * (b - x) + x;
        }
      }
      /** @type {null} */
      var text = null;
      if (dataAndEvents.WebMessengerTranscriptRenderGK) {
        var t = require("MercuryAttachmentAudioClipTranscript.react");
        text = $.createElement(t, {
          message_id : message_id,
          attachment : result
        });
      }
      return $.createElement("div", null, $.createElement(elem, {
        src : result.url,
        duration : result.metadata.duration / 1E3,
        showHelp : false,
        width : w
      }), text);
    },
    /**
     * @param {Object} obj
     * @param {boolean} callback
     * @return {?}
     */
    renderVideo : function(obj, callback) {
      var master = callback ? obj.metadata.chat_size : obj.metadata.inbox_size;
      var l = callback ? obj.metadata.chat_preview : obj.metadata.inbox_preview;
      var dimensions = obj.metadata.dimensions;
      if (!master) {
        l = obj.thumbnail_url;
        master = dimensions = {
          height : obj.preview_height,
          width : obj.preview_width
        };
      }
      return $.createElement(type, {
        duration : obj.metadata.duration,
        name : obj.name,
        pageID : obj.metadata.pageid,
        thumbSize : master,
        thumbnail : l,
        videoSize : dimensions,
        videoID : obj.metadata.fbid,
        videoURI : obj.url
      });
    },
    /**
     * @param {Object} data
     * @return {?}
     */
    renderExtendedFileLink : function(data) {
      /** @type {null} */
      var r20 = null;
      if (data.url === "") {
        /** @type {string} */
        r20 = ":fb:mercury:attachment:file-name";
        return initialize(data, r20).getRoot();
      }
      /** @type {string} */
      r20 = ":fb:mercury:attachment:extended-file-link";
      var dom = render(data, r20);
      if (data.open_url) {
        var e = dom.getNode("openLinkContainer");
        $el.show(e);
        var link = dom.getNode("openFile");
        link.setAttribute("href", data.open_url);
      }
      var item = dom.getNode("downloadFile");
      item.setAttribute("href", data.url);
      if (data.rel) {
        item.setAttribute("rel", data.rel);
      }
      return dom.getRoot();
    },
    /**
     * @param {Object} value
     * @return {?}
     */
    renderMusic : function(value) {
      var fs = _device_parser[":fb:mercury:attachment:music"].build().setNodeContent("filename", value.name);
      var link = fs.getNode("link");
      link.setAttribute("href", value.url);
      link.setAttribute("target", "_blank");
      if (value.rel) {
        link.setAttribute("rel", value.rel);
      }
      var item = fs.getNode("image-link");
      item.setAttribute("href", value.url);
      if (value.rel) {
        item.setAttribute("rel", value.rel);
      }
      var obj = fs.getNode("preview-image");
      obj.setAttribute("src", value.preview_url);
      $el.show(obj);
      $el.addClass(fs.getNode("icon_link"), "MercuryMusicIcon");
      return fs.getRoot();
    },
    /**
     * @param {Object} state
     * @return {?}
     */
    renderSyncRequest : function(state) {
      var opts = success(state.metadata);
      var pos = dom.create("div");
      $.render(opts, pos);
      return pos;
    },
    /**
     * @param {Object} item
     * @param {boolean} activeXObj
     * @return {?}
     */
    renderOrionMercuryAttachment : function(item, activeXObj) {
      var self = Object.assign({}, item.metadata);
      if (!activeXObj) {
        /** @type {string} */
        self.theme = "messages";
      }
      var target = $.createElement(style, $.__spread({}, self));
      var pos = dom.create("div");
      $.render(target, pos);
      return pos;
    },
    /**
     * @param {?} s
     * @param {?} file
     * @return {?}
     */
    resizeContain : function(s, file) {
      /** @type {number} */
      var totalWidth = s.width / s.height;
      /** @type {number} */
      var width = file.width / file.height;
      if (width < totalWidth) {
        return{
          width : Math.min(s.height * width, file.width),
          height : Math.min(s.height, file.height)
        };
      } else {
        return{
          width : Math.min(s.width, file.width),
          height : Math.min(s.width / width, file.height)
        };
      }
    },
    /**
     * @param {Object} options
     * @param {Object} obj
     * @param {number} pixels
     * @param {string} style
     * @return {?}
     */
    renderPreview : function(options, obj, pixels, style) {
      var store = _device_parser[":fb:mercury:attachment:preview"].build();
      var element = store.getNode("image-link");
      if (options) {
        if (options.url) {
          var url = (new readFile(options.url)).getQueryData().uri;
          if (url && options.rel === "async") {
            element.setAttribute("href", url);
            element.setAttribute("ajaxify", options.url);
          } else {
            element.setAttribute("href", options.url);
          }
        }
        if (options.rel) {
          element.setAttribute("rel", options.rel);
        }
        var imgSrc;
        if (options.preview_uploading) {
          var event = store.getNode("cancel-button-container");
          $el.show(event);
          var inputkh = store.getNode("cancel-button");
          var onResult = testPage.listen(inputkh, "click", function() {
            options.upload_canceled(options.upload_id);
            $el.hide(store.getRoot());
            onResult.remove();
          });
          options.on_success(function(dataAndEvents, cursorData) {
            if (cursorData.upload_id == options.upload_id) {
              $el.hide(event);
              onResult.remove();
            }
          });
          var tag = store.getNode("progress-bar");
          var el = new Element(tag);
          var active = store.getNode("progress-bar-container");
          localize(options.upload_id);
          options.on_progress(function(dataAndEvents, params) {
            if (params.upload_id == options.upload_id) {
              $el.removeClass(active, "_395w");
              $el.show(active);
              trigger(el, params.event);
            }
          });
          if (options.on_resizing_progress) {
            options.on_resizing_progress(function(dataAndEvents, result) {
              if (result.upload_id == options.upload_id) {
                $el.addClass(active, "_395w");
                $el.show(active);
                el.setPosition(100 * result.event.written / result.event.total);
              }
            });
          }
          $el.addClass(element, "_57jm");
          if (pixels >= 176) {
            /** @type {string} */
            imgSrc = "/images/photos/dots_large.png";
          } else {
            if (pixels >= 86) {
              /** @type {string} */
              imgSrc = "/images/photos/dots_medium.png";
            } else {
              /** @type {string} */
              imgSrc = "/images/photos/dots_small.png";
            }
          }
          domStyle.set(element, "width", pixels + "px");
          domStyle.set(element, "max-width", pixels + "px");
          if (options.preview_width && options.preview_height) {
            domStyle.set(element, "padding-bottom", options.preview_height / options.preview_width * 100 + "%");
          }
        } else {
          if (options.preview_loading) {
            $el.addClass(element, "_5xdv");
            if (style === "contain" && (options.preview_width && options.preview_height)) {
              domStyle.set(element, "width", options.preview_width + "px");
              domStyle.set(element, "height", options.preview_height + "px");
            }
            if (style === "cover" && !STANDARD_CSS_OPACITY_SUPPORTED) {
              $el.addClass(element, "_55pj");
            }
          } else {
            if (options.metadata && options.metadata.fbid) {
              imgSrc = readFile("/ajax/mercury/attachments/photo.php").addQueryData({
                fbid : options.metadata.fbid,
                request_user_id : options.metadata.pageid,
                mode : style,
                width : pixels,
                height : pixels
              }).toString();
              var endpoint = element.getAttribute("ajaxify");
              element.removeAttribute("ajaxify");
              element.removeAttribute("rel");
              testPage.listen(element, "click", function(tail) {
                tail.prevent();
                exports.loadModules(["MessagesViewer"], function(result) {
                  result.bootstrapWithConfig({
                    src : imgSrc,
                    endpoint : endpoint,
                    fbid : options.metadata.fbid,
                    dimensions : options.metadata.dimensions,
                    disablePaging : obj && obj.attachments.length == 1
                  }, element);
                });
              });
            } else {
              var input = readFile(options.preview_url);
              if (style) {
                input.addQueryData({
                  mode : style
                });
              }
              if (pixels) {
                input.addQueryData({
                  width : pixels,
                  height : pixels
                });
              }
              imgSrc = input.toString();
            }
          }
        }
        var img = store.getNode("preview-image");
        if (imgSrc) {
          if (style === "contain" && (options.preview_width && options.preview_height)) {
            var info = self.resizeContain({
              width : pixels,
              height : pixels
            }, {
              width : options.preview_width,
              height : options.preview_height
            });
            img.setAttribute("width", info.width);
            img.setAttribute("height", info.height);
          }
          if (options.preview_uploading || style === "cover" && !STANDARD_CSS_OPACITY_SUPPORTED) {
            $el.addClass(element, "_55pj");
            domStyle.set(element, "backgroundImage", "url(" + imgSrc + ")");
          } else {
            /**
             * @return {undefined}
             */
            img.onload = function() {
              img.removeAttribute("width");
              img.removeAttribute("height");
            };
            img.setAttribute("src", imgSrc);
          }
        }
        if (obj) {
          this.renderReportRespondLink(store.getRoot(), options, obj.message_id);
        }
      }
      return store.getRoot();
    },
    /**
     * @param {Object} a
     * @param {?} dataAndEvents
     * @param {boolean} activeXObj
     * @return {?}
     */
    renderShareLink : function(a, dataAndEvents, activeXObj) {
      var self = _device_parser[":fb:mercury:attachment:share-link"].build().setNodeContent("name", a.name);
      var node = self.getNode("link");
      node.setAttribute("href", a.url);
      if (a.rel) {
        node.setAttribute("rel", a.rel);
      }
      return self.getRoot();
    },
    /**
     * @param {Object} data
     * @return {?}
     */
    renderVideoThumb : function(data) {
      var me = _device_parser[":fb:mercury:attachment:video-thumb"].build();
      var item = me.getNode("thumb");
      item.setAttribute("href", data.url);
      item.setAttribute("rel", data.rel);
      var img = dom.find(me.getRoot(), "img");
      img.src = data.preview_url;
      return me.getRoot();
    },
    /**
     * @param {Object} options
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    renderShareXHP : function(options, deepDataAndEvents) {
      var node = dom.create("div");
      if (options) {
        dom.appendContent(node, options.share_xhp);
        this.renderReportRespondLink(node, options, deepDataAndEvents);
      }
      return node;
    },
    /**
     * @param {Object} data
     * @param {Object} e
     * @param {boolean} type
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    renderSticker : function(data, e, type, deepDataAndEvents) {
      /** @type {string} */
      var msg = type ? "chatScrolled/" : "messengerScrolled/";
      msg += e.thread_id;
      var view = dom.create("div");
      $el.addClass(view, "stickerContainer");
      if (!data.metadata) {
        var value = should.getSticker(e.sticker_id);
        var key = Object.assign({}, value);
        var element = params.getScaledDimensions(value.height, value.width, opts.THREAD_SIZE);
        var originalHeight = element.height;
        var originalWidth = element.width;
        key.height = originalHeight;
        key.width = originalWidth;
        key.stickerID = e.sticker_id;
        /** @type {string} */
        key.spriteURI = "";
        /** @type {string} */
        key.spriteURI2x = "";
        /** @type {string} */
        key.paddedSpriteURI = "";
        /** @type {string} */
        key.paddedSpriteURI2x = "";
        data.metadata = key;
      }
      /** @type {null} */
      var numberOfShownHints = null;
      if (data.metadata.stickerID) {
        numberOfShownHints = data.metadata.stickerID.toString();
      }
      /** @type {null} */
      var packID = null;
      if (data.metadata.packID) {
        packID = data.metadata.packID.toString();
      }
      var test = textAlt.getURIBuilder().setInt("sticker_id", numberOfShownHints);
      /** @type {null} */
      var spriteURI = null;
      /** @type {null} */
      var paddedSpriteURI = null;
      if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        paddedSpriteURI = data.metadata.paddedSpriteURI2x;
        spriteURI = data.metadata.spriteURI2x;
      } else {
        paddedSpriteURI = data.metadata.paddedSpriteURI;
        spriteURI = data.metadata.spriteURI;
      }
      var v = $.createElement(t, {
        animationTrigger : "hover",
        className : "mvs",
        frameCount : data.metadata.frameCount || 1,
        frameRate : data.metadata.frameRate || 83,
        framesPerCol : data.metadata.framesPerCol || 1,
        framesPerRow : data.metadata.framesPerRow || 1,
        onStickerClick : deepDataAndEvents,
        packID : packID,
        paddedSpriteURI : paddedSpriteURI,
        sourceHeight : data.metadata.height,
        sourceURI : test.setEnum("image_type", gridStore.IMAGE).getURI().toString(),
        sourceWidth : data.metadata.width,
        spriteURI : spriteURI,
        stickerID : numberOfShownHints,
        subscribedThreadID : msg
      });
      $.render(v, view);
      return view;
    },
    /**
     * @param {?} node
     * @param {Object} optionsString
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    renderReportRespondLink : function(node, optionsString, deepDataAndEvents) {
      if (!optionsString.is_social_report_attachment) {
        return null;
      }
      switch(optionsString.share_data_type) {
        case depMap.MercurySupportedShareType.FB_PHOTO:
          break;
        case depMap.MercurySupportedShareType.FB_SOCIAL_REPORT_PHOTO:
          return null;
        default:
          return null;
      }
      /** @type {null} */
      var data = null;
      if (deepDataAndEvents) {
        data = getMessagesFromIDs.getMessagesFromIDs([deepDataAndEvents])[0];
      }
      if (!data) {
        return null;
      }
      if (data.author === a.getID()) {
        return null;
      }
      /** @type {null} */
      var content = null;
      deck.get(data.author, function(user) {
        content = dom.create("a", {
          rel : "dialog-post",
          className : "_z6l",
          id : "respond-link",
          ajaxify : readFile("/ajax/report/social_resolution/post/").setQueryData({
            attachment_fbid : optionsString.attach_id,
            post_fbid : optionsString.shared_object_id,
            sender_id : User.getUserIDFromParticipantID(user.id)
          }).toString()
        });
        dom.setContent(content, item._("Respond to {name}'s request", [item.param("name", user.name)]));
        dom.appendContent(node, content);
      });
    },
    /**
     * @param {Array} ids
     * @param {Object} out
     * @param {number} value
     * @param {number} delta
     * @return {?}
     */
    renderPhotoAttachments : function(ids, out, value, delta) {
      var len = ids.length;
      if (!len) {
        return null;
      }
      var node = dom.create("div", {
        className : "_55pk"
      });
      if (len === 1) {
        var ret = self.renderPreview(ids[0], out, value, "contain");
        dom.appendContent(node, ret);
        return node;
      }
      /** @type {number} */
      var step = len == 2 || len == 4 ? 2 : 3;
      /** @type {number} */
      var y = (value - (step - 1) * delta) / step;
      /** @type {number} */
      var x = Math.ceil(len / step);
      /** @type {number} */
      var total = x * y + (x - 1) * delta;
      var content = dom.create("div", {
        className : "_55pm",
        style : "padding-bottom: " + total / value * 100 + "%;"
      });
      dom.appendContent(node, content);
      /** @type {number} */
      var i = 0;
      for (;i < len;++i) {
        var target = self.renderPreview(ids[i], out, y, "cover");
        /** @type {number} */
        var value_index = i % step;
        /** @type {number} */
        var combined = Math.floor(i / step);
        $el.addClass(target, "_55pn");
        domStyle.apply(target, {
          width : y / value * 100 + "%",
          left : value_index * (y + delta) / value * 100 + "%",
          top : combined * (y + delta) / total * 100 + "%"
        });
        dom.appendContent(content, target);
      }
      return node;
    },
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    isPhotoAttachment : function(dataAndEvents) {
      return dataAndEvents.attach_type == ActivityObject.PHOTO || (dataAndEvents.attach_type == ActivityObject.GIF || dataAndEvents.attach_type == ActivityObject.FILE && dataAndEvents.preview_url);
    },
    /**
     * @param {Object} obj
     * @return {?}
     */
    isVideoAttachment : function(obj) {
      return obj.attach_type == ActivityObject.VIDEO;
    },
    /**
     * @param {Object} obj
     * @return {?}
     */
    isShareAttachment : function(obj) {
      return obj.attach_type == ActivityObject.SHARE;
    },
    /**
     * @param {Object} obj
     * @return {?}
     */
    isFileAttachment : function(obj) {
      return obj.attach_type == ActivityObject.FILE;
    },
    /**
     * @param {Object} obj
     * @return {?}
     */
    isErrorAttachment : function(obj) {
      return obj.attach_type == ActivityObject.ERROR;
    },
    /**
     * @param {Object} obj
     * @return {?}
     */
    isStickerAttachment : function(obj) {
      return obj.attach_type == ActivityObject.STICKER;
    },
    /**
     * @param {Object} walkers
     * @return {?}
     */
    isSyncRequestAttachment : function(walkers) {
      var depId = depMap.MercurySupportedShareType;
      return this.isShareAttachment(walkers) && walkers.share_data_type == depId.FB_SYNC_REQUEST;
    },
    /**
     * @param {Array} failures
     * @return {?}
     */
    sortAttachmentsStablyByType : function(failures) {
      /** @type {Array} */
      var attrList = [self.isPhotoAttachment, self.isShareAttachment, self.isFileAttachment, self.isErrorAttachment];
      attrList.push(function(dataAndEvents) {
        return true;
      });
      /** @type {Array.<?>} */
      var pending = attrList.map(function(dataAndEvents) {
        return[];
      });
      failures.forEach(function($injector) {
        /** @type {number} */
        var i = 0;
        for (;i < attrList.length;i++) {
          if (attrList[i]($injector)) {
            pending[i].push($injector);
            break;
          }
        }
      });
      return Array.prototype.concat.apply([], pending);
    }
  };
  context.exports = self;
}, null);
__d("MercuryLogMessageRenderer", ["MercuryAttachmentRenderer", "CSS", "DOM", "HovercardLink", "MercuryViewer", "MercuryLogMessageType", "MercuryParticipants", "React", "Image.react", "TextWithEntities.react", "TooltipLink.react", "cx", "fbt", "ix", "OrionMercuryLogMessage"], function(deepDataAndEvents, require, ignoreMethodDoesntExist, textAlt, module, keepData, dataAndEvents, me, node, model, a, act, deck, self, t, type, attribute, opt_attributes, item, $sanitize) {
  /**
   * @param {?} el
   * @return {?}
   */
  function func(el) {
    var first = el.log_message_type;
    var attributes = el.log_message_data;
    return "_5wzu" + (first == act.SUBSCRIBE ? " " + "_5wzj" : "") + (first == act.UNSUBSCRIBE ? " " + "_5wzk" : "") + (first == act.THREAD_NAME ? " " + "_5wzl" : "") + (first == act.THREAD_IMAGE ? " " + "_5wzm" : "") + (first == act.VIDEO_CALL && (attributes.answered || $(el)) ? " " + "_5wzn" : "") + (first == act.VIDEO_CALL && !(attributes.answered || $(el)) ? " " + "_5wzo" : "") + (first == act.PHONE_CALL && attributes.answered ? " " + "_5wzp" : "") + (first == act.PHONE_CALL && !attributes.answered ?
    " " + "_5wzq" : "") + (first == act.SERVER_ERROR ? " " + "_5wzr" : "");
  }
  /**
   * @param {Object} node
   * @param {Function} success
   * @return {undefined}
   */
  function show(node, success) {
    var parentPath = find(node.log_message_data.added_participants);
    switch(parentPath.length) {
      case 1:
        run(node, success, parentPath);
        break;
      case 2:
        ready(node, success, parentPath);
        break;
      case 3:
        initialize(node, success, parentPath);
        break;
      default:
        load(node, success, parentPath);
        break;
    }
  }
  /**
   * @param {Object} output
   * @param {Function} cb
   * @param {Array} path
   * @return {undefined}
   */
  function run(output, cb, path) {
    /** @type {Array} */
    var titles = [output.author, path[0]];
    deck.getMulti(titles, function(context) {
      if (output.author == a.getID()) {
        cb(item._("You added {subscriber1}.", [item.param("subscriber1", fn(context[path[0]]))]));
      } else {
        if (path[0] == a.getID()) {
          cb(item._("{actor} added you.", [item.param("actor", fn(context[output.author]))]));
        } else {
          cb(item._("{actor} added {subscriber1}.", [item.param("actor", fn(context[output.author])), item.param("subscriber1", fn(context[path[0]]))]));
        }
      }
    });
  }
  /**
   * @param {Object} data
   * @param {Function} handler
   * @param {Array} key
   * @return {undefined}
   */
  function ready(data, handler, key) {
    /** @type {Array} */
    var camelKey = [data.author].concat(key);
    deck.getMulti(camelKey, function(arr) {
      if (data.author == a.getID()) {
        handler(item._("You added {subscriber1} and {subscriber2}.", [item.param("subscriber1", fn(arr[key[0]])), item.param("subscriber2", fn(arr[key[1]]))]));
      } else {
        if (key[0] == a.getID()) {
          handler(item._("{actor} added you and {subscriber2}.", [item.param("actor", fn(arr[data.author])), item.param("subscriber2", fn(arr[key[1]]))]));
        } else {
          handler(item._("{actor} added {subscriber1} and {subscriber2}.", [item.param("actor", fn(arr[data.author])), item.param("subscriber1", fn(arr[key[0]])), item.param("subscriber2", fn(arr[key[1]]))]));
        }
      }
    });
  }
  /**
   * @param {Object} b
   * @param {Function} callback
   * @param {Array} path
   * @return {undefined}
   */
  function initialize(b, callback, path) {
    /** @type {Array} */
    var resolved = [b.author].concat(path);
    deck.getMulti(resolved, function(context) {
      if (b.author == a.getID()) {
        callback(item._("You added {subscriber1}, {subscriber2} and {subscriber3}.", [item.param("subscriber1", fn(context[path[0]])), item.param("subscriber2", fn(context[path[1]])), item.param("subscriber3", fn(context[path[2]]))]));
      } else {
        if (path[0] == a.getID()) {
          callback(item._("{actor} added you, {subscriber2} and {subscriber3}.", [item.param("actor", fn(context[b.author])), item.param("subscriber2", fn(context[path[1]])), item.param("subscriber3", fn(context[path[2]]))]));
        } else {
          callback(item._("{actor} added {subscriber1}, {subscriber2} and {subscriber3}.", [item.param("actor", fn(context[b.author])), item.param("subscriber1", fn(context[path[0]])), item.param("subscriber2", fn(context[path[1]])), item.param("subscriber3", fn(context[path[2]]))]));
        }
      }
    });
  }
  /**
   * @param {Object} b
   * @param {Function} success
   * @param {Array} key
   * @return {undefined}
   */
  function load(b, success, key) {
    /** @type {Array} */
    var camelKey = [b.author].concat(key);
    deck.getMulti(camelKey, function(context) {
      /**
       * @param {Array} location
       * @return {?}
       */
      function init(location) {
        var tooltip = self.createElement("div", null, location.map(function(stat) {
          return self.createElement("div", null, stat.name);
        }));
        return self.createElement(attribute, {
          alignH : "center",
          position : "above",
          tooltip : tooltip
        }, item._("{num} more", [item.param("num", location.length)]));
      }
      var elems = key.map(function(valueKey) {
        return context[valueKey];
      });
      if (b.author == a.getID()) {
        success(item._("You added {subscriber1}, {subscriber2} and {more_people}.", [item.param("subscriber1", fn(elems[0])), item.param("subscriber2", fn(elems[1])), item.param("more_people", init(elems.slice(2)))]));
      } else {
        if (key[0] == a.getID()) {
          success(item._("{actor} added you, {subscriber2} and {more_people}.", [item.param("actor", fn(context[b.author])), item.param("subscriber2", fn(elems[1])), item.param("more_people", init(elems.slice(2)))]));
        } else {
          success(item._("{actor} added {subscriber1}, {subscriber2} and {more_people}.", [item.param("actor", fn(context[b.author])), item.param("subscriber1", fn(elems[0])), item.param("subscriber2", fn(elems[1])), item.param("more_people", init(elems.slice(2)))]));
        }
      }
    });
  }
  /**
   * @param {Object} data
   * @param {Function} r
   * @return {undefined}
   */
  function finish(data, r) {
    /** @type {Array} */
    var keys = [data.author];
    var tmp_keys = data.log_message_data.removed_participants;
    var key;
    if (tmp_keys.length === 1) {
      key = tmp_keys[0];
      keys.push(key);
    }
    deck.getMulti(keys, function($cookies) {
      var udataCur = $cookies[data.author];
      var value = $cookies[key];
      if (data.author == a.getID()) {
        if (!key || key == data.author) {
          r("You left the conversation.");
        } else {
          r(item._("You removed {name} from the conversation.", [item.param("name", fn(value))]));
        }
      } else {
        if (!key || key == data.author) {
          r(item._("{actor} left the conversation.", [item.param("actor", fn(udataCur))]));
        } else {
          if (key == a.getID()) {
            r(item._("{actor} removed you from the conversation.", [item.param("actor", fn(udataCur))]));
          } else {
            r(item._("{actor} removed {name} from the conversation.", [item.param("actor", fn(udataCur)), item.param("name", fn(value))]));
          }
        }
      }
    });
  }
  /**
   * @param {?} node
   * @param {Function} callback
   * @return {undefined}
   */
  function handler(node, callback) {
    if ($(node)) {
      request(node, callback);
      return;
    }
    var ptr = node.log_message_data.caller;
    var i = node.log_message_data.callee;
    /** @type {Array} */
    var titles = [ptr, i];
    deck.getMulti(titles, function(buffer) {
      var fn = next(buffer[i]);
      if (ptr == a.getID()) {
        if (node.log_message_data.answered) {
          callback(item._("You called {firstname}.", [item.param("firstname", fn)]));
        } else {
          callback(item._("{firstname} missed a call from you.", [item.param("firstname", fn)]));
        }
      } else {
        var LEVEL_ACCESS = next(buffer[ptr]);
        if (node.log_message_data.answered) {
          callback(item._("{firstname} called you.", [item.param("firstname", LEVEL_ACCESS)]));
        } else {
          callback(item._("You missed a call from {firstname}.", [item.param("firstname", LEVEL_ACCESS)]));
        }
      }
    });
  }
  /**
   * @param {?} dataAndEvents
   * @param {Function} func
   * @return {undefined}
   */
  function request(dataAndEvents, func) {
    deck.get(dataAndEvents.log_message_data.callee, function(elem) {
      var fn = next(elem);
      switch(dataAndEvents.log_message_data.event_name) {
        case "installing":
          func(item._("{firstname} is setting up video calling...", [item.param("firstname", fn)]));
          break;
        case "installed":
          func(item._("{firstname} finished setting up video calling.", [item.param("firstname", fn)]));
          break;
        case "install_canceled":
          func("You canceled the video calling installation.");
          break;
      }
    });
  }
  /**
   * @param {Object} item
   * @param {Function} frame
   * @return {undefined}
   */
  function render(item, frame) {
    frame(item.log_message_body);
  }
  /**
   * @param {Object} message
   * @param {Function} expr
   * @return {undefined}
   */
  function log(message, expr) {
    var ptr = message.log_message_data.caller;
    var i = message.log_message_data.callee;
    /** @type {Array} */
    var titles = [ptr, i];
    deck.getMulti(titles, function(buffer) {
      if (ptr == a.getID()) {
        var fn = next(buffer[i]);
        if (message.log_message_data.answered) {
          expr(item._("You called {firstname}.", [item.param("firstname", fn)]));
        } else {
          expr(item._("{firstname} missed a call from you.", [item.param("firstname", fn)]));
        }
      } else {
        var LEVEL_ACCESS = next(buffer[ptr]);
        if (message.log_message_data.answered) {
          expr(item._("{firstname} called you.", [item.param("firstname", LEVEL_ACCESS)]));
        } else {
          expr(item._("You missed a call from {firstname}.", [item.param("firstname", LEVEL_ACCESS)]));
        }
      }
    });
  }
  /**
   * @param {Object} data
   * @param {Function} values
   * @return {undefined}
   */
  function init(data, values) {
    var v = data.log_message_data.name;
    if (data.author == a.getID()) {
      if (v) {
        values(item._("You named the conversation: {name}.", [item.param("name", self.createElement("span", {
          className : "_5wzs"
        }, self.createElement(type, {
          renderEmoticons : true,
          renderEmoji : true,
          text : v
        })))]));
      } else {
        values("You removed the conversation name.");
      }
    } else {
      deck.get(data.author, function(context) {
        var hash = fn(context);
        if (v) {
          values(item._("{actor} named the conversation: {name}.", [item.param("actor", hash), item.param("name", self.createElement("span", {
            className : "_5wzs"
          }, v))]));
        } else {
          values(item._("{actor} removed the conversation name.", [item.param("actor", hash)]));
        }
      });
    }
  }
  /**
   * @param {Object} data
   * @param {Function} success
   * @return {undefined}
   */
  function get(data, success) {
    if (data.author == a.getID()) {
      if (data.log_message_data.image) {
        success("You changed the conversation picture.");
      } else {
        success("You removed the conversation picture.");
      }
    } else {
      deck.get(data.author, function(context) {
        var hash = fn(context);
        if (data.log_message_data.image) {
          success(item._("{actor} changed the conversation picture.", [item.param("actor", hash)]));
        } else {
          success(item._("{actor} removed the conversation picture.", [item.param("actor", hash)]));
        }
      });
    }
  }
  /**
   * @param {Object} data
   * @param {Function} cb
   * @return {undefined}
   */
  function transform(data, cb) {
    if (data.author == a.getID()) {
      cb("You changed the wallpaper.");
    } else {
      deck.get(data.author, function(context) {
        var hash = fn(context);
        cb(item._("{actor} changed the wallpaper.", [item.param("actor", hash)]));
      });
    }
  }
  /**
   * @param {Object} title
   * @param {Function} expect
   * @return {undefined}
   */
  function test(title, expect) {
    expect("Couldn't find previous messages.");
  }
  /**
   * @param {Object} text
   * @param {Function} callback
   * @return {undefined}
   */
  function template(text, callback) {
    var data = text.log_message_data;
    var i = data.senderId;
    var param = data.receiverId;
    /** @type {boolean} */
    var isLast = i === a.getID();
    deck.getMulti([i, param], function(urlParams) {
      callback(self.createElement(name, self.__spread({}, data, {
        receiverParticipant : urlParams[param],
        senderParticipant : urlParams[i],
        viewerIsSender : isLast
      })));
    });
  }
  /**
   * @param {(Object|string)} elem
   * @return {?}
   */
  function next(elem) {
    return fn(elem, true);
  }
  /**
   * @param {(Object|string)} value
   * @param {boolean} name
   * @return {?}
   */
  function fn(value, name) {
    var newId = value.fbid;
    var data_hovercard = model.constructEndpoint({
      id : newId
    });
    if (value.href) {
      return self.createElement("a", {
        className : "_5wzt",
        href : value.href,
        "data-hovercard" : data_hovercard
      }, name ? value.short_name : value.name);
    }
    return value.name;
  }
  /**
   * @param {Array} results
   * @return {?}
   */
  function find(results) {
    var ra = results.indexOf(a.getID());
    if (ra > 0) {
      var caseSensitive = results.filter(function(dataAndEvents) {
        return dataAndEvents !== a.getID();
      });
      return[a.getID()].concat(caseSensitive);
    }
    return results;
  }
  /**
   * @param {?} id
   * @return {?}
   */
  function $(id) {
    return id.log_message_data.event_name === "installing" || (id.log_message_data.event_name === "installed" || id.log_message_data.event_name === "install_canceled");
  }
  var name = require("OrionMercuryLogMessage").module;
  var JsDiff = {
    /**
     * @param {Object} text
     * @param {Function} data
     * @return {undefined}
     */
    renderText : function(text, data) {
      switch(text.log_message_type) {
        case act.SUBSCRIBE:
          show(text, data);
          break;
        case act.UNSUBSCRIBE:
          finish(text, data);
          break;
        case act.VIDEO_CALL:
          handler(text, data);
          break;
        case act.PHONE_CALL:
          log(text, data);
          break;
        case act.THREAD_NAME:
          init(text, data);
          break;
        case act.THREAD_IMAGE:
          get(text, data);
          break;
        case act.WALLPAPER:
          transform(text, data);
          break;
        case act.SERVER_ERROR:
          test(text, data);
          break;
        case act.ORION:
          if (name) {
            template(text, data);
          }
          break;
        case act.PAGE_REPLY:
          render(text, data);
          break;
      }
    },
    /**
     * @param {?} child
     * @return {?}
     */
    renderIcon : function(child) {
      return self.createElement(t, {
        className : func(child),
        src : $sanitize("images/spacer.gif")
      });
    },
    /**
     * @param {?} el
     * @param {?} funcToCall
     * @param {?} walkers
     * @param {Object} text
     * @return {undefined}
     */
    renderLegacy : function(el, funcToCall, walkers, text) {
      func(text).split(" ").forEach(function(c) {
        return c && me.addClass(el, c);
      });
      this.renderText(text, function(millis) {
        self.render(self.createElement("span", null, millis), funcToCall);
      });
      this.renderAttachmentLegacy(walkers, text);
    },
    /**
     * @param {?} obj
     * @param {Object} item
     * @return {undefined}
     */
    renderAttachmentLegacy : function(obj, item) {
      if (item.log_message_type == act.THREAD_IMAGE) {
        var image = item.log_message_data.image;
        if (image) {
          var root = dataAndEvents.renderPreview(image.preview_url ? image : null);
          node.setContent(obj, root);
          me.addClass(root, "_z6a");
          me.show(obj);
        }
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercuryTypingReceiver", ["Arbiter", "ChannelConstants", "MercuryActionType", "MercuryIDs", "MercuryPayloadSource", "MercuryViewer", "TypingStates", "mixInEventEmitter", "setTimeoutAcrossTransitions", "MercuryServerRequests"], function(deepDataAndEvents, nock, ignoreMethodDoesntExist, textAlt, module, keepData, exports, dataAndEvents, left, _, value, b, Socket, proceed, toString) {
  /**
   * @param {?} c
   * @return {?}
   */
  function objectToString(c) {
    var a = map[c] || {};
    /** @type {Array.<string>} */
    var ka = Object.keys(a);
    ka.sort(function(p1, p2) {
      return a[p1] - a[p2];
    });
    return ka;
  }
  /**
   * @return {undefined}
   */
  function isArray() {
    /** @type {null} */
    str = null;
    /** @type {number} */
    var max = Date.now();
    var a = {};
    /** @type {boolean} */
    var ca = false;
    var e;
    for (e in map) {
      /** @type {boolean} */
      var ea = false;
      var id;
      for (id in map[e] || {}) {
        if (map[e][id] < max - min) {
          delete map[e][id];
          /** @type {boolean} */
          ea = true;
        } else {
          /** @type {boolean} */
          ca = true;
        }
      }
      if (ea) {
        a[e] = objectToString(e);
      }
    }
    var prefix;
    for (prefix in a) {
      h(a);
      break;
    }
    if (ca) {
      str = toString(isArray, 3E3);
    }
  }
  /**
   * @param {?} type
   * @param {?} id
   * @return {undefined}
   */
  function has(type, id) {
    if (type in map) {
      if (id in map[type]) {
        delete map[type][id];
        HOP(type);
      }
    }
  }
  /**
   * @param {?} e
   * @return {undefined}
   */
  function h(e) {
    element.releaseHeldEventType("state-changed");
    element.emitAndHold("state-changed", e);
  }
  /**
   * @param {?} prop
   * @return {undefined}
   */
  function HOP(prop) {
    var originalEvent = {};
    originalEvent[prop] = objectToString(prop);
    h(originalEvent);
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function isUndefined(obj) {
    if (obj.thread_fbid) {
      return me.getClientThreadIDNow(obj.thread_fbid);
    }
    if (obj.type === "typ") {
      return _.getThreadIDFromUserID(obj.from);
    }
    return null;
  }
  var me = nock("MercuryServerRequests").get();
  var str;
  var map = {};
  /** @type {number} */
  var min = 3E4;
  var element = {};
  proceed(element, {
    "state-changed" : true
  });
  exports.subscribe([dataAndEvents.getArbiterType("typ"), dataAndEvents.getArbiterType("ttyp")], function(dataAndEvents, req) {
    var obj = req.obj;
    var hash = isUndefined(obj);
    if (hash) {
      var id = _.getParticipantIDFromUserID(obj.from);
      if (obj.st == Socket.TYPING) {
        map[hash] = map[hash] || {};
        var mod = map[hash][id];
        /** @type {number} */
        map[hash][id] = Date.now();
        if (!str) {
          str = toString(isArray, 3E3);
        }
        if (!mod) {
          HOP(hash);
        }
      } else {
        if (obj.st == Socket.INACTIVE) {
          has(hash, id);
        }
      }
    }
  });
  me.subscribe("update-typing-state", function(dataAndEvents, cls) {
    var len = cls.payload_source;
    if (len != value.CLIENT_CHANNEL_MESSAGE) {
      return;
    }
    var actions = cls.actions;
    if (!actions || !actions.length) {
      return;
    }
    var a = left.USER_GENERATED_MESSAGE;
    actions.forEach(function(data) {
      if (data.action_type == a && data.author != b.getID()) {
        has(data.thread_id, data.author);
      }
    });
  });
  module.exports = element;
}, null);
__d("MercuryIndicatorController", ["ArbiterMixin", "DOM", "MercuryActionType", "MercuryDelayedRoger", "MercuryIDs", "MercuryMessageSourceTags", "MercuryParticipants", "MercuryRoger", "MercuryTypingReceiver", "MercuryViewer", "arrayContains", "copyProperties", "formatDate", "removeFromArray", "fbt", "MercuryThreads"], function(ignoreMethodDoesntExist, nock, textAlt, keepData, module, opt_attributes, thisObj, domConstruct, a, left, rootjQuery, dataAndEvents, req, deepDataAndEvents, power, User, on,
makeIterator, updateFunc, jQuery, self) {
  /**
   * @param {?} selector
   * @return {undefined}
   */
  function filter(selector) {
    this._threadID = selector;
    this._canonicalUser = rootjQuery.getUserIDFromThreadID(selector);
    scripts.push(this);
  }
  var _threadID = nock("MercuryThreads").get();
  /** @type {Array} */
  var scripts = [];
  makeIterator(filter.prototype, thisObj, {
    /**
     * @return {undefined}
     */
    destroy : function() {
      jQuery(scripts, this);
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    setLastMessage : function(dataAndEvents) {
      this._lastMsg = dataAndEvents;
      this._handleStateChange();
    },
    /**
     * @param {?} opt_attributes
     * @return {undefined}
     */
    _informStateChanged : function(opt_attributes) {
      if (opt_attributes.activity == "none" && this._currentActivity == "none") {
        return;
      }
      if (this._lastMsg && User.isViewer(this._lastMsg.author)) {
        /** @type {boolean} */
        opt_attributes.self_authored = true;
      }
      this._currentActivity = opt_attributes.activity;
      this.inform("state-changed", opt_attributes);
    },
    /**
     * @return {undefined}
     */
    _notifySentFrom : function() {
      var v;
      var activity;
      var fn = this._lastMsg.location_text;
      var failuresLink = this._lastMsg.source_tags || [];
      if (fn) {
        v = self._("Sent from {location}", [self.param("location", fn)]);
        /** @type {string} */
        activity = "sentFromMobile";
      } else {
        if (on(failuresLink, dataAndEvents.MESSENGER)) {
          v = domConstruct.create("a", {
            href : "/mobile/messenger",
            "class" : "fcg",
            target : "_blank"
          }, "Sent from Messenger");
          /** @type {string} */
          activity = "sentFromMobile";
        } else {
          if (on(failuresLink, dataAndEvents.MOBILE)) {
            v = domConstruct.create("a", {
              href : "/mobile",
              "class" : "fcg",
              target : "_blank"
            }, "Sent from Mobile");
            /** @type {string} */
            activity = "sentFromMobile";
          } else {
            if (on(failuresLink, dataAndEvents.EMAIL)) {
              /** @type {string} */
              v = "Sent from email";
              /** @type {string} */
              activity = "sentFromEmail";
            } else {
              this._informStateChanged({
                activity : "none"
              });
              return;
            }
          }
        }
      }
      this._informStateChanged({
        activity : activity,
        text : v
      });
    },
    /**
     * @param {Array} v12
     * @return {undefined}
     */
    _notifySeenTimestamp : function(v12) {
      /** @type {number} */
      var i = deepDataAndEvents.getSeenTimestamp(this._threadID, v12[0]) * 0.001;
      /** @type {number} */
      var length = Date.now() * 0.001;
      var progressContexts;
      if (i < length - 518400) {
        /** @type {string} */
        progressContexts = "M j";
      } else {
        if (i < length - 86400) {
          /** @type {string} */
          progressContexts = "D g:ia";
        } else {
          /** @type {string} */
          progressContexts = "g:ia";
        }
      }
      this._informStateChanged({
        activity : "seen-timestamp",
        text : self._("Seen {timestamp}", [self.param("timestamp", updateFunc(i, progressContexts))])
      });
    },
    /**
     * @param {Array} deps
     * @return {?}
     */
    _nameNormalizer : function(deps) {
      var onError;
      req.getMulti(deps, function(paramNames) {
        /**
         * @param {?} p
         * @return {?}
         */
        function require(p) {
          if (paramNames[p] !== void 0) {
            return paramNames[p].short_name.toLowerCase();
          } else {
            return p;
          }
        }
        var ret = deps.map(require);
        /**
         * @param {?} p
         * @return {?}
         */
        onError = function(p) {
          var nodes = require(p);
          /** @type {boolean} */
          var parentModuleMap = ret.indexOf(nodes) !== ret.lastIndexOf(nodes);
          return parentModuleMap ? paramNames[p].name : paramNames[p].short_name;
        };
      });
      return onError;
    },
    /**
     * @param {Array} keys
     * @return {undefined}
     */
    _notifySeenBy : function(keys) {
      var message = this._lastMsg;
      /** @type {boolean} */
      var aa = true;
      req.getMulti(keys, function(docs) {
        /** @type {boolean} */
        aa = false;
        if (this._lastMsg != message) {
          return;
        }
        var collection = _threadID.getThreadMetaNow(this._threadID);
        var length = collection ? collection.participants.length : 0;
        var endIdx = keys.length + (message.author != User.getID());
        var ch;
        /** @type {boolean} */
        var tooltip = false;
        /** @type {boolean} */
        var ha = length > 2 && endIdx >= length - 1;
        var prevUntil;
        if (collection) {
          prevUntil = this._nameNormalizer(collection.participants);
        }
        if (!prevUntil) {
          /**
           * @param {number} i
           * @return {?}
           */
          prevUntil = function(i) {
            return docs[i].short_name;
          };
        }
        if (ha) {
          /** @type {string} */
          ch = "Seen by everyone";
        } else {
          if (keys.length == 1) {
            ch = self._("Seen by {user}", [self.param("user", docs[keys[0]].short_name)]);
          } else {
            if (keys.length == 2) {
              ch = self._("Seen by {user1}, {user2}", [self.param("user1", docs[keys[0]].short_name), self.param("user2", docs[keys[1]].short_name)]);
            } else {
              if (keys.length == 3) {
                ch = self._("Seen by {user1}, {user2}, {user3}", [self.param("user1", docs[keys[0]].short_name), self.param("user2", docs[keys[1]].short_name), self.param("user3", docs[keys[2]].short_name)]);
              } else {
                if (keys.length > 3) {
                  /** @type {number} */
                  var fn = Object.keys(docs).length - 2;
                  var p = self._("{num} more", [self.param("num", fn)]);
                  var ret = domConstruct.create("span", {
                    className : "more"
                  }, p);
                  ch = self._("Seen by {user1}, {user2}, {=num more link}", [self.param("user1", docs[keys[0]].short_name), self.param("user2", docs[keys[1]].short_name), self.param("=num more link", ret)]);
                  /** @type {boolean} */
                  tooltip = true;
                }
              }
            }
          }
        }
        this._informStateChanged({
          activity : "seen-by",
          text : ch,
          seenBy : keys,
          tooltip : tooltip
        });
      }.bind(this));
      if (aa) {
        this._informStateChanged({
          activity : "none"
        });
      }
    },
    /**
     * @param {Array} keys
     * @return {undefined}
     */
    _notifyTyping : function(keys) {
      var message = this._lastMsg;
      /** @type {boolean} */
      var aa = true;
      req.getMulti(keys, function(docs) {
        /** @type {boolean} */
        aa = false;
        if (this._lastMsg != message) {
          return;
        }
        var collection = _threadID.getThreadMetaNow(this._threadID);
        var length = collection ? collection.participants.length : 0;
        var prevUntil;
        if (collection) {
          prevUntil = this._nameNormalizer(collection.participants);
        }
        if (!prevUntil) {
          /**
           * @param {number} i
           * @return {?}
           */
          prevUntil = function(i) {
            return docs[i].short_name;
          };
        }
        var ch;
        /** @type {boolean} */
        var tooltip = false;
        if (length > 2 && keys.length >= length - 1) {
          /** @type {string} */
          ch = "Everyone is typing...";
        } else {
          if (keys.length == 1) {
            ch = self._("{name} is typing...", [self.param("name", docs[keys[0]].short_name)]);
          } else {
            if (keys.length == 2) {
              ch = self._("{user1} and {user2} are typing...", [self.param("user1", docs[keys[0]].short_name), self.param("user2", docs[keys[1]].short_name)]);
            } else {
              if (keys.length == 3) {
                ch = self._("{user1}, {user2}, and {user3} are typing...", [self.param("user1", docs[keys[0]].short_name), self.param("user2", docs[keys[1]].short_name), self.param("user3", docs[keys[2]].short_name)]);
              } else {
                if (keys.length > 3) {
                  /** @type {number} */
                  var funcToCall = Object.keys(docs).length - 2;
                  var childRow = self._("{num} more", [self.param("num", funcToCall)]);
                  var fn = domConstruct.create("a", {
                    href : "#"
                  }, childRow);
                  ch = self._("{user1}, {user2}, and {=num more link} are typing...", [self.param("user1", docs[keys[0]].short_name), self.param("user2", docs[keys[1]].short_name), self.param("=num more link", fn)]);
                  /** @type {boolean} */
                  tooltip = true;
                }
              }
            }
          }
        }
        this._informStateChanged({
          activity : "typing",
          text : ch,
          typing : keys,
          tooltip : tooltip
        });
      }.bind(this));
      if (aa) {
        this._informStateChanged({
          activity : "none"
        });
      }
    },
    /**
     * @return {undefined}
     */
    _handleStateChange : function() {
      var al = a.LOG_MESSAGE;
      if (!this._lastMsg || this._lastMsg.action_type == al) {
        this._informStateChanged({
          activity : "none"
        });
        return;
      }
      if (this._typing && this._typing.length) {
        this._notifyTyping(this._typing);
        return;
      }
      if (this._canonicalUser && this._lastMsg.author != User.getID()) {
        this._notifySentFrom();
        return;
      }
      var b = left.getSeenBy(this._threadID, true);
      if (b.length) {
        if (this._canonicalUser) {
          this._notifySeenTimestamp(b);
          return;
        } else {
          this._notifySeenBy(b);
          return;
        }
      }
      this._informStateChanged({
        activity : "none"
      });
    }
  });
  power.addRetroactiveListener("state-changed", function(pair) {
    scripts.forEach(function(element) {
      var value = pair[element._threadID];
      if (value !== void 0) {
        element._typing = value;
        element._handleStateChange();
      }
    });
  });
  left.subscribe("state-changed", function(dataAndEvents, deepDataAndEvents) {
    scripts.forEach(function(dataAndEvents) {
      if (deepDataAndEvents[dataAndEvents._threadID]) {
        dataAndEvents._handleStateChange();
      }
    });
  });
  /** @type {function (?): undefined} */
  module.exports = filter;
}, null);
__d("MercuryLastMessageIndicator.react", ["DOM", "MercuryIndicatorController", "MercuryParticipants", "ReactPropTypes", "React", "Tooltip", "cx", "emptyFunction", "joinClasses"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, self, ResourceList, dataAndEvents, node, dh, data_user, execResult, deepDataAndEvents, on) {
  var JsDiff = dh.createClass({
    displayName : "MercuryLastMessageIndicator",
    propTypes : {
      hideTyping : node.bool,
      indicatorWillShow : node.func,
      indicatorDidShow : node.func,
      lastMessage : node.object,
      threadID : node.string.isRequired
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        indicatorWillShow : deepDataAndEvents,
        indicatorDidShow : deepDataAndEvents
      };
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        data : {}
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this._setup(this.props);
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    componentWillReceiveProps : function(deepDataAndEvents) {
      if (deepDataAndEvents.threadID != this.props.threadID) {
        this._destroy();
        this._setup(deepDataAndEvents);
      } else {
        if (deepDataAndEvents.lastMessage != this.props.lastMessage) {
          this._controller.setLastMessage(deepDataAndEvents.lastMessage);
        }
      }
    },
    /**
     * @param {Object} deepDataAndEvents
     * @param {Object} doc
     * @return {undefined}
     */
    componentWillUpdate : function(deepDataAndEvents, doc) {
      if (this.isVisible(deepDataAndEvents, doc)) {
        this.props.indicatorWillShow();
      }
    },
    /**
     * @return {undefined}
     */
    componentDidUpdate : function() {
      if (!this.isVisible()) {
        return;
      }
      this.setText();
      this.setTooltip();
      this.props.indicatorDidShow();
    },
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      this._destroy();
    },
    /**
     * @return {?}
     */
    render : function() {
      return dh.createElement("div", {
        className : this.getRootClass()
      }, dh.createElement("div", {
        className : "_510h"
      }), dh.createElement("span", {
        className : "_510f",
        ref : "text"
      }, "\u00a0"));
    },
    /**
     * @return {?}
     */
    getRootClass : function() {
      /** @type {string} */
      var failuresLink = "_510g" + (this.state.data.self_authored ? " " + "_510e" : "");
      var e = this.state.data.activity;
      /** @type {null} */
      var error = null;
      if (String(e).startsWith("seen")) {
        /** @type {string} */
        error = "seen";
      } else {
        if (e == "typing") {
          error = this.props.hideTyping ? null : e;
        } else {
          error = e;
        }
      }
      return on(failuresLink, error, this.props.className);
    },
    /**
     * @param {Object} deepDataAndEvents
     * @param {Object} state
     * @return {?}
     */
    isVisible : function(deepDataAndEvents, state) {
      deepDataAndEvents = deepDataAndEvents || this.props;
      state = state || this.state;
      return state.data && (state.data.activity != "none" && !(deepDataAndEvents.hideTyping && state.data.activity == "typing"));
    },
    /**
     * @return {undefined}
     */
    setText : function() {
      if (this.state.data.text) {
        self.setContent(this.refs.text.getDOMNode(), this.state.data.text);
      }
    },
    /**
     * @return {undefined}
     */
    setTooltip : function() {
      if (this.state.data.activity == "seen-by" && this.state.data.tooltip) {
        dataAndEvents.getMulti(this.state.data.seenBy, function(scripts) {
          var udataCur = self.create("div", null, this.state.data.seenBy.map(function(path) {
            return self.create("div", null, scripts[path].name);
          }));
          data_user.set(self.find(this.getDOMNode(), "span.more"), udataCur, "above", "center");
        }.bind(this));
      }
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    _setup : function(deepDataAndEvents) {
      this._controller = new ResourceList(deepDataAndEvents.threadID);
      this._subscription = this._controller.subscribe("state-changed", function(dataAndEvents, task) {
        return this.setState({
          data : task
        });
      }.bind(this));
      if (deepDataAndEvents.lastMessage) {
        this._controller.setLastMessage(deepDataAndEvents.lastMessage);
      }
    },
    /**
     * @return {undefined}
     */
    _destroy : function() {
      this._subscription.unsubscribe();
      this._controller.destroy();
    }
  });
  module.exports = JsDiff;
}, null);
__d("StickersDispatcher", ["Dispatcher", "StickerConstants", "copyProperties", "merge"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, deepDataAndEvents, dataAndEvents, topic, iterator) {
  var out = topic(new deepDataAndEvents, {
    /**
     * @param {?} dataAndEvents
     * @param {?} index
     * @return {undefined}
     */
    _handleUpdate : function(dataAndEvents, index) {
      var key = iterator({
        payloadSource : dataAndEvents
      }, index);
      this.dispatch(key);
    },
    /**
     * @param {?} opt_attributes
     * @return {undefined}
     */
    handleUpdateFromViewActions : function(opt_attributes) {
      this._handleUpdate(dataAndEvents.PayloadSource.VIEW_ACTION, opt_attributes);
    }
  });
  module.exports = out;
}, null);
__d("StickerActions", ["BanzaiLogger", "StickerConstants", "StickersDispatcher"], function(dataAndEvents, textAlt, keepData, opt_attributes, module, matcherFunction, logger, deepDataAndEvents, ignoreMethodDoesntExist) {
  var JsDiff = {
    /**
     * @param {number} dataAndEvents
     * @return {undefined}
     */
    addPack : function(dataAndEvents) {
      ignoreMethodDoesntExist.handleUpdateFromViewActions({
        actions : [{
          actionType : deepDataAndEvents.ActionTypes.ADD_PACK,
          packID : dataAndEvents
        }]
      });
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    removePack : function(dataAndEvents) {
      ignoreMethodDoesntExist.handleUpdateFromViewActions({
        actions : [{
          actionType : deepDataAndEvents.ActionTypes.REMOVE_PACK,
          packID : dataAndEvents
        }]
      });
    },
    /**
     * @param {number} dataAndEvents
     * @param {boolean} keepData
     * @return {undefined}
     */
    selectPack : function(dataAndEvents, keepData) {
      if (!keepData) {
        logger.log("StickersLoggerConfig", {
          event : "select_pack",
          packid : dataAndEvents
        });
      }
      ignoreMethodDoesntExist.handleUpdateFromViewActions({
        actions : [{
          actionType : deepDataAndEvents.ActionTypes.SELECT_PACK,
          packID : dataAndEvents
        }]
      });
    },
    /**
     * @return {undefined}
     */
    resetNumNewPacks : function() {
      ignoreMethodDoesntExist.handleUpdateFromViewActions({
        actions : [{
          actionType : deepDataAndEvents.ActionTypes.RESET_NUM_NEW_PACKS
        }]
      });
    }
  };
  module.exports = JsDiff;
}, null);
__d("AbstractDialogFitHeight", ["CSS", "DOM", "Event", "Style", "SubscriptionsHandler", "Vector", "csx", "cx", "throttle"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, $animate, execResult, m, domStyle, dataAndEvents, deepDataAndEvents, opt_keys, positionError, done) {
  /**
   * @param {string} topic
   * @return {undefined}
   */
  function exp(topic) {
    /** @type {string} */
    this.$AbstractDialogFitHeight0 = topic;
  }
  /** @type {number} */
  var expectedHashCode = 450;
  /** @type {number} */
  var $AbstractDialogFitHeight4 = 100;
  /** @type {number} */
  var r = 67;
  /** @type {number} */
  var s = 67;
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    this.$AbstractDialogFitHeight1 = new dataAndEvents;
    this.$AbstractDialogFitHeight1.addSubscriptions(this.$AbstractDialogFitHeight0.subscribe("beforeshow", this.$AbstractDialogFitHeight2.bind(this)), m.listen(window, "resize", done(this.$AbstractDialogFitHeight2.bind(this))));
    this.$AbstractDialogFitHeight3 = execResult.find(this.$AbstractDialogFitHeight0.getRoot(), "._4-i2");
    $animate.addClass(this.$AbstractDialogFitHeight3, "_5pfh");
    /** @type {number} */
    this.$AbstractDialogFitHeight4 = $AbstractDialogFitHeight4;
    if (execResult.scry(this.$AbstractDialogFitHeight0.getRoot(), "._4-i0").length) {
      this.$AbstractDialogFitHeight4 += r;
    }
    if (execResult.scry(this.$AbstractDialogFitHeight0.getRoot(), "._5a8u").length) {
      this.$AbstractDialogFitHeight4 += s;
    }
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    this.$AbstractDialogFitHeight1.release();
    /** @type {null} */
    this.$AbstractDialogFitHeight1 = null;
    $animate.removeClass(this.$AbstractDialogFitHeight3, "_5pfh");
  };
  /**
   * @return {undefined}
   */
  exp.prototype.$AbstractDialogFitHeight2 = function() {
    var cnl = deepDataAndEvents.getViewportDimensions().y;
    /** @type {number} */
    var x = cnl - this.$AbstractDialogFitHeight4;
    domStyle.set(this.$AbstractDialogFitHeight3, this.getHeightProperty(), Math.max(expectedHashCode, x) + "px");
    this.$AbstractDialogFitHeight0.updatePosition();
  };
  /** @type {function (string): undefined} */
  module.exports = exp;
}, null);
__d("DialogFitHeight", ["AbstractDialogFitHeight"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, b) {
  /**
   * @return {undefined}
   */
  function a() {
    if (b !== null) {
      b.apply(this, arguments);
    }
  }
  var i;
  for (i in b) {
    if (b.hasOwnProperty(i)) {
      a[i] = b[i];
    }
  }
  var basePrototype = b === null ? null : b.prototype;
  /** @type {Object} */
  a.prototype = Object.create(basePrototype);
  /** @type {function (): undefined} */
  a.prototype.constructor = a;
  /** @type {(Object|string)} */
  a.__superConstructor__ = b;
  /**
   * @return {?}
   */
  a.prototype.getHeightProperty = function() {
    return "height";
  };
  /** @type {function (): undefined} */
  module.exports = a;
}, null);
__d("StickerStoreController", ["Bootloader", "DialogFitHeight", "DOM", "LayerAutoFocus", "LayerFadeOnHide", "LayerHideOnEscape", "React", "XUIDialog.react", "XUIDialogBody.react", "XUISpinner.react", "cx", "requestAnimationFrame"], function(keepData, opt_attributes, matcherFunction, execResult, module, opt_keys, exports, dataAndEvents, component, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, doc, type, el, html, positionError, $sanitize) {
  /**
   * @param {?} deepDataAndEvents
   * @param {boolean} textStatus
   * @return {undefined}
   */
  function success(deepDataAndEvents, textStatus) {
    var e = component.create("div");
    component.appendContent(document.body, e);
    t = doc.render(doc.createElement(text, {
      isComposer : textStatus,
      packID : deepDataAndEvents,
      shown : true
    }), e);
  }
  /** @type {number} */
  var w = 688;
  /** @type {null} */
  var t = null;
  var text = doc.createClass({
    displayName : "StoreLayer",
    propTypes : {
      isComposer : doc.PropTypes.bool,
      packID : doc.PropTypes.string,
      shown : doc.PropTypes.bool
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        isComposer : false,
        packID : null,
        shown : false
      };
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        /**
         * @return {?}
         */
        renderStore : function() {
          return doc.createElement("div", {
            className : "_5r5e"
          }, doc.createElement(html, {
            background : "light",
            size : "large"
          }));
        }
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      exports.loadModules(["StickerStore.react"], function(el) {
        this.setState({
          renderStore : function() {
            return doc.createElement(el, {
              currentPackID : this.props.packID,
              isComposer : this.props.isComposer,
              onPackSelect : this._packSelected,
              shown : this.props.shown
            });
          }.bind(this)
        });
      }.bind(this));
    },
    /**
     * @param {string} expectedHashCode
     * @return {undefined}
     */
    _packSelected : function(expectedHashCode) {
      this.setProps({
        packID : expectedHashCode
      });
    },
    /**
     * @param {?} shown
     * @return {undefined}
     */
    _onToggle : function(shown) {
      $sanitize(this.setProps.bind(this, {
        shown : shown
      }, null));
    },
    /**
     * @return {?}
     */
    render : function() {
      return doc.createElement(type, {
        behaviors : {
          DialogFitHeight : dataAndEvents,
          LayerAutoFocus : deepDataAndEvents,
          LayerFadeOnHide : ignoreMethodDoesntExist,
          LayerHideOnEscape : textAlt
        },
        onToggle : this._onToggle,
        shown : this.props.shown,
        width : w
      }, doc.createElement(el, {
        className : "_5rq- autofocus"
      }, this.state.renderStore()));
    }
  });
  var JsDiff = {
    /**
     * @param {?} deepDataAndEvents
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    showStore : function(deepDataAndEvents, dataAndEvents) {
      if (!t) {
        success(deepDataAndEvents, !!dataAndEvents);
      } else {
        t.setProps({
          shown : true,
          packID : deepDataAndEvents,
          isComposer : !!dataAndEvents
        });
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("ChatTabMessagesView", ["Animation", "Arbiter", "ArbiterMixin", "BanzaiLogger", "ChatConfig", "ChatConversation.react", "ChatTypingIndicators.react", "ChatWelcomeMessage", "CSS", "DOM", "Event", "MercuryLastMessageIndicator.react", "LiveTimer", "MercuryTypingIndicator", "MercuryViewer", "MercuryMessageStore", "React", "ServerTime", "StickerActions", "StickerState", "StickerStoreController", "Style", "SubscriptionsHandler", "UserAgent_DEPRECATED", "arrayContains", "copyProperties", "getElementPosition",
"throttle"], function(opt_attributes, matcherFunction, execResult, opt_keys, module, positionError, a, m, result, logger, $templateCache, name, value, ignoreMethodDoesntExist, loading, deepDataAndEvents, self, template, err, Observable, b, event, renderer, $injector, textAlt, dataAndEvents, keepData, domStyle, MapEditor, bowser, $sanitize, expect, topic, getTime) {
  /**
   * @param {?} node
   * @return {?}
   */
  function setup(node) {
    if (Instance === null) {
      var text = node.childNodes[0];
      domStyle.set(node, "overflow", "scroll");
      /** @type {number} */
      Instance = text.clientWidth - right;
      domStyle.set(node, "overflow", "");
    }
    return Instance;
  }
  /**
   * @param {?} selector
   * @param {?} allBindingsAccessor
   * @param {?} depMaps
   * @param {?} rootjQuery
   * @param {?} opt_setup
   * @param {?} mojitSpec
   * @param {EventTarget} view
   * @param {?} mojitProxy
   * @return {undefined}
   */
  function init(selector, allBindingsAccessor, depMaps, rootjQuery, opt_setup, mojitSpec, view, mojitProxy) {
    /**
     * @return {undefined}
     */
    function callback() {
      init.inform("interaction-with-tab", selector);
    }
    this.loadingIcon = opt_setup;
    this.threadID = selector;
    this.sheetController = allBindingsAccessor;
    this.scrollContainer = depMaps;
    this.conversationElem = rootjQuery;
    this.tabView = mojitProxy;
    err.restart($injector.get() / 1E3);
    /** @type {boolean} */
    this._loadingMoreMessages = false;
    this._subscriptions = new MapEditor;
    this._subscriptions.addSubscriptions(m.subscribe("overflow-applied-to-body", this.scrollToBottom.bind(this)), self.listen(this.scrollContainer, "mousedown", callback));
    if (bowser.firefox()) {
      /** @type {string} */
      var wheelEvent = "WheelEvent" in window ? "wheel" : "DOMMouseScroll";
      this.scrollContainer.addEventListener(wheelEvent, callback, false);
    } else {
      this._subscriptions.addSubscriptions(self.listen(this.scrollContainer, "mousewheel", callback));
    }
    this._subscriptions.addSubscriptions(self.listen(this.scrollContainer, "scroll", getTime(this.scrolling, 50, this)));
    if ($templateCache.get("chat_react")) {
      var scrollToBottom;
      renderer.render(renderer.createElement(value, {
        threadID : this.threadID,
        indicatorsWillShow : function() {
          return scrollToBottom = this.isScrolledToBottom();
        }.bind(this),
        indicatorsDidShow : function() {
          return scrollToBottom && this.scrollToBottom(true);
        }.bind(this)
      }), view);
    } else {
      this.typingIndicator = new Observable(this.threadID, view, this);
    }
    var isScrolledToBottom;
    this.lastMessageIndicatorNode = mojitSpec;
    this.lastMessageIndicator = renderer.render(renderer.createElement(template, {
      threadID : this.threadID,
      hideTyping : true,
      indicatorWillShow : function() {
        return isScrolledToBottom = this.isScrolledToBottom();
      }.bind(this),
      indicatorDidShow : function() {
        return isScrolledToBottom && this.scrollToBottom(true);
      }.bind(this)
    }), this.lastMessageIndicatorNode);
    this.initializeConversation();
  }
  /** @type {number} */
  var right = 70;
  /** @type {null} */
  var Instance = null;
  /** @type {number} */
  var fx = 20;
  expect(init, result);
  expect(init.prototype, {
    /**
     * @return {undefined}
     */
    initializeConversation : function() {
      this._store = new event(this.threadID);
      this._conversation = renderer.render(renderer.createElement(name, {
        maxBubbleWidth : setup(this.scrollContainer),
        messages : [],
        onImageLoad : function(el) {
          var elem = this.scrollContainer;
          var startTopScroll = elem.scrollTop + elem.clientHeight;
          if (startTopScroll + el.offsetHeight >= elem.scrollHeight) {
            this.scrollToBottom();
          }
        }.bind(this),
        onStickerClick : this._onStickerClick.bind(this),
        /**
         * @param {string} userID
         * @param {?} dataAndEvents
         * @param {?} deepDataAndEvents
         * @return {undefined}
         */
        onCallLinkClick : function(userID, dataAndEvents, deepDataAndEvents) {
          init.inform("video-call-clicked", {
            userID : userID,
            threadID : dataAndEvents,
            clickSource : deepDataAndEvents
          });
        }
      }), this.conversationElem);
      this._subscriptions.addSubscriptions(this._store.subscribe(function(handler) {
        if (handler.eventType == event.MESSAGES_RECEIVED && (handler.allFromOthers && !this.isScrolledToBottom())) {
          this.sheetController.openNewMessagesSheet();
          /** @type {boolean} */
          this._newMessagesSheetOpened = true;
        }
        if (handler.eventType == event.MESSAGES_REORDERED) {
          /** @type {boolean} */
          this._loadingMoreMessages = false;
          loading.hide(this.loadingIcon);
        }
        var _shouldScrollToBottom = this.isScrolledToBottom();
        var viewHeight = this._getLoadingHeight();
        var scrollHeight = this.scrollContainer.scrollHeight;
        var scrollTop = this.scrollContainer.scrollTop;
        var msgs = handler.messages;
        var copies = ignoreMethodDoesntExist.getWelcomeMessage(this.threadID);
        if (copies) {
          msgs.push(copies);
        }
        this._conversation.setProps({
          messages : msgs
        }, function() {
          if (_shouldScrollToBottom || this._shouldScrollToBottom) {
            this.scrollToBottom();
            this.setShouldScrollToBottom(false);
          } else {
            if (handler.eventType == event.MESSAGES_REORDERED) {
              this.scrollToPosition(this.scrollContainer.scrollHeight - scrollHeight - viewHeight + scrollTop);
            }
          }
        }.bind(this));
        this.lastMessageIndicator.setProps({
          lastMessage : msgs.length > 0 ? msgs[msgs.length - 1] : null
        });
        if (handler.eventType == event.MESSAGES_RECEIVED && (this._shouldShowStickerReplyNUX(msgs) && (this.tabView && this.tabView.isFocused()))) {
          this.tabView.showStickerReplyNUX();
        }
        if (handler.eventType == event.MESSAGES_CHANGED) {
          this._checkToAnimateSticker();
        }
      }.bind(this)));
    },
    /**
     * @param {?} recurring
     * @return {undefined}
     */
    setShouldScrollToBottom : function(recurring) {
      this._shouldScrollToBottom = recurring;
    },
    /**
     * @return {undefined}
     */
    scrolling : function() {
      this._checkToAnimateSticker();
      if (this.isScrolledNearTop() && (!this._loadingMoreMessages && (!this.isScrolledToBottom() && !this.tabView._isDragDropActive))) {
        if (this._store.fetchMoreMessages()) {
          loading.show(this.loadingIcon);
          /** @type {boolean} */
          this._loadingMoreMessages = true;
        }
      }
      if (!this._newMessagesSheetOpened) {
        return;
      }
      if (this.isScrolledToBottom()) {
        this.sheetController.closeNewMessagesSheet();
        /** @type {boolean} */
        this._newMessagesSheetOpened = false;
      }
    },
    /**
     * @return {?}
     */
    getScrollTop : function() {
      return this.scrollContainer && this.scrollContainer.scrollTop;
    },
    /**
     * @return {undefined}
     */
    destroy : function() {
      deepDataAndEvents.scry(this.conversationElem, ".stickerContainer").forEach(function(template) {
        return renderer.unmountComponentAtNode(template);
      });
      renderer.unmountComponentAtNode(this.conversationElem);
      if (this._subscriptions) {
        this._subscriptions.release();
      }
      renderer.unmountComponentAtNode(this.lastMessageIndicatorNode);
      delete this.lastMessageIndicator;
      if (this._store) {
        this._store.destroy();
      }
      /** @type {boolean} */
      this.destroyed = true;
    },
    /**
     * @return {?}
     */
    _getLoadingHeight : function() {
      return this.loadingHeight || this.loadingIcon.clientHeight;
    },
    /**
     * @param {(Array|number)} items
     * @return {?}
     */
    _shouldShowStickerReplyNUX : function(items) {
      if (!dataAndEvents.shouldShowStickerReplyNUX() || !items.length) {
        return false;
      }
      var options = items[items.length - 1];
      if (options.author === b.getID()) {
        return false;
      }
      if (options.has_attachment) {
        return options.attachments.some(function(dataAndEvents) {
          return dataAndEvents.attach_type === "sticker";
        });
      }
      return false;
    },
    /**
     * @param {(Object|number|string)} type
     * @return {?}
     */
    isScrolledToBottom : function(type) {
      var body = this.scrollContainer;
      type = type || fx;
      return body.scrollTop + body.clientHeight >= body.scrollHeight - type;
    },
    /**
     * @return {?}
     */
    isScrolledNearTop : function() {
      return this.scrollContainer.scrollTop < this.scrollContainer.clientHeight;
    },
    /**
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */
    scrollToBottom : function(deepDataAndEvents) {
      this.scrollToPosition(this.scrollContainer.scrollHeight, deepDataAndEvents);
    },
    /**
     * @param {?} immediate
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */
    scrollToPosition : function(immediate, deepDataAndEvents) {
      if (this._scrollTopAnimation) {
        this._scrollTopAnimation.stop();
      }
      if (deepDataAndEvents === true) {
        this._scrollTopAnimation = (new a(this.scrollContainer)).to("scrollTop", immediate).ease(a.ease.end).duration(400).go();
      } else {
        this.scrollContainer.scrollTop = immediate;
      }
    },
    /**
     * @param {null} deepDataAndEvents
     * @param {?} ignoreMethodDoesntExist
     * @return {undefined}
     */
    _onStickerClick : function(deepDataAndEvents, ignoreMethodDoesntExist) {
      if (!deepDataAndEvents) {
        return;
      }
      logger.log("StickersLoggerConfig", {
        event : "click_sticker",
        packid : deepDataAndEvents,
        stickerid : ignoreMethodDoesntExist
      });
      var tabView = this.tabView;
      dataAndEvents.onTrayDataReady(function() {
        if ($sanitize(dataAndEvents.getPackIDsInTray(), deepDataAndEvents)) {
          var selector = dataAndEvents.getPack(deepDataAndEvents);
          if (selector && selector.isPromoted) {
            textAlt.addPack(deepDataAndEvents);
          }
          tabView.setStickersFlyoutPackID(deepDataAndEvents);
        } else {
          keepData.showStore(deepDataAndEvents);
        }
      });
    },
    /**
     * @return {undefined}
     */
    _checkToAnimateSticker : function() {
      var out = topic(this.scrollContainer);
      m.inform("chatScrolled/" + this.threadID, {
        scrollTop : this.scrollContainer.scrollTop,
        top : out.y,
        viewHeight : out.height
      });
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    setNewThreadID : function(deepDataAndEvents) {
      this._store.setNewThreadID(deepDataAndEvents);
    }
  });
  /** @type {function (?, ?, ?, ?, ?, ?, EventTarget, ?): undefined} */
  module.exports = init;
}, null);
__d("MessagesEmoticons.react", ["Grid.react", "React", "cx", "emptyFunction", "fbt"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, tag, self, matcherFunction, dataAndEvents, execResult) {
  var type = tag.GridItem;
  /** @type {number} */
  var cols = 8;
  var variables = {
    smile : "smile",
    frown : "frown",
    tongue : "tongue",
    grin : "grin",
    gasp : "gasp",
    wink : "wink",
    pacman : "pacman",
    grumpy : "grumpy",
    unsure : "unsure",
    cry : "cry",
    kiki : "kiki",
    glasses : "glasses",
    sunglasses : "sunglasses",
    heart : "heart",
    devil : "devil",
    angel : "angel",
    squint : "squint",
    confused : "confused",
    upset : "upset",
    colonthree : "colonthree",
    like : "like"
  };
  var JsDiff = self.createClass({
    displayName : "MessagesEmoticons",
    propTypes : {
      onEmoticonSelect : self.PropTypes.func
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        onEmoticonSelect : dataAndEvents
      };
    },
    /**
     * @return {?}
     */
    getEmoticons : function() {
      return Object.keys(variables).map(function(expectedHashCode) {
        return self.createElement(type, {
          key : expectedHashCode
        }, self.createElement("div", {
          className : "panelCell"
        }, self.createElement("a", {
          "aria-label" : variables[expectedHashCode],
          className : "emoticon emoticon_" + expectedHashCode,
          onClick : function() {
            return this.props.onEmoticonSelect(expectedHashCode);
          }.bind(this)
        })));
      }.bind(this));
    },
    /**
     * @return {?}
     */
    render : function() {
      return self.createElement("div", {
        className : "emoticonsTable"
      }, self.createElement(tag, {
        cols : cols,
        alignv : "middle",
        alignh : "center",
        spacing : "pam"
      }, this.getEmoticons()));
    }
  });
  module.exports = JsDiff;
}, null);
__d("MercuryDeliveryState", ["MercuryConfig", "MercuryIDs", "MercuryServerRequests", "MercurySingletonMixin", "MercuryThreadInformer", "PresencePrivacy", "UserActivity", "debounceAcrossTransitions"], function(textAlt, keepData, opt_attributes, matcherFunction, module, execResult, dataAndEvents, deck, deepDataAndEvents, map, ignoreMethodDoesntExist, ret, exports, cb) {
  /**
   * @param {?} require
   * @return {undefined}
   */
  function game(require) {
    this.$MercuryDeliveryState0 = require;
    this.$MercuryDeliveryState1 = deepDataAndEvents.getForFBID(this.$MercuryDeliveryState0);
    this.$MercuryDeliveryState2 = ignoreMethodDoesntExist.getForFBID(this.$MercuryDeliveryState0);
    /** @type {Array} */
    this.$MercuryDeliveryState3 = [];
    if (!dataAndEvents.ChatWebDRGK) {
      return;
    }
    this.$MercuryDeliveryState2.subscribe("messages-received", this.$MercuryDeliveryState4.bind(this));
    exports.subscribe(cb(this.$MercuryDeliveryState5, 300, this));
  }
  var flag = dataAndEvents.delivery_timeout || 12E4;
  /**
   * @param {?} dataAndEvents
   * @param {Object} map
   * @return {undefined}
   */
  game.prototype.$MercuryDeliveryState4 = function(dataAndEvents, map) {
    var letter;
    for (letter in map) {
      var value = map[letter];
      value.forEach(function(returnVal) {
        if (this.$MercuryDeliveryState7(returnVal)) {
          this.$MercuryDeliveryState3.push(returnVal);
        }
      }.bind(this));
    }
    if (exports.isActive(flag)) {
      this.$MercuryDeliveryState5();
    }
  };
  /**
   * @return {undefined}
   */
  game.prototype.$MercuryDeliveryState5 = function() {
    if (this.$MercuryDeliveryState3.length === 0) {
      return;
    }
    var r20 = this.$MercuryDeliveryState3.filter(this.$MercuryDeliveryState7, this).map(function(user) {
      return user.message_id;
    });
    if (r20) {
      this.$MercuryDeliveryState1.sendDeliveryReceipts(r20);
    }
    /** @type {Array} */
    this.$MercuryDeliveryState3 = [];
  };
  /**
   * @param {Object} data
   * @return {?}
   */
  game.prototype.$MercuryDeliveryState7 = function(data) {
    var rreturn = deck.getUserIDFromParticipantID(data.author);
    if (rreturn === this.$MercuryDeliveryState0) {
      return false;
    }
    if (!data.is_unread) {
      return false;
    }
    if (!ret.allows(rreturn)) {
      return false;
    }
    return true;
  };
  Object.assign(game, map);
  /** @type {function (?): undefined} */
  module.exports = game;
}, null);
__d("MercuryStateCheck", ["Arbiter", "ChannelConstants", "MercuryFolders", "MessagingTag", "URI", "copyProperties", "MercuryServerRequests"], function(ignoreMethodDoesntExist, nock, textAlt, next, module, keepData, _this, req, dataAndEvents, deepDataAndEvents, data, express) {
  /**
   * @return {undefined}
   */
  function create() {
    var rreturn;
    if (data.getRequestURI().getPath().search(/messages/) !== -1) {
      rreturn = dataAndEvents.getSupportedFolders();
    } else {
      /** @type {Array} */
      rreturn = [deepDataAndEvents.INBOX];
    }
    ret.fetchMissedMessages(rreturn);
  }
  var ret = nock("MercuryServerRequests").get();
  var app = express(new _this, {
    /**
     * @return {undefined}
     */
    initialize : function() {
      _this.subscribe(req.ON_INVALID_HISTORY, create);
      next(["ChannelConnection"], function(self) {
        self.subscribe(self.CONNECTED, function(dataAndEvents, loginController) {
          if (!loginController.init) {
            create();
          }
        });
      });
    }
  });
  app.initialize();
  module.exports = app;
}, null);
__d("MercuryReadOnlyReason", ["React", "fbt"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, dom, item) {
  var JsDiff = {
    /**
     * @param {?} reason
     * @return {?}
     */
    getReason : function(reason) {
      if (reason.has_email_participant) {
        return item._("Sorry, this conversation isn't active anymore because messages can no longer be sent to email addresses. Messages sent to facebook.com email addresses will now be forwarded to primary email addresses, so you can continue this conversation over email. {Learn more}.", [item.param("Learn more", dom.createElement("a", {
          href : "/help/224049364288051"
        }, "Learn more"))]);
      } else {
        return "You cannot reply to this conversation.";
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercurySeenByAll", ["CSS", "DataStore", "MercuryDelayedRoger", "DOM", "MercuryIDs", "MercuryViewer", "MercuryThreads"], function(dataAndEvents, nock, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, b, acc, exports, test, $templateCache, a) {
  /**
   * @param {(Node|string)} s
   * @param {Function} obj
   * @param {?} value
   * @return {undefined}
   */
  function getter(s, obj, value) {
    /** @type {null} */
    var target = null;
    if (value) {
      target = $templateCache.getParticipantIDFromUserID(value);
    } else {
      target = a.getID();
    }
    var keys = obj.participants.filter(function(related) {
      return related !== target;
    });
    /** @type {boolean} */
    var end = obj.participants.length > 0 && obj.participants[0] === target;
    b.conditionClass(s, "repliedLast", end);
    b.conditionClass(s, "seenByAll", end && exports.getSeenBy(obj.thread_id).length === keys.length);
  }
  var selfObj = nock("MercuryThreads").get();
  var result = {};
  var JsDiff = {
    /**
     * @param {Node} node
     * @param {Function} s
     * @param {?} isXML
     * @return {undefined}
     */
    updateOnSeenChange : function(node, s, isXML) {
      /** @type {boolean} */
      result[node.tagName] = true;
      acc.set(node, "thread-id", s.thread_id);
      b.addClass(node, "seenByListener");
      getter(node, s, isXML);
    }
  };
  exports.subscribe("state-changed", function(dataAndEvents, $cookies) {
    var id;
    for (id in result) {
      var codeSegments = test.scry(document.body, id + ".seenByListener");
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var node = codeSegments[i];
        var key = acc.get(node, "thread-id");
        if ($cookies[key]) {
          selfObj.getThreadMeta(key, function(walkers) {
            getter(node, walkers);
          });
        }
      }
    }
  });
  module.exports = JsDiff;
}, null);
__d("MercuryThreadMetadataRenderer", ["CSS", "DOM", "Emoji", "HTML", "JSLogger", "MercuryAttachmentType", "MercuryIDs", "MercuryMessageSourceTags", "MercurySingletonMixin", "MercuryThreadImage.react", "MercuryThreadMetadataRawRenderer", "MercuryThreadTitle.react", "MercuryParticipants", "React", "MercurySeenByAll", "MercuryServerRequests", "Style", "MercuryThreads", "Tooltip", "URI", "WebMessengerThreadPermalinks", "arrayContains", "createArrayFromMixed", "copyProperties", "cx", "formatDate", "fbt"],
function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, $sanitize, module, keepData, Dom, self, meta, String, activator, handleObj, notifications, stats, name, el, handle, text, res, doc, require, exp, s, r, data_priv, Dialog, jQuery, cb, ensureCallback, defineProperty, dataAndEvents, printer, $) {
  /**
   * @param {?} o
   * @return {undefined}
   */
  function Type(o) {
    this._fbid = o;
    this._serverRequests = exp.getForFBID(o);
    this._threads = r.getForFBID(o);
  }
  /**
   * @param {Object} keepData
   * @return {?}
   */
  function remove(keepData) {
    if (!keepData.snippet_attachments) {
      return[];
    }
    return keepData.snippet_attachments.filter(function(handler) {
      return handler.attach_type === handleObj.PHOTO;
    });
  }
  /**
   * @param {Object} dom
   * @param {Object} key
   * @return {undefined}
   */
  function done(dom, key) {
    var bkey = remove(key);
    if (bkey.length === 0) {
      return;
    }
    var thumbnail_url = bkey[0].thumbnail_url;
    if (!thumbnail_url) {
      return;
    }
    /** @type {string} */
    var Events = bkey.length == 1 ? "snippet-thumbnail-single" : "snippet-thumbnail-multiple";
    var e = dom.getNode(Events);
    if (!e) {
      return;
    }
    var m = self.find(e, "i");
    s.set(m, "background-image", "url(" + thumbnail_url + ")");
    Dom.show(e);
  }
  /**
   * @param {?} fn
   * @param {?} data
   * @return {undefined}
   */
  function after(fn, data) {
    ensureCallback(fn).forEach(function(newContent) {
      self.setContent(newContent, data);
    });
  }
  /**
   * @param {?} elem
   * @param {Function} data
   * @param {(Array|string)} callback
   * @param {Object} attributes
   * @return {undefined}
   */
  function run(elem, data, callback, attributes) {
    callback = ensureCallback(callback);
    var nType = elem._fbid;
    if (data.name) {
      callback.forEach(function(fn) {
        doc.render(doc.createElement(text, {
          /** @type {Function} */
          thread : data,
          viewer : nType,
          showUnreadCount : !!attributes.show_unread_count
        }), fn);
      });
      return;
    }
    var fields = data.participants;
    if (data.participants.length > 1) {
      fields = data.participants.filter(function(dataAndEvents) {
        return dataAndEvents != notifications.getParticipantIDFromUserID(nType);
      });
    }
    res.getMulti(fields, function(message) {
      handle.renderParticipantListWithNoThreadName(elem._serverRequests.getServerThreadIDNow(data.thread_id), data, fields, message, callback, attributes);
    });
  }
  var $log = activator.create("wm_timestamp");
  defineProperty(Type, name);
  defineProperty(Type.prototype, {
    /**
     * @param {Element} el
     * @param {Text} idx
     * @param {Text} funcToCall
     * @param {number} val
     * @return {undefined}
     */
    renderTimestamp : function(el, idx, funcToCall, val) {
      if (val) {
        if (!idx) {
          $log.warn("no_title");
          /** @type {string} */
          idx = (new Date(val)).toLocaleDateString();
        }
        el.setAttribute("title", idx);
        el.setAttribute("data-utime", val / 1E3);
        if (!funcToCall) {
          $log.warn("no_display");
          funcToCall = printer(new Date(val), "g:ia");
        }
        self.setContent(el, funcToCall);
        Dom.show(el);
      }
    },
    /**
     * @param {Element} node
     * @param {?} v
     * @param {?} outErr
     * @param {?} traditional
     * @return {undefined}
     */
    renderMessageSourceTags : function(node, v, outErr, traditional) {
      /** @type {string} */
      var pdataOld = "";
      /** @type {string} */
      var d = "";
      /** @type {string} */
      var newClassName = "";
      if (cb(outErr, stats.MESSENGER)) {
        /** @type {string} */
        pdataOld = "Sent from Messenger";
        d = new Dialog("/mobile/messenger");
        /** @type {string} */
        newClassName = "_9g";
      } else {
        if (cb(outErr, stats.MOBILE)) {
          /** @type {string} */
          pdataOld = "Sent from Mobile";
          d = new Dialog("/mobile/");
          /** @type {string} */
          newClassName = "_9j";
        } else {
          if (cb(outErr, stats.CHAT)) {
            /** @type {string} */
            pdataOld = "Sent from chat";
            /** @type {string} */
            newClassName = "_9h";
          } else {
            if (cb(outErr, stats.EMAIL)) {
              if (traditional) {
                pdataOld = $._("Sent from {email}", [$.param("email", traditional)]);
              } else {
                /** @type {string} */
                pdataOld = "Sent from email";
              }
              /** @type {string} */
              newClassName = "_9i";
            }
          }
        }
      }
      if (newClassName) {
        data_priv.set(node, pdataOld);
        Dom.addClass(v, newClassName);
        if (d) {
          node.setAttribute("href", d);
        } else {
          node.removeAttribute("href");
        }
      } else {
        Dom.hide(node);
      }
    },
    /**
     * @param {Element} img
     * @param {?} node
     * @param {?} opt_query
     * @return {undefined}
     */
    renderMessageLocation : function(img, node, opt_query) {
      var altTxt = Dialog("/ajax/messaging/hovercard/map.php").setQueryData(opt_query);
      img.setAttribute("data-hovercard", altTxt);
      Dom.removeClass(img, "_b9");
      Dom.show(node);
    },
    /**
     * @param {?} node
     * @param {?} dataAndEvents
     * @param {Function} s
     * @return {undefined}
     */
    renderSpoofWarning : function(node, dataAndEvents, s) {
      if (dataAndEvents) {
        Dom.addClass(node, "_sa");
        data_priv.set(node, $._("Unable to confirm {name_or_email} as the sender.", [$.param("name_or_email", s.name)]));
      }
    },
    /**
     * @param {?} newContent
     * @param {?} dataAndEvents
     * @param {Function} s
     * @return {undefined}
     */
    renderChatSpoofWarning : function(newContent, dataAndEvents, s) {
      if (dataAndEvents) {
        self.appendContent(newContent, $._("Unable to confirm {name_or_email} as the sender.", [$.param("name_or_email", s.name)]));
      }
    },
    /**
     * @param {Object} p
     * @param {Object} self
     * @param {?} a
     * @param {Object} attributes
     * @param {?} optClass
     * @return {undefined}
     */
    renderCoreThreadlist : function(p, self, a, attributes, optClass) {
      attributes = attributes || {};
      this.renderThreadImage(p, self.getNode("image"));
      var copies = self.getNode("accessibleName");
      /** @type {Array} */
      var out = [self.getNode("name")];
      if (copies) {
        out.push(copies);
      }
      run(this, p, out, attributes);
      if (p.folder && optClass) {
        after(self.getNode("folderBadge"), p.folder);
      }
      var failuresLink = self.getNode("timestamp");
      this.renderTimestamp(failuresLink, p.timestamp_absolute, p.timestamp_relative, p.timestamp);
      this.renderSnippet(p, self.getNode("snippet"));
      done(self, p);
      a(self, p);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {(Array|string)} finished
     * @param {Object} attributes
     * @return {undefined}
     */
    renderAndSeparatedParticipantList : function(deepDataAndEvents, finished, attributes) {
      attributes = attributes || {};
      /** @type {boolean} */
      attributes.last_separator_uses_and = true;
      this._threads.getThreadMeta(deepDataAndEvents, function(done) {
        run(this, done, finished, attributes);
      }.bind(this));
    },
    /**
     * @param {Function} data
     * @param {?} newContent
     * @return {undefined}
     */
    renderSnippet : function(data, newContent) {
      /** @type {boolean} */
      var recordType = false;
      var p = self.create("span");
      Dom.addClass(p, "MercuryRepliedIndicator");
      self.appendContent(newContent, p);
      require.updateOnSeenChange(p, data, this._fbid);
      var content = data.snippet;
      if (content) {
        if (data.snippet_has_attachment) {
          self.appendContent(newContent, self.create("span", {
            className : "MercuryAttachmentIndicator"
          }));
        }
        if (data.is_forwarded_snippet) {
          self.appendContent(newContent, self.create("strong", {
            className : "_55q_"
          }, "Forwarded Message:"));
        }
        if (content.substr(0, 4) == "?OTR") {
          /** @type {string} */
          content = "[encrypted message]";
        } else {
          content = content.replace(/\r\n|[\r\n]/g, " ");
        }
        content = String(meta.htmlEmojiAndEmote(content));
      } else {
        if (data.is_forwarded_snippet) {
          self.appendContent(newContent, self.create("strong", {
            className : "_55q_"
          }, "Forwarded Message"));
        }
        if (data.snippet_has_attachment && (data.snippet_attachments && data.snippet_attachments.length)) {
          /** @type {boolean} */
          recordType = true;
          content = self.create("span");
          $sanitize(["MercuryAttachmentSnippet.react"], function(el) {
            doc.render(doc.createElement(el, {
              /** @type {Function} */
              thread : data,
              viewer : this._fbid
            }), content);
          }.bind(this));
        }
      }
      var cnl = data.participants.length;
      if (data.is_subscribed) {
        cnl--;
      }
      var key = data.snippet_sender;
      if (!recordType && (key && (notifications.getParticipantIDFromUserID(this._fbid) != key && cnl > 1))) {
        res.get(key, function(y) {
          if (y.short_name) {
            self.appendContent(newContent, $._("{name}: {conversation_snippet}", [$.param("name", y.short_name), $.param("conversation_snippet", content)]));
          } else {
            self.appendContent(newContent, content);
          }
        });
      } else {
        self.appendContent(newContent, content);
      }
    },
    /**
     * @param {?} fn2
     * @param {Element} div
     * @param {?} $sanitize
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    renderWebMessengerLink : function(fn2, div, $sanitize, deepDataAndEvents) {
      jQuery.getThreadURI(fn2, function(prevValue) {
        div.setAttribute("href", prevValue);
        if ($sanitize) {
          $sanitize();
        }
      }, deepDataAndEvents);
    },
    /**
     * @param {Object} charsetPart
     * @param {?} fn
     * @return {undefined}
     */
    renderThreadImage : function(charsetPart, fn) {
      doc.render(doc.createElement(el, {
        thread : charsetPart,
        viewer : this._fbid
      }), fn);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {Object} data
     * @param {number} dataName
     * @param {Object} walkers
     * @return {?}
     */
    renderParticipantList : function(deepDataAndEvents, data, dataName, walkers) {
      return handle.renderRawParticipantList(this._serverRequests.getServerThreadIDNow(deepDataAndEvents), data, dataName, walkers);
    },
    /**
     * @param {?} angle
     * @param {Object} data
     * @param {number} callback
     * @param {Object} obj
     * @return {?}
     */
    renderThreadNameAndParticipantList : function(angle, data, callback, obj) {
      var key = handle.renderRawParticipantList(this._serverRequests.getServerThreadIDNow(angle), data, callback, obj);
      var s = this._threads.getThreadMetaNow(angle);
      if (!s.name) {
        return key;
      }
      return $._("{conversation_name} [with {participant_list}]", [$.param("conversation_name", s.name), $.param("participant_list", key)]);
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} opt_attributes
     * @return {?}
     */
    renderParticipantCount : function(dataAndEvents, opt_attributes) {
      return handle.renderRawParticipantCount(opt_attributes);
    }
  });
  /** @type {function (?): undefined} */
  module.exports = Type;
}, null);
__d("MercurySheetPolicy", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    /**
     * @param {?} navi
     * @param {Object} i
     * @return {?}
     */
    canReplaceOpenSheet : function(navi, i) {
      if (navi.isSheetWithInput && navi.isSheetWithInput()) {
        return i.getType() != navi.getType() && (i.isSheetWithInput && i.isSheetWithInput());
      }
      if (navi.getType() == i.getType()) {
        return false;
      }
      if (navi.isPermanent() && !i.isPermanent()) {
        return false;
      }
      return true;
    }
  };
  module.exports = JsDiff;
}, null);
__d("MercurySheetView", ["Animation", "ArbiterMixin", "MercurySheetPolicy", "CSS", "DOM", "Style", "MercurySheetTemplates", "Vector", "copyProperties", "cx", "setTimeoutAcrossTransitions"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, node, IOStream, compiled, s, d, domStyle, dataAndEvents, Css, declare, matcherFunction, $) {
  /** @type {number} */
  var event = 5E3;
  /**
   * @param {?} o
   * @param {?} tileHeight
   * @param {?} book
   * @return {undefined}
   */
  var Type = function(o, tileHeight, book) {
    this._threadID = o;
    this._rootElement = tileHeight;
    this._tabMainElement = book;
    /** @type {null} */
    this._openSheet = null;
  };
  declare(Type.prototype, IOStream, {
    /**
     * @return {undefined}
     */
    destroy : function() {
      d.empty(this._rootElement);
    },
    /**
     * @param {string} context
     * @param {boolean} recurring
     * @return {undefined}
     */
    _openCommon : function(context, recurring) {
      if (this._openSheet && !compiled.canReplaceOpenSheet(this._openSheet, context)) {
        if (context.couldNotReplace) {
          context.couldNotReplace();
        }
        return;
      }
      this.clear(function() {
        /** @type {string} */
        this._openSheet = context;
        var args = dataAndEvents[":fb:mercury:tab-sheet:loading"].build().getRoot();
        d.setContent(this._rootElement, args);
        s.show(args);
        s.show(this._rootElement);
        context.render();
        if (recurring) {
          s.addClass(this._tabMainElement, "sheetSlide");
          s.addClass(this._tabMainElement, "_1sk4");
          var pos = Css.getElementDimensions(this._rootElement).y;
          domStyle.set(this._rootElement, "bottom", pos + "px");
          this.resize();
          this._animation = (new node(this._rootElement)).to("bottom", 0).duration(150).ease(node.ease.both).ondone(function() {
            s.removeClass(this._tabMainElement, "sheetSlide");
            s.removeClass(this._tabMainElement, "_1sk4");
            this.resize();
          }.bind(this)).go();
        } else {
          this.resize();
        }
        if (!context.isPermanent()) {
          /** @type {number} */
          var originalEvent = event;
          if (context.getCloseTimeout) {
            originalEvent = context.getCloseTimeout();
          }
          var type = this.getAutoCloseCallback(context);
          this._sheetCloseHandler = $(this.close.bind(this, context, type), originalEvent);
          if (context.timeoutCanBeReset) {
            context.setResetTimeoutCallback(this.resetTimeout.bind(this));
          }
        }
      }.bind(this));
    },
    /**
     * @param {?} method
     * @return {?}
     */
    getAutoCloseCallback : function(method) {
      if (!method.autoCloseCallback) {
        return null;
      }
      return method.autoCloseCallback.bind(method);
    },
    /**
     * @param {?} id
     * @param {?} shim
     * @return {undefined}
     */
    resetTimeout : function(id, shim) {
      clearTimeout(this._sheetCloseHandler);
      var img = this.getAutoCloseCallback(id);
      this._sheetCloseHandler = $(this.close.bind(this, id, img), shim);
    },
    /**
     * @param {?} className
     * @return {?}
     */
    set : function(className) {
      return this._openCommon(className, false);
    },
    /**
     * @param {number} expectedHashCode
     * @return {?}
     */
    open : function(expectedHashCode) {
      return this._openCommon(expectedHashCode, true);
    },
    /**
     * @param {number} expectedHashCode
     * @param {number} callback
     * @return {undefined}
     */
    close : function(expectedHashCode, callback) {
      if (this._openSheet != expectedHashCode) {
        return;
      }
      if (!this._openSheet) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._animation) {
        this._animation.stop();
      }
      if (this._sheetCloseHandler) {
        clearTimeout(this._sheetCloseHandler);
        /** @type {null} */
        this._sheetCloseHandler = null;
      }
      s.addClass(this._tabMainElement, "sheetSlide");
      s.addClass(this._tabMainElement, "_1sk4");
      var topOffset = Css.getElementDimensions(this._rootElement).y;
      this.resize();
      this._animation = (new node(this._rootElement)).to("bottom", topOffset + "px").duration(100).ease(node.ease.begin).ondone(function() {
        d.empty(this._rootElement);
        s.hide(this._rootElement);
        s.removeClass(this._tabMainElement, "sheetSlide");
        s.removeClass(this._tabMainElement, "_1sk4");
        /** @type {null} */
        this._openSheet = null;
        this.resize();
        if (callback) {
          callback();
        }
      }.bind(this)).go();
    },
    /**
     * @param {?} objId
     * @return {undefined}
     */
    clear : function(objId) {
      this.close(this._openSheet, objId);
    },
    /**
     * @return {undefined}
     */
    resize : function() {
      this.inform("resize");
    }
  });
  /** @type {function (?, ?, ?): undefined} */
  module.exports = Type;
}, null);
__d("Token", ["CSS", "DataStore", "DOM", "Locale", "UnicodeBidi", "fbt"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, el, listener, dojo, methods, dataAndEvents, self) {
  /**
   * @param {Object} info
   * @param {string} obj
   * @return {undefined}
   */
  function _(info, obj) {
    /** @type {Object} */
    this.info = info;
    /** @type {string} */
    this.paramName = obj;
  }
  /**
   * @return {?}
   */
  _.prototype.getInfo = function() {
    return this.info;
  };
  /**
   * @return {?}
   */
  _.prototype.getText = function() {
    return this.info.text;
  };
  /**
   * @return {?}
   */
  _.prototype.getValue = function() {
    return this.info.uid;
  };
  /**
   * @return {?}
   */
  _.prototype.isFreeform = function() {
    return!!this.info.freeform;
  };
  /**
   * @param {?} index
   * @return {?}
   */
  _.prototype.setSelected = function(index) {
    el.conditionClass(this.getElement(), "uiTokenSelected", index);
    return this;
  };
  /**
   * @return {?}
   */
  _.prototype.getElement = function() {
    if (!this.element) {
      this.setElement(this.createElement());
    }
    return this.element;
  };
  /**
   * @param {?} element
   * @return {?}
   */
  _.prototype.setElement = function(element) {
    listener.set(element, "Token", this);
    this.element = element;
    return this;
  };
  /**
   * @return {?}
   */
  _.prototype.isRemovable = function() {
    return el.hasClass(this.element, "removable");
  };
  /**
   * @return {?}
   */
  _.prototype.getTextDirection = function() {
    var f1SpecialConvert = dataAndEvents.isDirectionRTL(this.getText());
    var f2SpecialConvert = methods.isRTL();
    if (f1SpecialConvert && !f2SpecialConvert) {
      return "rtl";
    }
    if (!f1SpecialConvert && f2SpecialConvert) {
      return "ltr";
    }
    return null;
  };
  /**
   * @param {string} type
   * @param {?} expectedHashCode
   * @return {?}
   */
  _.prototype.createElement = function(type, expectedHashCode) {
    var i = this.paramName;
    var fn = this.getText();
    var val = this.getValue();
    var id = dojo.create("a", {
      href : "#",
      "aria-label" : self._("Remove {item}", [self.param("item", fn)]),
      className : "remove uiCloseButton uiCloseButtonSmall"
    });
    if (type) {
      el.addClass(id, "uiCloseButtonSmallGray");
    }
    var matched = dojo.create("input", {
      type : "hidden",
      value : val,
      name : i + "[]",
      autocomplete : "off"
    });
    var output = dojo.create("input", {
      type : "hidden",
      value : fn,
      name : "text_" + i + "[]",
      autocomplete : "off"
    });
    var options = {
      className : "removable uiToken"
    };
    var dir = this.getTextDirection();
    if (dir !== null) {
      options.dir = dir;
    }
    var node = dojo.create("span", options, [fn, matched, output, id]);
    if (type) {
      el.addClass(node, "uiTokenGray");
    }
    if (expectedHashCode) {
      var c = dojo.create("i", {
        className : expectedHashCode
      });
      dojo.prependContent(node, c);
    }
    return node;
  };
  /** @type {function (Object, string): undefined} */
  module.exports = _;
}, null);
__d("WeakToken", ["CSS", "Token"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, element, b) {
  /**
   * @return {undefined}
   */
  function a() {
    if (b !== null) {
      b.apply(this, arguments);
    }
  }
  var i;
  for (i in b) {
    if (b.hasOwnProperty(i)) {
      a[i] = b[i];
    }
  }
  var parent = b === null ? null : b.prototype;
  /** @type {Object} */
  a.prototype = Object.create(parent);
  /** @type {function (): undefined} */
  a.prototype.constructor = a;
  /** @type {(Object|string)} */
  a.__superConstructor__ = b;
  /**
   * @return {?}
   */
  a.prototype.createElement = function() {
    var activeClassName = parent.createElement.call(this, true, "UFIWeakReferenceIcon");
    element.addClass(activeClassName, "uiTokenWeakReference");
    return activeClassName;
  };
  /** @type {function (): undefined} */
  module.exports = a;
}, null);
__d("Tokenizer", ["Arbiter", "ArbiterMixin", "CSS", "DataStore", "DOM", "DOMQuery", "Event", "Focus", "Input", "Keys", "Parent", "StickyPlaceholderInput", "Style", "TextMetrics", "Token", "UserAgent_DEPRECATED", "WeakToken", "copyProperties", "createObjectFrom", "emptyFunction", "mixin"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, m, data, $animate, div, first, range, handler, input, dust, keys, util, t, domStyle, State, Socket, bowser, Dialog,
fn, indexOf, init, fun) {
  /**
   * @param {HTMLElement} obj
   * @param {Object} err
   * @param {Element} params
   * @return {undefined}
   */
  function self(obj, err, params) {
    /** @type {HTMLElement} */
    this.element = obj;
    /** @type {Object} */
    this.typeahead = err;
    this.input = err.getCore().getElement();
    if (params) {
      this.init(params.tokenarea, params.param_name, params.initial_info, params.options);
    }
    div.set(this.element, "Tokenizer", this);
  }
  /** @type {number} */
  var trie = 20;
  var tmp = fun(data);
  var p;
  for (p in tmp) {
    if (tmp.hasOwnProperty(p)) {
      self[p] = tmp[p];
    }
  }
  var parent = tmp === null ? null : tmp.prototype;
  /** @type {Object} */
  self.prototype = Object.create(parent);
  /** @type {function (HTMLElement, Object, Element): undefined} */
  self.prototype.constructor = self;
  self.__superConstructor__ = tmp;
  /**
   * @param {?} target
   * @param {string} allBindingsAccessor
   * @param {Array} models
   * @param {?} selector
   * @return {undefined}
   */
  self.prototype.init = function(target, allBindingsAccessor, models, selector) {
    this._handleEvents = this.handleEvents.bind(this);
    /** @type {(RegExp|string)} */
    this.init = init;
    this.setTokenarea(target);
    /** @type {string} */
    this.paramName = allBindingsAccessor;
    if (!this.placeholder) {
      this.placeholder = this.input.getAttribute("data-placeholder") || (this.input.getAttribute("placeholder") || "");
    }
    fn(this, selector || {});
    this.initEvents();
    this.initTypeahead();
    this.reset(models);
    this.initBehaviors();
    setTimeout(this.adjustWidth.bind(this), 0);
    m.inform("Tokenizer/init", this, m.BEHAVIOR_PERSISTENT);
    this.inform("init", {
      tokens : this.getTokens()
    });
  };
  /**
   * @param {Array} models
   * @return {undefined}
   */
  self.prototype.reset = function(models) {
    /** @type {Array} */
    this.tokens = [];
    this.unique = {};
    if (models) {
      this.populate(models);
    } else {
      first.empty(this.tokenarea);
    }
    this.updateTokenarea();
  };
  /**
   * @param {Array} options
   * @return {undefined}
   */
  self.prototype.populate = function(options) {
    /** @type {Array} */
    var output = [];
    this.tokens = this.getTokenElements().map(function(classesToRemove, flag) {
      var val = options[flag];
      output.push(this._tokenKey(val));
      return this.createToken(val, classesToRemove);
    }, this);
    this.unique = indexOf(output, this.tokens);
  };
  /**
   * @param {?} target
   * @return {undefined}
   */
  self.prototype.setTokenarea = function(target) {
    /** @type {boolean} */
    var ha = !this.tokenarea;
    if (target !== this.tokenarea) {
      if (this.tokenarea) {
        first.remove(this.tokenarea);
        var prefixed;
        for (prefixed in this._tokenareaListeners) {
          this._tokenareaListeners[prefixed].remove();
        }
      }
      this._tokenareaListeners = handler.listen(target, {
        click : this._handleEvents,
        keydown : this._handleEvents
      });
      this.tokenarea = target;
    }
    if (!ha) {
      this.updateTokenarea();
    }
  };
  /**
   * @return {?}
   */
  self.prototype.getElement = function() {
    return this.element;
  };
  /**
   * @return {?}
   */
  self.prototype.getTypeahead = function() {
    return this.typeahead;
  };
  /**
   * @return {?}
   */
  self.prototype.getInput = function() {
    return this.input;
  };
  /**
   * @return {undefined}
   */
  self.prototype.initBehaviors = function() {
    this.behaviors = this.behaviors || [];
    if (this.behaviors instanceof Array) {
      this.behaviors.forEach(function(options) {
        options.behavior(this, options.config);
      }.bind(this));
    } else {
      var name;
      for (name in this.behaviors || {}) {
        var callback = window.TokenizerBehaviors && window.TokenizerBehaviors[name];
        callback.call(null, this, this.behaviors[name]);
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.prototype.initTypeahead = function() {
    var resetOnSelect = this.typeahead.getCore();
    /** @type {boolean} */
    resetOnSelect.resetOnSelect = true;
    /** @type {boolean} */
    resetOnSelect.setValueOnSelect = false;
    /** @type {boolean} */
    resetOnSelect.preventFocusChangeOnTab = true;
    if (this.inline) {
      var first = this.typeahead.getView();
      $animate.addClass(first.getElement(), "uiInlineTokenizerView");
    }
    this.typeahead.subscribe("select", function(dataAndEvents, completeEvent) {
      return this.handleSelect(completeEvent);
    }.bind(this));
    this.typeahead.subscribe("blur", this.handleBlur.bind(this));
  };
  /**
   * @param {string} e
   * @return {undefined}
   */
  self.prototype.handleBlur = function(e) {
    this.inform("blur", {
      event : e
    });
    this.updatePlaceholder();
  };
  /**
   * @param {Node} e
   * @return {undefined}
   */
  self.prototype.handleSelect = function(e) {
    var object = e.selected;
    if ("uid" in object) {
      this.updateInput();
      this.addToken(this.createToken(object));
    }
  };
  /**
   * @return {undefined}
   */
  self.prototype.initEvents = function() {
    /** @type {string} */
    var event = bowser.firefox() < 4 ? "keypress" : "keydown";
    handler.listen(this.input, "paste", this.paste.bind(this));
    handler.listen(this.input, event, this.keydown.bind(this));
  };
  /**
   * @param {Event} e
   * @return {undefined}
   */
  self.prototype.handleEvents = function(e) {
    var count = e.getTarget();
    var followingChild = count && this.getTokenElementFromTarget(count);
    if (!followingChild) {
      return;
    }
    if (e.type != "keydown" || handler.getKeyCode(e) == keys.RETURN) {
      this.processEvents(e, count, followingChild);
    }
  };
  /**
   * @param {Event} event
   * @param {?} params
   * @param {HTMLElement} node
   * @return {undefined}
   */
  self.prototype.processEvents = function(event, params, node) {
    if (util.byClass(params, "remove")) {
      var s = node.nextSibling;
      s = s && range.scry(node.nextSibling, ".remove")[0];
      var events = this.getTokenFromElement(node);
      events = this.addTokenData(events, params);
      this.removeToken(events);
      this.focusOnTokenRemoval(event, s);
      event.kill();
    }
  };
  /**
   * @param {Event} event
   * @param {boolean} v02
   * @return {undefined}
   */
  self.prototype.focusOnTokenRemoval = function(event, v02) {
    input.set(event.type == "keydown" && v02 || this.input);
  };
  /**
   * @param {?} keepData
   * @param {?} startArray
   * @return {?}
   */
  self.prototype.addTokenData = function(keepData, startArray) {
    return keepData;
  };
  /**
   * @param {string} e
   * @return {undefined}
   */
  self.prototype.keydown = function(e) {
    this.inform("keydown", {
      event : e
    });
    var key = handler.getKeyCode(e);
    var str = this.input;
    if (this.inline && (key == keys.BACKSPACE && dust.isEmpty(str))) {
      var camelKey = this.getLastToken();
      if (camelKey && camelKey.isRemovable()) {
        this.removeToken(camelKey);
      }
    }
    this.updateInput();
  };
  /**
   * @param {string} e
   * @return {undefined}
   */
  self.prototype.paste = function(e) {
    this.inform("paste", {
      event : e
    });
    this.updateInput(true);
  };
  /**
   * @return {undefined}
   */
  self.prototype.focusInput = function() {
    input.set(this.input);
  };
  /**
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  self.prototype.updateInput = function(dataAndEvents) {
    if (!this.inline) {
      return;
    }
    setTimeout(function() {
      this.adjustWidth(this.input.value);
      if (dataAndEvents) {
        this.input.value = this.input.value;
      }
    }.bind(this), 20);
    t.setPlaceholderText(this.input, "");
    this.inform("resize");
  };
  /**
   * @param {?} string
   * @return {undefined}
   */
  self.prototype.setPlaceholder = function(string) {
    this.placeholder = string;
    if (this.stickyPlaceholder) {
      t.setPlaceholderText(this.input, string);
    }
    this.updatePlaceholder();
  };
  /**
   * @return {undefined}
   */
  self.prototype.updatePlaceholder = function() {
    if (!this.inline || this.input.value) {
      return;
    }
    /** @type {boolean} */
    var stickyPlaceholder = !this.tokens.length;
    /** @type {string} */
    var text = "";
    if (stickyPlaceholder || this.stickyPlaceholder) {
      this.adjustWidth(this.placeholder);
      text = this.placeholder;
    } else {
      this.adjustWidth(this.input.value);
    }
    t.setPlaceholderText(this.input, text);
  };
  /**
   * @param {Object} text
   * @return {undefined}
   */
  self.prototype.adjustWidth = function(text) {
    if (!this.inline || !this._getIsInDOM()) {
      return;
    }
    if (!text && this.input.value === "") {
      text = this.placeholder;
    }
    /** @type {number} */
    var pos = trie;
    if (text !== this.placeholder || (!this.getTokens().length || this.stickyPlaceholder)) {
      var npos = domStyle.getFloat(this.getElement(), "width");
      var code = this._getMetrics().measure(text);
      pos = code.width + this._getWidthOffset() + 10;
      pos = pos >= npos ? npos : pos;
    }
    domStyle.set(this.input, "width", pos + "px");
    this.inform("resize");
    m.inform("reflow");
  };
  /**
   * @param {?} index
   * @return {?}
   */
  self.prototype.getToken = function(index) {
    return this.unique[index] || null;
  };
  /**
   * @return {?}
   */
  self.prototype.getTokens = function() {
    return this.tokens || [];
  };
  /**
   * @return {?}
   */
  self.prototype.getTokenElements = function() {
    return range.scry(this.tokenarea, "span.uiToken");
  };
  /**
   * @param {?} params
   * @return {?}
   */
  self.prototype.getTokenElementFromTarget = function(params) {
    return util.byClass(params, "uiToken");
  };
  /**
   * @param {Object} key
   * @return {?}
   */
  self.prototype.getTokenFromElement = function(key) {
    return div.get(key, "Token");
  };
  /**
   * @return {?}
   */
  self.prototype.getTokenValues = function() {
    if (!this.tokens) {
      return[];
    }
    return this.tokens.map(function(res) {
      return res.getValue();
    });
  };
  /**
   * @return {?}
   */
  self.prototype.getFirstToken = function() {
    return this.tokens[0] || null;
  };
  /**
   * @return {?}
   */
  self.prototype.getLastToken = function() {
    return this.tokens[this.tokens.length - 1] || null;
  };
  /**
   * @return {?}
   */
  self.prototype.hasMaxTokens = function() {
    return this.maxTokens && this.maxTokens <= this.tokens.length;
  };
  /**
   * @param {string} opts
   * @param {?} element
   * @return {?}
   */
  self.prototype.createToken = function(opts, element) {
    var video = this.getToken(this._tokenKey(opts));
    if (!video) {
      video = opts.weak_reference ? new Dialog(opts, this.paramName) : new Socket(opts, this.paramName);
    }
    if (element) {
      video.setElement(element);
    }
    return video;
  };
  /**
   * @param {?} token
   * @return {undefined}
   */
  self.prototype.addToken = function(token) {
    if (this.hasMaxTokens()) {
      return;
    }
    var cleaned = this._tokenKey(token.getInfo());
    if (cleaned in this.unique) {
      return;
    }
    this.unique[cleaned] = token;
    this.tokens.push(token);
    this.insertToken(token);
    this.updateTokenarea();
    this.inform("addToken", token);
    this.inform("changeTokens");
    m.inform("Form/change", {
      node : this.element
    });
  };
  /**
   * @param {?} element
   * @return {undefined}
   */
  self.prototype.insertToken = function(element) {
    first.appendContent(this.tokenarea, element.getElement());
  };
  /**
   * @param {?} key
   * @return {undefined}
   */
  self.prototype.removeToken = function(key) {
    if (!key) {
      return;
    }
    var camelKey = this.tokens.indexOf(key);
    if (camelKey < 0) {
      return;
    }
    this.tokens.splice(this.tokens.indexOf(key), 1);
    delete this.unique[this._tokenKey(key.getInfo())];
    first.remove(key.getElement());
    this.updateTokenarea();
    this.inform("removeToken", key);
    this.inform("changeTokens");
    m.inform("Form/change", {
      node : this.element
    });
  };
  /**
   * @return {undefined}
   */
  self.prototype.removeAllTokens = function() {
    this.reset();
    this.inform("changeTokens");
    this.inform("removeAllTokens");
  };
  /**
   * @return {undefined}
   */
  self.prototype.updateTokenarea = function() {
    var disabledButton = this.typeahead.getCore();
    var l = this.getTokenValues();
    if (this.excludeDuplicates) {
      if (!this._exclusions) {
        this._exclusions = disabledButton.getExclusions();
      }
      disabledButton.setExclusions(l.concat(this._exclusions));
    }
    disabledButton.setEnabled(!this.hasMaxTokens());
    this.updateTokenareaVisibility();
    this.updatePlaceholder();
    this.inform("resize");
    m.inform("reflow");
  };
  /**
   * @return {undefined}
   */
  self.prototype.updateTokenareaVisibility = function() {
    $animate.conditionShow(this.tokenarea, this.tokens.length !== 0);
  };
  /**
   * @param {Object} opts
   * @return {?}
   */
  self.prototype._tokenKey = function(opts) {
    return opts.uid + (opts.freeform ? ":" : "");
  };
  /**
   * @return {?}
   */
  self.prototype._getWidthOffset = function() {
    if (this._widthOffset === null) {
      var value = this.input.clientWidth;
      var object = domStyle.getFloat(this.input, "width");
      if (value == object) {
        this._widthOffset = domStyle.getFloat(this.input, "paddingLeft") + domStyle.getFloat(this.input, "paddingRight");
      } else {
        /** @type {number} */
        this._widthOffset = 0;
      }
    }
    return this._widthOffset;
  };
  /**
   * @return {?}
   */
  self.prototype._getMetrics = function() {
    if (!this._metrics) {
      this._metrics = new State(this.input, this.inline);
    }
    return this._metrics;
  };
  /**
   * @return {?}
   */
  self.prototype._getIsInDOM = function() {
    return this._isInDOM || (this._isInDOM = range.contains(document.body, this.input));
  };
  /**
   * @param {?} item
   * @return {?}
   */
  self.getInstance = function(item) {
    var prop = util.byClass(item, "uiTokenizer");
    return prop ? div.get(prop, "Tokenizer") : null;
  };
  /**
   * @param {Object} target
   * @param {Element} options
   * @return {undefined}
   */
  self.init = function(target, options) {
    target.init(options.tokenarea, options.param_name, options.initial_info, options.options);
  };
  fn(self.prototype, {
    inline : false,
    maxTokens : null,
    excludeDuplicates : true,
    placeholder : "",
    _widthOffset : null,
    _metrics : null
  });
  /** @type {function (HTMLElement, Object, Element): undefined} */
  context.exports = self;
}, null);
__d("MercuryTypeahead", ["Event", "ArbiterMixin", "DOM", "DOMDimensions", "Input", "Keys", "MercuryTypeaheadTemplates", "Tokenizer", "Typeahead", "TypeaheadCore", "copyProperties", "cx"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, Event, r, self, s, assert, keys, dataAndEvents, animate, Benchmark, ctor, createObject, deepDataAndEvents) {
  /**
   * @param {?} value
   * @param {?} view
   * @return {undefined}
   */
  var constructor = function(value, view) {
    /** @type {null} */
    this._domElement = null;
    /** @type {null} */
    this._typeahead = null;
    /** @type {null} */
    this._tokenizer = null;
    /** @type {string} */
    this._placeholder = "";
    /** @type {Array} */
    this._exclusions = [];
    /** @type {null} */
    this._viewNodeOrID = null;
    this._viewOptions = {
      renderer : "compact",
      autoSelect : true
    };
    /** @type {Array} */
    this._tokenizerBehaviors = [];
    /** @type {null} */
    this._heightPrev = null;
    this._dataSource = value;
    this._view = view;
  };
  createObject(constructor.prototype, r);
  createObject(constructor.prototype, {
    /**
     * @param {?} string
     * @return {?}
     */
    setPlaceholder : function(string) {
      this._placeholder = string;
      return this;
    },
    /**
     * @param {?} data
     * @return {undefined}
     */
    setExcludedParticipantsFromThreadMeta : function(data) {
      if (!data) {
        return;
      }
      if (!data.former_participants) {
        this.setExcludedParticipants(data.participants);
        return;
      }
      var r = data.former_participants.filter(function(dataAndEvents) {
        return dataAndEvents.is_friend === false;
      }).map(function(ignores) {
        return ignores.id;
      });
      this.setExcludedParticipants(r.concat(data.participants));
    },
    /**
     * @param {Array} failures
     * @return {?}
     */
    setExcludedParticipants : function(failures) {
      /** @type {Array} */
      this._exclusions = [];
      failures.forEach(function(part) {
        var index = part.indexOf(":");
        if (part.substr(0, index) == "fbid") {
          this._exclusions.push(part.substr(index + 1));
        }
      }.bind(this));
      return this;
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    setViewNodeID : function(dataAndEvents) {
      this._viewNodeOrID = dataAndEvents;
    },
    /**
     * @param {?} first
     * @return {undefined}
     */
    setViewNode : function(first) {
      this._viewNodeOrID = first;
    },
    /**
     * @param {?} newContent
     * @return {undefined}
     */
    setFullWidthView : function(newContent) {
      var results = self.create("div", {
        className : "_4ck uiTypeaheadView"
      });
      self.setContent(newContent, results);
      this.setViewNode(results);
    },
    /**
     * @param {?} i
     * @param {?} offsetPosition
     * @return {undefined}
     */
    setViewOption : function(i, offsetPosition) {
      this._viewOptions[i] = offsetPosition;
    },
    /**
     * @param {?} spaceName
     * @return {undefined}
     */
    addTokenizerBehavior : function(spaceName) {
      this._tokenizerBehaviors.push(spaceName);
    },
    /**
     * @param {?} task
     * @return {undefined}
     */
    build : function(task) {
      if (this._domElement) {
        return;
      }
      var store = dataAndEvents[":fb:mercury:tokenizer"].build();
      var fs = dataAndEvents[":fb:mercury:typeahead"].build();
      this._domElement = store.getRoot();
      self.appendContent(this._domElement, fs.getRoot());
      var input = fs.getNode("textfield");
      assert.setPlaceholder(input, this._placeholder);
      input.setAttribute("data-placeholder", this._placeholder);
      this._input = input;
      var fn = {
        node_id : this._viewNodeOrID,
        ctor : this._view,
        options : this._viewOptions
      };
      var options = {
        ctor : ctor,
        options : {
          setValueOnSelect : true
        }
      };
      this._typeahead = new Benchmark(this._dataSource, fn, options, fs.getRoot());
      this._typeahead.init();
      var until = {
        inline : true,
        behaviors : this._tokenizerBehaviors
      };
      this._tokenizer = new animate(this._domElement, this._typeahead);
      this._tokenizer.init(store.getNode("tokenarea"), "participants", [], until);
      this._tokenizer.subscribe(["addToken", "removeToken", "removeAllTokens"], this._tokensChanged.bind(this));
      this._tokenizer.subscribe("resize", function() {
        this.inform("resize");
      }.bind(this));
      Event.listen(input, "focus", function() {
        this._resetDataSource();
        this._typeahead.init();
      }.bind(this));
      Event.listen(this._domElement, "click", this.focus.bind(this));
      Event.listen(input, "keydown", this.keydown.bind(this));
      this._heightPrev = s.getElementDimensions(this._domElement).height;
    },
    /**
     * @return {?}
     */
    getElement : function() {
      return this._domElement;
    },
    /**
     * @return {?}
     */
    getSelectedParticipantIDs : function() {
      /** @type {Array} */
      var string = [];
      if (this._tokenizer) {
        (this._tokenizer.getTokenValues() || []).forEach(function(json) {
          string.push("fbid:" + json);
        });
      }
      return string;
    },
    /**
     * @return {?}
     */
    getTokens : function() {
      /** @type {Array} */
      var result = [];
      if (this._tokenizer) {
        result = this._tokenizer.getTokens();
      }
      return result;
    },
    /**
     * @return {?}
     */
    getTokenizer : function() {
      return this._tokenizer;
    },
    /**
     * @param {Object} e
     * @return {?}
     */
    keydown : function(e) {
      if (this._tokenizer.inline && e.keyCode == keys.ESC) {
        if (assert.isEmpty(this._input)) {
          var camelKey = this._tokenizer.getLastToken();
          if (camelKey && camelKey.isRemovable()) {
            this._tokenizer.removeToken(camelKey);
          }
        } else {
          this._typeahead.getCore().reset();
        }
        return false;
      }
      if (assert.isEmpty(this._input) && (this._tokenizer.inline && e.keyCode === keys.RETURN)) {
        e.preventDefault();
        return this.inform("tokens-return");
      }
    },
    /**
     * @return {undefined}
     */
    reset : function() {
      if (this._tokenizer) {
        this._tokenizer.removeAllTokens();
      }
      if (this._typeahead) {
        this._typeahead.getCore().reset();
      }
    },
    /**
     * @return {undefined}
     */
    focus : function() {
      if (this._tokenizer) {
        this._tokenizer.focusInput();
      }
    },
    /**
     * @return {?}
     */
    getTypeahead : function() {
      return this._typeahead;
    },
    /**
     * @return {undefined}
     */
    _resetDataSource : function() {
      this._dataSource.setExclusions(this._exclusions);
    },
    /**
     * @return {undefined}
     */
    _tokensChanged : function() {
      this.inform("tokens-changed");
    }
  });
  /** @type {function (?, ?): undefined} */
  module.exports = constructor;
}, null);
__d("StickerSearch", ["StickerServerRequests"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents) {
  var h;
  var prepareTagsData;
  var old = {};
  var JsDiff = {
    /**
     * @param {?} deepDataAndEvents
     * @param {Function} cb
     * @return {undefined}
     */
    requestStickersForQuery : function(deepDataAndEvents, cb) {
      h = deepDataAndEvents;
      dataAndEvents.getStickersForQuery(deepDataAndEvents, function(msg) {
        return h === deepDataAndEvents && cb(msg.payload);
      });
    },
    /**
     * @return {?}
     */
    prepareTagsData : function() {
      if (!prepareTagsData) {
        prepareTagsData = dataAndEvents.fetchTagData(function(expr) {
          old = expr;
        });
      }
      return prepareTagsData;
    },
    /**
     * @param {string} name
     * @return {?}
     */
    getTagByName : function(name) {
      return old[name];
    },
    /**
     * @return {?}
     */
    getTagsIndex : function() {
      return old;
    }
  };
  module.exports = JsDiff;
}, null);
__d("StickersFlyoutPackSelector.react", ["Animation", "ImmutableObject", "Locale", "React", "Image.react", "StickerActions", "StickerConfig", "StickerConstants", "StickerInterfaces", "StickerState", "StickerStoreController", "XUIBadge.react", "cx", "emptyFunction", "fbt", "ix", "getObjectValues"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, Assertion, logger, methods, self, type, dataAndEvents, buf, act, props, deepDataAndEvents, callback, t, execResult,
onClick, opt_keys, $sanitize, forOwn) {
  /** @type {number} */
  var step = 4;
  /** @type {number} */
  var r20 = 200;
  /** @type {string} */
  var text = "Sticker Store";
  var JsDiff = self.createClass({
    displayName : "StickersFlyoutPackSelector",
    propTypes : {
      stickerInterface : self.PropTypes.oneOf(forOwn(props)),
      numNewPacks : self.PropTypes.number,
      packs : self.PropTypes.arrayOf(self.PropTypes.instanceOf(logger)).isRequired,
      onPackClick : self.PropTypes.func,
      selectedPackID : self.PropTypes.string,
      resetTagSelectorFunc : self.PropTypes.func
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        animating : false,
        page : 0
      };
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        stickerInterface : props.MESSAGES,
        numNewPacks : 0
      };
    },
    /**
     * @param {?} nextState
     * @param {Object} fieldset
     * @return {?}
     */
    shouldComponentUpdate : function(nextState, fieldset) {
      return!fieldset.animating;
    },
    /**
     * @return {undefined}
     */
    onFlyoutShown : function() {
      if (this.props.packs.length > 0) {
        var classNames = this._calculatePageForPack(this.props.selectedPackID);
        if (this.state.page !== classNames) {
          this._setPage(classNames, 0);
        }
      }
    },
    /**
     * @param {?} itemId
     * @return {?}
     */
    _calculatePageForPack : function(itemId) {
      /** @type {number} */
      var i = 0;
      for (;i < this.props.packs.length;i++) {
        if (this.props.packs[i].id == itemId) {
          return i <= step ? 0 : Math.floor((i - 1) / step);
        }
      }
      return 0;
    },
    /**
     * @param {number} i
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    _setPage : function(i, expectedHashCode) {
      if (this.state.animating) {
        return;
      }
      this.setState({
        animating : true,
        page : i
      }, function() {
        var val = this.refs.positioner.getDOMNode();
        var c = this._calculatePosition(i);
        (new Assertion(val)).to(c.reference, c.offset + "px").ondone(function() {
          return this.setState({
            animating : false
          });
        }.bind(this)).duration(expectedHashCode).go();
      });
    },
    /**
     * @param {number} i
     * @return {?}
     */
    _calculatePosition : function(i) {
      var tmp = this.refs.positioner.getDOMNode();
      var left = tmp.childNodes[i].offsetLeft;
      if (methods.isRTL()) {
        var x = tmp.offsetWidth;
        var width = tmp.childNodes[i].offsetWidth;
        return{
          reference : "right",
          offset : left + width - x
        };
      }
      return{
        reference : "left",
        offset : -left
      };
    },
    /**
     * @return {?}
     */
    _numPages : function() {
      return Math.max(1, Math.ceil((this.props.packs.length - 1) / step));
    },
    /**
     * @return {?}
     */
    _canGoPrev : function() {
      return this.state.page > 0;
    },
    /**
     * @return {?}
     */
    _canGoNext : function() {
      return this.state.page + 1 < this._numPages();
    },
    /**
     * @return {undefined}
     */
    _goPrev : function() {
      if (this._canGoPrev()) {
        this._setPage(this.state.page - 1, r20);
      }
    },
    /**
     * @return {undefined}
     */
    _goNext : function() {
      if (this._canGoNext()) {
        this._setPage(this.state.page + 1, r20);
      }
    },
    /**
     * @return {undefined}
     */
    _openStore : function() {
      dataAndEvents.resetNumNewPacks();
      /** @type {boolean} */
      var node = this.props.stickerInterface == props.COMPOSER;
      callback.showStore(null, node);
    },
    /**
     * @return {?}
     */
    render : function() {
      return self.createElement("div", {
        className : "_5r85"
      }, this._renderStoreButton(), this._renderPrevArrow(), this._renderNextArrow(), self.createElement("div", {
        className : "_5r88"
      }, self.createElement("div", {
        className : "_5r89",
        ref : "positioner"
      }, this._renderPages())));
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    _selectPack : function(expectedHashCode) {
      var selector = deepDataAndEvents.getPack(expectedHashCode);
      if (selector && selector.isPromoted) {
        dataAndEvents.addPack(expectedHashCode);
      }
      if (expectedHashCode === act.SEARCH_PACK_ID) {
        this.props.resetTagSelectorFunc();
      }
      if (this.props.onPackClick) {
        this.props.onPackClick(expectedHashCode);
      } else {
        dataAndEvents.selectPack(expectedHashCode);
      }
    },
    /**
     * @return {?}
     */
    _renderPages : function() {
      var str = this.props.packs.map(function(pack, idx) {
        return self.createElement(template, {
          key : pack.id,
          onClick : function() {
            return this._selectPack(pack.id);
          }.bind(this),
          pack : pack,
          selected : this.props.selectedPackID === pack.id,
          index : idx,
          isComments : this.props.stickerInterface == props.COMMENTS
        });
      }.bind(this));
      /** @type {Array} */
      var fragment = [];
      /** @type {number} */
      var i = 0;
      for (;i < str.length;i += step) {
        /** @type {number} */
        var start = i;
        if (i === 0) {
          i++;
        }
        fragment.push(self.createElement("div", {
          className : "_5r81",
          key : i
        }, str.slice(start, i + step)));
      }
      return fragment;
    },
    /**
     * @return {?}
     */
    _renderStoreButton : function() {
      return self.createElement("a", {
        "aria-label" : text,
        className : "_5r86 rfloat",
        "data-hover" : "tooltip",
        onClick : this._openStore
      }, self.createElement(type, {
        className : "_5r87",
        src : $sanitize("/images/messaging/stickers/selector/sticker_store.png")
      }), this._renderJewel());
    },
    /**
     * @return {?}
     */
    _renderJewel : function() {
      var len = this.props.numNewPacks;
      if (!len) {
        return null;
      }
      return self.createElement(t, {
        className : "rfloat _3fhs",
        count : len,
        maxcount : 9,
        type : "special"
      });
    },
    /**
     * @return {?}
     */
    _renderPrevArrow : function() {
      if (!this._canGoPrev()) {
        return null;
      }
      var srcTerminal = methods.isRTL() ? $sanitize("/images/messaging/stickers/selector/right.png") : $sanitize("/images/messaging/stickers/selector/left.png");
      return self.createElement("a", {
        className : "_37wu" + (" " + "lfloat"),
        onClick : this._goPrev
      }, self.createElement(type, {
        className : "_5r84",
        src : srcTerminal
      }));
    },
    /**
     * @return {?}
     */
    _renderNextArrow : function() {
      if (!this._canGoNext()) {
        return null;
      }
      var srcTerminal = methods.isRTL() ? $sanitize("/images/messaging/stickers/selector/left.png") : $sanitize("/images/messaging/stickers/selector/right.png");
      return self.createElement("a", {
        className : "_37wv" + (" " + "rfloat"),
        onClick : this._goNext
      }, self.createElement(type, {
        className : "_5r84",
        src : srcTerminal
      }));
    }
  });
  var template = self.createClass({
    displayName : "PackIcon",
    propTypes : {
      index : self.PropTypes.number,
      isComments : self.PropTypes.bool,
      onClick : self.PropTypes.func,
      pack : self.PropTypes.instanceOf(logger).isRequired,
      selected : self.PropTypes.bool
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        isComments : false,
        onClick : onClick
      };
    },
    /**
     * @param {Object} item
     * @return {?}
     */
    _getPackIcon : function(item) {
      if (item.id == act.SEARCH_PACK_ID) {
        return $sanitize("/images/messaging/stickers/icons/search.png");
      }
      if (item.id == act.MRU_STICKER_PACK) {
        return $sanitize("/images/messaging/stickers/icons/recent.png");
      }
      if (item.id == act.EMOTICON_PACK_ID) {
        return $sanitize("/images/messaging/stickers/icons/emoji.png");
      }
      return item.icon;
    },
    /**
     * @return {?}
     */
    render : function() {
      var file = this.props.pack;
      /** @type {boolean} */
      var charset = buf.WebStickerSearch && !buf.StickerSearchInRecent ? this.props.index === 1 || this.props.index === 2 : this.props.index === 1;
      /** @type {string} */
      var cls = "_5r8a" + (this.props.selected ? " " + "_5r8b" : "") + (file.id == act.MRU_STICKER_PACK ? " " + "_5qcj" : "") + (file.id == act.SEARCH_PACK_ID ? " " + "_5qck" : "") + (charset ? " " + "_eb3" : "");
      var name = this.props.isComments && !file.isCommentsCapable;
      /** @type {string} */
      var moduleMap = "This pack is only available in messages";
      var eventName = name ? onClick : function() {
        return this.props.onClick(file.id);
      }.bind(this);
      return self.createElement("a", {
        "aria-label" : name ? moduleMap : file.name,
        className : cls,
        "data-id" : file.id,
        "data-hover" : "tooltip",
        ref : "search_icon",
        onClick : eventName,
        tabIndex : "0"
      }, self.createElement(type, {
        className : (name ? "_2ji6" : "") + (" " + "_5r8c") + (buf.WebStickerSearch ? " " + "_1viy" : ""),
        src : this._getPackIcon(file)
      }));
    }
  });
  module.exports = JsDiff;
}, null);
__d("StickersFlyoutStickerSelector.react", ["BanzaiLogger", "Grid.react", "Image.react", "ScrollableArea.react", "React", "Sticker.react", "StickerConstants", "StickerConfig", "StickerImages", "StickerInterfaces", "StickerSearch", "StickerState", "StickerUtils", "XUISpinner.react", "cx", "debounce", "emptyFunction", "fbt", "getObjectValues", "ix", "throttle"], function(dataAndEvents, deepDataAndEvents, opt_attributes, matcherFunction, module, execResult, logger, elem, type, attribute, self, label,
a, ignoreMethodDoesntExist, console, props, textAlt, goog, $img, t, opt_keys, require, keepData, positionError, forOwn, done, proxy) {
  var nodeType = elem.GridItem;
  /** @type {number} */
  var height = 320;
  /** @type {number} */
  var w = 278;
  var al = a.MRU_STICKER_PACK;
  /** @type {number} */
  var ypadding = 44;
  /** @type {number} */
  var footerHeight = 112;
  /** @type {string} */
  var id = ignoreMethodDoesntExist.AutoAnimateStickerTray ? "load_and_hover" : "hover";
  var getActual = require(function(dataAndEvents, newlines) {
    if (!dataAndEvents) {
      return;
    }
    logger.log("StickersLoggerConfig", {
      event : "search_sticker",
      searchtoken : dataAndEvents,
      numsearchresults : newlines.length
    });
  }, 1E3);
  var JsDiff = self.createClass({
    displayName : "StickersFlyoutStickerSelector",
    propTypes : {
      height : self.PropTypes.number,
      stickerInterface : self.PropTypes.oneOf(forOwn(props)),
      onQueryResultsFound : self.PropTypes.func,
      onScroll : self.PropTypes.func,
      packID : self.PropTypes.string,
      singleWordTags : self.PropTypes.array,
      typeaheadTags : self.PropTypes.array,
      userInput : self.PropTypes.string
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        stickerInterface : props.MESSAGES,
        onScroll : keepData,
        shown : false
      };
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        loading : false,
        stickers : []
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      if (this.props.packID) {
        this.requestStickersForPack(this.props.packID);
        return;
      }
      if (this.props.userInput) {
        this.requestStickersForQuery(this.props.userInput);
      }
    },
    /**
     * @param {?} nextProps
     * @return {undefined}
     */
    componentWillReceiveProps : function(nextProps) {
      if (nextProps.packID && nextProps.packID !== this.props.packID) {
        this.requestStickersForPack(nextProps.packID);
      } else {
        if (nextProps.userInput !== this.props.userInput) {
          this.requestStickersForQuery(nextProps.userInput);
        }
      }
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    requestStickersForQuery : function(deepDataAndEvents) {
      this.setState({
        loading : true
      });
      textAlt.requestStickersForQuery(deepDataAndEvents, function(expectedHashCode) {
        expectedHashCode.map(function(initial) {
          return console.cacheSticker(initial);
        });
        if (!this.props.tagChosen) {
          getActual(deepDataAndEvents, expectedHashCode);
        }
        if (this.props.stickerInterface == props.COMPOSER) {
          expectedHashCode = expectedHashCode.filter(function(dataAndEvents) {
            return dataAndEvents.isComposerCapable;
          });
        }
        if (this.props.stickerInterface == props.COMMENTS) {
          expectedHashCode = expectedHashCode.filter(function(dataAndEvents) {
            return dataAndEvents.isCommentsCapable;
          });
        }
        if (this.props.stickerInterface == props.MESSAGES) {
          expectedHashCode = expectedHashCode.filter(function(dataAndEvents) {
            return dataAndEvents.isMessengerCapable;
          });
        }
        if (this.isMounted()) {
          this.setState({
            loading : false,
            stickers : expectedHashCode
          });
          if (ignoreMethodDoesntExist.EnterToSendSticker) {
            if (this.props.onQueryResultsFound) {
              this.props.onQueryResultsFound(expectedHashCode);
            }
          }
        }
      }.bind(this));
    },
    /**
     * @param {(Object|string)} dep
     * @return {undefined}
     */
    requestStickersForPack : function(dep) {
      this.setState({
        loading : true
      });
      console.requestStickersForPack(dep, a.TRAY_SIZE, function(tokens) {
        if (dep == al) {
          tokens = goog.getMRUStickerPack(tokens);
          if (this.props.stickerInterface == props.COMPOSER) {
            tokens = tokens.filter(function(dataAndEvents) {
              return dataAndEvents.isComposerCapable;
            });
          }
          if (this.props.stickerInterface == props.COMMENTS) {
            tokens = tokens.filter(function(dataAndEvents) {
              return dataAndEvents.isCommentsCapable;
            });
          }
          if (this.props.stickerInterface == props.MESSAGES) {
            tokens = tokens.filter(function(dataAndEvents) {
              return dataAndEvents.isMessengerCapable;
            });
          }
        }
        this.setState({
          loading : false,
          stickers : tokens
        });
      }.bind(this));
    },
    /**
     * @return {?}
     */
    renderStickers : function() {
      return this.state.stickers.map(function(options) {
        var coordinates = $img.getScaledDimensions(options.height, options.width, a.TRAY_SIZE);
        return self.createElement(nodeType, {
          key : options.id
        }, self.createElement("div", {
          className : "_5r8h",
          "data-id" : options.id
        }, self.createElement(label, {
          animationTrigger : id,
          className : "_5r8i",
          frameCount : options.frameCount,
          frameRate : options.frameRate || 83,
          framesPerCol : options.framesPerCol,
          framesPerRow : options.framesPerRow,
          shown : this.props.shown,
          sourceHeight : coordinates.height,
          sourceURI : options.sourceURI,
          sourceWidth : coordinates.width,
          spriteURI : options.spriteURI,
          paddedSpriteURI : options.paddedSpriteURI,
          stickerID : options.id,
          style : {
            cursor : "pointer"
          }
        })));
      }.bind(this));
    },
    /**
     * @return {undefined}
     */
    _onScroll : function() {
      var i = this.refs.stickerScrollable;
      if (i) {
        var expectedHashCode = i.getArea().getScrollTop();
        this.props.onScroll(expectedHashCode);
      }
    },
    /**
     * @return {?}
     */
    render : function() {
      if (this.state.loading) {
        return self.createElement("div", {
          className : "_e0r"
        }, self.createElement(t, {
          size : "large"
        }));
      } else {
        if (this.state.stickers.length === 0) {
          /** @type {string} */
          var mt = (height - ypadding * 2 - footerHeight) / 2 + "px";
          return self.createElement("div", {
            className : "_5jdt",
            style : {
              marginTop : mt
            }
          }, self.createElement(type, {
            src : done("/images/messaging/stickers/icons/sad_face.png")
          }), self.createElement("p", null, "No Stickers to Show"));
        }
      }
      return self.createElement(attribute, {
        ref : "stickerScrollable",
        height : this.props.height || height,
        onScroll : proxy(this._onScroll, 200),
        width : w,
        fade : true
      }, self.createElement("div", {
        className : "_5r8k"
      }, self.createElement(elem, {
        cols : 4,
        fixed : true
      }, this.renderStickers())));
    }
  });
  module.exports = JsDiff;
}, null);
__d("StickersFlyoutTagSelector.react", ["BanzaiLogger", "Grid.react", "ScrollableArea.react", "Parent", "React", "Image.react", "StickerConfig", "StickerConstants", "StickersFlyoutStickerSelector.react", "StickerInterfaces", "StickerSearch", "StickerState", "StickerUtils", "Toggler", "XUIButton.react", "XUICloseButton.react", "XUITextInput.react", "cx", "emptyFunction", "fbt", "getObjectValues"], function(opt_attributes, matcherFunction, execResult, opt_keys, module, positionError, logger, value,
a, find, dom, n, dataAndEvents, ignoreMethodDoesntExist, o, outErr, gridStore, deepDataAndEvents, _, obj, tr, type, attribute, keepData, textAlt, oFunctionBody, cb) {
  var name = value.GridItem;
  /** @type {number} */
  var h = 320;
  /** @type {number} */
  var x2 = 278;
  /** @type {number} */
  var y = 44;
  var JsDiff = dom.createClass({
    displayName : "StickersFlyoutTagSelector",
    propTypes : {
      trigger : dom.PropTypes.string,
      stickerInterface : dom.PropTypes.oneOf(cb(outErr)),
      resetTrigger : dom.PropTypes.func,
      shown : dom.PropTypes.bool,
      onSelectSticker : dom.PropTypes.func
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        input : "",
        isScrolling : false,
        tagChosen : false,
        matchedStickers : []
      };
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        trigger : null,
        stickerInterface : outErr.MESSAGES,
        resetTrigger : textAlt,
        shown : false,
        onSelectSticker : textAlt
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      var events = find.byClass(this.getDOMNode(), "uiToggle");
      if (events) {
        this._togglerSub = obj.listen("show", events, function() {
          if (this.isMounted()) {
            this.focusInput();
          }
        }.bind(this));
      }
      this.focusInput();
      this.selectTrigger(this.props.trigger);
    },
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      if (this._togglerSub) {
        this._togglerSub.unsubscribe();
      }
    },
    /**
     * @param {Object} selectedElement
     * @return {undefined}
     */
    componentWillReceiveProps : function(selectedElement) {
      this.selectTrigger(selectedElement.trigger);
    },
    /**
     * @return {undefined}
     */
    focusInput : function() {
      if (this.refs.inputField.focusInput) {
        this.refs.inputField.focusInput();
      }
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    _setMatchedStickers : function(expectedHashCode) {
      this.setState({
        matchedStickers : expectedHashCode ? expectedHashCode : []
      });
    },
    /**
     * @param {number} event
     * @return {undefined}
     */
    _onEnter : function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!dataAndEvents.EnterToSendSticker) {
        return;
      }
      var last = this.state.matchedStickers;
      if (last && last.length === 1) {
        this.props.onSelectSticker(last[0].id, event);
        this.setState({
          matchedStickers : []
        });
      }
    },
    /**
     * @param {Event} evt
     * @return {undefined}
     */
    _inputChanged : function(evt) {
      this.setState({
        input : evt.target.value,
        tagChosen : false,
        isScrolling : false
      });
    },
    /**
     * @param {?} buf
     * @return {?}
     */
    _normalizeInput : function(buf) {
      return buf.trim().replace(/\s+/, " ").toLowerCase();
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    _handleResetButtonClick : function(expectedHashCode) {
      expectedHashCode.preventDefault();
      this.reset();
    },
    /**
     * @return {undefined}
     */
    reset : function() {
      this.setState(this.getInitialState());
    },
    /**
     * @return {?}
     */
    renderContentArea : function() {
      if (this.state.tagChosen || this._normalizeInput(this.state.input).length > 1) {
        return this.renderStickers();
      } else {
        return dataAndEvents.StickerSearchInRecent ? this.renderRecentStickers() : this.renderTags();
      }
    },
    /**
     * @return {?}
     */
    render : function() {
      return dom.createElement("div", {
        className : "_217a" + (this.state.isScrolling ? " " + "_1hg1" : "")
      }, dom.createElement("div", {
        className : "_5jdr"
      }, dom.createElement("span", {
        className : "_5jds"
      }), dom.createElement(attribute, {
        onEnter : this._onEnter,
        onChange : this._inputChanged,
        ref : "inputField",
        placeholder : "Search stickers",
        value : this.state.input
      }), dom.createElement(type, {
        size : "small",
        onClick : this._handleResetButtonClick,
        className : this.state.input.length === 0 ? "hidden_elem" : ""
      })), this.renderContentArea());
    },
    /**
     * @param {Object} tag
     * @return {undefined}
     */
    selectTag : function(tag) {
      logger.log("StickersLoggerConfig", {
        event : "select_tag",
        tagid : tag.id
      });
      this.setState({
        tagChosen : true,
        input : _.capitalizeWords(tag.name)
      });
      this.focusInput();
    },
    /**
     * @param {(Date|string)} data
     * @return {undefined}
     */
    selectTrigger : function(data) {
      if (data !== null) {
        var feed = gridStore.getTagByName(data);
        this.setState({
          tagChosen : true,
          input : _.capitalizeWords(feed.name)
        });
        this.props.resetTrigger();
      }
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    _onScroll : function(expectedHashCode) {
      this.setState({
        isScrolling : !!expectedHashCode
      });
    },
    /**
     * @return {?}
     */
    renderStickers : function() {
      var userInput = this._normalizeInput(this.state.input);
      return dom.createElement(o, {
        ref : "selector",
        height : h - y,
        userInput : userInput,
        onScroll : this._onScroll,
        stickerInterface : this.props.stickerInterface,
        tagChosen : this.state.tagChosen,
        shown : this.props.shown,
        onQueryResultsFound : this._setMatchedStickers
      });
    },
    /**
     * @return {?}
     */
    renderRecentStickers : function() {
      if (this._normalizeInput(this.state.input).length === 1) {
        return dom.createElement("div", null);
      }
      return dom.createElement(o, {
        ref : "selector",
        height : h - y,
        packID : ignoreMethodDoesntExist.MRU_STICKER_PACK,
        onScroll : this._onScroll,
        stickerInterface : this.props.stickerInterface,
        shown : this.props.shown
      });
    },
    /**
     * @return {?}
     */
    renderTags : function() {
      var MSG_VISUAL_EDITOR = deepDataAndEvents.getFeaturedTags().filter(function(dataAndEvents) {
        return dataAndEvents.sourceURI !== null;
      }).sort(function(a, b) {
        return a.order - b.order;
      }).map(function(item, index) {
        return dom.createElement(name, {
          key : index
        }, dom.createElement("div", {
          className : "_t5c" + (index < 2 ? " " + "_1b27" : "") + (index % 2 === 0 ? " " + "_t5d" : "") + (index % 2 !== 0 ? " " + "_t5e" : "")
        }, dom.createElement(tr, {
          image : dom.createElement(n, {
            src : item.sourceURI
          }),
          label : item.name,
          onClick : this.selectTag.bind(this, item),
          className : "_5jdu",
          style : {
            background : "#" + item.color_code
          },
          disabled : this._normalizeInput(this.state.input).length === 1
        })));
      }.bind(this));
      return dom.createElement(a, {
        height : h - y,
        width : x2 - 16,
        shadow : true,
        fade : true,
        className : "_5jei"
      }, dom.createElement(value, {
        spacing : "pas",
        cols : 2,
        fixed : true,
        ref : "grid"
      }, MSG_VISUAL_EDITOR));
    }
  });
  module.exports = JsDiff;
}, null);
__d("StickersFlyout.react", ["BanzaiLogger", "Event", "Keys", "MessagesEmoticons.react", "Parent", "ReactComponentWithPureRenderMixin", "React", "StickersFlyoutPackSelector.react", "StickersFlyoutStickerSelector.react", "StickerActions", "StickerConstants", "StickerConfig", "StickersFlyoutTagSelector.react", "StickerInterfaces", "StickerState", "SubscriptionsHandler", "Toggler", "XUISpinner.react", "arrayContains", "cx", "getObjectValues"], function(dataAndEvents, opt_attributes, matcherFunction,
execResult, module, opt_keys, logger, testPage, keys, tr, fire, keepData, dom, type, value, results, depMap, deepDataAndEvents, attribute, props, win, ignoreMethodDoesntExist, content, a, $sanitize, textAlt, forOwn) {
  var depId = depMap.SEARCH_PACK_ID;
  var JsDiff = dom.createClass({
    displayName : "StickersFlyout",
    mixins : [keepData],
    propTypes : {
      stickerInterface : dom.PropTypes.oneOf(forOwn(props)),
      onStickerSelect : dom.PropTypes.func.isRequired,
      onEmoticonSelect : dom.PropTypes.func,
      onShown : dom.PropTypes.func,
      onHidden : dom.PropTypes.func,
      onEscKeyDown : dom.PropTypes.func,
      onPackSelect : dom.PropTypes.func,
      packID : dom.PropTypes.string,
      shown : dom.PropTypes.bool,
      trigger : dom.PropTypes.string
    },
    /**
     * @return {?}
     */
    getDefaultProps : function() {
      return{
        stickerInterface : props.MESSAGES,
        packID : win.getTrayPackID(),
        shown : false,
        trigger : null
      };
    },
    /**
     * @return {?}
     */
    getInitialState : function() {
      return{
        dataReady : false,
        numNewPacks : 0,
        shown : false
      };
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      if (deepDataAndEvents.LoadStickerEarly && !this.state.dataReady) {
        this.loadTrayData();
      }
      this._toggle = fire.byClass(this.getDOMNode(), "uiToggle");
      this._subscriptions = new ignoreMethodDoesntExist;
      if (this._toggle) {
        this._subscriptions.addSubscriptions(content.listen("show", this._toggle, this._onShownWrapper), content.listen("hide", this._toggle, this._onHidden));
      } else {
        if (!deepDataAndEvents.LoadStickerEarly && (this.props.shown && !this.state.dataReady)) {
          this.loadTrayData();
        }
      }
      this._subscriptions.addSubscriptions(testPage.listen(this.getDOMNode(), "keydown", this._onKeyDown), win.addListener(win.PACKS_CHANGED, this.packsUpdated), win.addListener(win.NUM_NEW_PACKS_CHANGED, function(dataAndEvents) {
        this.setState({
          numNewPacks : dataAndEvents
        });
      }.bind(this)));
    },
    /**
     * @return {undefined}
     */
    _onShownWrapper : function() {
      if (this.props.onShown) {
        this.props.onShown(this._onShown);
      } else {
        this._onShown();
      }
    },
    /**
     * @return {undefined}
     */
    _onShown : function() {
      logger.log("StickersLoggerConfig", {
        event : "open_tray"
      });
      if (!deepDataAndEvents.LoadStickerEarly && !this.state.dataReady) {
        this.loadTrayData();
      }
      if (this.props.packID === depId) {
        if (this.refs.tagSelector) {
          this.refs.tagSelector.focusInput();
        }
      }
      this.refs.packSelector.onFlyoutShown();
      this.setState({
        shown : true
      });
    },
    /**
     * @return {undefined}
     */
    _onHidden : function() {
      this.resetTagSelector();
      if (this.props.onHidden) {
        this.props.onHidden();
      }
      this.setState({
        shown : false
      });
    },
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      this._subscriptions.release();
    },
    /**
     * @param {?} msg
     * @return {undefined}
     */
    componentWillReceiveProps : function(msg) {
      if (!this.state.dataReady && msg.shown) {
        this.loadTrayData();
      }
    },
    /**
     * @param {?} msg
     * @return {undefined}
     */
    componentDidUpdate : function(msg) {
      if (!msg.shown && this.props.shown) {
        this._onShown();
      } else {
        if (msg.shown && !this.props.shown) {
          this._onHidden();
        }
      }
    },
    /**
     * @param {?} event
     * @return {undefined}
     */
    _onKeyDown : function(event) {
      if (event.keyCode === keys.ESC && this.props.onEscKeyDown) {
        this.props.onEscKeyDown();
        event.kill();
      }
    },
    /**
     * @return {undefined}
     */
    resetTagSelector : function() {
      if (this.refs.tagSelector) {
        this.refs.tagSelector.reset();
      }
    },
    /**
     * @return {undefined}
     */
    loadTrayData : function() {
      win.onTrayDataReady(function() {
        var numNewPacks = win.getNumNewPacks();
        this.setState({
          dataReady : true,
          numNewPacks : numNewPacks
        });
        var expectedHashCode = win.getPacksInTray()[0].id;
        var innerHTML = this.props.packID;
        if (!innerHTML || !$sanitize(win.getPackIDsInTray(), innerHTML)) {
          results.selectPack(expectedHashCode, true);
          if (this.props.onPackSelect) {
            this.props.onPackSelect(expectedHashCode);
          }
        }
      }.bind(this));
    },
    /**
     * @return {?}
     */
    _isShown : function() {
      return this._toggle ? this.state.shown : this.props.shown;
    },
    /**
     * @return {?}
     */
    loadPack : function() {
      if (!this.state.dataReady) {
        return dom.createElement("div", {
          className : "_e0r"
        }, dom.createElement(a, {
          size : "large"
        }));
      }
      if (this.props.packID === depMap.EMOTICON_PACK_ID) {
        return dom.createElement("div", {
          className : "_5r8l",
          "data-id" : this.props.packID
        }, dom.createElement(tr, {
          onEmoticonSelect : this.props.onEmoticonSelect
        }));
      }
      if (this.props.packID === depId && deepDataAndEvents.WebStickerSearch) {
        return dom.createElement("div", {
          className : "_5r8l"
        }, dom.createElement(attribute, {
          ref : "tagSelector",
          className : "fbStickersFlyoutTagSelector",
          trigger : this.props.trigger,
          resetTrigger : function() {
            return this.setProps({
              trigger : null
            });
          }.bind(this),
          stickerInterface : this.props.stickerInterface,
          shown : this._isShown(),
          onSelectSticker : this.onSelectSticker
        }));
      }
      return dom.createElement("div", {
        className : "_5r8l",
        "data-id" : this.props.packID
      }, dom.createElement(value, {
        ref : "selector",
        packID : this.props.packID,
        stickerInterface : this.props.stickerInterface,
        shown : this._isShown()
      }));
    },
    /**
     * @return {undefined}
     */
    packsUpdated : function() {
      var value = win.getPackIDsInTray();
      if (!$sanitize(value, this.props.packID)) {
        results.selectPack(value[0]);
        return;
      }
      this.forceUpdate(null);
    },
    /**
     * @param {number} expectedHashCode
     * @param {number} value
     * @return {undefined}
     */
    onSelectSticker : function(expectedHashCode, value) {
      if (expectedHashCode) {
        win.updateRecentlyUsed(expectedHashCode);
        this.props.onStickerSelect(expectedHashCode, value);
        if (deepDataAndEvents.PromotePackFromSearch && this.props.packID === depMap.SEARCH_PACK_ID) {
          win.promotePackSentFromSearch(expectedHashCode);
        }
        win.clearShowStickerReplyNUX();
      }
    },
    /**
     * @param {number} expectedHashCode
     * @return {undefined}
     */
    selectedSticker : function(expectedHashCode) {
      var elem = fire.byClass(expectedHashCode.target, "_5r8h");
      if (elem) {
        var dataID = elem.getAttribute("data-id");
        this.onSelectSticker(dataID, expectedHashCode);
      }
    },
    /**
     * @return {?}
     */
    render : function() {
      var packs;
      if (this.props.stickerInterface == props.COMPOSER) {
        packs = win.getPacksInComposerTray();
      } else {
        if (this.props.stickerInterface == props.COMMENTS) {
          packs = win.getPacksInCommentsTray();
        } else {
          if (this.props.stickerInterface == props.MESSAGES) {
            packs = win.getPacksInTray();
          }
        }
      }
      return dom.createElement("div", {
        className : "_5r8f"
      }, dom.createElement("div", {
        className : "_5r8e"
      }, dom.createElement(type, {
        ref : "packSelector",
        numNewPacks : this.state.numNewPacks,
        onPackClick : this.props.onPackSelect,
        selectedPackID : this.props.packID,
        packs : packs,
        stickerInterface : this.props.stickerInterface,
        resetTagSelectorFunc : this.resetTagSelector
      })), dom.createElement("div", {
        className : "_5r8m",
        onClick : this.selectedSticker
      }, this.loadPack()));
    }
  });
  module.exports = JsDiff;
}, null);
