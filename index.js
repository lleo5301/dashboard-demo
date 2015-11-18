var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./config/db');

//connect to db here
mongoose.connect(db.url);

var app = express();

app.use(bodyParser.json());


//static routes
app.use('/', express.static('./public'));
app.use('/bower_componets', express.static('./bower_components'));

//api goes here



///listen
app.listen(3000);


