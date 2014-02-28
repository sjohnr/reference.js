Enumerable.pluck = function(property) {
	var results = [];
	this.forEach(function(value) {
		results.push(value[property]);
	});
	
	return results;
};