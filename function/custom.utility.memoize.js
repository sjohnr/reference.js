Function.memoize = function(__method) {
	var memo = {};
	return function() {
		var key = arguments.join(":::");
		if (key in memo) {
			return memo[key];
		}
		
		return (memo[key] = __method.apply(this, arguments));
	};
};