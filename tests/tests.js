var mocha = require('mocha');
var login = require('../index.js');
var fs = require('fs');
var assert = require('assert');

var conf = JSON.parse(fs.readFileSync('tests/test-config.json', 'utf8'));
var credentials = {email: conf.email1, password: conf.password1};
var groupChatId = conf.groupChatId;
var otherId = conf.otherId;

var options = {logLevel: 'silent', selfListen: 'true', listenEvents: 'true'};
var pageOptions = {logLevel: 'silent', pageId: credentials.pageId};

var user_id = 0;

function checkError(done){
  return function(err) {
    if (err) done(err);
  };
}

// Approach: object {test-name: null|compare fn|true}
// Init all tests to null
// Create a listen that tries to find an appropriate compare obj and set it to true and call `done`.
// In the `it`, set the compare obj.
describe('Listen:', function() {
  var api = null;
  var tests = {};
  var dones = {};
  var submitted = false;
  this.timeout(5000);


  before(function(done) {
    login(credentials, options, function (err, localAPI) {
      checkError(done)(err);
      assert(localAPI);
      api = localAPI;
      user_id = api.getCurrentUserId();
      api.listen(function (err, msg, stopListening) {
        Object.keys(tests).map(function(key) {
          if (typeof tests[key] === 'function' && tests[key](msg)){
            tests[key] = true;
            dones[key]();
          }
        });

       // if (Object.keys(tests).reduce(function (e, acc) {
       //  return (tests[e] === true && acc);
       // }, true)) stopListening();
      });
      done();
    });
  });

  it('Should login without error', function (done){
   if (api) done();
  });

  
  it('Send/rec a text message object', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'message' && msg.body === 'test' + time);
    };
    api.sendMessage({body: 'test'+time}, user_id, checkError(done));  
  });

  it('Send/rec a sticker message object', function (done){
    var sticker_id = '767334526626290'; 
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'sticker' && msg.sticker_id == sticker_id);
    };
    api.sendMessage({sticker: sticker_id}, user_id, checkError(done));  
  });

  it('Send/rec a basic string', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'message' && msg.body === 'test' + time);
    };
    api.sendMessage('test'+time, user_id, checkError(done));  
  });

  it('Change chat title', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'event' && 
        msg.log_message_type === 'log:thread-name' && 
        msg.log_message_data.name === 'test chat ' + time);
    };
    api.setTitle('test chat '+time, groupChatId, checkError(done));  
  });

  it('Kick user', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'event' && 
        msg.log_message_type === 'log:unsubscribe' &&
        msg.log_message_data.
          removed_participants.indexOf('fbid:'+otherId) > -1);
    };
    api.removeUserFromGroup(otherId, groupChatId, checkError(done));  
  });

  it('Add user', function (done){
    var time = Date.now();
    dones[time] = done;
    tests[time] = function (msg) {
      return (msg.type === 'event' && 
        msg.log_message_type === 'log:subscribe' &&
        msg.log_message_data.
          added_participants.indexOf('fbid:'+otherId) > -1);
    };
    api.addUserToGroup(otherId, groupChatId, checkError(done));  
  });
});
