let videoPlayer = null;
let isReadyPlayer = false;

const player = {
  init: function(dom, options) {
    initOpt = {};
    if(options.initOption) {
      initOpt = options.initOption;
    }

    videoPlayer = videojs(dom, initOpt);

    videoPlayer.ready(function(){
      isReadyPlayer = true;
      videoPlayer.src({ type: "video/mp4", src: options.videoUrl });
    });
    return this;
  },
  setPause: function() {
    videoPlayer.pause();
    return this;
  },
  setPlay: function() {
    videoPlayer.play();
    player.setMuted(false);
    player.setVolume(100);
    return this;
  },
  setMuted: function(flag) {
    videoPlayer.muted(flag);
    return this;
  },
  setVolume: function(volume) {
    // 1~100
    videoPlayer.volume(volume/100);
  },
  setPlayTime: function(time) {
    videoPlayer.currentTime(time);
    return this;
  },
  setEndedEvent: function(eventFunction) {
    videoPlayer.on('ended',function () {
      videoPlayer.pause();
      eventFunction();
    });
    return this;
  },
  setTimeUpdateEvent: function(eventFunction) {
    videoPlayer.on('timeupdate',function () {
        eventFunction();
      });
      return this;
  }
}