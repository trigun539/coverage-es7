import babelPolyfill from 'babel-polyfill';
import idMaker       from 'utils/generator';

export default function firstValue () {
	const gen = idMaker();
	return gen.next().value;
}
