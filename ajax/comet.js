Ajax.comet = function(url, obj, fn, fn2, timeout) {
	var packetID = 1, timeout = (timeout || 30);
	var callbacks = {
		onInteractive: function(response) {
			// split response into packets, like:
			// %!COMET!%\n\nThis is packet #1 dude\n\nNew lines everywhere...%!COMET!%This is packet #2
			// which translates to:
			// ["\n\nThis is packet #1 dude\n\nNew lines everywhere...", "This is packet #2"]
			var packets = response.split("%!COMET!%");
			for (; packetID < packets.length; packetID++) {
				fn.call(obj, packets[packetID]);
			}
		},
		
		onComplete: function(response) {
			fn2.call(obj, response);
		}
	};
	
	// make request, and periodically cleanup and establish new connection
	var xhr = Ajax.request(url, null, "GET", callbacks);
	return setInterval(function() {
		xhr.abort();
		xhr = Ajax.request(url, null, "GET", callbacks);
	}, timeout * 1000);
};