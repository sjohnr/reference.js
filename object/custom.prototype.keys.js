Object.prototype.keys = function() {
	var results = [];
	for (var key in this) {
		if (this.propertyIsEnumerable(key)) {
			results.push(key);
		}
	}
	
	return results;
};