const {Router} = require('express');
const router = Router();

const Handler = require('../handlers/admin.js');

const validatorMiddleware = require('../middlewares/validation.js');

const {
	isExist,
} = require('../utils/validator.js');


router.post(
	'/add-catalog',

	isExist(
		[
			'text',
		]
	),

	validatorMiddleware,

	Handler.addCatalog
);
router.post(
	'/add-sub-catalog',

	isExist(
		[
			'text',
			'parent'
		]
	),

	validatorMiddleware,

	Handler.addSubCatalog
);
router.post(
	'/add-category',

	isExist(
		[
			'text',
			'parent',
			'catalogId'
		]
	),

	validatorMiddleware,

	Handler.addCategory
);
router.post(
	'/delete-catalog',

	isExist(
		[
			'id',
		]
	),

	validatorMiddleware,

	Handler.deleteCatalog
);
router.post(
	'/delete-sub-catalog',

	isExist(
		[
			'id',
		]
	),

	validatorMiddleware,

	Handler.deleteCatalog
);
router.post(
	'/delete-category',

	isExist(
		[
			'id',
		]
	),

	validatorMiddleware,

	Handler.deleteCatalog
);



router.post(
	'/add-product',

	isExist(
		[
			'title',
			'description',
			'images',
		]
	),

	validatorMiddleware,

	Handler.addProduct
);
router.delete(
	'/remove-product/:id',


	Handler.removeProduct
);



router.post(
	'/add-manufacturer',

	isExist(
		[
			'text',
			'catalogList',
		]
	),

	Handler.addManufacturer
);
router.delete(
	'/delete-manufacturer/:id',

	Handler.deleteManufacturer
);
router.delete(
	'/change-manufacturer',

	isExist(
		[
			'id',
			'text',
			'catalogList'
		]
	),

	Handler.changeManufacturer
);





module.exports = router;