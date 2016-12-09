import babelPolyfill from 'babel-polyfill';
import React, { Component } from 'react';
import idMaker       from 'utils/generator';

export default function firstValue () {
	const gen = idMaker();
	const obj1 = { a: 1, b: 2, c: 3};
	const obj2 = { ...obj1, d: 5 };
	return gen.next().value;
}

export class TestComponent extends Component {
	render () {
		return <h1>Hello world</h1>;
	}
}
