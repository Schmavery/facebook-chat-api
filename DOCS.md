# Documentation

* [`login`](#login)
* [`api.addUserToGroup`](#addUserToGroup)
* [`api.changeAdminStatus`](#changeAdminStatus)
* [`api.changeArchivedStatus`](#changeArchivedStatus)
* [`api.changeBlockedStatus`](#changeBlockedStatus)
* [`api.changeGroupImage`](#changeGroupImage)
* [`api.changeNickname`](#changeNickname)
* [`api.changeThreadColor`](#changeThreadColor)
* [`api.changeThreadEmoji`](#changeThreadEmoji)
* [`api.createPoll`](#createPoll)
* [`api.deleteMessage`](#deleteMessage)
* [`api.deleteThread`](#deleteThread)
* [`api.forwardAttachment`](#forwardAttachment)
* [`api.getAppState`](#getAppState)
* [`api.getCurrentUserID`](#getCurrentUserID)
* [`api.getEmojiUrl`](#getEmojiUrl)
* [`api.getFriendsList`](#getFriendsList)
* [`api.getThreadHistory`](#getThreadHistory)
* [`api.getThreadInfo`](#getThreadInfo)
* [`api.getThreadList`](#getThreadList)
* [`api.getThreadPictures`](#getThreadPictures)
* [`api.getUserID`](#getUserID)
* [`api.getUserInfo`](#getUserInfo)
* [`api.handleMessageRequest`](#handleMessageRequest)
* [`api.listen`](#listen)
* [`api.logout`](#logout)
* [`api.markAsRead`](#markAsRead)
* [`api.muteThread`](#muteThread)
* [`api.removeUserFromGroup`](#removeUserFromGroup)
* [`api.resolvePhotoUrl`](#resolvePhotoUrl)
* [`api.searchForThread`](#searchForThread)
* [`api.sendMessage`](#sendMessage)
* [`api.sendTypingIndicator`](#sendTypingIndicator)
* [`api.setMessageReaction`](#setMessageReaction)
* [`api.setOptions`](#setOptions)
* [`api.setTitle`](#setTitle)
* [`api.threadColors`](#threadColors)
* [`api.unsendMessage`](#unsendMessage)

---------------------------------------

### Password safety

**Read this** before you _copy+paste_ examples from below.

You should not store Facebook password in your scripts.
There are few good reasons:
* People who are standing behind you may look at your "code" and get your password if it is on the screen
* Backups of source files may be readable by someone else. "_There is nothing secret in my code, why should I ever password protect my backups_"
* You can't push your code to Github (or any onther service) without removing your password from the file.  Remember: Even if you undo your accidential commit with password, Git doesn't delete it, that commit is just not used but is still readable by everybody.
* If you change your password in the future (maybe it leaked because _someone_ stored password in source file… oh… well…) you will have to change every occurrence in your scripts

Preferred method is to have `login.js` that saves `AppState` to a file and then use that file from all your scripts.
This way you can put password in your code for a minute, login to facebook and then remove it.

If you want to be even more safe:  _login.js_ can get password with `require("readline")` or with environment variables like this:
```js
var credentials = {
    email: process.env.FB_EMAIL,
    password: process.env.FB_PASSWORD
}
```
```bash
FB_EMAIL="john.doe@example.com"
FB_PASSWORD="MySuperHardP@ssw0rd"
nodejs login.js
```

---------------------------------------

<a name="login"></a>
### login(credentials[, options], callback)

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
const login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);
    // Here you can use the api
});
```

__Example (Email & Password then save appState to file)__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});
```

__Example (AppState loaded from file)__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);
    // Here you can use the api
});
```

__Login Approvals (2-Factor Auth)__: When you try to login with Login Approvals enabled, your callback will be called with an error `'login-approval'` that has a `continue` function that accepts the approval code as a `string` or a `number`.

__Example__:

```js
const fs = require("fs");
const login = require("facebook-chat-api");
const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

login(obj, (err, api) => {
    if(err) {
        switch (err.error) {
            case 'login-approval':
                console.log('Enter code > ');
                rl.on('line', (line) => {
                    err.continue(line);
                    rl.close();
                });
                break;
            default:
                console.error(err);
        }
        return;
    }

    // Logged in!
});
```

__Review Recent Login__: Sometimes Facebook will ask you to review your recent logins. This means you've recently logged in from a unrecognized location. This will will result in the callback being called with an error `'review-recent-login'` by default. If you wish to automatically approve all recent logins, you can set the option `forceLogin` to `true` in the `loginOptions`.


---------------------------------------

<a name="addUserToGroup"></a>
### api.addUserToGroup(userID, threadID[, callback])

Adds a user (or array of users) to a group chat.

__Arguments__

* `userID`: User ID or array of user IDs.
* `threadID`: Group chat ID.
* `callback(err)`: A callback called when the query is done (either with an error or with no arguments).

---------------------------------------

<a name="changeAdminStatus"></a>
### api.changeAdminStatus(threadID, adminIDs, adminStatus[, callback])

Given a adminID, or an array of adminIDs, will set the admin status of the user(s) to `adminStatus`.

__Arguments__
* `threadID`: ID of a group chat (can't use in one-to-one conversations)
* `adminIDs`: The id(s) of users you wish to admin/unadmin (string or an array).
* `adminStatus`: Boolean indicating whether the user(s) should be promoted to admin (`true`) or demoted to a regular user (`false`).
* `callback(err)`: A callback called when the query is done (either with an error or null).

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if (err) return console.error(err);

    let threadID = "0000000000000000";
    let newAdmins = ["111111111111111", "222222222222222"];
    api.changeAdminStatus(threadID, newAdmins, true, editAdminsCallback);

    let adminToRemove = "333333333333333";
    api.changeAdminStatus(threadID, adminToRemove, false, editAdminsCallback);

});

function editAdminsCallback(err) {
    if (err) return console.error(err);
}

```

---------------------------------------

<a name="changeArchivedStatus"></a>
### api.changeArchivedStatus(threadOrThreads, archive[, callback])

Given a threadID, or an array of threadIDs, will set the archive status of the threads to `archive`. Archiving a thread will hide it from the logged-in user's inbox until the next time a message is sent or received.

__Arguments__
* `threadOrThreads`: The id(s) of the threads you wish to archive/unarchive.
* `archive`: Boolean indicating the new archive status to assign to the thread(s).
* `callback(err)`: A callback called when the query is done (either with an error or null).

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.changeArchivedStatus("000000000000000", true, (err) => {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="changeBlockedStatus"></a>
### api.changeBlockedStatus(userID, block[, callback])

Prevents a user from privately contacting you. (Messages in a group chat will still be seen by both parties).

__Arguments__

* `userID`: User ID.
* `block`: Boolean indicating whether to block or unblock the user (true for block).
* `callback(err)`: A callback called when the query is done (either with an error or with no arguments).

---------------------------------------

<a name="changeGroupImage"></a>
### api.changeGroupImage(image, threadID[, callback])

Will change the group chat's image to the given image.

__Arguments__
* `image`: File stream of image.
* `threadID`: String representing the ID of the thread.
* `callback(err)`: A callback called when the change is done (either with an error or null).

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.changeGroupImage(fs.createReadStream("./avatar.png"), "000000000000000", (err) => {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="changeNickname"></a>
### api.changeNickname(nickname, threadID, participantID[, callback])

Will change the thread user nickname to the one provided.

__Arguments__
* `nickname`: String containing a nickname. Leave empty to reset nickname.
* `threadID`: String representing the ID of the thread.
* `participantID`: String representing the ID of the user.
* `callback(err)`: An optional callback called when the change is done (either with an error or null).

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.changeNickname("Example", "000000000000000", "000000000000000", (err) => {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="changeThreadColor"></a>
### api.changeThreadColor(color, threadID[, callback])

Will change the thread color to the given hex string color ("#0000ff"). Set it
to empty string if you want the default.

Note: the color needs to start with a "#".

__Arguments__
* `color`: String representing a hex color code (eg: "#0000ff") preceded by "#".
* `threadID`: String representing the ID of the thread.
* `callback(err)`: A callback called when the change is done (either with an error or null).

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.changeThreadColor("#0000ff", "000000000000000", (err) => {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="changeThreadEmoji"></a>
### api.changeThreadEmoji(emoji, threadID[, callback])

Will change the thread emoji to the one provided.

Note: The UI doesn't play nice with all emoji.

__Arguments__
* `emoji`: String containing a single emoji character.
* `threadID`: String representing the ID of the thread.
* `callback(err)`: A callback called when the change is done (either with an error or null).

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.changeThreadEmoji("💯", "000000000000000", (err) => {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="createPoll"></a>
### api.createPoll(title, threadID[, options][, callback])

Creates a poll with the specified title and optional poll options, which can also be initially selected by the logged-in user.

__Arguments__
* `title`: String containing a title for the poll.
* `threadID`: String representing the ID of the thread.
* `options`: An optional `string : bool` dictionary to specify initial poll options and their initial states (selected/not selected), respectively.
* `callback(err)`: An optional callback called when the poll is posted (either with an error or null) - can omit the `options` parameter and use this as the third parameter if desired.

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.createPoll("Example Poll", "000000000000000", {
        "Option 1": false,
        "Option 2": true
    }, (err) => {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="deleteMessage"></a>
### api.deleteMessage(messageOrMessages[, callback])

Takes a messageID or an array of messageIDs and deletes the corresponding message.

__Arguments__
* `messageOrMessages`: A messageID string or messageID string array
* `callback(err)`: A callback called when the query is done (either with an error or null).

__Example__
```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        if(message.body) {
            api.sendMessage(message.body, message.threadID, (err, messageInfo) => {
                if(err) return console.error(err);

                api.deleteMessage(messageInfo.messageID);
            });
        }
    });
});
```

---------------------------------------

<a name="deleteThread"></a>
### api.deleteThread(threadOrThreads[, callback])

Given a threadID, or an array of threadIDs, will delete the threads from your account. Note that this does *not* remove the messages from Facebook's servers - anyone who hasn't deleted the thread can still view all of the messages.

__Arguments__

* `threadOrThreads` - The id(s) of the threads you wish to remove from your account.
* `callback(err)` - A callback called when the operation is done, maybe with an object representing an error.

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.deleteThread("000000000000000", (err) => {
        if(err) return console.error(err);
    });
});
```

---------------------------------------

<a name="forwardAttachment"></a>
### api.forwardAttachment(attachmentID, userOrUsers[, callback])

Forwards corresponding attachment to given userID or to every user from an array of userIDs

__Arguments__
* `attachmentID`: The ID field in the attachment object. Recorded audio cannot be forwarded.
* `userOrUsers`: A userID string or usersID string array
* `callback(err)`: A callback called when the query is done (either with an error or null).

---------------------------------------

<a name="getAppState"></a>
### api.getAppState()

Returns current appState which can be saved to a file or stored in a variable.

---------------------------------------

<a name="getCurrentUserID"></a>
### api.getCurrentUserID()

Returns the currently logged-in user's Facebook user ID.

---------------------------------------

<a name="getEmojiUrl"></a>
### api.getEmojiUrl(c, size[, pixelRatio])

Returns the URL to a Facebook Messenger-style emoji image asset.

__note__: This function will return a URL regardless of whether the image at the URL actually exists.
This can happen if, for example, Messenger does not have an image asset for the requested emoji.

__Arguments__

* `c` - The emoji character
* `size` - The width and height of the emoji image; supported sizes are 32, 64, and 128
* `pixelRatio` - The pixel ratio of the emoji image; supported ratios are '1.0' and '1.5' (default is '1.0')

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    // Prints https://static.xx.fbcdn.net/images/emoji.php/v8/z9c/1.0/128/1f40d.png
    console.log('Snake emoji, 128px (128x128 with pixel ratio of 1.0');
    console.log(api.getEmojiUrl('\ud83d\udc0d', 128));

    // Prints https://static.xx.fbcdn.net/images/emoji.php/v8/ze1/1.5/128/1f40d.png
    console.log('Snake emoji, 192px (128x128 with pixel ratio of 1.5');
    console.log(api.getEmojiUrl('\ud83d\udc0d', 128, '1.5'));
});
```

---------------------------------------

<a name="getFriendsList"></a>
### api.getFriendsList(callback)

Returns an array of objects with some information about your friends.

__Arguments__

* `callback(err, arr)` - A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array of objects with the following fields: `alternateName`, `firstName`, `gender`, `userID`, `isFriend`, `fullName`, `profilePicture`, `type`, `profileUrl`, `vanity`, `isBirthday`.

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.getFriendsList((err, data) => {
        if(err) return console.error(err);

        console.log(data.length);
    });
});
```

---------------------------------------

<a name="getThreadHistory"></a>
### api.getThreadHistory(threadID, amount, timestamp, callback)

Takes a threadID, number of messages, a timestamp, and a callback.

__note__: if you're getting a 500 error, it's possible that you're requesting too many messages. Try reducing that number and see if that works.

__Arguments__
* `threadID`: A threadID corresponding to the target chat
* `amount`: The amount of messages to *request*
* `timestamp`: Used to described the time of the most recent message to load. If timestamp is `undefined`, facebook will load the most recent messages.
* `callback(error, history)`: If error is null, history will contain an array of message objects.

__Example__

To load 50 messages at a time, we can use `undefined` as the timestamp to retrieve the most recent messages and use the timestamp of the earliest message to load the next 50.

```js
var timestamp = undefined;

function loadNextThreadHistory(api){
    api.getThreadHistory(threadID, 50, timestamp, (err, history) => {
        if(err) return console.error(err);

        /*
            Since the timestamp is from a previous loaded message,
            that message will be included in this history so we can discard it unless it is the first load.
        */
        if(timestamp != undefined) history.pop();

        /*
            Handle message history
        */

        timestamp = history[0].timestamp;
    });
}
```

---------------------------------------

<a name="getThreadInfo"></a>
### api.getThreadInfo(threadID[, callback])

Takes a threadID and a callback.  Works for both single-user and group threads.

__Arguments__
* `threadID`: A threadID corresponding to the target thread.
* `callback(err, info)`: If `err` is `null`, `info` will contain the following properties: * `callback(err, arr)`: A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array of thread object containing the following properties:

| Key   |      Description      |
|----------|:-------------:|
| threadID | ID of the thread |
| participantIDs |    Array of user IDs in the thread   |
| name | Name of the thread. Usually the name of the user. In group chats, this will be empty if the name of the group chat is unset. |
| nicknames |    Map of nicknames for members of the thread. If there are no nicknames set, this will be null.   |
| unreadCount | Number of unread messages |
| messageCount | Number of messages |
| imageSrc | URL to the group chat photo. Null if unset or a 1-1 thread. |
| timestamp |  |
| muteUntil | Timestamp at which the thread will no longer be muted. The timestamp will be -1 if the thread is muted indefinitely or null if the thread is not muted. |
| isGroup | boolean, true if this thread is a group thread (more than 2 participants). |
| isSubscribed |  |
| folder | The folder that the thread is in. Can be one of: <ul><li>'inbox'</li><li>'archive'</li></ul> |
| isArchived | True if the thread is archived, false if not |
| cannotReplyReason | If you cannot reply to this thread, this will be a string stating why. Otherwise it will be null. |
| lastReadTimestamp | Timestamp of the last message that is marked as 'read' by the current user. |
| emoji | Object with key 'emoji' whose value is the emoji unicode character. Null if unset. |
| color | String form of the custom color in hexadecimal form. |
| adminIDs | Array of user IDs of the admins of the thread. Empty array if unset. |

---------------------------------------

<a name="getThreadList"></a>
### api.getThreadList(limit, timestamp, tags, callback)

Returns information about the user's threads.

__Arguments__

* `limit`: Limit the number of threads to fetch.
* `timestamp`: Request threads *before* this date. `null` means *now*
* `tags`: An array describing which folder to fetch. It should be one of these:
  - `["INBOX"]` *(same as `[]`)*
  - `["ARCHIVED"]`
  - `["PENDING"]`
  - `["OTHER"]`
  - `["INBOX", "unread"]`
  - `["ARCHIVED", "unread"]`
  - `["PENDING", "unread"]`
  - `["OTHER", "unread"]`

*if you find something new, let us know*

* `callback(err, list)`: Callback called when the query is done (either with an error or with a proper result). `list` is an *array* with objects with the following properties:

__Thread list__

| Key                  | Description                                                 |
|----------------------|-------------------------------------------------------------|
| threadID             | ID of the thread                                            |
| name                 | The name of the thread                                      |
| unreadCount          | Amount of unread messages in thread                         |
| messageCount         | Amount of messages in thread                                |
| imageSrc             | Link to the thread's image or `null`                        |
| emoji                | The default emoji in thread (classic like is `null`)        |
| color                | Thread's message color in `RRGGBB` (default blue is `null`) |
| nicknames            | An array of `{"userid": "1234", "nickname": "John Doe"}`    |
| muteUntil            | Timestamp until the mute expires or `null`                  |
| participants         | An array of participants. See below                         |
| adminIDs             | An array of thread admin IDs                                |
| folder               | `INBOX`, `ARCHIVED`, `PENDING` or `OTHER`                   |
| isGroup              | `true` or `false`                                           |
| customizationEnabled | `false` in one-to-one conversations with `Page` or `ReducedMessagingActor` |
| participantAddMode   | currently `"ADD"` for groups and `null` otherwise           |
| reactionsMuteMode    | `REACTIONS_NOT_MUTED` or `REACTIONS_MUTED`                  |
| mentionsMuteMode     | `MENTIONS_NOT_MUTED` or `MENTIONS_MUTED`                    |
| isArchived           | `true` or `false`                                           |
| isSubscribed         | `true` or `false`                                           |
| timestamp            | timestamp in miliseconds                                    |
| snippet              | Snippet's text message                                      |
| snippetAttachments   | Attachments in snippet                                      |
| snippetSender        | ID of snippet sender                                        |
| lastMessageTimestamp | timestamp in milliseconds                                   |
| lastReadTimestamp    | timestamp in milliseconds or `null`                         |
| cannotReplyReason    | `null`, `"RECIPIENTS_NOT_LOADABLE"` or `"BLOCKED"`          |

__`participants` format__

`accountType` is one of the following:
- `"User"`
- `"Page"`
- `"UnavailableMessagingActor"`
- `"ReducedMessagingActor"`

(*there might be more*)

<table>
<tr>
<th>Account type</th>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td rowspan="12"><code>"User"</code></td>
<td>userID</td>
<td>ID of user</td>
</tr>
<tr>
<td>name</td>
<td>Full name of user</td>
</tr>
<tr>
<td>shortName</td>
<td>Short name of user (most likely first name)</td>
</tr>
<tr>
<td>gender</td>
<td>Either
<code>"MALE"</code>,
<code>"FEMALE"</code>,
<code>"NEUTER"</code> or
<code>"UNKNOWN"</code>
</td>
</tr>
<tr>
<td>url</td>
<td>URL of the user's Facebook profile</td>
</tr>
<tr>
<td>profilePicture</td>
<td>URL of the profile picture</td>
</tr>
<tr>
<td>username</td>
<td>Username of user or
<code>null</code>
</td>
</tr>
<tr>
<td>isViewerFriend</td>
<td>Is the user a friend of you?</td>
</tr>
<tr>
<td>isMessengerUser</td>
<td>Does the user use Messenger?</td>
</tr>
<tr>
<td>isVerified</td>
<td>Is the user verified? (Little blue tick mark)</td>
</tr>
<tr>
<td>isMessageBlockedByViewer</td>
<td>Is the user blocking messages from you?</td>
</tr>
<tr>
<td>isViewerCoworker</td>
<td>Is the user your coworker?
</td>
</tr>

<tr>
<td rowspan="10"><code>"Page"</code></td>
<td>userID</td>
<td>ID of the page</td>
</tr>
<tr>
<td>name</td>
<td>Name of the fanpage</td>
</tr>
<tr>
<td>url</td>
<td>URL of the fanpage</td>
</tr>
<tr>
<td>profilePicture</td>
<td>URL of the profile picture</td>
</tr>
<tr>
<td>username</td>
<td>Username of user or
<code>null</code>
</td>
</tr>
<tr>
<td>acceptsMessengerUserFeedback</td>
<td></td>
</tr>
<tr>
<td>isMessengerUser</td>
<td>Does the fanpage use Messenger?</td>
</tr>
<tr>
<td>isVerified</td>
<td>Is the fanpage verified? (Little blue tick mark)</td>
</tr>
<tr>
<td>isMessengerPlatformBot</td>
<td>Is the fanpage a bot</td>
</tr>
<tr>
<td>isMessageBlockedByViewer</td>
<td>Is the fanpage blocking messages from you?</td>
</tr>

<tr>
<td rowspan="7"><code>"ReducedMessagingActor"</code><br />(account requres verification,<br />messages are hidden)</td>
<td>userID</td>
<td>ID of the user</td>
</tr>
<tr>
<td>name</td>
<td>Name of the user</td>
</tr>
<tr>
<td>url</td>
<td>
<code>null</code>
</td>
</tr>
<tr>
<td>profilePicture</td>
<td>URL of the default Facebook profile picture</td>
</tr>
<tr>
<td>username</td>
<td>Username of user</td>
</td>
</tr>
<tr>
<td>acceptsMessengerUserFeedback</td>
<td></td>
</tr>
<tr>
<td>isMessageBlockedByViewer</td>
<td>Is the user blocking messages from you?</td>
</tr>
<tr>
<td rowspan="7"><code>"UnavailableMessagingActor"</code><br />(account disabled/removed)</td>
<td>userID</td>
<td>ID of the user</td>
</tr>
<tr>
<td>name</td>
<td><em>Facebook User</em> in user's language</td>
</tr>
<tr>
<td>url</td>
<td><code>null</code></td>
</tr>
<tr>
<td>profilePicture</td>
<td>URL of the default **male** Facebook profile picture</td>
</tr>
<tr>
<td>username</td>
<td><code>null</code></td>
</tr>
<tr>
<td>acceptsMessengerUserFeedback</td>
<td></td>
</tr>
<tr>
<td>isMessageBlockedByViewer</td>
<td>Is the user blocking messages from you?</td>
</tr>
</table>


In a case that some account type is not supported, we return just this *(but you can't rely on it)* and log a warning to the console:

| Key          | Description             |
|--------------|-------------------------|
| accountType  | type, can be anything   |
| userID       | ID of the account       |
| name         | Name of the account     |


---------------------------------------

<a name="getThreadPictures"></a>
### api.getThreadPictures(threadID, offset, limit, callback)

Returns pictures sent in the thread.

__Arguments__

* `threadID`: A threadID corresponding to the target chat
* `offset`: Start index of picture to retrieve, where 0 is the most recent picture
* `limit`: Number of pictures to get, incrementing from the offset index
* `callback(err, arr)`: A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array of objects with `uri`, `width`, and `height`.

---------------------------------------

<a name="getUserID"></a>
### api.getUserID(name, callback)

Given the full name or vanity name of a Facebook user, event, page, group or app, the call will perform a Facebook Graph search and return all corresponding IDs (order determined by Facebook).

__Arguments__

* `name` - A string being the name of the item you're looking for.
* `callback(err, obj)` - A callback called when the search is done (either with an error or with the resulting object). `obj` is an array which contains all of the items that facebook graph search found, ordered by "importance".  Each item in the array has the following properties: `userID`,`photoUrl`,`indexRank`, `name`, `isVerified`, `profileUrl`, `category`, `score`, `type` (type is generally user, group, page, event or app).

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.getUserID("Marc Zuckerbot", (err, data) => {
        if(err) return console.error(err);

        // Send the message to the best match (best by Facebook's criteria)
        var msg = "Hello!"
        var threadID = data[0].userID;
        api.sendMessage(msg, threadID);
    });
});
```

---------------------------------------

<a name="getUserInfo"></a>
### api.getUserInfo(ids, callback)

Will get some information about the given users.

__Arguments__

* `ids` - Either a string/number for one ID or an array of strings/numbers for a batched query.
* `callback(err, obj)` - A callback called when the query is done (either with an error or with an confirmation object). `obj` is a mapping from userId to another object containing the following properties: `name`, `firstName`, `vanity` (user's chosen facebook handle, if any), `thumbSrc`, `profileUrl`, `gender`, `type` (type is generally user, group, page, event or app), `isFriend`, `isBirthday`, `searchTokens`, `alternateName`.

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.getUserInfo([1, 2, 3, 4], (err, ret) => {
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

<a name="threadColors"></a>
### api.threadColors

A dictionary mapping names of all currently valid thread colors to their hexadecimal values that are accepted by [`api.changeThreadColor`](#changeThreadColor). These colors, listed below, are the ones present in the palette UI used for selecting thread colors on the Messenger client.

- MessengerBlue: `null`
- Viking: `#44bec7`
- GoldenPoppy: `#ffc300`
- RadicalRed: `#fa3c4c`
- Shocking: `#d696bb`
- PictonBlue: `#6699cc`
- FreeSpeechGreen: `#13cf13`
- Pumpkin: `#ff7e29`
- LightCoral: `#e68585`
- MediumSlateBlue: `#7646ff`
- DeepSkyBlue: `#20cef5`
- Fern: `#67b868`
- Cameo: `#d4a88c`
- BrilliantRose: `#ff5ca1`
- BilobaFlower: `#a695c7`

---------------------------------------

<a name="handleMessageRequest"></a>
### api.handleMessageRequest(threadID, accept[, callback])

Accept or ignore message request(s) with thread id `threadID`.

__Arguments__

* `threadID`: A threadID or array of threadIDs corresponding to the target thread(s). Can be numbers or strings.
* `accept`: Boolean indicating the new status to assign to the message request(s); true for inbox, false to others.
* `callback(err)`: A callback called when the query is done (with an error or with null).

---------------------------------------

<a name="listen"></a>
### api.listen(callback)

Will call `callback` when a new message is received on this account.
By default this won't receive events (joining/leaving a chat, title change etc...) but it can be activated with `api.setOptions({listenEvents: true})`.  This will by default ignore messages sent by the current account, you can enable listening to your own messages with `api.setOptions({selfListen: true})`. This returns `stopListening` that will stop the `listen` loop and is guaranteed to prevent any future calls to the callback given to `listen`. An immediate call to `stopListening` when an error occurs will prevent the listen function to continue.

__Arguments__

- `callback(error, message)`: A callback called every time the logged-in account receives a new message.

<a name="message"></a>
__Message__

The message object will contain different fields based on its type (as determined by its `type` field). By default, the only type that will be listened for is `message`. If enabled through [setOptions](#setOptions), the message object may alternatively represent an event e.g. a read receipt. The available event types are as follows:

<table>
	<tr>
		<th>Event Type</th>
		<th>Field</th>
		<th>Description</th>
	</tr>
	<tr>
		<td rowspan="9">
			<code>"message"</code><br />
			A message was sent to a thread.
		</td>
		<td><code>attachments</code></td>
		<td>An array of attachments to the message. Attachments vary in type, see the attachments table below.</td>
	</tr>
	<tr>
		<td><code>body</code></td>
		<td>The string corresponding to the message that was just received.</td>
	</tr>
	<tr>
		<td><code>isGroup</code></td>
		<td>boolean, true if this thread is a group thread (more than 2 participants).</td>
	</tr>
    <tr>
        <td><code>mentions</code></td>
        <td>An object containing people mentioned/tagged in the message in the format { id: name }</td>
    </tr>
	<tr>
		<td><code>messageID</code></td>
		<td>A string representing the message ID.</td>
	</tr>
	<tr>
		<td><code>senderID</code></td>
		<td>The id of the person who sent the message in the chat with threadID.</td>
	</tr>
	<tr>
		<td><code>threadID</code></td>
		<td>The threadID representing the thread in which the message was sent.</td>
	</tr>
  	<tr>
		<td><code>isUnread</code></td>
		<td>Boolean representing whether or not the message was read.</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>For this event type, this will always be the string <code>"message"</code>.</td>
	</tr>
	<tr>
		<td rowspan="6">
			<code>"event"</code><br />
			An event occurred within a thread.
		</td>
		<td><code>author</code></td>
		<td>The person who performed the event.</td>
	</tr>
	<tr>
		<td><code>logMessageBody</code></td>
		<td>String printed in the chat.</td>
	</tr>
	<tr>
		<td><code>logMessageData</code></td>
		<td>Data relevant to the event.</td>
	</tr>
	<tr>
		<td><code>logMessageType</code></td>
		<td>String representing the type of event (<code>log:subscribe</code>, <code>log:unsubscribe</code>, <code>log:thread-name</code>, <code>log:thread-color</code>, <code>log:thread-icon</code>, <code>log:user-nickname</code>)</td>
	</tr>
	<tr>
		<td><code>threadID</code></td>
		<td>The threadID representing the thread in which the message was sent.</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>For this event type, this will always be the string <code>"event"</code>.</td>
	</tr>
	<tr>
		<td rowspan="5">
			<code>"typ"</code><br />
			A user in a thread is typing.
		</td>
		<td><code>from</code></td>
		<td>ID of the user who started/stopped typing.</td>
	</tr>
	<tr>
		<td><code>fromMobile</code></td>
		<td>Boolean representing whether or not the person's using a mobile device to type.</td>
	</tr>
	<tr>
		<td><code>isTyping</code></td>
		<td>Boolean representing whether or not a person started typing.</td>
	</tr>
	<tr>
		<td><code>threadID</code></td>
		<td>The threadID representing the thread in which a user is typing.</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>For this event type, this will always be the string <code>"typ"</code>.</td>
	</tr>
	<tr>
		<td rowspan="3">
			<code>"read"</code><br />
			The current API user has read a message.
		</td>
		<td><code>threadID</code></td>
		<td>The threadID representing the thread in which the message was sent.</td>
	</tr>
	<tr>
		<td><code>time</code></td>
		<td>The time at which the user read the message.</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>For this event type, this will always be the string <code>"read"</code>.</td>
	</tr>
	<tr>
		<td rowspan="4">
			<code>"read_receipt"</code><br />
			A user within a thread has seen a message sent by the API user.
		</td>
		<td><code>reader</code></td>
		<td>ID of the user who just read the message.</td>
	</tr>
	<tr>
		<td><code>threadID</code></td>
		<td>The thread in which the message was read.</td>
	</tr>
	<tr>
		<td><code>time</code></td>
		<td>The time at which the reader read the message.</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>For this event type, this will always be the string <code>"read_receipt"</code>.</td>
	</tr>
	<tr>
		<td rowspan="8">
			<code>"message_reaction"</code><br />
			A user has sent a reaction to a message.
		</td>
		<td><code>messageID</code></td>
		<td>The ID of the message</td>
	</tr>
	<tr>
		<td><code>offlineThreadingID</code></td>
		<td>The offline message ID</td>
	</tr>
	<tr>
		<td><code>reaction</code></td>
		<td>Contains reaction emoji</td>
	</tr>
	<tr>
		<td><code>senderID</code></td>
		<td>ID of the author the message, where has been reaction added</td>
	</tr>
	<tr>
		<td><code>threadID</code></td>
		<td>ID of the thread where the message has been sent</td>
	</tr>
	<tr>
		<td><code>timestamp</code></td>
		<td>Unix Timestamp (in miliseconds) when the reaction was sent</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>For this event type, this will always be the string <code>"message_reaction"</code>.</td>
	</tr>
	<tr>
		<td><code>userID</code></td>
		<td>ID of the reaction sender</td>
	</tr>
	<tr>
		<td rowspan="4"><a name="presence"></a>
			<code>"presence"</code><br />
			The online status of the user's friends. Note that receiving this event type needs to be enabled with <code>api.setOptions({ updatePresence: true })</code>
		</td>
		<td><code>statuses</code></td>
		<td>The online status of the user. <code>0</code> means the user is idle (away for 2 minutes) and <code>2</code> means the user is online (we don't know what 1 or above 2 means...).</td>
	</tr>
	<tr>
		<td><code>timestamp</code></td>
		<td>The time when the user was last online.</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>For this event type, this will always be the string <code>"presence"</code>.</td>
	</tr>
	<tr>
		<td><code>userID</code></td>
		<td>The ID of the user whose status this packet is describing.</td>
	</tr>
	<tr>
		<td rowspan="4">
			<code>"message_unsend"</code><br />
			A revoke message request for a message from a thread was received.
		</td>
		<td><code>threadID</code></td>
		<td>The threadID representing the thread in which the revoke message request was received.</td>
	</tr>
	<tr>
		<td><code>senderID</code></td>
		<td>The id of the person who request to revoke message on threadID.</td>
	</tr>
	<tr>
		<td><code>messageID</code></td>
		<td>A string representing the message ID that the person request to revoke message want to.</td>
	</tr>
	<tr>
		<td><code>deletionTimestamp</code></td>
		<td>The time when the request was sent.</td>
	</tr>
</table>

__Attachments__

Similar to how messages can vary based on their `type`, so too can the `attachments` within `"message"` events. Each attachment will consist of an object of one of the following types:

| Attachment Type | Fields |
| --------------- | ------ |
| `"sticker"` | `ID`, `url`, `packID`, `spriteUrl`, `spriteUrl2x`, `width`, `height`, `caption`, `description`, `frameCount`, `frameRate`, `framesPerRow`, `framesPerCol` |
| `"file"` | `ID`, `filename`, `url`, `isMalicious`, `contentType` |
| `"photo"` | `ID`, `filename`, `thumbnailUrl`, `previewUrl`, `previewWidth`, `previewHeight`, `largePreviewUrl`, `largePreviewWidth`, `largePreviewHeight` |
| `"animated_image"` | `ID`, `filename`, `previewUrl`, `previewWidth`, `previewHeight`, `url`, `width`, `height` |
| `"video"` | `ID`, `filename`, `previewUrl`, `previewWidth`, `previewHeight`, `url`, `width`, `height`, `duration`, `videoType` |
| `"audio"` | `ID`, `filename`, `audioType`, `duration`, `url`, `isVoiceMail` |
| `"share"` | `ID`, `url`, `title`, `description`, `source`, `image`, `width`, `height`, `playable`, `duration`, `playableUrl`, `subattachments`, `properties` |

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

// Simple echo bot. He'll repeat anything that you say.
// Will stop when you say '/stop'

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});

    var stopListening = api.listen((err, event) => {
        if(err) return console.error(err);

        switch(event.type) {
            case "message":
                if(event.body === '/stop') {
                    api.sendMessage("Goodbye...", event.threadID);
                    return stopListening();
                }
                api.markAsRead(event.threadID, (err) => {
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

<a name="logout"></a>
### api.logout([callback])

Logs out the current user.

__Arguments__

* `callback(err)`: A callback called when the query is done (either with an error or with null).

---------------------------------------

<a name="markAsRead"></a>
### api.markAsRead(threadID, [read, [, callback]])

Given a threadID will mark all the unread messages as read. Facebook will take a couple of seconds to show that you've read the messages.

__Arguments__

* `threadID` - The id of the thread in which you want to mark the messages as read.
* `read` - An optional boolean where `true` means to mark the message as being "read" and `false` means to mark the message as being "unread".
* `callback(err)` - A callback called when the operation is done maybe with an object representing an error.

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        if(err) return console.error(err);

        // Marks messages as read immediately after they're received
        api.markAsRead(message.threadID);
    });
});
```

---------------------------------------

<a name="muteThread"></a>
### api.muteThread(threadID, muteSeconds[, callback])

Mute a chat for a period of time, or unmute a chat.

__Arguments__

* `threadID` - The ID of the chat you want to mute.
* `muteSeconds` - Mute the chat for this amount of seconds. Use `0` to unmute a chat. Use '-1' to mute a chat indefinitely.
* `callback(err)` - A callback called when the operation is done maybe with an object representing an error.

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        if(err) return console.error(err);

        // Mute all incoming chats for one minute
        api.muteThread(message.threadID, 60);
    });
});
```

---------------------------------------

<a name="removeUserFromGroup"></a>
### api.removeUserFromGroup(userID, threadID[, callback])

Removes a user from a group chat.

__Arguments__

* `userID`: User ID.
* `threadID`: Group chat ID.
* `callback(err)`: A callback called when the query is done (either with an error or with no arguments).

---------------------------------------

<a name="resolvePhotoUrl"></a>
### api.resolvePhotoUrl(photoID, callback)

Resolves the URL to the full-size photo, given its ID. This function is useful for retrieving the full-size photo URL
of image attachments in messages, returned by [`api.getThreadHistory`](#getThreadHistory).

__Arguments__

* `photoID`: Photo ID.
* `callback(err, url)`: A callback called when the query is done (either with an error or with the photo's URL). `url` is a string with the photo's URL.

---------------------------------------

<a name="searchForThread"></a>
### api.searchForThread(name, callback)

> This part is outdated.
> see #396

Takes a chat title (thread name) and returns matching results as a formatted threads array (ordered according to Facebook).

__Arguments__
* `name`: A messageID string or messageID string array
* `callback(err, obj)`: A callback called when the query is done (either with an error or a thread object). The object passed in the callback has the following shape: `threadID`, <del>`participants`</del>, `participantIDs`, `formerParticipants`, `name`, `nicknames`, `snippet`, `snippetHasAttachment`, `snippetAttachments`, `snippetSender`, `unreadCount`, `messageCount`, `imageSrc`, `timestamp`, `serverTimestamp`, `muteSettings`, `isCanonicalUser`, `isCanonical`, `canonicalFbid`, `isSubscribed`, `rootMessageThreadingID`, `folder`, `isArchived`, `recipientsLoadable`, `hasEmailParticipant`, `readOnly`, `canReply`, `composerEnabled`, `blockedParticipants`, `lastMessageID`

---------------------------------------

<a name="sendMessage"></a>
### api.sendMessage(message, threadID[, callback])

Sends the given message to the threadID.

__Arguments__

* `message`: A string (for backward compatibility) or a message object as described below.
* `threadID`: A string, number, or array representing a thread. It happens to be someone's userID in the case of a one to one conversation or an array of userIDs when starting a new group chat.
* `callback(err, messageInfo)`: A callback called when sending the message is done (either with an error or with an confirmation object). `messageInfo` contains the `threadID` where the message was sent and a `messageID`, as well as the `timestamp` of the message.

__Message Object__:

Various types of message can be sent:
* *Regular:* set field `body` to the desired message as a string.
* *Sticker:* set a field `sticker` to the desired sticker ID.
* *File or image:* Set field `attachment` to a readable stream or an array of readable streams.
* *URL:* set a field `url` to the desired URL.
* *Emoji:* set field `emoji` to the desired emoji as a string and set field `emojiSize` with size of the emoji (`small`, `medium`, `large`)
* *Mentions:* set field `mentions` to an array of objects. Objects should have the `tag` field set to the text that should be highlighted in the mention. The object should have an `id` field, where the `id` is the user id of the person being mentioned. The instance of `tag` that is highlighted is determined through indexOf, an optional `fromIndex`
can be passed in to specify the start index to start searching for the `tag` text
in `body` (default=0). (See below for an example.)

Note that a message can only be a regular message (which can be empty) and optionally one of the following: a sticker, an attachment or a url.

__Tip__: to find your own ID, you can look inside the cookies. The `userID` is under the name `c_user`.

__Example (Basic Message)__
```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    var yourID = "000000000000000";
    var msg = {body: "Hey!"};
    api.sendMessage(msg, yourID);
});
```

__Example (File upload)__
```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    // This example uploads an image called image.jpg
    var yourID = "000000000000000";
    var msg = {
        body: "Hey!",
        attachment: fs.createReadStream(__dirname + '/image.jpg')
    }
    api.sendMessage(msg, yourID);
});
```

__Example (Mention)__
```js
const login = require("facebook-chat-api");

login({email: "EMAIL", password: "PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        if (message && message.body) {
            // Getting the actual sender name from ID involves calling
            // `api.getThreadInfo` and `api.getUserInfo`
            api.sendMessage({
                body: 'Hello @Sender! @Sender!',
                mentions: [{
                     tag: '@Sender',
                     id: message.senderID,
                     fromIndex: 9, // Highlight the second occurrence of @Sender
                }],
            }, message.threadID);
        }
    });
});
```

---------------------------------------

<a name="sendTypingIndicator"></a>
### api.sendTypingIndicator(threadID[, callback])

Sends a "USERNAME is typing" indicator to other members of the thread indicated by `threadID`. This indication will disappear after 30 second or when the `end` function is called. The `end` function is returned by `api.sendTypingIndicator`.

__Arguments__

* `threadID`: Group chat ID.
* `callback(err)`: A callback called when the query is done (with an error or with null).

---------------------------------------

<a name="setMessageReaction"></a>
### api.setMessageReaction(reaction, messageID[, callback])

Sets reaction on message

__Arguments__

* `reaction`: A string containing either an emoji, an emoji in unicode, or an emoji shortcut (see list of supported emojis below). The string can be left empty ("") in order to remove a reaction.
* `messageID`: A string representing the message ID.
* `callback(err)` - A callback called when sending the reaction is done.

__Supported Emojis__

|Emoji|Text|Unicode|Shortcuts|
|---|---|---|---|
|😍|`😍`|`\uD83D\uDE0D`|`:love:`, `:heart_eyes:`|
|😆|`😆`|`\uD83D\uDE06`|`:haha:`, `:laughing:`|
|😮|`😮`|`\uD83D\uDE2E`|`:wow:`, `:open_mouth:`|
|😢|`😢`|`\uD83D\uDE22`|`:sad:`, `:cry:`|
|😠|`😠`|`\uD83D\uDE20`|`:angry:`|
|👍|`👍`|`\uD83D\uDC4D`|`:like:`, `:thumbsup:`|
|👎|`👎`|`\uD83D\uDC4E`|`:dislike:`, `:thumbsdown:`|

---------------------------------------

<a name="setOptions"></a>
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
    - `userAgent`: (Default `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18`) The desired simulated User Agent.

__Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

// Simple echo bot. This will send messages forever.

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.setOptions({
        selfListen: true,
        logLevel: "silent"
    });

    api.listen((err, message) => {
        if(err) return console.error(err);

        // Ignore empty messages (photos etc.)
        if (typeof message.body === "string") {
            api.sendMessage(message.body, message.threadID);
        }
    });
});
```

---------------------------------------

<a name="setTitle"></a>
### api.setTitle(newTitle, threadID[, callback])

Sets the title of the group chat with thread id `threadID` to `newTitle`.

Note: This will not work if the thread id corresponds to a single-user chat or if the bot is not in the group chat.

__Arguments__

* `newTitle`: A string representing the new title.
* `threadID`: A string or number representing a thread. It happens to be someone's userID in the case of a one to one conversation.
* `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `obj` contains only the threadID where the message was sent.

---------------------------------------

<a name="unsendMessage"></a>
### api.unsendMessage(messageID[, callback])

Revoke a message from anyone could see that message with `messageID`

Note: This will only work if the message is sent by you and sent less than 10 minutes ago.

__Arguments__

* `messageID`: Message ID you want to unsend.
* `callback(err)`: A callback called when the query is done (with an error or with null).

---------------------------------------
