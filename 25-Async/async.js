"use strict";

// Example 1
boilWater(20000);

function boilWater(time) {
  console.log(`Boiling Jollof Rice....`);
  setTimeout(() => {
    console.log(`Add Ingredents`);
    setTimeout(() => {
      console.log(`Add Proteins and  Vegetable Oil`);
      setTimeout(() => {
        console.log(`Add Salt`);
        setTimeout(() => {
          console.log(`Add Onion`);
        }, 500);
      }, 800);
    }, 1000);
  }, 600);
  setTimeout(() => {
    console.log(`Rice Done!`);
  }, time);
}

// Example 2
const colorA = document.querySelector(".one");
const colorB = document.querySelector(".two");
const colorC = document.querySelector(".three");
const btn = document.querySelector(".btn");

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`Not an element ${element}`);
    }
  });
}

async function displayColor() {
  try {
    const first = await addColor(1000, colorA, "red");
    await addColor(1000, colorB, "green");
    await addColor(2000, colorC, "blue");
  } catch (error) {
    console.log(error);
  }
  return `Hello World`;
}

btn.addEventListener("click", async () => {
  const result = await displayColor();
  return result;
});
