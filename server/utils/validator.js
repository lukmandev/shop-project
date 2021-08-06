const isExist = (keys) => {
	return (req, res, next) => {
		let index = 0;
		const errors = [];
		keys.forEach((elem, i) => {
			if(req.body[elem] === undefined){
				errors.push({
					key: elem,
					message: `${elem} is undefined`
				});
			}
		});
		if(req.validationErrors){
			errors.forEach((elem, i) => {
				req.validationErrors.push(elem);
			});
		}else {
			if(errors.length){
				req.validationErrors = errors;
			}
		}
		next();
	}
}
const isEmpty = (keys) => {
	return (req, res, next) => {
		let index = 0;
		const errors = [];
		keys.forEach((elem, i) => {
			if(!req.body[elem] || !req.body[elem].trim() || !req.body[elem].trim().length){
				errors.push({
					key: elem,
					message: `${elem} is empty`
				});
			}
		});
		if(req.validationErrors){
			errors.forEach((elem, i) => {
				req.validationErrors.push(elem);
			});
		}else {
			if(errors.length){
				req.validationErrors = errors;
			}
		}
		next();
	}
}

// [
// 	{
// 		key: 'name',
// 		length: 5
// 	},
// 	{
// 		key: 'password',
// 		length: 5
// 	}
// ]
const minLength = (keys) => {
	return (req, res, next) => {
		let index = 0;
		const errors = [];
		keys.forEach((elem, i) => {
			if(!req.body[elem.key] || req.body[elem.key].trim().length < elem.length){
				errors.push({
					key: elem.key,
					message: `${elem.key} is less then ${elem.length}`
				});
			}
		});
		if(req.validationErrors){
			errors.forEach((elem, i) => {
				req.validationErrors.push(elem);
			});
		}else {
			if(errors.length){
				req.validationErrors = errors;
			}
		}
		next();
	}
}

const maxLength = (keys) => {
	return (req, res, next) => {
		let index = 0;
		const errors = [];
		keys.forEach((elem, i) => {
			if(!req.body[elem.key] || req.body[elem.key].trim().length > elem.length){
				errors.push({
					key: elem.key,
					message: `${elem.key} is more then ${elem.length}`
				});
			}
		});
		if(req.validationErrors){
			errors.forEach((elem, i) => {
				req.validationErrors.push(elem);
			});
		}else {
			if(errors.length){
				req.validationErrors = errors;
			}
		}
		next();
	}
}


module.exports = {
	isExist,
	isEmpty,
	minLength,
	maxLength
}