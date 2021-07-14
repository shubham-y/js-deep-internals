console.log("Hello world");
g = 10; //! Always global

var x = 5;
var y = 7;

function add(a, b){
    var c;

    c = a+b;
    return c;
}

var z = add(x, y);
console.log("z", z);