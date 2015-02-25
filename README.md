# Facebook Chat API

## Install:
```bash
npm i
```

## Usage:
```javascript
var login = require("./facebook-chat-api");

// Create simple echo bot
login("config.json", function(api) {
  api.listen(function callback(message, logout){
    api.sendMessage(message.body, message.thread_id);
  });
});

```
