"use strict";

var utils = require("../utils");
var log = require("npmlog");
var bluebird = require("bluebird");

var lastBatchQueryIndex = 0;

module.exports = function (defaultFuncs, api, ctx) {
  return function executeGraphQueryBatch(query, callback) {
    if (!callback) {
      callback = function () {};
    }
    
    var queryName = "q" + lastBatchQueryIndex++;
    var queries = {};
    queries[queryName] = {
      priority: 0,
      q: query
    };
    
    var postData = {
      "av": ctx.userID,
      "method": "GET",
      //"batch_name": "MontageThreadViewRoute",
      "response_format": "json",
      "scheduler": "phased",
      "queries": JSON.stringify(queries)
    };
    
    defaultFuncs
      .post("https://www.messenger.com/api/graphqlbatch/", ctx.jar, postData)
      .then(function(data) {
        data.body = "[" + data.body.replace("}{", "},{").replace("\r\n", ",") + "]";
        return data;
      })
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (!resData) {
          throw {error: "executeGraphQueryBatch returned empty object."};
        }
        if (resData.error) {
          throw resData;
        }
        if (resData && resData[0] && resData[0][queryName]) {
          callback(null, resData[0][queryName]);
        }
        else {
          throw { error: "executeGraphQueryBatch can't parse the result" };
        }
      })
      .catch(function(err) {
        log.error("executeGraphQueryBatch", err);
        return callback(err, null);
      });

  }
};
