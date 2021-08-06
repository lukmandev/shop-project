const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');



const schema = new Schema({
 	isUser: {
 		type: Boolean,
 		default: false
 	},
 	userId: {
 		type: String,
 		default: ""
 	},
 	name: {
 		type: String,
 		default: ""
 	},
 	surname: {
 		type: String,
 		default: "",
 	},
 	phone: {
 		type: String,
 		default: "",
 	},
 	country: {
 		type: Schema.Types.ObjectId,
 	},
 	state: {
 		type: Schema.Types.ObjectId,
 	},
 	town: {
 		type: String,
 	},
 	zipPostalCode: {
 		type: Number,
 		required: true
 	},
 	cart: Object,
 	isApartment: {
 		type: Boolean,
 		default: false
 	},
 	address: {
 		houseNumber: String,
 		apartmentNumber: {
 			type: String,
 			default: ""
 		}
 	},
 	payType: {
 		type: String,
 		required: true
 	},
 	orderNote: {
 		type: String,
 		default: ""
 	}
});


module.exports = model('user-order', schema, 'user-order');