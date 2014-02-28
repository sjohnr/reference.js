function $R(start, end, isExclusive) {
	var results = [];
	var value = start;
	while (value >= start && value <= end && (!isExclusive || value < end)) {
		results.push(value);
		value.succ();
	}
	
	return results;
}