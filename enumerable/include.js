Enumerable.include = function(object) {
	if (Object.isFunction(this.indexOf))
		if (this.indexOf(object) != -1) return true;

	var found = false;
	this.forEach(function(value) {
		if (value == object) {
			found = true;
			throw $break;
		}
	});
	
	return found;
};