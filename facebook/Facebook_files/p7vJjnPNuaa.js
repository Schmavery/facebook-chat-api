/*!CK:784277195!*//*1424143996,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["9DjTy"]); }

__d("isMessengerDotComURI",[],function(a,b,c,d,e,f){var g=new RegExp('(^|\\.)messenger\\.com$','i'),h=['https'];function i(j){if(j.isEmpty()&&j.toString()!=='#')return false;if(!j.getDomain()&&!j.getProtocol())return true;return (h.indexOf(j.getProtocol())!==-1&&g.test(j.getDomain()));}e.exports=i;},null);