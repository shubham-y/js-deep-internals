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

const promise = getCustomers();
console.log("promise", promise);

promise
    .then(result => console.log("resolved", result)) //get data
    .catch(error => console.log("error", error.message));

console.log("promise", promise);
console.log("bye");