const moment = require("moment");


// let date = new Date();
// console.log(date.getDate());

// let date = new moment();
// date.add(100, "year").subtract(9, "months");
// console.log(date.format("MMM Do, YYYY"));

// 10:35 am
// 6:01 am
let date = new moment();
console.log(date.format("h:mm a"));

let createdAt = 1234;
let date2 = moment(createdAt);
console.log(date2.format());

//time passed since unix ...
let someTimestamp = moment().valueOf();
console.log(someTimestamp);