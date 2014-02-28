Object.merge = function(obj, obj2) {
	var results = {};
	for (var key  in obj) {
		results[key] = obj[key];
	}
	for (var key in obj2) {
		results[key] = obj2[key];
	}
	
	return results;
};