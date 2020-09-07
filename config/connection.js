const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    "password": "Kambiz83",
    database: "burgers_db"
});


connection.connect((err) => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        throw err;
    }

    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;