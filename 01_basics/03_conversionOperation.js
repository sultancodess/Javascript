// Conversion Operations in JavaScript

// Example of type conversion from string to number
let score = "hitesh";
let valueInNumber = Number(score);
console.log(`Type of valueInNumber: ${typeof valueInNumber}`); // Output: number
console.log(`Value of valueInNumber: ${valueInNumber}`); // Output: NaN

// Examples of type conversion from string to boolean
let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(`Boolean value of isLoggedIn: ${booleanIsLoggedIn}`); // Output: true

// Examples of type conversion from number to string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(`Type of stringNumber: ${typeof stringNumber}`); // Output: string
console.log(`Value of stringNumber: ${stringNumber}`); // Output: "33"

// Basic arithmetic operations
let value = 3;
let negValue = -value;
console.log(`Negative value: ${negValue}`); // Output: -3

console.log(`2 + 2 = ${2 + 2}`); // Output: 4
console.log(`2 - 2 = ${2 - 2}`); // Output: 0
console.log(`2 * 2 = ${2 * 2}`); // Output: 4
console.log(`2 ** 3 = ${2 ** 3}`); // Output: 8
console.log(`2 / 3 = ${2 / 3}`); // Output: 0.6666666666666666
console.log(`2 % 3 = ${2 % 3}`); // Output: 2

// String concatenation
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(`Concatenated string: ${str3}`); // Output: "hello hitesh"

// Examples of implicit type conversion
console.log(`"1" + 2 = ${"1" + 2}`); // Output: "12"
console.log(`1 + "2" = ${1 + "2"}`); // Output: "12"
console.log(`"1" + 2 + 2 = ${"1" + 2 + 2}`); // Output: "122"
console.log(`1 + 2 + "2" = ${1 + 2 + "2"}`); // Output: "32"

// Example of arithmetic operation with mixed types
console.log(`(3 + 4) * 5 % 3 = ${(3 + 4) * 5 % 3}`); // Output: 2

// Examples of unary plus operator
console.log(`+true = ${+true}`); // Output: 1
console.log(`+"" = ${+""}`); // Output: 0

// Example of chained assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(`num1: ${num1}, num2: ${num2}, num3: ${num3}`); // Output: 4, 4, 4

// Example of increment operator
let gameCounter = 100;
++gameCounter;
console.log(`gameCounter: ${gameCounter}`); // Output: 101

// Link to study type conversion in JavaScript
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// Additional Examples

// Example of implicit type conversion
let implicitConversion = "5" - 2; // "5" is implicitly converted to number 5
console.log(`"5" - 2 = ${implicitConversion}`); // Output: 3

implicitConversion = "5" * 2; // "5" is implicitly converted to number 5
console.log(`"5" * 2 = ${implicitConversion}`); // Output: 10

implicitConversion = "5" / 2; // "5" is implicitly converted to number 5
console.log(`"5" / 2 = ${implicitConversion}`); // Output: 2.5

// Example of explicit type conversion
let explicitConversion = Number("123"); // "123" is explicitly converted to number 123
console.log(`Number("123") = ${explicitConversion}`); // Output: 123

explicitConversion = String(123); // 123 is explicitly converted to string "123"
console.log(`String(123) = ${explicitConversion}`); // Output: "123"

explicitConversion = Boolean(1); // 1 is explicitly converted to boolean true
console.log(`Boolean(1) = ${explicitConversion}`); // Output: true

explicitConversion = Boolean(0); // 0 is explicitly converted to boolean false
console.log(`Boolean(0) = ${explicitConversion}`); // Output: false

// Example of NaN (Not a Number)
let notANumber = Number("abc"); // "abc" cannot be converted to a number
console.log(`Number("abc") = ${notANumber}`); // Output: NaN

// Example of parseInt and parseFloat
let parsedInt = parseInt("123.45"); // "123.45" is parsed as integer 123
console.log(`parseInt("123.45") = ${parsedInt}`); // Output: 123

let parsedFloat = parseFloat("123.45"); // "123.45" is parsed as float 123.45
console.log(`parseFloat("123.45") = ${parsedFloat}`); // Output: 123.45

// Example of toFixed method
let num = 123.456;
let fixedNum = num.toFixed(2); // num is rounded to 2 decimal places
console.log(`123.456.toFixed(2) = ${fixedNum}`); // Output: "123.46"
