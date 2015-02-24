/**
 * @license-header
 @providesModule ImmediateImplementation
 */
if (self.CavalryLogger) {
  CavalryLogger.start_js(["cZ+Dx"]);
}
if (!Array.from) {
  /**
   * @param {(Object|boolean|number|string)} object
   * @return {?}
   */
  Array.from = function(object) {
    if (object == null) {
      throw new TypeError("Object is null or undefined");
    }
    var callback = arguments[1];
    var thisp = arguments[2];
    var module = this;
    var clone = Object(object);
    var subKey = typeof Symbol === "function" ? Symbol.iterator : "@@iterator";
    /** @type {boolean} */
    var replaceIsFunction = typeof callback === "function";
    /** @type {boolean} */
    var isBind = typeof clone[subKey] === "function";
    /** @type {number} */
    var i = 0;
    var codeSegments;
    var n;
    if (isBind) {
      codeSegments = typeof module === "function" ? new module : [];
      var stream = clone[subKey]();
      var input;
      for (;!(input = stream.next()).done;) {
        n = input.value;
        if (replaceIsFunction) {
          n = callback.call(thisp, n, i);
        }
        codeSegments[i] = n;
        i += 1;
      }
      /** @type {number} */
      codeSegments.length = i;
      return codeSegments;
    }
    var times = clone.length;
    if (isNaN(times) || times < 0) {
      /** @type {number} */
      times = 0;
    }
    codeSegments = typeof module === "function" ? new module(times) : new Array(times);
    for (;i < times;) {
      n = clone[i];
      if (replaceIsFunction) {
        n = callback.call(thisp, n, i);
      }
      codeSegments[i] = n;
      i += 1;
    }
    /** @type {number} */
    codeSegments.length = i;
    return codeSegments;
  };
}
self.__DEV__ = self.__DEV__ || 0;
(function(argv) {
  /**
   * @param {Function} cb
   * @param {?} elem
   * @return {?}
   */
  function reduce(cb, elem) {
    if (this == null) {
      throw new TypeError("Array.prototype.findIndex called on null or undefined");
    }
    if (typeof cb !== "function") {
      throw new TypeError("predicate must be a function");
    }
    var t = Object(this);
    /** @type {number} */
    var padLength = t.length >>> 0;
    /** @type {number} */
    var i = 0;
    for (;i < padLength;i++) {
      if (cb.call(elem, t[i], i, t)) {
        return i;
      }
    }
    return-1;
  }
  if (!Array.prototype.findIndex) {
    /** @type {function (Function, ?): ?} */
    Array.prototype.findIndex = reduce;
  }
  if (!Array.prototype.find) {
    /**
     * @param {?} criteria
     * @param {?} thisObj
     * @return {?}
     */
    Array.prototype.find = function(criteria, thisObj) {
      if (this == null) {
        throw new TypeError("Array.prototype.find called on null or undefined");
      }
      var idx = reduce.call(this, criteria, thisObj);
      return idx === -1 ? argv : this[idx];
    };
  }
})();
if (JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]') {
  JSON.stringify = function(callback) {
    /** @type {RegExp} */
    var r20 = /\u2028/g;
    /** @type {RegExp} */
    var rreturn = /\u2029/g;
    return function(err, value, array) {
      /** @type {string} */
      var ret = callback.call(this, err, value, array);
      if (ret) {
        if (-1 < ret.indexOf("\u2028")) {
          /** @type {string} */
          ret = ret.replace(r20, "\\u2028");
        }
        if (-1 < ret.indexOf("\u2029")) {
          /** @type {string} */
          ret = ret.replace(rreturn, "\\u2029");
        }
      }
      return ret;
    };
  }(JSON.stringify);
}
if (!Object.assign) {
  /**
   * @param {?} opt_attributes
   * @param {?} value
   * @return {?}
   */
  Object.assign = function(opt_attributes, value) {
    if (opt_attributes == null) {
      throw new TypeError("Object.assign target cannot be null or undefined");
    }
    var object = Object(opt_attributes);
    /** @type {function (this:Object, *): boolean} */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /** @type {number} */
    var j = 1;
    for (;j < arguments.length;j++) {
      var arr = arguments[j];
      if (arr == null) {
        continue;
      }
      var iterable = Object(arr);
      var key;
      for (key in iterable) {
        if (hasOwnProperty.call(iterable, key)) {
          object[key] = iterable[key];
        }
      }
    }
    return object;
  };
}
(function(dataAndEvents) {
  /**
   * @param {?} a
   * @param {?} e
   * @return {?}
   */
  dataAndEvents.__m = function(a, e) {
    a.__SMmeta = e;
    return a;
  };
})(this);
if (!String.prototype.startsWith) {
  /**
   * @param {?} i
   * @return {?}
   */
  String.prototype.startsWith = function(i) {
    if (this == null) {
      throw TypeError();
    }
    /** @type {string} */
    var self = String(this);
    /** @type {number} */
    var pos = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
    /** @type {number} */
    var N = Math.min(Math.max(pos, 0), self.length);
    return self.indexOf(String(i), pos) == N;
  };
}
if (!String.prototype.endsWith) {
  /**
   * @param {?} str
   * @return {?}
   */
  String.prototype.endsWith = function(str) {
    if (this == null) {
      throw TypeError();
    }
    /** @type {string} */
    var array = String(this);
    /** @type {number} */
    var olen = array.length;
    /** @type {string} */
    var t = String(str);
    /** @type {number} */
    var scalex = arguments.length > 1 ? Number(arguments[1]) || 0 : olen;
    /** @type {number} */
    var max = Math.min(Math.max(scalex, 0), olen);
    /** @type {number} */
    var fromIndex = max - t.length;
    if (fromIndex < 0) {
      return false;
    }
    return array.lastIndexOf(t, fromIndex) == fromIndex;
  };
}
if (!String.prototype.contains) {
  /**
   * @param {string} obj
   * @return {?}
   */
  String.prototype.contains = function(obj) {
    if (this == null) {
      throw TypeError();
    }
    /** @type {string} */
    var path = String(this);
    /** @type {number} */
    var n = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
    return path.indexOf(String(obj), n) != -1;
  };
}
if (!String.prototype.repeat) {
  /**
   * @param {number} num
   * @return {?}
   */
  String.prototype.repeat = function(num) {
    if (this == null) {
      throw TypeError();
    }
    /** @type {string} */
    var s = String(this);
    /** @type {number} */
    num = Number(num) || 0;
    if (num < 0 || num === Infinity) {
      throw RangeError();
    }
    if (num === 1) {
      return s;
    }
    /** @type {string} */
    var t = "";
    for (;num;) {
      if (num & 1) {
        t += s;
      }
      if (num >>= 1) {
        s += s;
      }
    }
    return t;
  };
}
/**
 * @param {Array} v
 * @return {?}
 */
__t = function(v) {
  return v[0];
};
/**
 * @param {?} dataAndEvents
 * @return {?}
 */
__w = function(dataAndEvents) {
  return dataAndEvents;
};
(function(root) {
  /**
   * @param {Array} obj
   * @return {?}
   */
  function resolve(obj) {
    /** @type {Array.<?>} */
    var keys = Array.prototype.slice.call(obj);
    var iterable = {};
    var i;
    var key;
    var result;
    var name;
    for (;keys.length;) {
      key = keys.shift();
      if (iterable[key]) {
        continue;
      }
      /** @type {boolean} */
      iterable[key] = true;
      result = modules[key];
      if (!result || !result.waiting) {
        continue;
      }
      /** @type {number} */
      i = 0;
      for (;i < result.dependencies.length;i++) {
        name = result.dependencies[i];
        if (!modules[name] || modules[name].waiting) {
          keys.push(name);
        }
      }
    }
    for (key in iterable) {
      if (hasOwnProperty.call(iterable, key)) {
        keys.push(key);
      }
    }
    /** @type {Array} */
    var assigns = [];
    /** @type {number} */
    i = 0;
    for (;i < keys.length;i++) {
      key = keys[i];
      var vvar = key;
      result = modules[key];
      if (!result) {
        vvar += " is not defined";
      } else {
        if (!result.waiting) {
          vvar += " is ready";
        } else {
          /** @type {Array} */
          var classes = [];
          /** @type {number} */
          var j = 0;
          for (;j < result.dependencies.length;j++) {
            name = result.dependencies[j];
            if (!modules[name] || modules[name].waiting) {
              classes.push(name);
            }
          }
          vvar += " is waiting for " + classes.join(", ");
        }
      }
      assigns.push(vvar);
    }
    return assigns.join("\n");
  }
  /**
   * @param {string} message
   * @return {undefined}
   */
  function AssertionError(message) {
    /** @type {string} */
    this.name = "ModuleError";
    /** @type {string} */
    this.message = message;
    /** @type {string} */
    this.stack = Error(message).stack;
    /** @type {number} */
    this.framesToPop = 2;
  }
  /**
   * @param {string} id
   * @return {?}
   */
  function require(id) {
    var options = modules[id];
    var type;
    var j;
    var msg;
    if (options && options.exports) {
      if (options.refcount-- === 1) {
        delete modules[id];
      }
      return options.exports;
    }
    if (root.ErrorUtils && !root.ErrorUtils.inGuard()) {
      return ErrorUtils.applyWithGuard(require, this, arguments);
    }
    if (!options) {
      /** @type {string} */
      msg = 'Requiring unknown module "' + id + '"';
      throw new AssertionError(msg);
    }
    if (options.hasError) {
      throw new AssertionError('Requiring module "' + id + '" which threw an exception');
    }
    if (options.waiting) {
      throw new AssertionError('Requiring module "' + id + '" with unresolved dependencies: ' + resolve([id]));
    }
    var String = options.exports = {};
    var text = options.factory;
    if (p.call(text) === "[object Function]") {
      /** @type {Array} */
      var value = [];
      var events = options.dependencies;
      var minLength = events.length;
      var date;
      if (options.special & err2) {
        /** @type {number} */
        minLength = Math.min(minLength, text.length);
      }
      try {
        /** @type {number} */
        j = 0;
        for (;value.length < minLength;j++) {
          type = events[j];
          if (!options.inlineRequires[type]) {
            value.push(type === "module" ? options : type === "exports" ? String : require.call(null, type));
          }
        }
        ++__getTotalFactories;
        listeners.unshift(0);
        var _startTime = _getTime();
        try {
          date = text.apply(options.context || root, value);
        } catch (self) {
          if (modules.ex && modules.erx) {
            var wrapper = require.call(null, "ex");
            var fn = require.call(null, "erx");
            var args = fn(self.message);
            if (args[0].indexOf(' from module "%s"') < 0) {
              args[0] += ' from module "%s"';
              /** @type {string} */
              args[args.length] = id;
            }
            self.message = wrapper.apply(null, args);
          }
          throw self;
        } finally {
          /** @type {number} */
          var cnl = _getTime() - _startTime;
          /** @type {number} */
          var x = cnl - listeners.shift();
          listeners[0] += cnl;
          /** @type {number} */
          options.factoryTime = x;
        }
      } catch (ja) {
        /** @type {boolean} */
        options.hasError = true;
        /** @type {null} */
        options.exports = null;
        throw ja;
      }
      if (date) {
        options.exports = date;
      }
    } else {
      options.exports = text;
    }
    if (options.refcount-- === 1) {
      delete modules[id];
    }
    return options.exports;
  }
  /**
   * @param {string} name
   * @param {string} deps
   * @param {string} factory
   * @param {string} prefix
   * @param {string} v13
   * @param {number} recurring
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  function define(name, deps, factory, prefix, v13, recurring, deepDataAndEvents) {
    if (root.TimeSlice && !root.TimeSlice.inGuard()) {
      return root.TimeSlice.guard(function() {
        define(name, deps, factory, prefix, v13, recurring, deepDataAndEvents);
      }, "define " + name)();
    }
    if (deps === void 0) {
      /** @type {Array} */
      deps = [];
      /** @type {string} */
      factory = name;
      name = resolvePath();
    } else {
      if (factory === void 0) {
        /** @type {string} */
        factory = deps;
        if (p.call(name) === "[object Array]") {
          /** @type {string} */
          deps = name;
          name = resolvePath();
        } else {
          /** @type {Array} */
          deps = [];
        }
      }
    }
    var self = {
      cancel : remove.bind(this, name)
    };
    var fn = modules[name];
    if (fn) {
      if (recurring) {
        fn.refcount += recurring;
      }
      return self;
    } else {
      if (!deps && (!factory && recurring)) {
        old[name] = (old[name] || 0) + recurring;
        return self;
      }
    }
    var src = (old[name] || 0) + (recurring || 0);
    delete old[name];
    fn = new init(name, src, null, factory, deps, v13, prefix, deepDataAndEvents || {});
    modules[name] = fn;
    main(name);
    return self;
  }
  /**
   * @param {string} id
   * @param {?} allBindingsAccessor
   * @param {Function} depMaps
   * @param {Function} factory
   * @param {Array} dependencies
   * @param {Object} context
   * @param {number} rootjQuery
   * @param {?} opt_setup
   * @return {undefined}
   */
  function init(id, allBindingsAccessor, depMaps, factory, dependencies, context, rootjQuery, opt_setup) {
    /** @type {string} */
    this.id = id;
    this.refcount = allBindingsAccessor;
    this.exports = depMaps || null;
    /** @type {Function} */
    this.factory = factory;
    /** @type {Array} */
    this.dependencies = dependencies;
    /** @type {Object} */
    this.context = context;
    this.special = rootjQuery || 0;
    this.inlineRequires = opt_setup;
    this.waitingMap = {};
    /** @type {number} */
    this.waiting = 0;
    /** @type {boolean} */
    this.hasError = false;
    /** @type {null} */
    this.factoryTime = null;
  }
  /**
   * @param {string} name
   * @return {undefined}
   */
  function remove(name) {
    if (!modules[name]) {
      return;
    }
    var obj = modules[name];
    delete modules[name];
    var id;
    for (id in obj.waitingMap) {
      if (obj.waitingMap[id]) {
        delete done[id][name];
      }
    }
    /** @type {number} */
    var i = 0;
    for (;i < obj.dependencies.length;i++) {
      id = obj.dependencies[i];
      if (modules[id]) {
        if (modules[id].refcount-- === 1) {
          remove(id);
        }
      } else {
        if (old[id]) {
          old[id]--;
        }
      }
    }
  }
  /**
   * @param {string} a
   * @param {string} factory
   * @param {string} b
   * @return {?}
   */
  function async(a, factory, b) {
    return define(a, factory, void 0, prefix, b, 1);
  }
  /**
   * @return {?}
   */
  function resolvePath() {
    return "__mod__" + __mod__++;
  }
  /**
   * @param {Element} data
   * @param {?} id
   * @return {undefined}
   */
  function callback(data, id) {
    if (!data.waitingMap[id] && data.id !== id) {
      data.waiting++;
      /** @type {number} */
      data.waitingMap[id] = 1;
      if (!done[id]) {
        done[id] = {};
      }
      /** @type {number} */
      done[id][data.id] = 1;
    }
  }
  /**
   * @param {string} name
   * @return {undefined}
   */
  function main(name) {
    /** @type {Array} */
    var keys = [];
    var self = modules[name];
    var i;
    var k;
    var key;
    /** @type {number} */
    k = 0;
    for (;k < self.dependencies.length;k++) {
      i = self.dependencies[k];
      if (!modules[i]) {
        callback(self, i);
      } else {
        if (modules[i].waiting) {
          for (key in modules[i].waitingMap) {
            if (modules[i].waitingMap[key]) {
              callback(self, key);
            }
          }
        }
      }
    }
    if (self.waiting === 0 && self.special & prefix) {
      keys.push(name);
    }
    if (done[name]) {
      var set = done[name];
      var data;
      done[name] = void 0;
      for (i in set) {
        data = modules[i];
        for (key in self.waitingMap) {
          if (self.waitingMap[key]) {
            callback(data, key);
          }
        }
        if (data.waitingMap[name]) {
          /** @type {number} */
          data.waitingMap[name] = 0;
          data.waiting--;
        }
        if (data.waiting === 0 && data.special & prefix) {
          keys.push(i);
        }
      }
    }
    /** @type {number} */
    k = 0;
    for (;k < keys.length;k++) {
      require.call(null, keys[k]);
    }
  }
  /**
   * @param {string} name
   * @param {Object} value
   * @return {undefined}
   */
  function factory(name, value) {
    modules[name] = new init(name, 0, value);
  }
  if (root.require) {
    return;
  }
  /** @type {function (this:*): string} */
  var p = Object.prototype.toString;
  var modules = {};
  var done = {};
  var old = {};
  /** @type {number} */
  var __mod__ = 0;
  /** @type {number} */
  var prefix = 1;
  /** @type {number} */
  var err2 = 2;
  /** @type {function (this:Object, *): boolean} */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /** @type {Object} */
  AssertionError.prototype = Object.create(Error.prototype);
  /** @type {function (string): undefined} */
  AssertionError.prototype.constructor = AssertionError;
  var d = root.performance || (root.msPerformance || (root.webkitPerformance || {}));
  if (!d.now) {
    /** @type {function (new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
    d = root.Date;
  }
  var _getTime = d ? d.now.bind(d) : function() {
    return 0;
  };
  /** @type {Array} */
  var listeners = [0];
  /** @type {number} */
  var __getTotalFactories = 0;
  /**
   * @return {?}
   */
  require.__getFactoryTime = function() {
    /** @type {number} */
    var factoryTime = 0;
    var id;
    for (id in modules) {
      if (modules.hasOwnProperty(id)) {
        factoryTime += modules[id].factoryTime;
      }
    }
    return factoryTime;
  };
  /**
   * @return {?}
   */
  require.__getTotalFactories = function() {
    return __getTotalFactories;
  };
  factory("module", 0);
  factory("exports", 0);
  factory("define", define);
  factory("global", root);
  factory("require", require);
  factory("requireDynamic", require);
  factory("requireLazy", async);
  define.amd = {};
  /** @type {function (string, string, string, string, string, number, string): ?} */
  root.define = define;
  /** @type {function (string): ?} */
  root.require = require;
  /** @type {function (string): ?} */
  root.requireDynamic = require;
  /** @type {function (string, string, string): ?} */
  root.requireLazy = async;
  require.__debug = {
    modules : modules,
    deps : done,
    /**
     * @return {undefined}
     */
    printDependencyInfo : function() {
      if (!root.console) {
        return;
      }
      /** @type {Array.<string>} */
      var result = Object.keys(require.__debug.deps);
      root.console.log(resolve(result));
    }
  };
  /**
   * @param {string} name
   * @param {?} p
   * @param {string} definition
   * @param {string} err
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  root.__d = function(name, p, definition, err, deepDataAndEvents) {
    /** @type {Array} */
    var props = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"];
    define(name, props.concat(p), definition, err || err2, null, null, deepDataAndEvents);
  };
})(this);
__d("copyProperties", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Object} to
   * @param {string} var_args
   * @param {string} b
   * @param {?} merge
   * @param {?} d
   * @param {?} e
   * @param {?} a
   * @return {?}
   */
  function extend(to, var_args, b, merge, d, e, a) {
    to = to || {};
    /** @type {Array} */
    var attrNames = [var_args, b, merge, d, e];
    /** @type {number} */
    var i = 0;
    var from;
    for (;attrNames[i];) {
      from = attrNames[i++];
      var key;
      for (key in from) {
        to[key] = from[key];
      }
      if (from.hasOwnProperty && (from.hasOwnProperty("toString") && (typeof from.toString != "undefined" && to.toString !== from.toString))) {
        to.toString = from.toString;
      }
    }
    return to;
  }
  /** @type {function (Object, string, string, ?, ?, ?, ?): ?} */
  module.exports = extend;
}, null);
__d("Env", ["copyProperties"], function(opts, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, merge) {
  var ret = {
    start : Date.now()
  };
  if (opts.Env) {
    merge(ret, opts.Env);
    opts.Env = void 0;
  }
  module.exports = ret;
}, null);
__d("eprintf", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} fmt
   * @return {?}
   */
  var format = function(fmt) {
    /** @type {Array.<?>} */
    var files = Array.prototype.slice.call(arguments).map(function(opt_message) {
      return String(opt_message);
    });
    /** @type {number} */
    var j = fmt.split("%s").length - 1;
    if (j !== files.length - 1) {
      return format("eprintf args number mismatch: %s", JSON.stringify(files));
    }
    /** @type {number} */
    var i = 1;
    return fmt.replace(/%s/g, function(dataAndEvents) {
      return String(files[i++]);
    });
  };
  /** @type {function (string): ?} */
  module.exports = format;
}, null);
__d("ex", ["eprintf"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, opt_attributes) {
  /**
   * @return {?}
   */
  var format = function() {
    /** @type {Array} */
    var args = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var argLength = arguments.length;
    for (;i < argLength;i++) {
      args.push(arguments[i]);
    }
    /** @type {Array.<?>} */
    args = args.map(function(opt_message) {
      return String(opt_message);
    });
    if (args[0].split("%s").length !== args.length) {
      return format("ex args number mismatch: %s", JSON.stringify(args));
    }
    return format._prefix + JSON.stringify(args) + format._suffix;
  };
  /** @type {string} */
  format._prefix = "<![EX[";
  /** @type {string} */
  format._suffix = "]]\x3e";
  /** @type {function (): ?} */
  module.exports = format;
}, null);
__d("erx", ["ex"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, route) {
  /**
   * @param {string} string
   * @return {?}
   */
  var init = function(string) {
    if (typeof string !== "string") {
      return string;
    }
    /** @type {number} */
    var pos = string.indexOf(route._prefix);
    /** @type {number} */
    var index = string.lastIndexOf(route._suffix);
    if (pos < 0 || index < 0) {
      return[string];
    }
    var i = pos + route._prefix.length;
    var position = index + route._suffix.length;
    if (i >= index) {
      return["erx slice failure: %s", string];
    }
    /** @type {string} */
    var key = string.substring(0, pos);
    /** @type {string} */
    var value = string.substring(position);
    /** @type {string} */
    string = string.substring(i, index);
    var result;
    try {
      /** @type {*} */
      result = JSON.parse(string);
      /** @type {string} */
      result[0] = key + result[0] + value;
    } catch (q) {
      return["erx parse failure: %s", string];
    }
    return result;
  };
  /** @type {function (string): ?} */
  module.exports = init;
}, null);
__d("ErrorUtils", ["Env", "eprintf", "erx"], function(node, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, dataAndEvents, method, $) {
  /**
   * @param {string} attrs
   * @return {?}
   */
  function compile(attrs) {
    if (!attrs) {
      return[];
    }
    var js = attrs.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]|^\w+:\s.*?\n/g, "").split("\n").map(function(line) {
      var index;
      var style;
      var column;
      line = line.trim();
      if (/(:(\d+)(:(\d+))?)$/.test(line)) {
        /** @type {string} */
        style = RegExp.$2;
        /** @type {string} */
        column = RegExp.$4;
        line = line.slice(0, -RegExp.$1.length);
      }
      if (regex.test(line) || /(.*)(@|\s)[^\s]+$/.test(line)) {
        line = line.substring(RegExp.$1.length + 1);
        /** @type {string} */
        index = /(at)?\s*(.*)([^\s]+|$)/.test(RegExp.$1) ? RegExp.$2 : "";
      }
      var data = {
        identifier : index,
        script : line,
        line : style,
        column : column
      };
      if (fn) {
        fn(data);
      }
      /** @type {string} */
      data.text = "    at" + (data.identifier ? " " + data.identifier + " (" : " ") + data.script + (data.line ? ":" + data.line : "") + (data.column ? ":" + data.column : "") + (data.identifier ? ")" : "");
      return data;
    });
    return js;
  }
  /**
   * @param {Object} self
   * @return {?}
   */
  function require(self) {
    if (!self) {
      return{};
    } else {
      if (self._originalError) {
        return self;
      }
    }
    var results = compile(self.stackTrace || self.stack);
    /** @type {boolean} */
    var na = false;
    if (self.framesToPop) {
      var len = self.framesToPop;
      var info;
      for (;len > 0 && results.length > 0;) {
        info = results.shift();
        len--;
        /** @type {boolean} */
        na = true;
      }
      if (unit.test(self.message) && (self.framesToPop === 2 && info)) {
        if (rchecked.test(info.script)) {
          self.message += " at " + info.script + (info.line ? ":" + info.line : "") + (info.column ? ":" + info.column : "");
        }
      }
      delete self.framesToPop;
    }
    var obj = {
      line : self.lineNumber || self.line,
      column : self.columnNumber || self.column,
      name : self.name,
      message : self.message,
      messageWithParams : self.messageWithParams,
      type : self.type,
      script : self.fileName || (self.sourceURL || self.script),
      stack : results.map(function(script) {
        return script.text;
      }).join("\n"),
      stackFrames : results,
      guard : self.guard,
      guardList : self.guardList,
      extra : self.extra,
      snapshot : self.snapshot
    };
    if (typeof obj.message === "string" && !obj.messageWithParams) {
      obj.messageWithParams = $(obj.message);
      obj.message = method.apply(node, obj.messageWithParams);
    } else {
      obj.messageObject = obj.message;
      /** @type {string} */
      obj.message = String(obj.message);
    }
    if (fn) {
      fn(obj);
    }
    if (na) {
      delete obj.script;
      delete obj.line;
      delete obj.column;
    }
    if (results[0]) {
      obj.script = obj.script || results[0].script;
      obj.line = obj.line || results[0].line;
      obj.column = obj.column || results[0].column;
    }
    /** @type {Object} */
    obj._originalError = self;
    var prop;
    for (prop in obj) {
      if (obj[prop] == null) {
        delete obj[prop];
      }
    }
    return obj;
  }
  /**
   * @param {Object} req
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  function run(req, dataAndEvents) {
    if (x) {
      return false;
    }
    if (listeners.length > 0) {
      req.guard = req.guard || listeners[0];
      /** @type {Array.<?>} */
      req.guardList = listeners.slice();
    }
    req = require(req);
    !dataAndEvents;
    if (queue.length > max) {
      queue.splice(max / 2, 1);
    }
    queue.push(req);
    /** @type {boolean} */
    x = true;
    /** @type {number} */
    var i = 0;
    for (;i < handlers.length;i++) {
      try {
        handlers[i](req);
      } catch (oa) {
      }
    }
    /** @type {boolean} */
    x = false;
    return true;
  }
  /**
   * @return {?}
   */
  function restoreScript() {
    return elem;
  }
  /**
   * @param {?} l
   * @return {undefined}
   */
  function makeArray(l) {
    listeners.unshift(l);
    /** @type {boolean} */
    elem = true;
  }
  /**
   * @return {undefined}
   */
  function flush() {
    listeners.shift();
    /** @type {boolean} */
    elem = listeners.length !== 0;
  }
  /**
   * @param {Function} fn
   * @param {Function} scope
   * @param {Array} args
   * @param {Function} mayParseLabeledStatementInstead
   * @param {string} method
   * @return {?}
   */
  function init(fn, scope, args, mayParseLabeledStatementInstead, method) {
    makeArray(method || POST);
    var element;
    if (dataAndEvents.nocatch) {
      /** @type {boolean} */
      y = true;
    }
    if (y) {
      try {
        element = fn.apply(scope, args || []);
      } finally {
        flush();
      }
      return element;
    }
    try {
      element = fn.apply(scope, args || []);
      return element;
    } catch (index) {
      var self = require(index);
      if (mayParseLabeledStatementInstead) {
        mayParseLabeledStatementInstead(self);
      }
      if (fn) {
        self.callee = fn.toString().substring(0, 100);
      }
      if (args) {
        /** @type {string} */
        self.args = Array.prototype.slice.call(args).toString().substring(0, 100);
      }
      self.guard = listeners[0];
      /** @type {Array.<?>} */
      self.guardList = listeners.slice();
      run(self);
    } finally {
      flush();
    }
  }
  /**
   * @param {Function} cb
   * @param {string} f
   * @param {Function} execResult
   * @return {?}
   */
  function parse(cb, f, execResult) {
    /**
     * @return {?}
     */
    function number() {
      return init(cb, execResult || this, arguments, null, f);
    }
    f = f || (cb.name || m);
    return number;
  }
  /**
   * @param {string} error
   * @param {Function} wait
   * @param {string} last
   * @param {string} code
   * @param {Object} err
   * @return {undefined}
   */
  function next(error, wait, last, code, err) {
    err = err || {};
    err.message = err.message || error;
    err.script = err.script || wait;
    err.line = err.line || last;
    err.column = err.column || code;
    /** @type {string} */
    err.guard = id;
    /** @type {Array} */
    err.guardList = [id];
    run(err, true);
  }
  /**
   * @param {Function} fn
   * @param {boolean} target
   * @return {undefined}
   */
  function addListener(fn, target) {
    handlers.push(fn);
    if (!target) {
      queue.forEach(fn);
    }
  }
  /**
   * @param {?} params
   * @return {undefined}
   */
  function _execSql(params) {
    fn = params;
  }
  var nocatch = {};
  /** @type {string} */
  var POST = "<anonymous guard>";
  /** @type {string} */
  var m = "<generated guard>";
  /** @type {string} */
  var id = "<window.onerror>";
  /** @type {RegExp} */
  var rchecked = /^https?:\/\//i;
  /** @type {RegExp} */
  var unit = /^Type Mismatch for/;
  /** @type {Array} */
  var dig = ["Unknown script code", "Function code", "eval code"];
  /** @type {RegExp} */
  var regex = new RegExp("(.*?)(\\s)(?:" + dig.join("|") + ")$");
  /** @type {Array} */
  var handlers = [];
  var fn;
  /** @type {Array} */
  var queue = [];
  /** @type {number} */
  var max = 50;
  /** @type {Array} */
  var listeners = [];
  /** @type {boolean} */
  var elem = false;
  /** @type {boolean} */
  var x = false;
  var y = nocatch.nocatch || /nocatch/.test(location.search);
  /** @type {function (string, Function, string, string, Object): undefined} */
  window.onerror = next;
  var DOM = {
    ANONYMOUS_GUARD_TAG : POST,
    GENERATED_GUARD_TAG : m,
    GLOBAL_ERROR_HANDLER_TAG : id,
    /** @type {function (Function, boolean): undefined} */
    addListener : addListener,
    /** @type {function (?): undefined} */
    setSourceResolver : _execSql,
    /** @type {function (Function, Function, Array, Function, string): ?} */
    applyWithGuard : init,
    /** @type {function (Function, string, Function): ?} */
    guard : parse,
    history : queue,
    /** @type {function (): ?} */
    inGuard : restoreScript,
    /** @type {function (Object): ?} */
    normalizeError : require,
    /** @type {function (string, Function, string, string, Object): undefined} */
    onerror : next,
    /** @type {function (Object, boolean): ?} */
    reportError : run
  };
  module.exports = node.ErrorUtils = DOM;
  if (typeof __t === "function" && __t.setHandler) {
    __t.setHandler(run);
  }
}, null);
__d("CallbackDependencyManager", ["ErrorUtils"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, async) {
  /**
   * @return {undefined}
   */
  function Type() {
    this.$CallbackDependencyManager0 = {};
    this.$CallbackDependencyManager1 = {};
    /** @type {number} */
    this.$CallbackDependencyManager2 = 1;
    this.$CallbackDependencyManager3 = {};
  }
  /**
   * @param {Function} selector
   * @param {Array} attributes
   * @return {?}
   */
  Type.prototype.$CallbackDependencyManager4 = function(selector, attributes) {
    /** @type {number} */
    var $CallbackDependencyManager4 = 0;
    var object = {};
    /** @type {number} */
    var i = 0;
    var aLength = attributes.length;
    for (;i < aLength;i++) {
      /** @type {number} */
      object[attributes[i]] = 1;
    }
    var name;
    for (name in object) {
      if (this.$CallbackDependencyManager3[name]) {
        continue;
      }
      $CallbackDependencyManager4++;
      if (this.$CallbackDependencyManager0[name] === void 0) {
        this.$CallbackDependencyManager0[name] = {};
      }
      this.$CallbackDependencyManager0[name][selector] = (this.$CallbackDependencyManager0[name][selector] || 0) + 1;
    }
    return $CallbackDependencyManager4;
  };
  /**
   * @param {?} id
   * @return {undefined}
   */
  Type.prototype.$CallbackDependencyManager5 = function(id) {
    if (!this.$CallbackDependencyManager0[id]) {
      return;
    }
    var name;
    for (name in this.$CallbackDependencyManager0[id]) {
      this.$CallbackDependencyManager0[id][name]--;
      if (this.$CallbackDependencyManager0[id][name] <= 0) {
        delete this.$CallbackDependencyManager0[id][name];
      }
      this.$CallbackDependencyManager1[name].$CallbackDependencyManager6--;
      if (this.$CallbackDependencyManager1[name].$CallbackDependencyManager6 <= 0) {
        var taskComplete = this.$CallbackDependencyManager1[name].$CallbackDependencyManager7;
        delete this.$CallbackDependencyManager1[name];
        async.applyWithGuard(taskComplete);
      }
    }
  };
  /**
   * @param {Function} key
   * @param {Array} opt_attributes
   * @return {?}
   */
  Type.prototype.addDependenciesToExistingCallback = function(key, opt_attributes) {
    if (!this.$CallbackDependencyManager1[key]) {
      return null;
    }
    var camelKey = this.$CallbackDependencyManager4(key, opt_attributes);
    this.$CallbackDependencyManager1[key].$CallbackDependencyManager6 += camelKey;
    return key;
  };
  /**
   * @param {?} timeoutKey
   * @return {?}
   */
  Type.prototype.isPersistentDependencySatisfied = function(timeoutKey) {
    return!!this.$CallbackDependencyManager3[timeoutKey];
  };
  /**
   * @param {?} attr
   * @return {undefined}
   */
  Type.prototype.satisfyPersistentDependency = function(attr) {
    /** @type {number} */
    this.$CallbackDependencyManager3[attr] = 1;
    this.$CallbackDependencyManager5(attr);
  };
  /**
   * @param {?} attr
   * @return {undefined}
   */
  Type.prototype.satisfyNonPersistentDependency = function(attr) {
    /** @type {boolean} */
    var j = this.$CallbackDependencyManager3[attr] === 1;
    if (!j) {
      /** @type {number} */
      this.$CallbackDependencyManager3[attr] = 1;
    }
    this.$CallbackDependencyManager5(attr);
    if (!j) {
      delete this.$CallbackDependencyManager3[attr];
    }
  };
  /**
   * @param {Function} fn
   * @param {Array} opt_attributes
   * @return {?}
   */
  Type.prototype.registerCallback = function(fn, opt_attributes) {
    var sel = this.$CallbackDependencyManager2;
    this.$CallbackDependencyManager2++;
    var test = this.$CallbackDependencyManager4(sel, opt_attributes);
    if (test === 0) {
      async.applyWithGuard(fn);
      return null;
    }
    this.$CallbackDependencyManager1[sel] = {
      /** @type {Function} */
      $CallbackDependencyManager7 : fn,
      $CallbackDependencyManager6 : test
    };
    return sel;
  };
  /**
   * @param {string} methodName
   * @return {undefined}
   */
  Type.prototype.unsatisfyPersistentDependency = function(methodName) {
    delete this.$CallbackDependencyManager3[methodName];
  };
  /** @type {function (): undefined} */
  module.exports = Type;
}, null);
__d("EventSubscription", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} var_args
   * @return {undefined}
   */
  function create(var_args) {
    /** @type {string} */
    this.subscriber = var_args;
  }
  /**
   * @return {undefined}
   */
  create.prototype.remove = function() {
    this.subscriber.removeSubscription(this);
  };
  /** @type {function (string): undefined} */
  module.exports = create;
}, null);
__d("EmitterSubscription", ["EventSubscription"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, prototype) {
  /**
   * @param {string} val
   * @param {Object} map
   * @param {Object} type
   * @return {undefined}
   */
  function object(val, map, type) {
    prototype.call(this, val);
    /** @type {Object} */
    this.listener = map;
    /** @type {Object} */
    this.context = type;
  }
  var k;
  for (k in prototype) {
    if (prototype.hasOwnProperty(k)) {
      object[k] = prototype[k];
    }
  }
  var basePrototype = prototype === null ? null : prototype.prototype;
  /** @type {Object} */
  object.prototype = Object.create(basePrototype);
  /** @type {function (string, Object, Object): undefined} */
  object.prototype.constructor = object;
  /** @type {Function} */
  object.__superConstructor__ = prototype;
  /** @type {function (string, Object, Object): undefined} */
  module.exports = object;
}, null);
__d("sprintf", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} fmt
   * @return {?}
   */
  function format(fmt) {
    /** @type {Array} */
    var args = [];
    /** @type {number} */
    var j = 1;
    /** @type {number} */
    var len = arguments.length;
    for (;j < len;j++) {
      args.push(arguments[j]);
    }
    /** @type {number} */
    var i = 0;
    return fmt.replace(/%s/g, function(dataAndEvents) {
      return args[i++];
    });
  }
  /** @type {function (string): ?} */
  module.exports = format;
}, null);
__d("invariant", ["ex", "sprintf"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, evt, opt_attributes) {
  /** @type {Function} */
  var wrapper = evt;
  /**
   * @param {string} expr
   * @param {string} var_args
   * @return {undefined}
   */
  var assert = function(expr, var_args) {
    if (!expr) {
      var e;
      if (var_args === void 0) {
        /** @type {Error} */
        e = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.");
      } else {
        /** @type {Array} */
        var args = ["Invariant Violation: " + var_args];
        /** @type {number} */
        var i = 2;
        /** @type {number} */
        var argLength = arguments.length;
        for (;i < argLength;i++) {
          args.push(arguments[i]);
        }
        /** @type {Error} */
        e = new Error(wrapper.apply(null, args));
        /** @type {Array} */
        e.messageWithParams = args;
      }
      /** @type {number} */
      e.framesToPop = 1;
      throw e;
    }
  };
  /** @type {function (string, string): undefined} */
  module.exports = assert;
}, null);
__d("EventSubscriptionVendor", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $sanitize) {
  /**
   * @return {undefined}
   */
  function Type() {
    this.$EventSubscriptionVendor0 = {};
    /** @type {null} */
    this.$EventSubscriptionVendor1 = null;
  }
  /**
   * @param {string} eventName
   * @param {Object} options
   * @return {?}
   */
  Type.prototype.addSubscription = function(eventName, options) {
    $sanitize(options.subscriber === this);
    if (!this.$EventSubscriptionVendor0[eventName]) {
      /** @type {Array} */
      this.$EventSubscriptionVendor0[eventName] = [];
    }
    var k = this.$EventSubscriptionVendor0[eventName].length;
    this.$EventSubscriptionVendor0[eventName].push(options);
    /** @type {string} */
    options.eventType = eventName;
    options.key = k;
    return options;
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  Type.prototype.removeAllSubscriptions = function(deepDataAndEvents) {
    if (deepDataAndEvents === void 0) {
      this.$EventSubscriptionVendor0 = {};
    } else {
      delete this.$EventSubscriptionVendor0[deepDataAndEvents];
    }
  };
  /**
   * @param {Object} event
   * @return {undefined}
   */
  Type.prototype.removeSubscription = function(event) {
    var type = event.eventType;
    var id = event.key;
    var shim = this.$EventSubscriptionVendor0[type];
    if (shim) {
      delete shim[id];
    }
  };
  /**
   * @param {?} head
   * @return {?}
   */
  Type.prototype.getSubscriptionsForType = function(head) {
    return this.$EventSubscriptionVendor0[head];
  };
  /** @type {function (): undefined} */
  module.exports = Type;
}, null);
__d("emptyFunction", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Object} recurring
   * @return {?}
   */
  function tokenString(recurring) {
    return function() {
      return recurring;
    };
  }
  /**
   * @return {undefined}
   */
  function state() {
  }
  /** @type {function (Object): ?} */
  state.thatReturns = tokenString;
  state.thatReturnsFalse = tokenString(false);
  state.thatReturnsTrue = tokenString(true);
  state.thatReturnsNull = tokenString(null);
  /**
   * @return {?}
   */
  state.thatReturnsThis = function() {
    return this;
  };
  /**
   * @param {?} arg
   * @return {?}
   */
  state.thatReturnsArgument = function(arg) {
    return arg;
  };
  /** @type {function (): undefined} */
  module.exports = state;
}, null);
__d("ExecutionEnvironment", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /** @type {boolean} */
  var canUseEventListeners = !!(typeof window !== "undefined" && (window.document && window.document.createElement));
  var JsDiff = {
    canUseDOM : canUseEventListeners,
    canUseWorkers : typeof Worker !== "undefined",
    canUseEventListeners : canUseEventListeners && !!(window.addEventListener || window.attachEvent),
    canUseViewport : canUseEventListeners && !!window.screen,
    isInWorker : !canUseEventListeners
  };
  module.exports = JsDiff;
}, null);
__d("performance", ["ExecutionEnvironment"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, dataAndEvents) {
  var exports;
  if (dataAndEvents.canUseDOM) {
    exports = window.performance || (window.msPerformance || window.webkitPerformance);
  }
  module.exports = exports || {};
}, null);
__d("performanceNow", ["performance"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, computed) {
  /** @type {Object} */
  var result = computed;
  if (!result || !result.now) {
    /** @type {function (new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
    result = Date;
  }
  var ret = result.now.bind(result);
  module.exports = ret;
}, null);
__d("Stopwatch", ["performanceNow"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, cb) {
  /**
   * @return {undefined}
   */
  function Node() {
    this.reset();
  }
  /**
   * @return {undefined}
   */
  Node.prototype.reset = function() {
    this.$Stopwatch0 = cb();
  };
  /**
   * @return {?}
   */
  Node.prototype.read = function() {
    return cb() - this.$Stopwatch0;
  };
  /** @type {function (): undefined} */
  module.exports = Node;
}, null);
__d("StopwatchPool", ["Stopwatch"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Wysiwyg) {
  /** @type {number} */
  var i = 0;
  /** @type {Array} */
  var eventPath = [];
  var seen = {};
  var JsDiff = {
    /**
     * @return {?}
     */
    acquire : function() {
      var obj;
      if (eventPath.length > 0) {
        obj = eventPath.pop();
      } else {
        i++;
        obj = new Wysiwyg;
        obj.__index = i;
      }
      seen[obj.__index] = obj;
      return obj;
    },
    /**
     * @param {?} obj
     * @return {undefined}
     */
    release : function(obj) {
      if (obj.__index && seen[obj.__index] === obj) {
        delete seen[obj.__index];
        eventPath.push(obj);
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("CircularBuffer", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, cb) {
  /**
   * @param {string} val
   * @return {undefined}
   */
  function me(val) {
    cb(val > 0);
    /** @type {string} */
    this.$CircularBuffer0 = val;
    /** @type {number} */
    this.$CircularBuffer1 = 0;
    /** @type {Array} */
    this.$CircularBuffer2 = [];
  }
  /**
   * @param {string} c
   * @return {?}
   */
  me.prototype.write = function(c) {
    if (this.$CircularBuffer2.length < this.$CircularBuffer0) {
      this.$CircularBuffer2.push(c);
    } else {
      /** @type {string} */
      this.$CircularBuffer2[this.$CircularBuffer1] = c;
      this.$CircularBuffer1++;
      this.$CircularBuffer1 %= this.$CircularBuffer0;
    }
    return this;
  };
  /**
   * @return {?}
   */
  me.prototype.read = function() {
    return this.$CircularBuffer2.slice(this.$CircularBuffer1).concat(this.$CircularBuffer2.slice(0, this.$CircularBuffer1));
  };
  /**
   * @return {?}
   */
  me.prototype.clear = function() {
    /** @type {number} */
    this.$CircularBuffer1 = 0;
    /** @type {Array} */
    this.$CircularBuffer2 = [];
    return this;
  };
  /** @type {function (string): undefined} */
  module.exports = me;
}, null);
__d("ImmediateImplementation", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, res) {
  (function(global, socket) {
    /**
     * @param {Object} args
     * @return {?}
     */
    function log(args) {
      var callback = args[0];
      /** @type {Array.<?>} */
      args = Array.prototype.slice.call(args, 1);
      /**
       * @return {undefined}
       */
      done[id] = function() {
        callback.apply(socket, args);
      };
      css = css.next = {
        handle : id++
      };
      return css.handle;
    }
    /**
     * @return {undefined}
     */
    function next() {
      var t;
      var _next;
      for (;!m && (t = a.next);) {
        a = t;
        if (_next = done[t.handle]) {
          /** @type {boolean} */
          m = true;
          try {
            _next();
            /** @type {boolean} */
            m = false;
          } finally {
            write(t.handle);
            if (m) {
              /** @type {boolean} */
              m = false;
              if (a.next) {
                request(next);
              }
            }
          }
        }
      }
    }
    /**
     * @param {?} id
     * @return {undefined}
     */
    function write(id) {
      delete done[id];
    }
    /**
     * @return {?}
     */
    function init() {
      if (global.postMessage && !global.importScripts) {
        /** @type {boolean} */
        var enabled = true;
        /**
         * @return {undefined}
         */
        var respond = function() {
          /** @type {boolean} */
          enabled = false;
          if (global.removeEventListener) {
            global.removeEventListener("message", respond, false);
          } else {
            global.detachEvent("onmessage", respond);
          }
        };
        if (global.addEventListener) {
          global.addEventListener("message", respond, false);
        } else {
          if (global.attachEvent) {
            global.attachEvent("onmessage", respond);
          } else {
            return false;
          }
        }
        global.postMessage("", "*");
        return enabled;
      }
    }
    /**
     * @return {undefined}
     */
    function installPostMessageImplementation() {
      /** @type {string} */
      var MESSAGE_PREFIX = "setImmediate$" + Math.random() + "$";
      /**
       * @param {Object} e
       * @return {undefined}
       */
      var error = function(e) {
        if (e.source === global && (typeof e.data === "string" && e.data.indexOf(MESSAGE_PREFIX) === 0)) {
          next();
        }
      };
      if (global.addEventListener) {
        global.addEventListener("message", error, false);
      } else {
        global.attachEvent("onmessage", error);
      }
      /**
       * @return {?}
       */
      request = function() {
        var handle = log(arguments);
        global.postMessage(MESSAGE_PREFIX + handle, "*");
        return handle;
      };
    }
    /**
     * @return {undefined}
     */
    function initMessageChannel() {
      /** @type {MessageChannel} */
      var channel = new MessageChannel;
      /** @type {function (): undefined} */
      channel.port1.onmessage = next;
      /**
       * @return {?}
       */
      request = function() {
        var request = log(arguments);
        channel.port2.postMessage(request);
        return request;
      };
    }
    /**
     * @return {undefined}
     */
    function setHtml() {
      var head = doc.documentElement;
      /**
       * @return {?}
       */
      request = function() {
        var req = log(arguments);
        var script = doc.createElement("script");
        /**
         * @return {undefined}
         */
        script.onreadystatechange = function() {
          /** @type {null} */
          script.onreadystatechange = null;
          head.removeChild(script);
          /** @type {null} */
          script = null;
          next();
        };
        head.appendChild(script);
        return req;
      };
    }
    /**
     * @return {undefined}
     */
    function throttledUpdate() {
      /**
       * @return {?}
       */
      request = function() {
        setTimeout(next, 0);
        return log(arguments);
      };
    }
    /** @type {number} */
    var id = 1;
    var done = {};
    var a = {};
    var css = a;
    /** @type {boolean} */
    var m = false;
    var doc = global.document;
    var request;
    if (init()) {
      installPostMessageImplementation();
    } else {
      if (global.MessageChannel) {
        initMessageChannel();
      } else {
        if (doc && (doc.createElement && "onreadystatechange" in doc.createElement("script"))) {
          setHtml();
        } else {
          throttledUpdate();
        }
      }
    }
    res.setImmediate = request;
    /** @type {function (?): undefined} */
    res.clearImmediate = write;
  })(Function("return this")());
}, null);
__d("setImmediatePolyfill", ["invariant", "ImmediateImplementation"], function($window, require, dataAndEvents, deepDataAndEvents, module, ignoreMethodDoesntExist, ok) {
  /**
   * @return {?}
   */
  function spy() {
    /** @type {Array} */
    var arr = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var argLength = arguments.length;
    for (;i < argLength;i++) {
      arr.push(arguments[i]);
    }
    ok(typeof arr[0] === "function");
    return core_push.apply(null, arr);
  }
  var core_push = $window.setImmediate;
  if (!core_push) {
    var globe = require("ImmediateImplementation");
    core_push = globe.setImmediate;
  }
  /** @type {function (): ?} */
  module.exports = spy;
}, null);
__d("LogBuffer", ["CircularBuffer", "setImmediatePolyfill"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, mod, keepData, Buffer, fn) {
  /** @type {number} */
  var bodyLen = 5E3;
  var viewItems = {};
  var pages = {};
  var exports = {
    /**
     * @param {string} index
     * @param {string} l
     * @return {undefined}
     */
    write : function(index, l) {
      var win = viewItems[index] = viewItems[index] || new Buffer(bodyLen);
      win.write(l);
      if (pages[index]) {
        pages[index].forEach(function(cb) {
          try {
            cb(l);
          } catch (q) {
          }
        });
      }
    },
    /**
     * @param {?} index
     * @return {?}
     */
    read : function(index) {
      if (!viewItems[index]) {
        return[];
      } else {
        return viewItems[index].read();
      }
    },
    /**
     * @param {?} index
     * @param {?} cb
     * @return {undefined}
     */
    tail : function(index, cb) {
      if (typeof cb !== "function") {
        return;
      }
      pages[index] = pages[index] || [];
      pages[index].push(cb);
      if (viewItems[index]) {
        var item = viewItems[index];
        item.read().forEach(function(outErr) {
          try {
            cb(outErr);
          } catch (q) {
          }
        });
      }
    },
    /**
     * @param {?} index
     * @return {undefined}
     */
    clear : function(index) {
      if (viewItems[index]) {
        fn(function() {
          viewItems[index].clear();
        });
      }
    }
  };
  mod.exports = exports;
}, null);
__d("EventEmitter", ["EmitterSubscription", "ErrorUtils", "EventSubscriptionVendor", "emptyFunction", "invariant", "StopwatchPool", "LogBuffer"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, Exception, that, dataAndEvents, element, $sanitize, pool, view) {
  /**
   * @return {undefined}
   */
  function EventEmitter() {
    this.$EventEmitter0 = new dataAndEvents;
    /** @type {null} */
    this.$EventEmitter1 = null;
  }
  /**
   * @param {Function} listener
   * @param {boolean} target
   * @param {boolean} type
   * @return {?}
   */
  EventEmitter.prototype.addListener = function(listener, target, type) {
    return this.$EventEmitter0.addSubscription(listener, new Exception(this.$EventEmitter0, target, type));
  };
  /**
   * @param {Function} type
   * @param {Function} func
   * @param {?} context
   * @return {?}
   */
  EventEmitter.prototype.once = function(type, func, context) {
    var removeCurrentListener = this;
    return this.addListener(type, function() {
      removeCurrentListener.removeCurrentListener();
      func.apply(context, arguments);
    });
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  EventEmitter.prototype.removeAllListeners = function(deepDataAndEvents) {
    this.$EventEmitter0.removeAllSubscriptions(deepDataAndEvents);
  };
  /**
   * @return {undefined}
   */
  EventEmitter.prototype.removeCurrentListener = function() {
    $sanitize(!!this.$EventEmitter1);
    this.$EventEmitter0.removeSubscription(this.$EventEmitter1);
  };
  /**
   * @param {?} name
   * @return {?}
   */
  EventEmitter.prototype.listeners = function(name) {
    var input = this.$EventEmitter0.getSubscriptionsForType(name);
    return input ? input.filter(element.thatReturnsTrue).map(function(on) {
      return on.listener;
    }) : [];
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  EventEmitter.prototype.emit = function(data) {
    var scrubbed = this.$EventEmitter0.getSubscriptionsForType(data);
    if (scrubbed) {
      /** @type {Array.<string>} */
      var codeSegments = Object.keys(scrubbed);
      var x = pool.acquire();
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        /** @type {string} */
        var name = codeSegments[i];
        var config = scrubbed[name];
        if (config) {
          this.$EventEmitter1 = config;
          var functionMeta = config.listener.__SMmeta || {
            name : config.listener.name || "<anonymous function>"
          };
          x.reset();
          that.applyWithGuard(config.listener, config.context, Array.prototype.slice.call(arguments, 1), null, "EventEmitter:" + data);
          var time = x.read();
          view.write("event_handler_performance", {
            functionMeta : functionMeta,
            time : time,
            context : data
          });
        }
      }
      /** @type {null} */
      this.$EventEmitter1 = null;
    }
  };
  /** @type {function (): undefined} */
  module.exports = EventEmitter;
}, null);
__d("EventEmitterWithHolding", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} ctor
   * @param {string} args
   * @return {undefined}
   */
  function EventEmitter(ctor, args) {
    /** @type {string} */
    this.$EventEmitterWithHolding0 = ctor;
    /** @type {string} */
    this.$EventEmitterWithHolding1 = args;
    /** @type {null} */
    this.$EventEmitterWithHolding2 = null;
    /** @type {Array} */
    this.$EventEmitterWithHolding3 = [];
    /** @type {number} */
    this.$EventEmitterWithHolding4 = 0;
  }
  /**
   * @param {Function} listener
   * @param {boolean} target
   * @param {boolean} eventName
   * @return {?}
   */
  EventEmitter.prototype.addListener = function(listener, target, eventName) {
    return this.$EventEmitterWithHolding0.addListener(listener, target, eventName);
  };
  /**
   * @param {Function} type
   * @param {Function} func
   * @param {?} context
   * @return {?}
   */
  EventEmitter.prototype.once = function(type, func, context) {
    return this.$EventEmitterWithHolding0.once(type, func, context);
  };
  /**
   * @param {Function} type
   * @param {Object} me
   * @param {boolean} obj
   * @return {?}
   */
  EventEmitter.prototype.addRetroactiveListener = function(type, me, obj) {
    var evt = this.$EventEmitterWithHolding0.addListener(type, me, obj);
    var eventPath = this.$EventEmitterWithHolding3;
    eventPath.push(false);
    this.$EventEmitterWithHolding4++;
    this.$EventEmitterWithHolding1.emitToListener(type, me, obj);
    this.$EventEmitterWithHolding4--;
    if (eventPath[eventPath.length - 1]) {
      evt.remove();
    }
    eventPath.pop();
    return evt;
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  EventEmitter.prototype.removeAllListeners = function(deepDataAndEvents) {
    this.$EventEmitterWithHolding0.removeAllListeners(deepDataAndEvents);
  };
  /**
   * @return {undefined}
   */
  EventEmitter.prototype.removeCurrentListener = function() {
    if (this.$EventEmitterWithHolding4) {
      var codeSegments = this.$EventEmitterWithHolding3;
      /** @type {boolean} */
      codeSegments[codeSegments.length - 1] = true;
    } else {
      this.$EventEmitterWithHolding0.removeCurrentListener();
    }
  };
  /**
   * @param {?} type
   * @return {?}
   */
  EventEmitter.prototype.listeners = function(type) {
    return this.$EventEmitterWithHolding0.listeners(type);
  };
  /**
   * @param {string} ev
   * @param {Object} data
   * @param {?} cb
   * @param {?} value
   * @param {?} type
   * @param {?} rethrow_if_no_listeners
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  EventEmitter.prototype.emit = function(ev, data, cb, value, type, rethrow_if_no_listeners, deepDataAndEvents) {
    this.$EventEmitterWithHolding0.emit(ev, data, cb, value, type, rethrow_if_no_listeners, deepDataAndEvents);
  };
  /**
   * @param {string} text
   * @param {boolean} node
   * @param {?} callback
   * @param {?} actual
   * @param {?} type
   * @param {?} rethrow_if_no_listeners
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  EventEmitter.prototype.emitAndHold = function(text, node, callback, actual, type, rethrow_if_no_listeners, deepDataAndEvents) {
    this.$EventEmitterWithHolding2 = this.$EventEmitterWithHolding1.holdEvent(text, node, callback, actual, type, rethrow_if_no_listeners, deepDataAndEvents);
    this.$EventEmitterWithHolding0.emit(text, node, callback, actual, type, rethrow_if_no_listeners, deepDataAndEvents);
    /** @type {null} */
    this.$EventEmitterWithHolding2 = null;
  };
  /**
   * @return {undefined}
   */
  EventEmitter.prototype.releaseCurrentEvent = function() {
    if (this.$EventEmitterWithHolding2 !== null) {
      this.$EventEmitterWithHolding1.releaseEvent(this.$EventEmitterWithHolding2);
    } else {
      if (!!this.$EventEmitterWithHolding4) {
        this.$EventEmitterWithHolding1.releaseCurrentEvent();
      }
    }
  };
  /**
   * @param {?} until
   * @return {undefined}
   */
  EventEmitter.prototype.releaseHeldEventType = function(until) {
    this.$EventEmitterWithHolding1.releaseEventType(until);
  };
  /** @type {function (string, string): undefined} */
  module.exports = EventEmitter;
}, null);
__d("EventHolder", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, win) {
  /**
   * @return {undefined}
   */
  function Type() {
    this.$EventHolder0 = {};
    /** @type {Array} */
    this.$EventHolder1 = [];
  }
  /**
   * @param {string} type
   * @param {boolean} x
   * @param {?} arg
   * @param {?} s
   * @param {?} t
   * @param {?} stage
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  Type.prototype.holdEvent = function(type, x, arg, s, t, stage, deepDataAndEvents) {
    this.$EventHolder0[type] = this.$EventHolder0[type] || [];
    var queue = this.$EventHolder0[type];
    var o = {
      eventType : type,
      index : queue.length
    };
    queue.push([x, arg, s, t, stage, deepDataAndEvents]);
    return o;
  };
  /**
   * @param {string} eventType
   * @param {Function} target
   * @param {boolean} that
   * @return {undefined}
   */
  Type.prototype.emitToListener = function(eventType, target, that) {
    var list = this.$EventHolder0[eventType];
    if (!list) {
      return;
    }
    list.forEach(function(a, idx) {
      if (!a) {
        return;
      }
      this.$EventHolder1.push({
        eventType : eventType,
        index : idx
      });
      target.apply(that, a);
      this.$EventHolder1.pop();
    }.bind(this));
  };
  /**
   * @return {undefined}
   */
  Type.prototype.releaseCurrentEvent = function() {
    win(this.$EventHolder1.length);
    this.releaseEvent(this.$EventHolder1[this.$EventHolder1.length - 1]);
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  Type.prototype.releaseEvent = function(e) {
    delete this.$EventHolder0[e.eventType][e.index];
  };
  /**
   * @param {?} arg
   * @return {undefined}
   */
  Type.prototype.releaseEventType = function(arg) {
    /** @type {Array} */
    this.$EventHolder0[arg] = [];
  };
  /** @type {function (): undefined} */
  module.exports = Type;
}, null);
__d("toArray", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, kindOf) {
  /**
   * @param {?} obj
   * @return {?}
   */
  function toArray(obj) {
    var length = obj.length;
    kindOf(!Array.isArray(obj) && (typeof obj === "object" || typeof obj === "function"));
    kindOf(typeof length === "number");
    kindOf(length === 0 || length - 1 in obj);
    if (obj.hasOwnProperty) {
      try {
        return Array.prototype.slice.call(obj);
      } catch (k) {
      }
    }
    /** @type {Array} */
    var result = Array(length);
    /** @type {number} */
    var i = 0;
    for (;i < length;i++) {
      result[i] = obj[i];
    }
    return result;
  }
  /** @type {function (?): ?} */
  module.exports = toArray;
}, null);
__d("createArrayFromMixed", ["toArray"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, fulfill) {
  /**
   * @param {?} obj
   * @return {?}
   */
  function isArrayLike(obj) {
    return!!obj && ((typeof obj == "object" || typeof obj == "function") && ("length" in obj && (!("setInterval" in obj) && (typeof obj.nodeType != "number" && (Array.isArray(obj) || ("callee" in obj || "item" in obj))))));
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function resolve(value) {
    if (!isArrayLike(value)) {
      return[value];
    } else {
      if (Array.isArray(value)) {
        return value.slice();
      } else {
        return fulfill(value);
      }
    }
  }
  /** @type {function (string): ?} */
  module.exports = resolve;
}, null);
__d("Arbiter", ["CallbackDependencyManager", "ErrorUtils", "EventEmitter", "EventEmitterWithHolding", "EventHolder", "copyProperties", "createArrayFromMixed", "invariant"], function(dataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, context, opt_attributes, deepDataAndEvents, angular, subject, MenuItem, prototype, a, escapeHtml, $timeout) {
  /**
   * @return {undefined}
   */
  function self() {
    var result = new subject;
    this.$Arbiter0 = new object;
    this.$Arbiter1 = new MenuItem(result, this.$Arbiter0);
    this.$Arbiter2 = new deepDataAndEvents;
    /** @type {Array} */
    this.$Arbiter3 = [];
  }
  /**
   * @return {undefined}
   */
  function object() {
    prototype.call(this);
    this.$ArbiterEventHolder0 = {};
  }
  /**
   * @param {?} update
   * @param {?} eventType
   * @return {undefined}
   */
  function Subscription(update, eventType) {
    this.$ArbiterToken0 = update;
    this.$ArbiterToken1 = eventType;
  }
  /**
   * @param {Array} msg
   * @param {Function} source
   * @param {?} type
   * @return {?}
   */
  self.prototype.subscribe = function(msg, source, type) {
    msg = escapeHtml(msg);
    msg.forEach(function(p) {
      $timeout(p && typeof p === "string");
    });
    $timeout(typeof source === "function");
    type = type || self.SUBSCRIBE_ALL;
    $timeout(type === self.SUBSCRIBE_NEW || type === self.SUBSCRIBE_ALL);
    var end = msg.map(function(event) {
      var me = this.$Arbiter4.bind(this, source, event);
      me.__SMmeta = source.__SMmeta;
      if (type === self.SUBSCRIBE_NEW) {
        return this.$Arbiter1.addListener(event, me);
      }
      this.$Arbiter3.push({});
      var result = this.$Arbiter1.addRetroactiveListener(event, me);
      this.$Arbiter3.pop();
      return result;
    }, this);
    return new Subscription(this, end);
  };
  /**
   * @param {Function} newValue
   * @param {?} prop
   * @param {?} $compileProvider
   * @return {undefined}
   */
  self.prototype.$Arbiter4 = function(newValue, prop, $compileProvider) {
    var cache = this.$Arbiter3[this.$Arbiter3.length - 1];
    if (cache[prop] === false) {
      return;
    }
    var value = angular.applyWithGuard(newValue, null, [prop, $compileProvider]);
    if (value === false) {
      this.$Arbiter1.releaseCurrentEvent();
    }
    cache[prop] = value;
  };
  /**
   * @return {undefined}
   */
  self.prototype.unsubscribeCurrentSubscription = function() {
    this.$Arbiter1.removeCurrentListener();
  };
  /**
   * @return {undefined}
   */
  self.prototype.releaseCurrentPersistentEvent = function() {
    this.$Arbiter1.releaseCurrentEvent();
  };
  /**
   * @param {Object} name
   * @param {?} fn
   * @param {?} fix
   * @return {?}
   */
  self.prototype.subscribeOnce = function(name, fn, fix) {
    var key = this.subscribe(name, function(err, partials) {
      this.unsubscribeCurrentSubscription();
      return fn(err, partials);
    }.bind(this), fix);
    return key;
  };
  /**
   * @param {Object} subscriber
   * @return {undefined}
   */
  self.prototype.unsubscribe = function(subscriber) {
    $timeout(subscriber.isForArbiterInstance(this));
    subscriber.unsubscribe();
  };
  /**
   * @param {string} msg
   * @param {boolean} expectedNumberOfNonCommentArgs
   * @param {?} event_name
   * @return {?}
   */
  self.prototype.inform = function(msg, expectedNumberOfNonCommentArgs, event_name) {
    /** @type {boolean} */
    var optional = Array.isArray(msg);
    msg = escapeHtml(msg);
    event_name = event_name || self.BEHAVIOR_EVENT;
    /** @type {boolean} */
    var udataCur = event_name === self.BEHAVIOR_STATE || event_name === self.BEHAVIOR_PERSISTENT;
    this.$Arbiter3.push({});
    /** @type {number} */
    var i = 0;
    for (;i < msg.length;i++) {
      var later = msg[i];
      $timeout(later);
      this.$Arbiter0.setHoldingBehavior(later, event_name);
      this.$Arbiter1.emitAndHold(later, expectedNumberOfNonCommentArgs);
      this.$Arbiter5(later, expectedNumberOfNonCommentArgs, udataCur);
    }
    var match = this.$Arbiter3.pop();
    return optional ? match : match[msg[0]];
  };
  /**
   * @param {string} callback
   * @return {?}
   */
  self.prototype.query = function(callback) {
    var index = this.$Arbiter0.getHoldingBehavior(callback);
    $timeout(!index || index === self.BEHAVIOR_STATE);
    /** @type {null} */
    var result = null;
    this.$Arbiter0.emitToListener(callback, function(subKey) {
      /** @type {null} */
      result = subKey;
    });
    return result;
  };
  /**
   * @param {Function} fn
   * @param {Array} opt_attributes
   * @return {?}
   */
  self.prototype.registerCallback = function(fn, opt_attributes) {
    if (typeof fn === "function") {
      return this.$Arbiter2.registerCallback(fn, opt_attributes);
    } else {
      return this.$Arbiter2.addDependenciesToExistingCallback(fn, opt_attributes);
    }
  };
  /**
   * @param {?} protoProps
   * @param {Object} expectedNumberOfNonCommentArgs
   * @param {boolean} value
   * @return {undefined}
   */
  self.prototype.$Arbiter5 = function(protoProps, expectedNumberOfNonCommentArgs, value) {
    if (expectedNumberOfNonCommentArgs === null) {
      return;
    }
    if (value) {
      this.$Arbiter2.satisfyPersistentDependency(protoProps);
    } else {
      this.$Arbiter2.satisfyNonPersistentDependency(protoProps);
    }
  };
  var k;
  for (k in prototype) {
    if (prototype.hasOwnProperty(k)) {
      object[k] = prototype[k];
    }
  }
  var parent = prototype === null ? null : prototype.prototype;
  /** @type {Object} */
  object.prototype = Object.create(parent);
  /** @type {function (): undefined} */
  object.prototype.constructor = object;
  /** @type {Function} */
  object.__superConstructor__ = prototype;
  /**
   * @param {?} key
   * @param {?} model
   * @return {undefined}
   */
  object.prototype.setHoldingBehavior = function(key, model) {
    this.$ArbiterEventHolder0[key] = model;
  };
  /**
   * @param {string} local
   * @return {?}
   */
  object.prototype.getHoldingBehavior = function(local) {
    return this.$ArbiterEventHolder0[local];
  };
  /**
   * @param {string} data
   * @param {boolean} wrapper
   * @param {?} capture
   * @param {?} callback
   * @param {?} t
   * @return {?}
   */
  object.prototype.holdEvent = function(data, wrapper, capture, callback, t) {
    var result = this.$ArbiterEventHolder0[data];
    if (result !== self.BEHAVIOR_PERSISTENT) {
      this.$ArbiterEventHolder2(data);
    }
    if (result !== self.BEHAVIOR_EVENT) {
      return parent.holdEvent.call(this, data, wrapper, capture, callback, t);
    }
  };
  /**
   * @param {string} eventType
   * @return {undefined}
   */
  object.prototype.$ArbiterEventHolder2 = function(eventType) {
    this.emitToListener(eventType, this.releaseCurrentEvent, this);
  };
  /**
   * @param {?} mapper
   * @return {undefined}
   */
  object.prototype.releaseEvent = function(mapper) {
    if (mapper) {
      parent.releaseEvent.call(this, mapper);
    }
  };
  a(self, {
    SUBSCRIBE_NEW : "new",
    SUBSCRIBE_ALL : "all",
    BEHAVIOR_EVENT : "event",
    BEHAVIOR_STATE : "state",
    BEHAVIOR_PERSISTENT : "persistent"
  });
  /**
   * @return {undefined}
   */
  Subscription.prototype.unsubscribe = function() {
    /** @type {number} */
    var r = 0;
    for (;r < this.$ArbiterToken1.length;r++) {
      this.$ArbiterToken1[r].remove();
    }
    /** @type {number} */
    this.$ArbiterToken1.length = 0;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  Subscription.prototype.isForArbiterInstance = function(dataAndEvents) {
    $timeout(this.$ArbiterToken0);
    return this.$ArbiterToken0 === dataAndEvents;
  };
  Object.keys(self.prototype).forEach(function(fn) {
    /**
     * @return {?}
     */
    self[fn] = function() {
      var context = this instanceof self ? this : self;
      return self.prototype[fn].apply(context, arguments);
    };
  });
  self.call(self);
  /** @type {function (): undefined} */
  context.exports = self;
}, null);
__d("guid", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function test() {
    return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "");
  }
  /** @type {function (): ?} */
  module.exports = test;
}, null);
__d("ArbiterMixin", ["Arbiter", "guid"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Language, $sanitize) {
  var key = "arbiter$" + $sanitize();
  /** @type {function (this:Object, *): boolean} */
  var has = Object.prototype.hasOwnProperty;
  var JsDiff = {
    /**
     * @return {?}
     */
    _getArbiterInstance : function() {
      return has.call(this, key) ? this[key] : this[key] = new Language;
    },
    /**
     * @param {string} msg
     * @param {boolean} expectedNumberOfNonCommentArgs
     * @param {?} event_name
     * @return {?}
     */
    inform : function(msg, expectedNumberOfNonCommentArgs, event_name) {
      return this._getArbiterInstance().inform(msg, expectedNumberOfNonCommentArgs, event_name);
    },
    /**
     * @param {Object} name
     * @param {Function} fn
     * @param {?} type
     * @return {?}
     */
    subscribe : function(name, fn, type) {
      return this._getArbiterInstance().subscribe(name, fn, type);
    },
    /**
     * @param {Object} f
     * @param {?} fn
     * @param {?} opt_context
     * @return {?}
     */
    subscribeOnce : function(f, fn, opt_context) {
      return this._getArbiterInstance().subscribeOnce(f, fn, opt_context);
    },
    /**
     * @param {Object} subscriber
     * @return {undefined}
     */
    unsubscribe : function(subscriber) {
      this._getArbiterInstance().unsubscribe(subscriber);
    },
    /**
     * @return {undefined}
     */
    unsubscribeCurrentSubscription : function() {
      this._getArbiterInstance().unsubscribeCurrentSubscription();
    },
    /**
     * @return {undefined}
     */
    releaseCurrentPersistentEvent : function() {
      this._getArbiterInstance().releaseCurrentPersistentEvent();
    },
    /**
     * @param {Function} fn
     * @param {Array} opt_attributes
     * @return {?}
     */
    registerCallback : function(fn, opt_attributes) {
      return this._getArbiterInstance().registerCallback(fn, opt_attributes);
    },
    /**
     * @param {string} selector
     * @return {?}
     */
    query : function(selector) {
      return this._getArbiterInstance().query(selector);
    }
  };
  module.exports = JsDiff;
}, null);
__d("legacy:ArbiterMixin", ["ArbiterMixin"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.ArbiterMixin = trim("ArbiterMixin");
}, 3);
__d("$", ["ex"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, done) {
  /**
   * @param {string} value
   * @return {?}
   */
  function fn(value) {
    var computed = typeof value === "string" ? document.getElementById(value) : value;
    if (!computed) {
      throw new Error(done('Tried to get element with id of "%s" but it is not present on the page.', value));
    }
    return computed;
  }
  /**
   * @param {string} ctor
   * @return {?}
   */
  function on(ctor) {
    return fn(ctor);
  }
  /** @type {function (string): ?} */
  on.unsafe = fn;
  /** @type {function (string): ?} */
  module.exports = on;
}, null);
__d("CSSCore", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, mod, keepData, allNodes) {
  var exports = {
    /**
     * @param {Element} element
     * @param {string} className
     * @return {?}
     */
    addClass : function(element, className) {
      allNodes(!/\s/.test(className));
      if (className) {
        if (element.classList) {
          element.classList.add(className);
        } else {
          if (!exports.hasClass(element, className)) {
            /** @type {string} */
            element.className = element.className + " " + className;
          }
        }
      }
      return element;
    },
    /**
     * @param {Element} element
     * @param {string} className
     * @return {?}
     */
    removeClass : function(element, className) {
      allNodes(!/\s/.test(className));
      if (className) {
        if (element.classList) {
          element.classList.remove(className);
        } else {
          if (exports.hasClass(element, className)) {
            element.className = element.className.replace(new RegExp("(^|\\s)" + className + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
          }
        }
      }
      return element;
    },
    /**
     * @param {string} element
     * @param {string} className
     * @param {boolean} bool
     * @return {?}
     */
    conditionClass : function(element, className, bool) {
      return(bool ? exports.addClass : exports.removeClass)(element, className);
    },
    /**
     * @param {Element} element
     * @param {string} selector
     * @return {?}
     */
    hasClass : function(element, selector) {
      allNodes(!/\s/.test(selector));
      if (element.classList) {
        return!!selector && element.classList.contains(selector);
      }
      return(" " + element.className + " ").indexOf(" " + selector + " ") > -1;
    }
  };
  mod.exports = exports;
}, null);
__d("CSS", ["CSSCore", "$"], function(dataAndEvents, factory, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, self) {
  var $ = factory("$").unsafe;
  /** @type {string} */
  var className = "hidden_elem";
  var api = {
    /**
     * @param {string} element
     * @param {string} value
     * @return {?}
     */
    setClass : function(element, value) {
      $(element).className = value || "";
      return element;
    },
    /**
     * @param {Object} element
     * @param {string} selector
     * @return {?}
     */
    hasClass : function(element, selector) {
      return self.hasClass($(element), selector);
    },
    /**
     * @param {string} element
     * @param {string} className
     * @return {?}
     */
    addClass : function(element, className) {
      return self.addClass($(element), className);
    },
    /**
     * @param {string} element
     * @param {string} className
     * @return {?}
     */
    removeClass : function(element, className) {
      return self.removeClass($(element), className);
    },
    /**
     * @param {string} element
     * @param {string} className
     * @param {boolean} millis
     * @return {?}
     */
    conditionClass : function(element, className, millis) {
      return self.conditionClass($(element), className, millis);
    },
    /**
     * @param {string} element
     * @param {string} className
     * @return {?}
     */
    toggleClass : function(element, className) {
      return api.conditionClass(element, className, !api.hasClass(element, className));
    },
    /**
     * @param {Element} element
     * @return {?}
     */
    shown : function(element) {
      return!api.hasClass(element, className);
    },
    /**
     * @param {string} activeClassName
     * @return {?}
     */
    hide : function(activeClassName) {
      return api.addClass(activeClassName, className);
    },
    /**
     * @param {string} content
     * @return {?}
     */
    show : function(content) {
      return api.removeClass(content, className);
    },
    /**
     * @param {string} element
     * @return {?}
     */
    toggle : function(element) {
      return api.toggleClass(element, className);
    },
    /**
     * @param {string} ctxt
     * @param {?} dataAndEvents
     * @return {?}
     */
    conditionShow : function(ctxt, dataAndEvents) {
      return api.conditionClass(ctxt, className, !dataAndEvents);
    }
  };
  module.exports = api;
}, null);
__d("legacy:css", ["CSS"], function(root, factory, dataAndEvents, deepDataAndEvents) {
  root.CSS = factory("CSS");
}, 3);
__d("ge", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} arg
   * @param {string} root
   * @param {string} tag
   * @return {?}
   */
  function select(arg, root, tag) {
    return typeof arg != "string" ? arg : !root ? document.getElementById(arg) : parse(arg, root, tag);
  }
  /**
   * @param {string} arg
   * @param {Node} root
   * @param {string} tag
   * @return {?}
   */
  function parse(arg, root, tag) {
    var result;
    var els;
    var i;
    if (fn(root) == arg) {
      return root;
    } else {
      if (root.getElementsByTagName) {
        els = root.getElementsByTagName(tag || "*");
        /** @type {number} */
        i = 0;
        for (;i < els.length;i++) {
          if (fn(els[i]) == arg) {
            return els[i];
          }
        }
      } else {
        els = root.childNodes;
        /** @type {number} */
        i = 0;
        for (;i < els.length;i++) {
          result = parse(arg, els[i]);
          if (result) {
            return result;
          }
        }
      }
    }
    return null;
  }
  /**
   * @param {Node} root
   * @return {?}
   */
  function fn(root) {
    return root.getAttribute ? root.getAttribute("id") : null;
  }
  /** @type {function (string, string, string): ?} */
  module.exports = select;
}, null);
__d("legacy:dom-core", ["$", "ge"], function(global, factory, dataAndEvents, deepDataAndEvents) {
  global.$ = factory("$");
  global.ge = factory("ge");
}, 3);
__d("Parent", ["CSSCore"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, obj) {
  var JsDiff = {
    /**
     * @param {HTMLElement} el
     * @param {string} nodeName
     * @return {?}
     */
    byTag : function(el, nodeName) {
      nodeName = nodeName.toUpperCase();
      for (;el && el.nodeName !== nodeName;) {
        el = el.parentNode;
      }
      return el;
    },
    /**
     * @param {HTMLElement} target
     * @param {string} className
     * @return {?}
     */
    byClass : function(target, className) {
      for (;target && !obj.hasClass(target, className);) {
        target = target.parentNode;
      }
      return target;
    },
    /**
     * @param {HTMLElement} field
     * @param {string} name
     * @return {?}
     */
    byAttribute : function(field, name) {
      for (;field && (!field.getAttribute || !field.getAttribute(name));) {
        field = field.parentNode;
      }
      return field;
    }
  };
  module.exports = JsDiff;
}, null);
__d("legacy:parent", ["Parent"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.Parent = trim("Parent");
}, 3);
__d("BitMap", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {undefined}
   */
  function Tile() {
    /** @type {Array} */
    this.$BitMap0 = [];
  }
  /**
   * @param {(number|string)} n
   * @return {?}
   */
  function pad(n) {
    var millis = n.toString(2);
    var oldMillis = "0".repeat(millis.length - 1);
    return oldMillis + millis;
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function clean(str) {
    /** @type {(Array.<string>|null)} */
    var codeSegments = (str + "00000").match(/[01]{6}/g);
    /** @type {string} */
    var ret = "";
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      ret += chars[parseInt(codeSegments[i], 2)];
    }
    return ret;
  }
  /** @type {string} */
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  /**
   * @param {string} second
   * @return {?}
   */
  Tile.prototype.set = function(second) {
    /** @type {number} */
    this.$BitMap0[second] = 1;
    return this;
  };
  /**
   * @return {?}
   */
  Tile.prototype.toString = function() {
    /** @type {Array} */
    var buf = [];
    /** @type {number} */
    var conditionIndex = 0;
    for (;conditionIndex < this.$BitMap0.length;conditionIndex++) {
      buf.push(this.$BitMap0[conditionIndex] ? 1 : 0);
    }
    return buf.length ? clean(buf.join("")) : "";
  };
  /**
   * @return {?}
   */
  Tile.prototype.toCompressedString = function() {
    if (this.$BitMap0.length === 0) {
      return "";
    }
    /** @type {Array} */
    var tagNameArr = [];
    /** @type {number} */
    var hour = 1;
    var old = this.$BitMap0[0] || 0;
    var h = old.toString(2);
    /** @type {number} */
    var conditionIndex = 1;
    for (;conditionIndex < this.$BitMap0.length;conditionIndex++) {
      var expr = this.$BitMap0[conditionIndex] || 0;
      if (expr === old) {
        hour++;
      } else {
        tagNameArr.push(pad(hour));
        old = expr;
        /** @type {number} */
        hour = 1;
      }
    }
    if (hour) {
      tagNameArr.push(pad(hour));
    }
    return clean(h + tagNameArr.join(""));
  };
  /** @type {function (): undefined} */
  module.exports = Tile;
}, null);
__d("isEmpty", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} a
   * @return {?}
   */
  function deepEqual(a) {
    if (Array.isArray(a)) {
      return a.length === 0;
    } else {
      if (typeof a === "object") {
        var prefix;
        for (prefix in a) {
          return false;
        }
        return true;
      } else {
        return!a;
      }
    }
  }
  /** @type {function (string): ?} */
  module.exports = deepEqual;
}, null);
__d("performanceAbsoluteNow", ["performance"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, target) {
  var on;
  if (target.now && (target.timing && target.timing.navigationStart)) {
    var $ = target.timing.navigationStart;
    /**
     * @return {?}
     */
    on = function() {
      return target.now.apply(target, arguments) + $;
    };
  } else {
    on = Date.now.bind(Date);
  }
  /** @type {Function} */
  module.exports = on;
}, null);
__d("wrapFunction", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {string} el
   * @param {string} type
   * @param {string} event
   * @return {?}
   */
  function on(el, type, event) {
    type = type || "default";
    return function() {
      var matcherFunction = type in types ? types[type](el, event) : el;
      return matcherFunction.apply(this, arguments);
    };
  }
  var types = {};
  /**
   * @param {Function} proto
   * @param {string} type
   * @return {undefined}
   */
  on.setWrapper = function(proto, type) {
    type = type || "default";
    /** @type {Function} */
    types[type] = proto;
  };
  /** @type {function (string, string, string): ?} */
  module.exports = on;
}, null);
__d("TimeSlice", ["ErrorUtils", "LogBuffer", "invariant", "performanceAbsoluteNow", "wrapFunction"], function(instance, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, self, gridStore, on, $sanitize, path) {
  /** @type {boolean} */
  var failuresLink = false;
  var fail;
  /** @type {Array} */
  var fns = [];
  var image;
  var node = {
    /**
     * @param {Function} condition
     * @param {string} f
     * @return {?}
     */
    guard : function(condition, f) {
      /** @type {string} */
      var i = "TimeSlice" + (f ? ": " + f : "");
      /** @type {string} */
      var endpoint = "TimeSlice Task" + (f ? ": " + f : "");
      return function() {
        var SIMPLE_NUMBER_RE = $sanitize();
        var value;
        var cond;
        if (failuresLink) {
          return condition.apply(this, arguments);
        }
        /** @type {boolean} */
        failuresLink = true;
        /** @type {string} */
        fail = f;
        /** @type {number} */
        fns.length = 0;
        /** @type {number} */
        image = 0;
        cond = self.applyWithGuard(condition, this, arguments, null, i);
        for (;fns.length > 0;) {
          var options = fns.shift();
          image = options.depth;
          self.applyWithGuard(options.fn, instance, null, null, endpoint);
        }
        /** @type {boolean} */
        failuresLink = false;
        value = $sanitize();
        gridStore.write("time_slice", Object.assign({
          begin : SIMPLE_NUMBER_RE,
          end : value,
          guard : f
        }, condition.__SMmeta));
        return cond;
      };
    },
    /**
     * @param {(Function|string)} fn
     * @return {undefined}
     */
    enqueue : function(fn) {
      on(failuresLink);
      on(image < 1E3);
      fns.push({
        fn : fn,
        depth : image + 1
      });
    },
    /**
     * @return {?}
     */
    inGuard : function() {
      return failuresLink;
    }
  };
  path.setWrapper(node.guard, "entry");
  instance.TimeSlice = node;
  module.exports = node;
}, null);
__d("setIntervalAcrossTransitions", ["TimeSlice"], function(obj, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, source) {
  var cls = obj.setInterval;
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
    args[0] = source.guard(args[0], "setInterval");
    return Function.prototype.apply.call(cls, obj, args);
  };
}, null);
__d("CSSLoader", ["CSSLoaderConfig", "isEmpty", "setIntervalAcrossTransitions"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, state, callback, $timeout) {
  /**
   * @param {Element} item
   * @return {undefined}
   */
  function injectCss(item) {
    if (m) {
      return;
    }
    /** @type {boolean} */
    m = true;
    /** @type {Element} */
    var link = document.createElement("link");
    /**
     * @return {undefined}
     */
    link.onload = function() {
      /** @type {boolean} */
      l = true;
      link.parentNode.removeChild(link);
    };
    /** @type {string} */
    link.rel = "stylesheet";
    /** @type {string} */
    link.href = "data:text/css;base64,";
    item.appendChild(link);
  }
  /**
   * @return {?}
   */
  function success() {
    var i;
    /** @type {Array} */
    var args = [];
    /** @type {Array} */
    var scripts = [];
    if (Date.now() >= str) {
      for (i in sounds) {
        scripts.push(sounds[i].signal);
        args.push(sounds[i].error);
      }
      sounds = {};
    } else {
      for (i in sounds) {
        var elem = sounds[i].signal;
        var cs = window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle;
        if (cs && parseInt(cs.height, 10) > 1) {
          args.push(sounds[i].load);
          scripts.push(elem);
          delete sounds[i];
        }
      }
    }
    /** @type {number} */
    var x = 0;
    for (;x < scripts.length;x++) {
      scripts[x].parentNode.removeChild(scripts[x]);
    }
    if (!callback(args)) {
      /** @type {number} */
      x = 0;
      for (;x < args.length;x++) {
        args[x]();
      }
      str = Date.now() + last;
    }
    return callback(sounds);
  }
  /**
   * @param {string} name
   * @param {Element} state
   * @param {Function} cb
   * @param {Function} err
   * @return {undefined}
   */
  function done(name, state, cb, err) {
    /** @type {Element} */
    var message = document.createElement("meta");
    message.id = "bootloader_" + name.replace(/[^a-z0-9]/ig, "_");
    state.appendChild(message);
    /** @type {boolean} */
    var aa = !callback(sounds);
    str = Date.now() + last;
    sounds[name] = {
      signal : message,
      /** @type {Function} */
      load : cb,
      /** @type {Function} */
      error : err
    };
    if (!aa) {
      var timeout = $timeout(function done() {
        if (success()) {
          clearInterval(timeout);
        }
      }, time)
    }
  }
  /** @type {number} */
  var time = 20;
  var last = state.timeout;
  var l;
  var m;
  var scripts = {};
  /** @type {Array} */
  var codeSegments = [];
  var str;
  var sounds = {};
  var JsDiff = {
    /**
     * @param {string} path
     * @param {string} url
     * @param {Element} doc
     * @param {Function} fn
     * @param {Function} callback
     * @return {undefined}
     */
    loadStyleSheet : function(path, url, doc, fn, callback) {
      if (scripts[path]) {
        throw new Error("CSS component " + path + " has already been requested.");
      }
      if (document.createStyleSheet) {
        var currentParam;
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          if (codeSegments[i].imports.length < 31) {
            /** @type {number} */
            currentParam = i;
            break;
          }
        }
        if (currentParam === void 0) {
          try {
            codeSegments.push(document.createStyleSheet());
          } catch (ca) {
            callback();
            return;
          }
          /** @type {number} */
          currentParam = codeSegments.length - 1;
        }
        codeSegments[currentParam].addImport(url);
        scripts[path] = {
          styleSheet : codeSegments[currentParam],
          uri : url
        };
        done(path, doc, fn, callback);
        return;
      }
      /** @type {Element} */
      var link = document.createElement("link");
      /** @type {string} */
      link.rel = "stylesheet";
      /** @type {string} */
      link.type = "text/css";
      /** @type {string} */
      link.href = url;
      scripts[path] = {
        link : link
      };
      if (l) {
        /**
         * @return {undefined}
         */
        link.onload = function() {
          /** @type {null} */
          link.onload = link.onerror = null;
          fn();
        };
        /**
         * @return {undefined}
         */
        link.onerror = function() {
          /** @type {null} */
          link.onload = link.onerror = null;
          callback();
        };
      } else {
        done(path, doc, fn, callback);
        if (l === void 0) {
          injectCss(doc);
        }
      }
      doc.appendChild(link);
    },
    /**
     * @param {string} path
     * @param {Object} linker
     * @return {undefined}
     */
    registerLoadedStyleSheet : function(path, linker) {
      if (scripts[path]) {
        throw new Error("CSS component " + path + " has been requested and should not be " + "loaded more than once.");
      }
      scripts[path] = {
        link : linker
      };
    },
    /**
     * @param {string} name
     * @return {undefined}
     */
    unloadStyleSheet : function(name) {
      if (!name in scripts) {
        return;
      }
      var s = scripts[name];
      var link = s.link;
      if (link) {
        /** @type {null} */
        link.onload = link.onerror = null;
        link.parentNode.removeChild(link);
      } else {
        var styleSheet = s.styleSheet;
        /** @type {number} */
        var i = 0;
        for (;i < styleSheet.imports.length;i++) {
          if (styleSheet.imports[i].href == s.uri) {
            styleSheet.removeImport(i);
            break;
          }
        }
      }
      delete sounds[name];
      delete scripts[name];
    }
  };
  module.exports = JsDiff;
}, null);
__d("setTimeoutAcrossTransitions", ["TimeSlice"], function(value, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, source) {
  var ctor = value.setTimeout;
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
    args[0] = source.guard(args[0], "setTimeout");
    return Function.prototype.apply.call(ctor, value, args);
  };
}, null);
__d("Bootloader", ["BootloaderConfig", "CSSLoader", "CallbackDependencyManager", "TimeSlice", "setTimeoutAcrossTransitions", "ErrorUtils", "ex"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, fn, module, keepData, params, $, dataAndEvents, message, $timeout, that, debug) {
  /**
   * @param {?} message
   * @return {undefined}
   */
  function push(message) {
    /** @type {Error} */
    var err = new Error(message);
    /** @type {string} */
    err.guard = "Bootloader";
    that.reportError(err);
  }
  /**
   * @return {?}
   */
  function parse() {
    return document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1];
  }
  /**
   * @param {Array} arg
   * @return {?}
   */
  function extend(arg) {
    return Array.isArray(arg) ? arg : [arg];
  }
  /**
   * @return {?}
   */
  function complete() {
    if (!params.retry_on_timeout || (!params.is_not_mobile || (parse() || (!params.timeout || params.timeout < 0)))) {
      return false;
    }
    return true;
  }
  /**
   * @param {string} name
   * @param {string} t
   * @param {Function} body
   * @param {Element} el
   * @return {?}
   */
  function create(name, t, body, el) {
    /** @type {Element} */
    var tag = document.createElement("script");
    /** @type {string} */
    tag.src = name;
    /** @type {boolean} */
    tag.async = true;
    var tile = map[t];
    if (tile && tile.crossOrigin) {
      /** @type {string} */
      tag.crossOrigin = "anonymous";
    }
    tag.onload = message.guard(body, "Bootloader script.onload");
    tag.onerror = message.guard(function() {
      /** @type {boolean} */
      cache[name] = true;
      body();
    }, "Bootloader script.onerror");
    tag.onreadystatechange = message.guard(function() {
      if (this.readyState in {
        loaded : 1,
        complete : 1
      }) {
        body();
      }
    }, "Bootloader script.onreadystatechange");
    el.appendChild(tag);
    return tag;
  }
  /**
   * @param {string} fileType
   * @param {string} data
   * @param {string} type
   * @param {Element} key
   * @return {undefined}
   */
  function callback(fileType, data, type, key) {
    var options = test.done.bind(null, [type], data);
    /** @type {number} */
    obj[data] = Date.now();
    if (fileType == "js") {
      var node = create(data, type, options, key);
      if (complete()) {
        ctx[data] = $timeout(function() {
          delete ctx[data];
          if (body) {
            if (node.parentNode && node.parentNode === body) {
              body.removeChild(node);
            }
            /** @type {number} */
            scrubbed[data] = Date.now();
            create(data, type, options, body);
          }
        }, params.timeout);
      }
    } else {
      if (fileType == "css") {
        $.loadStyleSheet(type, data, key, options, function() {
          push(debug("CSS timeout [%s] at %s", type, data));
          /** @type {boolean} */
          cache[data] = true;
          options();
        });
      }
    }
  }
  /**
   * @param {string} prop
   * @return {undefined}
   */
  function filter(prop) {
    if (!map[prop]) {
      push(debug("Missing unloading resource %s", prop));
      return;
    }
    if (map[prop].type == "css") {
      $.unloadStyleSheet(prop);
      delete values[prop];
      jQuery.unsatisfyPersistentDependency(prop);
    }
  }
  /**
   * @param {Array} params
   * @param {Function} token
   * @return {undefined}
   */
  function handler(params, token) {
    if (!y) {
      codeSegments.push([params, token]);
      return;
    }
    params = extend(params);
    /** @type {Array} */
    var vals = [];
    /** @type {number} */
    var i = 0;
    for (;i < params.length;++i) {
      if (!params[i]) {
        push(debug("Empty component!"));
        continue;
      }
      var server = options[params[i]];
      if (server) {
        var resources = server.resources;
        /** @type {number} */
        var j = 0;
        for (;j < resources.length;++j) {
          vals.push(resources[j]);
        }
      }
    }
    test.loadResources(vals, token);
  }
  /**
   * @param {?} s
   * @return {undefined}
   */
  function log(s) {
    if (s) {
      /** @type {boolean} */
      values[s] = true;
    } else {
      push(debug("Making an empty resource (%s) as requested", typeof s));
    }
  }
  /**
   * @param {Array} files
   * @return {?}
   */
  function run(files) {
    if (!files) {
      return[];
    }
    /** @type {Array} */
    var test = [];
    /** @type {number} */
    var i = 0;
    for (;i < files.length;++i) {
      if (typeof files[i] == "string") {
        if (files[i] in map) {
          test.push(map[files[i]]);
        } else {
          push(debug("Unable to resolve resource %s.", files[i]));
        }
      } else {
        test.push(files[i]);
      }
    }
    return test;
  }
  var values = {};
  var o = {};
  var options = {};
  var ctx = {};
  /** @type {null} */
  var body = null;
  var map = {};
  var obj = {};
  var old = {};
  var cache = {};
  var scrubbed = {};
  var l = {};
  /** @type {boolean} */
  var y = false;
  /** @type {Array} */
  var codeSegments = [];
  var jQuery = new dataAndEvents;
  /** @type {number} */
  var startTime = Date.now();
  that.addListener(function(m) {
    /** @type {Array.<string>} */
    m.loadingUrls = Object.keys(obj);
  }, true);
  var test = {
    /**
     * @param {Array} dir
     * @return {undefined}
     */
    configurePage : function(dir) {
      var types = {};
      var codeSegments = run(dir);
      var i;
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;i++) {
        types[codeSegments[i].src] = codeSegments[i];
        log(codeSegments[i].name);
      }
      /** @type {NodeList} */
      var links = document.getElementsByTagName("link");
      /** @type {number} */
      var b = 0;
      /** @type {number} */
      i = 0;
      for (;i < links.length;++i) {
        if (links[i].rel != "stylesheet") {
          continue;
        }
        var type;
        for (type in types) {
          if (links[i].href.indexOf(type) !== -1) {
            var prefix = types[type].name;
            if (types[type].permanent) {
              /** @type {boolean} */
              o[prefix] = true;
            }
            delete types[type];
            $.registerLoadedStyleSheet(prefix, links[i]);
            test.done([prefix]);
            b++;
            break;
          }
        }
      }
      if (b != codeSegments.length) {
        push(debug("configurePage: Found %s out of %s items", b, codeSegments.length));
      }
    },
    /**
     * @param {(Array|string)} params
     * @param {number} value
     * @return {undefined}
     */
    loadComponents : function(params, value) {
      params = extend(params);
      /** @type {Array} */
      var list = [];
      /** @type {number} */
      var i = 0;
      for (;i < params.length;i++) {
        var result = options[params[i]];
        var arg = "legacy:" + params[i];
        if (options[arg]) {
          if (result) {
            push(debug("%s has a conflicting legacy component. That cannot happen " + "and legacy won btw.", params[i]));
          }
          params[i] = arg;
          list.push(arg);
          continue;
        }
        if (!result) {
          push(debug("loadComponents: %s is not in the component map.", params[i]));
        } else {
          if (result.module) {
            list.push(params[i]);
            push(debug("loadComponents: Loading module %s!", params[i]));
          }
        }
      }
      handler(params, list.length ? fn.bind(null, list, value) : value);
    },
    /**
     * @param {Array} expectedItems
     * @param {Function} key
     * @return {undefined}
     */
    loadModules : function(expectedItems, key) {
      /** @type {Array} */
      var arg = [];
      /** @type {number} */
      var i = 0;
      for (;i < expectedItems.length;i++) {
        var result = options[expectedItems[i]];
        if (!result) {
          push(debug("loadModules: %s is not in the component map.", expectedItems[i]));
          arg.push(expectedItems[i]);
        } else {
          if (result.module) {
            arg.push(expectedItems[i]);
          } else {
            var tag = result.resources;
            /** @type {boolean} */
            var ta = true;
            /** @type {number} */
            var j = 0;
            for (;j < tag.length;j++) {
              var filter = map[tag[j]];
              if (!filter || filter.type != "css") {
                /** @type {boolean} */
                ta = false;
              }
            }
            if (!ta) {
              push(debug("loadModules: %s is not a module!", expectedItems[i]));
            }
          }
        }
      }
      handler(expectedItems, fn.bind(null, arg, key));
    },
    /**
     * @param {(Array|string)} params
     * @param {Function} fn
     * @param {boolean} recurring
     * @param {?} _interval
     * @return {?}
     */
    loadResources : function(params, fn, recurring, _interval) {
      var i;
      params = run(extend(params));
      if (recurring) {
        var value = {};
        /** @type {number} */
        i = 0;
        for (;i < params.length;++i) {
          /** @type {boolean} */
          value[params[i].name] = true;
        }
        var k;
        for (k in values) {
          if (!(k in o) && (!(k in value) && !(k in l))) {
            filter(k);
          }
        }
        l = {};
      }
      /** @type {Array} */
      var arr = [];
      /** @type {Array} */
      var attributes = [];
      /** @type {number} */
      i = 0;
      for (;i < params.length;++i) {
        var param = params[i];
        if (param.permanent) {
          /** @type {boolean} */
          o[param.name] = true;
        }
        if (jQuery.isPersistentDependencySatisfied(param.name)) {
          continue;
        }
        if (!param.nonblocking) {
          attributes.push(param.name);
        }
        if (!values[param.name]) {
          log(param.name);
          arr.push(param);
          if (window.CavalryLogger) {
            window.CavalryLogger.getInstance().measureResources(param, _interval);
          }
        }
      }
      var result;
      if (fn) {
        if (typeof fn === "function") {
          result = jQuery.registerCallback(fn, attributes);
        } else {
          result = jQuery.addDependenciesToExistingCallback(fn, attributes);
        }
      }
      var a = test.getHardpoint();
      var b = parse() ? a : document.createDocumentFragment();
      /** @type {number} */
      i = 0;
      for (;i < arr.length;++i) {
        callback(arr[i].type, arr[i].src, arr[i].name, b);
      }
      if (a !== b) {
        a.appendChild(b);
      }
      return result;
    },
    /**
     * @param {string} msgs
     * @return {undefined}
     */
    requestJSResource : function(msgs) {
      var camelKey = test.getHardpoint();
      callback("js", msgs, null, camelKey);
    },
    /**
     * @param {Array} ca
     * @param {?} name
     * @return {undefined}
     */
    done : function(ca, name) {
      if (name) {
        /** @type {number} */
        old[name] = Date.now() - obj[name];
        delete obj[name];
        if (ctx[name]) {
          clearTimeout(ctx[name]);
          delete ctx[name];
        }
      }
      if (window.CavalryLogger) {
        window.CavalryLogger.done_js(ca);
      }
      /** @type {number} */
      var i = 0;
      for (;i < ca.length;++i) {
        var c = ca[i];
        if (c) {
          log(c);
          jQuery.satisfyPersistentDependency(c);
        }
      }
    },
    /**
     * @param {Object} attrs
     * @return {undefined}
     */
    enableBootload : function(attrs) {
      var attr;
      for (attr in attrs) {
        if (!options[attr]) {
          options[attr] = attrs[attr];
        }
      }
      if (!y) {
        /** @type {boolean} */
        y = true;
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          handler.apply(null, codeSegments[i]);
        }
        /** @type {Array} */
        codeSegments = [];
      }
    },
    /**
     * @return {?}
     */
    getHardpoint : function() {
      if (!body) {
        /** @type {NodeList} */
        var match = document.getElementsByTagName("head");
        body = match.length && match[0] || document.body;
      }
      return body;
    },
    /**
     * @param {Object} data
     * @return {undefined}
     */
    setResourceMap : function(data) {
      var i;
      for (i in data) {
        if (!map[i]) {
          /** @type {string} */
          data[i].name = i;
          map[i] = data[i];
        }
      }
    },
    /**
     * @return {?}
     */
    getResourceURLs : function() {
      var old = {};
      var key;
      for (key in map) {
        var name = map[key].src;
        /** @type {boolean} */
        old[name] = key in values && (!(name in cache) && !(name in obj));
      }
      return old;
    },
    /**
     * @return {?}
     */
    getResourceHashes : function() {
      return Object.assign({}, map);
    },
    /**
     * @param {Object} json
     * @return {undefined}
     */
    loadEarlyResources : function(json) {
      test.setResourceMap(json);
      /** @type {Array} */
      var rows = [];
      var i;
      for (i in json) {
        var r = map[i];
        rows.push(r);
        if (!r.permanent) {
          l[r.name] = r;
        }
      }
      test.loadResources(rows);
    },
    /**
     * @return {?}
     */
    getLoadingUrls : function() {
      var plots = {};
      /** @type {number} */
      var idx = Date.now();
      var name;
      for (name in obj) {
        /** @type {number} */
        plots[name] = idx - obj[name];
      }
      return plots;
    },
    /**
     * @return {?}
     */
    getLoadedUrlTimes : function() {
      return old;
    },
    /**
     * @return {?}
     */
    getErrorUrls : function() {
      return Object.keys(cache);
    },
    /**
     * @return {?}
     */
    getStartTime : function() {
      return startTime;
    },
    /**
     * @return {?}
     */
    getRetriedUrls : function() {
      return Object.keys(scrubbed);
    },
    __debug : {
      callbackManager : jQuery,
      componentMap : options,
      requested : values,
      resources : map
    }
  };
  module.exports = test;
}, null);
__d("lowerDomain", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes) {
  if (document.domain.toLowerCase().match(/(^|\.)facebook\..*/)) {
    /** @type {string} */
    document.domain = "facebook.com";
  }
}, null);
__d("CookieCore", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var store = {
    /**
     * @param {string} key
     * @param {number} value
     * @param {boolean} s
     * @param {string} deepDataAndEvents
     * @param {boolean} opt_domain
     * @return {undefined}
     */
    set : function(key, value, s, deepDataAndEvents, opt_domain) {
      /** @type {string} */
      document.cookie = key + "=" + encodeURIComponent(value) + "; " + (s ? "expires=" + (new Date(Date.now() + s)).toGMTString() + "; " : "") + "path=" + (deepDataAndEvents || "/") + "; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, "$1") + (opt_domain ? "; secure" : "");
    },
    /**
     * @param {string} arr
     * @param {string} c
     * @return {undefined}
     */
    clear : function(arr, c) {
      c = c || "/";
      /** @type {string} */
      document.cookie = arr + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; " + "path=" + c + "; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, "$1");
    },
    /**
     * @param {string} num
     * @return {?}
     */
    get : function(num) {
      /** @type {(Array.<string>|null)} */
      var v = document.cookie.match("(?:^|;\\s*)" + num + "=(.*?)(?:;|$)");
      return v ? decodeURIComponent(v[1]) : v;
    }
  };
  module.exports = store;
}, null);
__d("createObjectFrom", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, mod, keepData) {
  /**
   * @param {string} arr
   * @param {boolean} value
   * @return {?}
   */
  function exports(arr, value) {
    var obj = {};
    /** @type {boolean} */
    var isArray = Array.isArray(value);
    if (typeof value == "undefined") {
      /** @type {boolean} */
      value = true;
    }
    var i = arr.length;
    for (;i--;) {
      obj[arr[i]] = isArray ? value[i] : value;
    }
    return obj;
  }
  /** @type {function (string, boolean): ?} */
  mod.exports = exports;
}, null);
__d("URISchemes", ["createObjectFrom"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $sanitize) {
  var keywords = $sanitize(["fb", "fb-ama", "fb-messenger", "fbcf", "fbconnect", "fbrpc", "file", "ftp", "http", "https", "mailto", "ms-app", "itms", "itms-apps", "itms-services", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs"]);
  var JsDiff = {
    /**
     * @param {string} verb
     * @return {?}
     */
    isAllowed : function(verb) {
      if (!verb) {
        return true;
      }
      return keywords.hasOwnProperty(verb.toLowerCase());
    }
  };
  module.exports = JsDiff;
}, null);
__d("isNode", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {Node} node
   * @return {?}
   */
  function select(node) {
    return!!(node && (typeof Node === "function" ? node instanceof Node : typeof node === "object" && (typeof node.nodeType === "number" && typeof node.nodeName === "string")));
  }
  /** @type {function (Node): ?} */
  module.exports = select;
}, null);
__d("isTextNode", ["isNode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, func) {
  /**
   * @param {?} node
   * @return {?}
   */
  function visit(node) {
    return func(node) && node.nodeType == 3;
  }
  /** @type {function (?): ?} */
  module.exports = visit;
}, null);
__d("containsNode", ["isTextNode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, forOwn) {
  /**
   * @param {string} val
   * @param {string} obj
   * @return {?}
   */
  function contains(val, obj) {
    if (!val || !obj) {
      return false;
    } else {
      if (val === obj) {
        return true;
      } else {
        if (forOwn(val)) {
          return false;
        } else {
          if (forOwn(obj)) {
            return contains(val, obj.parentNode);
          } else {
            if (val.contains) {
              return val.contains(obj);
            } else {
              if (val.compareDocumentPosition) {
                return!!(val.compareDocumentPosition(obj) & 16);
              } else {
                return false;
              }
            }
          }
        }
      }
    }
  }
  /** @type {function (string, string): ?} */
  module.exports = contains;
}, null);
__d("getActiveElement", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {?}
   */
  function setup() {
    try {
      return document.activeElement || document.body;
    } catch (h) {
      return document.body;
    }
  }
  /** @type {function (): ?} */
  module.exports = setup;
}, null);
__d("getDocumentScrollElement", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, m, keepData) {
  /**
   * @param {Object} d
   * @return {?}
   */
  function d(d) {
    d = d || document;
    return!g && d.compatMode === "CSS1Compat" ? d.documentElement : d.body;
  }
  /** @type {boolean} */
  var g = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;
  /** @type {function (Object): ?} */
  m.exports = d;
}, null);
__d("isElementNode", ["isNode"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, func) {
  /**
   * @param {?} node
   * @return {?}
   */
  function visit(node) {
    return func(node) && node.nodeType == 1;
  }
  /** @type {function (?): ?} */
  module.exports = visit;
}, null);
__d("getObjectValues", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {(Object|string)} elems
   * @return {?}
   */
  function map(elems) {
    /** @type {Array} */
    var ret = [];
    var i;
    for (i in elems) {
      ret.push(elems[i]);
    }
    return ret;
  }
  /** @type {function ((Object|string)): ?} */
  module.exports = map;
}, null);
__d("keyMirror", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, toString) {
  /**
   * @param {?} o
   * @return {?}
   */
  var isArray = function(o) {
    var optionList = {};
    var i;
    toString(o instanceof Object && !Array.isArray(o));
    for (i in o) {
      if (!o.hasOwnProperty(i)) {
        continue;
      }
      /** @type {string} */
      optionList[i] = i;
    }
    return optionList;
  };
  /** @type {function (?): ?} */
  module.exports = isArray;
}, null);
__d("mergeHelpers", ["invariant", "keyMirror"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $sanitize, Application) {
  /** @type {number} */
  var padLength = 36;
  /**
   * @param {?} actual
   * @return {?}
   */
  var fail = function(actual) {
    return typeof actual !== "object" || (actual instanceof Date || actual === null);
  };
  var t = {
    MAX_MERGE_DEPTH : padLength,
    /** @type {function (?): ?} */
    isTerminal : fail,
    /**
     * @param {number} arg
     * @return {?}
     */
    normalizeMergeArg : function(arg) {
      return arg === void 0 || arg === null ? {} : arg;
    },
    /**
     * @param {?} two
     * @param {?} uris
     * @return {undefined}
     */
    checkMergeArrayArgs : function(two, uris) {
      $sanitize(Array.isArray(two) && Array.isArray(uris));
    },
    /**
     * @param {?} one
     * @param {?} two
     * @return {undefined}
     */
    checkMergeObjectArgs : function(one, two) {
      t.checkMergeObjectArg(one);
      t.checkMergeObjectArg(two);
    },
    /**
     * @param {?} value
     * @return {undefined}
     */
    checkMergeObjectArg : function(value) {
      $sanitize(!fail(value) && !Array.isArray(value));
    },
    /**
     * @param {?} value
     * @return {undefined}
     */
    checkMergeIntoObjectArg : function(value) {
      $sanitize((!fail(value) || typeof value === "function") && !Array.isArray(value));
    },
    /**
     * @param {number} i
     * @return {undefined}
     */
    checkMergeLevel : function(i) {
      $sanitize(i < padLength);
    },
    /**
     * @param {(Array|string)} strategy
     * @return {undefined}
     */
    checkArrayStrategy : function(strategy) {
      $sanitize(strategy === void 0 || strategy in t.ArrayStrategies);
    },
    ArrayStrategies : Application({
      Clobber : true,
      IndexByIndex : true
    })
  };
  module.exports = t;
}, null);
__d("ix", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, mod, keepData, inspect) {
  /**
   * @param {string} child
   * @return {?}
   */
  function exports(child) {
    var el = obj[child];
    inspect(!!el);
    return el;
  }
  var obj = {};
  /**
   * @param {Object} value
   * @return {undefined}
   */
  exports.add = function(value) {
    /** @type {boolean} */
    var k = false;
    var key;
    for (key in value) {
      if (!(key in obj)) {
        obj[key] = value[key];
      }
    }
  };
  /** @type {function (string): ?} */
  mod.exports = exports;
}, null);
__d("keyOf", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} prop
   * @return {?}
   */
  var resolve = function(prop) {
    var name;
    for (name in prop) {
      if (!prop.hasOwnProperty(name)) {
        continue;
      }
      return name;
    }
    return null;
  };
  /** @type {function (?): ?} */
  module.exports = resolve;
}, null);
__d("ImmutableValue", ["invariant", "isNode", "keyOf"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, mod, keepData, next, $sanitize, iterator) {
  /**
   * @param {string} val
   * @return {undefined}
   */
  function result(val) {
    next(val === result[key]);
  }
  var key = iterator({
    _DONT_EVER_TYPE_THIS_SECRET_KEY : null
  });
  /**
   * @param {?} attributes
   * @param {Object} values
   * @return {undefined}
   */
  result.mergeAllPropertiesInto = function(attributes, values) {
    var valuesLen = values.length;
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;i++) {
      Object.assign(attributes, values[i]);
    }
  };
  /**
   * @param {Object} value
   * @return {undefined}
   */
  result.deepFreezeRootNode = function(value) {
    if ($sanitize(value)) {
      return;
    }
    Object.freeze(value);
    var key;
    for (key in value) {
      if (value.hasOwnProperty(key)) {
        result.recurseDeepFreeze(value[key]);
      }
    }
    Object.seal(value);
  };
  /**
   * @param {Object} value
   * @return {undefined}
   */
  result.recurseDeepFreeze = function(value) {
    if ($sanitize(value) || !result.shouldRecurseFreeze(value)) {
      return;
    }
    Object.freeze(value);
    var key;
    for (key in value) {
      if (value.hasOwnProperty(key)) {
        result.recurseDeepFreeze(value[key]);
      }
    }
    Object.seal(value);
  };
  /**
   * @param {Function} object
   * @return {?}
   */
  result.shouldRecurseFreeze = function(object) {
    return typeof object === "object" && (!(object instanceof result) && object !== null);
  };
  /** @type {number} */
  result._DONT_EVER_TYPE_THIS_SECRET_KEY = Math.random();
  /** @type {function (string): undefined} */
  mod.exports = result;
}, null);
__d("ImmutableObject", ["ImmutableValue", "invariant", "keyOf", "mergeHelpers"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, context, keepData, m, jQuery, comparator, lang) {
  /**
   * @param {Function} b
   * @return {undefined}
   */
  function fn(b) {
    jQuery(b instanceof m);
  }
  /**
   * @return {undefined}
   */
  function self() {
    m.call(this, m[k]);
    m.mergeAllPropertiesInto(this, arguments);
  }
  /**
   * @param {Object} a
   * @param {Object} value
   * @return {?}
   */
  function extend(a, value) {
    callback(a, value);
    var obj = {};
    /** @type {Array.<string>} */
    var codeSegments = Object.keys(a);
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      /** @type {string} */
      var key = codeSegments[i];
      if (!value.hasOwnProperty(key)) {
        obj[key] = a[key];
      } else {
        if (isFunction(a[key]) || isFunction(value[key])) {
          obj[key] = value[key];
        } else {
          obj[key] = extend(a[key], value[key]);
        }
      }
    }
    /** @type {Array.<string>} */
    var attrList = Object.keys(value);
    /** @type {number} */
    i = 0;
    for (;i < attrList.length;i++) {
      /** @type {string} */
      var attrName = attrList[i];
      if (a.hasOwnProperty(attrName)) {
        continue;
      }
      obj[attrName] = value[attrName];
    }
    return a instanceof m ? new self(obj) : value instanceof m ? new self(obj) : obj;
  }
  var callback = lang.checkMergeObjectArgs;
  var isFunction = lang.isTerminal;
  var k = comparator({
    _DONT_EVER_TYPE_THIS_SECRET_KEY : null
  });
  var p;
  for (p in m) {
    if (m.hasOwnProperty(p)) {
      self[p] = m[p];
    }
  }
  var parent = m === null ? null : m.prototype;
  /** @type {Object} */
  self.prototype = Object.create(parent);
  /** @type {function (): undefined} */
  self.prototype.constructor = self;
  /** @type {Function} */
  self.__superConstructor__ = m;
  /**
   * @return {?}
   */
  self.create = function() {
    /** @type {Object} */
    var that = Object.create(self.prototype);
    self.apply(that, arguments);
    return that;
  };
  /**
   * @param {string} elem
   * @param {number} value
   * @return {?}
   */
  self.set = function(elem, value) {
    fn(elem);
    jQuery(typeof value === "object" && (value !== void 0 && !Array.isArray(value)));
    return new self(elem, value);
  };
  /**
   * @param {string} elem
   * @param {?} name
   * @param {?} value
   * @return {?}
   */
  self.setProperty = function(elem, name, value) {
    var pdataCur = {};
    pdataCur[name] = value;
    return self.set(elem, pdataCur);
  };
  /**
   * @param {Object} defaults
   * @param {string} name
   * @return {?}
   */
  self.deleteProperty = function(defaults, name) {
    var internalValues = {};
    var key;
    for (key in defaults) {
      if (key !== name && defaults.hasOwnProperty(key)) {
        internalValues[key] = defaults[key];
      }
    }
    return new self(internalValues);
  };
  /**
   * @param {Object} config
   * @param {Object} isXML
   * @return {?}
   */
  self.setDeep = function(config, isXML) {
    fn(config);
    return extend(config, isXML);
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  self.values = function(obj) {
    return Object.keys(obj).map(function(implementation) {
      return obj[implementation];
    });
  };
  /** @type {function (): undefined} */
  context.exports = self;
}, null);
__d("TimingSeries", ["ImmutableObject", "invariant", "performanceAbsoluteNow"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Type, indexOf, $http) {
  /**
   * @param {string} val
   * @param {string} type
   * @return {undefined}
   */
  function Node(val, type) {
    this.$TimingSeries0 = {
      name : val,
      entryType : type
    };
    this.reset();
  }
  /**
   * @return {?}
   */
  Node.prototype.reset = function() {
    this.$TimingSeries1 = Object.assign({}, this.$TimingSeries0);
    /** @type {boolean} */
    this.$TimingSeries2 = false;
    /** @type {Array} */
    this.$TimingSeries3 = [];
    /** @type {null} */
    this.$TimingSeries4 = null;
    return this;
  };
  /**
   * @return {?}
   */
  Node.prototype.getName = function() {
    return this.$TimingSeries1.name;
  };
  /**
   * @return {?}
   */
  Node.prototype.getType = function() {
    return this.$TimingSeries1.entryType;
  };
  /**
   * @param {Array} prop
   * @param {number} val
   * @return {?}
   */
  Node.prototype.mark = function(prop, val) {
    if (this.$TimingSeries2) {
      return this;
    }
    val = Number.isFinite(val) ? val : $http();
    if (Array.isArray(prop)) {
      prop.forEach(function(name) {
        return this.mark(name, val);
      }.bind(this));
      return this;
    }
    var materials = {
      name : prop,
      value : val
    };
    this.$TimingSeries3.push(materials);
    return this;
  };
  /**
   * @param {string} phase
   * @param {?} propName
   * @return {?}
   */
  Node.prototype.addProperty = function(phase, propName) {
    indexOf(!(phase in this.$TimingSeries1));
    this.$TimingSeries1[phase] = propName;
    return this;
  };
  /**
   * @return {?}
   */
  Node.prototype.complete = function() {
    /** @type {boolean} */
    this.$TimingSeries2 = true;
    return this;
  };
  /**
   * @return {?}
   */
  Node.prototype.isCompleted = function() {
    return this.$TimingSeries2;
  };
  /**
   * @return {?}
   */
  Node.prototype.getTimings = function() {
    if (this.$TimingSeries2) {
      var object = this.$TimingSeries4;
      if (!object) {
        object = {};
        this.$TimingSeries3.forEach(function(elem) {
          object[elem.name] = elem.value;
        });
        object = new Type(this.$TimingSeries1, object);
        this.$TimingSeries4 = object;
      }
      return object;
    }
  };
  /** @type {function (string, string): undefined} */
  module.exports = Node;
}, null);
__d("TimingSeriesStorage", ["TimingSeries"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Deferred) {
  /** @type {Array} */
  var out = [];
  var JsDiff = {
    /**
     * @param {string} clone
     * @param {string} pagelet
     * @return {?}
     */
    createSeries : function(clone, pagelet) {
      var copies = new Deferred(clone, pagelet);
      out.push(copies);
      return copies;
    },
    /**
     * @return {?}
     */
    getSeries : function() {
      return out.filter(function(item) {
        return item.isCompleted();
      }).map(function(dataAndEvents) {
        return dataAndEvents.getTimings();
      });
    },
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    getSeriesByType : function(dataAndEvents) {
      return out.filter(function(item) {
        return item.isCompleted() && item.getType() === dataAndEvents;
      }).map(function(dataAndEvents) {
        return dataAndEvents.getTimings();
      });
    }
  };
  module.exports = JsDiff;
}, null);
__d("ScriptPath", ["ErrorUtils"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, results) {
  /**
   * @param {Object} value
   * @return {?}
   */
  function trim(value) {
    /** @type {number} */
    var data = ++k;
    /** @type {Object} */
    cache[data] = value;
    return data;
  }
  /**
   * @param {Object} f
   * @return {undefined}
   */
  function forceFunction(f) {
    if (cache[f]) {
      delete cache[f];
    }
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function mix(obj) {
    Object.keys(cache).forEach(function(index) {
      results.applyWithGuard(cache[index], null, [{
        source : key,
        dest : options,
        cause : obj
      }]);
    });
  }
  /**
   * @return {?}
   */
  function throttledUpdate() {
    return options ? options.scriptPath : void 0;
  }
  /** @type {null} */
  var key = null;
  /** @type {null} */
  var options = null;
  var cache = {};
  /** @type {number} */
  var k = 0;
  /** @type {null} */
  var text = null;
  var Simplate = {
    PAGE_LOAD : "load",
    PAGE_UNLOAD : "unload",
    OPEN_OVERLAY_VIEW : "open_overlay_view",
    CLOSE_OVERLAY_VIEW : "close_overlay_view",
    TRANSITION : "transition"
  };
  /** @type {Array} */
  var data = [];
  var Vector = {
    /**
     * @param {string} b
     * @param {number} value
     * @param {Object} events
     * @return {undefined}
     */
    set : function(b, value, events) {
      key = options;
      options = {
        scriptPath : b,
        categoryToken : value,
        extraInfoFromServer : !events || typeof events !== "object" ? {} : events
      };
      /** @type {Array} */
      data = [];
      /** @type {string} */
      window._script_path = b;
      mix();
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    updateSearchSessionID : function(dataAndEvents) {
      if (options) {
        options.extraInfoFromServer = options.extraInfoFromServer ? options.extraInfoFromServer : {};
        options.extraInfoFromServer.search_sid = dataAndEvents;
      }
    },
    /**
     * @param {?} height
     * @return {undefined}
     */
    openOverlayView : function(height) {
      if (!height) {
        return;
      }
      var linesLen = data.length;
      if (linesLen === 0 || data[linesLen - 1] !== height) {
        key = Object.assign({}, options);
        options.topViewEndpoint = height;
        data.push(height);
        mix(Simplate.OPEN_OVERLAY_VIEW);
      }
    },
    /**
     * @param {?} item
     * @return {undefined}
     */
    closeOverlayView : function(item) {
      var index = data.lastIndexOf(item);
      if (index === -1) {
        return;
      }
      key = Object.assign({}, options);
      if (index > 0) {
        options.topViewEndpoint = data[index - 1];
      } else {
        /** @type {null} */
        options.topViewEndpoint = null;
      }
      data = data.slice(0, index);
      mix(Simplate.CLOSE_OVERLAY_VIEW);
    },
    /**
     * @param {null} textAlt
     * @return {undefined}
     */
    setNavigation : function(textAlt) {
      /** @type {null} */
      text = textAlt;
    },
    /**
     * @return {?}
     */
    getNavigation : function() {
      return text;
    },
    /** @type {function (): ?} */
    getScriptPath : throttledUpdate,
    /**
     * @return {?}
     */
    getCategoryToken : function() {
      return options ? options.categoryToken : void 0;
    },
    /**
     * @return {?}
     */
    getTopViewEndpoint : function() {
      var linesLen = data.length;
      return linesLen > 0 ? data[linesLen - 1] : throttledUpdate();
    },
    /**
     * @return {?}
     */
    getPageInfo : function() {
      return options;
    },
    /**
     * @return {?}
     */
    getSourcePageInfo : function() {
      return key;
    },
    /**
     * @param {Object} source
     * @return {?}
     */
    subscribe : function(source) {
      return trim(source);
    },
    /**
     * @param {Object} f
     * @return {undefined}
     */
    unsubscribe : function(f) {
      forceFunction(f);
    }
  };
  Vector.CAUSE = Simplate;
  module.exports = Vector;
}, null);
__d("replaceTransportMarkers", ["ge"], function(dataAndEvents, next_callback, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, toString) {
  /**
   * @param {string} val
   * @param {(Object|string)} item
   * @param {string} key
   * @return {undefined}
   */
  function isArray(val, item, key) {
    var keys = typeof key !== "undefined" ? item[key] : item;
    var k;
    if (Array.isArray(keys)) {
      /** @type {number} */
      k = 0;
      for (;k < keys.length;k++) {
        isArray(val, keys, k);
      }
    } else {
      if (keys && typeof keys == "object") {
        if (keys.__m) {
          item[key] = next_callback.call(null, keys.__m);
        } else {
          if (keys.__e) {
            item[key] = toString(keys.__e);
          } else {
            if (keys.__rel) {
              /** @type {string} */
              item[key] = val;
            } else {
              var type;
              for (type in keys) {
                isArray(val, keys, type);
              }
            }
          }
        }
      }
    }
  }
  /** @type {function (string, (Object|string), string): undefined} */
  module.exports = isArray;
}, null);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, subject, cb) {
  var result = new subject();
  var listener = {
    /**
     * @return {?}
     */
    getLoadedModuleHash : function() {
      return result.toCompressedString();
    },
    /**
     * @param {?} name
     * @param {?} mod
     * @param {?} srcFiles
     * @param {string} elem
     * @param {?} outErr
     * @return {undefined}
     */
    handleDefine : function(name, mod, srcFiles, elem, outErr) {
      result.set(elem);
      define(name, mod, function() {
        cb(outErr, srcFiles);
        return srcFiles;
      });
    },
    /**
     * @param {Array} mod
     * @param {?} chunk
     * @return {undefined}
     */
    handleDefines : function(mod, chunk) {
      mod.map(function(arr) {
        if (chunk) {
          arr.push(chunk);
        }
        listener.handleDefine.apply(null, arr);
      });
    }
  };
  module.exports = listener;
}, null);
__d("ServerJS", ["ErrorUtils", "EventEmitter", "ServerJSDefine", "ex", "ge", "replaceTransportMarkers"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, callback, context, textAlt, clause, Event, next_scope, test, func, mixin) {
  /**
   * @return {undefined}
   */
  function self() {
    this.$ServerJS0 = {};
    /** @type {null} */
    this.$ServerJS1 = null;
    this.$ServerJS2 = {};
  }
  /**
   * @param {?} newValue
   * @param {?} callback
   * @param {?} el
   * @return {?}
   */
  function setter(newValue, callback, el) {
    return newValue.map(function(args) {
      callback.apply(el, args);
    });
  }
  /**
   * @param {?} self
   * @param {number} name
   * @param {Array} old
   * @return {undefined}
   */
  function remove(self, name, old) {
    var callbackSymbol = old[0];
    if (!(callbackSymbol in self)) {
      old[name] = (old[name] || 0) + 1;
    }
    /** @type {boolean} */
    self[callbackSymbol] = true;
  }
  /**
   * @return {?}
   */
  function value() {
    return{};
  }
  /** @type {number} */
  var m = 0;
  var event = new Event;
  /** @type {number} */
  var removed = 0;
  /**
   * @param {Object} self
   * @return {?}
   */
  self.prototype.handle = function(self) {
    if (self.__guard) {
      throw new Error("ServerJS.handle called on data that has already been handled");
    }
    /** @type {boolean} */
    self.__guard = true;
    setter(self.define || [], this.$ServerJS3, this);
    setter(self.markup || [], this.$ServerJS4, this);
    setter(self.elements || [], this.$ServerJS5, this);
    setter(self.instances || [], this.$ServerJS6, this);
    var codeSegments = setter(self.require || [], this.$ServerJS7, this);
    return{
      /**
       * @return {undefined}
       */
      cancel : function() {
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          if (codeSegments[i]) {
            codeSegments[i].cancel();
          }
        }
      }
    };
  };
  /**
   * @param {Object} self
   * @return {?}
   */
  self.prototype.handlePartial = function(self) {
    (self.instances || []).forEach(remove.bind(null, this.$ServerJS0, 3));
    (self.markup || []).forEach(remove.bind(null, this.$ServerJS0, 2));
    (self.elements || []).forEach(remove.bind(null, this.$ServerJS0, 2));
    return this.handle(self);
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.prototype.setRelativeTo = function(dataAndEvents) {
    this.$ServerJS1 = dataAndEvents;
    return this;
  };
  /**
   * @return {undefined}
   */
  self.prototype.cleanup = function() {
    /**
     * @param {?} line
     * @return {undefined}
     */
    function uncaught(line) {
      var parts = this.$ServerJS2[line];
      var part = parts[0];
      var spaceAfter = parts[1];
      delete this.$ServerJS2[line];
      /** @type {string} */
      var label = spaceAfter ? 'JS::call("' + part + '", "' + spaceAfter + '", ...)' : 'JS::requireModule("' + part + '")';
      /** @type {string} */
      var msg = label + " did not fire because it has missing dependencies.";
      throw new Error(msg);
    }
    /** @type {Array} */
    var out = [];
    var copies;
    for (copies in this.$ServerJS0) {
      out.push(copies);
    }
    callback.call(null, out, value);
    this.$ServerJS0 = {};
    var $ServerJS2;
    for ($ServerJS2 in this.$ServerJS2) {
      clause.applyWithGuard(uncaught, this, [$ServerJS2], null, "ServerJS:cleanup" + " id: " + $ServerJS2);
    }
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @param {?} ignoreMethodDoesntExist
   * @param {?} textAlt
   * @return {?}
   */
  self.prototype.$ServerJS3 = function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt) {
    return clause.applyWithGuard(next_scope.handleDefine, next_scope, [dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, this.$ServerJS1], null, "JS::define");
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {boolean} dataAndEvents
   * @param {?} ignoreMethodDoesntExist
   * @param {?} textAlt
   * @return {?}
   */
  self.prototype.$ServerJS7 = function(deepDataAndEvents, dataAndEvents, ignoreMethodDoesntExist, textAlt) {
    return clause.applyWithGuard(this.$ServerJS8, this, [deepDataAndEvents, dataAndEvents, ignoreMethodDoesntExist, textAlt], null, dataAndEvents ? "JS::call" : "JS::requireModule");
  };
  /**
   * @param {string} index
   * @param {string} method
   * @param {Array} y
   * @param {Array} args
   * @return {?}
   */
  self.prototype.$ServerJS8 = function(index, method, y, args) {
    /** @type {Array} */
    var dependencies = [index].concat(y || []);
    /** @type {string} */
    var name = (method ? "__call__" : "__requireModule__") + m++;
    /** @type {Array} */
    this.$ServerJS2[name] = [index, method];
    return define(name, dependencies, clause.guard(function(reporter) {
      delete this.$ServerJS2[name];
      if (args) {
        mixin(this.$ServerJS1, args);
      }
      if (method) {
        if (!reporter[method]) {
          throw new TypeError(test('Module %s has no method "%s"', index, method));
        }
        var params = {
          moduleName : index,
          method : method,
          sourceMeta : reporter[method].__SMmeta
        };
        event.emit(self.PRE_JS_CALL, removed, params);
        reporter[method].apply(reporter, args || []);
        event.emit(self.POST_JS_CALL, removed, params);
        removed++;
      }
    }.bind(this), method ? "JS::call('" + index + "', '" + method + "', ...)" : "JS::requireModule('" + index + "')"), 1, this, 1);
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @param {?} ignoreMethodDoesntExist
   * @param {?} textAlt
   * @return {?}
   */
  self.prototype.$ServerJS6 = function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt) {
    return clause.applyWithGuard(this.$ServerJS9, this, [dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt], null, "JS::instance");
  };
  /**
   * @param {?} name
   * @param {?} mod
   * @param {?} value
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.$ServerJS9 = function(name, mod, value, deepDataAndEvents) {
    /** @type {null} */
    var Module = null;
    if (mod) {
      Module = function(target) {
        mixin(this.$ServerJS1, value);
        /** @type {Object} */
        var that = Object.create(target.prototype);
        target.apply(that, value);
        return that;
      }.bind(this);
    }
    define(name, mod, Module, 0, null, deepDataAndEvents);
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @param {?} ignoreMethodDoesntExist
   * @return {?}
   */
  self.prototype.$ServerJS4 = function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
    return clause.applyWithGuard(this.$ServerJSa, this, [dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist], null, "JS::markup");
  };
  /**
   * @param {?} name
   * @param {?} v
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.$ServerJSa = function(name, v, deepDataAndEvents) {
    define(name, ["HTML"], function(nv) {
      return nv.replaceJSONWrapper(v).getRootNode();
    }, 0, null, deepDataAndEvents);
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @param {?} ignoreMethodDoesntExist
   * @param {?} textAlt
   * @return {?}
   */
  self.prototype.$ServerJS5 = function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt) {
    return clause.applyWithGuard(this.$ServerJSb, this, [dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt], null, "JS::element");
  };
  /**
   * @param {?} dependencies
   * @param {?} name
   * @param {boolean} property
   * @param {?} vvar
   * @return {undefined}
   */
  self.prototype.$ServerJSb = function(dependencies, name, property, vvar) {
    if (name === null && property) {
      define(dependencies, null, null, 0, null, property);
      return;
    }
    /** @type {Array} */
    var assigns = [];
    /** @type {number} */
    var r20 = 0;
    if (vvar) {
      assigns.push(vvar);
      /** @type {number} */
      r20 = 1;
      property++;
    }
    define(dependencies, assigns, function(array) {
      var actual = func(name, array);
      if (!actual) {
        /** @type {string} */
        var message = 'Could not find element "%s"';
        throw new Error(test(message, name));
      }
      return actual;
    }, r20, null, property);
  };
  /** @type {string} */
  self.PRE_JS_CALL = "pre-js-call";
  /** @type {string} */
  self.POST_JS_CALL = "post-js-call";
  self.addListener = event.addListener.bind(event);
  /** @type {function (): undefined} */
  context.exports = self;
}, null);
__d("UserAgent_DEPRECATED", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @return {undefined}
   */
  function parse() {
    if (g) {
      return;
    }
    /** @type {boolean} */
    g = true;
    /** @type {string} */
    var selector = navigator.userAgent;
    /** @type {(Array.<string>|null)} */
    var parts = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(selector);
    /** @type {(Array.<string>|null)} */
    var elem = /(Mac OS X)|(Windows)|(Linux)/.exec(selector);
    /** @type {(Array.<string>|null)} */
    matched = /\b(iPhone|iP[ao]d)/.exec(selector);
    /** @type {(Array.<string>|null)} */
    $target = /\b(iP[ao]d)/.exec(selector);
    /** @type {(Array.<string>|null)} */
    q = /Android/i.exec(selector);
    /** @type {(Array.<string>|null)} */
    m = /FBAN\/\w+;/i.exec(selector);
    /** @type {(Array.<string>|null)} */
    query = /Mobile/i.exec(selector);
    /** @type {boolean} */
    r = !!/Win64/.exec(selector);
    if (parts) {
      /** @type {number} */
      _ref = parts[1] ? parseFloat(parts[1]) : parts[5] ? parseFloat(parts[5]) : NaN;
      if (_ref && (document && document.documentMode)) {
        _ref = document.documentMode;
      }
      /** @type {(Array.<string>|null)} */
      var matches = /(?:Trident\/(\d+.\d+))/.exec(selector);
      i = matches ? parseFloat(matches[1]) + 4 : _ref;
      /** @type {number} */
      tag = parts[2] ? parseFloat(parts[2]) : NaN;
      /** @type {number} */
      timestamp = parts[3] ? parseFloat(parts[3]) : NaN;
      /** @type {number} */
      x3 = parts[4] ? parseFloat(parts[4]) : NaN;
      if (x3) {
        /** @type {(Array.<string>|null)} */
        parts = /(?:Chrome\/(\d+\.\d+))/.exec(selector);
        /** @type {number} */
        x2 = parts && parts[1] ? parseFloat(parts[1]) : NaN;
      } else {
        /** @type {number} */
        x2 = NaN;
      }
    } else {
      /** @type {number} */
      _ref = tag = timestamp = x2 = x3 = NaN;
    }
    if (elem) {
      if (elem[1]) {
        /** @type {(Array.<string>|null)} */
        var match = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(selector);
        /** @type {(boolean|number)} */
        list = match ? parseFloat(match[1].replace("_", ".")) : true;
      } else {
        /** @type {boolean} */
        list = false;
      }
      /** @type {boolean} */
      stack = !!elem[2];
      /** @type {boolean} */
      memory = !!elem[3];
    } else {
      /** @type {boolean} */
      list = stack = memory = false;
    }
  }
  /** @type {boolean} */
  var g = false;
  var _ref;
  var tag;
  var timestamp;
  var x3;
  var x2;
  var i;
  var list;
  var stack;
  var memory;
  var q;
  var r;
  var matched;
  var $target;
  var m;
  var query;
  var ua = {
    /**
     * @return {?}
     */
    ie : function() {
      return parse() || _ref;
    },
    /**
     * @return {?}
     */
    ieCompatibilityMode : function() {
      return parse() || i > _ref;
    },
    /**
     * @return {?}
     */
    ie64 : function() {
      return ua.ie() && r;
    },
    /**
     * @return {?}
     */
    firefox : function() {
      return parse() || tag;
    },
    /**
     * @return {?}
     */
    opera : function() {
      return parse() || timestamp;
    },
    /**
     * @return {?}
     */
    webkit : function() {
      return parse() || x3;
    },
    /**
     * @return {?}
     */
    safari : function() {
      return ua.webkit();
    },
    /**
     * @return {?}
     */
    chrome : function() {
      return parse() || x2;
    },
    /**
     * @return {?}
     */
    windows : function() {
      return parse() || stack;
    },
    /**
     * @return {?}
     */
    osx : function() {
      return parse() || list;
    },
    /**
     * @return {?}
     */
    linux : function() {
      return parse() || memory;
    },
    /**
     * @return {?}
     */
    iphone : function() {
      return parse() || matched;
    },
    /**
     * @return {?}
     */
    mobile : function() {
      return parse() || (matched || ($target || (q || query)));
    },
    /**
     * @return {?}
     */
    nativeApp : function() {
      return parse() || m;
    },
    /**
     * @return {?}
     */
    android : function() {
      return parse() || q;
    },
    /**
     * @return {?}
     */
    ipad : function() {
      return parse() || $target;
    }
  };
  module.exports = ua;
}, null);
__d("legacy:emptyFunction", ["emptyFunction"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.emptyFunction = trim("emptyFunction");
}, 3);
__d("BlueBarController", ["Bootloader", "CSS"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, loginController, exports, node) {
  /**
   * @param {Object} el
   * @return {undefined}
   */
  loginController.init = function(el) {
    if ("getBoundingClientRect" in el) {
      /**
       * @return {undefined}
       */
      var update = function() {
        var selOfs = el.getBoundingClientRect();
        /** @type {number} */
        var l = Math.round(selOfs.top) - document.documentElement.clientTop;
        node.conditionClass(el.firstChild, "fixed_elem", l <= 0);
      };
      update();
      exports.loadModules(["Event"], function(event) {
        event.listen(window, "scroll", update);
      });
    }
  };
}, null);
__d("legacy:arbiter", ["Arbiter"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.Arbiter = trim("Arbiter");
}, 3);
__d("event-form-bubbling", [], function(imports, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData) {
  imports.Event = imports.Event || function() {
  };
  /**
   * @param {string} form
   * @param {Event} walkers
   * @return {?}
   */
  imports.Event.__inlineSubmit = function(form, walkers) {
    var formId = imports.Event.__getHandler && imports.Event.__getHandler(form, "submit");
    return formId ? null : imports.Event.__bubbleSubmit(form, walkers);
  };
  /**
   * @param {HTMLElement} form
   * @param {Event} obj
   * @return {?}
   */
  imports.Event.__bubbleSubmit = function(form, obj) {
    if (document.documentElement.attachEvent) {
      var __bubbleSubmit;
      for (;__bubbleSubmit !== false && (form = form.parentNode);) {
        __bubbleSubmit = form.onsubmit ? form.onsubmit(obj) : imports.Event.__fire && imports.Event.__fire(form, "submit", obj);
      }
      return __bubbleSubmit;
    }
  };
}, 3);
__d("OnloadEvent", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    ONLOAD : "onload/onload",
    ONLOAD_CALLBACK : "onload/onload_callback",
    ONLOAD_DOMCONTENT : "onload/dom_content_ready",
    ONLOAD_DOMCONTENT_CALLBACK : "onload/domcontent_callback",
    ONBEFOREUNLOAD : "onload/beforeunload",
    ONUNLOAD : "onload/unload"
  };
  module.exports = JsDiff;
}, null);
__d("Run", ["Arbiter", "ExecutionEnvironment", "OnloadEvent"], function(el, dataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, m, deepDataAndEvents, lt) {
  /**
   * @param {string} opt_data
   * @return {undefined}
   */
  function notify(opt_data) {
    var s = el.CavalryLogger;
    if (s) {
      s.getInstance().setTimeStamp(opt_data);
    }
  }
  /**
   * @return {?}
   */
  function resolveWith() {
    return!window.loading_page_chrome;
  }
  /**
   * @param {Function} n
   * @return {undefined}
   */
  function _fn(n) {
    var s = el.OnloadHooks;
    if (window.loaded && s) {
      s.runHook(n, "onlateloadhooks");
    } else {
      defer("onloadhooks", n);
    }
  }
  /**
   * @param {Function} data
   * @return {undefined}
   */
  function trigger(data) {
    var rs = el.OnloadHooks;
    if (window.afterloaded && rs) {
      setTimeout(function() {
        rs.runHook(data, "onlateafterloadhooks");
      }, 0);
    } else {
      defer("onafterloadhooks", data);
    }
  }
  /**
   * @param {Function} data
   * @param {(Array|string)} _value
   * @return {undefined}
   */
  function resolve(data, _value) {
    if (_value === void 0) {
      _value = resolveWith();
    }
    if (_value) {
      defer("onbeforeleavehooks", data);
    } else {
      defer("onbeforeunloadhooks", data);
    }
  }
  /**
   * @param {string} func
   * @param {Function} type
   * @return {undefined}
   */
  function delay(func, type) {
    if (!window.onunload) {
      /**
       * @return {undefined}
       */
      window.onunload = function() {
        m.inform(lt.ONUNLOAD, true, event_name);
      };
    }
    defer(func, type);
  }
  /**
   * @param {Function} error
   * @return {undefined}
   */
  function onError(error) {
    delay(delayed, error);
  }
  /**
   * @param {Function} controller
   * @return {undefined}
   */
  function end(controller) {
    delay(trailingCall, controller);
  }
  /**
   * @param {Function} done
   * @return {undefined}
   */
  function setup(done) {
    defer("onleavehooks", done);
  }
  /**
   * @param {string} func
   * @param {Function} fn
   * @return {undefined}
   */
  function defer(func, fn) {
    window[func] = (window[func] || []).concat(fn);
  }
  /**
   * @param {string} value
   * @return {undefined}
   */
  function isA_(value) {
    /** @type {Array} */
    window[value] = [];
  }
  /**
   * @return {undefined}
   */
  function process() {
    m.inform(lt.ONLOAD_DOMCONTENT, true, event_name);
  }
  /**
   * @return {undefined}
   */
  function init() {
    /** @type {HTMLDocument} */
    var doc = document;
    /** @type {Window} */
    var win = window;
    if (doc.addEventListener) {
      /** @type {(Array.<string>|null)} */
      var ea = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
      if (ea && ea[1] < 525) {
        /** @type {number} */
        var poll = setInterval(function() {
          if (/loaded|complete/.test(doc.readyState)) {
            process();
            clearInterval(poll);
          }
        }, 10)
      } else {
        doc.addEventListener("DOMContentLoaded", process, true);
      }
    } else {
      /** @type {string} */
      var ga = "javascript:void(0)";
      if (win.location.protocol == "https:") {
        /** @type {string} */
        ga = "//:";
      }
      doc.write("<script onreadystatechange=\"if (this.readyState=='complete') {" + 'this.parentNode.removeChild(this);_domcontentready();}" ' + 'defer="defer" src="' + ga + '">\x3c/script>');
    }
    /** @type {function (): undefined} */
    var fnOld = win.onload;
    /**
     * @return {undefined}
     */
    win.onload = function() {
      notify("t_layout");
      if (fnOld) {
        fnOld();
      }
      m.inform(lt.ONLOAD, true, event_name);
    };
    /**
     * @return {?}
     */
    win.onbeforeunload = function() {
      var expectedNumberOfNonCommentArgs = {};
      m.inform(lt.ONBEFOREUNLOAD, expectedNumberOfNonCommentArgs, event_name);
      if (!expectedNumberOfNonCommentArgs.warn) {
        m.inform("onload/exit", true);
      }
      return expectedNumberOfNonCommentArgs.warn;
    };
  }
  /** @type {string} */
  var delayed = "onunloadhooks";
  /** @type {string} */
  var trailingCall = "onafterunloadhooks";
  var event_name = m.BEHAVIOR_STATE;
  /** @type {function (): undefined} */
  el._domcontentready = process;
  var __onloadCallback = m.registerCallback(function() {
    notify("t_onload");
    m.inform(lt.ONLOAD_CALLBACK, true, event_name);
  }, [lt.ONLOAD]);
  var __domContentCallback = m.registerCallback(function() {
    notify("t_domcontent");
    var expectedNumberOfNonCommentArgs = {
      timeTriggered : Date.now()
    };
    m.inform(lt.ONLOAD_DOMCONTENT_CALLBACK, expectedNumberOfNonCommentArgs, event_name);
  }, [lt.ONLOAD_DOMCONTENT]);
  if (deepDataAndEvents.canUseDOM) {
    init();
  }
  var JsDiff = {
    /** @type {function (Function): undefined} */
    onLoad : _fn,
    /** @type {function (Function): undefined} */
    onAfterLoad : trigger,
    /** @type {function (Function): undefined} */
    onLeave : setup,
    /** @type {function (Function, (Array|string)): undefined} */
    onBeforeUnload : resolve,
    /** @type {function (Function): undefined} */
    onUnload : onError,
    /** @type {function (Function): undefined} */
    onAfterUnload : end,
    __domContentCallback : __domContentCallback,
    __onloadCallback : __onloadCallback,
    /** @type {function (string): undefined} */
    __removeHook : isA_
  };
  module.exports = JsDiff;
}, null);
__d("legacy:onload", ["Run", "OnloadEvent"], function(e, reduce, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, options) {
  e.OnloadEvent = reduce("OnloadEvent");
  e.onloadRegister_DEPRECATED = options.onLoad;
  /**
   * @return {?}
   */
  e.onloadRegister = function() {
    return options.onLoad.apply(this, arguments);
  };
  e.onafterloadRegister_DEPRECATED = options.onAfterLoad;
  /**
   * @return {?}
   */
  e.onafterloadRegister = function() {
    return options.onAfterLoad.apply(this, arguments);
  };
  e.onleaveRegister = options.onLeave;
  e.onbeforeunloadRegister = options.onBeforeUnload;
  e.onunloadRegister = options.onUnload;
}, 3);
__d("wait_for_load", ["Bootloader", "Run"], function(i18n, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, next_scope, process) {
  /**
   * @param {?} callback
   * @param {Function} cb
   * @return {?}
   */
  function preload(callback, cb) {
    return window.loaded && cb.call(callback);
  }
  /**
   * @param {?} options
   * @param {?} error
   * @param {Function} model
   * @return {?}
   */
  function sync(options, error, model) {
    next_scope.loadComponents.call(next_scope, error, model.bind(options));
    return false;
  }
  /**
   * @param {Element} el
   * @param {Object} x
   * @param {Function} cb
   * @return {?}
   */
  function init(el, x, cb) {
    cb = cb.bind(el, x);
    if (window.loaded) {
      return cb();
    }
    switch((x || event).type) {
      case "load":
      ;
      case "focus":
        process.onAfterLoad(cb);
        return;
      case "click":
        var style = el.style;
        /** @type {(CSSStyleDeclaration|null)} */
        var obj = document.body.style;
        /** @type {string} */
        style.cursor = obj.cursor = "progress";
        process.onAfterLoad(function() {
          /** @type {string} */
          style.cursor = obj.cursor = "";
          if (el.tagName.toLowerCase() == "a") {
            if (false !== cb() && el.href) {
              window.location.href = el.href;
            }
          } else {
            if (el.click) {
              el.click();
            }
          }
        });
        break;
    }
    return false;
  }
  /** @type {function (?, Function): ?} */
  i18n.run_if_loaded = preload;
  /** @type {function (?, ?, Function): ?} */
  i18n.run_with = sync;
  /** @type {function (Element, Object, Function): ?} */
  i18n.wait_for_load = init;
}, 3);
__d("markJSEnabled", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes) {
  /** @type {Element} */
  var html = document.documentElement;
  /** @type {string} */
  html.className = html.className.replace("no_js", "");
}, null);
__d("JSCC", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  /**
   * @param {?} fn
   * @return {?}
   */
  function bind(fn) {
    var result;
    /** @type {boolean} */
    var l = false;
    return function() {
      if (!l) {
        result = fn();
        /** @type {boolean} */
        l = true;
      }
      return result;
    };
  }
  var prevSources = {};
  var prop = {
    /**
     * @param {string} num
     * @return {?}
     */
    get : function(num) {
      if (!prevSources[num]) {
        throw new Error("JSCC entry is missing");
      }
      return prevSources[num]();
    },
    /**
     * @param {Object} el
     * @return {?}
     */
    init : function(el) {
      var i;
      for (i in el) {
        prevSources[i] = bind(el[i]);
      }
      return function expressInit() {
        var i;
        for (i in el) {
          delete prevSources[i];
        }
      };
    }
  };
  module.exports = prop;
}, null);
__d("PageletSet", ["Arbiter"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $) {
  /**
   * @param {Object} a
   * @param {string} b
   * @return {?}
   */
  function is_or_contains(a, b) {
    return a.contains ? a.contains(b) : a.compareDocumentPosition(b) & 16;
  }
  /**
   * @param {string} id
   * @return {undefined}
   */
  function Tile(id) {
    /** @type {string} */
    this.id = id;
    /** @type {null} */
    this._root = null;
    /** @type {Array} */
    this._destructors = [];
    this.addDestructor(function show() {
      $.inform("pagelet/destroy", {
        id : this.id,
        root : this._root
      });
    }.bind(this));
  }
  var cache = {};
  var assert = {
    /**
     * @param {?} name
     * @return {?}
     */
    hasPagelet : function(name) {
      return cache.hasOwnProperty(name);
    },
    /**
     * @param {?} name
     * @return {?}
     */
    getPagelet : function(name) {
      return cache[name];
    },
    /**
     * @param {?} name
     * @return {?}
     */
    getOrCreatePagelet : function(name) {
      if (!assert.hasPagelet(name)) {
        var t = new Tile(name);
        cache[name] = t;
      }
      return assert.getPagelet(name);
    },
    /**
     * @return {?}
     */
    getPageletIDs : function() {
      return Object.keys(cache);
    },
    /**
     * @param {?} k
     * @return {undefined}
     */
    removePagelet : function(k) {
      if (assert.hasPagelet(k)) {
        cache[k].destroy();
        delete cache[k];
      }
    }
  };
  /**
   * @param {HTMLElement} root
   * @return {undefined}
   */
  Tile.prototype.setRoot = function(root) {
    /** @type {HTMLElement} */
    this._root = root;
  };
  /**
   * @return {?}
   */
  Tile.prototype._getDescendantPagelets = function() {
    /** @type {Array} */
    var eventPath = [];
    if (!this._root) {
      return eventPath;
    }
    var codeSegments = assert.getPageletIDs();
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var id = codeSegments[i];
      if (id === this.id) {
        continue;
      }
      var cur = cache[id];
      if (cur._root && is_or_contains(this._root, cur._root)) {
        eventPath.push(cur);
      }
    }
    return eventPath;
  };
  /**
   * @param {Function} callback
   * @return {undefined}
   */
  Tile.prototype.addDestructor = function(callback) {
    this._destructors.push(callback);
  };
  /**
   * @return {undefined}
   */
  Tile.prototype.destroy = function() {
    var resultItems = this._getDescendantPagelets();
    /** @type {number} */
    var i = 0;
    for (;i < resultItems.length;i++) {
      var result = resultItems[i];
      if (assert.hasPagelet(result.id)) {
        assert.removePagelet(result.id);
      }
    }
    /** @type {number} */
    i = 0;
    for (;i < this._destructors.length;i++) {
      this._destructors[i]();
    }
    if (this._root) {
      for (;this._root.firstChild;) {
        this._root.removeChild(this._root.firstChild);
      }
    }
  };
  module.exports = assert;
}, null);
__d("invokeCallbacks", ["ErrorUtils"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, Hash) {
  /**
   * @param {string} arr
   * @param {?} key
   * @return {undefined}
   */
  function unique(arr, key) {
    if (arr) {
      /** @type {number} */
      var second = 0;
      for (;second < arr.length;second++) {
        Hash.applyWithGuard(new Function(arr[second]), key);
      }
    }
  }
  /** @type {function (string, ?): undefined} */
  module.exports = unique;
}, null);
__d("BigPipe", ["Arbiter", "Bootloader", "Env", "ErrorUtils", "JSCC", "OnloadEvent", "PageletSet", "Run", "ServerJS", "TimingSeriesStorage", "$", "copyProperties", "ge", "invokeCallbacks", "ix", "performanceAbsoluteNow"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, module, matcherFunction, arbiter, p, options, clause, loginController, dataAndEvents, body, deepDataAndEvents, Observable, matchIndexes, $, fn, i, isFunction, previous, onComplete) {
  /**
   * @param {string} selector
   * @return {undefined}
   */
  function init(selector) {
    fn(this, {
      arbiter : arbiter,
      rootNodeID : "content",
      lid : 0,
      isAjax : false,
      domContentCallback : deepDataAndEvents.__domContentCallback,
      onloadCallback : deepDataAndEvents.__onloadCallback,
      domContentEvt : dataAndEvents.ONLOAD_DOMCONTENT_CALLBACK,
      onloadEvt : dataAndEvents.ONLOAD_CALLBACK,
      forceFinish : false,
      _phaseDoneCallbacks : [],
      _currentPhase : 0,
      _lastPhase : -1,
      _livePagelets : {},
      _pendingTimingSeries : {}
    });
    fn(this, selector);
    if (this.automatic) {
      this._relevant_instance = init._current_instance;
    } else {
      init._current_instance = this;
    }
    this._serverJS = new Observable;
    arbiter.inform("BigPipe/init", {
      lid : this.lid,
      arbiter : this.arbiter
    }, event_name);
    this.arbiter.registerCallback(this.domContentCallback, ["pagelet_displayed_all"]);
    this._informEventExternal("phase_begin", {
      phase : 0
    });
    this.arbiter.inform("phase_begin_0", true, backoff);
    this.onloadCallback = this.arbiter.registerCallback(this.onloadCallback, ["pagelet_displayed_all"]);
    this.arbiter.registerCallback(this._serverJS.cleanup.bind(this._serverJS), [this.onloadEvt]);
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function parse(data) {
    if (!data || typeof data === "string") {
      return data;
    }
    if (data.container_id) {
      var el = $(data.container_id);
      data = getValue(el) || "";
      el.parentNode.removeChild(el);
      return data;
    }
    return null;
  }
  /**
   * @param {Element} el
   * @return {?}
   */
  function getValue(el) {
    if (!el.firstChild) {
      p.loadModules(["ErrorSignal"], function(dataAndEvents) {
        dataAndEvents.sendErrorSignal("bigpipe", "Pagelet markup container is empty.");
      });
      return null;
    }
    if (el.firstChild.nodeType !== 8) {
      return null;
    }
    var text = el.firstChild.nodeValue;
    text = text.substring(1, text.length - 1);
    return text.replace(/\\([\s\S]|$)/g, "$1");
  }
  /**
   * @param {Node} container
   * @param {?} template
   * @return {undefined}
   */
  function initialize(container, template) {
    /** @type {Element} */
    var div = document.createElement("div");
    /** @type {boolean} */
    var isFinal = toSend < 7;
    if (isFinal) {
      container.appendChild(div);
    }
    div.innerHTML = template;
    /** @type {DocumentFragment} */
    var frag = document.createDocumentFragment();
    for (;div.firstChild;) {
      frag.appendChild(div.firstChild);
    }
    container.appendChild(frag);
    if (isFinal) {
      container.removeChild(div);
    }
  }
  var toSend = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1];
  var backoff = arbiter.BEHAVIOR_STATE;
  var event_name = arbiter.BEHAVIOR_PERSISTENT;
  var done = {
    display_start : "displayStart",
    display : "display",
    jsstart : "jsStart",
    jsdone : "jsDone",
    prearrive : "preArrive",
    preonload : "preOnLoad",
    onload : "onLoad",
    css : "css",
    css_load : "cssLoad",
    arrive : "arrive",
    setup : "setup"
  };
  /** @type {Array} */
  var codeSegments = [];
  /**
   * @param {number} phase
   * @return {undefined}
   */
  init.prototype._beginPhase = function(phase) {
    this._informEventExternal("phase_begin", {
      phase : phase
    });
    this.arbiter.inform("phase_begin_" + phase, true, backoff);
  };
  /**
   * @param {string} item
   * @return {undefined}
   */
  init.prototype._endPhase = function(item) {
    this.arbiter.inform("phase_complete_" + item, true, backoff);
    if (!this.isAjax) {
      codeSegments.push(Date.now());
    }
  };
  /**
   * @param {Object} walkers
   * @return {undefined}
   */
  init.prototype._displayPageletHandler = function(walkers) {
    if (this.displayCallback) {
      this.displayCallback(this._displayPagelet.bind(this, walkers));
    } else {
      this._displayPagelet(walkers);
    }
  };
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  init.prototype._displayPagelet = function(obj) {
    this._informPageletEvent("display_start", obj);
    var data = this._getPagelet(obj);
    var key;
    for (key in obj.content) {
      var template = obj.content[key];
      if (obj.append) {
        key = this._getPageletRootID(obj);
      }
      var node = i(key);
      if (!node) {
        continue;
      }
      if (key === data.id) {
        data.setRoot(node);
      }
      template = parse(template);
      if (template) {
        if (obj.append || toSend < 8) {
          if (!obj.append) {
            for (;node.firstChild;) {
              node.removeChild(node.firstChild);
            }
          }
          initialize(node, template);
        } else {
          node.innerHTML = template;
        }
      }
      var data_referrer = node.getAttribute("data-referrer");
      if (!data_referrer) {
        node.setAttribute("data-referrer", key);
      }
      if (obj.cache_hit && options.pc_debug) {
        /** @type {string} */
        node.style.border = "1px red solid";
      }
    }
    if (obj.jsmods) {
      /** @type {*} */
      var originalEvent = JSON.parse(JSON.stringify(obj.jsmods));
      var event = this._serverJS.handlePartial(originalEvent);
      data.addDestructor(event.cancel.bind(event));
    }
    this._informPageletEvent("display", obj);
    this.arbiter.inform(obj.id + "_displayed", true, backoff);
  };
  /**
   * @return {undefined}
   */
  init.prototype._onPhaseDone = function() {
    if (this._currentPhase === this._ttiPhase) {
      this._informEventExternal("tti_bigpipe", {
        phase : this._ttiPhase
      });
    }
    if (this._currentPhase === this._lastPhase && this._isRelevant()) {
      this.arbiter.inform("pagelet_displayed_all", true, backoff);
    }
    this._currentPhase++;
    if (toSend <= 8) {
      setTimeout(this._beginPhase.bind(this, this._currentPhase), 20);
    } else {
      this._beginPhase(this._currentPhase);
    }
  };
  /**
   * @param {Object} m
   * @return {undefined}
   */
  init.prototype._downloadJsForPagelet = function(m) {
    this._informPageletEvent("jsstart", m);
    p.loadResources(m.js || [], function() {
      this._informPageletEvent("jsdone", m);
      m.requires = m.requires || [];
      if (!this.isAjax || m.phase >= 1) {
        m.requires.push("uipage_onload");
      }
      var taskComplete = function() {
        this._informPageletEvent("preonload", m);
        if (this._isRelevantPagelet(m)) {
          isFunction(m.onload);
        }
        this._informPageletEvent("onload", m);
        this.arbiter.inform("pagelet_onload", true, arbiter.BEHAVIOR_EVENT);
        if (m.provides) {
          this.arbiter.inform(m.provides, true, backoff);
        }
      }.bind(this);
      var task = function() {
        if (this._isRelevantPagelet(m)) {
          isFunction(m.onafterload);
        }
      }.bind(this);
      this.arbiter.registerCallback(taskComplete, m.requires);
      this.arbiter.registerCallback(task, [this.onloadEvt]);
    }.bind(this), false, m.id);
  };
  /**
   * @param {Object} jsonString
   * @return {?}
   */
  init.prototype._getPagelet = function(jsonString) {
    var rvar = this._getPageletRootID(jsonString);
    return body.getPagelet(rvar);
  };
  /**
   * @param {Object} s
   * @return {?}
   */
  init.prototype._getPageletRootID = function(s) {
    var result = s.append;
    if (result) {
      return result === "bigpipe_root" ? this.rootNodeID : result;
    }
    return Object.keys(s.content)[0] || null;
  };
  /**
   * @return {?}
   */
  init.prototype._isRelevant = function() {
    return this == init._current_instance || (this.automatic && this._relevant_instance == init._current_instance || (this.jsNonBlock || (this.forceFinish || init._current_instance && init._current_instance.allowIrrelevantRequests)));
  };
  /**
   * @param {Object} value
   * @return {?}
   */
  init.prototype._isRelevantPagelet = function(value) {
    if (!this._isRelevant()) {
      return false;
    }
    var iterator = this._getPageletRootID(value);
    return!!this._livePagelets[iterator];
  };
  /**
   * @param {string} errmsg
   * @param {Object} options
   * @return {undefined}
   */
  init.prototype._informEventExternal = function(errmsg, options) {
    options = options || {};
    var i = options.id;
    var id = options.event;
    options.ts = onComplete();
    options.lid = this.lid;
    if (console.timeStamp) {
      console.timeStamp(errmsg + " " + JSON.stringify(options));
    }
    if (errmsg === "pagelet_event") {
      if (!(i in this._pendingTimingSeries)) {
        this._pendingTimingSeries[i] = matchIndexes.createSeries(i, "pagelet");
      }
      this._pendingTimingSeries[i].mark(done[id], options.ts);
      if (id === "onload") {
        this._pendingTimingSeries[i].complete();
        delete this._pendingTimingSeries[i];
      }
    }
    this.arbiter.inform(errmsg, options, event_name);
  };
  /**
   * @param {string} name
   * @param {Object} data
   * @return {undefined}
   */
  init.prototype._informPageletEvent = function(name, data) {
    var options = {
      event : name,
      id : data.id
    };
    if (data.phase) {
      options.phase = data.phase;
    }
    if (data.categories) {
      options.categories = data.categories;
    }
    this._informEventExternal("pagelet_event", options);
  };
  /**
   * @return {?}
   */
  init.getCurrentInstance = function() {
    return init._current_instance;
  };
  /**
   * @param {?} j
   * @return {?}
   */
  init.prototype.getPhaseFromTime = function(j) {
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      if (j < codeSegments[i]) {
        return i;
      }
    }
    return 100;
  };
  fn(init.prototype, {
    /**
     * @param {string} term
     * @return {undefined}
     */
    beforePageletArrive : function(term) {
      this._informPageletEvent("prearrive", {
        id : term
      });
    },
    onPageletArrive : clause.guard(function(data) {
      this._informPageletEvent("arrive", data);
      data.content = data.content || {};
      var propName = data.phase;
      this._pendingTimingSeries[data.id].addProperty("phase", propName);
      if (!this._phaseDoneCallbacks[propName]) {
        this._phaseDoneCallbacks[propName] = this.arbiter.registerCallback(this._onPhaseDone.bind(this), ["phase_complete_" + propName]);
      }
      this.arbiter.registerCallback(this._phaseDoneCallbacks[propName], [data.id + "_displayed"]);
      var key = this._getPageletRootID(data);
      var node = body.getOrCreatePagelet(key);
      if (key) {
        this._pendingTimingSeries[data.id].addProperty("rootID", key);
      }
      if (data.the_end) {
        this._lastPhase = propName;
      }
      if (data.tti_phase !== void 0) {
        this._ttiPhase = data.tti_phase;
      }
      if (data.is_second_to_last_phase) {
        this._secondToLastPhase = propName;
      }
      /** @type {boolean} */
      this._livePagelets[node.id] = true;
      node.addDestructor(function() {
        delete this._livePagelets[node.id];
      }.bind(this));
      if (data.jscc_map) {
        /** @type {*} */
        var failuresLink = eval(data.jscc_map);
        var restoreScript = loginController.init(failuresLink);
        node.addDestructor(restoreScript);
      }
      if (data.resource_map) {
        p.setResourceMap(data.resource_map);
      }
      if (data.bootloadable) {
        p.enableBootload(data.bootloadable);
      }
      previous.add(data.ixData);
      this._informPageletEvent("setup", data);
      var assert = new arbiter;
      assert.registerCallback(this._displayPageletHandler.bind(this, data), ["preceding_pagelets_displayed", "display_resources_downloaded"]);
      var mod = data.display_dependency || [];
      var opt_attributes = mod.map(function(dataAndEvents) {
        return dataAndEvents + "_displayed";
      });
      this.arbiter.registerCallback(function() {
        assert.inform("preceding_pagelets_displayed");
      }, opt_attributes);
      this.arbiter.registerCallback(function() {
        this._informPageletEvent("css", data);
        var option = (data.css || []).concat(data.displayJS || []);
        p.loadResources(option, function() {
          this._informPageletEvent("css_load", data);
          assert.inform("display_resources_downloaded");
        }.bind(this), false, data.id);
      }.bind(this), ["phase_begin_" + propName]);
      this.arbiter.registerCallback(this.onloadCallback, ["pagelet_onload"]);
      /** @type {Array} */
      var attributes = [data.id + "_displayed"];
      if (!this.jsNonBlock) {
        attributes.push(this.domContentEvt);
      }
      this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, data), attributes);
      if (data.is_last) {
        this._endPhase(propName);
      }
    }, "BigPipe#onPageletArrive")
  });
  /** @type {function (string): undefined} */
  module.exports = init;
}, null);
__d("legacy:bootloader", ["Bootloader"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.Bootloader = trim("Bootloader");
}, 3);
__d("legacy:constructor-cache", ["JSCC"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.JSCC = trim("JSCC");
}, 3);
__d("goURI", ["URISchemes"], function($window, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, element) {
  /**
   * @param {string} url
   * @param {string} object
   * @param {string} data
   * @return {undefined}
   */
  function send(url, object, data) {
    url = url.toString();
    if (/^([^.:/?#]+):/.test(url) && !element.isAllowed(RegExp.$1)) {
      throw new Error("goURI: URI scheme rejected, URI: " + url);
    }
    if (!object && ($window.PageTransitions && $window.PageTransitions.isInitialized())) {
      $window.PageTransitions.go(url, data);
    } else {
      if (window.location.href == url) {
        window.location.reload();
      } else {
        /** @type {string} */
        window.location.href = url;
      }
    }
  }
  /** @type {function (string, string, string): undefined} */
  module.exports = send;
}, null);
__d("legacy:goURI", ["goURI"], function(el, trim, dataAndEvents, deepDataAndEvents) {
  el.goURI = trim("goURI");
}, 3);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "OnloadEvent", "Run", "ServerJS"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, model, obj, data, aResult, dataAndEvents) {
  var mock = {
    INITIAL_JS_READY : "BOOTLOAD/JSREADY",
    /**
     * @param {Object} req
     * @param {?} threshold
     * @return {undefined}
     */
    loadOnDOMContentReady : function(req, threshold) {
      model.subscribe(data.ONLOAD_DOMCONTENT_CALLBACK, function() {
        /**
         * @return {undefined}
         */
        function nextResource() {
          obj.loadResources(req, function() {
            model.inform(mock.INITIAL_JS_READY, true, model.BEHAVIOR_STATE);
          });
        }
        if (threshold) {
          setTimeout(nextResource, threshold);
        } else {
          nextResource();
        }
      });
    },
    /**
     * @param {Object} promise
     * @return {undefined}
     */
    handleServerJS : function(promise) {
      var that = new dataAndEvents;
      that.handle(promise);
      aResult.onAfterLoad(that.cleanup.bind(that));
    }
  };
  module.exports = mock;
}, null);
__d("legacy:object-core-utils", ["isEmpty", "copyProperties"], function(r, f, dataAndEvents, deepDataAndEvents) {
  r.is_empty = f("isEmpty");
  r.copyProperties = f("copyProperties");
}, 3);
__d("DataStore", ["isEmpty"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, callback) {
  /**
   * @param {(RegExp|string)} a1
   * @return {?}
   */
  function emit(a1) {
    if (typeof a1 == "string") {
      return "str_" + a1;
    } else {
      return "elem_" + (a1.__FB_TOKEN || (a1.__FB_TOKEN = [i++]))[0];
    }
  }
  /**
   * @param {(Node|string)} key
   * @return {?}
   */
  function fn(key) {
    var location = emit(key);
    return items[location] || (items[location] = {});
  }
  var items = {};
  /** @type {number} */
  var i = 1;
  var store = {
    /**
     * @param {string} b
     * @param {number} value
     * @param {Object} key
     * @return {?}
     */
    set : function(b, value, key) {
      if (!b) {
        throw new TypeError("DataStore.set: namespace is required, got " + typeof b);
      }
      var keys = fn(b);
      /** @type {Object} */
      keys[value] = key;
      return b;
    },
    /**
     * @param {Node} elem
     * @param {string} key
     * @param {number} value
     * @return {?}
     */
    get : function(elem, key, value) {
      if (!elem) {
        throw new TypeError("DataStore.get: namespace is required, got " + typeof elem);
      }
      var hash = fn(elem);
      var ret = hash[key];
      if (typeof ret === "undefined" && elem.getAttribute) {
        if (elem.hasAttribute && !elem.hasAttribute("data-" + key)) {
          ret = void 0;
        } else {
          var v = elem.getAttribute("data-" + key);
          ret = null === v ? void 0 : v;
        }
      }
      if (value !== void 0 && ret === void 0) {
        ret = hash[key] = value;
      }
      return ret;
    },
    /**
     * @param {Node} elem
     * @param {string} property
     * @return {?}
     */
    remove : function(elem, property) {
      if (!elem) {
        throw new TypeError("DataStore.remove: namespace is required, got " + typeof elem);
      }
      var instance = fn(elem);
      var value = instance[property];
      delete instance[property];
      if (callback(instance)) {
        store.purge(elem);
      }
      return value;
    },
    /**
     * @param {(Node|string)} key
     * @return {undefined}
     */
    purge : function(key) {
      delete items[emit(key)];
    },
    _storage : items
  };
  module.exports = store;
}, null);
__d("DOMQuery", ["CSS", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "getDocumentScrollElement", "isElementNode", "isNode", "isTextNode"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, Css, contains, map, require, jQuery, dataAndEvents, cb, fn, add) {
  /**
   * @param {HTMLElement} elem
   * @param {?} attr
   * @return {?}
   */
  function hasAttr(elem, attr) {
    return elem.hasAttribute ? elem.hasAttribute(attr) : elem.getAttribute(attr) !== null;
  }
  var $ = {
    /**
     * @param {Node} root
     * @param {string} col
     * @return {?}
     */
    find : function(root, col) {
      var widget = $.scry(root, col);
      return widget[0];
    },
    /**
     * @param {Node} root
     * @param {string} dataName
     * @param {string} col
     * @return {?}
     */
    findPushSafe : function(root, dataName, col) {
      var r = $.scry(root, dataName);
      var index = $.scry(root, col);
      var ret;
      if (r.length === 1 && (index.length === 1 && r[0] === index[0])) {
        ret = r;
      } else {
        ret = r.concat(index);
      }
      return ret[0];
    },
    /**
     * @param {Node} root
     * @param {string} pair
     * @return {?}
     */
    scry : function(root, pair) {
      if (!root || !root.getElementsByTagName) {
        return[];
      }
      var props = pair.split(" ");
      /** @type {Array} */
      var element = [root];
      /** @type {number} */
      var index = 0;
      for (;index < props.length;index++) {
        if (element.length === 0) {
          break;
        }
        if (props[index] === "") {
          continue;
        }
        var prop = props[index];
        var selector = props[index];
        /** @type {Array} */
        var elements = [];
        /** @type {boolean} */
        var environment = false;
        if (prop.charAt(0) == "^") {
          if (index === 0) {
            /** @type {boolean} */
            environment = true;
            prop = prop.slice(1);
          } else {
            return[];
          }
        }
        prop = prop.replace(/\[(?:[^=\]]*=(?:"[^"]*"|'[^']*'))?|[.#]/g, " $&");
        var parts = prop.split(" ");
        var tag = parts[0] || "*";
        /** @type {boolean} */
        var any = tag == "*";
        var da = parts[1] && parts[1].charAt(0) == "#";
        if (da) {
          var child = jQuery(parts[1].slice(1), root, tag);
          if (child && (any || child.tagName.toLowerCase() == tag)) {
            /** @type {number} */
            var i = 0;
            for (;i < element.length;i++) {
              if (environment && $.contains(child, element[i])) {
                /** @type {Array} */
                elements = [child];
                break;
              } else {
                if (document == element[i] || $.contains(element[i], child)) {
                  /** @type {Array} */
                  elements = [child];
                  break;
                }
              }
            }
          }
        } else {
          /** @type {Array} */
          var parents = [];
          /** @type {number} */
          var m = element.length;
          var groups;
          /** @type {(boolean|function (this:Document, string): NodeList)} */
          var ja = !environment && (selector.indexOf("[") < 0 && document.querySelectorAll);
          /** @type {number} */
          var j = 0;
          for (;j < m;j++) {
            if (environment) {
              /** @type {Array} */
              groups = [];
              var p = element[j].parentNode;
              for (;cb(p);) {
                if (any || p.tagName.toLowerCase() == tag) {
                  groups.push(p);
                }
                p = p.parentNode;
              }
            } else {
              if (ja) {
                groups = element[j].querySelectorAll(selector);
              } else {
                groups = element[j].getElementsByTagName(tag);
              }
            }
            var len = groups.length;
            /** @type {number} */
            var idx = 0;
            for (;idx < len;idx++) {
              parents.push(groups[idx]);
            }
          }
          if (!ja) {
            /** @type {number} */
            var ii = 1;
            for (;ii < parts.length;ii++) {
              var part = parts[ii];
              /** @type {boolean} */
              var qa = part.charAt(0) == ".";
              var className = part.substring(1);
              /** @type {number} */
              j = 0;
              for (;j < parents.length;j++) {
                var parent = parents[j];
                if (!parent || parent.nodeType !== 1) {
                  continue;
                }
                if (qa) {
                  if (!Css.hasClass(parent, className)) {
                    delete parents[j];
                  }
                  continue;
                } else {
                  var attr = part.slice(1, part.length - 1);
                  if (attr.indexOf("=") == -1) {
                    if (!hasAttr(parent, attr)) {
                      delete parents[j];
                      continue;
                    }
                  } else {
                    var tokens = attr.split("=");
                    var name = tokens[0];
                    var token = tokens[1];
                    token = token.slice(1, token.length - 1);
                    if (parent.getAttribute(name) != token) {
                      delete parents[j];
                      continue;
                    }
                  }
                }
              }
            }
          }
          /** @type {number} */
          j = 0;
          for (;j < parents.length;j++) {
            if (parents[j]) {
              elements.push(parents[j]);
              if (environment) {
                break;
              }
            }
          }
        }
        /** @type {Array} */
        element = elements;
      }
      return element;
    },
    /**
     * @return {?}
     */
    getSelection : function() {
      /** @type {function (this:Window): (Selection|null)} */
      var sel = window.getSelection;
      /** @type {(Selection|null)} */
      var selection = document.selection;
      if (sel) {
        return sel() + "";
      } else {
        if (selection) {
          return selection.createRange().text;
        }
      }
      return null;
    },
    /**
     * @param {(Node|string)} target
     * @param {Text} child
     * @return {?}
     */
    contains : function(target, child) {
      target = jQuery(target);
      child = jQuery(child);
      if (!(typeof target === "string")) {
        typeof child === "string";
      }
      return contains(target, child);
    },
    /**
     * @return {?}
     */
    getRootElement : function() {
      /** @type {null} */
      var el = null;
      if (window.Quickling && Quickling.isActive()) {
        el = jQuery("content");
      }
      return el || document.body;
    },
    /**
     * @param {?} el
     * @return {?}
     */
    isNode : function(el) {
      return fn(el);
    },
    /**
     * @param {Node} elem
     * @param {Array} a
     * @return {?}
     */
    isNodeOfType : function(elem, a) {
      var resolved = map(a).join("|").toUpperCase().split("|");
      var Block = require(resolved);
      return fn(elem) && elem.nodeName in Block;
    },
    /**
     * @param {?} outErr
     * @return {?}
     */
    isElementNode : function(outErr) {
      return cb(outErr);
    },
    /**
     * @param {?} arg
     * @return {?}
     */
    isTextNode : function(arg) {
      return add(arg);
    },
    /**
     * @param {Element} elem
     * @return {?}
     */
    isInputNode : function(elem) {
      return $.isNodeOfType(elem, ["input", "textarea"]) || elem.contentEditable === "true";
    },
    getDocumentScrollElement : dataAndEvents
  };
  module.exports = $;
}, null);
__d("DOMEvent", ["invariant"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, $, keepData, test) {
  /**
   * @param {Object} e
   * @return {undefined}
   */
  function Event(e) {
    this.event = e || window.event;
    test(typeof this.event.srcElement != "unknown");
    this.target = this.event.target || this.event.srcElement;
  }
  /**
   * @return {?}
   */
  Event.prototype.preventDefault = function() {
    var event = this.event;
    if (event.preventDefault) {
      event.preventDefault();
      if (!("defaultPrevented" in event)) {
        /** @type {boolean} */
        event.defaultPrevented = true;
      }
    } else {
      /** @type {boolean} */
      event.returnValue = false;
    }
    return this;
  };
  /**
   * @return {?}
   */
  Event.prototype.isDefaultPrevented = function() {
    var e = this.event;
    return "defaultPrevented" in e ? e.defaultPrevented : e.returnValue === false;
  };
  /**
   * @return {?}
   */
  Event.prototype.stopPropagation = function() {
    var event = this.event;
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      /** @type {boolean} */
      event.cancelBubble = true;
    }
    return this;
  };
  /**
   * @return {?}
   */
  Event.prototype.kill = function() {
    this.stopPropagation().preventDefault();
    return this;
  };
  /**
   * @param {?} $sanitize
   * @return {?}
   */
  Event.killThenCall = function($sanitize) {
    return function(eventName) {
      (new Event(eventName)).kill();
      return $sanitize();
    };
  };
  /** @type {function (Object): undefined} */
  $.exports = Event;
}, null);
__d("DOMEventListener", ["wrapFunction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, $) {
  var addEvent;
  var off;
  if (window.addEventListener) {
    /**
     * @param {Object} object
     * @param {string} eventName
     * @param {Function} element
     * @return {undefined}
     */
    addEvent = function(object, eventName, element) {
      element.wrapper = $(element, "entry", "DOMEventListener.add " + eventName);
      object.addEventListener(eventName, element.wrapper, false);
    };
    /**
     * @param {?} element
     * @param {string} name
     * @param {Function} handler
     * @return {undefined}
     */
    off = function(element, name, handler) {
      element.removeEventListener(name, handler.wrapper, false);
    };
  } else {
    if (window.attachEvent) {
      /**
       * @param {Object} object
       * @param {string} type
       * @param {Function} element
       * @return {undefined}
       */
      addEvent = function(object, type, element) {
        element.wrapper = $(element, "entry", "DOMEventListener.add " + type);
        object.attachEvent("on" + type, element.wrapper);
      };
      /**
       * @param {Object} element
       * @param {string} event
       * @param {Function} handler
       * @return {undefined}
       */
      off = function(element, event, handler) {
        element.detachEvent("on" + event, handler.wrapper);
      };
    } else {
      /** @type {function (): undefined} */
      off = addEvent = function() {
      };
    }
  }
  var ret = {
    /**
     * @param {Object} element
     * @param {string} eventName
     * @param {Function} handler
     * @return {?}
     */
    add : function(element, eventName, handler) {
      addEvent(element, eventName, handler);
      return{
        /**
         * @return {undefined}
         */
        remove : function() {
          off(element, eventName, handler);
          /** @type {null} */
          element = null;
        }
      };
    },
    /** @type {Function} */
    remove : off
  };
  module.exports = ret;
}, null);
__d("Event", ["Arbiter", "DataStore", "DOMQuery", "DOMEvent", "ErrorUtils", "ExecutionEnvironment", "Parent", "UserAgent_DEPRECATED", "DOMEventListener", "$", "copyProperties", "invariant", "getObjectValues", "event-form-bubbling"], function($, $sanitize, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, a, data_user, dom, Draggable, insert, dataAndEvents, Dom, bowser, adapter, proceed, extend, $timeout, next) {
  /**
   * @param {Event} ev
   * @return {undefined}
   */
  function callback(ev) {
    if (ev.type === "click" || (ev.type === "mouseover" || ev.type === "keydown")) {
      a.inform("Event/stop", {
        event : ev
      });
    }
  }
  /**
   * @param {Object} opt_target
   * @param {Object} type
   * @param {Object} options
   * @return {undefined}
   */
  function Event(opt_target, type, options) {
    /** @type {Object} */
    this.target = opt_target;
    /** @type {Object} */
    this.type = type;
    /** @type {Object} */
    this.data = options;
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function init(obj) {
    if (obj instanceof Event) {
      return obj;
    }
    if (!obj) {
      if (!window.addEventListener && document.createEventObject) {
        obj = window.event ? document.createEventObject(window.event) : {};
      } else {
        obj = {};
      }
    }
    if (!obj._inherits_from_prototype) {
      var k;
      for (k in that.prototype) {
        try {
          obj[k] = that.prototype[k];
        } catch (ha) {
        }
      }
    }
    return obj;
  }
  /**
   * @param {?} initialState
   * @param {?} debugMode
   * @param {?} aValue
   * @param {number} round
   * @param {string} id
   * @return {undefined}
   */
  function Game(initialState, debugMode, aValue, round, id) {
    this._handler = initialState;
    this._handlers = debugMode;
    this._type = aValue;
    /** @type {number} */
    this._priority = round;
    /** @type {string} */
    this._id = id;
  }
  $sanitize("event-form-bubbling");
  var that = $.Event;
  /** @type {string} */
  var camelKey = "Event.listeners";
  if (!that.prototype) {
    that.prototype = {};
  }
  extend(Event.prototype, {
    /**
     * @return {?}
     */
    getData : function() {
      this.data = this.data || {};
      return this.data;
    },
    /**
     * @return {?}
     */
    stop : function() {
      return that.stop(this);
    },
    /**
     * @return {?}
     */
    prevent : function() {
      return that.prevent(this);
    },
    /**
     * @return {?}
     */
    isDefaultPrevented : function() {
      return that.isDefaultPrevented(this);
    },
    /**
     * @return {?}
     */
    kill : function() {
      return that.kill(this);
    },
    /**
     * @return {?}
     */
    getTarget : function() {
      return(new Draggable(this)).target || null;
    }
  });
  extend(that.prototype, {
    _inherits_from_prototype : true,
    /**
     * @return {?}
     */
    getRelatedTarget : function() {
      var context = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
      return context && context.nodeType ? context : null;
    },
    /**
     * @return {?}
     */
    getModifiers : function() {
      var data = {
        control : !!this.ctrlKey,
        shift : !!this.shiftKey,
        alt : !!this.altKey,
        meta : !!this.metaKey
      };
      /** @type {boolean} */
      data.access = bowser.osx() ? data.control : data.alt;
      /** @type {boolean} */
      data.any = data.control || (data.shift || (data.alt || data.meta));
      return data;
    },
    /**
     * @return {?}
     */
    isRightClick : function() {
      if (this.which) {
        return this.which === 3;
      }
      return this.button && this.button === 2;
    },
    /**
     * @return {?}
     */
    isMiddleClick : function() {
      if (this.which) {
        return this.which === 2;
      }
      return this.button && this.button === 4;
    },
    /**
     * @return {?}
     */
    isDefaultRequested : function() {
      return this.getModifiers().any || (this.isMiddleClick() || this.isRightClick());
    }
  });
  extend(that.prototype, Event.prototype);
  extend(that, {
    /**
     * @param {Object} element
     * @param {string} type
     * @param {Function} callback
     * @param {string} key
     * @return {?}
     */
    listen : function(element, type, callback, key) {
      if (!dataAndEvents.canUseDOM) {
        return new Game(callback, id, type, key, i);
      }
      if (typeof element == "string") {
        element = proceed(element);
      }
      if (typeof key == "undefined") {
        key = that.Priority.NORMAL;
      }
      if (typeof type == "object") {
        var data = {};
        var k;
        for (k in type) {
          data[k] = that.listen(element, k, type[k], key);
        }
        return data;
      }
      if (type.match(/^on/i)) {
        throw new TypeError("Bad event name `" + type + "': use `click', not `onclick'.");
      }
      if (element.nodeName == "LABEL" && type == "click") {
        var matched = element.getElementsByTagName("input");
        element = matched.length == 1 ? matched[0] : element;
      } else {
        if (element === window && type === "scroll") {
          var el = dom.getDocumentScrollElement();
          if (el !== document.documentElement && el !== document.body) {
            element = el;
          }
        }
      }
      var id = data_user.get(element, camelKey, {});
      var node = events[type];
      if (node) {
        type = node.base;
        if (node.wrap) {
          callback = node.wrap(callback);
        }
      }
      listener(element, id, type);
      var _handlers = id[type];
      if (!(key in _handlers)) {
        /** @type {Array} */
        _handlers[key] = [];
      }
      var i = _handlers[key].length;
      var game = new Game(callback, id, type, key, i);
      _handlers[key][i] = game;
      _handlers.numHandlers++;
      return game;
    },
    /**
     * @param {Object} ui
     * @return {?}
     */
    stop : function(ui) {
      var msg = (new Draggable(ui)).stopPropagation();
      callback(msg.event);
      return ui;
    },
    /**
     * @param {Object} e
     * @return {?}
     */
    prevent : function(e) {
      (new Draggable(e)).preventDefault();
      return e;
    },
    /**
     * @param {ArrayBuffer} dataAndEvents
     * @return {?}
     */
    isDefaultPrevented : function(dataAndEvents) {
      return(new Draggable(dataAndEvents)).isDefaultPrevented(dataAndEvents);
    },
    /**
     * @param {Object} e
     * @return {?}
     */
    kill : function(e) {
      var msg = (new Draggable(e)).kill();
      callback(msg.event);
      return false;
    },
    /**
     * @param {Object} event
     * @return {?}
     */
    getKeyCode : function(event) {
      event = (new Draggable(event)).event;
      if (!event) {
        return false;
      }
      switch(event.keyCode) {
        case 63232:
          return 38;
        case 63233:
          return 40;
        case 63234:
          return 37;
        case 63235:
          return 39;
        case 63272:
        ;
        case 63273:
        ;
        case 63275:
          return null;
        case 63276:
          return 33;
        case 63277:
          return 34;
      }
      if (event.shiftKey) {
        switch(event.keyCode) {
          case 33:
          ;
          case 34:
          ;
          case 37:
          ;
          case 38:
          ;
          case 39:
          ;
          case 40:
            return null;
        }
      }
      return event.keyCode;
    },
    /**
     * @return {?}
     */
    getPriorities : function() {
      if (!first) {
        var ch = next(that.Priority);
        ch.sort(function(far, near) {
          return far - near;
        });
        first = ch;
      }
      return first;
    },
    /**
     * @param {HTMLElement} e
     * @param {Object} data
     * @param {number} args
     * @return {?}
     */
    fire : function(e, data, args) {
      var event = new Event(e, data, args);
      var beforeRetVal;
      do {
        var f = that.__getHandler(e, data);
        if (f) {
          beforeRetVal = f(event);
        }
        e = e.parentNode;
      } while (e && (beforeRetVal !== false && !event.cancelBubble));
      return beforeRetVal !== false;
    },
    /**
     * @param {Object} form
     * @param {string} el
     * @param {Event} cb
     * @return {?}
     */
    __fire : function(form, el, cb) {
      var elements = that.__getHandler(form, el);
      if (elements) {
        return elements(init(cb));
      }
    },
    /**
     * @param {string} elem
     * @param {string} type
     * @return {?}
     */
    __getHandler : function(elem, type) {
      var data = data_user.get(elem, camelKey);
      if (data && data[type]) {
        return data[type].domHandler;
      }
    },
    /**
     * @param {Object} e
     * @return {?}
     */
    getPosition : function(e) {
      e = (new Draggable(e)).event;
      var b = dom.getDocumentScrollElement();
      var moveX = e.clientX + b.scrollLeft;
      var moveY = e.clientY + b.scrollTop;
      return{
        x : moveX,
        y : moveY
      };
    }
  });
  /** @type {null} */
  var first = null;
  /**
   * @param {Function} callback
   * @return {?}
   */
  var bind = function(callback) {
    return function(e) {
      if (!dom.contains(this, e.getRelatedTarget())) {
        return callback.call(this, e);
      }
    };
  };
  var events;
  if (!window.navigator.msPointerEnabled) {
    events = {
      mouseenter : {
        base : "mouseover",
        /** @type {function (Function): ?} */
        wrap : bind
      },
      mouseleave : {
        base : "mouseout",
        /** @type {function (Function): ?} */
        wrap : bind
      }
    };
  } else {
    events = {
      mousedown : {
        base : "MSPointerDown"
      },
      mousemove : {
        base : "MSPointerMove"
      },
      mouseup : {
        base : "MSPointerUp"
      },
      mouseover : {
        base : "MSPointerOver"
      },
      mouseout : {
        base : "MSPointerOut"
      },
      mouseenter : {
        base : "MSPointerOver",
        /** @type {function (Function): ?} */
        wrap : bind
      },
      mouseleave : {
        base : "MSPointerOut",
        /** @type {function (Function): ?} */
        wrap : bind
      }
    };
  }
  if (bowser.firefox()) {
    /**
     * @param {string} el
     * @param {Event} cb
     * @return {undefined}
     */
    var clear = function(el, cb) {
      cb = init(cb);
      var form = cb.getTarget();
      for (;form;) {
        that.__fire(form, el, cb);
        form = form.parentNode;
      }
    };
    document.documentElement.addEventListener("focus", clear.bind(null, "focusin"), true);
    document.documentElement.addEventListener("blur", clear.bind(null, "focusout"), true);
  }
  /**
   * @param {Object} element
   * @param {Object} value
   * @param {string} type
   * @return {undefined}
   */
  var listener = function(element, value, type) {
    if (type in value) {
      return;
    }
    var listener = fn.bind(element, type);
    value[type] = {
      numHandlers : 0,
      domHandlerRemover : adapter.add(element, type, listener),
      domHandler : listener
    };
    /** @type {string} */
    var methodName = "on" + type;
    if (element[methodName]) {
      var camelKey = element === document.documentElement ? that.Priority._BUBBLE : that.Priority.TRADITIONAL;
      var method = element[methodName];
      /** @type {null} */
      element[methodName] = null;
      that.listen(element, type, method, camelKey);
    }
    if (element.nodeName === "FORM" && type === "submit") {
      that.listen(element, type, that.__bubbleSubmit.bind(null, element), that.Priority._BUBBLE);
    }
  };
  /**
   * @param {string} type
   * @param {Event} event
   * @return {?}
   */
  var fn = function(type, event) {
    event = init(event);
    if (!data_user.get(this, camelKey)) {
      throw new Error("Bad listenHandler context.");
    }
    var map = data_user.get(this, camelKey)[type];
    if (!map) {
      throw new Error("No registered handlers for `" + type + "'.");
    }
    if (type == "click") {
      var completed = Dom.byTag(event.getTarget(), "a");
      if (window.clickRefAction) {
        window.clickRefAction("click", completed, event);
      }
    }
    var ca = that.getPriorities();
    /** @type {number} */
    var n = 0;
    for (;n < ca.length;n++) {
      var c = ca[n];
      if (c in map) {
        var codeSegments = map[c];
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          if (!codeSegments[i]) {
            continue;
          }
          var e = codeSegments[i].fire(this, event);
          if (e === false) {
            return event.kill();
          } else {
            if (event.cancelBubble) {
              event.stop();
            }
          }
        }
      }
    }
    return event.returnValue;
  };
  that.Priority = {
    URGENT : -20,
    TRADITIONAL : -10,
    NORMAL : 0,
    _BUBBLE : 1E3
  };
  extend(Game.prototype, {
    /**
     * @return {undefined}
     */
    remove : function() {
      if (dataAndEvents.canUseDOM) {
        $timeout(this._handlers);
        var config = this._handlers[this._type];
        if (config.numHandlers <= 1) {
          config.domHandlerRemover.remove();
          delete this._handlers[this._type];
        } else {
          delete config[this._priority][this._id];
          config.numHandlers--;
        }
        /** @type {null} */
        this._handlers = null;
      }
    },
    /**
     * @param {Object} target
     * @param {Event} event
     * @return {?}
     */
    fire : function(target, event) {
      if (dataAndEvents.canUseDOM) {
        return insert.applyWithGuard(this._handler, target, [event], function(options) {
          options.event_type = event.type;
          options.dom_element = target.name || target.id;
          /** @type {string} */
          options.category = "eventhandler";
        });
      }
      return true;
    }
  });
  /** @type {function (Object): ?} */
  $.$E = that.$E = init;
  module.exports = that;
}, null);
__d("FocusListener", ["Arbiter", "CSS", "Event", "Parent", "getActiveElement"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, child, $delegate, m, caseSensitive, proceed) {
  /**
   * @param {string} component
   * @param {Element} item
   * @return {undefined}
   */
  function handler(component, item) {
    if (item.getAttribute("data-silentfocuslistener")) {
      return;
    }
    var activeClassName = caseSensitive.byClass(item, "focus_target");
    if (activeClassName) {
      if ("focus" == component || "focusin" == component) {
        element.expandInput(activeClassName);
      } else {
        if (item.value === "") {
          $delegate.removeClass(activeClassName, "child_is_active");
        }
        $delegate.removeClass(activeClassName, "child_is_focused");
      }
    }
  }
  /**
   * @param {(Object|string)} event
   * @return {undefined}
   */
  function fn(event) {
    event = event || window.event;
    handler(event.type, event.target || event.srcElement);
  }
  var element = {
    /**
     * @param {string} element
     * @return {undefined}
     */
    expandInput : function(element) {
      $delegate.addClass(element, "child_is_active");
      $delegate.addClass(element, "child_is_focused");
      $delegate.addClass(element, "child_was_focused");
      child.inform("reflow");
    }
  };
  var value = proceed();
  if (value) {
    handler("focus", value);
  }
  /** @type {Element} */
  var doc = document.documentElement;
  if (doc.addEventListener) {
    doc.addEventListener("focus", fn, true);
    doc.addEventListener("blur", fn, true);
  } else {
    doc.attachEvent("onfocusin", fn);
    doc.attachEvent("onfocusout", fn);
  }
  m.listen(document.documentElement, "submit", function() {
  });
  module.exports = element;
}, null);
__d("clickRefAction", ["Arbiter"], function(style, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, module, textAlt, m) {
  /**
   * @param {(number|string)} format
   * @param {?} data
   * @param {HTMLElement} context
   * @param {Node} node
   * @param {?} type
   * @return {undefined}
   */
  function fn(format, data, context, node, type) {
    /** @type {string} */
    var svg = format + "/" + data;
    /** @type {string} */
    this.ue = svg;
    /** @type {(number|string)} */
    this._ue_ts = format;
    this._ue_count = data;
    /** @type {HTMLElement} */
    this._context = context;
    /** @type {null} */
    this._ns = null;
    /** @type {Node} */
    this._node = node;
    this._type = type;
  }
  /**
   * @param {Object} args
   * @param {Object} data
   * @param {Object} event
   * @param {string} type
   * @param {Object} thisp
   * @return {?}
   */
  function save(args, data, event, type, thisp) {
    /** @type {number} */
    var level = Date.now();
    var eventType = event && event.type;
    thisp = thisp || {};
    if (!data && event) {
      data = event.getTarget();
    }
    /** @type {number} */
    var rlen = 50;
    if (data && type != "FORCE") {
      /** @type {number} */
      var i = docs.length - 1;
      for (;i >= 0 && level - docs[i]._ue_ts < rlen;--i) {
        if (docs[i]._node == data && docs[i]._type == eventType) {
          return docs[i];
        }
      }
    }
    var record = new fn(level, msg, args, data, eventType);
    docs.push(record);
    for (;docs.length > 10;) {
      docs.shift();
    }
    m.inform("ClickRefAction/new", {
      cfa : record,
      node : data,
      mode : type,
      event : event,
      extra_data : thisp
    }, m.BEHAVIOR_PERSISTENT);
    msg++;
    return record;
  }
  /**
   * @param {Blob} dataAndEvents
   * @return {?}
   */
  fn.prototype.set_namespace = function(dataAndEvents) {
    /** @type {Blob} */
    this._ns = dataAndEvents;
    return this;
  };
  /**
   * @param {string} dataAndEvents
   * @return {?}
   */
  fn.prototype.coalesce_namespace = function(dataAndEvents) {
    if (this._ns === null) {
      /** @type {string} */
      this._ns = dataAndEvents;
    }
    return this;
  };
  /**
   * @return {?}
   */
  fn.prototype.add_event = function() {
    return this;
  };
  /** @type {number} */
  var msg = 0;
  /** @type {Array} */
  var docs = [];
  /** @type {function (Object, Object, Object, string, Object): ?} */
  module.exports = style.clickRefAction = save;
}, null);
__d("trackReferrer", ["Parent"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, caseSensitive) {
  /**
   * @param {Node} item
   * @param {string} value
   * @return {?}
   */
  function set(item, value) {
    item = caseSensitive.byAttribute(item, "data-referrer");
    if (item) {
      /** @type {string} */
      var endpoint = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(value)[1] || "";
      if (!endpoint) {
        return;
      }
      /** @type {string} */
      var encodedValue = endpoint + "|" + item.getAttribute("data-referrer");
      /** @type {Date} */
      var expiryDate = new Date;
      expiryDate.setTime(Date.now() + 1E3);
      /** @type {string} */
      document.cookie = "x-src=" + encodeURIComponent(encodedValue) + "; " + "expires=" + expiryDate.toGMTString() + ";path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, "$1");
    }
    return item;
  }
  /** @type {function (Node, string): ?} */
  module.exports = set;
}, null);
__d("Primer", ["Bootloader", "CSS", "ErrorUtils", "Parent", "clickRefAction", "trackReferrer"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, exports, test, clause, utils, callback, Application) {
  /**
   * @param {Element} input
   * @param {string} key
   * @return {?}
   */
  function add(input, key) {
    input = utils.byAttribute(input, key);
    if (!input) {
      return;
    }
    do {
      var json = input.getAttribute(key);
      JSON.parse(json).forEach(function(tuple) {
        var result = input;
        exports.loadModules.call(exports, [tuple[0]], function(deferred) {
          deferred[tuple[1]](result);
        });
      });
    } while (input = utils.byAttribute(input.parentNode, key));
    return false;
  }
  /** @type {null} */
  var code = null;
  /** @type {RegExp} */
  var typePattern = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
  /** @type {Element} */
  var elem = document.documentElement;
  elem.onclick = clause.guard(function(e) {
    e = e || window.event;
    code = e.target || e.srcElement;
    var config = utils.byTag(code, "A");
    if (!config) {
      return add(code, "data-onclick");
    }
    var to = config.getAttribute("ajaxify");
    var from = config.href;
    var should = to || from;
    if (should) {
      callback("a", config, e).coalesce_namespace("primer");
    }
    if (to && (from && !/#$/.test(from))) {
      var program = e.which && e.which === 2;
      var inverse = e.altKey || (e.ctrlKey || (e.metaKey || e.shiftKey));
      if (program || inverse) {
        return;
      }
    }
    var num = add(code, "data-onclick");
    Application(config, should);
    var options = config.rel && config.rel.match(typePattern);
    options = options && options[0];
    switch(options) {
      case "dialog":
      ;
      case "dialog-post":
        exports.loadModules(["AsyncDialog"], function(exports) {
          exports.bootstrap(should, config, options);
        });
        break;
      case "async":
      ;
      case "async-post":
        exports.loadModules(["AsyncRequest"], function(exports) {
          exports.bootstrap(should, config);
        });
        break;
      case "theater":
        exports.loadModules(["PhotoSnowlift"], function(exports) {
          exports.bootstrap(should, config);
        });
        break;
      case "toggle":
        test.toggleClass(config.parentNode, "openToggler");
        exports.loadModules(["Toggler"], function(exports) {
          exports.bootstrap(config);
        });
        break;
      default:
        return num;
    }
    return false;
  }, "Primer click");
  elem.onsubmit = clause.guard(function(e) {
    e = e || window.event;
    var el = e.target || e.srcElement;
    if (el && (el.nodeName == "FORM" && el.getAttribute("rel") == "async")) {
      callback("f", el, e).coalesce_namespace("primer");
      var input = code;
      exports.loadModules(["Form"], function(opts) {
        opts.bootstrap(el, input);
      });
      return false;
    }
  }, "Primer submit");
  /** @type {null} */
  var item = null;
  /**
   * @param {string} token
   * @param {(Object|string)} event
   * @return {undefined}
   */
  var handler = function(token, event) {
    event = event || window.event;
    item = event.target || event.srcElement;
    add(item, "data-on" + token);
    var template = utils.byAttribute(item, "data-hover");
    if (!template) {
      return;
    }
    switch(template.getAttribute("data-hover")) {
      case "tooltip":
        exports.loadModules(["Tooltip"], function(self) {
          self.process(template, item);
        });
        break;
    }
  };
  elem.onmouseover = clause.guard(handler.bind(null, "mouseover"), "Primer mouseover");
  var handle = clause.guard(handler.bind(null, "focus"), "Primer focus");
  if (elem.addEventListener) {
    elem.addEventListener("focus", handle, true);
  } else {
    elem.attachEvent("onfocusin", handle);
  }
}, null);
__d("URLFragmentPrelude", ["ScriptPath", "URLFragmentPreludeConfig"], function(ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, deepDataAndEvents, dataAndEvents) {
  /** @type {RegExp} */
  var r20 = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
  /** @type {string} */
  var buf = "";
  /** @type {RegExp} */
  var ru = /^[^\/\\#!\.\?\*\&\^=]+$/;
  window.location.href.replace(r20, function(ignoreMethodDoesntExist, type, charset, requestUrl) {
    var key;
    var id;
    var ch;
    var s;
    /** @type {string} */
    key = id = type + (charset ? "?" + charset : "");
    if (requestUrl) {
      if (dataAndEvents.incorporateQuicklingFragment) {
        var qs = requestUrl.replace(/^(!|%21)/, "");
        ch = qs.charAt(0);
        if (ch == "/" || ch == "\\") {
          key = qs.replace(/^[\\\/]+/, "/");
        }
      }
      if (dataAndEvents.hashtagRedirect) {
        if (id == key) {
          var errors = requestUrl.match(ru);
          if (errors && (!charset && type == "/")) {
            /** @type {string} */
            key = "/hashtag/" + requestUrl;
          }
        }
      }
    }
    if (key != id) {
      s = deepDataAndEvents.getScriptPath();
      if (s) {
        /** @type {string} */
        document.cookie = "rdir=" + s + "; path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, "$1");
      }
      window.location.replace(buf + key);
    }
  });
}, null);
__d("SidebarPrelude", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var JsDiff = {
    /**
     * @param {number} mobileWidth
     * @param {(number|string)} dataAndEvents
     * @return {undefined}
     */
    addSidebarMode : function(mobileWidth, dataAndEvents) {
      /** @type {Element} */
      var doc = document.documentElement;
      if (doc.clientWidth > dataAndEvents) {
        /** @type {string} */
        doc.className = doc.className + " sidebarMode";
        if (doc.clientWidth <= mobileWidth) {
          /** @type {string} */
          doc.className = doc.className + " miniSidebar";
        }
      }
    }
  };
  module.exports = JsDiff;
}, null);
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, exports, selector) {
  /**
   * @param {Object} e
   * @return {?}
   */
  document.documentElement.onkeydown = function(e) {
    e = e || window.event;
    var elem = e.target || e.srcElement;
    var k = e.keyCode == 13 && (!e.altKey && (!e.ctrlKey && (!e.metaKey && (!e.shiftKey && selector.hasClass(elem, "enter_submit")))));
    if (k) {
      exports.loadModules(["DOM", "Input", "trackReferrer", "Form"], function(acc, dust, normalize, a) {
        if (!dust.isEmpty(elem)) {
          var node = elem.form;
          var $button = acc.scry(node, ".enter_submit_target")[0] || acc.scry(node, '[type="submit"]')[0];
          if ($button) {
            var parentName = a.getAttribute(node, "ajaxify") || a.getAttribute(node, "action");
            if (parentName) {
              normalize(node, parentName);
            }
            $button.click();
          }
        }
      });
      return false;
    }
  };
}, null);
__d("CommentPrelude", ["Arbiter", "CSS", "Parent", "clickRefAction"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, jq, element, Dom, indexOf) {
  /**
   * @param {Node} target
   * @param {boolean} e
   * @return {?}
   */
  function click(target, e) {
    indexOf("ufi", target, null, "FORCE");
    return select(target, e);
  }
  /**
   * @param {Node} selector
   * @param {boolean} event
   * @return {?}
   */
  function select(selector, event) {
    var elem = Dom.byTag(selector, "form");
    fn(elem);
    var select = element.removeClass.bind(null, elem, "hidden_add_comment");
    if (window.ScrollAwareDOM) {
      window.ScrollAwareDOM.monitor(elem, select);
    } else {
      select();
    }
    if (event !== false) {
      var el = elem.add_comment_text_text || elem.add_comment_text;
      var i = el.length;
      if (i) {
        if (!Dom.byClass(el[i - 1], "UFIReplyList")) {
          el = el[i - 1];
        } else {
          if (!Dom.byClass(el[0], "UFIReplyList")) {
            el = el[0];
          } else {
            /** @type {null} */
            el = null;
          }
        }
      } else {
        var activeClassName = Dom.byClass(el, "uiTypeahead");
        if (activeClassName) {
          element.addClass(activeClassName, "UFIInputContainerGlow");
          setTimeout(function() {
            element.removeClass(activeClassName, "UFIInputContainerGlow");
          }, 2E3);
        }
        el.focus();
      }
      if (el) {
        el.focus();
        jq.inform("comment/focus", {
          element : el
        });
      }
    }
    return false;
  }
  /**
   * @param {?} name
   * @return {undefined}
   */
  function fn(name) {
    var helper = element.removeClass.bind(null, name, "collapsed_comments");
    if (window.ScrollAwareDOM) {
      window.ScrollAwareDOM.monitor(name, helper);
    } else {
      helper();
    }
  }
  var JsDiff = {
    /** @type {function (Node, boolean): ?} */
    click : click,
    /** @type {function (Node, boolean): ?} */
    expand : select,
    /** @type {function (?): undefined} */
    uncollapse : fn
  };
  module.exports = JsDiff;
}, null);
__d("legacy:ufi-comment-prelude-js", ["CommentPrelude"], function(options, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, node) {
  options.fc_click = node.click;
  options.fc_expand = node.expand;
}, 3);
__d("ScriptMonitor", [], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {
  var observer;
  /** @type {Array} */
  var context = [];
  var theMutationObserver = window.MutationObserver || (window.WebKitMutationObserver || window.MozMutationObserver);
  module.exports = {
    /**
     * @return {undefined}
     */
    activate : function() {
      if (!theMutationObserver) {
        return;
      }
      /** @type {MutationObserver} */
      observer = new theMutationObserver(function(codeSegments) {
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          /** @type {(MutationRecord|null)} */
          var e = codeSegments[i];
          if (e.type == "childList") {
            /** @type {number} */
            var n = 0;
            for (;n < e.addedNodes.length;n++) {
              var element = e.addedNodes[n];
              if ((element.tagName == "SCRIPT" || element.tagName == "IFRAME") && element.src) {
                context.push(element.src);
              }
            }
          } else {
            if (e.type == "attributes" && (e.attributeName == "src" && (e.target.tagName == "SCRIPT" || e.target.tagName == "IFRAME"))) {
              context.push(e.target.src);
            }
          }
        }
      });
      observer.observe(document, {
        attributes : true,
        childList : true,
        subtree : true
      });
    },
    /**
     * @return {?}
     */
    stop : function() {
      if (observer) {
        observer.disconnect();
      }
      return context;
    }
  };
}, null);
__d("Cookie", ["CookieCore", "Env", "copyProperties"], function(deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, module, opt_attributes, test, dataAndEvents, assertEqual) {
  /**
   * @param {string} elem
   * @param {number} data
   * @param {Object} key
   * @param {string} deepDataAndEvents
   * @param {boolean} opt_domain
   * @return {undefined}
   */
  function dataAttr(elem, data, key, deepDataAndEvents, opt_domain) {
    if (dataAndEvents.no_cookies && elem != "tpa") {
      return;
    }
    test.set(elem, data, key, deepDataAndEvents, opt_domain);
  }
  var text = assertEqual({}, test);
  /** @type {function (string, number, Object, string, boolean): undefined} */
  text.set = dataAttr;
  module.exports = text;
}, null);
__d("SyntaxErrorMonitor", ["Cookie", "ErrorUtils"], function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, data_user, mm) {
  /**
   * @param {(Error|string)} e
   * @return {?}
   */
  function complete(e) {
    return e.name == "SyntaxError" || /syntaxerror/i.test(e.message);
  }
  /**
   * @param {(Error|string)} success
   * @return {undefined}
   */
  function f(success) {
    if (complete(success)) {
      var hasBody = data_user.get(elem);
      /** @type {number} */
      var udataCur = Math.floor((Date.now() - alignStroke) / resolution);
      if (!hasBody || udataCur - hasBody >= activeElement.bump_freq_day) {
        data_user.set(elem, udataCur, activeElement.cookie_ttl_sec * 1E3);
      }
    }
  }
  /** @type {string} */
  var elem = "js_ver";
  /** @type {number} */
  var resolution = 864E5;
  /** @type {number} */
  var alignStroke = 1262304E6;
  /** @type {null} */
  var activeElement = null;
  var Users = {
    /**
     * @param {?} el
     * @return {undefined}
     */
    init : function(el) {
      activeElement = el;
      mm.addListener(f);
    }
  };
  module.exports = Users;
}, null);
