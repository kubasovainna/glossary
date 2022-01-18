const mongoose = require('mongoose');

const termSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	definition: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Term', termSchema)