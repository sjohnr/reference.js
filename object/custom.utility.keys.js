Object.keys = function(obj) {
	var results = [];
	for (var key in obj) {
		results.push(key);
	}
	
	return results;
};