Object.toArray = function(obj) {
	var results = [], index = 0;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			results.push({key: key, value: obj[key], index: index++});
		}
	}
	
	return results;
};