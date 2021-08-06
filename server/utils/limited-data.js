const user_limited_data = info => {
	const {name, surname, gender, birthday} = info;
	return {
		name, surname, gender, birthday, roles
	}
}

const user_profile_data = info => {
	const {name, surname, gender, birthday, email, roles} = info;
	return {name, surname, gender, birthday, email, roles}
}


module.exports = {
	userLimitedData: user_limited_data,
	userProfileData: user_profile_data
}