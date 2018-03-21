"use strict";

const util = require("util");

module.exports = function() {
  return function getEmojiUrl(c, size, pixelRatio) {
    /*
     Resolves Facebook Messenger emoji image asset URL for an emoji character.
     Supported sizes are 32, 64, and 128.
     Supported pixel ratios are '1.0' and '1.5' (possibly more; haven't tested)
     */
    const baseUrl = "https://static.xx.fbcdn.net/images/emoji.php/v8/z%s/%s";
    pixelRatio = pixelRatio || "1.0";

    let ending = util.format(
      "%s/%s/%s.png",
      pixelRatio,
      size,
      c.codePointAt(0).toString(16)
    );
    let base = 317426846;
    for (let i = 0; i < ending.length; i++) {
      base = (base << 5) - base + ending.charCodeAt(i);
    }

    let hashed = (base & 255).toString(16);
    return util.format(baseUrl, hashed, ending);
  };
};
