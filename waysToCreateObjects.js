//* 1. Object literal
const obj = {
    id:1, 
    name:"Brendan",
    //print: function() { //! key function(prop)
        // console.log(this.id, this.name);
    // }
    print() { //%methods 
        console.log(this.id, this.name);
    }
};

//! 2. constructor function (AVOID)
function Person(id, name){
    this.id = id;
    this.name = name;
}

Person.prototype.print = function() {
    console.log(this.id, this.name)
}

//* 3. class
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    print() {
        console.log(this.id, this.name);
    }
}

//! 4. new Object (AVOIDED)
let eich = new Object();
eich.id = 1;
eich.name = "Brendan";
eich.print = function() {
    console.log(this.id, this.name);
}

//! 5. Object.create (ES5)
const bigB = {firstName:"Amitabh", lastName:"Bachchan"};
console.log(bigB);

const smallB = Object.create(bigB); //* Inheritance
smallB.firstName = "Abhishek";
console.log(smallB);

const bayB = Object.create(smallB);
bayB.firstName = "Aradhya";
console.log(bayB.firstName, bayB.lastName);