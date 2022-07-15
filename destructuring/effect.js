"use strict";

/*
Destructuring is an assignment syntax is a JavaScript expression that makes it possible to extract data or object into distinct variables

Desstructuring syntax can be used in the left-hand side of assignments
*/

// Array Destructuring
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
// console.log(`first: ${numA}, second: ${numB}, third: ${numC}, fourth: ${numD}`);

//  how to use rest pattern
function sayHello(firstArg, ...restOfArgs) {
  //   console.log(firstArg, restOfArgs);
}

sayHello("Zionhilt", 30, "123 Fake St", 51, false);

const animalArr = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
const [dogStrings, catsStrings, ...otherAnimals] = animalArr;

// console.log(dogStrings); /* print the first index*/
// console.log(catsStrings); /* print the second index*/
// console.log(otherAnimals); /* print the rest*/

// Object destructurig
const myObj = {
  firstName: "Zion",
  secondName: "Bright",
  lastName: "Oluwafemi",
  age: ["4yrs", "1yr"],
  height: "2ft",
};

const { firstName, secondName, age, height } = myObj;
// console.log(firstName, " and ", secondName, "Our age is", age, height);

// creating data before assigning it
let myValue1, myValue2;
const myObj2 = { myValue1: "a", myValue2: "b" };
({ myValue1, myValue2 } = myObj2);
// console.log(myValue1, myValue2);

// assigning new variable names
const myObj3 = { uuid: 32684859, userName: "Zion", loggedIn: new Date() };
const { uuid: userID, userName: nameP, loggedIn: lastLoginDate } = myObj3;

// console.log(userID, nameP, lastLoginDate.toLocaleString());

// assigning using function
// function londonUser({ user = "Joshua", memberType = "Premium" }) {
//   console.log(`Username: ${user}, membership type: ${memberType}`);
// }
// londonUser({ user: "Zion" });

function londonUser2(obj) {
  const { user = null, memberType = "Premium" } = obj;
  if (!user) {
    console.log(alert("Error! No user name entered >:( "));
  } else {
    console.log(`Username: ${user}, Membership Type: ${memberType}`);
  }
}
const member1 = { user: "Bright", memebrType: "Premium" };
const member2 = { memeberType: "free" };
// londonUser2(member1);

// snap out your something in the arguement
// function sayIfValid({ prop: s, term: q }) {
//   console.log(s, q);
// }

// const myObj6 = {
//   prop: "I am valid",
//   proop: "I am not valid",
//   term: "I am also not",
// };

// sayIfValid(myObj6);

// Oor
function sayIfValid({ prop, term }) {
  const internalObj = {
    prop,
    term,
    constructed: true,
  };
  return internalObj;
}

const myObj6 = {
  prop: "I am valid",
  proop: "I am not valid",
  term: "I am also not",
};

console.log(sayIfValid(myObj6));
