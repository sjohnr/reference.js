Object.isArray = function(obj) {
	return typeof obj == "object" && obj.constructor === Array;
};