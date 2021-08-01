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

const total = txn
    .filter(elem => elem.amount >= 300)
    .map(elem => { return { txnNo: elem.txnNo, amount: elem.amount+100}})
    .reduce( (sum, element) => sum + element.amount, 0);
//%                           (0, 250)
//%                           (250, 1250)
//%                           (1500, 300)
//% 1800
//! ({ txnNo: 1, description: "Zomato", amount: 250.00}, 1250)
console.log({total});

const languages = ['C', 'C++', 'Java', "Javascirpt"];
const singleLine = languages.reduce( (line, lang) => line + ", " +  lang);
console.log(singleLine);
console.log(languages.join(", "));