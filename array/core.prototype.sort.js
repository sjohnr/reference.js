Array.prototype.sort = function(fn) {
	if (!arguments[0]) {
		fn = function(a, b) {
			return a.compareTo(b);
		};
	}
	
	for (var i = 0, len = this.length; i < len - 1; i++) {
		for (var j = i + 1, len2 = this.length; j < len2; j++) {
			if (fn(this[i], this[j]) > 0) {
				var tmp = this[i];
				this[i] = this[j];
				this[j] = tmp;
			}
		}
	}
	
	return this;
};