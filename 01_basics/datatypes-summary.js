// Primitive Types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

// Uncomment the following line to use BigInt
// const bigNumber = 3456543576654356754n;

// Reference (Non-primitive) Types

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
};

const myFunction = function() {
    console.log("Hello world");
};

console.log(typeof anotherId); // symbol

// More information on JavaScript types: https://262.ecma-international.org/5.1/#sec-11.4.3
