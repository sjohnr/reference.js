Ajax.getXHR = function() {
	return Ajax.trythese(
		function() {
			return new XMLHttpRequest();
		},
		function() {
			return new ActiveXObject("Msxml2.XMLHTTP");
		},
		function() {
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
	) || null;
};