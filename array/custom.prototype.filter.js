Array.prototype.filter = function(iterator) {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		if (iterator(this[i], i)) {
			results.push(this[i]);
		}
	}
	
	return results;
};