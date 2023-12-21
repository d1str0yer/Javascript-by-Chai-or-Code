// const score = 400
// console.log(score); // 400

// const balance = new Number(100)
// console.log(balance); // [Number: 100]
// console.log(balance.__proto__); // {}

// console.log(balance == 100); // true
// console.log(balance === 100); // false
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 123.8966
// console.log(otherNumber.toFixed()); // 124
// console.log(otherNumber.toFixed(2)); // 123.90
// console.log(otherNumber.toPrecision()); // 123.8966
// console.log(otherNumber.toPrecision(5)); // 123.90

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 
// console.log(hundreds.toLocaleString('en-US')); // 1,000,000

// // +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random()); // a floating point number equal to 0 or b/w 0(inclusive) and 1(exclusive)
// console.log((Math.random()*10) + 1); 
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1))) // any value b/w 0(inclusive) and 10(inclusive)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min) // any value b/w 11(inclusive) and 20(inclusive)

// const array = new Int8Array(10);
// let self = crypto.getRandomValues(array);
// console.log(self);
// console.log("Your lucky numbers:");
// for (const num of self) {
//   console.log(num);
// }

// let keyPair = crypto.subtle.generateKey(
//     {
//       name: "RSA-OAEP",
//       modulusLength: 4096,
//       publicExponent: new Uint8Array([1, 0, 1]),
//       hash: "SHA-256",
//     },
//     true,
//     ["encrypt", "decrypt"],
//   );
