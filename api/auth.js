const express = require("express");

const auth = express();

auth.post("/register", (req, res) => {
    res.end();
});

auth.post("/login", (req, res) => {
    res.end();
});


auth.get("/logout", (req, res) => {
    req.session.uid = 0;
    res.redirect('/test');
});


module.exports = auth;