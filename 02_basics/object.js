const mySymbol = Symbol("key1")

const user = {
    name: "vinay",
    age: 21,
    email: "vinu@test.com",
    edu: "Btech",
    // mySymbol: "myKey1"//Symbol cant define like this
    [mySymbol]: "myKey1"//Symbol cant define like this

}

// console.log(user.name) //1st way to access object
// console.log(user["name"]) // second way to access object
// console.log(user[mySymbol])// only syntax for accessing symbol in object

// user.age = 20; // Manipulate data in object
// console.log(user)

user.greet = function(){
    console.log("Hello Vinay");
}

user.greetTwo = function(){
    console.log(`Hello user, ${this.name.toUpperCase()} `);
}

// console.log(user.greet)// this give function refrence only
// console.log(user.greet()) // right syntax for calling function
// console.log(user.greetTwo())


const tinder = new Object() //Using Constructor 

tinder.id = "123abc"
tinder.name = "sonu"
tinder.age = 21

// console.log(tinder)


