Function.prototype.default = function() {
	if (!arguments.length || arguments.length < 2) {
		return this;
	}
	
	var __method = this, args = $A(arguments);
	return function() {
		return __method.apply(this, $A(arguments).concat(args.slice(arguments.length)));
	};
};