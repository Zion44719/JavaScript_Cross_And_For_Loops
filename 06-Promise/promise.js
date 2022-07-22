"use strict";

// Promises
/*
- promise is a proxy for a value not necesasarily known when the promise is created
- Promises (similar to callbacks) are used for async computations
- Promises representing a value that can be available now, later or never
- can associate a handler with an async action
------Promise Exist in three state-------
- Pending: initial state, not fulfilled
- Fulfilled: OK! Got it
- Rejected: failed
*/

// Example 1.
// const testPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise OK!");
//   }, 1000);
// });

// testPromise
//   .then((resolveMessage) => {
//     console.log(`Everything looks like: ${resolveMessage}`);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("I should run after the promise is resolved");
//     }, 2000);
//   });

// Example 2
// Using reject
// const testPromise = new Promise((resolve, reject) => {
//   // console.log(Math.random());
//   if (Math.random() > 0.5) {
//     reject("Promise not good! Rejected");
//   }
//   setTimeout(() => {
//     resolve("promise OK!");
//   }, 1000);
// });

// testPromise
//   .then((resolveMessage) => {
//     console.log(`Everything looks like: ${resolveMessage}`);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("I should run after the promise is resolved");
//     }, 1200);
//   })
//   .catch((rejectMessage) => {
//     console.log(`Error:${rejectMessage}`);
//   });

//
////////////////* Example 3 *///////////////////
// function numAdder(n1, n2) {
//   return new Promise((resolve, reject) => {
//     const addedNum = n1 + n2;
//     setTimeout(() => {
//       resolve(addedNum);
//     }, 400);
//   });
// }

// numAdder(50, 100).then((data) => {
//   console.log(data);
// });

// Example 3b
// function testData(num3, num4) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num3 + num4);
//     });
//   });
// }

// testData(10, 60).then((res) => {
//   console.log(res);
// });

// Example 4
// Multiple Promise function chained together
// function numAdder(n1, n2) {
//   return new Promise((resolve, reject) => {
//     const addedNum = n1 + n2;
//     setTimeout(() => {
//       resolve(addedNum);
//     }, 400);
//   });
// }

// function numSquarer(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num);
//     }, 800);
//   });
// }

// numAdder(2, 5)
//   .then((data) => {
//     return numSquarer(data);
//   })
//   .then((result) => {
//     console.log(result);
//   });

// Example 5
function numAdder(n1, n2) {
  return new Promise((resolve, reject) => {
    const addedNum = n1 + n2;
    setTimeout(() => {
      resolve(addedNum);
    }, 400);
  });
}

function numSquarer(num) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      reject("Rejected this time");
    }
    setTimeout(() => {
      resolve(num * num);
    }, 800);
  });
}

// numAdder(2, 5)
//   .then((data) => numSquarer(data))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Example 6
// if you want to resolve without rejecting

function alwaysResolves() {
  return Promise.resolve("This will always resolve :D");
}

// alwaysResolves().then((data) => console.log(data));

// Example 7
// various types of object in a resolve statement
const prom = Promise.resolve([10, 20, 30]);
prom
  // .then((nums) => nums.map((num) => num.toLocaleString()))
  // Or
  .then((nums) => nums.map((num) => num * 5));
// .then((resultNums) => console.log(resultNums));

// Example 8
// const anotherProm = Promise.resolve({ text: "Zionhilt" });
// anotherProm.then((dataResult) => console.log(dataResult.text));

/////////////
// Promise.reject()
//   .then(() => console.log("Ok"))
//   .catch(() => console.log("caught rejected promise"));

//////////////
// Promise.resolve().then(
//   (res) => {
//     console.log("rejected promise");
//   },
//   (error) => {
//     console.log("Rejected");
//   }
// );

////////////////
// Promise.resolve()
//   .then(
//     (res) => {
//       return Promise.reject("Inner promise rejected");
//     },
//     (error) => {
//       console.log("Rejected");
//     }
//   )
//   .catch((data) => console.log(data));

// Example 9
// function timeLog(message, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(message);
//     }, time);
//     if (typeof message !== "string" || typeof time !== "number") {
//       reject();
//     }
//   });
// }

/*
timeLog("first", "1000")
  .then((message) => console.log(message))
  .catch((err) => console.log("Incorrect Input"));
*/

// timeLog("first", 1000)
//   .then((message) => {
//     console.log(message);
//     return timeLog("second", 800);
//   })
//   .then((message) => {
//     console.log(message);
//     return timeLog("third", 600);
//   })
//   .then((message) => {
//     console.log(message);
//     return timeLog("fourth", 400);
//   })
//   .then((message) => {
//     console.log(message);
//     return timeLog("fifth", 200);
//   })
//   .then((message) => console.log(message))
//   .catch((err) => console.log("Incorrect Input"));

// Example 10
// Promise.resolve("Hi")
//   .then((string) => {
//     return string + "There";
//   })
//   .then((string) => {
//     console.log(string);
//   });

//////////////////////////////////
// return in the is eeffective same as saying return Promise.resolve
// Promise.resolve("Hi")
//   .then((string) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(string + " There");
//       }, 1);
//     });
//   })
//   .then((string) => {
//     return new Promise((resolve, reject) => {
//       resolve(string + " Joshua");
//     }, 1);
//   })
//   .then((string) => {
//     console.log(string);
//   });

// Promise.all
// Example 11
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

// Example 11b.
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("A");
//   }, 2000);
// });
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

// Example 11c
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("A");
//   }, 2000);
// });
// const p2 = Promise.resolve("B");
// const p3 = Promise.reject("rejection");

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Example 11d
// const userName = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ text: "Zion Joshua" });
//   }, 2000);
// });
// const position = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ text: "manager" });
//   }, 300);
// });

// Promise.all([userName, position])
//   .then((data) => data.map((entry) => entry.text))
//   .then((content) => console.log(content))
//   .catch((err) => {
//     console.log(err);
//   });

// Example 11e
// Promise.race takes the one that finish first

// const userName = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ text: "Zion Joshua" });
//   }, 2000);
// });
// const position = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ text: "manager" });
//   }, 300);
// });

// Promise.race([userName, position])
//   .then((data) => console.log(data.text));

// Example 11f
// Promise.race with reject
const userName = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ text: "Error" });
  }, 200);
});
const position = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ text: "manager" });
  }, 300);
});

Promise.race([userName, position])
  .then((data) => console.log(data.text))
  .catch((err) => console.log(err.text));
