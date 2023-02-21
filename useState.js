function state() {
  let value = 42;
  return value;
}

// return 42
let myvalue = state();
myvalue = 22;

// return 22
console.log(myvalue);

/* Note that the state in the function has not changed. THe local copy we obtained 
through the variable changed.THe state value remains the same
*/


/*
Here we see that by calling the function, we are now changing the value in the functiom
itself. This illustration highlights the idea behind set state in react.js
*/
function setState(n) {
  let value = n;
  return n;
}

let myvalue2 = 42;
let savedVal = setState(42);

console.log(savedVal);


