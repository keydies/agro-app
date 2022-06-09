const Router = require('express');

const Regions = require('../models/Regions');

const router = new Router();

router.get('/regions', async (req, res) => {
	try {
		const regions = await Regions.find();
		return res.json({
			regions
		});
	} catch (event) {
		console.log(event);
		res.send({ message: 'Server error' });
	}
});

module.exports = router;
