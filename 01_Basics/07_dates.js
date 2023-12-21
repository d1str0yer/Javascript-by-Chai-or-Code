// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); // Thu Dec 21 2023 09:52:27 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Thu Dec 21 2023
// console.log(myDate.toLocaleString()); // 12/21/2023, 9:39:45 AM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // 1/23/2023, 12:00:00 AM // month is 0 indexed
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") // 1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023") // 1/14/2023, 12:00:00 AM
// let myCreatedDate2 = new Date("14-2023-01") 
// console.log(myCreatedDate2.toLocaleString()); // Invalid Date

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1703154707237 // returns miliseconds
// console.log(myCreatedDate.getTime()); // 1673654400000 // returns miliseconds
// console.log(Math.floor(Date.now()/1000)); // 1703154841

let newDate = new Date()
// console.log(newDate); // 2023-12-21T10:35:00.358Z
// console.log(newDate.getMonth() + 1); // it will return current month which is 12 + 1 = 13, but it will return 12 only as 13 is invalid month.
// console.log(newDate.getDay()); // it will return today

// console.log(newDate.toLocaleString('default', {weekday: "long"})); // Thursday






