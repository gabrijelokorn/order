const express = require("express");
const pool = require("./mysqlLib");

const people = express.Router();

people.post("/add", (req, res) => {
    res.json(JSON.stringify(req.body));
});

people.get("/remove", (req, res) => {
    res.send(req.body);
});


module.exports = people;