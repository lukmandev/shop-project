const {Schema, model} = require('mongoose');


const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    catalogId: {
        type: String,
        required: true,
        unique: true
    }
});


module.exports = model('catalog', schema, 'catalog');