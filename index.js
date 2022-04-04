const express = require('express');
const mongoose = require('mongoose');
const termRoutes = require('./routes/termRoutes');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.Port || 8080

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/graph', express.static(path.join(__dirname, 'public')));
// app.use('/graph', express.static(__dirname + '/public'))
app.use(termRoutes)

async function start() {
	try {
		app.listen(PORT, () => {
			console.log(`Server has been started! PORT: ${PORT} :)`);
		});
	} catch (e) {
		console.log(e);
	}
}


start()