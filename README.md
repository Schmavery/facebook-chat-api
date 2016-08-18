# Quick Start Guide
Facebook now has an official API for chat bots [here](https://developers.facebook.com/docs/messenger-platform).
This API is still the only way to automate chat functionalities on a user account. We do this by emulating the browser. This means doing the exact same GET/POST requests and tricking Facebook into thinking we're accessing the website normally. Because we're doing it this way, this API won't work with an auth token but requires the credentials of a Facebook account.

_Disclaimer_: We are not responsible if your account gets banned for spammy activities such as sending lots of messages to people you don't know, sending messages very quickly, sending spammy looking URLs, logging in and out very quickly... Be responsible Facebook citizens.

See [below](#projects) for projects using this API.

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

## Documentation

* [`login`](DOCS.md#login)
* [`api.addUserToGroup`](DOCS.md#addUserToGroup)
* [`api.changeArchivedStatus`](DOCS.md#changeArchivedStatus)
* [`api.changeGroupImage`](DOCS.md#changeGroupImage)
* [`api.changeThreadColor`](DOCS.md#changeThreadColor)
* [`api.changeThreadEmoji`](DOCS.md#changeThreadEmoji)
* [`api.changeNickname`](DOCS.md#changeNickname)
* [`api.deleteMessage`](DOCS.md#deleteMessage)
* [`api.deleteThread`](DOCS.md#deleteThread)
* [`api.getAppState`](DOCS.md#getAppState)
* [`api.getCurrentUserID`](DOCS.md#getCurrentUserID)
* [`api.getFriendsList`](DOCS.md#getFriendsList)
* [`api.getThreadHistory`](DOCS.md#getThreadHistory)
* [`api.getThreadInfo`](DOCS.md#getThreadInfo)
* [`api.getThreadList`](DOCS.md#getThreadList)
* [`api.getUserID`](DOCS.md#getUserID)
* [`api.getUserInfo`](DOCS.md#getUserInfo)
* [`api.handleMessageRequest`](DOCS.md#handleMessageRequest)
* [`api.listen`](DOCS.md#listen)
* [`api.logout`](DOCS.md#logout)
* [`api.markAsRead`](DOCS.md#markAsRead)
* [`api.muteThread`](DOCS.md#muteThread)
* [`api.removeUserFromGroup`](DOCS.md#removeUserFromGroup)
* [`api.searchForThread`](DOCS.md#searchForThread)
* [`api.sendMessage`](DOCS.md#sendMessage)
* [`api.sendTypingIndicator`](DOCS.md#sendTypingIndicator)
* [`api.setOptions`](DOCS.md#setOptions)
* [`api.setTitle`](DOCS.md#setTitle)

## Main Functionality

### Sending a message
#### api.sendMessage(message, threadID, [callback])

Various types of message can be sent:
* *Regular:* set field `body` to the desired message as a string.
* *Sticker:* set a field `sticker` to the desired sticker ID.
* *File or image:* Set field `attachment` to a readable stream or an array of readable streams.
* *URL:* set a field `url` to the desired URL.

Note that a message can only be a regular message (which can be empty) and optionally one of the following: a sticker, an attachment or a url.

__Tip__: to find your own ID, you can look inside the cookies. The `userID` is under the name `c_user`.

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

Listen watches for messages sent in a chat. By default this won't receive events (joining/leaving a chat, title change etc...) but it can be activated with `api.setOptions({listenEvents: true})`. This will by default ignore messages sent by the current account, you can enable listening to your own messages with `api.setOptions({selfListen: true})`.

__Example__

```js
// Simple echo bot. He'll repeat anything that you say.
// Will stop when you say '/stop'

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});

    var stopListening = api.listen(function(err, event) {
        if(err) return console.error(err);

        switch(event.type) {
          case "message":
            if(event.body === '/stop') {
              api.sendMessage("Goodbye...", event.threadID);
              return stopListening();
            }
            api.markAsRead(event.threadID, function(err) {
              if(err) console.log(err);
            });
            api.sendMessage("TEST BOT: " + event.body, event.threadID);
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
>For tests, create a `test-config.json` file that resembles `example-config.json` and put it in the `test` directory. From the root >directory, run `npm test`.

2. Why doesn't `sendMessage` always work when I'm logged in as a page?
>Pages can't start conversations with users directly; this is to prevent pages from spamming users.

3. What do I do when `login` doesn't work?
>First check that you can login to Facebook using the website. If login approvals are enabled, you might be logging in incorrectly. For how to handle login approvals, read our docs on [`login`](DOCS.md#login).

4. How can I avoid logging in every time?  Can I log into a previous session?
>We support caching everything relevant for you to bypass login. `api.getAppState()` returns an object that you can save and
>pass into login as `{appState: mySavedAppState}` instead of the credentials object.  If this fails, your session has expired.

5. Do you support sending messages as a page?
> Yes, set the pageID option on login (this doesn't work if you set it using api.setOptions, it affects the login process).
> ```js
> login(credentials, {pageID: xxxxx}, function(api) { ... }
> ```

6. I'm getting some crazy weird syntax error like `SyntaxError: Unexpected token [`!!!
> Please try to update your version of node.js before submitting an issue of this nature.  We like to use new language features.

<a name="projects" />
## Projects using this API
- [Kassy](https://github.com/mrkno/Kassy) - Kassy is a modular, easily extensible general purpose chat bot
- [Marc Zuckerbot](https://github.com/bsansouci/marc-zuckerbot) - Facebook chat bot
- [Marc Thuckerbot](https://github.com/bsansouci/lisp-bot) - Programmable lisp bot
- [MarkovsInequality](https://github.com/logicx24/MarkovsInequality) - Extensible chat bot adding useful functions to Facebook Messenger
- [AllanBot](https://github.com/AllanWang/AllanBot-Public) - Extensive module that combines the facebook api with firebase to create numerous functions; no coding experience is required to implement this.
- [Larry Pudding Dog Bot](https://github.com/Larry850806/facebook-chat-bot) - A facebook bot you can easily customize the response
- [fbash](https://github.com/avikj/fbash) - Run commands on your computer's terminal over Facebook Messenger
