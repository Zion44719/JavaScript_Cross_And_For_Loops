"use strict";

/*
every() is checking the condition maybe our parameter is greater than 0, if it's greater it will return true but if not it will return false
*/

// Example 1
let numbers = [1, 3, 5];
let result = numbers.every((e) => {
  return e > 7;
});

console.log(result);
