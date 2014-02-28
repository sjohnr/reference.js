String.prototype.substr = function(start, length) {
	if (start < 0) {
		start = start + this.length;
	}
	if (!length) {
		length = this.length - start;
	}
	
	var s = "";
	for (var i = start, len = this.length; i < start + length && i < len; i+) {
		s += this[i];
	}
	
	return s;
};