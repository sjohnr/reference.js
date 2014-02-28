Ajax.expire = function(timeout, url, obj, fn) {
	return setTimeout(function() {
		Ajax.request(url, null, "GET", {
			onComplete: function(response) {
				fn.call(obj, response);
			}
		});
	}, timeout * 1000);
};