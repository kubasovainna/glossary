const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.use('/', function (request, response) {
	response.render('main', {
		title: 'Список терминов',
		terms: terms
	})
})

app.listen(3333, () => {
	console.log('Application listening on port 3333!');
});