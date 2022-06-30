"use strict";

let numbers = [1, 3, 5];
let result = numbers.every(function (e) {
  return e > 0;
});

console.log(result);
