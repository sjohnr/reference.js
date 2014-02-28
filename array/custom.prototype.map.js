Array.prototype.map = function(iterator) {
	var results = [];
	for (var i = 0, len = this.length; i < len; i++) {
		results.push(iterator(this[i], i));
	}
	
	return results;
};