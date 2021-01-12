let str = "Hello World";
let num = 100;
let isValid = true;

// Named Function
function hello() {
  console.log("Hello World");
}

hello();

// Annonymous Function ::  Assigned to an Variable Expression
let hi = function (p1) {
  console.log("I am annonymous function", p1);
};

console.log(typeof hi);
hi(100);
