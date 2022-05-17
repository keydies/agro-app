const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get('serverPort');

const runServer = async () => {
	try {
		await mongoose.connect(config.get('dbUrl'));
		app.listen(PORT, () => {
			console.log('Server has been started on port', PORT);
		});
	} catch (event) {}
};

runServer();
