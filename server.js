var login = require("./facebook-chat-api");
var startBot = require("./bot");

// Little binding to prevent heroku from complaining about port binding
var http = require('http');
http.createServer(function (req, res) {
}).listen(process.env.PORT || 5000);

startBot(function(bot) {
  login(function(api) {
    api.listen(function(message, closeConnection) {
      console.log("Received ->", message);

      var msg = bot(message.body, message.sender_name.split(' ')[0], message.thread_id, message.participant_names);
      console.log("Sending ->", msg);

      if(msg.text && msg.text.length > 0) api.sendMessage(msg.text, message.thread_id);
      if(msg.sticker_id) api.sendMessage('', message.thread_id, msg.sticker_id);
    });
  });
});