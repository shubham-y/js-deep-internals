'use strict';
//! Object literals -> {} [Single Object]
var p  = {id:1, name: "Brendan", print: function(){} };
console.log(p);

function Employee(id, name){ //% constructor
    this.id = id;
    this.name = name;
}

var e = new Employee(1, "Marc Andreessen"); //! You think class -> new constructor
console.log(e);
//> class add() {
    function add(a, b){

    }
//>

var a = new add();

// Employee(2, "Lars Bak");
console.log("Done");
