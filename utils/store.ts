
export const checkLocalStorage = (localstorageType: string): any => {
	const result: string | null = localStorage.getItem(localstorageType);
	if(result){
		try {
			const json = JSON.parse(result);
			return json;
		} catch(e) {
			return {}
		}
	}else {
		return {}
	}
}