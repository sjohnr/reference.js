Ajax.post = function(url, data, obj, fn) {
	Ajax.request(url, data, "POST", {
		onComplete: function(response) {
			fn.call(obj, response);
		}
	});
};