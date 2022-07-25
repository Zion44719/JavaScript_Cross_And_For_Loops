"use strict";

/*
1. reduce() method return a single value
2. reduce() method executes on array element

*/

// Example 1.
let arrayNumber = [2, 3, 4];
let sum = 0;
for (let i = 0; i < arrayNumber.length; i++) {
  sum += arrayNumber[i];
}

// console.log(sum);

// Example 2

let arrNum = [1, 2, 3, 4];

let sumArr = arrNum.reduce((previousValue, currentValue) => {
  return (previousValue += currentValue);
});

console.log(sumArr);

// Example 3
const staffProfile = [
  {
    userName: "Zion",
    userAge: 30,
    position: "developer",
    userId: 1,
    salary: 20,
  },
  {
    userName: "Joshua",
    userAge: 23,
    position: "content writter",
    userId: 2,
    salary: 50,
  },
  {
    userName: "Kinplus",
    userAge: 20,
    position: "the boss",
    userId: 3,
    salary: 70,
  },
  {
    userName: "Bright",
    userAge: 24,
    position: "designer",
    userId: 4,
    salary: 40,
  },
  {
    userName: "Zion",
    userAge: 32,
    position: "assistant programmer",
    userId: 5,
    salary: 90,
  },
  {
    userName: "Peter",
    userAge: 20,
    position: "assistant programmer",
    userId: 5,
    salary: 90,
  },
];

const total = staffProfile.reduce((acc, currItem) => {
  console.log(`sum: ${acc} current salary: ${currItem.salary}`);
  return (acc += currItem.salary);
}, 2);

console.log(total);
