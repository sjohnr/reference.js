Enumerable.any = function(iterator) {
	iterator = iterator ? iterator : Enumerable.identity;
	var result = false;
	this.forEach(function(value, index) {
		if (result = !!iterator(value, index)) {
			throw $break;
		}
	});
	
	return result;
};