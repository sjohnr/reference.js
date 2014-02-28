Enumerable.detect = function(iterator) {
	var result;
	this.forEach(function(value, index) {
		if (iterator(value, index)) {
			result = value;
			throw $break;
		}
	});
	
	return result;
};