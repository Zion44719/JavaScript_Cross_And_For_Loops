"use strict";

/*
Destructuring is an assignment syntax is a JavaScript expression that makes it possible to extract data or object into distinct variables

Desstructuring syntax can be used in the left-hand side of assignments
*/
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const firstNum = myArray[0];
const [p, x, y, z] = myArray;
// console.log(firstNum);
// console.log(p);

const secondArray = ["Jan", "Feb", "Mar", "Apr"];
let month1, month2, month3;
[month1, month2, month3] = secondArray;

// console.log(month1, month2, month3);

// Swapping
let aa = 100;
let bb = 300;
let cc = 500;
let temp = cc;
// console.log(aa, bb, cc);
cc = bb;
bb = temp;
// console.log(aa, bb, cc);

// Swapping with destructuring
let aaa = 100;
let bbb = 300;
let ccc = 500;
// console.log(aaa, bbb, ccc);
[bbb, ccc] = [ccc, bbb];
// console.log(aaa, bbb, ccc);

// Destructuring Array with function
// function returnArray() {
//   return ["buns", "chin chin", "bread buns", "egg roll"];
// }
// console.log(returnArray());

// Function Filtering Array
function foodFilterArray(arr, search) {
  return arr.filter((t) => t === search);
}

const [resultOutPut] = foodFilterArray(
  ["fish", "chicken", "tofu", "titus"],
  "fish"
);
// console.log(resultOutPut);

// reuse the function
const [resultOutPut2] = foodFilterArray(
  ["cookies", "cake", "chocolate", "chesse"],
  "cake"
);
// console.log(resultOutPut2);

// can ignore/skipped some values
const anotheArr = [20, 30, 40, 150, 60, 100, 10];

const [numA, numB, , numC, numD] = anotheArr;
console.log(`first: ${numA}, second: ${numB}, third: ${numC}, fourth: ${numD}`);
