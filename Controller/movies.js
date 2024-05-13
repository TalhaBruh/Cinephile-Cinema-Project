var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/movie');

// GET
router.get('/', function (req, res, next) {

  mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true })
    .then(() => console.log('connected to the database'))
    .catch(err => console.error('error connecting to db: ', err.errmsg));

  Movie
    .find()
    .sort('name')
    .then(movies => {
      res.render('movies', { title: 'movie page', movies });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
      });
    });
});

