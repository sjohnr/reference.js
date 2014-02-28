// alias for all
Enumerable.every = function(iterator) {
	iterator = iterator ? iterator : Enumerable.identity;
	var result = true;
	this.forEach(function(value, index) {
		result = result && !!iterator(value, index);
		if (!result) throw $break;
	});
	
	return result;
};