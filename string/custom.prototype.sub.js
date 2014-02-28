String.prototype.sub = function(pattern, replacement, count) {
	replacement = this.gsub.prepareReplacement(replacement);
	count = count === undefined ? 1 : count;

	return this.gsub(pattern, function(match) {
		if (--count < 0) return match[0];
		return replacement(match);
	});
};