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

// Still not get the example:
// function Counter() {
//   this.count = 0;
//   let self = this;
//   return {
//     increase: function () {
//       self.count++;
//     },
//     current: function () {
//       return self.count;
//     },
//     reset: function () {
//       self.count = 0;
//     },
//   };
// }

// let counter = new Counter();
// let numbers = [1, 2, 3];
// let sum = 0;

// counter.forEach(function (e) {
//   sum += e;
//   this.increase();
// }, counter);

// console.log(sum); // 6
// console.log(counter.current()); // 3
