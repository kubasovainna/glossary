const express = require('express');
const mongoose = require('mongoose');
const termRoutes = require('./routes/termRoutes');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = process.env.Port || 8080

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(cookieParser('CookingBlogSecure'));
app.use(session({
	secret: 'CookingBlogSecretSession',
	saveUninitialized: true,
	resave: true
}));
app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(termRoutes)
app.use('/graph', express.static(__dirname + '/public'))

async function start() {
	try {
		app.listen(PORT, () => {
			console.log('Server has been started!:)');
		});
	} catch (e) {
		console.log(e);
	}
}


start()