var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv').config()
var logger = require('morgan');


// Mongoose and schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Load the Movie model

var Movie = require('./models/movie');
var indexRouter = require('./Controller/index');
var usersRouter = require('./Controller/users');
var moviesRouter = require('./Controller/movies');

