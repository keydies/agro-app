const Router = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

const router = new Router();

router.post(
	'/registration',
	[
		check('email', 'Incorrect email').isEmail(),
		check(
			'username',
			'Password must be longer than 2 and shorter than 10'
		).isLength({ min: 2, max: 10 }),
		check(
			'password',
			'Password must be longer than 3 and shorter than 12'
		).isLength({ min: 3, max: 12 })
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res
					.status(400)
					.json({ message: 'Incorrect request', errors });
			}

			const { email, username, password } = req.body;
			const candidate = await User.findOne({ email });
			if (candidate) {
				return res.status(400).json({
					message: `User with email ${email} already exist`
				});
			}
			const hashPassword = await bcrypt.hash(password, 8);

			const user = new User({ email, username, password: hashPassword });
			await user.save();

			return res.json({
				message:
					'Ви успішно зареєструвались. Пройдіть авторизацію з цими даними!'
			});
		} catch (e) {
			console.log(e);
			res.send({ message: 'Server error' });
		}
	}
);

module.exports = router;
