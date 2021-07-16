/*
Description:
Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

*/


let intersec = (nums1, nums2) => {

  if(nums1.length <= 1 && nums2.length <= 1){
    throw err;
  }

  let map = {};
  let returnArr = [];

  for (let i = 0; i < nums1.length; i++) {

    if(!map[nums1[i]]){
      map[nums1[i]] = 1;
    }else{
      map[nums1[i]]++;
    }
  }

  for (let j = 0; j < nums2.length; j++) {

    if(nums2[j] in map && map[nums2[j]] >= 1){
      returnArr.push(nums2[j]);
      map[nums2[j]]--;
    }
  }
  return returnArr;
}

module.exports = intersec;
