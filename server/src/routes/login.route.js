const Router = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

const router = new Router();

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		const isPasswordValid = bcrypt.compareSync(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ message: 'Invalid password' });
		}
		const token = jwt.sign({ id: user.id }, config.get('secretKey'), {
			expiresIn: '1h'
		});
		return res.json({
			token,
			user: {
				id: user.id,
				email: user.email,
				username: user.username,
				areas: user.areas
			}
		});
	} catch (event) {
		console.log(event);
		res.send({ message: 'Server error' });
	}
});

module.exports = router;
