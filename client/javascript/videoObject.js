var Video = function(title, url) {
    this.title = title;
    this.url = url;
    this.annotations = [];
    this.annotationId = 0;
};

Video.prototype.displayAnnotation = function(wrapperEl, videoEl) {
    var currTime = videoEl.get(0).currentTime;

    this.annotations.filter(function(obj){
        return currTime >= obj.startTime && currTime <= obj.endTime
    }).forEach(function(el, ind) {
        wrapperEl.append(el.annotationEl);
        $('#annotation' + ind).css({
            position: 'fixed',
            top : el.locationTop,
            left : el.locationLeft
        });
    });
};

Video.prototype.createAnnotation = function(text, startTime, obj) {
    var id = this.annotationId;
    var annotation = {
        annotationEl : '<p class="annotation" id="annotation' + id + '">' + text + '<p>',
        startTime : startTime,
        endTime : startTime + 5,
        locationLeft : obj.left,
        locationTop : obj.top
    };
    this.annotations.push(annotation);
    this.annotationId += 1;
}


function createAnnotation(text, startTime, obj) {
    return {
        annotationEl : '<p class="annotation">' + text + '<p>',
        startTime : startTime,
        endTime : startTime + 5,
        locationLeft : obj.left,
        locationTop : obj.top
    };
};
