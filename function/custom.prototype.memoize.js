Function.prototype.memoize = function() {
	var memo = {}, __method = this;
	return function() {
		var key = arguments.join(":::");
		if (key in memo) {
			return memo[key];
		}
		
		return (memo[key] = __method.apply(this, arguments));
	};
};