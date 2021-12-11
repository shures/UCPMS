'use strict';

function replacer(c) {
	c = c.charCodeAt(0);
	if(c < 1642) return c - 1632; // western arabic
	if(c < 1786) return c - 1776; // perso-arabic
	return c - 2406; // devanagari
}

module.exports = function(original) {
	return original && original.toString().replace(/[٠-٩۰-۹०-९]/g, replacer);
};
