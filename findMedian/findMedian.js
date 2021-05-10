/*
  Given two sorted arrays arrOne and arrTwo of size m and n respectively, return the median of the two sorted arrays.
*/

function findMedian(arrOne, arrTwo){

  let arrs = arrOne.concat(arrTwo);
  arrs.sort(function (a, b){ return a - b; });

  let arrLen = arrs.length;
  return arrLen % 2 === 0 ? (arrs[Math.floor(arrLen/2)-1] + arrs[Math.ceil(arrLen/2)])/2 : arrs[Math.floor(arrLen/2)];
}

module.exports = findMedian;
