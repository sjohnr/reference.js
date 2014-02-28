String.prototype.toLowerCase = function() {
	var s = "";
	for (var i = 0, len = this.length; i < len; i++) {
		var char = this.charCodeAt(i);
		if (char >= 65 && char <= 90) {
			s += String.fromCharCode(char + 32);
		} else {
			s += this[i];
		}
	}
	
	return s;
};