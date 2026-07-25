let arr = [5, 1, 3, 4, 9];

// console.log(arr.map((i) => i * 2));

// console.log(arr.filter((i) => i % 2 === 0));

console.log(
  arr.reduce(function (max, curr) {
    if (curr > max) {
      max = curr;
    }
    return max;
  }, 0),
);

const users = [
  {
    firstName: "abc",
    lastName: "x",
    age: 23,
  },
  {
    firstName: "def",
    lastName: "y",
    age: 26,
  },
  {
    firstName: "efg",
    lastName: "z",
    age: 33,
  },
  {
    firstName: "gdd",
    lastName: "zx",
    age: 33,
  },
];

// const output = users.map((x) => x.firstName + x.lastName);
// console.log(output);

const a = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
// console.log(a);

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);
