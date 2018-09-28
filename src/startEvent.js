"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function(defaultFuncs, api, ctx) {
    // muteSecond: -1=permanent mute, 0=unmute, 60=one minute, 3600=one hour, etc.
    return function startEvent(threadID, eventTime, eventName, callback) {

        var serialize = function(obj, prefix) {
            var str = [],
                p;
            for (p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var k = prefix ? prefix + "[" + p + "]" : p,
                        v = obj[p];
                    str.push((v !== null && typeof v === "object") ?
                        serialize(v, k) :
                        encodeURI(k) + "=" + encodeURI(v));
                }
            }
            return str.join("&");
        }

        if (!callback) {
            callback = function() {};
        }

        var form = {
            event_type: "EVENT",
            event_time: eventTime,
            thread_id: threadID,
            title: eventName,
            location_id: "",
            location_name: ""
        };

        var url1 = "https://www.facebook.com/ajax/eventreminder/create/?acontext=%7B%22action_history%22%3A[%7B%22surface%22%3A%22messenger_chat_tab%22%2C%22mechanism%22%3A%22messenger_composer%22%7D]%7D&" + serialize(form);

        defaultFuncs
            .post(
                url1,
                ctx.jar,
                {}
            )
            .then(utils.saveCookies(ctx.jar))
            .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
            .then(function(resData) {
                if (resData.error) {
                    throw resData;
                }

                return callback();
            })
            .catch(function(err) {
                log.error("startEvent", err);
                return callback(err);
            });
    };
};
