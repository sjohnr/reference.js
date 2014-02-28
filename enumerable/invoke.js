Enumerable.invoke = function(method) {
	var args = $A(arguments).slice(1);
	return this.map(function(value) {
		return value[method].apply(value, args);
	});
};