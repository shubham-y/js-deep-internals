


//% .call and .apply -> point and shoot
function injectId(id) {
    this.id = id;
}

var obj = {};

//!           this
//!            |
//!            v
injectId.call(obj, 5, "abc", true);
console.log(obj);
injectId.apply(obj, [10, "xyz", false,]);
console.log(obj);



