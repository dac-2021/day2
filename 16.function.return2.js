console.log("RETURN DEMO");

function demo1() {
  // Lets return String
  return "Hello World; I am String!!";
}

function demo2() {
  // Lets return Number
  return 100;
}

function demo3() {
  // lets return function
  return function () {
    return "Inner Function Returning String";
  };
}

let d1 = demo1();
console.log("Demo1", typeof d1, d1);

let d2 = demo2();
console.log("DEMO2", typeof d2, d2);

let d3 = demo3();
console.log("Demo3", typeof d3);
if (typeof d3 === "function") {
  let output = d3();
  console.log(output);
}
