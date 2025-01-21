"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

// This is a simple addition operation with good readability
console.log(3 + 3); // 6

// Printing a string to the console
console.log("Sultan Alam"); // Sultan Alam

// Declaring variables with different data types
let name = "Sultan Alam"; // string
let age = 18; // number
let isLoggedIn = false; // boolean
let state; // undefined

// number => 2 to power 53
let largeNumber = 9007199254740991; // largest safe integer in JavaScript

// bigint
let bigIntNumber = 9007199254740991n; // BigInt type for larger integers

// string => ""
let greeting = "Hello, world!"; // string

// boolean => true/false
let isStudent = true; // boolean

// null => standalone value
let emptyValue = null; // null

// undefined => variable declared but not assigned a value
let notAssigned; // undefined

// symbol => unique
let uniqueId = Symbol("id"); // symbol

// object
let user = {
    name: "sultan Alam",
    age: 18,
    isLoggedIn: false
}; // object

// Using typeof to check the data types
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known quirk in JavaScript, null is not an object)
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // undefined
console.log(typeof largeNumber); // number
console.log(typeof bigIntNumber); // bigint
console.log(typeof greeting); // string
console.log(typeof isStudent); // boolean
console.log(typeof emptyValue); // object
console.log(typeof uniqueId); // symbol
console.log(typeof user); // object

// Additional examples
let myName = "Sultan Alam"; // replace with your name
let myAge = 21; // replace with your age
let myStatus = true; // replace with your status

console.log(`My name is ${myName}, I am ${myAge} years old, and my status is ${myStatus}.`);