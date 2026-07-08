function a() {
  console.log(b);
}
var b = 10;
a();

// it print 10 but why its when b is in global scope ?
// that when lexical comes in it will look for the global scopes and find it 
// if b is not in global scope also then reference error not defined 

