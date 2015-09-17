"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function getThreadList(start, end, callback) {
    if(!callback && utils.getType(end) !== 'Number') {
      throw {error: "please pass an number as a second argument."};
    }

    if(!callback) {
      throw {error: "getThreadList: need callback"};
    }

    if (end <= start) end = start + 20;

    var form = {
      'client' : 'mercury',
      'inbox[offset]' : start,
      'inbox[limit]' : end - start,
    };

    if(ctx.globalOptions.pageID) {
      form.request_user_id = ctx.globalOptions.pageID;
    }

    defaultFuncs
      .post("https://www.facebook.com/ajax/mercury/threadlist_info.php", ctx.jar, form)
      .then(utils.parseAndCheckLogin)
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        return callback(null, resData.payload.threads.map(utils.formatThread));
      })
      .catch(function(err) {
        log.error("Error in getThreadList", err);
        return callback(err);
      });
  };
};
