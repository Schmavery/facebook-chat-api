/*jslint node: true */
"use strict";

module.exports = function(utils, log, mergeWithDefaults, api, ctx) {
  return function getUserInfo(id, callback) {
    var form = mergeWithDefaults();
    if(!(id instanceof Array)) id = [id];

    id.map(function(v, i) {
      form["ids[" + i + "]"] = v;
    });

    utils.get("https://www.facebook.com/chat/user_info/", ctx.jar, form, function(err, res, html) {
      var strData = utils.makeParsable(html);
      var ret;
      try{
        ret = JSON.parse(strData);
      } catch (e) {
        log.error("ERROR in getUserInfo --> ",e, "\nnumber of ids:", id.length, "\n-------- strData --------\n" ,strData);
        return callback(e);
      }
      callback(null, ret.payload.profiles);
    });
  };
};