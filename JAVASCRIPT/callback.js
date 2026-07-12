setTimeout(function () {
  console.log("timer");
}, 5000);

async function x(y) {
  console.log("x");
  y();
  await 6000; // its resolved so it z is printed await Promise.resolve(6000) already finished 
  console.log("z");
}

x(function y() {
  console.log("y");
});
