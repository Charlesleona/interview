const num = [10, 20, 30, 40];
for (let i = 0, j = num.length - 1; i < j; i++, j--) {
  let temp = num[i];
  num[i] = num[j];
  num[j] = temp;
}
console.log(num);

// console.log(num.reverse());
