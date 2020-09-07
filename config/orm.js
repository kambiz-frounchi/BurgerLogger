const connection = require ("./connection");

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(`${key}=${value}`);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
};

const orm = {
    selectAll: (table) => {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT * FROM ${table}`;
            connection.query(queryString, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    },
    insertOne: (table, cols, vals) => {
        return new Promise((resolve, reject) => {
            const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${vals.toString()})`;
            connection.query(queryString, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });        
    },
    updateOne: (table, objColVals, condition) => {
        return new Promise((resolve, reject) => {
            const queryString = `UPDATE ${table} SET (${objToSql(objColVals)}) WHERE (${condition})`;
            connection.query(queryString, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });   
    }
}

module.exports = orm;


