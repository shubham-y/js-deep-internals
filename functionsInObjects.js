const person = {
    id: 1,
    name: "Brendan",

    printProp: function() { console.log("Print Property"); },
    printArrow: () => { console.log("Print Arrow"); },
    printMethod () { console.log("Print Method") }
}

person.printProp();
person.printArrow();
person.printMethod();