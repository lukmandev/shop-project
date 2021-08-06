const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


const schema = new Schema({
	text: String
});


module.exports = model('country', schema, 'country');
