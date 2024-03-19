// const coding = ["js", "java", "ruby", "python"];

// const values = coding.forEach ((item) => {
//     //console.log(item)
//     return item
// } )

// console.log(values) //forEach not return any value

//++++++++++++++++++++   Filter   ++++++++++++++

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )//explicitly return "one line code"


// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )// return keyword is must in scope then you can see value otherwise it will show empty


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4){
//      newNums.push(num)
//     }
// } )

// console.log(newNums);


const values = [1,2,3,4]

// const newVal = values.reduce( function (acc,curval)  {
//     return acc + curval
// }, 0) //inital value for accumulator, accumulator update each iteration

const newVal = values.reduce( (acc,curval) => ( acc + curval), 0) //inital value for accumulator

console.log(newVal)