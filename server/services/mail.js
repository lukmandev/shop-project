const nodemailer = require('nodemailer');
const emailExistence = require('email-existence');


class Mail{
	constructor(){
		this.transporter = nodemailer.createTransport({
		    host: process.env.SMTP_HOST,
		    port: process.env.SMTP_PORT,
		    auth: {
		        user: process.env.SMTP_USER,
		        pass: process.env.SMTP_PASSWORD
		    }
		});
	}
	async checkEmail(email){
		return new Promise((res, rej) => {
			emailExistence.check(email, (err, result) => {
				if(err){
					return res(false);
				}
				return res(result);
			});
		});
	}
	async sendActivationMail(args){
	  	const info = await this.transporter.sendMail({
		    from: `${process.env.SMTP_USER}`,
		    to: args.to,
		    subject: args.subject, 
		    text: args.text,
		    html: args.html,
		});
		return info;
	}
}


module.exports = new Mail();