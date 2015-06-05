/*jslint node: true */
"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function markAsRead(thread_id, callback) {
    if(!callback) callback = function() {};
    var form = mergeWithDefaults();

    form["ids[" + thread_id + "]"] = true;

    utils.post("https://www.facebook.com/ajax/mercury/change_read_status.php", ctx.jar, form, function(err, res, html) {
      var cookies = res.headers['set-cookie'] || [];
      cookies.map(function (c) {
        jar.setCookie(c, "https://www.facebook.com");
      });

      var strData = utils.makeParsable(html);
      try {
        var ret = JSON.parse(strData);
      } catch (e) {
        log.error("ERROR in markAsRead --> ",e, strData);
        return callback({error: e});
      }
      callback();
    });
  };
};