//https://v.qq.com/iframe/player.html?vid=w00202az26u&tiny=0&auto=0
//https://v.qq.com/iframe/player.html?vid=b0026zcd1po&tiny=0&auto=0
//https://v.qq.com/iframe/player.html?vid=d0600o62lz1&tiny=0&auto=0


"use strict";

const VideoServiceBase = require("./VideoServiceBase");


class TencentService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: "100%", height: "100%" };
  }

  extractVideoID(reference) {
    let match = reference.match(/\.qq\.com\/.*vid=(\w+)/);
    return match && match[1].length === 11 ? match[1] : reference;
  }

  getVideoUrl(videoID) {
    let escapedVideoID = this.env.md.utils.escapeHtml(videoID);
    return `//v.qq.com/iframe/player.html?vid=${escapedVideoID}&tiny=0&auto=0`;
  }

}


module.exports = TencentService;
