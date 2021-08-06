const uuid = require('uuid');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const resetPasswordService = require('../services/resetPassword');
const mailService = require('../services/mail');



class Handler{
    async resetPasswordActivate(req, res){
        const { email } = req.body;
        try{
            const isExist = await mailService.checkEmail(email);
            if(!isExist){
                return res.status(400).json({
                    message: 'Email doesnt exist'
                });
            }
            const user = await User.findOne({email}).exec();
            if(!user){
                return res.status(400).json({
                    message: 'User with this email doesnt exist'
                });
            }
            const settings = resetPasswordService.generateResetString();
            const changeUser = await User.findOneAndUpdate({_id: user.id}, settings);
            const emailSended = await mailService.sendActivationMail({
                to: user.email,
                subject: `Reset your password on ${process.env.BASE_URL}`,
                text: 'If you dont want to reset password just ignore that message',
                html: `
                <div style="display: flex;flex-direction: column;align-center: center;justify-content: flex-start;">
                    To Reset Your Password Click button
                    <a href="${process.env.BASE_URL}/reset-password/${settings.resetPasswordString}" style="padding: 20px;">
                        CLICK HERE
                    </a>
                </div>
                `
            });
            if(!emailSended){
                return res.status(500).json({
                    message: 'Error happened while email sending'
                });
            }
            return res.status(200).json({
                message: `Reset password secret link sended to your email ${user.email}`
            });
        }catch(e){
            return res.status(500).json({
                message: 'Some Error Happened On Server'
            });
        }
    }
    async checkIsValid(req, res){
        const { resetPasswordString } = req.params;
        const result = await resetPasswordService.checkIsValid(resetPasswordString);
        return res.status(result.status).json({
            message: result.message
        });
    }
    async resetPassword(req, res){
        const { resetPasswordString, password } = req.body;
        try{
            const result = await resetPasswordService.checkIsValid(resetPasswordString);
            if(result.status !== 200){
                return res.status(result.status).json({
                    message: result.message
                });
            }
            const hashPassword = await bcrypt.hash(password, 6);
            const changeUser = await User.findOneAndUpdate({_id: result.user._id}, {password: hashPassword});
            return res.status(200).json({
                message: 'Your password has been changed'
            });
        }catch(e){
            return res.status(500).json({
                message: 'ERROR on SERVER SIDE'
            });
        }
    }
}

module.exports = new Handler();