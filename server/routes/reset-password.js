const { Router } = require('express');
const router = Router();

const ResetPasswordHandler = require('../handlers/reset-password');

router.post('/activate', ResetPasswordHandler.resetPasswordActivate);

router.post('/is-valid/:resetPasswordString', ResetPasswordHandler.checkIsValid);

router.post('/change-password', ResetPasswordHandler.resetPassword);



module.exports = router;