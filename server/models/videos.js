var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Video = new Schema ({
    Title : String,
    URL : String,
    Annotations : [{
        Text : String,
        StartTime : Number,
        EndTime : Number,
        Location : String
    }]
});

module.exports = mongoose.model('videos', Video);
