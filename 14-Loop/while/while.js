"use strict";
/////////////////////////////////////////////////////
// while loop
// let count = 1;
// while (count < 10) {
//   console.log("while loop:", count);
//   count += 1;
// }

// let sumNumber = 0;
// let i = 0;
// while (i <= 10) {
//   sumNumber += i;
//   console.log("Adding:", i, sumNumber);
//   i++;
// }
// console.log(sumNumber);

// let sumNumber = 0;
// let i = 0;
// while (i <= 10) {
//   sumNumber += i;
//   console.log("Adding:", i, sumNumber);
//   i += 5;
// }

let sumNumber = 0;
let i = 0;
while (i <= 10) {
  if (i % 2 == 1) {
    sumNumber += i;
    console.log("Adding:", i, sumNumber);
  }
  i++;
}

// Break
// let sum = 0;
// let i = 0
// while (i <= 10) {
//   sum += i
//   console.log(i, sum)
//   if (sum > 30) {
//     break;
//   }
//   i++
// };

// Continue
// let sum = 0;
// let i = 0
// while (i < 10) {
//   i++
//   if (i == 8) {
//     continue;
//   }
//   sum += i
//   console.log(i, sum)
// };

// function oddNumbers(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 == 1) {
//       sum += i
//       console.log(i, sum)
//     }
//   };
// }

// function evenNumbers(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 == 0) {
//       sum += i
//       console.log(i, sum)
//     }
//   };
// }

// function evenNumbers(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i += 2) {
//     sum += i
//     console.log(i, sum)
//   }
// }

// oddNumbers(10)
// evenNumbers(10)
