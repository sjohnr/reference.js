Object.clone = function(obj) {
	var results = Object.isArray(obj) ? [] : {};
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] == "object") {
				results[key] = Object.clone(obj[key]);
			} else {
				results[key] = obj[key];
			}
		}
	}
	
	return this;
};