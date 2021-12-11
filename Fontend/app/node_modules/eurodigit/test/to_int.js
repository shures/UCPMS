var assert = require('chai').assert;

var toInt = require('../src/to_int.js');

function assertTranslation(expected, toTranslate) {
	var translated = toInt(toTranslate);
	assert.equal(typeof translated, 'number');
	assert.equal(translated, expected);
}

describe('to_int', function() {

	it('should handle null in a javascripty way', function() {
		// expect
		assert.isTrue(Number.isNaN(toInt(null)));
	});

	it('should translate Devanagari numerals', function() {
		// expect
		assertTranslation(123, '१२३');
	});

	it('should translate Eastern Arabic numerals', function() {
		// expect
		assertTranslation(123, '١٢٣');
	});

	it('should translate Perso-Arabic numerals', function() {
		// expect
		assertTranslation(123, '۱۲۳');
	});

});
