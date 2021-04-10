"use strict";

const utils = require("../utils");
const log = require("npmlog");

function getTransportedNotif (NST)
{
  // This function get the `nodes` array with notifications from Notification
  // Server Transport module. The index are arbitrary according to response
  // format.
  return (NST && NST[3] && NST[3][1] && NST[3][1].nodes) || null;
}

function getTrackingJSON (tracking)
{
  try{
    return JSON.parse(tracking);
  }catch(e){
    return null;
  }
}

function formatNotificationNode (node)
{
  return {
    id: node.id,
    type: node.notif_type,
    thumbnail: (node.thumbnail && node.thumbnail.uri) || null,
    icon: (node.icon && node.icon.uri) || null,
    state: node.seen_state,
    first_read_time: node.first_read_time,
    first_seen_time: node.first_seen_time,
    message: (node.title && node.title.text) || null,
    url: node.url,
    creation_time: node.creation_time,
    time_text: node.timestamp.text,
    time_verbose: node.timestamp.verbose,
    alert_id: node.alert_id,
    sort_keys: node.sort_keys,
    previewImage: node.previewImage,
    tracking: getTrackingJSON (node.tracking),
  };
}

module.exports = function(defaultFuncs, api, ctx) {
  return function getLastNotifications(callback) {
    if ((utils.getType(callback) !== "Function") && (utils.getType(callback) !== "AsyncFunction")) {
      throw {error: "getLastNotifications: need callback"};
    }

    const form = {
      data: JSON.stringify({
        "businessUserID":null,
        "length":10,
        "clientRequestID":"js_3u",
      }),
      'no_script_path': 1,
      '__a':1,
    };

    defaultFuncs
      .get(
        "https://www.facebook.com/ajax/pagelet/generic.php/WebNotificationsPayloadPagelet",
        ctx.jar,
        form
      )
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function(resData) {
        if (resData.error) {
          throw resData;
        }

        // `jsmods.require` will return and array of modules, we should filter
        // the specific module we want. I found it at least two times in the
        // list, because of this, it's better the algorithm pass through all
        // of them.
        var node, transport_nodes, resulting_array = [];
        for (var reqItem of resData.jsmods.require) {
          if (reqItem[0] !== 'NotificationServerTransport') {
            continue;
          }
          transport_nodes = getTransportedNotif (reqItem);
          if (! transport_nodes) {
            continue;
          }
          for (node of transport_nodes) {
            resulting_array.push (formatNotificationNode (node));
          }
        }
        return callback(null, resulting_array);
      })
      .catch(function(err) {
        log.error("getLastNotifications", err);
        return callback(err);
      });
  };
};
