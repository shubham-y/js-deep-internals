var p = {
    id: 1, //property: value
    name: "Shubham",
    print: function x(){
        console.log("Person");
    }
}

console.log(p.id, p.name);
console.log(p["id"]);
console.log(p["id"] == p.id);

p["number"] = 5;
console.log(p);
// p.1 = 5;
p.print();