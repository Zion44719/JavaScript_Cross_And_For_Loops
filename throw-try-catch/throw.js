"use strict";

/*
Throw your own exception
you specify the expression containing the value to be thrown
you use the word throw
*/

// Example 1.
// function checkIfNum(num) {
//   if (isNaN(num)) {
//     throw "This is not a number";
//   } else {
//     console.log(num);
//   }
// }

// checkIfNum("hello");

// You can throw number or string or Boolean or object

// Example 2.
// throw 7
// throw true
// throw "i am an error";

// Example 3
// const myObjException = {
//   toString: function () {
//     return "I am an object exception";
//   },
// };

// throw myObjException;

// Example 4
function MyException(message) {
  this.message = message;
  this.name = "My exception";
  this.toString = function () {
    return this.name + ": " + this.message;
  };
}

// pattern used
// const exception = new MyException("Hello");
// console.log(exception);

// throw new MyException("Missing field");
