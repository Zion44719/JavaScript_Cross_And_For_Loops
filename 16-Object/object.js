"use strict";
// // // console.log(zion.zionhilt());
// // // console.log(zion.kin());

// // // Using Dot Notation
// // const name = zion.name;
// // console.log(name);

// // // Adding Using dot notation
// // (zion.city = "Oklahoma"), (zion.age = 30);
// // // console.log(`i am from ${zion.city} i'm ${zion.age}years`);
// // // Delete from Object || Delete property

// // const married = delete zion.married;
// // console.log(married);

// // console.log(zion);

// // let kinCart = {
// //   cartName: "classroom",
// //   totalItem: 300,
// //   averageItem: 30,
// //   item2: ["book1", "book2", "book3"],
// //   hillTop: function () {
// //     console.log(hillTop);
// //   },
// // };

// // Adding to the object
// // kinCart.city = "Ado";
// // kinCart.age = 20;

// // console.log(kinCart.age);
// // console.log(kinCart.hillTop);

// // let kinCart = {
// //   name: "Oluwafemi",
// //   hobbie: "Aim and Target",
// //   age: 00,
// //   married: "yes",
// //   items2: ["book1", "book2", "book3"],
// //   zionhilt: function () {
// //     (name = "bright"),
// //       (x = 5),
// //       (y = 10),
// //       console.log(`my name is ${name} i am ${x + y}years old`);
// //   },
// //   kin: function () {
// //     console.log(`work in progress`);
// //   },
// // };

// // // // How to add to an object
// // // (kinCart.age = 10),
// // //   // How to delete from an Object
// // //   (age = delete kinCart.age);

// // // console.log(kinCart);
// // console.log(kinCart.zionhilt());
// // console.log(kinCart.kin());

// // console.log(`my name is ${kinCart.name} and my hobbie is ${kinCart.hobbie}`);

// // Assignment
// // 1a. declare a variable kinplusAssignment of 5 arrays and add a number to the second index in the arrays
// // 1b. remove from the fourth array using shift

// // 2. add age to your array of kinplusAssignment
// // 3. declare a variable of object that has 3 function with an epression
// // 4. declare a variable add to the marital status to the object
// // 5. declare a variable and delete from the object using delimiters

let isBoy = {
  name: "Kinplus",
  hobbies: "aim and target",
  married: "No",
  zionHilt() {
    let myName = "Oluwafemi";
    let x = 5;
    let y = 10;
    return `My name is ${myName} i'm ${x + y} years old`;
  },
  zion() {
    let name = "richard";
    let x = 3;
    let y = 5;
    return `My name is ${name} i'm ${x * y} years old`;
  },
};

// isBoy.zionHilt();
// console.log(`My Hobbies ${isBoy.hobbies}`);
// console.log(isBoy.zionHilt());
// console.log(isBoy.zion());

/////////////////////////////////////////////////////
let account = {
  name: "Victor Emeter",
  bankname: "jibowu bank",
  accpin: 1234,
  accnum: 3143100240,
  isactive: true,
  accbal: 5000,
};

function login() {
  let accnum = parseInt(prompt("Hello enter your account number"));

  if (accnum == account.accnum) {
    alert("Welcome to Kin Bank😎");

    if (account.isactive == true) {
      alert("your account is active");
      let pin = parseInt(prompt("enter your pin"));

      if (pin == account.accpin) {
        alert(`Welcome Mr ${account.name}`);
        alert(`Your account bal is ${account.accbal}`);
      } else {
        alert("incorrect pin");
      }
    } else {
      alert("inactive account");
    }
  } else {
    alert("Please Enter Your Account Number");
  }
}

// function chacc(accnum) {
//   if (accnum == account.accnum) {
//     alert("welcome account exits");
//   } else {
//     alert("invalid acc");
//   }
// }

// let accnum = parseInt(prompt("Howfa enter your account number"));
// chacc(accnum);

// if(TRUE){
//   dfihdfkh'fp;ffsdfd
//   sdfksdhf;ofhpkfsf
//   sdksfhsdpfsdh'f
//   dfjsdfgsd
// }ELSE{
//     DFJHD;LKFHSD;LKFDF
//     DIODHF;SFHS;KLFH
//     DKSDF
// }

// let app = [
//   ["twitter", "facebook", "2go"],
//   ["boy", "girl"],
// ];
// let fb = app.join();
// console.log(app);
// console.log(fb);
// app[0][0];

///////////////////////28/06/2022//////////////////////////////
// Javascript Arithmetic Operator

// let classWork = 7;
// console.log("Male", classWork);

// let text1 = "What a very ";
// text1 += "nice day";
// text1 += 7;
// console.log(text1);

// let text2 = 10;

// text2 -= 5; // same as writing test2 = test2 - 5

// console.log(text2);

// let text3 = 10;

// text3 *= 5;

// console.log(text3);

// let text4 = 10;

// text4 /= 5;

// console.log(text4);

// let text5 = 16;

// text5 %= 5;

// console.log(text5);

// let text6 = 2;

// text6 **= 5;

// console.log(text6);

// let text7 = 7;

// text7++;

// console.log(text7);

// let text8 = 5;

// text8--;

// console.log(text8);

// Comparision Operator

// let x = 15;
// let y = 10;

// let userAge = 3;
// let userAmount = 30;

// let book = 10;
// let book1 = 5;

// if ((userAge == userAmount && x > y) || book == book1) {
//   console.log("working code");
// } else {
//   console.log("not working");
// }

// if (userAge == userAmount && x > y) {
//   console.log("working code");
// } else {
//   console.log("not working");
// }

// if (userAge == userAmount || x > y) {
//   console.log("working code");
// } else {
//   console.log("not working");
// }

// let pin = 222;
// let userLogin = "kinplus";

// if (pin != userLogin) {
//   console.log("look at you");
// } else {
//   console.log("working");
// }

// let month = 13;
// let monthName;

// if (month == 1) {
//   console.log((monthName = "January"));
// } else if (month == 2) {
//   console.log((monthName = "February"));
// } else if (month == 3) {
//   console.log((monthName = "March"));
// } else if (month == 4) {
//   console.log((monthName = "April"));
// } else if (month == 5) {
//   console.log((monthName = "May"));
// } else if (month == 6) {
//   console.log((monthName = "June"));
// } else if (month == 7) {
//   console.log((monthName = "July"));
// } else if (month == 8) {
//   console.log((monthName = "August"));
// } else if (month == 9) {
//   console.log((monthName = "September"));
// } else if (month == 10) {
//   console.log((monthName = "October"));
// } else if (month == 11) {
//   console.log((monthName = "November"));
// } else if (month == 12) {
//   console.log((monthName = "December"));
// } else {
//   console.log("Inactive Month");
// }