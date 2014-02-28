String.prototype.indexOf = function(s, fromIndex) {
	if (!fromIndex) {
		fromIndex = 0;
	}
	
	var idx = -1;
	for (var i = fromIndex, len = this.length; i < len; i++) {
		var matches = true;
		for (var j = 0, len2 = s.length; j < len2; j++) {
			if (this[i + j] != s[j]) {
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