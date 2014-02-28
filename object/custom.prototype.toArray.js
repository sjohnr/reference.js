Object.prototype.toArray = function() {
	var results = [], index = 0;
	for (var key in this) {
		results.push({key: key, value: this[key], index: index++});
	}
	
	return results;
};