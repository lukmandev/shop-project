const {Schema, model} = require('mongoose');


const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    subCatalogId: {
        type: String,
        unique: true,
        required: true
    },
    parent: {
        type: String,
        required: true
    }
});


module.exports = model('sub-catalog', schema, 'sub-catalog');