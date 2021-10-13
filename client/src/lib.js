const Lib = {
    sort: (arr, key, order) => {
		return arr = arr.sort((a, b) => {
			if(order === "desc"){
				return b[key] - a[key];
			} else {
				return a[key] - b[key];
			}
		}); 
	}
};

export default Lib;