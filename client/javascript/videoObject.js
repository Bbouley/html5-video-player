var Video = function(title, url) {
    this.title = title;
    this.url = url;
    this.annotations = [];
};

Video.prototype.addAnnotation = function(annotation) {
    this.annotations.push(annotation);
};

Video.prototype.displayAnnotation = function(messageEl, videoEl) {
    var currTime = videoEl.get(0).currentTime;

    this.annotations.filter(function(obj){
        return currTime >= obj.startTime && currTime <= obj.endTime
    }).forEach(function(el) {
        messageEl.after(el.annotationEl);
    });
};

