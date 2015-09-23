"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getThreadHistory(threadID, start, end, timestamp, callback) {
    if(!callback) callback = function() {};

    var data = {
      'client' : 'mercury'
    };

    api.getUserInfo(threadID, function(err, res) {
      if(err) {
        return callback(err);
      }
      var key = (Object.keys(res).length > 0) ? "user_ids" : "thread_fbids";
        data['messages['+key+'][' + threadID + '][offset]'] = start;
        data['messages['+key+'][' + threadID + '][timestamp]'] = timestamp;
        data['messages['+key+'][' + threadID + '][limit]'] = end - start + 1;

        var form = mergeWithDefaults(data);

        if(ctx.globalOptions.pageId) form.request_user_id = ctx.globalOptions.pageId;

        utils.post("https://www.facebook.com/ajax/mercury/thread_info.php", ctx.jar, form)
        .then(utils.parseResponse)
        .then(function(resData) {
          if (resData.error) {
            callback(resData);
          } else callback(null, resData.payload.actions);
        })
        .catch(function(err) {
          log.error("Error in getThreadHistory", err);
          return callback(err);
        });
    });

  };
};

