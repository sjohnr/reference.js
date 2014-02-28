Array.prototype.forEach = function(iterator) {
	for (var i = 0, len = this.length; i < len; i++) {
		iterator(this[i], i);
	}
};