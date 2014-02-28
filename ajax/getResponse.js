Ajax.getResponse = function(xhr) {
	if (xhr.responseText) {
		return xhr.responseText;
	} else if (xhr.headerJSON) {
		return xhr.headerJSON;
	}
	
	return null;
};