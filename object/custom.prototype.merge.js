Object.prototype.merge = function(obj) {
	var results = {};
	for (var key  in this) {
		results[key] = this[key];
	}
	for (var key in obj) {
		results[key] = obj[key];
	}
	
	return results;
};