Enumerable.inject = function(memo, iterator) {
	this.forEach(function(value, index) {
		memo = iterator(memo, value, index);
	});
	
	return memo;
};