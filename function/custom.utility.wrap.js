Function.wrap = function(__method, wrapper) {
	return function() {
		return wrapper.apply(this, [__method.bind(this)].concat(arguments));
	};
};