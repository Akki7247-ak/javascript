//primitive datatypes

// 7 types : string, number, boolean, null, undefined, Bigint, Symbol

const userName = "Akhilesh"
const userAge = 23
const isLoggedIn = true
const userMail = null
let userPic ;

const bigInt = 87654345678987654n

let modelMobile = Symbol("123")
let priceMobile = Symbol("123")

console.log(modelMobile == priceMobile);


// Refrence (non primitive)
// Array, Obejects, Functions


const heros = ["ironman", "shaktimaan", "hatim"];

let myObj ={
    name : "siddu",
    age: 23
}

const myFunction = function(){
    console.log("helo bhay");
}

console.log(myFunction);