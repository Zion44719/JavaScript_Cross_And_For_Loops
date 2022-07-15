"use strict";

let customersDetails = [
  { firstName: "Zion", lastName: "Lorem", creditScore: 120 },
  { firstName: "Bright", lastName: "Lorem", creditScore: 90 },
  { firstName: "Oluwafemi", lastName: "Lorem", creditScore: 170 },
  { firstName: "Esther", lastName: "Lorem", creditScore: 90 },
  { firstName: "Oni", lastName: "Lorem", creditScore: 50 },
  { firstName: "John", lastName: "Lorem", creditScore: 80 },
  { firstName: "Eunice", lastName: "Lorem", creditScore: 70 },
  { firstName: "Peace", lastName: "Lorem", creditScore: 75 },
];

// function userData() {
//   let result = customersDetails.find((c) => c.creditScore > 100);
//   console.log(result);
// }

// userData();

function userData() {
  let result = customersDetails.find((c) => c.creditScore > 100);
  console.log(result);
}

userData();
