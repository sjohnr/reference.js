Array.prototype.shift = function() {
	var elem = this[0];
	for (var i = 0, len = this.length; i < len - 1; i++) {
		this[i] = this[i + 1];
	}
	delete this[--this.length];
	
	return elem;
};