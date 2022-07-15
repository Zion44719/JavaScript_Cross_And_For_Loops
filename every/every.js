"use strict";

//  every is checking the condition maybe our parameter is greater than 0
let numbers = [1, 3, 5];
let result = numbers.every((e) => {
  return e > 0;
});

console.log(result);
