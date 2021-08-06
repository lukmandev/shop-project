const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');
require('mongoose-double')(mongoose);

const schema = new Schema({
    userId: {
    	type: Schema.Types.ObjectId,
    	required: true,
        ref: 'user'
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'product'
    }
});


module.exports = model('interested-user', schema, 'interested-user');