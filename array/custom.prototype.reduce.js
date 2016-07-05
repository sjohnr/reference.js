Array.prototype.reduce = function(iterator, seed) {
	for (var i = 0, len = this.length; i < len; i++) {
		seed = iterator(this[i], i, seed);
	}
	
	return seed;
};