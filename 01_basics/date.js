let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())

// let newDate = new Date(2023, 0, 07)  //Manual declaration, Month start from "0"
// let newDate = new Date(2023, 0, 7, 5, 30)
// let newDate = new Date("2023-07-07") //Month start from "1", YYYY-MM-DD
// let newDate = new Date("08-07-2023")// Month start from "1", DD-MM-YYYY
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // in milisecond
// console.log(Math.floor(myTimeStamp/1000)) //for convert in seconds

let newDate = new Date()
// console.log(newDate.getFullYear())
// console.log(newDate.getMonth()) starting from zero = jan
// console.log(newDate.getDay())
// console.log(newDate.getDate())
// console.log(newDate.getMinutes())

newDate.toLocaleString('default', {
    weekday: "long"

})

console.log(newDate)