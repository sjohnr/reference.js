Object.augment = function(destination, source) {
	for (var key in source.prototype) {
		destination.prototype[key] = destination.prototype[key] || source.prototype[key];
	}
	
	return destination;
};