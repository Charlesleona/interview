// Input: nums = [1, 2, 3, 1];

// Output: true;
// Take nums[i]
//         ↓
// Compare with every element in check
//         ↓
// If you find a match
//     → return true
//         ↓
// If you finish the entire inner loop without finding a match
//     → push nums[i]

function check(nums) {
  let check = [];
  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = 0; j < check.length; j++) {
      if (nums[i] === check[j]) {
        found = true;
        break;
      }
    }
    if (found) {
      return false;
    }
    check.push(nums[i]);
  }
}
const nums = [1, 2, 3, 1];
console.log(check(nums));
