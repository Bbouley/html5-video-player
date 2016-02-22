function maxVol (vol) {
    if (vol > 0.95) {
        return true
    };
};

function minVol (vol) {
    if (vol < 0.05) {
        return true
    };
};

function getCurrentTime(videoElement) {
    return videoElement.get(0).currentTime;
};

function timeToPercent (videoElement) {
    var currentTime = videoElement.get(0).currentTime;
    var duration = videoElement.get(0).duration;
    var percentTime = (currentTime/duration) * 100;
    return percentTime.toFixed(1);
};

function percentToLocation (percent, seekingElement) {
    var seekingElementPosition = seekingElement.position().left;
    var newPosition = (percent/100) * 490;
    return seekingElement.css({left : newPosition});
}

function moveSeeker (videoElement, seekingElement) {
    var percent = timeToPercent (videoElement);
    return percentToLocation (percent, seekingElement);
};

function pixelToPercent (pixels) {
    return (pixels/490) * 100;
};

function percentToTime (pixels, videoElement) {
    var percent = pixelToPercent(pixels)
    var duration = videoElement.get(0).duration;
    var clickTime = (percent/100) * duration;
    return videoElement.get(0).currentTime = clickTime;
};
