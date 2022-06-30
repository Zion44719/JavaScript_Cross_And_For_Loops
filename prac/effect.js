"use strict";

// let input = document.querySelector("#username");
// console.log(input.secured); // undefined

let input = document.querySelector("#username");

for (let attr of input.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
}
