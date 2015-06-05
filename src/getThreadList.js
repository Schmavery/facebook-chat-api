/*jslint node: true */
"use strict";

module.exports = function(utils, log, mergeWithDefaults, api, ctx) {
  return function getThreadList(start, end, callback) {
    if(!callback) callback = function() {};

    if (end <= start) end = start + 20;

    var form = mergeWithDefaults({
      'client' : 'mercury',
      'inbox[offset]' : start,
      'inbox[limit]' : end
    });

    utils.post("https://www.facebook.com/ajax/mercury/threadlist_info.php", ctx.jar, form, function(err, res, html) {
      var strData = utils.makeParsable(html);
      var ret;
      try {
        ret = JSON.parse(strData);
      } catch (e) {
        log.error("ERROR in setTitle --> ", e, strData);
        callback(e);
      }

      if (ret.error && ret.error === 1545012){
        callback({error: "Cannot change chat title: Not member of chat."});
      } else if (ret.error && ret.error === 1545003){
        callback({error: "Cannot set title of single-user chat."});
      } else if (ret.error) {
        callback(ret);
      } else callback(null, ret.payload.threads);
    });
  };
};