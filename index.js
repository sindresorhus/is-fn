'use strict';
module.exports = input => {
	const type = Object.prototype.toString.call(input);
	return type === '[object Function]' ||
		type === '[object GeneratorFunction]' ||
		type === '[object AsyncFunction]';
};
