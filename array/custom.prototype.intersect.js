Array.prototype.intersect = function(ar) {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		for (var j = 0, len2 = ar.length; j < len2; j++) {
			if (this[i] === ar[j]) {
				var found = false;
				for (var k = 0, len3 = results.length; k < len3; k++) {
					if (ar[j] === results[k]) {
						found = true;
						break;
					}
				}
				if (!found) {
					results.push(ar[j]);
				}
			}
		}
	}
	
	return results;
};

// refactored
Array.prototype.intersect = function(ar) {
	var results = [], uniq = this.uniq();
	for (var i = 0, len = uniq.length; i < len; i++) {
		for (var j = 0, len2 = ar.length; j < len2; j++) {
			if (uniq[i] === ar[j]) {
				results.push(ar[j]);
			}
		}
	}
	
	return results;
};

// refactored
Array.prototype.intersect = function(ar) {
	var results = [], uniq = this.uniq();
	for (var i = 0, len = uniq.length; i < len; i++) {
		if (ar.indexOf(uniq[i]) >= 0) {
			results.push(uniq[i]);
		}
	}
	
	return results;
};

// refactored (requires Enumerable)
Array.prototype.intersect = function(ar) {
	return this.uniq().findAll(function(elem) {
		return ar.detect(function(value) {
			return elem === value;
		});
	});
};