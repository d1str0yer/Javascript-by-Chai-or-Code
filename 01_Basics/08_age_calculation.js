// Person Age Calculation
let birthYear = new Date('1992-03-04').getFullYear();
// console.log(birthYear); // 1992
let today = new Date();
let currentYear = today.getFullYear(); // 2023
const age = currentYear - birthYear;
console.log(age); // 31