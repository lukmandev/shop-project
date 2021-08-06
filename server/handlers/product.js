const Product = require('../models/product.js');
const Manufacturer = require('../models/manufacturer.js');
const Rating = require('../models/rating.js');
const Catalog = require('../models/catalog/catalog.js');
const SubCatalog = require('../models/catalog/sub-catalog.js');
const Category = require('../models/catalog/category.js');




class Handler{
	async getProduct(req, res){
		const {
			catalog,
			subCatalog,
			category,
			rating,
			shipping,
			price,
			manufacturer,
			color,
			sizes,
			currency,

			fromProduct,
			showProduct,
			sortBy
		} = req.body;

		const filter = {}
		let sort = {}
		let fromCount = 0;
		let productShowCount = 8;


		if(fromProduct){
			fromCount = fromProduct;
		}
		if(showProduct){
			productShowCount = showProduct;
		}

		if(category){
			filter.category = category;
		}else {
			if(subCatalog){
				filter.subCatalog = subCatalog;
			}else {
				if(catalog){
					filter.catalog = catalog;
				}
			}
		}
		
		if(rating && rating.length){
			const ratingFilter = rating.map(elem => {
				return {
					rating: elem
				}
			});
			filter.$or = ratingFilter;
		}
		if(shipping){
			filter.shipping = shipping;
		}
		if(price){
			filter[`price.${currency}price`] = {
				$lte: price[0],
				$gte: price[1]
			}
		}
		if(manufacturer && manufacturer.length){
			const manufacturerFilter = manufacturer.map(elem => {
				return {
					manufacturer: elem
				}
			});
			if(filter.$or){
				const concatArray = manufacturerFilter.concat(filter.$or);
				filter.$or = concatArray;
			}else {
				filter.$or = manufacturerFilter;
			}
		}
		if(color && color.length){
			const colorFilter = color.map(elem => {
				return {
					color: elem
				}
			});
			if(filter.$or){
				const concatArray = colorFilter.concat(filter.$or);
				filter.$or = concatArray;
			}else {
				filter.$or = colorFilter;
			}
		}
		if(sizes && sizes.length){
			const sizeFilter = sizes.map(elem => {
				return {
					hasSize: true,
					size: elem
				}
			});
			if(filter.$or){
				const concatArray = sizeFilter.concat(filter.$or);
				filter.$or = concatArray;
			}else {
				filter.$or = sizeFilter;
			}
		}


		if(sortBy){
			if(sortBy === 1){
				sort = {_id: -1}
			}else if(sortBy === 2){
				sort = {_id: 1}
			}else if(sortBy === 3){
				sort = {soldCount: -1}
			}else if(sortBy === 4){
				sort = {rating: -1}
			}else if(sortBy === 5){
				sort = {price: 1}
			}else if(sortBy === 6){
				sort = {price: -1}
			}else if(sortBy === 7){
				sort = {title: -1}
			}
		}

		
		try {
			const products = await Product.find(filter).sort(sort).limit(productShowCount).skip(fromCount).exec();
			return res.status(200).json(products);			
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async getGroupProduct(req, res){
		const {
			products
		} = req.body;
		try {
			const productArray = [];
			for(let i in products){
				const product = await Product.findOne({_id: i}).exec();
				if(product){
					productArray.push(product);
				}else {
					delete products[i];
				}
			}
			return res.status(200).json({
				cart: products,
				product: productArray
			});
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async getProductById(req, res){
		const { id } = req.params;
		try {
			const product = await Product.findOne({_id: id}).exec();
			if(product){
				return res.status(200).json(product);	
			}
			return res.status(404).end();
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async getProductCount(req, res){
		const {
			catalog,
			subCatalog,
			category
		} = req.body;

		const filter = {}

		if(category){
			filter.category = category;
		}else {
			if(subCatalog){
				filter.subCatalog = subCatalog;
			}else {
				if(catalog){
					filter.catalog = catalog;
				}
			}
		}
		try {
			const products = await Product.countDocuments(filter).exec();
			return res.status(200).json(products);
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async getManufacturer(req, res){
		const {
			catalogId
		} = req.body;

		try {
			const manufacturer = await Manufacturer.find({catalogList: {
				$in: catalogId
			}}).exec();
			if(!manufacturer){
				return res.status(500).end();
			}
			return res.status(200).json(manufacturer);
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async getManufacturerCount(req, res){
		const {
			catalog,
			subCatalog,
			category,
			manufacturerId,
		} = req.body;

		const filter = {
			manufacturer: manufacturerId
		}

		if(category){
			filter.category = category;
		}else {
			if(subCatalog){
				filter.subCatalog = subCatalog;
			}else {
				if(catalog){
					filter.catalog = catalog;
				}
			}
		}
		try {
			const count = await Product.countDocuments(filter).exec();
			return res.status(200).json({
				count: count
			});
		} catch(e) {
			console.log(e);
			return res.status(200).end();
		}
	}
	async getRatingCount(req, res){
		const { id } = req.body;

		try {
			const count = await Rating.countDocuments({productId: id}).exec();
			return res.status(200).json({
				count: count
			});
		} catch(e) {
			console.log(e);
		}
	}
	async getAllCatalog(req, res){
		const { count } = req.body;
		try {
			const data = {};
			Catalog.find({}).then(result => {
				data.catalog = result;
			}).catch(e => {
				data.catalog = false;
			});
			SubCatalog.find({}).then(result => {
				data.subCatalog = result;
			}).catch(e => {
				data.subCatalog = false;
			});
			Category.find({}).then(result => {
				data.category = result;
			}).catch(e => {
				data.category = false;
			});
			const interval = setInterval(() => {
				if(data.catalog && data.subCatalog && data.category){
					res.status(200).json(data);
					return clearInterval(interval);
				}
			}, 100);
		} catch(e) {
			return res.status(500).end();
		}
	}
}


module.exports = new Handler();