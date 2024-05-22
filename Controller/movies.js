var express = require("express");
var router = express.Router();
var Movie = require("../models/movie");

// GET
router.get("/", function (req, res, next) {
  Movie.find()
    .sort("name")
    .then((movies) => {
      res.render("movies", { title: "movie page", movies });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
});

// POST
router.post("/", function (req, res, next) {
  // Validate request
  if (!req.body.name || !req.body.releaseDate) {
    return res.status(400).send({
      message: "Movie content cannot be empty",
    });
  }

  // Create a Movie
  const movie = new Movie({
    name: req.body.name,
    releaseDate: req.body.releaseDate,
    votes: 0,
  });

  // Save Movie in the database
  movie
    .save()
    .then(() => {
      res.status(200).redirect("/explore");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the movie entry.",
      });
    });
});

// DELETE
router.delete("/:id", function (req, res, next) {
  Movie.deleteOne({ _id: req.params.id })
    .then(() => {
      console.log("Movie deleted successfully");
      res.status(200).redirect("/explore"); // Redirect to the movies page
    })
    .catch((err) => {
      console.error("Error deleting movie:", err);
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the movie entry.",
      });
    });
});

module.exports = router;
