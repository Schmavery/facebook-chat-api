"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getMessageRequests(start, end, callback) {
    if(!callback && utils.getType(end) !== 'Number') {
      throw {error: "please pass an number as a second argument."};
    }

    if(!callback) {
      throw {error: "getMessageRequests: need callback"};
    }

    if (end <= start) end = start + 20;

    var form = {
      'client' : 'mercury',
      'pending[offset]' : start,
      'pending[limit]' : end - start,
    };

    if(ctx.globalOptions.pageID) {
      form.request_user_id = ctx.globalOptions.pageID;
    }

    defaultFuncs
      .post("https://www.facebook.com/ajax/mercury/threadlist_info.php", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        log.verbose("Response in getMessageRequests: " + JSON.stringify(resData.payload.threads));
        return callback(null, (resData.payload.threads || []).map(utils.formatThread));
      })
      .catch(function(err) {
        log.error("Error in getMessageRequests", err);
        return callback(err);
      });
  };
};
