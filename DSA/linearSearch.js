// Problem
// Given an array and a target, return the index of the target.
// If the target is not found, return -1.
// Example:
// arr = [5, 2, 9, 1, 7]
// target = 9
// Output:
// 2
// Another example:
// arr = [5, 2, 9, 1, 7]
// target = 10
// Output:
// -1

const arr = [5, 2, 9, 1, 7];
let target = 9;
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, target));
