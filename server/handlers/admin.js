const Product = require('../models/product.js');
const Catalog = require('../models/catalog/catalog.js');
const SubCatalog = require('../models/catalog/sub-catalog.js');
const Category = require('../models/catalog/category.js');
const Manufacturer = require('../models/manufacturer.js');
const Currencies = require('../models/currencies.js');



const uuid = require('uuid');



class Handler{
	async addCatalog(req, res){
		const {
			text,
		} = req.body;

		try {
			const newCatalog = new Catalog({
				text,
				catalogId: uuid.v4()
			});
			const savedCatalog = await newCatalog.save();

			if(!savedCatalog){
				return res.status(500).end();
			}
			return res.status(200).json(savedCatalog);
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async addSubCatalog(req, res){
		const {
			text,
			parent
		} = req.body;

		try {
			const newSubCatalog = new SubCatalog({
				text,
				subCatalogId: uuid.v4(),
				parent
			});
			const savedSubCatalog = await newSubCatalog.save();

			if(!savedSubCatalog){
				return res.status(500).end();
			}
			return res.status(200).json(savedSubCatalog);
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async addCategory(req, res){
		const {
			text,
			parent,
			catalogId
		} = req.body;
		
		try {
			const newCategory = new Category({
				text,
				categoryId: uuid.v4(),
				catalogId,
				parent
			});
			const savedCategory = await newCategory.save();

			if(savedCategory){
				return res.status(200).end();
			}
			return res.status(500).end();
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async deleteCatalog(req, res){
		const {
			id,
			deleteChilden
		} = req.body;

		try{
			const deletedCatalog = await Catalog.findOneAndDelete({catalogId: id}).exec();
			if(deletedCatalog && deleteChilden){
				const deletedSubCatalog = await SubCatalog.deleteMany({parent: id});
				const deletedCategory = await Category.deleteMany({catalogId: id});
			}
			return res.status(200).json(deletedCatalog);
		}catch(e){
			console.log(e);
			return res.status(500).end();
		}
	}
	async deleteSubCatalog(req, res){
		const {
			id,
			deleteChild
		} = req.body;

		try{
			const deletedSubCatalog = await SubCatalog.findOneAndDelete({subCatalogId: id}).exec();
			if(deletedSubCatalog && deleteChild){
				const deletedCategory = await Category.deleteMany({parent: id});
			}
			return res.status(200).json(deletedSubCatalog);
		}catch(e){
			console.log(e);
			return res.status(500).end();
		}
	}
	async deleteCategory(req, res){
		const {
			id
		} = req.body;

		try {
			const deletedCategory = await Category.findOneAndDelete({categoryId: id}).exec();
			if(!deletedCategory){
				return res.status(500).end();
			}
			return res.status(200).json(deletedSubCatalog);
		} catch(e) {
			return res.status(500).end();
		}
	}

	async addProduct(req, res){
		const {
			title,
			description,
			catalog,
			subCatalog,
			category,
			images,
			rating,
			detail,
			saleMessage,
			productInfo,
			price,
			freeShipping,
			hasManufacturer,
			manufacturer,
			hasSize,
			size,
			sellCount
		} = req.body;

		const product = {
			title,
			images,
			description: description
		}

		if(catalog){
			product.catalog = catalog;
		}
		if(subCatalog){
			product.subCatalog = subCatalog;
		}
		if(category){
			product.category = category;
		}
		if(rating){
			product.rating = rating;
		}
		if(detail){
			product.detail = detail;
		}
		if(saleMessage){
			product.saleMessage = saleMessage;
		}
		if(productInfo){
			product.productInfo = productInfo;
		}
		if(price){
			product.price = price;
		}
		if(freeShipping){
			product.freeShipping = freeShipping;
		}
		if(hasManufacturer){
			product.hasManufacturer = hasManufacturer;
		}
		if(manufacturer){
			product.manufacturer = manufacturer;
		}
		if(hasSize){
			product.hasSize = hasSize;
		}
		if(size){
			product.size = size;
		}
		if(sellCount){
			product.sellCount = sellCount;
		}
			
		try {
			console.log(product)
			const newProduct = new Product(product);
			const savedProduct = await newProduct.save();
			if(!savedProduct){
				return res.status(500).end();
			}
			return res.status(200).json(savedProduct);
			
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async removeProduct(req, res){
		const { id } = req.params;

		try {
			const deletedProduct = await Product.deleteOne({_id: id}).exec();
			if(!deletedProduct){
				return res.status(500).end();
			}
			return res.status(200).json(deletedProduct);
		} catch(e) {
			return res.status(500).end();
		}
	}

	async addManufacturer(req, res){
		const {
			text,
			catalogList
		} = req.body;

		try {
			const newManufacturer = new Manufacturer({
				text,
				catalogList
			});
			const savedManufacturer = await Manufacturer.save();
			if(!savedManufacturer){
				return res.status(500).end();
			}
			return res.status(200).json(savedManufacturer);
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async deleteManufacturer(req, res){
		const { id } = req.params;

		try {
			const deletedManufacturer = await Manufacturer.findByIdAndDelete(id).exec();
			if(!deletedManufacturer){
				return res.status(500).end();
			}
			return res.status(200).json(deletedManufacturer);
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async changeManufacturer(req, res){
		const {
			id,
			text,
			catalogList
		} = req.body;

		try {	
			const changedManufacturer = await Manufacturer.findByIdAndUpdate(id, {catalogList, text}).exec();
			if(!changedManufacturer){
				return res.status(500).end();
			}
			return res.status(200).end();
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}

	async changeCurrency(req, res){
		const {
			id,
			text,
			unicode
		} = req.body;

		try {
			const changedCurrency = await Currencies.updateOne({_id: id}, {$set: {
				text,
				unicode
			}});
			if(!changedCurrency){
				return res.status(500).end();
			}
			return res.status(200).end();
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}

}


module.exports = new Handler();