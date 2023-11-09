"use strict";

// Example 1
// function logging() {
//   console.log("My name is Oluwafemi");
// }

// logging();

// Example 2
// function fruitProcess(mango, apple) {
//   console.log(mango, apple);
//   const juiceProcess = `Blend ${mango} mangoes with ${apple} apples in a blender`;
//   return juiceProcess;
// }

// fruitProcess(); you will get undefined
// fruitProcess(5, 7);
// const juice = fruitProcess(5, 7);

// console.log(juice);
// console.log(fruitProcess(5, 7));

// Example 3
// function decleration
// function calculateMyAge(birthYear) {
//   return 2022 - birthYear;
// }

// const age = calculateMyAge(1987);

// Example 4
// function expression
// const calculateMyAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calculateMyAge2(1987);

// console.log(age, age2);

// Example 5
// Arrow Function
// const calculateMyAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calculateMyAge3(1987);
// console.log(age3);

// const messageFn = (name) => `Hello ${name}`;
// const message = messageFn("Ada");

// console.log(message);

let a = 5;
let b = 7;

function add(a, b) {
  return a + b;
}

const addUp = add(a, b);
console.log(addUp)

// console.log("Sum:", addUp);

/////////////////////////////////////////
// let month = 6;
// let monthName;

// if (month == 1) {
//   monthName = "Jan";
// } else if (month == 2) {
//   monthName = "Feb";
// } else if (month == 3) {
//   monthName = "Mar";
// } else if (month == 4) {
//   monthName = "Apr";
// } else if (month == 5) {
//   monthName = "May";
// } else if (month == 6) {
//   monthName = "Jun";
// } else if (month == 7) {
//   monthName = "Jul";
// } else if (month == 8) {
//   monthName = "Aug";
// } else if (month == 9) {
//   monthName = "Sep";
// } else if (month == 10) {
//   monthName = "Oct";
// } else if (month == 11) {
//   monthName = "Nov";
// } else if (month == 12) {
//   monthName = "Dec";
// } else {
//   monthName = "Invalid month";
// }
// console.log(monthName);

///////////////////////////////
// let weight = 70; // kg
// let height = 1.72; // meter

// // calculate the body mass index (BMI)
// let bmi = weight / (height * height);

// let weightStatus;

// if (bmi < 18.5) {
//   weightStatus = 'Underweight';
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   weightStatus = 'Healthy Weight';
// } else if (bmi >= 25 && bmi <= 29.9) {
//   weightStatus = 'Overweight';
// } else {
//   weightStatus = 'Obesity';
// }

// console.log(weightStatus);

// Example
const btns = document.querySelectorAll(".btn");
const counter = document.querySelector("#cat");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.currentTarget.classList;
    if (style.contains("inc")) {
      count++;
    } else if (style.contains("dec")) {
      count--;
    } else if (style.contains("res")) {
      count = 0;
    }
    console.log(btn);

    counter.textContent = count;
  });
});

////////////////////////////////////
// Function and Parameter

// function birthYear(myAge) {
//   return 2022 - myAge;
// }

// let birthDay = birthYear(1999);

// console.log("My Age Is:", birthDay);

// function transferRef(alias) {
//   let generatedNum = Math.floor(Math.random() * 3000000);

//   let ref = `${alias}${generatedNum}`;
//   console.log(ref);
// }

// transferRef("215");
