Enumerable.max = function(iterator) {
	iterator = iterator ? iterator : Enumerable.identity;
	var result;
	this.forEach(function(value, index) {
		value = iterator(value, index);
		if (result == undefined || value >= result) {
			result = value;
		}
	});
	
	return result;
};