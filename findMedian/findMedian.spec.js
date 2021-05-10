var chai = require('chai')
, expect = chai.expect
, should = chai.should();

const medianValue = require('./findMedian');

describe('Find Median Value', () => {

  it('finds median of [1,3], [2]', async function(){
    expect(medianValue([1,3], [2])).to.equal(2.0);
  })

  it('finds median of [], [1]', async function (){
    expect(medianValue([], [1])).to.equal(1.0);
  })

})
