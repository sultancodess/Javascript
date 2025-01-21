// Number Operations
const score = 400;
console.log(`Score: ${score}`);

const balance = new Number(100);
console.log(`Balance: ${balance}`);
console.log(`Balance length: ${balance.toString().length}`);
console.log(`Balance to fixed (1 decimal): ${balance.toFixed(1)}`);

const otherNumber = 123.8966;
console.log(`Other number to precision (4 digits): ${otherNumber.toPrecision(4)}`);

const hundreds = 1000000;
console.log(`Hundreds in locale string (en-IN): ${hundreds.toLocaleString('en-IN')}`);

// Math Operations
console.log('Math Object:', Math);
console.log(`Absolute of -4: ${Math.abs(-4)}`);
console.log(`Round 4.6: ${Math.round(4.6)}`);
console.log(`Ceil 4.2: ${Math.ceil(4.2)}`);
console.log(`Floor 4.9: ${Math.floor(4.9)}`);
console.log(`Min of (4, 3, 6, 8): ${Math.min(4, 3, 6, 8)}`);
console.log(`Max of (4, 3, 6, 8): ${Math.max(4, 3, 6, 8)}`);

// Random Numbers
console.log(`Random number: ${Math.random()}`);
console.log(`Random number between 1 and 10: ${(Math.random() * 10) + 1}`);
console.log(`Random integer between 1 and 10: ${Math.floor(Math.random() * 10) + 1}`);

const min = 10;
const max = 20;
console.log(`Random integer between ${min} and ${max}: ${Math.floor(Math.random() * (max - min + 1)) + min}`);
