// var a = 10;
// {} // -> this is called Block 
// {
//     var a = 100;
//     var a = 99
//   let b = 2;
//   const c = 3;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a); // 100
// console.log(b); // not defined - block scop and different memory
// console.log(c); // not defined - block scop and different memory
// both are pointing same memory // shadowing

let b = 10; // different memory 
{} // -> this is called Block 
{
    var a = 100;
    // let b = 2;
    let b = 99 // block scope
  const c = 3;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(b); // 10 
// 100 ,99 , 3 ,10  

// same for const 


