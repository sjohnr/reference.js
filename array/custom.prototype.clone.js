Array.prototype.clone = function() {
	var results = new Array(this.length);
	for (var i = 0, len = this.length; i < len; i++) {
		results[i] = this[i];
	}
	
	return results;
};

// refactored
Array.prototype.clone = function() {
	return [].concat(this);
};