Array.prototype.uniq = function() {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		var found = false;
		for (var j = 0, len2 = results.length; j < len2; j++) {
			if (this[i] === results[j]) {
				found = true;
				break;
			}
		}
		if (!found) {
			results.push(this[i]);
		}
	}
	
	return results;
};

// refactored
Array.prototype.uniq = function() {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		if (results.indexOf(this[i]) < 0) {
			results.push(this[i]);
		}
	}
	
	return results;
};

// refactored (requires Enumerable)
Array.prototype.uniq = function(sorted) {
	return this.inject([], function(array, value, index) {
		if (0 == index || (sorted ? array.last() != value : !array.include(value))) {
			array.push(value);
		}
		
		return array;
	});
};