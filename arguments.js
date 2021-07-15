var add = function(a, b, d) {
    var c = a + b;
    var c = arguments[0] + arguments[1];
    console.log(d);
    console.log('arguments: ', arguments);
    // console.log(this);
    return c;
}

var result = add(5, 7);
console.log(result);