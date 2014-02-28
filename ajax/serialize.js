Ajax.serialize = function(obj) {
	var results = [];
	for (var key in obj) {
		results.push(key+"="+encodeURIComponent(obj[key]));
	}
	
	return results.join("&");
};