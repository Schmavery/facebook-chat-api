/*!CK:3539981987!*/
/*1424464356,*/
if (self.CavalryLogger) {
  CavalryLogger.start_js(["g9alH"]);
}

__d("MessageThreadViewSource", [], function(a, b, c, d, e, f) {
  e.exports = {
    UNSPECIFIED: "unspecified",
    LEGACY: "legacy",
    LEGACY_MESSAGES_PREVIEW: "legacy_messages_preview",
    REFRESH_SPRINGBOARD: "springboard",
    REFRESH_MESSAGETAB: "message_tab",
    REFRESH_PERMALINK: "permalink",
    REFRESH_HIGHLANDER_JEWEL: "highlander_jewel",
    REFRESH_SEARCH_TYPEAHEAD: "search_typeahead",
    MTOUCH_MESSAGE_TAB: "mtouch_message_tab",
    MBASIC_MESSAGE_TAB: "mbasic_message_tab"
  };
}, null);
__d("BlueBar", ["Arbiter", "Event", "Run", "SubscriptionsHandler"], function(a, b, c, d, e, f, g, h, i, j) {
  var k;

  function l(event) {
    if (g.inform('BlueBar/homeClick') === false) event.preventDefault();
  }

  function m() {
    if (k) {
      k.release();
      k = null;
    }
  }
  var n = {
    listen: function(o) {
      if (!k) {
        k = new j();
        i.onUnload(m);
      }
      k.addSubscriptions(h.listen(o, 'click', l));
    }
  };
  e.exports = n;
}, null);
__d("BlueBarMinWidth", ["DOM", "DOMDimensions", "Event", "Locale", "Style", "Vector", "csx", "queryThenMutateDOM"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  f.init = function() {
    var o = g.find(document, "div._uaw"),
      p = g.find(o, "._59g8"),
      q, r = n.bind(null, function() {
        var s = h.getElementDimensions(o).width,
          t;
        if (j.isRTL()) {
          t = -l.getElementPosition(o).x;
        } else t = l.getElementPosition(o).x + s - h.getViewportDimensions().width;
        var u = s - t - v;
        if (t > 0 && u > 0) {
          var v = h.measureElementBox(o, 'width', true);
          q = u + 'px';
        } else q = '';
      }, function() {
        k.set(p, 'width', q);
      }, 'BlueBarMinWidth');
    i.listen(window, 'resize', r);
    r();
  };
}, null);
__d("NotificationCounter", ["Arbiter", "DocumentTitle", "JSLogger"], function(a, b, c, d, e, f, g, h, i) {
  var j = {
      messages: 0,
      notifications: 0,
      requests: 0
    },
    k = {
      init: function(l) {
        g.subscribe('update_title', this._handleUpdate.bind(this));
        g.subscribe('jewel/count-updated', this._handleCountUpdate.bind(this));
      },
      getCount: function() {
        var l = 0;
        for (var m in j) {
          var n = Number(j[m]);
          if (typeof j[m] == 'string' && isNaN(n)) return j[m];
          if (isNaN(n) || n < 0) {
            i.create('jewels').error('bad_count', {
              jewel: m,
              count: j[m]
            });
            continue;
          }
          l += n;
        }
        return l;
      },
      updateTitle: function() {
        var l = this.getCount(),
          m = h.get();
        m = l ? '(' + l + ') ' + m : m;
        h.set(m, true);
      },
      _handleCountUpdate: function(l, m) {
        j[m.jewel] = m.count;
        this.updateTitle();
      },
      _handleUpdate: function(l, m) {
        this.updateTitle();
      }
    };
  e.exports = k;
}, null);
__d("XNotificationsSyncController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/notifications\/sync\/", {
    lastSync: {
      type: "Int",
      required: true
    }
  });
}, null);
__d("NotificationSync", ["AsyncRequest", "JSLogger", "NotificationConstants", "NotificationUpdates", "Poller", "SystemEvents", "UserActivity", "XNotificationsSyncController", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = 1000 * 60 * 60,
    q = 'channel_reload',
    r = 'time_travel',
    s = 'online',
    t = 'inactive_refresh',
    u = h.create('notifications'),
    v, w = 0;

  function x(ba) {
    var ca = n.getURIBuilder().setInt('lastSync', w).getURI();
    ba.setHandler(y).setOption('suppressErrorAlerts', true).setErrorHandler(z).setMethod('GET').setReadOnly(true).setURI(ca).setAllowCrossPageTransition(true);
  }

  function y(ba) {
    var ca = ba.getPayload();
    w = ca.lastSync;
    if (ca.syncPayload) j.handleUpdate(i.PayloadSourceType.SYNC, ca.syncPayload);
  }

  function z(ba) {}
  var aa = {
    start: function(ba, ca) {
      if (v) return;
      w = ca;
      v = new k({
        interval: ba,
        setupRequest: x,
        clearOnQuicklingEvents: false,
        dontStart: true
      });
      o(v.start.bind(v), ba);

      function da(ea) {
        v.request();
        u.bump(ea);
      }
      l.subscribe(l.TIME_TRAVEL, da.bind(null, r));
      l.subscribe(l.ONLINE, function(ea, fa) {
        fa && da(s);
      });
      m.subscribe(function(ea, fa) {
        if (fa.idleness > p) da(t);
      });
    },
    sendRequest: function() {
      v.request();
    },
    setuplastSync: function(ba) {
      w = ba;
    },
    sendReloadRequest: function() {
      var ba = new g();
      ba.setIsBackgroundRequest(true);
      x(ba);
      ba.send();
      u.bump(q);
    }
  };
  e.exports = aa;
}, null);
__d("NotificationJewelController", ["Arbiter", "ChannelConstants", "Event", "NotificationConstants", "NotificationCounter", "NotificationSeenState", "NotificationSync", "NotificationUpdates", "NotificationUserActions", "createObjectFrom", "curry"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  var r = 0;

  function s(u) {
    g.inform('jewel/count-updated', {
      jewel: u,
      count: l.getUnseenIDs().length
    }, g.BEHAVIOR_STATE);
  }

  function t(u, v, w, x, y, z) {
    "use strict";
    k.init();
    var aa = i.listen(u.getRoot(), 'mouseover', function() {
      aa.remove();
      aa = null;
      v.open();
    });
    if (u.isOpen()) {
      v.open();
    } else var ba = u.subscribe('opened', function() {
      ba.unsubscribe();
      ba = null;
      v.open();
    });
    var ca = v.pause.bind(v);
    u.subscribe('opened', function() {
      setTimeout(ca, 0);
      var fa = l.getUnseenIDs();
      if (fa.length) o.markNotificationsAsSeen(fa);
    });
    u.subscribe('closed', function() {
      v.unpause();
      s(u.name);
    });
    n.subscribe('seen-state-updated', q(s, u.name));
    n.handleUpdate(j.PayloadSourceType.INITIAL_LOAD, {
      seenState: p(w, r)
    });
    if (!z) m.start(x, y);
    if (z) {
      m.setuplastSync(y);
      var da = m.sendReloadRequest,
        ea = h.ON_INVALID_HISTORY;
      g.subscribe(ea, da);
    }
    s(u.name);
  }
  e.exports = t;
}, null);
__d("NotificationJewelHeaderController", ["DOM", "Event", "NotificationSeenState", "NotificationUserActions", "NotificationUpdates"], function(a, b, c, d, e, f, g, h, i, j, k) {
  function l(m, n) {
    "use strict";
    h.listen(m, 'click', function() {
      var o = i.getUnreadIDs();
      if (o.length) j.markNotificationsAsRead(o);
    });
    k.subscribe('read-state-updated', function() {
      if (n) g.setContent(n, i.getUnreadCount());
    });
  }
  e.exports = l;
}, null);
__d("NotificationHiddenState", ["NotificationUpdates", "copyProperties"], function(a, b, c, d, e, f, g, h) {
  var i = {};
  g.subscribe('update-hidden', function(k, l) {
    if (l.hiddenState) {
      i = h(i, l.hiddenState);
      g.didUpdateHiddenState(Object.keys(l.hiddenState));
    }
  });
  var j = {
    isHidden: function(k) {
      if (i[k]) return i[k];
      return false;
    }
  };
  e.exports = j;
}, null);
__d("ReadToggle.react", ["React", "cx", "emptyFunction", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
  'use strict';
  var k = g.createClass({
    displayName: "ReadToggle",
    propTypes: {
      isRead: g.PropTypes.bool.isRequired,
      onClick: g.PropTypes.func,
      readLabel: g.PropTypes.node,
      unreadLabel: g.PropTypes.node
    },
    getDefaultProps: function() {
      return {
        onClick: i
      };
    },
    render: function() {
      return (g.createElement("div", {
        "aria-label": this.props.isRead ? this.props.readLabel : this.props.unreadLabel,
        className: this._getClasses(),
        "data-hover": "tooltip",
        "data-tooltip-alignh": "center",
        onClick: this.props.onClick,
        role: "button"
      }));
    },
    _getClasses: function() {
      return j(this.props.className, ((!this.props.isRead ? "_5c9q" : '') + (this.props.isRead ? ' ' + "_5c9_" : '')));
    }
  });
  e.exports = k;
}, null);
__d("XNotificationsGenericNegativeFeedbackController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/notifications\/feedback\/generic\/negative\/", {
    notif_id: {
      type: "Int",
      required: true
    }
  });
}, null);
__d("NotificationJewelItem.react", ["AsyncRequest", "AsyncResponse", "BizSiteIdentifier.brands", "CloseButton.react", "Event", "FlexibleBlock.react", "ImageBlock.react", "Keys", "NotificationPhotoThumbnail", "NotificationURI", "NotificationUserActions", "React", "TextWithEntities.react", "ReadToggle.react", "Timestamp.react", "VaultBoxURI", "XUIButton.react", "PopoverMenu.react", "ReactXUIMenu", "MenuSeparator.react", "XNotificationsGenericNegativeFeedbackController", "cx", "invariant", "mergeObjects", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea) {
  var fa = y.Item;

  function ga(ja, ka) {
    return r.createElement("span", {
      className: "fwb"
    }, ja);
  }

  function ha(ja) {
    return !!(ja && ja.id && !ja.is_facebook_app);
  }
  var ia = r.createClass({
    displayName: "NotificationJewelItem",
    getInitialState: function() {
      return {
        showingOptions: false,
        negativeFeedbackConfirmation: null,
        canReportAsSpam: false,
        spamReportConfirmation: null,
        sendingFeedback: false,
        mayUndoHide: false,
        genericNegativeFeedbackConfirmation: null,
        gaveGNF: this.props.gaveGNF,
        isBizSite: i.isBizSite()
      };
    },
    _onKeyDownItem: function(ja) {
      if (k.getKeyCode(ja.nativeEvent) == n.RETURN) this._markItemRead();
    },
    _markItemReadIfUnreadFromReadButton: function() {
      if (!this.props.isRead) q.setNextIsFromReadButton(true);
      this._markItemReadIfUnread();
    },
    _markItemReadIfUnread: function() {
      !this.props.isRead && this._markItemRead();
    },
    _markItemRead: function() {
      q.markNotificationsAsRead([this.props.alert_id]);
    },
    _onFeedbackError: function(ja) {
      h.defaultErrorHandler(ja);
      this.setState({
        sendingFeedback: false
      });
    },
    _onHideSuccess: function(ja) {
      var ka = ja.getPayload();
      ca(ka.confirmation);
      this.setState({
        negativeFeedbackConfirmation: ka.confirmation,
        canReportAsSpam: ka.canReportAsSpam,
        sendingFeedback: false,
        showingOptions: true
      });
    },
    _onHideAppSuccess: function(ja) {
      var ka = ja.getPayload(),
        la = ka.confirmation,
        ma = ka.canReportAsSpam;
      ca(la);
      this.setState({
        negativeFeedbackConfirmation: la,
        canReportAsSpam: ma,
        mayUndoHide: true,
        sendingFeedback: false,
        showingOptions: true
      });
    },
    _onSpamReportSuccess: function(ja) {
      var ka = ja.getPayload().spamReportConfirmation;
      this.setState({
        negativeFeedbackConfirmation: null,
        spamReportConfirmation: ka,
        sendingFeedback: false
      });
    },
    _onHide: function() {
      q.markNotificationAsHidden(this.props.alert_id, this._onHideSuccess, this._onFeedbackError);
      this.setState({
        sendingFeedback: true,
        mayUndoHide: true
      });
    },
    _onShow: function() {
      var ja = this.props.negative ? this.props.negative.subscription_level : null;
      q.markNotificationAsVisible(this.props.alert_id, ja, function() {
        this.setState({
          negativeFeedbackConfirmation: null,
          sendingFeedback: false,
          showingOptions: false
        });
      }.bind(this), this._onFeedbackError);
      this.setState({
        sendingFeedback: true
      });
    },
    _onReportSpam: function() {
      q.markNotificationAsSpam(this.props.alert_id, this._onSpamReportSuccess, this._onFeedbackError);
      this.setState({
        sendingFeedback: true
      });
    },
    _markAppAsHidden: function() {
      q.markAppAsHidden(this.props.alert_id, this.props.application.id, this._onHideAppSuccess, this._onFeedbackError);
      this.setState({
        sendingFeedback: true
      });
    },
    _markAppAsVisible: function() {
      q.markAppAsVisible(this.props.alert_id, this.props.application.id, function() {
        this.setState({
          negativeFeedbackConfirmation: null,
          sendingFeedback: false,
          showingOptions: false,
          mayUndoHide: false
        });
      }.bind(this), this._onFeedbackError);
      this.setState({
        sendingFeedback: true
      });
    },
    _renderAttachedImage: function(ja) {
      if (ja) return (r.createElement("img", {
        src: ja.uri,
        className: "_42td",
        "aria-hidden": true
      }));
      return r.createElement("span", null);
    },
    _getModifiedTrackingString: function(ja) {
      return JSON.stringify(da(JSON.parse(this.props.tracking), ja));
    },
    _onClickCloseButton: function() {
      if (this.props.useChevron) {
        this.showCloseOptionOnMenuClose = true;
      } else this.setState({
        showingOptions: true
      });
    },
    _onCancelNegativeFeedback: function() {
      this.setState({
        showingOptions: false
      });
    },
    shouldComponentUpdate: function(ja, ka) {
      return (this.props.visible !== ja.visible || this.props.isRead !== ja.isRead || this.props.timestamp !== ja.timestamp || this.state.showingOptions !== ka.showingOptions || this.state.sendingFeedback !== ka.sendingFeedback || this.state.canReportAsSpam !== ka.canReportAsSpam || this.state.spamReportConfirmation !== ka.spamReportConfirmation || this.state.gaveGNF !== ka.gaveGNF);
    },
    _onChevronHide: function() {
      this.props.onChevronHide();
      if (this.showCloseOptionOnMenuClose) {
        this.showCloseOptionOnMenuClose = false;
        var ja = ha(this.props.application) ? this._markAppAsHidden : this._onHide;
        ja();
      }
    },
    _onClickGenericNegative: function() {
      var ja = aa.getURIBuilder().setInt('notif_id', this.props.alert_id.split(':')[1]).getURI();
      new g(ja).setHandler(function(ka) {
        this.setState({
          showingOptions: true,
          genericNegativeFeedbackConfirmation: ka.payload.confirmation
        });
      }.bind(this)).send();
    },
    _onOkayGenericNegativeFeedback: function() {
      this.setState({
        showingOptions: false,
        genericNegativeFeedbackConfirmation: null,
        gaveGNF: true
      });
    },
    render: function() {
      if (!this.props.visible && !this.state.mayUndoHide) return r.createElement("li", {
        className: "_4_62"
      });
      var ja = this.props.negative,
        ka = this.props.negativeTracking,
        la = (("_33c") + (!this.props.isRead ? ' ' + "_4af" : '') + (this.state.showingOptions ? ' ' + "_4ag" : '') + (this.state.sendingFeedback ? ' ' + "_4m8s" : ''));
      if (this.state.negativeFeedbackConfirmation) {
        var ma = this.state.negativeFeedbackConfirmation,
          na;
        if (this.state.canReportAsSpam) na = r.createElement("span", null, r.createElement("span", {
          className: "mhs"
        }, "·"), r.createElement("a", {
          href: "#",
          onClick: this._onReportSpam
        }, "Report app for spam"));
        var oa = ha(this.props.application) ? this._markAppAsVisible : this._onShow;
        return (r.createElement("li", {
          className: la,
          "data-gt": this.props.tracking
        }, r.createElement("div", {
          className: "_4ai"
        }, r.createElement(s, {
          interpolator: ga,
          ranges: ma.ranges,
          aggregatedranges: ma.aggregated_ranges,
          text: ma.text
        }), r.createElement("a", {
          href: "#",
          onClick: oa,
          className: "mls"
        }, "Undo"), na)));
      }
      if (this.state.genericNegativeFeedbackConfirmation) {
        ma = this.state.genericNegativeFeedbackConfirmation;
        return (r.createElement("li", {
          className: la,
          "data-gt": this.props.tracking
        }, r.createElement("div", {
          className: "_4ai"
        }, r.createElement(s, {
          interpolator: ga,
          ranges: ma.ranges,
          aggregatedranges: ma.aggregated_ranges,
          text: ma.text
        })), r.createElement(w, {
          className: "_1_0b",
          href: {
            url: '#'
          },
          label: "OK",
          use: "confirm",
          onClick: this._onOkayGenericNegativeFeedback
        })));
      }
      var pa = this.state.spamReportConfirmation;
      if (pa) return (r.createElement("li", {
        className: la,
        "data-gt": this.props.tracking
      }, r.createElement("div", {
        className: "_4ai"
      }, r.createElement(s, {
        interpolator: ga,
        ranges: pa.ranges,
        aggregatedranges: pa.aggregated_ranges,
        text: pa.text
      }))));
      if (this.state.showingOptions && !this.props.useChevron) {
        var qa = ha(this.props.application) ? this._markAppAsHidden : this._onHide;
        return (r.createElement("li", {
          className: la,
          "data-gt": this.props.tracking
        }, r.createElement("div", {
          className: "_4ai"
        }, r.createElement("div", null, r.createElement(s, {
          interpolator: ga,
          ranges: ja.confirm_question.ranges,
          aggregatedranges: ja.confirm_question.aggregated_ranges,
          text: ja.confirm_question.text
        })), r.createElement("div", {
          className: "mts"
        }, r.createElement(w, {
          "data-gt": this._getModifiedTrackingString(ka.confirm),
          href: {
            url: '#'
          },
          label: ja.turn_off,
          use: "confirm",
          onClick: qa,
          disabled: this.state.sendingFeedback
        }), r.createElement(w, {
          "data-gt": this._getModifiedTrackingString(ka.cancel),
          href: {
            url: '#'
          },
          label: "Keep On",
          onClick: this._onCancelNegativeFeedback,
          disabled: this.state.sendingFeedback
        })))));
      }
      var ra = null;
      if (this.props.title) ra = r.createElement(s, {
        interpolator: ga,
        ranges: this.props.title.ranges,
        aggregatedranges: this.props.title.aggregated_ranges,
        text: this.props.title.text,
        renderEmoji: true,
        renderEmoticons: true
      });
      var sa = null,
        ta = null;
      if (ja) {
        var ua = this._onClickCloseButton,
          va;
        va = this._getModifiedTrackingString(ka.click);
        var wa = (("_4ah") + (' ' + "_55m9"));
        sa = r.createElement(j, {
          className: wa,
          "data-gt": va,
          size: "medium",
          tooltip: ja.button_tooltip,
          onClick: ua,
          ref: "closeButton"
        });
      }
      var xa = p.localize(this.props.url),
        ya = null;
      if (!this.props.noPhotoPreviews) ya = o.getThumbnail(this.props.attachments, this.props.attached_story, this.props.feedback_context);
      var za = ya && p.snowliftable(xa),
        ab = p.isVaultSetURI(xa),
        bb = p.isAlbumDraftRecoveryDialogURI(xa),
        cb = r.createElement(t, {
          className: "_55m9",
          isRead: !!this.props.isRead,
          onClick: this._markItemReadIfUnreadFromReadButton,
          readLabel: "Read",
          unreadLabel: "Mark as Read"
        }),
        db = null;
      if (this.props.useChevron) {
        cb = null;
        sa = null;
        var eb = (("_1_0c") + (' ' + "_55m9")),
          fb = null,
          gb = null;
        if (!this.props.isRead) {
          fb = r.createElement(fa, {
            onclick: this._markItemReadIfUnread
          }, "Mark as read");
          gb = r.createElement(z, null);
        }
        var hb = null;
        if (ja) hb = r.createElement(fa, {
          onclick: this._onClickCloseButton,
          "data-gt": va,
          ref: "closeButton"
        }, r.createElement("div", {
          className: "_3-y-"
        }, ja.menu_option_title), r.createElement("div", {
          className: "_3-y_"
        }, ja.menu_option_text));
        var ib = this.state.gaveGNF ? r.createElement(fa, {
            disabled: true
          }, r.createElement("div", {
            className: "_3-y-"
          }, "Not interested in this?"), r.createElement("div", {
            className: "_3-y_"
          }, "Thanks for telling us that you don't like this notification")) : r.createElement(fa, {
            onclick: this._onClickGenericNegative
          }, r.createElement("div", {
            className: "_3-y-"
          }, "Not interested in this?"), r.createElement("div", {
            className: "_3-y_"
          }, "Give feedback")),
          jb = r.createElement(y, null, ib, hb, gb, fb);
        db = r.createElement(x, {
          alignh: "right",
          menu: jb,
          className: eb,
          onShow: this.props.onChevronShow,
          onHide: this._onChevronHide
        }, r.createElement("div", {
          className: "_1_0d"
        }));
      }
      var kb = (za || ab || bb) ? xa : this.props.ajaxify_url,
        lb = null,
        mb = null,
        nb = ab ? v.getSyncedTabURI().toString() : xa;
      if (za) {
        lb = 'theater';
      } else if (bb) {
        lb = 'async-post';
      } else if (ab || kb) lb = 'dialog';
      var ob = null,
        pb = this.props.actors[0];
      if (pb) ob = {
        backgroundImage: 'url(' + pb.profile_picture.uri + ')'
      };
      var qb = false;
      this.props.attachments.forEach(function(rb) {
        if (qb) return;
        qb = rb.style_list.indexOf("notification_target") >= 0 || rb.style_list.indexOf("question") >= 0;
        if (qb) return;
      });
      return (r.createElement("li", {
        className: la,
        "data-gt": this.props.tracking,
        onMouseLeave: ta
      }, r.createElement("div", {
        className: "anchorContainer"
      }, r.createElement("a", {
        href: nb,
        ajaxify: kb,
        className: (("_33e") + (this.props.useChevron ? ' ' + "_1_0e" : '')),
        rel: lb,
        onClick: mb,
        onMouseDown: this._markItemRead,
        onKeyDown: this._onKeyDownItem
      }, r.createElement(m, null, r.createElement("span", {
        style: ob,
        className: ((!this.props.isNotifsPage ? "_33h" : '') + (this.props.isNotifsPage ? ' ' + "_12u1" : ''))
      }), r.createElement(l, {
        flex: l.FLEX.left
      }, r.createElement("div", {
        className: "_4l_v"
      }, ra, r.createElement(m, {
        className: (("_33f") + (this.state.isBizSite ? ' ' + "_2g48" : ''))
      }, r.createElement("img", {
        className: "_10cu",
        src: this.props.icon.uri
      }), r.createElement("span", null, r.createElement(u, {
        shorten: this.props.shortenTimestamp,
        time: this.props.timestamp.time,
        text: this.props.timestamp.text,
        verbose: this.props.timestamp.verbose,
        className: "_33g"
      })))), this._renderAttachedImage(ya)))), cb, sa, db)));
    }
  });
  e.exports = ia;
}, null);
__d("NotificationJewelList.react", ["Animation", "Event", "LoadingIndicator.react", "NotificationConstants", "NotificationHiddenState", "NotificationJewelItem.react", "NotificationSeenState", "NotificationStore", "NotificationUpdates", "React", "ScrollableArea.react", "Vector", "cx", "debounce", "getObjectValues", "isEmpty", "mapObject", "merge", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
  var z = p.PropTypes,
    aa = 5,
    ba = 160,
    ca = 530,
    da = 40,
    ea = 332,
    fa = 430,
    ga = j.PayloadSourceType.LIVE_SEND,
    ha = p.createClass({
      displayName: "NotificationJewelList",
      propTypes: {
        businessID: z.string,
        hasEverBeenOpened: z.bool,
        maxHeight: z.number,
        negativeTracking: z.object,
        paused: z.bool,
        staticNotifs: z.object,
        tracking: z.string,
        useWideList: z.bool,
        useChevron: z.bool
      },
      getInitialState: function() {
        this._currentlyFetching = false;
        this._pendingNotifs = {};
        this._shouldScroll = false;
        var ia = w(this.props.staticNotifs, function(ja) {
          return ja.seen_state === 'SEEN_AND_READ';
        });
        return {
          canFetchMore: !this.props.staticNotifs,
          notifs: this.props.staticNotifs || {},
          hiddenState: {},
          readState: ia || {},
          showingChevron: false
        };
      },
      componentWillMount: function() {
        if (this.props.staticNotifs) return;
        n.setBusinessID(this.props.businessID);
        this._subscriptions = [o.subscribe('notifications-updated', function(ia, ja) {
          if (ja.source == ga && !v(ja.updates)) {
            this._shouldScroll = true;
            if (this.props.paused) this._pendingNotifs = x(this._pendingNotifs, ja.updates);
            return;
          }
          this._fetchAndUpdate(n.getCount());
        }.bind(this)), o.subscribe(['hidden-state-updated', 'read-state-updated'], function(ia, ja) {
          if (ia == 'hidden-state-updated') {
            var ka = {};
            Object.keys(ja.updates).forEach(function(ma) {
              ka[ma] = k.isHidden(ma);
            });
            this.setState({
              hiddenState: x(this.state.hiddenState, ka)
            });
          } else {
            var la = {};
            Object.keys(ja.updates).forEach(function(ma) {
              la[ma] = m.isRead(ma);
            });
            this.setState({
              readState: x(this.state.readState, la)
            });
          }
        }.bind(this))];
      },
      componentWillUnmount: function() {
        if (this._subscriptions) {
          while (this._subscriptions.length) this._subscriptions.pop().unsubscribe();
          this._subscriptions = null;
        }
      },
      _fetchAndUpdate: function(ia) {
        if (this.props.staticNotifs) return;
        this._currentlyFetching = true;
        n.getNotifications(ia, function(ja) {
          var ka = v(this._pendingNotifs) ? ja : this._getNotifsWithCurrentOrder(ja);
          this._currentlyFetching = false;
          this.setState({
            notifs: ka,
            canFetchMore: n.canFetchMore()
          });
        }.bind(this));
      },
      _getNotifsWithCurrentOrder: function(ia) {
        var ja = Object.keys(this.state.notifs),
          ka = Object.keys(ia).filter(function(ma) {
            return !this.state.notifs[ma];
          }.bind(this));
        ja = ja.concat(ka);
        var la = {};
        ja.forEach(function(ma) {
          if (this._pendingNotifs[ma]) {
            var na = this.state.notifs[ma];
            if (na) la[ma] = na;
          } else la[ma] = ia[ma];
        }.bind(this));
        return la;
      },
      _fetchAndUpdateAll: function() {
        this._pendingNotifs = {};
        this._fetchAndUpdate(n.getCount());
      },
      _fetchNextSet: function() {
        if (!this._currentlyFetching) {
          var ia = Object.keys(this.state.notifs).length;
          this._fetchAndUpdate(ia + aa);
        }
      },
      _onScroll: function() {
        if (this._currentlyFetching || !this.state.canFetchMore) return;
        if (this._isLoadingIndicatorVisible()) this._fetchNextSet();
      },
      _isLoadingIndicatorVisible: function() {
        var ia = this.refs.loading;
        if (!ia) return false;
        var ja = this.refs.scrollable.getDOMNode(),
          ka = r.getElementDimensions(ja).y;
        if (ka === 0) return false;
        var la = r.getElementPosition(ja).y + ka,
          ma = r.getElementPosition(ia.getDOMNode()).y;
        ma -= da;
        return ma < la;
      },
      _calculateHeight: function() {
        var ia = r.getViewportDimensions().y;
        return Math.min(this.props.maxHeight || ca, ia - ba);
      },
      _onChevronShow: function() {
        this.setState({
          showingChevron: true
        });
      },
      _onChevronHide: function() {
        this.setState({
          showingChevron: false
        });
      },
      _renderItems: function() {
        var ia = {};
        u(this.state.notifs).forEach(function(ja) {
          var ka = ja.alert_id;
          ia[ka] = p.createElement(l, p.__spread({
            visible: !this.state.hiddenState[ka],
            isRead: this.state.readState[ka],
            negativeTracking: this.props.negativeTracking,
            shortenTimestamp: this.props.shortenTimestamp,
            useChevron: this.props.useChevron,
            onChevronShow: this._onChevronShow,
            onChevronHide: this._onChevronHide,
            parent: this
          }, ja));
        }.bind(this));
        return ia;
      },
      componentDidMount: function() {
        var ia = this.refs.scrollable.getDOMNode();
        h.listen(window, 'resize', t(function() {
          if (!v(this.state.notifs)) new g(ia).to('height', this._calculateHeight() + 'px').duration(100).go();
        }.bind(this)));
      },
      componentDidUpdate: function(ia) {
        if (!ia.hasEverBeenOpened && this.props.hasEverBeenOpened) {
          var ja = m.getUnseenIDs().length;
          if (ja > aa) {
            this._fetchAndUpdate(ja);
          } else this._fetchNextSet();
          return;
        }
        if (ia.paused && !this.props.paused) {
          setTimeout(this._fetchAndUpdateAll, 0);
          return;
        }
        if (this.props.paused && !ia.paused) {
          if (this._shouldScroll && this.refs.scrollable) this.refs.scrollable.getArea().scrollToTop(false);
          this._shouldScroll = false;
        }
        if (!this._currentlyFetching && this._isLoadingIndicatorVisible()) setTimeout(this._fetchNextSet, 0);
      },
      render: function() {
        var ia = this.state.notifs,
          ja = null,
          ka = null,
          la = this.props.useWideList ? fa : ea,
          ma = null;
        if (!v(ia)) {
          ja = p.createElement("ul", {
            "data-gt": this.props.tracking
          }, this._renderItems());
          ka = this._calculateHeight();
        } else if (!this.state.canFetchMore) ja = p.createElement("div", {
          className: "_572e"
        }, "No new notifications");
        if (this.state.canFetchMore) ma = p.createElement(i, {
          color: "white",
          size: "small",
          ref: "loading",
          className: "_33i"
        });
        var na = (("_50-t") + (this.state.showingChevron ? ' ' + "_2iy1" : ''));
        return (p.createElement("div", {
          className: na
        }, p.createElement(q, {
          ref: "scrollable",
          width: la,
          height: ka,
          fade: true,
          persistent: true,
          onScroll: t(this._onScroll)
        }, ja, ma)));
      }
    });
  e.exports = ha;
}, null);
__d("NotificationJewelListController", ["NotificationJewelList.react", "React"], function(a, b, c, d, e, f, g, h) {
  function i(j, k) {
    "use strict";
    this.$NotificationJewelListController0 = j;
    this.$NotificationJewelListController1 = k;
    this.$NotificationJewelListController2 = false;
    this.$NotificationJewelListController3 = false;
    this.$NotificationJewelListController4();
  }
  i.prototype.open = function() {
    "use strict";
    this.$NotificationJewelListController2 = true;
    this.$NotificationJewelListController4();
  };
  i.prototype.pause = function() {
    "use strict";
    this.$NotificationJewelListController3 = true;
    this.$NotificationJewelListController4();
  };
  i.prototype.unpause = function() {
    "use strict";
    this.$NotificationJewelListController3 = false;
    this.$NotificationJewelListController4();
  };
  i.prototype.$NotificationJewelListController4 = function() {
    "use strict";
    h.render(h.createElement(g, {
      hasEverBeenOpened: this.$NotificationJewelListController2,
      paused: this.$NotificationJewelListController3,
      initialNotifs: this.$NotificationJewelListController1.initialNotifs || {},
      useWideList: this.$NotificationJewelListController1.useWideList,
      tracking: this.$NotificationJewelListController1.tracking,
      negativeTracking: this.$NotificationJewelListController1.negativeTracking,
      shortenTimestamp: this.$NotificationJewelListController1.shortenTimestamp,
      businessID: this.$NotificationJewelListController1.businessID,
      maxHeight: this.$NotificationJewelListController1.maxHeight,
      useChevron: this.$NotificationJewelListController1.useChevron
    }), this.$NotificationJewelListController0);
  };
  e.exports = i;
}, null);
__d("PagesMessengerThreadDialogLink.react", ["AsyncDialog", "AsyncRequest", "Link.react", "MessageThreadViewSource", "PagesMessagingConst", "ReactComponentWithPureRenderMixin", "React", "URI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  'use strict';
  var o = m.createClass({
    displayName: "PagesMessengerThreadDialogLink",
    mixins: [l],
    propTypes: {
      threadID: m.PropTypes.string.isRequired,
      viewer: m.PropTypes.string.isRequired,
      folder: m.PropTypes.string
    },
    getInitialState: function() {
      return {
        permalinkURI: '#'
      };
    },
    componentDidMount: function() {
      this._getPermalinkURI(this.props);
    },
    componentWillReceiveProps: function(p) {
      if (p.threadID !== this.props.threadID || p.folder !== this.props.folder) this._getPermalinkURI(p);
    },
    render: function() {
      return (m.createElement(i, {
        className: this.props.className,
        href: "#",
        onClick: this._handleClick,
        role: "button"
      }, this.props.children));
    },
    _handleClick: function(p) {
      p.preventDefault();
      g.send(new h(this.state.permalinkURI).setRelativeTo(p.target));
    },
    _getPermalinkURI: function(p) {
      this.setState(this.getInitialState());
      var q = p.threadID,
        r = p.viewer,
        s = p.folder;
      d(['MercuryServerRequests'], function(t) {
        var u = t.getForFBID(r);
        u.getServerThreadID(q, function(v) {
          this.isMounted() && this.setState({
            permalinkURI: n(k.LOAD_MESSAGE_THREAD_URI).setQueryData({
              pageid: r,
              threadid: q,
              threadElementID: v,
              folder: s,
              source: j.REFRESH_HIGHLANDER_JEWEL
            }).toString()
          });
        }.bind(this));
      }.bind(this));
    }
  });
  e.exports = o;
}, null);
__d("Sets", ["toIterator"], function(a, b, c, d, e, f, g) {
  'use strict';
  var h = {
    hasAny: function(i, j) {
      if (!j) return false;
      var k = g(j),
        l;
      while (!(l = k.next()).done)
        if (i.has(l.value)) return true;
      return false;
    },
    hasNone: function(i, j) {
      return !h.hasAny(i, j);
    }
  };
  e.exports = h;
}, null);
__d("ContextualHelpSearchController", ["Event", "AsyncRequest", "DOM", "CSS", "Focus", "Input", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = 400;

  function o() {
    this._token = null;
    this._timerID = 0;
    this._lastQuery = null;
    this.typing_listener = null;
    this.clear_listener = null;
    this.async_request = null;
  }
  m(o.prototype, {
    init: function(p, q, r, s, t, u) {
      this.loader = p;
      this.search_box = q;
      this.topics_area = r;
      this.results_area = s;
      this.clear_button = t;
      this.typing_listener = g.listen(this.search_box, 'keyup', this.setTimer.bind(this));
      this.clear_listener = g.listen(this.clear_button, 'click', this.clearResults.bind(this));
      if (u == null || u.focusSearchBox == null || u.focusSearchBox) k.set(this.search_box);
    },
    source: 'contextual_help',
    clearResults: function() {
      this.show(this.topics_area);
      this._lastQuery = '';
      l.reset(this.search_box);
      k.set(this.search_box);
      if (this.async_request !== null) {
        this.async_request.abort();
        this.async_request = null;
      }
      j.addClass(this.clear_button, 'hidden_elem');
    },
    update: function() {
      var p = l.getValue(this.search_box);
      if (p === this._lastQuery) return;
      this._lastQuery = p;
      if (p === '') {
        this.clearResults();
        return;
      }
      this.show(this.loader);
      var q = {
        query: p,
        width: this._width || n,
        source: this.source
      };
      this.async_request = new h('/help/ajax/search/').setData(q).setHandler(function(r) {
        this._update(r);
      }.bind(this));
      this.async_request.send();
    },
    _update: function(p) {
      this.async_request = null;
      var q = p.getPayload().results;
      i.setContent(this.results_area, q);
      this.show(this.results_area);
      if (l.getValue(this.search_box) === '') {
        this.clearResults();
      } else j.removeClass(this.clear_button, 'hidden_elem');
    },
    setTimer: function() {
      if (this._timerID !== 0) clearTimeout(this._timerID);
      this._timerID = setTimeout(this.update.bind(this), 300);
      if (this.async_request != null) {
        this.async_request.abort();
        this.async_request = null;
      }
    },
    show: function(p) {
      var q = [this.loader, this.topics_area, this.results_area];
      for (var r = 0; r < q.length; r++) j.addClass(q[r], 'hidden_elem');
      j.removeClass(p, 'hidden_elem');
    }
  });
  e.exports = o;
}, null);
__d("RequestsJewel", ["AccessibilityLogger", "Arbiter", "AsyncRequest", "AsyncSignal", "ChannelConstants", "CSS", "DOM", "Event", "LinkController", "Parent", "ScrollableArea", "Vector", "$", "copyProperties", "ge", "shield", "fbt", "requireWeak"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
  var y = null;
  x(['FriendBrowserCheckboxController'], function(aa) {
    return y = aa;
  });
  t(z, {
    instance: null,
    getInstance: function() {
      return z.instance;
    },
    replaceJewelTitle: function(aa, ba) {
      m.setContent(s(aa), ba);
    },
    updateFromDOM: function() {
      if (z.instance) z.instance.fromDom();
    }
  });

  function z(aa, ba, ca) {
    "use strict";
    z.instance = this;
    this.countNew = 0;
    this.jewel = aa;
    this.jewelFlyoutCase = aa.getRoot();
    this.jewelFlyout = u('fbRequestsFlyout');
    this.newCountSpan = u('newRequestCount');
    this.folder = ba;
    this.doNewMarkRead = ca;
    this.openTimestamp = 0;
    this.$RequestsJewel0 = {};
    this.$RequestsJewel1 = {};
    this.$RequestsJewel2 = 0;
    this.shouldClearPredictionAssocOnClick = false;
    var da = u('requestsMarkReadButton');
    if (da) n.listen(da, 'click', v(this.$RequestsJewel3, this));
    this.jewel.subscribe('marked-seen', v(this.$RequestsJewel4, this));
    this.jewel.subscribe('closed', v(this.$RequestsJewel5, this));
    this.jewel.subscribe('updated', this.$RequestsJewel6.bind(this));
    this.jewel.subscribe('opened', this.$RequestsJewel7.bind(this));
    o.registerHandler(this.$RequestsJewel8.bind(this));
    h.subscribe(k.getArbiterType('jewel_requests_add'), this.$RequestsJewel9.bind(this));
    h.subscribe(k.getArbiterType('jewel_friending_notifs'), this.$RequestsJewela.bind(this));
    h.subscribe(k.getArbiterType('jewel_requests_remove_old'), this.$RequestsJewelb.bind(this));
    h.subscribe(k.getArbiterType('friend_requests_seen'), this.$RequestsJewelc.bind(this));
    n.listen(this.jewelFlyout, 'submit', function(fa) {
      var ga = p.byClass(fa.getTarget(), 'objectListItem');
      if (ga) {
        l.removeClass(ga, 'jewelItemNew');
        l.addClass(ga, 'jewelItemResponded');
      }
    }.bind(this));
    var ea = m.find(u('fbRequestsJewel'), 'a[rel="toggle"]');
    n.listen(ea, 'focus', function(fa) {
      g.logFocusIn();
    }.bind(this));
    this.setupScroll();
  }
  z.prototype.setupScroll = function() {
    "use strict";
    var aa = m.scry(this.jewelFlyout, '.uiScrollableAreaWrap')[0];
    if (aa) {
      this.$RequestsJeweld = aa;
      this.$RequestsJewele = 0;
      this.$RequestsJewelf = n.listen(aa, 'scroll', this.$RequestsJewelg.bind(this), n.Priority.$RequestsJewelh);
    }
  };
  z.prototype.fromDom = function() {
    "use strict";
    m.scry(this.jewelFlyout, '.jewelItemList li.objectListItem').forEach(function(aa) {
      var ba = aa.getAttribute('id');
      if (ba) {
        var ca = u(ba + '_status'),
          da = this.$RequestsJeweli(ba),
          ea = ca.getAttribute('data-ego');
        if (da.requester) {
          this.$RequestsJewel0[da.requester] = ba;
          if (ea) this.$RequestsJewel1[ea] = ea;
        }++this.$RequestsJewel2;
      }
    }.bind(this));
    this.$RequestsJewelj();
  };
  z.prototype.$RequestsJewelk = function(aa) {
    "use strict";
    var ba = aa.match(/^(\d+)_(\d+)/);
    return (ba) ? {
      requester: ba[1],
      type: ba[2]
    } : (void 0);
  };
  z.prototype.$RequestsJeweli = function(aa) {
    "use strict";
    var ba = aa ? this.$RequestsJewelk(aa) : (void 0),
      ca;
    if (ba && ba.requester) {
      ca = parseInt(ba.requester, 10);
      if (isNaN(ca)) ca = (void 0);
    }
    var da;
    if (ba && ba.type) {
      da = parseInt(ba.type, 10);
      if (isNaN(da)) da = (void 0);
    }
    return {
      requester: ca,
      type: da
    };
  };
  z.prototype.$RequestsJewell = function() {
    "use strict";
    if (this.countNew > 0) this.countNew -= 1;
  };
  z.prototype.$RequestsJewel8 = function(aa, event) {
    "use strict";
    var ba = p.byClass(aa, 'jewelItemNew');
    if (ba && p.byClass(ba, 'fbRequestList') && p.byClass(ba, 'beeperEnabled')) {
      var ca = this.$RequestsJewelk(ba.id);
      ca && this.$RequestsJewel4(ca.requester, ca.type);
      this.$RequestsJewell();
      h.inform('jewel/count-updated', {
        jewel: 'requests',
        count: this.countNew
      });
      l.removeClass(ba, 'jewelItemNew');
    }
    return true;
  };
  z.prototype.$RequestsJewelg = function() {
    "use strict";
    var aa = m.scry(this.$RequestsJeweld, '.uiMorePager');
    if (!aa) return;
    var ba = aa.pop();
    if (ba) {
      var ca = r.getElementPosition(ba, 'viewport').y;
      if (ca > 0) l.addClass(p.byClass(this.$RequestsJeweld, 'uiScrollableArea'), 'contentAfter');
      var da = m.find(ba, 'a');
      if (!da) return;
      var ea = r.getElementPosition(da, 'viewport').y;
      if (ea == this.$RequestsJewele) return;
      var fa = r.getElementPosition(this.$RequestsJeweld, 'viewport').y + r.getElementDimensions(this.$RequestsJeweld).y;
      if (ea - 300 < fa && ea > 0) {
        this.$RequestsJewele = ea;
        var ga = da.getAttribute('ajaxify');
        if (ga) {
          new i(ga).setRelativeTo(da).setStatusElement(p.byClass(da, 'stat_elem')).send();
        } else y && y.getInstance('jewel').showMore();
      }
    }
  };
  z.prototype.$RequestsJewela = function(aa, ba) {
    "use strict";
    if (!ba || this.jewel.isOpen()) return;
    if (ba.obj.notif_type !== 'friend_confirmed') return;
    if (u('fbRequestsJewelLoading')) {
      new i().setURI('/ajax/requests/loader/').send();
      return;
    }
    var ca = {};
    ca.reloadcontent = true;
    new i().setURI('/ajax/requests/loader/').setData(ca).send();
  };
  z.prototype.$RequestsJewel9 = function(aa, ba) {
    "use strict";
    if (!ba) return;
    var ca = ba.obj.from,
      da = ba.obj.suggester,
      ea = this.$RequestsJeweli(this.$RequestsJewel0[ca]).type,
      fa = ea === 19 && !da;
    if (!fa && (ea || this.jewel.isOpen())) return;
    if (u('fbRequestsJewelLoading')) {
      new i().setURI('/ajax/requests/loader/').send();
    } else {
      var ga = {};
      ga.reloadcontent = true;
      new i().setURI('/ajax/requests/loader/').setData(ga).send();
    }
  };
  z.prototype.$RequestsJewelb = function(aa, ba) {
    "use strict";
    if (!ba || this.jewel.isOpen() || u('fbRequestsJewelLoading') !== null) return;
    var ca = this.$RequestsJewel0[ba.obj.from],
      da = ca && u(ca);
    if (da) {
      if (l.hasClass(da, 'jewelItemNew')) {
        this.$RequestsJewell();
        h.inform('jewel/count-updated', {
          jewel: 'requests',
          count: this.countNew
        });
      }
      if (!l.hasClass(da, 'jewelItemResponded')) {
        m.remove(da);
        delete this.$RequestsJewel0[ba.obj.from];
        --this.$RequestsJewel2;
        this.$RequestsJewelj();
      }
    }
  };
  z.prototype.$RequestsJewel3 = function() {
    "use strict";
    this.jewel.markSeen();
    this.$RequestsJeweln();
  };
  z.prototype.$RequestsJewel4 = function(aa, ba) {
    "use strict";
    var ca = m.scry(this.jewelFlyout, 'li');
    new j('/ajax/gigaboxx/endpoint/UpdateLastSeenTime.php', {
      folder: this.folder,
      first_item: ca[0].id
    }).send();
    var da = typeof aa != 'undefined' && typeof ba != 'undefined' ? {
      requester: aa,
      type: ba
    } : {};
    this.doNewMarkRead && new j('/ajax/requests/mark_read/', da).send();
  };
  z.prototype.$RequestsJewelc = function(aa, ba) {
    "use strict";
    h.inform('jewel/count-updated', {
      jewel: 'requests',
      count: 0
    });
  };
  z.prototype.$RequestsJeweln = function(aa, ba) {
    "use strict";
    m.scry(this.jewel.root, 'li.jewelItemNew').forEach(function(ca) {
      l.removeClass(ca, 'jewelItemNew');
    });
  };
  z.prototype.$RequestsJewel6 = function(aa, ba) {
    "use strict";
    this.countNew = ba.count;
    l.conditionClass(this.jewelFlyout, 'beeperUnread', this.countNew > 0);
    l.conditionClass(this.jewelFlyoutCase, 'showRequests', this.countNew > 0);
    if (this.newCountSpan) {
      var ca = this.countNew == 1 ? w._("{num} NEW REQUEST", [w.param("num", this.countNew)]) : w._("{num} NEW REQUESTS", [w.param("num", this.countNew)]);
      m.setContent(this.newCountSpan, ca);
    }
  };
  z.prototype.$RequestsJewelj = function() {
    "use strict";
    m.scry(this.jewelFlyout, 'li.empty').forEach(function(aa) {
      l.conditionShow(aa, this.$RequestsJewel2 <= 0);
    }.bind(this));
  };
  z.prototype.$RequestsJewel7 = function() {
    "use strict";
    h.inform('requestsJewel/opened');
    var aa = m.scry(this.jewelFlyout, '.uiScrollableArea')[0];
    if (u('fbRequestsJewelLoading')) {
      var ba = Date.now();
      if (this.openTimestamp + 5000 < ba) {
        this.openTimestamp = ba;
        new i().setURI('/ajax/requests/loader/').setData({
          log_impressions: true
        }).send();
      }
    } else {
      var ca = Object.keys(this.$RequestsJewel0);
      if (ca.length > 0) {
        new i().setURI('/friends/requests/log_impressions').setData({
          ids: ca.join(','),
          ref: 'jewel'
        }).send();
        var da = Object.keys(this.$RequestsJewel1);
        if (da.length > 0) new i().setURI('/growth/jewel/impression_logging.php').setData({
          egodata: da
        }).send();
      }
    }
    aa && q.poke(aa);
  };
  z.prototype.$RequestsJewel5 = function() {
    "use strict";
    h.inform('requestsJewel/closed');
    this.$RequestsJeweln();
  };
  e.exports = z;
}, null);
__d("JewelX", ["Event", "Arbiter", "ArbiterMixin", "CSS", "DOM", "HTML", "Keys", "TabIsolation", "Toggler", "csx", "copyProperties", "emptyFunction", "reportData", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
  var u = function(v, w) {
    v && w && this.init(v, w);
  };
  q(u, {
    _instancesByName: {},
    _resizeListener: null
  });
  q(u.prototype, i, {
    init: function(v, w) {
      this.name = w.name;
      this.root = v;
      this.badge = w.badge;
      this.countNew = 0;
      this.initialCount = 0;
      this.escHandler = null;
      this.togglerInstance = o.createInstance(v).setSticky(false);
      if (w.keepOpenForSnowlift) this.togglerInstance.setPrePageTransitionCallback(this._onPrePageTransition.bind(this));
      u._instancesByName[this.name] = this;
      var x = this.getFlyout(),
        y = new n(x);
      o.createInstance(x).setSticky(false);
      o.listen('show', this.root, function(z) {
        this._logFirstClick();
        this.hasNew() && this.markSeen();
        this.reset();
        this.inform('opened');
        h.inform('layer_shown', {
          type: 'Jewel'
        });
        y.enable();
        this.setupEvents();
      }.bind(this));
      o.listen('hide', this.root, function(z, aa) {
        this.hasNew() && this.markSeen();
        this.reset();
        this.inform('closed');
        h.inform('layer_hidden', {
          type: 'Jewel'
        });
        y.disable();
        this.removeEvents();
      }.bind(this));
      h.subscribe('jewel/count-updated', function(z, aa) {
        aa.jewel == this.name && this.update(aa);
      }.bind(this));
      h.subscribe('jewel/count-initial', function(z, aa) {
        aa.jewel == this.name && this.setInitial(aa);
      }.bind(this));
      h.subscribe('jewel/reset', function(z, aa) {
        aa.jewel == this.name && this.reset();
      }.bind(this));
      h.subscribe('jewel/focus', function(z, aa) {
        if (this.isOpen()) o.hide(this.root);
      }.bind(this));
      u._resizeListener = u._resizeListener || (function() {
        var z = null;
        return g.listen(window, 'resize', function() {
          clearTimeout(z);
          z = t(h.inform.bind(h, 'jewel/resize'), 100);
        });
      })();
    },
    getRoot: function() {
      return this.root;
    },
    getFlyout: function() {
      if (typeof this._flyout === 'undefined') this._flyout = k.find(this.root, ".__tw");
      return this._flyout;
    },
    hasNew: function() {
      return j.hasClass(this.root, 'hasNew');
    },
    isOpen: function() {
      return j.hasClass(this.root, 'openToggler');
    },
    reset: function() {
      j.removeClass(this.root, 'hasNew');
    },
    setContent: function(v) {
      var w = k.find(this.root, 'ul.jewelItemList');
      k.setContent(w, l(v));
    },
    update: function(v) {
      this.countNew = v.count;
      if (typeof this.countNew === 'number' && this.countNew < 0) this.countNew = 0;
      this.badge.setLegacyContent(this.countNew);
      var w = isNaN(this.countNew) || this.countNew > 0;
      j.conditionClass(this.root, 'hasNew', w);
      this.inform('updated', v);
    },
    setInitial: function(v) {
      this.initialCount = v;
    },
    setupEvents: function() {
      this.escHandler = g.listen(document.documentElement, 'keydown', function(v) {
        if (v.keyCode === m.ESC && this.isOpen()) o.hide(this.root);
      }.bind(this));
    },
    removeEvents: function() {
      if (this.escHandler) {
        this.escHandler.remove();
        this.escHandler = null;
      }
    },
    markSeen: function() {
      h.inform('jewel/count-updated', {
        jewel: this.name,
        count: 0
      }, h.BEHAVIOR_STATE);
      this.inform('marked-seen');
    },
    _onPrePageTransition: function(v, w) {
      if (!this._isSnowliftURI(w.from) && !this._isSnowliftURI(w.to)) this.togglerInstance && this.togglerInstance.hide();
    },
    _isSnowliftURI: function(v) {
      return v && v.getQueryData().hasOwnProperty('theater');
    },
    _logFirstClick: function() {
      this._logFirstClick = r;
      s('jewel_click', {
        gt: {
          count: this.countNew,
          initial: this.initialCount,
          jewel: this.name
        }
      });
    }
  });
  e.exports = u;
}, null);
__d("LitestandNewsfeedCountUpdater", ["Arbiter", "AsyncRequest", "LitestandMessages", "LitestandSidebarBookmarkConfig", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l, m;

  function n() {
    m && clearTimeout(m);
    if (l) return;
    m = setTimeout(o, j.nf_count_query_interval_ms);
  }

  function o() {
    if (l) return;
    new h().setURI('/ajax/litestand/newsfeed_count').setHandler(function(r) {
      if (l) return;
      p(r.getPayload());
      n();
    }).setAllowCrossPageTransition(true).send();
  }

  function p(r) {
    g.inform(i.UPDATE_HOME_COUNT, {
      count: r,
      onHome: l
    }, g.BEHAVIOR_STATE);
  }
  var q = {
    init: function() {
      q.init = k;
      g.subscribe(i.NEWSFEED_LOAD, function() {
        l = true;
        p(0);
      });
      g.subscribe(i.LEAVE_HOME, function() {
        l = false;
        n();
      });
      n();
    }
  };
  e.exports = q;
}, null);
__d("LitestandChromeHomeCount", ["Arbiter", "CSS", "DOM", "Event", "LitestandMessages", "LitestandNewsfeedCountUpdater", "Parent", "UserAgent_DEPRECATED", "csx", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var q = 20,
    r, s, t, u, v, w = {
      init: function(x) {
        v = x;
        s = i.find(document, "div._uaw ._5ahz");
        r = s.parentNode;
        t = m.byClass(r, "_1ayn");
        u = false;
        g.subscribe(k.UPDATE_HOME_COUNT, function(y, z) {
          w.updateBadge(z.onHome ? 0 : z.count);
        });
        j.listen(t, 'click', function(event) {
          var y = event.getModifiers();
          if (y.shift || (n.osx() && y.meta) || (n.windows() && y.control)) w.updateBadge(0);
        });
        l.init();
        w.updateBadge(v);
      },
      updateBadge: function(x) {
        v = x;
        var y = x > 0;
        w.toggleBadge(y);
        if (y) {
          var z = x > q ? q + '+' : x;
          i.setContent(s, z);
        }
      },
      toggleBadge: function(x) {
        if (u === x) return;
        u = x;
        h.conditionClass(r, "_5ahy", !x);
      }
    };
  e.exports = w;
}, null);
__d("MercuryJewelCountControl", ["Arbiter", "DOM", "copyProperties", "shield", "UserActivity", "MercuryServerRequests", "MercuryThreadInformer", "MercuryUnseenState"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = b('MercuryServerRequests').get(),
    m = b('MercuryThreadInformer').get(),
    n = b('MercuryUnseenState').get(),
    o, p, q, r = function(t) {
      if (t || (q.isOpen() && k.isActive())) n.markAsSeen();
    },
    s = function(t, u) {
      o = t;
      p = h.find(o, '#mercurymessagesCountValue');
      q = u;
      this.render();
      l.subscribe('model-update-completed', function(v, w) {
        r(false);
      });
      m.subscribe('unseen-updated', this.render.bind(this));
      q.subscribe('marked-seen', j(r, this, true));
    };
  i(s.prototype, {
    render: function() {
      g.inform('jewel/count-updated', {
        jewel: 'mercurymessages',
        count: n.getUnseenCount()
      }, g.BEHAVIOR_STATE);
    }
  });
  e.exports = s;
}, null);
__d("MercuryThreadlistContainer.react", ["Bootloader", "immutable", "MercuryAPIArgsSource", "MercuryThreadlistConstants", "React", "SubscriptionsHandler", "OrionNUXRenderer"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m = b('OrionNUXRenderer').module,
    n = 'search',
    o = k.createClass({
      displayName: "MercuryThreadlistContainer",
      propTypes: {
        ChildClass: k.PropTypes.func.isRequired,
        viewer: k.PropTypes.string.isRequired,
        folder: k.PropTypes.string.isRequired
      },
      getInitialState: function() {
        return {
          isLoading: true,
          isSearching: false,
          orionNUXAccepted: false,
          threads: h.Map()
        };
      },
      componentDidMount: function() {
        g.loadModules(["MercuryOrderedThreadlist", "MercuryThreadInformer", "MercuryThreads"], function(p, q, r) {
          this._threadlist = p.getForFBID(this.props.viewer);
          this._threads = r.getForFBID(this.props.viewer);
          this._informer = q.getForFBID(this.props.viewer);
          this._subscriptions = new l();
          this._subscriptions.addSubscriptions(this._informer.subscribe('threadlist-updated', function(s, t) {
            this._updateThreads(this.props.folder);
          }.bind(this)));
          this._handleFolderChange(this.props.folder);
        }.bind(this));
      },
      componentWillReceiveProps: function(p) {
        if (p.folder !== this.props.folder) this._handleFolderChange(p.folder);
      },
      componentWillUnmount: function() {
        this._cancelThreadsCallback();
        this._cancelThreadlistCallback();
        this._subscriptions && this._subscriptions.release();
      },
      render: function() {
        var p = this.props,
          q = p.ChildClass,
          r = p.folder,
          s = (function(u, v) {
            var w = {},
              x = Object.prototype.hasOwnProperty;
            if (u == null) throw new TypeError();
            for (var y in u)
              if (x.call(u, y) && !x.call(v, y)) w[y] = u[y];
            return w;
          })(p, {
            ChildClass: 1,
            folder: 1
          }),
          t = this.state.isSearching ? this.state.threads.get(n) || [] : this.state.threads.get(r) || [];
        return (k.createElement(q, k.__spread({}, s, {
          isLoaded: !!this._threadlist && this._threadlist.hasLoadedThreadlist(r),
          isLoading: this.state.isLoading,
          isSearching: this.state.isSearching,
          onLoadMoreRequest: this._loadMoreThreads,
          onQuery: this._handleQuery,
          onSearchResults: this._handleSearchResults,
          orionNUX: this._renderOrionNUX(),
          threads: t
        })));
      },
      _renderOrionNUX: function() {
        if (!m) return null;
        return (k.createElement(m, {
          type: "jewel"
        }));
      },
      _handleFolderChange: function(p) {
        if (!this._hasInitialThreads(p)) {
          this._loadThreads(p, j.JEWEL_THREAD_COUNT + 1);
        } else if (this.state.isLoading) {
          this.setState({
            isLoading: false
          }, function() {
            this._updateThreads(p);
          }.bind(this));
        } else this._updateThreads(p);
      },
      _loadMoreThreads: function() {
        if (!this.state.isSearching && !this.state.isLoading && !this._threadlist.hasLoadedThreadlist(this.props.folder)) this._loadThreads(this.props.folder, this._getThreadCount(this.props.folder) + j.JEWEL_MORE_COUNT + 1);
      },
      _loadThreads: function(p, q) {
        if (!this._threadlist) return;
        this._cancelThreadlistCallback();
        this.setState({
          isLoading: true
        }, function() {
          var r = this._threadlist.getThreadlist(j.RECENT_THREAD_OFFSET, q, p, function(s) {
            return this.setState({
              isLoading: false
            });
          }.bind(this), true, i.JEWEL);
          this._threadlistSub = {
            subscriberID: r,
            folder: p
          };
        }.bind(this));
      },
      _updateThreads: function(p, q) {
        if (!this._threadlist || !this._threads) return;
        this._cancelThreadsCallback();
        var r = q || this._threadlist.getAvailableThreadlistNow(p);
        this._threadsSub = this._threads.getMultiThreadMeta(r, function(s) {
          this.setState({
            threads: this.state.threads.set(p, r.map(function(t) {
              return s[t];
            }))
          });
        }.bind(this));
      },
      _hasInitialThreads: function(p) {
        return !!(this._threadlist && (this._threadlist.getThreadCount(p) >= j.JEWEL_THREAD_COUNT + 1 || this._threadlist.hasLoadedThreadlist(p)));
      },
      _getThreadCount: function(p) {
        var q = this.state.threads.get(p);
        return q ? q.length : 0;
      },
      _cancelThreadsCallback: function() {
        this._threads && this._threadsSub && this._threads.unsubscribe(this._threadsSub);
      },
      _cancelThreadlistCallback: function() {
        this._threadlist && this._threadlistSub && this._threadlist.unsubscribe(this._threadlistSub.subscriberID, this._threadlistSub.folder);
      },
      _handleSearchResults: function(p, q) {
        this.setState({
          isLoading: q,
          searchThreads: []
        }, function() {
          return this._updateThreads(n, p);
        }.bind(this));
      },
      _handleQuery: function(p) {
        this.setState({
          isSearching: !!p
        });
      }
    });
  e.exports = o;
}, null);
__d("MercuryThreadlistRowContainer.react", ["immutable", "ImmutableObject", "MercuryDelayedRoger", "MercuryParticipants", "ReactComponentWithPureRenderMixin", "React", "Sets", "SubscriptionsHandler", "areEqual", "arraySort"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  'use strict';
  var q = l.createClass({
    displayName: "MercuryThreadlistRowContainer",
    mixins: [k],
    propTypes: {
      ChildClass: l.PropTypes.func.isRequired,
      thread: l.PropTypes.instanceOf(h).isRequired,
      viewer: l.PropTypes.string.isRequired
    },
    getInitialState: function() {
      return {
        participants: g.Map(),
        seenBy: this._getSeenBy()
      };
    },
    componentDidMount: function() {
      this._subscriptions = new n();
      this._subscriptions.addSubscriptions(this._subscribeToParticipants(), this._subscribeToRoger());
      this._updateParticipants(this.props.thread.participants);
    },
    componentWillReceiveProps: function(s) {
      if (this._shouldUpdateParticipants(this.props, s)) this._updateParticipants(s.thread.participants);
    },
    componentWillUnmount: function() {
      this._subscriptions && this._subscriptions.release();
    },
    render: function() {
      var s = this.props,
        t = s.ChildClass,
        u = (function(v, w) {
          var x = {},
            y = Object.prototype.hasOwnProperty;
          if (v == null) throw new TypeError();
          for (var z in v)
            if (y.call(v, z) && !y.call(w, z)) x[z] = v[z];
          return x;
        })(s, {
          ChildClass: 1
        });
      return (l.createElement(t, l.__spread({}, u, {
        participants: this.state.participants,
        seenBy: this.state.seenBy
      })));
    },
    _updateParticipants: function(s) {
      this.setState({
        participants: r(s, function(t) {
          return j.getOrFetch(t);
        })
      });
    },
    _shouldUpdateParticipants: function(s, t) {
      var u = s.thread.participants,
        v = t.thread.participants;
      if (u === v) return false;
      if (u.length !== v.length) return true;
      u = p(u);
      v = p(v);
      return !o(u, v);
    },
    _subscribeToParticipants: function() {
      return j.addListener('change', function(s) {
        var t = this.props.thread.participants;
        if (m.hasAny(s, t)) this._updateParticipants(t);
      }.bind(this));
    },
    _subscribeToRoger: function() {
      return i.subscribe('state-changed', function(s, t) {
        t[this.props.thread.thread_id] && this.setState({
          seenBy: this._getSeenBy()
        });
      }.bind(this));
    },
    _getSeenBy: function() {
      return i.getSeenBy(this.props.thread.thread_id).length;
    }
  });

  function r(s, t) {
    return g.Map().withMutations(function(u) {
      s.forEach(function(v) {
        u.set(v, t(v));
      });
    });
  }
  e.exports = q;
}, null);
__d("MercuryPresenceIndicator.react", ["Arbiter", "AvailableListConstants", "MercuryIDs", "PresenceStatus", "ReactComponentWithPureRenderMixin", "React", "SubscriptionsHandler", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  'use strict';
  var p = l.createClass({
    displayName: "MercuryPresenceIndicator",
    mixins: [k],
    propTypes: {
      threadID: l.PropTypes.string.isRequired
    },
    componentDidMount: function() {
      this._subscriptions = new m();
      this._subscriptions.addSubscriptions(g.subscribe(h.ON_AVAILABILITY_CHANGED, function() {
        return this.forceUpdate();
      }.bind(this)));
    },
    componentWillUnmount: function() {
      this._subscriptions && this._subscriptions.release();
    },
    render: function() {
      var q = this._getPresence();
      return (l.createElement("span", {
        className: this._getClasses(q)
      }, l.createElement("span", {
        className: "accessible_elem"
      }, this._getLabel(q))));
    },
    _getPresence: function() {
      if (!i.isCanonical(this.props.threadID)) {
        return null;
      } else {
        var q = i.getUserIDFromThreadID(this.props.threadID);
        return j.get(q);
      }
    },
    _getClasses: function(q) {
      return (("presenceIndicator") + (i.isMultichat(this.props.threadID) ? ' ' + "groupThread" : '') + (q == h.ACTIVE ? ' ' + "presenceActive" : '') + (q == h.MOBILE ? ' ' + "presenceMobile" : ''));
    },
    _getLabel: function(q) {
      switch (q) {
        case h.ACTIVE:
          return ("Active");
        case h.MOBILE:
          return ("Mobile");
        default:
          return null;
      }
    }
  });
  e.exports = p;
}, null);
__d("MercurySeenIndicator.react", ["MercuryDelayedRoger", "MercuryIDs", "React", "SubscriptionsHandler", "cx"], function(a, b, c, d, e, f, g, h, i, j, k) {
  'use strict';
  var l = i.createClass({
    displayName: "MercurySeenIndicator",
    propTypes: {
      thread: i.PropTypes.object.isRequired,
      viewer: i.PropTypes.string.isRequired
    },
    componentDidMount: function() {
      this._subscriptions = new j();
      this._subscriptions.addSubscriptions(g.subscribe('state-changed', function(m, n) {
        n[this.props.thread.thread_id] && this.forceUpdate();
      }.bind(this)));
    },
    componentWillUnmount: function() {
      this._subscriptions && this._subscriptions.release();
    },
    render: function() {
      var m = this._separateParticipants(),
        n = m.viewer,
        o = m.others,
        p = this._viewerLastToReply(n),
        q = this._seenByAll(o);
      return (i.createElement("span", {
        className: (("MercuryRepliedIndicator") + (p ? ' ' + "repliedLast" : '') + (p && q ? ' ' + "seenByAll" : ''))
      }));
    },
    _separateParticipants: function() {
      var m = h.getParticipantIDFromUserID(this.props.viewer),
        n = this.props.thread.participants.filter(function(o) {
          return o !== m;
        });
      return {
        viewer: m,
        others: n
      };
    },
    _viewerLastToReply: function(m) {
      var n = this.props.thread.participants;
      return n.length > 0 && n[0] === m;
    },
    _seenByAll: function(m) {
      var n = this.props.thread.thread_id;
      return g.getSeenBy(n).length === m.length;
    }
  });
  e.exports = l;
}, null);
__d("MercuryThreadPermalink.react", ["HighlanderFinchGating", "Link.react", "PagesMessengerThreadDialogLink.react", "ReactComponentWithPureRenderMixin", "React", "WebMessengerThreadPermalinks"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m = k.createClass({
    displayName: "MercuryThreadPermalink",
    mixins: [j],
    propTypes: {
      threadID: k.PropTypes.string.isRequired,
      viewer: k.PropTypes.string.isRequired,
      folder: k.PropTypes.string,
      onClick: k.PropTypes.func
    },
    getInitialState: function() {
      return {
        permalinkURI: '#'
      };
    },
    componentDidMount: function() {
      this._getPermalinkURI(this.props);
    },
    componentWillReceiveProps: function(n) {
      if (n.threadID !== this.props.threadID || n.folder !== this.props.folder) this._getPermalinkURI(n);
    },
    render: function() {
      if (g.HIGHLANDER_FINCH_GATING) return (k.createElement(i, {
        className: this.props.className,
        threadID: this.props.threadID,
        viewer: this.props.viewer,
        folder: this.props.folder
      }, this.props.children));
      return (k.createElement(h, {
        className: this.props.className,
        href: this.state.permalinkURI,
        onClick: this.props.onClick,
        role: "button"
      }, this.props.children));
    },
    _getPermalinkURI: function(n) {
      if (g.HIGHLANDER_FINCH_GATING) return;
      this.setState(this.getInitialState());
      l.getThreadURI(n.threadID, function(o) {
        return this.isMounted() && this.setState({
          permalinkURI: o
        });
      }.bind(this), n.folder);
    }
  });
  e.exports = m;
}, null);
__d("MercuryThreadReadToggle.react", ["MercuryThreadActions", "ReactComponentWithPureRenderMixin", "React", "ReadToggle.react", "fbt", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m = i.createClass({
    displayName: "MercuryThreadReadToggle",
    mixins: [h],
    propTypes: {
      threadID: i.PropTypes.string.isRequired,
      viewer: i.PropTypes.string.isRequired,
      unreadCount: i.PropTypes.number.isRequired
    },
    render: function() {
      l(this.props.unreadCount >= 0);
      return (i.createElement(j, {
        isRead: this.props.unreadCount === 0,
        onClick: this._handleClick,
        readLabel: "Mark as Unread",
        unreadLabel: "Mark as Read"
      }));
    },
    _handleClick: function(n) {
      n.preventDefault();
      n.stopPropagation();
      var o = g.getForFBID(this.props.viewer);
      this.props.unreadCount > 0 ? o.markRead(this.props.threadID) : o.markUnread(this.props.threadID);
    }
  });
  e.exports = m;
}, null);
__d("MercuryThreadSnippet.react", ["MercuryAttachmentSnippet.react", "MercuryIDs", "MercuryParticipants", "React", "TextWithEmoticons.react", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m = j.createClass({
    displayName: "MercuryThreadSnippet",
    propTypes: {
      thread: j.PropTypes.object.isRequired,
      viewer: j.PropTypes.string.isRequired
    },
    getInitialState: function() {
      return {
        snippet: null
      };
    },
    componentDidMount: function() {
      this._ensureParticipants(this.props);
    },
    componentWillReceiveProps: function(n) {
      this._ensureParticipants(n);
    },
    componentWillUnmount: function() {
      this._cancelParticipantFetch();
    },
    render: function() {
      return (j.createElement("span", {
        className: this.props.className
      }, this._renderAttachmentIndicator(), this._renderSnippet()));
    },
    _renderAttachmentIndicator: function() {
      if (!this.props.thread.snippet || !this._hasAttachments()) return null;
      return j.createElement("span", {
        className: "MercuryAttachmentIndicator"
      });
    },
    _renderSnippet: function() {
      var n = this.props.thread,
        o = h.getParticipantIDFromUserID(this.props.viewer),
        p = this._renderInnerSnippet(),
        q = n.participants.length;
      if (n.is_subscribed) q--;
      if (this._hasAttachments() || !n.snippet_sender || o == n.snippet_sender || q <= 1) return p;
      var r = i.getNow(n.snippet_sender);
      if (!r || !r.short_name) return p;
      return (l._("{name}: {conversation_snippet}", [l.param("name", r.short_name), l.param("conversation_snippet", p)]));
    },
    _renderInnerSnippet: function() {
      var n = this.props.thread,
        o = n.snippet;
      if (o && o.startsWith('?OTR')) return ("[encrypted message]");
      if (o) return (j.createElement(k, {
        renderEmoticons: true,
        renderEmoji: true,
        text: o.replace(/\r\n|[\r\n]/g, ' ')
      }));
      if (this._hasAttachments()) return (j.createElement(g, {
        thread: n,
        viewer: this.props.viewer
      }));
      return null;
    },
    _hasAttachments: function() {
      var n = this.props.thread;
      return (n.snippet_has_attachment && n.snippet_attachments && n.snippet_attachments.length > 0);
    },
    _ensureParticipants: function(n) {
      var o = h.getParticipantIDFromUserID(n.viewer),
        p = n.thread.snippet_sender;
      this._cancelParticipantFetch();
      if (!i.getNow(o) || !i.getNow(p)) i.getMulti([o, p], function(q) {
        return this.forceUpdate();
      }.bind(this));
    },
    _cancelParticipantFetch: function() {
      this._participantSub && this._participantSub.remove();
    }
  });
  e.exports = m;
}, null);
__d("MercuryThreadTimestamp.react", ["ReactComponentWithPureRenderMixin", "React", "formatDate", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
  'use strict';
  var k = h.createClass({
    displayName: "MercuryThreadTimestamp",
    mixins: [g],
    propTypes: {
      time: h.PropTypes.number,
      title: h.PropTypes.string,
      text: h.PropTypes.string
    },
    render: function() {
      var l = this.props.time;
      if (!l) return h.createElement("abbr", null);
      return (h.createElement("abbr", {
        className: j(this.props.className, 'timestamp'),
        title: this.props.title || (new Date(l)).toLocaleDateString(),
        "data-utime": l / 1000
      }, this.props.text || i(new Date(l), 'g:ia')));
    }
  });
  e.exports = k;
}, null);
__d("MessagesJewelInlineThumbnail.react", ["MercuryAttachmentType", "React", "cx"], function(a, b, c, d, e, f, g, h, i) {
  'use strict';
  var j = h.createClass({
    displayName: "MessagesJewelInlineThumbnail",
    propTypes: {
      thread: h.PropTypes.object.isRequired
    },
    render: function() {
      var k = this._getPhotoAttachments();
      if (k.length === 0) return h.createElement("span", null);
      var l = k[0].thumbnail_url;
      if (!l) return h.createElement("span", null);
      var m = h.createElement("span", {
        className: "_56hv"
      }, h.createElement("i", {
        style: {
          backgroundImage: ("url(" + l + ")")
        }
      }));
      if (k.length > 1) m = h.createElement("span", null, h.createElement("span", {
        className: "_56hy"
      }), m);
      return m;
    },
    _getPhotoAttachments: function() {
      var k = this.props.thread;
      if (!k.snippet_attachments) return [];
      return k.snippet_attachments.filter(function(l) {
        return l.attach_type === g.PHOTO;
      });
    }
  });
  e.exports = j;
}, null);
__d("MessagesJewelThreadListRow.react", ["ImageBlock.react", "immutable", "ImmutableObject", "MercuryPresenceIndicator.react", "MercurySeenIndicator.react", "MercuryThreadImage.react", "MercuryThreadPermalink.react", "MercuryThreadReadToggle.react", "MercuryThreadSnippet.react", "MercuryThreadTimestamp.react", "MercuryThreadTitle.react", "MessagesJewelInlineThumbnail.react", "ReactComponentWithPureRenderMixin", "React", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
  'use strict';
  var v = t.createClass({
    displayName: "MessagesJewelThreadListRow",
    mixins: [s],
    propTypes: {
      onClick: t.PropTypes.func,
      participants: t.PropTypes.instanceOf(h.Map).isRequired,
      seenBy: t.PropTypes.number,
      showPresence: t.PropTypes.bool,
      thread: t.PropTypes.instanceOf(i).isRequired,
      viewer: t.PropTypes.string.isRequired
    },
    render: function() {
      return (t.createElement("li", {
        className: ((this.props.thread.unread_count > 0 ? "jewelItemNew" : ''))
      }, t.createElement(m, {
        className: "messagesContent",
        threadID: this.props.thread.thread_id,
        viewer: this.props.viewer,
        folder: this.props.thread.folder,
        onClick: this.props.onClick
      }, t.createElement(g, {
        spacing: "medium"
      }, t.createElement("div", {
        className: "MercuryThreadImage"
      }, t.createElement(l, {
        thread: this.props.thread,
        viewer: this.props.viewer
      })), t.createElement("div", {
        className: "content"
      }, t.createElement("div", {
        className: "author"
      }, t.createElement("strong", null, t.createElement(q, {
        thread: this.props.thread,
        viewer: this.props.viewer,
        showUnreadCount: true
      })), this._renderPresenceIndicator()), t.createElement("div", {
        className: "snippet preview"
      }, t.createElement(k, {
        thread: this.props.thread,
        viewer: this.props.viewer
      }), t.createElement(o, {
        thread: this.props.thread,
        viewer: this.props.viewer
      })), t.createElement("div", {
        className: "time"
      }, t.createElement(p, {
        time: this.props.thread.timestamp,
        title: this.props.thread.timestamp_absolute,
        text: this.props.thread.timestamp_relative
      }))), t.createElement("div", null, t.createElement(r, {
        thread: this.props.thread
      }), t.createElement("div", {
        className: "x_div"
      }, t.createElement(n, {
        threadID: this.props.thread.thread_id,
        viewer: this.props.viewer,
        unreadCount: this.props.thread.unread_count
      })))))));
    },
    _renderPresenceIndicator: function() {
      if (!this.props.showPresence) return null;
      return (t.createElement(j, {
        threadID: this.props.thread.thread_id
      }));
    }
  });
  e.exports = v;
}, null);
__d("MessagesJewelThreadlistRowContainer.react", ["ImmutableObject", "MercuryThreadlistRowContainer.react", "MessagesJewelThreadListRow.react", "ReactComponentWithPureRenderMixin", "React", "requireWeak"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m;
  l(['ChatOpenTab'], function(o) {
    m = o;
  });
  var n = k.createClass({
    displayName: "MessagesJewelThreadlistRowContainer",
    mixins: [j],
    propTypes: {
      thread: k.PropTypes.instanceOf(g).isRequired,
      viewer: k.PropTypes.string.isRequired
    },
    componentDidMount: function() {
      if (!m) l(['ChatOpenTab'], function(o) {
        this.forceUpdate();
      }.bind(this));
    },
    render: function() {
      return (k.createElement(h, {
        ChildClass: i,
        onClick: this._handleClick,
        showPresence: m && m.canOpenTab(),
        thread: this.props.thread,
        viewer: this.props.viewer
      }));
    },
    _handleClick: function(o) {
      if (o.button === 1 || o.altKey || o.ctrlKey || o.metaKey || o.shiftKey) return;
      if (m && m.canOpenTab()) {
        o.preventDefault();
        m.openThread(this.props.thread.thread_id, 'jewel');
      }
    }
  });
  e.exports = n;
}, null);
__d("MessagesJewelThreadList.react", ["ImmutableObject", "ScrollableArea.react", "Link.react", "MessagesJewelThreadlistRowContainer.react", "React", "XUISpinner.react", "cx", "fbt", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  'use strict';
  var p = k.createClass({
    displayName: "MessagesJewelThreadList",
    propTypes: {
      isLoaded: k.PropTypes.bool,
      isLoading: k.PropTypes.bool,
      onLoadMoreRequest: k.PropTypes.func,
      orionNUX: k.PropTypes.element,
      threads: k.PropTypes.arrayOf(k.PropTypes.instanceOf(g)).isRequired,
      viewer: k.PropTypes.string.isRequired
    },
    render: function() {
      return (k.createElement(h, {
        className: "jewelHighlight",
        onScroll: o(this._handleScroll, 50),
        ref: "scrollable"
      }, k.createElement("ul", {
        className: "jewelContent"
      }, this.props.orionNUX ? k.createElement("li", null, this.props.orionNUX) : null, this.props.threads.map(function(q) {
        return k.createElement(j, {
          key: q.thread_id,
          thread: q,
          viewer: this.props.viewer
        });
      }.bind(this))), this._renderLoadMoreLink()));
    },
    _renderLoadMoreLink: function() {
      if (this.props.isLoaded) return null;
      if (this.props.isLoading) return (k.createElement("div", {
        className: "_v8y"
      }, k.createElement(l, null)));
      return (k.createElement("div", {
        className: "_v8y"
      }, k.createElement(i, {
        href: "#",
        onClick: this._handleLoadMoreClick
      }, "Show Older")));
    },
    _handleScroll: function() {
      if (this.props.isLoaded) return;
      var q = this.refs.scrollable.getArea();
      if (q.getScrollTop() + q.getClientHeight() >= q.getScrollHeight() - 1) this.props.onLoadMoreRequest && this.props.onLoadMoreRequest();
    },
    _handleLoadMoreClick: function(q) {
      q.preventDefault();
      this.props.onLoadMoreRequest && this.props.onLoadMoreRequest();
    }
  });
  e.exports = p;
}, null);
__d("MercuryJewelThreadlistControl", ["ArbiterMixin", "CurrentUser", "CSS", "DOM", "Event", "JSLogger", "MercuryThreadlistConstants", "MercuryThreadlistContainer.react", "MessagesJewelThreadList.react", "MessagingTag", "React", "copyProperties", "csx", "cx", "fbt", "MercuryThreadInformer", "MercuryUnreadState"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
  var v = b('MercuryThreadInformer').get(),
    w = b('MercuryUnreadState').get(),
    x = l.create('mercury_jewel');

  function y(ca) {
    this._threadlistContainer = j.find(ca, "._3v_l");
    this._currentFolder = p.INBOX;
    this._jewelFolderLinks = {};
    this._jewelFolderLinks[p.INBOX] = j.find(ca, "._1sde");
    this._jewelFolderLinks[p.OTHER] = j.find(ca, "._1sdf");
    this._jewelFolderCounts = {};
    this._jewelFolderCounts[p.INBOX] = j.find(ca, "._1sdg");
    this._jewelFolderCounts[p.OTHER] = j.find(ca, "._1sdh");
    aa.bind(this)();
    this._markAllReadLink = j.find(ca, "._1c1m");
    k.listen(this._jewelFolderLinks[p.INBOX], 'click', z.bind(this, p.INBOX));
    k.listen(this._jewelFolderLinks[p.OTHER], 'click', z.bind(this, p.OTHER));
    k.listen(this._markAllReadLink, 'click', function(da) {
      w.markFolderAsRead(this._currentFolder);
      da.kill();
    }.bind(this));
    v.subscribe('unread-updated', aa.bind(this));
    this.render();
    x.bump('opened_threadlist_' + this._currentFolder);
  }
  r(y, {
    EVENT_THREADS_LOADED: 'threads-loaded',
    EVENT_THREADS_RENDERED: 'threads-rendered'
  });
  r(y.prototype, g);
  r(y.prototype, {
    render: function() {
      q.render(q.createElement(n, {
        ChildClass: o,
        viewer: h.getID(),
        folder: this._currentFolder
      }), this._threadlistContainer, function() {
        return this.inform(y.EVENT_THREADS_RENDERED);
      }.bind(this));
    }
  });

  function z(ca) {
    if (this._currentFolder != ca) {
      x.bump('opened_threadlist_' + ca);
      i.addClass(this._jewelFolderLinks[ca], "_1sdd");
      i.removeClass(this._jewelFolderLinks[this._currentFolder], "_1sdd");
      this._currentFolder = ca;
      this.render();
    }
  }

  function aa() {
    ba.bind(this)(p.INBOX);
    ba.bind(this)(p.OTHER);
  }

  function ba(ca) {
    var da;
    if (w.exceedsMaxCount(ca)) {
      da = m.MAX_UNREAD_COUNT;
    } else da = w.getUnreadCount(ca);
    var ea = this._jewelFolderCounts[ca];
    if (da > 0) {
      if (da == m.MAX_UNREAD_COUNT) da += '+';
      j.setContent(ea, u._("({unread_count})", [u.param("unread_count", da)]));
    } else j.setContent(ea, '');
  }
  e.exports = y;
}, null);
__d("MercuryJewel", ["MercuryJewelCountControl", "MercuryServerRequests", "userAction", "MercuryChannelHandler"], function(a, b, c, d, e, f, g, h, i) {
  b('MercuryChannelHandler').get().turnOn();
  var j = false;

  function k(l, m) {
    "use strict";
    h.get().handleUpdate(m);
    var n = l.getRoot(),
      o = l.getFlyout();
    this.$MercuryJewel0 = new g(n, l);
    if (l.getRoot() && l.isOpen()) {
      this.$MercuryJewel1(o);
    } else l.subscribe('opened', this.$MercuryJewel1.bind(this, o));
  }
  k.prototype.$MercuryJewel1 = function(l) {
    "use strict";
    this.$MercuryJewel2 = i('messages').uai('click', 'jewel');
    this.$MercuryJewel3 = this.$MercuryJewel4 = true;
    if (!j) {
      d(['MercuryJewelThreadlistControl'], function(m) {
        this.$MercuryJewel5 = new m(l);
        this.$MercuryJewel5.subscribe(m.EVENT_THREADS_LOADED, this.$MercuryJewel6.bind(this));
        this.$MercuryJewel5.subscribe(m.EVENT_THREADS_RENDERED, this.$MercuryJewel7.bind(this));
      }.bind(this));
      j = true;
    }
  };
  k.prototype.$MercuryJewel6 = function() {
    "use strict";
    if (this.$MercuryJewel3) {
      this.$MercuryJewel2.add_event('loaded');
      this.$MercuryJewel3 = false;
    }
  };
  k.prototype.$MercuryJewel7 = function() {
    "use strict";
    if (this.$MercuryJewel4) {
      this.$MercuryJewel2.add_event('rendered');
      this.$MercuryJewel4 = false;
    }
  };
  e.exports = k;
}, null);
__d("RenderManager", [], function(a, b, c, d, e, f) {
  function g(h) {
    "use strict";
    this._isDirty = false;
    this._obj = h;
  }
  g.prototype.dirty = function() {
    "use strict";
    if (!this._isDirty) {
      this._isDirty = true;
      setTimeout(this._doPaint.bind(this), 0);
    }
  };
  g.prototype._doPaint = function() {
    "use strict";
    this._isDirty = false;
    this._obj.paint();
  };
  e.exports = g;
}, null);
__d("CounterDisplay", ["Arbiter", "CSS", "DOM", "RenderManager", "Run", "$", "copyProperties", "removeFromArray"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  function o(p, q, r, s, t, u) {
    m(this, {
      _name: p,
      _valueNode: l(q),
      _wrapperNode: l(r) || null,
      _statusClass: t,
      _rm: new j(this),
      _arbiterSubscription: null,
      _count: 0
    });
    var v = this._valueNode.firstChild;
    if (v) {
      var w = parseInt(v.nodeValue, 10);
      if (!isNaN(w)) this._count = w;
    }
    this._statusNode = s ? l(s) : null;
    this._subscribeAll();
    o.instances.push(this);
    if (!u) k.onLeave(this._destroy.bind(this), true);
  }
  m(o, {
    EVENT_TYPE_ADJUST: 'CounterDisplay/adjust',
    EVENT_TYPE_UPDATE: 'CounterDisplay/update',
    instances: [],
    adjustCount: function(p, q) {
      g.inform(o.EVENT_TYPE_ADJUST + '/' + p, q);
    },
    setCount: function(p, q) {
      g.inform(o.EVENT_TYPE_UPDATE + '/' + p, q);
    }
  });
  m(o.prototype, {
    _destroy: function() {
      delete this._valueNode;
      delete this._wrapperNode;
      if (this._arbiterSubscription) {
        this._arbiterSubscription.unsubscribe();
        delete this._arbiterSubscription;
      }
      n(o.instances, this);
    },
    adjustCount: function(p) {
      this._count = Math.max(0, this._count + p);
      this._rm.dirty();
      return this;
    },
    setCount: function(p) {
      this._count = Math.max(0, p);
      this._rm.dirty();
      return this;
    },
    paint: function() {
      i.setContent(this._valueNode, this._count);
      this._toggleNodes();
    },
    _toggleNodes: function() {
      if (this._wrapperNode) h.conditionClass(this._wrapperNode, 'hidden_elem', this._count <= 0);
      if (this._statusClass && this._statusNode) h.conditionClass(this._statusNode, this._statusClass, this._count > 0);
    },
    _subscribeAll: function() {
      var p = [o.EVENT_TYPE_ADJUST + '/' + this._name, o.EVENT_TYPE_UPDATE + '/' + this._name];
      this._arbiterSubscription = g.subscribe(p, this._onInform.bind(this), g.SUBSCRIBE_NEW);
    },
    _onInform: function(p, q) {
      q = parseInt(q);
      if (isNaN(q)) return;
      if (p.indexOf(o.EVENT_TYPE_ADJUST) != -1) {
        this.adjustCount(q);
      } else if (p.indexOf(o.EVENT_TYPE_UPDATE) != -1) {
        this.setCount(q);
      } else return;
      return;
    }
  });
  e.exports = o;
}, null);
__d("MessagingEvents", ["Arbiter", "ChannelConstants", "arrayContains", "copyProperties", "isEmpty"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = {},
    m = new g();

  function n(o) {
    if (!k(l)) return;
    for (var p in o) m.inform('count/' + p, o[p]);
  }
  m.subscribe('mark-as-read', function(o, p) {
    (p.tids || p.chat_ids || []).forEach(function(q) {
      q = '' + q;
      if (!(q in l)) {
        l[q] = true;
        var r = function() {
            m.unsubscribe(s);
            clearTimeout(t);
            delete l[q];
          },
          s = m.subscribe('read', function(u, v) {
            if (i((v.tids || []), q) || i((v.chat_ids || []), q)) r();
          }),
          t = setTimeout(r, 60000);
      }
    });
  });
  g.subscribe(h.getArbiterType('messaging'), function(o, p) {
    var q = j({}, p.obj),
      event = q.event || '';
    delete q.type;
    delete q.event;
    m.inform(event, q);
    if ('unread_counts' in q) {
      var r = q.unread_counts;
      n({
        unread: r.inbox,
        other_unseen: r.other
      });
    }
  });
  g.subscribe(h.getArbiterType('inbox'), function(o, p) {
    var q = j(p.obj);
    delete q.type;
    n(q);
  });
  a.MessagingEvents = e.exports = m;
}, 3);
__d("TitanLeftNav", ["CounterDisplay", "MessagingEvents"], function(a, b, c, d, e, f, g, h) {
  var i = {
    initialize: function() {
      h.subscribe('count/other_unseen', function(j, k) {
        g.setCount('other_unseen', k);
      });
    }
  };
  e.exports = i;
}, null);
__d("AccessibilityShortcut", ["AccessibilityLogger", "Event", "Focus", "ge", "onEnclosingPageletDestroy", "warning"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = {
    init: function(n, o) {
      var p = h.listen(n, 'click', function(q) {
        q.preventDefault();
        var r = j(o);
        if (r) {
          i.set(r);
          g.logSRKey();
        } else l(r, 'Failed to set focus on element with ID: %s', o);
      });
      k(n, function() {
        return p.remove();
      });
    }
  };
  e.exports = m;
}, null);
__d("AccessibleMenu", ["Event", "CSS", "DOM", "Keys", "TabbableElements", "Toggler"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m, n, o;

  function p() {
    var x = i.scry(m, 'a[rel="toggle"]')[0];
    x && x.focus();
    l.getInstance(m).hide();
  }

  function q(x) {
    if (!x) return false;
    h.removeClass(x, 'selected');
    x.setAttribute('aria-selected', 'false');
  }

  function r(x) {
    if (!x) return false;
    h.addClass(x, 'selected');
    x.setAttribute('aria-selected', 'true');
    var y = k.find(x);
    if (y[0]) y[0].focus();
  }

  function s(x) {
    var y = i.scry(m, '.selected')[0],
      z = n.indexOf(y) + x,
      aa = n[z];
    if (!aa) return false;
    q(y);
    r(aa);
  }

  function t(x) {
    if (!l.isShown() || l.getActive() !== m || h.hasClass(m, w.MENU_HIDDEN)) return true;
    var y = g.getKeyCode(x);
    switch (y) {
      case j.TAB:
        s(x.shiftKey ? -1 : 1);
        g.prevent(x);
        break;
      case j.ESC:
        p();
        g.prevent(x);
        break;
      case j.UP:
      case j.DOWN:
        s(y === j.UP ? -1 : 1);
        g.prevent(x);
        break;
    }
  }

  function u(x, y) {
    m = y.getActive();
    n = i.scry(m, '[role="menuitem"]');
    if (!o) o = g.listen(document.documentElement, 'keydown', t);
  }

  function v() {
    if (l.getActive() == m) q(i.scry(m, '.selected')[0]);
  }
  var w = {
    init: function(x) {
      l.listen('show', x, u);
      l.listen('hide', x, v);
    },
    MENU_HIDDEN: 'menu_hidden'
  };
  e.exports = w;
}, null);
__d("isEmail", [], function(a, b, c, d, e, f) {
  var g = /^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;

  function h(i) {
    return g.test(i);
  }
  e.exports = h;
}, null);
__d("NotificationJewelReminder", ["Arbiter", "ContextualDialog", "ContextualDialogXUITheme", "DOM", "Event", "ImageBlock.react", "LayerFadeOnHide", "LayerFadeOnShow", "NotificationConstants", "NotificationStore", "NotificationUpdates", "React", "SubscriptionsHandler", "Toggler", "$", "cx", "fbt", "intlList"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
  var y = 2;
  z.init = function(aa) {
    "use strict";
    new z(aa);
  };

  function z(aa) {
    "use strict";
    this.$NotificationJewelReminder0 = aa;
    if (p.getCount()) {
      this.$NotificationJewelReminder1();
      return;
    }
    q.subscribeOnce('update-notifications', function(ba, ca) {
      if (ca.payloadsource === o.PayloadSourceType.INITIAL_LOAD) this.$NotificationJewelReminder1();
    }.bind(this));
  }
  z.prototype.$NotificationJewelReminder1 = function() {
    "use strict";
    p.getNotifications(p.getCount(), this.$NotificationJewelReminder3.bind(this));
  };
  z.prototype.$NotificationJewelReminder3 = function(aa) {
    "use strict";
    var ba = t.getInstance(u('fbNotificationsJewel'));
    if (ba && ba.isShown()) return;
    var ca = [],
      da, ea = Object.keys(aa);
    for (var fa = 0; fa < ea.length; fa++) {
      if (!aa[ea[fa]].showBeep) continue;
      var ga = aa[ea[fa]].actors;
      if (ga.length === 0) continue;
      for (var ha = 0; ha < ga.length; ha++) {
        da = da || ga[ha].profile_picture.uri;
        if (ca.length < y && ga[ha].name && ca.indexOf(ga[ha].name) === -1) ca.push(ga[ha].name);
      }
      if (ca.length === y) break;
    }
    if (ca.length === 0 || !da) return;
    var ia = r.createElement("div", {
        className: "_5bov"
      }, r.createElement(l, null, r.createElement("img", {
        className: "_5bow",
        src: da
      }), r.createElement("div", null, this.$NotificationJewelReminder4(ea.length, ca)))),
      ja = j.create('div');
    r.render(ia, ja);
    var ka = new h({
      alignment: 'right',
      contextSelector: '#fbNotificationsJewel',
      offsetY: -10,
      position: 'below',
      theme: i,
      width: 210
    }, ja);
    ka.enableBehaviors([n, m]);
    this.$NotificationJewelReminder5(ka);
  };
  z.prototype.$NotificationJewelReminder4 = function(aa, ba) {
    "use strict";
    ba = ba.map(function(ca) {
      return r.createElement("b", null, ca);
    });
    return (w._({
      "notifications": "{number} notifications from {notification senders}",
      "notification": "{number} notification from {notification senders}"
    }, [w.param("number", aa), w['enum'](aa > 1 ? 'notifications' : 'notification', {
      notifications: "notifications",
      notification: "notification"
    }), w.param("notification senders", x(ba))]));
  };
  z.prototype.$NotificationJewelReminder5 = function(aa) {
    "use strict";
    aa.show();
    this.$NotificationJewelReminder6 = aa;
    var ba = aa.getRoot();
    this.$NotificationJewelReminder7 = setTimeout(this.$NotificationJewelReminder8.bind(this), this.$NotificationJewelReminder0.show_time);
    this.$NotificationJewelReminder9 = new s();
    this.$NotificationJewelReminder9.addSubscriptions(g.subscribe('layer_shown', function(ca, da) {
      if (da && da.type === 'Jewel') this.$NotificationJewelReminder8();
    }.bind(this)), k.listen(ba, 'mouseenter', function() {
      clearTimeout(this.$NotificationJewelReminder7);
    }.bind(this)), k.listen(ba, 'mouseleave', this.$NotificationJewelReminder8.bind(this)), k.listen(ba, 'click', function() {
      this.$NotificationJewelReminder8();
      t.show(u('fbNotificationsJewel'));
    }.bind(this)));
  };
  z.prototype.$NotificationJewelReminder8 = function() {
    "use strict";
    clearTimeout(this.$NotificationJewelReminder7);
    this.$NotificationJewelReminder6.hide();
    this.$NotificationJewelReminder9.release();
  };
  e.exports = z;
}, null);
__d("PagesVoiceBar", ["$", "Arbiter", "AsyncRequest", "ChannelConstants", "DOM", "URI"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = 'PagesVoiceBar/initialized',
    n = 'PagesVoiceBar/switchVoice',
    o = 'page_transition',
    p = 'pages_voice_bar_sync',
    q = null,
    r = null,
    s = false;

  function t(z, aa) {
    new i('/ajax/pages/switch_voice.php').setData(aa).setHandler(function(ba) {
      x();
    }).send();
  }

  function u() {
    q = null;
  }

  function v(z, aa) {
    if (aa.obj.profile_id && aa.obj.profile_id === q) x();
  }

  function w(z) {
    h.subscribe(m, z);
  }

  function x() {
    l.getNextURI().go();
  }
  var y = {
    initVoiceBar: function() {
      if (s) return;
      r = g('pagesVoiceBarContent');
      h.subscribe(n, t);
      h.subscribe(o, u);
      h.subscribe(j.getArbiterType(p), v);
      s = true;
      h.inform(m, null, h.BEHAVIOR_STATE);
    },
    update: function(z, aa) {
      w(function() {
        q = aa;
        k.setContent(r, z);
      });
    }
  };
  e.exports = y;
}, null);
__d("XPrivacyCheckupSpawnDialogController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/privacy\/checkup\/dialog\/show\/", {
    source: {
      type: "Enum",
      enumType: 1
    }
  });
}, null);
__d("PrivacyLiteFlyout", ["Animation", "Arbiter", "ArbiterMixin", "AsyncDialog", "AsyncRequest", "Banzai", "CSS", "DOM", "Ease", "Event", "Parent", "PrivacyConst", "Style", "SubscriptionsHandler", "Toggler", "XPrivacyCheckupSpawnDialogController", "XPrivacyRemindersDismissController", "copyProperties", "csx", "cx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
  var ba = 'PrivacyLiteFlyout/expandingSection',
    ca = {},
    da = {};

  function ea(na, oa, pa) {
    var qa = oa ? 0 : na.offsetHeight;
    s.set(na, 'height', qa + 'px');
    s.set(na, 'overflow', 'hidden');
    m.show(na);
    var ra = oa ? na.scrollHeight : 0,
      sa = n.getID(na);
    ca[sa] && ca[sa].stop();
    ca[sa] = new g(na).to('height', ra).ondone(function() {
      ca[sa] = null;
      s.set(na, 'height', '');
      s.set(na, 'overflow', '');
      ra || m.hide(na);
      pa();
    }).duration(Math.abs(ra - qa) * 1.5).ease(o.sineOut).go();
  }

  function fa(na) {
    return new k().setURI(na).send();
  }

  function ga() {
    return fa('/ajax/privacy/privacy_lite/increment_masher_tip_count');
  }

  function ha() {
    return fa('/ajax/privacy/privacy_lite/dismiss_masher_tip');
  }

  function ia(na) {
    var event = 'other_section';
    switch (na) {
      case 'who_can_see':
      case 'who_can_contact':
      case 'how_to_stop':
        event = na;
        break;
    }
    return event;
  }
  var ja = null,
    ka = false,
    la = false,
    ma = x({
      loadBody: function() {
        this._loadBody(false);
      },
      loadBodyFromMegaphone: function() {
        this._loadBody(true);
      },
      _loadBody: function(na) {
        if (!ka && aa('fbPrivacyLiteFlyoutLoading')) {
          ka = true;
          new k('/ajax/privacy/privacy_lite/loader').setData({
            from_megaphone: na
          }).send();
        }
      },
      _addListener: function(na, event, oa) {
        return p.listen(na, 'click', function() {
          l.post('privacy_lite', {
            event: event,
            exit_point: oa
          });
        });
      },
      addLoggingElem: function(na, event, oa) {
        var pa = this._loggingElements.length,
          qa = {
            elem: na,
            event: event,
            exit: oa
          };
        this._loggingElements[pa] = qa;
      },
      registerSettingsAndBasicsLinkLogging: function(na, event, oa, pa) {
        var qa = n.scry(na, "._5cw0")[0],
          ra = n.scry(na, "._3djx")[0];
        if (qa) {
          this._settingsLinkListener && this._settingsLinkListener.release();
          this._settingsLinkListener = this._addListener(qa, event, oa);
        }
        if (ra) {
          this._privacyBasicsLinkListener && this._privacyBasicsLinkListener.release();
          this._privacyBasicsLinkListener = this._addListener(ra, event, pa);
        }
      },
      _subscribeListeners: function() {
        this._loggingElements && this._loggingElements.forEach(function(na) {
          this._subscriptions && this._subscriptions.addSubscriptions(this._addListener(na.elem, na.event, na.exit));
        }, this);
      },
      renderBody: function(na, oa) {
        var pa = aa('fbPrivacyLiteFlyoutLoading');
        if (pa) {
          n.replace(pa, na);
          ma.registerCallback(function() {
            ma.inform('load', null, h.BEHAVIOR_STATE);
          }, oa);
        }
      },
      hideCleanup: function(na) {
        h.inform(ba);
        var oa = n.scry(na, "._2va0").forEach(function(pa) {
          m.removeClass(pa, "_2va0");
        });
      },
      registerFlyoutToggler: function(na, oa, pa) {
        this._loggingElements = [];
        ja = oa;
        var qa = u.createInstance(na);
        qa.setSticky(false);
        u.listen(['show', 'hide'], oa, function(ra) {
          ma.inform(ra);
          la = ra === 'show';
          if (!la) {
            ma.hideCleanup(na);
            qa.hide();
            this._subscriptions && this._subscriptions.release();
            this._subscriptions = null;
            h.inform('layer_hidden', {
              type: 'PrivacyShortcutsFlyout'
            });
          } else {
            h.inform('layer_shown', {
              type: 'PrivacyShortcutsFlyout'
            });
            if (pa) {
              pa.start(this);
              pa = null;
            }
            h.subscribeOnce(ba, function() {
              this._subscriptions && this._subscriptions.release();
              this._subscriptions = new t();
              this._subscribeListeners();
            }.bind(this));
            l.post('privacy_lite', {
              event: 'show_flyout',
              exit_point: null
            });
          }
        }.bind(this));
      },
      isFlyoutVisible: function() {
        return ja && u.getActive() === ja;
      },
      exists: function() {
        return !!n.scry(document.body, "._59fc")[0];
      },
      setFlyoutVisible: function(na) {
        na ? u.show(ja) : u.hide(ja);
      },
      showSection: function(na) {
        var oa = da[na];
        if (!oa) return;
        if (!oa.sublist_container) {
          ma.inform('expanded', na, h.BEHAVIOR_STATE);
          return;
        }
        var pa = oa.chevron,
          qa = oa.sublist_container;
        h.inform(ba, pa);
        if (ma.inform('expand', na) !== false) {
          m.removeClass(pa, "_9or");
          m.addClass(pa, "_9os");
          ea(qa, true, function() {
            ma.inform('expanded', na);
          });
        }
      },
      hideSection: function(na, oa, pa) {
        var qa = da[na],
          ra = qa.chevron,
          sa = qa.sublist_container;
        if (pa === ra) return;
        if (ma.inform('collapse', na) !== false) {
          m.addClass(ra, "_9or");
          m.removeClass(ra, "_9os");
          ea(sa, false, function() {
            ma.inform('collapsed', na);
          });
        }
      },
      toggleSection: function(na) {
        var oa = da[na].chevron;
        u.getInstance(oa).hide();
        if (m.hasClass(oa, "_9or")) {
          ma.showSection(na);
          l.post('privacy_lite', {
            event: ia(na) + '_expand',
            exit_point: null
          });
          new k('/ajax/privacy/privacy_lite/log_section_expand').setData({
            section: na
          }).send();
        } else {
          ma.hideSection(na);
          l.post('privacy_lite', {
            event: ia(na) + '_collapse',
            exit_point: null
          });
        }
      },
      registerSection: function(na, oa) {
        da[na] = oa;
        if (oa.sublist_container) {
          h.subscribe(ba, ma.hideSection.bind(null, na));
          p.listen(oa.section_block, 'click', ma.toggleSection.bind(null, na));
        }
        ma.inform(na);
      },
      registerInlineHelpOnAudienceChangeNewSelector: function(na, oa, pa, qa) {
        na = na.getInstance();
        na.subscribe('changed', function(ra) {
          this._registerInlineHelpOnAudienceChange(oa, pa, qa, na.getSelectedBaseValue());
        }.bind(this));
      },
      registerSelectorLogging: function(na, oa, pa, qa) {
        na = na.getInstance();
        na.subscribe('open', function() {
          l.post('privacy_lite', {
            event: oa,
            exit_point: null
          });
        });
        na.subscribe('close', function() {
          l.post('privacy_lite', {
            event: pa,
            exit_point: null
          });
        });
        na.subscribe('changed', function() {
          l.post('privacy_lite', {
            event: qa,
            exit_point: null
          });
        });
      },
      _registerInlineHelpOnAudienceChange: function(na, oa, pa, qa) {
        var ra = n.find(na, "._9o_"),
          sa = n.find(na, "._2v9_");
        if (pa) {
          var ta = n.find(na, "._5n9w"),
            ua = (qa == r.BaseValue.EVERYONE);
          m.conditionShow(ta, ua);
          m.conditionShow(ra, !ua);
          if (ta && ua) {
            var va = (w.getURIBuilder()).setString('type', 'delta_everyone').setBool('log_plite', true).getURI();
            new k(va).send();
          }
        } else m.show(ra);
        m.hide(sa);
        if (oa) new k('/ajax/privacy/privacy_lite/kill_intro').send();
      },
      registerInlineHelpXOutOnClick: function(na, oa, pa) {
        p.listen(na, 'click', function() {
          m.addClass(oa, "_9p0");
        });
      },
      registerBlockUnhideOnFocus: function(na, oa) {
        p.listen(na, 'focus', function(pa) {
          m.show(pa);
          l.post('privacy_lite', {
            event: 'block_user_input_click',
            exit_point: null
          });
        }.bind(this, oa));
      },
      registerMessageFilterSettingOnClick: function(na, oa) {
        var pa = n.find(na, "._fv0");
        p.listen(na, 'click', function() {
          if (pa.checked) {
            new k('/ajax/mercury/change_filtering_type.php').setData({
              filtering_type: oa,
              source: 'privacy_lite'
            }).send();
          } else {
            var event = 'basic_filtering';
            if (oa === 'strict') event = 'strict_filtering';
            l.post('privacy_lite', {
              event: event,
              exit_point: null
            });
          }
        });
      },
      registerMasher: function(na, oa) {
        var pa = false;
        h.subscribe(ba, function(qa, ra) {
          var sa = true;
          if (ra) sa = !!n.scry(q.byTag(ra, 'li'), "._571t").length;
          if (pa || !sa) return;
          pa = !!(ga());
        });
        p.listen(oa, 'click', function() {
          n.remove(na);
          ha();
        });
      },
      registerPrivacyCheckupListener: function(na) {
        p.listen(na, 'click', function() {
          this.setFlyoutVisible(false);
          j.send(new k((v.getURIBuilder()).setEnum('source', 'plite').getURI()));
          l.post('privacy_lite', {
            event: 'exit_flyout',
            exit_point: 'privacy_checkup'
          });
        }.bind(this));
      },
      displayPrivacyCheckup: function(na) {
        na.show();
      }
    }, i);
  e.exports = ma;
}, null);
__d("PrivacyLiteFlyoutHelp", ["Event", "Arbiter", "AsyncRequest", "Banzai", "ContextualHelpSearchController", "CSS", "DOM", "Parent", "copyProperties", "csx", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  var r, s;

  function t(u, v, w, x, y) {
    this._width = 315;
    s = m.find(v, 'input');
    var z = m.create('div');
    this.init(u, s, z, w, x, {
      focusSearchBox: false
    });
    r = n.byClass(v, "_8-a");
    g.listen(y, 'click', function() {
      this._hideSearch(this);
      j.post('privacy_lite', {
        event: 'plite_search_collapse',
        exit_point: null
      });
    }.bind(this));
    h.subscribe('PrivacyLiteFlyout/expandingSection', this._hideSearch.bind(this));
    var aa = m.scry(r, "._d1r")[0];
    aa && g.listen(aa, 'click', function() {
      l.addClass(r, "_aw6");
      s.focus();
      j.post('privacy_lite', {
        event: 'plite_search_expand',
        exit_point: null
      });
      if (!this.suggestedResults) new i('/ajax/privacy/privacy_lite/help_suggestions').setHandler(function(ba) {
        var ca = ba.getPayload().searchSuggestions,
          da = m.find(r, "._4_8m");
        m.setContent(da, ca);
        l.addClass(r, "_4_8l");
      }.bind(this)).send();
    }.bind(this));
  }
  o(t.prototype, new k(), {
    source: 'privacy_shortcuts',
    _hideSearch: function() {
      this.clearResults();
      l.removeClass(r, "_aw6");
    },
    show: function(u) {
      if (u === this.topics_area) {
        l.removeClass(r, "_aw7");
        return;
      } else if (u === this.loader) {
        l.addClass(r, "_aw7");
        l.hide(this.results_area);
      } else l.hide(this.loader);
      l.show(u);
    }
  });
  e.exports = t;
}, null);
__d("ViewasChromeBar", ["Event", "Arbiter", "AsyncRequest", "CSS", "DOM", "Focus", "ModalMask", "PageTransitions", "Parent", "cx", "csx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  var r = 'ViewasChromeBar/initialized',
    s = null,
    t = false;

  function u(x) {
    h.subscribe(r, x);
  }

  function v(x) {
    j.addClass(x, "_7g7");
    var y = k.find(x, "._7g0");
    l.set(k.find(y, '.textInput'));
  }
  var w = {
    initChromeBar: function(x) {
      if (t) return;
      s = x;
      t = true;
      h.inform(r, null, h.BEHAVIOR_STATE);
    },
    update: function(x, y) {
      u(function() {
        k.setContent(s, x);
        if (y) new i('/ajax/privacy/glasgow/viewas_bar_flyout_open').send();
      });
    },
    registerSpecificModeOnClick: function(x) {
      g.listen(x, 'click', v.bind(null, o.byClass(x, "_7f-")));
    },
    registerFlyoutModalMask: function() {
      m.show();
      n.registerHandler(m.hide, 10);
    }
  };
  e.exports = w;
}, null);
__d("legacy:SearchDataSource", ["SearchDataSource"], function(a, b, c, d) {
  a.SearchDataSource = b('SearchDataSource');
}, 3);
__d("SearchTypeaheadCore", ["Arbiter", "DOM", "Event", "Input", "Parent", "TypeaheadCore"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  for (var m in l)
    if (l.hasOwnProperty(m)) o[m] = l[m];
  var n = l === null ? null : l.prototype;
  o.prototype = Object.create(n);
  o.prototype.constructor = o;
  o.__superConstructor__ = l;

  function o(p) {
    "use strict";
    l.call(this, p);
  }
  o.prototype.init = function(p, q, r) {
    "use strict";
    n.init.call(this, p, q, r);
    var s = k.byTag(r, 'form'),
      t = this.reset.bind(this);
    g.subscribe('pre_page_transition', function(event, v) {
      var w = /^\/search/,
        x = w.test(v.from.path),
        y = w.test(v.to.path);
      if (x && !y) setTimeout(t, 0);
    });
    if (s) {
      var u = h.find(s, 'input.search_sid_input');
      i.listen(s, 'submit', function() {
        if (this.data && this.data.queryData) u.value = this.data.queryData.sid;
        setTimeout(t, 0);
      }.bind(this), i.Priority.URGENT);
    }
  };
  o.prototype.select = function() {
    "use strict";
    this.reset();
    this.element.focus();
    setTimeout((function() {
      this.element.blur();
    }).bind(this), 0);
  };
  o.prototype.handleTab = function(event) {
    "use strict";
    var p = this.view.getQuerySuggestion(this.value);
    if (p) {
      j.setValue(this.element, p);
      this.checkValue();
      event.kill();
    } else n.handleTab.call(this, event);
  };
  o.prototype.getSearchType = function() {
    "use strict";
    return 'regular';
  };
  o.prototype.focus = function() {
    "use strict";
    n.focus.call(this);
    if (this.getValue().length === 0 || this.element.getAttribute('singlestate') === 'true') this.data.fetchNullState(this.getValue());
  };
  o.prototype.keyup = function() {
    "use strict";
    n.keyup.call(this);
    if (this.getValue().length === 0) this.data.fetchNullState(this.getValue());
    this.element.setAttribute('singlestate', false);
  };
  e.exports = o;
}, null);
__d("legacy:SearchTypeaheadCore", ["SearchTypeaheadCore"], function(a, b, c, d) {
  a.SearchTypeaheadCore = b('SearchTypeaheadCore');
}, 3);
__d("SearchPeopleSeeMore", ["fbt", "TokenizeUtil", "URI"], function(a, b, c, d, e, f, g, h, i) {
  var j = 3;

  function k(l, m) {
    "use strict";
    this.results = l;
    this.seeMoreUri = m;
  }
  k.prototype.addResult = function() {
    "use strict";
    var l = null,
      m = 0,
      n = [];
    for (var o = 0; o < this.results.length; o++) {
      var p = this.results[o];
      if (p.type != 'user') break;
      m++;
      if (!l) {
        l = p.text;
      } else l = this.findCommonTokens(l, p.text);
      if (!l) break;
      n.push(p);
    }
    if (l && m >= j) n.push(this.createFindAllPeopleResult(l));
    for (; o < this.results.length; o++) n.push(this.results[o]);
    return n;
  };
  k.prototype.createFindAllPeopleResult = function(l) {
    "use strict";
    var m = g._("Find all people named \"{query}\"", [g.param("query", l.toLowerCase())]),
      n = i(this.seeMoreUri).addQueryData({
        q: l,
        init: 'psm'
      }).toString();
    return {
      type: 'user',
      text: m,
      classNames: 'seeAllUser',
      photo: '/images/search_typeahead/people_see_more.png',
      logType: 'grammar',
      path: n
    };
  };
  k.prototype.findCommonTokens = function(l, m) {
    "use strict";
    if (!l || !m) return;
    var n = h.tokenize(l),
      o = h.tokenize(m),
      p = 0;
    for (var q = 0; q < n.length && q < o.length; q++)
      if (n[q] === o[q]) {
        p++;
      } else break;
    if (!p) return null;
    if (p === n.length) return l;
    if (p === o.length) return m;
    var r = '';
    for (var s = 0; s < p; s++) r = n[s] + '';
    return r.trim();
  };
  e.exports = k;
}, null);
__d("SearchTypeaheadView", ["Arbiter", "ContextualLayerUpdateOnScroll", "ContextualTypeaheadView", "copyProperties", "DOM", "goURI", "MusicConstants", "MusicEvents", "SearchPeopleSeeMore", "SimpleSearchTypeaheadExperiments", "URI", "fbt", "isEmail"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  for (var t in i)
    if (i.hasOwnProperty(t)) v[t] = i[t];
  var u = i === null ? null : i.prototype;
  v.prototype = Object.create(u);
  v.prototype.constructor = v;
  v.__superConstructor__ = i;

  function v(x, y) {
    "use strict";
    i.call(this, x, y);
  }
  v.prototype.initializeLayer = function() {
    "use strict";
    u.initializeLayer.call(this);
    this.layer.setOffsetY(-1);
    this.layer.enableBehavior(h);
  };
  v.prototype.ignoreClick = function(event) {
    "use strict";
    event.prevent();
  };
  v.prototype.render = function(x, y, z) {
    "use strict";
    if (!y) return;
    if (this._bucketize) y = w(y);
    if (this.showPeopleSeeMore && x) {
      var aa = new o(y, this.getSeeMoreEndpoint('', true));
      y = aa.addResult();
    }
    var ba = {
      results: y,
      value: x
    };
    this.inform('finalResultsReordering', ba);
    return u.render.call(this, x, ba.results, z);
  };
  v.prototype.disableBucketization = function() {
    "use strict";
    this._bucketize = false;
  };
  v.prototype.buildBuckets = function(x, y) {
    "use strict";
    var z = y.length;
    if (!p.updateResults)
      if (y.length === 0) {
        y = this._lastNonEmptyResults || [];
      } else this._lastNonEmptyResults = y;
    var aa = y.length,
      ba = 0,
      ca;
    for (ca = 0; ca < aa; ++ca)
      if (y[ca].type == 'user') ba++;
    this._redirectToUsersResultsPage = this.showFilterResults && ba === aa;
    this.setWebSuggLoggingParams(x, y);
    if (!x && this.showFindPeople) y.unshift(this.buildFindPeople());
    if (this._bucketize) y = u.buildBuckets.call(this, x, y);
    if (x && this._shouldShowSeeMore) {
      y.push(this.buildSeeMore(x, z));
      if (s(x) && (ba < 1)) y.push(this.buildInvite(x));
    }
    return y;
  };
  v.prototype.buildFindPeople = function() {
    "use strict";
    var x = "Find people";
    return {
      classNames: 'seeAllUser seeAllUserNullState',
      logType: 'grammar',
      path: this.getSeeMoreEndpoint(null, true),
      photo: '/images/search_typeahead/people_see_more.png',
      text: x,
      type: 'no_header'
    };
  };
  v.prototype.buildSeeMore = function(x, y) {
    "use strict";
    if (!p.updateSeeMore)
      if (y === 0) {
        x = this._lastValueWithResults || '';
      } else this._lastValueWithResults = x;
    var z = this.getSeeMoreText(x, y),
      aa = y == 1 ? "Displaying top result" : r._("Displaying top {number} results", [r.param("number", y)]),
      ba = k.create('li', {
        className: 'calltoaction'
      }, [k.create('a', {
        href: this.getSeeMoreEndpoint(x),
        rel: 'ignore'
      }, [k.create('span', {
        className: 'text'
      }, [k.create('span', {
        className: 'seeMore'
      }, [z, k.create('span', {
        className: 'arrow'
      })]), k.create('span', {
        className: 'subtext'
      }, [aa])])])]);
    ba.setAttribute('aria-label', z);
    return {
      uid: 'search',
      node: ba,
      search: true
    };
  };
  v.prototype.getSeeMoreText = function(x, y) {
    "use strict";
    if (this.showKeywordResultsPage) return r._("Search for {query}", [r.param("query", x)]);
    if (y <= 0) return r._("See results for {query}", [r.param("query", x)]);
    if (this._redirectToUsersResultsPage) return r._("Filter results for {query}", [r.param("query", x)]);
    return r._("See more results for {query}", [r.param("query", x)]);
  };
  v.prototype.buildInvite = function(x) {
    "use strict";
    var y = r._("Invite {query} to Facebook", [r.param("query", x)]),
      z = k.create('li', {
        className: 'calltoaction'
      }, [k.create('a', {
        href: this.getInviteEndpoint(x),
        rel: 'ignore'
      }, [k.create('span', {
        className: 'text'
      }, [k.create('span', {
        className: 'invite'
      }, [y])])])]);
    z.setAttribute('aria-label', y);
    return {
      uid: 'invite',
      node: z,
      search: true
    };
  };
  v.prototype.searchPageQueryData = function(x) {
    "use strict";
    return j({
      q: x
    }, this.queryData || {});
  };
  v.prototype.searchPageTypeData = function(x) {
    "use strict";
    return this._redirectToUsersResultsPage || x ? {
      type: "users"
    } : {};
  };
  v.prototype.select = function(x) {
    "use strict";
    var y = this.index,
      z = this.results[y];
    if (!z || z.type == 'header') return;
    var aa = this.items[y],
      ba = k.scry(aa, 'a')[0];
    if (z.song) {
      if (ba) n.inform(m.MUSIC_BUTTON.ACTIVATE, ba);
      x && this.inform('highlight', {
        index: y,
        selected: z
      });
    } else {
      u.select.call(this, x);
      if (ba && ba.href)
        if (ba.target == '_blank') {
          window.open(ba.href);
        } else l(ba.href);
    }
  };
  v.prototype.setSid = function(x) {
    "use strict";
    this.queryData.tas = x;
  };
  v.prototype.getSeeMoreEndpoint = function(x, y) {
    "use strict";
    return q(this.seeMoreEndpoint).addQueryData(this.searchPageQueryData(x)).addQueryData(this.searchPageTypeData(y)).toString();
  };
  v.prototype.getInviteEndpoint = function(x) {
    "use strict";
    return q('/invite.php').addQueryData({
      email_list: x
    });
  };
  v.prototype.show = function() {
    "use strict";
    if (!this.isVisible()) {
      g.inform('layer_shown', {
        type: 'SearchTypeahead'
      });
      u.show.call(this);
    }
  };
  v.prototype.hide = function() {
    "use strict";
    if (this.isVisible()) {
      g.inform('layer_hidden', {
        type: 'SearchTypeahead'
      });
      u.hide.call(this);
    }
  };
  v.prototype.getQuerySuggestion = function(x) {
    "use strict";
    var y = this.results[this.index],
      z = y && y.type != 'header' ? y.text.toLowerCase() : '';
    return z == x.toLowerCase() ? '' : z;
  };
  v.prototype.setWebSuggLoggingParams = function(x, y) {
    "use strict";
    var z = 0,
      aa = 0;
    for (var ba = 0; ba < y.length; ba++)
      if (y[ba].type === 'websuggestion') {
        if (aa === 0) aa = ba + 1;
        var ca = 'FR' + (ba - z) + 'AS' + z,
          da = ba + 1;
        y[ba].path += '&wssk=' + ca + '&wssp=' + da + '&wspq=' + encodeURIComponent(x);
        y[ba].path += '&wssrc=' + y[ba].websuggestion_source;
        z++;
      }
    var ea = '&wssc=' + y.length + '-' + x.length + '&wsbp=' + z + '-' + aa;
    for (ba = 0; ba < y.length; ba++)
      if (y[ba].type === 'websuggestion') y[ba].path += ea;
  };

  function w(x) {
    var y, z, aa, ba, ca = [],
      da = {};
    z = x.length;
    for (y = 0; y < z; y++) {
      aa = x[y];
      ba = aa.render_type || aa.type;
      if (!da.hasOwnProperty(ba)) {
        da[ba] = ca.length;
        ca.push([]);
      }
      ca[da[ba]].push(aa);
    }
    var ea = [];
    z = ca.length;
    for (y = 0; y < z; ++y) {
      aa = ca[y][0];
      ba = aa.render_type || aa.type;
      ea = ea.concat(ca[y]);
    }
    return ea;
  }
  j(v.prototype, {
    _shouldShowSeeMore: true,
    _bucketize: true,
    queryData: {
      init: 'quick'
    }
  });
  e.exports = v;
}, null);
__d("legacy:SearchTypeaheadView", ["SearchTypeaheadView"], function(a, b, c, d) {
  a.SearchTypeaheadView = b('SearchTypeaheadView');
}, 3);
__d("legacy:Typeahead", ["Typeahead"], function(a, b, c, d) {
  a.Typeahead = b('Typeahead');
}, 3);
__d("TypeaheadSearchRecorderBasic", ["SearchTypeaheadRecorder", "copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h, i) {
  function j(k) {
    "use strict";
    this._typeahead = k;
  }
  j.prototype.enable = function() {
    "use strict";
    new g(this._typeahead);
  };
  h(j.prototype, {
    disable: i
  });
  e.exports = j;
}, null);
__d("legacy:SearchRecorderBasicTypeaheadBehavior", ["TypeaheadSearchRecorderBasic"], function(a, b, c, d, e, f, g) {
  if (!a.TypeaheadBehaviors) a.TypeaheadBehaviors = {};
  a.TypeaheadBehaviors.searchRecorderBasic = function(h) {
    h.enableBehavior(g);
  };
}, 3);
__d("legacy:SearchTypeaheadRenderer", ["SearchTypeaheadRenderer"], function(a, b, c, d) {
  if (!a.TypeaheadRenderers) a.TypeaheadRenderers = {};
  a.TypeaheadRenderers.search = b('SearchTypeaheadRenderer');
}, 3);
void(0);
__d("TypeaheadSearchFilter", ["Arbiter", "copyProperties"], function(a, b, c, d, e, f, g, h) {
  function i(j) {
    "use strict";
    this._typeahead = j;
  }
  i.prototype.enable = function() {
    "use strict";
    var j = this._typeahead,
      k = j.getView().seeMoreEndpoint;
    this._subscriptions = [g.subscribe('search/typeahead/updateFilter', function(l, m) {
      if (m.filter_type == 'web') j.getView().queryData.form = 'FBKBFR';
      j.getView().queryData.type = m.filter_type;
    }), g.subscribe('search/typeahead/updateSeeMoreEndpoint', function(l, m) {
      j.getView().seeMoreEndpoint = m;
    }), g.subscribe('page_transition', function(l, m) {
      if (j.getView().queryData.form) delete j.getView().queryData.form;
      delete j.getView().queryData.type;
      j.getView().seeMoreEndpoint = k;
    }, g.SUBSCRIBE_NEW)];
  };
  i.prototype.disable = function() {
    "use strict";
    this._subscriptions.forEach(function(j) {
      j.unsubscribe();
    });
    this._subscriptions = null;
  };
  h(i.prototype, {
    _subscription: null
  });
  e.exports = i;
}, null);
__d("legacy:SearchFilterTypeaheadBehavior", ["TypeaheadSearchFilter"], function(a, b, c, d, e, f, g) {
  if (!a.TypeaheadBehaviors) a.TypeaheadBehaviors = {};
  a.TypeaheadBehaviors.initFilters = function(h) {
    h.enableBehavior(g);
  };
}, 3);
__d("TypeaheadDetectQueryLocale", [], function(a, b, c, d, e, f) {
  function g(h) {
    "use strict";
    this._typeahead = h;
    this._data = h.getData();
    this._queryCache = {
      '': this._data.queryCache,
      ja_JP: {},
      zh_TW: {}
    };
  }
  g.prototype.enable = function() {
    "use strict";
    this._previousLocale = '';
    this._reset = this._typeahead.subscribe('reset', this._swapQueryCache.bind(this, ''));
    this._beforeQuery = this._data.subscribe('beforeQuery', function(h, i) {
      var j = i.value;
      if (j === '') {
        this._swapQueryCache('');
        return;
      }
      var k = null,
        l = j.charCodeAt(j.length - 1);
      if (12352 <= l && l <= 12543) {
        k = 'ja_JP';
      } else if (12544 <= l && l <= 12735) k = 'zh_TW';
      this._swapQueryCache(k);
    }.bind(this));
  };
  g.prototype.disable = function() {
    "use strict";
    this._swapQueryCache('');
    this._data.unsubscribe(this._beforeQuery);
    this._typeahead.ubsubscribe(this._reset);
  };
  g.prototype._swapQueryCache = function(h) {
    "use strict";
    if (h === null || h === this._previousLocale) return;
    this._data.queryCache = this._queryCache[h];
    this._data.setQueryData({
      query_locale: h
    });
    this._previousLocale = h;
  };
  e.exports = g;
}, null);
__d("TypeaheadExcludeBootstrapFromQueryCache", [], function(a, b, c, d, e, f) {
  function g(h) {
    "use strict";
    this._data = h.getData();
  }
  g.prototype.enable = function() {
    "use strict";
    this._buildingQueryCache = false;
    this._buildQueryCache = this._data.subscribe('buildQueryCache', function() {
      this._buildingQueryCache = true;
    }.bind(this));
    this._mergeUids = this._data.subscribe('mergeUids', function(h, i) {
      if (this._buildingQueryCache) i.local_uids.splice(0, i.local_uids.length);
    }.bind(this));
    this._fetchComplete = this._data.subscribe('fetchComplete', function() {
      this._buildingQueryCache = false;
    }.bind(this));
  };
  g.prototype.disable = function() {
    "use strict";
    this._data.unsubscribe(this._buildQueryCache);
    this._data.unsubscribe(this._mergeUids);
    this._data.unsubscribe(this._fetchComplete);
  };
  e.exports = g;
}, null);