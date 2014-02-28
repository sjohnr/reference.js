Array.prototype.join = function(separator) {
	var s = new String();
	for (var i = 0, len = this.length; i < len; i++) {
		s += (i > 0) ? separator : "";
		s += (typeof this[i] == "object" && this[i].constructor === Array) ? this[i].join(separator) : this[i];
	}
	
	return s;
};