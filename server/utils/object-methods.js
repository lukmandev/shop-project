const objLength = (obj) => {
	let index = 0;
	for(let i in obj){
		if(obj.hasOwnProperty(i)){
			index++;
		}
	}
	return index;
}


module.exports = {
	objLength,
}