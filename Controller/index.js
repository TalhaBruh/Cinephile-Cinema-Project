var express = require("express");
var router = express.Router();
var Movie = require("../models/movie");

/* GET home page. */
router.get("/explore", function (req, res, next) {
  Movie.find()
    .sort("name")
    .then((movies) => {
      res.render("index", { title: "movie page", movies });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
});

module.exports = router;
