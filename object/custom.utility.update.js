Object.update = function(obj, obj2) {
	for (var key in obj2) {
		obj[key] = obj2[key];
	}
	
	return obj;
};