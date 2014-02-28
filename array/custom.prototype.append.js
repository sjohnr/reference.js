Array.prototype.append = function(ar) {
	this.length += ar.length;
	for (var i = 0, len = this.length, len2 = ar.length; i < len2; i++) {
		this[len + i] = ar[i];
	}
};