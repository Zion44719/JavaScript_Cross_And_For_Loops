"use strict";

// try and catch will literaly catch the error thrown and run other line of code, it is useful if you dont want your code to terminate

// Example
// try {
//   throw "Exception error";
// } catch (catchID) {
//   console.log(catchID);
// }

// console.log("i want to run");

// Example 2
let myNum = 35;

function checkIfNum(num) {
  if (isNaN(num)) {
    throw "not a number!";
  } else {
    // console.log("Yes, this is a number");
  }
}

// checkIfNum("string"); /*Because this is not a number it wont get to the next line of code */
// console.log("I want to run and live");

// use this method instead

// try {
//   checkIfNum(myNum);
// } catch (catchID) {
//   console.log("caught an error:" + catchID);
// }
// console.log("I want to run and live");

// example 3
// const myErrorLog = [];

// function errorHandler(e) {
//   myErrorLog.push(e);
// }

// try {
//   checkIfNum(myNum);
// } catch (catchID) {
//   errorHandler(catchID);
// }
// console.log(myErrorLog.length);

// Example 4
// Object COnstructor
function MyString(string) {
  if (typeof string === "string") {
    this.value = string;
    this.getValue = function () {
      console.log("Your string is:" + this.value + ".");
    };
  } else {
    throw new StringExceptionError(string);
  }
}

function StringExceptionError(value) {
  this.value = value;
  this.message = "Must be a string";
  this.toString = () => {
    return this.value + ":" + this.message;
  };
}

function verifyString(s) {
  let str;
  try {
    str = new MyString(s);
  } catch (e) {
    if (e instanceof StringExceptionError) {
      console.log("String exception:" + e);
    } else {
      console.log("Other exception");
    }
  }
  return str;
}

// First Try
// const a = verifyString("I am a string");
// console.log(a)
// a.getValue();

// Second Try
// const b = verifyString(true);

// Third Try
// const c = verifyString(23234325);

// Note: You can throw an error in your catch statement

// function MyString(string) {
//   if (typeof string === "string") {
//     this.value = string;
//     this.getValue = function () {
//       console.log("Your string is:" + this.value + ".");
//     };
//   } else if (typeof string === "boolean") {
//     throw "Error!";
//   } else {
//     throw new StringExceptionError(string);
//   }
// }

// Example 5
// function StringExceptionError(value) {
//   this.value = value;
//   this.message = "Must be a string";
//   this.toString = () => {
//     return this.value + ":" + this.message;
//   };
// }

// function verifyString(s) {
//   let str;
//   try {
//     str = new MyString(s);
//   } catch (e) {
//     if (e instanceof StringExceptionError) {
//       console.log("String exception:" + e);
//     } else {
//       throw "Unknown error";
//     }
//   }
//   return str;
// }

// const b = verifyString(true);

// Example 6
// Using Finally

function MyString(string) {
  if (typeof string === "string") {
    this.value = string;
    this.getValue = function () {
      console.log("Your string is:" + this.value + ".");
    };
  } else {
    throw new StringExceptionError(string);
  }
}

function StringExceptionError(value) {
  this.value = value;
  this.message = "Must be a string";
  this.toString = () => {
    return this.value + ":" + this.message;
  };
}

function verifyString(s) {
  let str;
  try {
    str = new MyString(s);
  } catch (e) {
    if (e instanceof StringExceptionError) {
      console.log("String exception:" + e);
    } else {
      console.log("Other exception");
    }
  } finally {
    always();
  }
  return str;
}

function always() {
  console.log("I always run :D");
}

// const a = verifyString("345289");
// const b = verifyString(123);

// Example 7
// function finalExample() {
//   try {
//     console.log("Hello, hope you like the examples");
//     throw "test";
//   } catch (e) {
//     console.log(e);
//     return true;
//   }
// }

// finalExample();

// This is to see if the valuie is true
// console.log(finalExample());

/*
Note: 
1. if you have a return in try and catch statement it will suspend the return and run the finally block before running return statement. 

2. return statement in finally overrides the return block in catch or throw block in catch
*/

// Example 8
// function finalExample() {
//   try {
//     console.log("Hello, hope you like the examples");
//     throw "test";
//   } catch (e) {
//     console.log(e);
//     return true;
//   } finally {
//     console.log("Finally can i run! :D");
//   }
// }

// console.log(finalExample());

// Example 9
function finalExample() {
  try {
    console.log("Hello, hope you like the examples");
    throw "test";
  } catch (e) {
    console.log(e);
    throw "Really";
  } finally {
    console.log("Finally can i run! :D");
    return true;
  }
}

// console.log(finalExample());

// Example 10
// function lastExample(x, y) {
//   if (typeof x !== Number) {
//     throw "this must be a number";
//   } else if (typeof y !== Number) {
//     throw "this second arguement must be a number";
//   }
//   return x + y;
// }

// try {
//   const result = lastExample(2, 10);
//   console.log(result);
// } catch (catchID) {
//   console.log(catchID);
// }

// Example 11
function lastExample(x, y) {
  if (typeof x !== "number") {
    throw "this must be a number";
  } else if (typeof y !== "number") {
    throw "this second arguement must be a number";
  }
  return x + y;
}

try {
  const result = lastExample(7, "Testing");
  console.log(result);
} catch (catchID) {
  console.log(catchID);
}
