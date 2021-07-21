const txn = [
    {txnNo: 1, desc: "Zomato", amount: 250.00},
    {txnNo: 2, desc: "Amazon", amount: 1250.00},
    {txnNo: 1, desc: "Uber", amount: 300.00}
]

const transaction = txn.filter( element => [250, 300].includes(element.amount));
console.log(transaction);

const array = [1,2,3,4,5,6];
const sqrNo = array.map( value => value * value);
console.log(sqrNo);

const languages = ['C', 'C++', 'Java', "Javascirpt"];
console.log(languages);
const langlen = languages.map( (lang,index) => { return {srnNo: index+1, languages: lang, length: lang.length} });
console.log({langlen});