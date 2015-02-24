if (self.CavalryLogger) {
  CavalryLogger.start_js(["VrNMe"]);
}
__d("ChannelConstants", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /** @type {string} */
  var label = "channel/";
  var JsDiff = {
    ON_SHUTDOWN : label + "shutdown",
    ON_INVALID_HISTORY : label + "invalid_history",
    ON_CONFIG : label + "config",
    ON_ENTER_STATE : label + "enter_state",
    ON_EXIT_STATE : label + "exit_state",
    ATTEMPT_RECONNECT : label + "attempt_reconnect",
    RTI_SESSION : label + "new_rti_address",
    SKYWALKER : label + "skywalker",
    OK : "ok",
    ERROR : "error",
    ERROR_MAX : "error_max",
    ERROR_MISSING : "error_missing",
    ERROR_MSG_TYPE : "error_msg_type",
    ERROR_SHUTDOWN : "error_shutdown",
    ERROR_STALE : "error_stale",
    SYS_OWNER : "sys_owner",
    SYS_NONOWNER : "sys_nonowner",
    SYS_ONLINE : "sys_online",
    SYS_OFFLINE : "sys_offline",
    SYS_TIMETRAVEL : "sys_timetravel",
    HINT_AUTH : "shutdown auth",
    HINT_CONN : "shutdown conn",
    HINT_DISABLED : "shutdown disabled",
    HINT_INVALID_STATE : "shutdown invalid state",
    HINT_MAINT : "shutdown maint",
    HINT_UNSUPPORTED : "shutdown unsupported",
    reason_Unknown : 0,
    reason_AsyncError : 1,
    reason_TooLong : 2,
    reason_Refresh : 3,
    reason_RefreshDelay : 4,
    reason_UIRestart : 5,
    reason_NeedSeq : 6,
    reason_PrevFailed : 7,
    reason_IFrameLoadGiveUp : 8,
    reason_IFrameLoadRetry : 9,
    reason_IFrameLoadRetryWorked : 10,
    reason_PageTransitionRetry : 11,
    reason_IFrameLoadMaxSubdomain : 12,
    reason_NoChannelInfo : 13,
    reason_NoChannelHost : 14,
    CAPABILITY_VOIP_INTEROP : 8,
    CAPABILITY_VIDEO : 32,
    FANTAIL_DEBUG : "DEBUG",
    FANTAIL_WARN : "WARN",
    FANTAIL_INFO : "INFO",
    FANTAIL_ERROR : "ERROR",
    SUBSCRIBE : "subscribe",
    UNSUBSCRIBE : "unsubscribe",
    /**
     * @param {string} results
     * @return {?}
     */
    getArbiterType : function(results) {
      return label + "message:" + results;
    },
    /**
     * @param {string} results
     * @return {?}
     */
    getSkywalkerArbiterType : function(results) {
      return label + "skywalker:" + results;
    }
  };
  module.exports = JsDiff;
}, null);
__d("Keys", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, enums, keepData) {
  enums.exports = {
    BACKSPACE : 8,
    TAB : 9,
    RETURN : 13,
    ALT : 18,
    ESC : 27,
    SPACE : 32,
    PAGE_UP : 33,
    PAGE_DOWN : 34,
    END : 35,
    HOME : 36,
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40,
    DELETE : 46,
    COMMA : 188,
    PERIOD : 190,
    A : 65,
    Z : 90,
    ZERO : 48,
    NUMPAD_0 : 96,
    NUMPAD_9 : 105
  };
}, null);
__d("createWarning", ["emptyFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, c) {
  var cl = c.thatReturns;
  module.exports = cl;
}, null);
__d("ReactCurrentOwner", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    current : null
  };
  module.exports = JsDiff;
}, null);
__d("monitorCodeUse", ["BanzaiScuba", "ReactCurrentOwner", "invariant", "forEachObject"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Promise, response, behavior, _callback) {
  /**
   * @param {Object} value
   * @return {?}
   */
  function $(value) {
    /** @type {Array} */
    var result = [];
    for (;value;) {
      result.push(value._instance.constructor.displayName);
      value = value._owner;
    }
    return result;
  }
  /**
   * @param {string} attribute
   * @param {string} value
   * @return {undefined}
   */
  function init(attribute, value) {
    behavior(attribute && !/[^a-z0-9_]/.test(attribute));
    var self = new Promise("core_monitor");
    self.addNormal("event", attribute);
    self.addDenorm("stack", (new Error).stack);
    self.addNormVector("owners", $(response.current));
    _callback(value, function(funcToCall, onComplete, dataAndEvents) {
      self.addNormal(onComplete, funcToCall);
    });
    self.post();
  }
  /** @type {function (string, string): undefined} */
  module.exports = init;
}, null);
__d("warning", ["Bootloader", "createWarning", "monitorCodeUse"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, opt_attributes, $sanitize, value) {
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  function clone(dataAndEvents) {
  }
  var isFunction = $sanitize(value, clone);
  module.exports = isFunction;
}, null);
__d("areEqual", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Object} a
   * @param {Object} b
   * @param {Array} stack
   * @param {Array} bStack
   * @return {?}
   */
  var eq = function(a, b, stack, bStack) {
    if (a === b) {
      return a !== 0 || 1 / a == 1 / b;
    }
    if (a == null || b == null) {
      return false;
    }
    if (typeof a != "object" || typeof b != "object") {
      return false;
    }
    /** @type {function (this:*): string} */
    var toString = Object.prototype.toString;
    /** @type {string} */
    var className = toString.call(a);
    if (className != toString.call(b)) {
      return false;
    }
    switch(className) {
      case "[object String]":
        return a == String(b);
      case "[object Number]":
        return isNaN(a) || isNaN(b) ? false : a == Number(b);
      case "[object Date]":
      ;
      case "[object Boolean]":
        return+a == +b;
      case "[object RegExp]":
        return a.source == b.source && (a.global == b.global && (a.multiline == b.multiline && a.ignoreCase == b.ignoreCase));
    }
    var length = stack.length;
    for (;length--;) {
      if (stack[length] == a) {
        return bStack[length] == b;
      }
    }
    stack.push(a);
    bStack.push(b);
    /** @type {number} */
    var i = 0;
    if (className === "[object Array]") {
      i = a.length;
      if (i !== b.length) {
        return false;
      }
      for (;i--;) {
        if (!eq(a[i], b[i], stack, bStack)) {
          return false;
        }
      }
    } else {
      if (a.constructor !== b.constructor) {
        return false;
      }
      if (a.hasOwnProperty("valueOf") && b.hasOwnProperty("valueOf")) {
        return a.valueOf() == b.valueOf();
      }
      /** @type {Array.<string>} */
      var aKeys = Object.keys(a);
      if (aKeys.length != Object.keys(b).length) {
        return false;
      }
      /** @type {number} */
      var nIdx = 0;
      for (;nIdx < aKeys.length;nIdx++) {
        if (!eq(a[aKeys[nIdx]], b[aKeys[nIdx]], stack, bStack)) {
          return false;
        }
      }
    }
    stack.pop();
    bStack.pop();
    return true;
  };
  /** @type {Array} */
  var eventPath = [];
  /** @type {Array} */
  var out = [];
  /**
   * @param {string} node
   * @param {string} value
   * @return {?}
   */
  var filter = function(node, value) {
    var stack = eventPath.length ? eventPath.pop() : [];
    var copies = out.length ? out.pop() : [];
    var res = eq(node, value, stack, copies);
    /** @type {number} */
    stack.length = 0;
    /** @type {number} */
    copies.length = 0;
    eventPath.push(stack);
    out.push(copies);
    return res;
  };
  /** @type {function (string, string): ?} */
  module.exports = filter;
}, null);
__d("camelizeStyleName", ["camelize"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, mod, keepData, format) {
  /**
   * @param {string} attribute
   * @return {?}
   */
  function exports(attribute) {
    return format(attribute.replace(r20, "ms-"));
  }
  /** @type {RegExp} */
  var r20 = /^-ms-/;
  /** @type {function (string): ?} */
  mod.exports = exports;
}, null);
__d("classWithMixins", ["copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, mod, keepData, extend) {
  /**
   * @param {string} node
   * @param {?} value
   * @return {?}
   */
  function exports(node, value) {
    /**
     * @return {undefined}
     */
    var result = function() {
      node.apply(this, arguments);
    };
    result.prototype = extend(Object.create(node.prototype), value.prototype);
    return result;
  }
  /** @type {function (string, ?): ?} */
  mod.exports = exports;
}, null);
__d("coalesce", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function every() {
    /** @type {number} */
    var i = 0;
    for (;i < arguments.length;++i) {
      if (arguments[i] != null) {
        return arguments[i];
      }
    }
    return null;
  }
  /** @type {function (): ?} */
  module.exports = every;
}, null);
__d("concatMap", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} node
   * @param {string} value
   * @return {?}
   */
  function init(node, value) {
    /** @type {number} */
    var index = -1;
    var length = value.length;
    /** @type {Array} */
    var self = [];
    var a;
    for (;++index < length;) {
      a = node(value[index], index, value);
      if (Array.isArray(a)) {
        Array.prototype.push.apply(self, a);
      } else {
        Array.prototype.push.call(self, a);
      }
    }
    return self;
  }
  /** @type {function (string, string): ?} */
  module.exports = init;
}, null);
__d("debounceCore", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} element
   * @param {string} value
   * @param {?} date
   * @param {string} group
   * @param {string} cb
   * @return {?}
   */
  function set(element, value, date, group, cb) {
    /**
     * @return {undefined}
     */
    function cache() {
      /** @type {Array} */
      var functions = [];
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var argLength = arguments.length;
      for (;i < argLength;i++) {
        functions.push(arguments[i]);
      }
      cache.reset();
      err = group(function() {
        element.apply(date, functions);
      }, value);
    }
    group = group || setTimeout;
    cb = cb || clearTimeout;
    var err;
    /**
     * @return {undefined}
     */
    cache.reset = function() {
      cb(err);
    };
    return cache;
  }
  /** @type {function (string, string, ?, string, string): ?} */
  module.exports = set;
}, null);
__d("focusNode", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} element
   * @return {undefined}
   */
  function after(element) {
    try {
      element.focus();
    } catch (i) {
    }
  }
  /** @type {function (string): undefined} */
  module.exports = after;
}, null);
__d("emptyObject", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {};
  module.exports = JsDiff;
}, null);
__d("escapeJSQuotes", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} node
   * @return {?}
   */
  function parse(node) {
    if (typeof node == "undefined" || (node == null || !node.valueOf())) {
      return "";
    }
    return node.toString().replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/"/g, "\\x22").replace(/'/g, "\\'").replace(/</g, "\\x3c").replace(/>/g, "\\x3e").replace(/&/g, "\\x26");
  }
  /** @type {function (?): ?} */
  module.exports = parse;
}, null);
__d("getVendorPrefixedName", ["ExecutionEnvironment", "camelize", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, callback, $i18next) {
  /**
   * @param {?} name
   * @return {?}
   */
  function lookup(name) {
    /** @type {number} */
    var i = 0;
    for (;i < prefixes.length;i++) {
      var prop = prefixes[i] + name;
      if (prop in node) {
        return prop;
      }
    }
    return null;
  }
  /**
   * @param {string} attribute
   * @return {?}
   */
  function parse(attribute) {
    var value = callback(attribute);
    if (obj[value] === void 0) {
      var name = value.charAt(0).toUpperCase() + value.slice(1);
      if (rparentsprev.test(name)) {
        $i18next(false);
      }
      obj[value] = value in node ? value : lookup(name);
    }
    return obj[value];
  }
  var obj = {};
  /** @type {Array} */
  var prefixes = ["Webkit", "ms", "Moz", "O"];
  /** @type {RegExp} */
  var rparentsprev = new RegExp("^(" + prefixes.join("|") + ")");
  /** @type {(CSSStyleDeclaration|null|{})} */
  var node = dataAndEvents.canUseDOM ? document.createElement("div").style : {};
  /** @type {function (string): ?} */
  module.exports = parse;
}, null);
__d("htmlSpecialChars", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} node
   * @return {?}
   */
  function format(node) {
    if (typeof node == "undefined" || (node === null || !node.toString)) {
      return "";
    }
    if (node === false) {
      return "0";
    } else {
      if (node === true) {
        return "1";
      }
    }
    return node.toString().replace(rclass, "&amp;").replace(r20, "&quot;").replace(rreturn, "&#039;").replace(rLt, "&lt;").replace(badChars, "&gt;");
  }
  /** @type {RegExp} */
  var rclass = /&/g;
  /** @type {RegExp} */
  var rLt = /</g;
  /** @type {RegExp} */
  var badChars = />/g;
  /** @type {RegExp} */
  var r20 = /"/g;
  /** @type {RegExp} */
  var rreturn = /'/g;
  /** @type {function (?): ?} */
  module.exports = format;
}, null);
__d("hyphenateStyleName", ["hyphenate"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} attribute
   * @return {?}
   */
  function map(attribute) {
    return callback(attribute).replace(r20, "-ms-");
  }
  /** @type {RegExp} */
  var r20 = /^ms-/;
  /** @type {function (string): ?} */
  module.exports = map;
}, null);
__d("shield", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} element
   * @param {string} value
   * @return {?}
   */
  function resolve(element, value) {
    if (typeof element != "function") {
      throw new TypeError;
    }
    /** @type {Array.<?>} */
    var bound = Array.prototype.slice.call(arguments, 2);
    return function() {
      return element.apply(value, bound);
    };
  }
  /** @type {function (string, string): ?} */
  module.exports = resolve;
}, null);
__d("BrowserSupportCore", ["getVendorPrefixedName"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, testAllProps) {
  var JsDiff = {
    /**
     * @return {?}
     */
    hasCSSAnimations : function() {
      return!!testAllProps("animationName");
    },
    /**
     * @return {?}
     */
    hasCSSTransforms : function() {
      return!!testAllProps("transform");
    },
    /**
     * @return {?}
     */
    hasCSS3DTransforms : function() {
      return!!testAllProps("perspective");
    },
    /**
     * @return {?}
     */
    hasCSSTransitions : function() {
      return!!testAllProps("transition");
    }
  };
  module.exports = JsDiff;
}, null);
__d("getHashtagRegex", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function parseValue() {
    /** @type {string} */
    var h = "\u00c0-\u00d6" + "\u00d8-\u00f6" + "\u00f8-\u00ff" + "\u0100-\u024f" + "\u0253-\u0254" + "\u0256-\u0257" + "\u0259" + "\u025b" + "\u0263" + "\u0268" + "\u026f" + "\u0272" + "\u0289" + "\u028b" + "\u02bb" + "\u0300-\u036f" + "\u1e00-\u1eff";
    /** @type {string} */
    var mod = "\u0400-\u04ff" + "\u0500-\u0527" + "\u2de0-\u2dff" + "\ua640-\ua69f" + "\u0591-\u05bf" + "\u05c1-\u05c2" + "\u05c4-\u05c5" + "\u05c7" + "\u05d0-\u05ea" + "\u05f0-\u05f4" + "\ufb12-\ufb28" + "\ufb2a-\ufb36" + "\ufb38-\ufb3c" + "\ufb3e" + "\ufb40-\ufb41" + "\ufb43-\ufb44" + "\ufb46-\ufb4f" + "\u0610-\u061a" + "\u0620-\u065f" + "\u066e-\u06d3" + "\u06d5-\u06dc" + "\u06de-\u06e8" + "\u06ea-\u06ef" + "\u06fa-\u06fc" + "\u06ff" + "\u0750-\u077f" + "\u08a0" + "\u08a2-\u08ac" + "\u08e4-\u08fe" +
    "\ufb50-\ufbb1" + "\ufbd3-\ufd3d" + "\ufd50-\ufd8f" + "\ufd92-\ufdc7" + "\ufdf0-\ufdfb" + "\ufe70-\ufe74" + "\ufe76-\ufefc" + "\u200c-\u200c" + "\u0e01-\u0e3a" + "\u0e40-\u0e4e" + "\u1100-\u11ff" + "\u3130-\u3185" + "\ua960-\ua97f" + "\uac00-\ud7af" + "\ud7b0-\ud7ff" + "\uffa1-\uffdc";
    /** @type {function (...[number]): string} */
    var fromCode = String.fromCharCode;
    /** @type {string} */
    var min = "\u30a1-\u30fa\u30fc-\u30fe" + "\uff66-\uff9f" + "\uff10-\uff19\uff21-\uff3a" + "\uff41-\uff5a" + "\u3041-\u3096\u3099-\u309e" + "\u3400-\u4dbf" + "\u4e00-\u9fff" + fromCode(173824) + "-" + fromCode(177983) + fromCode(177984) + "-" + fromCode(178207) + fromCode(194560) + "-" + fromCode(195103) + "\u3003\u3005\u303b";
    /** @type {string} */
    var add = h + mod + min;
    /** @type {string} */
    var id = "A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6" + "\u00f8-\u0241\u0250-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ee\u037a\u0386" + "\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03ce\u03d0-\u03f5\u03f7-\u0481" + "\u048a-\u04ce\u04d0-\u04f9\u0500-\u050f\u0531-\u0556\u0559\u0561-\u0587" + "\u05d0-\u05ea\u05f0-\u05f2\u0621-\u063a\u0640-\u064a\u066e-\u066f" + "\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710" + "\u0712-\u072f\u074d-\u076d\u0780-\u07a5\u07b1\u0904-\u0939\u093d\u0950" +
    "\u0958-\u0961\u097d\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0" + "\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1" + "\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33" + "\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d" + "\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd" + "\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30" + "\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83" +
    "\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f" + "\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0c05-\u0c0c\u0c0e-\u0c10" + "\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c60-\u0c61\u0c85-\u0c8c" + "\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde" + "\u0ce0-\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39" + "\u0d60-\u0d61\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6" + "\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84\u0e87-\u0e88" +
    "\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7" + "\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6" + "\u0edc-\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6a\u0f88-\u0f8b\u1000-\u1021" + "\u1023-\u1027\u1029-\u102a\u1050-\u1055\u10a0-\u10c5\u10d0-\u10fa\u10fc" + "\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d" + "\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0" + "\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310" +
    "\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c" + "\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711" + "\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7" + "\u17dc\u1820-\u1877\u1880-\u18a8\u1900-\u191c\u1950-\u196d\u1970-\u1974" + "\u1980-\u19a9\u19c1-\u19c7\u1a00-\u1a16\u1d00-\u1dbf\u1e00-\u1e9b" + "\u1ea0-\u1ef9\u1f00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d" + "\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc" +
    "\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec" + "\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u2094\u2102\u2107" + "\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d" + "\u212f-\u2131\u2133-\u2139\u213c-\u213f\u2145-\u2149\u2c00-\u2c2e" + "\u2c30-\u2c5e\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96" + "\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6" + "\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3006\u3031-\u3035" +
    "\u303b-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff" + "\u3105-\u312c\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5" + "\u4e00-\u9fbb\ua000-\ua48c\ua800-\ua801\ua803-\ua805\ua807-\ua80a" + "\ua80c-\ua822\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9" + "\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c" + "\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f" + "\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a" +
    "\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7" + "\uffda-\uffdc";
    /** @type {string} */
    var _ = "\u0300-\u036f\u0483-\u0486\u0591-\u05b9\u05bb-\u05bd\u05bf" + "\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u0615\u064b-\u065e\u0670" + "\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a" + "\u07a6-\u07b0\u0901-\u0903\u093c\u093e-\u094d\u0951-\u0954\u0962-\u0963" + "\u0981-\u0983\u09bc\u09be-\u09c4\u09c7-\u09c8\u09cb-\u09cd\u09d7" + "\u09e2-\u09e3\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d" + "\u0a70-\u0a71\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd" +
    "\u0ae2-\u0ae3\u0b01-\u0b03\u0b3c\u0b3e-\u0b43\u0b47-\u0b48\u0b4b-\u0b4d" + "\u0b56-\u0b57\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7" + "\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56" + "\u0c82-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6" + "\u0d02-\u0d03\u0d3e-\u0d43\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d82-\u0d83" + "\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3\u0e31\u0e34-\u0e3a" + "\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19" +
    "\u0f35\u0f37\u0f39\u0f3e-\u0f3f\u0f71-\u0f84\u0f86-\u0f87\u0f90-\u0f97" + "\u0f99-\u0fbc\u0fc6\u102c-\u1032\u1036-\u1039\u1056-\u1059\u135f" + "\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b6-\u17d3\u17dd" + "\u180b-\u180d\u18a9\u1920-\u192b\u1930-\u193b\u19b0-\u19c0\u19c8-\u19c9" + "\u1a17-\u1a1b\u1dc0-\u1dc3\u20d0-\u20dc\u20e1\u20e5-\u20eb\u302a-\u302f" + "\u3099-\u309a\ua802\ua806\ua80b\ua823-\ua827\ufb1e\ufe00-\ufe0f" + "\ufe20-\ufe23";
    /** @type {string} */
    var check = "0-9\u0660-\u0669\u06f0-\u06f9\u0966-\u096f\u09e6-\u09ef" + "\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f" + "\u0ce6-\u0cef\u0d66-\u0d6f\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29" + "\u1040-\u1049\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9" + "\uff10-\uff19";
    /** @type {string} */
    var className = id + _ + add;
    /** @type {string} */
    var _stagger = check + "_";
    /** @type {string} */
    var staggerClassName = className + _stagger;
    /** @type {string} */
    var g = "[" + className + "]";
    /** @type {string} */
    var b = "[" + staggerClassName + "]";
    /** @type {string} */
    var u = "^|$|[^&/" + staggerClassName + "]";
    /** @type {string} */
    var v = "[#\\uFF03]";
    /** @type {string} */
    var keyops = "(" + u + ")(" + v + ")(" + b + "*" + g + b + "*)";
    return new RegExp(keyops, "ig");
  }
  /** @type {function (): ?} */
  module.exports = parseValue;
}, null);
__d("DOMProperty", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, mod, keepData, $sanitize) {
  /**
   * @param {number} data
   * @param {number} rsv
   * @return {?}
   */
  function fire(data, rsv) {
    return(data & rsv) === rsv;
  }
  var HAS_OVERLOADED_BOOLEAN_VALUE = {
    MUST_USE_ATTRIBUTE : 1,
    MUST_USE_PROPERTY : 2,
    HAS_SIDE_EFFECTS : 4,
    HAS_BOOLEAN_VALUE : 8,
    HAS_NUMERIC_VALUE : 16,
    HAS_POSITIVE_NUMERIC_VALUE : 32 | 16,
    HAS_OVERLOADED_BOOLEAN_VALUE : 64,
    /**
     * @param {Object} domPropertyConfig
     * @return {undefined}
     */
    injectDOMPropertyConfig : function(domPropertyConfig) {
      var testSource = domPropertyConfig.Properties || {};
      var meta = domPropertyConfig.DOMAttributeNames || {};
      var cfg = domPropertyConfig.DOMPropertyNames || {};
      var old = domPropertyConfig.DOMMutationMethods || {};
      if (domPropertyConfig.isCustomAttribute) {
        exports._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
      }
      var name;
      for (name in testSource) {
        $sanitize(!exports.isStandardName.hasOwnProperty(name));
        /** @type {boolean} */
        exports.isStandardName[name] = true;
        /** @type {string} */
        var file = name.toLowerCase();
        /** @type {string} */
        exports.getPossibleStandardName[file] = name;
        if (meta.hasOwnProperty(name)) {
          var prop = meta[name];
          /** @type {string} */
          exports.getPossibleStandardName[prop] = name;
          exports.getAttributeName[name] = prop;
        } else {
          /** @type {string} */
          exports.getAttributeName[name] = file;
        }
        exports.getPropertyName[name] = cfg.hasOwnProperty(name) ? cfg[name] : name;
        if (old.hasOwnProperty(name)) {
          exports.getMutationMethod[name] = old[name];
        } else {
          /** @type {null} */
          exports.getMutationMethod[name] = null;
        }
        var memory = testSource[name];
        exports.mustUseAttribute[name] = fire(memory, HAS_OVERLOADED_BOOLEAN_VALUE.MUST_USE_ATTRIBUTE);
        exports.mustUseProperty[name] = fire(memory, HAS_OVERLOADED_BOOLEAN_VALUE.MUST_USE_PROPERTY);
        exports.hasSideEffects[name] = fire(memory, HAS_OVERLOADED_BOOLEAN_VALUE.HAS_SIDE_EFFECTS);
        exports.hasBooleanValue[name] = fire(memory, HAS_OVERLOADED_BOOLEAN_VALUE.HAS_BOOLEAN_VALUE);
        exports.hasNumericValue[name] = fire(memory, HAS_OVERLOADED_BOOLEAN_VALUE.HAS_NUMERIC_VALUE);
        exports.hasPositiveNumericValue[name] = fire(memory, HAS_OVERLOADED_BOOLEAN_VALUE.HAS_POSITIVE_NUMERIC_VALUE);
        exports.hasOverloadedBooleanValue[name] = fire(memory, HAS_OVERLOADED_BOOLEAN_VALUE.HAS_OVERLOADED_BOOLEAN_VALUE);
        $sanitize(!exports.mustUseAttribute[name] || !exports.mustUseProperty[name]);
        $sanitize(exports.mustUseProperty[name] || !exports.hasSideEffects[name]);
        $sanitize(!!exports.hasBooleanValue[name] + !!exports.hasNumericValue[name] + !!exports.hasOverloadedBooleanValue[name] <= 1);
      }
    }
  };
  var cache = {};
  var exports = {
    ID_ATTRIBUTE_NAME : "data-reactid",
    isStandardName : {},
    getPossibleStandardName : {},
    getAttributeName : {},
    getPropertyName : {},
    getMutationMethod : {},
    mustUseAttribute : {},
    mustUseProperty : {},
    hasSideEffects : {},
    hasBooleanValue : {},
    hasNumericValue : {},
    hasPositiveNumericValue : {},
    hasOverloadedBooleanValue : {},
    _isCustomAttributeFunctions : [],
    /**
     * @param {string} keepData
     * @return {?}
     */
    isCustomAttribute : function(keepData) {
      /** @type {number} */
      var i = 0;
      for (;i < exports._isCustomAttributeFunctions.length;i++) {
        var seg = exports._isCustomAttributeFunctions[i];
        if (seg(keepData)) {
          return true;
        }
      }
      return false;
    },
    /**
     * @param {Function} tag
     * @param {string} prop
     * @return {?}
     */
    getDefaultValueForProperty : function(tag, prop) {
      var result = cache[tag];
      var originalEvent;
      if (!result) {
        cache[tag] = result = {};
      }
      if (!(prop in result)) {
        /** @type {Element} */
        originalEvent = document.createElement(tag);
        result[prop] = originalEvent[prop];
      }
      return result[prop];
    },
    injection : HAS_OVERLOADED_BOOLEAN_VALUE
  };
  mod.exports = exports;
}, null);
__d("HTMLDOMPropertyConfig-upstream", ["DOMProperty", "ExecutionEnvironment"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, dataAndEvents, deepDataAndEvents) {
  var value = dataAndEvents.injection.MUST_USE_ATTRIBUTE;
  var gid = dataAndEvents.injection.MUST_USE_PROPERTY;
  var defer = dataAndEvents.injection.HAS_BOOLEAN_VALUE;
  var flags = dataAndEvents.injection.HAS_SIDE_EFFECTS;
  var minIdx = dataAndEvents.injection.HAS_NUMERIC_VALUE;
  var span = dataAndEvents.injection.HAS_POSITIVE_NUMERIC_VALUE;
  var download = dataAndEvents.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
  var raw;
  if (deepDataAndEvents.canUseDOM) {
    /** @type {(DOMImplementation|null)} */
    var implementation = document.implementation;
    /** @type {(boolean|null)} */
    raw = implementation && (implementation.hasFeature && implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
  }
  var JsDiff = {
    isCustomAttribute : RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
    Properties : {
      accept : null,
      acceptCharset : null,
      accessKey : null,
      action : null,
      allowFullScreen : value | defer,
      allowTransparency : value,
      alt : null,
      async : defer,
      autoComplete : null,
      autoPlay : defer,
      cellPadding : null,
      cellSpacing : null,
      charSet : value,
      checked : gid | defer,
      classID : value,
      className : raw ? value : gid,
      cols : value | span,
      colSpan : null,
      content : null,
      contentEditable : null,
      contextMenu : value,
      controls : gid | defer,
      coords : null,
      crossOrigin : null,
      data : null,
      dateTime : value,
      defer : defer,
      dir : null,
      disabled : value | defer,
      download : download,
      draggable : null,
      encType : null,
      form : value,
      formAction : value,
      formEncType : value,
      formMethod : value,
      formNoValidate : defer,
      formTarget : value,
      frameBorder : value,
      headers : null,
      height : value,
      hidden : value | defer,
      href : null,
      hrefLang : null,
      htmlFor : null,
      httpEquiv : null,
      icon : null,
      id : gid,
      label : null,
      lang : null,
      list : value,
      loop : gid | defer,
      manifest : value,
      marginHeight : null,
      marginWidth : null,
      max : null,
      maxLength : value,
      media : value,
      mediaGroup : null,
      method : null,
      min : null,
      multiple : gid | defer,
      muted : gid | defer,
      name : null,
      noValidate : defer,
      open : defer,
      pattern : null,
      placeholder : null,
      poster : null,
      preload : null,
      radioGroup : null,
      readOnly : gid | defer,
      rel : null,
      required : defer,
      role : value,
      rows : value | span,
      rowSpan : null,
      sandbox : null,
      scope : null,
      scrolling : null,
      seamless : value | defer,
      selected : gid | defer,
      shape : null,
      size : value | span,
      sizes : value,
      span : span,
      spellCheck : null,
      src : null,
      srcDoc : gid,
      srcSet : value,
      start : minIdx,
      step : null,
      style : null,
      tabIndex : null,
      target : null,
      title : null,
      type : null,
      useMap : null,
      value : gid | flags,
      width : value,
      wmode : value,
      autoCapitalize : null,
      autoCorrect : null,
      itemProp : value,
      itemScope : value | defer,
      itemType : value,
      itemID : value,
      itemRef : value,
      property : null
    },
    DOMAttributeNames : {
      acceptCharset : "accept-charset",
      className : "class",
      htmlFor : "for",
      httpEquiv : "http-equiv"
    },
    DOMPropertyNames : {
      autoCapitalize : "autocapitalize",
      autoComplete : "autocomplete",
      autoCorrect : "autocorrect",
      autoFocus : "autofocus",
      autoPlay : "autoplay",
      encType : "encoding",
      hrefLang : "hreflang",
      radioGroup : "radiogroup",
      spellCheck : "spellcheck",
      srcDoc : "srcdoc",
      srcSet : "srcset"
    }
  };
  module.exports = JsDiff;
}, null);
__d("HTMLDOMPropertyConfig", ["HTMLDOMPropertyConfig-upstream", "DOMProperty"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, Two, dataAndEvents) {
  var ajaxify = dataAndEvents.injection.MUST_USE_ATTRIBUTE;
  Two.Properties.ajaxify = ajaxify;
  module.exports = Two;
}, null);
__d("Object.assign", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, cached, keepData) {
  cached.exports = Object.assign;
}, null);
__d("ReactContext", ["Object.assign", "emptyObject", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, getPage, targetX, opt_attributes) {
  /** @type {boolean} */
  var j = false;
  var self = {
    current : targetX,
    /**
     * @param {?} newOptions
     * @param {?} scopedCallback
     * @return {?}
     */
    withContext : function(newOptions, scopedCallback) {
      var result;
      var current = self.current;
      self.current = getPage({}, current, newOptions);
      try {
        result = scopedCallback();
      } finally {
        self.current = current;
      }
      return result;
    }
  };
  context.exports = self;
}, null);
__d("ReactElement", ["ReactContext", "ReactCurrentOwner", "Object.assign", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $route, stream, opt_attributes, next) {
  /**
   * @param {?} namespace
   * @param {string} name
   * @return {undefined}
   */
  function Storage(namespace, name) {
    Object.defineProperty(namespace, name, {
      configurable : false,
      enumerable : true,
      /**
       * @return {?}
       */
      get : function() {
        if (!this._store) {
          return null;
        }
        return this._store[name];
      },
      /**
       * @param {?} text
       * @return {undefined}
       */
      set : function(text) {
        next(false, "Don't set the %s property of the React element. Instead, " + "specify the correct value when initially creating the element.", name);
        this._store[name] = text;
      }
    });
  }
  /**
   * @param {?} namespace
   * @return {undefined}
   */
  function call(namespace) {
    try {
      var pointerHook = {
        props : true
      };
      var rvar;
      for (rvar in pointerHook) {
        Storage(namespace, rvar);
      }
      /** @type {boolean} */
      m = true;
    } catch (q) {
    }
  }
  var reserved = {
    key : true,
    ref : true
  };
  /** @type {boolean} */
  var m = false;
  /**
   * @param {string} node
   * @param {string} value
   * @param {string} expr
   * @param {string} cut
   * @param {Object} context
   * @param {Object} not
   * @return {undefined}
   */
  var filter = function(node, value, expr, cut, context, not) {
    /** @type {string} */
    this.type = node;
    /** @type {string} */
    this.key = value;
    /** @type {string} */
    this.ref = expr;
    /** @type {string} */
    this._owner = cut;
    /** @type {Object} */
    this._context = context;
    /** @type {Object} */
    this.props = not;
  };
  filter.prototype = {
    _isReactElement : true
  };
  /**
   * @param {Function} tag
   * @param {Object} opt
   * @param {?} children
   * @return {?}
   */
  filter.createElement = function(tag, opt, children) {
    var i;
    var cfg = {};
    /** @type {null} */
    var u = null;
    /** @type {null} */
    var v = null;
    if (opt != null) {
      v = opt.ref === void 0 ? null : opt.ref;
      /** @type {(null|string)} */
      u = opt.key === void 0 ? null : "" + opt.key;
      for (i in opt) {
        if (opt.hasOwnProperty(i) && !reserved.hasOwnProperty(i)) {
          cfg[i] = opt[i];
        }
      }
    }
    /** @type {number} */
    var indents = arguments.length - 2;
    if (indents === 1) {
      cfg.children = children;
    } else {
      if (indents > 1) {
        /** @type {Array} */
        var args = Array(indents);
        /** @type {number} */
        var _i = 0;
        for (;_i < indents;_i++) {
          args[_i] = arguments[_i + 2];
        }
        /** @type {Array} */
        cfg.children = args;
      }
    }
    if (tag && tag.defaultProps) {
      var save = tag.defaultProps;
      for (i in save) {
        if (typeof cfg[i] === "undefined") {
          cfg[i] = save[i];
        }
      }
    }
    return new filter(tag, u, v, stream.current, $route.current, cfg);
  };
  /**
   * @param {string} type
   * @return {?}
   */
  filter.createFactory = function(type) {
    var node = filter.createElement.bind(null, type);
    /** @type {string} */
    node.type = type;
    return node;
  };
  /**
   * @param {Object} object
   * @param {?} dataAndEvents
   * @return {?}
   */
  filter.cloneAndReplaceProps = function(object, dataAndEvents) {
    var cloneAndReplaceProps = new filter(object.type, object.key, object.ref, object._owner, object._context, dataAndEvents);
    return cloneAndReplaceProps;
  };
  /**
   * @param {Object} object
   * @return {?}
   */
  filter.isValidElement = function(object) {
    /** @type {boolean} */
    var isValidElement = !!(object && object._isReactElement);
    return isValidElement;
  };
  /** @type {function (string, string, string, string, Object, Object): undefined} */
  module.exports = filter;
}, null);
__d("ReactFragment", ["ReactElement", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, opt_attributes, matcherFunction) {
  var Class = {
    /**
     * @param {string} node
     * @return {?}
     */
    create : function(node) {
      return node;
    },
    /**
     * @param {Object} value
     * @return {?}
     */
    extract : function(value) {
      return value;
    },
    /**
     * @param {Object} fun
     * @return {?}
     */
    extractIfFragment : function(fun) {
      return fun;
    }
  };
  module.exports = Class;
}, null);
__d("ClientReactRootIndex", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /** @type {number} */
  var g = 0;
  var JsDiff = {
    /**
     * @return {?}
     */
    createReactRootIndex : function() {
      return g++;
    }
  };
  module.exports = JsDiff;
}, null);
__d("EventConstants", ["keyMirror"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $sanitize) {
  var PropagationPhases = $sanitize({
    bubbled : null,
    captured : null
  });
  var topLevelTypes = $sanitize({
    topBlur : null,
    topChange : null,
    topClick : null,
    topCompositionEnd : null,
    topCompositionStart : null,
    topCompositionUpdate : null,
    topContextMenu : null,
    topCopy : null,
    topCut : null,
    topDoubleClick : null,
    topDrag : null,
    topDragEnd : null,
    topDragEnter : null,
    topDragExit : null,
    topDragLeave : null,
    topDragOver : null,
    topDragStart : null,
    topDrop : null,
    topError : null,
    topFocus : null,
    topInput : null,
    topKeyDown : null,
    topKeyPress : null,
    topKeyUp : null,
    topLoad : null,
    topMouseDown : null,
    topMouseMove : null,
    topMouseOut : null,
    topMouseOver : null,
    topMouseUp : null,
    topPaste : null,
    topReset : null,
    topScroll : null,
    topSelectionChange : null,
    topSubmit : null,
    topTextInput : null,
    topTouchCancel : null,
    topTouchEnd : null,
    topTouchMove : null,
    topTouchStart : null,
    topWheel : null
  });
  var JsDiff = {
    topLevelTypes : topLevelTypes,
    PropagationPhases : PropagationPhases
  };
  module.exports = JsDiff;
}, null);
__d("EventPluginRegistry", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $) {
  /**
   * @return {undefined}
   */
  function _init() {
    if (!reserved) {
      return;
    }
    var i;
    for (i in obj) {
      var data = obj[i];
      var name = reserved.indexOf(i);
      $(name > -1);
      if (api.plugins[name]) {
        continue;
      }
      $(data.extractEvents);
      api.plugins[name] = data;
      var types = data.eventTypes;
      var type;
      for (type in types) {
        $(init(types[type], data, type));
      }
    }
  }
  /**
   * @param {Object} dispatchConfig
   * @param {?} reporter
   * @param {string} method
   * @return {?}
   */
  function init(dispatchConfig, reporter, method) {
    $(!api.eventNameDispatchConfigs.hasOwnProperty(method));
    /** @type {Object} */
    api.eventNameDispatchConfigs[method] = dispatchConfig;
    var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
    if (phasedRegistrationNames) {
      var phaseName;
      for (phaseName in phasedRegistrationNames) {
        if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
          var name = phasedRegistrationNames[phaseName];
          define(name, reporter, method);
        }
      }
      return true;
    } else {
      if (dispatchConfig.registrationName) {
        define(dispatchConfig.registrationName, reporter, method);
        return true;
      }
    }
    return false;
  }
  /**
   * @param {?} moduleName
   * @param {?} exports
   * @param {string} name
   * @return {undefined}
   */
  function define(moduleName, exports, name) {
    $(!api.registrationNameModules[moduleName]);
    api.registrationNameModules[moduleName] = exports;
    api.registrationNameDependencies[moduleName] = exports.eventTypes[name].dependencies;
  }
  /** @type {null} */
  var reserved = null;
  var obj = {};
  var api = {
    plugins : [],
    eventNameDispatchConfigs : {},
    registrationNameModules : {},
    registrationNameDependencies : {},
    /**
     * @param {?} scope
     * @return {undefined}
     */
    injectEventPluginOrder : function(scope) {
      $(!reserved);
      /** @type {Array.<?>} */
      reserved = Array.prototype.slice.call(scope);
      _init();
    },
    /**
     * @param {Object} properties
     * @return {undefined}
     */
    injectEventPluginsByName : function(properties) {
      /** @type {boolean} */
      var o = false;
      var prop;
      for (prop in properties) {
        if (!properties.hasOwnProperty(prop)) {
          continue;
        }
        var value = properties[prop];
        if (!obj.hasOwnProperty(prop) || obj[prop] !== value) {
          $(!obj[prop]);
          obj[prop] = value;
          /** @type {boolean} */
          o = true;
        }
      }
      if (o) {
        _init();
      }
    },
    /**
     * @param {Object} event
     * @return {?}
     */
    getPluginModuleForEvent : function(event) {
      var dispatchConfig = event.dispatchConfig;
      if (dispatchConfig.registrationName) {
        return api.registrationNameModules[dispatchConfig.registrationName] || null;
      }
      var phase;
      for (phase in dispatchConfig.phasedRegistrationNames) {
        if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
          continue;
        }
        var PluginModule = api.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
        if (PluginModule) {
          return PluginModule;
        }
      }
      return null;
    },
    /**
     * @return {undefined}
     */
    _resetEventPlugins : function() {
      /** @type {null} */
      reserved = null;
      var prop;
      for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          delete obj[prop];
        }
      }
      /** @type {number} */
      api.plugins.length = 0;
      var cache = api.eventNameDispatchConfigs;
      var id;
      for (id in cache) {
        if (cache.hasOwnProperty(id)) {
          delete cache[id];
        }
      }
      var files = api.registrationNameModules;
      var fileName;
      for (fileName in files) {
        if (files.hasOwnProperty(fileName)) {
          delete files[fileName];
        }
      }
    }
  };
  module.exports = api;
}, null);
__d("EventPluginUtils", ["EventConstants", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, proceed) {
  /**
   * @param {?} topLevelType
   * @return {?}
   */
  function isEndish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseUp || (topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel);
  }
  /**
   * @param {?} topLevelType
   * @return {?}
   */
  function isMoveish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
  }
  /**
   * @param {?} topLevelType
   * @return {?}
   */
  function isStartish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
  }
  /**
   * @param {string} event
   * @param {?} callback
   * @return {undefined}
   */
  function check(event, callback) {
    var results = event._dispatchListeners;
    var obj = event._dispatchIDs;
    if (Array.isArray(results)) {
      /** @type {number} */
      var i = 0;
      for (;i < results.length;i++) {
        if (event.isPropagationStopped()) {
          break;
        }
        callback(event, results[i], obj[i]);
      }
    } else {
      if (results) {
        callback(event, results, obj);
      }
    }
  }
  /**
   * @param {Object} obj
   * @param {?} callback
   * @param {?} key
   * @return {?}
   */
  function set(obj, callback, key) {
    obj.currentTarget = editor.Mount.getNode(key);
    var values = callback(obj, key);
    /** @type {null} */
    obj.currentTarget = null;
    return values;
  }
  /**
   * @param {string} event
   * @param {?} cb
   * @return {undefined}
   */
  function end(event, cb) {
    check(event, cb);
    /** @type {null} */
    event._dispatchListeners = null;
    /** @type {null} */
    event._dispatchIDs = null;
  }
  /**
   * @param {string} event
   * @return {?}
   */
  function execute(event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchIDs = event._dispatchIDs;
    if (Array.isArray(dispatchListeners)) {
      /** @type {number} */
      var i = 0;
      for (;i < dispatchListeners.length;i++) {
        if (event.isPropagationStopped()) {
          break;
        }
        if (dispatchListeners[i](event, dispatchIDs[i])) {
          return dispatchIDs[i];
        }
      }
    } else {
      if (dispatchListeners) {
        if (dispatchListeners(event, dispatchIDs)) {
          return dispatchIDs;
        }
      }
    }
    return null;
  }
  /**
   * @param {string} event
   * @return {?}
   */
  function poll(event) {
    var events = execute(event);
    /** @type {null} */
    event._dispatchIDs = null;
    /** @type {null} */
    event._dispatchListeners = null;
    return events;
  }
  /**
   * @param {?} event
   * @return {?}
   */
  function next(event) {
    var dispatchListener = event._dispatchListeners;
    var dispatchID = event._dispatchIDs;
    proceed(!Array.isArray(dispatchListener));
    var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
    /** @type {null} */
    event._dispatchListeners = null;
    /** @type {null} */
    event._dispatchIDs = null;
    return res;
  }
  /**
   * @param {?} event
   * @return {?}
   */
  function f2(event) {
    return!!event._dispatchListeners;
  }
  var editor = {
    Mount : null,
    /**
     * @param {(boolean|string)} funcToCall
     * @return {undefined}
     */
    injectMount : function(funcToCall) {
      /** @type {(boolean|string)} */
      editor.Mount = funcToCall;
    }
  };
  var topLevelTypes = dataAndEvents.topLevelTypes;
  var n;
  var JsDiff = {
    /** @type {function (?): ?} */
    isEndish : isEndish,
    /** @type {function (?): ?} */
    isMoveish : isMoveish,
    /** @type {function (?): ?} */
    isStartish : isStartish,
    /** @type {function (?): ?} */
    executeDirectDispatch : next,
    /** @type {function (Object, ?, ?): ?} */
    executeDispatch : set,
    /** @type {function (string, ?): undefined} */
    executeDispatchesInOrder : end,
    /** @type {function (string): ?} */
    executeDispatchesInOrderStopAtTrue : poll,
    /** @type {function (?): ?} */
    hasDispatches : f2,
    injection : editor,
    useTouchEvents : false
  };
  module.exports = JsDiff;
}, null);
__d("accumulateInto", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, behavior) {
  /**
   * @param {string} element
   * @param {string} value
   * @return {?}
   */
  function init(element, value) {
    behavior(value != null);
    if (element == null) {
      return value;
    }
    /** @type {boolean} */
    var elementRect = Array.isArray(element);
    /** @type {boolean} */
    var isFunction = Array.isArray(value);
    if (elementRect && isFunction) {
      element.push.apply(element, value);
      return element;
    }
    if (elementRect) {
      element.push(value);
      return element;
    }
    if (isFunction) {
      return[element].concat(value);
    }
    return[element, value];
  }
  /** @type {function (string, string): ?} */
  module.exports = init;
}, null);
__d("forEachAccumulated", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} element
   * @param {Function} value
   * @param {(Error|string)} scope
   * @return {undefined}
   */
  var filter = function(element, value, scope) {
    if (Array.isArray(element)) {
      element.forEach(value, scope);
    } else {
      if (element) {
        value.call(scope, element);
      }
    }
  };
  /** @type {function (string, Function, (Error|string)): undefined} */
  module.exports = filter;
}, null);
__d("EventPluginHub", ["EventPluginRegistry", "EventPluginUtils", "accumulateInto", "forEachAccumulated", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, EventPluginRegistry, EventPluginUtils, callback, fire, ready) {
  /**
   * @return {undefined}
   */
  function completed() {
    var bup = b && (b.traverseTwoPhase && b.traverseEnterLeave);
    ready(bup);
  }
  var map = {};
  /** @type {null} */
  var basis = null;
  /**
   * @param {Object} event
   * @return {undefined}
   */
  var next = function(event) {
    if (event) {
      var executeDispatch = EventPluginUtils.executeDispatch;
      var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
      if (PluginModule && PluginModule.executeDispatch) {
        executeDispatch = PluginModule.executeDispatch;
      }
      EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);
      if (!event.isPersistent()) {
        event.constructor.release(event);
      }
    }
  };
  /** @type {null} */
  var b = null;
  var JsDiff = {
    injection : {
      injectMount : EventPluginUtils.injection.injectMount,
      /**
       * @param {?} shallow
       * @return {undefined}
       */
      injectInstanceHandle : function(shallow) {
        b = shallow;
      },
      /**
       * @return {?}
       */
      getInstanceHandle : function() {
        return b;
      },
      injectEventPluginOrder : EventPluginRegistry.injectEventPluginOrder,
      injectEventPluginsByName : EventPluginRegistry.injectEventPluginsByName
    },
    eventNameDispatchConfigs : EventPluginRegistry.eventNameDispatchConfigs,
    registrationNameModules : EventPluginRegistry.registrationNameModules,
    /**
     * @param {?} path
     * @param {?} id
     * @param {?} source
     * @return {undefined}
     */
    putListener : function(path, id, source) {
      ready(!source || typeof source === "function");
      var scripts = map[id] || (map[id] = {});
      scripts[path] = source;
    },
    /**
     * @param {?} id
     * @param {?} elt
     * @return {?}
     */
    getListener : function(id, elt) {
      var item = map[elt];
      return item && item[id];
    },
    /**
     * @param {?} part
     * @param {?} att
     * @return {undefined}
     */
    deleteListener : function(part, att) {
      var val = map[att];
      if (val) {
        delete val[part];
      }
    },
    /**
     * @param {?} id
     * @return {undefined}
     */
    deleteAllListeners : function(id) {
      var letter;
      for (letter in map) {
        delete map[letter][id];
      }
    },
    /**
     * @param {string} topLevelType
     * @param {string} name
     * @param {Error} inplace
     * @param {Event} nativeEvent
     * @return {?}
     */
    extractEvents : function(topLevelType, name, inplace, nativeEvent) {
      var basis;
      var plugins = EventPluginRegistry.plugins;
      /** @type {number} */
      var i = 0;
      var len = plugins.length;
      for (;i < len;i++) {
        var possiblePlugin = plugins[i];
        if (possiblePlugin) {
          var events = possiblePlugin.extractEvents(topLevelType, name, inplace, nativeEvent);
          if (events) {
            basis = callback(basis, events);
          }
        }
      }
      return basis;
    },
    /**
     * @param {?} events
     * @return {undefined}
     */
    enqueueEvents : function(events) {
      if (events) {
        basis = callback(basis, events);
      }
    },
    /**
     * @return {undefined}
     */
    processEventQueue : function() {
      var memory = basis;
      /** @type {null} */
      basis = null;
      fire(memory, next);
      ready(!basis);
    },
    /**
     * @return {undefined}
     */
    __purge : function() {
      map = {};
    },
    /**
     * @return {?}
     */
    __getListenerBank : function() {
      return map;
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactEventEmitterMixin", ["EventPluginHub"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, EventPluginHub) {
  /**
   * @param {?} events
   * @return {undefined}
   */
  function eachEvent(events) {
    EventPluginHub.enqueueEvents(events);
    EventPluginHub.processEventQueue();
  }
  var JsDiff = {
    /**
     * @param {string} topLevelType
     * @param {string} optgroup
     * @param {Error} inplace
     * @param {Event} nativeEvent
     * @return {undefined}
     */
    handleTopLevel : function(topLevelType, optgroup, inplace, nativeEvent) {
      var events = EventPluginHub.extractEvents(topLevelType, optgroup, inplace, nativeEvent);
      eachEvent(events);
    }
  };
  module.exports = JsDiff;
}, null);
__d("ViewportMetrics", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var ret = {
    currentScrollLeft : 0,
    currentScrollTop : 0,
    /**
     * @param {?} scrollPosition
     * @return {undefined}
     */
    refreshScrollValues : function(scrollPosition) {
      ret.currentScrollLeft = scrollPosition.x;
      ret.currentScrollTop = scrollPosition.y;
    }
  };
  module.exports = ret;
}, null);
__d("isEventSupported", ["ExecutionEnvironment"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents) {
  /**
   * @param {string} node
   * @param {string} value
   * @return {?}
   */
  function add(node, value) {
    if (!dataAndEvents.canUseDOM || value && !("addEventListener" in document)) {
      return false;
    }
    /** @type {string} */
    var name = "on" + node;
    /** @type {boolean} */
    var ret = name in document;
    if (!ret) {
      /** @type {Element} */
      var frame = document.createElement("div");
      frame.setAttribute(name, "return;");
      /** @type {boolean} */
      ret = typeof frame[name] === "function";
    }
    if (!ret && (dom && node === "wheel")) {
      /** @type {boolean} */
      ret = document.implementation.hasFeature("Events.wheel", "3.0");
    }
    return ret;
  }
  var dom;
  if (dataAndEvents.canUseDOM) {
    /** @type {(boolean|null)} */
    dom = document.implementation && (document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
  }
  /** @type {function (string, string): ?} */
  module.exports = add;
}, null);
__d("ReactBrowserEventEmitter", ["EventConstants", "EventPluginHub", "EventPluginRegistry", "ReactEventEmitterMixin", "ViewportMetrics", "Object.assign", "isEventSupported"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, listenerMap, Logger, id, elem, require, addHandler) {
  /**
   * @param {Object} obj
   * @return {?}
   */
  function hasOwn(obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      /** @type {number} */
      obj[key] = val++;
      transposed[obj[key]] = {};
    }
    return transposed[obj[key]];
  }
  var transposed = {};
  /** @type {boolean} */
  var o = false;
  /** @type {number} */
  var val = 0;
  var grammar = {
    topBlur : "blur",
    topChange : "change",
    topClick : "click",
    topCompositionEnd : "compositionend",
    topCompositionStart : "compositionstart",
    topCompositionUpdate : "compositionupdate",
    topContextMenu : "contextmenu",
    topCopy : "copy",
    topCut : "cut",
    topDoubleClick : "dblclick",
    topDrag : "drag",
    topDragEnd : "dragend",
    topDragEnter : "dragenter",
    topDragExit : "dragexit",
    topDragLeave : "dragleave",
    topDragOver : "dragover",
    topDragStart : "dragstart",
    topDrop : "drop",
    topFocus : "focus",
    topInput : "input",
    topKeyDown : "keydown",
    topKeyPress : "keypress",
    topKeyUp : "keyup",
    topMouseDown : "mousedown",
    topMouseMove : "mousemove",
    topMouseOut : "mouseout",
    topMouseOver : "mouseover",
    topMouseUp : "mouseup",
    topPaste : "paste",
    topScroll : "scroll",
    topSelectionChange : "selectionchange",
    topTextInput : "textInput",
    topTouchCancel : "touchcancel",
    topTouchEnd : "touchend",
    topTouchMove : "touchmove",
    topTouchStart : "touchstart",
    topWheel : "wheel"
  };
  /** @type {string} */
  var key = "_reactListenersID" + String(Math.random()).slice(2);
  var mod = require({}, id, {
    ReactEventListener : null,
    injection : {
      /**
       * @param {?} isXML
       * @return {undefined}
       */
      injectReactEventListener : function(isXML) {
        isXML.setHandleTopLevel(mod.handleTopLevel);
        mod.ReactEventListener = isXML;
      }
    },
    /**
     * @param {boolean} enabled
     * @return {undefined}
     */
    setEnabled : function(enabled) {
      if (mod.ReactEventListener) {
        mod.ReactEventListener.setEnabled(enabled);
      }
    },
    /**
     * @return {?}
     */
    isEnabled : function() {
      return!!(mod.ReactEventListener && mod.ReactEventListener.isEnabled());
    },
    /**
     * @param {string} name
     * @param {?} key
     * @return {undefined}
     */
    listenTo : function(name, key) {
      var obj = key;
      var values = hasOwn(obj);
      var tokens = Logger.registrationNameDependencies[name];
      var topLevelTypes = dataAndEvents.topLevelTypes;
      /** @type {number} */
      var ti = 0;
      var nTokens = tokens.length;
      for (;ti < nTokens;ti++) {
        var token = tokens[ti];
        if (!(values.hasOwnProperty(token) && values[token])) {
          if (token === topLevelTypes.topWheel) {
            if (addHandler("wheel")) {
              mod.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "wheel", obj);
            } else {
              if (addHandler("mousewheel")) {
                mod.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "mousewheel", obj);
              } else {
                mod.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "DOMMouseScroll", obj);
              }
            }
          } else {
            if (token === topLevelTypes.topScroll) {
              if (addHandler("scroll", true)) {
                mod.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, "scroll", obj);
              } else {
                mod.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, "scroll", mod.ReactEventListener.WINDOW_HANDLE);
              }
            } else {
              if (token === topLevelTypes.topFocus || token === topLevelTypes.topBlur) {
                if (addHandler("focus", true)) {
                  mod.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, "focus", obj);
                  mod.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, "blur", obj);
                } else {
                  if (addHandler("focusin")) {
                    mod.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, "focusin", obj);
                    mod.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, "focusout", obj);
                  }
                }
                /** @type {boolean} */
                values[topLevelTypes.topBlur] = true;
                /** @type {boolean} */
                values[topLevelTypes.topFocus] = true;
              } else {
                if (grammar.hasOwnProperty(token)) {
                  mod.ReactEventListener.trapBubbledEvent(token, grammar[token], obj);
                }
              }
            }
          }
          /** @type {boolean} */
          values[token] = true;
        }
      }
    },
    /**
     * @param {?} element
     * @param {string} type
     * @param {?} func
     * @return {?}
     */
    trapBubbledEvent : function(element, type, func) {
      return mod.ReactEventListener.trapBubbledEvent(element, type, func);
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {string} handlerBaseName
     * @param {?} until
     * @return {?}
     */
    trapCapturedEvent : function(deepDataAndEvents, handlerBaseName, until) {
      return mod.ReactEventListener.trapCapturedEvent(deepDataAndEvents, handlerBaseName, until);
    },
    /**
     * @return {undefined}
     */
    ensureScrollValueMonitoring : function() {
      if (!o) {
        var parent = elem.refreshScrollValues;
        mod.ReactEventListener.monitorScrollValue(parent);
        /** @type {boolean} */
        o = true;
      }
    },
    eventNameDispatchConfigs : listenerMap.eventNameDispatchConfigs,
    registrationNameModules : listenerMap.registrationNameModules,
    putListener : listenerMap.putListener,
    getListener : listenerMap.getListener,
    deleteListener : listenerMap.deleteListener,
    deleteAllListeners : listenerMap.deleteAllListeners
  });
  module.exports = mod;
}, null);
__d("ReactPropTypeLocations", ["keyMirror"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, factory) {
  var returnExports = factory({
    prop : null,
    context : null,
    childContext : null
  });
  module.exports = returnExports;
}, null);
__d("ReactPropTypeLocationNames", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {};
  module.exports = JsDiff;
}, null);
__d("ReactNativeComponent", ["Object.assign", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, cb, on) {
  /**
   * @param {Event} event
   * @return {?}
   */
  function select(event) {
    if (typeof event.type === "function") {
      return event.type;
    }
    var type = event.type;
    var list = user[type];
    if (list == null) {
      user[type] = list = Event(type);
    }
    return list;
  }
  /**
   * @param {Object} props
   * @return {?}
   */
  function animate(props) {
    on(failuresLink);
    return new failuresLink(props.type, props.props);
  }
  /**
   * @param {string} keepData
   * @return {?}
   */
  function remove(keepData) {
    return new l(keepData);
  }
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  function clone(dataAndEvents) {
    return dataAndEvents instanceof l;
  }
  /** @type {null} */
  var Event = null;
  /** @type {null} */
  var failuresLink = null;
  var user = {};
  /** @type {null} */
  var l = null;
  var injectAutoWrapper = {
    /**
     * @param {?} var_args
     * @return {undefined}
     */
    injectGenericComponentClass : function(var_args) {
      failuresLink = var_args;
    },
    /**
     * @param {Object} dataAndEvents
     * @return {undefined}
     */
    injectTextComponentClass : function(dataAndEvents) {
      /** @type {Object} */
      l = dataAndEvents;
    },
    /**
     * @param {?} srcFiles
     * @return {undefined}
     */
    injectComponentClasses : function(srcFiles) {
      cb(user, srcFiles);
    },
    /**
     * @param {Object} initialize
     * @return {undefined}
     */
    injectAutoWrapper : function(initialize) {
      /** @type {Object} */
      Event = initialize;
    }
  };
  var JsDiff = {
    /** @type {function (Event): ?} */
    getComponentClassForElement : select,
    /** @type {function (Object): ?} */
    createInternalComponent : animate,
    /** @type {function (string): ?} */
    createInstanceForText : remove,
    /** @type {function (?): ?} */
    isTextComponent : clone,
    injection : injectAutoWrapper
  };
  module.exports = JsDiff;
}, null);
__d("getIteratorFn", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, opts, keepData) {
  /**
   * @param {?} attribute
   * @return {?}
   */
  function has(attribute) {
    var prop = attribute && (cid && attribute[cid] || attribute[j]);
    if (typeof prop === "function") {
      return prop;
    }
  }
  var cid = typeof Symbol === "function" && Symbol.iterator;
  /** @type {string} */
  var j = "@@iterator";
  /** @type {function (?): ?} */
  opts.exports = has;
}, null);
__d("ReactElementValidator", ["ReactElement", "ReactFragment", "ReactPropTypeLocations", "ReactPropTypeLocationNames", "ReactCurrentOwner", "ReactNativeComponent", "getIteratorFn", "invariant", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, parent, old, opt_attributes, matcherFunction, exports, results, getter, done, test) {
  /**
   * @return {?}
   */
  function show() {
    if (exports.current) {
      var ea = exports.current.getName();
      if (ea) {
        return " Check the render method of `" + ea + "`.";
      }
    }
    return "";
  }
  /**
   * @param {Object} attr
   * @return {?}
   */
  function $(attr) {
    var value = attr && attr.getPublicInstance();
    if (!value) {
      return void 0;
    }
    var ctor = value.constructor;
    if (!ctor) {
      return void 0;
    }
    return ctor.displayName || (ctor.name || void 0);
  }
  /**
   * @return {?}
   */
  function clear() {
    var node = exports.current;
    return node && $(node) || void 0;
  }
  /**
   * @param {Object} result
   * @param {Function} index
   * @return {undefined}
   */
  function success(result, index) {
    if (result._store.validated || result.key != null) {
      return;
    }
    /** @type {boolean} */
    result._store.validated = true;
    fn('Each child in an array or iterator should have a unique "key" prop.', result, index);
  }
  /**
   * @param {string} value
   * @param {Object} key
   * @param {Function} arr
   * @return {undefined}
   */
  function store(value, key, arr) {
    if (!rchecked.test(value)) {
      return;
    }
    fn("Child objects should have non-numeric keys so ordering is preserved.", key, arr);
  }
  /**
   * @param {string} key
   * @param {Object} value
   * @param {Function} prop
   * @return {undefined}
   */
  function fn(key, value, prop) {
    var selector = clear();
    var exampleContent = prop.displayName || prop.name;
    var sel = selector || exampleContent;
    var selectors = $cookies[key] || ($cookies[key] = {});
    if (selectors.hasOwnProperty(sel)) {
      return;
    }
    /** @type {boolean} */
    selectors[sel] = true;
    key += selector ? " Check the render method of " + selector + "." : " Check the React.render call using <" + exampleContent + ">.";
    if (value && (value._owner && value._owner !== exports.current)) {
      var emptyJ = $(value._owner);
      key += " It was passed a child from " + emptyJ + ".";
    }
    key += " See http://fb.me/react-warning-keys for more information.";
    test(false, key);
  }
  /**
   * @param {Object} self
   * @param {Function} options
   * @return {undefined}
   */
  function get(self, options) {
    if (Array.isArray(self)) {
      /** @type {number} */
      var i = 0;
      for (;i < self.length;i++) {
        var response = self[i];
        if (parent.isValidElement(response)) {
          success(response, options);
        }
      }
    } else {
      if (parent.isValidElement(self)) {
        /** @type {boolean} */
        self._store.validated = true;
      } else {
        if (self) {
          var result = getter(self);
          if (result) {
            if (result !== self.entries) {
              var stream = result.call(self);
              var v;
              for (;!(v = stream.next()).done;) {
                if (parent.isValidElement(v.value)) {
                  success(v.value, options);
                }
              }
            }
          } else {
            if (typeof self === "object") {
              var info = old.extractIfFragment(self);
              var key;
              for (key in info) {
                if (info.hasOwnProperty(key)) {
                  store(key, info[key], options);
                }
              }
            }
          }
        }
      }
    }
  }
  /**
   * @param {?} next
   * @param {Object} obj
   * @param {?} req
   * @param {?} path
   * @return {undefined}
   */
  function handle(next, obj, req, path) {
    var key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        var err;
        try {
          done(typeof obj[key] === "function");
          err = obj[key](req, key, next, path);
        } catch (backtrace) {
          err = backtrace;
        }
        if (err instanceof Error && !(err.message in messageIds)) {
          /** @type {boolean} */
          messageIds[err.message] = true;
          var show1 = show(this);
          test(false, "Failed propType: " + err.message + show1);
        }
      }
    }
  }
  /**
   * @param {string} key
   * @param {Object} props
   * @return {undefined}
   */
  function mixin(key, props) {
    var data = props.type;
    var value = typeof data === "string" ? data : data.displayName;
    var m = props._owner ? props._owner.getPublicInstance().constructor.displayName : null;
    /** @type {string} */
    var cur = key + "|" + value + "|" + m;
    if (words.hasOwnProperty(cur)) {
      return;
    }
    /** @type {boolean} */
    words[cur] = true;
    /** @type {string} */
    var later = "";
    if (value) {
      /** @type {string} */
      later = " <" + value + " />";
    }
    /** @type {string} */
    var reversed = "";
    if (m) {
      /** @type {string} */
      reversed = " The element was created by " + m + ".";
    }
    test(false, "Don't set .props.%s of the React component%s. " + "Instead, specify the correct value when " + "initially creating the element.%s", key, later, reversed);
  }
  /**
   * @param {Object} props
   * @return {undefined}
   */
  function extend(props) {
    if (!props._store) {
      return;
    }
    var a = props._store.originalProps;
    var b = props.props;
    var p;
    for (p in b) {
      if (b.hasOwnProperty(p)) {
        if (!a.hasOwnProperty(p) || a[p] !== b[p]) {
          mixin(p, props);
          a[p] = b[p];
        }
      }
    }
  }
  var $cookies = {};
  var messageIds = {};
  /** @type {RegExp} */
  var rchecked = /^\d+$/;
  var words = {};
  var t = {
    /** @type {function (Object): undefined} */
    checkAndWarnForMutatedProps : extend,
    /**
     * @param {Function} tag
     * @param {Function} outstandingDataSize
     * @param {?} template
     * @return {?}
     */
    createElement : function(tag, outstandingDataSize, template) {
      test(tag != null, "React.createElement: type should not be null or undefined. It should " + "be a string (for DOM elements) or a ReactClass (for composite " + "components).");
      var result = parent.createElement.apply(this, arguments);
      if (result == null) {
        return result;
      }
      /** @type {number} */
      var i = 2;
      for (;i < arguments.length;i++) {
        get(arguments[i], tag);
      }
      if (tag) {
        var group = results.getComponentClassForElement(result);
        var ka = group.displayName || group.name;
        if (typeof group.getDefaultProps === "function") {
          test(group.getDefaultProps.isReactClassApproved, "getDefaultProps is only used on classic React.createClass " + "definitions. Use a static property named `defaultProps` instead.");
        }
      }
      return result;
    },
    /**
     * @param {string} type
     * @return {?}
     */
    createFactory : function(type) {
      var node = t.createElement.bind(null, type);
      /** @type {string} */
      node.type = type;
      return node;
    }
  };
  module.exports = t;
}, null);
__d("ReactDOM", ["ReactElement", "ReactElementValidator", "mapObject"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, fixes, opt_attributes, fn) {
  /**
   * @param {string} fix
   * @return {?}
   */
  function camelKey(fix) {
    return fixes.createFactory(fix);
  }
  var data = fn({
    a : "a",
    abbr : "abbr",
    address : "address",
    area : "area",
    article : "article",
    aside : "aside",
    audio : "audio",
    b : "b",
    base : "base",
    bdi : "bdi",
    bdo : "bdo",
    big : "big",
    blockquote : "blockquote",
    body : "body",
    br : "br",
    button : "button",
    canvas : "canvas",
    caption : "caption",
    cite : "cite",
    code : "code",
    col : "col",
    colgroup : "colgroup",
    data : "data",
    datalist : "datalist",
    dd : "dd",
    del : "del",
    details : "details",
    dfn : "dfn",
    dialog : "dialog",
    div : "div",
    dl : "dl",
    dt : "dt",
    em : "em",
    embed : "embed",
    fieldset : "fieldset",
    figcaption : "figcaption",
    figure : "figure",
    footer : "footer",
    form : "form",
    h1 : "h1",
    h2 : "h2",
    h3 : "h3",
    h4 : "h4",
    h5 : "h5",
    h6 : "h6",
    head : "head",
    header : "header",
    hr : "hr",
    html : "html",
    i : "i",
    iframe : "iframe",
    img : "img",
    input : "input",
    ins : "ins",
    kbd : "kbd",
    keygen : "keygen",
    label : "label",
    legend : "legend",
    li : "li",
    link : "link",
    main : "main",
    map : "map",
    mark : "mark",
    menu : "menu",
    menuitem : "menuitem",
    meta : "meta",
    meter : "meter",
    nav : "nav",
    noscript : "noscript",
    object : "object",
    ol : "ol",
    optgroup : "optgroup",
    option : "option",
    output : "output",
    p : "p",
    param : "param",
    picture : "picture",
    pre : "pre",
    progress : "progress",
    q : "q",
    rp : "rp",
    rt : "rt",
    ruby : "ruby",
    s : "s",
    samp : "samp",
    script : "script",
    section : "section",
    select : "select",
    small : "small",
    source : "source",
    span : "span",
    strong : "strong",
    style : "style",
    sub : "sub",
    summary : "summary",
    sup : "sup",
    table : "table",
    tbody : "tbody",
    td : "td",
    textarea : "textarea",
    tfoot : "tfoot",
    th : "th",
    thead : "thead",
    time : "time",
    title : "title",
    tr : "tr",
    track : "track",
    u : "u",
    ul : "ul",
    "var" : "var",
    video : "video",
    wbr : "wbr",
    circle : "circle",
    defs : "defs",
    ellipse : "ellipse",
    g : "g",
    line : "line",
    linearGradient : "linearGradient",
    mask : "mask",
    path : "path",
    pattern : "pattern",
    polygon : "polygon",
    polyline : "polyline",
    radialGradient : "radialGradient",
    rect : "rect",
    stop : "stop",
    svg : "svg",
    text : "text",
    tspan : "tspan"
  }, camelKey);
  module.exports = data;
}, null);
__d("PooledClass", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, lose) {
  /**
   * @param {?} data
   * @return {?}
   */
  var fireEvent = function(data) {
    var parser = this;
    if (parser.instancePool.length) {
      var self = parser.instancePool.pop();
      parser.call(self, data);
      return self;
    } else {
      return new parser(data);
    }
  };
  /**
   * @param {Array} a1
   * @param {Array} a2
   * @return {?}
   */
  var set = function(a1, a2) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2);
      return instance;
    } else {
      return new Klass(a1, a2);
    }
  };
  /**
   * @param {Array} a1
   * @param {Array} a2
   * @param {boolean} a3
   * @return {?}
   */
  var create = function(a1, a2, a3) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3);
      return instance;
    } else {
      return new Klass(a1, a2, a3);
    }
  };
  /**
   * @param {?} a1
   * @param {?} a2
   * @param {?} a3
   * @param {?} a4
   * @param {?} a5
   * @return {?}
   */
  var init = function(a1, a2, a3, a4, a5) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3, a4, a5);
      return instance;
    } else {
      return new Klass(a1, a2, a3, a4, a5);
    }
  };
  /**
   * @param {Function} callback
   * @return {undefined}
   */
  var release = function(callback) {
    var Klass = this;
    lose(callback instanceof Klass);
    if (callback.destructor) {
      callback.destructor();
    }
    if (Klass.instancePool.length < Klass.poolSize) {
      Klass.instancePool.push(callback);
    }
  };
  /** @type {number} */
  var poolSize = 10;
  /** @type {function (?): ?} */
  var DEFAULT_POOLER = fireEvent;
  /**
   * @param {Function} name
   * @param {Function} pooler
   * @return {?}
   */
  var addPoolingTo = function(name, pooler) {
    /** @type {Function} */
    var NewKlass = name;
    /** @type {Array} */
    NewKlass.instancePool = [];
    NewKlass.getPooled = pooler || DEFAULT_POOLER;
    if (!NewKlass.poolSize) {
      /** @type {number} */
      NewKlass.poolSize = poolSize;
    }
    /** @type {function (Function): undefined} */
    NewKlass.release = release;
    return NewKlass;
  };
  var JsDiff = {
    /** @type {function (Function, Function): ?} */
    addPoolingTo : addPoolingTo,
    /** @type {function (?): ?} */
    oneArgumentPooler : fireEvent,
    /** @type {function (Array, Array): ?} */
    twoArgumentPooler : set,
    /** @type {function (Array, Array, boolean): ?} */
    threeArgumentPooler : create,
    /** @type {function (?, ?, ?, ?, ?): ?} */
    fiveArgumentPooler : init
  };
  module.exports = JsDiff;
}, null);
__d("ReactPutListenerQueue", ["PooledClass", "ReactBrowserEventEmitter", "Object.assign"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $injector, evt, extend) {
  /**
   * @return {undefined}
   */
  function Class() {
    /** @type {Array} */
    this.listenersToPut = [];
  }
  extend(Class.prototype, {
    /**
     * @param {string} timer
     * @param {string} second
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    enqueuePutListener : function(timer, second, dataAndEvents) {
      this.listenersToPut.push({
        rootNodeID : timer,
        propKey : second,
        propValue : dataAndEvents
      });
    },
    /**
     * @return {undefined}
     */
    putListeners : function() {
      /** @type {number} */
      var l = 0;
      for (;l < this.listenersToPut.length;l++) {
        var e = this.listenersToPut[l];
        evt.putListener(e.rootNodeID, e.propKey, e.propValue);
      }
    },
    /**
     * @return {undefined}
     */
    reset : function() {
      /** @type {number} */
      this.listenersToPut.length = 0;
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
__d("getNodeForCharacterOffset", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {boolean} node
   * @return {?}
   */
  function traverseNode(node) {
    for (;node && node.firstChild;) {
      node = node.firstChild;
    }
    return node;
  }
  /**
   * @param {string} lineEndNode
   * @return {?}
   */
  function breakAfter(lineEndNode) {
    for (;lineEndNode;) {
      if (lineEndNode.nextSibling) {
        return lineEndNode.nextSibling;
      }
      lineEndNode = lineEndNode.parentNode;
    }
  }
  /**
   * @param {string} attribute
   * @param {string} value
   * @return {?}
   */
  function constructor(attribute, value) {
    var node = traverseNode(attribute);
    /** @type {number} */
    var prev = 0;
    /** @type {number} */
    var cur = 0;
    for (;node;) {
      if (node.nodeType === 3) {
        cur = prev + node.textContent.length;
        if (prev <= value && cur >= value) {
          return{
            node : node,
            offset : value - prev
          };
        }
        prev = cur;
      }
      node = traverseNode(breakAfter(node));
    }
  }
  /** @type {function (string, string): ?} */
  module.exports = constructor;
}, null);
__d("getTextContentAccessor", ["ExecutionEnvironment"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents) {
  /**
   * @return {?}
   */
  function updateRemainingCount() {
    if (!textProp && dataAndEvents.canUseDOM) {
      /** @type {string} */
      textProp = "textContent" in document.documentElement ? "textContent" : "innerText";
    }
    return textProp;
  }
  /** @type {null} */
  var textProp = null;
  /** @type {function (): ?} */
  module.exports = updateRemainingCount;
}, null);
__d("ReactDOMSelection", ["ExecutionEnvironment", "getNodeForCharacterOffset", "getTextContentAccessor"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, getter, behavior) {
  /**
   * @param {(Node|string)} element
   * @param {number} depth
   * @param {(Node|string)} container
   * @param {number} lastDepth
   * @return {?}
   */
  function fixBoundaryPoint(element, depth, container, lastDepth) {
    return element === container && depth === lastDepth;
  }
  /**
   * @param {Object} el
   * @return {?}
   */
  function makeSelection(el) {
    /** @type {(Selection|null)} */
    var selection = document.selection;
    /** @type {(ControlRange|TextRange|null)} */
    var selectedRange = selection.createRange();
    var n = selectedRange.text.length;
    var fromStart = selectedRange.duplicate();
    fromStart.moveToElementText(el);
    fromStart.setEndPoint("EndToStart", selectedRange);
    var at = fromStart.text.length;
    var e = at + n;
    return{
      start : at,
      end : e
    };
  }
  /**
   * @param {Object} text
   * @return {?}
   */
  function saveSelection(text) {
    /** @type {(Selection|null)} */
    var selection = window.getSelection && window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    /** @type {(Node|null)} */
    var anchorNode = selection.anchorNode;
    /** @type {number} */
    var anchorOffset = selection.anchorOffset;
    /** @type {(Node|null)} */
    var focusNode = selection.focusNode;
    /** @type {number} */
    var focusOffset = selection.focusOffset;
    /** @type {(Range|null)} */
    var ref = selection.getRangeAt(0);
    var keys = fixBoundaryPoint(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    /** @type {number} */
    var length = keys ? 0 : ref.toString().length;
    /** @type {(Range|null)} */
    var range = ref.cloneRange();
    range.selectNodeContents(text);
    range.setEnd(ref.startContainer, ref.startOffset);
    var hasIndex = fixBoundaryPoint(range.startContainer, range.startOffset, range.endContainer, range.endOffset);
    /** @type {number} */
    var start = hasIndex ? 0 : range.toString().length;
    /** @type {number} */
    var end = start + length;
    /** @type {(Range|null)} */
    var detectionRange = document.createRange();
    detectionRange.setStart(anchorNode, anchorOffset);
    detectionRange.setEnd(focusNode, focusOffset);
    /** @type {boolean} */
    var isBackward = detectionRange.collapsed;
    return{
      start : isBackward ? end : start,
      end : isBackward ? start : end
    };
  }
  /**
   * @param {Element} el
   * @param {?} range
   * @return {undefined}
   */
  function getSelection(el, range) {
    var r = document.selection.createRange().duplicate();
    var start;
    var end;
    if (typeof range.end === "undefined") {
      start = range.start;
      end = start;
    } else {
      if (range.start > range.end) {
        start = range.end;
        end = range.start;
      } else {
        start = range.start;
        end = range.end;
      }
    }
    r.moveToElementText(el);
    r.moveStart("character", start);
    r.setEndPoint("EndToStart", r);
    r.moveEnd("character", end - start);
    r.select();
  }
  /**
   * @param {Element} node
   * @param {?} range
   * @return {undefined}
   */
  function init(node, range) {
    if (!window.getSelection) {
      return;
    }
    /** @type {(Selection|null)} */
    var selection = window.getSelection();
    var olen = node[behavior()].length;
    /** @type {number} */
    var b = Math.min(range.start, olen);
    /** @type {number} */
    var cmax = typeof range.end === "undefined" ? b : Math.min(range.end, olen);
    if (!selection.extend && b > cmax) {
      /** @type {number} */
      var _b = cmax;
      /** @type {number} */
      cmax = b;
      /** @type {number} */
      b = _b;
    }
    var startMarker = getter(node, b);
    var endMarker = getter(node, cmax);
    if (startMarker && endMarker) {
      /** @type {(Range|null)} */
      var nativeRange = document.createRange();
      nativeRange.setStart(startMarker.node, startMarker.offset);
      selection.removeAllRanges();
      if (b > cmax) {
        selection.addRange(nativeRange);
        selection.extend(endMarker.node, endMarker.offset);
      } else {
        nativeRange.setEnd(endMarker.node, endMarker.offset);
        selection.addRange(nativeRange);
      }
    }
  }
  var skip = dataAndEvents.canUseDOM && ("selection" in document && !("getSelection" in window));
  var JsDiff = {
    /** @type {function (Object): ?} */
    getOffsets : skip ? makeSelection : saveSelection,
    /** @type {function (Element, ?): undefined} */
    setOffsets : skip ? getSelection : init
  };
  module.exports = JsDiff;
}, null);
__d("ReactInputSelection", ["ReactDOMSelection", "containsNode", "focusNode", "getActiveElement"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, assert, contains, unbind, $) {
  /**
   * @param {?} elem
   * @return {?}
   */
  function empty(elem) {
    return contains(document.documentElement, elem);
  }
  var me = {
    /**
     * @param {Element} elem
     * @return {?}
     */
    hasSelectionCapabilities : function(elem) {
      return elem && (elem.nodeName === "INPUT" && elem.type === "text" || (elem.nodeName === "TEXTAREA" || elem.contentEditable === "true"));
    },
    /**
     * @return {?}
     */
    getSelectionInformation : function() {
      var focusedElem = $();
      return{
        focusedElem : focusedElem,
        selectionRange : me.hasSelectionCapabilities(focusedElem) ? me.getSelection(focusedElem) : null
      };
    },
    /**
     * @param {?} priorSelectionInformation
     * @return {undefined}
     */
    restoreSelection : function(priorSelectionInformation) {
      var curFocusedElem = $();
      var priorFocusedElem = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== priorFocusedElem && empty(priorFocusedElem)) {
        if (me.hasSelectionCapabilities(priorFocusedElem)) {
          me.setSelection(priorFocusedElem, priorSelectionRange);
        }
        unbind(priorFocusedElem);
      }
    },
    /**
     * @param {Object} input
     * @return {?}
     */
    getSelection : function(input) {
      var selection;
      if ("selectionStart" in input) {
        selection = {
          start : input.selectionStart,
          end : input.selectionEnd
        };
      } else {
        if (document.selection && input.nodeName === "INPUT") {
          /** @type {(ControlRange|TextRange|null)} */
          var range2 = document.selection.createRange();
          if (range2.parentElement() === input) {
            selection = {
              start : -range2.moveStart("character", -input.value.length),
              end : -range2.moveEnd("character", -input.value.length)
            };
          }
        } else {
          selection = assert.getOffsets(input);
        }
      }
      return selection || {
        start : 0,
        end : 0
      };
    },
    /**
     * @param {Element} input
     * @param {?} selection
     * @return {undefined}
     */
    setSelection : function(input, selection) {
      var start = selection.start;
      var end = selection.end;
      if (typeof end === "undefined") {
        end = start;
      }
      if ("selectionStart" in input) {
        input.selectionStart = start;
        /** @type {number} */
        input.selectionEnd = Math.min(end, input.value.length);
      } else {
        if (document.selection && input.nodeName === "INPUT") {
          var r = input.createTextRange();
          r.collapse(true);
          r.moveStart("character", start);
          r.moveEnd("character", end - start);
          r.select();
        } else {
          assert.setOffsets(input, selection);
        }
      }
    }
  };
  module.exports = me;
}, null);
__d("Transaction", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $) {
  var result = {
    /**
     * @return {undefined}
     */
    reinitializeTransaction : function() {
      this.transactionWrappers = this.getTransactionWrappers();
      if (!this.wrapperInitData) {
        /** @type {Array} */
        this.wrapperInitData = [];
      } else {
        /** @type {number} */
        this.wrapperInitData.length = 0;
      }
      /** @type {boolean} */
      this._isInTransaction = false;
    },
    _isInTransaction : false,
    getTransactionWrappers : null,
    /**
     * @return {?}
     */
    isInTransaction : function() {
      return!!this._isInTransaction;
    },
    /**
     * @param {Function} fn
     * @param {Array} elems
     * @param {?} value
     * @param {?} name
     * @param {(Node|string)} data
     * @param {?} callback
     * @param {?} e
     * @param {?} f
     * @return {?}
     */
    perform : function(fn, elems, value, name, data, callback, e, f) {
      $(!this.isInTransaction());
      var r;
      var ret;
      try {
        /** @type {boolean} */
        this._isInTransaction = true;
        /** @type {boolean} */
        r = true;
        this.initializeAll(0);
        ret = fn.call(elems, value, name, data, callback, e, f);
        /** @type {boolean} */
        r = false;
      } finally {
        try {
          if (r) {
            try {
              this.closeAll(0);
            } catch (t) {
            }
          } else {
            this.closeAll(0);
          }
        } finally {
          /** @type {boolean} */
          this._isInTransaction = false;
        }
      }
      return ret;
    },
    /**
     * @param {number} fromIndex
     * @return {undefined}
     */
    initializeAll : function(fromIndex) {
      var resultItems = this.transactionWrappers;
      /** @type {number} */
      var i = fromIndex;
      for (;i < resultItems.length;i++) {
        var result = resultItems[i];
        try {
          this.wrapperInitData[i] = node.OBSERVED_ERROR;
          this.wrapperInitData[i] = result.initialize ? result.initialize.call(this) : null;
        } finally {
          if (this.wrapperInitData[i] === node.OBSERVED_ERROR) {
            try {
              this.initializeAll(i + 1);
            } catch (n) {
            }
          }
        }
      }
    },
    /**
     * @param {number} recurring
     * @return {undefined}
     */
    closeAll : function(recurring) {
      $(this.isInTransaction());
      var resultItems = this.transactionWrappers;
      /** @type {number} */
      var i = recurring;
      for (;i < resultItems.length;i++) {
        var result = resultItems[i];
        var initData = this.wrapperInitData[i];
        var o;
        try {
          /** @type {boolean} */
          o = true;
          if (initData !== node.OBSERVED_ERROR && result.close) {
            result.close.call(this, initData);
          }
          /** @type {boolean} */
          o = false;
        } finally {
          if (o) {
            try {
              this.closeAll(i + 1);
            } catch (p) {
            }
          }
        }
      }
      /** @type {number} */
      this.wrapperInitData.length = 0;
    }
  };
  var node = {
    Mixin : result,
    OBSERVED_ERROR : {}
  };
  module.exports = node;
}, null);
__d("ReactReconcileTransaction", ["CallbackQueue", "PooledClass", "ReactBrowserEventEmitter", "ReactInputSelection", "ReactPutListenerQueue", "Transaction", "Object.assign"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, plq, $injector, child, r1, pool, NumberTextBox, updateFunc) {
  /**
   * @return {undefined}
   */
  function Class() {
    this.reinitializeTransaction();
    /** @type {boolean} */
    this.renderToStaticMarkup = false;
    this.reactMountReady = plq.getPooled(null);
    this.putListenerQueue = pool.getPooled();
  }
  var methods = {
    initialize : r1.getSelectionInformation,
    close : r1.restoreSelection
  };
  var options = {
    /**
     * @return {?}
     */
    initialize : function() {
      var oSelf = child.isEnabled();
      child.setEnabled(false);
      return oSelf;
    },
    /**
     * @param {boolean} enabled
     * @return {undefined}
     */
    close : function(enabled) {
      child.setEnabled(enabled);
    }
  };
  var response = {
    /**
     * @return {undefined}
     */
    initialize : function() {
      this.reactMountReady.reset();
    },
    /**
     * @return {undefined}
     */
    close : function() {
      this.reactMountReady.notifyAll();
    }
  };
  var obj = {
    /**
     * @return {undefined}
     */
    initialize : function() {
      this.putListenerQueue.reset();
    },
    /**
     * @return {undefined}
     */
    close : function() {
      this.putListenerQueue.putListeners();
    }
  };
  /** @type {Array} */
  var args = [obj, methods, options, response];
  var progressValues = {
    /**
     * @return {?}
     */
    getTransactionWrappers : function() {
      return args;
    },
    /**
     * @return {?}
     */
    getReactMountReady : function() {
      return this.reactMountReady;
    },
    /**
     * @return {?}
     */
    getPutListenerQueue : function() {
      return this.putListenerQueue;
    },
    /**
     * @return {undefined}
     */
    destructor : function() {
      plq.release(this.reactMountReady);
      /** @type {null} */
      this.reactMountReady = null;
      pool.release(this.putListenerQueue);
      /** @type {null} */
      this.putListenerQueue = null;
    }
  };
  updateFunc(Class.prototype, NumberTextBox.Mixin, progressValues);
  $injector.addPoolingTo(Class);
  /** @type {function (): undefined} */
  module.exports = Class;
}, null);
__d("EventPropagators", ["EventConstants", "EventPluginHub", "accumulateInto", "forEachAccumulated"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, listenerMap, $, makeIterator) {
  /**
   * @param {?} id
   * @param {Object} event
   * @param {?} phase
   * @return {?}
   */
  function add(id, event, phase) {
    var lowerTagName = event.dispatchConfig.phasedRegistrationNames[phase];
    return indexOf(id, lowerTagName);
  }
  /**
   * @param {?} id
   * @param {?} upwards
   * @param {Object} event
   * @return {undefined}
   */
  function request(id, upwards, event) {
    var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
    var listener = add(id, event, phase);
    if (listener) {
      event._dispatchListeners = $(event._dispatchListeners, listener);
      event._dispatchIDs = $(event._dispatchIDs, id);
    }
  }
  /**
   * @param {Object} event
   * @return {undefined}
   */
  function f3(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      listenerMap.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, request, event);
    }
  }
  /**
   * @param {?} id
   * @param {Array} async
   * @param {Object} event
   * @return {undefined}
   */
  function test(id, async, event) {
    if (event && event.dispatchConfig.registrationName) {
      var lowerTagName = event.dispatchConfig.registrationName;
      var listener = indexOf(id, lowerTagName);
      if (listener) {
        event._dispatchListeners = $(event._dispatchListeners, listener);
        event._dispatchIDs = $(event._dispatchIDs, id);
      }
    }
  }
  /**
   * @param {Object} event
   * @return {undefined}
   */
  function fix(event) {
    if (event && event.dispatchConfig.registrationName) {
      test(event.dispatchMarker, null, event);
    }
  }
  /**
   * @param {?} types
   * @return {undefined}
   */
  function find(types) {
    makeIterator(types, f3);
  }
  /**
   * @param {?} deepDataAndEvents
   * @param {?} dataAndEvents
   * @param {Object} events
   * @param {Function} attributes
   * @return {undefined}
   */
  function clone(deepDataAndEvents, dataAndEvents, events, attributes) {
    listenerMap.injection.getInstanceHandle().traverseEnterLeave(events, attributes, test, deepDataAndEvents, dataAndEvents);
  }
  /**
   * @param {?} callback
   * @return {undefined}
   */
  function collect(callback) {
    makeIterator(callback, fix);
  }
  var PropagationPhases = dataAndEvents.PropagationPhases;
  var indexOf = listenerMap.getListener;
  var JsDiff = {
    /** @type {function (?): undefined} */
    accumulateTwoPhaseDispatches : find,
    /** @type {function (?): undefined} */
    accumulateDirectDispatches : collect,
    /** @type {function (?, ?, Object, Function): undefined} */
    accumulateEnterLeaveDispatches : clone
  };
  module.exports = JsDiff;
}, null);
__d("FallbackCompositionState", ["PooledClass", "Object.assign", "getTextContentAccessor"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, assert, createObject, next) {
  /**
   * @param {string} node
   * @return {undefined}
   */
  function create(node) {
    /** @type {string} */
    this._root = node;
    this._startText = this.getText();
    /** @type {null} */
    this._fallbackText = null;
  }
  createObject(create.prototype, {
    /**
     * @return {?}
     */
    getText : function() {
      if ("value" in this._root) {
        return this._root.value;
      }
      return this._root[next()];
    },
    /**
     * @return {?}
     */
    getData : function() {
      if (this._fallbackText) {
        return this._fallbackText;
      }
      var key;
      var attrs = this._startText;
      var len = attrs.length;
      var i;
      var value = this.getText();
      var I = value.length;
      /** @type {number} */
      key = 0;
      for (;key < len;key++) {
        if (attrs[key] !== value[key]) {
          break;
        }
      }
      /** @type {number} */
      var last = len - key;
      /** @type {number} */
      i = 1;
      for (;i <= last;i++) {
        if (attrs[len - i] !== value[I - i]) {
          break;
        }
      }
      /** @type {(number|undefined)} */
      var j = i > 1 ? 1 - i : void 0;
      this._fallbackText = value.slice(key, j);
      return this._fallbackText;
    }
  });
  assert.addPoolingTo(create);
  /** @type {function (string): undefined} */
  module.exports = create;
}, null);
__d("getEventTarget", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} element
   * @return {?}
   */
  function listener(element) {
    var tapElement = element.target || (element.srcElement || window);
    return tapElement.nodeType === 3 ? tapElement.parentNode : tapElement;
  }
  /** @type {function (string): ?} */
  module.exports = listener;
}, null);
__d("SyntheticEvent", ["PooledClass", "Object.assign", "emptyFunction", "getEventTarget"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, w, extend, evt, bench) {
  /**
   * @param {string} attribute
   * @param {string} value
   * @param {Object} nativeEvent
   * @return {undefined}
   */
  function Class(attribute, value, nativeEvent) {
    /** @type {string} */
    this.dispatchConfig = attribute;
    /** @type {string} */
    this.dispatchMarker = value;
    /** @type {Object} */
    this.nativeEvent = nativeEvent;
    var Interface = this.constructor.Interface;
    var propName;
    for (propName in Interface) {
      if (!Interface.hasOwnProperty(propName)) {
        continue;
      }
      var normalize = Interface[propName];
      if (normalize) {
        this[propName] = normalize(nativeEvent);
      } else {
        this[propName] = nativeEvent[propName];
      }
    }
    var s = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
    if (s) {
      this.isDefaultPrevented = evt.thatReturnsTrue;
    } else {
      this.isDefaultPrevented = evt.thatReturnsFalse;
    }
    this.isPropagationStopped = evt.thatReturnsFalse;
  }
  var oEventPseudo = {
    type : null,
    target : bench,
    currentTarget : evt.thatReturnsNull,
    eventPhase : null,
    bubbles : null,
    cancelable : null,
    /**
     * @param {Event} event
     * @return {?}
     */
    timeStamp : function(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented : null,
    isTrusted : null
  };
  extend(Class.prototype, {
    /**
     * @return {undefined}
     */
    preventDefault : function() {
      /** @type {boolean} */
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        /** @type {boolean} */
        event.returnValue = false;
      }
      this.isDefaultPrevented = evt.thatReturnsTrue;
    },
    /**
     * @return {undefined}
     */
    stopPropagation : function() {
      var event = this.nativeEvent;
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        /** @type {boolean} */
        event.cancelBubble = true;
      }
      this.isPropagationStopped = evt.thatReturnsTrue;
    },
    /**
     * @return {undefined}
     */
    persist : function() {
      this.isPersistent = evt.thatReturnsTrue;
    },
    isPersistent : evt.thatReturnsFalse,
    /**
     * @return {undefined}
     */
    destructor : function() {
      var Interface = this.constructor.Interface;
      var propName;
      for (propName in Interface) {
        /** @type {null} */
        this[propName] = null;
      }
      /** @type {null} */
      this.dispatchConfig = null;
      /** @type {null} */
      this.dispatchMarker = null;
      /** @type {null} */
      this.nativeEvent = null;
    }
  });
  Class.Interface = oEventPseudo;
  /**
   * @param {Function} compile
   * @param {?} obj
   * @return {undefined}
   */
  Class.augmentClass = function(compile, obj) {
    var Super = this;
    /** @type {Object} */
    var defaultOptions = Object.create(Super.prototype);
    extend(defaultOptions, compile.prototype);
    /** @type {Object} */
    compile.prototype = defaultOptions;
    /** @type {Function} */
    compile.prototype.constructor = compile;
    compile.Interface = extend({}, Super.Interface, obj);
    compile.augmentClass = Super.augmentClass;
    w.addPoolingTo(compile, w.threeArgumentPooler);
  };
  w.addPoolingTo(Class, w.threeArgumentPooler);
  /** @type {function (string, string, Object): undefined} */
  module.exports = Class;
}, null);
__d("SyntheticCompositionEvent", ["SyntheticEvent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var item = {
    data : null
  };
  callback.augmentClass(compile, item);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("SyntheticInputEvent", ["SyntheticEvent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var item = {
    data : null
  };
  callback.augmentClass(compile, item);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("BeforeInputEventPlugin", ["EventConstants", "EventPropagators", "ExecutionEnvironment", "FallbackCompositionState", "SyntheticCompositionEvent", "SyntheticInputEvent", "keyOf"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, eventUtil, vars, o, target, render, $sanitize) {
  /**
   * @return {?}
   */
  function c() {
    var exports = window.opera;
    return typeof exports === "object" && (typeof exports.version === "function" && parseInt(exports.version(), 10) <= 12);
  }
  /**
   * @param {Object} e
   * @return {?}
   */
  function _eventModifiers(e) {
    return(e.ctrlKey || (e.altKey || e.metaKey)) && !(e.ctrlKey && e.altKey);
  }
  /**
   * @param {string} topLevelType
   * @return {?}
   */
  function getCompositionEventType(topLevelType) {
    switch(topLevelType) {
      case topLevelTypes.topCompositionStart:
        return eventTypes.compositionStart;
      case topLevelTypes.topCompositionEnd:
        return eventTypes.compositionEnd;
      case topLevelTypes.topCompositionUpdate:
        return eventTypes.compositionUpdate;
    }
  }
  /**
   * @param {string} topLevelType
   * @param {Event} e
   * @return {?}
   */
  function preventDefault(topLevelType, e) {
    return topLevelType === topLevelTypes.topKeyDown && e.keyCode === ENTER_KEY;
  }
  /**
   * @param {string} dataAndEvents
   * @param {Event} e
   * @return {?}
   */
  function callback(dataAndEvents, e) {
    switch(dataAndEvents) {
      case topLevelTypes.topKeyUp:
        return restricted.indexOf(e.keyCode) !== -1;
      case topLevelTypes.topKeyDown:
        return e.keyCode !== ENTER_KEY;
      case topLevelTypes.topKeyPress:
      ;
      case topLevelTypes.topMouseDown:
      ;
      case topLevelTypes.topBlur:
        return true;
      default:
        return false;
    }
  }
  /**
   * @param {Event} e
   * @return {?}
   */
  function fn(e) {
    var options = e.detail;
    if (typeof options === "object" && "data" in options) {
      return options.data;
    }
    return null;
  }
  /**
   * @param {string} topLevelType
   * @param {?} type
   * @param {Error} data
   * @param {Event} context
   * @return {?}
   */
  function trigger(topLevelType, type, data, context) {
    var eventType;
    var eventData;
    if (p) {
      eventType = getCompositionEventType(topLevelType);
    } else {
      if (!next) {
        if (preventDefault(topLevelType, context)) {
          eventType = eventTypes.compositionStart;
        }
      } else {
        if (callback(topLevelType, context)) {
          eventType = eventTypes.compositionEnd;
        }
      }
    }
    if (!eventType) {
      return null;
    }
    if (rsa_enable) {
      if (!next && eventType === eventTypes.compositionStart) {
        next = o.getPooled(type);
      } else {
        if (eventType === eventTypes.compositionEnd) {
          if (next) {
            eventData = next.getData();
          }
        }
      }
    }
    var event = target.getPooled(eventType, data, context);
    if (eventData) {
      event.data = eventData;
    } else {
      var ret = fn(context);
      if (ret !== null) {
        event.data = ret;
      }
    }
    eventUtil.accumulateTwoPhaseDispatches(event);
    return event;
  }
  /**
   * @param {string} dataAndEvents
   * @param {Event} e
   * @return {?}
   */
  function func(dataAndEvents, e) {
    switch(dataAndEvents) {
      case topLevelTypes.topCompositionEnd:
        return fn(e);
      case topLevelTypes.topKeyPress:
        var key = e.which;
        if (key !== i) {
          return null;
        }
        /** @type {boolean} */
        event = true;
        return object;
      case topLevelTypes.topTextInput:
        var value = e.data;
        if (value === object && event) {
          return null;
        }
        return value;
      default:
        return null;
    }
  }
  /**
   * @param {string} node
   * @param {Event} e
   * @return {?}
   */
  function select(node, e) {
    if (next) {
      if (node === topLevelTypes.topCompositionEnd || callback(node, e)) {
        var results = next.getData();
        o.release(next);
        /** @type {null} */
        next = null;
        return results;
      }
      return null;
    }
    switch(node) {
      case topLevelTypes.topPaste:
        return null;
      case topLevelTypes.topKeyPress:
        if (e.which && !_eventModifiers(e)) {
          return String.fromCharCode(e.which);
        }
        return null;
      case topLevelTypes.topCompositionEnd:
        return rsa_enable ? null : e.data;
      default:
        return null;
    }
  }
  /**
   * @param {string} node
   * @param {string} keepData
   * @param {Error} data
   * @param {Event} context
   * @return {?}
   */
  function filter(node, keepData, data, context) {
    var res;
    if (r) {
      res = func(node, context);
    } else {
      res = select(node, context);
    }
    if (!res) {
      return null;
    }
    var event = render.getPooled(eventTypes.beforeInput, data, context);
    event.data = res;
    eventUtil.accumulateTwoPhaseDispatches(event);
    return event;
  }
  /** @type {Array} */
  var restricted = [9, 13, 27, 32];
  /** @type {number} */
  var ENTER_KEY = 229;
  var p = vars.canUseDOM && "CompositionEvent" in window;
  /** @type {null} */
  var _ref = null;
  if (vars.canUseDOM && "documentMode" in document) {
    _ref = document.documentMode;
  }
  var r = vars.canUseDOM && ("TextEvent" in window && (!_ref && !c()));
  var rsa_enable = vars.canUseDOM && (!p || _ref && (_ref > 8 && _ref <= 11));
  /** @type {number} */
  var i = 32;
  /** @type {string} */
  var object = String.fromCharCode(i);
  var topLevelTypes = dataAndEvents.topLevelTypes;
  var eventTypes = {
    beforeInput : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onBeforeInput : null
        }),
        captured : $sanitize({
          onBeforeInputCapture : null
        })
      },
      dependencies : [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
    },
    compositionEnd : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onCompositionEnd : null
        }),
        captured : $sanitize({
          onCompositionEndCapture : null
        })
      },
      dependencies : [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionStart : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onCompositionStart : null
        }),
        captured : $sanitize({
          onCompositionStartCapture : null
        })
      },
      dependencies : [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionUpdate : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onCompositionUpdate : null
        }),
        captured : $sanitize({
          onCompositionUpdateCapture : null
        })
      },
      dependencies : [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    }
  };
  /** @type {boolean} */
  var event = false;
  /** @type {null} */
  var next = null;
  var JsDiff = {
    eventTypes : eventTypes,
    /**
     * @param {string} topLevelType
     * @param {string} name
     * @param {Error} inplace
     * @param {Event} nativeEvent
     * @return {?}
     */
    extractEvents : function(topLevelType, name, inplace, nativeEvent) {
      return[trigger(topLevelType, name, inplace, nativeEvent), filter(topLevelType, name, inplace, nativeEvent)];
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactPerf", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} deepDataAndEvents
   * @param {?} events
   * @param {?} dataAndEvents
   * @return {?}
   */
  function clone(deepDataAndEvents, events, dataAndEvents) {
    return dataAndEvents;
  }
  var proto = {
    enableMeasure : false,
    /** @type {function (?, ?, ?): ?} */
    storedMeasure : clone,
    /**
     * @param {?} value
     * @param {string} dataAndEvents
     * @param {?} opt_attributes
     * @return {undefined}
     */
    measureMethods : function(value, dataAndEvents, opt_attributes) {
    },
    /**
     * @param {string} numCommands
     * @param {string} func
     * @param {Function} fn
     * @return {?}
     */
    measure : function(numCommands, func, fn) {
      return fn;
    },
    injection : {
      /**
       * @param {Function} measure
       * @return {undefined}
       */
      injectMeasure : function(measure) {
        /** @type {Function} */
        proto.storedMeasure = measure;
      }
    }
  };
  module.exports = proto;
}, null);
__d("ReactOwner", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, equal) {
  var Data = {
    /**
     * @param {Object} owner
     * @return {?}
     */
    isValidOwner : function(owner) {
      return!!(owner && (typeof owner.attachRef === "function" && typeof owner.detachRef === "function"));
    },
    /**
     * @param {?} component
     * @param {?} ref
     * @param {Object} owner
     * @return {undefined}
     */
    addComponentAsRefTo : function(component, ref, owner) {
      equal(Data.isValidOwner(owner));
      owner.attachRef(ref, component);
    },
    /**
     * @param {Object} keepData
     * @param {?} ref
     * @param {Object} owner
     * @return {undefined}
     */
    removeComponentAsRefFrom : function(keepData, ref, owner) {
      equal(Data.isValidOwner(owner));
      if (owner.getPublicInstance().refs[ref] === keepData.getPublicInstance()) {
        owner.detachRef(ref);
      }
    }
  };
  module.exports = Data;
}, null);
__d("ReactRef", ["ReactOwner"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, options) {
  /**
   * @param {?} errorCB
   * @param {?} callback
   * @param {Object} selector
   * @return {undefined}
   */
  function find(errorCB, callback, selector) {
    if (typeof errorCB === "function") {
      errorCB(callback.getPublicInstance());
    } else {
      options.addComponentAsRefTo(callback, errorCB, selector);
    }
  }
  /**
   * @param {?} f
   * @param {Object} key
   * @param {Object} src
   * @return {undefined}
   */
  function callback(f, key, src) {
    if (typeof f === "function") {
      f(null);
    } else {
      options.removeComponentAsRefFrom(key, f, src);
    }
  }
  var JsDiff = {};
  /**
   * @param {?} elems
   * @param {Object} value
   * @return {undefined}
   */
  JsDiff.attachRefs = function(elems, value) {
    var result = value.ref;
    if (result != null) {
      find(result, elems, value._owner);
    }
  };
  /**
   * @param {?} dataAndEvents
   * @param {Object} value
   * @param {Object} props
   * @return {?}
   */
  JsDiff.shouldUpdateRefs = function(dataAndEvents, value, props) {
    return props._owner !== value._owner || props.ref !== value.ref;
  };
  /**
   * @param {Object} key
   * @param {Object} value
   * @return {undefined}
   */
  JsDiff.detachRefs = function(key, value) {
    var result = value.ref;
    if (result != null) {
      callback(result, key, value._owner);
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactReconciler", ["ReactRef", "ReactElementValidator"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, assert, opt_attributes) {
  /**
   * @return {undefined}
   */
  function si() {
    assert.attachRefs(this, this._currentElement);
  }
  var JsDiff = {
    /**
     * @param {string} keepData
     * @param {string} transaction
     * @param {string} t
     * @param {string} obj
     * @return {?}
     */
    mountComponent : function(keepData, transaction, t, obj) {
      var p = keepData.mountComponent(transaction, t, obj);
      t.getReactMountReady().enqueue(si, keepData);
      return p;
    },
    /**
     * @param {?} child
     * @return {undefined}
     */
    unmountComponent : function(child) {
      assert.detachRefs(child, child._currentElement);
      child.unmountComponent();
    },
    /**
     * @param {Object} cond
     * @param {?} o
     * @param {string} transaction
     * @param {string} t
     * @return {undefined}
     */
    receiveComponent : function(cond, o, transaction, t) {
      var camelKey = cond._currentElement;
      if (o === camelKey && o._owner != null) {
        return;
      }
      var data = assert.shouldUpdateRefs(this, camelKey, o);
      if (data) {
        assert.detachRefs(cond, camelKey);
      }
      cond.receiveComponent(o, transaction, t);
      if (data) {
        transaction.getReactMountReady().enqueue(si, cond);
      }
    },
    /**
     * @param {string} t
     * @param {string} transaction
     * @return {undefined}
     */
    performUpdateIfNecessary : function(t, transaction) {
      t.performUpdateIfNecessary(transaction);
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactUpdates", ["CallbackQueue", "PooledClass", "ReactCurrentOwner", "ReactPerf", "ReactReconciler", "Transaction", "Object.assign", "invariant", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, previous, $rootElement, $route, dimensions, args, NumberTextBox, createObject, apply, done) {
  /**
   * @return {undefined}
   */
  function one() {
    apply(node.ReactReconcileTransaction && config);
  }
  /**
   * @return {undefined}
   */
  function parent() {
    this.reinitializeTransaction();
    /** @type {null} */
    this.dirtyComponentsLength = null;
    this.callbackQueue = previous.getPooled();
    this.reconcileTransaction = node.ReactReconcileTransaction.getPooled();
  }
  /**
   * @param {Function} func
   * @param {?} callback
   * @param {?} node
   * @param {Node} context
   * @param {?} done
   * @return {undefined}
   */
  function bind(func, callback, node, context, done) {
    one();
    config.batchedUpdates(func, callback, node, context, done);
  }
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  function selector_sortOrder(a, b) {
    return a._mountOrder - b._mountOrder;
  }
  /**
   * @param {?} options
   * @return {undefined}
   */
  function compute(options) {
    var len = options.dirtyComponentsLength;
    apply(len === results.length);
    results.sort(selector_sortOrder);
    /** @type {number} */
    var i = 0;
    for (;i < len;i++) {
      var t = results[i];
      var b = t._pendingCallbacks;
      /** @type {null} */
      t._pendingCallbacks = null;
      args.performUpdateIfNecessary(t, options.reconcileTransaction);
      if (b) {
        /** @type {number} */
        var bi = 0;
        for (;bi < b.length;bi++) {
          options.callbackQueue.enqueue(b[bi], t.getPublicInstance());
        }
      }
    }
  }
  /**
   * @param {?} value
   * @return {undefined}
   */
  function callback(value) {
    one();
    done($route.current == null, "enqueueUpdate(): Render methods should be a pure function of props " + "and state; triggering nested component updates from render is not " + "allowed. If necessary, trigger nested updates in " + "componentDidUpdate.");
    if (!config.isBatchingUpdates) {
      config.batchedUpdates(callback, value);
      return;
    }
    results.push(value);
  }
  /**
   * @param {Function} merge
   * @param {?} protoProps
   * @return {undefined}
   */
  function extend(merge, protoProps) {
    apply(config.isBatchingUpdates);
    self.enqueue(merge, protoProps);
    /** @type {boolean} */
    naiveLength = true;
  }
  /** @type {Array} */
  var results = [];
  var self = previous.getPooled();
  /** @type {boolean} */
  var naiveLength = false;
  /** @type {null} */
  var config = null;
  var methods = {
    /**
     * @return {undefined}
     */
    initialize : function() {
      /** @type {number} */
      this.dirtyComponentsLength = results.length;
    },
    /**
     * @return {undefined}
     */
    close : function() {
      if (this.dirtyComponentsLength !== results.length) {
        results.splice(0, this.dirtyComponentsLength);
        resolve();
      } else {
        /** @type {number} */
        results.length = 0;
      }
    }
  };
  var CSHARP_KEYWORDS = {
    /**
     * @return {undefined}
     */
    initialize : function() {
      this.callbackQueue.reset();
    },
    /**
     * @return {undefined}
     */
    close : function() {
      this.callbackQueue.notifyAll();
    }
  };
  /** @type {Array} */
  var ALL_KEYWORDS = [methods, CSHARP_KEYWORDS];
  createObject(parent.prototype, NumberTextBox.Mixin, {
    /**
     * @return {?}
     */
    getTransactionWrappers : function() {
      return ALL_KEYWORDS;
    },
    /**
     * @return {undefined}
     */
    destructor : function() {
      /** @type {null} */
      this.dirtyComponentsLength = null;
      previous.release(this.callbackQueue);
      /** @type {null} */
      this.callbackQueue = null;
      node.ReactReconcileTransaction.release(this.reconcileTransaction);
      /** @type {null} */
      this.reconcileTransaction = null;
    },
    /**
     * @param {Function} fn
     * @param {Array} recurring
     * @param {?} callback
     * @return {?}
     */
    perform : function(fn, recurring, callback) {
      return NumberTextBox.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, fn, recurring, callback);
    }
  });
  $rootElement.addPoolingTo(parent);
  /**
   * @return {undefined}
   */
  var resolve = function() {
    for (;results.length || naiveLength;) {
      if (results.length) {
        var transaction = parent.getPooled();
        transaction.perform(compute, null, transaction);
        parent.release(transaction);
      }
      if (naiveLength) {
        /** @type {boolean} */
        naiveLength = false;
        var obj = self;
        self = previous.getPooled();
        obj.notifyAll();
        previous.release(obj);
      }
    }
  };
  resolve = dimensions.measure("ReactUpdates", "flushBatchedUpdates", resolve);
  var injection = {
    /**
     * @param {Function} object
     * @return {undefined}
     */
    injectReconcileTransaction : function(object) {
      apply(object);
      /** @type {Function} */
      node.ReactReconcileTransaction = object;
    },
    /**
     * @param {Function} values
     * @return {undefined}
     */
    injectBatchingStrategy : function(values) {
      apply(values);
      apply(typeof values.batchedUpdates === "function");
      apply(typeof values.isBatchingUpdates === "boolean");
      /** @type {Function} */
      config = values;
    }
  };
  var node = {
    ReactReconcileTransaction : null,
    /** @type {function (Function, ?, ?, Node, ?): undefined} */
    batchedUpdates : bind,
    /** @type {function (?): undefined} */
    enqueueUpdate : callback,
    flushBatchedUpdates : resolve,
    injection : injection,
    /** @type {function (Function, ?): undefined} */
    asap : extend
  };
  module.exports = node;
}, null);
__d("isTextInputElement", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} element
   * @return {?}
   */
  function filter(element) {
    return element && (element.nodeName === "INPUT" && defaults[element.type] || element.nodeName === "TEXTAREA");
  }
  var defaults = {
    color : true,
    date : true,
    datetime : true,
    "datetime-local" : true,
    email : true,
    month : true,
    number : true,
    password : true,
    range : true,
    search : true,
    tel : true,
    text : true,
    time : true,
    url : true,
    week : true
  };
  /** @type {function (?): ?} */
  module.exports = filter;
}, null);
__d("ChangeEventPlugin", ["EventConstants", "EventPluginHub", "EventPropagators", "ExecutionEnvironment", "ReactUpdates", "SyntheticEvent", "isEventSupported", "isTextInputElement", "keyOf"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, dataAndEvents, _socket, eventUtil, deepDataAndEvents, jQuery, $document, cb, func, onChange) {
  /**
   * @param {Node} elem
   * @return {?}
   */
  function update(elem) {
    return elem.nodeName === "SELECT" || elem.nodeName === "INPUT" && elem.type === "file";
  }
  /**
   * @param {Object} value
   * @return {undefined}
   */
  function listener(value) {
    var restoreScript = $document.getPooled(events.change, doneResults, value);
    eventUtil.accumulateTwoPhaseDispatches(restoreScript);
    jQuery.batchedUpdates(a, restoreScript);
  }
  /**
   * @param {?} event
   * @return {undefined}
   */
  function a(event) {
    _socket.enqueueEvents(event);
    _socket.processEventQueue();
  }
  /**
   * @param {Function} i
   * @param {Function} data
   * @return {undefined}
   */
  function program(i, data) {
    /** @type {Function} */
    target = i;
    /** @type {Function} */
    doneResults = data;
    target.attachEvent("onchange", listener);
  }
  /**
   * @return {undefined}
   */
  function rmEvt() {
    if (!target) {
      return;
    }
    target.detachEvent("onchange", listener);
    /** @type {null} */
    target = null;
    /** @type {null} */
    doneResults = null;
  }
  /**
   * @param {string} topLevelType
   * @param {string} keepData
   * @param {Error} object
   * @return {?}
   */
  function freeze(topLevelType, keepData, object) {
    if (topLevelType === topLevelTypes.topChange) {
      return object;
    }
  }
  /**
   * @param {string} topLevelType
   * @param {?} dataName
   * @param {Object} inplace
   * @return {undefined}
   */
  function handleEventsForChangeEventIE8(topLevelType, dataName, inplace) {
    if (topLevelType === topLevelTypes.topFocus) {
      rmEvt();
      program(dataName, inplace);
    } else {
      if (topLevelType === topLevelTypes.topBlur) {
        rmEvt();
      }
    }
  }
  /**
   * @param {Object} obj
   * @param {Function} data
   * @return {undefined}
   */
  function value(obj, data) {
    /** @type {Object} */
    target = obj;
    /** @type {Function} */
    doneResults = data;
    id = obj.value;
    /** @type {(ObjectPropertyDescriptor|undefined)} */
    ret = Object.getOwnPropertyDescriptor(obj.constructor.prototype, "value");
    Object.defineProperty(target, "value", open_property);
    target.attachEvent("onpropertychange", handler);
  }
  /**
   * @return {undefined}
   */
  function init() {
    if (!target) {
      return;
    }
    delete target.value;
    target.detachEvent("onpropertychange", handler);
    /** @type {null} */
    target = null;
    /** @type {null} */
    doneResults = null;
    /** @type {null} */
    id = null;
    /** @type {null} */
    ret = null;
  }
  /**
   * @param {Object} event
   * @return {undefined}
   */
  function handler(event) {
    if (event.propertyName !== "value") {
      return;
    }
    var key = event.srcElement.value;
    if (key === id) {
      return;
    }
    id = key;
    listener(event);
  }
  /**
   * @param {string} topLevelType
   * @param {string} key
   * @param {Error} data
   * @return {?}
   */
  function dataAttr(topLevelType, key, data) {
    if (topLevelType === topLevelTypes.topInput) {
      return data;
    }
  }
  /**
   * @param {string} topLevelType
   * @param {string} node
   * @param {Object} inplace
   * @return {undefined}
   */
  function add(topLevelType, node, inplace) {
    if (topLevelType === topLevelTypes.topFocus) {
      init();
      value(node, inplace);
    } else {
      if (topLevelType === topLevelTypes.topBlur) {
        init();
      }
    }
  }
  /**
   * @param {?} topLevelType
   * @param {string} keepData
   * @param {Error} data
   * @return {?}
   */
  function remove(topLevelType, keepData, data) {
    if (topLevelType === topLevelTypes.topSelectionChange || (topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown)) {
      if (target && target.value !== id) {
        id = target.value;
        return doneResults;
      }
    }
  }
  /**
   * @param {Node} node
   * @return {?}
   */
  function isCheckable(node) {
    return node.nodeName === "INPUT" && (node.type === "checkbox" || node.type === "radio");
  }
  /**
   * @param {string} topLevelType
   * @param {string} keepData
   * @param {Error} object
   * @return {?}
   */
  function seal(topLevelType, keepData, object) {
    if (topLevelType === topLevelTypes.topClick) {
      return object;
    }
  }
  var topLevelTypes = dataAndEvents.topLevelTypes;
  var events = {
    change : {
      phasedRegistrationNames : {
        bubbled : onChange({
          onChange : null
        }),
        captured : onChange({
          onChangeCapture : null
        })
      },
      dependencies : [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
    }
  };
  /** @type {null} */
  var target = null;
  /** @type {null} */
  var doneResults = null;
  /** @type {null} */
  var id = null;
  /** @type {null} */
  var ret = null;
  /** @type {boolean} */
  var w = false;
  if (deepDataAndEvents.canUseDOM) {
    w = cb("change") && (!("documentMode" in document) || document.documentMode > 8);
  }
  /** @type {boolean} */
  var da = false;
  if (deepDataAndEvents.canUseDOM) {
    da = cb("input") && (!("documentMode" in document) || document.documentMode > 9);
  }
  var open_property = {
    /**
     * @return {?}
     */
    get : function() {
      return ret.get.call(this);
    },
    /**
     * @param {?} text
     * @return {undefined}
     */
    set : function(text) {
      /** @type {string} */
      id = "" + text;
      ret.set.call(this, text);
    }
  };
  var JsDiff = {
    eventTypes : events,
    /**
     * @param {string} topLevelType
     * @param {string} name
     * @param {Error} inplace
     * @param {Event} nativeEvent
     * @return {?}
     */
    extractEvents : function(topLevelType, name, inplace, nativeEvent) {
      var getTargetIDFunc;
      var handleEventFunc;
      if (update(name)) {
        if (w) {
          /** @type {function (string, string, Error): ?} */
          getTargetIDFunc = freeze;
        } else {
          /** @type {function (string, ?, Object): undefined} */
          handleEventFunc = handleEventsForChangeEventIE8;
        }
      } else {
        if (func(name)) {
          if (da) {
            /** @type {function (string, string, Error): ?} */
            getTargetIDFunc = dataAttr;
          } else {
            /** @type {function (?, string, Error): ?} */
            getTargetIDFunc = remove;
            /** @type {function (string, string, Object): undefined} */
            handleEventFunc = add;
          }
        } else {
          if (isCheckable(name)) {
            /** @type {function (string, string, Error): ?} */
            getTargetIDFunc = seal;
          }
        }
      }
      if (getTargetIDFunc) {
        var targetID = getTargetIDFunc(topLevelType, name, inplace);
        if (targetID) {
          var event = $document.getPooled(events.change, targetID, nativeEvent);
          eventUtil.accumulateTwoPhaseDispatches(event);
          return event;
        }
      }
      if (handleEventFunc) {
        handleEventFunc(topLevelType, name, inplace);
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("DefaultEventPluginOrder", ["keyOf"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $sanitize) {
  /** @type {Array} */
  var JsDiff = [$sanitize({
    ResponderEventPlugin : null
  }), $sanitize({
    SimpleEventPlugin : null
  }), $sanitize({
    TapEventPlugin : null
  }), $sanitize({
    EnterLeaveEventPlugin : null
  }), $sanitize({
    ChangeEventPlugin : null
  }), $sanitize({
    SelectEventPlugin : null
  }), $sanitize({
    BeforeInputEventPlugin : null
  }), $sanitize({
    AnalyticsEventPlugin : null
  }), $sanitize({
    MobileSafariClickEventPlugin : null
  })];
  /** @type {Array} */
  module.exports = JsDiff;
}, null);
__d("SyntheticUIEvent", ["SyntheticEvent", "getEventTarget"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback, template) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var args = {
    /**
     * @param {Event} context
     * @return {?}
     */
    view : function(context) {
      if (context.view) {
        return context.view;
      }
      var result = template(context);
      if (result != null && result.window === result) {
        return result;
      }
      var doc = result.ownerDocument;
      if (doc) {
        return doc.defaultView || doc.parentWindow;
      } else {
        return window;
      }
    },
    /**
     * @param {Event} params
     * @return {?}
     */
    detail : function(params) {
      return params.detail || 0;
    }
  };
  callback.augmentClass(compile, args);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("getEventModifierState", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} path
   * @return {?}
   */
  function value(path) {
    var event = this;
    var files = event.nativeEvent;
    if (files.getModifierState) {
      return files.getModifierState(path);
    }
    var name = tokens[path];
    return name ? !!files[name] : false;
  }
  /**
   * @param {string} attribute
   * @return {?}
   */
  function attr(attribute) {
    return value;
  }
  var tokens = {
    Alt : "altKey",
    Control : "ctrlKey",
    Meta : "metaKey",
    Shift : "shiftKey"
  };
  /** @type {function (string): ?} */
  module.exports = attr;
}, null);
__d("SyntheticMouseEvent", ["SyntheticUIEvent", "ViewportMetrics", "getEventModifierState"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, callback, scroll, dataAndEvents) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var ev = {
    screenX : null,
    screenY : null,
    clientX : null,
    clientY : null,
    ctrlKey : null,
    shiftKey : null,
    altKey : null,
    metaKey : null,
    getModifierState : dataAndEvents,
    /**
     * @param {Event} event
     * @return {?}
     */
    button : function(event) {
      var button = event.button;
      if ("which" in event) {
        return button;
      }
      return button === 2 ? 2 : button === 4 ? 1 : 0;
    },
    buttons : null,
    /**
     * @param {Event} event
     * @return {?}
     */
    relatedTarget : function(event) {
      return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
    },
    /**
     * @param {Object} event
     * @return {?}
     */
    pageX : function(event) {
      return "pageX" in event ? event.pageX : event.clientX + scroll.currentScrollLeft;
    },
    /**
     * @param {Event} event
     * @return {?}
     */
    pageY : function(event) {
      return "pageY" in event ? event.pageY : event.clientY + scroll.currentScrollTop;
    }
  };
  callback.augmentClass(compile, ev);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("ReactInstanceMap", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData) {
  var self = {
    /**
     * @param {Element} selector
     * @return {undefined}
     */
    remove : function(selector) {
      selector._reactInternalInstance = void 0;
    },
    /**
     * @param {?} num
     * @return {?}
     */
    get : function(num) {
      return num._reactInternalInstance;
    },
    /**
     * @param {string} property
     * @return {?}
     */
    has : function(property) {
      return property._reactInternalInstance !== void 0;
    },
    /**
     * @param {?} text
     * @param {string} type
     * @return {undefined}
     */
    set : function(text, type) {
      /** @type {string} */
      text._reactInternalInstance = type;
    }
  };
  context.exports = self;
}, null);
__d("ReactEmptyComponent", ["ReactElement", "ReactInstanceMap", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, d, $templateCache, done) {
  /**
   * @param {?} f
   * @return {undefined}
   */
  function isFunction(f) {
    /** @type {boolean} */
    grp[f] = true;
  }
  /**
   * @param {?} f
   * @return {undefined}
   */
  function tryIt(f) {
    delete grp[f];
  }
  /**
   * @param {?} timeoutKey
   * @return {?}
   */
  function scheduleFunction(timeoutKey) {
    return!!grp[timeoutKey];
  }
  var error;
  var grp = {};
  var injection = {
    /**
     * @param {string} name
     * @return {undefined}
     */
    injectEmptyComponent : function(name) {
      error = d.createFactory(name);
    }
  };
  /**
   * @return {undefined}
   */
  var tag = function() {
  };
  /**
   * @return {undefined}
   */
  tag.prototype.componentDidMount = function() {
    var comp = $templateCache.get(this);
    if (!comp) {
      return;
    }
    isFunction(comp._rootNodeID);
  };
  /**
   * @return {undefined}
   */
  tag.prototype.componentWillUnmount = function() {
    var fnReturn = $templateCache.get(this);
    if (!fnReturn) {
      return;
    }
    tryIt(fnReturn._rootNodeID);
  };
  /**
   * @return {?}
   */
  tag.prototype.render = function() {
    done(error);
    return error();
  };
  var elements = d.createElement(tag);
  var JsDiff = {
    emptyElement : elements,
    injection : injection,
    /** @type {function (?): ?} */
    isNullComponentID : scheduleFunction
  };
  module.exports = JsDiff;
}, null);
__d("ReactRootIndex", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var injection = {
    /**
     * @param {?} prototype
     * @return {undefined}
     */
    injectCreateReactRootIndex : function(prototype) {
      Type.createReactRootIndex = prototype;
    }
  };
  var Type = {
    createReactRootIndex : null,
    injection : injection
  };
  module.exports = Type;
}, null);
__d("ReactInstanceHandles", ["ReactRootIndex", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, expect) {
  /**
   * @param {?} obj
   * @return {?}
   */
  function isArray(obj) {
    return extension + obj.toString(36);
  }
  /**
   * @param {string} state
   * @param {number} i
   * @return {?}
   */
  function callback(state, i) {
    return state.charAt(i) === extension || i === state.length;
  }
  /**
   * @param {string} text
   * @return {?}
   */
  function trim(text) {
    return text === "" || text.charAt(0) === extension && text.charAt(text.length - 1) !== extension;
  }
  /**
   * @param {string} object
   * @param {string} value
   * @return {?}
   */
  function toString(object, value) {
    return value.indexOf(object) === 0 && callback(value, object.length);
  }
  /**
   * @param {string} entry
   * @return {?}
   */
  function add(entry) {
    return entry ? entry.substr(0, entry.lastIndexOf(extension)) : "";
  }
  /**
   * @param {string} name
   * @param {string} value
   * @return {?}
   */
  function set(name, value) {
    expect(trim(name) && trim(value));
    expect(toString(name, value));
    if (name === value) {
      return name;
    }
    var to = name.length + len;
    var index;
    index = to;
    for (;index < value.length;index++) {
      if (callback(value, index)) {
        break;
      }
    }
    return value.substr(0, index);
  }
  /**
   * @param {string} s
   * @param {string} string
   * @return {?}
   */
  function success(s, string) {
    /** @type {number} */
    var maxRange = Math.min(s.length, string.length);
    if (maxRange === 0) {
      return "";
    }
    /** @type {number} */
    var pos = 0;
    /** @type {number} */
    var i = 0;
    for (;i <= maxRange;i++) {
      if (callback(s, i) && callback(string, i)) {
        /** @type {number} */
        pos = i;
      } else {
        if (s.charAt(i) !== string.charAt(i)) {
          break;
        }
      }
    }
    var value = s.substr(0, pos);
    expect(trim(value));
    return value;
  }
  /**
   * @param {Function} str
   * @param {(Function|string)} value
   * @param {Function} func
   * @param {Function} deepDataAndEvents
   * @param {boolean} recurring
   * @param {boolean} commas
   * @return {undefined}
   */
  function replacer(str, value, func, deepDataAndEvents, recurring, commas) {
    str = str || "";
    value = value || "";
    expect(str !== value);
    var type = toString(value, str);
    expect(type || toString(str, value));
    /** @type {number} */
    var index = 0;
    /** @type {Function} */
    var fun = type ? add : set;
    /** @type {Function} */
    var name = str;
    for (;;name = fun(name, value)) {
      var ret;
      if ((!recurring || name !== str) && (!commas || name !== value)) {
        ret = func(name, type, deepDataAndEvents);
      }
      if (ret === false || name === value) {
        break;
      }
      expect(index++ < length);
    }
  }
  /** @type {string} */
  var extension = ".";
  /** @type {number} */
  var len = extension.length;
  /** @type {number} */
  var length = 100;
  var JsDiff = {
    /**
     * @return {?}
     */
    createReactRootID : function() {
      return isArray(dataAndEvents.createReactRootIndex());
    },
    /**
     * @param {number} far
     * @param {number} near
     * @return {?}
     */
    createReactID : function(far, near) {
      return far + near;
    },
    /**
     * @param {string} path
     * @return {?}
     */
    getReactRootIDFromNodeID : function(path) {
      if (path && (path.charAt(0) === extension && path.length > 1)) {
        var index = path.indexOf(extension, 1);
        return index > -1 ? path.substr(0, index) : path;
      }
      return null;
    },
    /**
     * @param {Object} key
     * @param {Function} resp
     * @param {Function} obj
     * @param {?} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    traverseEnterLeave : function(key, resp, obj, deepDataAndEvents, dataAndEvents) {
      var v = success(key, resp);
      if (v !== key) {
        replacer(key, v, obj, deepDataAndEvents, false, true);
      }
      if (v !== resp) {
        replacer(v, resp, obj, dataAndEvents, true, false);
      }
    },
    /**
     * @param {Function} key
     * @param {Function} obj
     * @param {Function} deepDataAndEvents
     * @return {undefined}
     */
    traverseTwoPhase : function(key, obj, deepDataAndEvents) {
      if (key) {
        replacer("", key, obj, deepDataAndEvents, true, false);
        replacer(key, "", obj, deepDataAndEvents, false, true);
      }
    },
    /**
     * @param {(Array|string)} v
     * @param {Function} obj
     * @param {Function} deepDataAndEvents
     * @return {undefined}
     */
    traverseAncestors : function(v, obj, deepDataAndEvents) {
      replacer("", v, obj, deepDataAndEvents, true, false);
    },
    /** @type {function (string, string): ?} */
    _getFirstCommonAncestorID : success,
    /** @type {function (string, string): ?} */
    _getNextDescendantID : set,
    /** @type {function (string, string): ?} */
    isAncestorIDOf : toString,
    SEPARATOR : extension
  };
  module.exports = JsDiff;
}, null);
__d("adler32", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} attribute
   * @return {?}
   */
  function attr(attribute) {
    /** @type {number} */
    var x = 1;
    /** @type {number} */
    var y = 0;
    /** @type {number} */
    var pos = 0;
    for (;pos < attribute.length;pos++) {
      /** @type {number} */
      x = (x + attribute.charCodeAt(pos)) % bounds;
      /** @type {number} */
      y = (y + x) % bounds;
    }
    return x | y << 16;
  }
  /** @type {number} */
  var bounds = 65521;
  /** @type {function (string): ?} */
  module.exports = attr;
}, null);
__d("ReactMarkupChecksum", ["adler32"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $) {
  var attr = {
    CHECKSUM_ATTR_NAME : "data-react-checksum",
    /**
     * @param {string} markup
     * @return {?}
     */
    addChecksumToMarkup : function(markup) {
      var message = $(markup);
      return markup.replace(">", " " + attr.CHECKSUM_ATTR_NAME + '="' + message + '">');
    },
    /**
     * @param {string} arg
     * @param {Element} element
     * @return {?}
     */
    canReuseMarkup : function(arg, element) {
      var start = element.getAttribute(attr.CHECKSUM_ATTR_NAME);
      start = start && parseInt(start, 10);
      var type = $(arg);
      return type === start;
    }
  };
  module.exports = attr;
}, null);
__d("ReactLifeCycle", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    currentlyMountingInstance : null,
    currentlyUnmountingInstance : null
  };
  module.exports = JsDiff;
}, null);
__d("ReactUpdateQueue", ["ReactLifeCycle", "ReactCurrentOwner", "ReactElement", "ReactInstanceMap", "ReactUpdates", "Object.assign", "invariant", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, user, $route, jQuery, pos, shims, apply, assert, opt_attributes) {
  /**
   * @param {Function} object
   * @return {undefined}
   */
  function hasKey(object) {
    if (object !== user.currentlyMountingInstance) {
      shims.enqueueUpdate(object);
    }
  }
  /**
   * @param {?} cur
   * @param {string} message
   * @return {?}
   */
  function equal(cur, message) {
    assert($route.current == null);
    var x = pos.get(cur);
    if (!x) {
      return null;
    }
    if (x === user.currentlyUnmountingInstance) {
      return null;
    }
    return x;
  }
  var JsDiff = {
    /**
     * @param {?} first
     * @param {?} callback
     * @return {?}
     */
    enqueueCallback : function(first, callback) {
      assert(typeof callback === "function");
      var value = equal(first);
      if (!value || value === user.currentlyMountingInstance) {
        return null;
      }
      if (value._pendingCallbacks) {
        value._pendingCallbacks.push(callback);
      } else {
        /** @type {Array} */
        value._pendingCallbacks = [callback];
      }
      hasKey(value);
    },
    /**
     * @param {Function} fn
     * @param {Function} callback
     * @return {undefined}
     */
    enqueueCallbackInternal : function(fn, callback) {
      assert(typeof callback === "function");
      if (fn._pendingCallbacks) {
        fn._pendingCallbacks.push(callback);
      } else {
        /** @type {Array} */
        fn._pendingCallbacks = [callback];
      }
      hasKey(fn);
    },
    /**
     * @param {?} first
     * @return {undefined}
     */
    enqueueForceUpdate : function(first) {
      var result = equal(first, "forceUpdate");
      if (!result) {
        return;
      }
      /** @type {boolean} */
      result._pendingForceUpdate = true;
      hasKey(result);
    },
    /**
     * @param {?} first
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    enqueueReplaceState : function(first, dataAndEvents) {
      var result = equal(first, "replaceState");
      if (!result) {
        return;
      }
      /** @type {Array} */
      result._pendingStateQueue = [dataAndEvents];
      /** @type {boolean} */
      result._pendingReplaceState = true;
      hasKey(result);
    },
    /**
     * @param {?} first
     * @param {?} child
     * @return {undefined}
     */
    enqueueSetState : function(first, child) {
      var result = equal(first, "setState");
      if (!result) {
        return;
      }
      var paragraph = result._pendingStateQueue || (result._pendingStateQueue = []);
      paragraph.push(child);
      hasKey(result);
    },
    /**
     * @param {?} first
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    enqueueSetProps : function(first, deepDataAndEvents) {
      var result = equal(first, "setProps");
      if (!result) {
        return;
      }
      assert(result._isTopLevel);
      var self = result._pendingElement || result._currentElement;
      var dataAndEvents = apply({}, self.props, deepDataAndEvents);
      result._pendingElement = jQuery.cloneAndReplaceProps(self, dataAndEvents);
      hasKey(result);
    },
    /**
     * @param {?} first
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    enqueueReplaceProps : function(first, dataAndEvents) {
      var result = equal(first, "replaceProps");
      if (!result) {
        return;
      }
      assert(result._isTopLevel);
      var which = result._pendingElement || result._currentElement;
      result._pendingElement = jQuery.cloneAndReplaceProps(which, dataAndEvents);
      hasKey(result);
    },
    /**
     * @param {Function} fn
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    enqueueElementInternal : function(fn, dataAndEvents) {
      fn._pendingElement = dataAndEvents;
      hasKey(fn);
    }
  };
  module.exports = JsDiff;
}, null);
__d("getReactRootElementInContainer", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} node
   * @return {?}
   */
  function create(node) {
    if (!node) {
      return null;
    }
    if (node.nodeType === num) {
      return node.documentElement;
    } else {
      return node.firstChild;
    }
  }
  /** @type {number} */
  var num = 9;
  /** @type {function (string): ?} */
  module.exports = create;
}, null);
__d("ReactComponentEnvironment", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, ok) {
  /** @type {boolean} */
  var handlerCalled = false;
  var JsDiff = {
    unmountIDFromEnvironment : null,
    replaceNodeWithMarkupByID : null,
    processChildrenUpdates : null,
    injection : {
      /**
       * @param {?} triggerRoute
       * @return {undefined}
       */
      injectEnvironment : function(triggerRoute) {
        ok(!handlerCalled);
        JsDiff.unmountIDFromEnvironment = triggerRoute.unmountIDFromEnvironment;
        JsDiff.replaceNodeWithMarkupByID = triggerRoute.replaceNodeWithMarkupByID;
        JsDiff.processChildrenUpdates = triggerRoute.processChildrenUpdates;
        /** @type {boolean} */
        handlerCalled = true;
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("shouldUpdateReactComponent", ["warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, opt_attributes) {
  /**
   * @param {string} node
   * @param {Object} value
   * @return {?}
   */
  function filter(node, value) {
    if (node != null && value != null) {
      /** @type {string} */
      var t = typeof node;
      /** @type {string} */
      var type = typeof value;
      if (t === "string" || t === "number") {
        return type === "string" || type === "number";
      } else {
        if (type === "object" && (node.type === value.type && node.key === value.key)) {
          /** @type {boolean} */
          var event = node._owner === value._owner;
          /** @type {null} */
          var n = null;
          /** @type {null} */
          var o = null;
          /** @type {null} */
          var p = null;
          return event;
        }
      }
    }
    return false;
  }
  /** @type {function (string, Object): ?} */
  module.exports = filter;
}, null);
__d("ReactCompositeComponent", ["ReactComponentEnvironment", "ReactContext", "ReactCurrentOwner", "ReactElement", "ReactElementValidator", "ReactInstanceMap", "ReactLifeCycle", "ReactNativeComponent", "ReactPerf", "ReactPropTypeLocations", "ReactPropTypeLocationNames", "ReactReconciler", "ReactUpdates", "Object.assign", "emptyObject", "invariant", "shouldUpdateReactComponent", "warning"], function(dataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, Handlebars, $route,
stream, fn, matcherFunction, self, first, deepDataAndEvents, assert, clone, execResult, child, gridStore, extend, b, ok, proceed, set) {
  /**
   * @param {?} elems
   * @return {?}
   */
  function getText(elems) {
    var field = elems._currentElement._owner || null;
    if (field) {
      var ea = field.getName();
      if (ea) {
        return " Check the render method of `" + ea + "`.";
      }
    }
    return "";
  }
  /** @type {number} */
  var _mountOrder = 1;
  var valid = {
    /**
     * @param {?} keepData
     * @return {undefined}
     */
    construct : function(keepData) {
      this._currentElement = keepData;
      /** @type {null} */
      this._rootNodeID = null;
      /** @type {null} */
      this._instance = null;
      /** @type {null} */
      this._pendingElement = null;
      /** @type {null} */
      this._pendingStateQueue = null;
      /** @type {boolean} */
      this._pendingReplaceState = false;
      /** @type {boolean} */
      this._pendingForceUpdate = false;
      /** @type {null} */
      this._renderedComponent = null;
      /** @type {null} */
      this._context = null;
      /** @type {number} */
      this._mountOrder = 0;
      /** @type {boolean} */
      this._isTopLevel = false;
      /** @type {null} */
      this._pendingCallbacks = null;
    },
    /**
     * @param {string} transaction
     * @param {string} callback
     * @param {string} fn
     * @return {?}
     */
    mountComponent : function(transaction, callback, fn) {
      /** @type {string} */
      this._context = fn;
      /** @type {number} */
      this._mountOrder = _mountOrder++;
      /** @type {string} */
      this._rootNodeID = transaction;
      var id = this._processProps(this._currentElement.props);
      var type = this._processContext(this._currentElement._context);
      var String = deepDataAndEvents.getComponentClassForElement(this._currentElement);
      var data = new String(id, type);
      data.props = id;
      data.context = type;
      data.refs = b;
      this._instance = data;
      self.set(data, this);
      var state = data.state;
      if (state === void 0) {
        /** @type {null} */
        data.state = state = null;
      }
      ok(typeof state === "object" && !Array.isArray(state));
      /** @type {null} */
      this._pendingStateQueue = null;
      /** @type {boolean} */
      this._pendingReplaceState = false;
      /** @type {boolean} */
      this._pendingForceUpdate = false;
      var attribute;
      var i = first.currentlyMountingInstance;
      first.currentlyMountingInstance = this;
      try {
        if (data.componentWillMount) {
          data.componentWillMount();
          if (this._pendingStateQueue) {
            data.state = this._processPendingState(data.props, data.context);
          }
        }
        attribute = this._renderValidatedComponent();
      } finally {
        first.currentlyMountingInstance = i;
      }
      this._renderedComponent = this._instantiateReactComponent(attribute, this._currentElement.type);
      var element = child.mountComponent(this._renderedComponent, transaction, callback, this._processChildContext(fn));
      if (data.componentDidMount) {
        callback.getReactMountReady().enqueue(data.componentDidMount, data);
      }
      return element;
    },
    /**
     * @return {undefined}
     */
    unmountComponent : function() {
      var className = this._instance;
      if (className.componentWillUnmount) {
        var i = first.currentlyUnmountingInstance;
        first.currentlyUnmountingInstance = this;
        try {
          className.componentWillUnmount();
        } finally {
          first.currentlyUnmountingInstance = i;
        }
      }
      child.unmountComponent(this._renderedComponent);
      /** @type {null} */
      this._renderedComponent = null;
      /** @type {null} */
      this._pendingStateQueue = null;
      /** @type {boolean} */
      this._pendingReplaceState = false;
      /** @type {boolean} */
      this._pendingForceUpdate = false;
      /** @type {null} */
      this._pendingCallbacks = null;
      /** @type {null} */
      this._pendingElement = null;
      /** @type {null} */
      this._context = null;
      /** @type {null} */
      this._rootNodeID = null;
      self.remove(className);
    },
    /**
     * @param {?} actions
     * @param {?} callback
     * @return {undefined}
     */
    _setPropsInternal : function(actions, callback) {
      var me = this._pendingElement || this._currentElement;
      this._pendingElement = fn.cloneAndReplaceProps(me, extend({}, me.props, actions));
      gridStore.enqueueUpdate(this, callback);
    },
    /**
     * @param {Object} obj
     * @return {?}
     */
    _maskContext : function(obj) {
      /** @type {null} */
      var old = null;
      if (typeof this._currentElement.type === "string") {
        return b;
      }
      var testSource = this._currentElement.type.contextTypes;
      if (!testSource) {
        return b;
      }
      old = {};
      var name;
      for (name in testSource) {
        old[name] = obj[name];
      }
      return old;
    },
    /**
     * @param {Object} walkers
     * @return {?}
     */
    _processContext : function(walkers) {
      var maskedContext = this._maskContext(walkers);
      return maskedContext;
    },
    /**
     * @param {string} obj
     * @return {?}
     */
    _processChildContext : function(obj) {
      var protoProps = this._instance;
      var copy = protoProps.getChildContext && protoProps.getChildContext();
      if (copy) {
        ok(typeof protoProps.constructor.childContextTypes === "object");
        var prop;
        for (prop in copy) {
          ok(prop in protoProps.constructor.childContextTypes);
        }
        return extend({}, obj, copy);
      }
      return obj;
    },
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    _processProps : function(dataAndEvents) {
      return dataAndEvents;
    },
    /**
     * @param {Object} propTypes
     * @param {?} props
     * @param {?} location
     * @return {undefined}
     */
    _checkPropTypes : function(propTypes, props, location) {
      var componentName = this.getName();
      var propName;
      for (propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error;
          try {
            ok(typeof propTypes[propName] === "function");
            error = propTypes[propName](props, propName, componentName, location);
          } catch (err) {
            error = err;
          }
          if (error instanceof Error) {
            var gameConfig = getText(this);
            if (location === clone.prop) {
              set(false, "Failed Composite propType: %s", error.message + gameConfig);
            } else {
              set(false, "Failed Context Types: %s", error.message + gameConfig);
            }
          }
        }
      }
    },
    /**
     * @param {?} key
     * @param {?} transaction
     * @param {string} t
     * @return {undefined}
     */
    receiveComponent : function(key, transaction, t) {
      var concreteCmp = this._currentElement;
      var tr = this._context;
      /** @type {null} */
      this._pendingElement = null;
      this.updateComponent(transaction, concreteCmp, key, tr, t);
    },
    /**
     * @param {string} transaction
     * @return {undefined}
     */
    performUpdateIfNecessary : function(transaction) {
      if (this._pendingElement != null) {
        child.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
      }
      if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
        this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
      }
    },
    /**
     * @param {Error} a
     * @param {Error} b
     * @return {undefined}
     */
    _warnIfContextsDiffer : function(a, b) {
      a = this._maskContext(a);
      b = this._maskContext(b);
      var codeSegments = Object.keys(b).sort();
      var le = this.getName() || "ReactCompositeComponent";
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var k = codeSegments[i];
        set(a[k] === b[k], "owner-based and parent-based contexts differ " + "(values: `%s` vs `%s`) for key (%s) while mounting %s " + "(see: http://fb.me/react-context-by-parent)", a[k], b[k], k, le);
      }
    },
    /**
     * @param {?} childName
     * @param {?} component
     * @param {?} entry
     * @param {string} statements
     * @param {Object} transaction
     * @return {undefined}
     */
    updateComponent : function(childName, component, entry, statements, transaction) {
      var me = this._instance;
      var ctx = me.context;
      var props = me.props;
      if (component !== entry) {
        ctx = this._processContext(entry._context);
        props = this._processProps(entry.props);
        if (me.componentWillReceiveProps) {
          me.componentWillReceiveProps(props, ctx);
        }
      }
      var result = this._processPendingState(props, ctx);
      var _pendingForceUpdate = this._pendingForceUpdate || (!me.shouldComponentUpdate || me.shouldComponentUpdate(props, result, ctx));
      if (_pendingForceUpdate) {
        /** @type {boolean} */
        this._pendingForceUpdate = false;
        this._performComponentUpdate(entry, props, result, ctx, childName, transaction);
      } else {
        this._currentElement = entry;
        /** @type {Object} */
        this._context = transaction;
        me.props = props;
        me.state = result;
        me.context = ctx;
      }
    },
    /**
     * @param {?} key
     * @param {?} obj
     * @return {?}
     */
    _processPendingState : function(key, obj) {
      var node = this._instance;
      var codeSegments = this._pendingStateQueue;
      var forward = this._pendingReplaceState;
      /** @type {boolean} */
      this._pendingReplaceState = false;
      /** @type {null} */
      this._pendingStateQueue = null;
      if (!codeSegments) {
        return node.state;
      }
      var data = extend({}, forward ? codeSegments[0] : node.state);
      /** @type {number} */
      var i = forward ? 1 : 0;
      for (;i < codeSegments.length;i++) {
        var test = codeSegments[i];
        extend(data, typeof test === "function" ? test.call(node, data, key, obj) : test);
      }
      return data;
    },
    /**
     * @param {?} tweak
     * @param {Object} props
     * @param {string} code
     * @param {?} context
     * @param {string} childName
     * @param {Object} transaction
     * @return {undefined}
     */
    _performComponentUpdate : function(tweak, props, code, context, childName, transaction) {
      var self = this._instance;
      var all = self.props;
      var args = self.state;
      var cb = self.context;
      if (self.componentWillUpdate) {
        self.componentWillUpdate(props, code, context);
      }
      this._currentElement = tweak;
      /** @type {Object} */
      this._context = transaction;
      /** @type {Object} */
      self.props = props;
      /** @type {string} */
      self.state = code;
      self.context = context;
      this._updateRenderedComponent(childName, transaction);
      if (self.componentDidUpdate) {
        childName.getReactMountReady().enqueue(self.componentDidUpdate.bind(self, all, args, cb), self);
      }
    },
    /**
     * @param {string} sqlt
     * @param {string} walkers
     * @return {undefined}
     */
    _updateRenderedComponent : function(sqlt, walkers) {
      var a = this._renderedComponent;
      var aCtor = a._currentElement;
      var attribute = this._renderValidatedComponent();
      if (proceed(aCtor, attribute)) {
        child.receiveComponent(a, attribute, sqlt, this._processChildContext(walkers));
      } else {
        var transaction = this._rootNodeID;
        var al = a._rootNodeID;
        child.unmountComponent(a);
        this._renderedComponent = this._instantiateReactComponent(attribute, this._currentElement.type);
        var deepDataAndEvents = child.mountComponent(this._renderedComponent, transaction, sqlt, walkers);
        this._replaceNodeWithMarkupByID(al, deepDataAndEvents);
      }
    },
    /**
     * @param {string} string
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    _replaceNodeWithMarkupByID : function(string, deepDataAndEvents) {
      Handlebars.replaceNodeWithMarkupByID(string, deepDataAndEvents);
    },
    /**
     * @return {?}
     */
    _renderValidatedComponentWithoutOwnerOrContext : function() {
      var sass = this._instance;
      var _renderValidatedComponentWithoutOwnerOrContext = sass.render();
      return _renderValidatedComponentWithoutOwnerOrContext;
    },
    /**
     * @return {?}
     */
    _renderValidatedComponent : function() {
      var elems;
      var lastRoute = $route.current;
      $route.current = this._processChildContext(this._currentElement._context);
      stream.current = this;
      try {
        elems = this._renderValidatedComponentWithoutOwnerOrContext();
      } finally {
        $route.current = lastRoute;
        /** @type {null} */
        stream.current = null;
      }
      ok(elems === null || (elems === false || fn.isValidElement(elems)));
      return elems;
    },
    /**
     * @param {?} ref
     * @param {?} component
     * @return {undefined}
     */
    attachRef : function(ref, component) {
      var a = this.getPublicInstance();
      var animation2 = a.refs === b ? a.refs = {} : a.refs;
      animation2[ref] = component.getPublicInstance();
    },
    /**
     * @param {?} ref
     * @return {undefined}
     */
    detachRef : function(ref) {
      var refs = this.getPublicInstance().refs;
      delete refs[ref];
    },
    /**
     * @return {?}
     */
    getName : function() {
      var fn = this._currentElement.type;
      var category = this._instance && this._instance.constructor;
      return fn.displayName || (category && category.displayName || (fn.name || (category && category.name || null)));
    },
    /**
     * @return {?}
     */
    getPublicInstance : function() {
      return this._instance;
    },
    _instantiateReactComponent : null
  };
  assert.measureMethods(valid, "ReactCompositeComponent", {
    mountComponent : "mountComponent",
    updateComponent : "updateComponent",
    _renderValidatedComponent : "_renderValidatedComponent"
  });
  var JsDiff = {
    Mixin : valid
  };
  module.exports = JsDiff;
}, null);
__d("instantiateReactComponent", ["ReactCompositeComponent", "ReactEmptyComponent", "ReactNativeComponent", "Object.assign", "invariant", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, seed, _arg, tracker, fn, behavior, opt_attributes) {
  /**
   * @param {Function} x
   * @return {?}
   */
  function cb(x) {
    return typeof x === "function" && (typeof x.prototype.mountComponent === "function" && typeof x.prototype.receiveComponent === "function");
  }
  /**
   * @param {string} name
   * @param {Function} value
   * @return {?}
   */
  function init(name, value) {
    var child;
    if (name === null || name === false) {
      name = _arg.emptyElement;
    }
    if (typeof name === "object") {
      /** @type {string} */
      var info = name;
      if (value === info.type && typeof info.type === "string") {
        child = tracker.createInternalComponent(info);
      } else {
        if (cb(info.type)) {
          child = new info.type(info);
        } else {
          child = new Node;
        }
      }
    } else {
      if (typeof name === "string" || typeof name === "number") {
        child = tracker.createInstanceForText(name);
      } else {
        behavior(false);
      }
    }
    child.construct(name);
    /** @type {number} */
    child._mountIndex = 0;
    /** @type {null} */
    child._mountImage = null;
    return child;
  }
  /**
   * @return {undefined}
   */
  var Node = function() {
  };
  fn(Node.prototype, seed.Mixin, {
    /** @type {function (string, Function): ?} */
    _instantiateReactComponent : init
  });
  /** @type {function (string, Function): ?} */
  module.exports = init;
}, null);
__d("setInnerHTML", ["ExecutionEnvironment"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents) {
  /** @type {RegExp} */
  var rchecked = /^[ \r\n\t\f]/;
  /** @type {RegExp} */
  var spaceRe = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
  /**
   * @param {string} element
   * @param {string} value
   * @return {undefined}
   */
  var highlight = function(element, value) {
    /** @type {string} */
    element.innerHTML = value;
  };
  if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
    /**
     * @param {string} element
     * @param {string} value
     * @return {undefined}
     */
    highlight = function(element, value) {
      MSApp.execUnsafeLocalFunction(function() {
        /** @type {string} */
        element.innerHTML = value;
      });
    };
  }
  if (dataAndEvents.canUseDOM) {
    /** @type {Element} */
    var el = document.createElement("div");
    /** @type {string} */
    el.innerHTML = " ";
    if (el.innerHTML === "") {
      /**
       * @param {Node} node
       * @param {string} value
       * @return {undefined}
       */
      highlight = function(node, value) {
        if (node.parentNode) {
          node.parentNode.replaceChild(node, node);
        }
        if (rchecked.test(value) || value[0] === "<" && spaceRe.test(value)) {
          /** @type {string} */
          node.innerHTML = "\ufeff" + value;
          var child = node.firstChild;
          if (child.data.length === 1) {
            node.removeChild(child);
          } else {
            child.deleteData(0, 1);
          }
        } else {
          /** @type {string} */
          node.innerHTML = value;
        }
      };
    }
  }
  /** @type {function (Node, string): undefined} */
  module.exports = highlight;
}, null);
__d("ReactMount", ["DOMProperty", "ReactBrowserEventEmitter", "ReactCurrentOwner", "ReactElement", "ReactElementValidator", "ReactEmptyComponent", "ReactInstanceHandles", "ReactInstanceMap", "ReactMarkupChecksum", "ReactPerf", "ReactReconciler", "ReactUpdateQueue", "ReactUpdates", "emptyObject", "containsNode", "getReactRootElementInContainer", "instantiateReactComponent", "invariant", "setInnerHTML", "shouldUpdateReactComponent", "warning"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt,
keepData, module, opt_attributes, _program, dataAndEvents, $route, DOM, matcherFunction, idsAndClasses, exports, props, field, flags, child, jQuery, self, walkers, fail, fn, require, each, register, indexOf, $sanitize) {
  /**
   * @param {string} e
   * @param {string} keys
   * @return {?}
   */
  function normalize(e, keys) {
    /** @type {number} */
    var padLength = Math.min(e.length, keys.length);
    /** @type {number} */
    var i = 0;
    for (;i < padLength;i++) {
      if (e.charAt(i) !== keys.charAt(i)) {
        return i;
      }
    }
    return e.length === keys.length ? -1 : padLength;
  }
  /**
   * @param {(Node|string)} context
   * @return {?}
   */
  function animate(context) {
    var content = fn(context);
    return content && _.getID(content);
  }
  /**
   * @param {?} element
   * @return {?}
   */
  function get(element) {
    var id = done(element);
    if (id) {
      if (ids.hasOwnProperty(id)) {
        var el = ids[id];
        if (el !== element) {
          each(!test(el, id));
          ids[id] = element;
        }
      } else {
        ids[id] = element;
      }
    }
    return id;
  }
  /**
   * @param {Function} el
   * @return {?}
   */
  function done(el) {
    return el && (el.getAttribute && el.getAttribute(attribute)) || "";
  }
  /**
   * @param {Object} element
   * @param {?} id
   * @return {undefined}
   */
  function setup(element, id) {
    var key = done(element);
    if (key !== id) {
      delete ids[key];
    }
    element.setAttribute(attribute, id);
    /** @type {Object} */
    ids[id] = element;
  }
  /**
   * @param {string} id
   * @return {?}
   */
  function load(id) {
    if (!ids.hasOwnProperty(id) || !test(ids[id], id)) {
      ids[id] = _.findReactNodeByID(id);
    }
    return ids[id];
  }
  /**
   * @param {string} prop
   * @return {?}
   */
  function map(prop) {
    var id = props.get(prop)._rootNodeID;
    if (idsAndClasses.isNullComponentID(id)) {
      return null;
    }
    if (!ids.hasOwnProperty(id) || !test(ids[id], id)) {
      ids[id] = _.findReactNodeByID(id);
    }
    return ids[id];
  }
  /**
   * @param {Function} e
   * @param {string} id
   * @return {?}
   */
  function test(e, id) {
    if (e) {
      each(done(e) === id);
      var m = _.findReactContainerForID(id);
      if (m && fail(m, e)) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {?} key
   * @return {undefined}
   */
  function getKeyAsNumber_(key) {
    delete ids[key];
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function mixin(key) {
    var id = ids[key];
    if (id && test(id, key)) {
      path = id;
    } else {
      return false;
    }
  }
  /**
   * @param {string} id
   * @return {?}
   */
  function cancelAnimationFrame(id) {
    /** @type {null} */
    path = null;
    exports.traverseAncestors(id, mixin);
    /** @type {null} */
    var orig = path;
    /** @type {null} */
    path = null;
    return orig;
  }
  /**
   * @param {string} name
   * @param {string} transaction
   * @param {string} pdataOld
   * @param {string} sqlt
   * @param {undefined} options
   * @return {undefined}
   */
  function one(name, transaction, pdataOld, sqlt, options) {
    var attribute = child.mountComponent(name, transaction, sqlt, walkers);
    /** @type {boolean} */
    name._isTopLevel = true;
    _._mountImageIntoNode(attribute, pdataOld, options);
  }
  /**
   * @param {?} next
   * @param {?} data
   * @param {Node} transaction
   * @param {?} result
   * @return {undefined}
   */
  function onError(next, data, transaction, result) {
    var client = self.ReactReconcileTransaction.getPooled();
    client.perform(one, null, next, data, transaction, client, result);
    self.ReactReconcileTransaction.release(client);
  }
  var store = exports.SEPARATOR;
  var attribute = _program.ID_ATTRIBUTE_NAME;
  var ids = {};
  /** @type {number} */
  var TABLE = 1;
  /** @type {number} */
  var ELEMENT_NODE_TYPE = 9;
  var instancesByReactRootID = {};
  var data = {};
  /** @type {Array} */
  var SplitSolver_solve_nodes = [];
  /** @type {null} */
  var path = null;
  var _ = {
    _instancesByReactRootID : instancesByReactRootID,
    /**
     * @param {(RegExp|string)} container
     * @param {Function} renderCallback
     * @return {undefined}
     */
    scrollMonitor : function(container, renderCallback) {
      renderCallback();
    },
    /**
     * @param {Function} nodes
     * @param {string} dataAndEvents
     * @param {(Node|string)} container
     * @param {Function} callback
     * @return {?}
     */
    _updateRootComponent : function(nodes, dataAndEvents, container, callback) {
      _.scrollMonitor(container, function() {
        jQuery.enqueueElementInternal(nodes, dataAndEvents);
        if (callback) {
          jQuery.enqueueCallbackInternal(nodes, callback);
        }
      });
      return nodes;
    },
    /**
     * @param {?} nextComponent
     * @param {Node} container
     * @return {?}
     */
    _registerComponent : function(nextComponent, container) {
      each(container && (container.nodeType === TABLE || container.nodeType === ELEMENT_NODE_TYPE));
      dataAndEvents.ensureScrollValueMonitoring();
      var reactRootID = _.registerContainer(container);
      instancesByReactRootID[reactRootID] = nextComponent;
      return reactRootID;
    },
    /**
     * @param {string} event
     * @param {Node} container
     * @param {?} complete
     * @return {?}
     */
    _renderNewRootComponent : function(event, container, complete) {
      $sanitize($route.current == null, "_renderNewRootComponent(): Render methods should be a pure function " + "of props and state; triggering nested component updates from " + "render is not allowed. If necessary, trigger nested updates in " + "componentDidUpdate.");
      var which = require(event, null);
      var selected = _._registerComponent(which, container);
      self.batchedUpdates(onError, which, selected, container, complete);
      return which;
    },
    /**
     * @param {string} node
     * @param {Node} container
     * @param {Function} callback
     * @return {?}
     */
    render : function(node, container, callback) {
      each(DOM.isValidElement(node));
      var ancestors = instancesByReactRootID[animate(container)];
      if (ancestors) {
        var dontCloseTags = ancestors._currentElement;
        if (indexOf(dontCloseTags, node)) {
          return _._updateRootComponent(ancestors, node, container, callback).getPublicInstance();
        } else {
          _.unmountComponentAtNode(container);
        }
      }
      var result = fn(container);
      var files = result && _.isRenderedByReact(result);
      var i = files && !ancestors;
      var that = _._renderNewRootComponent(node, container, i).getPublicInstance();
      if (callback) {
        callback.call(that);
      }
      return that;
    },
    /**
     * @param {Function} value
     * @param {Object} opt
     * @param {Object} container
     * @return {?}
     */
    constructAndRenderComponent : function(value, opt, container) {
      var wrapper = DOM.createElement(value, opt);
      return _.render(wrapper, container);
    },
    /**
     * @param {Function} id
     * @param {Object} opt
     * @param {?} itemId
     * @return {?}
     */
    constructAndRenderComponentByID : function(id, opt, itemId) {
      /** @type {(HTMLElement|null)} */
      var item = document.getElementById(itemId);
      each(item);
      return _.constructAndRenderComponent(id, opt, item);
    },
    /**
     * @param {Node} element
     * @return {?}
     */
    registerContainer : function(element) {
      var id = animate(element);
      if (id) {
        id = exports.getReactRootIDFromNodeID(id);
      }
      if (!id) {
        id = exports.createReactRootID();
      }
      /** @type {Node} */
      data[id] = element;
      return id;
    },
    /**
     * @param {Node} container
     * @return {?}
     */
    unmountComponentAtNode : function(container) {
      $sanitize($route.current == null, "unmountComponentAtNode(): Render methods should be a pure function of " + "props and state; triggering nested component updates from render is " + "not allowed. If necessary, trigger nested updates in " + "componentDidUpdate.");
      each(container && (container.nodeType === TABLE || container.nodeType === ELEMENT_NODE_TYPE));
      var right = animate(container);
      var protoProps = instancesByReactRootID[right];
      if (!protoProps) {
        return false;
      }
      _.unmountComponentFromNode(protoProps, container);
      delete instancesByReactRootID[right];
      delete data[right];
      return true;
    },
    /**
     * @param {?} attr
     * @param {Node} container
     * @return {undefined}
     */
    unmountComponentFromNode : function(attr, container) {
      child.unmountComponent(attr);
      if (container.nodeType === ELEMENT_NODE_TYPE) {
        container = container.documentElement;
      }
      for (;container.lastChild;) {
        container.removeChild(container.lastChild);
      }
    },
    /**
     * @param {string} id
     * @return {?}
     */
    findReactContainerForID : function(id) {
      var key = exports.getReactRootIDFromNodeID(id);
      var label = data[key];
      return label;
    },
    /**
     * @param {string} id
     * @return {?}
     */
    findReactNodeByID : function(id) {
      var reversed = _.findReactContainerForID(id);
      return _.findComponentRoot(reversed, id);
    },
    /**
     * @param {?} node
     * @return {?}
     */
    isRenderedByReact : function(node) {
      if (node.nodeType !== 1) {
        return false;
      }
      var entity = _.getID(node);
      return entity ? entity.charAt(0) === store : false;
    },
    /**
     * @param {Element} node
     * @return {?}
     */
    getFirstReactDOM : function(node) {
      /** @type {Element} */
      var current = node;
      for (;current && current.parentNode !== current;) {
        if (_.isRenderedByReact(current)) {
          return current;
        }
        current = current.parentNode;
      }
      return null;
    },
    /**
     * @param {(Array|Element)} reversed
     * @param {string} id
     * @return {?}
     */
    findComponentRoot : function(reversed, id) {
      /** @type {Array} */
      var nodes = SplitSolver_solve_nodes;
      /** @type {number} */
      var i = 0;
      var div = cancelAnimationFrame(id) || reversed;
      nodes[0] = div.firstChild;
      /** @type {number} */
      nodes.length = 1;
      for (;i < nodes.length;) {
        var el = nodes[i++];
        var activeElement;
        for (;el;) {
          var type = _.getID(el);
          if (type) {
            if (id === type) {
              activeElement = el;
            } else {
              if (exports.isAncestorIDOf(type, id)) {
                /** @type {number} */
                nodes.length = i = 0;
                nodes.push(el.firstChild);
              }
            }
          } else {
            nodes.push(el.firstChild);
          }
          el = el.nextSibling;
        }
        if (activeElement) {
          /** @type {number} */
          nodes.length = 0;
          return activeElement;
        }
      }
      /** @type {number} */
      nodes.length = 0;
      each(false);
    },
    /**
     * @param {string} url
     * @param {?} value
     * @param {?} optionsString
     * @return {undefined}
     */
    _mountImageIntoNode : function(url, value, optionsString) {
      each(value && (value.nodeType === TABLE || value.nodeType === ELEMENT_NODE_TYPE));
      if (optionsString) {
        var element = fn(value);
        if (field.canReuseMarkup(url, element)) {
          return;
        } else {
          var roleName = element.getAttribute(field.CHECKSUM_ATTR_NAME);
          element.removeAttribute(field.CHECKSUM_ATTR_NAME);
          var name = element.outerHTML;
          element.setAttribute(field.CHECKSUM_ATTR_NAME, roleName);
          var i = normalize(url, name);
          var fb = " (client) " + url.substring(i - 20, i + 20) + "\n (server) " + name.substring(i - 20, i + 20);
          each(value.nodeType !== ELEMENT_NODE_TYPE);
        }
      }
      each(value.nodeType !== ELEMENT_NODE_TYPE);
      register(value, url);
    },
    /** @type {function ((Node|string)): ?} */
    getReactRootID : animate,
    /** @type {function (?): ?} */
    getID : get,
    /** @type {function (Object, ?): undefined} */
    setID : setup,
    /** @type {function (string): ?} */
    getNode : load,
    /** @type {function (string): ?} */
    getNodeFromInstance : map,
    /** @type {function (?): undefined} */
    purgeID : getKeyAsNumber_
  };
  flags.measureMethods(_, "ReactMount", {
    _renderNewRootComponent : "_renderNewRootComponent",
    _mountImageIntoNode : "_mountImageIntoNode"
  });
  module.exports = _;
}, null);
__d("EnterLeaveEventPlugin", ["EventConstants", "EventPropagators", "SyntheticMouseEvent", "ReactMount", "keyOf"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, listener, SyntheticMouseEvent, a, $sanitize) {
  var topLevelTypes = dataAndEvents.topLevelTypes;
  var l = a.getFirstReactDOM;
  var $scope = {
    mouseEnter : {
      registrationName : $sanitize({
        onMouseEnter : null
      }),
      dependencies : [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    },
    mouseLeave : {
      registrationName : $sanitize({
        onMouseLeave : null
      }),
      dependencies : [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    }
  };
  /** @type {Array} */
  var events = [null, null];
  var JsDiff = {
    eventTypes : $scope,
    /**
     * @param {string} topLevelType
     * @param {string} obj
     * @param {Error} inplace
     * @param {Event} nativeEvent
     * @return {?}
     */
    extractEvents : function(topLevelType, obj, inplace, nativeEvent) {
      if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
        return null;
      }
      if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
        return null;
      }
      var node;
      if (obj.window === obj) {
        /** @type {string} */
        node = obj;
      } else {
        var doc = obj.ownerDocument;
        if (doc) {
          node = doc.defaultView || doc.parentWindow;
        } else {
          /** @type {Window} */
          node = window;
        }
      }
      var target;
      var el;
      if (topLevelType === topLevelTypes.topMouseOut) {
        /** @type {string} */
        target = obj;
        el = l(nativeEvent.relatedTarget || nativeEvent.toElement) || node;
      } else {
        target = node;
        /** @type {string} */
        el = obj;
      }
      if (target === el) {
        return null;
      }
      var fromID = target ? a.getID(target) : "";
      var toID = el ? a.getID(el) : "";
      var event = SyntheticMouseEvent.getPooled($scope.mouseLeave, fromID, nativeEvent);
      /** @type {string} */
      event.type = "mouseleave";
      event.target = target;
      event.relatedTarget = el;
      var evt = SyntheticMouseEvent.getPooled($scope.mouseEnter, toID, nativeEvent);
      /** @type {string} */
      evt.type = "mouseenter";
      evt.target = el;
      evt.relatedTarget = target;
      listener.accumulateEnterLeaveDispatches(event, evt, fromID, toID);
      events[0] = event;
      events[1] = evt;
      return events;
    }
  };
  module.exports = JsDiff;
}, null);
__d("MobileSafariClickEventPlugin", ["EventConstants", "emptyFunction"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, callback) {
  var topLevelTypes = dataAndEvents.topLevelTypes;
  var JsDiff = {
    eventTypes : null,
    /**
     * @param {string} topLevelType
     * @param {string} name
     * @param {Error} inplace
     * @param {Event} nativeEvent
     * @return {undefined}
     */
    extractEvents : function(topLevelType, name, inplace, nativeEvent) {
      if (topLevelType === topLevelTypes.topTouchStart) {
        var target = nativeEvent.target;
        if (target && !target.onclick) {
          target.onclick = callback;
        }
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("shallowEqual", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} element
   * @param {?} value
   * @return {?}
   */
  function compile(element, value) {
    if (element === value) {
      return true;
    }
    var key;
    for (key in element) {
      if (element.hasOwnProperty(key) && (!value.hasOwnProperty(key) || element[key] !== value[key])) {
        return false;
      }
    }
    for (key in value) {
      if (value.hasOwnProperty(key) && !element.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  /** @type {function (?, ?): ?} */
  module.exports = compile;
}, null);
__d("SelectEventPlugin", ["EventConstants", "EventPropagators", "ReactInputSelection", "SyntheticEvent", "getActiveElement", "isTextInputElement", "keyOf", "shallowEqual"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, eventUtil, acc, test, $timeout, func, onSelect, on) {
  /**
   * @param {Element} node
   * @return {?}
   */
  function getSelection(node) {
    if ("selectionStart" in node && acc.hasSelectionCapabilities(node)) {
      return{
        start : node.selectionStart,
        end : node.selectionEnd
      };
    } else {
      if (window.getSelection) {
        /** @type {(Selection|null)} */
        var selection = window.getSelection();
        return{
          anchorNode : selection.anchorNode,
          anchorOffset : selection.anchorOffset,
          focusNode : selection.focusNode,
          focusOffset : selection.focusOffset
        };
      } else {
        if (document.selection) {
          /** @type {(ControlRange|TextRange|null)} */
          var range = document.selection.createRange();
          return{
            parentElement : range.parentElement(),
            text : range.text,
            top : range.boundingTop,
            left : range.boundingLeft
          };
        }
      }
    }
  }
  /**
   * @param {Event} nativeEvent
   * @return {?}
   */
  function select(nativeEvent) {
    if (t || (elem == null || elem !== $timeout())) {
      return null;
    }
    var hasBody = getSelection(elem);
    if (!failuresLink || !on(failuresLink, hasBody)) {
      failuresLink = hasBody;
      var event = test.getPooled(options.select, topLevelTargetID, nativeEvent);
      /** @type {string} */
      event.type = "select";
      event.target = elem;
      eventUtil.accumulateTwoPhaseDispatches(event);
      return event;
    }
  }
  var topLevelTypes = dataAndEvents.topLevelTypes;
  var options = {
    select : {
      phasedRegistrationNames : {
        bubbled : onSelect({
          onSelect : null
        }),
        captured : onSelect({
          onSelectCapture : null
        })
      },
      dependencies : [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
    }
  };
  /** @type {null} */
  var elem = null;
  /** @type {null} */
  var topLevelTargetID = null;
  /** @type {null} */
  var failuresLink = null;
  /** @type {boolean} */
  var t = false;
  var JsDiff = {
    eventTypes : options,
    /**
     * @param {string} topLevelType
     * @param {string} name
     * @param {Error} inplace
     * @param {Event} nativeEvent
     * @return {?}
     */
    extractEvents : function(topLevelType, name, inplace, nativeEvent) {
      switch(topLevelType) {
        case topLevelTypes.topFocus:
          if (func(name) || name.contentEditable === "true") {
            /** @type {string} */
            elem = name;
            /** @type {Error} */
            topLevelTargetID = inplace;
            /** @type {null} */
            failuresLink = null;
          }
          break;
        case topLevelTypes.topBlur:
          /** @type {null} */
          elem = null;
          /** @type {null} */
          topLevelTargetID = null;
          /** @type {null} */
          failuresLink = null;
          break;
        case topLevelTypes.topMouseDown:
          /** @type {boolean} */
          t = true;
          break;
        case topLevelTypes.topContextMenu:
        ;
        case topLevelTypes.topMouseUp:
          /** @type {boolean} */
          t = false;
          return select(nativeEvent);
        case topLevelTypes.topSelectionChange:
        ;
        case topLevelTypes.topKeyDown:
        ;
        case topLevelTypes.topKeyUp:
          return select(nativeEvent);
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("SyntheticClipboardEvent", ["SyntheticEvent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var suiteView = {
    /**
     * @param {Window} e
     * @return {?}
     */
    clipboardData : function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  };
  callback.augmentClass(compile, suiteView);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("SyntheticFocusEvent", ["SyntheticUIEvent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var suiteView = {
    relatedTarget : null
  };
  callback.augmentClass(compile, suiteView);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("getEventCharCode", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} node
   * @return {?}
   */
  function run(node) {
    var ctx;
    var value = node.keyCode;
    if ("charCode" in node) {
      ctx = node.charCode;
      if (ctx === 0 && value === 13) {
        /** @type {number} */
        ctx = 13;
      }
    } else {
      ctx = value;
    }
    if (ctx >= 32 || ctx === 13) {
      return ctx;
    }
    return 0;
  }
  /** @type {function (string): ?} */
  module.exports = run;
}, null);
__d("getEventKey", ["getEventCharCode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, next) {
  /**
   * @param {string} e
   * @return {?}
   */
  function handleEvent(e) {
    if (e.key) {
      var returnValue = handlers[e.key] || e.key;
      if (returnValue !== "Unidentified") {
        return returnValue;
      }
    }
    if (e.type === "keypress") {
      var n = next(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    if (e.type === "keydown" || e.type === "keyup") {
      return keytable[e.keyCode] || "Unidentified";
    }
    return "";
  }
  var handlers = {
    Esc : "Escape",
    Spacebar : " ",
    Left : "ArrowLeft",
    Up : "ArrowUp",
    Right : "ArrowRight",
    Down : "ArrowDown",
    Del : "Delete",
    Win : "OS",
    Menu : "ContextMenu",
    Apps : "ContextMenu",
    Scroll : "ScrollLock",
    MozPrintableKey : "Unidentified"
  };
  var keytable = {
    8 : "Backspace",
    9 : "Tab",
    12 : "Clear",
    13 : "Enter",
    16 : "Shift",
    17 : "Control",
    18 : "Alt",
    19 : "Pause",
    20 : "CapsLock",
    27 : "Escape",
    32 : " ",
    33 : "PageUp",
    34 : "PageDown",
    35 : "End",
    36 : "Home",
    37 : "ArrowLeft",
    38 : "ArrowUp",
    39 : "ArrowRight",
    40 : "ArrowDown",
    45 : "Insert",
    46 : "Delete",
    112 : "F1",
    113 : "F2",
    114 : "F3",
    115 : "F4",
    116 : "F5",
    117 : "F6",
    118 : "F7",
    119 : "F8",
    120 : "F9",
    121 : "F10",
    122 : "F11",
    123 : "F12",
    144 : "NumLock",
    145 : "ScrollLock",
    224 : "Meta"
  };
  /** @type {function (string): ?} */
  module.exports = handleEvent;
}, null);
__d("SyntheticKeyboardEvent", ["SyntheticUIEvent", "getEventCharCode", "getEventKey", "getEventModifierState"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, callback, onload, subKey, dataAndEvents) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var data = {
    key : subKey,
    location : null,
    ctrlKey : null,
    shiftKey : null,
    altKey : null,
    metaKey : null,
    repeat : null,
    locale : null,
    getModifierState : dataAndEvents,
    /**
     * @param {Event} e
     * @return {?}
     */
    charCode : function(e) {
      if (e.type === "keypress") {
        return onload(e);
      }
      return 0;
    },
    /**
     * @param {Object} e
     * @return {?}
     */
    keyCode : function(e) {
      if (e.type === "keydown" || e.type === "keyup") {
        return e.keyCode;
      }
      return 0;
    },
    /**
     * @param {Object} e
     * @return {?}
     */
    which : function(e) {
      if (e.type === "keypress") {
        return onload(e);
      }
      if (e.type === "keydown" || e.type === "keyup") {
        return e.keyCode;
      }
      return 0;
    }
  };
  callback.augmentClass(compile, data);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("SyntheticDragEvent", ["SyntheticMouseEvent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var suiteView = {
    dataTransfer : null
  };
  callback.augmentClass(compile, suiteView);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("SyntheticWheelEvent", ["SyntheticMouseEvent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} options
   * @return {undefined}
   */
  function compile(node, value, options) {
    callback.call(this, node, value, options);
  }
  var suiteView = {
    /**
     * @param {Object} event
     * @return {?}
     */
    deltaX : function(event) {
      return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
    },
    /**
     * @param {Object} event
     * @return {?}
     */
    deltaY : function(event) {
      return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
    },
    deltaZ : null,
    deltaMode : null
  };
  callback.augmentClass(compile, suiteView);
  /** @type {function (string, string, ?): undefined} */
  module.exports = compile;
}, null);
__d("SimpleEventPlugin", ["EventConstants", "EventPluginUtils", "EventPropagators", "SyntheticClipboardEvent", "SyntheticEvent", "SyntheticFocusEvent", "SyntheticKeyboardEvent", "SyntheticMouseEvent", "SyntheticDragEvent", "SyntheticTouchEvent", "SyntheticUIEvent", "SyntheticWheelEvent", "getEventCharCode", "invariant", "keyOf", "warning"], function(oFunctionBody, _$timeout_, failing_message, nextStack, module, noCorrect, dataAndEvents, $, eventUtil, deepDataAndEvents, ignoreMethodDoesntExist, textAlt,
keepData, opt_attributes, matcherFunction, execResult, opt_keys, positionError, forIn, push, $sanitize, listener) {
  var topLevelTypes = dataAndEvents.topLevelTypes;
  var self = {
    blur : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onBlur : true
        }),
        captured : $sanitize({
          onBlurCapture : true
        })
      }
    },
    click : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onClick : true
        }),
        captured : $sanitize({
          onClickCapture : true
        })
      }
    },
    contextMenu : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onContextMenu : true
        }),
        captured : $sanitize({
          onContextMenuCapture : true
        })
      }
    },
    copy : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onCopy : true
        }),
        captured : $sanitize({
          onCopyCapture : true
        })
      }
    },
    cut : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onCut : true
        }),
        captured : $sanitize({
          onCutCapture : true
        })
      }
    },
    doubleClick : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDoubleClick : true
        }),
        captured : $sanitize({
          onDoubleClickCapture : true
        })
      }
    },
    drag : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDrag : true
        }),
        captured : $sanitize({
          onDragCapture : true
        })
      }
    },
    dragEnd : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDragEnd : true
        }),
        captured : $sanitize({
          onDragEndCapture : true
        })
      }
    },
    dragEnter : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDragEnter : true
        }),
        captured : $sanitize({
          onDragEnterCapture : true
        })
      }
    },
    dragExit : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDragExit : true
        }),
        captured : $sanitize({
          onDragExitCapture : true
        })
      }
    },
    dragLeave : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDragLeave : true
        }),
        captured : $sanitize({
          onDragLeaveCapture : true
        })
      }
    },
    dragOver : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDragOver : true
        }),
        captured : $sanitize({
          onDragOverCapture : true
        })
      }
    },
    dragStart : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDragStart : true
        }),
        captured : $sanitize({
          onDragStartCapture : true
        })
      }
    },
    drop : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onDrop : true
        }),
        captured : $sanitize({
          onDropCapture : true
        })
      }
    },
    focus : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onFocus : true
        }),
        captured : $sanitize({
          onFocusCapture : true
        })
      }
    },
    input : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onInput : true
        }),
        captured : $sanitize({
          onInputCapture : true
        })
      }
    },
    keyDown : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onKeyDown : true
        }),
        captured : $sanitize({
          onKeyDownCapture : true
        })
      }
    },
    keyPress : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onKeyPress : true
        }),
        captured : $sanitize({
          onKeyPressCapture : true
        })
      }
    },
    keyUp : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onKeyUp : true
        }),
        captured : $sanitize({
          onKeyUpCapture : true
        })
      }
    },
    load : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onLoad : true
        }),
        captured : $sanitize({
          onLoadCapture : true
        })
      }
    },
    error : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onError : true
        }),
        captured : $sanitize({
          onErrorCapture : true
        })
      }
    },
    mouseDown : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onMouseDown : true
        }),
        captured : $sanitize({
          onMouseDownCapture : true
        })
      }
    },
    mouseMove : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onMouseMove : true
        }),
        captured : $sanitize({
          onMouseMoveCapture : true
        })
      }
    },
    mouseOut : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onMouseOut : true
        }),
        captured : $sanitize({
          onMouseOutCapture : true
        })
      }
    },
    mouseOver : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onMouseOver : true
        }),
        captured : $sanitize({
          onMouseOverCapture : true
        })
      }
    },
    mouseUp : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onMouseUp : true
        }),
        captured : $sanitize({
          onMouseUpCapture : true
        })
      }
    },
    paste : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onPaste : true
        }),
        captured : $sanitize({
          onPasteCapture : true
        })
      }
    },
    reset : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onReset : true
        }),
        captured : $sanitize({
          onResetCapture : true
        })
      }
    },
    scroll : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onScroll : true
        }),
        captured : $sanitize({
          onScrollCapture : true
        })
      }
    },
    submit : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onSubmit : true
        }),
        captured : $sanitize({
          onSubmitCapture : true
        })
      }
    },
    touchCancel : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onTouchCancel : true
        }),
        captured : $sanitize({
          onTouchCancelCapture : true
        })
      }
    },
    touchEnd : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onTouchEnd : true
        }),
        captured : $sanitize({
          onTouchEndCapture : true
        })
      }
    },
    touchMove : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onTouchMove : true
        }),
        captured : $sanitize({
          onTouchMoveCapture : true
        })
      }
    },
    touchStart : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onTouchStart : true
        }),
        captured : $sanitize({
          onTouchStartCapture : true
        })
      }
    },
    wheel : {
      phasedRegistrationNames : {
        bubbled : $sanitize({
          onWheel : true
        }),
        captured : $sanitize({
          onWheelCapture : true
        })
      }
    }
  };
  var unpreparedModules = {
    topBlur : self.blur,
    topClick : self.click,
    topContextMenu : self.contextMenu,
    topCopy : self.copy,
    topCut : self.cut,
    topDoubleClick : self.doubleClick,
    topDrag : self.drag,
    topDragEnd : self.dragEnd,
    topDragEnter : self.dragEnter,
    topDragExit : self.dragExit,
    topDragLeave : self.dragLeave,
    topDragOver : self.dragOver,
    topDragStart : self.dragStart,
    topDrop : self.drop,
    topError : self.error,
    topFocus : self.focus,
    topInput : self.input,
    topKeyDown : self.keyDown,
    topKeyPress : self.keyPress,
    topKeyUp : self.keyUp,
    topLoad : self.load,
    topMouseDown : self.mouseDown,
    topMouseMove : self.mouseMove,
    topMouseOut : self.mouseOut,
    topMouseOver : self.mouseOver,
    topMouseUp : self.mouseUp,
    topPaste : self.paste,
    topReset : self.reset,
    topScroll : self.scroll,
    topSubmit : self.submit,
    topTouchCancel : self.touchCancel,
    topTouchEnd : self.touchEnd,
    topTouchMove : self.touchMove,
    topTouchStart : self.touchStart,
    topWheel : self.wheel
  };
  var normalizedName;
  for (normalizedName in unpreparedModules) {
    /** @type {Array} */
    unpreparedModules[normalizedName].dependencies = [normalizedName];
  }
  var JsDiff = {
    eventTypes : self,
    /**
     * @param {Object} event
     * @param {?} elems
     * @param {?} selector
     * @return {undefined}
     */
    executeDispatch : function(event, elems, selector) {
      var ret = $.executeDispatch(event, elems, selector);
      listener(typeof ret !== "boolean", "Returning `false` from an event handler is deprecated and will be " + "ignored in a future release. Instead, manually call " + "e.stopPropagation() or e.preventDefault(), as appropriate.");
      if (ret === false) {
        event.stopPropagation();
        event.preventDefault();
      }
    },
    /**
     * @param {string} topLevelType
     * @param {string} name
     * @param {Error} data
     * @param {Event} nativeEvent
     * @return {?}
     */
    extractEvents : function(topLevelType, name, data, nativeEvent) {
      var dispatchConfig = unpreparedModules[topLevelType];
      if (!dispatchConfig) {
        return null;
      }
      var EventConstructor;
      switch(topLevelType) {
        case topLevelTypes.topInput:
        ;
        case topLevelTypes.topLoad:
        ;
        case topLevelTypes.topError:
        ;
        case topLevelTypes.topReset:
        ;
        case topLevelTypes.topSubmit:
          /** @type {number} */
          EventConstructor = ignoreMethodDoesntExist;
          break;
        case topLevelTypes.topKeyPress:
          if (forIn(nativeEvent) === 0) {
            return null;
          }
        ;
        case topLevelTypes.topKeyDown:
        ;
        case topLevelTypes.topKeyUp:
          /** @type {number} */
          EventConstructor = keepData;
          break;
        case topLevelTypes.topBlur:
        ;
        case topLevelTypes.topFocus:
          /** @type {(number|string)} */
          EventConstructor = textAlt;
          break;
        case topLevelTypes.topClick:
          if (nativeEvent.button === 2) {
            return null;
          }
        ;
        case topLevelTypes.topContextMenu:
        ;
        case topLevelTypes.topDoubleClick:
        ;
        case topLevelTypes.topMouseDown:
        ;
        case topLevelTypes.topMouseMove:
        ;
        case topLevelTypes.topMouseOut:
        ;
        case topLevelTypes.topMouseOver:
        ;
        case topLevelTypes.topMouseUp:
          /** @type {number} */
          EventConstructor = opt_attributes;
          break;
        case topLevelTypes.topDrag:
        ;
        case topLevelTypes.topDragEnd:
        ;
        case topLevelTypes.topDragEnter:
        ;
        case topLevelTypes.topDragExit:
        ;
        case topLevelTypes.topDragLeave:
        ;
        case topLevelTypes.topDragOver:
        ;
        case topLevelTypes.topDragStart:
        ;
        case topLevelTypes.topDrop:
          /** @type {(number|string)} */
          EventConstructor = matcherFunction;
          break;
        case topLevelTypes.topTouchCancel:
        ;
        case topLevelTypes.topTouchEnd:
        ;
        case topLevelTypes.topTouchMove:
        ;
        case topLevelTypes.topTouchStart:
          /** @type {(number|string)} */
          EventConstructor = execResult;
          break;
        case topLevelTypes.topScroll:
          /** @type {(number|string)} */
          EventConstructor = opt_keys;
          break;
        case topLevelTypes.topWheel:
          /** @type {number} */
          EventConstructor = positionError;
          break;
        case topLevelTypes.topCopy:
        ;
        case topLevelTypes.topCut:
        ;
        case topLevelTypes.topPaste:
          /** @type {number} */
          EventConstructor = deepDataAndEvents;
          break;
      }
      push(EventConstructor);
      var event = EventConstructor.getPooled(dispatchConfig, data, nativeEvent);
      eventUtil.accumulateTwoPhaseDispatches(event);
      return event;
    }
  };
  module.exports = JsDiff;
}, null);
__d("findDOMNode", ["ReactInstanceMap", "ReactMount", "invariant", "isNode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, container, $window, behavior, param) {
  /**
   * @param {string} element
   * @return {?}
   */
  function init(element) {
    if (element == null) {
      return null;
    }
    if (param(element)) {
      return element;
    }
    if (container.has(element)) {
      return $window.getNodeFromInstance(element);
    }
    behavior(element.render == null || typeof element.render !== "function");
    behavior(false);
  }
  /** @type {function (string): ?} */
  module.exports = init;
}, null);
__d("ReactServerRenderingTransaction", ["PooledClass", "CallbackQueue", "ReactPutListenerQueue", "Transaction", "Object.assign", "emptyFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $injector, plq, pool, NumberTextBox, mixin, _quote) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function constructor(attribute) {
    this.reinitializeTransaction();
    /** @type {string} */
    this.renderToStaticMarkup = attribute;
    this.reactMountReady = plq.getPooled(null);
    this.putListenerQueue = pool.getPooled();
  }
  var methods = {
    /**
     * @return {undefined}
     */
    initialize : function() {
      this.reactMountReady.reset();
    },
    /** @type {Function} */
    close : _quote
  };
  var offsetLeft = {
    /**
     * @return {undefined}
     */
    initialize : function() {
      this.putListenerQueue.reset();
    },
    /** @type {Function} */
    close : _quote
  };
  /** @type {Array} */
  var start = [offsetLeft, methods];
  var force = {
    /**
     * @return {?}
     */
    getTransactionWrappers : function() {
      return start;
    },
    /**
     * @return {?}
     */
    getReactMountReady : function() {
      return this.reactMountReady;
    },
    /**
     * @return {?}
     */
    getPutListenerQueue : function() {
      return this.putListenerQueue;
    },
    /**
     * @return {undefined}
     */
    destructor : function() {
      plq.release(this.reactMountReady);
      /** @type {null} */
      this.reactMountReady = null;
      pool.release(this.putListenerQueue);
      /** @type {null} */
      this.putListenerQueue = null;
    }
  };
  mixin(constructor.prototype, NumberTextBox.Mixin, force);
  $injector.addPoolingTo(constructor);
  /** @type {function (string): undefined} */
  module.exports = constructor;
}, null);
__d("ReactServerRendering", ["ReactElement", "ReactInstanceHandles", "ReactMarkupChecksum", "ReactServerRenderingTransaction", "emptyObject", "instantiateReactComponent", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, css, dataAndEvents, container, t, sqlt, read, $) {
  /**
   * @param {Object} selector
   * @return {?}
   */
  function setup(selector) {
    $(css.isValidElement(selector));
    var transaction;
    try {
      var name = dataAndEvents.createReactRootID();
      transaction = t.getPooled(false);
      return transaction.perform(function() {
        var component = read(selector, null);
        var markup = component.mountComponent(name, transaction, sqlt);
        return container.addChecksumToMarkup(markup);
      }, null);
    } finally {
      t.release(transaction);
    }
  }
  /**
   * @param {Object} index
   * @return {?}
   */
  function get(index) {
    $(css.isValidElement(index));
    var transaction;
    try {
      var name = dataAndEvents.createReactRootID();
      transaction = t.getPooled(true);
      return transaction.perform(function() {
        var component = read(index, null);
        return component.mountComponent(name, transaction, sqlt);
      }, null);
    } finally {
      t.release(transaction);
    }
  }
  module.exports = {
    /** @type {function (Object): ?} */
    renderToString : setup,
    /** @type {function (Object): ?} */
    renderToStaticMarkup : get
  };
}, null);
__d("ServerReactRootIndex", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /** @type {number} */
  var scaleX = Math.pow(2, 53);
  var JsDiff = {
    /**
     * @return {?}
     */
    createReactRootIndex : function() {
      return Math.ceil(Math.random() * scaleX);
    }
  };
  module.exports = JsDiff;
}, null);
__d("traverseAllChildren", ["ReactElement", "ReactFragment", "ReactInstanceHandles", "getIteratorFn", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $templateCache, buffer, exports, get, worker) {
  /**
   * @param {?} name
   * @return {?}
   */
  function label(name) {
    return old[name];
  }
  /**
   * @param {Object} index
   * @param {number} pass
   * @return {?}
   */
  function callback(index, pass) {
    if (index && index.key != null) {
      return next(index.key);
    }
    return pass.toString(36);
  }
  /**
   * @param {string} string
   * @return {?}
   */
  function trim(string) {
    return("" + string).replace(r20, label);
  }
  /**
   * @param {string} source
   * @return {?}
   */
  function next(source) {
    return "$" + trim(source);
  }
  /**
   * @param {Object} value
   * @param {string} path
   * @param {number} delay
   * @param {string} fn
   * @param {?} node
   * @return {?}
   */
  function process(value, path, delay, fn, node) {
    /** @type {string} */
    var type = typeof value;
    if (type === "undefined" || type === "boolean") {
      /** @type {null} */
      value = null;
    }
    if (value === null || (type === "string" || (type === "number" || $templateCache.isValidElement(value)))) {
      fn(node, value, path === "" ? originURL + callback(value, 0) : path, delay);
      return 1;
    }
    var last;
    var c;
    var after;
    /** @type {number} */
    var out = 0;
    if (Array.isArray(value)) {
      /** @type {number} */
      var i = 0;
      for (;i < value.length;i++) {
        last = value[i];
        c = (path !== "" ? path + sep : originURL) + callback(last, i);
        after = delay + out;
        out += process(last, c, after, fn, node);
      }
    } else {
      var values = get(value);
      if (values) {
        var iterator = values.call(value);
        var _ref;
        if (values !== value.entries) {
          /** @type {number} */
          var index = 0;
          for (;!(_ref = iterator.next()).done;) {
            last = _ref.value;
            c = (path !== "" ? path + sep : originURL) + callback(last, index++);
            after = delay + out;
            out += process(last, c, after, fn, node);
          }
        } else {
          for (;!(_ref = iterator.next()).done;) {
            var key = _ref.value;
            if (key) {
              last = key[1];
              /** @type {string} */
              c = (path !== "" ? path + sep : originURL) + next(key[0]) + sep + callback(last, 0);
              after = delay + out;
              out += process(last, c, after, fn, node);
            }
          }
        }
      } else {
        if (type === "object") {
          worker(value.nodeType !== 1);
          var changed = buffer.extract(value);
          var name;
          for (name in changed) {
            if (changed.hasOwnProperty(name)) {
              last = changed[name];
              /** @type {string} */
              c = (path !== "" ? path + sep : originURL) + next(name) + sep + callback(last, 0);
              after = delay + out;
              out += process(last, c, after, fn, node);
            }
          }
        }
      }
    }
    return out;
  }
  /**
   * @param {string} attribute
   * @param {string} value
   * @param {?} val
   * @return {?}
   */
  function attr(attribute, value, val) {
    if (attribute == null) {
      return 0;
    }
    return process(attribute, "", 0, value, val);
  }
  var originURL = exports.SEPARATOR;
  /** @type {string} */
  var sep = ":";
  var old = {
    "=" : "=0",
    "." : "=1",
    ":" : "=2"
  };
  /** @type {RegExp} */
  var r20 = /[=.:]/g;
  /** @type {function (string, string, ?): ?} */
  module.exports = attr;
}, null);
__d("ReactChildren", ["PooledClass", "ReactFragment", "traverseAllChildren", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, body, domConstruct, callback, opt_attributes) {
  /**
   * @param {Function} wanted
   * @param {?} actual
   * @return {undefined}
   */
  function expect(wanted, actual) {
    /** @type {Function} */
    this.forEachFunction = wanted;
    this.forEachContext = actual;
  }
  /**
   * @param {?} context
   * @param {?} xy
   * @param {?} off
   * @param {?} start
   * @return {undefined}
   */
  function r(context, xy, off, start) {
    var forEachBookKeeping = context;
    forEachBookKeeping.forEachFunction.call(forEachBookKeeping.forEachContext, xy, start);
  }
  /**
   * @param {Function} o
   * @param {(Error|string)} obj
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  function clone(o, obj, deepDataAndEvents) {
    if (o == null) {
      return o;
    }
    var conn = expect.getPooled(obj, deepDataAndEvents);
    callback(o, r, conn);
    expect.release(conn);
  }
  /**
   * @param {?} node
   * @param {Function} namespaces
   * @param {?} mapContext
   * @return {undefined}
   */
  function node(node, namespaces, mapContext) {
    this.mapResult = node;
    /** @type {Function} */
    this.mapFunction = namespaces;
    this.mapContext = mapContext;
  }
  /**
   * @param {?} err
   * @param {?} args
   * @param {?} key
   * @param {?} data
   * @return {undefined}
   */
  function self(err, args, key, data) {
    var mapBookKeeping = err;
    var dst = mapBookKeeping.mapResult;
    /** @type {boolean} */
    var ba = !dst.hasOwnProperty(key);
    if (ba) {
      var result = mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, args, data);
      dst[key] = result;
    }
  }
  /**
   * @param {Function} cb
   * @param {?} func
   * @param {?} context
   * @return {?}
   */
  function close(cb, func, context) {
    if (cb == null) {
      return cb;
    }
    var html = {};
    var obj = node.getPooled(html, func, context);
    callback(cb, self, obj);
    node.release(obj);
    return domConstruct.create(html);
  }
  /**
   * @param {?} array
   * @param {?} elem
   * @param {?} match
   * @param {?} obj
   * @return {?}
   */
  function last(array, elem, match, obj) {
    return null;
  }
  /**
   * @param {?} property
   * @param {?} object
   * @return {?}
   */
  function result(property, object) {
    return callback(property, last, null);
  }
  var insertAt = body.twoArgumentPooler;
  var n = body.threeArgumentPooler;
  body.addPoolingTo(expect, insertAt);
  body.addPoolingTo(node, n);
  var _ = {
    /** @type {function (Function, (Error|string), ?): ?} */
    forEach : clone,
    /** @type {function (Function, ?, ?): ?} */
    map : close,
    /** @type {function (?, ?): ?} */
    count : result
  };
  module.exports = _;
}, null);
__d("ReactComponent", ["ReactUpdateQueue", "invariant", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $, setState, opt_attributes) {
  /**
   * @param {Object} attribute
   * @param {string} value
   * @return {undefined}
   */
  function Type(attribute, value) {
    /** @type {Object} */
    this.props = attribute;
    /** @type {string} */
    this.context = value;
  }
  /**
   * @param {?} f
   * @param {?} elems
   * @return {undefined}
   */
  Type.prototype.setState = function(f, elems) {
    setState(typeof f === "object" || (typeof f === "function" || f == null));
    $.enqueueSetState(this, f);
    if (elems) {
      $.enqueueCallback(this, elems);
    }
  };
  /**
   * @param {?} elems
   * @return {undefined}
   */
  Type.prototype.forceUpdate = function(elems) {
    $.enqueueForceUpdate(this);
    if (elems) {
      $.enqueueCallback(this, elems);
    }
  };
  /** @type {function (Object, string): undefined} */
  module.exports = Type;
}, null);
__d("ReactErrorUtils", ["ErrorUtils"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, task) {
  var JsDiff = {
    guard : task.guard
  };
  module.exports = JsDiff;
}, null);
__d("ReactClass", ["ReactComponent", "ReactElement", "ReactErrorUtils", "ReactInstanceMap", "ReactLifeCycle", "ReactPropTypeLocations", "ReactPropTypeLocationNames", "ReactUpdateQueue", "Object.assign", "invariant", "keyMirror", "keyOf", "warning"], function(dataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, matchersClass, paragraph, node, $templateCache, deepDataAndEvents, matcherFunction, character, jQuery, $pick, forEach, $sanitize, format, fn) {
  /**
   * @param {Object} func
   * @param {Object} values
   * @param {number} name
   * @return {undefined}
   */
  function call(func, values, name) {
    var k;
    for (k in values) {
      if (values.hasOwnProperty(k)) {
        fn(typeof values[k] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from " + "React.PropTypes.", func.displayName || "ReactClass", character[name], k);
      }
    }
  }
  /**
   * @param {?} t
   * @param {string} name
   * @return {undefined}
   */
  function test(t, name) {
    var specPolicy = nameToAliasesMap.hasOwnProperty(name) ? nameToAliasesMap[name] : null;
    if (names.hasOwnProperty(name)) {
      forEach(specPolicy === SpecPolicy.OVERRIDE_BASE);
    }
    if (t.hasOwnProperty(name)) {
      forEach(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED);
    }
  }
  /**
   * @param {Function} key
   * @param {Object} child
   * @return {undefined}
   */
  function self(key, child) {
    if (!child) {
      return;
    }
    forEach(typeof child !== "function");
    forEach(!paragraph.isValidElement(child));
    var proto = key.prototype;
    if (child.hasOwnProperty(f)) {
      data.mixins(key, child.mixins);
    }
    var name;
    for (name in child) {
      if (!child.hasOwnProperty(name)) {
        continue;
      }
      if (name === f) {
        continue;
      }
      var property = child[name];
      test(proto, name);
      if (data.hasOwnProperty(name)) {
        data[name](key, property);
      } else {
        /** @type {boolean} */
        var queue = nameToAliasesMap.hasOwnProperty(name);
        var root = proto.hasOwnProperty(name);
        var dir = property && property.__reactDontBind;
        /** @type {boolean} */
        var value = typeof property === "function";
        /** @type {boolean} */
        var attrNames = value && (!queue && (!root && !dir));
        if (attrNames) {
          if (!proto.__reactAutoBindMap) {
            proto.__reactAutoBindMap = {};
          }
          proto.__reactAutoBindMap[name] = property;
          proto[name] = property;
        } else {
          if (root) {
            var specPolicy = nameToAliasesMap[name];
            forEach(queue && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY));
            if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else {
              if (specPolicy === SpecPolicy.DEFINE_MANY) {
                proto[name] = createChainedFunction(proto[name], property);
              }
            }
          } else {
            proto[name] = property;
          }
        }
      }
    }
  }
  /**
   * @param {Object} obj
   * @param {Object} prop
   * @return {undefined}
   */
  function setData(obj, prop) {
    if (!prop) {
      return;
    }
    var name;
    for (name in prop) {
      var value = prop[name];
      if (!prop.hasOwnProperty(name)) {
        continue;
      }
      /** @type {boolean} */
      var hasTexture = name in data;
      forEach(!hasTexture);
      /** @type {boolean} */
      var isCompositeComponentMethod = name in obj;
      forEach(!isCompositeComponentMethod);
      obj[name] = value;
    }
  }
  /**
   * @param {Object} destination
   * @param {Object} source
   * @return {?}
   */
  function extend(destination, source) {
    forEach(destination && (source && (typeof destination === "object" && typeof source === "object")));
    var property;
    for (property in source) {
      if (source.hasOwnProperty(property)) {
        forEach(destination[property] === void 0);
        destination[property] = source[property];
      }
    }
    return destination;
  }
  /**
   * @param {Function} matcherFunction
   * @param {Function} property
   * @return {?}
   */
  function createMergedResultFunction(matcherFunction, property) {
    return function parse() {
      var props = matcherFunction.apply(this, arguments);
      var params = property.apply(this, arguments);
      if (props == null) {
        return params;
      } else {
        if (params == null) {
          return props;
        }
      }
      var template = {};
      extend(template, props);
      extend(template, params);
      return template;
    };
  }
  /**
   * @param {Function} matcherFunction
   * @param {Function} two
   * @return {?}
   */
  function createChainedFunction(matcherFunction, two) {
    return function chainedFunction() {
      matcherFunction.apply(this, arguments);
      two.apply(this, arguments);
    };
  }
  /**
   * @param {Object} elem
   * @param {Function} callback
   * @return {?}
   */
  function get(elem, callback) {
    var matched = callback.bind(elem);
    return matched;
  }
  /**
   * @param {Object} object
   * @return {undefined}
   */
  function toString(object) {
    var name;
    for (name in object.__reactAutoBindMap) {
      if (object.__reactAutoBindMap.hasOwnProperty(name)) {
        var method = object.__reactAutoBindMap[name];
        object[name] = get(object, node.guard(method, object.constructor.displayName + "." + name));
      }
    }
  }
  var f = format({
    mixins : null
  });
  var SpecPolicy = $sanitize({
    DEFINE_ONCE : null,
    DEFINE_MANY : null,
    OVERRIDE_BASE : null,
    DEFINE_MANY_MERGED : null
  });
  /** @type {Array} */
  var keys = [];
  var nameToAliasesMap = {
    mixins : SpecPolicy.DEFINE_MANY,
    statics : SpecPolicy.DEFINE_MANY,
    propTypes : SpecPolicy.DEFINE_MANY,
    contextTypes : SpecPolicy.DEFINE_MANY,
    childContextTypes : SpecPolicy.DEFINE_MANY,
    getDefaultProps : SpecPolicy.DEFINE_MANY_MERGED,
    getInitialState : SpecPolicy.DEFINE_MANY_MERGED,
    getChildContext : SpecPolicy.DEFINE_MANY_MERGED,
    render : SpecPolicy.DEFINE_ONCE,
    componentWillMount : SpecPolicy.DEFINE_MANY,
    componentDidMount : SpecPolicy.DEFINE_MANY,
    componentWillReceiveProps : SpecPolicy.DEFINE_MANY,
    shouldComponentUpdate : SpecPolicy.DEFINE_ONCE,
    componentWillUpdate : SpecPolicy.DEFINE_MANY,
    componentDidUpdate : SpecPolicy.DEFINE_MANY,
    componentWillUnmount : SpecPolicy.DEFINE_MANY,
    updateComponent : SpecPolicy.OVERRIDE_BASE
  };
  var data = {
    /**
     * @param {string} attribute
     * @param {string} value
     * @return {undefined}
     */
    displayName : function(attribute, value) {
      /** @type {string} */
      attribute.displayName = value;
    },
    /**
     * @param {Function} props
     * @param {Array} obj
     * @return {undefined}
     */
    mixins : function(props, obj) {
      if (obj) {
        /** @type {number} */
        var i = 0;
        for (;i < obj.length;i++) {
          self(props, obj[i]);
        }
      }
    },
    /**
     * @param {Function} props
     * @param {string} status
     * @return {undefined}
     */
    childContextTypes : function(props, status) {
      props.childContextTypes = $pick({}, props.childContextTypes, status);
    },
    /**
     * @param {Function} props
     * @param {string} status
     * @return {undefined}
     */
    contextTypes : function(props, status) {
      props.contextTypes = $pick({}, props.contextTypes, status);
    },
    /**
     * @param {?} a
     * @param {?} property
     * @return {undefined}
     */
    getDefaultProps : function(a, property) {
      if (a.getDefaultProps) {
        a.getDefaultProps = createMergedResultFunction(a.getDefaultProps, property);
      } else {
        a.getDefaultProps = property;
      }
    },
    /**
     * @param {Function} props
     * @param {string} status
     * @return {undefined}
     */
    propTypes : function(props, status) {
      props.propTypes = $pick({}, props.propTypes, status);
    },
    /**
     * @param {Object} o
     * @param {string} key
     * @return {undefined}
     */
    statics : function(o, key) {
      setData(o, key);
    }
  };
  var desc = {
    enumerable : false,
    /**
     * @return {?}
     */
    get : function() {
      var arr = this.displayName || (this.name || "Component");
      fn(false, "%s.type is deprecated. Use %s directly to access the class.", arr, arr);
      Object.defineProperty(this, "type", {
        value : this
      });
      return this;
    }
  };
  var names = {
    /**
     * @param {?} dataAndEvents
     * @param {?} callback
     * @return {undefined}
     */
    replaceState : function(dataAndEvents, callback) {
      jQuery.enqueueReplaceState(this, dataAndEvents);
      if (callback) {
        jQuery.enqueueCallback(this, callback);
      }
    },
    /**
     * @return {?}
     */
    isMounted : function() {
      var cur = $templateCache.get(this);
      return cur && cur !== deepDataAndEvents.currentlyMountingInstance;
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} callback
     * @return {undefined}
     */
    setProps : function(dataAndEvents, callback) {
      jQuery.enqueueSetProps(this, dataAndEvents);
      if (callback) {
        jQuery.enqueueCallback(this, callback);
      }
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} callback
     * @return {undefined}
     */
    replaceProps : function(dataAndEvents, callback) {
      jQuery.enqueueReplaceProps(this, dataAndEvents);
      if (callback) {
        jQuery.enqueueCallback(this, callback);
      }
    }
  };
  /**
   * @return {undefined}
   */
  var parentClass = function() {
  };
  $pick(parentClass.prototype, matchersClass.prototype, names);
  var JsDiff = {
    /**
     * @param {?} opt_attributes
     * @return {?}
     */
    createClass : function(opt_attributes) {
      /**
       * @param {Object} node
       * @param {string} value
       * @return {undefined}
       */
      var fn = function(node, value) {
        if (this.__reactAutoBindMap) {
          toString(this);
        }
        /** @type {Object} */
        this.props = node;
        /** @type {string} */
        this.context = value;
        /** @type {null} */
        this.state = null;
        var requires = this.getInitialState ? this.getInitialState() : null;
        forEach(typeof requires === "object" && !Array.isArray(requires));
        this.state = requires;
      };
      fn.prototype = new parentClass;
      /** @type {function (Object, string): undefined} */
      fn.prototype.constructor = fn;
      keys.forEach(self.bind(null, fn));
      self(fn, opt_attributes);
      if (fn.getDefaultProps) {
        fn.defaultProps = fn.getDefaultProps();
      }
      forEach(fn.prototype.render);
      var name;
      for (name in nameToAliasesMap) {
        if (!fn.prototype[name]) {
          /** @type {null} */
          fn.prototype[name] = null;
        }
      }
      /** @type {function (Object, string): undefined} */
      fn.type = fn;
      return fn;
    },
    injection : {
      /**
       * @param {?} i
       * @return {undefined}
       */
      injectMixin : function(i) {
        keys.push(i);
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("escapeTextContentForBrowser", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, s, keepData) {
  /**
   * @param {?} off
   * @return {?}
   */
  function b(off) {
    return buf[off];
  }
  /**
   * @param {string} node
   * @return {?}
   */
  function title(node) {
    return("" + node).replace(r20, b);
  }
  var buf = {
    "&" : "&amp;",
    ">" : "&gt;",
    "<" : "&lt;",
    '"' : "&quot;",
    "'" : "&#x27;"
  };
  /** @type {RegExp} */
  var r20 = /[&><"']/g;
  /** @type {function (string): ?} */
  s.exports = title;
}, null);
__d("quoteAttributeValueForBrowser", ["escapeTextContentForBrowser"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, fn) {
  /**
   * @param {string} attribute
   * @return {?}
   */
  function attr(attribute) {
    return'"' + fn(attribute) + '"';
  }
  /** @type {function (string): ?} */
  module.exports = attr;
}, null);
__d("DOMPropertyOperations", ["DOMProperty", "quoteAttributeValueForBrowser", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, elem, fn, opt_attributes) {
  /**
   * @param {string} name
   * @param {number} value
   * @return {?}
   */
  function ondata(name, value) {
    return value == null || (elem.hasBooleanValue[name] && !value || (elem.hasNumericValue[name] && isNaN(value) || (elem.hasPositiveNumericValue[name] && value < 1 || elem.hasOverloadedBooleanValue[name] && value === false)));
  }
  var JsDiff = {
    /**
     * @param {string} factor
     * @return {?}
     */
    createMarkupForID : function(factor) {
      return elem.ID_ATTRIBUTE_NAME + "=" + fn(factor);
    },
    /**
     * @param {string} name
     * @param {number} val
     * @return {?}
     */
    createMarkupForProperty : function(name, val) {
      if (elem.isStandardName.hasOwnProperty(name) && elem.isStandardName[name]) {
        if (ondata(name, val)) {
          return "";
        }
        var key = elem.getAttributeName[name];
        if (elem.hasBooleanValue[name] || elem.hasOverloadedBooleanValue[name] && val === true) {
          return key;
        }
        return key + "=" + fn(val);
      } else {
        if (elem.isCustomAttribute(name)) {
          if (val == null) {
            return "";
          }
          return name + "=" + fn(val);
        }
      }
      return null;
    },
    /**
     * @param {Element} node
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    setValueForProperty : function(node, name, value) {
      if (elem.isStandardName.hasOwnProperty(name) && elem.isStandardName[name]) {
        var mutationMethod = elem.getMutationMethod[name];
        if (mutationMethod) {
          mutationMethod(node, value);
        } else {
          if (ondata(name, value)) {
            this.deleteValueForProperty(node, name);
          } else {
            if (elem.mustUseAttribute[name]) {
              node.setAttribute(elem.getAttributeName[name], "" + value);
            } else {
              var key = elem.getPropertyName[name];
              if (!elem.hasSideEffects[name] || "" + node[key] !== "" + value) {
                /** @type {string} */
                node[key] = value;
              }
            }
          }
        }
      } else {
        if (elem.isCustomAttribute(name)) {
          if (value == null) {
            node.removeAttribute(name);
          } else {
            node.setAttribute(name, "" + value);
          }
        }
      }
    },
    /**
     * @param {Element} node
     * @param {string} name
     * @return {undefined}
     */
    deleteValueForProperty : function(node, name) {
      if (elem.isStandardName.hasOwnProperty(name) && elem.isStandardName[name]) {
        var mutationMethod = elem.getMutationMethod[name];
        if (mutationMethod) {
          mutationMethod(node, void 0);
        } else {
          if (elem.mustUseAttribute[name]) {
            node.removeAttribute(elem.getAttributeName[name]);
          } else {
            var attr = elem.getPropertyName[name];
            var val = elem.getDefaultValueForProperty(node.nodeName, attr);
            if (!elem.hasSideEffects[name] || "" + node[attr] !== val) {
              node[attr] = val;
            }
          }
        }
      } else {
        if (elem.isCustomAttribute(name)) {
          node.removeAttribute(name);
        }
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("CSSProperty", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} deepDataAndEvents
   * @param {string} string
   * @return {?}
   */
  function format(deepDataAndEvents, string) {
    return deepDataAndEvents + string.charAt(0).toUpperCase() + string.substring(1);
  }
  var defaults = {
    columnCount : true,
    flex : true,
    flexGrow : true,
    flexShrink : true,
    fontWeight : true,
    lineClamp : true,
    lineHeight : true,
    opacity : true,
    order : true,
    orphans : true,
    widows : true,
    zIndex : true,
    zoom : true,
    fillOpacity : true,
    strokeOpacity : true
  };
  /** @type {Array} */
  var prefixes = ["Webkit", "ms", "Moz", "O"];
  Object.keys(defaults).forEach(function(key) {
    prefixes.forEach(function(deepDataAndEvents) {
      defaults[format(deepDataAndEvents, key)] = defaults[key];
    });
  });
  var shorthandStyles = {
    background : {
      backgroundImage : true,
      backgroundPosition : true,
      backgroundRepeat : true,
      backgroundColor : true
    },
    border : {
      borderWidth : true,
      borderStyle : true,
      borderColor : true
    },
    borderBottom : {
      borderBottomWidth : true,
      borderBottomStyle : true,
      borderBottomColor : true
    },
    borderLeft : {
      borderLeftWidth : true,
      borderLeftStyle : true,
      borderLeftColor : true
    },
    borderRight : {
      borderRightWidth : true,
      borderRightStyle : true,
      borderRightColor : true
    },
    borderTop : {
      borderTopWidth : true,
      borderTopStyle : true,
      borderTopColor : true
    },
    font : {
      fontStyle : true,
      fontVariant : true,
      fontWeight : true,
      fontSize : true,
      lineHeight : true,
      fontFamily : true
    }
  };
  var JsDiff = {
    isUnitlessNumber : defaults,
    shorthandPropertyExpansions : shorthandStyles
  };
  module.exports = JsDiff;
}, null);
__d("dangerousStyleValue", ["CSSProperty"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, left) {
  /**
   * @param {string} attribute
   * @param {string} value
   * @return {?}
   */
  function parse(attribute, value) {
    /** @type {boolean} */
    var l = value == null || (typeof value === "boolean" || value === "");
    if (l) {
      return "";
    }
    /** @type {boolean} */
    var isNonNumeric = isNaN(value);
    if (isNonNumeric || (value === 0 || a.hasOwnProperty(attribute) && a[attribute])) {
      return "" + value;
    }
    if (typeof value === "string") {
      /** @type {string} */
      value = value.trim();
    }
    return value + "px";
  }
  var a = left.isUnitlessNumber;
  /** @type {function (string, string): ?} */
  module.exports = parse;
}, null);
__d("CSSPropertyOperations", ["CSSProperty", "ExecutionEnvironment", "camelizeStyleName", "dangerousStyleValue", "hyphenateStyleName", "memoizeStringOnly", "warning"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, element, dataAndEvents, matcherFunction, dangerousStyleValue, cb, topic, execResult) {
  var out = topic(function(outErr) {
    return cb(outErr);
  });
  /** @type {string} */
  var name = "cssFloat";
  if (dataAndEvents.canUseDOM) {
    if (document.documentElement.style.cssFloat === void 0) {
      /** @type {string} */
      name = "styleFloat";
    }
  }
  var JsDiff = {
    /**
     * @param {Object} styles
     * @return {?}
     */
    createMarkupForStyles : function(styles) {
      /** @type {string} */
      var optsData = "";
      var style;
      for (style in styles) {
        if (!styles.hasOwnProperty(style)) {
          continue;
        }
        var styleValue = styles[style];
        if (styleValue != null) {
          optsData += out(style) + ":";
          optsData += dangerousStyleValue(style, styleValue) + ";";
        }
      }
      return optsData || null;
    },
    /**
     * @param {Element} node
     * @param {Object} styles
     * @return {undefined}
     */
    setValueForStyles : function(node, styles) {
      var style = node.style;
      var styleName;
      for (styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        var styleValue = dangerousStyleValue(styleName, styles[styleName]);
        if (styleName === "float") {
          styleName = name;
        }
        if (styleValue) {
          style[styleName] = styleValue;
        } else {
          var expansion = element.shorthandPropertyExpansions[styleName];
          if (expansion) {
            var individualStyleName;
            for (individualStyleName in expansion) {
              /** @type {string} */
              style[individualStyleName] = "";
            }
          } else {
            /** @type {string} */
            style[styleName] = "";
          }
        }
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("Danger", ["ExecutionEnvironment", "createNodesFromMarkup", "emptyFunction", "getMarkupWrap", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, time, cb, srcFiles, indexOf, expect) {
  /**
   * @param {string} sName
   * @return {?}
   */
  function fnReadCookie(sName) {
    return sName.substring(1, sName.indexOf(" "));
  }
  /** @type {RegExp} */
  var rreturn = /^(<[^ \/>]+)/;
  /** @type {string} */
  var attribute = "data-danger-index";
  var JsDiff = {
    /**
     * @param {Array} value
     * @return {?}
     */
    dangerouslyRenderMarkup : function(value) {
      expect(time.canUseDOM);
      var id;
      var records = {};
      /** @type {number} */
      var index = 0;
      for (;index < value.length;index++) {
        expect(value[index]);
        id = fnReadCookie(value[index]);
        id = indexOf(id) ? id : "*";
        records[id] = records[id] || [];
        records[id][index] = value[index];
      }
      /** @type {Array} */
      var data = [];
      /** @type {number} */
      var consumed = 0;
      for (id in records) {
        if (!records.hasOwnProperty(id)) {
          continue;
        }
        var obj = records[id];
        var name;
        for (name in obj) {
          if (obj.hasOwnProperty(name)) {
            var ret = obj[name];
            obj[name] = ret.replace(rreturn, "$1 " + attribute + '="' + name + '" ');
          }
        }
        var codeSegments = cb(obj.join(""), srcFiles);
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;++i) {
          var node = codeSegments[i];
          if (node.hasAttribute && node.hasAttribute(attribute)) {
            /** @type {number} */
            name = +node.getAttribute(attribute);
            node.removeAttribute(attribute);
            expect(!data.hasOwnProperty(name));
            data[name] = node;
            consumed += 1;
          }
        }
      }
      expect(consumed === data.length);
      expect(data.length === value.length);
      return data;
    },
    /**
     * @param {Node} oldChild
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    dangerouslyReplaceNodeWithMarkup : function(oldChild, deepDataAndEvents) {
      expect(time.canUseDOM);
      expect(deepDataAndEvents);
      expect(oldChild.tagName.toLowerCase() !== "html");
      var backupText = cb(deepDataAndEvents, srcFiles)[0];
      oldChild.parentNode.replaceChild(backupText, oldChild);
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactMultiChildUpdateTypes", ["keyMirror"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, topic) {
  var out = topic({
    INSERT_MARKUP : null,
    MOVE_EXISTING : null,
    REMOVE_NODE : null,
    TEXT_CONTENT : null
  });
  module.exports = out;
}, null);
__d("setTextContent", ["ExecutionEnvironment", "escapeTextContentForBrowser", "setInnerHTML"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, $, fn) {
  /**
   * @param {string} element
   * @param {string} value
   * @return {undefined}
   */
  var attr = function(element, value) {
    /** @type {string} */
    element.textContent = value;
  };
  if (dataAndEvents.canUseDOM) {
    if (!("textContent" in document.documentElement)) {
      /**
       * @param {string} attribute
       * @param {string} value
       * @return {undefined}
       */
      attr = function(attribute, value) {
        fn(attribute, $(value));
      };
    }
  }
  /** @type {function (string, string): undefined} */
  module.exports = attr;
}, null);
__d("DOMChildrenOperations", ["Danger", "ReactMultiChildUpdateTypes", "setTextContent", "invariant"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, series, callback, $sanitize) {
  /**
   * @param {Element} wrapper
   * @param {?} context
   * @param {?} num
   * @return {undefined}
   */
  function wrap(wrapper, context, num) {
    wrapper.insertBefore(context, wrapper.childNodes[num] || null);
  }
  var JsDiff = {
    dangerouslyReplaceNodeWithMarkup : dataAndEvents.dangerouslyReplaceNodeWithMarkup,
    updateTextContent : callback,
    /**
     * @param {Array} updates
     * @param {Array} isXML
     * @return {undefined}
     */
    processUpdates : function(updates, isXML) {
      var update;
      /** @type {null} */
      var initialChildren = null;
      /** @type {null} */
      var updatedChildren = null;
      /** @type {number} */
      var i = 0;
      for (;i < updates.length;i++) {
        update = updates[i];
        if (update.type === series.MOVE_EXISTING || update.type === series.REMOVE_NODE) {
          var updatedIndex = update.fromIndex;
          var updatedChild = update.parentNode.childNodes[updatedIndex];
          var parentID = update.parentID;
          $sanitize(updatedChild);
          initialChildren = initialChildren || {};
          initialChildren[parentID] = initialChildren[parentID] || [];
          initialChildren[parentID][updatedIndex] = updatedChild;
          /** @type {Array} */
          updatedChildren = updatedChildren || [];
          updatedChildren.push(updatedChild);
        }
      }
      var renderedMarkup = dataAndEvents.dangerouslyRenderMarkup(isXML);
      if (updatedChildren) {
        /** @type {number} */
        var j = 0;
        for (;j < updatedChildren.length;j++) {
          updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
        }
      }
      /** @type {number} */
      var k = 0;
      for (;k < updates.length;k++) {
        update = updates[k];
        switch(update.type) {
          case series.INSERT_MARKUP:
            wrap(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
            break;
          case series.MOVE_EXISTING:
            wrap(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
            break;
          case series.TEXT_CONTENT:
            callback(update.parentNode, update.textContent);
            break;
          case series.REMOVE_NODE:
            break;
        }
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactDOMIDOperations", ["CSSPropertyOperations", "DOMChildrenOperations", "DOMPropertyOperations", "ReactMount", "ReactPerf", "invariant", "setInnerHTML"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Element, assert, jQuery, ids, gridStore, $sanitize, group) {
  var names = {
    dangerouslySetInnerHTML : "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
    style : "`style` must be set using `updateStylesByID()`."
  };
  var data = {
    /**
     * @param {string} id
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    updatePropertyByID : function(id, name, value) {
      var node = ids.getNode(id);
      $sanitize(!names.hasOwnProperty(name));
      if (value != null) {
        jQuery.setValueForProperty(node, name, value);
      } else {
        jQuery.deleteValueForProperty(node, name);
      }
    },
    /**
     * @param {string} id
     * @param {string} name
     * @param {?} value
     * @return {undefined}
     */
    deletePropertyByID : function(id, name, value) {
      var node = ids.getNode(id);
      $sanitize(!names.hasOwnProperty(name));
      jQuery.deleteValueForProperty(node, name, value);
    },
    /**
     * @param {string} id
     * @param {Error} styles
     * @return {undefined}
     */
    updateStylesByID : function(id, styles) {
      var node = ids.getNode(id);
      Element.setValueForStyles(node, styles);
    },
    /**
     * @param {string} element
     * @param {string} value
     * @return {undefined}
     */
    updateInnerHTMLByID : function(element, value) {
      var elementRect = ids.getNode(element);
      group(elementRect, value);
    },
    /**
     * @param {string} id
     * @param {string} el
     * @return {undefined}
     */
    updateTextContentByID : function(id, el) {
      var children = ids.getNode(id);
      assert.updateTextContent(children, el);
    },
    /**
     * @param {string} id
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    dangerouslyReplaceNodeWithMarkupByID : function(id, deepDataAndEvents) {
      var table = ids.getNode(id);
      assert.dangerouslyReplaceNodeWithMarkup(table, deepDataAndEvents);
    },
    /**
     * @param {Array} updates
     * @param {Array} results
     * @return {undefined}
     */
    dangerouslyProcessChildrenUpdates : function(updates, results) {
      /** @type {number} */
      var i = 0;
      for (;i < updates.length;i++) {
        updates[i].parentNode = ids.getNode(updates[i].parentID);
      }
      assert.processUpdates(updates, results);
    }
  };
  gridStore.measureMethods(data, "ReactDOMIDOperations", {
    updatePropertyByID : "updatePropertyByID",
    deletePropertyByID : "deletePropertyByID",
    updateStylesByID : "updateStylesByID",
    updateInnerHTMLByID : "updateInnerHTMLByID",
    updateTextContentByID : "updateTextContentByID",
    dangerouslyReplaceNodeWithMarkupByID : "dangerouslyReplaceNodeWithMarkupByID",
    dangerouslyProcessChildrenUpdates : "dangerouslyProcessChildrenUpdates"
  });
  module.exports = data;
}, null);
__d("ReactComponentBrowserEnvironment", ["ReactDOMIDOperations", "ReactMount"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, dataAndEvents, deepDataAndEvents) {
  var JsDiff = {
    processChildrenUpdates : dataAndEvents.dangerouslyProcessChildrenUpdates,
    replaceNodeWithMarkupByID : dataAndEvents.dangerouslyReplaceNodeWithMarkupByID,
    /**
     * @param {?} subKey
     * @return {undefined}
     */
    unmountIDFromEnvironment : function(subKey) {
      deepDataAndEvents.purgeID(subKey);
    }
  };
  module.exports = JsDiff;
}, null);
__d("flattenChildren", ["traverseAllChildren", "warning"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, fn, opt_attributes) {
  /**
   * @param {Object} formatString
   * @param {string} offset
   * @param {?} word
   * @return {undefined}
   */
  function format(formatString, offset, word) {
    /** @type {Object} */
    var keywords = formatString;
    /** @type {boolean} */
    var expandStart = !keywords.hasOwnProperty(word);
    if (expandStart && offset != null) {
      /** @type {string} */
      keywords[word] = offset;
    }
  }
  /**
   * @param {string} attribute
   * @return {?}
   */
  function attr(attribute) {
    if (attribute == null) {
      return attribute;
    }
    var value = {};
    fn(attribute, format, value);
    return value;
  }
  /** @type {function (string): ?} */
  module.exports = attr;
}, null);
__d("ReactChildReconciler", ["ReactReconciler", "flattenChildren", "instantiateReactComponent", "shouldUpdateReactComponent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, utils, $, trim, trigger) {
  var JsDiff = {
    /**
     * @param {?} deep
     * @param {string} keepData
     * @param {string} v02
     * @return {?}
     */
    instantiateChildren : function(deep, keepData, v02) {
      var fields = $(deep);
      var key;
      for (key in fields) {
        if (fields.hasOwnProperty(key)) {
          var field = fields[key];
          var value = trim(field, null);
          fields[key] = value;
        }
      }
      return fields;
    },
    /**
     * @param {?} extra
     * @param {string} param
     * @param {string} transaction
     * @param {string} callback
     * @return {?}
     */
    updateChildren : function(extra, param, transaction, callback) {
      var target = $(param);
      if (!target && !extra) {
        return null;
      }
      var key;
      for (key in target) {
        if (!target.hasOwnProperty(key)) {
          continue;
        }
        var id = extra && extra[key];
        var thisCache = id && id._currentElement;
        var t = target[key];
        if (trigger(thisCache, t)) {
          utils.receiveComponent(id, t, transaction, callback);
          target[key] = id;
        } else {
          if (id) {
            utils.unmountComponent(id, key);
          }
          var copy = trim(t, null);
          target[key] = copy;
        }
      }
      for (key in extra) {
        if (extra.hasOwnProperty(key) && !(target && target.hasOwnProperty(key))) {
          utils.unmountComponent(extra[key]);
        }
      }
      return target;
    },
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    unmountChildren : function(obj) {
      var i;
      for (i in obj) {
        var val = obj[i];
        utils.unmountComponent(val);
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactMultiChild", ["ReactComponentEnvironment", "ReactMultiChildUpdateTypes", "ReactReconciler", "ReactChildReconciler"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, jQuery, t, component, _) {
  /**
   * @param {string} insertBefore
   * @param {?} callback
   * @param {number} returnDom
   * @return {undefined}
   */
  function createChild(insertBefore, callback, returnDom) {
    scripts.push({
      parentID : insertBefore,
      parentNode : null,
      type : t.INSERT_MARKUP,
      markupIndex : matched.push(callback) - 1,
      textContent : null,
      fromIndex : null,
      toIndex : returnDom
    });
  }
  /**
   * @param {string} details
   * @param {number} failing_message
   * @param {number} toIndex
   * @return {undefined}
   */
  function report(details, failing_message, toIndex) {
    scripts.push({
      parentID : details,
      parentNode : null,
      type : t.MOVE_EXISTING,
      markupIndex : null,
      textContent : null,
      fromIndex : failing_message,
      toIndex : toIndex
    });
  }
  /**
   * @param {string} object
   * @param {number} fromIndex
   * @return {undefined}
   */
  function getEnumerableProperties(object, fromIndex) {
    scripts.push({
      parentID : object,
      parentNode : null,
      type : t.REMOVE_NODE,
      markupIndex : null,
      textContent : null,
      fromIndex : fromIndex,
      toIndex : null
    });
  }
  /**
   * @param {string} state
   * @param {string} v
   * @return {undefined}
   */
  function token(state, v) {
    scripts.push({
      parentID : state,
      parentNode : null,
      type : t.TEXT_CONTENT,
      markupIndex : null,
      textContent : v,
      fromIndex : null,
      toIndex : null
    });
  }
  /**
   * @return {undefined}
   */
  function getPosition() {
    if (scripts.length) {
      jQuery.processChildrenUpdates(scripts, matched);
      first();
    }
  }
  /**
   * @return {undefined}
   */
  function first() {
    /** @type {number} */
    scripts.length = 0;
    /** @type {number} */
    matched.length = 0;
  }
  /** @type {number} */
  var k = 0;
  /** @type {Array} */
  var scripts = [];
  /** @type {Array} */
  var matched = [];
  var JsDiff = {
    Mixin : {
      /**
       * @param {?} deep
       * @param {string} key
       * @param {string} a
       * @return {?}
       */
      mountChildren : function(deep, key, a) {
        var children = _.instantiateChildren(deep, key, a);
        this._renderedChildren = children;
        /** @type {Array} */
        var holder = [];
        /** @type {number} */
        var categoryName = 0;
        var n;
        for (n in children) {
          if (children.hasOwnProperty(n)) {
            var name = children[n];
            /** @type {string} */
            var transaction = this._rootNodeID + n;
            var wrapper = component.mountComponent(name, transaction, key, a);
            /** @type {number} */
            name._mountIndex = categoryName;
            holder.push(wrapper);
            categoryName++;
          }
        }
        return holder;
      },
      /**
       * @param {string} children
       * @return {undefined}
       */
      updateTextContent : function(children) {
        k++;
        /** @type {boolean} */
        var v = true;
        try {
          var priorities = this._renderedChildren;
          _.unmountChildren(priorities);
          var name;
          for (name in priorities) {
            if (priorities.hasOwnProperty(name)) {
              this._unmountChildByName(priorities[name], name);
            }
          }
          this.setTextContent(children);
          /** @type {boolean} */
          v = false;
        } finally {
          k--;
          if (!k) {
            if (v) {
              first();
            } else {
              getPosition();
            }
          }
        }
      },
      /**
       * @param {string} isXML
       * @param {string} transaction
       * @param {string} options
       * @return {undefined}
       */
      updateChildren : function(isXML, transaction, options) {
        k++;
        /** @type {boolean} */
        var x = true;
        try {
          this._updateChildren(isXML, transaction, options);
          /** @type {boolean} */
          x = false;
        } finally {
          k--;
          if (!k) {
            if (x) {
              first();
            } else {
              getPosition();
            }
          }
        }
      },
      /**
       * @param {string} value
       * @param {string} transaction
       * @param {string} elems
       * @return {undefined}
       */
      _updateChildren : function(value, transaction, elems) {
        var prevChildren = this._renderedChildren;
        var item = _.updateChildren(prevChildren, value, transaction, elems);
        this._renderedChildren = item;
        if (!item && !prevChildren) {
          return;
        }
        var name;
        /** @type {number} */
        var lastIndex = 0;
        /** @type {number} */
        var nextIndex = 0;
        for (name in item) {
          if (!item.hasOwnProperty(name)) {
            continue;
          }
          var prevChild = prevChildren && prevChildren[name];
          var set = item[name];
          if (prevChild === set) {
            this.moveChild(prevChild, nextIndex, lastIndex);
            /** @type {number} */
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            /** @type {number} */
            prevChild._mountIndex = nextIndex;
          } else {
            if (prevChild) {
              /** @type {number} */
              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              this._unmountChildByName(prevChild, name);
            }
            this._mountChildByNameAtIndex(set, name, nextIndex, transaction, elems);
          }
          nextIndex++;
        }
        for (name in prevChildren) {
          if (prevChildren.hasOwnProperty(name) && !(item && item.hasOwnProperty(name))) {
            this._unmountChildByName(prevChildren[name], name);
          }
        }
      },
      /**
       * @return {undefined}
       */
      unmountChildren : function() {
        var reversed = this._renderedChildren;
        _.unmountChildren(reversed);
        /** @type {null} */
        this._renderedChildren = null;
      },
      /**
       * @param {?} child
       * @param {number} toIndex
       * @param {number} lastIndex
       * @return {undefined}
       */
      moveChild : function(child, toIndex, lastIndex) {
        if (child._mountIndex < lastIndex) {
          report(this._rootNodeID, child._mountIndex, toIndex);
        }
      },
      /**
       * @param {string} child
       * @param {?} callback
       * @return {undefined}
       */
      createChild : function(child, callback) {
        createChild(this._rootNodeID, callback, child._mountIndex);
      },
      /**
       * @param {?} child
       * @return {undefined}
       */
      removeChild : function(child) {
        getEnumerableProperties(this._rootNodeID, child._mountIndex);
      },
      /**
       * @param {string} text
       * @return {undefined}
       */
      setTextContent : function(text) {
        token(this._rootNodeID, text);
      },
      /**
       * @param {string} name
       * @param {?} keepData
       * @param {number} index
       * @param {string} sqlt
       * @param {string} owner
       * @return {undefined}
       */
      _mountChildByNameAtIndex : function(name, keepData, index, sqlt, owner) {
        var transaction = this._rootNodeID + keepData;
        var restoreScript = component.mountComponent(name, transaction, sqlt, owner);
        /** @type {number} */
        name._mountIndex = index;
        this.createChild(name, restoreScript);
      },
      /**
       * @param {?} child
       * @param {string} keepData
       * @return {undefined}
       */
      _unmountChildByName : function(child, keepData) {
        this.removeChild(child);
        /** @type {null} */
        child._mountIndex = null;
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactDOMComponent", ["CSSPropertyOperations", "DOMProperty", "DOMPropertyOperations", "ReactBrowserEventEmitter", "ReactComponentBrowserEnvironment", "ReactMount", "ReactMultiChild", "ReactPerf", "Object.assign", "escapeTextContentForBrowser", "invariant", "isEventSupported", "keyOf", "warning"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, defer, elem, hooks, collection, dataAndEvents, idsAndClasses, NumberTextBox, $injector, extend, deepEqual,
filter, deepDataAndEvents, topic, execResult) {
  /**
   * @param {Object} nextProps
   * @return {undefined}
   */
  function apply(nextProps) {
    if (!nextProps) {
      return;
    }
    if (nextProps.dangerouslySetInnerHTML != null) {
      filter(nextProps.children == null);
      filter(nextProps.dangerouslySetInnerHTML.__html != null);
    }
    filter(nextProps.style == null || typeof nextProps.style === "object");
  }
  /**
   * @param {string} id
   * @param {string} elem
   * @param {?} node
   * @param {string} novisibility
   * @return {undefined}
   */
  function set(id, elem, node, novisibility) {
    var a = idsAndClasses.findReactContainerForID(id);
    if (a) {
      var camelKey = a.nodeType === string ? a.ownerDocument : a;
      dataAttr(elem, camelKey);
    }
    novisibility.getPutListenerQueue().enqueuePutListener(id, elem, node);
  }
  /**
   * @param {string} type
   * @return {undefined}
   */
  function validate(type) {
    if (!__hasProp.call(opts, type)) {
      filter(manipulation_rcheckableType.test(type));
      /** @type {boolean} */
      opts[type] = true;
    }
  }
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function Type(attribute) {
    validate(attribute);
    /** @type {string} */
    this._tag = attribute;
    /** @type {null} */
    this._renderedChildren = null;
    /** @type {null} */
    this._previousStyleCopy = null;
    /** @type {null} */
    this._rootNodeID = null;
  }
  var index = collection.deleteListener;
  var dataAttr = collection.listenTo;
  var e = collection.registrationNameModules;
  var CONTENT_TYPES = {
    string : true,
    number : true
  };
  var out = topic({
    style : null
  });
  /** @type {number} */
  var string = 1;
  /** @type {null} */
  var data_priv = null;
  var selfClosing = {
    area : true,
    base : true,
    br : true,
    col : true,
    embed : true,
    hr : true,
    img : true,
    input : true,
    keygen : true,
    link : true,
    meta : true,
    param : true,
    source : true,
    track : true,
    wbr : true
  };
  /** @type {RegExp} */
  var manipulation_rcheckableType = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
  var opts = {};
  /** @type {function (this:Object, *): boolean} */
  var __hasProp = {}.hasOwnProperty;
  /** @type {string} */
  Type.displayName = "ReactDOMComponent";
  Type.Mixin = {
    /**
     * @param {?} keepData
     * @return {undefined}
     */
    construct : function(keepData) {
      this._currentElement = keepData;
    },
    /**
     * @param {string} keepData
     * @param {string} transaction
     * @param {string} callback
     * @return {?}
     */
    mountComponent : function(keepData, transaction, callback) {
      /** @type {string} */
      this._rootNodeID = keepData;
      apply(this._currentElement.props);
      /** @type {string} */
      var transClass = selfClosing[this._tag] ? "" : "</" + this._tag + ">";
      return this._createOpenTagMarkupAndPutListeners(transaction) + this._createContentMarkup(transaction, callback) + transClass;
    },
    /**
     * @param {string} value
     * @return {?}
     */
    _createOpenTagMarkupAndPutListeners : function(value) {
      var def = this._currentElement.props;
      /** @type {string} */
      var type = "<" + this._tag;
      var key;
      for (key in def) {
        if (!def.hasOwnProperty(key)) {
          continue;
        }
        var val = def[key];
        if (val == null) {
          continue;
        }
        if (e.hasOwnProperty(key)) {
          set(this._rootNodeID, key, val, value);
        } else {
          if (key === out) {
            if (val) {
              val = this._previousStyleCopy = extend({}, def.style);
            }
            val = defer.createMarkupForStyles(val);
          }
          var node = hooks.createMarkupForProperty(key, val);
          if (node) {
            type += " " + node;
          }
        }
      }
      if (value.renderToStaticMarkup) {
        return type + ">";
      }
      var pageX = hooks.createMarkupForID(this._rootNodeID);
      return type + " " + pageX + ">";
    },
    /**
     * @param {string} transaction
     * @param {string} results
     * @return {?}
     */
    _createContentMarkup : function(transaction, results) {
      /** @type {string} */
      var prefix = "";
      if (this._tag === "listing" || (this._tag === "pre" || this._tag === "textarea")) {
        /** @type {string} */
        prefix = "\n";
      }
      var nextProps = this._currentElement.props;
      var innerHTML = nextProps.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          return prefix + innerHTML.__html;
        }
      } else {
        var actual = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
        var deep = actual != null ? null : nextProps.children;
        if (actual != null) {
          return prefix + deepEqual(actual);
        } else {
          if (deep != null) {
            var mountImages = this.mountChildren(deep, transaction, results);
            return prefix + mountImages.join("");
          }
        }
      }
      return prefix;
    },
    /**
     * @param {?} key
     * @param {?} transaction
     * @param {string} t
     * @return {undefined}
     */
    receiveComponent : function(key, transaction, t) {
      var concreteCmp = this._currentElement;
      this._currentElement = key;
      this.updateComponent(transaction, concreteCmp, key, t);
    },
    /**
     * @param {?} transaction
     * @param {?} component
     * @param {?} keepData
     * @param {string} statements
     * @return {undefined}
     */
    updateComponent : function(transaction, component, keepData, statements) {
      apply(this._currentElement.props);
      this._updateDOMProperties(component.props, transaction);
      this._updateDOMChildren(component.props, transaction, statements);
    },
    /**
     * @param {Object} info
     * @param {string} value
     * @return {undefined}
     */
    _updateDOMProperties : function(info, value) {
      var nameToAliasesMap = this._currentElement.props;
      var name;
      var styleName;
      var styleUpdates;
      for (name in info) {
        if (nameToAliasesMap.hasOwnProperty(name) || !info.hasOwnProperty(name)) {
          continue;
        }
        if (name === out) {
          var lastStyle = this._previousStyleCopy;
          for (styleName in lastStyle) {
            if (lastStyle.hasOwnProperty(styleName)) {
              styleUpdates = styleUpdates || {};
              /** @type {string} */
              styleUpdates[styleName] = "";
            }
          }
        } else {
          if (e.hasOwnProperty(name)) {
            index(this._rootNodeID, name);
          } else {
            if (elem.isStandardName[name] || elem.isCustomAttribute(name)) {
              data_priv.deletePropertyByID(this._rootNodeID, name);
            }
          }
        }
      }
      for (name in nameToAliasesMap) {
        var nextProp = nameToAliasesMap[name];
        var lastProp = name === out ? this._previousStyleCopy : info[name];
        if (!nameToAliasesMap.hasOwnProperty(name) || nextProp === lastProp) {
          continue;
        }
        if (name === out) {
          if (nextProp) {
            nextProp = this._previousStyleCopy = extend({}, nextProp);
          }
          if (lastProp) {
            for (styleName in lastProp) {
              if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                styleUpdates = styleUpdates || {};
                /** @type {string} */
                styleUpdates[styleName] = "";
              }
            }
            for (styleName in nextProp) {
              if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = nextProp[styleName];
              }
            }
          } else {
            styleUpdates = nextProp;
          }
        } else {
          if (e.hasOwnProperty(name)) {
            set(this._rootNodeID, name, nextProp, value);
          } else {
            if (elem.isStandardName[name] || elem.isCustomAttribute(name)) {
              data_priv.updatePropertyByID(this._rootNodeID, name, nextProp);
            }
          }
        }
      }
      if (styleUpdates) {
        data_priv.updateStylesByID(this._rootNodeID, styleUpdates);
      }
    },
    /**
     * @param {Object} lastProps
     * @param {string} t
     * @param {string} transaction
     * @return {undefined}
     */
    _updateDOMChildren : function(lastProps, t, transaction) {
      var nextProps = this._currentElement.props;
      var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
      var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
      var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
      var pdataOld = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
      var ra = lastContent != null ? null : lastProps.children;
      var tmpSet = nextContent != null ? null : nextProps.children;
      /** @type {boolean} */
      var _tryInitOnFocus = lastContent != null || lastHtml != null;
      /** @type {boolean} */
      var _isFocused = nextContent != null || pdataOld != null;
      if (ra != null && tmpSet == null) {
        this.updateChildren(null, t, transaction);
      } else {
        if (_tryInitOnFocus && !_isFocused) {
          this.updateTextContent("");
        }
      }
      if (nextContent != null) {
        if (lastContent !== nextContent) {
          this.updateTextContent("" + nextContent);
        }
      } else {
        if (pdataOld != null) {
          if (lastHtml !== pdataOld) {
            data_priv.updateInnerHTMLByID(this._rootNodeID, pdataOld);
          }
        } else {
          if (tmpSet != null) {
            this.updateChildren(tmpSet, t, transaction);
          }
        }
      }
    },
    /**
     * @return {undefined}
     */
    unmountComponent : function() {
      this.unmountChildren();
      collection.deleteAllListeners(this._rootNodeID);
      dataAndEvents.unmountIDFromEnvironment(this._rootNodeID);
      /** @type {null} */
      this._rootNodeID = null;
    }
  };
  $injector.measureMethods(Type, "ReactDOMComponent", {
    mountComponent : "mountComponent",
    updateComponent : "updateComponent"
  });
  extend(Type.prototype, Type.Mixin, NumberTextBox.Mixin);
  Type.injection = {
    /**
     * @param {?} obj
     * @return {undefined}
     */
    injectIDOperations : function(obj) {
      Type.BackendIDOperations = data_priv = obj;
    }
  };
  /** @type {function (string): undefined} */
  module.exports = Type;
}, null);
__d("ReactDOMTextComponent", ["DOMPropertyOperations", "ReactComponentBrowserEnvironment", "ReactDOMComponent", "Object.assign", "escapeTextContentForBrowser"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, contextElem, dataAndEvents, deepDataAndEvents, defineProperty, require) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  var constructor = function(attribute) {
  };
  defineProperty(constructor.prototype, {
    /**
     * @param {string} label
     * @return {undefined}
     */
    construct : function(label) {
      /** @type {string} */
      this._currentElement = label;
      /** @type {string} */
      this._stringText = "" + label;
      /** @type {null} */
      this._rootNodeID = null;
      /** @type {number} */
      this._mountIndex = 0;
    },
    /**
     * @param {string} name
     * @param {string} transaction
     * @param {string} callback
     * @return {?}
     */
    mountComponent : function(name, transaction, callback) {
      /** @type {string} */
      this._rootNodeID = name;
      var Block = require(this._stringText);
      if (transaction.renderToStaticMarkup) {
        return Block;
      }
      return "<span " + contextElem.createMarkupForID(name) + ">" + Block + "</span>";
    },
    /**
     * @param {?} cond
     * @param {?} transaction
     * @return {undefined}
     */
    receiveComponent : function(cond, transaction) {
      if (cond !== this._currentElement) {
        this._currentElement = cond;
        /** @type {string} */
        var failuresLink = "" + cond;
        if (failuresLink !== this._stringText) {
          /** @type {string} */
          this._stringText = failuresLink;
          deepDataAndEvents.BackendIDOperations.updateTextContentByID(this._rootNodeID, failuresLink);
        }
      }
    },
    /**
     * @return {undefined}
     */
    unmountComponent : function() {
      dataAndEvents.unmountIDFromEnvironment(this._rootNodeID);
    }
  });
  /** @type {function (string): undefined} */
  module.exports = constructor;
}, null);
__d("ReactBrowserComponentMixin", ["findDOMNode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $sanitize) {
  var JsDiff = {
    /**
     * @return {?}
     */
    getDOMNode : function() {
      return $sanitize(this);
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactDefaultBatchingStrategy", ["ReactUpdates", "Transaction", "Object.assign", "emptyFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $rootScope, NumberTextBox, createObject, params) {
  /**
   * @return {undefined}
   */
  function parent() {
    this.reinitializeTransaction();
  }
  var methods = {
    /** @type {Function} */
    initialize : params,
    /**
     * @return {undefined}
     */
    close : function() {
      /** @type {boolean} */
      input.isBatchingUpdates = false;
    }
  };
  var offsetLeft = {
    /** @type {Function} */
    initialize : params,
    close : $rootScope.flushBatchedUpdates.bind($rootScope)
  };
  /** @type {Array} */
  var start = [offsetLeft, methods];
  createObject(parent.prototype, NumberTextBox.Mixin, {
    /**
     * @return {?}
     */
    getTransactionWrappers : function() {
      return start;
    }
  });
  var self = new parent;
  var input = {
    isBatchingUpdates : false,
    /**
     * @param {Function} func
     * @param {?} callback
     * @param {?} data
     * @param {Node} id
     * @param {?} done
     * @return {undefined}
     */
    batchedUpdates : function(func, callback, data, id, done) {
      /** @type {boolean} */
      var il = input.isBatchingUpdates;
      /** @type {boolean} */
      input.isBatchingUpdates = true;
      if (il) {
        func(callback, data, id, done);
      } else {
        self.perform(func, null, callback, data, id, done);
      }
    }
  };
  module.exports = input;
}, null);
__d("AutoFocusMixin", ["focusNode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $sanitize) {
  var JsDiff = {
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      if (this.props.autoFocus) {
        $sanitize(this.getDOMNode());
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactDOMButton", ["AutoFocusMixin", "ReactBrowserComponentMixin", "ReactClass", "ReactElement", "keyMirror"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, dataAndEvents, deepDataAndEvents, BasicView, domConstruct, require) {
  var template = domConstruct.createFactory("button");
  var Block = require({
    onClick : true,
    onDoubleClick : true,
    onMouseDown : true,
    onMouseMove : true,
    onMouseUp : true,
    onClickCapture : true,
    onDoubleClickCapture : true,
    onMouseDownCapture : true,
    onMouseMoveCapture : true,
    onMouseUpCapture : true
  });
  var JsDiff = BasicView.createClass({
    displayName : "ReactDOMButton",
    tagName : "BUTTON",
    mixins : [dataAndEvents, deepDataAndEvents],
    /**
     * @return {?}
     */
    render : function() {
      var props = {};
      var thisKey;
      for (thisKey in this.props) {
        if (this.props.hasOwnProperty(thisKey) && (!this.props.disabled || !Block[thisKey])) {
          props[thisKey] = this.props[thisKey];
        }
      }
      return template(props, this.props.children);
    }
  });
  module.exports = JsDiff;
}, null);
__d("LocalEventTrapMixin", ["ReactBrowserEventEmitter", "accumulateInto", "forEachAccumulated", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, jQuery, next, reduce, fire) {
  /**
   * @param {Node} elem
   * @return {undefined}
   */
  function empty(elem) {
    elem.remove();
  }
  var JsDiff = {
    /**
     * @param {?} element
     * @param {string} type
     * @return {undefined}
     */
    trapBubbledEvent : function(element, type) {
      fire(this.isMounted());
      var args = this.getDOMNode();
      fire(args);
      var result = jQuery.trapBubbledEvent(element, type, args);
      this._localEventListeners = next(this._localEventListeners, result);
    },
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      if (this._localEventListeners) {
        reduce(this._localEventListeners, empty);
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactDOMForm", ["EventConstants", "LocalEventTrapMixin", "ReactBrowserComponentMixin", "ReactClass", "ReactElement"], function(textAlt, keepData, opt_attributes, matcherFunction, module, execResult, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, BasicView, contextElem) {
  var body = contextElem.createFactory("form");
  var JsDiff = BasicView.createClass({
    displayName : "ReactDOMForm",
    tagName : "FORM",
    mixins : [ignoreMethodDoesntExist, deepDataAndEvents],
    /**
     * @return {?}
     */
    render : function() {
      return body(this.props);
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this.trapBubbledEvent(dataAndEvents.topLevelTypes.topReset, "reset");
      this.trapBubbledEvent(dataAndEvents.topLevelTypes.topSubmit, "submit");
    }
  });
  module.exports = JsDiff;
}, null);
__d("ReactDOMImg", ["EventConstants", "LocalEventTrapMixin", "ReactBrowserComponentMixin", "ReactClass", "ReactElement"], function(textAlt, keepData, opt_attributes, matcherFunction, module, execResult, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, BasicView, row) {
  var el = row.createFactory("img");
  var JsDiff = BasicView.createClass({
    displayName : "ReactDOMImg",
    tagName : "IMG",
    mixins : [ignoreMethodDoesntExist, deepDataAndEvents],
    /**
     * @return {?}
     */
    render : function() {
      return el(this.props);
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this.trapBubbledEvent(dataAndEvents.topLevelTypes.topLoad, "load");
      this.trapBubbledEvent(dataAndEvents.topLevelTypes.topError, "error");
    }
  });
  module.exports = JsDiff;
}, null);
__d("ReactDOMIframe", ["EventConstants", "LocalEventTrapMixin", "ReactBrowserComponentMixin", "ReactClass", "ReactElement"], function(textAlt, keepData, opt_attributes, matcherFunction, module, execResult, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, BasicView, qq) {
  var el = qq.createFactory("iframe");
  var JsDiff = BasicView.createClass({
    displayName : "ReactDOMIframe",
    tagName : "IFRAME",
    mixins : [ignoreMethodDoesntExist, deepDataAndEvents],
    /**
     * @return {?}
     */
    render : function() {
      return el(this.props);
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      this.trapBubbledEvent(dataAndEvents.topLevelTypes.topLoad, "load");
    }
  });
  module.exports = JsDiff;
}, null);
__d("ReactPropTypes", ["ReactElement", "ReactPropTypeLocationNames", "emptyFunction"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, child, opt_attributes, results, args, dataAndEvents) {
  /**
   * @param {Function} name
   * @return {?}
   */
  function onErrorFnPrev(name) {
    /**
     * @param {?} execResult
     * @param {Array} opts
     * @param {number} type
     * @param {(Function|string)} chars
     * @param {number} parent
     * @return {?}
     */
    function parse(execResult, opts, type, chars, parent) {
      chars = chars || whitespace;
      if (opts[type] == null) {
        var pageY = args[parent];
        if (execResult) {
          return new Error("Required " + pageY + " `" + type + "` was not specified in " + ("`" + chars + "`."));
        }
        return null;
      } else {
        return name(opts, type, chars, parent);
      }
    }
    var path = parse.bind(null, false);
    path.isRequired = parse.bind(null, true);
    return path;
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function typeParser(type) {
    /**
     * @param {Array} response
     * @param {number} status
     * @param {string} textStatus
     * @param {number} message
     * @return {?}
     */
    function error(response, status, textStatus, message) {
      var a = response[status];
      var url = parse(a);
      if (url !== type) {
        var callback = args[message];
        var ap = hoozit(a);
        return new Error("Invalid " + callback + " `" + status + "` of type `" + ap + "` " + ("supplied to `" + textStatus + "`, expected `" + type + "`."));
      }
      return null;
    }
    return onErrorFnPrev(error);
  }
  /**
   * @return {?}
   */
  function wrapReRule() {
    return onErrorFnPrev(dataAndEvents.thatReturns(null));
  }
  /**
   * @param {?} callback
   * @return {?}
   */
  function post(callback) {
    /**
     * @param {Array} result
     * @param {number} status
     * @param {string} collection
     * @param {number} filename
     * @return {?}
     */
    function error(result, status, collection, filename) {
      var message = result[status];
      if (!Array.isArray(message)) {
        var file = args[filename];
        var url = parse(message);
        return new Error("Invalid " + file + " `" + status + "` of type " + ("`" + url + "` supplied to `" + collection + "`, expected an array."));
      }
      /** @type {number} */
      var index = 0;
      for (;index < message.length;index++) {
        var current = callback(message, index, collection, filename);
        if (current instanceof Error) {
          return current;
        }
      }
      return null;
    }
    return onErrorFnPrev(error);
  }
  /**
   * @return {?}
   */
  function compile() {
    /**
     * @param {Array} collection
     * @param {number} index
     * @param {string} textStatus
     * @param {number} status
     * @return {?}
     */
    function error(collection, index, textStatus, status) {
      if (!results.isValidElement(collection[index])) {
        var msg = args[status];
        return new Error("Invalid " + msg + " `" + index + "` supplied to " + ("`" + textStatus + "`, expected a ReactElement."));
      }
      return null;
    }
    return onErrorFnPrev(error);
  }
  /**
   * @param {Function} details
   * @return {?}
   */
  function report(details) {
    /**
     * @param {Array} result
     * @param {number} status
     * @param {string} textStatus
     * @param {number} request
     * @return {?}
     */
    function error(result, status, textStatus, request) {
      if (!(result[status] instanceof details)) {
        var pageY = args[request];
        var mName = details.name || whitespace;
        return new Error("Invalid " + pageY + " `" + status + "` supplied to " + ("`" + textStatus + "`, expected instance of `" + mName + "`."));
      }
      return null;
    }
    return onErrorFnPrev(error);
  }
  /**
   * @param {Array} a
   * @return {?}
   */
  function reject(a) {
    /**
     * @param {Array} $cookies
     * @param {number} key
     * @param {string} textStatus
     * @param {number} status
     * @return {?}
     */
    function error($cookies, key, textStatus, status) {
      var value = $cookies[key];
      /** @type {number} */
      var i = 0;
      for (;i < a.length;i++) {
        if (value === a[i]) {
          return null;
        }
      }
      var msg = args[status];
      /** @type {string} */
      var ap = JSON.stringify(a);
      return new Error("Invalid " + msg + " `" + key + "` of value `" + value + "` " + ("supplied to `" + textStatus + "`, expected one of " + ap + "."));
    }
    return onErrorFnPrev(error);
  }
  /**
   * @param {?} fn
   * @return {?}
   */
  function each(fn) {
    /**
     * @param {Array} stack
     * @param {number} offset
     * @param {string} arg
     * @param {number} status
     * @return {?}
     */
    function parse(stack, offset, arg, status) {
      var item = stack[offset];
      var obj = parse(item);
      if (obj !== "object") {
        var msg = args[status];
        return new Error("Invalid " + msg + " `" + offset + "` of type " + ("`" + obj + "` supplied to `" + arg + "`, expected an object."));
      }
      var i;
      for (i in item) {
        if (item.hasOwnProperty(i)) {
          var res = fn(item, i, arg, status);
          if (res instanceof Error) {
            return res;
          }
        }
      }
      return null;
    }
    return onErrorFnPrev(parse);
  }
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  function _open(codeSegments) {
    /**
     * @param {?} jqXHR
     * @param {string} xhr
     * @param {string} errorThrown
     * @param {number} status
     * @return {?}
     */
    function error(jqXHR, xhr, errorThrown, status) {
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var error = codeSegments[i];
        if (error(jqXHR, xhr, errorThrown, status) == null) {
          return null;
        }
      }
      var msg = args[status];
      return new Error("Invalid " + msg + " `" + xhr + "` supplied to " + ("`" + errorThrown + "`."));
    }
    return onErrorFnPrev(error);
  }
  /**
   * @return {?}
   */
  function request() {
    /**
     * @param {Array} object
     * @param {number} prop
     * @param {string} textStatus
     * @param {number} status
     * @return {?}
     */
    function error(object, prop, textStatus, status) {
      if (!match(object[prop])) {
        var msg = args[status];
        return new Error("Invalid " + msg + " `" + prop + "` supplied to " + ("`" + textStatus + "`, expected a ReactNode."));
      }
      return null;
    }
    return onErrorFnPrev(error);
  }
  /**
   * @param {Object} u
   * @return {?}
   */
  function s(u) {
    /**
     * @param {Array} json
     * @param {number} d
     * @param {string} message
     * @param {number} body
     * @return {?}
     */
    function parseJSON(json, d, message, body) {
      var val = json[d];
      var obj = parse(val);
      if (obj !== "object") {
        var pageY = args[body];
        return new Error("Invalid " + pageY + " `" + d + "` of type `" + obj + "` " + ("supplied to `" + message + "`, expected `object`."));
      }
      var i;
      for (i in u) {
        var callback = u[i];
        if (!callback) {
          continue;
        }
        var str = callback(val, i, message, body);
        if (str) {
          return str;
        }
      }
      return null;
    }
    return onErrorFnPrev(parseJSON);
  }
  /**
   * @param {Object} value
   * @return {?}
   */
  function match(value) {
    switch(typeof value) {
      case "number":
      ;
      case "string":
        return true;
      case "boolean":
        return!value;
      case "object":
        if (Array.isArray(value)) {
          return value.every(match);
        }
        if (results.isValidElement(value)) {
          return true;
        }
        var key;
        for (key in value) {
          if (!match(value[key])) {
            return false;
          }
        }
        return true;
      default:
        return false;
    }
  }
  /**
   * @param {?} val
   * @return {?}
   */
  function parse(val) {
    /** @type {string} */
    var type = typeof val;
    if (Array.isArray(val)) {
      return "array";
    }
    if (val instanceof RegExp) {
      return "object";
    }
    return type;
  }
  /**
   * @param {?} val
   * @return {?}
   */
  function hoozit(val) {
    var s = parse(val);
    if (s === "object") {
      if (val instanceof Date) {
        return "date";
      } else {
        if (val instanceof RegExp) {
          return "regexp";
        }
      }
    }
    return s;
  }
  /** @type {string} */
  var whitespace = "<<anonymous>>";
  var element = compile();
  var x = request();
  var json = {
    array : typeParser("array"),
    bool : typeParser("boolean"),
    func : typeParser("function"),
    number : typeParser("number"),
    object : typeParser("object"),
    string : typeParser("string"),
    any : wrapReRule(),
    /** @type {function (?): ?} */
    arrayOf : post,
    element : element,
    /** @type {function (Function): ?} */
    instanceOf : report,
    node : x,
    /** @type {function (?): ?} */
    objectOf : each,
    /** @type {function (Array): ?} */
    oneOf : reject,
    /** @type {function (Array): ?} */
    oneOfType : _open,
    /** @type {function (Object): ?} */
    shape : s
  };
  child.exports = json;
}, null);
__d("LinkedValueUtils", ["ReactPropTypes", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, opts, concat) {
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function get(obj) {
    concat(obj.props.checkedLink == null || obj.props.valueLink == null);
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function getter(obj) {
    get(obj);
    concat(obj.props.value == null && obj.props.onChange == null);
  }
  /**
   * @param {?} self
   * @return {undefined}
   */
  function check(self) {
    get(self);
    concat(self.props.checked == null && self.props.onChange == null);
  }
  /**
   * @param {Event} css
   * @return {undefined}
   */
  function Tween(css) {
    this.props.valueLink.requestChange(css.target.value);
  }
  /**
   * @param {Event} el
   * @return {undefined}
   */
  function Constructor(el) {
    this.props.checkedLink.requestChange(el.target.checked);
  }
  var noInputTypes = {
    button : true,
    checkbox : true,
    image : true,
    hidden : true,
    radio : true,
    reset : true,
    submit : true
  };
  var JsDiff = {
    Mixin : {
      propTypes : {
        /**
         * @param {Object} element
         * @param {string} value
         * @param {?} namespace
         * @return {?}
         */
        value : function(element, value, namespace) {
          if (!element[value] || (noInputTypes[element.type] || (element.onChange || (element.readOnly || element.disabled)))) {
            return null;
          }
          return new Error("You provided a `value` prop to a form field without an " + "`onChange` handler. This will render a read-only field. If " + "the field should be mutable use `defaultValue`. Otherwise, " + "set either `onChange` or `readOnly`.");
        },
        /**
         * @param {Object} d
         * @param {string} name
         * @param {?} condition
         * @return {?}
         */
        checked : function(d, name, condition) {
          if (!d[name] || (d.onChange || (d.readOnly || d.disabled))) {
            return null;
          }
          return new Error("You provided a `checked` prop to a form field without an " + "`onChange` handler. This will render a read-only field. If " + "the field should be mutable use `defaultChecked`. Otherwise, " + "set either `onChange` or `readOnly`.");
        },
        onChange : opts.func
      }
    },
    /**
     * @param {?} list
     * @return {?}
     */
    getValue : function(list) {
      if (list.props.valueLink) {
        getter(list);
        return list.props.valueLink.value;
      }
      return list.props.value;
    },
    /**
     * @param {?} self
     * @return {?}
     */
    getChecked : function(self) {
      if (self.props.checkedLink) {
        check(self);
        return self.props.checkedLink.value;
      }
      return self.props.checked;
    },
    /**
     * @param {?} self
     * @return {?}
     */
    getOnChange : function(self) {
      if (self.props.valueLink) {
        getter(self);
        return Tween;
      } else {
        if (self.props.checkedLink) {
          check(self);
          return Constructor;
        }
      }
      return self.props.onChange;
    }
  };
  module.exports = JsDiff;
}, null);
__d("ReactDOMInput", ["AutoFocusMixin", "DOMPropertyOperations", "LinkedValueUtils", "ReactBrowserComponentMixin", "ReactClass", "ReactElement", "ReactMount", "ReactUpdates", "Object.assign", "invariant"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, dataAndEvents, dom, field, deepDataAndEvents, BasicView, filter, node, $, require, func) {
  /**
   * @return {undefined}
   */
  function merge() {
    if (this.isMounted()) {
      this.forceUpdate();
    }
  }
  var template = filter.createFactory("input");
  var prevSources = {};
  var JsDiff = BasicView.createClass({
    displayName : "ReactDOMInput",
    tagName : "INPUT",
    mixins : [dataAndEvents, field.Mixin, deepDataAndEvents],
    /**
     * @return {?}
     */
    getInitialState : function() {
      var defaultValue = this.props.defaultValue;
      return{
        initialChecked : this.props.defaultChecked || false,
        initialValue : defaultValue != null ? defaultValue : null
      };
    },
    /**
     * @return {?}
     */
    render : function() {
      var props = require({}, this.props);
      /** @type {null} */
      props.defaultChecked = null;
      /** @type {null} */
      props.defaultValue = null;
      var value = field.getValue(this);
      props.value = value != null ? value : this.state.initialValue;
      var propValue = field.getChecked(this);
      props.checked = propValue != null ? propValue : this.state.initialChecked;
      props.onChange = this._handleChange;
      return template(props, this.props.children);
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      var i = node.getID(this.getDOMNode());
      prevSources[i] = this;
    },
    /**
     * @return {undefined}
     */
    componentWillUnmount : function() {
      var child = this.getDOMNode();
      var i = node.getID(child);
      delete prevSources[i];
    },
    /**
     * @param {Function} key
     * @param {string} status
     * @param {?} endpoint
     * @return {undefined}
     */
    componentDidUpdate : function(key, status, endpoint) {
      var rootNode = this.getDOMNode();
      if (this.props.checked != null) {
        dom.setValueForProperty(rootNode, "checked", this.props.checked || false);
      }
      var backgroundColor = field.getValue(this);
      if (backgroundColor != null) {
        dom.setValueForProperty(rootNode, "value", "" + backgroundColor);
      }
    },
    /**
     * @param {?} event
     * @return {?}
     */
    _handleChange : function(event) {
      var returnValue;
      var eventTrigger = field.getOnChange(this);
      if (eventTrigger) {
        returnValue = eventTrigger.call(this, event);
      }
      $.asap(merge, this);
      var name = this.props.name;
      if (this.props.type === "radio" && name != null) {
        var rootNode = this.getDOMNode();
        var tapElement = rootNode;
        for (;tapElement.parentNode;) {
          tapElement = tapElement.parentNode;
        }
        var classNames = tapElement.querySelectorAll("input[name=" + JSON.stringify("" + name) + '][type="radio"]');
        /** @type {number} */
        var x = 0;
        var cnl = classNames.length;
        for (;x < cnl;x++) {
          var otherNode = classNames[x];
          if (otherNode === rootNode || otherNode.form !== rootNode.form) {
            continue;
          }
          var i = node.getID(otherNode);
          func(i);
          var child = prevSources[i];
          func(child);
          $.asap(merge, child);
        }
      }
      return returnValue;
    }
  });
  module.exports = JsDiff;
}, null);
__d("ReactDOMOption", ["ReactBrowserComponentMixin", "ReactClass", "ReactElement", "warning"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, BasicView, optionsString, matcherFunction) {
  var el = optionsString.createFactory("option");
  var JsDiff = BasicView.createClass({
    displayName : "ReactDOMOption",
    tagName : "OPTION",
    mixins : [dataAndEvents],
    /**
     * @return {undefined}
     */
    componentWillMount : function() {
    },
    /**
     * @return {?}
     */
    render : function() {
      return el(this.props, this.props.children);
    }
  });
  module.exports = JsDiff;
}, null);
__d("ReactDOMSelect", ["AutoFocusMixin", "LinkedValueUtils", "ReactBrowserComponentMixin", "ReactClass", "ReactElement", "ReactUpdates", "Object.assign"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, dataAndEvents, res, deepDataAndEvents, BasicView, obj, model, require) {
  /**
   * @return {undefined}
   */
  function merge() {
    if (this._pendingUpdate) {
      /** @type {boolean} */
      this._pendingUpdate = false;
      var doc = res.getValue(this);
      if (doc != null && this.isMounted()) {
        init(this, doc);
      }
    }
  }
  /**
   * @param {string} node
   * @param {string} value
   * @param {?} str
   * @return {?}
   */
  function isEmpty(node, value, str) {
    if (node[value] == null) {
      return null;
    }
    if (node.multiple) {
      if (!Array.isArray(node[value])) {
        return new Error("The `" + value + "` prop supplied to <select> must be an array if " + "`multiple` is true.");
      }
    } else {
      if (Array.isArray(node[value])) {
        return new Error("The `" + value + "` prop supplied to <select> must be a scalar " + "value if `multiple` is false.");
      }
    }
  }
  /**
   * @param {Object} self
   * @param {string} state
   * @return {undefined}
   */
  function init(self, state) {
    var a;
    var idx;
    var len;
    var options = self.getDOMNode().options;
    if (self.props.multiple) {
      a = {};
      /** @type {number} */
      idx = 0;
      len = state.length;
      for (;idx < len;idx++) {
        /** @type {boolean} */
        a["" + state[idx]] = true;
      }
      /** @type {number} */
      idx = 0;
      len = options.length;
      for (;idx < len;idx++) {
        /** @type {boolean} */
        var checked = a.hasOwnProperty(options[idx].value);
        if (options[idx].selected !== checked) {
          /** @type {boolean} */
          options[idx].selected = checked;
        }
      }
    } else {
      /** @type {string} */
      a = "" + state;
      /** @type {number} */
      idx = 0;
      len = options.length;
      for (;idx < len;idx++) {
        if (options[idx].value === a) {
          /** @type {boolean} */
          options[idx].selected = true;
          return;
        }
      }
      /** @type {boolean} */
      options[0].selected = true;
    }
  }
  var template = obj.createFactory("select");
  var JsDiff = BasicView.createClass({
    displayName : "ReactDOMSelect",
    tagName : "SELECT",
    mixins : [dataAndEvents, res.Mixin, deepDataAndEvents],
    propTypes : {
      /** @type {function (string, string, ?): ?} */
      defaultValue : isEmpty,
      /** @type {function (string, string, ?): ?} */
      value : isEmpty
    },
    /**
     * @return {?}
     */
    render : function() {
      var props = require({}, this.props);
      props.onChange = this._handleChange;
      /** @type {null} */
      props.value = null;
      return template(props, this.props.children);
    },
    /**
     * @return {undefined}
     */
    componentWillMount : function() {
      /** @type {boolean} */
      this._pendingUpdate = false;
    },
    /**
     * @return {undefined}
     */
    componentDidMount : function() {
      var doc = res.getValue(this);
      if (doc != null) {
        init(this, doc);
      } else {
        if (this.props.defaultValue != null) {
          init(this, this.props.defaultValue);
        }
      }
    },
    /**
     * @param {Object} props
     * @return {undefined}
     */
    componentDidUpdate : function(props) {
      var doc = res.getValue(this);
      if (doc != null) {
        /** @type {boolean} */
        this._pendingUpdate = false;
        init(this, doc);
      } else {
        if (!props.multiple !== !this.props.multiple) {
          if (this.props.defaultValue != null) {
            init(this, this.props.defaultValue);
          } else {
            init(this, this.props.multiple ? [] : "");
          }
        }
      }
    },
    /**
     * @param {?} event
     * @return {?}
     */
    _handleChange : function(event) {
      var returnValue;
      var eventTrigger = res.getOnChange(this);
      if (eventTrigger) {
        returnValue = eventTrigger.call(this, event);
      }
      /** @type {boolean} */
      this._pendingUpdate = true;
      model.asap(merge, this);
      return returnValue;
    }
  });
  module.exports = JsDiff;
}, null);
__d("ReactDOMTextarea", ["AutoFocusMixin", "DOMPropertyOperations", "LinkedValueUtils", "ReactBrowserComponentMixin", "ReactClass", "ReactElement", "ReactUpdates", "Object.assign", "invariant", "warning"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, dataAndEvents, node, res, deepDataAndEvents, BasicView, domConstruct, model, require, stringify, execResult) {
  /**
   * @return {undefined}
   */
  function merge() {
    if (this.isMounted()) {
      this.forceUpdate();
    }
  }
  var template = domConstruct.createFactory("textarea");
  var JsDiff = BasicView.createClass({
    displayName : "ReactDOMTextarea",
    tagName : "TEXTAREA",
    mixins : [dataAndEvents, res.Mixin, deepDataAndEvents],
    /**
     * @return {?}
     */
    getInitialState : function() {
      var defaultValue = this.props.defaultValue;
      var children = this.props.children;
      if (children != null) {
        stringify(defaultValue == null);
        if (Array.isArray(children)) {
          stringify(children.length <= 1);
          children = children[0];
        }
        /** @type {string} */
        defaultValue = "" + children;
      }
      if (defaultValue == null) {
        /** @type {string} */
        defaultValue = "";
      }
      var value = res.getValue(this);
      return{
        initialValue : "" + (value != null ? value : defaultValue)
      };
    },
    /**
     * @return {?}
     */
    render : function() {
      var props = require({}, this.props);
      stringify(props.dangerouslySetInnerHTML == null);
      /** @type {null} */
      props.defaultValue = null;
      /** @type {null} */
      props.value = null;
      props.onChange = this._handleChange;
      return template(props, this.state.initialValue);
    },
    /**
     * @param {Function} key
     * @param {string} status
     * @param {?} endpoint
     * @return {undefined}
     */
    componentDidUpdate : function(key, status, endpoint) {
      var id = res.getValue(this);
      if (id != null) {
        var rootNode = this.getDOMNode();
        node.setValueForProperty(rootNode, "value", "" + id);
      }
    },
    /**
     * @param {?} event
     * @return {?}
     */
    _handleChange : function(event) {
      var returnValue;
      var eventTrigger = res.getOnChange(this);
      if (eventTrigger) {
        returnValue = eventTrigger.call(this, event);
      }
      model.asap(merge, this);
      return returnValue;
    }
  });
  module.exports = JsDiff;
}, null);
__d("ReactEventListener", ["EventListener", "ExecutionEnvironment", "PooledClass", "ReactInstanceHandles", "ReactMount", "ReactUpdates", "Object.assign", "getEventTarget", "getUnboundedScrollPosition"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, event, dataAndEvents, entity, contextElem, node, jQuery, createObject, parseInt, $) {
  /**
   * @param {?} child
   * @return {?}
   */
  function toString(child) {
    var name = node.getID(child);
    var id = contextElem.getReactRootIDFromNodeID(name);
    var container = node.findReactContainerForID(id);
    var where = node.getFirstReactDOM(container);
    return where;
  }
  /**
   * @param {?} doAnimate
   * @param {Object} id
   * @return {undefined}
   */
  function renderer(doAnimate, id) {
    this.topLevelType = doAnimate;
    /** @type {Object} */
    this.nativeEvent = id;
    /** @type {Array} */
    this.ancestors = [];
  }
  /**
   * @param {?} value
   * @return {undefined}
   */
  function func(value) {
    var a = node.getFirstReactDOM(parseInt(value.nativeEvent)) || window;
    var str = a;
    for (;str;) {
      value.ancestors.push(str);
      str = toString(str);
    }
    /** @type {number} */
    var i = 0;
    var valuesLen = value.ancestors.length;
    for (;i < valuesLen;i++) {
      a = value.ancestors[i];
      var last = node.getID(a) || "";
      obj._handleTopLevel(value.topLevelType, a, last, value.nativeEvent);
    }
  }
  /**
   * @param {?} callback
   * @return {undefined}
   */
  function app(callback) {
    var events = $(window);
    callback(events);
  }
  createObject(renderer.prototype, {
    /**
     * @return {undefined}
     */
    destructor : function() {
      /** @type {null} */
      this.topLevelType = null;
      /** @type {null} */
      this.nativeEvent = null;
      /** @type {number} */
      this.ancestors.length = 0;
    }
  });
  entity.addPoolingTo(renderer, entity.twoArgumentPooler);
  var obj = {
    _enabled : true,
    _handleTopLevel : null,
    WINDOW_HANDLE : dataAndEvents.canUseDOM ? window : null,
    /**
     * @param {?} id
     * @return {undefined}
     */
    setHandleTopLevel : function(id) {
      obj._handleTopLevel = id;
    },
    /**
     * @param {boolean} enabled
     * @return {undefined}
     */
    setEnabled : function(enabled) {
      /** @type {boolean} */
      obj._enabled = !!enabled;
    },
    /**
     * @return {?}
     */
    isEnabled : function() {
      return obj._enabled;
    },
    /**
     * @param {?} element
     * @param {string} type
     * @param {?} proto
     * @return {?}
     */
    trapBubbledEvent : function(element, type, proto) {
      var target = proto;
      if (!target) {
        return null;
      }
      return event.listen(target, type, obj.dispatchEvent.bind(null, element));
    },
    /**
     * @param {?} deepDataAndEvents
     * @param {string} handlerBaseName
     * @param {?} arg
     * @return {?}
     */
    trapCapturedEvent : function(deepDataAndEvents, handlerBaseName, arg) {
      var settingOpener = arg;
      if (!settingOpener) {
        return null;
      }
      return event.capture(settingOpener, handlerBaseName, obj.dispatchEvent.bind(null, deepDataAndEvents));
    },
    /**
     * @param {?} done
     * @return {undefined}
     */
    monitorScrollValue : function(done) {
      var callback = app.bind(null, done);
      event.listen(window, "scroll", callback);
    },
    /**
     * @param {?} eventType
     * @param {?} data
     * @return {undefined}
     */
    dispatchEvent : function(eventType, data) {
      if (!obj._enabled) {
        return;
      }
      var restoreScript = renderer.getPooled(eventType, data);
      try {
        jQuery.batchedUpdates(func, restoreScript);
      } finally {
        renderer.release(restoreScript);
      }
    }
  };
  module.exports = obj;
}, null);
__d("ReactInjection", ["DOMProperty", "EventPluginHub", "ReactComponentEnvironment", "ReactClass", "ReactEmptyComponent", "ReactBrowserEventEmitter", "ReactNativeComponent", "ReactDOMComponent", "ReactPerf", "ReactRootIndex", "ReactUpdates"], function(positionError, oFunctionBody, _$timeout_, failing_message, module, nextStack, dataAndEvents, container, deepDataAndEvents, Type, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, opt_keys) {
  var EventEmitter = {
    Component : deepDataAndEvents.injection,
    Class : Type.injection,
    DOMComponent : opt_attributes.injection,
    DOMProperty : dataAndEvents.injection,
    EmptyComponent : ignoreMethodDoesntExist.injection,
    EventPluginHub : container.injection,
    EventEmitter : textAlt.injection,
    NativeComponent : keepData.injection,
    Perf : matcherFunction.injection,
    RootIndex : execResult.injection,
    Updates : opt_keys.injection
  };
  module.exports = EventEmitter;
}, null);
__d("SVGDOMPropertyConfig", ["DOMProperty"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents) {
  var pos = dataAndEvents.injection.MUST_USE_ATTRIBUTE;
  var JsDiff = {
    Properties : {
      cx : pos,
      cy : pos,
      d : pos,
      dx : pos,
      dy : pos,
      fill : pos,
      fillOpacity : pos,
      fontFamily : pos,
      fontSize : pos,
      fx : pos,
      fy : pos,
      gradientTransform : pos,
      gradientUnits : pos,
      markerEnd : pos,
      markerMid : pos,
      markerStart : pos,
      offset : pos,
      opacity : pos,
      patternContentUnits : pos,
      patternUnits : pos,
      points : pos,
      preserveAspectRatio : pos,
      r : pos,
      rx : pos,
      ry : pos,
      spreadMethod : pos,
      stopColor : pos,
      stopOpacity : pos,
      stroke : pos,
      strokeDasharray : pos,
      strokeLinecap : pos,
      strokeOpacity : pos,
      strokeWidth : pos,
      textAnchor : pos,
      transform : pos,
      version : pos,
      viewBox : pos,
      x1 : pos,
      x2 : pos,
      x : pos,
      y1 : pos,
      y2 : pos,
      y : pos
    },
    DOMAttributeNames : {
      fillOpacity : "fill-opacity",
      fontFamily : "font-family",
      fontSize : "font-size",
      gradientTransform : "gradientTransform",
      gradientUnits : "gradientUnits",
      markerEnd : "marker-end",
      markerMid : "marker-mid",
      markerStart : "marker-start",
      patternContentUnits : "patternContentUnits",
      patternUnits : "patternUnits",
      preserveAspectRatio : "preserveAspectRatio",
      spreadMethod : "spreadMethod",
      stopColor : "stop-color",
      stopOpacity : "stop-opacity",
      strokeDasharray : "stroke-dasharray",
      strokeLinecap : "stroke-linecap",
      strokeOpacity : "stroke-opacity",
      strokeWidth : "stroke-width",
      textAnchor : "text-anchor",
      viewBox : "viewBox"
    }
  };
  module.exports = JsDiff;
}, null);
__d("createFullPageComponent", ["ReactClass", "ReactElement", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, CommonView, el, $sanitize) {
  /**
   * @param {string} attribute
   * @return {?}
   */
  function init(attribute) {
    var templateFunc = el.createFactory(attribute);
    var enabled = CommonView.createClass({
      displayName : "ReactFullPageComponent" + attribute,
      /**
       * @return {undefined}
       */
      componentWillUnmount : function() {
        $sanitize(false);
      },
      /**
       * @return {?}
       */
      render : function() {
        return templateFunc(this.props);
      }
    });
    return enabled;
  }
  /** @type {function (string): ?} */
  module.exports = init;
}, null);
__d("ReactDefaultPerfAnalysis", ["Object.assign"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, render) {
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  function getLength(codeSegments) {
    /** @type {number} */
    var totalTime = 0;
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var stat = codeSegments[i];
      totalTime += stat.totalTime;
    }
    return totalTime;
  }
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  function resolveFile(codeSegments) {
    /** @type {Array} */
    var worker = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var self = codeSegments[i];
      var index;
      for (index in self.writes) {
        self.writes[index].forEach(function(msg) {
          worker.push({
            id : index,
            type : type[msg.type] || msg.type,
            args : msg.args
          });
        });
      }
    }
    return worker;
  }
  /**
   * @param {Array} context
   * @return {?}
   */
  function loop(context) {
    var data = {};
    var i;
    /** @type {number} */
    var c = 0;
    for (;c < context.length;c++) {
      var options = context[c];
      var actual = render({}, options.exclusive, options.inclusive);
      var p;
      for (p in actual) {
        i = options.displayNames[p].current;
        data[i] = data[i] || {
          componentName : i,
          inclusive : 0,
          exclusive : 0,
          render : 0,
          count : 0
        };
        if (options.render[p]) {
          data[i].render += options.render[p];
        }
        if (options.exclusive[p]) {
          data[i].exclusive += options.exclusive[p];
        }
        if (options.inclusive[p]) {
          data[i].inclusive += options.inclusive[p];
        }
        if (options.counts[p]) {
          data[i].count += options.counts[p];
        }
      }
    }
    /** @type {Array} */
    var result = [];
    for (i in data) {
      if (data[i].exclusive >= time) {
        result.push(data[i]);
      }
    }
    result.sort(function(options, event) {
      return event.exclusive - options.exclusive;
    });
    return result;
  }
  /**
   * @param {Array} deepDataAndEvents
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  function tick(deepDataAndEvents, dataAndEvents) {
    var events = {};
    var key;
    /** @type {number} */
    var conditionIndex = 0;
    for (;conditionIndex < deepDataAndEvents.length;conditionIndex++) {
      var options = deepDataAndEvents[conditionIndex];
      var mak = render({}, options.exclusive, options.inclusive);
      var js;
      if (dataAndEvents) {
        js = errorHandler(options);
      }
      var i;
      for (i in mak) {
        if (dataAndEvents && !js[i]) {
          continue;
        }
        var b = options.displayNames[i];
        /** @type {string} */
        key = b.owner + " > " + b.current;
        events[key] = events[key] || {
          componentName : key,
          time : 0,
          count : 0
        };
        if (options.inclusive[i]) {
          events[key].time += options.inclusive[i];
        }
        if (options.counts[i]) {
          events[key].count += options.counts[i];
        }
      }
    }
    /** @type {Array} */
    var result = [];
    for (key in events) {
      if (events[key].time >= time) {
        result.push(events[key]);
      }
    }
    result.sort(function(b, a) {
      return a.time - b.time;
    });
    return result;
  }
  /**
   * @param {Object} options
   * @return {?}
   */
  function errorHandler(options) {
    var escapes = {};
    /** @type {Array.<string>} */
    var codeSegments = Object.keys(options.writes);
    var context = render({}, options.exclusive, options.inclusive);
    var match;
    for (match in context) {
      /** @type {boolean} */
      var u = false;
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        if (codeSegments[i].indexOf(match) === 0) {
          /** @type {boolean} */
          u = true;
          break;
        }
      }
      if (!u && options.counts[match] > 0) {
        /** @type {boolean} */
        escapes[match] = true;
      }
    }
    return escapes;
  }
  /** @type {number} */
  var time = 1.2;
  var type = {
    _mountImageIntoNode : "set innerHTML",
    INSERT_MARKUP : "set innerHTML",
    MOVE_EXISTING : "move",
    REMOVE_NODE : "remove",
    TEXT_CONTENT : "set textContent",
    updatePropertyByID : "update attribute",
    deletePropertyByID : "delete attribute",
    updateStylesByID : "update styles",
    updateInnerHTMLByID : "set innerHTML",
    dangerouslyReplaceNodeWithMarkupByID : "replace"
  };
  var JsDiff = {
    /** @type {function (Array): ?} */
    getExclusiveSummary : loop,
    /** @type {function (Array, boolean): ?} */
    getInclusiveSummary : tick,
    /** @type {function (Array): ?} */
    getDOMSummary : resolveFile,
    /** @type {function (Array): ?} */
    getTotalTime : getLength
  };
  module.exports = JsDiff;
}, null);
__d("ReactDefaultPerf", ["DOMProperty", "ReactDefaultPerfAnalysis", "ReactMount", "ReactPerf", "performanceNow"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, obj, jQuery, a, container, $sanitize) {
  /**
   * @param {number} value
   * @return {?}
   */
  function toDate(value) {
    return Math.floor(value * 100) / 100;
  }
  /**
   * @param {?} bench
   * @param {?} key
   * @param {number} dataAndEvents
   * @return {undefined}
   */
  function callback(bench, key, dataAndEvents) {
    bench[key] = (bench[key] || 0) + dataAndEvents;
  }
  var element = {
    _allMeasurements : [],
    _mountStack : [0],
    _injected : false,
    /**
     * @return {undefined}
     */
    start : function() {
      if (!element._injected) {
        container.injection.injectMeasure(element.measure);
      }
      /** @type {number} */
      element._allMeasurements.length = 0;
      /** @type {boolean} */
      container.enableMeasure = true;
    },
    /**
     * @return {undefined}
     */
    stop : function() {
      /** @type {boolean} */
      container.enableMeasure = false;
    },
    /**
     * @return {?}
     */
    getLastMeasurements : function() {
      return element._allMeasurements;
    },
    /**
     * @param {Array} context
     * @return {undefined}
     */
    printExclusive : function(context) {
      context = context || element._allMeasurements;
      var key = jQuery.getExclusiveSummary(context);
      console.table(key.map(function(data) {
        return{
          "Component class name" : data.componentName,
          "Total inclusive time (ms)" : toDate(data.inclusive),
          "Exclusive mount time (ms)" : toDate(data.exclusive),
          "Exclusive render time (ms)" : toDate(data.render),
          "Mount time per instance (ms)" : toDate(data.exclusive / data.count),
          "Render time per instance (ms)" : toDate(data.render / data.count),
          Instances : data.count
        };
      }));
    },
    /**
     * @param {Array} deepDataAndEvents
     * @return {undefined}
     */
    printInclusive : function(deepDataAndEvents) {
      deepDataAndEvents = deepDataAndEvents || element._allMeasurements;
      var mod = jQuery.getInclusiveSummary(deepDataAndEvents);
      console.table(mod.map(function(data) {
        return{
          "Owner > component" : data.componentName,
          "Inclusive time (ms)" : toDate(data.time),
          Instances : data.count
        };
      }));
    },
    /**
     * @param {Array} deepDataAndEvents
     * @return {?}
     */
    getMeasurementsSummaryMap : function(deepDataAndEvents) {
      var mod = jQuery.getInclusiveSummary(deepDataAndEvents, true);
      return mod.map(function(data) {
        return{
          "Owner > component" : data.componentName,
          "Wasted time (ms)" : data.time,
          Instances : data.count
        };
      });
    },
    /**
     * @param {Array} deepDataAndEvents
     * @return {undefined}
     */
    printWasted : function(deepDataAndEvents) {
      deepDataAndEvents = deepDataAndEvents || element._allMeasurements;
      console.table(element.getMeasurementsSummaryMap(deepDataAndEvents));
    },
    /**
     * @param {Array} tag
     * @return {undefined}
     */
    printDOM : function(tag) {
      tag = tag || element._allMeasurements;
      var elements = jQuery.getDOMSummary(tag);
      console.table(elements.map(function(o) {
        var self = {};
        self[obj.ID_ATTRIBUTE_NAME] = o.id;
        self.type = o.type;
        /** @type {string} */
        self.args = JSON.stringify(o.args);
        return self;
      }));
    },
    /**
     * @param {?} dir
     * @param {string} keepData
     * @param {number} dataAndEvents
     * @param {Array} args
     * @return {undefined}
     */
    _recordWrite : function(dir, keepData, dataAndEvents, args) {
      var cur = element._allMeasurements[element._allMeasurements.length - 1].writes;
      cur[dir] = cur[dir] || [];
      cur[dir].push({
        type : keepData,
        time : dataAndEvents,
        args : args
      });
    },
    /**
     * @param {string} desc
     * @param {string} type
     * @param {Function} fn
     * @return {?}
     */
    measure : function(desc, type, fn) {
      return function() {
        /** @type {Array} */
        var args = [];
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var argLength = arguments.length;
        for (;i < argLength;i++) {
          args.push(arguments[i]);
        }
        var dataAndEvents;
        var ret;
        var value;
        if (type === "_renderNewRootComponent" || type === "flushBatchedUpdates") {
          element._allMeasurements.push({
            exclusive : {},
            inclusive : {},
            render : {},
            counts : {},
            writes : {},
            displayNames : {},
            totalTime : 0
          });
          value = $sanitize();
          ret = fn.apply(this, args);
          /** @type {number} */
          element._allMeasurements[element._allMeasurements.length - 1].totalTime = $sanitize() - value;
          return ret;
        } else {
          if (desc === "ReactDOMIDOperations" || desc === "ReactComponentBrowserEnvironment") {
            value = $sanitize();
            ret = fn.apply(this, args);
            /** @type {number} */
            dataAndEvents = $sanitize() - value;
            if (type === "_mountImageIntoNode") {
              var parentNode = a.getID(args[1]);
              element._recordWrite(parentNode, type, dataAndEvents, args[0]);
            } else {
              if (type === "dangerouslyProcessChildrenUpdates") {
                args[0].forEach(function(update) {
                  var options = {};
                  if (update.fromIndex !== null) {
                    options.fromIndex = update.fromIndex;
                  }
                  if (update.toIndex !== null) {
                    options.toIndex = update.toIndex;
                  }
                  if (update.textContent !== null) {
                    options.textContent = update.textContent;
                  }
                  if (update.markupIndex !== null) {
                    options.markup = args[1][update.markupIndex];
                  }
                  element._recordWrite(update.parentID, update.type, dataAndEvents, options);
                });
              } else {
                element._recordWrite(args[0], type, dataAndEvents, Array.prototype.slice.call(args, 1));
              }
            }
            return ret;
          } else {
            if (desc === "ReactCompositeComponent" && (type === "mountComponent" || (type === "updateComponent" || type === "_renderValidatedComponent"))) {
              var r = type === "mountComponent" ? args[0] : this._rootNodeID;
              /** @type {boolean} */
              var isCSS = type === "_renderValidatedComponent";
              /** @type {boolean} */
              var stream = type === "mountComponent";
              /** @type {Array} */
              var eventPath = element._mountStack;
              var options = element._allMeasurements[element._allMeasurements.length - 1];
              if (isCSS) {
                callback(options.counts, r, 1);
              } else {
                if (stream) {
                  eventPath.push(0);
                }
              }
              value = $sanitize();
              ret = fn.apply(this, args);
              /** @type {number} */
              dataAndEvents = $sanitize() - value;
              if (isCSS) {
                callback(options.render, r, dataAndEvents);
              } else {
                if (stream) {
                  var d = eventPath.pop();
                  eventPath[eventPath.length - 1] += dataAndEvents;
                  callback(options.exclusive, r, dataAndEvents - d);
                  callback(options.inclusive, r, dataAndEvents);
                } else {
                  callback(options.inclusive, r, dataAndEvents);
                }
              }
              /** @type {null} */
              var types = null;
              if (this._instance.constructor.displayName) {
                types = this._instance.constructor.displayName;
              } else {
                if (this._currentElement.type) {
                  types = this._currentElement.type;
                }
              }
              options.displayNames[r] = {
                current : types,
                owner : this._currentElement._owner ? this._currentElement._owner._instance.constructor.displayName : "<root>"
              };
              return ret;
            } else {
              return fn.apply(this, args);
            }
          }
        }
      };
    }
  };
  module.exports = element;
}, null);
__d("ReactDefaultInjection", ["BeforeInputEventPlugin", "ChangeEventPlugin", "ClientReactRootIndex", "DefaultEventPluginOrder", "EnterLeaveEventPlugin", "ExecutionEnvironment", "HTMLDOMPropertyConfig", "MobileSafariClickEventPlugin", "ReactBrowserComponentMixin", "ReactClass", "ReactComponentBrowserEnvironment", "ReactDefaultBatchingStrategy", "ReactDOMComponent", "ReactDOMButton", "ReactDOMForm", "ReactDOMImg", "ReactDOMIDOperations", "ReactDOMIframe", "ReactDOMInput", "ReactDOMOption", "ReactDOMSelect",
"ReactDOMTextarea", "ReactDOMTextComponent", "ReactElement", "ReactEventListener", "ReactInjection", "ReactInstanceHandles", "ReactMount", "ReactReconcileTransaction", "SelectEventPlugin", "ServerReactRootIndex", "SimpleEventPlugin", "SVGDOMPropertyConfig", "createFullPageComponent", "ReactDefaultPerf"], function(textAlt, oFunctionBody, _$timeout_, failing_message, module, nextStack, keepData, opt_attributes, deepDataAndEvents, next_scope, matcherFunction, dataAndEvents, opt_obj2, execResult, dataName,
SomaView, triggerRoute, $match, opt_e, buttonName, form, img, walkers, iframe, $input, i, $wrap, TextAreaField, node, Benchmark, isXML, exports, shallow, funcToCall, variables, opt_keys, ignoreMethodDoesntExist, positionError, _super, $) {
  /**
   * @param {string} name
   * @return {?}
   */
  function initialize(name) {
    return SomaView.createClass({
      tagName : name.toUpperCase(),
      /**
       * @return {?}
       */
      render : function() {
        return new Benchmark(name, null, null, null, null, this.props);
      }
    });
  }
  /**
   * @return {undefined}
   */
  function inject() {
    exports.EventEmitter.injectReactEventListener(isXML);
    exports.EventPluginHub.injectEventPluginOrder(next_scope);
    exports.EventPluginHub.injectInstanceHandle(shallow);
    exports.EventPluginHub.injectMount(funcToCall);
    exports.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin : positionError,
      EnterLeaveEventPlugin : matcherFunction,
      ChangeEventPlugin : opt_attributes,
      MobileSafariClickEventPlugin : execResult,
      SelectEventPlugin : opt_keys,
      BeforeInputEventPlugin : keepData
    });
    exports.NativeComponent.injectGenericComponentClass(opt_e);
    exports.NativeComponent.injectTextComponentClass(node);
    exports.NativeComponent.injectAutoWrapper(initialize);
    exports.Class.injectMixin(dataName);
    exports.NativeComponent.injectComponentClasses({
      button : buttonName,
      form : form,
      iframe : iframe,
      img : img,
      input : $input,
      option : i,
      select : $wrap,
      textarea : TextAreaField,
      html : $("html"),
      head : $("head"),
      body : $("body")
    });
    exports.DOMProperty.injectDOMPropertyConfig(opt_obj2);
    exports.DOMProperty.injectDOMPropertyConfig(_super);
    exports.EmptyComponent.injectEmptyComponent("noscript");
    exports.Updates.injectReconcileTransaction(variables);
    exports.Updates.injectBatchingStrategy($match);
    exports.RootIndex.injectCreateReactRootIndex(dataAndEvents.canUseDOM ? deepDataAndEvents.createReactRootIndex : ignoreMethodDoesntExist.createReactRootIndex);
    exports.Component.injectEnvironment(triggerRoute);
    exports.DOMComponent.injectIDOperations(walkers);
  }
  module.exports = {
    /** @type {function (): undefined} */
    inject : inject
  };
}, null);
__d("onlyChild", ["ReactElement", "invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, el, handler) {
  /**
   * @param {string} attribute
   * @return {?}
   */
  function attr(attribute) {
    handler(el.isValidElement(attribute));
    return attribute;
  }
  /** @type {function (string): ?} */
  module.exports = attr;
}, null);
__d("React", ["EventPluginUtils", "ReactChildren", "ReactComponent", "ReactClass", "ReactContext", "ReactCurrentOwner", "ReactElement", "ReactElementValidator", "ReactDOM", "ReactDOMTextComponent", "ReactDefaultInjection", "ReactInstanceHandles", "ReactMount", "ReactPerf", "ReactPropTypes", "ReactReconciler", "ReactServerRendering", "Object.assign", "findDOMNode", "onlyChild", "ExecutionEnvironment"], function(positionError, oFunctionBody, _$timeout_, failing_message, module, nextStack, deepDataAndEvents,
self, Component, React, user, ignoreMethodDoesntExist, context, noCorrect, DOM, textAlt, css, keepData, sass, $templateCache, opt_attributes, matcherFunction, dataAndEvents, execResult, opt_keys, only) {
  css.inject();
  var createElement = context.createElement;
  var j = context.createFactory;
  var container = $templateCache.measure("React", "render", sass.render);
  var config = {
    Children : {
      map : self.map,
      forEach : self.forEach,
      count : self.count,
      only : only
    },
    Component : Component,
    DOM : DOM,
    PropTypes : opt_attributes,
    /**
     * @param {?} shouldUseTouch
     * @return {undefined}
     */
    initializeTouchEvents : function(shouldUseTouch) {
      deepDataAndEvents.useTouchEvents = shouldUseTouch;
    },
    createClass : React.createClass,
    createElement : createElement,
    createFactory : j,
    /**
     * @param {?} mixinResolves
     * @return {?}
     */
    createMixin : function(mixinResolves) {
      return mixinResolves;
    },
    constructAndRenderComponent : sass.constructAndRenderComponent,
    constructAndRenderComponentByID : sass.constructAndRenderComponentByID,
    findDOMNode : opt_keys,
    render : container,
    renderToString : dataAndEvents.renderToString,
    renderToStaticMarkup : dataAndEvents.renderToStaticMarkup,
    unmountComponentAtNode : sass.unmountComponentAtNode,
    isValidElement : context.isValidElement,
    withContext : user.withContext,
    __spread : execResult
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === "function") {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
      CurrentOwner : ignoreMethodDoesntExist,
      InstanceHandles : keepData,
      Mount : sass,
      Reconciler : matcherFunction,
      TextComponent : textAlt
    });
  }
  /** @type {string} */
  config.version = "0.13.0-beta.1";
  module.exports = config;
}, null);
__d("joinClasses", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, f, keepData) {
  /**
   * @param {string} element
   * @return {?}
   */
  function value(element) {
    if (!element) {
      /** @type {string} */
      element = "";
    }
    var cur;
    /** @type {number} */
    var argLength = arguments.length;
    if (argLength > 1) {
      /** @type {number} */
      var i = 1;
      for (;i < argLength;i++) {
        cur = arguments[i];
        if (cur) {
          /** @type {string} */
          element = (element ? element + " " : "") + cur;
        }
      }
    }
    return element;
  }
  /** @type {function (string): ?} */
  f.exports = value;
}, null);
__d("TokenizeUtil", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function escapeRegexp() {
    return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;" + "\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f" + "\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d" + "\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e" + "\u00a1-\u00b1\u00b4-\u00b8\u00ba\u00bb\u00bf]";
  }
  /**
   * @param {string} result
   * @return {?}
   */
  function scrubWhiteSpace(result) {
    return result ? result.replace(regexp, " ") : "";
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function normalize(s) {
    s = s.toLowerCase();
    /** @type {string} */
    var ret = "";
    /** @type {string} */
    var val = "";
    var j = s.length;
    for (;j--;) {
      val = s.charAt(j);
      ret = (obj[val] || val) + ret;
    }
    return ret.replace(rreturn, " ");
  }
  /**
   * @param {?} text
   * @return {?}
   */
  function tokenize(text) {
    /** @type {Array} */
    var _results1 = [];
    /** @type {(Array.<string>|null)} */
    var c = patternNormal.exec(text);
    for (;c;) {
      /** @type {string} */
      c = c[0];
      _results1.push(c);
      /** @type {(Array.<string>|null)} */
      c = patternNormal.exec(text);
    }
    return _results1;
  }
  /**
   * @param {string} name
   * @param {boolean} callback
   * @return {?}
   */
  function parse(name, callback) {
    if (!partials.hasOwnProperty(name)) {
      var expectationResult = normalize(name);
      var lineText = scrubWhiteSpace(expectationResult);
      partials[name] = {
        value : name,
        flatValue : expectationResult,
        tokens : tokenize(lineText),
        isPrefixQuery : lineText && lineText[lineText.length - 1] != " "
      };
    }
    if (callback && typeof partials[name].sortedTokens == "undefined") {
      partials[name].sortedTokens = partials[name].tokens.slice();
      partials[name].sortedTokens.sort(function(check, value) {
        return value.length - check.length;
      });
    }
    return partials[name];
  }
  /**
   * @param {string} total
   * @param {string} resource
   * @param {string} content
   * @return {?}
   */
  function done(total, resource, content) {
    var res = parse(resource, total == "prefix");
    var options = total == "prefix" ? res.sortedTokens : res.tokens;
    var codeSegments = parse(content).tokens;
    var prevSources = {};
    /** @type {(null|number)} */
    var bup = res.isPrefixQuery && total == "query" ? options.length - 1 : null;
    /**
     * @param {?} v
     * @param {number} a
     * @return {?}
     */
    var e = function(v, a) {
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;++i) {
        var nv = codeSegments[i];
        if (!prevSources[i] && (nv == v || (total == "query" && a === bup || total == "prefix") && nv.indexOf(v) === 0)) {
          return prevSources[i] = true;
        }
      }
      return false;
    };
    return Boolean(options.length && options.every(e));
  }
  /** @type {RegExp} */
  var rreturn = /[ ]+/g;
  /** @type {RegExp} */
  var patternNormal = /[^ ]+/g;
  /** @type {RegExp} */
  var regexp = new RegExp(escapeRegexp(), "g");
  var obj = {};
  var cssKeys = {
    a : "\u0430 \u00e0 \u00e1 \u00e2 \u00e3 \u00e4 \u00e5 \u0101",
    b : "\u0431",
    c : "\u0446 \u00e7 \u010d",
    d : "\u0434 \u00f0 \u010f \u0111",
    e : "\u044d \u0435 \u00e8 \u00e9 \u00ea \u00eb \u011b \u0113",
    f : "\u0444",
    g : "\u0433 \u011f \u0123",
    h : "\u0445 \u0127",
    i : "\u0438 \u00ec \u00ed \u00ee \u00ef \u0131 \u012b",
    j : "\u0439",
    k : "\u043a \u0138 \u0137",
    l : "\u043b \u013e \u013a \u0140 \u0142 \u013c",
    m : "\u043c",
    n : "\u043d \u00f1 \u0148 \u0149 \u014b \u0146",
    o : "\u043e \u00f8 \u00f6 \u00f5 \u00f4 \u00f3 \u00f2",
    p : "\u043f",
    r : "\u0440 \u0159 \u0155",
    s : "\u0441 \u015f \u0161 \u017f",
    t : "\u0442 \u0165 \u0167 \u00fe",
    u : "\u0443 \u044e \u00fc \u00fb \u00fa \u00f9 \u016f \u016b",
    v : "\u0432",
    y : "\u044b \u00ff \u00fd",
    z : "\u0437 \u017e",
    ae : "\u00e6",
    oe : "\u0153",
    ts : "\u0446",
    ch : "\u0447",
    ij : "\u0133",
    sh : "\u0448",
    ss : "\u00df",
    ya : "\u044f"
  };
  var i;
  for (i in cssKeys) {
    var items = cssKeys[i].split(" ");
    /** @type {number} */
    var index = 0;
    for (;index < items.length;index++) {
      /** @type {string} */
      obj[items[index]] = i;
    }
  }
  var partials = {};
  var YAML = {
    /** @type {function (string): ?} */
    flatten : normalize,
    /** @type {function (string, boolean): ?} */
    parse : parse,
    /** @type {function (): ?} */
    getPunctuation : escapeRegexp,
    isExactMatch : done.bind(null, "exact"),
    isQueryMatch : done.bind(null, "query"),
    isPrefixMatch : done.bind(null, "prefix"),
    /** @type {function (?): ?} */
    tokenize : tokenize
  };
  module.exports = YAML;
}, null);
__d("UnicodeCJK", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} name
   * @return {?}
   */
  function lookup(name) {
    rparentsprev = rparentsprev || new RegExp("[" + s + "]");
    return rparentsprev.test(name);
  }
  /**
   * @param {?} selectors
   * @return {?}
   */
  function match(selectors) {
    rneedsContext = rneedsContext || new RegExp("[" + key + "]");
    return rneedsContext.test(selectors);
  }
  /**
   * @param {?} text
   * @return {?}
   */
  function contains(text) {
    cx = cx || new RegExp("[" + tval + "]");
    return cx.test(text);
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function params(value) {
    var c = value.charCodeAt(0);
    return String.fromCharCode(c < b[0] || c > b[1] ? c : c + cs);
  }
  /**
   * @param {string} attr
   * @return {?}
   */
  function get(attr) {
    if (!lookup(attr)) {
      return attr;
    }
    return attr.split("").map(params).join("");
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function has(name) {
    exclude = exclude || new RegExp("^" + "[" + s + "]+" + "[" + l + "]" + "$");
    return exclude.test(name);
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function extend(obj) {
    if (has(obj)) {
      return obj.substr(0, obj.length - 1);
    }
    return obj;
  }
  /** @type {string} */
  var line = "a-zA-Z";
  /** @type {string} */
  var dir = "\uff21-\uff3a\uff41-\uff5a";
  /** @type {string} */
  var l = line + dir;
  /** @type {string} */
  var arg = "\u3040-\u309f";
  /** @type {string} */
  var h = "\u30a0-\u30ff";
  /** @type {string} */
  var _ = "\u31f0-\u31ff";
  /** @type {string} */
  var m = "\uff65-\uff9f";
  /** @type {string} */
  var offset = h + _ + m;
  /** @type {string} */
  var s = arg + offset;
  /** @type {Array} */
  var b = [12352, 12447];
  /** @type {Array} */
  var a = [12448, 12543];
  /** @type {number} */
  var cs = a[0] - b[0];
  /** @type {string} */
  var type = "\u4e00-\u9fcf";
  /** @type {string} */
  var queueHooks = "\u3400-\u4dbf";
  /** @type {string} */
  var key = type + queueHooks;
  /** @type {string} */
  var value = "\uac00-\ud7af";
  /** @type {string} */
  var tval = key + s + value;
  /** @type {null} */
  var rneedsContext = null;
  /** @type {null} */
  var rparentsprev = null;
  /** @type {null} */
  var cx = null;
  /** @type {null} */
  var exclude = null;
  var JsDiff = {
    /** @type {function (string): ?} */
    hasKana : lookup,
    /** @type {function (?): ?} */
    hasIdeograph : match,
    /** @type {function (?): ?} */
    hasIdeoOrSyll : contains,
    /** @type {function (string): ?} */
    hiraganaToKatakana : get,
    /** @type {function (string): ?} */
    isKanaWithTrailingLatin : has,
    /** @type {function (string): ?} */
    kanaRemoveTrailingLatin : extend
  };
  module.exports = JsDiff;
}, null);
__d("UnicodeHangulKorean", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} value
   * @return {?}
   */
  function isArray(value) {
    return rchecked.test(value);
  }
  /**
   * @param {number} index
   * @return {?}
   */
  function charAt(index) {
    return String.fromCharCode(args[index - init]);
  }
  /**
   * @param {number} n
   * @return {?}
   */
  function read(n) {
    /** @type {number} */
    var a = n - s;
    /** @type {number} */
    var l = a % b4;
    return String.fromCharCode(y + a / b) + String.fromCharCode(zeroCode + a % b / b4) + (l > 0 ? String.fromCharCode(ch + l) : "");
  }
  /**
   * @param {string} attr
   * @return {?}
   */
  function get(attr) {
    if (!isArray(attr)) {
      return attr;
    }
    /** @type {Array} */
    var tagNameArr = [];
    /** @type {number} */
    var i = 0;
    for (;i < attr.length;i++) {
      var ch = attr.charAt(i);
      var idx = ch.charCodeAt(0);
      tagNameArr.push(init <= idx && idx < l ? charAt(idx) : s <= idx && idx < e ? read(idx) : ch);
    }
    return tagNameArr.join("");
  }
  /** @type {RegExp} */
  var rchecked = /[\u3130-\u318F\uAC00-\uD7AF]/;
  /** @type {Array} */
  var args = [4352, 4353, 4522, 4354, 4524, 4525, 4355, 4356, 4357, 4528, 4529, 4530, 4531, 4532, 4533, 4378, 4358, 4359, 4360, 4385, 4361, 4362, 4363, 4364, 4365, 4366, 4367, 4368, 4369, 4370, 4449, 4450, 4451, 4452, 4453, 4454, 4455, 4456, 4457, 4458, 4459, 4460, 4461, 4462, 4463, 4464, 4465, 4466, 4467, 4468, 4469, 4448, 4372, 4373, 4551, 4552, 4556, 4558, 4563, 4567, 4569, 4380, 4573, 4575, 4381, 4382, 4384, 4386, 4387, 4391, 4393, 4395, 4396, 4397, 4398, 4399, 4402, 4406, 4416, 4423, 4428, 4593,
  4594, 4439, 4440, 4441, 4484, 4485, 4488, 4497, 4498, 4500, 4510, 4513];
  /** @type {number} */
  var init = 12593;
  /** @type {number} */
  var instances = args.length;
  /** @type {number} */
  var l = init + instances;
  /** @type {number} */
  var y = 4352;
  /** @type {number} */
  var zeroCode = 4449;
  /** @type {number} */
  var ch = 4519;
  /** @type {number} */
  var s = 44032;
  /** @type {number} */
  var i = 19;
  /** @type {number} */
  var a1 = 21;
  /** @type {number} */
  var b4 = 28;
  /** @type {number} */
  var b = a1 * b4;
  /** @type {number} */
  var n = i * b;
  /** @type {number} */
  var e = s + n;
  var JsDiff = {
    /** @type {function (string): ?} */
    toConjoiningJamo : get
  };
  module.exports = JsDiff;
}, null);
__d("UnicodeMatch", ["UnicodeHangulKorean", "UnicodeCJK", "invariant", "createObjectFrom", "mapObject"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, _, forEach, require, cb) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function constructor(attribute) {
    this.config = require(file, false);
    this.setConfigs(attribute || {});
  }
  /** @type {Array} */
  var file = ["prefix_hangul_conjoining_jamo", "prefix_kana_drop_trailing_latin", "prefix_kana_hiragana_to_katakana"];
  /**
   * @param {?} outErr
   * @return {undefined}
   */
  constructor.prototype.setConfigs = function(outErr) {
    cb(outErr, function(isXML, subKey) {
      return this.setConfig(subKey, isXML);
    }.bind(this), this);
  };
  /**
   * @param {?} key
   * @param {Object} value
   * @return {undefined}
   */
  constructor.prototype.setConfig = function(key, value) {
    forEach(key in this.config);
    /** @type {Object} */
    this.config[key] = value;
  };
  /**
   * @param {string} protoProps
   * @return {?}
   */
  constructor.prototype.prefixMatchPrepare = function(protoProps) {
    if (protoProps) {
      if (this.config.prefix_hangul_conjoining_jamo) {
        protoProps = dataAndEvents.toConjoiningJamo(protoProps);
      }
      if (this.config.prefix_kana_drop_trailing_latin) {
        protoProps = _.kanaRemoveTrailingLatin(protoProps);
      }
      if (this.config.prefix_kana_hiragana_to_katakana) {
        protoProps = _.hiraganaToKatakana(protoProps);
      }
    }
    return protoProps;
  };
  /**
   * @param {string} callback
   * @param {Text} path
   * @return {?}
   */
  constructor.prototype.prefixMatch = function(callback, path) {
    callback = this.prefixMatchPrepare(callback);
    path = this.prefixMatchPrepare(path);
    return callback.startsWith(path);
  };
  /** @type {function (string): undefined} */
  module.exports = constructor;
}, null);
__d("ARIA", ["DOM", "emptyFunction", "ge"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, self, Server, $) {
  /**
   * @param {?} data
   * @param {boolean} success
   * @return {undefined}
   */
  function callback(data, success) {
    init();
    var caption = success ? content : panel;
    self.setContent(caption, data);
  }
  var content;
  var panel;
  /**
   * @return {undefined}
   */
  var init = function() {
    content = $("ariaAssertiveAlert");
    if (!content) {
      content = self.create("div", {
        id : "ariaAssertiveAlert",
        className : "accessible_elem",
        "aria-live" : "assertive"
      });
      self.appendContent(document.body, content);
    }
    panel = $("ariaPoliteAlert");
    if (!panel) {
      panel = content.cloneNode(false);
      panel.setAttribute("id", "ariaPoliteAlert");
      panel.setAttribute("aria-live", "polite");
      self.appendContent(document.body, panel);
    }
    init = Server;
  };
  var obj = {
    /**
     * @param {Element} element
     * @param {?} value
     * @return {undefined}
     */
    owns : function(element, value) {
      element.setAttribute("aria-owns", self.getID(value));
    },
    /**
     * @param {Element} element
     * @param {?} child
     * @return {undefined}
     */
    setPopup : function(element, child) {
      var idx = self.getID(child);
      element.setAttribute("aria-owns", idx);
      element.setAttribute("aria-haspopup", "true");
      if (element.tabIndex == -1) {
        /** @type {number} */
        element.tabIndex = 0;
      }
    },
    /**
     * @param {?} data
     * @return {undefined}
     */
    announce : function(data) {
      callback(data, true);
    },
    /**
     * @param {?} message
     * @return {undefined}
     */
    notify : function(message) {
      callback(message);
    }
  };
  module.exports = obj;
}, null);
__d("BrowserSupport", ["BrowserSupportCore", "DOM", "ExecutionEnvironment", "UserAgent_DEPRECATED", "getVendorPrefixedName"], function(fileOrBlobData, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, dataAndEvents, modal, errors, browser, callback) {
  var $ = {};
  /** @type {(Element|null)} */
  var element = errors.canUseDOM ? document.createElement("div") : null;
  var JsDiff = {
    hasCSSAnimations : dataAndEvents.hasCSSAnimations,
    hasCSSTransforms : dataAndEvents.hasCSSTransforms,
    hasCSS3DTransforms : dataAndEvents.hasCSS3DTransforms,
    hasCSSTransitions : dataAndEvents.hasCSSTransitions,
    /**
     * @return {?}
     */
    hasPositionSticky : function() {
      if (!errors.canUseDOM) {
        return false;
      }
      if ($.sticky === void 0) {
        /** @type {string} */
        element.style.cssText = "position:-moz-sticky;position:-webkit-sticky;" + "position:-o-sticky;position:-ms-sticky;position:sticky;";
        /** @type {boolean} */
        $.sticky = /sticky/.test(element.style.position);
      }
      return $.sticky;
    },
    /**
     * @return {?}
     */
    hasPointerEvents : function() {
      if (!errors.canUseDOM) {
        return false;
      }
      if ($.pointerEvents === void 0) {
        if (!("pointerEvents" in element.style)) {
          /** @type {boolean} */
          $.pointerEvents = false;
        } else {
          /** @type {string} */
          element.style.pointerEvents = "auto";
          /** @type {string} */
          element.style.pointerEvents = "x";
          modal.appendContent(document.documentElement, element);
          /** @type {boolean} */
          $.pointerEvents = window.getComputedStyle && getComputedStyle(element, "").pointerEvents === "auto";
          modal.remove(element);
        }
      }
      return $.pointerEvents;
    },
    /**
     * @return {?}
     */
    hasFileAPI : function() {
      if ($.fileAPI === void 0) {
        /** @type {boolean} */
        $.fileAPI = !(browser.webkit() && (!browser.chrome() && browser.windows())) && ("FileList" in window && "FormData" in window);
      }
      return $.fileAPI;
    },
    /**
     * @return {?}
     */
    hasBlobFactory : function() {
      if ($.blobFactory === void 0) {
        /** @type {boolean} */
        $.blobFactory = !!fileOrBlobData.blob;
      }
      return $.blobFactory;
    },
    /**
     * @return {?}
     */
    getTransitionEndEvent : function() {
      if ($.transitionEnd === void 0) {
        var transitions = {
          transition : "transitionend",
          WebkitTransition : "webkitTransitionEnd",
          MozTransition : "mozTransitionEnd",
          OTransition : "oTransitionEnd"
        };
        var transition = callback("transition");
        $.transitionEnd = transitions[transition] || null;
      }
      return $.transitionEnd;
    },
    /**
     * @return {?}
     */
    hasClipboardEvents : function() {
      if (!errors.canUseDOM) {
        return false;
      }
      if ($.clipboardEvents === void 0) {
        /** @type {Element} */
        var el = document.createElement("textarea");
        /** @type {string} */
        var eventName = "oncut";
        /** @type {boolean} */
        var isSupported = eventName in el;
        if (!isSupported) {
          el.setAttribute(eventName, "return;");
          /** @type {boolean} */
          isSupported = typeof el[eventName] == "function";
        }
        /** @type {boolean} */
        $.clipboardEvents = isSupported;
      }
      return $.clipboardEvents;
    },
    /**
     * @return {?}
     */
    hasCanvasRenderingContext2D : function() {
      return!!window.CanvasRenderingContext2D;
    }
  };
  module.exports = JsDiff;
}, null);
__d("Animation", ["BrowserSupport", "CSS", "DataStore", "DOM", "Style", "getVendorPrefixedName", "setIntervalAcrossTransitions", "setTimeoutAcrossTransitions", "shield"], function(win, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, dataAndEvents, loading, matrix, item, fn, require, requestAnimationFrame, worker, raf) {
  /**
   * @param {string} element
   * @return {?}
   */
  function $(element) {
    if (win == this) {
      return new $(element);
    } else {
      /** @type {string} */
      this.obj = element;
      this._reset_state();
      /** @type {Array} */
      this.queue = [];
      /** @type {null} */
      this.last_attr = null;
    }
  }
  /**
   * @param {Object} other
   * @return {?}
   */
  function traverseNode(other) {
    if (dataAndEvents.hasCSS3DTransforms()) {
      return update(other);
    } else {
      return formatProperty(other);
    }
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function val(value) {
    return value.toFixed(8);
  }
  /**
   * @param {Array} array
   * @return {?}
   */
  function formatProperty(array) {
    /** @type {Array} */
    array = [array[0], array[4], array[1], array[5], array[12], array[13]];
    return "matrix(" + array.map(val).join(",") + ")";
  }
  /**
   * @param {Array} array
   * @return {?}
   */
  function update(array) {
    return "matrix3d(" + array.map(val).join(",") + ")";
  }
  /**
   * @param {Object} dataAndEvents
   * @param {Array} deepDataAndEvents
   * @return {?}
   */
  function clone(dataAndEvents, deepDataAndEvents) {
    if (!dataAndEvents) {
      /** @type {Array} */
      dataAndEvents = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }
    /** @type {Array} */
    var res = [];
    /** @type {number} */
    var h = 0;
    for (;h < 4;h++) {
      /** @type {number} */
      var axis = 0;
      for (;axis < 4;axis++) {
        /** @type {number} */
        var key = 0;
        /** @type {number} */
        var m = 0;
        for (;m < 4;m++) {
          key += dataAndEvents[h * 4 + m] * deepDataAndEvents[m * 4 + axis];
        }
        /** @type {number} */
        res[h * 4 + axis] = key;
      }
    }
    return res;
  }
  /**
   * @param {?} elem
   * @return {?}
   */
  function show(elem) {
    /** @type {number} */
    var current = parseInt(fn.get(elem, "paddingLeft"), 10);
    /** @type {number} */
    var code = parseInt(fn.get(elem, "paddingRight"), 10);
    /** @type {number} */
    var left = parseInt(fn.get(elem, "borderLeftWidth"), 10);
    /** @type {number} */
    var depth = parseInt(fn.get(elem, "borderRightWidth"), 10);
    return elem.offsetWidth - (current ? current : 0) - (code ? code : 0) - (left ? left : 0) - (depth ? depth : 0);
  }
  /**
   * @param {?} element
   * @return {?}
   */
  function f(element) {
    /** @type {number} */
    var current = parseInt(fn.get(element, "paddingTop"), 10);
    /** @type {number} */
    var code = parseInt(fn.get(element, "paddingBottom"), 10);
    /** @type {number} */
    var depth = parseInt(fn.get(element, "borderTopWidth"), 10);
    /** @type {number} */
    var left = parseInt(fn.get(element, "borderBottomWidth"), 10);
    return element.offsetHeight - (current ? current : 0) - (code ? code : 0) - (depth ? depth : 0) - (left ? left : 0);
  }
  /**
   * @param {number} f
   * @param {?} y
   * @param {?} h
   * @param {boolean} recurring
   * @return {?}
   */
  function set(f, y, h, recurring) {
    return(recurring ? parseInt : parseFloat)((h - y) * f + y, 10);
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function convert(value) {
    /** @type {(Array.<string>|null)} */
    var num = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(value);
    if (num) {
      return[parseInt(num[1].length == 1 ? num[1] + num[1] : num[1], 16), parseInt(num[2].length == 1 ? num[2] + num[2] : num[2], 16), parseInt(num[3].length == 1 ? num[3] + num[3] : num[3], 16), 1];
    } else {
      /** @type {(Array.<string>|null)} */
      var parts = /^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(value);
      if (parts) {
        return[parseInt(parts[1], 10), parseInt(parts[2], 10), parseInt(parts[3], 10), parts[4] ? parseFloat(parts[4]) : 1];
      } else {
        if (value == "transparent") {
          return[255, 255, 255, 0];
        } else {
          throw "Named color attributes are not supported.";
        }
      }
    }
  }
  /**
   * @param {?} init
   * @return {undefined}
   */
  function animate(init) {
    resultItems.push(init);
    if (resultItems.length === 1) {
      if (!requestAnimFrame) {
        var fn = win.requestAnimationFrame || (win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame);
        if (fn) {
          requestAnimFrame = fn.bind(win);
        }
      }
      if (requestAnimFrame) {
        requestAnimFrame(loop);
      } else {
        interval = requestAnimationFrame(loop, 20);
      }
    }
    if (requestAnimFrame) {
      start();
    }
    loop(Date.now(), true);
  }
  /**
   * @return {undefined}
   */
  function start() {
    if (!requestAnimFrame) {
      throw new Error("Ending timer only valid with requestAnimationFrame");
    }
    /** @type {number} */
    var a = 0;
    /** @type {number} */
    var i = 0;
    for (;i < resultItems.length;i++) {
      var result = resultItems[i];
      /** @type {number} */
      var index = 0;
      for (;index < result.queue.length;index++) {
        var _a = result.queue[index].start + result.queue[index].duration;
        if (_a > a) {
          a = _a;
        }
      }
    }
    if (interval) {
      clearTimeout(interval);
      /** @type {null} */
      interval = null;
    }
    /** @type {number} */
    var b = Date.now();
    if (a > b) {
      interval = worker(raf(loop), a - b);
    }
  }
  /**
   * @param {number} domEl
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  function loop(domEl, dataAndEvents) {
    /** @type {number} */
    var newDuration = Date.now();
    /** @type {number} */
    var i = dataAndEvents === true ? resultItems.length - 1 : 0;
    for (;i < resultItems.length;i++) {
      try {
        if (!resultItems[i]._frame(newDuration)) {
          resultItems.splice(i--, 1);
        }
      } catch (na) {
        resultItems.splice(i--, 1);
      }
    }
    if (resultItems.length === 0) {
      if (interval) {
        if (requestAnimFrame) {
          clearTimeout(interval);
        } else {
          clearInterval(interval);
        }
        /** @type {null} */
        interval = null;
      }
    } else {
      if (requestAnimFrame) {
        requestAnimFrame(loop);
      }
    }
  }
  var requestAnimFrame;
  /** @type {Array} */
  var resultItems = [];
  var interval;
  /** @type {number} */
  var n = 0;
  /**
   * @return {undefined}
   */
  $.prototype._reset_state = function() {
    this.state = {
      attrs : {},
      duration : 500
    };
  };
  /**
   * @return {?}
   */
  $.prototype.stop = function() {
    this._reset_state();
    /** @type {Array} */
    this.queue = [];
    return this;
  };
  /**
   * @return {undefined}
   */
  $.prototype._build_container = function() {
    if (this.container_div) {
      this._refresh_container();
      return;
    }
    if (this.obj.firstChild && this.obj.firstChild.__animation_refs) {
      this.container_div = this.obj.firstChild;
      this.container_div.__animation_refs++;
      this._refresh_container();
      return;
    }
    /** @type {Element} */
    var bubbleInner = document.createElement("div");
    /** @type {string} */
    bubbleInner.style.padding = "0px";
    /** @type {string} */
    bubbleInner.style.margin = "0px";
    /** @type {string} */
    bubbleInner.style.border = "0px";
    /** @type {number} */
    bubbleInner.__animation_refs = 1;
    var svgchildren = this.obj.childNodes;
    for (;svgchildren.length;) {
      bubbleInner.appendChild(svgchildren[0]);
    }
    this.obj.appendChild(bubbleInner);
    this._orig_overflow = this.obj.style.overflow;
    /** @type {string} */
    this.obj.style.overflow = "hidden";
    /** @type {Element} */
    this.container_div = bubbleInner;
    this._refresh_container();
  };
  /**
   * @return {undefined}
   */
  $.prototype._refresh_container = function() {
    /** @type {string} */
    this.container_div.style.height = "auto";
    /** @type {string} */
    this.container_div.style.width = "auto";
    /** @type {string} */
    this.container_div.style.height = this.container_div.offsetHeight + "px";
    /** @type {string} */
    this.container_div.style.width = this.container_div.offsetWidth + "px";
  };
  /**
   * @return {undefined}
   */
  $.prototype._destroy_container = function() {
    if (!this.container_div) {
      return;
    }
    if (!--this.container_div.__animation_refs) {
      var svgchildren = this.container_div.childNodes;
      for (;svgchildren.length;) {
        this.obj.appendChild(svgchildren[0]);
      }
      this.obj.removeChild(this.container_div);
    }
    /** @type {null} */
    this.container_div = null;
    this.obj.style.overflow = this._orig_overflow;
  };
  /** @type {number} */
  var failuresLink = 1;
  /** @type {number} */
  var passesLink = 2;
  /** @type {number} */
  var passes = 3;
  /**
   * @param {string} property
   * @param {(number|string)} value
   * @param {number} el
   * @return {?}
   */
  $.prototype._attr = function(property, value, el) {
    property = property.replace(/-[a-z]/gi, function(charsetPart) {
      return charsetPart.substring(1).toUpperCase();
    });
    /** @type {boolean} */
    var ma = false;
    switch(property) {
      case "background":
        this._attr("backgroundColor", value, el);
        return this;
      case "backgroundColor":
      ;
      case "borderColor":
      ;
      case "color":
        value = convert(value);
        break;
      case "opacity":
        /** @type {number} */
        value = parseFloat(value, 10);
        break;
      case "height":
      ;
      case "width":
        if (value == "auto") {
          /** @type {boolean} */
          ma = true;
        } else {
          /** @type {number} */
          value = parseInt(value, 10);
        }
        break;
      case "borderWidth":
      ;
      case "lineHeight":
      ;
      case "fontSize":
      ;
      case "margin":
      ;
      case "marginBottom":
      ;
      case "marginLeft":
      ;
      case "marginRight":
      ;
      case "marginTop":
      ;
      case "padding":
      ;
      case "paddingBottom":
      ;
      case "paddingLeft":
      ;
      case "paddingRight":
      ;
      case "paddingTop":
      ;
      case "bottom":
      ;
      case "left":
      ;
      case "right":
      ;
      case "top":
      ;
      case "scrollTop":
      ;
      case "scrollLeft":
        /** @type {number} */
        value = parseInt(value, 10);
        break;
      case "rotateX":
      ;
      case "rotateY":
      ;
      case "rotateZ":
        /** @type {number} */
        value = parseInt(value, 10) * Math.PI / 180;
        break;
      case "translateX":
      ;
      case "translateY":
      ;
      case "translateZ":
      ;
      case "scaleX":
      ;
      case "scaleY":
      ;
      case "scaleZ":
        /** @type {number} */
        value = parseFloat(value, 10);
        break;
      case "rotate3d":
        this._attr("rotateX", value[0], el);
        this._attr("rotateY", value[1], el);
        this._attr("rotateZ", value[2], el);
        return this;
      case "rotate":
        this._attr("rotateZ", value, el);
        return this;
      case "scale3d":
        this._attr("scaleZ", value[2], el);
      case "scale":
        this._attr("scaleX", value[0], el);
        this._attr("scaleY", value[1], el);
        return this;
      case "translate3d":
        this._attr("translateZ", value[2], el);
      case "translate":
        this._attr("translateX", value[0], el);
        this._attr("translateY", value[1], el);
        return this;
      default:
        throw new Error(property + " is not a supported attribute!");;
    }
    if (this.state.attrs[property] === void 0) {
      this.state.attrs[property] = {};
    }
    if (ma) {
      /** @type {boolean} */
      this.state.attrs[property].auto = true;
    }
    switch(el) {
      case passes:
        /** @type {(number|string)} */
        this.state.attrs[property].start = value;
        break;
      case passesLink:
        /** @type {boolean} */
        this.state.attrs[property].by = true;
      case failuresLink:
        /** @type {(number|string)} */
        this.state.attrs[property].value = value;
        break;
    }
  };
  /**
   * @param {string} x
   * @param {number} recurring
   * @return {?}
   */
  $.prototype.to = function(x, recurring) {
    if (recurring === void 0) {
      this._attr(this.last_attr, x, failuresLink);
    } else {
      this._attr(x, recurring, failuresLink);
      /** @type {string} */
      this.last_attr = x;
    }
    return this;
  };
  /**
   * @param {string} val
   * @param {number} value
   * @return {?}
   */
  $.prototype.by = function(val, value) {
    if (value === void 0) {
      this._attr(this.last_attr, val, passesLink);
    } else {
      this._attr(val, value, passesLink);
      /** @type {string} */
      this.last_attr = val;
    }
    return this;
  };
  /**
   * @param {string} value
   * @param {number} isXML
   * @return {?}
   */
  $.prototype.from = function(value, isXML) {
    if (isXML === void 0) {
      this._attr(this.last_attr, value, passes);
    } else {
      this._attr(value, isXML, passes);
      /** @type {string} */
      this.last_attr = value;
    }
    return this;
  };
  /**
   * @param {number} duration
   * @return {?}
   */
  $.prototype.duration = function(duration) {
    this.state.duration = duration ? duration : 0;
    return this;
  };
  /**
   * @param {number} key
   * @param {?} dataAndEvents
   * @return {?}
   */
  $.prototype.checkpoint = function(key, dataAndEvents) {
    if (key === void 0) {
      /** @type {number} */
      key = 1;
    }
    /** @type {number} */
    this.state.checkpoint = key;
    this.queue.push(this.state);
    this._reset_state();
    this.state.checkpointcb = dataAndEvents;
    return this;
  };
  /**
   * @return {?}
   */
  $.prototype.blind = function() {
    /** @type {boolean} */
    this.state.blind = true;
    return this;
  };
  /**
   * @return {?}
   */
  $.prototype.hide = function() {
    /** @type {boolean} */
    this.state.hide = true;
    return this;
  };
  /**
   * @return {?}
   */
  $.prototype.show = function() {
    /** @type {boolean} */
    this.state.show = true;
    return this;
  };
  /**
   * @param {Object} ease
   * @return {?}
   */
  $.prototype.ease = function(ease) {
    /** @type {Object} */
    this.state.ease = ease;
    return this;
  };
  /**
   * @return {?}
   */
  $.prototype.go = function() {
    /** @type {number} */
    var pos = Date.now();
    this.queue.push(this.state);
    /** @type {number} */
    var i = 0;
    for (;i < this.queue.length;i++) {
      /** @type {number} */
      this.queue[i].start = pos - n;
      if (this.queue[i].checkpoint) {
        pos += this.queue[i].checkpoint * this.queue[i].duration;
      }
    }
    animate(this);
    return this;
  };
  /**
   * @return {undefined}
   */
  $.prototype._show = function() {
    loading.show(this.obj);
  };
  /**
   * @return {undefined}
   */
  $.prototype._hide = function() {
    loading.hide(this.obj);
  };
  /**
   * @param {string} time
   * @return {?}
   */
  $.prototype._frame = function(time) {
    /**
     * @param {string} name
     * @return {?}
     */
    function fix(name) {
      return document.documentElement[name] || document.body[name];
    }
    /**
     * @param {HTMLElement} target
     * @param {string} name
     * @return {?}
     */
    function func(target, name) {
      return target === document.body ? fix(name) : target[name];
    }
    /**
     * @param {Object} data
     * @param {?} grid
     * @return {?}
     */
    function plot(data, grid) {
      return grid.lastScrollTop !== func(data.obj, "scrollTop") || grid.lastScrollLeft !== func(data.obj, "scrollLeft");
    }
    /**
     * @param {Object} callback
     * @param {?} template
     * @return {undefined}
     */
    function passThrough(callback, template) {
      template.lastScrollTop = func(callback.obj, "scrollTop");
      template.lastScrollLeft = func(callback.obj, "scrollLeft");
    }
    /** @type {boolean} */
    var ka = true;
    /** @type {boolean} */
    var container_div = false;
    var value;
    /** @type {number} */
    var i = 0;
    for (;i < this.queue.length;i++) {
      var self = this.queue[i];
      if (self.start > time) {
        /** @type {boolean} */
        ka = false;
        continue;
      }
      if (self.checkpointcb) {
        this._callback(self.checkpointcb, time - self.start);
        /** @type {null} */
        self.checkpointcb = null;
      }
      if (self.started === void 0) {
        if (self.show) {
          this._show();
        }
        var attr;
        for (attr in self.attrs) {
          if (self.attrs[attr].start !== void 0) {
            continue;
          }
          switch(attr) {
            case "backgroundColor":
            ;
            case "borderColor":
            ;
            case "color":
              value = convert(fn.get(this.obj, attr == "borderColor" ? "borderLeftColor" : attr));
              if (self.attrs[attr].by) {
                /** @type {number} */
                self.attrs[attr].value[0] = Math.min(255, Math.max(0, self.attrs[attr].value[0] + value[0]));
                /** @type {number} */
                self.attrs[attr].value[1] = Math.min(255, Math.max(0, self.attrs[attr].value[1] + value[1]));
                /** @type {number} */
                self.attrs[attr].value[2] = Math.min(255, Math.max(0, self.attrs[attr].value[2] + value[2]));
              }
              break;
            case "opacity":
              value = fn.getOpacity(this.obj);
              if (self.attrs[attr].by) {
                /** @type {number} */
                self.attrs[attr].value = Math.min(1, Math.max(0, self.attrs[attr].value + value));
              }
              break;
            case "height":
              value = f(this.obj);
              if (self.attrs[attr].by) {
                self.attrs[attr].value += value;
              }
              break;
            case "width":
              value = show(this.obj);
              if (self.attrs[attr].by) {
                self.attrs[attr].value += value;
              }
              break;
            case "scrollLeft":
            ;
            case "scrollTop":
              value = func(this.obj, attr);
              if (self.attrs[attr].by) {
                self.attrs[attr].value += value;
              }
              passThrough(this, self);
              break;
            case "rotateX":
            ;
            case "rotateY":
            ;
            case "rotateZ":
            ;
            case "translateX":
            ;
            case "translateY":
            ;
            case "translateZ":
              value = matrix.get(this.obj, attr, 0);
              if (self.attrs[attr].by) {
                self.attrs[attr].value += value;
              }
              break;
            case "scaleX":
            ;
            case "scaleY":
            ;
            case "scaleZ":
              value = matrix.get(this.obj, attr, 1);
              if (self.attrs[attr].by) {
                self.attrs[attr].value += value;
              }
              break;
            default:
              /** @type {number} */
              value = parseInt(fn.get(this.obj, attr), 10) || 0;
              if (self.attrs[attr].by) {
                self.attrs[attr].value += value;
              }
              break;
          }
          self.attrs[attr].start = value;
        }
        if (self.attrs.height && self.attrs.height.auto || self.attrs.width && self.attrs.width.auto) {
          this._destroy_container();
          for (attr in{
            height : 1,
            width : 1,
            fontSize : 1,
            borderLeftWidth : 1,
            borderRightWidth : 1,
            borderTopWidth : 1,
            borderBottomWidth : 1,
            paddingLeft : 1,
            paddingRight : 1,
            paddingTop : 1,
            paddingBottom : 1
          }) {
            if (self.attrs[attr]) {
              /** @type {string} */
              this.obj.style[attr] = self.attrs[attr].value + (typeof self.attrs[attr].value == "number" ? "px" : "");
            }
          }
          if (self.attrs.height && self.attrs.height.auto) {
            self.attrs.height.value = f(this.obj);
          }
          if (self.attrs.width && self.attrs.width.auto) {
            self.attrs.width.value = show(this.obj);
          }
        }
        /** @type {boolean} */
        self.started = true;
        if (self.blind) {
          this._build_container();
        }
      }
      /** @type {number} */
      var ease = (time - self.start) / self.duration;
      if (ease >= 1) {
        /** @type {number} */
        ease = 1;
        if (self.hide) {
          this._hide();
        }
      } else {
        /** @type {boolean} */
        ka = false;
      }
      var a = self.ease ? self.ease(ease) : ease;
      if (!container_div && (ease != 1 && self.blind)) {
        /** @type {boolean} */
        container_div = true;
      }
      for (attr in self.attrs) {
        switch(attr) {
          case "backgroundColor":
          ;
          case "borderColor":
          ;
          case "color":
            if (self.attrs[attr].start[3] != self.attrs[attr].value[3]) {
              /** @type {string} */
              this.obj.style[attr] = "rgba(" + set(a, self.attrs[attr].start[0], self.attrs[attr].value[0], true) + "," + set(a, self.attrs[attr].start[1], self.attrs[attr].value[1], true) + "," + set(a, self.attrs[attr].start[2], self.attrs[attr].value[2], true) + "," + set(a, self.attrs[attr].start[3], self.attrs[attr].value[3], false) + ")";
            } else {
              /** @type {string} */
              this.obj.style[attr] = "rgb(" + set(a, self.attrs[attr].start[0], self.attrs[attr].value[0], true) + "," + set(a, self.attrs[attr].start[1], self.attrs[attr].value[1], true) + "," + set(a, self.attrs[attr].start[2], self.attrs[attr].value[2], true) + ")";
            }
            break;
          case "opacity":
            fn.set(this.obj, "opacity", set(a, self.attrs[attr].start, self.attrs[attr].value));
            break;
          case "height":
          ;
          case "width":
            /** @type {string} */
            this.obj.style[attr] = a == 1 && self.attrs[attr].auto ? "auto" : set(a, self.attrs[attr].start, self.attrs[attr].value, true) + "px";
            break;
          case "scrollLeft":
          ;
          case "scrollTop":
            /** @type {boolean} */
            var wa = this.obj === document.body;
            if (plot(this, self)) {
              delete self.attrs.scrollTop;
              delete self.attrs.scrollLeft;
            } else {
              var id = set(a, self.attrs[attr].start, self.attrs[attr].value, true);
              if (!wa) {
                this.obj[attr] = id;
              } else {
                if (attr == "scrollLeft") {
                  win.scrollTo(id, fix("scrollTop"));
                } else {
                  win.scrollTo(fix("scrollLeft"), id);
                }
              }
              passThrough(this, self);
            }
            break;
          case "translateX":
          ;
          case "translateY":
          ;
          case "translateZ":
          ;
          case "rotateX":
          ;
          case "rotateY":
          ;
          case "rotateZ":
          ;
          case "scaleX":
          ;
          case "scaleY":
          ;
          case "scaleZ":
            matrix.set(this.obj, attr, set(a, self.attrs[attr].start, self.attrs[attr].value, false));
            break;
          default:
            /** @type {string} */
            this.obj.style[attr] = set(a, self.attrs[attr].start, self.attrs[attr].value, true) + "px";
            break;
        }
      }
      /** @type {null} */
      var node = null;
      var actual = matrix.get(this.obj, "translateX", 0);
      var program = matrix.get(this.obj, "translateY", 0);
      var inverse = matrix.get(this.obj, "translateZ", 0);
      if (actual || (program || inverse)) {
        node = clone(node, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, actual, program, inverse, 1]);
      }
      var obj = matrix.get(this.obj, "scaleX", 1);
      var scaleMax = matrix.get(this.obj, "scaleY", 1);
      var scaleZ = matrix.get(this.obj, "scaleZ", 1);
      if (obj - 1 || (scaleMax - 1 || scaleZ - 1)) {
        node = clone(node, [obj, 0, 0, 0, 0, scaleMax, 0, 0, 0, 0, scaleZ, 0, 0, 0, 0, 1]);
      }
      var yAngle = matrix.get(this.obj, "rotateX", 0);
      if (yAngle) {
        node = clone(node, [1, 0, 0, 0, 0, Math.cos(yAngle), Math.sin(-yAngle), 0, 0, Math.sin(yAngle), Math.cos(yAngle), 0, 0, 0, 0, 1]);
      }
      var rad = matrix.get(this.obj, "rotateY", 0);
      if (rad) {
        node = clone(node, [Math.cos(rad), 0, Math.sin(rad), 0, 0, 1, 0, 0, Math.sin(-rad), 0, Math.cos(rad), 0, 0, 0, 0, 1]);
      }
      var ang = matrix.get(this.obj, "rotateZ", 0);
      if (ang) {
        node = clone(node, [Math.cos(ang), Math.sin(-ang), 0, 0, Math.sin(ang), Math.cos(ang), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      }
      var nodes = require("transform");
      if (nodes) {
        if (node) {
          var key = traverseNode(node);
          fn.set(this.obj, nodes, key);
        } else {
          if (ka) {
            fn.set(this.obj, nodes, null);
          }
        }
      }
      if (ease == 1) {
        this.queue.splice(i--, 1);
        this._callback(self.ondone, time - self.start - self.duration);
      }
    }
    if (!container_div && this.container_div) {
      this._destroy_container();
    }
    return!ka;
  };
  /**
   * @param {Function} v11
   * @return {?}
   */
  $.prototype.ondone = function(v11) {
    /** @type {Function} */
    this.state.ondone = v11;
    return this;
  };
  /**
   * @param {Function} cb
   * @param {number} step
   * @return {undefined}
   */
  $.prototype._callback = function(cb, step) {
    if (cb) {
      /** @type {number} */
      n = step;
      cb.call(this);
      /** @type {number} */
      n = 0;
    }
  };
  $.ease = {};
  /**
   * @param {number} condition
   * @return {?}
   */
  $.ease.begin = function(condition) {
    return Math.sin(Math.PI / 2 * (condition - 1)) + 1;
  };
  /**
   * @param {string} attribute
   * @return {?}
   */
  $.ease.end = function(attribute) {
    return Math.sin(0.5 * Math.PI * attribute);
  };
  /**
   * @param {number} prev
   * @return {?}
   */
  $.ease.both = function(prev) {
    return 0.5 * Math.sin(Math.PI * (prev - 0.5)) + 0.5;
  };
  /**
   * @param {?} index
   * @param {?} text
   * @return {undefined}
   */
  $.prependInsert = function(index, text) {
    $.insert(index, text, item.prependContent);
  };
  /**
   * @param {?} index
   * @param {?} text
   * @return {undefined}
   */
  $.appendInsert = function(index, text) {
    $.insert(index, text, item.appendContent);
  };
  /**
   * @param {?} index
   * @param {?} elem
   * @param {?} callback
   * @return {undefined}
   */
  $.insert = function(index, elem, callback) {
    fn.set(elem, "opacity", 0);
    callback(index, elem);
    (new $(elem)).from("opacity", 0).to("opacity", 1).duration(400).go();
  };
  /** @type {function (string): ?} */
  module.exports = $;
}, null);
__d("ViewportBounds", ["Arbiter", "ArbiterMixin", "DOM", "Style", "Vector", "csx", "copyProperties", "emptyFunction", "removeFromArray"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, left, thisObj, trap, colModel, $window, opt_attributes, makeIterator, el, callback) {
  /**
   * @param {string} p
   * @return {?}
   */
  function walk(p) {
    return function() {
      /** @type {number} */
      var closingAnimationTime = 0;
      map[p].forEach(function(palette) {
        /** @type {number} */
        closingAnimationTime = Math.max(closingAnimationTime, palette.getSize());
      });
      return closingAnimationTime;
    };
  }
  /**
   * @param {string} name
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  function commitMargin(name, dataAndEvents) {
    return function(deepDataAndEvents) {
      return new init(name, deepDataAndEvents, dataAndEvents);
    };
  }
  /**
   * @param {string} attribute
   * @param {?} callback
   * @param {string} prop
   * @return {undefined}
   */
  function init(attribute, callback, prop) {
    this.getSide = el.thatReturns(attribute);
    /**
     * @return {?}
     */
    this.getSize = function() {
      return typeof callback === "function" ? callback() : callback;
    };
    this.isPersistent = el.thatReturns(prop);
    map[attribute].push(this);
    _self.inform("change");
  }
  var map = {
    top : [],
    right : [],
    bottom : [],
    left : []
  };
  /**
   * @return {undefined}
   */
  init.prototype.remove = function() {
    callback(map[this.getSide()], this);
    _self.inform("change");
  };
  left.subscribe("page_transition", function() {
    var letter;
    for (letter in map) {
      map[letter].forEach(function(store) {
        if (!store.isPersistent()) {
          store.remove();
        }
      });
    }
  });
  var _self = makeIterator({
    getTop : walk("top"),
    getRight : walk("right"),
    getBottom : walk("bottom"),
    getLeft : walk("left"),
    /**
     * @param {Element} element
     * @return {?}
     */
    getElementPosition : function(element) {
      var position = $window.getElementPosition(element);
      position.y -= _self.getTop();
      return position;
    },
    addTop : commitMargin("top"),
    addRight : commitMargin("right"),
    addBottom : commitMargin("bottom"),
    addLeft : commitMargin("left"),
    addPersistentTop : commitMargin("top", true),
    addPersistentRight : commitMargin("right", true),
    addPersistentBottom : commitMargin("bottom", true),
    addPersistentLeft : commitMargin("left", true)
  }, thisObj);
  _self.addPersistentTop(function() {
    var i = trap.scry(document, "div._4f7n")[0];
    if (i && colModel.isFixed(i)) {
      var controls = trap.scry(document, "div._21mm")[0];
      return controls ? controls.offsetHeight : 0;
    }
    return 0;
  });
  module.exports = _self;
}, null);
__d("isAsyncScrollQuery", ["UserAgent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Env) {
  /**
   * @return {?}
   */
  function filter() {
    if (event === null) {
      event = Env.isPlatform("Mac OS X >= 10.8") && Env.isBrowser("Safari >= 6.0");
    }
    return event;
  }
  /** @type {null} */
  var event = null;
  /** @type {function (): ?} */
  module.exports = filter;
}, null);
__d("DOMScroll", ["Animation", "Arbiter", "DOM", "DOMQuery", "Vector", "ViewportBounds", "ge", "isAsyncScrollQuery"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, a, selectCtrl, field, rule, Anim, parentEl, $, $timeout) {
  var scope = {
    SCROLL : "dom-scroll",
    /**
     * @return {?}
     */
    getScrollState : function() {
      var maxValues = Anim.getViewportDimensions();
      var data = Anim.getDocumentDimensions();
      /** @type {boolean} */
      var animCfg = data.x > maxValues.x;
      /** @type {boolean} */
      var s = data.y > maxValues.y;
      animCfg += 0;
      s += 0;
      return new Anim(animCfg, s);
    },
    _scrollbarSize : null,
    /**
     * @return {undefined}
     */
    _initScrollbarSize : function() {
      var inner = field.create("p");
      /** @type {string} */
      inner.style.width = "100%";
      /** @type {string} */
      inner.style.height = "200px";
      var outer = field.create("div");
      /** @type {string} */
      outer.style.position = "absolute";
      /** @type {string} */
      outer.style.top = "0px";
      /** @type {string} */
      outer.style.left = "0px";
      /** @type {string} */
      outer.style.visibility = "hidden";
      /** @type {string} */
      outer.style.width = "200px";
      /** @type {string} */
      outer.style.height = "150px";
      /** @type {string} */
      outer.style.overflow = "hidden";
      outer.appendChild(inner);
      document.body.appendChild(outer);
      var w1 = inner.offsetWidth;
      /** @type {string} */
      outer.style.overflow = "scroll";
      var w2 = inner.offsetWidth;
      if (w1 == w2) {
        w2 = outer.clientWidth;
      }
      document.body.removeChild(outer);
      /** @type {number} */
      scope._scrollbarSize = w1 - w2;
    },
    /**
     * @return {?}
     */
    getScrollbarSize : function() {
      if (scope._scrollbarSize === null) {
        scope._initScrollbarSize();
      }
      return scope._scrollbarSize;
    },
    /**
     * @param {?} self
     * @param {boolean} value
     * @param {boolean} aDefaultValue
     * @param {boolean} recurring
     * @param {number} mayParseLabeledStatementInstead
     * @param {?} y
     * @return {?}
     */
    scrollTo : function(self, value, aDefaultValue, recurring, mayParseLabeledStatementInstead, y) {
      if (typeof value == "undefined" || value === true) {
        /** @type {number} */
        value = 750;
      }
      if ($timeout()) {
        /** @type {boolean} */
        value = false;
      }
      if (!(self instanceof Anim)) {
        var t = Anim.getScrollPosition().x;
        var posY = Anim.getElementPosition($(self)).y;
        self = new Anim(t, posY, "document");
        if (!recurring) {
          self.y -= parentEl.getTop() / (aDefaultValue ? 2 : 1);
        }
      }
      if (aDefaultValue) {
        self.y -= Anim.getViewportDimensions().y / 2;
      } else {
        if (recurring) {
          self.y -= Anim.getViewportDimensions().y;
          self.y += recurring;
        }
      }
      if (mayParseLabeledStatementInstead) {
        self.y -= mayParseLabeledStatementInstead;
      }
      self = self.convertTo("document");
      if (value) {
        return(new a(document.body)).to("scrollTop", self.y).to("scrollLeft", self.x).ease(a.ease.end).duration(value).ondone(y).go();
      } else {
        if (window.scrollTo) {
          window.scrollTo(self.x, self.y);
          if (y) {
            y();
          }
        }
      }
      selectCtrl.inform(scope.SCROLL);
    },
    /**
     * @param {Element} element
     * @param {?} self
     * @param {number} step
     * @param {boolean} offset
     * @param {?} row
     * @return {undefined}
     */
    ensureVisible : function(element, self, step, offset, row) {
      if (step === void 0) {
        /** @type {number} */
        step = 10;
      }
      element = $(element);
      if (self) {
        element = rule.find(element, self);
      }
      var t = Anim.getScrollPosition().x;
      var ly = Anim.getScrollPosition().y;
      var b = ly + Anim.getViewportDimensions().y;
      var y = Anim.getElementPosition(element).y;
      var a = y + Anim.getElementDimensions(element).y;
      y -= parentEl.getTop();
      y -= step;
      a += step;
      if (y < ly) {
        scope.scrollTo(new Anim(t, y, "document"), offset, false, false, 0, row);
      } else {
        if (a > b) {
          if (y - (a - b) < ly) {
            scope.scrollTo(new Anim(t, y, "document"), offset, false, false, 0, row);
          } else {
            scope.scrollTo(new Anim(t, a, "document"), offset, false, true, 0, row);
          }
        }
      }
    },
    /**
     * @param {boolean} immediately
     * @return {undefined}
     */
    scrollToTop : function(immediately) {
      var offsetCoordinate = Anim.getScrollPosition();
      scope.scrollTo(new Anim(offsetCoordinate.x, 0, "document"), immediately !== false);
    }
  };
  module.exports = scope;
}, null);
__d("DataSource", ["ArbiterMixin", "AsyncRequest", "TokenizeUtil", "UnicodeMatch", "copyProperties", "createArrayFromMixed", "createObjectFrom", "emptyFunction", "mixin"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, context, opt_attributes, data, Deferred, jQuery, dataAndEvents, fn, transform, behavior, init, fun) {
  /**
   * @param {string} node
   * @return {undefined}
   */
  function self(node) {
    this._maxResults = node.maxResults || 10;
    this.token = node.token;
    this.queryData = node.queryData || {};
    this.queryEndpoint = node.queryEndpoint || "";
    this.bootstrapData = node.bootstrapData || {};
    this.bootstrapEndpoint = node.bootstrapEndpoint || "";
    this._indexedFields = node.indexedFields || ["text", "tokens"];
    this._titleFields = node.titleFields || [];
    this._alwaysPrefixMatch = node.alwaysPrefixMatch || false;
    this._deduplicationKey = node.deduplicationKey || null;
    this._enabledLocalCache = node.enabledLocalCache != null ? node.enabledLocalCache : true;
    this._enabledQueryCache = node.enabledQueryCache != null ? node.enabledQueryCache : true;
    this._disableAllCaches = node.disableAllCaches != null ? node.disableAllCaches : false;
    this._enabledMergeUids = node.enabledMergeUids != null ? node.enabledMergeUids : false;
    this._queryExactMatch = node.queryExactMatch || false;
    this._acrossTransitions = node.acrossTransitions || false;
    this._minQueryLength = node.minQueryLength || -1;
    this._enforceNewRequestIDUponFetch = node.enforceNewRequestIDUponFetch || false;
    /** @type {number} */
    this._minExactMatchLength = 4;
    /** @type {Array} */
    this._filters = [];
    this.setExclusions(node.exclusions);
    this.backendUnicodeMatch = new dataAndEvents({
      prefix_kana_hiragana_to_katakana : !!node.kanaNormalization
    });
    this.cacheUnicodeMatch = new dataAndEvents({
      prefix_kana_hiragana_to_katakana : !!node.kanaNormalization
    });
  }
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
  /** @type {function (string): undefined} */
  self.prototype.constructor = self;
  self.__superConstructor__ = tmp;
  /**
   * @return {undefined}
   */
  self.prototype.init = function() {
    /** @type {(RegExp|string)} */
    this.init = init;
    this._fields = behavior(this._indexedFields);
    /** @type {number} */
    this._activeQueries = 0;
    this.dirty();
  };
  /**
   * @return {?}
   */
  self.prototype.dirty = function() {
    /** @type {string} */
    this.value = "";
    /** @type {boolean} */
    this._bootstrapped = false;
    /** @type {boolean} */
    this._bootstrapping = false;
    this._data = {};
    this.localCache = {};
    this.queryCache = {};
    this.queryIDs = {};
    this.inform("dirty", {});
    return this;
  };
  /**
   * @param {?} oauthConfig
   * @return {undefined}
   */
  self.prototype.bootstrap = function(oauthConfig) {
    if (this._bootstrapped && !oauthConfig) {
      return;
    }
    this.bootstrapWithoutToken();
    /** @type {boolean} */
    this._bootstrapped = true;
    /** @type {boolean} */
    this._bootstrapping = true;
    this.inform("bootstrap", {
      bootstrapping : true
    });
  };
  /**
   * @return {undefined}
   */
  self.prototype.bootstrapWithoutToken = function() {
    this.fetch(this.bootstrapEndpoint, this.bootstrapData, {
      bootstrap : true,
      token : this.token
    });
  };
  /**
   * @return {undefined}
   */
  self.prototype.bootstrapWithToken = function() {
    var params = fn({}, this.bootstrapData);
    params.token = this.token;
    this.fetch(this.bootstrapEndpoint, params, {
      bootstrap : true,
      replaceCache : true,
      value : ""
    });
  };
  /**
   * @param {string} val
   * @param {Element} firstOnly
   * @param {Object} next
   * @param {?} sql
   * @return {?}
   */
  self.prototype.query = function(val, firstOnly, next, sql) {
    this.inform("beforeQuery", {
      value : val,
      local_only : firstOnly,
      exclusions : next,
      time_waited : sql
    });
    /** @type {number} */
    var value = Date.now();
    if (this._disableAllCaches) {
      this.dirty();
      if (!val) {
        this.bootstrap();
        return true;
      }
    } else {
      if (!this._enabledQueryCache) {
        this.queryCache = {};
        this.queryIDs = {};
      }
    }
    var res = this.buildUids(val, [], next);
    var data = this.respond(val, res);
    /** @type {string} */
    this.value = val;
    this.inform("query", {
      value : val,
      results : data
    });
    var udataCur = this.tokenizeBackend(val).flatValue;
    if (firstOnly || (!udataCur || (this._isQueryTooShort(udataCur) || (!this.queryEndpoint || (this.getQueryCache().hasOwnProperty(udataCur) || !this.shouldFetchMoreResults(data)))))) {
      this.inform("logPerformanceTiming", {
        field : "cache_keypress_render",
        value : Date.now() - value
      });
      this.inform("completeCacheFetch");
      return false;
    }
    this.inform("queryEndpoint", {
      value : val
    });
    this.fetch(this.queryEndpoint, this.getQueryData(val, res), {
      value : val,
      exclusions : next
    });
    return true;
  };
  /**
   * @param {Array} value
   * @return {?}
   */
  self.prototype._isQueryTooShort = function(value) {
    return value.length < this._minQueryLength;
  };
  /**
   * @param {string} node
   * @param {boolean} callback
   * @return {?}
   */
  self.prototype._tokenize = function(node, callback) {
    return jQuery.parse(node, callback);
  };
  /**
   * @param {string} child
   * @param {boolean} next_callback
   * @return {?}
   */
  self.prototype.tokenizeBackend = function(child, next_callback) {
    child = this.backendUnicodeMatch.prefixMatchPrepare(child);
    return this._tokenize(child, next_callback);
  };
  /**
   * @param {string} child
   * @param {boolean} next_callback
   * @return {?}
   */
  self.prototype.tokenizeCache = function(child, next_callback) {
    child = this.cacheUnicodeMatch.prefixMatchPrepare(child);
    return this._tokenize(child, next_callback);
  };
  /**
   * @param {Array} buffer2
   * @return {?}
   */
  self.prototype.shouldFetchMoreResults = function(buffer2) {
    return buffer2.length < this._maxResults;
  };
  /**
   * @param {Function} callback
   * @param {Array} results
   * @return {?}
   */
  self.prototype.getQueryData = function(callback, results) {
    var matched = fn({
      /** @type {Function} */
      value : callback
    }, this.queryData || {});
    results = results || [];
    if (results.length) {
      matched.existing_ids = results.join(",");
    }
    if (this._bootstrapping) {
      /** @type {boolean} */
      matched.bsp = true;
    }
    return matched;
  };
  /**
   * @param {?} data
   * @param {?} opt_decode
   * @return {?}
   */
  self.prototype.setQueryData = function(data, opt_decode) {
    if (opt_decode) {
      this.queryData = {};
    }
    fn(this.queryData, data);
    return this;
  };
  /**
   * @param {?} partials
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setBootstrapData = function(partials, dataAndEvents) {
    if (dataAndEvents) {
      this.bootstrapData = {};
    }
    fn(this.bootstrapData, partials);
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getExclusions = function() {
    return transform(this._exclusions);
  };
  /**
   * @param {Array} _
   * @return {undefined}
   */
  self.prototype.setExclusions = function(_) {
    this._exclusions = _ ? _.map(String) : [];
  };
  /**
   * @param {?} f
   * @return {?}
   */
  self.prototype.addFilter = function(f) {
    var arr = this._filters;
    arr.push(f);
    return{
      /**
       * @return {undefined}
       */
      remove : function() {
        arr.splice(arr.indexOf(f), 1);
      }
    };
  };
  /**
   * @return {undefined}
   */
  self.prototype.clearFilters = function() {
    /** @type {Array} */
    this._filters = [];
  };
  /**
   * @param {Function} progress
   * @param {Array} a
   * @param {?} message
   * @param {?} opt_data
   * @return {?}
   */
  self.prototype.notify = function(progress, a, message, opt_data) {
    var tmp = this.buildData(a);
    this.inform("notify", {
      /** @type {Function} */
      value : progress,
      results : tmp,
      isAsync : !!message,
      rootid : opt_data
    });
    return tmp;
  };
  /**
   * @param {string} body
   * @param {Array} res
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  self.prototype.respond = function(body, res, dataAndEvents) {
    var r = this.buildData(res);
    this.inform("respond", {
      value : body,
      results : r,
      isAsync : !!dataAndEvents
    });
    return r;
  };
  /**
   * @param {string} x
   * @param {Array} data
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.respondWithResults = function(x, data, dataAndEvents) {
    this.inform("respond", {
      value : x,
      results : data,
      isAsync : !!dataAndEvents
    });
    return data;
  };
  /**
   * @param {number} i
   * @param {?} query
   * @param {Object} opt_attributes
   * @return {undefined}
   */
  self.prototype.fetch = function(i, query, opt_attributes) {
    if (!i) {
      return;
    }
    if (this._enforceNewRequestIDUponFetch || query.request_id === void 0) {
      query.request_id = this._guid();
      opt_attributes.request_id = query.request_id;
    }
    var request = (new Deferred).setURI(i).setData(query).setMethod("GET").setReadOnly(true).setAllowCrossPageTransition(this._acrossTransitions).setHandler(function(deepDataAndEvents) {
      this.fetchHandler(deepDataAndEvents, opt_attributes || {});
    }.bind(this));
    if (i === this.queryEndpoint) {
      request.setFinallyHandler(function() {
        this._activeQueries--;
        if (!this._activeQueries) {
          this.inform("activity", {
            activity : false
          });
        }
      }.bind(this));
    }
    request.setErrorHandler(this.asyncErrorHandler);
    this.inform("beforeFetch", {
      request : request,
      fetch_context : opt_attributes
    });
    request.send();
    if (i === this.queryEndpoint) {
      if (!this._activeQueries) {
        this.inform("activity", {
          activity : true
        });
      }
      this._activeQueries++;
    }
  };
  /**
   * @param {Object} deepDataAndEvents
   * @param {Object} token
   * @return {undefined}
   */
  self.prototype.fetchHandler = function(deepDataAndEvents, token) {
    var value = token.value;
    var expectationResult = token.exclusions;
    if (deepDataAndEvents.getPayload().requestID !== void 0) {
      token.request_id = deepDataAndEvents.getPayload().requestID;
    }
    var localVars = this.getQueryIDs();
    var currentVar = this.tokenizeBackend(value || "").flatValue;
    localVars[currentVar] = token.request_id;
    if (!value && token.replaceCache) {
      this.localCache = {};
    }
    this.inform("buildQueryCache", {});
    var entries = deepDataAndEvents.getPayload().entries;
    this.addEntries(entries, value);
    this.inform("fetchComplete", {
      entries : entries,
      response : deepDataAndEvents,
      value : value,
      fetch_context : token
    });
    var val = !value && this.value ? this.value : value;
    this.respond(val, this.buildUids(val, [], expectationResult), true);
    if (!value) {
      if (this._bootstrapping) {
        /** @type {boolean} */
        this._bootstrapping = false;
        this.inform("bootstrap", {
          bootstrapping : false
        });
      }
      if (token.token && deepDataAndEvents.getPayload().token !== token.token) {
        this.bootstrapWithToken();
      }
    }
  };
  /**
   * @param {Array} x
   * @param {string} val
   * @return {undefined}
   */
  self.prototype.addEntries = function(x, val) {
    var recurring = this.processEntries(transform(x || []), val);
    var matches = recurring;
    if (this._enabledMergeUids) {
      matches = this.buildUids(val, recurring);
    }
    if (val) {
      var dependencies = this.getQueryCache();
      var pkg = this.tokenizeBackend(val).flatValue;
      dependencies[pkg] = matches;
    } else {
      this.fillCache(matches);
    }
  };
  /**
   * @param {Array} mod
   * @param {string} path
   * @return {?}
   */
  self.prototype.processEntries = function(mod, path) {
    return mod.map(function(conf, i) {
      /** @type {string} */
      var rvar = conf.uid = conf.uid + "";
      var config = this.getEntry(rvar);
      if (!config) {
        /** @type {Object} */
        config = conf;
        /** @type {string} */
        config.query = path;
        /** @type {boolean} */
        config.bootstrapped = !path;
        this.setEntry(rvar, config);
      } else {
        fn(config, conf);
      }
      if (config.index === void 0) {
        config.index = i;
      }
      return rvar;
    }, this);
  };
  /**
   * @return {?}
   */
  self.prototype.getAllEntries = function() {
    return this._data || {};
  };
  /**
   * @param {string} name
   * @return {?}
   */
  self.prototype.getEntry = function(name) {
    return this._data[name] || null;
  };
  /**
   * @param {string} name
   * @param {?} val
   * @return {undefined}
   */
  self.prototype.setEntry = function(name, val) {
    this._data[name] = val;
  };
  /**
   * @param {Array} matches
   * @return {undefined}
   */
  self.prototype.fillCache = function(matches) {
    if (!this._enabledLocalCache) {
      return;
    }
    var definitions = this.localCache;
    matches.forEach(function(id) {
      var entry = this.getEntry(id);
      if (!entry) {
        return;
      }
      var values = this.tokenizeCache(this.getTextToIndex(entry)).tokens;
      /** @type {number} */
      var i = 0;
      var valuesLen = values.length;
      for (;i < valuesLen;++i) {
        var value = values[i];
        if (!definitions.hasOwnProperty(value)) {
          definitions[value] = {};
        }
        /** @type {boolean} */
        definitions[value][id] = true;
      }
    }, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  self.prototype.getTextToIndex = function(deepDataAndEvents) {
    if (deepDataAndEvents.textToIndex && !deepDataAndEvents.needs_update) {
      return deepDataAndEvents.textToIndex;
    }
    /** @type {boolean} */
    deepDataAndEvents.needs_update = false;
    deepDataAndEvents.textToIndex = this.getTextToIndexFromFields(deepDataAndEvents, this._indexedFields);
    return deepDataAndEvents.textToIndex;
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Array} codeSegments
   * @return {?}
   */
  self.prototype.getTextToIndexFromFields = function(deepDataAndEvents, codeSegments) {
    /** @type {Array} */
    var newOut = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;++i) {
      var s = deepDataAndEvents[codeSegments[i]];
      if (s) {
        newOut.push(s.join ? s.join(" ") : s);
      }
    }
    return newOut.join(" ");
  };
  /**
   * @param {Array} context
   * @param {?} more
   * @param {Array} recurring
   * @param {string} x
   * @return {?}
   */
  self.prototype.mergeUids = function(context, more, recurring, x) {
    this.inform("mergeUids", {
      local_uids : context,
      query_uids : more,
      new_uids : recurring,
      value : x
    });
    var values = function(id, i) {
      var a = this.getEntry(id);
      var b = this.getEntry(i);
      if (a.extended_match !== b.extended_match) {
        return a.extended_match ? 1 : -1;
      }
      if (a.index !== b.index) {
        return a.index - b.index;
      }
      if (a.text.length !== b.text.length) {
        return a.text.length - b.text.length;
      }
      return a.uid < b.uid;
    }.bind(this);
    this._checkExtendedMatch(x, context);
    return this.deduplicateByKey(context.sort(values).concat(more, recurring));
  };
  /**
   * @param {string} v00
   * @param {Array} codeSegments
   * @return {undefined}
   */
  self.prototype._checkExtendedMatch = function(v00, codeSegments) {
    var checkParentChildRestrictions = this._alwaysPrefixMatch ? jQuery.isPrefixMatch : jQuery.isQueryMatch;
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;++i) {
      var config = this.getEntry(codeSegments[i]);
      /** @type {boolean} */
      config.extended_match = config.tokens ? !checkParentChildRestrictions(v00, config.text) : false;
    }
  };
  /**
   * @param {string} obj
   * @param {Array} recurring
   * @param {Array} result
   * @return {?}
   */
  self.prototype.buildUids = function(obj, recurring, result) {
    if (!recurring) {
      /** @type {Array} */
      recurring = [];
    }
    if (!obj) {
      return recurring;
    }
    if (!result) {
      /** @type {Array} */
      result = [];
    }
    var context = this.buildCacheResults(obj, this.localCache);
    var more = this.buildQueryResults(obj);
    var key = this.mergeUids(context, more, recurring, obj);
    var dst = behavior(result.concat(this._exclusions));
    var drop = key.filter(function(key) {
      if (dst.hasOwnProperty(key) || !this.getEntry(key)) {
        return false;
      }
      /** @type {number} */
      var i = 0;
      for (;i < this._filters.length;++i) {
        if (!this._filters[i](this.getEntry(key), obj)) {
          return false;
        }
      }
      return dst[key] = true;
    }, this);
    return this.uidsIncludingExact(obj, drop);
  };
  /**
   * @param {string} co
   * @param {Array} drop
   * @return {?}
   */
  self.prototype.uidsIncludingExact = function(co, drop) {
    var valuesLen = drop.length;
    if (co.length < this._minExactMatchLength || valuesLen <= this._maxResults) {
      return drop;
    }
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;++i) {
      var entry = this.getEntry(drop[i]);
      if (!entry.text_lower) {
        entry.text_lower = entry.text.toLowerCase();
      }
      if (entry.text_lower === this.tokenizeCache(co).flatValue) {
        if (i >= this._maxResults) {
          var block = drop.splice(i, 1)[0];
          drop.splice(this._maxResults - 1, 0, block);
        }
        break;
      }
    }
    return drop;
  };
  /**
   * @param {Array} d
   * @return {?}
   */
  self.prototype.buildData = function(d) {
    /** @type {Array} */
    var eventPath = [];
    /** @type {number} */
    var kl = Math.min(d.length, this._maxResults);
    /** @type {number} */
    var k = 0;
    for (;k < kl;++k) {
      eventPath.push(this.getEntry(d[k]));
    }
    return eventPath;
  };
  /**
   * @param {string} selector
   * @param {?} css
   * @return {?}
   */
  self.prototype.findBestPreviousQuery = function(selector, css) {
    /** @type {number} */
    var keylen = 0;
    /** @type {null} */
    var attrs = null;
    if (this._queryExactMatch) {
      return css.hasOwnProperty(selector) ? selector : null;
    }
    var key;
    for (key in css) {
      if (selector.indexOf(key) === 0 && key.length > keylen) {
        /** @type {number} */
        keylen = key.length;
        /** @type {string} */
        attrs = key;
      }
    }
    return attrs;
  };
  /**
   * @param {string} key
   * @return {?}
   */
  self.prototype.findQueryCache = function(key) {
    var camelKey = this.findBestPreviousQuery(key, this.getQueryCache());
    return this.getQueryCache()[camelKey] || [];
  };
  /**
   * @param {string} co
   * @return {?}
   */
  self.prototype.buildQueryResults = function(co) {
    var key = this.tokenizeBackend(co).flatValue;
    var camelKey = this.findQueryCache(key);
    if (this.getQueryCache().hasOwnProperty(key)) {
      return camelKey;
    }
    var data = this.filterQueryResults(key, camelKey);
    return data;
  };
  /**
   * @param {string} name
   * @param {Array} value
   * @return {?}
   */
  self.prototype.filterQueryResults = function(name, value) {
    var ondata = this._alwaysPrefixMatch ? jQuery.isPrefixMatch : jQuery.isQueryMatch;
    return value.filter(function(id) {
      return ondata(name, this.getTextToIndex(this.getEntry(id)));
    }, this);
  };
  /**
   * @param {string} source
   * @param {Object} helper
   * @return {?}
   */
  self.prototype.buildCacheResults = function(source, helper) {
    var syntax = this.tokenizeCache(source, this._alwaysPrefixMatch);
    var packets = this._alwaysPrefixMatch ? syntax.sortedTokens : syntax.tokens;
    var l = packets.length;
    /** @type {(null|number)} */
    var length = syntax.isPrefixQuery ? l - 1 : null;
    var dst = {};
    var locValueDict = {};
    var words = {};
    /** @type {Array} */
    var ret = [];
    /** @type {boolean} */
    var esc = false;
    var special = {};
    /** @type {number} */
    var pos = 0;
    /** @type {number} */
    var i = 0;
    for (;i < l;++i) {
      var type = packets[i];
      if (!special.hasOwnProperty(type)) {
        pos++;
        /** @type {boolean} */
        special[type] = true;
      } else {
        continue;
      }
      var key;
      for (key in helper) {
        if (!dst.hasOwnProperty(key) && key === type || (this._alwaysPrefixMatch || length === i) && this.cacheUnicodeMatch.prefixMatch(key, type)) {
          if (key === type) {
            if (locValueDict.hasOwnProperty(key)) {
              /** @type {boolean} */
              esc = true;
            }
            /** @type {boolean} */
            dst[key] = true;
          } else {
            if (dst.hasOwnProperty(key) || locValueDict.hasOwnProperty(key)) {
              /** @type {boolean} */
              esc = true;
            }
            /** @type {boolean} */
            locValueDict[key] = true;
          }
          var cur;
          for (cur in helper[key]) {
            if (i === 0 || words.hasOwnProperty(cur) && words[cur] == pos - 1) {
              /** @type {number} */
              words[cur] = pos;
            }
          }
        }
      }
    }
    var word;
    for (word in words) {
      if (words[word] == pos) {
        ret.push(word);
      }
    }
    if (esc || pos < l) {
      ret = this.filterQueryResults(source, ret);
    }
    if (this._titleFields && this._titleFields.length > 0) {
      ret = this.filterNonTitleMatchQueryResults(source, ret);
    }
    return ret;
  };
  /**
   * @param {string} source
   * @param {Array} arr
   * @return {?}
   */
  self.prototype.filterNonTitleMatchQueryResults = function(source, arr) {
    return arr.filter(function(id) {
      var syntax = this.tokenizeCache(source);
      var cnl = syntax.tokens.length;
      if (cnl === 0) {
        return true;
      }
      var restoreScript = this.getTitleTerms(this.getEntry(id));
      var val = syntax.tokens[0];
      return cnl === 1 || this._alwaysPrefixMatch ? jQuery.isPrefixMatch(val, restoreScript) || this.cacheUnicodeMatch.prefixMatch(restoreScript, val) : jQuery.isQueryMatch(val, restoreScript);
    }, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  self.prototype.getTitleTerms = function(deepDataAndEvents) {
    if (!deepDataAndEvents.titleToIndex) {
      deepDataAndEvents.titleToIndex = this.getTextToIndexFromFields(deepDataAndEvents, this._titleFields);
    }
    return deepDataAndEvents.titleToIndex;
  };
  /**
   * @param {Array} key
   * @return {?}
   */
  self.prototype.deduplicateByKey = function(key) {
    if (!this._deduplicationKey) {
      return key;
    }
    var values = behavior(key.map(this._getDeduplicationKey.bind(this)), key);
    return key.filter(function(value) {
      return values[this._getDeduplicationKey(value)] == value;
    }.bind(this));
  };
  /**
   * @param {string} i
   * @return {?}
   */
  self.prototype._getDeduplicationKey = function(i) {
    var entry = this.getEntry(i);
    if (entry[this._deduplicationKey]) {
      return entry[this._deduplicationKey] + "";
    } else {
      return "__" + i + "__";
    }
  };
  /**
   * @return {?}
   */
  self.prototype.getQueryCache = function() {
    return this.queryCache;
  };
  /**
   * @return {?}
   */
  self.prototype.getQueryIDs = function() {
    return this.queryIDs;
  };
  /**
   * @param {number} dataAndEvents
   * @return {undefined}
   */
  self.prototype.setMaxResults = function(dataAndEvents) {
    /** @type {number} */
    this._maxResults = dataAndEvents;
    if (this.value) {
      this.respond(this.value, this.buildUids(this.value));
    }
  };
  /**
   * @param {?} token
   * @return {?}
   */
  self.prototype.updateToken = function(token) {
    this.token = token;
    this.dirty();
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype._guid = function() {
    /** @type {number} */
    var sectionLength = Date.now();
    /** @type {string} */
    var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      /** @type {number} */
      var r = Math.floor((sectionLength + Math.random() * 16) % 16);
      /** @type {number} */
      sectionLength = Math.floor(sectionLength / 16);
      /** @type {string} */
      var _guid = (c == "x" ? r : r & 7 | 8).toString(16);
      return _guid;
    });
    return id;
  };
  fn(self.prototype, {
    events : ["bootstrap", "query", "respond"],
    asyncErrorHandler : init
  });
  /** @type {function (string): undefined} */
  context.exports = self;
}, null);
__d("LinkController", ["Event", "DataStore", "Parent", "trackReferrer"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, dojo, domAttr, console, cbDone) {
  /**
   * @param {Event} ev
   * @return {undefined}
   */
  function update(ev) {
    var item = ev.getTarget();
    var link = console.byTag(item, "a");
    var match = link && link.getAttribute("href", 2);
    if (!match || (link.rel || (!check(match) || (item.nodeName == "INPUT" && item.type == "file" || domAttr.get(link, type))))) {
      return;
    }
    var url = dojo.listen(link, "click", function(e) {
      if (match.charAt(match.length - 1) == "#") {
        e.prevent();
        return;
      }
      cbDone(link, match);
      onEnd(link, e);
    });
    domAttr.set(link, type, url);
  }
  /**
   * @param {HTMLAnchorElement} data
   * @param {Event} e
   * @return {?}
   */
  function onEnd(data, e) {
    if (data.target || (data.rel || (e.getModifiers().any || e.which && e.which != 1))) {
      return;
    }
    /** @type {Array} */
    var codeSegments = beginswith.concat(caseSensitive);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var valuesLen = codeSegments.length;
    for (;i < valuesLen;i++) {
      if (codeSegments[i](data, e) === false) {
        return e.prevent();
      }
    }
  }
  /**
   * @param {string} string
   * @return {?}
   */
  function check(string) {
    var params = string.match(/^(\w+):/);
    return!params || params[1].match(/^http/i);
  }
  /** @type {string} */
  var type = "LinkControllerHandler";
  /** @type {Array} */
  var beginswith = [];
  /** @type {Array} */
  var caseSensitive = [];
  var JsDiff = {
    /**
     * @param {Function} item
     * @return {undefined}
     */
    registerHandler : function(item) {
      beginswith.push(item);
    },
    /**
     * @param {Function} item
     * @return {undefined}
     */
    registerFallbackHandler : function(item) {
      caseSensitive.push(item);
    }
  };
  dojo.listen(document.documentElement, "mousedown", update);
  dojo.listen(document.documentElement, "keydown", update);
  module.exports = JsDiff;
}, null);
__d("MultiBootstrapDataSource", ["DataSource"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, b) {
  /**
   * @param {string} node
   * @return {undefined}
   */
  function a(node) {
    this._bootstrapEndpoints = node.bootstrapEndpoints;
    b.call(this, node);
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
  /** @type {function (string): undefined} */
  a.prototype.constructor = a;
  /** @type {Function} */
  a.__superConstructor__ = b;
  /**
   * @return {undefined}
   */
  a.prototype.bootstrapWithoutToken = function() {
    /** @type {number} */
    var x = 0;
    for (;x < this._bootstrapEndpoints.length;x++) {
      this.fetch(this._bootstrapEndpoints[x].endpoint, this._bootstrapEndpoints[x].data || {}, {
        bootstrap : true
      });
    }
  };
  /** @type {function (string): undefined} */
  module.exports = a;
}, null);
__d("goOrReplace", ["URI"], function(elem, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, ctor) {
  /**
   * @param {string} element
   * @param {string} value
   * @param {?} project
   * @return {undefined}
   */
  function test(element, value, project) {
    var result = new ctor(value);
    var options = elem.Quickling;
    if (element.pathname == "/" && (result.getPath() != "/" && (options && (options.isActive() && options.isPageActive(result))))) {
      /** @type {({q: string}|{})} */
      var pdataCur = element.search ? {} : {
        q : ""
      };
      result = (new ctor).setPath("/").setQueryData(pdataCur).setFragment(result.getUnqualifiedURI().toString());
      value = result.toString();
    }
    if (project) {
      element.replace(value);
    } else {
      if (element.href == value) {
        element.reload();
      } else {
        /** @type {string} */
        element.href = value;
      }
    }
  }
  /** @type {function (string, string, ?): undefined} */
  module.exports = test;
}, null);
__d("LayerHideOnEscape", ["Event", "Keys", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, selfObj, event, fn) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function self(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  self.prototype.enable = function() {
    this._subscription = this._layer.subscribe("key", this._handle.bind(this));
  };
  /**
   * @return {undefined}
   */
  self.prototype.disable = function() {
    this._subscription.unsubscribe();
    /** @type {null} */
    this._subscription = null;
  };
  /**
   * @param {?} res
   * @param {?} key
   * @return {?}
   */
  self.prototype._handle = function(res, key) {
    if (selfObj.getKeyCode(key) === event.ESC) {
      this._layer.hide();
      return false;
    }
  };
  fn(self.prototype, {
    _subscription : null
  });
  /** @type {function (string): undefined} */
  context.exports = self;
}, null);
__d("ScrollAwareDOM", ["ArbiterMixin", "CSS", "DOM", "DOMDimensions", "DOMQuery", "HTML", "Vector", "ViewportBounds", "copyProperties", "getElementPosition", "isAsyncScrollQuery"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, index, elem, self, dom, dataAndEvents, type, deepDataAndEvents, el, replace, jQuery, test) {
  /**
   * @param {number} recurring
   * @param {?} wrapper
   * @return {?}
   */
  function insertAction(recurring, wrapper) {
    return function() {
      /** @type {Arguments} */
      var args = arguments;
      obj.monitor(arguments[recurring], function() {
        wrapper.apply(null, args);
      });
    };
  }
  /**
   * @param {?} d
   * @return {?}
   */
  function select(d) {
    if (!(d instanceof Array)) {
      /** @type {Array} */
      d = [d];
    }
    /** @type {number} */
    var j = 0;
    for (;j < d.length;j++) {
      var value = type.replaceJSONWrapper(d[j]);
      if (value instanceof type) {
        return value.getRootNode();
      } else {
        if (self.isNode(value)) {
          return value;
        }
      }
    }
    return null;
  }
  /**
   * @param {?} b
   * @return {?}
   */
  function fn(b) {
    return jQuery(b).y > el.getTop();
  }
  /**
   * @param {?} element
   * @return {?}
   */
  function css(element) {
    var xDelta = jQuery(element).y + dom.getElementDimensions(element).height;
    /** @type {number} */
    var yDelta = dom.getViewportDimensions().height - el.getBottom();
    return xDelta >= yDelta;
  }
  var obj = replace({
    /**
     * @param {?} target
     * @param {Function} what
     * @return {?}
     */
    monitor : function(target, what) {
      if (test()) {
        return what();
      }
      var elem = select(target);
      if (elem) {
        /** @type {boolean} */
        var z = !!elem.offsetParent;
        if (z && (fn(elem) || css(elem))) {
          return what();
        }
        var source = deepDataAndEvents.getDocumentDimensions();
        var monitor = what();
        if (z || elem.offsetParent && !fn(elem)) {
          var delayedStream = deepDataAndEvents.getDocumentDimensions().sub(source);
          var data = {
            delta : delayedStream,
            target : elem
          };
          if (obj.inform("scroll", data) !== false) {
            delayedStream.scrollElementBy(dataAndEvents.getDocumentScrollElement());
          }
        }
        return monitor;
      } else {
        return what();
      }
    },
    /**
     * @param {RegExp} regex
     * @param {string} value
     * @return {?}
     */
    replace : function(regex, value) {
      var name = select(value);
      if (!name || elem.hasClass(name, "hidden_elem")) {
        /** @type {RegExp} */
        name = regex;
      }
      return obj.monitor(name, function() {
        self.replace(regex, value);
      });
    },
    prependContent : insertAction(1, self.prependContent),
    insertAfter : insertAction(1, self.insertAfter),
    insertBefore : insertAction(1, self.insertBefore),
    setContent : insertAction(0, self.setContent),
    appendContent : insertAction(1, self.appendContent),
    remove : insertAction(0, self.remove),
    empty : insertAction(0, self.empty)
  }, index);
  module.exports = obj;
}, null);
__d("debounce", ["debounceCore"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} attribute
   * @param {?} value
   * @param {?} v
   * @param {?} pass
   * @return {?}
   */
  function attr(attribute, value, v, pass) {
    if (value == null) {
      /** @type {number} */
      value = 100;
    }
    /**
     * @param {?} fnc
     * @param {?} time
     * @param {?} req
     * @return {?}
     */
    var get = function(fnc, time, req) {
      return setTimeout(fnc, time, req, !pass);
    };
    return callback(attribute, value, v, get);
  }
  /** @type {function (string, ?, ?, ?): ?} */
  module.exports = attr;
}, null);
__d("debounceAcrossTransitions", ["debounce"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {string} attribute
   * @param {string} value
   * @param {?} v
   * @return {?}
   */
  function attr(attribute, value, v) {
    return callback(attribute, value, v, true);
  }
  /** @type {function (string, string, ?): ?} */
  module.exports = attr;
}, null);
__d("ModalLayer", ["Arbiter", "ArbiterMixin", "CSS", "DataStore", "DOM", "DOMDimensions", "DOMQuery", "Event", "ScrollAwareDOM", "Style", "UserAgent_DEPRECATED", "Vector", "copyProperties", "csx", "cx", "debounceAcrossTransitions", "isAsyncScrollQuery", "removeFromArray", "setTimeoutAcrossTransitions"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, m, srcFiles, target, data_user, dom, r, $, Event, view, context, bowser, widget, cb, opt_attributes,
matcherFunction, $timeout, done, $sanitize, Application) {
  /**
   * @return {?}
   */
  function jQuery() {
    if (!jQ) {
      jQ = $.scry(document.body, "._li")[0];
    }
    return jQ;
  }
  /**
   * @param {?} elem
   * @return {undefined}
   */
  function init(elem) {
    var data = {
      position : widget.getScrollPosition()
    };
    /** @type {number} */
    var yPos = elem.offsetTop - data.position.y;
    target.addClass(elem, "_31e");
    context.set(elem, "top", yPos + "px");
    m.inform("reflow");
    data.listener = view.subscribe("scroll", function(dataAndEvents, e) {
      if ($.contains(elem, e.target)) {
        /** @type {number} */
        var yPos = elem.offsetTop - e.delta.y;
        context.set(elem, "top", yPos + "px");
        data.position = data.position.add(e.delta);
        return false;
      }
    });
    data_user.set(elem, "ModalLayerData", data);
  }
  /**
   * @param {Element} elem
   * @param {boolean} keepData
   * @return {undefined}
   */
  function setup(elem, keepData) {
    var a = data_user.get(elem, "ModalLayerData");
    if (a) {
      /**
       * @return {undefined}
       */
      var setup = function() {
        target.removeClass(elem, "_31e");
        context.set(elem, "top", "");
        if (keepData) {
          var r = $.getDocumentScrollElement();
          r.scrollTop = a.position.y;
          if (r.scrollTop !== a.position.y) {
            r.scrollTop = a.position.y + 1;
            r.scrollTop = a.position.y;
          }
        }
        m.inform("reflow");
        a.listener.unsubscribe();
        /** @type {null} */
        a.listener = null;
        data_user.remove(elem, "ModalLayerData");
      };
      if (keepData && done()) {
        var el = dom.create("div", {
          className : "_42w"
        });
        context.set(el, "height", elem.offsetHeight + "px");
        dom.appendContent(document.body, el);
        var container = $.getDocumentScrollElement();
        container.scrollTop = a.position.y;
        /** @type {boolean} */
        keepData = false;
        setTimeout(function() {
          setup();
          dom.remove(el);
        }, 0);
      } else {
        setup();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function reset() {
    var self = jQuery();
    if (!target.hasClass(self, "_31e")) {
      init(self);
    }
  }
  /**
   * @return {undefined}
   */
  function trigger() {
    if (!ca.length) {
      setup(jQuery(), true);
    }
  }
  /**
   * @return {undefined}
   */
  function resize() {
    /** @type {number} */
    var i = ca.length;
    for (;i--;) {
      var c = ca[i];
      var pdataCur = c.getLayerRoot();
      update(pdataCur, "");
      var el = c.getLayerContentRoot();
      var width = el.offsetWidth + r.measureElementBox(el, "width", 0, 0, 1);
      update(pdataCur, width);
    }
  }
  /**
   * @param {?} data
   * @param {string} width
   * @return {undefined}
   */
  function update(data, width) {
    context.set(data, "min-width", width + (width ? "px" : ""));
  }
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function me(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /** @type {Array} */
  var ca = [];
  /** @type {null} */
  var n = null;
  /** @type {null} */
  var options = null;
  /** @type {null} */
  var jQ = null;
  /**
   * @return {undefined}
   */
  me.prototype.enable = function() {
    if (!jQuery()) {
      return;
    }
    this._subscription = this._layer.subscribe(["show", "hide"], function(mode) {
      if (mode == "show") {
        this._addModal();
      } else {
        this._removeModal();
      }
    }.bind(this));
    if (this._layer.isShown()) {
      this._addModal();
    }
  };
  /**
   * @return {undefined}
   */
  me.prototype.disable = function() {
    if (!jQuery()) {
      return;
    }
    this._subscription.unsubscribe();
    /** @type {null} */
    this._subscription = null;
    if (this._layer.isShown()) {
      this._removeModal();
    }
  };
  /**
   * @return {undefined}
   */
  me.prototype._addModal = function() {
    var li = this.getLayerRoot();
    target.addClass(li, "_3qw");
    this._wash = dom.create("div", {
      className : "_3ixn"
    });
    dom.prependContent(li, this._wash);
    var c = ca[ca.length - 1];
    if (c) {
      init(c.getLayerRoot());
    } else {
      reset();
    }
    var de = $.getDocumentScrollElement();
    /** @type {number} */
    de.scrollTop = 0;
    if (!ca.length) {
      var listener = $timeout(resize, 100);
      n = Event.listen(window, "resize", listener);
      options = m.subscribe("reflow", listener);
    }
    ca.push(this);
    me.inform("show", this);
    setTimeout(resize, 0);
  };
  /**
   * @return {undefined}
   */
  me.prototype._removeModal = function() {
    var id = this.getLayerRoot();
    target.removeClass(id, "_3qw");
    dom.remove(this._wash);
    /** @type {null} */
    this._wash = null;
    update(id, "");
    /** @type {boolean} */
    var key = this === ca[ca.length - 1];
    $sanitize(ca, this);
    if (!ca.length) {
      n.remove();
      /** @type {null} */
      n = null;
      options.unsubscribe();
      /** @type {null} */
      options = null;
    }
    Application(function() {
      var c = ca[ca.length - 1];
      if (c) {
        setup(c.getLayerRoot(), key);
        me.inform("show", c);
      } else {
        trigger();
        me.inform("hide", this);
      }
      if (ca.length) {
        setTimeout(resize, 0);
      }
    }.bind(this), 400);
  };
  /**
   * @return {?}
   */
  me.prototype.getLayerRoot = function() {
    return this._layer.getRoot();
  };
  /**
   * @return {?}
   */
  me.prototype.getLayerContentRoot = function() {
    return this._layer.getContentRoot();
  };
  /**
   * @return {?}
   */
  me.getTopmostModalLayer = function() {
    return ca[ca.length - 1];
  };
  /**
   * @param {Function} $sanitize
   * @return {undefined}
   */
  me.unfixed = function($sanitize) {
    if (bowser.chrome()) {
      var self = jQuery();
      if (self && target.hasClass(self, "_31e")) {
        var first = $.getDocumentScrollElement();
        var i = first.scrollTop;
        setup(self, true);
        $sanitize();
        init(self);
        first.scrollTop = i;
        return;
      }
    }
    $sanitize();
  };
  cb(me, srcFiles);
  /** @type {function (string): undefined} */
  module.exports = me;
}, null);
__d("computeRelativeURI", ["URI", "isFacebookURI", "isEmpty"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Obj, values, done) {
  /**
   * @param {string} query
   * @param {string} elements
   * @return {?}
   */
  function search(query, elements) {
    if (!elements) {
      return query;
    }
    if (elements.charAt(0) == "/") {
      return elements;
    }
    var arr = query.split("/").slice(0, -1);
    arr[0] !== "";
    elements.split("/").forEach(function(chunk) {
      if (!(chunk == ".")) {
        if (chunk == "..") {
          if (arr.length > 1) {
            arr = arr.slice(0, -1);
          }
        } else {
          arr.push(chunk);
        }
      }
    });
    return arr.join("/");
  }
  /**
   * @param {string} node
   * @param {Object} obj
   * @return {?}
   */
  function init(node, obj) {
    var self = new Obj;
    /** @type {Object} */
    var o = obj;
    node = new Obj(node);
    obj = new Obj(obj);
    if (obj.getDomain() && !values(obj)) {
      return o;
    }
    /** @type {string} */
    var current = node;
    /** @type {Array} */
    var asserterNames = ["Protocol", "Domain", "Port", "Path", "QueryData", "Fragment"];
    asserterNames.forEach(function(func) {
      /** @type {boolean} */
      var s = func == "Path" && current === node;
      if (s) {
        self.setPath(search(node.getPath(), obj.getPath()));
      }
      if (!done(obj["get" + func]())) {
        current = obj;
      }
      if (!s) {
        self["set" + func](current["get" + func]());
      }
    });
    return self;
  }
  /** @type {function (string, Object): ?} */
  module.exports = init;
}, null);
__d("PageTransitions", ["Arbiter", "Bootloader", "DOMQuery", "DOMScroll", "Env", "Event", "Form", "HistoryManager", "JSLogger", "LayerHideOnEscape", "LinkController", "ModalLayer", "OnloadHooks", "Parent", "React", "URI", "UserAgent_DEPRECATED", "Vector", "areEqual", "clickRefAction", "computeRelativeURI", "copyProperties", "escapeJSQuotes", "ge", "goOrReplace", "invariant", "isInIframe", "setTimeoutAcrossTransitions", "fbt"], function(event, opt_attributes, matcherFunction, execResult, context,
opt_keys, utils, exports, test, nv, ignoreMethodDoesntExist, Event, that, filter, activator, textAlt, gridStore, keepData, dataAndEvents, _, dom, forEach, Env, widget, $sanitize, $, fn, defineProperty, ready, domReady, callback, Application, error, fix, deepDataAndEvents) {
  /**
   * @param {?} one
   * @param {?} fn
   * @return {undefined}
   */
  function on(one, fn) {
    params[one.getUnqualifiedURI()] = fn;
  }
  /**
   * @param {?} ar
   * @return {?}
   */
  function indexOf(ar) {
    return params[ar.getUnqualifiedURI()];
  }
  /**
   * @param {?} x
   * @return {undefined}
   */
  function f(x) {
    delete params[x.getUnqualifiedURI()];
  }
  /**
   * @param {Array} d
   * @return {undefined}
   */
  function d(d) {
    /** @type {Array} */
    e = d;
    fix(function() {
      /** @type {null} */
      e = null;
    }, 0);
  }
  /**
   * @param {Event} event
   * @return {undefined}
   */
  function handler(event) {
    if (e) {
      if (!event.isDefaultPrevented()) {
        done(e);
        jQuery.lookBusy(e);
        self.go(e.getAttribute("href"));
      }
      event.prevent();
    } else {
      name = event.getTarget();
      fix(function() {
        /** @type {null} */
        name = null;
      }, 0);
    }
  }
  /**
   * @param {Element} e
   * @return {undefined}
   */
  function done(e) {
    var key = e.getAttribute("href");
    var x = fn(self._most_recent_uri.getQualifiedURI(), key).toString();
    if (key != x) {
      e.setAttribute("href", x);
    }
  }
  /**
   * @param {Event} event
   * @return {undefined}
   */
  function update(event) {
    var attribute = event.getTarget();
    if (that.getAttribute(attribute, "rel") || that.getAttribute(attribute, "target")) {
      return;
    }
    $("form", attribute, event).set_namespace("page_transition");
    var util = new forEach(that.getAttribute(attribute, "action") || "");
    var callback = fn(self._most_recent_uri, util);
    attribute.setAttribute("action", callback.toString());
    if ((that.getAttribute(attribute, "method") || "GET").toUpperCase() === "GET") {
      var scope = that.serialize(attribute);
      var info = name;
      if (info && ((test.isNodeOfType(info, "input") && info.type === "submit" || (info = _.byTag(info, "button"))) && info.name)) {
        scope[info.name] = info.value;
      }
      self.go(callback.addQueryData(scope));
      event.kill();
    }
  }
  var params = {};
  /** @type {null} */
  var name = null;
  /** @type {null} */
  var e = null;
  var self = {
    _transition_handlers : [],
    _completion_callbacks : [],
    _scroll_locked : false,
    /**
     * @return {?}
     */
    isInitialized : function() {
      return!!self._initialized;
    },
    /**
     * @return {?}
     */
    _init : function() {
      if (!ignoreMethodDoesntExist.ALLOW_TRANSITION_IN_IFRAME && error()) {
        return;
      }
      if (self._initialized) {
        return self;
      }
      /** @type {boolean} */
      self._initialized = true;
      var history = forEach.getRequestURI(false);
      var tmp = history.getUnqualifiedURI();
      var cur = forEach(tmp).setFragment(null);
      var selector = tmp.getFragment();
      if (selector.charAt(0) === "!" && cur.toString() === selector.substr(1)) {
        tmp = cur;
      }
      defineProperty(self, {
        _current_uri : tmp,
        _most_recent_uri : tmp,
        _next_uri : tmp
      });
      var fn;
      if (history.getFragment().startsWith("/")) {
        fn = history.getFragment();
      } else {
        fn = tmp;
      }
      filter.init().setCanonicalLocation("#" + fn).registerURIHandler(self._historyManagerHandler);
      gridStore.registerFallbackHandler(d);
      Event.listen(document, "click", handler, Event.Priority._BUBBLE);
      Event.listen(document, "submit", update, Event.Priority._BUBBLE);
      Event.listen(window, "scroll", function() {
        if (!self._scroll_locked) {
          on(self._current_uri, widget.getScrollPosition());
        }
      });
      return self;
    },
    /**
     * @param {Function} handler
     * @param {number} address
     * @return {undefined}
     */
    registerHandler : function(handler, address) {
      self._init();
      address = address || 5;
      if (!self._transition_handlers[address]) {
        /** @type {Array} */
        self._transition_handlers[address] = [];
      }
      self._transition_handlers[address].push(handler);
    },
    /**
     * @param {?} handler
     * @param {number} ev
     * @return {undefined}
     */
    removeHandler : function(handler, ev) {
      self._init();
      ev = ev || 5;
      /** @type {number} */
      var pos = -1;
      if (self._transition_handlers[ev]) {
        pos = self._transition_handlers[ev].indexOf(handler);
      }
      if (pos > -1) {
        self._transition_handlers[ev].splice(pos, 1);
      }
    },
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    getCurrentURI : function(dataAndEvents) {
      if (!self._current_uri && !dataAndEvents) {
        return new forEach(self._most_recent_uri);
      }
      return new forEach(self._current_uri);
    },
    /**
     * @return {?}
     */
    getMostRecentURI : function() {
      return new forEach(self._most_recent_uri);
    },
    /**
     * @param {string} index
     * @param {boolean} arg
     * @return {undefined}
     */
    go : function(index, arg) {
      var buf = (new forEach(index)).removeQueryData("quickling").getQualifiedURI();
      activator.create("pagetransition").debug("go", {
        uri : buf.toString()
      });
      f(buf);
      if (!arg) {
        $("uri", {
          href : buf.toString()
        }, null, "INDIRECT");
      }
      jQuery.lookBusy();
      self._loadPage(buf, function(dataAndEvents) {
        if (dataAndEvents) {
          keepData.unfixed(function() {
            filter.go(buf.toString(), false, arg);
          });
        } else {
          callback(window.location, buf, arg);
        }
      });
    },
    /**
     * @param {string} reply
     * @return {?}
     */
    _historyManagerHandler : function(reply) {
      if (reply.charAt(0) != "/") {
        return false;
      }
      $("h", {
        href : reply
      });
      self._loadPage(new forEach(reply), function(dataAndEvents) {
        if (!dataAndEvents) {
          callback(window.location, reply, true);
        }
      });
      return true;
    },
    /**
     * @param {string} data
     * @param {Function} done
     * @return {undefined}
     */
    _loadPage : function(data, done) {
      if (forEach(data).getFragment() && $sanitize(forEach(data).setFragment(null).getQualifiedURI(), forEach(self._current_uri).setFragment(null).getQualifiedURI())) {
        utils.inform("pre_page_fragment_transition", {
          from : forEach(self._current_uri).getFragment(),
          to : forEach(data).getFragment()
        });
        if (self.restoreScrollPosition(data)) {
          self._current_uri = self._most_recent_uri = data;
          jQuery.stopLookingBusy();
          utils.inform("page_fragment_transition", {
            fragment : forEach(data).getFragment()
          });
          return;
        }
      }
      var v;
      if (self._current_uri) {
        v = indexOf(self._current_uri);
      }
      /**
       * @return {undefined}
       */
      var animate = function() {
        if (v && self._current_uri) {
          on(self._current_uri, v);
        }
        /** @type {null} */
        self._current_uri = null;
        /** @type {string} */
        self._next_uri = data;
        if (v) {
          nv.scrollTo(v, false);
        }
        /** @type {boolean} */
        self._scroll_locked = true;
        var json = self._handleTransition(data);
        if (done) {
          done(json);
        }
      };
      var len = self._next_uri;
      /** @type {string} */
      self._next_uri = data;
      var def = dataAndEvents.runHooks("onbeforeleavehooks");
      self._next_uri = len;
      if (def) {
        jQuery.stopLookingBusy();
        self._warnBeforeLeaving(def, animate);
      } else {
        animate();
      }
    },
    /**
     * @param {string} e
     * @return {?}
     */
    _handleTransition : function(e) {
      window.onbeforeleavehooks = void 0;
      jQuery.lookBusy();
      if (!e.isSameOrigin()) {
        return false;
      }
      var pageId;
      var related = event.AsyncRequest;
      if (related) {
        pageId = related.getLastID();
      }
      utils.inform("pre_page_transition", {
        from : self.getMostRecentURI(),
        to : e
      });
      /** @type {number} */
      var moduleName = self._transition_handlers.length - 1;
      for (;moduleName >= 0;--moduleName) {
        var listeners = self._transition_handlers[moduleName];
        if (!listeners) {
          continue;
        }
        /** @type {number} */
        var i = listeners.length - 1;
        for (;i >= 0;--i) {
          if (listeners[i](e) === true) {
            var data = {
              sender : this,
              uri : e,
              id : pageId
            };
            try {
              utils.inform("page_transition", data);
            } catch (cb) {
            }
            return true;
          } else {
            listeners.splice(i, 1);
          }
        }
      }
      return false;
    },
    /**
     * @return {undefined}
     */
    unifyURI : function() {
      self._current_uri = self._most_recent_uri = self._next_uri;
    },
    /**
     * @param {?} inSender
     * @return {undefined}
     */
    transitionComplete : function(inSender) {
      /** @type {boolean} */
      self._scroll_locked = false;
      self._executeCompletionCallbacks();
      jQuery.stopLookingBusy();
      self.unifyURI();
      if (!inSender) {
        self.restoreScrollPosition(self._current_uri);
      }
      try {
        if (document.activeElement && document.activeElement.nodeName === "A") {
          document.activeElement.blur();
        }
      } catch (wa) {
      }
    },
    /**
     * @return {undefined}
     */
    _executeCompletionCallbacks : function() {
      if (self._completion_callbacks.length > 0) {
        /** @type {Array} */
        var cs = self._completion_callbacks;
        /** @type {Array} */
        self._completion_callbacks = [];
        cs.forEach(function($sanitize) {
          return $sanitize();
        });
      }
    },
    /**
     * @param {?} spaceName
     * @return {undefined}
     */
    registerCompletionCallback : function(spaceName) {
      self._completion_callbacks.push(spaceName);
    },
    /**
     * @param {?} dataAndEvents
     * @param {string} _index
     * @return {undefined}
     */
    rewriteCurrentURI : function(dataAndEvents, _index) {
      /** @type {Array} */
      var codeSegments = self._transition_handlers;
      /** @type {number} */
      var i = codeSegments.length || 1;
      /** @type {boolean} */
      var iframe = false;
      self.registerHandler(function() {
        if (dataAndEvents == self.getMostRecentURI().getUnqualifiedURI().toString()) {
          self.transitionComplete();
          return true;
        }
        /** @type {boolean} */
        iframe = true;
      }, i);
      self.go(_index, true);
      Application(codeSegments.length === i + 1 && codeSegments[i].length === (iframe ? 0 : 1));
      /** @type {number} */
      codeSegments.length = i;
    },
    /**
     * @param {?} content
     * @param {Function} method
     * @return {undefined}
     */
    _warnBeforeLeaving : function(content, method) {
      exports.loadModules(["DialogX", "XUIDialogTitle.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogFooter.react", "XUIGrayText.react"], function(List, value, tag, td, script, img) {
        var self = new List({
          width : 450,
          addedBehaviors : [textAlt]
        }, dom.createElement("div", null, dom.createElement(value, {
          showCloseButton : false
        }, "Are You Sure You Want To Leave This Page?"), dom.createElement(tag, null, dom.createElement(img, {
          shade : "medium",
          size : "medium"
        }, content)), dom.createElement(script, null, dom.createElement(td, {
          action : "cancel",
          label : "Stay on This Page"
        }), dom.createElement(td, {
          action : "confirm",
          use : "confirm",
          label : "Leave This Page"
        }))));
        self.subscribe("confirm", function() {
          self.hide();
          method();
        });
        self.show();
      });
    },
    /**
     * @param {?} collection
     * @return {?}
     */
    restoreScrollPosition : function(collection) {
      /**
       * @param {?} f
       * @return {?}
       */
      function tryIt(f) {
        if (!f) {
          return null;
        }
        /** @type {string} */
        var errmsg = "a[name='" + ready(f) + "']";
        return test.scry(document.body, errmsg)[0] || domReady(f);
      }
      var io = indexOf(collection);
      if (io) {
        nv.scrollTo(io, false);
        return true;
      }
      var element = tryIt(forEach(collection).getFragment());
      if (element) {
        var v = widget.getElementPosition(element);
        /** @type {number} */
        v.x = 0;
        nv.scrollTo(v);
        return true;
      }
      return false;
    }
  };
  var jQuery = window._BusyUIManager || {
    _looking_busy : false,
    _original_cursors : [],
    /**
     * @param {Element} arg
     * @return {undefined}
     */
    lookBusy : function(arg) {
      if (arg) {
        jQuery._giveProgressCursor(arg);
      }
      if (jQuery._looking_busy) {
        return;
      }
      /** @type {boolean} */
      jQuery._looking_busy = true;
      jQuery._giveProgressCursor(document.documentElement);
    },
    /**
     * @return {undefined}
     */
    stopLookingBusy : function() {
      if (!jQuery._looking_busy) {
        return;
      }
      /** @type {boolean} */
      jQuery._looking_busy = false;
      for (;jQuery._original_cursors.length;) {
        var fields = jQuery._original_cursors.pop();
        var field = fields[0];
        var input = fields[1];
        if (field.style) {
          field.style.cursor = input || "";
        }
      }
    },
    /**
     * @param {Element} field
     * @return {undefined}
     */
    _giveProgressCursor : function(field) {
      if (!Env.webkit()) {
        jQuery._original_cursors.push([field, field.style.cursor]);
        /** @type {string} */
        field.style.cursor = "progress";
      }
    }
  };
  context.exports = self;
  event.PageTransitions = self;
}, null);
__d("ReactRenderer", ["React", "Run", "$"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, console, $scope, callback) {
  /**
   * @param {Function} s
   * @param {Object} opt
   * @param {Object} item
   * @return {?}
   */
  function getIndex(s, opt, item) {
    var index = console.constructAndRenderComponent(s, opt, item);
    $scope.onLeave(function() {
      console.unmountComponentAtNode(item);
    });
    return index;
  }
  /**
   * @param {?} node
   * @param {?} name
   * @param {Object} fn
   * @return {?}
   */
  function post(node, name, fn) {
    return console.constructAndRenderComponent(node, name, fn);
  }
  /**
   * @param {Function} selector
   * @param {Object} opt
   * @param {?} data
   * @return {?}
   */
  function setup(selector, opt, data) {
    return getIndex(selector, opt, callback(data));
  }
  /**
   * @param {?} value
   * @param {?} name
   * @param {?} val
   * @return {?}
   */
  function contains(value, name, val) {
    return post(value, name, callback(val));
  }
  module.exports = {
    /** @type {function (Function, Object, Object): ?} */
    constructAndRenderComponent : getIndex,
    /** @type {function (Function, Object, ?): ?} */
    constructAndRenderComponentByID : setup,
    /** @type {function (?, ?, Object): ?} */
    constructAndRenderComponentAcrossTransitions : post,
    /** @type {function (?, ?, ?): ?} */
    constructAndRenderComponentByIDAcrossTransitions : contains
  };
}, null);
__d("Rect", ["Vector", "$", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, Token, toString, t) {
  /**
   * @param {Object} str
   * @param {number} value
   * @param {number} index
   * @param {?} val
   * @param {?} err
   * @return {?}
   */
  function self(str, value, index, val, err) {
    if (arguments.length === 1) {
      if (str instanceof self) {
        return str;
      }
      if (str instanceof Token) {
        return new self(str.y, str.x, str.y, str.x, str.domain);
      }
      return self.getElementBounds(toString(str));
    }
    t(this, {
      t : str,
      r : value,
      b : index,
      l : val,
      domain : err || "pure"
    });
  }
  /**
   * @return {?}
   */
  self.prototype.w = function() {
    return this.r - this.l;
  };
  /**
   * @return {?}
   */
  self.prototype.h = function() {
    return this.b - this.t;
  };
  /**
   * @return {?}
   */
  self.prototype.toString = function() {
    return "((" + this.l + ", " + this.t + "), (" + this.r + ", " + this.b + "))";
  };
  /**
   * @param {Object} value
   * @return {?}
   */
  self.prototype.contains = function(value) {
    value = (new self(value)).convertTo(this.domain);
    var rgb = this;
    return rgb.l <= value.l && (rgb.r >= value.r && (rgb.t <= value.t && rgb.b >= value.b));
  };
  /**
   * @param {Object} color
   * @return {?}
   */
  self.prototype.isEqualTo = function(color) {
    return this.t === color.t && (this.r === color.r && (this.b === color.b && (this.l === color.l && this.domain === color.domain)));
  };
  /**
   * @param {Object} x
   * @param {number} v2
   * @return {?}
   */
  self.prototype.add = function(x, v2) {
    if (arguments.length == 1) {
      if (x.domain != "pure") {
        x = x.convertTo(this.domain);
      }
      return this.add(x.x, x.y);
    }
    /** @type {number} */
    var size = parseFloat(x);
    /** @type {number} */
    var n2 = parseFloat(v2);
    return new self(this.t + n2, this.r + size, this.b + n2, this.l + size, this.domain);
  };
  /**
   * @param {?} vector
   * @param {?} subscript
   * @return {?}
   */
  self.prototype.sub = function(vector, subscript) {
    if (arguments.length == 1) {
      return this.add(vector.mul(-1));
    } else {
      return this.add(-vector, -subscript);
    }
  };
  /**
   * @param {number} angleDegrees
   * @return {?}
   */
  self.prototype.rotateAroundOrigin = function(angleDegrees) {
    var e = this.getCenter().rotate(angleDegrees * Math.PI / 2);
    var w;
    var h;
    if (angleDegrees % 2) {
      w = this.h();
      h = this.w();
    } else {
      w = this.w();
      h = this.h();
    }
    /** @type {number} */
    var y = e.y - h / 2;
    /** @type {number} */
    var x = e.x - w / 2;
    var y2 = y + h;
    var x2 = x + w;
    return new self(y, x2, y2, x, this.domain);
  };
  /**
   * @param {Object} fc
   * @return {?}
   */
  self.prototype.boundWithin = function(fc) {
    /** @type {number} */
    var s = 0;
    /** @type {number} */
    var v = 0;
    if (this.l < fc.l) {
      /** @type {number} */
      s = fc.l - this.l;
    } else {
      if (this.r > fc.r) {
        /** @type {number} */
        s = fc.r - this.r;
      }
    }
    if (this.t < fc.t) {
      /** @type {number} */
      v = fc.t - this.t;
    } else {
      if (this.b > fc.b) {
        /** @type {number} */
        v = fc.b - this.b;
      }
    }
    return this.add(s, v);
  };
  /**
   * @return {?}
   */
  self.prototype.getCenter = function() {
    return new Token(this.l + this.w() / 2, this.t + this.h() / 2, this.domain);
  };
  /**
   * @return {?}
   */
  self.prototype.getTop = function() {
    return this.t;
  };
  /**
   * @return {?}
   */
  self.prototype.getLeft = function() {
    return this.l;
  };
  /**
   * @return {?}
   */
  self.prototype.getPositionVector = function() {
    return new Token(this.l, this.t, this.domain);
  };
  /**
   * @return {?}
   */
  self.prototype.getDimensionVector = function() {
    return new Token(this.w(), this.h(), "pure");
  };
  /**
   * @param {string} b
   * @return {?}
   */
  self.prototype.convertTo = function(b) {
    if (this.domain == b) {
      return this;
    }
    if (b == "pure") {
      return new self(this.t, this.r, this.b, this.l, "pure");
    }
    if (this.domain == "pure") {
      return new self(0, 0, 0, 0);
    }
    var bp = (new Token(this.l, this.t, this.domain)).convertTo(b);
    return new self(bp.y, bp.x + this.w(), bp.y + this.h(), bp.x, b);
  };
  /**
   * @param {string} text
   * @return {?}
   */
  self.deserialize = function(text) {
    var components = text.split(":");
    return new self(parseFloat(components[1]), parseFloat(components[2]), parseFloat(components[3]), parseFloat(components[0]));
  };
  /**
   * @param {Object} event
   * @param {?} scroll
   * @return {?}
   */
  self.newFromVectors = function(event, scroll) {
    return new self(event.y, event.x + scroll.x, event.y + scroll.y, event.x, event.domain);
  };
  /**
   * @param {Element} element
   * @return {?}
   */
  self.getElementBounds = function(element) {
    return self.newFromVectors(Token.getElementPosition(element), Token.getElementDimensions(element));
  };
  /**
   * @return {?}
   */
  self.getViewportBounds = function() {
    return self.newFromVectors(Token.getScrollPosition(), Token.getViewportDimensions());
  };
  /**
   * @return {?}
   */
  self.getViewportWithoutScrollbarsBounds = function() {
    return self.newFromVectors(Token.getScrollPosition(), Token.getViewportWithoutScrollbarDimensions());
  };
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  self.minimumBoundingBox = function(codeSegments) {
    var me = new self(Math.min(), Math.max(), Math.max(), Math.min());
    var f;
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      f = codeSegments[i];
      /** @type {number} */
      me.t = Math.min(me.t, f.t);
      /** @type {number} */
      me.r = Math.max(me.r, f.r);
      /** @type {number} */
      me.b = Math.max(me.b, f.b);
      /** @type {number} */
      me.l = Math.min(me.l, f.l);
    }
    return me;
  };
  /** @type {function (Object, number, number, ?, ?): ?} */
  context.exports = self;
}, null);
__d("TabbableElements", ["Style", "createArrayFromMixed"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, domStyle, require) {
  /**
   * @param {Element} element
   * @return {?}
   */
  function process(element) {
    if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
      return true;
    }
    switch(element.tagName) {
      case "A":
        return element.href && element.rel != "ignore";
      case "INPUT":
        return element.type != "hidden" && (element.type != "file" && !element.disabled);
      case "BUTTON":
      ;
      case "SELECT":
      ;
      case "TEXTAREA":
        return!element.disabled;
    }
    return false;
  }
  /**
   * @param {Object} elem
   * @return {?}
   */
  function close(elem) {
    if (elem.offsetHeight === 0 && elem.offsetWidth === 0) {
      return false;
    }
    for (;elem !== document && domStyle.get(elem, "visibility") != "hidden";) {
      elem = elem.parentNode;
    }
    return elem === document;
  }
  var request = {
    /**
     * @param {Element} d
     * @return {?}
     */
    find : function(d) {
      var url = require(d.getElementsByTagName("*"));
      return url.filter(request.isTabbable);
    },
    /**
     * @param {Element} selector
     * @return {?}
     */
    isTabbable : function(selector) {
      return process(selector) && close(selector);
    }
  };
  module.exports = request;
}, null);
__d("Toggler", ["Arbiter", "ArbiterMixin", "ContextualThing", "CSS", "DataStore", "DOM", "DOMQuery", "Event", "Focus", "Keys", "TabbableElements", "arrayContains", "copyProperties", "createArrayFromMixed", "cx", "emptyFunction", "ge", "getContextualParent", "getObjectValues", "setImmediate", "mixin"], function(exports, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, context, textAlt, app, data, _, $parent, data_user, dom, opt_eventHandler, m, ret, event, rule, callback, next, merge, keepData,
Server, attr, URI, show, removeClass, fun) {
  /**
   * @return {undefined}
   */
  function clearMenus() {
    if (!da) {
      /** @type {boolean} */
      da = true;
      removeClass(function() {
        /** @type {boolean} */
        da = false;
      });
    }
  }
  /**
   * @return {undefined}
   */
  function init() {
    /** @type {Function} */
    init = Server;
    m.listen(document.documentElement, "click", function(resolver) {
      if (da) {
        return;
      }
      var a = resolver.getTarget();
      failures.forEach(function($scope) {
        $scope.clickedTarget = a;
        if ($scope.active) {
          if (!$scope.sticky) {
            if (!_.containsIncludingLayers($scope.getActive(), a)) {
              if (!$scope.inTargetFlyout(a)) {
                if ($scope.inActiveDialog()) {
                  if (!$scope.isIgnoredByModalLayer(a)) {
                    $scope.hide();
                  }
                }
              }
            }
          }
        }
      });
    }, m.Priority.URGENT);
  }
  /**
   * @return {?}
   */
  function self() {
    /** @type {null} */
    this.active = null;
    this.togglers = {};
    this.setSticky(false);
    failures.push(this);
    this.subscribe(["show", "hide"], self.inform.bind(self));
    return init();
  }
  /**
   * @param {Function} selector
   * @param {string} id
   * @return {?}
   */
  function $(selector, id) {
    if (selector instanceof self) {
      return selector;
    }
    return self.getInstance(id);
  }
  /**
   * @param {?} target
   * @return {?}
   */
  function include(target) {
    var targets = dom.scry(target, 'a[rel="toggle"]');
    if (targets.length > 0 && targets[0].getAttribute("data-target")) {
      return attr(targets[0].getAttribute("data-target"));
    }
  }
  /** @type {Array} */
  var failures = [];
  var thisp;
  /** @type {boolean} */
  var da = false;
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
  /** @type {function (): ?} */
  self.prototype.constructor = self;
  self.__superConstructor__ = tmp;
  /**
   * @param {string} target
   * @return {undefined}
   */
  self.prototype.show = function(target) {
    var self = $(this, target);
    var active = self.active;
    if (target !== active) {
      if (active) {
        self.hide();
      }
      /** @type {string} */
      self.active = target;
      $parent.addClass(target, "openToggler");
      var targets = dom.scry(target, 'a[rel="toggle"]');
      if (targets.length > 0 && targets[0].getAttribute("data-target")) {
        $parent.removeClass(attr(targets[0].getAttribute("data-target")), "toggleTargetClosed");
      }
      var paths = opt_eventHandler.scry(target, ".uiToggleFlyout")[0];
      if (paths) {
        var rreturn = rule.find(paths)[0] || paths;
        if (rreturn.tabIndex == -1) {
          /** @type {number} */
          rreturn.tabIndex = 0;
        }
        ret.setWithoutOutline(rreturn);
      }
      if (targets.length > 0) {
        dom.appendContent(target, self.getToggler("next"));
        dom.prependContent(target, self.getToggler("prev"));
      }
      m.listen(target, "keydown", function(key) {
        if (m.getKeyCode(key) === event.ESC) {
          if (self.isShown()) {
            var submenu = dom.scry(target, 'a[rel="toggle"]')[0];
            if (submenu) {
              submenu.focus();
            }
            self.hide();
          }
        }
      });
      self.inform("show", self);
    }
  };
  /**
   * @param {string} id
   * @return {undefined}
   */
  self.prototype.hide = function(id) {
    var m = $(this, id);
    var a = m.active;
    if (a && (!id || id === a)) {
      $parent.removeClass(a, "openToggler");
      var results = dom.scry(a, 'a[rel="toggle"]');
      if (results.length > 0 && results[0].getAttribute("data-target")) {
        $parent.addClass(attr(results[0].getAttribute("data-target")), "toggleTargetClosed");
      }
      show(m.togglers).forEach(dom.remove);
      m.inform("hide", m);
      /** @type {null} */
      m.active = null;
    }
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  self.prototype.toggle = function(name) {
    var m = $(this, name);
    if (m.active === name) {
      m.hide();
    } else {
      m.show(name);
    }
    clearMenus();
  };
  /**
   * @return {?}
   */
  self.prototype.getActive = function() {
    return $(this).active;
  };
  /**
   * @return {?}
   */
  self.prototype.isShown = function() {
    return $(this).active && $parent.hasClass($(this).active, "openToggler");
  };
  /**
   * @param {?} constructor
   * @return {?}
   */
  self.prototype.inTargetFlyout = function(constructor) {
    var protoProps = include(this.getActive());
    return protoProps && _.containsIncludingLayers(protoProps, constructor);
  };
  /**
   * @return {?}
   */
  self.prototype.inActiveDialog = function() {
    var store = exports.Dialog && exports.Dialog.getCurrent();
    return!store || dom.contains(store.getRoot(), this.getActive());
  };
  /**
   * @param {?} other
   * @return {?}
   */
  self.prototype.isIgnoredByModalLayer = function(other) {
    /** @type {boolean} */
    var _tryInitOnFocus = !!_.parentByClass(other, "_3qw");
    /** @type {boolean} */
    var _isFocused = !!_.parentByClass(this.getActive(), "_3qw");
    return _tryInitOnFocus && !_isFocused;
  };
  /**
   * @param {string} index
   * @return {?}
   */
  self.prototype.getToggler = function(index) {
    var self = $(this);
    if (!self.togglers[index]) {
      self.togglers[index] = dom.create("button", {
        className : "hideToggler",
        /**
         * @return {undefined}
         */
        onfocus : function() {
          var submenu = dom.scry(self.active, 'a[rel="toggle"]')[0];
          if (submenu) {
            submenu.focus();
          }
          self.hide();
        },
        style : {
          right : index === "next" ? "0" : ""
        }
      });
      self.togglers[index].setAttribute("type", "button");
    }
    return this.togglers[index];
  };
  /**
   * @param {boolean} sticky
   * @return {?}
   */
  self.prototype.setSticky = function(sticky) {
    var self = $(this);
    /** @type {boolean} */
    sticky = sticky !== false;
    if (sticky !== self.sticky) {
      /** @type {boolean} */
      self.sticky = sticky;
      if (sticky) {
        if (self.$Toggler0) {
          self.$Toggler0.unsubscribe();
        }
      } else {
        self.$Toggler0 = app.subscribe("pre_page_transition", self.hide.bind(self, null));
      }
    }
    return self;
  };
  /**
   * @param {?} model
   * @return {undefined}
   */
  self.prototype.setPrePageTransitionCallback = function(model) {
    var options = $(this);
    if (options.$Toggler0) {
      options.$Toggler0.unsubscribe();
    }
    options.$Toggler0 = app.subscribe("pre_page_transition", model);
  };
  /**
   * @param {Node} params
   * @return {undefined}
   */
  self.bootstrap = function(params) {
    var el = params.parentNode;
    self.getInstance(el).toggle(el);
  };
  /**
   * @param {?} elem
   * @return {?}
   */
  self.createInstance = function(elem) {
    var value = (new self).setSticky(true);
    data_user.set(elem, "toggler", value);
    return value;
  };
  /**
   * @param {Element} elem
   * @return {undefined}
   */
  self.destroyInstance = function(elem) {
    data_user.remove(elem, "toggler");
  };
  /**
   * @param {(Element|string)} id
   * @return {?}
   */
  self.getInstance = function(id) {
    for (;id;) {
      var proto = data_user.get(id, "toggler");
      if (proto) {
        return proto;
      }
      if ($parent.hasClass(id, "uiToggleContext")) {
        return self.createInstance(id);
      }
      id = URI(id);
    }
    return thisp = thisp || new self;
  };
  /**
   * @param {Element} selector
   * @param {string} type
   * @param {Function} listener
   * @return {?}
   */
  self.listen = function(selector, type, listener) {
    return self.subscribe(merge(selector), function(opt_args, $scope) {
      if ($scope.getActive() === type) {
        return listener(opt_args, $scope);
      }
    });
  };
  next(self, self.prototype);
  next(self, {
    subscribe : function(a) {
      return function(o, test) {
        o = merge(o);
        if (callback(o, "show")) {
          failures.forEach(function(doc) {
            if (doc.getActive()) {
              setTimeout(test.bind(null, "show", doc), 0);
            }
          });
        }
        return a(o, test);
      };
    }(self.subscribe.bind(self))
  });
  /** @type {function (): ?} */
  context.exports = self;
}, null);
__d("SVGChecker", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  module.exports = {
    /**
     * @param {Node} elem
     * @return {?}
     */
    isSVG : function(elem) {
      return!!elem.ownerSVGElement || elem.tagName.toLowerCase() === "svg";
    },
    /**
     * @param {?} element
     * @return {?}
     */
    isDisplayed : function(element) {
      try {
        var $cont = element.getBBox();
        if ($cont && ($cont.height === 0 || $cont.width === 0)) {
          return false;
        }
      } catch (h) {
        return false;
      }
      return true;
    }
  };
}, null);
__d("ContextualLayer", ["Arbiter", "ARIA", "ContextualThing", "CSS", "DataStore", "DOM", "Event", "Layer", "LayerHideOnTransition", "Locale", "Parent", "Rect", "Style", "SVGChecker", "Vector", "arrayContains", "containsNode", "copyProperties", "emptyFunction", "getOffsetParent", "getOverlayZIndex", "removeFromArray", "throttle"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, context, matcherFunction, child, dataAndEvents, $animateProvider, dojo, surface, that, m, tmp, value,
methods, find, t, html, renderer, Rect, execResult, addClass, fn, deepDataAndEvents, offset, format, text, listen) {
  /**
   * @param {number} me
   * @return {?}
   */
  function drawPlayer(me) {
    return me.getPosition() === "left" || me.isVertical() && me.getAlignment() === "right";
  }
  /**
   * @return {undefined}
   */
  function self() {
    if (tmp !== null) {
      tmp.apply(this, arguments);
    }
  }
  /**
   * @return {undefined}
   */
  function Plugin() {
    this._default = {
      _position : "above",
      _alignment : "left",
      _offsetX : 0,
      _offsetY : 0,
      _valid : true
    };
    this.reset();
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
  /** @type {function (): undefined} */
  self.prototype.constructor = self;
  /** @type {Function} */
  self.__superConstructor__ = tmp;
  /**
   * @param {Object} options
   * @param {string} content
   * @return {undefined}
   */
  self.prototype._configure = function(options, content) {
    parent._configure.call(this, options, content);
    if (options.shouldSetARIAProperties === false) {
      this._shouldSetARIAProperties = options.shouldSetARIAProperties;
    }
    if (options.context) {
      this.setContext(options.context);
    } else {
      if (options.contextID) {
        this._setContextID(options.contextID);
      } else {
        if (options.contextSelector) {
          this._setContextSelector(options.contextSelector);
        }
      }
    }
    this.setPosition(options.position);
    this.setAlignment(options.alignment);
    this.setOffsetX(options.offsetX);
    this.setOffsetY(options.offsetY);
    /** @type {string} */
    this._content = content;
  };
  /**
   * @return {?}
   */
  self.prototype._getDefaultBehaviors = function() {
    return parent._getDefaultBehaviors.call(this).concat([value]);
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} error
   * @return {?}
   */
  self.prototype._buildWrapper = function(dataAndEvents, error) {
    this._contentWrapper = that.create("div", {
      className : "uiContextualLayer"
    }, error);
    return that.create("div", {
      className : "uiContextualLayerPositioner"
    }, this._contentWrapper);
  };
  /**
   * @return {?}
   */
  self.prototype.getInsertParent = function() {
    var nDigit = this._insertParent;
    if (!nDigit) {
      var cDigit = this.getContext();
      if (cDigit) {
        nDigit = find.byClass(cDigit, "uiContextualLayerParent");
      }
    }
    return nDigit || parent.getInsertParent.call(this);
  };
  /**
   * @param {string} value
   * @return {?}
   */
  self.prototype.setContent = function(value) {
    /** @type {string} */
    this._content = value;
    that.setContent(this._contentWrapper, this._content);
    if (this._shown) {
      this.updatePosition();
    }
    return this;
  };
  /**
   * @param {?} elem
   * @return {?}
   */
  self.prototype.setContext = function(elem) {
    return this.setContextWithBounds(elem, null);
  };
  /**
   * @param {?} second
   * @param {Node} a
   * @return {?}
   */
  self.prototype.setContextWithBounds = function(second, a) {
    if (this._contextNode === second && (a && (this._contextBounds && a.isEqualTo(this._contextBounds)))) {
      return this;
    }
    this._contextNode = second;
    var cur = a && (this._contextBounds && (a.t === this._contextBounds.t && (a.r === this._contextBounds.r && (a.b === this._contextBounds.b && a.l === this._contextBounds.l))));
    if (cur) {
      return this;
    }
    this._contextBounds = a || null;
    /** @type {null} */
    this._contextSelector = this._contextScrollParent = null;
    if (this._shown) {
      $animateProvider.register(this.getRoot(), this._contextNode);
      this.updatePosition();
    }
    this._setParentSubscription();
    this.setARIAProperties();
    return this;
  };
  /**
   * @param {Object} recurring
   * @return {?}
   */
  self.prototype.shouldSetARIAProperties = function(recurring) {
    /** @type {Object} */
    this._shouldSetARIAProperties = recurring;
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.setARIAProperties = function() {
    if (this._shouldSetARIAProperties) {
      dataAndEvents.setPopup(this.getCausalElement(), this.getRoot());
    }
    return this;
  };
  /**
   * @param {string} lhs
   * @return {undefined}
   */
  self.prototype._setContextID = function(lhs) {
    /** @type {string} */
    this._contextSelector = "#" + lhs;
    /** @type {null} */
    this._contextNode = null;
  };
  /**
   * @param {string} dataAndEvents
   * @return {undefined}
   */
  self.prototype._setContextSelector = function(dataAndEvents) {
    /** @type {string} */
    this._contextSelector = dataAndEvents;
    /** @type {null} */
    this._contextNode = null;
  };
  /**
   * @return {?}
   */
  self.prototype.getCausalElement = function() {
    return parent.getCausalElement.call(this) || this.getContext();
  };
  /**
   * @return {undefined}
   */
  self.prototype._setParentSubscription = function() {
    var cur = this.getContext();
    /** @type {null} */
    var m = null;
    for (;cur !== null;) {
      m = surface.get(cur, "layer");
      if (m) {
        break;
      }
      cur = cur.parentNode;
    }
    if (m === this._parentLayer) {
      return;
    }
    if (this._parentLayer && this._parentSubscription) {
      this._parentLayer.unsubscribe(this._parentSubscription);
      /** @type {null} */
      this._parentSubscription = null;
    }
    if (m) {
      this._parentSubscription = m.subscribe("hide", this.hide.bind(this));
    }
    this._parentLayer = m;
  };
  /**
   * @param {?} isXML
   * @return {?}
   */
  self.prototype.setPosition = function(isXML) {
    if (this._getOrientation().setDefaultPosition(isXML)) {
      if (this._shown) {
        this.updatePosition();
      }
    }
    return this;
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  self.prototype.setAlignment = function(deepDataAndEvents) {
    if (this._getOrientation().setDefaultAlignment(deepDataAndEvents)) {
      if (this._shown) {
        this.updatePosition();
      }
    }
    return this;
  };
  /**
   * @param {number} x
   * @return {?}
   */
  self.prototype.setOffsetX = function(x) {
    if (this._getOrientation().setDefaultOffsetX(x)) {
      if (this._shown) {
        this.updatePosition();
      }
    }
    return this;
  };
  /**
   * @param {number} deepDataAndEvents
   * @return {?}
   */
  self.prototype.setOffsetY = function(deepDataAndEvents) {
    if (this._getOrientation().setDefaultOffsetY(deepDataAndEvents)) {
      if (this._shown) {
        this.updatePosition();
      }
    }
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getPosition = function() {
    return this._getOrientation().getPosition();
  };
  /**
   * @return {?}
   */
  self.prototype._getOrientation = function() {
    if (!this._orientation) {
      this._orientation = new Plugin;
    }
    return this._orientation;
  };
  /**
   * @return {?}
   */
  self.prototype.getContentRoot = function() {
    return this._contentWrapper;
  };
  /**
   * @return {?}
   */
  self.prototype.getContent = function() {
    return this._content;
  };
  /**
   * @return {?}
   */
  self.prototype.getContext = function() {
    if (!this._contextNode) {
      this._contextNode = that.find(document, this._contextSelector);
    }
    return this._contextNode;
  };
  /**
   * @param {string} b
   * @return {?}
   */
  self.prototype.getContextBounds = function(b) {
    if (this._contextBounds) {
      return this._contextBounds.convertTo(b);
    }
    var element = this.getContext();
    return t.newFromVectors(Rect.getElementPosition(element, b), Rect.getElementDimensions(element));
  };
  /**
   * @return {?}
   */
  self.prototype.getContextScrollParent = function() {
    if (!this._contextScrollParent) {
      this._contextScrollParent = html.getScrollParent(this.getContext());
    } else {
      if (that.isElementNode(this._contextScrollParent) && !addClass(document.documentElement, this._contextScrollParent)) {
        this._contextScrollParent = html.getScrollParent(this.getContext());
      }
    }
    return this._contextScrollParent;
  };
  /**
   * @param {?} mapper
   * @return {?}
   */
  self.prototype.setInsertParent = function(mapper) {
    /** @type {null} */
    this._insertScrollParent = null;
    return parent.setInsertParent.call(this, mapper);
  };
  /**
   * @return {?}
   */
  self.prototype.getInsertScrollParent = function() {
    if (!this._insertScrollParent) {
      this._insertScrollParent = html.getScrollParent(this.getInsertParent());
    }
    return this._insertScrollParent;
  };
  /**
   * @return {?}
   */
  self.prototype.show = function() {
    if (this._shown) {
      return this;
    }
    parent.show.call(this);
    if (this._shown) {
      $animateProvider.register(this.getRoot(), this.getContext());
      failures.push(this);
      this._resizeListener = this._resizeListener || m.listen(window, "resize", listen(this.updatePosition.bind(this)));
    }
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.finishHide = function() {
    text(failures, this);
    if (this._resizeListener) {
      this._resizeListener.remove();
    }
    /** @type {null} */
    this._resizeListener = null;
    return parent.finishHide.call(this);
  };
  /**
   * @return {?}
   */
  self.prototype.isFixed = function() {
    return html.isFixed(this.getContext()) && !html.isFixed(this.getInsertParent());
  };
  /**
   * @return {?}
   */
  self.prototype.updatePosition = function() {
    var child = this.getContext();
    if (!child) {
      return false;
    }
    var parentNode = this.isFixed();
    if (!parentNode && !(child.offsetParent || renderer.isSVG(child) && renderer.isDisplayed(child))) {
      return false;
    }
    var el = this.getRoot();
    html.set(el, "width", Rect.getViewportDimensions().x + "px");
    var me = this._getOrientation();
    this.inform("adjust", me.reset());
    if (!me.isValid()) {
      return false;
    }
    this._updateWrapperPosition(me);
    this._updateWrapperClass(me);
    dojo.conditionClass(el, "uiContextualLayerPositionerFixed", parentNode);
    var b;
    var W;
    /** @type {string} */
    var d = parentNode ? "viewport" : "document";
    var element = parentNode ? document.documentElement : offset(el);
    if (element === document.documentElement) {
      b = new Rect(0, 0);
      W = document.documentElement.clientWidth;
    } else {
      if (!el.offsetParent) {
        return false;
      } else {
        b = Rect.getElementPosition(element, d);
        W = element.offsetWidth;
        if (element !== document.body) {
          b = b.sub(new Rect(element.scrollLeft, element.scrollTop));
        }
      }
    }
    var a = this.getContextBounds(d);
    /** @type {number} */
    var length = a.l - b.x;
    /** @type {number} */
    var x = a.t - b.y;
    var chunk = a.h();
    var chr = a.w();
    var ya = methods.isRTL();
    if (me.getPosition() === "below") {
      x += chunk;
    }
    if ((me.getPosition() === "right" || me.isVertical() && me.getAlignment() === "right") != ya) {
      length += chr;
    }
    var from = me.getOffsetX();
    if (me.isVertical() && me.getAlignment() === "center") {
      from += (chr - this.getContentRoot().offsetWidth) / 2;
    }
    if (ya) {
      from *= -1;
    }
    /** @type {string} */
    var dir = "left";
    /** @type {number} */
    var w = Math.floor(length + from);
    if (drawPlayer(me) !== ya) {
      /** @type {string} */
      dir = "right";
      /** @type {number} */
      w = W - w;
    }
    html.set(el, dir, w + "px");
    html.set(el, dir === "left" ? "right" : "left", "");
    var target = this.getInsertScrollParent();
    var right;
    if (target !== window) {
      right = target.clientWidth;
    } else {
      right = document.documentElement.clientWidth;
    }
    var left = Rect.getElementPosition(el).x;
    if (dir === "left" && right - left > 0) {
      html.set(el, "width", right - left + "px");
    } else {
      if (dir === "right" && left + el.offsetWidth > 0) {
        html.set(el, "width", left + el.offsetWidth + "px");
      } else {
        html.set(el, "width", "");
      }
    }
    html.set(el, "top", x + me.getOffsetY() + "px");
    var f = format(child, this.getInsertParent());
    html.set(el, "z-index", f > 200 ? f : "");
    this.inform("reposition", me);
    return true;
  };
  /**
   * @param {number} player
   * @return {undefined}
   */
  self.prototype._updateWrapperPosition = function(player) {
    /** @type {boolean} */
    var alive = player.getPosition() === "above";
    html.set(this._contentWrapper, "bottom", alive ? "0" : null);
    /** @type {string} */
    var direction = methods.isRTL() ? "left" : "right";
    var value = drawPlayer(player);
    html.set(this._contentWrapper, direction, value ? "0" : null);
  };
  /**
   * @param {?} o
   * @return {undefined}
   */
  self.prototype._updateWrapperClass = function(o) {
    var cNames = o.getClassName();
    if (cNames === this._orientationClass) {
      return;
    }
    if (this._orientationClass) {
      dojo.removeClass(this._contentWrapper, this._orientationClass);
    }
    this._orientationClass = cNames;
    dojo.addClass(this._contentWrapper, cNames);
  };
  /**
   * @param {number} o
   * @param {Function} require
   * @return {?}
   */
  self.prototype.simulateOrientation = function(o, require) {
    var className = o.getClassName();
    if (className === this._orientationClass) {
      return require();
    } else {
      if (this._orientationClass) {
        dojo.removeClass(this._contentWrapper, this._orientationClass);
      }
      dojo.addClass(this._contentWrapper, className);
      var Block = require();
      dojo.removeClass(this._contentWrapper, className);
      if (this._orientationClass) {
        dojo.addClass(this._contentWrapper, this._orientationClass);
      }
      return Block;
    }
  };
  /**
   * @return {?}
   */
  self.prototype.destroy = function() {
    parent.destroy.call(this);
    /** @type {null} */
    this._contentWrapper = null;
    /** @type {null} */
    this._content = null;
    return this;
  };
  /**
   * @return {?}
   */
  self.prototype.getArrowDimensions = function() {
    return this._config.arrowDimensions || {
      offset : 0,
      length : 0
    };
  };
  /** @type {Array} */
  var failures = [];
  child.subscribe("reflow", function() {
    failures.forEach(function(item) {
      if (item.updatePosition() === false) {
        item.hide();
      }
    });
  });
  fn(self.prototype, {
    _contentWrapper : null,
    _content : null,
    _contextNode : null,
    _contextBounds : null,
    _contextSelector : null,
    _parentLayer : null,
    _parentSubscription : null,
    _orientation : null,
    _orientationClass : null,
    _shouldSetARIAProperties : true
  });
  var lookupIterator = deepDataAndEvents.thatReturnsArgument;
  var HOP = deepDataAndEvents.thatReturnsArgument;
  /**
   * @param {?} value
   * @return {?}
   */
  Plugin.prototype.setPosition = function(value) {
    this._position = lookupIterator(value);
    return this;
  };
  /**
   * @param {?} walkers
   * @return {?}
   */
  Plugin.prototype.setAlignment = function(walkers) {
    this._alignment = HOP(walkers);
    return this;
  };
  /**
   * @return {?}
   */
  Plugin.prototype.getOppositePosition = function() {
    return Plugin.OPPOSITE[this.getPosition()];
  };
  /**
   * @return {?}
   */
  Plugin.prototype.invalidate = function() {
    /** @type {boolean} */
    this._valid = false;
    return this;
  };
  /**
   * @return {?}
   */
  Plugin.prototype.getPosition = function() {
    return this._position || "above";
  };
  /**
   * @return {?}
   */
  Plugin.prototype.getAlignment = function() {
    return this._alignment || "left";
  };
  /**
   * @return {?}
   */
  Plugin.prototype.getOffsetX = function() {
    var _offsetX = this._offsetX || 0;
    if (!this.isVertical()) {
      if (this._default._position !== this._position) {
        _offsetX *= -1;
      }
    } else {
      if (this._default._alignment !== this._alignment) {
        _offsetX *= -1;
      }
    }
    return _offsetX;
  };
  /**
   * @return {?}
   */
  Plugin.prototype.getOffsetY = function() {
    var _offsetY = this._offsetY || 0;
    if (this.isVertical() && this._default._position !== this._position) {
      _offsetY *= -1;
    }
    return _offsetY;
  };
  /**
   * @return {?}
   */
  Plugin.prototype.getClassName = function() {
    var position = this.getAlignment();
    var placement = this.getPosition();
    if (placement === "below") {
      if (position === "left") {
        return "uiContextualLayerBelowLeft";
      } else {
        if (position === "right") {
          return "uiContextualLayerBelowRight";
        } else {
          return "uiContextualLayerBelowCenter";
        }
      }
    } else {
      if (placement === "above") {
        if (position === "left") {
          return "uiContextualLayerAboveLeft";
        } else {
          if (position === "right") {
            return "uiContextualLayerAboveRight";
          } else {
            return "uiContextualLayerAboveCenter";
          }
        }
      } else {
        if (placement === "left") {
          return "uiContextualLayerLeft";
        } else {
          return "uiContextualLayerRight";
        }
      }
    }
  };
  /**
   * @return {?}
   */
  Plugin.prototype.isValid = function() {
    return this._valid;
  };
  /**
   * @return {?}
   */
  Plugin.prototype.isVertical = function() {
    return this.getPosition() === "above" || this.getPosition() === "below";
  };
  /**
   * @return {?}
   */
  Plugin.prototype.reset = function() {
    fn(this, this._default);
    return this;
  };
  /**
   * @param {?} value
   * @return {?}
   */
  Plugin.prototype.setDefaultPosition = function(value) {
    var newValue = this._default._position;
    this._default._position = lookupIterator(value);
    return newValue !== value;
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  Plugin.prototype.setDefaultAlignment = function(deepDataAndEvents) {
    var _alignment = this._default._alignment;
    this._default._alignment = HOP(deepDataAndEvents);
    return _alignment !== deepDataAndEvents;
  };
  /**
   * @param {number} v00
   * @return {?}
   */
  Plugin.prototype.setDefaultOffsetX = function(v00) {
    var _offsetX = this._default._offsetX;
    /** @type {number} */
    this._default._offsetX = v00;
    return _offsetX !== v00;
  };
  /**
   * @param {number} deepDataAndEvents
   * @return {?}
   */
  Plugin.prototype.setDefaultOffsetY = function(deepDataAndEvents) {
    var _offsetY = this._default._offsetY;
    /** @type {number} */
    this._default._offsetY = deepDataAndEvents;
    return _offsetY !== deepDataAndEvents;
  };
  Plugin.OPPOSITE = {
    above : "below",
    below : "above",
    left : "right",
    right : "left"
  };
  /** @type {function (): undefined} */
  context.exports = self;
}, null);
__d("ContextualLayerDimensions", ["DOM", "Locale", "Rect", "Vector", "ViewportBounds", "ge", "getOverlayZIndex"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, jQuery, methods, MarkObject, s, frustum, $j, cbEach) {
  var JsDiff = {
    /**
     * @param {HTMLCanvasElement} oCanvas
     * @return {?}
     */
    getViewportRect : function(oCanvas) {
      var sel = $j("globalContainer");
      var related = oCanvas.getContext();
      var r = sel && jQuery.contains(sel, related) || cbEach(related) < 300;
      var argv = MarkObject.getViewportWithoutScrollbarsBounds();
      if (r) {
        argv.t += frustum.getTop();
        if (methods.isRTL()) {
          argv.r -= frustum.getLeft();
          argv.l += frustum.getRight();
        } else {
          argv.r -= frustum.getRight();
          argv.l += frustum.getLeft();
        }
      }
      return argv;
    },
    /**
     * @param {?} user
     * @param {number} me
     * @return {?}
     */
    getLayerRect : function(user, me) {
      var bbox = user.getContextBounds("viewport");
      var offset = user.simulateOrientation(me, function() {
        return s.getElementDimensions(user.getContentRoot());
      });
      var y = bbox.t + me.getOffsetY();
      if (me.getPosition() === "above") {
        y -= offset.y;
      } else {
        if (me.getPosition() === "below") {
          y += bbox.b - bbox.t;
        }
      }
      var x = bbox.l + me.getOffsetX();
      /** @type {number} */
      var maxWidth = bbox.r - bbox.l;
      if (me.isVertical()) {
        var n = me.getAlignment();
        if (n === "center") {
          x += (maxWidth - offset.x) / 2;
        } else {
          if (n === "right" !== methods.isRTL()) {
            x += maxWidth - offset.x;
          }
        }
      } else {
        if (me.getPosition() === "right" !== methods.isRTL()) {
          x += maxWidth;
        } else {
          x -= offset.x;
        }
      }
      return new MarkObject(y, x + offset.x, y + offset.y, x, "viewport");
    }
  };
  module.exports = JsDiff;
}, null);
__d("ContextualLayerAutoFlip", ["ContextualLayerDimensions", "DOM", "Vector", "Rect", "arrayContains", "copyProperties"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, insert, dataAndEvents, Element, Draggable, isObject, createObject) {
  /**
   * @param {Object} item
   * @param {Object} e
   * @return {?}
   */
  function checkValue(item, e) {
    e = (new Draggable(e)).convertTo(item.domain);
    /** @type {number} */
    var left = Math.max(item.l, e.l);
    /** @type {number} */
    var right = Math.min(item.r, e.r);
    return Math.max(right - left, 0);
  }
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function exp(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    this._subscription = this._layer.subscribe("adjust", this._adjustOrientation.bind(this));
    if (this._layer.isShown()) {
      this._layer.updatePosition();
    }
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    this._subscription.unsubscribe();
    /** @type {null} */
    this._subscription = null;
    if (this._layer.isShown()) {
      this._layer.updatePosition();
    }
  };
  /**
   * @param {?} dataAndEvents
   * @param {number} target
   * @return {undefined}
   */
  exp.prototype._adjustOrientation = function(dataAndEvents, target) {
    var a = this._getValidPositions(target);
    if (!a.length) {
      target.invalidate();
      return;
    }
    var that = insert.getViewportRect(this._layer);
    var data = this._getValidAlignments(target);
    var index;
    var i;
    var pos;
    /** @type {number} */
    index = 0;
    for (;index < data.length;index++) {
      target.setAlignment(data[index]);
      /** @type {number} */
      i = 0;
      for (;i < a.length;i++) {
        target.setPosition(a[i]);
        pos = insert.getLayerRect(this._layer, target);
        if (that.contains(pos)) {
          return;
        }
      }
    }
    target.setPosition(isObject(a, "below") ? "below" : a[0]);
    var value;
    /** @type {number} */
    var start = 0;
    /** @type {number} */
    var bestValue = 0;
    /** @type {number} */
    index = 0;
    for (;index < data.length;index++) {
      target.setAlignment(data[index]);
      pos = insert.getLayerRect(this._layer, target);
      value = checkValue(that, pos);
      if (value > bestValue) {
        bestValue = value;
        /** @type {number} */
        start = index;
      }
    }
    target.setAlignment(data[start]);
  };
  /**
   * @param {number} a
   * @return {?}
   */
  exp.prototype._getValidPositions = function(a) {
    /** @type {Array} */
    var contextElem = [a.getPosition(), a.getOppositePosition()];
    var element = this._layer.getContextScrollParent();
    if (element === window || element === dataAndEvents.getDocumentScrollElement()) {
      return contextElem;
    }
    var node = this._layer.getContext();
    var y1 = Element.getElementPosition(element, "viewport").y;
    var y = Element.getElementPosition(node, "viewport").y;
    if (a.isVertical()) {
      return contextElem.filter(function(status) {
        if (status === "above") {
          return y >= y1;
        } else {
          var y2 = y1 + element.offsetHeight;
          var sy1 = y + node.offsetHeight;
          return sy1 <= y2;
        }
      });
    } else {
      var y2 = y1 + element.offsetHeight;
      if (y >= y1 && y + node.offsetHeight <= y2) {
        return contextElem;
      } else {
        return[];
      }
    }
  };
  /**
   * @param {number} findInt
   * @return {?}
   */
  exp.prototype._getValidAlignments = function(findInt) {
    /** @type {Array} */
    var positions = ["left", "right", "center"];
    var x = findInt.getAlignment();
    /** @type {number} */
    var position = positions.indexOf(x);
    if (position > 0) {
      positions.splice(position, 1);
      positions.unshift(x);
    }
    return positions;
  };
  createObject(exp.prototype, {
    _subscription : null
  });
  /** @type {function (string): undefined} */
  module.exports = exp;
}, null);
__d("getInlineBoundingRect", ["Rect"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Player) {
  /**
   * @param {string} element
   * @param {string} value
   * @return {?}
   */
  function setup(element, value) {
    var inChildren = element.getClientRects();
    if (!value || inChildren.length === 0) {
      return Player.getElementBounds(element);
    }
    var b;
    /** @type {boolean} */
    var m = false;
    /** @type {number} */
    var i = 0;
    for (;i < inChildren.length;i++) {
      var result = (new Player(Math.round(inChildren[i].top), Math.round(inChildren[i].right), Math.round(inChildren[i].bottom), Math.round(inChildren[i].left), "viewport")).convertTo("document");
      var a = result.getPositionVector();
      var e = a.add(result.getDimensionVector());
      if (!b || a.x <= b.l && a.y > b.t) {
        if (m) {
          break;
        }
        b = new Player(a.y, e.x, e.y, a.x, "document");
      } else {
        /** @type {number} */
        b.t = Math.min(b.t, a.y);
        /** @type {number} */
        b.b = Math.max(b.b, e.y);
        b.r = e.x;
      }
      if (result.contains(value)) {
        /** @type {boolean} */
        m = true;
      }
    }
    if (!b) {
      b = Player.getElementBounds(element);
    }
    return b;
  }
  /** @type {function (string, string): ?} */
  module.exports = setup;
}, null);
__d("nl2br", ["DOM"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, domConstruct) {
  /**
   * @param {string} attribute
   * @return {?}
   */
  function bind(attribute) {
    return attribute.split(eventSplitter).map(function(name) {
      return eventSplitter.test(name) ? domConstruct.create("br") : name;
    });
  }
  /** @type {RegExp} */
  var eventSplitter = /(\r\n|[\r\n])/;
  /** @type {function (string): ?} */
  module.exports = bind;
}, null);
__d("Tooltip", ["Event", "AsyncRequest", "ContextualLayer", "ContextualLayerAutoFlip", "CSS", "DataStore", "DOM", "Style", "URI", "Vector", "copyProperties", "emptyFunction", "getElementText", "getInlineBoundingRect", "nl2br", "setImmediate", "fbt"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, context, opt_attributes, event, Deferred, View, notation, obj, data_user, util, matches, Type, errors, $, statusCode, trim, curCSS, render, $sanitize, dataAndEvents) {
  /**
   * @return {undefined}
   */
  function initialize() {
    if (!api) {
      message = util.create("div", {
        className : "tooltipContent"
      });
      var bc = util.create("i", {
        className : "arrow"
      });
      var options = util.create("div", {
        className : "uiTooltipX"
      }, [message, bc]);
      api = new View({}, options);
      api.shouldSetARIAProperties(false);
      api.enableBehavior(notation);
    }
  }
  /**
   * @param {Element} elem
   * @return {?}
   */
  function fn(elem) {
    return $({
      content : elem.getAttribute("aria-label"),
      position : elem.getAttribute("data-tooltip-position") || "above",
      alignH : elem.getAttribute("data-tooltip-alignh") || "left",
      suppress : false,
      overflowDisplay : elem.getAttribute("data-tooltip-display") === "overflow",
      persistOnClick : elem.getAttribute("data-pitloot-persistonclick")
    }, data_user.get(elem, "tooltip"));
  }
  /**
   * @param {Element} elem
   * @param {?} opts
   * @return {undefined}
   */
  function next(elem, opts) {
    var obj = fn(elem);
    data_user.set(elem, "tooltip", {
      content : opts.content || obj.content,
      position : opts.position || obj.position,
      alignH : opts.alignH || obj.alignH,
      suppress : opts.suppress === void 0 ? obj.suppress : opts.suppress,
      overflowDisplay : opts.overflowDisplay || obj.overflowDisplay,
      persistOnClick : opts.persistOnClick || obj.persistOnClick
    });
    elem.setAttribute("data-hover", "tooltip");
  }
  /**
   * @param {?} el
   * @param {string} keepData
   * @return {undefined}
   */
  function remove(el, keepData) {
    self.set(el, "Loading...");
    (new Deferred(keepData)).setHandler(function(join) {
      self.set(el, join.getPayload());
    }).setErrorHandler(statusCode).send();
  }
  /** @type {null} */
  var root = null;
  /** @type {null} */
  var el = null;
  /** @type {null} */
  var timerId = null;
  /** @type {null} */
  var api = null;
  /** @type {null} */
  var message = null;
  /** @type {Array} */
  var nodes = [];
  /** @type {Array} */
  var eventPath = [];
  var error;
  event.listen(document.documentElement, "mouseover", function(err) {
    /** @type {Function} */
    error = err;
    $sanitize(function() {
      /** @type {null} */
      error = null;
    });
  });
  var self = {
    /**
     * @param {Element} el
     * @param {?} id
     * @return {undefined}
     */
    process : function(el, id) {
      if (!util.contains(el, id)) {
        return;
      }
      if (el !== root) {
        var type = el.getAttribute("data-tooltip-uri");
        if (type) {
          el.removeAttribute("data-tooltip-uri");
          remove(el, type);
        }
        var cDigit = el.getAttribute("data-tooltip-delay");
        if (cDigit) {
          /** @type {number} */
          cDigit = parseInt(cDigit, 10) || 1E3;
          self._showWithDelay(el, cDigit);
        } else {
          self.show(el);
        }
      }
    },
    /**
     * @param {Element} elem
     * @return {undefined}
     */
    remove : function(elem) {
      data_user.remove(elem, "tooltip");
      elem.removeAttribute("data-hover");
      elem.removeAttribute("data-tooltip-position");
      elem.removeAttribute("data-tooltip-alignh");
      if (elem === root) {
        self.hide();
      }
    },
    /**
     * @return {undefined}
     */
    hide : function() {
      if (root) {
        api.hide();
        /** @type {null} */
        root = null;
        for (;nodes.length;) {
          nodes.pop().remove();
        }
      }
    },
    /**
     * @param {?} el
     * @param {string} type
     * @param {Object} key
     * @param {string} value
     * @return {undefined}
     */
    set : function(el, type, key, value) {
      if (key || value) {
        next(el, {
          position : key,
          alignH : value
        });
      }
      if (type instanceof Type) {
        if (el === root) {
          remove(el, type);
        } else {
          el.setAttribute("data-tooltip-uri", type);
        }
      } else {
        if (util.isTextNode(type)) {
          type = trim(type);
        }
        /** @type {boolean} */
        var isAbortedRequest = false;
        if (typeof type !== "string") {
          type = util.create("div", {}, type);
          el.setAttribute("aria-label", trim(type));
        } else {
          el.setAttribute("aria-label", type);
          /** @type {boolean} */
          isAbortedRequest = type === "";
        }
        next(el, {
          content : type,
          suppress : isAbortedRequest
        });
        if (el === root) {
          self.show(el);
        }
      }
    },
    /**
     * @param {?} alt
     * @return {?}
     */
    propsFor : function(alt) {
      return{
        "aria-label" : alt,
        "data-hover" : "tooltip"
      };
    },
    /**
     * @param {Element} elem
     * @return {undefined}
     */
    enableDisplayOnOverflow : function(elem) {
      elem.removeAttribute("data-tooltip-display");
      next(elem, {
        overflowDisplay : true
      });
    },
    /**
     * @param {Element} elem
     * @return {undefined}
     */
    enablePersistOnClick : function(elem) {
      elem.removeAttribute("data-pitloot-persistOnClick");
      next(elem, {
        persistOnClick : true
      });
    },
    /**
     * @param {Element} elem
     * @param {boolean} eventName
     * @return {undefined}
     */
    suppress : function(elem, eventName) {
      next(elem, {
        suppress : eventName
      });
    },
    /**
     * @param {Element} elem
     * @return {undefined}
     */
    show : function(elem) {
      initialize();
      self.hide();
      var options = fn(elem);
      if (options.suppress) {
        return;
      }
      var data = options.content;
      if (options.overflowDisplay) {
        if (elem.offsetWidth >= elem.scrollWidth) {
          return;
        }
        if (!data) {
          data = trim(elem);
        }
      }
      if (!data) {
        return;
      }
      /** @type {number} */
      var ll = 0;
      /** @type {number} */
      var deepDataAndEvents = 0;
      if (options.position === "left" || options.position === "right") {
        /** @type {number} */
        deepDataAndEvents = (elem.offsetHeight - 28) / 2;
      } else {
        if (options.alignH !== "center") {
          var ow = elem.offsetWidth;
          if (ow < 32) {
            /** @type {number} */
            ll = (ow - 32) / 2 * (options.alignH === "right" ? -1 : 1);
          }
        }
      }
      api.setContextWithBounds(elem, curCSS(elem, error && errors.getEventPosition(error))).setOffsetX(ll).setOffsetY(deepDataAndEvents).setPosition(options.position).setAlignment(options.alignH);
      if (typeof data === "string") {
        obj.addClass(api.getRoot(), "invisible_elem");
        var table = util.create("span", {}, render(data));
        var target = util.create("div", {
          className : "tooltipText"
        }, table);
        util.setContent(message, target);
        api.show();
        var i;
        if (target.getClientRects) {
          var val = target.getClientRects()[0];
          if (val) {
            /** @type {number} */
            i = Math.ceil(val.right - val.left);
          }
        }
        if (!i) {
          i = target.offsetWidth;
        }
        if (i < table.offsetWidth) {
          obj.addClass(target, "tooltipWrap");
          api.updatePosition();
        }
        obj.removeClass(api.getRoot(), "invisible_elem");
      } else {
        util.setContent(message, data);
        api.show();
      }
      /**
       * @param {Event} ev
       * @return {undefined}
       */
      var callback = function(ev) {
        if (!util.contains(root, ev.getTarget())) {
          self.hide();
        }
      };
      nodes.push(event.listen(document.documentElement, "mouseover", callback), event.listen(document.documentElement, "focusin", callback));
      var el = matches.getScrollParent(elem);
      if (el !== window) {
        nodes.push(event.listen(el, "scroll", self.hide));
      }
      if (!options.persistOnClick) {
        nodes.push(event.listen(elem, "click", self.hide));
      }
      /** @type {Element} */
      root = elem;
    },
    /**
     * @param {?} child
     * @param {?} threshold
     * @return {undefined}
     */
    _showWithDelay : function(child, threshold) {
      if (child !== el) {
        self._clearDelay();
      }
      if (!timerId) {
        /**
         * @param {Event} ev
         * @return {undefined}
         */
        var callback = function(ev) {
          if (!util.contains(el, ev.getTarget())) {
            self._clearDelay();
          }
        };
        eventPath.push(event.listen(document.documentElement, "mouseover", callback), event.listen(document.documentElement, "focusin", callback));
        el = child;
        /** @type {number} */
        timerId = setTimeout(function() {
          self._clearDelay();
          self.show(child);
        }, threshold);
      }
    },
    /**
     * @return {undefined}
     */
    _clearDelay : function() {
      clearTimeout(timerId);
      /** @type {null} */
      el = null;
      /** @type {null} */
      timerId = null;
      for (;eventPath.length;) {
        eventPath.pop().remove();
      }
    }
  };
  event.listen(window, "scroll", self.hide);
  context.exports = self;
}, null);
__d("TabIsolation", ["DOMQuery", "Event", "Focus", "Keys", "TabbableElements"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, elem, event, req, characters, d) {
  /**
   * @param {string} node
   * @return {undefined}
   */
  function constructor(node) {
    /** @type {string} */
    this._root = node;
    /** @type {null} */
    this._eventHandler = null;
    /** @type {number} */
    this._identifier = _identifier++;
  }
  /** @type {Array} */
  var listeners = [];
  /** @type {number} */
  var _identifier = 0;
  /**
   * @return {undefined}
   */
  constructor.prototype.enable = function() {
    listeners.unshift(this._identifier);
    this._eventHandler = event.listen(window, "keydown", function(err) {
      if (listeners[0] === this._identifier) {
        this._tabHandler(err);
      }
    }.bind(this), event.Priority.URGENT);
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.disable = function() {
    var index;
    if (this._eventHandler) {
      /** @type {number} */
      index = listeners.indexOf(this._identifier);
      if (index > -1) {
        listeners.splice(index, 1);
      }
      this._eventHandler.remove();
      /** @type {null} */
      this._eventHandler = null;
    }
  };
  /**
   * @param {Event} evt
   * @return {undefined}
   */
  constructor.prototype._tabHandler = function(evt) {
    if (event.getKeyCode(evt) !== characters.TAB) {
      return;
    }
    var name = evt.getTarget();
    if (!name) {
      return;
    }
    var oStringList = d.find(this._root);
    var text = oStringList[0];
    var s = oStringList[oStringList.length - 1];
    var pkgConfig = evt.getModifiers().shift;
    if (pkgConfig && name === text) {
      evt.preventDefault();
      req.set(s);
    } else {
      if (!pkgConfig && name === s || !elem.contains(this._root, name)) {
        evt.preventDefault();
        req.set(text);
      }
    }
  };
  /** @type {function (string): undefined} */
  module.exports = constructor;
}, null);
__d("legacy:Tooltip", ["Tooltip"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.Tooltip = trim("Tooltip");
}, 3);
__d("BadgeHelper", ["DOM", "cx", "joinClasses"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, domConstruct, opt_attributes, $sanitize) {
  /**
   * @param {?} b
   * @param {?} dataAndEvents
   * @return {?}
   */
  function cloneNode(b, dataAndEvents) {
    var value = m[b];
    switch(dataAndEvents) {
      case "verified":
        return $sanitize(value, "_56_f _5dzy");
      case "topcommenter":
        return $sanitize(value, "_59t2 _5dzy");
      case "work":
        return $sanitize(value, "_5d62 _5dzy");
    }
  }
  /**
   * @param {?} node
   * @param {?} dataAndEvents
   * @return {?}
   */
  function create(node, dataAndEvents) {
    var cls = cloneNode(node, dataAndEvents);
    if (cls) {
      return domConstruct.create("span", {
        className : cls
      });
    }
  }
  var m = {
    xsmall : "_5dzz",
    small : "_5dz-",
    medium : "_5dz_",
    large : "_5d-0",
    xlarge : "_5d-1"
  };
  module.exports = {
    /** @type {function (?, ?): ?} */
    getClasses : cloneNode,
    /** @type {function (?, ?): ?} */
    renderBadge : create,
    sizes : Object.keys(m)
  };
}, null);
__d("QueriesHistory", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function Game(attribute) {
    /** @type {string} */
    this.$QueriesHistory0 = attribute;
    this.reset();
  }
  /**
   * @return {?}
   */
  Game.prototype.getQueries = function() {
    return this.$QueriesHistory1;
  };
  /**
   * @return {?}
   */
  Game.prototype.getCurrentLength = function() {
    return this.$QueriesHistory2;
  };
  /**
   * @param {(Array|number)} suite
   * @return {undefined}
   */
  Game.prototype.add = function(suite) {
    this.$QueriesHistory1.push(suite);
    this.$QueriesHistory2 += suite.length;
    for (;this.$QueriesHistory1.length !== 0 && this.$QueriesHistory2 > this.$QueriesHistory0;) {
      var codeSegments = this.$QueriesHistory1.shift();
      this.$QueriesHistory2 -= codeSegments.length;
    }
  };
  /**
   * @return {undefined}
   */
  Game.prototype.reset = function() {
    /** @type {number} */
    this.$QueriesHistory2 = 0;
    /** @type {Array} */
    this.$QueriesHistory1 = [];
  };
  /** @type {function (string): undefined} */
  module.exports = Game;
}, null);
__d("ContextualLayerHideOnScroll", ["Event", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, opt_eventHandler, fn) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function self(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  self.prototype.enable = function() {
    /** @type {Array} */
    this._subscriptions = [this._layer.subscribe("contextchange", this._handleContextChange.bind(this)), this._layer.subscribe("show", this.attach.bind(this)), this._layer.subscribe("hide", this.detach.bind(this))];
  };
  /**
   * @return {undefined}
   */
  self.prototype.disable = function() {
    for (;this._subscriptions.length;) {
      this._subscriptions.pop().unsubscribe();
    }
    this.detach();
  };
  /**
   * @return {undefined}
   */
  self.prototype.attach = function() {
    if (this._listener) {
      return;
    }
    var target = this._layer.getContextScrollParent();
    if (target === window) {
      return;
    }
    this._listener = opt_eventHandler.listen(target, "scroll", this._layer.hide.bind(this._layer));
  };
  /**
   * @return {undefined}
   */
  self.prototype.detach = function() {
    if (this._listener) {
      this._listener.remove();
    }
    /** @type {null} */
    this._listener = null;
  };
  /**
   * @return {undefined}
   */
  self.prototype._handleContextChange = function() {
    this.detach();
    if (this._layer.isShown()) {
      this.attach();
    }
  };
  fn(self.prototype, {
    _subscriptions : []
  });
  /** @type {function (string): undefined} */
  context.exports = self;
}, null);
__d("LayerAutoFocus", ["DOMQuery", "Focus", "TabbableElements", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, S, matches, ele, patch) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function $(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  $.prototype.enable = function() {
    this._subscription = this._layer.subscribe("aftershow", this._focus.bind(this));
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
  $.prototype._focus = function() {
    var el = this._layer.getRoot();
    var elem = S.scry(el, ".autofocus")[0];
    /** @type {boolean} */
    var n = true;
    if (!elem) {
      var node = document.activeElement;
      if (S.isNodeOfType(node, ["input", "textarea"])) {
        return;
      }
      var comparisons = ele.find(el);
      /** @type {number} */
      var i = 0;
      for (;i < comparisons.length;i++) {
        var t = comparisons[i];
        if (t.tagName !== "A") {
          elem = comparisons[i];
          break;
        }
      }
    } else {
      if (elem.tabIndex !== 0) {
        /** @type {boolean} */
        n = false;
      }
    }
    if (elem) {
      if (n) {
        matches.set(elem);
      } else {
        matches.setWithoutOutline(elem);
      }
    } else {
      if (!el.offsetWidth) {
        /** @type {number} */
        el.tabIndex = 0;
        matches.setWithoutOutline(el);
      }
    }
  };
  patch($.prototype, {
    _subscription : null
  });
  /** @type {function (string): undefined} */
  module.exports = $;
}, null);
__d("LayerButtons", ["Event", "Parent", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, m, body, fn) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function self(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  self.prototype.enable = function() {
    this._listener = m.listen(this._layer.getRoot(), "click", this._handle.bind(this));
  };
  /**
   * @return {undefined}
   */
  self.prototype.disable = function() {
    this._listener.remove();
    /** @type {null} */
    this._listener = null;
  };
  /**
   * @param {Event} e
   * @return {undefined}
   */
  self.prototype._handle = function(e) {
    var rvar = e.getTarget();
    var r20 = body.byClass(rvar, "layerConfirm");
    if (r20) {
      if (this._layer.inform("confirm", r20) === false) {
        e.prevent();
      }
      return;
    }
    var restoreScript = body.byClass(rvar, "layerCancel");
    if (restoreScript) {
      if (this._layer.inform("cancel", restoreScript) !== false) {
        this._layer.hide();
      }
      e.prevent();
      return;
    }
    var rreturn = body.byClass(rvar, "layerButton");
    if (rreturn) {
      if (this._layer.inform("button", rreturn) === false) {
        e.prevent();
      }
    }
  };
  fn(self.prototype, {
    _listener : null
  });
  /** @type {function (string): undefined} */
  context.exports = self;
}, null);
__d("LayerDestroyOnHide", ["copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, createObject) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function exp(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    var WAIT = this._layer.destroy.bind(this._layer);
    this._subscription = this._layer.subscribe("hide", function() {
      setTimeout(WAIT, 0);
    });
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    if (this._subscription) {
      this._subscription.unsubscribe();
      /** @type {null} */
      this._subscription = null;
    }
  };
  createObject(exp.prototype, {
    _subscription : null
  });
  /** @type {function (string): undefined} */
  module.exports = exp;
}, null);
__d("LayerFadeOnHide", ["Animation", "Layer", "Style", "UserAgent_DEPRECATED", "copyProperties", "setTimeoutAcrossTransitions"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, _$, obs, style, Env, patch, $sanitize) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function $(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  $.prototype.enable = function() {
    if (Env.ie() < 9) {
      return;
    }
    this._subscription = this._layer.subscribe("starthide", this._handleStartHide.bind(this));
  };
  /**
   * @return {undefined}
   */
  $.prototype.disable = function() {
    if (this._subscription) {
      this._subscription.unsubscribe();
      /** @type {null} */
      this._subscription = null;
    }
  };
  /**
   * @return {?}
   */
  $.prototype._handleStartHide = function() {
    /** @type {boolean} */
    var n = true;
    var tooltip = obs.subscribe("show", function() {
      tooltip.unsubscribe();
      /** @type {boolean} */
      n = false;
    });
    $sanitize(function() {
      tooltip.unsubscribe();
      /** @type {null} */
      tooltip = null;
      var div = function() {
        this._layer.finishHide();
      }.bind(this);
      if (n) {
        this._animate(div);
      } else {
        div();
      }
    }.bind(this), 0);
    return false;
  };
  /**
   * @param {Function} properties
   * @return {undefined}
   */
  $.prototype._animate = function(properties) {
    var s = this._layer.getRoot();
    (new _$(s)).from("opacity", 1).to("opacity", 0).duration(150).ondone(function() {
      style.set(s, "opacity", "");
      properties();
    }).go();
  };
  patch($.prototype, {
    _subscription : null
  });
  /** @type {function (string): undefined} */
  module.exports = $;
}, null);
__d("LayerFadeOnShow", ["Animation", "Style", "UserAgent_DEPRECATED", "copyProperties", "emptyFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, Grid, property, Env, fn, el) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function self(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  self.prototype.enable = function() {
    if (Env.ie() < 9) {
      return;
    }
    /** @type {Array} */
    this._subscriptions = [this._layer.subscribe("beforeshow", function() {
      property.set(this._layer.getRoot(), "opacity", 0);
    }.bind(this)), this._layer.subscribe("show", this._animate.bind(this))];
  };
  /**
   * @return {undefined}
   */
  self.prototype.disable = function() {
    if (this._subscriptions) {
      for (;this._subscriptions.length;) {
        this._subscriptions.pop().unsubscribe();
      }
      /** @type {null} */
      this._subscriptions = null;
    }
  };
  /**
   * @return {?}
   */
  self.prototype._getDuration = function() {
    return 100;
  };
  /**
   * @return {undefined}
   */
  self.prototype._animate = function() {
    var db = this._layer.getRoot();
    (new Grid(db)).from("opacity", 0).to("opacity", 1).duration(this._getDuration()).ondone(property.set.bind(null, db, "opacity", "")).go();
  };
  /**
   * @param {string} attribute
   * @return {?}
   */
  self.forDuration = function(attribute) {
    /**
     * @return {undefined}
     */
    function ret() {
      if (self !== null) {
        self.apply(this, arguments);
      }
    }
    var key;
    for (key in self) {
      if (self.hasOwnProperty(key)) {
        ret[key] = self[key];
      }
    }
    /** @type {(l.prototype|null)} */
    var config = self === null ? null : self.prototype;
    /** @type {Object} */
    ret.prototype = Object.create(config);
    /** @type {function (): undefined} */
    ret.prototype.constructor = ret;
    /** @type {function (string): undefined} */
    ret.__superConstructor__ = self;
    ret.prototype._getDuration = el.thatReturns(attribute);
    return ret;
  };
  fn(self.prototype, {
    _subscriptions : null
  });
  /** @type {function (string): undefined} */
  context.exports = self;
}, null);
__d("LayerFormHooks", ["Event", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, self, createObject) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function exp(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    var query = this._layer.getRoot();
    /** @type {Array} */
    this._subscriptions = [self.listen(query, "submit", this._onSubmit.bind(this)), self.listen(query, "success", this._onSuccess.bind(this)), self.listen(query, "error", this._onError.bind(this))];
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    this._subscriptions.forEach(function(selfObj) {
      selfObj.remove();
    });
    /** @type {null} */
    this._subscriptions = null;
  };
  /**
   * @param {?} event
   * @return {undefined}
   */
  exp.prototype._onSubmit = function(event) {
    if (this._layer.inform("submit", event) === false) {
      event.kill();
    }
  };
  /**
   * @param {?} proc
   * @return {undefined}
   */
  exp.prototype._onSuccess = function(proc) {
    if (this._layer.inform("success", proc) === false) {
      proc.kill();
    }
  };
  /**
   * @param {Object} event
   * @return {undefined}
   */
  exp.prototype._onError = function(event) {
    var err = event.getData();
    if (this._layer.inform("error", {
      response : err.response
    }) === false) {
      event.kill();
    }
  };
  createObject(exp.prototype, {
    _subscriptions : null
  });
  /** @type {function (string): undefined} */
  module.exports = exp;
}, null);
__d("LayerMouseHooks", ["Arbiter", "ContextualThing", "Event", "Layer"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, deepDataAndEvents, dataAndEvents, Event, obs) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function exp(attribute) {
    /** @type {string} */
    this._layer = attribute;
    /** @type {Array} */
    this._subscriptions = [];
    /** @type {boolean} */
    this._currentlyActive = false;
  }
  var _this = new deepDataAndEvents;
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    /** @type {Array} */
    this._subscriptions = [_this.subscribe("mouseenter", this._handleActive.bind(this)), _this.subscribe("mouseleave", this._handleInactive.bind(this)), this._layer.subscribe("hide", function() {
      /** @type {boolean} */
      this._currentlyActive = false;
    }.bind(this))];
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    for (;this._subscriptions.length;) {
      this._subscriptions.pop().unsubscribe();
    }
    /** @type {Array} */
    this._subscriptions = [];
    /** @type {boolean} */
    this._currentlyActive = false;
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  exp.prototype._handleActive = function(dataAndEvents, deepDataAndEvents) {
    if (!this._currentlyActive && this._isNodeWithinStack(deepDataAndEvents)) {
      this._layer.inform("mouseenter");
      /** @type {boolean} */
      this._currentlyActive = true;
    }
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  exp.prototype._handleInactive = function(dataAndEvents, deepDataAndEvents) {
    if (this._currentlyActive) {
      if (!deepDataAndEvents || !this._isNodeWithinStack(deepDataAndEvents)) {
        this._layer.inform("mouseleave");
        /** @type {boolean} */
        this._currentlyActive = false;
      }
    }
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  exp.prototype._isNodeWithinStack = function(deepDataAndEvents) {
    return dataAndEvents.containsIncludingLayers(this._layer.getContentRoot(), deepDataAndEvents);
  };
  obs.subscribe("show", function(dataAndEvents, m) {
    var target = m.getContentRoot();
    /** @type {Array} */
    var stack = [Event.listen(target, "mouseenter", function() {
      _this.inform("mouseenter", target);
    }), Event.listen(target, "mouseleave", function(e) {
      _this.inform("mouseleave", e.getRelatedTarget());
    })];
    var memory = m.subscribe("hide", function() {
      for (;stack.length;) {
        stack.pop().remove();
      }
      memory.unsubscribe();
      /** @type {null} */
      stack = memory = null;
    });
  });
  /** @type {function (string): undefined} */
  module.exports = exp;
}, null);
__d("LayerRefocusOnHide", ["ContextualThing", "DOM", "DOMQuery", "Focus", "Parent", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, ele, rootjQuery, $, excludes, Dom, fn) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function self(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  self.prototype.enable = function() {
    this._subscription = this._layer.subscribe("hide", this._handle.bind(this));
  };
  /**
   * @return {undefined}
   */
  self.prototype.disable = function() {
    this._subscription.unsubscribe();
    /** @type {null} */
    this._subscription = null;
  };
  /**
   * @param {?} res
   * @param {?} item
   * @return {undefined}
   */
  self.prototype._handle = function(res, item) {
    if (document.activeElement === document.body || $.contains(this._layer.getRoot(), document.activeElement)) {
      var el = this._layer.getCausalElement();
      for (;el && !el.offsetWidth;) {
        var selector = Dom.byClass(el, "uiToggle");
        if (selector && selector.offsetWidth) {
          el = rootjQuery.scry(selector, '[rel="toggle"]')[0];
        } else {
          var _el = ele.getContext(el);
          if (_el) {
            el = _el;
          } else {
            el = el.parentNode;
          }
        }
      }
      if (el) {
        if (el.tabIndex != -1) {
          excludes.setWithoutOutline(el);
        }
      }
    }
  };
  fn(self.prototype, {
    _subscription : null
  });
  /** @type {function (string): undefined} */
  context.exports = self;
}, null);
__d("LayerRemoveOnHide", ["DOM", "copyProperties"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, div, createObject) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function exp(attribute) {
    /** @type {string} */
    this._layer = attribute;
  }
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    this._subscription = this._layer.subscribe("hide", div.remove.bind(null, this._layer.getRoot()));
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    if (this._subscription) {
      this._subscription.unsubscribe();
      /** @type {null} */
      this._subscription = null;
    }
  };
  createObject(exp.prototype, {
    _subscription : null
  });
  /** @type {function (string): undefined} */
  module.exports = exp;
}, null);
__d("LayerTabIsolation", ["TabIsolation", "copyProperties"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents, createObject) {
  /**
   * @param {string} attribute
   * @return {undefined}
   */
  function exp(attribute) {
    /** @type {string} */
    this._layer = attribute;
    /** @type {null} */
    this._tabIsolation = null;
  }
  /**
   * @return {undefined}
   */
  exp.prototype.enable = function() {
    this._tabIsolation = new dataAndEvents(this._layer.getRoot());
    /** @type {Array} */
    this._subscriptions = [this._layer.subscribe("show", this._tabIsolation.enable.bind(this._tabIsolation)), this._layer.subscribe("hide", this._tabIsolation.disable.bind(this._tabIsolation))];
  };
  /**
   * @return {undefined}
   */
  exp.prototype.disable = function() {
    for (;this._subscriptions.length;) {
      this._subscriptions.pop().unsubscribe();
    }
    this._tabIsolation.disable();
    /** @type {null} */
    this._tabIsolation = null;
  };
  createObject(exp.prototype, {
    _subscriptions : []
  });
  /** @type {function (string): undefined} */
  module.exports = exp;
}, null);
