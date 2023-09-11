let key = 42;

function getSecretCode(value) { 

    let keyGenerator = function() {
        let key = 12;
        console.log(' in keyGenerator: ', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);


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
