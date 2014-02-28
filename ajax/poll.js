Ajax.poll = function(frequency, url, obj, fn) {
	return setInterval(function() {
		Ajax.request(url, null, "GET", {
			onComplete: function(response) {
				fn.call(obj, response);
			}
		});
	}, frequency * 1000);
};