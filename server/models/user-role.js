const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');



const schema = new Schema({
 	name: {
 		type: String,
 		default: 'USER'
 	}
});


module.exports = model('user-role', schema, 'user-role');