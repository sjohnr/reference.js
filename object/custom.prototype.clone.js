Object.prototype.clone = function() {
	var results = {};
	for (var key in this) {
		if (this.propertyIsEnumerable(key)) {
			if (typeof this[key] == "object") {
				results[key] = Object.clone(this[key]);
			} else {
				results[key] = this[key];
			}
		}
	}
	
	return this;
};