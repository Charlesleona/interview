Input: [1, 2, 3, 4, 5];
Output: 15;

const arr = [1, 2, 3, 4, 5];
let ans = 0
for (let i = 0; i < arr.length ; i++) {
  ans = arr[i] + ans;
}
console.log(ans);


