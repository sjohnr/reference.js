Object.forEach = function(obj, iterator) {
	var i = 0;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			iterator({key: key, value: obj[key]}, i++);
		}
	}
};