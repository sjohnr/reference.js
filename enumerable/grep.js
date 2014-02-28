Enumerable.grep = function(filter, iterator) {
	iterator = iterator ? iterator : Enumerable.identity;
	var results = [];

	if (Object.isString(filter))
		filter = new RegExp(filter);

	this.forEach(function(value, index) {
		if (filter.match(value)) {
			results.push(iterator(value, index));
		}
	});
	
	return results;
};