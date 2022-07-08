/*
Creating, Inserting and Deleting Elements
*/

// Creating
const cookieMessage = document.createElement("div");
const header = document.querySelector(".header");
cookieMessage.classList.add("cookies-message");

// Inserting
cookieMessage.innerHTML =
  "We use cookies for improved functionality. <button class='btn btn--close-cookies'>Got it!</button>";

header.prepend(cookieMessage);
// header.append(cookieMessage.cloneNode(true));

// Deleting Element
const closeCookie = document.querySelector(".btn--close-cookies");
closeCookie.addEventListener("click", function () {
  cookieMessage.remove();
});

// Inserting Styling
cookieMessage.style.backgroundColor = "#37383d";
cookieMessage.style.display = "inline-block";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Standard way of Accessing Attribute

// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.scr);
// console.log(logo.className);

// Or
// console.log(logo.getAttribute("zionhilt"));
// console.log(logo.setAttribute("company", "Zion"));

// Changing Attribute
// logo.alt = "Zion";
