var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv').config();
var logger = require('morgan');
var connectDB = require('./db');

var indexRouter = require('./controller/index');
var usersRouter = require('./controller/users');
var moviesRouter = require('./controller/movies');
var authRouter = require('./controller/authcontroller');

var app = express();

// Connect to the database
connectDB();

console.log("starting");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render("home.ejs");
});

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/auth', authRouter);

app.get('/sign', (req, res) => {
  res.render("sign.ejs");
});

app.get('/trailers', (req, res) => {
  res.render("trailers.ejs");
});

app.get('/signin', (req, res) => {
  res.render("signin.ejs");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
