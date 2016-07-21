"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadList(start, end, pending, callback) {
    if (utils.getType(callback) === 'Undefined') {
      if (utils.getType(end) !== 'Number') {
        throw {
          error: "Please pass a number as a second argument."
        };
      } else if (utils.getType(pending) === 'Function') {
        callback = pending;
        pending = false; //default to inbox
      } else if (utils.getType(pending) != 'Boolean') {
        throw {
          error: "Please pass a Boolean as a third argument."
        };
      } else {
        throw {
          error: "getThreadList: need callback"
        };
      }
    }

    if (end <= start) end = start + 20;

    var messageBox = pending ? "pending" : "inbox";

    var form = {
      'client': 'mercury'
    };

    form[messageBox + '[offset]'] = start;
    form[messageBox + '[limit]'] = end - start;

    if (ctx.globalOptions.pageID) {
      form.request_user_id = ctx.globalOptions.pageID;
    }

    defaultFuncs
      .post("https://www.facebook.com/ajax/mercury/threadlist_info.php", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }
        log.verbose("Response in getThreadList: " + JSON.stringify(resData.payload.threads));
        return callback(null, (resData.payload.threads || []).map(utils.formatThread));
      })
      .catch(function(err) {
        log.error("Error in getThreadList", err);
        return callback(err);
      });
  };
};
