/*
1. looping through an array using forEach
2. forEach is for an array
*/
// const drinks = ["coffee", "coke", "fanta", "7up", "malta"];

// drinks.forEach(function (drk) {
//   console.log(drk);
// });

// drinks.forEach((drk) => {
//   console.log(drk);
// });

// Or

// [].forEach.call(drinks, (drk) => {
//   console.log(drk);
// });

// For in loop
const drinks = ["coffee", "coke", "fanta", "7up", "malta", "5alive", "eva"];

// for (let key in drinks) {
//   if (drinks[key] === "7up") {
//     break;
//   }
//   console.log(drinks[key]);
// }

// for (let key in drinks) {
//   if (drinks[key] === "7up") {
//     continue;
//   }
//   console.log(drinks[key]);
// }

// for (let key in drinks) {
//   if ("coffee" === drinks[key]) {
//     console.log("Okay");
//   }
// }

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

function userData() {
  customersDetails.forEach((d) => {
    // console.log(d.firstName);
    // console.log(d.creditScore);
  });
}

userData();

// Example
const fruits = ["orange", "apple", "strawberry", "mango"];

fruits.forEach((item) => {
  console.log(item.toUpperCase());
});
