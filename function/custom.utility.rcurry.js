Function.rcurry = function(__method) {
	if (!arguments.length || arguments.length < 2) {
		return __method;
	}
	
	var args = $A(arguments);
	return function() {
		return __method.apply(this, $A(arguments).concat(args));
	}
};
