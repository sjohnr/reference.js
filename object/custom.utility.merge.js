Object.merge = function(obj1, obj2) {
	var results = {};
	for (var key1  in obj1) {
		if (obj1.hasOwnProperty(key1)) {
			results[key1] = obj1[key1];
		}
	}
	for (var key2 in obj2) {
		if (obj2.hasOwnProperty(key2)) {
			results[key2] = obj2[key2];
		}
	}
	
	return results;
};