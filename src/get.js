/*jslint node: true */
"use strict";

var utils = require("../utils");
var merge = require('merge');
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {

  return function get(uri, options, callback) {
    var form = mergeWithDefaults();

    form = merge(form, options.data);
    options.options = merge(options.options, utils.getDefaultRequestOptions());

    utils.get(uri, ctx.jar, form)
    .then(utils.parseResponse)
    .then(function(resData) {
      if (resData.error){
        callback({error: resData.errorDescription});
      }  else {
        resData = options.payload ? resData.payload : resData;
        callback(null, resData);
      }
    })
    .catch(function(err) {
      log.error("Error in " + uri, err);
      return callback(err);
    });
  };

};
