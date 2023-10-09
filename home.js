"use strict";

let productId = 1234;
console.log(productId);

// showProductId();

// function showProductId() {
//   console.log(123);
// }

// function showProductId() {
//   let productId = 12345;

//   function fix() {
//     let productId = 45678;
//     console.log("in fix: ", productId);
//   }

//   fix();
//   console.log("in showProductId: ", productId);
// }

// showProductId();

// const app = {
//   productId: 12345,
//   userName: "joe",
//   orderNumber: 789,
// };

// function showProductId() {
//   console.log(app.productId);
// }

// showProductId();

// const containers = document.getElementsByClassName("container");
// containers[0].classList.add("d-none");
// console.log(containers);

// const values = ["a", "b", "c", "d", "z", "bb"];

// const set = values.filter(function (item) {
//   console.log("item: ", item);
//   return item > "b";
// });

// console.log(set);

// const values = ["a", "b", "c"];
// values.splice(1, 0, "hello");
// console.log(values);

// const values = ["a", "b", "c"];
// const newValues = values.slice(1, 4);
// console.log(newValues);

// const button = document.getElementById("see-review");

// button.addEventListener("click", function () {
//   const review = document.getElementById("review");

//   if (review.classList.contains("d-none")) {
//     review.classList.remove("d-none");
//     button.textContent = "CLOSE REVIEW";
//   } else {
//     review.classList.add("d-none");
//     button.textContent = "SEE REVIEW";
//   }
// });

// let s = "Hello";
// showMessage(s.charAt(1));

// showMessage(Math.floor(Math.random() * 10));

// let now = new Date();
// showMessage(now.toDateString());

// let message = "Hello";

// function changeMessage(message) {
//   message = "Hi!";
// }

// changeMessage(message);

// showMessage(message);

// person.showInfo();

// let mySymbol = Symbol();

// let person = {
//   name: "John",
//   age: 32,
//   partTime: false,
//   showInfo: function () {
//     showMessage(this.name);
//   },
// };

// person['age'] = 44;

// showMessage(person.age);

// changePercentOff(30);

// let key = 42;

// function getSecretCode(value) {

//     let keyGenerator = function() {
//         let key = 12;
//         console.log(' in keyGenerator: ', key);
//         return key;
//     }

//     let code = value * keyGenerator();
//     console.log(' in getSecretCode: ', key);
//     return code;
// }

// let secretCode = getSecretCode(2);
// showMessage(secretCode);

// for (let i= 0; i < 5; i++) {
//     console.log(i)
// }

// function getSecretCode(value) {
//     let code = value * 42;
//     return code;
// }

// let secretCode = getSecretCode(2);
// showMessage (secretCode);
// // console.log (getSecretCode(2));

// let myFunction = function(message, firstName) {
//     console.log(message);
//     console.log(firstName);
// }

// myFunction(0, 'Hello');

// let i = 4;

// while (i > 0) {
//     console.log(i);
//     i--;
// }

// let i = 4;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);

// let state = 'TX';
// let taxPercent = 0;

// if (true) {
//     let value = 'yes';
//     showMessage(value);
// }

// console.log(value);

// let price = 20;
// let message = (price > 10) ? 'yes' : 'no';

// showMessage(message);

// if (state === 'FL') {
//     taxPercent = 7;
// }
// else if (state === 'NY') {
//     taxPercent = 8.875;
// }
// else {
//     taxPercent = 5;
// }

// showMessage(taxPercent);
// console.log(taxPercent);

// if ( +(1.1 + 1.3).toFixed(2) === 2.4) {
//     let message = 'hello';
//     showMessage(message);
// }

// person = object, firstName = string
// let person = {
//     firstName: 'John',
//     lastName: 'Adams'
// };

// showMessage (typeof person.firstName);
// console.log(person);

// let message = Number.parseFloat ('125');

// showMessage(typeof message);

// console.log(message)

// message = message.toString();

// let message = 'Hello';
// message = message.substring(0, 4);
// showMessage(message);

// let firstName = 'Andrea';
// let message = `Hello ${firstName}`;

// showMessage(message);

// let price = "\"hello world\"";

// showMessage(price);

// let price = 20 - (-2);
// let price = 99.99,
// name='Hiking Boots',
// discounted = false;
// price = 49.99;

// let price = 12,
// taxRate = 7;

// showMessage(price* taxRate);

// price += 5;
// showMessage(typeof price);

// single line comment
/*
Multi-line comment 
*/
