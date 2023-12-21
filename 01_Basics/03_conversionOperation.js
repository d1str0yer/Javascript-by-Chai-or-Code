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
// console.log(a+b+c+d+e+f); // 33ab0920nulltrue
// console.log(b+c); // 09 
// console.log(d+c+b); // 2090
// console.log(d+b+c); // 209
// console.log(typeof(d+e)); // number
// console.log(typeof(e+d)); // number
// console.log(e+d); // 20
// console.log(e+b); // 0
// console.log(e+f); // 1
// console.log(f+e); // 1
// console.log(typeof(e+f)); // number
// console.log(typeof(f+e)); // number
// console.log(d+e+f); // 21
// console.log(typeof(d+e+f)); // number

// console.log("1" + 1 ); // 11
// console.log( 1 + "1" ); // 11
// console.log( 1 + 1 + "1" ); // 21
// console.log( "1" + 1 + 1 ); // 111

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3); // 7 * 5 % 3 = 35 % 3 = 2
// console.log(+true); // 1
// console.log(+""); // 0

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2 // bad practice - avoid this
// console.log(num1); // 4
// console.log(num2); // 4
// console.log(num3); // 4

// let gameCounter = 100
// gameCounter++; // 100
// ++gameCounter;  // 102
// console.log(gameCounter); // 102

let x = 10;
let y = 20;
let z = x++ + ++y + x++ + y++;
//  z = 10 + 21 + 11 + 21 = 63
let r = ++y + x++ + z++ + y++;
//  r = 23 + 12 + 63 + 23 = 121
console.log(x); // 13
console.log(y); // 24
console.log(z); // 64
console.log(r); // 121

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion








