Array.prototype.some = function(iterator) {
	for (var i = 0, len = this.length; i < len; i++) {
		if (iterator(this[i], i)) {
			return true;
		}
	}
	
	return false;
};