const express = require("express");
const pool = require("./mysqlLib");

const auth = express.Router();

auth.get("/register", (req, res) => {
    res.end();
});

auth.post("/login", (req, res, next) => {
    const clentLoginRequestBody = req.body;
    const loginQuery = 'SELECT uid as UID, userName as UN, password as PWD from Users where email = ?';
    pool.query(loginQuery, clentLoginRequestBody.email, (err, rows) => {
        if (err) {
            console.log("In /login, Database error:", err);
            res.sendStatus(500);
        } else {
            if (rows.length == 1) {
                if (clentLoginRequestBody.password == rows[0].PWD) {
                    req.session.uid = rows[0].UID;
                    console.log("In /login,", rows[0].UN, "logged in.");
                    res.json(
                        {
                            "uid": rows[0].UID,
                            "userName": rows[0].UN,
                        }
                    );
                    console.log(req.session.id, ":", req.session);
                    res.end();
                } else {
                    console.log("In /login, Incorrect password");
                    res.json({ "loginMssg": "Incorrect Password" });
                }
            } else if (rows.length == 0) {
                console.log("In /login, Found 0 matches for", clentLoginRequestBody.email);
                res.json({ "loginMssg": "Mail does not exist" });
            } else {
                console.log("In /login, Dababase error: Found", rows.length, "matches for one email!");
                res.sendStatus(500);
            }
            res.end();
        }
        res.end();
    });
});


auth.get("/logout", (req, res) => {
    console.log("Logging out and destroying cookie!");
    req.session.destroy();
    res.redirect("/lobby/login");
});


module.exports = auth;