"use strict";

/*
Destructuring is an assignment syntax is a JavaScript expression that makes it possible to extract data or object into distinct variables

Desstructuring syntax can be used in the left-hand side of assignments
*/

// Array Destructuring
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const firstNum = myArray[0];
const [p, x, y, z] = myArray;
// console.log(firstNum);
// console.log(p);

const secondArray = ["Jan", "Feb", "Mar", "Apr"];
let month1, month2, month3;
[month1, month2, month3] = secondArray;

// console.log(month1, month2, month3);

// Swapping
let aa = 100;
let bb = 300;
let cc = 500;
let temp = cc;
// console.log(aa, bb, cc);
cc = bb;
bb = temp;
// console.log(aa, bb, cc);

// Swapping with destructuring
let aaa = 100;
let bbb = 300;
let ccc = 500;
// console.log(aaa, bbb, ccc);
[bbb, ccc] = [ccc, bbb];
// console.log(aaa, bbb, ccc);

// Destructuring Array with function
// function returnArray() {
//   return ["buns", "chin chin", "bread buns", "egg roll"];
// }
// console.log(returnArray());

// Function Filtering Array
function foodFilterArray(arr, search) {
  return arr.filter((t) => t === search);
}

const [resultOutPut] = foodFilterArray(
  ["fish", "chicken", "tofu", "titus"],
  "fish"
);
// console.log(resultOutPut);

// reuse the function
const [resultOutPut2] = foodFilterArray(
  ["cookies", "cake", "chocolate", "chesse"],
  "cake"
);
// console.log(resultOutPut2);

// can ignore/skipped some values
const anotheArr = [20, 30, 40, 150, 60, 100, 10];

const [numA, numB, , numC, numD] = anotheArr;
// console.log(`first: ${numA}, second: ${numB}, third: ${numC}, fourth: ${numD}`);

//  how to use rest pattern
function sayHello(firstArg, ...restOfArgs) {
  //   console.log(firstArg, restOfArgs);
}

sayHello("Zionhilt", 30, "123 Fake St", 51, false);

const animalArr = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
const [dogStrings, catsStrings, ...otherAnimals] = animalArr;

// console.log(dogStrings); /* print the first index*/
// console.log(catsStrings); /* print the second index*/
// console.log(otherAnimals); /* print the rest*/

// Object destructurig
const myObj = {
  firstName: "Zion",
  secondName: "Bright",
  lastName: "Oluwafemi",
  age: ["4yrs", "1yr"],
  height: "2ft",
};

// const { firstName, secondName, age, height } = myObj;
// console.log(firstName, " and ", secondName, "Our age is", age, height);

// creating data before assigning it
let myValue1, myValue2;
const myObj2 = { myValue1: "a", myValue2: "b" };
({ myValue1, myValue2 } = myObj2);
// console.log(myValue1, myValue2);

// assigning new variable names
const myObj3 = { uuid: 32684859, userName: "Zion", loggedIn: new Date() };
const { uuid: userID, userName: nameP, loggedIn: lastLoginDate } = myObj3;

// console.log(userID, nameP, lastLoginDate.toLocaleString());

// assigning using function
// function londonUser({ user = "Joshua", memberType = "Premium" }) {
//   console.log(`Username: ${user}, membership type: ${memberType}`);
// }
// londonUser({ user: "Zion" });

function londonUser2(obj) {
  const { user = null, memberType = "Premium" } = obj;
  if (!user) {
    console.log(alert("Error! No user name entered >:( "));
  } else {
    console.log(`Username: ${user}, Membership Type: ${memberType}`);
  }
}
const member1 = { user: "Bright", memebrType: "Premium" };
const member2 = { memeberType: "free" };
// londonUser2(member1);

// snap out your something in the arguement
// function sayIfValid({ prop: s, term: q }) {
//   console.log(s, q);
// }

// const myObj6 = {
//   prop: "I am valid",
//   proop: "I am not valid",
//   term: "I am also not",
// };

// sayIfValid(myObj6);

// Object Literaly Destructure
function sayIfValid({ prop, term }) {
  const internalObj = {
    prop,
    term,
    constructed: true,
  };
  return internalObj;
}

const myObj6 = {
  prop: "I am valid",
  proop: "I am not valid",
  term: "I am also not",
};

// console.log(sayIfValid(myObj6));

// Nested Object
const myObj7 = {
  title1: "My address book",
  entries: [
    {
      firstName: "Zion",
      phoneNumber: "3268-4859",
      homeAddress: "123 Main St",
    },
  ],
  myPhone: "555-1234",
};
// To grab something out of the nested object
const {
  title1,
  entries: [{ firstName: accessKey, homeAddress }],
} = myObj7;

// console.log(accessKey, homeAddress);

const myObj8 = {
  myProp1: "Testing Destructuring!",
  myProp2: [35, 37],
};

const {
  myProp1,
  myProp2: [ay, az],
} = myObj8;

console.log(ay, az);

// Another Example of destructuring a property and loop through
const myObj9 = {
  title2: "My address book",
  cityEntries: [
    {
      city: "New York",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York",
    },
    {
      city: "Los Angeles",
      latitude: 34.0522342,
      longitude: -118.2436849,
      population: "3884307",
      rank: "2",
      state: "California",
    },
    {
      city: "Chicago",
      latitude: 41.8781136,
      longitude: -87.6297982,
      population: "2718782",
      rank: "3",
      state: "Illinois",
    },
    {
      city: "Houston",
      latitude: 29.7604267,
      longitude: -95.3698028,
      population: "2195914",
      rank: "4",
      state: "Texas",
    },
  ],
  myPhone: "555-1234",
};

const { title2, cityEntries } = myObj9;

// Using for loop

// for (const { city, population } of cityEntries) {
//   console.log(`${city} city, has ${population} population`);
// }

// Or
// this still runs and work perfectly
// for (const { city: anotherKey, population: key2 } of cityEntries) {
//   console.log(`${anotherKey} city, has ${key2} population`);
// }

// Example having object within the nested object
const myObj10 = {
  titleC: "My address book",
  cityEntriesC: [
    {
      city: "New York",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York",
      other: {
        cellPhone: "6190-0190",
        emailAddress: "zionctech@gmail.com",
      },
    },
    {
      city: "Los Angeles",
      latitude: 34.0522342,
      longitude: -118.2436849,
      population: "3884307",
      rank: "2",
      state: "California",
      other: {
        cellPhone: null,
        emailAddress: "josther@gmail.com",
      },
    },
    {
      city: "Chicago",
      latitude: 41.8781136,
      longitude: -87.6297982,
      population: "2718782",
      rank: "3",
      state: "Illinois",
      other: {
        cellPhone: "3805-9491",
        emailAddress: null,
      },
    },
  ],
  myPhone: "555-1234",
};

const { titleC, cityEntriesC } = myObj10;

// Using for loop

for (const {
  city: key1,
  population: key2,
  other: { cellPhone, emailAddress },
} of cityEntriesC) {
  console.log(
    `${key1} city, has ${key2} population ${cellPhone} ${emailAddress}`
  );
}
