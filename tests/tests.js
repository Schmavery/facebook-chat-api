var login = require('../index.js');
var fs = require('fs');
var assert = require('assert');

var conf = JSON.parse(fs.readFileSync('tests/test-config.json', 'utf8'));
var credentials = {email: conf.email, password: conf.password};
var groupChatID = conf.groupChatID;
var otherID = conf.otherID;

var options = {logLevel: 'silent', selfListen: true, listenEvents: true};
var pageOptions = {logLevel: 'silent', pageID: conf.pageID};

var userID = 0;

function checkError(done){
  return function(err) {
    if (err) done(err);
  };
}

// Approach: object {test-name: null|compare fn|true}
// Init all tests to null
// Create a listen that tries to find an appropriate compare obj and set it to true and call `done`.
// In the `it`, set the compare obj.
describe('Login:', function() {
  var api = null;
  var tests = {};
  var dones = {};
  var stopListening;
  this.timeout(5000);

  before(function(done) {
    this.timeout(15000);
    login(credentials, options, function (err, localAPI) {
      checkError(done)(err);
      assert(localAPI);
      api = localAPI;
      userID = api.getCurrentUserID();
      api.listen(function (err, msg, sl) {
        Object.keys(tests).map(function(key) {
          if (typeof tests[key] === 'function' && tests[key](msg)){
            delete tests[key];
            dones[key]();
            delete dones[key];
          }
        });
        if (!stopListening) stopListening = sl;
      });

      done();
    });
  });

  it('Login without error', function (done){
   if (api) done();
  });


  it('Text message object (user)', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'message' && msg.body === 'test' + time);
    };
    api.sendMessage({body: 'test'+time}, userID, checkError(done));
  });

  it('Sticker message object (user)', function (done){
    var stickerID = '767334526626290';
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'sticker' && msg.stickerID == stickerID);
    };
    api.sendMessage({sticker: stickerID}, userID, checkError(done));
  });

  it('Basic string (user)', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'message' && msg.body === 'test' + time);
    };
    api.sendMessage('test'+time, userID, checkError(done));
  });

  it('Text message object (group)', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'message' && msg.body === 'test' + time);
    };
    api.sendMessage({body: 'test'+time}, groupChatID, checkError(done));
  });

  it('Sticker message object (group)', function (done){
    var stickerID = '767334526626290';
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'sticker' && msg.stickerID == stickerID);
    };
    api.sendMessage({sticker: stickerID}, groupChatID, checkError(done));
  });

  it('Basic string (group)', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'message' && msg.body === 'test' + time);
    };
    api.sendMessage('test'+time, groupChatID, checkError(done));
  });

  it('Change chat title', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'event' &&
        msg.log_message_type === 'log:thread-name' &&
        msg.log_message_data.name === 'test chat ' + time);
    };
    api.setTitle('test chat '+time, groupChatID, checkError(done));
  });

  it('Kick user', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'event' &&
        msg.log_message_type === 'log:unsubscribe' &&
        msg.log_message_data.
          removed_participants.indexOf('fbid:'+otherID) > -1);
    };
    api.removeUserFromGroup(otherID, groupChatID, checkError(done));
  });

  it('Add user', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'event' &&
        msg.log_message_type === 'log:subscribe' &&
        msg.log_message_data.
          added_participants.indexOf('fbid:'+otherID) > -1);
    };
    api.addUserToGroup(otherID, groupChatID, checkError(done));
  });

  it('Mark as read', function (done){
    api.markAsRead(groupChatID, done);
  });

  it('Send typing indicator', function (done) {
    this.timeout(10000);
    var time = Date.now();
    dones[time] = done;
    tests[time] = function(res) {
      stopType();
      return true;
    };
    var stopType = api.sendTypingIndicator(groupChatID, checkError(done));
  });

  after(function (){
    if (stopListening) stopListening();
  });
});
