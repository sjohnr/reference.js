Enumerable.inGroupsOf = function(number, fillWith) {
	fillWith = fillWith === undefined ? null : fillWith;
	
	return this.eachSlice(number, function(slice) {
		while(slice.length < number) {
			slice.push(fillWith);
		}
		
		return slice;
	});
};