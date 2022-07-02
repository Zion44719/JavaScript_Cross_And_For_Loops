"use strict";

// Array methods

// let kinplusClass = ["class", "book", "pen"];
// let kinplusClass2 = ["book", "class", "biro"];

// kinplusClass[3] = "key";
// // kinplusClass[3];
// kinplusClass.push("key1", "key2", 4);
// // console.log(kinplusClass2);
// kinplusClass.pop();
// kinplusClass.shift();
// kinplusClass.unshift("book");
// console.log(kinplusClass);

// const friends = ["john", "peter", "bob", "susy", 45, undefined, null];

// friends.push("blessing");
// friends.pop();
// friends.unshift("blessing");
// friends.shift("blessing");
// console.log(friends);
// console.log(friends[3]);

// let students = [];
// students.push("kinplus", "bulb");
// students.unshift("classroom");
// console.log(students);

// students.push("tope", "blessing");
// students.length;

// console.log(students[1]);

// Array and Object

// const shopCart = [
//   {
//     product: "jeep",
//     price: 300,
//     rating: 3,
//   },
//   {
//     product: "volvo",
//     price: 400,
//     rating: 2,
//   },
//   {
//     product: "benz",
//     price: 700,
//     rating: 4,
//   },
//   {
//     product: "toyota",
//     price: 200,
//     rating: 6,
//   },
// ];

// console.log(shopCart[3].product);

// let step1 = Math.random();

// let step2 = step1 * 10;

// let step3 = Math.floor(step2);

// let step4 = step3 + 1;

// Math.floor(Math.random() * 10) + 1;

// console.log(step4);

// Array

// let animalNames = [
//   ["dog", "duck", "goat"],
//   ["fish", "fishes", "beef"],
// ];

// // animalNames.length;

// console.log(animalNames[0][2]);
// console.log(animalNames[1]);

//let kinplusClass = ["class", "book", "pen"];

// kinplusClass[2] = "light";
//kinplusClass.push("cloth");
//kinplusClass2.push("pillow");
//kinplusClass.pop("pen");

// kinplusClass.shift("class");

// // console.log(kinplusClass2);
//console.log(kinplusClass);

// Using Shift and Unshift to add and remove from an array

// let classList2 = ["table", "chair", "pen", "laptops"];

// classList2.shift();
// classList2.unshift("keys");
// console.log(classList2[2]);
// console.log(classList2);

// Class Work

//1.  declare a varibale and add to the array using push(), unshift()
// 2. declare another variable and remove from the array using pop() and shift()

// let workBook = [];

// workBook.push("laptop", 3, "brown");

// console.log(workBook);

//////////////////21/06/2022////////////
// Generatinmg a randon number
// let key1 = Math.random();
// let key2 = key1 * 10;
// let key3 = Math.floor(key2);
// console.log(key3);

// or
// let key = Math.floor(Math.random() * 10);
// console.log(key);

// let classWork = {};

// let classWork2 = [
//   ["key1", "key2", "key3", true, 4, "key4"],
//   ["charger1", "charger2", "charger3"],
// ];
// let classWork4 = classWork2[0];

// console.log(classWork2[1][0]);

// let classWork3 = ["book1", "book2", "book3"];
// classWork3[3] = "board";

// console.log(classWork3);

// let kin = [
//   [4, 6, 7],
//   ["keep", "up", "start"],
//   ["key1", "key2", "key3"],
//   ["boy1", "boy2"],
// ];

// key2 = delete kin[2][1];
// kinRem = kin[2];

// console.log(kin[2].slice(0, 2));
// console.log(kin[2].slice(1, 3));
// console.log(kin[2].slice(-2));
// console.log(kin[2].slice(1, -1));
// console.log(kin);

// spread operator
// console.log([...kin]);
// Assignment

// 1. remove an element from an array

// let keep = ["keep", "up", "start", "key", "key2"];

// console.log(keep.splice(2));
// keep.splice(1, 2);
// console.log(keep);

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var filtered = array.filter(function (value, index, arr) {
//   return value > 3;
// });
// console.log(filtered);
