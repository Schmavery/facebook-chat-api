# Quick Start Guide
The Official Facebook Chat API uses XMPP and is deprecated as of April 30th 2015. This is a non-official API that doesn't use XMPP.
As of right now, the only way to automate the chat functionalities is to emulate the browser. This means doing the exact same GET/POST requests and tricking Facebook into thinking we're accessing the website normally. Because we're doing it this way, this API won't work with an auth token but requires the credentials of a Facebook account.

_Side note_: if you want a larger example you should head over to [Marc Zuckerbot](https://github.com/bsansouci/marc-zuckerbot)

## Install
```bash
npm install facebook-chat-api
```

## Example Usage
```javascript
var login = require("facebook-chat-api");

// Create simple echo bot
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        api.sendMessage(message.body, message.threadID);
    });
});
```

## Main functionality

### Sending a message
#### api.sendMessage(message, threadID, [callback])

Various types of message can be sent:
* *Regular:* set field `body` to the desired message as a string.
* *Sticker:* set a field `sticker` to the desired sticker ID.
* *File or image:* Set field `attachment` to a readable stream or an array of readable streams.
* *URL:* set a field `url` to the desired URL.

Note that a message can only be a regular message (which can be empty) and optionally one of the following: a sticker, an attachment or a url.

__Tip__: to find your own ID, go to your own profile on Facebook and replace 'www' by 'graph' in the URL.

__Example (Basic Message)__
```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    var yourID = 0000000000000;
    var msg = {body: "Hey!"};
    api.sendMessage(msg, yourID);
});
```

__Example (File upload)__
```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    // Note this example uploads an image called image.jpg
    var yourID = 0000000000000;
    var msg = {
      body: "Hey!",
      attachment: fs.createReadStream(__dirname + '/image.jpg')
    }
    api.sendMessage(msg, yourID);
});
```

------------------------------------

### Listening to a chat
#### api.listen(callback)

Listen watches for messages sent in a chat. By default this won't receive events (joining/leaving a chat, title change etc...) but it can be activated with `api.setOptions({listenEvents: true})`.

__Example__

```js
// Simple echo bot. He'll repeat anything that you say.
// Will stop when you say '/stop'

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});

    api.listen(function(err, event, stopListening) {
        if(err) return console.error(err);

        switch(event.type) {
          case "message":
            if(event.body === '/stop') {
              api.sendMessage("Goodbye...", event.thread_id);
              return stopListening();
            }
            api.markAsRead(event.thread_id, function(err) {
              if(err) console.log(err);
            });
            api.sendMessage("TEST BOT: " + event.body, event.thread_id);
            break;
          case "event":
            console.log(event);
            break;
        }
    });
});
```

## FAQS

1. How do I run tests?

For tests, create a `test-config.json` file that resembles `example-config.json` and put it in the `test` directory. From the root directory, run `npm test`.

2. Why doesn't `sendMessage` always work when I'm logged in as a page?
Pages can't start conversations with users directly; this is to prevent pages from spamming users.

3. What do I do when `login` doesn't work?
First check that you can login to Facebook using the website or app. If login approvals are enabled, you might be logging in incorrectly. For how to handle 2-factor auth, read our docs on [`login`](DOCS.md#login).


You can find all of our documentation [here](DOCS.md).