// Document Object Model (DOM)

// Accessing or Selecting
// 1. By id
// let titleText = document.getElementById

// 2. By Selector
// let titleText = document.querySelector
// let titleText = document.querySelectorAll

// 3. By TagName
// let titleText = document.getElementsByTagName

// let para = document.querySelector(".array");

// para.innerText += " Okay";
// // Or
// para.innerText = " Okay";

// let questions = [
//   {
//     question: "Who is the Governor of Ekiti State",
//     optionsA: "Fayose",
//     optionB: "Fayemi ",
//     optionC: "Bao",
//     correctAns: "Fayemi",
//   },
//   {
//     question: "Who is the President of Nigeria",
//     optionsA: "Buhari",
//     optionB: "Bayo",
//     optionC: "Bao",
//     correctAns: "Buhari",
//   },
//   {
//     question: "Who is the Ceo of Kinplus",
//     optionsA: "Mr Lekan",
//     optionB: "FDayo ",
//     optionC: "Bao",
//     correctAns: "Mr Lekan",
//   },
// ];

// let home = document.querySelector("#home");
// let content = document.querySelector(".content");

// for (i = 0; i < questions.length; i++) {
//   content.innerHTML += `
//     <div class="card">
//             <h2>${questions[i].question}</h2>
//             <ul>
//                 <li>${questions[i].optionsA}</li>
//                 <li>${questions[i].optionB}</li>
//                 <li>option 3</li>
//             </ul>

//         </div>
//     `;
// }

// home.innerText = "Quiz Website";
// home.style.textAlign = "center";
// home.style.borderBottom = "2px solid red";

// let food = ["rice", "beans", "semo"];

// for (i = 0; i < food.length; i++) {
//   console.log(questions[i].optionsA);
// }
// create a div called content
// display all the value of questions inside the content div
// using querySelector
// give the content div a style of boder 2px solid red

let userData = {
  userName: "kinplus",
  password: 1234,
};

function login() {
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");
  if (
    username.value == userData.userName &&
    password.value == userData.password
  ) {
    confirm("login okay");
  } else {
    alert("incorrect detail");
  }
}

let loginPage = document.getElementById("login");

loginPage.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});