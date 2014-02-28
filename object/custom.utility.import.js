Object.import = function(source) {
	for (var key in source) {
		parent[key] = source[key];
	}
};