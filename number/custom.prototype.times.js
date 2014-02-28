Number.prototype.times = function(iterator) {
	$R(0, this, true).forEach(iterator);
	return this;
};