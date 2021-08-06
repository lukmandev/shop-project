const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


const schema = new Schema({
	text: String,
	countryId: {
		type: Schema.Types.ObjectId,
		ref: 'country',
		required: true
	}
});


module.exports = model('state', schema, 'state');