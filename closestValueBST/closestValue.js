/*
You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in property called "left" and "right" respectively. You are also given a target integer value.
Write a function that finds that finds the closest value to that
target value contained in the BST.
*/

function closestValue(tree, target) {
  let currentNode = tree;
  let closest = Infinity;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

module.exports = closestValue;
