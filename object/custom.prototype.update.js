Object.prototype.update = function(obj) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			this[key] = obj[key];
		}
	}
	
	return this;
};