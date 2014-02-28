Date.format = function(date, mask) {
	var	d = date.getDate(),
		D = date.getDay(),
		m = date.getMonth(),
		y = date.getFullYear(),
		H = date.getHours(),
		M = date.getMinutes(),
		s = date.getSeconds(),
		L = date.getMilliseconds(),
		T = date.getTime(),
		o = date.getTimezoneOffset(),
	flags = {
		d: function() { return Date.pad(d); },
		D: function() { return Date.i18n.days.short[D]; },
		j: function() { return d; },
		l: function() { return Date.i18n.days.long[D]; },
		N: function() { return D + 1; },
		S: function() { return (d % 10 == 1 && d != 11) ? "st" : (d % 10 == 2 && d != 12) ? "nd" : (d % 10 == 13 && d != 1) ? "rd" : "th"; },
		w: function() { return D; },
		z: function() {
			return (function(idx) {
				return (idx < m) ? Date.i18n.months.lengths[idx] + ((idx == 1 && y % 4 == 0) ? 1 : 0) + arguments.callee(idx + 1) : d;
			})(0);
		},
		W: function() { return Math.floor(flags["z"]() / 7) + 1; },
		F: function() { return Date.i18n.months.long[m]; },
		m: function() { return Date.pad(m + 1); },
		M: function() { return Date.i18n.months.short[m]; },
		n: function() { return m + 1; },
		t: function() { return Date.i18n.months.lengths[m] + (y % 4 == 0 && m == 1) ? 1 : 0; },
		L: function() { return (y % 4 == 0); },
		o: function() { return "-NA-"; },
		Y: function() { return y; },
		y: function() { return String(y).substr(2); },
		a: function() { return H < 12 ? "am" : "pm"; },
		A: function() { return H < 12 ? "AM" : "PM"; },
		B: function() { return "-NA-"; },
		g: function() { return H % 12 || 12; },
		G: function() { return H; },
		h: function() { return Date.pad(H % 12 || 12); },
		H: function() { return Date.pad(H); },
		i: function() { return Date.pad(M); },
		s: function() { return Date.pad(s); },
		e: function() { return "-NA-"; },
		I: function() { return "-NA-"; },
		O: function() { return (o < 0 ? "+" : "-") + Date.pad(Math.floor(Math.abs(o) / 60)) + Date.pad(Math.abs(o) % 60); },
		P: function() { return (o < 0 ? "+" : "-") + Date.pad(Math.floor(Math.abs(o) / 60)) + ":" + Date.pad(Math.abs(o) % 60); },
		T: function() { return "-NA-"; },
		Z: function() { return o * 60; },
		c: function() { return "-NA-"; },
		r: function() { return date.toString(); },
		U: function() { return T / 1000; }
	};

	var result = "";
	for (var i = 0; i < mask.length; i++) {
		var char = mask.charAt(i);
		result += (char in flags) ? flags[char]() : char;
	}

	return result;
};

Date.pad = function(value, length) {
	value = String(value), length = parseInt(length) || 2;
	while (value.length < length) {
		value = "0" + value;
	}

	return value;
};
Date.i18n = {
	months: {
		short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		lengths: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	},
	days: {
		short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	}
};
Date.masks = {
	"default": "D M d Y H:i:s",
	shortDate: "m/d/y",
	mediumDate: "M d, Y",
	longDate: "F d, Y",
	fullDate: "l, F d, Y",
	shortTime: "g:i A",
	mediumTime: "g:i:s A",
	longTime: "g:i:s A O",
	isoDate: "Y-m-d",
	isoTime: "G:i:s",
	isoDateTime: "Y-m-d G:i:s",
	isoFullDateTime: "Y-m-d G:i:s.0O"
};