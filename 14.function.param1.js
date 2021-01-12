function hello(p1) {
  console.log(typeof p1, p1);

  if (typeof p1 === "function") {
    p1();
  }
}

hello(100);
hello("CDAC");

// Passing Function as Paramter :: to Another function hello
// Function Variable :: Reference Variable
let hi = function () {
  console.log("I AM ANNONYMOUS AND CALLBACK ALSO AS AN EXPRESSSION!!");
};
hello(hi);

// REAL WORLD
hello(function () {
  console.log("I AM ANNONYMOUS AND CALLBACK ALSO!!");
});
