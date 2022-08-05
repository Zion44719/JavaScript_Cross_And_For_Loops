"use strict";
// fetch API is basically get request and get data back
// it returns a promise
// API allows applications to access data and interact with external software components, operating systems, or microservices.

// Example 1
// fetch("https://swapi.dev/api/films/1/")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Example 2
// fetch("https://swapi.dev/api/films/1/")
//   .then((data) => data.json())
//   .then((d) => console.log(d))
//   .catch((err) => {
//     console.log(err);
//   });

//Example 2a
/* if you misspell the error will fire immediately */
// fetch("https://swapi.dev/api/films/1/")
//   .then((data) => data.json())
//   .then((d) => console.log(d))
//   .catch((err) => {
//     console.log(err.message);
//   });

//Example 3
// To interact with the DOM, addEventListener

// const myDiv = document.getElementById("films");
// const myButton = document.querySelector(".btn");

// myButton.addEventListener("click", getFilms);

// function getFilms() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   fetch(`https://swapi.dev/api/films/${randomNum}/`)
//     .then((data) => data.json())
//     .then((d) => populateFilm(d))
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// function populateFilm(filmObj) {
//   const newPara = document.createElement("p");
//   newPara.innerText = filmObj.title;
//   myDiv.appendChild(newPara);
// }

//Example 4
// const myDiv = document.getElementById("films");
// const myButton = document.querySelector(".btn");

// myButton.addEventListener("click", getFilms);

// function getFilms() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   fetch(`https://swapi.dev/api/films/${randomNum}/`)
//     .then((data) => data.json())
//     .then((d) => populateFilm(d))
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// function populateFilm(filmObj) {
//   const { title, director, producer } = filmObj;
//   const filmDiv = `
//   <div>
//   <h1>${title}</h1>
//   <p>
//   ${title} was directed by ${director} and the producer is ${producer}
//   </p>
//   </div>
//   `;
//   myDiv.innerHTML += filmDiv;
// }

// Example 5
// This Example is just to show other films

// const myDiv = document.getElementById("films");
// const myButton = document.querySelector(".btn");

// myButton.addEventListener("click", getFilms);

// function getFilms() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   fetch(`https://swapi.dev/api/films/${randomNum}/`)
//     .then((data) => data.json())
//     .then((d) => populateFilm(d))
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// function populateFilm(filmObj) {
//   const { title, director, producer } = filmObj;
//   const myFilmDiv = document.createElement("div");
//   const filmDiv = `
//   <h1>${title}</h1>
//   <p>
//   ${title} was directed by ${director} and the producer is ${producer}
//   </p>
//   `;
//   myFilmDiv.innerHTML += filmDiv;
//   myDiv.appendChild(myFilmDiv);
// }

// Example 6

// const myDiv = document.getElementById("films");
// const myButton = document.querySelector(".btn");

// myButton.addEventListener("click", getFilms);

// function getFilms() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   fetch(`https://swapi.dev/api/planets/${randomNum}/`)
//     .then((data) => data.json())
//     .then((d) => populateFilm(d))
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// function populateFilm(filmObj) {
//   const { name, climate, terrain, population, orbital_period } = filmObj;
//   const filmDiv = `
//  <div>
//  <h1>${name}</h1>
//  <p>
//  ${name} has a climate that is: ${climate}. The terrain is ${terrain}, with a Population of ${population}. The orbital period is ${orbital_period} days.
//  </p>
//  </div>
//   `;
//   //   myDiv.insertAdjacentHTML("beforeend", filmDiv);
//   //   myDiv.insertAdjacentHTML("afterbegin", filmDiv);
//   //   myDiv.insertAdjacentHTML("beforebegin", filmDiv);
//   myDiv.insertAdjacentHTML("afterend", filmDiv);
//   console.log(filmObj);
// }

// Example 7
// To transform long number into comma's

// const myDiv = document.getElementById("films");
// const myButton = document.querySelector(".btn");

// myButton.addEventListener("click", getFilms);

// function getFilms() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   fetch(`https://swapi.dev/api/planets/${randomNum}/`)
//     .then((data) => data.json())
//     .then((d) => populateFilm(d))
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// function populateFilm(filmObj) {
//   const { name, climate, terrain, population, orbital_period } = filmObj;
//   let pop;
//     if (population === "unknown") {
//       pop = population;
//     } else {
//       pop = parseInt(population).toLocaleString();
//     }
//   const filmDiv = `
//   <div>
//   <h1>${name}</h1>
//   <p>
//   ${name} has a climate that is: ${climate}. The terrain is ${terrain}, with a Population of ${pop}. The orbital period is ${orbital_period} days.
//   </p>
//   </div>
//   `;

//   myDiv.insertAdjacentHTML("beforeend", filmDiv);
//   console.log(filmObj);
// }

// Example 9
// Using teneray operator and interpolate between the backtick

// const myDiv = document.getElementById("films");
// const myButton = document.querySelector(".btn");

// myButton.addEventListener("click", getFilms);

// function getFilms() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   fetch(`https://swapi.dev/api/planets/${randomNum}/`)
//     .then((data) => data.json())
//     .then((d) => populateFilm(d))
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// function populateFilm(filmObj) {
//   const { name, climate, terrain, population, orbital_period } = filmObj;

//   const filmDiv = `
//  <div>
//  <h1>${name}</h1>
//  <p>
//  ${name} has a climate that is: ${climate}. The terrain is ${terrain}, with a Population of ${
//     population === "unknown"
//       ? population
//       : parseInt(population).toLocaleString()
//   }. The orbital period is ${orbital_period} days.
//  </p>
//  </div>
//   `;

//   myDiv.insertAdjacentHTML("beforeend", filmDiv);
//   console.log(filmObj);
// }

// Example 10
// Accessing (another url or page 2) inside our promise response using RegExp

// const myDiv = document.getElementById("films");
// const myButton = document.querySelector(".btn");
// const mySecondButton = document.getElementById("otherButton");

// myButton.addEventListener("click", getFilms);
// mySecondButton.addEventListener("click", getPlanets);

// function getPlanets() {
//   fetch(`https://swapi.dev/api/planets/`)
//     .then((data) => data.json())
//     .then((planets) => {
//       const { next } = planets;
//       const newURL = next.replace(/^https:\/\//i, "https://");
//       return fetch(newURL);
//     })
//     .then((morePlanets) => console.log(morePlanets));
// }

// function getFilms() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   fetch(`https://swapi.dev/api/planets/${randomNum}/`)
//     .then((data) => data.json())
//     .then((d) => populateFilm(d))
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// function populateFilm(filmObj) {
//   const { name, climate, terrain, population, orbital_period } = filmObj;

//   const filmDiv = `
//  <div>
//  <h1>${name}</h1>
//  <p>
//  ${name} has a climate that is: ${climate}. The terrain is ${terrain}, with a Population of ${
//     population === "unknown"
//       ? population
//       : parseInt(population).toLocaleString()
//   }. The orbital period is ${orbital_period} days.
//  </p>
//  </div>
//   `;

//   myDiv.insertAdjacentHTML("beforeend", filmDiv);
//   console.log(filmObj);
// }

// Example 11
// To loop over the API using for of

// const myDiv = document.getElementById("films");
// const mySecondButton = document.getElementById("otherButton");

// mySecondButton.addEventListener("click", getPlanets);

// function getPlanets() {
//   fetch(`https://swapi.dev/api/planets/`)
//     .then((data) => data.json())
//     .then((planets) => {
//       processingPlanets(planets.results);
//     });
// }
// // function to loop over the array

// function processingPlanets(planetsArray) {
//   console.log(planetsArray);
//   for (const prop of planetsArray) {
//     populatePlanets(prop);
//   }
// }

// // Function to show
// function populatePlanets(planetObj) {
//   const { name, climate, terrain, population, orbital_period } = planetObj;

//   const planetDiv = `
//  <div class="planets">
//  <h1>${name}</h1>
//  <p>
//  ${name} has a climate that is: ${climate}. The terrain is ${terrain}, with a Population of ${
//     population === "unknown"
//       ? population
//       : parseInt(population).toLocaleString()
//   }. The orbital period is ${orbital_period} days.
//  </p>
//  </div>
//   `;

//   myDiv.insertAdjacentHTML("beforeend", planetDiv);
// }

// Example 12
// Destructuring and looping to have different id or class or data-id properties
// class=${index}
// id=${index}
// data-id=${index}

// const myDiv = document.getElementById("films");
// const mySecondButton = document.getElementById("otherButton");

// mySecondButton.addEventListener("click", getPlanets);

// function getPlanets() {
//   fetch(`https://swapi.dev/api/planets/`)
//     .then((data) => data.json())
//     .then((planets) => {
//       processingPlanets(planets.results);
//     });
// }
// // function to loop over the array

// function processingPlanets(planetsArray) {
//   console.log(planetsArray);
//   for (const [index, prop] of planetsArray.entries()) {
//     populatePlanets(prop, index);
//   }
// }

// // Function to show
// function populatePlanets(planetObj, index) {
//   const { name, climate, terrain, population, orbital_period } = planetObj;

//   const planetDiv = `
//  <div class="planets" data-id=${index}>
//  <h1>${name}</h1>
//  <p>
//  ${name} has a climate that is: ${climate}. The terrain is ${terrain}, with a Population of ${
//     population === "unknown"
//       ? population
//       : parseInt(population).toLocaleString()
//   }. The orbital period is ${orbital_period} days.
//  </p>
//  </div>
//   `;

//   myDiv.insertAdjacentHTML("beforeend", planetDiv);
// }

// Example 13
// highlight unpopulated planets

// const myDiv = document.getElementById("films");
// const mySecondButton = document.getElementById("otherButton");

// mySecondButton.addEventListener("click", getPlanets);

// function getPlanets() {
//   fetch(`https://swapi.dev/api/planets/`)
//     .then((data) => data.json())
//     .then((planets) => {
//       processingPlanets(planets.results);
//     });
// }
// // function to loop over the array

// function processingPlanets(planetsArray) {
//   console.log(planetsArray);
//   for (const [index, prop] of planetsArray.entries()) {
//     populatePlanets(prop, index);
//   }
// }

// // Function to show
// function populatePlanets(planetObj, index) {
//   const { name, climate, terrain, population, orbital_period } = planetObj;

//   const planetDiv = `
//  <div class="planets" data-id=${index} data-population=${population}>
//  <h1>${name}</h1>
//  <p>
//  ${name} has a climate that is: ${climate}. The terrain is ${terrain}, with a Population of ${
//     population === "unknown"
//       ? population
//       : parseInt(population).toLocaleString()
//   }. The orbital period is ${orbital_period} days.
//  </p>
//  </div>
//   `;

//   myDiv.insertAdjacentHTML("beforeend", planetDiv);
// }

// const highlight = document.getElementById("highlighter");

// highlight.addEventListener("click", showunpopulated);

// function showunpopulated() {
//   const allPlanetDivs = document.querySelectorAll(".planets");
//   for (const prop of allPlanetDivs) {
//     // console.log(prop.dataset.population);
//     if (prop.dataset.population === "unknown") {
//       // prop.style.backgroundColor = "teal";
//       prop.classList.toggle("highlight");
//     }
//   }
// }

// Example 14
// To slide rating
const myDiv = document.getElementById("films");
const mySecondButton = document.getElementById("otherButton");

mySecondButton.addEventListener("click", getPlanets);

function getPlanets() {
  fetch(`https://swapi.dev/api/planets/`)
    .then((data) => data.json())
    .then((planets) => {
      processingPlanets(planets.results);
    });
}
// function to loop over the array

function processingPlanets(planetsArray) {
  console.log(planetsArray);
  for (const [index, prop] of planetsArray.entries()) {
    populatePlanets(prop, index);
  }
}

// Function to show
function populatePlanets(planetObj, index) {
  const { name, climate, terrain, population, orbital_period } = planetObj;
  // Rating between low and high method here
  let pop;
  if (population > 0 && population <= 1000000) {
    pop = "low";
  } else if (population > 1000000 && population < 1000000000) {
    pop = "medium";
  } else if (population > 1000000000) {
    pop = "high";
  } else {
    pop = "unknown";
  }

  const planetDiv = `
 <div class="planets" data-id=${index} data-population=${pop}>
 <h1>${name}</h1>
 <p>
 ${name} has a climate that is: ${climate}. The terrain is ${terrain}, with a Population of ${
    population === "unknown"
      ? population
      : parseInt(population).toLocaleString()
  }. The orbital period is ${orbital_period} days.
 </p>
 </div>
  `;

  myDiv.insertAdjacentHTML("beforeend", planetDiv);
}

const highlight = document.getElementById("highlighter");
const allPlanetDivs = document.getElementsByClassName("planets");

highlight.addEventListener("click", showunpopulated);

function showunpopulated() {
  for (const prop of allPlanetDivs) {
    // console.log(prop.dataset.population);
    if (prop.dataset.population === "unknown") {
      // prop.style.backgroundColor = "teal";
      prop.classList.toggle("highlight");
    }
  }
}

const selector = document.getElementById("selector");

selector.addEventListener("change", highlightRating);

function highlightRating(e) {
  // console.log(e.target.value);
  const { value } = e.target;
  for (const prop of allPlanetDivs) {
    prop.style.background = "white";
    if (prop.dataset.population === value) {
      prop.style.background = "teal";
    }
  }
}
