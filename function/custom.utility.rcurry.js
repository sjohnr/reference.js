Function.rcurry = function(__method) {
	if (!arguments.length || arguments.length < 2) {
		return __method;
	}
	
	var args = arguments;
	return function() {
		return __method.apply(this, arguments.concat(args));
	}
};
