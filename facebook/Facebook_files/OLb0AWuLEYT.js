/*!CK:3497922410!*/
/*1424472438,*/
if (self.CavalryLogger) {
  CavalryLogger.start_js(["cZ+Dx"]);
}

if (!Array.from) Array.from = function(a) {
  if (a == null) throw new TypeError('Object is null or undefined');
  var b = arguments[1],
    c = arguments[2],
    d = this,
    e = Object(a),
    f = typeof Symbol === 'function' ? Symbol.iterator : '@@iterator',
    g = typeof b === 'function',
    h = typeof e[f] === 'function',
    i = 0,
    j, k;
  if (h) {
    j = typeof d === 'function' ? new d() : [];
    var l = e[f](),
      m;
    while (!(m = l.next()).done) {
      k = m.value;
      if (g) k = b.call(c, k, i);
      j[i] = k;
      i += 1;
    }
    j.length = i;
    return j;
  }
  var n = e.length;
  if (isNaN(n) || n < 0) n = 0;
  j = typeof d === 'function' ? new d(n) : new Array(n);
  while (i < n) {
    k = e[i];
    if (g) k = b.call(c, k, i);
    j[i] = k;
    i += 1;
  }
  j.length = i;
  return j;
};

self.__DEV__ = self.__DEV__ || 0;
(function(a) {
  function b(c, d) {
    if (this == null) throw new TypeError('Array.prototype.findIndex called on null or undefined');
    if (typeof c !== 'function') throw new TypeError('predicate must be a function');
    var e = Object(this),
      f = e.length >>> 0;
    for (var g = 0; g < f; g++)
      if (c.call(d, e[g], g, e)) return g;
    return -1;
  }
  if (!Array.prototype.findIndex) Array.prototype.findIndex = b;
  if (!Array.prototype.find) Array.prototype.find = function(c, d) {
    if (this == null) throw new TypeError('Array.prototype.find called on null or undefined');
    var e = b.call(this, c, d);
    return e === -1 ? a : this[e];
  };
})();




if (JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]') JSON.stringify = function(a) {
  var b = /\u2028/g,
    c = /\u2029/g;
  return function(d, e, f) {
    var g = a.call(this, d, e, f);
    if (g) {
      if (-1 < g.indexOf('\u2028')) g = g.replace(b, '\\u2028');
      if (-1 < g.indexOf('\u2029')) g = g.replace(c, '\\u2029');
    }
    return g;
  };
}(JSON.stringify);




if (!Object.assign) Object.assign = function(a, b) {
  if (a == null) throw new TypeError('Object.assign target cannot be null or undefined');
  var c = Object(a),
    d = Object.prototype.hasOwnProperty;
  for (var e = 1; e < arguments.length; e++) {
    var f = arguments[e];
    if (f == null) continue;
    var g = Object(f);
    for (var h in g)
      if (d.call(g, h)) c[h] = g[h];
  }
  return c;
};

(function(a) {
  a.__m = function(b, c) {
    b.__SMmeta = c;
    return b;
  };
})(this);
if (!String.prototype.startsWith) String.prototype.startsWith = function(a) {
  "use strict";
  if (this == null) throw TypeError();
  var b = String(this),
    c = arguments.length > 1 ? (Number(arguments[1]) || 0) : 0,
    d = Math.min(Math.max(c, 0), b.length);
  return b.indexOf(String(a), c) == d;
};
if (!String.prototype.endsWith) String.prototype.endsWith = function(a) {
  "use strict";
  if (this == null) throw TypeError();
  var b = String(this),
    c = b.length,
    d = String(a),
    e = arguments.length > 1 ? (Number(arguments[1]) || 0) : c,
    f = Math.min(Math.max(e, 0), c),
    g = f - d.length;
  if (g < 0) return false;
  return b.lastIndexOf(d, g) == g;
};
if (!String.prototype.contains) String.prototype.contains = function(a) {
  "use strict";
  if (this == null) throw TypeError();
  var b = String(this),
    c = arguments.length > 1 ? (Number(arguments[1]) || 0) : 0;
  return b.indexOf(String(a), c) != -1;
};
if (!String.prototype.repeat) String.prototype.repeat = function(a) {
  "use strict";
  if (this == null) throw TypeError();
  var b = String(this);
  a = Number(a) || 0;
  if (a < 0 || a === Infinity) throw RangeError();
  if (a === 1) return b;
  var c = '';
  while (a) {
    if (a & 1) c += b;
    if ((a >>= 1)) b += b;
  }
  return c;
};


__t = function(a) {
  return a[0];
};
__w = function(a) {
  return a;
};

(function(a) {
  if (a.require) return;
  var b = Object.prototype.toString,
    c = {},
    d = {},
    e = {},
    f = 0,
    g = 1,
    h = 2,
    i = Object.prototype.hasOwnProperty;

  function j(y) {
    var z = Array.prototype.slice.call(y),
      aa = {},
      ba, ca, da, ea;
    while (z.length) {
      ca = z.shift();
      if (aa[ca]) continue;
      aa[ca] = true;
      da = c[ca];
      if (!da || !da.waiting) continue;
      for (ba = 0; ba < da.dependencies.length; ba++) {
        ea = da.dependencies[ba];
        if (!c[ea] || c[ea].waiting) z.push(ea);
      }
    }
    for (ca in aa)
      if (i.call(aa, ca)) z.push(ca);
    var fa = [];
    for (ba = 0; ba < z.length; ba++) {
      ca = z[ba];
      var ga = ca;
      da = c[ca];
      if (!da) {
        ga += ' is not defined';
      } else if (!da.waiting) {
        ga += ' is ready';
      } else {
        var ha = [];
        for (var ia = 0; ia < da.dependencies.length; ia++) {
          ea = da.dependencies[ia];
          if (!c[ea] || c[ea].waiting) ha.push(ea);
        }
        ga += ' is waiting for ' + ha.join(', ');
      }
      fa.push(ga);
    }
    return fa.join('\n');
  }

  function k(y) {
    this.name = 'ModuleError';
    this.message = y;
    this.stack = Error(y).stack;
    this.framesToPop = 2;
  }
  k.prototype = Object.create(Error.prototype);
  k.prototype.constructor = k;
  var l = a.performance || a.msPerformance || a.webkitPerformance || {};
  if (!l.now) l = a.Date;
  var m = l ? l.now.bind(l) : function() {
      return 0;
    },
    n = [0],
    o = 0;

  function p(y) {
    var z = c[y],
      aa, ba, ca;
    if (z && z.exports) {
      if (z.refcount-- === 1) delete c[y];
      return z.exports;
    }
    if (a.ErrorUtils && !a.ErrorUtils.inGuard()) return ErrorUtils.applyWithGuard(p, this, arguments);
    if (!z) {
      ca = 'Requiring unknown module "' + y + '"';
      throw new k(ca);
    }
    if (z.hasError) throw new k('Requiring module "' + y + '" which threw an exception');
    if (z.waiting) throw new k('Requiring module "' + y + '" with unresolved dependencies: ' + j([y]));
    var da = z.exports = {},
      ea = z.factory;
    if (b.call(ea) === '[object Function]') {
      var fa = [],
        ga = z.dependencies,
        ha = ga.length,
        ia;
      if (z.special & h) ha = Math.min(ha, ea.length);
      try {
        for (ba = 0; fa.length < ha; ba++) {
          aa = ga[ba];
          if (!z.inlineRequires[aa]) fa.push(aa === 'module' ? z : (aa === 'exports' ? da : p.call(null, aa)));
        }++o;
        n.unshift(0);
        var ka = m();
        try {
          ia = ea.apply(z.context || a, fa);
        } catch (ja) {
          if (c.ex && c.erx) {
            var la = p.call(null, 'ex'),
              ma = p.call(null, 'erx'),
              na = ma(ja.message);
            if (na[0].indexOf(' from module "%s"') < 0) {
              na[0] += ' from module "%s"';
              na[na.length] = y;
            }
            ja.message = la.apply(null, na);
          }
          throw ja;
        } finally {
          var oa = m() - ka,
            pa = oa - n.shift();
          n[0] += oa;
          z.factoryTime = pa;
        }
      } catch (ja) {
        z.hasError = true;
        z.exports = null;
        throw ja;
      }
      if (ia) z.exports = ia;
    } else z.exports = ea;
    if (z.refcount-- === 1) delete c[y];
    return z.exports;
  }
  p.__getFactoryTime = function() {
    var y = 0;
    for (var z in c)
      if (c.hasOwnProperty(z)) y += c[z].factoryTime;
    return y;
  };
  p.__getTotalFactories = function() {
    return o;
  };

  function q(y, z, aa, ba, ca, da, ea) {
    if (a.TimeSlice && !a.TimeSlice.inGuard()) return a.TimeSlice.guard(function() {
      q(y, z, aa, ba, ca, da, ea);
    }, 'define ' + y)();
    if (z === (void 0)) {
      z = [];
      aa = y;
      y = u();
    } else if (aa === (void 0)) {
      aa = z;
      if (b.call(y) === '[object Array]') {
        z = y;
        y = u();
      } else z = [];
    }
    var fa = {
        cancel: s.bind(this, y)
      },
      ga = c[y];
    if (ga) {
      if (da) ga.refcount += da;
      return fa;
    } else if (!z && !aa && da) {
      e[y] = (e[y] || 0) + da;
      return fa;
    }
    var ha = (e[y] || 0) + (da || 0);
    delete e[y];
    ga = new r(y, ha, null, aa, z, ca, ba, ea || {});
    c[y] = ga;
    w(y);
    return fa;
  }

  function r(y, z, aa, ba, ca, da, ea, fa) {
    this.id = y;
    this.refcount = z;
    this.exports = aa || null;
    this.factory = ba;
    this.dependencies = ca;
    this.context = da;
    this.special = ea || 0;
    this.inlineRequires = fa;
    this.waitingMap = {};
    this.waiting = 0;
    this.hasError = false;
    this.factoryTime = null;
  }

  function s(y) {
    if (!c[y]) return;
    var z = c[y];
    delete c[y];
    for (var aa in z.waitingMap)
      if (z.waitingMap[aa]) delete d[aa][y];
    for (var ba = 0; ba < z.dependencies.length; ba++) {
      aa = z.dependencies[ba];
      if (c[aa]) {
        if (c[aa].refcount-- === 1) s(aa);
      } else if (e[aa]) e[aa] --;
    }
  }

  function t(y, z, aa) {
    return q(y, z, (void 0), g, aa, 1);
  }

  function u() {
    return '__mod__' + f++;
  }

  function v(y, z) {
    if (!y.waitingMap[z] && y.id !== z) {
      y.waiting++;
      y.waitingMap[z] = 1;
      d[z] || (d[z] = {});
      d[z][y.id] = 1;
    }
  }

  function w(y) {
    var z = [],
      aa = c[y],
      ba, ca, da;
    for (ca = 0; ca < aa.dependencies.length; ca++) {
      ba = aa.dependencies[ca];
      if (!c[ba]) {
        v(aa, ba);
      } else if (c[ba].waiting)
        for (da in c[ba].waitingMap)
          if (c[ba].waitingMap[da]) v(aa, da);
    }
    if (aa.waiting === 0 && aa.special & g) z.push(y);
    if (d[y]) {
      var ea = d[y],
        fa;
      d[y] = (void 0);
      for (ba in ea) {
        fa = c[ba];
        for (da in aa.waitingMap)
          if (aa.waitingMap[da]) v(fa, da);
        if (fa.waitingMap[y]) {
          fa.waitingMap[y] = 0;
          fa.waiting--;
        }
        if (fa.waiting === 0 && fa.special & g) z.push(ba);
      }
    }
    for (ca = 0; ca < z.length; ca++) p.call(null, z[ca]);
  }

  function x(y, z) {
    c[y] = new r(y, 0, z);
  }
  x('module', 0);
  x('exports', 0);
  x('define', q);
  x('global', a);
  x('require', p);
  x('requireDynamic', p);
  x('requireLazy', t);
  q.amd = {};
  a.define = q;
  a.require = p;
  a.requireDynamic = p;
  a.requireLazy = t;
  p.__debug = {
    modules: c,
    deps: d,
    printDependencyInfo: function() {
      if (!a.console) return;
      var y = Object.keys(p.__debug.deps);
      a.console.log(j(y));
    }
  };
  a.__d = function(y, z, aa, ba, ca) {
    var da = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
    q(y, da.concat(z), aa, ba || h, null, null, ca);
  };
})(this);
__d("copyProperties", [], function(a, b, c, d, e, f) {
  function g(h, i, j, k, l, m, n) {
    h = h || {};
    var o = [i, j, k, l, m],
      p = 0,
      q;
    while (o[p]) {
      q = o[p++];
      for (var r in q) h[r] = q[r];
      if (q.hasOwnProperty && q.hasOwnProperty('toString') && (typeof q.toString != 'undefined') && (h.toString !== q.toString)) h.toString = q.toString;
    }
    return h;
  }
  e.exports = g;
}, null);
__d("Env", ["copyProperties"], function(a, b, c, d, e, f, g) {
  var h = {
    start: Date.now()
  };
  if (a.Env) {
    g(h, a.Env);
    a.Env = (void 0);
  }
  e.exports = h;
}, null);
__d("eprintf", [], function(a, b, c, d, e, f) {
  var g = function(h) {
    var i = Array.prototype.slice.call(arguments).map(function(l) {
        return String(l);
      }),
      j = h.split('%s').length - 1;
    if (j !== i.length - 1) return g('eprintf args number mismatch: %s', JSON.stringify(i));
    var k = 1;
    return h.replace(/%s/g, function(l) {
      return String(i[k++]);
    });
  };
  e.exports = g;
}, null);
__d("ex", ["eprintf"], function(a, b, c, d, e, f, g) {
  var h = function() {
    for (var i = [], j = 0, k = arguments.length; j < k; j++) i.push(arguments[j]);
    i = i.map(function(l) {
      return String(l);
    });
    if (i[0].split('%s').length !== i.length) return h('ex args number mismatch: %s', JSON.stringify(i));
    return h._prefix + JSON.stringify(i) + h._suffix;
  };
  h._prefix = '<![EX[';
  h._suffix = ']]>';
  e.exports = h;
}, null);
__d("erx", ["ex"], function(a, b, c, d, e, f, g) {
  var h = function(i) {
    if (typeof i !== 'string') return i;
    var j = i.indexOf(g._prefix),
      k = i.lastIndexOf(g._suffix);
    if (j < 0 || k < 0) return [i];
    var l = j + g._prefix.length,
      m = k + g._suffix.length;
    if (l >= k) return ['erx slice failure: %s', i];
    var n = i.substring(0, j),
      o = i.substring(m);
    i = i.substring(l, k);
    var p;
    try {
      p = JSON.parse(i);
      p[0] = n + p[0] + o;
    } catch (q) {
      return ['erx parse failure: %s', i];
    }
    return p;
  };
  e.exports = h;
}, null);
__d("ErrorUtils", ["Env", "eprintf", "erx"], function(a, b, c, d, e, f, g, h, i) {
  var j = {},
    k = '<anonymous guard>',
    l = '<generated guard>',
    m = '<window.onerror>',
    n = /^https?:\/\//i,
    o = /^Type Mismatch for/,
    p = ['Unknown script code', 'Function code', 'eval code'],
    q = new RegExp('(.*?)(\\s)(?:' + p.join('|') + ')$'),
    r = [],
    s, t = [],
    u = 50,
    v = [],
    w = false,
    x = false,
    y = j.nocatch || (/nocatch/).test(location.search);

  function z(la) {
    if (!la) return [];
    var ma = la.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]|^\w+:\s.*?\n/g, '').split('\n').map(function(na) {
      var oa, pa, qa;
      na = na.trim();
      if (/(:(\d+)(:(\d+))?)$/.test(na)) {
        pa = RegExp.$2;
        qa = RegExp.$4;
        na = na.slice(0, -RegExp.$1.length);
      }
      if (q.test(na) || /(.*)(@|\s)[^\s]+$/.test(na)) {
        na = na.substring(RegExp.$1.length + 1);
        oa = /(at)?\s*(.*)([^\s]+|$)/.test(RegExp.$1) ? RegExp.$2 : '';
      }
      var ra = {
        identifier: oa,
        script: na,
        line: pa,
        column: qa
      };
      if (s) s(ra);
      ra.text = '    at' + (ra.identifier ? ' ' + ra.identifier + ' (' : ' ') + ra.script + (ra.line ? ':' + ra.line : '') + (ra.column ? ':' + ra.column : '') + (ra.identifier ? ')' : '');
      return ra;
    });
    return ma;
  }

  function aa(la) {
    if (!la) {
      return {};
    } else if (la._originalError) return la;
    var ma = z(la.stackTrace || la.stack),
      na = false;
    if (la.framesToPop) {
      var oa = la.framesToPop,
        pa;
      while (oa > 0 && ma.length > 0) {
        pa = ma.shift();
        oa--;
        na = true;
      }
      if (o.test(la.message) && la.framesToPop === 2 && pa)
        if (n.test(pa.script)) la.message += ' at ' + pa.script + (pa.line ? ':' + pa.line : '') + (pa.column ? ':' + pa.column : '');
      delete la.framesToPop;
    }
    var qa = {
      line: la.lineNumber || la.line,
      column: la.columnNumber || la.column,
      name: la.name,
      message: la.message,
      messageWithParams: la.messageWithParams,
      type: la.type,
      script: la.fileName || la.sourceURL || la.script,
      stack: ma.map(function(sa) {
        return sa.text;
      }).join('\n'),
      stackFrames: ma,
      guard: la.guard,
      guardList: la.guardList,
      extra: la.extra,
      snapshot: la.snapshot
    };
    if (typeof qa.message === 'string' && !qa.messageWithParams) {
      qa.messageWithParams = i(qa.message);
      qa.message = h.apply(a, qa.messageWithParams);
    } else {
      qa.messageObject = qa.message;
      qa.message = String(qa.message);
    }
    if (s) s(qa);
    if (na) {
      delete qa.script;
      delete qa.line;
      delete qa.column;
    }
    if (ma[0]) {
      qa.script = qa.script || ma[0].script;
      qa.line = qa.line || ma[0].line;
      qa.column = qa.column || ma[0].column;
    }
    qa._originalError = la;
    for (var ra in qa)(qa[ra] == null && delete qa[ra]);
    return qa;
  }

  function ba(la, ma) {
    if (x) return false;
    if (v.length > 0) {
      la.guard = la.guard || v[0];
      la.guardList = v.slice();
    }
    la = aa(la);
    !ma;
    if (t.length > u) t.splice(u / 2, 1);
    t.push(la);
    x = true;
    for (var na = 0; na < r.length; na++) try {
      r[na](la);
    } catch (oa) {}
    x = false;
    return true;
  }

  function ca() {
    return w;
  }

  function da(la) {
    v.unshift(la);
    w = true;
  }

  function ea() {
    v.shift();
    w = (v.length !== 0);
  }

  function fa(la, ma, na, oa, pa) {
    da(pa || k);
    var qa;
    if (g.nocatch) y = true;
    if (y) {
      try {
        qa = la.apply(ma, na || []);
      } finally {
        ea();
      }
      return qa;
    }
    try {
      qa = la.apply(ma, na || []);
      return qa;
    } catch (ra) {
      var sa = aa(ra);
      if (oa) oa(sa);
      if (la) sa.callee = la.toString().substring(0, 100);
      if (na) sa.args = Array.prototype.slice.call(na).toString().substring(0, 100);
      sa.guard = v[0];
      sa.guardList = v.slice();
      ba(sa);
    } finally {
      ea();
    }
  }

  function ga(la, ma, na) {
    ma = ma || la.name || l;

    function oa() {
      return fa(la, na || this, arguments, null, ma);
    }
    return oa;
  }

  function ha(la, ma, na, oa, pa) {
    pa = pa || {};
    pa.message = pa.message || la;
    pa.script = pa.script || ma;
    pa.line = pa.line || na;
    pa.column = pa.column || oa;
    pa.guard = m;
    pa.guardList = [m];
    ba(pa, true);
  }
  window.onerror = ha;

  function ia(la, ma) {
    r.push(la);
    if (!ma) t.forEach(la);
  }

  function ja(la) {
    s = la;
  }
  var ka = {
    ANONYMOUS_GUARD_TAG: k,
    GENERATED_GUARD_TAG: l,
    GLOBAL_ERROR_HANDLER_TAG: m,
    addListener: ia,
    setSourceResolver: ja,
    applyWithGuard: fa,
    guard: ga,
    history: t,
    inGuard: ca,
    normalizeError: aa,
    onerror: ha,
    reportError: ba
  };
  e.exports = a.ErrorUtils = ka;
  if (typeof __t === 'function' && __t.setHandler) __t.setHandler(ba);
}, null);
__d("CallbackDependencyManager", ["ErrorUtils"], function(a, b, c, d, e, f, g) {
  function h() {
    "use strict";
    this.$CallbackDependencyManager0 = {};
    this.$CallbackDependencyManager1 = {};
    this.$CallbackDependencyManager2 = 1;
    this.$CallbackDependencyManager3 = {};
  }
  h.prototype.$CallbackDependencyManager4 = function(i, j) {
    "use strict";
    var k = 0,
      l = {};
    for (var m = 0, n = j.length; m < n; m++) l[j[m]] = 1;
    for (var o in l) {
      if (this.$CallbackDependencyManager3[o]) continue;
      k++;
      if (this.$CallbackDependencyManager0[o] === (void 0)) this.$CallbackDependencyManager0[o] = {};
      this.$CallbackDependencyManager0[o][i] = (this.$CallbackDependencyManager0[o][i] || 0) + 1;
    }
    return k;
  };
  h.prototype.$CallbackDependencyManager5 = function(i) {
    "use strict";
    if (!this.$CallbackDependencyManager0[i]) return;
    for (var j in this.$CallbackDependencyManager0[i]) {
      this.$CallbackDependencyManager0[i][j] --;
      if (this.$CallbackDependencyManager0[i][j] <= 0) delete this.$CallbackDependencyManager0[i][j];
      this.$CallbackDependencyManager1[j].$CallbackDependencyManager6--;
      if (this.$CallbackDependencyManager1[j].$CallbackDependencyManager6 <= 0) {
        var k = this.$CallbackDependencyManager1[j].$CallbackDependencyManager7;
        delete this.$CallbackDependencyManager1[j];
        g.applyWithGuard(k);
      }
    }
  };
  h.prototype.addDependenciesToExistingCallback = function(i, j) {
    "use strict";
    if (!this.$CallbackDependencyManager1[i]) return null;
    var k = this.$CallbackDependencyManager4(i, j);
    this.$CallbackDependencyManager1[i].$CallbackDependencyManager6 += k;
    return i;
  };
  h.prototype.isPersistentDependencySatisfied = function(i) {
    "use strict";
    return !!this.$CallbackDependencyManager3[i];
  };
  h.prototype.satisfyPersistentDependency = function(i) {
    "use strict";
    this.$CallbackDependencyManager3[i] = 1;
    this.$CallbackDependencyManager5(i);
  };
  h.prototype.satisfyNonPersistentDependency = function(i) {
    "use strict";
    var j = this.$CallbackDependencyManager3[i] === 1;
    if (!j) this.$CallbackDependencyManager3[i] = 1;
    this.$CallbackDependencyManager5(i);
    if (!j) delete this.$CallbackDependencyManager3[i];
  };
  h.prototype.registerCallback = function(i, j) {
    "use strict";
    var k = this.$CallbackDependencyManager2;
    this.$CallbackDependencyManager2++;
    var l = this.$CallbackDependencyManager4(k, j);
    if (l === 0) {
      g.applyWithGuard(i);
      return null;
    }
    this.$CallbackDependencyManager1[k] = {
      $CallbackDependencyManager7: i,
      $CallbackDependencyManager6: l
    };
    return k;
  };
  h.prototype.unsatisfyPersistentDependency = function(i) {
    "use strict";
    delete this.$CallbackDependencyManager3[i];
  };
  e.exports = h;
}, null);
__d("EventSubscription", [], function(a, b, c, d, e, f) {
  'use strict';

  function g(h) {
    this.subscriber = h;
  }
  g.prototype.remove = function() {
    this.subscriber.removeSubscription(this);
  };
  e.exports = g;
}, null);
__d("EmitterSubscription", ["EventSubscription"], function(a, b, c, d, e, f, g) {
  'use strict';
  for (var h in g)
    if (g.hasOwnProperty(h)) j[h] = g[h];
  var i = g === null ? null : g.prototype;
  j.prototype = Object.create(i);
  j.prototype.constructor = j;
  j.__superConstructor__ = g;

  function j(k, l, m) {
    g.call(this, k);
    this.listener = l;
    this.context = m;
  }
  e.exports = j;
}, null);
__d("sprintf", [], function(a, b, c, d, e, f) {
  function g(h) {
    for (var i = [], j = 1, k = arguments.length; j < k; j++) i.push(arguments[j]);
    var l = 0;
    return h.replace(/%s/g, function(m) {
      return i[l++];
    });
  }
  e.exports = g;
}, null);
__d("invariant", ["ex", "sprintf"], function(a, b, c, d, e, f, g, h) {
  "use strict";
  var i = g,
    j = function(k, l) {
      if (!k) {
        var m;
        if (l === (void 0)) {
          m = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var n = ['Invariant Violation: ' + l];
          for (var o = 2, p = arguments.length; o < p; o++) n.push(arguments[o]);
          m = new Error(i.apply(null, n));
          m.messageWithParams = n;
        }
        m.framesToPop = 1;
        throw m;
      }
    };
  e.exports = j;
}, null);
__d("EventSubscriptionVendor", ["invariant"], function(a, b, c, d, e, f, g) {
  'use strict';

  function h() {
    this.$EventSubscriptionVendor0 = {};
    this.$EventSubscriptionVendor1 = null;
  }
  h.prototype.addSubscription = function(i, j) {
    g(j.subscriber === this);
    if (!this.$EventSubscriptionVendor0[i]) this.$EventSubscriptionVendor0[i] = [];
    var k = this.$EventSubscriptionVendor0[i].length;
    this.$EventSubscriptionVendor0[i].push(j);
    j.eventType = i;
    j.key = k;
    return j;
  };
  h.prototype.removeAllSubscriptions = function(i) {
    if (i === (void 0)) {
      this.$EventSubscriptionVendor0 = {};
    } else delete this.$EventSubscriptionVendor0[i];
  };
  h.prototype.removeSubscription = function(i) {
    var j = i.eventType,
      k = i.key,
      l = this.$EventSubscriptionVendor0[j];
    if (l) delete l[k];
  };
  h.prototype.getSubscriptionsForType = function(i) {
    return this.$EventSubscriptionVendor0[i];
  };
  e.exports = h;
}, null);
__d("emptyFunction", [], function(a, b, c, d, e, f) {
  function g(i) {
    return function() {
      return i;
    };
  }

  function h() {}
  h.thatReturns = g;
  h.thatReturnsFalse = g(false);
  h.thatReturnsTrue = g(true);
  h.thatReturnsNull = g(null);
  h.thatReturnsThis = function() {
    return this;
  };
  h.thatReturnsArgument = function(i) {
    return i;
  };
  e.exports = h;
}, null);
__d("ExecutionEnvironment", [], function(a, b, c, d, e, f) {
  "use strict";
  var g = !!(typeof window !== 'undefined' && window.document && window.document.createElement),
    h = {
      canUseDOM: g,
      canUseWorkers: typeof Worker !== 'undefined',
      canUseEventListeners: g && !!(window.addEventListener || window.attachEvent),
      canUseViewport: g && !!window.screen,
      isInWorker: !g
    };
  e.exports = h;
}, null);
__d("performance", ["ExecutionEnvironment"], function(a, b, c, d, e, f, g) {
  "use strict";
  var h;
  if (g.canUseDOM) h = window.performance || window.msPerformance || window.webkitPerformance;
  e.exports = h || {};
}, null);
__d("performanceNow", ["performance"], function(a, b, c, d, e, f, g) {
  var h = g;
  if (!h || !h.now) h = Date;
  var i = h.now.bind(h);
  e.exports = i;
}, null);
__d("Stopwatch", ["performanceNow"], function(a, b, c, d, e, f, g) {
  function h() {
    "use strict";
    this.reset();
  }
  h.prototype.reset = function() {
    "use strict";
    this.$Stopwatch0 = g();
  };
  h.prototype.read = function() {
    "use strict";
    return g() - this.$Stopwatch0;
  };
  e.exports = h;
}, null);
__d("StopwatchPool", ["Stopwatch"], function(a, b, c, d, e, f, g) {
  var h = 0,
    i = [],
    j = {},
    k = {
      acquire: function() {
        var l;
        if (i.length > 0) {
          l = i.pop();
        } else {
          h++;
          l = new g();
          l.__index = h;
        }
        j[l.__index] = l;
        return l;
      },
      release: function(l) {
        if (l.__index && j[l.__index] === l) {
          delete j[l.__index];
          i.push(l);
        }
      }
    };
  e.exports = k;
}, null);
__d("CircularBuffer", ["invariant"], function(a, b, c, d, e, f, g) {
  function h(i) {
    "use strict";
    g(i > 0);
    this.$CircularBuffer0 = i;
    this.$CircularBuffer1 = 0;
    this.$CircularBuffer2 = [];
  }
  h.prototype.write = function(i) {
    "use strict";
    if (this.$CircularBuffer2.length < this.$CircularBuffer0) {
      this.$CircularBuffer2.push(i);
    } else {
      this.$CircularBuffer2[this.$CircularBuffer1] = i;
      this.$CircularBuffer1++;
      this.$CircularBuffer1 %= this.$CircularBuffer0;
    }
    return this;
  };
  h.prototype.read = function() {
    "use strict";
    return this.$CircularBuffer2.slice(this.$CircularBuffer1).concat(this.$CircularBuffer2.slice(0, this.$CircularBuffer1));
  };
  h.prototype.clear = function() {
    "use strict";
    this.$CircularBuffer1 = 0;
    this.$CircularBuffer2 = [];
    return this;
  };
  e.exports = h;
}, null);
/**
 * @generated SignedSource<<38c660df4077b7dc57a24ea3cec01c11>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic
 * Denicola
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @preserve-header
 * @providesModule ImmediateImplementation
 */
__d("ImmediateImplementation", [], function(a, b, c, d, e, f) {
  (function(g, h) {
    "use strict";
    var i = 1,
      j = {},
      k = {},
      l = k,
      m = false,
      n = g.document,
      o;

    function p(x) {
      var y = x[0];
      x = Array.prototype.slice.call(x, 1);
      j[i] = function() {
        y.apply(h, x);
      };
      l = (l.next = {
        handle: i++
      });
      return l.handle;
    }

    function q() {
      var x, y;
      while (!m && (x = k.next)) {
        k = x;
        if ((y = j[x.handle])) {
          m = true;
          try {
            y();
            m = false;
          } finally {
            r(x.handle);
            if (m) {
              m = false;
              if (k.next) o(q);
            }
          }
        }
      }
    }

    function r(x) {
      delete j[x];
    }

    function s() {
      if (g.postMessage && !g.importScripts) {
        var x = true,
          y = function() {
            x = false;
            if (g.removeEventListener) {
              g.removeEventListener("message", y, false);
            } else g.detachEvent("onmessage", y);
          };
        if (g.addEventListener) {
          g.addEventListener("message", y, false);
        } else if (g.attachEvent) {
          g.attachEvent("onmessage", y);
        } else return false;
        g.postMessage("", "*");
        return x;
      }
    }

    function t() {
      var x = "setImmediate$" + Math.random() + "$",
        y = function(event) {
          if (event.source === g && typeof event.data === "string" && event.data.indexOf(x) === 0) q();
        };
      if (g.addEventListener) {
        g.addEventListener("message", y, false);
      } else g.attachEvent("onmessage", y);
      o = function() {
        var z = p(arguments);
        g.postMessage(x + z, "*");
        return z;
      };
    }

    function u() {
      var x = new MessageChannel();
      x.port1.onmessage = q;
      o = function() {
        var y = p(arguments);
        x.port2.postMessage(y);
        return y;
      };
    }

    function v() {
      var x = n.documentElement;
      o = function() {
        var y = p(arguments),
          z = n.createElement("script");
        z.onreadystatechange = function() {
          z.onreadystatechange = null;
          x.removeChild(z);
          z = null;
          q();
        };
        x.appendChild(z);
        return y;
      };
    }

    function w() {
      o = function() {
        setTimeout(q, 0);
        return p(arguments);
      };
    }
    if (s()) {
      t();
    } else if (g.MessageChannel) {
      u();
    } else if (n && n.createElement && "onreadystatechange" in n.createElement("script")) {
      v();
    } else w();
    f.setImmediate = o;
    f.clearImmediate = r;
  }(Function("return this")()));
}, null);
__d("setImmediatePolyfill", ["invariant", "ImmediateImplementation"], function(a, b, c, d, e, f, g) {
  var h = a.setImmediate;
  if (!h) {
    var i = b('ImmediateImplementation');
    h = i.setImmediate;
  }

  function j() {
    for (var k = [], l = 0, m = arguments.length; l < m; l++) k.push(arguments[l]);
    g(typeof k[0] === 'function');
    return h.apply(null, k);
  }
  e.exports = j;
}, null);
__d("LogBuffer", ["CircularBuffer", "setImmediatePolyfill"], function(a, b, c, d, e, f, g, h) {
  var i = 5000,
    j = {},
    k = {},
    l = {
      write: function(m, n) {
        var o = j[m] = j[m] || new g(i);
        o.write(n);
        if (k[m]) k[m].forEach(function(p) {
          try {
            p(n);
          } catch (q) {}
        });
      },
      read: function(m) {
        if (!j[m]) {
          return [];
        } else return j[m].read();
      },
      tail: function(m, n) {
        if (typeof n !== 'function') return;
        k[m] = k[m] || [];
        k[m].push(n);
        if (j[m]) {
          var o = j[m];
          o.read().forEach(function(p) {
            try {
              n(p);
            } catch (q) {}
          });
        }
      },
      clear: function(m) {
        if (j[m]) h(function() {
          j[m].clear();
        });
      }
    };
  e.exports = l;
}, null);
__d("EventEmitter", ["EmitterSubscription", "ErrorUtils", "EventSubscriptionVendor", "emptyFunction", "invariant", "StopwatchPool", "LogBuffer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  function n() {
    "use strict";
    this.$EventEmitter0 = new i();
    this.$EventEmitter1 = null;
  }
  n.prototype.addListener = function(o, p, q) {
    "use strict";
    return this.$EventEmitter0.addSubscription(o, new g(this.$EventEmitter0, p, q));
  };
  n.prototype.once = function(o, p, q) {
    "use strict";
    var r = this;
    return this.addListener(o, function() {
      r.removeCurrentListener();
      p.apply(q, arguments);
    });
  };
  n.prototype.removeAllListeners = function(o) {
    "use strict";
    this.$EventEmitter0.removeAllSubscriptions(o);
  };
  n.prototype.removeCurrentListener = function() {
    "use strict";
    k(!!this.$EventEmitter1);
    this.$EventEmitter0.removeSubscription(this.$EventEmitter1);
  };
  n.prototype.listeners = function(o) {
    "use strict";
    var p = this.$EventEmitter0.getSubscriptionsForType(o);
    return p ? p.filter(j.thatReturnsTrue).map(function(q) {
      return q.listener;
    }) : [];
  };
  n.prototype.emit = function(o) {
    "use strict";
    var p = this.$EventEmitter0.getSubscriptionsForType(o);
    if (p) {
      var q = Object.keys(p),
        r = l.acquire();
      for (var s = 0; s < q.length; s++) {
        var t = q[s],
          u = p[t];
        if (u) {
          this.$EventEmitter1 = u;
          var v = u.listener.__SMmeta || {
            name: u.listener.name || '<anonymous function>'
          };
          r.reset();
          h.applyWithGuard(u.listener, u.context, Array.prototype.slice.call(arguments, 1), null, 'EventEmitter:' + o);
          var w = r.read();
          m.write('event_handler_performance', {
            functionMeta: v,
            time: w,
            context: o
          });
        }
      }
      this.$EventEmitter1 = null;
    }
  };
  e.exports = n;
}, null);
__d("EventEmitterWithHolding", [], function(a, b, c, d, e, f) {
  'use strict';

  function g(h, i) {
    this.$EventEmitterWithHolding0 = h;
    this.$EventEmitterWithHolding1 = i;
    this.$EventEmitterWithHolding2 = null;
    this.$EventEmitterWithHolding3 = [];
    this.$EventEmitterWithHolding4 = 0;
  }
  g.prototype.addListener = function(h, i, j) {
    return this.$EventEmitterWithHolding0.addListener(h, i, j);
  };
  g.prototype.once = function(h, i, j) {
    return this.$EventEmitterWithHolding0.once(h, i, j);
  };
  g.prototype.addRetroactiveListener = function(h, i, j) {
    var k = this.$EventEmitterWithHolding0.addListener(h, i, j),
      l = this.$EventEmitterWithHolding3;
    l.push(false);
    this.$EventEmitterWithHolding4++;
    this.$EventEmitterWithHolding1.emitToListener(h, i, j);
    this.$EventEmitterWithHolding4--;
    if (l[l.length - 1]) k.remove();
    l.pop();
    return k;
  };
  g.prototype.removeAllListeners = function(h) {
    this.$EventEmitterWithHolding0.removeAllListeners(h);
  };
  g.prototype.removeCurrentListener = function() {
    if (this.$EventEmitterWithHolding4) {
      var h = this.$EventEmitterWithHolding3;
      h[h.length - 1] = true;
    } else this.$EventEmitterWithHolding0.removeCurrentListener();
  };
  g.prototype.listeners = function(h) {
    return this.$EventEmitterWithHolding0.listeners(h);
  };
  g.prototype.emit = function(h, i, j, k, l, m, n) {
    this.$EventEmitterWithHolding0.emit(h, i, j, k, l, m, n);
  };
  g.prototype.emitAndHold = function(h, i, j, k, l, m, n) {
    this.$EventEmitterWithHolding2 = this.$EventEmitterWithHolding1.holdEvent(h, i, j, k, l, m, n);
    this.$EventEmitterWithHolding0.emit(h, i, j, k, l, m, n);
    this.$EventEmitterWithHolding2 = null;
  };
  g.prototype.releaseCurrentEvent = function() {
    if (this.$EventEmitterWithHolding2 !== null) {
      this.$EventEmitterWithHolding1.releaseEvent(this.$EventEmitterWithHolding2);
    } else if (!!this.$EventEmitterWithHolding4) this.$EventEmitterWithHolding1.releaseCurrentEvent();
  };
  g.prototype.releaseHeldEventType = function(h) {
    this.$EventEmitterWithHolding1.releaseEventType(h);
  };
  e.exports = g;
}, null);
__d("EventHolder", ["invariant"], function(a, b, c, d, e, f, g) {
  'use strict';

  function h() {
    this.$EventHolder0 = {};
    this.$EventHolder1 = [];
  }
  h.prototype.holdEvent = function(i, j, k, l, m, n, o) {
    this.$EventHolder0[i] = this.$EventHolder0[i] || [];
    var p = this.$EventHolder0[i],
      q = {
        eventType: i,
        index: p.length
      };
    p.push([j, k, l, m, n, o]);
    return q;
  };
  h.prototype.emitToListener = function(i, j, k) {
    var l = this.$EventHolder0[i];
    if (!l) return;
    l.forEach(function(m, n) {
      if (!m) return;
      this.$EventHolder1.push({
        eventType: i,
        index: n
      });
      j.apply(k, m);
      this.$EventHolder1.pop();
    }.bind(this));
  };
  h.prototype.releaseCurrentEvent = function() {
    g(this.$EventHolder1.length);
    this.releaseEvent(this.$EventHolder1[this.$EventHolder1.length - 1]);
  };
  h.prototype.releaseEvent = function(i) {
    delete this.$EventHolder0[i.eventType][i.index];
  };
  h.prototype.releaseEventType = function(i) {
    this.$EventHolder0[i] = [];
  };
  e.exports = h;
}, null);
__d("toArray", ["invariant"], function(a, b, c, d, e, f, g) {
  function h(i) {
    var j = i.length;
    g(!Array.isArray(i) && (typeof i === 'object' || typeof i === 'function'));
    g(typeof j === 'number');
    g(j === 0 || (j - 1) in i);
    if (i.hasOwnProperty) try {
      return Array.prototype.slice.call(i);
    } catch (k) {}
    var l = Array(j);
    for (var m = 0; m < j; m++) l[m] = i[m];
    return l;
  }
  e.exports = h;
}, null);
__d("createArrayFromMixed", ["toArray"], function(a, b, c, d, e, f, g) {
  function h(j) {
    return (!!j && (typeof j == 'object' || typeof j == 'function') && ('length' in j) && !('setInterval' in j) && (typeof j.nodeType != 'number') && (Array.isArray(j) || ('callee' in j) || ('item' in j)));
  }

  function i(j) {
    if (!h(j)) {
      return [j];
    } else if (Array.isArray(j)) {
      return j.slice();
    } else return g(j);
  }
  e.exports = i;
}, null);
__d("Arbiter", ["CallbackDependencyManager", "ErrorUtils", "EventEmitter", "EventEmitterWithHolding", "EventHolder", "copyProperties", "createArrayFromMixed", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  'use strict';

  function o() {
    var t = new i();
    this.$Arbiter0 = new r();
    this.$Arbiter1 = new j(t, this.$Arbiter0);
    this.$Arbiter2 = new g();
    this.$Arbiter3 = [];
  }
  o.prototype.subscribe = function(t, u, v) {
    t = m(t);
    t.forEach(function(x) {
      n(x && typeof x === 'string');
    });
    n(typeof u === 'function');
    v = v || o.SUBSCRIBE_ALL;
    n(v === o.SUBSCRIBE_NEW || v === o.SUBSCRIBE_ALL);
    var w = t.map(function(x) {
      var y = this.$Arbiter4.bind(this, u, x);
      y.__SMmeta = u.__SMmeta;
      if (v === o.SUBSCRIBE_NEW) return this.$Arbiter1.addListener(x, y);
      this.$Arbiter3.push({});
      var z = this.$Arbiter1.addRetroactiveListener(x, y);
      this.$Arbiter3.pop();
      return z;
    }, this);
    return new s(this, w);
  };
  o.prototype.$Arbiter4 = function(t, u, v) {
    var w = this.$Arbiter3[this.$Arbiter3.length - 1];
    if (w[u] === false) return;
    var x = h.applyWithGuard(t, null, [u, v]);
    if (x === false) this.$Arbiter1.releaseCurrentEvent();
    w[u] = x;
  };
  o.prototype.unsubscribeCurrentSubscription = function() {
    this.$Arbiter1.removeCurrentListener();
  };
  o.prototype.releaseCurrentPersistentEvent = function() {
    this.$Arbiter1.releaseCurrentEvent();
  };
  o.prototype.subscribeOnce = function(t, u, v) {
    var w = this.subscribe(t, function(x, y) {
      this.unsubscribeCurrentSubscription();
      return u(x, y);
    }.bind(this), v);
    return w;
  };
  o.prototype.unsubscribe = function(t) {
    n(t.isForArbiterInstance(this));
    t.unsubscribe();
  };
  o.prototype.inform = function(t, u, v) {
    var w = Array.isArray(t);
    t = m(t);
    v = v || o.BEHAVIOR_EVENT;
    var x = (v === o.BEHAVIOR_STATE) || (v === o.BEHAVIOR_PERSISTENT);
    this.$Arbiter3.push({});
    for (var y = 0; y < t.length; y++) {
      var z = t[y];
      n(z);
      this.$Arbiter0.setHoldingBehavior(z, v);
      this.$Arbiter1.emitAndHold(z, u);
      this.$Arbiter5(z, u, x);
    }
    var aa = this.$Arbiter3.pop();
    return w ? aa : aa[t[0]];
  };
  o.prototype.query = function(t) {
    var u = this.$Arbiter0.getHoldingBehavior(t);
    n(!u || u === o.BEHAVIOR_STATE);
    var v = null;
    this.$Arbiter0.emitToListener(t, function(w) {
      v = w;
    });
    return v;
  };
  o.prototype.registerCallback = function(t, u) {
    if (typeof t === 'function') {
      return this.$Arbiter2.registerCallback(t, u);
    } else return this.$Arbiter2.addDependenciesToExistingCallback(t, u);
  };
  o.prototype.$Arbiter5 = function(t, u, v) {
    if (u === null) return;
    if (v) {
      this.$Arbiter2.satisfyPersistentDependency(t);
    } else this.$Arbiter2.satisfyNonPersistentDependency(t);
  };
  for (var p in k)
    if (k.hasOwnProperty(p)) r[p] = k[p];
  var q = k === null ? null : k.prototype;
  r.prototype = Object.create(q);
  r.prototype.constructor = r;
  r.__superConstructor__ = k;

  function r() {
    k.call(this);
    this.$ArbiterEventHolder0 = {};
  }
  r.prototype.setHoldingBehavior = function(t, u) {
    this.$ArbiterEventHolder0[t] = u;
  };
  r.prototype.getHoldingBehavior = function(t) {
    return this.$ArbiterEventHolder0[t];
  };
  r.prototype.holdEvent = function(t, u, v, w, x) {
    var y = this.$ArbiterEventHolder0[t];
    if (y !== o.BEHAVIOR_PERSISTENT) this.$ArbiterEventHolder2(t);
    if (y !== o.BEHAVIOR_EVENT) return q.holdEvent.call(this, t, u, v, w, x);
  };
  r.prototype.$ArbiterEventHolder2 = function(t) {
    this.emitToListener(t, this.releaseCurrentEvent, this);
  };
  r.prototype.releaseEvent = function(t) {
    if (t) q.releaseEvent.call(this, t);
  };
  l(o, {
    SUBSCRIBE_NEW: 'new',
    SUBSCRIBE_ALL: 'all',
    BEHAVIOR_EVENT: 'event',
    BEHAVIOR_STATE: 'state',
    BEHAVIOR_PERSISTENT: 'persistent'
  });

  function s(t, u) {
    this.$ArbiterToken0 = t;
    this.$ArbiterToken1 = u;
  }
  s.prototype.unsubscribe = function() {
    for (var t = 0; t < this.$ArbiterToken1.length; t++) this.$ArbiterToken1[t].remove();
    this.$ArbiterToken1.length = 0;
  };
  s.prototype.isForArbiterInstance = function(t) {
    n(this.$ArbiterToken0);
    return this.$ArbiterToken0 === t;
  };
  Object.keys(o.prototype).forEach(function(t) {
    o[t] = function() {
      var u = (this instanceof o) ? this : o;
      return o.prototype[t].apply(u, arguments);
    };
  });
  o.call(o);
  e.exports = o;
}, null);
__d("guid", [], function(a, b, c, d, e, f) {
  function g() {
    return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
  }
  e.exports = g;
}, null);
__d("ArbiterMixin", ["Arbiter", "guid"], function(a, b, c, d, e, f, g, h) {
  var i = "arbiter$" + h(),
    j = Object.prototype.hasOwnProperty,
    k = {
      _getArbiterInstance: function() {
        return j.call(this, i) ? this[i] : this[i] = new g();
      },
      inform: function(l, m, n) {
        return this._getArbiterInstance().inform(l, m, n);
      },
      subscribe: function(l, m, n) {
        return this._getArbiterInstance().subscribe(l, m, n);
      },
      subscribeOnce: function(l, m, n) {
        return this._getArbiterInstance().subscribeOnce(l, m, n);
      },
      unsubscribe: function(l) {
        this._getArbiterInstance().unsubscribe(l);
      },
      unsubscribeCurrentSubscription: function() {
        this._getArbiterInstance().unsubscribeCurrentSubscription();
      },
      releaseCurrentPersistentEvent: function() {
        this._getArbiterInstance().releaseCurrentPersistentEvent();
      },
      registerCallback: function(l, m) {
        return this._getArbiterInstance().registerCallback(l, m);
      },
      query: function(l) {
        return this._getArbiterInstance().query(l);
      }
    };
  e.exports = k;
}, null);
__d("legacy:ArbiterMixin", ["ArbiterMixin"], function(a, b, c, d) {
  a.ArbiterMixin = b('ArbiterMixin');
}, 3);
__d("$", ["ex"], function(a, b, c, d, e, f, g) {
  function h(j) {
    var k = typeof j === 'string' ? document.getElementById(j) : j;
    if (!k) throw new Error(g('Tried to get element with id of "%s" but it is not present on the page.', j));
    return k;
  }

  function i(j) {
    return h(j);
  }
  i.unsafe = h;
  e.exports = i;
}, null);
__d("CSSCore", ["invariant"], function(a, b, c, d, e, f, g) {
  var h = {
    addClass: function(i, j) {
      g(!/\s/.test(j));
      if (j)
        if (i.classList) {
          i.classList.add(j);
        } else if (!h.hasClass(i, j)) i.className = i.className + ' ' + j;
      return i;
    },
    removeClass: function(i, j) {
      g(!/\s/.test(j));
      if (j)
        if (i.classList) {
          i.classList.remove(j);
        } else if (h.hasClass(i, j)) i.className = i.className.replace(new RegExp('(^|\\s)' + j + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
      return i;
    },
    conditionClass: function(i, j, k) {
      return (k ? h.addClass : h.removeClass)(i, j);
    },
    hasClass: function(i, j) {
      g(!/\s/.test(j));
      if (i.classList) return !!j && i.classList.contains(j);
      return (' ' + i.className + ' ').indexOf(' ' + j + ' ') > -1;
    }
  };
  e.exports = h;
}, null);
__d("CSS", ["CSSCore", "$"], function(a, b, c, d, e, f, g) {
  var h = b('$').unsafe,
    i = 'hidden_elem',
    j = {
      setClass: function(k, l) {
        h(k).className = l || '';
        return k;
      },
      hasClass: function(k, l) {
        return g.hasClass(h(k), l);
      },
      addClass: function(k, l) {
        return g.addClass(h(k), l);
      },
      removeClass: function(k, l) {
        return g.removeClass(h(k), l);
      },
      conditionClass: function(k, l, m) {
        return g.conditionClass(h(k), l, m);
      },
      toggleClass: function(k, l) {
        return j.conditionClass(k, l, !j.hasClass(k, l));
      },
      shown: function(k) {
        return !j.hasClass(k, i);
      },
      hide: function(k) {
        return j.addClass(k, i);
      },
      show: function(k) {
        return j.removeClass(k, i);
      },
      toggle: function(k) {
        return j.toggleClass(k, i);
      },
      conditionShow: function(k, l) {
        return j.conditionClass(k, i, !l);
      }
    };
  e.exports = j;
}, null);
__d("legacy:css", ["CSS"], function(a, b, c, d) {
  a.CSS = b('CSS');
}, 3);
__d("ge", [], function(a, b, c, d, e, f) {
  function g(j, k, l) {
    return typeof j != 'string' ? j : !k ? document.getElementById(j) : h(j, k, l);
  }

  function h(j, k, l) {
    var m, n, o;
    if (i(k) == j) {
      return k;
    } else if (k.getElementsByTagName) {
      n = k.getElementsByTagName(l || '*');
      for (o = 0; o < n.length; o++)
        if (i(n[o]) == j) return n[o];
    } else {
      n = k.childNodes;
      for (o = 0; o < n.length; o++) {
        m = h(j, n[o]);
        if (m) return m;
      }
    }
    return null;
  }

  function i(j) {
    return j.getAttribute ? j.getAttribute('id') : null;
  }
  e.exports = g;
}, null);
__d("legacy:dom-core", ["$", "ge"], function(a, b, c, d) {
  a.$ = b('$');
  a.ge = b('ge');
}, 3);
__d("Parent", ["CSSCore"], function(a, b, c, d, e, f, g) {
  var h = {
    byTag: function(i, j) {
      j = j.toUpperCase();
      while (i && i.nodeName !== j) i = i.parentNode;
      return i;
    },
    byClass: function(i, j) {
      while (i && !g.hasClass(i, j)) i = i.parentNode;
      return i;
    },
    byAttribute: function(i, j) {
      while (i && (!i.getAttribute || !i.getAttribute(j))) i = i.parentNode;
      return i;
    }
  };
  e.exports = h;
}, null);
__d("legacy:parent", ["Parent"], function(a, b, c, d) {
  a.Parent = b('Parent');
}, 3);
__d("BitMap", [], function(a, b, c, d, e, f) {
  var g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';

  function h() {
    "use strict";
    this.$BitMap0 = [];
  }
  h.prototype.set = function(k) {
    "use strict";
    this.$BitMap0[k] = 1;
    return this;
  };
  h.prototype.toString = function() {
    "use strict";
    var k = [];
    for (var l = 0; l < this.$BitMap0.length; l++) k.push(this.$BitMap0[l] ? 1 : 0);
    return k.length ? j(k.join('')) : '';
  };
  h.prototype.toCompressedString = function() {
    "use strict";
    if (this.$BitMap0.length === 0) return '';
    var k = [],
      l = 1,
      m = this.$BitMap0[0] || 0,
      n = m.toString(2);
    for (var o = 1; o < this.$BitMap0.length; o++) {
      var p = this.$BitMap0[o] || 0;
      if (p === m) {
        l++;
      } else {
        k.push(i(l));
        m = p;
        l = 1;
      }
    }
    if (l) k.push(i(l));
    return j(n + k.join(''));
  };

  function i(k) {
    var l = k.toString(2),
      m = '0'.repeat(l.length - 1);
    return m + l;
  }

  function j(k) {
    var l = (k + '00000').match(/[01]{6}/g),
      m = '';
    for (var n = 0; n < l.length; n++) m += g[parseInt(l[n], 2)];
    return m;
  }
  e.exports = h;
}, null);
__d("isEmpty", [], function(a, b, c, d, e, f) {
  function g(h) {
    if (Array.isArray(h)) {
      return h.length === 0;
    } else if (typeof h === 'object') {
      for (var i in h) return false;
      return true;
    } else return !h;
  }
  e.exports = g;
}, null);
__d("performanceAbsoluteNow", ["performance"], function(a, b, c, d, e, f, g) {
  var h;
  if (g.now && g.timing && g.timing.navigationStart) {
    var i = g.timing.navigationStart;
    h = function() {
      return g.now.apply(g, arguments) + i;
    };
  } else h = Date.now.bind(Date);
  e.exports = h;
}, null);
__d("wrapFunction", [], function(a, b, c, d, e, f) {
  var g = {};

  function h(i, j, k) {
    j = j || 'default';
    return function() {
      var l = j in g ? g[j](i, k) : i;
      return l.apply(this, arguments);
    };
  }
  h.setWrapper = function(i, j) {
    j = j || 'default';
    g[j] = i;
  };
  e.exports = h;
}, null);
__d("TimeSlice", ["ErrorUtils", "LogBuffer", "invariant", "performanceAbsoluteNow", "wrapFunction"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = false,
    m, n = [],
    o, p = {
      guard: function(q, r) {
        var s = 'TimeSlice' + (r ? ': ' + r : ''),
          t = 'TimeSlice Task' + (r ? ': ' + r : '');
        return function() {
          var u = j(),
            v, w;
          if (l) return q.apply(this, arguments);
          l = true;
          m = r;
          n.length = 0;
          o = 0;
          w = g.applyWithGuard(q, this, arguments, null, s);
          while (n.length > 0) {
            var x = n.shift();
            o = x.depth;
            g.applyWithGuard(x.fn, a, null, null, t);
          }
          l = false;
          v = j();
          h.write('time_slice', Object.assign({
            begin: u,
            end: v,
            guard: r
          }, q.__SMmeta));
          return w;
        };
      },
      enqueue: function(q) {
        i(l);
        i(o < 1000);
        n.push({
          fn: q,
          depth: o + 1
        });
      },
      inGuard: function() {
        return l;
      }
    };
  k.setWrapper(p.guard, 'entry');
  a.TimeSlice = p;
  e.exports = p;
}, null);
__d("setIntervalAcrossTransitions", ["TimeSlice"], function(a, b, c, d, e, f, g) {
  var h = a.setInterval;
  e.exports = function() {
    for (var i = [], j = 0, k = arguments.length; j < k; j++) i.push(arguments[j]);
    i[0] = g.guard(i[0], 'setInterval');
    return Function.prototype.apply.call(h, a, i);
  };
}, null);
__d("CSSLoader", ["CSSLoaderConfig", "isEmpty", "setIntervalAcrossTransitions"], function(a, b, c, d, e, f, g, h, i) {
  var j = 20,
    k = g.timeout,
    l, m, n = {},
    o = [],
    p, q = {};

  function r(v) {
    if (m) return;
    m = true;
    var w = document.createElement('link');
    w.onload = function() {
      l = true;
      w.parentNode.removeChild(w);
    };
    w.rel = 'stylesheet';
    w.href = 'data:text/css;base64,';
    v.appendChild(w);
  }

  function s() {
    var v, w = [],
      x = [];
    if (Date.now() >= p) {
      for (v in q) {
        x.push(q[v].signal);
        w.push(q[v].error);
      }
      q = {};
    } else
      for (v in q) {
        var y = q[v].signal,
          z = window.getComputedStyle ? getComputedStyle(y, null) : y.currentStyle;
        if (z && parseInt(z.height, 10) > 1) {
          w.push(q[v].load);
          x.push(y);
          delete q[v];
        }
      }
    for (var aa = 0; aa < x.length; aa++) x[aa].parentNode.removeChild(x[aa]);
    if (!h(w)) {
      for (aa = 0; aa < w.length; aa++) w[aa]();
      p = Date.now() + k;
    }
    return h(q);
  }

  function t(v, w, x, y) {
    var z = document.createElement('meta');
    z.id = 'bootloader_' + v.replace(/[^a-z0-9]/ig, '_');
    w.appendChild(z);
    var aa = !h(q);
    p = Date.now() + k;
    q[v] = {
      signal: z,
      load: x,
      error: y
    };
    if (!aa) var ba = i(function ca() {
      if (s()) clearInterval(ba);
    }, j);
  }
  var u = {
    loadStyleSheet: function(v, w, x, y, z) {
      if (n[v]) throw new Error('CSS component ' + v + ' has already been requested.');
      if (document.createStyleSheet) {
        var aa;
        for (var ba = 0; ba < o.length; ba++)
          if (o[ba].imports.length < 31) {
            aa = ba;
            break;
          }
        if (aa === (void 0)) {
          try {
            o.push(document.createStyleSheet());
          } catch (ca) {
            z();
            return;
          }
          aa = o.length - 1;
        }
        o[aa].addImport(w);
        n[v] = {
          styleSheet: o[aa],
          uri: w
        };
        t(v, x, y, z);
        return;
      }
      var da = document.createElement('link');
      da.rel = 'stylesheet';
      da.type = 'text/css';
      da.href = w;
      n[v] = {
        link: da
      };
      if (l) {
        da.onload = function() {
          da.onload = da.onerror = null;
          y();
        };
        da.onerror = function() {
          da.onload = da.onerror = null;
          z();
        };
      } else {
        t(v, x, y, z);
        if (l === (void 0)) r(x);
      }
      x.appendChild(da);
    },
    registerLoadedStyleSheet: function(v, w) {
      if (n[v]) throw new Error('CSS component ' + v + ' has been requested and should not be ' + 'loaded more than once.');
      n[v] = {
        link: w
      };
    },
    unloadStyleSheet: function(v) {
      if (!v in n) return;
      var w = n[v],
        x = w.link;
      if (x) {
        x.onload = x.onerror = null;
        x.parentNode.removeChild(x);
      } else {
        var y = w.styleSheet;
        for (var z = 0; z < y.imports.length; z++)
          if (y.imports[z].href == w.uri) {
            y.removeImport(z);
            break;
          }
      }
      delete q[v];
      delete n[v];
    }
  };
  e.exports = u;
}, null);
__d("setTimeoutAcrossTransitions", ["TimeSlice"], function(a, b, c, d, e, f, g) {
  var h = a.setTimeout;
  e.exports = function() {
    for (var i = [], j = 0, k = arguments.length; j < k; j++) i.push(arguments[j]);
    i[0] = g.guard(i[0], 'setTimeout');
    return Function.prototype.apply.call(h, a, i);
  };
}, null);
__d("Bootloader", ["BootloaderConfig", "CSSLoader", "CallbackDependencyManager", "TimeSlice", "setTimeoutAcrossTransitions", "ErrorUtils", "ex"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var n = {},
    o = {},
    p = {},
    q = {},
    r = null,
    s = {},
    t = {},
    u = {},
    v = {},
    w = {},
    x = {},
    y = false,
    z = [],
    aa = new i(),
    ba = Date.now();
  l.addListener(function(na) {
    na.loadingUrls = Object.keys(t);
  }, true);

  function ca(na) {
    var oa = new Error(na);
    oa.guard = 'Bootloader';
    l.reportError(oa);
  }

  function da() {
    return document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1];
  }

  function ea(na) {
    return Array.isArray(na) ? na : [na];
  }

  function fa() {
    if (!g.retry_on_timeout || !g.is_not_mobile || da() || !g.timeout || g.timeout < 0) return false;
    return true;
  }

  function ga(na, oa, pa, qa) {
    var ra = document.createElement('script');
    ra.src = na;
    ra.async = true;
    var sa = s[oa];
    if (sa && sa.crossOrigin) ra.crossOrigin = 'anonymous';
    ra.onload = j.guard(pa, 'Bootloader script.onload');
    ra.onerror = j.guard(function() {
      v[na] = true;
      pa();
    }, 'Bootloader script.onerror');
    ra.onreadystatechange = j.guard(function() {
      if (this.readyState in {
          loaded: 1,
          complete: 1
        }) pa();
    }, 'Bootloader script.onreadystatechange');
    qa.appendChild(ra);
    return ra;
  }

  function ha(na, oa, pa, qa) {
    var ra = ma.done.bind(null, [pa], oa);
    t[oa] = Date.now();
    if (na == 'js') {
      var sa = ga(oa, pa, ra, qa);
      if (fa()) q[oa] = k(function() {
        delete q[oa];
        if (r) {
          if (sa.parentNode && sa.parentNode === r) r.removeChild(sa);
          w[oa] = Date.now();
          ga(oa, pa, ra, r);
        }
      }, g.timeout);
    } else if (na == 'css') h.loadStyleSheet(pa, oa, qa, ra, function() {
      ca(m('CSS timeout [%s] at %s', pa, oa));
      v[oa] = true;
      ra();
    });
  }

  function ia(na) {
    if (!s[na]) {
      ca(m('Missing unloading resource %s', na));
      return;
    }
    if (s[na].type == 'css') {
      h.unloadStyleSheet(na);
      delete n[na];
      aa.unsatisfyPersistentDependency(na);
    }
  }

  function ja(na, oa) {
    if (!y) {
      z.push([na, oa]);
      return;
    }
    na = ea(na);
    var pa = [];
    for (var qa = 0; qa < na.length; ++qa) {
      if (!na[qa]) {
        ca(m('Empty component!'));
        continue;
      }
      var ra = p[na[qa]];
      if (ra) {
        var sa = ra.resources;
        for (var ta = 0; ta < sa.length; ++ta) pa.push(sa[ta]);
      }
    }
    ma.loadResources(pa, oa);
  }

  function ka(na) {
    if (na) {
      n[na] = true;
    } else ca(m('Making an empty resource (%s) as requested', typeof na));
  }

  function la(na) {
    if (!na) return [];
    var oa = [];
    for (var pa = 0; pa < na.length; ++pa)
      if (typeof na[pa] == 'string') {
        if (na[pa] in s) {
          oa.push(s[na[pa]]);
        } else ca(m('Unable to resolve resource %s.', na[pa]));
      } else oa.push(na[pa]);
    return oa;
  }
  var ma = {
    configurePage: function(na) {
      var oa = {},
        pa = la(na),
        qa;
      for (qa = 0; qa < pa.length; qa++) {
        oa[pa[qa].src] = pa[qa];
        ka(pa[qa].name);
      }
      var ra = document.getElementsByTagName('link'),
        sa = 0;
      for (qa = 0; qa < ra.length; ++qa) {
        if (ra[qa].rel != 'stylesheet') continue;
        for (var ta in oa)
          if (ra[qa].href.indexOf(ta) !== -1) {
            var ua = oa[ta].name;
            if (oa[ta].permanent) o[ua] = true;
            delete oa[ta];
            h.registerLoadedStyleSheet(ua, ra[qa]);
            ma.done([ua]);
            sa++;
            break;
          }
      }
      if (sa != pa.length) ca(m('configurePage: Found %s out of %s items', sa, pa.length));
    },
    loadComponents: function(na, oa) {
      na = ea(na);
      var pa = [];
      for (var qa = 0; qa < na.length; qa++) {
        var ra = p[na[qa]],
          sa = 'legacy:' + na[qa];
        if (p[sa]) {
          if (ra) ca(m('%s has a conflicting legacy component. That cannot happen ' + 'and legacy won btw.', na[qa]));
          na[qa] = sa;
          pa.push(sa);
          continue;
        }
        if (!ra) {
          ca(m('loadComponents: %s is not in the component map.', na[qa]));
        } else if (ra.module) {
          pa.push(na[qa]);
          ca(m('loadComponents: Loading module %s!', na[qa]));
        }
      }
      ja(na, pa.length ? d.bind(null, pa, oa) : oa);
    },
    loadModules: function(na, oa) {
      var pa = [];
      for (var qa = 0; qa < na.length; qa++) {
        var ra = p[na[qa]];
        if (!ra) {
          ca(m('loadModules: %s is not in the component map.', na[qa]));
          pa.push(na[qa]);
        } else if (ra.module) {
          pa.push(na[qa]);
        } else {
          var sa = ra.resources,
            ta = true;
          for (var ua = 0; ua < sa.length; ua++) {
            var va = s[sa[ua]];
            if (!va || va.type != 'css') ta = false;
          }
          if (!ta) ca(m('loadModules: %s is not a module!', na[qa]));
        }
      }
      ja(na, d.bind(null, pa, oa));
    },
    loadResources: function(na, oa, pa, qa) {
      var ra;
      na = la(ea(na));
      if (pa) {
        var sa = {};
        for (ra = 0; ra < na.length; ++ra) sa[na[ra].name] = true;
        for (var ta in n)
          if (!(ta in o) && !(ta in sa) && !(ta in x)) ia(ta);
        x = {};
      }
      var ua = [],
        va = [];
      for (ra = 0; ra < na.length; ++ra) {
        var wa = na[ra];
        if (wa.permanent) o[wa.name] = true;
        if (aa.isPersistentDependencySatisfied(wa.name)) continue;
        if (!wa.nonblocking) va.push(wa.name);
        if (!n[wa.name]) {
          ka(wa.name);
          ua.push(wa);
          window.CavalryLogger && window.CavalryLogger.getInstance().measureResources(wa, qa);
        }
      }
      var xa;
      if (oa)
        if (typeof oa === 'function') {
          xa = aa.registerCallback(oa, va);
        } else xa = aa.addDependenciesToExistingCallback(oa, va);
      var ya = ma.getHardpoint(),
        za = da() ? ya : document.createDocumentFragment();
      for (ra = 0; ra < ua.length; ++ra) ha(ua[ra].type, ua[ra].src, ua[ra].name, za);
      if (ya !== za) ya.appendChild(za);
      return xa;
    },
    requestJSResource: function(na) {
      var oa = ma.getHardpoint();
      ha('js', na, null, oa);
    },
    done: function(na, oa) {
      if (oa) {
        u[oa] = Date.now() - t[oa];
        delete t[oa];
        if (q[oa]) {
          clearTimeout(q[oa]);
          delete q[oa];
        }
      }
      if (window.CavalryLogger) window.CavalryLogger.done_js(na);
      for (var pa = 0; pa < na.length; ++pa) {
        var qa = na[pa];
        if (qa) {
          ka(qa);
          aa.satisfyPersistentDependency(qa);
        }
      }
    },
    enableBootload: function(na) {
      for (var oa in na)
        if (!p[oa]) p[oa] = na[oa];
      if (!y) {
        y = true;
        for (var pa = 0; pa < z.length; pa++) ja.apply(null, z[pa]);
        z = [];
      }
    },
    getHardpoint: function() {
      if (!r) {
        var na = document.getElementsByTagName('head');
        r = na.length && na[0] || document.body;
      }
      return r;
    },
    setResourceMap: function(na) {
      for (var oa in na)
        if (!s[oa]) {
          na[oa].name = oa;
          s[oa] = na[oa];
        }
    },
    getResourceURLs: function() {
      var na = {};
      for (var oa in s) {
        var pa = s[oa].src;
        na[pa] = (oa in n) && !(pa in v) && !(pa in t);
      }
      return na;
    },
    getResourceHashes: function() {
      return Object.assign({}, s);
    },
    loadEarlyResources: function(na) {
      ma.setResourceMap(na);
      var oa = [];
      for (var pa in na) {
        var qa = s[pa];
        oa.push(qa);
        if (!qa.permanent) x[qa.name] = qa;
      }
      ma.loadResources(oa);
    },
    getLoadingUrls: function() {
      var na = {},
        oa = Date.now();
      for (var pa in t) na[pa] = oa - t[pa];
      return na;
    },
    getLoadedUrlTimes: function() {
      return u;
    },
    getErrorUrls: function() {
      return Object.keys(v);
    },
    getStartTime: function() {
      return ba;
    },
    getRetriedUrls: function() {
      return Object.keys(w);
    },
    __debug: {
      callbackManager: aa,
      componentMap: p,
      requested: n,
      resources: s
    }
  };
  e.exports = ma;
}, null);
__d("lowerDomain", [], function(a, b, c, d, e, f) {
  if (document.domain.toLowerCase().match(/(^|\.)facebook\..*/)) document.domain = "facebook.com";
}, null);
__d("CookieCore", [], function(a, b, c, d, e, f) {
  var g = {
    set: function(h, i, j, k, l) {
      document.cookie = h + "=" + encodeURIComponent(i) + "; " + (j ? "expires=" + (new Date(Date.now() + j)).toGMTString() + "; " : "") + "path=" + (k || '/') + "; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1') + (l ? "; secure" : "");
    },
    clear: function(h, i) {
      i = i || '/';
      document.cookie = h + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; " + "path=" + i + "; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1');
    },
    get: function(h) {
      var i = document.cookie.match('(?:^|;\\s*)' + h + '=(.*?)(?:;|$)');
      return (i ? decodeURIComponent(i[1]) : i);
    }
  };
  e.exports = g;
}, null);
__d("createObjectFrom", [], function(a, b, c, d, e, f) {
  function g(h, i) {
    var j = {},
      k = Array.isArray(i);
    if (typeof i == 'undefined') i = true;
    for (var l = h.length; l--;) j[h[l]] = k ? i[l] : i;
    return j;
  }
  e.exports = g;
}, null);
__d("URISchemes", ["createObjectFrom"], function(a, b, c, d, e, f, g) {
  var h = g(['fb', 'fb-ama', 'fb-messenger', 'fbcf', 'fbconnect', 'fbrpc', 'file', 'ftp', 'http', 'https', 'mailto', 'ms-app', 'itms', 'itms-apps', 'itms-services', 'market', 'svn+ssh', 'fbstaging', 'tel', 'sms', 'pebblejs']),
    i = {
      isAllowed: function(j) {
        if (!j) return true;
        return h.hasOwnProperty(j.toLowerCase());
      }
    };
  e.exports = i;
}, null);
__d("isNode", [], function(a, b, c, d, e, f) {
  function g(h) {
    return !!(h && (typeof Node === 'function' ? h instanceof Node : typeof h === 'object' && typeof h.nodeType === 'number' && typeof h.nodeName === 'string'));
  }
  e.exports = g;
}, null);
__d("isTextNode", ["isNode"], function(a, b, c, d, e, f, g) {
  function h(i) {
    return g(i) && i.nodeType == 3;
  }
  e.exports = h;
}, null);
__d("containsNode", ["isTextNode"], function(a, b, c, d, e, f, g) {
  function h(i, j) {
    if (!i || !j) {
      return false;
    } else if (i === j) {
      return true;
    } else if (g(i)) {
      return false;
    } else if (g(j)) {
      return h(i, j.parentNode);
    } else if (i.contains) {
      return i.contains(j);
    } else if (i.compareDocumentPosition) {
      return !!(i.compareDocumentPosition(j) & 16);
    } else return false;
  }
  e.exports = h;
}, null);
__d("getActiveElement", [], function(a, b, c, d, e, f) {
  function g() {
    try {
      return document.activeElement || document.body;
    } catch (h) {
      return document.body;
    }
  }
  e.exports = g;
}, null);
__d("getDocumentScrollElement", [], function(a, b, c, d, e, f) {
  "use strict";
  var g = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('AppleWebKit') > -1;

  function h(i) {
    i = i || document;
    return !g && i.compatMode === 'CSS1Compat' ? i.documentElement : i.body;
  }
  e.exports = h;
}, null);
__d("isElementNode", ["isNode"], function(a, b, c, d, e, f, g) {
  function h(i) {
    return g(i) && i.nodeType == 1;
  }
  e.exports = h;
}, null);
__d("getObjectValues", [], function(a, b, c, d, e, f) {
  function g(h) {
    var i = [];
    for (var j in h) i.push(h[j]);
    return i;
  }
  e.exports = g;
}, null);
__d("keyMirror", ["invariant"], function(a, b, c, d, e, f, g) {
  'use strict';
  var h = function(i) {
    var j = {},
      k;
    g(i instanceof Object && !Array.isArray(i));
    for (k in i) {
      if (!i.hasOwnProperty(k)) continue;
      j[k] = k;
    }
    return j;
  };
  e.exports = h;
}, null);
__d("mergeHelpers", ["invariant", "keyMirror"], function(a, b, c, d, e, f, g, h) {
  "use strict";
  var i = 36,
    j = function(l) {
      return typeof l !== 'object' || l instanceof Date || l === null;
    },
    k = {
      MAX_MERGE_DEPTH: i,
      isTerminal: j,
      normalizeMergeArg: function(l) {
        return l === (void 0) || l === null ? {} : l;
      },
      checkMergeArrayArgs: function(l, m) {
        g(Array.isArray(l) && Array.isArray(m));
      },
      checkMergeObjectArgs: function(l, m) {
        k.checkMergeObjectArg(l);
        k.checkMergeObjectArg(m);
      },
      checkMergeObjectArg: function(l) {
        g(!j(l) && !Array.isArray(l));
      },
      checkMergeIntoObjectArg: function(l) {
        g((!j(l) || typeof l === 'function') && !Array.isArray(l));
      },
      checkMergeLevel: function(l) {
        g(l < i);
      },
      checkArrayStrategy: function(l) {
        g(l === (void 0) || l in k.ArrayStrategies);
      },
      ArrayStrategies: h({
        Clobber: true,
        IndexByIndex: true
      })
    };
  e.exports = k;
}, null);
__d("ix", ["invariant"], function(a, b, c, d, e, f, g) {
  var h = {};

  function i(j) {
    var k = h[j];
    g(!!k);
    return k;
  }
  i.add = function(j) {
    var k = false;
    for (var l in j)
      if (!(l in h)) h[l] = j[l];
  };
  e.exports = i;
}, null);
__d("keyOf", [], function(a, b, c, d, e, f) {
  var g = function(h) {
    var i;
    for (i in h) {
      if (!h.hasOwnProperty(i)) continue;
      return i;
    }
    return null;
  };
  e.exports = g;
}, null);
__d("ImmutableValue", ["invariant", "isNode", "keyOf"], function(a, b, c, d, e, f, g, h, i) {
  "use strict";
  var j = i({
    _DONT_EVER_TYPE_THIS_SECRET_KEY: null
  });

  function k(l) {
    g(l === k[j]);
  }
  k.mergeAllPropertiesInto = function(l, m) {
    var n = m.length;
    for (var o = 0; o < n; o++) Object.assign(l, m[o]);
  };
  k.deepFreezeRootNode = function(l) {
    if (h(l)) return;
    Object.freeze(l);
    for (var m in l)
      if (l.hasOwnProperty(m)) k.recurseDeepFreeze(l[m]);
    Object.seal(l);
  };
  k.recurseDeepFreeze = function(l) {
    if (h(l) || !k.shouldRecurseFreeze(l)) return;
    Object.freeze(l);
    for (var m in l)
      if (l.hasOwnProperty(m)) k.recurseDeepFreeze(l[m]);
    Object.seal(l);
  };
  k.shouldRecurseFreeze = function(l) {
    return (typeof l === 'object' && !(l instanceof k) && l !== null);
  };
  k._DONT_EVER_TYPE_THIS_SECRET_KEY = Math.random();
  e.exports = k;
}, null);
__d("ImmutableObject", ["ImmutableValue", "invariant", "keyOf", "mergeHelpers"], function(a, b, c, d, e, f, g, h, i, j) {
  "use strict";
  var k = j.checkMergeObjectArgs,
    l = j.isTerminal,
    m = i({
      _DONT_EVER_TYPE_THIS_SECRET_KEY: null
    });

  function n(s) {
    h(s instanceof g);
  }
  for (var o in g)
    if (g.hasOwnProperty(o)) q[o] = g[o];
  var p = g === null ? null : g.prototype;
  q.prototype = Object.create(p);
  q.prototype.constructor = q;
  q.__superConstructor__ = g;

  function q() {
    g.call(this, g[m]);
    g.mergeAllPropertiesInto(this, arguments);
  }
  q.create = function() {
    var s = Object.create(q.prototype);
    q.apply(s, arguments);
    return s;
  };
  q.set = function(s, t) {
    n(s);
    h(typeof t === 'object' && t !== (void 0) && !Array.isArray(t));
    return new q(s, t);
  };
  q.setProperty = function(s, t, u) {
    var v = {};
    v[t] = u;
    return q.set(s, v);
  };
  q.deleteProperty = function(s, t) {
    var u = {};
    for (var v in s)
      if (v !== t && s.hasOwnProperty(v)) u[v] = s[v];
    return new q(u);
  };
  q.setDeep = function(s, t) {
    n(s);
    return r(s, t);
  };
  q.values = function(s) {
    return Object.keys(s).map(function(t) {
      return s[t];
    });
  };

  function r(s, t) {
    k(s, t);
    var u = {},
      v = Object.keys(s);
    for (var w = 0; w < v.length; w++) {
      var x = v[w];
      if (!t.hasOwnProperty(x)) {
        u[x] = s[x];
      } else if (l(s[x]) || l(t[x])) {
        u[x] = t[x];
      } else u[x] = r(s[x], t[x]);
    }
    var y = Object.keys(t);
    for (w = 0; w < y.length; w++) {
      var z = y[w];
      if (s.hasOwnProperty(z)) continue;
      u[z] = t[z];
    }
    return (s instanceof g ? new q(u) : t instanceof g ? new q(u) : u);
  }
  e.exports = q;
}, null);
__d("TimingSeries", ["ImmutableObject", "invariant", "performanceAbsoluteNow"], function(a, b, c, d, e, f, g, h, i) {
  function j(k, l) {
    "use strict";
    this.$TimingSeries0 = {
      name: k,
      entryType: l
    };
    this.reset();
  }
  j.prototype.reset = function() {
    "use strict";
    this.$TimingSeries1 = Object.assign({}, this.$TimingSeries0);
    this.$TimingSeries2 = false;
    this.$TimingSeries3 = [];
    this.$TimingSeries4 = null;
    return this;
  };
  j.prototype.getName = function() {
    "use strict";
    return this.$TimingSeries1.name;
  };
  j.prototype.getType = function() {
    "use strict";
    return this.$TimingSeries1.entryType;
  };
  j.prototype.mark = function(k, l) {
    "use strict";
    if (this.$TimingSeries2) return this;
    l = Number.isFinite(l) ? l : i();
    if (Array.isArray(k)) {
      k.forEach(function(n) {
        return this.mark(n, l);
      }.bind(this));
      return this;
    }
    var m = {
      name: k,
      value: l
    };
    this.$TimingSeries3.push(m);
    return this;
  };
  j.prototype.addProperty = function(k, l) {
    "use strict";
    h(!(k in this.$TimingSeries1));
    this.$TimingSeries1[k] = l;
    return this;
  };
  j.prototype.complete = function() {
    "use strict";
    this.$TimingSeries2 = true;
    return this;
  };
  j.prototype.isCompleted = function() {
    "use strict";
    return this.$TimingSeries2;
  };
  j.prototype.getTimings = function() {
    "use strict";
    if (this.$TimingSeries2) {
      var k = this.$TimingSeries4;
      if (!k) {
        k = {};
        this.$TimingSeries3.forEach(function(l) {
          k[l.name] = l.value;
        });
        k = new g(this.$TimingSeries1, k);
        this.$TimingSeries4 = k;
      }
      return k;
    }
  };
  e.exports = j;
}, null);
__d("TimingSeriesStorage", ["TimingSeries"], function(a, b, c, d, e, f, g) {
  var h = [],
    i = {
      createSeries: function(j, k) {
        var l = new g(j, k);
        h.push(l);
        return l;
      },
      getSeries: function() {
        return h.filter(function(j) {
          return j.isCompleted();
        }).map(function(j) {
          return j.getTimings();
        });
      },
      getSeriesByType: function(j) {
        return h.filter(function(k) {
          return k.isCompleted() && k.getType() === j;
        }).map(function(k) {
          return k.getTimings();
        });
      }
    };
  e.exports = i;
}, null);
__d("ScriptPath", ["ErrorUtils"], function(a, b, c, d, e, f, g) {
  var h = null,
    i = null,
    j = {},
    k = 0,
    l = null,
    m = {
      PAGE_LOAD: 'load',
      PAGE_UNLOAD: 'unload',
      OPEN_OVERLAY_VIEW: 'open_overlay_view',
      CLOSE_OVERLAY_VIEW: 'close_overlay_view',
      TRANSITION: 'transition'
    },
    n = [];

  function o(t) {
    var u = ++k;
    j[u] = t;
    return u;
  }

  function p(t) {
    if (j[t]) delete j[t];
  }

  function q(t) {
    Object.keys(j).forEach(function(u) {
      g.applyWithGuard(j[u], null, [{
        source: h,
        dest: i,
        cause: t
      }]);
    });
  }

  function r() {
    return i ? i.scriptPath : (void 0);
  }
  var s = {
    set: function(t, u, v) {
      h = i;
      i = {
        scriptPath: t,
        categoryToken: u,
        extraInfoFromServer: (!v || typeof v !== 'object') ? {} : v
      };
      n = [];
      window._script_path = t;
      q();
    },
    updateSearchSessionID: function(t) {
      if (i) {
        i.extraInfoFromServer = i.extraInfoFromServer ? i.extraInfoFromServer : {};
        i.extraInfoFromServer.search_sid = t;
      }
    },
    openOverlayView: function(t) {
      if (!t) return;
      var u = n.length;
      if (u === 0 || n[u - 1] !== t) {
        h = Object.assign({}, i);
        i.topViewEndpoint = t;
        n.push(t);
        q(m.OPEN_OVERLAY_VIEW);
      }
    },
    closeOverlayView: function(t) {
      var u = n.lastIndexOf(t);
      if (u === -1) return;
      h = Object.assign({}, i);
      if (u > 0) {
        i.topViewEndpoint = n[u - 1];
      } else i.topViewEndpoint = null;
      n = n.slice(0, u);
      q(m.CLOSE_OVERLAY_VIEW);
    },
    setNavigation: function(t) {
      l = t;
    },
    getNavigation: function() {
      return l;
    },
    getScriptPath: r,
    getCategoryToken: function() {
      return i ? i.categoryToken : (void 0);
    },
    getTopViewEndpoint: function() {
      var t = n.length;
      return t > 0 ? n[t - 1] : r();
    },
    getPageInfo: function() {
      return i;
    },
    getSourcePageInfo: function() {
      return h;
    },
    subscribe: function(t) {
      return o(t);
    },
    unsubscribe: function(t) {
      p(t);
    }
  };
  s.CAUSE = m;
  e.exports = s;
}, null);
__d("replaceTransportMarkers", ["ge"], function(a, b, c, d, e, f, g) {
  function h(i, j, k) {
    var l = (typeof k !== 'undefined') ? j[k] : j,
      m;
    if (Array.isArray(l)) {
      for (m = 0; m < l.length; m++) h(i, l, m);
    } else if (l && typeof l == 'object')
      if (l.__m) {
        j[k] = b.call(null, l.__m);
      } else if (l.__e) {
      j[k] = g(l.__e);
    } else if (l.__rel) {
      j[k] = i;
    } else
      for (var n in l) h(i, l, n);
  }
  e.exports = h;
}, null);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], function(a, b, c, d, e, f, g, h) {
  var i = new g(),
    j = {
      getLoadedModuleHash: function() {
        return i.toCompressedString();
      },
      handleDefine: function(k, l, m, n, o) {
        i.set(n);
        define(k, l, function() {
          h(o, m);
          return m;
        });
      },
      handleDefines: function(k, l) {
        k.map(function(m) {
          if (l) m.push(l);
          j.handleDefine.apply(null, m);
        });
      }
    };
  e.exports = j;
}, null);
__d("ServerJS", ["ErrorUtils", "EventEmitter", "ServerJSDefine", "ex", "ge", "replaceTransportMarkers"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = 0,
    n = new h(),
    o = 0;

  function p() {
    "use strict";
    this.$ServerJS0 = {};
    this.$ServerJS1 = null;
    this.$ServerJS2 = {};
  }
  p.prototype.handle = function(t) {
    "use strict";
    if (t.__guard) throw new Error('ServerJS.handle called on data that has already been handled');
    t.__guard = true;
    q(t.define || [], this.$ServerJS3, this);
    q(t.markup || [], this.$ServerJS4, this);
    q(t.elements || [], this.$ServerJS5, this);
    q(t.instances || [], this.$ServerJS6, this);
    var u = q(t.require || [], this.$ServerJS7, this);
    return {
      cancel: function() {
        for (var v = 0; v < u.length; v++)
          if (u[v]) u[v].cancel();
      }
    };
  };
  p.prototype.handlePartial = function(t) {
    "use strict";
    (t.instances || []).forEach(r.bind(null, this.$ServerJS0, 3));
    (t.markup || []).forEach(r.bind(null, this.$ServerJS0, 2));
    (t.elements || []).forEach(r.bind(null, this.$ServerJS0, 2));
    return this.handle(t);
  };
  p.prototype.setRelativeTo = function(t) {
    "use strict";
    this.$ServerJS1 = t;
    return this;
  };
  p.prototype.cleanup = function() {
    "use strict";
    var t = [];
    for (var u in this.$ServerJS0) t.push(u);
    d.call(null, t, s);
    this.$ServerJS0 = {};

    function v(x) {
      var y = this.$ServerJS2[x],
        z = y[0],
        aa = y[1];
      delete this.$ServerJS2[x];
      var ba = aa ? 'JS::call("' + z + '", "' + aa + '", ...)' : 'JS::requireModule("' + z + '")',
        ca = ba + ' did not fire because it has missing dependencies.';
      throw new Error(ca);
    }
    for (var w in this.$ServerJS2) g.applyWithGuard(v, this, [w], null, 'ServerJS:cleanup' + ' id: ' + w);
  };
  p.prototype.$ServerJS3 = function(t, u, v, w) {
    "use strict";
    return g.applyWithGuard(i.handleDefine, i, [t, u, v, w, this.$ServerJS1], null, 'JS::define');
  };
  p.prototype.$ServerJS7 = function(t, u, v, w) {
    "use strict";
    return g.applyWithGuard(this.$ServerJS8, this, [t, u, v, w], null, u ? 'JS::call' : 'JS::requireModule');
  };
  p.prototype.$ServerJS8 = function(t, u, v, w) {
    "use strict";
    var x = [t].concat(v || []),
      y = (u ? '__call__' : '__requireModule__') + m++;
    this.$ServerJS2[y] = [t, u];
    return define(y, x, g.guard(function(z) {
      delete this.$ServerJS2[y];
      w && l(this.$ServerJS1, w);
      if (u) {
        if (!z[u]) throw new TypeError(j('Module %s has no method "%s"', t, u));
        var aa = {
          moduleName: t,
          method: u,
          sourceMeta: z[u].__SMmeta
        };
        n.emit(p.PRE_JS_CALL, o, aa);
        z[u].apply(z, w || []);
        n.emit(p.POST_JS_CALL, o, aa);
        o++;
      }
    }.bind(this), u ? "JS::call('" + t + "', '" + u + "', ...)" : "JS::requireModule('" + t + "')"), 1, this, 1);
  };
  p.prototype.$ServerJS6 = function(t, u, v, w) {
    "use strict";
    return g.applyWithGuard(this.$ServerJS9, this, [t, u, v, w], null, 'JS::instance');
  };
  p.prototype.$ServerJS9 = function(t, u, v, w) {
    "use strict";
    var x = null;
    if (u) x = function(y) {
      l(this.$ServerJS1, v);
      var z = Object.create(y.prototype);
      y.apply(z, v);
      return z;
    }.bind(this);
    define(t, u, x, 0, null, w);
  };
  p.prototype.$ServerJS4 = function(t, u, v) {
    "use strict";
    return g.applyWithGuard(this.$ServerJSa, this, [t, u, v], null, 'JS::markup');
  };
  p.prototype.$ServerJSa = function(t, u, v) {
    "use strict";
    define(t, ['HTML'], function(w) {
      return w.replaceJSONWrapper(u).getRootNode();
    }, 0, null, v);
  };
  p.prototype.$ServerJS5 = function(t, u, v, w) {
    "use strict";
    return g.applyWithGuard(this.$ServerJSb, this, [t, u, v, w], null, 'JS::element');
  };
  p.prototype.$ServerJSb = function(t, u, v, w) {
    "use strict";
    if (u === null && v) {
      define(t, null, null, 0, null, v);
      return;
    }
    var x = [],
      y = 0;
    if (w) {
      x.push(w);
      y = 1;
      v++;
    }
    define(t, x, function(z) {
      var aa = k(u, z);
      if (!aa) {
        var ba = 'Could not find element "%s"';
        throw new Error(j(ba, u));
      }
      return aa;
    }, y, null, v);
  };
  p.PRE_JS_CALL = 'pre-js-call';
  p.POST_JS_CALL = 'post-js-call';
  p.addListener = n.addListener.bind(n);

  function q(t, u, v) {
    return t.map(function(w) {
      u.apply(v, w);
    });
  }

  function r(t, u, v) {
    var w = v[0];
    if (!(w in t)) v[u] = (v[u] || 0) + 1;
    t[w] = true;
  }

  function s() {
    return {};
  }
  e.exports = p;
}, null);
__d("UserAgent_DEPRECATED", [], function(a, b, c, d, e, f) {
  var g = false,
    h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;

  function w() {
    if (g) return;
    g = true;
    var y = navigator.userAgent,
      z = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(y),
      aa = /(Mac OS X)|(Windows)|(Linux)/.exec(y);
    s = /\b(iPhone|iP[ao]d)/.exec(y);
    t = /\b(iP[ao]d)/.exec(y);
    q = /Android/i.exec(y);
    u = /FBAN\/\w+;/i.exec(y);
    v = /Mobile/i.exec(y);
    r = !!(/Win64/.exec(y));
    if (z) {
      h = z[1] ? parseFloat(z[1]) : (z[5] ? parseFloat(z[5]) : NaN);
      if (h && document && document.documentMode) h = document.documentMode;
      var ba = /(?:Trident\/(\d+.\d+))/.exec(y);
      m = ba ? parseFloat(ba[1]) + 4 : h;
      i = z[2] ? parseFloat(z[2]) : NaN;
      j = z[3] ? parseFloat(z[3]) : NaN;
      k = z[4] ? parseFloat(z[4]) : NaN;
      if (k) {
        z = /(?:Chrome\/(\d+\.\d+))/.exec(y);
        l = z && z[1] ? parseFloat(z[1]) : NaN;
      } else l = NaN;
    } else h = i = j = l = k = NaN;
    if (aa) {
      if (aa[1]) {
        var ca = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(y);
        n = ca ? parseFloat(ca[1].replace('_', '.')) : true;
      } else n = false;
      o = !!aa[2];
      p = !!aa[3];
    } else n = o = p = false;
  }
  var x = {
    ie: function() {
      return w() || h;
    },
    ieCompatibilityMode: function() {
      return w() || (m > h);
    },
    ie64: function() {
      return x.ie() && r;
    },
    firefox: function() {
      return w() || i;
    },
    opera: function() {
      return w() || j;
    },
    webkit: function() {
      return w() || k;
    },
    safari: function() {
      return x.webkit();
    },
    chrome: function() {
      return w() || l;
    },
    windows: function() {
      return w() || o;
    },
    osx: function() {
      return w() || n;
    },
    linux: function() {
      return w() || p;
    },
    iphone: function() {
      return w() || s;
    },
    mobile: function() {
      return w() || (s || t || q || v);
    },
    nativeApp: function() {
      return w() || u;
    },
    android: function() {
      return w() || q;
    },
    ipad: function() {
      return w() || t;
    }
  };
  e.exports = x;
}, null);
__d("legacy:emptyFunction", ["emptyFunction"], function(a, b, c, d) {
  a.emptyFunction = b('emptyFunction');
}, 3);
__d("BlueBarController", ["Bootloader", "CSS"], function(a, b, c, d, e, f, g, h) {
  f.init = function(i) {
    if ('getBoundingClientRect' in i) {
      var j = function() {
        var k = i.getBoundingClientRect(),
          l = Math.round(k.top) - document.documentElement.clientTop;
        h.conditionClass(i.firstChild, 'fixed_elem', l <= 0);
      };
      j();
      g.loadModules(["Event"], function(k) {
        k.listen(window, 'scroll', j);
      });
    }
  };
}, null);
__d("legacy:arbiter", ["Arbiter"], function(a, b, c, d) {
  a.Arbiter = b('Arbiter');
}, 3);
__d("event-form-bubbling", [], function(a, b, c, d, e, f) {
  a.Event = a.Event || function() {};
  a.Event.__inlineSubmit = function(g, event) {
    var h = (a.Event.__getHandler && a.Event.__getHandler(g, 'submit'));
    return h ? null : a.Event.__bubbleSubmit(g, event);
  };
  a.Event.__bubbleSubmit = function(g, event) {
    if (document.documentElement.attachEvent) {
      var h;
      while (h !== false && (g = g.parentNode)) h = g.onsubmit ? g.onsubmit(event) : a.Event.__fire && a.Event.__fire(g, 'submit', event);
      return h;
    }
  };
}, 3);
__d("OnloadEvent", [], function(a, b, c, d, e, f) {
  var g = {
    ONLOAD: 'onload/onload',
    ONLOAD_CALLBACK: 'onload/onload_callback',
    ONLOAD_DOMCONTENT: 'onload/dom_content_ready',
    ONLOAD_DOMCONTENT_CALLBACK: 'onload/domcontent_callback',
    ONBEFOREUNLOAD: 'onload/beforeunload',
    ONUNLOAD: 'onload/unload'
  };
  e.exports = g;
}, null);
__d("Run", ["Arbiter", "ExecutionEnvironment", "OnloadEvent"], function(a, b, c, d, e, f, g, h, i) {
  var j = 'onunloadhooks',
    k = 'onafterunloadhooks',
    l = g.BEHAVIOR_STATE;

  function m(ca) {
    var da = a.CavalryLogger;
    da && da.getInstance().setTimeStamp(ca);
  }

  function n() {
    return !window.loading_page_chrome;
  }

  function o(ca) {
    var da = a.OnloadHooks;
    if (window.loaded && da) {
      da.runHook(ca, 'onlateloadhooks');
    } else v('onloadhooks', ca);
  }

  function p(ca) {
    var da = a.OnloadHooks;
    if (window.afterloaded && da) {
      setTimeout(function() {
        da.runHook(ca, 'onlateafterloadhooks');
      }, 0);
    } else v('onafterloadhooks', ca);
  }

  function q(ca, da) {
    if (da === (void 0)) da = n();
    da ? v('onbeforeleavehooks', ca) : v('onbeforeunloadhooks', ca);
  }

  function r(ca, da) {
    if (!window.onunload) window.onunload = function() {
      g.inform(i.ONUNLOAD, true, l);
    };
    v(ca, da);
  }

  function s(ca) {
    r(j, ca);
  }

  function t(ca) {
    r(k, ca);
  }

  function u(ca) {
    v('onleavehooks', ca);
  }

  function v(ca, da) {
    window[ca] = (window[ca] || []).concat(da);
  }

  function w(ca) {
    window[ca] = [];
  }

  function x() {
    g.inform(i.ONLOAD_DOMCONTENT, true, l);
  }
  a._domcontentready = x;

  function y() {
    var ca = document,
      da = window;
    if (ca.addEventListener) {
      var ea = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
      if (ea && ea[1] < 525) {
        var fa = setInterval(function() {
          if (/loaded|complete/.test(ca.readyState)) {
            x();
            clearInterval(fa);
          }
        }, 10);
      } else ca.addEventListener("DOMContentLoaded", x, true);
    } else {
      var ga = 'javascript:void(0)';
      if (da.location.protocol == 'https:') ga = '//:';
      ca.write('<script onreadystatechange="if (this.readyState==\'complete\') {' + 'this.parentNode.removeChild(this);_domcontentready();}" ' + 'defer="defer" src="' + ga + '"><\/script\>');
    }
    var ha = da.onload;
    da.onload = function() {
      m('t_layout');
      ha && ha();
      g.inform(i.ONLOAD, true, l);
    };
    da.onbeforeunload = function() {
      var ia = {};
      g.inform(i.ONBEFOREUNLOAD, ia, l);
      if (!ia.warn) g.inform('onload/exit', true);
      return ia.warn;
    };
  }
  var z = g.registerCallback(function() {
      m('t_onload');
      g.inform(i.ONLOAD_CALLBACK, true, l);
    }, [i.ONLOAD]),
    aa = g.registerCallback(function() {
      m('t_domcontent');
      var ca = {
        timeTriggered: Date.now()
      };
      g.inform(i.ONLOAD_DOMCONTENT_CALLBACK, ca, l);
    }, [i.ONLOAD_DOMCONTENT]);
  if (h.canUseDOM) y();
  var ba = {
    onLoad: o,
    onAfterLoad: p,
    onLeave: u,
    onBeforeUnload: q,
    onUnload: s,
    onAfterUnload: t,
    __domContentCallback: aa,
    __onloadCallback: z,
    __removeHook: w
  };
  e.exports = ba;
}, null);
__d("legacy:onload", ["Run", "OnloadEvent"], function(a, b, c, d, e, f, g) {
  a.OnloadEvent = b('OnloadEvent');
  a.onloadRegister_DEPRECATED = g.onLoad;
  a.onloadRegister = function() {
    return g.onLoad.apply(this, arguments);
  };
  a.onafterloadRegister_DEPRECATED = g.onAfterLoad;
  a.onafterloadRegister = function() {
    return g.onAfterLoad.apply(this, arguments);
  };
  a.onleaveRegister = g.onLeave;
  a.onbeforeunloadRegister = g.onBeforeUnload;
  a.onunloadRegister = g.onUnload;
}, 3);
__d("wait_for_load", ["Bootloader", "Run"], function(a, b, c, d, e, f, g, h) {
  function i(l, m) {
    return window.loaded && m.call(l);
  }

  function j(l, m, n) {
    g.loadComponents.call(g, m, n.bind(l));
    return false;
  }

  function k(l, m, n) {
    n = n.bind(l, m);
    if (window.loaded) return n();
    switch ((m || event).type) {
      case 'load':
      case 'focus':
        h.onAfterLoad(n);
        return;
      case 'click':
        var o = l.style,
          p = document.body.style;
        o.cursor = p.cursor = 'progress';
        h.onAfterLoad(function() {
          o.cursor = p.cursor = '';
          if (l.tagName.toLowerCase() == 'a') {
            if (false !== n() && l.href) window.location.href = l.href;
          } else if (l.click) l.click();
        });
        break;
    }
    return false;
  }
  a.run_if_loaded = i;
  a.run_with = j;
  a.wait_for_load = k;
}, 3);
__d("markJSEnabled", [], function(a, b, c, d, e, f) {
  var g = document.documentElement;
  g.className = g.className.replace('no_js', '');
}, null);
__d("JSCC", [], function(a, b, c, d, e, f) {
  var g = {};

  function h(j) {
    var k, l = false;
    return function() {
      if (!l) {
        k = j();
        l = true;
      }
      return k;
    };
  }
  var i = {
    get: function(j) {
      if (!g[j]) throw new Error('JSCC entry is missing');
      return g[j]();
    },
    init: function(j) {
      for (var k in j) g[k] = h(j[k]);
      return function l() {
        for (var m in j) delete g[m];
      };
    }
  };
  e.exports = i;
}, null);
__d("PageletSet", ["Arbiter"], function(a, b, c, d, e, f, g) {
  var h = {},
    i = {
      hasPagelet: function(l) {
        return h.hasOwnProperty(l);
      },
      getPagelet: function(l) {
        return h[l];
      },
      getOrCreatePagelet: function(l) {
        if (!i.hasPagelet(l)) {
          var m = new k(l);
          h[l] = m;
        }
        return i.getPagelet(l);
      },
      getPageletIDs: function() {
        return Object.keys(h);
      },
      removePagelet: function(l) {
        if (i.hasPagelet(l)) {
          h[l].destroy();
          delete h[l];
        }
      }
    };

  function j(l, m) {
    return l.contains ? l.contains(m) : l.compareDocumentPosition(m) & 16;
  }

  function k(l) {
    "use strict";
    this.id = l;
    this._root = null;
    this._destructors = [];
    this.addDestructor(function m() {
      g.inform('pagelet/destroy', {
        id: this.id,
        root: this._root
      });
    }.bind(this));
  }
  k.prototype.setRoot = function(l) {
    "use strict";
    this._root = l;
  };
  k.prototype._getDescendantPagelets = function() {
    "use strict";
    var l = [];
    if (!this._root) return l;
    var m = i.getPageletIDs();
    for (var n = 0; n < m.length; n++) {
      var o = m[n];
      if (o === this.id) continue;
      var p = h[o];
      if (p._root && j(this._root, p._root)) l.push(p);
    }
    return l;
  };
  k.prototype.addDestructor = function(l) {
    "use strict";
    this._destructors.push(l);
  };
  k.prototype.destroy = function() {
    "use strict";
    var l = this._getDescendantPagelets();
    for (var m = 0; m < l.length; m++) {
      var n = l[m];
      if (i.hasPagelet(n.id)) i.removePagelet(n.id);
    }
    for (m = 0; m < this._destructors.length; m++) this._destructors[m]();
    if (this._root)
      while (this._root.firstChild) this._root.removeChild(this._root.firstChild);
  };
  e.exports = i;
}, null);
__d("invokeCallbacks", ["ErrorUtils"], function(a, b, c, d, e, f, g) {
  function h(i, j) {
    if (i)
      for (var k = 0; k < i.length; k++) g.applyWithGuard(new Function(i[k]), j);
  }
  e.exports = h;
}, null);
__d("BigPipe", ["Arbiter", "Bootloader", "Env", "ErrorUtils", "JSCC", "OnloadEvent", "PageletSet", "Run", "ServerJS", "TimingSeriesStorage", "$", "copyProperties", "ge", "invokeCallbacks", "ix", "performanceAbsoluteNow"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
  var w = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
    x = g.BEHAVIOR_STATE,
    y = g.BEHAVIOR_PERSISTENT,
    z = {
      display_start: 'displayStart',
      display: 'display',
      jsstart: 'jsStart',
      jsdone: 'jsDone',
      prearrive: 'preArrive',
      preonload: 'preOnLoad',
      onload: 'onLoad',
      css: 'css',
      css_load: 'cssLoad',
      arrive: 'arrive',
      setup: 'setup'
    },
    aa = [];

  function ba(fa) {
    "use strict";
    r(this, {
      arbiter: g,
      rootNodeID: 'content',
      lid: 0,
      isAjax: false,
      domContentCallback: n.__domContentCallback,
      onloadCallback: n.__onloadCallback,
      domContentEvt: l.ONLOAD_DOMCONTENT_CALLBACK,
      onloadEvt: l.ONLOAD_CALLBACK,
      forceFinish: false,
      _phaseDoneCallbacks: [],
      _currentPhase: 0,
      _lastPhase: -1,
      _livePagelets: {},
      _pendingTimingSeries: {}
    });
    r(this, fa);
    if (this.automatic) {
      this._relevant_instance = ba._current_instance;
    } else ba._current_instance = this;
    this._serverJS = new o();
    g.inform('BigPipe/init', {
      lid: this.lid,
      arbiter: this.arbiter
    }, y);
    this.arbiter.registerCallback(this.domContentCallback, ['pagelet_displayed_all']);
    this._informEventExternal('phase_begin', {
      phase: 0
    });
    this.arbiter.inform('phase_begin_0', true, x);
    this.onloadCallback = this.arbiter.registerCallback(this.onloadCallback, ['pagelet_displayed_all']);
    this.arbiter.registerCallback(this._serverJS.cleanup.bind(this._serverJS), [this.onloadEvt]);
  }
  ba.prototype._beginPhase = function(fa) {
    "use strict";
    this._informEventExternal('phase_begin', {
      phase: fa
    });
    this.arbiter.inform('phase_begin_' + fa, true, x);
  };
  ba.prototype._endPhase = function(fa) {
    "use strict";
    this.arbiter.inform('phase_complete_' + fa, true, x);
    if (!this.isAjax) aa.push(Date.now());
  };
  ba.prototype._displayPageletHandler = function(fa) {
    "use strict";
    if (this.displayCallback) {
      this.displayCallback(this._displayPagelet.bind(this, fa));
    } else this._displayPagelet(fa);
  };
  ba.prototype._displayPagelet = function(fa) {
    "use strict";
    this._informPageletEvent('display_start', fa);
    var ga = this._getPagelet(fa);
    for (var ha in fa.content) {
      var ia = fa.content[ha];
      if (fa.append) ha = this._getPageletRootID(fa);
      var ja = s(ha);
      if (!ja) continue;
      if (ha === ga.id) ga.setRoot(ja);
      ia = ca(ia);
      if (ia)
        if (fa.append || w < 8) {
          if (!fa.append)
            while (ja.firstChild) ja.removeChild(ja.firstChild);
          ea(ja, ia);
        } else ja.innerHTML = ia;
      var ka = ja.getAttribute('data-referrer');
      if (!ka) ja.setAttribute('data-referrer', ha);
      if (fa.cache_hit && i.pc_debug) ja.style.border = '1px red solid';
    }
    if (fa.jsmods) {
      var la = JSON.parse(JSON.stringify(fa.jsmods)),
        ma = this._serverJS.handlePartial(la);
      ga.addDestructor(ma.cancel.bind(ma));
    }
    this._informPageletEvent('display', fa);
    this.arbiter.inform(fa.id + '_displayed', true, x);
  };
  ba.prototype._onPhaseDone = function() {
    "use strict";
    if (this._currentPhase === this._ttiPhase) this._informEventExternal('tti_bigpipe', {
      phase: this._ttiPhase
    });
    if (this._currentPhase === this._lastPhase && this._isRelevant()) this.arbiter.inform('pagelet_displayed_all', true, x);
    this._currentPhase++;
    if (w <= 8) {
      setTimeout(this._beginPhase.bind(this, this._currentPhase), 20);
    } else this._beginPhase(this._currentPhase);
  };
  ba.prototype._downloadJsForPagelet = function(fa) {
    "use strict";
    this._informPageletEvent('jsstart', fa);
    h.loadResources(fa.js || [], function() {
      this._informPageletEvent('jsdone', fa);
      fa.requires = fa.requires || [];
      if (!this.isAjax || fa.phase >= 1) fa.requires.push('uipage_onload');
      var ga = function() {
          this._informPageletEvent('preonload', fa);
          if (this._isRelevantPagelet(fa)) t(fa.onload);
          this._informPageletEvent('onload', fa);
          this.arbiter.inform('pagelet_onload', true, g.BEHAVIOR_EVENT);
          fa.provides && this.arbiter.inform(fa.provides, true, x);
        }.bind(this),
        ha = function() {
          this._isRelevantPagelet(fa) && t(fa.onafterload);
        }.bind(this);
      this.arbiter.registerCallback(ga, fa.requires);
      this.arbiter.registerCallback(ha, [this.onloadEvt]);
    }.bind(this), false, fa.id);
  };
  ba.prototype._getPagelet = function(fa) {
    "use strict";
    var ga = this._getPageletRootID(fa);
    return m.getPagelet(ga);
  };
  ba.prototype._getPageletRootID = function(fa) {
    "use strict";
    var ga = fa.append;
    if (ga) return (ga === 'bigpipe_root') ? this.rootNodeID : ga;
    return Object.keys(fa.content)[0] || null;
  };
  ba.prototype._isRelevant = function() {
    "use strict";
    return this == ba._current_instance || (this.automatic && this._relevant_instance == ba._current_instance) || this.jsNonBlock || this.forceFinish || (ba._current_instance && ba._current_instance.allowIrrelevantRequests);
  };
  ba.prototype._isRelevantPagelet = function(fa) {
    "use strict";
    if (!this._isRelevant()) return false;
    var ga = this._getPageletRootID(fa);
    return !!this._livePagelets[ga];
  };
  ba.prototype._informEventExternal = function(fa, ga) {
    "use strict";
    ga = ga || {};
    var ha = ga.id,
      ia = ga.event;
    ga.ts = v();
    ga.lid = this.lid;
    console.timeStamp && console.timeStamp(fa + " " + JSON.stringify(ga));
    if (fa === 'pagelet_event') {
      if (!(ha in this._pendingTimingSeries)) this._pendingTimingSeries[ha] = p.createSeries(ha, 'pagelet');
      this._pendingTimingSeries[ha].mark(z[ia], ga.ts);
      if (ia === 'onload') {
        this._pendingTimingSeries[ha].complete();
        delete this._pendingTimingSeries[ha];
      }
    }
    this.arbiter.inform(fa, ga, y);
  };
  ba.prototype._informPageletEvent = function(fa, ga) {
    "use strict";
    var ha = {
      event: fa,
      id: ga.id
    };
    if (ga.phase) ha.phase = ga.phase;
    if (ga.categories) ha.categories = ga.categories;
    this._informEventExternal('pagelet_event', ha);
  };
  ba.getCurrentInstance = function() {
    "use strict";
    return ba._current_instance;
  };
  ba.prototype.getPhaseFromTime = function(fa) {
    "use strict";
    for (var ga = 0; ga < aa.length; ga++)
      if (fa < aa[ga]) return ga;
    return 100;
  };
  r(ba.prototype, {
    beforePageletArrive: function(fa) {
      this._informPageletEvent('prearrive', {
        id: fa
      });
    },
    onPageletArrive: j.guard(function(fa) {
      this._informPageletEvent('arrive', fa);
      fa.content = fa.content || {};
      var ga = fa.phase;
      this._pendingTimingSeries[fa.id].addProperty('phase', ga);
      if (!this._phaseDoneCallbacks[ga]) this._phaseDoneCallbacks[ga] = this.arbiter.registerCallback(this._onPhaseDone.bind(this), ['phase_complete_' + ga]);
      this.arbiter.registerCallback(this._phaseDoneCallbacks[ga], [fa.id + '_displayed']);
      var ha = this._getPageletRootID(fa),
        ia = m.getOrCreatePagelet(ha);
      if (ha) this._pendingTimingSeries[fa.id].addProperty('rootID', ha);
      if (fa.the_end) this._lastPhase = ga;
      if (fa.tti_phase !== (void 0)) this._ttiPhase = fa.tti_phase;
      if (fa.is_second_to_last_phase) this._secondToLastPhase = ga;
      this._livePagelets[ia.id] = true;
      ia.addDestructor(function() {
        delete this._livePagelets[ia.id];
      }.bind(this));
      if (fa.jscc_map) {
        var ja = (eval)(fa.jscc_map),
          ka = k.init(ja);
        ia.addDestructor(ka);
      }
      if (fa.resource_map) h.setResourceMap(fa.resource_map);
      if (fa.bootloadable) h.enableBootload(fa.bootloadable);
      u.add(fa.ixData);
      this._informPageletEvent('setup', fa);
      var la = new g();
      la.registerCallback(this._displayPageletHandler.bind(this, fa), ['preceding_pagelets_displayed', 'display_resources_downloaded']);
      var ma = fa.display_dependency || [],
        na = ma.map(function(pa) {
          return pa + '_displayed';
        });
      this.arbiter.registerCallback(function() {
        la.inform('preceding_pagelets_displayed');
      }, na);
      this.arbiter.registerCallback(function() {
        this._informPageletEvent('css', fa);
        var pa = (fa.css || []).concat(fa.displayJS || []);
        h.loadResources(pa, function() {
          this._informPageletEvent('css_load', fa);
          la.inform('display_resources_downloaded');
        }.bind(this), false, fa.id);
      }.bind(this), ['phase_begin_' + ga]);
      this.arbiter.registerCallback(this.onloadCallback, ['pagelet_onload']);
      var oa = [fa.id + '_displayed'];
      if (!this.jsNonBlock) oa.push(this.domContentEvt);
      this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, fa), oa);
      if (fa.is_last) this._endPhase(ga);
    }, 'BigPipe#onPageletArrive')
  });

  function ca(fa) {
    if (!fa || typeof fa === 'string') return fa;
    if (fa.container_id) {
      var ga = q(fa.container_id);
      fa = da(ga) || '';
      ga.parentNode.removeChild(ga);
      return fa;
    }
    return null;
  }

  function da(fa) {
    if (!fa.firstChild) {
      h.loadModules(["ErrorSignal"], function(ha) {
        ha.sendErrorSignal('bigpipe', 'Pagelet markup container is empty.');
      });
      return null;
    }
    if (fa.firstChild.nodeType !== 8) return null;
    var ga = fa.firstChild.nodeValue;
    ga = ga.substring(1, ga.length - 1);
    return ga.replace(/\\([\s\S]|$)/g, '$1');
  }

  function ea(fa, ga) {
    var ha = document.createElement('div'),
      ia = w < 7;
    if (ia) fa.appendChild(ha);
    ha.innerHTML = ga;
    var ja = document.createDocumentFragment();
    while (ha.firstChild) ja.appendChild(ha.firstChild);
    fa.appendChild(ja);
    if (ia) fa.removeChild(ha);
  }
  e.exports = ba;
}, null);
__d("legacy:bootloader", ["Bootloader"], function(a, b, c, d) {
  a.Bootloader = b('Bootloader');
}, 3);
__d("legacy:constructor-cache", ["JSCC"], function(a, b, c, d) {
  a.JSCC = b('JSCC');
}, 3);
__d("goURI", ["URISchemes"], function(a, b, c, d, e, f, g) {
  function h(i, j, k) {
    i = i.toString();
    if (/^([^.:/?#]+):/.test(i) && !g.isAllowed(RegExp.$1)) throw new Error('goURI: URI scheme rejected, URI: ' + i);
    if (!j && a.PageTransitions && a.PageTransitions.isInitialized()) {
      a.PageTransitions.go(i, k);
    } else if (window.location.href == i) {
      window.location.reload();
    } else window.location.href = i;
  }
  e.exports = h;
}, null);
__d("legacy:goURI", ["goURI"], function(a, b, c, d) {
  a.goURI = b('goURI');
}, 3);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "OnloadEvent", "Run", "ServerJS"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = {
    INITIAL_JS_READY: 'BOOTLOAD/JSREADY',
    loadOnDOMContentReady: function(m, n) {
      g.subscribe(i.ONLOAD_DOMCONTENT_CALLBACK, function() {
        function o() {
          h.loadResources(m, function() {
            g.inform(l.INITIAL_JS_READY, true, g.BEHAVIOR_STATE);
          });
        }
        if (n) {
          setTimeout(o, n);
        } else o();
      });
    },
    handleServerJS: function(m) {
      var n = new k();
      n.handle(m);
      j.onAfterLoad(n.cleanup.bind(n));
    }
  };
  e.exports = l;
}, null);
__d("legacy:object-core-utils", ["isEmpty", "copyProperties"], function(a, b, c, d) {
  a.is_empty = b('isEmpty');
  a.copyProperties = b('copyProperties');
}, 3);
__d("DataStore", ["isEmpty"], function(a, b, c, d, e, f, g) {
  var h = {},
    i = 1;

  function j(m) {
    if (typeof m == 'string') {
      return 'str_' + m;
    } else return 'elem_' + (m.__FB_TOKEN || (m.__FB_TOKEN = [i++]))[0];
  }

  function k(m) {
    var n = j(m);
    return h[n] || (h[n] = {});
  }
  var l = {
    set: function(m, n, o) {
      if (!m) throw new TypeError('DataStore.set: namespace is required, got ' + (typeof m));
      var p = k(m);
      p[n] = o;
      return m;
    },
    get: function(m, n, o) {
      if (!m) throw new TypeError('DataStore.get: namespace is required, got ' + (typeof m));
      var p = k(m),
        q = p[n];
      if (typeof q === 'undefined' && m.getAttribute)
        if (m.hasAttribute && !m.hasAttribute('data-' + n)) {
          q = (void 0);
        } else {
          var r = m.getAttribute('data-' + n);
          q = (null === r) ? (void 0) : r;
        }
      if ((o !== (void 0)) && (q === (void 0))) q = p[n] = o;
      return q;
    },
    remove: function(m, n) {
      if (!m) throw new TypeError('DataStore.remove: namespace is required, got ' + (typeof m));
      var o = k(m),
        p = o[n];
      delete o[n];
      if (g(o)) l.purge(m);
      return p;
    },
    purge: function(m) {
      delete h[j(m)];
    },
    _storage: h
  };
  e.exports = l;
}, null);
__d("DOMQuery", ["CSS", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "getDocumentScrollElement", "isElementNode", "isNode", "isTextNode"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  function p(r, s) {
    return r.hasAttribute ? r.hasAttribute(s) : r.getAttribute(s) !== null;
  }
  var q = {
    find: function(r, s) {
      var t = q.scry(r, s);
      return t[0];
    },
    findPushSafe: function(r, s, t) {
      var u = q.scry(r, s),
        v = q.scry(r, t),
        w;
      if (u.length === 1 && v.length === 1 && u[0] === v[0]) {
        w = u;
      } else w = u.concat(v);
      return w[0];
    },
    scry: function(r, s) {
      if (!r || !r.getElementsByTagName) return [];
      var t = s.split(' '),
        u = [r];
      for (var v = 0; v < t.length; v++) {
        if (u.length === 0) break;
        if (t[v] === '') continue;
        var w = t[v],
          x = t[v],
          y = [],
          z = false;
        if (w.charAt(0) == '^')
          if (v === 0) {
            z = true;
            w = w.slice(1);
          } else return [];
        w = w.replace(/\[(?:[^=\]]*=(?:"[^"]*"|'[^']*'))?|[.#]/g, ' $&');
        var aa = w.split(' '),
          ba = aa[0] || '*',
          ca = ba == '*',
          da = aa[1] && aa[1].charAt(0) == '#';
        if (da) {
          var ea = k(aa[1].slice(1), r, ba);
          if (ea && (ca || ea.tagName.toLowerCase() == ba))
            for (var fa = 0; fa < u.length; fa++)
              if (z && q.contains(ea, u[fa])) {
                y = [ea];
                break;
              } else if (document == u[fa] || q.contains(u[fa], ea)) {
            y = [ea];
            break;
          }
        } else {
          var ga = [],
            ha = u.length,
            ia, ja = !z && x.indexOf('[') < 0 && document.querySelectorAll;
          for (var ka = 0; ka < ha; ka++) {
            if (z) {
              ia = [];
              var la = u[ka].parentNode;
              while (m(la)) {
                if (ca || la.tagName.toLowerCase() == ba) ia.push(la);
                la = la.parentNode;
              }
            } else if (ja) {
              ia = u[ka].querySelectorAll(x);
            } else ia = u[ka].getElementsByTagName(ba);
            var ma = ia.length;
            for (var na = 0; na < ma; na++) ga.push(ia[na]);
          }
          if (!ja)
            for (var oa = 1; oa < aa.length; oa++) {
              var pa = aa[oa],
                qa = pa.charAt(0) == '.',
                ra = pa.substring(1);
              for (ka = 0; ka < ga.length; ka++) {
                var sa = ga[ka];
                if (!sa || sa.nodeType !== 1) continue;
                if (qa) {
                  if (!g.hasClass(sa, ra)) delete ga[ka];
                  continue;
                } else {
                  var ta = pa.slice(1, pa.length - 1);
                  if (ta.indexOf('=') == -1) {
                    if (!p(sa, ta)) {
                      delete ga[ka];
                      continue;
                    }
                  } else {
                    var ua = ta.split('='),
                      va = ua[0],
                      wa = ua[1];
                    wa = wa.slice(1, wa.length - 1);
                    if (sa.getAttribute(va) != wa) {
                      delete ga[ka];
                      continue;
                    }
                  }
                }
              }
            }
          for (ka = 0; ka < ga.length; ka++)
            if (ga[ka]) {
              y.push(ga[ka]);
              if (z) break;
            }
        }
        u = y;
      }
      return u;
    },
    getSelection: function() {
      var r = window.getSelection,
        s = document.selection;
      if (r) {
        return r() + '';
      } else if (s) return s.createRange().text;
      return null;
    },
    contains: function(r, s) {
      r = k(r);
      s = k(s);
      typeof r === 'string' || typeof s === 'string';
      return h(r, s);
    },
    getRootElement: function() {
      var r = null;
      if (window.Quickling && Quickling.isActive()) r = k('content');
      return r || document.body;
    },
    isNode: function(r) {
      return n(r);
    },
    isNodeOfType: function(r, s) {
      var t = i(s).join('|').toUpperCase().split('|'),
        u = j(t);
      return n(r) && r.nodeName in u;
    },
    isElementNode: function(r) {
      return m(r);
    },
    isTextNode: function(r) {
      return o(r);
    },
    isInputNode: function(r) {
      return q.isNodeOfType(r, ['input', 'textarea']) || r.contentEditable === 'true';
    },
    getDocumentScrollElement: l
  };
  e.exports = q;
}, null);
__d("DOMEvent", ["invariant"], function(a, b, c, d, e, f, g) {
  function h(i) {
    "use strict";
    this.event = i || window.event;
    g(typeof(this.event.srcElement) != 'unknown');
    this.target = this.event.target || this.event.srcElement;
  }
  h.prototype.preventDefault = function() {
    "use strict";
    var i = this.event;
    if (i.preventDefault) {
      i.preventDefault();
      if (!('defaultPrevented' in i)) i.defaultPrevented = true;
    } else i.returnValue = false;
    return this;
  };
  h.prototype.isDefaultPrevented = function() {
    "use strict";
    var i = this.event;
    return ('defaultPrevented' in i) ? i.defaultPrevented : i.returnValue === false;
  };
  h.prototype.stopPropagation = function() {
    "use strict";
    var i = this.event;
    i.stopPropagation ? i.stopPropagation() : i.cancelBubble = true;
    return this;
  };
  h.prototype.kill = function() {
    "use strict";
    this.stopPropagation().preventDefault();
    return this;
  };
  h.killThenCall = function(i) {
    "use strict";
    return function(j) {
      new h(j).kill();
      return i();
    };
  };
  e.exports = h;
}, null);
__d("DOMEventListener", ["wrapFunction"], function(a, b, c, d, e, f, g) {
  var h, i;
  if (window.addEventListener) {
    h = function(k, l, m) {
      m.wrapper = g(m, 'entry', 'DOMEventListener.add ' + l);
      k.addEventListener(l, m.wrapper, false);
    };
    i = function(k, l, m) {
      k.removeEventListener(l, m.wrapper, false);
    };
  } else if (window.attachEvent) {
    h = function(k, l, m) {
      m.wrapper = g(m, 'entry', 'DOMEventListener.add ' + l);
      k.attachEvent('on' + l, m.wrapper);
    };
    i = function(k, l, m) {
      k.detachEvent('on' + l, m.wrapper);
    };
  } else i = h = function() {};
  var j = {
    add: function(k, l, m) {
      h(k, l, m);
      return {
        remove: function() {
          i(k, l, m);
          k = null;
        }
      };
    },
    remove: i
  };
  e.exports = j;
}, null);
__d("Event", ["Arbiter", "DataStore", "DOMQuery", "DOMEvent", "ErrorUtils", "ExecutionEnvironment", "Parent", "UserAgent_DEPRECATED", "DOMEventListener", "$", "copyProperties", "invariant", "getObjectValues", "event-form-bubbling"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  b('event-form-bubbling');
  var t = a.Event,
    u = 'Event.listeners';
  if (!t.prototype) t.prototype = {};

  function v(fa) {
    if (fa.type === 'click' || fa.type === 'mouseover' || fa.type === 'keydown') g.inform('Event/stop', {
      event: fa
    });
  }

  function w(fa, ga, ha) {
    this.target = fa;
    this.type = ga;
    this.data = ha;
  }
  q(w.prototype, {
    getData: function() {
      this.data = this.data || {};
      return this.data;
    },
    stop: function() {
      return t.stop(this);
    },
    prevent: function() {
      return t.prevent(this);
    },
    isDefaultPrevented: function() {
      return t.isDefaultPrevented(this);
    },
    kill: function() {
      return t.kill(this);
    },
    getTarget: function() {
      return new j(this).target || null;
    }
  });

  function x(fa) {
    if (fa instanceof w) return fa;
    if (!fa)
      if (!window.addEventListener && document.createEventObject) {
        fa = window.event ? document.createEventObject(window.event) : {};
      } else fa = {};
    if (!fa._inherits_from_prototype)
      for (var ga in t.prototype) try {
        fa[ga] = t.prototype[ga];
      } catch (ha) {}
    return fa;
  }
  q(t.prototype, {
    _inherits_from_prototype: true,
    getRelatedTarget: function() {
      var fa = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
      return fa && fa.nodeType ? fa : null;
    },
    getModifiers: function() {
      var fa = {
        control: !!this.ctrlKey,
        shift: !!this.shiftKey,
        alt: !!this.altKey,
        meta: !!this.metaKey
      };
      fa.access = n.osx() ? fa.control : fa.alt;
      fa.any = fa.control || fa.shift || fa.alt || fa.meta;
      return fa;
    },
    isRightClick: function() {
      if (this.which) return this.which === 3;
      return this.button && this.button === 2;
    },
    isMiddleClick: function() {
      if (this.which) return this.which === 2;
      return this.button && this.button === 4;
    },
    isDefaultRequested: function() {
      return this.getModifiers().any || this.isMiddleClick() || this.isRightClick();
    }
  });
  q(t.prototype, w.prototype);
  q(t, {
    listen: function(fa, ga, ha, ia) {
      if (!l.canUseDOM) return new ea(ha, na, ga, ia, qa);
      if (typeof fa == 'string') fa = p(fa);
      if (typeof ia == 'undefined') ia = t.Priority.NORMAL;
      if (typeof ga == 'object') {
        var ja = {};
        for (var ka in ga) ja[ka] = t.listen(fa, ka, ga[ka], ia);
        return ja;
      }
      if (ga.match(/^on/i)) throw new TypeError("Bad event name `" + ga + "': use `click', not `onclick'.");
      if (fa.nodeName == 'LABEL' && ga == 'click') {
        var la = fa.getElementsByTagName('input');
        fa = la.length == 1 ? la[0] : fa;
      } else if (fa === window && ga === 'scroll') {
        var ma = i.getDocumentScrollElement();
        if (ma !== document.documentElement && ma !== document.body) fa = ma;
      }
      var na = h.get(fa, u, {}),
        oa = aa[ga];
      if (oa) {
        ga = oa.base;
        if (oa.wrap) ha = oa.wrap(ha);
      }
      ca(fa, na, ga);
      var pa = na[ga];
      if (!(ia in pa)) pa[ia] = [];
      var qa = pa[ia].length,
        ra = new ea(ha, na, ga, ia, qa);
      pa[ia][qa] = ra;
      pa.numHandlers++;
      return ra;
    },
    stop: function(fa) {
      var ga = new j(fa).stopPropagation();
      v(ga.event);
      return fa;
    },
    prevent: function(fa) {
      new j(fa).preventDefault();
      return fa;
    },
    isDefaultPrevented: function(fa) {
      return new j(fa).isDefaultPrevented(fa);
    },
    kill: function(fa) {
      var ga = new j(fa).kill();
      v(ga.event);
      return false;
    },
    getKeyCode: function(event) {
      event = new j(event).event;
      if (!event) return false;
      switch (event.keyCode) {
        case 63232:
          return 38;
        case 63233:
          return 40;
        case 63234:
          return 37;
        case 63235:
          return 39;
        case 63272:
        case 63273:
        case 63275:
          return null;
        case 63276:
          return 33;
        case 63277:
          return 34;
      }
      if (event.shiftKey) switch (event.keyCode) {
        case 33:
        case 34:
        case 37:
        case 38:
        case 39:
        case 40:
          return null;
      }
      return event.keyCode;
    },
    getPriorities: function() {
      if (!y) {
        var fa = s(t.Priority);
        fa.sort(function(ga, ha) {
          return ga - ha;
        });
        y = fa;
      }
      return y;
    },
    fire: function(fa, ga, ha) {
      var ia = new w(fa, ga, ha),
        ja;
      do {
        var ka = t.__getHandler(fa, ga);
        if (ka) ja = ka(ia);
        fa = fa.parentNode;
      } while (fa && ja !== false && !ia.cancelBubble);
      return ja !== false;
    },
    __fire: function(fa, ga, event) {
      var ha = t.__getHandler(fa, ga);
      if (ha) return ha(x(event));
    },
    __getHandler: function(fa, ga) {
      var ha = h.get(fa, u);
      if (ha && ha[ga]) return ha[ga].domHandler;
    },
    getPosition: function(fa) {
      fa = new j(fa).event;
      var ga = i.getDocumentScrollElement(),
        ha = fa.clientX + ga.scrollLeft,
        ia = fa.clientY + ga.scrollTop;
      return {
        x: ha,
        y: ia
      };
    }
  });
  var y = null,
    z = function(fa) {
      return function(ga) {
        if (!i.contains(this, ga.getRelatedTarget())) return fa.call(this, ga);
      };
    },
    aa;
  if (!window.navigator.msPointerEnabled) {
    aa = {
      mouseenter: {
        base: 'mouseover',
        wrap: z
      },
      mouseleave: {
        base: 'mouseout',
        wrap: z
      }
    };
  } else aa = {
    mousedown: {
      base: 'MSPointerDown'
    },
    mousemove: {
      base: 'MSPointerMove'
    },
    mouseup: {
      base: 'MSPointerUp'
    },
    mouseover: {
      base: 'MSPointerOver'
    },
    mouseout: {
      base: 'MSPointerOut'
    },
    mouseenter: {
      base: 'MSPointerOver',
      wrap: z
    },
    mouseleave: {
      base: 'MSPointerOut',
      wrap: z
    }
  };
  if (n.firefox()) {
    var ba = function(fa, event) {
      event = x(event);
      var ga = event.getTarget();
      while (ga) {
        t.__fire(ga, fa, event);
        ga = ga.parentNode;
      }
    };
    document.documentElement.addEventListener('focus', ba.bind(null, 'focusin'), true);
    document.documentElement.addEventListener('blur', ba.bind(null, 'focusout'), true);
  }
  var ca = function(fa, ga, ha) {
      if (ha in ga) return;
      var ia = da.bind(fa, ha);
      ga[ha] = {
        numHandlers: 0,
        domHandlerRemover: o.add(fa, ha, ia),
        domHandler: ia
      };
      var ja = 'on' + ha;
      if (fa[ja]) {
        var ka = fa === document.documentElement ? t.Priority._BUBBLE : t.Priority.TRADITIONAL,
          la = fa[ja];
        fa[ja] = null;
        t.listen(fa, ha, la, ka);
      }
      if (fa.nodeName === 'FORM' && ha === 'submit') t.listen(fa, ha, t.__bubbleSubmit.bind(null, fa), t.Priority._BUBBLE);
    },
    da = function(fa, event) {
      event = x(event);
      if (!h.get(this, u)) throw new Error("Bad listenHandler context.");
      var ga = h.get(this, u)[fa];
      if (!ga) throw new Error("No registered handlers for `" + fa + "'.");
      if (fa == 'click') {
        var ha = m.byTag(event.getTarget(), 'a');
        if (window.clickRefAction) window.clickRefAction('click', ha, event);
      }
      var ia = t.getPriorities();
      for (var ja = 0; ja < ia.length; ja++) {
        var ka = ia[ja];
        if (ka in ga) {
          var la = ga[ka];
          for (var ma = 0; ma < la.length; ma++) {
            if (!la[ma]) continue;
            var na = la[ma].fire(this, event);
            if (na === false) {
              return event.kill();
            } else if (event.cancelBubble) event.stop();
          }
        }
      }
      return event.returnValue;
    };
  t.Priority = {
    URGENT: -20,
    TRADITIONAL: -10,
    NORMAL: 0,
    _BUBBLE: 1000
  };

  function ea(fa, ga, ha, ia, ja) {
    this._handler = fa;
    this._handlers = ga;
    this._type = ha;
    this._priority = ia;
    this._id = ja;
  }
  q(ea.prototype, {
    remove: function() {
      if (l.canUseDOM) {
        r(this._handlers);
        var fa = this._handlers[this._type];
        if (fa.numHandlers <= 1) {
          fa.domHandlerRemover.remove();
          delete this._handlers[this._type];
        } else {
          delete fa[this._priority][this._id];
          fa.numHandlers--;
        }
        this._handlers = null;
      }
    },
    fire: function(fa, event) {
      if (l.canUseDOM) return k.applyWithGuard(this._handler, fa, [event], function(ga) {
        ga.event_type = event.type;
        ga.dom_element = fa.name || fa.id;
        ga.category = 'eventhandler';
      });
      return true;
    }
  });
  a.$E = t.$E = x;
  e.exports = t;
}, null);
__d("FocusListener", ["Arbiter", "CSS", "Event", "Parent", "getActiveElement"], function(a, b, c, d, e, f, g, h, i, j, k) {
  var l = {
    expandInput: function(q) {
      h.addClass(q, 'child_is_active');
      h.addClass(q, 'child_is_focused');
      h.addClass(q, 'child_was_focused');
      g.inform('reflow');
    }
  };

  function m(q, r) {
    if (r.getAttribute('data-silentfocuslistener')) return;
    var s = j.byClass(r, 'focus_target');
    if (s)
      if ('focus' == q || 'focusin' == q) {
        l.expandInput(s);
      } else {
        if (r.value === '') h.removeClass(s, 'child_is_active');
        h.removeClass(s, 'child_is_focused');
      }
  }
  var n = k();
  if (n) m('focus', n);

  function o(event) {
    event = event || window.event;
    m(event.type, event.target || event.srcElement);
  }
  var p = document.documentElement;
  if (p.addEventListener) {
    p.addEventListener('focus', o, true);
    p.addEventListener('blur', o, true);
  } else {
    p.attachEvent('onfocusin', o);
    p.attachEvent('onfocusout', o);
  }
  i.listen(document.documentElement, 'submit', function() {});
  e.exports = l;
}, null);
__d("clickRefAction", ["Arbiter"], function(a, b, c, d, e, f, g) {
  function h(l, m, n, o, p) {
    var q = l + '/' + m;
    this.ue = q;
    this._ue_ts = l;
    this._ue_count = m;
    this._context = n;
    this._ns = null;
    this._node = o;
    this._type = p;
  }
  h.prototype.set_namespace = function(l) {
    this._ns = l;
    return this;
  };
  h.prototype.coalesce_namespace = function(l) {
    if (this._ns === null) this._ns = l;
    return this;
  };
  h.prototype.add_event = function() {
    return this;
  };
  var i = 0,
    j = [];

  function k(l, m, event, n, o) {
    var p = Date.now(),
      q = event && event.type;
    o = o || {};
    if (!m && event) m = event.getTarget();
    var r = 50;
    if (m && n != "FORCE")
      for (var s = j.length - 1; s >= 0 && ((p - j[s]._ue_ts) < r); --s)
        if (j[s]._node == m && j[s]._type == q) return j[s];
    var t = new h(p, i, l, m, q);
    j.push(t);
    while (j.length > 10) j.shift();
    g.inform("ClickRefAction/new", {
      cfa: t,
      node: m,
      mode: n,
      event: event,
      extra_data: o
    }, g.BEHAVIOR_PERSISTENT);
    i++;
    return t;
  }
  e.exports = a.clickRefAction = k;
}, null);
__d("trackReferrer", ["Parent"], function(a, b, c, d, e, f, g) {
  function h(i, j) {
    i = g.byAttribute(i, 'data-referrer');
    if (i) {
      var k = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(j)[1] || '';
      if (!k) return;
      var l = k + '|' + i.getAttribute('data-referrer'),
        m = new Date();
      m.setTime(Date.now() + 1000);
      document.cookie = "x-src=" + encodeURIComponent(l) + "; " + "expires=" + m.toGMTString() + ";path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1');
    }
    return i;
  }
  e.exports = h;
}, null);
__d("Primer", ["Bootloader", "CSS", "ErrorUtils", "Parent", "clickRefAction", "trackReferrer"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
  var m = null,
    n = /async(?:-post)?|dialog(?:-post)?|theater|toggle/,
    o = document.documentElement;

  function p(t, u) {
    t = j.byAttribute(t, u);
    if (!t) return;
    do {
      var v = t.getAttribute(u);
      JSON.parse(v).forEach(function(w) {
        var x = t;
        g.loadModules.call(g, [w[0]], function(y) {
          y[w[1]](x);
        });
      });
    } while (t = j.byAttribute(t.parentNode, u));
    return false;
  }
  o.onclick = i.guard(function(t) {
    t = t || window.event;
    m = t.target || t.srcElement;
    var u = j.byTag(m, 'A');
    if (!u) return p(m, 'data-onclick');
    var v = u.getAttribute('ajaxify'),
      w = u.href,
      x = v || w;
    if (x) k('a', u, t).coalesce_namespace('primer');
    if (v && w && !(/#$/).test(w)) {
      var y = t.which && t.which === 2,
        z = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
      if (y || z) return;
    }
    var aa = p(m, 'data-onclick');
    l(u, x);
    var ba = u.rel && u.rel.match(n);
    ba = ba && ba[0];
    switch (ba) {
      case 'dialog':
      case 'dialog-post':
        g.loadModules(["AsyncDialog"], function(ca) {
          ca.bootstrap(x, u, ba);
        });
        break;
      case 'async':
      case 'async-post':
        g.loadModules(["AsyncRequest"], function(ca) {
          ca.bootstrap(x, u);
        });
        break;
      case 'theater':
        g.loadModules(["PhotoSnowlift"], function(ca) {
          ca.bootstrap(x, u);
        });
        break;
      case 'toggle':
        h.toggleClass(u.parentNode, 'openToggler');
        g.loadModules(["Toggler"], function(ca) {
          ca.bootstrap(u);
        });
        break;
      default:
        return aa;
    }
    return false;
  }, 'Primer click');
  o.onsubmit = i.guard(function(t) {
    t = t || window.event;
    var u = t.target || t.srcElement;
    if (u && u.nodeName == 'FORM' && u.getAttribute('rel') == 'async') {
      k('f', u, t).coalesce_namespace('primer');
      var v = m;
      g.loadModules(["Form"], function(w) {
        w.bootstrap(u, v);
      });
      return false;
    }
  }, 'Primer submit');
  var q = null,
    r = function(t, u) {
      u = u || window.event;
      q = u.target || u.srcElement;
      p(q, 'data-on' + t);
      var v = j.byAttribute(q, 'data-hover');
      if (!v) return;
      switch (v.getAttribute('data-hover')) {
        case 'tooltip':
          g.loadModules(["Tooltip"], function(w) {
            w.process(v, q);
          });
          break;
      }
    };
  o.onmouseover = i.guard(r.bind(null, 'mouseover'), 'Primer mouseover');
  var s = i.guard(r.bind(null, 'focus'), 'Primer focus');
  if (o.addEventListener) {
    o.addEventListener('focus', s, true);
  } else o.attachEvent('onfocusin', s);
}, null);
__d("URLFragmentPrelude", ["ScriptPath", "URLFragmentPreludeConfig"], function(a, b, c, d, e, f, g, h) {
  var i = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
    j = '',
    k = /^[^\/\\#!\.\?\*\&\^=]+$/;
  window.location.href.replace(i, function(l, m, n, o) {
    var p, q, r, s;
    p = q = m + (n ? '?' + n : '');
    if (o) {
      if (h.incorporateQuicklingFragment) {
        var t = o.replace(/^(!|%21)/, '');
        r = t.charAt(0);
        if (r == '/' || r == '\\') p = t.replace(/^[\\\/]+/, '/');
      }
      if (h.hashtagRedirect)
        if (q == p) {
          var u = o.match(k);
          if (u && !n && m == '/') p = '/hashtag/' + o;
        }
    }
    if (p != q) {
      s = g.getScriptPath();
      if (s) document.cookie = "rdir=" + s + "; path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1');
      window.location.replace(j + p);
    }
  });
}, null);
__d("SidebarPrelude", [], function(a, b, c, d, e, f) {
  var g = {
    addSidebarMode: function(h, i) {
      var j = document.documentElement;
      if (j.clientWidth > i) {
        j.className = j.className + ' sidebarMode';
        if (j.clientWidth <= h) j.className = j.className + ' miniSidebar';
      }
    }
  };
  e.exports = g;
}, null);
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], function(a, b, c, d, e, f, g, h) {
  document.documentElement.onkeydown = function(i) {
    i = i || window.event;
    var j = i.target || i.srcElement,
      k = i.keyCode == 13 && !i.altKey && !i.ctrlKey && !i.metaKey && !i.shiftKey && h.hasClass(j, 'enter_submit');
    if (k) {
      g.loadModules(["DOM", "Input", "trackReferrer", "Form"], function(l, m, n, o) {
        if (!m.isEmpty(j)) {
          var p = j.form,
            q = l.scry(p, '.enter_submit_target')[0] || l.scry(p, '[type="submit"]')[0];
          if (q) {
            var r = o.getAttribute(p, 'ajaxify') || o.getAttribute(p, 'action');
            if (r) n(p, r);
            q.click();
          }
        }
      });
      return false;
    }
  };
}, null);
__d("CommentPrelude", ["Arbiter", "CSS", "Parent", "clickRefAction"], function(a, b, c, d, e, f, g, h, i, j) {
  function k(o, p) {
    j('ufi', o, null, 'FORCE');
    return l(o, p);
  }

  function l(o, p) {
    var q = i.byTag(o, 'form');
    m(q);
    var r = h.removeClass.bind(null, q, 'hidden_add_comment');
    if (window.ScrollAwareDOM) {
      window.ScrollAwareDOM.monitor(q, r);
    } else r();
    if (p !== false) {
      var s = q.add_comment_text_text || q.add_comment_text,
        t = s.length;
      if (t) {
        if (!i.byClass(s[t - 1], 'UFIReplyList')) {
          s = s[t - 1];
        } else if (!i.byClass(s[0], 'UFIReplyList')) {
          s = s[0];
        } else s = null;
      } else {
        var u = i.byClass(s, 'uiTypeahead');
        if (u) {
          h.addClass(u, 'UFIInputContainerGlow');
          setTimeout(function() {
            h.removeClass(u, 'UFIInputContainerGlow');
          }, 2000);
        }
        s.focus();
      }
      if (s) {
        s.focus();
        g.inform('comment/focus', {
          element: s
        });
      }
    }
    return false;
  }

  function m(o) {
    var p = h.removeClass.bind(null, o, 'collapsed_comments');
    if (window.ScrollAwareDOM) {
      window.ScrollAwareDOM.monitor(o, p);
    } else p();
  }
  var n = {
    click: k,
    expand: l,
    uncollapse: m
  };
  e.exports = n;
}, null);
__d("legacy:ufi-comment-prelude-js", ["CommentPrelude"], function(a, b, c, d, e, f, g) {
  a.fc_click = g.click;
  a.fc_expand = g.expand;
}, 3);
__d("ScriptMonitor", [], function(a, b, c, d, e, f) {
  var g, h = [],
    i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  e.exports = {
    activate: function() {
      if (!i) return;
      g = new i(function(j) {
        for (var k = 0; k < j.length; k++) {
          var l = j[k];
          if (l.type == 'childList') {
            for (var m = 0; m < l.addedNodes.length; m++) {
              var n = l.addedNodes[m];
              if ((n.tagName == 'SCRIPT' || n.tagName == 'IFRAME') && n.src) h.push(n.src);
            }
          } else if (l.type == 'attributes' && l.attributeName == 'src' && (l.target.tagName == 'SCRIPT' || l.target.tagName == 'IFRAME')) h.push(l.target.src);
        }
      });
      g.observe(document, {
        attributes: true,
        childList: true,
        subtree: true
      });
    },
    stop: function() {
      g && g.disconnect();
      return h;
    }
  };
}, null);
__d("Cookie", ["CookieCore", "Env", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
  function j(l, m, n, o, p) {
    if (h.no_cookies && l != 'tpa') return;
    g.set(l, m, n, o, p);
  }
  var k = i({}, g);
  k.set = j;
  e.exports = k;
}, null);
__d("SyntaxErrorMonitor", ["Cookie", "ErrorUtils"], function(a, b, c, d, e, f, g, h) {
  var i = 'js_ver',
    j = 86400000,
    k = 1.262304e+12,
    l = null;

  function m(p) {
    return p.name == 'SyntaxError' || /syntaxerror/i.test(p.message);
  }

  function n(p) {
    if (m(p)) {
      var q = g.get(i),
        r = Math.floor((Date.now() - k) / j);
      if (!q || r - q >= l.bump_freq_day) g.set(i, r, l.cookie_ttl_sec * 1000);
    }
  }
  var o = {
    init: function(p) {
      l = p;
      h.addListener(n);
    }
  };
  e.exports = o;
}, null);