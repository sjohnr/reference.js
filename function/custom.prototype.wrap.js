Function.prototype.wrap = function(wrapper) {
	var __method = this;
	return function() {
		return wrapper.apply(this, [__method.bind(this)].concat(arguments));
	};
};