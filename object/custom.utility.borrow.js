Object.borrow = function(destination, source) {
	for (var key in source) {
		if (source.hasOwnProperty(key)) {
			destination[key] = destination[key] || source[key];
		}
	}
	
	return destination;
};