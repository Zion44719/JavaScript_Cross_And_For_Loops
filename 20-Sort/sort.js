"use strict";

// Example 1
let employeesData = [
  {
    firstName: "John",
    LastName: "Oni",
    age: 27,
    joinedDate: "March 27, 1999",
  },
  {
    firstName: "Ana",
    lastName: "Oni",
    age: 29,
    joinedDate: "January 16, 2019",
  },
  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },

  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];

employeesData.sort((z, o) => {
  console.log(z.age + o.age);
});

// display the array using forEach
// employeesData.forEach((d) => {
//   console.log(`${d.firstName} ${d.lastName} ${d.age}`);
// });

// Example 2
// Sort will return ascending order of array
// let a = [10, 7, 40, 3, 2, 1];
// let b = a.sort();
// b[2];
// console.log(b);
