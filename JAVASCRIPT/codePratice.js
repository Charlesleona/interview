let nums = [1, 2, 3, 4, 5];
k = 2;
function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    // (let i = 4 ; 4>2 ; i++)
    let last = nums.pop();
    nums.unshift(last);
  }
  return nums;
}
rotate(nums, k);
console.log(nums);
