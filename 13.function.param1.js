let hi = function (response) {
  console.log("I am annonymous function");
};

hi();

function hello(p1) {
  console.log(typeof p1, p1);

  // BEHIND THE SCENE LOT OF WORK
  // NETWORK CALL
  // FOOD GETTGING PREPARED IN THE RESTAURANT
  // ASYNC

  p1("Server Response");
}

// Passing Function as Paramter :: to Another function hello
// Function Variable :: Reference Variable
hello(hi);

// Customer 2
hello(hi);
