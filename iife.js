(function () {
  var message = "Hello";
  console.log(message); // Hello
})();

// Ways to create IIFE
(function () {
  console.log("Parentheses around the function");
})();

(function () {
  console.log("Parentheses around the whole thing");
})();

!(function () {
  console.log("Bitwise NOT operator starts the expression");
})();

+(function () {
  console.log("Unary plus starts the expression");
})();
