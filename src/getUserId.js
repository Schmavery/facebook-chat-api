/*jslint node: true */
"use strict";

module.exports = function(utils, log, mergeWithDefaults, api, ctx) {
  return function getUserId(name, callback) {
    var form = mergeWithDefaults({
      'value' : name.toLowerCase(),
      'viewer' : ctx.userId,
      'rsp' : "search",
      'context' : "search",
      'path' : "/home.php",
      'request_id' : utils.getGUID(),
    });

    utils.get("https://www.facebook.com/ajax/typeahead/search.php", ctx.jar, form, function(err, res, html) {
      var strData = utils.makeParsable(html);
      try{
        var ret = JSON.parse(strData);
        var info = ret.payload;
        if(info.entries[0].type !== "user") {
          return callback({error: "Couldn't find a user with name " + name + ". Best match: " + info.entries[0].path});
        }

        callback(null, info);
      } catch (e) {
        log.error("ERROR in sendDirectMessage --> ",e, strData);
        callback({error: e});
      }
    });
  };
};