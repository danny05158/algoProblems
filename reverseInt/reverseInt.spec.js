const { expect } = require('chai');
const ReverseInt = require('./reverseInt');

describe('numberToString', function(){


  it('retrieves a string from numb', async () => {
    const number = Math.floor(Math.random() * 100);
    const res = new ReverseInt(number);

    const strNumb = res.getStringRep();
    expect(strNumb).to.equals(String(strNumb));

  });

  it('cast str to numb', async () => {

    const number = Math.floor(Math.random() * 100);
    const res = new ReverseInt(number);

    const casted = res.castToNumber();
    expect(casted).to.equal(number);
  });

  it('tests if number is greater than signed 32 bit val', async () => {
    const number = Math.floor(Math.random() * 100);
    const res = new ReverseInt(number);

    const test = res.maxHexDecimal();
    expect(test).to.equal(number);

  });

  it('test all funcs in the class', async () => {
    const number = 123;
    const res = new ReverseInt(number);

    res.getStringRep();
    res.castToNumber();
    res.maxHexDecimal();
    let final = res.returnReverse();

    expect(final).to.equal(321);
  })
});
