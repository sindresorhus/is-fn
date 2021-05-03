export default function isFunction(value) {
	const type = Object.prototype.toString.call(value);

	return type === '[object Function]' ||
		type === '[object GeneratorFunction]' ||
		type === '[object AsyncFunction]';
}
