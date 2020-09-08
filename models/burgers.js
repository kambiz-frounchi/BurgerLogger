const orm = require("../config/orm");

const burger = {
    findAll: (cb) => {
        orm.selectAll("burgers")
        .then((results) => {
            cb(results);
        })
        .catch ((err) => {
            throw err;
        });
    },
    create: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals)
        .then((results) => {
            cb(results);
        })
        .catch ((err) => {
            throw err;
        });        
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition)
        .then((results) => {
            cb(results);
        })
        .catch ((err) => {
            throw err;
        });        
    }
}

module.exports = burger;