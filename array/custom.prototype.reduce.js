Array.prototype.reduce = function() {
	return this.length > 1 ? this : this[0];
};