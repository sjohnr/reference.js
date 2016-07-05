Array.prototype.splice = function(start, num) {
	var additions = $A(arguments).slice(2);
	var delta = additions.length - num;
	var newlen = this.length + delta;
	
	if (delta >= 0) {
		this.length += delta;
	}
	for (var i = start + num + delta; i < newlen + delta + 1; i++) {
		this[i] = this[i - delta];
	}
	for (var j = start; j < start + additions.length; j++) {
		this[j] = additions[j - start];
	}
	
	this.length = newlen;
	
	return this;
};