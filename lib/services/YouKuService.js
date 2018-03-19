//http://player.youku.com/embed/XMzQ0MTY1NTQ4OA==
//http://player.youku.com/embed/XMzQ0Nzc4OTQ5Ng==
"use strict";

const VideoServiceBase = require("./VideoServiceBase");


class YouKuService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: 640, height: 390 };
  }

  extractVideoID(reference) {
    let match = reference.match(/\.youku\.com\/.*\/sid\/(\w+)|\.youku\.com\/embed\/(\w+)/);
    return match && (match[1] && match[1].length === 17 || match[2] && match[2].length === 17)? (match[1] || match[2]) : reference;
  }

  getVideoUrl(videoID) {
    let escapedVideoID = this.env.md.utils.escapeHtml(videoID);
    return `//player.youku.com/embed/${escapedVideoID}`;
  }

}


module.exports = YouKuService;
