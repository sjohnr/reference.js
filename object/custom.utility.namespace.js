Object.namespace = function(obj, ns) {
	var namespaces = ns.split(".");
	for (var i = 0; i < namespaces.length; i++) {
		obj[namespaces[i]] = {};
		obj = obj[namespaces[i]];
	}
	
	return obj;
};