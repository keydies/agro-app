const { Schema, model } = require('mongoose');

const Regions = new Schema({
	regionName: { type: String, required: true }
});

module.exports = model('Regions', Regions);
