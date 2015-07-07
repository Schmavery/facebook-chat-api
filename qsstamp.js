var Int64 = require("./Int64");
var sha256 = require("./sha256");

function solveAndUpdateForm(pointer, t, walkers, next_callback, subKey, key, seq) {
  return solveAndEncode(pointer, t, walkers, next_callback, subKey, seq);
}

function solveAndEncode(point, t, obj, callback, key, action) {
  /** @type {string} */
  var i = JSON.stringify([solve(point, t, obj, callback, key), action]);
  return new Buffer(i).toString('base64');
}

function solve(n, t, x, callback, key) {
  /** @type {Array} */
  var a = [];
  var paths = t;
  /** @type {number} */
  var j = 0;
  for (;j < n;j++) {
    a.push(solveOneIteration(paths, x, callback, key));
    paths = hashList(a[j]);
  }
  return a;
}

function path(key, keys, path, obj) {
  /** @type {number} */
  var value = 0;
  /** @type {number} */
  value = 0;
  for (;key;key = path[key]) {
    if (++value >= obj) {
      for (;value-- && keys[value] != key;) {
      }
      if (value < 0) {
        throw "Maximum path length was exceeded";
      } else {
        throw "Illegal cycle has occured";
      }
    }
    /** @type {(number|string)} */
    keys[value] = key;
  }
  return value;
}

function recoverSolution(clone, position, activeXObj, layer, map, cb_, value) {
  /**
   * @return {undefined}
   */
  var dialog = function() {
  };
  /**
   * @param {Array} v2
   * @return {undefined}
   */
  dialog.prototype.add = function(v2) {
    /** @type {boolean} */
    this[v2] = true;
  };
  /**
   * @param {Array} method
   * @return {undefined}
   */
  dialog.prototype.remove = function(method) {
    delete this[method];
  };
  /** @type {Array} */
  var res = [];
  var self = new dialog;
  self.add([activeXObj[0], layer[0]]);
  for (;clone--;) {
    self.add([activeXObj[clone + 1 & ~1], activeXObj[clone | 1]]);
  }
  for (;position--;) {
    self.add([layer[position | 1], layer[position + 1 & ~1]]);
  }
  /** @type {number} */
  var resLength = 0;
  /** @type {number} */
  var node = 0;
  for (;node < value;node++) {
    /** @type {Array} */
    var i = [1 + map.sipNode(node, 0), 1 + map.getHalfSize() + map.sipNode(node, 1)];
    if (i in self) {
      /** @type {number} */
      res[resLength++] = node;
      self.remove(i);
    }
  }
  return res;
}

function solveOneIteration(name, v00, cb, keepData) {
  /** @type {number} */
  var suiteView = 8192;
  var map = new Translation(name, v00);
  /** @type {number} */
  var udataCur = keepData * map.getSize() / 100;
  /** @type {Array} */
  var result = [];
  /** @type {Array} */
  var obj = [];
  /** @type {Array} */
  var keys = [];
  /** @type {number} */
  var node = 0;
  for (;node < udataCur;node++) {
    var next = map.sipEdge(node);
    var value = next[0];
    var key = next[1];
    value += 1;
    key += 1 + map.getHalfSize();
    var val = result[value];
    var p = result[key];
    if (val == key || p == value) {
      continue;
    }
    obj[0] = value;
    keys[0] = key;
    var i = path(val, obj, result, suiteView);
    var j = path(p, keys, result, suiteView);
    if (obj[i] == keys[j]) {
      /** @type {number} */
      var a = Math.min(i, j);
      i -= a;
      j -= a;
      for (;obj[i] != keys[j];i++, j++) {
      }
      var cur = i + j + 1;
      if (cur == cb) {
        return recoverSolution(i, j, obj, keys, map, cb, udataCur);
      }
      continue;
    }
    if (i < j) {
      for (;i--;) {
        result[obj[i + 1]] = obj[i];
      }
      result[value] = key;
    } else {
      for (;j--;) {
        result[keys[j + 1]] = keys[j];
      }
      result[key] = value;
    }
  }
  return[];
}
function hashList(flags) {
  var failuresLink = flags.join("-");
  return sha256(failuresLink);
}

function Translation(data, opt_renderer) {
  /** @type {number} */
  this.$QuickSandHeader0 = 1 << opt_renderer;
  /** @type {number} */
  this.$QuickSandHeader1 = this.$QuickSandHeader0 / 2;
  this.$QuickSandHeader2 = Int64.fromInt(this.$QuickSandHeader1 - 1);
  /** @type {Array} */
  this.$QuickSandHeader3 = [];
  /** @type {number} */
  this.$QuickSandHeader4 = 0;
  /** @type {number} */
  this.$QuickSandHeader5 = 0;
  /** @type {number} */
  this.$QuickSandHeader6 = 0;
  /** @type {number} */
  this.$QuickSandHeader7 = 0;
  var index = sha256(data);
  var value = this.$QuickSandHeader8(this.$QuickSandHeader9(index));
  var word_array = this.$QuickSandHeader8(this.$QuickSandHeader9(index).slice(8));
  this.$QuickSandHeader3.push(value.xor(Int64.fromString("736f6d6570736575", 16)));
  this.$QuickSandHeader3.push(word_array.xor(Int64.fromString("646f72616e646f6d", 16)));
  this.$QuickSandHeader3.push(value.xor(Int64.fromString("6c7967656e657261", 16)));
  this.$QuickSandHeader3.push(word_array.xor(Int64.fromString("7465646279746573", 16)));
}
// if (dataAndEvents.__markCompiled) {
//   dataAndEvents.__markCompiled();
// }
/**
 * @param {number} dataAndEvents
 * @return {?}
 */
Translation.prototype.sipEdge = function(dataAndEvents) {
  return[this.sipNode(dataAndEvents, 0), this.sipNode(dataAndEvents, 1)];
};
/**
 * @param {number} dataAndEvents
 * @param {number} recurring
 * @return {?}
 */
Translation.prototype.sipNode = function(dataAndEvents, recurring) {
  return this.$QuickSandHeadera(2 * dataAndEvents + recurring).and(this.$QuickSandHeader2).toInt();
};
/**
 * @return {?}
 */
Translation.prototype.getSize = function() {
  return this.$QuickSandHeader0;
};
/**
 * @return {?}
 */
Translation.prototype.getHalfSize = function() {
  return this.$QuickSandHeader1;
};
/**
 * @param {?} v1
 * @param {number} opt_attributes
 * @return {?}
 */
Translation.prototype.$QuickSandHeaderb = function(v1, opt_attributes) {
  return v1.shiftLeft(opt_attributes).or(v1.shiftRightUnsigned(64 - opt_attributes));
};
/**
 * @param {Array} match
 * @return {?}
 */
Translation.prototype.$QuickSandHeader8 = function(match) {
  var ret = new Int64.fromInt(match[0]);
  var rreturn = Int64.fromInt(match[1]).shiftLeft(8);
  var intOctet = Int64.fromInt(match[2]).shiftLeft(16);
  var eof = Int64.fromInt(match[3]).shiftLeft(24);
  var sexpr = Int64.fromInt(match[4]).shiftLeft(32);
  var shift = Int64.fromInt(match[5]).shiftLeft(40);
  var parserFail = Int64.fromInt(match[6]).shiftLeft(48);
  var subQuery = Int64.fromInt(match[7]).shiftLeft(56);
  return ret.or(rreturn).or(intOctet).or(eof).or(sexpr).or(shift).or(parserFail).or(subQuery);
};
/**
 * @return {undefined}
 */
Translation.prototype.$QuickSandHeaderc = function() {
  this.$QuickSandHeader4 = this.$QuickSandHeader4.add(this.$QuickSandHeader5);
  this.$QuickSandHeader6 = this.$QuickSandHeader6.add(this.$QuickSandHeader7);
  this.$QuickSandHeader5 = this.$QuickSandHeaderb(this.$QuickSandHeader5, 13);
  this.$QuickSandHeader7 = this.$QuickSandHeaderb(this.$QuickSandHeader7, 16);
  this.$QuickSandHeader5 = this.$QuickSandHeader5.xor(this.$QuickSandHeader4);
  this.$QuickSandHeader7 = this.$QuickSandHeader7.xor(this.$QuickSandHeader6);
  this.$QuickSandHeader4 = this.$QuickSandHeaderb(this.$QuickSandHeader4, 32);
  this.$QuickSandHeader6 = this.$QuickSandHeader6.add(this.$QuickSandHeader5);
  this.$QuickSandHeader4 = this.$QuickSandHeader4.add(this.$QuickSandHeader7);
  this.$QuickSandHeader5 = this.$QuickSandHeaderb(this.$QuickSandHeader5, 17);
  this.$QuickSandHeader7 = this.$QuickSandHeaderb(this.$QuickSandHeader7, 21);
  this.$QuickSandHeader5 = this.$QuickSandHeader5.xor(this.$QuickSandHeader6);
  this.$QuickSandHeader7 = this.$QuickSandHeader7.xor(this.$QuickSandHeader4);
  this.$QuickSandHeader6 = this.$QuickSandHeaderb(this.$QuickSandHeader6, 32);
};
/**
 * @param {string} keys
 * @return {?}
 */
Translation.prototype.$QuickSandHeader9 = function(keys) {
  /** @type {Array} */
  var headerRowsInt = [];
  /** @type {number} */
  var k = 0;
  for (;k < keys.length;k += 2) {
    headerRowsInt.push(parseInt(keys.substr(k, 2), 16));
  }
  return headerRowsInt;
};
/**
 * @param {?} id
 * @return {?}
 */
Translation.prototype.$QuickSandHeadera = function(id) {
  var pad = Int64.fromInt(id);
  this.$QuickSandHeader4 = this.$QuickSandHeader3[0];
  this.$QuickSandHeader5 = this.$QuickSandHeader3[1];
  this.$QuickSandHeader6 = this.$QuickSandHeader3[2];
  this.$QuickSandHeader7 = this.$QuickSandHeader3[3].xor(pad);
  /** @type {number} */
  var l = 0;
  for (;l < 2;l++) {
    this.$QuickSandHeaderc();
  }
  this.$QuickSandHeader4 = this.$QuickSandHeader4.xor(pad);
  this.$QuickSandHeader6 = this.$QuickSandHeader6.xor(Int64.fromString("ff", 16));
  /** @type {number} */
  l = 0;
  for (;l < 4;l++) {
    this.$QuickSandHeaderc();
  }
  return this.$QuickSandHeader4.xor(this.$QuickSandHeader5).xor(this.$QuickSandHeader6).xor(this.$QuickSandHeader7);
};

module.exports = solveAndUpdateForm;