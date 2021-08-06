const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


const schema = new Schema({
 	email: {
 		type: String,
 		unique: true,
 		required: true
 	},
 	name: {
 		type: String,
 		required: true
 	},
 	surname: {
 		type: String,
 		required: true
 	},
 	phone: {
 		type: Number,
 		default: 0
 	},
 	birthday: {
 		day: {
 			type: Number,
 			required: true
 		},
 		month: {
 			type: Number,
 			required: true
 		},
 		year: {
 			type: Number,
 			required: true
 		},
 	},
 	gender: {
 		type: Number,
 		default: 0
 	},
 	password: {
 		type: String,
 		required: true
 	},
 	
 	isActivated: {
 		type: Boolean,
 		default: false
 	},
 	activationLink: {
 		type: String,
 		required: true
 	},
 	resetPasswordString: {
 		type: String,
 		default: ""
 	},
 	resetPasswordExpires: {
 		type: Number,
 		default: 0
 	},
 	roles: [
 		'USER'
 	]
});


module.exports = model('user', schema, 'user');