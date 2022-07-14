"use strict";

// let input = document.querySelector("#username");
// console.log(input.secured); // undefined

let input = document.querySelector("#username");

for (let attr of input.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
}

// Key Code
document.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
});

document.addEventListener("keyup", (e) => {
  console.log(e.keyCode);
});
