console.log("Function Arguments Keyword");

function hello(p1, p2) {
  // p1  = arguments[0]
  // p2 = arguments[1]
  // p3 = arguments[2]
  console.log("Hello World", p1, p2);
}

hello();
hello(100);
hello(500, 600);
