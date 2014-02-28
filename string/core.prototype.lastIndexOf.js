String.prototype.lastIndexOf(s, fromIndex) {
	if (!fromIndex) {
		fromIndex = this.length - 1;
	}
	
	var idx = -1;
	for (var i = fromIndex; i >= 0; i--) {
		var matches = true;
		for (var j = s.length, len2 = s.length; j >= 0; j--) {
			if (this[i - len2 + j] != s[j]) {
				matches = false;
				break;
			}
		}
		if (matches) {
			idx = i;
			break;
		}
	}
	
	return idx;
};