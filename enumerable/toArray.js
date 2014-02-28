Enumerable.toArray: function() {
	var results = [], iterator = Enumerable.identity;
	this.forEach(function(value) {
		results.push(iterator(value));
	});
	
	return results;
};