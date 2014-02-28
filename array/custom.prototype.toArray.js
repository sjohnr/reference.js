Array.prototype.toArray = function() {
	var results = new Array(this.length);
	for (var i = 0, len = this.length; i < len; i++) {
		results[i] = this[i];
	}
	
	return results;
};

// refactored
Array.prototype.toArray = function() {
	return [].concat(this);
};

// refactored
Array.prototype.toArray = function() {
	return this.clone();
};