// Comparison with numbers
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// Comparison with strings and numbers
console.log("2" > 1); // true, "2" is converted to number 2
console.log("02" > 1); // true, "02" is converted to number 2

// Comparison with null
console.log(null > 0); // false, null is converted to 0
console.log(null == 0); // false, null is only equal to undefined
console.log(null >= 0); // true, null is converted to 0

// Comparison with undefined
console.log(undefined == 0); // false, undefined is only equal to null
console.log(undefined > 0); // false, undefined is not converted to a number
console.log(undefined < 0); // false, undefined is not converted to a number

// Strict equality comparison
console.log("2" === 2); // false, different types