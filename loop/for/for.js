"use strict";
///////////////////////29/06/2022//////////////////////////////
// let account = {
//   name: "Victor Emeter",
//   bankname: "jibowu bank",
//   accpin: 1234,
//   accnum: 3143100240,
//   isactive: true,
//   accbal: 5000,
// };

// function login() {
//   let accnum = parseInt(prompt("Hello enter your account number"));

//   if (accnum == account.accnum) {
//     alert("Welcome to Kin Bank😎");

//     if (account.isactive == true) {
//       alert("your account is active");
//       let pin = parseInt(prompt("enter your pin"));

//       if (pin == account.accpin) {
//         alert(`Welcome Mr ${account.name}`);
//         alert(`Your account bal is ${account.accbal}`);
//       } else {
//         alert("incorrect pin");
//       }
//     } else {
//       alert("inactive account");
//     }
//   } else {
//     alert("Please Enter Your Account Number");
//   }
// }
// ///////////////////for loop//////////////////////////////

// let i = 0;
// for (i; i < 7; i += 1) {
//   console.log(i);
// }

// let socialApp = ["twitter", "facebook", "2go", "whats app"];
// // console.log(socialApp[3]);

// for (let i = 0; i < socialApp.length; i++) {
//   console.log(socialApp[i]);
// }

// for loop function
// function socialAppLooper(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// socialAppLooper(socialApp);

// looking for something in the array

// function socialAppLooper(arr, type) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === type) {
//       console.log(arr[i] + " " + "is at position:" + i);
//     }
//   }
// }
// socialAppLooper(socialApp, "facebook");

// for (let i = 1; i < 30; i++) {
//   if (i % 3 === 0) {
//     console.log("kinplus javascript class");
//   } else if (i % 7 === 0) {
//     console.log("How Loop Works");
//   } else {
//     console.log(i);
//   }
// };

// comparison operator
// for (let i = 1; i < 30; i++) {
//   if (i % 3 === 0 && i % 7 === 0) {
//     console.log("kinplus Javascript");
//   } else if (i % 3 === 0) {
//     console.log("first expression");
//   } else if (i % 7 === 0) {
//     console.log("Second expression");
//   } else {
//     console.log(i);
//   }
// };

// break out of the loop
// for (let i = 1; i < 30; i++) {
//   if (i % 20 === 0) {
//     break;
//   } else if (i % 3 === 0) {
//     console.log("first expression");
//   } else if (i % 7 === 0) {
//     console.log("Second expression");
//   } else {
//     console.log(i);
//   }
// };

// continue out of the loop
// for (let i = 1; i < 30; i++) {
//   if (i % 20 === 0) {
//     continue;
//   } else if (i % 3 === 0) {
//     console.log("first expression");
//   } else if (i % 7 === 0) {
//     console.log("Second expression");
//   } else {
//     console.log(i);
//   }
// }

// while looop with break and continue
// let x = 0;
// while (x < 20) {
//   x++;
//   if (x === 5) {
//     console.log("it has been skipped");
//     break;
//   }
//   console.log(x);
// };

// let x = 0;
// while (x < 20) {
//   x++;
//   if (x === 5) {
//     console.log("skipped");
//     continue;
//   }
//   console.log(x + "not skipped");
// };

// nexted loop is controled by labour

// for (let i = 0; i < 10; i++) {
//   console.log("loop" + i);
//   for (let a = 0; a < 7; a++) {
//     console.log("inner" + a);
//   }
// };

// to break out of the loop
// outerLoop: for (let i = 0; i < 10; i++) {
//   console.log("loop" + i);
//   innerLoop: for (let a = 0; a < 7; a++) {
//     console.log("inner" + a);
//     if (a > 4) {
//       break outerLoop;
//     }
//   }
// }

// Loop (Iteration)
// for loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let sumNumber = 0;
// for (let i = 0; i < 10; i++) {
//   sumNumber += i;
//   console.log(i, sumNumber);
// }
// console.log(sumNumber);

// Using function to get Even and Odd Number
// function evenNumber2() {
//   let evenNumber = 0;
//   let n = parseInt(prompt("Input Here"));
//   for (let i = 0; i < n; i += 2) {
//     evenNumber += i;
//     console.log(evenNumber);
//   }
// }
// evenNumber2();

// function oddNumber2() {
//   let oddNumber = 0;
//   let n = parseInt(prompt("Input Here"));
//   for (let i = 0; i < n; i += 1) {
//     oddNumber += i;
//     console.log(oddNumber);
//   }
// }
// oddNumber2();

// function oddNumber2() {
//   let oddNumber = 0;
//   let n = parseInt(prompt("Input Number Here"));
//   for (let i = 0; i < n; i += 1) {
//     if (i % 2 == 0) {
//       oddNumber += i;
//       console.log(i, oddNumber);
//     }
//   }
// }
// oddNumber2();

// let sum = 0;
// for (let i = 0; i <= 10; i += 5) {
//   sum += i
//   console.log(i, sum)
// };

// To get and Odd
// 5

// // To get and Even
// let sum2 = 0;
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     sum2 += i;
//     console.log(i, sum2);
//   }
// }

// write a function that takes even number or odd number and print the sum of even and odd number from 0 - n number

// given two number jump and distance, how many jump can it jump before destination

// Break
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i
//   console.log(i, sum)
//   if (sum > 30) {
//     break;
//   }
// }

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   sum += i
//   console.log(i, sum)
// }

// while loop
// let sum = 0;
// let i = 0
// while (i <= 10) {
//   sum += i
//   console.log(i, sum)
//   i++
// };
// console.log(sum);

// let sum = 0;
// let i = 0
// while (i <= 10) {
//   sum += i
//   console.log(i, sum)
//   i += 5
// };

// let sum = 0;
// let i = 0
// while (i <= 10) {
//   if (i % 2 == 1) {
//     sum += i
//     console.log(i, sum)
//   }
//   i++
// };

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

// let x = 30;
// let y = 80;
// let jump = 10;
// let distance;
// let count = 0;
// for (let i = x; i <= y; i += jump) {
//   count += 1;
// }
// console.log(count);
