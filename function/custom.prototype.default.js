Function.prototype.default = function() {
	if (!arguments.length || arguments.length < 2) {
		return this;
	}
	
	var __method = this, args = arguments;
	return function() {
		return __method.apply(this, arguments.concat(args.slice(arguments.length)));
	};
};