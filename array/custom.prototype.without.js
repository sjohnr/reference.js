Array.prototype.without = function(ar) {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		var found = false;
		for (var j = 0, len2 = ar.length; j < len2; j++) {
			if (this[i] === ar[j]) {
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
Array.prototype.without = function(ar) {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		if (ar.indexOf(this[i]) < 0) {
			results.push(this[i]);
		}
	}
	
	return results;
};

// refactored (requires Enumerable)
Array.prototype.without = function() {
	var args = $A(arguments);
	return this.select(function(value) {
		return !args.include(value);
	});
};