const express = require("express");
const pool = require("./mysqlLib");

const auth = express();

auth.get("/register", (req, res) => {
    console.log(req.session);
    res.end();
});

auth.post("/login", (req, res, next) => {
    const clientReq = req.body;
    const loginQuery = 'SELECT uid as UID, password as PWD from Users where email = ?';
    pool.query(loginQuery, clientReq.email, (err, rows) => {
        if (err) {
            console.log("Database error:", err);
        } else {
            if (rows.length == 1) {
                if (clientReq.password == rows[0].PWD) {
                    req.session.uid = rows[0].UID;
                    console.log("Correct password");
                    res.json({"loginMssg": "LoginSuccesful"});
                } else {
                    console.log("Incorrect password");
                    res.json({"loginMssg": "Incorrect Password"});
                }
            } else if (rows.length == 0) {
                console.log("Found 0 matches for", clientReq.email);
                res.json({"loginMssg": "Mail does not exist"});
            } else {
                console.log("Dababase error: Found", rows.length, "matches for one email!");
                res.sendStatus(500);
            }
        }
    });
});


auth.get("/logout", (req, res) => {
    console.log("Logging out and destroying cookie!");
    req.session.destroy();
    res.redirect('/test');
});


module.exports = auth;