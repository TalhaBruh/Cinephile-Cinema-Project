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

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;