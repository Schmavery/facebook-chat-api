// function(deepDataAndEvents, dataAndEvents, ignoreMethodDoesntExist, textAlt, module, keepData) {

// if (dataAndEvents.__markCompiled) {
//   dataAndEvents.__markCompiled();
// }
/**
 * @param {number} low
 * @param {number} dataAndEvents
 * @return {undefined}
 */
Int64 = function(low, dataAndEvents) {
  /** @type {number} */
  this.low_ = low;
  /** @type {number} */
  this.high_ = dataAndEvents;
};
Int64.IntCache_ = {};
/**
 * @param {number} value
 * @return {?}
 */
Int64.fromInt = function(value) {
  if (-128 <= value && value < 128) {
    var cachedObj = Int64.IntCache_[value];
    if (cachedObj) {
      return cachedObj;
    }
  }
  var obj = new Int64(value | 0, value < 0 ? -1 : 0);
  if (-128 <= value && value < 128) {
    Int64.IntCache_[value] = obj;
  }
  return obj;
};
/**
 * @param {number} value
 * @return {?}
 */
Int64.fromNumber = function(value) {
  if (isNaN(value) || !isFinite(value)) {
    return Int64.ZERO;
  } else {
    if (value <= -Int64.TWO_PWR_63_DBL_) {
      return Int64.MIN_VALUE;
    } else {
      if (value + 1 >= Int64.TWO_PWR_63_DBL_) {
        return Int64.MAX_VALUE;
      } else {
        if (value < 0) {
          return Int64.fromNumber(-value).negate();
        } else {
          return new Int64(value % Int64.TWO_PWR_32_DBL_ | 0, value / Int64.TWO_PWR_32_DBL_ | 0);
        }
      }
    }
  }
};
/**
 * @param {number} lowBits
 * @param {number} highBits
 * @return {?}
 */
Int64.fromBits = function(lowBits, highBits) {
  return new Int64(lowBits, highBits);
};
/**
 * @param {string} str
 * @param {number} opt_radix
 * @return {?}
 */
Int64.fromString = function(str, opt_radix) {
  if (str.length == 0) {
    throw Error("number format error: empty string");
  }
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw Error("radix out of range: " + radix);
  }
  if (str.charAt(0) == "-") {
    return Int64.fromString(str.substring(1), radix).negate();
  } else {
    if (str.indexOf("-") >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
  }
  var radixToPower = Int64.fromNumber(Math.pow(radix, 8));
  var result = Int64.ZERO;
  /** @type {number} */
  var i = 0;
  for (;i < str.length;i += 8) {
    /** @type {number} */
    var size = Math.min(8, str.length - i);
    /** @type {number} */
    var value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = Int64.fromNumber(Math.pow(radix, size));
      result = result.multiply(power).add(Int64.fromNumber(value));
    } else {
      result = result.multiply(radixToPower);
      result = result.add(Int64.fromNumber(value));
    }
  }
  return result;
};
/** @type {number} */
Int64.TWO_PWR_16_DBL_ = 1 << 16;
/** @type {number} */
Int64.TWO_PWR_24_DBL_ = 1 << 24;
/** @type {number} */
Int64.TWO_PWR_32_DBL_ = Int64.TWO_PWR_16_DBL_ * Int64.TWO_PWR_16_DBL_;
/** @type {number} */
Int64.TWO_PWR_31_DBL_ = Int64.TWO_PWR_32_DBL_ / 2;
/** @type {number} */
Int64.TWO_PWR_48_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_16_DBL_;
/** @type {number} */
Int64.TWO_PWR_64_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_32_DBL_;
/** @type {number} */
Int64.TWO_PWR_63_DBL_ = Int64.TWO_PWR_64_DBL_ / 2;
Int64.ZERO = Int64.fromInt(0);
Int64.ONE = Int64.fromInt(1);
Int64.NEG_ONE = Int64.fromInt(-1);
Int64.MAX_VALUE = Int64.fromBits(4294967295 | 0, 2147483647 | 0);
Int64.MIN_VALUE = Int64.fromBits(0, 2147483648 | 0);
Int64.TWO_PWR_24_ = Int64.fromInt(1 << 24);
/**
 * @return {?}
 */
Int64.prototype.toInt = function() {
  return this.low_;
};
/**
 * @return {?}
 */
Int64.prototype.toNumber = function() {
  return this.high_ * Int64.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
};
/**
 * @return {?}
 */
Int64.prototype.toUnsignedBits = function() {
  /** @type {Array} */
  var map = [];
  /** @type {number} */
  var h = 31;
  /** @type {number} */
  var objUid = 32;
  for (;objUid < 64;objUid++) {
    /** @type {number} */
    map[objUid] = this.low_ >> h & 1;
    h -= 1;
  }
  /** @type {number} */
  h = 31;
  /** @type {number} */
  objUid = 0;
  for (;objUid < 32;objUid++) {
    /** @type {number} */
    map[objUid] = this.high_ >> h & 1;
    h -= 1;
  }
  return map.join("");
};
/**
 * @param {number} opt_radix
 * @return {?}
 */
Int64.prototype.toString = function(opt_radix) {
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw Error("radix out of range: " + radix);
  }
  if (this.isZero()) {
    return "0";
  }
  if (this.isNegative()) {
    if (this.equals(Int64.MIN_VALUE)) {
      var radixTimestamp = Int64.fromNumber(radix);
      var div = this.div(radixTimestamp);
      var rem = div.multiply(radixTimestamp).subtract(this);
      return div.toString(radix) + rem.toInt().toString(radix);
    } else {
      return "-" + this.negate().toString(radix);
    }
  }
  var radixToPower = Int64.fromNumber(Math.pow(radix, 6));
  rem = this;
  /** @type {string} */
  var result = "";
  for (;true;) {
    var remDiv = rem.div(radixToPower);
    var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
    var digits = intval.toString(radix);
    rem = remDiv;
    if (rem.isZero()) {
      return digits + result;
    } else {
      for (;digits.length < 6;) {
        /** @type {string} */
        digits = "0" + digits;
      }
      /** @type {string} */
      result = "" + digits + result;
    }
  }
};
/**
 * @return {?}
 */
Int64.prototype.getHighBits = function() {
  return this.high_;
};
/**
 * @return {?}
 */
Int64.prototype.getLowBits = function() {
  return this.low_;
};
/**
 * @return {?}
 */
Int64.prototype.getLowBitsUnsigned = function() {
  return this.low_ >= 0 ? this.low_ : Int64.TWO_PWR_32_DBL_ + this.low_;
};
/**
 * @return {?}
 */
Int64.prototype.getNumBitsAbs = function() {
  if (this.isNegative()) {
    if (this.equals(Int64.MIN_VALUE)) {
      return 64;
    } else {
      return this.negate().getNumBitsAbs();
    }
  } else {
    var val = this.high_ != 0 ? this.high_ : this.low_;
    /** @type {number} */
    var bit = 31;
    for (;bit > 0;bit--) {
      if ((val & 1 << bit) != 0) {
        break;
      }
    }
    return this.high_ != 0 ? bit + 33 : bit + 1;
  }
};
/**
 * @return {?}
 */
Int64.prototype.isZero = function() {
  return this.high_ == 0 && this.low_ == 0;
};
/**
 * @return {?}
 */
Int64.prototype.isNegative = function() {
  return this.high_ < 0;
};
/**
 * @return {?}
 */
Int64.prototype.isOdd = function() {
  return(this.low_ & 1) == 1;
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.equals = function(other) {
  return this.high_ == other.high_ && this.low_ == other.low_;
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.notEquals = function(other) {
  return this.high_ != other.high_ || this.low_ != other.low_;
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.lessThan = function(other) {
  return this.compare(other) < 0;
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.lessThanOrEqual = function(other) {
  return this.compare(other) <= 0;
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.greaterThan = function(other) {
  return this.compare(other) > 0;
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.greaterThanOrEqual = function(other) {
  return this.compare(other) >= 0;
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.compare = function(other) {
  if (this.equals(other)) {
    return 0;
  }
  var thisNeg = this.isNegative();
  var otherNeg = other.isNegative();
  if (thisNeg && !otherNeg) {
    return-1;
  }
  if (!thisNeg && otherNeg) {
    return 1;
  }
  if (this.subtract(other).isNegative()) {
    return-1;
  } else {
    return 1;
  }
};
/**
 * @return {?}
 */
Int64.prototype.negate = function() {
  if (this.equals(Int64.MIN_VALUE)) {
    return Int64.MIN_VALUE;
  } else {
    return this.not().add(Int64.ONE);
  }
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.add = function(other) {
  /** @type {number} */
  var a48 = this.high_ >>> 16;
  /** @type {number} */
  var a32 = this.high_ & 65535;
  /** @type {number} */
  var a16 = this.low_ >>> 16;
  /** @type {number} */
  var a00 = this.low_ & 65535;
  /** @type {number} */
  var b48 = other.high_ >>> 16;
  /** @type {number} */
  var b32 = other.high_ & 65535;
  /** @type {number} */
  var b16 = other.low_ >>> 16;
  /** @type {number} */
  var b00 = other.low_ & 65535;
  /** @type {number} */
  var c48 = 0;
  /** @type {number} */
  var c32 = 0;
  /** @type {number} */
  var c16 = 0;
  /** @type {number} */
  var c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 + b48;
  c48 &= 65535;
  return Int64.fromBits(c16 << 16 | c00, c48 << 16 | c32);
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.subtract = function(other) {
  return this.add(other.negate());
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.multiply = function(other) {
  if (this.isZero()) {
    return Int64.ZERO;
  } else {
    if (other.isZero()) {
      return Int64.ZERO;
    }
  }
  if (this.equals(Int64.MIN_VALUE)) {
    return other.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
  } else {
    if (other.equals(Int64.MIN_VALUE)) {
      return this.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
    }
  }
  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().multiply(other.negate());
    } else {
      return this.negate().multiply(other).negate();
    }
  } else {
    if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
  }
  if (this.lessThan(Int64.TWO_PWR_24_) && other.lessThan(Int64.TWO_PWR_24_)) {
    return Int64.fromNumber(this.toNumber() * other.toNumber());
  }
  /** @type {number} */
  var a48 = this.high_ >>> 16;
  /** @type {number} */
  var a32 = this.high_ & 65535;
  /** @type {number} */
  var a16 = this.low_ >>> 16;
  /** @type {number} */
  var a00 = this.low_ & 65535;
  /** @type {number} */
  var b48 = other.high_ >>> 16;
  /** @type {number} */
  var b32 = other.high_ & 65535;
  /** @type {number} */
  var b16 = other.low_ >>> 16;
  /** @type {number} */
  var b00 = other.low_ & 65535;
  /** @type {number} */
  var c48 = 0;
  /** @type {number} */
  var c32 = 0;
  /** @type {number} */
  var c16 = 0;
  /** @type {number} */
  var c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 65535;
  return Int64.fromBits(c16 << 16 | c00, c48 << 16 | c32);
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.div = function(other) {
  if (other.isZero()) {
    throw Error("division by zero");
  } else {
    if (this.isZero()) {
      return Int64.ZERO;
    }
  }
  if (this.equals(Int64.MIN_VALUE)) {
    if (other.equals(Int64.ONE) || other.equals(Int64.NEG_ONE)) {
      return Int64.MIN_VALUE;
    } else {
      if (other.equals(Int64.MIN_VALUE)) {
        return Int64.ONE;
      } else {
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(Int64.ZERO)) {
          return other.isNegative() ? Int64.ONE : Int64.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    }
  } else {
    if (other.equals(Int64.MIN_VALUE)) {
      return Int64.ZERO;
    }
  }
  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().div(other.negate());
    } else {
      return this.negate().div(other).negate();
    }
  } else {
    if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
  }
  var res = Int64.ZERO;
  rem = this;
  for (;rem.greaterThanOrEqual(other);) {
    /** @type {number} */
    approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
    /** @type {number} */
    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    /** @type {number} */
    var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
    var approxRes = Int64.fromNumber(approx);
    var approxRem = approxRes.multiply(other);
    for (;approxRem.isNegative() || approxRem.greaterThan(rem);) {
      approx -= delta;
      approxRes = Int64.fromNumber(approx);
      approxRem = approxRes.multiply(other);
    }
    if (approxRes.isZero()) {
      approxRes = Int64.ONE;
    }
    res = res.add(approxRes);
    rem = rem.subtract(approxRem);
  }
  return res;
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.modulo = function(other) {
  return this.subtract(this.div(other).multiply(other));
};
/**
 * @return {?}
 */
Int64.prototype.not = function() {
  return Int64.fromBits(~this.low_, ~this.high_);
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.and = function(other) {
  return Int64.fromBits(this.low_ & other.low_, this.high_ & other.high_);
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.or = function(other) {
  return Int64.fromBits(this.low_ | other.low_, this.high_ | other.high_);
};
/**
 * @param {?} other
 * @return {?}
 */
Int64.prototype.xor = function(other) {
  return Int64.fromBits(this.low_ ^ other.low_, this.high_ ^ other.high_);
};
/**
 * @param {number} numBits
 * @return {?}
 */
Int64.prototype.shiftLeft = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var low = this.low_;
    if (numBits < 32) {
      var high = this.high_;
      return Int64.fromBits(low << numBits, high << numBits | low >>> 32 - numBits);
    } else {
      return Int64.fromBits(0, low << numBits - 32);
    }
  }
};
/**
 * @param {number} numBits
 * @return {?}
 */
Int64.prototype.shiftRight = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return Int64.fromBits(low >>> numBits | high << 32 - numBits, high >> numBits);
    } else {
      return Int64.fromBits(high >> numBits - 32, high >= 0 ? 0 : -1);
    }
  }
};
/**
 * @param {number} numBits
 * @return {?}
 */
Int64.prototype.shiftRightUnsigned = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return Int64.fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits);
    } else {
      if (numBits == 32) {
        return Int64.fromBits(high, 0);
      } else {
        return Int64.fromBits(high >>> numBits - 32, 0);
      }
    }
  }
};
/** @type {function (number, number): undefined} */
module.exports = Int64;
// }, null);
