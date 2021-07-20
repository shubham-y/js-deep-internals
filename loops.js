let array = [1,2,3];
array["id"] = 1;
array[5] = 7;

//% C-style for loop
console.log("for");
for (let index = 0; index < array.length; index++)
    console.log(`array[${index}]=${array[index]}`);

//% for-in (in->INdex)
console.log("for-in");
for (let index = 0; index < array.length; index++)
    console.log(`array[${index}]=${array[index]}`);

//% for-of (of->value OF)
console.log("for-of");
for (let value of array)
    console.log(value);