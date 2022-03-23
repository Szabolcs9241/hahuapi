var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hahuRouter = require('./routes/hahu');

var app = express();

var mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost/hahu';

mongoose.connect(MONGO_URI, {useNewUrlParser: true})
    .then(console.log("Connected to DB"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/hahu', hahuRouter);

module.exports = app;
