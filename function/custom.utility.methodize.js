Function.methodize = function(__method) {
	if (__method._methodized) {
		return __method._methodized;
	}
	
	return __method._methodized = function() {
		return __method.apply(null, [this].concat(arguments));
	};
};