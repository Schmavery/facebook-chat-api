/*!CK:1062110405!*/
/*1424145783,*/
if (self.CavalryLogger) {
  CavalryLogger.start_js(["wZzWO"]);
}

__d("GenderConst", [], function(a, b, c, d, e, f) {
  e.exports = {
    NOT_A_PERSON: 0,
    FEMALE_SINGULAR: 1,
    MALE_SINGULAR: 2,
    FEMALE_SINGULAR_GUESS: 3,
    MALE_SINGULAR_GUESS: 4,
    MIXED_SINGULAR: 5,
    MIXED_PLURAL: 5,
    NEUTER_SINGULAR: 6,
    UNKNOWN_SINGULAR: 7,
    FEMALE_PLURAL: 8,
    MALE_PLURAL: 9,
    NEUTER_PLURAL: 10,
    UNKNOWN_PLURAL: 11,
    UNKNOWN: 0
  };
}, null);
__d("VideoCallingTour", ["Arbiter", "ArbiterMixin", "Chat", "ChatSidebar", "ChatVisibility", "CSS", "DOM", "PresencePrivacy", "Run", "Toggler", "Vector", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  var s, t, u, v, w = [],
    x = function() {};

  function y() {
    if (j.isVisible()) {
      z();
    } else if (u) aa();
  }

  function z() {
    s.setContext(t.getBody());
    ba();
    s.show();
    ca();
  }

  function aa() {
    if (!v) v = p.createInstance(u.getRoot());
    var fa = m.scry(u.getRoot(), 'div.fbNubFlyout')[0];
    if (fa) {
      s.setContext(fa);
      ba();
      s.show();
      ca();
    }
  }

  function ba() {
    var fa = q.getElementDimensions(s.getContext()).y;
    s.setOffsetY(fa * .6);
    s.updatePosition();
  }

  function ca() {
    if (u) w.push(u.subscribe('hide', function() {
      da();
      if (!j.isVisible()) s.hide();
    }), u.subscribe('show', function() {
      s.show();
    }), u.subscribe('resize', function() {
      ba();
      s.updatePosition();
    }));
    w.push(g.subscribe('sidebar/show', z), g.subscribe('sidebar/hide', aa), g.subscribe('sidebar/resized', ba));
  }

  function da() {
    if (v) {
      v.setSticky(false);
      v = null;
    }
  }

  function ea() {
    while (w.length) w.pop().unsubscribe();
    if (u) da();
    s.hide();
    l.show('fbVideoCallingGetStarted');
  }
  r(x, h, {
    start: function(fa) {
      s = fa;
      l.hide('fbVideoCallingGetStarted');
      k.goOnline(function() {
        w.push(n.subscribe('privacy-user-presence-changed', ea));
        o.onLeave(ea);
        i.openBuddyList();
        var ga = null;
        w.push(j.subscribe('sidebar/initialized', function(ha, ia) {
          t = ia;
          clearTimeout(ga);
          ga = setTimeout(y, 0);
        }), x.subscribe('videocallingtour/end', ea));
        w.push(g.subscribe('buddylist-nub/initialized', function(ha, ia) {
          u = ia;
          clearTimeout(ga);
          ga = setTimeout(y, 0);
        }));
      });
      x.inform('videocallingtour/start');
    }
  });
  e.exports = x;
}, null);
__d("getURLRanges", ["URI", "URLScraper"], function(a, b, c, d, e, f, g, h) {
  "use strict";

  function i(j, k) {
    k = k || 0;
    var l = h.match(j);
    if (!l) return [];
    var m = l;
    if (!(/^[a-z][a-z0-9\-+.]+:\/\//i.test(l))) m = 'http://' + l;
    if (!g.isValidURI(m)) return [];
    k += j.indexOf(l);
    var n = l.length,
      o = [{
        offset: k,
        length: l.length,
        entity: {
          url: m
        }
      }];
    return o.concat(i(j.substr(k + n), k + n));
  }
  e.exports = i;
}, null);
__d("MercuryMessageBody.react", ["EmoticonsList", "React", "Link.react", "ReactComponentWithPureRenderMixin", "SupportedEmoji", "TextWithEntities.react", "URLMatcher", "cancelAnimationFrame", "cx", "fbt", "getURLRanges", "requestAnimationFrame"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  var s = function(u, v) {
      return (h.createElement(i, {
        target: "_blank",
        href: v.entity
      }, u));
    },
    t = h.createClass({
      displayName: "MercuryMessageBody",
      mixins: [j],
      propTypes: {
        body: h.PropTypes.string,
        ranges: h.PropTypes.array
      },
      getInitialState: function() {
        return {
          richText: false
        };
      },
      componentDidMount: function() {
        this._raf = r(function() {
          delete this._raf;
          var u = this.props,
            v = u.body,
            w = u.ranges;
          if ((w && w.length) || g.noncapturingRegexp.test(v) || k.findEmoji(v) || m.match(v)) this.setState({
            richText: true
          });
        }.bind(this));
      },
      componentWillUnmount: function() {
        this._raf && n(this._raf);
      },
      render: function() {
        var u = this.props.body || '';
        if (u.startsWith('?OTR')) return (h.createElement("span", {
          className: "_89h"
        }, "[encrypted message]"));
        u = u.replace(/\s+$/, '');
        if (u.length === 0) return null;
        if (!this.state.richText) return h.createElement("span", null, u);
        var v = this.props.ranges;
        if (v == (void 0)) v = q(u);
        return (h.createElement(l, {
          interpolator: s,
          text: u,
          ranges: v,
          renderEmoticons: true,
          renderEmoji: true
        }));
      }
    });
  e.exports = t;
}, null);
__d("NubController", ["ArbiterMixin", "Dock", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
  function j() {}
  i(j.prototype, g, {
    init: function(k) {
      this.el = k;
      h.registerNubController(k, this);
      return this;
    },
    buttonContentChanged: function() {
      this.inform('nub/button/content-changed');
    },
    flyoutContentChanged: function() {
      this.inform('nub/flyout/content-changed');
    },
    hide: function() {
      h.hide(this.el);
    },
    show: function() {
      h.show(this.el);
    }
  });
  e.exports = j;
}, null);
__d("DataViewPolyfill", [], function(a, b, c, d, e, f) {
  "use strict";

  function g(h, i, j) {
    if (i === (void 0)) {
      this.$DataViewPolyfill0 = new Uint8Array(h);
    } else if (j === (void 0)) {
      this.$DataViewPolyfill0 = new Uint8Array(h, i);
    } else this.$DataViewPolyfill0 = new Uint8Array(h, i, j);
    this.byteLength = this.$DataViewPolyfill0.byteLength;
  }
  g.prototype.getUint8 = function(h) {
    if (h >= this.$DataViewPolyfill0.length) throw new Error('Trying to read beyond bounds of DataViewPolyfill');
    return this.$DataViewPolyfill0[h];
  };
  g.prototype.getUint16 = function(h, i) {
    var j = this.getUint8(h),
      k = this.getUint8(h + 1);
    return i ? (k * 256) + j : (j * 256) + k;
  };
  g.prototype.getUint32 = function(h, i) {
    var j = this.getUint8(h),
      k = this.getUint8(h + 1),
      l = this.getUint8(h + 2),
      m = this.getUint8(h + 3);
    return i ? (((m * 256 + l) * 256 + k) * 256) + j : (((j * 256 + k) * 256 + l) * 256) + m;
  };
  g.isSupported = function() {
    return !!a.Uint8Array;
  };
  e.exports = g;
}, null);
__d("ChatCookieInterface", ["ChatConfig", "InitialServerTime", "LogHistory", "PresenceState", "PresenceUtil"], function(a, b, c, d, e, f, g, h, i, j, k) {
  'use strict';
  var l = i.getInstance('chat_cookie'),
    m = h.serverTime,
    n = g.get('tab_max_load_age') || 3600000,
    o = m - n,
    p = {
      store: function(r, s) {
        if (r.uct2 == s.lastChangeTime) return r;
        var t = q(r, s),
          u = {};
        if (!t) {
          u.old_tabs = r && r.t2 && JSON.stringify(r.t2);
          u.old_promoted = r && r.lm2;
          u.old_time = r && r.uct2;
          u.old_reason = r && r.tr;
          u.old_window = r && r.tw;
          var v = [];
          s.tabs.forEach(function(w) {
            if (!w.fragile) {
              var x = {
                i: w.id,
                si: w.server_id
              };
              if (w.raised) x.r = 1;
              v.push(x);
            }
          });
          r.t2 = v;
          r.lm2 = s.promotedTab;
          r.uct2 = s.lastChangeTime;
          r.tr = s.lastChangeReason;
          r.tw = k.getSessionID();
          u.new_tabs = JSON.stringify(r.t2);
          u.new_promoted = r.lm2;
          u.new_time = r.uct2;
          u.new_reason = r.tr;
          u.new_window = r.tw;
          l.debug('store', u);
        } else {
          u.tabs = r && r.t2 && JSON.stringify(r.t2);
          u.promoted = r && r.lm2;
          u.time = r && r.uct2;
          u.reason = r && r.tr;
          u.window = r && r.tw;
          u.last_change_time = s.lastChangeTime;
          u.last_change_reason = s.lastChangeReason;
          u.min_change_time = o;
          l.warn('store_bad_state', u);
        }
        return r;
      }
    };

  function q(r, s) {
    var t = j.verifyNumber(r.uct2);
    if (!t || typeof t !== 'number') {
      l.warn('bad_cookie_version', r);
      return null;
    }
    if (t < s.lastChangeTime || t < o) return null;
    return t;
  }
  e.exports = p;
}, null);
__d("ChatTabModel", ["Arbiter", "ArbiterMixin", "ChatBehavior", "ChatDispatcher", "ChatConfig", "ChatCookieInterface", "ChatTabActions", "InitialServerTime", "LogHistory", "JSLogger", "MercuryAssert", "MercuryLocalIDs", "PresenceState", "PresenceUtil", "areJSONRepresentationsEqual", "copyProperties", "MercuryServerRequests", "MercuryThreads", "MercuryTimestampTracker"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
  var w = b('MercuryServerRequests').get(),
    x = b('MercuryThreads').get(),
    y = b('MercuryTimestampTracker').get(),
    z = [],
    aa = null,
    ba = null,
    ca = null,
    da = n.serverTime,
    ea = k.get('tab_max_load_age') || 3600000,
    fa = da - ea,
    ga = 0,
    ha = 20,
    ia = o.getInstance('chat_tab_model'),
    ja = false;

  function ka(hb) {
    var ib = s.verifyNumber(hb.uct2);
    if (!ib || typeof ib !== 'number') {
      ia.warn('bad_cookie_version', hb);
      return null;
    }
    if (ib < ga || ib < fa) return null;
    return ib;
  }

  function la(hb) {
    if (hb) {
      var ib = ka(hb);
      if (ib && ib !== ga) {
        var jb = {};
        jb.old_tabs = JSON.stringify(z);
        jb.old_promoted = aa;
        jb.old_time = ga;
        jb.old_reason = ca;
        jb.window_id = t.getSessionID();
        jb.cookie_tabs = hb && hb.t2 && JSON.stringify(hb.t2);
        jb.cookie_promoted = hb && hb.lm2;
        jb.cookie_time = hb && hb.uct2;
        jb.cookie_reason = hb && hb.tr;
        jb.cookie_window = hb && hb.tw;
        ga = ib;
        ca = 'load';
        var kb = ma(hb.t2, hb.lm2 || null);
        jb.load_result = kb;
        jb.new_tabs = JSON.stringify(z);
        jb.new_promoted = aa;
        jb.new_time = ga;
        jb.new_reason = ca;
        var event = 'load';
        if (!ja) event += '_init';
        ia.log(event, jb);
        return kb;
      }
    } else ia.warn('load_bad_state', hb);
    return false;
  }

  function ma(hb, ib) {
    if (na(hb, ib)) {
      var jb = z.filter(function(mb) {
          return mb.fragile;
        }),
        kb = {};
      aa = null;
      z = hb.map(function(mb) {
        var nb = {
          id: mb.i,
          server_id: mb.si
        };
        if (nb.id == ib) aa = nb.id;
        if (mb.r) nb.raised = true;
        kb[nb.id] = nb;
        return nb;
      });
      z = z.filter(function(mb) {
        return mb != null;
      });
      if (ba)
        for (var lb in ba)
          if (!kb[lb] || !kb[lb].raised) delete ba[lb];
      jb = jb.filter(function(mb) {
        return !kb[mb.id];
      });
      z = z.concat(jb);
      ra();
      return true;
    }
    return false;
  }

  function na(hb, ib) {
    if (ib != aa) return true;
    var jb = z.filter(function(mb) {
      return !mb.fragile;
    });
    if (hb.length != jb.length) return true;
    for (var kb = 0, lb = hb.length; kb < lb; kb++)
      if (!u(hb[kb], jb[kb])) return true;
    return false;
  }

  function oa(hb, ib, jb) {
    var kb = la(s.get());
    if (ib === (void 0) || ib > ga) {
      if (hb()) {
        kb = true;
        ca = jb || null;
        qa(ib);
      }
    } else ia.error('rejected', {
      change_time: ib,
      state_time: ga
    });
    kb && pa();
  }

  function pa() {
    if (ja) fb.inform('chat/tabs-changed', fb.get());
  }

  function qa(hb) {
    if (hb === (void 0)) hb = Math.max(y.getLastUserMessageTimestamp() || 1, ga + 1);
    ga = hb;
    s.doSync();
  }

  function ra(hb) {
    var ib = z.length - ha;
    if (ib > 0) z = z.filter(function(jb) {
      return jb.raised || jb.id == hb || ib-- <= 0;
    });
    if (ib > 0) z = z.filter(function(jb) {
      return jb.id == aa || jb.id == hb || ib-- <= 0;
    });
  }

  function sa(hb) {
    for (var ib = 0; ib < z.length; ib++)
      if (z[ib].id == hb) return ib;
    return -1;
  }

  function ta(hb, ib) {
    var jb = x.getThreadMetaNow(hb);
    if (!jb) return false;
    if (jb.is_canonical_user) {
      return va(hb, ib);
    } else {
      var kb = ua(hb);
      if (kb) w.getServerThreadID(hb, function(lb) {
        if (ya(hb, lb)) {
          qa();
          pa();
        }
      });
      return kb;
    }
  }

  function ua(hb) {
    if (sa(hb) === -1) {
      z.push({
        id: hb,
        fragile: true
      });
      ia.log('open_fragile_tab', {
        tabs: JSON.stringify(z),
        opened: hb,
        window_id: t.getSessionID()
      });
      return true;
    }
    return false;
  }

  function va(hb, ib) {
    var jb = sa(hb);
    if (jb != -1)
      if (z[jb].fragile) {
        z.splice(jb, 1);
      } else {
        ib && (z[jb].signatureID = ib);
        return true;
      }
    for (var kb = 0; kb <= z.length; kb++)
      if (kb == z.length || z[kb].fragile) {
        z.splice(kb, 0, {
          id: hb,
          signatureID: ib
        });
        ra(hb);
        ia.log('open_tab', {
          tabs: JSON.stringify(z),
          opened: hb,
          window_id: t.getSessionID()
        });
        return true;
      }
  }

  function wa(hb, ib, jb) {
    q.isThreadID(hb);
    var kb = false;
    if (ba && ib) {
      ba[hb] = true;
      kb = true;
    }
    oa(function() {
      if (ta(hb, jb)) kb = true;
      var lb = sa(hb);
      if (lb != -1 && !z[lb].raised) {
        z[lb].raised = true;
        kb = true;
        ia.log('raise_tab', {
          tabs: JSON.stringify(z),
          raised: hb,
          window_id: t.getSessionID()
        });
      }
      return kb;
    });
  }

  function xa(hb) {
    var ib = sa(hb);
    if (ib != -1 && (!z[ib].raised || aa !== hb)) {
      z[ib].raised = true;
      aa = hb;
      return true;
    }
    return false;
  }

  function ya(hb, ib) {
    var jb = sa(hb);
    if (jb != -1 && z[jb].fragile) {
      var kb = z[jb];
      kb.fragile = false;
      kb.server_id = ib;
      var lb = [];
      z.forEach(function(mb) {
        if (mb.id != hb) {
          if (kb && mb.fragile) {
            lb.push(kb);
            kb = null;
          }
          lb.push(mb);
        }
      });
      if (kb) lb.push(kb);
      z = lb;
      ia.log('make_permanent', {
        tabs: JSON.stringify(z),
        tab_id: hb,
        window_id: t.getSessionID()
      });
      return true;
    }
    return false;
  }

  function za(hb, ib) {
    q.isThreadID(hb);
    var jb = false;
    if (ba) {
      delete ba[hb];
      jb = true;
    }
    oa(function() {
      if (ab(hb)) jb = true;
      return jb;
    }, (void 0), ib);
  }

  function ab(hb) {
    var ib = sa(hb);
    if (hb == aa) aa = null;
    if (ib != -1) {
      z.splice(ib, 1);
      ia.log('close_tab', {
        tabs: JSON.stringify(z),
        closed: hb,
        window_id: t.getSessionID()
      });
      return true;
    }
    return false;
  }

  function bb() {
    if (z.length) {
      ia.log('close_all_tabs', {
        closed_tabs: JSON.stringify(z),
        window_id: t.getSessionID()
      });
      z = [];
      aa = null;
      if (ba) ba = {};
      qa();
      pa();
    }
  }

  function cb() {
    var hb = [];
    for (var ib = 0; ib < z.length; ib++)
      if (z[ib].fragile && !x.isNewEmptyLocalThread(z[ib].id)) {
        hb.push(z[ib]);
        z.splice(ib);
        pa();
        break;
      }
    ia.log('close_fragile_tabs', {
      tabs: JSON.stringify(z),
      fragile_closed: hb,
      window_id: t.getSessionID()
    });
  }

  function db(hb) {
    q.isThreadID(hb);
    var ib = false;
    if (ba) {
      delete ba[hb];
      ib = true;
    }
    oa(function() {
      var jb = sa(hb);
      if (jb != -1 && z[jb].raised) {
        delete z[jb].raised;
        ia.log('lower_tab', {
          tabs: JSON.stringify(z),
          lowered: hb,
          window_id: t.getSessionID()
        });
        ib = true;
      }
      return ib;
    });
  }

  function eb() {
    if (ba) {
      oa(function() {
        var hb = false;
        z.forEach(function(ib) {
          if (ib.raised != ba[ib.id]) {
            hb = true;
            if (ba[ib.id]) {
              ib.raised = true;
            } else delete ib.raised;
          }
        });
        return hb;
      });
      ia.log('persist_local_raise', {
        tabs: JSON.stringify(z),
        window_id: t.getSessionID()
      });
    }
  }
  s.registerStateStorer(function(hb) {
    return l.store(hb, {
      tabs: z,
      promotedTab: aa,
      lastChangeTime: ga,
      lastChangeReason: ca
    });
  });
  s.registerStateLoader(function(hb) {
    if (la(hb)) pa();
  });

  function fb() {}
  v(fb, h, {
    isTabPromoted: function(hb) {
      if (hb) return hb == aa;
      return false;
    },
    indexOf: function(hb) {
      return sa(hb);
    },
    getTab: function(hb) {
      q.isThreadID(hb);
      var ib = this.indexOf(hb);
      if (ib > -1) {
        var jb = z[ib];
        return v({}, jb);
      }
      return null;
    },
    getEmptyTab: function() {
      var hb;
      for (var ib = 0; ib < z.length; ib++) {
        hb = z[ib].id;
        if (x.isNewEmptyLocalThread(hb)) return hb;
      }
      hb = r.generateThreadID();
      x.createNewLocalThread(hb, []);
      return hb;
    },
    get: function() {
      var hb = z.map(function(ib) {
        var jb = v({}, ib);
        delete jb.fragile;
        if (ba) jb.raised = ba[jb.id];
        return jb;
      });
      return {
        tabs: hb,
        promoted: aa
      };
    },
    openFragileTab: function(hb) {
      q.isThreadID(hb);
      if (ua(hb)) pa();
    },
    openTab: function(hb) {
      q.isThreadID(hb);
      oa(ta.bind(null, hb));
    },
    raiseAndPromoteTab: function(hb, ib, jb, kb, lb) {
      q.isThreadID(hb);
      var mb = false;
      if (ba && ib) {
        ba[hb] = true;
        mb = true;
      }
      oa(function() {
        if (ta(hb, jb)) mb = true;
        if (xa(hb)) {
          mb = true;
          ia.log('raise_and_promote_tab', {
            tabs: JSON.stringify(z),
            promoted: hb,
            window_id: t.getSessionID()
          });
        }
        return mb;
      }, kb, lb);
    },
    promoteThreadInPlaceOfThread: function(hb, ib, jb, kb) {
      q.isThreadID(hb);
      q.isThreadID(ib);
      oa(function() {
        var lb = sa(hb),
          mb = sa(ib);
        if (kb) {
          aa = hb;
        } else if (aa === ib) return true;
        var nb = z[lb];
        if (jb) {
          q.isThreadID(jb);
          var ob = sa(jb),
            pb = z[mb];
          z[mb] = nb;
          z.splice(lb, 1);
          z.splice(ob, 0, pb);
        } else {
          z[lb] = z[mb];
          z[mb] = nb;
        }
        return true;
      });
    }
  });
  g.subscribe(p.DUMP_EVENT, function(hb, ib) {
    ib.chat_tabs = {
      promoted: aa,
      tabs: z.map(function(jb) {
        return v({}, jb);
      }),
      time: ga,
      max_load_age: ea
    };
  });

  function gb() {
    var hb = i.ignoresRemoteTabRaise();
    if (hb && !ba) {
      ia.log('start_ignore_remote_raise');
      ba = {};
      pa();
    } else if (!hb && ba) {
      ia.log('stop_ignore_remote_raise');
      ba = null;
      pa();
    }
  }
  j.register(function(hb) {
    switch (hb.actionType) {
      case m.Types.CLOSE_TAB:
        za(hb.threadID, hb.reason);
        break;
      case m.Types.CLOSE_ALL_TABS:
        bb();
        break;
      case m.Types.CLOSE_FRAGILE_TABS:
        cb();
        break;
      case m.Types.LOWER_TAB:
        db(hb.threadID);
        break;
      case m.Types.PERSIST_LOCAL_STATE:
        eb();
        break;
      case m.Types.PROMOTE_TAB:
        q.isThreadID(hb.threadID);
        oa(xa.bind(null, hb.threadID));
        break;
      case m.Types.RAISE_TAB:
        wa(hb.threadID, hb.userAction, hb.signatureID);
        break;
    }
  });
  i.subscribe(i.ON_CHANGED, gb);
  gb();
  la(s.getInitial(), true);
  if (ga === 0) ga = da - 600000;
  ja = true;
  e.exports = fb;
}, null);
__d("TabsViewport", ["Arbiter", "ArbiterMixin", "ChatTabModel", "Dock", "DOM", "DOMDimensions", "Event", "Parent", "Vector", "ViewportBounds", "areJSONRepresentationsEqual", "copyProperties", "csx", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
  var u = 175,
    v = 269,
    w = 0;

  function x() {
    return u;
  }

  function y() {
    return v;
  }

  function z(aa) {
    this._root = aa;
    var ba = this._recalculateWidth.bind(this);
    m.listen(window, 'resize', ba);
    j.subscribe('resize', ba);
    g.subscribeOnce('sidebar/initialized', ba, g.SUBSCRIBE_NEW);
    i.subscribe('chat/tabs-changed', t(this._recalculateTabs, this, true));
    this._recalculateWidth();
    this._initialized = true;
  }
  r(z.prototype, h, {
    _root: null,
    _initialized: false,
    _availableWidth: 0,
    _maxShown: 1,
    _viewState: null,
    _recalculateWidth: function() {
      var aa = z._getAvailableDockWidth(this._root),
        ba = Math.max(1, Math.floor(aa / y())),
        ca = ba != this._maxShown;
      if (!this._viewState || ca || aa <= this._viewState.usedWidth || aa > this._viewState.widthToShowNext) {
        this._availableWidth = aa;
        this._maxShown = ba;
        this._viewState = null;
        this._recalculateTabs(ca);
      }
    },
    _onTabsChanged: function() {
      if (this._initialized) {
        this.inform('tabs-changed');
        this.inform('max-to-show-changed', this._maxShown);
        this.inform('max-to-show-change-completed');
      }
    },
    _recalculateTabs: function(aa) {
      var ba = z._getTabsToShow(i.get(), this._availableWidth);
      if (aa || !q(this._viewState, ba)) {
        this._viewState = ba;
        this._onTabsChanged();
      }
    },
    getMaxTabsToShow: function() {
      return this._maxShown;
    },
    checkWidth: function() {
      this._recalculateWidth();
    },
    hasRoomForRaisedTab: function() {
      return this._availableWidth - this._viewState.usedWidth > y();
    },
    getTabsToShow: function() {
      return JSON.parse(JSON.stringify(this._viewState.tabsToShow));
    },
    getShowingTabsOrder: function() {
      var aa = i.get(),
        ba = this._viewState.tabsToShow;
      return aa.tabs.filter(function(ca) {
        return ba[ca.id];
      });
    },
    getRightmostHiddenTab: function() {
      var aa = i.get(),
        ba = this._viewState.tabsToShow,
        ca = aa.tabs.filter(function(ea) {
          return !ba[ea.id];
        }),
        da = ca.shift();
      return da ? da.id : null;
    },
    getLeftmostVisibleTab: function() {
      var aa = this.getShowingTabsOrder(),
        ba = aa.pop();
      return ba ? ba.id : null;
    },
    getRaisedVisibleTabs: function() {
      var aa = [],
        ba = this.getShowingTabsOrder(),
        ca = ba.length;
      for (var da = 0; da < ca; da++)
        if (i.getTab(ba[da].id).raised) aa.push(ba[da].id);
      return aa;
    },
    shouldPromoteOnRaise: function(aa) {
      if (!this._viewState.tabsToShow[aa]) return true;
      if (this._viewState.nextToHide != aa) return false;
      var ba = i.getTab(aa),
        ca = ba && ba.raised;
      return !ca && (this._availableWidth - this._viewState.usedWidth < y() - x());
    }
  });
  r(z, {
    _getAvailableDockWidth: function(aa) {
      var ba = l.getViewportWithoutScrollbarDimensions().width;
      ba -= p.getLeft() + p.getRight();
      ba -= 50;
      var ca = n.byClass(aa, 'fbDock'),
        da = k.find(ca, "._56ox"),
        ea = o.getElementDimensions(da).x;
      ba -= ea;
      var fa = k.scry(ca, "._56oy");
      ea += o.getElementDimensions(fa.pop()).x;
      var ga = o.getElementDimensions(ca),
        ha = ga.x - ea;
      if (ha > w) w = ha;
      ba -= w;
      ba -= 15;
      return Math.max(ba, 0);
    },
    _getTabsToShow: function(aa, ba) {
      ba = Math.max(ba, y() + 1);

      function ca(sa, ta) {
        return (sa.raised || !ta) ? y() : x();
      }
      var da = JSON.parse(JSON.stringify(aa.tabs)),
        ea = -1,
        fa = null;
      if (aa.promoted) da.forEach(function(sa, ta) {
        if (sa.id === aa.promoted) {
          ea = ta;
          fa = sa;
        }
      });
      var ga = 0,
        ha = false,
        ia = 0,
        ja = !fa;
      da.forEach(function(sa, ta) {
        var ua = ca(sa, ha);
        ha = ha || !sa.raised;
        sa.leftmostOffset = ga + ua;
        ga += ua;
        if (sa.leftmostOffset < ba) ia++;
        ja |= ta == ea;
        sa.alreadyPlacedPromoted = ja;
      });

      function ka(sa, ta, ua) {
        var va = {};
        for (var wa = 0; wa < ta; wa++) {
          var xa = sa[wa];
          if (!xa.alreadyPlacedPromoted && wa == ta - 1) {
            va[ua] = true;
          } else va[xa.id] = true;
        }
        return va;
      }
      var la = ka(da, ia, aa.promoted),
        ma = ka(da, ia - 1, aa.promoted),
        na = null;
      for (var oa in la)
        if (!ma[oa]) na = oa;
      var pa = da[ia - 1],
        qa = pa ? pa.leftmostOffset : 0,
        ra = Infinity;
      if (ia < da.length) ra = da[ia].leftmostOffset;
      return {
        nextToHide: na,
        tabsToShow: la,
        usedWidth: qa,
        widthToShowNext: ra
      };
    }
  });
  e.exports = z;
}, null);
__d("ChatTabPresence", ["AvailableList", "ChatTabModel", "MercuryIDs"], function(a, b, c, d, e, f, g, h, i) {
  var j = {};

  function k(l) {
    var m = i.getUserIDFromThreadID(l);
    if (m) g.updateForID(m);
  }
  h.subscribe('chat/tabs-changed', function(event, l) {
    l.tabs.forEach(function(m) {
      if (m.raised && !j[m.id]) k(m.id);
    });
    j = {};
    l.tabs.forEach(function(m) {
      if (m.raised) j[m.id] = true;
    });
  });
  e.exports = {};
}, null);
__d("ChatMentionsNotifications", ["fbt", "CurrentUser", "MercuryParticipants"], function(a, b, c, d, e, f, g, h, i) {
  var j = {
    notifyIfMessageToMe: function(k) {
      var l = 'fbid:' + h.getID(),
        m = k.body;
      i.get(l, function(n) {
        var o = new RegExp(n.short_name, "i");
        if (o.test(m)) j._notify(k);
      });
    },
    _notify: function(k) {
      var l = 48,
        m = k.body;
      if (m.length > l) m = m.substr(0, l - 3) + "...";
      new Notification("\"You were tagged in a message!\"", {
        body: m,
        icon: "http://facebook.com//images/icons-large/fb-xl.png"
      });
    }
  };
  e.exports = j;
}, null);
__d("ChatAddToThreadButton.react", ["Link.react", "ReactComponentWithPureRenderMixin", "React", "TrackingNodes", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = i.createClass({
    displayName: "ChatAddToThreadButton",
    mixins: [h],
    propTypes: {
      isFBAtWork: i.PropTypes.bool,
      onClick: i.PropTypes.func,
      shown: i.PropTypes.bool
    },
    render: function() {
      var n = this.props.isFBAtWork ? "Add more co-workers to chat" : "Add more friends to chat",
        o = j.getTrackingInfo(j.types.ADD_TO_THREAD);
      return (i.createElement(g, {
        "aria-label": n,
        className: (("addToThread") + (' ' + "button") + (!this.props.shown ? ' ' + "hidden_elem" : '')),
        "data-ft": o,
        "data-hover": "tooltip",
        "data-tooltip-alignv": "top",
        onClick: this.props.onClick
      }));
    }
  });
  e.exports = m;
}, null);
__d("ChatArchiveWarning.react", ["Image.react", "ReactComponentWithPureRenderMixin", "React", "cx", "ix"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = i.createClass({
    displayName: "ChatArchiveWarning",
    mixins: [h],
    propTypes: {
      isFBAtWork: i.PropTypes.bool,
      shown: i.PropTypes.bool
    },
    render: function() {
      var m = this.props.isFBAtWork ? k('images/chat/tab/archive-grey.png') : k('images/chat/tab/archive.png');
      return (i.createElement(g, {
        src: m,
        className: (("titanArchiveWarning") + (' ' + "button") + (!this.props.shown ? ' ' + "hidden_elem" : '')),
        "data-hover": "tooltip",
        "data-tooltip-alignh": "center",
        "aria-label": "All employee-to-employee conversations will be archived"
      }));
    }
  });
  e.exports = l;
}, null);
__d("ChatCloseButton.react", ["Link.react", "ReactComponentWithPureRenderMixin", "React", "TrackingNodes", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
  "use strict";
  var l = i.createClass({
    displayName: "ChatCloseButton",
    mixins: [h],
    propTypes: {
      onClick: i.PropTypes.func,
      onKeyUp: i.PropTypes.func,
      onMouseDown: i.PropTypes.func,
      active: i.PropTypes.bool
    },
    getDefaultProps: function() {
      return {
        active: false
      };
    },
    render: function() {
      var m = j.getTrackingInfo(j.types.CLOSE_BUTTON),
        n = "Press Esc to close",
        o = "Close tab";
      return (i.createElement(g, {
        "aria-label": this.props.active ? n : o,
        className: "close button",
        "data-ft": m,
        "data-hover": "tooltip",
        "data-tooltip-position": "above",
        onClick: this.props.onClick,
        onKeyUp: this.props.onKeyUp,
        onMouseDown: this.props.onMouseDown
      }));
    }
  });
  e.exports = l;
}, null);
__d("VideoCallTourDialog", ["ArbiterMixin", "LegacyContextualDialog", "CSS", "MercuryIDs", "ChatTabTemplates", "VideoCallCore", "VideoCallingTour", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  function o() {
    this._dialog = null;
  }
  n(o.prototype, g);
  n(o.prototype, {
    render: function(p, q) {
      var r = j.getUserIDFromThreadID(q);
      if (!r || !l.availableForCall(r)) return;
      var s = k[':fb:mercury:call:tour'].build();
      this._dialog = new h();
      this._dialog.init(s.getRoot()).setWidth(250).setAlignH('center').setContext(p).show();
      i.addClass(this._dialog.getRoot(), 'uiContextualDialogWithFooterArrowBottom');
      i.addClass(p, 'video_call_tour');
      this.inform('chat/dialog-rendered', {
        dialog: this,
        thread_id: q
      });
      m.inform('videocallingtour/end');
    },
    updatePosition: function() {
      if (this._dialog && this._dialog.isShown()) this._dialog.updatePosition();
    },
    hide: function() {
      if (this._dialog && this._dialog.isShown()) {
        this._dialog.hide();
        this._dialog = null;
      }
    }
  });
  e.exports = o;
}, null);
__d("ChatContextualDialogController", ["Event", "ArbiterMixin", "ChatTabModel", "VideoCallingTour", "VideoCallTourDialog", "copyProperties", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = 60000,
    o = false,
    p = function(w, x) {
      this._videoCallTour = new k();
      this._threadID = w;
      this._tabMainElement = x;
      this._openDialog = null;
      this._subscriptionTokens = [];
      this._scrollListener = null;
      this._timeout = null;
    };

  function q(w, event, x) {
    if (w._openDialog) w._openDialog.updatePosition();
  }

  function r(w) {
    if (w._openDialog) w._openDialog.updatePosition();
  }

  function s(w) {
    if (w._openDialog) {
      w._openDialog.hide();
      w._openDialog = null;
    }
    if (w._timeout) {
      clearTimeout(w._timeout);
      w._timeout = null;
    }
    while (w._subscriptionTokens.length) w._subscriptionTokens.pop().unsubscribe();
    if (w._scrollListener) {
      w._scrollListener.remove();
      w._scrollListener = null;
    }
  }

  function t(w, event, x) {
    if (x.thread_id === w._threadID) {
      w._openDialog = x.dialog;
      v(w);
      w._timeout = m(w.destroy.bind(w, w._threadID), n);
      w._scrollListener = g.listen(window, 'scroll', r.bind(null, w));
    }
  }

  function u(w, x) {
    if (!w._openDialog) {
      w._subscriptionTokens.push(x.subscribe('chat/dialog-rendered', t.bind(null, w)));
      x.render(w._tabMainElement, w._threadID);
    }
  }

  function v(w) {
    w._subscriptionTokens.push(i.subscribe('chat/tabs-changed', q.bind(null, w)), p.subscribe('dialog/close-all', s.bind(null, w)));
  }
  l(p, h);
  l(p.prototype, {
    destroy: function() {
      s(this);
    },
    tabFocused: function() {
      if (o) {
        u(this, this._videoCallTour);
        return;
      }
    },
    tabNotActive: function() {
      s(this);
    },
    hideVideoCallouts: function() {
      s(this);
    }
  });
  j.subscribe('videocallingtour/start', function() {
    o = true;
    p.inform('dialog/close-all');
  });
  j.subscribe('videocallingtour/end', function() {
    o = false;
  });
  e.exports = p;
}, null);
__d("getImageSize", ["DataViewPolyfill"], function(a, b, c, d, e, f, g) {
  var h = a.DataView || g;

  function i(m) {
    return {
      width: m.getUint16(6, true),
      height: m.getUint16(8, true)
    };
  }

  function j(m) {
    return {
      width: m.getUint32(16, false),
      height: m.getUint32(20, false)
    };
  }

  function k(m) {
    var n = m.byteLength,
      o = 2;
    while (o < n) {
      var p = m.getUint16(o, false);
      o += 2;
      if (p == 65472 || p == 65474) {
        return {
          width: m.getUint16(o + 5, false),
          height: m.getUint16(o + 3, false)
        };
      } else o += m.getUint16(o, false);
    }
    return null;
  }

  function l(m) {
    var n = new h(m);
    if (n.getUint8(0) == 255 && n.getUint8(1) == 216) return k(n);
    if (n.getUint8(0) == 71 && n.getUint8(1) == 73 && n.getUint8(2) == 70) return i(n);
    if (n.getUint8(0) == 137 && n.getUint8(1) == 80 && n.getUint8(2) == 78 && n.getUint8(3) == 71) return j(n);
    return null;
  }
  e.exports = l;
  l.gif = i;
  l.png = j;
  l.jpeg = k;
}, null);
__d("ChatAutoSendPhotoUploader", ["ArbiterMixin", "AsyncUploadRequest", "DOM", "Event", "FileForm", "FileFormResetOnSubmit", "FileInput", "FormSubmitOnChange", "JpegResizer", "MercuryAttachmentType", "PhotosMimeType", "PhotosUploadID", "SubscriptionsHandler", "arrayContains", "csx", "getImageSize", "getObjectValues", "invariant", "isEmpty", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
  "use strict";

  function aa() {
    return 'upload_' + r.getNewID();
  }
  var ba = z(g);
  for (var ca in ba)
    if (ba.hasOwnProperty(ca)) ea[ca] = ba[ca];
  var da = ba === null ? null : ba.prototype;
  ea.prototype = Object.create(da);
  ea.prototype.constructor = ea;
  ea.__superConstructor__ = ba;

  function ea(fa, ga, ha) {
    this.$ChatAutoSendPhotoUploader0 = ha;
    this.$ChatAutoSendPhotoUploader1 = ga;
    this.$ChatAutoSendPhotoUploader2 = new s();
    this.$ChatAutoSendPhotoUploader3 = {};
    this.$ChatAutoSendPhotoUploader4 = {};
    this.$ChatAutoSendPhotoUploader5 = fa.getAttribute('action');
    this.$ChatAutoSendPhotoUploader6 = new k(fa, [n, l]);
    this.$ChatAutoSendPhotoUploader6.setAllowCrossOrigin(true);
    this.$ChatAutoSendPhotoUploader6.setUploadInParallel(true);
    var ia = i.find(fa, "._4q60"),
      ja = i.find(ia, "._4q61");
    new m(ia, ja, ga);
    this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.$ChatAutoSendPhotoUploader6.subscribe('submit', this.$ChatAutoSendPhotoUploader7.bind(this)), this.$ChatAutoSendPhotoUploader6.subscribe('success', this.$ChatAutoSendPhotoUploader8.bind(this)), this.$ChatAutoSendPhotoUploader6.subscribe('failure', this.$ChatAutoSendPhotoUploader9.bind(this)), this.$ChatAutoSendPhotoUploader6.subscribe('progress', this.$ChatAutoSendPhotoUploadera.bind(this)), j.listen(ja, 'click', function() {
      if (this.$ChatAutoSendPhotoUploaderb)
        if (o.prepareResource) o.prepareResource();
      this.inform('open');
    }.bind(this)));
    this.$ChatAutoSendPhotoUploaderb = o.isSupported();
    if (this.$ChatAutoSendPhotoUploaderb) this.$ChatAutoSendPhotoUploader6.setPreprocessHandler(this.$ChatAutoSendPhotoUploaderc.bind(this));
  }
  ea.prototype.isUploading = function() {
    return !y(this.$ChatAutoSendPhotoUploader3);
  };
  ea.prototype.destroy = function() {
    this.$ChatAutoSendPhotoUploader2.release();
    this.$ChatAutoSendPhotoUploader6.destroy();
    this.$ChatAutoSendPhotoUploader3 = {};
    this.$ChatAutoSendPhotoUploader4 = {};
  };
  ea.prototype.$ChatAutoSendPhotoUploaderd = function(fa, ga) {
    var ha = this.$ChatAutoSendPhotoUploadere(fa);
    if (ga) {
      ha.preview_width = ga.width;
      ha.preview_height = ga.height;
    }
    return ha;
  };
  ea.prototype.$ChatAutoSendPhotoUploadere = function(fa) {
    var ga = {
      upload_id: fa,
      on_progress: function(ha) {
        this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('progress', ha));
      }.bind(this),
      on_resizing_progress: function(ha) {
        this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('resize_progress', ha));
      }.bind(this),
      on_success: function(ha) {
        this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('success', ha));
      }.bind(this),
      upload_canceled: this.$ChatAutoSendPhotoUploaderf.bind(this),
      attach_type: p.PHOTO,
      preview_uploading: true
    };
    return ga;
  };
  ea.prototype.$ChatAutoSendPhotoUploaderc = function(fa, ga) {
    var ha = fa.getFile();
    if (!q(ha.type).isJpeg()) return ga(fa);
    o.getSingleton().resizeBlob(ha, function(ia, ja, ka) {
      if (ja) fa.setFile(ja);
      ga(fa);
    }, this.$ChatAutoSendPhotoUploaderg.bind(this, fa));
  };
  ea.prototype.$ChatAutoSendPhotoUploader7 = function() {
    var fa = aa();
    this.$ChatAutoSendPhotoUploaderh(fa, this.$ChatAutoSendPhotoUploader1.files);
  };
  ea.prototype.$ChatAutoSendPhotoUploaderh = function(fa, ga) {
    var ha = {};
    if (typeof FileReader !== 'undefined' && FileReader.prototype.readAsArrayBuffer && ga && ga.length === 1) {
      this.$ChatAutoSendPhotoUploader3[fa] = fa;
      ha[fa] = ga[0];
      var ia = new FileReader();
      ia.onload = function() {
        this.inform('submit', {
          upload_id: fa,
          preview_attachments: [this.$ChatAutoSendPhotoUploaderd(fa, v(ia.result))]
        });
      }.bind(this);
      ia.onerror = function() {
        this.inform('submit', {
          upload_id: fa,
          preview_attachments: [this.$ChatAutoSendPhotoUploadere(fa)]
        });
      }.bind(this);
      ia.readAsArrayBuffer(ga[0]);
    } else {
      var ja = [];
      if (!ga) {
        this.$ChatAutoSendPhotoUploader3[fa] = fa;
        this.$ChatAutoSendPhotoUploader0.value = fa;
        ja.push(this.$ChatAutoSendPhotoUploadere(fa));
      } else
        for (var ka = 0; ka < ga.length; ++ka) {
          var la = aa();
          ha[la] = ga[ka];
          this.$ChatAutoSendPhotoUploader3[la] = fa;
          ja.push(this.$ChatAutoSendPhotoUploadere(la));
        }
      this.inform('submit', {
        upload_id: fa,
        preview_attachments: ja
      });
    }
    if (Object.keys(ha).length > 0) this.$ChatAutoSendPhotoUploader6.setFiles(ha);
  };
  ea.prototype.$ChatAutoSendPhotoUploader8 = function(event, fa) {
    var ga = this.$ChatAutoSendPhotoUploaderi(fa);
    if (this.$ChatAutoSendPhotoUploader3[ga]) {
      var ha = this.$ChatAutoSendPhotoUploader3[ga];
      delete this.$ChatAutoSendPhotoUploader3[ga];
      var ia = fa.response.getPayload();
      if (!this.$ChatAutoSendPhotoUploader4[ha]) this.$ChatAutoSendPhotoUploader4[ha] = [];
      this.$ChatAutoSendPhotoUploader4[ha].push({
        id: ga,
        image_id: ia.metadata[0].image_id,
        file_id: ia.metadata[0].file_id,
        gif_id: ia.metadata[0].gif_id
      });
      this.inform('success', {
        upload_id: ga
      });
      if (!this.$ChatAutoSendPhotoUploaderj(ha)) this.$ChatAutoSendPhotoUploaderk(ha);
    }
  };
  ea.prototype.$ChatAutoSendPhotoUploaderk = function(fa) {
    x(!this.$ChatAutoSendPhotoUploaderj(fa));
    this.$ChatAutoSendPhotoUploader4[fa].sort(function(ga, ha) {
      return ga.id < ha.id ? -1 : 1;
    });
    this.inform('all-uploads-completed', {
      upload_id: fa,
      image_ids: this.$ChatAutoSendPhotoUploader4[fa].map(function(ga) {
        return ga.image_id;
      }),
      file_ids: this.$ChatAutoSendPhotoUploader4[fa].map(function(ga) {
        return ga.file_id;
      }),
      gif_ids: this.$ChatAutoSendPhotoUploader4[fa].map(function(ga) {
        return ga.gif_id;
      })
    });
    delete this.$ChatAutoSendPhotoUploader4[fa];
  };
  ea.prototype.$ChatAutoSendPhotoUploadera = function(event, fa) {
    this.inform('progress', {
      upload_id: fa.upload.getName(),
      event: fa.event
    });
  };
  ea.prototype.$ChatAutoSendPhotoUploaderg = function(fa, event) {
    this.inform('resize_progress', {
      upload_id: fa.getName(),
      event: event
    });
  };
  ea.prototype.$ChatAutoSendPhotoUploaderj = function(fa) {
    return t(w(this.$ChatAutoSendPhotoUploader3), fa);
  };
  ea.prototype.$ChatAutoSendPhotoUploader9 = function(event, fa) {
    var ga = this.$ChatAutoSendPhotoUploaderi(fa);
    this.$ChatAutoSendPhotoUploaderl(ga, 'last-upload-failed');
    return false;
  };
  ea.prototype.$ChatAutoSendPhotoUploaderf = function(fa) {
    this.$ChatAutoSendPhotoUploaderl(fa, 'last-upload-canceled');
  };
  ea.prototype.$ChatAutoSendPhotoUploaderl = function(fa, ga) {
    if (!this.$ChatAutoSendPhotoUploader3[fa]) return;
    var ha = this.$ChatAutoSendPhotoUploader3[fa];
    delete this.$ChatAutoSendPhotoUploader3[fa];
    if (!this.$ChatAutoSendPhotoUploaderj(ha))
      if (this.$ChatAutoSendPhotoUploader4[ha]) {
        this.$ChatAutoSendPhotoUploaderk(ha);
      } else this.inform(ga, {
        upload_id: ha
      });
  };
  ea.prototype.$ChatAutoSendPhotoUploaderi = function(fa) {
    if (fa.upload) {
      return fa.upload.getName();
    } else return fa.response.getPayload().uploadID;
  };
  ea.prototype.uploadFile = function(fa) {
    var ga = aa(),
      ha = {};
    ha[ga] = fa;
    var ia = new h(this.$ChatAutoSendPhotoUploader5).setAllowCrossOrigin(true).setRelativeTo(this.$ChatAutoSendPhotoUploader6.getRoot()).setFiles(ha);
    this.$ChatAutoSendPhotoUploader2.addSubscriptions(ia.subscribe('success', function(event, ja) {
      this.$ChatAutoSendPhotoUploader8(event, {
        upload: ja,
        response: ja.getResponse()
      });
    }.bind(this)), ia.subscribe('failure', this.$ChatAutoSendPhotoUploader9.bind(this)));
    ia.send();
    this.$ChatAutoSendPhotoUploaderh(ga, [fa]);
  };
  e.exports = ea;
}, null);
__d("ChatPhotoUploader.react", ["ChatAutoSendPhotoUploader", "Image.react", "InlineBlock.react", "Link.react", "MercuryConfig", "React", "SubscriptionsHandler", "cx", "emptyFunction", "fbt", "ix"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  'use strict';
  var r = l.createClass({
    displayName: "ChatPhotoUploader",
    propTypes: {
      actionURI: l.PropTypes.string,
      imageClassName: l.PropTypes.string,
      imagesOnly: l.PropTypes.bool,
      onSubmit: l.PropTypes.func,
      onAllUploadsComplete: l.PropTypes.func,
      onLastUploadFail: l.PropTypes.func,
      onLastUploadCancel: l.PropTypes.func
    },
    getDefaultProps: function() {
      return {
        actionURI: k.upload_url,
        imageClassName: "_509w",
        imagesOnly: true,
        onSubmit: o,
        onAllUploadsComplete: o,
        onLastUploadFail: o,
        onLastUploadCancel: o
      };
    },
    componentDidMount: function() {
      this._uploader = new g(this.refs.form.getDOMNode(), this.refs.input.getDOMNode(), this.refs.attachID.getDOMNode());
      this._subscriptions = new m();
      this._subscriptions.addSubscriptions(this._uploader.subscribe('submit', this._handleSubmit), this._uploader.subscribe('all-uploads-completed', this._handleAllUploadsCompleted), this._uploader.subscribe('last-upload-failed', this._handleLastUploadFailed), this._uploader.subscribe('last-upload-canceled', this._handleLastUploadCanceled));
    },
    shouldComponentUpdate: function(s, t) {
      return s.actionURI != this.props.actionURI;
    },
    componentWillUnmount: function() {
      this._subscriptions && this._subscriptions.release();
      this._uploader && this._uploader.destroy();
    },
    render: function() {
      return (l.createElement("form", {
        action: this.props.actionURI,
        method: "post",
        ref: "form"
      }, l.createElement("input", {
        type: "hidden",
        name: "attach_id",
        ref: "attachID"
      }), l.createElement("input", {
        type: "hidden",
        name: "images_only",
        value: this.props.imagesOnly
      }), l.createElement(i, {
        className: "_m _4q60 _3rzn"
      }, l.createElement(j, {
        className: "_4q61 _509v"
      }, l.createElement(h, {
        className: this.props.imageClassName,
        src: q('/images/chat/chat_camera_icon.png'),
        alt: "Camera"
      })), l.createElement("input", {
        type: "file",
        className: "_n",
        name: "attachment[]",
        multiple: "true",
        accept: this.props.imagesOnly ? 'image/*' : '*',
        ref: "input"
      }))));
    },
    _handleSubmit: function(s, t) {
      this.props.onSubmit(s, t);
    },
    _handleAllUploadsCompleted: function(s, t) {
      this.props.onAllUploadsComplete(s, t);
    },
    _handleLastUploadFailed: function(s, t) {
      this.props.onLastUploadFail(s, t);
    },
    _handleLastUploadCanceled: function(s, t) {
      this.props.onLastUploadCancel(s, t);
    },
    isUploading: function() {
      return this._uploader && this._uploader.isUploading();
    },
    uploadFile: function(s) {
      this._uploader.uploadFile(s);
    }
  });
  e.exports = r;
}, null);
__d("ChatPrivacyActionController", ["ChatVisibility", "JSLogger", "PresencePrivacy", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = function(l, m) {
    this._userID = l;
    this._logger = h.create('blackbird');
    this._getState = function() {
      if (g.isOnline()) return i.allows(this._userID) ? k.NORMAL : k.BLOCKED;
      return k.OFFLINE;
    };
    this._togglePrivacy = function() {
      var n = this._getState();
      switch (this._getState()) {
        case k.OFFLINE:
          if (g.isOnline()) {
            this._logger.error('tabs_already_online');
            break;
          }
          this._logger.log('tabs_go_online', {
            tab_id: this._userID
          });
          g.goOnline(function() {
            if (!i.allows(this._userID)) {
              if (this._getState() !== k.BLOCKED) this._logger.error('privacy_action_controller_blocked_inconsistency');
              this._togglePrivacy();
            }
          }.bind(this));
          break;
        case k.BLOCKED:
          i.allow(this._userID);
          this._logger.log('tabs_unblock', {
            tab_id: this._userID
          });
          break;
        case k.NORMAL:
          i.disallow(this._userID);
          this._logger.log('tabs_block', {
            tab_id: this._userID
          });
          break;
      }
    };
    setTimeout(function() {
      var n = function() {
        m && m(this._getState());
      }.bind(this);
      n();
      this._subscribeToken = i.subscribe('privacy-changed', n);
    }.bind(this), 0);
  };
  k.OFFLINE = 'offline';
  k.BLOCKED = 'blocked';
  k.NORMAL = 'normal';
  j(k.prototype, {
    togglePrivacy: function() {
      this._logger.log('gear_menu_toggle_privacy', {
        tab_id: this._userID
      });
      this._togglePrivacy();
    },
    destroy: function() {
      this._subscribeToken && i.unsubscribe(this._subscribeToken);
    }
  });
  e.exports = k;
}, null);
__d("ChatShareLinkUploader", ["AsyncRequest", "CSS", "DOM", "URLScraper", "MercuryShareLinkUploader", "MercuryAttachmentTemplates", "Event"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  for (var n in k)
    if (k.hasOwnProperty(n)) p[n] = k[n];
  var o = k === null ? null : k.prototype;
  p.prototype = Object.create(o);
  p.prototype.constructor = p;
  p.__superConstructor__ = k;

  function p(q, r, s, t, u) {
    "use strict";
    this.$ChatShareLinkUploader0 = q;
    this.$ChatShareLinkUploader1 = r;
    this.$ChatShareLinkUploader2 = s;
    this.$ChatShareLinkUploader3 = false;
    this.$ChatShareLinkUploader4 = null;
    this.$ChatShareLinkUploader5 = t;
    this.$ChatShareLinkUploader6 = u;
    this.$ChatShareLinkUploader7 = false;
    m.listen(r, 'keyup', function() {
      !this.getInputValue().length && this.$ChatShareLinkUploader8.enable();
    }.bind(this));
    this.$ChatShareLinkUploader8 = new j(r, t);
    this.$ChatShareLinkUploader8.subscribe('match', function(v, w) {
      this.loadShare(w && w.url);
    }.bind(this));
    this.$ChatShareLinkUploader9 = 1337;
    this.$ChatShareLinkUploadera = null;
  }
  p.prototype.getInputValue = function() {
    "use strict";
    return this.$ChatShareLinkUploader5 ? this.$ChatShareLinkUploader5() : this.$ChatShareLinkUploader1.value;
  };
  p.prototype.getAttachData = function() {
    "use strict";
    return this.loadAttachData(this.$ChatShareLinkUploader3, this.$ChatShareLinkUploader0, this.$ChatShareLinkUploader1, this.$ChatShareLinkUploader5);
  };
  p.prototype.getShareData = function() {
    "use strict";
    if (!this.$ChatShareLinkUploader3) return null;
    return this.getShareDataFromStage(this.$ChatShareLinkUploader3, this.$ChatShareLinkUploader0);
  };
  p.prototype.close = function() {
    "use strict";
    this.$ChatShareLinkUploaderb();
    this.$ChatShareLinkUploader8.disable();
    this.inform('closed');
  };
  p.prototype.clear = function() {
    "use strict";
    this.$ChatShareLinkUploaderb();
    this.$ChatShareLinkUploader8.enable();
  };
  p.prototype.$ChatShareLinkUploaderb = function() {
    "use strict";
    var q = this.$ChatShareLinkUploadera;
    delete this.$ChatShareLinkUploadera;
    if (q) {
      i.remove(q);
      this.inform('dom-updated');
    }
    this.$ChatShareLinkUploaderc();
    this.$ChatShareLinkUploader3 = false;
    this.$ChatShareLinkUploader7 = false;
    this.$ChatShareLinkUploader4 && this.$ChatShareLinkUploader4.abort();
    this.$ChatShareLinkUploader4 = null;
    this.$ChatShareLinkUploader8 && this.$ChatShareLinkUploader8.reset();
  };
  p.prototype.loadShareFromParams = function(q, r) {
    "use strict";
    this.$ChatShareLinkUploader7 = true;
    this.$ChatShareLinkUploaderd(new g().setMethod('POST').setURI('/ajax/share_params.php').setData({
      chat: true,
      share_type: q,
      share_params: r
    }));
  };
  p.prototype.loadShare = function(q, r) {
    "use strict";
    this.$ChatShareLinkUploaderd(new g().setMethod('POST').setURI('/ajax/share_scrape.php').setData({
      chat: true,
      extra_params: JSON.stringify(r),
      u: q
    }), q);
  };
  p.prototype.loadedFromFeed = function() {
    "use strict";
    return this.$ChatShareLinkUploader7;
  };
  p.prototype.$ChatShareLinkUploaderc = function() {
    "use strict";
    return (++this.$ChatShareLinkUploader9);
  };
  p.prototype.$ChatShareLinkUploadere = function() {
    "use strict";
    return this.$ChatShareLinkUploader9;
  };
  p.prototype.$ChatShareLinkUploaderd = function(q, r) {
    "use strict";
    this.$ChatShareLinkUploader4 && this.$ChatShareLinkUploader4.abort();
    var s = l[':fb:mercury:share-link-row'].build();
    if (this.$ChatShareLinkUploadera) i.remove(this.$ChatShareLinkUploadera);
    this.$ChatShareLinkUploadera = s.getRoot();
    m.listen(s.getNode('closeFileUpload'), 'click', function(event) {
      this.close();
      event.kill();
    }.bind(this));
    i.appendContent(this.$ChatShareLinkUploader0, this.$ChatShareLinkUploadera);
    h.show(this.$ChatShareLinkUploader0);
    this.inform('dom-updated');
    var t = this.$ChatShareLinkUploaderc();
    this.$ChatShareLinkUploader4 = q.setHandler(function(u) {
      return this.$ChatShareLinkUploaderf(t, u, r);
    }.bind(this));
    this.$ChatShareLinkUploader4.send();
    this.inform('link-detected');
  };
  p.prototype.$ChatShareLinkUploaderf = function(q, r, s) {
    "use strict";
    if (this.$ChatShareLinkUploadere() !== q) return;
    this.$ChatShareLinkUploader4 = null;
    i.appendContent(this.$ChatShareLinkUploadera, r.payload);
    this.$ChatShareLinkUploader2();
    this.$ChatShareLinkUploader3 = true;
    if (!this.getAttachData()) {
      this.close();
      if (s && this.getInputValue().indexOf(s) === -1) this.$ChatShareLinkUploader6(s);
      return;
    }
    h.addClass(this.$ChatShareLinkUploadera, 'done');
  };
  e.exports = p;
}, null);
__d("StickerContextualDialog.react", ["ReactAbstractContextualDialog", "ReactLayer", "cx"], function(a, b, c, d, e, f, g, h, i) {
  'use strict';
  var j = 47,
    k = h.createClass(g.createSpec({
      displayName: 'StickerXUIContextualDialog',
      theme: {
        wrapperClassName: "_53ii",
        arrowDimensions: {
          offset: j,
          length: 16
        }
      }
    }));
  k.WIDTH = {
    NORMAL: 312,
    WIDE: 400
  };
  e.exports = k;
}, null);
__d("ChatStickerButton.react", ["BanzaiODS", "React", "ReactLayeredComponentMixin", "StickerContextualDialog.react", "StickersFlyout.react", "StickerState", "cx", "emptyFunction", "fbt", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  'use strict';
  var q = 278,
    r = h.createClass({
      displayName: "ChatStickerButton",
      propTypes: {
        className: h.PropTypes.string,
        flyoutClassName: h.PropTypes.string,
        flyoutWidth: h.PropTypes.number,
        wrapperClass: h.PropTypes.func,
        onStickerSelect: h.PropTypes.func,
        onEmoticonSelect: h.PropTypes.func,
        onFlyoutShown: h.PropTypes.func,
        onFlyoutHidden: h.PropTypes.func
      },
      getInitialState: function() {
        return {
          shown: false,
          packID: l.getTrayPackID()
        };
      },
      mixins: [i],
      getDefaultProps: function() {
        return {
          flyoutWidth: q,
          onStickerSelect: n,
          onEmoticonSelect: n
        };
      },
      componentDidMount: function() {
        g.bumpEntityKey('chat.web', 'sticker_button.mounted');
        this._subscription = l.addListener(l.PACK_SELECTED, function(s) {
          return this.setState({
            packID: s
          });
        }.bind(this));
      },
      shouldComponentUpdate: function(s, t) {
        return (t.packID != this.state.packID || t.shown != this.state.shown);
      },
      componentWillUnmount: function() {
        this._subscription && this._subscription.remove();
      },
      render: function() {
        return (h.createElement("a", {
          onClick: this.showFlyout,
          onMouseDown: this._prepareForClick,
          title: "Choose a sticker or emoticon",
          ref: "link"
        }, h.createElement("span", {
          className: p(this.props.className, ((this.state.shown ? "open" : '')))
        })));
      },
      renderLayers: function() {
        var s = this.props.wrapperClass || j;
        return {
          contextualDialog: h.createElement(s, {
            alignment: this.props.flyoutAlignment,
            className: "_5e-r",
            contextRef: "link",
            onBlur: this._hideFlyout,
            position: "above",
            shown: this.state.shown,
            width: this.props.flyoutWidth
          }, h.createElement("div", null, h.createElement(k, {
            className: this.props.flyoutClassName,
            onShown: function(t) {
              return this.props.onFlyoutShown && this.props.onFlyoutShown(t);
            }.bind(this),
            onHidden: function() {
              return this.props.onFlyoutHidden && this.props.onFlyoutHidden();
            }.bind(this),
            onEscKeyDown: this._hideFlyout,
            onStickerSelect: this._handleStickerSelected,
            onEmoticonSelect: this._handleEmoticonSelected,
            packID: this.state.packID,
            shown: this.state.shown
          })))
        };
      },
      _prepareForClick: function() {
        this._clickGuard = this.state.shown;
      },
      showFlyout: function() {
        !this._clickGuard && this.setState({
          shown: true
        });
      },
      _hideFlyout: function() {
        this.setState({
          shown: false
        });
      },
      _handleStickerSelected: function(s) {
        this.props.onStickerSelect(s);
      },
      _handleEmoticonSelected: function(s) {
        this._hideFlyout();
        this.props.onEmoticonSelect(s);
      }
    });
  e.exports = r;
}, null);
__d("StickersFlyoutTriggerSelector.react", ["React", "Sticker.react", "StickerConstants", "StickerUtils", "XUIContextualDialog.react", "XUICloseButton.react", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  'use strict';
  var n = 84,
    o = g.createClass({
      displayName: "StickersFlyoutTriggerSelector",
      getDefaultProps: function() {
        return {
          stickers: []
        };
      },
      propTypes: {
        context: g.PropTypes.object.isRequired,
        stickers: g.PropTypes.array,
        onStickerSelect: g.PropTypes.func.isRequired
      },
      shouldComponentUpdate: function(p) {
        if (this.props.stickers.length !== p.stickers.length) return true;
        for (var q = 0; q < Math.min(this.props.stickers.length, 5); q++)
          if (this.props.stickers[q].id !== p.stickers[q].id) return true;
        return false;
      },
      _renderStickers: function() {
        if (!this.props.stickers || this.props.stickers.length === 0) return null;
        var p = Math.floor(Math.random() * Math.min(this.props.stickers.length, 5)),
          q = this.props.stickers[p],
          r = j.getScaledDimensions(q.height, q.width, i.TRAY_SIZE);
        return (g.createElement("div", null, g.createElement(l, {
          size: "small",
          className: "_2ohj",
          onClick: this.props.onDismissTrigger
        }), g.createElement("div", {
          className: "_5r8h _onc",
          "data-id": q.id,
          onClick: function() {
            return this.props.onStickerSelect(q.id);
          }.bind(this)
        }, g.createElement(h, {
          animationTrigger: "hover",
          className: "_5r8i",
          frameCount: q.frameCount,
          frameRate: q.frameRate || 83,
          framesPerCol: q.framesPerCol,
          framesPerRow: q.framesPerRow,
          sourceHeight: r.height,
          sourceURI: q.sourceURI,
          sourceWidth: r.width,
          spriteURI: q.spriteURI,
          paddedSpriteURI: q.paddedSpriteURI,
          stickerID: q.id,
          style: {
            cursor: 'pointer',
            height: '64px'
          }
        }))));
      },
      render: function() {
        return (g.createElement(k, {
          alignment: "left",
          autoFocus: false,
          context: this.props.context,
          onBlur: this._resetFlyout,
          offsetY: 11,
          position: "above",
          shown: this.props.stickers && this.props.stickers.length > 0,
          width: n
        }, this._renderStickers()));
      }
    });
  e.exports = o;
}, null);
__d("StickerTrigger", ["EmoticonsList", "Map", "StickerConfig", "StickerSearch", "StickerServerRequests"], function(a, b, c, d, e, f, g, h, i, j, k) {
  'use strict';
  var l = new h(),
    m = {
      findTriggerForInput: function(n, o) {
        if (n === null) {
          o([], null);
          return;
        }
        j.prepareTagsData().then(function() {
          return this.findTagForInput(n, function(p, q) {
            return o(p, q);
          });
        }.bind(this));
      },
      findTagForInput: function(n, o) {
        var p = this.findTriggeredWord(n);
        if (p) {
          if (l.has(p)) {
            o(l.get(p), p);
          } else k.getStickersForQuery(p, function(q) {
            var r = q.getPayload();
            l.set(p, r);
            o(r, p);
          });
        } else o([], null);
      },
      _getRegex: function() {
        if (i.TriggerConfidence === 'emoji_only') {
          return g.noncapturingRegexp;
        } else if (i.TriggerConfidence === 'high') return (/^(?:\w+\s?){1,4}$/);
        return null;
      },
      findTriggeredWord: function(n) {
        var o = j.getTagsIndex();
        if (!o) return null;
        n = n.toLowerCase();
        var p = n.match(this._getRegex()),
          q = null;
        for (var r = 0; p !== null && r < p.length; r++)
          if (o[p[r]]) q = p[r];
        return q;
      }
    };
  e.exports = m;
}, null);
__d("StickerTriggerIndicator.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
  'use strict';
  var i = g.createClass({
    displayName: "StickerTriggerIndicator",
    getDefaultProps: function() {
      return {
        stickers: []
      };
    },
    propTypes: {
      stickers: g.PropTypes.array
    },
    shouldComponentUpdate: function(j) {
      var k = this.props.stickers.length > 0,
        l = j.stickers.length > 0;
      return k !== l;
    },
    render: function() {
      var j = this.props.stickers && this.props.stickers.length > 0;
      return g.createElement("span", {
        className: ((j ? "emoticonIndicator" : ''))
      });
    }
  });
  e.exports = i;
}, null);
__d("ChatStickerTriggerController", ["BanzaiLogger", "React", "StickerConfig", "StickersFlyoutTriggerSelector.react", "StickerTrigger", "StickerTriggerIndicator.react"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';

  function m(n, o, p, q, r) {
    this.$ChatStickerTriggerController0 = null;
    this.$ChatStickerTriggerController1 = null;
    this.$ChatStickerTriggerController2 = null;
    this.$ChatStickerTriggerController3 = r;
    this.$ChatStickerTriggerController4 = q;
    this.$ChatStickerTriggerController5 = null;
    if (i.TriggerInterface === 'one_tap') {
      this.$ChatStickerTriggerController1 = h.render(h.createElement(j, {
        context: p,
        onStickerSelect: this.$ChatStickerTriggerController6.bind(this),
        onDismissTrigger: this.$ChatStickerTriggerController7.bind(this)
      }), n);
      this.$ChatStickerTriggerController2 = n;
    } else if (i.TriggerInterface === 'hyperlink') {
      this.$ChatStickerTriggerController1 = h.render(h.createElement(l, null), o);
      this.$ChatStickerTriggerController2 = o;
    }
  }
  m.prototype.setInput = function(n) {
    this.$ChatStickerTriggerController8 = n;
  };
  m.prototype.activateAfterparty = function() {
    this.$ChatStickerTriggerController9 = true;
    clearTimeout(this.$ChatStickerTriggerControllera);
    this.$ChatStickerTriggerControllera = setTimeout(this.$ChatStickerTriggerControllerb.bind(this), 5000);
  };
  m.prototype.updateInput = function(n) {
    if (this.$ChatStickerTriggerController9) this.$ChatStickerTriggerControllerb();
    this.$ChatStickerTriggerControllerc(n);
  };
  m.prototype.onFlyoutShown = function(n) {
    if (this.$ChatStickerTriggerController0 && !this.$ChatStickerTriggerControllerd) {
      this.$ChatStickerTriggerControllerd = true;
      this.$ChatStickerTriggerController3(this.$ChatStickerTriggerController0, n);
      this.$ChatStickerTriggerController1.isMounted() && this.$ChatStickerTriggerController1.setProps({
        stickers: []
      });
    } else n();
  };
  m.prototype.getTriggeredWord = function() {
    return this.$ChatStickerTriggerController0;
  };
  m.prototype.$ChatStickerTriggerController6 = function(n) {
    this.$ChatStickerTriggerController4(n);
    this.$ChatStickerTriggerController7();
  };
  m.prototype.$ChatStickerTriggerController7 = function() {
    this.$ChatStickerTriggerControllerd = true;
    this.$ChatStickerTriggerController1.isMounted() && this.$ChatStickerTriggerController1.setProps({
      stickers: []
    });
  };
  m.prototype.$ChatStickerTriggerControllere = function(n, o) {
    if (this.$ChatStickerTriggerController5 === null || this.$ChatStickerTriggerController5 && this.$ChatStickerTriggerController5.toLowerCase().indexOf(o) === -1) {
      this.$ChatStickerTriggerController8.isMounted() && this.$ChatStickerTriggerController8.setProps({
        triggeredWord: null
      });
      this.$ChatStickerTriggerController1.isMounted() && this.$ChatStickerTriggerController1.setProps({
        stickers: []
      });
      return;
    }
    if (o) g.log('StickersLoggerConfig', {
      event: 'sticker_trigger_activated',
      numsearchresults: n.length,
      triggeredword: o,
      triggerused: false
    });
    this.$ChatStickerTriggerController0 = o;
    this.$ChatStickerTriggerController8.isMounted() && this.$ChatStickerTriggerController8.setProps({
      triggeredWord: o
    });
    if (!this.$ChatStickerTriggerControllerd) this.$ChatStickerTriggerController1.isMounted() && this.$ChatStickerTriggerController1.setProps({
      stickers: n
    });
  };
  m.prototype.$ChatStickerTriggerControllerb = function() {
    clearTimeout(this.$ChatStickerTriggerControllera);
    this.$ChatStickerTriggerController9 = false;
    this.$ChatStickerTriggerControllerd = false;
    this.$ChatStickerTriggerController0 = null;
    this.$ChatStickerTriggerControllerc(null);
  };
  m.prototype.$ChatStickerTriggerControllerc = function(n) {
    if (this.$ChatStickerTriggerController5 !== n) {
      this.$ChatStickerTriggerController5 = n;
      k.findTriggerForInput(this.$ChatStickerTriggerController5, this.$ChatStickerTriggerControllere.bind(this));
    }
  };
  m.prototype.destroy = function() {
    h.unmountComponentAtNode(this.$ChatStickerTriggerController2);
    clearTimeout(this.$ChatStickerTriggerControllera);
  };
  e.exports = m;
}, null);
__d("ChatFileUploaderMixin", ["SubscriptionsHandler", "React"], function(a, b, c, d, e, f, g, h) {
  var i = {
    propTypes: {
      attachmentsShelf: h.PropTypes.object,
      onFileUploaderMounted: h.PropTypes.func,
      onUploadFinished: h.PropTypes.func,
      onUpdateAttachmentsShelf: h.PropTypes.func,
      onSubmit: h.PropTypes.func
    },
    setUpSubscriptionsHandler: function(j) {
      this._uploader = j;
      this._subscriptions = new g();
      this._subscriptions.addSubscriptions(this._uploader.subscribe(['all-uploads-completed', 'upload-canceled'], this._handleUploadFinished), this._uploader.subscribe('dom-updated', this._handleUpdateAttachmentsShelf), this._uploader.subscribe('submit', this._handleSubmit));
      this.props.onFileUploaderMounted(this._uploader);
    },
    componentWillUnmount: function() {
      this._subscriptions && this._subscriptions.release();
      if (!this.props.uploaderIsFromHigherLevel) this._uploader && this._uploader.destroy();
    },
    isUploading: function() {
      return this._uploader.isUploading();
    },
    getAttachments: function() {
      return this._uploader.getAttachments();
    },
    getImageFiles: function() {
      return this._uploader.getImageFiles();
    },
    getVideoFiles: function() {
      return this._uploader.getVideoFiles();
    },
    getAudioFiles: function() {
      return this._uploader.getAudioFiles();
    },
    getFiles: function() {
      return this._uploader.getFiles();
    },
    removeAttachments: function() {
      return this._uploader.removeAttachments();
    },
    _handleUploadFinished: function() {
      if (this.props.onUploadFinished) this.props.onUploadFinished();
    },
    _handleUpdateAttachmentsShelf: function() {
      if (this.props.onUpdateAttachmentsShelf) this.props.onUpdateAttachmentsShelf();
    },
    _handleSubmit: function() {
      if (this.props.onSubmit) this.props.onSubmit();
    }
  };
  e.exports = i;
}, null);
__d("ChatFileUploader.react", ["ChatFileUploaderMixin", "InlineBlock.react", "MercuryConfig", "React", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m = j.createClass({
    displayName: "ChatFileUploader",
    mixins: [g],
    getDefaultProps: function() {
      return {
        uploaderIsFromHigherLevel: true
      };
    },
    shouldComponentUpdate: function() {
      return false;
    },
    componentDidMount: function() {
      var n = this.props.initFileUploaderFn(this.refs.form.getDOMNode(), this.refs.input.getDOMNode(), this.refs.attachID.getDOMNode());
      this.setUpSubscriptionsHandler(n);
    },
    render: function() {
      return (j.createElement("form", {
        ref: "form",
        action: i.upload_url,
        method: "post"
      }, j.createElement("input", {
        type: "hidden",
        ref: "attachID",
        name: "attach_id"
      }), j.createElement(h, {
        className: "_m _4q60 itemLabel"
      }, j.createElement("input", {
        type: "file",
        className: "_n",
        name: "attachment[]",
        multiple: "true",
        ref: "input"
      }), j.createElement("span", {
        className: "_4q61 itemAnchor"
      }, "Add Files..."))));
    }
  });
  e.exports = m;
}, null);
__d("ChatTabMenu.react", ["ChatFileUploader.react", "ChatPrivacyActionController", "ChatConfig", "MercuryConfig", "MercuryIDs", "MercuryFileUploader", "MercuryThreadMuter", "ReactComponentWithPureRenderMixin", "React", "PopoverMenu.react", "ReactMenu", "MenuSeparator.react", "Toggler", "TrackingNodes", "WebMessengerThreadPermalinks", "cx", "fbt", "goURI", "MercuryThreadActions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
  'use strict';
  var y = b('MercuryThreadActions').get(),
    z = q.Item,
    aa = o.createClass({
      displayName: "ChatTabMenu",
      mixins: [n],
      propTypes: {
        onFileUploaderMounted: o.PropTypes.func,
        updatePrivacyLinkFunc: o.PropTypes.func,
        nameConversationFunc: o.PropTypes.func,
        leaveConversationFunc: o.PropTypes.func,
        showParticipantsFunc: o.PropTypes.func,
        clearHistoryFunc: o.PropTypes.func,
        reportSpamFunc: o.PropTypes.func,
        createGroupFunc: o.PropTypes.func,
        switchToWorkFunc: o.PropTypes.func,
        isMultichat: o.PropTypes.bool,
        isEmptyChat: o.PropTypes.bool,
        hasSwitchToWork: o.PropTypes.bool,
        showAddFriend: o.PropTypes.func,
        threadID: o.PropTypes.string,
        attachmentsShelf: o.PropTypes.object,
        onUploadFinished: o.PropTypes.func,
        onUpdateAttachmentsShelf: o.PropTypes.func,
        onSubmit: o.PropTypes.func,
        enableDesktopNotif: o.PropTypes.func
      },
      getInitialState: function() {
        return {
          url: null
        };
      },
      getDefaultProps: function() {
        return {
          show: true
        };
      },
      componentDidMount: function() {
        u.getThreadURI(this.props.threadID, function(ba) {
          this.isMounted() && this.setState({
            url: ba
          });
        }.bind(this));
        if (!this.props.isMultiChat) this._privacyActionController = new h(k.getUserIDFromThreadID(this.props.threadID), this.props.updatePrivacyLinkFunc);
      },
      _initFileUploader: function(ba, ca, da) {
        if (this._fileUploader) {
          this._fileUploader.updateElements(ba, ca, da);
        } else this._fileUploader = new l(this.props.attachmentsShelf, ba, ca, da);
        return this._fileUploader;
      },
      componentWillUnmount: function() {
        this._privacyActionController && this._privacyActionController.destroy();
        this._fileUploader && this._fileUploader.destroy();
      },
      _unmuteThread: function() {
        y.unmute(this.props.threadID);
        s.hide();
      },
      _togglePrivacyFunc: function() {
        this._privacyActionController.togglePrivacy();
      },
      getURL: function() {
        return this.state.url;
      },
      _renderFileUploader: function() {
        return (o.createElement(z, {
          className: "_37_x"
        }, o.createElement(g, {
          onFileUploaderMounted: this.props.onFileUploaderMounted,
          attachmentsShelf: this.props.attachmentsShelf,
          initFileUploaderFn: this._initFileUploader,
          onUploadFinished: this.props.onUploadFinished,
          onUpdateAttachmentsShelf: this.props.onUpdateAttachmentsShelf,
          onSubmit: this.props.onSubmit
        })));
      },
      _renderOpenFullConversation: function() {
        if (this.state.url) return (o.createElement(z, {
          onclick: function() {
            return x(this.state.url);
          }.bind(this)
        }, "See Full Conversation"));
        return null;
      },
      _renderAddFriend: function() {
        if (!this.props.showAddFriend) return null;
        return (o.createElement(z, {
          onclick: this.props.showAddFriend
        }, "Add Friends to Chat..."));
      },
      _renderTogglePrivacy: function() {
        if (!this.props.isMultichat) return (o.createElement(z, {
          onclick: this._togglePrivacyFunc
        }, this.props.privacyText));
        return null;
      },
      _renderMuteConversation: function() {
        if (!this.props.isMuted) {
          var ba = m.showMuteChangeDialog.bind(null, this.props.threadID);
          return (o.createElement(z, {
            onclick: ba
          }, "Mute Conversation..."));
        } else return (o.createElement(z, {
          onclick: this._unmuteThread
        }, "Unmute Conversation"));
      },
      _renderClearConversation: function() {
        if (!this.props.isMultichat) return (o.createElement(z, {
          onclick: this.props.clearHistoryFunc
        }, "Clear Window"));
        return null;
      },
      _renderReportSpam: function() {
        if (!this.props.isMultichat) return (o.createElement(z, {
          onclick: this.props.reportSpamFunc
        }, "Report as Spam or Abuse..."));
        return null;
      },
      _renderCreateGroup: function() {
        if (this.props.isMultichat) return (o.createElement(z, {
          onclick: this.props.createGroupFunc
        }, "Create Group"));
        return null;
      },
      _renderSwitchToWork: function() {
        if (this.props.isMultichat && i.get('has_switch_to_work') && this.props.hasSwitchToWork) return (o.createElement(z, {
          onclick: this.props.switchToWorkFunc
        }, "Move to Work Account"));
      },
      _renderConversationName: function() {
        if (this.props.isMultichat && this.state.url) return (o.createElement(z, {
          onclick: this.props.nameConversationFunc
        }, "Edit Conversation Name"));
        return null;
      },
      _renderLeaveConversation: function() {
        if (this.props.isMultichat) return (o.createElement(z, {
          onclick: this.props.leaveConversationFunc
        }, "Leave Conversation..."));
        return null;
      },
      _renderEnableDesktopNotifications: function() {
        if (j.DesktopNotificationsGK && "Notification" in window && Notification.permission !== "granted") return (o.createElement(z, {
          onclick: this.props.enableDesktopNotif
        }, "Enable Desktop Notifications"));
        return null;
      },
      _renderPeopleList: function() {
        if (this.props.isMultichat && this.state.url) return (o.createElement(z, {
          onclick: this.props.showParticipantsFunc
        }, "Edit Participants..."));
        return null;
      },
      render: function() {
        var ba = this._renderReportSpam(),
          ca = this._renderCreateGroup(),
          da = o.createElement(q, {
            className: (("chatReact") + (!this.props.show ? ' ' + "hidden_elem" : ''))
          }, this._renderOpenFullConversation(), this._renderFileUploader(), this._renderAddFriend(), this._renderTogglePrivacy(), this._renderConversationName(), this._renderPeopleList(), o.createElement(r, null), this._renderSwitchToWork(), this._renderMuteConversation(), this._renderClearConversation(), this._renderLeaveConversation(), ba ? (o.createElement(r, null)) : null, ba, ca ? (o.createElement(r, null)) : null, ca, this._renderEnableDesktopNotifications()),
          ea = "Options",
          fa = t.getTrackingInfo(t.types.DROPDOWN_BUTTON);
        return (o.createElement(p, {
          menu: da
        }, o.createElement("a", {
          "data-ft": fa,
          "data-hover": "tooltip",
          "aria-label": ea,
          "data-tooltip-alignh": "center",
          className: (("button") + (this.props.isEmptyChat ? ' ' + "hidden_elem" : ''))
        })));
      }
    });
  e.exports = aa;
}, null);
__d("ChatDateBreak.react", ["React", "ReactPropTypes", "Timestamp.react", "cx", "formatDate", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = g.createClass({
    displayName: "ChatDateBreak",
    propTypes: {
      date: h.instanceOf(Date).isRequired
    },
    shouldComponentUpdate: function(n) {
      return this.props.date.getTime() !== n.date.getTime();
    },
    render: function() {
      var n = this.props.date,
        o = k(n, {
          today: 'g:ia',
          withinWeek: 'l g:ia',
          thisYear: 'F jS, g:ia',
          older: 'F j, Y g:i a'
        }),
        p = Math.round(n.getTime() / 1000);
      return (g.createElement("div", g.__spread({}, this.props, {
        className: l(this.props.className, "_5w-5")
      }), g.createElement("div", {
        className: "_5w-6"
      }, g.createElement(i, {
        time: p,
        verbose: o,
        text: o
      }))));
    }
  });
  e.exports = m;
}, null);
__d("ChatAuthorPhotoBlock.react", ["MercuryParticipants", "ReactPropTypes", "React", "cx", "formatDate", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = 86400000,
    n = i.createClass({
      displayName: "ChatAuthorPhotoBlock",
      propTypes: {
        authorID: h.string.isRequired,
        hideName: h.bool,
        hidePhoto: h.bool,
        timestamp: h.number
      },
      getInitialState: function() {
        return {
          author: {
            id: null,
            name: '',
            href: '#',
            image_src: ''
          }
        };
      },
      componentDidMount: function() {
        this.updateAuthor(this.props.authorID);
      },
      componentWillReceiveProps: function(o) {
        if (o.authorID != this.state.author.id) this.updateAuthor(o.authorID);
      },
      render: function() {
        return (i.createElement("div", i.__spread({}, this.props, {
          className: l(this.props.className, "_5yt9")
        }), this.renderAuthorName(), this.renderAuthorPhoto(), this.props.children));
      },
      renderAuthorName: function() {
        if (!this.props.hideName) return (i.createElement("div", {
          className: "_5ys-",
          ref: "name"
        }, this.state.author.name));
      },
      renderAuthorPhoto: function() {
        if (!this.props.hidePhoto) {
          var o = null;
          if (this.props.timestamp) {
            var p = (Date.now() - this.props.timestamp > m) ? 'M jS, g:ia' : 'g:ia';
            o = k(new Date(this.props.timestamp), p);
          }
          return (i.createElement("a", {
            "aria-label": o,
            className: "_5ys_",
            "data-hover": "tooltip",
            "data-tooltip-position": "left",
            href: this.state.author.href,
            ref: "link"
          }, i.createElement("img", {
            src: this.state.author.image_src,
            ref: "image"
          })));
        }
      },
      updateAuthor: function(o) {
        g.get(o, function(p) {
          this.isMounted() && this.setState({
            author: p
          });
        }.bind(this));
      }
    });
  e.exports = n;
}, null);
__d("MessageBubbleMixin", ["DOMDimensions"], function(a, b, c, d, e, f, g) {
  'use strict';
  var h = 2,
    i = {
      getInitialState: function() {
        return {
          bubbleWidth: null
        };
      },
      componentDidMount: function() {
        this._restyleBubble(this.props);
      },
      componentDidUpdate: function(j) {
        if (j.maxWidth !== this.props.maxWidth || j.body !== this.props.body) this._restyleBubble(j);
      },
      _restyleBubble: function(j) {
        if (this.props.attachments) return;
        var k = this.refs.bubble.getDOMNode();
        if (j.maxWidth !== this.props.maxWidth || g.getElementDimensions(k).width > this.props.maxWidth) {
          this.setState({
            bubbleWidth: this.props.maxWidth
          }, this._shrinkBubble);
          return;
        }
        this._shrinkBubble();
      },
      _shrinkBubble: function() {
        var j = this.refs.bubble.getDOMNode(),
          k = g.getElementDimensions(j).width,
          l = this.refs.content.getDOMNode(),
          m = l ? g.getElementDimensions(l).width : 0,
          n = m + h;
        if (m > 0 && n < this.props.maxWidth && k - n - this.getBoxWidth() > 0) this.setState({
          bubbleWidth: n
        });
      }
    };
  e.exports = i;
}, null);
__d("ChatBubble.react", ["DOMDimensions", "MercuryMessageBody.react", "MessageBubbleMixin", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  'use strict';
  var m = null,
    n = j.createClass({
      displayName: "ChatBubble",
      mixins: [i],
      propTypes: {
        attachments: j.PropTypes.node,
        body: j.PropTypes.string,
        maxWidth: j.PropTypes.number.isRequired
      },
      render: function() {
        return (j.createElement("div", j.__spread({}, this.props, {
          className: l(this.props.className, "_5w1r"),
          ref: "bubble",
          style: {
            maxWidth: this.props.maxWidth,
            width: this.state.bubbleWidth
          }
        }), j.createElement("div", null, j.createElement("span", {
          className: "_5yl5",
          ref: "content"
        }, j.createElement(h, {
          body: this.props.body,
          ranges: this.props.ranges
        }))), this.props.attachments));
      },
      contentWraps: function() {
        var o = this.refs.content.getDOMNode(),
          p = o.getClientRects(),
          q = g.getElementDimensions(o).height;
        return (p && p.length > 1 && p[0].height < q);
      },
      getBoxWidth: function() {
        if (!m) m = g.measureElementBox(this.refs.bubble.getDOMNode(), 'width', true, true, false);
        return m;
      }
    });
  e.exports = n;
}, null);
__d("MercuryAttachments.react", ["MercuryAttachmentRenderer", "DOM", "Event", "ImmutableObject", "React", "SubscriptionsHandler", "cx", "emptyFunction", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  'use strict';
  var p = 176,
    q = 4,
    r = k.createClass({
      displayName: "MercuryAttachments",
      propTypes: {
        customPhotoWidth: k.PropTypes.number,
        message: k.PropTypes.instanceOf(j).isRequired,
        attachments: k.PropTypes.array.isRequired,
        isChat: k.PropTypes.bool,
        onImageLoad: k.PropTypes.func,
        onStickerClick: k.PropTypes.func
      },
      getDefaultProps: function() {
        return {
          isChat: false,
          onImageLoad: n,
          onStickerClick: n
        };
      },
      componentDidMount: function() {
        this._subscriptionsHandler = new l();
        this.renderAttachments();
      },
      componentDidUpdate: function() {
        this.renderAttachments();
      },
      componentWillUnmount: function() {
        this._subscriptionsHandler.release();
      },
      render: function() {
        var s = this.props.attachments.filter(g.isPhotoAttachment).length > 0;
        return (k.createElement("div", k.__spread({}, this.props, {
          className: o(this.props.className, (("_5h9y") + (s ? ' ' + "_zl6" : '')))
        })));
      },
      renderAttachments: function() {
        var s = this.getDOMNode();
        h.empty(s);
        var t = this.props.message,
          u = g.sortAttachmentsStablyByType(this.props.attachments),
          v = this.props.customPhotoWidth || p,
          w = g.renderPhotoAttachments(u.filter(g.isPhotoAttachment), t, v, q);
        w && h.appendContent(s, w);
        for (var x = 0; x < u.length; x++) {
          var y = u[x];
          if (g.isPhotoAttachment(y)) continue;
          var z = g.renderAttachment(this.props.isChat, y, t, null, null, this.props.onStickerClick);
          z.error && h.appendContent(s, z.error);
          z.content && h.appendContent(s, z.content);
        }
        h.scry(s, 'img').forEach(function(aa) {
          this._subscriptionsHandler.addSubscriptions(i.listen(aa, 'load', function() {
            this.props.onImageLoad(aa);
          }.bind(this)));
        }.bind(this));
      }
    });
  e.exports = r;
}, null);
__d("MercurySpoofWarning.react", ["MercuryParticipants", "ReactPropTypes", "React", "fbt"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = i.createClass({
    displayName: "MercurySpoofWarning",
    propTypes: {
      authorID: h.string.isRequired
    },
    getInitialState: function() {
      return {
        author: {
          name: ''
        }
      };
    },
    componentWillMount: function() {
      this.componentWillReceiveProps(this.props);
    },
    componentWillReceiveProps: function(l) {
      g.get(l.authorID, function(m) {
        return this.setState({
          author: m
        });
      }.bind(this));
    },
    render: function() {
      return (i.createElement("div", i.__spread({}, this.props), j._("Unable to confirm {name_or_email} as the sender.", [j.param("name_or_email", this.state.author.name)])));
    }
  });
  e.exports = k;
}, null);
__d("ChatMessage.react", ["ChatAnimatedGifs", "ChatAuthorPhotoBlock.react", "ChatBubble.react", "ChatConfig", "CSS", "ImmutableObject", "MercuryAttachment", "MercuryAttachments.react", "MercuryAttachmentRenderer", "MercuryErrorInfo", "MercuryIDs", "MercuryMessageError.react", "MercurySpoofWarning.react", "React", "ReactPropTypes", "cx", "fbt", "formatDate", "isRTL", "joinClasses", "MercuryMessages"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
  'use strict';
  var aa = b('MercuryMessages').get(),
    ba = t.createClass({
      displayName: "ChatMessage",
      propTypes: {
        message: u.instanceOf(l).isRequired,
        maxBubbleWidth: u.number.isRequired,
        onImageLoad: u.func,
        onStickerClick: u.func
      },
      componentDidMount: function() {
        k.conditionClass(this.getDOMNode(), "_2cnu", this.isOneLine());
      },
      isOneLine: function() {
        var ca = this.props.message;
        return aa.isInbound(ca) && !this.refs.attachmentsInside && this.refs.bubble && !this.refs.bubble.contentWraps();
      },
      shouldComponentUpdate: function(ca, da) {
        return ca.message !== this.props.message;
      },
      render: function() {
        var ca = this.props.message,
          da = aa.isInbound(ca),
          ea = q.isMultichat(ca.thread_id),
          fa = y(ca.body),
          ga = j.get('chat_fading_bubbles') && !da && aa.isSending(ca),
          ha = p.hasErrorStatus(ca),
          ia = (("_5wd4") + (da ? ' ' + "_1nc7" : '') + (!da ? ' ' + "_1nc6" : '') + (da && ea ? ' ' + "_5ysy" : '') + (ga ? ' ' + "_4oe5" : '') + (ha ? ' ' + "_1zcs" : '') + (fa ? ' ' + "direction_rtl" : '') + (!fa ? ' ' + "direction_ltr" : '')),
          ja = new Date(ca.timestamp);
        return (t.createElement(h, t.__spread({}, this.props, {
          authorID: ca.author,
          className: z(this.props.className, ia),
          hideName: !da || !ea,
          hidePhoto: !da,
          timestamp: ca.timestamp,
          title: da ? null : x(ja, 'g:ia')
        }), this._renderInner(), this._renderUndertext()));
      },
      _renderInner: function() {
        if (this.props.message.is_filtered_content) return (t.createElement("div", {
          className: "_5wd9",
          ref: "inner"
        }, this._renderFilteredContent()));
        return (t.createElement("div", {
          className: "_5wd9",
          ref: "inner"
        }, this._renderBubble(), this._renderAttachments('outside')));
      },
      _renderUndertext: function() {
        if (this.props.message.is_filtered_content) return null;
        return (t.createElement("div", {
          className: "_3ry4",
          ref: "undertext"
        }, t.createElement(r, {
          className: "_5wda clearfix",
          message: this.props.message,
          ref: "status"
        }), this._renderSpoofWarning()));
      },
      _renderSpoofWarning: function() {
        return (this.props.message.is_spoof_warning ? t.createElement(s, {
          authorID: this.props.message.author,
          className: "_5wdb"
        }) : null);
      },
      _renderFilteredContent: function() {
        return t.createElement("div", {
          className: "_5wdc uiBoxYellow clearfix"
        }, "This message is no longer available because it was identified as abusive or marked as spam.");
      },
      _renderAttachments: function(ca) {
        var da = this.props.message,
          ea = ca == 'inside' ? 'attachmentsInside' : 'attachmentsOutside',
          fa = m.get(da).filter(function(ga) {
            var ha = o.isBubblePreferred(ga);
            return (ha && ca === 'inside') || (!ha && ca === 'outside');
          });
        if (fa.length > 0) return t.createElement(n, {
          className: "_5wdd clearfix",
          isChat: true,
          message: da,
          attachments: fa,
          ref: ea,
          onImageLoad: this.props.onImageLoad,
          onStickerClick: this.props.onStickerClick
        });
      },
      _renderBubble: function() {
        var ca = this.props.message,
          da = ca.body,
          ea = this._renderAttachments('inside');
        if (g.shouldHideBody(ca)) da = '';
        if (da || ea) return (t.createElement("div", {
          className: "_5wde"
        }, t.createElement(i, {
          attachments: ea,
          body: da,
          className: "_5wdf",
          maxWidth: this.props.maxBubbleWidth,
          ranges: ca.ranges,
          ref: "bubble"
        })));
      }
    });
  e.exports = ba;
}, null);
__d("ChatVideoCallLink.react", ["Arbiter", "ChatVisibility", "MercuryViewer", "PresencePrivacy", "React", "ReactPropTypes", "SubscriptionsHandler", "VideoCallCore", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var q = k.createClass({
    displayName: "ChatVideoCallLink",
    propTypes: {
      message: l.object.isRequired,
      onClick: l.func.isRequired
    },
    componentDidMount: function() {
      this._subscriptions = new m();
      this._subscriptions.addSubscriptions(g.subscribe(['buddylist/availability-changed'], this.availabilityChanged), j.subscribe(['privacy-changed', 'privacy-availability-changed'], this.availabilityChanged));
    },
    componentWillUnmount: function() {
      this._subscriptions.release();
    },
    render: function() {
      return (k.createElement("a", {
        className: (("callBackLink") + (this.shouldHideLink() ? ' ' + "hidden_elem" : '')),
        "data-gt": JSON.stringify({
          videochat: 'clicked_callback_link'
        }),
        href: "#",
        onClick: this.linkClicked
      }, this.renderLinkText()));
    },
    renderLinkText: function() {
      if (this.props.message.log_message_data.event_name == 'install_canceled') {
        return ("Retry setup and call back.");
      } else if (!this.props.message.log_message_data.event_name && this.props.message.log_message_data.callee == i.getID() && !this.props.message.log_message_data.answered) return ("Call back.");
    },
    shouldHideLink: function() {
      return !h.isOnline() || !n.availableForCall(this.props.message.log_message_data.to);
    },
    linkClicked: function() {
      var r;
      if (this.props.message.log_message_data.event_name == 'install_canceled') {
        r = 'callback_cancelinstall_link';
      } else if (!this.props.message.log_message_data.event_name && this.props.message.log_message_data.callee == i.getID() && !this.props.message.log_message_data.answered) r = 'callback_link';
      this.props.onClick(this.props.message.log_message_data.to, this.props.message.thread_id, r);
    },
    availabilityChanged: function() {
      this.forceUpdate();
    }
  });
  e.exports = q;
}, null);
__d("MercuryLogMessage.react", ["DOM", "Event", "ChatVideoCallLink.react", "ImmutableObject", "MercuryLogMessageRenderer", "MercuryLogMessageType", "React", "ReactPropTypes", "VideoCallSupport", "cx", "emptyFunction", "formatDate", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  'use strict';
  var t = m.createClass({
    displayName: "MercuryLogMessage",
    propTypes: {
      message: n.instanceOf(j).isRequired,
      onImageLoad: n.func,
      onVideoCallLinkClick: n.func
    },
    getDefaultProps: function() {
      return {
        onImageLoad: q
      };
    },
    getInitialState: function() {
      return {
        messageText: null
      };
    },
    componentDidMount: function() {
      this.componentWillReceiveProps(this.props);
    },
    componentWillReceiveProps: function(u) {
      k.renderText(u.message, function(v) {
        this.setState({
          messageText: v
        });
      }.bind(this));
    },
    shouldComponentUpdate: function(u, v) {
      return this.state.messageText != v.messageText;
    },
    componentDidUpdate: function() {
      var u = this.refs.attachment.getDOMNode();
      k.renderAttachmentLegacy(u, this.props.message);
      g.scry(u, 'img').forEach(function(v) {
        var w = h.listen(v, 'load', function() {
          this.props.onImageLoad(v);
          w.remove();
        }.bind(this));
      }.bind(this));
    },
    render: function() {
      return (m.createElement("div", m.__spread({}, this.props, {
        className: s(this.props.className, "_5ye6"),
        title: r(new Date(this.props.message.timestamp), 'g:ia')
      }), k.renderIcon(this.props.message), m.createElement("div", {
        className: "_5ye7"
      }, this.state.messageText, this.renderVideoCallLink()), m.createElement("div", {
        className: "_5ye8",
        ref: "attachment"
      })));
    },
    renderVideoCallLink: function() {
      if (this.props.message.log_message_type !== l.VIDEO_CALL || !this.props.onVideoCallLinkClick || !o.isVideoCallSupported()) return null;
      return (m.createElement(i, {
        message: this.props.message,
        onClick: this.props.onVideoCallLinkClick
      }));
    }
  });
  e.exports = t;
}, null);
__d("ChatConversation.react", ["ChatDateBreak.react", "ChatMessage.react", "ImmutableObject", "MercuryActionType", "MercuryLogMessage.react", "React", "cx", "invariant", "OrionNUXRenderer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  'use strict';
  var o = b('OrionNUXRenderer').module,
    p = 1000 * 60 * 60,
    q = l.createClass({
      displayName: "ChatConversation",
      propTypes: {
        maxBubbleWidth: l.PropTypes.number.isRequired,
        messages: l.PropTypes.arrayOf(l.PropTypes.instanceOf(i)).isRequired,
        onCallLinkClick: l.PropTypes.func,
        onImageLoad: l.PropTypes.func,
        onStickerClick: l.PropTypes.func
      },
      componentWillReceiveProps: function(r) {
        n(r.maxBubbleWidth === this.props.maxBubbleWidth);
      },
      render: function() {
        var r = this.props.messages,
          s = [];
        for (var t = 0; t < r.length; t++) {
          var u = r[t],
            v = (t > 0) ? r[t - 1] : null;
          if (u.is_cleared) continue;
          if (!v || v.is_cleared || u.timestamp - v.timestamp > p) s.push(l.createElement(g, {
            date: new Date(u.timestamp),
            key: 'db:' + u.message_id
          }));
          if (u.action_type == j.LOG_MESSAGE) {
            s.push(l.createElement(k, {
              className: "_5w0o",
              key: u.message_id,
              message: u,
              onImageLoad: this.props.onImageLoad,
              onCallLinkClick: this.props.onCallLinkClick
            }));
          } else {
            s.push(l.createElement(h, {
              key: u.message_id,
              message: u,
              maxBubbleWidth: this.props.maxBubbleWidth,
              onImageLoad: this.props.onImageLoad,
              onStickerClick: this.props.onStickerClick
            }));
            if (o && o.isValidNUXMessage(u)) s.push(l.createElement(o, {
              key: 'onr_c:' + u.message_id,
              message: u,
              onImageLoad: this.props.onImageLoad,
              type: "chat"
            }));
          }
        }
        return l.createElement("div", null, s);
      }
    });
  e.exports = q;
}, null);
__d("ChatTypingIndicators.react", ["ChatAuthorPhotoBlock.react", "DOM", "MercuryIDs", "MercuryParticipants", "ReactPropTypes", "React", "SubscriptionsHandler", "Tooltip", "MercuryTypingReceiver", "arraySort", "createObjectFrom", "cx", "emptyFunction", "fbt", "MercuryThreadInformer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
  var u = b('MercuryThreadInformer').get(),
    v = l.createClass({
      displayName: "ChatTypingIndicators",
      propTypes: {
        indicatorsWillShow: k.func,
        indicatorsDidShow: k.func,
        threadID: k.string.isRequired
      },
      getDefaultProps: function() {
        return {
          indicatorsWillShow: s,
          indicatorsDidShow: s
        };
      },
      getInitialState: function() {
        return {
          typingUserIDs: []
        };
      },
      componentDidMount: function() {
        this._subscriptions = new m();
        this._subscriptions.addSubscriptions(o.addRetroactiveListener('state-changed', this.typingStateChanged), u.subscribe('messages-received', this.messagesReceived));
      },
      componentWillReceiveProps: function(w) {
        if (w.threadID != this.props.threadID) this.setState({
          typingUserIDs: []
        });
      },
      componentWillUpdate: function(w, x) {
        if (x.typingUserIDs.length > 0) this.props.indicatorsWillShow();
      },
      componentDidUpdate: function() {
        if (this.state.typingUserIDs.length > 0) this.props.indicatorsDidShow();
        j.getMulti(this.state.typingUserIDs, function(w) {
          if (this.isMounted()) this.state.typingUserIDs.forEach(function(x) {
            var y = w[x];
            n.set(this.refs[x].getDOMNode(), this.renderTooltip(y.short_name), 'above', 'left');
          }.bind(this));
        }.bind(this));
      },
      componentWillUnmount: function() {
        this._subscriptions.release();
      },
      render: function() {
        var w = i.isMultichat(this.props.threadID);
        return (l.createElement("div", {
          className: "_2fsr"
        }, this.state.typingUserIDs.map(function(x) {
          return l.createElement(g, {
            authorID: x,
            className: (("_gfq") + (w ? ' ' + "_52fu" : '')),
            hideName: !w,
            key: x
          }, l.createElement("div", {
            className: "_52ft"
          }, l.createElement("div", {
            className: "_gfp",
            ref: x
          })));
        })));
      },
      renderTooltip: function(w) {
        var x = h.create('span');
        l.render(l.createElement("span", null, t._("{name} is typing...", [t.param("name", w)])), x);
        return x;
      },
      typingStateChanged: function(w) {
        if (this.props.threadID in w) this.setState({
          typingUserIDs: p(w[this.props.threadID])
        });
      },
      messagesReceived: function(w, x) {
        if (this.props.threadID in x) {
          var y = x[this.props.threadID],
            z = q(y.map(function(aa) {
              return aa.author;
            }));
          this.setState({
            typingUserIDs: p(this.state.typingUserIDs.filter(function(aa) {
              return !z[aa];
            }))
          });
        }
      }
    });
  e.exports = v;
}, null);
__d("MercuryTypingAnimation.react", ["React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i) {
  'use strict';
  var j = g.createClass({
    displayName: "MercuryTypingAnimation",
    propTypes: {
      color: g.PropTypes.oneOf(['light', 'dark'])
    },
    getDefaultProps: function() {
      return {
        color: 'dark'
      };
    },
    render: function() {
      var k = (("_4a0v") + (this.props.color === 'light' ? ' ' + "_4a0w" : '') + (this.props.color === 'dark' ? ' ' + "_4a0x" : ''));
      return (g.createElement("div", {
        className: i(this.props.className, k)
      }, g.createElement("div", {
        className: "_4b0g"
      }, g.createElement("div", {
        className: "_4a0y"
      }), g.createElement("div", {
        className: "_4a0y"
      }), g.createElement("div", {
        className: "_4a0y"
      }))));
    }
  });
  e.exports = j;
}, null);
__d("MercuryTypingIndicator", ["Animation", "ChatConfig", "CSS", "DOM", "MercuryTypingAnimation.react", "MercuryTypingReceiver", "MercuryViewer", "MercuryParticipants", "React", "Style", "ChatTabTemplates", "Tooltip", "copyProperties", "csx", "cx", "fbt", "MercuryThreadInformer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
  var w = b('MercuryThreadInformer').get(),
    x = [];
  w.subscribe('messages-received', function(aa, ba) {
    x.forEach(function(ca) {
      var da = ba[ca._threadID];
      da && ca.receivedMessages(da);
    });
  });
  l.addRetroactiveListener('state-changed', function(aa) {
    x.forEach(function(ba) {
      var ca = aa[ba._threadID];
      ca && ba._handleStateChanged(ca);
    });
  });

  function y(aa) {
    var ba = q[':fb:chat:conversation:message-group'].build(),
      ca = q[':fb:mercury:typing-indicator:typing'].build();
    i.addClass(ba.getRoot(), "_50kd");
    var da = ba.getNode('profileLink');
    r.set(da, aa.name, 'left');
    da.href = aa.href;
    ba.setNodeContent('profileName', aa.name);
    ba.setNodeProperty('profilePhoto', 'src', aa.image_src);
    var ea = v._("{name} is typing...", [v.param("name", aa.short_name)]);
    r.set(ca.getRoot(), ea, 'above');
    j.appendContent(ba.getNode('messages'), ca.getRoot());
    return ba;
  }

  function z(aa, ba, ca) {
    this._animations = {};
    this._activeUsers = {};
    this._typingIndicator = ba;
    this._messagesView = ca;
    this._threadID = aa;
    this._subscription = l.addRetroactiveListener('state-changed', function(da) {
      var ea = da[this._threadID];
      ea && this._handleStateChanged(ea);
    }.bind(this));
    x.push(this);
  }
  s(z.prototype, {
    destroy: function() {
      Object.keys(this._activeUsers).forEach(this._removeUserBubble.bind(this));
      this._controller.destroy();
      x.remove(this);
    },
    receivedMessages: function(aa) {
      aa.forEach(function(ba) {
        if (!m.isViewer(ba.author)) this._removeUserBubble(ba.author);
      }.bind(this));
    },
    _handleStateChanged: function(aa) {
      for (var ba in this._activeUsers)
        if (aa.indexOf(ba) === -1) {
          this._slideOutUserBubble(ba);
          delete this._activeUsers[ba];
        }
      if (aa.length) n.getMulti(aa, function(ca) {
        var da = this._messagesView.isScrolledToBottom(),
          ea = {};
        for (var fa in ca) {
          var ga = this._activeUsers[fa];
          ea[fa] = ga || y(ca[fa]).getRoot();
          if (!ga) {
            j.appendContent(this._typingIndicator, ea[fa]);
            if (h.get('chat_thread_typing_indicator_animated')) {
              var ha = j.scry(this._typingIndicator, "._510u");
              for (var ia = 0, ja = ha.length; ia < ja; ia++) o.render(o.createElement(k, {
                className: "_3e2s"
              }), ha[ia]);
            }
          }
        }
        var ka = Object.keys(ea).length > 0;
        da && this._messagesView.scrollToBottom(ka);
        this._activeUsers = ea;
      }.bind(this));
    },
    _removeUserBubble: function(aa, ba) {
      var ca = this._getCurrentAnimation(aa, ba);
      if (ca) {
        ca.animation.stop();
        j.remove(ca.elem);
        delete this._animations[aa];
      }
      if (aa in this._activeUsers) {
        j.remove(this._activeUsers[aa]);
        delete this._activeUsers[aa];
      }
      if (ba && h.get('chat_thread_typing_indicator_animated')) {
        var da = j.scry(ba, "._510u");
        for (var ea = 0, fa = da.length; ea < fa; ea++) o.unmountComponentAtNode(da[ea]);
      }
      ba && j.remove(ba);
    },
    _slideOutUserBubble: function(aa) {
      var ba = this._activeUsers[aa];
      if (this._getCurrentAnimation(aa, ba)) {
        return;
      } else if (ba) {
        p.set(ba, 'overflow', 'hidden');
        var ca = (new g(ba)).from('opacity', 1).from('height', ba.offsetHeight).to('height', 0).to('opacity', 0).ease(g.ease.end).duration(250).ondone(this._removeUserBubble.bind(this, aa, ba)).go();
        this._animations[aa] = {
          animation: ca,
          elem: ba
        };
      }
    },
    _getCurrentAnimation: function(aa, ba) {
      if (this._animations[aa] && (!ba || this._animations[aa].elem === ba)) return this._animations[aa];
    }
  });
  e.exports = z;
}, null);
__d("MercuryMessageList", ["ImmutableObject", "LogHistory", "OrderedMap", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j) {
  'use strict';
  var k = h.getInstance('mercury_message_list');

  function l(q) {
    this.$MercuryMessageList0 = n(q ? m(q) : []);
  }
  l.prototype.append = function(q) {
    this.$MercuryMessageList0 = this.$MercuryMessageList0.merge(n(m(q)));
    p('append', q);
  };
  l.prototype.prepend = function(q) {
    this.$MercuryMessageList0 = n(m(q)).merge(this.$MercuryMessageList0);
    p('prepend', q);
  };
  l.prototype.update = function(q) {
    var r = q.filter(function(s) {
      return this.contains(s);
    }.bind(this));
    if (r.length === 0) return;
    this.$MercuryMessageList0 = this.$MercuryMessageList0.merge(n(m(r)));
    p('update', q);
  };
  l.prototype.reorder = function(q) {
    this.$MercuryMessageList0 = n(q.map(function(r) {
      var s = this.$MercuryMessageList0.get(r.message_id);
      if (!s || s.timestamp != r.timestamp || s.is_cleared != r.is_cleared) return new g(r);
      return s;
    }.bind(this)));
    p('reorder', q);
  };
  l.prototype.hasReachedClearedMessages = function() {
    var q = this.messageAt(0);
    return !!(q && q.is_cleared);
  };
  l.prototype.messageAt = function(q) {
    var r = this.$MercuryMessageList0.keyAtIndex(q);
    return r ? this.$MercuryMessageList0.get(r) : (void 0);
  };
  l.prototype.contains = function(q) {
    return this.$MercuryMessageList0.indexOfKey(o(q)) !== (void 0);
  };
  l.prototype.toArray = function() {
    return this.$MercuryMessageList0.toArray();
  };
  l.prototype.toOrderedMap = function() {
    return this.$MercuryMessageList0;
  };

  function m(q) {
    return q.map(function(r) {
      return new g(r);
    });
  }

  function n(q) {
    return i.fromArray(q, o);
  }

  function o(q) {
    return q.message_id;
  }

  function p(event, q) {
    j(function() {
      k.debug(event, {
        messageIDs: q.map(function(r) {
          return r.message_id;
        })
      });
    }, 0);
  }
  e.exports = l;
}, null);
__d("MercuryMessageStore", ["MercuryAPIArgsSource", "LogHistory", "MercuryViewer", "MercuryMessageList", "SubscriptionsHandler", "MercuryThreadlistConstants", "copyProperties", "merge", "mixInEventEmitter", "setTimeoutAcrossTransitions", "MercuryMessages", "MercuryThreadInformer", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  'use strict';
  var q = b('MercuryMessages').get(),
    r = b('MercuryThreadInformer').get(),
    s = b('MercuryThreads').get(),
    t = h.getInstance('mercury_message_store');

  function u(w, x) {
    this.$MercuryMessageStore0 = w;
    this.$MercuryMessageStore1 = new j();
    this.$MercuryMessageStore2 = 1;
    this.$MercuryMessageStore3 = null;
    this.$MercuryMessageStore4 = 0;
    this.$MercuryMessageStore5 = x || l.RECENT_MESSAGES_LIMIT;
    this.$MercuryMessageStore6 = new k();
    this.$MercuryMessageStore6.addSubscriptions(r.subscribe('messages-received', function(y, z) {
      return this.$MercuryMessageStore8(z);
    }.bind(this)), r.subscribe('messages-updated', function(y, z) {
      return z[this.$MercuryMessageStore0] && this.$MercuryMessageStore9(z[this.$MercuryMessageStore0]);
    }.bind(this)), r.subscribe('messages-reordered', function(y, z) {
      return z[this.$MercuryMessageStore0] && this.$MercuryMessageStorea();
    }.bind(this)));
    t.debug('constructed', {
      threadID: this.$MercuryMessageStore0
    });
    this.$MercuryMessageStoreb();
  }
  u.prototype.setNewThreadID = function(w) {
    this.$MercuryMessageStorec = w;
  };
  u.prototype.destroy = function() {
    this.$MercuryMessageStore6 && this.$MercuryMessageStore6.release();
    t.debug('destroyed', {
      threadID: this.$MercuryMessageStore0
    });
  };
  u.prototype.subscribe = function(w) {
    return this.addRetroactiveListener('updated', w);
  };
  u.prototype.fetchMoreMessages = function() {
    if (q.hasLoadedExactlyNMessages(this.$MercuryMessageStore0, this.$MercuryMessageStore4) && q.hasLoadedAllMessages(this.$MercuryMessageStore0)) return false;
    if (s.isNewEmptyLocalThread(this.$MercuryMessageStore0)) return false;
    if (this.$MercuryMessageStore1.hasReachedClearedMessages()) return false;
    return this.$MercuryMessageStoreb();
  };
  u.prototype.$MercuryMessageStoreb = function() {
    var w = this.$MercuryMessageStore4 + this.$MercuryMessageStore5 * this.$MercuryMessageStore2;
    t.debug('fetching', {
      threadID: this.$MercuryMessageStore0,
      limit: w
    });
    q.getThreadMessagesRange(this.$MercuryMessageStore0, 0, w, this.$MercuryMessageStored.bind(this), null, g.MERCURY);
    if (this.$MercuryMessageStore2 < 10) this.$MercuryMessageStore2 += 1;
    if (q.hasLoadedNMessages(this.$MercuryMessageStore0, w)) {
      this.$MercuryMessageStorea();
      return false;
    }
    return true;
  };
  u.prototype.$MercuryMessageStored = function(w) {
    if (w && w.length) {
      this.$MercuryMessageStore3 = w[0].timestamp;
      this.$MercuryMessageStore4 = w.length;
      t.debug('fetched', {
        threadID: this.$MercuryMessageStore0,
        earliestMessageTimestamp: this.$MercuryMessageStore3,
        count: this.$MercuryMessageStore4
      });
    } else if (w && !w.length && !this.$MercuryMessageStore4) this.$MercuryMessageStoree(u.THREAD_IS_EMPTY);
  };
  u.prototype.$MercuryMessageStore8 = function(w) {
    var x = [],
      y = w[this.$MercuryMessageStore0];
    if (y && y.length) x = x.concat(y);
    if (this.$MercuryMessageStorec) {
      var z = w[this.$MercuryMessageStorec];
      if (z && z.length) {
        x = x.concat(z);
        this.$MercuryMessageStorec = null;
      }
    }
    if (x.length) {
      this.$MercuryMessageStore1.append(x);
      this.$MercuryMessageStore4 += x.length;
      var aa = x.every(function(ba) {
        return ba.author != i.getID();
      });
      this.$MercuryMessageStoree(u.MESSAGES_RECEIVED, {
        allFromOthers: aa
      });
    }
  };
  u.prototype.$MercuryMessageStore9 = function(w) {
    this.$MercuryMessageStore1.update(q.getMessagesFromIDs(Object.keys(w)));
    this.$MercuryMessageStoref();
    this.$MercuryMessageStoree(u.MESSAGES_CHANGED);
  };
  u.prototype.$MercuryMessageStorea = function() {
    if (!this.$MercuryMessageStore3) return;
    this.$MercuryMessageStore1.reorder(q.getThreadMessagesSinceTimestamp(this.$MercuryMessageStore0, this.$MercuryMessageStore3));
    this.$MercuryMessageStoref();
    this.$MercuryMessageStoree(u.MESSAGES_REORDERED);
  };
  u.prototype.$MercuryMessageStoree = function(w, x) {
    var y = this.$MercuryMessageStore1.toArray();
    this.releaseHeldEventType('updated');
    this.emitAndHold('updated', n({
      messages: y,
      eventType: w
    }, x));
    v(this.$MercuryMessageStore0, w, y);
  };
  u.prototype.$MercuryMessageStoref = function() {
    var w = this.$MercuryMessageStore1.messageAt(0);
    if (w) this.$MercuryMessageStore3 = w.timestamp;
  };

  function v(w, x, y) {
    p(function() {
      t.debug('update:' + x, {
        threadID: w,
        messageIDs: y.map(function(z) {
          return z.message_id;
        })
      });
    }, 0);
  }
  m(u, {
    MESSAGES_FETCHED: 'fetched',
    MESSAGES_CHANGED: 'changed',
    MESSAGES_RECEIVED: 'received',
    MESSAGES_REORDERED: 'reordered',
    THREAD_IS_EMPTY: 'thread-is-empty'
  });
  o(u, {
    updated: true
  });
  e.exports = u;
}, null);
__d("ChatTabOfficeStatus", ["fbt", "formatDate", "CSS"], function(a, b, c, d, e, f, g, h, i) {
  'use strict';
  var j = 1,
    k = 2,
    l = 3,
    m = {
      update: function(n, o) {
        if (!n || !o || !o.officeStatus) return;
        this._updateIcon(n, o);
        this._updateTooltip(n, o);
      },
      _updateIcon: function(n, o) {
        i.removeClass(n, 'officeStatusNone');
        i.removeClass(n, 'officeStatusAvailable');
        i.removeClass(n, 'officeStatusSporadic');
        i.removeClass(n, 'officeStatusOutOfOffice');
        switch (o.officeStatus) {
          case j:
            i.addClass(n, 'officeStatusAvailable');
            break;
          case k:
            i.addClass(n, 'officeStatusSporadic');
            break;
          case l:
            i.addClass(n, 'officeStatusOutOfOffice');
            break;
          default:
            i.addClass(n, 'officeStatusNone');
            break;
        }
      },
      _updateTooltip: function(n, o) {
        var p = '';
        switch (o.officeStatus) {
          case j:
            p += "AVAILABLE";
            p += '\n';
            break;
          case k:
            p += "SPORADIC";
            p += '\n';
            break;
          case l:
            p += "OFF THE GRID";
            p += '\n';
            break;
          default:
            p += "UNKNOWN";
            p += '\n';
            break;
        }
        if (o.officeStatusComment) p += o.officeStatusComment;
        if (o.officeStatusLocation) p += ' (' + o.officeStatusLocation + ')';
        if (o.officeStatusComment || o.officeStatusLocation) p += '\n';
        if (o.officeStatusEndDate) {
          var q = h(o.officeStatusEndDate, 'M d, Y');
          p += g._("Until {date}", [g.param("date", q)]);
        }
        n.setAttribute('aria-label', p);
        n.setAttribute('data-hover', 'tooltip');
      }
    };
  e.exports = m;
}, null);
__d("ChatTabTypeaheadRenderer", ["DOM", "CompactTypeaheadRenderer", "MercuryTypeaheadConstants", "MercuryThreadMetadataRawRenderer", "TypeaheadFacepile"], function(a, b, c, d, e, f, g, h, i, j, k) {
  function l(n, o) {
    switch (n.type) {
      case i.USER_TYPE:
      case i.PAGE_TYPE:
        return h(n, o);
      case i.THREAD_TYPE:
        return m(n, o);
      default:
        return g.create('div');
    }
  }

  function m(n, o) {
    var p = [],
      q = n.mercury_thread;
    if (q.image_src) {
      p.push(g.create('img', {
        alt: '',
        src: q.image_src
      }));
    } else {
      var r = n.participants_to_render.map(function(u) {
        return u.big_image_src || u.image_src;
      });
      if (r) {
        if (r instanceof Array) {
          r = k.render(r);
        } else r = g.create('img', {
          alt: '',
          src: r
        });
        p.push(r);
      }
    }
    var s = q.name,
      t = j.renderRawParticipantList(q.thread_id, n.participants_to_render, q.participants.length, {
        names_renderer: j.renderShortNames
      });
    p.push(g.create('span', {
      className: 'timestamp'
    }, q.timestamp_relative));
    p.push(g.create('span', {
      className: 'text'
    }, s));
    p.push(g.create('span', {
      className: 'subtext'
    }, t));
    return g.create('li', {
      className: 'node'
    }, p);
  }
  l.className = 'compact';
  e.exports = l;
}, null);
__d("ChatAddFriendsTabSheetRawRenderer", ["ChatConfig", "ChatTabTypeaheadRenderer", "ContextualTypeaheadView", "DOM", "Event", "MercuryConfig", "MercuryDataSourceWrapper", "MercuryTypeahead", "ChatTabTemplates", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var q = {
    render: function(r, s, t, u, v, w) {
      var x = w ? o[':fb:mercury:chat:tab-sheet:add-friends-empty-tab'].build() : o[':fb:mercury:chat:tab-sheet:add-friends'].build(),
        y = {};
      if (l.MercuryDataSourceProcessor) {
        y = w ? m.chat_typeahead_source : m.chat_add_people_source;
        y.setShowThreads(w);
      } else if (w) {
        y = m.source;
      } else y = m.add_people_source;
      var z = new n(y, i);
      z.setViewOption('renderer', h);
      z.setExcludedParticipantsFromThreadMeta(u);
      if (!w) {
        var aa = g.get('IsWorkUser', false) ? "Add co-workers to this chat" : "Add friends to this chat";
        z.setPlaceholder(aa);
      }
      z.build();
      j.replace(x.getNode('participantsTypeahead'), z.getElement());
      j.setContent(t, x.getRoot());
      z.getTokenizer().adjustWidth();
      var ba = x.getNode('participantsTypeahead').getAttribute('data-labelid'),
        ca = j.scry(z.getElement(), 'input[type="text"]')[0];
      if (ca)
        if (ba) {
          ca.setAttribute('aria-labelledby', ba);
        } else ca.setAttribute('aria-label', "To");
      z.focus();
      if (!w) {
        var da = function() {
          var ea = z.getSelectedParticipantIDs();
          if (ea.length) v(ea);
          s.close(r);
        };
        k.listen(x.getNode('doneButton'), 'click', da);
        z.subscribe('tokens-return', function() {
          if (z.getTokens().length) da();
        });
      }
      return z;
    }
  };
  e.exports = q;
}, null);
__d("MultiChatController", ["AsyncSignal", "ChatOpenTab", "copyProperties", "Form", "MercuryIDs", "MercuryLocalIDs", "MercuryServerRequests", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = b('MercuryServerRequests').get(),
    n = b('MercuryThreads').get();

  function o() {}
  i(o, {
    subscribe: function(p, q) {
      p.subscribe('confirm', function() {
        this.createGroupThreadFromChooserDialog(p, q);
      }.bind(this));
    },
    createGroupThreadFromChooserDialog: function(p, q) {
      var r = j.serialize(p.getRoot()),
        s = JSON.parse(r.profileChooserItems),
        t = [];
      for (var u in s)
        if (s[u]) t.push(u);
      var v = o.createThreadForFBIDs(t);
      m.subscribe('update-thread-ids', function(w, x) {
        for (var y in x)
          if (x[y] == v) new g('/ajax/groups/chat/log', {
            group_id: q,
            message_id: y
          }).send();
      });
      p.hide();
    },
    createThreadForTokens: function(p) {
      if (!p.length) return;
      var q = p.length === 1 ? k.getThreadIDFromUserID(p[0].split(':')[1]) : l.generateThreadID();
      n.createNewLocalThread(q, p);
      h.openThread(q, 'MultiChatController');
    },
    createThreadForFBIDs: function(p) {
      var q = [];
      for (var r = 0; r < p.length; r++) q.push("fbid:" + p[r]);
      return o.createThreadForTokens(q);
    }
  });
  e.exports = o;
}, null);
__d("ChatAddFriendsTabSheet", ["ArbiterMixin", "BanzaiLogger", "ChatAddFriendsTabSheetRawRenderer", "ChatOpenTab", "ChatTabActions", "MercuryConfig", "MercuryLogMessageType", "MercurySourceType", "MercuryTypeaheadConstants", "MultiChatController", "Style", "copyProperties", "MercuryMessageObject", "MercuryMessageActions", "MercuryThreadActions", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  var s = b('MercuryMessageObject').get(),
    t = b('MercuryMessageActions').get(),
    u = b('MercuryThreadActions').get(),
    v = b('MercuryThreads').get();

  function w(aa, ba, ca, da) {
    this._threadID = aa;
    this._rootElement = ba;
    this._sheetView = ca;
    this._typeahead = null;
    this._chatTabView = da;
  }
  r(w.prototype, g, {
    render: function() {
      v.getThreadMeta(this._threadID, function(aa) {
        var ba = aa.is_canonical_user ? x : y,
          ca = v.isNewEmptyLocalThread(this._threadID);
        this._typeahead = i.render(this, this._sheetView, this._rootElement, aa, ba.bind(null, aa), ca);
        this._typeahead.subscribe('tokens-changed', function() {
          if (l.MercuryDataSourceProcessor) {
            if (ca) z(this, this._typeahead, this._threadID, this._chatTabView);
          } else this.inform('chat/tokens-changed', {
            token_count: this._typeahead.getTokens().length
          });
        }.bind(this));
        this._typeahead.subscribe('resize', function() {
          this._sheetView.resize();
        }.bind(this));
      }.bind(this));
    },
    getParticipants: function() {
      if (!this._typeahead) return null;
      return this._typeahead.getSelectedParticipantIDs();
    },
    isPermanent: function() {
      return true;
    },
    isSheetWithInput: function() {
      return true;
    },
    getType: function() {
      return 'add_friends_type';
    },
    open: function() {
      this._sheetView.open(this);
    },
    close: function() {
      this._sheetView.close(this);
    },
    getHeight: function() {
      return q.get(this._rootElement, 'height');
    }
  });

  function x(aa, ba) {
    var ca = aa.participants;
    p.createThreadForTokens(ca.concat(ba));
  }

  function y(aa, ba) {
    var ca = aa.thread_id;
    if (v.isEmptyLocalThread(ca)) {
      u.addParticipants(ca, ba);
    } else t.send(s.constructLogMessageObject(n.CHAT_WEB, ca, m.SUBSCRIBE, {
      added_participants: ba
    }));
    j.openThread(ca, 'ChatAddFriendsTabSheet');
  }

  function z(aa, ba, ca, da) {
    var ea = ba.getTypeahead().getData(),
      fa = ba.getTokens(),
      ga = ba.getTypeahead().getCore();
    ga.getElement().removeAttribute('disabled');
    ea.setShowThreads(fa.length === 0);
    var ha = fa.length == 1 && fa[0].getInfo().render_type === o.THREAD_TYPE;
    if (ha) {
      var ia = fa[0].getInfo().mercury_thread;
      if (ia) {
        var ja = da._shareLinkUploader.getShareData(),
          ka = ja ? function(la) {
            return la.loadShareFromParams(ja.type, ja.params);
          } : null;
        j.openThread(ia.thread_fbid, 'openGroupChat', '', ka);
      }
      h.log('MercuryQueryResultsLoggerConfig', {
        event: 'chat_tab_group_thread_click'
      });
      k.closeTab(ca, 'open_group_chat');
    } else {
      if (fa.length == 1 && fa[0].getInfo().render_type === o.PAGE_TYPE) ga.getElement().setAttribute('disabled', 'disabled');
      h.log('MercuryQueryResultsLoggerConfig', {
        event: 'chat_tab_tokens_changed',
        chat_tab_tokens: fa.map(function(la) {
          return la.info.uid;
        })
      });
      aa.inform('chat/tokens-changed', {
        token_count: fa.length
      });
    }
  }
  e.exports = w;
}, null);
__d("ChatNameConversationTabSheetRawRenderer", ["DOM", "Event", "Input", "Keys", "ChatTabTemplates", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  "use strict";
  var m = {
    render: function(n, o, p, q, r, s) {
      var t = k[':fb:mercury:chat:tab-sheet:name-conversation'].build(),
        u = t.getNode('nameInput'),
        v = t.getNode('doneButton'),
        w = "Done",
        x = "Hide",
        y = q.name;
      if (y) {
        i.setValue(u, y);
      } else g.setContent(v, x);
      var z = function() {
        var aa = i.getValue(u);
        if (aa) r(aa);
        s();
        o.close(n);
      };
      h.listen(u, 'input', function() {
        g.setContent(v, i.getValue(u).length === 0 ? x : w);
      });
      h.listen(v, 'click', z);
      h.listen(u, 'keyup', function(aa) {
        if (aa.keyCode === j.RETURN) {
          z();
          return false;
        }
      });
      g.setContent(p, t.getRoot());
      !n.isAutomatic() && u.focus();
    }
  };
  e.exports = m;
}, null);
__d("ChatNameConversationTabSheet", ["AsyncRequest", "ChatNameConversationTabSheetRawRenderer", "MercuryAPIArgsSource", "MercuryLogMessageType", "MercurySourceType", "MercuryMessageObject", "MercuryMessageActions", "MercuryServerRequests", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = b('MercuryMessageObject').get(),
    m = b('MercuryMessageActions').get(),
    n = b('MercuryServerRequests').get(),
    o = b('MercuryThreads').get(),
    p = '/ajax/chat/multichat/name_conversation/dismiss.php',
    q = {};

  function r(s, t, u) {
    "use strict";
    this.$ChatNameConversationTabSheet0 = s;
    this.$ChatNameConversationTabSheet1 = t;
    this.$ChatNameConversationTabSheet2 = u;
    this.$ChatNameConversationTabSheet3 = false;
  }
  r.prototype.render = function() {
    "use strict";
    o.getThreadMeta(this.$ChatNameConversationTabSheet0, function(s) {
      h.render(this, this.$ChatNameConversationTabSheet2, this.$ChatNameConversationTabSheet1, s, this.$ChatNameConversationTabSheet4.bind(null, s), this.$ChatNameConversationTabSheet5.bind(this, s));
      this.$ChatNameConversationTabSheet2.resize();
    }.bind(this));
  };
  r.prototype.isPermanent = function() {
    "use strict";
    return true;
  };
  r.prototype.isSheetWithInput = function() {
    "use strict";
    return true;
  };
  r.prototype.getType = function() {
    "use strict";
    return 'name_conversation_type';
  };
  r.prototype.open = function(s) {
    "use strict";
    this.$ChatNameConversationTabSheet3 = s;
    if (!(this.$ChatNameConversationTabSheet3 && this.$ChatNameConversationTabSheet6())) this.$ChatNameConversationTabSheet2.open(this);
  };
  r.prototype.close = function() {
    "use strict";
    this.$ChatNameConversationTabSheet2.close(this);
  };
  r.prototype.isAutomatic = function() {
    "use strict";
    return this.$ChatNameConversationTabSheet3;
  };
  r.prototype.$ChatNameConversationTabSheet6 = function() {
    "use strict";
    return !!q[this.$ChatNameConversationTabSheet0];
  };
  r.prototype.$ChatNameConversationTabSheet7 = function() {
    "use strict";
    q[this.$ChatNameConversationTabSheet0] = true;
  };
  r.prototype.$ChatNameConversationTabSheet5 = function(s) {
    "use strict";
    if (!s.name_conversation_sheet_dismissed || !this.$ChatNameConversationTabSheet6()) {
      this.$ChatNameConversationTabSheet7();
      n.getServerThreadID(s.thread_id, function(t) {
        new g(p).setData({
          thread_fbid: t
        }).send();
      });
    }
  };
  r.prototype.$ChatNameConversationTabSheet4 = function(s, t) {
    "use strict";
    var u = s.name;
    if ((t || u) && (t != u)) m.send(l.constructLogMessageObject(k.CHAT_WEB, s.thread_id, j.THREAD_NAME, {
      name: t
    }), null, i.CHAT);
  };
  e.exports = r;
}, null);
__d("ChatNewMessagesTabSheet", ["Event", "ArbiterMixin", "DOM", "ChatTabTemplates", "copyProperties", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  function m(n, o, p) {
    this._threadID = n;
    this._rootElement = o;
    this._sheetView = p;
  }
  k(m.prototype, h, {
    render: function() {
      var n = j[':fb:mercury:chat:tab-sheet:clickable-message-icon-sheet'].build();
      i.setContent(n.getNode('text'), "Scroll down to see new messages.");
      i.setContent(this._rootElement, n.getRoot());
      g.listen(n.getRoot(), 'click', function() {
        this.inform('clicked', this._threadID);
      }.bind(this));
    },
    isPermanent: function() {
      return true;
    },
    isSheetWithInput: function() {
      return true;
    },
    getType: function() {
      return 'new_messages_type';
    },
    open: function() {
      this._sheetView.open(this);
    },
    close: function() {
      this._sheetView.close(this);
    }
  });
  e.exports = m;
}, null);
__d("ChatNoRecipientsTabSheet", ["DOM", "MercuryViewer", "ChatTabTemplates", "copyProperties", "fbt", "MercuryThreads", "MercuryThreadInformer"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = b('MercuryThreads').get(),
    m = b('MercuryThreadInformer').get();

  function n(o, p, q) {
    this._threadID = o;
    this._rootElement = p;
    this._sheetView = q;
    m.subscribe('threads-updated', this._handleThreadsUpdated.bind(this));
  }
  j(n.prototype, {
    render: function() {
      var o = i[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build();
      g.setContent(o.getNode('text'), "Everyone has left the conversation.");
      g.setContent(this._rootElement, o.getRoot());
    },
    isPermanent: function() {
      return true;
    },
    getType: function() {
      return 'no_recipients_type';
    },
    _handleThreadsUpdated: function() {
      l.getThreadMeta(this._threadID, function(o) {
        var p = h.getID(),
          q = o.participants.filter(function(r) {
            return r != p;
          });
        if (q.length < 1 && !l.isNewEmptyLocalThread(this._threadID)) {
          this._sheetView.open(this);
        } else this._sheetView.close(this);
      }.bind(this));
    }
  });
  e.exports = n;
}, null);
__d("ChatOfflineTabSheet", ["ChatPrivacyActionController", "ChatVisibility", "CSS", "DOM", "JSXDOM", "Event", "JSLogger", "MercuryIDs", "MercuryParticipants", "ChatTabTemplates", "copyProperties", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  function t(u, v, w) {
    this._rootElement = v;
    this._sheetView = w;
    this._logger = m.create('blackbird');
    this._canonicalUser = n.getUserIDFromThreadID(u);
    if (this._canonicalUser) this._privacyActionController = new g(this._canonicalUser, this._handlePrivacyChange.bind(this));
  }
  q(t.prototype, {
    render: function() {
      if (!this._canonicalUser) {
        this._logger.error('offline_sheet_open_with_non_friend');
        return;
      }
      var u = p[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build(),
        v = 'fbid:' + this._canonicalUser;
      o.get(v, function(w) {
        var x = 'fbChatGoOnlineLink',
          y = k.a({
            href: "#",
            className: x
          }, "turn on chat"),
          z = s._("To chat with {name} and other friends, {link}.", [s.param("name", w.short_name), s.param("link", y)]);
        j.setContent(u.getNode('text'), z);
        i.addClass(u.getRoot(), "_1sk1");
        j.setContent(this._rootElement, u.getRoot());
        l.listen(this._rootElement, 'click', function(event) {
          if (i.hasClass(event.getTarget(), x)) {
            if (h.isOnline()) this._logger.error('tab_sheet_already_online');
            this._privacyActionController.togglePrivacy();
            this._logger.log('tab_sheet_go_online', {
              tab_id: this._canonicalUser
            });
            return false;
          }
        }.bind(this));
        this._sheetView.resize();
      }.bind(this));
    },
    _handlePrivacyChange: function(u) {
      if (!this._canonicalUser) this._logger.error('user_blocked_sheet_privacy_changed_non_friend');
      switch (u) {
        case g.OFFLINE:
          this._sheetView.open(this);
          break;
        case g.NORMAL:
        case g.BLOCKED:
          this._sheetView.close(this);
          break;
      }
    },
    isPermanent: function() {
      return true;
    },
    getType: function() {
      return 'offline_type';
    },
    destroy: function() {
      this._privacyActionController && this._privacyActionController.destroy();
    }
  });
  e.exports = t;
}, null);
__d("ChatUploadWarningTabSheet", ["DOM", "ChatTabTemplates", "fbt", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
  function k(l, m, n) {
    this._threadID = l;
    this._rootElement = m;
    this._sheetView = n;
  }
  j(k.prototype, {
    render: function() {
      var l = h[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build();
      g.setContent(l.getNode('text'), "Please wait until the upload is complete before you send your message.");
      g.setContent(this._rootElement, l.getRoot());
    },
    isPermanent: function() {
      return false;
    },
    getType: function() {
      return 'upload_warning_type';
    },
    open: function() {
      this._sheetView.open(this);
    },
    close: function() {
      this._sheetView.close(this);
    }
  });
  e.exports = k;
}, null);
__d("ChatReadOnlyTabSheet", ["React", "MercuryReadOnlyReason", "cx", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i) {
  var j = b('MercuryThreads').get();

  function k(l, m, n) {
    "use strict";
    this.$ChatReadOnlyTabSheet0 = l;
    this.$ChatReadOnlyTabSheet1 = m;
    this.$ChatReadOnlyTabSheet2 = n;
  }
  k.prototype.render = function() {
    "use strict";
    var l = h.getReason(j.getThreadMetaNow(this.$ChatReadOnlyTabSheet0));
    g.render(g.createElement("div", {
      className: "_87-"
    }, l), this.$ChatReadOnlyTabSheet1);
  };
  k.prototype.isPermanent = function() {
    "use strict";
    return false;
  };
  k.prototype.getType = function() {
    "use strict";
    return 'chat-thread-is-read-only';
  };
  k.prototype.open = function() {
    "use strict";
    this.$ChatReadOnlyTabSheet2.open(this);
  };
  k.prototype.close = function() {
    "use strict";
    this.$ChatReadOnlyTabSheet2.open(this);
  };
  e.exports = k;
}, null);
__d("ChatThreadIsMutedTabSheet", ["Event", "ArbiterMixin", "DOM", "ChatTabTemplates", "copyProperties", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  function m(n, o, p) {
    this._threadID = n;
    this._rootElement = o;
    this._sheetView = p;
  }
  k(m.prototype, h, {
    render: function() {
      var n = j[':fb:mercury:chat:tab-sheet:message-mute-sheet'].build();
      i.setContent(n.getNode('text'), "This conversation is muted. Chat tabs will not pop up for it and push notifications are off.");
      i.setContent(this._rootElement, n.getRoot());
      g.listen(n.getNode('unmuteButton'), 'click', function() {
        this.inform('clicked', this._threadID);
      }.bind(this));
    },
    isPermanent: function() {
      return false;
    },
    getType: function() {
      return 'chat-thread-is-muted';
    },
    open: function() {
      this._sheetView.open(this);
    },
    close: function() {
      this._sheetView.close(this);
    }
  });
  e.exports = m;
}, null);
__d("ChatEmployeeAwaySheet", ["ArbiterMixin", "DOM", "mixin", "ChatTabTemplates"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = i(g);
  for (var l in k)
    if (k.hasOwnProperty(l)) n[l] = k[l];
  var m = k === null ? null : k.prototype;
  n.prototype = Object.create(m);
  n.prototype.constructor = n;
  n.__superConstructor__ = k;

  function n(o, p, q) {
    "use strict";
    this.$ChatEmployeeAwaySheet0 = o;
    this.$ChatEmployeeAwaySheet1 = p;
    this.$ChatEmployeeAwaySheet2 = q;
  }
  n.prototype.render = function() {
    "use strict";
    var o = j[':fb:mercury:employee-away-sheet'].build();
    h.setContent(this.$ChatEmployeeAwaySheet1, o.getRoot());
  };
  n.prototype.isPermanent = function() {
    "use strict";
    return true;
  };
  n.prototype.getType = function() {
    "use strict";
    return 'employee-away';
  };
  n.prototype.open = function() {
    "use strict";
    this.$ChatEmployeeAwaySheet2.open(this);
  };
  n.prototype.close = function() {
    "use strict";
    this.$ChatEmployeeAwaySheet2.close(this);
  };
  e.exports = n;
}, null);
__d("ChatUserBlockedTabSheet", ["CSS", "ChatPrivacyActionController", "DOM", "Event", "GenderConst", "JSLogger", "MercuryIDs", "MercuryParticipants", "ChatTabTemplates", "copyProperties", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  function s(t, u, v) {
    this._rootElement = u;
    this._sheetView = v;
    this._logger = l.create('blackbird');
    this._canonicalUser = m.getUserIDFromThreadID(t);
    if (this._canonicalUser) this._privacyActionController = new h(this._canonicalUser, this._handlePrivacyChange.bind(this));
  }
  p(s.prototype, {
    render: function() {
      if (!this._canonicalUser) {
        this._logger.error('user_blocked_sheet_open_with_non_friend');
        return;
      }
      var t = o[':fb:mercury:chat:tab-sheet:user-blocked'].build(),
        u = 'fbid:' + this._canonicalUser;
      n.get(u, function(v) {
        var w = null;
        switch (v.gender) {
          case k.FEMALE_SINGULAR:
          case k.FEMALE_SINGULAR_GUESS:
            w = r._("You turned off chat for {name} but you can still send her a message.", [r.param("name", v.short_name)]);
            break;
          case k.MALE_SINGULAR:
          case k.MALE_SINGULAR_GUESS:
            w = r._("You turned off chat for {name} but you can still send him a message.", [r.param("name", v.short_name)]);
            break;
          default:
            w = r._("You turned off chat for {name} but you can still send them a message.", [r.param("name", v.short_name)]);
        }
        i.setContent(t.getNode('text'), w + ' ');
        var x = r._("Turn on chat for {name}?", [r.param("name", v.short_name)]);
        i.setContent(t.getNode('actionLink'), x);
        g.addClass(t.getRoot(), "_1sk0");
        i.setContent(this._rootElement, t.getRoot());
        j.listen(t.getNode('actionLink'), 'click', this._privacyActionController.togglePrivacy.bind(this._privacyActionController));
        this._sheetView.resize();
      }.bind(this));
    },
    _handlePrivacyChange: function(t) {
      if (!this._canonicalUser) this._logger.error('user_blocked_sheet_privacy_changed_non_friend');
      if (t == h.BLOCKED) {
        var u = 'fbid:' + this._canonicalUser;
        n.get(u, function(v) {
          if (v.is_friend) {
            this._sheetView.open(this);
          } else this._sheetView.close(this);
        }.bind(this));
        return;
      }
      this._sheetView.close(this);
    },
    isPermanent: function() {
      return true;
    },
    getType: function() {
      return 'user_blocked_type';
    },
    destroy: function() {
      this._privacyActionController && this._privacyActionController.destroy();
    }
  });
  e.exports = s;
}, null);
__d("ChatTabSheetController", ["ChatAddFriendsTabSheet", "ChatNameConversationTabSheet", "ChatNewMessagesTabSheet", "ChatNoRecipientsTabSheet", "ChatOfflineTabSheet", "ChatUploadWarningTabSheet", "ChatReadOnlyTabSheet", "ChatThreadIsMutedTabSheet", "ChatEmployeeAwaySheet", "ChatUserBlockedTabSheet", "MercuryIDs", "MercurySheetView", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  var t = function(u, v, w, x) {
    this._sheetView = new r(u, v, w);
    this._addFriendsTabSheet = new g(u, v, this._sheetView, x);
    this._nameConversationTabSheet = new h(u, v, this._sheetView);
    this._userBlockedTabSheet = new p(u, v, this._sheetView);
    this._offlineTabSheet = new k(u, v, this._sheetView);
    this._newMessagesTabSheet = new i(u, v, this._sheetView);
    this._uploadWarningTabSheet = new l(u, v, this._sheetView);
    this._threadIsMutedTabSheet = new n(u, v, this._sheetView);
    this._employeeAwaySheet = new o(u, v, this._sheetView);
    this._readOnlyTabSheet = new m(u, v, this._sheetView);
    if (!q.getUserIDFromThreadID(u)) this._noRecipientsTabSheet = new j(u, v, this._sheetView);
  };
  s(t.prototype, {
    openAddFriendsSheet: function() {
      this._addFriendsTabSheet.open();
    },
    getAddFriendsTabSheet: function() {
      return this._addFriendsTabSheet;
    },
    getAddFriendsParticipants: function() {
      var u = this._addFriendsTabSheet.getParticipants();
      this._addFriendsTabSheet.close();
      return u;
    },
    openNameConversationSheet: function(u) {
      this._nameConversationTabSheet.open(u);
    },
    openReadOnlySheet: function() {
      this._readOnlyTabSheet.open();
    },
    openNewMessagesSheet: function() {
      this._newMessagesTabSheet.open();
    },
    openUploadWarningTabSheet: function() {
      this._uploadWarningTabSheet.open();
    },
    openThreadIsMutedTabSheet: function() {
      this._threadIsMutedTabSheet.open();
    },
    openEmployeeAwaySheet: function() {
      this._employeeAwaySheet.open();
    },
    closeAutomaticNameConversationSheet: function() {
      if (this._nameConversationTabSheet.isAutomatic()) this._nameConversationTabSheet.close();
    },
    closeThreadIsMutedTabSheet: function() {
      this._threadIsMutedTabSheet.close();
    },
    closeNewMessagesSheet: function() {
      this._newMessagesTabSheet.close();
    },
    closeUploadWarningTabSheet: function() {
      this._uploadWarningTabSheet.close();
    },
    onClickNewMessagesSheet: function(u) {
      this._newMessageClickSub = this._newMessagesTabSheet.subscribe('clicked', u);
    },
    onClickThreadIsMutedSheet: function(u) {
      this._threadIsMutedClickSub = this._threadIsMutedTabSheet.subscribe('clicked', u);
    },
    onResize: function(u) {
      this._sheetView.subscribe('resize', u);
    },
    onTokensChanged: function(u) {
      this._addFriendsTabSheet.subscribe('chat/tokens-changed', u);
    },
    destroy: function() {
      this._sheetView && this._sheetView.destroy();
      this._offlineTabSheet && this._offlineTabSheet.destroy();
      this._userBlockedTabSheet && this._userBlockedTabSheet.destroy();
      this._newMessageClickSub && this._newMessageClickSub.unsubscribe();
      this._threadIsMutedClickSub && this._threadIsMutedClickSub.unsubscribe();
    }
  });
  e.exports = t;
}, null);
__d("ChatTitleLink.react", ["Link.react", "MercuryThreadTitle.react", "React", "TrackingNodes", "cx"], function(a, b, c, d, e, f, g, h, i, j, k) {
  "use strict";
  var l = i.createClass({
    displayName: "ChatTitleLink",
    propTypes: {
      href: i.PropTypes.string,
      isNewThread: i.PropTypes.bool,
      thread: i.PropTypes.object,
      viewer: i.PropTypes.string
    },
    getDefaultProps: function() {
      return {
        href: null
      };
    },
    getTitle: function() {
      return this.refs.threadTitle.getTitle();
    },
    render: function() {
      if (!this.props.thread) return null;
      return (i.createElement(g, {
        "aria-level": "3",
        className: (("titlebarText") + (this.props.href === null ? ' ' + "noLink" : '')),
        "data-ft": j.getTrackingInfo(j.types.TITLE),
        "data-hover": "tooltip",
        href: this.props.href
      }, i.createElement(h, {
        ref: "threadTitle",
        isNewThread: this.props.isNewThread,
        thread: this.props.thread,
        useAndSeparator: true,
        useShortName: !this.props.thread.is_canonical,
        viewer: this.props.viewer
      })));
    }
  });
  e.exports = l;
}, null);
__d("ChatVideoCallButton.react", ["Link.react", "ReactComponentWithPureRenderMixin", "React", "TrackingNodes", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  "use strict";
  var m = i.createClass({
    displayName: "ChatVideoCallButton",
    mixins: [h],
    propTypes: {
      onClick: i.PropTypes.func,
      onKeyUp: i.PropTypes.func,
      shown: i.PropTypes.bool,
      tooltipLabel: i.PropTypes.string
    },
    getDefaultProps: function() {
      return {
        tooltipLabel: ("Start a video call")
      };
    },
    render: function() {
      var n = j.getTrackingInfo(j.types.VIDEOCHAT),
        o = JSON.stringify({
          videochat: 'call_clicked_bhat_tab'
        });
      return (i.createElement(g, {
        "aria-label": this.props.tooltipLabel,
        className: (("videoicon") + (' ' + "button") + (!this.props.shown ? ' ' + "hidden_elem" : '')),
        "data-ft": n,
        "data-gt": o,
        "data-hover": "tooltip",
        "data-tooltip-position": "above",
        onClick: this.props.onClick,
        onKeyUp: this.props.onKeyUp
      }));
    }
  });
  e.exports = m;
}, null);
__d("EmoticonUtils", ["EmoticonsList", "Parent"], function(a, b, c, d, e, f, g, h) {
  var i = 'emoticon_',
    j = g.symbols,
    k = {
      getEmoteFromTarget: function(l) {
        var m = h.byClass(l, 'emoticon');
        if (!m) return null;
        var n = null;
        m.className.split(' ').forEach(function(o) {
          if (o.startsWith(i)) n = o.substring(i.length);
        });
        return j[n] || null;
      },
      insertEmoticon: function(l, m, n) {
        var o = m.substring(0, n.start),
          p = m.substring(n.end);
        if (n.start > 0 && !o.endsWith(' ')) l = ' ' + l;
        if (!p.startsWith(' ')) l += ' ';
        var q = o + l + p;
        n.start += l.length;
        n.end = n.start;
        return {
          result: q,
          start: n.start,
          end: n.end
        };
      }
    };
  e.exports = k;
}, null);
__d("MercurySharePreview.react", ["AsyncRequest", "LeftRight.react", "LoadingIndicator.react", "MercuryFallbackShareAttachment.react", "MercuryShareAttachmentRenderLocations", "React", "XUICloseButton.react", "cx", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  var p = l.createClass({
    displayName: "MercurySharePreview",
    propTypes: {
      imageSize: l.PropTypes.shape({
        width: l.PropTypes.number.isRequired,
        height: l.PropTypes.number.isRequired
      }).isRequired,
      location: l.PropTypes.oneOf(k.getValues()).isRequired,
      share: l.PropTypes.shape({
        params: l.PropTypes.array,
        type: l.PropTypes.number
      }),
      uri: l.PropTypes.string,
      onClose: l.PropTypes.func,
      onUpdate: l.PropTypes.func
    },
    getInitialState: function() {
      return {
        attachmentData: null,
        loading: false
      };
    },
    componentWillMount: function() {
      this._requestID = 1337;
      this._currentRequest = null;
    },
    componentWillUnmount: function() {
      this._reset();
    },
    componentWillReceiveProps: function(q) {
      o(!(q.share && q.uri));
      if (!q.share && !q.uri) return this._reset();
      var r = this.state.attachmentData || this.state.loading;
      if (q.share && !r) {
        this._loadFromShare(q.share);
      } else if (q.uri && !(r && this.props.uri == q.uri)) this._loadFromURI(q.uri);
    },
    componentDidUpdate: function(q, r) {
      this.props.onUpdate && this.props.onUpdate(this);
    },
    getShareData: function() {
      return this.state.attachmentData && this.state.attachmentData.share_data;
    },
    isLoading: function() {
      return this.state.loading;
    },
    _loadFromShare: function(q) {
      this._currentRequest = new g().setURI('/message_share_attachment/fromParams/').setData({
        image_height: this.props.imageSize.height,
        image_width: this.props.imageSize.width,
        share_params: q.params,
        share_type: q.type
      }).setHandler(this._onShareLoaded.bind(this, this._getNextRequestID()));
      this._currentRequest.send();
      this.setState({
        loading: true,
        attachmentData: null
      });
    },
    _loadFromURI: function(q) {
      this._currentRequest = new g().setURI('/message_share_attachment/fromURI/').setData({
        image_height: this.props.imageSize.height,
        image_width: this.props.imageSize.width,
        uri: q
      }).setHandler(this._onShareLoaded.bind(this, this._getNextRequestID()));
      this._currentRequest.send();
      this.setState({
        loading: true,
        attachmentData: null
      });
    },
    _getNextRequestID: function() {
      return (++this._requestID);
    },
    _getCurrentRequestID: function() {
      return this._requestID;
    },
    _onShareLoaded: function(q, r) {
      if (this._getCurrentRequestID() !== q) return;
      this.setState({
        loading: false,
        attachmentData: r.payload
      });
    },
    _close: function() {
      this._reset();
      this.props.onClose && this.props.onClose();
    },
    _reset: function() {
      this._getNextRequestID();
      this._currentRequest && this._currentRequest.abort();
      this._currentRequest = null;
      this.setState({
        loading: false,
        attachmentData: null
      });
    },
    render: function() {
      var q = (("_tig") + (' ' + "_tih"));
      if (this.state.loading) return (l.createElement(h, {
        direction: h.DIRECTION.right,
        className: q
      }, l.createElement(i, {
        className: "_tii",
        size: "large",
        color: "white"
      }), l.createElement(m, {
        className: "_tij",
        shade: "dark",
        size: "small",
        onClick: this._close
      })));
      var r = this.state.attachmentData;
      if (!r) return l.createElement("div", null);
      return (l.createElement(j, {
        attachment: r,
        location: k.CHAT_PREVIEW
      }, l.createElement(m, {
        className: "_tij",
        shade: "dark",
        size: "small",
        onClick: this._close
      })));
    }
  });
  e.exports = p;
}, null);
__d("SelectionPosition", ["Event", "InputSelection", "SubscriptionsHandler", "merge"], function(a, b, c, d, e, f, g, h, i, j) {
  function k(l) {
    "use strict";
    this.$SelectionPosition0 = l;
    this.$SelectionPosition1 = {
      start: 0,
      end: 0
    };
    this.$SelectionPosition2 = new i();
    this.$SelectionPosition3 = false;
    this.updatePos();
    this.enable();
  }
  k.prototype.getPos = function() {
    "use strict";
    return j(this.$SelectionPosition1);
  };
  k.prototype.setPos = function(l, m) {
    "use strict";
    this.$SelectionPosition1 = {
      start: l,
      end: m
    };
    this.restore();
  };
  k.prototype.updatePos = function() {
    "use strict";
    this.$SelectionPosition1 = h.get(this.$SelectionPosition0);
  };
  k.prototype.restore = function() {
    "use strict";
    h.set(this.$SelectionPosition0, this.$SelectionPosition1.start, this.$SelectionPosition1.end);
  };
  k.prototype.enable = function() {
    "use strict";
    if (!this.$SelectionPosition3) {
      this.$SelectionPosition2.addSubscriptions(g.listen(this.$SelectionPosition0, 'keyup', this.updatePos.bind(this)), g.listen(this.$SelectionPosition0, 'click', this.updatePos.bind(this)));
      this.$SelectionPosition3 = true;
    }
  };
  k.prototype.disable = function() {
    "use strict";
    if (this.$SelectionPosition3) {
      this.$SelectionPosition2.release();
      this.$SelectionPosition3 = false;
    }
  };
  e.exports = k;
}, null);
__d("XStickerReplyNUXController", ["XController"], function(a, b, c, d, e, f) {
  e.exports = b("XController").create("\/stickers\/tooltip\/", {});
}, null);
__d("ChatTabView", ["Arbiter", "ArbiterMixin", "AsyncDialog", "AsyncRequest", "AsyncSignal", "AvailableListConstants", "BanzaiODS", "ChatAddToThreadButton.react", "ChatArchiveWarning.react", "ChatBehavior", "ChatCloseButton.react", "ChatConfig", "ChatContextualDialogController", "ChatEmployeeAwayWarning", "ChatOpenTab", "ChatPhotoUploader.react", "ChatPrivacyActionController", "ChatQuietLinks", "ChatShareLinkUploader", "ChatStickerButton.react", "ChatStickerTriggerController", "ChatTabActions", "ChatTabMenu.react", "ChatTabMessagesView", "ChatTabOfficeStatus", "ChatTabSheetController", "ChatTitleLink.react", "ChatVisibility", "ChatVideoCallButton.react", "MercuryConstants", "CurrentUser", "CSS", "CurrentLocale", "Dialog", "Dock", "DOM", "DOMEvent", "DOMQuery", "DragDropTarget", "EmoticonsList", "EmoticonUtils", "Event", "Focus", "ImmutableObject", "Input", "Keys", "Locale", "LogHistory", "MercuryIDs", "MercuryFileUploader", "MercuryLogMessageType", "MercuryParticipants", "MercuryShareAttachmentRenderLocations", "MercurySharePreview.react", "MercurySourceType", "MercuryThreadMetadataRawRenderer", "MercuryThreadMuter", "MercuryTypingAnimation.react", "MercuryTypingReceiver", "MercuryViewer", "NubController", "Parent", "PhotosUploadWaterfall", "PresencePrivacy", "PresenceStatus", "React", "Run", "SelectionPosition", "StickerActions", "StickerConfig", "StickerConstants", "StickersFlyout.react", "StickerState", "Style", "SubscriptionsHandler", "SyntheticMouseEvent", "ChatTabTemplates", "TextAreaControl", "Toggler", "Tooltip", "TypingDetectorController", "URLScraper", "URI", "UserAgent_DEPRECATED", "VideoCallCore", "WaterfallIDGenerator", "WebMessengerThreadPermalinks", "XStickerReplyNUXController", "copyProperties", "createCancelableFunction", "csx", "cx", "fbt", "getActiveElement", "isEmpty", "setIntervalAcrossTransitions", "ChatReactInput", "OrionTrigger", "MercuryMessageActions", "MercuryMessages", "MercuryMessageObject", "MercuryServerRequests", "MercuryThreadInformer", "MercuryThreadMetadataRenderer", "MercuryThreadActions", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc) {
  "use strict";
  var yc = b('ChatReactInput').module,
    zc = b('OrionTrigger').module,
    ad = b('MercuryMessageActions').get(),
    bd = b('MercuryMessages').get(),
    cd = b('MercuryMessageObject').get(),
    dd = b('MercuryServerRequests').get(),
    ed = b('MercuryThreadInformer').get(),
    fd = b('MercuryThreadMetadataRenderer').get(),
    gd = b('MercuryThreadActions').get(),
    hd = b('MercuryThreads').get(),
    id = /^\s*$/,
    jd = {},
    kd = null,
    ld, md = 10,
    nd = bb.getInstance('chat_tab_view');

  function od(je, ke) {
    var le = pa.create('div');
    ke = ke && ke.filter(function(oe) {
      return oe != nb.getID();
    });
    if (wc(ke)) return hc.remove(je);
    var me = ke.length,
      ne = me - md;
    if (ne > 1) ke = ke.slice(0, md);
    fb.getMulti(ke, function(oe) {
      for (var pe in oe) {
        var qe = oe[pe],
          re = ec[':fb:mercury:chat:multichat-tooltip-item'].build();
        pa.setContent(re.getNode('name'), qe.name);
        var se = cb.getUserIDFromParticipantID(pe),
          te = se && sb.get(se) == l.ACTIVE;
        la.conditionShow(re.getNode('icon'), te);
        la.conditionClass(re.getNode('name'), 'tooltipItemWithIcon', te);
        pa.appendContent(le, re.getRoot());
      }
      if (ne > 1) {
        var ue = uc._("and {number of hidden chat participants} more.", [uc.param("number of hidden chat participants", ne)]);
        pa.appendContent(le, pa.create('div', {}, ue));
      }
      hc.set(je, le, 'above');
    });
  }
  var pd = {},
    qd = null,
    rd = false;

  function sd(je, ke, le) {
    if (le) {
      pd[je] = ke;
      if (!qd) qd = xc(td, 600);
    } else {
      la.removeClass(ke, 'highlightTitle');
      delete pd[je];
    }
  }

  function td() {
    for (var je in pd) {
      var ke = pd[je];
      if (ke.parentNode) {
        la.conditionClass(ke, 'highlightTitle', rd);
      } else delete pd[je];
    }
    rd = !rd;
    if (!Object.keys(pd).length) {
      clearInterval(qd);
      qd = null;
    }
  }

  function ud(je) {
    var ke = cb.tokenize(je);
    switch (ke.type) {
      case 'user':
        return ec[':fb:mercury:chat:user-tab'].build();
    }
    return ec[':fb:mercury:chat:multichat-tab'].build();
  }

  function vd(je) {
    var ke = je._getInputValue(),
      le = je._fileUploader.getAttachments();
    if (be(je)) xd(je, ke, le, function(me) {
      var ne = je._fileUploader.getImageFiles();
      if (ne.length > 0) {
        me.image_ids = ne;
        me.has_attachment = true;
      }
      var oe = je._fileUploader.getVideoFiles();
      if (oe.length > 0) {
        me.video_ids = oe;
        me.has_attachment = true;
      }
      var pe = je._fileUploader.getAudioFiles();
      if (pe.length > 0) {
        me.audio_ids = pe;
        me.has_attachment = true;
      }
      var qe = je._fileUploader.getFiles();
      if (qe.length > 0) {
        me.file_ids = qe;
        me.has_attachment = true;
      }
      ad.send(me);
      je._fileUploader.removeAttachments();
      je._shareLinkUploader && je._shareLinkUploader.clear();
      if (je._sharePreview) je._sharePreview.setProps({
        share: null,
        uri: null
      });
      if (!r.get('chat_react_input')) je._getNode('input').value = '';
      je._typingDetector && je._typingDetector.resetState();
      je._messagesView && je._messagesView.setShouldScrollToBottom(true);
    });
  }

  function wd(je, ke) {
    if (ke === 0) return;
    ee(je, qb.POST_PUBLISHED, {
      count: ke
    });
    je._waterfallID = nc.generate();
  }

  function xd(je, ke, le, me) {
    hd.getThreadMeta(je._threadID, function(ne) {
      var oe = ib.CHAT_WEB;
      if (je._shareLinkUploader && je._shareLinkUploader.getAttachData() && je._shareLinkUploader.loadedFromFeed()) oe = ib.SAM_UFI;
      var pe = cd.constructUserGeneratedMessageObject(ke, oe, je._threadID);
      if (le.length > 0) {
        pe.has_attachment = true;
        pe.raw_attachments = le;
      }
      if (je._shareLinkUploader) {
        var qe = je._shareLinkUploader.getAttachData();
        if (qe) {
          pe.has_attachment = true;
          pe.content_attachment = qe;
        }
      }
      if (je._sharePreview) {
        var re = je._sharePreview.getShareData();
        if (re) {
          pe.has_attachment = true;
          pe.shareable_attachment = re;
        }
      }
      if (hd.isNewEmptyLocalThread(je._threadID)) {
        var se = je._sheetController.getAddFriendsParticipants();
        if (se === null || se.length === 0) return;
        se = se.filter(function(ue) {
          return ue != nb.getID();
        });
        if (se.length === 0) {
          pe.thread_id = cb.getThreadIDFromUserID(ka.getID());
        } else if (se.length === 1) {
          pe.thread_id = cb.getThreadIDFromParticipantID(se[0]);
        } else gd.addParticipants(je._threadID, se);
      }
      if (hd.isEmptyLocalThread(je._threadID)) {
        pe.message_id = cb.tokenize(je._threadID).value;
        var te = hd.getThreadMetaNow(ne.thread_id);
        pe.specific_to_list = Array.from(te.participants);
      }
      if (typeof pe != 'undefined') pe.signatureID = je._signatureID;
      pe.ui_push_phase = ja.UIPushPhase;
      me(pe);
      if (je._threadID !== pe.thread_id && !je._photoUploader.isUploading()) {
        ba.closeTab(je._threadID);
        u.openThread(pe.thread_id, 'ChatTabView');
      }
    });
  }

  function yd(je) {
    je._blocked = true;
    je._sheetController.openUploadWarningTabSheet();
  }

  function zd(je) {
    return (je._fileUploader.isUploading() || je._photoUploader.isUploading() || (je._sharePreview && je._sharePreview.isLoading()));
  }

  function ae(je) {
    return je._fileUploader.isUploading();
  }

  function be(je) {
    var ke = je._getInputValue();
    if (!id.test(ke)) return true;
    if (je._fileUploader.getAttachments().length > 0 || je._fileUploader.getImageFiles().length > 0 || je._fileUploader.getVideoFiles().length > 0 || je._fileUploader.getAudioFiles().length > 0 || je._fileUploader.getFiles().length > 0) return true;
    if (je._shareLinkUploader && je._shareLinkUploader.getAttachData()) return true;
    if (je._sharePreview && je._sharePreview.getShareData()) return true;
    return false;
  }

  function ce(je) {
    if (!je._blocked || ae(je)) return;
    je._blocked = false;
    vd(je);
    je._sheetController.closeUploadWarningTabSheet();
  }

  function de(je) {
    je._nubController.flyoutContentChanged();
    var ke = je._getNode('attachmentShelf');
    ke.scrollTop = ke.scrollHeight;
  }

  function ee(je, ke, le) {
    qb.sendSignal(qc({
      qn: je._waterfallID,
      step: ke,
      uploader: qb.APP_CHAT
    }, le || {}));
  }

  function fe(je, ke, le, me, ne) {
    if (ke) dd.ensureThreadIsFetched(ke);
    this._threadID = je;
    this._signatureID = le;
    this._eventListeners = [];
    this._tabTemplate = ud(je);
    this._tabElem = this._tabTemplate.getRoot();
    if (ne) {
      this.insertBefore(ne);
    } else this.appendTo(me);
    this._titlebar = this._getNode('nubFlyoutTitlebar');
    this._iconsContainerNode = this._getNode('iconsContainer');
    this._inputContainerNode = this._getNode('inputContainer');
    this._waterfallID = nc.generate();
    this._subscriptionsHandler = new cc();
    this._initializeAutoSendPhotoUploader();
    this._stickersFlyoutShown = false;
    var oe = ra.scry(this._tabElem, "._1ia");
    if (oe && oe.length > 0) {
      this._dropTarget = new sa(oe[0]);
      this._dropTarget.setOnFilesDropCallback(this._filesDropped.bind(this));
      this._dropTarget.setOnURLDropCallback(this._linkDropped.bind(this));
      this._dropTarget.enable();
    }
    this._sheetController = new fa(this._threadID, this._getNode('sheet'), this._tabElem, this);
    if (r.get('chat_react_option_menu')) {
      this._initializeReactMenu(this._getNode('fileAttachmentShelf'));
    } else {
      this._fileUploader = new db(this._getNode('fileAttachmentShelf'), this._tabTemplate.getNode('attachButtonForm'), this._tabTemplate.getNode('fileInput'), this._tabTemplate.getNode('attachID'));
      this._initializeUploader(this._fileUploader);
    }
    this._initializeArchiveWarning();
    this._initializeAddToThreadButton();
    this._initializeVideoCallButton();
    this._initializeCloseButton();
    this._initializeTitle();
    this._sheetController.onClickNewMessagesSheet(function() {
      this._messagesView && this._messagesView.scrollToBottom();
      this.focus();
      this.tryMarkAsRead();
    }.bind(this));
    this._sheetController.onClickThreadIsMutedSheet(function() {
      gd.unmute(this._threadID);
      this.focus();
    }.bind(this));
    this._nubController = new ob().init(this._tabElem);
    this._sheetController.onResize(this._nubController.flyoutContentChanged.bind(this._nubController));
    this._sheetController.onTokensChanged(function(te, ue) {
      hd.getThreadMeta(this._threadID, function(ve) {
        this._updateControls(ve, ue.token_count);
      }.bind(this));
    }.bind(this));
    if (kd === null) kd = !r.get('seen_autosend_photo_nux');
    this._messagesView = null;
    if (r.get('chat_react_option_menu')) {
      oc.getThreadURI(je, function(te) {
        return this._setTitleHref(te);
      }.bind(this));
    } else {
      var pe = this._getNode('conversationLink');
      la.hide(pe);
      fd.renderWebMessengerLink(je, pe, function() {
        la.show(pe);
        this._setTitleHref(pe.href);
      }.bind(this));
    }
    if (!cb.getUserIDFromThreadID(this._threadID)) this._titlebarTooltipAnchor = this._getNode('titlebarText');
    var qe = this._getCanonicalUserID();
    if (this._getCanonicalUserID()) {
      fb.get(cb.getParticipantIDFromUserID(qe), function(te) {
        if (te.href) this._setTitleHref(te.href);
      }.bind(this));
    } else if (r.get('chat_react_option_menu') && this._reactChatTabMenu.getURL()) {
      this._setTitleHref(this._reactChatTabMenu.getURL());
    } else if (pe && pe.href) this._setTitleHref(pe.href);
    this._nubController.subscribe('resize', function() {
      this._resizeInputContainer();
    }.bind(this));
    this._setNameConversationLink();
    this._listen('closeButton', 'click', this._closeClicked);
    this._listen('dockButton', 'click', this._nubClicked);
    this._listen('dockButton', 'keydown', this._dockKeyDown);
    this._listen('nubFlyoutTitlebar', 'click', this._titleClicked);
    this._listen('chatConv', 'click', this._chatConvClicked);
    this._listen('inputContainer', 'click', this._inputContainerClicked);
    this._listen('addFriendLink', 'click', this._addFriendLinkClicked, true);
    this._listen('nameConversationLink', 'click', this._nameConversationLinkClicked, true);
    this._listen('clearWindowLink', 'click', this._clearHistory, true);
    this._listen('unsubscribeLink', 'click', this._unsubscribeLinkClicked, true);
    this._listen('reportSpamLink', 'click', this._reportSpamClicked, true);
    this._listen('createGroupLink', 'click', this._createGroupClicked, true);
    this._listen('enableDesktopNotif', 'click', this._enableDesktopNotif, true);
    this._listen('muteThreadLink', 'click', kb.showMuteChangeDialog.bind(null, this._threadID), true);
    this._listen('unmuteThreadLink', 'click', function() {
      gd.unmute(this._threadID);
      gc.hide();
    }.bind(this), true);
    this._listen('switchToWorkUserLink', 'click', this._switchToWorkUserClicked, true);
    this._listen('sheet', 'keydown', function(event) {
      if (!event.getModifiers().any && event.keyCode === za.TAB) {
        this._focusInput();
        event.kill();
      }
    }.bind(this));
    if (this._getNode('officeStatus')) this._listen('officeStatus', 'click', function() {
      return false;
    }, true);
    this._stickersFlyoutToggler = this._getNode('emoticons');
    if (xb.WebStickerTrigger) this._stickerTriggerController = new aa(this._getNode('stickersTriggerFlyoutContainer'), this._getNode('emoticonIndicator'), this._stickersFlyoutToggler, this._stickerSelected.bind(this), this._searchStickers.bind(this));
    this._initializeInput();
    if (ac.shouldShowStickerSearchNUX()) this._listen('emoticons', 'click', function() {
      if (ac.shouldShowStickerSearchNUX()) {
        wb.selectPack(yb.SEARCH_PACK_ID);
        ac.clearShowStickerSearchNUX();
      }
    }, true);
    if (r.get('chat_react_sticker_button')) {
      this._stickerButton = tb.render(tb.createElement(z, {
        className: "_4vui",
        flyoutAlignment: "left",
        onFlyoutShown: this._onFlyoutShown.bind(this),
        onFlyoutHidden: this._onFlyoutHidden.bind(this),
        onStickerSelect: this._stickerSelected.bind(this),
        onEmoticonSelect: this._emoticonSelected.bind(this)
      }), this._getNode('stickerButtonContainer'));
      m.bumpEntityKey('chat.web', 'sticker_button.mounting_attempted');
    } else {
      var re = this._getNode('stickers');
      if (re) this._stickersFlyout = tb.render(tb.createElement(zb, {
        onStickerSelect: function(te) {
          this._stickerSelected(te);
        }.bind(this),
        onShown: this._onFlyoutShown.bind(this),
        onHidden: this._onFlyoutHidden.bind(this),
        onEmoticonSelect: this._emoticonSelected.bind(this),
        onEscKeyDown: this._hideStickersFlyoutIfShown.bind(this)
      }), re);
      this._eventListeners.push(ac.addListener(ac.PACK_SELECTED, function(te) {
        if (this._stickersFlyout && this._stickersFlyout.isMounted()) this._stickersFlyout.setProps({
          packID: te
        });
      }.bind(this)));
    }
    if (zc) {
      this._orionTriggerContainer = this._getNode('orionTriggerContainer');
      this._orionTrigger = tb.render(tb.createElement(zc, {
        onTrigger: this._orionTriggered.bind(this)
      }), this._orionTriggerContainer);
    }
    this._privacyLink = this._getNode('privacyLink');
    if (this._privacyLink) {
      this._privacyActionController = new w(qe, this._updatePrivacyLink.bind(this));
      this._eventListeners.push(va.listen(this._privacyLink, 'click', this._privacyActionController.togglePrivacy.bind(this._privacyActionController)));
    }
    hd.getThreadMeta(this._threadID, function(te) {
      this._setUpMutingSettings(te);
    }.bind(this));
    x.removeEmptyHrefs(this._tabElem);
    jd[je] = this;
    this.updateAvailableStatus();
    this.updateTab();
    this._setCloseTooltip(false);
    var se = {
      threadID: je,
      userID: qe,
      signatureID: this._signatureID
    };
    new k('/ajax/chat/opentab_tracking.php', se).send();
    this._checkUnsentMessages = rc(function() {
      if (this._hasUnfinishedPost()) return "You haven't sent your message yet. Do you want to leave without sending?";
      if (bd.getNumberLocalMessages(this._threadID)) return "Your message is still being sent. Are you sure you want to leave?";
      return null;
    }.bind(this));
    ub.onBeforeUnload(this._checkUnsentMessages, false);
    this._logUnsentPhotos = rc(ge.bind(null, this));
    ub.onUnload(this._logUnsentPhotos);
  }

  function ge(je) {
    if (je._photoUploader.isUploading()) ee(je, qb.CANCEL_DURING_UPLOAD);
  }

  function he() {
    for (var je in jd) {
      jd[je].updateAvailableStatus();
      jd[je].updateMultichatTooltip();
    }
  }
  g.subscribe(['buddylist/availability-changed'], he);
  rb.subscribe(['privacy-changed', 'privacy-availability-changed'], he);
  p.subscribe(p.ON_CHANGED, function() {
    for (var je in jd) hd.getThreadMeta(je, function(ke) {
      jd[je]._updateUnreadCount(ke);
    });
  });
  mb.addRetroactiveListener('state-changed', function(je) {
    for (var ke in je) {
      var le = je[ke] && je[ke].length,
        me = jd[ke];
      me && me.showTypingIndicator(le);
    }
  });
  ed.subscribe('threads-updated', function(je, ke) {
    for (var le in jd) {
      var me = jd[le];
      ke[le] && me.updateTab();
      if (me._newThreadIDFromPhotoUpload && !me._photoUploader.isUploading() && ke[me._newThreadIDFromPhotoUpload]) {
        ba.closeTab(me._threadID);
        u.openThread(me._newThreadIDFromPhotoUpload, 'ChatTabView');
        me._newThreadIDFromPhotoUpload = null;
      }
    }
  });
  ed.subscribe('threads-deleted', function(je, ke) {
    for (var le in jd) ke[le] && ba.closeTab(le, 'thread_deleted');
  });
  qc(fe, h, {
    get: function(je) {
      return jd[je];
    }
  });
  qc(fe.prototype, {
    getThreadID: function() {
      return this._threadID;
    },
    showAddFriend: function() {
      setTimeout((function() {
        this._sheetController.openAddFriendsSheet();
      }).bind(this), 0);
    },
    showNameConversation: function(je) {
      setTimeout((function() {
        this._sheetController.openNameConversationSheet(je);
      }).bind(this), 0);
    },
    hideAutomaticNameConversation: function() {
      setTimeout((function() {
        this._sheetController.closeAutomaticNameConversationSheet();
      }).bind(this), 0);
    },
    isVisible: function() {
      return la.shown(this._tabElem);
    },
    setVisibleState: function(je, ke) {
      var le = la.shown(this._tabElem),
        me = la.hasClass(this._tabElem, 'opened');
      la.conditionShow(this._tabElem, je);
      la.conditionClass(this._tabElem, 'opened', ke);
      if (!(le && me) && je && ke) {
        if (!this._messagesView) this._messagesView = new da(this._threadID, this._sheetController, this._getNode('chatConv'), this._getNode('conversation'), this._getNode('loadingIndicator'), this._getNode('lastMessageIndicator'), this._getNode('typingIndicator'), this);
        this._nubController.flyoutContentChanged();
        this._messagesView.scrollToBottom();
      }
      if (le && me && !(je && ke)) this._contextualDialogController && this._contextualDialogController.tabNotActive();
    },
    focus: function() {
      if (la.hasClass(this._tabElem, 'opened')) {
        this._focusInput();
      } else this._getNode('dockButton').focus();
    },
    isFocused: function() {
      var je = vc();
      return pb.byClass(je, "_50mz") === this._tabElem;
    },
    hasEmptyInput: function() {
      var je;
      if (r.get('chat_react_input')) {
        if (!this._chatInput || !this._chatInput.isMounted()) return false;
        je = this._chatInput.getValue();
      } else je = this._getNode('input').value;
      return id.test(je);
    },
    getInputElem: function() {
      if (r.get('chat_react_input')) {
        if (!this._chatInput || !this._chatInput.isMounted()) return null;
        return this._chatInput.getDOMNode();
      } else return this._getNode('input');
    },
    setStickersFlyoutPackID: function(je) {
      if (this._stickerButton) {
        this._setPackIDReact(je);
      } else this._setPackIDLegacy(je);
    },
    loadShareFromParams: function(je, ke) {
      this._shareLinkUploader && this._shareLinkUploader.loadShareFromParams(je, ke);
      if (this._sharePreview) this._sharePreview.setProps({
        share: {
          params: ke,
          type: je
        },
        uri: null
      });
    },
    _linkDropped: function(je) {
      this._shareLinkUploader && this._shareLinkUploader.loadShare(je);
      if (this._sharePreview) this._sharePreview.setProps({
        share: null,
        uri: je
      });
    },
    _filesDropped: function(je) {
      if (this._fileUploader) this._fileUploader.addDroppedFiles(je);
    },
    _setPackIDLegacy: function(je) {
      var ke = this._stickersFlyout;
      if (!this._stickersFlyoutToggler || !ke || !ke.isMounted()) return;
      wb.selectPack(je);
      this._toggleStickersFlyoutShownLegacy(true);
    },
    _setPackIDReact: function(je) {
      if (!this._stickerButton.isMounted()) return;
      wb.selectPack(je);
      this._toggleStickersFlyoutShownReact(true);
    },
    _toggleStickersFlyoutShownReact: function(je) {
      this._stickerButton.showFlyout();
      this._stickersFlyoutShown = je;
    },
    _toggleStickersFlyoutShownLegacy: function(je) {
      if (je) {
        gc.show(this._stickersFlyoutToggler);
      } else gc.hide(this._stickersFlyoutToggler);
      this._stickersFlyoutShown = je;
    },
    _hideStickersFlyoutIfShown: function() {
      if (this._stickersFlyoutToggler && this._stickersFlyout && this._stickersFlyoutShown) this._toggleStickersFlyoutShownLegacy(false);
    },
    showStickerReplyNUX: function() {
      if (ld) return;
      var je = this._getNode('stickerButtonContainer') || this._getNode('emoticons');
      new j(pc.getURIBuilder().getURI()).setRelativeTo(je).setData({
        thread_id: this._threadID
      }).setHandler(function(ke) {
        ac.clearShowStickerReplyNUX();
      }).send();
    },
    insertBefore: function(je) {
      pa.insertBefore(je._tabElem, this._tabElem);
    },
    appendTo: function(je) {
      pa.appendContent(je, this._tabElem);
    },
    nextTabIs: function(je) {
      var ke = je && je._tabElem;
      return this._tabElem.nextSibling == ke;
    },
    getScrollTop: function() {
      return pa.find(this._tabElem, '.fbNubFlyoutBody.scrollable').scrollTop;
    },
    setScrollTop: function(je) {
      pa.find(this._tabElem, '.fbNubFlyoutBody.scrollable').scrollTop = je;
    },
    _unmountComponentAtNodeSafe: function(je) {
      var ke = this._getNode(je);
      ke && tb.unmountComponentAtNode(ke);
    },
    destroy: function() {
      this._selectionPosition && this._selectionPosition.disable();
      while (this._eventListeners.length) this._eventListeners.pop().remove();
      if (this._dropTarget) this._dropTarget.disable();
      this._checkUnsentMessages && this._checkUnsentMessages.cancel();
      this._logUnsentPhotos && this._logUnsentPhotos.cancel();
      this._messagesView && this._messagesView.destroy();
      this._sheetController && this._sheetController.destroy();
      if (r.get('chat_react_option_menu')) {
        tb.unmountComponentAtNode(this._getNode('menuContainer'));
      } else this._fileUploader && this._fileUploader.destroy();
      if (r.get('chat_react_header')) {
        tb.unmountComponentAtNode(this._getNode('addToThreadContainer'));
        this._unmountComponentAtNodeSafe('archiveContainer');
        this._unmountComponentAtNodeSafe('videoCallButtonContainer');
        tb.unmountComponentAtNode(this._getNode('closeButtonContainer'));
        tb.unmountComponentAtNode(this._getNode('titleContainer'));
      }
      if (r.get('chat_react_share_uploader') && this._sharePreview && this._sharePreview.isMounted()) {
        tb.unmountComponentAtNode(this._sharePreview.getDOMNode());
      } else this._shareLinkUploader && this._shareLinkUploader.clear();
      tb.unmountComponentAtNode(this._getNode('photoUploaderContainer'));
      if (r.get('chat_react_sticker_button')) {
        tb.unmountComponentAtNode(this._getNode('stickerButtonContainer'));
      } else tb.unmountComponentAtNode(this._getNode('stickers'));
      if (xb.WebStickerTrigger) this._stickerTriggerController.destroy();
      this._subscriptionsHandler && this._subscriptionsHandler.release();
      this._contextualDialogController && this._contextualDialogController.destroy();
      this._privacyActionController && this._privacyActionController.destroy();
      if (r.get('chat_react_input')) {
        tb.unmountComponentAtNode(this._getNode('inputContainer'));
      } else ya.reset(this._getNode('input'));
      pa.remove(this._tabElem);
      delete jd[this._threadID];
      oa.unregisterNubController(this._nubController);
    },
    updateAvailableStatus: function() {
      hd.getThreadMeta(this._threadID, function(je) {
        var ke = l.OFFLINE,
          le = false,
          me = this._getCanonicalUserID();
        if (me) {
          ke = sb.get(me);
          le = mc.availableForCall(me);
        } else {
          var ne = je.participants.map(function(pe) {
            return cb.getUserIDFromParticipantID(pe);
          });
          ke = sb.getGroup(ne);
        }
        if (!ha.isOnline()) ke = l.OFFLINE;
        if (me) this._updateCallLink(ke);
        la.conditionClass(this._tabElem, "_5238", ke === l.ACTIVE);
        la.conditionClass(this._tabElem, "_4hwz", le);
        la.conditionClass(this._tabElem, "_5239", ke === l.MOBILE);
        var oe = this._getNode('presenceIndicator');
        switch (ke) {
          case l.ACTIVE:
            oe.setAttribute('alt', "Online");
            break;
          case l.MOBILE:
            oe.setAttribute('alt', "Mobile");
            break;
          default:
            oe.removeAttribute('alt');
            break;
        }
      }.bind(this));
    },
    updateTab: function() {
      this._setNameConversationLink();
      hd.getThreadMeta(this._threadID, function(je) {
        var ke = [this._getNode('name')];
        if (!r.get('chat_react_header')) {
          ke.push(this._getNode('titlebarText'));
        } else if (this._title.isMounted()) this._title.setProps({
          thread: je
        }, function() {
          this._getNode('chatWrapper').setAttribute('aria-label', this._title.getTitle());
        }.bind(this));
        fd.renderAndSeparatedParticipantList(this._threadID, ke, {
          names_renderer: jb.renderShortNames,
          check_length: true
        });
        this._updateControls(je);
        this._updateMutingSettings(je);
        this._updateUnreadCount(je);
        this.updateMultichatTooltip();
        this._updateArchiveWarning(je);
        this._updateEmployeeAwayWarning(je);
        this._updateOfficeStatus(je);
        this._updateNewThread(je);
        this._updateNameConversationSheet(je);
        this._updateReadOnlySheet(je);
        this._updateSwitchToWork(je);
      }.bind(this));
    },
    _setNameConversationLink: function() {
      var je = this._getNode('nameConversationLink');
      if (je) hd.isEmptyLocalThread(this._threadID) ? la.hide(je) : la.show(je);
    },
    _updateNameConversationSheet: function(je) {
      if (hd.canReply(je.thread_id) && !je.name && !je.is_canonical && !je.name_conversation_sheet_dismissed && !je.has_email_participant && !je.read_only && !hd.isEmptyLocalThread(je.thread_id)) {
        this.showNameConversation(true);
      } else this.hideAutomaticNameConversation();
    },
    _updateReadOnlySheet: function(je) {
      var ke = hd.canReply(je.thread_id),
        le = hd.isEmptyLocalThread(je.thread_id);
      if (!ke && !le) this._sheetController.openReadOnlySheet();
    },
    updateSignatureID: function(je) {
      this._signatureID = je;
    },
    _showPhotoNUXIfNecessary: function() {
      if (kd) {
        kd = false;
        new j('/ajax/chat/photo_nux.php').setRelativeTo(this._getNode('photoUploaderContainer')).setData({
          threadID: this._threadID
        }).send();
        return true;
      }
    },
    _setUpMutingSettings: function(je) {
      var ke = kb.isThreadMuted(je);
      if (ke) this._sheetController.openThreadIsMutedTabSheet();
      this._updateActionMenu(ke);
    },
    _updateMutingSettings: function(je) {
      var ke = kb.isThreadMuted(je),
        le;
      if (r.get('chat_react_option_menu')) {
        le = this._reactChatTabMenu.props.isMuted;
      } else le = la.shown(this._getNode('unmuteThreadLink').parentNode);
      if (ke && !le) {
        this._sheetController.openThreadIsMutedTabSheet();
      } else if (!ke && le) this._sheetController.closeThreadIsMutedTabSheet();
      this._updateActionMenu(ke);
    },
    _updateActionMenu: function(je) {
      if (r.get('chat_react_option_menu')) {
        this._reactChatTabMenu.isMounted() && this._reactChatTabMenu.setProps({
          isMuted: je
        });
      } else {
        la.conditionShow(this._getNode('muteThreadLink').parentNode, !je);
        la.conditionShow(this._getNode('unmuteThreadLink').parentNode, je);
      }
    },
    _updateArchiveWarning: function(je) {
      var ke = false;
      fb.get(nb.getID(), function(le) {
        ke = le.employee;
        if (ke) fb.getMulti(je.participants, this._showArchiveWarningIfAllParticipantsAreEmployees.bind(this));
      }.bind(this));
    },
    _updateEmployeeAwayWarning: function(je) {
      t.updateEmployeeAwayWarning(je, function() {
        this._sheetController.openEmployeeAwaySheet();
      }.bind(this), function() {});
    },
    _updateOfficeStatus: function(je) {
      var ke = this._getNode('officeStatus');
      if (!ke || cb.isMultichat(je.thread_id)) return;
      var le = cb.getParticipantIDFromUserID(je.canonical_fbid);
      fb.get(le, function(me) {
        ea.update(ke, me);
      });
    },
    _updateSwitchToWork: function(je) {
      var ke = false;
      fb.get(nb.getID(), function(le) {
        ke = le.employee;
        if (ke) fb.getMulti(je.participants, this._showSwitchToWorkIfAllParticipantsAreEmployees.bind(this));
      }.bind(this));
    },
    _updateControls: function(je, ke) {
      var le = false;
      if (je && je.thread_id) {
        var me = cb.tokenize(je.thread_id);
        if (me.type === 'user') {
          var ne = me.value;
          le = !dd.isUser(ne);
        }
      }
      var oe = hd.canReply(je.thread_id) && (!wc(je.participants) || !!ke);
      la.conditionShow(this._inputContainerNode, oe);
      la.conditionShow(this._iconsContainerNode, oe);
      if (!r.get('chat_react_option_menu')) {
        la.conditionShow(this._getNode('dropdown'), oe);
      } else if (this._reactChatTabMenu.isMounted()) {
        this._reactChatTabMenu.setProps({
          isEmptyChat: hd.isNewEmptyLocalThread(je.thread_id),
          show: oe
        });
        if (le) this._reactChatTabMenu.setProps({
          showAddFriend: null
        });
      }
      var pe = oe && !le;
      if (r.get('chat_react_header')) {
        this._addToThreadButton.isMounted() && this._addToThreadButton.setProps({
          shown: pe
        });
      } else la.conditionShow(this._getNode('addToThreadLink'), pe);
      this._resizeInputContainer();
      this._updateOrionTrigger(oe);
    },
    _updateOrionTrigger: function(je) {
      if (this._orionTrigger && je) {
        var ke = this.getParticipantIDForOrionNUX();
        la.conditionShow(this._orionTriggerContainer, ke);
        if (ke) {
          fb.get(ke, function(le) {
            le = xa.set(le, {
              userId: cb.getUserIDFromParticipantID(ke)
            });
            this._orionTrigger.setProps({
              receiver: le,
              disabled: !le.orion_eligible
            });
          }.bind(this));
        } else this._orionTrigger.setProps({
          receiver: {}
        });
      }
    },
    getParticipantIDForOrionNUX: function() {
      var je = this._sheetController.getAddFriendsTabSheet(),
        ke = je.getParticipants(),
        le = this._getCanonicalUserID(),
        me = null;
      if (le) {
        me = cb.getParticipantIDFromUserID(le);
      } else if (ke && ke.length === 1) me = ke[0];
      return me;
    },
    _resizeInputContainer: function() {
      var je = this._tabElem.clientWidth,
        ke = 2,
        le = je - (this._inputContainerNode.clientWidth + ke),
        me = ab.isRTL() ? 'left' : 'right';
      bc.set(this._iconsContainerNode, me, le + 'px');
      if (!r.get('chat_react_input')) fc.getInstance(this._getNode('input')).update();
    },
    _updateNewThread: function(je) {
      if (hd.isNewEmptyLocalThread(je.thread_id)) this.showAddFriend();
    },
    _isEmployeesOnly: function(je) {
      for (var ke in je)
        if (!je[ke].employee) return false;
      return true;
    },
    _showArchiveWarningIfAllParticipantsAreEmployees: function(je) {
      var ke = this._isEmployeesOnly(je),
        le = r.get('chat_react_header'),
        me = le ? this._getNode('archiveContainer') : this._getNode('titanArchiveWarning');
      if (me) {
        if (this._titlebarTooltipAnchor) la.conditionClass(this._titlebarTooltipAnchor, 'narrowTitleBar', ke);
        if (le) {
          this._archiveWarning.isMounted() && this._archiveWarning.setProps({
            shown: ke
          });
        } else la.conditionShow(me, ke);
      }
    },
    _showSwitchToWorkIfAllParticipantsAreEmployees: function(je) {
      var ke = this._isEmployeesOnly(je);
      if (!r.get('chat_react_option_menu')) {
        var le = this._getNode('switchToWorkUserLink');
        if (le) la.conditionShow(le, ke);
      } else if (this._reactChatTabMenu.isMounted()) this._reactChatTabMenu.setProps({
        hasSwitchToWork: ke
      });
    },
    updateMultichatTooltip: function() {
      hd.getThreadMeta(this._threadID, function(je) {
        if (!je.is_canonical) {
          var ke;
          if (r.get('chat_react_header')) {
            ke = this._title.getDOMNode();
          } else ke = this._titlebarTooltipAnchor;
          od(ke, je.participants);
        }
      }.bind(this));
    },
    _getNode: function(je) {
      return this._tabTemplate.getNode(je);
    },
    _getCanonicalUserID: function() {
      return cb.getUserIDFromThreadID(this._threadID);
    },
    _listen: function(je, event, ke, le) {
      var me = this._getNode(je);
      if (me) {
        this._eventListeners.push(va.listen(me, event, ke.bind(this)));
      } else if (!le) throw new Error('Could not find node "' + je + '"');
    },
    _closePreClicked: function(je) {
      this._closeMouseDown = true;
    },
    _closeClicked: function(je) {
      ge(this);
      ba.closeTab(this._threadID);
      if (je instanceof dc) {
        je.stopPropagation();
        return;
      }
      je.kill();
    },
    _closeEnter: function(je) {
      if (je.keyCode === za.RETURN) this._closeClicked(je);
    },
    _nubClicked: function(je) {
      je.kill();
      return fe.inform('nub-activated', this._threadID);
    },
    _dockKeyDown: function(event) {
      if (event.keyCode === za.RETURN || event.keyCode === za.SPACE) {
        fe.inform('nub-activated', this._threadID);
        event.kill();
      } else this._handleHotkeyPressed(event);
    },
    _handleHotkeyPressed: function(event) {
      if (event.keyCode === za.ESC) {
        this._handleEscape();
        if (r.get('chat_react_input')) event = new qa(event);
        event.kill();
      } else if (event.keyCode === za.TAB) this._handleTabPressed(event);
    },
    _handleTabPressed: function(event) {
      if (!event.ctrlKey) {
        var je = fe.inform('tab-pressed', {
          id: this._threadID,
          shiftPressed: event.shiftKey
        });
        if (r.get('chat_react_input')) event = new qa(event);
        !je && event.kill();
        return true;
      }
    },
    _handleEscape: function() {
      if (this._stickersFlyoutShown) {
        this._stickerButton ? this._toggleStickersFlyoutShownReact(false) : this._toggleStickersFlyoutShownLegacy(false);
        return;
      }
      ge(this);
      if (this.hasEmptyInput()) {
        fe.inform('esc-pressed', this._threadID);
      } else {
        var je = "Are you sure you want to close this chat window?",
          ke = "You haven't sent your message.",
          le = new na().setTitle(je).setBody(ke).setButtons([na.CLOSE, na.CANCEL]).setHandler(fe.inform.bind(fe, 'esc-pressed', this._threadID, null)).setModal(true).show(),
          me = le.getButtonElement('yes');
        me && wa.set(me);
      }
    },
    _titleClicked: function(event) {
      var je = event.getTarget();
      if (!pb.byClass(je, 'titlebarText') && !pb.byClass(je, 'uiSelector') && !pb.byClass(je, 'addToThread') && !pb.byClass(je, 'optionMenu') && !pb.byClass(je, 'videoicon') && !pb.byClass(je, 'close')) {
        event.kill();
        ba.lowerTab(this._threadID);
        this.focus();
      }
    },
    _callEnter: function(je) {
      if (je.keyCode === za.RETURN) this._callClicked(je);
    },
    _callClicked: function(je) {
      if (je.target) je.target.blur();
      var ke = this._getCanonicalUserID();
      if (mc.availableForCall(ke)) {
        var le = 'chat_tab_icon';
        if (je.target && la.hasClass(je.target, 'video_call_tour')) le = 'chat_tab_icon_tour';
        fe.inform('video-call-clicked', {
          threadID: this._threadID,
          userID: ke,
          clickSource: le
        });
      }
      if (r.get('chat_react_header')) {
        je.stopPropagation();
      } else return false;
    },
    _addFriendLinkClicked: function() {
      this.showAddFriend();
    },
    _nameConversationLinkClicked: function() {
      this.showNameConversation();
    },
    _showParticipantsClicked: function() {
      dd.getServerThreadID(this._threadID, function(je) {
        i.send(new j(kc('/ajax/browser/dialog/multichat_members/').addQueryData({
          id: je
        })));
      });
    },
    _clearHistory: function() {
      var je = hd.getThreadMetaNow(this._threadID);
      if (je) {
        var ke = this._getCanonicalUserID();
        dd.clearChat(this._threadID, ke, je.timestamp);
      }
    },
    _unsubscribeLinkClicked: function() {
      var je = [];
      je.push({
        name: 'unsubscribe',
        label: "Leave Conversation",
        handler: this._unsubscribeToThread.bind(this)
      });
      je.push(na.CANCEL);
      new na().setTitle("Leave Conversation?").setBody("You will stop receiving messages from this conversation and people will see that you left.").setButtons(je).show();
    },
    _switchToWorkUserClicked: function() {
      var je = [];
      je.push({
        name: 'move',
        label: "Move Conversation",
        handler: this._switchToWork.bind(this)
      });
      je.push(na.CANCEL);
      new na().setTitle("Move Conversation to Work Account?").setBody("Do you want to move this conversation so that it shows in your work account instead?").setButtons(je).show();
    },
    _getUserParticipants: function(je) {
      var ke = [];
      je.forEach(function(le) {
        var me = cb.getUserIDFromParticipantID(le);
        me && ke.push(me);
      });
      return ke;
    },
    _createGroupClicked: function() {
      hd.getThreadMeta(this._threadID, function(je) {
        if (!je.is_canonical) {
          var ke = kc('/ajax/groups/create_get.php').addQueryData({
              ref: 'web_messenger_dock',
              parent_id: '0'
            }),
            le = this._getUserParticipants(je.participants);
          ke.addQueryData({
            members: le
          });
          if (je.name) ke.addQueryData({
            name: je.name
          });
          i.send(new j(ke));
        }
      }.bind(this));
    },
    _enableDesktopNotif: function() {
      Notification.requestPermission();
    },
    _reportSpamClicked: function() {
      var je = this._getCanonicalUserID(),
        ke = kc('/ajax/chat/report.php').addQueryData({
          id: je
        }).addQueryData({
          src: 'top_report_link'
        });
      i.send(new j(ke));
    },
    _inputPasted: function(event) {
      if (lc.chrome()) {
        var je = event.clipboardData || event.originalEvent.clipboardData;
        if (!je || !je.items || je.items.length < 1) return;
        var ke = je.items[0].type;
        if (ke !== 'image/png') return;
        if (je.items[0].getAsFile) {
          var le = je.items[0].getAsFile();
          this._photoUploader.uploadFile(le);
        }
      }
    },
    _focusInput: function() {
      if (r.get('chat_react_input')) {
        this._chatInput && this._chatInput.isMounted() && this._chatInput.focus();
      } else this._getNode('input').focus();
    },
    _focusTab: function() {
      la.addClass(this._tabElem, 'focusedTab');
      this.tryMarkAsRead();
      this._contextualDialogController && this._contextualDialogController.tabFocused();
      if (!ld && this._showPhotoNUXIfNecessary()) g.subscribe(['ChatNUX/show', 'ChatNUX/hide'], function(event) {
        ld = event === 'ChatNUX/show';
      });
      this._closeMouseDown = false;
      this._setCloseTooltip(true);
      fe.inform('focus-tab', this._threadID);
    },
    _blurTab: function() {
      la.removeClass(this._tabElem, 'focusedTab');
      !this._closeMouseDown && this._setCloseTooltip(false);
    },
    _setCloseTooltip: function(je) {
      if (r.get('chat_react_header')) {
        this._closeButton.isMounted() && this._closeButton.setProps({
          active: je
        });
        return;
      }
      var ke = this._getNode('titlebarCloseButton'),
        le = je ? "Press Esc to close" : "Close tab";
      hc.set(ke, le, 'above');
    },
    _inputKeyDown: function(event) {
      this.tryMarkAsRead();
      if (event.keyCode === za.RETURN && !event.shiftKey) {
        if (ae(this)) {
          yd(this);
          event.kill && event.kill();
          return;
        }
        vd(this);
        if (xb.WebStickerTrigger) this._stickerTriggerController.activateAfterparty();
        event.kill && event.kill();
        return;
      }
      if (event.keyCode === za.DOWN && event.shiftKey && this.hasEmptyInput()) {
        event.kill && event.kill();
        ba.lowerTab(this._threadID);
        this.focus();
        return;
      }
      this._handleHotkeyPressed(event);
    },
    _initializeInput: function() {
      if (!r.get('chat_react_input')) {
        var je = this._inputContainerNode.clientHeight;
        fc.getInstance(this._getNode('input')).subscribe('resize', function() {
          var ke = this._inputContainerNode.clientHeight;
          if (ke != je) this._nubController.flyoutContentChanged();
          je = ke;
        }.bind(this));
        this._listen('input', 'focus', this._focusTab);
        this._listen('input', 'blur', this._blurTab);
        this._listen('input', 'paste', this._inputPasted);
        if (lc.firefox() && ma.get() == 'ko_KR') {
          this._listen('input', 'keyup', this._inputKeyDown);
        } else this._listen('input', 'keydown', this._inputKeyDown);
        this._initializeThingsWithInputFn(this._tabTemplate.getNode('input'));
      } else {
        this._chatInput = tb.render(tb.createElement(yc, {
          initializeThingsWithInputFn: this._initializeThingsWithInputFn.bind(this),
          inputChanged: function(ke) {
            if (xb.WebStickerTrigger) this._stickerTriggerController.updateInput(ke);
          }.bind(this),
          inputKeyDown: this._inputKeyDown.bind(this),
          onAddMention: this._onAddMention.bind(this),
          onBlur: this._blurTab.bind(this),
          onEscape: this._handleEscape.bind(this),
          onFocus: this._focusTab.bind(this),
          onTab: this._handleTabPressed.bind(this),
          openFlyoutFn: this._toggleStickersFlyoutShownLegacy.bind(this, true),
          stickersFlyoutToggler: this._stickersFlyoutToggler,
          searchTriggeredWord: function() {
            this._toggleStickersFlyoutShownLegacy(true);
            this._searchStickers(this._stickerTriggerController.getTriggeredWord());
          }.bind(this),
          resizeFn: function(ke) {
            bc.set(this._getNode('inputContainer'), 'height', ke + 'px');
            this._nubController.flyoutContentChanged();
          }.bind(this),
          uploadPhotoFn: this._photoUploader.uploadFile
        }), this._getNode('chatInputContainer'));
        if (xb.WebStickerTrigger) this._stickerTriggerController.setInput(this._chatInput);
      }
    },
    _initializeSharePreview: function(je, ke) {
      this._sharePreview = tb.render(tb.createElement(hb, {
        imageSize: {
          width: 68,
          height: 68
        },
        location: gb.CHAT_PREVIEW,
        onClose: this._focusInput.bind(this),
        onUpdate: function() {
          de(this);
          ce(this);
        }.bind(this)
      }), this._getNode('shareAttachmentShelf'));
      va.listen(je, 'keyup', function() {
        var le = ke ? ke() : je.value;
        !le.length && this._urlScraper.reset();
      }.bind(this));
      this._urlScraper = new jc(je, ke);
      this._urlScraper.subscribe('match', function(le, me) {
        this._sharePreview.setProps({
          share: null,
          uri: (me && me.url)
        });
      }.bind(this));
    },
    _initializeThingsWithInputFn: function(je, ke) {
      if (r.get('chat_react_share_uploader')) {
        this._initializeSharePreview(je, ke);
      } else {
        this._shareLinkUploader = new y(this._getNode('shareAttachmentShelf'), je, this.focus.bind(this), ke, this._appendTextToInput.bind(this));
        this._initializeUploader(this._shareLinkUploader);
      }
      hd.getThreadMeta(this._threadID, function(le) {
        dd.getServerThreadID(this._threadID, function(me) {
          this._typingDetector = new ic(this._getCanonicalUserID(), je, 'mercury-chat', null, me, ke);
        }.bind(this));
      }.bind(this));
    },
    _getInputValue: function() {
      if (r.get('chat_react_input')) {
        if (!this._chatInput || !this._chatInput.isMounted()) return '';
        return this._chatInput.getValue() || '';
      } else return this._tabTemplate.getNode('input').value || '';
    },
    _appendTextToInput: function(je) {
      if (r.get('chat_react_input')) {
        if (this._chatInput && this._chatInput.isMounted()) this._chatInput.appendText(je);
      } else this._getNode('input').value += je;
    },
    _hasUnfinishedPost: function() {
      return be(this) || zd(this);
    },
    tryMarkAsRead: function() {
      if (!this._messagesView || this._messagesView.isScrolledToBottom()) {
        gd.markRead(this._threadID);
        gd.markSeen(this._threadID);
        return true;
      }
      return false;
    },
    _chatConvClicked: function(je) {
      this.tryMarkAsRead();
      if (pb.byTag(je.getTarget(), 'a') || pa.getSelection()) return;
      this.focus();
    },
    _inputContainerClicked: function(je) {
      this.tryMarkAsRead();
      this.focus();
    },
    showTypingIndicator: function(je) {
      if (r.get('chat_closed_tab_typing_indicator_animated')) {
        var ke = pa.find(this._tabElem, "._54m9");
        if (je) {
          this._animatedTypingIndicator = tb.render(tb.createElement(lb, null), ke);
          this._updateAnimatedIndicatorColor();
          la.addClass(this._tabElem, "_54m8");
          la.show(ke);
        } else {
          la.removeClass(this._tabElem, "_54m8");
          la.hide(ke);
          tb.unmountComponentAtNode(ke);
          this._animatedTypingIndicator = null;
        }
      } else la.conditionClass(this._tabElem, 'typing', je);
    },
    _updateAnimatedIndicatorColor: function() {
      if (this._animatedTypingIndicator) {
        var je = la.hasClass(this._tabElem, 'highlightTab') ? 'light' : 'dark';
        this._animatedTypingIndicator.setProps({
          color: je
        });
      }
    },
    _updateUnreadCount: function(je) {
      var ke = je.unread_count;
      if (typeof ke != 'undefined') {
        var le = !!ke && (!p.showsTabUnreadUI || p.showsTabUnreadUI()),
          me = this._getNode('numMessages');
        la.conditionShow(me, le);
        la.conditionClass(this._tabElem, 'highlightTab', le);
        this._updateAnimatedIndicatorColor();
        sd(this._threadID, this._tabElem, le);
        pa.setContent(me, ke);
      }
    },
    _updateCallLink: function(je) {
      var ke = this._getCanonicalUserID();
      if (ke === ka.getID()) {
        this._hideVideoCallouts();
        if (r.get('chat_react_header')) {
          this._videoCallButton.isMounted() && this._videoCallButton.setProps({
            shown: false
          });
        } else la.hide(this._getNode('videoCallLink'));
        return;
      }
      if (ha.isOnline()) {
        var le = 'fbid:' + ke;
        fb.get(le, function(me) {
          var ne = null;
          if (mc.availableForCall(ke)) {
            ne = uc._("Start a video call with {firstname}", [uc.param("firstname", me.short_name)]);
          } else {
            ne = uc._("{firstname} is currently unavailable for video calling", [uc.param("firstname", me.short_name)]);
            this._hideVideoCallouts();
          }
          this._setVideoCallTooltip(ne);
        }.bind(this));
      } else {
        this._setVideoCallTooltip("You must be online to make a call.");
        this._hideVideoCallouts();
      }
    },
    _setVideoCallTooltip: function(je) {
      if (r.get('chat_react_header')) {
        this._videoCallButton.isMounted() && this._videoCallButton.setProps({
          tooltipLabel: je
        });
      } else hc.set(this._getNode('videoCallLink'), je);
    },
    _hideVideoCallouts: function() {
      this._contextualDialogController.hideVideoCallouts();
    },
    _updatePrivacyLink: function(je) {
      var ke;
      if (je == w.OFFLINE) {
        ke = "Go online";
        if (r.get('chat_react_option_menu')) {
          this._reactChatTabMenu.isMounted() && this._reactChatTabMenu.setProps({
            privacyText: ke
          });
        } else pa.setContent(this._privacyLink, ke);
        return;
      }
      var le = this._getCanonicalUserID();
      if (!le) return;
      var me = 'fbid:' + le;
      fb.get(me, function(ne) {
        if (je == w.BLOCKED) {
          ke = uc._("Turn On Chat for {name}", [uc.param("name", ne.short_name)]);
        } else ke = uc._("Turn Off Chat for {name}", [uc.param("name", ne.short_name)]);
        if (r.get('chat_react_option_menu')) {
          this._reactChatTabMenu.isMounted() && this._reactChatTabMenu.setProps({
            privacyText: ke
          });
        } else pa.setContent(this._privacyLink, ke);
      }.bind(this));
    },
    _unsubscribeToThread: function() {
      if (!hd.isEmptyLocalThread(this._threadID)) {
        var je = cd.constructLogMessageObject(ib.CHAT_WEB, this._threadID, eb.UNSUBSCRIBE, {
          removed_participants: [nb.getID()]
        });
        ad.send(je);
      }
      ba.closeTab(this._threadID, 'unsubscribed');
      return true;
    },
    _switchToWork: function() {
      if (!hd.isEmptyLocalThread(this._threadID)) {
        var je = cd.constructLogMessageObject(ib.CHAT_WEB, this._threadID, eb.SWITCH_TO_WORK, {
          removed_participants: [nb.getID()]
        });
        ad.send(je);
      }
      ba.closeTab(this._threadID, 'unsubscribed');
      return true;
    },
    _initializeUploader: function(je) {
      this._subscriptionsHandler.addSubscriptions(je.subscribe(['all-uploads-completed', 'upload-canceled'], function() {
        ce(this);
      }.bind(this)), je.subscribe('dom-updated', function() {
        de(this);
      }.bind(this)), je.subscribe('submit', function() {
        this._focusInput();
      }.bind(this)));
    },
    _initializeReactMenu: function(je) {
      var ke = this._getNode('menuContainer'),
        le = cb.isMultichat(this._threadID),
        me = hd.isNewEmptyLocalThread(this._threadID),
        ne = this._sheetController.openAddFriendsSheet.bind(this._sheetController);
      if (ke) this._reactChatTabMenu = tb.render(tb.createElement(ca, {
        onFileUploaderMounted: this.setFileUploader.bind(this),
        updatePrivacyLinkFunc: this._updatePrivacyLink.bind(this),
        nameConversationFunc: this._nameConversationLinkClicked.bind(this),
        showParticipantsFunc: this._showParticipantsClicked.bind(this),
        leaveConversationFunc: this._unsubscribeLinkClicked.bind(this),
        clearHistoryFunc: this._clearHistory.bind(this),
        reportSpamFunc: this._reportSpamClicked.bind(this),
        createGroupFunc: this._createGroupClicked.bind(this),
        switchToWorkFunc: this._switchToWorkUserClicked.bind(this),
        isMultichat: le,
        isEmptyChat: me,
        showAddFriend: ne,
        threadID: this._threadID,
        attachmentsShelf: je,
        onUploadFinished: ce.bind(this, this),
        onUpdateAttachmentsShelf: de.bind(this, this),
        onSubmit: this._focusInput.bind(this),
        enableDesktopNotif: function() {
          this._enableDesktopNotif();
        }.bind(this)
      }), ke);
    },
    _initializeArchiveWarning: function() {
      if (r.get('chat_react_header')) this._archiveWarning = tb.render(tb.createElement(o, {
        isFBAtWork: r.IsWorkUser,
        shown: true
      }), this._getNode('archiveContainer'));
    },
    _initializeAddToThreadButton: function() {
      if (r.get('chat_react_header')) {
        this._addToThreadButton = tb.render(tb.createElement(n, {
          isFBAtWork: r.get('IsWorkUser', false),
          onClick: this._addFriendLinkClicked.bind(this),
          shown: true
        }), this._getNode('addToThreadContainer'));
      } else this._listen('addToThreadLink', 'click', this._addFriendLinkClicked, true);
    },
    _initializeVideoCallButton: function() {
      if (!cb.getUserIDFromThreadID(this._threadID)) return;
      var je = null;
      if (r.get('chat_react_header')) {
        this._videoCallButton = tb.render(tb.createElement(ia, {
          shown: true,
          onClick: this._callClicked.bind(this),
          onKeyUp: this._callEnter.bind(this)
        }), this._getNode('videoCallButtonContainer'));
        je = this._videoCallButton.getDOMNode();
      } else {
        je = this._getNode('videoCallLink');
        this._listen('videoCallLink', 'click', this._callClicked, true);
        this._listen('videoCallLink', 'keyup', this._callEnter, true);
      }
      this._contextualDialogController = new s(this._threadID, je);
    },
    _initializeCloseButton: function() {
      if (r.get('chat_react_header')) {
        this._closeButton = tb.render(tb.createElement(q, {
          onClick: this._closeClicked.bind(this),
          onKeyUp: this._closeEnter.bind(this),
          onMouseDown: this._closePreClicked.bind(this)
        }), this._getNode('closeButtonContainer'));
      } else {
        this._listen('titlebarCloseButton', 'click', this._closeClicked);
        this._listen('titlebarCloseButton', 'keyup', this._closeEnter);
        this._listen('titlebarCloseButton', 'mousedown', this._closePreClicked);
      }
    },
    _initializeTitle: function() {
      if (r.get('chat_react_header')) {
        var je = hd.getThreadMetaNow(this._threadID);
        this._title = tb.render(tb.createElement(ga, {
          isNewThread: hd.isNewEmptyLocalThread(this._threadID),
          thread: je,
          viewer: ka.getID()
        }), this._getNode('titleContainer'));
      }
    },
    setFileUploader: function(je) {
      this._fileUploader = je;
    },
    _initializeAutoSendPhotoUploader: function() {
      this._photoUploader = tb.render(tb.createElement(v, {
        onSubmit: this._handlePUSubmit.bind(this),
        onAllUploadsComplete: this._handlePUAllUploadsCompleted.bind(this),
        onLastUploadFail: this._handlePULastUploadFailed.bind(this),
        onLastUploadCancel: this._handlePULastUploadCanceled.bind(this)
      }), this._getNode('photoUploaderContainer'));
    },
    _handlePUSubmit: function(je, ke) {
      ee(this, qb.UPLOAD_START, ke);
      xd(this, '', [], function(le) {
        if (this._threadID !== le.thread_id) {
          this._newThreadIDFromPhotoUpload = le.thread_id;
          if (this._messagesView) this._messagesView.setNewThreadID(le.thread_id);
        }
        le.content_attachment = null;
        ad.addAttachmentPlaceholder(le, ke.upload_id, ke);
      }.bind(this));
      ie('submit', ke);
      this._focusInput();
    },
    _handlePULastUploadFailed: function(je, ke) {
      ee(this, qb.CLIENT_ERROR, ke);
      ie('failed', ke);
      ad.cancelAttachmentPlaceholder(ke.upload_id, ke);
      var le = "Photo Upload Failed",
        me = "Please try again. Make sure you are uploading a valid photo.";
      new na().setTitle(le).setBody(me).setButtons(na.OK).show();
    },
    _handlePULastUploadCanceled: function(je, ke) {
      ee(this, qb.CANCEL_DURING_UPLOAD, ke);
      ie('canceled', ke);
      ad.cancelAttachmentPlaceholder(ke.upload_id, ke);
    },
    _handlePUAllUploadsCompleted: function(je, ke) {
      ee(this, qb.ALL_UPLOADS_DONE, ke);
      ie('completed', ke);
      ad.confirmAttachmentPlaceholder(ke.upload_id, ke);
      var le = ke.image_ids.length || ke.attachments.length;
      wd(this, le);
    },
    _stickerSelected: function(je) {
      xd(this, '', [], function(ke) {
        ke.has_attachment = true;
        ke.sticker_id = je;
        ad.send(ke);
        this.focus();
      }.bind(this));
      this._messagesView && this._messagesView.scrollToBottom();
    },
    _emoticonSelected: function(je) {
      var ke = ta.symbols[je];
      if (!ke) return;
      if (r.get('chat_react_input')) {
        this._chatInput.insertEmoticon(ke);
        return;
      }
      this._selectionPosition = this._selectionPosition || new vb(this._getNode('input'));
      var le = fc.getInstance(this._getNode('input')),
        me = le.getValue(),
        ne = ua.insertEmoticon(ke, me, this._selectionPosition.getPos());
      le.setValue(ne.result);
      this._selectionPosition.setPos(ne.start, ne.end);
    },
    _orionTriggered: function() {
      xd(this, '', [], function(je) {
        this.focus();
      }.bind(this));
      this._messagesView && this._messagesView.scrollToBottom();
    },
    _addStickerSearchNUXIndicator: function() {
      la.addClass(this._getNode('emoticonIndicator'), 'nux');
      ld = false;
    },
    _onFlyoutShown: function(je) {
      if (r.get('chat_react_sticker_button')) {
        var ke = this._stickersFlyout.props.packID;
        if (ke !== yb.SEARCH_PACK_ID) this.focus();
      }
      if (xb.WebStickerTrigger) {
        this._stickerTriggerController.onFlyoutShown(je);
      } else je();
      this._stickersFlyoutShown = true;
    },
    _searchStickers: function(je, ke) {
      this._stickersFlyout.isMounted() && this._stickersFlyout.setProps({
        packID: yb.SEARCH_PACK_ID,
        trigger: je
      }, ke);
    },
    _onFlyoutHidden: function() {
      this._stickersFlyoutShown = false;
      this.focus();
    },
    _setTitleHref: function(je) {
      if (r.get('chat_react_header')) {
        this._title.isMounted() && this._title.setProps({
          href: je
        });
      } else {
        var ke = this._getNode('titlebarText');
        ke.setAttribute('href', je);
        ke.removeAttribute('rel');
        la.removeClass(ke, 'noLink');
      }
    },
    _onAddMention: function(je) {
      this._linkDropped((new kc(je.getURI())).getQualifiedURI().toString());
    }
  });

  function ie(je, ke) {
    nd.debug('photo_uploader:' + je, Object.assign({}, ke));
  }
  e.exports = fe;
}, null);
__d("ChatNewMessageHandler", ["ChatActivity", "ChatMentionsNotifications", "ChatTabModel", "ChatTabView", "JSLogger", "MercuryAssert", "MercuryBrowserAlerts", "UserActivity", "MercuryConfig", "MercuryThreadlistConstants"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var q = k.create('chat_new_message'),
    r = {
      _notify: function(s, t, u) {
        if (o.DesktopNotificationsGK) h.notifyIfMessageToMe(t);
        var v = j.get(s);
        u.view_is_visible = v && v.isVisible();
        u.view_is_focused = v && v.isFocused();
        if (!u.view_is_visible) q.log('message_to_hidden');
        u.is_active = g.isActive();
        m.messageReceived(t);
      },
      newMessage: function(s, t) {
        l.isThreadID(s);
        var u = i.getTab(s),
          v = {
            thread_id: s,
            message_id: t.message_id,
            to_new_tab: !u,
            to_raised_tab: u ? !!u.raised : true
          };
        this._notify(s, t, v);
        q.log('message', v);
      }
    };
  m.subscribe('before-alert', function(s, event) {
    var t = event.threadID,
      u = j.get(t),
      v = i.getTab(t),
      w = p.MESSAGE_NOTICE_INACTIVITY_THRESHOLD;
    if (v && v.raised && u && u.isVisible() && u.isFocused() && n.isActive(w)) {
      u.tryMarkAsRead();
      event.cancelAlert();
    }
  });
  e.exports = r;
}, null);
__d("ChatTabLRUManager", ["ChatTabView", "ChatTabModel", "InitialServerTime", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i) {
  var j = b('MercuryThreads').get(),
    k = {
      getLRUVisibleTab: function(l) {
        if (l.hasRoomForRaisedTab()) return (void 0);
        var m = Object.keys(l.getTabsToShow() || {}),
          n = 1 * 60,
          o = null,
          p = Infinity;
        for (var q = 0; q < m.length; q++) {
          var r = m[q],
            s = j.getThreadMetaNow(r);
          if (h.isTabPromoted(r)) continue;
          if (!g.get(r).hasEmptyInput() || !s) continue;
          var t = (i.serverTime - s.timestamp) / 1000;
          if (!s.timestamp || (s.timestamp && s.timestamp < p && t > n)) {
            o = s.thread_id;
            p = s.timestamp;
          }
        }
        return o;
      }
    };
  e.exports = k;
}, null);
__d("ChatTabPolicy", ["ChatBehavior", "JSLogger", "MercuryActionType", "MercuryLogMessageType", "MercuryAssert", "MercuryIDs", "MercuryParticipantTypes", "MercurySourceType", "MercuryThreadMode", "MercuryThreadMuter", "MercuryViewer", "MessagingTag", "PresencePrivacy", "ShortProfiles", "MercuryThreadActions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
  var u = b('MercuryThreadActions').get(),
    v = h.create('tab_policy');
  e.exports = {
    messageIsAllowed: function(w, x, y) {
      var z = w.thread_id,
        aa = x.message_id;
      k.isThreadID(z);
      k.isParticipantID(x.author);
      var ba;
      if (p.isThreadMuted(w)) {
        ba = {
          thread_id: z,
          message_id: aa,
          mute_settings: w.mute_settings
        };
        v.log('message_thread_muted', ba);
        return;
      }
      if (w.mode == o.OBJECT_ORIGINATED) {
        ba = {
          thread_id: z,
          message_id: aa,
          mode: w.mode
        };
        v.log('message_object_originated', ba);
        return;
      }
      if (x.source == n.EMAIL || x.source == n.TITAN_EMAIL_REPLY) {
        ba = {
          thread_id: z,
          message_id: aa,
          source: x.source
        };
        v.log('message_source_not_allowed', ba);
        return;
      }
      var ca = l.getUserIDFromParticipantID(x.author);
      if (!ca) {
        v.log('message_bad_author', {
          thread_id: z,
          message_id: aa,
          user: ca
        });
        return;
      }
      if (x.action_type != i.USER_GENERATED_MESSAGE && !this._messageIsNewlyCreatedGroup(x, w)) {
        ba = {
          thread_id: z,
          message_id: aa,
          type: x.action_type
        };
        v.log('message_non_user_generated', ba);
        return;
      }
      if (w.is_canonical_user && !g.notifiesUserMessages()) {
        v.log('message_jabber', {
          thread_id: z,
          message_id: aa
        });
        u.markSeen(z, true);
        return;
      }
      if (w.is_canonical && !w.canonical_fbid) {
        v.log('message_canonical_contact', {
          thread_id: z,
          message_id: aa
        });
        return;
      }
      if (w.folder != r.INBOX) {
        v.log('message_folder', {
          thread_id: z,
          message_id: aa,
          folder: w.folder
        });
        return;
      }
      var da = l.getUserIDFromParticipantID(q.getID());
      t.getMulti([ca, da], function(ea) {
        if (!s.allows(ca)) {
          v.log('message_privacy', {
            thread_id: z,
            message_id: aa,
            user: ca
          });
          return;
        }
        var fa = ea[ca].employee && ea[da].employee;
        if (!fa && ea[ca].type !== m.FRIEND) {
          v.log('message_non_friend', {
            thread_id: z,
            message_id: aa,
            user: ca
          });
          return;
        }
        y();
      });
    },
    _messageIsNewlyCreatedGroup: function(w, x) {
      return w.action_type === i.LOG_MESSAGE && w.log_message_type === j.THREAD_NAME && x.message_count === 1;
    }
  };
}, null);
__d("ChatTabViewSelector", ["Event", "Arbiter", "ChatTabActions", "CSS", "DataStore", "DOM", "MenuDeprecated", "NubController", "ChatTabTemplates", "Toggler", "copyProperties", "MercuryThreadInformer", "MercuryThreads", "MercuryThreadMetadataRenderer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  var r = b('MercuryThreadInformer').get(),
    s = b('MercuryThreads').get(),
    t = b('MercuryThreadMetadataRenderer').get();

  function u(v) {
    var w = o[':fb:chat:tab:selector'].build(),
      x = w.getRoot(),
      y = w.getNode('menu'),
      z = l.find(y, '.uiMenuInner'),
      aa = {},
      ba = new n().init(x);
    j.hide(x);
    l.insertBefore(v, x);

    function ca(fa) {
      var ga = 0;
      for (var ha in aa) {
        var ia = aa[ha],
          ja = s.getThreadMetaNow(ha),
          ka = ia.getNode('unreadCount'),
          la = (ja && ja.unread_count) || 0;
        ga += la;
        if (la > 9) la = '+';
        j.conditionClass(ka, 'invisible_elem', !la);
        l.setContent(ka, la);
      }
      var ma = w.getNode('numMessages');
      j.conditionShow(ma, ga);
      l.setContent(ma, ga);
    }
    this.setTabData = function(fa) {
      aa = {};
      if (fa.length < 1) {
        j.hide(x);
        return;
      }
      j.show(x);
      l.empty(z);
      fa.forEach(function(ga) {
        var ha = o[':fb:chat:tab:selector:item'].build();
        aa[ga.id] = ha;
        var ia = ha.getNode('content');
        t.renderAndSeparatedParticipantList(ga.id, ia);
        l.prependContent(z, ha.getRoot());
        k.set(ha.getRoot(), 'threadID', ga.id);
        var ja = ha.getNode('closeButton');
        g.listen(ja, 'click', function(event) {
          i.closeTab(ga.id, 'selector/close-tab');
          event.kill();
        });
      });
      ba.flyoutContentChanged();
      l.setContent(w.getNode('numTabs'), fa.length);
      ca();
    };

    function da(event, fa) {
      if (fa.menu != y) return;
      var ga = k.get(fa.item, 'threadID');
      u.inform('selected', ga);
      p.hide(x);
    }

    function ea(event, fa) {
      m.register(y);
    }
    m.subscribe('select', da.bind(this));
    p.listen('show', x, function() {
      h.inform('layer_shown', {
        type: 'ChatTabSelector'
      });
      ea();
    });
    p.listen('hide', x, function() {
      h.inform('layer_hidden', {
        type: 'ChatTabSelector'
      });
    });
    r.subscribe('threads-updated', ca);
  }
  q(u, new h());
  e.exports = u;
}, null);
__d("ChatTabController", ["Arbiter", "ChatActivity", "ChatConfig", "ChatNewMessageHandler", "ChatTabActions", "ChatTabLRUManager", "ChatTabMessagesView", "ChatTabModel", "ChatTabPolicy", "ChatTabView", "ChatTabViewSelector", "JSLogger", "MercuryViewer", "Style", "UserAgent_DEPRECATED", "VideoCallCore", "ChatTabPresence", "ChatTypeaheadBehavior", "MercuryThreadInformer", "MercuryThreadActions", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
  b('ChatTabPresence');
  b('ChatTypeaheadBehavior');
  var w = b('MercuryThreadInformer').get(),
    x = b('MercuryThreadActions').get(),
    y = b('MercuryThreads').get(),
    z = i.get('tab_auto_close_timeout') || 7200000,
    aa = r.create('tab_controller');

  function ba(ma, na, oa) {
    var pa = n.get().tabs,
      qa = pa[ma],
      ra, sa;
    if (pa.length === 0) return false;
    var ta = pa.slice(ma + 1),
      ua = pa.slice(0, ma),
      va = ta.concat(ua);
    if (!na) va.reverse();
    if (qa) va.push(qa);
    for (var wa = 0; wa < va.length; wa++) {
      ra = va[wa];
      sa = p.get(ra.id);
      if (sa && sa.isVisible() && (!oa || ra.raised)) {
        sa.focus();
        return true;
      }
    }
    return false;
  }

  function ca(ma, na) {
    var oa = na && na.getRightmostHiddenTab();
    if (oa === ma) return null;
    return oa;
  }

  function da() {
    return Math.floor(Math.random() * 2147483648).toString(16);
  }

  function ea(ma, na, oa, pa) {
    k.raiseTab(ma, true, oa);
    var qa = na && na.getLeftmostVisibleTab(),
      ra = na && na.getTabsToShow();
    if (ra && !ra[ma] && qa) {
      n.promoteThreadInPlaceOfThread(ma, qa, ca(ma, na), true);
    } else k.promoteTab(ma);
    g.inform('chat/open-tab', ma);
    var sa = p.get(ma);
    sa && sa.focus();
  }

  function fa(ma, na) {
    if (!n.getTab(ma)) k.raiseTab(ma, false);
    var oa = na && l.getLRUVisibleTab(na),
      pa = na && na.getTabsToShow();
    if (pa && !pa[ma] && oa) n.promoteThreadInPlaceOfThread(ma, oa, ca(ma, na));
  }

  function ga(ma) {
    q.subscribe('selected', function(oa, pa) {
      ea(pa, ma);
    });
    g.subscribe('page_transition', function(oa, pa) {
      k.closeFragileTabs();
    });
    g.subscribe('chat-visibility/go-offline', function() {
      k.closeAllTabs();
    });
    h.subscribe('idle', function(oa, pa) {
      if (pa > z) {
        var qa = n.get().tabs;
        qa.forEach(function(ra) {
          var sa = ra.id;
          y.getThreadMeta(sa, function(ta) {
            if (!ta.unread_count) {
              aa.log('autoclose_idle_seen', {
                thread_id: sa,
                idleness: pa
              });
              k.closeTab(sa, 'autoclose_idle_seen');
            }
          });
        });
      }
    });
    p.subscribe('nub-activated', function(oa, pa) {
      ea(pa, ma);
    });
    p.subscribe('focus-tab', function(oa, pa) {
      var qa = n.getTab(pa);
      if (qa && qa.raised) ea(pa, ma, qa.signatureID, true);
    });

    function na(oa, pa) {
      v.showOutgoingCallDialog(pa.userID, pa.clickSource);
    }
    p.subscribe('video-call-clicked', na);
    m.subscribe('video-call-clicked', na);
    m.subscribe('interaction-with-tab', function(oa, pa) {
      var qa = n.getTab(pa);
      qa && qa.raised && x.markSeen(pa);
    });
    p.subscribe('esc-pressed', function(oa, pa) {
      aa.log('close_esc', {
        thread_id: pa
      });
      var qa = n.indexOf(pa);
      k.closeTab(pa, 'close_esc');
      setTimeout(function() {
        ba(qa - 1, true, true);
      }, 0);
    });
    w.subscribe('messages-received', function(oa, pa) {
      for (var qa in pa) {
        var ra = pa[qa];
        for (var sa = 0; sa < ra.length; sa++) {
          var ta = ra[sa];
          if (ta.author != s.getID()) {
            if (!ta.is_unread) {
              aa.log('message_already_read', {
                action_id: ta.action_id,
                thread_id: ta.thread_id
              });
              continue;
            }
            y.getThreadMeta(qa, function(ua) {
              o.messageIsAllowed(ua, ta, function() {
                fa(qa, ma);
                j.newMessage(qa, ta);
              });
            });
          }
        }
      }
    });
    w.subscribe('thread-read-changed', function(oa, pa) {
      for (var qa in pa)
        if (!pa[qa].mark_as_read) {
          aa.log('autoclose_marked_unread', {
            thread_id: qa
          });
          k.closeTab(qa, 'autoclose_marked_unread');
        }
    });
    p.subscribe('tab-pressed', function(oa, pa) {
      return !ba(n.indexOf(pa.id), pa.shiftPressed);
    });
    g.subscribe(r.DUMP_EVENT, function(oa, pa) {
      pa.chat_controller = {
        auto_close_timeout: z
      };
    });
    this.openTab = function(oa, pa, qa) {
      ea(oa, pa, da());
      if (qa) qa(p.get(oa));
    };
  }
  if (u.firefox()) {
    var ha = function() {
        return t.get(document.body, 'overflowX') + ' ' + t.get(document.body, 'overflowY');
      },
      ia = ha(),
      ja = function() {
        var ma = ha();
        if (ma !== ia) {
          ia = ma;
          g.inform('overflow-applied-to-body');
        }
      };
    if ('MutationObserver' in window) {
      var ka = new MutationObserver(ja),
        la = {
          attributes: true,
          attributeFilter: ['class', 'style']
        };
      ka.observe(document.documentElement, la);
    } else document.documentElement.addEventListener('DOMAttrModified', function(event) {
      if (event.getTarget() === document.documentElement && (event.attrName === 'class' || event.attrName === 'style')) ja();
    }, false);
  }
  e.exports = ga;
}, null);
__d("ChatTabViewCoordinator", ["Arbiter", "ChatTabModel", "ChatTabView", "ChatTabViewSelector", "CSS", "JSLogger", "VideoCallSupport"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = l.create('chat_tab_coordinator');

  function o(p, q) {
    var r = new j(p),
      s = {},
      t = false;

    function u() {
      var y = h.get(),
        z = {};
      y.tabs.forEach(function(ba) {
        z[ba.id] = 1;
      });
      n.log('process_tab_changed', {
        model_tabs: Object.keys(z),
        view_tabs: Object.keys(s)
      });
      for (var aa in s)
        if (!z[aa]) {
          n.log('remove_tab', {
            tab_id: aa
          });
          s[aa].destroy();
          delete(s[aa]);
        }
      v(y);
      w(y);
      if (y.tabNeedsFocus && !y.tabNeedsFocus.isFocused()) y.tabNeedsFocus.focus();
    }

    function v(y) {
      var z = null;
      y.tabs.forEach(function(aa) {
        var ba = aa.id,
          ca = false;
        if (!s[ba]) {
          n.log('add_tab', {
            tab_id: ba
          });
          s[ba] = new i(ba, aa.server_id, aa.signatureID, p, z);
          ca = true;
        } else s[ba].updateSignatureID(aa.signatureID);
        if (s[ba].isFocused()) y.tabNeedsFocus = s[ba];
        if (!ca && !s[ba].nextTabIs(z)) {
          var da = s[ba].getScrollTop();
          if (z) {
            s[ba].insertBefore(z);
          } else s[ba].appendTo(p);
          if (da) s[ba].setScrollTop(da);
        }
        z = s[ba];
      });
    }

    function w(y) {
      var z = q.getTabsToShow(y),
        aa = [],
        ba = false;
      y.tabs.forEach(function(ca) {
        if (!z[ca.id]) {
          s[ca.id].setVisibleState(false, ca.raised);
          aa.push(ca);
        }
      });
      y.tabs.forEach(function(ca) {
        if (z[ca.id]) {
          s[ca.id].setVisibleState(true, ca.raised);
          ba |= ca.raised;
        }
      });
      r.setTabData(aa);
      x(ba);
    }

    function x(y) {
      if (!y && t) {
        g.inform('layer_hidden', {
          type: 'ChatTab'
        });
        t = false;
      } else if (y && !t) {
        g.inform('layer_shown', {
          type: 'ChatTab'
        });
        t = true;
      }
    }
    if (m.isVideoCallSupported()) k.addClass(p, 'videoCallEnabled');
    q.subscribe('tabs-changed', u);
    u();
  }
  e.exports = o;
}, null);
__d("ChatApp", ["CSS", "JSLogger"], function(a, b, c, d, e, f, g, h) {
  var i = {
    init: function(j, k, l) {
      if (this._isInitialized) {
        h.create('chat_app').error('repeated_init');
        return;
      }
      this._rootElem = j;
      d(['TabsViewport', 'ChatTabController', 'ChatTabViewCoordinator', 'MercuryServerRequests', 'MercuryChannelHandler', 'MercuryStateCheck', 'MercuryDeliveryState'], function(m, n, o, p, q, r, s) {
        q = q.get();
        q.turnOn();
        p.get().handleUpdate(l);
        s.get();
        this.tabsViewport = new m(k);
        this.tabViewCoordinator = new o(k, this.tabsViewport);
        this.tabController = new n(this.tabsViewport);
        this._isInitialized = this._isLoaded = true;
      }.bind(this));
    },
    isInitialized: function() {
      return !!this._isInitialized;
    },
    isHidden: function() {
      return !this._isInitialized || this._isHidden;
    },
    hide: function() {
      if (this.isHidden()) return;
      g.hide(this._rootElem);
      this._isHidden = true;
    },
    unhide: function() {
      if (this._isInitialized) {
        if (this._isHidden) {
          g.show(this._rootElem);
          this.tabsViewport.checkWidth();
          d(['Dock'], function(j) {
            j.resizeAllFlyouts();
          });
          this._isHidden = false;
        }
      } else if (!this._isLoaded) {
        d(['UIPagelet'], function(j) {
          j.loadFromEndpoint('ChatTabsPagelet', 'ChatTabsPagelet');
          j.loadFromEndpoint('BuddylistPagelet', 'BuddylistPagelet');
        });
        this._isLoaded = true;
      }
    }
  };
  e.exports = i;
}, null);