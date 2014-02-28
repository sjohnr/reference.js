function $A(iterable) {
	if (!iterable) {
		return [];
	}
	if (iterable.toArray) {
		return iterable.toArray();	
	}
	
	var results = new Array(iterable.length);
	for (var i = 0, len = iterable.length; i < len; i++) {
		results[i] = iterable[i];	
	}
	
	return results;
}