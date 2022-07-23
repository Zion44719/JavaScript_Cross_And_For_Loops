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
const myDiv = document.getElementById("films");
const myButton = document.querySelector(".btn");

myButton.addEventListener("click", getFilms);

function getFilms() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  fetch(`https://swapi.dev/api/films/${randomNum}/`)
    .then((data) => data.json())
    .then((d) => populateFilm(d))
    .catch((err) => {
      console.log(err.message);
    });
}

function populateFilm(filmObj) {
  const { title, director, producer } = filmObj;
  const filmDiv = `
  <div>
  <h1>${title}</h1>
  <p>
  ${title} was directed by ${director} and the producer is ${producer}
  </p>
  </div>
  `;
  myDiv.innerHTML += filmDiv;
}
