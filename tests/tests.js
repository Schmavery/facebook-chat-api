var login = require('../index.js');
var fs = require('fs');
var assert = require('assert');

var conf = JSON.parse(fs.readFileSync('tests/test-config.json', 'utf8'));
var credentials = {
  email: conf.markEmail,
  password: conf.markPassword,
  appState: JSON.parse(fs.readFileSync('tests/tests-appState.json', 'utf8')),
};
var groupChatID = conf.groupChatID;
var roseID = conf.roseID;

var options = { selfListen: true, listenEvents: true};
var pageOptions = {logLevel: 'silent', pageID: conf.pageID};
var getType = require('../utils').getType;

var markID = conf.markID;

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
  this.timeout(20000);

  before(function(done) {
    login(credentials, options, function (err, localAPI) {
      if(err) return done(err);

      assert(localAPI);
      api = localAPI;
      markID = api.getCurrentUserID();
      stopListening = api.listen(function (err, msg) {
        if (err) throw err;

        Object.keys(tests).map(function(key) {
          if (getType(tests[key]) === 'Function' && tests[key](msg)){
            delete tests[key];
            dones[key]();
            delete dones[key];
          }
        });
      });

      fs.writeFileSync('tests/tests-appState.json', JSON.stringify(api.getAppState()));

      done();
    });
  });

  it('should login without error', function (done){
   if (api) done();
  });

  it('should get the right user ID', function (){
   assert(markID === api.getCurrentUserID());
  });

  it('should send text message object (user)', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return msg.type === 'message' && msg.body === 'test' + time;
    };
    api.sendMessage({body: 'test' + time}, markID, checkError(done));
  });

  it('should send sticker message object (user)', function (done){
    var stickerID = '767334526626290';
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return msg.type === 'message' &&
             msg.attachments.length > 0 &&
             msg.attachments[0].type === 'sticker' &&
             msg.attachments[0].stickerID === stickerID;
    };
    api.sendMessage({sticker: stickerID}, markID, checkError(done));
  });

  it('should send basic string (user)', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'message' && msg.body === 'test' + time);
    };
    api.sendMessage('test' + time, markID, checkError(done));
  });

  it('should send text message object (group)', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return msg.type === 'message' && msg.body === 'test' + time;
    };
    api.sendMessage({body: 'test' + time}, groupChatID, checkError(done));
  });

  it('should send sticker message object (group)', function (done){
    var stickerID = '767334526626290';
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return msg.type === 'message' &&
             msg.attachments.length > 0 &&
             msg.attachments[0].type === 'sticker' &&
             msg.attachments[0].stickerID === stickerID;
    };
    api.sendMessage({sticker: stickerID}, groupChatID, checkError(done));
  });

  it('should send basic string (group)', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return msg.type === 'message' && msg.body === 'test' + time;
    };
    api.sendMessage('test' + time, groupChatID, checkError(done));
  });

  it('should change chat title', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return msg.type === 'event' &&
             msg.logMessageType === 'log:thread-name' &&
             msg.logMessageData.name === 'test chat ' + time;
    };
    api.setTitle('test chat ' + time, groupChatID, checkError(done));
  });

  it('should kick user', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return msg.type === 'event' &&
             msg.logMessageType === 'log:unsubscribe' &&
             msg.logMessageData.removed_participants.indexOf('fbid:' + roseID) > -1;
    };
    api.removeUserFromGroup(roseID, groupChatID, checkError(done));
  });

  it('should add user', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'event' &&
        msg.logMessageType === 'log:subscribe' &&
        msg.logMessageData.
          added_participants.indexOf('fbid:'+roseID) > -1);
    };
    api.addUserToGroup(roseID, groupChatID, checkError(done));
  });

  it('should mark as read', function (done){
    api.markAsRead(groupChatID, done);
  });

  it('should send typing indicator', function (done) {
    var stopType = api.sendTypingIndicator(groupChatID, function(err) {
      if(err) return done(err);

      stopType();
      done();
    });
  });

  it('should get the right user info', function (done) {
    api.getUserInfo(markID, function(err, data) {
      if(err) return done(err);

      var mark = data[markID];

      assert(mark.name === "Marc Zuckerbot");
      assert(mark.firstName === "Marc");
      assert(mark.vanity === '');
      assert(mark.profileUrl === 'https://www.facebook.com/profile.php?id=100009069356507');
      assert(mark.gender === 2);
      assert(mark.type === 'friend');
      assert(!mark.isFriend);

      done();
    });
  });

  after(function (){
    if (stopListening) stopListening();
  });
});
