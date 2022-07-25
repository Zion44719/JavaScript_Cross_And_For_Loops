"user strict";

const firstName = document.getElementById("name");
const userPassword = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const showDOM = document.getElementById("showDOM");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(firstName.value);
  //   console.log(userPassword.value);
  showDOM.innerHTML += `Username ${firstName.value} while the password is ${userPassword.value}`;
});
