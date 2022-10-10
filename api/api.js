const express = require("express");

const users = require("./users");

const api = express.Router();


api.use("/users", users);


module.exports = api;