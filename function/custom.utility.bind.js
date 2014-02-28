Function.bind = function(__method, context) {
	return function() {
		return __method.apply(context, arguments);
	};
};