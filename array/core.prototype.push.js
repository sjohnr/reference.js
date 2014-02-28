Array.prototype.push = function(elem) {
	this[this.length] = elem;
	
	return ++this.length;
};