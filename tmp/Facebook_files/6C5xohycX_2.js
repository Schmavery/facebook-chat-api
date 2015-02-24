if (self.CavalryLogger) {
  CavalryLogger.start_js(["N2MAx"]);
}
__d("QueryString", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {(Object|string)} o
   * @return {?}
   */
  function encode(o) {
    /** @type {Array} */
    var ls = [];
    Object.keys(o).sort().forEach(function(v) {
      var value = o[v];
      if (typeof value === "undefined") {
        return;
      }
      if (value === null) {
        ls.push(v);
        return;
      }
      ls.push(encodeURIComponent(v) + "=" + encodeURIComponent(value));
    });
    return ls.join("&");
  }
  /**
   * @param {string} qs
   * @param {boolean} val
   * @return {?}
   */
  function decode(qs, val) {
    var s = {};
    if (qs === "") {
      return s;
    }
    var codeSegments = qs.split("&");
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var keyValue = codeSegments[i].split("=", 2);
      /** @type {string} */
      var url = decodeURIComponent(keyValue[0]);
      if (val && s.hasOwnProperty(url)) {
        throw new URIError("Duplicate key: " + url);
      }
      /** @type {(null|string)} */
      s[url] = keyValue.length === 2 ? decodeURIComponent(keyValue[1]) : null;
    }
    return s;
  }
  /**
   * @param {string} url
   * @param {string} query
   * @return {?}
   */
  function jsonp(url, query) {
    return url + (~url.indexOf("?") ? "&" : "?") + (typeof query === "string" ? query : api.encode(query));
  }
  var api = {
    /** @type {function ((Object|string)): ?} */
    encode : encode,
    /** @type {function (string, boolean): ?} */
    decode : decode,
    /** @type {function (string, string): ?} */
    appendToUrl : jsonp
  };
  module.exports = api;
}, null);
__d("PHPQuerySerializer", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, next) {
  /**
   * @param {?} v
   * @return {?}
   */
  function serialize(v) {
    return dump(v, null);
  }
  /**
   * @param {Object} s
   * @param {string} v
   * @return {?}
   */
  function dump(s, v) {
    v = v || "";
    /** @type {Array} */
    var props = [];
    if (s === null || s === void 0) {
      props.push(escape(v));
    } else {
      if (typeof s == "object") {
        next(!("nodeName" in s || "nodeType" in s));
        var i;
        for (i in s) {
          if (s.hasOwnProperty(i) && s[i] !== void 0) {
            props.push(dump(s[i], v ? v + "[" + i + "]" : i));
          }
        }
      } else {
        props.push(escape(v) + "=" + escape(s));
      }
    }
    return props.join("&");
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function escape(str) {
    return encodeURIComponent(str).replace(/%5D/g, "]").replace(/%5B/g, "[");
  }
  /**
   * @param {string} p
   * @return {?}
   */
  function require(p) {
    if (!p) {
      return{};
    }
    var result = {};
    p = p.replace(/%5B/ig, "[").replace(/%5D/ig, "]");
    p = p.split("&");
    /** @type {function (this:Object, *): boolean} */
    var iterator = Object.prototype.hasOwnProperty;
    /** @type {number} */
    var j = 0;
    var pl = p.length;
    for (;j < pl;j++) {
      var parts = p[j].match(typePattern);
      if (!parts) {
        var param = p[j].split("=");
        result[decode(param[0])] = param[1] === void 0 ? null : decode(param[1]);
      } else {
        var obj = parts[2].split(/\]\[|\[|\]/).slice(0, -1);
        var part = parts[1];
        var callback = decode(parts[3] || "");
        obj[0] = part;
        var target = result;
        /** @type {number} */
        var i = 0;
        for (;i < obj.length - 1;i++) {
          if (obj[i]) {
            if (!iterator.call(target, obj[i])) {
              /** @type {(Array|{})} */
              var s = obj[i + 1] && !obj[i + 1].match(/^\d{1,3}$/) ? {} : [];
              /** @type {(Array|{})} */
              target[obj[i]] = s;
              if (target[obj[i]] !== s) {
                return result;
              }
            }
            target = target[obj[i]];
          } else {
            if (obj[i + 1] && !obj[i + 1].match(/^\d{1,3}$/)) {
              target.push({});
            } else {
              target.push([]);
            }
            target = target[target.length - 1];
          }
        }
        if (target instanceof Array && obj[obj.length - 1] === "") {
          target.push(callback);
        } else {
          target[obj[obj.length - 1]] = callback;
        }
      }
    }
    return result;
  }
  /**
   * @param {string} queryStr
   * @return {?}
   */
  function decode(queryStr) {
    return decodeURIComponent(queryStr.replace(/\+/g, " "));
  }
  /** @type {RegExp} */
  var typePattern = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
  var JsDiff = {
    /** @type {function (?): ?} */
    serialize : serialize,
    /** @type {function (string): ?} */
    encodeComponent : escape,
    /** @type {function (string): ?} */
    deserialize : require,
    /** @type {function (string): ?} */
    decodeComponent : decode
  };
  module.exports = JsDiff;
}, null);
__d("URIRFC3986", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /** @type {RegExp} */
  var pr_chunkPattern = new RegExp("^" + "([^:/?#]+:)?" + "(//" + "([^\\\\/?#@]*@)?" + "(" + "\\[[A-Fa-f0-9:.]+\\]|" + "[^\\/?#:]*" + ")" + "(:[0-9]*)?" + ")?" + "([^?#]*)" + "(\\?[^#]*)?" + "(#.*)?");
  var Gedcom = {
    /**
     * @param {string} s
     * @return {?}
     */
    parse : function(s) {
      if (s.trim() === "") {
        return null;
      }
      var matches = s.match(pr_chunkPattern);
      var parsed = {};
      parsed.uri = matches[0] ? matches[0] : null;
      parsed.scheme = matches[1] ? matches[1].substr(0, matches[1].length - 1) : null;
      parsed.authority = matches[2] ? matches[2].substr(2) : null;
      parsed.userinfo = matches[3] ? matches[3].substr(0, matches[3].length - 1) : null;
      parsed.host = matches[2] ? matches[4] : null;
      /** @type {(null|number)} */
      parsed.port = matches[5] ? matches[5].substr(1) ? parseInt(matches[5].substr(1), 10) : null : null;
      parsed.path = matches[6] ? matches[6] : null;
      parsed.query = matches[7] ? matches[7].substr(1) : null;
      parsed.fragment = matches[8] ? matches[8].substr(1) : null;
      /** @type {boolean} */
      parsed.isGenericURI = parsed.authority === null && !!parsed.scheme;
      return parsed;
    }
  };
  module.exports = Gedcom;
}, null);
__d("URIBase", ["URIRFC3986", "URISchemes", "copyProperties", "ex", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, route, item, a, format, test) {
  /**
   * @param {Object} uri
   * @param {?} url
   * @param {boolean} recurring
   * @param {Object} self
   * @return {?}
   */
  function match(uri, url, recurring, self) {
    if (!url) {
      return true;
    }
    if (url instanceof URI) {
      uri.setProtocol(url.getProtocol());
      uri.setDomain(url.getDomain());
      uri.setPort(url.getPort());
      uri.setPath(url.getPath());
      uri.setQueryData(self.deserialize(self.serialize(url.getQueryData())));
      uri.setFragment(url.getFragment());
      uri.setForceFragmentSeparator(url.getForceFragmentSeparator());
      return true;
    }
    url = url.toString().trim();
    var p = route.parse(url) || {};
    if (!recurring && !item.isAllowed(p.scheme)) {
      return false;
    }
    uri.setProtocol(p.scheme || "");
    if (!recurring && rchecked.test(p.host)) {
      return false;
    }
    uri.setDomain(p.host || "");
    uri.setPort(p.port || "");
    uri.setPath(p.path || "");
    if (recurring) {
      uri.setQueryData(self.deserialize(p.query) || {});
    } else {
      try {
        uri.setQueryData(self.deserialize(p.query) || {});
      } catch (v) {
        return false;
      }
    }
    uri.setFragment(p.fragment || "");
    if (p.fragment === "") {
      uri.setForceFragmentSeparator(true);
    }
    if (p.userinfo !== null) {
      if (recurring) {
        throw new Error(format("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", uri.toString()));
      } else {
        return false;
      }
    }
    if (!uri.getDomain() && uri.getPath().indexOf("\\") !== -1) {
      if (recurring) {
        throw new Error(format("URI.parse: invalid URI (no domain but multiple back-slashes): %s", uri.toString()));
      } else {
        return false;
      }
    }
    if (!uri.getProtocol() && regex.test(url)) {
      if (recurring) {
        throw new Error(format("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", uri.toString()));
      } else {
        return false;
      }
    }
    return true;
  }
  /**
   * @param {Object} name
   * @param {string} f
   * @return {undefined}
   */
  function URI(name, f) {
    test(f);
    /** @type {string} */
    this.$URIBase0 = f;
    /** @type {string} */
    this.$URIBase1 = "";
    /** @type {string} */
    this.$URIBase2 = "";
    /** @type {string} */
    this.$URIBase3 = "";
    /** @type {string} */
    this.$URIBase4 = "";
    /** @type {string} */
    this.$URIBase5 = "";
    this.$URIBase6 = {};
    /** @type {boolean} */
    this.$URIBase7 = false;
    match(this, name, true, f);
  }
  /** @type {RegExp} */
  var rchecked = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f" + "\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF" + "\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]");
  /** @type {RegExp} */
  var regex = new RegExp("^(?:[^/]*:|" + "[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
  /** @type {Array} */
  var codeSegments = [];
  /**
   * @param {string} value
   * @return {?}
   */
  URI.prototype.setProtocol = function(value) {
    test(item.isAllowed(value));
    /** @type {string} */
    this.$URIBase1 = value;
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  URI.prototype.getProtocol = function(dataAndEvents) {
    return this.$URIBase1;
  };
  /**
   * @param {boolean} secure
   * @return {?}
   */
  URI.prototype.setSecure = function(secure) {
    return this.setProtocol(secure ? "https" : "http");
  };
  /**
   * @return {?}
   */
  URI.prototype.isSecure = function() {
    return this.getProtocol() === "https";
  };
  /**
   * @param {?} value
   * @return {?}
   */
  URI.prototype.setDomain = function(value) {
    if (rchecked.test(value)) {
      throw new Error(format("URI.setDomain: unsafe domain specified: %s for url %s", value, this.toString()));
    }
    this.$URIBase2 = value;
    return this;
  };
  /**
   * @return {?}
   */
  URI.prototype.getDomain = function() {
    return this.$URIBase2;
  };
  /**
   * @param {?} recurring
   * @return {?}
   */
  URI.prototype.setPort = function(recurring) {
    this.$URIBase3 = recurring;
    return this;
  };
  /**
   * @return {?}
   */
  URI.prototype.getPort = function() {
    return this.$URIBase3;
  };
  /**
   * @param {?} path
   * @return {?}
   */
  URI.prototype.setPath = function(path) {
    this.$URIBase4 = path;
    return this;
  };
  /**
   * @return {?}
   */
  URI.prototype.getPath = function() {
    return this.$URIBase4;
  };
  /**
   * @param {?} code
   * @param {?} dist
   * @return {?}
   */
  URI.prototype.addQueryData = function(code, dist) {
    if (Object.prototype.toString.call(code) === "[object Object]") {
      a(this.$URIBase6, code);
    } else {
      this.$URIBase6[code] = dist;
    }
    return this;
  };
  /**
   * @param {?} opt_attributes
   * @return {?}
   */
  URI.prototype.setQueryData = function(opt_attributes) {
    this.$URIBase6 = opt_attributes;
    return this;
  };
  /**
   * @return {?}
   */
  URI.prototype.getQueryData = function() {
    return this.$URIBase6;
  };
  /**
   * @param {(Array|string)} values
   * @return {?}
   */
  URI.prototype.removeQueryData = function(values) {
    if (!Array.isArray(values)) {
      /** @type {Array} */
      values = [values];
    }
    /** @type {number} */
    var i = 0;
    var valuesLen = values.length;
    for (;i < valuesLen;++i) {
      delete this.$URIBase6[values[i]];
    }
    return this;
  };
  /**
   * @param {?} fragment
   * @return {?}
   */
  URI.prototype.setFragment = function(fragment) {
    this.$URIBase5 = fragment;
    this.setForceFragmentSeparator(false);
    return this;
  };
  /**
   * @return {?}
   */
  URI.prototype.getFragment = function() {
    return this.$URIBase5;
  };
  /**
   * @param {boolean} recurring
   * @return {?}
   */
  URI.prototype.setForceFragmentSeparator = function(recurring) {
    /** @type {boolean} */
    this.$URIBase7 = recurring;
    return this;
  };
  /**
   * @return {?}
   */
  URI.prototype.getForceFragmentSeparator = function() {
    return this.$URIBase7;
  };
  /**
   * @return {?}
   */
  URI.prototype.isEmpty = function() {
    return!(this.getPath() || (this.getProtocol() || (this.getDomain() || (this.getPort() || (Object.keys(this.getQueryData()).length > 0 || this.getFragment())))));
  };
  /**
   * @return {?}
   */
  URI.prototype.toString = function() {
    var ua = this;
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      ua = codeSegments[i](ua);
    }
    return ua.$URIBase8();
  };
  /**
   * @return {?}
   */
  URI.prototype.$URIBase8 = function() {
    /** @type {string} */
    var result = "";
    var simleProps = this.getProtocol();
    if (simleProps) {
      result += simleProps + "://";
    }
    var tag = this.getDomain();
    if (tag) {
      result += tag;
    }
    var port = this.getPort();
    if (port) {
      result += ":" + port;
    }
    var v = this.getPath();
    if (v) {
      result += v;
    } else {
      if (result) {
        result += "/";
      }
    }
    var LINE_ENDING = this.$URIBase0.serialize(this.getQueryData());
    if (LINE_ENDING) {
      result += "?" + LINE_ENDING;
    }
    var fragment = this.getFragment();
    if (fragment) {
      result += "#" + fragment;
    } else {
      if (this.getForceFragmentSeparator()) {
        result += "#";
      }
    }
    return result;
  };
  /**
   * @param {?} fn
   * @return {undefined}
   */
  URI.registerFilter = function(fn) {
    codeSegments.push(fn);
  };
  /**
   * @return {?}
   */
  URI.prototype.getOrigin = function() {
    var charset = this.getPort();
    return this.getProtocol() + "://" + this.getDomain() + (charset ? ":" + charset : "");
  };
  /**
   * @param {(Error|string)} deepDataAndEvents
   * @param {Object} item
   * @return {?}
   */
  URI.isValidURI = function(deepDataAndEvents, item) {
    return match(new URI(null, item), deepDataAndEvents, false, item);
  };
  /** @type {function (Object, string): undefined} */
  module.exports = URI;
}, null);
__d("isFacebookURI", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Object} data
   * @return {?}
   */
  function filter(data) {
    if (!rnumnonpx) {
      /** @type {RegExp} */
      rnumnonpx = new RegExp("(^|\\.)facebook\\.com$", "i");
    }
    if (data.isEmpty() && data.toString() !== "#") {
      return false;
    }
    if (!data.getDomain() && !data.getProtocol()) {
      return true;
    }
    return excludes.indexOf(data.getProtocol()) !== -1 && rnumnonpx.test(data.getDomain());
  }
  /** @type {null} */
  var rnumnonpx = null;
  /** @type {Array} */
  var excludes = ["http", "https"];
  /**
   * @param {RegExp} input
   * @return {undefined}
   */
  filter.setRegex = function(input) {
    /** @type {RegExp} */
    rnumnonpx = input;
  };
  /** @type {function (Object): ?} */
  module.exports = filter;
}, null);
__d("unqualifyURI", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Function} uri
   * @return {undefined}
   */
  function resolve(uri) {
    uri.setProtocol(null).setDomain(null).setPort(null);
  }
  /** @type {function (Function): undefined} */
  module.exports = resolve;
}, null);
__d("areSameOrigin", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} uri
   * @param {?} b
   * @return {?}
   */
  function objEquiv(uri, b) {
    if (uri.isEmpty() || b.isEmpty()) {
      return false;
    }
    if (uri.getProtocol() && uri.getProtocol() != b.getProtocol()) {
      return false;
    }
    if (uri.getDomain() && uri.getDomain() != b.getDomain()) {
      return false;
    }
    if (uri.getPort() && uri.getPort() != b.getPort()) {
      return false;
    }
    return true;
  }
  /** @type {function (?, ?): ?} */
  module.exports = objEquiv;
}, null);
__d("URI", ["PHPQuerySerializer", "URIBase", "isFacebookURI", "unqualifyURI", "areSameOrigin", "copyProperties", "goURI"], function(operation, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, res, layer, $sanitize, on, next, expression, done) {
  /**
   * @param {string} data
   * @return {?}
   */
  function URI(data) {
    if (!(this instanceof URI)) {
      return new URI(data || window.location.href);
    }
    layer.call(this, data || "", res);
  }
  var property;
  for (property in layer) {
    if (layer.hasOwnProperty(property)) {
      URI[property] = layer[property];
    }
  }
  var base = layer === null ? null : layer.prototype;
  /** @type {Object} */
  URI.prototype = Object.create(base);
  /** @type {function (string): ?} */
  URI.prototype.constructor = URI;
  /** @type {Function} */
  URI.__superConstructor__ = layer;
  /**
   * @param {?} path
   * @return {?}
   */
  URI.prototype.setPath = function(path) {
    this.path = path;
    return base.setPath.call(this, path);
  };
  /**
   * @return {?}
   */
  URI.prototype.getPath = function() {
    var path = base.getPath.call(this);
    if (path) {
      return path.replace(/^\/+/, "/");
    }
    return path;
  };
  /**
   * @param {string} crossScope
   * @return {?}
   */
  URI.prototype.setProtocol = function(crossScope) {
    /** @type {string} */
    this.protocol = crossScope;
    return base.setProtocol.call(this, crossScope);
  };
  /**
   * @param {?} domain
   * @return {?}
   */
  URI.prototype.setDomain = function(domain) {
    this.domain = domain;
    return base.setDomain.call(this, domain);
  };
  /**
   * @param {number} port
   * @return {?}
   */
  URI.prototype.setPort = function(port) {
    /** @type {number} */
    this.port = port;
    return base.setPort.call(this, port);
  };
  /**
   * @param {string} fragment
   * @return {?}
   */
  URI.prototype.setFragment = function(fragment) {
    /** @type {string} */
    this.fragment = fragment;
    return base.setFragment.call(this, fragment);
  };
  /**
   * @return {?}
   */
  URI.prototype.valueOf = function() {
    return this.toString();
  };
  /**
   * @return {?}
   */
  URI.prototype.isFacebookURI = function() {
    return $sanitize(this);
  };
  /**
   * @return {?}
   */
  URI.prototype.isLinkshimURI = function() {
    if ($sanitize(this) && (this.getPath() === "/l.php" || (this.getPath().indexOf("/si/ajax/l/") === 0 || (this.getPath().indexOf("/l/") === 0 || this.getPath().indexOf("l/") === 0)))) {
      return true;
    }
    return false;
  };
  /**
   * @return {?}
   */
  URI.prototype.getRegisteredDomain = function() {
    if (!this.getDomain()) {
      return "";
    }
    if (!$sanitize(this)) {
      return null;
    }
    var pathname = this.getDomain().split(".");
    var m = pathname.indexOf("facebook");
    return pathname.slice(m).join(".");
  };
  /**
   * @return {?}
   */
  URI.prototype.getUnqualifiedURI = function() {
    var failuresLink = new URI(this);
    on(failuresLink);
    return failuresLink;
  };
  /**
   * @return {?}
   */
  URI.prototype.getQualifiedURI = function() {
    return(new URI(this)).$URI0();
  };
  /**
   * @return {?}
   */
  URI.prototype.$URI0 = function() {
    if (!this.getDomain()) {
      var uri = URI();
      this.setProtocol(uri.getProtocol()).setDomain(uri.getDomain()).setPort(uri.getPort());
    }
    return this;
  };
  /**
   * @param {string} url
   * @return {?}
   */
  URI.prototype.isSameOrigin = function(url) {
    var uri = url || window.location.href;
    if (!(uri instanceof URI)) {
      uri = new URI(uri.toString());
    }
    return next(this, uri);
  };
  /**
   * @param {(number|string)} deepDataAndEvents
   * @return {undefined}
   */
  URI.prototype.go = function(deepDataAndEvents) {
    done(this, deepDataAndEvents);
  };
  /**
   * @param {?} result
   * @return {?}
   */
  URI.prototype.setSubdomain = function(result) {
    var results = this.$URI0().getDomain().split(".");
    if (results.length <= 2) {
      results.unshift(result);
    } else {
      results[0] = result;
    }
    return this.setDomain(results.join("."));
  };
  /**
   * @return {?}
   */
  URI.prototype.getSubdomain = function() {
    if (!this.getDomain()) {
      return "";
    }
    var codeSegments = this.getDomain().split(".");
    if (codeSegments.length <= 2) {
      return "";
    } else {
      return codeSegments[0];
    }
  };
  /**
   * @param {(Error|string)} deepDataAndEvents
   * @return {?}
   */
  URI.isValidURI = function(deepDataAndEvents) {
    return layer.isValidURI(deepDataAndEvents, res);
  };
  expression(URI, {
    /**
     * @param {boolean} recurring
     * @param {?} dataAndEvents
     * @return {?}
     */
    getRequestURI : function(recurring, dataAndEvents) {
      recurring = recurring === void 0 || recurring;
      var response = operation.PageTransitions;
      if (recurring && (response && response.isInitialized())) {
        return response.getCurrentURI(!!dataAndEvents).getQualifiedURI();
      } else {
        return new URI(window.location.href);
      }
    },
    /**
     * @return {?}
     */
    getMostRecentURI : function() {
      var response = operation.PageTransitions;
      if (response && response.isInitialized()) {
        return response.getMostRecentURI().getQualifiedURI();
      } else {
        return new URI(window.location.href);
      }
    },
    /**
     * @return {?}
     */
    getNextURI : function() {
      var response = operation.PageTransitions;
      if (response && response.isInitialized()) {
        return response._next_uri.getQualifiedURI();
      } else {
        return new URI(window.location.href);
      }
    },
    expression : /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
    arrayQueryExpression : /^(\w+)((?:\[\w*\])+)=?(.*)/,
    /**
     * @param {string} v
     * @return {?}
     */
    encodeComponent : function(v) {
      return encodeURIComponent(v).replace(/%5D/g, "]").replace(/%5B/g, "[");
    },
    /**
     * @param {string} messageFormat
     * @return {?}
     */
    decodeComponent : function(messageFormat) {
      return decodeURIComponent(messageFormat.replace(/\+/g, " "));
    }
  });
  /** @type {function (string): ?} */
  module.exports = URI;
}, null);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents) {
  var JsDiff = {
    /**
     * @return {?}
     */
    getID : function() {
      return dataAndEvents.COMMUNITY_ID || "0";
    }
  };
  module.exports = JsDiff;
}, null);
__d("CurrentUser", ["Cookie", "CurrentUserInitialData"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $templateCache, m) {
  var User = {
    /**
     * @return {?}
     */
    getID : function() {
      return m.USER_ID;
    },
    /**
     * @return {?}
     */
    getAccountID : function() {
      return m.ACCOUNT_ID;
    },
    /**
     * @return {?}
     */
    isLoggedIn : function() {
      return m.USER_ID && m.USER_ID !== "0";
    },
    /**
     * @return {?}
     */
    isLoggedInNow : function() {
      if (!User.isLoggedIn()) {
        return false;
      }
      if (m.IS_INTERN_SITE) {
        return true;
      }
      if (m.ORIGINAL_USER_ID) {
        return m.ORIGINAL_USER_ID === $templateCache.get("c_user");
      }
      return m.USER_ID === $templateCache.get("c_user");
    },
    /**
     * @return {?}
     */
    isEmployee : function() {
      return!!m.IS_EMPLOYEE;
    },
    /**
     * @return {?}
     */
    isGray : function() {
      return!!m.IS_GRAY;
    }
  };
  module.exports = User;
}, null);
__d("DTSG", ["DTSGInitialData"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, _arg) {
  var ret = _arg.token || null;
  var JsDiff = {
    /**
     * @param {string} token
     * @return {undefined}
     */
    setToken : function(token) {
      /** @type {string} */
      ret = token;
    },
    /**
     * @return {?}
     */
    getToken : function() {
      return ret;
    }
  };
  module.exports = JsDiff;
}, null);
__d("getAsyncParams", ["CurrentCommunity", "CurrentUser", "DTSG", "ISB", "LSD", "ServerJSDefine", "SiteData", "URIBase", "PHPQuerySerializer"], function(dataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, a, b, accessToken, e, obj, deepDataAndEvents, info, Renderer, options) {
  /**
   * @param {string} data
   * @return {?}
   */
  function init(data) {
    var result = {
      __user : b.getID(),
      __a : 1,
      __dyn : deepDataAndEvents.getLoadedModuleHash(),
      __req : (UID++).toString(36)
    };
    var currentHeaders = (new Renderer(window.location.href, options)).getQueryData();
    var header;
    for (header in currentHeaders) {
      if (currentHeaders.hasOwnProperty(header)) {
        if (header === "locale" || header.substr(0, 3) === "mh_") {
          result[header] = currentHeaders[header];
        }
      }
    }
    if (data == "POST") {
      if (accessToken.getToken()) {
        result.fb_dtsg = accessToken.getToken();
        /** @type {string} */
        var s = "";
        /** @type {number} */
        var c = 0;
        for (;c < result.fb_dtsg.length;c++) {
          s += result.fb_dtsg.charCodeAt(c);
        }
        /** @type {string} */
        result.ttstamp = "2" + s;
      }
      if (obj.token) {
        result.lsd = obj.token;
      }
    }
    if (e.token) {
      result.fb_isb = e.token;
    }
    if (info.revision) {
      result.__rev = info.revision;
    }
    if (a.getID() !== "0") {
      result.__cid = a.getID();
    }
    return result;
  }
  /** @type {number} */
  var UID = 1;
  /** @type {function (string): ?} */
  module.exports = init;
}, null);
__d("memoize", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, fun) {
  /**
   * @param {Object} fn
   * @return {?}
   */
  function map(fn) {
    var result;
    return function() {
      /** @type {Array} */
      var callbackArgs = [];
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var argLength = arguments.length;
      for (;i < argLength;i++) {
        callbackArgs.push(arguments[i]);
      }
      fun(!callbackArgs.length);
      if (fn) {
        result = fn();
        /** @type {null} */
        fn = null;
      }
      return result;
    };
  }
  /** @type {function (Object): ?} */
  module.exports = map;
}, null);
__d("AsyncSignal", ["ErrorUtils", "QueryString", "TrackingConfig", "URI", "isFacebookURI", "copyProperties", "getAsyncParams", "memoize"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, ret, handle, url, Deferred, require, decode, send, done) {
  /**
   * @param {Function} elt
   * @param {Object} data
   * @return {undefined}
   */
  function init(elt, data) {
    this.data = data || {};
    this.uri = elt.toString();
    if (url.domain && this.uri.charAt(0) == "/") {
      this.uri = url.domain + this.uri;
    }
  }
  /**
   * @param {Function} handler
   * @return {?}
   */
  init.prototype.setHandler = function(handler) {
    /** @type {Function} */
    this.handler = handler;
    return this;
  };
  /**
   * @param {Object} timeout
   * @return {?}
   */
  init.prototype.setTimeout = function(timeout) {
    /** @type {Object} */
    this.timeout = timeout;
    return this;
  };
  /**
   * @return {?}
   */
  init.prototype.send = function() {
    var rreturn = this.handler;
    var data = this.data;
    /** @type {Image} */
    var datauri = new Image;
    if (rreturn) {
      var onLoad = done(function() {
        ret.applyWithGuard(rreturn, null, [datauri.height == 1]);
      });
      /** @type {function (): undefined} */
      datauri.onload = datauri.onerror = function() {
        onLoad();
      };
      if (this.timeout) {
        setTimeout(onLoad, this.timeout);
      }
    }
    /** @type {number} */
    data.asyncSignal = (Math.random() * 1E4 | 0) + 1;
    var Block = require(new Deferred(this.uri));
    if (Block) {
      decode(data, send("POST"));
    } else {
      throw new Error("'" + this.uri + "' " + "is an external URL, you should not send async signals to offsite links.");
    }
    datauri.src = handle.appendToUrl(this.uri, data);
    return this;
  };
  /** @type {function (Function, Object): undefined} */
  module.exports = init;
}, null);
__d("getMarkupWrap", ["ExecutionEnvironment", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, $i18next) {
  /**
   * @param {string} key
   * @return {?}
   */
  function parse(key) {
    $i18next(!!content);
    if (!_MAP.hasOwnProperty(key)) {
      /** @type {string} */
      key = "*";
    }
    if (!api.hasOwnProperty(key)) {
      if (key === "*") {
        /** @type {string} */
        content.innerHTML = "<link />";
      } else {
        /** @type {string} */
        content.innerHTML = "<" + key + "></" + key + ">";
      }
      /** @type {boolean} */
      api[key] = !content.firstChild;
    }
    return api[key] ? _MAP[key] : null;
  }
  /** @type {(Element|null)} */
  var content = dataAndEvents.canUseDOM ? document.createElement("div") : null;
  var api = {
    circle : true,
    defs : true,
    ellipse : true,
    g : true,
    line : true,
    linearGradient : true,
    path : true,
    polygon : true,
    polyline : true,
    radialGradient : true,
    rect : true,
    stop : true,
    text : true
  };
  /** @type {Array} */
  var option = [1, '<select multiple="true">', "</select>"];
  /** @type {Array} */
  var table = [1, "<table>", "</table>"];
  /** @type {Array} */
  var td = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
  /** @type {Array} */
  var m = [1, "<svg>", "</svg>"];
  var _MAP = {
    "*" : [1, "?<div>", "</div>"],
    area : [1, "<map>", "</map>"],
    col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    legend : [1, "<fieldset>", "</fieldset>"],
    param : [1, "<object>", "</object>"],
    tr : [2, "<table><tbody>", "</tbody></table>"],
    optgroup : option,
    option : option,
    caption : table,
    colgroup : table,
    tbody : table,
    tfoot : table,
    thead : table,
    td : td,
    th : td,
    circle : m,
    defs : m,
    ellipse : m,
    g : m,
    line : m,
    linearGradient : m,
    path : m,
    polygon : m,
    polyline : m,
    radialGradient : m,
    rect : m,
    stop : m,
    text : m
  };
  /** @type {function (string): ?} */
  module.exports = parse;
}, null);
__d("createNodesFromMarkup", ["ExecutionEnvironment", "createArrayFromMixed", "getMarkupWrap", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, $, merge, callback) {
  /**
   * @param {string} body
   * @return {?}
   */
  function parser(body) {
    var tokens = body.match(typePattern);
    return tokens && tokens[1].toLowerCase();
  }
  /**
   * @param {string} str
   * @param {?} body
   * @return {?}
   */
  function parse(str, body) {
    /** @type {(Element|null)} */
    var el = startTouchEl;
    callback(!!startTouchEl);
    var ret = parser(str);
    var args = ret && merge(ret);
    if (args) {
      el.innerHTML = args[1] + str + args[2];
      var pageY = args[0];
      for (;pageY--;) {
        /** @type {(Node|null)} */
        el = el.lastChild;
      }
    } else {
      /** @type {string} */
      el.innerHTML = str;
    }
    var els = el.getElementsByTagName("script");
    if (els.length) {
      callback(body);
      $(els).forEach(body);
    }
    var obj = $(el.childNodes);
    for (;el.lastChild;) {
      el.removeChild(el.lastChild);
    }
    return obj;
  }
  /** @type {(Element|null)} */
  var startTouchEl = dataAndEvents.canUseDOM ? document.createElement("div") : null;
  /** @type {RegExp} */
  var typePattern = /^\s*<(\w+)/;
  /** @type {function (string, ?): ?} */
  module.exports = parse;
}, null);
__d("evalGlobal", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} data
   * @return {undefined}
   */
  function init(data) {
    if (typeof data != "string") {
      throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
    }
    if (!data) {
      return;
    }
    /** @type {Element} */
    var script = document.createElement("script");
    try {
      script.appendChild(document.createTextNode(data));
    } catch (j) {
      /** @type {string} */
      script.text = data;
    }
    var head = document.getElementsByTagName("head")[0] || document.documentElement;
    head.appendChild(script);
    head.removeChild(script);
  }
  /** @type {function (string): undefined} */
  module.exports = init;
}, null);
__d("HTML", ["Bootloader", "createNodesFromMarkup", "emptyFunction", "evalGlobal", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, env, require, dataAndEvents, fun, assert) {
  /**
   * @param {string} data
   * @return {?}
   */
  function test(data) {
    if (data && typeof data.__html === "string") {
      /** @type {string} */
      data = data.__html;
    }
    if (!(this instanceof test)) {
      if (data instanceof test) {
        return data;
      }
      return new test(data);
    }
    if (data) {
      /** @type {string} */
      var dataType = typeof data;
      assert(dataType === "string");
    }
    this._markup = data || "";
    /** @type {boolean} */
    this._defer = false;
    /** @type {string} */
    this._extraAction = "";
    /** @type {null} */
    this._nodes = null;
    /** @type {(RegExp|string)} */
    this._inlineJS = dataAndEvents;
    /** @type {null} */
    this._rootNode = null;
  }
  /** @type {RegExp} */
  var r20 = /(<(\w+)[^>]*?)\/>/g;
  var EMPTY = {
    abbr : true,
    area : true,
    br : true,
    col : true,
    embed : true,
    hr : true,
    img : true,
    input : true,
    link : true,
    meta : true,
    param : true
  };
  /**
   * @return {?}
   */
  test.prototype.toString = function() {
    var callStr = this._markup;
    if (this._extraAction) {
      callStr += '<script type="text/javascript">' + this._extraAction + "</scr" + "ipt>";
    }
    return callStr;
  };
  /**
   * @return {?}
   */
  test.prototype.getContent = function() {
    return this._markup;
  };
  /**
   * @return {?}
   */
  test.prototype.getNodes = function() {
    this._fillCache();
    return this._nodes;
  };
  /**
   * @return {?}
   */
  test.prototype.getRootNode = function() {
    assert(!this._rootNode);
    var codeSegments = this.getNodes();
    if (codeSegments.length === 1) {
      this._rootNode = codeSegments[0];
    } else {
      /** @type {DocumentFragment} */
      var rootNode = document.createDocumentFragment();
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        rootNode.appendChild(codeSegments[i]);
      }
      /** @type {DocumentFragment} */
      this._rootNode = rootNode;
    }
    return this._rootNode;
  };
  /**
   * @return {?}
   */
  test.prototype.getAction = function() {
    this._fillCache();
    var WAIT = function() {
      this._inlineJS();
      fun(this._extraAction);
    }.bind(this);
    return this._defer ? function() {
      setTimeout(WAIT, 0);
    } : WAIT;
  };
  /**
   * @return {undefined}
   */
  test.prototype._fillCache = function() {
    if (this._nodes !== null) {
      return;
    }
    if (!this._markup) {
      /** @type {Array} */
      this._nodes = [];
      return;
    }
    var tests = this._markup.replace(r20, function(dataAndEvents, label, str) {
      return EMPTY[str.toLowerCase()] ? dataAndEvents : label + "></" + str + ">";
    });
    /** @type {null} */
    var codeSegments = null;
    var nodes = require(tests, function(e) {
      codeSegments = codeSegments || [];
      codeSegments.push(e.src ? env.requestJSResource.bind(env, e.src) : fun.bind(null, e.innerHTML));
      e.parentNode.removeChild(e);
    });
    if (codeSegments) {
      /**
       * @return {undefined}
       */
      this._inlineJS = function() {
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          codeSegments[i]();
        }
      };
    }
    this._nodes = nodes;
  };
  /**
   * @param {?} hideBackground
   * @return {?}
   */
  test.prototype.setAction = function(hideBackground) {
    this._extraAction = hideBackground;
    return this;
  };
  /**
   * @param {?} aValue
   * @return {?}
   */
  test.prototype.setDeferred = function(aValue) {
    /** @type {boolean} */
    this._defer = !!aValue;
    return this;
  };
  /**
   * @param {?} text
   * @return {?}
   */
  test.isHTML = function(text) {
    return!!text && (text instanceof test || text.__html !== void 0);
  };
  /**
   * @param {Function} obj
   * @return {?}
   */
  test.replaceJSONWrapper = function(obj) {
    return obj && obj.__html !== void 0 ? new test(obj.__html) : obj;
  };
  /** @type {function (string): ?} */
  module.exports = test;
}, null);
__d("uniqueID", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function isArray() {
    return _ + (UID++).toString(radix);
  }
  /** @type {string} */
  var _ = "js_";
  /** @type {number} */
  var radix = 36;
  /** @type {number} */
  var UID = 0;
  /** @type {function (): ?} */
  module.exports = isArray;
}, null);
__d("getOrCreateDOMID", ["uniqueID"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, id) {
  /**
   * @param {Object} elt
   * @return {?}
   */
  function init(elt) {
    if (!elt.id) {
      elt.id = id();
    }
    return elt.id;
  }
  /** @type {function (Object): ?} */
  module.exports = init;
}, null);
__d("isScalar", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Function} obj
   * @return {?}
   */
  function Assertion(obj) {
    return/string|number|boolean/.test(typeof obj);
  }
  /** @type {function (Function): ?} */
  module.exports = Assertion;
}, null);
__d("DOM", ["DOMQuery", "Event", "HTML", "UserAgent_DEPRECATED", "$", "copyProperties", "createArrayFromMixed", "getOrCreateDOMID", "isScalar"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, item, listener, data_priv, Env, callback, extend, $, dataAndEvents, load) {
  /**
   * @param {Node} t
   * @return {undefined}
   */
  function remove(t) {
    if (t.parentNode) {
      t.parentNode.removeChild(t);
    }
  }
  /**
   * @param {?} src
   * @param {Node} el
   * @param {Function} cb
   * @return {?}
   */
  function parse(src, el, cb) {
    src = data_priv.replaceJSONWrapper(src);
    if (src instanceof data_priv && ("" === el.innerHTML && -1 === src.toString().indexOf("<scr" + "ipt"))) {
      var charset = Env.ie();
      if (!charset || charset > 7 && !item.isNodeOfType(el, ["table", "tbody", "thead", "tfoot", "tr", "select", "fieldset"])) {
        /** @type {string} */
        var word = charset ? '<em style="display:none;">&nbsp;</em>' : "";
        /** @type {string} */
        el.innerHTML = word + src;
        if (charset) {
          el.removeChild(el.firstChild);
        }
        return $(el.childNodes);
      }
    } else {
      if (item.isTextNode(el)) {
        el.data = src;
        return[src];
      }
    }
    /** @type {DocumentFragment} */
    var results = document.createDocumentFragment();
    var value;
    /** @type {Array} */
    var result = [];
    /** @type {Array} */
    var failures = [];
    src = $(src);
    /** @type {number} */
    var i = 0;
    for (;i < src.length;i++) {
      value = data_priv.replaceJSONWrapper(src[i]);
      if (value instanceof data_priv) {
        failures.push(value.getAction());
        var array = value.getNodes();
        /** @type {number} */
        var index = 0;
        for (;index < array.length;index++) {
          result.push(array[index]);
          results.appendChild(array[index]);
        }
      } else {
        if (load(value)) {
          /** @type {Text} */
          var elem = document.createTextNode(value);
          result.push(elem);
          results.appendChild(elem);
        } else {
          if (item.isNode(value)) {
            result.push(value);
            results.appendChild(value);
          }
        }
      }
    }
    cb(results);
    failures.forEach(function(cb) {
      cb();
    });
    return result;
  }
  var me = {
    /**
     * @param {string} name
     * @param {?} opt_attributes
     * @param {?} c
     * @return {?}
     */
    create : function(name, opt_attributes, c) {
      /** @type {Element} */
      var node = document.createElement(name);
      if (opt_attributes) {
        me.setAttributes(node, opt_attributes);
      }
      if (c != null) {
        me.setContent(node, c);
      }
      return node;
    },
    /**
     * @param {Element} element
     * @param {Object} params
     * @return {undefined}
     */
    setAttributes : function(element, params) {
      if (params.type) {
        element.type = params.type;
      }
      var key;
      for (key in params) {
        var val = params[key];
        /** @type {boolean} */
        var camelKey = /^on/i.test(key);
        if (key == "type") {
          continue;
        } else {
          if (key == "style") {
            if (typeof val == "string") {
              /** @type {string} */
              element.style.cssText = val;
            } else {
              extend(element.style, val);
            }
          } else {
            if (camelKey) {
              listener.listen(element, key.substr(2), val);
            } else {
              if (key in element) {
                element[key] = val;
              } else {
                if (element.setAttribute) {
                  element.setAttribute(key, val);
                }
              }
            }
          }
        }
      }
    },
    /**
     * @param {Element} parent
     * @param {?} parts
     * @return {?}
     */
    prependContent : function(parent, parts) {
      return parse(parts, parent, function(i) {
        if (parent.firstChild) {
          parent.insertBefore(i, parent.firstChild);
        } else {
          parent.appendChild(i);
        }
      });
    },
    /**
     * @param {Node} oldNode
     * @param {?} val
     * @return {?}
     */
    insertAfter : function(oldNode, val) {
      var parent = oldNode.parentNode;
      return parse(val, parent, function(i) {
        if (oldNode.nextSibling) {
          parent.insertBefore(i, oldNode.nextSibling);
        } else {
          parent.appendChild(i);
        }
      });
    },
    /**
     * @param {string} body
     * @param {?} target
     * @return {?}
     */
    insertBefore : function(body, target) {
      var parent = body.parentNode;
      return parse(target, parent, function(i) {
        parent.insertBefore(i, body);
      });
    },
    /**
     * @param {Element} node
     * @param {?} content
     * @return {?}
     */
    setContent : function(node, content) {
      for (;node.firstChild;) {
        remove(node.firstChild);
      }
      return me.appendContent(node, content);
    },
    /**
     * @param {Object} selector
     * @param {?} content
     * @return {?}
     */
    appendContent : function(selector, content) {
      return parse(content, selector, function(elem) {
        selector.appendChild(elem);
      });
    },
    /**
     * @param {RegExp} regex
     * @param {string} pattern
     * @return {?}
     */
    replace : function(regex, pattern) {
      var parent = regex.parentNode;
      return parse(pattern, parent, function(otherNode) {
        parent.replaceChild(otherNode, regex);
      });
    },
    /**
     * @param {?} owner
     * @return {undefined}
     */
    remove : function(owner) {
      remove(callback(owner));
    },
    /**
     * @param {Element} basis
     * @return {undefined}
     */
    empty : function(basis) {
      basis = callback(basis);
      for (;basis.firstChild;) {
        remove(basis.firstChild);
      }
    },
    getID : dataAndEvents
  };
  extend(me, item);
  module.exports = me;
}, null);
__d("LinkshimAsyncLink", ["$", "AsyncSignal", "DOM", "UserAgent_DEPRECATED"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, require, Request, parent, Env) {
  var jQuery = {
    /**
     * @param {(Object|string)} element
     * @param {string} content
     * @return {undefined}
     */
    swap : function(element, content) {
      /** @type {boolean} */
      var n = Env.ie() <= 8;
      if (n) {
        var elem = parent.create("wbr", {}, null);
        parent.appendContent(element, elem);
      }
      /** @type {string} */
      element.href = content;
      if (n) {
        parent.remove(elem);
      }
    },
    /**
     * @param {(Object|string)} body
     * @param {string} callback
     * @param {string} ajax
     * @return {undefined}
     */
    referrer_log : function(body, callback, ajax) {
      var style = require("meta_referrer");
      /** @type {string} */
      style.content = "origin";
      jQuery.swap(body, callback);
      setTimeout(function() {
        /** @type {string} */
        style.content = "default";
        (new Request(ajax, {})).send();
      }, 100);
    }
  };
  module.exports = jQuery;
}, null);
__d("legacy:dom-asynclinkshim", ["LinkshimAsyncLink"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.LinkshimAsyncLink = trim("LinkshimAsyncLink");
}, 3);
__d("Miny", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {number} m
   * @return {?}
   */
  function debug(m) {
    /** @type {number} */
    var j = api.encode.length;
    for (;j < m;j++) {
      /** @type {Array.<string>} */
      var p = j.toString(32).split("");
      /** @type {string} */
      p[p.length - 1] = tmp[parseInt(p[p.length - 1], 32)];
      /** @type {string} */
      p = p.join("");
      /** @type {string} */
      api.encode[j] = p;
      /** @type {number} */
      api.decode[p] = j;
    }
    return api;
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function merge(a) {
    if (/^$|[~\\]|__proto__/.test(a)) {
      return a;
    }
    var codeSegments = a.match(/\w+|\W+/g);
    var settings = {};
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      settings[codeSegments[i]] = (settings[codeSegments[i]] || 0) + 1;
    }
    /** @type {Array.<string>} */
    var keys = Object.keys(settings);
    keys.sort(function(current, key2) {
      return settings[current] < settings[key2] ? 1 : settings[key2] < settings[current] ? -1 : 0;
    });
    var encode = debug(keys.length).encode;
    /** @type {number} */
    i = 0;
    for (;i < keys.length;i++) {
      settings[keys[i]] = encode[i];
    }
    /** @type {Array} */
    var tmp_arr = [];
    /** @type {number} */
    i = 0;
    for (;i < codeSegments.length;i++) {
      tmp_arr[i] = settings[codeSegments[i]];
    }
    return[context, keys.length].concat(keys).concat(tmp_arr.join("")).join("~");
  }
  /**
   * @param {string} resp
   * @return {?}
   */
  function parse(resp) {
    var stack = resp.split("~");
    if (stack.shift() != context) {
      return resp;
    }
    /** @type {number} */
    var w = parseInt(stack.shift(), 10);
    var codeSegments = stack.pop();
    codeSegments = codeSegments.match(/[0-9a-v]*[\-w-zA-Z_]/g);
    var ar = stack;
    var a = debug(w).decode;
    /** @type {Array} */
    var r = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      r[i] = ar[a[codeSegments[i]]];
    }
    return r.join("");
  }
  /** @type {string} */
  var context = "Miny1";
  var api = {
    encode : [],
    decode : {}
  };
  /** @type {Array.<string>} */
  var tmp = "wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("");
  var Base64 = {
    /** @type {function (string): ?} */
    encode : merge,
    /** @type {function (string): ?} */
    decode : parse
  };
  module.exports = Base64;
}, null);
__d("VersionRange", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, indexOf) {
  /**
   * @param {string} events
   * @param {?} i
   * @return {?}
   */
  function some(events, i) {
    var parts = events.split(eventSplitter);
    if (parts.length > 1) {
      return parts.some(function(e2) {
        return util.contains(e2, i);
      });
    } else {
      events = parts[0].trim();
      return removeListener(events, i);
    }
  }
  /**
   * @param {string} name
   * @param {?} target
   * @return {?}
   */
  function removeListener(name, target) {
    var B = name.split(end);
    indexOf(B.length > 0 && B.length <= 2);
    if (B.length === 1) {
      return off(B[0], target);
    } else {
      var vals = B;
      var val = vals[0];
      var existing = vals[1];
      indexOf(isPlainObject(val) && isPlainObject(existing));
      return off(">=" + val, target) && off("<=" + existing, target);
    }
  }
  /**
   * @param {string} name
   * @param {string} f
   * @return {?}
   */
  function off(name, f) {
    name = name.trim();
    if (name === "") {
      return true;
    }
    var value = f.split(slashSplit);
    var event = split(name);
    var related = event.modifier;
    var type = event.rangeComponents;
    switch(related) {
      case "<":
        return apply(value, type);
      case "<=":
        return isArguments(value, type);
      case ">=":
        return isRegExp(value, type);
      case ">":
        return isClassOf(value, type);
      case "~":
      ;
      case "~>":
        return is(value, type);
      default:
        return hasKey(value, type);
    }
  }
  /**
   * @param {Object} fn
   * @param {Object} object
   * @return {?}
   */
  function apply(fn, object) {
    return call(fn, object) === -1;
  }
  /**
   * @param {Object} value
   * @param {Object} object
   * @return {?}
   */
  function isArguments(value, object) {
    var obj = call(value, object);
    return obj === -1 || obj === 0;
  }
  /**
   * @param {Object} key
   * @param {Object} object
   * @return {?}
   */
  function hasKey(key, object) {
    return call(key, object) === 0;
  }
  /**
   * @param {Object} re
   * @param {Object} object
   * @return {?}
   */
  function isRegExp(re, object) {
    var r = call(re, object);
    return r === 1 || r === 0;
  }
  /**
   * @param {Object} value
   * @param {Object} object
   * @return {?}
   */
  function isClassOf(value, object) {
    return call(value, object) === 1;
  }
  /**
   * @param {Object} value
   * @param {Object} type
   * @return {?}
   */
  function is(value, type) {
    var which = type.slice();
    var array = type.slice();
    if (array.length > 1) {
      array.pop();
    }
    /** @type {number} */
    var i = array.length - 1;
    /** @type {number} */
    var index = parseInt(array[i], 10);
    if (at(index)) {
      /** @type {string} */
      array[i] = index + 1 + "";
    }
    return isRegExp(value, which) && apply(value, array);
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function split(s) {
    var lines = s.split(slashSplit);
    var dontCloseTags = lines[0].match(typePattern);
    indexOf(dontCloseTags);
    return{
      modifier : dontCloseTags[1],
      rangeComponents : [dontCloseTags[2]].concat(lines.slice(1))
    };
  }
  /**
   * @param {number} index
   * @return {?}
   */
  function at(index) {
    return!isNaN(index) && isFinite(index);
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function isPlainObject(obj) {
    return!split(obj).modifier;
  }
  /**
   * @param {?} array
   * @param {?} kbytes
   * @return {undefined}
   */
  function asyncForEach(array, kbytes) {
    var i = array.length;
    for (;i < kbytes;i++) {
      /** @type {string} */
      array[i] = "0";
    }
  }
  /**
   * @param {Object} tokens
   * @param {Object} parts
   * @return {?}
   */
  function build(tokens, parts) {
    tokens = tokens.slice();
    parts = parts.slice();
    asyncForEach(tokens, parts.length);
    /** @type {number} */
    var i = 0;
    for (;i < parts.length;i++) {
      var ha = parts[i].match(/^[x*]$/i);
      if (ha) {
        /** @type {string} */
        parts[i] = tokens[i] = "0";
        if (ha[0] === "*" && i === parts.length - 1) {
          /** @type {number} */
          var j = i;
          for (;j < tokens.length;j++) {
            /** @type {string} */
            tokens[j] = "0";
          }
        }
      }
    }
    asyncForEach(parts, tokens.length);
    return[tokens, parts];
  }
  /**
   * @param {string} value
   * @param {string} options
   * @return {?}
   */
  function func(value, options) {
    var cDigit = value.match(core_rnotwhite)[1];
    var nodes = options.match(core_rnotwhite)[1];
    /** @type {number} */
    var pos = parseInt(cDigit, 10);
    /** @type {number} */
    var length = parseInt(nodes, 10);
    if (at(pos) && (at(length) && pos !== length)) {
      return update(pos, length);
    } else {
      return update(value, options);
    }
  }
  /**
   * @param {(boolean|number|string)} a
   * @param {(boolean|number|string)} b
   * @return {?}
   */
  function update(a, b) {
    indexOf(typeof a === typeof b);
    if (a > b) {
      return 1;
    } else {
      if (a < b) {
        return-1;
      } else {
        return 0;
      }
    }
  }
  /**
   * @param {Object} data
   * @param {Object} config
   * @return {?}
   */
  function call(data, config) {
    var result = build(data, config);
    var obj = result[0];
    var codeSegments = result[1];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var ret = func(obj[i], codeSegments[i]);
      if (ret) {
        return ret;
      }
    }
    return 0;
  }
  /** @type {RegExp} */
  var slashSplit = /\./;
  /** @type {RegExp} */
  var eventSplitter = /\|\|/;
  /** @type {RegExp} */
  var end = /\s+\-\s+/;
  /** @type {RegExp} */
  var typePattern = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
  /** @type {RegExp} */
  var core_rnotwhite = /^(\d*)(.*)/;
  var util = {
    /**
     * @param {Object} e
     * @param {?} value
     * @return {?}
     */
    contains : function(e, value) {
      return some(e.trim(), value.trim());
    }
  };
  module.exports = util;
}, null);
__d("mapObject", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Object} obj
   * @param {Function} f
   * @param {Object} opt_obj
   * @return {?}
   */
  function map(obj, f, opt_obj) {
    if (!obj) {
      return null;
    }
    var res = {};
    var key;
    for (key in obj) {
      if (has.call(obj, key)) {
        res[key] = f.call(opt_obj, obj[key], key, obj);
      }
    }
    return res;
  }
  /** @type {function (this:Object, *): boolean} */
  var has = Object.prototype.hasOwnProperty;
  /** @type {function (Object, Function, Object): ?} */
  module.exports = map;
}, null);
__d("memoizeStringOnly", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Function} data
   * @return {?}
   */
  function trigger(data) {
    var attributes = {};
    return function(name) {
      if (!attributes.hasOwnProperty(name)) {
        attributes[name] = data.call(this, name);
      }
      return attributes[name];
    };
  }
  /** @type {function (Function): ?} */
  module.exports = trigger;
}, null);
__d("UserAgent", ["UserAgentData", "VersionRange", "mapObject", "memoizeStringOnly"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, browser, data, factory, root) {
  /**
   * @param {?} prefix
   * @param {?} isXML
   * @param {Object} key
   * @param {Function} f
   * @return {?}
   */
  function flush(prefix, isXML, key, f) {
    if (prefix === key) {
      return true;
    }
    if (!key.startsWith(prefix)) {
      return false;
    }
    var d = key.slice(prefix.length);
    if (isXML) {
      d = f ? f(d) : d;
      return data.contains(d, isXML);
    }
    return false;
  }
  /**
   * @param {string} results
   * @return {?}
   */
  function find(results) {
    if (browser.platformName === "Windows") {
      return results.replace(/^\s*NT/, "");
    }
    return results;
  }
  var require = {
    /**
     * @param {string} subKey
     * @return {?}
     */
    isBrowser : function(subKey) {
      return flush(browser.browserName, browser.browserFullVersion, subKey);
    },
    /**
     * @param {Object} subKey
     * @return {?}
     */
    isBrowserArchitecture : function(subKey) {
      return flush(browser.browserArchitecture, null, subKey);
    },
    /**
     * @param {Object} subKey
     * @return {?}
     */
    isDevice : function(subKey) {
      return flush(browser.deviceName, null, subKey);
    },
    /**
     * @param {Object} subKey
     * @return {?}
     */
    isEngine : function(subKey) {
      return flush(browser.engineName, browser.engineVersion, subKey);
    },
    /**
     * @param {Object} subKey
     * @return {?}
     */
    isPlatform : function(subKey) {
      return flush(browser.platformName, browser.platformFullVersion, subKey, find);
    },
    /**
     * @param {Object} subKey
     * @return {?}
     */
    isPlatformArchitecture : function(subKey) {
      return flush(browser.platformArchitecture, null, subKey);
    }
  };
  module.exports = factory(require, root);
}, null);
__d("getSameOriginTransport", ["ex"], function(xmlhttprequest, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, fn) {
  /**
   * @return {?}
   */
  function request() {
    try {
      return xmlhttprequest.XMLHttpRequest ? new xmlhttprequest.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0");
    } catch (responseStatus) {
      throw new Error(fn("getSameOriginTransport: %s", responseStatus.message));
    }
  }
  /** @type {function (): ?} */
  module.exports = request;
}, null);
__d("BanzaiAdapter", ["Arbiter", "CurrentUser", "Miny", "QueryString", "Run", "SiteData", "UserAgent", "getAsyncParams", "getSameOriginTransport", "setTimeoutAcrossTransitions", "BanzaiConfig"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, M, a, exports, csv, list, el, Env, $, sink, done, commandConfig) {
  /** @type {Array} */
  var requests = [];
  var m = new M;
  /** @type {string} */
  var notExistIP = "/ajax/bz";
  var state = {};
  var self = state.adapter = {
    config : commandConfig,
    /**
     * @return {?}
     */
    getUserID : function() {
      return a.getID();
    },
    /**
     * @param {string} type
     * @return {undefined}
     */
    inform : function(type) {
      m.inform(type);
    },
    /**
     * @param {string} name
     * @param {Function} channel
     * @return {undefined}
     */
    subscribe : function(name, channel) {
      m.subscribe(name, channel);
    },
    /**
     * @return {undefined}
     */
    cleanup : function() {
      var asserterNames = requests;
      /** @type {Array} */
      requests = [];
      asserterNames.forEach(function(jqXHR) {
        if (jqXHR.readyState < 4) {
          jqXHR.abort();
        }
      });
    },
    /**
     * @return {?}
     */
    readyToSend : function() {
      return Env.isBrowser("IE <= 8") || navigator.onLine;
    },
    /**
     * @param {Object} first
     * @param {Function} opt_callback
     * @param {Function} errorCallback
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    send : function(first, opt_callback, errorCallback, dataAndEvents) {
      /** @type {string} */
      var method = "POST";
      var xhr = sink();
      xhr.open(method, notExistIP, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      /**
       * @return {undefined}
       */
      xhr.onreadystatechange = function() {
        if (xhr.readyState >= 4) {
          var e;
          try {
            e = xhr.status;
          } catch (ga) {
            /** @type {number} */
            e = 0;
          }
          if (e == 200) {
            if (opt_callback) {
              opt_callback();
            }
            if (!dataAndEvents) {
              self.inform(state.OK);
            }
          } else {
            if (errorCallback) {
              errorCallback(e);
            }
            if (!dataAndEvents) {
              self.inform(state.ERROR);
            }
          }
        }
      };
      done(function() {
        if (xhr.readyState < 4) {
          xhr.abort();
        }
      }, state.SEND_TIMEOUT);
      requests.push(xhr);
      var e = $(method);
      /** @type {string} */
      e.q = JSON.stringify(first);
      /** @type {number} */
      e.ts = Date.now();
      e.ph = el.push_phase;
      if (state.FBTRACE) {
        e.fbtrace = state.FBTRACE;
      }
      if (state.isEnabled("miny_compression")) {
        /** @type {number} */
        var length = Date.now();
        var text = exports.encode(e.q);
        if (text.length < e.q.length) {
          e.q = text;
          /** @type {number} */
          e.miny_encode_ms = Date.now() - length;
        }
      }
      xhr.send(csv.encode(e));
    },
    /**
     * @param {?} endpoint
     * @return {undefined}
     */
    setHooks : function(endpoint) {
      list.onAfterUnload(state._unload);
    },
    /**
     * @param {Function} e
     * @return {undefined}
     */
    onUnload : function(e) {
      list.onAfterUnload(e);
    }
  };
  module.exports = state;
}, null);
__d("FBJSON", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, exports, keepData) {
  exports.exports = {
    /** @type {function (this:JSONType, string, function (string, *): *=): *} */
    parse : JSON.parse,
    /** @type {function (this:JSONType, *, (Array.<string>|function (string, *): *|null)=, (number|string)=): string} */
    stringify : JSON.stringify
  };
}, null);
__d("WebStorage", ["ErrorUtils", "ex"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, reporter, format) {
  /**
   * @param {string} method
   * @return {?}
   */
  function map(method) {
    if (!methods.hasOwnProperty(method)) {
      methods[method] = callback(method);
    }
    return methods[method];
  }
  /**
   * @param {string} id
   * @return {?}
   */
  function callback(id) {
    try {
      var storage = window[id];
      if (storage) {
        /** @type {string} */
        var key = "__test__" + Date.now();
        storage.setItem(key, "");
        storage.removeItem(key);
      }
      return storage;
    } catch (r) {
    }
  }
  /**
   * @return {?}
   */
  function getData() {
    return map("localStorage");
  }
  /**
   * @return {?}
   */
  function pluck() {
    return map("sessionStorage");
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function toArray(obj) {
    /** @type {Array} */
    var array = [];
    /** @type {number} */
    var i = 0;
    for (;i < obj.length;i++) {
      array.push(obj.key(i));
    }
    return array;
  }
  /**
   * @param {Object} self
   * @param {string} name
   * @param {Array} step
   * @return {?}
   */
  function create(self, name, step) {
    /** @type {null} */
    var err = null;
    try {
      self.setItem(name, step);
    } catch (u) {
      var dig = toArray(self).map(function(i) {
        var itemsCount = self.getItem(i).length;
        return i + "(" + itemsCount + ")";
      });
      /** @type {Error} */
      err = new Error(format("Storage quota exceeded while setting %s(%s). Items(length) follows: %s", name, step.length, dig.join()));
      reporter.reportError(err);
    }
    return err;
  }
  var methods = {};
  var JsDiff = {
    /** @type {function (): ?} */
    getLocalStorage : getData,
    /** @type {function (): ?} */
    getSessionStorage : pluck,
    /** @type {function (Object, string, Array): ?} */
    setItemGuarded : create
  };
  module.exports = JsDiff;
}, null);
__d("pageID", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /** @type {string} */
  module.exports = Math.floor(2147483648 * Math.random()).toString(36);
}, null);
__d("WebStorageMutex", ["WebStorage", "setTimeoutAcrossTransitions", "pageID"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, errorFn, next, actualObject) {
  /**
   * @param {string} name
   * @return {undefined}
   */
  function app(name) {
    /** @type {string} */
    this.name = name;
  }
  var _self = errorFn.getLocalStorage();
  /** @type {string} */
  var object = actualObject;
  /**
   * @param {?} type
   * @return {undefined}
   */
  app.testSetPageID = function(type) {
    object = type;
  };
  /**
   * @return {?}
   */
  app.prototype.$WebStorageMutex0 = function() {
    if (!_self) {
      return object;
    }
    var result = _self.getItem("mutex_" + this.name);
    result = result ? result.split(":") : null;
    return result && result[1] >= Date.now() ? result[0] : null;
  };
  /**
   * @param {number} deepDataAndEvents
   * @return {undefined}
   */
  app.prototype.$WebStorageMutex1 = function(deepDataAndEvents) {
    if (!_self) {
      return;
    }
    var object2 = Date.now() + (deepDataAndEvents || 1E4);
    errorFn.setItemGuarded(_self, "mutex_" + this.name, object + ":" + object2);
  };
  /**
   * @return {?}
   */
  app.prototype.hasLock = function() {
    return this.$WebStorageMutex0() == object;
  };
  /**
   * @param {Function} name
   * @param {Function} options
   * @param {number} deepDataAndEvents
   * @return {undefined}
   */
  app.prototype.lock = function(name, options, deepDataAndEvents) {
    if (this.$WebStorageMutex2) {
      clearTimeout(this.$WebStorageMutex2);
    }
    if (object == (this.$WebStorageMutex0() || object)) {
      this.$WebStorageMutex1(deepDataAndEvents);
    }
    this.$WebStorageMutex2 = next(function() {
      /** @type {null} */
      this.$WebStorageMutex2 = null;
      var opts = this.hasLock() ? name : options;
      if (opts) {
        opts(this);
      }
    }.bind(this), 0);
  };
  /**
   * @return {undefined}
   */
  app.prototype.unlock = function() {
    if (this.$WebStorageMutex2) {
      clearTimeout(this.$WebStorageMutex2);
    }
    if (_self && this.hasLock()) {
      _self.removeItem("mutex_" + this.name);
    }
  };
  /** @type {function (string): undefined} */
  module.exports = app;
}, null);
__d("isInIframe", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function filter() {
    return event;
  }
  /** @type {boolean} */
  var event = window != window.top;
  /** @type {function (): ?} */
  module.exports = filter;
}, null);
__d("Banzai", ["BanzaiAdapter", "CurrentUser", "ErrorUtils", "ExecutionEnvironment", "FBJSON", "WebStorage", "WebStorageMutex", "emptyFunction", "isInIframe", "pageID", "setTimeoutAcrossTransitions"], function(global, ignoreMethodDoesntExist, textAlt, keepData, f, opt_attributes, _this, a, that, dataAndEvents, self, deepDataAndEvents, Level, sData, require, page_id, indexOf) {
  /**
   * @param {?} content
   * @return {?}
   */
  function done(content) {
    return content[2] >= Date.now() - (options.config.EXPIRY || _this.EXPIRY);
  }
  /**
   * @param {Array} opts
   * @param {number} textStatus
   * @return {undefined}
   */
  function success(opts, textStatus) {
    /** @type {number} */
    opts.__meta.status = status;
    opts[3] = (opts[3] || 0) + 1;
    if (!opts.__meta.retry && (textStatus >= 400 && textStatus < 600)) {
      utils.push(opts);
    }
  }
  /**
   * @param {number} elem
   * @return {?}
   */
  function next(elem) {
    var absDelta = Date.now() + elem;
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta;
      clearTimeout(to);
      to = indexOf(dontCloseTags, elem);
      return true;
    }
  }
  /**
   * @return {undefined}
   */
  function dontCloseTags() {
    handler(null, null);
  }
  /**
   * @param {?} callback
   * @param {?} done
   * @return {undefined}
   */
  function handler(callback, done) {
    /** @type {null} */
    lowestDelta = null;
    next(_this.BASIC.delay);
    if (!options.readyToSend()) {
      if (done) {
        done();
      }
      return;
    }
    options.inform(_this.SEND);
    /** @type {Array} */
    var results = [];
    /** @type {Array} */
    var children = [];
    var resultItems = {};
    utils = utils.filter(function(child) {
      var data = child.__meta;
      if (data.status >= ATTACHING || !done(child)) {
        return false;
      }
      if (data.status >= code) {
        return true;
      }
      var i = data.pageID + data.userID;
      var result = resultItems[i];
      if (!result) {
        result = {
          user : data.userID,
          page_id : data.pageID,
          posts : []
        };
        resultItems[i] = result;
        results.push(result);
      }
      /** @type {number} */
      data.status = code;
      result.posts.push(child);
      children.push(child);
      return data.retry;
    });
    if (results.length <= 0) {
      options.inform(_this.OK);
      if (callback) {
        callback();
      }
      return;
    }
    results[0].trigger = onloadmethod;
    /** @type {null} */
    onloadmethod = null;
    options.send(results, function() {
      children.forEach(function(o) {
        /** @type {number} */
        o.__meta.status = ATTACHING;
      });
      if (callback) {
        callback();
      }
    }, function(textStatus) {
      children.forEach(function(col) {
        success(col, textStatus);
      });
      if (done) {
        done();
      }
    });
  }
  var options = _this.adapter;
  var Block = require();
  /** @type {string} */
  var item = "bz:";
  /** @type {number} */
  var status = 0;
  /** @type {number} */
  var code = 1;
  /** @type {number} */
  var ATTACHING = 2;
  var to;
  var lowestDelta;
  /** @type {Array} */
  var utils = [];
  /** @type {null} */
  var onloadmethod = null;
  var context;
  var obj = deepDataAndEvents.getLocalStorage();
  if (obj && !Block) {
    context = {
      /**
       * @return {undefined}
       */
      store : function set() {
        if (utils.length <= 0) {
          return;
        }
        var data = utils.map(function(sup) {
          return[sup[0], sup[1], sup[2], sup[3] || 0, sup.__meta];
        });
        /** @type {Array} */
        utils = [];
        obj.setItem(item + page_id + "." + Date.now(), self.stringify(data));
      },
      /**
       * @return {undefined}
       */
      restore : function start() {
        (new Level("banzai")).lock(function(selection) {
          /** @type {Array} */
          var types = [];
          /** @type {number} */
          var i = 0;
          for (;i < obj.length;i++) {
            var all = obj.key(i);
            if (all.indexOf(item) === 0 && all.indexOf("bz:__") !== 0) {
              types.push(all);
            }
          }
          types.forEach(function(key) {
            var source = obj.getItem(key);
            obj.removeItem(key);
            if (!source) {
              return;
            }
            var properties = self.parse(source, f.id);
            properties.forEach(function(child) {
              if (!child) {
                return;
              }
              var response = child.__meta = child.pop();
              var childEl = done(child);
              if (childEl && response.userID == a.getID()) {
                /** @type {number} */
                response.status = status;
                utils.push(child);
              }
            });
          });
          selection.unlock();
        });
      }
    };
  } else {
    context = {
      store : sData,
      restore : sData
    };
  }
  /** @type {string} */
  _this.SEND = "Banzai:SEND";
  /** @type {string} */
  _this.OK = "Banzai:OK";
  /** @type {string} */
  _this.ERROR = "Banzai:ERROR";
  /** @type {string} */
  _this.SHUTDOWN = "Banzai:SHUTDOWN";
  /** @type {number} */
  _this.SEND_TIMEOUT = 15E3;
  /** @type {number} */
  _this.VITAL_WAIT = 1E3;
  /** @type {number} */
  _this.BASIC_WAIT = 6E4;
  /** @type {number} */
  _this.EXPIRY = 30 * 6E4;
  _this.VITAL = {
    delay : options.config.MIN_WAIT || _this.VITAL_WAIT
  };
  _this.BASIC = {
    delay : options.config.MAX_WAIT || _this.BASIC_WAIT
  };
  _this.FBTRACE = options.config.fbtrace;
  /**
   * @param {string} level
   * @return {?}
   */
  _this.isEnabled = function(level) {
    return options.config.gks && options.config.gks[level];
  };
  /**
   * @param {string} func
   * @param {string} node
   * @param {Object} event
   * @return {undefined}
   */
  _this.post = function(func, node, event) {
    event = event || {};
    var related = event.retry;
    if (options.config.disabled) {
      return;
    }
    if (!dataAndEvents.canUseDOM) {
      return;
    }
    var spec = options.config.blacklist;
    if (spec) {
      if (spec.indexOf) {
        if (typeof spec.indexOf == "function") {
          if (spec.indexOf(func) != -1) {
            return;
          }
        }
      }
    }
    if (Block && document.domain == "facebook.com") {
      var root;
      try {
        root = global.top.require("Banzai");
      } catch (oa) {
        /** @type {null} */
        root = null;
      }
      if (root) {
        root.post.apply(root, arguments);
        return;
      }
    }
    /** @type {Array} */
    var info = [func, node, Date.now(), 0];
    info.__meta = {
      retry : related === true,
      pageID : page_id,
      userID : a.getID(),
      status : status
    };
    if (event.signal) {
      /** @type {number} */
      info.__meta.status = code;
      /** @type {Array} */
      var results = [{
        user : a.getID(),
        page_id : page_id,
        posts : [info],
        trigger : func
      }];
      options.send(results, function() {
        /** @type {number} */
        info.__meta.status = ATTACHING;
      }, function(textStatus) {
        success(info, textStatus);
      }, true);
      if (!related) {
        return;
      }
    }
    utils.push(info);
    var cur = event.delay;
    if (cur == null) {
      cur = _this.BASIC_WAIT;
    }
    if (next(cur) || !onloadmethod) {
      /** @type {string} */
      onloadmethod = func;
    }
  };
  /**
   * @param {?} text
   * @param {?} cb
   * @return {undefined}
   */
  _this.flush = function(text, cb) {
    clearTimeout(to);
    /** @type {number} */
    to = 0;
    handler(text, cb);
  };
  _this.subscribe = options.subscribe;
  /** @type {function (number): ?} */
  _this._schedule = next;
  /**
   * @param {?} exp
   * @return {undefined}
   */
  _this._store = function(exp) {
    that.applyWithGuard(context.store, context);
  };
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  _this._restore = function(dataAndEvents) {
    that.applyWithGuard(context.restore, context);
    next(options.config.RESTORE_WAIT || _this.VITAL_WAIT);
  };
  /**
   * @return {undefined}
   */
  _this._unload = function() {
    options.cleanup();
    options.inform(_this.SHUTDOWN);
    that.applyWithGuard(context.store, context);
  };
  /**
   * @return {?}
   */
  _this._testState = function() {
    return{
      postBuffer : utils,
      triggerRoute : onloadmethod
    };
  };
  if (dataAndEvents.canUseDOM) {
    if (_this.isEnabled("adapterhooks")) {
      options.setHooks(context);
    } else {
      options.onUnload(_this._unload);
    }
    _this._restore();
  }
  /** @type {Object} */
  f.exports = _this;
}, null);
__d("BanzaiLogger", ["Banzai"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $) {
  /**
   * @param {string} obj
   * @return {?}
   */
  function create(obj) {
    return{
      /**
       * @param {string} url
       * @param {string} text
       * @return {undefined}
       */
      log : function(url, text) {
        $.post(message + ":" + url, text, obj);
      }
    };
  }
  /** @type {string} */
  var message = "logger";
  var passgen = create();
  /** @type {function (string): ?} */
  passgen.create = create;
  module.exports = passgen;
}, null);
__d("BanzaiODS", ["Banzai", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, handler, opt_attributes) {
  /**
   * @return {?}
   */
  function create() {
    /**
     * @param {?} i
     * @param {?} path
     * @param {number} index
     * @param {number} arg
     * @return {undefined}
     */
    function at(i, path, index, arg) {
      if (index === void 0) {
        /** @type {number} */
        index = 1;
      }
      if (arg === void 0) {
        /** @type {number} */
        arg = 1;
      }
      if (i in arr2) {
        if (arr2[i] <= 0) {
          return;
        } else {
          index /= arr2[i];
        }
      }
      var scripts = types[i] || (types[i] = {});
      var target = scripts[path] || (scripts[path] = [0]);
      /** @type {number} */
      index = Number(index);
      /** @type {number} */
      arg = Number(arg);
      if (!isFinite(index) || !isFinite(arg)) {
        return;
      }
      target[0] += index;
      if (arguments.length >= 4) {
        if (!target[1]) {
          /** @type {number} */
          target[1] = 0;
        }
        target[1] += arg;
      }
    }
    var types = {};
    var arr2 = {};
    return{
      /**
       * @param {?} i
       * @param {number} value
       * @return {undefined}
       */
      setEntitySample : function(i, value) {
        arr2[i] = Math.random() < value ? value : 0;
      },
      /**
       * @param {?} dataName
       * @param {?} arg
       * @param {number} opt_i
       * @return {undefined}
       */
      bumpEntityKey : function(dataName, arg, opt_i) {
        at(dataName, arg, opt_i);
      },
      /**
       * @param {?} dataName
       * @param {?} arg
       * @param {number} opt_i
       * @param {number} until
       * @return {undefined}
       */
      bumpFraction : function(dataName, arg, opt_i, until) {
        at(dataName, arg, opt_i, until);
      },
      /**
       * @param {Object} callback
       * @return {undefined}
       */
      flush : function(callback) {
        var type;
        for (type in types) {
          handler.post("ods:" + type, types[type], callback);
        }
        types = {};
      }
    };
  }
  var proto = create();
  /** @type {function (): ?} */
  proto.create = create;
  handler.subscribe(handler.SEND, proto.flush.bind(proto, null));
  module.exports = proto;
}, null);
__d("BanzaiScuba", ["Banzai", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, jQuery, merge) {
  /**
   * @param {Function} data
   * @param {?} e
   * @param {Object} options
   * @return {?}
   */
  function Entity(data, e, options) {
    this.fields = {};
    /**
     * @param {string} callback
     * @return {undefined}
     */
    this.post = function(callback) {
      if (!data) {
        return;
      }
      var ret = {};
      merge(ret, this.fields);
      /** @type {Function} */
      ret._ds = data;
      if (e) {
        ret._lid = e;
      }
      /** @type {Object} */
      ret._options = options;
      jQuery.post(which, ret, callback);
      /**
       * @return {undefined}
       */
      this.post = function() {
      };
      /** @type {boolean} */
      this.posted = true;
    };
    this.lid = e;
    return this;
  }
  /**
   * @param {?} key
   * @param {?} attr
   * @param {?} cfg
   * @return {?}
   */
  function fn(key, attr, cfg) {
    if (!this.fields[key]) {
      this.fields[key] = {};
    }
    this.fields[key][attr] = cfg;
    return this;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function defer(name) {
    return function(index, computed) {
      if (this.posted) {
        return this;
      }
      return fn.call(this, name, index, computed);
    };
  }
  /** @type {string} */
  var which = "scuba_sample";
  merge(Entity.prototype, {
    /**
     * @return {undefined}
     */
    post : function() {
    },
    addNormal : defer("normal"),
    addInteger : defer("int"),
    addDenorm : defer("denorm"),
    addTagset : defer("tags"),
    addNormVector : defer("normvector")
  });
  /** @type {function (Function, ?, Object): ?} */
  module.exports = Entity;
}, null);
__d("randomInt", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, ok) {
  /**
   * @param {number} i
   * @param {number} index
   * @return {?}
   */
  function run(i, index) {
    /** @type {number} */
    var len = arguments.length;
    ok(len > 0 && len <= 2);
    if (len === 1) {
      /** @type {number} */
      index = i;
      /** @type {number} */
      i = 0;
    }
    ok(index > i);
    var synchronize = this.random || Math.random;
    return Math.floor(i + synchronize() * (index - i));
  }
  /** @type {function (number, number): ?} */
  module.exports = run;
}, null);
__d("ClientIDs", ["randomInt"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $sanitize) {
  var map = {};
  var JsDiff = {
    /**
     * @return {?}
     */
    getNewClientID : function() {
      /** @type {number} */
      var j = Date.now();
      /** @type {string} */
      var objUid = j + ":" + ($sanitize(0, 4294967295) + 1);
      /** @type {boolean} */
      map[objUid] = true;
      return objUid;
    },
    /**
     * @param {?} letter
     * @return {?}
     */
    isExistingClientID : function(letter) {
      return!!map[letter];
    }
  };
  module.exports = JsDiff;
}, null);
__d("BasicVector", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {number} x
   * @param {number} y
   * @return {undefined}
   */
  function Vector(x, y) {
    /** @type {number} */
    this.x = x;
    /** @type {number} */
    this.y = y;
  }
  /**
   * @param {number} recurring
   * @param {number} y
   * @return {?}
   */
  Vector.prototype.derive = function(recurring, y) {
    return new Vector(recurring, y);
  };
  /**
   * @return {?}
   */
  Vector.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")";
  };
  /**
   * @param {number} current
   * @param {number} y
   * @return {?}
   */
  Vector.prototype.add = function(current, y) {
    if (current instanceof Vector) {
      y = current.y;
      current = current.x;
    }
    /** @type {number} */
    var i = parseFloat(current);
    /** @type {number} */
    var r = parseFloat(y);
    return this.derive(this.x + i, this.y + r);
  };
  /**
   * @param {number} x
   * @param {number} y
   * @return {?}
   */
  Vector.prototype.mul = function(x, y) {
    if (y === void 0) {
      /** @type {number} */
      y = x;
    }
    return this.derive(this.x * x, this.y * y);
  };
  /**
   * @param {number} textAlt
   * @param {number} text
   * @return {?}
   */
  Vector.prototype.div = function(textAlt, text) {
    if (text === void 0) {
      /** @type {number} */
      text = textAlt;
    }
    return this.derive(this.x * 1 / textAlt, this.y * 1 / text);
  };
  /**
   * @param {?} color
   * @param {?} subscript
   * @return {?}
   */
  Vector.prototype.sub = function(color, subscript) {
    if (arguments.length === 1) {
      return this.add(color.mul(-1));
    } else {
      return this.add(-color, -subscript);
    }
  };
  /**
   * @param {?} other
   * @return {?}
   */
  Vector.prototype.distanceTo = function(other) {
    return this.sub(other).magnitude();
  };
  /**
   * @return {?}
   */
  Vector.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  /**
   * @param {?} angle
   * @return {?}
   */
  Vector.prototype.rotate = function(angle) {
    return this.derive(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
  };
  /** @type {function (number, number): undefined} */
  module.exports = Vector;
}, null);
__d("BehaviorsMixin", ["copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {Array} doc
   * @return {undefined}
   */
  function UI(doc) {
    /** @type {Array} */
    this._behavior = doc;
    /** @type {boolean} */
    this._enabled = false;
  }
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  function requestAnimationFrame(deepDataAndEvents) {
    if (!deepDataAndEvents.__BEHAVIOR_ID) {
      /** @type {number} */
      deepDataAndEvents.__BEHAVIOR_ID = __BEHAVIOR_ID++;
    }
    return deepDataAndEvents.__BEHAVIOR_ID;
  }
  callback(UI.prototype, {
    /**
     * @return {undefined}
     */
    enable : function() {
      if (!this._enabled) {
        /** @type {boolean} */
        this._enabled = true;
        this._behavior.enable();
      }
    },
    /**
     * @return {undefined}
     */
    disable : function() {
      if (this._enabled) {
        /** @type {boolean} */
        this._enabled = false;
        this._behavior.disable();
      }
    }
  });
  /** @type {number} */
  var __BEHAVIOR_ID = 1;
  var JsDiff = {
    /**
     * @param {undefined} deepDataAndEvents
     * @return {?}
     */
    enableBehavior : function(deepDataAndEvents) {
      if (!this._behaviors) {
        this._behaviors = {};
      }
      var id = requestAnimationFrame(deepDataAndEvents);
      if (!this._behaviors[id]) {
        this._behaviors[id] = new UI(new deepDataAndEvents(this));
      }
      this._behaviors[id].enable();
      return this;
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    disableBehavior : function(deepDataAndEvents) {
      if (this._behaviors) {
        var id = requestAnimationFrame(deepDataAndEvents);
        if (this._behaviors[id]) {
          this._behaviors[id].disable();
        }
      }
      return this;
    },
    /**
     * @param {Array} callbacks
     * @return {?}
     */
    enableBehaviors : function(callbacks) {
      callbacks.forEach(this.enableBehavior.bind(this));
      return this;
    },
    /**
     * @return {undefined}
     */
    destroyBehaviors : function() {
      if (this._behaviors) {
        var section;
        for (section in this._behaviors) {
          this._behaviors[section].disable();
        }
        this._behaviors = {};
      }
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    hasBehavior : function(deepDataAndEvents) {
      return this._behaviors && requestAnimationFrame(deepDataAndEvents) in this._behaviors;
    }
  };
  module.exports = JsDiff;
}, null);
__d("forEachObject", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Object} obj
   * @param {Function} f
   * @param {Object} o
   * @return {undefined}
   */
  function isFunction(obj, f, o) {
    var key;
    for (key in obj) {
      if (has.call(obj, key)) {
        f.call(o, obj[key], key, obj);
      }
    }
  }
  /** @type {function (this:Object, *): boolean} */
  var has = Object.prototype.hasOwnProperty;
  /** @type {function (Object, Function, Object): undefined} */
  module.exports = isFunction;
}, null);
__d("TimerStorage", ["forEachObject"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, next) {
  var map = {
    TIMEOUT : "TIMEOUT",
    INTERVAL : "INTERVAL",
    IMMEDIATE : "IMMEDIATE",
    ANIMATION_FRAME : "ANIMATION_FRAME"
  };
  var cache = {};
  next(map, function(dataAndEvents, k) {
    return cache[k] = [];
  });
  var scope = {
    /**
     * @param {?} view
     * @param {?} animation
     * @return {undefined}
     */
    push : function(view, animation) {
      cache[view].push(animation);
    },
    /**
     * @param {?} prop
     * @param {?} callbacks
     * @return {undefined}
     */
    popAll : function(prop, callbacks) {
      cache[prop].forEach(callbacks);
      /** @type {number} */
      cache[prop].length = 0;
    }
  };
  Object.assign(scope, map);
  module.exports = scope;
}, null);
__d("setImmediateAcrossTransitions", ["TimeSlice", "setImmediatePolyfill"], function(that, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, source, alertCallback) {
  /**
   * @return {?}
   */
  module.exports = function() {
    /** @type {Array} */
    var args = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var argLength = arguments.length;
    for (;i < argLength;i++) {
      args.push(arguments[i]);
    }
    args[0] = source.guard(args[0], "setImmediate");
    return alertCallback.apply(that, args);
  };
}, null);
__d("setImmediate", ["TimerStorage", "setImmediateAcrossTransitions"], function(el, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, col, wrapper) {
  /**
   * @return {?}
   */
  module.exports = function() {
    /** @type {Array} */
    var args = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var argLength = arguments.length;
    for (;i < argLength;i++) {
      args.push(arguments[i]);
    }
    var options = wrapper.apply(el, args);
    col.push(col.IMMEDIATE, options);
    return options;
  };
}, null);
__d("Promise", ["ES6Promise", "invariant", "throwImmediate"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, collection, $sanitize, reject) {
  var e = collection.prototype;
  /**
   * @param {?} onFulfilledOrRejected
   * @return {?}
   */
  e["finally"] = function(onFulfilledOrRejected) {
    return this.then(onFulfilledOrRejected, onFulfilledOrRejected);
  };
  /**
   * @param {?} handler
   * @param {?} onRejected
   * @return {undefined}
   */
  e.done = function(handler, onRejected) {
    this.then(handler, onRejected).then(null, reject);
  };
  /**
   * @param {Object} variables
   * @return {?}
   */
  collection.allObject = function(variables) {
    $sanitize(!Array.isArray(variables));
    /** @type {Array.<string>} */
    var names = Object.keys(variables);
    return collection.all(names.map(function(k) {
      return variables[k];
    })).then(function(failures) {
      var benchmarks = {};
      failures.forEach(function(ref, i) {
        benchmarks[names[i]] = ref;
      });
      return benchmarks;
    });
  };
  /** @type {string} */
  module.exports = collection;
}, null);
__d("camelize", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} str
   * @return {?}
   */
  function toCamelCase(str) {
    return str.replace(r20, function(dataAndEvents, letter) {
      return letter.toUpperCase();
    });
  }
  /** @type {RegExp} */
  var r20 = /-(.)/g;
  /** @type {function (string): ?} */
  module.exports = toCamelCase;
}, null);
__d("getOpacityStyleName", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function render() {
    if (!g) {
      if ("opacity" in document.body.style) {
        /** @type {string} */
        ee = "opacity";
      } else {
        /** @type {Element} */
        var parseEl = document.createElement("div");
        /** @type {string} */
        parseEl.style.filter = "alpha(opacity=100)";
        if (parseEl.style.filter) {
          /** @type {string} */
          ee = "filter";
        }
        /** @type {null} */
        parseEl = null;
      }
      /** @type {boolean} */
      g = true;
    }
    return ee;
  }
  /** @type {boolean} */
  var g = false;
  /** @type {null} */
  var ee = null;
  /** @type {function (): ?} */
  module.exports = render;
}, null);
__d("hyphenate", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} key
   * @return {?}
   */
  function css(key) {
    return key.replace(r20, "-$1").toLowerCase();
  }
  /** @type {RegExp} */
  var r20 = /([A-Z])/g;
  /** @type {function (string): ?} */
  module.exports = css;
}, null);
__d("getStyleProperty", ["camelize", "hyphenate"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, camelCase, func) {
  /**
   * @param {string} obj
   * @return {?}
   */
  function get(obj) {
    return obj == null ? obj : String(obj);
  }
  /**
   * @param {Object} elem
   * @param {string} name
   * @return {?}
   */
  function css(elem, name) {
    var ret;
    if (window.getComputedStyle) {
      /** @type {(CSSStyleDeclaration|null)} */
      ret = window.getComputedStyle(elem, null);
      if (ret) {
        return get(ret.getPropertyValue(func(name)));
      }
    }
    if (document.defaultView && document.defaultView.getComputedStyle) {
      ret = document.defaultView.getComputedStyle(elem, null);
      if (ret) {
        return get(ret.getPropertyValue(func(name)));
      }
      if (name === "display") {
        return "none";
      }
    }
    if (elem.currentStyle) {
      if (name === "float") {
        return get(elem.currentStyle.cssFloat || elem.currentStyle.styleFloat);
      }
      return get(elem.currentStyle[camelCase(name)]);
    }
    return get(elem.style && elem.style[camelCase(name)]);
  }
  /** @type {function (Object, string): ?} */
  module.exports = css;
}, null);
__d("Style-upstream", ["camelize", "containsNode", "ex", "getOpacityStyleName", "getStyleProperty", "hyphenate", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, define, callback, setValue, f, accessor, func, $timeout) {
  /**
   * @param {Element} element
   * @param {string} type
   * @return {?}
   */
  function find(element, type) {
    var overflowX = _self.get(element, type);
    return overflowX === "auto" || overflowX === "scroll";
  }
  /**
   * @param {string} ret
   * @return {?}
   */
  function require(ret) {
    var exports = {};
    ret.replace(rreturn, function(dataAndEvents, key, val) {
      exports[key] = val;
    });
    return exports;
  }
  /**
   * @param {Object} map
   * @return {?}
   */
  function object(map) {
    /** @type {string} */
    var result = "";
    var letter;
    for (letter in map) {
      if (map[letter]) {
        result += letter + ":" + map[letter] + ";";
      }
    }
    return result;
  }
  /**
   * @param {number} text
   * @return {?}
   */
  function trim(text) {
    return text !== "" ? "alpha(opacity=" + text * 100 + ")" : "";
  }
  /**
   * @param {string} ctx
   * @param {string} name
   * @param {string} value
   * @return {undefined}
   */
  function draw(ctx, name, value) {
    switch(func(name)) {
      case "font-weight":
      ;
      case "line-height":
      ;
      case "opacity":
      ;
      case "z-index":
        break;
      case "width":
      ;
      case "height":
        /** @type {boolean} */
        var x = parseInt(value, 10) < 0;
        $timeout(!x);
      default:
        $timeout(isNaN(value) || (!value || value === "0"));
        break;
    }
  }
  /** @type {RegExp} */
  var rreturn = new RegExp("\\s*" + "([^\\s:]+)" + "\\s*:\\s*" + "([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)" + "(?:;|$)", "g");
  var _self = {
    /**
     * @param {Element} content
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    set : function(content, name, value) {
      draw("Style.set", name, value);
      var style = content.style;
      switch(name) {
        case "opacity":
          if (f() === "filter") {
            style.filter = trim(value);
          } else {
            /** @type {string} */
            style.opacity = value;
          }
          break;
        case "float":
          style.cssFloat = style.styleFloat = value || "";
          break;
        default:
          try {
            /** @type {string} */
            style[define(name)] = value;
          } catch (y) {
            throw new Error(setValue('Style.set: "%s" argument is invalid: %s', name, value));
          }
        ;
      }
    },
    /**
     * @param {Element} container
     * @param {Object} config
     * @return {undefined}
     */
    apply : function(container, config) {
      var name;
      for (name in config) {
        draw("Style.apply", name, config[name]);
      }
      if ("opacity" in config && f() === "filter") {
        config.filter = trim(config.opacity);
        delete config.opacity;
      }
      var hash = require(container.style.cssText);
      for (name in config) {
        var value = config[name];
        delete config[name];
        var item = func(name);
        var key;
        for (key in hash) {
          if (key === item || key.indexOf(item + "-") === 0) {
            delete hash[key];
          }
        }
        config[item] = value;
      }
      Object.assign(hash, config);
      container.style.cssText = object(hash);
    },
    get : accessor,
    /**
     * @param {Element} elem
     * @param {string} name
     * @return {?}
     */
    getFloat : function(elem, name) {
      return parseFloat(_self.get(elem, name), 10);
    },
    /**
     * @param {Element} el
     * @return {?}
     */
    getOpacity : function(el) {
      if (f() === "filter") {
        var filter = _self.get(el, "filter");
        if (filter) {
          /** @type {(Array.<string>|null)} */
          var parts = /(\d+(?:\.\d+)?)/.exec(filter);
          if (parts) {
            return parseFloat(parts.pop()) / 100;
          }
        }
      }
      return _self.getFloat(el, "opacity") || 1;
    },
    /**
     * @param {HTMLElement} elem
     * @return {?}
     */
    isFixed : function(elem) {
      for (;callback(document.body, elem);) {
        if (_self.get(elem, "position") === "fixed") {
          return true;
        }
        elem = elem.parentNode;
      }
      return false;
    },
    /**
     * @param {HTMLElement} element
     * @return {?}
     */
    getScrollParent : function(element) {
      if (!element) {
        return null;
      }
      for (;element && element !== document.body;) {
        if (find(element, "overflow") || (find(element, "overflowY") || find(element, "overflowX"))) {
          return element;
        }
        element = element.parentNode;
      }
      return window;
    }
  };
  module.exports = _self;
}, null);
__d("merge", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Function} data
   * @param {?} options
   * @return {?}
   */
  var trigger = function(data, options) {
    return Object.assign({}, data, options);
  };
  /** @type {function (Function, ?): ?} */
  module.exports = trigger;
}, null);
__d("Style", ["Style-upstream", "$", "merge"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $, get, callback) {
  var stub = callback($, {
    /**
     * @param {Element} src
     * @param {string} key
     * @return {?}
     */
    get : function(src, key) {
      typeof src === "string";
      return $.get(get(src), key);
    },
    /**
     * @param {Element} el
     * @param {string} name
     * @return {?}
     */
    getFloat : function(el, name) {
      typeof el === "string";
      return $.getFloat(get(el), name);
    }
  });
  module.exports = stub;
}, null);
__d("areJSONRepresentationsEqual", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, opts, keepData) {
  /**
   * @param {Function} k
   * @param {?} q
   * @return {?}
   */
  function has(k, q) {
    return JSON.stringify(k) == JSON.stringify(q);
  }
  /** @type {function (Function, ?): ?} */
  opts.exports = has;
}, null);
__d("arrayContains", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} obj
   * @param {?} target
   * @return {?}
   */
  function toArray(obj, target) {
    return obj.indexOf(target) != -1;
  }
  /** @type {function (string, ?): ?} */
  module.exports = toArray;
}, null);
__d("getElementRect", ["containsNode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, serialize) {
  /**
   * @param {Object} obj
   * @return {?}
   */
  function update(obj) {
    /** @type {Element} */
    var root = document.documentElement;
    if (!("getBoundingClientRect" in obj) || !serialize(root, obj)) {
      return{
        left : 0,
        right : 0,
        top : 0,
        bottom : 0
      };
    }
    var me = obj.getBoundingClientRect();
    return{
      left : Math.round(me.left) - root.clientLeft,
      right : Math.round(me.right) - root.clientLeft,
      top : Math.round(me.top) - root.clientTop,
      bottom : Math.round(me.bottom) - root.clientTop
    };
  }
  /** @type {function (Object): ?} */
  module.exports = update;
}, null);
__d("getElementPosition", ["getElementRect"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, func) {
  /**
   * @param {Function} data
   * @return {?}
   */
  function setup(data) {
    var r = func(data);
    return{
      x : r.left,
      y : r.top,
      width : r.right - r.left,
      height : r.bottom - r.top
    };
  }
  /** @type {function (Function): ?} */
  module.exports = setup;
}, null);
__d("getElementText", ["isElementNode", "isTextNode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, isDate, resolve) {
  /**
   * @param {Object} input
   * @return {?}
   */
  function render(input) {
    if (resolve(input)) {
      return input.data;
    } else {
      if (isDate(input)) {
        if (prop === null) {
          /** @type {Element} */
          var elem = document.createElement("div");
          /** @type {string} */
          prop = elem.textContent != null ? "textContent" : "innerText";
        }
        return input[prop];
      } else {
        return "";
      }
    }
  }
  /** @type {null} */
  var prop = null;
  /** @type {function (Object): ?} */
  module.exports = render;
}, null);
__d("getOffsetParent", ["Style"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, obj) {
  /**
   * @param {Object} data
   * @return {?}
   */
  function init(data) {
    var k = data.parentNode;
    if (!k || k === document.documentElement) {
      return document.documentElement;
    }
    if (obj.get(k, "position") !== "static") {
      return k;
    }
    return k === document.body ? document.documentElement : init(k);
  }
  /** @type {function (Object): ?} */
  module.exports = init;
}, null);
__d("getUnboundedScrollPosition", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Object} e
   * @return {?}
   */
  function listener(e) {
    if (e === window) {
      return{
        x : window.pageXOffset || document.documentElement.scrollLeft,
        y : window.pageYOffset || document.documentElement.scrollTop
      };
    }
    return{
      x : e.scrollLeft,
      y : e.scrollTop
    };
  }
  /** @type {function (Object): ?} */
  module.exports = listener;
}, null);
__d("getViewportDimensions", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function getViewportSize() {
    return document.documentElement && document.documentElement.clientWidth || (document.body && document.body.clientWidth || 0);
  }
  /**
   * @return {?}
   */
  function getViewportHeight() {
    return document.documentElement && document.documentElement.clientHeight || (document.body && document.body.clientHeight || 0);
  }
  /**
   * @return {?}
   */
  function Sprite() {
    return{
      width : window.innerWidth || getViewportSize(),
      height : window.innerHeight || getViewportHeight()
    };
  }
  /**
   * @return {?}
   */
  Sprite.withoutScrollbars = function() {
    return{
      width : getViewportSize(),
      height : getViewportHeight()
    };
  };
  /** @type {function (): ?} */
  module.exports = Sprite;
}, null);
__d("mixin", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Function} data
   * @param {?} step
   * @param {Object} endpoint
   * @param {?} var_args
   * @param {?} minutes
   * @param {?} moduleNames
   * @param {?} title
   * @param {?} now
   * @param {?} domain
   * @param {?} domNode
   * @param {?} con
   * @return {?}
   */
  function create(data, step, endpoint, var_args, minutes, moduleNames, title, now, domain, domNode, con) {
    /**
     * @return {undefined}
     */
    var temp = function() {
    };
    /** @type {Array} */
    var stack = [data, step, endpoint, var_args, minutes, moduleNames, title, now, domain, domNode];
    /** @type {number} */
    var _i = 0;
    var s;
    for (;stack[_i];) {
      s = stack[_i];
      var i;
      for (i in s) {
        if (s.hasOwnProperty(i)) {
          temp.prototype[i] = s[i];
        }
      }
      _i += 1;
    }
    return temp;
  }
  /** @type {function (Function, ?, Object, ?, ?, ?, ?, ?, ?, ?, ?): ?} */
  module.exports = create;
}, null);
__d("nativeRequestAnimationFrame", [], function(win, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  var JsDiff = win.requestAnimationFrame || (win.webkitRequestAnimationFrame || (win.mozRequestAnimationFrame || (win.oRequestAnimationFrame || win.msRequestAnimationFrame)));
  module.exports = JsDiff;
}, null);
__d("removeFromArray", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Array} e
   * @param {?} n
   * @return {undefined}
   */
  function unique(e, n) {
    var h = e.indexOf(n);
    if (h != -1) {
      e.splice(h, 1);
    }
  }
  /** @type {function (Array, ?): undefined} */
  module.exports = unique;
}, null);
__d("requestAnimationFramePolyfill", ["emptyFunction", "nativeRequestAnimationFrame"], function($window, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, k, dataAndEvents) {
  /** @type {number} */
  var offset = 0;
  var getObject = dataAndEvents || function(prop) {
    /** @type {number} */
    var start = Date.now();
    /** @type {number} */
    var timeout = Math.max(0, 16 - (start - offset));
    /** @type {number} */
    offset = start + timeout;
    return $window.setTimeout(function() {
      prop(Date.now());
    }, timeout);
  };
  getObject(k);
  module.exports = getObject;
}, null);
__d("DOMVector", ["BasicVector", "getDocumentScrollElement", "getElementPosition", "getUnboundedScrollPosition", "getViewportDimensions"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, s, trim, proceed, fn, topic) {
  /**
   * @param {Function} data
   * @param {?} f
   * @param {string} domain
   * @return {undefined}
   */
  function ret(data, f, domain) {
    s.call(this, data, f);
    this.domain = domain || "pure";
  }
  var n;
  for (n in s) {
    if (s.hasOwnProperty(n)) {
      ret[n] = s[n];
    }
  }
  var config = s === null ? null : s.prototype;
  /** @type {Object} */
  ret.prototype = Object.create(config);
  /** @type {function (Function, ?, string): undefined} */
  ret.prototype.constructor = ret;
  /** @type {Function} */
  ret.__superConstructor__ = s;
  /**
   * @param {number} recurring
   * @param {number} v1
   * @param {string} to
   * @return {?}
   */
  ret.prototype.derive = function(recurring, v1, to) {
    return new ret(recurring, v1, to || this.domain);
  };
  /**
   * @param {string} other
   * @param {number} models
   * @return {?}
   */
  ret.prototype.add = function(other, models) {
    if (other instanceof ret && other.getDomain() !== "pure") {
      other = other.convertTo(this.domain);
    }
    return config.add.call(this, other, models);
  };
  /**
   * @param {string} elem
   * @return {?}
   */
  ret.prototype.convertTo = function(elem) {
    if (elem != "pure" && (elem != "viewport" && elem != "document")) {
      return this.derive(0, 0);
    }
    if (elem == this.domain) {
      return this.derive(this.x, this.y, this.domain);
    }
    if (elem == "pure") {
      return this.derive(this.x, this.y);
    }
    if (this.domain == "pure") {
      return this.derive(0, 0);
    }
    var offset = ret.getScrollPosition("document");
    var recurring = this.x;
    var y = this.y;
    if (this.domain == "document") {
      recurring -= offset.x;
      y -= offset.y;
    } else {
      recurring += offset.x;
      y += offset.y;
    }
    return this.derive(recurring, y, elem);
  };
  /**
   * @return {?}
   */
  ret.prototype.getDomain = function() {
    return this.domain;
  };
  /**
   * @param {?} defaultValue
   * @param {?} withoutSuffix
   * @param {string} target
   * @return {?}
   */
  ret.from = function(defaultValue, withoutSuffix, target) {
    return new ret(defaultValue, withoutSuffix, target);
  };
  /**
   * @param {string} doc
   * @return {?}
   */
  ret.getScrollPosition = function(doc) {
    doc = doc || "document";
    var ret = fn(window);
    return this.from(ret.x, ret.y, "document").convertTo(doc);
  };
  /**
   * @param {?} element
   * @param {string} elem
   * @return {?}
   */
  ret.getElementPosition = function(element, elem) {
    elem = elem || "document";
    var value = proceed(element);
    return this.from(value.x, value.y, "viewport").convertTo(elem);
  };
  /**
   * @param {HTMLElement} elem
   * @return {?}
   */
  ret.getElementDimensions = function(elem) {
    return this.from(elem.offsetWidth || 0, elem.offsetHeight || 0);
  };
  /**
   * @return {?}
   */
  ret.getViewportDimensions = function() {
    var out = topic();
    return this.from(out.width, out.height, "viewport");
  };
  /**
   * @return {?}
   */
  ret.getViewportWithoutScrollbarDimensions = function() {
    var $cont = topic.withoutScrollbars();
    return this.from($cont.width, $cont.height, "viewport");
  };
  /**
   * @param {?} source
   * @return {?}
   */
  ret.getDocumentDimensions = function(source) {
    var doc = trim(source);
    return this.from(doc.scrollWidth, doc.scrollHeight, "document");
  };
  /** @type {function (Function, ?, string): undefined} */
  module.exports = ret;
}, null);
__d("EventEmitterWithValidation", ["EventEmitter"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, prototype) {
  /**
   * @param {Function} prop
   * @return {undefined}
   */
  function object(prop) {
    prototype.call(this);
    /** @type {Array.<string>} */
    this.$EventEmitterWithValidation0 = Object.keys(prop);
  }
  /**
   * @param {?} value
   * @param {string} field
   * @return {undefined}
   */
  function fn(value, field) {
    if (field.indexOf(value) === -1) {
      throw new TypeError(flatten(value, field));
    }
  }
  /**
   * @param {?} target
   * @param {(Array|RegExp|string)} arr
   * @return {?}
   */
  function flatten(target, arr) {
    /** @type {string} */
    var result = 'Unknown event type "' + target + '". ';
    result += "Known event types: " + arr.join(", ") + ".";
    return result;
  }
  var k;
  for (k in prototype) {
    if (prototype.hasOwnProperty(k)) {
      object[k] = prototype[k];
    }
  }
  var proto = prototype === null ? null : prototype.prototype;
  /** @type {Object} */
  object.prototype = Object.create(proto);
  /** @type {function (Function): undefined} */
  object.prototype.constructor = object;
  /** @type {Function} */
  object.__superConstructor__ = prototype;
  /**
   * @param {?} evt
   * @return {?}
   */
  object.prototype.emit = function(evt) {
    fn(evt, this.$EventEmitterWithValidation0);
    return proto.emit.apply(this, arguments);
  };
  /** @type {function (Function): undefined} */
  module.exports = object;
}, null);
__d("mixInEventEmitter", ["EventEmitterWithHolding", "EventEmitterWithValidation", "EventHolder", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Stack, Element, subject, isArray) {
  /**
   * @param {Object} object
   * @param {?} options
   * @return {undefined}
   */
  function keys(object, options) {
    isArray(options);
    isArray(!this.__eventEmitter);
    var self = object.prototype || object;
    var constructor = object.constructor;
    if (constructor) {
      isArray(constructor === Object || constructor === Function);
    }
    self.__types = Object.assign({}, self.__types, options);
    Object.assign(self, EventEmitter);
  }
  var EventEmitter = {
    /**
     * @param {?} event
     * @param {?} data
     * @param {?} signal
     * @param {?} a3
     * @param {?} filterDb
     * @param {?} rethrow_if_no_listeners
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    emit : function(event, data, signal, a3, filterDb, rethrow_if_no_listeners, deepDataAndEvents) {
      return this.__getEventEmitter().emit(event, data, signal, a3, filterDb, rethrow_if_no_listeners, deepDataAndEvents);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {?} emptyGet
     * @param {?} specDefinitions
     * @param {?} dataAndEvents
     * @param {?} traditional
     * @param {?} shallow
     * @param {?} until
     * @return {?}
     */
    emitAndHold : function(deepDataAndEvents, emptyGet, specDefinitions, dataAndEvents, traditional, shallow, until) {
      return this.__getEventEmitter().emitAndHold(deepDataAndEvents, emptyGet, specDefinitions, dataAndEvents, traditional, shallow, until);
    },
    /**
     * @param {?} listener
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    addListener : function(listener, eventName, handler) {
      return this.__getEventEmitter().addListener(listener, eventName, handler);
    },
    /**
     * @param {?} type
     * @param {?} func
     * @param {?} scope
     * @return {?}
     */
    once : function(type, func, scope) {
      return this.__getEventEmitter().once(type, func, scope);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {?} shallow
     * @param {?} emptyGet
     * @return {?}
     */
    addRetroactiveListener : function(deepDataAndEvents, shallow, emptyGet) {
      return this.__getEventEmitter().addRetroactiveListener(deepDataAndEvents, shallow, emptyGet);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {?} shallow
     * @return {?}
     */
    addListenerMap : function(deepDataAndEvents, shallow) {
      return this.__getEventEmitter().addListenerMap(deepDataAndEvents, shallow);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {?} shallow
     * @return {?}
     */
    addRetroactiveListenerMap : function(deepDataAndEvents, shallow) {
      return this.__getEventEmitter().addListenerMap(deepDataAndEvents, shallow);
    },
    /**
     * @param {?} type
     * @return {?}
     */
    listeners : function(type) {
      return this.__getEventEmitter().listeners(type);
    },
    /**
     * @return {undefined}
     */
    removeAllListeners : function() {
      this.__getEventEmitter().removeAllListeners();
    },
    /**
     * @return {undefined}
     */
    removeCurrentListener : function() {
      this.__getEventEmitter().removeCurrentListener();
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    releaseHeldEventType : function(deepDataAndEvents) {
      this.__getEventEmitter().releaseHeldEventType(deepDataAndEvents);
    },
    /**
     * @return {?}
     */
    __getEventEmitter : function() {
      if (!this.__eventEmitter) {
        var head = new Element(this.__types);
        var result = new subject;
        this.__eventEmitter = new Stack(head, result);
      }
      return this.__eventEmitter;
    }
  };
  /** @type {function (Object, ?): undefined} */
  module.exports = keys;
}, null);
__d("Intl", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} item
   * @return {?}
   */
  function text(item) {
    if (typeof item != "string") {
      return false;
    }
    return item.match(new RegExp(text.punct_char_class + "[" + ')"' + "'" + "\u00bb" + "\u0f3b" + "\u0f3d" + "\u2019" + "\u201d" + "\u203a" + "\u3009" + "\u300b" + "\u300d" + "\u300f" + "\u3011" + "\u3015" + "\u3017" + "\u3019" + "\u301b" + "\u301e" + "\u301f" + "\ufd3f" + "\uff07" + "\uff09" + "\uff3d" + "\\s" + "]*$"));
  }
  /**
   * @param {string} text
   * @return {?}
   */
  function parse(text) {
    if (config) {
      /** @type {Array} */
      var codeSegments = [];
      /** @type {Array} */
      var pages = [];
      var pattern;
      for (pattern in config.patterns) {
        var url = config.patterns[pattern];
        var k;
        for (k in config.meta) {
          /** @type {RegExp} */
          var replaceRegex = new RegExp(k.slice(1, -1), "g");
          var value = config.meta[k];
          /** @type {string} */
          pattern = pattern.replace(replaceRegex, value);
          url = url.replace(replaceRegex, value);
        }
        codeSegments.push(pattern);
        pages.push(url);
      }
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        /** @type {RegExp} */
        var cx = new RegExp(codeSegments[i].slice(1, -1), "g");
        if (pages[i] == "javascript") {
          text.replace(cx, function(models) {
            return models.slice(1).toLowerCase();
          });
        } else {
          text = text.replace(cx, pages[i]);
        }
      }
    }
    return text.replace(/\x01/g, "");
  }
  var config;
  /** @type {string} */
  text.punct_char_class = "[" + ".!?" + "\u3002" + "\uff01" + "\uff1f" + "\u0964" + "\u2026" + "\u0eaf" + "\u1801" + "\u0e2f" + "\uff0e" + "]";
  module.exports = {
    /** @type {function (string): ?} */
    endsInPunct : text,
    /** @type {function (string): ?} */
    applyPhonologicalRules : parse,
    /**
     * @param {?} deps
     * @return {undefined}
     */
    setPhonologicalRules : function(deps) {
      config = deps;
    }
  };
}, null);
__d("UnicodeBidiDirection", ["keyMirror"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, topic) {
  var out = topic({
    NEUTRAL : true,
    LTR : true,
    RTL : true
  });
  /**
   * @param {?} value3
   * @return {?}
   */
  out.isStrong = function(value3) {
    return value3 === out.LTR || value3 === out.RTL;
  };
  module.exports = out;
}, null);
__d("Locale", ["Style", "ExecutionEnvironment", "UnicodeBidiDirection"], function(dataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, game, deepDataAndEvents, matcherFunction) {
  /**
   * @return {?}
   */
  function nth() {
    if (!deepDataAndEvents.canUseDOM) {
      /** @type {boolean} */
      cur = false;
    } else {
      if (cur === void 0) {
        /** @type {boolean} */
        cur = "rtl" === game.get(document.body, "direction");
      }
    }
    return cur;
  }
  /**
   * @return {?}
   */
  function getDirection() {
    return nth() ? matcherFunction.RTL : matcherFunction.LTR;
  }
  var cur;
  var JsDiff = {
    /** @type {function (): ?} */
    isRTL : nth,
    /** @type {function (): ?} */
    getDirection : getDirection
  };
  module.exports = JsDiff;
}, null);
__d("substituteTokens", ["invariant", "Intl"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $compile, model) {
  /**
   * @param {?} foo
   * @return {?}
   */
  function fn(foo) {
    return foo;
  }
  /**
   * @param {string} data
   * @param {Object} o
   * @return {?}
   */
  function compile(data, o) {
    if (!o) {
      return data;
    }
    $compile(typeof o === "object");
    /** @type {string} */
    var regexS = "\\{([^}]+)\\}(" + model.endsInPunct.punct_char_class + "*)";
    /** @type {RegExp} */
    var regex = new RegExp(regexS, "g");
    /** @type {Array} */
    var bucket = [];
    /** @type {Array} */
    var row = [];
    var texcoords = data.replace(regex, function(dataAndEvents, label, formatedMsg) {
      var value = o[label];
      if (value && typeof value === "object") {
        bucket.push(value);
        row.push(label);
        return "\u0017" + formatedMsg;
      } else {
        if (value === null) {
          return "";
        }
      }
      return value + (model.endsInPunct(value) ? "" : formatedMsg);
    }).split("\u0017").map(model.applyPhonologicalRules);
    if (texcoords.length === 1) {
      return texcoords[0];
    }
    /** @type {Array} */
    var out = [texcoords[0]];
    /** @type {number} */
    var i = 0;
    for (;i < bucket.length;i++) {
      out.push(fn(bucket[i]), texcoords[i + 1]);
    }
    return out;
  }
  /** @type {function (string, Object): ?} */
  module.exports = compile;
}, null);
__d("fbt", ["copyProperties", "substituteTokens", "invariant", "FbtLogger", "FbtQTOverrides"], function(dataAndEvents, $sanitize, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, indexOf, print, a) {
  var logger = $sanitize("FbtLogger").logger;
  var map = $sanitize("FbtQTOverrides").overrides;
  var _this = {
    INDEX : 0,
    SUBSTITUTION : 1
  };
  /**
   * @return {undefined}
   */
  var obj = function() {
  };
  /**
   * @param {(Array|number)} list
   * @param {?} codeSegments
   * @return {?}
   */
  obj._ = function(list, codeSegments) {
    var dontCloseTags = {};
    /** @type {(Array|number)} */
    var part = list;
    if (codeSegments !== void 0) {
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var j = codeSegments[i][_this.INDEX];
        if (j !== null) {
          a(j in part);
          part = part[j];
        }
        indexOf(dontCloseTags, codeSegments[i][_this.SUBSTITUTION]);
      }
    }
    if (typeof part === "string") {
      return print(part, dontCloseTags);
    } else {
      if (Array.isArray(part)) {
        var value = part[0];
        var key = part[1];
        value = map[key] || value;
        obj.logImpression(key);
        return print(value, dontCloseTags);
      } else {
        a(false);
      }
    }
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  obj["enum"] = function(dataAndEvents, deepDataAndEvents) {
    return[dataAndEvents, null];
  };
  /**
   * @param {?} name
   * @param {?} fn
   * @return {?}
   */
  obj.param = function(name, fn) {
    var normalized = {};
    normalized[name] = fn;
    return[null, normalized];
  };
  /**
   * @param {?} serviceName
   * @return {?}
   */
  obj.logImpression = function(serviceName) {
    if (logger) {
      logger.logImpression(serviceName);
    }
    return serviceName;
  };
  /** @type {function (): undefined} */
  module.exports = obj;
}, null);
__d("Log", ["sprintf"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, wrapper) {
  /**
   * @param {string} method
   * @param {number} state
   * @return {undefined}
   */
  function $(method, state) {
    /** @type {Array.<?>} */
    var args = Array.prototype.slice.call(arguments, 2);
    var dir = wrapper.apply(null, args);
    /** @type {(Console|null)} */
    var c = window.console;
    if (c && config.level >= state) {
      c[method in c ? method : "log"](dir);
    }
  }
  var logger = {
    DEBUG : 3,
    INFO : 2,
    WARNING : 1,
    ERROR : 0
  };
  var config = {
    level : -1,
    Level : logger,
    debug : $.bind(null, "debug", logger.DEBUG),
    info : $.bind(null, "info", logger.INFO),
    warn : $.bind(null, "warn", logger.WARNING),
    error : $.bind(null, "error", logger.ERROR)
  };
  module.exports = config;
}, null);
__d("requestAnimationFrameAcrossTransitions", ["TimeSlice", "requestAnimationFramePolyfill"], function(that, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, source, alertCallback) {
  /**
   * @return {?}
   */
  module.exports = function() {
    /** @type {Array} */
    var args = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var argLength = arguments.length;
    for (;i < argLength;i++) {
      args.push(arguments[i]);
    }
    args[0] = source.guard(args[0], "requestAnimationFrame");
    return alertCallback.apply(that, args);
  };
}, null);
__d("requestAnimationFrame", ["TimerStorage", "requestAnimationFrameAcrossTransitions"], function(el, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, col, wrapper) {
  /**
   * @return {?}
   */
  module.exports = function() {
    /** @type {Array} */
    var args = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var argLength = arguments.length;
    for (;i < argLength;i++) {
      args.push(arguments[i]);
    }
    var options = wrapper.apply(el, args);
    col.push(col.ANIMATION_FRAME, options);
    return options;
  };
}, null);
__d("SyntheticTouchEvent", ["SyntheticUIEvent", "getEventModifierState"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, jQuery, dataAndEvents) {
  /**
   * @param {Function} data
   * @param {?} i
   * @param {Object} value
   * @return {undefined}
   */
  function data(data, i, value) {
    jQuery.call(this, data, i, value);
  }
  var restoreScript = {
    touches : null,
    targetTouches : null,
    changedTouches : null,
    altKey : null,
    metaKey : null,
    ctrlKey : null,
    shiftKey : null,
    getModifierState : dataAndEvents
  };
  jQuery.augmentClass(data, restoreScript);
  /** @type {function (Function, ?, Object): undefined} */
  module.exports = data;
}, null);
__d("CallbackQueue", ["PooledClass", "Object.assign", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $injector, extend, cb) {
  /**
   * @return {undefined}
   */
  function Class() {
    /** @type {null} */
    this._callbacks = null;
    /** @type {null} */
    this._contexts = null;
  }
  extend(Class.prototype, {
    /**
     * @param {?} callback
     * @param {Object} value
     * @return {undefined}
     */
    enqueue : function(callback, value) {
      this._callbacks = this._callbacks || [];
      this._contexts = this._contexts || [];
      this._callbacks.push(callback);
      this._contexts.push(value);
    },
    /**
     * @return {undefined}
     */
    notifyAll : function() {
      var values = this._callbacks;
      var group = this._contexts;
      if (values) {
        cb(values.length === group.length);
        /** @type {null} */
        this._callbacks = null;
        /** @type {null} */
        this._contexts = null;
        /** @type {number} */
        var i = 0;
        var valuesLen = values.length;
        for (;i < valuesLen;i++) {
          values[i].call(group[i]);
        }
        /** @type {number} */
        values.length = 0;
        /** @type {number} */
        group.length = 0;
      }
    },
    /**
     * @return {undefined}
     */
    reset : function() {
      /** @type {null} */
      this._callbacks = null;
      /** @type {null} */
      this._contexts = null;
    },
    /**
     * @return {undefined}
     */
    destructor : function() {
      this.reset();
    }
  });
  $injector.addPoolingTo(Class);
  /** @type {function (): undefined} */
  module.exports = Class;
}, null);
__d("getContextualParent", ["ge"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, fire) {
  /**
   * @param {Object} t
   * @param {HTMLElement} method
   * @return {?}
   */
  function init(t, method) {
    var memory;
    /** @type {boolean} */
    var foundToken = false;
    do {
      if (t.getAttribute && (memory = t.getAttribute("data-ownerid"))) {
        t = fire(memory);
        /** @type {boolean} */
        foundToken = true;
      } else {
        t = t.parentNode;
      }
    } while (method && (t && !foundToken));
    return t;
  }
  /** @type {function (Object, HTMLElement): ?} */
  module.exports = init;
}, null);
__d("collectDataAttributes", ["getContextualParent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, toString) {
  /**
   * @param {Object} str
   * @param {Array} q
   * @return {?}
   */
  function bind(str, q) {
    var map = {};
    var search = {};
    var l = q.length;
    var i;
    /** @type {number} */
    i = 0;
    for (;i < l;++i) {
      map[q[i]] = {};
      search[q[i]] = "data-" + q[i];
    }
    var iterable = {
      tn : "",
      "tn-debug" : ","
    };
    for (;str;) {
      if (str.getAttribute) {
        /** @type {number} */
        i = 0;
        for (;i < l;++i) {
          var jsonString = str.getAttribute(search[q[i]]);
          if (jsonString) {
            /** @type {*} */
            var old = JSON.parse(jsonString);
            var name;
            for (name in old) {
              if (iterable[name] !== void 0) {
                if (map[q[i]][name] === void 0) {
                  /** @type {Array} */
                  map[q[i]][name] = [];
                }
                map[q[i]][name].push(old[name]);
              } else {
                if (map[q[i]][name] === void 0) {
                  map[q[i]][name] = old[name];
                }
              }
            }
          }
        }
      }
      str = toString(str);
    }
    var letter;
    for (letter in map) {
      var key;
      for (key in iterable) {
        if (map[letter][key] !== void 0) {
          map[letter][key] = map[letter][key].join(iterable[key]);
        }
      }
    }
    return map;
  }
  /** @type {function (Object, Array): ?} */
  module.exports = bind;
}, null);
__d("throttle", ["copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, print) {
  /**
   * @param {Function} data
   * @param {number} item
   * @param {string} elem
   * @return {?}
   */
  function text(data, item, elem) {
    return process(data, item, elem, false, false);
  }
  /**
   * @param {Function} callback
   * @param {number} msec
   * @param {string} instance
   * @param {boolean} recurring
   * @param {boolean} v33
   * @return {?}
   */
  function process(callback, msec, instance, recurring, v33) {
    if (msec == null) {
      /** @type {number} */
      msec = 100;
    }
    var args;
    var p;
    /** @type {null} */
    var timeout = null;
    /**
     * @return {undefined}
     */
    var done = function() {
      /** @type {number} */
      p = Date.now();
      if (args) {
        callback.apply(instance, args);
        /** @type {null} */
        args = null;
        /** @type {number} */
        timeout = setTimeout(done, msec, !recurring);
      } else {
        /** @type {null} */
        timeout = null;
      }
    };
    return function finish() {
      /** @type {Arguments} */
      args = arguments;
      if (timeout === null || Date.now() - p > msec) {
        if (v33) {
          done();
        } else {
          /** @type {number} */
          timeout = setTimeout(done, 0, !recurring);
        }
      }
    };
  }
  print(text, {
    /**
     * @param {Function} factory
     * @param {number} msec
     * @param {string} config
     * @return {?}
     */
    acrossTransitions : function(factory, msec, config) {
      return process(factory, msec, config, true, false);
    },
    /**
     * @param {Function} factory
     * @param {number} msec
     * @param {string} config
     * @return {?}
     */
    withBlocking : function(factory, msec, config) {
      return process(factory, msec, config, false, true);
    },
    /**
     * @param {Function} factory
     * @param {number} msec
     * @param {string} config
     * @return {?}
     */
    acrossTransitionsWithBlocking : function(factory, msec, config) {
      return process(factory, msec, config, true, true);
    }
  });
  /** @type {function (Function, number, string): ?} */
  module.exports = text;
}, null);
__d("LitestandStoryInsertionStatus", ["ArbiterMixin", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, thisObj, makeIterator) {
  /** @type {string} */
  var msg = "check";
  var utils = {
    /**
     * @param {?} $sanitize
     * @return {?}
     */
    registerBlocker : function($sanitize) {
      return utils.subscribe(msg, function(deepDataAndEvents, dataAndEvents) {
        if (dataAndEvents.can_insert && $sanitize()) {
          /** @type {boolean} */
          dataAndEvents.can_insert = false;
        }
      });
    },
    /**
     * @return {?}
     */
    canInsert : function() {
      var reversed = {
        can_insert : true
      };
      utils.inform(msg, reversed);
      return reversed.can_insert;
    }
  };
  makeIterator(utils, thisObj);
  module.exports = utils;
}, null);
__d("EagleEye", ["Arbiter", "CurrentUser", "EagleEyeConfig", "Env", "ISB", "OnloadEvent", "TrackingConfig", "WebStorage", "isInIframe"], function(res, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, url, a, view, dataAndEvents, e, req, email, deepDataAndEvents, $sanitize) {
  /**
   * @param {?} c
   * @return {?}
   */
  function clear(c) {
    return str + variableId++ + "=" + encodeURIComponent(c) + tval;
  }
  /**
   * @return {undefined}
   */
  function Hashtable() {
    /** @type {Array} */
    var queue = [];
    /** @type {boolean} */
    var ha = false;
    /** @type {number} */
    var ia = 0;
    /** @type {number} */
    var log2 = 0;
    /**
     * @return {?}
     */
    this.isEmpty = function() {
      return!queue.length;
    };
    /**
     * @param {?} fn
     * @param {boolean} event
     * @return {undefined}
     */
    this.enqueue = function(fn, event) {
      if (event) {
        queue.unshift(fn);
      } else {
        queue.push(fn);
      }
    };
    /**
     * @return {undefined}
     */
    this.dequeue = function() {
      queue.shift();
    };
    /**
     * @return {?}
     */
    this.peek = function() {
      return queue[0];
    };
    /**
     * @param {boolean} c
     * @return {undefined}
     */
    this.clear = function(c) {
      /** @type {number} */
      fromIndex = Math.min(fromIndex, document.cookie.length);
      if (!fourDigitImageWidth && new Date - tick > 6E4) {
        /** @type {boolean} */
        fourDigitImageWidth = true;
      }
      /** @type {boolean} */
      var program = !c && document.cookie.search(prefix) >= 0;
      /** @type {boolean} */
      var inverse = !!view.cookieHeaderLimit;
      var max = view.cookieCountLimit || 19;
      var pos = view.cookieHeaderLimit || 3950;
      /** @type {number} */
      var width = max - 5;
      /** @type {number} */
      var idx = pos - 1E3;
      for (;!this.isEmpty();) {
        var arr = clear(this.peek());
        if (inverse && (arr.length > pos || fourDigitImageWidth && arr.length + fromIndex > pos)) {
          this.dequeue();
          continue;
        }
        if ((program || inverse) && (document.cookie.length + arr.length > pos || document.cookie.split(";").length > max)) {
          break;
        }
        document.cookie = arr;
        /** @type {boolean} */
        program = true;
        this.dequeue();
      }
      /** @type {number} */
      var imageData = Date.now();
      if (c || !ha && (program && (log2 > 0 && Math.min(10 * Math.pow(2, log2 - 1), 6E4) + ia < imageData && (url.query(req.ONLOAD) && (!this.isEmpty() || (document.cookie.length > idx || document.cookie.split(";").length > width)))))) {
        /** @type {Image} */
        var image = new Image;
        var two = this;
        var endpoint = email.domain || "";
        /** @type {boolean} */
        ha = true;
        /**
         * @return {undefined}
         */
        image.onload = function complete() {
          /** @type {boolean} */
          ha = false;
          /** @type {number} */
          log2 = 0;
          two.clear();
        };
        /** @type {function (): undefined} */
        image.onerror = image.onabort = function complete() {
          /** @type {boolean} */
          ha = false;
          /** @type {number} */
          ia = Date.now();
          log2++;
        };
        /** @type {string} */
        var g = e.token ? "&fb_isb=" + e.token : "";
        var b = "&__user=" + a.getID();
        /** @type {string} */
        image.src = endpoint + "/ajax/nectar.php?asyncSignal=" + (Math.floor(Math.random() * 1E4) + 1) + g + b + "&" + (!c ? "" : "s=") + imageData;
      }
    };
  }
  /** @type {string} */
  var prefix = "_e_";
  /** @type {string} */
  var name = (window.name || "").toString();
  if (name.length == 7 && name.substr(0, 3) == prefix) {
    /** @type {string} */
    name = name.substr(3);
  } else {
    name = view.seed;
    if (!$sanitize()) {
      /** @type {string} */
      window.name = prefix + name;
    }
  }
  /** @type {string} */
  var value = window.location.protocol == "https:" && document.cookie.match(/\bcsm=1/) ? "; secure" : "";
  /** @type {string} */
  var str = prefix + name + "_";
  /** @type {string} */
  var t = (new Date(Date.now() + 6048E5)).toGMTString();
  /** @type {string} */
  var type = window.location.hostname.replace(/^.*(facebook\..*)$/i, "$1");
  /** @type {string} */
  var tval = "; expires=" + t + ";path=/; domain=" + type + value;
  /** @type {number} */
  var variableId = 0;
  var options;
  var y = view.sessionStorage && deepDataAndEvents.getSessionStorage();
  /** @type {number} */
  var fromIndex = document.cookie.length;
  /** @type {boolean} */
  var fourDigitImageWidth = false;
  /** @type {number} */
  var tick = Date.now();
  options = new Hashtable;
  if (y) {
    /**
     * @return {undefined}
     */
    var parse = function() {
      /**
       * @return {undefined}
       */
      function parser() {
        var num = sessionStorage.getItem("_e_ids");
        if (num) {
          /** @type {Array.<string>} */
          var reqVerArray = (num + "").split(";");
          if (reqVerArray.length == 2) {
            /** @type {number} */
            len = parseInt(reqVerArray[0], 10);
            /** @type {number} */
            i = parseInt(reqVerArray[1], 10);
          }
        }
      }
      /**
       * @return {undefined}
       */
      function callback() {
        var resumePath = len + ";" + i;
        sessionStorage.setItem("_e_ids", resumePath);
      }
      /**
       * @param {number} value
       * @return {?}
       */
      function $(value) {
        return "_e_" + (value !== void 0 ? value : len++);
      }
      /** @type {number} */
      var len = 0;
      var i = len;
      /**
       * @return {?}
       */
      this.isEmpty = function() {
        return i === len;
      };
      /**
       * @param {string} value
       * @param {boolean} id
       * @return {undefined}
       */
      this.enqueue = function(value, id) {
        var sessionStorageKey = id ? $(--i) : $();
        sessionStorage.setItem(sessionStorageKey, value);
        callback();
      };
      /**
       * @return {undefined}
       */
      this.dequeue = function() {
        this.isEmpty();
        sessionStorage.removeItem($(i));
        i++;
        callback();
      };
      /**
       * @return {?}
       */
      this.peek = function() {
        var path = sessionStorage.getItem($(i));
        return path ? path + "" : path;
      };
      this.clear = options.clear;
      parser();
    };
    options = new parse;
  }
  var request = {
    /**
     * @param {?} win
     * @param {?} str
     * @param {?} msgString
     * @return {undefined}
     */
    log : function(win, str, msgString) {
      /**
       * @return {undefined}
       */
      function onError() {
        /** @type {string} */
        var key = JSON.stringify(tree);
        try {
          options.enqueue(key, !!msgString);
          options.clear(!!msgString);
        } catch (ex) {
          if (y && ex.code === 1E3) {
            options = new Hashtable;
            /** @type {boolean} */
            y = false;
            onError();
          }
        }
      }
      if (dataAndEvents.no_cookies) {
        return;
      }
      /** @type {Array} */
      var tree = [name, Date.now(), win].concat(str);
      tree.push(tree.length);
      onError();
    },
    /**
     * @return {?}
     */
    getSessionID : function() {
      return name;
    }
  };
  module.exports = request;
  res.EagleEye = request;
}, 3);
__d("JSLogger", [], function(val, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt) {
  /**
   * @param {string} url
   * @return {?}
   */
  function match(url) {
    if (url == "/" || url.indexOf("/", 1) < 0) {
      return false;
    }
    /** @type {boolean} */
    var file = /^\/(v\d+\.\d\d?|head)\//.test(url);
    if (file) {
      return/^\/(dialog|plugins)\//.test(url.substring(url.indexOf("/", 1)));
    }
    return/^\/(dialog|plugins)\//.test(url);
  }
  /**
   * @param {?} obj
   * @return {?}
   */
  function isArraylike(obj) {
    if (obj instanceof Error && val.ErrorUtils) {
      obj = val.ErrorUtils.normalizeError(obj);
    }
    try {
      return JSON.stringify(obj);
    } catch (n) {
      return "{}";
    }
  }
  /**
   * @param {?} i
   * @param {string} style
   * @param {number} result
   * @return {undefined}
   */
  function callback(i, style, result) {
    if (!data.counts[i]) {
      data.counts[i] = {};
    }
    if (!data.counts[i][style]) {
      /** @type {number} */
      data.counts[i][style] = 0;
    }
    /** @type {number} */
    result = result == null ? 1 : Number(result);
    data.counts[i][style] += isFinite(result) ? result : 0;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function Logger(name) {
    if (!data.categories[name]) {
      data.categories[name] = {};
      /**
       * @param {string} type
       * @return {undefined}
       */
      var log = function(type) {
        var root = {
          cat : name,
          type : type
        };
        /**
         * @return {undefined}
         */
        data.categories[name][type] = function() {
          /** @type {boolean} */
          data.forwarding = false;
          /** @type {null} */
          var n = null;
          if (document.domain != "facebook.com") {
            return;
          }
          /** @type {function (string, number, number): ?} */
          n = data.logAction;
          if (match(location.pathname)) {
            /** @type {boolean} */
            data.forwarding = false;
          } else {
            try {
              n = val.top.require("JSLogger")._.logAction;
              /** @type {boolean} */
              data.forwarding = n !== data.logAction;
            } catch (r) {
            }
          }
          if (n) {
            n.apply(root, arguments);
          }
        };
      };
      log("debug");
      log("log");
      log("warn");
      log("error");
      log("bump");
      log("rate");
    }
    return data.categories[name];
  }
  /**
   * @param {?} fn
   * @param {Object} value
   * @return {?}
   */
  function add(fn, value) {
    /** @type {Array} */
    var results = [];
    var e = value || data.tail;
    for (;e;e = e.next) {
      if (!fn || fn(e)) {
        var result = {
          type : e.type,
          cat : e.cat,
          date : e.date,
          event : e.event,
          seq : e.seq
        };
        if (e.data) {
          /** @type {*} */
          result.data = JSON.parse(e.data);
        }
        results.push(result);
      }
    }
    return results;
  }
  var data = {
    MAX_HISTORY : 500,
    counts : {},
    categories : {},
    seq : 0,
    pageId : (Math.random() * 2147483648 | 0).toString(36),
    forwarding : false
  };
  /**
   * @param {string} key
   * @param {number} obj
   * @param {number} arg
   * @return {?}
   */
  data.logAction = function(key, obj, arg) {
    if (this.type == "bump") {
      callback(this.cat, key, obj);
    } else {
      if (this.type == "rate") {
        if (obj) {
          callback(this.cat, key + "_n", arg);
        }
        callback(this.cat, key + "_d", arg);
      } else {
        var settings = {
          cat : this.cat,
          type : this.type,
          event : key,
          data : obj != null ? isArraylike(obj) : null,
          date : Date.now(),
          seq : data.seq++
        };
        data.head = data.head ? data.head.next = settings : data.tail = settings;
        for (;data.head.seq - data.tail.seq > data.MAX_HISTORY;) {
          data.tail = data.tail.next;
        }
        return settings;
      }
    }
  };
  module.exports = {
    _ : data,
    DUMP_EVENT : "jslogger/dump",
    /** @type {function (string): ?} */
    create : Logger,
    /** @type {function (?, Object): ?} */
    getEntries : add
  };
}, null);
__d("Nectar", ["Env", "getContextualParent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, ng, $) {
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  function clone(deepDataAndEvents) {
    if (!deepDataAndEvents.nctr) {
      deepDataAndEvents.nctr = {};
    }
  }
  /**
   * @param {Object} element
   * @return {?}
   */
  function click(element) {
    if (ng.module || !element) {
      return ng.module;
    }
    var windowEventHandlers = {
      fbpage_fan_confirm : true,
      photos_snowlift : true
    };
    var declarationError;
    for (;element && element.getAttribute;) {
      var e = element.getAttribute("id");
      if (e != null && e.startsWith("pagelet_")) {
        return e;
      }
      if (!declarationError && windowEventHandlers[e]) {
        declarationError = e;
      }
      element = $(element);
    }
    return declarationError;
  }
  var JsDiff = {
    /**
     * @param {?} deepDataAndEvents
     * @param {Object} element
     * @return {undefined}
     */
    addModuleData : function(deepDataAndEvents, element) {
      var elementRect = click(element);
      if (elementRect) {
        clone(deepDataAndEvents);
        deepDataAndEvents.nctr._mod = elementRect;
      }
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    addImpressionID : function(deepDataAndEvents) {
      if (ng.impid) {
        clone(deepDataAndEvents);
        deepDataAndEvents.nctr._impid = ng.impid;
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("AsyncResponse", ["Bootloader", "DTSG", "SiteData", "copyProperties"], function(e, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, exports, me, _, error) {
  /**
   * @param {Object} data
   * @param {Node} body
   * @return {?}
   */
  function constructor(data, body) {
    error(this, {
      error : 0,
      errorSummary : null,
      errorDescription : null,
      onload : null,
      replay : false,
      payload : body || null,
      request : data || null,
      silentError : false,
      transientError : false,
      blockedAction : false,
      is_last : true
    });
    return this;
  }
  /**
   * @return {?}
   */
  constructor.prototype.getRequest = function() {
    return this.request;
  };
  /**
   * @return {?}
   */
  constructor.prototype.getPayload = function() {
    return this.payload;
  };
  /**
   * @return {?}
   */
  constructor.prototype.getError = function() {
    return this.error;
  };
  /**
   * @return {?}
   */
  constructor.prototype.getErrorSummary = function() {
    return this.errorSummary;
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  constructor.prototype.setErrorSummary = function(deepDataAndEvents) {
    deepDataAndEvents = deepDataAndEvents === void 0 ? null : deepDataAndEvents;
    /** @type {string} */
    this.errorSummary = deepDataAndEvents;
    return this;
  };
  /**
   * @return {?}
   */
  constructor.prototype.getErrorDescription = function() {
    return this.errorDescription;
  };
  /**
   * @return {?}
   */
  constructor.prototype.getErrorIsWarning = function() {
    return!!this.errorIsWarning;
  };
  /**
   * @return {?}
   */
  constructor.prototype.isTransient = function() {
    return!!this.transientError;
  };
  /**
   * @return {?}
   */
  constructor.prototype.isBlockedAction = function() {
    return!!this.blockedAction;
  };
  /**
   * @param {string} error
   * @param {Object} event
   * @return {undefined}
   */
  constructor.prototype.logError = function(error, event) {
    var ee = e.ErrorSignal;
    if (ee) {
      var options = {
        err_code : this.error,
        vip : _.vip || "-"
      };
      if (event) {
        options.duration = event.duration;
        options.xfb_ip = event.xfb_ip;
      }
      var path = this.request.getURI();
      options.path = path || "-";
      options.aid = this.request.userActionID;
      if (path && path.indexOf("scribe_endpoint.php") != -1) {
        /** @type {string} */
        error = "async_error_double";
      }
      ee.sendErrorSignal(error, JSON.stringify(options));
    }
  };
  /**
   * @param {string} silent
   * @param {number} percentage
   * @return {undefined}
   */
  constructor.prototype.logErrorByGroup = function(silent, percentage) {
    if (Math.floor(Math.random() * percentage) === 0) {
      if (this.error == 1357010 || this.error < 15E3) {
        this.logError("async_error_oops_" + silent);
      } else {
        this.logError("async_error_logic_" + silent);
      }
    }
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  constructor.defaultErrorHandler = function(e) {
    try {
      if (!e.silentError) {
        constructor.verboseErrorHandler(e);
      } else {
        e.logErrorByGroup("silent", 10);
      }
    } catch (m) {
      alert(e);
    }
  };
  /**
   * @param {Object} v
   * @return {undefined}
   */
  constructor.verboseErrorHandler = function(v) {
    exports.loadModules(["ExceptionDialog"], function(nv) {
      return nv.showAsyncError(v);
    });
  };
  /**
   * @param {string} token
   * @return {undefined}
   */
  constructor.renewDTSG = function(token) {
    me.setToken(token);
  };
  /** @type {function (Object, Node): ?} */
  module.exports = constructor;
}, null);
__d("HTTPErrors", ["emptyFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, accessor) {
  var prop = {
    get : accessor,
    getAll : accessor
  };
  module.exports = prop;
}, null);
__d("bind", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Object} data
   * @param {string} method
   * @return {?}
   */
  function bind(data, method) {
    /**
     * @return {?}
     */
    function bound() {
      /** @type {Array} */
      var applyArgs = args.concat(Array.prototype.slice.call(arguments));
      if (data[method]) {
        return data[method].apply(data, applyArgs);
      }
    }
    /** @type {Array.<?>} */
    var args = Array.prototype.slice.call(arguments, 2);
    if (typeof method != "string") {
      return Function.prototype.bind.apply(method, [data].concat(args));
    }
    /**
     * @return {string}
     */
    bound.toString = function() {
      return "bound lazily: " + data[method];
    };
    return bound;
  }
  /** @type {function (Object, string): ?} */
  module.exports = bind;
}, null);
__d("executeAfter", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Function} fn
   * @param {Function} method
   * @param {Object} context
   * @return {?}
   */
  function proxy(fn, method, context) {
    return function() {
      fn.apply(context || this, arguments);
      method.apply(context || this, arguments);
    };
  }
  /** @type {function (Function, Function, Object): ?} */
  module.exports = proxy;
}, null);
__d("JSONPTransport", ["ArbiterMixin", "DOM", "HTML", "URI", "mixin"], function(handle, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, element, dom, valueAccessor, $sanitize, proceed) {
  /**
   * @param {number} e
   * @return {undefined}
   */
  function error(e) {
    delete _elements[e];
  }
  /**
   * @param {string} data
   * @param {?} state
   * @return {undefined}
   */
  function $(data, state) {
    /** @type {string} */
    this._type = data;
    this._uri = state;
    _elements[this.getID()] = this;
  }
  var _elements = {};
  /** @type {number} */
  var counter = 2;
  /** @type {string} */
  var DOC_COMMENT = "jsonp";
  /** @type {string} */
  var ELEMENT_NODE = "iframe";
  var data = proceed(element);
  var prop;
  for (prop in data) {
    if (data.hasOwnProperty(prop)) {
      $[prop] = data[prop];
    }
  }
  var proto = data === null ? null : data.prototype;
  /** @type {Object} */
  $.prototype = Object.create(proto);
  /** @type {function (string, ?): undefined} */
  $.prototype.constructor = $;
  $.__superConstructor__ = data;
  /**
   * @return {?}
   */
  $.prototype.getID = function() {
    return this._id || (this._id = counter++);
  };
  /**
   * @return {?}
   */
  $.prototype.hasFinished = function() {
    return!(this.getID() in _elements);
  };
  /**
   * @return {?}
   */
  $.prototype.getRequestURI = function() {
    return $sanitize(this._uri).addQueryData({
      __a : 1,
      __adt : this.getID(),
      __req : "jsonp_" + this.getID()
    });
  };
  /**
   * @return {?}
   */
  $.prototype.getTransportFrame = function() {
    if (this._iframe) {
      return this._iframe;
    }
    var transport_frame_ = "transport_frame_" + this.getID();
    var value = valueAccessor('<iframe class="hidden_elem" name="' + transport_frame_ + '" src="javascript:void(0)" />');
    return this._iframe = dom.appendContent(document.body, value)[0];
  };
  /**
   * @return {undefined}
   */
  $.prototype.send = function() {
    if (this._type === DOC_COMMENT) {
      setTimeout(function() {
        dom.appendContent(document.body, dom.create("script", {
          src : this.getRequestURI().toString(),
          type : "text/javascript"
        }));
      }.bind(this), 0);
    } else {
      this.getTransportFrame().src = this.getRequestURI().toString();
    }
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  $.prototype.handleResponse = function(data) {
    this.inform("response", data);
    if (this.hasFinished()) {
      setTimeout(this._cleanup.bind(this), 0);
    }
  };
  /**
   * @return {undefined}
   */
  $.prototype.abort = function() {
    if (this._aborted) {
      return;
    }
    /** @type {boolean} */
    this._aborted = true;
    this._cleanup();
    error(this.getID());
    this.inform("abort");
  };
  /**
   * @return {undefined}
   */
  $.prototype._cleanup = function() {
    if (this._iframe) {
      dom.remove(this._iframe);
      /** @type {null} */
      this._iframe = null;
    }
  };
  /**
   * @param {number} e
   * @param {Object} data
   * @param {?} _headers
   * @return {undefined}
   */
  $.respond = function(e, data, _headers) {
    var element = _elements[e];
    if (element) {
      if (!_headers) {
        error(e);
      }
      if (element._type == ELEMENT_NODE) {
        /** @type {*} */
        data = JSON.parse(JSON.stringify(data));
      }
      element.handleResponse(data);
    } else {
      var self = handle.ErrorSignal;
      if (self && !_headers) {
        self.logJSError("ajax", {
          error : "UnexpectedJsonResponse",
          extra : {
            id : e,
            uri : data.payload && data.payload.uri || ""
          }
        });
      }
    }
  };
  /** @type {function (string, ?): undefined} */
  module.exports = $;
}, null);
__d("AsyncRequest", ["Arbiter", "AsyncRequestConfig", "AsyncResponse", "Bootloader", "CSS", "DTSG", "Env", "ErrorUtils", "Event", "HTTPErrors", "JSCC", "Parent", "PHPQuerySerializer", "Run", "ServerJS", "TimeSlice", "URI", "UserAgent_DEPRECATED", "isFacebookURI", "isMessengerDotComURI", "bind", "copyProperties", "emptyFunction", "evalGlobal", "executeAfter", "ge", "getAsyncParams", "getSameOriginTransport", "goURI", "invariant", "isEmpty", "ix", "setTimeoutAcrossTransitions", "fbt"], function(args,
textAlt, keepData, done, context, opt_attributes, t, deepDataAndEvents, subject, exports, $rootElement, gridStore, value, Ext, me, matcherFunction, widget, Dom, options, ignoreMethodDoesntExist, dataAndEvents, clause, require, Env, isObject, isFunction, next, callback, handler, when, makeIterator, i, concat, sink, on, opt_errorCallback, jQuery, params, timer, execResult) {
  /**
   * @return {?}
   */
  function getNext() {
    try {
      return!window.loaded;
    } catch (za) {
      return true;
    }
  }
  /**
   * @param {Object} xhr
   * @return {?}
   */
  function xhr(xhr) {
    return "upload" in xhr && "onprogress" in xhr.upload;
  }
  /**
   * @param {Object} failing_message
   * @return {?}
   */
  function report(failing_message) {
    return "withCredentials" in failing_message;
  }
  /**
   * @param {Object} jqXHR
   * @return {?}
   */
  function error(jqXHR) {
    return jqXHR.status in {
      0 : 1,
      12029 : 1,
      12030 : 1,
      12031 : 1,
      12152 : 1
    };
  }
  /**
   * @param {Function} callback
   * @return {?}
   */
  function proxy(callback) {
    /** @type {boolean} */
    var proxy = !callback || typeof callback === "function";
    return proxy;
  }
  /**
   * @param {?} index
   * @return {undefined}
   */
  function self(index) {
    callback(this, {
      transport : null,
      method : "POST",
      uri : "",
      timeout : null,
      timer : null,
      /** @type {Function} */
      initialHandler : handler,
      handler : null,
      uploadProgressHandler : null,
      errorHandler : null,
      transportErrorHandler : null,
      timeoutHandler : null,
      /** @type {Function} */
      interceptHandler : handler,
      /** @type {Function} */
      finallyHandler : handler,
      /** @type {Function} */
      abortHandler : handler,
      serverDialogCancelHandler : null,
      relativeTo : null,
      statusElement : null,
      statusClass : "",
      data : {},
      headers : {},
      file : null,
      context : {},
      readOnly : false,
      writeRequiredParams : [],
      remainingRetries : 0,
      userActionID : "-"
    });
    this.option = {
      asynchronous : true,
      suppressErrorHandlerWarning : false,
      suppressEvaluation : false,
      suppressErrorAlerts : false,
      retries : 0,
      jsonp : false,
      bundle : false,
      useIframeTransport : false,
      handleErrorAfterUnload : false
    };
    this.errorHandler = subject.defaultErrorHandler;
    this.transportErrorHandler = next(this, "errorHandler");
    if (index !== void 0) {
      this.setURI(index);
    }
  }
  /**
   * @return {undefined}
   */
  function $() {
    /** @type {Array} */
    this._requests = [];
  }
  /** @type {number} */
  var _id = 2;
  var id = _id;
  t.subscribe("page_transition", function(dataAndEvents, depMap) {
    id = depMap.id;
  });
  /**
   * @param {?} event
   * @return {undefined}
   */
  self.prototype._dispatchResponse = function(event) {
    this.clearStatusIndicator();
    if (!this._isRelevant()) {
      this._invokeErrorHandler(1010);
      return;
    }
    if (this.initialHandler(event) === false) {
      return;
    }
    clearTimeout(this.timer);
    if (event.jscc_map) {
      /** @type {*} */
      var instance = eval(event.jscc_map);
      widget.init(instance);
    }
    var _shouldSuppressJS;
    if (this.handler) {
      try {
        _shouldSuppressJS = this._shouldSuppressJS(this.handler(event));
      } catch (cb) {
        if (event.is_last) {
          this.finallyHandler(event);
        }
        throw cb;
      }
    }
    if (!_shouldSuppressJS) {
      this._handleJSResponse(event);
    }
    if (event.is_last) {
      this.finallyHandler(event);
    }
  };
  /**
   * @param {?} stepIndex
   * @return {?}
   */
  self.prototype._shouldSuppressJS = function(stepIndex) {
    return stepIndex === self.suppressOnloadToken;
  };
  /**
   * @param {?} e
   * @return {undefined}
   */
  self.prototype._handleJSResponse = function(e) {
    var a = this.getRelativeTo();
    var k = e.domops;
    var data = e.dtsgToken;
    var ctx = e.jsmods;
    var item = (new dataAndEvents).setRelativeTo(a);
    var req;
    if (ctx && ctx.require) {
      req = ctx.require;
      delete ctx.require;
    }
    if (ctx) {
      item.handle(ctx);
    }
    if (data) {
      gridStore.setToken(data);
    }
    var path = function(d) {
      if (k && d) {
        d.invoke(k, a);
      }
      if (req) {
        item.handle({
          require : req
        });
      }
      this._handleJSRegisters(e, "onload");
      if (this.lid) {
        t.inform("tti_ajax", {
          s : this.lid,
          d : [this._sendTimeStamp || 0, this._sendTimeStamp && this._responseTime ? this._responseTime - this._sendTimeStamp : 0]
        }, t.BEHAVIOR_EVENT);
      }
      this._handleJSRegisters(e, "onafterload");
      item.cleanup();
    }.bind(this);
    if (k) {
      exports.loadModules(["AsyncDOM"], path);
    } else {
      path(null);
    }
  };
  /**
   * @param {Object} old
   * @param {string} name
   * @return {undefined}
   */
  self.prototype._handleJSRegisters = function(old, name) {
    var codeSegments = old[name];
    if (codeSegments) {
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        Ext.applyWithGuard(new Function(codeSegments[i]), this);
      }
    }
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  self.prototype.invokeResponseHandler = function(data) {
    if (typeof data.redirect !== "undefined") {
      setTimeout(function() {
        this.setURI(data.redirect).send();
      }.bind(this), 0);
      return;
    }
    if (!this.handler && (!this.errorHandler && !this.transportErrorHandler)) {
      return;
    }
    var result = data.asyncResponse;
    if (typeof result !== "undefined") {
      if (!this._isRelevant()) {
        this._invokeErrorHandler(1010);
        return;
      }
      if (result.inlinejs) {
        when(result.inlinejs);
      }
      if (result.lid) {
        /** @type {number} */
        this._responseTime = Date.now();
        if (args.CavalryLogger) {
          this.cavalry = args.CavalryLogger.getInstance(result.lid);
        }
        this.lid = result.lid;
      }
      if (result.resource_map) {
        exports.setResourceMap(result.resource_map);
      }
      if (result.bootloadable) {
        exports.enableBootload(result.bootloadable);
      }
      params.add(result.ixData);
      var callback;
      var err;
      if (result.getError() && !result.getErrorIsWarning()) {
        var el = this.errorHandler.bind(this);
        callback = Ext.guard(this._dispatchErrorResponse, "AsyncRequest#_dispatchErrorResponse for " + this.getURI());
        callback = callback.bind(this, result, el);
        /** @type {string} */
        err = "error";
      } else {
        callback = Ext.guard(this._dispatchResponse, "AsyncRequest#_dispatchResponse for " + this.getURI());
        callback = callback.bind(this, result);
        /** @type {string} */
        err = "response";
      }
      callback = makeIterator(callback, function() {
        t.inform("AsyncRequest/" + err, {
          request : this,
          response : result
        });
      }.bind(this));
      /** @type {boolean} */
      var matches = false;
      if (this.preBootloadHandler) {
        matches = this.preBootloadHandler(result);
      }
      result.css = result.css || [];
      result.js = result.js || [];
      exports.loadResources(result.css.concat(result.js), function() {
        setTimeout(callback, 0);
      }, matches, this.getURI());
    } else {
      if (typeof data.transportError !== "undefined") {
        if (this._xFbServer) {
          this._invokeErrorHandler(1008);
        } else {
          this._invokeErrorHandler(1012);
        }
      } else {
        this._invokeErrorHandler(1007);
      }
    }
  };
  /**
   * @param {number} opt_attributes
   * @return {undefined}
   */
  self.prototype._invokeErrorHandler = function(opt_attributes) {
    var code;
    if (this.responseText === "") {
      /** @type {number} */
      code = 1002;
    } else {
      if (this._requestAborted) {
        /** @type {number} */
        code = 1011;
      } else {
        try {
          code = opt_attributes || (this.transport.status || 1004);
        } catch (bb) {
          /** @type {number} */
          code = 1005;
        }
        if (false === navigator.onLine) {
          /** @type {number} */
          code = 1006;
        }
      }
    }
    var errorDesc;
    var errorSummary;
    /** @type {boolean} */
    var silentError = true;
    if (code === 1006) {
      /** @type {string} */
      errorSummary = "No Network Connection";
      /** @type {string} */
      errorDesc = "Your browser appears to be offline. Please check your internet connection and try again.";
    } else {
      if (code >= 300 && code <= 399) {
        /** @type {string} */
        errorSummary = "Redirection";
        /** @type {string} */
        errorDesc = "Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.";
        var failuresLink = this.transport.getResponseHeader("Location");
        if (failuresLink) {
          on(failuresLink, true);
        }
        /** @type {boolean} */
        silentError = true;
      } else {
        /** @type {string} */
        errorSummary = "Oops";
        /** @type {string} */
        errorDesc = "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.";
      }
    }
    var result = new subject(this);
    callback(result, {
      error : code,
      errorSummary : errorSummary,
      errorDescription : errorDesc,
      silentError : silentError
    });
    setTimeout(function() {
      t.inform("AsyncRequest/error", {
        request : this,
        response : result
      });
    }.bind(this), 0);
    if (getNext() && !this.getOption("handleErrorAfterUnload")) {
      return;
    }
    if (!this.transportErrorHandler) {
      return;
    }
    var operation = this.transportErrorHandler.bind(this);
    !this.getOption("suppressErrorAlerts");
    Ext.applyWithGuard(this._dispatchErrorResponse, this, [result, operation]);
  };
  /**
   * @param {?} result
   * @param {?} behavior
   * @return {undefined}
   */
  self.prototype._dispatchErrorResponse = function(result, behavior) {
    var cz = result.getError();
    this.clearStatusIndicator();
    var e = this._sendTimeStamp && {
      duration : Date.now() - this._sendTimeStamp,
      xfb_ip : this._xFbServer || "-"
    };
    result.logError("async_error", e);
    if (!this._isRelevant() || cz === 1010) {
      this.abort();
      return;
    }
    if (cz == 1357008 || (cz == 1357007 || (cz == 1442002 || cz == 1357001))) {
      /** @type {boolean} */
      var deepDataAndEvents = cz == 1357008 || cz == 1357007;
      this.interceptHandler(result);
      this._displayServerDialog(result, deepDataAndEvents);
    } else {
      if (this.initialHandler(result) !== false) {
        clearTimeout(this.timer);
        try {
          behavior(result);
        } catch (eb) {
          this.finallyHandler(result);
          throw eb;
        }
        this.finallyHandler(result);
      }
    }
  };
  /**
   * @param {?} v
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype._displayServerDialog = function(v, deepDataAndEvents) {
    var collection = v.getPayload();
    if (collection.__dialog !== void 0) {
      this._displayServerLegacyDialog(v, deepDataAndEvents);
      return;
    }
    var e = collection.__dialogx;
    (new dataAndEvents).handle(e);
    exports.loadModules(["ConfirmationDialog"], function(nv) {
      nv.setupConfirmation(v, this);
    }.bind(this));
  };
  /**
   * @param {?} value
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype._displayServerLegacyDialog = function(value, deepDataAndEvents) {
    var act = value.getPayload().__dialog;
    exports.loadModules(["Dialog"], function(Assertion) {
      var test = new Assertion(act);
      if (deepDataAndEvents) {
        test.setHandler(this._displayConfirmationHandler.bind(this, test));
      }
      test.setCancelHandler(function() {
        var lookupIterator = this.getServerDialogCancelHandler();
        try {
          if (lookupIterator) {
            lookupIterator(value);
          }
        } catch (fb) {
          throw fb;
        } finally {
          this.finallyHandler(value);
        }
      }.bind(this)).setCausalElement(this.relativeTo).show();
    }.bind(this));
  };
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  self.prototype._displayConfirmationHandler = function(dataAndEvents) {
    /** @type {number} */
    this.data.confirmed = 1;
    callback(this.data, dataAndEvents.getFormData());
    this.send();
  };
  /**
   * @param {Object} s
   * @return {undefined}
   */
  self.prototype.setJSONPTransport = function(s) {
    s.subscribe("response", this._handleJSONPResponse.bind(this));
    s.subscribe("abort", this._handleJSONPAbort.bind(this));
    /** @type {Object} */
    this.transport = s;
  };
  /**
   * @param {?} dataAndEvents
   * @param {Object} key
   * @return {undefined}
   */
  self.prototype._handleJSONPResponse = function(dataAndEvents, key) {
    /** @type {boolean} */
    this.is_first = this.is_first === void 0;
    var camelKey = this._interpretResponse(key);
    /** @type {boolean} */
    camelKey.asyncResponse.is_first = this.is_first;
    camelKey.asyncResponse.is_last = this.transport.hasFinished();
    this.invokeResponseHandler(camelKey);
    if (this.transport.hasFinished()) {
      delete this.transport;
    }
  };
  /**
   * @return {undefined}
   */
  self.prototype._handleJSONPAbort = function() {
    this._invokeErrorHandler();
    delete this.transport;
  };
  /**
   * @param {string} jqXHR
   * @return {undefined}
   */
  self.prototype._handleXHRResponse = function(jqXHR) {
    var pdataCur;
    if (this.getOption("suppressEvaluation")) {
      pdataCur = {
        asyncResponse : new subject(this, jqXHR)
      };
    } else {
      var template = jqXHR.responseText;
      /** @type {null} */
      var _xFbServer = null;
      try {
        var body = this._unshieldResponseText(template);
        try {
          /** @type {*} */
          var expectationResult = eval("(" + body + ")");
          pdataCur = this._interpretResponse(expectationResult);
        } catch (db) {
          /** @type {string} */
          _xFbServer = "excep";
          pdataCur = {
            transportError : "eval() failed on async to " + this.getURI()
          };
        }
      } catch (ex) {
        /** @type {string} */
        _xFbServer = "empty";
        pdataCur = {
          transportError : ex.message
        };
      }
      if (_xFbServer) {
        var args_length = args.ErrorSignal;
        if (args_length) {
          args_length.sendErrorSignal("async_xport_resp", [(this._xFbServer ? "1008_" : "1012_") + _xFbServer, this._xFbServer || "-", this.getURI(), template.length, template.substr(0, 1600)].join(":"));
        }
      }
    }
    this.invokeResponseHandler(pdataCur);
  };
  /**
   * @param {string} str
   * @return {?}
   */
  self.prototype._unshieldResponseText = function(str) {
    /** @type {string} */
    var resolveValues = "for (;;);";
    /** @type {number} */
    var length = resolveValues.length;
    if (str.length <= length) {
      throw new Error("Response too short on async to " + this.getURI());
    }
    /** @type {number} */
    var p = 0;
    for (;str.charAt(p) == " " || str.charAt(p) == "\n";) {
      p++;
    }
    if (p) {
      str.substring(p, p + length) == resolveValues;
    }
    return str.substring(p + length);
  };
  /**
   * @param {Object} result
   * @return {?}
   */
  self.prototype._interpretResponse = function(result) {
    if (result.redirect) {
      return{
        redirect : result.redirect
      };
    }
    var error = new subject(this);
    if (result.__ar != 1) {
      /** @type {Object} */
      error.payload = result;
    } else {
      callback(error, result);
    }
    return{
      asyncResponse : error
    };
  };
  /**
   * @return {undefined}
   */
  self.prototype._onStateChange = function() {
    try {
      if (this.transport.readyState == 4) {
        self._inflightCount--;
        self._inflightPurge();
        try {
          if (typeof this.transport.getResponseHeader !== "undefined" && this.transport.getResponseHeader("X-FB-Debug")) {
            this._xFbServer = this.transport.getResponseHeader("X-FB-Debug");
          }
        } catch (ab) {
        }
        if (this.transport.status >= 200 && this.transport.status < 300) {
          /** @type {number} */
          self.lastSuccessTime = Date.now();
          this._handleXHRResponse(this.transport);
        } else {
          if (Env.webkit() && typeof this.transport.status == "undefined") {
            this._invokeErrorHandler(1002);
          } else {
            if (deepDataAndEvents.retryOnNetworkError && (error(this.transport) && (this.remainingRetries > 0 && !this._requestTimeout))) {
              this.remainingRetries--;
              delete this.transport;
              this.send(true);
              return;
            } else {
              this._invokeErrorHandler();
            }
          }
        }
        if (this.getOption("asynchronous") !== false) {
          delete this.transport;
        }
      }
    } catch (ex) {
      if (getNext()) {
        return;
      }
      delete this.transport;
      if (this.remainingRetries > 0) {
        this.remainingRetries--;
        this.send(true);
      } else {
        !this.getOption("suppressErrorAlerts");
        var args_length = args.ErrorSignal;
        if (args_length) {
          args_length.sendErrorSignal("async_xport_resp", [1007, this._xFbServer || "-", this.getURI(), ex.message].join(":"));
        }
        this._invokeErrorHandler(1007);
      }
    }
  };
  /**
   * @return {?}
   */
  self.prototype._isMultiplexable = function() {
    if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
      return false;
    }
    if (!isObject(this.uri)) {
      return false;
    }
    if (!this.getOption("asynchronous")) {
      return false;
    }
    return true;
  };
  /**
   * @param {Object} key
   * @return {undefined}
   */
  self.prototype.handleResponse = function(key) {
    var camelKey = this._interpretResponse(key);
    this.invokeResponseHandler(camelKey);
  };
  /**
   * @param {?} method
   * @return {?}
   */
  self.prototype.setMethod = function(method) {
    this.method = method.toString().toUpperCase();
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getMethod = function() {
    return this.method;
  };
  /**
   * @param {?} data
   * @return {?}
   */
  self.prototype.setData = function(data) {
    this.data = data;
    return this;
  };
  /**
   * @param {string} name
   * @param {string} value
   * @return {?}
   */
  self.prototype.setRequestHeader = function(name, value) {
    /** @type {string} */
    this.headers[name] = value;
    return this;
  };
  /**
   * @param {?} data
   * @return {?}
   */
  self.prototype.setRawData = function(data) {
    this.rawData = data;
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getData = function() {
    return this.data;
  };
  /**
   * @param {string} dataAndEvents
   * @param {?} value
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  self.prototype.setContextData = function(dataAndEvents, value, deepDataAndEvents) {
    deepDataAndEvents = deepDataAndEvents === void 0 ? true : deepDataAndEvents;
    if (deepDataAndEvents) {
      this.context["_log_" + dataAndEvents] = value;
    }
    return this;
  };
  /**
   * @return {undefined}
   */
  self.prototype._setUserActionID = function() {
    /** @type {string} */
    this.userActionID = (args.EagleEye && args.EagleEye.getSessionID() || "-") + "/-";
  };
  /**
   * @param {?} index
   * @return {?}
   */
  self.prototype.setURI = function(index) {
    var child = require(index);
    if (this.getOption("useIframeTransport") && !isObject(child)) {
      return this;
    }
    if (!this._allowCrossOrigin && (!this.getOption("jsonp") && (!this.getOption("useIframeTransport") && !child.isSameOrigin()))) {
      return this;
    }
    this._setUserActionID();
    if (!index || child.isEmpty()) {
      var a = args.ErrorSignal;
      var b = args.getErrorStack;
      if (a && b) {
        var options = {
          err_code : 1013,
          vip : "-",
          duration : 0,
          xfb_ip : "-",
          path : window.location.href,
          aid : this.userActionID
        };
        a.sendErrorSignal("async_error", JSON.stringify(options));
        a.sendErrorSignal("async_xport_stack", [1013, window.location.href, null, b()].join(":"));
      }
      return this;
    }
    this.uri = child;
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getURI = function() {
    return this.uri.toString();
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setInitialHandler = function(dataAndEvents) {
    this.initialHandler = dataAndEvents;
    return this;
  };
  /**
   * @param {Function} handler
   * @return {?}
   */
  self.prototype.setHandler = function(handler) {
    if (proxy(handler)) {
      /** @type {Function} */
      this.handler = handler;
    }
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getHandler = function() {
    return this.handler || handler;
  };
  /**
   * @param {?} next_callback
   * @return {?}
   */
  self.prototype.setUploadProgressHandler = function(next_callback) {
    if (proxy(next_callback)) {
      this.uploadProgressHandler = next_callback;
    }
    return this;
  };
  /**
   * @param {Function} handler
   * @return {?}
   */
  self.prototype.setErrorHandler = function(handler) {
    if (proxy(handler)) {
      /** @type {Function} */
      this.errorHandler = handler;
    }
    return this;
  };
  /**
   * @param {?} callback
   * @return {?}
   */
  self.prototype.setTransportErrorHandler = function(callback) {
    this.transportErrorHandler = callback;
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getErrorHandler = function() {
    return this.errorHandler;
  };
  /**
   * @return {?}
   */
  self.prototype.getTransportErrorHandler = function() {
    return this.transportErrorHandler;
  };
  /**
   * @param {number} $timeout
   * @param {Blob} next_callback
   * @return {?}
   */
  self.prototype.setTimeoutHandler = function($timeout, next_callback) {
    if (proxy(next_callback)) {
      /** @type {number} */
      this.timeout = $timeout;
      /** @type {Blob} */
      this.timeoutHandler = next_callback;
    }
    return this;
  };
  /**
   * @param {number} timeout
   * @return {?}
   */
  self.prototype.resetTimeout = function(timeout) {
    if (!(this.timeoutHandler === null)) {
      if (timeout === null) {
        /** @type {null} */
        this.timeout = null;
        clearTimeout(this.timer);
        /** @type {null} */
        this.timer = null;
      } else {
        /** @type {boolean} */
        var ab = !this._allowCrossPageTransition;
        /** @type {number} */
        this.timeout = timeout;
        clearTimeout(this.timer);
        if (ab) {
          /** @type {number} */
          this.timer = setTimeout(this._handleTimeout.bind(this), this.timeout);
        } else {
          this.timer = timer(this._handleTimeout.bind(this), this.timeout);
        }
      }
    }
    return this;
  };
  /**
   * @return {undefined}
   */
  self.prototype._handleTimeout = function() {
    /** @type {boolean} */
    this._requestTimeout = true;
    this.abandon();
    this.timeoutHandler(this);
  };
  /**
   * @return {?}
   */
  self.prototype.setNewSerial = function() {
    /** @type {number} */
    this.id = ++_id;
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setInterceptHandler = function(dataAndEvents) {
    this.interceptHandler = dataAndEvents;
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setFinallyHandler = function(dataAndEvents) {
    this.finallyHandler = dataAndEvents;
    return this;
  };
  /**
   * @param {Function} dataAndEvents
   * @return {?}
   */
  self.prototype.setAbortHandler = function(dataAndEvents) {
    /** @type {Function} */
    this.abortHandler = dataAndEvents;
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getServerDialogCancelHandler = function() {
    return this.serverDialogCancelHandler;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setServerDialogCancelHandler = function(dataAndEvents) {
    this.serverDialogCancelHandler = dataAndEvents;
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setPreBootloadHandler = function(dataAndEvents) {
    this.preBootloadHandler = dataAndEvents;
    return this;
  };
  /**
   * @param {boolean} value
   * @return {?}
   */
  self.prototype.setReadOnly = function(value) {
    if (!(typeof value != "boolean")) {
      /** @type {boolean} */
      this.readOnly = value;
    }
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.setFBMLForm = function() {
    /** @type {Array} */
    this.writeRequiredParams = ["fb_sig"];
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getReadOnly = function() {
    return this.readOnly;
  };
  /**
   * @param {string} clicked
   * @return {?}
   */
  self.prototype.setRelativeTo = function(clicked) {
    /** @type {string} */
    this.relativeTo = clicked;
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getRelativeTo = function() {
    return this.relativeTo;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  self.prototype.setStatusClass = function(value) {
    /** @type {string} */
    this.statusClass = value;
    return this;
  };
  /**
   * @param {?} allow
   * @return {?}
   */
  self.prototype.setStatusElement = function(allow) {
    this.statusElement = allow;
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getStatusElement = function() {
    return i(this.statusElement);
  };
  /**
   * @return {?}
   */
  self.prototype._isRelevant = function() {
    if (this._allowCrossPageTransition) {
      return true;
    }
    if (!this.id) {
      return true;
    }
    return this.id > id;
  };
  /**
   * @return {undefined}
   */
  self.prototype.clearStatusIndicator = function() {
    var loadingClass = this.getStatusElement();
    if (loadingClass) {
      $rootElement.removeClass(loadingClass, "async_saving");
      $rootElement.removeClass(loadingClass, this.statusClass);
    }
  };
  /**
   * @return {undefined}
   */
  self.prototype.addStatusIndicator = function() {
    var elm1 = this.getStatusElement();
    if (elm1) {
      $rootElement.addClass(elm1, "async_saving");
      $rootElement.addClass(elm1, this.statusClass);
    }
  };
  /**
   * @return {?}
   */
  self.prototype.specifiesWriteRequiredParams = function() {
    return this.writeRequiredParams.every(function(key) {
      this.data[key] = this.data[key] || (value[key] || (i(key) || {}).value);
      if (this.data[key] !== void 0) {
        return true;
      }
      return false;
    }, this);
  };
  /**
   * @param {string} name
   * @param {boolean} recurring
   * @return {?}
   */
  self.prototype.setOption = function(name, recurring) {
    if (typeof this.option[name] != "undefined") {
      /** @type {boolean} */
      this.option[name] = recurring;
    }
    return this;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  self.prototype.getOption = function(name) {
    typeof this.option[name] == "undefined";
    return this.option[name];
  };
  /**
   * @return {undefined}
   */
  self.prototype.abort = function() {
    if (this.transport) {
      var restoreScript = this.getTransportErrorHandler();
      this.setOption("suppressErrorAlerts", true);
      this.setTransportErrorHandler(handler);
      /** @type {boolean} */
      this._requestAborted = true;
      this.transport.abort();
      this.setTransportErrorHandler(restoreScript);
    }
    this.abortHandler();
    $.unschedule(this);
  };
  /**
   * @return {undefined}
   */
  self.prototype.abandon = function() {
    clearTimeout(this.timer);
    this.setOption("suppressErrorAlerts", true).setHandler(handler).setErrorHandler(handler).setTransportErrorHandler(handler);
    if (this.transport) {
      /** @type {boolean} */
      this._requestAborted = true;
      this.transport.abort();
    }
    this.abortHandler();
    $.unschedule(this);
  };
  /**
   * @param {?} mongoObject
   * @return {?}
   */
  self.prototype.setNectarData = function(mongoObject) {
    if (mongoObject) {
      if (this.data.nctr === void 0) {
        this.data.nctr = {};
      }
      callback(this.data.nctr, mongoObject);
    }
    return this;
  };
  /**
   * @param {string} clicked
   * @return {?}
   */
  self.prototype.setNectarModuleDataSafe = function(clicked) {
    if (this.setNectarModuleData) {
      this.setNectarModuleData(clicked);
    }
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.setNectarImpressionIdSafe = function() {
    if (this.setNectarImpressionId) {
      this.setNectarImpressionId();
    }
    return this;
  };
  /**
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  self.prototype.setAllowCrossPageTransition = function(dataAndEvents) {
    /** @type {boolean} */
    this._allowCrossPageTransition = !!dataAndEvents;
    if (this.timer) {
      this.resetTimeout(this.timeout);
    }
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setAllowIrrelevantRequests = function(dataAndEvents) {
    this._allowIrrelevantRequests = dataAndEvents;
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setAllowCrossOrigin = function(dataAndEvents) {
    this._allowCrossOrigin = dataAndEvents;
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setIsBackgroundRequest = function(dataAndEvents) {
    this._isBackgroundRequest = dataAndEvents;
    return this;
  };
  /**
   * @param {boolean} first
   * @return {?}
   */
  self.prototype.send = function(first) {
    first = first || false;
    if (!this.uri) {
      return false;
    }
    if (!this.errorHandler) {
      !this.getOption("suppressErrorHandlerWarning");
    }
    if (this.getOption("jsonp") && this.method != "GET") {
      this.setMethod("GET");
    }
    if (this.getOption("useIframeTransport") && this.method != "GET") {
      this.setMethod("GET");
    }
    if (this.timeoutHandler !== null) {
      if (!this.getOption("jsonp")) {
        this.getOption("useIframeTransport");
      }
    }
    if (!this.getReadOnly()) {
      this.specifiesWriteRequiredParams();
      if (this.method != "POST") {
        return false;
      }
    }
    callback(this.data, concat(this.method));
    if (!jQuery(this.context)) {
      callback(this.data, this.context);
      /** @type {number} */
      this.data.ajax_log = 1;
    }
    if (value.force_param) {
      callback(this.data, value.force_param);
    }
    this._setUserActionID();
    if (this.getOption("bundle") && this._isMultiplexable()) {
      $.schedule(this);
      return true;
    }
    this.setNewSerial();
    if (!this.getOption("asynchronous")) {
      this.uri.addQueryData({
        __s : 1
      });
    }
    t.inform("AsyncRequest/send", {
      request : this
    });
    var url;
    var data;
    if (this.method == "GET" || this.rawData) {
      url = this.uri.addQueryData(this.data).toString();
      data = this.rawData || "";
    } else {
      if (this._allowCrossOrigin) {
        this.uri.addQueryData({
          __a : 1
        });
      }
      url = this.uri.toString();
      data = options.serialize(this.data);
    }
    if (this.transport) {
      return false;
    }
    if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
      done(["JSONPTransport"], function(m) {
        var res = new m(this.getOption("jsonp") ? "jsonp" : "iframe", this.uri);
        this.setJSONPTransport(res);
        res.send();
      }.bind(this));
      return true;
    }
    var xport = sink();
    if (!xport) {
      return false;
    }
    xport.onreadystatechange = clause.guard(this._onStateChange.bind(this), "XHR.onreadystatechange");
    if (this.uploadProgressHandler && xhr(xport)) {
      xport.upload.onprogress = this.uploadProgressHandler.bind(this);
    }
    if (!first) {
      this.remainingRetries = this.getOption("retries");
    }
    if (args.ErrorSignal) {
      this._sendTimeStamp = this._sendTimeStamp || Date.now();
    }
    this.transport = xport;
    try {
      this.transport.open(this.method, url, this.getOption("asynchronous"));
    } catch (db) {
      return false;
    }
    if (!this.uri.isSameOrigin() && (!this.getOption("jsonp") && !this.getOption("useIframeTransport"))) {
      if (!report(this.transport)) {
        return false;
      }
      if (isObject(this.uri) || isFunction(this.uri)) {
        /** @type {boolean} */
        this.transport.withCredentials = true;
      }
    }
    if (this.method == "POST" && !this.rawData) {
      this.transport.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (this._isBackgroundRequest) {
      this.transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
    }
    t.inform("AsyncRequest/will_send", {
      request : this
    });
    var name;
    for (name in this.headers) {
      if (this.headers.hasOwnProperty(name)) {
        this.transport.setRequestHeader(name, this.headers[name]);
      }
    }
    this.addStatusIndicator();
    this.transport.send(data);
    if (this.timeout !== null) {
      this.resetTimeout(this.timeout);
    }
    self._inflightCount++;
    self._inflightAdd(this);
    return true;
  };
  /**
   * @param {?} v
   * @return {undefined}
   */
  self._inflightAdd = function(v) {
    this._inflight.push(v);
  };
  /**
   * @return {undefined}
   */
  self._inflightPurge = function() {
    self._inflight = self._inflight.filter(function(connection) {
      return connection.transport && connection.transport.readyState < 4;
    });
  };
  /**
   * @param {?} req
   * @param {Object} el
   * @param {HTMLElement} oauthConfig
   * @return {?}
   */
  self.bootstrap = function(req, el, oauthConfig) {
    /** @type {string} */
    var method = "GET";
    /** @type {boolean} */
    var udataCur = true;
    var pdataCur = {};
    if (oauthConfig || el && el.rel == "async-post") {
      /** @type {string} */
      method = "POST";
      /** @type {boolean} */
      udataCur = false;
      if (req) {
        req = require(req);
        pdataCur = req.getQueryData();
        req.setQueryData({});
      }
    }
    var element = Dom.byClass(el, "stat_elem") || el;
    if (element && $rootElement.hasClass(element, "async_saving")) {
      return false;
    }
    var res = (new self(req)).setReadOnly(udataCur).setMethod(method).setData(pdataCur).setNectarModuleDataSafe(el).setRelativeTo(el);
    if (el) {
      res.setHandler(function(response) {
        me.fire(el, "success", {
          response : response
        });
      });
      res.setErrorHandler(function(result) {
        if (me.fire(el, "error", {
          response : result
        }) !== false) {
          subject.defaultErrorHandler(result);
        }
      });
    }
    if (element) {
      res.setStatusElement(element);
      var pdataOld = element.getAttribute("data-status-class");
      if (pdataOld) {
        res.setStatusClass(pdataOld);
      }
    }
    res.send();
    return false;
  };
  /**
   * @param {string} callback
   * @param {?} data
   * @return {?}
   */
  self.post = function(callback, data) {
    (new self(callback)).setReadOnly(false).setMethod("POST").setData(data).send();
    return false;
  };
  /**
   * @return {?}
   */
  self.getLastID = function() {
    return _id;
  };
  /**
   * @return {?}
   */
  self.getInflightCount = function() {
    return this._inflightCount;
  };
  /**
   * @return {undefined}
   */
  self._inflightEnable = function() {
    if (Env.ie()) {
      ignoreMethodDoesntExist.onUnload(function() {
        self._inflight.forEach(function(connection) {
          if (connection.transport && connection.transport.readyState < 4) {
            connection.transport.abort();
            delete connection.transport;
          }
        });
      });
    }
  };
  callback(self, {
    suppressOnloadToken : {},
    _inflight : [],
    _inflightCount : 0,
    /** @type {Function} */
    _inflightAdd : handler,
    /** @type {Function} */
    _inflightPurge : handler
  });
  var channel;
  /** @type {Array} */
  var list = [];
  /**
   * @param {number} callback
   * @return {undefined}
   */
  $.prototype.add = function(callback) {
    this._requests.push(callback);
  };
  /**
   * @param {?} elem
   * @return {undefined}
   */
  $.prototype.remove = function(elem) {
    var array = this._requests;
    var _requestsSent = this._requestsSent;
    /** @type {number} */
    var i = 0;
    var array_length = array.length;
    for (;i < array_length;i++) {
      if (array[i] === elem) {
        if (_requestsSent) {
          /** @type {null} */
          array[i] = null;
        } else {
          array.splice(i, 1);
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  $.prototype.send = function() {
    opt_errorCallback(!this._requestsSent);
    /** @type {boolean} */
    this._requestsSent = true;
    /** @type {null} */
    this._wrapperRequest = null;
    var parts = this._requests;
    if (!parts.length) {
      return;
    }
    var action;
    if (parts.length === 1) {
      action = parts[0];
    } else {
      var task = parts.map(function(self) {
        return[self.uri.getPath(), options.serialize(self.data)];
      });
      action = this._wrapperRequest = (new self("/ajax/proxy.php")).setAllowCrossPageTransition(true).setData({
        data : task
      }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this));
    }
    action.setOption("bundle", false).send();
  };
  /**
   * @param {?} e
   * @return {undefined}
   */
  $.prototype._handler = function(e) {
    var codeSegments = e.getPayload().responses;
    if (codeSegments.length !== this._requests.length) {
      return;
    }
    /** @type {number} */
    var i = 0;
    for (;i < this._requests.length;i++) {
      var self = this._requests[i];
      if (self === null) {
        continue;
      }
      var transportError = self.uri.getPath();
      if (this._wrapperRequest) {
        self.id = this._wrapperRequest.id;
      }
      if (codeSegments[i][0] !== transportError) {
        self.invokeResponseHandler({
          transportError : "Wrong response order in bundled request to " + transportError
        });
        continue;
      }
      self.handleResponse(codeSegments[i][1]);
    }
    list.splice(list.indexOf(this, 1));
  };
  /**
   * @param {?} e
   * @return {undefined}
   */
  $.prototype._transportErrorHandler = function(e) {
    var pdataCur = {
      transportError : e.errorDescription
    };
    var bb = this._requests.map(function(opts) {
      if (this._wrapperRequest) {
        opts.id = this._wrapperRequest.id;
      }
      opts.invokeResponseHandler(pdataCur);
      return opts.uri.getPath();
    }, this);
  };
  /**
   * @param {number} target
   * @return {?}
   */
  $.schedule = function(target) {
    if (!channel) {
      channel = new $;
      list.push(channel);
      setTimeout(function() {
        channel.send();
        /** @type {null} */
        channel = null;
      }, 0);
    }
    channel.add(target);
    return channel;
  };
  /**
   * @param {?} elem
   * @return {undefined}
   */
  $.unschedule = function(elem) {
    list.forEach(function(data_user) {
      data_user.remove(elem);
    });
  };
  /** @type {function (?): undefined} */
  args.AsyncRequest = self;
  /** @type {function (?): undefined} */
  context.exports = self;
}, null);
__d("BootloadedReact", ["Bootloader"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, exports) {
  /**
   * @param {Function} str
   * @return {undefined}
   */
  var toLowerCase = function(str) {
    exports.loadModules(["React"], str);
  };
  var tmpl = {
    /**
     * @param {?} global
     * @return {?}
     */
    isValidElement : function(global) {
      return!!(global && global._isReactElement);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {?} $sanitize
     * @return {undefined}
     */
    initializeTouchEvents : function(deepDataAndEvents, $sanitize) {
      toLowerCase(function(dataAndEvents) {
        dataAndEvents.initializeTouchEvents(deepDataAndEvents);
        if ($sanitize) {
          $sanitize();
        }
      });
    },
    /**
     * @param {?} spec
     * @param {?} callback
     * @return {undefined}
     */
    createClass : function(spec, callback) {
      toLowerCase(function(React) {
        var copy = React.createClass(spec);
        if (callback) {
          callback(copy);
        }
      });
    },
    /**
     * @param {Element} container
     * @param {Element} view
     * @param {?} callback
     * @return {undefined}
     */
    render : function(container, view, callback) {
      toLowerCase(function(assert) {
        var result = assert.render(container, view);
        if (callback) {
          callback(result);
        }
      });
    },
    /**
     * @param {?} container
     * @param {?} $sanitize
     * @return {undefined}
     */
    unmountComponentAtNode : function(container, $sanitize) {
      toLowerCase(function(body) {
        body.unmountComponentAtNode(container);
        if ($sanitize) {
          $sanitize();
        }
      });
    }
  };
  module.exports = tmpl;
}, null);
__d("ContextualThing", ["CSS", "DOM", "ge"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, test, a, $sanitize) {
  var t = {
    /**
     * @param {Element} fn
     * @param {?} el
     * @return {undefined}
     */
    register : function(fn, el) {
      fn.setAttribute("data-ownerid", a.getID(el));
    },
    /**
     * @param {Object} attr
     * @param {Element} name
     * @return {?}
     */
    containsIncludingLayers : function(attr, name) {
      for (;name;) {
        if (a.contains(attr, name)) {
          return true;
        }
        name = t.getContext(name);
      }
      return false;
    },
    /**
     * @param {HTMLElement} element
     * @return {?}
     */
    getContext : function(element) {
      var value;
      for (;element;) {
        if (element.getAttribute && (value = element.getAttribute("data-ownerid"))) {
          return $sanitize(value);
        }
        element = element.parentNode;
      }
      return null;
    },
    /**
     * @param {HTMLElement} element
     * @param {?} errmsg
     * @return {?}
     */
    parentByClass : function(element, errmsg) {
      var value;
      for (;element && !test.hasClass(element, errmsg);) {
        if (element.getAttribute && (value = element.getAttribute("data-ownerid"))) {
          element = $sanitize(value);
        } else {
          element = element.parentNode;
        }
      }
      return element;
    }
  };
  module.exports = t;
}, null);
__d("DOMControl", ["DataStore", "$"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, options, keepData, results, hash) {
  /**
   * @param {string} key
   * @return {undefined}
   */
  function Model(key) {
    this.root = hash(key);
    /** @type {boolean} */
    this.updating = false;
    results.set(key, "DOMControl", this);
  }
  /**
   * @return {?}
   */
  Model.prototype.getRoot = function() {
    return this.root;
  };
  /**
   * @return {?}
   */
  Model.prototype.beginUpdate = function() {
    if (this.updating) {
      return false;
    }
    /** @type {boolean} */
    this.updating = true;
    return true;
  };
  /**
   * @return {undefined}
   */
  Model.prototype.endUpdate = function() {
    /** @type {boolean} */
    this.updating = false;
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  Model.prototype.update = function(deepDataAndEvents) {
    if (!this.beginUpdate()) {
      return this;
    }
    this.onupdate(deepDataAndEvents);
    this.endUpdate();
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  Model.prototype.onupdate = function(deepDataAndEvents) {
  };
  /**
   * @param {Element} elem
   * @return {?}
   */
  Model.getInstance = function(elem) {
    return results.get(elem, "DOMControl");
  };
  /** @type {function (string): undefined} */
  options.exports = Model;
}, null);
__d("DOMDimensions", ["Style", "getDocumentScrollElement", "getViewportDimensions"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, scripts, cb, dataAndEvents) {
  var JsDiff = {
    /**
     * @param {HTMLElement} elem
     * @return {?}
     */
    getElementDimensions : function(elem) {
      return{
        width : elem.offsetWidth || 0,
        height : elem.offsetHeight || 0
      };
    },
    getViewportDimensions : dataAndEvents,
    getViewportWithoutScrollbarDimensions : dataAndEvents.withoutScrollbars,
    /**
     * @param {?} outErr
     * @return {?}
     */
    getDocumentDimensions : function(outErr) {
      var content = cb(outErr);
      var w = content.scrollWidth || 0;
      var dialogHeight = content.scrollHeight || 0;
      return{
        width : w,
        height : dialogHeight
      };
    },
    /**
     * @param {Element} elem
     * @param {string} docked
     * @param {(Object|string)} result
     * @param {(Object|string)} dataAndEvents
     * @param {(Object|string)} raw_text
     * @return {?}
     */
    measureElementBox : function(elem, docked, result, dataAndEvents, raw_text) {
      var handles;
      switch(docked) {
        case "left":
        ;
        case "right":
        ;
        case "top":
        ;
        case "bottom":
          /** @type {Array} */
          handles = [docked];
          break;
        case "width":
          /** @type {Array} */
          handles = ["left", "right"];
          break;
        case "height":
          /** @type {Array} */
          handles = ["top", "bottom"];
          break;
        default:
          throw Error("Invalid plane: " + docked);;
      }
      /**
       * @param {string} prefix
       * @param {string} suffix
       * @return {?}
       */
      var compress = function(prefix, suffix) {
        /** @type {number} */
        var content = 0;
        /** @type {number} */
        var i = 0;
        for (;i < handles.length;i++) {
          content += parseInt(scripts.get(elem, prefix + "-" + handles[i] + suffix), 10) || 0;
        }
        return content;
      };
      return(result ? compress("padding", "") : 0) + (dataAndEvents ? compress("border", "-width") : 0) + (raw_text ? compress("margin", "") : 0);
    }
  };
  module.exports = JsDiff;
}, null);
__d("cx", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Function} elt
   * @return {?}
   */
  function copy(elt) {
    throw new Error("cx: Unexpected class transformation.");
  }
  /** @type {function (Function): ?} */
  module.exports = copy;
}, null);
__d("Focus", ["CSS", "DOM", "Event", "Run", "cx", "ge"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, result, target, event, keys, opt_attributes, i) {
  /**
   * @return {undefined}
   */
  function listen() {
    if (n) {
      return;
    }
    event.listen(document.documentElement, "focusout", add);
    event.listen(document.documentElement, "focusin", add);
    /** @type {boolean} */
    n = true;
  }
  /**
   * @param {Event} e
   * @return {undefined}
   */
  function add(e) {
    var description = e.getTarget();
    if (typeof row[description.id] === "function") {
      /** @type {boolean} */
      var r20 = e.type === "focusin" || e.type === "focus";
      row[description.id](r20);
    }
  }
  /**
   * @param {?} key
   * @return {undefined}
   */
  function callback(key) {
    if (row[key] && !i(key)) {
      delete row[key];
    }
  }
  var row = {};
  var n;
  var game = {
    /**
     * @param {Element} elem
     * @return {undefined}
     */
    set : function(elem) {
      try {
        elem.tabIndex = elem.tabIndex;
        elem.focus();
      } catch (t) {
      }
    },
    /**
     * @param {Element} elem
     * @return {undefined}
     */
    setWithoutOutline : function(elem) {
      result.addClass(elem, "_5f0v");
      var $elem = event.listen(elem, "blur", function() {
        result.removeClass(elem, "_5f0v");
        $elem.remove();
      });
      game.set(elem);
    },
    /**
     * @param {Element} type
     * @param {?} element
     * @return {undefined}
     */
    relocate : function(type, element) {
      /**
       * @param {?} ui
       * @return {undefined}
       */
      function complete(ui) {
        result.conditionClass(element, "_3oxt", ui);
      }
      game.listen(type, complete);
      result.addClass(type, "_5f0v");
    },
    /**
     * @param {Element} elem
     * @param {string} type
     * @return {undefined}
     */
    listen : function(elem, type) {
      listen();
      var index = target.getID(elem);
      /** @type {string} */
      row[index] = type;
      keys.onLeave(callback.bind(null, index));
    }
  };
  module.exports = game;
}, null);
__d("InputSelection", ["DOM", "Focus"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, matches, data_user) {
  var prop = {
    /**
     * @param {Element} elem
     * @return {?}
     */
    get : function(elem) {
      try {
        if (typeof elem.selectionStart === "number") {
          return{
            start : elem.selectionStart,
            end : elem.selectionEnd
          };
        }
      } catch (k) {
        return{
          start : 0,
          end : 0
        };
      }
      if (!document.selection) {
        return{
          start : 0,
          end : 0
        };
      }
      /** @type {(ControlRange|TextRange|null)} */
      var range2 = document.selection.createRange();
      if (range2.parentElement() !== elem) {
        return{
          start : 0,
          end : 0
        };
      }
      var len = elem.value.length;
      if (matches.isNodeOfType(elem, "input")) {
        return{
          start : -range2.moveStart("character", -len),
          end : -range2.moveEnd("character", -len)
        };
      } else {
        var range = range2.duplicate();
        range.moveToElementText(elem);
        range.setEndPoint("StartToEnd", range2);
        /** @type {number} */
        var last = len - range.text.length;
        range.setEndPoint("StartToStart", range2);
        return{
          start : len - range.text.length,
          end : last
        };
      }
    },
    /**
     * @param {Element} elem
     * @param {number} start
     * @param {number} end
     * @return {undefined}
     */
    set : function(elem, start, end) {
      if (typeof end == "undefined") {
        /** @type {number} */
        end = start;
      }
      if (document.selection) {
        if (elem.tagName == "TEXTAREA") {
          var delta = (elem.value.slice(0, start).match(/\r/g) || []).length;
          var cnl = (elem.value.slice(start, end).match(/\r/g) || []).length;
          start -= delta;
          end -= delta + cnl;
        }
        var r = elem.createTextRange();
        r.collapse(true);
        r.moveStart("character", start);
        r.moveEnd("character", end - start);
        r.select();
      } else {
        /** @type {number} */
        elem.selectionStart = start;
        /** @type {number} */
        elem.selectionEnd = Math.min(end, elem.value.length);
        data_user.set(elem);
      }
    }
  };
  module.exports = prop;
}, null);
__d("enforceMaxLength", ["DOM", "Event", "Input", "InputSelection"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $, event, array, data_user) {
  /**
   * @param {Element} elem
   * @param {?} idx
   * @return {undefined}
   */
  var callback = function(elem, idx) {
    var str = array.getValue(elem);
    var end = str.length;
    /** @type {number} */
    var start = end - idx;
    if (start > 0) {
      var data;
      var value;
      try {
        data = data_user.get(elem);
        value = data.end;
      } catch (u) {
        /** @type {null} */
        data = null;
        /** @type {number} */
        value = 0;
      }
      if (value >= start) {
        end = value;
      }
      /** @type {number} */
      var len = end - start;
      if (len && (str.charCodeAt(len - 1) & 64512) === 55296) {
        len--;
      }
      /** @type {number} */
      value = Math.min(value, len);
      array.setValue(elem, str.slice(0, len) + str.slice(end));
      if (data) {
        data_user.set(elem, Math.min(data.start, value), value);
      }
    }
  };
  /**
   * @param {Event} ev
   * @return {undefined}
   */
  var update = function(ev) {
    var input = ev.getTarget();
    var i = input.getAttribute && parseInt(input.getAttribute("maxlength"), 10);
    if (i > 0 && $.isNodeOfType(input, ["input", "textarea"])) {
      setTimeout(callback.bind(null, input, i), 0);
    }
  };
  /** @type {boolean} */
  var m = "maxLength" in $.create("input") && "maxLength" in $.create("textarea");
  if (!m) {
    event.listen(document.documentElement, {
      /** @type {function (Event): undefined} */
      keydown : update,
      /** @type {function (Event): undefined} */
      paste : update
    });
  }
  /** @type {function (Element, ?): undefined} */
  module.exports = callback;
}, null);
__d("Input", ["CSS", "DOMQuery", "DOMControl"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, behavior, module, textAlt, jQuery, keepData, host) {
  /**
   * @param {Element} input
   * @return {undefined}
   */
  var init = function(input) {
    var n = input.getAttribute("maxlength");
    if (n && n > 0) {
      behavior(["enforceMaxLength"], function(cb) {
        cb(input, n);
      });
    }
  };
  var _ = {
    /**
     * @param {string} lang
     * @return {?}
     */
    isWhiteSpaceOnly : function(lang) {
      return!/\S/.test(lang || "");
    },
    /**
     * @param {Element} obj
     * @return {?}
     */
    isEmpty : function(obj) {
      return _.isWhiteSpaceOnly(obj.value);
    },
    /**
     * @param {Element} element
     * @return {?}
     */
    getValue : function(element) {
      return _.isEmpty(element) ? "" : element.value;
    },
    /**
     * @param {Attr} $provide
     * @return {?}
     */
    getValueRaw : function($provide) {
      return $provide.value;
    },
    /**
     * @param {Element} element
     * @param {string} value
     * @return {undefined}
     */
    setValue : function(element, value) {
      element.value = value || "";
      init(element);
      var elementRect = host.getInstance(element);
      if (elementRect) {
        if (elementRect.resetHeight) {
          elementRect.resetHeight();
        }
      }
    },
    /**
     * @param {Element} container
     * @param {?} text
     * @return {undefined}
     */
    setPlaceholder : function(container, text) {
      container.setAttribute("aria-label", text);
      container.setAttribute("placeholder", text);
    },
    /**
     * @param {Element} e
     * @return {undefined}
     */
    reset : function(e) {
      /** @type {string} */
      e.value = "";
      /** @type {string} */
      e.style.height = "";
    },
    /**
     * @param {?} fn2
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    setSubmitOnEnter : function(fn2, deepDataAndEvents) {
      jQuery.conditionClass(fn2, "enter_submit", deepDataAndEvents);
    },
    /**
     * @param {?} className
     * @return {?}
     */
    getSubmitOnEnter : function(className) {
      return jQuery.hasClass(className, "enter_submit");
    },
    /**
     * @param {Element} input
     * @param {number} length
     * @return {undefined}
     */
    setMaxLength : function(input, length) {
      if (length > 0) {
        input.setAttribute("maxlength", length);
        init(input);
      } else {
        input.removeAttribute("maxlength");
      }
    }
  };
  module.exports = _;
}, null);
__d("Form", ["AsyncRequest", "AsyncResponse", "CSS", "DataStore", "DOM", "DOMQuery", "DTSG", "Event", "Input", "LSD", "Parent", "PHPQuerySerializer", "URI", "createArrayFromMixed", "getElementPosition", "trackReferrer"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, Model, config, $rootElement, data_user, domConstruct, utils, accessToken, $, res, o, Dom, r, callbacks, fill, iterator, test) {
  /**
   * @param {?} obj
   * @return {?}
   */
  function exec(obj) {
    var object = {};
    r.serialize(obj).split("&").forEach(function(cssText) {
      if (cssText) {
        /** @type {(Array.<string>|null)} */
        var matches = /^([^=]*)(?:=(.*))?$/.exec(cssText);
        var unlock = callbacks.decodeComponent(matches[1]);
        /** @type {boolean} */
        var hasBody = matches[2] !== void 0;
        var data = hasBody ? callbacks.decodeComponent(matches[2]) : null;
        object[unlock] = data;
      }
    });
    return object;
  }
  /** @type {boolean} */
  var on = "FileList" in window;
  /** @type {boolean} */
  var isTouch = "FormData" in window;
  var self = {
    /**
     * @param {Document} form
     * @return {?}
     */
    getInputs : function(form) {
      form = form || document;
      return[].concat(fill(utils.scry(form, "input")), fill(utils.scry(form, "select")), fill(utils.scry(form, "textarea")), fill(utils.scry(form, "button")));
    },
    /**
     * @param {Object} form
     * @return {?}
     */
    getInputsByName : function(form) {
      var o = {};
      self.getInputs(form).forEach(function(v) {
        var p = o[v.name];
        o[v.name] = typeof p === "undefined" ? v : [v].concat(p);
      });
      return o;
    },
    /**
     * @param {Element} select
     * @return {?}
     */
    getSelectValue : function(select) {
      return select.options[select.selectedIndex].value;
    },
    /**
     * @param {Element} selectElement
     * @param {?} val
     * @return {undefined}
     */
    setSelectValue : function(selectElement, val) {
      /** @type {number} */
      var j = 0;
      for (;j < selectElement.options.length;++j) {
        if (selectElement.options[j].value == val) {
          /** @type {number} */
          selectElement.selectedIndex = j;
          break;
        }
      }
    },
    /**
     * @param {Array} radio
     * @return {?}
     */
    getRadioValue : function(radio) {
      /** @type {number} */
      var i = 0;
      for (;i < radio.length;i++) {
        if (radio[i].checked) {
          return radio[i].value;
        }
      }
      return null;
    },
    /**
     * @param {Object} form
     * @return {?}
     */
    getElements : function(form) {
      return fill(form.tagName == "FORM" && form.elements != form ? form.elements : self.getInputs(form));
    },
    /**
     * @param {string} el
     * @param {string} name
     * @return {?}
     */
    getAttribute : function(el, name) {
      return(el.getAttributeNode(name) || {}).value || null;
    },
    /**
     * @param {string} el
     * @param {boolean} val
     * @return {undefined}
     */
    setDisabled : function(el, val) {
      self.getElements(el).forEach(function(elem) {
        if (elem.disabled !== void 0) {
          var hasBody = data_user.get(elem, "origDisabledState");
          if (val) {
            if (hasBody === void 0) {
              data_user.set(elem, "origDisabledState", elem.disabled);
            }
            /** @type {boolean} */
            elem.disabled = val;
          } else {
            if (hasBody === false) {
              /** @type {boolean} */
              elem.disabled = false;
            }
          }
        }
      });
    },
    /**
     * @param {string} el
     * @param {Element} node
     * @return {undefined}
     */
    bootstrap : function(el, node) {
      var method = (self.getAttribute(el, "method") || "GET").toUpperCase();
      node = Dom.byTag(node, "button") || node;
      var element = Dom.byClass(node, "stat_elem") || el;
      if ($rootElement.hasClass(element, "async_saving")) {
        return;
      }
      if (node && (node.form !== el || (node.nodeName != "INPUT" && node.nodeName != "BUTTON" || node.type != "submit"))) {
        var fragment = utils.scry(el, ".enter_submit_target")[0];
        if (fragment) {
          node = fragment;
        }
      }
      var value = self.serialize(el, node);
      self.setDisabled(el, true);
      var data = self.getAttribute(el, "ajaxify") || self.getAttribute(el, "action");
      test(el, data);
      var model = new Model(data);
      model.setData(value).setNectarModuleDataSafe(el).setReadOnly(method == "GET").setMethod(method).setRelativeTo(el).setStatusElement(element).setInitialHandler(self.setDisabled.bind(null, el, false)).setHandler(function(response) {
        $.fire(el, "success", {
          response : response
        });
      }).setErrorHandler(function(response) {
        if ($.fire(el, "error", {
          response : response
        }) !== false) {
          config.defaultErrorHandler(response);
        }
      }).setFinallyHandler(self.setDisabled.bind(null, el, false)).send();
    },
    /**
     * @param {?} el
     * @param {?} element
     * @param {Function} $
     * @return {undefined}
     */
    forEachValue : function(el, element, $) {
      self.getElements(el).forEach(function(el) {
        if (!el.name || el.disabled) {
          return;
        }
        if (el.type === "submit") {
          return;
        }
        if (el.type === "reset" || (el.type === "button" || el.type === "image")) {
          return;
        }
        if ((el.type === "radio" || el.type === "checkbox") && !el.checked) {
          return;
        }
        if (el.nodeName === "SELECT") {
          /** @type {number} */
          var i = 0;
          var valuesLen = el.options.length;
          for (;i < valuesLen;i++) {
            var option = el.options[i];
            if (option.selected) {
              $("select", el.name, option.value);
            }
          }
          return;
        }
        if (el.type === "file") {
          if (on) {
            var files = el.files;
            /** @type {number} */
            var j = 0;
            for (;j < files.length;j++) {
              $("file", el.name, files.item(j));
            }
          }
          return;
        }
        $(el.type, el.name, res.getValue(el));
      });
      if (element && (element.name && (element.type === "submit" && (utils.contains(el, element) && utils.isNodeOfType(element, ["input", "button"]))))) {
        $("submit", element.name, element.value);
      }
    },
    /**
     * @param {?} code
     * @param {?} funcToCall
     * @return {?}
     */
    createFormData : function(code, funcToCall) {
      if (!isTouch) {
        return null;
      }
      /** @type {FormData} */
      var f = new FormData;
      if (code) {
        if (utils.isNode(code)) {
          self.forEachValue(code, funcToCall, function(dataAndEvents, o, val) {
            f.append(o, val);
          });
        } else {
          var obj = exec(code);
          var key;
          for (key in obj) {
            if (obj[key] == null) {
              f.append(key, "");
            } else {
              f.append(key, obj[key]);
            }
          }
        }
      }
      return f;
    },
    /**
     * @param {?} opt
     * @param {Element} object
     * @return {?}
     */
    serialize : function(opt, object) {
      var suiteView = {};
      self.forEachValue(opt, object, function(watchedFile, k, isXML) {
        if (watchedFile === "file") {
          return;
        }
        self._serializeHelper(suiteView, k, isXML);
      });
      return self._serializeFix(suiteView);
    },
    /**
     * @param {Object} obj
     * @param {?} data
     * @param {?} value
     * @return {undefined}
     */
    _serializeHelper : function(obj, data, value) {
      /** @type {function (this:Object, *): boolean} */
      var has = Object.prototype.hasOwnProperty;
      /** @type {(Array.<string>|null)} */
      var match = /([^\]]+)\[([^\]]*)\](.*)/.exec(data);
      if (match) {
        if (!obj[match[1]] || !has.call(obj, match[1])) {
          var hooked;
          obj[match[1]] = hooked = {};
          if (obj[match[1]] !== hooked) {
            return;
          }
        }
        /** @type {number} */
        var key = 0;
        if (match[2] === "") {
          for (;obj[match[1]][key] !== void 0;) {
            key++;
          }
        } else {
          /** @type {string} */
          key = match[2];
        }
        if (match[3] === "") {
          obj[match[1]][key] = value;
        } else {
          self._serializeHelper(obj[match[1]], key.concat(match[3]), value);
        }
      } else {
        obj[data] = value;
      }
    },
    /**
     * @param {Object} obj
     * @return {?}
     */
    _serializeFix : function(obj) {
      var prop;
      for (prop in obj) {
        if (obj[prop] instanceof Object) {
          obj[prop] = self._serializeFix(obj[prop]);
        }
      }
      /** @type {Array.<string>} */
      var keys = Object.keys(obj);
      if (keys.length === 0 || keys.some(isNaN)) {
        return obj;
      }
      keys.sort(function(far, near) {
        return far - near;
      });
      /** @type {number} */
      var da = 0;
      /** @type {boolean} */
      var ea = keys.every(function(dataAndEvents) {
        return+dataAndEvents === da++;
      });
      if (ea) {
        return keys.map(function(implementation) {
          return obj[implementation];
        });
      }
      return obj;
    },
    /**
     * @param {?} callback
     * @param {string} node
     * @param {Object} target
     * @return {?}
     */
    post : function(callback, node, target) {
      /** @type {Element} */
      var form = document.createElement("form");
      form.action = callback.toString();
      /** @type {string} */
      form.method = "POST";
      /** @type {string} */
      form.style.display = "none";
      if (target) {
        /** @type {Object} */
        form.target = target;
      }
      node.fb_dtsg = accessToken.getToken();
      if (o.token) {
        node.lsd = o.token;
      }
      self.createHiddenInputs(node, form);
      utils.getRootElement().appendChild(form);
      form.submit();
      return false;
    },
    /**
     * @param {?} b
     * @param {Element} t
     * @param {Object} chunks
     * @param {?} dataAndEvents
     * @return {?}
     */
    createHiddenInputs : function(b, t, chunks, dataAndEvents) {
      chunks = chunks || {};
      var o = exec(b);
      var j;
      for (j in o) {
        if (o[j] === null) {
          continue;
        }
        if (chunks[j] && dataAndEvents) {
          chunks[j].value = o[j];
        } else {
          var temp = domConstruct.create("input", {
            type : "hidden",
            name : j,
            value : o[j]
          });
          chunks[j] = temp;
          t.appendChild(temp);
        }
      }
      return chunks;
    },
    /**
     * @param {?} elem
     * @param {Array} tasks
     * @return {?}
     */
    getFirstElement : function(elem, tasks) {
      tasks = tasks || ['input[type="text"]', "textarea", 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]'];
      /** @type {Array} */
      var data = [];
      /** @type {number} */
      var i = 0;
      for (;i < tasks.length;i++) {
        data = utils.scry(elem, tasks[i]);
        /** @type {number} */
        var dataIndex = 0;
        for (;dataIndex < data.length;dataIndex++) {
          var value = data[dataIndex];
          try {
            var key = iterator(value);
            if (key.y > 0 && key.x > 0) {
              return value;
            }
          } catch (ga) {
          }
        }
      }
      return null;
    },
    /**
     * @param {?} arg
     * @return {?}
     */
    focusFirst : function(arg) {
      var name = self.getFirstElement(arg);
      if (name) {
        name.focus();
        return true;
      }
      return false;
    }
  };
  context.exports = self;
}, null);
__d("HistoryManager", ["Cookie", "Env", "Event", "URI", "UserAgent_DEPRECATED", "isFacebookURI", "copyProperties", "emptyFunction", "goOrReplace", "isInIframe", "setIntervalAcrossTransitions", "EagleEye"], function(deepDataAndEvents, $sanitize, ignoreMethodDoesntExist, textAlt, context, keepData, mechanism, dataAndEvents, Event, $, UA, on, b, debug, callback, behavior, fn) {
  $sanitize("EagleEye");
  var self = {
    history : null,
    current : 0,
    fragment : null,
    /**
     * @return {?}
     */
    isInitialized : function() {
      return!!self._initialized;
    },
    /**
     * @return {?}
     */
    init : function() {
      if (!dataAndEvents.ALLOW_TRANSITION_IN_IFRAME && behavior()) {
        return;
      }
      if (self._initialized) {
        return self;
      }
      var u = $();
      var fragment = u.getFragment() || "";
      if (fragment.charAt(0) === "!") {
        fragment = fragment.substr(1);
        u.setFragment(fragment);
      }
      b(self, {
        _initialized : true,
        fragment : fragment,
        orig_fragment : fragment,
        history : [u],
        callbacks : [],
        lastChanged : Date.now(),
        canonical : $("#"),
        user : 0,
        enabled : true,
        debug : debug
      });
      if (window.history && history.pushState) {
        /** @type {string} */
        this.lastURI = document.URL;
        window.history.replaceState(this.lastURI, null);
        Event.listen(window, "popstate", function(o) {
          var s = o && (o.state && typeof o.state === "string");
          if (s && self.lastURI != o.state) {
            self.lastURI = o.state;
            /** @type {number} */
            self.lastChanged = Date.now();
            self.notify($(o.state).getUnqualifiedURI().toString());
          }
        }.bind(self));
        if (UA.webkit() < 534 || UA.chrome() <= 13) {
          fn(self.checkURI, 42);
          self._updateRefererURI(this.lastURI);
        }
        return self;
      }
      self._updateRefererURI($.getRequestURI(false));
      if (UA.webkit() < 500 || UA.firefox() < 2) {
        /** @type {boolean} */
        self.enabled = false;
        return self;
      }
      if ("onhashchange" in window) {
        Event.listen(window, "hashchange", function() {
          setTimeout(self.checkURI.bind(self), 0);
        });
      } else {
        fn(self.checkURI, 42);
      }
      return self;
    },
    /**
     * @param {?} token
     * @return {?}
     */
    registerURIHandler : function(token) {
      self.callbacks.push(token);
      return self;
    },
    /**
     * @param {?} element
     * @return {?}
     */
    setCanonicalLocation : function(element) {
      self.canonical = $(element);
      return self;
    },
    /**
     * @param {(Object|string)} e
     * @return {?}
     */
    notify : function(e) {
      if (e == self.orig_fragment) {
        e = self.canonical.getFragment();
      }
      /** @type {number} */
      var i = 0;
      for (;i < self.callbacks.length;i++) {
        try {
          if (self.callbacks[i](e)) {
            return true;
          }
        } catch (u) {
        }
      }
      return false;
    },
    /**
     * @return {undefined}
     */
    checkURI : function() {
      if (Date.now() - self.lastChanged < 400) {
        return;
      }
      if (window.history && history.pushState) {
        var arg = $(document.URL).removeQueryData("ref").toString();
        var type = $(self.lastURI).removeQueryData("ref").toString();
        if (arg != type) {
          /** @type {number} */
          self.lastChanged = Date.now();
          self.lastURI = arg;
          if (UA.webkit() < 534) {
            self._updateRefererURI(arg);
          }
          self.notify($(arg).getUnqualifiedURI().toString());
        }
        return;
      }
      if (UA.webkit() && window.history.length == 200) {
        if (!self.warned) {
          /** @type {boolean} */
          self.warned = true;
        }
        return;
      }
      var key = $().getFragment();
      if (key.charAt(0) == "!") {
        key = key.substr(1);
      }
      key = key.replace(/%23/g, "#");
      if (key != self.fragment.replace(/%23/g, "#")) {
        self.debug([key, " vs ", self.fragment, "whl: ", window.history.length, "QHL: ", self.history.length].join(" "));
        /** @type {number} */
        var i = self.history.length - 1;
        for (;i >= 0;--i) {
          if (self.history[i].getFragment().replace(/%23/g, "#") == key) {
            break;
          }
        }
        ++self.user;
        if (i >= 0) {
          self.go(i - self.current);
        } else {
          self.go("#" + key);
        }
        --self.user;
      }
    },
    /**
     * @param {(number|string)} target
     * @return {undefined}
     */
    _updateRefererURI : function(target) {
      target = target.toString();
      if (target.charAt(0) != "/" && target.indexOf("//") == -1) {
        return;
      }
      var failuresLink = new $(window.location);
      if (on(failuresLink)) {
        var fragment = failuresLink.getPath() + window.location.search
      } else {
        /** @type {string} */
        fragment = "";
      }
      var buffer = $(target).getQualifiedURI().setFragment(fragment).toString();
      /** @type {number} */
      var maxlength = 2048;
      if (buffer.length > maxlength) {
        buffer = buffer.substring(0, maxlength) + "...";
      }
      mechanism.set("x-referer", buffer);
    },
    /**
     * @param {number} state
     * @param {boolean} funcToCall
     * @param {?} params
     * @return {?}
     */
    go : function(state, funcToCall, params) {
      if (window.history && history.pushState) {
        if (!funcToCall) {
          typeof state == "number";
        }
        var new_url = $(state).removeQueryData("ref").toString();
        /** @type {number} */
        self.lastChanged = Date.now();
        this.lastURI = new_url;
        if (params) {
          window.history.replaceState(state, null, new_url);
        } else {
          window.history.pushState(state, null, new_url);
        }
        if (UA.webkit() < 534) {
          self._updateRefererURI(state);
        }
        return false;
      }
      self.debug("go: " + state);
      if (funcToCall === void 0) {
        /** @type {boolean} */
        funcToCall = true;
      }
      if (!self.enabled) {
        if (!funcToCall) {
          return false;
        }
      }
      if (typeof state == "number") {
        if (!state) {
          return false;
        }
        /** @type {number} */
        var target = state + self.current;
        /** @type {number} */
        var i = Math.max(0, Math.min(self.history.length - 1, target));
        /** @type {number} */
        self.current = i;
        target = self.history[i].getFragment() || self.orig_fragment;
        target = $(target).removeQueryData("ref").getUnqualifiedURI().toString();
        self.fragment = target;
        /** @type {number} */
        self.lastChanged = Date.now();
        if (!self.user) {
          callback(window.location, window.location.href.split("#")[0] + "#!" + target, params);
        }
        if (funcToCall) {
          self.notify(target);
        }
        self._updateRefererURI(target);
        return false;
      }
      state = $(state);
      if (state.getDomain() == $().getDomain()) {
        state = $("#" + state.getUnqualifiedURI());
      }
      var actual = self.history[self.current].getFragment();
      var expected = state.getFragment();
      if (expected == actual || actual == self.orig_fragment && expected == self.canonical.getFragment()) {
        if (funcToCall) {
          self.notify(expected);
        }
        self._updateRefererURI(expected);
        return false;
      }
      if (params) {
        self.current--;
      }
      /** @type {number} */
      var foundI = self.history.length - self.current - 1;
      self.history.splice(self.current + 1, foundI);
      self.history.push($(state));
      return self.go(1, funcToCall, params);
    },
    /**
     * @return {?}
     */
    getCurrentFragment : function() {
      var mode = $.getRequestURI(false).getFragment();
      return mode == self.orig_fragment ? self.canonical.getFragment() : mode;
    }
  };
  context.exports = self;
}, null);
__d("KeyEventController", ["DOMQuery", "Event", "Run", "getElementText", "isEmpty"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $, r, aResult, filter, next) {
  /**
   * @return {undefined}
   */
  function constructor() {
    this.handlers = {};
    document.onkeyup = this.onkeyevent.bind(this, "onkeyup");
    document.onkeydown = this.onkeyevent.bind(this, "onkeydown");
    document.onkeypress = this.onkeyevent.bind(this, "onkeypress");
  }
  /** @type {null} */
  var result = null;
  /** @type {Array} */
  var changeTags = ["input", "select", "textarea", "object", "embed"];
  var types = {
    button : 1,
    checkbox : 1,
    radio : 1,
    submit : 1
  };
  var KEY = {
    BACKSPACE : [8],
    TAB : [9],
    RETURN : [13],
    ESCAPE : [27],
    LEFT : [37, 63234],
    UP : [38, 63232],
    RIGHT : [39, 63235],
    DOWN : [40, 63233],
    DELETE : [46],
    COMMA : [188],
    PERIOD : [190],
    SLASH : [191],
    "`" : [192],
    "[" : [219],
    "]" : [221],
    PAGE_UP : [33],
    PAGE_DOWN : [34],
    SPACE : [32],
    KP_DOT : [46, 110]
  };
  var KEY_ACTION_MAPPINGS = {
    8 : 1,
    9 : 1,
    13 : 1,
    27 : 1,
    32 : 1,
    37 : 1,
    63234 : 1,
    38 : 1,
    63232 : 1,
    39 : 1,
    63235 : 1,
    40 : 1,
    63233 : 1,
    46 : 1
  };
  /**
   * @param {number} key
   * @return {?}
   */
  constructor.prototype.mapKey = function(key) {
    if (key >= 0 && key <= 9) {
      if (typeof key != "number") {
        /** @type {number} */
        key = key.charCodeAt(0) - 48;
      }
      return[48 + key, 96 + key];
    }
    var mapKey = KEY[key.toUpperCase()];
    if (mapKey) {
      return mapKey;
    }
    return[key.toUpperCase().charCodeAt(0)];
  };
  /**
   * @param {string} context
   * @param {Object} e
   * @return {?}
   */
  constructor.prototype.onkeyevent = function(context, e) {
    e = r.$E(e);
    var codeSegments = this.handlers[e.keyCode] || this.handlers[e.which];
    var callback;
    var filter;
    var ret;
    if (codeSegments) {
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        callback = codeSegments[i].callback;
        filter = codeSegments[i].filter;
        try {
          if (!filter || filter(e, context)) {
            ret = callback(e, context);
            if (ret === false) {
              return r.kill(e);
            }
          }
        } catch (y) {
        }
      }
    }
    return true;
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.resetHandlers = function() {
    this.handlers = {};
  };
  /**
   * @return {?}
   */
  constructor.getInstance = function() {
    return result || (result = new constructor);
  };
  /**
   * @param {Function} obj
   * @param {string} dataAndEvents
   * @return {?}
   */
  constructor.defaultFilter = function(obj, dataAndEvents) {
    obj = r.$E(obj);
    return constructor.filterEventTypes(obj, dataAndEvents) && (constructor.filterEventTargets(obj, dataAndEvents) && constructor.filterEventModifiers(obj, dataAndEvents));
  };
  /**
   * @param {Function} activeXObj
   * @param {string} dataAndEvents
   * @return {?}
   */
  constructor.filterEventTypes = function(activeXObj, dataAndEvents) {
    if (dataAndEvents === "onkeydown") {
      return true;
    }
    return false;
  };
  /**
   * @param {Object} event
   * @param {string} dataAndEvents
   * @return {?}
   */
  constructor.filterEventTargets = function(event, dataAndEvents) {
    var elem = event.getTarget();
    /** @type {boolean} */
    var srcElements = elem.contentEditable === "true" || elem.contentEditable === "plaintext-only";
    return!(srcElements || $.isNodeOfType(elem, changeTags)) || (elem.type in types || event.keyCode in KEY_ACTION_MAPPINGS && ($.isNodeOfType(elem, ["input", "textarea"]) && elem.value.length === 0 || srcElements && filter(elem).length === 0));
  };
  /**
   * @param {Object} event
   * @param {string} dataAndEvents
   * @return {?}
   */
  constructor.filterEventModifiers = function(event, dataAndEvents) {
    if (event.ctrlKey || (event.altKey || (event.metaKey || event.repeat))) {
      return false;
    }
    return true;
  };
  /**
   * @param {number} j
   * @param {Function} callback
   * @param {Function} filter
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  constructor.registerKey = function(j, callback, filter, dataAndEvents) {
    if (filter === void 0) {
      /** @type {function (Function, string): ?} */
      filter = constructor.defaultFilter;
    }
    var that = constructor.getInstance();
    var codeSegments = that.mapKey(j);
    if (next(that.handlers)) {
      aResult.onLeave(that.resetHandlers.bind(that));
    }
    var events = {};
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      j = codeSegments[i];
      if (!that.handlers[j] || dataAndEvents) {
        /** @type {Array} */
        that.handlers[j] = [];
      }
      var v = {
        /** @type {Function} */
        callback : callback,
        /** @type {Function} */
        filter : filter
      };
      events[j] = v;
      that.handlers[j].push(v);
    }
    return{
      /**
       * @return {undefined}
       */
      remove : function() {
        var type;
        for (type in events) {
          if (that.handlers[type] && that.handlers[type].length) {
            var fromIndex = that.handlers[type].indexOf(events[type]);
            if (fromIndex >= 0) {
              that.handlers[type].splice(fromIndex, 1);
            }
          }
          delete events[type];
        }
      }
    };
  };
  /** @type {function (): undefined} */
  module.exports = constructor;
}, null);
__d("KeyStatus", ["Event", "ExecutionEnvironment"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, event, dataAndEvents) {
  /**
   * @return {undefined}
   */
  function attach() {
    if (!n) {
      n = event.listen(window, "blur", function() {
        /** @type {null} */
        camel = null;
        callback();
      });
    }
  }
  /**
   * @return {undefined}
   */
  function callback() {
    if (n) {
      n.remove();
      /** @type {null} */
      n = null;
    }
  }
  /**
   * @param {?} key
   * @return {undefined}
   */
  function handler(key) {
    camel = event.getKeyCode(key);
    attach();
  }
  /**
   * @return {undefined}
   */
  function eventHandler() {
    /** @type {null} */
    camel = null;
    callback();
  }
  /** @type {null} */
  var camel = null;
  /** @type {null} */
  var n = null;
  if (dataAndEvents.canUseDOM) {
    /** @type {Element} */
    var target = document.documentElement;
    if (target.addEventListener) {
      target.addEventListener("keydown", handler, true);
      target.addEventListener("keyup", eventHandler, true);
    } else {
      target.attachEvent("onkeydown", handler);
      target.attachEvent("onkeyup", eventHandler);
    }
  }
  var JsDiff = {
    /**
     * @return {?}
     */
    isKeyDown : function() {
      return!!camel;
    },
    /**
     * @return {?}
     */
    getKeyDownCode : function() {
      return camel;
    }
  };
  module.exports = JsDiff;
}, null);
__d("OnloadHooks", ["Arbiter", "ErrorUtils", "InitialJSLoader", "OnloadEvent"], function(event, dataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, m, nv, deepDataAndEvents, opts) {
  /**
   * @return {undefined}
   */
  function callback() {
    var type = event.CavalryLogger;
    if (!window.loaded && type) {
      type.getInstance().setTimeStamp("t_prehooks");
    }
    get("onloadhooks");
    if (!window.loaded && type) {
      type.getInstance().setTimeStamp("t_hooks");
    }
    /** @type {boolean} */
    window.loaded = true;
    m.inform("uipage_onload", true, m.BEHAVIOR_STATE);
  }
  /**
   * @return {undefined}
   */
  function drag() {
    get("onafterloadhooks");
    /** @type {boolean} */
    window.afterloaded = true;
  }
  /**
   * @param {?} v
   * @param {?} value
   * @return {?}
   */
  function iterator(v, value) {
    return nv.applyWithGuard(v, null, null, function(options) {
      options.event_type = value;
      /** @type {string} */
      options.category = "runhook";
    });
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function get(name) {
    /** @type {boolean} */
    var isXML = name == "onbeforeleavehooks" || name == "onbeforeunloadhooks";
    do {
      var set = window[name];
      if (!set) {
        break;
      }
      if (!isXML) {
        /** @type {null} */
        window[name] = null;
      }
      /** @type {number} */
      var i = 0;
      for (;i < set.length;i++) {
        var key = iterator(set[i], name);
        if (isXML && key) {
          return key;
        }
      }
    } while (!isXML && window[name]);
  }
  /**
   * @return {undefined}
   */
  function loaded() {
    if (!window.loaded) {
      /** @type {boolean} */
      window.loaded = true;
      get("onloadhooks");
    }
    if (!window.afterloaded) {
      /** @type {boolean} */
      window.afterloaded = true;
      get("onafterloadhooks");
    }
  }
  /**
   * @return {undefined}
   */
  function init() {
    m.registerCallback(callback, [opts.ONLOAD_DOMCONTENT_CALLBACK, deepDataAndEvents.INITIAL_JS_READY]);
    m.registerCallback(drag, [opts.ONLOAD_DOMCONTENT_CALLBACK, opts.ONLOAD_CALLBACK, deepDataAndEvents.INITIAL_JS_READY]);
    m.subscribe(opts.ONBEFOREUNLOAD, function(dataAndEvents, $log) {
      $log.warn = get("onbeforeleavehooks") || get("onbeforeunloadhooks");
      if (!$log.warn) {
        /** @type {boolean} */
        window.loaded = false;
        /** @type {boolean} */
        window.afterloaded = false;
      }
    }, m.SUBSCRIBE_NEW);
    m.subscribe(opts.ONUNLOAD, function(dataAndEvents, deepDataAndEvents) {
      get("onunloadhooks");
      get("onafterunloadhooks");
    }, m.SUBSCRIBE_NEW);
  }
  var object = {
    /** @type {function (): undefined} */
    _onloadHook : callback,
    /** @type {function (): undefined} */
    _onafterloadHook : drag,
    /** @type {function (?, ?): ?} */
    runHook : iterator,
    /** @type {function (string): ?} */
    runHooks : get,
    /** @type {function (): undefined} */
    keepWindowSetAsLoaded : loaded
  };
  init();
  event.OnloadHooks = module.exports = object;
}, null);
__d("PostLoadJS", ["Bootloader", "Run", "emptyFunction"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, exports, dataAndEvents, value) {
  /**
   * @param {?} deepDataAndEvents
   * @param {Function} value
   * @return {undefined}
   */
  function group(deepDataAndEvents, value) {
    dataAndEvents.onAfterLoad(function() {
      exports.loadModules.call(exports, [deepDataAndEvents], value);
    });
  }
  var JsDiff = {
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    loadAndRequire : function(deepDataAndEvents) {
      group(deepDataAndEvents, value);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {string} methodname
     * @param {Object} defaults
     * @return {undefined}
     */
    loadAndCall : function(deepDataAndEvents, methodname, defaults) {
      group(deepDataAndEvents, function(el) {
        el[methodname].apply(el, defaults);
      });
    }
  };
  module.exports = JsDiff;
}, null);
__d("ScriptPathState", ["Arbiter"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, left) {
  var part;
  var oddline;
  var text;
  var result;
  /** @type {number} */
  var index = 100;
  var DOM = {
    /**
     * @param {boolean} textAlt
     * @return {undefined}
     */
    setIsUIPageletRequest : function(textAlt) {
      /** @type {boolean} */
      text = textAlt;
    },
    /**
     * @param {?} subKey
     * @return {undefined}
     */
    setUserURISampleRate : function(subKey) {
      result = subKey;
    },
    /**
     * @return {undefined}
     */
    reset : function() {
      /** @type {null} */
      part = null;
      /** @type {boolean} */
      oddline = false;
      /** @type {boolean} */
      text = false;
    },
    /**
     * @return {?}
     */
    _shouldUpdateScriptPath : function() {
      return oddline && !text;
    },
    /**
     * @return {?}
     */
    _shouldSendURI : function() {
      return Math.random() < result;
    },
    /**
     * @return {?}
     */
    getParams : function() {
      var data = {};
      if (DOM._shouldUpdateScriptPath()) {
        if (DOM._shouldSendURI() && part !== null) {
          data.user_uri = part.substring(0, index);
        }
      } else {
        /** @type {number} */
        data.no_script_path = 1;
      }
      return data;
    }
  };
  left.subscribe("pre_page_transition", function(dataAndEvents, script) {
    /** @type {boolean} */
    oddline = true;
    part = script.to.getUnqualifiedURI().toString();
  });
  module.exports = dataAndEvents.ScriptPathState = DOM;
}, null);
__d("UserActivity", ["Arbiter", "Event"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $, event) {
  /**
   * @param {string} event
   * @return {undefined}
   */
  function handler(event) {
    /** @type {number} */
    max = Date.now();
    /** @type {number} */
    var distance = max - min;
    if (distance > thisDistance) {
      /** @type {number} */
      min = max;
      $.inform("useractivity/activity", {
        event : event,
        idleness : distance,
        last_inform : min
      });
    } else {
      if (distance < shortest_distance) {
        /** @type {number} */
        min = max;
      }
    }
  }
  /** @type {number} */
  var index = 5E3;
  /** @type {number} */
  var thisDistance = 500;
  /** @type {number} */
  var shortest_distance = -5;
  /** @type {number} */
  var max = Date.now();
  var min = max;
  var channel = {
    /**
     * @param {?} topic
     * @return {?}
     */
    subscribeOnce : function(topic) {
      var message = channel.subscribe(function() {
        channel.unsubscribe(message);
        topic();
      });
      return message;
    },
    /**
     * @param {string} message
     * @return {?}
     */
    subscribe : function(message) {
      return $.subscribe("useractivity/activity", message);
    },
    /**
     * @param {Object} args
     * @return {undefined}
     */
    unsubscribe : function(args) {
      args.unsubscribe();
    },
    /**
     * @param {(Object|number|string)} el
     * @return {?}
     */
    isActive : function(el) {
      return new Date - max < (el || index);
    },
    /**
     * @return {?}
     */
    getLastInformTime : function() {
      return min;
    }
  };
  event.listen(window, "scroll", handler);
  event.listen(window, "focus", handler);
  event.listen(document.documentElement, {
    /** @type {function (string): undefined} */
    DOMMouseScroll : handler,
    /** @type {function (string): undefined} */
    mousewheel : handler,
    /** @type {function (string): undefined} */
    keydown : handler,
    /** @type {function (string): undefined} */
    mouseover : handler,
    /** @type {function (string): undefined} */
    mousemove : handler,
    /** @type {function (string): undefined} */
    click : handler
  });
  $.subscribe("Event/stop", function(dataAndEvents, e) {
    handler(e.event);
  });
  module.exports = channel;
}, null);
__d("Vector", ["DOMVector", "Event"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, tmp, block) {
  /**
   * @param {Function} data
   * @param {?} n
   * @param {Object} obj
   * @return {undefined}
   */
  function self(data, n, obj) {
    tmp.call(this, parseFloat(data), parseFloat(n), obj);
  }
  var p;
  for (p in tmp) {
    if (tmp.hasOwnProperty(p)) {
      self[p] = tmp[p];
    }
  }
  var parent = tmp === null ? null : tmp.prototype;
  /** @type {Object} */
  self.prototype = Object.create(parent);
  /** @type {function (Function, ?, Object): undefined} */
  self.prototype.constructor = self;
  /** @type {Function} */
  self.__superConstructor__ = tmp;
  /**
   * @param {number} recurring
   * @param {number} v1
   * @param {Node} to
   * @return {?}
   */
  self.prototype.derive = function(recurring, v1, to) {
    return new self(recurring, v1, to || this.domain);
  };
  /**
   * @param {Element} elem
   * @return {?}
   */
  self.prototype.setElementPosition = function(elem) {
    var d = this.convertTo("document");
    /** @type {string} */
    elem.style.left = parseInt(d.x, 10) + "px";
    /** @type {string} */
    elem.style.top = parseInt(d.y, 10) + "px";
    return this;
  };
  /**
   * @param {Element} deepDataAndEvents
   * @return {?}
   */
  self.prototype.setElementDimensions = function(deepDataAndEvents) {
    return this.setElementWidth(deepDataAndEvents).setElementHeight(deepDataAndEvents);
  };
  /**
   * @param {Element} deepDataAndEvents
   * @return {?}
   */
  self.prototype.setElementWidth = function(deepDataAndEvents) {
    /** @type {string} */
    deepDataAndEvents.style.width = parseInt(this.x, 10) + "px";
    return this;
  };
  /**
   * @param {Element} deepDataAndEvents
   * @return {?}
   */
  self.prototype.setElementHeight = function(deepDataAndEvents) {
    /** @type {string} */
    deepDataAndEvents.style.height = parseInt(this.y, 10) + "px";
    return this;
  };
  /**
   * @param {Element} n
   * @return {?}
   */
  self.prototype.scrollElementBy = function(n) {
    if (n == document.body) {
      window.scrollBy(this.x, this.y);
    } else {
      n.scrollLeft += this.x;
      n.scrollTop += this.y;
    }
    return this;
  };
  /**
   * @param {?} el
   * @param {?} options
   * @param {string} target
   * @return {?}
   */
  self.from = function(el, options, target) {
    return new self(el, options, target);
  };
  /**
   * @param {?} node
   * @param {string} elem
   * @return {?}
   */
  self.getEventPosition = function(node, elem) {
    elem = elem || "document";
    var from = block.getPosition(node);
    var rhtml = this.from(from.x, from.y, "document");
    return rhtml.convertTo(elem);
  };
  /**
   * @param {string} text
   * @return {?}
   */
  self.deserialize = function(text) {
    var from = text.split(",");
    return this.from(from[0], from[1]);
  };
  /** @type {function (Function, ?, Object): undefined} */
  context.exports = self;
}, null);
__d("csx", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Function} elt
   * @return {?}
   */
  function copy(elt) {
    throw new Error("csx: Unexpected class selector transformation.");
  }
  /** @type {function (Function): ?} */
  module.exports = copy;
}, null);
__d("getOverlayZIndex", ["Style"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, buffer) {
  /**
   * @param {Object} target
   * @param {Element} root
   * @return {?}
   */
  function init(target, root) {
    root = root || document.body;
    /** @type {Array} */
    var targets = [];
    for (;target && target !== root;) {
      targets.push(target);
      target = target.parentNode;
    }
    if (target !== root) {
      return 0;
    }
    /** @type {number} */
    var elementIndex = targets.length - 1;
    for (;elementIndex >= 0;elementIndex--) {
      var element = targets[elementIndex];
      if (buffer.get(element, "position") != "static") {
        /** @type {number} */
        var num2 = parseInt(buffer.get(element, "z-index"), 10);
        if (!isNaN(num2)) {
          return num2;
        }
      }
    }
    return 0;
  }
  /** @type {function (Object, Element): ?} */
  module.exports = init;
}, null);
__d("queryThenMutateDOM", ["Run", "createArrayFromMixed", "emptyFunction", "requestAnimationFrame"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $scope, test, b, callback) {
  /**
   * @param {(Object|boolean|number|string)} data
   * @param {(Object|boolean|number|string)} a
   * @param {Object} selector
   * @return {undefined}
   */
  function filter(data, a, selector) {
    if (!data && !a) {
      return;
    }
    if (selector && css.hasOwnProperty(selector)) {
      return;
    } else {
      if (selector) {
        /** @type {number} */
        css[selector] = 1;
      }
    }
    stack.push(a || b);
    p.push(data || b);
    shift();
    if (!k) {
      /** @type {boolean} */
      k = true;
      $scope.onLeave(function() {
        /** @type {boolean} */
        k = false;
        /** @type {boolean} */
        l = false;
        css = {};
        /** @type {number} */
        stack.length = 0;
        /** @type {number} */
        p.length = 0;
      });
    }
  }
  /**
   * @return {undefined}
   */
  function flush() {
    css = {};
    /** @type {number} */
    var pl = p.length;
    /** @type {number} */
    var il = stack.length;
    /** @type {Array} */
    var _results = [];
    var f;
    for (;pl--;) {
      f = p.shift();
      _results.push(f());
    }
    for (;il--;) {
      f = stack.shift();
      f(_results.shift());
    }
    /** @type {boolean} */
    l = false;
    shift();
  }
  /**
   * @return {undefined}
   */
  function shift() {
    if (!l && (p.length || stack.length)) {
      /** @type {boolean} */
      l = true;
      callback(flush);
    }
  }
  var k;
  var l;
  var css = {};
  /** @type {Array} */
  var stack = [];
  /** @type {Array} */
  var p = [];
  /**
   * @param {Element} el
   * @param {Function} element
   * @param {Object} context
   * @return {?}
   */
  filter.prepare = function(el, element, context) {
    return function() {
      var args = test(arguments);
      args.unshift(this);
      /** @type {Function} */
      var k = Function.prototype.bind.apply(el, args);
      var i = element.bind(this);
      filter(k, i, context);
    };
  };
  /** @type {function ((Object|boolean|number|string), (Object|boolean|number|string), Object): undefined} */
  module.exports = filter;
}, null);
__d("EventListener", ["Event", "emptyFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, self, classNames) {
  var obj = {
    listen : self.listen,
    /**
     * @param {HTMLElement} el
     * @param {?} e
     * @param {?} callback
     * @return {?}
     */
    capture : function(el, e, callback) {
      if (!el.addEventListener) {
        return{
          remove : classNames
        };
      } else {
        el.addEventListener(e, callback, true);
        return{
          /**
           * @return {undefined}
           */
          remove : function() {
            el.removeEventListener(e, callback, true);
          }
        };
      }
    },
    /**
     * @param {string} complete
     * @param {?} millis
     * @return {?}
     */
    registerDefault : function(complete, millis) {
      return self.listen(document.documentElement, complete, millis, 10);
    }
  };
  module.exports = obj;
}, null);
__d("TinyViewport", ["Arbiter", "ArbiterMixin", "CSS", "Event", "copyProperties", "getDocumentScrollElement", "queryThenMutateDOM"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, handler, thisObj, dojo, self, makeIterator, $sanitize, $swipe) {
  /** @type {Element} */
  var de = document.documentElement;
  var val;
  var doc;
  /** @type {boolean} */
  var skip = false;
  var assert = {
    /**
     * @return {?}
     */
    isTiny : function() {
      return val;
    }
  };
  makeIterator(assert, thisObj);
  var client = $swipe.bind(null, function() {
    doc = doc || $sanitize();
    /** @type {boolean} */
    val = de.clientHeight < 400 || de.clientWidth < doc.scrollWidth - 1;
  }, function() {
    if (val !== skip) {
      dojo.conditionClass(de, "tinyViewport", val);
      dojo.conditionClass(de, "canHaveFixedElements", !val);
      assert.inform("change", val);
      skip = val;
    }
  }, "TinyViewport");
  client();
  handler.subscribe("quickling/response", client);
  self.listen(window, "resize", client);
  module.exports = assert;
}, null);
__d("Button", ["CSS", "DataStore", "DOM", "Event", "Parent", "cx", "emptyFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, win, data_user, self, _this, $templateCache, opt_attributes, item) {
  /**
   * @param {Element} elem
   * @param {?} opt_capt
   * @return {undefined}
   */
  function listen(elem, opt_capt) {
    var data = data_user.get(elem, camelKey);
    if (opt_capt) {
      if (data) {
        data.remove();
        data_user.remove(elem, camelKey);
      }
    } else {
      if (!data) {
        data_user.set(elem, camelKey, _this.listen(elem, "click", item.thatReturnsFalse, _this.Priority.URGENT));
      }
    }
  }
  /**
   * @param {Element} value
   * @return {?}
   */
  function fn(value) {
    var out = $templateCache.byClass(value, "uiButton") || $templateCache.byClass(value, "_42ft");
    if (!out) {
      throw new Error("invalid use case");
    }
    return out;
  }
  /**
   * @param {Element} content
   * @return {?}
   */
  function compile(content) {
    return self.isNodeOfType(content, "a");
  }
  /**
   * @param {Element} m
   * @return {?}
   */
  function copy(m) {
    return self.isNodeOfType(m, "button");
  }
  /**
   * @param {Element} name
   * @return {?}
   */
  function $(name) {
    return win.hasClass(name, "_42ft");
  }
  /** @type {string} */
  var value = "uiButtonDisabled";
  /** @type {string} */
  var a = "uiButtonDepressed";
  /** @type {string} */
  var name = "_42fr";
  /** @type {string} */
  var command = "_42fs";
  /** @type {string} */
  var camelKey = "button:blocker";
  /** @type {string} */
  var key = "href";
  /** @type {string} */
  var i = "ajaxify";
  var api = {
    /**
     * @param {Element} src
     * @return {?}
     */
    getInputElement : function(src) {
      src = fn(src);
      if (compile(src)) {
        throw new Error("invalid use case");
      }
      return copy(src) ? src : self.find(src, "input");
    },
    /**
     * @param {string} obj
     * @return {?}
     */
    isEnabled : function(obj) {
      return!(win.hasClass(fn(obj), value) || win.hasClass(fn(obj), name));
    },
    /**
     * @param {Element} elem
     * @param {?} enable
     * @return {undefined}
     */
    setEnabled : function(elem, enable) {
      elem = fn(elem);
      /** @type {string} */
      var computed = $(elem) ? name : value;
      win.conditionClass(elem, computed, !enable);
      if (compile(elem)) {
        var data = elem.getAttribute("href");
        var cur = elem.getAttribute("ajaxify");
        var handle = data_user.get(elem, key, "#");
        var context = data_user.get(elem, i);
        if (enable) {
          if (!data) {
            elem.setAttribute("href", handle);
          }
          if (!cur && context) {
            elem.setAttribute("ajaxify", context);
          }
          elem.removeAttribute("tabIndex");
        } else {
          if (data && data !== handle) {
            data_user.set(elem, key, data);
          }
          if (cur && cur !== context) {
            data_user.set(elem, i, cur);
          }
          elem.removeAttribute("href");
          elem.removeAttribute("ajaxify");
          elem.setAttribute("tabIndex", "-1");
        }
        listen(elem, enable);
      } else {
        var el = api.getInputElement(elem);
        /** @type {boolean} */
        el.disabled = !enable;
        listen(el, enable);
      }
    },
    /**
     * @param {Element} b
     * @param {?} selection
     * @return {undefined}
     */
    setDepressed : function(b, selection) {
      b = fn(b);
      /** @type {string} */
      var adown = $(b) ? command : a;
      win.conditionClass(b, adown, selection);
    },
    /**
     * @param {Element} b
     * @return {?}
     */
    isDepressed : function(b) {
      b = fn(b);
      /** @type {string} */
      var name = $(b) ? command : a;
      return win.hasClass(b, name);
    },
    /**
     * @param {Element} content
     * @param {?} v
     * @return {undefined}
     */
    setLabel : function(content, v) {
      content = fn(content);
      if ($(content)) {
        /** @type {Array} */
        var data = [];
        if (v) {
          data.push(v);
        }
        var node = self.scry(content, ".img")[0];
        if (node) {
          if (content.firstChild == node) {
            data.unshift(node);
          } else {
            data.push(node);
          }
        }
        self.setContent(content, data);
      } else {
        if (compile(content)) {
          var container = self.find(content, "span.uiButtonText");
          self.setContent(container, v);
        } else {
          api.getInputElement(content).value = v;
        }
      }
      /** @type {string} */
      var onmessage = $(content) ? "_42fv" : "uiButtonNoText";
      win.conditionClass(content, onmessage, !v);
    },
    /**
     * @param {Element} result
     * @param {string} p
     * @return {undefined}
     */
    setIcon : function(result, p) {
      if (p && !self.isNode(p)) {
        return;
      }
      result = fn(result);
      var tag = self.scry(result, ".img")[0];
      if (!p) {
        if (tag) {
          self.remove(tag);
        }
        return;
      }
      win.addClass(p, "customimg");
      if (tag != p) {
        if (tag) {
          self.replace(tag, p);
        } else {
          self.prependContent(result, p);
        }
      }
    }
  };
  module.exports = api;
}, null);
__d("UIForm", ["ArbiterMixin", "BehaviorsMixin", "DOM", "Event", "Form", "Run", "areJSONRepresentationsEqual", "mixin"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, obj, value, util, m, txin, data_user, on, group) {
  /**
   * @param {Object} data
   * @param {?} msg
   * @param {?} endpoint
   * @param {string} socket
   * @param {number} callbacks
   * @return {undefined}
   */
  function initialize(data, msg, endpoint, socket, callbacks) {
    /** @type {Object} */
    this._root = data;
    /** @type {Object} */
    this.controller = data;
    this._message = msg;
    if (socket) {
      /** @type {string} */
      this._confirm_dialog = socket;
      socket.subscribe("confirm", this._handleDialogConfirm.bind(this));
      util.prependContent(this._root, util.create("input", {
        type : "hidden",
        name : "confirmed",
        value : "true"
      }));
    }
    data_user.onAfterLoad(function() {
      this._originalState = txin.serialize(this._root);
    }.bind(this));
    this._forceDirty = endpoint;
    /** @type {boolean} */
    this._confirmed = false;
    /** @type {boolean} */
    this._submitted = false;
    m.listen(this._root, "submit", this._handleSubmit.bind(this));
    if (callbacks && callbacks.length) {
      this.enableBehaviors(callbacks);
    }
    /** @type {boolean} */
    var udataCur = true;
    data_user.onBeforeUnload(this.checkUnsaved.bind(this), udataCur);
  }
  var data = group(obj, value);
  var d;
  for (d in data) {
    if (data.hasOwnProperty(d)) {
      initialize[d] = data[d];
    }
  }
  var proto = data === null ? null : data.prototype;
  /** @type {Object} */
  initialize.prototype = Object.create(proto);
  /** @type {function (Object, ?, ?, string, number): undefined} */
  initialize.prototype.constructor = initialize;
  initialize.__superConstructor__ = data;
  /**
   * @return {?}
   */
  initialize.prototype.getRoot = function() {
    return this._root;
  };
  /**
   * @return {?}
   */
  initialize.prototype._handleSubmit = function() {
    if (this._confirm_dialog && !this._confirmed) {
      this._confirm_dialog.show();
      return false;
    }
    if (this.inform("submit") === false) {
      return false;
    }
    /** @type {boolean} */
    this._submitted = true;
    return true;
  };
  /**
   * @return {undefined}
   */
  initialize.prototype._handleDialogConfirm = function() {
    /** @type {boolean} */
    this._confirmed = true;
    this._confirm_dialog.hide();
    if (this._root.getAttribute("ajaxify")) {
      m.fire(this._root, "submit");
    } else {
      if (this._handleSubmit()) {
        this._root.submit();
      }
    }
  };
  /**
   * @return {undefined}
   */
  initialize.prototype.reset = function() {
    this.inform("reset");
    /** @type {boolean} */
    this._submitted = false;
    /** @type {boolean} */
    this._confirmed = false;
  };
  /**
   * @return {?}
   */
  initialize.prototype.isDirty = function() {
    if (this._submitted || !util.contains(document.body, this._root)) {
      return false;
    }
    if (this._forceDirty) {
      return true;
    }
    if (!this._originalState) {
      return false;
    }
    var failuresLink = txin.serialize(this._root);
    return!on(failuresLink, this._originalState);
  };
  /**
   * @return {?}
   */
  initialize.prototype.checkUnsaved = function() {
    if (this.isDirty()) {
      return this._message;
    }
    return null;
  };
  module.exports = dataAndEvents.UIForm || initialize;
}, null);
__d("Layer", ["ArbiterMixin", "BehaviorsMixin", "BootloadedReact", "ContextualThing", "CSS", "DataStore", "DOM", "Event", "HTML", "KeyEventController", "Parent", "Style", "copyProperties", "cx", "ge", "mixin", "removeFromArray", "setImmediate", "KeyStatus"], function(dataAndEvents, $sanitize, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, el, options, renderer, _, node, data_user, utils, event, callback, nv, caseSensitive, DOM, extend, keepData, match, step, jQuery, Application) {
  /**
   * @param {Object} data
   * @param {Element} path
   * @return {undefined}
   */
  function that(data, path) {
    this._config = data || {};
    if (path) {
      this._configure(this._config, path);
      var caseSensitive = this._config.addedBehaviors || [];
      this.enableBehaviors(this._getDefaultBehaviors().concat(caseSensitive));
    }
  }
  $sanitize("KeyStatus");
  /** @type {Array} */
  var scripts = [];
  var root = step(el, options);
  var k;
  for (k in root) {
    if (root.hasOwnProperty(k)) {
      that[k] = root[k];
    }
  }
  var value = root === null ? null : root.prototype;
  /** @type {Object} */
  that.prototype = Object.create(value);
  /** @type {function (Object, Element): undefined} */
  that.prototype.constructor = that;
  that.__superConstructor__ = root;
  /**
   * @param {string} element
   * @return {?}
   */
  that.prototype.init = function(element) {
    this._configure(this._config, element);
    var caseSensitive = this._config.addedBehaviors || [];
    this.enableBehaviors(this._getDefaultBehaviors().concat(caseSensitive));
    /** @type {boolean} */
    this._initialized = true;
    return this;
  };
  /**
   * @param {Object} meta
   * @param {Element} root
   * @return {undefined}
   */
  that.prototype._configure = function(meta, root) {
    if (root) {
      var exclusions = utils.isNode(root);
      var ia = typeof root === "string" || callback.isHTML(root);
      this.containsReactComponent = renderer.isValidElement(root);
      if (ia) {
        root = callback(root).getRootNode();
      } else {
        if (this.containsReactComponent) {
          /** @type {Element} */
          var view = document.createElement("div");
          renderer.render(root, view);
          /** @type {Element} */
          root = this._reactContainer = view;
        }
      }
    }
    this._root = this._buildWrapper(meta, root);
    if (meta.attributes) {
      utils.setAttributes(this._root, meta.attributes);
    }
    if (meta.classNames) {
      meta.classNames.forEach(node.addClass.bind(null, this._root));
    }
    node.addClass(this._root, "uiLayer");
    if (meta.causalElement) {
      this._causalElement = match(meta.causalElement);
    }
    if (meta.permanent) {
      this._permanent = meta.permanent;
    }
    data_user.set(this._root, "layer", this);
  };
  /**
   * @return {?}
   */
  that.prototype._getDefaultBehaviors = function() {
    return[];
  };
  /**
   * @return {?}
   */
  that.prototype.getCausalElement = function() {
    return this._causalElement;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  that.prototype.setCausalElement = function(dataAndEvents) {
    this._causalElement = dataAndEvents;
    return this;
  };
  /**
   * @return {?}
   */
  that.prototype.getInsertParent = function() {
    return this._insertParent || document.body;
  };
  /**
   * @return {?}
   */
  that.prototype.getRoot = function() {
    return this._root;
  };
  /**
   * @return {?}
   */
  that.prototype.getContentRoot = function() {
    return this._root;
  };
  /**
   * @param {Object} meta
   * @param {Element} logger
   * @return {?}
   */
  that.prototype._buildWrapper = function(meta, logger) {
    return logger;
  };
  /**
   * @param {Element} newContent
   * @return {?}
   */
  that.prototype.setInsertParent = function(newContent) {
    if (newContent) {
      if (this._shown && newContent !== this.getInsertParent()) {
        utils.appendContent(newContent, this.getRoot());
        this.updatePosition();
      }
      /** @type {Element} */
      this._insertParent = newContent;
    }
    return this;
  };
  /**
   * @param {?} threshold
   * @return {undefined}
   */
  that.prototype.showAfterDelay = function(threshold) {
    setTimeout(this.show.bind(this), threshold);
  };
  /**
   * @return {?}
   */
  that.prototype.show = function() {
    if (this._shown) {
      return this;
    }
    var child = this.getRoot();
    this.inform("beforeshow");
    DOM.set(child, "visibility", "hidden");
    DOM.set(child, "overflow", "hidden");
    node.show(child);
    utils.appendContent(this.getInsertParent(), child);
    if (this.updatePosition() !== false) {
      /** @type {boolean} */
      this._shown = true;
      this.inform("show");
      that.inform("show", this);
      if (!this._permanent) {
        setTimeout(function() {
          if (this._shown) {
            scripts.push(this);
          }
        }.bind(this), 0);
      }
    } else {
      node.hide(child);
    }
    DOM.set(child, "visibility", "");
    DOM.set(child, "overflow", "");
    this.inform("aftershow");
    return this;
  };
  /**
   * @return {?}
   */
  that.prototype.hide = function() {
    if (this._hiding || (!this._shown || this.inform("beforehide") === false)) {
      return this;
    }
    /** @type {boolean} */
    this._hiding = true;
    if (this.inform("starthide") !== false) {
      this.finishHide();
    }
    return this;
  };
  /**
   * @param {?} state
   * @return {?}
   */
  that.prototype.conditionShow = function(state) {
    return state ? this.show() : this.hide();
  };
  /**
   * @return {undefined}
   */
  that.prototype.finishHide = function() {
    if (this._shown) {
      if (!this._permanent) {
        jQuery(scripts, this);
      }
      /** @type {boolean} */
      this._hiding = false;
      /** @type {boolean} */
      this._shown = false;
      node.hide(this.getRoot());
      this.inform("hide");
      that.inform("hide", this);
    }
  };
  /**
   * @return {?}
   */
  that.prototype.isShown = function() {
    return this._shown;
  };
  /**
   * @return {?}
   */
  that.prototype.updatePosition = function() {
    return true;
  };
  /**
   * @return {undefined}
   */
  that.prototype.destroy = function() {
    if (this.containsReactComponent) {
      renderer.unmountComponentAtNode(this._reactContainer);
    }
    this.finishHide();
    var elem = this.getRoot();
    utils.remove(elem);
    this.destroyBehaviors();
    this.inform("destroy");
    that.inform("destroy", this);
    data_user.remove(elem, "layer");
    /** @type {null} */
    this._root = this._causalElement = null;
  };
  /**
   * @param {string} entity
   * @param {string} element
   * @return {undefined}
   */
  that.init = function(entity, element) {
    entity.init(element);
  };
  /**
   * @param {Object} listener
   * @param {string} element
   * @return {undefined}
   */
  that.initAndShow = function(listener, element) {
    listener.init(element).show();
  };
  /**
   * @param {Object} content
   * @return {undefined}
   */
  that.show = function(content) {
    content.show();
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} node
   * @return {undefined}
   */
  that.showAfterDelay = function(dataAndEvents, node) {
    dataAndEvents.showAfterDelay(node);
  };
  /**
   * @return {?}
   */
  that.getTopmostLayer = function() {
    return scripts[scripts.length - 1];
  };
  extend(that, el);
  extend(that.prototype, {
    _initialized : false,
    _root : null,
    _shown : false,
    _hiding : false,
    _causalElement : null,
    _reactContainer : null
  });
  event.listen(document.documentElement, "keydown", function(v) {
    if (nv.filterEventTargets(v, "keydown")) {
      /** @type {number} */
      var path = scripts.length - 1;
      for (;path >= 0;path--) {
        if (scripts[path].inform("key", v) === false) {
          return false;
        }
      }
    }
  }, event.Priority.URGENT);
  var actualObject;
  event.listen(document.documentElement, "mousedown", function(resolver) {
    actualObject = resolver.getTarget();
  });
  var itemId;
  event.listen(document.documentElement, "mouseup", function(resolver) {
    itemId = resolver.getTarget();
    Application(function() {
      /** @type {null} */
      actualObject = null;
      /** @type {null} */
      itemId = null;
    });
  });
  event.listen(document.documentElement, "click", function(resolver) {
    var object = actualObject;
    var id = itemId;
    /** @type {null} */
    actualObject = null;
    /** @type {null} */
    itemId = null;
    /** @type {number} */
    var scriptIndex = scripts.length;
    if (!scriptIndex) {
      return;
    }
    var item = resolver.getTarget();
    if (item !== id || item !== object) {
      return;
    }
    if (!utils.contains(document.documentElement, item)) {
      return;
    }
    if (!item.offsetWidth) {
      return;
    }
    if (caseSensitive.byClass(item, "generic_dialog") || caseSensitive.byClass(item, "_3sod")) {
      return;
    }
    for (;scriptIndex--;) {
      var self = scripts[scriptIndex];
      var protoProps = self.getContentRoot();
      if (_.containsIncludingLayers(protoProps, item)) {
        return;
      }
      if (self.inform("blur") === false || self.isShown()) {
        return;
      }
    }
  });
  /** @type {function (Object, Element): undefined} */
  module.exports = that;
}, null);
__d("LayerHideOnTransition", ["PageTransitions", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, bridge, fn) {
  /**
   * @param {Object} data
   * @return {undefined}
   */
  function self(data) {
    /** @type {Object} */
    this._layer = data;
  }
  /**
   * @return {undefined}
   */
  self.prototype.enable = function() {
    /** @type {boolean} */
    this._enabled = true;
    if (!this._subscribed) {
      setTimeout(this._subscribe.bind(this), 0);
    }
  };
  /**
   * @return {undefined}
   */
  self.prototype.disable = function() {
    /** @type {boolean} */
    this._enabled = false;
  };
  /**
   * @return {undefined}
   */
  self.prototype._handler = function() {
    if (this._enabled) {
      this._layer.hide();
    }
    this._subscribe();
  };
  /**
   * @return {undefined}
   */
  self.prototype._subscribe = function() {
    bridge.registerHandler(this._handler.bind(this));
    /** @type {boolean} */
    this._subscribed = true;
  };
  fn(self.prototype, {
    _enabled : false,
    _subscribed : false
  });
  /** @type {function (Object): undefined} */
  context.exports = self;
}, null);
__d("ContextualDialogXUITheme", ["cx"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, opt_attributes) {
  var JsDiff = {
    wrapperClassName : "_53ii",
    arrowDimensions : {
      offset : 12,
      length : 16
    }
  };
  module.exports = JsDiff;
}, null);
