"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
  return function createPoll(title, threadID, options, callback) {
    if(!callback) {
      callback = function() {};
    }
    if(!options) {
      options = []; // Initial poll options are optional
    }

    var form = {
      'target_id' : threadID,
      'question_text' : title
    };

    // Set fields for options (and whether they are selected initially by the posting user)
    for(var i = 0; i < options.length; i++) {
      form['option_text_array[' + i + ']'] = encodeURIComponent(options[i].text);
      form['option_is_selected_array[' + i + ']'] = (options[i].selected ? '1' : '0');
    }

    defaultFuncs
      .post("https://www.messenger.com/messaging/group_polling/create_poll/?dpr=1", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx.jar, defaultFuncs))
      .then(function(resData) {
        if (resData.payload.status != 'success') {
          throw resData;
        }
        
        return callback();
      })
      .catch(function(err) {
        log.error("Error in createPoll", err);
        return callback(err);
      });
  };
};
