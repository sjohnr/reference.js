Enumerable.zip = function() {
	var iterator = Enumerable.identity, args = $A(arguments);
	if (Object.isFunction(args.last())) {
		iterator = args.pop();
	}

	var collections = [this].concat(args);
	return this.map(function(value, index) {
		return iterator(collections.pluck(index));
	});
};