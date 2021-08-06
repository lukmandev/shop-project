const Rating = require('../models/rating.js');

class Handler{
	async addNewRating(req, res){
		const {
			userId,
			productId,
			rating
		} = req.body;

		try {
			const newRating = new Rating({
				userId,
				productId,
				rating
			});
			const savedRating = await newRating.save();
			if(!savedRating){
				return res.status(500).end();
			}
			return res.status(200).end();
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
}


module.exports = new Handler();