const array = [1, 2, 3];

//! Array prototype has methods
//! Functional Programming style
console.log(array.length);

console.log("for in");
for (let index in array)
    console.log(index, array[index]);
    
console.log("forEach");
function method(value) {
    console.log(value);
}
array.forEach(method); //! forEach will call method 3 times

console.log("forEach with function");
array.forEach(function(value){console.log(value)}); //! Higher order function

console.log("forEach with arrow");
array.forEach((value)=>{console.log(value)});
array.forEach(value => {console.log(value)});
array.forEach(value => console.log(value));
array.forEach(console.log);

array.forEach( (value, index, array) => console.log(index, "==>", value, array));

