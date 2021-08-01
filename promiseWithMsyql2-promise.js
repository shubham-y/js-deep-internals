const mysql = require("mysql2/promise");

async function getCustomer(){
    let connection;

    try{
        connection = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "",
                database: "test"
            }
        );
        let result = await connection.query("SELECT * FROM customers LIMIT 1");
        console.log(result[0]);
        result = await connection.query("SELECT * FROM customers WHERE age=?", [23]);
        console.log(result[0]);
    } catch (error) {
        console.log(error.message);
    }

    connection?.end();
}

getCustomer();