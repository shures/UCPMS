var assert = require('chai').assert;

var toNonEuro = require('../src/to_non_euro.js');

describe('to_non_euro', function() {

	describe('#devanagari()', function() {

		function assertTranslation(expected, toTranslate) {
			assert.equal(toNonEuro.devanagari(toTranslate), expected);
		}

		it('should handle null values without error', function() {
			// expect
			assertTranslation(null, null);
		});

		it('should translate Western Arabic numerals to Devanagari', function() {
			// expect
			assertTranslation('० १ २ ३ ४ ५ ६ ७ ८ ९',
					  '0 1 2 3 4 5 6 7 8 9');
		});

		it('should ignore irrelevant text', function() {
			// expect
			assertTranslation('irrelevant १२३ text',
					  'irrelevant 123 text');
		});

		it('should handle Numbers', function() {
			// expect
			assertTranslation('१२३', 123);
		});

	});

	describe('#eastern_arabic()', function() {

		function assertTranslation(expected, toTranslate) {
			assert.equal(toNonEuro.eastern_arabic(toTranslate), expected);
		}

		it('should handle null values without error', function() {
			// expect
			assertTranslation(null, null);
		});

		it('should translate Western Arabic numerals to Devanagari', function() {
			// expect
			assertTranslation('٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩',
					  '0 1 2 3 4 5 6 7 8 9');
		});

		it('should ignore irrelevant text', function() {
			// expect
			assertTranslation('irrelevant ١٢٣ text',
					  'irrelevant 123 text');
		});

		it('should handle Numbers', function() {
			// expect
			assertTranslation('١٢٣', 123);
		});

	});

	describe('#perso_arabic()', function() {

		function assertTranslation(expected, toTranslate) {
			assert.equal(toNonEuro.perso_arabic(toTranslate), expected);
		}

		it('should handle null values without error', function() {
			// expect
			assertTranslation(null, null);
		});

		it('should translate Western Arabic numerals to Devanagari', function() {
			// expect
			assertTranslation('۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹',
					  '0 1 2 3 4 5 6 7 8 9');
		});

		it('should ignore irrelevant text', function() {
			// expect
			assertTranslation('irrelevant ۱۲۳ text',
					  'irrelevant 123 text');
		});

		it('should handle Numbers', function() {
			// expect
			assertTranslation('۱۲۳', 123);
		});

	});

});
