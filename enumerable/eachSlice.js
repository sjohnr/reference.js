Enumerable.eachSlice = function(number, iterator) {
	iterator = iterator ? iterator : Enumerable.identity;
	var index = -number, slices = [], array = this.toArray();
	while ((index += number) < array.length) {
		slices.push(array.slice(index, index+number));
	}

	return slices.collect(iterator);
};