const {Router} = require('express');
const router = Router();

const AuthHandler = require('../handlers/auth.js');

const authMiddleware = require('../middlewares/auth.js');


router.post('/register', AuthHandler.register);

router.post('/login', AuthHandler.login);

router.post('/check', authMiddleware, AuthHandler.check);

router.post('/get-user', authMiddleware, AuthHandler.getUser);

router.get('/activate/:link', authMiddleware, AuthHandler.activate);



module.exports = router;