Object.inherit = function(destination, source) {
	var obj = function() {};
	obj.prototype = source.prototype;
	
	var proto = destination.prototype;
	destination.prototype = new obj();
	destination.prototype.constructor = destination;
	for (var key in proto) {
		destination.prototype[key] = proto[key];
	}
	
	var constructor = function() {
		this.superclass.subclass = this;
		this.superclass.prototype.constructor.apply(this, arguments);
	};
	
	destination.prototype.superclass = constructor;
	destination.prototype.superclass.prototype.constructor = source;
	
	for (var key in source.prototype) {
		destination.prototype.superclass[key] = (function(__method) {
			return function() {
				return __method.apply(this.subclass, arguments);
			};
		})(source.prototype[key]);
	}
	
	return destination;
};