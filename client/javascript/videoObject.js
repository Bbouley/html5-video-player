var Video = function(title, url) {
    this.title = title;
    this.url = url;
    this.annotations = [];
};

Video.prototype.addAnnotation = function(annotation) {
    this.annotations.push(annotation);
};

Video.prototype.displayAnnotation = function(videoEl) {
    console.log(this.annotations[0].annotationEl)
    videoEl.after(this.annotations[0].annotationEl)
};

