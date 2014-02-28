Array.prototype.concat = function(ar) {
	var results = new Array(this.length + ar.length);
	for (var i = 0, len = this.length; i < len; i++) {
		results[i] = this[i];
	}
	for (var i = 0, len = ar.length; i < len; i++) {
		results[len + i] = ar[i];
	}
	
	return results;
};