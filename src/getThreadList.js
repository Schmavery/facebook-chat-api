"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadList(start, end, boxType, callback) {
    if (utils.getType(callback) === 'Undefined') {
      if (utils.getType(end) !== 'Number') {
        throw {
          error: "Please pass a number as a second argument."
        };
      } else if (utils.getType(boxType) === 'Function') {
        callback = boxType;
        boxType = 'inbox'; //default to inbox
      } else if (utils.getType(boxType) != 'String') {
        throw {
          error: "Please pass a String as a third argument. Your options are: inbox, pending, and archived"
        };
      } else {
        throw {
          error: "getThreadList: need callback"
        };
      }
    }

    boxType = boxType.toLowerCase();
    if (boxType === 'archived') {
      boxType = 'action:archived';
    } else if (boxType !== 'inbox' && boxType !== 'pending') {
      throw {
        error: "boxType can only be one of the following: inbox, pending, archived"
      }
    }

    if (end <= start) end = start + 20;

    var form = {
      'client': 'mercury'
    };

    form[boxType + '[offset]'] = start;
    form[boxType + '[limit]'] = end - start;

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
