var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
	name: String,
	releaseDate: Number,
	date: {
		type: Date,
		default: Date.now
	},
	votes: Number
});

// Method to update a movie by ID
movieSchema.statics.updateMovie = function(movieId, updateData) {
  return this.findByIdAndUpdate(movieId, updateData, { new: true });
};

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
