const { expect } = require('chai');
const twoNumSum = require('./twoNumSum');

describe('TwoNumSum', () => {
  let testArray = [3, 5, -4, 11, -1, 1, 6];
  let targetSum = 10;

  it('takes in an array and target sum', () => {
    expect(twoNumSum(testArray, targetSum)).to.deep.equal([-1, 11]);
  });
});
