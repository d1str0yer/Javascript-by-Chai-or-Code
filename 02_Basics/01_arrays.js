// array literal notation
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Baalvir", "Shaktiman"]
console.log(myHeros[1]); // Shaktiman
console.log(myHeros.length); // 2
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2); // [ 1, 2, 3, 4 ]
// console.log(0 in myArr2); // true // because 0 index is available
// console.log(-1 in myArr2); // false // because -1 index is not available
// console.log(4 in myArr2); // false // because array has index value from 0 to 3.

// in operator
// let motorBike = { make:"Bajaj", model:"Pulsar", year:2020 }
// console.log('model' in motorBike); // true
// delete motorBike.model
// if ('model' in motorBike === false) {
//     motorBike.model = "Avenger"
// }
// console.log(motorBike.model); // Avenger

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
myHeros.push("Krish");
// console.log(myHeros); // [ 'Baalvir', 'Shaktiman', 'Krish' ]
// myArr.pop()
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6 ]
// console.log(myArr.length); // 7

myArr.unshift(9)
myArr.shift(2)
console.log(myArr); //
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);