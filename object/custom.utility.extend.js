Object.extend = function(destination, source) {
	var obj = function() {};
	obj.prototype = source.prototype;
	
	var proto = destination.prototype;
	destination.prototype = new obj();
	destination.prototype.constructor = destination;
	for (var key in proto) {
		if (proto.hasOwnProperty(key)) {
			destination.prototype[key] = proto[key];
		}
	}
	
	destination.prototype.superclass = source;
	
	return destination;
};