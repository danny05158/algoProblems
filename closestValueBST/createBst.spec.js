var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

// const closestValue = require('./closestValue');
const BST = require('./closestValue');

describe('Create a BST', () => {

  const value = 9;
  const bst = new BST(value);

  it('creates a bst object', async function(){
    expect(bst).to.be.an('object');
  })

  it('withd length of three', async function(){
    let objLenght = Object.keys(bst).length;
    expect(objLenght).to.equal(3);
  });

  it('BST class has a insert function', async function(){
    bst.should.have.property('insert');
  });

});
