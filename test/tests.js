var login = require('../index.js');
var fs = require('fs');
var assert = require('assert');

var conf = JSON.parse(fs.readFileSync('test/test-config.json', 'utf8'));
var credentials = {
  email: conf.user.email,
  password: conf.user.password,
};

try {
  credentials.appState = JSON.parse(fs.readFileSync('test/test-appstate.json', 'utf8'));
} catch (e) {}

var userIDs = conf.userIDs;

var options = { selfListen: true, listenEvents: true, logLevel: "silent"};
var pageOptions = {logLevel: 'silent', pageID: conf.pageID};
var getType = require('../utils').getType;

var userID = conf.user.id;

var groupChatID;
var groupChatName;

function checkErr(done){
  return function(err) {
    if (err) done(err);
  };
}

describe('Login:', function() {
  var api = null;
  var tests = [];
  var stopListening;
  this.timeout(20000);

  function listen(done, matcher) {
    tests.push({matcher:matcher, done:done});
  }

  before(function(done) {
    login(credentials, options, function (err, localAPI) {
      if(err) return done(err);

      assert(localAPI);
      api = localAPI;
      stopListening = api.listen(function (err, msg) {
        if (err) throw err;
        // Removes matching function and calls corresponding done
        tests = tests.filter(function(test) {
          return !(test.matcher(msg) && (test.done() || true));
        });
      });

      fs.writeFileSync('test/test-appstate.json', JSON.stringify(api.getAppState()));
      done();
    });
  });

  it('should login without error', function (){
   assert(api);
  });

  it('should get the right user ID', function (){
   assert(userID == api.getCurrentUserID());
  });

  it('should send text message object (user)', function (done){
    var body = "text-msg-obj-" + Date.now();
    listen(done, function (msg) {
      return msg.type === 'message' && msg.body === body;
    });
    api.sendMessage({body: body}, userID, checkErr(done));
  });

  it('should send sticker message object (user)', function (done){
    var stickerID = '767334526626290';
    listen(done, function (msg) {
      return msg.type === 'message' &&
        msg.attachments.length > 0 &&
        msg.attachments[0].type === 'sticker' &&
        msg.attachments[0].stickerID === stickerID;
    });
    api.sendMessage({sticker: stickerID}, userID, checkErr(done));
  });

  it('should send basic string (user)', function (done){
    var body = "basic-str-" + Date.now();
    listen(done, function (msg) {
      return (msg.type === 'message' && msg.body === body);
    });
    api.sendMessage(body, userID, checkErr(done));
  });

  it('should create a chat', function (done){
    var body = "new-chat-" + Date.now();
    listen(done, function (msg) {
      return msg.type === 'message' && msg.body === body;
    });
    api.sendMessage(body, userIDs, function(err, id){
      checkErr(done)(err);
      groupChatID = id;
    });
  });

  it('should send text message object (group)', function (done){
    var body = "text-msg-obj-" + Date.now();
    listen(done, function (msg) {
      return msg.type === 'message' && msg.body === body;
    });
    api.sendMessage({body: body}, groupChatID, function(err, id){
      checkErr(done)(err);
      assert(groupChatID === id);
    });
  });

  it('should send basic string (group)', function (done){
    var body = "basic-str-" + Date.now();
    listen(done, function (msg) {
      return msg.type === 'message' && msg.body === body;
    });
    api.sendMessage(body, groupChatID, function(err, id) {
      checkErr(done)(err);
      assert(groupChatID === id);
    });
  });

  it('should send sticker message object (group)', function (done){
    var stickerID = '767334526626290';
    listen(done, function (msg) {
      return msg.type === 'message' &&
        msg.attachments.length > 0 &&
        msg.attachments[0].type === 'sticker' &&
        msg.attachments[0].stickerID === stickerID;
    });
    api.sendMessage({sticker: stickerID}, groupChatID, function (err, id) {
      assert(groupChatID === id);
      checkErr(done)(err);
    });
  });

  it('should send an attachment with a body (group)', function (done){
    var body = "attach-" + Date.now();
    var attach = [];
    attach.push(fs.createReadStream("test/data/test.txt"));
    attach.push(fs.createReadStream("test/data/test.png"));
    listen(done, function (msg) {
      return msg.type === 'message' && msg.body === body;
    });
    api.sendMessage({attachment: attach, body: body}, groupChatID, function(err, id){
      checkErr(done)(err);
      assert(groupChatID == id);
    });
  });


  it('should change chat title', function (done){
    var title = 'test-chat-title-' + Date.now();
    listen(done, function (msg) {
      return msg.type === 'event' &&
        msg.logMessageType === 'log:thread-name' &&
        msg.logMessageData.name === title;
    });
    groupChatName = title;
    api.setTitle(title, groupChatID, checkErr(done));
  });

  it('should kick user', function (done){
    var id = userIDs[0];
    listen(done, function (msg) {
      return msg.type === 'event' &&
        msg.logMessageType === 'log:unsubscribe' &&
        msg.logMessageData.removed_participants.indexOf('fbid:' + id) > -1;
    });
    api.removeUserFromGroup(id, groupChatID, checkErr(done));
  });

  it('should add user', function (done){
    var id = userIDs[0];
    listen(done, function (msg) {
      return (msg.type === 'event' &&
        msg.logMessageType === 'log:subscribe' &&
        msg.logMessageData.added_participants.indexOf('fbid:'+id) > -1);
    });
    api.addUserToGroup(id, groupChatID, checkErr(done));
  });

  it('should retrieve a list of threads', function (done) {
    api.getThreadList(0, 20, function(err, res) {
      checkErr(done)(err);
      assert(res.reduce(function (p, v) {
          return p || 
          // This checks to see if the group chat we just made 
          // is in the list... it should be.
            (v.threadFbid == groupChatID &&
              userIDs.reduce(function (pr, val)
              {return pr && v.participants.indexOf(val) > -1;}, true) &&
              v.name == groupChatName);
        }, false));
      done();
    });
  });

  it('should mark as read', function (done){
    api.markAsRead(groupChatID, done);
  });

  it('should send typing indicator', function (done) {
    var stopType = api.sendTypingIndicator(groupChatID, function(err) {
      checkErr(done)(err);
      stopType();
      done();
    });
  });

  it('should get a list of online users', function (done){
    api.getOnlineUsers(function(err, res) {
      checkErr(done)(err);
      assert(getType(res) === "Array");
      res.map(function(v) {
        assert(v.timestamp);
        assert(v.userID);
        assert(v.statuses);
        assert(v.statuses.status);
        assert(v.statuses.webStatus);
        assert(v.statuses.fbAppStatus);
        assert(v.statuses.messengerStatus);
        assert(v.statuses.otherStatus);
      });
      done();
    });
  });

  it('should get the right user info', function (done) {
    api.getUserInfo(userID, function(err, data) {
      checkErr(done)(err);
      var mark = data[userID];
      assert(mark.name);
      assert(mark.firstName);
      assert(mark.vanity !== null);
      assert(mark.profileUrl);
      assert(mark.gender);
      assert(mark.type);
      assert(!mark.isFriend);
      done();
    });
  });

  it('should get the list of friends', function (done) {
    api.getFriendsList(userID, function(err, data) {
      checkErr(done)(err);
      assert(getType(data) === "Array");
      data.map(function(v) {parseInt(v);});
      done();
    });
  });

  after(function (){
    if (stopListening) stopListening();
  });
});
