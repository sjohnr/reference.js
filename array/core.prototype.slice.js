Array.prototype.slice = function(start, end) {
	if (end == null) {
		end = this.length;
	}
	if (start < 0) {
		start = this.length + start;
	}
	if (end < 0) {
		end = this.length + end;
	}
	
	var results = new Array(end - start);
	for (var i = start, j = 0, len = this.length; i < len && i < end; i++, j++) {
		results[j] = this[i];
	}
	
	return results;
};