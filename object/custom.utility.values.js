Object.values = function(obj) {
	var results = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			results.push(obj[key]);
		}
	}
	
	return results;
};