var oa = {reconnectOverrideTimeMillis:Date.now(),
  userActive:Date.now(),
  lastPresenceState:null,
  lastRequestErrorReason:null,
  fantail_logs:[],
  sessionID:(Math.random()*2147483648|0).toString(16),
  capabilities:8,
  streamingCapable:false,
  inStreaming:false,
  LONGPOLL_TIMEOUT:60000,
  STREAMING_TIMEOUT:60000,
  P_TIMEOUT:30000,
  IFRAME_LOAD_TIMEOUT:30000,
  MIN_RETRY_INTERVAL:5000,
  MAX_RETRY_INTERVAL:320000,
  MIN_12002_TIMEOUT:9000,
  MIN_504_TIMEOUT:20000,
  STALL_THRESHOLD:180000,
  JUMPSTART_THRESHOLD:90000,
  MIN_INIT_PROBE_DELAY:3000,
  INIT_PROBE_DELAY_RANDOMIZE_RANGE:12000,
  CHANNEL_PROXY_REPORTING_MIN_INTERVAL:10000,
  PROBE_DELAY:60000,
  PROBE_HEARTBEATS_INTERVAL_LOW:1000,
  PROBE_HEARTBEATS_INTERVAL_HIGH:5000,
  STREAMING_EXIT_STATE_ON_CONTINUE:false,
  FANTAIL_QUEUE_CAPACITY:50
};

var pa = {
  MAX_CONTINUOUS_PULL_FAILS:3,
  enabled:false,
  uptimeMillis:Date.now(),
  timeInGoodStatesStartMillis:Date.now(),
  timeInGoodStatesMillis:0,
  initialized:false,
  firstPullSentTimeMillis:Date.now(),
  accumulatedPullTimeMillis:0,
  pullStartTimeMillis:0,
  pingCount:0,
  pullCount:0,
  continuousPullFails:0,
  getTimeSinceFirstPullSentSeconds:function(){
    return (Date.now()-this.firstPullSentTimeMillis)/1000;
  },
  getUptimeSeconds:function(){
    return (Date.now()-this.uptimeMillis)/1000;
  },
  getAccumulatedPullTimeSeconds:function(){
    var ya=this.accumulatedPullTimeMillis,
    za=Date.now();
    if(this.pullStartTimeMillis>0&&za-this.pullStartTimeMillis<=oa.LONGPOLL_TIMEOUT)ya+=(za-this.pullStartTimeMillis);
    var ab=ya/1000;
    if(ab>=this.getTimeSinceFirstPullSentSeconds())this.initialize();
    return ab;
  },
  getPingToPullRatio:function(){
    return this.pullCount===0?0:this.pingCount/this.pullCount;
  },
  reportPullSent:function(){
    if(!this.enabled) return;
    if(!this.initialized) this.initialize();
    this.pullStartTimeMillis = Date.now();
  },
  initialize:function(){
    this.initialized=true;
    this.firstPullSentTimeMillis=Date.now();
    this.pullStartTimeMillis=0;
    this.accumulatedPullTimeMillis=0;
    this.pingCount=0;
    this.pullCount=0;
    this.timeInGoodStatesStartMillis=Date.now();
    this.timeInGoodStatesMillis=0;
    this.uptimeMillis=Date.now();
    this.enabled = true;
  },
  reportPullReturned:function(ya, za){
    if(!this.enabled)return;
    if(this.pullStartTimeMillis>0){
      this.accumulatedPullTimeMillis+=(Date.now()-this.pullStartTimeMillis);
      if(ya){this.pullCount++;
        this.continuousPullFails=0;
      } else this.continuousPullFails++;
    }
    this.pullStartTimeMillis=0;
  },
  reportPingSent:function(){if(!this.enabled)return;
    this.pingCount++;
  },
  isGoodState:function(ya){
    return ya.indexOf('pull')===0||ya.indexOf('init')===0||ya.indexOf('idle')===0;
  },
  getTotalTimeInGoodStatesSeconds:function(){
    var ya=this.timeInGoodStatesMillis;
    if(this.timeInGoodStatesStartMillis>0) ya+=(Date.now()-this.timeInGoodStatesStartMillis);
    return ya/1000;
  },
  clientEnteredState:function(ya){
    if(!this.enabled)return;
    var za=this.isGoodState(ya);
    if(za&&this.timeInGoodStatesStartMillis===0){this.timeInGoodStatesStartMillis=Date.now();
    } else if(!za&&this.timeInGoodStatesStartMillis>0){this.timeInGoodStatesMillis=Date.now()-this.timeInGoodStatesStartMillis;
      this.timeInGoodStatesStartMillis=0;
    }
  },
  transportEnteredState:function(ya){
    if(!this.enabled)return;
    if(ya.indexOf('pull')===0){
      this.reportPullSent();
    }else if(ya.indexOf('ping')===0&&oa.lastRequestErrorReason!==j.SYS_TIMETRAVEL&&oa.lastRequestErrorReason!==j.SYS_ONLINE&&oa.lastRequestErrorReason!==j.SYS_OWNER&&oa.lastRequestErrorReason!==j.SYS_NONOWNER) this.reportPingSent();
  },
  doSerialize:function(){if(!this.enabled)return "";
    return (this.getTimeSinceFirstPullSentSeconds()).toFixed(0)+','+(this.getAccumulatedPullTimeSeconds()).toFixed(0)+','+(this.getPingToPullRatio()).toFixed(3)+','+(this.getUptimeSeconds()).toFixed(0)+','+(this.getTotalTimeInGoodStatesSeconds()).toFixed(0);
  }
};

module.exports = pa;