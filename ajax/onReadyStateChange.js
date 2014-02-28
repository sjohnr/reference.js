Ajax.onReadyStateChange = function(xhr, callbacks) {
	switch (xhr.readyState) {
		case 0: // Uninitialized
			if (callbacks.onUninitialized) {
				callbacks.onUninitialized();
			}
		break;
		case 1: // Loading
			if (callbacks.onLoading) {
				callbacks.onLoading();
			}
		break;
		case 2: // Loaded
			if (callbacks.onLoaded) {
				callbacks.onLoaded();
			}
		break;
		case 3: // Interactive
			if (callbacks.onInteractive) {
				var response = Ajax.getResponse(xhr);
				callbacks.onInteractive(response);
				
				xhr.responseText = null;
			}
		break;
		case 4: // Complete
			var status = xhr.status, response = Ajax.getResponse(xhr);
			
			if (status && callbacks["on" + status]) {
				callbacks["on" + status]();
			}
			
			if ((status && (status < 200 || status >= 300)) && callbacks.onFailure) {
				callbacks.onFailure();
			} else if ((!status || (status >= 200 && status < 300)) && callbacks.onSuccess) {
				callbacks.onSuccess(response);
			}
			
			if (callbacks.onComplete) {
				callbacks.onComplete(response);
			}
			
			xhr.onreadystatechange = function() {};
		break;
	}
};