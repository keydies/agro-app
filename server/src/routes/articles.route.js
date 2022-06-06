const Router = require('express');
const config = require('config');

const Articles = require('../models/Articles');

const router = new Router();

router.get('/articles', async (req, res) => {
	try {
		const articles = await Articles.find();
		return res.json({
			articles
		});
	} catch (event) {
		console.log(event);
		res.send({ message: 'Server error' });
	}
});

module.exports = router;
