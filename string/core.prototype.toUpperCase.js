String.prototype.toUpperCase = function() {
	var s = "";
	for (var i = 0, len = this.length; i < len; i++) {
		var char = this.charCodeAt(i);
		if (char >= 97 && char <= 122) {
			s += String.fromCharCode(char - 32);
		} else {
			s += this[i];
		}
	}
	
	return s;
};