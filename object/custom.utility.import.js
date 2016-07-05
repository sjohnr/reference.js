Object.import = function(source) {
	for (var key in source) {
		if (source.hasOwnProperty(key)) {
			parent[key] = source[key];
		}
	}
};