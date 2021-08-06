const jwt = require('jsonwebtoken');

const tokenService = require('../services/token.js');
const cookieParser = require('../utils/cookie-parser.js');
const {
    objLength 
} = require('../utils/object-methods.js');


module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(401).end();
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return res.status(401).end();
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return res.status(401).end();
        }

        req.user = userData;
        next();
    } catch (e) {
        return res.status(401).end();
    }
};