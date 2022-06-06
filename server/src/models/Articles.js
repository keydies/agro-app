const { Schema, model } = require('mongoose');

const Articles = new Schema({
	title: { type: String, required: true },
	body: { type: String }
});

module.exports = model('Article', Articles);
