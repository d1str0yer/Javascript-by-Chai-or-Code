"use strict";

let score = 33;
// console.log(typeof score); // number
// console.log(typeof(score)); // number

let age = "33";
let numberInAge = Number(age);
// console.log(typeof age); // string
// console.log(typeof numberInAge); // number

let obj = "33abc";
let numberInObj = Number(obj);
// console.log(typeof(numberInObj)); // number
// console.log(typeof(obj)); // object
let newObj = null;
// console.log(typeof(newObj)); // NaN = not a number
// console.log(Number(newObj)); // 0
let bool = true;
// console.log(typeof(bool)); // boolean
// console.log(Number(bool)); // 1

let number = undefined;
// console.log(typeof(number)); // undefined
// console.log(Number(number)); // NaN

// let value = 1;
// let boolValue = Boolean(value);
// console.log(typeof(boolValue)); // boolean
// console.log(boolValue); // true
// let value = "";
// let boolValue = Boolean(value);
// console.log(typeof(boolValue)); // boolean
// console.log(boolValue); // false
// let value = "Lalit";
// let boolValue = Boolean(value);
// console.log(typeof(boolValue)); // boolean
// console.log(boolValue); // true

// let aNumber = 34
// let stringNumber = String(aNumber);
// console.log(stringNumber); // 34
// console.log(typeof stringNumber); // string

let a = "33ab";
let b = 0;
let c = "9";
let d = 20;
let e = null;
let f = true;
console.log(a+b+c+d+e+f); // 33ab0920nulltrue
// console.log(b+c); // 09 
// console.log(d+c+b); // 2090
// console.log(d+b+c); // 209
console.log(typeof(d+e)); // number
console.log(typeof(e+d)); // number
console.log(e+d); // 20
console.log(e+b); // 0
console.log(e+f); // 1
console.log(f+e); // 1
console.log(typeof(e+f)); // number
console.log(typeof(f+e)); // number
console.log(d+e+f); // 21
console.log(typeof(d+e+f)); // number








