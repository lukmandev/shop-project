const {Schema, model} = require('mongoose');


const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        unique: true,
        required: true
    },
    catalogId: {
       	type: String,
     	required: true
    },
    parent: {
    	type: String,
    	required: true
    }
});


module.exports = model('category', schema, 'category');