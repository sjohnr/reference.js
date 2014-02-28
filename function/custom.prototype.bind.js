Function.prototype.bind = function(context) {
	var __method = this;
	return function() {
		return __method.apply(context, arguments);
	};
};