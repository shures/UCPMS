'use strict';

function from(base) {
	function replacer(c) { return String.fromCharCode(Number(c) + base); }
	return function(original) {
		return original && original.toString().replace(/[0-9]/g, replacer);
	};
}

module.exports = {
	devanagari: from(2406),
	eastern_arabic: from(1632),
	perso_arabic: from(1776)
};
