const myName = "Lalit"
const repoCount = 5

// console.log(myName + repoCount + " Value"); // "Lalit5 Value"

// console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String('lalit-jha-com')

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // {}


// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase()); // LALIT-JHA-COM
// console.log(gameName.charAt(2)); // l
// console.log(gameName.indexOf('t')); // 4

// const newString = gameName.substring(0, 4)
// console.log(newString); // lali

// 'l a l i t - j h a - c o m'
//  0 1 2 3 4 5 6 7 8 9 10 11 12
//  l a l i t - j h a - c o m
//-13-12-11-10-9-8-7-6-5-4-3-2-1

// const anotherString = gameName.slice(-8, 0) 
// console.log(anotherString); // it won't print as we are looking in reverse direction
// const anotherString1 = gameName.slice(0, -8) 
// console.log(anotherString1); // lalit

const newStringOne = "   hitesh    "
console.log(newStringOne); //    hitesh   //trailing spaces will not be printed
console.log(newStringOne.trim()); // hitesh // leading and trailing spaces will be removed.
const personName = "Lalit Kumar Jha"
console.log(personName.trim()); // Lalit Kumar Jha // no leading and trailing spaces, it will print as it is.

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) // "https://hitesh.com/hitesh-choudhary" 

// console.log(url.includes('sundar')); // false

// console.log(gameName.split('-')); // [ 'lalit', 'jha', 'com' ]