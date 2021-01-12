console.log("Command Line Arg Demo");
console.log("Handling Default Value");
console.log("String to Number Conversion");

console.log(process.argv);

// Option 1
let count = process.argv[2];
if (count == undefined) {
  count = 5;
}

// Option 2
// const count = process.argv[2] || 5;

// Convert String to Number
const num = parseInt(count);

console.log(num, typeof num);
