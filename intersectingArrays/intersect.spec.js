var chai = require('chai'),
expect = chai.expect,
should = chai.should();

const intersec = require('./intersect');


describe('Test intersect func', () => {

  it('expects result to be an array', async () => {
    intersec([1,2,2,1], [2,2]).should.be.an('array');
  });

  it('expects errr', async () => {
    intersec([4,9,5], [9,4,9,8,4]).should.be.contain.oneOf([4,9])
  });

});
