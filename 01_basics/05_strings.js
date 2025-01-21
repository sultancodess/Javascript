const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// Interview Question: What is the difference between `substring` and `slice` in JavaScript?
// Answer: 
// `substring(start, end)` extracts characters from `start` index up to but not including `end` index. 
// If `end` is omitted, it extracts till the end of the string. It does not accept negative indices.
// `slice(start, end)` extracts characters from `start` index up to but not including `end` index. 
// If `end` is omitted, it extracts till the end of the string. It accepts negative indices, 
// which count from the end of the string.