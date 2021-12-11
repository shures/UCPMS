var to_euro = require('./to_euro');

module.exports = function(s) {
	return parseInt(to_euro(s), 10);
};
