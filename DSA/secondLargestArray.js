const n = [2, 7, 9, 3, 1, 0];
max = n[0];
secMax = -Infinity;

for (let i = 0; i < n.length; i++) {
  if (n[i] > max) {
    secMax = max;
    max = n[i];
  } else if (n[i] > secMax && n[i] < max) {
    // to prevent updating largest num or duplicate
    secMax = n[i];
  }
}
console.log(secMax);
