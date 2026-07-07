var x = 1;
a();
b();
console.log(x);

function a() {
  var c = 10;
  console.log(x);
}

function b() {
  var d = 100;
  console.log(x);
}

// global space
console.log(window.x);
