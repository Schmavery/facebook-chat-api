// hashmap: chatid -> hashmap: username -> score
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
    var response = "";
    var textFunctions = [salute, weekendText, addScore, score, runScript, sexxiBatman, bees, ping, xkcdSearch, albert, arbitraryLists, slap, topScore, chatbot, hello];
    for (var i = 0; i < textFunctions.length; i++) {
        var res = (textFunctions[i])(message);
        if (res && res.length > 0) response += res;
    }
    return response;
};

var slap = function(msg) {
    var myRegexp = /^\/(slap\s*.*)/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;

    var arr = match[1].trim().toLowerCase();
    var list = arr.split(/\s+/);
    if(list.length === 1) return currentOtherUsernames[~~(currentOtherUsernames.length * Math.random())] + " just got slapped.";

    var name = list[1];
    var exists = currentOtherUsernames.filter(function(v) {return v === name;}).length === 1;

    return name + " just got slapped." + (Math.random() > 0.5 ? " Hard.": "");
};

var weekendText = function(msg) {
    var myRegexp = /is it (weekend)\s?\?/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var today = new Date();
    return (today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
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
    }
};

var salute = function(msg) {
    var myRegexp = /general\s+(\w+)/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;

    var general = match[1].trim().toLowerCase();
    general = general.charAt(0).toUpperCase() + general.slice(1);
    return ("*salute* General " + general);
};

var score = function(msg) {
    var myRegexp = /^\/score([\w .\-]*)$/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var name = match[1].trim().toLowerCase();
    if (name.length < 1) {name = currentUsername;}
    if (!contains(currentOtherUsernames, name)) {return "who?";}
    var pts = currentChat.scores[name] ? currentChat.scores[name] : 0;
    return ("" + name + " has " + pts + " points");
};

var albert = function(msg) {
    var myRegexp = /^\/albert$/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var k =  "\n         ,---,_          ,\n          _>   `'-.  .--'/\n     .--'` ._      `/   <_\n      >,-' ._'.. ..__ . ' '-.\n   .-'   .'`         `'.     '.\n    >   / >`-.     .-'< \\ , '._\\\n   /    ; '-._>   <_.-' ;  '._>\n   `>  ,/  /___\\ /___\\  \\_  /\n   `.-|(|  \\o_/  \\o_/   |)|`\n       \\;        \\      ;/\n         \\  .-,   )-.  /\n          /`  .'-'.  `\\\n         ;_.-`.___.'-.;\n";
return k;
};

var runScript = function(msg) {
    var myRegexp = /^\/run\s+((.|\n)+)$/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var script = match[1].trim().toLowerCase();
    script = replaceAll("&nbsp;", " ", script);
    script = replaceAll("&lt;", "<", script);
    script = replaceAll("&gt;", ">", script);

    var response = "";
    var say = function(msg) { response += msg; };

    try {
        eval(script);
    } catch (e) {
        return ("Learn to code already, " + e.message.split('\n')[0]);
    }
    return (response);
};

var bees = function(msg) {
    if (msg.indexOf("bees") > -1) {
        return "http://cdn.gifstache.com/2012/7/19/gifstache.com_893_1342731571.gif";
    }
    return "";
};

var sexxiBatman = function(msg) {
    if (msg.match(/[Ww]anna make some trouble[\s\t]*\?/)) {
        return "http://99gifs.com/-img/514e8830afa96f09940128f8.gif";
    }
    return "";
};

var ping = function(msg) {
    var myRegexp = /^\/ping$/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    return "pong";
};

var xkcdSearch = function(msg) {
    var myRegexp = /^\/xkcd\s+(.+)/i;
    var match = myRegexp.exec(msg);
    if (!match || match.length < 1) return;
    var search = match[1].trim().toLowerCase().replace(/ /g, "+");
    var searchUrl = "http://www.ohnorobot.com/index.pl?s=" + search + "&lucky=Let+the+Robot+Decide%21&comic=56";
    return searchUrl;
    //http://www.ohnorobot.com/index.pl?s=exploits+of+a+mom&lucky=Let+the+Robot+Decide%21&comic=56
};

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
    return data;
};

var arbitraryLists = function (msg) {
  var myRegexp = /^\/(list\s*.*)/i;
  var match = myRegexp.exec(msg);
  if (!match || match.length < 1) return;

  var list = match[1].trim().toLowerCase();
  var arr = list.split(/\s+/);
  if(arr.length === 1) return "Existing Lists: \n" + Object.keys(currentChat.lists).join("\n");

  var keyword = arr[1];
  var listName = arr.length > 2 ? arr[2] : "";
  if(keyword === 'new') {
    if(listName.length > 0) {
      currentChat.lists[listName] = [];
      return listName + " created.";
    }
  } else if (keyword === 'delete') {
    if(listName.length > 0) {
      delete currentChat.lists[listName];
      return listName + " deleted.";
    }
  } else if (keyword === 'add') {
    if(listName.length > 0 && arr.length > 3) {
      if (!currentChat.lists[listName]) {
        return "No list of name '"+listName+"' exists.";
      }
      currentChat.lists[listName].push(arr.slice(3).join(' '));
      return "Added element to " + listName + ".";
    }
  } else if (currentChat.lists[keyword]) {
    return keyword + ": \n" + currentChat.lists[keyword].join("\n");
  }

  return "Usage:\n /list \n /list list-name\n /list new list-name \n /list delete list-name \n /list add list-name new-element";
};

var topScore = function(msg) {
  var myRegexp = /^\/(topscore)$/i;
  var match = myRegexp.exec(msg);
  if (!match || match.length < 1) return;
  var max = -1;
  var maxName = "";
  for (var i = 0; i < currentOtherUsernames.length; i++) {
    var score = currentChat.scores[currentOtherUsernames[i]] ? currentChat.scores[currentOtherUsernames[i]] : 0;
    if (score > max) {
      max = score;
      maxName = currentOtherUsernames[i];
    }
  }
  return "Top Score: " + maxName+ ", with "+max+" points.";
};

var hello = function(msg) {
    var myRegexp = /^([Hh]ey\s+[Mm]arc)$/i;
  var match = myRegexp.exec(msg);
  if (!match || match.length < 1) return;
  var arr = ["Sup", "Hey :D", "hey", "Me?", "yes?"];
  return arr[~~(arr.length * Math.random())];
};

var chatbot = function(msg) {
  var myRegexp = /(chat ?bot)/i;
  var match = myRegexp.exec(msg);
  if (!match || match.length < 1) return;
  var items = ["Are you talking about me?", "I am a chat bot.", "Pick me, pick me!"];
  return items[Math.floor(Math.random()*items.length)];
};

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
