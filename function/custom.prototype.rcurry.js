Function.prototype.rcurry = function() {
	if (!arguments.length) {
		return this;
	}
	
	var __method = this, args = arguments;
	return function() {
		return __method.apply(this, arguments.concat(args));
	}
};
