const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


const schema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'user',
		required: true
	},
 	name: String,
 	surname: String,
 	streetAddress: String,
 	country: {
 		type: String,
 		required: true
 	},
 	state: {
 		type: String,
 		required: true
 	},
 	town: {
 		type: String,
 		required: true
 	}
 	phone: Number,
 	zipPostalCode: Number,
 	isMain: Boolean
});


module.exports = model('user-address', schema, 'user-address');