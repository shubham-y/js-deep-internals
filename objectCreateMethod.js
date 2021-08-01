// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });

console.log(o.p); //42
o.q = 12;
console.log(o); //{ q:12 }

for (const prop in o) {
  console.log(prop); // 'q'
}

 