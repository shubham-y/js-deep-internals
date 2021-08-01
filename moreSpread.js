const obj = { id:1, name: "Brendan"};
const obj2 = { ...obj, age: 57};
console.log(obj2);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj3 = {...arr3};
console.log(obj3);