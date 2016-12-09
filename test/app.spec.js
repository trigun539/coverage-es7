import React from 'react';
import { expect } from 'chai';
import firstValue, { TestComponent } from 'app';

describe('ES7 unit testing', () => {

	it('firstValue', () => {
		expect(firstValue()).to.be.equal(0);
	});

	it('should render', () => {
		const testing = <h1>Test</h1>;
		expect(TestComponent).to.be.ok;
	});

});
