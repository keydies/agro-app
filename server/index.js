const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const registrationRouter = require('./src/routes/registration.route');
const loginRouter = require('./src/routes/login.route');
const authRouter = require('./src/routes/auth.route');

const corsMiddleware = require('./src/middleware/cors.middleware');

const app = express();
const PORT = config.get('serverPort');

app.use(express.json());

app.use(corsMiddleware);

app.use('/api/auth', registrationRouter);
app.use('/api/auth', loginRouter);
app.use('/api/auth', authRouter);

const runServer = async () => {
	try {
		await mongoose.connect(config.get('dbUrl'));
		app.listen(PORT, () => {
			console.log('Server has been started on port', PORT);
		});
	} catch (event) {}
};

runServer();
