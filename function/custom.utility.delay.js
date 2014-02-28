Function.delay = function(__method) {
	var timeout = args.shift() * 1000, args = $A(arguments);
	return window.setTimeout(function() {
		return __method.apply(__method, args);
	}, timeout);
};