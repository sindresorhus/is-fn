import test from 'ava';
import isFunction from './index.js';

test('main', t => {
	function f() {}

	t.true(isFunction(f));
	t.true(isFunction(isFunction));
	t.true(isFunction(() => {}));
	t.true(isFunction(function * () {}));
	t.true(isFunction(async () => {}));
	t.false(isFunction(undefined));
	t.false(isFunction(null));
	t.false(isFunction('foo'));
	t.false(isFunction(/foo/));
	t.false(isFunction(true));
	t.false(isFunction(false));
	t.false(isFunction(Number.NaN));
	t.false(isFunction(1));
	t.false(isFunction({foo: true}));
	t.false(isFunction(['foo', 'bar']));
});
