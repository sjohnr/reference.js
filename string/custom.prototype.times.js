String.prototype.times = function(count) {
	return count < 1 ? '' : new Array(count + 1).join(this);
};