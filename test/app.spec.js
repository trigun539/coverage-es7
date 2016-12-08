import { expect } from 'chai';
import firstValue from 'app';

describe('ES7 unit testing', () => {

	it('firstValue', () => {
		expect(firstValue()).to.be.equal(0);
	});

});
