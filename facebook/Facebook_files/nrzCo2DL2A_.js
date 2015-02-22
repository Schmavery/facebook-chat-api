/*!CK:3520455836!*/
/*1424458920,*/
if (self.CavalryLogger) {
  CavalryLogger.start_js(["IKJ5j"]);
}

__d("BlackbirdUpsellConstants", [], function(a, b, c, d, e, f) {
  e.exports = {
    ACTION_EDUCATE: "educate",
    ACTION_UPSELL: "upsell",
    CLICK_TYPE_DISMISS_PROMO: "dismiss_promo",
    CLICK_TYPE_ENABLE_CHAT: "enable_chat",
    CLICK_TYPE_OPEN_SETTINGS: "open_settings"
  };
}, null);
__d("MessagesViewerSetID", [], function(a, b, c, d, e, f) {
  e.exports = {
    MESSAGES: "messages",
    MESSAGES_VIEW_ALL_IN_THREAD: "messages:view_all_in_thread"
  };
}, null);
__d("MessageTranscriptWaitHandleState", [], function(a, b, c, d, e, f) {
  e.exports = {
    BUSY: "BUSY",
    READY: "READY",
    UNAVAILABLE: "UNAVAILABLE"
  };
}, null);
__d("StickerAssetType", [], function(a, b, c, d, e, f) {
  e.exports = {
    IMAGE: "BestEffortImage",
    SPRITE: "SpriteImage",
    PADDED_SPRITE: "PaddedSpriteImage"
  };
}, null);
__d("StoryAttachmentStyle", [], function(a, b, c, d, e, f) {
  e.exports = {
    FALLBACK: "fallback",
    SHARE: "share",
    OG_COMPOSER_SIMPLE: "og_composer_simple",
    SPORTS_MATCHUP: "sports_matchup",
    SHARE_LARGE_IMAGE: "share_large_image",
    PHOTO: "photo",
    COVER_PHOTO: "cover_photo",
    ALBUM: "album",
    NEW_ALBUM: "new_album",
    COUPON: "coupon",
    QUESTION: "question",
    ANSWER: "answer",
    OPTION: "option",
    GALLERY: "gallery",
    STREAM_PUBLISH: "stream_publish",
    MUSIC_AGGREGATION: "music_aggregation",
    ITEM_LIST: "list",
    HIGH_SCORE: "high_score",
    SCORE_LEADERBOARD: "score_leaderboard",
    FRIEND_LIST: "friend_list",
    CHECKIN: "checkin",
    POPULAR_OBJECTS: "popular_objects",
    AVATAR_LIST: "avatar_list",
    AVATAR: "avatar",
    AVATAR_WITH_VIDEO: "avatar_with_video",
    EVENT: "event",
    EXPERIENCE: "experience",
    LIFE_EVENT: "life_event",
    TRAVEL_SLIDESHOW_LIFE_EVENT: "travel_slideshow_life_event",
    GIFT: "gift",
    IMAGE_SHARE: "image_share",
    ANIMATED_IMAGE_SHARE: "animated_image_share",
    NOTE: "note",
    TOPIC: "topic",
    FILE_UPLOAD: "file_upload",
    NOTIFICATION_TARGET: "notification_target",
    UNAVAILABLE: "unavailable",
    PAGE_RECOMMENDATION: "page_recommendation",
    VIDEO: "video",
    VIDEO_INLINE: "video_inline",
    VIDEO_AUTOPLAY: "video_autoplay",
    VIDEO_SHARE: "video_share",
    VIDEO_SHARE_HIGHLIGHTED: "video_share_highlighted",
    VIDEO_SHARE_YOUTUBE: "video_share_youtube",
    MAP: "map",
    PRODUCT: "product",
    EXTERNAL_PRODUCT: "external_product",
    FITNESS_COURSE: "fitness_course",
    APPLICATION: "application",
    STICKER: "sticker",
    EXTERNAL_OG_PRODUCT: "external_og_product",
    TRAVEL_LOG: "travel_log",
    MULTI_SHARE: "multi_share",
    YEAR_IN_REVIEW: "year_in_review",
    AVATAR_LARGE_COVER: "avatar_large_cover",
    BROADCAST_REQUEST: "broadcast_request",
    COMMERCE_PRODUCT_ITEM: "commerce_product_item",
    THIRD_PARTY_PHOTO: "third_party_photo",
    PROMPT: "prompt",
    BIRTHDAY: "birthday",
    DONATIONS_CAMPAIGN: "donations_campaign",
    DONATE_PROMPT: "donate_prompt",
    DISCUSSION_CONVERSATION: "discussion_conversation",
    DISCUSSION_COMMENT: "discussion_comment",
    GROUP_SELL_PRODUCT_ITEM: "group_sell_product_item",
    GROUP_SELL_PRODUCT_ITEM_MARK_AS_SOLD: "group_sell_mark_as_sold",
    GAMETIME: "gametime",
    GROUP_REPORTED_POST_QUEUE: "group_reported_post_queue",
    GROUP_PENDING_POST_QUEUE: "group_pending_post_queue",
    GROUP_JOIN_REQUEST_QUEUE: "group_join_request_queue",
    GREETING_CARD: "greeting_card",
    LEAD_GEN: "lead_gen",
    ATTACHED_STORY: "attached_story",
    SOUVENIR: "souvenir",
    ORION: "orion"
  };
}, null);
__d("BlackbirdUpsell", ["Event", "Arbiter", "AsyncRequest", "LegacyContextualDialog", "DOM", "LayerDestroyOnHide", "LayerHideOnTransition", "PresencePrivacy", "copyProperties", "BlackbirdUpsellConfig", "BlackbirdUpsellConstants", "BlackbirdUpsellTemplates"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  var s = '/ajax/chat/blackbird/update_clicks.php',
    t = '/ajax/chat/blackbird/update_impressions.php',
    u = '/ajax/chat/blackbird/dismiss.php',
    v = 235,
    w = null,
    x = null,
    y = false,
    z = false;

  function aa() {}
  o(aa, {
    shouldShow: function() {
      if (this._dialogDismissed) return false;
      if (this.isEducation()) {
        return !p.EducationDismissed && p.EducationImpressions < p.EducationImpressionLimit;
      } else return !!p.UpsellGK && !p.UpsellDismissed && p.UpsellImpressions < p.UpsellImpressionLimit && p.FriendCount >= p.UpsellMinFriendCount;
    },
    isEducation: function() {
      return p.TimeOffline <= p.EducationTimeOfflineThresdhold;
    },
    getOfflineContent: function() {
      if (this.isEducation()) {
        return this._getEducationContent();
      } else return this._getUpsellContent();
    },
    _getEducationContent: function() {
      ga();
      var ka = r[':fb:chat:blackbird:offline-educate'].build(),
        la = ka.getNode('chatSettingsButton');
      g.listen(la, 'click', function() {
        h.inform('chat/advanced-settings-dialog-opened');
        ja(q.CLICK_TYPE_OPEN_SETTINGS);
        da();
      });
      return ka.getRoot();
    },
    _getUpsellContent: function() {
      fa();
      var ka = r[':fb:chat:blackbird:upsell'].build(),
        la = ka.getNode('chatSettingsButton');
      g.listen(la, 'click', function() {
        h.inform('chat/advanced-settings-dialog-opened');
        ia(q.CLICK_TYPE_OPEN_SETTINGS);
        ca();
      });
      var ma = ka.getNode('enableChatButton');
      g.listen(ma, 'click', function() {
        ia(q.CLICK_TYPE_ENABLE_CHAT);
        ca();
      });
      return ka.getRoot();
    },
    getBlackbirdContent: function(ka) {
      ga();
      switch (ka) {
        case n.ONLINE:
          return r[':fb:chat:blackbird:most-friends-educate'].build().getRoot();
        case n.OFFLINE:
          return r[':fb:chat:blackbird:some-friends-educate'].build().getRoot();
      }
    },
    showOfflineDialog: function(ka) {
      this.showDialog(ka, this.getOfflineContent.bind(this));
    },
    showBlackbirdDialog: function(ka, la) {
      this.showDialog(ka, this.getBlackbirdContent.bind(null, la));
    },
    showDialog: function(ka, la) {
      !w && this._constructDialog();
      k.setContent(x, la());
      w.setContext(ka);
      w.show();
    },
    hide: function() {
      if (w && w.isShown()) w.hide();
    },
    dismiss: function() {
      this.hide();
      if (this.isEducation()) {
        da();
      } else ca();
    },
    registerDismissClick: function() {
      if (this.isEducation()) {
        ja(q.CLICK_TYPE_DISMISS_PROMO);
      } else ia(q.CLICK_TYPE_DISMISS_PROMO);
    },
    isVisible: function() {
      return z && !y;
    },
    _constructDialog: function() {
      var ka = r[':fb:chat:blackbird:dialog-frame'].build();
      x = ka.getNode('dialogContent');
      w = new j();
      w.init(ka.getRoot());
      w.setPosition('above').setWidth(v).setFixed(true).disableBehavior(l).disableBehavior(m);
      g.listen(ka.getNode('dialogCloseButton'), 'click', this.dismiss.bind(this));
      g.listen(ka.getNode('dialogCloseButton'), 'click', this.registerDismissClick.bind(this));
    }
  });

  function ba(ka, la) {
    if (!y && z) {
      y = true;
      n.inform('privacy-user-presence-changed');
      var ma = new i(u);
      ma.setData({
        source: ka,
        impressions: la,
        time_offline: p.TimeOffline
      });
      ma.setErrorHandler(function() {
        y = false;
      });
      ma.send();
    }
  }

  function ca() {
    ba(q.ACTION_UPSELL, p.UpsellImpressions);
  }

  function da() {
    ba(q.ACTION_EDUCATE, p.EducationImpressions);
  }

  function ea(ka, la) {
    if (!z) {
      z = true;
      var ma = new i(t);
      ma.setData({
        action: ka,
        impressions: la,
        time_offline: p.TimeOffline
      });
      ma.setErrorHandler(function() {
        z = false;
      });
      ma.send();
    }
  }

  function fa() {
    ea(q.ACTION_UPSELL, p.UpsellImpressions);
  }

  function ga() {
    ea(q.ACTION_EDUCATE, p.EducationImpressions);
  }

  function ha(ka, la, ma, na) {
    var oa = new i(s);
    oa.setData({
      action: ka,
      impressions: ma,
      source: la,
      time_offline: na
    });
    oa.send();
  }

  function ia(ka) {
    ha(ka, q.ACTION_UPSELL, p.UpsellImpressions, p.TimeOffline);
  }

  function ja(ka) {
    ha(ka, q.ACTION_EDUCATE, p.EducateImpressions, p.TimeOffline);
  }
  h.subscribe('chat/advanced-settings-dialog-opened', aa.dismiss.bind(aa));
  h.subscribe('chat-visibility/go-online', aa.dismiss.bind(aa));
  h.subscribe('chat-visibility/go-offline', aa.dismiss.bind(aa));
  e.exports = aa;
}, null);
__d("Chat", ["Arbiter"], function(a, b, c, d, e, f, g) {
  var h = {
    buddyListNub: 'buddylist-nub/initialized',
    sidebar: 'sidebar/initialized'
  };

  function i(k, l) {
    g.subscribe(h[k], function(event, m) {
      l(m);
    });
  }
  var j = {
    openBuddyList: function() {
      i('buddyListNub', function(k) {
        k.show();
        i('sidebar', function(l) {
          l.enable();
        });
      });
    },
    closeBuddyList: function() {
      i('buddyListNub', function(k) {
        k.hide();
      });
    },
    toggleSidebar: function() {
      i('sidebar', function(k) {
        k.toggle();
      });
    }
  };
  e.exports = j;
}, null);
__d("ChatOptions", ["Arbiter", "ChannelConstants", "JSLogger", "PresenceUtil", "copyProperties", "ChatOptionsInitialData"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = i.create('chat_options'),
    m = {};
  (function() {
    var o = b('ChatOptionsInitialData');
    for (var p in o) {
      var q = o[p];
      m[p] = !!q;
    }
  })();
  var n = k(new g(), {
    getSetting: function(o) {
      return m[o];
    },
    setSetting: function(o, p, q) {
      if (this.getSetting(o) == p) return;
      if (q) {
        q = 'from_' + q;
        l.log(q, {
          name: o,
          new_value: p,
          old_value: this.getSetting(o)
        });
      }
      m[o] = !!p;
      g.inform('chat/option-changed', {
        name: o,
        value: p
      });
    }
  });
  g.subscribe(h.getArbiterType('setting'), function(o, p) {
    var q = p.obj;
    if (q.window_id === j.getSessionID()) return;
    n.setSetting(q.setting, !!q.value, 'channel');
  });
  g.subscribe(i.DUMP_EVENT, function(o, p) {
    p.chat_options = m;
  });
  e.exports = n;
}, null);
__d("ChatQuietLinks", ["Event", "DOM", "UserAgent_DEPRECATED", "DataStore", "Parent"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = {},
    m = {
      silenceLinks: function(q) {
        n(q, this.removeEmptyHrefs.bind(this));
      },
      nukeLinks: function(q) {
        n(q, this.removeAllHrefs.bind(this));
      },
      removeEmptyHrefs: function(q) {
        o(q, function(r) {
          return !r || r === '#';
        });
      },
      removeAllHrefs: function(q) {
        o(q);
      }
    };

  function n(q, r) {
    var s = !!i.chrome(),
      t = !!i.chrome() || i.ie() >= 9 || i.firefox() >= 4;
    if (l[h.getID(q)]) return;
    l[h.getID(q)] = true;
    if (!t) return;
    if (!s) {
      r && r(q);
      return;
    }
    g.listen(q, 'mouseover', function u(v) {
      var w = k.byTag(v.getTarget(), 'a');
      if (w) {
        var x = w.getAttribute('href');
        if (p(x)) {
          j.set(w, 'stashedHref', w.getAttribute('href'));
          w.removeAttribute('href');
        }
      }
    });
    g.listen(q, 'mouseout', function u(v) {
      var w = k.byTag(v.getTarget(), 'a'),
        x = w && j.remove(w, 'stashedHref');
      if (p(x)) w.setAttribute('href', x);
    });
    g.listen(q, 'mousedown', function(u) {
      if (!u.isDefaultRequested()) return true;
      var v = k.byTag(u.getTarget(), 'a'),
        w = v && j.get(v, 'stashedHref');
      if (p(w)) v.setAttribute('href', w);
    });
  }

  function o(q, r) {
    var s = h.scry(q, 'a');
    if (r) s = s.filter(function(t) {
      return r(t.getAttribute('href'));
    });
    s.forEach(function(t) {
      t.removeAttribute('href');
      t.setAttribute('tabindex', 0);
    });
  }

  function p(q) {
    return q && q !== '#';
  }
  e.exports = m;
}, null);
__d("OrderedFriendsList", ["AvailableListConstants", "PresenceStatus", "SearchableEntry", "ShortProfiles", "WorkModeConfig", "createArrayFromMixed", "isValidUniqueID", "InitialChatFriendsList"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = [],
    o = [],
    p = {},
    q = [],
    r = {},
    s = [],
    t = {
      contains: function(u) {
        return u in p;
      },
      getList: function() {
        if (k.is_work_user) return l(n);
        t.reRank();
        var u = l(n);
        u = u.filter(function(v) {
          var w = j.getNowUnsafe(v);
          return !w || w.type == "friend";
        });
        return u;
      },
      getSearchableEntries: function(u, v) {
        var w = t.getList();
        j.getMulti(w.slice(0, u), function(x) {
          var y = [];
          for (var z in x) y.push(t.normalizeProfileEntry(x[z]));
          var aa = t.getGroups().map(t.normalizeThreadEntry);
          v(y.concat(aa).filter(function(ba) {
            return !!ba;
          }).sort(function(ba, ca) {
            return ba.order - ca.order;
          }));
        });
      },
      normalizeProfileEntry: function(u) {
        var v = u.searchTokens || [];
        return new i({
          uniqueID: u.id,
          keywordString: v.join(' '),
          order: t.getActiveRank(u.id),
          photo: u.thumbSrc,
          title: u.name,
          type: u.type,
          uri: u.uri
        });
      },
      normalizeThreadEntry: function(u, v) {
        var w = u.mercury_thread,
          x = u.participants_to_render,
          y = u.text,
          z = null;
        if (!y) y = w.name;
        var aa = x.map(function(ca) {
          return ca.name;
        }).join(', ');
        if (!y) {
          y = aa;
        } else z = aa;
        var ba = u.uid;
        if (!y || !m(ba)) return null;
        return new i({
          uniqueID: ba,
          order: v,
          photo: w.image_src,
          title: y,
          subtitle: z,
          type: 'thread',
          auxiliaryData: {
            participantsToRender: x,
            thread: w
          }
        });
      },
      getRank: function(u) {
        return u in p ? p[u] : n.length;
      },
      getActiveList: function() {
        if (q.length > 0) return q;
        return t.getList();
      },
      getActiveRank: function(u) {
        return u in r ? r[u] : t.getRank(u);
      },
      reRank: function() {
        n = [];
        var u = 0;
        s.forEach(function(v) {
          var w = v.slice(0, -2),
            x = v.slice(-1);
          if (h.get(w) == x) {
            n[u] = w;
            p[w] = u++;
          }
        });
      },
      rankActive: function() {
        var u = 0;
        s.forEach(function(v) {
          var w = v.slice(0, -2),
            x = v.slice(-1);
          if (x == g.ACTIVE) {
            q[u] = w;
            r[w] = u++;
          }
        });
      },
      getGroups: function() {
        return o;
      }
    };
  (function() {
    var u = b('InitialChatFriendsList');
    n = u.list.length ? u.list : [];
    o = u.groups || [];
    if (!k.is_work_user) {
      s = n.slice();
      t.rankActive();
      t.reRank();
    } else n.forEach(function(v, w) {
      p[v] = w;
    });
  })();
  e.exports = a.OrderedFriendsList || t;
}, null);
__d("ChatSortUsers", ["AvailableListConstants", "OrderedFriendsList", "PresencePrivacy", "PresenceStatus", "ShortProfiles", "TokenizeUtil"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  function m(q, r) {
    var s = i.allows(q),
      t = i.allows(r);
    if (s !== t) return s ? -1 : 1;
    return 0;
  }
  var n = {};

  function o(q) {
    if (n[q]) return n[q];
    var r = (k.getNowUnsafe(q) || {}).name;
    if (r) return n[q] = l.flatten(r);
    return '~';
  }
  var p = {
    sortAlphabetical: function(q, r) {
      var s = o(q),
        t = o(r);
      if (s !== t) return s < t ? -1 : 1;
      return 0;
    },
    sortMobile: function(q, r) {
      var s = j.get(q) === g.MOBILE,
        t = j.get(r) === g.MOBILE;
      if (s !== t) return t ? -1 : 1;
      return p.sortAlphabetical(q, r);
    },
    sortCoefficient: function(q, r) {
      var s = h.getRank(q),
        t = h.getRank(r);
      if (s !== t) return s - t;
      return p.sortAlphabetical(q, r);
    },
    sort: function(q, r) {
      var s = m(q, r);
      if (s !== 0) return s;
      return p.sortCoefficient(q, r);
    }
  };
  e.exports = p;
}, null);
__d("TypingDetector", ["ArbiterMixin", "Event", "Input", "Run", "TypingStates", "copyProperties", "createObjectFrom", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  function o(p, q) {
    this._input = p;
    this._ignoreKeys = {};
    this._getValueFn = q;
  }
  l(o.prototype, g, {
    _timeout: 7000,
    _currentState: k.INACTIVE,
    init: function() {
      this.init = n;
      this.reset();
      this._subscription = h.listen(this._input, 'keyup', this._update.bind(this));
      j.onUnload(this._onunload.bind(this));
    },
    reset: function() {
      clearTimeout(this._checkTimer);
      this._checkTimer = null;
      this._lastKeystrokeAt = null;
      this._currentState = k.INACTIVE;
    },
    setIgnoreKeys: function(p) {
      this._ignoreKeys = m(p);
    },
    destroy: function() {
      this._subscription.remove();
    },
    _onunload: function() {
      if (this._currentState == k.TYPING) this._transition(k.QUITTING);
    },
    _update: function(event) {
      var p = h.getKeyCode(event),
        q = this._currentState;
      if (!this._ignoreKeys[p]) {
        var r = this._getValueFn ? this._getValueFn() : i.getValue(this._input);
        if (r.trim().length === 0) {
          if (q == k.TYPING) this._transition(k.INACTIVE);
        } else if (q == k.TYPING) {
          this._recordKeystroke();
        } else if (q == k.INACTIVE) {
          this._transition(k.TYPING);
          this._recordKeystroke();
        }
      }
    },
    _transition: function(p) {
      this.reset();
      this._currentState = p;
      this.inform('change', p);
    },
    _recordKeystroke: function() {
      this._lastKeystrokeTime = Date.now();
      if (!this._checkTimer) this._checkTimer = setTimeout(this._checkTyping.bind(this), this._timeout);
    },
    _checkTyping: function() {
      var p = this._lastKeystrokeTime + this._timeout,
        q = Date.now();
      if (q > p) {
        this._transition(k.INACTIVE);
      } else {
        clearTimeout(this._checkTimer);
        this._checkTimer = setTimeout(this._checkTyping.bind(this), p - q + 10);
      }
    }
  });
  e.exports = o;
}, null);
__d("TypingDetectorController", ["AsyncRequest", "AvailableList", "AvailableListConstants", "ChannelConnection", "ChatVisibility", "Keys", "PresencePrivacy", "ShortProfiles", "TypingDetector", "TypingStates", "copyProperties", "emptyFunction", "setTimeoutAcrossTransitions", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
  function u(v, w, x, y, z, aa) {
    "use strict";
    this.userID = v;
    this.input = w;
    this.source = x;
    this.threadID = z;
    this.remoteState = p.INACTIVE;
    this.notifyTimer = null;
    y = y || {};
    this.notifyDelay = y.notifyDelay || this.notifyDelay;
    this._typingDetector = new o(w, aa);
    this._typingDetector.init(y);
    this._typingDetector.subscribe('change', this._stateChange.bind(this));
  }
  u.prototype.setUserAndThread = function(v, w) {
    "use strict";
    if (this.userID !== v || this.threadID !== w) {
      this.resetState();
      this.userID = v;
      this.threadID = w;
    }
  };
  u.prototype.setIgnoreEnter = function(v) {
    "use strict";
    var w = v ? [l.RETURN] : [];
    this._typingDetector.setIgnoreKeys(w);
  };
  u.prototype.resetState = function() {
    "use strict";
    this._notifyState(p.INACTIVE);
    this.remoteState = p.INACTIVE;
    this._typingDetector.reset();
    clearTimeout(this.notifyTimer);
    this.notifyTimer = null;
  };
  u.prototype.destroy = function() {
    "use strict";
    this.resetState();
    this._typingDetector.destroy();
  };
  u.prototype._stateChange = function(v, w) {
    "use strict";
    if (w != p.QUITTING) {
      clearTimeout(this.notifyTimer);
      this.notifyTimer = s(t(this._notifyState, this, w), this.notifyDelay);
    } else this._notifyState(w, true);
  };
  u.prototype._notifyState = function(v, w) {
    "use strict";
    if ((!this.userID && !this.threadID) || !k.isOnline() || v === this.remoteState || j.disconnected()) return;
    var x = this.userID;
    if (x) {
      n.get(x, function(y) {
        if (y && y.type == 'friend' && m.allows(x)) this._sendRequest(v, x, w);
      }.bind(this));
    } else this._sendRequest(v, x, w);
  };
  u.prototype._sendRequest = function(v, w, x) {
    "use strict";
    this.remoteState = v;
    var y = {
      typ: v,
      to: w,
      source: this.source,
      thread: this.threadID
    };
    new g().setHandler(this._onTypResponse.bind(this, w)).setErrorHandler(r).setData(y).setURI('/ajax/messaging/typ.php').setAllowCrossPageTransition(true).setOption('asynchronous', !x).send();
  };
  u.prototype._onTypResponse = function(v, w) {
    "use strict";
    var x = w.getPayload() || {};
    if (x.offline) h.set(v, i.OFFLINE, 'typing_response');
  };
  q(u.prototype, {
    notifyDelay: 1000
  });
  e.exports = u;
}, null);
__d("ChatDispatcher", ["Dispatcher"], function(a, b, c, d, e, f, g) {
  'use strict';
  e.exports = new g();
}, null);
__d("ChatTabActions", ["ChatDispatcher", "keyMirror"], function(a, b, c, d, e, f, g, h) {
  'use strict';
  var i = h({
      CLOSE_TAB: null,
      CLOSE_ALL_TABS: null,
      CLOSE_FRAGILE_TABS: null,
      LOWER_TAB: null,
      PERSIST_LOCAL_STATE: null,
      PROMOTE_TAB: null,
      RAISE_TAB: null
    }),
    j = {
      Types: i,
      closeTab: function(k, l) {
        g.dispatch({
          actionType: i.CLOSE_TAB,
          reason: l,
          threadID: k
        });
      },
      closeAllTabs: function() {
        g.dispatch({
          actionType: i.CLOSE_ALL_TABS
        });
      },
      closeFragileTabs: function() {
        g.dispatch({
          actionType: i.CLOSE_FRAGILE_TABS
        });
      },
      lowerTab: function(k) {
        g.dispatch({
          actionType: i.LOWER_TAB,
          threadID: k
        });
      },
      persistLocalState: function() {
        g.dispatch({
          actionType: i.PERSIST_LOCAL_STATE
        });
      },
      promoteTab: function(k) {
        g.dispatch({
          actionType: i.PROMOTE_TAB,
          threadID: k
        });
      },
      raiseTab: function(k, l, m) {
        g.dispatch({
          actionType: i.RAISE_TAB,
          signatureID: m,
          threadID: k,
          userAction: l
        });
      }
    };
  e.exports = j;
}, null);
__d("ChatSidebarComposeLink.react", ["ChatOpenTab", "React", "TooltipLink.react", "URI", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = h.createClass({
    displayName: "ChatSidebarComposeLink",
    propTypes: {
      className: h.PropTypes.string.isRequired
    },
    componentDidMount: function() {
      g.listenOpenEmptyTab(this.getDOMNode(), 'sidebar');
    },
    render: function() {
      var m = "New Message";
      return (h.createElement(i, {
        ajaxify: new j('/ajax/messaging/composer.php'),
        className: this.props.className,
        tooltip: m,
        rel: "dialog"
      }));
    }
  });
  e.exports = l;
}, null);
__d("ChatSidebarConstants", [], function(a, b, c, d, e, f) {
  var g = {
    LITESTAND_CLASSIC_SIZE: 32,
    IMAGE_SIZE: 28
  };
  Object.assign(g, {
    getImageSize: function(h) {
      if (h === false) return g.IMAGE_SIZE;
      return g.LITESTAND_CLASSIC_SIZE;
    },
    getItemHeight: function(h) {
      if (h === false) return g.IMAGE_SIZE + 4;
      return g.LITESTAND_CLASSIC_SIZE + 4;
    }
  });
  e.exports = g;
}, null);
__d("ChatBehavior", ["Arbiter", "AvailableList", "AvailableListConstants", "copyProperties", "MercuryConstants"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = b('MercuryConstants').ChatNotificationConstants,
    l = false,
    m = h.getWebChatNotification(),
    n = l,
    o = true,
    p = j(new g(), {
      ON_CHANGED: 'changed',
      notifiesUserMessages: function() {
        return m !== k.NO_USER_MESSAGE_NOTIFICATION;
      },
      ignoresRemoteTabRaise: function() {
        return n;
      },
      showsTabUnreadUI: function() {
        return o;
      }
    });

  function q() {
    p.inform(p.ON_CHANGED);
  }
  h.subscribe(i.ON_CHAT_NOTIFICATION_CHANGED, function() {
    var r = m,
      s = h.getWebChatNotification();
    m = s;
    if (r != s) q();
  });
  g.subscribe('chat/set_does_page_occlude_tabs', function(r, s) {
    n = !!s;
    q();
  });
  g.subscribe('chat/set_show_tab_unread_ui', function(r, s) {
    o = !!s;
    q();
  });
  e.exports = p;
}, null);
__d("ChatSidebarSheet", ["ArbiterMixin", "BlackbirdUpsell", "ChannelConnection", "ChannelConstants", "ChatBehavior", "ChatConfig", "ChatVisibility", "CSS", "DOM", "Event", "JSLogger", "PresencePrivacy", "copyProperties", "fbt", "mixin", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
  var w = q.create('sidebar_sheet');

  function x(da) {
    switch (da) {
      case j.HINT_AUTH:
        return "Your session has timed out. Please log in.";
      case j.HINT_CONN:
        return t._("Facebook {Chat} is currently unavailable.", [t.param("Chat", "Chat")]);
      case j.HINT_MAINT:
        return t._("Facebook {Chat} is currently down for maintenance.", [t.param("Chat", "Chat")]);
      default:
        return t._("Facebook {Chat} is currently unavailable.", [t.param("Chat", "Chat")]);
    }
  }

  function y(da) {
    var ea;
    if (da === null || false === navigator.onLine) {
      ea = "Unable to connect to chat. Check your Internet connection.";
    } else if (da > l.get('warning_countdown_threshold_msec')) {
      var fa = o.create('a', {
        href: '#',
        className: 'fbChatReconnectLink'
      }, "Try again");
      ea = t._("Unable to connect to chat. {try-again-link}", [t.param("try-again-link", fa)]);
    } else if (da > 1000) {
      ea = t._("Unable to connect to chat. Reconnecting in {seconds}...", [t.param("seconds", Math.floor(da / 1000))]);
    } else ea = "Unable to connect to chat. Reconnecting...";
    return ea;
  }
  var z = u(g);
  for (var aa in z)
    if (z.hasOwnProperty(aa)) ca[aa] = z[aa];
  var ba = z === null ? null : z.prototype;
  ca.prototype = Object.create(ba);
  ca.prototype.constructor = ca;
  ca.__superConstructor__ = z;

  function ca(da) {
    "use strict";
    this._root = da;
    this._message = o.find(da, 'div.fbChatSidebarMessage div.message');
    i.subscribe([i.CONNECTED, i.SHUTDOWN, i.RECONNECTING], this._handleConnectionChange.bind(this));
    i.subscribe([i.MUTE_WARNING, i.UNMUTE_WARNING], this._render.bind(this));
    r.subscribe('privacy-user-presence-changed', this._render.bind(this));
    k.subscribe(k.ON_CHANGED, this._render.bind(this));
    this._render();
  }
  ca.prototype._handleConnectionChange = function(da, ea) {
    "use strict";
    this._channelStatus = da;
    this._channelData = ea;
    this._render();
  };
  ca.prototype._renderChannelDisconnect = function() {
    "use strict";
    if (this._channelStatus === i.SHUTDOWN) {
      return o.setContent(this._message, x(this._channelData));
    } else if (this._channelStatus === i.RECONNECTING) {
      var da = this._channelData;
      o.setContent(this._message, y(da));
      if (da > 1000) {
        if (da > l.get('warning_countdown_threshold_msec')) this._warningMsgEventListener = p.listen(this._message, 'click', function(event) {
          if (n.hasClass(event.getTarget(), 'fbChatReconnectLink')) {
            i.reconnect();
            return false;
          }
        });
        this._showWarningTimeout = v(this._handleConnectionChange.bind(this, i.RECONNECTING, da - 1000), 1000);
      }
    }
  };
  ca.prototype._renderOffline = function() {
    "use strict";
    var da = 'fbChatGoOnlineLink',
      ea = "Turn on chat",
      fa = o.create('a', {
        href: '#',
        className: da
      }, ea),
      ga = t._("{=Go online} to see who's available.", [t.param("=Go online", fa)]);
    o.setContent(this._message, ga);
    this._goOnlineEventListener = p.listen(this._message, 'click', function(event) {
      if (n.hasClass(event.getTarget(), da)) {
        w.log('sidebar_go_online');
        m.goOnline();
        return false;
      }
    });
  };
  ca.prototype._renderBlackbirdUpsell = function() {
    "use strict";
    o.setContent(this._message, h.getOfflineContent());
  };
  ca.prototype._renderBlackbird = function(da) {
    "use strict";
    o.setContent(this._message, h.getBlackbirdContent(da));
  };
  ca.prototype._clear = function() {
    "use strict";
    if (this._showWarningTimeout) {
      clearTimeout(this._showWarningTimeout);
      this._showWarningTimeout = null;
    }
    if (this._warningMsgEventListener) {
      this._warningMsgEventListener.remove();
      this._warningMsgEventListener = null;
    }
    if (this._goOnlineEventListener) {
      this._goOnlineEventListener.remove();
      this._goOnlineEventListener = null;
    }
    n.removeClass(this._root, 'upsell');
    n.removeClass(this._root, 'offline');
    n.removeClass(this._root, 'blackbird');
    n.removeClass(this._root, 'error');
    n.removeClass(this._root, 'notice');
    o.empty(this._message);
  };
  ca.prototype._render = function() {
    "use strict";
    this._clear();
    if (h.shouldShow()) {
      if (m.hasBlackbirdEnabled()) {
        var da = m.isOnline() ? 'blackbird' : 'upsell';
        n.addClass(this._root, da);
        this._renderBlackbird(r.getVisibility());
      } else if (!m.isOnline()) {
        n.addClass(this._root, 'upsell');
        this._renderBlackbirdUpsell();
      }
    } else if (!m.isOnline()) {
      n.addClass(this._root, 'offline');
      this._renderOffline();
    } else if (i.disconnected()) {
      n.addClass(this._root, 'error');
      this._renderChannelDisconnect();
    } else if (!k.notifiesUserMessages()) {
      n.addClass(this._root, 'notice');
      var ea = "Alerts are off while you use another client to chat.";
      o.setContent(this._message, ea);
    }
    this.inform('updated');
  };
  s(ca.prototype, {
    _channelStatus: null,
    _channelData: null,
    _showWarningTimeout: null,
    _warningMsgEventListener: null,
    _goOnlineEventListener: null
  });
  e.exports = ca;
}, null);
__d("SidebarFitWindowHeight", ["Arbiter", "ArbiterMixin", "Event", "Style", "SubscriptionsHandler", "TinyViewport", "Vector", "mixin", "queryThenMutateDOM"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = n(h);
  for (var q in p)
    if (p.hasOwnProperty(q)) s[q] = p[q];
  var r = p === null ? null : p.prototype;
  s.prototype = Object.create(r);
  s.prototype.constructor = s;
  s.__superConstructor__ = p;

  function s(t) {
    "use strict";
    this.$SidebarFitWindowHeight0 = t;
    this.onViewportUpdate();
    l.subscribe('change', this.onViewportUpdate.bind(this));
  }
  s.prototype.onViewportUpdate = function() {
    "use strict";
    if (l.isTiny()) {
      this.onScroll();
      var t = this.onScroll.bind(this);
      this.$SidebarFitWindowHeight1 = new k();
      this.$SidebarFitWindowHeight1.addSubscriptions(i.listen(window, 'scroll', t), g.subscribe('dom-scroll', t));
    } else {
      if (this.$SidebarFitWindowHeight2 !== 0) {
        j.set(this.$SidebarFitWindowHeight0, 'margin-top', '0');
        this.$SidebarFitWindowHeight2 = 0;
      }
      this.$SidebarFitWindowHeight1 && this.$SidebarFitWindowHeight1.release();
    }
  };
  s.prototype.onScroll = function() {
    "use strict";
    o(this.updateScrollPosition.bind(this), this.resizeSidebar.bind(this), 'SidebarFitWindowHeight/scroll');
  };
  s.prototype.updateScrollPosition = function() {
    "use strict";
    this.$SidebarFitWindowHeight3 = m.getScrollPosition().y;
    this.$SidebarFitWindowHeight4 || (this.$SidebarFitWindowHeight4 = this.$SidebarFitWindowHeight0.offsetHeight);
  };
  s.prototype.resizeSidebar = function() {
    "use strict";
    var t = -Math.max(Math.min(this.$SidebarFitWindowHeight3, this.$SidebarFitWindowHeight4), 0);
    j.set(this.$SidebarFitWindowHeight0, 'margin-top', t + 'px');
    if (t != this.$SidebarFitWindowHeight2) {
      this.$SidebarFitWindowHeight2 = t;
      this.inform('resized', t);
    }
  };
  s.prototype.getOffset = function() {
    "use strict";
    return this.$SidebarFitWindowHeight2;
  };
  e.exports = s;
}, null);
__d("ChatSidebar", ["Arbiter", "ArbiterMixin", "AsyncRequest", "Banzai", "BanzaiLogger", "Bootloader", "BootloaderConfig", "ChatConfig", "ChatImpressionLogger", "ChatOptions", "ChatSidebarComposeLink.react", "ChatSidebarConstants", "ChatSidebarSheet", "CSS", "DOM", "DOMDimensions", "Event", "JSLogger", "KeyEventController", "LitestandClassicPlaceHolders", "MercuryConfig", "OrderedFriendsList", "Parent", "PresencePrivacy", "React", "ScrollableArea", "SidebarFitWindowHeight", "Style", "ViewportBounds", "copyProperties", "createArrayFromMixed", "csx", "cx", "debounce", "emptyFunction", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa) {
  var qa, ra = null,
    sa, ta = false,
    ua = false,
    va = false,
    wa = false,
    xa = false,
    ya = false,
    za, ab, bb = false,
    cb, db, eb, fb, gb, hb, ib, jb = null,
    kb, lb = x.create('chat_sidebar'),
    mb = 'succeeded',
    nb = k.create(ja({
      retry: true
    }, j.VITAL));

  function ob() {
    t.removeClass(document.documentElement, 'sidebarMode');
    if (!xa || (!zb.isVisible() && !wa)) {
      g.inform('reflow');
      return;
    }
    va = false;
    wa = false;
    jb = null;
    fb.hide();
    hb.getCore().reset();
    t.hide(db);
    if (bb) {
      t.hide(ab);
      t.hide(cb);
      t.removeClass(document.documentElement, 'miniSidebar');
      t.removeClass(db, "_51xq");
      za && za.setProps({
        shown: false
      }, function() {
        return ub(false);
      });
      lb.log('minisidebar_hide');
    } else lb.log('sidebar_hide');
    g.inform('sidebar/hide', zb);
    g.inform('reflow');
  }

  function pb() {
    var ac = zb.shouldShowSidebar(),
      bc = zb.shouldShowMiniSidebar();
    if (zb.isEnabled() && (ac || bc)) {
      if (ac) {
        sb();
        tb();
      } else vb();
    } else ob();
    if (!xa) {
      yb();
      xa = true;
    }
    jb = null;
  }

  function qb() {
    if (hb && zb.isVisible()) hb.getCore().getElement().focus();
  }

  function rb(ac) {
    var bc = ib.height;
    ac.forEach(function(cc) {
      if (cc && cc !== qa) bc -= v.getElementDimensions(cc).height;
    });
    if (kb) bc -= kb.getOffset();
    if (gb) bc -= v.getElementDimensions(gb).height;
    return Math.max(0, bc);
  }

  function sb() {
    if (zb.isVisible()) return;
    if (bb) {
      t.hide(ab);
      t.show(cb);
      t.removeClass(document.documentElement, 'miniSidebar');
      t.removeClass(db, "_51xq");
      za && za.setProps({
        shown: false
      }, function() {
        return ub(false);
      });
    }
    va = true;
    wa = false;
    jb = null;
    t.show(db);
    t.addClass(document.documentElement, 'sidebarMode');
    fb.show();
    lb.log('sidebar_show');
    g.inform('sidebar/show', zb);
    z.destroy('sidebar');
  }

  function tb() {
    var ac = rb(ka(cb.childNodes)),
      bc = fb.getItemHeight(),
      cc = 8,
      dc = Math.floor((ac - cc) / bc);
    ha.set(qa, 'height', ac + 'px');
    fb.setNumTopFriends(dc);
    var ec = Math.floor((ac - cc) / bc);
    ec = (ec - 2) > 0 ? ec - 2 : 0;
    hb.getData().setMaxResults(ec);
    g.inform('sidebar/resized', zb);
    g.inform('reflow');
  }

  function ub(ac) {
    if (db === null) return;
    t.conditionClass(db, "_2e4g", ac);
  }

  function vb() {
    t.hide(cb);
    t.show(ab);
    t.show(db);
    t.addClass(document.documentElement, 'sidebarMode');
    t.addClass(document.documentElement, 'miniSidebar');
    t.addClass(db, "_51xq");
    var ac = rb([]),
      bc = r.getItemHeight(true),
      cc = Math.floor(ac / bc) - 4;
    if (!za) {
      l.loadModules(["ChatMiniSidebar.react", "ChatMiniSidebarSearchSource"], function(dc, ec) {
        if (!sa) sa = new ec({
          queryRequests: [{
            uri: '/ajax/mercury/composer_query.php'
          }]
        });
        za = ea.render(ea.createElement(dc, {
          dataSource: sa,
          height: ac,
          maxEntries: Math.max(cc, 0),
          onClickSearch: ub,
          onToggleSidebar: zb.toggle,
          shown: true
        }), ab);
      });
    } else za.setProps({
      height: ac,
      maxEntries: Math.max(cc, 0),
      shown: true
    });
    va = false;
    wa = true;
    z.destroy('sidebar');
    lb.log('minisidebar_show');
    g.inform('minisidebar/show', zb);
    g.inform('reflow');
  }

  function wb() {
    p.setSetting('sidebar_mode', zb.isEnabled(), 'sidebar');
    new i('/ajax/chat/settings.php').setHandler(oa).setErrorHandler(oa).setData({
      sidebar_mode: zb.isEnabled()
    }).setAllowCrossPageTransition(true).send();
  }

  function xb() {
    return ba.getActiveList().length <= n.get('sidebar.min_friends');
  }

  function yb() {
    var ac = true;
    if (!zb.isEnabled()) {
      lb.log('state_not_enabled');
      ac = false;
    }
    if (!zb.isViewportCapable())
      if (!bb) {
        lb.log('state_not_shown_viewport');
        ac = false;
      } else if (!zb.isViewportCapableForMiniSidebar()) {
      lb.log('state_not_shown_viewport_mini');
      ac = false;
    }
    if (ua) {
      lb.log('state_not_shown_hidden');
      ac = false;
    }
    if (xb()) {
      lb.log('state_not_shown_num_friends');
      ac = false;
    }
    lb.log(ac ? 'state_shown' : 'state_not_shown');
  }
  var zb = {
    init: function(ac, bc, cc, dc) {
      zb.init = oa;
      ya = true;
      db = ac;
      fb = bc;
      hb = cc;
      eb = dc;
      qa = u.find(ac, 'div.fbChatSidebarBody');
      ab = u.find(ac, "._51x-");
      cb = u.find(ac, "._51x_");
      gb = u.find(ac, "._5qqe");
      bb = n.get('www_mini_sidebar', false);
      if (dc && dc.react_compose_link) {
        var ec = u.find(ac, "._x1u");
        ec && ea.render(ea.createElement(q, {
          className: "_3a-4 _5q85"
        }), ec);
      }
      w.listen(window, 'resize', pb);
      y.registerKey('q', function(event) {
        if (va) {
          if (!ra) ra = u.scry(ac, '.inputsearch')[0];
          if (ra) {
            ra.focus();
            event.prevent();
          }
        }
      });
      var fc = new s(ac);
      fc.subscribe('updated', pb);
      fb.setScrollContainer(ca.byClass(fb.getRoot(), 'uiScrollableAreaWrap'));
      fb.subscribe(['render', 'show', 'hide'], na(function(hc) {
        var ic = fa.getInstance(fb.getRoot());
        ic && ic.adjustGripper();
      }));
      g.subscribe('chat/option-changed', function(hc, ic) {
        if (ic.name == "sidebar_mode") {
          ta = !!p.getSetting('sidebar_mode');
          pb();
        }
        if (ic.name === 'hide_groups') pb();
      });
      cc.getCore().subscribe('sidebar/typeahead/active', zb.updateOnActiveTypeahead);
      if (aa.SidebarClearTypeaheadGK) {
        cc.subscribe('blur', function() {
          if (!fb.isVisible()) zb.updateOnActiveTypeahead(null, false);
        });
        cc.subscribe('focus', function() {
          if (fb.isVisible() && cc.getCore().getValue()) zb.updateOnActiveTypeahead(null, true);
        });
      }
      cc.subscribe('reset', function() {
        if (!cc.getCore().getValue() && !fb.isVisible()) zb.updateOnActiveTypeahead(null, false);
      });
      g.subscribe('buddylist-nub/initialized', function(hc, ic) {
        w.listen(ic.getButton(), 'click', function(event) {
          var jc = ua;
          ua = false;
          zb.enable();
          var kc = zb.shouldShowSidebar() || zb.shouldShowMiniSidebar();
          ua = jc && !kc;
          return !kc;
        });
      });
      ta = !!p.getSetting('sidebar_mode');
      da.subscribe('privacy-user-presence-changed', pb);
      pb();
      o.init(fb);
      ia.addPersistentRight(zb.getVisibleWidth);
      zb.inform('sidebar/initialized', zb, g.BEHAVIOR_PERSISTENT);
      g.inform('sidebar/initialized', zb, g.BEHAVIOR_PERSISTENT);
      kb = new ga(gb);
      kb.subscribe('resized', pb);
      if (n.get('chat_sidebar_load_log')) {
        var gc = {
          event: mb,
          session_token: dc.session_token,
          country_code: dc.viewer_country_code,
          buddylist_short: n.get('buddylist_short_group'),
          bootloader_retry: m.retry_on_timeout
        };
        nb.log('MessagesSidebarLoadLoggerConfig', gc);
      }
    },
    updateOnActiveTypeahead: function(ac, bc) {
      if (!va) return;
      if (bc) {
        fb.hide();
      } else {
        hb.getView().clearContent();
        fb.show();
        pb();
      }
    },
    isInitialized: function() {
      return xa;
    },
    disable: function() {
      if (!zb.isEnabled()) return;
      ta = false;
      wb();
      ob();
    },
    enable: function() {
      if (zb.isEnabled()) return;
      ta = true;
      wb();
      pb();
      setTimeout(qb, 0);
    },
    ensureLoaded: function() {
      if (!ta) return;
      if (ya) return;
      if (pa('pagelet_sidebar')) return;
      d(['UIPagelet'], function(ac) {
        var bc = u.create('div', {
          id: 'pagelet_sidebar'
        });
        u.appendContent(document.body, bc);
        ac.loadFromEndpoint('SidebarPagelet', 'pagelet_sidebar');
      });
      ya = true;
    },
    hide: function() {
      if (ua) return;
      ua = true;
      ob();
    },
    unhide: function() {
      if (!ua) return;
      ua = false;
      pb();
    },
    getBody: function() {
      return qa;
    },
    getRoot: function() {
      return db;
    },
    getVisibleWidth: function() {
      if ((!va && !wa) || !db) return 0;
      if (jb === null) {
        jb = db.offsetWidth;
        if (wa) jb = 206;
      }
      return jb;
    },
    isEnabled: function() {
      return ta;
    },
    isViewportCapable: function() {
      ib = v.getViewportWithoutScrollbarDimensions();
      var ac = n.get('sidebar.minimum_width');
      return ib.width > ac;
    },
    shouldShowSidebar: function() {
      var ac = zb.isViewportCapable();
      return ac && !ua && !xb();
    },
    isViewportCapableForMiniSidebar: function() {
      ib = v.getViewportWithoutScrollbarDimensions();
      var ac = n.get('sidebar.minimum_width'),
        bc = n.get('minisidebar.minimum_width');
      return ib.width > bc && ib.width <= ac;
    },
    shouldShowMiniSidebar: function() {
      if (!bb) return false;
      var ac = zb.isViewportCapableForMiniSidebar();
      return ac && !ua && !xb();
    },
    isVisible: function() {
      return va;
    },
    resize: pb,
    toggle: function() {
      zb.isEnabled() ? zb.disable() : zb.enable();
    }
  };
  ja(zb, h);
  e.exports = zb;
}, null);
__d("ChatMiniSidebarSearchSource", ["AbstractSearchSource", "AsyncRequest", "ChatSortUsers", "CurrentUser", "MercuryParticipantTypes", "OrderedFriendsList", "SearchableEntry", "SearchSourceCallbackManager", "ShortProfiles", "TokenizeUtil", "copyProperties", "emptyFunction", "isValidUniqueID"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  'use strict';
  for (var t in g)
    if (g.hasOwnProperty(t)) v[t] = g[t];
  var u = g === null ? null : g.prototype;
  v.prototype = Object.create(u);
  v.prototype.constructor = v;
  v.__superConstructor__ = g;

  function v(w) {
    this.$ChatMiniSidebarSearchSource0 = new n({
      parseFn: p.parse,
      matchFn: p.isQueryMatch,
      indexFn: w.indexFn
    });
    this.$ChatMiniSidebarSearchSource1 = [];
    this.$ChatMiniSidebarSearchSource2 = w.queryRequests || [];
  }
  v.prototype.bootstrapImpl = function(w) {
    o.fetchAll().then(function() {
      this.$ChatMiniSidebarSearchSource3();
      w();
    }.bind(this));
  };
  v.prototype.searchImpl = function(w, x, y) {
    var z = null,
      aa = {},
      ba = y && y.onQueryFinished,
      ca = this.$ChatMiniSidebarSearchSource0.search(w, function(fa) {
        if (!z) {
          z = fa;
          z.forEach(function(ga) {
            return aa[ga.getUniqueID()] = true;
          });
        } else fa.forEach(function(ga) {
          var ha = ga.getUniqueID();
          if (!aa[ha]) {
            z.push(ga);
            aa[ha] = true;
          }
        });
        x(z, w);
      }, y);
    if (!ca || !this.$ChatMiniSidebarSearchSource2 || !this.$ChatMiniSidebarSearchSource2.length || w.length <= 1) {
      ba && ba(w);
      return;
    }
    var da = {
        value: w,
        existing_ids: z && z.map(function(fa) {
          return fa.getUniqueID();
        }).join(',')
      },
      ea = this.$ChatMiniSidebarSearchSource2.length;
    this.$ChatMiniSidebarSearchSource2.forEach(function(fa) {
      this.$ChatMiniSidebarSearchSource4(da, fa, function(ga) {
        this.$ChatMiniSidebarSearchSource5(this.$ChatMiniSidebarSearchSource6(this.$ChatMiniSidebarSearchSource7(ga)), w);
        ea--;
        if (ea === 0) {
          this.$ChatMiniSidebarSearchSource0.setQueryStringAsExhausted(w);
          ba && ba(w);
        }
      }.bind(this));
    }.bind(this), this);
  };
  v.prototype.getBootstrappedEntries = function(w) {
    return this.bootstrap(function() {
      return w(this.$ChatMiniSidebarSearchSource1 || []);
    }.bind(this));
  };
  v.prototype.getAllEntriesMap = function() {
    return this.$ChatMiniSidebarSearchSource0.getAllEntries();
  };
  v.prototype.$ChatMiniSidebarSearchSource3 = function() {
    var w = o.getCachedProfileIDs(),
      x = w.filter(function(z) {
        var aa = o.getNow(z);
        return (z == j.getID() || aa.type === k.FRIEND);
      });
    x.sort(i.sort);
    var y = x.map(this.$ChatMiniSidebarSearchSource8);
    if (y.length) {
      this.$ChatMiniSidebarSearchSource0.addLocalEntries(y);
      this.$ChatMiniSidebarSearchSource1 = this.$ChatMiniSidebarSearchSource1.concat(y);
    }
  };
  v.prototype.$ChatMiniSidebarSearchSource6 = function(w) {
    return w.map(this.$ChatMiniSidebarSearchSource9, this);
  };
  v.prototype.$ChatMiniSidebarSearchSource9 = function(w, x) {
    if (w.mercury_thread) return l.normalizeThreadEntry(w, x);
    var y = w.text,
      z = w.uid;
    if (!y || !s(z)) return null;
    return new m({
      uniqueID: z,
      title: y,
      order: l.getActiveRank(z),
      subtitle: w.subtext,
      type: w.render_type || w.type,
      photo: w.photo,
      uri: w.path
    });
  };
  v.prototype.$ChatMiniSidebarSearchSource7 = function(w) {
    var x = w.getPayload();
    if (Array.isArray(x)) {
      return x;
    } else if (x && x.entries) {
      return x.entries;
    } else return [];
  };
  v.prototype.$ChatMiniSidebarSearchSource8 = function(w, x) {
    var y = o.getNow(w),
      z = w == j.getID() ? k.FRIEND : y.type,
      aa = [y.additionalName, y.alternateName].concat(y.searchTokens || []).join(' ');
    return new m({
      uniqueID: w,
      title: y.name,
      order: x,
      subtitle: y.additionalName,
      keywordString: aa,
      type: z,
      photo: y.thumbSrc,
      uri: y.uri
    });
  };
  v.prototype.$ChatMiniSidebarSearchSource4 = function(w, x, y, z) {
    new h(x.uri).setData(q({}, w, x.data)).setMethod('GET').setReadOnly(true).setHandler(y).setErrorHandler(z || r).send();
  };
  v.prototype.$ChatMiniSidebarSearchSource5 = function(w, x) {
    if (w.length) this.$ChatMiniSidebarSearchSource0.addQueryEntries(w.filter(function(y) {
      return !!y;
    }), x);
  };
  v.prototype.refreshData = function() {
    o.fetchAll();
    d(['AvailableList'], function(w) {
      return w.update();
    });
  };
  e.exports = v;
}, null);
__d("ChatTypeaheadBehavior", ["ChatOpenTab", "CSS", "MercuryConfig", "Parent", "Rect", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  function n(p, q) {
    var r = j.byClass(p, "_4oes");
    if (r) h.conditionClass(r, "_5q83", q);
  }

  function o(p) {
    "use strict";
    this._typeahead = p;
  }
  o.prototype.enable = function() {
    "use strict";
    var p = this._typeahead;
    this._subscriptions = [p.subscribe('focus', function() {
      p.getData().refreshData();
      n(p.getElement(), true);
    }), p.subscribe('blur', function(q) {
      if (!i.SidebarClearTypeaheadGK) p.getCore().reset();
      n(p.getElement(), false);
    }), p.subscribe('respond', function(q, r) {
      if (r.value && r.value === p.getCore().getValue()) {
        if (!r.results.length) {
          var s = r.value.toLowerCase(),
            t = p.getData().getQueryCache();
          if (!r.isAsync && !t.hasOwnProperty(s)) return;
          p.getView().showNoResults();
        }
        h.addClass(p.getElement(), 'hasValue');
      }
    }), p.subscribe('reset', function() {
      h.removeClass(p.getElement(), 'hasValue');
    }), p.subscribe('select', function(q, r) {
      var s = r.selected.uid;
      if (r.selected.mercury_thread && !r.selected.mercury_thread.is_canonical) s = r.selected.mercury_thread.thread_fbid;
      p.getView().hide();
      g.openTabByType(s, r.selected.type, 'typeahead');
    }), p.subscribe('highlight', function(q, r) {
      if (r.index >= 0) {
        var s = p.getView().getItems()[r.index];
        if (s) {
          var t = new k(s),
            u = s.offsetParent,
            v = t.boundWithin(new k(u)).getPositionVector();
          t.getPositionVector().sub(v).scrollElementBy(u);
        }
      }
    })];
  };
  o.prototype.disable = function() {
    "use strict";
    this._subscriptions.forEach(function(p) {
      this._typeahead.unsubscribe(p);
    }, this);
    this._subscriptions = null;
  };
  l(o.prototype, {
    _subscriptions: null
  });
  e.exports = o;
}, null);
__d("MercuryErrorInfo", ["MercuryActionStatus", "MercuryErrorType", "fbt"], function(a, b, c, d, e, f, g, h, i) {
  var j = {
    getMessage: function(k) {
      var l = '';
      if (j.isConnectionError(k)) {
        l = "This message didn't send.";
        if (j.isTransient(k)) l = i._("{message} Check your internet connection and click to try again.", [i.param("message", l)]);
      } else {
        if (k && k.description) {
          l = k.description;
        } else l = "This message failed to send.";
        if (j.isTransient(k)) l = i._("{message} Click to send again.", [i.param("message", l)]);
      }
      return l;
    },
    isConnectionError: function(k) {
      if (k && k.type == h.TRANSPORT) return k.code === 1001 || k.code === 1004 || k.code === 1006;
      return false;
    },
    isTransient: function(k) {
      return k && k.is_transient;
    },
    isPermanent: function(k) {
      return k ? !this.isTransient(k) : false;
    },
    hasErrorStatus: function(k) {
      return k.status === g.FAILED_UNKNOWN_REASON || k.status === g.UNABLE_TO_CONFIRM || k.status === g.ERROR;
    }
  };
  e.exports = j;
}, null);
__d("MercuryMessageError.react", ["CurrentUser", "ImmutableObject", "MercuryErrorInfo", "MercuryMessageActions", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  'use strict';
  var n = k.PropTypes,
    o = k.createClass({
      displayName: "MercuryMessageError",
      propTypes: {
        authorFBID: n.string,
        message: n.instanceOf(h).isRequired
      },
      getDefaultProps: function() {
        return {
          authorFBID: g.getID()
        };
      },
      render: function() {
        var p = this.props.message,
          q = p.error_data;
        return (k.createElement("div", k.__spread({}, this.props, {
          className: m(this.props.className, this._getClassNameFromStatus(p)),
          tabIndex: i.isTransient(q) ? 0 : null,
          onClick: i.isTransient(q) ? this.messageResend : null
        }), k.createElement("div", {
          className: "_2fs1"
        }), k.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: this._getTextFromStatus(p)
          }
        })));
      },
      messageResend: function() {
        j.getForFBID(this.props.authorFBID).resend(this.props.message);
      },
      _getClassNameFromStatus: function(p) {
        if (i.hasErrorStatus(p)) {
          return (("_2fs2") + (' ' + "_2fs3") + (i.isTransient(p.error_data) ? ' ' + "_2fs4" : '') + (i.isPermanent(p.error_data) ? ' ' + "_2fs5" : ''));
        } else return "_2fs6 _2fs2";
      },
      _getTextFromStatus: function(p) {
        var q = '',
          r = p.error_data;
        if (i.hasErrorStatus(p)) q = i.getMessage(r);
        if (typeof q === 'object' && q.__html) q = q.__html;
        return q;
      }
    });
  e.exports = o;
}, null);
__d("MercuryAudioPlayer", ["Event", "Arbiter", "DOM", "Flash", "UserAgent_DEPRECATED", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = 200;

  function n() {
    if (k.webkit() && !k.chrome()) return false;
    var w = i.create('audio'),
      x = false;
    try {
      if (!!w.canPlayType)
        if (w.canPlayType('video/mp4;').replace(/^no$/, '')) x = true;
    } finally {
      return x;
    }
  }

  function o() {
    return j.isAvailable();
  }
  var p = function() {
    this.interval = null;
    this.arbiterInstance = null;
    this.audio = i.create('audio');
    g.listen(this.audio, 'playing', function() {
      this.informAttachment('playing', this.audio.currentTime);
      this.interval = setInterval(function() {
        this.informAttachment('playing', this.audio.currentTime);
      }.bind(this), m);
    }.bind(this));
    g.listen(this.audio, 'ended', function() {
      clearInterval(this.interval);
      this.informAttachment('finished');
    }.bind(this));
  };
  l(p.prototype, {
    setAudio: function(w, x) {
      this.audio.setAttribute('src', w);
      this.arbiterInstance = x;
    },
    informAttachment: function(w, x) {
      if (this.arbiterInstance) this.arbiterInstance.inform(w, x);
    },
    play: function() {
      this.audio.play();
      this.informAttachment('played');
    },
    resume: function() {
      this.audio.play();
      this.informAttachment('played');
    },
    pause: function() {
      this.audio.pause();
      clearInterval(this.interval);
      this.informAttachment('paused');
    },
    getType: function() {
      return 'html5';
    }
  });
  var q = function() {
    this.src = null;
    this.arbiterInstance = null;
    var w = i.create('div');
    document.body.appendChild(w);
    this.swf = j.embed('/swf/SoundStreamPlayer.swf', w, null, {});
    this.interval = null;
    h.subscribe('soundstream/finished', function() {
      clearInterval(this.interval);
      this.informAttachment('finished');
    }.bind(this));
  };
  l(q.prototype, {
    setAudio: function(w, x) {
      this.src = w;
      this.arbiterInstance = x;
    },
    informAttachment: function(w, x) {
      if (this.arbiterInstance) this.arbiterInstance.inform(w, x);
    },
    play: function() {
      this.swf.playSound(this.src);
      this.interval = setInterval(function() {
        var w = this.swf.getCurrentTime();
        this.informAttachment('playing', w);
      }.bind(this), m);
      this.informAttachment('played');
    },
    resume: function() {
      this.swf.resume();
      this.informAttachment('played');
    },
    pause: function() {
      clearInterval(this.interval);
      this.swf.pause();
      this.informAttachment('paused');
    },
    getType: function() {
      return 'flash';
    }
  });

  function r() {
    if (n()) {
      return new p();
    } else if (o()) return new q();
    return false;
  }
  var s = null,
    t = null,
    u = 0;

  function v(w, x) {
    this.src = w;
    this.arbiterInstance = x;
    this.audio_id = ++u;
    s !== null || (s = r());
    if (!s) return false;
  }
  l(v.prototype, {
    getType: function() {
      if (!s) {
        return false;
      } else return s.getType();
    },
    play: function(w) {
      if (w && t == this.audio_id) {
        s.resume();
      } else {
        this.pause();
        t = this.audio_id;
        s.setAudio(this.src, this.arbiterInstance);
        s.play();
      }
    },
    pause: function() {
      s.pause();
    }
  });
  e.exports = v;
}, null);
__d("MercuryShareAttachmentRenderLocations", [], function(a, b, c, d, e, f) {
  'use strict';
  var g = {
    CHAT: 'chat',
    CHAT_PREVIEW: 'chat_preview',
    MESSENGER: 'messenger',
    getValues: function() {
      return [g.CHAT, g.CHAT_PREVIEW, g.MESSENGER];
    },
    isPreview: function(h) {
      return h === g.CHAT_PREVIEW;
    }
  };
  e.exports = g;
}, null);
__d("MercuryAttachmentAudioClip.react", ["Arbiter", "ArbiterMixin", "MercuryAudioPlayer", "CurrentUser", "JSLogger", "LeftRight.react", "MercuryShareAttachmentRenderLocations", "React", "SubscriptionsHandler", "cx", "fbt", "joinClasses", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  var t = 'MercuryAttachmentAudioClip/play',
    u = k.create('mercury_audio_clip'),
    v = n.createClass({
      displayName: "AudioClip",
      mixins: [h],
      propTypes: {
        duration: n.PropTypes.number,
        location: n.PropTypes.oneOf(m.getValues()),
        rootClassName: n.PropTypes.string,
        showHelp: n.PropTypes.bool,
        src: n.PropTypes.string.isRequired,
        width: n.PropTypes.number
      },
      getInitialState: function() {
        this.logged = false;
        var w = this.props.downloadOnly ? false : new i(this.props.src, this);
        return {
          time: 0,
          playing: false,
          started: false,
          duration: this.props.duration,
          audioPlayer: w
        };
      },
      componentDidMount: function() {
        this._subscriptionsHandler = new o();
        this._subscriptionsHandler.addSubscriptions(this.subscribe('playing', this.updateTime), this.subscribe('played', s(this.setState, this, {
          playing: true,
          started: true
        })), this.subscribe('paused', s(this.setState, this, {
          playing: false
        })), this.subscribe('finished', s(this.setState, this, {
          playing: false,
          started: false,
          time: this.props.duration
        })), g.subscribe(t, function(w, x) {
          if (this.props.src != x) this.setState({
            time: 0
          });
        }.bind(this)));
      },
      componentWillUnmount: function() {
        this._subscriptionsHandler && this._subscriptionsHandler.release();
      },
      updateTime: function(w, x) {
        this.setState({
          time: x
        });
      },
      play: function() {
        if (this.state.playing) {
          this.state.audioPlayer.pause();
        } else {
          this.state.audioPlayer.play(this.state.started);
          g.inform(t, this.props.src);
          if (!this.logged) {
            this.logged = true;
            u.log('play', {
              uid: j.getID(),
              duration: this.props.duration
            });
          }
        }
      },
      _formatSeconds: function(w) {
        if (w) {
          w = Math.ceil(w);
          var x = w % 60;
          if (x < 10) x = '0' + x;
          var y = Math.floor(w / 60);
          return y + ':' + x;
        } else return null;
      },
      _renderPlayer: function(w, x) {
        return (n.createElement("a", {
          className: "_1miz _2e-1",
          href: "#",
          style: {
            width: w
          },
          onClick: this.play
        }, n.createElement("span", {
          className: "_1mi- _2e-2"
        }, n.createElement("i", {
          className: "_1mi_ _2e-3"
        })), n.createElement("span", {
          className: "_1mj0 _2e-4"
        }, x), n.createElement("div", {
          className: "_1mj1 _2e-5"
        })));
      },
      render: function() {
        var w = this.state.time,
          x = this.state.playing,
          y = this._formatSeconds(this.state.duration),
          z = this.props.width || 170,
          aa = null,
          ba = Math.ceil((w * (z + 2)) / this.state.duration);
        if (this.state.audioPlayer && this.state.audioPlayer.getType()) {
          var ca = this._renderPlayer(z, y),
            da = this._renderPlayer(z, y),
            ea = (("_1mj2") + (' ' + "_2e-6") + (x && (w !== 0) ? ' ' + "_1mj3" : '') + (x && (w === 0) ? ' ' + "_4g4x" : ''));
          aa = (n.createElement("div", {
            className: ea
          }, ca, n.createElement("div", {
            className: "_1mj4 _2e-7",
            style: {
              width: ba
            }
          }, da)));
        } else aa = (n.createElement("div", {
          className: "_1mj2"
        }, n.createElement("div", {
          className: "_1miz"
        }, n.createElement(l, null, n.createElement("a", {
          className: "_1mj5",
          href: this.props.src
        }, n.createElement("span", {
          className: "_3qi6"
        }, n.createElement("i", {
          className: "_1mj6"
        })), n.createElement("span", {
          className: "_1mj7"
        }, "Voice Message"), n.createElement("span", {
          className: "_1mj8"
        }, y)), n.createElement("a", {
          href: this.props.src,
          className: "_1mj9"
        }, n.createElement("i", {
          className: "_1mja"
        }))))));
        return (n.createElement("div", {
          className: r("_1mjb", this.props.rootClassName)
        }, aa));
      }
    });
  e.exports = v;
}, null);
__d("XMessageTranscriptController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/fetch_transcript\/", {
    message_id: {
      type: "String",
      required: true
    }
  });
}, null);
__d("StarsInput.react", ["React", "TooltipLink.react", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = g.createClass({
    displayName: "StarsInput",
    propTypes: {
      allowMultipleSubmissions: g.PropTypes.bool,
      onClick: g.PropTypes.func.isRequired,
      starLabels: g.PropTypes.array
    },
    getDefaultProps: function() {
      return {
        allowMultipleSubmissions: false,
        starLabels: ["Poor", "Fair", "Good", "Very Good", "Excellent"]
      };
    },
    getInitialState: function() {
      return {
        starRating: 0,
        starsShown: 0,
        canUpdate: true
      };
    },
    _getStarRating: function(l) {
      return parseInt(l.split('.').pop(), 10) + 1;
    },
    onMouseEnter: function(event) {
      if (this.state.canUpdate) this.setState({
        starsShown: this._getStarRating(event.dispatchMarker)
      });
    },
    onMouseLeave: function(event) {
      if (this.state.canUpdate) {
        var l = this.state.starRating;
        this.setState({
          starsShown: l
        });
      }
    },
    onClick: function(event) {
      if (this.state.canUpdate) {
        var l = this._getStarRating(event.dispatchMarker);
        this.setState({
          starRating: l,
          starsShown: l,
          canUpdate: this.props.allowMultipleSubmissions
        });
        this.props.onClick(l);
      }
    },
    getStars: function() {
      var l = this.props.starLabels.length,
        m = [];
      for (var n = 0; n < l; n++) m.push(g.createElement(h, {
        className: (("mls") + (' ' + "_22mm") + (n >= this.state.starsShown ? ' ' + "_22mn" : '') + (n < this.state.starsShown ? ' ' + "_22mo" : '') + (!this.state.canUpdate ? ' ' + "_1g87" : '')),
        tooltip: this.props.starLabels[n],
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onClick: this.onClick,
        position: "above",
        alignH: "center"
      }));
      return m;
    },
    render: function() {
      return (g.createElement("div", null, this.getStars()));
    }
  });
  e.exports = k;
}, null);
__d("Stars.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
  var i = 4,
    j = ['emptyStar', 'onefourthStar', 'halfStar', 'threefourthsStar', 'fullStar'],
    k = g.createClass({
      displayName: "Stars",
      propTypes: {
        count: g.PropTypes.number.isRequired,
        max: g.PropTypes.number,
        size: g.PropTypes.oneOf(['small', 'large']),
        title: g.PropTypes.string
      },
      getDefaultProps: function() {
        return {
          max: 5,
          size: 'small'
        };
      },
      getNumSubStars: function(l) {
        return Math.round(l * i);
      },
      render: function() {
        var l = this.getNumSubStars(this.props.count),
          m = Array.apply(null, {
            length: this.props.max
          }).map(function(o, p) {
            return l - p * i;
          }).map(function(o) {
            return Math.max(0, Math.min(i, o));
          }).map(function(o) {
            return g.createElement("i", {
              className: j[o]
            });
          }),
          n = (("uiStars") + (this.props.size === 'large' ? ' ' + "largeStars" : ''));
        return g.createElement("div", {
          className: n,
          title: this.props.title
        }, m);
      }
    });
  e.exports = k;
}, null);
__d("XMessageTranscriptRatingController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/asr\/transcript\/rate\/", {
    message_id: {
      type: "String",
      required: true
    },
    rating: {
      type: "Int",
      required: true
    }
  });
}, null);
__d("MercuryAttachmentAudioClipTranscript.react", ["AsyncRequest", "React", "XMessageTranscriptController", "MessageTranscriptWaitHandleState", "LoadingIndicator.react", "StarsInput.react", "Stars.react", "XMessageTranscriptRatingController", "MercuryConfig", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  var r = h.createClass({
    displayName: "Transcript",
    fetchTranscript: function() {
      var s = i.getURIBuilder().setString('message_id', this.props.message_id).getURI();
      new g(s).setHandler(function(t) {
        var u = t.getPayload();
        this.setState({
          transcript: u.transcript ? u.transcript.text : null,
          transcriptState: u.status,
          transcriptRetryTimeout: u.retryTimeout,
          rating: u.rating
        });
        if (this.state.transcriptState === j.BUSY) setTimeout(this.fetchTranscript, Math.max(this.state.transcriptRetryTimeout, 1000));
      }.bind(this)).send();
    },
    componentDidMount: function() {
      this.fetchTranscript();
    },
    getInitialState: function() {
      return {
        transcript: null,
        transcriptState: j.BUSY,
        transcriptRetryTimeout: null,
        rating: null
      };
    },
    _submitRating: function(s) {
      var t = n.getURIBuilder().setString('message_id', this.props.message_id).setInt('rating', s).getURI();
      (new g(t)).send();
    },
    render: function() {
      var s = this.state.transcriptState,
        t = this.state.transcript,
        u = null,
        v = null,
        w = null;
      if (s === j.READY) {
        u = h.createElement("p", null, t);
        if (o.TranscriptRatingGK)
          if (this.state.rating === null) {
            w = h.createElement(l, {
              onClick: this._submitRating
            });
          } else w = h.createElement(m, {
            count: this.state.rating
          });
      } else if (s === j.UNAVAILABLE) {
        u = (h.createElement("p", null, "Transcript unavailable"));
      } else if (s === j.BUSY) v = h.createElement(k, {
        size: "small",
        color: "white"
      });
      return (h.createElement("div", {
        className: "_44v-"
      }, u, w, v));
    }
  });
  e.exports = r;
}, null);
__d("MercuryThreadMetadataRawRenderer", ["Event", "CSS", "DOM", "MercuryActionStatus", "MercuryErrorInfo", "MercuryStatusTemplates", "Tooltip", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = {
    renderParticipantListWithNoThreadName: function(q, r, s, t, u, v) {
      var w = {
        callback: true,
        check_length: true,
        show_unread_count: true
      };
      v = v || {};
      var x = {};
      for (var y in v)
        if (w[y]) {
          x[y] = v[y];
          delete v[y];
        }
      var z = s.map(function(ea) {
          return t[ea];
        }),
        aa = this.renderRawParticipantList(q, z, s.length, v);
      aa = this.renderRawTitleWithUnreadCount(aa, x.show_unread_count ? r.unread_count : 0);
      var ba = v.abbr_mode,
        ca = {};
      for (var da in v) ca[da] = v[da];
      ca.abbr_mode = true;
      u.forEach(function(ea) {
        var fa = u.length > 1 ? this._cloneIfDOMElement(aa) : aa;
        i.setContent(ea, fa);
        if (x.check_length && !ba && ea.scrollWidth > ea.clientWidth) {
          var ga = this.renderRawParticipantList(q, z, s.length, ca),
            ha = this.renderRawTitleWithUnreadCount(ga, x.show_unread_count ? r.unread_count : 0);
          i.setContent(ea, ha);
        }
      }.bind(this));
      x.callback && x.callback(aa);
    },
    renderRawParticipantList: function(q, r, s, t) {
      var u = {
        abbr_mode: true,
        last_separator_uses_and: true,
        names_renderer: true
      };
      t = t || {};
      var v = null;
      if (t.names_renderer) {
        v = t.names_renderer(r);
      } else v = r.map(function(x) {
        return x.name;
      });
      var w = null;
      if (v.length === 0) {
        if (!q) {
          w = "New Message";
        } else w = "No Participants";
      } else if (v.length == 1) {
        w = v[0];
      } else if (v.length == 2) {
        if (t.last_separator_uses_and) {
          w = o._("{participant1} and {participant2}", [o.param("participant1", v[0]), o.param("participant2", v[1])]);
        } else w = o._("{participant1}, {participant2}", [o.param("participant1", v[0]), o.param("participant2", v[1])]);
      } else if (t.last_separator_uses_and) {
        if (t.abbr_mode) {
          w = o._("{participant1} and {others_link}", [o.param("participant1", v[0]), o.param("others_link", this.renderRawParticipantCount({
            render_subset: true,
            count: s - 1
          }))]);
        } else if (v.length == 3) {
          w = o._("{participant1}, {participant2} and {participant3}", [o.param("participant1", v[0]), o.param("participant2", v[1]), o.param("participant3", v[2])]);
        } else w = o._("{participant1}, {participant2} and {others_link}", [o.param("participant1", v[0]), o.param("participant2", v[1]), o.param("others_link", this.renderRawParticipantCount({
          render_subset: true,
          count: s - 2
        }))]);
      } else if (v.length == 3) {
        w = o._("{participant1}, {participant2}, {participant3}", [o.param("participant1", v[0]), o.param("participant2", v[1]), o.param("participant3", v[2])]);
      } else w = o._("{participant1}, {participant2}, {participant3}, {others_link}", [o.param("participant1", v[0]), o.param("participant2", v[1]), o.param("participant3", v[2]), o.param("others_link", this.renderRawParticipantCount({
        render_subset: true,
        count: s - 3
      }))]);
      if (Array.isArray(w)) w = i.create('span', {}, w);
      return w;
    },
    renderRawTitleWithUnreadCount: function(q, r) {
      var s = q;
      if (r && r > 1) s = i.create('span', {}, o._("{conversation_title} ({unread_count})", [o.param("conversation_title", q), o.param("unread_count", r)]));
      return s;
    },
    renderRawParticipantCount: function(q) {
      var r = q.render_subset,
        s;
      if (!r) {
        s = q.count > 1 ? o._("{num} people", [o.param("num", q.count)]) : "1 person";
      } else s = q.count > 1 ? o._("{others_count} others", [o.param("others_count", q.count)]) : "1 other";
      return s;
    },
    renderShortNames: function(q) {
      if (q.length == 1) return [q[0].name];
      return q.map(function(r) {
        return r.short_name;
      });
    },
    renderStatusIndicator: function(q, r, s) {
      var t;
      if (q == j.RESENDING) {
        t = this.renderResendIndicator();
      } else if (q !== (void 0) && q != j.UNSENT && q != j.UNCONFIRMED && q != j.SUCCESS) t = this.renderErrorIndicator(r, s);
      return t;
    },
    renderResendIndicator: function() {
      return l[':fb:mercury:resend-indicator'].render();
    },
    renderErrorIndicator: function(q, r) {
      if (!q) return null;
      var s = l[':fb:mercury:error-indicator'].render(),
        t = q.is_transient,
        u = k.getMessage(q);
      if (t)
        if (k.isConnectionError(q)) {
          u = o._("{message} Check your internet connection and click to try again.", [o.param("message", u)]);
        } else u = o._("{message} Click to send again.", [o.param("message", u)]);
      m.set(s, u, 'above', 'center');
      if (r && t) {
        g.listen(s, 'click', r);
        s.setAttribute('tabindex', '0');
        h.addClass(s, "_55q-");
      }
      return s;
    },
    _cloneIfDOMElement: function(q) {
      if (q && q.cloneNode) {
        return q.cloneNode();
      } else return q;
    }
  };
  e.exports = p;
}, null);
__d("MessagingRecipientTypeaheadItem.react", ["BackgroundImage.react", "ChatTypeaheadConstants", "ImageBlock.react", "LeftRight.react", "React", "SplitImage.react", "MercuryThreadMetadataRawRenderer", "TypeaheadViewItem", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var q = k.createClass({
    displayName: "MessagingRecipientTypeaheadItem",
    propTypes: Object.assign({}, n.propTypes, {
      imageSize: k.PropTypes.number.isRequired
    }),
    mixins: [n.Mixin],
    isThreadRecipient: function() {
      return this.props.entry.getType() === h.THREAD_TYPE;
    },
    _getImage: function() {
      var r = this.props.entry;
      if (r.getType() === h.THREAD_TYPE && !r.getPhoto()) {
        var s = r.getAuxiliaryData();
        return (k.createElement(l, {
          size: this.props.imageSize,
          srcs: s.participantsToRender.map(function(t) {
            return t.image_src;
          })
        }));
      }
      if (r.getPhoto()) return (k.createElement(g, {
        width: this.props.imageSize,
        height: this.props.imageSize,
        backgroundSize: "cover",
        src: r.getPhoto()
      }));
      return k.createElement("span", null);
    },
    _getThreadParticipantList: function() {
      if (!this.isThreadRecipient()) return null;
      var r = this.props.entry;
      return m.renderRawParticipantList(r.getUniqueID(), r.getAuxiliaryData().participantsToRender, r.getAuxiliaryData().thread.participants.length - 1, {
        names_renderer: m.renderShortNames
      });
    },
    _getTitle: function() {
      var r = this.props.entry;
      if (this.isThreadRecipient() && !r.getTitle()) return this._getThreadParticipantList();
      return r.getTitle();
    },
    _getSubtitle: function() {
      var r = this.props.entry;
      if (this.isThreadRecipient() && !r.getTitle()) return this._getThreadParticipantList();
      return r.getSubtitle() ? r.getSubtitle().split(' \u00b7 ')[0] : null;
    },
    render: function() {
      var r = this._getSubtitle(),
        s = p((("_599m") + (' ' + "_55xn") + (!r ? ' ' + "_5mne" : '') + (this.props.highlighted ? ' ' + "_599n" : '')), this.props.className);
      return (k.createElement("li", {
        "aria-selected": this.props.selected,
        className: s,
        onMouseDown: this._onSelect,
        onMouseEnter: this._onHighlight,
        role: this.props.role
      }, k.createElement(i, {
        spacing: "medium"
      }, this._getImage(), k.createElement(j, null, k.createElement("div", null, k.createElement("div", {
        className: "_55xt _599p"
      }, this._getTitle()), k.createElement("div", {
        className: "_55z3 _599q"
      }, r)), this.props.children))));
    }
  });
  e.exports = q;
}, null);
__d("MessagingRecipientSelectedList.react", ["Image.react", "LeftRight.react", "Map", "MessagingRecipientTypeaheadItem.react", "React", "cx", "fbt", "xuiglyph"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  var o = k.createClass({
    displayName: "MessagingRecipientSelectedList",
    propTypes: {
      entries: k.PropTypes.instanceOf(i),
      onSelect: k.PropTypes.func.isRequired
    },
    _renderSelectedEntry: function(p) {
      var q = n({
        name: 'cross',
        shade: 'dark',
        size: 'small'
      });
      return (k.createElement(j, {
        key: p.getUniqueID(),
        entry: p,
        imageSize: 24,
        onSelect: this.props.onSelect
      }, k.createElement(g, {
        className: "_1jm4",
        src: q
      })));
    },
    render: function() {
      var p = ("Selected"),
        q = [];
      this.props.entries.forEach(function(r) {
        return q.push(this._renderSelectedEntry(r));
      }.bind(this));
      return (k.createElement("div", {
        className: "_1jm5"
      }, k.createElement(h, {
        className: "_1jm6 _2ph-"
      }, k.createElement("span", null, p), k.createElement("span", null, this.props.entries.size)), k.createElement("ul", null, q)));
    }
  });
  e.exports = o;
}, null);
__d("MessagingRecipientTypeaheadView.react", ["CenteredContainer.react", "Link.react", "Map", "MessagingRecipientTypeaheadItem.react", "React", "TypeaheadViewPropTypes", "XUISpinner.react", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = 32,
    q = k.createClass({
      displayName: "MessagingRecipientTypeaheadView",
      propTypes: Object.assign({}, l, {
        selectedEntries: k.PropTypes.instanceOf(i),
        loading: k.PropTypes.bool
      }),
      getDefaultProps: function() {
        return {
          role: 'listbox'
        };
      },
      _renderItem: function(r) {
        var s = r === this.props.highlightedEntry,
          t = this.props.selectedEntries.has(r.getUniqueID());
        return (k.createElement(j, {
          key: r.getUniqueID(),
          entry: r,
          highlighted: s,
          imageSize: p,
          selected: t,
          onSelect: this.props.onSelect,
          onHighlight: this.props.onHighlight,
          onRenderHighlight: this.props.onRenderHighlight
        }, k.createElement(h, {
          "aria-checked": t,
          className: (("_1v32") + (t ? ' ' + "_1v33" : '') + (!t ? ' ' + "_1v34" : '')),
          href: "#",
          role: "checkbox",
          tabIndex: "0"
        })));
      },
      render: function() {
        if (this.props.entries.length === 0 && !this.props.loading) return (k.createElement(g, {
          className: "_2pi1"
        }, "No results"));
        return (k.createElement("ul", {
          id: this.props.ariaOwneeID,
          className: "_51do",
          role: this.props.role
        }, this.props.entries.map(this._renderItem), k.createElement("div", {
          className: "_51dq"
        }, this.props.loading ? k.createElement(m, null) : null)));
      }
    });
  e.exports = q;
}, null);
__d("XMessagingForwardAttachmentController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/mercury\/attachments\/forward\/", {});
}, null);
__d("MessagingForwardAttachmentDialog.react", ["AsyncRequest", "ChatMiniSidebarSearchSource", "Image.react", "LayerFadeOnHide", "Layout.react", "Map", "MessagingRecipientSelectedList.react", "MessagingRecipientTypeaheadView.react", "OrderedFriendsList", "React", "SearchableTextInput.react", "ScrollableArea.react", "XMessagingForwardAttachmentController", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogCancelButton.react", "XUIDialogFooter.react", "XUIDialogTitle.react", "XUISpinner.react", "cx", "fbt", "xuiglyph"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca) {
  var da = k.Column,
    ea = k.FillColumn,
    fa = p.createClass({
      displayName: "MessagingForwardAttachmentDialog",
      propTypes: {
        attachmentID: p.PropTypes.string.isRequired,
        onClose: p.PropTypes.func,
        shown: p.PropTypes.bool.isRequired,
        title: p.PropTypes.string.isRequired
      },
      getInitialState: function() {
        return {
          bootstrappedEntries: [],
          entries: [],
          loading: true,
          selectedEntries: new l(),
          sendError: null,
          sending: false,
          startingThreadingID: Date.now(),
          query: ''
        };
      },
      componentDidMount: function() {
        this._dataSource = new h({
          queryRequests: [{
            uri: '/ajax/mercury/composer_query.php'
          }]
        });
        o.getSearchableEntries(20, function(ga) {
          this.setState({
            bootstrappedEntries: ga,
            loading: false
          });
        }.bind(this));
      },
      _onSelectEntry: function(ga) {
        var ha = ga.getUniqueID(),
          ia = new l(this.state.selectedEntries);
        if (ia.has(ha)) {
          ia["delete"](ha);
        } else ia.set(ha, ga);
        this.setState({
          selectedEntries: ia
        });
      },
      _onSearchChange: function(ga) {
        var ha = ga.target.value;
        this.setState({
          loading: true,
          query: ha
        });
      },
      _onSearchEntriesFound: function(ga) {
        this.setState({
          entries: ga
        });
      },
      _onSearchFinished: function(ga) {
        ga === this.state.query && this.setState({
          loading: false
        });
      },
      _onSubmit: function() {
        var ga = {},
          ha = this.state.startingThreadingID;
        this.state.selectedEntries.forEach(function(ja) {
          ga[ha++] = ja.getUniqueID();
        });
        var ia = s.getURIBuilder().getURI();
        new g(ia).setMethod('POST').setHandler(this._onSubmitResponse).setData({
          attachment_id: this.props.attachmentID,
          recipient_map: ga
        }).send();
        this.setState({
          sending: true,
          sendError: null
        });
      },
      _onSubmitResponse: function(ga) {
        if (ga.payload.success) {
          this.props.onClose && this.props.onClose();
          this.setState({
            bootstrappedEntries: [],
            selectedEntries: new l(),
            sending: false,
            startingThreadID: Date.now(),
            query: ''
          });
          return;
        }
        this.setState({
          sending: false,
          sendError: ga.payload.error
        });
      },
      render: function() {
        var ga = ("Send Message");
        if (this.state.selectedEntries.size > 1) ga = ("Send Messages");
        var ha = null;
        if (this.state.sending) {
          ha = (p.createElement("div", null, p.createElement(z, null), p.createElement("span", {
            className: "_5s0d _3-99"
          }, "Sending")));
        } else if (this.state.sendError) {
          var ia = ca({
            name: 'error-solid',
            shade: 'dark',
            size: 'medium'
          });
          ha = (p.createElement("div", {
            className: "_5s0d"
          }, p.createElement(i, {
            src: ia
          }), p.createElement("span", {
            className: "_3-99"
          }, this.state.sendError)));
        }
        return (p.createElement(t, {
          shown: this.props.shown,
          behaviors: {
            LayerFadeOnHide: j
          },
          width: 560
        }, p.createElement(y, null, this.props.title), p.createElement(u, {
          useCustomPadding: true
        }, p.createElement(k, null, p.createElement(da, {
          className: "_5s0e"
        }, p.createElement("div", {
          className: "_2ph_"
        }, p.createElement(q, {
          className: "_5s0f",
          onChange: this._onSearchChange,
          onEntriesFound: this._onSearchEntriesFound,
          placeholder: "Search",
          queryString: this.state.query,
          searchSource: this._dataSource,
          searchSourceOptions: {
            onQueryFinished: this._onSearchFinished
          }
        })), p.createElement(r, {
          className: "_5s0g",
          fade: true,
          height: 400,
          width: 360
        }, p.createElement(n, {
          entries: this.state.query ? this.state.entries : this.state.bootstrappedEntries,
          loading: this.state.loading,
          selectedEntries: this.state.selectedEntries,
          onSelect: this._onSelectEntry
        }))), p.createElement(ea, {
          className: "_5s0h"
        }, p.createElement(r, {
          fade: true,
          height: 457,
          shadow: false
        }, p.createElement(m, {
          entries: this.state.selectedEntries,
          onSelect: this._onSelectEntry
        }))))), p.createElement(x, {
          leftContent: ha
        }, p.createElement(w, null), p.createElement(v, {
          use: "confirm",
          disabled: !this.state.selectedEntries.size || this.state.sending,
          label: ga,
          onClick: this._onSubmit
        }))));
      }
    });
  e.exports = fa;
}, null);
__d("Spotlight.react", ["LayerHideOnBlur", "LayerHideOnEscape", "ReactLayer", "Spotlight"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = i.createClass({
    getDefaultEnabledBehaviors: function() {
      return {
        hideOnBlur: g,
        hideOnEscape: h
      };
    },
    createLayer: function(l) {
      var m = this.enumerateBehaviors(this.props.behaviors),
        n = {
          addedBehaviors: m,
          rootClassName: this.props.rootClassName
        },
        o = new j(n, l);
      o.conditionShow(this.props.shown);
      if (this.props.onBeforeHide) o.subscribe('beforehide', this.props.onBeforeHide);
      if (this.props.onHide) o.subscribe('hide', this.props.onHide);
      return o;
    },
    receiveProps: function(l) {
      this.layer.conditionShow(l.shown);
    }
  });
  e.exports = k;
}, null);
__d("SpotlightViewer", ["React", "ReactLayeredComponentMixin", "Spotlight.react", "cx"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = g.createClass({
    displayName: "SpotlightViewer",
    mixins: [h],
    renderLayers: function() {
      if (!this.props.open) return null;
      var l = "_n3";
      if (this.props.className) l += ' ' + this.props.className;
      return {
        photoLayer: g.createElement(i, {
          onBeforeHide: this.props.onBeforeHide,
          onHide: this.props.onHide,
          rootClassName: this.props.rootClassName,
          shown: this.props.open
        }, g.createElement("div", {
          className: l,
          onClick: this.props.onClick
        }, this.props.children))
      };
    },
    render: function() {
      return (g.createElement("div", null));
    }
  });
  e.exports = k;
}, null);
__d("SpotlightViewerAutoResize", ["Event", "SubscriptionsHandler", "invariant"], function(a, b, c, d, e, f, g, h, i) {
  function j(k) {
    "use strict";
    this.$SpotlightViewerAutoResize0 = k;
    i(typeof this.$SpotlightViewerAutoResize0.onResize === 'function');
  }
  j.prototype.enable = function() {
    "use strict";
    this.$SpotlightViewerAutoResize1 = new h();
    this.$SpotlightViewerAutoResize1.addSubscriptions(g.listen(window, 'resize', this.$SpotlightViewerAutoResize0.onResize.bind(this.$SpotlightViewerAutoResize0)));
  };
  j.prototype.disable = function() {
    "use strict";
    this.$SpotlightViewerAutoResize1.release();
    delete this.$SpotlightViewerAutoResize1;
  };
  e.exports = j;
}, null);
__d("SpotlightViewerBehaviorsMixin", ["BehaviorsMixin", "copyProperties"], function(a, b, c, d, e, f, g, h) {
  var i = {
    componentWillMount: function() {
      this.behaviors && this.enableBehaviors(this.behaviors);
    },
    componentWillUnmount: function() {
      this.destroyBehaviors();
    }
  };
  h(i, g);
  e.exports = i;
}, null);
__d("SpotlightViewerBottomBar", ["LeftRight.react", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = h.createClass({
    displayName: "SpotlightViewerBottomBar",
    render: function() {
      var l = Array.isArray(this.props.children) ? this.props.children : [this.props.children],
        m = "_4_8n _51an";
      if (this.props.className) m = j(m, this.props.className);
      if (l.length === 1) return (h.createElement("div", {
        className: m
      }, l[0]));
      m = j(m, "_50-m");
      return (h.createElement(g, {
        className: m
      }, l[0], l[1]));
    }
  });
  e.exports = k;
}, null);
__d("SpotlightViewerBottomBarGroup", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
  var i = g.createClass({
    displayName: "SpotlightViewerBottomBarGroup",
    render: function() {
      var j = this.props.itemmargin || 'right',
        k = ((j == 'left' ? "marginLeft" : '') + (j == 'right' ? ' ' + "marginRight" : '') + (' ' + "_4_8i"));
      return (g.createElement("div", {
        className: k
      }, this.props.children));
    }
  });
  e.exports = i;
}, null);
__d("SpotlightViewerBottomBarLink", ["Link.react", "React", "cx"], function(a, b, c, d, e, f, g, h, i) {
  var j = h.createClass({
    displayName: "SpotlightViewerBottomBarLink",
    render: function() {
      return (h.createElement(g, h.__spread({}, this.props, {
        className: "_4_8j _4_8k"
      }), this.props.children));
    }
  });
  e.exports = j;
}, null);
__d("SpotlightViewerPagers", ["LeftRight.react", "Link.react", "React", "cx"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = i.createClass({
    displayName: "SpotlightViewerPagers",
    render: function() {
      return (i.createElement(g, null, i.createElement(h, {
        className: "_4-oa _4-ob _50-m"
      }), i.createElement(h, {
        className: "_4-oa _4-oc _50-m"
      })));
    }
  });
  e.exports = k;
}, null);
__d("SpotlightViewerPageWithKeys", ["KeyEventController", "SubscriptionsHandler"], function(a, b, c, d, e, f, g, h) {
  function i(j) {
    "use strict";
    this.$SpotlightViewerPageWithKeys0 = j;
  }
  i.prototype.enable = function() {
    "use strict";
    this.$SpotlightViewerPageWithKeys1 = new h();
    this.$SpotlightViewerPageWithKeys1.addSubscriptions(g.registerKey('LEFT', function() {
      this.$SpotlightViewerPageWithKeys0.viewState.backward();
      return false;
    }.bind(this)), g.registerKey('RIGHT', function() {
      this.$SpotlightViewerPageWithKeys0.viewState.forward();
      return false;
    }.bind(this)));
  };
  i.prototype.disable = function() {
    "use strict";
    this.$SpotlightViewerPageWithKeys1.release();
    delete this.$SpotlightViewerPageWithKeys1;
  };
  e.exports = i;
}, null);
__d("SpotlightViewerThumbnailMixin", ["PhotoStore", "Vector"], function(a, b, c, d, e, f, g, h) {
  var i = {
    _getInitialPhotoData: function() {
      var j = g.getIndexForID(this.props.setid, this.props.photoid),
        k = g.getByIndexImmediate(this.props.setid, j);
      return k ? k : this._getThumbnailPhotoData();
    },
    _getThumbnailPhotoData: function() {
      if (!this.props.dimensions || !this.props.thumbsrc) return null;
      var j = {
        id: this.props.photoid
      };
      for (var k = 0; k < this.props.dimensions.length; ++k) {
        var l = h.deserialize(this.props.dimensions[k]);
        j['image' + k] = {
          width: l.x,
          height: l.y,
          uri: this.props.thumbsrc
        };
      }
      return j;
    }
  };
  e.exports = i;
}, null);
__d("XMessagingPhotoDownloadController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/mercury\/attachments\/photo\/", {
    photo_id: {
      type: "String",
      required: true
    }
  });
}, null);
__d("SpotlightMessagesViewer", ["ArbiterMixin", "MercuryConfig", "MessagingForwardAttachmentDialog.react", "PageTransitions", "React", "ReactLayeredComponentMixin", "SpotlightViewer", "SpotlightViewerAutoResize", "SpotlightViewerBehaviorsMixin", "SpotlightViewerBottomBar", "SpotlightViewerBottomBarGroup", "SpotlightViewerBottomBarLink", "SpotlightViewerClose", "SpotlightViewerCoreMixin", "SpotlightViewerDimensionMixin", "SpotlightViewerPagers", "SpotlightViewerPageWithKeys", "SpotlightViewerThumbnailMixin", "SpotlightViewport", "SubscriptionsHandler", "XMessagingPhotoDownloadController", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba) {
  var ca = k.createClass({
    displayName: "SpotlightMessagesViewer",
    mixins: [g, l, o, t, x, u],
    behaviors: [w, n],
    componentWillUnmount: function() {
      this._subscriptions && this._subscriptions.release();
      this._subscriptions = null;
    },
    getViewerID: function() {
      return this.props.setid;
    },
    getInitialState: function() {
      this._subscriptions = new z();
      return {
        photoData: this._getInitialPhotoData(),
        open: true,
        showForward: false
      };
    },
    _enableSubscriptions: function() {
      this.props.useloadingindicator && this._subscriptions.addSubscriptions(this.viewState.subscribe('photo_fetch', this.setState.bind(this, {
        photoData: null
      }, null)));
    },
    _showForwardDialog: function() {
      this.setState({
        showForward: true
      });
    },
    _hideForwardDialog: function() {
      this.setState({
        showForward: false
      });
    },
    renderLayers: function() {
      var da = ("Send this photo to friends");
      return {
        forwardDialog: (k.createElement(i, {
          attachmentID: String(this.state.photoData.id),
          onClose: this._hideForwardDialog,
          shown: this.state.showForward,
          title: da
        }))
      };
    },
    render: function() {
      var da = this.getMedia(),
        ea = this.getStageDimensions(),
        fa = this.props.useloadingindicator && !this.state.photoData;
      j.registerCompletionCallback(function() {
        if (this.state.open) this.close();
        return true;
      }.bind(this));
      return (k.createElement(m, {
        rootClassName: this.props.rootClassName,
        open: this.state.open,
        onHide: this.close
      }, k.createElement(y, {
        onClick: this._onClickViewport,
        stageDimensions: ea,
        media: da,
        snapToPhoto: this.props.snapToPhoto,
        showLoadingIndicator: fa
      }, k.createElement(s, {
        onClick: this.close
      }), this.props.disablepaging ? null : k.createElement(v, null), this._renderBottomBar())));
    },
    _renderBottomBar: function() {
      var da = h.ForwardingEnabled ? k.createElement(r, {
          onClick: this._showForwardDialog
        }, "Send") : null,
        ea = aa.getURIBuilder().setString('photo_id', String(this.state.photoData.id)).getURI();
      return (k.createElement(p, null, k.createElement(q, null), k.createElement(q, null, da, k.createElement(r, {
        rel: "async",
        ajaxify: ea
      }, "Download"))));
    }
  });
  e.exports = ca;
}, null);
__d("MessagesViewer", ["AsyncRequest", "DOM", "MessagesViewerSetID", "PhotoStore", "React", "SpotlightMessagesViewer", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = {
    bootstrapWithElem: function(o) {
      n.bootstrapWithConfig({
        fbid: o.getAttribute('data-fbid'),
        dimensions: o.getAttribute('data-dimensions'),
        src: o.getAttribute('href'),
        endpoint: o.getAttribute('data-endpoint'),
        disablePaging: o.getAttribute('data-disablepaging')
      }, o);
    },
    bootstrapWithConfig: function(o, p) {
      var q = o.setID;
      if (!q) q = i.MESSAGES;
      var r = k.createElement(l, {
        open: true,
        setid: q,
        rootClassName: o.rootClassName,
        snapToPhoto: o.snapToPhoto,
        photoid: o.fbid,
        thumbsrc: o.src,
        dimensions: [o.dimensions],
        disablepaging: o.disablePaging,
        reverse: false
      });
      n.render(r);
      if (!j.hasBeenCreated(q) && o.endpoint) {
        var s = new g(o.endpoint);
        if (p) s.setRelativeTo(p);
        s.send();
      }
    },
    render: function(o) {
      var p = m('messages_viewer');
      if (!p) {
        p = h.create('div', {
          id: 'messages_viewer'
        });
        document.body.appendChild(p);
      }
      o = k.render(o, p);
      o.subscribeOnce('close', function() {
        k.unmountComponentAtNode(p);
      });
    }
  };
  e.exports = n;
}, null);
__d("XMessagingVideoAttachmentController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/mercury\/attachments\/video\/", {
    video_id: {
      type: "String",
      required: true
    },
    video_container_id: {
      type: "String",
      required: true
    },
    width: {
      type: "Int",
      required: true
    },
    height: {
      type: "Int",
      required: true
    }
  });
}, null);
__d("MessagingVideoViewer.react", ["ActorURI", "ArbiterMixin", "AsyncRequest", "MercuryConfig", "MessagingForwardAttachmentDialog.react", "React", "ReactLayeredComponentMixin", "SpotlightViewer", "SpotlightViewerBottomBar", "SpotlightViewerBottomBarGroup", "SpotlightViewerBottomBarLink", "SpotlightViewerClose", "SpotlightViewport", "PageTransitions", "PhotoViewerDimensions", "XMessagingVideoAttachmentController", "Vector", "cx", "fbt", "guid"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
  var aa = 200,
    ba = l.createClass({
      displayName: "MessagingVideoViewer",
      propTypes: {
        pageID: l.PropTypes.number,
        rootClassName: l.PropTypes.string,
        videoSize: l.PropTypes.instanceOf(w).isRequired,
        videoID: l.PropTypes.string.isRequired,
        videoURI: l.PropTypes.string.isRequired
      },
      mixins: [h, m],
      getInitialState: function() {
        var ca = new u({
          verticalPadding: aa
        });
        return {
          dimensions: ca.getStageDimensions(this.props.videoSize),
          loading: true,
          open: true,
          showForward: false
        };
      },
      componentWillMount: function() {
        this._domID = z();
      },
      componentDidMount: function() {
        this._loadVideoPlayer();
        t.registerCompletionCallback(function() {
          this.close();
          return true;
        }.bind(this));
      },
      _loadVideoPlayer: function() {
        var ca = v.getURIBuilder().setString('video_id', this.props.videoID).setString('video_container_id', this._domID).setInt('width', this.state.dimensions.x).setInt('height', this.state.dimensions.y).getURI();
        if (this.props.pageID) ca = g.create(ca, this.props.pageID);
        this.request = new i().setMethod('GET').setURI(ca).setReadOnly(true).setHandler(function(da) {
          return this.setState({
            loading: false
          });
        }.bind(this)).send();
      },
      close: function() {
        if (!this.state.open) return;
        this.setState({
          open: false
        }, function() {
          this.inform('close');
        });
      },
      _showForwardDialog: function() {
        this.setState({
          showForward: true
        });
      },
      _hideForwardDialog: function() {
        this.setState({
          showForward: false
        });
      },
      renderLayers: function() {
        var ca = ("Send this video to friends");
        return {
          forwardDialog: (l.createElement(k, {
            attachmentID: this.props.videoID,
            onClose: this._hideForwardDialog,
            shown: this.state.showForward,
            title: ca
          }))
        };
      },
      render: function() {
        var ca = l.createElement("div", {
            className: "rfloat",
            id: this._domID
          }),
          da = j.ForwardingEnabled ? l.createElement(q, {
            onClick: this._showForwardDialog
          }, "Send") : null;
        return (l.createElement(n, {
          onHide: this.close,
          open: this.state.open,
          rootClassName: this.props.rootClassName
        }, l.createElement(s, {
          className: "_39hc",
          media: ca,
          showLoadingIndicator: this.state.loading,
          stageDimensions: this.state.dimensions
        }, l.createElement(r, {
          onClick: this.close
        }), l.createElement(o, {
          className: "stat_elem"
        }, l.createElement(p, null), l.createElement(p, null, da, l.createElement(q, {
          href: this.props.videoURI
        }, "Download"))))));
      }
    });
  e.exports = ba;
}, null);
__d("MercuryAttachmentVideo.react", ["CenteredContainer.react", "FBOverlayBase.react", "FBOverlayContainer.react", "FBOverlayElement.react", "Image.react", "React", "MessagesViewer", "MessagingVideoViewer.react", "Vector", "cx", "ix"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  var r = l.createClass({
    displayName: "MercuryAttachmentVideo",
    propTypes: {
      duration: l.PropTypes.number.isRequired,
      name: l.PropTypes.string.isRequired,
      pageID: l.PropTypes.number,
      thumbSize: l.PropTypes.shape({
        height: l.PropTypes.number,
        width: l.PropTypes.number
      }).isRequired,
      thumbnail: l.PropTypes.string.isRequired,
      videoSize: l.PropTypes.shape({
        height: l.PropTypes.number,
        width: l.PropTypes.number
      }).isRequired,
      videoID: l.PropTypes.string.isRequired,
      videoURI: l.PropTypes.string.isRequired
    },
    _formatDuration: function() {
      var s = this.props.duration,
        t = Math.floor(s / 60),
        u = s % 60;
      if (u < 10) return t + ':0' + u;
      return t + ':' + u;
    },
    openViewer: function() {
      var s = new o(this.props.videoSize.width, this.props.videoSize.height);
      m.render(l.createElement(n, {
        pageID: this.props.pageID,
        videoID: this.props.videoID,
        videoSize: s,
        videoURI: this.props.videoURI
      }));
    },
    render: function() {
      var s = (("_zow") + (' ' + "_59go"));
      return (l.createElement(i, {
        className: s,
        onClick: this.openViewer,
        style: this.props.thumbSize
      }, l.createElement(j, null, l.createElement("div", {
        className: "_zox"
      }, l.createElement("span", {
        className: "_zoz"
      }, this._formatDuration()))), l.createElement(j, null, l.createElement(g, {
        vertical: true
      }, l.createElement(k, {
        src: q('/images/chat/chat_play_icon.png')
      }))), l.createElement(h, null, l.createElement(k, {
        height: this.props.thumbSize.height,
        width: this.props.thumbSize.width,
        src: this.props.thumbnail
      }))));
    }
  });
  e.exports = r;
}, null);
__d("XUIBadge.react", ["React", "cx", "invariant", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
  function k(m) {
    return parseInt(m, 10) === m;
  }
  var l = g.createClass({
    displayName: "XUIBadge",
    propTypes: {
      type: g.PropTypes.oneOf(['regular', 'special']),
      count: g.PropTypes.number.isRequired,
      maxcount: g.PropTypes.number
    },
    getDefaultProps: function() {
      return {
        type: 'regular',
        maxcount: 20
      };
    },
    render: function() {
      var m = this.props.type,
        n = this.props.count,
        o = this.props.maxcount;
      i(k(n));
      i(k(o));
      var p = (("_5ugh") + (n > o ? ' ' + "_5ugi" : '') + (m === 'regular' ? ' ' + "_5ugf" : '') + (m === 'special' ? ' ' + "_5ugg" : '') + (n === 0 ? ' ' + "hidden_elem" : ''));
      return (g.createElement("span", g.__spread({}, this.props, {
        className: j(this.props.className, p),
        type: null
      }), n > o ? o + '+' : n));
    }
  });
  e.exports = l;
}, null);
__d("updatePhotoProgressBar", [], function(a, b, c, d, e, f) {
  'use strict';

  function g(h, event) {
    if (event.loaded != event.total) {
      h.setPosition(50 * event.loaded / event.total);
    } else {
      h.setPosition(50);
      h.setTarget(100, 2000);
    }
  }
  e.exports = g;
}, null);
__d("Dock", ["Event", "shield", "Arbiter", "ArbiterMixin", "ChatQuietLinks", "CSS", "DataStore", "DOM", "Parent", "Style", "Toggler", "Vector", "copyProperties", "csx", "emptyFunction", "WebMessengerWidthControl"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
  b('WebMessengerWidthControl');

  function v() {}
  s(v, j, {
    MIN_HEIGHT: 140,
    INITIAL_FLYOUT_HEIGHT_OFFSET: 10,
    init: function(w) {
      this.init = u;
      this.rootEl = w;
      this.calculateViewportDimensions();
      this.calculateFlyoutHeightOffset();
      k.removeEmptyHrefs(this.rootEl);
      g.listen(w, 'click', this._onClick.bind(this));
      g.listen(window, 'resize', this._onWindowResize.bind(this));
      q.subscribe(['show', 'hide'], function(x, y) {
        var z = y.getActive();
        if (!n.contains(w, z)) return;
        if (l.hasClass(z, 'fbNub')) {
          this.notifyNub(z, x);
          if (x === 'show') this._resizeNubFlyout(z);
        } else {
          var aa = o.byClass(z, 'fbNubFlyout');
          if (aa) l.conditionClass(aa, 'menuOpened', x === 'show');
        }
      }.bind(this));
      this.inform('init', {}, i.BEHAVIOR_PERSISTENT);
    },
    calculateViewportDimensions: function() {
      return (this.viewportDimensions = r.getViewportDimensions());
    },
    calculateFlyoutHeightOffset: function() {
      this.flyoutHeightOffset = this.INITIAL_FLYOUT_HEIGHT_OFFSET + r.getElementDimensions(this.rootEl).y;
      var w = n.scry(document, "div._4f7n")[0];
      if (w) {
        var x = p.isFixed(w) ? 'viewport' : 'document';
        this.flyoutHeightOffset += r.getElementPosition(w, x).y + r.getElementDimensions(w).y;
      }
    },
    toggle: function(w) {
      var x = this._findFlyout(w);
      if (!x) return;
      this.subscribe('init', function() {
        q.toggle(w);
      });
    },
    show: function(w) {
      this.subscribe('init', function() {
        q.show(w);
      });
    },
    showNub: function(w) {
      l.show(w);
    },
    hide: function(w) {
      this.subscribe('init', function() {
        var x = q.getInstance(w);
        n.contains(w, x.getActive()) && x.hide();
      });
    },
    hideNub: function(w) {
      l.hide(w);
      this.hide(w);
    },
    setUseMaxHeight: function(w, x) {
      l.conditionClass(w, 'maxHeight', x !== false);
      this._resizeNubFlyout(w);
    },
    _resizeNubFlyout: function(w) {
      var x = this._findFlyout(w);
      if (!x || !(l.hasClass(w, 'openToggler') || l.hasClass(w, 'opened'))) return;
      var y = n.find(x, 'div.fbNubFlyoutOuter'),
        z = n.find(y, 'div.fbNubFlyoutInner'),
        aa = n.find(z, 'div.fbNubFlyoutBody'),
        ba = aa.scrollTop,
        ca = aa.offsetHeight;
      p.set(aa, 'height', 'auto');
      var da = r.getElementDimensions(x),
        ea = r.getElementDimensions(aa),
        fa = this.getMaxFlyoutHeight(w);
      p.set(x, 'max-height', fa + 'px');
      p.set(y, 'max-height', fa + 'px');
      da = r.getElementDimensions(x);
      var ga = r.getElementDimensions(z),
        ha = ga.y - ea.y,
        ia = da.y - ha,
        ja = parseInt(aa.style.height || aa.clientHeight, 10),
        ka = ia !== ja;
      if (da.y > ha && ka) p.set(aa, 'height', ia + 'px');
      l.removeClass(x, 'swapDirection');
      var la = r.getElementPosition(x).x;
      l.conditionClass(x, 'swapDirection', function() {
        if (la < 0) return true;
        return (la + da.x > this.viewportDimensions.x);
      }.bind(this)());
      if (ka && ba + ca >= ea.y) {
        aa.scrollTop = aa.scrollHeight;
      } else aa.scrollTop = ba;
      this.notifyNub(w, 'resize');
    },
    getMaxFlyoutHeight: function(w) {
      var x = this._findFlyout(w),
        y = r.getElementPosition(x, 'viewport'),
        z = r.getElementDimensions(x),
        aa = Math.max(this.MIN_HEIGHT, this.viewportDimensions.y - this.flyoutHeightOffset) - (this.viewportDimensions.y - y.y - z.y);
      return Math.max(aa, 0);
    },
    resizeAllFlyouts: function() {
      var w = this._getAllNubs(),
        x = w.length;
      while (x--) this._resizeNubFlyout(w[x]);
    },
    hideAllFlyouts: function() {
      var w = this._getAllNubs(),
        x = w.length;
      while (x--) this.hide(w[x]);
    },
    _getAllNubs: function() {
      var w = n.scry(this.rootEl, "div._50-v.openToggler");
      return w.concat(n.scry(this.rootEl, "div._50-v.opened"));
    },
    _onClick: function(event) {
      var w = event.getTarget(),
        x = o.byClass(w, 'fbNub');
      if (x) {
        if (o.byClass(w, 'fbNubFlyoutTitlebar')) {
          var y = o.byTag(w, 'a'),
            z = w.nodeName == 'INPUT' && w.getAttribute('type') == 'submit';
          if (!y && !z) {
            this.hide(x);
            return false;
          }
        }
        this.notifyNub(x, 'click');
      }
    },
    _onWindowResize: function(event) {
      this.calculateViewportDimensions();
      this.resizeAllFlyouts();
    },
    _findFlyout: function(w) {
      return l.hasClass(w, 'fbNubFlyout') ? w : n.scry(w, 'div.fbNubFlyout')[0] || null;
    },
    registerNubController: function(w, x) {
      m.set(w, 'dock:nub:controller', x);
      x.subscribe('nub/button/content-changed', h(this.inform, this, 'resize', w));
      x.subscribe('nub/flyout/content-changed', h(this._resizeNubFlyout, this, w));
    },
    unregisterNubController: function(w) {
      m.remove(w, 'dock:nub:controller');
    },
    notifyNub: function(w, x, y) {
      var z = m.get(w, 'dock:nub:controller');
      z && z.inform(x, y);
    }
  });
  e.exports = a.Dock || v;
}, null);
__d("DropdownContextualHelpLink", ["DOM", "ge"], function(a, b, c, d, e, f, g, h) {
  var i = {
    set: function(j) {
      var k = h('navHelpCenter');
      if (k !== null) g.replace(k, j);
    }
  };
  e.exports = i;
}, null);
__d("WaterfallIDGenerator", ["CurrentUser", "md5"], function(a, b, c, d, e, f, g, h) {
  function i() {
    var l = 2147483647;
    return Math.random() * l;
  }

  function j() {
    return Math.floor(Date.now() / 1000);
  }
  var k = {
    generate: function() {
      return h([g.getID(), j(), i()].join(':'));
    }
  };
  e.exports = k;
}, null);
__d("FileFormResetOnSubmit", ["DOMQuery", "Event", "emptyFunction"], function(a, b, c, d, e, f, g, h, i) {
  function j(l, m) {
    var n = h.listen(l, 'change', i.thatReturnsFalse, h.Priority.URGENT);
    try {
      m();
    } catch (o) {
      throw o;
    } finally {
      n.remove();
    }
  }

  function k(l) {
    "use strict";
    this._form = l;
  }
  k.prototype.enable = function() {
    "use strict";
    var l = this._reset.bind(this);
    this._subscription = this._form.subscribe('submit', function() {
      setTimeout(l, 0);
    });
  };
  k.prototype.disable = function() {
    "use strict";
    this._subscription.unsubscribe();
    this._subscription = null;
  };
  k.prototype._reset = function() {
    "use strict";
    var l = this._form.getRoot();
    j(l, function() {
      var m = g.scry(l, 'input[type="file"]');
      m.forEach(function(n) {
        n.value = '';
      });
    });
  };
  e.exports = k;
}, null);
__d("FormSubmitOnChange", ["Event", "copyProperties", "submitForm"], function(a, b, c, d, e, f, g, h, i) {
  function j(k) {
    "use strict";
    this._form = k;
  }
  j.prototype.enable = function() {
    "use strict";
    this._listener = g.listen(this._form.getRoot(), 'change', this._submit.bind(this));
  };
  j.prototype.disable = function() {
    "use strict";
    this._listener.remove();
    this._listener = null;
  };
  j.prototype._submit = function() {
    "use strict";
    i(this._form.getRoot());
  };
  h(j.prototype, {
    _listener: null
  });
  e.exports = j;
}, null);
__d("MercuryFileUploader", ["ArbiterMixin", "CSS", "Dialog", "DOM", "Event", "FileForm", "FileFormResetOnSubmit", "FileInput", "FormSubmitOnChange", "MercuryAttachment", "MercuryAttachmentTemplates", "MercuryConstants", "PhotosUploadID", "SubscriptionsHandler", "csx", "fbt", "getObjectValues", "mixin", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
  var z = x(g);
  for (var aa in z)
    if (z.hasOwnProperty(aa)) ca[aa] = z[aa];
  var ba = z === null ? null : z.prototype;
  ca.prototype = Object.create(ba);
  ca.prototype.constructor = ca;
  ca.__superConstructor__ = z;

  function ca(ea, fa, ga, ha) {
    "use strict";
    this.$MercuryFileUploader0 = ea;
    this.$MercuryFileUploader1 = {};
    this.$MercuryFileUploader2 = {};
    this.$MercuryFileUploader3 = {};
    this.$MercuryFileUploader4 = {};
    this.$MercuryFileUploader5 = {};
    this.$MercuryFileUploader6 = {};
    this.$MercuryFileUploader7 = {};
    this.$MercuryFileUploader8 = {};
    this.updateElements(fa, ga, ha);
  }
  ca.prototype.updateElements = function(ea, fa, ga) {
    "use strict";
    this.$MercuryFileUploader9 && this.$MercuryFileUploader9.release();
    this.$MercuryFileUploader9 = new t();
    this.$MercuryFileUploadera && this.$MercuryFileUploadera.destroy();
    this.$MercuryFileUploadera = new l(ea, [o, m]);
    this.$MercuryFileUploadera.setAllowCrossOrigin(true);
    this.$MercuryFileUploadera.setUploadInParallel(true);
    var ha = j.find(ea, "._4q60"),
      ia = j.find(ha, "._4q61");
    new n(ha, ia, fa);
    this.$MercuryFileUploader9.addSubscriptions(this.$MercuryFileUploadera.subscribe('submit', function() {
      var ja = {
        count: 0,
        file_sizes: []
      };
      if (fa.files) {
        for (var ka = 0; ka < fa.files.length; ka++)
          if (fa.files[ka].size > r.AttachmentMaxSize) {
            this.showAttachmentSizeErrorDialog();
            return false;
          }
        var la = {};
        for (var ma = 0; ma < fa.files.length; ma++) {
          var na = this.$MercuryFileUploaderb();
          this.$MercuryFileUploaderc(na, fa.files[ma].name);
          ja.count++;
          ja.file_sizes.push(fa.files[ma].size);
          la[na] = fa.files[ma];
        }
        this.$MercuryFileUploadera.setFiles(la);
      } else {
        ga.value = this.$MercuryFileUploaderb();
        this.$MercuryFileUploaderc(ga.value, fa.value);
        ja.count = 1;
      }
      this.inform('submit', ja);
    }.bind(this)), this.$MercuryFileUploadera.subscribe('success', this.$MercuryFileUploaderd.bind(this)), this.$MercuryFileUploadera.subscribe('failure', this.$MercuryFileUploadere.bind(this)), k.listen(ia, 'click', y(this.inform, this, 'open')));
  };
  ca.prototype.showAttachmentSizeErrorDialog = function() {
    "use strict";
    this.$MercuryFileUploadera.abort();
    this.$MercuryFileUploadera.clear();
    new i().setTitle("The file you have selected is too large").setBody("The file you have selected is too large. The maximum size is 25MB.").setButtons(i.OK).setSemiModal(true).show();
  };
  ca.prototype.addDroppedFiles = function(ea) {
    "use strict";
    if (!this.$MercuryFileUploadera || !this.$MercuryFileUploadera.canUseXHR()) return;
    var fa = {},
      ga = {
        count: 0,
        file_sizes: []
      };
    for (var ha = 0; ha < ea.length; ha++) {
      var ia = ea[ha];
      if (ia.size > r.AttachmentMaxSize) {
        this.showAttachmentSizeErrorDialog();
        return false;
      }
      var ja = this.$MercuryFileUploaderb();
      this.$MercuryFileUploaderc(ja, ia.name);
      fa[ja] = ia;
      ga.file_sizes.push(ia.size);
      ga.count++;
    }
    this.$MercuryFileUploadera.setFiles(fa);
    this.$MercuryFileUploadera.forceSendViaXHR();
    this.inform('submit', ga);
  };
  ca.prototype.isUploading = function() {
    "use strict";
    return !!Object.keys(this.$MercuryFileUploader6).length;
  };
  ca.prototype.addCachedAttachments = function(ea) {
    "use strict";
    ea.forEach(function(fa) {
      var ga = this.$MercuryFileUploaderb();
      this.$MercuryFileUploaderc(ga, fa.filename);
      this.$MercuryFileUploaderf(ga, fa);
    }.bind(this));
  };
  ca.prototype.addCachedImageFiles = function(ea) {
    "use strict";
    var fa = "Photo";
    ea.forEach(function(ga) {
      var ha = this.$MercuryFileUploaderb();
      this.$MercuryFileUploaderc(ha, fa);
      this.$MercuryFileUploaderf(ha, {
        filename: ga,
        image_id: ga,
        filetype: 'image/jpeg'
      });
    }.bind(this));
  };
  ca.prototype.getAttachments = function() {
    "use strict";
    return w(this.$MercuryFileUploader1);
  };
  ca.prototype.getImageFiles = function() {
    "use strict";
    var ea = Object.keys(this.$MercuryFileUploader2).sort(),
      fa = [];
    ea.forEach(function(ga) {
      return fa.push(this.$MercuryFileUploader2[ga]);
    }.bind(this));
    return fa;
  };
  ca.prototype.getVideoFiles = function() {
    "use strict";
    return w(this.$MercuryFileUploader3);
  };
  ca.prototype.getAudioFiles = function() {
    "use strict";
    return w(this.$MercuryFileUploader4);
  };
  ca.prototype.getFiles = function() {
    "use strict";
    return w(this.$MercuryFileUploader5);
  };
  ca.prototype.removeAttachments = function() {
    "use strict";
    j.empty(this.$MercuryFileUploader0);
    this.$MercuryFileUploader1 = {};
    this.$MercuryFileUploader2 = {};
    this.$MercuryFileUploader3 = {};
    this.$MercuryFileUploader4 = {};
    this.$MercuryFileUploader5 = {};
    this.$MercuryFileUploader7 = {};
    this.$MercuryFileUploader6 = {};
    this.$MercuryFileUploader8 = {};
    h.hide(this.$MercuryFileUploader0);
    this.inform('dom-updated');
  };
  ca.prototype.destroy = function() {
    "use strict";
    this.$MercuryFileUploader9 && this.$MercuryFileUploader9.release();
    this.$MercuryFileUploadera && this.$MercuryFileUploadera.destroy();
    this.removeAttachments();
  };
  ca.prototype.$MercuryFileUploaderc = function(ea, fa) {
    "use strict";
    var ga = q[':fb:mercury:upload-file-row'].build();
    this.$MercuryFileUploader7[ea] = ga;
    this.$MercuryFileUploader6[ea] = true;
    this.$MercuryFileUploader8[ea] = Date.now();
    j.appendContent(ga.getNode('iconText'), da(fa));
    k.listen(ga.getNode('closeFileUpload'), 'click', this.$MercuryFileUploaderg.bind(this, ea));
    j.appendContent(this.$MercuryFileUploader0, ga.getRoot());
    h.show(this.$MercuryFileUploader0);
    this.inform('dom-updated');
  };
  ca.prototype.$MercuryFileUploaderg = function(ea, event) {
    "use strict";
    if (this.$MercuryFileUploader6[ea]) {
      this.inform('upload-canceled-during-upload');
    } else if (this.$MercuryFileUploader1[ea] || this.$MercuryFileUploader2[ea] || this.$MercuryFileUploader3[ea] || this.$MercuryFileUploader4[ea] || this.$MercuryFileUploader5[ea]) this.inform('upload-canceled-after-uploaded');
    delete this.$MercuryFileUploader1[ea];
    delete this.$MercuryFileUploader2[ea];
    delete this.$MercuryFileUploader3[ea];
    delete this.$MercuryFileUploader4[ea];
    delete this.$MercuryFileUploader5[ea];
    delete this.$MercuryFileUploader6[ea];
    delete this.$MercuryFileUploader8[ea];
    var fa = this.$MercuryFileUploader7[ea];
    delete this.$MercuryFileUploader7[ea];
    if (fa) {
      j.remove(fa.getRoot());
      this.inform('dom-updated');
    }
    this.inform('upload-canceled');
    return false;
  };
  ca.prototype.$MercuryFileUploaderh = function(ea, fa) {
    "use strict";
    var ga = this.$MercuryFileUploader7[ea],
      ha = p.getAttachIconClassByMime(fa);
    h.addClass(ga.getNode('iconText'), ha);
    h.addClass(ga.getRoot(), 'done');
  };
  ca.prototype.$MercuryFileUploaderf = function(ea, fa) {
    "use strict";
    if (this.$MercuryFileUploader6[ea]) {
      delete this.$MercuryFileUploader6[ea];
      if (fa.image_id) {
        this.$MercuryFileUploader2[ea] = fa.image_id;
      } else if (fa.video_id) {
        this.$MercuryFileUploader3[ea] = fa.video_id;
      } else if (fa.audio_id) {
        this.$MercuryFileUploader4[ea] = fa.audio_id;
      } else if (fa.file_id) {
        this.$MercuryFileUploader5[ea] = fa.file_id;
      } else this.$MercuryFileUploader1[ea] = fa;
      this.$MercuryFileUploaderh(ea, fa.filetype);
      this.inform('one-upload-completed', {
        upload_time_ms: Date.now() - this.$MercuryFileUploader8[ea]
      });
    }
    if (!this.isUploading()) this.inform('all-uploads-completed', {
      count: this.getAttachments().length
    });
  };
  ca.prototype.$MercuryFileUploaderd = function(event, ea) {
    "use strict";
    var fa = ea.response.getPayload();
    this.$MercuryFileUploaderf(this.$MercuryFileUploaderi(ea), fa.metadata[0]);
  };
  ca.prototype.$MercuryFileUploadere = function(event, ea) {
    "use strict";
    this.inform('one-upload-failed');
    this.$MercuryFileUploaderg(this.$MercuryFileUploaderi(ea), event);
  };
  ca.prototype.$MercuryFileUploaderb = function() {
    "use strict";
    return 'upload_' + s.getNewID();
  };
  ca.prototype.$MercuryFileUploaderi = function(ea) {
    "use strict";
    var fa = ea.response.getPayload();
    if (ea.upload) {
      return ea.upload.getName();
    } else return fa.uploadID;
  };

  function da(ea) {
    if (ea && ea.startsWith('C:\\fakepath\\')) return ea.substring(12);
    return ea;
  }
  e.exports = ca;
}, null);
__d("URLScraper", ["ArbiterMixin", "DataStore", "Event", "URLMatcher", "copyProperties", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = 'scraperLastPermissiveMatch',
    n = l(g);
  for (var o in n)
    if (n.hasOwnProperty(o)) q[o] = n[o];
  var p = n === null ? null : n.prototype;
  q.prototype = Object.create(p);
  q.prototype.constructor = q;
  q.__superConstructor__ = n;

  function q(r, s) {
    "use strict";
    this.input = r;
    this.enable();
    this.getValueFn = s;
  }
  q.prototype.reset = function() {
    "use strict";
    h.set(this.input, m, null);
  };
  q.prototype.enable = function() {
    "use strict";
    if (this.events) return;
    var r = function(s) {
      setTimeout(this.check.bind(this, s), 30);
    };
    this.events = i.listen(this.input, {
      paste: r.bind(this, false),
      keydown: r.bind(this, true)
    });
  };
  q.prototype.disable = function() {
    "use strict";
    if (!this.events) return;
    for (var event in this.events) this.events[event].remove();
    this.events = null;
  };
  q.prototype.check = function(r) {
    "use strict";
    var s = this.getValueFn ? this.getValueFn() : this.input.value;
    if (r && q.trigger(s)) return;
    var t = q.match(s),
      u = j.permissiveMatch(s);
    if (u && (u != h.get(this.input, m))) {
      h.set(this.input, m, u);
      this.inform('match', {
        url: t || u,
        alt_url: u
      });
    }
  };
  k(q, j);
  e.exports = q;
}, null);
__d("MercuryShareLinkUploader", ["ArbiterMixin", "AsyncRequest", "CSS", "DOM", "Event", "Form", "URLScraper", "WebMessengerEvents", "mixin", "isEmpty"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var q = o(g);
  for (var r in q)
    if (q.hasOwnProperty(r)) t[r] = q[r];
  var s = q === null ? null : q.prototype;
  t.prototype = Object.create(s);
  t.prototype.constructor = t;
  t.__superConstructor__ = q;

  function t(u, v, w, x, y) {
    "use strict";
    this.$MercuryShareLinkUploader0 = u;
    this.$MercuryShareLinkUploader1 = v;
    this.$MercuryShareLinkUploader2 = w;
    this.$MercuryShareLinkUploader3 = y;
    this.$MercuryShareLinkUploader4 = false;
    this.$MercuryShareLinkUploader5 = null;
    this.$MercuryShareLinkUploader6 = null;
    k.listen(x, 'click', this.close.bind(this));
    k.listen(y, 'keyup', function() {
      !y.value.length && this.$MercuryShareLinkUploader7.enable();
    }.bind(this));
    this.$MercuryShareLinkUploader7 = new m(y);
    this.$MercuryShareLinkUploader7.subscribe('match', function(z, aa) {
      this.loadShare(aa && aa.url);
    }.bind(this));
  }
  t.prototype.getAttachData = function() {
    "use strict";
    return this.loadAttachData(this.$MercuryShareLinkUploader4, this.$MercuryShareLinkUploader0, this.$MercuryShareLinkUploader3);
  };
  t.prototype.getShareDataFromStage = function(u, v) {
    "use strict";
    var w = l.serialize(v),
      x = w.attachment && w.attachment.params;
    if (!x) return null;
    if (x instanceof Object) {
      var y = [];
      y.push(x[0]);
      y.push(x[1]);
      x = y;
    }
    return {
      params: x,
      type: w.attachment.type
    };
  };
  t.prototype.loadAttachData = function(u, v, w, x) {
    "use strict";
    if (u) {
      var y = l.serialize(v),
        z = y.attachment && y.attachment.params,
        aa = y.link_metrics ? y.link_metrics.no_image : true;
      if (!z || p(z)) return null;
      var ba = x ? x() : w.value;
      if (ba.indexOf(z.url) === -1) return y;
      if (!z.summary && !z.favicon && aa && z.title && z.url && z.url.substr(0, z.title.length) === z.title) return null;
      return y;
    }
    return null;
  };
  t.prototype.check = function() {
    "use strict";
    this.$MercuryShareLinkUploader7.check();
  };
  t.prototype.close = function() {
    "use strict";
    this.$MercuryShareLinkUploader8();
    this.$MercuryShareLinkUploader7.disable();
    this.inform('closed');
  };
  t.prototype.clear = function() {
    "use strict";
    this.$MercuryShareLinkUploader8();
    this.$MercuryShareLinkUploader7.enable();
  };
  t.prototype.enable = function() {
    "use strict";
    this.$MercuryShareLinkUploader7.enable();
  };
  t.prototype.disable = function() {
    "use strict";
    this.$MercuryShareLinkUploader7.disable();
  };
  t.prototype.loadShare = function(u) {
    "use strict";
    this.$MercuryShareLinkUploader5 = u;
    this.$MercuryShareLinkUploader6 && this.$MercuryShareLinkUploader6.abort();
    this.$MercuryShareLinkUploader6 = new h().setMethod('POST').setURI('/ajax/share_scrape.php').setData({
      u: u
    }).setHandler(this.$MercuryShareLinkUploader9.bind(this).bind(null, u)).setStatusElement(this.$MercuryShareLinkUploader2);
    this.$MercuryShareLinkUploader6.send();
    this.inform('link-detected');
  };
  t.prototype.$MercuryShareLinkUploader9 = function(u, v) {
    "use strict";
    if (this.$MercuryShareLinkUploader5 !== u) return;
    this.$MercuryShareLinkUploader5 = null;
    this.$MercuryShareLinkUploader6 = null;
    i.show(this.$MercuryShareLinkUploader0);
    j.empty(this.$MercuryShareLinkUploader1);
    j.setContent(this.$MercuryShareLinkUploader1, v.payload);
    this.$MercuryShareLinkUploader4 = true;
    if (!this.getAttachData()) {
      this.close();
      return;
    }
    n.detailDOMChanged();
  };
  t.prototype.$MercuryShareLinkUploader8 = function() {
    "use strict";
    i.hide(this.$MercuryShareLinkUploader0);
    this.$MercuryShareLinkUploader4 = false;
    this.$MercuryShareLinkUploader5 = null;
    this.$MercuryShareLinkUploader6 && this.$MercuryShareLinkUploader6.abort();
    this.$MercuryShareLinkUploader6 = null;
    this.$MercuryShareLinkUploader7.reset();
    n.detailDOMChanged();
  };
  e.exports = t;
}, null);
__d("ChatActivity", ["Event", "Arbiter", "AvailableList", "AvailableListConstants", "JSLogger", "MercuryConfig", "PresenceState", "UserActivity", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = l.activity_limit || 60000,
    q = l.idle_limit || 1800000,
    r = l.idle_poll_interval || 300000,
    s = k.create('chat_activity'),
    t = Date.now(),
    u = t,
    v = true;

  function w() {
    var aa = Date.now();
    return !!(v && (aa - t < p));
  }
  var x = o(new h(), {
    isActive: w
  });

  function y() {
    var aa = t;
    t = Date.now();
    if (t - aa > q) {
      s.debug('idle_to_active', aa);
      m.doSync();
    }
    x.inform('activity');
  }
  i.subscribe(j.ON_AVAILABILITY_CHANGED, function() {
    if (!i.isUserIdle()) u = Date.now();
  });
  g.listen(window, 'focus', function() {
    v = true;
    y();
  });
  g.listen(window, 'blur', function() {
    v = false;
  });
  n.subscribe(function() {
    y();
  });

  function z(aa) {
    var ba = aa && aa.at && m.verifyNumber(aa.at);
    if (typeof ba !== 'number') ba = null;
    return ba || 0;
  }
  setInterval(function() {
    var aa = Date.now(),
      ba = z(m.get()),
      ca = Math.max(t, ba, u);
    if (aa - ca > q) {
      s.debug('idle', {
        cookie: ba,
        local: t,
        presence: u
      });
      x.inform('idle', aa - ca);
    }
  }, r);
  m.registerStateStorer(function(aa) {
    var ba = z(aa);
    if (ba < t) aa.at = t;
    return aa;
  });
  h.subscribe(k.DUMP_EVENT, function(aa, ba) {
    ba.chat_activity = {
      activity_limit: p,
      idle_limit: q,
      idle_poll_interval: r,
      last_active_time: t,
      last_global_active_time: u
    };
  });
  e.exports = x;
}, null);
__d("MercuryNotificationRenderer", ["MercuryAssert", "MercuryParticipants", "MercuryViewer", "fbt", "MercuryMessages", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = b('MercuryMessages').get(),
    l = b('MercuryThreads').get();

  function m(n, o) {
    g.isThreadID(n);
    l.getThreadMeta(n, function(p) {
      k.getThreadMessagesRange(n, 0, 1, function(q) {
        var r = q.length && q[q.length - 1];
        if (r && r.author != i.getID()) {
          h.get(r.author, function(s) {
            if (p.name) {
              o(j._("{senderName} messaged {groupName}", [j.param("senderName", s.short_name), j.param("groupName", p.name)]));
            } else o(j._("{name} messaged you", [j.param("name", s.short_name)]));
          });
        } else o("New message!");
      });
    });
  }
  e.exports = {
    renderDocumentTitle: m
  };
}, null);
__d("MercuryTimestampTracker", ["MercuryActionType", "MercuryPayloadSource", "MercurySingletonMixin", "MercuryServerRequests", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k) {
  function l(m) {
    this._fbid = m;
    this._serverRequests = j.getForFBID(this._fbid);
    this._lastTimestamp = 0;
    this._serverRequests.subscribe('update-messages', function(n, o) {
      if (!o.actions || !o.actions.length) return;
      if (o.payload_source == h.CLIENT_SEND_MESSAGE || o.payload_source == h.UNKNOWN) return;
      for (var p = 0; p < o.actions.length; p++) {
        var q = o.actions[p],
          r = q.action_type;
        if (r == g.USER_GENERATED_MESSAGE && q.thread_id && q.timestamp > this._lastTimestamp) this._lastTimestamp = q.timestamp;
      }
    }.bind(this));
  }
  k(l.prototype, {
    getLastUserMessageTimestamp: function() {
      return this._lastTimestamp;
    }
  });
  k(l, i);
  e.exports = l;
}, null);
__d("ChatTitleBarBlinker", ["ChatActivity", "DocumentTitle", "JSLogger", "MercuryNotificationRenderer", "PresenceState", "MercuryThreadInformer", "MercuryTimestampTracker"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = b('MercuryThreadInformer').get(),
    m = b('MercuryTimestampTracker').get(),
    n = i.create('chat_title'),
    o = null,
    p = 0,
    q = false;

  function r() {
    if (o) {
      o.stop();
      o = null;
      return true;
    }
    return false;
  }

  function s(x) {
    var y = x || m.getLastUserMessageTimestamp();
    if (p <= y) {
      p = y;
      if (r() || q) k.doSync();
    }
  }
  var t = {
    blink: function(x, y) {
      if (!o && p < y) j.renderDocumentTitle(x, function(z) {
        if (!o) o = h.blink(z);
      });
    },
    stopBlinking: function() {
      s();
    },
    blinkingElsewhere: function() {
      q = true;
    }
  };

  function u(x) {
    var y = k.verifyNumber(x.sb2);
    if (!y || y <= p) return null;
    return y;
  }

  function v(x) {
    var y = x && u(x);
    if (y) {
      p = y;
      n.debug('load', p);
      r();
      q = false;
    }
  }

  function w(x) {
    var y = u(x);
    if (!y) {
      n.debug('store', p);
      x.sb2 = p;
      q = false;
    }
    return x;
  }
  k.registerStateStorer(w);
  k.registerStateLoader(v);
  l.subscribe('thread-read-changed', function(x, y) {
    var z = m.getLastUserMessageTimestamp(),
      aa = 0;
    for (var ba in y)
      if (y[ba].mark_as_read && y[ba].timestamp >= z && y[ba].timestamp > aa) aa = y[ba].timestamp;
    aa && s(aa);
  });
  g.subscribe('activity', function() {
    s();
  });
  (function() {
    var x = k.getInitial();
    if (x) p = u(x) || 0;
  })();
  e.exports = t;
}, null);
__d("MercuryBrowserAlerts", ["ArbiterMixin", "ChatActivity", "ChatConfig", "ChatOptions", "ChatTitleBarBlinker", "MercuryThreadMuter", "MercuryViewer", "MessagingTag", "Sound", "copyProperties", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var q = b('MercuryThreads').get();
  o.init(['audio/ogg', 'audio/mpeg']);

  function r(t) {
    if (j.getSetting('sound')) o.play([i.get('sound.notif_ogg_url'), i.get('sound.notif_mp3_url')], t, false);
  }
  var s = {
    messageReceived: function(t) {
      if (m.isViewer(t.author) || !t.is_unread || (t.folder != n.INBOX && t.folder != n.ARCHIVED)) return;
      var u = t.thread_id,
        v = h.isActive();
      if (v) {
        var w = false;
        s.inform('before-alert', {
          threadID: u,
          cancelAlert: function() {
            w = true;
          }
        });
      }
      q.getThreadMeta(u, function(x) {
        var y = l.isThreadMuted(x);
        if (y) return;
        var z = t.timestamp;
        if (v) {
          !w && r(z);
        } else {
          k.blink(u, z);
          r(z);
        }
        k.blinkingElsewhere();
      }.bind(this));
    }
  };
  e.exports = p(s, g);
}, null);
__d("XSkypeDeprecationWarningDialogController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/videocall\/skype_deprecation_warning\/", {
    __asyncDialog: {
      type: "Int"
    }
  });
}, null);
__d("VideoCallSkypeDeprecationWarning", ["AsyncDialog", "AsyncRequest", "CacheStorage", "VideoCallSupport", "XSkypeDeprecationWarningDialogController", "FBRTCLogger", "FBRTCUnsupportedBrowserMessage"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = 'localstorage',
    o = 'RTC_',
    p = 'SKYPE_DEPRECATION_STATE',
    q = 1000 * 60 * 60 * 24;

  function r(s) {
    "use strict";
    this.$VideoCallSkypeDeprecationWarning0 = new i(n, o);
    this.$VideoCallSkypeDeprecationWarning1 = s;
    this.$VideoCallSkypeDeprecationWarning2 = l.getInstance();
  }
  r.prototype.showWarningOrStartCall = function(s, t) {
    "use strict";
    if (j.isSkypeDeprecated()) {
      if (j.isWebrtcSupported()) {
        this.$VideoCallSkypeDeprecationWarning1.makeWebRTCCall(s, t || l.Trigger.CHAT_TAB_ICON);
      } else m.showForOutgoingCall();
    } else if (this.$VideoCallSkypeDeprecationWarning3(s)) {
      this.$VideoCallSkypeDeprecationWarning4(s);
    } else if (this.$VideoCallSkypeDeprecationWarning5(s)) {
      this.$VideoCallSkypeDeprecationWarning1.makeWebRTCCall(s, t || l.Trigger.CHAT_TAB_ICON);
    } else this.$VideoCallSkypeDeprecationWarning1.makeSkypeCall(s);
  };
  r.prototype.$VideoCallSkypeDeprecationWarning5 = function(s) {
    "use strict";
    if (!this.$VideoCallSkypeDeprecationWarning1.canCallByWebrtc(s)) return false;
    if (!j.isPluginInstalled(false)) return true;
    return this.$VideoCallSkypeDeprecationWarning6().optedInToWebRTC;
  };
  r.prototype.$VideoCallSkypeDeprecationWarning3 = function(s) {
    "use strict";
    if (!j.isPluginInstalled(false)) return false;
    var t = this.$VideoCallSkypeDeprecationWarning6();
    return !t.optedInToWebRTC && (Date.now() - t.updatedAt) > q;
  };
  r.prototype.$VideoCallSkypeDeprecationWarning4 = function(s) {
    "use strict";
    this.$VideoCallSkypeDeprecationWarning2.logInfo(s, null, 'Show Deprecation Dialog');
    this.$VideoCallSkypeDeprecationWarning7();
    if (!j.isWebrtcSupported()) {
      m.warnForOutgoingCall(function() {
        this.$VideoCallSkypeDeprecationWarning1.makeSkypeCall(s);
      }.bind(this));
      return;
    }
    var t = k.getURIBuilder().getURI(),
      u = new h(t),
      v = this;
    g.send(u, function(w) {
      w.subscribe('confirm', function() {
        w.hide();
        v.$VideoCallSkypeDeprecationWarning8();
        v.$VideoCallSkypeDeprecationWarning1.makeWebRTCCall(s, l.Trigger.SKYPE_DEPRECATION_DIALOG);
        v.$VideoCallSkypeDeprecationWarning2.logCallAction(s, null, l.CallAction.TRY_NEW);
      });
      w.subscribe('cancel', function() {
        v.$VideoCallSkypeDeprecationWarning1.makeSkypeCall(s);
        v.$VideoCallSkypeDeprecationWarning2.logCallAction(s, null, l.CallAction.START_SKYPE);
      });
    });
  };
  r.prototype.$VideoCallSkypeDeprecationWarning7 = function() {
    "use strict";
    this.$VideoCallSkypeDeprecationWarning0.set(p, {
      optedInToWebRTC: false,
      updatedAt: Date.now()
    });
  };
  r.prototype.$VideoCallSkypeDeprecationWarning8 = function() {
    "use strict";
    this.$VideoCallSkypeDeprecationWarning0.set(p, {
      optedInToWebRTC: true,
      updatedAt: Date.now()
    });
  };
  r.prototype.$VideoCallSkypeDeprecationWarning6 = function() {
    "use strict";
    var s = this.$VideoCallSkypeDeprecationWarning0.get(p);
    if (s) return s;
    return {
      optedInToWebRTC: false,
      updatedAt: 0
    };
  };
  r.prototype.ut_setStorage = function(s) {
    "use strict";
    this.$VideoCallSkypeDeprecationWarning0 = s;
  };
  e.exports = r;
}, null);
__d("VideoCallRecordMessageDialog", ["AsyncDialog", "AsyncRequest", "Dialog", "URI", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = {
    get: function(m, n) {
      var o = "Would you like to leave a message?",
        p = "New Message";
      return new i().setTitle(k._("{firstname} is Unavailable", [k.param("firstname", n)])).setBody(o).setButtons([{
        name: 'record-message',
        label: p
      }, i.CANCEL]).setHandler(function() {
        var q = j('/ajax/messaging/composer.php').setQueryData({
          ids: [m],
          autoloadvideo: true
        }).toString();
        g.send(new h(q));
      });
    }
  };
  e.exports = l;
}, null);
__d("VideoCallCore", ["Event", "Arbiter", "AsyncRequest", "AvailableListConstants", "Bootloader", "ChannelConstants", "Cookie", "CSS", "Dialog", "FBRTCCore", "UserAgent_DEPRECATED", "VideoCallSupport", "VideoCallSkypeDeprecationWarning", "emptyFunction", "ge", "PresenceStatus", "randomInt", "VideoCallUI", "VideoCallIncomingCallController", "VideoCallTemplates", "ShortProfiles", "VideoCallRecordMessageDialog"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
  var x = b('VideoCallUI').module,
    y = b('VideoCallIncomingCallController').module;
  b('VideoCallTemplates');
  var z = [],
    aa = [],
    ba = null,
    ca = false,
    da = {
      mightReloadPostInstall: function() {
        return q.windows();
      },
      onVideoMessage: function(ia) {
        z.push(ia);
        k.loadModules(["VideoCallController"], t);
      },
      onRTCMessage: function(ia) {
        if (r.isReceiveWebrtcSupported() && y) {
          aa.push(ia);
          ea();
        }
      },
      setMessageHandler: function(ia) {
        this.onVideoMessage = ia;
        if (ia)
          while (z.length) ia(z.shift());
      },
      setRTCMessageHandler: function(ia) {
        this.onRTCMessage = ia;
        if (ia)
          while (aa.length) ia(aa.shift());
      },
      availableForCall: function(ia) {
        if (!r.isSkypeDeprecated()) {
          var ja = v.get(ia);
          if (ja === j.ACTIVE) {
            var ka = v.getDetailedActivePresence(ia);
            if (ka === j.ACTIVE_ON_WEB) return true;
          }
        }
        return ga(ia);
      },
      attachListenerToProfileButton: function(ia) {
        var ja = u('videoCallProfileButton');
        if (ja) {
          if (!r.isVideoCallSupported()) {
            n.hide(ja);
            return;
          }
          g.listen(ja, 'click', function(event) {
            da.startCallOrLeaveMessage(ia, 'profile_button_click_timeline');
          });
        }
      },
      startCallOrLeaveMessage: function(ia, ja) {
        if (this.availableForCall(ia)) {
          da.showOutgoingCallDialog(ia, ja);
        } else b('ShortProfiles').get(ia, function(ka) {
          b('VideoCallRecordMessageDialog').get(ia, ka.firstName).show();
        });
      },
      showOutgoingCallDialog: function(ia, ja, ka) {
        if (ca) return;
        ca = true;
        setTimeout(function() {
          ca = false;
        }, 1000);
        da.logClick(ia, (ja || 'unknown'));
        var la = new s(da);
        la.showWarningOrStartCall(ia, ka);
      },
      canCallByWebrtc: function(ia) {
        if (r.isSendWebrtcSupported() && x) return ga(ia);
        return false;
      },
      makeWebRTCCall: function(ia, ja) {
        var ka = parseInt(ia, 10);
        ea();
        var la = fa();
        ba.startingCallTo(ka, la);
        x.openAsCaller(ia, la, ja);
      },
      makeSkypeCall: function(ia) {
        var ja = r.isPluginInstalled() ? 'outgoing_dialog.php' : 'intro.php',
          ka = '/ajax/chat/video/' + ja + '?idTarget=' + ia;
        new o().setAllowCrossPageTransition(true).setAsync(new i(ka).setHandler(t).setServerDialogCancelHandler(t)).show();
      },
      logClick: function(ia, ja) {
        new i().setURI('/ajax/chat/video/log_click.php').setData({
          targetUserID: ia,
          clickSource: ja
        }).setAllowCrossPageTransition(true).setErrorHandler(t).send();
      }
    };

  function ea() {
    if (!ba) ba = new y(da);
  }

  function fa() {
    return w(0, 4294967295);
  }

  function ga(ia) {
    return p.isAvailableForWebrtcCalling(ia);
  }

  function ha() {
    if (!da.mightReloadPostInstall()) return;
    var ia = m.get('vcpwn');
    if (ia) {
      m.clear('vcpwn');
      var ja = m.get('vctid');
      if (ja) {
        m.clear('vctid');
        if (m.get('vctid')) return;
        if (ja && r.isPluginInstalled()) {
          var ka = '/ajax/chat/video/outgoing_dialog.php?idTarget=' + ja;
          new o().setAllowCrossPageTransition(true).setAsync(new i(ka)).show();
        }
      }
    }
  }
  h.subscribe(l.getArbiterType('video'), function(ia, ja) {
    da.onVideoMessage(ja.obj);
  });
  h.subscribe(l.getArbiterType('webrtc'), function(ia, ja) {
    da.onRTCMessage(ja.obj);
  });
  ha();
  if (r.isReceiveWebrtcSupported() && y) ea();
  e.exports = da;
}, null);
__d("ChatAnimatedGifs", ["URI"], function(a, b, c, d, e, f, g) {
  var h = {
    shouldHideBody: function(i) {
      if (!i.has_attachment) return false;
      for (var j = 0; j < i.attachments.length; j++) {
        var k = i.attachments[j];
        if (k.preview_url) {
          var l = h.getRawUrlFromSafeUrl(k.preview_url);
          if (i.body == l) return true;
        }
      }
      return false;
    },
    getRawUrlFromSafeUrl: function(i) {
      return g(i).getQueryData().url;
    }
  };
  e.exports = h;
}, null);
__d("ChatEmployeeAwayWarning", ["MercuryIDs", "MercuryParticipants", "MercuryViewer"], function(a, b, c, d, e, f, g, h, i) {
  var j = {
    updateEmployeeAwayWarning: function(k, l, m) {
      h.get(i.getID(), function(n) {
        var o = n.employee;
        if (o) h.getMulti(k.participants, function(p) {
          var q = false,
            r = g.getUserIDFromThreadID(k.thread_id);
          if (!r) return;
          var s = 'fbid:' + r;
          for (var t in p)
            if (s == p[t].id && p[t].is_employee_away) q = true;
          if (q) {
            l();
          } else m();
        });
      });
    }
  };
  e.exports = j;
}, null);
__d("MercuryShareAttachmentReactShape", ["React"], function(a, b, c, d, e, f, g) {
  'use strict';

  function h() {
    return g.PropTypes.shape({
      description: g.PropTypes.string,
      media: g.PropTypes.shape({
        image: g.PropTypes.string,
        duration: g.PropTypes.number,
        playable: g.PropTypes.bool,
        source: g.PropTypes.string
      }),
      source: g.PropTypes.string,
      style_list: g.PropTypes.arrayOf(g.PropTypes.string),
      title: g.PropTypes.string,
      properties: g.PropTypes.Object,
      uri: g.PropTypes.string
    }).isRequired;
  }
  e.exports = h;
}, null);
__d("MercuryFallbackShareAttachment.react", ["Image.react", "ImageBlock.react", "Link.react", "MercuryShareAttachmentRenderLocations", "MercuryShareAttachmentReactShape", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  'use strict';
  var o = l.createClass({
    displayName: "MercuryFallbackShareAttachment",
    propTypes: {
      attachment: k(),
      body: l.PropTypes.string,
      location: l.PropTypes.oneOf(j.getValues()),
      rootClassName: l.PropTypes.string
    },
    renderLink: function(p) {
      if (j.isPreview(location)) return p;
      return l.createElement(i, {
        href: this.props.attachment.uri
      }, p);
    },
    render: function() {
      var p = this.props.attachment,
        q = this.props.location,
        r = this.props.body,
        s = n(((j.CHAT === q ? "_49or" : '') + (j.CHAT_PREVIEW === q ? ' ' + "_tig" : '') + (' ' + "_tih") + (r ? ' ' + "_r38" : '') + (!(p && p.media) ? ' ' + "_49ou" : '')), this.props.rootClassName),
        t = (l.createElement("div", {
          className: "__6j"
        }, l.createElement("div", {
          className: "__6k"
        }, p.title), l.createElement("div", {
          className: "__6l"
        }, p.description), l.createElement("div", {
          className: "__6m"
        }, p.source)));
      if (p.media && p.media.image) return this.renderLink(l.createElement(h, {
        className: n(this.props.className, s)
      }, l.createElement(g, {
        className: "__6n",
        src: p.media.image,
        width: 68
      }), t, this.props.children));
      return this.renderLink(l.createElement("div", {
        className: n(this.props.className, s)
      }, t, this.props.children));
    }
  });
  e.exports = o;
}, null);
__d("MercuryShareAttachment.react", ["Map", "MercuryShareAttachmentReactShape", "MercuryShareAttachmentRenderLocations", "React", "StoryAttachmentStyle", "MercuryFallbackShareAttachment.react", "OrionMercuryShareAttachment"], function(a, b, c, d, e, f, g, h, i, j, k) {
  'use strict';
  var l = new g();
  l.set(k.FALLBACK, b('MercuryFallbackShareAttachment.react'));
  l.set(k.ORION, b('OrionMercuryShareAttachment').module);
  var m = j.createClass({
    displayName: "MercuryShareAttachment",
    propTypes: {
      attachment: h(),
      location: j.PropTypes.oneOf(i.getValues()),
      rootClassName: j.PropTypes.string
    },
    render: function() {
      var n = this.props.attachment;
      if (!n.style_list) return null;
      var o = null;
      for (var p = 0; p < n.style_list.length; p++) {
        o = l.get(n.style_list[p]);
        if (o) break;
      }
      if (!o) return null;
      return (j.createElement(o, j.__spread({}, this.props)));
    }
  });
  e.exports = m;
}, null);
__d("XStickerPackImagesController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/{pack_id}\/images\/", {
    pack_id: {
      type: "Int",
      required: true
    },
    sticker_size: {
      type: "Int",
      defaultValue: 50
    }
  });
}, null);
__d("XStickersAddPackController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/addpack\/", {
    pack_id: {
      type: "Int"
    },
    size: {
      type: "String"
    },
    redirect_uri: {
      type: "String"
    },
    is_promoted: {
      type: "Bool",
      defaultValue: false
    }
  });
}, null);
__d("XStickersRemovePackController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/removepack\/", {
    pack_id: {
      type: "Int"
    },
    size: {
      type: "String"
    },
    redirect_uri: {
      type: "String"
    }
  });
}, null);
__d("XStickerStateInitialDataController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/state\/", {});
}, null);
__d("XStickerStatePackDataController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/state\/pack\/", {
    pack_id: {
      type: "Int",
      required: true
    }
  });
}, null);
__d("XStickerStateStoreDataController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/state\/store\/", {});
}, null);
__d("XStickerSearchPromotePackController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/search\/promotePack\/", {
    sticker_id: {
      type: "Int",
      required: true
    }
  });
}, null);
__d("XStickerSearchNUXSeenController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/searchNUX\/seen\/", {});
}, null);
__d("XStickerTagDataController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/tag\/data\/", {});
}, null);
__d("XStickerQueryImagesController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/query\/images\/", {
    query: {
      type: "String",
      required: true
    }
  });
}, null);
__d("StickerServerRequests", ["AsyncRequest", "Promise", "XStickerPackImagesController", "XStickersAddPackController", "XStickersRemovePackController", "XStickerStateInitialDataController", "XStickerStatePackDataController", "XStickerStateStoreDataController", "XStickerSearchPromotePackController", "XStickerSearchNUXSeenController", "XStickerTagDataController", "XStickerQueryImagesController"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  'use strict';
  var s = {
    addPack: function(u, v, w) {
      var x = j.getURIBuilder().setInt('pack_id', u).setBool('is_promoted', v).getURI();
      new g(x).setHandler(function(y) {
        return w(y.payload);
      }).send();
    },
    removePack: function(u, v) {
      var w = k.getURIBuilder().setInt('pack_id', u).getURI();
      new g(w).setHandler(function(x) {
        return v(x.payload);
      }).send();
    },
    getStickersForPack: function(u, v) {
      var w = i.getURIBuilder().setInt('pack_id', u).setInt('sticker_size', v).getURI();
      return new h(function(x, y) {
        return new g().setURI(w).setMethod("POST").setHandler(function(z) {
          return x(z.payload);
        }).send();
      });
    },
    getStickersForQuery: function(u, v) {
      new g().setURI(r.getURIBuilder().setString('query', u).getURI()).setMethod("POST").setHandler(function(w) {
        return v(w);
      }).send();
    },
    fetchTrayData: function(u) {
      return t(l.getURIBuilder().getURI(), u, true);
    },
    fetchStoreData: function(u) {
      return t(n.getURIBuilder().getURI(), u);
    },
    fetchPackData: function(u, v) {
      return t(m.getURIBuilder().setInt('pack_id', u).getURI(), v);
    },
    fetchTagData: function(u) {
      return t(q.getURIBuilder().getURI(), u, true);
    },
    markSeenSearchNUX: function() {
      new g(p.getURIBuilder().getURI().toString()).send();
    },
    promotePackSentFromSearch: function(u, v) {
      var w = o.getURIBuilder().setInt('sticker_id', u).getURI();
      t(w, v, true);
    }
  };

  function t(u, v, w) {
    return new h(function(x, y) {
      return new g(u).setHandler(function(z) {
        return x(z.getPayload());
      }).setAllowCrossPageTransition(w).send();
    }).then(v);
  }
  e.exports = s;
}, null);
__d("StickerImages", ["StickerServerRequests"], function(a, b, c, d, e, f, g) {
  'use strict';
  var h = {},
    i = {},
    j = {},
    k = {
      getStickerTagsData: function() {
        return j;
      },
      requestStickersForPack: function(l, m, n) {
        if (!l) return;
        if (!i[l]) {
          i[l] = g.getStickersForPack(l, m);
          i[l].then(function(o) {
            o.forEach(function(p) {
              return this.cacheSticker(p);
            }.bind(this));
          }.bind(this));
        }
        i[l].then(function(o) {
          return n(o);
        });
      },
      cacheSticker: function(l) {
        h[l.id] = l;
      },
      getSticker: function(l) {
        return h[l];
      }
    };
  e.exports = k;
}, null);
__d("StickerUtils", [], function(a, b, c, d, e, f) {
  var g = {
    getScaledDimensions: function(h, i, j) {
      var k, l, m;
      if (i > h) {
        m = j / i;
        k = h * m;
        l = i * m;
      } else {
        m = j / h;
        k = h * m;
        l = i * m;
      }
      return {
        height: Math.round(k),
        width: Math.round(l)
      };
    },
    capitalizeWords: function(h) {
      var i = h.split(" ");
      for (var j = 0; j < i.length; j++) {
        var k = i[j].charAt(0).toUpperCase();
        i[j] = k + i[j].substr(1);
      }
      return i.join(" ");
    }
  };
  e.exports = g;
}, null);
__d("XStickerAssetController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/asset\/", {
    sticker_id: {
      type: "Int",
      required: true
    },
    image_type: {
      type: "Enum",
      defaultValue: "BestEffortImage",
      enumType: 1
    }
  });
}, null);
__d("XLinkshimLogController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/si\/ajax\/l\/render_linkshim_log\/", {
    u: {
      type: "String",
      required: true
    },
    h: {
      type: "String",
      required: true
    },
    render_verification: {
      type: "Bool",
      defaultValue: false
    },
    enc: {
      type: "String"
    },
    d: {
      type: "String"
    }
  });
}, null);
__d("LinkshimHandler", ["Event", "LinkshimAsyncLink", "LinkshimHandlerConfig", "URI", "XLinkshimLogController", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = {
    setUpLinkshimHandling: function(s) {
      try {
        var u = j(s.getAttribute('href')),
          v = n(u);
        if (v && o(u)) {
          g.listen(s, 'mouseover', l(h.swap, null, s, v));
          var w = q(u);
          g.listen(s, 'click', function() {
            if (i.supports_meta_referrer) {
              h.referrer_log(s, w, p(u).toString());
            } else h.swap(s, u);
          });
        }
      } catch (t) {}
    }
  };

  function n(s) {
    return s.getQueryData().u ? new j(s.getQueryData().u) : null;
  }

  function o(s) {
    return s.getQueryData().hasOwnProperty('s');
  }

  function p(s) {
    var t = s.getQueryData().hasOwnProperty('enc') ? s.getQueryData().enc : '';
    return (k.getURIBuilder()).setString('u', s.getQueryData().u).setString('h', s.getQueryData().h).setBool('render_verification', s.getQueryData().hasOwnProperty('render_verification')).setString('enc', t).getURI();
  }

  function q(s) {
    var t;
    if (r()) {
      t = j(s).addQueryData({
        render_verification: true
      });
    } else t = n(s);
    return t;
  }

  function r() {
    var s = i.render_verification_rate || 0;
    return Math.floor(Math.random() * s + 1) === s;
  }
  e.exports = m;
}, null);
__d("MercuryAttachmentRenderer", ["MercuryAttachmentTemplates", "MercuryAttachmentAudioClip.react", "Bootloader", "ChatAnimatedGifs", "SyncRequest.react", "CSS", "MercuryConstants", "DOM", "Event", "MercuryAttachment", "MercuryAttachmentType", "MercuryAttachmentVideo.react", "MercuryConfig", "MercuryIDs", "MercuryParticipants", "MercuryShareAttachment.react", "MercuryShareAttachmentRenderLocations", "MercuryViewer", "ProgressBar", "React", "Sticker.react", "StickerAssetType", "StickerConstants", "StickerImages", "StickerUtils", "Style", "URI", "UserAgent_DEPRECATED", "cx", "fbt", "invariant", "updatePhotoProgressBar", "XStickerAssetController", "OrionMercuryAttachment", "MercuryMessages", "MercuryAttachmentAudioClipTranscript.react"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma) {
  'use strict';
  var na = b('OrionMercuryAttachment').module,
    oa = b('MercuryMessages').get(),
    pa = ha.ie() <= 8;

  function qa(ta, ua) {
    var va = g[ua].build().setNodeContent('filename', ta.name),
      wa = va.getNode('link');
    wa.setAttribute('href', ta.url);
    ta.rel && wa.setAttribute('rel', ta.rel);
    l.addClass(va.getRoot(), p.getAttachIconClass(ta.icon_type));
    return va;
  }

  function ra(ta, ua) {
    var va = g[ua].build().setNodeContent('filename', ta.name);
    l.addClass(va.getRoot(), p.getAttachIconClass(ta.icon_type));
    return va;
  }
  var sa = {
    renderAttachment: function(ta, ua, va, wa, xa, ya) {
      var za = 100,
        ab = ta ? 160 : 400,
        bb = null,
        cb = null,
        db = m.MercurySupportedShareType;
      if (this.isErrorAttachment(ua)) bb = sa.renderError(ua);
      if (this.isShareAttachment(ua) && ua.share) {
        cb = n.create('div');
        z.render(z.createElement(v, {
          attachment: ua.share,
          body: va.body,
          location: w.CHAT
        }), cb);
      }
      if (!cb && this.isShareAttachment(ua) && ua.share_xhp && (ua.share_data_type === db.FB_BROWSE_QUERY || !ta)) cb = sa.renderShareXHP(ua, va.id);
      if (this.isStickerAttachment(ua)) cb = sa.renderSticker(ua, va, ta, ya);
      if (!cb && this.isShareAttachment(ua)) {
        var eb = ua.share_data_type;
        switch (eb) {
          case db.FB_PHOTO:
            cb = sa.renderPreview(ua, va, wa, xa);
            break;
          case db.FB_VIDEO:
            cb = sa.renderVideoThumb(ua);
            break;
          case db.FB_MUSIC_ALBUM:
          case db.FB_SONG:
          case db.FB_PLAYLIST:
          case db.FB_MUSICIAN:
          case db.FB_RADIO_STATION:
            cb = sa.renderMusic(ua);
            break;
          case db.EXTERNAL:
          case db.FB_TEMPLATE:
          case db.FB_SOCIAL_REPORT_PHOTO:
            cb = sa.renderExternalLink(ua);
            break;
          case db.FB_COUPON:
          case db.FB_EVENT:
          case db.FB_SHOERACK_INVITATION:
            cb = sa.renderChatXHP(ua);
            break;
          case db.FB_SOCIAL_RESOLUTION:
          case db.FB_STATUS:
            cb = sa.renderSocialResolution(ua);
            break;
          case db.FB_SYNC_REQUEST:
            cb = sa.renderSyncRequest(ua);
            break;
          case db.FB_OPEN_GRAPH:
            cb = sa.renderOpenGraph(ua);
            break;
          case db.FB_ORION:
            if (na) cb = sa.renderOrionMercuryAttachment(ua, ta);
            break;
          default:
            if (ua.name) cb = sa.renderShareLink(ua, va && va.id, ta);
            break;
        }
      }
      if (!cb && ua.preview_loading) cb = sa.renderPreview(ua, va, wa, xa);
      if (!cb && this.isVideoAttachment(ua)) {
        cb = n.create('div');
        z.render(sa.renderVideo(ua, ta), cb);
      }
      if (!cb && ua.preview_url) cb = sa.renderPreview(ua, va, wa, xa);
      if (!cb && this.isFileAttachment(ua))
        if (ua.metadata && p.isVoiceMessage(ua.metadata.type)) {
          cb = n.create('div');
          var fb = sa.renderAudioClip(ua, va.message_id, za, ab);
          z.render(fb, cb);
        } else cb = ta ? sa.renderFileLink(ua) : sa.renderExtendedFileLink(ua);
      return {
        error: bb,
        content: cb,
        bubblePreferred: this.isBubblePreferred(ua)
      };
    },
    isBubblePreferred: function(ta) {
      return !this.isStickerAttachment(ta) && !this.isSyncRequestAttachment(ta);
    },
    renderError: function(ta) {
      var ua = g[':fb:mercury:attachment:error'].build();
      n.appendContent(ua.getNode('error'), ta.error_msg);
      return ua.getRoot();
    },
    renderSocialResolution: function(ta) {
      var ua = g[':fb:mercury:attachment:social-resolution'].build();
      ua.setNodeContent('post', ta.share_xhp);
      return ua.getRoot();
    },
    renderChatXHP: function(ta) {
      var ua = g[':fb:mercury:attachment:social-resolution'].build();
      ua.setNodeContent('post', ta.chat_xhp);
      return ua.getRoot();
    },
    renderOpenGraph: function(ta) {
      var ua = ta.share_xhp.cloneNode(true);
      if (ha.firefox()) fa.set(ua, 'minWidth', '180px');
      return ua;
    },
    renderExternalLink: function(ta) {
      var ua = g[':fb:mercury:attachment:external-link'].build().setNodeContent('name', ta.name);
      ta.base_url && ua.setNodeContent('shortLink', ta.base_url);
      var va = ua.getNode('preview'),
        wa = ua.getNode('image-link');
      wa.setAttribute('href', ta.url);
      ta.rel && wa.setAttribute('rel', ta.rel);
      if (ta.preview_url) {
        var xa = ua.getNode('preview-image'),
          ya = ta.preview_url,
          za = ga(j.getRawUrlFromSafeUrl(ya));
        if (ta.animated_gif_uri) {
          ya = ga(ta.animated_gif_uri);
          l.addClass(va, "_dri");
          if (ta.name && ta.name.__html == za.toString()) ua.setNodeContent('name', '');
        }
        xa.setAttribute('src', ya);
        l.addClass(va, ta.preview_class);
        l.show(xa);
      } else {
        l.addClass(ua.getRoot(), 'noMedia');
        l.hide(va);
      }
      ua.getNode('name').setAttribute('href', ta.url);
      d(['LinkshimHandler'], function(ab) {
        ab.setUpLinkshimHandling(ua.getNode('name'));
        ab.setUpLinkshimHandling(ua.getNode('image-link'));
      });
      if (ta.rel) ua.getNode('name').setAttribute('rel', ta.rel);
      return ua.getRoot();
    },
    renderFileLink: function(ta) {
      var ua = null;
      if (ta.url === '') {
        ua = ':fb:mercury:attachment:file-name';
        return ra(ta, ua).getRoot();
      } else {
        ua = ':fb:mercury:attachment:file-link';
        return qa(ta, ua).getRoot();
      }
    },
    renderAudioClip: function(ta, ua, va, wa) {
      var xa = ta.metadata.duration / 1000,
        ya = 200;
      if (va && wa)
        if (xa < 5) {
          ya = va;
        } else ya = (1 - Math.pow(10, (xa - 5) / -30)) * (wa - va) + va;
      var za = null;
      if (s.WebMessengerTranscriptRenderGK) {
        var ab = b('MercuryAttachmentAudioClipTranscript.react');
        za = z.createElement(ab, {
          message_id: ua,
          attachment: ta
        });
      }
      return (z.createElement("div", null, z.createElement(h, {
        src: ta.url,
        duration: ta.metadata.duration / 1000,
        showHelp: false,
        width: ya
      }), za));
    },
    renderVideo: function(ta, ua) {
      var va = ua ? ta.metadata.chat_size : ta.metadata.inbox_size,
        wa = ua ? ta.metadata.chat_preview : ta.metadata.inbox_preview,
        xa = ta.metadata.dimensions;
      if (!va) {
        wa = ta.thumbnail_url;
        va = xa = {
          height: ta.preview_height,
          width: ta.preview_width
        };
      }
      return (z.createElement(r, {
        duration: ta.metadata.duration,
        name: ta.name,
        pageID: ta.metadata.pageid,
        thumbSize: va,
        thumbnail: wa,
        videoSize: xa,
        videoID: ta.metadata.fbid,
        videoURI: ta.url
      }));
    },
    renderExtendedFileLink: function(ta) {
      var ua = null;
      if (ta.url === '') {
        ua = ':fb:mercury:attachment:file-name';
        return ra(ta, ua).getRoot();
      }
      ua = ':fb:mercury:attachment:extended-file-link';
      var va = qa(ta, ua);
      if (ta.open_url) {
        var wa = va.getNode('openLinkContainer');
        l.show(wa);
        var xa = va.getNode('openFile');
        xa.setAttribute('href', ta.open_url);
      }
      var ya = va.getNode('downloadFile');
      ya.setAttribute('href', ta.url);
      ta.rel && ya.setAttribute('rel', ta.rel);
      return va.getRoot();
    },
    renderMusic: function(ta) {
      var ua = g[':fb:mercury:attachment:music'].build().setNodeContent('filename', ta.name),
        va = ua.getNode('link');
      va.setAttribute('href', ta.url);
      va.setAttribute('target', '_blank');
      ta.rel && va.setAttribute('rel', ta.rel);
      var wa = ua.getNode('image-link');
      wa.setAttribute('href', ta.url);
      ta.rel && wa.setAttribute('rel', ta.rel);
      var xa = ua.getNode('preview-image');
      xa.setAttribute('src', ta.preview_url);
      l.show(xa);
      l.addClass(ua.getNode('icon_link'), 'MercuryMusicIcon');
      return ua.getRoot();
    },
    renderSyncRequest: function(ta) {
      var ua = k(ta.metadata),
        va = n.create('div');
      z.render(ua, va);
      return va;
    },
    renderOrionMercuryAttachment: function(ta, ua) {
      var va = Object.assign({}, ta.metadata);
      if (!ua) va.theme = 'messages';
      var wa = z.createElement(na, z.__spread({}, va)),
        xa = n.create('div');
      z.render(wa, xa);
      return xa;
    },
    resizeContain: function(ta, ua) {
      var va = ta.width / ta.height,
        wa = ua.width / ua.height;
      if (wa < va) {
        return {
          width: Math.min(ta.height * wa, ua.width),
          height: Math.min(ta.height, ua.height)
        };
      } else return {
        width: Math.min(ta.width, ua.width),
        height: Math.min(ta.width / wa, ua.height)
      };
    },
    renderPreview: function(ta, ua, va, wa) {
      var xa = g[':fb:mercury:attachment:preview'].build(),
        ya = xa.getNode('image-link');
      if (ta) {
        if (ta.url) {
          var za = new ga(ta.url).getQueryData().uri;
          if (za && ta.rel === 'async') {
            ya.setAttribute('href', za);
            ya.setAttribute('ajaxify', ta.url);
          } else ya.setAttribute('href', ta.url);
        }
        ta.rel && ya.setAttribute('rel', ta.rel);
        var ab;
        if (ta.preview_uploading) {
          var bb = xa.getNode('cancel-button-container');
          l.show(bb);
          var cb = xa.getNode('cancel-button'),
            db = o.listen(cb, 'click', function() {
              ta.upload_canceled(ta.upload_id);
              l.hide(xa.getRoot());
              db.remove();
            });
          ta.on_success(function(event, lb) {
            if (lb.upload_id == ta.upload_id) {
              l.hide(bb);
              db.remove();
            }
          });
          var eb = xa.getNode('progress-bar'),
            fb = new y(eb),
            gb = xa.getNode('progress-bar-container');
          ka(ta.upload_id);
          ta.on_progress(function(event, lb) {
            if (lb.upload_id == ta.upload_id) {
              l.removeClass(gb, "_395w");
              l.show(gb);
              la(fb, lb.event);
            }
          });
          if (ta.on_resizing_progress) ta.on_resizing_progress(function(event, lb) {
            if (lb.upload_id == ta.upload_id) {
              l.addClass(gb, "_395w");
              l.show(gb);
              fb.setPosition(100 * lb.event.written / lb.event.total);
            }
          });
          l.addClass(ya, "_57jm");
          if (va >= 176) {
            ab = '/images/photos/dots_large.png';
          } else if (va >= 86) {
            ab = '/images/photos/dots_medium.png';
          } else ab = '/images/photos/dots_small.png';
          fa.set(ya, 'width', va + 'px');
          fa.set(ya, 'max-width', va + 'px');
          if (ta.preview_width && ta.preview_height) fa.set(ya, 'padding-bottom', ((ta.preview_height / ta.preview_width) * 100) + '%');
        } else if (ta.preview_loading) {
          l.addClass(ya, "_5xdv");
          if (wa === 'contain' && ta.preview_width && ta.preview_height) {
            fa.set(ya, 'width', ta.preview_width + 'px');
            fa.set(ya, 'height', ta.preview_height + 'px');
          }
          if (wa === 'cover' && !pa) l.addClass(ya, "_55pj");
        } else if (ta.metadata && ta.metadata.fbid) {
          ab = ga('/ajax/mercury/attachments/photo.php').addQueryData({
            fbid: ta.metadata.fbid,
            request_user_id: ta.metadata.pageid,
            mode: wa,
            width: va,
            height: va
          }).toString();
          var hb = ya.getAttribute('ajaxify');
          ya.removeAttribute('ajaxify');
          ya.removeAttribute('rel');
          o.listen(ya, 'click', function(event) {
            event.prevent();
            i.loadModules(["MessagesViewer"], function(lb) {
              lb.bootstrapWithConfig({
                src: ab,
                endpoint: hb,
                fbid: ta.metadata.fbid,
                dimensions: ta.metadata.dimensions,
                disablePaging: ua && ua.attachments.length == 1
              }, ya);
            });
          });
        } else {
          var ib = ga(ta.preview_url);
          wa && ib.addQueryData({
            mode: wa
          });
          va && ib.addQueryData({
            width: va,
            height: va
          });
          ab = ib.toString();
        }
        var jb = xa.getNode('preview-image');
        if (ab) {
          if (wa === 'contain' && ta.preview_width && ta.preview_height) {
            var kb = sa.resizeContain({
              width: va,
              height: va
            }, {
              width: ta.preview_width,
              height: ta.preview_height
            });
            jb.setAttribute('width', kb.width);
            jb.setAttribute('height', kb.height);
          }
          if (ta.preview_uploading || (wa === 'cover' && !pa)) {
            l.addClass(ya, "_55pj");
            fa.set(ya, 'backgroundImage', 'url(' + ab + ')');
          } else {
            jb.onload = function() {
              jb.removeAttribute('width');
              jb.removeAttribute('height');
            };
            jb.setAttribute('src', ab);
          }
        }
        if (ua) this.renderReportRespondLink(xa.getRoot(), ta, ua.message_id);
      }
      return xa.getRoot();
    },
    renderShareLink: function(ta, ua, va) {
      var wa = g[':fb:mercury:attachment:share-link'].build().setNodeContent('name', ta.name),
        xa = wa.getNode('link');
      xa.setAttribute('href', ta.url);
      ta.rel && xa.setAttribute('rel', ta.rel);
      return wa.getRoot();
    },
    renderVideoThumb: function(ta) {
      var ua = g[':fb:mercury:attachment:video-thumb'].build(),
        va = ua.getNode('thumb');
      va.setAttribute('href', ta.url);
      va.setAttribute('rel', ta.rel);
      var wa = n.find(ua.getRoot(), 'img');
      wa.src = ta.preview_url;
      return ua.getRoot();
    },
    renderShareXHP: function(ta, ua) {
      var va = n.create('div');
      if (ta) {
        n.appendContent(va, ta.share_xhp);
        this.renderReportRespondLink(va, ta, ua);
      }
      return va;
    },
    renderSticker: function(ta, ua, va, wa) {
      var xa = va ? 'chatScrolled/' : 'messengerScrolled/';
      xa += ua.thread_id;
      var ya = n.create('div');
      l.addClass(ya, 'stickerContainer');
      if (!ta.metadata) {
        var za = da.getSticker(ua.sticker_id),
          ab = Object.assign({}, za),
          bb = ea.getScaledDimensions(za.height, za.width, ca.THREAD_SIZE),
          cb = bb.height,
          db = bb.width;
        ab.height = cb;
        ab.width = db;
        ab.stickerID = ua.sticker_id;
        ab.spriteURI = '';
        ab.spriteURI2x = '';
        ab.paddedSpriteURI = '';
        ab.paddedSpriteURI2x = '';
        ta.metadata = ab;
      }
      var eb = null;
      if (ta.metadata.stickerID) eb = ta.metadata.stickerID.toString();
      var fb = null;
      if (ta.metadata.packID) fb = ta.metadata.packID.toString();
      var gb = ma.getURIBuilder().setInt('sticker_id', eb),
        hb = null,
        ib = null;
      if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        ib = ta.metadata.paddedSpriteURI2x;
        hb = ta.metadata.spriteURI2x;
      } else {
        ib = ta.metadata.paddedSpriteURI;
        hb = ta.metadata.spriteURI;
      }
      var jb = z.createElement(aa, {
        animationTrigger: "hover",
        className: "mvs",
        frameCount: ta.metadata.frameCount || 1,
        frameRate: ta.metadata.frameRate || 83,
        framesPerCol: ta.metadata.framesPerCol || 1,
        framesPerRow: ta.metadata.framesPerRow || 1,
        onStickerClick: wa,
        packID: fb,
        paddedSpriteURI: ib,
        sourceHeight: ta.metadata.height,
        sourceURI: gb.setEnum('image_type', ba.IMAGE).getURI().toString(),
        sourceWidth: ta.metadata.width,
        spriteURI: hb,
        stickerID: eb,
        subscribedThreadID: xa
      });
      z.render(jb, ya);
      return ya;
    },
    renderReportRespondLink: function(ta, ua, va) {
      if (!ua.is_social_report_attachment) return null;
      switch (ua.share_data_type) {
        case m.MercurySupportedShareType.FB_PHOTO:
          break;
        case m.MercurySupportedShareType.FB_SOCIAL_REPORT_PHOTO:
          return null;
        default:
          return null;
      }
      var wa = null;
      if (va) wa = oa.getMessagesFromIDs([va])[0];
      if (!wa) return null;
      if (wa.author === x.getID()) return null;
      var xa = null;
      u.get(wa.author, function(ya) {
        xa = n.create('a', {
          rel: 'dialog-post',
          className: "_z6l",
          id: 'respond-link',
          ajaxify: ga('/ajax/report/social_resolution/post/').setQueryData({
            attachment_fbid: ua.attach_id,
            post_fbid: ua.shared_object_id,
            sender_id: t.getUserIDFromParticipantID(ya.id)
          }).toString()
        });
        n.setContent(xa, ja._("Respond to {name}'s request", [ja.param("name", ya.name)]));
        n.appendContent(ta, xa);
      });
    },
    renderPhotoAttachments: function(ta, ua, va, wa) {
      var xa = ta.length;
      if (!xa) return null;
      var ya = n.create('div', {
        className: "_55pk"
      });
      if (xa === 1) {
        var za = sa.renderPreview(ta[0], ua, va, 'contain');
        n.appendContent(ya, za);
        return ya;
      }
      var ab = (xa == 2 || xa == 4) ? 2 : 3,
        bb = (va - (ab - 1) * wa) / ab,
        cb = Math.ceil(xa / ab),
        db = cb * bb + (cb - 1) * wa,
        eb = n.create('div', {
          className: "_55pm",
          style: 'padding-bottom: ' + (db / va * 100) + '%;'
        });
      n.appendContent(ya, eb);
      for (var fb = 0; fb < xa; ++fb) {
        var gb = sa.renderPreview(ta[fb], ua, bb, 'cover'),
          hb = fb % ab,
          ib = Math.floor(fb / ab);
        l.addClass(gb, "_55pn");
        fa.apply(gb, {
          width: (bb / va * 100) + '%',
          left: ((hb * (bb + wa)) / va * 100) + '%',
          top: ((ib * (bb + wa)) / db * 100) + '%'
        });
        n.appendContent(eb, gb);
      }
      return ya;
    },
    isPhotoAttachment: function(ta) {
      return ta.attach_type == q.PHOTO || ta.attach_type == q.GIF || (ta.attach_type == q.FILE && ta.preview_url);
    },
    isVideoAttachment: function(ta) {
      return ta.attach_type == q.VIDEO;
    },
    isShareAttachment: function(ta) {
      return ta.attach_type == q.SHARE;
    },
    isFileAttachment: function(ta) {
      return ta.attach_type == q.FILE;
    },
    isErrorAttachment: function(ta) {
      return ta.attach_type == q.ERROR;
    },
    isStickerAttachment: function(ta) {
      return ta.attach_type == q.STICKER;
    },
    isSyncRequestAttachment: function(ta) {
      var ua = m.MercurySupportedShareType;
      return this.isShareAttachment(ta) && ta.share_data_type == ua.FB_SYNC_REQUEST;
    },
    sortAttachmentsStablyByType: function(ta) {
      var ua = [sa.isPhotoAttachment, sa.isShareAttachment, sa.isFileAttachment, sa.isErrorAttachment];
      ua.push(function(wa) {
        return true;
      });
      var va = ua.map(function(wa) {
        return [];
      });
      ta.forEach(function(wa) {
        for (var xa = 0; xa < ua.length; xa++)
          if (ua[xa](wa)) {
            va[xa].push(wa);
            break;
          }
      });
      return Array.prototype.concat.apply([], va);
    }
  };
  e.exports = sa;
}, null);
__d("MercuryLogMessageRenderer", ["MercuryAttachmentRenderer", "CSS", "DOM", "HovercardLink", "MercuryViewer", "MercuryLogMessageType", "MercuryParticipants", "React", "Image.react", "TextWithEntities.react", "TooltipLink.react", "cx", "fbt", "ix", "OrionMercuryLogMessage"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
  var u = b('OrionMercuryLogMessage').module,
    v = {
      renderText: function(qa, ra) {
        switch (qa.log_message_type) {
          case l.SUBSCRIBE:
            x(qa, ra);
            break;
          case l.UNSUBSCRIBE:
            ca(qa, ra);
            break;
          case l.VIDEO_CALL:
            da(qa, ra);
            break;
          case l.PHONE_CALL:
            ga(qa, ra);
            break;
          case l.THREAD_NAME:
            ha(qa, ra);
            break;
          case l.THREAD_IMAGE:
            ia(qa, ra);
            break;
          case l.WALLPAPER:
            ja(qa, ra);
            break;
          case l.SERVER_ERROR:
            ka(qa, ra);
            break;
          case l.ORION:
            if (u) la(qa, ra);
            break;
          case l.PAGE_REPLY:
            fa(qa, ra);
            break;
        }
      },
      renderIcon: function(qa) {
        return (n.createElement(o, {
          className: w(qa),
          src: t('images/spacer.gif')
        }));
      },
      renderLegacy: function(qa, ra, sa, ta) {
        w(ta).split(' ').forEach(function(ua) {
          return ua && h.addClass(qa, ua);
        });
        this.renderText(ta, function(ua) {
          n.render(n.createElement("span", null, ua), ra);
        });
        this.renderAttachmentLegacy(sa, ta);
      },
      renderAttachmentLegacy: function(qa, ra) {
        if (ra.log_message_type == l.THREAD_IMAGE) {
          var sa = ra.log_message_data.image;
          if (sa) {
            var ta = g.renderPreview(sa.preview_url ? sa : null);
            i.setContent(qa, ta);
            h.addClass(ta, "_z6a");
            h.show(qa);
          }
        }
      }
    };
  e.exports = v;

  function w(qa) {
    var ra = qa.log_message_type,
      sa = qa.log_message_data;
    return (("_5wzu") + (ra == l.SUBSCRIBE ? ' ' + "_5wzj" : '') + (ra == l.UNSUBSCRIBE ? ' ' + "_5wzk" : '') + (ra == l.THREAD_NAME ? ' ' + "_5wzl" : '') + (ra == l.THREAD_IMAGE ? ' ' + "_5wzm" : '') + (ra == l.VIDEO_CALL && (sa.answered || pa(qa)) ? ' ' + "_5wzn" : '') + (ra == l.VIDEO_CALL && !(sa.answered || pa(qa)) ? ' ' + "_5wzo" : '') + (ra == l.PHONE_CALL && sa.answered ? ' ' + "_5wzp" : '') + (ra == l.PHONE_CALL && !sa.answered ? ' ' + "_5wzq" : '') + (ra == l.SERVER_ERROR ? ' ' + "_5wzr" : ''));
  }

  function x(qa, ra) {
    var sa = oa(qa.log_message_data.added_participants);
    switch (sa.length) {
      case 1:
        y(qa, ra, sa);
        break;
      case 2:
        z(qa, ra, sa);
        break;
      case 3:
        aa(qa, ra, sa);
        break;
      default:
        ba(qa, ra, sa);
        break;
    }
  }

  function y(qa, ra, sa) {
    var ta = [qa.author, sa[0]];
    m.getMulti(ta, function(ua) {
      if (qa.author == k.getID()) {
        ra(s._("You added {subscriber1}.", [s.param("subscriber1", na(ua[sa[0]]))]));
      } else if (sa[0] == k.getID()) {
        ra(s._("{actor} added you.", [s.param("actor", na(ua[qa.author]))]));
      } else ra(s._("{actor} added {subscriber1}.", [s.param("actor", na(ua[qa.author])), s.param("subscriber1", na(ua[sa[0]]))]));
    });
  }

  function z(qa, ra, sa) {
    var ta = [qa.author].concat(sa);
    m.getMulti(ta, function(ua) {
      if (qa.author == k.getID()) {
        ra(s._("You added {subscriber1} and {subscriber2}.", [s.param("subscriber1", na(ua[sa[0]])), s.param("subscriber2", na(ua[sa[1]]))]));
      } else if (sa[0] == k.getID()) {
        ra(s._("{actor} added you and {subscriber2}.", [s.param("actor", na(ua[qa.author])), s.param("subscriber2", na(ua[sa[1]]))]));
      } else ra(s._("{actor} added {subscriber1} and {subscriber2}.", [s.param("actor", na(ua[qa.author])), s.param("subscriber1", na(ua[sa[0]])), s.param("subscriber2", na(ua[sa[1]]))]));
    });
  }

  function aa(qa, ra, sa) {
    var ta = [qa.author].concat(sa);
    m.getMulti(ta, function(ua) {
      if (qa.author == k.getID()) {
        ra(s._("You added {subscriber1}, {subscriber2} and {subscriber3}.", [s.param("subscriber1", na(ua[sa[0]])), s.param("subscriber2", na(ua[sa[1]])), s.param("subscriber3", na(ua[sa[2]]))]));
      } else if (sa[0] == k.getID()) {
        ra(s._("{actor} added you, {subscriber2} and {subscriber3}.", [s.param("actor", na(ua[qa.author])), s.param("subscriber2", na(ua[sa[1]])), s.param("subscriber3", na(ua[sa[2]]))]));
      } else ra(s._("{actor} added {subscriber1}, {subscriber2} and {subscriber3}.", [s.param("actor", na(ua[qa.author])), s.param("subscriber1", na(ua[sa[0]])), s.param("subscriber2", na(ua[sa[1]])), s.param("subscriber3", na(ua[sa[2]]))]));
    });
  }

  function ba(qa, ra, sa) {
    var ta = [qa.author].concat(sa);
    m.getMulti(ta, function(ua) {
      function va(xa) {
        var ya = n.createElement("div", null, xa.map(function(za) {
          return n.createElement("div", null, za.name);
        }));
        return (n.createElement(q, {
          alignH: "center",
          position: "above",
          tooltip: ya
        }, s._("{num} more", [s.param("num", xa.length)])));
      }
      var wa = sa.map(function(xa) {
        return ua[xa];
      });
      if (qa.author == k.getID()) {
        ra(s._("You added {subscriber1}, {subscriber2} and {more_people}.", [s.param("subscriber1", na(wa[0])), s.param("subscriber2", na(wa[1])), s.param("more_people", va(wa.slice(2)))]));
      } else if (sa[0] == k.getID()) {
        ra(s._("{actor} added you, {subscriber2} and {more_people}.", [s.param("actor", na(ua[qa.author])), s.param("subscriber2", na(wa[1])), s.param("more_people", va(wa.slice(2)))]));
      } else ra(s._("{actor} added {subscriber1}, {subscriber2} and {more_people}.", [s.param("actor", na(ua[qa.author])), s.param("subscriber1", na(wa[0])), s.param("subscriber2", na(wa[1])), s.param("more_people", va(wa.slice(2)))]));
    });
  }

  function ca(qa, ra) {
    var sa = [qa.author],
      ta = qa.log_message_data.removed_participants,
      ua;
    if (ta.length === 1) {
      ua = ta[0];
      sa.push(ua);
    }
    m.getMulti(sa, function(va) {
      var wa = va[qa.author],
        xa = va[ua];
      if (qa.author == k.getID()) {
        if (!ua || ua == qa.author) {
          ra("You left the conversation.");
        } else ra(s._("You removed {name} from the conversation.", [s.param("name", na(xa))]));
      } else if (!ua || ua == qa.author) {
        ra(s._("{actor} left the conversation.", [s.param("actor", na(wa))]));
      } else if (ua == k.getID()) {
        ra(s._("{actor} removed you from the conversation.", [s.param("actor", na(wa))]));
      } else ra(s._("{actor} removed {name} from the conversation.", [s.param("actor", na(wa)), s.param("name", na(xa))]));
    });
  }

  function da(qa, ra) {
    if (pa(qa)) {
      ea(qa, ra);
      return;
    }
    var sa = qa.log_message_data.caller,
      ta = qa.log_message_data.callee,
      ua = [sa, ta];
    m.getMulti(ua, function(va) {
      var wa = ma(va[ta]);
      if (sa == k.getID()) {
        if (qa.log_message_data.answered) {
          ra(s._("You called {firstname}.", [s.param("firstname", wa)]));
        } else ra(s._("{firstname} missed a call from you.", [s.param("firstname", wa)]));
      } else {
        var xa = ma(va[sa]);
        if (qa.log_message_data.answered) {
          ra(s._("{firstname} called you.", [s.param("firstname", xa)]));
        } else ra(s._("You missed a call from {firstname}.", [s.param("firstname", xa)]));
      }
    });
  }

  function ea(qa, ra) {
    m.get(qa.log_message_data.callee, function(sa) {
      var ta = ma(sa);
      switch (qa.log_message_data.event_name) {
        case 'installing':
          ra(s._("{firstname} is setting up video calling...", [s.param("firstname", ta)]));
          break;
        case 'installed':
          ra(s._("{firstname} finished setting up video calling.", [s.param("firstname", ta)]));
          break;
        case 'install_canceled':
          ra("You canceled the video calling installation.");
          break;
      }
    });
  }

  function fa(qa, ra) {
    ra(qa.log_message_body);
  }

  function ga(qa, ra) {
    var sa = qa.log_message_data.caller,
      ta = qa.log_message_data.callee,
      ua = [sa, ta];
    m.getMulti(ua, function(va) {
      if (sa == k.getID()) {
        var wa = ma(va[ta]);
        if (qa.log_message_data.answered) {
          ra(s._("You called {firstname}.", [s.param("firstname", wa)]));
        } else ra(s._("{firstname} missed a call from you.", [s.param("firstname", wa)]));
      } else {
        var xa = ma(va[sa]);
        if (qa.log_message_data.answered) {
          ra(s._("{firstname} called you.", [s.param("firstname", xa)]));
        } else ra(s._("You missed a call from {firstname}.", [s.param("firstname", xa)]));
      }
    });
  }

  function ha(qa, ra) {
    var sa = qa.log_message_data.name;
    if (qa.author == k.getID()) {
      if (sa) {
        ra(s._("You named the conversation: {name}.", [s.param("name", n.createElement("span", {
          className: "_5wzs"
        }, n.createElement(p, {
          renderEmoticons: true,
          renderEmoji: true,
          text: sa
        })))]));
      } else ra("You removed the conversation name.");
    } else m.get(qa.author, function(ta) {
      var ua = na(ta);
      if (sa) {
        ra(s._("{actor} named the conversation: {name}.", [s.param("actor", ua), s.param("name", n.createElement("span", {
          className: "_5wzs"
        }, sa))]));
      } else ra(s._("{actor} removed the conversation name.", [s.param("actor", ua)]));
    });
  }

  function ia(qa, ra) {
    if (qa.author == k.getID()) {
      if (qa.log_message_data.image) {
        ra("You changed the conversation picture.");
      } else ra("You removed the conversation picture.");
    } else m.get(qa.author, function(sa) {
      var ta = na(sa);
      if (qa.log_message_data.image) {
        ra(s._("{actor} changed the conversation picture.", [s.param("actor", ta)]));
      } else ra(s._("{actor} removed the conversation picture.", [s.param("actor", ta)]));
    });
  }

  function ja(qa, ra) {
    if (qa.author == k.getID()) {
      ra("You changed the wallpaper.");
    } else m.get(qa.author, function(sa) {
      var ta = na(sa);
      ra(s._("{actor} changed the wallpaper.", [s.param("actor", ta)]));
    });
  }

  function ka(qa, ra) {
    ra("Couldn't find previous messages.");
  }

  function la(qa, ra) {
    var sa = qa.log_message_data,
      ta = sa.senderId,
      ua = sa.receiverId,
      va = ta === k.getID();
    m.getMulti([ta, ua], function(wa) {
      ra(n.createElement(u, n.__spread({}, sa, {
        receiverParticipant: wa[ua],
        senderParticipant: wa[ta],
        viewerIsSender: va
      })));
    });
  }

  function ma(qa) {
    return na(qa, true);
  }

  function na(qa, ra) {
    var sa = qa.fbid,
      ta = j.constructEndpoint({
        id: sa
      });
    if (qa.href) return (n.createElement("a", {
      className: "_5wzt",
      href: qa.href,
      "data-hovercard": ta
    }, ra ? qa.short_name : qa.name));
    return qa.name;
  }

  function oa(qa) {
    var ra = qa.indexOf(k.getID());
    if (ra > 0) {
      var sa = qa.filter(function(ta) {
        return ta !== k.getID();
      });
      return [k.getID()].concat(sa);
    }
    return qa;
  }

  function pa(qa) {
    return qa.log_message_data.event_name === 'installing' || qa.log_message_data.event_name === 'installed' || qa.log_message_data.event_name === 'install_canceled';
  }
}, null);
__d("MercuryTypingReceiver", ["Arbiter", "ChannelConstants", "MercuryActionType", "MercuryIDs", "MercuryPayloadSource", "MercuryViewer", "TypingStates", "mixInEventEmitter", "setTimeoutAcrossTransitions", "MercuryServerRequests"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = b('MercuryServerRequests').get(),
    q, r = {},
    s = 30000,
    t = {};
  n(t, {
    'state-changed': true
  });

  function u(aa) {
    var ba = r[aa] || {},
      ca = Object.keys(ba);
    ca.sort(function(da, ea) {
      return ba[da] - ba[ea];
    });
    return ca;
  }

  function v() {
    q = null;
    var aa = Date.now(),
      ba = {},
      ca = false;
    for (var da in r) {
      var ea = false;
      for (var fa in r[da] || {})
        if (r[da][fa] < aa - s) {
          delete r[da][fa];
          ea = true;
        } else ca = true;
      if (ea) ba[da] = u(da);
    }
    for (var ga in ba) {
      x(ba);
      break;
    }
    if (ca) q = o(v, 3000);
  }

  function w(aa, ba) {
    if (aa in r)
      if (ba in r[aa]) {
        delete r[aa][ba];
        y(aa);
      }
  }

  function x(aa) {
    t.releaseHeldEventType('state-changed');
    t.emitAndHold('state-changed', aa);
  }

  function y(aa) {
    var ba = {};
    ba[aa] = u(aa);
    x(ba);
  }

  function z(aa) {
    if (aa.thread_fbid) return p.getClientThreadIDNow(aa.thread_fbid);
    if (aa.type === 'typ') return j.getThreadIDFromUserID(aa.from);
    return null;
  }
  g.subscribe([h.getArbiterType('typ'), h.getArbiterType('ttyp')], function(aa, ba) {
    var ca = ba.obj,
      da = z(ca);
    if (da) {
      var ea = j.getParticipantIDFromUserID(ca.from);
      if (ca.st == m.TYPING) {
        r[da] = r[da] || {};
        var fa = r[da][ea];
        r[da][ea] = Date.now();
        if (!q) q = o(v, 3000);
        !fa && y(da);
      } else if (ca.st == m.INACTIVE) w(da, ea);
    }
  });
  p.subscribe('update-typing-state', function(aa, ba) {
    var ca = ba.payload_source;
    if (ca != k.CLIENT_CHANNEL_MESSAGE) return;
    var da = ba.actions;
    if (!da || !da.length) return;
    var ea = i.USER_GENERATED_MESSAGE;
    da.forEach(function(fa) {
      if (fa.action_type == ea && fa.author != l.getID()) w(fa.thread_id, fa.author);
    });
  });
  e.exports = t;
}, null);
__d("MercuryIndicatorController", ["ArbiterMixin", "DOM", "MercuryActionType", "MercuryDelayedRoger", "MercuryIDs", "MercuryMessageSourceTags", "MercuryParticipants", "MercuryRoger", "MercuryTypingReceiver", "MercuryViewer", "arrayContains", "copyProperties", "formatDate", "removeFromArray", "fbt", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
  var v = b('MercuryThreads').get(),
    w = [];

  function x(y) {
    this._threadID = y;
    this._canonicalUser = k.getUserIDFromThreadID(y);
    w.push(this);
  }
  r(x.prototype, g, {
    destroy: function() {
      t(w, this);
    },
    setLastMessage: function(y) {
      this._lastMsg = y;
      this._handleStateChange();
    },
    _informStateChanged: function(y) {
      if (y.activity == 'none' && this._currentActivity == 'none') return;
      if (this._lastMsg && p.isViewer(this._lastMsg.author)) y.self_authored = true;
      this._currentActivity = y.activity;
      this.inform('state-changed', y);
    },
    _notifySentFrom: function() {
      var y, z, aa = this._lastMsg.location_text,
        ba = this._lastMsg.source_tags || [];
      if (aa) {
        y = u._("Sent from {location}", [u.param("location", aa)]);
        z = 'sentFromMobile';
      } else if (q(ba, l.MESSENGER)) {
        y = h.create('a', {
          href: '/mobile/messenger',
          'class': 'fcg',
          target: '_blank'
        }, "Sent from Messenger");
        z = 'sentFromMobile';
      } else if (q(ba, l.MOBILE)) {
        y = h.create('a', {
          href: '/mobile',
          'class': 'fcg',
          target: '_blank'
        }, "Sent from Mobile");
        z = 'sentFromMobile';
      } else if (q(ba, l.EMAIL)) {
        y = "Sent from email";
        z = 'sentFromEmail';
      } else {
        this._informStateChanged({
          activity: 'none'
        });
        return;
      }
      this._informStateChanged({
        activity: z,
        text: y
      });
    },
    _notifySeenTimestamp: function(y) {
      var z = n.getSeenTimestamp(this._threadID, y[0]) * .001,
        aa = Date.now() * .001,
        ba;
      if (z < aa - 518400) {
        ba = 'M j';
      } else if (z < aa - 86400) {
        ba = 'D g:ia';
      } else ba = 'g:ia';
      this._informStateChanged({
        activity: 'seen-timestamp',
        text: u._("Seen {timestamp}", [u.param("timestamp", s(z, ba))])
      });
    },
    _nameNormalizer: function(y) {
      var z;
      m.getMulti(y, function(aa) {
        function ba(da) {
          if (aa[da] !== (void 0)) {
            return aa[da].short_name.toLowerCase();
          } else return da;
        }
        var ca = y.map(ba);
        z = function(da) {
          var ea = ba(da),
            fa = ca.indexOf(ea) !== ca.lastIndexOf(ea);
          return fa ? aa[da].name : aa[da].short_name;
        };
      });
      return z;
    },
    _notifySeenBy: function(y) {
      var z = this._lastMsg,
        aa = true;
      m.getMulti(y, function(ba) {
        aa = false;
        if (this._lastMsg != z) return;
        var ca = v.getThreadMetaNow(this._threadID),
          da = ca ? ca.participants.length : 0,
          ea = y.length + (z.author != p.getID()),
          fa, ga = false,
          ha = da > 2 && ea >= da - 1,
          ia;
        if (ca) ia = this._nameNormalizer(ca.participants);
        if (!ia) ia = function(ma) {
          return ba[ma].short_name;
        };
        if (ha) {
          fa = "Seen by everyone";
        } else if (y.length == 1) {
          fa = u._("Seen by {user}", [u.param("user", ba[y[0]].short_name)]);
        } else if (y.length == 2) {
          fa = u._("Seen by {user1}, {user2}", [u.param("user1", ba[y[0]].short_name), u.param("user2", ba[y[1]].short_name)]);
        } else if (y.length == 3) {
          fa = u._("Seen by {user1}, {user2}, {user3}", [u.param("user1", ba[y[0]].short_name), u.param("user2", ba[y[1]].short_name), u.param("user3", ba[y[2]].short_name)]);
        } else if (y.length > 3) {
          var ja = Object.keys(ba).length - 2,
            ka = u._("{num} more", [u.param("num", ja)]),
            la = h.create('span', {
              className: 'more'
            }, ka);
          fa = u._("Seen by {user1}, {user2}, {=num more link}", [u.param("user1", ba[y[0]].short_name), u.param("user2", ba[y[1]].short_name), u.param("=num more link", la)]);
          ga = true;
        }
        this._informStateChanged({
          activity: 'seen-by',
          text: fa,
          seenBy: y,
          tooltip: ga
        });
      }.bind(this));
      aa && this._informStateChanged({
        activity: 'none'
      });
    },
    _notifyTyping: function(y) {
      var z = this._lastMsg,
        aa = true;
      m.getMulti(y, function(ba) {
        aa = false;
        if (this._lastMsg != z) return;
        var ca = v.getThreadMetaNow(this._threadID),
          da = ca ? ca.participants.length : 0,
          ea;
        if (ca) ea = this._nameNormalizer(ca.participants);
        if (!ea) ea = function(ka) {
          return ba[ka].short_name;
        };
        var fa, ga = false;
        if (da > 2 && y.length >= da - 1) {
          fa = "Everyone is typing...";
        } else if (y.length == 1) {
          fa = u._("{name} is typing...", [u.param("name", ba[y[0]].short_name)]);
        } else if (y.length == 2) {
          fa = u._("{user1} and {user2} are typing...", [u.param("user1", ba[y[0]].short_name), u.param("user2", ba[y[1]].short_name)]);
        } else if (y.length == 3) {
          fa = u._("{user1}, {user2}, and {user3} are typing...", [u.param("user1", ba[y[0]].short_name), u.param("user2", ba[y[1]].short_name), u.param("user3", ba[y[2]].short_name)]);
        } else if (y.length > 3) {
          var ha = Object.keys(ba).length - 2,
            ia = u._("{num} more", [u.param("num", ha)]),
            ja = h.create('a', {
              href: '#'
            }, ia);
          fa = u._("{user1}, {user2}, and {=num more link} are typing...", [u.param("user1", ba[y[0]].short_name), u.param("user2", ba[y[1]].short_name), u.param("=num more link", ja)]);
          ga = true;
        }
        this._informStateChanged({
          activity: 'typing',
          text: fa,
          typing: y,
          tooltip: ga
        });
      }.bind(this));
      aa && this._informStateChanged({
        activity: 'none'
      });
    },
    _handleStateChange: function() {
      var y = i.LOG_MESSAGE;
      if (!this._lastMsg || this._lastMsg.action_type == y) {
        this._informStateChanged({
          activity: 'none'
        });
        return;
      }
      if (this._typing && this._typing.length) {
        this._notifyTyping(this._typing);
        return;
      }
      if (this._canonicalUser && this._lastMsg.author != p.getID()) {
        this._notifySentFrom();
        return;
      }
      var z = j.getSeenBy(this._threadID, true);
      if (z.length)
        if (this._canonicalUser) {
          this._notifySeenTimestamp(z);
          return;
        } else {
          this._notifySeenBy(z);
          return;
        }
      this._informStateChanged({
        activity: 'none'
      });
    }
  });
  o.addRetroactiveListener('state-changed', function(y) {
    w.forEach(function(z) {
      var aa = y[z._threadID];
      if (aa !== (void 0)) {
        z._typing = aa;
        z._handleStateChange();
      }
    });
  });
  j.subscribe('state-changed', function(y, z) {
    w.forEach(function(aa) {
      z[aa._threadID] && aa._handleStateChange();
    });
  });
  e.exports = x;
}, null);
__d("MercuryLastMessageIndicator.react", ["DOM", "MercuryIndicatorController", "MercuryParticipants", "ReactPropTypes", "React", "Tooltip", "cx", "emptyFunction", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = k.createClass({
    displayName: "MercuryLastMessageIndicator",
    propTypes: {
      hideTyping: j.bool,
      indicatorWillShow: j.func,
      indicatorDidShow: j.func,
      lastMessage: j.object,
      threadID: j.string.isRequired
    },
    getDefaultProps: function() {
      return {
        indicatorWillShow: n,
        indicatorDidShow: n
      };
    },
    getInitialState: function() {
      return {
        data: {}
      };
    },
    componentDidMount: function() {
      this._setup(this.props);
    },
    componentWillReceiveProps: function(q) {
      if (q.threadID != this.props.threadID) {
        this._destroy();
        this._setup(q);
      } else if (q.lastMessage != this.props.lastMessage) this._controller.setLastMessage(q.lastMessage);
    },
    componentWillUpdate: function(q, r) {
      if (this.isVisible(q, r)) this.props.indicatorWillShow();
    },
    componentDidUpdate: function() {
      if (!this.isVisible()) return;
      this.setText();
      this.setTooltip();
      this.props.indicatorDidShow();
    },
    componentWillUnmount: function() {
      this._destroy();
    },
    render: function() {
      return (k.createElement("div", {
        className: this.getRootClass()
      }, k.createElement("div", {
        className: "_510h"
      }), k.createElement("span", {
        className: "_510f",
        ref: "text"
      }, " ")));
    },
    getRootClass: function() {
      var q = (("_510g") + (this.state.data.self_authored ? ' ' + "_510e" : '')),
        r = this.state.data.activity,
        s = null;
      if (String(r).startsWith('seen')) {
        s = 'seen';
      } else if (r == 'typing') {
        s = this.props.hideTyping ? null : r;
      } else s = r;
      return o(q, s, this.props.className);
    },
    isVisible: function(q, r) {
      q = q || this.props;
      r = r || this.state;
      return (r.data && r.data.activity != 'none' && !(q.hideTyping && r.data.activity == 'typing'));
    },
    setText: function() {
      if (this.state.data.text) g.setContent(this.refs.text.getDOMNode(), this.state.data.text);
    },
    setTooltip: function() {
      if (this.state.data.activity == 'seen-by' && this.state.data.tooltip) i.getMulti(this.state.data.seenBy, function(q) {
        var r = g.create('div', null, this.state.data.seenBy.map(function(s) {
          return g.create('div', null, q[s].name);
        }));
        l.set(g.find(this.getDOMNode(), 'span.more'), r, 'above', 'center');
      }.bind(this));
    },
    _setup: function(q) {
      this._controller = new h(q.threadID);
      this._subscription = this._controller.subscribe('state-changed', function(r, s) {
        return this.setState({
          data: s
        });
      }.bind(this));
      q.lastMessage && this._controller.setLastMessage(q.lastMessage);
    },
    _destroy: function() {
      this._subscription.unsubscribe();
      this._controller.destroy();
    }
  });
  e.exports = p;
}, null);
__d("StickersDispatcher", ["Dispatcher", "StickerConstants", "copyProperties", "merge"], function(a, b, c, d, e, f, g, h, i, j) {
  'use strict';
  var k = i(new g(), {
    _handleUpdate: function(l, m) {
      var n = j({
        payloadSource: l
      }, m);
      this.dispatch(n);
    },
    handleUpdateFromViewActions: function(l) {
      this._handleUpdate(h.PayloadSource.VIEW_ACTION, l);
    }
  });
  e.exports = k;
}, null);
__d("StickerActions", ["BanzaiLogger", "StickerConstants", "StickersDispatcher"], function(a, b, c, d, e, f, g, h, i) {
  'use strict';
  var j = {
    addPack: function(k) {
      i.handleUpdateFromViewActions({
        actions: [{
          actionType: h.ActionTypes.ADD_PACK,
          packID: k
        }]
      });
    },
    removePack: function(k) {
      i.handleUpdateFromViewActions({
        actions: [{
          actionType: h.ActionTypes.REMOVE_PACK,
          packID: k
        }]
      });
    },
    selectPack: function(k, l) {
      if (!l) g.log('StickersLoggerConfig', {
        event: 'select_pack',
        packid: k
      });
      i.handleUpdateFromViewActions({
        actions: [{
          actionType: h.ActionTypes.SELECT_PACK,
          packID: k
        }]
      });
    },
    resetNumNewPacks: function() {
      i.handleUpdateFromViewActions({
        actions: [{
          actionType: h.ActionTypes.RESET_NUM_NEW_PACKS
        }]
      });
    }
  };
  e.exports = j;
}, null);
__d("AbstractDialogFitHeight", ["CSS", "DOM", "Event", "Style", "SubscriptionsHandler", "Vector", "csx", "cx", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = 450,
    q = 100,
    r = 67,
    s = 67;

  function t(u) {
    "use strict";
    this.$AbstractDialogFitHeight0 = u;
  }
  t.prototype.enable = function() {
    "use strict";
    this.$AbstractDialogFitHeight1 = new k();
    this.$AbstractDialogFitHeight1.addSubscriptions(this.$AbstractDialogFitHeight0.subscribe('beforeshow', this.$AbstractDialogFitHeight2.bind(this)), i.listen(window, 'resize', o(this.$AbstractDialogFitHeight2.bind(this))));
    this.$AbstractDialogFitHeight3 = h.find(this.$AbstractDialogFitHeight0.getRoot(), "._4-i2");
    g.addClass(this.$AbstractDialogFitHeight3, "_5pfh");
    this.$AbstractDialogFitHeight4 = q;
    if (h.scry(this.$AbstractDialogFitHeight0.getRoot(), "._4-i0").length) this.$AbstractDialogFitHeight4 += r;
    if (h.scry(this.$AbstractDialogFitHeight0.getRoot(), "._5a8u").length) this.$AbstractDialogFitHeight4 += s;
  };
  t.prototype.disable = function() {
    "use strict";
    this.$AbstractDialogFitHeight1.release();
    this.$AbstractDialogFitHeight1 = null;
    g.removeClass(this.$AbstractDialogFitHeight3, "_5pfh");
  };
  t.prototype.$AbstractDialogFitHeight2 = function() {
    "use strict";
    var u = l.getViewportDimensions().y,
      v = u - this.$AbstractDialogFitHeight4;
    j.set(this.$AbstractDialogFitHeight3, this.getHeightProperty(), Math.max(p, v) + 'px');
    this.$AbstractDialogFitHeight0.updatePosition();
  };
  e.exports = t;
}, null);
__d("DialogFitHeight", ["AbstractDialogFitHeight"], function(a, b, c, d, e, f, g) {
  for (var h in g)
    if (g.hasOwnProperty(h)) j[h] = g[h];
  var i = g === null ? null : g.prototype;
  j.prototype = Object.create(i);
  j.prototype.constructor = j;
  j.__superConstructor__ = g;

  function j() {
    "use strict";
    if (g !== null) g.apply(this, arguments);
  }
  j.prototype.getHeightProperty = function() {
    "use strict";
    return 'height';
  };
  e.exports = j;
}, null);
__d("StickerStoreController", ["Bootloader", "DialogFitHeight", "DOM", "LayerAutoFocus", "LayerFadeOnHide", "LayerHideOnEscape", "React", "XUIDialog.react", "XUIDialogBody.react", "XUISpinner.react", "cx", "requestAnimationFrame"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  'use strict';
  var s = 688,
    t = null,
    u = m.createClass({
      displayName: "StoreLayer",
      propTypes: {
        isComposer: m.PropTypes.bool,
        packID: m.PropTypes.string,
        shown: m.PropTypes.bool
      },
      getDefaultProps: function() {
        return {
          isComposer: false,
          packID: null,
          shown: false
        };
      },
      getInitialState: function() {
        return {
          renderStore: function() {
            return (m.createElement("div", {
              className: "_5r5e"
            }, m.createElement(p, {
              background: "light",
              size: "large"
            })));
          }
        };
      },
      componentDidMount: function() {
        g.loadModules(["StickerStore.react"], function(x) {
          this.setState({
            renderStore: function() {
              return (m.createElement(x, {
                currentPackID: this.props.packID,
                isComposer: this.props.isComposer,
                onPackSelect: this._packSelected,
                shown: this.props.shown
              }));
            }.bind(this)
          });
        }.bind(this));
      },
      _packSelected: function(x) {
        this.setProps({
          packID: x
        });
      },
      _onToggle: function(x) {
        r(this.setProps.bind(this, {
          shown: x
        }, null));
      },
      render: function() {
        return (m.createElement(n, {
          behaviors: {
            DialogFitHeight: h,
            LayerAutoFocus: j,
            LayerFadeOnHide: k,
            LayerHideOnEscape: l
          },
          onToggle: this._onToggle,
          shown: this.props.shown,
          width: s
        }, m.createElement(o, {
          className: "_5rq- autofocus"
        }, this.state.renderStore())));
      }
    });

  function v(x, y) {
    var z = i.create('div');
    i.appendContent(document.body, z);
    t = m.render(m.createElement(u, {
      isComposer: y,
      packID: x,
      shown: true
    }), z);
  }
  var w = {
    showStore: function(x, y) {
      if (!t) {
        v(x, !!y);
      } else t.setProps({
        shown: true,
        packID: x,
        isComposer: !!y
      });
    }
  };
  e.exports = w;
}, null);
__d("ChatTabMessagesView", ["Animation", "Arbiter", "ArbiterMixin", "BanzaiLogger", "ChatConfig", "ChatConversation.react", "ChatTypingIndicators.react", "ChatWelcomeMessage", "CSS", "DOM", "Event", "MercuryLastMessageIndicator.react", "LiveTimer", "MercuryTypingIndicator", "MercuryViewer", "MercuryMessageStore", "React", "ServerTime", "StickerActions", "StickerState", "StickerStoreController", "Style", "SubscriptionsHandler", "UserAgent_DEPRECATED", "arrayContains", "copyProperties", "getElementPosition", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha) {
  'use strict';
  var ia = 70,
    ja = null,
    ka = 20;

  function la(na) {
    if (ja === null) {
      var oa = na.childNodes[0];
      ba.set(na, 'overflow', 'scroll');
      ja = oa.clientWidth - ia;
      ba.set(na, 'overflow', '');
    }
    return ja;
  }

  function ma(na, oa, pa, qa, ra, sa, ta, ua) {
    this.loadingIcon = ra;
    this.threadID = na;
    this.sheetController = oa;
    this.scrollContainer = pa;
    this.conversationElem = qa;
    this.tabView = ua;
    s.restart(x.get() / 1000);
    this._loadingMoreMessages = false;

    function va() {
      ma.inform('interaction-with-tab', na);
    }
    this._subscriptions = new ca();
    this._subscriptions.addSubscriptions(h.subscribe('overflow-applied-to-body', this.scrollToBottom.bind(this)), q.listen(this.scrollContainer, 'mousedown', va));
    if (da.firefox()) {
      var wa = ('WheelEvent' in window) ? 'wheel' : 'DOMMouseScroll';
      this.scrollContainer.addEventListener(wa, va, false);
    } else this._subscriptions.addSubscriptions(q.listen(this.scrollContainer, 'mousewheel', va));
    this._subscriptions.addSubscriptions(q.listen(this.scrollContainer, 'scroll', ha(this.scrolling, 50, this)));
    if (k.get('chat_react')) {
      var xa;
      w.render(w.createElement(m, {
        threadID: this.threadID,
        indicatorsWillShow: function() {
          return xa = this.isScrolledToBottom();
        }.bind(this),
        indicatorsDidShow: function() {
          return xa && this.scrollToBottom(true);
        }.bind(this)
      }), ta);
    } else this.typingIndicator = new t(this.threadID, ta, this);
    var ya;
    this.lastMessageIndicatorNode = sa;
    this.lastMessageIndicator = w.render(w.createElement(r, {
      threadID: this.threadID,
      hideTyping: true,
      indicatorWillShow: function() {
        return ya = this.isScrolledToBottom();
      }.bind(this),
      indicatorDidShow: function() {
        return ya && this.scrollToBottom(true);
      }.bind(this)
    }), this.lastMessageIndicatorNode);
    this.initializeConversation();
  }
  fa(ma, i);
  fa(ma.prototype, {
    initializeConversation: function() {
      this._store = new v(this.threadID);
      this._conversation = w.render(w.createElement(l, {
        maxBubbleWidth: la(this.scrollContainer),
        messages: [],
        onImageLoad: function(na) {
          var oa = this.scrollContainer,
            pa = oa.scrollTop + oa.clientHeight;
          if (pa + na.offsetHeight >= oa.scrollHeight) this.scrollToBottom();
        }.bind(this),
        onStickerClick: this._onStickerClick.bind(this),
        onCallLinkClick: function(na, oa, pa) {
          ma.inform('video-call-clicked', {
            userID: na,
            threadID: oa,
            clickSource: pa
          });
        }
      }), this.conversationElem);
      this._subscriptions.addSubscriptions(this._store.subscribe(function(na) {
        if (na.eventType == v.MESSAGES_RECEIVED && na.allFromOthers && !this.isScrolledToBottom()) {
          this.sheetController.openNewMessagesSheet();
          this._newMessagesSheetOpened = true;
        }
        if (na.eventType == v.MESSAGES_REORDERED) {
          this._loadingMoreMessages = false;
          o.hide(this.loadingIcon);
        }
        var oa = this.isScrolledToBottom(),
          pa = this._getLoadingHeight(),
          qa = this.scrollContainer.scrollHeight,
          ra = this.scrollContainer.scrollTop,
          sa = na.messages,
          ta = n.getWelcomeMessage(this.threadID);
        if (ta) sa.push(ta);
        this._conversation.setProps({
          messages: sa
        }, function() {
          if (oa || this._shouldScrollToBottom) {
            this.scrollToBottom();
            this.setShouldScrollToBottom(false);
          } else if (na.eventType == v.MESSAGES_REORDERED) this.scrollToPosition(this.scrollContainer.scrollHeight - qa - pa + ra);
        }.bind(this));
        this.lastMessageIndicator.setProps({
          lastMessage: sa.length > 0 ? sa[sa.length - 1] : null
        });
        if (na.eventType == v.MESSAGES_RECEIVED && this._shouldShowStickerReplyNUX(sa) && this.tabView && this.tabView.isFocused()) this.tabView.showStickerReplyNUX();
        if (na.eventType == v.MESSAGES_CHANGED) this._checkToAnimateSticker();
      }.bind(this)));
    },
    setShouldScrollToBottom: function(na) {
      this._shouldScrollToBottom = na;
    },
    scrolling: function() {
      this._checkToAnimateSticker();
      if (this.isScrolledNearTop() && !this._loadingMoreMessages && !this.isScrolledToBottom() && !this.tabView._isDragDropActive)
        if (this._store.fetchMoreMessages()) {
          o.show(this.loadingIcon);
          this._loadingMoreMessages = true;
        }
      if (!this._newMessagesSheetOpened) return;
      if (this.isScrolledToBottom()) {
        this.sheetController.closeNewMessagesSheet();
        this._newMessagesSheetOpened = false;
      }
    },
    getScrollTop: function() {
      return this.scrollContainer && this.scrollContainer.scrollTop;
    },
    destroy: function() {
      p.scry(this.conversationElem, '.stickerContainer').forEach(function(na) {
        return w.unmountComponentAtNode(na);
      });
      w.unmountComponentAtNode(this.conversationElem);
      this._subscriptions && this._subscriptions.release();
      w.unmountComponentAtNode(this.lastMessageIndicatorNode);
      delete this.lastMessageIndicator;
      this._store && this._store.destroy();
      this.destroyed = true;
    },
    _getLoadingHeight: function() {
      return this.loadingHeight || this.loadingIcon.clientHeight;
    },
    _shouldShowStickerReplyNUX: function(na) {
      if (!z.shouldShowStickerReplyNUX() || !na.length) return false;
      var oa = na[na.length - 1];
      if (oa.author === u.getID()) return false;
      if (oa.has_attachment) return oa.attachments.some(function(pa) {
        return pa.attach_type === 'sticker';
      });
      return false;
    },
    isScrolledToBottom: function(na) {
      var oa = this.scrollContainer;
      na = na || ka;
      return oa.scrollTop + oa.clientHeight >= oa.scrollHeight - na;
    },
    isScrolledNearTop: function() {
      return this.scrollContainer.scrollTop < this.scrollContainer.clientHeight;
    },
    scrollToBottom: function(na) {
      this.scrollToPosition(this.scrollContainer.scrollHeight, na);
    },
    scrollToPosition: function(na, oa) {
      this._scrollTopAnimation && this._scrollTopAnimation.stop();
      if (oa === true) {
        this._scrollTopAnimation = (new g(this.scrollContainer)).to('scrollTop', na).ease(g.ease.end).duration(400).go();
      } else this.scrollContainer.scrollTop = na;
    },
    _onStickerClick: function(na, oa) {
      if (!na) return;
      j.log('StickersLoggerConfig', {
        event: 'click_sticker',
        packid: na,
        stickerid: oa
      });
      var pa = this.tabView;
      z.onTrayDataReady(function() {
        if (ea(z.getPackIDsInTray(), na)) {
          var qa = z.getPack(na);
          if (qa && qa.isPromoted) y.addPack(na);
          pa.setStickersFlyoutPackID(na);
        } else aa.showStore(na);
      });
    },
    _checkToAnimateSticker: function() {
      var na = ga(this.scrollContainer);
      h.inform('chatScrolled/' + this.threadID, {
        scrollTop: this.scrollContainer.scrollTop,
        top: na.y,
        viewHeight: na.height
      });
    },
    setNewThreadID: function(na) {
      this._store.setNewThreadID(na);
    }
  });
  e.exports = ma;
}, null);
__d("MessagesEmoticons.react", ["Grid.react", "React", "cx", "emptyFunction", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = g.GridItem,
    m = 8,
    n = {
      smile: "smile",
      frown: "frown",
      tongue: "tongue",
      grin: "grin",
      gasp: "gasp",
      wink: "wink",
      pacman: "pacman",
      grumpy: "grumpy",
      unsure: "unsure",
      cry: "cry",
      kiki: "kiki",
      glasses: "glasses",
      sunglasses: "sunglasses",
      heart: "heart",
      devil: "devil",
      angel: "angel",
      squint: "squint",
      confused: "confused",
      upset: "upset",
      colonthree: "colonthree",
      like: "like"
    },
    o = h.createClass({
      displayName: "MessagesEmoticons",
      propTypes: {
        onEmoticonSelect: h.PropTypes.func
      },
      getDefaultProps: function() {
        return {
          onEmoticonSelect: j
        };
      },
      getEmoticons: function() {
        return Object.keys(n).map(function(p) {
          return (h.createElement(l, {
            key: p
          }, h.createElement("div", {
            className: "panelCell"
          }, h.createElement("a", {
            "aria-label": n[p],
            className: 'emoticon emoticon_' + p,
            onClick: function() {
              return this.props.onEmoticonSelect(p);
            }.bind(this)
          }))));
        }.bind(this));
      },
      render: function() {
        return (h.createElement("div", {
          className: "emoticonsTable"
        }, h.createElement(g, {
          cols: m,
          alignv: "middle",
          alignh: "center",
          spacing: "pam"
        }, this.getEmoticons())));
      }
    });
  e.exports = o;
}, null);
__d("MercuryDeliveryState", ["MercuryConfig", "MercuryIDs", "MercuryServerRequests", "MercurySingletonMixin", "MercuryThreadInformer", "PresencePrivacy", "UserActivity", "debounceAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  'use strict';
  var o = g.delivery_timeout || 120000;

  function p(q) {
    this.$MercuryDeliveryState0 = q;
    this.$MercuryDeliveryState1 = i.getForFBID(this.$MercuryDeliveryState0);
    this.$MercuryDeliveryState2 = k.getForFBID(this.$MercuryDeliveryState0);
    this.$MercuryDeliveryState3 = [];
    if (!g.ChatWebDRGK) return;
    this.$MercuryDeliveryState2.subscribe('messages-received', this.$MercuryDeliveryState4.bind(this));
    m.subscribe(n(this.$MercuryDeliveryState5, 300, this));
  }
  p.prototype.$MercuryDeliveryState4 = function(q, r) {
    for (var s in r) {
      var t = r[s];
      t.forEach(function(u) {
        if (this.$MercuryDeliveryState7(u)) this.$MercuryDeliveryState3.push(u);
      }.bind(this));
    }
    if (m.isActive(o)) this.$MercuryDeliveryState5();
  };
  p.prototype.$MercuryDeliveryState5 = function() {
    if (this.$MercuryDeliveryState3.length === 0) return;
    var q = this.$MercuryDeliveryState3.filter(this.$MercuryDeliveryState7, this).map(function(r) {
      return r.message_id;
    });
    if (q) this.$MercuryDeliveryState1.sendDeliveryReceipts(q);
    this.$MercuryDeliveryState3 = [];
  };
  p.prototype.$MercuryDeliveryState7 = function(q) {
    var r = h.getUserIDFromParticipantID(q.author);
    if (r === this.$MercuryDeliveryState0) return false;
    if (!q.is_unread) return false;
    if (!l.allows(r)) return false;
    return true;
  };
  Object.assign(p, j);
  e.exports = p;
}, null);
__d("MercuryStateCheck", ["Arbiter", "ChannelConstants", "MercuryFolders", "MessagingTag", "URI", "copyProperties", "MercuryServerRequests"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = b('MercuryServerRequests').get(),
    n = l(new g(), {
      initialize: function() {
        g.subscribe(h.ON_INVALID_HISTORY, o);
        d(['ChannelConnection'], function(p) {
          p.subscribe(p.CONNECTED, function(q, r) {
            if (!r.init) o();
          });
        });
      }
    });

  function o() {
    var p;
    if (k.getRequestURI().getPath().search(/messages/) !== -1) {
      p = i.getSupportedFolders();
    } else p = [j.INBOX];
    m.fetchMissedMessages(p);
  }
  n.initialize();
  e.exports = n;
}, null);
__d("MercuryReadOnlyReason", ["React", "fbt"], function(a, b, c, d, e, f, g, h) {
  var i = {
    getReason: function(j) {
      if (j.has_email_participant) {
        return (h._("Sorry, this conversation isn't active anymore because messages can no longer be sent to email addresses. Messages sent to facebook.com email addresses will now be forwarded to primary email addresses, so you can continue this conversation over email. {Learn more}.", [h.param("Learn more", g.createElement("a", {
          href: "/help/224049364288051"
        }, "Learn more"))]));
      } else return ("You cannot reply to this conversation.");
    }
  };
  e.exports = i;
}, null);
__d("MercurySeenByAll", ["CSS", "DataStore", "MercuryDelayedRoger", "DOM", "MercuryIDs", "MercuryViewer", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = b('MercuryThreads').get(),
    n = {},
    o = {
      updateOnSeenChange: function(q, r, s) {
        n[q.tagName] = true;
        h.set(q, 'thread-id', r.thread_id);
        g.addClass(q, 'seenByListener');
        p(q, r, s);
      }
    };

  function p(q, r, s) {
    var t = null;
    if (s) {
      t = k.getParticipantIDFromUserID(s);
    } else t = l.getID();
    var u = r.participants.filter(function(w) {
        return w !== t;
      }),
      v = r.participants.length > 0 && r.participants[0] === t;
    g.conditionClass(q, 'repliedLast', v);
    g.conditionClass(q, 'seenByAll', v && i.getSeenBy(r.thread_id).length === u.length);
  }
  i.subscribe('state-changed', function(q, r) {
    for (var s in n) {
      var t = j.scry(document.body, s + '.seenByListener');
      for (var u = 0; u < t.length; u++) {
        var v = t[u],
          w = h.get(v, 'thread-id');
        if (r[w]) m.getThreadMeta(w, function(x) {
          p(v, x);
        });
      }
    }
  });
  e.exports = o;
}, null);
__d("MercuryThreadMetadataRenderer", ["CSS", "DOM", "Emoji", "HTML", "JSLogger", "MercuryAttachmentType", "MercuryIDs", "MercuryMessageSourceTags", "MercurySingletonMixin", "MercuryThreadImage.react", "MercuryThreadMetadataRawRenderer", "MercuryThreadTitle.react", "MercuryParticipants", "React", "MercurySeenByAll", "MercuryServerRequests", "Style", "MercuryThreads", "Tooltip", "URI", "WebMessengerThreadPermalinks", "arrayContains", "createArrayFromMixed", "copyProperties", "cx", "formatDate", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga) {
  var ha = k.create('wm_timestamp');

  function ia(na) {
    this._fbid = na;
    this._serverRequests = v.getForFBID(na);
    this._threads = x.getForFBID(na);
  }
  da(ia, o);
  da(ia.prototype, {
    renderTimestamp: function(na, oa, pa, qa) {
      if (qa) {
        if (!oa) {
          ha.warn('no_title');
          oa = (new Date(qa)).toLocaleDateString();
        }
        na.setAttribute('title', oa);
        na.setAttribute('data-utime', qa / 1000);
        if (!pa) {
          ha.warn('no_display');
          pa = fa(new Date(qa), 'g:ia');
        }
        h.setContent(na, pa);
        g.show(na);
      }
    },
    renderMessageSourceTags: function(na, oa, pa, qa) {
      var ra = '',
        sa = '',
        ta = '';
      if (ba(pa, n.MESSENGER)) {
        ra = "Sent from Messenger";
        sa = new z('/mobile/messenger');
        ta = "_9g";
      } else if (ba(pa, n.MOBILE)) {
        ra = "Sent from Mobile";
        sa = new z('/mobile/');
        ta = "_9j";
      } else if (ba(pa, n.CHAT)) {
        ra = "Sent from chat";
        ta = "_9h";
      } else if (ba(pa, n.EMAIL)) {
        if (qa) {
          ra = ga._("Sent from {email}", [ga.param("email", qa)]);
        } else ra = "Sent from email";
        ta = "_9i";
      }
      if (ta) {
        y.set(na, ra);
        g.addClass(oa, ta);
        if (sa) {
          na.setAttribute('href', sa);
        } else na.removeAttribute('href');
      } else g.hide(na);
    },
    renderMessageLocation: function(na, oa, pa) {
      var qa = z('/ajax/messaging/hovercard/map.php').setQueryData(pa);
      na.setAttribute('data-hovercard', qa);
      g.removeClass(na, "_b9");
      g.show(oa);
    },
    renderSpoofWarning: function(na, oa, pa) {
      if (oa) {
        g.addClass(na, "_sa");
        y.set(na, ga._("Unable to confirm {name_or_email} as the sender.", [ga.param("name_or_email", pa.name)]));
      }
    },
    renderChatSpoofWarning: function(na, oa, pa) {
      if (oa) h.appendContent(na, ga._("Unable to confirm {name_or_email} as the sender.", [ga.param("name_or_email", pa.name)]));
    },
    renderCoreThreadlist: function(na, oa, pa, qa, ra) {
      qa = qa || {};
      this.renderThreadImage(na, oa.getNode('image'));
      var sa = oa.getNode('accessibleName'),
        ta = [oa.getNode('name')];
      if (sa) ta.push(sa);
      ma(this, na, ta, qa);
      if (na.folder && ra) la(oa.getNode('folderBadge'), na.folder);
      var ua = oa.getNode('timestamp');
      this.renderTimestamp(ua, na.timestamp_absolute, na.timestamp_relative, na.timestamp);
      this.renderSnippet(na, oa.getNode('snippet'));
      ka(oa, na);
      pa(oa, na);
    },
    renderAndSeparatedParticipantList: function(na, oa, pa) {
      pa = pa || {};
      pa.last_separator_uses_and = true;
      this._threads.getThreadMeta(na, function(qa) {
        ma(this, qa, oa, pa);
      }.bind(this));
    },
    renderSnippet: function(na, oa) {
      var pa = false,
        qa = h.create('span');
      g.addClass(qa, 'MercuryRepliedIndicator');
      h.appendContent(oa, qa);
      u.updateOnSeenChange(qa, na, this._fbid);
      var ra = na.snippet;
      if (ra) {
        if (na.snippet_has_attachment) h.appendContent(oa, h.create('span', {
          className: 'MercuryAttachmentIndicator'
        }));
        if (na.is_forwarded_snippet) h.appendContent(oa, h.create('strong', {
          className: "_55q_"
        }, "Forwarded Message:"));
        if (ra.substr(0, 4) == '?OTR') {
          ra = "[encrypted message]";
        } else ra = ra.replace(/\r\n|[\r\n]/g, " ");
        ra = j(i.htmlEmojiAndEmote(ra));
      } else {
        if (na.is_forwarded_snippet) h.appendContent(oa, h.create('strong', {
          className: "_55q_"
        }, "Forwarded Message"));
        if (na.snippet_has_attachment && na.snippet_attachments && na.snippet_attachments.length) {
          pa = true;
          ra = h.create('span');
          d(['MercuryAttachmentSnippet.react'], function(ua) {
            t.render(t.createElement(ua, {
              thread: na,
              viewer: this._fbid
            }), ra);
          }.bind(this));
        }
      }
      var sa = na.participants.length;
      if (na.is_subscribed) sa--;
      var ta = na.snippet_sender;
      if (!pa && ta && m.getParticipantIDFromUserID(this._fbid) != ta && sa > 1) {
        s.get(ta, function(ua) {
          if (ua.short_name) {
            h.appendContent(oa, ga._("{name}: {conversation_snippet}", [ga.param("name", ua.short_name), ga.param("conversation_snippet", ra)]));
          } else h.appendContent(oa, ra);
        });
      } else h.appendContent(oa, ra);
    },
    renderWebMessengerLink: function(na, oa, pa, qa) {
      aa.getThreadURI(na, function(ra) {
        oa.setAttribute('href', ra);
        pa && pa();
      }, qa);
    },
    renderThreadImage: function(na, oa) {
      t.render(t.createElement(p, {
        thread: na,
        viewer: this._fbid
      }), oa);
    },
    renderParticipantList: function(na, oa, pa, qa) {
      return q.renderRawParticipantList(this._serverRequests.getServerThreadIDNow(na), oa, pa, qa);
    },
    renderThreadNameAndParticipantList: function(na, oa, pa, qa) {
      var ra = q.renderRawParticipantList(this._serverRequests.getServerThreadIDNow(na), oa, pa, qa),
        sa = this._threads.getThreadMetaNow(na);
      if (!sa.name) return ra;
      return ga._("{conversation_name} [with {participant_list}]", [ga.param("conversation_name", sa.name), ga.param("participant_list", ra)]);
    },
    renderParticipantCount: function(na, oa) {
      return q.renderRawParticipantCount(oa);
    }
  });

  function ja(na) {
    if (!na.snippet_attachments) return [];
    return na.snippet_attachments.filter(function(oa) {
      return oa.attach_type === l.PHOTO;
    });
  }

  function ka(na, oa) {
    var pa = ja(oa);
    if (pa.length === 0) return;
    var qa = pa[0].thumbnail_url;
    if (!qa) return;
    var ra = (pa.length == 1) ? 'snippet-thumbnail-single' : 'snippet-thumbnail-multiple',
      sa = na.getNode(ra);
    if (!sa) return;
    var ta = h.find(sa, 'i');
    w.set(ta, 'background-image', 'url(' + qa + ')');
    g.show(sa);
  }

  function la(na, oa) {
    ca(na).forEach(function(pa) {
      h.setContent(pa, oa);
    });
  }

  function ma(na, oa, pa, qa) {
    pa = ca(pa);
    var ra = na._fbid;
    if (oa.name) {
      pa.forEach(function(ta) {
        t.render(t.createElement(r, {
          thread: oa,
          viewer: ra,
          showUnreadCount: !!qa.show_unread_count
        }), ta);
      });
      return;
    }
    var sa = oa.participants;
    if (oa.participants.length > 1) sa = oa.participants.filter(function(ta) {
      return ta != m.getParticipantIDFromUserID(ra);
    });
    s.getMulti(sa, function(ta) {
      q.renderParticipantListWithNoThreadName(na._serverRequests.getServerThreadIDNow(oa.thread_id), oa, sa, ta, pa, qa);
    });
  }
  e.exports = ia;
}, null);
__d("MercurySheetPolicy", [], function(a, b, c, d, e, f) {
  var g = {
    canReplaceOpenSheet: function(h, i) {
      if (h.isSheetWithInput && h.isSheetWithInput()) return i.getType() != h.getType() && i.isSheetWithInput && i.isSheetWithInput();
      if (h.getType() == i.getType()) return false;
      if (h.isPermanent() && !i.isPermanent()) return false;
      return true;
    }
  };
  e.exports = g;
}, null);
__d("MercurySheetView", ["Animation", "ArbiterMixin", "MercurySheetPolicy", "CSS", "DOM", "Style", "MercurySheetTemplates", "Vector", "copyProperties", "cx", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  var r = 5000,
    s = function(t, u, v) {
      this._threadID = t;
      this._rootElement = u;
      this._tabMainElement = v;
      this._openSheet = null;
    };
  o(s.prototype, h, {
    destroy: function() {
      k.empty(this._rootElement);
    },
    _openCommon: function(t, u) {
      if (this._openSheet && !i.canReplaceOpenSheet(this._openSheet, t)) {
        if (t.couldNotReplace) t.couldNotReplace();
        return;
      }
      this.clear(function() {
        this._openSheet = t;
        var v = m[':fb:mercury:tab-sheet:loading'].build().getRoot();
        k.setContent(this._rootElement, v);
        j.show(v);
        j.show(this._rootElement);
        t.render();
        if (u) {
          j.addClass(this._tabMainElement, 'sheetSlide');
          j.addClass(this._tabMainElement, "_1sk4");
          var w = n.getElementDimensions(this._rootElement).y;
          l.set(this._rootElement, 'bottom', w + 'px');
          this.resize();
          this._animation = new g(this._rootElement).to('bottom', 0).duration(150).ease(g.ease.both).ondone(function() {
            j.removeClass(this._tabMainElement, 'sheetSlide');
            j.removeClass(this._tabMainElement, "_1sk4");
            this.resize();
          }.bind(this)).go();
        } else this.resize();
        if (!t.isPermanent()) {
          var x = r;
          if (t.getCloseTimeout) x = t.getCloseTimeout();
          var y = this.getAutoCloseCallback(t);
          this._sheetCloseHandler = q(this.close.bind(this, t, y), x);
          if (t.timeoutCanBeReset) t.setResetTimeoutCallback(this.resetTimeout.bind(this));
        }
      }.bind(this));
    },
    getAutoCloseCallback: function(t) {
      if (!t.autoCloseCallback) return null;
      return t.autoCloseCallback.bind(t);
    },
    resetTimeout: function(t, u) {
      clearTimeout(this._sheetCloseHandler);
      var v = this.getAutoCloseCallback(t);
      this._sheetCloseHandler = q(this.close.bind(this, t, v), u);
    },
    set: function(t) {
      return this._openCommon(t, false);
    },
    open: function(t) {
      return this._openCommon(t, true);
    },
    close: function(t, u) {
      if (this._openSheet != t) return;
      if (!this._openSheet) {
        u && u();
        return;
      }
      if (this._animation) this._animation.stop();
      if (this._sheetCloseHandler) {
        clearTimeout(this._sheetCloseHandler);
        this._sheetCloseHandler = null;
      }
      j.addClass(this._tabMainElement, 'sheetSlide');
      j.addClass(this._tabMainElement, "_1sk4");
      var v = n.getElementDimensions(this._rootElement).y;
      this.resize();
      this._animation = new g(this._rootElement).to('bottom', v + 'px').duration(100).ease(g.ease.begin).ondone(function() {
        k.empty(this._rootElement);
        j.hide(this._rootElement);
        j.removeClass(this._tabMainElement, 'sheetSlide');
        j.removeClass(this._tabMainElement, "_1sk4");
        this._openSheet = null;
        this.resize();
        u && u();
      }.bind(this)).go();
    },
    clear: function(t) {
      this.close(this._openSheet, t);
    },
    resize: function() {
      this.inform('resize');
    }
  });
  e.exports = s;
}, null);
__d("Token", ["CSS", "DataStore", "DOM", "Locale", "UnicodeBidi", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  function m(n, o) {
    "use strict";
    this.info = n;
    this.paramName = o;
  }
  m.prototype.getInfo = function() {
    "use strict";
    return this.info;
  };
  m.prototype.getText = function() {
    "use strict";
    return this.info.text;
  };
  m.prototype.getValue = function() {
    "use strict";
    return this.info.uid;
  };
  m.prototype.isFreeform = function() {
    "use strict";
    return !!this.info.freeform;
  };
  m.prototype.setSelected = function(n) {
    "use strict";
    g.conditionClass(this.getElement(), 'uiTokenSelected', n);
    return this;
  };
  m.prototype.getElement = function() {
    "use strict";
    if (!this.element) this.setElement(this.createElement());
    return this.element;
  };
  m.prototype.setElement = function(n) {
    "use strict";
    h.set(n, 'Token', this);
    this.element = n;
    return this;
  };
  m.prototype.isRemovable = function() {
    "use strict";
    return g.hasClass(this.element, 'removable');
  };
  m.prototype.getTextDirection = function() {
    "use strict";
    var n = k.isDirectionRTL(this.getText()),
      o = j.isRTL();
    if (n && !o) return 'rtl';
    if (!n && o) return 'ltr';
    return null;
  };
  m.prototype.createElement = function(n, o) {
    "use strict";
    var p = this.paramName,
      q = this.getText(),
      r = this.getValue(),
      s = i.create('a', {
        href: '#',
        'aria-label': l._("Remove {item}", [l.param("item", q)]),
        className: 'remove uiCloseButton uiCloseButtonSmall'
      });
    if (n) g.addClass(s, 'uiCloseButtonSmallGray');
    var t = i.create('input', {
        type: 'hidden',
        value: r,
        name: p + '[]',
        autocomplete: 'off'
      }),
      u = i.create('input', {
        type: 'hidden',
        value: q,
        name: 'text_' + p + '[]',
        autocomplete: 'off'
      }),
      v = {
        className: 'removable uiToken'
      },
      w = this.getTextDirection();
    if (w !== null) v.dir = w;
    var x = i.create('span', v, [q, t, u, s]);
    if (n) g.addClass(x, 'uiTokenGray');
    if (o) {
      var y = i.create('i', {
        className: o
      });
      i.prependContent(x, y);
    }
    return x;
  };
  e.exports = m;
}, null);
__d("WeakToken", ["CSS", "Token"], function(a, b, c, d, e, f, g, h) {
  for (var i in h)
    if (h.hasOwnProperty(i)) k[i] = h[i];
  var j = h === null ? null : h.prototype;
  k.prototype = Object.create(j);
  k.prototype.constructor = k;
  k.__superConstructor__ = h;

  function k() {
    "use strict";
    if (h !== null) h.apply(this, arguments);
  }
  k.prototype.createElement = function() {
    "use strict";
    var l = j.createElement.call(this, true, 'UFIWeakReferenceIcon');
    g.addClass(l, 'uiTokenWeakReference');
    return l;
  };
  e.exports = k;
}, null);
__d("Tokenizer", ["Arbiter", "ArbiterMixin", "CSS", "DataStore", "DOM", "DOMQuery", "Event", "Focus", "Input", "Keys", "Parent", "StickyPlaceholderInput", "Style", "TextMetrics", "Token", "UserAgent_DEPRECATED", "WeakToken", "copyProperties", "createObjectFrom", "emptyFunction", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
  var ba = 20,
    ca = aa(h);
  for (var da in ca)
    if (ca.hasOwnProperty(da)) fa[da] = ca[da];
  var ea = ca === null ? null : ca.prototype;
  fa.prototype = Object.create(ea);
  fa.prototype.constructor = fa;
  fa.__superConstructor__ = ca;

  function fa(ga, ha, ia) {
    "use strict";
    this.element = ga;
    this.typeahead = ha;
    this.input = ha.getCore().getElement();
    if (ia) this.init(ia.tokenarea, ia.param_name, ia.initial_info, ia.options);
    j.set(this.element, 'Tokenizer', this);
  }
  fa.prototype.init = function(ga, ha, ia, ja) {
    "use strict";
    this._handleEvents = this.handleEvents.bind(this);
    this.init = z;
    this.setTokenarea(ga);
    this.paramName = ha;
    if (!this.placeholder) this.placeholder = this.input.getAttribute('data-placeholder') || this.input.getAttribute('placeholder') || '';
    x(this, ja || {});
    this.initEvents();
    this.initTypeahead();
    this.reset(ia);
    this.initBehaviors();
    setTimeout(this.adjustWidth.bind(this), 0);
    g.inform('Tokenizer/init', this, g.BEHAVIOR_PERSISTENT);
    this.inform('init', {
      tokens: this.getTokens()
    });
  };
  fa.prototype.reset = function(ga) {
    "use strict";
    this.tokens = [];
    this.unique = {};
    if (ga) {
      this.populate(ga);
    } else k.empty(this.tokenarea);
    this.updateTokenarea();
  };
  fa.prototype.populate = function(ga) {
    "use strict";
    var ha = [];
    this.tokens = this.getTokenElements().map(function(ia, ja) {
      var ka = ga[ja];
      ha.push(this._tokenKey(ka));
      return this.createToken(ka, ia);
    }, this);
    this.unique = y(ha, this.tokens);
  };
  fa.prototype.setTokenarea = function(ga) {
    "use strict";
    var ha = !this.tokenarea;
    if (ga !== this.tokenarea) {
      if (this.tokenarea) {
        k.remove(this.tokenarea);
        for (var ia in this._tokenareaListeners) this._tokenareaListeners[ia].remove();
      }
      this._tokenareaListeners = m.listen(ga, {
        click: this._handleEvents,
        keydown: this._handleEvents
      });
      this.tokenarea = ga;
    }
    if (!ha) this.updateTokenarea();
  };
  fa.prototype.getElement = function() {
    "use strict";
    return this.element;
  };
  fa.prototype.getTypeahead = function() {
    "use strict";
    return this.typeahead;
  };
  fa.prototype.getInput = function() {
    "use strict";
    return this.input;
  };
  fa.prototype.initBehaviors = function() {
    "use strict";
    this.behaviors = this.behaviors || [];
    if (this.behaviors instanceof Array) {
      this.behaviors.forEach(function(ia) {
        ia.behavior(this, ia.config);
      }.bind(this));
    } else
      for (var ga in (this.behaviors || {})) {
        var ha = window.TokenizerBehaviors && window.TokenizerBehaviors[ga];
        ha.call(null, this, this.behaviors[ga]);
      }
  };
  fa.prototype.initTypeahead = function() {
    "use strict";
    var ga = this.typeahead.getCore();
    ga.resetOnSelect = true;
    ga.setValueOnSelect = false;
    ga.preventFocusChangeOnTab = true;
    if (this.inline) {
      var ha = this.typeahead.getView();
      i.addClass(ha.getElement(), 'uiInlineTokenizerView');
    }
    this.typeahead.subscribe('select', function(ia, ja) {
      return this.handleSelect(ja);
    }.bind(this));
    this.typeahead.subscribe('blur', this.handleBlur.bind(this));
  };
  fa.prototype.handleBlur = function(event) {
    "use strict";
    this.inform('blur', {
      event: event
    });
    this.updatePlaceholder();
  };
  fa.prototype.handleSelect = function(ga) {
    "use strict";
    var ha = ga.selected;
    if ('uid' in ha) {
      this.updateInput();
      this.addToken(this.createToken(ha));
    }
  };
  fa.prototype.initEvents = function() {
    "use strict";
    var ga = v.firefox() < 4 ? 'keypress' : 'keydown';
    m.listen(this.input, 'paste', this.paste.bind(this));
    m.listen(this.input, ga, this.keydown.bind(this));
  };
  fa.prototype.handleEvents = function(event) {
    "use strict";
    var ga = event.getTarget(),
      ha = ga && this.getTokenElementFromTarget(ga);
    if (!ha) return;
    if (event.type != 'keydown' || m.getKeyCode(event) == p.RETURN) this.processEvents(event, ga, ha);
  };
  fa.prototype.processEvents = function(event, ga, ha) {
    "use strict";
    if (q.byClass(ga, 'remove')) {
      var ia = ha.nextSibling;
      ia = ia && l.scry(ha.nextSibling, '.remove')[0];
      var ja = this.getTokenFromElement(ha);
      ja = this.addTokenData(ja, ga);
      this.removeToken(ja);
      this.focusOnTokenRemoval(event, ia);
      event.kill();
    }
  };
  fa.prototype.focusOnTokenRemoval = function(event, ga) {
    "use strict";
    n.set(event.type == 'keydown' && ga || this.input);
  };
  fa.prototype.addTokenData = function(ga, ha) {
    "use strict";
    return ga;
  };
  fa.prototype.keydown = function(event) {
    "use strict";
    this.inform('keydown', {
      event: event
    });
    var ga = m.getKeyCode(event),
      ha = this.input;
    if (this.inline && ga == p.BACKSPACE && o.isEmpty(ha)) {
      var ia = this.getLastToken();
      if (ia && ia.isRemovable()) this.removeToken(ia);
    }
    this.updateInput();
  };
  fa.prototype.paste = function(event) {
    "use strict";
    this.inform('paste', {
      event: event
    });
    this.updateInput(true);
  };
  fa.prototype.focusInput = function() {
    "use strict";
    n.set(this.input);
  };
  fa.prototype.updateInput = function(ga) {
    "use strict";
    if (!this.inline) return;
    setTimeout(function() {
      this.adjustWidth(this.input.value);
      if (ga) this.input.value = this.input.value;
    }.bind(this), 20);
    r.setPlaceholderText(this.input, '');
    this.inform('resize');
  };
  fa.prototype.setPlaceholder = function(ga) {
    "use strict";
    this.placeholder = ga;
    if (this.stickyPlaceholder) r.setPlaceholderText(this.input, ga);
    this.updatePlaceholder();
  };
  fa.prototype.updatePlaceholder = function() {
    "use strict";
    if (!this.inline || this.input.value) return;
    var ga = !this.tokens.length,
      ha = '';
    if (ga || this.stickyPlaceholder) {
      this.adjustWidth(this.placeholder);
      ha = this.placeholder;
    } else this.adjustWidth(this.input.value);
    r.setPlaceholderText(this.input, ha);
  };
  fa.prototype.adjustWidth = function(ga) {
    "use strict";
    if (!this.inline || !this._getIsInDOM()) return;
    if (!ga && this.input.value === '') ga = this.placeholder;
    var ha = ba;
    if (ga !== this.placeholder || !this.getTokens().length || this.stickyPlaceholder) {
      var ia = s.getFloat(this.getElement(), 'width'),
        ja = this._getMetrics().measure(ga);
      ha = ja.width + this._getWidthOffset() + 10;
      ha = (ha >= ia) ? ia : ha;
    }
    s.set(this.input, 'width', ha + 'px');
    this.inform('resize');
    g.inform('reflow');
  };
  fa.prototype.getToken = function(ga) {
    "use strict";
    return this.unique[ga] || null;
  };
  fa.prototype.getTokens = function() {
    "use strict";
    return this.tokens || [];
  };
  fa.prototype.getTokenElements = function() {
    "use strict";
    return l.scry(this.tokenarea, 'span.uiToken');
  };
  fa.prototype.getTokenElementFromTarget = function(ga) {
    "use strict";
    return q.byClass(ga, 'uiToken');
  };
  fa.prototype.getTokenFromElement = function(ga) {
    "use strict";
    return j.get(ga, 'Token');
  };
  fa.prototype.getTokenValues = function() {
    "use strict";
    if (!this.tokens) return [];
    return this.tokens.map(function(ga) {
      return ga.getValue();
    });
  };
  fa.prototype.getFirstToken = function() {
    "use strict";
    return this.tokens[0] || null;
  };
  fa.prototype.getLastToken = function() {
    "use strict";
    return this.tokens[this.tokens.length - 1] || null;
  };
  fa.prototype.hasMaxTokens = function() {
    "use strict";
    return this.maxTokens && this.maxTokens <= this.tokens.length;
  };
  fa.prototype.createToken = function(ga, ha) {
    "use strict";
    var ia = this.getToken(this._tokenKey(ga));
    if (!ia) ia = ga.weak_reference ? new w(ga, this.paramName) : new u(ga, this.paramName);
    ha && ia.setElement(ha);
    return ia;
  };
  fa.prototype.addToken = function(ga) {
    "use strict";
    if (this.hasMaxTokens()) return;
    var ha = this._tokenKey(ga.getInfo());
    if (ha in this.unique) return;
    this.unique[ha] = ga;
    this.tokens.push(ga);
    this.insertToken(ga);
    this.updateTokenarea();
    this.inform('addToken', ga);
    this.inform('changeTokens');
    g.inform('Form/change', {
      node: this.element
    });
  };
  fa.prototype.insertToken = function(ga) {
    "use strict";
    k.appendContent(this.tokenarea, ga.getElement());
  };
  fa.prototype.removeToken = function(ga) {
    "use strict";
    if (!ga) return;
    var ha = this.tokens.indexOf(ga);
    if (ha < 0) return;
    this.tokens.splice(this.tokens.indexOf(ga), 1);
    delete this.unique[this._tokenKey(ga.getInfo())];
    k.remove(ga.getElement());
    this.updateTokenarea();
    this.inform('removeToken', ga);
    this.inform('changeTokens');
    g.inform('Form/change', {
      node: this.element
    });
  };
  fa.prototype.removeAllTokens = function() {
    "use strict";
    this.reset();
    this.inform('changeTokens');
    this.inform('removeAllTokens');
  };
  fa.prototype.updateTokenarea = function() {
    "use strict";
    var ga = this.typeahead.getCore(),
      ha = this.getTokenValues();
    if (this.excludeDuplicates) {
      this._exclusions || (this._exclusions = ga.getExclusions());
      ga.setExclusions(ha.concat(this._exclusions));
    }
    ga.setEnabled(!this.hasMaxTokens());
    this.updateTokenareaVisibility();
    this.updatePlaceholder();
    this.inform('resize');
    g.inform('reflow');
  };
  fa.prototype.updateTokenareaVisibility = function() {
    "use strict";
    i.conditionShow(this.tokenarea, this.tokens.length !== 0);
  };
  fa.prototype._tokenKey = function(ga) {
    "use strict";
    return ga.uid + (ga.freeform ? ':' : '');
  };
  fa.prototype._getWidthOffset = function() {
    "use strict";
    if (this._widthOffset === null) {
      var ga = this.input.clientWidth,
        ha = s.getFloat(this.input, 'width');
      if (ga == ha) {
        this._widthOffset = s.getFloat(this.input, 'paddingLeft') + s.getFloat(this.input, 'paddingRight');
      } else this._widthOffset = 0;
    }
    return this._widthOffset;
  };
  fa.prototype._getMetrics = function() {
    "use strict";
    if (!this._metrics) this._metrics = new t(this.input, this.inline);
    return this._metrics;
  };
  fa.prototype._getIsInDOM = function() {
    "use strict";
    return this._isInDOM || (this._isInDOM = l.contains(document.body, this.input));
  };
  fa.getInstance = function(ga) {
    "use strict";
    var ha = q.byClass(ga, 'uiTokenizer');
    return ha ? j.get(ha, 'Tokenizer') : null;
  };
  fa.init = function(ga, ha) {
    "use strict";
    ga.init(ha.tokenarea, ha.param_name, ha.initial_info, ha.options);
  };
  x(fa.prototype, {
    inline: false,
    maxTokens: null,
    excludeDuplicates: true,
    placeholder: '',
    _widthOffset: null,
    _metrics: null
  });
  e.exports = fa;
}, null);
__d("MercuryTypeahead", ["Event", "ArbiterMixin", "DOM", "DOMDimensions", "Input", "Keys", "MercuryTypeaheadTemplates", "Tokenizer", "Typeahead", "TypeaheadCore", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  var s = function(t, u) {
    this._domElement = null;
    this._typeahead = null;
    this._tokenizer = null;
    this._placeholder = '';
    this._exclusions = [];
    this._viewNodeOrID = null;
    this._viewOptions = {
      renderer: 'compact',
      autoSelect: true
    };
    this._tokenizerBehaviors = [];
    this._heightPrev = null;
    this._dataSource = t;
    this._view = u;
  };
  q(s.prototype, h);
  q(s.prototype, {
    setPlaceholder: function(t) {
      this._placeholder = t;
      return this;
    },
    setExcludedParticipantsFromThreadMeta: function(t) {
      if (!t) return;
      if (!t.former_participants) {
        this.setExcludedParticipants(t.participants);
        return;
      }
      var u = t.former_participants.filter(function(v) {
        return v.is_friend === false;
      }).map(function(v) {
        return v.id;
      });
      this.setExcludedParticipants(u.concat(t.participants));
    },
    setExcludedParticipants: function(t) {
      this._exclusions = [];
      t.forEach(function(u) {
        var v = u.indexOf(':');
        if (u.substr(0, v) == 'fbid') this._exclusions.push(u.substr(v + 1));
      }.bind(this));
      return this;
    },
    setViewNodeID: function(t) {
      this._viewNodeOrID = t;
    },
    setViewNode: function(t) {
      this._viewNodeOrID = t;
    },
    setFullWidthView: function(t) {
      var u = i.create('div', {
        className: "_4ck uiTypeaheadView"
      });
      i.setContent(t, u);
      this.setViewNode(u);
    },
    setViewOption: function(t, u) {
      this._viewOptions[t] = u;
    },
    addTokenizerBehavior: function(t) {
      this._tokenizerBehaviors.push(t);
    },
    build: function(t) {
      if (this._domElement) return;
      var u = m[':fb:mercury:tokenizer'].build(),
        v = m[':fb:mercury:typeahead'].build();
      this._domElement = u.getRoot();
      i.appendContent(this._domElement, v.getRoot());
      var w = v.getNode('textfield');
      k.setPlaceholder(w, this._placeholder);
      w.setAttribute('data-placeholder', this._placeholder);
      this._input = w;
      var x = {
          node_id: this._viewNodeOrID,
          ctor: this._view,
          options: this._viewOptions
        },
        y = {
          ctor: p,
          options: {
            setValueOnSelect: true
          }
        };
      this._typeahead = new o(this._dataSource, x, y, v.getRoot());
      this._typeahead.init();
      var z = {
        inline: true,
        behaviors: this._tokenizerBehaviors
      };
      this._tokenizer = new n(this._domElement, this._typeahead);
      this._tokenizer.init(u.getNode('tokenarea'), 'participants', [], z);
      this._tokenizer.subscribe(['addToken', 'removeToken', 'removeAllTokens'], this._tokensChanged.bind(this));
      this._tokenizer.subscribe('resize', function() {
        this.inform('resize');
      }.bind(this));
      g.listen(w, 'focus', function() {
        this._resetDataSource();
        this._typeahead.init();
      }.bind(this));
      g.listen(this._domElement, 'click', this.focus.bind(this));
      g.listen(w, 'keydown', this.keydown.bind(this));
      this._heightPrev = j.getElementDimensions(this._domElement).height;
    },
    getElement: function() {
      return this._domElement;
    },
    getSelectedParticipantIDs: function() {
      var t = [];
      if (this._tokenizer)(this._tokenizer.getTokenValues() || []).forEach(function(u) {
        t.push('fbid:' + u);
      });
      return t;
    },
    getTokens: function() {
      var t = [];
      if (this._tokenizer) t = this._tokenizer.getTokens();
      return t;
    },
    getTokenizer: function() {
      return this._tokenizer;
    },
    keydown: function(event) {
      if (this._tokenizer.inline && event.keyCode == l.ESC) {
        if (k.isEmpty(this._input)) {
          var t = this._tokenizer.getLastToken();
          if (t && t.isRemovable()) this._tokenizer.removeToken(t);
        } else this._typeahead.getCore().reset();
        return false;
      }
      if (k.isEmpty(this._input) && this._tokenizer.inline && event.keyCode === l.RETURN) {
        event.preventDefault();
        return this.inform('tokens-return');
      }
    },
    reset: function() {
      this._tokenizer && this._tokenizer.removeAllTokens();
      this._typeahead && this._typeahead.getCore().reset();
    },
    focus: function() {
      this._tokenizer && this._tokenizer.focusInput();
    },
    getTypeahead: function() {
      return this._typeahead;
    },
    _resetDataSource: function() {
      this._dataSource.setExclusions(this._exclusions);
    },
    _tokensChanged: function() {
      this.inform('tokens-changed');
    }
  });
  e.exports = s;
}, null);
__d("StickerSearch", ["StickerServerRequests"], function(a, b, c, d, e, f, g) {
  'use strict';
  var h, i, j = {},
    k = {
      requestStickersForQuery: function(l, m) {
        h = l;
        g.getStickersForQuery(l, function(n) {
          return h === l && m(n.payload);
        });
      },
      prepareTagsData: function() {
        if (!i) i = g.fetchTagData(function(l) {
          j = l;
        });
        return i;
      },
      getTagByName: function(l) {
        return j[l];
      },
      getTagsIndex: function() {
        return j;
      }
    };
  e.exports = k;
}, null);
__d("StickersFlyoutPackSelector.react", ["Animation", "ImmutableObject", "Locale", "React", "Image.react", "StickerActions", "StickerConfig", "StickerConstants", "StickerInterfaces", "StickerState", "StickerStoreController", "XUIBadge.react", "cx", "emptyFunction", "fbt", "ix", "getObjectValues"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
  'use strict';
  var x = 4,
    y = 200,
    z = "Sticker Store",
    aa = j.createClass({
      displayName: "StickersFlyoutPackSelector",
      propTypes: {
        stickerInterface: j.PropTypes.oneOf(w(o)),
        numNewPacks: j.PropTypes.number,
        packs: j.PropTypes.arrayOf(j.PropTypes.instanceOf(h)).isRequired,
        onPackClick: j.PropTypes.func,
        selectedPackID: j.PropTypes.string,
        resetTagSelectorFunc: j.PropTypes.func
      },
      getInitialState: function() {
        return {
          animating: false,
          page: 0
        };
      },
      getDefaultProps: function() {
        return {
          stickerInterface: o.MESSAGES,
          numNewPacks: 0
        };
      },
      shouldComponentUpdate: function(ca, da) {
        return !da.animating;
      },
      onFlyoutShown: function() {
        if (this.props.packs.length > 0) {
          var ca = this._calculatePageForPack(this.props.selectedPackID);
          if (this.state.page !== ca) this._setPage(ca, 0);
        }
      },
      _calculatePageForPack: function(ca) {
        for (var da = 0; da < this.props.packs.length; da++)
          if (this.props.packs[da].id == ca) return da <= x ? 0 : Math.floor((da - 1) / x);
        return 0;
      },
      _setPage: function(ca, da) {
        if (this.state.animating) return;
        this.setState({
          animating: true,
          page: ca
        }, function() {
          var ea = this.refs.positioner.getDOMNode(),
            fa = this._calculatePosition(ca);
          new g(ea).to(fa.reference, fa.offset + 'px').ondone(function() {
            return this.setState({
              animating: false
            });
          }.bind(this)).duration(da).go();
        });
      },
      _calculatePosition: function(ca) {
        var da = this.refs.positioner.getDOMNode(),
          ea = da.childNodes[ca].offsetLeft;
        if (i.isRTL()) {
          var fa = da.offsetWidth,
            ga = da.childNodes[ca].offsetWidth;
          return {
            reference: 'right',
            offset: ea + ga - fa
          };
        }
        return {
          reference: 'left',
          offset: -ea
        };
      },
      _numPages: function() {
        return Math.max(1, Math.ceil((this.props.packs.length - 1) / x));
      },
      _canGoPrev: function() {
        return this.state.page > 0;
      },
      _canGoNext: function() {
        return this.state.page + 1 < this._numPages();
      },
      _goPrev: function() {
        this._canGoPrev() && this._setPage(this.state.page - 1, y);
      },
      _goNext: function() {
        this._canGoNext() && this._setPage(this.state.page + 1, y);
      },
      _openStore: function() {
        l.resetNumNewPacks();
        var ca = this.props.stickerInterface == o.COMPOSER;
        q.showStore(null, ca);
      },
      render: function() {
        return (j.createElement("div", {
          className: "_5r85"
        }, this._renderStoreButton(), this._renderPrevArrow(), this._renderNextArrow(), j.createElement("div", {
          className: "_5r88"
        }, j.createElement("div", {
          className: "_5r89",
          ref: "positioner"
        }, this._renderPages()))));
      },
      _selectPack: function(ca) {
        var da = p.getPack(ca);
        if (da && da.isPromoted) l.addPack(ca);
        if (ca === n.SEARCH_PACK_ID) this.props.resetTagSelectorFunc();
        if (this.props.onPackClick) {
          this.props.onPackClick(ca);
        } else l.selectPack(ca);
      },
      _renderPages: function() {
        var ca = this.props.packs.map(function(ga, ha) {
            return j.createElement(ba, {
              key: ga.id,
              onClick: function() {
                return this._selectPack(ga.id);
              }.bind(this),
              pack: ga,
              selected: this.props.selectedPackID === ga.id,
              index: ha,
              isComments: this.props.stickerInterface == o.COMMENTS
            });
          }.bind(this)),
          da = [];
        for (var ea = 0; ea < ca.length; ea += x) {
          var fa = ea;
          ea === 0 && ea++;
          da.push(j.createElement("div", {
            className: "_5r81",
            key: ea
          }, ca.slice(fa, ea + x)));
        }
        return da;
      },
      _renderStoreButton: function() {
        return (j.createElement("a", {
          "aria-label": z,
          className: "_5r86 rfloat",
          "data-hover": "tooltip",
          onClick: this._openStore
        }, j.createElement(k, {
          className: "_5r87",
          src: v('/images/messaging/stickers/selector/sticker_store.png')
        }), this._renderJewel()));
      },
      _renderJewel: function() {
        var ca = this.props.numNewPacks;
        if (!ca) return null;
        return (j.createElement(r, {
          className: "rfloat _3fhs",
          count: ca,
          maxcount: 9,
          type: "special"
        }));
      },
      _renderPrevArrow: function() {
        if (!this._canGoPrev()) return null;
        var ca = i.isRTL() ? v('/images/messaging/stickers/selector/right.png') : v('/images/messaging/stickers/selector/left.png');
        return (j.createElement("a", {
          className: (("_37wu") + (' ' + "lfloat")),
          onClick: this._goPrev
        }, j.createElement(k, {
          className: "_5r84",
          src: ca
        })));
      },
      _renderNextArrow: function() {
        if (!this._canGoNext()) return null;
        var ca = i.isRTL() ? v('/images/messaging/stickers/selector/left.png') : v('/images/messaging/stickers/selector/right.png');
        return (j.createElement("a", {
          className: (("_37wv") + (' ' + "rfloat")),
          onClick: this._goNext
        }, j.createElement(k, {
          className: "_5r84",
          src: ca
        })));
      }
    }),
    ba = j.createClass({
      displayName: "PackIcon",
      propTypes: {
        index: j.PropTypes.number,
        isComments: j.PropTypes.bool,
        onClick: j.PropTypes.func,
        pack: j.PropTypes.instanceOf(h).isRequired,
        selected: j.PropTypes.bool
      },
      getDefaultProps: function() {
        return {
          isComments: false,
          onClick: t
        };
      },
      _getPackIcon: function(ca) {
        if (ca.id == n.SEARCH_PACK_ID) return v('/images/messaging/stickers/icons/search.png');
        if (ca.id == n.MRU_STICKER_PACK) return v('/images/messaging/stickers/icons/recent.png');
        if (ca.id == n.EMOTICON_PACK_ID) return v('/images/messaging/stickers/icons/emoji.png');
        return ca.icon;
      },
      render: function() {
        var ca = this.props.pack,
          da = m.WebStickerSearch && !m.StickerSearchInRecent ? this.props.index === 1 || this.props.index === 2 : this.props.index === 1,
          ea = (("_5r8a") + (this.props.selected ? ' ' + "_5r8b" : '') + (ca.id == n.MRU_STICKER_PACK ? ' ' + "_5qcj" : '') + (ca.id == n.SEARCH_PACK_ID ? ' ' + "_5qck" : '') + (da ? ' ' + "_eb3" : '')),
          fa = this.props.isComments && !ca.isCommentsCapable,
          ga = "This pack is only available in messages",
          ha = fa ? t : function() {
            return this.props.onClick(ca.id);
          }.bind(this);
        return (j.createElement("a", {
          "aria-label": fa ? ga : ca.name,
          className: ea,
          "data-id": ca.id,
          "data-hover": "tooltip",
          ref: "search_icon",
          onClick: ha,
          tabIndex: "0"
        }, j.createElement(k, {
          className: ((fa ? "_2ji6" : '') + (' ' + "_5r8c") + (m.WebStickerSearch ? ' ' + "_1viy" : '')),
          src: this._getPackIcon(ca)
        })));
      }
    });
  e.exports = aa;
}, null);
__d("StickersFlyoutStickerSelector.react", ["BanzaiLogger", "Grid.react", "Image.react", "ScrollableArea.react", "React", "Sticker.react", "StickerConstants", "StickerConfig", "StickerImages", "StickerInterfaces", "StickerSearch", "StickerState", "StickerUtils", "XUISpinner.react", "cx", "debounce", "emptyFunction", "fbt", "getObjectValues", "ix", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
  'use strict';
  var ba = h.GridItem,
    ca = 320,
    da = 278,
    ea = m.MRU_STICKER_PACK,
    fa = 44,
    ga = 112,
    ha = n.AutoAnimateStickerTray ? 'load_and_hover' : 'hover',
    ia = v(function(ka, la) {
      if (!ka) return;
      g.log('StickersLoggerConfig', {
        event: 'search_sticker',
        searchtoken: ka,
        numsearchresults: la.length
      });
    }, 1000),
    ja = k.createClass({
      displayName: "StickersFlyoutStickerSelector",
      propTypes: {
        height: k.PropTypes.number,
        stickerInterface: k.PropTypes.oneOf(y(p)),
        onQueryResultsFound: k.PropTypes.func,
        onScroll: k.PropTypes.func,
        packID: k.PropTypes.string,
        singleWordTags: k.PropTypes.array,
        typeaheadTags: k.PropTypes.array,
        userInput: k.PropTypes.string
      },
      getDefaultProps: function() {
        return {
          stickerInterface: p.MESSAGES,
          onScroll: w,
          shown: false
        };
      },
      getInitialState: function() {
        return {
          loading: false,
          stickers: []
        };
      },
      componentDidMount: function() {
        if (this.props.packID) {
          this.requestStickersForPack(this.props.packID);
          return;
        }
        if (this.props.userInput) this.requestStickersForQuery(this.props.userInput);
      },
      componentWillReceiveProps: function(ka) {
        if (ka.packID && ka.packID !== this.props.packID) {
          this.requestStickersForPack(ka.packID);
        } else if (ka.userInput !== this.props.userInput) this.requestStickersForQuery(ka.userInput);
      },
      requestStickersForQuery: function(ka) {
        this.setState({
          loading: true
        });
        q.requestStickersForQuery(ka, function(la) {
          la.map(function(ma) {
            return o.cacheSticker(ma);
          });
          if (!this.props.tagChosen) ia(ka, la);
          if (this.props.stickerInterface == p.COMPOSER) la = la.filter(function(ma) {
            return ma.isComposerCapable;
          });
          if (this.props.stickerInterface == p.COMMENTS) la = la.filter(function(ma) {
            return ma.isCommentsCapable;
          });
          if (this.props.stickerInterface == p.MESSAGES) la = la.filter(function(ma) {
            return ma.isMessengerCapable;
          });
          if (this.isMounted()) {
            this.setState({
              loading: false,
              stickers: la
            });
            if (n.EnterToSendSticker) this.props.onQueryResultsFound && this.props.onQueryResultsFound(la);
          }
        }.bind(this));
      },
      requestStickersForPack: function(ka) {
        this.setState({
          loading: true
        });
        o.requestStickersForPack(ka, m.TRAY_SIZE, function(la) {
          if (ka == ea) {
            la = r.getMRUStickerPack(la);
            if (this.props.stickerInterface == p.COMPOSER) la = la.filter(function(ma) {
              return ma.isComposerCapable;
            });
            if (this.props.stickerInterface == p.COMMENTS) la = la.filter(function(ma) {
              return ma.isCommentsCapable;
            });
            if (this.props.stickerInterface == p.MESSAGES) la = la.filter(function(ma) {
              return ma.isMessengerCapable;
            });
          }
          this.setState({
            loading: false,
            stickers: la
          });
        }.bind(this));
      },
      renderStickers: function() {
        return this.state.stickers.map(function(ka) {
          var la = s.getScaledDimensions(ka.height, ka.width, m.TRAY_SIZE);
          return (k.createElement(ba, {
            key: ka.id
          }, k.createElement("div", {
            className: "_5r8h",
            "data-id": ka.id
          }, k.createElement(l, {
            animationTrigger: ha,
            className: "_5r8i",
            frameCount: ka.frameCount,
            frameRate: ka.frameRate || 83,
            framesPerCol: ka.framesPerCol,
            framesPerRow: ka.framesPerRow,
            shown: this.props.shown,
            sourceHeight: la.height,
            sourceURI: ka.sourceURI,
            sourceWidth: la.width,
            spriteURI: ka.spriteURI,
            paddedSpriteURI: ka.paddedSpriteURI,
            stickerID: ka.id,
            style: {
              cursor: 'pointer'
            }
          }))));
        }.bind(this));
      },
      _onScroll: function() {
        var ka = this.refs.stickerScrollable;
        if (ka) {
          var la = ka.getArea().getScrollTop();
          this.props.onScroll(la);
        }
      },
      render: function() {
        if (this.state.loading) {
          return (k.createElement("div", {
            className: "_e0r"
          }, k.createElement(t, {
            size: "large"
          })));
        } else if (this.state.stickers.length === 0) {
          var ka = (ca - fa * 2 - ga) / 2 + "px";
          return (k.createElement("div", {
            className: "_5jdt",
            style: {
              marginTop: ka
            }
          }, k.createElement(i, {
            src: z("/images/messaging/stickers/icons/sad_face.png")
          }), k.createElement("p", null, "No Stickers to Show")));
        }
        return (k.createElement(j, {
          ref: "stickerScrollable",
          height: this.props.height || ca,
          onScroll: aa(this._onScroll, 200),
          width: da,
          fade: true
        }, k.createElement("div", {
          className: "_5r8k"
        }, k.createElement(h, {
          cols: 4,
          fixed: true
        }, this.renderStickers()))));
      }
    });
  e.exports = ja;
}, null);
__d("StickersFlyoutTagSelector.react", ["BanzaiLogger", "Grid.react", "ScrollableArea.react", "Parent", "React", "Image.react", "StickerConfig", "StickerConstants", "StickersFlyoutStickerSelector.react", "StickerInterfaces", "StickerSearch", "StickerState", "StickerUtils", "Toggler", "XUIButton.react", "XUICloseButton.react", "XUITextInput.react", "cx", "emptyFunction", "fbt", "getObjectValues"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
  'use strict';
  var ba = h.GridItem,
    ca = 320,
    da = 278,
    ea = 44,
    fa = k.createClass({
      displayName: "StickersFlyoutTagSelector",
      propTypes: {
        trigger: k.PropTypes.string,
        stickerInterface: k.PropTypes.oneOf(aa(p)),
        resetTrigger: k.PropTypes.func,
        shown: k.PropTypes.bool,
        onSelectSticker: k.PropTypes.func
      },
      getInitialState: function() {
        return {
          input: '',
          isScrolling: false,
          tagChosen: false,
          matchedStickers: []
        };
      },
      getDefaultProps: function() {
        return {
          trigger: null,
          stickerInterface: p.MESSAGES,
          resetTrigger: y,
          shown: false,
          onSelectSticker: y
        };
      },
      componentDidMount: function() {
        var ga = j.byClass(this.getDOMNode(), 'uiToggle');
        if (ga) this._togglerSub = t.listen('show', ga, function() {
          this.isMounted() && this.focusInput();
        }.bind(this));
        this.focusInput();
        this.selectTrigger(this.props.trigger);
      },
      componentWillUnmount: function() {
        this._togglerSub && this._togglerSub.unsubscribe();
      },
      componentWillReceiveProps: function(ga) {
        this.selectTrigger(ga.trigger);
      },
      focusInput: function() {
        this.refs.inputField.focusInput && this.refs.inputField.focusInput();
      },
      _setMatchedStickers: function(ga) {
        this.setState({
          matchedStickers: ga ? ga : []
        });
      },
      _onEnter: function(ga) {
        ga.preventDefault();
        ga.stopPropagation();
        if (!m.EnterToSendSticker) return;
        var ha = this.state.matchedStickers;
        if (ha && ha.length === 1) {
          this.props.onSelectSticker(ha[0].id, ga);
          this.setState({
            matchedStickers: []
          });
        }
      },
      _inputChanged: function(ga) {
        this.setState({
          input: ga.target.value,
          tagChosen: false,
          isScrolling: false
        });
      },
      _normalizeInput: function(ga) {
        return ga.trim().replace(/\s+/, ' ').toLowerCase();
      },
      _handleResetButtonClick: function(ga) {
        ga.preventDefault();
        this.reset();
      },
      reset: function() {
        this.setState(this.getInitialState());
      },
      renderContentArea: function() {
        if (this.state.tagChosen || this._normalizeInput(this.state.input).length > 1) {
          return this.renderStickers();
        } else return m.StickerSearchInRecent ? this.renderRecentStickers() : this.renderTags();
      },
      render: function() {
        return (k.createElement("div", {
          className: (("_217a") + (this.state.isScrolling ? ' ' + "_1hg1" : ''))
        }, k.createElement("div", {
          className: "_5jdr"
        }, k.createElement("span", {
          className: "_5jds"
        }), k.createElement(w, {
          onEnter: this._onEnter,
          onChange: this._inputChanged,
          ref: "inputField",
          placeholder: "Search stickers",
          value: this.state.input
        }), k.createElement(v, {
          size: "small",
          onClick: this._handleResetButtonClick,
          className: ((this.state.input.length === 0 ? "hidden_elem" : ''))
        })), this.renderContentArea()));
      },
      selectTag: function(ga) {
        g.log('StickersLoggerConfig', {
          event: 'select_tag',
          tagid: ga.id
        });
        this.setState({
          tagChosen: true,
          input: s.capitalizeWords(ga.name)
        });
        this.focusInput();
      },
      selectTrigger: function(ga) {
        if (ga !== null) {
          var ha = q.getTagByName(ga);
          this.setState({
            tagChosen: true,
            input: s.capitalizeWords(ha.name)
          });
          this.props.resetTrigger();
        }
      },
      _onScroll: function(ga) {
        this.setState({
          isScrolling: !!ga
        });
      },
      renderStickers: function() {
        var ga = this._normalizeInput(this.state.input);
        return (k.createElement(o, {
          ref: "selector",
          height: ca - ea,
          userInput: ga,
          onScroll: this._onScroll,
          stickerInterface: this.props.stickerInterface,
          tagChosen: this.state.tagChosen,
          shown: this.props.shown,
          onQueryResultsFound: this._setMatchedStickers
        }));
      },
      renderRecentStickers: function() {
        if (this._normalizeInput(this.state.input).length === 1) return k.createElement("div", null);
        return (k.createElement(o, {
          ref: "selector",
          height: ca - ea,
          packID: n.MRU_STICKER_PACK,
          onScroll: this._onScroll,
          stickerInterface: this.props.stickerInterface,
          shown: this.props.shown
        }));
      },
      renderTags: function() {
        var ga = r.getFeaturedTags().filter(function(ha) {
          return ha.sourceURI !== null;
        }).sort(function(ha, ia) {
          return ha.order - ia.order;
        }).map(function(ha, ia) {
          return k.createElement(ba, {
            key: ia
          }, k.createElement("div", {
            className: (("_t5c") + (ia < 2 ? ' ' + "_1b27" : '') + (ia % 2 === 0 ? ' ' + "_t5d" : '') + (ia % 2 !== 0 ? ' ' + "_t5e" : ''))
          }, k.createElement(u, {
            image: k.createElement(l, {
              src: ha.sourceURI
            }),
            label: ha.name,
            onClick: this.selectTag.bind(this, ha),
            className: "_5jdu",
            style: {
              background: '#' + ha.color_code
            },
            disabled: this._normalizeInput(this.state.input).length === 1
          })));
        }.bind(this));
        return (k.createElement(i, {
          height: ca - ea,
          width: da - 16,
          shadow: true,
          fade: true,
          className: "_5jei"
        }, k.createElement(h, {
          spacing: "pas",
          cols: 2,
          fixed: true,
          ref: "grid"
        }, ga)));
      }
    });
  e.exports = fa;
}, null);
__d("StickersFlyout.react", ["BanzaiLogger", "Event", "Keys", "MessagesEmoticons.react", "Parent", "ReactComponentWithPureRenderMixin", "React", "StickersFlyoutPackSelector.react", "StickersFlyoutStickerSelector.react", "StickerActions", "StickerConstants", "StickerConfig", "StickersFlyoutTagSelector.react", "StickerInterfaces", "StickerState", "SubscriptionsHandler", "Toggler", "XUISpinner.react", "arrayContains", "cx", "getObjectValues"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
  'use strict';
  var ba = q.SEARCH_PACK_ID,
    ca = m.createClass({
      displayName: "StickersFlyout",
      mixins: [l],
      propTypes: {
        stickerInterface: m.PropTypes.oneOf(aa(t)),
        onStickerSelect: m.PropTypes.func.isRequired,
        onEmoticonSelect: m.PropTypes.func,
        onShown: m.PropTypes.func,
        onHidden: m.PropTypes.func,
        onEscKeyDown: m.PropTypes.func,
        onPackSelect: m.PropTypes.func,
        packID: m.PropTypes.string,
        shown: m.PropTypes.bool,
        trigger: m.PropTypes.string
      },
      getDefaultProps: function() {
        return {
          stickerInterface: t.MESSAGES,
          packID: u.getTrayPackID(),
          shown: false,
          trigger: null
        };
      },
      getInitialState: function() {
        return {
          dataReady: false,
          numNewPacks: 0,
          shown: false
        };
      },
      componentDidMount: function() {
        if (r.LoadStickerEarly && !this.state.dataReady) this.loadTrayData();
        this._toggle = k.byClass(this.getDOMNode(), 'uiToggle');
        this._subscriptions = new v();
        if (this._toggle) {
          this._subscriptions.addSubscriptions(w.listen('show', this._toggle, this._onShownWrapper), w.listen('hide', this._toggle, this._onHidden));
        } else if (!r.LoadStickerEarly && this.props.shown && !this.state.dataReady) this.loadTrayData();
        this._subscriptions.addSubscriptions(h.listen(this.getDOMNode(), 'keydown', this._onKeyDown), u.addListener(u.PACKS_CHANGED, this.packsUpdated), u.addListener(u.NUM_NEW_PACKS_CHANGED, function(da) {
          this.setState({
            numNewPacks: da
          });
        }.bind(this)));
      },
      _onShownWrapper: function() {
        if (this.props.onShown) {
          this.props.onShown(this._onShown);
        } else this._onShown();
      },
      _onShown: function() {
        g.log('StickersLoggerConfig', {
          event: 'open_tray'
        });
        if (!r.LoadStickerEarly && !this.state.dataReady) this.loadTrayData();
        if (this.props.packID === ba) this.refs.tagSelector && this.refs.tagSelector.focusInput();
        this.refs.packSelector.onFlyoutShown();
        this.setState({
          shown: true
        });
      },
      _onHidden: function() {
        this.resetTagSelector();
        this.props.onHidden && this.props.onHidden();
        this.setState({
          shown: false
        });
      },
      componentWillUnmount: function() {
        this._subscriptions.release();
      },
      componentWillReceiveProps: function(da) {
        if (!this.state.dataReady && da.shown) this.loadTrayData();
      },
      componentDidUpdate: function(da) {
        if (!da.shown && this.props.shown) {
          this._onShown();
        } else if (da.shown && !this.props.shown) this._onHidden();
      },
      _onKeyDown: function(event) {
        if (event.keyCode === i.ESC && this.props.onEscKeyDown) {
          this.props.onEscKeyDown();
          event.kill();
        }
      },
      resetTagSelector: function() {
        this.refs.tagSelector && this.refs.tagSelector.reset();
      },
      loadTrayData: function() {
        u.onTrayDataReady(function() {
          var da = u.getNumNewPacks();
          this.setState({
            dataReady: true,
            numNewPacks: da
          });
          var ea = u.getPacksInTray()[0].id,
            fa = this.props.packID;
          if (!fa || !y(u.getPackIDsInTray(), fa)) {
            p.selectPack(ea, true);
            this.props.onPackSelect && this.props.onPackSelect(ea);
          }
        }.bind(this));
      },
      _isShown: function() {
        return this._toggle ? this.state.shown : this.props.shown;
      },
      loadPack: function() {
        if (!this.state.dataReady) return (m.createElement("div", {
          className: "_e0r"
        }, m.createElement(x, {
          size: "large"
        })));
        if (this.props.packID === q.EMOTICON_PACK_ID) return (m.createElement("div", {
          className: "_5r8l",
          "data-id": this.props.packID
        }, m.createElement(j, {
          onEmoticonSelect: this.props.onEmoticonSelect
        })));
        if (this.props.packID === ba && r.WebStickerSearch) return (m.createElement("div", {
          className: "_5r8l"
        }, m.createElement(s, {
          ref: "tagSelector",
          className: "fbStickersFlyoutTagSelector",
          trigger: this.props.trigger,
          resetTrigger: function() {
            return this.setProps({
              trigger: null
            });
          }.bind(this),
          stickerInterface: this.props.stickerInterface,
          shown: this._isShown(),
          onSelectSticker: this.onSelectSticker
        })));
        return (m.createElement("div", {
          className: "_5r8l",
          "data-id": this.props.packID
        }, m.createElement(o, {
          ref: "selector",
          packID: this.props.packID,
          stickerInterface: this.props.stickerInterface,
          shown: this._isShown()
        })));
      },
      packsUpdated: function() {
        var da = u.getPackIDsInTray();
        if (!y(da, this.props.packID)) {
          p.selectPack(da[0]);
          return;
        }
        this.forceUpdate(null);
      },
      onSelectSticker: function(da, event) {
        if (da) {
          u.updateRecentlyUsed(da);
          this.props.onStickerSelect(da, event);
          if (r.PromotePackFromSearch && this.props.packID === q.SEARCH_PACK_ID) u.promotePackSentFromSearch(da);
          u.clearShowStickerReplyNUX();
        }
      },
      selectedSticker: function(event) {
        var da = k.byClass(event.target, "_5r8h");
        if (da) {
          var ea = da.getAttribute('data-id');
          this.onSelectSticker(ea, event);
        }
      },
      render: function() {
        var da;
        if (this.props.stickerInterface == t.COMPOSER) {
          da = u.getPacksInComposerTray();
        } else if (this.props.stickerInterface == t.COMMENTS) {
          da = u.getPacksInCommentsTray();
        } else if (this.props.stickerInterface == t.MESSAGES) da = u.getPacksInTray();
        return (m.createElement("div", {
          className: "_5r8f"
        }, m.createElement("div", {
          className: "_5r8e"
        }, m.createElement(n, {
          ref: "packSelector",
          numNewPacks: this.state.numNewPacks,
          onPackClick: this.props.onPackSelect,
          selectedPackID: this.props.packID,
          packs: da,
          stickerInterface: this.props.stickerInterface,
          resetTagSelectorFunc: this.resetTagSelector
        })), m.createElement("div", {
          className: "_5r8m",
          onClick: this.selectedSticker
        }, this.loadPack())));
      }
    });
  e.exports = ca;
}, null);