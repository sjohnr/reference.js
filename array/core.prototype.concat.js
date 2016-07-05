Array.prototype.concat = function(ar) {
	var results = new Array(this.length + ar.length);
	for (var i = 0, len1 = this.length; i < len1; i++) {
		results[i] = this[i];
	}
	for (var j = 0, len2 = ar.length; j < len2; j++) {
		results[len2 + j] = ar[j];
	}
	
	return results;
};