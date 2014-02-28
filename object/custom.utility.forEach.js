Object.forEach = function(obj, iterator) {
	var i = 0;
	for (var key in obj) {
		iterator({key: key, value: obj[key]}, i++);
	}
};