const person = {
    id: 1,
    print() {
        console.log("person.id", this.id);
    }
}

//% "call-site"
person.print(); 
//% 1. person, 2. calling print, 3. passing person as 'this'

//! forgotten  |     |  remembers ONLY print
//!            v     v
const ref = person.print; //! <- Not a call site ref of print, forgets person
console.log({ref})
ref(); //! -> golobal .print();

const correctRef = person.print.bind(person);
correctRef();