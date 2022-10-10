const express = require("express");
const users = express();

users.get("/listUsers", (req, res) => {
    res.end();
});


module.exports = users;