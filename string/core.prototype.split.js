String.prototype.split = function(separator, nbr) {
	var results = [];
	var pt = "";
	var ct = 0;
	for (var i = 0, len = this.length; i < len; i++) {
		if (this[i] == separator) {
			results.push(pt);
			pt = ""; ct++;
			if (nbr && ct >= nbr) {
				separator = "";
			}
		} else {
			pt += this[i];
		}
	}
	results.push(pt);
	
	return results;
};