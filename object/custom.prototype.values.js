Object.prototype.values = function() {
	var results = [];
	for (var key in this) {
		if (this.propertyIsEnumerable(key)) {
			results.push(this[key]);
		}
	}
	
	return results;
};