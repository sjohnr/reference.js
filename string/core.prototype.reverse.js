String.prototype.reverse = function() {
	var s = "";
	for (var i = this.length - 1; i >= 0; i--) {
		s += this[i];
	}
	
	return s;
};