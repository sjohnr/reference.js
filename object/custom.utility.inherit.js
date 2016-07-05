Object.inherit = function(destination, source) {
	var obj = function() {};
	obj.prototype = source.prototype;
	
	var proto = destination.prototype;
	destination.prototype = new obj();
	destination.prototype.constructor = destination;
	for (var dkey in proto) {
		if (proto.hasOwnProperty(dkey)) {
			destination.prototype[dkey] = proto[dkey];
		}
	}
	
	var constructor = function() {
		this.superclass.subclass = this;
		this.superclass.prototype.constructor.apply(this, arguments);
	};
	
	destination.prototype.superclass = constructor;
	destination.prototype.superclass.prototype.constructor = source;
	
	for (var skey in source.prototype) {
		if (source.prototype.hasOwnProperty(skey)) {
			destination.prototype.superclass[skey] = (function (__method) {
				return function () {
					return __method.apply(this.subclass, arguments);
				};
			})(source.prototype[skey]);
		}
	}
	
	return destination;
};