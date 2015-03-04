var g = "",
  aa = " rowspan=",
  ba = "#ffffff",
  ca = "/off",
  da = "</table>",
  ea = "</tr>",
  fa = "??",
  ga = "Content-Type",
  ha = "array",
  ja = "calcontent",
  l = "change",
  ka = "cic-av",
  la = "cic-noprs",
  ma = "cic-nr",
  na = "cic-priv",
  oa = "cic-prsn",
  pa = "cic-ques",
  ra = "cic-rcr",
  sa = "cic-spcl",
  ta = "cic-tmr",
  ua = "clm.updated",
  va = "complete",
  wa = "delayedcore",
  ya = "detailssettings",
  za = "eui-s",
  Aa = "eui-t",
  Ba = "eventform",
  Ca = "extras",
  Da = "format24HourTime",
  Ea = "function",
  Fa = "gadget",
  Ga = "lvHeader",
  Ha = "object",
  Ia = "search",
  Ja = "secid",
  Ka = "weatherOld";

function La() {
  return function(a) {
    return a
  }
}

function Ma() {
  return function() {}
}

function Na(a) {
  return function(b) {
    this[a] = b
  }
}

function p(a) {
  return function() {
    return this[a]
  }
}

function t(a) {
  return function() {
    return a
  }
}
var v, Oa = [];

function Pa(a) {
  return function() {
    return Oa[a].apply(this, arguments)
  }
}

function Qa(a, b) {
  return g + a + " \u2013 " + b
};
var Ra = Ra || {},
  Sa = this;

function x(a) {
  return void 0 !== a
}

function Ta(a, b, c) {
  a = a.split(".");
  c = c || Sa;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d; a.length && (d = a.shift());) !a.length && x(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
}

function Ua(a, b) {
  for (var c = a.split("."), d = b || Sa, e; e = c.shift();)
    if (null != d[e]) d = d[e];
    else return null;
  return d
}

function z() {}

function Va(a) {
  a.L = function() {
    return a.HF ? a.HF : a.HF = new a
  }
}

function Wa(a) {
  var b = typeof a;
  if (b == Ha)
    if (a) {
      if (a instanceof Array) return ha;
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) return Ha;
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return ha;
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return Ea
    } else return "null";
  else if (b == Ea && "undefined" == typeof a.call) return Ha;
  return b
}

function Xa(a) {
  return Wa(a) == ha
}

function Ya(a) {
  var b = Wa(a);
  return b == ha || b == Ha && "number" == typeof a.length
}

function Za(a) {
  return "string" == typeof a
}

function ab(a) {
  return "number" == typeof a
}

function bb(a) {
  return Wa(a) == Ea
}

function db(a) {
  var b = typeof a;
  return b == Ha && null != a || b == Ea
}

function eb(a) {
  return a[fb] || (a[fb] = ++aaa)
}
var fb = "closure_uid_" + (1E9 * Math.random() >>> 0),
  aaa = 0;

function baa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}

function caa(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}

function A(a, b, c) {
  A = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? baa : caa;
  return A.apply(null, arguments)
}

function B(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b)
  }
}
var hb = Date.now || function() {
    return +new Date
  },
  ib = null;

function C(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.J = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.t6 = function(a, c, f) {
    for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
    return b.prototype[c].apply(a, h)
  }
}
Function.prototype.bind = Function.prototype.bind || function(a, b) {
  if (1 < arguments.length) {
    var c = Array.prototype.slice.call(arguments, 1);
    c.unshift(this, a);
    return A.apply(null, c)
  }
  return A(this, a)
};

function jb(a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, jb);
  else {
    var b = Error().stack;
    b && (this.stack = b)
  }
  a && (this.message = String(a))
}
C(jb, Error);
jb.prototype.name = "CustomError";
var kb;

function lb(a, b) {
  return 0 == a.lastIndexOf(b, 0)
}

function mb(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c
}

function nb(a, b) {
  for (var c = a.split("%s"), d = g, e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
  return d + c.join("%s")
}
var ob = String.prototype.trim ? function(a) {
  return a.trim()
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, g)
};

function pb(a, b) {
  var c = String(a).toLowerCase(),
    d = String(b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1
}

function qb(a) {
  return encodeURIComponent(String(a))
}

function rb(a) {
  return decodeURIComponent(a.replace(/\+/g, " "))
}

function E(a) {
  if (!daa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(eaa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(faa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(gaa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(haa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(iaa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(jaa, "&#0;"));
  return a
}
var eaa = /&/g,
  faa = /</g,
  gaa = />/g,
  haa = /"/g,
  iaa = /'/g,
  jaa = /\x00/g,
  daa = /[\x00&<>"']/;

function ub(a, b) {
  return -1 != a.indexOf(b)
}

function vb(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}

function wb(a) {
  return Array.prototype.join.call(arguments, g)
}

function xb(a, b) {
  for (var c = 0, d = ob(String(a)).split("."), e = ob(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
    var k = d[h] || g,
      m = e[h] || g,
      n = RegExp("(\\d*)(\\D*)", "g"),
      q = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = n.exec(k) || [g, g, g],
        u = q.exec(m) || [g, g, g];
      if (0 == r[0].length && 0 == u[0].length) break;
      c = yb(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || yb(0 == r[2].length, 0 == u[2].length) || yb(r[2], u[2])
    } while (0 == c)
  }
  return c
}

function yb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
}
var kaa = 2147483648 * Math.random() | 0;

function zb(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}

function laa(a) {
  var b = Za(void 0) ? vb(void 0) : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : g) + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase()
  })
};
var Ab = Array.prototype,
  Bb = Ab.indexOf ? function(a, b, c) {
    return Ab.indexOf.call(a, b, c)
  } : function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (Za(a)) return Za(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
      if (c in a && a[c] === b) return c;
    return -1
  },
  maa = Ab.lastIndexOf ? function(a, b, c) {
    return Ab.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
  } : function(a, b, c) {
    c = null == c ? a.length - 1 : c;
    0 > c && (c = Math.max(0, a.length + c));
    if (Za(a)) return Za(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
    for (; 0 <= c; c--)
      if (c in a && a[c] ===
        b) return c;
    return -1
  },
  F = Ab.forEach ? function(a, b, c) {
    Ab.forEach.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = Za(a) ? a.split(g) : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
  },
  Cb = Ab.filter ? function(a, b, c) {
    return Ab.filter.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = [], f = 0, h = Za(a) ? a.split(g) : a, k = 0; k < d; k++)
      if (k in h) {
        var m = h[k];
        b.call(c, m, k, a) && (e[f++] = m)
      }
    return e
  },
  Db = Ab.map ? function(a, b, c) {
    return Ab.map.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = Array(d), f = Za(a) ? a.split(g) : a, h = 0; h < d; h++) h in
      f && (e[h] = b.call(c, f[h], h, a));
    return e
  },
  naa = Ab.reduce ? function(a, b, c, d) {
    d && (b = A(b, d));
    return Ab.reduce.call(a, b, c)
  } : function(a, b, c, d) {
    var e = c;
    F(a, function(c, h) {
      e = b.call(d, e, c, h, a)
    });
    return e
  },
  Eb = Ab.some ? function(a, b, c) {
    return Ab.some.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = Za(a) ? a.split(g) : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return !0;
    return !1
  },
  Fb = Ab.every ? function(a, b, c) {
    return Ab.every.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = Za(a) ? a.split(g) : a, f = 0; f < d; f++)
      if (f in e && !b.call(c,
          e[f], f, a)) return !1;
    return !0
  };

function Gb(a, b, c) {
  b = Hb(a, b, c);
  return 0 > b ? null : Za(a) ? a.charAt(b) : a[b]
}

function Hb(a, b, c) {
  for (var d = a.length, e = Za(a) ? a.split(g) : a, f = 0; f < d; f++)
    if (f in e && b.call(c, e[f], f, a)) return f;
  return -1
}

function Ib(a, b) {
  return 0 <= Bb(a, b)
}

function Jb(a) {
  return 0 == a.length
}

function Kb(a) {
  if (!Xa(a))
    for (var b = a.length - 1; 0 <= b; b--) delete a[b];
  a.length = 0
}

function Lb(a, b) {
  var c = Bb(a, b),
    d;
  (d = 0 <= c) && Mb(a, c);
  return d
}

function Mb(a, b) {
  Ab.splice.call(a, b, 1)
}

function Nb(a) {
  return Ab.concat.apply(Ab, arguments)
}

function Ob(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c
  }
  return []
}

function Pb(a, b, c) {
  return 2 >= arguments.length ? Ab.slice.call(a, b) : Ab.slice.call(a, b, c)
}

function Qb(a, b) {
  a.sort(b || Rb)
}

function Rb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}

function Sb(a) {
  for (var b = [], c = 0; c < a; c++) b[c] = 0;
  return b
};

function Tb(a) {
  Tb[" "](a);
  return a
}
Tb[" "] = z;

function Ub(a, b) {
  try {
    return Tb(a[b]), !0
  } catch (c) {}
  return !1
};

function Vb(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a)
}

function Wb(a, b) {
  var c = {},
    d;
  for (d in a) c[d] = b.call(void 0, a[d], d, a);
  return c
}

function Xb(a) {
  var b = 0,
    c;
  for (c in a) b++;
  return b
}

function Yb(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b
}

function Zb(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = d;
  return b
}

function $b(a, b) {
  for (var c in a)
    if (a[c] == b) return !0;
  return !1
}

function ac(a) {
  for (var b in a) return !1;
  return !0
}

function bc(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c
}

function dc(a) {
  var b = {},
    c;
  for (c in a) b[c] = a[c];
  return b
}
var ec = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function fc(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < ec.length; f++) c = ec[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
  }
}

function gc(a) {
  var b = arguments.length;
  if (1 == b && Xa(arguments[0])) return gc.apply(null, arguments[0]);
  if (b % 2) throw Error("Uneven number of arguments");
  for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
  return c
}

function hc(a) {
  var b = arguments.length;
  if (1 == b && Xa(arguments[0])) return hc.apply(null, arguments[0]);
  for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
  return c
};
var ic;
t: {
  var jc = Sa.navigator;
  if (jc) {
    var kc = jc.userAgent;
    if (kc) {
      ic = kc;
      break t
    }
  }
  ic = g
}

function lc(a) {
  return ub(ic, a)
};

function mc() {
  return lc("Opera") || lc("OPR")
}

function nc() {
  return (lc("Chrome") || lc("CriOS")) && !mc()
};

function oc() {
  return lc("iPhone") && !lc("iPod") && !lc("iPad")
};
var pc = mc(),
  G = lc("Trident") || lc("MSIE"),
  qc = lc("Gecko") && !ub(ic.toLowerCase(), "webkit") && !(lc("Trident") || lc("MSIE")),
  rc = ub(ic.toLowerCase(), "webkit"),
  sc = rc && lc("Mobile"),
  tc = lc("Macintosh"),
  uc = lc("Windows"),
  oaa = lc("Linux") || lc("CrOS"),
  vc = Sa.navigator || null;
vc && ub(vc.appVersion || g, "X11");
var paa = lc("Android"),
  qaa = oc(),
  raa = lc("iPad");

function wc() {
  var a = Sa.document;
  return a ? a.documentMode : void 0
}
var xc = function() {
    var a = g,
      b;
    if (pc && Sa.opera) return a = Sa.opera.version, bb(a) ? a() : a;
    qc ? b = /rv\:([^\);]+)(\)|;)/ : G ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : rc && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(ic)) ? a[1] : g);
    return G && (b = wc(), b > parseFloat(a)) ? String(b) : a
  }(),
  yc = {};

function zc(a) {
  return yc[a] || (yc[a] = 0 <= xb(xc, a))
}

function Ac(a) {
  return G && saa >= a
}
var Bc = Sa.document,
  saa = Bc && G ? wc() || ("CSS1Compat" == Bc.compatMode ? parseInt(xc, 10) : 5) : void 0;
var taa = !G || Ac(9),
  Cc = !G || Ac(9),
  uaa = G && !zc("9");
!rc || zc("528");
qc && zc("1.9b") || G && zc("8") || pc && zc("9.5") || rc && zc("528");
qc && !zc("8") || G && zc("9");

function H() {
  this.Kk = this.Kk;
  this.Pe = this.Pe
}
v = H.prototype;
v.Kk = !1;
v.isDisposed = p("Kk");
v.ea = function() {
  this.Kk || (this.Kk = !0, this.M())
};
v.hc = function(a) {
  a = B(I, a);
  this.Kk ? a.call(void 0) : (this.Pe || (this.Pe = []), this.Pe.push(x(void 0) ? A(a, void 0) : a))
};
v.M = function() {
  if (this.Pe)
    for (; this.Pe.length;) this.Pe.shift()()
};

function I(a) {
  a && typeof a.ea == Ea && a.ea()
};

function J(a, b) {
  this.type = a;
  this.A = this.target = b;
  this.C = !1;
  this.bI = !0
}
J.prototype.stopPropagation = Pa(1);
J.prototype.preventDefault = function() {
  this.bI = !1
};
var Dc = G ? "focusin" : "DOMFocusIn",
  Yaa = G ? "focusout" : "DOMFocusOut";

function Ec(a, b) {
  J.call(this, a ? a.type : g);
  this.o = this.A = this.target = null;
  this.D = this.keyCode = this.V = this.clientY = this.clientX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.K = !1;
  this.b = null;
  a && this.init(a, b)
}
C(Ec, J);
Ec.prototype.init = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.A = b;
  var d = a.relatedTarget;
  d ? qc && (Ub(d, "nodeName") || (d = null)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.o = d;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.V = a.button;
  this.keyCode = a.keyCode || 0;
  this.D = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.K = tc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.b = a;
  a.defaultPrevented && this.preventDefault()
};
Ec.prototype.stopPropagation = Pa(0);
Ec.prototype.preventDefault = function() {
  Ec.J.preventDefault.call(this);
  var a = this.b;
  if (a.preventDefault) a.preventDefault();
  else if (a.returnValue = !1, uaa) try {
    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
  } catch (b) {}
};
Ec.prototype.Z = Pa(2);
var Fc = "closure_listenable_" + (1E6 * Math.random() | 0);

function Gc(a) {
  return !(!a || !a[Fc])
}
var Zaa = 0;

function $aa(a, b, c, d, e) {
  this.Re = a;
  this.b = null;
  this.src = b;
  this.type = c;
  this.Xp = !!d;
  this.Wc = e;
  this.key = ++Zaa;
  this.og = this.Wp = !1
}

function Hc(a) {
  a.og = !0;
  a.Re = null;
  a.b = null;
  a.src = null;
  a.Wc = null
};

function Ic(a) {
  this.src = a;
  this.b = {};
  this.o = 0
}
Ic.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.b[f];
  a || (a = this.b[f] = [], this.o++);
  var h = Jc(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Wp = !1)) : (b = new $aa(b, this.src, f, !!d, e), b.Wp = c, a.push(b));
  return b
};
Ic.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.b)) return !1;
  var e = this.b[a];
  b = Jc(e, b, c, d);
  return -1 < b ? (Hc(e[b]), Mb(e, b), 0 == e.length && (delete this.b[a], this.o--), !0) : !1
};

function Kc(a, b) {
  var c = b.type;
  if (!(c in a.b)) return !1;
  var d = Lb(a.b[c], b);
  d && (Hc(b), 0 == a.b[c].length && (delete a.b[c], a.o--));
  return d
}

function Lc(a) {
  var b = 0,
    c;
  for (c in a.b) {
    for (var d = a.b[c], e = 0; e < d.length; e++) ++b, Hc(d[e]);
    delete a.b[c];
    a.o--
  }
}

function Mc(a, b, c, d, e) {
  a = a.b[b.toString()];
  b = -1;
  a && (b = Jc(a, c, d, e));
  return -1 < b ? a[b] : null
}

function Jc(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.og && f.Re == b && f.Xp == !!c && f.Wc == d) return e
  }
  return -1
};
var Nc = "closure_lm_" + (1E6 * Math.random() | 0),
  Oc = {},
  Pc = 0;

function K(a, b, c, d, e) {
  if (Xa(b)) {
    for (var f = 0; f < b.length; f++) K(a, b[f], c, d, e);
    return null
  }
  c = Qc(c);
  return Gc(a) ? a.Ud.add(String(b), c, !1, d, e) : Rc(a, b, c, !1, d, e)
}

function Rc(a, b, c, d, e, f) {
  if (!b) throw Error("Invalid event type");
  var h = !!e,
    k = Sc(a);
  k || (a[Nc] = k = new Ic(a));
  c = k.add(b, c, d, e, f);
  if (c.b) return c;
  d = aba();
  c.b = d;
  d.src = a;
  d.Re = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Tc(b.toString()), d);
  Pc++;
  return c
}

function aba() {
  var a = bba,
    b = Cc ? function(c) {
      return a.call(b.src, b.Re, c)
    } : function(c) {
      c = a.call(b.src, b.Re, c);
      if (!c) return c
    };
  return b
}

function Uc(a, b, c, d, e) {
  if (Xa(b)) {
    for (var f = 0; f < b.length; f++) Uc(a, b[f], c, d, e);
    return null
  }
  c = Qc(c);
  return Gc(a) ? a.Ud.add(String(b), c, !0, d, e) : Rc(a, b, c, !0, d, e)
}

function Vc(a, b, c, d, e) {
  if (Xa(b))
    for (var f = 0; f < b.length; f++) Vc(a, b[f], c, d, e);
  else c = Qc(c), Gc(a) ? a.Ud.remove(String(b), c, d, e) : a && (a = Sc(a)) && (b = Mc(a, b, c, !!d, e)) && Wc(b)
}

function Wc(a) {
  if (ab(a) || !a || a.og) return !1;
  var b = a.src;
  if (Gc(b)) return Kc(b.Ud, a);
  var c = a.type,
    d = a.b;
  b.removeEventListener ? b.removeEventListener(c, d, a.Xp) : b.detachEvent && b.detachEvent(Tc(c), d);
  Pc--;
  (c = Sc(b)) ? (Kc(c, a), 0 == c.o && (c.src = null, b[Nc] = null)) : Hc(a);
  return !0
}

function Xc(a, b, c, d, e) {
  c = Qc(c);
  d = !!d;
  return Gc(a) ? Mc(a.Ud, String(b), c, d, e) : a ? (a = Sc(a)) ? Mc(a, b, c, d, e) : null : null
}

function Tc(a) {
  return a in Oc ? Oc[a] : Oc[a] = "on" + a
}

function Yc(a, b, c, d) {
  var e = !0;
  if (a = Sc(a))
    if (b = a.b[b.toString()])
      for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];
        f && f.Xp == c && !f.og && (f = Zc(f, d), e = e && !1 !== f)
      }
    return e
}

function Zc(a, b) {
  var c = a.Re,
    d = a.Wc || a.src;
  a.Wp && Wc(a);
  return c.call(d, b)
}

function bba(a, b) {
  if (a.og) return !0;
  if (!Cc) {
    var c = b || Ua("window.event"),
      d = new Ec(c, this),
      e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      t: {
        var f = !1;
        if (0 == c.keyCode) try {
          c.keyCode = -1;
          break t
        } catch (h) {
          f = !0
        }
        if (f || void 0 == c.returnValue) c.returnValue = !0
      }
      c = [];
      for (f = d.A; f; f = f.parentNode) c.push(f);
      for (var f = a.type, k = c.length - 1; !d.C && 0 <= k; k--) {
        d.A = c[k];
        var m = Yc(c[k], f, !0, d),
          e = e && m
      }
      for (k = 0; !d.C && k < c.length; k++) d.A = c[k],
      m = Yc(c[k], f, !1, d),
      e = e && m
    }
    return e
  }
  return Zc(a, new Ec(b, this))
}

function Sc(a) {
  a = a[Nc];
  return a instanceof Ic ? a : null
}
var $c = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Qc(a) {
  if (bb(a)) return a;
  a[$c] || (a[$c] = function(b) {
    return a.handleEvent(b)
  });
  return a[$c]
};

function M() {
  H.call(this);
  this.Ud = new Ic(this);
  this.WK = this;
  this.Xt = null
}
C(M, H);
M.prototype[Fc] = !0;
v = M.prototype;
v.Rq = p("Xt");
v.Od = Na("Xt");
v.addEventListener = function(a, b, c, d) {
  K(this, a, b, c, d)
};
v.removeEventListener = function(a, b, c, d) {
  Vc(this, a, b, c, d)
};
v.P = function(a) {
  var b, c = this.Rq();
  if (c)
    for (b = []; c; c = c.Rq()) b.push(c);
  var c = this.WK,
    d = a.type || a;
  if (Za(a)) a = new J(a, c);
  else if (a instanceof J) a.target = a.target || c;
  else {
    var e = a;
    a = new J(d, c);
    fc(a, e)
  }
  var e = !0,
    f;
  if (b)
    for (var h = b.length - 1; !a.C && 0 <= h; h--) f = a.A = b[h], e = ad(f, d, !0, a) && e;
  a.C || (f = a.A = c, e = ad(f, d, !0, a) && e, a.C || (e = ad(f, d, !1, a) && e));
  if (b)
    for (h = 0; !a.C && h < b.length; h++) f = a.A = b[h], e = ad(f, d, !1, a) && e;
  return e
};
v.M = function() {
  M.J.M.call(this);
  this.Ud && Lc(this.Ud);
  this.Xt = null
};

function ad(a, b, c, d) {
  b = a.Ud.b[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.og && h.Xp == c) {
      var k = h.Re,
        m = h.Wc || h.src;
      h.Wp && Kc(a.Ud, h);
      e = !1 !== k.call(m, d) && e
    }
  }
  return e && 0 != d.bI
};
var bd;

function cd(a) {
  return function() {
    return a
  }
}
var dd = cd(!1),
  ed = cd(!0);

function fd(a) {
  Sa.setTimeout(function() {
    throw a;
  }, 0)
}
var gd;

function cba() {
  var a = Sa.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !lc("Presto") && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = g;
    document.documentElement.appendChild(a);
    var b = a.contentWindow,
      a = b.document;
    a.open();
    a.write(g);
    a.close();
    var c = "callImmediate" + Math.random(),
      d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
      a = A(function(a) {
        if (("*" == d || a.origin == d) && a.data ==
          c) this.port1.onmessage()
      }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {
      postMessage: function() {
        b.postMessage(c, d)
      }
    }
  });
  if ("undefined" !== typeof a && !lc("Trident") && !lc("MSIE")) {
    var b = new a,
      c = {},
      d = c;
    b.port1.onmessage = function() {
      if (x(c.next)) {
        c = c.next;
        var a = c.sA;
        c.sA = null;
        a()
      }
    };
    return function(a) {
      d.next = {
        sA: a
      };
      d = d.next;
      b.port2.postMessage(0)
    }
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null
    };
    document.documentElement.appendChild(b)
  } : function(a) {
    Sa.setTimeout(a, 0)
  }
};

function hd(a, b) {
  id || dba();
  jd || (id(), jd = !0);
  kd.push(new eba(a, b))
}
var id;

function dba() {
  if (Sa.Promise && Sa.Promise.resolve) {
    var a = Sa.Promise.resolve();
    id = function() {
      a.then(ld)
    }
  } else id = function() {
    var a = ld;
    !bb(Sa.setImmediate) || Sa.Window && Sa.Window.prototype && Sa.Window.prototype.setImmediate == Sa.setImmediate ? (gd || (gd = cba()), gd(a)) : Sa.setImmediate(a)
  }
}
var jd = !1,
  kd = [];

function ld() {
  for (; kd.length;) {
    var a = kd;
    kd = [];
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      try {
        c.b.call(c.scope)
      } catch (d) {
        fd(d)
      }
    }
  }
  jd = !1
}

function eba(a, b) {
  this.b = a;
  this.scope = b
};

function md(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0
}

function nd(a) {
  if (!a) return !1;
  try {
    return !!a.$goog_Thenable
  } catch (b) {
    return !1
  }
};

function od(a, b) {
  this.o = 0;
  this.C = void 0;
  this.b = this.A = null;
  this.B = this.D = !1;
  if (a == fba) pd(this, 2, b);
  else try {
    var c = this;
    a.call(b, function(a) {
      pd(c, 2, a)
    }, function(a) {
      pd(c, 3, a)
    })
  } catch (d) {
    pd(this, 3, d)
  }
}

function fba() {}
od.prototype.then = function(a, b, c) {
  return gba(this, bb(a) ? a : null, bb(b) ? b : null, c)
};
md(od);
od.prototype.cancel = function(a) {
  0 == this.o && hd(function() {
    var b = new qd(a);
    rd(this, b)
  }, this)
};

function rd(a, b) {
  if (0 == a.o)
    if (a.A) {
      var c = a.A;
      if (c.b) {
        for (var d = 0, e = -1, f = 0, h; h = c.b[f]; f++)
          if (h = h.Cf)
            if (d++, h == a && (e = f), 0 <= e && 1 < d) break;
        0 <= e && (0 == c.o && 1 == d ? rd(c, b) : (d = c.b.splice(e, 1)[0], sd(c, d, 3, b)))
      }
      a.A = null
    } else pd(a, 3, b)
}

function hba(a, b) {
  a.b && a.b.length || 2 != a.o && 3 != a.o || td(a);
  a.b || (a.b = []);
  a.b.push(b)
}

function gba(a, b, c, d) {
  var e = {
    Cf: null,
    bH: null,
    kH: null
  };
  e.Cf = new od(function(a, h) {
    e.bH = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e)
      } catch (n) {
        h(n)
      }
    } : a;
    e.kH = c ? function(b) {
      try {
        var e = c.call(d, b);
        !x(e) && b instanceof qd ? h(b) : a(e)
      } catch (n) {
        h(n)
      }
    } : h
  });
  e.Cf.A = a;
  hba(a, e);
  return e.Cf
}
od.prototype.F = function(a) {
  this.o = 0;
  pd(this, 2, a)
};
od.prototype.G = function(a) {
  this.o = 0;
  pd(this, 3, a)
};

function pd(a, b, c) {
  if (0 == a.o) {
    if (a == c) b = 3, c = new TypeError("Promise cannot resolve to itself");
    else {
      if (nd(c)) {
        a.o = 1;
        c.then(a.F, a.G, a);
        return
      }
      if (db(c)) try {
        var d = c.then;
        if (bb(d)) {
          iba(a, c, d);
          return
        }
      } catch (e) {
        b = 3, c = e
      }
    }
    a.C = c;
    a.o = b;
    a.A = null;
    td(a);
    3 != b || c instanceof qd || jba(a, c)
  }
}

function iba(a, b, c) {
  function d(b) {
    f || (f = !0, a.G(b))
  }

  function e(b) {
    f || (f = !0, a.F(b))
  }
  a.o = 1;
  var f = !1;
  try {
    c.call(b, e, d)
  } catch (h) {
    d(h)
  }
}

function td(a) {
  a.D || (a.D = !0, hd(a.K, a))
}
od.prototype.K = function() {
  for (; this.b && this.b.length;) {
    var a = this.b;
    this.b = null;
    for (var b = 0; b < a.length; b++) sd(this, a[b], this.o, this.C)
  }
  this.D = !1
};

function sd(a, b, c, d) {
  b.Cf && (b.Cf.A = null);
  if (2 == c) b.bH(d);
  else {
    if (b.Cf)
      for (; a && a.B; a = a.A) a.B = !1;
    b.kH(d)
  }
}

function jba(a, b) {
  a.B = !0;
  hd(function() {
    a.B && kba.call(null, b)
  })
}
var kba = fd;

function qd(a) {
  jb.call(this, a)
}
C(qd, jb);
qd.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ud(a, b) {
  this.F = [];
  this.wa = a;
  this.X = b || null;
  this.D = this.o = !1;
  this.B = void 0;
  this.Z = this.Ba = this.K = !1;
  this.G = 0;
  this.A = null;
  this.C = 0
}
v = ud.prototype;
v.cancel = function(a) {
  if (this.o) this.B instanceof ud && this.B.cancel();
  else {
    if (this.A) {
      var b = this.A;
      delete this.A;
      a ? b.cancel(a) : (b.C--, 0 >= b.C && b.cancel())
    }
    this.wa ? this.wa.call(this.X, this) : this.Z = !0;
    this.o || this.Ui(new vd)
  }
};
v.OA = function(a, b) {
  this.K = !1;
  wd(this, a, b)
};

function wd(a, b, c) {
  a.o = !0;
  a.B = c;
  a.D = !b;
  xd(a)
}

function yd(a) {
  if (a.o) {
    if (!a.Z) throw new zd;
    a.Z = !1
  }
}
v.callback = function(a) {
  yd(this);
  wd(this, !0, a)
};
v.Ui = function(a) {
  yd(this);
  wd(this, !1, a)
};

function Ad(a, b, c) {
  Bd(a, b, null, c)
}

function Bd(a, b, c, d) {
  a.F.push([b, c, d]);
  a.o && xd(a)
}
v.then = function(a, b, c) {
  var d, e, f = new od(function(a, b) {
    d = a;
    e = b
  });
  Bd(this, d, function(a) {
    a instanceof vd ? f.cancel() : e(a)
  });
  return f.then(a, b, c)
};
md(ud);
ud.prototype.O = Pa(3);

function Cd(a) {
  return Eb(a.F, function(a) {
    return bb(a[1])
  })
}

function xd(a) {
  if (a.G && a.o && Cd(a)) {
    var b = a.G,
      c = Dd[b];
    c && (Sa.clearTimeout(c.Uq), delete Dd[b]);
    a.G = 0
  }
  a.A && (a.A.C--, delete a.A);
  for (var b = a.B, d = c = !1; a.F.length && !a.K;) {
    var e = a.F.shift(),
      f = e[0],
      h = e[1],
      e = e[2];
    if (f = a.D ? h : f) try {
      var k = f.call(e || a.X, b);
      x(k) && (a.D = a.D && (k == b || k instanceof Error), a.B = b = k);
      nd(b) && (d = !0, a.K = !0)
    } catch (m) {
      b = m, a.D = !0, Cd(a) || (c = !0)
    }
  }
  a.B = b;
  d && (k = A(a.OA, a, !0), d = A(a.OA, a, !1), b instanceof ud ? (Bd(b, k, d), b.Ba = !0) : b.then(k, d));
  c && (b = new Ed(b), Dd[b.Uq] = b, a.G = b.Uq)
}

function zd() {
  jb.call(this)
}
C(zd, jb);
zd.prototype.message = "Deferred has already fired";
zd.prototype.name = "AlreadyCalledError";

function vd() {
  jb.call(this)
}
C(vd, jb);
vd.prototype.message = "Deferred was canceled";
vd.prototype.name = "CanceledError";

function Ed(a) {
  this.Uq = Sa.setTimeout(A(this.o, this), 0);
  this.b = a
}
Ed.prototype.o = function() {
  delete Dd[this.Uq];
  throw this.b;
};
var Dd = {};

function Fd() {
  H.call(this);
  this.o = {};
  this.A = {};
  this.D = {};
  this.B = []
}
C(Fd, H);

function Gd(a, b) {
  var c = a.o[b];
  !c && b in a.A && (c = Hd(a, b));
  return c
}

function Id(a, b) {
  var c = new ud;
  if (a.o[b]) c.callback(a.o[b]);
  else {
    var d = a.D[b];
    d ? Jd(a.F, d, A(a.C, a, b, c)) : a.C(b, c)
  }
  return c
}
Fd.prototype.C = function(a, b) {
  var c = this.o[a] || Hd(this, a);
  b.callback(c)
};

function Hd(a, b) {
  var c = (0, a.A[b])(a);
  a.o[b] = c;
  a.B.push(c);
  delete a.A[b];
  return c
}

function Kd(a, b) {
  return !!(b in a.o || b in a.A)
}
Fd.prototype.b = function(a, b, c) {
  this.o[a] = b;
  c || this.B.push(b)
};
Fd.prototype.M = function() {
  Fd.J.M.call(this);
  for (var a = 0; a < this.B.length; ++a) I(this.B[a]);
  this.B = [];
  this.o = {};
  this.A = {};
  this.D = {}
};

function lba(a) {
  var b = mba,
    c;
  for (c in b) {
    var d = Number(c);
    a.D[d] = b[d]
  }
};

function Ld(a, b, c, d) {
  M.call(this);
  this.rb = a;
  this.B = b;
  this.G = d || g;
  this.b = !1;
  this.D = "1";
  this.A = !1;
  this.C = c ? Ob(c) : null
}
C(Ld, M);
v = Ld.prototype;
v.kB = 60;
v.uI = !1;
v.rF = !1;
v.oF = !1;
v.getName = p("rb");
v.getTitle = p("G");
var Md;

function nba(a, b) {
  Md = new Nd(a);
  b && b.b(4, Md);
  return Md
}

function Od(a) {
  return Md.isEnabled(a)
}

function Nd(a) {
  this.b = a
}
Nd.prototype.isEnabled = function(a) {
  return !!this.b[a]
};

function Qd(a) {
  return Gd(a, 4)
};
var oba = RegExp("[\\\\'\r\n\b\"<>&\u0085\u2028\u2029]", "g"),
  Rd;
Rd = "".localeCompare ? function(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase())
} : function(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b ? -1 : a === b ? 0 : 1
};
var Sd = hb();

function N(a) {
  H.call(this);
  this.ra = a;
  this.C = {}
}
C(N, H);
var Td = [];
N.prototype.I = function(a, b, c, d) {
  return Ud(this, a, b, c, d)
};

function Ud(a, b, c, d, e, f) {
  Xa(c) || (c && (Td[0] = c.toString()), c = Td);
  for (var h = 0; h < c.length; h++) {
    var k = K(b, c[h], d || a.handleEvent, e || !1, f || a.ra || a);
    if (!k) break;
    a.C[k.key] = k
  }
  return a
}
N.prototype.b = function(a, b, c, d, e) {
  if (Xa(b))
    for (var f = 0; f < b.length; f++) this.b(a, b[f], c, d, e);
  else if (a = Xc(a, b, c || this.handleEvent, d, e || this.ra || this)) Wc(a), delete this.C[a.key];
  return this
};

function Vd(a) {
  Vb(a.C, Wc);
  a.C = {}
}
N.prototype.M = function() {
  N.J.M.call(this);
  Vd(this)
};
N.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};

function Wd(a, b, c) {
  return Math.min(Math.max(a, b), c)
}

function Xd(a, b, c) {
  return a + c * (b - a)
};
var Yd = "StopIteration" in Sa ? Sa.StopIteration : Error("StopIteration");

function Zd() {}
Zd.prototype.next = function() {
  throw Yd;
};
Zd.prototype.Lc = function() {
  return this
};

function $d(a) {
  if (a instanceof Zd) return a;
  if (typeof a.Lc == Ea) return a.Lc(!1);
  if (Ya(a)) {
    var b = 0,
      c = new Zd;
    c.next = function() {
      for (;;) {
        if (b >= a.length) throw Yd;
        if (b in a) return a[b++];
        b++
      }
    };
    return c
  }
  throw Error("Not implemented");
};

function ae(a, b) {
  this.o = {};
  this.b = [];
  this.B = this.A = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
  } else a && be(this, a)
}
v = ae.prototype;
v.qb = p("A");
v.pb = function() {
  ce(this);
  for (var a = [], b = 0; b < this.b.length; b++) a.push(this.o[this.b[b]]);
  return a
};
v.wb = function() {
  ce(this);
  return this.b.concat()
};

function de(a, b) {
  return ee(a.o, b)
}
v.zh = function(a) {
  for (var b = 0; b < this.b.length; b++) {
    var c = this.b[b];
    if (ee(this.o, c) && this.o[c] == a) return !0
  }
  return !1
};
v.equals = function(a, b) {
  if (this === a) return !0;
  if (this.A != a.qb()) return !1;
  var c = b || pba;
  ce(this);
  for (var d, e = 0; d = this.b[e]; e++)
    if (!c(this.get(d), a.get(d))) return !1;
  return !0
};

function pba(a, b) {
  return a === b
}
v.isEmpty = function() {
  return 0 == this.A
};
v.clear = function() {
  this.o = {};
  this.B = this.A = this.b.length = 0
};
v.remove = function(a) {
  return ee(this.o, a) ? (delete this.o[a], this.A--, this.B++, this.b.length > 2 * this.A && ce(this), !0) : !1
};

function ce(a) {
  if (a.A != a.b.length) {
    for (var b = 0, c = 0; b < a.b.length;) {
      var d = a.b[b];
      ee(a.o, d) && (a.b[c++] = d);
      b++
    }
    a.b.length = c
  }
  if (a.A != a.b.length) {
    for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], ee(e, d) || (a.b[c++] = d, e[d] = 1), b++;
    a.b.length = c
  }
}
v.get = function(a, b) {
  return ee(this.o, a) ? this.o[a] : b
};
v.set = function(a, b) {
  ee(this.o, a) || (this.A++, this.b.push(a), this.B++);
  this.o[a] = b
};

function be(a, b) {
  var c, d;
  b instanceof ae ? (c = b.wb(), d = b.pb()) : (c = Zb(b), d = Yb(b));
  for (var e = 0; e < c.length; e++) a.set(c[e], d[e])
}
v.forEach = function(a, b) {
  for (var c = this.wb(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this)
  }
};
v.clone = function() {
  return new ae(this)
};
v.Lc = function(a) {
  ce(this);
  var b = 0,
    c = this.b,
    d = this.o,
    e = this.B,
    f = this,
    h = new Zd;
  h.next = function() {
    for (;;) {
      if (e != f.B) throw Error("The map has changed since the iterator was created");
      if (b >= c.length) throw Yd;
      var h = c[b++];
      return a ? h : d[h]
    }
  };
  return h
};

function ee(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};

function fe(a) {
  return eval("(" + a + ")")
}
var qba = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
var rba = hc("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var ge = RegExp("[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
  sba = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
  he = RegExp("^[^\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
  ie = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
  tba = /^http:\/\/.*/,
  je = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g,
  uba = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;

function vba(a) {
  return ge.test(a) ? a.replace(je, "<span dir=rtl>$&</span>") : a.replace(je, "<span dir=ltr>$&</span>")
}
var wba = /\s+/,
  xba = /\d/;

function ke(a) {
  var b = 0,
    c = 0,
    d = !1;
  a = a.split(wba);
  for (var e = 0; e < a.length; e++) {
    var f = a[e];
    ie.test(f) ? (b++, c++) : tba.test(f) ? d = !0 : sba.test(f) ? c++ : xba.test(f) && (d = !0)
  }
  return -1 == (0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1)
};

function le() {
  this.b = g;
  this.o = me
}
le.prototype.Cl = !0;
var me = {};
le.prototype.Sh = Pa(5);

function ne(a) {
  var b = new le;
  b.b = a;
  return b
}
var yba = ne(g);

function oe() {
  this.b = g;
  this.A = pe;
  this.o = null
}
oe.prototype.Vw = !0;
oe.prototype.Nh = Pa(6);
oe.prototype.Cl = !0;
oe.prototype.Sh = Pa(4);
var zba = hc("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"),
  Aba = hc("embed", "iframe", "link", Ha, "script", "style", "template"),
  pe = {};

function qe(a, b) {
  var c = new oe;
  c.b = a;
  c.o = b;
  return c
}
var re = qe(g, 0);

function se(a) {
  return typeof a.qb == Ea ? a.qb() : Ya(a) || Za(a) ? a.length : Xb(a)
}

function te(a) {
  if (typeof a.pb == Ea) return a.pb();
  if (Za(a)) return a.split(g);
  if (Ya(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b
  }
  return Yb(a)
}

function ue(a) {
  if (typeof a.wb == Ea) return a.wb();
  if (typeof a.pb != Ea) {
    if (Ya(a) || Za(a)) {
      var b = [];
      a = a.length;
      for (var c = 0; c < a; c++) b.push(c);
      return b
    }
    return Zb(a)
  }
}

function ve(a, b) {
  if (typeof a.forEach == Ea) a.forEach(b, void 0);
  else if (Ya(a) || Za(a)) F(a, b, void 0);
  else
    for (var c = ue(a), d = te(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
}

function we(a, b, c) {
  if (typeof a.every == Ea) return a.every(b, c);
  if (Ya(a) || Za(a)) return Fb(a, b, c);
  for (var d = ue(a), e = te(a), f = e.length, h = 0; h < f; h++)
    if (!b.call(c, e[h], d && d[h], a)) return !1;
  return !0
};

function xe(a) {
  this.b = new ae;
  if (a) {
    a = te(a);
    for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
  }
}

function ye(a) {
  var b = typeof a;
  return b == Ha && a || b == Ea ? "o" + eb(a) : b.substr(0, 1) + a
}
v = xe.prototype;
v.qb = function() {
  return this.b.qb()
};
v.add = function(a) {
  this.b.set(ye(a), a)
};
v.remove = function(a) {
  return this.b.remove(ye(a))
};
v.clear = function() {
  this.b.clear()
};
v.isEmpty = function() {
  return this.b.isEmpty()
};
v.contains = function(a) {
  return de(this.b, ye(a))
};
v.pb = function() {
  return this.b.pb()
};
v.clone = function() {
  return new xe(this)
};
v.equals = function(a) {
  return this.qb() == se(a) && Bba(this, a)
};

function Bba(a, b) {
  var c = se(b);
  if (a.qb() > c) return !1;
  !(b instanceof xe) && 5 < c && (b = new xe(b));
  return we(a, function(a) {
    var c = b;
    return typeof c.contains == Ea ? c.contains(a) : typeof c.zh == Ea ? c.zh(a) : Ya(c) || Za(c) ? Ib(c, a) : $b(c, a)
  })
}
v.Lc = function() {
  return this.b.Lc(!1)
};

function ze(a, b) {
  M.call(this);
  this.o = a || 1;
  this.b = b || Sa;
  this.A = A(this.n2, this);
  this.B = hb()
}
C(ze, M);
v = ze.prototype;
v.enabled = !1;
v.Oa = null;
v.setInterval = function(a) {
  this.o = a;
  this.Oa && this.enabled ? (this.stop(), this.start()) : this.Oa && this.stop()
};
v.n2 = function() {
  if (this.enabled) {
    var a = hb() - this.B;
    0 < a && a < .8 * this.o ? this.Oa = this.b.setTimeout(this.A, this.o - a) : (this.Oa && (this.b.clearTimeout(this.Oa), this.Oa = null), this.P("tick"), this.enabled && (this.Oa = this.b.setTimeout(this.A, this.o), this.B = hb()))
  }
};
v.start = function() {
  this.enabled = !0;
  this.Oa || (this.Oa = this.b.setTimeout(this.A, this.o), this.B = hb())
};
v.stop = function() {
  this.enabled = !1;
  this.Oa && (this.b.clearTimeout(this.Oa), this.Oa = null)
};
v.M = function() {
  ze.J.M.call(this);
  this.stop();
  delete this.b
};

function Ae(a, b, c) {
  if (bb(a)) c && (a = A(a, c));
  else if (a && typeof a.handleEvent == Ea) a = A(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < b ? -1 : Sa.setTimeout(a, b || 0)
}

function Be(a) {
  Sa.clearTimeout(a)
};
var Cba = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

function Ce(a) {
  if (De) {
    De = !1;
    var b = Sa.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Ce(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) throw De = !0, Error();
    }
  }
  return a.match(Cba)
}
var De = rc;

function Dba(a, b) {
  for (var c = a.split("&"), d = 0; d < c.length; d++) {
    var e = c[d].indexOf("="),
      f = null,
      h = null;
    0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
    b(f, h ? rb(h) : g)
  }
}

function Fe(a) {
  if (a[1]) {
    var b = a[0],
      c = b.indexOf("#");
    0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
    c = b.indexOf("?");
    0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
  }
  return a.join(g)
}

function Ge(a, b, c) {
  if (Xa(b))
    for (var d = 0; d < b.length; d++) Ge(a, String(b[d]), c);
  else null != b && c.push("&", a, b === g ? g : "=", qb(b))
}

function He(a, b, c) {
  for (c = c || 0; c < b.length; c += 2) Ge(b[c], b[c + 1], a);
  return a
}

function Ie(a) {
  a = He([], a, void 0);
  a[0] = g;
  return a.join(g)
};

function Je() {}
Je.prototype.b = null;

function Ke(a) {
  var b;
  (b = a.b) || (b = {}, Le(a) && (b[0] = !0, b[1] = !0), b = a.b = b);
  return b
};
var Me;

function Ne() {}
C(Ne, Je);

function Oe(a) {
  return (a = Le(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}

function Le(a) {
  if (!a.o && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.o = d
      } catch (e) {}
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.o
}
Me = new Ne;

function Pe(a) {
  M.call(this);
  this.headers = new ae;
  this.Z = a || null;
  this.o = !1;
  this.V = this.b = null;
  this.C = g;
  this.B = 0;
  this.A = this.X = this.K = this.O = !1;
  this.D = 0;
  this.G = null;
  this.F = g;
  this.Y = this.Ka = !1
}
C(Pe, M);
var Eba = /^https?$/i,
  Fba = ["POST", "PUT"];
v = Pe.prototype;
v.xA = Pa(7);
v.hD = p("F");
v.send = function(a, b, c, d) {
  if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.C + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.C = a;
  this.B = 0;
  this.O = !1;
  this.o = !0;
  this.b = this.Z ? Oe(this.Z) : Oe(Me);
  this.V = this.Z ? Ke(this.Z) : Ke(Me);
  this.b.onreadystatechange = A(this.jH, this);
  try {
    this.X = !0, this.b.open(b, String(a), !0), this.X = !1
  } catch (e) {
    Qe(this);
    return
  }
  a = c || g;
  var f = this.headers.clone();
  d && ve(d, function(a, b) {
    f.set(b, a)
  });
  d = Gb(f.wb(), Gba);
  c = Sa.FormData && a instanceof Sa.FormData;
  !Ib(Fba,
    b) || d || c || f.set(ga, "application/x-www-form-urlencoded;charset=utf-8");
  f.forEach(function(a, b) {
    this.b.setRequestHeader(b, a)
  }, this);
  this.F && (this.b.responseType = this.F);
  "withCredentials" in this.b && (this.b.withCredentials = this.Ka);
  try {
    Re(this), 0 < this.D && ((this.Y = Hba(this.b)) ? (this.b.timeout = this.D, this.b.ontimeout = A(this.ep, this)) : this.G = Ae(this.ep, this.D, this)), this.K = !0, this.b.send(a), this.K = !1
  } catch (h) {
    Qe(this)
  }
};

function Hba(a) {
  return G && zc(9) && ab(a.timeout) && x(a.ontimeout)
}

function Gba(a) {
  return "content-type" == a.toLowerCase()
}
v.ep = function() {
  "undefined" != typeof Ra && this.b && (this.B = 8, this.P("timeout"), this.abort(8))
};

function Qe(a) {
  a.o = !1;
  a.b && (a.A = !0, a.b.abort(), a.A = !1);
  a.B = 5;
  Se(a);
  Te(a)
}

function Se(a) {
  a.O || (a.O = !0, a.P(va), a.P("error"))
}
v.abort = function(a) {
  this.b && this.o && (this.o = !1, this.A = !0, this.b.abort(), this.A = !1, this.B = a || 7, this.P(va), this.P("abort"), Te(this))
};
v.M = function() {
  this.b && (this.o && (this.o = !1, this.A = !0, this.b.abort(), this.A = !1), Te(this, !0));
  Pe.J.M.call(this)
};
v.jH = function() {
  this.isDisposed() || (this.X || this.K || this.A ? Ue(this) : this.T_())
};
v.T_ = function() {
  Ue(this)
};

function Ue(a) {
  if (a.o && "undefined" != typeof Ra && (!a.V[1] || 4 != (a.b ? a.b.readyState : 0) || 2 != a.getStatus()))
    if (a.K && 4 == (a.b ? a.b.readyState : 0)) Ae(a.jH, 0, a);
    else if (a.P("readystatechange"), a.dc()) {
    a.o = !1;
    try {
      a.Yc() ? (a.P(va), a.P("success")) : (a.B = 6, a.getStatus(), Se(a))
    } finally {
      Te(a)
    }
  }
}

function Te(a, b) {
  if (a.b) {
    Re(a);
    var c = a.b,
      d = a.V[0] ? z : null;
    a.b = null;
    a.V = null;
    b || a.P("ready");
    try {
      c.onreadystatechange = d
    } catch (e) {}
  }
}

function Re(a) {
  a.b && a.Y && (a.b.ontimeout = null);
  ab(a.G) && (Be(a.G), a.G = null)
}
v.xc = function() {
  return !!this.b
};
v.dc = function() {
  return 4 == (this.b ? this.b.readyState : 0)
};
v.Yc = function() {
  var a = this.getStatus(),
    b;
  t: switch (a) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      b = !0;
      break t;
    default:
      b = !1
  }
  if (!b) {
    if (a = 0 === a) a = Ce(String(this.C))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), a = !Eba.test(a ? a.toLowerCase() : g);
    b = a
  }
  return b
};
v.getStatus = function() {
  try {
    return 2 < (this.b ? this.b.readyState : 0) ? this.b.status : -1
  } catch (a) {
    return -1
  }
};
v.oj = function() {
  try {
    return this.b ? this.b.responseText : g
  } catch (a) {
    return g
  }
};
v.bl = Pa(8);

function We(a, b) {
  return a.b && a.dc() ? a.b.getResponseHeader(b) : void 0
}
v.Oq = p("B");

function Xe() {
  this.b = [];
  this.o = []
}

function Ye(a) {
  Jb(a.b) && (a.b = a.o, a.b.reverse(), a.o = []);
  return a.b.pop()
}
v = Xe.prototype;
v.qb = function() {
  return this.b.length + this.o.length
};
v.isEmpty = function() {
  return Jb(this.b) && Jb(this.o)
};
v.clear = function() {
  this.b = [];
  this.o = []
};
v.contains = function(a) {
  return Ib(this.b, a) || Ib(this.o, a)
};
v.remove = function(a) {
  var b = maa(this.b, a);
  if (0 > b) return Lb(this.o, a);
  Mb(this.b, b);
  return !0
};
v.pb = function() {
  for (var a = [], b = this.b.length - 1; 0 <= b; --b) a.push(this.b[b]);
  for (var c = this.o.length, b = 0; b < c; ++b) a.push(this.o[b]);
  return a
};

function Ze(a, b) {
  H.call(this);
  this.F = a || 0;
  this.A = b || 10;
  if (this.F > this.A) throw Error("[goog.structs.Pool] Min can not be greater than max");
  this.b = new Xe;
  this.o = new xe;
  this.$m = 0;
  this.D = null;
  this.Lp()
}
C(Ze, H);
v = Ze.prototype;
v.Yq = function() {
  var a = hb();
  if (!(null != this.D && a - this.D < this.$m)) {
    for (var b; 0 < this.b.qb() && (b = Ye(this.b), !this.Ex(b));) this.Lp();
    !b && this.qb() < this.A && (b = this.Yv());
    b && (this.D = a, this.o.add(b));
    return b
  }
};
v.Lm = function(a) {
  this.o.remove(a);
  this.Ex(a) && this.qb() < this.A ? this.b.o.push(a) : $e(a)
};
v.Lp = function() {
  for (var a = this.b; this.qb() < this.F;) {
    var b = this.Yv();
    a.o.push(b)
  }
  for (; this.qb() > this.A && 0 < this.b.qb();) $e(Ye(a))
};
v.Yv = function() {
  return {}
};

function $e(a) {
  if (typeof a.ea == Ea) a.ea();
  else
    for (var b in a) a[b] = null
}
v.Ex = function(a) {
  return typeof a.xM == Ea ? a.xM() : !0
};
v.contains = function(a) {
  return this.b.contains(a) || this.o.contains(a)
};
v.qb = function() {
  return this.b.qb() + this.o.qb()
};
v.isEmpty = function() {
  return this.b.isEmpty() && this.o.isEmpty()
};
v.M = function() {
  Ze.J.M.call(this);
  if (0 < this.o.qb()) throw Error("[goog.structs.Pool] Objects not released");
  delete this.o;
  for (var a = this.b; !a.isEmpty();) $e(Ye(a));
  delete this.b
};

function af(a, b) {
  this.b = a;
  this.o = b
}
af.prototype.getKey = p("b");
af.prototype.Ea = p("o");
af.prototype.clone = function() {
  return new af(this.b, this.o)
};

function bf(a) {
  this.b = [];
  if (a) t: {
    var b, c;
    if (a instanceof bf) {
      if (b = a.wb(), c = a.pb(), 0 >= a.qb()) {
        a = this.b;
        for (var d = 0; d < b.length; d++) a.push(new af(b[d], c[d]));
        break t
      }
    } else b = Zb(a), c = Yb(a);
    for (d = 0; d < b.length; d++) this.insert(b[d], c[d])
  }
}
v = bf.prototype;
v.insert = function(a, b) {
  var c = this.b;
  c.push(new af(a, b));
  for (var c = c.length - 1, d = this.b, e = d[c]; 0 < c;) {
    var f = c - 1 >> 1;
    if (d[f].getKey() > e.getKey()) d[c] = d[f], c = f;
    else break
  }
  d[c] = e
};
v.remove = function() {
  var a = this.b,
    b = a.length,
    c = a[0];
  if (!(0 >= b)) {
    if (1 == b) Kb(a);
    else {
      a[0] = a.pop();
      for (var a = 0, b = this.b, d = b.length, e = b[a]; a < d >> 1;) {
        var f = 2 * a + 1,
          h = 2 * a + 2,
          f = h < d && b[h].getKey() < b[f].getKey() ? h : f;
        if (b[f].getKey() > e.getKey()) break;
        b[a] = b[f];
        a = f
      }
      b[a] = e
    }
    return c.Ea()
  }
};
v.pb = function() {
  for (var a = this.b, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].Ea());
  return b
};
v.wb = function() {
  for (var a = this.b, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getKey());
  return b
};
v.zh = function(a) {
  return Eb(this.b, function(b) {
    return b.Ea() == a
  })
};
v.clone = function() {
  return new bf(this)
};
v.qb = function() {
  return this.b.length
};
v.isEmpty = function() {
  return Jb(this.b)
};
v.clear = function() {
  Kb(this.b)
};

function cf() {
  bf.call(this)
}
C(cf, bf);

function df(a, b) {
  this.C = void 0;
  this.B = new cf;
  Ze.call(this, a, b)
}
C(df, Ze);
v = df.prototype;
v.Yq = function(a, b) {
  if (!a) {
    var c = df.J.Yq.call(this);
    c && this.$m && (this.C = Sa.setTimeout(A(this.Er, this), this.$m));
    return c
  }
  this.B.insert(x(b) ? b : 100, a);
  this.Er()
};
v.Er = function() {
  for (var a = this.B; 0 < a.qb();) {
    var b = this.Yq();
    if (b) a.remove().apply(this, [b]);
    else break
  }
};
v.Lm = function(a) {
  df.J.Lm.call(this, a);
  this.Er()
};
v.Lp = function() {
  df.J.Lp.call(this);
  this.Er()
};
v.M = function() {
  df.J.M.call(this);
  Sa.clearTimeout(this.C);
  this.B.clear();
  this.B = null
};

function ef(a, b, c) {
  df.call(this, b, c);
  this.G = a
}
C(ef, df);
ef.prototype.Yv = function() {
  var a = new Pe,
    b = this.G;
  b && b.forEach(function(b, d) {
    a.headers.set(d, b)
  });
  return a
};
ef.prototype.Ex = function(a) {
  return !a.isDisposed() && !a.xc()
};

function ff(a, b, c, d, e) {
  M.call(this);
  this.D = x(a) ? a : 1;
  this.B = x(e) ? Math.max(0, e) : 0;
  this.A = new ef(b, c, d);
  this.o = new ae;
  this.b = new N(this)
}
C(ff, M);
var gf = ["ready", va, "success", "error", "abort", "timeout"];
v = ff.prototype;
v.send = function(a, b, c, d, e, f, h, k, m) {
  if (this.o.get(a)) throw Error("[goog.net.XhrManager] ID in use");
  b = new hf(b, A(this.oS, this, a), c, d, e, h, x(k) ? k : this.D, m);
  this.o.set(a, b);
  a = A(this.rT, this, a);
  this.A.Yq(a, f);
  return b
};
v.abort = function(a, b) {
  var c = this.o.get(a);
  if (c) {
    var d = c.ym;
    c.Mz = !0;
    b && (d && (this.b.b(d, gf, c.Wy), Uc(d, "ready", function() {
      var a = this.A;
      a.o.remove(d) && a.Lm(d)
    }, !1, this)), this.o.remove(a));
    d && d.abort()
  }
};
v.rT = function(a, b) {
  var c = this.o.get(a);
  c && !c.ym ? (this.b.I(b, gf, c.Wy), b.D = Math.max(0, this.B), b.F = c.hD(), c.ym = b, this.P(new jf("ready", this, a, b)), kf(this, a, b), c.Mz && b.abort()) : (c = this.A, c.o.remove(b) && c.Lm(b))
};
v.oS = function(a, b) {
  var c = b.target;
  switch (b.type) {
    case "ready":
      kf(this, a, c);
      break;
    case va:
      t: {
        var d = this.o.get(a);
        if (7 == c.Oq() || c.Yc() || d.Tp > d.Xv)
          if (this.P(new jf(va, this, a, c)), d && (d.am(!0), d.EA)) {
            c = d.EA.call(c, b);
            break t
          }
        c = null
      }
      return c;
    case "success":
      this.P(new jf("success", this, a, c));
      break;
    case "timeout":
    case "error":
      d = this.o.get(a);
      d.Tp > d.Xv && this.P(new jf("error", this, a, c));
      break;
    case "abort":
      this.P(new jf("abort", this, a, c))
  }
  return null
};

function kf(a, b, c) {
  var d = a.o.get(b);
  !d || d.FA || d.Tp > d.Xv ? (d && (a.b.b(c, gf, d.Wy), a.o.remove(b)), a = a.A, a.o.remove(c) && a.Lm(c)) : (d.Tp++, c.send(d.getUrl(), d.Fb(), d.getContent(), d.qD))
}
v.M = function() {
  ff.J.M.call(this);
  this.A.ea();
  this.A = null;
  this.b.ea();
  this.b = null;
  this.o.clear();
  this.o = null
};

function jf(a, b, c, d) {
  J.call(this, a, b);
  this.id = c;
  this.ym = d
}
C(jf, J);

function hf(a, b, c, d, e, f, h, k) {
  this.B = a;
  this.o = c || "GET";
  this.b = d;
  this.qD = e || null;
  this.Xv = x(h) ? h : 1;
  this.Tp = 0;
  this.Mz = this.FA = !1;
  this.Wy = b;
  this.EA = f;
  this.A = k || g;
  this.ym = null
}
v = hf.prototype;
v.getUrl = p("B");
v.Fb = p("o");
v.getContent = p("b");
v.am = Na("FA");
v.hD = p("A");

function lf() {}
Va(lf);
lf.prototype.b = 0;

function mf(a) {
  return ":" + (a.b++).toString(36)
};
z.get = function(a) {
  return Gd(a, 17)
};
var _dbmode = !1,
  Iba = {
    fastui: ["FASTUI"],
    vr: ["VR"]
  };
var Jba = /\s*;\s*/;

function nf(a) {
  t: {
    for (var b = document.cookie.split(Jba), c = a.length, d = 0, e = b.length; d < e; ++d) {
      var f = b[d];
      if (!(f.length <= c || "=" != f.charAt(c)) && f.substring(0, c) === a) {
        a = f.substring(c + 1);
        break t
      }
    }
    a = null
  }
  return a && unescape(a)
}
var of = /([\u200e\u200f]*)<\/?\w[^>]*>\1/g;

function pf(a) {
  qf(a, "CALERR");
  qf(a, "CALERR2")
}

function qf(a, b) {
  for (var c = nf(b) || g, c = 0 == c.length ? [] : c.split("&"), d = !1, e = 0; e < c.length; ++e) {
    var f = c[e],
      h = f.indexOf("=");
    if (0 <= h && f.substring(0, h) == a) {
      d = !0;
      c[e] = a + "=" + (1 + parseInt(f.substring(h + 1), 10) || 1);
      break
    }
  }
  d || c.push(a + "=1");
  c = c.join("&");
  d = new Date(hb() + 864E5);
  e = ["/calendar/"];
  if (/\/$/.test(e[0]) && d instanceof Date && 2E3 > d.getFullYear())
    for (f = e[0]; f = f.replace(/([^\/]+|\/)$/, g);) e.push(f);
  t: switch (b) {
    case "CAL":
    case "CALH":
      h = "." + window.location.host;
      break t;
    default:
      h = null
  }
  for (var k = 0; k < e.length; ++k) {
    var f =
      e[k],
      m = [];
    m.push(b + "=" + c);
    m.push("path=" + f);
    h && m.push("domain=" + h);
    d instanceof Date && m.push("expires=" + d.toUTCString());
    document.cookie = m.join("; ")
  }
}
Ta("_incClientErr", pf, void 0);

function rf(a, b) {
  var c;
  a instanceof rf ? (this.tj = x(b) ? b : a.tj, sf(this, a.sf), this.ok = a.ok, this.ce = a.ce, tf(this, a.oi), uf(this, a.Rf), vf(this, a.b.clone()), wf(this, a.vn)) : a && (c = Ce(String(a))) ? (this.tj = !!b, sf(this, c[1] || g, !0), this.ok = xf(c[2] || g), this.ce = xf(c[3] || g, !0), tf(this, c[4]), uf(this, c[5] || g, !0), vf(this, c[6] || g, !0), wf(this, c[7] || g, !0)) : (this.tj = !!b, this.b = new yf(null, 0, this.tj))
}
v = rf.prototype;
v.sf = g;
v.ok = g;
v.ce = g;
v.oi = null;
v.Rf = g;
v.vn = g;
v.tj = !1;
v.toString = function() {
  var a = [],
    b = this.sf;
  b && a.push(zf(b, Af, !0), ":");
  if (b = this.ce) {
    a.push("//");
    var c = this.ok;
    c && a.push(zf(c, Af, !0), "@");
    a.push(qb(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    b = this.oi;
    null != b && a.push(":", String(b))
  }
  if (b = this.Rf) this.ce && "/" != b.charAt(0) && a.push("/"), a.push(zf(b, "/" == b.charAt(0) ? Kba : Lba, !0));
  (b = this.b.toString()) && a.push("?", b);
  (b = this.vn) && a.push("#", zf(b, Mba));
  return a.join(g)
};
v.clone = function() {
  return new rf(this)
};

function sf(a, b, c) {
  a.sf = c ? xf(b, !0) : b;
  a.sf && (a.sf = a.sf.replace(/:$/, g))
}

function tf(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
    a.oi = b
  } else a.oi = null
}

function uf(a, b, c) {
  a.Rf = c ? xf(b, !0) : b;
  return a
}

function vf(a, b, c) {
  b instanceof yf ? (a.b = b, Nba(a.b, a.tj)) : (c || (b = zf(b, Oba)), a.b = new yf(b, 0, a.tj));
  return a
}

function wf(a, b, c) {
  a.vn = c ? xf(b) : b;
  return a
}

function Bf(a) {
  return a instanceof rf ? a.clone() : new rf(a, void 0)
}

function xf(a, b) {
  return a ? b ? decodeURI(a) : decodeURIComponent(a) : g
}

function zf(a, b, c) {
  return Za(a) ? (a = encodeURI(a).replace(b, Pba), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}

function Pba(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Af = /[#\/\?@]/g,
  Lba = /[\#\?:]/g,
  Kba = /[\#\?]/g,
  Oba = /[\#\?@]/g,
  Mba = /#/g;

function yf(a, b, c) {
  this.b = a || null;
  this.o = !!c
}

function Cf(a) {
  a.nc || (a.nc = new ae, a.Kd = 0, a.b && Dba(a.b, function(b, c) {
    a.add(rb(b), c)
  }))
}
v = yf.prototype;
v.nc = null;
v.Kd = null;
v.qb = function() {
  Cf(this);
  return this.Kd
};
v.add = function(a, b) {
  Cf(this);
  this.b = null;
  a = Df(this, a);
  var c = this.nc.get(a);
  c || this.nc.set(a, c = []);
  c.push(b);
  this.Kd++;
  return this
};
v.remove = function(a) {
  Cf(this);
  a = Df(this, a);
  return de(this.nc, a) ? (this.b = null, this.Kd -= this.nc.get(a).length, this.nc.remove(a)) : !1
};
v.clear = function() {
  this.nc = this.b = null;
  this.Kd = 0
};
v.isEmpty = function() {
  Cf(this);
  return 0 == this.Kd
};

function Ff(a, b) {
  Cf(a);
  b = Df(a, b);
  return de(a.nc, b)
}
v.zh = function(a) {
  var b = this.pb();
  return Ib(b, a)
};
v.wb = function() {
  Cf(this);
  for (var a = this.nc.pb(), b = this.nc.wb(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c
};
v.pb = function(a) {
  Cf(this);
  var b = [];
  if (Za(a)) Ff(this, a) && (b = Nb(b, this.nc.get(Df(this, a))));
  else {
    a = this.nc.pb();
    for (var c = 0; c < a.length; c++) b = Nb(b, a[c])
  }
  return b
};
v.set = function(a, b) {
  Cf(this);
  this.b = null;
  a = Df(this, a);
  Ff(this, a) && (this.Kd -= this.nc.get(a).length);
  this.nc.set(a, [b]);
  this.Kd++;
  return this
};
v.get = function(a, b) {
  var c = a ? this.pb(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
v.setValues = function(a, b) {
  this.remove(a);
  0 < b.length && (this.b = null, this.nc.set(Df(this, a), Ob(b)), this.Kd += b.length)
};
v.toString = function() {
  if (this.b) return this.b;
  if (!this.nc) return g;
  for (var a = [], b = this.nc.wb(), c = 0; c < b.length; c++)
    for (var d = b[c], e = qb(d), d = this.pb(d), f = 0; f < d.length; f++) {
      var h = e;
      d[f] !== g && (h += "=" + qb(d[f]));
      a.push(h)
    }
  return this.b = a.join("&")
};
v.clone = function() {
  var a = new yf;
  a.b = this.b;
  this.nc && (a.nc = this.nc.clone(), a.Kd = this.Kd);
  return a
};

function Df(a, b) {
  var c = String(b);
  a.o && (c = c.toLowerCase());
  return c
}

function Nba(a, b) {
  b && !a.o && (Cf(a), a.b = null, a.nc.forEach(function(a, b) {
    var e = b.toLowerCase();
    b != e && (this.remove(b), this.setValues(e, a))
  }, a));
  a.o = b
};
var Hf = "undefined" != typeof window ? window.location.href : g;
Hf.replace(/#.*/, g);

function If(a) {
  return !(!a || !a.match(/^(?:https?:)?\/\/(?:[^:\/]+\.)?google\.com(?::\d+)?(?:\/.*$|$)/))
}

function Jf(a) {
  return If(a) ? a.replace(/^https?:\/\//i, "//") : a
}

function Kf(a) {
  a = Bf(a || g);
  return "http" != a.sf && "https" != a.sf && a.sf != g ? g : a.toString()
};
var Lf = /^\s*(while\s*\(\s*1\s*\)\s*;|\)\]\}\'\s*\n)/;

function Mf(a, b, c) {
  M.call(this);
  this.F = a;
  this.D = c || new ff;
  this.B = b;
  this.b = {};
  this.o = {};
  this.A = !0
}
C(Mf, M);

function Nf(a) {
  return Gd(a, 6)
}
v = Mf.prototype;
v.rP = lf.L();

function Of(a, b, c, d, e, f, h, k, m, n) {
  var q = m || 0,
    r = b;
  if (ac(a.b)) try {
    a.P("b")
  } catch (u) {}
  m = mf(a.rP);
  h = h || {};
  h["X-If-No-Redirect"] = 1;
  k = k || "POST";
  if (a.B)
    if ("GET" == k) {
      var w = b;
      (b = nf(a.B.b)) ? (w = [w, "&", Ja], null != b && w.push("=", qb(b)), b = Fe(w)) : b = w
    } else {
      c = c || [];
      if (w = nf(a.B.b)) c = c || [], c.push(Ja, w);
      c = c || void 0
    }
  a.A ? (r = c && Ie(c), a.b[m] = a.D.send(m, b, k, r, h, void 0, A(a.qP, a, m, d, e, f || a.lB, q, n))) : a.o[r] && (a = A(a.mW, a, b, c, e, f || a.lB), Sa.setTimeout(a, 0));
  return m
}
v.send = function(a, b, c, d, e, f, h, k) {
  return Of(this, a, b, c, d, e, f, h, k)
};

function Pf(a, b, c, d, e, f, h) {
  Of(a, b, c, d, e, f, void 0, void 0, 2, h)
}
v.qP = function(a, b, c, d, e, f, h) {
  try {
    var k = h.target;
    this.P(new Qf(k));
    if (this.C && this.C.o(k)) d();
    else if (k.Yc()) {
      var m = k.oj().replace(Lf, g);
      0 == e ? m = fe(m) : 2 == e && (f && f(), Qba(this, m));
      c(m)
    } else if (412 == k.getStatus()) {
      var n = We(k, "X-Redirect-Location");
      if (n) {
        var q = this.b[a];
        this.send(n, q.getContent(), b, c, d, q.qD, q.Fb())
      }
    } else {
      var r = k.getStatus();
      100 > r || 600 <= r || pf(b);
      d()
    }
  } catch (u) {} finally {
    delete this.b[a], this.P("c"), ac(this.b) && this.P("d")
  }
};

function Qba(a, b) {
  var c = eval(b);
  c instanceof Array && c.length && Rf(z.get(a.F), c)
}
v.abort = function(a, b) {
  this.D.abort(a, b);
  b && (delete this.b[a], this.P("c"), ac(this.b) && this.P("d"))
};
v.lB = z;
v.mW = function(a, b, c, d) {
  this.o[a](b, c, d)
};

function Rba(a, b) {
  a.A = b
}

function Qf(a) {
  J.call(this, "e");
  this.o = a
}
C(Qf, J);

function Sf(a, b) {
  this.o = a;
  this.b = b
}
Sf.prototype.getId = p("o");

function Tf(a, b) {
  for (var c = a.b.length - 2; 0 < c; c -= 2)
    if (b >= a.b[c]) return a.b[c + 1];
  return a.b[0]
}
var Uf = {};

function _setTzTransitions(a) {
  a = a.split("{");
  for (var b = a[0], c = [], d = 1; d < a.length; d++) c.push(parseInt(a[d], 36));
  1 == c.length % 2 && (Uf[b] = new Sf(b, c))
}

function Vf(a, b, c) {
  if (b == c) return 0;
  for (var d = [b, c], e = {}, f = !0, h = ["tzMode", "1"], k = 0; k < d.length; ++k) {
    var m = d[k],
      n = Uf[m];
    n ? e[m] = n : (f = !1, h.push("ctz", m))
  }
  f || Pf(Nf(O()), "dispTzOffset", h, 0, z);
  b = e[b];
  c = e[c];
  return b && c ? Tf(b, a) - Tf(c, a) : null
};
var Wf = null;

function Sba() {};

function Xf(a, b) {
  this.b = a;
  this.Gd = b || g
}
Xf.prototype.uc = p("Gd");

function Yf(a) {
  return a.Gd || a.b
};

function Zf(a, b, c, d, e, f, h) {
  Xf.call(this, b, c);
  this.uid = a;
  this.o = d || 100;
  this.A = e || g;
  this.B = f || null;
  this.D = h || b
}
C(Zf, Xf);
Zf.prototype.Kb = p("o");
Zf.prototype.Xc = function() {
  return 103 == this.o
};

function $f(a) {
  this.b = {};
  this.o = {};
  if (a)
    for (var b in a) this.put(b, a[b])
}
$f.prototype.put = function(a, b) {
  this.b[a] = b;
  this.o[b] = a
};
$f.prototype.get = function(a) {
  return this.b[a]
};
var ag = 0;

function bg() {}
bg.prototype.b = La();

function cg() {
  var a = new bg;
  return A(a.b, a)
};
var Tba = cg();
var Uba = cg();
var Vba = cg();

function dg(a, b) {
  this.A = a;
  this.o = Kf(b)
}
dg.prototype.getTitle = function() {
  return this.A || g
};

function eg(a) {
  return !!a.o && "CHIP" != a.b.d
}
dg.prototype.Vr = function() {
  return this.o ? !0 : !1
};

function fg(a, b, c, d, e) {
  this.ka = a;
  this.$j(b, c);
  this.Vi = d ? d : 0;
  this.F = e || {}
}
v = fg.prototype;
v.Fc = g;
v.Pc = g;
v.VB = g;
v.od = g;
v.Sd = 3;
var Wba = cg();
fg.prototype.Nc = -1;
fg.prototype.rg = Na("Nc");
var Xba = hc(0, 1, 2, 3, 6);
v = fg.prototype;
v.getId = p("ka");
v.Ma = p("La");
v.fb = p("Ga");

function gg(a) {
  return new hg(a.Ma(), a.fb())
}
v.Rx = function(a) {
  return a.Rx(this.Ma(), this.fb())
};

function ig(a, b) {
  return b(a.Ma().ya(), a.fb().ya())
}

function jg(a, b) {
  return a.fb().ya() < b.ya()
}

function kg(a) {
  return lg(a.fb(), a.Ma())
}
v.$j = function(a, b) {
  this.La = a;
  this.Ga = b;
  var c = a.ya();
  this.o = isNaN(a.hour);
  this.V = b.ya() >= mg(c);
  this.X = !this.o && 0 == ng(b);
  this.wa = (c << 1) + !this.V + c % 1
};
v.Ec = function() {
  return 1 == this.Vi
};
v.getTitle = p("VB");
v.setTitle = Na("VB");
v.Fa = p("Xa");
v.Ok = function() {
  return this.Y || g
};
v.Id = t(null);
v.Tb = p("ub");
v.ob = t(!1);
v.of = t(!1);
v.gx = t(!1);
v.equals = function(a) {
  return this == a ? !0 : !!a && a.getId() == this.getId()
};

function og(a, b, c) {
  return b.wa - c.wa || c.fb().ya() - b.fb().ya() || a(b, c) || pb(b.getTitle(), c.getTitle())
};

function pg() {
  this.o = new $f({
    AVAILABLE: 1,
    BLOCKING: 2,
    BUSY: 0
  });
  this.A = new $f({
    SECRET: 4,
    PRIVATE: 3,
    PUBLIC: 2,
    DEFAULT: 1
  });
  this.b = new $f({
    0: 100,
    2: 102,
    3: 103,
    4: 104,
    5: 105,
    6: 106,
    7: 107,
    8: 108
  });
  this.B = new $f({
    VIEW: 0,
    TEMPLATE: 1,
    RESPOND: 2,
    EDIT: 3,
    CREATE: 4,
    VIEW_ORIGINAL: 5,
    RESTORE_ORIGINAL: 6
  })
}
Va(pg);

function qg() {
  M.call(this);
  this.b = {};
  this.o = {}
}
C(qg, M);
Va(qg);
qg.prototype.M = function() {
  this.o = this.b = null;
  qg.J.M.call(this)
};

function rg(a, b) {
  var c = a.b[b];
  return c ? c : 0 <= b.indexOf("@") ? a.o[b] : null
}
qg.prototype.forEach = function(a) {
  for (var b in this.b) a(this.b[b])
};

function sg(a, b) {
  var c = a.b[b.uid],
    c = tg(c, b);
  a.b[b.uid] = c;
  c = a.o[b.b];
  c = tg(c, b);
  a.o[b.b] = c;
  a.P(new ug(b))
}

function ug(a) {
  J.call(this, "gcal$pae");
  this.qi = a
}
C(ug, J);

function Yba(a) {
  for (var b = qg.L(), c = pg.L(), d = 0; d < a.length; d += 5) {
    var e = a[d],
      f = c.b.get(parseInt(a[d + 1], 10));
    sg(b, new Zf(e, a[d + 3], a[d + 2], f, a[d + 4]))
  }
}

function tg(a, b) {
  if (!a) return b;
  var c = b.uid,
    d = b.b,
    e = b.uc();
  e && b.b != e || (e = a.uc());
  return new Zf(c, d, e, b.Kb(), b.A || a.A)
};

function vg(a) {
  return Gd(a, 20)
};

function wg() {
  return "//calendar.google.com/googlecalendar/images/blank.gif"
};

function xg(a, b, c, d, e) {
  this.rb = a;
  this.Qd = b;
  this.kb = c || g;
  a = this.kb ? this.kb : (a = this.Qd.match(Zba)) ? a[0] : this.Qd;
  this.A = a;
  this.o = d || 0;
  this.b = e || cd(this.o)
}
var Zba = /GMT[+-](([01]\d((?=:00)|(:\d{2})))|((\?)*))/;
xg.prototype.getName = p("rb");
xg.prototype.Zd = Pa(10);
xg.prototype.equals = function(a) {
  return null !== a && this.rb == a.getName() && this.Qd == a.Qd
};

function yg(a) {
  return 10 > a ? "0" + a : String(a)
}
var Ag = [, 31, , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Bg(a, b) {
  return Ag[b] || Ag[a] || (Ag[a] = 28 + ((a & 3 ? 0 : a % 100 || !(a % 400)) ? 1 : 0))
}

function Cg(a) {
  return 0 == a || 6 == a
}
var Dg = {};

function Eg(a, b) {
  var c = a << 4 | b;
  return Dg[c] || (Dg[c] = (new Date(a, b - 1, 1, 12, 0, 0, 0)).getDay())
}
var $ba = [, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

function Fg(a, b, c) {
  a = 2 >= b || 29 - Bg(a, 2);
  return $ba[b] + c - a
};
var Gg = 1 / 131072;

function Hg(a, b, c) {
  return ((a - 1970 << 4) + b << 5) + c
}
var Ig = Hg(-65535, 1, 1),
  aca = Hg(65535, 12, 31);

function Jg(a) {
  return String((a >> 9) + 1970) + yg(a >> 5 & 15) + yg(a & 31)
}

function mg(a) {
  if (28 > (a & 31)) return a + 1;
  var b = a >> 5 & 15;
  if ((a & 31) < (Ag[b] || Bg((a >> 9) + 1970, 2))) return a + 1;
  var c = (a >> 9) + 1970;
  12 < ++b && (b = 1, ++c);
  return Hg(c, b, 1) + a % 1
}

function Kg(a, b) {
  var c = a;
  a % 1 || (a += Gg);
  (b - Gg) % 1 || (b -= Gg);
  return function(d, e) {
    return d < b && (e > a || d >= c)
  }
};

function Lg() {}
v = Lg.prototype;
v.year = NaN;
v.month = NaN;
v.$ = NaN;
v.hour = NaN;
v.minute = NaN;
v.second = NaN;
v.toString = function() {
  return this.A || (this.A = this.pm())
};
v.ib = function() {
  return this.ya() | 0
};
v.min = function(a) {
  return this.ya() < a.ya() ? this : a
};
v.max = function(a) {
  return this.ya() > a.ya() ? this : a
};

function lg(a, b) {
  var c = Mg(a);
  isNaN(a.year) || (c.year = NaN, c.month = NaN, c.$ = Ng(a, b));
  isNaN(a.hour) || (c.hour -= b.hour, c.minute -= b.minute, c.second -= b.second);
  return new Og(c.$, c.hour, c.minute, c.second)
}

function Ng(a, b) {
  var c = a.year,
    d = a.month,
    e = a.$,
    f = b.year,
    h = b.month,
    k = b.$;
  return c == f ? Fg(c, d, e) - Fg(f, h, k) : Math.round((Date.UTC(c, d - 1, e) - Date.UTC(f, h - 1, k)) / 864E5)
}

function Pg(a) {
  var b = a.year,
    c = a.month;
  a = a.$;
  28 < ++a && a > Bg(b, c) && (a = 1, 13 === ++c && (c = 1, ++b));
  return Qg(b, c, a)
}

function Rg(a) {
  return a.hour || a.minute || a.second ? Pg(a) : a.Ca()
}

function Sg(a, b) {
  return Tg(a.year, a.month, a.$ + b).Ca()
}

function Ug(a, b) {
  return Sg(a, -((a.Wb() - b + 7) % 7))
}

function Vg(a, b) {
  return Sg(a, (b - a.Wb() + 7) % 7)
}
v.Wb = function() {
  var a = this.$;
  return (Eg(this.year, this.month) + a - 1) % 7
};
v.Ca = function() {
  return Qg(this.year || 0, this.month || 1, this.$ || 1)
};
v.Ja = function() {
  return new Wg(this.year || 0, this.month || 1, this.$ || 1, this.hour || 0, this.minute || 0, this.second || 0)
};
v.Ub = function() {
  return new Xg(this.hour || 0, this.minute || 0, this.second || 0)
};

function ng(a) {
  return 60 * a.hour + a.minute
};

function Yg() {}
C(Yg, Lg);

function Xg(a, b, c) {
  this.hour = a;
  this.minute = b;
  this.second = c
}
C(Xg, Lg);
v = Xg.prototype;
v.Ub = function() {
  return this
};
v.pm = function() {
  return wb("T", yg(this.hour), yg(this.minute), yg(this.second))
};
v.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.ya() == a.ya()
};
v.ya = function() {
  return this.b || (this.b = (((this.hour << 6) + this.minute << 6) + this.second + 1) * Gg)
};
v.dc = t(!0);

function Wg(a, b, c, d, e, f) {
  this.year = a;
  this.month = b;
  this.$ = c;
  this.hour = d;
  this.minute = e;
  this.second = f
}
C(Wg, Yg);
v = Wg.prototype;
v.Ja = function() {
  return this
};
v.ya = function() {
  return this.b || (this.b = ((this.year - 1970 << 4) + this.month << 5) + this.$ + (((this.hour << 6) + this.minute << 6) + this.second + 1) * Gg)
};
v.dc = t(!0);
v.pm = function() {
  return wb(String(this.year), yg(this.month), yg(this.$), "T", yg(this.hour), yg(this.minute), yg(this.second))
};
v.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.ya() == a.ya()
};

function Zg(a) {
  return new Wg(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds())
};

function $g() {}
$g.prototype.get = function(a, b) {
  var c = a.charAt(b);
  return "1" == c ? !0 : "0" == c ? !1 : void 0
};

function ah() {
  M.call(this);
  this.B = new $g
}
C(ah, M);

function bh(a) {
  return a.getString("customCalMode", "custom,4")
}
ah.prototype.getString = function(a, b) {
  var c = this.get(a);
  return x(c) ? c : b
};

function ch(a, b, c) {
  a = a.get(b);
  return x(a) ? parseFloat(a) : Za(c) ? parseFloat(c) : c
}

function dh(a, b, c) {
  a = a.get(b);
  return x(a) ? "true" == a : Za(c) ? "true" == c : c
}

function eh(a, b, c) {
  var d = a.getString("bool", g);
  a = a.B.get(d, b);
  return x(a) ? a : c
};

function fh(a) {
  M.call(this);
  this.C = a
}
C(fh, M);
fh.prototype.getId = p("C");
fh.prototype.getKey = p("C");
fh.prototype.ob = t(!1);

function gh(a) {
  M.call(this);
  this.aL = (ag++).toString(36);
  this.qc = new M;
  a = a || [];
  for (var b = {}, c = 0; c < a.length; c++) {
    var d = a[c],
      e = d.getKey();
    b[e] = d;
    d.Od && d.Od(this.qc)
  }
  this.Ka = b;
  this.QL = a.length;
  this.Z = dc(b);
  this.ic = a.length;
  K(this.qc, l, A(this.NT, this))
}
C(gh, M);
v = gh.prototype;
v.Pl = null;
v.Fr = !1;
v.Jh = 0;
v.M = function() {
  gh.J.M.call(this);
  for (var a in this.Z) I(this.Z[a]);
  this.qc.ea()
};
v.size = p("ic");
v.isEmpty = function() {
  return 0 == this.ic
};
v.getItem = function(a) {
  return this.Z[a]
};
v.contains = function(a) {
  return a in this.Z
};
v.add = function(a) {
  var b = a.getKey();
  if (b in this.Z) return !1;
  this.Z[b] = a;
  this.ic++;
  a.Od && a.Od(this.qc);
  this.Jh && a.Ib && a.Ib();
  hh(this, "f", a);
  ih(this);
  return !0
};
v.remove = function(a) {
  if (!(a in this.Z)) return !1;
  var b = this.Z[a];
  bc(this.Z, a);
  this.ic--;
  b.Od && b.Od(null);
  this.Jh && b.Gb && b.Gb();
  hh(this, "g", b);
  ih(this);
  return !0
};
v.removeItem = Pa(11);
v.wb = function() {
  return Zb(this.Z)
};
v.yb = function() {
  return Yb(this.Z)
};
v.dx = function() {
  return 0 < this.Jh
};
v.Ib = function() {
  this.Jh++;
  if (1 == this.Jh)
    for (var a in this.Z) {
      var b = this.Z[a];
      b.Ib && b.Ib()
    }
};
v.Gb = function() {
  if (1 == this.Jh)
    for (var a in this.Z) {
      var b = this.Z[a];
      b.Gb && b.Gb()
    }
  this.Jh--;
  ih(this)
};

function hh(a, b, c) {
  var d = a.Pl || {};
  b in d || (d[b] = []);
  d[b].push(c);
  a.Pl = d
}
v.NT = function(a) {
  hh(this, l, a.target);
  this.Fr = !0;
  ih(this)
};
v.Ia = Pa(13);
v.equals = function(a) {
  return a === this
};
v.getKey = p("aL");

function ih(a) {
  if (!a.Jh && (a.Pl || a.Fr)) {
    a.Ib();
    var b = a.Fr;
    a.Fr = !1;
    a.Pl && (b = new kh(a.Pl), a.Pl = null, a.P(b), b = !0);
    b && a.P(l);
    a.Gb()
  }
}

function kh(a) {
  J.call(this, "h");
  this.o = a
}
C(kh, J);

function lh(a, b) {
  return a.o[b] || []
};

function mh(a, b, c, d, e) {
  this.A = a;
  this.o = b;
  this.b = c;
  this.B = d;
  this.D = e
}

function nh(a, b) {
  var c = parseInt(a.substr(1, 2), 16),
    d = parseInt(a.substr(3, 2), 16),
    e = parseInt(a.substr(5, 2), 16),
    c = Math.floor(255 - (255 - c) * b),
    d = Math.floor(255 - (255 - d) * b),
    e = Math.floor(255 - (255 - e) * b);
  return "#" + oh(c) + oh(d) + oh(e)
}

function ph(a) {
  var b;
  b = parseInt(a.substr(1, 2), 16);
  var c = parseInt(a.substr(3, 2), 16),
    d = parseInt(a.substr(5, 2), 16);
  b *= .7;
  var c = .7 * c,
    d = .7 * d,
    e = .3 * b + .59 * c + .11 * d,
    f, h = Math.exp(e / 255);
  f = (.595716 * b - .274453 * c - .321263 * d) * h;
  d = (.211456 * b - .522591 * c + .311135 * d) * h;
  b = Math.floor(Math.min(Math.max(e + .9563 * f + .621 * d, 0), 255));
  c = Math.floor(Math.min(Math.max(e - .2721 * f - .6474 * d, 0), 255));
  d = Math.floor(Math.min(Math.max(e - 1.107 * f + 1.7046 * d, 0), 255));
  b = "#" + oh(b) + oh(c) + oh(d);
  c = nh(a, .33);
  e = Math.min(1, .5 + (parseInt(a.substr(1, 2), 16) +
    parseInt(a.substr(3, 2), 16) + parseInt(a.substr(5, 2), 16)) / 3 / 255 / 1.5);
  e = nh(a, e);
  return new mh(a, b, a, e, c)
}
mh.prototype.equals = function(a) {
  return this.color == a.color
};
var qh = !1;

function rh(a) {
  var b = sh(a.toUpperCase()),
    c;
  if (!(43 <= b)) {
    var b = 0,
      d = parseInt(a.substr(1, 2), 16) / 255,
      e = parseInt(a.substr(3, 2), 16) / 255;
    a = parseInt(a.substr(5, 2), 16) / 255;
    for (var f = 43; 66 > f; f++) {
      var h = th(f, 0),
        k = d - parseInt(h.substr(1, 2), 16) / 255,
        m = e - parseInt(h.substr(3, 2), 16) / 255,
        h = a - parseInt(h.substr(5, 2), 16) / 255,
        k = k * k + m * m + h * h;
      if (43 == f || k < c) b = f, c = k
    }
  }
  return c = b
}

function th(a, b) {
  return "#" + "666666888888aaaaaabbbbbbdddddda32929cc3333d96666e69999f0c2c2b1365fdd4477e67399eea2bbf5c7d67a367a994499b373b3cca2cce1c7e15229a36633cc8c66d9b399e6d1c2f029527a336699668cb399b3ccc2d1e12952a33366cc668cd999b3e6c2d1f01b887a22aa9959bfb391d5ccbde6e128754e32926265ad8999c9b1c2dfd00d78131096184cb05288cb8cb8e0ba52880066aa008cbf40b3d580d1e6b388880eaaaa11bfbf4dd5d588e6e6b8ab8b00d6ae00e0c240ebd780f3e7b3be6d00ee8800f2a640f7c480fadcb3b1440edd5511e6804deeaa88f5ccb8865a5aa87070be9494d4b8b8e5d4d47057708c6d8ca992a9c6b6c6ddd3dd4e5d6c6274878997a5b1bac3d0d6db5a69867083a894a2beb8c1d4d4dae54a716c5c8d8785aaa5aec6c3cedddb6e6e41898951a7a77dc4c4a8dcdccb8d6f47b08b59c4a883d8c5ace7dcce8531049f3501c7561ee2723ad6a58c6914268a2d38b5515dcd6a75d0a4a95c1158962181c244abda5dc4d69fcc23164e402175603f997d5cb5a89ac2182c5730487e536ca66d86c0a4afc9060d5e1821863640ad525cc8969acb125a121f753c3c995b5ab67998c2a62f62133d82155ca63279c34fa6c7942f63095a9a087ec2259add42b6d48e5f6b0281910ba7b828c3d445c8d0908755099d7000cf9911ebb42ed9c2858c500baa5a00d47f1eee9939ddb78d7549168d4500b56414d38233cda9866b3304743500914d14b37037bb9d845b123b870b50ab2671c9448ec98eae42104a70237f9643a5b15fc0c09cc7113f4725617d4585a361a0be9dbac73333335151517373738f8f8fb2b2b20f4b38227f6341a5875dc0a29bc7ba856508a59114d1bc36e9d34fddd398711616871111ad2d2dc94a4acb9292ac725e75481eac725ec68c78e6d5cfd06b64924420d06b64db7972f0d0cef83a22a64232f83a22f97d6df6c9c2fa573cd02424fa573cfc8976fed0c8ff7537bb5517ff7537fa9162ffd8c7ffad46cb7403ffad46ffad46ffe8cb42d69250b68e42d69242d692caf4e016a765007d3916a7656bcfa2d1ede07bd1484db8107bd1487bd148daf2ccb3dc6c93c00bb3dc6cb3dc6ceaf5dcfbe983bdb634fbe983fbe983fef9dcfad165bf9608fad165fad165fef2d392e1c033b69492e1c092e1c0e0f7ed9fe1e70bbcb29fe1e79fe1e7e4f7f89fc6e71587bd9fc6e79fc6e7e4eff84986e72c70d14986e78fb5f2dbe7fa9a9cff373ad79a9cffa9abfee3e3ffb99aff6733ddb99affb99affebe3ffc2c2c2979797c2c2c2d0d0d0e6e6e6cabdbf717171cabdbfcabdbfeae6e6cca6ac8a404dcca6accca6acf1e6e8f691b2d21e5bf691b2f9a9c3fce0e9cd74e6ca2ae6cd74e6dd8ef3f1d8f8a47ae29c3ce4a47ae2b38cede6daf7".substr(30 * a + 6 * b, 6).toUpperCase()
}
var uh = null;

function vh() {
  if (uh) return uh;
  for (var a = [], b = 0; 67 > b; b++) {
    var c = th,
      c = new mh(c(b, 0), c(b, 1), c(b, 2), c(b, 3), c(b, 4));
    c.color = b;
    a[b] = c
  }
  return uh = a
}
var bca = [44, 64, 66, 60, 57, 59, 56, 55, 55, 52, 53, 53, 48, 46, 63, 63, 61, 57, 56, 44, 62, 62, 47, 65, 66, 57, 58, 50, 51, 51, 52, 54, 48, 48, 43, 65, 65, 57, 61, 49, 54, 45],
  cca = [35, 23, 42, 14, 22, 33, 40, 28, 30, 31, 12, 32, 8, 7, 6, 26, 5, 4, 39, 21, 15, 2, 37, 25],
  wh = [26, 23, 41, 28, 33, 37, 35, 30, 38, 40, 24, 31, 27, 22, 25, 42, 29, 32, 34, 36, 39, 6, 1, 12, 9, 14, 4, 21, 8, 19, 7, 2, 11, 10, 3, 20, 13, 5, 15, 16, 17, 18],
  xh = [57, 51, 54, 46, 60, 64, 61, 43, 56, 58, 52, 53, 47, 65, 63, 62, 44, 55, 59, 49, 48, 45, 66, 50];

function yh(a) {
  a = qh ? zh(a) : Ah(a);
  return vh()[a] || null
}
var Bh = null;

function sh(a) {
  a = a.toUpperCase();
  if (!Bh) {
    Bh = {};
    for (var b = vh(), c = 0, d = b.length; c < d; ++c) Bh[b[c].A] = c
  }
  return Bh[a] || -1
}

function Ch(a, b) {
  a = dca(a);
  if (b) {
    for (var c = b, d = [], e = 0; e < c.length; e++) qh ? d.push(zh(c[e])) : d.push(Ah(c[e]));
    b = d
  }
  c = b;
  d = qh ? xh : wh;
  if (c && c.length) {
    d = Ob(d);
    for (e = 0; e < c.length; e++) Lb(d, c[e]);
    c = d
  } else c = d;
  for (var d = c[0], e = Infinity, f = 0, h = c.length; f < h; ++f) {
    var k = c[f];
    if (!a[k]) return k;
    var m = a[k];
    m < e && (d = k, e = m)
  }
  return d
}

function Dh(a, b, c) {
  var d = Xd(parseInt(a.substr(3, 2), 16), parseInt(b.substr(3, 2), 16), c),
    e = Xd(parseInt(a.substr(5, 2), 16), parseInt(b.substr(5, 2), 16), c);
  return "#" + oh(Xd(parseInt(a.substr(1, 2), 16), parseInt(b.substr(1, 2), 16), c)) + oh(d) + oh(e)
}

function oh(a) {
  a = Number(a | 0).toString(16);
  return 2 > a.length ? "0" + a : a
}

function Ah(a) {
  return 43 <= a && 66 >= a ? cca[a - 43] : a
}

function zh(a) {
  return 1 <= a && 42 >= a ? bca[a - 1] : a
}

function dca(a) {
  var b = {};
  Vb(a, function(a, d) {
    d = parseInt(d, 10);
    d = qh ? zh(d) : Ah(d);
    var e = b[d];
    e && (a += e);
    b[d] = a
  });
  return b
};

function Eh(a, b, c, d, e) {
  this.o = b;
  this.C = qh ? zh(a) : Ah(a);
  this.B = c;
  this.D = d;
  this.A = e;
  this.b = (b ? ph(c) : yh(a)) || ph(c)
}

function Fh(a) {
  a = qh ? zh(a) : Ah(a);
  return new Eh(a, !1, th(a, 0), "#000000", void 0)
}

function Gh(a, b) {
  var c = rh(a);
  return new Eh(c, !0, a, b || "#000000", a)
}
Eh.prototype.Ob = p("C");

function Hh(a) {
  return a.o ? a.D : "#000000"
}

function Ih(a) {
  return "#000000" != Hh(a)
};

function Jh(a, b, c) {
  H.call(this);
  this.A = a;
  this.b = {};
  this.o = {};
  this.B = c || [];
  Kh(this, b || [])
}
C(Jh, H);

function Lh(a, b, c) {
  a.b[b] = c;
  b = c.Ob();
  a.o[b] = (a.o[b] || 0) + 1
}

function Kh(a, b) {
  for (var c = 0, d = b.length; c < d; c++) {
    var e = b[c],
      f = a.A[e];
    x(f) && Lh(a, e, f)
  }
  c = 0;
  for (d = b.length; c < d; ++c) e = b[c], x(a.b[e]) || (f = Ch(a.o, a.B), Lh(a, e, Fh(f)))
}
Jh.prototype.M = function() {
  Jh.J.M.call(this);
  this.o = this.b = this.A = null
};
Jh.prototype.clone = function() {
  var a = new Jh(dc(this.A));
  a.b = dc(this.b);
  a.o = dc(this.o);
  return a
};

function Mh(a) {
  gh.call(this);
  this.C = a || new Jh({});
  this.A = {}
}
C(Mh, gh);
Mh.prototype.M = function() {
  this.A = null;
  Mh.J.M.call(this)
};
Mh.prototype.add = function(a, b, c) {
  this.Ib();
  var d = Mh.J.add.call(this, a);
  b || (this.A[a.getId()] = a, hh(this, "i", a));
  c && Lh(this.C, a.getId(), c);
  this.Gb();
  return d
};
Mh.prototype.remove = function(a) {
  this.Ib();
  var b = this.A[a];
  b && (delete this.A[a], hh(this, "i", b));
  a = Mh.J.remove.call(this, a);
  this.Gb();
  return a
};
Mh.prototype.Me = function(a) {
  Za(a) || (a = a.getId());
  return a in this.A
};

function eca(a, b, c, d, e, f, h) {
  this.o = a;
  this.b = b;
  this.A = c || new Ld(null, null, null);
  this.D = d || null;
  this.F = f || g;
  this.C = !!h;
  this.B = e
}

function Nh(a) {
  return a.o
}

function Oh(a) {
  return a.b
}

function Ph(a) {
  return a.A
}

function Qh(a) {
  return Gd(a, 7)
}

function Rh(a) {
  return ch(a.b, a.o.uid + "/color", 0)
}

function Sh(a) {
  return Ph(Qh(a))
}

function P(a) {
  return Oh(Qh(a))
}

function Th(a) {
  return Nh(Qh(a)).uid
};
var fca = hc("AE BD BH DJ DZ EG IL IQ IR JO KW LB LY MA MR OM PK PS QA SA SD SO SY YE".split(" "));

function Uh(a) {
  a = a.getString("country", "US");
  return !fca[a]
};

function Vh(a, b, c, d) {
  ah.call(this);
  this.D = a;
  this.b = {};
  this.A = {};
  this.o = [];
  this.C = c;
  this.F = d
}
C(Vh, ah);
Vh.prototype.get = function(a) {
  return this.b[a]
};
Vh.prototype.set = function(a, b) {
  var c = this.b[a] != b;
  c && (this.b[a] = b, this.A[a] = 0);
  return c
};
Vh.prototype.forEach = function(a) {
  for (var b in this.b) a(b, this.b[b])
};

function Wh(a) {
  J.call(this, "j");
  this.o = a
}
C(Wh, J);

function Xh(a, b, c) {
  void 0 === a.b[b] && a.set(b, c)
}

function Yh(a) {
  var b = ["hl", "en"],
    c;
  for (c in a.A) b.push("eup", c + ":" + a.b[c]);
  return b
}
v = Vh.prototype;
v.nb = function(a, b) {
  var c = Yh(this);
  if (2 < c.length) {
    var d = A(function() {
      this.F("Failed to save preferences");
      b && b()
    }, this);
    Pf(this.C, "user_prefs", c, 13, a || z, d);
    this.P(new Wh(!0))
  } else a && a()
};

function Zh(a, b) {
  for (var c = 0; c < b.length; c++) {
    var d = b[c],
      e = d[0];
    a.b[e] = d[1];
    delete a.A[e]
  }
  a.P(new Wh(!1))
}
v.tc = function() {
  return ch(this, "firstDay", "0")
};
v.xg = function() {
  return Uh(this) ? !dh(this, "weekView5", "false") : !0
};
v.sj = t(1);
v.Qf = function() {
  return Uh(this) ? 5 : 7
};
v.Tq = function(a) {
  return (x(a) ? a : this.xg()) ? 7 : this.Qf()
};
v.Mg = Pa(14);
v.$d = p("o");
v.Hl = function() {
  return dh(this, Da, "false")
};
v.fD = function() {
  return this.getString("dtFldOrdr", "MDY")
};

function $h(a, b) {
  var c = a.getString("timezone", "Etc/GMT"),
    d = a.getString("translatedtz", "(GMT+00:00) GMT (no daylight saving)"),
    e = a.getString("tzlabel", g);
  a.o = [new xg(c, d, e)];
  if ((d = a.getString("SecondaryDisplayTimezone", g)) && dh(a, "HasSecondaryTimezone", "false")) {
    var e = a.getString("secondarytranstz", d),
      f = a.getString("sectzlabel", g),
      h = a.HA(0, c, d, ai(b));
    null != h && a.o.push(new xg(d, e, f, h, A(a.HA, a, b, c, d)))
  }
}
v.HA = function(a, b, c, d) {
  a = bi(lg(d.Ja(), Zg(new Date(0))));
  return Vf(a, c, b)
};

function ci() {
  return sc || -1 != ic.indexOf("Android")
};

function di() {
  M.call(this);
  this.b = {}
}
C(di, M);
Va(di);
var ei = "!";
v = di.prototype;
v.add = function(a, b) {
  this.put(a, b);
  this.P(new fi(a, b))
};
v.put = function(a, b) {
  this.b[a] = b
};
v.get = function(a) {
  return this.b[a]
};
v.remove = function(a) {
  delete this.b[a]
};
v.forEach = function(a) {
  for (var b in this.b)
    if (!1 === a(b, this.b[b])) break
};

function gi(a, b) {
  var c = null;
  a.forEach(function(a, e) {
    if (e.C == b) return c = a, !1
  });
  return c
}

function fi(a, b) {
  J.call(this, "detailsadd");
  this.id = a;
  this.Cc = b
}
C(fi, J);

function hi(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, Q, Z, V, ia, xa, qa, sb, $a, tb, gb, Ve, Ee) {
  this.id = u;
  this.Bc = a;
  this.F = b;
  this.type = c;
  this.O = this.Rb = d;
  this.tz = e;
  this.B = V;
  this.location = f;
  this.Cc = h;
  this.V = k;
  this.X = m;
  this.o = n;
  this.b = q;
  this.Ba = L;
  this.origin = r;
  this.La = w;
  this.C = y;
  this.ub = D;
  this.jd = Q;
  this.Ka = Z;
  this.A = ia;
  this.G = xa;
  this.K = qa;
  this.Z = sb;
  this.D = !!$a;
  this.ka = !!tb;
  this.Ga = gb;
  this.wa = !!Ve;
  this.Y = Ee
};
var ii = !1;

function ji(a) {
  return !!a && /^#[0-9a-fA-F]{6}$/.test(a)
}

function ki(a) {
  var b = di.L(),
    c = a.Fa(),
    d = b.get(c);
  d || (c = gi(b, c)) && (d = b.get(c));
  if (!d || 60 > d.Bc) return g;
  a = a.F.eventColor;
  return ji(a) ? ii ? li(a) : mi(a) : g
}

function ri(a) {
  switch (a) {
    case "#a4bdfc":
      return "#e4ebfe";
    case "#5484ed":
      return "#dde6fb";
    case "#7ae7bf":
      return "#d7f8ec";
    case "#51b749":
      return "#dcf1db";
    case "#dbadff":
      return "#f4e6ff";
    case "#ff887c":
      return "#ffdbd7";
    case "#dc2127":
      return "#f8d3d4";
    case "#fbd75b":
      return "#fef3cd";
    case "#ffb878":
      return "#ffead6";
    case "#46d6db":
      return "#c7f3f4";
    case "#e1e1e1":
      return "#f6f6f6";
    default:
      return Dh(ba, a, .33)
  }
}

function mi(a) {
  switch (a) {
    case "#a4bdfc":
    case "#5484ed":
    case "#46d6db":
      return "#1111cc";
    case "#7ae7bf":
    case "#51b749":
      return "#228822";
    case "#dbadff":
      return "#551a8b";
    case "#ff887c":
    case "#dc2127":
      return "#ff0000";
    case "#fbd75b":
      return "#fbb818";
    case "#ffb878":
      return "#ff6600";
    case "#e1e1e1":
      return "#bfbfbf";
    default:
      return a
  }
}

function li(a) {
  switch (a) {
    case "#1111cc":
      return "#a4bdfc";
    case "#228822":
      return "#7ae7bf";
    case "#551a8b":
      return "#dbadff";
    case "#ff0000":
    case "#cc0066":
      return "#ff887c";
    case "#fbb818":
      return "#fbd75b";
    case "#ff6600":
      return "#ffb878";
    case "#bfbfbf":
      return "#e1e1e1";
    default:
      return a
  }
}

function si(a) {
  return "#a4bdfc" == a || "#7ae7bf" == a || "#dbadff" == a || "#fbd75b" == a || "#ffb878" == a || "#e1e1e1" == a
};

function gca(a) {
  var b = a.b,
    c, d, e, f = ti;
  f ? (a = (d = Ih(a)) ? "#eeeeee" : "#1d1d1d", c = d ? "#dddddd" : "#333333", d = d ? "#eeeeee" : "#bbbbbb", e = Dh(ba, b.o, .6)) : (d = c = a = g, e = b.D);
  this.o = a;
  this.A = b.b;
  this.B = f ? b.o : b.A;
  this.ub = f ? g : b.A;
  this.O = f ? b.b : b.o;
  this.X = f ? b.b : b.D;
  this.La = f ? g : b.o;
  this.Ga = c;
  this.Ba = d;
  this.b = b.D;
  this.D = b.B;
  this.C = f ? g : b.B;
  this.K = b.D;
  this.F = f ? b.o : b.A;
  this.Z = e;
  this.Y = f ? this.A : b.D;
  this.Ka = f ? this.B : b.B;
  this.ka = f ? g : b.B;
  this.V = f ? this.o : b.A;
  this.wa = f ? "#777777" : this.V;
  this.G = f ? "#777777" : g
}
var ti = !1,
  ui = {};

function vi(a) {
  var b = eb(a);
  ui[b] || (ui[b] = new gca(a));
  return ui[b]
}

function wi(a, b) {
  if (a.o) {
    var c = parseInt(b.substr(1, 2), 16) / 255,
      d = parseInt(b.substr(3, 2), 16) / 255,
      e = parseInt(b.substr(5, 2), 16) / 255,
      f = c + e < d / 4 || d + e < c / 4 ? 5 : 0,
      c = Math.max(0, 5 * (c - .8)),
      d = Math.max(0, 5 * (d - .8)),
      e = Math.max(0, 5 * (e - .8)),
      c = 10 + 30 * (.33 * c + .84 * d + .15 * e) + f,
      c = 5 * Math.round(c / 5);
    return c = Math.max(Math.min(c, 40), 10)
  }
  c = a.Ob();
  if (b == a.b.D) switch (c) {
    case 43:
    case 44:
    case 45:
    case 46:
    case 50:
    case 58:
    case 66:
    case 65:
    case 61:
      return 20;
    case 54:
    case 52:
    case 55:
    case 56:
    case 57:
      return 35;
    case 53:
      return 40;
    default:
      return 25
  } else switch (c) {
    case 43:
    case 44:
    case 58:
    case 66:
    case 50:
      return 10;
    case 54:
    case 52:
    case 49:
    case 55:
    case 56:
      return 20;
    case 53:
      return 25;
    default:
      return 15
  }
};

function xi(a, b, c) {
  H.call(this);
  this.b = a;
  this.o = b || 0;
  this.ra = c;
  this.Uc = A(this.iS, this)
}
C(xi, H);
v = xi.prototype;
v.Qn = 0;
v.M = function() {
  xi.J.M.call(this);
  this.stop();
  delete this.b;
  delete this.ra
};
v.start = function(a) {
  this.stop();
  this.Qn = Ae(this.Uc, x(a) ? a : this.o)
};
v.stop = function() {
  this.xc() && Be(this.Qn);
  this.Qn = 0
};
v.xc = function() {
  return 0 != this.Qn
};
v.iS = function() {
  this.Qn = 0;
  this.b && this.b.call(this.ra)
};

function yi(a, b) {
  this.x = x(a) ? a : 0;
  this.y = x(b) ? b : 0
}
yi.prototype.clone = function() {
  return new yi(this.x, this.y)
};
yi.prototype.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
yi.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
yi.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};

function zi(a, b) {
  this.width = a;
  this.height = b
}
v = zi.prototype;
v.clone = function() {
  return new zi(this.width, this.height)
};
v.isEmpty = function() {
  return !(this.width * this.height)
};
v.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
v.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
v.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var hca = !G || Ac(9),
  ica = !qc && !G || G && Ac(9) || qc && zc("1.9.1"),
  Ai = G && !zc("9"),
  jca = G || pc || rc,
  kca = G && !Ac(9);

function Bi(a) {
  return a ? new Ci(Di(a)) : kb || (kb = new Ci)
}

function R(a) {
  return Za(a) ? document.getElementById(a) : a
}

function Ei(a) {
  var b = document;
  return Za(a) ? b.getElementById(a) : a
}

function Fi(a, b) {
  Vb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Gi ? a.setAttribute(Gi[d], b) : lb(d, "aria-") || lb(d, "data-") ? a.setAttribute(d, b) : a[d] = b
  })
}
var Gi = {
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  colspan: "colSpan",
  frameborder: "frameBorder",
  height: "height",
  maxlength: "maxLength",
  role: "role",
  rowspan: "rowSpan",
  type: "type",
  usemap: "useMap",
  valign: "vAlign",
  width: "width"
};

function Hi(a) {
  a = (a || window).document.documentElement;
  return new zi(a.clientWidth, a.clientHeight)
}

function Ii(a) {
  var b = Ji(a);
  a = a.parentWindow || a.defaultView;
  return G && zc("10") && a.pageYOffset != b.scrollTop ? new yi(b.scrollLeft, b.scrollTop) : new yi(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}

function Ji(a) {
  return rc ? a.body || a.documentElement : a.documentElement
}

function Ki(a) {
  return a ? a.parentWindow || a.defaultView : window
}

function Li(a, b, c) {
  return Mi(document, arguments)
}

function Mi(a, b) {
  var c = b[0],
    d = b[1];
  if (!hca && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', E(d.name), '"');
    if (d.type) {
      c.push(' type="', E(d.type), '"');
      var e = {};
      fc(e, d);
      delete e.type;
      d = e
    }
    c.push(">");
    c = c.join(g)
  }
  c = a.createElement(c);
  d && (Za(d) ? c.className = d : Xa(d) ? c.className = d.join(" ") : Fi(c, d));
  2 < b.length && Ni(a, c, b, 2);
  return c
}

function Ni(a, b, c, d) {
  function e(c) {
    c && b.appendChild(Za(c) ? a.createTextNode(c) : c)
  }
  for (; d < c.length; d++) {
    var f = c[d];
    !Ya(f) || db(f) && 0 < f.nodeType ? e(f) : F(lca(f) ? Ob(f) : f, e)
  }
}

function Oi(a, b) {
  Ni(Di(a), a, arguments, 1)
}

function Pi(a) {
  for (var b; b = a.firstChild;) a.removeChild(b)
}

function Qi(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
}

function Ri(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function Si(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
}

function Ti(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
}

function Ui(a) {
  return ica && void 0 != a.children ? a.children : Cb(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
}

function Vi(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : Wi(a.firstChild)
}

function Xi(a) {
  return void 0 != a.nextElementSibling ? a.nextElementSibling : Wi(a.nextSibling)
}

function Wi(a) {
  for (; a && 1 != a.nodeType;) a = a.nextSibling;
  return a
}

function Yi(a) {
  return db(a) && 1 == a.nodeType
}

function Zi(a, b) {
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  for (; b && a != b;) b = b.parentNode;
  return b == a
}

function Di(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function $i(a) {
  return a.contentDocument || a.contentWindow.document
}

function aj(a, b) {
  if ("textContent" in a) a.textContent = b;
  else if (3 == a.nodeType) a.data = b;
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
    a.firstChild.data = b
  } else Pi(a), a.appendChild(Di(a).createTextNode(String(b)))
}

function bj(a, b) {
  var c = [];
  return cj(a, b, c, !0) ? c[0] : void 0
}

function cj(a, b, c, d) {
  if (null != a)
    for (a = a.firstChild; a;) {
      if (b(a) && (c.push(a), d) || cj(a, b, c, d)) return !0;
      a = a.nextSibling
    }
  return !1
}

function dj(a) {
  var b = a.getAttributeNode("tabindex");
  if (b = null != b && b.specified) a = a.tabIndex, b = ab(a) && 0 <= a && 32768 > a;
  return b
}

function ej(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
}

function lca(a) {
  if (a && "number" == typeof a.length) {
    if (db(a)) return typeof a.item == Ea || "string" == typeof a.item;
    if (bb(a)) return typeof a.item == Ea
  }
  return !1
}

function gj(a, b, c, d) {
  c || (a = a.parentNode);
  c = null == d;
  for (var e = 0; a && (c || e <= d);) {
    if (b(a)) return a;
    a = a.parentNode;
    e++
  }
  return null
}

function Ci(a) {
  this.b = a || Sa.document || document
}
v = Ci.prototype;
v.Za = Pa(15);
v.H = Pa(18);
v.Wa = Pa(20);
v.W = Pa(21);
v.createElement = function(a) {
  return this.b.createElement(a)
};
v.createTextNode = function(a) {
  return this.b.createTextNode(String(a))
};

function hj(a) {
  return Ii(a.b)
}
v.appendChild = function(a, b) {
  a.appendChild(b)
};
v.append = Oi;
v.jl = Pi;
v.Co = Qi;
v.Xw = Ri;
v.ld = Si;
v.X0 = Ti;
v.kS = Ui;
v.Yk = Vi;
v.ZR = Xi;
v.dZ = Yi;
v.contains = Zi;
v.We = aj;
v.yO = bj;
v.XC = gj;

function ij(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
v = ij.prototype;
v.getHeight = Pa(23);
v.clone = function() {
  return new ij(this.top, this.right, this.bottom, this.left)
};
v.contains = function(a) {
  return this && a ? a instanceof ij ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
v.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
v.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
v.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};

function jj(a, b, c) {
  if (Za(b))(b = kj(a, b)) && (a.style[b] = c);
  else
    for (var d in b) {
      c = a;
      var e = b[d],
        f = kj(c, d);
      f && (c.style[f] = e)
    }
}
var lj = {};

function kj(a, b) {
  var c = lj[b];
  if (!c) {
    var d = zb(b),
      c = d;
    void 0 === a.style[d] && (d = (rc ? "Webkit" : qc ? "Moz" : G ? "ms" : pc ? "O" : null) + laa(d), void 0 !== a.style[d] && (c = d));
    lj[b] = c
  }
  return c
}

function mj(a, b) {
  var c = Di(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || g : g
}

function nj(a, b) {
  return mj(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function oj(a) {
  return new yi(a.offsetLeft, a.offsetTop)
}

function pj(a) {
  a = a ? Di(a) : document;
  var b;
  (b = !G || Ac(9)) || (Bi(a), b = !0);
  return b ? a.documentElement : a.body
}

function qj(a) {
  var b;
  try {
    b = a.getBoundingClientRect()
  } catch (c) {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  }
  G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}

function rj(a) {
  var b = Di(a),
    c = new yi(0, 0),
    d = pj(b);
  if (a == d) return c;
  a = qj(a);
  b = hj(Bi(b));
  c.x = a.left + b.x;
  c.y = a.top + b.y;
  return c
}

function sj(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}

function uj(a, b) {
  a.style.height = sj(b, !0)
}

function vj(a) {
  var b = mca;
  if ("none" != nj(a, "display")) return b(a);
  var c = a.style,
    d = c.display,
    e = c.visibility,
    f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = f;
  c.visibility = e;
  return a
}

function mca(a) {
  var b = a.offsetWidth,
    c = a.offsetHeight,
    d = rc && !b && !c;
  return x(b) && !d || !a.getBoundingClientRect ? new zi(b, c) : (a = qj(a), new zi(a.right - a.left, a.bottom - a.top))
}

function wj(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = b === g ? g : "alpha(opacity=" + 100 * b + ")")
}

function S(a, b) {
  a.style.display = b ? g : "none"
}

function xj(a) {
  return "none" != a.style.display
}
var yj = qc ? "MozUserSelect" : rc ? "WebkitUserSelect" : null;

function zj(a, b) {
  if (/^\d+px?$/.test(b)) return parseInt(b, 10);
  var c = a.style.left,
    d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var e = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return e
}

function Aj(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? zj(a, c) : 0
}

function Bj(a, b) {
  if (G) {
    var c = Aj(a, b + "Left"),
      d = Aj(a, b + "Right"),
      e = Aj(a, b + "Top"),
      f = Aj(a, b + "Bottom");
    return new ij(e, d, f, c)
  }
  c = mj(a, b + "Left");
  d = mj(a, b + "Right");
  e = mj(a, b + "Top");
  f = mj(a, b + "Bottom");
  return new ij(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
};
var Cj;

function Dj(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function Ej(a, b, c) {
  Xa(c) && (c = c.join(" "));
  var d = "aria-" + b;
  c === g || void 0 == c ? (Cj || (Cj = {
    atomic: !1,
    autocomplete: "none",
    dropeffect: "none",
    haspopup: !1,
    live: "off",
    multiline: !1,
    multiselectable: !1,
    orientation: "vertical",
    readonly: !1,
    relevant: "additions text",
    required: !1,
    sort: "none",
    busy: !1,
    disabled: !1,
    hidden: !1,
    invalid: "false"
  }), c = Cj, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
};

function Fj(a) {
  this.rb = a;
  this.A = {};
  a = Iba[a];
  for (var b = 0; b < a.length; b++) this.A[a[b]] = !0;
  this.b = []
}

function nca(a, b) {
  var c = new Fj(a);
  b.b(12, c)
}
Fj.prototype.xc = function(a) {
  return this.A[a]
};
Fj.prototype.getName = p("rb");
Fj.prototype.Hb = Pa(24);

function Gj(a) {
  a = a || null;
  this.C = !!a && Gd(a, 12).xc("VR");
  a && Qd(a).isEnabled(42) && Qd(a).isEnabled(65);
  this.G = this.C
}
v = Gj.prototype;
v.$k = function() {
  var a;
  a = (qh ? xh : wh)[0];
  return yh(a)
};
v.Mf = function(a) {
  a = this.$k(a);
  var b = sh(a.A);
  return 0 <= b ? Fh(b) : Gh(a.A)
};

function Hj(a) {
  return !a || a.match(/^\s*$/) ? "(No title)" : Ij(a)
}
v.Rh = function(a) {
  return Hj(a.getTitle())
};
v.fg = t(!0);
v.Ij = t(!1);
v.pf = t(!1);
v.di = t(!1);
v.Gl = t(!1);
v.Yg = Pa(27);
v.bx = function(a) {
  return a.Tb()
};
v.Qq = t(null);
v.pj = t(g);
v.nj = t(g);
v.Wk = function() {
  return B(og, cd(0))
};
v.Xk = t(1);
v.yk = t(!0);
v.Kj = p("C");
v.Ko = p("G");
v.Mn = t("&nbsp;");

function Jj(a) {
  return Od(93) ? "SS_asid" in a.F : !1
};

function Kj(a, b, c) {
  Gj.call(this, a);
  this.F = b;
  this.b = a;
  this.B = c;
  this.A = vg(a)
}
C(Kj, Gj);
v = Kj.prototype;
v.$k = function(a) {
  return Lj(Mj.L(), a.Fa()).color.b
};
v.Mf = function(a) {
  var b = Lj(Mj.L(), a.Fa()).color;
  a = ki(a);
  si(a) && Ih(b) && (b = Gh(b.B, "#000000"));
  return b
};
v.Rh = function(a) {
  var b = ob(a.getTitle()),
    b = (b ? b.replace(of, g) : g) || "(No title)";
  if (Jj(a)) {
    var c = a.F.SS_slotsize; - 1 != parseInt(c, 10) && (b += " " + ("(" + c + "min slots)"))
  } else b += Nj(a);
  this.di(a) && (b = "<span class=rsvp-no>" + b + "</span>");
  return b
};
v.fg = function(a) {
  return !!a && (!this.A.ob(a) || a.Ec() && !a.Oe() || Oj(a, 4194304))
};
v.Ij = function(a) {
  return this.fg(a)
};
v.Gl = function(a) {
  return !this.fg(a) && "$" != a.getId() && !(a.Ec() && !Oj(a, 2097152))
};
v.Yg = Pa(26);
v.Qq = function(a) {
  if (this.B) {
    var b = rg(this.B, a.Fc);
    if (b && 100 == b.o) return b.A;
    if (a = rg(this.B, a.Pc)) return a.A
  }
  return null
};
v.di = function(a) {
  return 2 == a.Nc
};
v.nj = function(a, b) {
  var c = g,
    d = a.Id();
  d && d.o && (c = '<img class=cwci src="' + E(d.o) + '">');
  var d = this.pf(a),
    e = b && Ih(this.Mf(a)),
    f = a.Nc;
  return 0 == f ? c + Pj(ma, d, e) : 3 == f ? c + Pj(pa, d, e) : Jj(a) ? c + Pj(ka, d, e) : c
};
v.pj = function(a, b) {
  if (!b) return g;
  var c = [],
    d = this.pf(a),
    e = b && Ih(this.Mf(a));
  Qj(Rj(this.b), a) && c.push(Pj(ta, d, e));
  Oj(a, 8192) ? c.push(Pj(sa, d, e)) : Sj(a) && c.push(Pj(ra, d, e));
  a.gx() && c.push(Pj(na, d, e));
  Tj(this.A, a) && (Uj(this.A, a) ? c.push(Pj(la, d, e)) : c.push(Pj(oa, d, e)));
  return c.join(g)
};
v.Wk = function() {
  return B(og, oca)
};

function oca(a, b) {
  return Vj[a.Fa()] - Vj[b.Fa()]
}
v.Xk = function(a) {
  if (!dh(P(this.b), "fadeunimportant", "true") || !a.Vj || !Qd(this.b).isEnabled(30) && a.o) return 1;
  a = a.Ma();
  var b = ai(this.F);
  a = Wd(Ng(a, b), 1, 365);
  return 8 > a ? Xd(1, .6, (a - 1) / 7) : Xd(.6, 0, (a - 8) / 357)
};
v.pf = function(a) {
  if (!dh(P(this.b), "dimpastevents", "true")) return !1;
  var b = ai(this.F);
  return jg(a, b)
};
v.yk = t(!1);
v.Mn = function(a) {
  this.D || Ad(Id(this.b, 807), this.G1, this);
  return this.D ? Wj(this.D.o(), {
    N: a
  }) : Kj.J.Mn.call(this, a)
};
v.G1 = Na("D");

function Xj() {}
C(Xj, Yg);

function Yj(a, b, c, d) {
  var e = new Xj;
  e.year = a;
  e.month = b;
  e.$ = c;
  e.b = d;
  return Zj[d] = e
}
v = Xj.prototype;
v.Ca = function() {
  return this
};
v.ya = p("b");
v.dc = t(!0);
v.pm = function() {
  return wb(String(this.year), yg(this.month), yg(this.$))
};
v.equals = function(a) {
  return this === a
};
var Zj = {};

function Qg(a, b, c) {
  var d = Hg(a, b, c);
  return Zj[d] || Yj(a, b, c, d)
}

function ak(a) {
  return Zj[a] || Yj((a >> 9) + 1970, a >> 5 & 15, a & 31, a)
}

function bk(a) {
  return Qg(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate())
};

function Og(a, b, c, d) {
  this.o = a = 60 * (60 * (24 * a + b) + c) + d;
  this.second = a % 60;
  a = a / 60 | 0;
  this.minute = a % 60;
  a = a / 60 | 0;
  this.hour = a % 24;
  this.$ = a / 24 | 0
}
C(Og, Lg);

function bi(a) {
  return a.o / 60 | 0
}
Og.prototype.ya = function() {
  return this.b || (this.b = this.$ + (((this.hour << 6) + this.minute << 6) + this.second + 1) * Gg)
};
Og.prototype.pm = function() {
  var a = this.hour || this.minute || this.second || 0,
    b = this.$ || a,
    b = 0 > b ? -1 : 0 < b ? 1 : 0,
    c = 0 > b ? "-P" : "P";
  this.$ && (c = this.$ % 7 ? c + (b * this.$ + "D") : c + (b * this.$ / 7 + "W"));
  a ? (c += "T", this.hour && (c += b * this.hour + "H"), this.minute && (c += b * this.minute + "M"), this.second && (c += b * this.second + "S")) : b || (c += "0D");
  return c
};
Og.prototype.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.ya() == a.ya()
};
var pca = new Og(1, 0, 0, 0);

function ck() {}
C(ck, Lg);
v = ck.prototype;
v.year = 0;
v.month = 0;
v.$ = 0;
v.hour = 0;
v.minute = 0;
v.second = 0;
v.ya = function() {
  var a = this.ib();
  isNaN(this.hour) || (a += (((this.hour << 6) + this.minute << 6) + this.second + 1) * Gg);
  return a
};
v.ib = function() {
  dk(this);
  return Hg(this.year, this.month, this.$)
};

function ek(a, b) {
  a.$ += b.$;
  a.hour += b.hour;
  a.minute += b.minute;
  a.second += b.second
}

function dk(a) {
  if (a.hour || a.minute || a.second) {
    var b = 60 * (60 * a.hour + a.minute) + a.second,
      c = Math.floor(b / 86400),
      b = b - 86400 * c;
    a.$ += c;
    a.second = b % 60;
    b /= 60;
    a.minute = (b | 0) % 60;
    a.hour = (b / 60 | 0) % 24
  }
  fk(a);
  for (b = Bg(a.year, a.month); 1 > a.$;) --a.month, fk(a), b = Bg(a.year, a.month), a.$ += b;
  for (; a.$ > b;) a.$ -= b, a.month += 1, fk(a), b = Bg(a.year, a.month)
}

function fk(a) {
  var b;
  if (1 > a.month || 12 < a.month) b = Math.floor((a.month - 1) / 12), a.month -= 12 * b, a.year += b
}
v.Ca = function() {
  dk(this);
  return Qg(this.year, this.month, this.$)
};
v.Ja = function() {
  dk(this);
  return new Wg(this.year, this.month, this.$, this.hour, this.minute, this.second)
};
v.$b = Pa(31);
v.Dd = Pa(34);
v.Ub = function() {
  dk(this);
  return new Xg(this.hour, this.minute, this.second)
};
v.Wb = function() {
  dk(this);
  var a = this.$;
  return (Eg(this.year, this.month) + a - 1) % 7
};
v.equals = function(a) {
  return !!a && this.constructor == a.constructor && this.ya() == a.ya()
};

function Mg(a) {
  return gk(a.year || 0, a.month || 0, a.$ || 0, a.hour || 0, a.minute || 0, a.second || 0)
}

function gk(a, b, c, d, e, f) {
  var h = new ck;
  h.year = a;
  h.month = b;
  h.$ = c;
  h.hour = d;
  h.minute = e;
  h.second = f;
  return h
}

function Tg(a, b, c) {
  var d = new ck;
  d.year = a;
  d.month = b;
  d.$ = c;
  return d
};

function hg(a, b) {
  this.start = a;
  if (b.constructor === Og) {
    var c = Mg(a);
    ek(c, b);
    this.end = this.start instanceof Wg ? c.Ja() : c.Ca();
    this.duration = b
  } else this.end = b, this.duration = lg(this.end, this.start)
}

function hk(a, b) {
  return new hg(a, new Og(b, 0, 0, 0))
}
v = hg.prototype;
v.toString = function() {
  return this.start + "/" + this.end
};
v.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.start.equals(a.start) && this.end.equals(a.end)
};
v.qj = Pa(36);
v.Rx = function(a, b) {
  return b.ya() >= this.start.ya() && a.ya() <= this.end.ya()
};
v.contains = function(a) {
  a = a.ya();
  return a >= this.start.ya() && a < this.end.ya()
};

function ik(a, b) {
  return 10 * a.charCodeAt(b) + a.charCodeAt(b + 1) - 528
}

function jk(a) {
  var b = parseInt(a, 10),
    c = b % 100,
    b = b / 100,
    d = (b | 0) % 100,
    b = b / 100 | 0;
  return 8 == a.length ? Qg(b, d, c) : new Wg(b, d, c, ik(a, 9), ik(a, 11), ik(a, 13))
};
Lg.prototype.$b = Pa(30);
Lg.prototype.Dd = Pa(33);

function kk() {
  M.call(this)
}
C(kk, M);

function lk() {
  M.call(this)
}
C(lk, kk);

function mk(a, b, c) {
  M.call(this);
  this.A = a;
  this.C = b || Infinity;
  this.B = c;
  this.D = this.Pq(hb() + nk);
  this.b = this.Ph();
  this.o = 0;
  this.su()
}
C(mk, kk);
var nk = 0;
v = mk.prototype;
v.Ln = Pa(38);
v.Pq = function(a) {
  var b = this.A;
  void 0 === b ? b = -6E4 * (new Date(a)).getTimezoneOffset() : a >= this.C && (b = this.B);
  return b
};
v.xs = function() {
  var a = hb() + nk;
  return this.Pq(a) + a
};
v.Ph = function() {
  return new Date(this.xs())
};
v.Pn = function() {
  this.b.getUTCDate() != this.Ph().getUTCDate() && (window.clearTimeout(this.o), this.su());
  return this.b
};
v.su = function() {
  var a = this.b,
    b = this.Ph(),
    c = 18E5 - b.getTime() % 18E5;
  this.o = window.setTimeout(A(this.su, this), c);
  a.getUTCDate() !== b.getUTCDate() && (this.b = this.Ph(), this.P("newday"))
};

function ok(a, b, c) {
  M.call(this);
  this.b = new mk(a, b, c);
  this.b.Od(this)
}
C(ok, lk);
v = ok.prototype;
v.Ln = Pa(37);
v.Pq = function(a) {
  return this.b.Pq(a)
};
v.xs = function() {
  return this.b.xs()
};
v.Ph = function() {
  return this.b.Ph()
};
v.Pn = function() {
  return this.b.Pn()
};

function pk(a) {
  return bk(a.Pn())
}

function ai(a) {
  return Zg(a.Ph())
};

function qk(a, b, c) {
  ok.call(this, a, b, c)
}
C(qk, ok);

function rk(a) {
  return Gd(a, 1)
};

function sk(a) {
  M.call(this);
  this.b = this.o = a
}
C(sk, M);

function tk(a) {
  return a.b
}

function uk(a) {
  return Gd(a, 2)
}

function vk(a) {
  return tk(uk(a))
};

function wk() {}

function xk(a, b, c) {
  a.b = null;
  b || (b = []);
  a.C = void 0;
  a.A = -1;
  a.o = b;
  t: {
    if (a.o.length) {
      b = a.o.length - 1;
      var d = a.o[b];
      if (d && typeof d == Ha && !Xa(d)) {
        a.D = b - a.A;
        a.B = d;
        break t
      }
    }
    a.D = Number.MAX_VALUE
  }
  if (c)
    for (b = 0; b < c.length; b++) d = c[b], d < a.D ? (d += a.A, a.o[d] = a.o[d] || []) : a.B[d] = a.B[d] || []
}

function yk(a, b) {
  return b < a.D ? a.o[b + a.A] : a.B[b]
}

function zk(a, b, c) {
  a.b || (a.b = {});
  if (!a.b[c]) {
    var d = yk(a, c);
    d && (a.b[c] = new b(d))
  }
  return a.b[c]
}

function qca(a) {
  var b = Ak;
  a.b || (a.b = {});
  if (!a.b[1]) {
    for (var c = yk(a, 1), d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
    a.b[1] = d
  }
  return a.b[1]
}
wk.prototype.My = Pa(39);
wk.prototype.toString = function() {
  return this.o.toString()
};
var Bk = {
    vJ: {
      1E3: {
        other: "0K"
      },
      1E4: {
        other: "00K"
      },
      1E5: {
        other: "000K"
      },
      1E6: {
        other: "0M"
      },
      1E7: {
        other: "00M"
      },
      1E8: {
        other: "000M"
      },
      1E9: {
        other: "0B"
      },
      1E10: {
        other: "00B"
      },
      1E11: {
        other: "000B"
      },
      1E12: {
        other: "0T"
      },
      1E13: {
        other: "00T"
      },
      1E14: {
        other: "000T"
      }
    },
    uJ: {
      1E3: {
        other: "0 thousand"
      },
      1E4: {
        other: "00 thousand"
      },
      1E5: {
        other: "000 thousand"
      },
      1E6: {
        other: "0 million"
      },
      1E7: {
        other: "00 million"
      },
      1E8: {
        other: "000 million"
      },
      1E9: {
        other: "0 billion"
      },
      1E10: {
        other: "00 billion"
      },
      1E11: {
        other: "000 billion"
      },
      1E12: {
        other: "0 trillion"
      },
      1E13: {
        other: "00 trillion"
      },
      1E14: {
        other: "000 trillion"
      }
    }
  },
  Ck = Bk,
  Ck = Bk;
var Dk = {
  AED: [2, "dh", "\u062f.\u0625.", "DH"],
  ALL: [0, "Lek", "Lek"],
  AUD: [2, "$", "AU$"],
  BDT: [2, "\u09f3", "Tk"],
  BGN: [2, "lev", "lev"],
  BRL: [2, "R$", "R$"],
  CAD: [2, "$", "C$"],
  CDF: [2, "FrCD", "CDF"],
  CHF: [2, "CHF", "CHF"],
  CLP: [0, "$", "CL$"],
  CNY: [2, "\u00a5", "RMB\u00a5"],
  COP: [0, "$", "COL$"],
  CRC: [0, "\u20a1", "CR\u20a1"],
  CZK: [50, "K\u010d", "K\u010d"],
  DKK: [18, "kr", "kr"],
  DOP: [2, "$", "RD$"],
  EGP: [2, "\u00a3", "LE"],
  ETB: [2, "Birr", "Birr"],
  EUR: [2, "\u20ac", "\u20ac"],
  GBP: [2, "\u00a3", "GB\u00a3"],
  HKD: [2, "$", "HK$"],
  HRK: [2, "kn", "kn"],
  HUF: [0, "Ft",
    "Ft"
  ],
  IDR: [0, "Rp", "Rp"],
  ILS: [2, "\u20aa", "IL\u20aa"],
  INR: [2, "\u20b9", "Rs"],
  IRR: [0, "Rial", "IRR"],
  ISK: [0, "kr", "kr"],
  JMD: [2, "$", "JA$"],
  JPY: [0, "\u00a5", "JP\u00a5"],
  KRW: [0, "\u20a9", "KR\u20a9"],
  LKR: [2, "Rs", "SLRs"],
  LTL: [2, "Lt", "Lt"],
  MNT: [0, "\u20ae", "MN\u20ae"],
  MVR: [2, "Rf", "MVR"],
  MXN: [2, "$", "Mex$"],
  MYR: [2, "RM", "RM"],
  NOK: [50, "kr", "NOkr"],
  PAB: [2, "B/.", "B/."],
  PEN: [2, "S/.", "S/."],
  PHP: [2, "\u20b1", "Php"],
  PKR: [0, "Rs", "PKRs."],
  PLN: [50, "z\u0142", "z\u0142"],
  RON: [2, "RON", "RON"],
  RSD: [0, "din", "RSD"],
  RUB: [50, "\u0440\u0443\u0431.",
    "\u0440\u0443\u0431."
  ],
  SAR: [2, "Rial", "Rial"],
  SEK: [2, "kr", "kr"],
  SGD: [2, "$", "S$"],
  THB: [2, "\u0e3f", "THB"],
  TRY: [2, "TL", "YTL"],
  TWD: [2, "NT$", "NT$"],
  TZS: [0, "TSh", "TSh"],
  UAH: [2, "\u20b4", "UAH"],
  USD: [2, "$", "US$"],
  UYU: [2, "$", "$U"],
  VND: [0, "\u20ab", "VN\u20ab"],
  YER: [0, "Rial", "Rial"],
  ZAR: [2, "R", "ZAR"]
};
var Ek = {
    EJ: ".",
    hK: ",",
    xK: "%",
    Jz: "0",
    UK: "+",
    oK: "-",
    $J: "E",
    AK: "\u2030",
    kK: "\u221e",
    vK: "NaN",
    hz: "#,##0.###",
    dL: "#E0",
    yK: "#,##0%",
    xJ: "\u00a4#,##0.00",
    GJ: "USD"
  },
  Fk = Ek,
  Fk = Ek;

function rca() {
  this.O = Fk.GJ;
  this.D = 40;
  this.b = 1;
  this.Ka = 0;
  this.A = 3;
  this.C = this.o = 0;
  this.wa = !1;
  this.Y = this.X = g;
  this.F = "-";
  this.G = g;
  this.B = 1;
  this.Z = 3;
  this.K = this.ka = !1;
  this.V = 0;
  switch (1) {
    case 1:
      Gk(this, Fk.hz);
      break;
    case 2:
      Gk(this, Fk.dL);
      break;
    case 3:
      Gk(this, Fk.yK);
      break;
    case 4:
      var a;
      a = Fk.xJ;
      var b = ["0"],
        c = Dk[this.O][0] & 7;
      if (0 < c) {
        b.push(".");
        for (var d = 0; d < c; d++) b.push("0")
      }
      a = a.replace(/0.00/g, b.join(g));
      Gk(this, a);
      break;
    case 5:
      Hk(this, 1);
      break;
    case 6:
      Hk(this, 2);
      break;
    default:
      throw Error("Unsupported pattern type.");
  }
}

function Gk(a, b) {
  a.Ux = b.replace(/ /g, "\u00a0");
  var c = [0];
  a.X = Ik(a, b, c);
  for (var d = c[0], e = -1, f = 0, h = 0, k = 0, m = -1, n = b.length, q = !0; c[0] < n && q; c[0] ++) switch (b.charAt(c[0])) {
    case "#":
      0 < h ? k++ : f++;
      0 <= m && 0 > e && m++;
      break;
    case "0":
      if (0 < k) throw Error('Unexpected "0" in pattern "' + b + '"');
      h++;
      0 <= m && 0 > e && m++;
      break;
    case ",":
      m = 0;
      break;
    case ".":
      if (0 <= e) throw Error('Multiple decimal separators in pattern "' + b + '"');
      e = f + h + k;
      break;
    case "E":
      if (a.K) throw Error('Multiple exponential symbols in pattern "' + b + '"');
      a.K = !0;
      a.C = 0;
      c[0] +
        1 < n && "+" == b.charAt(c[0] + 1) && (c[0] ++, a.wa = !0);
      for (; c[0] + 1 < n && "0" == b.charAt(c[0] + 1);) c[0] ++, a.C++;
      if (1 > f + h || 1 > a.C) throw Error('Malformed exponential pattern "' + b + '"');
      q = !1;
      break;
    default:
      c[0] --, q = !1
  }
  0 == h && 0 < f && 0 <= e && (h = e, 0 == h && h++, k = f - h, f = h - 1, h = 1);
  if (0 > e && 0 < k || 0 <= e && (e < f || e > f + h) || 0 == m) throw Error('Malformed pattern "' + b + '"');
  k = f + h + k;
  a.A = 0 <= e ? k - e : 0;
  0 <= e && (a.o = f + h - e, 0 > a.o && (a.o = 0));
  a.b = (0 <= e ? e : k) - f;
  a.K && (a.D = f + a.b, 0 == a.A && 0 == a.b && (a.b = 1));
  a.Z = Math.max(0, m);
  a.ka = 0 == e || e == k;
  d = c[0] - d;
  a.Y = Ik(a, b, c);
  c[0] < b.length &&
    ";" == b.charAt(c[0]) ? (c[0] ++, a.F = Ik(a, b, c), c[0] += d, a.G = Ik(a, b, c)) : (a.F = a.X + a.F, a.G += a.Y)
}

function Hk(a, b) {
  a.V = b;
  Gk(a, Fk.hz);
  a.o = 0;
  a.A = 2;
  if (0 < a.o) throw Error("Can't combine significant digits and minimum fraction digits");
  a.Ka = 2
}

function Jk(a, b) {
  var c = Math.pow(10, a.A),
    d = 0 >= a.Ka ? Math.round(b * c) : Math.round(sca(b * c, a.Ka, a.A)),
    e;
  isFinite(d) ? (e = Math.floor(d / c), c = Math.floor(d - e * c)) : (e = b, c = 0);
  return {
    IF: e,
    QO: c
  }
}

function Kk(a, b, c, d) {
  if (a.o > a.A) throw Error("Min value must be less than max value");
  b = Jk(a, b);
  var e = Math.pow(10, a.A),
    f = b.IF,
    h = b.QO,
    k = 0 < a.o || 0 < h || !1;
  b = a.o;
  k && (b = a.o);
  for (var m = g, n = f; 1E20 < n;) m = "0" + m, n = Math.round(n / 10);
  var m = n + m,
    q = Fk.EJ,
    r = Fk.hK,
    n = Fk.Jz.charCodeAt(0),
    u = m.length;
  if (0 < f || 0 < c) {
    for (f = u; f < c; f++) d.push(String.fromCharCode(n));
    for (f = 0; f < u; f++) d.push(String.fromCharCode(n + 1 * m.charAt(f))), 1 < u - f && 0 < a.Z && 1 == (u - f) % a.Z && d.push(r)
  } else k || d.push(String.fromCharCode(n));
  (a.ka || k) && d.push(q);
  a = g + (h +
    e);
  for (c = a.length;
    "0" == a.charAt(c - 1) && c > b + 1;) c--;
  for (f = 1; f < c; f++) d.push(String.fromCharCode(n + 1 * a.charAt(f)))
}

function Lk(a, b, c) {
  c.push(Fk.$J);
  0 > b ? (b = -b, c.push(Fk.oK)) : a.wa && c.push(Fk.UK);
  b = g + b;
  for (var d = Fk.Jz, e = b.length; e < a.C; e++) c.push(d);
  c.push(b)
}

function Ik(a, b, c) {
  for (var d = g, e = !1, f = b.length; c[0] < f; c[0] ++) {
    var h = b.charAt(c[0]);
    if ("'" == h) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0] ++, d += "'") : e = !e;
    else if (e) d += h;
    else switch (h) {
      case "#":
      case "0":
      case ",":
      case ".":
      case ";":
        return d;
      case "\u00a4":
        c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0] ++, d += a.O) : d += Dk[a.O][1];
        break;
      case "%":
        if (1 != a.B) throw Error("Too many percent/permill");
        a.B = 100;
        d += Fk.xK;
        break;
      case "\u2030":
        if (1 != a.B) throw Error("Too many percent/permill");
        a.B = 1E3;
        d += Fk.AK;
        break;
      default:
        d += h
    }
  }
  return d
}
var Mk = {
  prefix: g,
  EI: g,
  Vu: 0
};

function Nk(a, b) {
  var c = 1 == a.V ? Ck.vJ : Ck.uJ;
  if (3 > b) return Mk;
  b = Math.min(14, b);
  c = c[Math.pow(10, b)];
  if (!c) return Mk;
  c = c.other;
  return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
    prefix: c[1],
    EI: c[3],
    Vu: b - (c[2].length - 1)
  } : Mk : Mk
}

function Pk(a) {
  for (var b = 0; 1 <= (a /= 10);) b++;
  return b
}

function sca(a, b, c) {
  if (!a) return a;
  b = b - Pk(a) - 1;
  if (b < -c) return c = Math.pow(10, c), Math.round(a / c) * c;
  c = Math.pow(10, b);
  return Math.round(a * c) / c
};

function Qk(a) {
  return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
}
var Rk = Qk,
  Rk = Qk;

function tca(a) {
  a = a + g;
  var b = a.indexOf(".");
  return -1 == b ? 0 : a.length - b - 1
}

function Sk(a, b) {
  var c, d = a | 0;
  c = void 0 === b ? Math.min(tca(a), 3) : b;
  return 1 == d && 0 == c ? "one" : "other"
}
var Tk = Sk,
  Tk = Sk;

function Uk(a) {
  this.b = [];
  this.B = [];
  this.A = new rca;
  a && (a = uca(this, a), this.B = Vk(this, a))
}
var vca = RegExp("'([{}#].*?)'", "g"),
  wca = RegExp("''", "g");

function Wj(a, b) {
  return Wk(a, b, !1)
}

function Wk(a, b, c) {
  if (0 == a.B.length) return g;
  var d = [];
  Xk(a, a.B, b, c, d);
  for (b = d.join(g); 0 < a.b.length;) b = b.replace(a.o(a.b), a.b.pop());
  return b
}

function Xk(a, b, c, d, e) {
  for (var f = 0; f < b.length; f++) switch (b[f].type) {
    case 4:
      e.push(b[f].value);
      break;
    case 3:
      var h = b[f].value,
        k = a,
        m = e,
        n = c[h];
      x(n) ? (k.b.push(n), m.push(k.o(k.b))) : m.push("Undefined parameter - " + h);
      break;
    case 2:
      h = b[f].value;
      k = e;
      m = h.Rp;
      x(c[m]) ? (m = h[c[m]], x(m) || (m = h.other), Xk(a, m, c, d, k)) : k.push("Undefined parameter - " + m);
      break;
    case 0:
      h = b[f].value;
      Yk(a, h, c, Tk, d, e);
      break;
    case 1:
      h = b[f].value, Yk(a, h, c, Rk, d, e)
  }
}

function Yk(a, b, c, d, e, f) {
  var h = b.Rp,
    k = b.Xz,
    m = +c[h];
  if (isNaN(m)) f.push("Undefined or invalid parameter - " + h);
  else if (k = m - k, h = b[c[h]], x(h) || (d = a.A.Ba ? d(k, a.A.Ba()) : d(k), h = b[d], x(h) || (h = b.other)), b = [], Xk(a, h, c, e, b), c = b.join(g), e) f.push(c);
  else {
    a = a.A;
    if (isNaN(k)) a = Fk.vK;
    else {
      e = [];
      h = d = k;
      0 == a.V ? b = Mk : (d = Math.abs(d), h = Math.abs(h), b = Nk(a, 1 >= d ? 0 : Pk(d)).Vu, Jk(a, h / Math.pow(10, b)), d = Jk(a, d / Math.pow(10, b)), b = Nk(a, b + Pk(d.IF)));
      k /= Math.pow(10, b.Vu);
      e.push(b.prefix);
      d = 0 > k || 0 == k && 0 > 1 / k;
      e.push(d ? a.F : a.X);
      if (isFinite(k))
        if (k =
          k * (d ? -1 : 1) * a.B, a.K)
          if (0 == k) Kk(a, k, a.b, e), Lk(a, 0, e);
          else {
            h = Math.log(k) / Math.log(10);
            h = Math.floor(h + 2E-15);
            k /= Math.pow(10, h);
            m = a.b;
            if (1 < a.D && a.D > a.b) {
              for (; 0 != h % a.D;) k *= 10, h--;
              m = 1
            } else 1 > a.b ? (h++, k /= 10) : (h -= a.b - 1, k *= Math.pow(10, a.b - 1));
            Kk(a, k, m, e);
            Lk(a, h, e)
          } else Kk(a, k, a.b, e);
      else e.push(Fk.kK);
      e.push(d ? a.G : a.Y);
      e.push(b.EI);
      a = e.join(g)
    }
    f.push(c.replace(/#/g, a))
  }
}

function uca(a, b) {
  var c = a.b,
    d = A(a.o, a);
  b = b.replace(wca, function() {
    c.push("'");
    return d(c)
  });
  return b = b.replace(vca, function(a, b) {
    c.push(b);
    return d(c)
  })
}

function dl(a) {
  var b = 0,
    c = [],
    d = [],
    e = /[{}]/g;
  e.lastIndex = 0;
  for (var f; f = e.exec(a);) {
    var h = f.index;
    "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
      type: 1
    }, f.value = a.substring(b, h), d.push(f), b = h + 1)) : (0 == c.length && (b = a.substring(b, h), b != g && d.push({
      type: 0,
      value: b
    }), b = h + 1), c.push("{"))
  }
  b = a.substring(b);
  b != g && d.push({
    type: 0,
    value: b
  });
  return d
}
var el = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
  fl = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
  gl = /^\s*(\w+)\s*,\s*select\s*,/;

function Vk(a, b) {
  for (var c = [], d = dl(b), e = 0; e < d.length; e++) {
    var f = {};
    if (0 == d[e].type) f.type = 4, f.value = d[e].value;
    else if (1 == d[e].type) {
      var h = d[e].value;
      switch (el.test(h) ? 0 : fl.test(h) ? 1 : gl.test(h) ? 2 : /^\s*\w+\s*/.test(h) ? 3 : 5) {
        case 2:
          f.type = 2;
          f.value = xca(a, d[e].value);
          break;
        case 0:
          f.type = 0;
          f.value = yca(a, d[e].value);
          break;
        case 1:
          f.type = 1;
          f.value = zca(a, d[e].value);
          break;
        case 3:
          f.type = 3, f.value = d[e].value
      }
    }
    c.push(f)
  }
  return c
}

function xca(a, b) {
  var c = g;
  b = b.replace(gl, function(a, b) {
    c = b;
    return g
  });
  var d = {};
  d.Rp = c;
  for (var e = dl(b), f = 0; f < e.length;) {
    var h = e[f].value;
    f++;
    if (1 == e[f].type) var k = Vk(a, e[f].value);
    d[h.replace(/\s/g, g)] = k;
    f++
  }
  return d
}

function yca(a, b) {
  var c = g,
    d = 0;
  b = b.replace(el, function(a, b, e) {
    c = b;
    e && (d = parseInt(e, 10));
    return g
  });
  var e = {};
  e.Rp = c;
  e.Xz = d;
  for (var f = dl(b), h = 0; h < f.length;) {
    var k = f[h].value;
    h++;
    if (1 == f[h].type) var m = Vk(a, f[h].value);
    e[k.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = m;
    h++
  }
  return e
}

function zca(a, b) {
  var c = g;
  b = b.replace(fl, function(a, b) {
    c = b;
    return g
  });
  var d = {};
  d.Rp = c;
  d.Xz = 0;
  for (var e = dl(b), f = 0; f < e.length;) {
    var h = e[f].value;
    f++;
    if (1 == e[f].type) var k = Vk(a, e[f].value);
    d[h.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = k;
    f++
  }
  return d
}
Uk.prototype.o = function(a) {
  return "\ufddf_" + (a.length - 1).toString(10) + "_"
};
var Aca = ["en", 0, ".", [
    [
      [, 0],
      [" \u2013 "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [", "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1],
      ["/"],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1],
      ["/"],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      ["-"],
      [, 1],
      ["-"],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [":00"]
    ]
  ],
  [
    [
      [, 0],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [":"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [":"],
      [, 1],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [", "],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [", "],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [" \u2013 "],
      [, 2],
      [", "],
      [, 3]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [" \u2013 "],
      [, 2],
      [", "],
      [, 3]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [" \u2013 "],
      [, 2],
      [" "],
      [, 3],
      [", "],
      [, 4]
    ]
  ],
  [
    [
      [, 0],
      [" \u2013 "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" ("],
      [, 1],
      [")"]
    ]
  ],
  [
    [
      [, 0],
      [" \u2013 "],
      [, 1],
      [" "],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [", "],
      [, 1]
    ]
  ], "SMTWTFS".split(""), "Sun Mon Tue Wed Thu Fri Sat".split(" "), "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), "January February March April May June July August September October November December".split(" "),
  "January February March April May June July August September October November December".split(" "), ["a", "p"],
  ["am", "pm"],
  ["am", "pm"], "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), 0, 0, 0, [
    [
      [, 0],
      [", "],
      [, 1]
    ]
  ]
];

function hl(a) {
  xk(this, a, null)
}
C(hl, wk);

function il(a) {
  xk(this, a, Bca)
}
C(il, wk);
var Bca = [1];

function Ak(a) {
  xk(this, a, null)
}
C(Ak, wk);

function jl(a) {
  xk(this, a, null)
}
C(jl, wk);

function kl(a) {
  xk(this, a, null)
}
C(kl, wk);

function ll(a) {
  xk(this, a, null)
}
C(ll, wk);

function ml(a) {
  return yk(a, 2)
};

function nl() {
  this.b = new hl(Aca);
  this.B = ol(zk(this.b, jl, 32));
  this.A = ol(zk(this.b, jl, 33));
  this.o = ol(zk(this.b, jl, 34));
  this.G = pl(zk(this.b, kl, 35));
  this.C = pl(zk(this.b, kl, 36));
  this.D = pl(zk(this.b, kl, 37));
  this.F = pl(zk(this.b, kl, 41))
}
Va(nl);

function ol(a) {
  return [yk(a, 1), yk(a, 2), yk(a, 3), yk(a, 4), yk(a, 5), yk(a, 6), yk(a, 7)]
}

function pl(a) {
  return [, yk(a, 1), yk(a, 2), yk(a, 3), yk(a, 4), yk(a, 5), yk(a, 6), yk(a, 7), yk(a, 8), yk(a, 9), yk(a, 10), yk(a, 11), yk(a, 12)]
}

function ql(a, b) {
  return a.A[b]
}

function rl(a, b) {
  return a.o[b]
}

function sl(a) {
  return isNaN(a) ? fa : g + (a % 12 || 12)
}

function tl(a) {
  return isNaN(a) ? fa : (10 > a ? "0" : g) + a
}

function ul(a, b) {
  var c;
  isNaN(b) ? c = g : 12 > b % 24 ? (c = zk(a.b, ll, 39), c = yk(c, 1)) : c = ml(zk(a.b, ll, 39));
  return c
}

function vl(a, b) {
  var c = [];
  F(qca(a), function(a) {
    null != yk(a, 1) ? c.push(yk(a, 1)) : c.push(b[yk(a, 2)])
  });
  return c.join(g)
}

function wl(a, b, c, d) {
  return vl(zk(a.b, il, 22), [b, c, d])
}

function xl(a, b, c) {
  this.b = new Uk(a);
  this.A = new Uk(b);
  this.o = new Uk(c)
}

function yl() {
  xl.call(this, "{MINUTES, plural, =1 {1 min}other {# mins}}", "{HOURS, plural, =1 {1 hr}other {# hrs}}", "{DAYS, plural, =1 {1 day}other {# days}}")
}
C(yl, xl);

function zl() {
  xl.call(this, "{MINUTES, plural, =1 {~1 min}other {~# mins}}", "{HOURS, plural, =1 {~1 hr}other {~# hrs}}", "{DAYS, plural, =1 {~1 day}other {~# days}}")
}
C(zl, xl);

function Al() {};

function Bl(a, b, c) {
  this.o = a || new Cl;
  this.b = b || nl.L();
  this.A = x(c) ? c : !0
}
C(Bl, Al);
v = Bl.prototype;
v.xu = function(a) {
  return this.b.B[a]
};
v.Qp = function(a) {
  return this.b.o[a]
};

function Dl(a) {
  return yk(a.b.b, 1)
}

function El(a, b, c) {
  return yk(a.b.b, 2) ? String(b) : c ? a.b.G[b] : a.b.C[b]
}

function Fl(a, b, c) {
  return a.A && !yk(a.b.b, 2) ? c ? a.b.F[b] : a.b.D[b] : El(a, b, c || "ru" == Dl(a))
}
v.zb = function(a, b, c) {
  this.o.A() || isNaN(a.hour) ? (b = a.hour, a = a.minute, a = vl(zk(this.b.b, il, 16), [isNaN(b) ? fa : (10 > b ? "0" : g) + b, tl(a)])) : b && 0 == a.minute ? c ? (b = this.b, a = a.hour, a = vl(zk(b.b, il, 15), [sl(a), isNaN(a) ? g : 12 > a % 24 ? g : ml(zk(b.b, ll, 38))])) : (b = this.b, a = a.hour, a = vl(zk(b.b, il, 15), [sl(a), ul(b, a)])) : c ? (b = this.b, c = a.hour, a = a.minute, a = vl(zk(b.b, il, 17), [sl(c), tl(a), isNaN(c) ? g : 12 > c % 24 ? g : ml(zk(b.b, ll, 38))])) : (b = this.b, c = a.hour, a = a.minute, a = vl(zk(b.b, il, 17), [sl(c), tl(a), ul(b, c)]));
  return a
};
v.Om = function(a) {
  return Gl(this, a, this.o)
};
v.Mc = function(a) {
  return Hl(this, a, this.o)
};
v.Ak = function(a, b) {
  var c = b ? ql(this.b, a.Wb()) : rl(this.b, a.Wb()),
    d = this.Om(a);
  return vl(zk(this.b.b, il, 30), [c, d])
};
v.rd = Pa(40);
v.uq = Pa(41);
v.uu = function(a) {
  var b;
  1 == a.$ ? (b = Fl(this, a.month, !0), a = a.$, b = vl(zk(this.b.b, il, 21), [b, a])) : b = String(a.$);
  return b
};
v.ud = function(a, b) {
  var c = Fl(this, a.month, !0);
  if (b) var d = a.$,
    c = vl(zk(this.b.b, il, 21), [c, d]);
  else c = wl(this.b, c, a.$, a.year);
  return c
};
v.tu = function(a, b, c, d) {
  d = d || this.o.o();
  return this.ud(a, d.year == b.year && d.year == c.year)
};
v.Hg = Pa(42);
v.Nm = Pa(44);
v.Op = Pa(45);
v.Bk = function(a) {
  var b = El(this, a.month);
  a = a.year;
  return vl(zk(this.b.b, il, 20), [b, a])
};
v.Nk = Pa(47);
v.un = function(a, b, c) {
  var d = this.zb(a.start.Ub(), b, c);
  a = this.zb(a.end.Ub(), b, c);
  return vl(zk(this.b.b, il, 27), [d, a])
};
v.Pm = function(a) {
  return "ru" == Dl(this) ? a.substring(0, 1).toUpperCase() + a.substring(1) : a
};
v.Pp = function(a) {
  var b = this.Pm(ql(this.b, a.Wb()));
  a = this.Om(a);
  return vl(zk(this.b.b, il, 30), [b, a])
};
v.wu = function(a) {
  return this.Pm(this.b.A[a])
};

function Il(a, b, c, d) {
  var e = a.$,
    f = a.hour;
  a = a.minute;
  c = c || (d ? new zl : new yl);
  b && (!f || !a || a % 15 || (f += a / 60, a = 0), !e || !f || a || f % 6 || (e += f / 24, f = 0));
  b = [];
  0 !== e && b.push(Wj(c.o, {
    DAYS: e
  }));
  (0 !== f || e && a) && b.push(Wj(c.A, {
    HOURS: f
  }));
  0 !== a && b.push(Wj(c.b, {
    MINUTES: a
  }));
  return b.length ? b.join(", ") : Wj(c.b, {
    MINUTES: 0
  })
}

function Cl(a, b, c) {
  this.C = a || !1;
  this.B = b || 0;
  this.D = c || bk(new Date)
}
Cl.prototype.A = p("C");
Cl.prototype.b = p("B");
Cl.prototype.o = p("D");

function Jl(a, b, c) {
  if (b) {
    var d;
    if (d = 10 > b) d = "bg" == Dl(a) || "hi" == Dl(a) || "lv" == Dl(a) || "uk" == Dl(a) || 2 == c.b() && "ko" != Dl(a);
    a = d ? "0" + b : String(b)
  } else a = fa;
  return a
}

function Hl(a, b, c) {
  var d = Jl(a, b.$, c),
    e = Jl(a, b.month, c);
  b = b.year || "????";
  switch (c.b()) {
    case 1:
      return vl(zk(a.b.b, il, 8), [d, e, b]);
    case 2:
      return vl(zk(a.b.b, il, 13), [b, e, d]);
    default:
      return vl(zk(a.b.b, il, 12), [e, d, b])
  }
}

function Gl(a, b, c) {
  switch (c.b()) {
    case 1:
      return c = b.$, b = b.month, vl(zk(a.b.b, il, 7), [c, b]);
    case 0:
      return c = b.month, b = b.$, vl(zk(a.b.b, il, 10), [c, b]);
    case 2:
      return c = b.month, b = b.$, vl(zk(a.b.b, il, 11), [c, b]);
    default:
      return c = b.month, b = b.$, vl(zk(a.b.b, il, 10), [c, b])
  }
};

function Kl() {}
C(Kl, Cl);
var Cca = {
  MDY: 0,
  YMD: 2,
  DMY: 1
};
Kl.prototype.A = function() {
  return P(O()).Hl()
};
Kl.prototype.b = function() {
  var a = P(O()).fD();
  return Cca[a]
};
Kl.prototype.o = function() {
  return pk(Ll())
};
Va(Kl);
var Ml = new Bl(Kl.L());

function Ll() {
  return rk(O())
}

function Nl() {
  return pk(Ll())
};

function Ol() {
  M.call(this)
}
C(Ol, M);
v = Ol.prototype;
v.Hx = null;
v.OG = null;
v.LG = null;
v.zt = function(a, b, c) {
  this.xe(c)
};
v.xe = function(a) {
  this.zt(a, a, a)
};
v.xq = function(a) {
  this.xe(Sg(0 < a ? this.Xb : this.first, a))
};
v.contains = function(a) {
  a = a.Ca();
  return a.ya() >= this.first.ya() && a.ya() <= this.Xb.ya()
};

function Pl(a) {
  return Ng(a.Xb, a.first) + 1
}
v.Gg = function() {
  this.Hx && this.focus.equals(this.LG) && this.first.equals(this.Hx) && this.Xb.equals(this.OG) || (this.LG = this.focus, this.Hx = this.first, this.OG = this.Xb, this.P(l))
};
v.set = function(a, b, c) {
  this.first = a;
  this.Xb = b;
  this.focus = c;
  this.Gg()
};

function Ql(a, b) {
  M.call(this);
  this.o = b;
  this.A = a;
  this.b = 1;
  this.ra = new N(this);
  this.ra.I(this.o, "j", this.gP)
}
C(Ql, Ol);
v = Ql.prototype;
v.Ix = null;
v.M = function() {
  I(this.ra);
  Ql.J.M.call(this)
};

function Rl(a, b) {
  if (!a.focus) a.focus = b;
  else if (!a.contains(a.focus)) {
    var c = pk(a.A);
    a.contains(c) ? a.focus = c : b.ya() < a.first.ya() ? a.focus = a.first : b.ya() > a.Xb.ya() ? a.focus = a.Xb : a.focus = b
  }
}

function Sl(a, b, c, d) {
  var e = b;
  7 < c && 0 == c % 7 && (b = Ug(b, a.o.tc()));
  a.first = b;
  a.Xb = Sg(b, c - 1);
  Rl(a, e);
  a.b = 1;
  d || a.Gg()
}
v.Gg = function() {
  Ql.J.Gg.call(this);
  this.Ix && this.b == this.Ix ? 1 == this.b && this.P("k") : (this.Ix = this.b, this.P("k"))
};

function Tl(a, b, c, d, e) {
  var f = b.year,
    h = b.month;
  b = Qg(f, h, 1);
  f = Qg(f, h, Bg(f, h));
  c || (f = Ug(f, a.o.sj()), b = Vg(b, a.o.sj() + a.o.Qf() - 1));
  d && (b = Ug(b, a.o.tc()), f = Vg(f, a.o.tc() + 6));
  e.first = b;
  e.Xb = f
}

function Ul(a, b, c) {
  Tl(a, b, a.o.xg(), !1, a);
  Rl(a, b);
  Tl(a, b, a.o.xg(), !0, a);
  a.b = 3;
  c || a.Gg()
}

function Vl(a, b, c, d) {
  var e = x(c) ? c : a.o.xg();
  c = Ug(b, a.o.tc());
  e || (c = Vg(c, a.o.sj()));
  a.first = c;
  e = a.o.Tq(e);
  a.Xb = Sg(c, e - 1);
  Rl(a, b);
  a.b = 2;
  d || a.Gg()
}
v.xe = function(a) {
  this.focus = a;
  this.contains(a) ? 3 == this.b || this.first.equals(this.Xb) ? Vl(this, a) : Sl(this, a, 1) : Wl(this)
};

function Wl(a, b, c) {
  var d = a.focus;
  if (3 == a.b) Ul(a, d, c);
  else if (2 == a.b) {
    var e = 7 == Pl(a);
    b = b ? a.o.xg() : e;
    Vl(a, d, b, c)
  } else 7 < Pl(a) ? d = Ug(d, a.o.tc()) : d == a.Xb && (d = a.first), Sl(a, d, Pl(a), c)
}
v.zt = function(a, b, c) {
  this.first = a;
  this.Xb = b;
  this.focus = c;
  7 < Pl(this) && (this.first = Ug(this.first, this.o.tc()), this.Xb = Vg(this.Xb, this.o.tc() + 6));
  a = this.first;
  b = this.Xb;
  var d = Pl(this);
  c = this.o.xg();
  this.b = 1;
  var e = c ? this.o.tc() : this.o.sj();
  d == this.o.Tq() && a.Wb() == e ? this.b = 2 : (d = Sg(a, 10), e = {}, Tl(this, d, c, !0, e), a.equals(e.first) && b.equals(e.Xb) && (b = d.month, this.b = 3, this.focus.month != b && (c = d.year, d = Qg(c, b, 1), this.focus = this.focus.ya() < a.ya() ? d : Qg(c, b, Bg(c, b)))));
  this.Gg()
};
v.xq = function(a) {
  if (3 == this.b) Ul(this, Tg(this.focus.year, this.focus.month + a, 1).Ca());
  else {
    var b = 2 == this.b ? 7 : Pl(this);
    this.first = Sg(this.first, a * b);
    this.Xb = Sg(this.Xb, a * b);
    Rl(this, Sg(this.focus, a * b));
    this.Gg()
  }
};
v.gP = function() {
  Wl(this, !0)
};

function Xl(a, b, c) {
  1 == b && c ? Sl(a, a.focus, c) : (a.b = b, Wl(a, !0))
};

function Yl(a, b, c) {
  this.o = Ob(a);
  this.A = b;
  this.b = c ? Wb(c, ed) : null
}

function Zl(a, b) {
  var c = $l(a),
    d = dh(b, "showDeclined", "true");
  return new Yl(c, d)
}

function am(a, b) {
  bm(a);
  return b.Fa() in a.D && (!a.b || b.getId() in a.b) ? a.A || 2 != b.Nc : !1
}
Yl.prototype.getKey = function() {
  bm(this);
  return this.B
};

function bm(a) {
  a.o && (a.o.sort(), a.B = a.o.join(" ") + "/" + a.A + "/" + !!a.b, a.D = hc(a.o), a.o = null)
};

function T(a, b) {
  this.A = a;
  this.B = !!b
}
var Dca = />(\s+)</g,
  Eca = /\s{2,}/g,
  Fca = /\$\{(\w+)\}/g;
v = T.prototype;
v.Hv = !1;

function cm(a) {
  if (!a.Hv) {
    var b = a.A;
    delete a.A;
    a.B || (b = b.replace(Dca, "><").replace(Eca, " "));
    var c = [];
    a.o = c;
    a.b = {};
    for (var d = b.match(Fca) || [], e = 0, f = d.length, h = 0; h < f; ++h) {
      var k = d[h],
        m = b.indexOf(k, e);
      e != m && c.push(b.substring(e, m));
      e = m + k.length;
      k = k.substring(2, k.length - 1);
      m = a.b[k];
      m || (m = [], a.b[k] = m);
      m.push(c.length);
      c.push(void 0)
    }
    e != b.length && c.push(b.substring(e));
    a.Hv = !0
  }
}
v.clone = function() {
  cm(this);
  var a = new T(g);
  a.Hv = !0;
  a.o = [].concat(this.o);
  a.b = {};
  for (var b in this.b) a.b[b] = this.b[b];
  return a
};
v.put = function(a, b) {
  cm(this);
  var c = this.b[a],
    d = c.length;
  if (1 == d) this.o[c[0]] = b;
  else
    for (; d--;) this.o[c[d]] = b
};

function dm(a, b) {
  for (var c in b) a.put(c, b[c]);
  return a.toString()
}
v.toString = function() {
  cm(this);
  return this.o.join(g)
};
v.wb = function() {
  var a = {},
    b;
  for (b in this.b) a[b] = null;
  return a
};

function em() {
  this.kc = []
}
v = em.prototype;
v.top = 0;
v.gn = 0;
v.jn = "px";
v.Dv = "left";
v.height = g;
v.width = 100;
v.Uy = "%";
v.text = g;
v.Fq = t(g);
var fm = {};

function gm(a) {
  var b = 2 * a + 1,
    c = fm[b];
  c || (c = [], a && (c.push("direction:rtl"), G && c.push("zoom:1")), c = c.join(";"), fm[b] = c);
  return c
}

function hm(a, b) {
  var c = ke(a),
    d = b || a;
  return c ? "<" == d.charAt(0) ? d.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + d + "</span>" : d
}

function Ij(a) {
  if (a && ge.test(a)) {
    var b = ge.test(a) ? "\u200f" : "\u200e";
    a = "\u202b" + a.replace(uba, b + "$&" + b) + "\u202c"
  }
  return a
}

function im(a) {
  return Ij(E(a))
};
var jm = !1,
  km = new T('<i class="cic ${specialIcon} ${icon}" title="${title}">&nbsp;</i>');

function Pj(a, b, c) {
  var d = g;
  b ? d += "cic-dm " : c && (d += "cic-l ");
  km.put("icon", a);
  km.put("specialIcon", d);
  km.put("title", lm(a));
  return km.toString()
}

function mm(a, b) {
  var c = wg(),
    d;
  d = g;
  switch (a) {
    case pa:
      d = "Responded maybe";
      break;
    case ma:
      d = "Not yet responded";
      break;
    case "cic-de":
      d = "Responded no";
      break;
    case ta:
      d = Od(106) ? "This event has notifications." : "This event has reminders.";
      break;
    case oa:
      d = "This event has invited guests.";
      break;
    case la:
      d = "All invited guests have declined this event.";
      break;
    case ra:
      d = "This recurring event is part of a series.";
      break;
    case sa:
      d = "This recurring event has been changed and is no longer part of a series.";
      break;
    case na:
      d =
        "This event is private.";
      break;
    case ka:
      d = "Appointment slots"
  }
  d = E(d);
  return wb('<img role=presentation src="', c, '" class="cic ', a + "-inv", " ", b || g, '" alt="', d, '" title="', lm(a), '"> ')
}

function lm(a) {
  if (!jm) return g;
  var b = g;
  switch (a) {
    case pa:
      b = "Responded maybe";
      break;
    case ma:
      b = "Not yet responded";
      break;
    case "cic-de":
      b = "Responded no";
      break;
    case ta:
      b = Od(106) ? "Notifications" : "Reminders";
      break;
    case oa:
      b = "Guests";
      break;
    case la:
      b = "All guests declined";
      break;
    case ra:
      b = "Recurring event";
      break;
    case sa:
      b = "Edited recurring event";
      break;
    case na:
      b = "Private";
      break;
    case ka:
      b = "Appointment slots"
  }
  return E(b)
};

function nm() {
  this.kc = []
}
C(nm, em);
var om = !1,
  pm = 0;
v = nm.prototype;
v.Ig = 0;
v.Ly = g;
v.WB = g;
v.rA = g;
v.iv = null;
v.Bu = "#fff";
v.iA = "#000";
v.qA = "#000";

function qm(a, b, c) {
  a.Ig = c ? a.Ig | b : a.Ig & ~b
}

function rm(a, b, c, d, e) {
  a = vi(a);
  c = c || 0;
  var f = !1;
  om && 2 == c && (c = 4, f = !0);
  var h, k, m, n = a.o;
  switch (c) {
    case 1:
      h = a.O;
      k = a.X;
      m = a.La;
      break;
    case 2:
      h = a.b;
      k = a.D;
      m = a.C;
      n = a.Ga;
      f = !0;
      break;
    case 3:
      h = a.Y;
      k = a.Ka;
      m = a.ka;
      n = b ? a.wa : a.V;
      break;
    default:
      h = a.A, k = a.B, m = a.ub
  }
  b && (h == k ? k = h = a.b : (h = a.b, k = a.D), m = a.C, n = 2 == c ? a.Ba : a.G, f = !0);
  e && (h = e, b && (h = ri(h)));
  d = x(d) ? d : 1;
  1 > d && 2 != c && !b && (b = Dh(a.b, h, d), h == k ? k = h = b : (h = b, k = Dh(a.D, k, d)), 3 != c && a.C && (m = Dh(a.C, m, d)));
  return {
    bgColor: h,
    borderColor: k,
    yM: m,
    textColor: n,
    qO: f
  }
}

function sm(a, b, c, d) {
  var e = null,
    f = null;
  if (c) {
    var h = gm(ke(c));
    h && (e = '<div style="' + h + '">', f = "</div>")
  }
  om && c && "caption" == d && (h = b.indexOf(Qa(g, g)), b = b.substring(0, h) + b.substring(h).replace(c, "<span class=cbrdcc>" + c + "</span>"));
  a.put(d, b || g);
  a.put(d + "BidiStart", e || g);
  a.put(d + "BidiEnd", f || g)
}
v.Fq = function() {
  this.o = tm.L().b[this.Ig];
  this.o.put("classes", this.kc.join(" "));
  var a = [];
  this.Ig & 1 && a.push("cro");
  this.Ig & 2 || a.push("cbrd");
  this.o.put("extraClasses", a.join(" "));
  this.o.put("top", this.top);
  om && 0 == this.gn && "%" == this.jn && (this.gn = -1, this.jn = "px");
  this.o.put("offset", this.gn);
  this.o.put("offsetUnit", this.jn);
  this.o.put("edge", this.Dv);
  this.o.put("width", this.width);
  this.o.put("widthUnit", this.Uy);
  om && (this.o.put("maskHeight", this.height - (this.Ig & 2 ? 5 : 3) - 1 + "px"), this.Ig & 16 && this.o.put("bgHeight",
    this.height + "px"));
  a = this.height;
  this.o.put("height", a ? a - pm - (this.Ig & 2 ? 5 : 3) + "px" : "auto");
  this.o.put("borderColor", this.iA);
  this.o.put("bgColor", this.Bu);
  this.o.put("captionColor", this.qA);
  this.o.put("textColor", this.b ? "color:" + this.b + ";" : g);
  sm(this.o, this.WB, this.rA, "caption");
  sm(this.o, this.text, this.text, "text");
  this.Ly && this.o.put("titleClass", this.Ly);
  this.o.put("beforeIcons", g);
  this.o.put("icons", g);
  this.A && (this.o.put("userId", this.C), this.o.put("organizerPictureFade", this.B ? "cpic-fade" : g),
    this.o.put("picRot", this.D & 1 ? "cpic-rot-left" : "cpic-rot-right"), this.o.put("organizerPictureSrc", this.A));
  return this.o.toString()
};

function um() {}

function vm(a, b) {
  return a ? '<span class="${titleClass}">' + b + "</span>" : b
}

function wm(a) {
  return '<dt style="background-color:${captionColor};">${captionBidiStart}${beforeIcons}' + vm(a, "${caption}") + "${icons}${captionBidiEnd}</dt>"
}

function xm(a) {
  return "${textBidiStart}" + vm(a, "${text}") + "${textBidiEnd}"
}
var ym = um.prototype;
ym.b = "border-color:${borderColor};background-color:${bgColor};";
var zm = '<div class="cb1" style="' + ym.b + '">&nbsp;</div>';
ym.K = '<div class="ct" style="border-bottom-color:${borderColor}">&nbsp;</div>';
ym.G = '<div class="cb2" style="border-color:${borderColor};">&nbsp;</div>' + zm;
ym.o = zm + '<div class="cb2" style="border-color:${borderColor};">&nbsp;</div>';
ym.V = wm(!1);
ym.O = wm(!0);
ym.Z = "<dd>" + xm(!1) + "</dd>";
ym.F = "<dd>" + xm(!0) + "</dd>";
var Am = ym.b;
ym.B = wb('<div><div class="mask mask-top" style="', Am, '">&nbsp;</div><div class="mask mask-bottom" style="', Am, '">&nbsp;</div><div class="mask mask-left" style="height:${maskHeight};', Am, '">&nbsp;</div><div class="mask mask-right" style="height:${maskHeight};', Am, '">&nbsp;</div></div>');
ym.A = wb('<div class="rsvp-no-bg" style="top:${top}px;${edge}:${offset}${offsetUnit};height:${bgHeight};width:${width}${widthUnit};">&nbsp;</div>');
ym.C = '<div class="resizer"><div class="rszr-icon">&nbsp;</div></div>';
ym.D = '<div class="g-hovercard cpic ${organizerPictureFade} ${picRot}" data-userid="${userId}" style="border-color:${borderColor};"><img src="${organizerPictureSrc}?sz=24" height="24px" width="24px"></div>';
var Bm = new T('${templateContentSpecialBackground}<div class="$[classes] chip ${organizerPictureClass}" style="top:$[top]px;$[edge]:$[offset]$[offsetUnit];width:$[width]$[widthUnit];"> ${templateContentPre}<dl class="$[extraClasses]" style="height:$[height];${templateColors}$[textColor]">${templateContent}</dl>${templateContentPost}${organizerPicture}</div>');

function tm() {
  this.b = [];
  for (var a = new um, b = 0; 64 > b; b++) {
    var c;
    c = a;
    var d = !!(b & 1),
      e = !!(b & 2),
      f = !!(b & 4),
      h = !!(b & 8),
      k = !!(b & 32);
    if (f && d) c = null;
    else {
      d = {
        templateColors: c.b,
        templateContentPre: e ? d ? c.G : c.K : g,
        organizerPicture: k ? c.D : g,
        organizerPictureClass: k ? "corg" : g,
        templateContentPost: e ? c.o : g
      };
      d.templateContentSpecialBackground = om && b & 16 ? c.A : g;
      e = g;
      e = c.V + (h ? c.F : c.Z);
      om && (e += c.B);
      f && (e += c.C);
      d.templateContent = e;
      c = void 0;
      for (c in d) Bm.put(c, d[c]);
      c = Bm.toString().replace(/\[/g, "{").replace(/\]/g, "}");
      c = new T(c)
    }
    c &&
      (this.b[b] = c)
  }
}
Va(tm);
G && zc(8);
var Cm = {};

function Dm() {
  throw Error("Do not instantiate directly");
}
Dm.prototype.Vm = null;
Dm.prototype.getContent = p("content");
Dm.prototype.toString = p("content");

function Em() {
  Dm.call(this)
}
C(Em, Dm);
Em.prototype.Ye = Cm;
var Fm = function(a) {
    function b(a) {
      this.content = a
    }
    b.prototype = a.prototype;
    return function(a, d) {
      var e = new b(String(a));
      void 0 !== d && (e.Vm = d);
      return e
    }
  }(Em),
  Gm = function(a) {
    function b(a) {
      this.content = a
    }
    b.prototype = a.prototype;
    return function(a, d) {
      var e = String(a);
      if (!e) return g;
      e = new b(e);
      void 0 !== d && (e.Vm = d);
      return e
    }
  }(Em);

function Hm(a, b) {
  this.ac = a;
  this.D = b || g
}
Hm.prototype.setTitle = Na("D");

function Im(a) {
  Hm.call(this, 4 < a.title.length ? 60 : a.V ? 45 : 40, a.title);
  this.K = a.G;
  this.F = a.C;
  this.C = a.D;
  this.A = a.F
}
C(Im, Hm);
Im.prototype.G = p("C");
Im.prototype.B = function(a, b, c, d, e, f) {
  Jm(this, a, b, c, d, e, !0, f)
};

function Jm(a, b, c, d, e, f, h, k) {
  k.push('<td class="', a.A.Zk(), c ? g : " tg-timesnotlast", '">');
  k.push(g);
  for (c = f - 1; e < f; ++e) {
    var m = h && e == c ? a.A.getItem() + " " + a.A.b : a.A.getItem(),
      n = b,
      q = Km(a, e);
    k.push('<div style="height:' + n + 'px;"><div class="' + m + '" style="height:' + (n - 1) + 'px;">' + q + "</div></div>")
  }
  k.push(d, "</td>")
}

function Km(a, b) {
  return Lm(a.F, b, a.K)
}

function Lm(a, b, c) {
  b = gk(2E3, 1, 1, b, c, 0);
  return a.zb(b.Ja(), !0)
}

function Mm(a, b, c, d, e, f, h) {
  var k = a.length;
  h = h || new Nm;
  var m = Mg(b.start);
  m.second += b.duration.o / 2;
  b = m.Ja();
  for (var m = [], n = 0; n < k; n++) {
    var q = ub(a[n].Qd, "30"),
      r = 0 == n;
    h.title = a[n].A;
    h.G = a[n].b(b);
    h.F = r ? e : f;
    h.C = d;
    h.V = q && !c;
    h.D = r;
    m.push(h.A())
  }
  m.reverse();
  return m
}

function Nm() {}
Nm.prototype.D = !0;
Nm.prototype.A = function() {
  return new Im(this)
};

function Om(a, b, c) {
  this.o = a;
  this.A = b;
  this.b = c
}
Om.prototype.Zk = p("o");
Om.prototype.getItem = p("A");
var Pm = new Om("tg-times-pri", "tg-time-pri", "tg-time-pri-last"),
  Qm = new Om("tg-times-sec", "tg-time-sec", "tg-time-sec-last");

function Rm(a, b) {
  this.start = a < b ? a : b;
  this.end = a < b ? b : a
}
Rm.prototype.clone = function() {
  return new Rm(this.start, this.end)
};
var Sm = G && !Ac(8) ? '<table style="table-layout:fixed" cellpadding=0 cellspacing=0><tr><td>' : g,
  Tm = G && !Ac(8) ? "</tr></td></table>" : g,
  Um = 0;

function Vm() {
  if (Um) return Um;
  var a = document.createElement("div");
  a.style.cssText = "visibility:hidden;overflow-y:scroll;position:absolute;top:0;width:100px;height:100px";
  document.body.appendChild(a);
  Um = a.offsetWidth - a.clientWidth || 18;
  document.body.removeChild(a);
  return Um
};

function Wm(a) {
  a = a.className;
  return Za(a) && a.match(/\S+/g) || []
}

function Xm(a, b) {
  var c = Wm(a);
  Ym(c, Pb(arguments, 1));
  a.className = c.join(" ")
}

function Zm(a, b) {
  var c = Wm(a),
    c = $m(c, Pb(arguments, 1));
  a.className = c.join(" ")
}

function Ym(a, b) {
  for (var c = 0; c < b.length; c++) Ib(a, b[c]) || a.push(b[c])
}

function $m(a, b) {
  return Cb(a, function(a) {
    return !Ib(b, a)
  })
}

function an(a, b, c) {
  var d = Wm(a);
  Za(b) ? Lb(d, b) : Xa(b) && (d = $m(d, b));
  Za(c) && !Ib(d, c) ? d.push(c) : Xa(c) && Ym(d, c);
  a.className = d.join(" ")
}

function bn(a, b, c) {
  c ? Xm(a, b) : Zm(a, b)
};

function cn(a) {
  return "ca-evp" + eb(a)
}

function dn(a) {
  return "evt-lk ca-elp" + eb(a)
};
var en = lc("Firefox"),
  fn = oc() || lc("iPod"),
  gn = lc("iPad"),
  Gca = lc("Android") && !(nc() || lc("Firefox") || mc() || lc("Silk")),
  hn = nc(),
  jn = lc("Safari") && !(nc() || lc("Coast") || mc() || lc("Silk") || lc("Android")) && !(oc() || lc("iPad") || lc("iPod"));

function kn(a) {
  this.o = a
}
kn.prototype.C = 0;
kn.prototype.D = 0;

function ln(a, b, c) {
  a.C = b;
  a.D = c
}

function mn(a, b, c) {
  var d = a.C * c.b;
  a = (c.D - a.D) * c.b;
  var e = Math.round((c.lm / 60 - c.A) * c.b),
    e = Math.max(d, e);
  b.top = e;
  b.gn = 100 * c.left;
  b.jn = "%";
  b.Dv = "left";
  d = Math.round((c.o / 60 - c.A) * c.b);
  d = Math.min(d, a);
  d = Math.max(d - e, c.b / 2);
  b.height = d;
  b.width = 100 * c.width;
  b.Uy = "%"
}

function nn() {
  this.o = null
}
C(nn, kn);
nn.prototype.A = t(g);
nn.prototype.B = z;
var Hca = new nn;

function on() {}

function pn(a) {
  var b = new on;
  b.lm = a;
  return b
}
on.prototype.C = !1;
on.prototype.B = !0;

function qn(a, b, c) {
  this.o = a;
  this.F = b;
  this.b = c
}
C(qn, kn);
qn.prototype.A = function(a, b, c) {
  var d = a.event,
    e = new nm;
  qm(e, 2, Ica && this.b.yk());
  var f = Jj(d),
    h = this.b.bx(d),
    k = this.b.Mf(d),
    m = 0;
  f ? m = 3 : this.b.di(d) ? m = 2 : this.b.Ij(d) && (m = 1);
  var n = this.b.Xk(d),
    q = ki(d),
    r = this.b.pf(d),
    m = rm(k, r, m, n, q);
  e.iv = k;
  e.Bu = m.bgColor;
  e.iA = m.borderColor;
  e.qA = m.yM;
  e.b = m.textColor;
  e.B = m.qO;
  mn(this, e, a);
  k = this.b.Ij(d);
  m = this.b.Ko();
  qm(e, 1, k);
  k && m && (k = e.iv ? wi(e.iv, e.Bu) : 15, e.kc.push("ro-chip-" + k));
  k = this.b.di(d);
  qm(e, 16, k);
  k && e.kc.push("rsvp-no-chip");
  k = this.b.Gl(d);
  qm(e, 4, k);
  d.Ec() && a.B &&
    !d.of() && (k = d.getId().charCodeAt(1), m = this.b.Qq(d), n = d.Ec() ? d.Fc : null, e.A = m, e.D = k, e.C = n, qm(e, 32, !!m));
  k = this.b.Rh(d);
  h ? (h = rn(this, d.Ma()), m = g, e.text = k) : 30 < a.o - a.lm ? (h = rn(this, d.Ma(), d.fb()), m = g, e.text = k) : (a.C && (k = g), h = rn(this, d.Ma(), d.fb(), k), m = k);
  h = this.b.nj(d, !0) + h + " " + this.b.pj(d, !0);
  e.WB = h;
  e.rA = m || g;
  h = cn(d);
  e.kc.push(h);
  f && e.kc.push("av-chip");
  d = dn(d);
  e.Ly = d;
  qm(e, 8, !!d);
  0 < a.left && (e.kc.push("chip-border"), (a = c && c.Ca()) && b == a ? e.kc.push("chip-color-today") : e.kc.push("chip-color"));
  return e.Fq()
};

function rn(a, b, c, d) {
  b = a.F.zb(b.Ub(), !0, !0);
  return c ? Qa(b, d || a.F.zb(c.Ub(), !0, !0)) : "At " + b
}
qn.prototype.B = Pa(48);
var Ica = !(rc || en);

function sn(a, b, c) {
  this.o = a;
  this.B = b;
  this.A = c
}
v = sn.prototype;
v.jB = t(g);
v.iB = t(g);
v.WH = z;
v.VH = z;

function tn(a) {
  return a.Ha() ? a.B : 0
}
v.Ha = p("o");
v.setVisible = Pa(49);

function un() {
  sn.call(this, !1, 0, 0)
}
C(un, sn);
un.prototype.Ha = t(!1);

function vn(a, b, c, d, e, f, h, k, m, n) {
  H.call(this);
  this.K = a;
  this.B = b;
  this.V = c;
  this.o = d;
  this.Z = d / 2;
  this.G = e;
  this.O = f;
  this.A = h;
  this.C = k ? 0 : 1;
  this.D = m;
  this.F = n
}
C(vn, H);
vn.prototype.Q = null;
vn.prototype.b = null;
vn.prototype.M = function() {
  vn.J.M.call(this)
};
vn.prototype.H = Pa(17);

function wn(a) {
  dg.call(this, a.t, Jf(a.i));
  this.b = a;
  this.b.u = Kf(this.b.u)
}
C(wn, dg);
var Jca = gc([2, 1, 0, 3]);
wn.prototype.getHeight = Pa(22);
wn.prototype.getUrl = function() {
  return this.b.u
};
wn.prototype.getType = function() {
  return Jca[this.b.p] || 2
};

function xn(a, b) {
  this.o = a;
  this.b = b
}
xn.prototype.getUrl = p("o");
xn.prototype.getTitle = p("b");
xn.prototype.setTitle = Na("b");

function Kca(a) {
  return !a || 2 > a.length ? null : new xn(a[0], a[1])
};

function yn(a, b, c, d, e) {
  if (0 <= a.indexOf(":")) throw Error("id " + a + " contains a colon");
  this.Xa = a;
  this.o = b;
  this.b = c;
  this.Lf = 1 == b ? d : -1;
  this.Rk = e || -1
}
v = yn.prototype;
v.Fa = p("Xa");
v.getType = p("o");
v.Fb = p("b");

function zn(a) {
  return a.Fa() + ":" + a.getType() + ":" + a.Fb() + ":" + a.Lf + ":" + a.Rk
}

function An(a, b) {
  var c = a.match(/^(\d+):(-?\d+):(-?\d+)$/);
  return c ? 0 <= parseInt(c[3], 10) ? new yn(b, 1, parseInt(c[1], 10), parseInt(c[2], 10)) : null : null
}

function Bn(a, b) {
  if (null == a) return null;
  for (var c = [], d = 0; d < a.length; d++) {
    var e = An(a[d], b);
    e && c.push(e)
  }
  return c
}
v.toString = function() {
  return zn(this)
};
v.equals = function(a) {
  return this.Fa() == a.Fa() && this.getType() == a.getType() && this.Fb() == a.Fb() && this.Lf == a.Lf && this.Rk == a.Rk
};

function Cn(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, Q, Z) {
  fg.call(this, a, c, d, m, y);
  Dn(this, b, e, f, h, k, n, q, r, u, w, D, L, Q, Z)
}
C(Cn, fg);
var Lca = RegExp("\u0001", "g"),
  Mca = RegExp("\u0002", "g");
v = Cn.prototype;
v.$j = function(a, b) {
  Cn.J.$j.call(this, a.Ja(), b.Ja());
  var c = isNaN(a.hour);
  this.o = c;
  this.X = !c && this.X;
  this.uf = a.ib();
  c = b.ib();
  if (c == this.uf || b.hour || b.minute || b.second) c = mg(c);
  this.Ff = c
};
v.Mr = function() {
  return "CONTACTS" == this.b["goo.virtualEventType"]
};
v.update = function(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, Q, Z) {
  this.ka = a;
  this.$j(c, d);
  this.Vi = m ? m : 0;
  this.F = y || {};
  Dn(this, b, e, f, h, k, n, q, r, u, w, D, L, Q, Z)
};

function Dn(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y) {
  a.setTitle(b || g);
  a.Xa = d;
  a.od = k || g;
  a.Fc = c || g;
  a.Pc = e || g;
  pg.L();
  a.rg(f & 7);
  a.D = f;
  a.Vj = h;
  Za(n) ? n != a.B && (a.B = n, a.C = void 0) : n != a.C && (a.C = n, a.B = void 0);
  a.A = m;
  a.b = q || {};
  a.G = r;
  x(u) && (a.Y = u);
  w ? a.K = w : a.K || (a.K = new Nca);
  x(y) ? a.O = y : a.O = null;
  a.Z = null;
  a.Ka = null
}

function Gn(a) {
  if (!a.C) {
    var b;
    if (a.B)
      if (b = a.B, 0 == b.length) b = {};
      else {
        b = b.split("\u0001");
        for (var c = b.length, d = {}, e = 0; e < c; ++e) {
          var f = b[e].split("\u0002"),
            h = {};
          h.mb = Number(f[1]);
          h.Jj = !!f[2];
          h.Gd = f[3] || null;
          h.jg = f[4] | 0;
          h.wh = f[5] || null;
          d[f[0]] = h
        }
        b = d
      } else b = {};
    a.C = b
  }
  return a.C
}

function Hn(a) {
  return Zb(Gn(a))
}

function In(a, b) {
  var c = Gn(a)[b];
  return c ? dc(c) : c
}

function Oj(a, b) {
  return (a.D & b) == b
}
v.rg = function(a) {
  Cn.J.rg.call(this, a);
  this.D &= -8;
  this.D |= a
};
v.of = function() {
  return Oj(this, 32)
};
v.Oe = function() {
  return Oj(this, 512)
};
v.ob = function() {
  return Oj(this, 256)
};

function Sj(a) {
  return Oj(a, 2048) && !Oj(a, 8192)
}
v.gx = function() {
  return Oj(this, 4096)
};
v.Tb = function() {
  return Oj(this, 1048576)
};
v.wg = Pa(50);
v.Id = function() {
  if (!this.Ka) {
    var a = this.b && this.b["goo.richContent"];
    a && (this.Ka = new wn(a))
  }
  return this.Ka || null
};

function Nca() {
  this.B = this.o = this.A = this.D = this.b = void 0
}
v.clone = function() {
  var a = new Cn(this.getId(), this.getTitle(), this.Ma(), this.fb(), this.Fc, this.Fa(), this.Pc, this.D, this.Vi, this.Vj, this.od, this.A, void 0, this.b, this.F, this.G ? Ob(this.G) : null, this.Ok());
  a.Sd = this.Sd;
  a.K = dc(this.K);
  a.O = this.O ? this.O : null;
  a.Z = this.Z ? Ob(this.Z) : null;
  a.B = this.B;
  this.C && (a.C = dc(this.C));
  return a
};

function Oca(a, b, c, d) {
  this.event = a;
  this.lm = b;
  this.b = c;
  this.$M = d;
  this.bt = []
};

function Jn(a, b, c, d, e) {
  this.G = new qn(Bi(), a, b);
  this.A = c || "tg";
  this.V = d || !1;
  this.Ka = e || "tg-gutter";
  b = new Nm;
  b.title = g;
  b.G = 0;
  b.C = a;
  b.F = Pm;
  this.D = [b.A()];
  this.Z = [];
  this.X = [];
  this.O = [];
  this.B = new un;
  this.b = 0;
  this.o = 24;
  this.Z.push(Pca);
  this.O.push(Qca)
}
Jn.prototype.K = null;
Jn.prototype.C = null;
Jn.prototype.Y = 0;

function Kn(a, b, c) {
  a.b = b;
  a.o = c
}

function Ln(a, b) {
  a.D = b;
  for (var c = 0, d = 0; d < b.length; d++) {
    var e = b[d];
    if (e.G && e.C) break;
    c += e.ac
  }
  a.Y = c
}

function Mn(a) {
  for (var b = 0, c = 0, d = a.D.length; c < d; c++) b += a.D[c].ac;
  return b
}

function Nn(a, b) {
  return 42 * (b.hour + b.minute / 60 - a.b) | 0
}

function Rca(a, b, c, d) {
  var e = a.G;
  if (a.F)
    for (var f in a.F)
      if (a.F[f].J0(b, c)) {
        e = a.F[f].W0;
        break
      }
  f = pn(b.lm);
  f.o = b.b;
  f.event = b.event;
  f.left = b.left;
  f.width = b.oO;
  f.b = 42;
  f.A = a.b;
  f.B = !b.QN;
  f.D = a.o - a.b;
  return e.A(f, c, d)
}

function On(a, b, c, d) {
  var e = a.F || {};
  e[b] = {
    J0: c,
    W0: d
  };
  a.F = e
}

function Pca(a, b, c, d, e) {
  var f;
  (a = e && e.Ca()) && b == a && (f = '<div class="tg-today" style="' + Pn(d) + '">&nbsp;</div>');
  return f
}

function Qca(a, b, c, d, e) {
  var f;
  a = e && e.Ca();
  b == a && (f = '<div class="tg-hourmarker tg-nowmarker" id="' + d.A + 'nowmarker" style="top:' + Nn(d, e) + "px;" + (Qn(d, e) ? g : "display: none;") + '"> </div>');
  return f
}

function Pn(a) {
  a = 42 * (a.o - a.b);
  return "height:" + a + "px;margin-bottom:-" + a + "px;"
}
Jn.prototype.render = function(a, b, c) {
  var d = a.length,
    e = this.K,
    f = Pn(this),
    h = 42 * (this.o - this.b) + 2;
  e.push('<div class="tg-mainwrapper" style="margin-top:', tn(this.B), 'px;"><table id="', this.A, 'Table" class="tg-timedevents" cellpadding="0" cellspacing="0" style="height:', h, 'px">');
  var k = c || null,
    h = this.D;
  e.push('<tr height="1">');
  for (var m = 0, n = h.length; m < n; m++) e.push('<td style="width:', h[m].ac, 'px;"></td>');
  e.push('<td colspan="', d, '"><div class="tg-spanningwrapper"><div class="tg-hourmarkers">');
  this.B.WH(42,
    e);
  for (m = this.b; m < this.o; m++) e.push('<div class="tg-markercell"><div class="tg-dualmarker"></div></div>');
  this.B.VH(42, e);
  e.push('</div></div><div class="tg-spanningwrapper tg-chipspanningwrapper" id="', this.A, 'spanningwrapper"></div></td>');
  e.push(ea);
  m = [];
  k && m.push('<div id="', this.A, 'nowptr" class="tg-nowptr" style="left:', this.Y, "px;top:", Nn(this, k) - 4, "px;", Qn(this, k) ? g : "display:none;", '"></div>');
  k = m.join(g);
  e.push("<tr>");
  m = 0;
  for (n = h.length; m < n; m++) {
    var q = m == n - 1;
    h[m].B(42, q, q ? k : g, this.b, this.o,
      e)
  }
  k = b;
  for (h = 0; h < d; h++) {
    n = [];
    m = a[h];
    if (m.length) {
      for (var n = m, q = k, r = n.length, u = [], w = [], y = [], D = 0; D < r; ++D) {
        var L = n[D],
          Q = L.Ma(),
          Z = ng(Q) || 0;
        Q.ib() < q.ib() && (Z = 0);
        var V = L.fb(),
          Q = ng(V) || 0;
        30 > Q - Z && (Q = Z + 30);
        if (V.ib() > q.ib() || 1440 < Q) Q = 1440;
        for (V = 0; w[V] > Z;) V++;
        var L = new Oca(L, Z, Q, V),
          ia = y[V];
        ia || (ia = y[V] = []);
        ia.push(L);
        w[V] = Q;
        u[V] = L;
        0 != V && (L.fs = [u[V - 1]], u[V - 1].bt.push(L));
        for (Q = V + 1; w[Q] <= Z;) Q++;
        if (Z = u[Q]) L.bt.push(Z), Z.fs.push(L)
      }
      n = Array.prototype.concat.apply([], y);
      q = n.length;
      w = u = r = void 0;
      for (u = q; u--;) {
        y = 1;
        D =
          0;
        r = n[u];
        for (w = r.bt.length; w--;) Z = r.bt[w], D = Math.max(D, Z.vI), y = Math.min(y, Z.left), Z.lm < r.lm + 30 && (r.QN = !0);
        r.vI = D + 1;
        r.width = y / (r.$M + 1);
        r.left = y - r.width
      }
      for (u = 0; u < q; u++) {
        r = n[u];
        r.left = 0;
        if (r.fs)
          for (w = r.fs.length; w--;) y = r.fs[w], r.left = Math.max(r.left, y.left + y.width);
        w = (1 - r.left) / r.vI;
        r.width = Math.max(r.width, w);
        r.oO = Math.min(1 - r.left, r.width + .7 * w)
      }
      q = k;
      r = c;
      u = [];
      for (w = 0; w < n.length; w++) u.push(Rca(this, n[w], q, r));
      n = u
    }
    q = [];
    for (w = 0; w < this.Z.length; ++w) q.push(this.Z[w](h, k, m, this, c));
    q.push(this.B.jB(h, k, m,
      this, c));
    r = [];
    for (w = 0; w < this.X.length; ++w) r.push(this.X[w](h, k, m, this, c));
    r.push(this.B.iB(h, k, m, this, c));
    u = [];
    for (w = 0; w < this.O.length; ++w) u.push(this.O[w](h, k, m, this, c));
    u.push(g);
    m = this.V && h == d - 1 ? "tg-gutter" : this.Ka;
    w = "tg-col";
    c && (k.equals(c.Ca()) || 1 < d && k.equals(Pg(c)) && 0 < h) && (w = "tg-col-today");
    w = Cg(k.Wb()) ? w + " tg-weekend" : w;
    y = this.A;
    D = h;
    e.push('<td class="' + w + '">' + q.join(g) + '<div id="' + y + "Col" + D + '" class="tg-col-eventwrapper" style="' + f + '"><div class="' + m + '">' + n.join(g) + r.join(g) + '</div></div><div id="' +
      y + "Over" + D + '" class="tg-col-overlaywrapper">' + u.join(g) + "</div></td>");
    this.V || (k = Pg(k))
  }
  e.push(ea);
  e.push(da);
  e.push("</div>");
  c = Mn(this) + 3;
  f = e = NaN;
  a = Array.prototype.concat.apply([], a);
  k = a.length;
  for (h = 0; h < k; h++) n = a[h], m = ng(n.Ma()), n = ng(n.fb()), n < m || (isNaN(e) ? (e = m, f = n) : (e = Math.min(e, m), f = Math.max(f, n)));
  this.C = new vn(b, d, c, 42, !1, isNaN(e) ? null : new Rm(e, f), this.A, this.V, this.b, this.o - this.b)
};

function Qn(a, b) {
  return !isNaN(b.hour) && b.hour >= a.b && b.hour < a.o
}

function Rn(a, b, c) {
  for (var d = [], e = {}, f = b = b.ib(), h = 0; h < c; h++) d[h] = [], e[f] = h, f = mg(f);
  c = f;
  for (var h = 0, k = a.length; h < k; h++)
    for (var m = a[h], f = Math.max(m.Ma().ib(), b), n = Math.min(Rg(m.fb()).ib(), c); f < n;) d[e[f]].push(m), f = mg(f);
  return d
};

function Sn(a, b, c, d, e, f, h) {
  this.F = a;
  this.G = b;
  this.Z = c;
  this.O = e;
  this.X = f;
  this.V = h;
  b = Tn(this);
  Un(a) && b && b.collapsed && (this.A = !0, this.B = b.start, this.D = b.end)
}
Sn.prototype.C = !1;
Sn.prototype.A = !1;

function Un(a) {
  var b = Qd(a).isEnabled(21),
    c = Qd(a).isEnabled(22);
  a = dh(Oh(Qh(a)), "collapsingRangesLab", c ? "true" : "false");
  return b && a
}

function Sca(a) {
  a.b = new Jn(a.G, a.Z, a.O, a.X, a.V);
  On(a.b, "ud", A(function(a, c) {
    return !Vn(this, a.event, c).hi
  }, a), Hca);
  null != a.B && Kn(a.b, a.B, a.D);
  a.o ? a.b.B = a.o : null != a.B && a.A && (a.C = !0, Kn(a.b, Math.max(a.B - 1, 0), Math.min(a.D + 1, 24)), ln(a.b.G, 1, 1))
}

function Wn(a) {
  a.b || Sca(a);
  return a.b
}

function Vn(a, b, c) {
  function d(a) {
    var b = Mg(c);
    ek(b, new Og(0, a, 0, 0));
    return b.Ja()
  }
  var e = b.Ma().ya();
  b = b.fb().ya();
  var f = d(a.b.b).ya();
  a = d(a.b.o).ya();
  var h = d(0).ya(),
    k = d(24).ya();
  return b <= h || e >= k ? Tca : e < f ? b <= f ? Uca : b <= a ? Vca : Wca : e < a ? b <= a ? Xca : Yca : Zca
}

function Tn(a) {
  a = P(a.F).get("collapsedTime");
  if (null != a) {
    var b = RegExp("(.*)\\|(.*)\\|(.)", "g").exec(a);
    if (b) {
      a = parseFloat(b[1]);
      var c = parseFloat(b[2]),
        b = "1" == b[3];
      if (!isNaN(a) && !isNaN(c)) return new $ca(a, c, b)
    }
  }
  return null
}
var Tca = {
    top: !1,
    hi: !1,
    bottom: !1
  },
  Uca = {
    top: !0,
    hi: !1,
    bottom: !1
  },
  Vca = {
    top: !0,
    hi: !0,
    bottom: !1
  },
  Xca = {
    top: !1,
    hi: !0,
    bottom: !1
  },
  Yca = {
    top: !1,
    hi: !0,
    bottom: !0
  },
  Zca = {
    top: !1,
    hi: !1,
    bottom: !0
  },
  Wca = {
    top: !0,
    hi: !0,
    bottom: !0
  };

function $ca(a, b, c) {
  this.start = a;
  this.end = b;
  this.collapsed = c
};

function ada(a) {
  this.b = !!a
}

function Xn(a, b, c, d, e, f, h, k, m) {
  m ? (a = bda, a.put("borderColor", m)) : a = a.b || cda ? dda : eda;
  a.put("color", d);
  a.put("textColor", e);
  a.put("outerClasses", f || g);
  a.put("paddingClasses", k || g);
  a.put("extraHtml", h || g);
  d = a;
  d.put("content", b);
  d.put("dir", c ? ";direction:rtl;;text-align:left" : g);
  return a.toString()
}
var eda = new T('<div class="${outerClasses} rb-o" style="border-color:${color}${dir}"><div class="${paddingClasses} rb-m" style="border-color:${color};background-color:${color};color:${textColor}">${extraHtml}<div class="rb-i">${content}</div></div></div>'),
  dda = new T('<div class="${outerClasses} ${paddingClasses} rb-n" style="color:${textColor};background-color:${color}${dir}">${extraHtml}${content}</div>'),
  bda = new T('<div class="${outerClasses} ${paddingClasses} rb-n" style="border:1px solid ${borderColor};color:${textColor};background-color:${color}${dir}"><div class=rb-ni>${extraHtml}${content}</div></div>'),
  cda = rc || en;

function Yn(a, b, c, d, e, f) {
  this.o = b;
  this.A = c;
  this.F = d;
  if (f) a = f(a);
  else {
    b = [];
    c = [];
    var h;
    d = 0;
    f = this.A;
    var k = this.o,
      m = Kg(k.ya(), Sg(k, f).ya());
    for (h = 0; h < f; h++) b[h] = [], c[h] = [];
    h = 0;
    for (var n = a.length; h < n; h++) {
      var q = a[h];
      if (ig(q, m)) {
        var r = q.V,
          u = 0,
          w = Ng(q.Ma().Ca(), k);
        if (0 > w) {
          if (!r) continue;
          w = 0;
          u |= 1
        }
        var y = Ng(Rg(q.fb()), k);
        y > f && (y = f, u |= 2);
        r = new Zn(q, r ? y - w : 1, u);
        (q = q.Id()) && eg(q) ? c[w].push(r) : (b[w].push(r), d++)
      }
    }
    a = {
      vA: b,
      dJ: c,
      IG: d
    }
  }
  this.b = a.vA;
  this.B = a.dJ;
  this.C = a.IG;
  this.D = e || 0
}

function Zn(a, b, c) {
  this.event = a;
  this.b = b;
  this.Jb = c
}

function $n(a, b) {
  for (var c = a.A, d = a.C, e = a.F, f = Sb(c), h = Sb(c), k = Sb(c), m = [], n = 0, q = 0; d;) {
    n == c && (n = 0, q++);
    var r = a.b[n][f[n] ++];
    if (r) {
      for (var u = r.b; u--;) k[n] = q, q + 1 == e ? m[n] = r : q >= e && (h[n] ++, m[n] && (m[n].pF = !0)), n++;
      --d
    } else n++
  }
  f = Sb(c);
  d = [];
  u = q;
  q = 0;
  switch (a.D) {
    case 2:
      for (n = 0; n < c; n++)
        if (a.b[n].length && !(h[n] || m[n] && m[n].pF)) {
          q = 1;
          break
        }
      break;
    case 1:
      q = 1
  }
  for (var e = Math.min(u, e - 1), w = e + 1 + q, q = 0; q < w; q++) {
    var y = w - q;
    b.b.push("<tr>");
    for (n = 0; n < c; n++)
      if (!d[n]) {
        var r = a.b[n][f[n] ++],
          D = q >= k[n];
        if (q == e && (h[n] || m[n] && m[n].pF)) {
          var D =
            b,
            L = Sg(a.o, n),
            r = h[n] + (m[n] ? 1 : 0),
            L = "ca-mlp" + L.ib();
          D.b.push('<td class="', "st-c", " ", "st-more-c", '">');
          D.V && D.A ? D.b.push('<div class="', L, " ", 'st-more st-morewk" >' + D.o.Mn(r) + "</div>") : D.V ? D.b.push('<div class="', L, " ", 'st-more st-moreicon" >\u25bc</div>') : D.b.push('<span class="', L, " ", 'st-more st-moreul" >' + ("+" + r + " more") + "</span>");
          D.b.push("</td>")
        } else if (r && q <= e) {
          L = 1;
          1 < r.b ? n += r.b - 1 : D && q != u && (L = y, d[n] = !0);
          var D = b,
            Q = !!(r.Jb & 1),
            Z = !!(r.Jb & 2),
            V = cn(r.event);
          D.K(r, L, !1, Q, Z, V);
          D.D(r, L, !1, Q, Z, V);
          D.G(r,
            L, !1, Q, Z, V)
        } else D = (d[n] = D) ? y : 1, r = b.b, r.push('<td class="st-c st-s"'), 1 < D && r.push(aa, D), r.push(">&nbsp;")
      }
  }
};
var fda = new T('<span class="te-c goog-inline-block" style="background-color:${eventColor}">&nbsp;</span>'),
  gda = new T('<div class="${extraClasses} te" style="color:${color}"><span class="te-t">${time}&nbsp;</span>${eventColorSpan}<span class="te-s">${subject}</span></div>'),
  hda = new T('<div class="${extraClasses} te" style="color:${color}"><table cellpadding=0 cellspacing=0 class="te-rev"><tr><td class="te-t">${time}&nbsp;</td><td>${eventColorSpan}&nbsp;</td><td class="te-rev-s"><div class="te-rev-spos">&nbsp;<div class="te-rev-scont" dir="rtl">${subject}</div></div></td></tr></table></div>');

function ao(a, b, c, d, e) {
  this.B = a;
  this.o = b;
  this.C = new ada(!b.yk());
  this.Z = c || !1;
  this.V = !!d;
  this.F = !!e;
  this.A = b.Kj()
}
ao.prototype.b = null;

function bo(a) {
  a.b.push('<table cellpadding="0" cellspacing="0" class="st-grid">')
}

function co(a) {
  a.b.push(da)
}

function eo(a, b) {
  for (var c = a.b, d = 0; d < b.length; d++) {
    var e = b[d],
      f = e.event.Id();
    f.Vr() && (fo.put("title", E(f.getTitle())), fo.put("iconURL", E(f.o)), e = cn(e.event) + " st-wc", f.getUrl() && (e += " st-wc-click"), fo.put("class", e), c.push(fo.toString()))
  }
}
ao.prototype.K = z;
ao.prototype.D = function(a, b, c, d, e, f) {
  c = this.b;
  c.push("<td class=st-c");
  1 < b && c.push(aa, b);
  1 < a.b && c.push(" colspan=", a.b);
  c.push(">");
  c.push("<div class=st-c-pos>");
  c.push(go(this, a.event, !1, d, e, f));
  c.push("</div></td>")
};
ao.prototype.G = z;

function go(a, b, c, d, e, f) {
  if (b.V || b.o) {
    var h = !!c;
    d = !!d;
    e = !!e;
    f = f || g;
    var k = a.o.nj(b, !0);
    (c = a.o.Rh(b)) && a.F && (c = '<span class="' + dn(b) + '">' + c + "</span>");
    var m = a.o.pj(b, !0);
    c += m;
    b.o || d ? h && (h = kg(b), 1 < h.$ && (c = "(" + Il(h) + ") " + c)) : c = "(" + a.B.zb(b.Ma()) + ") " + c;
    c = k + c;
    var m = a.o.pf(b),
      n = a.o.Ij(b),
      q = a.o.Mf(b),
      r = vi(q),
      k = m ? r.G : r.o,
      h = a.o.di(b) ? r.b : n ? r.O : r.A,
      u = a.o.Xk(b),
      w = ki(b);
    m ? h = w ? ri(w) : r.K : w && (h = w);
    1 > u && (h = Dh(r.K, w ? w : h, u));
    n && a.o.Ko() && (q = q ? wi(q, h) : 15, f += " rb-ro-" + q);
    var y;
    a.o.Kj() && (y = m ? n ? r.b : r.D : n ? r.X : r.B);
    m = [];
    d && m.push("st-ad-mpad");
    e && m.push("st-ad-mpadr");
    m = m.join(" ");
    d = ho(d, e, h, y);
    a = a.C;
    e = c;
    c = b.getTitle();
    c = ke(c);
    b = Xn(a, e, c ? !(b.Mr && b.Mr()) : !1, h, k, f, d, m, y)
  } else y = f || g, d = a.o.nj(b, !1), (f = a.o.Rh(b)) && a.F && (f = '<span class="' + dn(b) + '">' + f + "</span>"), e = a.o.pj(b, !1), f += e, e = a.o.pf(b), c = a.o.di(b), c = e || c, e = a.o.Mf(b), h = vi(e), e = c ? h.Z : h.F, k = a.o.Xk(b), !c && 0 <= k && 1 > k && (e = Dh(h.Z, e, k)), c = ki(b), b = d + a.B.zb(b.Ma(), !0, a.Z), a = e, d = gda, ke(f) && (d = hda), d.put("color", a), d.put("time", b), d.put("subject", f), d.put("extraClasses",
    y), d.put("eventColorSpan", c ? dm(fda, {
    eventColor: c
  }) : g), b = d.toString();
  return b
}

function ho(a, b, c, d) {
  if (!a && !b) return g;
  var e = [];
  a && (io(e, "st-ad-ml", d || c), io(e, "st-ad-ml2", c));
  b && (io(e, "st-ad-mr", d || c), io(e, "st-ad-mr2", c));
  return e.join(g)
}

function io(a, b, c) {
  a.push("<div class=", b, ' style="border-color: transparent ', c, '"></div>')
}
var fo = new T('<img src="${iconURL}" class="${class}" title="${title}" alt="${title}">');

function jo(a) {
  return Kd(a, 11) ? Gd(a, 11) : null
};

function ko(a, b) {
  M.call(this);
  this.b = a;
  this.mb = this.o = b
}
C(ko, M);

function lo(a) {
  return Gd(a, 10)
}

function mo(a) {
  return lo(a).Va()
}

function no() {
  return Sa._ol_enabled && hn && zc(10)
}
ko.prototype.register = function(a) {
  a.b(10, this)
};
ko.prototype.Va = function() {
  return "disconnected" != oo(this)
};

function oo(a) {
  var b = jo(a.b);
  return b && b.isEnabled() ? a.mb : a.o
};
var po = qc || rc || pc || typeof Sa.atob == Ea;

function ida(a, b) {
  this.o = a;
  this.b = b
}

function qo(a, b, c) {
  this.o = a;
  this.A = b;
  this.b = c || 0
}
var jda = new qo(21, 21, 3),
  kda = new qo(19, 19, 5),
  lda = new qo(17, 17, 4);

function ro(a) {
  Gj.call(this);
  this.b = a;
  this.o = {}
}
C(ro, Gj);

function so(a, b) {
  return a.o[b.Fa()] || a.b
}
v = ro.prototype;
v.$k = function(a) {
  return so(this, a).$k(a)
};
v.Mf = function(a) {
  return so(this, a).Mf(a)
};
v.Rh = function(a) {
  return so(this, a).Rh(a)
};
v.fg = function(a) {
  return so(this, a).fg(a)
};
v.Ij = function(a) {
  return so(this, a).Ij(a)
};
v.di = function(a) {
  return so(this, a).di(a)
};
v.Gl = function(a) {
  return so(this, a).Gl(a)
};
v.Yg = Pa(25);
v.bx = function(a) {
  return so(this, a).bx(a)
};
v.Qq = function(a) {
  return so(this, a).Qq(a)
};
v.pj = function(a, b) {
  return so(this, a).pj(a, b)
};
v.nj = function(a, b) {
  return so(this, a).nj(a, b)
};
v.Wk = function() {
  return this.b.Wk()
};
v.Xk = function(a) {
  return this.b.Xk(a)
};
v.pf = function(a) {
  return so(this, a).pf(a)
};
v.yk = function() {
  return this.b.yk()
};
v.Kj = function() {
  return this.b.Kj()
};
v.Ko = function() {
  return this.b.Ko()
};
v.Mn = function(a) {
  return this.b.Mn(a)
};
var to = new Rm(5, 20);

function uo(a, b, c, d) {
  var e = x(d) ? d : 1E5;
  d = x(d) ? d + b : -1;
  a = a.o;
  for (var f = 24 * a, h = NaN, k = NaN, m = !1, n = 0; n < c.length; ++n) {
    var q = Wd(c[n] * a / 60, 0, f),
      m = m || q < e || q > d;
    if (isNaN(h)) h = k = q;
    else if (q < h ? h = Math.max(q, k - b) : q > k && (k = Math.min(q, h + b)), k - h >= b) break
  }
  return m ? h : e
};

function vo(a, b) {
  this.b = a;
  this.o = b
};

function wo(a) {
  this.b = a
}
wo.prototype.apply = function(a) {
  for (var b = [], c = [], d = 0, e = a.length; d < e; d++) {
    var f = a[d],
      h = f.Id() && eg(f.Id());
    this.b && h || (f.o || f.V || h ? b.push(f) : c.push(f))
  }
  return new vo(b, c)
};

function xo(a, b, c, d, e) {
  this.B = a;
  this.id = String(b);
  this.o = c;
  this.b = d;
  this.K = e
}

function yo(a, b, c, d, e, f) {
  f = !!f;
  b = a.K.apply(b);
  var h = [];
  a.F(b, h, c, d, e, f);
  f = [];
  f.push(Sm);
  a.C(b, f, c, d, e);
  f.push(Tm);
  return {
    Oy: h.join(g),
    MI: f.join(g)
  }
}

function zo(a) {
  return "weekViewAllDay" + a.id
}

function Ao(a) {
  return "scrolltimedevents" + a.id
}
xo.prototype.D = function() {
  return "topcontainer" + this.id
};

function Bo(a, b, c, d, e) {
  xo.call(this, a, b, c, d, new wo(!1));
  this.V = !!e
}
C(Bo, xo);
Bo.prototype.A = !1;
Bo.prototype.F = function(a, b, c, d, e, f) {
  a = a.b;
  b.push('<table class="wk-weektop', 1 < e ? " wk-full-mode" : g, '" cellpadding=0 cellspacing=0><tr class=wk-daynames>');
  var h = mda(this, a);
  b.push(nda(this, h, f));
  for (var h = c.Ca(), k, m = !1, n = 0; n < e; n++) {
    k = Sg(d, n);
    var q = 1 == e ? this.B.Ak(k) : this.B.Pp(k);
    b.push('<th title="', q, '" scope=col><div class="wk-dayname');
    m && (m = !1, b.push(" wk-tomorrow"));
    k.equals(h) && (b.push(" wk-today"), n == e - 1 ? b.push(" wk-today-last") : m = !0);
    b.push('">');
    b.push('<span class="', "ca-cdp" + k.ib(), ' wk-daylink">',
      q, "</span></div></th>")
  }
  b.push(['<th class="wk-dummyth" rowspan=3 style="width: ', Vm() - 1, 'px;">&nbsp;</th>'].join(g));
  b.push(ea);
  b.push("<tr>");
  b.push('<td class="wk-allday" colspan="', e, '"><div id="', zo(this), '" class="wk-allday-pos">');
  this.o.b = b;
  c = c.Ca();
  h = this.o.b;
  h.push('<table id="' + Co(this) + '" cellpadding=0 cellspacing=0 class="st-bg-all"><tr>');
  if (1 == e && d.equals(c)) h.push('<td class="st-bg-td-last">&nbsp;</td>');
  else
    for (k = !1, m = e, n = d; m--; n = Pg(n)) q = g, n.equals(c) ? (k = !0, q = n.equals(d) ? "st-bg-td-first" :
      0 == m ? "st-bg-td-last" : "st-bg-today") : n.equals(d) || k ? (q = "st-bg-next", k = !1) : q = "st-bg", 0 == m && (q += " st-bg-lc"), h.push("<td"), q && h.push(' class="' + q + '"'), h.push(">&nbsp;</td>");
  h.push("</tr></table>");
  bo(this.o);
  d = new Yn(a, d, e, f ? 1 : 200, this.V && f ? 2 : 1);
  $n(d, this.o);
  co(this.o);
  b.push("</div></td>");
  b.push('</tr><tr class="wk-webcontent">');
  d = d.B;
  for (f = 0; f < e; f++) b.push('<td class="wk-webcontent-td">'), eo(this.o, d[f]), b.push("</td>");
  this.o.b = null;
  b.push(ea);
  b.push(da)
};

function mda(a, b) {
  if (!a.A) return !1;
  var c = Cb(b, function(a) {
    return !(a.Id() && eg(a.Id()))
  });
  Qb(c, function(a, b) {
    return a.Ma().Ca().ib() - b.Ma().Ca().ib()
  });
  for (var d = 1, e = c.length; d < e; ++d)
    if (c[d - 1].fb().Ca().ib() > c[d].Ma().Ca().ib()) return !0;
  return !1
}
Bo.prototype.C = function(a, b, c, d, e) {
  this.b.K = b;
  a = Rn(a.o, d, e);
  this.b.render(a, d, c);
  this.b.K = null
};

function nda(a, b, c) {
  for (var d = [], e = a.b.D, f = 0, h = 0; h < e.length; h++) f += e[h].ac, d.push("<td class=wk-tzlabel style=width:", e[h].ac, "px rowspan=3>", E(e[h].D), h == e.length - 1 && b ? oda(a, !!c, f) : g, "</td>");
  return d.join(g)
}

function oda(a, b, c) {
  return "<div class=wk-disclose-pos style=width:" + c + 'px><div id="' + ("allday-disclose" + a.id) + '" title="' + (b ? "Expand All Day events" : "Collapse All Day events") + '" role=button class="wk-disclose ' + (b ? "goog-zippy-collapsed" : "goog-zippy-expanded") + '"><div class=wk-zip></div></div></div>'
}
Bo.prototype.D = function() {
  return "topcontainer" + this.id
};

function Co(a) {
  return "weekViewAllDayBg" + a.id
};

function pda(a, b, c) {
  this.Io = 7 >= a;
  this.eJ = (this.Io ? a : 7) - b;
  this.a2 = b;
  this.UB = c
};

function Do() {
  M.call(this);
  this.b = {}
}
C(Do, M);
Va(Do);
Do.prototype.reset = Pa(54);
var qda = /\W/g;
Do.prototype.log = function(a, b) {
  if (!(0 > b || 6E5 < b)) {
    var c = a.replace(qda, "_");
    c in this.b || (this.b[c] = []);
    this.b[c].push(b)
  }
};
Do.prototype.getData = Pa(55);

function Eo(a) {
  return new Fo(a)
}

function Fo(a) {
  this.B = a;
  Go(this)
}
Fo.prototype.b = function(a) {
  a = a || this.kb;
  var b = hb();
  this.B.log(a, b - this.o);
  this.A = b
};
Fo.prototype.Ma = p("o");

function Ho(a, b) {
  var c = b || a.kb,
    d = hb();
  a.B.log(c, d - a.A);
  a.A = d
}

function Go(a, b) {
  a.o = b || hb();
  a.A = a.o
}

function Io(a, b) {
  Do.L().log(a, b)
}

function Jo(a) {
  Do.L().log(a, 0)
}

function Ko() {
  return Eo(Do.L())
};

function Lo(a) {
  this.b = a
}
Lo.prototype.A = Pa(57);
Lo.prototype.C = Pa(59);
Lo.prototype.D = function(a) {
  var b = Ko();
  this.b.xq(a);
  b.b(this.b.b + ".alterPeriod" + a)
};
Lo.prototype.o = t(!1);

function Mo(a, b) {
  this.b = a;
  this.O = b;
  No(this)
}
C(Mo, Lo);
Mo.prototype.F = !1;

function No(a) {
  var b = a.G() && a.F;
  a.B = new pda(a.O, b ? 2 : 0, b ? 1 : null)
}
Mo.prototype.G = t(!1);
Mo.prototype.Z = p("B");
Mo.prototype.o = t(!0);

function Oo(a) {
  Mo.call(this, a, 1)
}
C(Oo, Mo);

function Po(a) {
  this.b = a
}
C(Po, Lo);
Po.prototype.C = Pa(58);
Po.prototype.D = function(a) {
  var b = Ko(),
    c = Qo.L();
  Ro(c.b, a);
  So(c);
  b.b(this.b.b + ".alterPeriod" + a)
};
Po.prototype.K = t(!0);

function To(a, b, c) {
  this.F = b;
  Mo.call(this, a, 35);
  this.V = c
}
C(To, Mo);
To.prototype.G = t(!0);
To.prototype.A = Pa(56);

function Uo(a) {
  this.b = a
}
C(Uo, Po);
Uo.prototype.K = t(!1);

function Vo(a, b, c) {
  this.F = b;
  Mo.call(this, a, 7);
  this.V = c
}
C(Vo, Mo);
Vo.prototype.G = t(!0);

function Wo(a, b) {
  this.o = a;
  this.b = b || 1
}
var Xo = {
    CJ: 0,
    Iz: 1,
    vz: 2,
    B4: 3,
    e3: 4,
    rp: 5,
    eL: 6
  },
  rda = /^custom/;
Wo.prototype.getType = p("o");

function Yo(a) {
  return 6 == a.o
}
Wo.prototype.clone = function() {
  return new Wo(this.o, this.b)
};
Wo.prototype.equals = function(a) {
  return this.o == a.getType() && this.b == a.b
};

function Zo(a) {
  switch (a.o) {
    case 0:
      return "day";
    case 1:
      return "week";
    case 2:
      return "month";
    case 3:
      return "list";
    case 4:
      return "compact";
    case 5:
      return "custom";
    case 6:
      return Ia;
    default:
      return g
  }
}

function sda(a) {
  switch (a) {
    case "day":
      return 0;
    case "week":
      return 1;
    case "month":
      return 2;
    case "list":
      return 3;
    case "compact":
      return 4;
    case "custom":
      return 5;
    default:
      return 6
  }
}
Wo.prototype.toString = function() {
  var a = Zo(this);
  4 == this.o && (a += "," + this.b);
  return a
};

function tda(a, b, c) {
  var d = P(b),
    e = !d.xg(),
    d = d.tc();
  rk(b);
  switch (a.o) {
    case 0:
      return a.b = 1, new Oo(c);
    case 1:
      return b = new Vo(c, e, d), a.b = b.B.eJ, b;
    case 2:
      return a.b = 31, new To(c, e, d);
    case 3:
      return a.b = 1, new Po(c);
    case 6:
      return a.b = 1, new Uo(c);
    default:
      return new Mo(c, a.b)
  }
};

function $o(a) {
  M.call(this);
  this.B = a;
  this.b = new Wo(1);
  this.A = this.o = null
}
C($o, M);

function ap(a) {
  return Gd(a, 15)
}

function bp(a) {
  return ap(a).b
}

function cp(a) {
  return dp(ap(a))
}

function dp(a) {
  return a.o
}

function uda(a, b) {
  a.A = b
}

function vda(a, b) {
  a.D = b
}

function ep(a, b, c) {
  var d = c;
  if (Za(b) && 0 == b.indexOf("custom") || 5 == b) b = bh(P(a.B)).replace(rda, "compact"), d = void 0;
  if (ab(b) && $b(Xo, b)) c = new Wo(b, d);
  else {
    var e = b;
    c = d || 1;
    Za(b) && !x(d) && (b = b.split(",", 2), 2 == b.length && (e = b[0], c = parseInt(b[1], 10)));
    b = sda(e);
    c = x(b) ? new Wo(b, c) : new Wo(1, 1)
  }
  return fp(a, c)
}

function fp(a, b) {
  var c = Ko(),
    d = gp(),
    e = tda(b, a.B, d),
    f = !b.equals(a.b);
  if (!f && !Yo(b)) return !1;
  var h = a.b.clone();
  a.b = b.clone();
  f && a.P("n");
  f && Yo(b) && (hp = h.clone());
  a.o && a.o.o() && !e.o() && ip.L().Sa();
  a.o && e.o() && !a.o.o() && (ip.L(), jp().innerHTML = g, kp(!1));
  if (3 == h.o && f || Yo(h)) h = Qo.L(), h.o && (h.o.bq(), h.o.YN()), h.b = null, h.Sa();
  if (Yo(b) || 3 == b.o && f) f = Qo.L(), f.b || (f.b = new lp(f, f.A, f.B, f.D, 0, f.C, "listview"));
  a.o = e;
  if (e = a.A) e = a.A, e = !!e.o && e.o.O();
  if (e) d = !1;
  else {
    i: switch (a.b.o) {
      case 2:
        e = 3;
        break i;
      case 1:
        e = 2;
        break i;
      default:
        e = 1
    }
    e != d.b || (1 == e || 2 == e) && a.b.b != Pl(d) ? (Xl(d, e, a.b.b), d = !!a.A && !!a.A.o) : d = !1
  }
  d || mp();
  c.b("SetMode." + b.toString());
  return !0
};

function np(a, b, c, d) {
  this.b = a;
  this.B = b;
  this.A = c;
  this.o = d
}
np.prototype.ob = function(a) {
  if (Oj(a, 64) || !a.ob()) return !1;
  a = this.B.get(a.Fa());
  return !!a && 60 <= a.Bc
};

function Tj(a, b) {
  return 1 < b.A || 1 == b.A && !In(b, a.o)
}

function Uj(a, b) {
  for (var c = !1, d = Hn(b), e = 0; e < d.length; e++) {
    var f = d[e],
      h;
    if (h = f != a.o) h = rg(a.A, f), h = !(!h || h.Xc());
    if (h) {
      if (2 != In(b, f).mb) return !1;
      c = !0
    }
  }
  return c
};

function op() {
  M.call(this);
  this.mb = 0
}
C(op, M);
Va(op);
v = op.prototype;
v.oc = null;
v.rH = null;
v.Vd = null;
v.ln = null;
v.mq = null;
v.Hk = null;
v.Dn = null;

function pp(a, b, c, d) {
  qp(a, b, null, B(rp, c || ed), d)
}

function qp(a, b, c, d, e) {
  e = e || z;
  0 == a.mb || 1 == a.mb || 2 == a.mb ? (a.rH = b, a.ln = d, a.mq = c, a.Dn = e, a.mb = 3, a.P("q"), a.Vd ? a.Vd(A(a.wI, a), A(a.MB, a)) : a.wI()) : e()
}
v.wI = function() {
  sp(this);
  this.Vd = this.oc = null;
  this.ln && (this.oc = this.rH, this.mb = 4, this.P("o"), this.ln(A(this.HO, this), A(this.MB, this)))
};
v.HO = function() {
  this.ln = this.Dn = null;
  this.Hk = this.mq;
  this.mq = null;
  tp(this, this.Hk)
};

function tp(a, b) {
  var c = 3 == a.mb;
  a.mb = 2;
  c || (c = new J("p"), c.Mb = b, a.P(c))
}

function sp(a) {
  var b = 4 == a.mb;
  a.mb = 1;
  b || a.P("r")
}
v.MB = function() {
  this.Dn && (this.Dn(), this.Dn = null);
  this.mq = this.ln = null;
  3 == this.mb ? tp(this, this.Hk) : (sp(this), this.oc = null)
};

function rp(a, b, c) {
  a() ? b() : c()
};

function up(a, b, c, d, e) {
  this.A = a;
  this.D = b;
  this.C = b.Wb();
  this.o = c;
  this.b = d;
  this.B = e || 7;
  this.size = this.o * this.b
}

function vp(a) {
  var b;
  if (!(b = a.F)) {
    b = a.D.ib();
    for (var c = a.b, d = a.B, e = [], f = 0, h = 0; h < a.o; h++) {
      for (var k = 0; k < c; k++) e[f++] = b, b = mg(b);
      for (; k < d; k++) b = mg(b)
    }
    b = a.F = e
  }
  return b
}
up.prototype.equals = function(a) {
  return this.A.equals(a.A) && this.D.equals(a.D) && this.o == a.o && this.b == a.b && this.B == a.B
};

function wp(a) {
  return (a.o - 1) * a.B + a.b
}
up.prototype.Ob = function(a, b) {
  return a * this.b + b
};

function xp() {}

function yp(a) {
  this.o = a
}
C(yp, xp);
yp.prototype.b = function(a) {
  var b = this.o,
    c = Mg(a);
  c.$ = 1 - (x(void 0) ? NaN : 1);
  b = (c.Ca().Wb() - b + 7) % 7;
  c.$ -= b;
  return new up(a, c.Ca(), 6, 7)
};

function ip() {
  M.call(this);
  this.b = O();
  this.D = new ro(new Kj(this.b, Ll(), qg.L()));
  var a = vk(this.b);
  this.Z = new ao(a, this.D, !0);
  this.Ka = new ao(a, this.D, !0, !0, !0);
  this.O = new Sn(this.b, a, this.D);
  this.G = Wn(this.O);
  this.o = new Bo(a, "wk", this.Ka, this.G, !0);
  this.o.A = !0;
  this.X = new ida(a, this.Z);
  this.A = {};
  this.K = [];
  this.V = P(this.b);
  this.F = dh(this.V, "CollapseAllday", !1)
}
C(ip, M);
Va(ip);
v = ip.prototype;
v.nx = g;
v.iG = null;
v.$r = null;
v.ox = 0;
v.Xs = !1;
v.Jg = null;

function zp(a) {
  a = cp(a.b);
  return a.Z ? a.B.Io : !1
}

function jp() {
  return R("gridcontainer")
}

function Ap(a) {
  return Ao(a.o)
}

function wda(a, b) {
  var c = rk(a.b),
    d = new Ql(c, a.V),
    c = b || pk(c);
  d.set(c, c, c);
  a.C = d
}

function gp() {
  return ip.L().C
}

function Bp(a, b) {
  if (a.P("u")) {
    var c = Ko(),
      d = a.C.focus.Ca(),
      e = a.C.first.Ca(),
      f = cp(a.b).B;
    Kd(a.b, 18) && Cp(a.b).jh();
    var h = jp().offsetHeight;
    Ho(c, "refresh_resize");
    var k = f.eJ,
      e = null == f.UB ? e : Vg(e, f.UB),
      m = Math.ceil(Pl(a.C) / 7),
      n = new up(d, e, m, k, k + f.a2),
      m = !a.Jg || !n.equals(a.Jg);
    a.Jg = n;
    var q = hk(e, wp(a.Jg)),
      r;
    b ? r = [] : (n = Mj.L(), n = Zl(n, a.V), r = Dp.X(q, n), r.sort(a.D.Wk()));
    var u = null,
      n = ai(Ll()),
      w = vk(O()),
      y = !1;
    if (f.Io) f = P(a.b), u = a.O, y = f.$d(), f = f.Hl(), Ln(Wn(u), Mm(y, q, f, w, Pm, Qm, u.K)), a.o.B = w, u = yo(a.o, r, n, e, k, a.F), k = u.Oy,
      u = u.MI, y = !0;
    else {
      a.X.o = w;
      e = a.X;
      k = r;
      q = a.Jg;
      f = Nl();
      d = d.month;
      w = (w = R(ja)) ? w.className : g;
      w = ub(w, Aa) ? lda : ub(w, za) ? kda : jda;
      h = Math.max(1, Math.floor(((h - 20) / q.o + w.b - w.o) / w.A));
      w = [];
      w.push('<div class="mv-container"><table cellpadding=0 cellspacing=0 class="mv-daynames-table" id="mvDaynamesTable"><tr>');
      for (var D = 0; D < q.b; D++) {
        var L = q,
          Q = D,
          L = ak(vp(L)[0 * L.b + Q]).Wb(),
          L = e.o.wu(L);
        w.push('<th class="mv-dayname" title="', L, '">', L, "</th>")
      }
      w.push("</tr></table>");
      w.push('<div class="mv-event-container" id="mvEventContainer',
        g, '">');
      D = 100 / q.o;
      e.b.b = w;
      for (L = 0; L < q.o; L++) {
        var Z, Q = q,
          V = L;
        Z = ak(vp(Q)[V * Q.b + 0]);
        w.push('<div class=month-row style="top:', D * L, "%;");
        L < q.o - 1 ? w.push("height:", D + 1, '%">') : w.push('bottom:0">');
        var Q = e.b,
          ia = Z,
          V = q.b,
          xa = f,
          qa = Q.b;
        qa.push('<table cellpadding=0 cellspacing=0 class="st-bg-table"><tr>');
        for (var sb = !0, $a = V; $a--; ia = Pg(ia)) qa.push('<td class="st-bg'), sb && (sb = !1, qa.push(" st-bg-fc")), ia.equals(xa) && (0 == $a && Q.o.Kj() ? qa.push(" st-bg-td-last") : qa.push(" st-bg-today")), ia.equals(Pg(xa)) && $a != V - 1 && qa.push(" st-bg-next"),
          qa.push('">&nbsp;');
        qa.push(da);
        bo(e.b);
        var Q = new Yn(k, Z, q.b, h),
          V = e.b,
          xa = q.b,
          qa = f,
          sb = d,
          $a = Q.B,
          ia = A(e.o.uu, e.o),
          tb = 0 == L,
          gb = V.b;
        gb.push("<tr>");
        for (var Ve = !0, Ee = Pg(qa), fj = Sg(qa, 7), Ef = 0; Ef < xa; Ef++) {
          var cb = Sg(Z, Ef);
          gb.push('<td class="st-dtitle');
          tb && gb.push(" st-dtitle-fr");
          Ve && (Ve = !1, gb.push(" st-dtitle-fc"));
          qa.equals(cb) && (gb.push(" st-dtitle-today"), Ef == xa - 1 && gb.push(" st-dtitle-lc"));
          Ee.equals(cb) && 0 != Ef && gb.push(" st-dtitle-next");
          fj.equals(cb) && gb.push(" st-dtitle-down");
          cb.month != sb && gb.push(" st-dtitle-nonmonth");
          gb.push('">');
          eo(V, $a[Ef]);
          gb.push('<span class="ca-cdp' + cb.ib() + '">', ia(cb), "</span>")
        }
        $n(Q, e.b);
        co(e.b);
        w.push("</div>")
      }
      w.push("</div>");
      e.b.b = null;
      k = w.join(g)
    }
    e = "_" + wp(a.Jg);
    Ho(c, "refresh_computeContent_" + e);
    a.K = r;
    a.A = {};
    for (q = 0; q < r.length; q++) a.A[eb(r[q])] = r[q];
    if (k != a.nx || u != a.iG) {
      a.nx = k;
      a.iG = u;
      r = k;
      a.P("s");
      a.Xs = !0;
      if (zp(a)) {
        R(Ap(a)) || (y = a.o, k = '<div id="' + y.D() + '"></div>', k = rc ? k + ('<div id="topcontainerBorder' + y.id + '" class="wk-border"></div><div id="' + Ao(y) + '" class="wbkt wk-scrolltimedevents"></div><div id="' +
          ("bottomcontainerBorder" + y.id) + '" class="wk-border"></div>') : k + ('<div id="' + Ao(y) + '" class="wk-scrolltimedevents"></div>'), jp().innerHTML = k);
        R(a.o.D()).innerHTML = r;
        r = R(Ap(a));
        r.innerHTML = u;
        a.B && a.B.insert(!0);
        u = a.G.C;
        y = r.firstChild;
        u.Q = y;
        u.b = Bi(y);
        Ep(a);
        if (m || !a.$r || r.scrollTop == a.ox) k = 20 > n.hour ? new Wg(n.year, n.month, n.$, n.hour + 4, n.minute, n.second) : new Wg(n.year, n.month, n.$, 23, 59, 59), m = r.clientHeight, y = [], n && (n = ng(n), y.push(n), y.push(n + 30, n - 30)), k && (n = ng(k), y.push(n), y.push(n + 30, n - 30)), (n = u.O) && y.push(n.start,
          n.end), y.push(60 * to.start, 60 * to.end, 1440, 0), m = uo(u, m, y), a.ox = m, r.scrollTop = a.ox;
        a.$r = u
      } else jp().innerHTML = r, a.B && a.B.insert(!1);
      a.P("t");
      Ho(c, "refresh_insertDom_" + e)
    } else y && (c = a.G.C, m = R(Ap(a)).firstChild, c.Q = m, c.b = Bi(m)), a.P("v")
  }
}

function Fp(a) {
  a.nx = g
}
v.ZB = Pa(60);
v.Ny = Pa(61);
v.Sa = function() {
  Fp(this);
  this.B && this.B.remove();
  this.A = {};
  this.K = [];
  this.Jg = null;
  this.P("s");
  this.Xs = !1
};

function Ep(a) {
  if (a.Xs && zp(a)) {
    var b = R(Ap(a));
    if (b) {
      var c = Math.max(100, jp().offsetHeight - R(a.o.D()).offsetHeight - 2) + "px";
      a.B && a.B.D(c);
      b.style.height = c;
      if (b = R(Co(a.o))) a = vj(R(zo(a.o))).height, jj(b, "height", a + "px")
    }
  }
};

function Gp(a, b, c, d) {
  H.call(this);
  this.b = a;
  this.A = b;
  this.B = c || Number.MAX_VALUE;
  this.ra = d
}
C(Gp, H);
v = Gp.prototype;
v.Oa = window;
v.fp = null;
v.Zl = null;
v.gs = null;
v.Ih = function(a) {
  null == this.fp && (this.fp = this.Oa.setInterval(A(this.ZO, this), this.A / 2));
  this.Zl = hb();
  this.o = Array.prototype.slice.call(arguments, 0);
  null == this.gs && (this.gs = this.Zl)
};
v.cancel = function() {
  this.Zl = this.o = null
};
v.M = function() {
  null != this.fp && (this.Oa.clearInterval(this.fp), this.fp = null);
  this.o = this.ra = this.b = null;
  Gp.J.M.call(this)
};
v.ZO = function() {
  if (null != this.Zl) {
    var a = hb();
    if (a >= this.Zl + this.A || a >= this.gs + this.B) this.b.apply(this.ra, this.o), this.Zl = null, this.gs = a
  }
};

function Hp() {
  M.call(this);
  this.D = {};
  this.A = {};
  this.C = {};
  this.b = [];
  this.F = [];
  this.O = this.K = !1;
  this.o = [];
  this.B = [];
  this.Z = 0;
  this.V = {};
  this.G = null;
  this.Y = new Gp(this.Ka, 1E3, 5E3, this)
}
C(Hp, M);

function Ip(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, Q) {
  var Z = Dp;
  "string" == typeof c && (c = jk(c));
  "string" == typeof d && (d = jk(d));
  var V = Z.D[a];
  if (V) {
    var ia = V.Nc,
      xa = V.uf,
      qa = V.Ff;
    V.update(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, void 0, Q);
    if (ia !== V.Nc || xa !== V.uf || qa !== V.Ff) Jp(Z, V, xa, qa), Kp(Z, V)
  } else V = new Cn(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, void 0, Q);
  Lp(Z, V);
  return V
}

function Lp(a, b) {
  var c = b.Vj,
    d = b.getId(),
    e = a.D[d];
  if (e) {
    var f = e.uf,
      h = e.Ff;
    e.Nc !== b.Nc || f !== b.uf || h !== b.Ff ? (Jp(a, e, f, h), Kp(a, b)) : a.D[d] = b
  } else ++a.Z, Kp(a, b), c && a.D[c] && Mp(a, c);
  if (c) a.V[c] || (a.V[c] = {}), a.V[c][d] = !0;
  else if (c = a.V[d]) {
    for (var k in c) Mp(a, k);
    delete a.V[d]
  }
  a.D[d] = b;
  Np(a, d);
  a.P(Op)
}

function Mp(a, b) {
  var c = a.D[b];
  c && (a.P(new Pp(b)), Jp(a, c, c.uf, c.Ff), delete a.D[b], c.Vj && delete a.V[c.Vj][b], --a.Z, a.P(Op));
  return c
}
Hp.prototype.forEach = function(a) {
  for (var b in this.D)
    if (!1 === a(this.D[b])) break
};

function Np(a, b) {
  a.G || (a.G = new Qp);
  a.G.o.push(b);
  a.Y.Ih()
}
Hp.prototype.Ka = function() {
  this.G && (this.P(this.G), this.G = null)
};

function Qp() {
  J.call(this, "w");
  this.o = []
}
C(Qp, J);

function Pp(a) {
  J.call(this, "x");
  this.Qi = a
}
C(Pp, J);
var Op = "y";

function Rp(a) {
  J.call(this, "z");
  this.o = a
}
C(Rp, J);
Hp.prototype.X = function(a, b) {
  var c = void 0,
    d = null;
  b.b || (d = a.toString() + ":" + b.getKey(), c = this.A[d]);
  if (x(c)) return c;
  Sp(this);
  for (var e = Tp(this, a.start.ib()), c = a.start, f = a.end, c = f.hour || f.minute || f.second || c.$ === f.$ && c.month === f.month && c.year === f.year ? Pg(f) : f.Ca(), f = Tp(this, c.ib()), c = [], h = {}; e < f; ++e)
    for (var k = Up(this, e), m = 0; m < k.length; ++m) {
      var n = k[m];
      h[n.getId()] || (h[n.getId()] = !0, n.Rx(a) && am(b, n) && c.push(n))
    }
  Vp(this, d, c);
  return c
};

function Wp(a, b, c, d, e) {
  var f = null,
    h = void 0;
  d.b || (f = b.toString() + " +" + c + ":" + d.getKey(), h = a.A[f]);
  if (x(h)) return h;
  Sp(a);
  for (var h = b.ib(), k = Tp(a, h), m = k < a.b.length && a.b[k].Be === h, h = [], n = {}; k < a.b.length; ++k) {
    for (var q = Up(a, k), r = !1, u = 0; u < q.length; ++u) {
      var w = q[u];
      if (!e) {
        if (n[w.getId()]) continue;
        n[w.getId()] = !0
      }
      var y;
      (y = !m) || (y = b, y = w.fb().ya() > y.ya());
      if (y && am(d, w) && (r || (e && h.push(ak(q.Be)), r = !0), h.push(w), 0 >= --c)) {
        k = a.b.length;
        break
      }
    }
    m = !1
  }
  Vp(a, f, h);
  return h
}

function Xp(a, b, c) {
  var d = null,
    e;
  c.b || (d = b.toString() + " -46:" + c.getKey(), e = a.A[d]);
  if (x(e)) return e;
  Sp(a);
  e = b.ib();
  var f = Tp(a, e),
    h = 0 < f && e == mg(a.b[f - 1].Be);
  e = [];
  for (var k = 46; 0 <= --f;) {
    for (var m = Up(a, f), n = !1, q = m.length; 0 <= --q;) {
      var r = m[q];
      if ((!h || r.Ma().ya() < b.ya()) && am(c, r) && (e.push(r), n = !0, 0 >= --k)) {
        f = -1;
        break
      }
    }
    n && e.push(ak(m.Be));
    h = !1
  }
  e.reverse();
  Vp(a, d, e);
  return e
}

function Tp(a, b) {
  var c = a.C[b];
  if (void 0 !== c) return 0 > c ? ~c : c;
  for (var d = c = 0, e = a.b.length - 1, f = !1; e >= d;) {
    var c = e + d >> 1,
      h = a.b[c].Be - b;
    if (0 === h) {
      f = !0;
      break
    } else 0 > h ? d = c + 1 : e = c - 1
  }
  c < a.b.length && b > a.b[c].Be && (c += 1);
  a.C[b] = f ? c : ~c;
  return c
}

function Sp(a) {
  a.K && a.b.sort(xda);
  if (a.O || a.K) {
    a.C = {};
    for (var b = a.b.length; 0 <= --b;) a.C[a.b[b].Be] = b;
    a.O = !1
  }
  a.K && (a.K = !1)
}

function Vp(a, b, c) {
  if (b) {
    if (!a.A.size || 10 < a.A.size) a.A = {}, a.A.size = 0;
    a.A[b] = c;
    ++a.A.size
  }
}

function Up(a, b) {
  var c = a.b[b];
  c.Oi && (c.sort(yda), c.Oi = !1);
  return c
}

function Yp(a) {
  return 0 < a.o.length ? a.o[0] : null
}

function Zp(a) {
  return 0 < a.o.length ? a.o[a.o.length - 1] : null
}

function Jp(a, b, c, d) {
  var e = b.getId();
  delete a.F[e];
  var f = a.o;
  if (f.length) {
    b = Oj(b, 32768) ? [c, d] : $p(f, [c, d]);
    c = !1;
    d = 0;
    for (f = b.length; d < f;)
      for (var h = b[d++], k = b[d++]; h < k; h = mg(h)) {
        var m = a.C[h];
        if (void 0 !== m && 0 <= m)
          for (var m = a.b[m], n = 0; n < m.length; ++n)
            if (m[n].getId() === e) {
              m.splice(n, 1);
              c = !0;
              break
            }
      }
    c && (a.A = {})
  }
}

function Kp(a, b) {
  var c = a.o;
  if (c.length) {
    var d = b.uf,
      e = b.Ff,
      f = [d, e],
      c = Oj(b, 32768) ? f : $p(c, f);
    if (2 !== c.length || d < c[0] || e > c[c.length - 1]) a.F[b.getId()] = !0;
    for (d = 0; d < c.length;) e = c[d++], f = c[d++], aq(a, b, e, f);
    a.A = {}
  } else a.F[b.getId()] = !0
}

function aq(a, b, c, d) {
  for (; c < d; c = mg(c)) {
    var e = a.C[c];
    void 0 !== e && 0 <= e ? e = a.b[e] : (e = [], e.Be = c, a.K = a.K || !!a.b.length && e.Be < a.b[a.b.length - 1].Be, a.O = !0, a.C[c] = a.b.length, a.b.push(e));
    e.push(b);
    e.Oi = 1 < e.length
  }
}

function bq(a) {
  for (var b = Dp, c = cq(dq(a), b.o), d = b.o, e = 0, f = 0, h = c.length, k = d.length, m = []; e < h && f < k;) {
    var n = c[e],
      q = d[f];
    if (n <= q)
      for (q = c[++e], ++e; f < k && d[f + 1] <= q;) f += 2;
    else
      for (n = q, q = d[++f], ++f; e < h && c[e + 1] <= q;) e += 2;
    eq(m, n, q)
  }
  if (e < h) {
    do eq(m, c[e++], c[e++]); while (e < h)
  } else
    for (; f < k;) eq(m, d[f++], d[f++]);
  var e = [],
    f = [],
    c = cq(c, d),
    r;
  for (r in b.F) {
    d = b.D[r];
    f[0] = d.uf;
    f[1] = d.Ff;
    fq(c, f, e);
    for (h = 0; h < e.length; h += 2) aq(b, d, e[h], e[h + 1]);
    e = cq(f, m);
    e.length || delete b.F[r]
  }
  b.o = m;
  b.B = zda(b.B, a);
  b.P(new Rp(b.B))
}

function gq(a) {
  var b = Dp;
  b.forEach(function(b) {
    b.Fa() === a && hq(b.getId())
  });
  b.B = iq(b.B, function(b) {
    return b.Xa !== a
  });
  b.A = {}
}
var Dp = new Hp;

function jq(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, Q, Z) {
  return Ip(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, Q, Z)
}

function hq(a) {
  return Mp(Dp, a)
}

function xda(a, b) {
  return a.Be - b.Be
}

function yda(a, b) {
  var c = a.Ma().ya() - b.Ma().ya();
  if (c) return c;
  if (a.Tb() != b.Tb()) return a.Tb() ? -1 : 1;
  if (c = a.fb().ya() - b.fb().ya()) return c;
  var c = a.getId(),
    d = b.getId();
  return c == d ? 0 : c < d ? -1 : 1
}

function kq() {
  var a = dq(Dp.B);
  return a.length ? [a[0], a[a.length - 1]] : void 0
}

function lq() {
  return mq(Dp.B)
};
var nq = {
  dasher: [wa, Ca, Fa, Ba],
  detailssettings: [wa, Ca, Fa, Ba],
  eventform: [wa, Ca, Fa],
  extras: [wa],
  focuswidget: [wa, Ca],
  gadget: [wa],
  offline: [wa, Ca],
  push: [wa, Ca],
  search: [wa, Ca, Fa, Ba],
  tdl: [wa, Ca],
  tws: [wa, Ca],
  ww: [wa, Ca, Fa, Ba]
};

function oq(a, b, c) {
  M.call(this);
  this.C = a;
  this.A = {};
  this.o = [];
  this.b = null;
  this.V = A(this.G, this);
  this.Z = A(this.K, this);
  this.B = Za(b) ? lb(b, "//") ? window.location.protocol + b : b : g;
  this.D = Za(c) ? c : "__en.js"
}
C(oq, M);

function pq(a) {
  this.id = a;
  this.o = []
}
pq.prototype.state = 0;
pq.prototype.b = null;
var qq = {};

function rq(a) {
  if (!a.b) {
    for (var b, c = !1; 0 < a.o.length;) {
      var c = a.o.shift(),
        d = c.ss,
        c = c.DB,
        e = sq(a, d);
      if (1 == e.state) c && (a.b = tq(d, !0), uq(a, d), a.b = null);
      else if (0 == e.state) {
        b = d;
        break
      }
    }
    b ? (d = a.B + b + a.D, a.b = tq(b, c), a.F.load(d, a.V, a.Z)) : a.P("B")
  }
}
oq.prototype.G = function(a) {
  var b = this.b.ss,
    c = this.b.DB,
    d = sq(this, b);
  d.b = a;
  c ? uq(this, b) : d.state = 1;
  this.b = null;
  rq(this)
};
oq.prototype.K = function() {
  this.P(new vq(this.b.ss));
  this.b = null;
  rq(this)
};

function uq(a, b) {
  var c = sq(a, b),
    d = !0;
  try {
    var e = c.b + ("\n//@ sourceURL=" + (a.B + b + a.D) + "\n");
    if (Sa.execScript) Sa.execScript(e, "JavaScript");
    else if (Sa.eval)
      if (null == ib && (Sa.eval("var _et_ = 1;"), "undefined" != typeof Sa._et_ ? (delete Sa._et_, ib = !0) : ib = !1), ib) Sa.eval(e);
      else {
        var f = Sa.document,
          h = f.createElement("script");
        h.type = "text/javascript";
        h.defer = !1;
        h.appendChild(f.createTextNode(e));
        f.body.appendChild(h);
        f.body.removeChild(h)
      } else throw Error("goog.globalEval not available");
  } catch (k) {
    d = !1, a.P(new vq(b)),
      pf(38)
  }
  c.state = 2;
  if (d) {
    try {
      c.A && (c.A(a.C), c.A = z)
    } catch (m) {
      pf(47)
    }
    for (; 0 < c.o.length;) {
      d = c.o.shift();
      try {
        d.call(null)
      } catch (n) {
        pf(39)
      }
    }
  }
  c.o = [];
  c.b = null
}

function tq(a, b) {
  return {
    ss: a,
    DB: b
  }
}

function sq(a, b) {
  return a.A[b] || (a.A[b] = new pq(b))
}

function Jd(a, b, c) {
  switch (sq(a, b).state) {
    case 0:
    case 1:
      0 == a.o.length && a.P("A");
      for (var d = qq[b] || [], e = 0, f = d.length; e < f; ++e) 2 != sq(a, d[e]).state && a.o.push(tq(d[e], !0));
      a.o.push(tq(b, !0));
      c && sq(a, b).o.push(c);
      rq(a);
      break;
    case 2:
      c && c.call(null)
  }
}

function wq(a, b) {
  var c = sq(a, b);
  c.state = 1;
  c.b = "void(0)"
}

function vq(a) {
  J.call(this, "C");
  this.ss = a
}
C(vq, J);

function xq(a) {
  this.o = a
}

function yq(a) {
  return Gd(a, 13)
}
xq.prototype.b = function(a, b) {
  Jd(this.o, a, b)
};
xq.prototype.A = function(a) {
  var b = this.o;
  0 == b.o.length && b.P("A");
  b.o.push(tq(a, !1));
  rq(b)
};
for (var Aq in nq) qq[Aq] = nq[Aq];
var Bq = new function() {
  this.b = this.o = null
};

function U(a) {
  return document.getElementById(a)
};
var Cq = "Sun Mon Tue Wed Thu Fri Sat".split(" ");

function Dq(a) {
  return Kd(a, 813) ? Gd(a, 813) : null
};

function Eq(a) {
  this.B = a;
  this.A = new M;
  this.b = {};
  this.o = {}
}

function Fq(a, b, c, d) {
  a.o[b] = c;
  d && (a.b[b] = d)
}

function Rf(a, b) {
  if (b) {
    Za(b[0]) && (b = [b]);
    for (var c = 0; c < b.length; ++c) {
      var d = b[c],
        e = d[0],
        f = d.slice(1);
      Gq(a, e, f) || (d = a, d.C || Ad(Id(d.B, 808), A(d.D, d, e, f)))
    }
    a.A.P("D")
  }
}

function Gq(a, b, c) {
  var d = a.o[b];
  !d && lb(b, "_") && bb(Ua(b)) && (d = Ua(b), Jo("fnDispatch" + encodeURIComponent(b.substr(0, 30))));
  if (d) {
    (a = a.b[b]) && a(c);
    try {
      return d.apply(null, c), !0
    } catch (e) {}
  }
  return !1
}
Eq.prototype.D = function(a, b, c) {
  c.init(this);
  this.C = !0;
  Gq(this, a, b)
};

function Hq(a, b) {
  Ad(Id(a, b), function(a) {
    a.init()
  })
};

function Iq() {
  return typeof gbar == Ha
}

function Jq() {
  return !!(Iq() && gbar.sb && gbar.sb())
};
var Kq, Lq, Mq = !1,
  Nq = !1;

function Ada(a) {
  a.A(wa);
  window.setTimeout(A(a.A, a, Ba), 6E3);
  window.setTimeout(A(a.A, a, ya), 3E4)
};

function Oq(a) {
  this.b = {};
  if (a)
    for (var b = 0; b < a.length; b++) this.b[Pq(a[b])] = null;
  for (var c in Object.prototype);
}
var Bda = {};

function Pq(a) {
  return a in Bda || 32 == String(a).charCodeAt(0) ? " " + a : a
}

function Qq(a) {
  return 32 == a.charCodeAt(0) ? a.substr(1) : a
}
v = Oq.prototype;
v.add = function(a) {
  this.b[Pq(a)] = null
};
v.clear = function() {
  this.b = {}
};
v.clone = function() {
  var a = new Oq,
    b;
  for (b in this.b) a.b[b] = null;
  return a
};
v.contains = function(a) {
  return Pq(a) in this.b
};
v.equals = function(a) {
  return Rq(this, a) && Rq(a, this)
};
v.forEach = function(a, b) {
  for (var c in this.b) a.call(b, Qq(c), void 0, this)
};
v.qb = Object.keys ? function() {
  return Object.keys(this.b).length
} : function() {
  var a = 0,
    b;
  for (b in this.b) a++;
  return a
};
v.qj = Pa(35);
v.pb = Object.keys ? function() {
  return Object.keys(this.b).map(Qq, this)
} : function() {
  var a = [],
    b;
  for (b in this.b) a.push(Qq(b));
  return a
};
v.isEmpty = function() {
  for (var a in this.b) return !1;
  return !0
};

function Rq(a, b) {
  for (var c in a.b)
    if (!(c in b.b)) return !1;
  return !0
}
v.remove = function(a) {
  a = Pq(a);
  return a in this.b ? (delete this.b[a], !0) : !1
};
v.Lc = function() {
  return $d(this.pb())
};

function Sq(a, b, c) {
  this.o = a;
  this.A = b;
  this.Jm = new Oq;
  this.b = c
}
Sq.prototype.isEnabled = function() {
  var a = this.A.oc,
    b = "h" == a,
    c = !1;
  this.b.isEnabled(40) && (c = "g" == a);
  return this.Jm.isEmpty() && (b || c) && dh(this.o, "useKeyboardShortcuts", "true")
};

function Tq() {
  this.b = Ja
};

function Uq(a) {
  M.call(this);
  this.B = a;
  this.b = {};
  this.o = {};
  this.A = new Vq
}
C(Uq, M);

function Rj(a) {
  return Gd(a, 16)
}

function Wq(a, b, c) {
  var d = a.b[b];
  if (!d) return [];
  c = c ? 20 : 10;
  var e = [],
    f;
  for (f in d) {
    var h = d[f];
    h && h.Fa() == b && 1 == h.getType() && h.Rk == c && (2 != h.Fb() || Xq(a)) && e.push(h)
  }
  return e
}
Uq.prototype.Ia = Pa(12);
Uq.prototype.reset = Pa(53);

function Xq(a) {
  return dh(P(a.B), "smsVerifiedFlag", "false")
}

function Qj(a, b) {
  var c = b.G;
  if (c) return !!c.length;
  var c = b.Fa(),
    d = b.o && Od(9);
  a.A.has(c, d) || a.A.set(c, d, 0 < Wq(a, c, d).length);
  return !!a.A.get(c, d)
}

function Vq() {
  this.b = {}
}
v = Vq.prototype;
v.clear = function(a) {
  delete this.b[a]
};
v.reset = Pa(52);
v.get = function(a, b) {
  return this.b[a] ? this.b[a][b] : void 0
};
v.has = function(a, b) {
  return x(this.b[a]) && x(this.b[a][b])
};
v.set = function(a, b, c) {
  this.b[a] = this.b[a] || {};
  this.b[a][b] = c
};

function Yq(a, b, c) {
  this.A = [];
  this.o = b || Cda;
  this.B = c || "gcal$func$";
  this.C = a
}
C(Yq, H);
var Cda = Sa.gcal$func$ = {},
  Dda = 0,
  Zq = new Yq;
Yq.prototype.M = function() {
  for (var a = 0, b = this.A.length; a < b; ++a) delete this.o[this.A[a]];
  Yq.J.M.call(this)
};
Yq.prototype.b = function(a, b) {
  var c = b || this.C;
  c && (a = A(a, c));
  c = Dda++;
  this.o[c] = a;
  this.A.push(c);
  return this.B + "[" + c + "]"
};
Yq.prototype.D = function(a) {
  delete this.o[a.substring(this.B.length + 1, a.length - 1)]
};
var $q = A(Zq.b, Zq);
A(Zq.D, Zq);

function ar(a, b, c, d) {
  this.o = a;
  this.A = b;
  this.b = c;
  this.B = d
}
ar.prototype.register = function(a) {
  a.b(26, this)
};
var br = null;
var cr = null;
var pr = null;
var qr = null;

function rr(a) {
  this.b = 0;
  this.o = [];
  this.A = a
}

function sr(a, b) {
  a.o = b;
  if (0 < a.o.length) {
    a.b = tr(a, a.b);
    for (var c = 0; c < a.o.length; c++) ur(a, a.o[c], c == a.b)
  }
}
v = rr.prototype;
v.fh = Pa(63);
v.eh = Pa(65);

function vr(a, b, c) {
  if (0 != a.o.length) {
    var d = tr(a, a.b);
    if (!b(a.o[d]))
      for (var e = 0; e < a.o.length; e++)
        if (b(a.o[e])) {
          d = e;
          break
        }
    c ? (a.b = d, wr(a, c)) : xr(a, d)
  }
}

function xr(a, b) {
  if (0 != a.o.length) {
    b = tr(a, b);
    a.b != b && 0 <= a.b && a.b < a.o.length && ur(a, a.o[a.b], !1);
    var c = a.o[b];
    a.b == b && dj(c) || ur(a, c, !0);
    a.b = b
  }
}

function ur(a, b, c) {
  a.A && bn(b, a.A, c);
  ej(b, c)
}

function wr(a, b) {
  if (0 != a.o.length) {
    var c = tr(a, a.b);
    if (!b(a.o[c])) {
      var d = a.hasFocus(),
        e = yr(a, c, -1, b);
      0 > e && (e = yr(a, c, 1, b));
      0 <= e && (c = e);
      d ? zr(a, c) : xr(a, c)
    }
  }
}

function zr(a, b, c) {
  0 != a.o.length && (xr(a, b), c || a.o[a.b].focus())
}
v.focus = function() {
  zr(this, this.b)
};
v.blur = Pa(66);
v.hasFocus = function() {
  var a = Ar(this);
  return !!a && a == document.activeElement
};

function yr(a, b, c, d) {
  for (; 0 <= b && b < a.o.length;) {
    if (d(a.o[b])) return b;
    b += c
  }
  return -1
}

function tr(a, b) {
  b >= a.o.length && (b = a.o.length - 1);
  0 > b && (b = 0);
  return b
}

function Ar(a) {
  return 0 <= a.b && a.b < a.o.length ? a.o[a.b] : null
};

function Br(a) {
  this.o = Infinity;
  a.innerHTML = "<div class=calendars><div></div></div><div class=calendars-s-t></div><div class=calendars-s-b></div>";
  this.b = a.firstChild;
  this.B = this.b.firstChild;
  this.C = this.b.nextSibling;
  this.F = this.C.nextSibling;
  var b = new N(this);
  b.I(a, ["mouseover", "mouseout"], this.K);
  b.I(this.b, "scroll", this.G)
}
Br.prototype.A = 0;
Br.prototype.K = function(a) {
  this.V = "mouseover" == a.type;
  Cr(this)
};
Br.prototype.G = function() {
  Dr(this)
};

function Er(a) {
  a.A = a.B.offsetHeight;
  var b = Math.max(a.o, 40),
    c = a.b.style;
  a.D = a.A > b;
  c.height = a.D ? b + "px" : g;
  Dr(a);
  Cr(a)
}

function Dr(a) {
  var b = a.b.scrollTop,
    c = Wd(b / 20, 0, 1);
  wj(a.C, c);
  b = Wd((a.A - a.o - b) / 20, 0, 1);
  wj(a.F, b)
}

function Cr(a) {
  bn(a.b, "calendars-hvr", a.D && a.V)
}

function Fr(a, b) {
  a.o != b && (a.o = b, a.b.scrollTop = 0, Er(a))
};

function Gr(a, b, c, d, e, f) {
  ud.call(this, e, f);
  this.b = a;
  this.V = [];
  this.Y = !!b;
  this.ub = !!c;
  this.Ga = !!d;
  for (b = this.ka = 0; b < a.length; b++) Bd(a[b], A(this.Ka, this, b, !0), A(this.Ka, this, b, !1));
  0 != a.length || this.Y || this.callback(this.V)
}
C(Gr, ud);
Gr.prototype.Ka = function(a, b, c) {
  this.ka++;
  this.V[a] = [b, c];
  this.o || (this.Y && b ? this.callback([a, c]) : this.ub && !b ? this.Ui(c) : this.ka == this.b.length && this.callback(this.V));
  this.Ga && !b && (c = null);
  return c
};
Gr.prototype.Ui = function(a) {
  Gr.J.Ui.call(this, a);
  for (a = 0; a < this.b.length; a++) this.b[a].cancel()
};

function Hr(a) {
  this.A = a;
  this.F = new xi(B(Ir, !1), 3E3);
  this.C = new xi(A(this.Pa, this))
}

function Ir(a) {
  var b = R("mothertable");
  b && (Ej(b, "busy", a), Ej(b, "hidden", a))
}

function Eda(a) {
  var b = new Hr(R("ntowner"));
  a.b(19, b)
}

function Jr(a, b) {
  var c = Kr(a);
  return A(c.b, c, b)
}
Hr.prototype.ea = function() {
  this.A.innerHTML = g;
  delete this.A;
  delete this.B;
  delete this.D
};
Hr.prototype.b = function(a, b, c) {
  Lr(this);
  Ir(!0);
  this.F.start();
  this.A.innerHTML = g;
  this.A.innerHTML = '<div id="nt1"><table class="mbox" cellpadding="0" cellspacing="0" role="presentation"><tr><td><div id="nt2" class="mbox-cont" role="alert" aria-live="assertive" aria-atomic="true" aria-relevant="all"></div></td></tr></table></div>';
  R("nt2").innerHTML = a;
  this.D = b;
  this.C.stop();
  this.C.start(c || 3E4)
};
Hr.prototype.o = function(a, b, c, d) {
  Xa(a) && (a = a.join("<br>"));
  this.b(a, b, d);
  this.B = c
};
Hr.prototype.Pa = function(a) {
  a && a != this.D || (Lr(this), this.A.innerHTML = g)
};

function Lr(a) {
  a.B && (a.B(), a.B = void 0)
}

function Kr(a) {
  return Gd(a, 19)
};

function Fda(a) {
  this.b = a
}
var Mr;

function Nr() {
  M.call(this)
}
C(Nr, M);
Nr.prototype.P = function(a) {
  return Nr.J.P.call(this, a)
};

function Or(a) {
  Gd(a, 21).P("F")
};

function Pr(a, b, c) {
  this.B = a;
  this.b = b;
  this.o = P(a);
  this.G = c;
  this.A = []
}

function Qr(a) {
  return Gd(a, 14)
}

function Rr(a, b, c, d) {
  if (a.b.getItem(c)) d != a.b.getItem(c).type && (a = a.b.getItem(c), a.type != d && (a.type = d));
  else {
    var e = dh(a.o, c + "/hidden", !1),
      f = e || dh(a.o, c + ca, !1);
    a.A.push(new Gda(b, c, d, e, f));
    a.F || (a.F = window.setTimeout(A(a.V, a), 0))
  }
}
Pr.prototype.V = function() {
  this.F = null;
  Sr(this, A(this.G.b, this))
};

function Sr(a, b, c) {
  for (var d = [], e = [], f = no(), h = 0; h < a.A.length; ++h) {
    var k = a.A[h],
      m = k.id;
    a.b.getItem(m) || (k.b || (e.push(m), (!k.o || f && Tr(a.b, m)) && d.push(m)), Ur(a.b, k.name, m, k.type, !!k.o, !!k.b))
  }
  c && (e = c(e));
  a.o.nb();
  window.setTimeout(A(a.D, a, e, void 0), 0);
  b(d);
  a.A = []
}
Pr.prototype.D = function(a, b) {
  var c = b || A(this.K, this),
    d = Jr(this.B, "Oops, we couldn't load details for your calendar, please try again in a few minutes");
  this.C || (this.C = new Fda(this.B));
  var e = this.C,
    f;
  if (0 == a.length) f = null;
  else {
    f = Th(e.b);
    for (var h = [], k = !1, m = 0; m < a.length; ++m) f == a[m] && (k = !0), h.push("dtid", a[m]);
    Mr || (Mr = !0, h.push("init", "true"), k || h.push("dtid", f));
    f = h
  }
  f && Pf(Nf(e.b), "caldetails", f, 4, c, d)
};
Pr.prototype.K = function() {
  var a = this.B;
  window.setTimeout(function() {
    Or(a)
  }, 0)
};

function Gda(a, b, c, d, e) {
  this.name = a;
  this.id = b;
  this.type = c;
  this.b = d;
  this.o = e
};

function Mj() {
  Mh.call(this);
  this.D = !1
}
C(Mj, Mh);
Va(Mj);

function Lj(a, b) {
  return a.getItem(b)
}
v = Mj.prototype;
v.yb = function() {
  return Mj.J.yb.call(this)
};
v.forEach = function(a, b) {
  this.Ib();
  try {
    for (var c = this.yb(), d = 0, e = c.length; d < e; ++d) {
      var f = c[d];
      if ((b || !f.o) && !1 === a(f)) break
    }
  } finally {
    this.Gb()
  }
};
v.Qv = Pa(67);

function $l(a) {
  var b = [];
  a.forEach(function(a) {
    a.Md && !a.b && b.push(a.getId())
  }, !0);
  return b
}

function Vr(a, b, c) {
  var d = a.getItem(b);
  d.b = !d.b;
  a.b.set(b + "/hidden", d.b ? "true" : "false");
  d.b || a.b.set(b + ca, "false");
  if ("cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" == b)
    if (d.b) {
      var e = a.b.getString("weather", g);
      a.b.set("weather", g);
      a.b.set(Ka, e)
    } else e = a.b.getString(Ka, g), e = Wf.WR(e), a.b.set("weather", e), a.b.set(Ka, g);
  Wr(a, b, !d.b, !d.b);
  d.b && (e = b + "/availOffline", dh(a.b, e, "false") && a.b.set(e, "false"), gq(b));
  a.b.nb(c);
  Xr(a);
  d.b || a.P(new Yr)
}

function Zr(a, b, c) {
  b && a.contains(b) && a.getItem(b).b ? Vr(a, b, c) : c && c()
}
v.we = function(a, b, c, d) {
  if (a && this.contains(a) && b != this.getItem(a).Md)
    if ($r(this, a)) {
      var e = [];
      if (b) {
        var f = new ud,
          h = A(f.callback, f);
        e.push(f);
        Zr(this, a, h)
      }
      this.b.set(a + ca, b ? "false" : "true");
      f = new ud;
      h = A(f.callback, f);
      e.push(f);
      this.b.nb(h);
      d && Ad(new Gr(e), d);
      Wr(this, a, b, !!c)
    } else b ? Zr(this, a, d) : d && d(), Wr(this, a, !1, !!c);
  else d && d()
};

function as(a, b, c) {
  for (var d = !1, e = 0; e < b.length; ++e) {
    var f = a.getItem(b[e]);
    f && f.A != c && (f.A = c, d = !0)
  }
  d && Xr(a)
}

function bs(a, b, c) {
  c.set(a + "/color", b.toString())
}

function Wr(a, b, c, d) {
  cs(a, !d);
  var e = a.getItem(b);
  e.Md = !!c;
  if (!e.o)
    if (ds(b)) e.Md && es(b);
    else {
      var f = Ko(),
        h, k = Dq(a.o);
      k && (h = k.o(k.b().fJ));
      Hda([b], function() {
        f.b("sec_cal_load_server");
        h && h.A()
      }, function() {
        f.b("sec_cal_load_total");
        h && (h.b(), h.report())
      });
      di.L().get(b) || Qr(a.o).D([b])
    }
  Xr(a);
  a.P(new fs(b, c));
  e.Md && d && a.P(new Yr)
}

function cs(a, b) {
  if (b && !a.B)
    for (var c = a.yb(), d = 0, e = c.length; d < e; ++d) {
      var f = c[d];
      f.B = f.Md
    }
  a.B = b
}
v.Me = function(a) {
  Za(a) && (a = this.getItem(a));
  return !!a && a.Md && !a.b
};

function gs(a) {
  return A(a.DA, a, !0)
}
v.DA = function(a, b, c) {
  if (b.getId() == c.getId()) return 0;
  var d = Th(this.o);
  if (b.getId() == d) return -1;
  if (c.getId() == d) return 1;
  d = c.type - b.type;
  return 0 == d || 2 != b.type && 2 != c.type ? a && Qd(this.o).isEnabled(99) && (0 != d || 2 != b.type) && (a = this.B ? b.B : b.Md, a != (this.B ? c.B : c.Md)) ? a ? -1 : 1 : hs(Mj.L(), b).toLowerCase().localeCompare(hs(Mj.L(), c).toLowerCase()) : d
};

function hs(a, b) {
  return is(a, b.getId(), !0)
}

function is(a, b, c) {
  a = a.getItem(b).getTitle();
  return c ? a : E(a)
}

function Xr(a) {
  a.dx() ? a.D = !0 : (a.D = !1, a.P(new js))
}
v.Gb = function() {
  Mj.J.Gb.call(this);
  this.D && !this.dx() && Xr(this)
};
v.tx = Pa(68);

function Ur(a, b, c, d, e, f, h) {
  var k = ch(a.b, c + "/color", 0);
  k && (k | 0) == k && 1 <= k && 66 >= k || (k = Ch(Ida(a), [Rh(Qh(a.o))]), bs(c, k, a.b));
  var m;
  var n = a.b,
    q = Qd(a.o).isEnabled(25),
    k = ch(n, c + "/color", 0),
    n = n.getString(c + "/customColor", void 0);
  q && (n && n.split ? (q = n.split(","), q = 3 != q.length || "0" != q[0] && "1" != q[0] || !q[1] || 7 != q[1].length || "#" != q[1].charAt(0) || "#000000" != q[2] && "#FFFFFF" != q[2].toUpperCase() ? !1 : !0) : q = !1);
  if (q) {
    var n = n.split(","),
      q = 1 == n[0] ? !0 : !1,
      r = n[2],
      u = n[1];
    q ? m = n[1] : m = th(k, 0);
    m = new Eh(k, q, m, r, u)
  } else m = Fh(k);
  b =
    new ks(b, c, m, d, !e, f, h || !1);
  f || cs(a, !1);
  a.add(b, f, b.color)
}

function Ida(a) {
  var b = {};
  a.forEach(function(a) {
    if (!a.b) {
      a = a.color.Ob();
      var d = String(a);
      d in b || (b[d] = 0);
      b[a] ++
    }
  });
  return b
}

function ks(a, b, c, d, e, f, h) {
  fh.call(this, b);
  this.rb = a;
  this.color = c;
  this.type = d;
  this.Md = e;
  this.B = !1;
  this.b = f;
  this.A = !1;
  this.o = h;
  this.D = !1
}
C(ks, fh);
ks.prototype.ob = function() {
  var a = di.L().get(this.getId());
  return !this.o && !!a && 60 <= a.Bc
};
ks.prototype.getTitle = function() {
  var a = di.L().get(this.getId());
  return a && a.Rb ? a.Rb : this.rb
};
ks.prototype.setTitle = Na("rb");
ks.prototype.jt = Pa(69);

function js() {
  J.call(this, ua)
}
C(js, J);

function Yr() {
  J.call(this, "clm.reordered")
}
C(Yr, J);

function fs(a, b) {
  J.call(this, "clm.itemstate");
  this.id = a;
  this.o = b
}
C(fs, J);
var Vj = {};

function Tr(a, b) {
  return dh(a.b, b + "/availOffline", !1)
}

function $r(a, b) {
  var c = mo(a.o);
  return c || !c && Tr(a, b)
};

function ls(a, b, c, d, e) {
  H.call(this);
  this.o = a;
  this.D = c;
  this.B = new Br(R(this.D));
  this.b = Li("div", {
    "class": "calList"
  });
  this.B.B.appendChild(this.b);
  Ej(this.b, "multiselectable", !0);
  Dj(this.b, "listbox");
  Ej(this.b, "labelledby", d);
  this.C = e;
  this.A = b;
  K(this.o, ua, this.lC, !1, this);
  K(this.o, "clm.reordered", this.m1, !1, this);
  K(lo(this.A), "m", this.lC, !1, this);
  this.xb = new rr
}
C(ls, H);
var ms = new T('<div class="calListChip" id="${labelId}" title="${name}">${chipInternals}</div><div class="calListImg${selectedSuffix} calListImg ${extraClasses}" id="${popupId}" tabindex="-1"></div>'),
  ns = new T('<div style="cursor:${cursor};" class="calListLabelOuter"><div class="calListLabel${selectedSuffix}"><div class="calListSquare goog-inline-block" style="background:${bgcolor};border-color:${bgcolor}"></div><span style="${bidiStyles}">${name}</span></div></div>');
v = ls.prototype;
v.M = function() {
  this.b.innerHTML = g;
  ls.J.M.call(this)
};
v.fh = Pa(62);
v.eh = Pa(64);
v.lC = function() {
  var a = [];
  this.o.forEach(function(b) {
    b.b || a.push(b)
  }, !0);
  a.sort(gs(Mj.L()));
  var b = this.xb.hasFocus(),
    c;
  if (b) {
    var d = Ar(this.xb);
    d && (c = d.firstChild.id)
  }
  var d = Qd(this.A).isEnabled(7),
    e = -1;
  this.b.innerHTML = g;
  for (var f = [], h = 0; h < a.length; ++h) {
    Vj[a[h].getId()] = h;
    var k = a[h];
    if (os(this, k.getId())) {
      e++;
      var m = hs(this.o, k),
        n = $r(this.o, k.getId()) && this.o.Me(k),
        k = Jda(this, k, im(m)),
        m = Li("div", "calListRow");
      f.push(m);
      this.b.appendChild(m);
      m.innerHTML = k;
      Ej(m, "selected", n);
      Dj(m, "option")
    }
  }
  Er(this.B);
  Kd(this.A, 18) && Cp(this.A).Zs();
  sr(this.xb, f);
  d && b && (c && vr(this.xb, function(a) {
    return a.firstChild.id == c
  }), this.xb.focus())
};
v.m1 = function() {
  R(this.D).firstChild.scrollTop = 0;
  Er(this.B)
};

function os(a, b) {
  if (b == Th(a.A)) return a.C;
  var c = a.o.getItem(b);
  return a.C == (2 == c.type)
}

function Jda(a, b, c) {
  var d = b.getId(),
    e = "label-" + d,
    f = b.A,
    h = $r(a.o, d),
    k = h && a.o.Me(b),
    m = b.getId();
  di.L().get(m) || Th(a.A);
  ms.put("chipInternals", Kda(c, k ? b.color.b.b : g, k, h));
  ms.put("selectedSuffix", g);
  ms.put("labelId", e);
  ms.put("name", f ? "There was a problem refreshing this calendar." : c);
  ms.put("popupId", "popup-" + d);
  a = mo(a.A);
  ms.put("extraClasses", a ? f ? "calListImg-stale" : g : "ui-disabled");
  return ms.toString()
}

function Kda(a, b, c, d) {
  ns.put("name", a);
  ns.put("bgcolor", b);
  ns.put("bidiStyles", gm(ke(a)));
  ns.put("selectedSuffix", c ? "-sel" : g);
  ns.put("cursor", d ? "pointer" : "default");
  return ns.toString()
};

function ps(a, b) {
  this.b = a;
  this.o = b
}
ps.prototype.Yd = Pa(70);
ps.prototype.toString = function() {
  return this.b + "-" + this.o.ib()
};

function Qo() {}
Va(Qo);
Qo.prototype.b = null;

function Lda(a, b, c, d, e, f) {
  a.A = b;
  a.F = c;
  a.C = d;
  a.D = e;
  a.B = f
}
Qo.prototype.Sa = function() {
  S(R(Ga), !1);
  R("gridcontainer").className = g
};

function qs(a) {
  var b = R("gridcontainer");
  b.innerHTML = "<div id=lv_" + a.b.B + "></div>";
  b.className = "lv-gridcontainer";
  S(R(Ga), !0)
}

function Mda(a) {
  yq(a.B).b(Ia, A(function() {
    this.o && this.o.bq();
    R(Ga).innerHTML = qr.nL();
    qs(this);
    kp(!0);
    Cp(O()).jh();
    this.b.render();
    this.o && (this.o.$H(), this.o.bA(), this.o.aI());
    qr.pL() ? qr.vL() : 0 == qr.rL() && qr.wL()
  }, a))
}

function rs(a, b) {
  if (0 < a.A.o.length) {
    var c = Zp(a.A),
      d = ak(Yp(a.A)).Ja(),
      c = Mg(ak(c));
    c.$ += 61;
    c = c.Ja();
    ss(d, c, b ? void 0 : 1)
  }
}

function ts(a, b) {
  if (0 < a.A.o.length) {
    var c = Zp(a.A),
      d = ak(c).Ja(),
      c = Mg(ak(c));
    c.$ -= 61;
    c = c.Ja();
    ss(c, d, b ? void 0 : -1)
  }
}

function So(a) {
  a.b && a.o && a.o.nC()
};

function lp(a, b, c, d, e, f, h) {
  this.Y = a;
  this.C = b;
  this.b = c;
  this.K = d;
  this.F = f;
  this.B = h;
  this.G = [];
  this.D = [];
  this.V = [];
  this.o = 0;
  this.A = [];
  this.Z = []
}
lp.prototype.X = null;
lp.prototype.Jb = 0;

function us(a, b) {
  for (var c = [], d = [], e = 0; e < b.length; ++e) {
    var f = b[e];
    f instanceof fg ? d.push(f) : c.push({
      Ic: f,
      nn: d.length
    })
  }
  a.G = d;
  a.D = c
}
lp.prototype.render = function(a) {
  if (R("lv_" + this.B) && 0 < this.C.o.length) {
    var b = R("lv_" + this.B);
    this.A = [];
    this.Z = [];
    var c = R("gridcontainer").offsetHeight / 30,
      d = ['<table class="printFullHeight listv" cellspacing=0>'],
      e = this.G,
      f = this.D,
      h = cp(this.b).K();
    if (this.Jb & 1 && h) {
      var k = Yp(this.C),
        k = vk(this.b).Mc(ak(k));
      vs(d, "<i>Showing events after " + k + '. <span tabindex=0 role=button class="lk lvl-e">Look for earlier events</span></i>')
    }
    var m = !1,
      n = 0;
    pk(rk(this.b));
    for (var q = k = null, r = 0; r < f.length; ++r) {
      var m = !m,
        u = f[r],
        w = u.Ic,
        y = u.nn,
        u = r + 1 < f.length ? f[r + 1].nn : e.length;
      if (!(this.o > u)) {
        this.o > y && (y = this.o);
        if (u > y && w) {
          null === k && (k = w);
          this.F.b.getItem(e[y].Fa());
          var q = w,
            D = d,
            L = u - y,
            Q = f[0].Ic,
            Z = f[f.length - 1].Ic;
          if (q) {
            var V = m ? " lv-alt" : g,
              ia = 1 == L ? " lv-lastevent" : g,
              xa = pk(rk(this.b)).equals(q) ? " lv-today" : g,
              qa = "lvd-" + q.toString();
            this.A.push(qa);
            D.push('<tr class="lv-row lv-newdate lv-firstevent ', xa, V, ia, '"', '><th class="lv-datecell" rowspan="', L, '"><span tabindex=0 role=link class="lk lv-datelink ', qa, " ", "lv-navigable", '">',
              Cq[q.Wb()], " ", vk(this.b).tu(q, Q, Z), "</span></th>")
          }
          q = w
        }
        for (Q = !0; y < u; y++, n++) {
          var L = e[y],
            V = w,
            D = d,
            xa = Q,
            sb = 1 == u - y,
            $a = m,
            ia = this.F.b.getItem(L.Fa()).color,
            qa = L.o,
            tb = !1,
            Q = new ps(L.getId(), V),
            Z = "lvr-" + Q.toString();
          this.A.push(Z);
          L.Ec() && this.Z.push(Q.toString());
          qa || !L.V || V.equals(L.Ma().Ca()) || (V.equals(L.fb().Ca()) ? tb = !0 : qa = !0);
          xa || (D.push('<tr class="cal', ia.B, " lv-row"), $a && D.push(" lv-alt"), sb && D.push(" lv-lastevent"), pk(rk(this.b)).equals(V) && D.push(" lv-today"), D.push('">'));
          var $a = L.Nc,
            ia = ia.b,
            ia = (V = 2 == $a) ? ia.B : ia.o,
            sb = V ? " lv-declined" : g,
            xa = 3 == $a || 0 == $a,
            gb = void 0;
          0 == $a ? gb = ma : 3 == $a ? gb = pa : V ? gb = "cic-de" : Jj(L) && (gb = ka);
          $a = void 0;
          $a = gb ? mm(gb, Z) : "&nbsp;";
          D.push('<td class="lv-eventcell lv-status">', $a, "</td>");
          D.push('<td class="lv-eventcell lv-time', sb, '">');
          D.push('<span class="lv-event-time ', Z, '">');
          $a = gb = void 0;
          qa ? gb = "All day" : tb ? (qa = vk(this.b).zb(L.fb()), gb = "&raquo;" + qa, $a = "Until " + qa) : L.Ec() ? (qa = vk(this.b).zb(L.Ma()), gb = "At " + qa) : (qa = L, tb = vk(this.b), gb = qa.Ma().equals(qa.fb()) || qa.Tb() ?
            tb.zb(qa.Ma()) : tb.un(gg(qa)));
          $a = $a || gb;
          D.push(gb, "</span></td>");
          tb = L.Id();
          gb = mo(this.b) && tb;
          qa = L.getTitle() || (tb ? E(tb.getTitle()) : g) || "(No title)";
          D.push('<td class="lv-eventcell lv-titlecell', sb, '">');
          gb && (tb = Jf(tb.o), D.push('<div><img class="webContent ', "lvw-" + Q.toString(), '" src="', E(tb), '"></div>'));
          D.push('<div class="lv-zippy ', Z, '" id="', this.B + "z" + Q.toString(), '"></div>');
          D.push('<div class="lv-event-title-line">');
          (tb = ki(L)) && D.push('<span class="lv-event-color goog-inline-block" id="',
            this.B + "ev" + Q.toString(), '" style="background-color:', tb, '">&nbsp;</span>');
          tb = [];
          sb = $a;
          gb = L;
          $a = Th(this.b);
          gb = gb.Fa();
          $a == gb ? $a = null : ($a = rg(Gd(this.b, 5), gb), $a = null != $a ? Yf($a) : null);
          sb = qa + ", " + sb;
          $a && (sb += ", Calendar: " + $a);
          xa ? sb += ", needs action" : V && (sb += ", declined");
          tb.push('<span tabindex=0 role=button aria-expanded=false class="lk lv-event-title ', Z, " ", "lv-navigable", '" style="color:', ia, '" title="', E(sb), '">');
          tb.push(vba(qa), "</span>");
          D.push(hm(qa, tb.join(g)));
          if (V = E(L.od)) V = hm(V), D.push("<em class=lv-location> - ",
            V, "</em>");
          D.push(" ");
          V = L;
          Qj(Rj(this.b), V) && D.push(mm(ta));
          !L.of() && Sj(L) && D.push(mm(ra));
          !L.of() && Oj(L, 8192) && D.push(mm(sa));
          !L.of() && L.gx() && D.push(mm(na));
          V = L;
          !V.of() && Tj(this.F, V) && !Uj(this.F, V) && D.push(mm(oa));
          !L.of() && Tj(this.F, L) && Uj(this.F, L) && D.push(mm(la));
          D.push('</div><div id="li-', Q.toString(), '" class="', Z, ' lv-noact"></div>');
          D.push("</td></tr>");
          Q = !1
        }
        if (n > c) break
      }
    }
    this.X = q;
    h && (this.Jb & 2 ? (e = ak(Zp(this.C)), c = "lvl-l") : (e = q, c = "lvl-fs"), e = vk(this.b).Mc(e), vs(d, "<i>Showing events until " +
      e + '. <span tabindex=0 role=button class="lk ' + c + ' lv-navigable">Look for more</span></i>'), this.A.push(c));
    d.push(da);
    b.innerHTML = d.join(g);
    a && null != k && Sl(this.K, k, 1)
  }
};

function vs(a, b) {
  a.push("<tr><td colspan=5><blockquote>", b, "</blockquote></td></tr>")
}

function Ro(a, b) {
  if (1 == b || -1 == b) {
    var c = a.K.focus,
      d;
    if (-1 == b) {
      for (d = a.V.pop(); d && d.ya() >= c.ya();) d = a.V.pop();
      d ? d = d.max(Sg(c, -28)) : d = Sg(c, -7)
    } else a.X ? d = Pg(c).max(a.X) : d = Sg(c, 28), a.V.push(c);
    a.K.xe(d.Ca())
  } else 2 == b ? (ws(a, 1), a.render(!0)) : -2 == b && (ws(a, -1), a.render(!0))
}

function ws(a, b) {
  var c = Mg(a.K.first.Ca()).Ca();
  if (0 === a.G.length) xs(a, c);
  else if (0 > b) {
    var d = Xp(a.C, a.D[0].Ic, ys(a));
    0 == d.length ? (a.Jb |= 1, a.o = 0) : (c = Wp(a.C, c, 46, ys(a), !0), us(a, d.concat(c)), a.o += b + zs(d), 0 > a.o ? (a.o = 0, a.Jb |= 1) : a.Jb &= -2)
  } else 1 < a.D.length ? (a.o = a.D[1].nn, a.Jb &= -3) : a.Jb |= 2;
  0 < a.o && (a.Jb &= -2);
  if (25 > a.G.length - a.o) {
    for (var e = -1, c = 0; c < a.D.length && !(a.D[c].nn >= a.o + b); ++c) e = c;
    d = -1 == e ? a.K.first.Ca() : a.D[e].Ic;
    c = Wp(a.C, d, 46, ys(a), !0);
    if (0 < c.length) {
      var e = -1 == e ? 0 : a.D[e].nn,
        f = zs(c);
      e + f >= a.G.length &&
        (25 > f ? xs(a, d) : (a.o -= e, f = zs(c), a.Jb = 46 > f ? a.Jb | 2 : a.Jb & -3, us(a, c)))
    }
  }
  cp(a.b).K() && (1 < b && a.Jb & 2 ? rs(a.Y, !0) : -1 > b && a.Jb & 1 && ts(a.Y, !0))
}

function xs(a, b) {
  a.o = 0;
  var c = Wp(a.C, b, 46, ys(a), !0),
    d = zs(c);
  if (5 > d) {
    a.Jb |= 2;
    var e = Xp(a.C, b, ys(a)),
      f = zs(e),
      c = e.concat(c);
    5 > d + f ? a.Jb |= 1 : a.o = d + f - 5
  }
  us(a, c)
}

function zs(a) {
  for (var b = 0, c = a.length - 1; 0 <= c; --c) a[c] instanceof fg && ++b;
  return b
}

function ys(a) {
  var b = Mj.L(),
    c = P(a.b);
  Yo(bp(a.b)) ? (a = As, b = $l(b), b = new Yl(b, !0, a)) : b = Zl(b, c);
  return b
}
lp.prototype.O = Pa(71);

function Bs(a) {
  this.A = Oh(Qh(a));
  this.b = "x";
  (this.o = Iq() && !!gbar.ela) && gbar.ela(!1)
}
var Nda = {
  "eui-t": "els",
  "eui-s": "elm",
  "eui-n": "ell"
};
Bs.prototype.apply = function() {
  var a = Hi(),
    b;
  b = this.A.get("dense");
  b = "s" == b ? za : "t" == b ? Aa : "eui-n";
  1060 >= a.width || 590 >= a.height ? b = Aa : (1252 >= a.width || 640 >= a.height) && b != Aa && (b = za);
  this.b != b && (this.b = b, Cs(R(ja), b), (a = R("offline-searchbar")) && Cs(a, b), this.o && (a = gbar[Nda[za]]) && a())
};

function Cs(a, b) {
  switch (b) {
    case Aa:
      an(a, za, Aa);
      break;
    case za:
      an(a, Aa, za);
      break;
    default:
      Zm(a, Aa, za)
  }
};

function Ds() {}

function Es(a, b, c, d, e) {
  var f = O();
  yq(f).b(Ca, A(function() {
    this.b = Wf.Cx(f);
    this.b.gR(b, c, d, e)
  }, a))
}
Ds.prototype.$a = Pa(72);
Ds.prototype.close = function() {
  this.b.close()
};
Ds.prototype.getZIndex = Pa(73);

function Fs(a, b, c) {
  this.o = a;
  this.B = c || null;
  this.A = [];
  this.b = new N(this)
}
var Gs;

function Hs(a) {
  Sr(Qr(a.o), A(a.H1, a), A(a.vM, a))
}
v = Fs.prototype;
v.H1 = function(a) {
  a = this.A = this.A.concat(a);
  for (var b = {}, c = 0, d = 0; d < a.length;) {
    var e = a[d++],
      f = db(e) ? "o" + eb(e) : (typeof e).charAt(0) + e;
    Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
  }
  a.length = c
};
v.vM = function(a) {
  if (2E3 < a.length) {
    var b = new Ds;
    Es(b, "Calendar limit reached", wb('<div class="il-dialog"><div class="il-message">', "Your Other Calendars list contains " + a.length + " calendars. Google Calendar can become unresponsive when the list contains more than 2000 calendars.<br><br> To fix this, go to Calendar Settings and unsubscribe or hide the calendars you don't use regularly.", '</div><span id="too_many_cal" class="lk" tabindex="0">Go to Calendar Settings</span></div>'), A(this.lT, this, b));
    a = a.splice(0, 2E3)
  }
  return a
};
v.lT = function(a) {
  var b = R("too_many_cal");
  b && (a = A(this.gS, this, a), this.b.I(b, "click", a), this.b.I(b, "keypress", a))
};
v.gS = function(a) {
  a.close();
  Is(1)
};

function Js(a) {
  var b, c;
  b = pk(rk(a.o));
  var d = Qg(b.year, b.month, 1);
  c = Mg(d);
  var e = _hosted;
  if (!e && cp(a.o)) {
    var f;
    f = (f = Dp) ? f.Z : -1;
    if (0 < f) {
      var h;
      h = (h = kq()) && h.length ? Ng(ak(h[1]), ak(h[0])) : -1;
      0 < h && (e = 5 <= f / h)
    }
  }
  if (e || _hosted) {
    e = P(a.o).tc();
    d = d.Wb() - e;
    0 > d && (d += 7);
    if (30 > Bg(b.year, b.month) || 5 > d) d += 7;
    c.$ -= d;
    b = c.Ja();
    c.$ += 60
  } else c.$ -= 42, b = c.Ja(), c.$ += 168;
  c = c.Ja();
  d = A(a.ZU, a, Ko());
  Ks(b, c, a.A, d)
}
v.ZU = function(a) {
  a.b("secondaryCalLoadTime");
  Io("timeToSecondaryCalsLoaded", hb() - _loadStartTime);
  this.A = [];
  this.b.I(Nf(this.o), "c", this.Dw)
};
v.Dw = function() {
  if (!Gs) {
    var a = this.A.length,
      b = Th(this.o);
    1 < a || 1 == a && this.A[0] != b || (this.b.b(Nf(this.o), "c", this.Dw), Gs = !0, this.B && this.B.b("allCalsVisible"), (a = jo(this.o)) && a.i2())
  }
};

function Ls(a, b, c, d, e, f, h, k, m, n) {
  H.call(this);
  this.Z = d;
  this.Ya = a;
  this.id = e || this.Ya.id + "_";
  this.className = f || "dp-";
  this.A = c;
  this.b = b;
  this.C = {};
  a = x(h) ? h : 1;
  k = (1 << a + 7) - (1 << a + (k || 5));
  this.X = k + (k >> 7);
  this.Ka = !!m;
  this.Y = !!n;
  Ms[this.id] = this
}
C(Ls, H);
var Ms = {};
v = Ls.prototype;
v.Pk = !1;
v.sy = null;
v.gI = null;

function Oda(a, b) {
  var c = a.id,
    d = a.className + "cell " + a.className,
    e = a.Jc;
  if (!a.o) {
    a.G = [];
    for (var f = 7; f--;) a.G[f] = a.b.Pm(a.b.xu(f));
    for (var f = a.className, h = [], k = 48; k--;) {
      var m = ["cell"];
      k & 2 ? (m.push(k & 1 ? "weekend-selected" : "weekday-selected"), k & 8 && m.push("today-selected"), m.push(k & 4 ? "onmonth-selected" : "offmonth-selected")) : (m.push(k & 1 ? "weekend" : "weekday"), k & 8 && m.push("today"), m.push(k & 4 ? "onmonth" : "offmonth"));
      k & 16 && m.push("day-left");
      k & 32 && m.push("day-right");
      h[k] = f + m.join(" " + f) + " "
    }
    a.F = h;
    a.D = [];
    a.o = a.id +
      "day_";
    a.B = a.id + "cur"
  }
  b.push('<div class="', a.className, 'monthtablediv monthtableSpace">');
  b.push('<table class="', a.className, 'monthtable" role="presentation" cellspacing=0 cellpadding=0 style="-moz-user-select:none;-webkit-user-select:none;">');
  a.Ka ? b.push('<tr id="', c, 'header" class="monthtableHeader"><td colspan=', e.b - 2, ' id="', a.B, '" class="', d, 'sb-cur">', a.Y ? '<span class="h zippy-arrow" unselectable=on>&nbsp;</span>' : g, '<span class="calHeaderSpace">', a.b.Bk(a.Jc.A), '</span></td><td colspan=2 class="',
    d, 'sb-nav"><span id="', c, 'prev" class="', d, 'sb-prev goog-inline-block"></span><span id="', c, 'next" class="', d, 'sb-next goog-inline-block"></span></td></tr>') : b.push('<tr class="', d, 'heading"  id="', c, 'header"><td id="', c, 'prev" class="', d, 'prev">&laquo;</td><td colspan=', e.b - 2, ' id="', a.B, '" class="', d, 'cur">', a.b.Bk(a.Jc.A), '</td><td id="', c, 'next" class="', d, 'next">&raquo;</td></tr>');
  b.push(da);
  f = a.b.Bk(a.Jc.A);
  a.O && (f = a.O + " - " + f);
  b.push('<table class="', a.className, 'monthtable monthtableBody" summary="',
    E(f), '" cellspacing=0 cellpadding=0 id="', c, 'tbl" style="-moz-user-select:none;-webkit-user-select:none;"><colgroup span=7>');
  b.push('<tr class="', a.className, 'days">');
  c = a.Jc.C;
  f = a.X;
  for (h = 0; h < e.b; h++) b.push('<th scope="col" class="', d, "dayh"), f >> c & 1 && b.push(" ", d, "weekendh"), b.push('" title="', a.b.Qp(c), '">', a.G[c], "</th>"), c = (c + 1) % 7;
  b.push(ea);
  var d = a.Jc,
    e = d.b,
    c = a.id,
    f = a.X,
    h = a.F,
    k = vp(d),
    n = a.sy,
    m = n ? a.sy.ib() : 1,
    q = n ? a.gI.ib() : 0,
    n = n ? "pointer" : "default",
    r = a.V.ib(),
    u = a.Jc.A.month,
    w = 0;
  a.K && (a.C = a.K(d));
  for (var y = 0; y < a.Jc.o; y++) {
    b.push('<tr style="cursor:', n, '" id="', c, "row_", y, '">');
    for (var D = d.C, L = e; L--; w++) {
      var Q = k[w],
        Z = (Q == r && 8) | ((Q >> 5 & 15) == u && 4) | (Q >= m && Q <= q && 2) | (L == e - 1 && 16) | (0 == L && 32) | f >> D & 1,
        D = (D + 1) % 7;
      a.D[w] = Z;
      b.push('<td id="', a.o, Q, '" class="', h[Z], a.C[Q], '">', Q & 31, "</td>")
    }
    b.push(ea)
  }
  b.push(da);
  b.push("</div>")
}
v.render = function() {
  if (this.Pk) {
    var a = [];
    Oda(this, a);
    this.Ya.innerHTML = a.join(g);
    var b = this.id,
      a = this.Z;
    a(b + "prev").onmousedown = function() {
      Ns(Ms[b], -1)
    };
    a(b + "next").onmousedown = function() {
      Ns(Ms[b], 1)
    }
  }
};
v.H = Pa(16);

function Ns(a, b) {
  Os(a, Tg(a.Jc.A.year, a.Jc.A.month + b, 1).Ca())
}

function Os(a, b) {
  var c = a.Jc.A;
  if (b.year != c.year || b.month != c.month) a.Jc = a.A.b(b), a.update()
}
v.update = function() {
  this.Pk && this.render()
};
v.getId = p("id");
v.show = function() {
  this.Pk = !0;
  this.render()
};
v.Pa = function() {
  this.Ya.innerHTML = g;
  this.Pk = !1
};
v.Ha = p("Pk");
v.setup = function(a) {
  this.V = a;
  this.Jc ? this.update() : this.Jc = this.A.b(a)
};
v.M = function() {
  delete this.Ya;
  delete Ms[this.id];
  Ls.J.M.call(this)
};

function Ps() {
  M.call(this)
}
C(Ps, M);

function Qs(a) {
  M.call(this);
  this.A = a;
  this.o = this.b = null
}
C(Qs, Ps);

function Pda(a, b) {
  var c = b.tc(),
    d = new Bl,
    c = new yp(c),
    e = b.sj(),
    f = b.Qf();
  eh(P(a.A), 0, !1) && (R("dp_0").display = "none");
  a.b = new Ls(R("dp_0"), d, c, R, void 0, void 0, e, f, !0, !0);
  a.b.O = "Mini calendar";
  d = rk(a.A);
  a.b.setup(pk(d));
  a.b.show()
};

function Rs(a) {
  M.call(this);
  this.D = a;
  this.o = this.B = 10;
  this.F = !1;
  this.b = new N(this)
}
C(Rs, M);

function Cp(a) {
  return Gd(a, 18)
}

function Qda(a) {
  var b = op.L(),
    c = new Rs(a);
  document.documentElement.style.overflow = "hidden";
  R("calmaster").style.overflow = "auto";
  c.b.I(b, "o", c.CQ);
  a.b(18, c)
}
v = Rs.prototype;
v.CQ = function(a) {
  "h" == a.target.oc && this.F && (this.F = !1, this.Ys())
};
v.Ys = function() {
  this.A ? this.A.OC() : this.pC()
};
v.uB = Pa(74);
v.pC = function() {
  var a = R("gridcontainer");
  if (a && 0 != a.offsetHeight) {
    var b = a.scrollTop;
    this.jh();
    mp();
    a.scrollTop = b
  } else this.F = !0, R("newdirtarget") && (this.B = Hi().height, this.o = 0, this.P("H")), Ss()
};

function Ts(a) {
  var b = R("funbox");
  return b && xj(b) ? dh(P(a.D), "funboxVisible", "false") || ci() ? b : null : null
}
v.jh = function() {
  var a = R("gridcontainer");
  if (!a.offsetParent || a.offsetParent == document.body) return !1;
  var b = oj(R("mothertable")),
    c = Hi().height,
    d, e = oj(a);
  d = (d = Ts(this)) ? d.offsetHeight || 26 : 0;
  var f = cp(this.D);
  d = Math.max(f instanceof To ? 316 : 250, c - b.y - e.y - d);
  if (e = 5 <= Math.abs(d - a.offsetHeight)) b = Math.max(d, c - b.y), this.B = c, this.o = b, this.P("H");
  a.style.height != d + "px" && (a.style.height = d + "px");
  c = Ts(this);
  bn(a, "has-funbox", !!c);
  a = cp(this.D).o();
  if (!e && !a) return !1;
  a = R("calendars_fav");
  c = a.offsetHeight;
  this.Zs();
  a.offsetHeight != c && this.K && this.K.Pa();
  Ep(ip.L());
  Ss();
  Us();
  return !0
};

function Ss() {
  uj(R("calmaster"), Hi().height)
}
v.Zs = function() {
  if (this.C) {
    var a = R("clst_my"),
      b = rj(a).y,
      c = Hi().height - b,
      d = R("lhscalinner_my"),
      b = xj(d),
      e = xj(R("lhscalinner_fav")),
      f = Number(b) + Number(e);
    if (f) {
      var a = a.offsetHeight,
        a = a + 2,
        h = R("searchAddCal"),
        h = e && h ? h.offsetHeight : 0,
        d = Bj(d, "padding").bottom,
        k = Ei("navfooter").offsetHeight,
        f = e ? Math.max(c / f - 2 * a - h - k, 40) : 0,
        c = b ? Math.max(c - 2 * a - h - f - d - k, 40) : 0,
        a = b ? Math.max(c - this.C.b.offsetHeight, 0) : 0,
        h = e ? Math.max(f - this.G.b.offsetHeight, 0) : 0;
      b && Fr(this.C.B, c + h);
      e && Fr(this.G.B, f + a);
      Us()
    }
  }
};

function Us() {
  var a = Ei("navfooter"),
    b = a.offsetHeight,
    c = Math.max(a.parentElement.offsetHeight, Ei("nav").offsetHeight + b);
  a.style.top = c - b + "px"
};

function Rda(a, b) {
  this.b = a;
  this.o = b
};

function Vs() {
  return !(lc("iPad") || lc("Android") && !lc("Mobile") || lc("Silk")) && (lc("iPod") || lc("iPhone") || lc("Android") || lc("IEMobile"))
};

function Sda(a, b) {
  for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
  return c.join("\x0B")
};

function Ws(a) {
  J.call(this, "navigate");
  this.Mb = a
}
C(Ws, J);

function Xs(a, b, c, d) {
  M.call(this);
  if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
  var e;
  c ? e = c : (e = "history_state" + Ys, document.write(nb('<input type="text" name="%s" id="%s" style="display:none">', e, e)), e = R(e));
  this.F = e;
  this.o = c ? Ki(Di(c)) : window;
  this.K = b;
  G && !b && (this.K = "https" == window.location.protocol ? "https:///" : 'javascript:""');
  this.Oa = new ze(150);
  this.hc(this.Oa);
  this.A = !a;
  this.b = new N(this);
  if (a || Zs) d ? a = d : (a = "history_iframe" + Ys, b = this.K ? 'src="' + E(this.K) + '"' :
    g, document.write(nb('<iframe id="%s" style="display:none" %s></iframe>', a, b)), a = R(a)), this.G = a, this.O = !0;
  Zs && (this.b.I(this.o, "load", this.x_), this.Z = this.V = !1);
  this.A ? $s(this, at(this), !0) : bt(this, this.F.value);
  Ys++
}
C(Xs, M);
Xs.prototype.C = !1;
Xs.prototype.D = !1;
Xs.prototype.B = null;
var ct = function(a, b) {
    var c = b || Sda;
    return function() {
      var b = this || Sa,
        b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
        e = c(eb(a), arguments);
      return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
    }
  }(function() {
    return G ? 8 <= document.documentMode : "onhashchange" in Sa
  }),
  Zs = G && !Ac(8);
v = Xs.prototype;
v.Nl = null;
v.M = function() {
  Xs.J.M.call(this);
  this.b.ea();
  this.Ua(!1)
};
v.Ua = function(a) {
  if (a != this.C)
    if (Zs && !this.V) this.Z = a;
    else if (a)
    if (pc ? this.b.I(this.o.document, Tda, this.q0) : qc && this.b.I(this.o, "pageshow", this.hS), ct() && this.A) this.b.I(this.o, "hashchange", this.H_), this.C = !0, this.P(new Ws(at(this)));
    else {
      if (!G || Vs() || this.V) this.b.I(this.Oa, "tick", A(this.mD, this, !0)), this.C = !0, Zs || (this.B = at(this), this.P(new Ws(at(this)))), this.Oa.start()
    } else this.C = !1, Vd(this.b), this.Oa.stop()
};
v.x_ = function() {
  this.V = !0;
  this.F.value && bt(this, this.F.value, !0);
  this.Ua(this.Z)
};
v.hS = function(a) {
  a.b.persisted && (this.Ua(!1), this.Ua(!0))
};
v.H_ = function() {
  var a = dt(this.o);
  a != this.B && et(this, a)
};

function at(a) {
  return null != a.Nl ? a.Nl : a.A ? dt(a.o) : ft(a) || g
}

function dt(a) {
  a = a.location.href;
  var b = a.indexOf("#");
  return 0 > b ? g : a.substring(b + 1)
}

function $s(a, b, c) {
  a = a.o.location;
  var d = a.href.split("#")[0],
    e = ub(a.href, "#");
  if (Zs || e || b) d += "#" + b;
  d != a.href && (c ? a.replace(d) : a.href = d)
}

function bt(a, b, c, d) {
  if (a.O || b != ft(a))
    if (a.O = !1, b = qb(b), G) {
      var e = $i(a.G);
      e.open("text/html", c ? "replace" : void 0);
      e.write(nb("<title>%s</title><body>%s</body>", E(d || a.o.document.title), b));
      e.close()
    } else if (b = a.K + "#" + b, a = a.G.contentWindow) c ? a.location.replace(b) : a.location.href = b
}

function ft(a) {
  if (G) return a = $i(a.G), a.body ? rb(a.body.innerHTML) : null;
  var b = a.G.contentWindow;
  if (b) {
    var c;
    try {
      c = rb(dt(b))
    } catch (d) {
      return a.D || (1 != a.D && a.Oa.setInterval(1E4), a.D = !0), null
    }
    a.D && (0 != a.D && a.Oa.setInterval(150), a.D = !1);
    return c || null
  }
  return null
}
v.mD = function() {
  if (this.A) {
    var a = dt(this.o);
    a != this.B && et(this, a)
  }
  if (!this.A || Zs)
    if (a = ft(this) || g, null == this.Nl || a == this.Nl) this.Nl = null, a != this.B && et(this, a)
};

function et(a, b) {
  a.B = a.F.value = b;
  a.A ? (Zs && bt(a, b), $s(a, b)) : bt(a, b);
  a.P(new Ws(at(a)))
}
v.q0 = function() {
  this.Oa.stop();
  this.Oa.start()
};
var Tda = ["mousedown", "keydown", "mousemove"],
  Ys = 0;

function gt() {
  M.call(this);
  var a = O();
  if (this.o = Qd(a).isEnabled(17)) this.b = new Xs, this.B = !0, this.C = {}, this.D = {}, this.A = !1, K(this.b, "navigate", this.IZ, !1, this), a = op.L(), K(a, "p", this.G2, !1, this), this.b.Ua(!0)
}
C(gt, M);
Va(gt);
v = gt.prototype;
v.ix = !1;

function ht(a, b, c) {
  a.o && (a.C[b] = c)
}
v.IZ = function(a) {
  !this.ix && this.B && it(this, decodeURI(a.Mb))
};

function it(a, b) {
  a.P(new J("I"));
  Iq() && gbar.close && gbar.close(window.event);
  var c = b.split("|"),
    d = c[0],
    c = 2 == c.length ? c[1] : g,
    e = op.L(),
    f = e.oc,
    e = e.Hk;
  (d != f || c != e) && (d = a.C[d]) && d(A(a.ot, a, f, e), c)
}
v.ot = function(a, b) {
  var c = a;
  b && (c += "|" + b);
  this.ix = !0;
  var d = this.b,
    c = encodeURI(c);
  at(d) != c && (d.A ? ($s(d, c, !1), ct() || G && !Vs() && bt(d, c, !1, void 0), d.C && d.mD()) : (bt(d, c, !1), d.Nl = d.B = d.F.value = c, d.P(new Ws(c))));
  this.ix = !1;
  op.L().Hk = b || null
};
v.G2 = function() {
  if (this.A) {
    var a = op.L(),
      b = a.oc;
    if (b) {
      var a = a.Hk,
        c = this.D[b];
      c && (a = c(a || g));
      this.ot(b, a)
    }
  }
};
v.Ua = Na("B");

function jt(a, b, c) {
  this.B = a;
  this.o = b;
  this.C = c;
  this.A = (a = R(c)) ? a.scrollTop : null;
  this.b = new N(this)
}
C(jt, H);
jt.prototype.M = function() {
  I(this.b);
  delete this.B;
  delete this.o
};

function Uda(a, b, c, d) {
  b = new jt(b, c, d);
  b.b.I(a, "o", b.D)
}
jt.prototype.D = function(a) {
  a = "h" == a.target.oc;
  var b = R(this.C);
  b && !a && (this.A = b.scrollTop);
  S(this.B, a);
  b && a && null !== this.A && (b.scrollTop = this.A);
  this.o.innerHTML = g;
  S(this.o, !a)
};
var mba = {
  800: Ca,
  801: wa,
  802: "focuswidget",
  803: "focuswidget",
  804: wa,
  805: Ca,
  806: Ca,
  807: Ca,
  808: Ca,
  809: wa,
  810: Ba,
  811: "offline",
  812: "tws",
  813: Ca,
  814: "push",
  815: Ca,
  816: "ww"
};

function kt() {}
kt.prototype.load = function(a, b, c, d) {
  d = d || new Pe;
  Vda(a, b, c, d)
};

function Vda(a, b, c, d) {
  d.send(a);
  K(d, va, function() {
    d.Yc() && mb(We(d, ga) || g, "javascript") ? b(d.oj()) : c()
  })
};

function lt(a, b) {
  this.o = a;
  this.b = b
}
lt.prototype.register = function(a) {
  a.b(28, this)
};

function mt(a, b) {
  for (var c = {}, d = 0; d < b.length; ++d) c[b[d]] = 1;
  for (var e = [], d = 0; d < a.length; ++d) c[a[d]] || e.push(a[d]);
  return e
};

function cq(a, b) {
  for (var c = 0, d = 0, e = a.length, f = b.length, h = [], k = -Infinity; c < e && d < f;) {
    var m = a[c],
      n = b[d],
      q = a[c + 1],
      r = b[d + 1];
    n <= m ? (k = r, d += 2) : k >= r ? d += 2 : k >= q ? c += 2 : (m = k > m ? k : m, q = n < q ? n : q, m < q && h.push(m, q), k = q == n ? r : q)
  }
  for (; c < e;) m = a[c++], m = m > k ? m : k, q = a[c++], m < q && h.push(m, q);
  return h
}

function $p(a, b) {
  var c = [];
  fq(a, b, c);
  return c
}

function fq(a, b, c) {
  for (var d = 0, e = 0, f = a.length, h = b.length, k = -1; d < f && e < h;) {
    var m = a[d],
      n = b[e],
      q = a[d + 1],
      r = b[e + 1];
    m < n ? q <= n ? d += 2 : r <= q ? (c[++k] = n, c[++k] = r, e += 2) : (c[++k] = n, c[++k] = q, d += 2) : r <= m ? e += 2 : q <= r ? (c[++k] = m, c[++k] = q, d += 2) : (c[++k] = m, c[++k] = r, e += 2)
  }++k < c.length && c.splice(k, c.length - k)
}

function eq(a, b, c) {
  var d = a.length - 1;
  0 <= d && a[d] >= b ? a[d] = c : a.push(b, c)
};

function nt(a) {
  a.sort();
  return a
}

function ot(a, b, c, d) {
  this.Xa = a;
  this.o = b;
  this.b = c;
  this.Wd = d
}
ot.prototype.Fa = p("Xa");
ot.prototype.toString = function() {
  return pt(this)
};

function pt(a, b) {
  var c = b || 0,
    d = a.Xa;
  return (/[\x00-\x20\"]/.test(d) ? '"' + encodeURIComponent(d).replace(qt, "%2B") + '"' : d) + " " + Jg(a.o) + "/" + Jg(a.b) + " " + (a.Wd + c)
}
ot.prototype.clone = function() {
  return new ot(this.Xa, this.o, this.b, 0)
};

function zda(a, b) {
  var c = [];
  rt(a, b, function(a, b) {
    c.push(!b || a && a.Wd >= b.Wd ? a : b)
  });
  return st(c)
}

function tt(a, b) {
  var c = [];
  rt(a, b, function(a, b) {
    b ? a && b && c.push(b) : c.push(a)
  });
  return st(c)
}

function ut(a) {
  var b = [];
  if (a) {
    a = a.split(/\n/g);
    for (var c = 0; c < a.length; ++c) {
      var d = a[c].match(/^(\S+) (\d+)\/(\d+) (\d+)$/);
      d && b.push(new ot(Wda(d[1]), jk(d[2]).ib(), jk(d[3]).ib(), Number(d[4])))
    }
    b.sort(Xda)
  }
  return b
}

function vt(a, b) {
  return a ? Db(a, function(a) {
    return pt(a, b)
  }).join("\n") : g
}

function dq(a) {
  for (var b = [], c = 0; c < a.length; ++c) {
    var d = a[c];
    b.push([d.o, d.b])
  }
  a = [];
  b.sort(Yda);
  for (var e = 0; e < b.length;) {
    c = b[e];
    d = c[1];
    for (e += 1; e < b.length && d >= b[e][0];) d = Math.max(d, b[e][1]), ++e;
    a.push(c[0], d)
  }
  return a
}

function iq(a, b) {
  for (var c = [], d = 0; d < a.length; ++d) {
    var e = a[d];
    b(e) && c.push(e)
  }
  return c
}

function wt(a, b, c) {
  b = Math.max(b, a.o);
  c = Math.min(c, a.b);
  return new ot(a.Xa, b, c, a.Wd)
}

function Xda(a, b) {
  return a.Xa < b.Xa ? -1 : a.Xa > b.Xa ? 1 : a.o - b.o
}

function rt(a, b, c) {
  function d(d, h) {
    var k;
    d ? (k = b[f], (null === h || h >= k.b) && ++f) : (k = a[e], (null === h || h >= k.b) && ++e);
    var q = wt(k, m, h || k.b);
    m = q.b;
    n = k.Xa;
    d ? c(null, q) : c(q, null)
  }
  for (var e = 0, f = 0, h = a.length, k = b.length, m = Ig, n = null; e < h && f < k;) {
    var q = a[e],
      r = b[f];
    if (q.Xa !== r.Xa) q.Xa < r.Xa ? (q.Xa !== n && (m = Ig), d(0, null)) : (r.Xa !== n && (m = Ig), d(1, null));
    else {
      q.Xa != n && (m = Ig);
      var u = Math.max(m, q.o),
        w = Math.max(m, r.o);
      if (u !== w) u < w ? d(0, r.o) : d(1, q.o);
      else {
        var w = Math.min(q.b, r.b),
          y = wt(q, u, w),
          u = wt(r, u, w),
          m = w,
          n = q.Xa;
        c(y, u);
        q.b <= w && ++e;
        r.b <= w && ++f
      }
    }
  }
  if (e < h) {
    do a[e].Xa !== n && (m = Ig), d(0, null); while (e < h)
  } else
    for (; f < k;) b[f].Xa !== n && (m = Ig), d(1, null)
}

function st(a) {
  for (var b = [], c = null, d = 0; d < a.length; ++d) {
    var e = a[d];
    c && c.Xa === e.Xa && c.Wd === e.Wd && c.b === e.o ? c = b[b.length - 1] = new ot(c.Xa, c.o, e.b, c.Wd) : (b.push(e), c = e)
  }
  return b
}

function Yda(a, b) {
  return a[0] - b[0] || b[1] - a[1]
}

function mq(a) {
  for (var b = [], c = void 0, d = 0; d < a.length; ++d) {
    var e = a[d];
    c !== e.Xa && b.push(e.Xa);
    c = e.Xa
  }
  return b
}
var qt = /\+/g;

function Wda(a) {
  if (!a.length || '"' !== a.charAt(0)) return a;
  a = a.substring(1, a.length - 1).replace(qt, " ");
  return decodeURIComponent(a)
}

function xt(a, b, c) {
  var d = [];
  if (b > a)
    for (var e = 0; e < c.length; ++e) d.push(new ot(c[e], a, b, 0));
  return nt(d)
};

function Zda(a, b, c, d, e) {
  a = tt(a, b);
  e.push("emf", vt(a), "ctz", yt(), "hl", "en");
  for (a = 0; a < c.length; ++a) e.push("lef", c[a]);
  d && e.push("nusr", "true")
}

function zt(a) {
  a[2] = jk(a[2]);
  a[3] = jk(a[3]);
  void 0 === a[5] && (a[5] = a[4]);
  void 0 === a[6] && (a[6] = a[4]);
  a[11] || (a[11] = 0);
  if (a[13]) {
    for (var b = a[13], c = {}, d = 0; d < b.length; d += 2) {
      var e = b[d],
        f = b[d + 1];
      "goo.richContent" == e && (f = eval(f));
      c[e] = f
    }
    a[13] = c
  }
  a[14] && (a[14] = gc(a[14]));
  a[15] = Bn(a[15], a[5]);
  a[18] = Kca(a[18])
}

function $da(a) {
  a[0] = ut(a[0])
};

function aea() {}

function Hda(a, b, c) {
  At(a, b, c)
};

function yt() {
  return P(O()).get("timezone")
}

function bea(a) {
  bq(a);
  a = mq(a);
  var b = P(O()),
    c = Mj.L();
  c.Ib();
  as(c, a, !1);
  try {
    for (var d = 0; d < a.length; ++d) {
      var e = a[d];
      c.we(e, !dh(b, e + ca, !1))
    }
  } finally {
    c.Gb()
  }
}

function Bt(a, b, c) {
  Ks(a, b, [], c)
}

function Ks(a, b, c, d) {
  a = a.ib();
  b = (isNaN(b.hour) || b.hour || b.minute || b.second ? Pg(b) : b.Ca()).ib();
  var e = lq();
  c = e.concat(mt(c, e));
  var e = c.length > e.length,
    f = kq();
  if (void 0 !== f) {
    var h = e;
    a < f[0] ? h = !0 : a = f[0];
    b > f[1] ? h = !0 : b = f[1];
    if (!h) {
      d && d();
      return
    }
  }
  Ct(xt(a, b, c), e, d)
}

function ds(a) {
  return Ib(lq(), a)
}

function At(a, b, c) {
  var d = lq();
  a = mt(a, d);
  0 == a.length ? (b && b(), c && c()) : (d = kq(), void 0 !== d ? Ct(xt(d[0], d[1], a), !0, b, c) : (b && b(), c && c()))
}

function es(a) {
  var b = kq();
  b && (a = xt(b[0], b[1], [a]), Ct(a, !1))
}

function Ct(a, b, c, d, e) {
  function f() {
    var c = tt(a, Dp.B.slice(0)),
      e = Mj.L(),
      c = Cb(c, function(a) {
        return 0 == a.Wd ? !e.getItem(a.Xa).A : !1
      });
    0 < c.length ? Ct(c, b, void 0, d, 0) : d && d()
  }
  if (a.length) {
    var h = [];
    Zda(a, Dp.B.slice(0), lq(), b, h);
    var k = O(),
      m = Jr(k, "Oops, we couldn't load your events, please try again in a few minutes");
    0 < e && h.push("rc", e);
    Pf(Nf(k), "load", h, 6, f, m, c)
  } else c && c(), d && d()
};
var Dt = void 0,
  Et = void 0,
  Ft = g;

function O() {
  bd || (bd = new Fd);
  return bd
};

function Gt() {}
Gt.prototype.b = function(a) {
  At(a)
};

function cea() {
  var a = op.L();
  0 != a.mb || pp(a, "h")
}

function dea(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, Q, Z, V, ia) {
  c = new Zf(c, d, void 0, 100, void 0, ia, e);
  f = new Ld(f, h, k);
  n && (f.D = n);
  q && !ac(q) && (f.o = q);
  f.A = r;
  u && (f.F = u);
  f.uI = D;
  L && (f.kB = L);
  f.rF = Q;
  f.oF = Z;
  a.b(7, new eca(c, m, f, b, V, w, y))
}

function eea(a, b) {
  var c = Mj.L(),
    d = new aea;
  c.o = a;
  c.F = d;
  c.b = b;
  return c
}

function fea(a) {
  Qd(a).isEnabled(115) && (Ml = new Bl(Kl.L(), void 0, !0));
  a.b(2, new sk(Ml))
}

function gea(a) {
  var b = new $o(a);
  a.b(15, b)
}

function hea(a) {
  var b = new Pr(a, Mj.L(), new Gt);
  a.b(14, b)
}

function iea(a) {
  var b = new Uq(a);
  a.b(16, b)
}

function jea(a) {
  var b = P(a);
  if (mo(a)) {
    var c = _nowMS,
      d = hb() + nk;
    3E4 <= Math.abs(d - c) && (nk = c - hb())
  }
  c = b.get("tztransn");
  b = b.get("tznextoff");
  b = new qk(ch(P(O()), "tzoffset", "0"), x(c) ? parseFloat(c) : void 0, x(b) ? parseFloat(b) : void 0);
  a.b(1, b)
}
Ta("_renderInit", function(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, Q, Z, V, ia, xa, qa, sb, $a, tb, gb, Ve, Ee, fj, Ef) {
  var cb = O();
  lba(cb);
  cb.b(21, new Nr);
  b = new Eq(cb);
  kea(b);
  cb.b(17, b);
  b = new Mf(cb, new Tq);
  cb.b(6, b);
  cb.b(8, new Sba);
  b = new Vh(cb, 0, b, function(a) {
    Kr(cb).b(a)
  });
  var zq = qg.L();
  cb.b(5, zq);
  m = nba(m, cb);
  cb.b(9, new Sq(b, op.L(), m));
  nca(Q, cb);
  om = ti = !0;
  pm = 4;
  ii = qh = jm = !0;
  Q = new ko(cb, _ol_serve_ol ? "disconnected" : "connected");
  Q.register(cb);
  m = eea(cb, b);
  dea(cb, m, a, e, f, c, d, r, b, u, w, y, D, L, Z, V, ia, xa, qa, 0 <= $a ? $a : void 0, sb);
  fea(cb);
  lea(cb, m, di.L(), zq, a);
  gea(cb);
  vda(ap(cb), tb);
  hea(cb);
  iea(cb);
  (new Bs(cb)).apply();
  Qda(cb);
  Ft = h;
  a = new oq(cb, h + "calendarjs_", "compiled__en.js" + k);
  a.F = new kt;
  cb.F = a;
  c = new xq(a);
  cb.b(13, c);
  q && (wq(a, Ba), wq(a, Ca), wq(a, Fa), wq(a, wa));
  _ol_serve_ol && (wq(a, "offline"), wq(a, Ca), wq(a, Fa), wq(a, wa));
  K(a, "C", B(mea, cb));
  K(Q, "m", function(a) {
    Nf(cb).A = a.Va
  });
  Rba(Nf(cb), n);
  Ada(c);
  K(Dp, "x", function(a) {
    a = a.Qi;
    As && a in As && a in As && (Ht[As[a]] --, delete As[a])
  });
  Eda(cb);
  gt.L();
  nea();
  cb.b(25, new Rda(cb, function(a, b) {
    Ct(a, !1,
      void 0, void 0, b)
  }));
  (new ar($a, gb, Ve, Ee)).register(cb);
  (new lt(fj, Ef)).register(cb)
}, void 0);
Ta("_renderBody", z, void 0);
Ta("_renderMain", function(a, b, c, d, e, f, h, k, m, n) {
  var q = O();
  Jq();
  if (window.location != window.parent.location) Hq(q, 811);
  else {
    if (G) try {
      document.execCommand("BackgroundImageCache", !1, !0)
    } catch (r) {}
    var u = U("promo_ads");
    u && (a ? u.style.display = g : (u.style.display = "none", u.parentNode.nextSibling && u.parentNode.parentNode.removeChild(u.parentNode.nextSibling)));
    u = Mj.L();
    Dt = new ls(u, q, "calendars_my", "clst_my", !0);
    Et = new ls(u, q, "calendars_fav", "clst_fav", !1);
    var u = Cp(q),
      w = Et;
    u.C = Dt;
    u.G = w;
    a = B(oea, a, b, c, d, e, f, h, k, m,
      n);
    Nq ? a() : Lq = a;
    a = P(q);
    b = new Date(1970, 11, 29, 13, 0, 0, 0);
    c = "false";
    "toLocaleTimeString" in b && (c = 0 <= b.toLocaleTimeString().indexOf("13") ? "true" : "false");
    Xh(a, Da, c);
    d = b.toLocaleDateString();
    b = d.indexOf("12");
    c = d.indexOf("29");
    if (0 > b && 0 <= c)
      for (e = (new Date(1970, 8, 29, 13, 0, 0, 0)).toLocaleDateString(), f = Math.min(d.length, e.length), h = 0; h < f; h++)
        if (d.charCodeAt(h) != e.charCodeAt(h)) {
          b = h;
          break
        }
    0 <= (b | c) && (d = d.indexOf("70"), Xh(a, "dtFldOrdr", b < c ? 0 <= d && d < b ? "YMD" : "MDY" : "DMY"));
    Xh(a, "weekView5", "false");
    Xh(a, "defaultCalMode",
      "week");
    Xh(a, "showDeclined", "true");
    null != Sh(a.D).getName() && Xh(a, "useDocAttachment", "true");
    Xh(a, "locale", "en");
    _ol_enabled && _ol_serve_ol && no() ? Hq(q, 811) : Lq ? Lq() : Nq = !0
  }
}, void 0);

function oea(a, b, c, d, e, f, h, k, m) {
  a = O();
  jea(a);
  var n = z.get(a);
  b && Rf(n, b);
  c && Rf(n, c);
  d && Rf(n, d);
  wda(ip.L(), f ? jk(f).Ca() : Nl());
  b = h;
  c = P(a);
  b || (b = c.getString("defaultCalMode", "week"));
  $h(c, rk(a));
  d = new pea;
  f = gp();
  Lda(Qo.L(), Dp, d, vg(a), f, a);
  It = Eo(Do.L());
  Go(It, _loadStartTime - _tsf);
  Jt = new Fs(a, 0, It);
  k && Hs(Jt);
  ep(ap(a), b);
  Js(Jt);
  e && Rf(n, e);
  c.nb();
  m && (Kt = function() {
    pr.WJ(m);
    Kt = void 0;
    Lt()
  });
  e = R("mainbody");
  k = R("coverinner");
  a = Ap(ip.L());
  Uda(op.L(), e, k, a);
  Kq ? Kq() : Mq = !0
}
var Mt, It, Kt, Jt;

function qea(a) {
  Mt = hb();
  It.b(a ? "totalDlLoadTime" : "totalLoadTime");
  Jt && (Jt.Dw(), Jt = null)
}
Ta("_renderPost", function() {
  if (window.location == window.parent.location) {
    var a = rea;
    Mq ? a() : Kq = a
  }
}, void 0);

function rea() {
  var a = O(),
    b = new Qs(a);
  Pda(b, P(a));
  uda(ap(a), b);
  var c = Mj.L();
  Xr(c);
  K(c, "h", function(a) {
    if (lh(a, "g")) {
      a = lq();
      for (var b = 0, f = a.length; b < f; ++b) c.contains(a[b]) || gq(a[b])
    }
  });
  cea();
  (b = !!Kt) || Lt();
  qea(b);
  Hq(a, 804)
}

function Lt() {
  R("loadingItem").innerHTML = g;
  Zm(R(ja), "hdn")
}

function mea(a) {
  var b;
  b = mo(a) ? 'We\'re sorry. Google Calendar is temporarily unavailable. Please try again in a few minutes.<br/> If the problem persists, see our <a href="//support.google.com/calendar/bin/static.py?hl=en&page=known_issues.cs">Known Issues page</a> or visit our <a href="//support.google.com/calendar/?hl=en">Help Center</a>.' : "Sorry, Calendar is currently running in offline mode. Please try again in a few minutes.";
  Kr(a).o(b)
}

function lea(a, b, c, d, e) {
  a.b(20, new np(b, c, d, e))
};

function pea() {}

function ss(a, b, c) {
  Bt(a, b, function() {
    setTimeout(function() {
      if (c) {
        var a = O();
        dp(ap(a)).D(c)
      }
    }, 0)
  })
};
var Nt = 100;

function mp() {
  if (cp(O()).o()) Bp(ip.L(), 100 != Nt);
  else {
    U("gridcontainer").innerHTML = g;
    U("gridcontainer").style.height = g;
    var a = Qo.L();
    if (a.b && 0 < a.A.o.length) {
      var b = a.b;
      b.o = 0;
      b.G = [];
      b.D = [];
      b = a.b;
      ws(b, 0);
      b.render(!0);
      if (Yo(bp(a.B))) Mda(a);
      else {
        a.o && a.o.bq();
        qs(a);
        var b = E("View one day earlier."),
          c = E("View one day later."),
          b = ['<div class=lv-nav><img tabindex=0 role=button src="', wg(), '" class="lv-up lk ', "lvl-bd", '" title="', b, '" alt="', b, '"> <img src="', wg(), '" tabindex=0 role=button class="lv-down lk ', "lvl-fd",
            '" title="', c, '" alt="', c, '"></div>'
          ];
        b.push('<div class="chead cheadNotToday noprint">', '<span id=expand_all_link tabindex=0 role=button class="lk ', "lv-x", '">', "Expand All", "</span>&nbsp;&nbsp;&nbsp;", '<span id=collapse_all_link tabindex=0 role=button class="lk ', "lv-c", '">', "Collapse All", "</span></div>");
        c = R(Ga);
        c.innerHTML = b.join(g);
        kp(!0);
        Cp(O()).jh();
        a.b.render();
        a.o && (a.o.w2(a.b.Z), a.o.$H(), a.o.bA(c), a.o.aI())
      }
    }
  }
  a = O();
  Kd(a, 23) && Gd(a, 23).o()
}

function kp(a) {
  var b = U("gridcontainer");
  a || (b.scrollTop = 0);
  b.style.overflowY = a ? "scroll" : "visible"
};

function Nj(a) {
  var b = g;
  if (dh(P(O()), "showguestname", _isGoogUser) && !a.Ec()) {
    var c;
    t: {
      var d = Th(O());
      if (5 <= a.A) c = null;
      else {
        c = qg.L();
        for (var e = 100 == rg(c, a.Fa()).Kb() ? a.Fa() : d, f = !1, d = null, h = 0, k = Hn(a), m = 0; m < k.length; m++) {
          var n = k[m];
          if (4 != In(a, n).mb) {
            var q = rg(c, n);
            if (q && 100 == q.Kb()) {
              if (2 < ++h) {
                c = null;
                break t
              }
              e != n ? d = q : f = !0
            }
          }
        }
        2 == h && f && d ? (c = d.uc(), c = 100 == d.o || c && c != d.b ? d : null) : c = null
      }
    }
    null != c && (a = In(a, c.uid), b = " (" + E((a ? a.Gd : null) || Yf(c)) + ")")
  }
  return b
};
var _SE_weatherOn = !1;

function Is(a) {
  Ot(a || 0, !1)
}
var Pt, Qt;

function Ot(a, b, c) {
  var d = O();
  yq(d).b(ya, function() {
    br.wK(a, b, c)
  })
}

function sea(a, b) {
  var c = O();
  yq(c).b(ya, function() {
    br.IJ(a, b)
  })
}

function tea(a, b) {
  var c = O();
  yq(c).b(ya, function() {
    br.fL(a, b)
  })
}

function nea() {
  var a = gt.L();
  Pt = {
    1: "j",
    0: "l",
    4: "m",
    2: "n",
    3: "o"
  };
  Qt = {
    0: "c",
    2: "d",
    3: "e",
    1: "f"
  };
  Vb(Pt, function(b, c) {
    ht(a, b, function(a) {
      Ot(parseInt(c, 10), !1, a)
    })
  });
  Vb(Qt, function(b) {
    ht(a, b, sea)
  });
  ht(a, "k", tea)
};
var Rt = new M;
var St = !1,
  As = {},
  Ht = {},
  hp;

function Tt() {
  St = !1;
  var a = U("sropt");
  a && (a.style.display = "none", a.innerHTML = g);
  if (a = U("srreg")) a.style.display = g;
  Cp(O()).Ys();
  a = ap(O());
  Yo(a.b) && ep(a, hp.getType(), hp.b)
}

function Ut() {
  Tt();
  cr.b();
  pp(op.L(), "h")
}
K(Rt, "J", Ut, !1, void 0);

function kea(a) {
  Fq(a, "a", jq, zt);
  Fq(a, "us", bea, $da);
  Fq(a, "anp", uea);
  Fq(a, "_DS_put", _DS_put, vea);
  Fq(a, "u", wea);
  Fq(a, "ap", Yba);
  Fq(a, "pi", xea)
}

function uea(a, b, c, d) {
  c = parseInt(c, 10);
  var e = Qr(O());
  "true" != d && (e.o.set(b + "/hidden", "false"), e.o.set(b + ca, "false"), e.o.nb());
  Rr(e, a, b, c)
}

function vea(a) {
  a[1] = parseInt(a[1], 10);
  a[2] = parseInt(a[2], 10)
}

function wea(a) {
  Zh(P(O()), a)
}

function xea(a) {
  ei = a
};

function _ShowMessage(a, b, c, d) {
  Kr(O()).o(a, b, d);
  c && c()
}

function _HideMessage(a) {
  Kr(O()).Pa(a)
}

function _DS_put(a, b, c, d, e, f, h, k, m, n, q, r, u, w, y, D, L, Q, Z, V, ia, xa, qa, sb, $a, tb, gb, Ve) {
  if (70 > b) {
    var Ee = P(O()).get(a + "/name");
    Ee && (e = Ee)
  }
  h = E(h);
  di.L().add(a, new hi(b, c, d, e, f, h, k, m, n, q, !1, r, a, u, w, y, D, L, Q, Z, V, ia, xa, qa, sb, $a, tb, gb, Ve))
}
var _Refresh = z;

function _Dispatch(a) {
  var b = O();
  Rf(z.get(b), a)
}
var _GenSettings = z,
  _SR_backToCalendar = z,
  _EH_nwC = z;

function _lastCalFunc() {};