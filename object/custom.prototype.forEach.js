Object.prototype.forEach = function(iterator) {
	var i = 0;
	for (var key in this) {
		if (this.propertyIsEnumerable(key) {
			iterator({key: key, value: this[key]}, i++);
		}
	}
};