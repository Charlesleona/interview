function x() {
  let a = 7;
  function y() {
    console.log(a);
  }
  a = 20;
  a = 100;
  return y;
}
var z = x();
z();
// remeber Lexical
// 100
