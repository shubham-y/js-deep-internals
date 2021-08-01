//% function gets 'arguments' object
//% It CAN user rest parameters

function sum(label, ...args) { //> ... in definition is 'rest'
    let total = 0;
    for (let index = 0; index < args.length; index++)
        total += args[index];
    return total;
}

//% Arrrow Function does NOT get 'arguments'
//% It HAS to use rest parameters

// const sum = (label, ...rest) => {
//     return rest.reduce( (total, value) =>  total+value);
// }

const array = [1,2,3,4,5];
const result = sum("Total", ...array); //> ... in call is "spread"
console.log({result});