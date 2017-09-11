var login = require('../index.js');
var fs = require('fs');
var assert = require('assert');

var conf =  JSON.parse(process.env.testconfig || fs.readFileSync('test/test-config.json', 'utf8'));
var credentials = {
  email: conf.user.email,
  password: conf.user.password,
};

var userIDs = conf.userIDs;

var options = {
  selfListen: true,
  listenEvents: true,
  logLevel: "silent",
  pageID: conf.pageID
};
var getType = require('../utils').getType;

var userID = conf.user.id;

var groupChatID;
var groupChatName;

function checkErr(done){
  return function(err) {
    if (err) done(err);
  };
}

// describe('Login As Page:', function() {
//   var api = null;
//   process.on('SIGINT', () => api && !api.logout() && console.log("Logged out :)"));
//   var tests = [];
//   var stopListening;
//   this.timeout(20000);

//   function listen(done, matcher) {
//     tests.push({matcher:matcher, done:done});
//   }

//   before(function(done) {
//     login(credentials, options, function (err, localAPI) {
//       if(err) return done(err);

//       assert(localAPI);
//       api = localAPI;
//       stopListening = api.listen(function (err, msg) {
//         if (err) throw err;
//         // Removes matching function and calls corresponding done
//         tests = tests.filter(function(test) {
//           return !(test.matcher(msg) && (test.done() || true));
//         });
//       });

//       done();
//     });
//   });

//   it('should login without error', function (){
//     assert(api);
//   });

//   it('should get the right user ID', function (){
//     assert(userID == api.getCurrentUserID());
//   });

//   it('should send text message object (user)', function (done){
//     var body = "text-msg-obj-" + Date.now();
//     listen(done, msg =>
//       msg.type === 'message' &&
//       msg.body === body &&
//       msg.isGroup === false
//     );
//     api.sendMessage({body: body}, userID, checkErr(done));
//   });

//   it('should send sticker message object (user)', function (done){
//     var stickerID = '767334526626290';
//     listen(done, msg =>
//       msg.type === 'message' &&
//       msg.attachments.length > 0 &&
//       msg.attachments[0].type === 'sticker' &&
//       msg.attachments[0].stickerID === stickerID &&
//       msg.isGroup === false
//     );
//     api.sendMessage({sticker: stickerID}, userID, checkErr(done));
//   });

//   it('should send basic string (user)', function (done){
//     var body = "basic-str-" + Date.now();
//     listen(done, msg =>
//       msg.type === 'message' &&
//       msg.body === body &&
//       msg.isGroup === false
//     );
//     api.sendMessage(body, userID, checkErr(done));
//   });

//   it('should send typing indicator', function (done) {
//     var stopType = api.sendTypingIndicator(userID, function(err) {
//       checkErr(done)(err);
//       stopType();
//       done();
//     });
//   });

//   it('should get the right user info', function (done) {
//     api.getUserInfo(userID, function(err, data) {
//       checkErr(done)(err);
//       var user = data[userID];
//       assert(user.name);
//       assert(user.firstName);
//       assert(user.vanity !== null);
//       assert(user.profileUrl);
//       assert(user.gender);
//       assert(user.type);
//       assert(!user.isFriend);
//       done();
//     });
//   });

//   it('should get the list of friends', function (done) {
//     api.getFriendsList(function(err, data) {
//       checkErr(done)(err);
//       assert(getType(data) === "Array");
//       data.map(function(v) {parseInt(v);});
//       done();
//     });
//   });

//   it('should log out', function (done) {
//     api.logout(done);
//   });

//   after(function (){
//     if (stopListening) stopListening();
//   });
// });
