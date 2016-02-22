// *** Main Dependencies *** //

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var swig = require('swig');
var mongoose = require('mongoose');


// *** Route Dependencies *** //

var index = require('./routes/index.js');
// var api = require('./routes/api.js');


// *** Express instance *** //

var app = express();


// *** database connection *** //

// mongoose.connect('mongodb://localhost/html5-video');
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/html5-video';
mongoose.connect(mongoURI, function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});


// *** View Engine *** //

var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// *** Static Directory *** //

app.set('views', path.join(__dirname, './views'));


// *** Other Middleware *** //

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));


// *** Main Routes *** //

app.use('/', index);
// app.use ('/api/', api);


// *** Server *** //

app.listen(3000, function() {
    console.log('server listening on port 3000');
});

module.exports = app;
