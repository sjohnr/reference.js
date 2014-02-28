String.prototype.blank = function() {
	return /^\s*$/.test(this);
};