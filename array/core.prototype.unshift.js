Array.prototype.unshift = function(elem) {
	for (var i = this.length; i > 0; i--) {
		this[i] = this[i - 1];
	}
	this[0] = elem;
	
	return ++this.length;
};