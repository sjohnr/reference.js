Function.curry = function(__method) {
	if (!arguments.length || arguments.length < 2) {
		return __method;
	}
	
	var args = $A(arguments).slice(1);
	return function() {
		return __method.apply(this, args.concat(arguments));
	}
};