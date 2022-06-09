const Router = require('express');
const { db } = require('../models/User');

const User = require('../models/User');

const router = new Router();

router.post('/area-plan', async (req, res) => {
	try {
		const planData = req.body;
		const user = await User.findOne({ _id: planData._id });
		await user.areas.push({ planData });
		console.log(user.areas);
		await user.save();
		return res.json({
			message: 'План додано!'
		});
	} catch (e) {
		console.log(e);
		res.send({ message: 'Server error' });
	}
});

module.exports = router;
