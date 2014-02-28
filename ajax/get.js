Ajax.get = function(url, obj, fn) {
	Ajax.request(url, null, "GET", {
		onComplete: function(response) {
			fn.call(obj, response);
		}
	});
};