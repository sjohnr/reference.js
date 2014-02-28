String.prototype.slice = function(start, end) {
	if (start < 0) {
		start = start + this.length;
	}
	if (!end) {
		end = this.length;
	} else if (end < 0) {
		end = end + this.length;
	}
	
	var s = "";
	for (var i = start, len = this.length; i < end && i < len; i++) {
		s += this[i];
	}
	
	return s;
};