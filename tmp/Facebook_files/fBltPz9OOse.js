/*!CK:1628719180!*/
/*1424187753,*/
if (self.CavalryLogger) {
  CavalryLogger.start_js(["0o6cu"]);
}

__d("PlatformVersions", [], function(a, b, c, d, e, f) {
  e.exports = {
    LATEST: "v2.3",
    versions: {
      UNVERSIONED: "unversioned",
      V1_0: "v1.0",
      V2_0: "v2.0",
      V2_1: "v2.1",
      V2_2: "v2.2",
      V2_3: "v2.3"
    }
  };
}, null);
__d("PlatformDialog", ["DOMEventListener", "DOMEvent", "CSS", "cx"], function(a, b, c, d, e, f, g, h, i, j) {
  function k(l, m, n) {
    "use strict";
    this.$PlatformDialog0 = l;
    this.$PlatformDialog1 = m;
    if (n) {
      var o = false;
      g.add(this.$PlatformDialog0, 'submit', function(p) {
        if (o) {
          new h(p).kill();
          return;
        }
        o = true;
        i.addClass(l, "_32qa");
      });
    }
  }
  k.prototype.getForm = function() {
    "use strict";
    return this.$PlatformDialog0;
  };
  k.prototype.getDisplay = function() {
    "use strict";
    return this.$PlatformDialog1;
  };
  k.RESPONSE = 'platform/dialog/response';
  e.exports = k;
}, null);
__d("ArtillerySegment", ["ImmutableObject", "invariant", "performanceAbsoluteNow"], function(a, b, c, d, e, f, g, h, i) {
  var j = 0;

  function k(l) {
    "use strict";
    h(l);
    h(('category' in l) && ('description' in l));
    this.$ArtillerySegment0 = false;
    this.$ArtillerySegment1 = Object.assign({}, l, {
      id: (j++).toString(36)
    });
    this.$ArtillerySegment2 = [];
  }
  k.prototype.getID = function() {
    "use strict";
    return this.$ArtillerySegment1.id;
  };
  k.prototype.begin = function() {
    "use strict";
    this.$ArtillerySegment1.begin = i();
    return this;
  };
  k.prototype.end = function() {
    "use strict";
    this.$ArtillerySegment1.end = i();
    return this;
  };
  k.prototype.appendChild = function() {
    "use strict";
    for (var l = [], m = 0, n = arguments.length; m < n; m++) l.push(arguments[m]);
    h(!this.$ArtillerySegment0);
    l.forEach(function(o) {
      this.$ArtillerySegment2.push(o.getID());
    }.bind(this));
    return this;
  };
  k.prototype.setPosted = function() {
    "use strict";
    this.$ArtillerySegment0 = true;
    return this;
  };
  k.prototype.getPostData = function() {
    "use strict";
    return new g(this.$ArtillerySegment1, {
      children: this.$ArtillerySegment2.slice()
    });
  };
  e.exports = k;
}, null);
__d("ArtillerySequence", ["ImmutableObject", "invariant"], function(a, b, c, d, e, f, g, h) {
  var i = 0;

  function j(k) {
    "use strict";
    h(k);
    h('description' in k);
    this.$ArtillerySequence0 = false;
    this.$ArtillerySequence1 = Object.assign({}, k, {
      id: (i++).toString(36)
    });
    this.$ArtillerySequence2 = [];
  }
  j.prototype.getID = function() {
    "use strict";
    return this.$ArtillerySequence1.id;
  };
  j.prototype.addSegment = function() {
    "use strict";
    for (var k = [], l = 0, m = arguments.length; l < m; l++) k.push(arguments[l]);
    h(!this.$ArtillerySequence0);
    k.forEach(function(n) {
      this.$ArtillerySequence2.push(n.getID());
    }.bind(this));
    return this;
  };
  j.prototype.setPosted = function() {
    "use strict";
    this.$ArtillerySequence0 = true;
    return this;
  };
  j.prototype.getPostData = function() {
    "use strict";
    return new g(this.$ArtillerySequence1, {
      segments: this.$ArtillerySequence2.slice()
    });
  };
  e.exports = j;
}, null);
__d("ArtilleryTrace", ["ArtillerySegment", "ArtillerySequence", "ImmutableObject", "invariant", "mixInEventEmitter"], function(a, b, c, d, e, f, g, h, i, j, k) {
  function l() {
    "use strict";
    this.$ArtilleryTrace0 = false;
    this.$ArtilleryTrace1 = (void 0);
    this.$ArtilleryTrace2 = {};
    this.$ArtilleryTrace3 = [];
    this.$ArtilleryTrace4 = [];
    this.$ArtilleryTrace5 = {};
    this.$ArtilleryTrace6 = [];
  }
  l.prototype.createSequence = function(m) {
    "use strict";
    j(!this.$ArtilleryTrace0);
    var n = new h(m);
    this.$ArtilleryTrace3.push(n);
    return n;
  };
  l.prototype.createSegment = function(m) {
    "use strict";
    j(!this.$ArtilleryTrace0);
    var n = new g(m);
    this.$ArtilleryTrace4.push(n);
    return n;
  };
  l.prototype.markSegment = function(m, n) {
    "use strict";
    j(!this.$ArtilleryTrace0);
    this.$ArtilleryTrace5[n] = m.getID();
    return this;
  };
  l.prototype.connectTrace = function(m, n) {
    "use strict";
    j(!this.$ArtilleryTrace0);
    n = n || this.$ArtilleryTrace1;
    j(n);
    this.$ArtilleryTrace6.push({
      segment: m.getID(),
      trace: n
    });
    return this;
  };
  l.prototype.setID = function(m) {
    "use strict";
    j(!this.$ArtilleryTrace1);
    this.$ArtilleryTrace1 = m;
    return this;
  };
  l.prototype.getID = function() {
    "use strict";
    return this.$ArtilleryTrace1;
  };
  l.prototype.addProperty = function(m, n) {
    "use strict";
    this.$ArtilleryTrace2[m] = n;
  };
  l.prototype.post = function() {
    "use strict";
    j(!this.$ArtilleryTrace0);
    this.$ArtilleryTrace0 = true;
    var m = new i({
      id: this.$ArtilleryTrace1,
      properties: this.$ArtilleryTrace2,
      sequences: this.$ArtilleryTrace3.map(function(n) {
        return n.setPosted().getPostData();
      }),
      segments: this.$ArtilleryTrace4.map(function(n) {
        return n.setPosted().getPostData();
      }),
      marks: Object.assign({}, this.$ArtilleryTrace5),
      connections: this.$ArtilleryTrace6.slice()
    });
    this.emitAndHold('post', m);
  };
  l.prototype.isPosted = function() {
    "use strict";
    return this.$ArtilleryTrace0;
  };
  k(l, {
    post: true
  });
  e.exports = l;
}, null);
__d("Artillery", ["ArtilleryTrace", "Banzai", "forEachObject", "invariant", "mixInEventEmitter"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = false,
    m = [],
    n, o, p;
  h.subscribe(h.SHUTDOWN, function() {
    q.postAll();
  });
  var q = {
    isEnabled: function() {
      return l;
    },
    createTrace: function() {
      var r = new g();
      m.push(r);
      r.addListener('post', q.emitAndHold.bind(q, 'posttrace'));
      return r;
    },
    getPageTrace: function() {
      j(n);
      if (o) return o;
      o = q.createTrace().setID(n);
      i(p, function(r, s, t) {
        o.addProperty(s, r);
      });
      return o;
    },
    postAll: function() {
      m.forEach(function(r) {
        return !r.isPosted() && r.post();
      });
    },
    enable: function() {
      l = true;
    },
    setPageTraceID: function(r) {
      j(!n);
      n = r;
    },
    setPageProperties: function(r) {
      p = r;
    },
    getPageProperty: function(r) {
      return p[r];
    }
  };
  k(q, {
    posttrace: true
  });
  e.exports = q;
}, null);
__d("StrSet", [], function(a, b, c, d, e, f) {
  function g(h) {
    "use strict";
    this.$StrSet0 = {};
    this.$StrSet1 = 0;
    if (h) this.addAll(h);
  }
  g.prototype.add = function(h) {
    "use strict";
    if (!this.$StrSet0.hasOwnProperty(h)) {
      this.$StrSet0[h] = true;
      this.$StrSet1++;
    }
    return this;
  };
  g.prototype.addAll = function(h) {
    "use strict";
    h.forEach(this.add, this);
    return this;
  };
  g.prototype.remove = function(h) {
    "use strict";
    if (this.$StrSet0.hasOwnProperty(h)) {
      delete this.$StrSet0[h];
      this.$StrSet1--;
    }
    return this;
  };
  g.prototype.removeAll = function(h) {
    "use strict";
    h.forEach(this.remove, this);
    return this;
  };
  g.prototype.toArray = function() {
    "use strict";
    return Object.keys(this.$StrSet0);
  };
  g.prototype.toMap = function(h) {
    "use strict";
    var i = {};
    Object.keys(this.$StrSet0).forEach(function(j) {
      i[j] = typeof h == 'function' ? h(j) : h || true;
    });
    return i;
  };
  g.prototype.contains = function(h) {
    "use strict";
    return this.$StrSet0.hasOwnProperty(h);
  };
  g.prototype.count = function() {
    "use strict";
    return this.$StrSet1;
  };
  g.prototype.clear = function() {
    "use strict";
    this.$StrSet0 = {};
    this.$StrSet1 = 0;
    return this;
  };
  g.prototype.clone = function() {
    "use strict";
    return new g(this);
  };
  g.prototype.forEach = function(h, i) {
    "use strict";
    Object.keys(this.$StrSet0).forEach(h, i);
  };
  g.prototype.map = function(h, i) {
    "use strict";
    return Object.keys(this.$StrSet0).map(h, i);
  };
  g.prototype.some = function(h, i) {
    "use strict";
    return Object.keys(this.$StrSet0).some(h, i);
  };
  g.prototype.every = function(h, i) {
    "use strict";
    return Object.keys(this.$StrSet0).every(h, i);
  };
  g.prototype.filter = function(h, i) {
    "use strict";
    return new g(Object.keys(this.$StrSet0).filter(h, i));
  };
  g.prototype.union = function(h) {
    "use strict";
    return this.clone().addAll(h);
  };
  g.prototype.intersect = function(h) {
    "use strict";
    return this.filter(function(i) {
      return h.contains(i);
    });
  };
  g.prototype.difference = function(h) {
    "use strict";
    return h.filter(function(i) {
      return !this.contains(i);
    }.bind(this));
  };
  g.prototype.equals = function(h) {
    "use strict";
    var i = function(m, n) {
        return m === n ? 0 : m < n ? -1 : 1;
      },
      j = this.toArray(),
      k = h.toArray();
    if (j.length !== k.length) return false;
    var l = j.length;
    j = j.sort(i);
    k = k.sort(i);
    while (l--)
      if (j[l] !== k[l]) return false;
    return true;
  };
  e.exports = g;
}, null);
__d("PlatformBaseVersioning", ["PlatformVersions", "getObjectValues", "StrSet", "invariant"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = new i(h(g.versions)),
    l = location.pathname,
    m = l.substring(1, l.indexOf('/', 1)),
    n = k.contains(m) ? m : g.versions.UNVERSIONED;

  function o(r, s) {
    if (s == g.versions.UNVERSIONED) return r;
    j(k.contains(s));
    if (r.indexOf('/') !== 0) r = '/' + r;
    return '/' + s + r;
  }

  function p(r) {
    if (k.contains(r.substring(1, r.indexOf('/', 1)))) return r.substring(r.indexOf('/', 1));
    return r;
  }
  var q = {
    addVersionToPath: o,
    getLatestVersion: function() {
      return g.LATEST;
    },
    versionAwareURI: function(r) {
      return r.setPath(o(r.getPath(), n));
    },
    versionAwarePath: function(r) {
      return o(r, n);
    },
    getUnversionedPath: p
  };
  e.exports = q;
}, null);
__d("PlatformWidgetEndpoint", ["PlatformBaseVersioning"], function(a, b, c, d, e, f, g) {
  function h(m, n) {
    return g.versionAwarePath('/dialog' + '/' + m + (n ? '/' + n : ''));
  }

  function i(m, n) {
    return g.versionAwarePath('/plugins' + '/' + m + (n ? '/' + n : ''));
  }

  function j(m) {
    return (/^\/plugins\//).test(g.getUnversionedPath(m));
  }

  function k(m) {
    return (/^\/dialog\//).test(g.getUnversionedPath(m));
  }
  var l = {
    dialog: h,
    plugins: i,
    isPluginEndpoint: j,
    isDialogEndpoint: k
  };
  e.exports = l;
}, null);
__d("ArbiterFrame", [], function(a, b, c, d, e, f) {
  var g = {
    inform: function(h, i, j) {
      var k = parent.frames,
        l = k.length,
        m;
      i.crossFrame = true;
      for (var n = 0; n < l; n++) {
        m = k[n];
        try {
          if (!m || m == window) continue;
          if (m.require) {
            m.require('Arbiter').inform(h, i, j);
          } else if (m.ServerJSAsyncLoader) m.ServerJSAsyncLoader.wakeUp(h, i, j);
        } catch (o) {}
      }
    }
  };
  e.exports = g;
}, null);
__d("Popup", [], function(a, b, c, d, e, f) {
  var g = {
    open: function(h, i, j) {
      var k = document.body,
        l = 'screenX' in window ? window.screenX : window.screenLeft,
        m = 'screenY' in window ? window.screenY : window.screenTop,
        n = 'outerWidth' in window ? window.outerWidth : k.clientWidth,
        o = 'outerHeight' in window ? window.outerHeight : k.clientHeight - 22,
        p = Math.floor(l + (n - i) / 2),
        q = Math.floor(m + (o - j) / 2.5),
        r = ['width=' + i, 'height=' + j, 'left=' + p, 'top=' + q];
      return window.open(h, '_blank', r.join(','));
    }
  };
  e.exports = g;
}, null);
__d("PopupLink", ["DOMEvent", "DOMEventListener", "Popup"], function(a, b, c, d, e, f, g, h, i) {
  var j = {
    listen: function(k, l, m) {
      h.add(k, 'click', function(n) {
        new g(n).kill();
        i.open(k.href, l, m);
      });
    }
  };
  e.exports = j;
}, null);
__d("PopupWindow", ["DOMDimensions", "DOMQuery", "Layer", "Popup", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = {
    _opts: {
      allowShrink: true,
      strategy: 'vector',
      timeout: 100,
      widthElement: null
    },
    init: function(m) {
      k(l._opts, m);
      setInterval(l._resizeCheck, l._opts.timeout);
    },
    _resizeCheck: function() {
      var m = g.getViewportDimensions(),
        n = l._getDocumentSize(),
        o = i.getTopmostLayer();
      if (o) {
        var p = o.getRoot().firstChild,
          q = g.getElementDimensions(p);
        q.height += g.measureElementBox(p, 'height', true, true, true);
        q.width += g.measureElementBox(p, 'width', true, true, true);
        n.height = Math.max(n.height, q.height);
        n.width = Math.max(n.width, q.width);
      }
      var r = n.height - m.height,
        s = n.width - m.width;
      if (s < 0 && !l._opts.widthElement) s = 0;
      s = s > 1 ? s : 0;
      if (!l._opts.allowShrink && r < 0) r = 0;
      if (r || s) try {
        window.console && window.console.firebug;
        window.resizeBy(s, r);
        if (s) window.moveBy(s / -2, 0);
      } catch (t) {}
    },
    _getDocumentSize: function() {
      var m = g.getDocumentDimensions();
      if (l._opts.strategy === 'offsetHeight') m.height = document.body.offsetHeight;
      if (l._opts.widthElement) {
        var n = h.scry(document.body, l._opts.widthElement)[0];
        if (n) m.width = g.getElementDimensions(n).width;
      }
      var o = a.Dialog;
      if (o && o.max_bottom && o.max_bottom > m.height) m.height = o.max_bottom;
      return m;
    },
    open: function(m, n, o) {
      return j.open(m, o, n);
    }
  };
  e.exports = l;
}, null);
__d("Queue", ["copyProperties"], function(a, b, c, d, e, f, g) {
  var h = {};

  function i(j) {
    "use strict";
    this._opts = g({
      interval: 0,
      processor: null
    }, j);
    this._queue = [];
    this._stopped = true;
  }
  i.prototype._dispatch = function(j) {
    "use strict";
    if (this._stopped || this._queue.length === 0) return;
    if (!this._opts.processor) {
      this._stopped = true;
      throw new Error('No processor available');
    }
    if (this._opts.interval) {
      this._opts.processor.call(this, this._queue.shift());
      this._timeout = setTimeout(this._dispatch.bind(this), this._opts.interval);
    } else
      while (this._queue.length) this._opts.processor.call(this, this._queue.shift());
  };
  i.prototype.enqueue = function(j) {
    "use strict";
    if (this._opts.processor && !this._stopped) {
      this._opts.processor.call(this, j);
    } else this._queue.push(j);
    return this;
  };
  i.prototype.start = function(j) {
    "use strict";
    if (j) this._opts.processor = j;
    this._stopped = false;
    this._dispatch();
    return this;
  };
  i.prototype.isStarted = function() {
    "use strict";
    return !this._stopped;
  };
  i.prototype.dispatch = function() {
    "use strict";
    this._dispatch(true);
  };
  i.prototype.stop = function(j) {
    "use strict";
    this._stopped = true;
    if (j) clearTimeout(this._timeout);
    return this;
  };
  i.prototype.merge = function(j, k) {
    "use strict";
    this._queue[k ? 'unshift' : 'push'].apply(this._queue, j._queue);
    j._queue = [];
    this._dispatch();
    return this;
  };
  i.prototype.getLength = function() {
    "use strict";
    return this._queue.length;
  };
  i.get = function(j, k) {
    "use strict";
    var l;
    if (j in h) {
      l = h[j];
    } else l = h[j] = new i(k);
    return l;
  };
  i.exists = function(j) {
    "use strict";
    return j in h;
  };
  i.remove = function(j) {
    "use strict";
    return delete h[j];
  };
  e.exports = i;
}, null);
__d("resolveWindow", [], function(a, b, c, d, e, f) {
  function g(h) {
    var i = window,
      j = h.split('.');
    try {
      for (var l = 0; l < j.length; l++) {
        var m = j[l],
          n = /^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(m);
        if (n) {
          i = i.frames[n[1]];
        } else if (m === 'opener' || m === 'parent' || m === 'top') {
          i = i[m];
        } else return null;
      }
    } catch (k) {
      return null;
    }
    return i;
  }
  e.exports = g;
}, null);
__d("XD", ["Arbiter", "DOM", "DOMDimensions", "Log", "PHPQuerySerializer", "URI", "Queue", "isFacebookURI", "copyProperties", "isInIframe", "resolveWindow"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  var r = 'fb_xdm_frame_' + location.protocol.replace(':', ''),
    s = {
      _callbacks: [],
      _opts: {
        autoResize: false,
        allowShrink: true,
        channelUrl: null,
        hideOverflow: false,
        resizeTimeout: 1000,
        resizeWidth: false,
        expectResizeAck: false,
        resizeAckTimeout: 6000
      },
      _lastResizeAckId: 0,
      _resizeCount: 0,
      _resizeTimestamp: 0,
      _shrinker: null,
      init: function(u) {
        this._opts = o(o({}, this._opts), u);
        if (this._opts.autoResize) this._startResizeMonitor();
        g.subscribe('Connect.Unsafe.resize.ack', function(v, w) {
          if (!w.id) w.id = this._resizeCount;
          if (w.id > this._lastResizeAckId) this._lastResizeAckId = w.id;
        }.bind(this));
      },
      getQueue: function() {
        if (!this._queue) this._queue = new m();
        return this._queue;
      },
      setChannelUrl: function(u) {
        this.getQueue().start(function(v) {
          return this.send(v, u);
        }.bind(this));
      },
      send: function(u, v) {
        v = v || this._opts.channelUrl;
        if (!v) {
          this.getQueue().enqueue(u);
          return;
        }
        var w = {},
          x = new l(v);
        o(w, u);
        o(w, k.deserialize(x.getFragment()));
        var y = l(w.origin).getOrigin(),
          z = q(w.relation.replace(/^parent\./, '')),
          aa = 50,
          ba = function() {
            var ca = z.frames[r];
            try {
              ca.proxyMessage(k.serialize(w), y);
            } catch (da) {
              if (--aa) {
                setTimeout(ba, 100);
              } else j.warn('No such frame "' + r + '" to proxyMessage to');
            }
          };
        ba();
      },
      _computeSize: function() {
        var u = i.getDocumentDimensions(),
          v = 0;
        if (this._opts.resizeWidth) {
          var w = document.body;
          if (w.clientWidth < w.scrollWidth) {
            v = u.width;
          } else {
            var x = w.childNodes;
            for (var y = 0; y < x.length; y++) {
              var z = x[y],
                aa = z.offsetLeft + z.offsetWidth;
              if (aa > v) v = aa;
            }
          }
          v = Math.max(v, s.forced_min_width);
        }
        u.width = v;
        if (this._opts.allowShrink) {
          if (!this._shrinker) this._shrinker = h.create('div');
          h.appendContent(document.body, this._shrinker);
          u.height = Math.max(this._shrinker.offsetTop, 0);
        }
        return u;
      },
      _startResizeMonitor: function() {
        var u, v = document.documentElement;
        if (this._opts.hideOverflow) {
          v.style.overflow = 'hidden';
          document.body.style.overflow = 'hidden';
        }
        var w = (function() {
          var x = this._computeSize(),
            y = Date.now(),
            z = this._lastResizeAckId < this._resizeCount && (y - this._resizeTimestamp) > this._opts.resizeAckTimeout;
          if (!u || (this._opts.expectResizeAck && z) || (this._opts.allowShrink && u.width != x.width) || (!this._opts.allowShrink && u.width < x.width) || (this._opts.allowShrink && u.height != x.height) || (!this._opts.allowShrink && u.height < x.height)) {
            u = x;
            this._resizeCount++;
            this._resizeTimestamp = y;
            var aa = {
              type: 'resize',
              height: x.height,
              ackData: {
                id: this._resizeCount
              }
            };
            if (x.width && x.width != 0) aa.width = x.width;
            try {
              if (n(l(document.referrer)) && p() && window.name && window.parent.location && window.parent.location.toString && n(l(window.parent.location))) {
                var ca = window.parent.document.getElementsByTagName('iframe');
                for (var da = 0; da < ca.length; da = da + 1)
                  if (ca[da].name == window.name) {
                    if (this._opts.resizeWidth) ca[da].style.width = aa.width + 'px';
                    ca[da].style.height = aa.height + 'px';
                  }
              }
              this.send(aa);
            } catch (ba) {
              this.send(aa);
            }
          }
        }).bind(this);
        w();
        setInterval(w, this._opts.resizeTimeout);
      }
    },
    t = o({}, s);
  e.exports.UnverifiedXD = t;
  e.exports.XD = s;
  a.UnverifiedXD = t;
  a.XD = s;
}, null);
__d("Plugin", ["Arbiter", "ArbiterFrame"], function(a, b, c, d, e, f, g, h) {
  var i = {
    CONNECT: 'platform/plugins/connect',
    DISCONNECT: 'platform/plugins/disconnect',
    ERROR: 'platform/plugins/error',
    RELOAD: 'platform/plugins/reload',
    DIALOG: 'platform/plugins/dialog',
    connect: function(j, k) {
      var l = {
        identifier: j,
        href: j,
        story_fbid: k
      };
      g.inform(i.CONNECT, l);
      h.inform(i.CONNECT, l);
    },
    disconnect: function(j, k) {
      var l = {
        identifier: j,
        href: j,
        story_fbid: k
      };
      g.inform(i.DISCONNECT, l);
      h.inform(i.DISCONNECT, l);
    },
    error: function(j, k) {
      g.inform(i.ERROR, {
        action: j,
        content: k
      });
    },
    reload: function(j) {
      g.inform(i.RELOAD, {
        reloadUrl: j || ''
      });
      h.inform(i.RELOAD, {
        reloadUrl: j || ''
      });
    },
    reloadOtherPlugins: function() {
      h.inform(i.RELOAD, {
        reloadUrl: ''
      });
    }
  };
  e.exports = i;
}, null);
__d("PluginMessage", ["DOMEventListener"], function(a, b, c, d, e, f, g) {
  var h = {
    listen: function() {
      g.add(window, 'message', function(event) {
        if ((/\.facebook\.com$/).test(event.origin) && /^FB_POPUP:/.test(event.data)) {
          var i = JSON.parse(event.data.substring(9));
          if ('reload' in i && /^https?:/.test(i.reload)) document.location.replace(i.reload);
        }
      });
    }
  };
  e.exports = h;
}, null);
__d("PluginOptin", ["DOMEvent", "DOMEventListener", "PluginMessage", "PopupWindow", "URI", "UserAgent_DEPRECATED", "copyProperties", "PlatformWidgetEndpoint"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  function o(p, q) {
    m(this, {
      return_params: k.getRequestURI().getQueryData(),
      login_params: {},
      optin_params: {},
      plugin: p,
      api_key: q
    });
    this.addReturnParams({
      ret: 'optin'
    });
    this.login_params.nux = false;
    delete this.return_params.hash;
  }
  m(o.prototype, {
    addReturnParams: function(p) {
      m(this.return_params, p);
      return this;
    },
    addLoginParams: function(p) {
      m(this.login_params, p);
      return this;
    },
    addOptinParams: function(p) {
      m(this.optin_params, p);
      return this;
    },
    start: function() {
      var p = new k(n.dialog('plugin.optin')).addQueryData(this.optin_params).addQueryData({
        app_id: this.api_key || 127760087237610,
        secure: k.getRequestURI().isSecure(),
        social_plugin: this.plugin,
        return_params: JSON.stringify(this.return_params),
        login_params: JSON.stringify(this.login_params)
      });
      if (l.mobile()) {
        p.setSubdomain('m');
      } else p.addQueryData({
        display: 'popup'
      });
      this.popup = j.open(p.toString(), 420, 450);
      i.listen();
      return this;
    }
  });
  o.starter = function(p, q, r, s) {
    var t = new o(p);
    t.addReturnParams(q || {});
    t.addLoginParams(r || {});
    t.addOptinParams(s || {});
    return t.start.bind(t);
  };
  o.listen = function(p, q, r, s, t) {
    h.add(p, 'click', function(u) {
      new g(u).kill();
      o.starter(q, r, s, t)();
    });
  };
  e.exports = o;
}, null);
__d("PluginConnectButton", ["Arbiter", "CSS", "DOM", "DOMDimensions", "DOMEvent", "DOMEventListener", "Form", "Plugin", "PluginOptin", "Style", "URI", "copyProperties", "csx", "cx", "getElementPosition", "PlatformWidgetEndpoint"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
  var w = g.SUBSCRIBE_NEW,
    x = g.subscribe,
    y = function(aa, ba) {
      return l.add(aa, 'click', ba);
    };

  function z(aa) {
    this.config = aa;
    this.busy = false;
    var ba = i.find(aa.form, '.pluginConnectButton');
    this.buttons = ba;
    this.node_connected = i.find(ba, '.pluginConnectButtonConnected');
    this.node_disconnected = i.find(ba, '.pluginConnectButtonDisconnected');
    var ca = function(ea) {
      new k(ea).kill();
      if (!this.busy) {
        this.submit();
        this.busy = this.canpersonalize;
      }
    }.bind(this);
    y(this.node_disconnected, ca);
    y(i.find(ba, '.pluginButtonX button'), ca);
    y(this.node_connected, function(ea) {
      return g.inform(n.DIALOG, ea);
    });
    var da = this.update.bind(this);
    x(n.CONNECT, da, w);
    x(n.DISCONNECT, da, w);
    x(n.ERROR, this.error.bind(this), w);
    x('Connect.Unsafe.xd/reposition', this.flip.bind(this));
    if (aa.autosubmit) this.submit();
  }
  r(z.prototype, {
    update: function(aa, event) {
      this.busy = false;
      var ba = this.config;
      if (event.identifier !== ba.identifier) return;
      var ca = aa === n.CONNECT ? true : false,
        da = v.plugins(ba.plugin);
      da += '/' + (!ca ? "connect" : "disconnect");
      h[ca ? 'show' : 'hide'](this.node_connected);
      h[ca ? 'hide' : 'show'](this.node_disconnected);
      try {
        if (document.activeElement.nodeName.toLowerCase() === 'button') {
          var fa = ca ? this.node_connected : this.node_disconnected,
            ga = i.find(fa, 'button');
          ga.disabled = false;
          ga.focus();
        }
      } catch (ea) {}
      ba.connected = ca;
      ba.form.setAttribute('action', da);
      ba.form.setAttribute('ajaxify', da);
    },
    error: function(event, aa) {
      this.busy = false;
      if (aa.action in {
          connect: 1,
          disconnect: 1
        }) {
        i.setContent(this.buttons, aa.content);
        i.find(this.buttons, 'a').focus();
      }
    },
    submit: function() {
      if (!this.config.canpersonalize) return this.login();
      m.bootstrap(this.config.form);
      this.fireStateToggle();
    },
    fireStateToggle: function() {
      var aa = this.config;
      if (aa.connected) {
        n.disconnect(aa.identifier);
      } else n.connect(aa.identifier);
    },
    login: function() {
      var aa = this.config.plugin;
      new o(aa, q.getRequestURI().getQueryData().api_key).addReturnParams({
        act: 'connect'
      }).addLoginParams({
        social_plugin_action: this.config.pluginaction
      }).start();
    },
    flip: function(aa, ba) {
      var ca = i.scry(document.body, "._4xn8");
      if (ca.length === 0) {
        return;
      } else ca = ca[0];
      var da = i.scry(this.config.form, '.pluginConnectButtonConnected .pluginButtonIcon'),
        ea = p.get(da[0], 'display') !== 'none' ? da[0] : da[1],
        fa = i.find(document.body, '.pluginConnectButtonLayoutRoot'),
        ga;
      if (ba.type === 'reposition') {
        h.addClass(fa, "_1f8a");
        p.set(fa, 'padding-left', 450 - fa.offsetWidth + 'px');
        h.removeClass(fa, "_1f8b");
        ga = u(ea).x + j.getElementDimensions(ea).width / 2 - 6;
      } else {
        h.addClass(fa, "_1f8b");
        p.set(fa, 'padding-left', '0px');
        h.removeClass(fa, "_1f8a");
        ga = 6;
      }
      p.set(ca, 'left', ga + 'px');
    }
  });
  e.exports = z;
}, null);
__d("UnverifiedXD", ["XD"], function(a, b, c, d, e, f) {
  var g = b('XD').UnverifiedXD;
  e.exports = g;
}, null);
__d("PluginResize", ["Locale", "Log", "UnverifiedXD", "copyProperties", "getOffsetParent", "getStyleProperty"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  function m(q) {
    q = q || document.body;
    var r = 0,
      s = k(q);
    if (g.isRTL() && s) {
      r = s.offsetWidth - q.offsetLeft - q.offsetWidth;
    } else if (!g.isRTL()) r = q.offsetLeft;
    return n(q) + r;
  }

  function n(q) {
    return Math.ceil(parseFloat(l(q, 'width'))) || q.offsetWidth;
  }

  function o(q) {
    q = q || document.body;
    return q.offsetHeight + q.offsetTop;
  }

  function p(q, r, event, s) {
    this.calcWidth = q || m;
    this.calcHeight = r || o;
    this.width = (void 0);
    this.height = (void 0);
    this.reposition = !!s;
    this.event = event || 'resize';
  }
  j(p.prototype, {
    resize: function() {
      var q = this.calcWidth(),
        r = this.calcHeight();
      if (q !== this.width || r !== this.height) {
        h.debug('Resizing Plugin: (%s, %s, %s, %s)', q, r, this.event, this.reposition);
        this.width = q;
        this.height = r;
        i.send({
          type: this.event,
          width: q,
          height: r,
          reposition: this.reposition
        });
      }
      return this;
    },
    auto: function(q) {
      setInterval(this.resize.bind(this), q || 250);
      return this;
    }
  });
  p.auto = function(q, event, r) {
    return new p(m.bind(null, q), o.bind(null, q), event).resize().auto(r);
  };
  p.autoHeight = function(q, r, event, s) {
    return new p(function() {
      return q;
    }, o.bind(null, r), event).resize().auto(s);
  };
  p.getElementWidth = n;
  e.exports = p;
}, null);
__d("PluginConnectButtonResize", ["DOMDimensions", "DOMQuery", "PluginResize", "Style", "getElementPosition"], function(a, b, c, d, e, f, g, h, i, j, k) {
  function l(m, n, o) {
    if (o) j.set(m, 'width', o + 'px');
    i.auto(m, 'resize.flow');

    function p() {
      var q = h.scry(document.body, '.uiTypeaheadView')[0];
      if (!q) return {
        x: 0,
        y: 0
      };
      var r = k(q),
        s = g.getElementDimensions(q);
      return {
        x: r.x + s.width,
        y: r.y + s.height
      };
    }
    new i(function() {
      return Math.max(i.getElementWidth(m), n && n.offsetWidth, p().x);
    }, function() {
      return Math.max(m.offsetHeight, n ? n.offsetHeight + n.offsetTop : 0, p().y);
    }, 'resize.iframe', true).resize().auto();
  }
  e.exports = l;
}, null);
__d("PluginConnection", ["Arbiter", "CSS", "Plugin", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
  var k = function() {};
  j(k.prototype, {
    init: function(l, m, n, event) {
      event = event || i.CONNECT;
      this.identifier = l;
      this.element = m;
      this.css = n;
      g.subscribe([i.CONNECT, i.DISCONNECT], function(o, p) {
        if (l === p.href) h[o === event ? 'addClass' : 'removeClass'](m, n);
        return true;
      });
      return this;
    },
    connected: function() {
      return h.hasClass(this.element, this.css);
    },
    connect: function() {
      return g.inform(i.CONNECT, {
        href: this.identifier
      }, g.BEHAVIOR_STATE);
    },
    disconnect: function() {
      return g.inform(i.DISCONNECT, {
        href: this.identifier
      }, g.BEHAVIOR_STATE);
    },
    toggle: function() {
      return this.connected() ? this.disconnect() : this.connect();
    }
  });
  k.init = function(l) {
    for (var m, n = 0; n < l.length; n++) {
      m = new k();
      m.init.apply(m, l[n]);
    }
  };
  e.exports = k;
}, null);
__d("PluginReturn", ["Arbiter", "Log", "PlatformDialog", "Plugin", "URI", "invariant", "PlatformWidgetEndpoint"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  g.subscribe(i.RESPONSE, function(event, o) {
    if (o.error_code) {
      h.debug('Plugin Return Error (%s): %s', o.error_code, o.error_message || o.error_description);
      return;
    }
    j.reload(o.plugin_reload);
  });
  var n = {
    auto: function() {
      g.subscribe(j.RELOAD, function(event, o) {
        var p = typeof o == 'object' ? o.reloadUrl : o;
        n.reload(p);
      });
    },
    syncPlugins: function() {
      g.subscribe(j.RELOAD, function(event, o) {
        if (o.crossFrame) n.reload(o.reloadUrl);
      });
    },
    reload: function(o) {
      var p = k.getRequestURI().removeQueryData('ret').removeQueryData('act').removeQueryData('hash');
      if (o) {
        var q = new k(o);
        l(m.isPluginEndpoint(q.getPath()));
        p.setPath(q.getPath()).addQueryData(q.getQueryData());
      }
      window.location.replace(p.toString());
    }
  };
  e.exports = n;
}, null);
__d("PluginXDReady", ["Arbiter", "UnverifiedXD"], function(a, b, c, d, e, f, g, h) {
  var i = {
    handleMessage: function(j) {
      if (!j.method) return;
      try {
        g.inform('Connect.Unsafe.' + j.method, JSON.parse(j.params), g.BEHAVIOR_PERSISTENT);
      } catch (k) {}
    }
  };
  a.XdArbiter = i;
  h.send({
    xd_action: 'plugin_ready',
    name: window.name
  });
  e.exports = null;
}, null);