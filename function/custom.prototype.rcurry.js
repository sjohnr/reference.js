Function.prototype.rcurry = function() {
	if (!arguments.length) {
		return this;
	}
	
	var __method = this, args = $A(arguments);
	return function() {
		return __method.apply(this, $A(arguments).concat(args));
	}
};
