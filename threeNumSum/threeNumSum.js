/*
Problem:
write a function that takes in a non empty
array of distict integers and an integer representing
a target sum. The func should find all triplets in the array
that sum up to the target sum */


//Brute force method
function threeNumSum(array, targetSum) {
  let resultArr = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let l = j + 1; l < array.length; l++) {
        if (array[i] + array[j] + array[l] === targetSum) {
          resultArr.push([array[i], array[j], array[l]]);
        }
      }
    }
  }
}

module.exports = threeNumSum;
