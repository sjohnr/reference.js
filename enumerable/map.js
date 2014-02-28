// alias for collect
Enumerable.map = function(iterator) {
	iterator = iterator ? iterator : Enumerable.identity;
	var results = [];
	this.forEach(function(value, index) {
		results.push(iterator(value, index));
	});
	
	return results;
};