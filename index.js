'use strict';
const {toString} = Object.prototype;

module.exports = input => toString.call(input) === '[object Function]';
