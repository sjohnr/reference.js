Function.prototype.delay = function() {
	var __method = this, args = arguments, timeout = args.shift() * 1000;
	return window.setTimeout(function() {
		return __method.apply(__method, args);
	}, timeout);
};