const { Schema, model, ObjectId } = require('mongoose');

const User = new Schema({
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	areas: [{ type: ObjectId, ref: 'Area' }]
});

module.exports = model('User', User);
