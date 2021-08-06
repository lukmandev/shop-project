const {Schema, model} = require('mongoose');


const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    catalogList: [
        {
            type: String,
            ref: 'catalog'
        }
    ]
});




module.exports = model('color', schema, 'color');