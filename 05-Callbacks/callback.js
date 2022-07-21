"use strict";
/*
Its a function that is pass to another function as a parameter.
- this inner function is called at some point during the execution of the containing function
- Callback at some specified point inside the containing function's body is called when the function is executed
- Callback usually waits before syncronizing
*/
// Example 1
function shouldGoFirst(Callback) {
  setTimeout(() => {
    console.log("I should go first");
    Callback();
  }, 1000);
}

function shouldGSecond() {
  console.log("I should go second");
}

// shouldGoFirst(shouldGSecond);

// Example 2
function sumUpNums(num1, num2, cb) {
  let sumValue;
  setTimeout(() => {
    sumValue = num1 + num2;
    cb(sumValue);
  }, 2000);
}

function logSumValue(val) {
  console.log(`Total number is: ${val}`);
}

// sumUpNums(10, 50, logSumValue);

// Example 3
// // Callback function
// function whenDone() {
//   console.log("Done :D");
// }

// // Parent Function
// function looper(number, cb) {
//   for (let i = 0; i < number; i += 1) {
//     console.log(i);
//   }
//   cb();
// }

// looper(5, whenDone);

// Example 4
// Callback function
function whenDone(loopCount) {
  console.log(`Done :D. Capitalized first letter of  ${loopCount} names`);
}

// Parent Function
function looper(arr, cb) {
  let i = 0;
  for (i; i < arr.length; i += 1) {
    const firstLetter = arr[i];
    const capitalizeName =
      firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
    arr[i] = capitalizeName;
  }
  cb(i);
}

const myNames = ["zion", "josh", "chris", "angela", "esther", "bright"];
// looper(myNames, whenDone);
// console.log(myNames);

// Example 5
// function anotherLogger(num1, num2, somethingElse) {
//   const sqAndSumNums = num1 * num2 + num2 * num2;
//   console.log(sqAndSumNums);
//   if (somethingElse && typeof somethingElse === "function") {
//     somethingElse();
//   } else {
//     console.log("I'm not a function");
//   }
// }

// anotherLogger(5, 10, () => {
//   console.log("Hey!");
// });

// Example 6
function anotherLogger(num1, num2, somethingElse) {
  const sqAndSumNums = num1 * num2 + num2 * num2;
  console.log(sqAndSumNums);
  if (somethingElse && typeof somethingElse === "function") {
    somethingElse(sqAndSumNums);
  } else {
    console.log("I'm not a function");
  }
}

// anotherLogger(5, 10, (p) => {
//   console.log(`Squared and summed = ${p}`);
// });

// Example 7
const myDiv = document.getElementById("main");
const myButton = document.querySelector(".btn");
const fakeData = {
  firstText:
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur distinctio dicta aspernatur earum, error,   facere saepe iure blanditiis vero inventore libero? Earum itaque ipsa corrupti quasi illo assumenda reprehenderit.",
};

myButton.addEventListener("click", () => {
  console.log("clicked");
  requestData(populateDOM);
});

function requestData(cb) {
  // Fake Server request and response
  setTimeout(() => {
    // Response from server
    const data = fakeData.firstText;
    cb(data);
  }, 1000);
}

function populateDOM(data) {
  myDiv.innerHTML += `<p>${data}</p>`;
}

// Example 7
const content = document.getElementById("content");
const readMoreBtn = document.getElementById("readMoreBtn");
const newsFeed = {
  news: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur distinctio dicta aspernatur earum",
};

const myPara = document.getElementById("secondContent");

readMoreBtn.addEventListener("click", () => {
  fetchData(showDOM);
});

function fetchData(cb) {
  let archive = "Loading...";
  cb(archive);
  setTimeout(() => {
    archive = newsFeed.news;
    cb(archive);
  }, 2000);
}

function showDOM(archive) {
  myPara.innerText = archive;
}

// Example 8
// here we are having four callback in a function

function counter() {
  setTimeout(() => {
    console.log("First");
    setTimeout(() => {
      console.log("Second");
      setTimeout(() => {
        console.log("Third");
        setTimeout(() => {
          console.log("Fourth");
        }, 400);
      }, 600);
    }, 800);
  }, 1000);
}

// counter();

// Example 9
function numCrunch1(num, cb) {
  const newNum = num * num;
  cb(newNum);
}

function numCrunch2(num, cb) {
  const secondNewNum = num / 100;
  cb(secondNewNum);
}

function totalSum(a, b, cb) {
  cb(a + b);
}

function crunchNumbers(a, b, cb1, cb2, cb3) {
  cb1(a, function (x) {
    cb2(b, function (y) {
      cb3(x, y, function (result) {
        console.log(result);
      });
    });
  });
}

// crunchNumbers(5, 10, numCrunch1, numCrunch2, totalSum);

// Promises
/*
- promise is a proxy for a value not necesasarily known when the promise is created
- Promises (similar to callbacks) are used for async computations
- Promises representing a value that can be available now, later or never
*/
