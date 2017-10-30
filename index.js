'use strict';
const toString = Object.prototype.toString;

module.exports = x => toString.call(x) === '[object Function]';
