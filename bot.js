// hashmap: chatid -> hashmap: username -> score
var chrono = require('chrono-node');

var chats = {};
var currentUsername;
var currentChat;
var currentOtherUsernames;

// messages, username, chat id are Strings, otherUsernmaes is array of Strings
var read = function(message, username, chatid, otherUsernames) {
    var chat = {
        lists: {},
        scores: {}
    };

    if (!chats[chatid]) chats[chatid] = chat;
    else chat = chats[chatid];

    currentChat = chat;
    currentUsername = username.toLowerCase();
    currentOtherUsernames = otherUsernames;
    var textFunctions = [salute, weekendText, addScore, score, sexxiBatman, bees, ping, xkcdSearch, albert, arbitraryLists, slap, topScore, chatbot, sendStickerBigSmall, staticText, reminders];
    for (var i = 0; i < textFunctions.length; i++) {
        var res = textFunctions[i](message);
        if (res) return res;
    }
    return {};
};

var reminders = function(msg) {
  var myRegexp = /hey marc,? (.*)/i;
  var match = myRegexp.exec(msg);
  if(!match || match.length === 0) return;
  var rest = match[1].trim();
  console.log(rest);
  var ret = chrono.parse(rest);
  console.log(ret);
  return {text: JSON.stringify(ret[0].start.date())};
};

var staticText = function(msg) {
    var possibilities = [
        [[/(hey marc$|marc\?)/i],["Sup", "Hey :D", "hey", "Me?", "yes?"]],
        [[/(sup|wassup|what's up|how are you)/i], ["I'm tired", "Not much, you?", "Meh...", "I'm great, how about you?", "What's up with you?", "Nothing much, you?"]],
        [[/(who made you|who's your creator|where do you come from)/i], ["I'm a long story... About 24h long.", "I'm not too sure", "I never really asked myself this question."]],
        [[/(\/sayit)/i], ["David's an idiot"]]
    ];
    for (var i = 0; i < possibilities.length; i++) {
        var possibleMatches = possibilities[i][0];
        for (var j = 0; j < possibleMatches.length; j++) {
            var match = possibleMatches[j].exec(msg);
            if(match && match.length > 0) {
                return {text: randFrom(possibilities[i][1])};
            }
        }
    }
};

var sendStickerBigSmall = function(msg) {
    var possibilities = [
        [[/(small|big)/i], [767334526626290, 767334556626287, 767334506626292]]
    ];
    for (var i = 0; i < possibilities.length; i++) {
        var possibleMatches = possibilities[i][0];
        for (var j = 0; j < possibleMatches.length; j++) {
            var match = possibleMatches[j].exec(msg);
            if(match && match.length > 0) {
                return {sticker_id: randFrom(possibilities[i][1])};
            }
        }
    }
};

// var sendStickerHappy = function(msg) {
//     var myRegexp = /(happy|big)/i;
//     var match = myRegexp.exec(msg);
//     if (!match || match.length < 1) return;

//     var possibilities = [767334526626290, 767334556626287, 767334506626292]
//     return {sticker_id:possibilities[~~(possibilities.length * Math.random())]};
// };

var slap = function(msg) {
    var myRegexp = /^\/(slap\s*.*)/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;

    var arr = match[1].trim().toLowerCase();
    var list = arr.split(/\s+/);
    if(list.length === 1) return currentOtherUsernames[~~(currentOtherUsernames.length * Math.random())] + " just got slapped.";

    var name = list[1];
    if(name === "me") return {text: currentUsername + " just go slapped." + (Math.random() > 0.5 ? " Hard.": "")};

    var exists = currentOtherUsernames.filter(function(v) {return v === name;}).length === 1;

    return {text: name + " just got slapped." + (Math.random() > 0.5 ? " Hard.": "")};
};

var weekendText = function(msg) {
    var myRegexp = /is it (weekend)\s?\?/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var today = new Date();
    return {text: (today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO")};
};

var addScore = function(msg) {
    var myRegexp = /^(.+)\+\+/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var name = match[1].trim().toLowerCase();

    if (name === currentUsername) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
        return (name + ", you can't upvote yourself -_- ");
    }
    if (contains(currentOtherUsernames, name)) {
        var score = (currentChat.scores[name] ? currentChat.scores[name] : 0) + 1;
        currentChat.scores[name] = score;
        return name + "'s score is now " + score;
    }
};

var salute = function(msg) {
    var myRegexp = /general\s+(\w+)/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;

    var general = match[1].trim().toLowerCase();
    general = general.charAt(0).toUpperCase() + general.slice(1);
    return {text: ("*salute* General " + general)};
};

var score = function(msg) {
    var myRegexp = /^\/score([\w .\-]*)$/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var name = match[1].trim().toLowerCase();
    if (name.length < 1) {name = currentUsername;}
    if (!contains(currentOtherUsernames, name)) {return "who?";}
    var pts = currentChat.scores[name] ? currentChat.scores[name] : 0;
    return {text: ("" + name + " has " + pts + " points")};
};

var albert = function(msg) {
    var myRegexp = /^\/albert$/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var k =  "\n         ,---,_          ,\n          _>   `'-.  .--'/\n     .--'` ._      `/   <_\n      >,-' ._'.. ..__ . ' '-.\n   .-'   .'`         `'.     '.\n    >   / >`-.     .-'< \\ , '._\\\n   /    ; '-._>   <_.-' ;  '._>\n   `>  ,/  /___\\ /___\\  \\_  /\n   `.-|(|  \\o_/  \\o_/   |)|`\n       \\;        \\      ;/\n         \\  .-,   )-.  /\n          /`  .'-'.  `\\\n         ;_.-`.___.'-.;\n";
return {text: k};
};

var bees = function(msg) {
    if (msg.indexOf("bees") > -1) {
        return {text: "http://cdn.gifstache.com/2012/7/19/gifstache.com_893_1342731571.gif"};
    }
};

var sexxiBatman = function(msg) {
    if (msg.match(/[Ww]anna make some trouble[\s\t]*/)) {
        return {text: "http://99gifs.com/-img/514e8830afa96f09940128f8.gif"};
    }
};

var ping = function(msg) {
    var myRegexp = /^\/ping$/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    return {text: "pong"};
};

var xkcdSearch = function(msg) {
    var myRegexp = /^\/xkcd\s+(.+)/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var search = match[1].trim().toLowerCase().replace(/ /g, "+");
    var searchUrl = "http://derp.co.uk/xkcd/page?q=" + search + "&search=Search";
    return {text: "Find relevant xkcds here: " + searchUrl};

    // var searchUrl = "http://derp.co.uk/xkcd/page?q=" + search + "&search=Search"
    
    // var options = {
    //     host: 'derp.co.uk',
    //     port: 80,
    //     path: 'xkcd/page?q=' + search + "&search=Search"
    // };

    // var sequence = Futures.sequence();

    // sequence.then(function(next) {
    //     http.get(options, function(data) {
    //         console.log(data);
    //         //return data;
    //     }).on('error', function(error) {
    //         console.log("ERROR");
    //         //return "Error obtaining relevant xkcd";
    //     });
    // });

    //http://www.ohnorobot.com/index.pl?s=exploits+of+a+mom&lucky=Let+the+Robot+Decide%21&comic=56
};

// var giphySearch = function(msg) {
//     var data = "";
//     if(msg.indexOf("giphy") > -1) {
//         var strippedString = msg.replace(/^\s+|\s+$/g, '');
//         strippedString = strippedString.replace("giphy", '');

//         var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//         var request = new XMLHttpRequest();
//         request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+strippedString, false);

//         request.onload = function() {
//             if (request.status >= 200 && request.status < 400){
//                 data = JSON.parse(request.responseText).data.image_url;
//                 return data;
//             } else {
//                 return "No gif for this search result.";
//             }
//         };

//         request.onerror = function() {
//             console.log('Connection error');
//         };

//         request.send(null);
//         console.log("request sent");
//     }
//     return {text: data};
// };

var giphySearch = function(msg) {
    var data = "";
    if(msg.indexOf("giphy") > -1) {
        var strippedString = msg.replace(/^\s+|\s+$/g, '');
        strippedString = strippedString.replace("giphy", '');

        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var request = new XMLHttpRequest();
        request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+strippedString, false);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400){
                data = JSON.parse(request.responseText).data.image_url;
                console.log(data);
                return data;
            } else {
                return "No gif for this search result.";
            }
        };

        request.onerror = function() {
            console.log('Connection error');
        };

        request.send(null);
        console.log("request sent");
    }
};

var arbitraryLists = function (msg) {
  var myRegexp = /^\/(list\s*.*)/i;
  var match = myRegexp.exec(msg);
  if (!match || match.length < 1) return;

  var list = match[1].trim().toLowerCase();
  var arr = list.split(/\s+/);
  if(arr.length === 1) return {text: "Existing Lists: \n" + Object.keys(currentChat.lists).join("\n")};

  var keyword = arr[1];
  var listName = arr.length > 2 ? arr[2] : "";
  if(keyword === 'new') {
    if(listName.length > 0) {
      currentChat.lists[listName] = [];
      return {text: listName + " created."};
    }
  } else if (keyword === 'delete') {
    if(listName.length > 0) {
      delete currentChat.lists[listName];
      return {text: listName + " deleted."};
    }
  } else if (keyword === 'add') {
    if(listName.length > 0 && arr.length > 3) {
      if (!currentChat.lists[listName]) {
        return {text: "No list of name '"+listName+"' exists."};
      }
      currentChat.lists[listName].push(arr.slice(3).join(' '));
      return {text: "Added element to " + listName + "."};
    }
  } else if (currentChat.lists[keyword]) {
    return {text: keyword + ": \n" + currentChat.lists[keyword].join("\n")};
  }

  return {text: "Usage:\n /list \n /list list-name\n /list new list-name \n /list delete list-name \n /list add list-name new-element"};
};

var topScore = function(msg) {
  var myRegexp = /^\/(topscores?)$/i;
  var match = myRegexp.exec(msg);
  if (!match || match.length < 1) return;
  var max = -1;
  var maxName = "";
  for (var i = 0; i < currentOtherUsernames.length; i++) {
    var score = currentChat.scores[currentOtherUsernames[i].toLowerCase()] ? currentChat.scores[currentOtherUsernames[i].toLowerCase()] : 0;
    if (score > max) {
      max = score;
      maxName = currentOtherUsernames[i];
    }
  }
  return {text: "Top Score: " + maxName+ ", with "+max+" points."};
};

var chatbot = function(msg) {
  var myRegexp = /((chat)? ?bots?)/i;
  var match = myRegexp.exec(msg);
  if (!match || match.length < 1) return;
  var items = ["Are you talking about me?", "I am a chat bot.", "Pick me, pick me!"];
  return {text: items[Math.floor(Math.random()*items.length)]};
};
function randFrom(arr) {
    return arr[~~(arr.length * Math.random())];
}
function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}
function contains(array, obj) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i].toLowerCase() === obj) return true;
    }
    return false;
}

module.exports = read;
