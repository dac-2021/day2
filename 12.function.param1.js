let str = "Hello";
let num = 100;

let hi = function () {
  console.log("I am annonymous function");
};

function hello(p1) {
  console.log(typeof p1, p1);

  if (typeof p1 == "function") {
    p1();
  }
}

// Passing String as Paramter :: to Another function hello
hello(str);

// Passing Number as Parameter :: to Another function hello
hello(num);

// Passing Function as Paramter :: to Another function hello
hello(hi);
