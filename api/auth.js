const express = require("express");

const auth = express();

auth.post("/register", (req, res) => {
    res.end();
});

auth.post("/login", (req, res) => {
    res.end();
});

auth.get("/logout", (req, res) => {
    res.send("logged out");
});


module.exports = auth;