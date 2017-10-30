import test from 'ava';
import m from '.';

test(t => {
	t.true(m(m));
	t.true(m(() => {}));
	t.false(m(undefined));
	t.false(m(null));
	t.false(m('foo'));
	t.false(m(/foo/));
	t.false(m(true));
	t.false(m(false));
	t.false(m(NaN));
	t.false(m(1));
	t.false(m({foo: true}));
	t.false(m(['foo', 'bar']));
});
