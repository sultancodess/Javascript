let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// Additional Examples

// Example of implicit type conversion
let implicitConversion = "5" - 2; // "5" is implicitly converted to number 5
console.log(implicitConversion); // Output: 3

implicitConversion = "5" * 2; // "5" is implicitly converted to number 5
console.log(implicitConversion); // Output: 10

implicitConversion = "5" / 2; // "5" is implicitly converted to number 5
console.log(implicitConversion); // Output: 2.5

// Example of explicit type conversion
let explicitConversion = Number("123"); // "123" is explicitly converted to number 123
console.log(explicitConversion); // Output: 123

explicitConversion = String(123); // 123 is explicitly converted to string "123"
console.log(explicitConversion); // Output: "123"

explicitConversion = Boolean(1); // 1 is explicitly converted to boolean true
console.log(explicitConversion); // Output: true

explicitConversion = Boolean(0); // 0 is explicitly converted to boolean false
console.log(explicitConversion); // Output: false

// Example of NaN (Not a Number)
let notANumber = Number("abc"); // "abc" cannot be converted to a number
console.log(notANumber); // Output: NaN

// Example of parseInt and parseFloat
let parsedInt = parseInt("123.45"); // "123.45" is parsed as integer 123
console.log(parsedInt); // Output: 123

let parsedFloat = parseFloat("123.45"); // "123.45" is parsed as float 123.45
console.log(parsedFloat); // Output: 123.45

// Example of toFixed method
let num = 123.456;
let fixedNum = num.toFixed(2); // num is rounded to 2 decimal places
console.log(fixedNum); // Output: "123.46"