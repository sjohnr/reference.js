Ajax.trythese = function() {
	var result;
	for (var i = 0, len = arguments.length; i < len; i++) {
		var fn = arguments[i];
		try {
			result = fn();
			break;
		} catch (e) {}
	}
	
	return result;
};