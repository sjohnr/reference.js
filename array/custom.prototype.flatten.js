Array.prototype.flatten = function() {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		if (typeof this[i] == "object" && this[i].constructor === Array) {
			results = results.concat(this[i].flatten());
		} else {
			results.push(this[i]);
		}
	}
	
	return results;
};

// refactored
Array.prototype.flatten = function() {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		results = results.concat(Object.isArray(this[i]) ? this[i].flatten() : [this[i]]);
	}
	
	return results;
};

// refactored (requires Enumerable)
Array.prototype.flatten = function() {
	return this.inject([], function(array, value) {
		return array.concat(Object.isArray(value) ?
			value.flatten() : [value]);
	});
};