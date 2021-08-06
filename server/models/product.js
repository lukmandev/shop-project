const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');
require('mongoose-double')(mongoose);

const schema = new Schema({
    title: {
    	type: String,
    	required: true
    },
    description: {
    	type: String,
    	default: ""
    },
    catalog: {
        type: String,
        default: ""
    },
    subCatalog: {
        type: String,
        default: "",
    },
    category: {
        type: String,
        default: "",
    },
    images: [
        {
            img: {
                type: String,
                required: true
            },
            imgFrom: {
                type: Number,
                default: 0
            }
        }
    ],
    rating: {
    	type: Schema.Types.Double,
    	default: 5.0
    },
    detail: {
    	detailType: {
    		type: String,
            default: ""
    	},
    	text: {
    		type: String,
            default: ""
    	}
    },
    saleMessage: {
    	type: String,
    	default: "",
    },
    productInfo: [
    	{
    		name: String,
    		value: String
    	}
    ],
    price: [
    	{
    		price: {
                type: Number,
                default: 0
            },
            units: {
                type: Schema.Types.ObjectId,
                ref: 'currencies',
                default: '60f5d1eb0ee1d60418550e95'
            },
            oldPrice: {
                type: Schema.Types.Mixed,
                default: false
            }
    	},
    	{
    		price: {
                type: Number,
                default: 0
            },
            units: {
                type: Schema.Types.ObjectId,
                ref: 'currencies',
                default: '60f5d1eb0ee1d60418550e96'
            },
            oldPrice: {
                type: Schema.Types.Mixed,
                default: false
            }
    	},
    	{
    		price: {
                type: Number,
                default: 0
            },
    		units: {
                type: Schema.Types.ObjectId,
                ref: 'currencies',
                default: '60f5d1eb0ee1d60418550e97'
            },
    		oldPrice: {
                type: Schema.Types.Mixed,
                default: false
            }
    	}
    ],
    freeShipping: {
        type: Boolean,
        default: false
    },
    hasManufacturer: {
        type: Boolean,
        default: false
    },
    manufacturer: {
        type: String,
        default: ""
    },
    hasSize: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    hasColor: {
        type: Boolean,
        default: false
    },
    soldCount: {
        type: Number,
        default: 0
    },
    willExpire: {
        type: Number,
        default: 0
    }
});


module.exports = model('product', schema, 'product');