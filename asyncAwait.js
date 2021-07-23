//! async await is internally converted to switch case by JavaScript

//% await works on Promise!!!!

function getData(){
    return new Promise((resolve, reject) => {
        resolve(42);
    });
}

async function callForData(){
    const promise = getData();
    // promise.then( result => console.log("then result", result));

    // //!           |
    // //!           v is actually a return statement
    const result = await getData(); //% await -> .then( result => ...)
    console.log("await result", result);
    console.log("Done");
}

callForData();
console.log("Before await");