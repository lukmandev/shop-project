module.exports = (req, res, next) => {
	if(req.validationErrors){
		return res.json(req.validationErrors);
	}
	next();
}