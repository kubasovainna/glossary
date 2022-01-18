const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.bep7w.mongodb.net/glossary?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Connected');
});

// Models
require('./term');