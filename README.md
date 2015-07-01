# Facebook Chat API
The Official Facebook Chat API uses XMPP and is going to be deprecated as of April 30th 2015. This is a non-official API that doesn't use XMPP.

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
        api.sendMessage(message.body, message.thread_id);
    });
});


```


## Documentation
* [`login`](#login)
* [`api.listen`](#listen)
* [`api.setOptions`](#setOptions)
* [`api.getUserId`](#getUserId)
* [`api.sendMessage`](#sendMessage)
* [`api.markAsRead`](#markAsRead)
* [`api.sendSticker`](#sendSticker)
* [`api.setTitle`](#setTitle)
* [`api.getUserInfo`](#getUserInfo)
* [`api.getFriendsList`](#getFriendsList)
* [`api.getThreadList`](#getThreadList)
* [`api.getAccessToken`](#getAccessToken)
* [`api.addUserToGroup`](#addUserToGroup)
* [`api.removeUserFromGroup`](#removeUserFromGroup)

## &#9888; Deprecated &#9888;
* [`api.sendDirectMessage`](#sendDirectMessage)
* [`api.sendDirectSticker`](#sendDirectSticker)

---------------------------------------

<a name="login" />
### login(emailAndPassword, [options], callback)

This function is returned by require(...) and is the main entry point to the API. 

Logs into facebook given the right credentials.

If it succeeds, callback will be called with a null object (for potential errors) and with an object containing all the available functions.

If it fails, callback will be called with an error object.

__Arguments__

* `emailAndPassword` - An object containing the fields `email` and `password` used to login.
* `options` - An object representing options to use when logging in (as described in [api.setOptions](#setOptions)).
* `callback(err, api)` - A callback called when login is done (successful or not). `err` is an object containing a field `error`.

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
    // Here you can use the api
});
```


---------------------------------------

<a name="listen" />
### api.listen(callback)

Will call callback when a new message it received on this account. 
By default this won't receive events (joining/leaving a chat, title change etc...) but it can be activated with `api.setOptions({listenEvents: true})`.

__Arguments__

- `callback(error, message, stopListening)` - A callback called every time the logged-in account receives a new message. `stopListening` is a function that will stop the `listen` loop and is guaranteed to prevent any future calls to the callback given to `listen`. An immediate call to `stopListening` when an error occurs will prevent the listen function to continue. `message` is an object containing the following fields:
    * `sender_name` - First and last name of the person who just sent the message.
    * `sender_id` - The id of the person who sent the message in the chat with thread_id.
    * `participant_ids` - An array containing the ids of everyone in the thread (sender included).
    * `participant_names` - An array containing only the first names of the other participants in the thread (sender included).
    * `body` - The string corresponding to the message that was just received.
    * `thread_id` - The thread_id representing the thread in which the message was sent.
    * `coordinates` - An object containing `latitude`, `longitude`, and `accuracy`.
    * `type` - The string `"message"` or `"sticker"`

If `type` is `"sticker"` there will be a `sticker_id` and `sticker_url` field instead of `body`.

If enabled this will also handle events. In this case, `message` will be either a message (see above) or an event object with the following fields
- `type` - The string `"event"`
- `thread_id` - The thread_id representing the thread in which the message was sent.
- `log_message_type` - String representing the type of event (`"log:thread-name"`, `"log:unsubscribe"`, `"log:subscribe"`, ...)
- `log_message_data` - Data relevant to the event.
- `log_message_body` - String printed in the chat.
- `author` - The person who performed the event.

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

---------------------------------------

<a name="setOptions" />
### api.setOptions(options)

Sets various configurable options for the api.

__Arguments__

* `options` - An object containing the new values for the options that you want
  to set.  If the value for an option is unspecified, it is unchanged. The following options are possible.
    - `logLevel` - The desired logging level as determined by npmlog.  Choose
      from either `"silly"`, `"verbose"`, `"info"`, `"http"`, `"warn"`, `"error"`, or `"silent"`.
    - `selfListen` - (Default `false`) Set this to `true` if you want your api
      to receive messages from its own account.  This is to be used with
      caution, as it can result in loops (a simple echo bot will send messages
      forever).
    - `listenEvents` - (Default `false`) Will make api.listen also handle events.
    - `pageId` - (Default empty) Makes listen only receive messages through the page specified by that ID. Also makes sendMessage and sendSticker send from the page.

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

        api.sendMessage(message.body, message.thread_id);
    });
});
```

---------------------------------------

<a name="getUserId" />
### api.getUserId(name, callback)

Given a person's full name will do a Facebook Graph search and return all the ids ordered by however Facebook wants to order them.

__Arguments__

* `name` - A string being the name of the person you're looking for.
* `callback(err, obj)` - A callback called when the search is done (either with an error or with the resulting object). `obj` is an array which contains all of the users that facebook graph search found, ordered by "importance".

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
    
    api.getUserId("Marc Zuckerbot", function(err, data) {
        if(err) return callback(err);
        
        // Send the message to the best match (best by Facebook's criteria)
        var thread_id = data[0].uid;
        api.sendMessage(msg, thread_id);
    });
});
```

---------------------------------------

<a name="sendMessage" />
### api.sendMessage(message, thread_id, [callback])

Sends the given message to the thread_id.

__Arguments__

* `message` - A string being the message to be sent to the given thread_id.
* `thread_id` - A string or number representing a thread. It happens to be someone's userId in the case of a one to one conversation. 
* `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `obj` contains only the thread_id where the message was sent.

__Tip__: to find your own ID, go to your own profile on Facebook and replace 'www' by 'graph' in the URL.

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
    
    var yourID = 0000000000000;
    api.sendMessage("Hey!", yourID);
});
```

---------------------------------------

<a name="markAsRead" />
### api.markAsRead(thread\_id, callback)

Given a thread_id will mark all the unread messages as read. Facebook will take a couple of seconds to show that you've read the messages.

__Arguments__

* `thread_id` - The id of the thread in which you want to mark the messages as read.
* `callback(err)` - A callback called when the operation is done maybe with an object representing an error.

__Example__

```js
var login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
  
    api.listen(function callback(err, message) {
        // Marks message as read immediately after they're sent
        api.markAsRead(message.thread_id);
    });
});
```

---------------------------------------

<a name="sendSticker" />
### api.sendSticker(sticker\_id, thread\_id, [callback])

Sends the given sticker_id to the thread_id.

__Arguments__

* `sticker_id` - A string or number representing the sticker to be sent to the given thread_id.
* `thread_id` - A string or number representing a thread. It happens to be someone's userId in the case of a one to one conversation. 
* `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `obj` contains only the thread_id where the message was sent.

__Tip__: to find your own ID, go to your own profile on Facebook and replace 'www' by 'graph' in the URL.

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
    
    var yourID = 0000000000000;
    api.sendMessage(767334526626290, yourID);
});
```

---------------------------------------

<a name="setTitle" />
### api.setTitle(newTitle, thread_id, [callback])

Sets the title of the group chat with thread id thread_id to newTitle.

Note: This will not work if the thread id corresponds to a single-user chat or
if the bot is not in the group chat.

__Arguments__

* `newTitle` - A string representing the new title.
* `thread_id` - A string or number representing a thread. It happens to be someone's userId in the case of a one to one conversation. 
* `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `obj` contains only the thread_id where the message was sent.

---------------------------------------

<a name="getUserInfo" />
### api.getUserInfo(ids, callback)

Will get some information about the given users.

__Arguments__

* `ids` - Either a string/number for one ID or an array of strings/numbers for a batched query.
* `callback(err, obj)` - A callback called when the query is done (either with an error or with an confirmation object). `obj` is a mapping from userId to another object containing the following properties: id, name, firstName, vanity, thumbSrc, uri, gender, type, is_friend, is_birthday, searchTokens, alternateName.

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
    
    api.getUserInfo([1, 2, 3, 4], function(err, ret) {
      if(err) return console.error(err);

      for(var prop in ret) {
        if(ret.hasOwnProperty(prop) && ret[prop].is_birthday) {
          api.sendMessage("Happy birthday :)", prop);
        }
      }
    });
});
```

---------------------------------------

<a name="getFriendsList" />
### api.getFriendsList(id, callback)

__Warning__: this function takes a longer time than others to answer because it pulls the friends in batches of 20 (blindly following how the UI pulls the friends list). It might take a couple seconds if you have >1000 friends.

__Warning 2__: this will only work if you're friends with the person or if the person didn't set their friends list as being private information.

Given the id of a person, will return an array of ids of all its friends.

__Arguments__

* `id` - The id of a person.
* `callback(err, arr)` - A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array containing all the ids of the person's friends. You can get more information about those people by then calling getUserInfo with the array (this will return faster because it'll be done in one request).

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
  if(err) return console.error(err);
  
  api.getFriendsList(1216678154, function(err, data) {
    if(err) return console.error(err);

    console.log(data.length);
  });
});
```

---------------------------------------

<a name="getThreadList" />
### api.getThreadList(start, end, callback)

Will return information about threads.

__Arguments__

* `start` - Start index in the list of recently used threads.
* `end` - End index.
* `callback(err, arr)` - A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array of thread object containing the following properties: thread_id, thread_fbid, other_user_fbid, last_action_id, participants, former_participants, name, snippet, snippet_has_attachment, is_forwarded_snippet, snippet_attachments, snippet_sender, unread_count, message_count, image_src, timestamp_absolute, timestamp_datetime, timestamp_relative, timestamp_time_passed, timestamp, server_timestamp, mute_settings, is_canonical_user, is_canonical, canonical_fbid, is_subscribed, root_message_threading_id, folder, is_archived, mode, recipients_loadable, name_conversation_sheet_dismissed, has_email_participant, read_only.

---------------------------------------

<a name="getAccessToken" />
### api.getAccessToken()

Synchronously returns an access token to the Facebook Graph API.

This is a bit of a hack because it's using the Graph API Explorer's app ID. It has all permissions so drive safely.

__Example__

```js
var fb = require('fb');

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
    
    fb.setAccessToken(api.getAccessToken());
    fb.api('/me', 'get', function (res) {
        if(!res || res.error) return console.error(res ? res.error : "error");
        console.log('me: ', res);
    });
});
```


---------------------------------------

<a name="addUserToGroup" />
### api.addUserToGroup(user\_id, thread\_id, [callback])

Adds a user (or array of users) to a group chat.

__Arguments__

* `user_id` - User ID or array of user IDs.
* `thread_id` - Group chat ID.
* `callback(err)` - A callback called when the query is done (either with an error or with no arguments).

---------------------------------------

<a name="removeUserFromGroup" />
### api.removeUserFromGroup(user\_id, thread\_id, [callback])

Removes a user from a group chat.

__Arguments__

* `user_id` - User ID.
* `thread_id` - Group chat ID.
* `callback(err)` - A callback called when the query is done (either with an error or with no arguments).

## Deprecated

---------------------------------------

<a name="sendDirectMessage" />
### api.sendDirectMessage(message, nameOrUserId, callback)

__Warning__: This function is ambiguous. It'll send messages to facebook's best match when searching for a person called `nameOrUserId`. If all the returned matches aren't people (pages, events etc...), `sendDirectMessage` will call the callback with an error. For this reason, the callback is required.

Similar to `sendMessage` but if `nameOrUserId` is a string, it will query Facebook's search engine to find the person that matches the closest the given name. 'the closest' means that given what facebook knows about you, it'll give priority to friends and friends of friends etc... If `nameOrUserId` is a number, it'll just call `sendMessage`.

__Arguments__

* `message` - A string being the message to be sent to the given `nameOrUserId`
* `nameOrUserId` - A string or number representing either a person or a thread. If it's a string, `sendDirectMessage` will do a search for that person's name and will send the given `message` to the closest match.
* `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `err` might occur if you did a typo in `nameOrUserId` and Facebook didn't return any valid users.  `obj` contains only the thread_id where the message was sent.

__Example__

```js
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);
    
    var yourName = "Marc Zuckerbot";
    api.sendDirectMessage("Hey John!", yourName, function(err, data){
        if(err) console.error(err);
    });
});
```

---------------------------------------

<a name="sendDirectSticker" />
### api.sendDirectSticker(sticker_id, nameOrUserId, callback)

__Warning__: This function is also ambiguous (look at [`sendDirectMessage`](#sendDirectMessage)) and therefore a callback is required.

Same as sendDirectMessage but for stickers.
