Array.prototype.indexOf = function(elem, from) {
	if (from == null) {
		from = 0;
	} else if (from < 0) {
		from = Math.max(0, this.length + from);
	}
	
	for (var i = from, len = this.length; i < len; i++) {
		if (this[i] === elem) {
			return i;
		}
	}
	
	return -1;
};