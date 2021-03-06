const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static('public'));
app.use('*', (req, res, next) => {
		res.status(404).sendFile( path.resolve(__dirname, '404.html'));
	});

app.listen(3000);
