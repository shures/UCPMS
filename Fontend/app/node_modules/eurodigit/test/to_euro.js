var assert = require('chai').assert;

var toEuro = require('../src/to_euro.js');

function assertTranslation(expected, toTranslate) {
	assert.equal(toEuro(toTranslate), expected);
}

describe('to_euro', function() {

	it('should handle null values without error', function() {
		// expect
		assertTranslation(null, null);
	});

	it('should translate Devanagari numerals', function() {
		// expect
		assertTranslation('0 1 2 3 4 5 6 7 8 9',
				  '० १ २ ३ ४ ५ ६ ७ ८ ९');
	});

	it('should translate Eastern Arabic numerals', function() {
		// expect
		assertTranslation('0 1 2 3 4 5 6 7 8 9',
				  '٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩');
	});

	it('should translate Perso-Arabic numerals', function() {
		// expect
		assertTranslation('0 1 2 3 4 5 6 7 8 9',
				  '۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹');
	});

	it('should ignore irrelevant text', function() {
		// expect
		assertTranslation('irrelevant 123 text',
				  'irrelevant १२३ text');
	});

	it('should handle random objects', function() {
		// given
		var obj = { toString: function() { return '123'; } };

		// expect
		assertTranslation('123', obj);
	});

});
