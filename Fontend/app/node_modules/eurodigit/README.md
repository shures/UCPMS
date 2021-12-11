EuroDigit
=========

Convert Hindu-Arabic numerals of different scripts into Western Arabic (European) digits. 

# Supported scripts

## [Devanagari](https://en.wikipedia.org/wiki/Devanagari#Numerals)

Commonly used with:

* Hindi
* Konkani
* Marathi
* Nepali
* Sanskrit

# Installation

	npm install eurodigit

# Usage

## Converting to WA numerals

	const eurodigit = require('eurodigit/src/to_euro');
	const one_hundred = eurodigit('१००');

## Converting _from_ WA numerals

	const toDevanagari = require('eurodigit/src/to_devanagari');
	const one_hundred_in_devanagari = toDevanagari(100);
