Function.prototype.curry = function() {
	if (!arguments.length) {
		return this;
	}
	
	var __method = this, args = arguments;
	return function() {
		return __method.apply(this, args.concat(arguments));
	}
};