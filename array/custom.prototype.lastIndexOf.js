Array.prototype.lastIndexOf = function(elem, from) {
	if (from == null) {
		from = this.length - 1;
	} else if (from < 0) {
		from = Math.max(0, this.length + from);
	}
	
	for (var i = from; i >= 0; i--) {
		if (this[i] === elem) {
			return i;
		}
	}
	
	return -1;
};