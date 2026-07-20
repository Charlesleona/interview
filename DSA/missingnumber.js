const nums = [0, 1, 2, 4];

function findMissing(nums) {
  let value = (nums.length * (nums.length + 1)) / 2;
  let actual = nums[0];
  for (let i = 1; i < nums.length; i++) {
    actual += nums[i];
  }
  return value - actual;
}
let ans = findMissing(nums);

console.log(ans);
