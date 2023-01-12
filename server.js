const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
	res.show = (name) => {
		res.sendFile(path.join(__dirname, `/views/${name}`));
	};
	next();
});
app.get(['/', '/home'], (req, res) => {
	res.show('index.html');
});

app.get('/about', (req, res) => {
	res.show('about.html');
});

app.get(['/user/settings', '/user/panel'], (req, res) => {
	res.show('user.html');
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, `404.jpg`));
});

app.listen(8000, () => {
	console.log('Server is running on port: 8000');
});