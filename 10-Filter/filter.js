"use strict";
// Example 1.
let cityPopulation = [
  { cityName: "New York", population: 2345678 },
  { cityName: "London", population: 4567000 },
  { cityName: "Paris", population: 5000000 },
  { cityName: "Mexico", population: 600000 },
  { cityName: "Rio de Janeiro", population: 3000000 },
  { cityName: "San Francisco", population: 5000000 },
];

// pushing the output / result into a new array
// let newCity = []; /*New Array*/
// for (let i = 0; i < cityPopulation.length; i++) {
//   if (cityPopulation[i].population > 4000000) {
//     console.log(newCity.push(cityPopulation[i].cityName));
//   }
// }
// console.log(newCity);

// Using ES6 syntax and display in the DOM
const outP = document.querySelector("#outP");
let newCity2 = cityPopulation.filter((e) => e.population > 3000000);
outP.innerHTML = JSON.stringify(newCity2);
console.log(newCity2);

// Examples 2.
function foodFilterArray(arr, search) {
  return arr.filter((t) => t === search);
}

const [resultOutPut] = foodFilterArray(
  ["fish", "chicken", "tofu", "titus"],
  "fish"
);
// console.log(resultOutPut);
