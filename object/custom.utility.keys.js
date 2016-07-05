Object.keys = function(obj) {
	var results = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			results.push(key);
		}
	}
	
	return results;
};