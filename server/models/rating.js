const {Schema, model} = require('mongoose');


const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    rating: {
        type: Number,
        default: 5,
        required: true
    }
});




module.exports = model('rating', schema, 'rating');