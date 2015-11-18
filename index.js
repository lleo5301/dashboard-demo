var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./config/db');
var apiRoutes = require('./config/routes');

//connect to db here
mongoose.connect(db.url);

var app = express();

app.use(bodyParser.json());


//static routes
app.use('/', express.static('./public'));
app.use('/bower_componets', express.static('./bower_components'));


//api goes here
app.use('/api/v1', apiRoutes);


///listen
app.listen(3000);


