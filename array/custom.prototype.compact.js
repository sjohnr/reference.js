Array.prototype.compact = function() {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		if (this[i] != null) {
			results.push(this[i]);
		}
	}
	
	return results;
};

// refactored (requires Enumerable)
Array.prototype.compact = function() {
	return this.select(function(value) {
		return value != null;
	});
};