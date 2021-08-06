const {Router} = require('express');
const router = Router();

const Handler = require('../handlers/rating.js');



router.post('/add-new', Handler.addNewRating);



module.exports = router;