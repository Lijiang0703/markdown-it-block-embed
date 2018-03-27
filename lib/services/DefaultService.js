//不带运营商的video
"use strict";

const VideoServiceBase = require("./VideoServiceBase");


class DefaultService extends VideoServiceBase {

  getDefaultOptions() {
    return {};
  }

  extractVideoID(reference) {
    return reference
  }

  getVideoUrl(videoID) {
    return videoID
  }

}


module.exports = DefaultService;
