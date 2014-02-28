Object.borrow = function(destination, source) {
	for (var key in source) {
		destination[key] = destination[key] || source[key];
	}
	
	return destination;
};