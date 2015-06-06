/*jslint node: true */
"use strict";

var cheerio = require("cheerio");
var utils = require("../utils");
var log = require("npmlog");

module.exports = function(mergeWithDefaults, api, ctx) {
  return function getFriendsList(id, callback) {
    if(!id) return log.error("getFriendsList: need id");
    if(!callback) return log.error("getFriendsList: need callback");

    id = parseInt(id);

    utils.get("https://www.facebook.com/" + id, ctx.jar)
    .then(function(res) {
      var html = res.body;

      var maybeUrl = utils.getFrom(html, "window.location.replace(\"", "\");").split("\\/").join("/");

      if(maybeUrl.length === 0) return callback({error: "Problem retrieving friends list. Couldn't find redirect url."});

      // Old profiles use profile.php?something=username and not
      // /username
      if(maybeUrl.indexOf("profile.php") !== -1) maybeUrl += "&sk=friends";
      else maybeUrl += "/friends";

      utils.get(maybeUrl, ctx.jar)
      .then(function(res) {
        // Hacky way to remove commented out HTML
        html = res.body.split("<!--").join("").split("-->").join("");

        var maybeAllFriends = html.split("AllFriendsAppCollectionPagelet");
        if(maybeAllFriends.length === 1) maybeAllFriends = html.split("FriendsAppCollectionPagelet");
        if(maybeAllFriends.length === 1) return log.error("Couldn't find token on page. Assuming you can't access this person's friends: " + id);

        var token = utils.getFrom(maybeAllFriends[1], "\"token\":\"", "\"");

        var $ = cheerio.load(html);

        var friendsList = $(".uiProfileBlockContent div div div a");
        if(!friendsList) return callback({error: "Couldn't retrieve friends list from " + id + "."});

        var friendsData = [];

        friendsList.map(function(i, v) {
          var res = null;
          try {
            res = JSON.parse($(v).attr("data-gt"));
          } catch(e) {
            return;
          }
          friendsData.push(parseInt(res.engagement.eng_tid));
        });

        var getFriendsFromId = function(lastId, cb) {
          var formFriendsList = mergeWithDefaults({
            data: {
              collection_token: token,
              cursor: new Buffer("0:not_structured:" + lastId).toString('base64'),
              tab_key:"friends",
              profile_id:id,
              overview:false,
              sk:"friends"
            }
          });

          utils.get("https://www.facebook.com/ajax/pagelet/generic.php/AllFriendsAppCollectionPagelet", ctx.jar, formFriendsList)
          .then(utils.parseResponse)
          .then(function(resData) {
            var nextBatch = resData.jsmods.require.filter(function(v) {
              return v[0] === "AddFriendButton";
            }).map(function(v) {
              return v[3][1];
            });

            if(nextBatch.length === 0) {
              return cb(null, []);
            }

            setTimeout(function() {
              getFriendsFromId(parseInt(nextBatch[nextBatch.length - 1]), function(err, data) {
                cb(err, nextBatch.concat(data));
              });
            }, 100);
          });
        };

        var lastId = parseInt(friendsData[friendsData.length-1]);

        getFriendsFromId(lastId, function(err, data) {
          callback(err, friendsData.concat(data));
        });
      });
    })
    .catch(function(err) {
      log.error("Error in getFriendsList", err);
      return callback(err);
    });
  };
};