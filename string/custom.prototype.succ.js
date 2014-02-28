String.prototype.succ = function() {
	return this.slice(0, this.length - 1) +
		String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
};