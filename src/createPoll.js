"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function createPoll(title, threadID, options, callback) {
    if (!callback) {
      if (utils.getType(options) == "Function") {
        callback = options;
      } else {
        callback = function() {};
      }
    }
    if (!options) {
      options = {}; // Initial poll options are optional
    }

    var form = {
      target_id: threadID,
      question_text: title
    };

    // Set fields for options (and whether they are selected initially by the posting user)
    var ind = 0;
    for (var opt in options) {
      if (options.hasOwnProperty(opt)) {
        form["option_text_array[" + ind + "]"] = opt;
        form["option_is_selected_array[" + ind + "]"] = options[opt]
          ? "1"
          : "0";
        ind++;
      }
    }

    defaultFuncs
      .post(
        "https://www.messenger.com/messaging/group_polling/create_poll/?dpr=1",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.payload.status != "success") {
          throw resData;
        }

        return callback();
      })
      .catch(function(err) {
        log.error("createPoll", err);
        return callback(err);
      });
  };
};
