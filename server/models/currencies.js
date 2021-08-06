const {Schema, model} = require('mongoose');


const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    unicode: {
        type: String,
        required: true
    },
});






module.exports = model('currencies', schema, 'currencies');