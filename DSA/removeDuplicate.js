// Problem:
// Remove Duplicates from Sorted Array

// Difficulty: Easy

// Problem Statement

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.

// Return k, the number of unique elements.

// The first k elements of nums should contain the unique elements.

// Example 1
// Input: nums = [1,1,2]

// Output: 2, nums = [1,2,_]

// Explanation:

// Return 2 because there are 2 unique elements.

// Example 2
// Input: nums = [0,0,1,1,1,2,2,3,3,4]

// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Return 5.

// Constraints
// 1 <= nums.length <= 3 * 10^4

// -100 <= nums[i] <= 100

// nums is sorted in non-decreasing order.

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
function removeDuplicates(nums) {
  let i = 0;
  for (j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
console.log(removeDuplicates(nums));
console.log(nums);
