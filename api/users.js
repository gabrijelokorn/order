const express = require("express");
const pool = require("./mysqlLib");
const users = express.Router();

users.get("/listUsers", (req, res) => {

    const list_users_request_sql_query = "SELECT * from Users";
    pool.query(list_users_request_sql_query, (err, rows) => {
        if (err) {
            console.log("Database error (in /api/users.js/listUsers):", err);
            res.sendStatus(500);
        } else {
            res.json(rows);
        }
    });
});

users.get("/profile", (req, res) => {
    const profile_request_client_query = req.query;
    console.log(profile_request_client_query.userName);
    const profile_request_sql_query = "SELECT * from Users where userName = ?"
    pool.query(profile_request_sql_query, profile_request_client_query.un, (err, rows) => {
        if (err) {
            console.log("Database error (in /api/users.js/profile):", err);
            res.sendStatus(500);
        } else {
            res.json(rows);
        }
    });
})

module.exports = users;