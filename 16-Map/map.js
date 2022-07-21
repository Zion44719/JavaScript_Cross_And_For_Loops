"use strict";

let cityPopulation = [
  { cityName: "New York", population: 2345678 },
  { cityName: "London", population: 4567000 },
  { cityName: "Paris", population: 5000000 },
  { cityName: "Mexico", population: 600000 },
  { cityName: "Rio de Janeiro", population: 3000000 },
  { cityName: "San Francisco", population: 5000000 },
];

cityPopulation.map((e) => {
  console.log(e.cityName + ":" + e.population);
});
