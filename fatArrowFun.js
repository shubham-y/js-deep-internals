function sqr(x){
    return x*x;
}

function sqr           (x)    { return x*x; } //!DECLARATION
var      sqr = function(x)    { return x*x; } //* EXPRESSION

var      sqr =         (x) => { return x*x; } //~ FAT ARROW FUNCTION
var      sqr =         (x) =>          x*x;   //? Remove { return }
var      sqr =          x  =>          x*x;   //? Remove () if single param

var sqr = x => x*x;
console.log(sqr(5));

// var child = new sqr(5);
