const express = require("express");
const pool = require("./mysqlLib");

const auth = express.Router();

auth.get("/register", (req, res) => {
    res.end();
});

auth.post("/login", (req, res, next) => {
    const login_request_client_body = req.body;
    const login_request_sql_query = 'SELECT uid as u_uid, userName as u_un, password as u_pwd from Users where email = ?';
    pool.query(login_request_sql_query, login_request_client_body.email, (err, rows) => {
        if (err) {
            console.log("Database error (in /api/auth.js/login):", err);
            res.json({ "error": err });
        } else if (rows.length > 0) {
            if (login_request_client_body.password == rows[0].u_pwd) {
                req.session.uid = rows[0].u_uid;
                res.json(
                    {
                        "u_un": rows[0].u_un,
                    });
                const record_login_sql_query = `INSERT INTO Statistics (uid, loginDate) VALUES ('${rows[0].u_uid}', sysdate()) `;
                pool.query(record_login_sql_query, (err) => {
                    if (err) {
                        console.log("Database error (in /api/auth.js/recordLogin):", err);
                    }
                });
            }
        } else {
            res.json(
                {
                    "error": "Login failed"
                });
        }
    });


});


auth.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/lobby/login");
});


module.exports = auth;