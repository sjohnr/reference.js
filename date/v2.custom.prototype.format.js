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

Date.format = function() {
	var	token			= /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloZ]|"[^"]*"|'[^']*'/g,
		timezone		= /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip	= /[^-+\dA-Z]/g

	// Regexes are cached through closure
	return function(date, mask) {
		var	d = date.getDate(),
			D = date.getDay(),
			m = date.getMonth(),
			y = date.getFullYear(),
			H = date.getHours(),
			M = date.getMinutes(),
			s = date.getSeconds(),
			L = date.getMilliseconds(),
			o = date.getTimezoneOffset(),
		flags = {
			d:    d,
			dd:   Date.pad(d),
			ddd:  Date.i18n.days.short[D],
			dddd: Date.i18n.days.long[D],
			m:    m + 1,
			mm:   Date.pad(m + 1),
			mmm:  Date.i18n.months.short[m],
			mmmm: Date.i18n.months.long[m],
			yy:   String(y).slice(2),
			yyyy: y,
			h:    H % 12 || 12,
			hh:   Date.pad(H % 12 || 12),
			H:    H,
			HH:   Date.pad(H),
			M:    M,
			MM:   Date.pad(M),
			s:    s,
			ss:   Date.pad(s),
			l:    Date.pad(L, 3),
			L:    Date.pad(L > 99 ? Math.round(L / 10) : L),
			t:    H < 12 ? "a"  : "p",
			tt:   H < 12 ? "am" : "pm",
			T:    H < 12 ? "A"  : "P",
			TT:   H < 12 ? "AM" : "PM",
			Z:    (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
			o:    (o > 0 ? "-" : "+") + Date.pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4)
		};

		return mask.replace(token, function($0) {
			return ($0 in flags) ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
Date.masks = {
	"default":			"ddd mmm d yyyy HH:MM:ss",
	shortDate:			"m/d/yy",
	mediumDate:			"mmm d, yyyy",
	longDate:			"mmmm d, yyyy",
	fullDate:			"dddd, mmmm d, yyyy",
	shortTime:			"h:MM TT",
	mediumTime:			"h:MM:ss TT",
	longTime:			"h:MM:ss TT Z",
	isoDate:			"yyyy-mm-dd",
	isoTime:			"HH:MM:ss",
	isoDateTime:		"yyyy-mm-dd'T'HH:MM:ss",
	isoFullDateTime:	"yyyy-mm-dd'T'HH:MM:ss.lo"
};