# Documentation

* [`login`](#login)
* [`api.addUserToGroup`](#addUserToGroup)
* [`api.changeArchivedStatus`](#changeArchivedStatus)
* [`api.changeGroupImage`](#changeGroupImage)
* [`api.changeThreadColor`](#changeThreadColor)
* [`api.changeThreadEmoji`](#changeThreadEmoji)
* [`api.changeNickname`](#changeNickname)
* [`api.deleteMessage`](#deleteMessage)
* [`api.getAppState`](#getAppState)
* [`api.getCurrentUserID`](#getCurrentUserID)
* [`api.getFriendsList`](#getFriendsList)
* [`api.getThreadHistory`](#getThreadHistory)
* [`api.getThreadInfo`](#getThreadInfo)
* [`api.getThreadList`](#getThreadList)
* [`api.deleteThread`](#deleteThread)
* [`api.getUserID`](#getUserID)
* [`api.getUserInfo`](#getUserInfo)
* [`api.handleMessageRequest`](#handleMessageRequest)
* [`api.listen`](#listen)
* [`api.logout`](#logout)
* [`api.markAsRead`](#markAsRead)
* [`api.muteThread`](#muteThread)
* [`api.removeUserFromGroup`](#removeUserFromGroup)
* [`api.searchForThread`](#searchForThread)
* [`api.sendMessage`](#sendMessage)
* [`api.sendTypingIndicator`](#sendTypingIndicator)
* [`api.setOptions`](#setOptions)
* [`api.setTitle`](#setTitle)

---------------------------------------

<a name="login"/>
### login(credentials, [options], callback)

This function is returned by `require(...)` and is the main entry point to the API.

It allows the user to log into facebook given the right credentials.

If it succeeds, `callback` will be called with a `null` object (for potential errors) and with an object containing all the available functions.

If it fails, `callback` will be called with an error object.

__Arguments__

* `credentials`: An object containing the fields `email` and `password` used to login, __*or*__ an object containing the field `appState`.
* `options`: An object representing options to use when logging in (as described in [api.setOptions](#setOptions)).
* `callback(err, api)`: A callback called when login is done (successful or not). `err` is an object containing a field `error`.

__Example (Email & Password)__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
    // Here you can use the api
});
```

__Example (Email & Password then save appState to file)__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});
```

__Example (AppState loaded from file)__

```js
login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, function callback (err, api) {
    if(err) return console.error(err);
    // Here you can use the api
});
```

__Login Approvals (2-Factor Auth)__: When you try to login with Login Approvals enabled, your callback will be called with an error `'login-approval'` that has a `continue` function that accepts the approval code as a `string` or a `number`.

__Example__:

```js
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

login(obj, function(err, api) {
  if(err) {
    switch (err.error) {
      case 'login-approval':
        console.log('Enter code > ');
        rl.on('line', function(line){
          err.continue(line);
          rl.close();
        });
        break;
    }
    return;
  }

  // Logged in!
}
```

__Review Recent Login__: Sometimes Facebook will ask you to review your recent logins. This means you've recently logged in from a unrecognized location. This will will result in the callback being called with an error `'review-recent-login'` by default. If you wish to automatically approve all recent logins, you can set the option `forceLogin` to `true` in the `loginOptions`.


---------------------------------------

<a name="addUserToGroup" />
### api.addUserToGroup(userID, threadID, [callback])

Adds a user (or array of users) to a group chat.

__Arguments__

* `userID`: User ID or array of user IDs.
* `threadID`: Group chat ID.
* `callback(err)`: A callback called when the query is done (either with an error or with no arguments).

---------------------------------------

<a name="changeArchivedStatus" />
### api.changeArchivedStatus(threadOrThreads, archive, [callback])

Given a threadID, or an array of threadIDs, will set the archive status of the threads to `archive`. Archiving a thread will hide it from the logged-in user's inbox until the next time a message is sent or received.

__Arguments__
* `threadOrThreads`: The id(s) of the threads you wish to archive/unarchive.
* `archive`: Boolean indicating the new archive status to assign to the thread(s).
* `callback(err)`: A callback called when the query is done (either with an error or null).

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.changeArchivedStatus("0000000000000", true, function callback(err) {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="changeGroupImage" />
### api.changeGroupImage(image, threadID, [callback])

Will change the group chat's image to the given image.

__Arguments__
* `image`: File stream of image.
* `threadID`: String representing the ID of the thread.
* `callback(err)`: A callback called when the change is done (either with an error or null).

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.changeGroupImage(fs.createReadStream("./avatar.png"), "0000000000000", function callback(err) {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="changeThreadColor" />
### api.changeThreadColor(color, threadID, [callback])

Will change the thread color to the given hex string color ("#0000ff"). Set it
to empty string if you want the default.

Note: the color needs to start with a "#".

__Arguments__
* `color`: String representing a hex color code (eg: "#0000ff") preceded by "#".
* `threadID`: String representing the ID of the thread.
* `callback(err)`: A callback called when the change is done (either with an error or null).

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.changeThreadColor("#0000ff", "0000000000000", function callback(err) {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="changeThreadEmoji" />
### api.changeThreadEmoji(emoji, threadID, [callback])

Will change the thread emoji to the one provided.

Note: The UI doesn't play nice with all emoji.

__Arguments__
* `emoji`: String containing a single emoji character.
* `threadID`: String representing the ID of the thread.
* `callback(err)`: A callback called when the change is done (either with an error or null).

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.changeThreadEmoji("💯", "0000000000000", function callback(err) {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="changeNickname" />
### api.changeNickname(nickname, threadID, participantID, [callback])

Will change the thread user nickname to the one provided.

__Arguments__
* `nickname`: String containing a nickname. For reset of nickname left it empty
* `threadID`: String representing the ID of the thread.
* `participantID`: String representing the ID of the user.
* `callback(err)`: An optional callback called when the change is done (either with an error or null).

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.changeNickname("Example", "0000000000000", "0000000000000", function callback(err) {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="deleteMessage" />
### api.deleteMessage(messageOrMessages, [callback])

Takes a messageID or an array of messageIDs and deletes the corresponding message.

__Arguments__
* `messageOrMessages`: A messageID string or messageID string array
* `callback(err)`: A callback called when the query is done (either with an error or null).

__Example__
```js
api.listen(function callback(err, message) {
  if(message.body) {
    api.sendMessage(message.body, message.threadID, function(error, messageInfo) {
      api.deleteMessage(messageInfo.messageID);
    });
  }
});
```

---------------------------------------

<a name="getAppState" />
### api.getAppState()

Returns current appState which can be saved to a file or stored in a variable.

---------------------------------------

<a name="getCurrentUserID" />
### api.getCurrentUserID()

Returns the currently logged-in user's Facebook user ID.

---------------------------------------

<a name="getFriendsList" />
### api.getFriendsList(callback)

Returns an array of objects with some information about your friends.

__Arguments__

* `callback(err, arr)` - A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array of objects with the following fields: `alternateName`, `firstName`, `gender`, `userID`, `isFriend`, `fullName`, `profilePicture`, `type`, `profileUrl`, `vanity`, `isBirthday`.

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
  if(err) return console.error(err);

  api.getFriendsList(function(err, data) {
    if(err) return console.error(err);

    console.log(data.length);
  });
});
```

---------------------------------------

<a name="getThreadHistory" />
### api.getThreadHistory(threadID, start, end, timestamp, [callback])

Takes a threadID, start and end numbers, a timestamp, and a callback.

__Arguments__
* `threadID`: A threadID corresponding to the target chat
* `start`: The ith message in the chat from which to start retrieving history.
* `end`: The jth message in the chat to which retrieving history.
* `timestamp`: Used to described the end time. If set, will query messages up to and including `timestamp`.
* `callback(error, history)`: If error is null, history will contain an array of message objects.

---------------------------------------

<a name="getThreadInfo" />
### api.getThreadInfo(threadID, [callback])

Takes a threadID and a callback.  Works for both single-user and group threads.

__Arguments__
* `threadID`: A threadID corresponding to the target thread.
* `callback(error, info)`: If error is null, info will contain participantIDs, name, snippet, messageCount, emoji, nicknames, and color.  The last three will be null if custom values are not set for the thread.

---------------------------------------

<a name="getThreadList" />
### api.getThreadList(start, end, type, callback)

Will return information about threads.

__Arguments__

* `start`: Start index in the list of recently used threads.
* `end`: End index.
* `type`: Optional String, can be 'inbox', 'pending', or 'archived'. Inbox is default.
* `callback(err, arr)`: A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array of thread object containing the following properties: `threadID`, <del>`participants`</del>, `participantIDs`, `formerParticipants`, `name`, `snippet`, `snippetHasAttachment`, `snippetAttachments`, `snippetSender`, `unreadCount`, `messageCount`, `imageSrc`, `timestamp`, `serverTimestamp`, `muteSettings`, `isCanonicalUser`, `isCanonical`, `canonicalFbid`, `isSubscribed`, `rootMessageThreadingID`, `folder`, `isArchived`, `recipientsLoadable`, `hasEmailParticipant`, `readOnly`, `canReply`, `composerEnabled`, `blockedParticipants`, `lastMessageID`.

---------------------------------------

<a name="deleteThread" />
### api.deleteThread(threadOrThreads, [callback])

Given a threadID, or an array of threadIDs, will delete the threads from your account. Note that this does *not* remove the messages from Facebook's servers - anyone who hasn't deleted the thread can still view all of the messages.

__Arguments__

* `threadOrThreads` - The id(s) of the threads you wish to remove from your account.
* `callback(err)` - A callback called when the operation is done, maybe with an object representing an error.

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.deleteThread("0000000000000", function callback(err) {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="getUserID" />
### api.getUserID(name, callback)

Given the full name of a Facebook user, the call will perform a Facebook Graph search and return all corresponding IDs (order determined by Facebook).

__Arguments__

* `name` - A string being the name of the person you're looking for.
* `callback(err, obj)` - A callback called when the search is done (either with an error or with the resulting object). `obj` is an array which contains all of the users that facebook graph search found, ordered by "importance".

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.getUserID("Marc Zuckerbot", function(err, data) {
        if(err) return callback(err);

        // Send the message to the best match (best by Facebook's criteria)
        var threadID = data[0].userID;
        api.sendMessage(msg, threadID);
    });
});
```

---------------------------------------

<a name="getUserInfo" />
### api.getUserInfo(ids, callback)

Will get some information about the given users.

__Arguments__

* `ids` - Either a string/number for one ID or an array of strings/numbers for a batched query.
* `callback(err, obj)` - A callback called when the query is done (either with an error or with an confirmation object). `obj` is a mapping from userId to another object containing the following properties: name, firstName, vanity, thumbSrc, profileUrl, gender, type, isFriend, isBirthday, searchTokens, alternateName.

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.getUserInfo([1, 2, 3, 4], function(err, ret) {
      if(err) return console.error(err);

      for(var prop in ret) {
        if(ret.hasOwnProperty(prop) && ret[prop].isBirthday) {
          api.sendMessage("Happy birthday :)", prop);
        }
      }
    });
});
```

---------------------------------------

<a name="handleMessageRequest" />
### api.handleMessageRequest(threadID, accept, [callback])

Accept or ignore message request(s) with thread id `threadID`.

__Arguments__

* `threadID`: A threadID or array of threadIDs corresponding to the target thread(s). Can be numbers or strings.
* `accept`: Boolean indicating the new status to assign to the message request(s); true for inbox, false to others.
* `callback(err)`: A callback called when the query is done (with an error or with null).

---------------------------------------

<a name="listen" />
### api.listen(callback)

Will call `callback` when a new message is received on this account.
By default this won't receive events (joining/leaving a chat, title change etc...) but it can be activated with `api.setOptions({listenEvents: true})`.  This will by default ignore messages sent by the current account, you can enable listening to your own messages with `api.setOptions({selfListen: true})`. This returns `stopListening` that will stop the `listen` loop and is guaranteed to prevent any future calls to the callback given to `listen`. An immediate call to `stopListening` when an error occurs will prevent the listen function to continue.

__Arguments__

- `callback(error, message)`: A callback called every time the logged-in account receives a new message.

__Message__

If `type` is `message`, the object will contain the following fields:

  + `senderID`: The id of the person who sent the message in the chat with threadID.
  + `body`: The string corresponding to the message that was just received.
  + `threadID`: The threadID representing the thread in which the message was sent.
  + `messageID`: A string representing the message ID.
  + `attachments`: An array of attachments to the message.
  + `isGroup`: boolean, true if this thread is a group thread (more than 2 participants).

If `attachments` contains an object with type `"sticker"`, the object will contain the following fields: `url`, `stickerID`, `packID`, `frameCount`, `frameRate`, `framesPerRow`, `framesPerCol`, `spriteURI`, `spriteURI2x`, `height`, `width`, `caption`, `description`.

If `attachments` contains an object with type `"file"`, the object will contain the following fields: `name`, `url`, `ID`, `fileSize`, Malicious`, `mimeType`.

If `attachments` contains an object with type `"photo"`, the object will contain the following fields:
`name`, `hiresUrl`, `thumbnailUrl`, `previewUrl`, `previewWidth`, `previewHeight`, `facebookUrl`, `ID`, `filename`, `mimeType`, `url`, `width`, `height`.

If `attachments` contains an object with type `"animated_image"`, the object will contain the following fields: `name`, `facebookUrl`, `previewUrl`, `previewWidth`, `previewHeight`, `thumbnailUrl`, `ID`, `filename`, `mimeType`, `width`, `height`, `url`, `rawGifImage`, `rawWebpImage`, `animatedGifUrl`, `animatedGifPreviewUrl`, `animatedWebpUrl`, `animatedWebpPreviewUrl`

If `attachments` contains an object with type `"share"`, the object will contain the following fields: `description`, `ID`, `subattachments`, `animatedImageSize`, `width`, `height`, `image`, `playable`, `duration`, `source`, `title`, `facebookUrl`, `url`.

If `attachments` contains an object with type `"video"`, the object will contain the following fields: `filename`, `thumbnailUrl`, `previewUrl`, `previewWidth`, `previewHeight`, `ID`, `url`, `width`, `height`, `duration`.

If enabled through [setOptions](#setOptions), this will also handle events. In this case, `message` will be either a message (see above) or an event object with the following fields:
- `type`: The string `"event"` or `"typ"`
- `threadID`: The threadID representing the thread in which the message was sent.

If `type` is `"event"` then the object will also have those fields:
- `logMessageType`: String representing the type of event (`"log:thread-name"`, `"log:unsubscribe"`, `"log:subscribe"`, ...)
- `logMessageData`: Data relevant to the event.
- `logMessageBody`: String printed in the chat.
- `author`: The person who performed the event.

If `type` is `"typ"` then the object will have the following fields:
- `isTyping`: Boolean representing whether or not a person started typing.
- `from`: ID of the user who started/stopped typing.
- `threadID`: Current threadID.
- `fromMobile`: Boolean representing whether or not the person's using a mobile device to type.

If `type` is `"read_receipt"` then the object will have the following fields:
- `reader`: ID of the user who just read the message.
- `time`: The time at which the reader read the message.
- `threadID`: The thread in which the message was read.

If `type` is `"read"` then the object will have the following fields:
- `threadID`: The threadID representing the thread in which the message was sent.
- `time`: The time at which the user read the message.

Difference between `"read_receipt"` and `"read"`:
- `"read_receipt"` event triggers when other people read the user's messages.
- `"read"` event triggers when the user read other people's messages.

<a name="presence" />
If enabled through [setOptions](#setOptions), this will also return presence, (`type` will be `"presence"`), which is the online status of the user's friends. The object given to the callback will have the following fields:
- `type`: The string "presence".
- `timestamp`: How old the information is.
- `userID`: The ID of the user whose status this packet is describing
- `statuses`: An object with the following fields: `fbAppStatus`, `messengerStatus`, `otherStatus`, `status` and `webStatus`. All can contain any of the following values: `"active"`, `"idle"`, `"invisible"`, `"offline"`.

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

---------------------------------------

<a name="logout" />
### api.logout([callback])

Logs out the current user.

__Arguments__

* `callback(err)`: A callback called when the query is done (either with an error or with null).

---------------------------------------

<a name="markAsRead" />
### api.markAsRead(threadID, [callback])

Given a threadID will mark all the unread messages as read. Facebook will take a couple of seconds to show that you've read the messages.

__Arguments__

* `threadID` - The id of the thread in which you want to mark the messages as read.
* `callback(err)` - A callback called when the operation is done maybe with an object representing an error.

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        // Marks message as read immediately after they're sent
        api.markAsRead(message.threadID);
    });
});
```

---------------------------------------

<a name="muteThread" />
### api.muteThread(threadID, muteSeconds, [callback])

Mute a chat for a period of time, or unmute a chat.

__Arguments__

* `threadID` - The ID of the chat you want to mute.
* `muteSeconds` - Mute the chat for this amount of seconds. Use `0` to unmute a chat. Use '-1' to mute a chat indefinitely.
* `callback(err)` - A callback called when the operation is done maybe with an object representing an error.

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        // Mute all incoming chats for one minute
        api.muteThread(message.threadID, 60);
    });
});
```

---------------------------------------

<a name="removeUserFromGroup" />
### api.removeUserFromGroup(userID, threadID, [callback])

Removes a user from a group chat.

__Arguments__

* `userID`: User ID.
* `threadID`: Group chat ID.
* `callback(err)`: A callback called when the query is done (either with an error or with no arguments).

---------------------------------------

<a name="searchForThread" />
### api.searchForThread(name, callback)

Takes a chat title (thread name) and returns matching results as a formatted threads array (ordered according to Facebook).

__Arguments__
* `name`: A messageID string or messageID string array
* `callback(err, obj)`: A callback called when the query is done (either with an error or a thread object). The object passed in the callback has the following shape: `threadID`, <del>`participants`</del>, `participantIDs`, `formerParticipants`, `name`, `snippet`, `snippetHasAttachment`, `snippetAttachments`, `snippetSender`, `unreadCount`, `messageCount`, `imageSrc`, `timestamp`, `serverTimestamp`, `muteSettings`, `isCanonicalUser`, `isCanonical`, `canonicalFbid`, `isSubscribed`, `rootMessageThreadingID`, `folder`, `isArchived`, `recipientsLoadable`, `hasEmailParticipant`, `readOnly`, `canReply`, `composerEnabled`, `blockedParticipants`, `lastMessageID`

---------------------------------------

<a name="sendMessage" />
### api.sendMessage(message, threadID, [callback])

Sends the given message to the threadID.

__Arguments__

* `message`: A string (for backward compatibility) or a message object as described below.
* `threadID`: A string, number, or array representing a thread. It happens to be someone's userId in the case of a one to one conversation or an array of userIds when starting a new group chat.
* `callback(err, messageInfo)`: A callback called when sending the message is done (either with an error or with an confirmation object). `messageInfo` contains the `threadID` where the message was sent and a `messageID`, as well as the `timestamp` of the message.

__Message Object__:

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

    var yourID = "0000000000000";
    var msg = {body: "Hey!"};
    api.sendMessage(msg, yourID);
});
```

__Example (File upload)__
```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    // Note this example uploads an image called image.jpg
    var yourID = "0000000000000";
    var msg = {
      body: "Hey!",
      attachment: fs.createReadStream(__dirname + '/image.jpg')
    }
    api.sendMessage(msg, yourID);
});
```

---------------------------------------

<a name="sendTypingIndicator" />
### api.sendTypingIndicator(threadID, [callback])

Sends a "USERNAME is typing" indicator to other members of the thread indicated by threadID.  This indication will disappear after 30 second or when the `end` function is called. The `end` function is returned by `api.sendTypingIndicator`.

__Arguments__

* `threadID`: Group chat ID.
* `callback(err)`: A callback called when the query is done (with an error or with null).

---------------------------------------

<a name="setOptions" />
### api.setOptions(options)

Sets various configurable options for the api.

__Arguments__

* `options` - An object containing the new values for the options that you want
  to set.  If the value for an option is unspecified, it is unchanged. The following options are possible.
    - `logLevel`: The desired logging level as determined by npmlog.  Choose
      from either `"silly"`, `"verbose"`, `"info"`, `"http"`, `"warn"`, `"error"`, or `"silent"`.
    - `selfListen`: (Default `false`) Set this to `true` if you want your api
      to receive messages from its own account.  This is to be used with
      caution, as it can result in loops (a simple echo bot will send messages
      forever).
    - `listenEvents`: (Default `false`) Will make [api.listen](#listen) also handle events (look at api.listen for more details).
    - `pageID`: (Default empty) Makes [api.listen](#listen) only receive messages through the page specified by that ID. Also makes `sendMessage` and `sendSticker` send from the page.
    - `updatePresence`: (Default `false`) Will make [api.listen](#listen) also return `presence` ([api.listen](#presence) for more details).
    - `forceLogin`: (Default `false`) Will automatically approve of any recent logins and continue with the login process.

__Example__

```js
// Simple echo bot. This will send messages forever.

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.setOptions({
      selfListen: true,
      logLevel: "silent"
    });

    api.listen(function(err, message, stopListening){
        if(err) return console.error(err);

        api.sendMessage(message.body, message.threadID);
    });
});
```

---------------------------------------

<a name="setTitle" />
### api.setTitle(newTitle, threadID, [callback])

Sets the title of the group chat with thread id `threadID` to `newTitle`.

Note: This will not work if the thread id corresponds to a single-user chat or if the bot is not in the group chat.

__Arguments__

* `newTitle`: A string representing the new title.
* `threadID`: A string or number representing a thread. It happens to be someone's userId in the case of a one to one conversation.
* `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `obj` contains only the threadID where the message was sent.

---------------------------------------
