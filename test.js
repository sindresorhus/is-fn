'use strict';
const test = require('ava');
const fn = require('./');

test(t => {
    t.true(fn(fn));
    t.true(fn(() => {}));
    t.false(fn(undefined));
    t.false(fn(null));
    t.false(fn('foo'));
    t.false(fn(/foo/));
    t.false(fn(true));
    t.false(fn(false));
    t.false(fn(NaN));
    t.false(fn(1));
    t.false(fn({ foo: true }));
    t.false(fn(['foo', 'bar']));
    t.end();
});
