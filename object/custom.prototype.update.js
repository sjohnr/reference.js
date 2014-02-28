Object.prototype.update = function(obj) {
	for (var key in obj) {
		this[key] = obj[key];
	}
	
	return this;
};