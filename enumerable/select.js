// alias for findAll
Enumerable.select = function(iterator) {
	var results = [];
	this.forEach(function(value, index) {
		if (iterator(value, index)) {
			results.push(value);
		}
	});
	
	return results;
};