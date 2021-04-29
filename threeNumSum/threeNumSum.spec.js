const { expect } = require('chai');
const threeNumSum = require('./threeNumSum');

describe('random numbs', () => {
  let testArr = [12, 3, 1, 2, -6, 5, -8, 6];
  let targetSum = 0;

  it('returns 0 when inputs above', () => {
    expect(threeNumSum(testArr, targetSum)).to.deep.equal(0);
  });
});
