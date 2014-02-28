Object.values = function(obj) {
	var results = [];
	for (var key in obj) {
		results.push(obj[key]);
	}
	
	return results;
};