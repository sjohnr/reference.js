function $w(string) {
	string = string.strip();
	
	return string ? string.split(/\s+/) : [];
}