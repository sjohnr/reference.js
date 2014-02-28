String.prototype.gsub = function(pattern, replacement) {
	var result = '', source = this, match;
	replacement = arguments.callee.prepareReplacement(replacement);

	while (source.length > 0) {
		if (match = source.match(pattern)) {
			result += source.slice(0, match.index);
			result += String.interpret(replacement(match));
			source	= source.slice(match.index + match[0].length);
		} else {
			result += source, source = '';
		}
	}
	return result;
};