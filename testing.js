var $BitMap0 = [];
function repeat(str, n) {
  var cur = str;
  for(;n--;) cur += str;
  return str;
}
function pad(n) {
  var millis = n.toString(2);
  var oldMillis = repeat("0", millis.length - 1);
  return oldMillis + millis;
}
var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
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
var set = function(second) {
  /** @type {number} */
  $BitMap0[second] = 1;
};
var toCompressedString = function() {
  if ($BitMap0.length === 0) {
    return "";
  }
  /** @type {Array} */
  var tagNameArr = [];
  /** @type {number} */
  var hour = 1;
  var old = $BitMap0[0] || 0;
  var h = old.toString(2);
  /** @type {number} */
  var conditionIndex = 1;
  for (;conditionIndex < $BitMap0.length;conditionIndex++) {
    var expr = $BitMap0[conditionIndex] || 0;
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

console.log(toCompressedString());