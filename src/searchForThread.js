"use strict";

var utils = require("../utils");

function formatThreadList(data) {return data;}

module.exports = function (defaultFuncs, api, ctx) {
  return function searchForThread(name, callback) {
    if (!callback) {
      throw { error: "searchForThread: need callback" };
    }
    console.log(ctx.globalOptions);
    var form = {
      "queries": JSON.stringify({
        "o0":
        {
          "doc_id": "2268911786543136",
          "query_params": {
            "query": name,
            "num_users": 10,
            "num_groups": 8,
            "num_pages": 5
          }
        }
      })
    };

    defaultFuncs
      .post("https://www.facebook.com/api/graphqlbatch/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function (resData) {

        if (resData[resData.length - 1].error_results > 0) {
          throw resData[0].o0.errors;
        }

        if (resData[resData.length - 1].successful_results === 0) {
          throw {error: "searchForThread: there was no successful_results", res: resData};
        }
        return callback(null, formatThreadList(resData[0].o0.data.messenger_search.result_modules.nodes));
      })
      .catch((err) => {
        log.error("searchForThread", err);
        return callback(err);
      });
  };
};
