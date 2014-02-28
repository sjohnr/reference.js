Enumerable.partition = function(iterator) {
	iterator = iterator ? iterator : Enumerable.identity;
	var trues = [], falses = [];
	this.forEach(function(value, index) {
		(iterator(value, index) ?
			trues : falses).push(value);
	});
	
	return [trues, falses];
};