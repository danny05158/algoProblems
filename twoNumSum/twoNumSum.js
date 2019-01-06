/* Write a twoNumSum function that takes a non empty array of distict integers
and an integer representing a target sum. if any two numbers in the
input array sum up to the target sum the function should return them in
an array in sorted order. otherwise return an empty array
*/

//Brute Force Method
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]].sort((a, b) => a - b);
      }
    }
  }
}

module.exports = twoNumberSum;
