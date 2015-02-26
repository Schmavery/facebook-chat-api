# Facebook Chat API

## Install:
```bash
npm install facebook-chat-api
```

## Usage:
```javascript
var login = require("facebook-chat-api");

// Create simple echo bot
login("config.json", function(api) {
  api.listen(function callback(message, logout){
    api.sendMessage(message.body, message.thread_id);
  });
});

```
