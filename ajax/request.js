Ajax.request = function(url, data, method, callbacks) {
	var xhr = Ajax.getXHR();
	
	xhr.onreadystatechange = function() {
		Ajax.onReadyStateChange(xhr, callbacks);
	};
	xhr.open(method, url, true);
	if (data) {
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(Ajax.serialize(data));
	}
	
	return xhr;
};