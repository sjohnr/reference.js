Function.prototype.methodize = function() {
	if (this._methodized) {
		return this._methodized;
	}
	
	var __method = this;
	return this._methodized = function() {
		return __method.apply(null, [this].concat(arguments));
	};
};