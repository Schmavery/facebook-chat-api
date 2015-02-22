/*!CK:1588600518!*//*1424119050,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["6JCsB"]); }

__d("ItunesDetector",["UserAgent_DEPRECATED"],function(a,b,c,d,e,f,g){function h(){var j=navigator.plugins;if(j&&j.length)for(var k=0;k<j.length;k++)if(j[k].name.indexOf("iTunes Application Detector")>-1)return true;return false;}var i={hasItunes:function(){if(g.osx()){return true;}else return h();}};e.exports=i;},null);