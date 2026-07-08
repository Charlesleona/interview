// Largest in the Array
const n = [2, 7, 9, 3, 1, 0];
let max = n[0];
for (let i = 1; i < n.length; i++) {
  if (n[i] > max) {
    max = n[i];
  }
}
console.log(max);

// Time Complexity O(n) -> visited only once each
// Space Complexity O(1) -> one extra variable (max)
