import babelPolyfill from 'babel-polyfill';
import React, { Component } from 'react';
import idMaker       from 'utils/generator';

export default function firstValue () {
	const gen = idMaker();
	return gen.next().value;
}

export class TestComponent extends Component {
	render () {
		return <h1>Hello world</h1>;
	}
}
