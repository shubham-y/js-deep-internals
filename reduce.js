const array = [1,12,24,98];

let sum = 0;
for (let index = 0; index < array.length; index++)
    sum += array[index];
console.log("Sum = ", sum);

//% [1,2,3,4]
const result = array.reduce((lhs, element, index) => lhs + element);
//%     |                   (1  ,  2            ) => 1 + 2 -> 3
//%     |                   (3  ,  3            ) => 3 + 3 -> 6
//%     v                   (6  ,  4            ) => 6 + 4 -> 10
//%     10
console.log({ result });

const txn = [
    {txnNo: 1, desc: "Zomato", amount: 250.00},
    {txnNo: 2, desc: "Amazon", amount: 1250.00},
    {txnNo: 1, desc: "Uber", amount: 300.00}
];