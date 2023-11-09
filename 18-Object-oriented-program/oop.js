"use strict";
// Object has own properties and functions (methods)

function Ship() {
  this.floats = true;
  this.material = "steel";
}

const myShip = new Ship();
console.log(myShip.floats);