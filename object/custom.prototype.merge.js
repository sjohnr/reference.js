Object.prototype.merge = function(obj) {
	var results = {};
	for (var key1 in this) {
		if (this.hasOwnProperty(key1)) {
			results[key1] = this[key1];
		}
	}
	for (var key2 in obj) {
		if (obj.hasOwnProperty(key2)) {
			results[key2] = obj[key2];
		}
	}
	
	return results;
};