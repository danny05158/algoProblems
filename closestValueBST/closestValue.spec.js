const { expect } = require('chai');
const closestValue = require('./closestValue');
const BST = require('./createBst');

const initialVal = 9;
const bst = new BST(initialVal);

//insert into the binary search tree
bst.insert(5);
bst.insert(7);
bst.insert(9);
bst.insert(15);

describe('Find closest value', () => {

  let closestVal = closestValue(bst, 3);
  expect(closestVal).to.equal(5);

});
