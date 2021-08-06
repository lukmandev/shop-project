const uuid = require('uuid');

const User = require('../models/user');




class resetPassword{
	generateResetString(){
		const resetString = uuid.v4();
		const oneHour = 3600000;
		const date = new Date();
		const settings = {
			resetPasswordString: resetString,
			resetPasswordExpires: date.getTime() + oneHour
		}
		return settings;
	}
	isExpired(userDate){
		const date = new Date();
		const difference = userDate - date.getTime();
		if(difference <= 0){
			return true;
		}else {
			return false;
		}
	}
	async checkIsValid(resetPasswordString){
		try{
            const user = await User.findOne({resetPasswordString}).exec();
            if(!user){
				return {
					status: 400,
					message: 'Doesnt Exist'
				}
            }
            const isExpired = this.isExpired(user.resetPasswordExpires);
            if(isExpired){
				return {
					status: 400,
					message: 'Reset Password Time has been expired'
				}
            }
			return {
				status: 200,
				user,
				message: `${user.email} reset account`
			}
        }catch(e){
			return {
				status: 500,
				message: 'Some error on server side'
			}
        }
	}
}


module.exports = new resetPassword();