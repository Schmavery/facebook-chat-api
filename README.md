# Facebook Chat API
The Official Facebook Chat API uses XMPP and is going to be deprecated as of April 30th 2015. This is a non-official API that doesn't use XMPP.

## Install
```bash
npm install facebook-chat-api
```

## Example Usage
```javascript
var login = require("facebook-chat-api");

// Create simple echo bot
login("config.json", function(err, api) {
    if(err) return console.error(err);
  
    api.listen(function callback(err, message) {
        api.sendMessage(message.body, message.thread_id);
    });
});

```


## Documentation
* [`login`](#login)
* [`api.listen`](#listen)
* [`api.sendMessage`](#sendMessage)
* [`api.sendDirectMessage`](#sendDirectMessage)
* [`api.sendDirectSticker`](#sendDirectSticker)

<a name="each" />
### login([filename], callback)

This function is returned by require(...) and is the main entry point to the API. 

Logs into facebook given the right credentials. If a filename is given as first argument, login will open the file and parse it as a JSON with two values: email and password. If no filename is given, login will use the environment variables FB_LOGIN_EMAIL and FB_LOGIN_PASSWORD. 

If it succeeds, callback will be called with a null object (for potential errors) and with an object containing all the available functions.

If it fails, callback will be called with an error object.

__Arguments__

* `filename` - An optional filename to be open and parsed as a JSON. Must be a [valid JSON format](http://jsonlint.com). Must contain at least two fields: email and password.
* `callback(err, api)` - A callback called when login is done (successful or not). `err` is an object containing a field `error`. `api` is an object with 

__Example__

```js
login('config.json', function(err, api) {
    if(err) return console.error(err);
    // Here you can use the api
});
```


---------------------------------------

<a name="listen" />
### api.listen(callback)

Will call callback when a new message it received on this account.

__Arguments__

* `callback(error, message, stopListening)` - A callback called everytime the logged-in account receives a new message. `stopListening` is a function that will stop the `listen` loop and is guaranteed to prevent any future calls to the callback given to `listen`. `error` is an object contain a field error being the error thrown if anything happens inside listen. An immediate call to `stopListening` when an error occurs will prevent the listen function to continue. `message` is an object with 4 fields:
    - `sender_name` - First and last name of the person who just sent the message.
    - `participant_names` - An array containing only the first names of the other participants in the thread (you included).
    - `body` - The string corresponding to the message that was just received.
    - `thread_id` - The thread_id representing the thread in which the message was sent.

__Example__

```js
// Simple echo bot. He'll repeat anything that you say.
// Will stop when you say '/stop'
login('config.json', function(err, api) {
    if(err) return console.error(err);
    
    api.listen(function(err, message, stopListening){
        if(err) return console.error(err);
        if(message.body === '/stop') {
            api.sendMessage("Goodbye...", message.thread_id);
            return stopListening();
        }
        
        api.sendMessage(message.body, message.thread_id);
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
login('config.json', function(err, api) {
    if(err) return console.error(err);
    
    var yourID = 0000000000000;
    api.sendMessage("Hey!", yourID);
});
```

---------------------------------------

<a name="sendDirectMessage" />
### api.sendDirectMessage(message, nameOrUserId, callback)

Similar to `sendMessage` but if `nameOrUserId` is a string, it will query Facebook's search engine to find the person that matches the closest the given name. 'the closest' means that given what facebook knows about you, it'll give priority to friends and friends of friends etc... If `nameOrUserId` is a number, it'll just call `sendMessage`.

__Arguments__

* `message` - A string being the message to be sent to the given `nameOrUserId`
* `nameOrUserId` - A string or number representing either a person or a thread. If it's a string, `sendDirectMessage` will do a search for that person's name and will send the given `message` to the closest match.
* `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `err` might occur if you did a typo in `nameOrUserId` and Facebook didn't return any valid users.  `obj` contains only the thread_id where the message was sent.

__Example__

```js
login('config.json', function(err, api) {
    if(err) return console.error(err);
    
    var yourName = "Marc Zuckerbot";
    api.sendDirectMessage("Hey John!", yourName, function(err, data){
        if(err) console.error(err);
    });
});
```

---------------------------------------

<a name="sendSticker" />
### api.sendSticker(sticker_id, thread_id, [callback])

Sends the given sticker_id to the thread_id.

__Arguments__

* `sticker_id` - A string or number representing the sticker to be sent to the given thread_id.
* `thread_id` - A string or number representing a thread. It happens to be someone's userId in the case of a one to one conversation. 
* `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `obj` contains only the thread_id where the message was sent.

__Tip__: to find your own ID, go to your own profile on Facebook and replace 'www' by 'graph' in the URL.

__Example__

```js
login('config.json', function(err, api) {
    if(err) return console.error(err);
    
    var yourID = 0000000000000;
    api.sendMessage(767334526626290, yourID);
});

---------------------------------------
```

<a name="sendDirectSticker" />
### api.sendDirectSticker(sticker_id, nameOrUserId, [callback])

Same as sendDirectMessage but for stickers.