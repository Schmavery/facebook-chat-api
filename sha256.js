function onComplete(text) {
  /** @type {string} */
  var result = "";
  var c;
  var numChars;
  /** @type {number} */
  var index = 0;
  for (;index < text.length;index++) {
    c = text.charCodeAt(index);
    numChars = index + 1 < text.length ? text.charCodeAt(index + 1) : 0;
    if (55296 <= c && (c <= 56319 && (56320 <= numChars && numChars <= 57343))) {
      /** @type {number} */
      c = 65536 + ((c & 1023) << 10) + (numChars & 1023);
      index++;
    }
    if (c <= 127) {
      result += String.fromCharCode(c);
    } else {
      if (c <= 2047) {
        result += String.fromCharCode(192 | c >>> 6 & 31, 128 | c & 63);
      } else {
        if (c <= 65535) {
          result += String.fromCharCode(224 | c >>> 12 & 15, 128 | c >>> 6 & 63, 128 | c & 63);
        } else {
          if (c <= 2097151) {
            result += String.fromCharCode(240 | c >>> 18 & 7, 128 | c >>> 12 & 63, 128 | c >>> 6 & 63, 128 | c & 63);
          }
        }
      }
    }
  }
  return result;
}

// __d("sha256", ["str2rstr"], function(deepDataAndEvents, dataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData, onComplete) {
/**
 * @param {number} opt_attributes
 * @param {number} dataAndEvents
 * @return {?}
 */
function a(opt_attributes, dataAndEvents) {
  return dataAndEvents >>> opt_attributes | dataAndEvents << 32 - opt_attributes;
}
/**
 * @param {number} e
 * @param {number} f
 * @param {number} g
 * @return {?}
 */
function fn(e, f, g) {
  return e & f ^ ~e & g;
}
/**
 * @param {?} a
 * @param {?} b
 * @param {?} c
 * @return {?}
 */
function extend(a, b, c) {
  return a & b ^ a & c ^ b & c;
}
/**
 * @param {number} dataAndEvents
 * @return {?}
 */
function clone(dataAndEvents) {
  return a(2, dataAndEvents) ^ a(13, dataAndEvents) ^ a(22, dataAndEvents);
}
/**
 * @param {number} node
 * @return {?}
 */
function format(node) {
  return a(6, node) ^ a(11, node) ^ a(25, node);
}
/**
 * @param {number} locals
 * @return {?}
 */
function activate(locals) {
  return a(7, locals) ^ a(18, locals) ^ locals >>> 3;
}
/**
 * @param {number} dataAndEvents
 * @return {?}
 */
function cloneNode(dataAndEvents) {
  return a(17, dataAndEvents) ^ a(19, dataAndEvents) ^ dataAndEvents >>> 10;
}
/**
 * @param {Array} xs
 * @param {number} step
 * @return {?}
 */
function next(xs, step) {
  return xs[step & 15] += cloneNode(xs[step + 14 & 15]) + xs[step + 9 & 15] + activate(xs[step + 1 & 15]);
}
/**
 * @param {number} var_args
 * @param {number} keepData
 * @return {?}
 */
function remove(var_args, keepData) {
  /** @type {number} */
  var lsw = (var_args & 65535) + (keepData & 65535);
  /** @type {number} */
  var msw = (var_args >> 16) + (keepData >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
/**
 * @return {undefined}
 */
function copyObject() {
  /** @type {number} */
  other[0] = other[1] = 0;
  /** @type {number} */
  arr[0] = 1779033703;
  /** @type {number} */
  arr[1] = 3144134277;
  /** @type {number} */
  arr[2] = 1013904242;
  /** @type {number} */
  arr[3] = 2773480762;
  /** @type {number} */
  arr[4] = 1359893119;
  /** @type {number} */
  arr[5] = 2600822924;
  /** @type {number} */
  arr[6] = 528734635;
  /** @type {number} */
  arr[7] = 1541459225;
}
/**
 * @return {undefined}
 */
function render() {
  var node;
  var oldconfig;
  var c;
  var current;
  var val;
  var x;
  var last;
  var value;
  var name;
  var type;
  node = arr[0];
  oldconfig = arr[1];
  c = arr[2];
  current = arr[3];
  val = arr[4];
  x = arr[5];
  last = arr[6];
  value = arr[7];
  /** @type {number} */
  var _i = 0;
  for (;_i < 16;_i++) {
    /** @type {number} */
    xs[_i] = prevSources[(_i << 2) + 3] | prevSources[(_i << 2) + 2] << 8 | prevSources[(_i << 2) + 1] << 16 | prevSources[_i << 2] << 24;
  }
  /** @type {number} */
  var i = 0;
  for (;i < 64;i++) {
    name = value + format(val) + fn(val, x, last) + dataBuffer[i];
    if (i < 16) {
      name += xs[i];
    } else {
      name += next(xs, i);
    }
    type = clone(node) + extend(node, oldconfig, c);
    value = last;
    last = x;
    x = val;
    val = remove(current, name);
    current = c;
    c = oldconfig;
    oldconfig = node;
    node = remove(name, type);
  }
  arr[0] += node;
  arr[1] += oldconfig;
  arr[2] += c;
  arr[3] += current;
  arr[4] += val;
  arr[5] += x;
  arr[6] += last;
  arr[7] += value;
}
/**
 * @param {string} str
 * @param {number} total
 * @return {undefined}
 */
function done(str, total) {
  var leftInterval;
  var fromIndex;
  /** @type {number} */
  var codeStart = 0;
  /** @type {number} */
  fromIndex = other[0] >> 3 & 63;
  /** @type {number} */
  var padLength = total & 63;
  if ((other[0] += total << 3) < total << 3) {
    other[1]++;
  }
  other[1] += total >> 29;
  /** @type {number} */
  leftInterval = 0;
  for (;leftInterval + 63 < total;leftInterval += 64) {
    /** @type {number} */
    var i = fromIndex;
    for (;i < 64;i++) {
      prevSources[i] = str.charCodeAt(codeStart++);
    }
    render();
    /** @type {number} */
    fromIndex = 0;
  }
  /** @type {number} */
  i = 0;
  for (;i < padLength;i++) {
    prevSources[i] = str.charCodeAt(codeStart++);
  }
}
/**
 * @return {undefined}
 */
function animate() {
  /** @type {number} */
  var fromIndex = other[0] >> 3 & 63;
  /** @type {number} */
  prevSources[fromIndex++] = 128;
  if (fromIndex <= 56) {
    /** @type {number} */
    var i = fromIndex;
    for (;i < 56;i++) {
      /** @type {number} */
      prevSources[i] = 0;
    }
  } else {
    /** @type {number} */
    i = fromIndex;
    for (;i < 64;i++) {
      /** @type {number} */
      prevSources[i] = 0;
    }
    render();
    /** @type {number} */
    i = 0;
    for (;i < 56;i++) {
      /** @type {number} */
      prevSources[i] = 0;
    }
  }
  /** @type {number} */
  prevSources[56] = other[1] >>> 24 & 255;
  /** @type {number} */
  prevSources[57] = other[1] >>> 16 & 255;
  /** @type {number} */
  prevSources[58] = other[1] >>> 8 & 255;
  /** @type {number} */
  prevSources[59] = other[1] & 255;
  /** @type {number} */
  prevSources[60] = other[0] >>> 24 & 255;
  /** @type {number} */
  prevSources[61] = other[0] >>> 16 & 255;
  /** @type {number} */
  prevSources[62] = other[0] >>> 8 & 255;
  /** @type {number} */
  prevSources[63] = other[0] & 255;
  render();
}
/**
 * @return {?}
 */
function map() {
  /** @type {number} */
  var resLength = 0;
  /** @type {Array} */
  var res = new Array(32);
  /** @type {number} */
  var ct = 0;
  for (;ct < 8;ct++) {
    /** @type {number} */
    res[resLength++] = arr[ct] >>> 24 & 255;
    /** @type {number} */
    res[resLength++] = arr[ct] >>> 16 & 255;
    /** @type {number} */
    res[resLength++] = arr[ct] >>> 8 & 255;
    /** @type {number} */
    res[resLength++] = arr[ct] & 255;
  }
  return res;
}
/**
 * @return {?}
 */
function mixin() {
  /** @type {String} */
  var obj = new String;
  /** @type {number} */
  var i = 0;
  for (;i < 8;i++) {
    /** @type {number} */
    var bits = 28;
    for (;bits >= 0;bits -= 4) {
      obj += charsetPart.charAt(arr[i] >>> bits & 15);
    }
  }
  return obj;
}
/**
 * @param {Array} deepDataAndEvents
 * @return {undefined}
 */
function read(deepDataAndEvents) {
  /** @type {number} */
  var ga = 0;
  /** @type {number} */
  var i = 0;
  for (;i < 8;i++) {
    /** @type {number} */
    var bits = 28;
    for (;bits >= 0;bits -= 4) {
      /** @type {number} */
      deepDataAndEvents[ga++] = charsetPart.charCodeAt(arr[i] >>> bits & 15);
    }
  }
}
/**
 * @param {string} req
 * @param {Array} deepDataAndEvents
 * @return {?}
 */
function copy(req, deepDataAndEvents) {
  copyObject();
  done(req, req.length);
  animate();
  if (deepDataAndEvents) {
    read(deepDataAndEvents);
  } else {
    return mixin();
  }
}
/**
 * @param {?} options
 * @param {?} opt_attributes
 * @param {Array} deepDataAndEvents
 * @return {?}
 */
function play(options, opt_attributes, deepDataAndEvents) {
  if (options === null || options === void 0) {
    return null;
  }
  opt_attributes = typeof opt_attributes == "undefined" ? true : opt_attributes;
  if (opt_attributes) {
    options = onComplete(options);
  }
  return copy(options, deepDataAndEvents);
}
// if (dataAndEvents.__markCompiled) {
//   dataAndEvents.__markCompiled();
// }
/** @type {Array} */
var dataBuffer = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921,
2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
/** @type {Array} */
var arr = new Array(8);
/** @type {Array} */
var other = new Array(2);
/** @type {Array} */
var prevSources = new Array(64);
/** @type {Array} */
var xs = new Array(16);
/** @type {string} */
var charsetPart = "0123456789abcdef";
/** @type {function (?, ?, Array): ?} */
module.exports = play;
// })