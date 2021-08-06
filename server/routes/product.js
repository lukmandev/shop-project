const {Router} = require('express');
const router = Router();

const Handler = require('../handlers/product.js');



router.post('/get-product', Handler.getProduct);

router.post('/get-by-group', Handler.getGroupProduct);

router.get('/get-by-id/:id', Handler.getProductById);

router.post('/get-count', Handler.getProductCount);

router.post('/get-manufacturer', Handler.getManufacturer);

router.post('/get-manufacturer-count', Handler.getManufacturerCount);

router.post('/get-all-catalog', Handler.getAllCatalog);










module.exports = router;