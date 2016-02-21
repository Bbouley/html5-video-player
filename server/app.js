// *** Main Dependencies *** //

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var mongoose = require('mongoose');


// *** Route Dependencies *** //

var main = require('./routes/index.js');
var api = require('./routes/api.js');


// *** Express instance *** //

var app = express();


// *** database connection *** //

mongoose.connect('mongodb://localhost/html5-video');


// *** View Engine *** //

var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// *** Static Directory *** //

app.use('views', path.join(__dirname, 'views'));


// *** Other Middleware *** //

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlEncoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));


// *** Main Routes *** //

app.use('/', routes);
app.use ('/api/', api);


// *** Server *** //

app.listen(3000, function() {
    console.log('server listening on port 3000');
});
