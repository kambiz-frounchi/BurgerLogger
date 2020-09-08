const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

connection.connect((err) => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        throw err;
    }

    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;