const express = require("express");
const burger = require("../models/burgers");

const router = express.Router();

router.get("/", (req, res) => {
    burger.findAll((data) => {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    console.log(req.body);
    try {
        burger.create(["burger_name"], req.body.name, (result) => {
            res.json({ id: result.id});
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log(condition);
    try {
        burger.update({devoured: req.body.devoured ? 1 : 0}, condition, (result) => {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();            
            }
            res.status(200).end();
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

module.exports = router;