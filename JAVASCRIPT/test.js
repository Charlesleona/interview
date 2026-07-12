// function x() {
//   let a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 20;
//   a = 100;
//   return y;
// }
// var z = x();
// z();

function add() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function x() {
    console.log("clicked", ++count);
  });
}
add();
