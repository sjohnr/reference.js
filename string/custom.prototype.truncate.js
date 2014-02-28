String.prototype.truncate = function(length, truncation) {
	length = length || 30;
	truncation = truncation === undefined ? '...' : truncation;
	return this.length > length ?
		this.slice(0, length - truncation.length) + truncation : String(this);
};