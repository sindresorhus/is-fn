import test from 'ava';
import isFn from '.';

test('main', t => {
	t.true(isFn(isFn));
	t.true(isFn(() => {}));
	t.false(isFn(undefined));
	t.false(isFn(null));
	t.false(isFn('foo'));
	t.false(isFn(/foo/));
	t.false(isFn(true));
	t.false(isFn(false));
	t.false(isFn(NaN));
	t.false(isFn(1));
	t.false(isFn({foo: true}));
	t.false(isFn(['foo', 'bar']));
});
