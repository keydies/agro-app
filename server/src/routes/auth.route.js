const Router = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authMiddleware = require('../middleware/auth.middleware');

const router = new Router();

router.get('/auth', authMiddleware, async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.user.id });
		const token = jwt.sign({ id: user.id }, config.get('secretKey'), {
			expiresIn: '1h'
		});
		return res.json({
			token,
			user: {
				id: user.id,
				email: user.email,
				areas: user.areas
			}
		});
	} catch (e) {
		console.log(e);
		res.send({ message: 'Server error' });
	}
});

module.exports = router;
