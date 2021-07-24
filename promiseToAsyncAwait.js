const mysql = require("mysql");

function getCustomers() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "test"
    });

    //% Promisification of callbacks

    return new Promise((resolve, reject) => {
        //! mysql library is callback based, it does not return results of query
        connection.query("SELECT * FROM customers LIMIT 1", (error, result) => {
            if(error)
                reject(error);
            else
                resolve(result);

            connection.end();
        });
    });
}

async function getData(){
    const promise = getCustomers();

    try{
        const result = await promise; //% Invokes promise.then()
        console.log("resolved", result);
    } catch (error) {
        console.log("error", error.message);
    }

    // promise
    //     .then(result => console.log("resolved", result)) //get data
    //     .catch(error => console.log("error", error.message));

    console.log("bye");
}
getData();
console.log("Before Await");