Function.prototype.memoize = function() {
	var memo = {}, __method = this;
	return function() {
		var key = $A(arguments).join("§");
		if (key in memo) {
			return memo[key];
		}
		
		return (memo[key] = __method.apply(this, arguments));
	};
};