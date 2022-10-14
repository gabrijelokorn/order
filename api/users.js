const express = require("express");
const pool = require("./mysqlLib");
const users = express();

users.get("/listUsers", (req, res) => {

    const listUsersQuery = "SELECT * from Users";
    pool.query(listUsersQuery, (err, rows) => {
        if (err) {
            console.log("In /listUsers, Database error:", err);
            res.sendStatus(500);
        } else {
            console.log("In /listUsers,", rows);
            res.json(rows);
            res.end();
        }
        res.end();
    });
});

users.get("/profile", (req, res) => {
    console.log("In /profile,");
    const profileUserName = req.query.userName;
    const getUserQuery = "SELECT * from Users where userName = ?"
    pool.query(getUserQuery, profileUserName, (err, rows) => {
        if (err) {
            console.log("In /profile, Database error:", err);
            res.sendStatus(500);
        } else {
            console.log("In /profile,", rows);
            res.json(rows);
            res.end();
        }
        res.end();
        
    });
})

module.exports = users;