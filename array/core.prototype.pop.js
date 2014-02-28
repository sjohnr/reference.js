Array.prototype.pop = function() {
	var elem = this[this.length - 1];
	delete this[this.length--];
	
	return elem;
};