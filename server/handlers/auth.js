const User = require('../models/user.js');
const UserRole = require('../models/user-role.js');
const Token = require('../models/token.js');

const tokenService = require('../services/token.js');
const mailService = require('../services/mail');
const resetPasswordService = require('../services/resetPassword');
const userService = require('../services/user');



const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const {
	userLimitedData,
    userProfileData
} = require('../utils/limited-data.js');



class Handler{
	async register(req, res){
		const {name, surname, gender, birthday, email, password} = req.body;
		try{
			const candidate = await User.findOne({email: email}).exec();
			if(candidate){
				return res.status(409).end();
			}
            const isExist = await checkEmail(email);
            if(!isExist){
                return res.status(406).json({
                    message: 'Такого email не существует'
                });
            }
			const hashPassword = await bcrypt.hash(password, 6);
            const activatedLink = `${uuid.v4()}${email}`;
			const newUser = new User({
				email: email,
				name: name,
				surname: surname,
				birthday: birthday,
				gender: gender,
				password: hashPassword,
				activatedLink: activatedLink,
			});
			const savedUser = await newUser.save();
            mailService.sendActivationMail(email, `Подтверждение аккаунт кликнув ${activatedLink}`);
			const token = tokenService.generateTokens({id: savedUser._id});
            const saveToken = await tokenService.saveToken(savedUser._id, token.refreshToken);
            res.cookie('token', token.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.status(200).json({
            	profile: user_limited_data(savedUser)
            });
		}catch(e){
			console.log(e);
			return res.status(500).end();
		}
	}
	async login(req, res){
		const {email, password} = req.body;
        try {
            const candidate = await User.findOne({email: email}).exec();
            if(!candidate){
                return res.status(404).end();
            }
            const match = await bcrypt.compare(password, candidate.password);
            if(!match){
                return res.status(403).end();
            }
            const token = tokenService.generateTokens({id: candidate._id});
            const saveToken = await tokenService.saveToken(candidate._id, token.refreshToken);
            res.cookie('token', token.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.status(200).json({
                profile: user_limited_data(candidate),
            });
        }catch(e){
            return res.status(500).end();
        }
	}
	async check(req, res){
		try {
            const {id} = req.token;
            const user = await User.findOne({_id: id}).exec();
            if(!user){
                res.clearCookie('refreshToken');
                return res.status(401).end();
            }
            return res.status(200).json({
                profile: userProfileData(user),
            });
        } catch(e) {
            return res.status(401).end();
        }
	}
	async getUser(req, res){
		try {
            const {id} = req.token;
            const user = await User.findOne({_id: id}).exec();
            if(!user){
                return res.status(401).end();
            }
            return res.status(200).json({
                profile: userProfileData(user),
            });
        } catch(e) {
            return res.status(401).end();
        }
	}
    async activate(req, res){
        const {link} = req.params;
        try {
            const user = await User.findOne({activationLink: link});
            if(!user){
                return res.status(404).end();
            }
            if(user.isActivated){
                return res.status(400).end();
            }
            const changeActive = await User.findOneAndUpdate({_id: user._id}, {
                isActivated: true
            });
            return res.status(200).end();
        } catch(e) {
            return res.status(500).end();
        }
    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            if(!refreshToken){
                return res.status(401).end();
            }
            const result = await userService.refresh(refreshToken);
            if(!result.isAuth){
                return res.status(401).end();
            }
            res.cookie(
                'refreshToken', 
                result.tokens.refreshToken, 
                {
                    maxAge: 30 * 24 * 60 * 60 * 1000, 
                    httpOnly: true
                }
            );
            return res.status(200).json({
                accessToken: result.tokens.accessToken
            });
        } catch (e) {
           return res.status(500).end();
        }
    }
}


module.exports = new Handler();