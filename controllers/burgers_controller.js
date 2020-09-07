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

router.post("/burgers", (req, res) => {
    burger.create(["burger_name"], req.body.name, (result) => {
        res.json({ id: result.id});
    });
});

router.post("/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    burger.update({devoured: req.body.devoured}, condition, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();            
        }
        res.status(200).end();
    });
});

module.exports = router;